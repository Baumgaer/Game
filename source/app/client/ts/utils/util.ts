import { getMetadata, defineMetadata } from "~bdo/utils/metadata";

/**
 * Stores a value with its key in a separate namespace depending on a property
 * name of the instance (nsProp)
 *
 * @param instance The instance of the class to set the namespaced storage on
 * @param key The key of the namespaced storage to set
 * @param newVal The value which should bet set to the key
 * @param nsProp The property which should be used as a namespace suffix (The prefix is the name of the instance). Default: "id"
 */
export function setUpdateNamespacedStorage<T extends Record<string, any>, K extends DefNonFuncPropNames<T>, P extends DefNonFuncPropNames<T>>(instance: T, key: K, newVal?: T[K], nsProp: P = <P>"id") {
    if (key === "*") throw new Error("* is a special character and does not follow the property convention");

    // Get basic information
    const nsPrefix = Object.getPrototypeOf(instance.constructor).name;
    let nsSuffix: T[K] | T[P] | undefined = getMetadata(instance, "oldStorageNsSuffix") as T[P] | undefined;
    let storageValue: any;

    // Create namespace if not available
    if (!nsSuffix) nsSuffix = instance[nsProp];
    let ns = `${nsPrefix}_${nsSuffix}`;
    if (<string>key === nsProp || nsSuffix !== instance[nsProp]) {
        // Update namespace if changed
        nsSuffix = <string>key === nsProp ? newVal : instance[nsProp];
        const newNs = `${nsPrefix}_${nsSuffix}`;
        storageValue = localStorage.getItem(ns);
        if (storageValue) {
            localStorage.removeItem(ns);
            localStorage.setItem(newNs, storageValue);
        }
        ns = newNs;
    } else {
        // get current value
        storageValue = localStorage.getItem(ns);
        if (storageValue) {
            storageValue = JSON.parse(storageValue);
        } else storageValue = {};
        // Delete value if undefined else update
        if (newVal === undefined) {
            delete storageValue[key];
            if (!Object.keys(storageValue).length) {
                localStorage.removeItem(ns);
            } else localStorage.setItem(ns, JSON.stringify(storageValue));
        } else localStorage.setItem(ns, JSON.stringify(Object.assign(storageValue, { [key]: newVal })));
    }
    // Trace namespace suffix
    defineMetadata(instance, "oldStorageNsSuffix", <any>nsSuffix);
}

/**
 * Gets a value of the key depending on the namespace suffix which was used
 * before in a store action or depending on the nsProp.
 *
 * You also can force a namespace which will be used instead of all previous
 * detected namespaces.
 *
 * if key is a *, all keys in this namespace will be returned in an object.
 *
 * @param instance The instance of the class to get the namespaced storage from
 * @param key The key of the namespaced storage to get
 * @param nsProp The property which should be used as a namespace suffix (The prefix is the name of the instance). Default: "id"
 * @param forceNS This will overwrite every property value (nsProp value) and will be used as namespace suffix
 * @returns The value of the given key respecting the namespace
 */
export function getNamespacedStorage<T extends Record<string, any>, K extends DefNonFuncPropNames<T> | "*", P extends DefNonFuncPropNames<T>>(instance: T, key: K, nsProp: P = <P>"id", forceNS?: string) {
    const nsPrefix = Object.getPrototypeOf(instance.constructor).name;
    let nsSuffix = getMetadata(instance, "oldStorageNsSuffix") as T[P] | string | undefined;
    if (nsSuffix !== instance[nsProp]) nsSuffix = instance[nsProp];
    if (forceNS) nsSuffix = forceNS;
    const storageValueString = localStorage.getItem(`${nsPrefix}_${nsSuffix}`);
    if (storageValueString) {
        const storageValue: IndexStructure<T> = JSON.parse(storageValueString);
        if (storageValue && key === "*") return storageValue;
        if (storageValue && key in storageValue) return storageValue[<string>key] as unknown as T[Exclude<K, "*">];
    }
    return undefined;
}

/**
 * Deletes a key from namespaced storage depending on a property
 * name of the instance. If key is "*" the namespaced storage will be cleared.
 *
 * @param instance The instance of the class to delete the namespaced storage from
 * @param key The key of the namespaced storage to delete
 * @param nsProp The property which should be used as a namespace suffix (The prefix is the name of the instance). Default: "id"
 */
export function deleteFromNamespacedStorage<T extends Record<string, any>, K extends DefNonFuncPropNames<T> | "*", P extends DefNonFuncPropNames<T>>(instance: T, key: K, nsProp: P = <P>"id") {
    if (key === "*") {
        const storage = getNamespacedStorage(instance, key, nsProp);
        for (const prop in storage) {
            if (prop in storage) setUpdateNamespacedStorage(instance, prop as DefNonFuncPropNames<T>, undefined, nsProp);
        }
    } else setUpdateNamespacedStorage(instance, key as DefNonFuncPropNames<T>, undefined, nsProp);
}
