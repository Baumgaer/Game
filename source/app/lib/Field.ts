import { Attribute } from "~bdo/lib/Attribute";
import { Property } from "~bdo/lib/Property";
import { Watched } from "~bdo/lib/Watched";
import { removeElementFromArray, getProxyTarget, isObject, isArray } from "~bdo/utils/util";
import { isBDOModel } from "~bdo/utils/framework";
import { defineWildcardMetadata } from "~bdo/utils/metadata";
import onChange from "on-change";
import { Modification } from '~bdo/lib/Modification';

type watchedAttrProp<T extends Record<string, any>, K extends DefNonFuncPropNames<T>> =
    Attribute<T, K> |
    Property<T, K> |
    Watched<T, K>;

/**
 * This is used to bundle the values which are bound and to handle all
 * mechanisms of watched, property and attribute in an organized way.
 *
 * @template T
 * @template K
 */
export class Field<T extends Record<string, any> = any, K extends DefNonFuncPropNames<T> = any> {

    /**
     * The model where this field is placed
     *
     * @memberof Field
     */
    public object: T;

    /**
     * The property of the model where the field is placed
     *
     * @memberof Field
     */
    public property: K;

    /**
     * The global value of all bound fields
     *
     * @private
     * @memberof Field
     */
    private value?: T[K];

    /**
     * All fields which are bound to the model
     *
     * @private
     * @memberof Field
     */
    private fields: watchedAttrProp<T, K>[] = [];

    constructor(object: T, property: K) {
        this.object = object;
        this.property = property;
    }

    /**
     * Adds a field (watched, attribute, property) to this global field and
     * uses the value of the model field.
     *
     * @param field The field which should be added
     * @memberof Field
     */
    public addField(field: watchedAttrProp<T, K>) {
        if (this.fields.includes(field)) return;
        // Take value of the model
        if (isBDOModel(field.object)) this.value = this.proxyfyValue(field.valueOf());
        if (field instanceof Watched && field.subObject) this.redefineValue(field.subObject);
        this.redefineValue(field);
        this.fields.push(field);
    }

    /**
     * Removes a field from this global field and sets the value of the removed
     * field to the current value.
     *
     * @param field The field to remove
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
     * @param value The value which should be set
     * @memberof Field
     */
    public setValue(value?: T[K] | Modification<any>) {
        for (const field of this.fields) field.setValue(value);
    }

    /**
     * Follows the convention of all fields with its name and returns the current value
     *
     * @returns The current value of the field
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
     * @param field The field where the value should be redefined
     * @memberof Field
     */
    private redefineValue(field: watchedAttrProp<T, K>) {
        defineWildcardMetadata(field, "value", field.valueOf());
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
     * @param field The field where the value should be restored on
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
     * @param value The value of the field
     * @returns A proxy version of the value
     * @memberof Field
     */
    private proxyfyValue(value?: any) {
        if (!isArray(value) && !isObject(value) || isBDOModel(value)) return value;
        return onChange(getProxyTarget(value), (path, changedValue, previousValue, name) => {
            for (const field of this.fields) {
                field.proxyHandler(path, <T[K]>changedValue, <T[K]>previousValue, name);
            }
        }, { isShallow: true, ignoreSymbols: true });
    }
}
