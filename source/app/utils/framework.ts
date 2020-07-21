import { Binding } from "~bdo/lib/Binding";
import { Attribute, IAttributeParams } from "~bdo/lib/Attribute";
import { Property, IPropertyParams } from "~bdo/lib/Property";
import { Watched, IWatchedParams } from "~bdo/lib/Watched";
import { Modification } from "~bdo/lib/Modification";
import { merge, isFunction } from "~bdo/utils/util";
import { isBrowser } from "~bdo/utils/environment";
import { getMetadata, defineMetadata, getWildcardMetadata, defineWildcardMetadata } from "~bdo/utils/metadata";
import { baseConstructorFactory } from "~bdo/lib/BaseConstructor";
import { BDOModel } from "~bdo/lib/BDOModel";

// Types should be allowed
import type { ClientModel } from "~client/lib/ClientModel"; // eslint-disable-line
import type { ServerModel } from "~server/lib/ServerModel"; // eslint-disable-line
import type { BaseComponentFactory } from "~client/lib/BaseComponent"; // eslint-disable-line
import type { BaseControllerFactory } from "~client/lib/BaseController"; // eslint-disable-line
import type { getNamespacedStorage } from "~client/utils/util"; // eslint-disable-line

import type { ReturnTypeFunc } from "type-graphql/dist/decorators/types";

type defPropOrAttr = "definedProperties" | "definedAttributes" | "definedWatchers";
type AttrPropWatch = "Attribute" | "Property" | "Watched";
type DecoratorTypeParams<T> = T extends "Watched" ?
    IWatchedParams : T extends "Attribute" ?
    IAttributeParams : IPropertyParams;
type NewVal<T extends Record<string, any>, K extends DefNonFuncPropNames<T>> = T[K] | Binding<T, K> | Modification<any>;
type WatchAttrPropParams<T> = T extends "definedProperties" ?
    IPropertyParams : T extends "definedAttributes" ?
    IAttributeParams : T extends "definedWatchers" ? IWatchedParams : T;

export interface IGetNamespaceStorageAddition<T> {

    /**
     * @see getNamespacedStorage
     *
     * @memberof IGetNamespaceStorageAddition
     */
    getNamespacedStorage: <K extends DefNonFuncPropNames<T>, P extends DefNonFuncPropNames<T>>(key: K, nsProp?: P, forceNS?: string) => ReturnType<typeof getNamespacedStorage>;
}

export interface IWatchAttrPropSettings<T extends defPropOrAttr | IAttributeParams | IPropertyParams | IWatchedParams> {
    /**
     * The function which returns the real type
     *
     * @memberof IWatchAttrPropSettings
     */
    typeFunc?: ReturnTypeFunc;

    /**
     * Parameters for the corresponding decorator
     *
     * @memberof IWatchAttrPropSettings
     */
    params?: WatchAttrPropParams<T>;
}

export type BaseConstructor = ReturnType<typeof baseConstructorFactory>;
export type BaseComponent = ReturnType<typeof BaseComponentFactory>;
export type BaseController = ReturnType<typeof BaseControllerFactory>;

export type BaseConstructorInstance = InstanceType<BaseConstructor>;
export type BaseComponentInstance = InstanceType<BaseComponent>;
export type BaseControllerInstance = InstanceType<BaseController>;

/**
 * Gets the previous property descriptor and sets metadata for later access and
 * identification of properties and attributes.
 *
 * @param target The class which is processed before a property descriptor will be processed
 * @param key The name of the field
 * @param mDataName The name of the meta data
 * @param params The parameters of the new upcoming property descriptor
 * @returns The new settings of the upcoming new property descriptor
 */
export function beforeDescriptor<
    T extends Record<string, any>,
    K extends DefNonFuncPropNames<T>,
    M extends defPropOrAttr,
    P extends IWatchAttrPropSettings<M>
