import { Binding } from "~bdo/lib/Binding";
import { IAttributeParams } from "~bdo/lib/Attribute";
import { IPropertyParams } from "~bdo/lib/Property";
import { IWatchedParams } from "~bdo/lib/Watched";
import { IBaseConstructorOpts } from "~bdo/lib/BaseConstructor";
import { IWatchAttrPropSettings } from "~bdo/utils/framework";

interface IMDKeys<T extends Record<string, any> = any> {
    /**
     * Used to go back to normal functionality on object creation.
     * Used in every object, which is decorated with baseConstructor and in
     * the decorators property, attribute and watched.
     *
     * @type {boolean}
     * @memberof IMetadataKeys
     */
    normalFunctionality?: boolean;

    /**
     * Used to store settings which are definitely assigned by default.
     * This metadata will be used in every Object which is decorated with
     * baseConstructor and makes use of decorators attribute, property or watched.
     * This decorators will do heavy processing and this metadata will prevent
     * unnecessary processing while construction is running.
     *
     * @memberof IMetadataKeys
     */
    defaultSettings?: ConstParams<T>;

    /**
     * Used to indicate completed construction of an object decorated with baseConstructor.
     * This metadata will be read for example in reading localStorage while
     * construction is running to avoid cache overwriting.
     *
     * @memberof IMetadataKeys
     */
    constructionComplete?: boolean;

    /**
     * Stores the bindings of the binding initiator for each property in a map
     *
     * @memberof IMDKeys
     */
    initiatorBinding?: Map<string, Binding<T, DefNonFuncPropNames<T>>>;

    /**
     * Stores all bindings of a property of any object
     *
     * @memberof IMDKeys
     */
    bindings?: Map<DefNonFuncPropNames<T>, Binding<T, DefNonFuncPropNames<T>>[]>;

    /**
     * Stores the property descriptor created by the Binding class
     *
     * @memberof IMDKeys
     */
    bindingDescriptor?: PropertyDescriptor;

    /**
     * Stores the previous suffix of the namespace of a namespaced local storage
     *
     * @memberof IMDKeys
     */
    oldStorageNsSuffix?: DefNonFuncPropNames<T>;

    /**
     * Stores if an attribute of a DOM element has been initialized.
     * This is used in decorators util.
     *
     * @memberof IMDKeys
     */
    attrInitialized?: IndexStructure<boolean>;

    /**
     * stores all defined properties of an object which is decorated with the
     * baseConstructor decorator and makes use of property decorator.
     *
     * @memberof IMDKeys
     */
    definedProperties?: Map<DefNonFuncPropNames<T>, IWatchAttrPropSettings<IPropertyParams>>;

    /**
     * stores all defined attributes of an object which is decorated with the
     * baseConstructor decorator and makes use of attribute decorator.
     *
     * @memberof IMDKeys
     */
    definedAttributes?: Map<DefNonFuncPropNames<T>, IWatchAttrPropSettings<IAttributeParams>>;

    /**
     * Stores all defined watchers of an object which is decorated with the
     * baseConstructor decorator and makes use of watched decorator.
     *
     * @memberof IMDKeys
     */
    definedWatchers?: Map<DefNonFuncPropNames<T>, IWatchAttrPropSettings<IWatchedParams>>;

    definedBaseConstructors?: Map<DefNonFuncPropNames<T>, IWatchAttrPropSettings<IBaseConstructorOpts>>;

    /**
     * Indicates in a property which is NOT cached in localStorage but marked
     * as saveInLocalStorage on construction time of the corresponding object.
     *
     * @memberof IMDKeys
     */
    keyShouldBeUpdated?: IndexStructure<boolean>;

    /**
     * Used to define the name of the database collection where a BDOModel is stored in
     *
     * @type {string}
     * @memberof IMDKeys
     */
    collectionName?: string;

    /**
     * Used to define the name of the database where a BDOModel is stored in
     *
     * @type {string}
     * @memberof IMDKeys
     */
    databaseName?: string;
}

/**
 * Type save version of Reflect.defineMetadata
 *
 * @template T
 * @param target The class which should get a meta data
 * @param key The name of the meta data
 * @param val The value of the metadata
 */
export function defineMetadata<T extends Record<string, any>, K extends keyof IMDKeys<T>>(target: T, key: K, val: IMDKeys<T>[K]): void {
    Reflect.defineMetadata(key, val, target); // eslint-disable-line
}

/**
 * Type save version of Reflect.getMetadata
 *
 * @template T
 * @param target The class which may has the meta data
 * @param key The name of the meta data
 * @returns The value of the meta data if available
 */
export function getMetadata<T extends Record<string, any>, K extends keyof IMDKeys<T>>(target: T, key: K): IMDKeys<T>[K] {
    return Reflect.getMetadata(key, target); // eslint-disable-line
}

/**
 * Just a wrapper of Reflect.defineMetadata to avoid massive use of
 *
 * @param target The class which should get a meta data
 * @param key The name of the meta data
 * @param value The value of the metadata
 */
export function defineWildcardMetadata(target: Record<string, any>, key: strNumSym, value: unknown): void {
    Reflect.defineMetadata(key, value, target); // eslint-disable-line
}

/**
 * Just a wrapper of Reflect.getMetadata to avoid massive use of
 *
 * @param target The class which may has the meta data
 * @param key The name of the meta data
 * @returns The value of the meta data if available
 */
export function getWildcardMetadata(target: Record<string, any>, key: strNumSym): any {
    return Reflect.getMetadata(key, target); // eslint-disable-line
}

/**
 * Returns the type of a property of an Object
 *
 * @param target The class which may has the meta data
 * @param key The name of the design type
 * @returns The value of the design type if determinable
 */
export function getDesignType(target: Record<string, any>, key: string): any {
    return Reflect.getMetadata("design:type", target, key); // eslint-disable-line
}
