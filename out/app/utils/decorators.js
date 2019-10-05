"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const util_1 = require("~bdo/utils/util");
const environment_1 = require("~bdo/utils/environment");
const BaseConstructor_1 = require("~bdo/lib/BaseConstructor");
const metadata_1 = require("~bdo/utils/metadata");
const framework_1 = require("~bdo/utils/framework");
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
        if (framework_1.isBaseConstructor(prototype))
            Object.setPrototypeOf(ctor, Object.getPrototypeOf(prototype));
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
            if (options && (typeof options === "object")) {
                const prevCollectionName = metadata_1.getMetadata(ctor, "collectionName");
                const prevDatabaseName = metadata_1.getMetadata(ctor, "databaseName");
                metadata_1.defineMetadata(ctor, "collectionName", options.collectionName || prevCollectionName || "default");
                metadata_1.defineMetadata(ctor, "databaseName", options.databaseName || prevDatabaseName || "default");
            }
        }
        if (options && (typeof options === "object" && options.isAbstract))
            return ctor;
        const BaseConstructor = BaseConstructor_1.baseConstructorFactory(ctor, constParamsIndex);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHAvdXRpbHMvZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQiwwQ0FBdUQ7QUFDdkQsd0RBQW1EO0FBSW5ELDhEQUF3RjtBQUN4RixrREFBa0U7QUFDbEUsb0RBQStHO0FBRS9HLCtDQVlzQjtBQWlCdEIsU0FBZ0IsT0FBTyxDQUFDLFNBQXlCLEVBQUU7SUFDL0MsT0FBTyxDQUFDLE1BQVcsRUFBRSxHQUFvQixFQUFFLEVBQUU7UUFDekMsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pDLHFDQUF5QixDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNoRSxxQ0FBeUIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwRSxDQUFDLENBQUM7QUFDTixDQUFDO0FBTkQsMEJBTUM7QUFVRCxTQUFnQixRQUFRLENBQUMsU0FBMEIsRUFBRTtJQUNqRCxPQUFPLENBQUMsTUFBVyxFQUFFLEdBQW9CLEVBQUUsRUFBRTtRQUN6QyxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMscUNBQXlCLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2xFLHFDQUF5QixDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JFLENBQUMsQ0FBQztBQUNOLENBQUM7QUFORCw0QkFNQztBQWVELFNBQWdCLFNBQVMsQ0FBQyxRQUEyQixFQUFFLE1BQXlCO0lBQzVFLE9BQU8sQ0FBQyxNQUFXLEVBQUUsR0FBb0IsRUFBRSxFQUFFO1FBQ3pDLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztR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