>(target: T, key: K, mDataName: M, params: P): P {
    // Define metadata for access to attributes for later checks
    if (!Reflect.hasMetadata(mDataName, target)) defineMetadata(target, mDataName, new Map());
    const map = getMetadata(target, mDataName) as Map<DefNonFuncPropNames<T>, P>;
    const oldDecoratorSettings = map.get(key) || {};
    const settings = merge(oldDecoratorSettings, params);
    map.set(key, settings);
    return settings;
}

/**
 * Implements the getter of properties and attributes
 *
 * @template T
 * @template K
 * @param instance The instance of a class where the getter should be executed on
 * @param key The name of the field which should be processed
 * @param ns A special namespace of the field to get additional metadata e.g. "field". Default: ""
 * @returns The value of the field if available
 */
export function getter<T extends Record<string, any>, K extends DefNonFuncPropNames<T>>(instance: T, key: K, ns = ""): any | undefined {
    let stringKey = key.toString();
    if (ns) stringKey = `${ns}:${key}`;
    if (!getMetadata(instance, "normalFunctionality")) {
        const defaultSettings = getMetadata(instance, "defaultSettings") || {};
        return Reflect.get(defaultSettings, stringKey);
    }
    const mData = getWildcardMetadata(instance, stringKey);
    if (mData) return mData.valueOf();
    return undefined;
}

/**
 * Implements the setter of attribute, property and watched and does the second
 * part of the binding mechanism. First part is to initialize the Binding object.
 * Second part is to bind the components/models to each other
 *
 * @template T
 * @template K
 * @param instance The instance of a class where the key should be modified
 * @param key The name of the field which should be modified
 * @param newVal The value which should be set
 * @param ns A special namespace of the field to set additional metadata e.g. "field". Default: ""
 */
export function setter<
    T extends Record<string, any>,
    K extends DefNonFuncPropNames<T>>(instance: T, key: K, newVal?: NewVal<T, K>, ns = ""): void {

    // Modify key with namespace
    let stringKey = key.toString();
    if (ns) stringKey = `${ns}:${key}`;

    // Execute only when it is a real change
    if (!ns && instance[<K>stringKey] === newVal) return;

    // Set default setting while construction is running
    if (!getMetadata(instance, "normalFunctionality")) {
        const defaultSettings = getMetadata(instance, "defaultSettings") || {};
        Object.assign(defaultSettings, { [stringKey]: newVal });
        defineMetadata(instance, "defaultSettings", defaultSettings);
        return;
    }

    // Get Metadata of the property / attribute
    const mData = getWildcardMetadata(instance, stringKey);

    if (newVal instanceof Binding) {
        newVal.install(instance, key); // install binding
    } else mData.setValue(newVal); // Set new value to the attribute or property
}

/**
 * Creates a property descriptor which is executed by a decorator to achieve an
 * easy to understand interface which is also easy to write and guarantees a
 * standardized procedure on every change of a field.
 *
 * @param target The class (instance) where the descriptor should be set on
 * @param key The name of the field which should be replaced
 * @param type The type of the decorator which calls this function to achieve different behavior
 * @param params The parameters of the decorator type
 */
export function createDecoratorDescriptor<
    T extends Record<string, any>,
    K extends DefNonFuncPropNames<T>,
    P = DecoratorTypeParams<T>>(target: T, key: K, type: AttrPropWatch, params: P): void {

    const propDesc = Reflect.getOwnPropertyDescriptor(target, key);
    const stringKey = key.toString();

    Reflect.deleteProperty(target, key);
    Reflect.defineProperty(target, key, {
        get: function decoratorGetter() {
            const that: any = this;
            return getter(that, stringKey);
        },
        set: function decoratorSetter(newVal: any) {
            const that: any = this;
            const mData = getWildcardMetadata(this, key);

            // Initialize type
            let field;
            if (type === "Attribute") {
                field = new Attribute(that, stringKey, params);
            } else if (type === "Property") {
                field = new Property(that, stringKey, params);
            } else field = new Watched(that, stringKey, params);

            // Set type as metadata
            if (mData) {
                if ((mData instanceof Attribute || mData instanceof Property) && field instanceof Watched) {
                    field.setSubObject(mData);
                    defineWildcardMetadata(this, stringKey, field);
                } else if ((field instanceof Property || field instanceof Attribute) && mData instanceof Watched) {
                    if (!mData.subObject) mData.setSubObject(field);
                }
            } else defineWildcardMetadata(this, stringKey, field);
            if (((type === "Attribute" || type === "Property") && !(mData instanceof Watched)) || type === "Watched") {
                setter(that, stringKey, newVal);
            }
            if (propDesc && propDesc.set && propDesc.set.name === "decoratorSetter") propDesc.set.call(this, newVal);
        },
        enumerable: true,
        configurable: true
    });
}

