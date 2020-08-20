import { Property } from "~bdo/lib/Property";
import { Attribute } from '~bdo/lib/Attribute';
import { Modification } from '~bdo/lib/Modification';
import { ucFirst, getProxyTarget, isFunction, isObject, isArray } from "~bdo/utils/util";
import { isBDOModel } from "~bdo/utils/framework";
import onChange from "on-change";
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
     * The name of the function which should be called when a value will be added to the array.
     * Gets a parameter with the added value and the path.
     *
     * @memberof IWatchParams
     */
    onAdd?: string;

    /**
     * The name of the function which should be called when a value will be removed from the array.
     * Gets a parameter with the removed value and the path.
     *
     * @memberof IWatchParams
     */
    onRemove?: string;

    /**
     * If true arrays and object will recursively observed for
     * changes, removes and additions.
     *
     * @default true No recursive observation
     * @memberof IWatchParams
     */
    isShallow?: boolean;
}

/**
 * Holds all the logic of the watched decorator. If the decorator is used with
 * property or attribute, the corresponding decorator logic musst be passed into
 * this logic with setSubObject.
 */
export class Watched<T extends Record<string, any> = any, K extends DefNonFuncPropNames<T> = any> implements IWatchedParams {

    /**
     * A reference to the object where this property/attribute is defined on
     *
     * @memberof Property
     */
    public object: T;

    /**
     * the name of the property/attribute on the object
     *
     * @memberof Property
     */
    public property: K;

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
     * @inheritdoc
     *
     * @public
     * @memberof Watched
     */
    public isShallow: boolean = true;

    /**
     * The value of the watcher if there is no sub object.
     * This will probably manipulated by a field.
     *
     * @private
     * @memberof Property
     */
    private value?: T[K];

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
        this.object = object;
        this.property = property;

        const capitalizedProp = ucFirst(property as string);

        const onInitFunc = `on${capitalizedProp}Init`;
        const onChangeFunc = `on${capitalizedProp}Change`;
        const onAddFunc = `on${capitalizedProp}Add`;
        const onRemoveFunc = `on${capitalizedProp}Remove`;

        this.onInit = params ? params.onInit || onInitFunc : onInitFunc;
        this.onChange = params ? params.onChange || onChangeFunc : onChangeFunc;
        this.onAdd = params ? params.onAdd || onAddFunc : onAddFunc;
        this.onRemove = params ? params.onRemove || onRemoveFunc : onRemoveFunc;

        this.isShallow = params && typeof params.isShallow === "boolean" ? params.isShallow : this.isShallow;
    }

    /**
     * Sets the value depending on the parameters which are passed into the
     * decorator and stops early if the value is not changed.
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
     * Follows the convention of the valueOf() method of most native objects.
     * This method will be called by some other objects and will get a managed
     * value depending on the parameters which are passed into the decorator.
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
        subObject.proxyHandlerReplacement = this.proxyHandler.bind(this);
        subObject.isShallow = this.isShallow;
        this.subObject = subObject;
    }

    /**
     * Handles the behavior of the proxy if value is an Object
     *
     * @param path The path where thy proxy action was triggered on
     * @param changedVal The value which was assigned or unassigned
     * @param prevVal The old value
     * @param name The name of the operation which triggered the handler and undefined if it was an assignment
     * @memberof Watched
     */
    public proxyHandler(path: string, changedVal: T[K], prevVal: T[K], name?: string) {
        if (this.subObject) this.subObject.proxyHandler(path, changedVal, prevVal);

        const addedElements: Record<string, any> = {};
        const removedElements: Record<string, any> = {};

        // Case added
        if (name === "push") Object.assign(addedElements, new Array(prevVal.length).concat(changedVal.slice(prevVal.length, changedVal.length)));
        if (name === "unshift") Object.assign(addedElements, changedVal.slice(0, changedVal.length - prevVal.length));

        // case removed
        if (name === "pop") Object.assign(removedElements, { [prevVal.length - 1]: prevVal[prevVal.length - 1] });
        if (name === "shift") Object.assign(removedElements, { 0: prevVal[0] });

        // case mixed
        if (name === "splice") {
            const calcPrevVal = [];
            const calcChangedVal = [];

            let startIndex = 0;
            let endIndex = 0;

            let startFound = false;
            let endFound = false;

            for (let index = 0; index < Math.max(changedVal.length, prevVal.length); index++) {
                const indexToUseFromBehind = prevVal.length >= changedVal.length ? prevVal.length - (1 + index) : changedVal.length - (1 + index);
                const lastPrevVal = prevVal.length - (1 + index) >= 0 ? prevVal[prevVal.length - (1 + index)] : undefined;
                const lastChangedVal = changedVal.length - (1 + index) >= 0 ? changedVal[changedVal.length - (1 + index)] : undefined;

                if (!endFound) {
                    if (lastChangedVal !== lastPrevVal) {
                        endIndex = indexToUseFromBehind;
                        endFound = true;
                    } else {
                        calcChangedVal[indexToUseFromBehind] = lastChangedVal;
                        calcPrevVal[indexToUseFromBehind] = lastPrevVal;
                    }
                }

                if (!startFound) {
                    if (prevVal[index] !== changedVal[index]) {
                        startIndex = index;
                        startFound = true;
                    } else {
                        calcChangedVal[index] = changedVal[index];
                        calcPrevVal[index] = prevVal[index];
                    }
                }

                if (startFound && endFound) {
                    for (let index = startIndex; index <= endIndex + (changedVal.length - prevVal.length); index++) {
                        calcChangedVal[index] = changedVal[index];
                    }
                    for (let index = startIndex; index <= endIndex + (prevVal.length - changedVal.length) + (prevVal.length >= changedVal.length ? 1 : 0); index++) {
                        calcPrevVal[index] = prevVal[index];
                    }
                    for (let index = startIndex; index < endIndex + 1; index++) {
                        const prevElement = calcPrevVal[index];
                        const changedElement = calcChangedVal[index];
                        if (prevElement) {
                            Object.assign(removedElements, { [index]: prevElement });
                            if (changedElement) Object.assign(addedElements, { [index]: changedElement });
                        } else Object.assign(addedElements, { [index]: changedElement });
                    }
                    break;
                }
            }
        }

        const keys = Array.from(new Set(Object.keys(addedElements).concat(Object.keys(removedElements))));
        for (const key of keys) {
            if (key in removedElements && isFunction(this.object[this.onRemove])) this.object[this.onRemove](removedElements[key], key.toString());
            if (key in addedElements && isFunction(this.object[this.onAdd])) this.object[this.onAdd](addedElements[key], key.toString());
        }
    }

    /**
     * Determines wether to set the value respecting the DOM attribute, old value and type
     *
     * @private
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

    /**
     * Constructs a proxy object around arrays and objects to get information
     * about changes inside of the watched objects.
     *
     * @private
     * @param value The value which should be converted into a proxy
     * @returns The proxy version of the value
     * @memberof Watched
     */
    private proxyfyValue(value?: any) {
        if (isArray(value) || isObject(value) && !isBDOModel(value)) {
            value = getProxyTarget(value);
            return onChange(value, (path, changedValue, previousValue) => {
                this.proxyHandler(path, <T[K]>changedValue, <T[K]>previousValue);
            }, { isShallow: this.isShallow, ignoreSymbols: true });
        }
        return value;
    }
}
