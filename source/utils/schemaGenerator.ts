import * as path from "path";
import { writeFileSync } from "graceful-fs";
import { path as rootPath } from "app-root-path";
import { toTSProcessablePath } from "./projectStructure";
import {
    Declaration,
    PropertyDeclaration,
    Decorator,
    isClassDeclaration,
    isCallExpression,
    isIdentifier,
    isObjectLiteralExpression,
    isPropertyAssignment,
    isNumericLiteral,
    isStringLiteral,
    SyntaxKind,
    isArrayLiteralExpression,
    isPropertyDeclaration,
    Type,
    IndexKind,
    TypeReference,
    parseConfigFileTextToJson,
    parseJsonConfigFileContent,
    createProgram,
    sys,
    Program,
    TypeChecker
} from "typescript";

const serverModelsPath = path.resolve(rootPath, "source", "app", "server", "models");
const clientModelsPath = path.resolve(rootPath, "source", "app", "client", "ts", "models");
const definitions: Record<string, Record<string, any>> = {};

let program!: Program;
let typeChecker!: TypeChecker;

/**
 * Checks if a definition exists and if not it will be created
 *
 * @param name The unique name of the definition
 * @param settingName A name of a setting on the definition
 * @param value The value of the setting on the definition
 * @returns true if definition already exists and false else
 */
function declareDefinition(name: string, settingName?: string, value?: any) {
    const setSetting = () => {
        if (settingName !== undefined && value !== undefined) {
            definitions[name][settingName] = value;
        }
    };

    if (!(name in definitions)) {
        definitions[name] = {};
        setSetting();
        return false;
    } else {
        setSetting();
        return true;
    }
}

/**
 * Adds essential properties to the schema to be an object
 *
 * @param name The name of the definition to turn into an object
 */
function transformDefinitionToObjectType(name: string) {
    if (definitions[name].properties) return;
    declareDefinition(name, "type", "object");
    declareDefinition(name, "properties", {});
}

/**
 * Declares a new attribute with eventual settings
 *
 * @param definitionName The name of the definition
 * @param attributeName The name of the attribute in the definition
 * @param settingName The name of the setting which was set in the decorator of the attribute
 * @param value The value of the setting
 */
function declareAttribute(definitionName: string, attributeName: string, settingName?: string, value?: any) {
    if (!definitions[definitionName].properties) definitions[definitionName].properties = {};
    if (!definitions[definitionName].properties[attributeName]) definitions[definitionName].properties[attributeName] = {};
    if (settingName !== undefined && value !== undefined) definitions[definitionName].properties[attributeName][settingName] = value;
}

/**
 * Collects settings within an attribute decorator and assigns them to the
 * corresponding property in the schema.
 *
 * @param definitionName The name of the definition
 * @param attribute The name of the attribute in the definition
 * @param decorator The decorator node of the attribute which contains all settings
 */
function collectAttributeSettings(definitionName: string, attribute: PropertyDeclaration, decorator: Decorator) {
    if (!isCallExpression(decorator.expression)) return;
    const attributeName = attribute.name.getText();
    declareAttribute(definitionName, attributeName);

    const settings = decorator.expression.arguments[0];
    if (!settings || !isObjectLiteralExpression(settings)) return;

    for (const property of settings.properties) {
        if (!isPropertyAssignment(property)) continue;
        const initializer = property.initializer;
        let value: any;
        if (isStringLiteral(initializer)) value = initializer.text;
        else if (isNumericLiteral(initializer)) value = Number(initializer.getText());
        else if ([SyntaxKind.TrueKeyword, SyntaxKind.FalseKeyword].includes(initializer.kind)) value = Boolean(initializer.getText() === "true");
        else if (isArrayLiteralExpression(initializer)) value = JSON.parse(initializer.getText());
        else value = initializer.getText();
        declareAttribute(definitionName, attributeName, property.name.getText(), value);
    }
}

/**
 * Determines all types recursively for the given attribute.
 *
 * @param definitionName The name of the definition
 * @param attribute The node of the attribute in the definition
 * @param type The type of the attribute
 * @param setterFunction An alternative function which could be called instead of declaring the attribute
 */
