import 'reflect-metadata';
import { pascalCase2kebabCase } from "~bdo/utils/util";
import { isBrowser } from "~bdo/utils/environment";
import { IPropertyParams, Property } from "~bdo/lib/Property";
import { IAttributeParams, Attribute } from "~bdo/lib/Attribute";
import { IWatchedParams, Watched } from "~bdo/lib/Watched";
import { getMetadata, defineMetadata, defineWildcardMetadata, getWildcardMetadata } from "~bdo/utils/metadata";
import { beforePropertyDescriptors, setter, getter } from "~bdo/utils/framework";
import { ReturnTypeFunc } from "type-graphql/dist/decorators/types";
import { ObjectOptions } from "type-graphql/dist/decorators/ObjectType";
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

interface IBaseConstructorOpts extends ObjectOptions {
    /**
     * Defines the name of the collection where a model is saved in
     *
     * @type {string}
     * @memberof baseConstructorOpts
     */
    collectionName?: string;
}

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
        const propDesc = Reflect.getOwnPropertyDescriptor(target, key);

        // Create new property with getter and setter
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return getter(this, key, propDesc);
            },
            set: function set(newVal: any) {
                const stringKey = key.toString();
                const mData = getWildcardMetadata(this, stringKey);
                const prop = new Watched(<any>this, stringKey, params);
                if (mData instanceof Attribute || mData instanceof Property) {
                    prop.setSubObject(mData);
                    defineWildcardMetadata(this, stringKey, prop);
                } else if (!mData) defineWildcardMetadata(this, stringKey, prop);
                setter(this, key, newVal, propDesc);
            },
            enumerable: true,
            configurable: true
        });
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
        const propDesc = beforePropertyDescriptors(target, key.toString(), "definedProperties");
        // Define new metadata property
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return getter(this, key, propDesc);
            },
            set: function set(newVal: any) {
                const stringKey = key.toString();
                const mData = getWildcardMetadata(this, stringKey);
                const prop = new Property(<any>this, stringKey, params);
                if (!mData) {
                    defineWildcardMetadata(this, stringKey, prop);
                } else if (mData instanceof Watched && !mData.subObject) mData.setSubObject(prop);
                if (!(mData instanceof Watched)) {
                    setter(this, key, newVal, propDesc);
                } else if (propDesc && propDesc.set) propDesc.set.call(this, newVal);
            },
            enumerable: true,
            configurable: true
        });
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
        if (typeFunc && !(typeFunc instanceof Function) && !params) params = typeFunc;
        if (!params) params = {};

        // Decide which Field should be used
        if (typeFunc instanceof Function && params) Field(typeFunc, params)(target, key);
        else if (typeFunc instanceof Function) Field(typeFunc)(target, key);
        else if (params) Field(params)(target, key);
        else Field()(target, key);
        const propDesc = beforePropertyDescriptors(target, key.toString(), "definedAttributes");
        // Define new metadata property
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return getter(this, key, propDesc);
            },
            set: function set(newVal: any) {
                const stringKey = key.toString();
                const mData = getWildcardMetadata(this, stringKey);
                const attr = new Attribute(<any>this, stringKey, params);
                if (!mData) {
                    defineWildcardMetadata(this, stringKey, attr);
                } else if (mData instanceof Watched && !mData.subObject) mData.setSubObject(attr);
                if (!(mData instanceof Watched)) {
                    setter(this, key, newVal, propDesc);
                } else if (propDesc && propDesc.set) propDesc.set.call(this, newVal);
            },
            enumerable: true,
            configurable: true
        });
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
        if (prototype.name === "BaseConstructor") {
            Object.setPrototypeOf(ctor, Object.getPrototypeOf(prototype));
        }

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
            // set collection name
            if (options && (typeof options === "object") && options.collectionName) {
                defineMetadata(ctor, "collectionName", options.collectionName);
            }
        }

        if (options && (typeof options === "object" && options.isAbstract)) return ctor;

        /**
         * Invokes the life cycle of every component and model
         *
         * @class BaseConstructor
         * @extends {ctor}
         */
        class BaseConstructor extends ctor {

            /**
             * Represents the original class name of the constructor
             *
             * @static
             * @memberof BaseConstructor
             */
            public static readonly className = Object.getPrototypeOf(BaseConstructor).name;

            /**
             * Determines the original type of this model - set by the
             * baseConstructor - for the GraphQL resolver
             *
             * @static
             * @type {*}
             * @memberof BaseConstructor
             */
            public static readonly graphQLType: any = ctor;

            /**
             * Used to define the name of the database collection where a BDOModel is stored in
             *
             * @static
             * @type {string}
             * @memberof BaseConstructor
             */
            public static readonly collectionName?: string = getMetadata(BaseConstructor, "collectionName");

            /**
             * The instance version of the static property collectionName
             *
             * @type {string}
             * @memberof BaseConstructor
             */
            public readonly collectionName?: string = BaseConstructor.collectionName;

            constructor(...params: any[]) {
                super(...params);
                let constParams = params[constParamsIndex];
                if (!(constParams instanceof Object)) constParams = {};
                defineMetadata(this, "normalFunctionality", true);
                let defaultSettings = getMetadata(this, "defaultSettings") || {};
                defaultSettings = Object.assign(defaultSettings, constParams);
                if ("getNamespacedStorage" in this) {
                    const cachedSettings = this.getNamespacedStorage("*", "id", constParams.id);
                    defaultSettings = Object.assign(defaultSettings, cachedSettings);
                }
                Object.assign(this, defaultSettings);
                defineMetadata(this, "constructionComplete", true);
                if ("constructedCallback" in this) (<any>this).constructedCallback(...params);
            }
        }

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
