import { Field } from '~bdo/lib//Field';
import { Watched } from "~bdo/lib/Watched";
import { Attribute } from "~bdo/lib/Attribute";
import { Property } from "~bdo/lib/Property";
import { Modification } from '~bdo/lib/Modification';
import { removeElementFromArray, getProxyTarget, isArray, isObject, isValue } from "~bdo/utils/util";
import { isBDOModel, diffChangedObject } from "~bdo/utils/framework";
import { defineWildcardMetadata, getMetadata } from "~bdo/utils/metadata";

type watchedAttrProp<T extends Record<string, any>, K extends DefNonFuncPropNames<T>> =
    Attribute<T, K> |
    Property<T, K> |
    Watched<T, K>;

/**
 * This is used to bundle the values which are bound to handle all
 * mechanisms of the decorators watched, property and attribute in an organized way.
 *
 * @template T
 * @template K
 */
export class Distributor<T extends Record<string, any> = any, K extends DefNonFuncPropNames<T> = any> extends Field {

    /**
     * All fields which are bound to the model
     *
     * @memberof Distributor
     */
    private fields: watchedAttrProp<T, K>[] = [];

    /**
     * Adds a field (watched, attribute, property) to this global field and
     * uses the value of the model field.
     *
     * @param field The field which should be added
     * @memberof Distributor
     */
    public addField(field: watchedAttrProp<T, K>) {
        if (this.fields.includes(field)) return;
        // Take value of the model
        if (isBDOModel(field.object)) {
            this.value = this.proxyfyValue(field.valueOf());
            this.disableTypeGuard = field.disableTypeGuard;
            this.typeFunc = field.typeFunc;
            field.disableTypeGuard = true;
        }
        if (field instanceof Watched && field.subObject) this.redefineValue(field.subObject);
        this.redefineValue(field);
        this.fields.push(field);
    }

    /**
     * Removes a field from this global field and sets the value of the removed
     * field to the current value.
     *
     * @param field The field to remove
     * @memberof Distributor
     */
    public removeField(field: watchedAttrProp<T, K>) {
        if (!this.fields.includes(field)) return;
        if (field instanceof Watched) {
            if (field.subObject) {
                this.restoreValue(field.subObject);
                if (field.subObject instanceof Attribute) {
                    field.subObject.disableTypeGuard = getMetadata(field.subObject.object, "definedAttributes")?.get(field.subObject.property)?.params?.disableTypeGuard;
                } else if (field.subObject instanceof Property) {
                    field.subObject.disableTypeGuard = getMetadata(field.subObject.object, "definedProperties")?.get(field.subObject.property)?.params?.disableTypeGuard;
                }
            }
        }
        this.restoreValue(field);
        removeElementFromArray(this.fields, field);
    }

    /**
     * @inheritdoc
     *
     * @param value The value which should be set
     * @memberof Distributor
     */
    public setValue(value?: T[K] | Modification<any>) {
        const error = this.typeGuard(value);
        for (const field of this.fields) {
            if (field.typeGuard(value, error)) continue;
            field.setValue(value);
        }
    }

    /**
     * @inheritdoc
     *
     * @param path The path where thy proxy action was triggered on
     * @param changedValue The value which was assigned or unassigned
     * @param previousValue The old value
     * @param name The name of the operation which triggered the handler and undefined if it was an assignment
     * @memberof Distributor
     */
    public proxyHandler(path: string, changedValue?: T[K], previousValue?: T[K], name?: string) {
        const value = this.value;
        if (!isValue(value)) return;
        const pTargetValue = getProxyTarget(this.value);

        // Reconstruct objects in case of an assignment
        let oldValue: Record<string, any> = isObject(previousValue) ? previousValue : {};
        if (path && !name) {
            if (isArray(this.value)) {
                oldValue = pTargetValue.slice();
                oldValue[parseInt(path, 10)] = previousValue;
            }
            if (isObject(this.value)) {
                oldValue = Object.assign({}, pTargetValue);
                oldValue[path] = previousValue;
            }
        }

        const error = this.typeGuard(this.value);

        let otherError;
        let addedElements;
        let removedElements;

        for (const field of this.fields) {
            otherError = field.typeGuard(this.value, error);
            if (otherError) continue;
            if (field instanceof Watched) {
                // Determine changes once!
                if (!addedElements || !removedElements) [addedElements, removedElements] = diffChangedObject(oldValue, pTargetValue, path, name);
                field.proxyHandler(path, <T[K]>changedValue, <T[K]>previousValue, name, addedElements, removedElements);
            } else field.proxyHandler(path, <T[K]>changedValue, <T[K]>previousValue, name);
        }

        if (otherError) this.revertProxyChanges(oldValue, pTargetValue, path, name, addedElements, removedElements);
    }

    /**
     * Overwrites the property "value" of the added field to produce a global
     * proxy handler to ensure only one identity of observed objects.
     *
     * @private
     * @param field The field where the value should be redefined
     * @memberof Distributor
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
     * @memberof Distributor
     */
    private restoreValue(field: watchedAttrProp<T, K>) {
        Reflect.deleteProperty(field, "value");
        field.setValue(getProxyTarget(this.value));
    }
}
