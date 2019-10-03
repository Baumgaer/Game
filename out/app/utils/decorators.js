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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHAvdXRpbHMvZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQiwwQ0FBdUQ7QUFDdkQsd0RBQW1EO0FBSW5ELDhEQUF3RjtBQUN4RixrREFBa0U7QUFDbEUsb0RBQTRGO0FBRTVGLCtDQVlzQjtBQWlCdEIsU0FBZ0IsT0FBTyxDQUFDLFNBQXlCLEVBQUU7SUFDL0MsT0FBTyxDQUFDLE1BQVcsRUFBRSxHQUFvQixFQUFFLEVBQUU7UUFDekMsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pDLHFDQUF5QixDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNoRSxxQ0FBeUIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwRSxDQUFDLENBQUM7QUFDTixDQUFDO0FBTkQsMEJBTUM7QUFVRCxTQUFnQixRQUFRLENBQUMsU0FBMEIsRUFBRTtJQUNqRCxPQUFPLENBQUMsTUFBVyxFQUFFLEdBQW9CLEVBQUUsRUFBRTtRQUN6QyxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMscUNBQXlCLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2xFLHFDQUF5QixDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JFLENBQUMsQ0FBQztBQUNOLENBQUM7QUFORCw0QkFNQztBQWVELFNBQWdCLFNBQVMsQ0FBQyxRQUEyQixFQUFFLE1BQXlCO0lBQzVFLE9BQU8sQ0FBQyxNQUFXLEVBQUUsR0FBb0IsRUFBRSxFQUFFO1FBQ3pDLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztR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