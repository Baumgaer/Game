import 'reflect-metadata';
import { pascalCase2kebabCase } from "~bdo/utils/util";
import { isBrowser } from "~bdo/utils/environment";
import { IPropertyParams } from "~bdo/lib/Property";
import { IAttributeParams } from "~bdo/lib/Attribute";
import { IWatchedParams } from "~bdo/lib/Watched";
import { baseConstructorFactory, IBaseConstructorOpts } from "~bdo/lib/BaseConstructor";
import { defineMetadata, getMetadata } from "~bdo/utils/metadata";
import { beforePropertyDescriptors, createDecoratorDescriptor } from "~bdo/utils/framework";
import { ReturnTypeFunc } from "type-graphql/dist/decorators/types";
import {
    Field,
    ObjectType,
    Query,
    Arg,
    Args,
    Resolver,
    Root,
    Subscription,
    Mutation,
    PubSub,
    InputType
} from "type-graphql";

type FuncOrAttrParams = ReturnTypeFunc | IAttributeParams;
type nameOrOptsOrIndex = string | IBaseConstructorOpts | number;
type optsOrIndex = IBaseConstructorOpts | number;

/**
 * reacts on several types of changes of the property / attribute.
 * If no function name is given, it will look for on<PropertyName><Action>.
 *
 * Example: The property is named test and is of type string, then the
 * reactionFunction is called onTestChange.
 *
 * @export
 * @param {IndexStructure} params
 * @returns {PropertyDecorator}
 */
export function watched(params: IWatchedParams = {}): PropertyDecorator {
    return (target: any, key: string | symbol) => {
        const stringKey = key.toString();
        beforePropertyDescriptors(target, stringKey, "definedWatchers");
        createDecoratorDescriptor(target, stringKey, "Watched", params);
    };
}

/**
 * Marks an component property as a real property and avoids setting the
 * corresponding attribute. Also it maintains the "properties" values of a
 * component.
 *
 * @export
 * @returns {PropertyDecorator}
 */
export function property(params: IPropertyParams = {}): PropertyDecorator {
    return (target: any, key: string | symbol) => {
        const stringKey = key.toString();
        beforePropertyDescriptors(target, stringKey, "definedProperties");
        createDecoratorDescriptor(target, stringKey, "Property", params);
    };
}

/**
 * Marks a component property as a real attribute and reflects the set values
 * to the attribute dom even it is not a native attribute.
 *
 * If it is a BDOModel it marks the property as an attribute which should be
 * send to server or saved in database.
 *
 * It also do some other logic like data flow, caching and so on. For more
 * information read the property comments.
 *
 * @export
 * @returns {PropertyDecorator}
 */
export function attribute(typeFunc?: FuncOrAttrParams, params?: IAttributeParams): PropertyDecorator {
    return (target: any, key: string | symbol) => {
        const stringKey = key.toString();
        if (typeFunc && !(typeFunc instanceof Function) && !params) params = typeFunc;
        if (!params) params = {};

        // Decide which Field should be used
        if (typeFunc instanceof Function && params) Field(typeFunc, params)(target, key);
        else if (typeFunc instanceof Function) Field(typeFunc)(target, key);
        else if (params) Field(params)(target, key);
        else Field()(target, key);
        beforePropertyDescriptors(target, stringKey, "definedAttributes");
        createDecoratorDescriptor(target, stringKey, "Attribute", params);
    };
}

/**
 * Constructs an object with its constParams with position constParamsIndex.
 * It also defines an graphQL object type if it is a BDOModel
 *
 * @export
 * @param {number} [constParamsIndex=0] Position of parameters which are used to initialize the object
 * @returns
 */
export function baseConstructor(name?: nameOrOptsOrIndex, options?: optsOrIndex, constParamsIndex: number = 0) {

    return (ctor: any) => {
        const prototype = Object.getPrototypeOf(ctor);
        if (prototype.name === "BaseConstructor") Object.setPrototypeOf(ctor, Object.getPrototypeOf(prototype));

        // Determine param types
        if (name && (typeof name === "number")) constParamsIndex = name;
        if (name && (typeof name === "object")) options = name;
        if (name && ((typeof name === "object") || (typeof name === "number"))) name = undefined;
        if (options && (typeof options === "number")) constParamsIndex = options;
        if (options && (typeof options === "number")) options = undefined;

        if ("isBDOModel" in ctor) {
            // Decide which ObjectType to use
            if (name && (typeof name === "string") && options && (typeof options === "object")) {
                ObjectType(name, options)(ctor);
            } else if (name && (typeof name === "string")) {
                ObjectType(name)(ctor);
            } else if (options && (typeof options === "object")) {
                ObjectType(options)(ctor);
            } else ObjectType()(ctor);

            // set collection and database name
            if (options && (typeof options === "object")) {
                const prevCollectionName = getMetadata(ctor, "collectionName");
                const prevDatabaseName = getMetadata(ctor, "databaseName");
                defineMetadata(ctor, "collectionName", options.collectionName || prevCollectionName || "default");
                defineMetadata(ctor, "databaseName", options.databaseName || prevDatabaseName || "default");
            }
        }
        if (options && (typeof options === "object" && options.isAbstract)) return ctor;

        const BaseConstructor = baseConstructorFactory(ctor, constParamsIndex);
        // Register custom Element
        if (isBrowser() && ctor.isBaseComponent) {
            customElements.define(pascalCase2kebabCase(ctor.name), BaseConstructor, {
                extends: BaseConstructor.extends
            });
        }
        return BaseConstructor;
    };
}

export let query = Query;
export let arg = Arg;
export let args = Args;
export let resolver = Resolver;
export let root = Root;
export let mutation = Mutation;
export let subscription = Subscription;
export let pubSub = PubSub;
export let inputType = InputType;