/**
 * Determines if a given constructor is a BaseConstructor
 *
 * @param value The thing (what ever it is) to check if it is a BaseConstructor
 * @returns true if it is a BaseConstructor and false else
 */
export function isBaseConstructor(value: Record<string, any>): value is BaseConstructor {
    if (typeof value === "function" && value.name === "BaseConstructor") return true;
    if (value instanceof Object && value.constructor.name === "BaseConstructor") return true;
    return false;
}

/**
 * Checks if the given constructor (not an instance!) is a BDOModel. This is useful
 * to get type security in BDO section when an any type variable must be checked.
 *
 * @param value The thing to check if it is a model in general
 * @returns true if it is a model in general and false else
 */
export function isBDOModel(value: Record<string, any>): value is typeof BDOModel {
    if ("isBDOModel" in value) return true;
    return false;
}

/**
 * Checks if the given constructor (not an instance!) is a ClientModel. This is useful
 * to get type security in BDO section when an any type variable must be checked.
 *
 * @param value The thing to check if it is a ClientModel
 * @returns true if the value is a ClientModel and false else
 */
export function isClientModel(value: Record<string, any>): value is typeof ClientModel {
    if (isBDOModel(value) && "isClientModel" in value) return true;
    return false;
}

/**
 * Checks if the given constructor (not an instance!) is a ServerModel. This is useful
 * to get type security in BDO section when an any type variable must be checked.
 *
 * @param value The thing to check if it is a ServerModel
 * @returns true if the value is a ServerModel and false else
 */
export function isServerModel(value: Record<string, any>): value is typeof ServerModel {
    if (isBDOModel(value) && "isServerModel" in value) return true;
    return false;
}

/**
 * Checks if the constructor (not an instance!) is a controller for the frontend.
 * This is useful to get type security in BDO section when an any type variable
 * must be checked.
 *
 * @param value The thing to check if it is a controller or not
 * @returns true if the value is a controller and false else
 */
export function isController(value: Record<string, any>): value is BaseController {
    if (isBrowser() && "isBaseController" in value && !("isBaseComponent" in value)) return true;
    return false;
}

/**
 * Checks if the constructor (not an instance!) is a Component for the frontend.
 * This is useful to get type security in BDO section when an any type variable
 * must be checked.
 *
 * @param value The thing to check if it is any component
 * @returns true if the value is any component and false else
 */
export function isComponent<T = BaseComponent>(value: Record<string, any>): value is T {
    if (isBrowser() && "isBaseComponent" in value && "isBaseController" in value) return true;
    return false;
}

/**
 * Checks if a string corresponds to a reference string like in a database
 *
 * @param value Something which could be a reference string
 * @returns true if value is a reference string and false else
 */
export function isReferenceString(value: unknown): value is string {
    if (typeof value !== "string") return false;
    const refRegEx = /_reference:[A-Z|0-9|_|$]*:[A-Z|0-9|\-|_]*/gi;
    return Boolean(value.match(refRegEx)).valueOf();
}

/**
 * Checks if the value has a function named "getNamespacedStorage"
 *
 * @template T
 * @param value Something which should be check if it is able to provide a namespaced storage
 * @returns true if the value is able to provide a namespaced storage and false else
 */
export function canGetNamespacedStorage<T extends Record<string, any>>(value: Record<string, any>): value is T & IGetNamespaceStorageAddition<T> {
    if ("getNamespacedStorage" in value && isFunction(value.getNamespacedStorage)) return true;
    return false;
}
