import { Property } from "~bdo/lib/Property";
import { ucFirst } from "~bdo/utils/util";
import onChange from "on-change";
import { isObject } from 'lodash';
import cloneDeep from "clone-deep";
// import cloneDeep = require("clone-deep");

/**
 * This parameters are in fact for all objects with or without baseConstructor
 * but a baseConstructor can help to avoid strange behavior.
 *
 * @export
 * @interface IWatchParams
 */
export interface IWatchedParams {
    /**
     * The name of the function which should be called when the value will be initialized.
     * Gets a parameter with initial value.
     *
     * @type {string}
     * @memberof IWatchParams
     */
    onInit?: string;

    /**
     * The name of the function which should be called when the value will be changed
     * Gets a parameter with new value and if it is an object or array it gets
     * additionally a parameter with the path which was changed.
     *
     * @type {string}
     * @memberof IWatchParams
     */
    onChange?: string;

    /**
     * The name of the function which should be called when a value will be added to the array.
     * Gets a parameter with the added value and the path.
     *
     * @type {string}
     * @memberof IWatchParams
     */
    onAdd?: string;

    /**
     * The name of the function which should be called when a value will be removed from the array.
     * Gets a parameter with the removed value and the path.
     *
     * @type {string}
     * @memberof IWatchParams
     */
    onRemove?: string;

    /**
     * If true arrays and object will recursively observed for
     * changes, removes and additions.
     *
     * @default false No recursive observation
     * @type {boolean}
     * @memberof IWatchParams
     */
    isShallow?: boolean;
}

interface ICaseDetectParams {

    /**
     * length of keys1
     *
     * @type {number}
     * @memberof ICaseDetectParams
     */
    len1: number;
    /**
     * length of keys2
     *
     * @type {number}
     * @memberof ICaseDetectParams
     */
    len2: number;

    /**
     * Name of function to execute
     *
     * @type {string}
     * @memberof ICaseDetectParams
     */
    func: string;

    /**
     * First keys to detect the case
     *
     * @type {string[]}
     * @memberof ICaseDetectParams
     */
    keys1: string[];

    /**
     * Second keys to detect the case
     *
     * @type {string[]}
     * @memberof ICaseDetectParams
     */
    keys2: string[];

    /**
     * The changed value (the value not the name of the value) of an object or
     * array which is observed.
     *
     * @type {*}
     * @memberof ICaseDetectParams
     */
    changedValue: any;

    /**
     * The path of the changed value inside an object
     * (THIS is is name of the value with path).
     *
     * @type {string}
     * @memberof ICaseDetectParams
     */
    path: string;
}

/**
 * Holds all the logic of the watched decorator. If the decorator is used with
 * property or attribute, the corresponding decorator logic musst be passed into
 * this logic with setSubObject.
 *
 * @export
 * @class Watched
 */
export class Watched<T extends object = any, K extends DefNonFuncPropNames<T> = any> implements IWatchedParams {

    /**
     * A reference to the object where this property/attribute is defined on
     *
     * @type {*}
     * @memberof Property
     */
    public object: T;

    /**
     * the name of the property/attribute on the object
     *
     * @type {string}
     * @memberof Property
     */
    public property: K;

    /**
     * This is the real object which executes getter and setter if provided
     *
     * @type {Attribute}
     * @memberof Watched
     */
    public subObject?: Property;

    /**
     * @inheritdoc
     *
     * @public
     * @type {string}
     * @memberof Watched
     */
    public onInit: string;

    /**
     * @inheritdoc
     *
     * @public
     * @type {string}
     * @memberof Watched
     */
    public onChange: string;

    /**
     * @inheritdoc
     *
     * @public
     * @type {string}
     * @memberof Watched
     */
    public onAdd: string;

    /**
     * @inheritdoc
     *
     * @public
     * @type {string}
     * @memberof Watched
     */
    public onRemove: string;

    /**
     * @inheritdoc
     *
     * @public
     * @type {boolean}
     * @memberof Watched
     */
    public isShallow: boolean = false;

    /**
     * The value which will be used if no subObject is provided
     *
     * @protected
     * @type {T[K]}
     * @memberof Property
     */
    protected value?: any;

    /**
     * Marks the property / attribute as initialized so that the onInit function
     * is only execute once.
     *
     * @protected
     * @type {boolean}
     * @memberof Watched
     */
    protected isInitialized: boolean = false;

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

        this.isShallow = params ? Boolean(params.isShallow) : false;
    }

    /**
     * Sets the value depending on the parameters which are passed into the
     * decorator and stops early if the value is not changed.
     *
     * @param {T[K]} value
     * @returns
     * @memberof Watched
     */
    public setValue(value: T[K]) {
        let oldVal = this.valueOf();
        if (oldVal === value) return;

        // Make a deep copy of old value to pass an unchanged version to the onChange function
        oldVal = cloneDeep(oldVal);

        // Process array and object modification
        value = this.getArrayObjectProxy(value);

        if (this.subObject) {
            this.subObject.setValue(value);
        } else this.value = value;

        // React on variable changes
        if (this.onChange in this.object && this.isInitialized) (<IndexStructure>this.object)[this.onChange](oldVal);
        // React on initialization
        if (this.onInit in this.object && !this.isInitialized) (<IndexStructure>this.object)[this.onInit](value);
        this.isInitialized = true;
    }

    /**
     * Follows the convention of the valueOf() method of most native objects.
     * This method will be called by some other objects and will get a managed
     * value depending on the parameters which are passed into the decorator.
     *
     * @returns
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
     * @param {Property} subObject
     * @memberof Watched
     */
    public setSubObject(subObject: Property) {
        let value = onChange.unsubscribe(this.valueOf());
        // Process array and object modification
        value = this.getArrayObjectProxy(value);
        this.subObject = subObject;
        this.subObject.setValue(value);
    }

    /**
     * Constructs a proxy object around arrays and objects to get information
     * about changes inside of the watched objects.
     *
     * @private
     * @param {(any[] | object)} value
     * @returns
     * @memberof Watched
     */
    private getArrayObjectProxy(value: T[K]) {
        if (value instanceof Array || isObject(value)) {
            return onChange(value, (path, changedValue, previousValue) => {
                const newKeys = Object.keys(<object>changedValue);
                const oldKeys = Object.keys(<object>previousValue);
                const newLen = newKeys.length;
                const oldLen = oldKeys.length;

                // Case: added
                this.caseDetectExec({
                    len1: newLen,
                    len2: oldLen,
                    func: this.onAdd,
                    keys1: newKeys,
                    keys2: oldKeys,
                    changedValue,
                    path
                });
                // Case: removed
                this.caseDetectExec({
                    len1: oldLen,
                    len2: newLen,
                    func: this.onRemove,
                    keys1: oldKeys,
                    keys2: newKeys,
                    changedValue,
                    path
                });
                // Case: deep change
                if (newLen === oldLen && this.onChange in this && this.isInitialized) {
                    (<IndexStructure>this.object)[this.onChange](changedValue, path);
                }
            }, { isShallow: this.isShallow });
        }
        return value;
    }

    /**
     * Detects case of change and executes corresponding function
     *
     * @private
     * @param {ICaseDetectParams} cdParams
     * @memberof Watched
     */
    private caseDetectExec(cdParams: ICaseDetectParams) {
        if (cdParams.len1 > cdParams.len2 && cdParams.func in this.object) {
            for (const modified of cdParams.keys1) {
                if (!cdParams.keys2.includes(modified)) {
                    (<any>this.object)[cdParams.func]((cdParams.changedValue)[<any>modified], cdParams.path);
                    break;
                }
            }
        }
    }
}
