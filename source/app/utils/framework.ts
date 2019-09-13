import { Binding } from "~bdo/lib/Binding";
import { getMetadata, defineMetadata, getWildcardMetadata } from "~bdo/utils/metadata";

type defPropOrAttr = "definedProperties" | "definedAttributes";

/**
 * Gets the previous property descriptor and sets metadata for later access and
 * identification of properties and attributes.
 *
 * @param {*} target
 * @param {(string | symbol)} key
 * @param {string} mDataName
 * @returns
 */
export function beforePropertyDescriptors(target: any, key: string, mDataName: defPropOrAttr) {
    // Get previous defined property descriptor for chaining
    const propDesc = Reflect.getOwnPropertyDescriptor(target, key);

    // Define metadata for access to attributes for later checks
    if (!Reflect.hasMetadata(mDataName, target)) defineMetadata(target, mDataName, new Array<string>());
    const map = getMetadata(target, mDataName) as string[];
    map.push(key.toString());
    return propDesc;
}

/**
 * Implements the getter of properties and attributes
 *
 * @param {*} instance
 * @param {(string | symbol)} key
 * @param {IAttributeParams} [params]
 * @param {PropertyDescriptor} [propDesc]
 * @returns
 */
export function getter(instance: any, key: string | symbol, propDesc?: PropDesc) {
    if (!getMetadata(instance, "normalFunctionality")) {
        const defaultSettings = getMetadata(instance, "defaultSettings") || {};
        return defaultSettings[key.toString()];
    }
    const stringKey = key.toString();
    if (propDesc && propDesc.get) {
        return propDesc.get.call(instance);
    } else {
        const mData = getWildcardMetadata(instance, stringKey);
        if (mData) return mData.valueOf();
        return undefined;
    }
}

/**
 * Implements the setter of attribute and property and does the second part of
 * the binding mechanism. First part is to initialize the Binding object.
 * Second part is to bind the components/models to each other
 *
 * @param {*} instance
 * @param {(string | symbol)} key
 * @param {*} newVal
 * @param {IAttributeParams} [params]
 * @param {PropertyDescriptor} [propDesc]
 * @returns
 */
export function setter(instance: any, key: string | symbol, newVal: any, propDesc?: PropDesc) {
    // Set default setting while construction is running
    if (!getMetadata(instance, "normalFunctionality")) {
        const defaultSettings = getMetadata(instance, "defaultSettings") || {};
        Object.assign(defaultSettings, { [key]: newVal });
        defineMetadata(instance, "defaultSettings", defaultSettings);
        return;
    }
    const stringKey = key.toString();
    // Get Metadata of the property / attribute
    // Do complicated things only when the value is a real change
    if (instance[stringKey] === newVal) return;
    const mData = getWildcardMetadata(instance, stringKey);
    const initiatorMData = getMetadata(instance, "initiatorBinding");
    const initiatorBinding = initiatorMData ? initiatorMData.get(stringKey) : undefined;
    // install binding
    if (newVal instanceof Binding) {
        // Bind to thisArg object
        newVal.install(instance, stringKey);
        newVal = newVal.valueOf();
    }
    // Set new value to the attribute or property
    mData.setValue(newVal);
    // Reflect to component or other model which gives a binding
    if (initiatorBinding) initiatorBinding.reflectToObject(newVal);
    // Call other property descriptors
    if (propDesc && propDesc.set) propDesc.set.call(instance, newVal);
}
