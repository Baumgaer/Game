import { Property } from "~bdo/lib/Property";
import { Attribute } from '~bdo/lib/Attribute';
import { Modification } from '~bdo/lib/Modification';
import { Field } from "~bdo/lib/Field";
import { ucFirst, getProxyTarget, isFunction, isArray, isObject } from "~bdo/utils/util";
import { getMetadata } from "~bdo/utils/metadata";
import { diffChangedObject } from "~bdo/utils/framework";
import cloneDeep from "clone-deep";

/**
 * This parameters are in fact for all objects with or without baseConstructor
 * but a baseConstructor can help to avoid strange behavior.
 *
 * @interface IWatchParams
 */
export interface IWatchedParams {
    /**
     * The name of the function which should be called when the value will be initialized.
     * Gets a parameter with initial value.
     *
     * @memberof IWatchParams
     */
    onInit?: string;

    /**
     * The name of the function which should be called when the value will be changed.
     * Gets a parameter with old value and if it is an object or array it gets
     * additionally a parameter with the path which was changed.
     *
     * @memberof IWatchParams
     */
    onChange?: string;

    /**
     * The name of the function which should be called when a value will be added to an array or object.
     * Gets a parameter with the added value and the path where it was added.
     *
     * @memberof IWatchParams
     */
    onAdd?: string;

    /**
     * The name of the function which should be called when a value will be removed from an array or object.
     * Gets a parameter with the removed value and the path where it was removed.
     *
     * @memberof IWatchParams
     */
    onRemove?: string;
}

/**
 * Holds all the logic of the watched decorator. If the decorator is used with
 * property or attribute, the corresponding decorator logic musst be passed into
 * this logic with setSubObject.
 */
export class Watched<T extends Record<string, any> = any, K extends DefNonFuncPropNames<T> = any> extends Field<T, K> implements IWatchedParams {

    /**
     * This is the real object which executes getter and setter if provided
     *
     * @memberof Watched
     */
    public subObject?: Property<T, K> | Attribute<T, K>;

    /**
     * @inheritdoc
     *
     * @public
     * @memberof Watched
     */
    public onInit: string;

    /**
     * @inheritdoc
     *
     * @public
     * @memberof Watched
     */
    public onChange: string;

    /**
     * @inheritdoc
     *
     * @public
     * @memberof Watched
     */
    public onAdd: string;

    /**
     * @inheritdoc
     *
     * @public
     * @memberof Watched
     */
    public onRemove: string;

    /**
     * This is the not manipulated value of this property / attribute and is
     * used for the decision whether to change the value or not.
     *
     * @private
     * @memberof Property
     */
    private ownValue?: T[K];

    /**
     * Marks the property / attribute as initialized so that the onInit function
     * is only execute once.
     *
     * @private
     * @type {boolean}
     * @memberof Watched
     */
    private isInitialized: boolean = false;

    constructor(object: T, property: K, params?: IWatchedParams) {
        super(object, property);

        const capitalizedProp = ucFirst(property as string);

        const onInitFunc = `on${capitalizedProp}Init`;
        const onChangeFunc = `on${capitalizedProp}Change`;
        const onAddFunc = `on${capitalizedProp}Add`;
        const onRemoveFunc = `on${capitalizedProp}Remove`;

        this.onInit = params ? params.onInit || onInitFunc : onInitFunc;
        this.onChange = params ? params.onChange || onChangeFunc : onChangeFunc;
        this.onAdd = params ? params.onAdd || onAddFunc : onAddFunc;
        this.onRemove = params ? params.onRemove || onRemoveFunc : onRemoveFunc;

        if (!isFunction(this.object[this.onInit])) this.onInit = this.onChange;
    }

    /**
     * @inheritdoc
     *
     * @param value The vale which should be set on the watcher
     * @memberof Watched
     */
    public setValue(value?: T[K] | Modification<any>) {
        if (!this.shouldDoSetValue(value)) return;

        // Make a deep copy of old value to pass an unchanged version to the onChange function
        const oldVal = cloneDeep(this.ownValue);

        let valueToPass: T[K] | undefined;
        if (value instanceof Modification) {
            valueToPass = value.valueOf();
        } else valueToPass = value;

        // Update modifications value to behold the proxy functionality
        let useValue = false;
        if (value instanceof Modification) {
            value.setValue(valueToPass);
            useValue = true;
        }

        const valueToSet = useValue ? value : valueToPass;
        // Set new Value
        if (this.subObject) {
            this.subObject.setValue(valueToSet);
            this.ownValue = getProxyTarget(this.subObject.valueOf());
        } else {
            // Process array and object modification
            valueToPass = this.proxyfyValue(valueToPass);
            this.value = valueToPass;
            this.ownValue = getProxyTarget(valueToPass);
        }

        const idxStructObj = this.object;
        // React on variable changes
        if (isFunction(idxStructObj[this.onChange]) && this.isInitialized) idxStructObj[this.onChange](oldVal);
        // React on initialization
        if (isFunction(idxStructObj[this.onInit]) && !this.isInitialized) idxStructObj[this.onInit](valueToPass);
        this.isInitialized = true;
    }

