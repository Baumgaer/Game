"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const util_1 = require("~bdo/utils/util");
const environment_1 = require("~bdo/utils/environment");
const Binding_1 = require("~bdo/lib/Binding");
const metadata_1 = require("~bdo/utils/metadata");
const framework_1 = require("~bdo/utils/framework");
const lodash_1 = require("lodash");
const type_graphql_1 = require("type-graphql");
function watched(params = {}) {
    return (target, key) => {
        const stringKey = key.toString();
        framework_1.beforePropertyDescriptors(target, stringKey, "definedWatchers");
        framework_1.createDecoratorDescriptor(target, stringKey, "Watched", params);
    };
}
exports.watched = watched;
function property(params = {}) {
    return (target, key) => {
        const stringKey = key.toString();
        framework_1.beforePropertyDescriptors(target, stringKey, "definedProperties");
        framework_1.createDecoratorDescriptor(target, stringKey, "Property", params);
    };
}
exports.property = property;
function attribute(typeFunc, params) {
    return (target, key) => {
        const stringKey = key.toString();
        if (typeFunc && !(typeFunc instanceof Function) && !params)
            params = typeFunc;
        if (!params)
            params = {};
        if (typeFunc instanceof Function && params)
            type_graphql_1.Field(typeFunc, params)(target, key);
        else if (typeFunc instanceof Function)
            type_graphql_1.Field(typeFunc)(target, key);
        else if (params)
            type_graphql_1.Field(params)(target, key);
        else
            type_graphql_1.Field()(target, key);
        framework_1.beforePropertyDescriptors(target, stringKey, "definedAttributes");
        framework_1.createDecoratorDescriptor(target, stringKey, "Attribute", params);
    };
}
exports.attribute = attribute;
function baseConstructor(name, options, constParamsIndex = 0) {
    return (ctor) => {
        const prototype = Object.getPrototypeOf(ctor);
        if (prototype.name === "BaseConstructor") {
            Object.setPrototypeOf(ctor, Object.getPrototypeOf(prototype));
        }
        if (name && (typeof name === "number"))
            constParamsIndex = name;
        if (name && (typeof name === "object"))
            options = name;
        if (name && ((typeof name === "object") || (typeof name === "number")))
            name = undefined;
        if (options && (typeof options === "number"))
            constParamsIndex = options;
        if (options && (typeof options === "number"))
            options = undefined;
        if ("isBDOModel" in ctor) {
            if (name && (typeof name === "string") && options && (typeof options === "object")) {
                type_graphql_1.ObjectType(name, options)(ctor);
            }
            else if (name && (typeof name === "string")) {
                type_graphql_1.ObjectType(name)(ctor);
            }
            else if (options && (typeof options === "object")) {
                type_graphql_1.ObjectType(options)(ctor);
            }
            else
                type_graphql_1.ObjectType()(ctor);
            if (options && (typeof options === "object") && options.collectionName) {
                metadata_1.defineMetadata(ctor, "collectionName", options.collectionName);
            }
        }
        if (options && (typeof options === "object" && options.isAbstract))
            return ctor;
        class BaseConstructor extends ctor {
            constructor(...params) {
                super(...params);
                this.collectionName = BaseConstructor.collectionName;
                let constParams = params[constParamsIndex];
                if (!(constParams instanceof Object))
                    constParams = {};
                metadata_1.defineMetadata(this, "normalFunctionality", true);
                let defaultSettings = metadata_1.getMetadata(this, "defaultSettings") || {};
                defaultSettings = Object.assign(defaultSettings, constParams);
                if (lodash_1.isFunction(this.getNamespacedStorage)) {
                    const id = constParams.id || defaultSettings.id;
                    const cachedSettings = this.getNamespacedStorage("*", "id", id) || {};
                    for (const key in cachedSettings) {
                        if (cachedSettings.hasOwnProperty(key)) {
                            const element = defaultSettings[key];
                            if (element instanceof Binding_1.Binding) {
                                element.setValue(cachedSettings[key]);
                            }
                            else
                                defaultSettings[key] = cachedSettings[key];
                        }
                    }
                }
                Object.assign(this, defaultSettings);
                metadata_1.defineMetadata(this, "constructionComplete", true);
                if (lodash_1.isFunction(this.constructedCallback))
                    this.constructedCallback(...params);
            }
        }
        BaseConstructor.className = Object.getPrototypeOf(BaseConstructor).name;
        BaseConstructor.graphQLType = ctor;
        BaseConstructor.collectionName = metadata_1.getMetadata(BaseConstructor, "collectionName");
        if (environment_1.isBrowser() && ctor.isBaseComponent) {
            customElements.define(util_1.pascalCase2kebabCase(ctor.name), BaseConstructor, {
                extends: BaseConstructor.extends
            });
        }
        return BaseConstructor;
    };
}
exports.baseConstructor = baseConstructor;
exports.query = type_graphql_1.Query;
exports.arg = type_graphql_1.Arg;
exports.args = type_graphql_1.Args;
exports.resolver = type_graphql_1.Resolver;
exports.root = type_graphql_1.Root;
exports.mutation = type_graphql_1.Mutation;
exports.subscription = type_graphql_1.Subscription;
exports.pubSub = type_graphql_1.PubSub;
exports.inputType = type_graphql_1.InputType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHAvdXRpbHMvZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQiwwQ0FBdUQ7QUFDdkQsd0RBQW1EO0FBSW5ELDhDQUEyQztBQUMzQyxrREFBa0U7QUFDbEUsb0RBQTRGO0FBQzVGLG1DQUFvQztBQUdwQywrQ0FZc0I7QUEyQnRCLFNBQWdCLE9BQU8sQ0FBQyxTQUF5QixFQUFFO0lBQy9DLE9BQU8sQ0FBQyxNQUFXLEVBQUUsR0FBb0IsRUFBRSxFQUFFO1FBQ3pDLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQyxxQ0FBeUIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDaEUscUNBQXlCLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDcEUsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQU5ELDBCQU1DO0FBVUQsU0FBZ0IsUUFBUSxDQUFDLFNBQTBCLEVBQUU7SUFDakQsT0FBTyxDQUFDLE1BQVcsRUFBRSxHQUFvQixFQUFFLEVBQUU7UUFDekMsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pDLHFDQUF5QixDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUNsRSxxQ0FBeUIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRSxDQUFDLENBQUM7QUFDTixDQUFDO0FBTkQsNEJBTUM7QUFlRCxTQUFnQixTQUFTLENBQUMsUUFBMkIsRUFBRSxNQUF5QjtJQUM1RSxPQUFPLENBQUMsTUFBVyxFQUFFLEdBQW9CLEVBQUUsRUFBRTtRQUN6QyxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFB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