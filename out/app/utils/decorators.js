"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const Binding_1 = require("~bdo/lib/Binding");
const util_1 = require("~bdo/utils/util");
const environment_1 = require("~bdo/utils/environment");
const Property_1 = require("~bdo/lib/Property");
const Attribute_1 = require("~bdo/lib/Attribute");
const Watched_1 = require("~bdo/lib/Watched");
const metadata_1 = require("~bdo/utils/metadata");
const type_graphql_1 = require("type-graphql");
function watched(params = {}) {
    return (target, key) => {
        const propDesc = Reflect.getOwnPropertyDescriptor(target, key);
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return getter(this, key, propDesc);
            },
            set: function set(newVal) {
                const stringKey = key.toString();
                const mData = metadata_1.getWildcardMetadata(this, stringKey);
                const prop = new Watched_1.Watched(this, stringKey, params);
                if (mData instanceof Attribute_1.Attribute || mData instanceof Property_1.Property) {
                    prop.setSubObject(mData);
                    metadata_1.defineWildcardMetadata(this, stringKey, prop);
                }
                else if (!mData)
                    metadata_1.defineWildcardMetadata(this, stringKey, prop);
                setter(this, key, newVal, propDesc);
            },
            enumerable: true,
            configurable: true
        });
    };
}
exports.watched = watched;
function property(params = {}) {
    return (target, key) => {
        const propDesc = beforePropertyDescriptors(target, key.toString(), "definedProperties");
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return getter(this, key, propDesc);
            },
            set: function set(newVal) {
                const stringKey = key.toString();
                const mData = metadata_1.getWildcardMetadata(this, stringKey);
                const prop = new Property_1.Property(this, stringKey, params);
                if (!mData) {
                    metadata_1.defineWildcardMetadata(this, stringKey, prop);
                }
                else if (mData instanceof Watched_1.Watched && !mData.subObject)
                    mData.setSubObject(prop);
                if (!(mData instanceof Watched_1.Watched)) {
                    setter(this, key, newVal, propDesc);
                }
                else if (propDesc && propDesc.set)
                    propDesc.set.call(this, newVal);
            },
            enumerable: true,
            configurable: true
        });
    };
}
exports.property = property;
function attribute(typeFunc, params) {
    return (target, key) => {
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
        const propDesc = beforePropertyDescriptors(target, key.toString(), "definedAttributes");
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return getter(this, key, propDesc);
            },
            set: function set(newVal) {
                const stringKey = key.toString();
                const mData = metadata_1.getWildcardMetadata(this, stringKey);
                const attr = new Attribute_1.Attribute(this, stringKey, params);
                if (!mData) {
                    metadata_1.defineWildcardMetadata(this, stringKey, attr);
                }
                else if (mData instanceof Watched_1.Watched && !mData.subObject)
                    mData.setSubObject(attr);
                if (!(mData instanceof Watched_1.Watched)) {
                    setter(this, key, newVal, propDesc);
                }
                else if (propDesc && propDesc.set)
                    propDesc.set.call(this, newVal);
            },
            enumerable: true,
            configurable: true
        });
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
                if ("getNamespacedStorage" in this) {
                    const cachedSettings = this.getNamespacedStorage("*", "id", constParams.id);
                    defaultSettings = Object.assign(defaultSettings, cachedSettings);
                }
                Object.assign(this, defaultSettings);
                metadata_1.defineMetadata(this, "constructionComplete", true);
                if ("constructedCallback" in this)
                    this.constructedCallback(...params);
            }
        }
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
function beforePropertyDescriptors(target, key, mDataName) {
    const propDesc = Reflect.getOwnPropertyDescriptor(target, key);
    if (!Reflect.hasMetadata(mDataName, target))
        metadata_1.defineMetadata(target, mDataName, new Array());
    const map = metadata_1.getMetadata(target, mDataName);
    map.push(key.toString());
    return propDesc;
}
function getter(instance, key, propDesc) {
    if (!metadata_1.getMetadata(instance, "normalFunctionality")) {
        const defaultSettings = metadata_1.getMetadata(instance, "defaultSettings") || {};
        return defaultSettings[key.toString()];
    }
    const stringKey = key.toString();
    if (propDesc && propDesc.get) {
        return propDesc.get.call(instance);
    }
    else {
        const mData = metadata_1.getWildcardMetadata(instance, stringKey);
        if (mData)
            return mData.valueOf();
        return undefined;
    }
}
function setter(instance, key, newVal, propDesc) {
    if (!metadata_1.getMetadata(instance, "normalFunctionality")) {
        const defaultSettings = metadata_1.getMetadata(instance, "defaultSettings") || {};
        Object.assign(defaultSettings, { [key]: newVal });
        metadata_1.defineMetadata(instance, "defaultSettings", defaultSettings);
        return;
    }
    const stringKey = key.toString();
    if (instance[stringKey] === newVal)
        return;
    const mData = metadata_1.getWildcardMetadata(instance, stringKey);
    const initiatorMData = metadata_1.getMetadata(instance, "initiatorBinding");
    const initiatorBinding = initiatorMData ? initiatorMData.get(stringKey) : undefined;
    if (newVal instanceof Binding_1.Binding) {
        newVal.install(instance, stringKey);
        newVal = newVal.valueOf();
    }
    mData.setValue(newVal);
    if (initiatorBinding)
        initiatorBinding.reflectToObject(newVal);
    if (propDesc && propDesc.set)
        propDesc.set.call(instance, newVal);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHAvdXRpbHMvZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQiw4Q0FBMkM7QUFDM0MsMENBQXVEO0FBQ3ZELHdEQUFtRDtBQUNuRCxnREFBOEQ7QUFDOUQsa0RBQWlFO0FBQ2pFLDhDQUEyRDtBQUMzRCxrREFBK0c7QUFHL0csK0NBWXNCO0FBNEJ0QixTQUFnQixPQUFPLENBQUMsU0FBeUIsRUFBRTtJQUMvQyxPQUFPLENBQUMsTUFBVyxFQUFFLEdBQW9CLEVBQUUsRUFBRTtRQUN6QyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRy9ELE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNoQyxHQUFHLEVBQUUsU0FBUyxHQUFHO2dCQUNiLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDdkMsQ0FBQztZQUNELEdBQUcsRUFBRSxTQUFTLEdBQUcsQ0FBQyxNQUFXO2dCQUN6QixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2pDLE1BQU0sS0FBSyxHQUFHLDhCQUFtQixDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDbkQsTUFBTSxJQUFJLEdBQUcsSUFBSSxpQkFBTyxDQUFNLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZELElBQUksS0FBSyxZQUFZLHFCQUFTLElBQUksS0FBSyxZQUFZLG1CQUFRLEVBQUU7b0JBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pCLGlD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