    /**
     * @inheritdoc
     *
     * @returns The current value of the watcher
     * @memberof Watched
     */
    public valueOf() {
        if (this.subObject) return this.subObject.valueOf();
        return this.value;
    }

    /**
     * Sets the sub object (Attribute or Property) to cooperate with this
     * decorators in the right way and to avoid multiple calls of methods of
     * this decorators.
     *
     * @param subObject The sub object to set to the watcher
     * @memberof Watched
     */
    public setSubObject(subObject: Property<T, K> | Attribute<T, K>) {
        if (this.subObject) {
            this.subObject.proxyHandlerReplacement = undefined;
            if (this.subObject instanceof Attribute) {
                this.subObject.disableTypeGuard = getMetadata(this.subObject.object, "definedAttributes")?.get(this.subObject.property)?.params?.disableTypeGuard;
            } else if (this.subObject instanceof Property) {
                this.subObject.disableTypeGuard = getMetadata(this.subObject.object, "definedProperties")?.get(this.subObject.property)?.params?.disableTypeGuard;
            }
        }

        let takeoverTypeGuard = false;
        if (subObject instanceof Attribute) {
            takeoverTypeGuard = !getMetadata(subObject.object, "definedAttributes")?.get(subObject.property)?.params?.disableTypeGuard;
        } else if (subObject instanceof Property) {
            takeoverTypeGuard = !getMetadata(subObject.object, "definedProperties")?.get(subObject.property)?.params?.disableTypeGuard;
        }

        if (takeoverTypeGuard) {
            subObject.disableTypeGuard = true;
            this.disableTypeGuard = false;
            this.typeFunc = subObject.typeFunc?.bind(this);
        } else {
            this.disableTypeGuard = true;
            this.typeFunc = undefined;
        }

        subObject.proxyHandlerReplacement = this.proxyHandler.bind(this);
        this.subObject = subObject;
    }

    /**
     * @inheritdoc
     *
     * @param path The path where thy proxy action was triggered on
     * @param changedVal The value which was assigned or unassigned
     * @param prevVal The old value
     * @param name The name of the operation which triggered the handler and undefined if it was an assignment
     * @param addedElements The elements which are added to the object passed by a general field
     * @param removedElements The elements which are removed from the object passed by a general field
     * @memberof Watched
     */
    public proxyHandler(path: string, changedVal?: T[K], prevVal?: T[K], name?: string, addedElements?: Record<string, any>, removedElements?: Record<string, any>) {
        const value = this.valueOf();
        const pTargetValue = getProxyTarget(value);

        let oldValue: Record<string, any> = isObject(prevVal) ? prevVal : {};
        if (!addedElements || !removedElements) {
            // Reconstruct objects in case of an assignment
            if (path && !name) {
                if (isArray(value)) {
                    oldValue = pTargetValue.slice();
                    oldValue[parseInt(path, 10)] = prevVal;
                }
                if (isObject(value)) {
                    oldValue = Object.assign({}, pTargetValue);
                    oldValue[path] = prevVal;
                }
            }
            [addedElements, removedElements] = diffChangedObject(oldValue, pTargetValue, path, name);
        }

        if (this.subObject) {
            if (!this.disableTypeGuard) {
                const error = super.typeGuard(value);
                const otherError = this.subObject.typeGuard(value, error);
                if (otherError) {
                    return this.revertProxyChanges(oldValue, pTargetValue, path, name, addedElements, removedElements);
                }
            }
            this.subObject.proxyHandler(path, changedVal, prevVal);
        }

        const keys = Array.from(new Set(Object.keys(addedElements).concat(Object.keys(removedElements))));
        for (const key of keys) {
            if (key in removedElements && isFunction(this.object[this.onRemove])) this.object[this.onRemove](removedElements[key], key.toString());
            if (key in addedElements && isFunction(this.object[this.onAdd])) this.object[this.onAdd](addedElements[key], key.toString());
        }
    }

    /**
     * @inheritdoc
     *
     * @deprecated This should not type guard the property.
     *             This is just added to enable the distributor to hook the type check on sub objects
     * @param value The value which should be checked for types
     * @param previousError An error which occurred before. This will skip the super.typeGuard()
     * @returns Error if an error occurred and undefined else
     * @memberof Property
     */
    public typeGuard(value?: T[K] | Modification<any>, previousError?: Error) {
        if (this.subObject) return this.subObject.typeGuard(value, previousError);
        return previousError;
    }

    /**
     * Determines wether to set the value respecting the DOM attribute, old value and type
     *
     * @param value The value to check for permission to assign
     * @param skipGuard Wether to skip the type guard or not. Default: false
     * @returns true if the value should be set and false else
     * @memberof Property
     */
    private shouldDoSetValue(value?: T[K] | Modification<any>, skipGuard = false) {
        if (this.subObject) {
            return this.subObject.shouldDoSetValue(value, skipGuard);
        } else return (value !== this.ownValue);
    }

}
