/* tslint:disable */
import { Attribute } from "~bdo/lib/Attribute";
import { Property } from "~bdo/lib/Property";
import { Watched } from "~bdo/lib/Watched";
import { BDOModel } from "~bdo/lib/BDOModel";
import { removeElementFromArray, getProxyTarget } from "~bdo/utils/util";
import { defineWildcardMetadata } from "~bdo/utils/metadata";
import onChange from "on-change";
import { isObject } from "lodash";
import { Modification } from '~bdo/lib/Modification';

type watchedAttrProp<T extends Object, K extends DefNonFuncPropNames<T>> =
    Attribute<T, K> |
    Property<T, K> |
    Watched<T, K>;

export class Field<T extends object = any, K extends DefNonFuncPropNames<T> = any> {

    public object: T;

    public property: K;

    private value?: T[K];

    private fields: Array<watchedAttrProp<T, K>> = [];

    constructor(object: T, property: K) {
        this.object = object;
        this.property = property;
    }

    public addField(field: watchedAttrProp<T, K>) {
        if (this.fields.includes(field)) return;
        if (field.object && (<BDOModel>field.object).isBDOModel) {
            const arrayObjProxy = this.getArrayObjectProxy(field.valueOf());
            this.value = arrayObjProxy;
        }
        if (field instanceof Watched && field.subObject) this.redefineValue(field.subObject);
        this.redefineValue(field);
        this.fields.push(field);
    }

    public removeField(field: watchedAttrProp<T, K>) {
        if (!this.fields.includes(field)) return;
        if (field instanceof Watched && field.subObject) this.restoreValue(field.subObject);
        this.restoreValue(field);
        removeElementFromArray(this.fields, field);
    }

    public setValue(value?: T[K] | Modification<any>) {
        for (const field of this.fields) field.setValue(value);
    }

    public valueOf() {
        return this.value;
    }

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
                that.value = that.getArrayObjectProxy(value);;
            },
            configurable: true,
            enumerable: true
        });
    }

    private restoreValue(field: watchedAttrProp<T, K>) {
        Reflect.deleteProperty(field, "value");
        field.setValue(getProxyTarget(this.value));
    }

    private getArrayObjectProxy(value: T[K]) {
        if (value instanceof Array || isObject(value)) {
            value = onChange.target(value);
            return onChange(value, (path, changedValue, previousValue) => {
                for (const field of this.fields) {
                    field.proxyHandler(path, <T[K]>changedValue, <T[K]>previousValue);
                }
            });
        }
        return value;
    }
}
