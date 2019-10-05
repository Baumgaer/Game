import { Attribute } from "~bdo/lib/Attribute";
import { Property } from "~bdo/lib/Property";
import { Watched } from "~bdo/lib/Watched";
import { BDOModel } from "~bdo/lib/BDOModel";
import { removeElementFromArray, getProxyTarget, isObject } from "~bdo/utils/util";
import { defineWildcardMetadata } from "~bdo/utils/metadata";
import onChange from "on-change";
import { Modification } from '~bdo/lib/Modification';

type watchedAttrProp<T extends Object, K extends DefNonFuncPropNames<T>> =
    Attribute<T, K> |
    Property<T, K> |
    Watched<T, K>;

/**
 * This is used to bundle the values which are bound and to handle all
 * mechanisms of watched, property and attribute in an organized way.
 *
 * @export
 * @class Field
 * @template T
 * @template K
 */
export class Field<T extends object = any, K extends DefNonFuncPropNames<T> = any> {

    /**
     * The model where this field is placed
     *
     * @type {T}
     * @memberof Field
     */
    public object: T;

    /**
     * The property of the model where the field is placed
     *
     * @type {K}
     * @memberof Field
     */
    public property: K;

    /**
     * The global value of all bound fields
     *
     * @private
     * @type {T[K]}
     * @memberof Field
     */
    private value?: T[K];

    /**
     * All fields which are bound to the model
     *
     * @private
     * @type {Array<watchedAttrProp<T, K>>}
     * @memberof Field
     */
    private fields: Array<watchedAttrProp<T, K>> = [];

    constructor(object: T, property: K) {
        this.object = object;
        this.property = property;
    }

    /**
     * Adds a field (watched, attribute, property) to this global field and
     * uses the value of the model field.
     *
     * @param {watchedAttrProp<T, K>} field
     * @returns
     * @memberof Field
     */
    public addField(field: watchedAttrProp<T, K>) {
        if (this.fields.includes(field)) return;
        // Take value of the model
        if (field.object && (<BDOModel>field.object).isBDOModel) this.value = this.proxyfyValue(field.valueOf());
        if (field instanceof Watched && field.subObject) this.redefineValue(field.subObject);
        this.redefineValue(field);
        this.fields.push(field);
    }

    /**
     * Removes a field from this global field and sets the value of the removed
     * field to the current value.
     *
     * @param {watchedAttrProp<T, K>} field
     * @returns
     * @memberof Field
     */
    public removeField(field: watchedAttrProp<T, K>) {
        if (!this.fields.includes(field)) return;
        if (field instanceof Watched && field.subObject) this.restoreValue(field.subObject);
        this.restoreValue(field);
        removeElementFromArray(this.fields, field);
    }

    /**
     * Follows the convention of all fields with its name and sets the values
     * of all registered fields.
     *
     * @param {(T[K] | Modification<any>)} [value]
     * @memberof Field
     */
    public setValue(value?: T[K] | Modification<any>) {
        for (const field of this.fields) field.setValue(value);
    }

    /**
     * Follows the convention of all fields with its name and returns the current value
     *
     * @returns
     * @memberof Field
     */
    public valueOf() {
        return this.value;
    }

    /**
     * Overwrites the property "value" of the added field to produce a global
     * proxy handler to ensure only one identity of observed objects.
     *
     * @private
     * @param {watchedAttrProp<T, K>} field
     * @returns
     * @memberof Field
     */
    private redefineValue(field: watchedAttrProp<T, K>) {
        defineWildcardMetadata(<Object>field, "value", field.valueOf());
        const that = this;
        Reflect.deleteProperty(field, "value");
        Reflect.defineProperty(field, "value", {
            get() {
                return that.value;
            },
            set(value: T[K]) {
                value = getProxyTarget(value);
                const thatValue = getProxyTarget(that.value);
                if (value === thatValue) return;
                that.value = that.proxyfyValue(value);
            },
            configurable: true,
            enumerable: true
        });
    }

    /**
     * Restores the original property "value" of the field
     *
     * @private
     * @param {watchedAttrProp<T, K>} field
     * @memberof Field
     */
    private restoreValue(field: watchedAttrProp<T, K>) {
        Reflect.deleteProperty(field, "value");
        field.setValue(getProxyTarget(this.value));
    }

    /**
     * Puts the value into a proxy to handle all proxy handler globally
     *
     * @private
     * @param {T[K]} value
     * @returns
     * @memberof Field
     */
    private proxyfyValue(value?: T[K]) {
        if (value instanceof Array || isObject(value) && !(<any>value).isBDOModel) {
            let isShallow = true;
            for (const field of this.fields) {
                if (!field.isShallow) {
                    isShallow = false;
                    break;
                }
            }
            value = onChange.target(value);
            return onChange(value, (path, changedValue, previousValue) => {
                const pathSize = path.split(".").length;
                for (const field of this.fields) {
                    if (!field.isShallow || field.isShallow && pathSize <= 1) {
                        field.proxyHandler(path, <T[K]>changedValue, <T[K]>previousValue);
                    }
                }
            }, { isShallow });
        }
        return value;
    }
}
