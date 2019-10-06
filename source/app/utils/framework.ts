import { Binding } from "~bdo/lib/Binding";
import { Attribute, IAttributeParams } from "~bdo/lib/Attribute";
import { Property, IPropertyParams } from "~bdo/lib/Property";
import { Watched, IWatchedParams } from "~bdo/lib/Watched";
import { Modification } from "~bdo/lib/Modification";
import { merge } from "~bdo/utils/util";
import { getMetadata, defineMetadata, getWildcardMetadata, defineWildcardMetadata } from "~bdo/utils/metadata";
import { baseConstructorFactory } from "~bdo/lib/BaseConstructor";

type defPropOrAttr = "definedProperties" | "definedAttributes" | "definedWatchers";
type AttrPropWatch = "Attribute" | "Property" | "Watched";
type DecoratorTypeParams<T> = T extends "Watched" ?
    IWatchedParams : T extends "Attribute" ?
    IAttributeParams : IPropertyParams;
type NewVal<T extends Object, K extends DefNonFuncPropNames<T>> = T[K] | Binding<T, K> | Modification<any>;

export interface IWatchAttrPropSettings<T extends defPropOrAttr | IAttributeParams | IPropertyParams | IWatchedParams> {
    /**
     * The function which returns the real type
     *
     * @type {*}
     * @memberof IWatchAttrPropSettings
     */
    typeFunc?: any;

    /**
     * Parameters for the corresponding decorator
     *
     * @type {T extends "definedProperties" ? IPropertyParams :
     *              T extends "definedAttributes" ? IAttributeParams :
     *              T extends "definedWatchers" ? IWatchedParams : T}
     * @memberof IWatchAttrPropSettings
     */
    params?: T extends "definedProperties" ? IPropertyParams :
    T extends "definedAttributes" ? IAttributeParams :
    T extends "definedWatchers" ? IWatchedParams : T;
}

/**
 * Gets the previous property descriptor and sets metadata for later access and
 * identification of properties and attributes.
 *
 * @param {*} target
 * @param {(string | symbol)} key
 * @param {string} mDataName
 * @returns
 */
export function beforeDescriptor<
    T extends Object,
    K extends DefNonFuncPropNames<T>,
    M extends defPropOrAttr,
    P extends IWatchAttrPropSettings<M>
>(target: T, key: K, mDataName: M, params: P) {
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
 * @export
 * @template T
 * @template K
 * @param {T} instance
 * @param {K} key
 * @param {string} [ns=""]
 * @returns
 */
export function getter<T extends Object, K extends DefNonFuncPropNames<T>>(instance: T, key: K, ns: string = "") {
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
 * @export
 * @template T
 * @template K
 * @param {T} instance
 * @param {K} key
 * @param {(T[K] | Binding<T, K>)} [newVal]
 * @returns
 */
export function setter<
    T extends Object,
    K extends DefNonFuncPropNames<T>>(instance: T, key: K, newVal?: NewVal<T, K>, ns: string = "") {

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
 * Test
 *
 * @export
 * @param {Object} target
 * @param {string} key
 * @param {AttrPropWatch} type
 * @param {*} params
 */
export function createDecoratorDescriptor<
    T extends Object,
    K extends DefNonFuncPropNames<T>,
    P = DecoratorTypeParams<T>>(target: T, key: K, type: AttrPropWatch, params: P) {

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
 * @export
 * @param {Function} value
 * @returns {value is ReturnType<typeof baseConstructorFactory>}
 */
export function isBaseConstructor(value: Object): value is ReturnType<typeof baseConstructorFactory> {
    if (typeof value === "function" && value.name === "BaseConstructor") return true;
    if (value instanceof Object && value.constructor.name === "BaseConstructor") return true;
    return false;
}

/**
 * Checks if a string corresponds to a reference string like in a database
 *
 * @export
 * @param {*} value
 * @returns {value is string}
 */
export function isReferenceString(value: any): value is string {
    if (typeof value !== "string") return false;
    const refRegEx = /_reference\:[A-Z|0-9|_|$]*\:[A-Z|0-9|\-|_]*/gi;
    return Boolean(value.match(refRegEx)).valueOf();
}
