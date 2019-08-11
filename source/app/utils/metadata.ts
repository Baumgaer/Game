import { Binding } from "~bdo/lib/Binding";
interface IMDKeys<T = any> {
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
     * @type {ConstParams<T>}
     * @memberof IMetadataKeys
     */
    defaultSettings?: ConstParams<T>;

    /**
     * Used to indicate completed construction of an object decorated with baseConstructor.
     * This metadata will be read for example in reading localStorage while
     * construction is running to avoid cache overwriting.
     *
     * @type {boolean}
     * @memberof IMetadataKeys
     */
    constructionComplete?: boolean;

    /**
     * Stores the bindings of the binding initiator for each property in a map
     *
     * @type {Map<string, Binding<T, DefinitiveNonFunctionPropertyNames<T>>>}
     * @memberof IMDKeys
     */
    initiatorBinding?: Map<string, Binding<T, DefinitiveNonFunctionPropertyNames<T>>>;

    /**
     * Stores all bindings of a property of any object
     *
     * @type {Map<string, Array<Binding<T, DefinitiveNonFunctionPropertyNames<T>>>>}
     * @memberof IMDKeys
     */
    bindings?: Map<string, Array<Binding<T, DefinitiveNonFunctionPropertyNames<T>>>>;

    /**
     * Stores the property descriptor created by the Binding class
     *
     * @type {PropertyDescriptor}
     * @memberof IMDKeys
     */
    bindingDescriptor?: PropertyDescriptor;

    /**
     * Stores the previous suffix of the namespace of a namespaced local storage
     *
     * @type {string}
     * @memberof IMDKeys
     */
    oldStorageNsSuffix?: string;

    /**
     * Stores if an attribute of a DOM element has been initialized.
     * This is used in decorators util.
     *
     * @type {IndexStructure<DefinitiveNonFunctionPropertyNames<T>, boolean>}
     * @memberof IMDKeys
     */
    attrInitialized?: IndexStructure<DefinitiveNonFunctionPropertyNames<T>, boolean>;

    /**
     * stores all defined properties of an object which is decorated with the
     * baseConstructor decorator and makes use of property decorator.
     *
     * @type {Array<DefinitiveNonFunctionPropertyNames<T>>}
     * @memberof IMDKeys
     */
    definedProperties?: Array<DefinitiveNonFunctionPropertyNames<T>>;

    /**
     * stores all defined attributes of an object which is decorated with the
     * baseConstructor decorator and makes use of attribute decorator.
     *
     * @type {Array<DefinitiveNonFunctionPropertyNames<T>>}
     * @memberof IMDKeys
     */
    definedAttributes?: Array<DefinitiveNonFunctionPropertyNames<T>>;

    /**
     * Indicates in a property which is NOT cached in localStorage but marked
     * as saveInLocalStorage on construction time of the corresponding object.
     *
     * @type {boolean}
     * @memberof IMDKeys
     */
    keyShouldBeUpdated?: IndexStructure<DefinitiveNonFunctionPropertyNames<T>, boolean>;

    /**
     * Holds all timeouts of properties and attributes which are marked as "storeTemporary"
     *
     * @type {IndexStructure<DefinitiveNonFunctionPropertyNames<T>, boolean>}
     * @memberof IMDKeys
     */
    expirationTimeout?: IndexStructure<DefinitiveNonFunctionPropertyNames<T>, boolean>;

    /**
     * Marks all initialized properties and attributes to force onInit function
     * in watched decorator only fired once.
     *
     * @type {IndexStructure<DefinitiveNonFunctionPropertyNames<T>, boolean>}
     * @memberof IMDKeys
     */
    initPropMarker?: IndexStructure<DefinitiveNonFunctionPropertyNames<T>, boolean>;
}

/**
 * Type save version of Reflect.defineMetadata
 *
 * @export
 * @template T
 * @param {Object} target
 * @param {T} key
 * @param {*} value
 */
export function defineMetadata<T extends Object, K extends keyof IMDKeys>(target: T, key: K, value: IMDKeys<T>[K]) {
    Reflect.defineMetadata(key, value, target); // tslint:disable-line
}

/**
 * Type save version of Reflect.getMetadata
 *
 * @export
 * @template T
 * @param {Object} target
 * @param {T} key
 * @returns {IMDKeys[T]}
 */
export function getMetadata<T extends Object, K extends keyof IMDKeys>(target: T, key: K): IMDKeys<T>[K] {
    return Reflect.getMetadata(key, target); // tslint:disable-line
}

/**
 * Just a wrapper of Reflect.defineMetadata to avoid massive use of  // tslint:disable-line
 *
 * @export
 * @param {Object} target
 * @param {string} key
 * @param {*} value
 */
export function defineWildcardMetadata(target: Object, key: string, value: any) {
    Reflect.defineMetadata(key, value, target); // tslint:disable-line
}

/**
 * Just a wrapper of Reflect.getMetadata to avoid massive use of  // tslint:disable-line
 *
 * @export
 * @param {Object} target
 * @param {string} key
 * @returns
 */
export function getWildcardMetadata(target: Object, key: string) {
    return Reflect.getMetadata(key, target); // tslint:disable-line
}