function determineType(definitionName: string, attribute: PropertyDeclaration, type: Type, setterFunction?: (entries: Array<[string, any]>) => void) {

    // undefined doesn't matter...
    if (typeChecker.typeToString(type) === "undefined") return;
    // Get only those union types which have at least two not undefined types
    if (type.isUnion() && attribute.questionToken && type.types.length <= 2) {
        for (const theType of type.types) {
            if (typeChecker.typeToString(theType) !== "undefined") {
                type = theType;
                break;
            }
        }
    }

    let isBooleanOnly = false;
    if (type.isUnion()) {
        isBooleanOnly = type.types.every((theType) => {
            return ["undefined", "true", "false"].includes(typeChecker.typeToString(theType));
        });
    }

    const attributeName = attribute.name.getText();
    const primitiveTypes = ["string", "number", "boolean", "true", "false", "null"];
    const typeName = typeChecker.typeToString(type);

    // Add to required properties if there is no undefined in type
    if (!(attribute.questionToken || type.isUnion() && type.types.map((theType) => typeChecker.typeToString(theType)).includes("undefined"))) {
        if (!definitions[definitionName].required) declareDefinition(definitionName, "required", []);
        if (!definitions[definitionName].required.includes(attributeName)) definitions[definitionName].required.push(attributeName);
    }

    const addReference = (thyTypeName: string) => {
        if (setterFunction) {
            setterFunction([["$ref", `#/definitions/${thyTypeName}`]]);
        } else declareAttribute(definitionName, attributeName, "$ref", `#/definitions/${thyTypeName}`);
    };

    if (primitiveTypes.includes(typeName) || isBooleanOnly) {
        let typeToSet = typeName;
        if (isBooleanOnly) typeToSet = "boolean";
        if (setterFunction) {
            setterFunction([["type", typeToSet]]);
        } else declareAttribute(definitionName, attributeName, "type", typeToSet);
    } else if (typeName === "Date") {
        if (setterFunction) {
            setterFunction([["type", "string"], ["format", "date-time"]]);
        } else {
            declareAttribute(definitionName, attributeName, "type", "string");
            declareAttribute(definitionName, attributeName, "format", "date-time");
        }
    } else if (type.isUnion()) {
        const anyOf: Record<string, any>[] = [];
        for (const unionType of type.types) {
            determineType(definitionName, attribute, unionType, (entries) => {
                // eslint-disable-next-line
                // @ts-ignore
                const typeObject = Object.fromEntries(entries);
                if (["true", "false"].includes(typeObject.type)) typeObject.type = "boolean";
                if (anyOf.some((anyType) => anyType.type === "boolean")) return;
                anyOf.push(typeObject);
            });
        }
        if (setterFunction) {
            setterFunction([["anyOf", anyOf]]);
        } else declareAttribute(definitionName, attributeName, "anyOf", anyOf);
    } else if (type.isIntersection()) {
        const typeName = type.types.map((aType) => aType.symbol.getName()).sort().join("") + "Intersection";
        if (!(typeName in definitions)) buildDefinition(typeName, attribute);
        addReference(typeName);
    } else if (type.symbol) {
        if (typeChecker.getIndexTypeOfType(type, IndexKind.Number)) {
            const items: Record<string, any>[] = [];
            const types = typeChecker.getTypeArguments(type as TypeReference);
            for (const arrayType of types) {
                determineType(definitionName, attribute, arrayType, (entries) => {
                    // eslint-disable-next-line
                    // @ts-ignore
                    items.push(Object.fromEntries(entries));
                });
            }
            if (setterFunction) {
                setterFunction([["type", "array"], ["items", items]]);
            } else {
                declareAttribute(definitionName, attributeName, "type", "array");
                declareAttribute(definitionName, attributeName, "items", items);
            }
        } else if (type.symbol.getName() in definitions) {
            addReference(type.symbol.getName());
        } else {
            buildDefinition(type.symbol.getName(), type.symbol.valueDeclaration);
            addReference(type.symbol.getName());
        }
    }
}

/**
 * Adds a new (type) definition to the schema
 *
 * @param name Name of the definition to build
 * @param node The node to get information from to build the definition
 */
function buildDefinition(name: string, node: Declaration) {
    if (declareDefinition(name)) return;
    declareDefinition(name, "additionalProperties", false);
    const properties = typeChecker.getPropertiesOfType(typeChecker.getTypeAtLocation(node));
    for (const property of properties) {
        const decorators = property.valueDeclaration && property.valueDeclaration.decorators;
        if (!decorators) continue;

        for (const decorator of decorators) {
            if (!isCallExpression(decorator.expression) || !isIdentifier(decorator.expression.expression)) return;
            const isAttribute = decorator.expression.expression.getText() === "attribute";
            if (!isAttribute || !isPropertyDeclaration(property.valueDeclaration)) continue;
            transformDefinitionToObjectType(name);
            determineType(name, property.valueDeclaration, typeChecker.getTypeAtLocation(property.valueDeclaration));
            collectAttributeSettings(name, property.valueDeclaration, decorator);
        }
    }
}

/**
 * Creates a typescript program depending on the given config.
 *
 * @param configFileName The path to the tsConfig.json which creates the program
 * @returns the typescript compiler program
 */
function programFromConfig(configFileName: string) {
    const configFile = sys.readFile(configFileName);
    if (!configFile) throw new Error("No configuration found");

    // basically a copy of https://github.com/Microsoft/TypeScript/blob/3663d400270ccae8b69cbeeded8ffdc8fa12d7ad/src/compiler/tsc.ts -> parseConfigFile
    const result = parseConfigFileTextToJson(configFileName, configFile);
    const configObject = result.config;

    // Normalize configuration for parsing schema only
    const configParseResult = parseJsonConfigFileContent(configObject, sys, path.dirname(configFileName), {}, path.basename(configFileName));
    const options = configParseResult.options;
    options.noEmit = true;
    delete options.out;
    delete options.outDir;
    delete options.outFile;
    delete options.declaration;
    delete options.declarationDir;
    delete options.declarationMap;

    const program = createProgram({
        rootNames: configParseResult.fileNames,
        options,
        projectReferences: configParseResult.projectReferences
    });
    return program;
}

/**
 * Creates a JSON schema from models with properties which are decorated with an @attribute decorator
 *
 * @param tsConfigFile Path to tsConfig.json
 * @param outPutPath path to output the schema to
 */
export function buildSchema(tsConfigFile: string, outPutPath: string) {
    program = programFromConfig(tsConfigFile);
    typeChecker = program.getTypeChecker();

    const sourceFiles = program.getSourceFiles();
    for (const sourceFile of sourceFiles) {
        const isServerModel = sourceFile.fileName.startsWith(toTSProcessablePath(serverModelsPath));
        const isClientModel = sourceFile.fileName.startsWith(toTSProcessablePath(clientModelsPath));
        if (!isServerModel && !isClientModel) continue;

        sourceFile.forEachChild((sourceFileChild) => {
            if (isClassDeclaration(sourceFileChild) && sourceFileChild.name) {
                const className = sourceFileChild.name.getText();
                buildDefinition(className, sourceFileChild);
            }
        });
    }

    const schema = { "$schema": "http://json-schema.org/draft-07/schema#", definitions };
    writeFileSync(outPutPath, JSON.stringify(schema), { encoding: "utf-8" });
}
