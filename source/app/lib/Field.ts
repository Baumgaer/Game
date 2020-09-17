import { isArray, isObject, getProxyTarget } from "~bdo/utils/util";
import { isBDOModel, diffChangedObject } from "~bdo/utils/framework";
import { Modification } from '~bdo/lib/Modification';
import onChange from "on-change";


export interface IFieldParams {

    /**
     * Disables the type guard on runtime. The TypeGuard of the API stays active!
     *
     * @memberof IFieldParams
     */
    disableTypeGuard?: boolean;
}

/**
 * This is the most general class of Distributor, Watched, Property and Attribute.
 * It should not be possible to initialize this class because it would ne necessary
 * to import the derived classes which fill cause an import loop.
 * So this class only contains the most general type guard and properties.
 *
 * @implements {IFieldParams}
 * @template T
 * @template K
 */
export abstract class Field<T extends Record<string, any> = any, K extends DefNonFuncPropNames<T> = any> implements IFieldParams {

    /**
     * A reference to the object where this property/attribute is defined on.
     * In case of "this" is an original field and not an attribute or property,
     * this.object will be a model.
     *
     * @memberof Field
     */
    public object: T;

    /**
     * the name of the property/attribute of this.object
     *
     * @memberof Field
     */
    public property: K;

    /**
     * @inheritdoc
     *
     * @memberof Field
     */
    public disableTypeGuard?: boolean;

    /**
     * The proxy handler which should be used instead of the own handler
     *
     * @memberof Property
     */
    public proxyHandlerReplacement?: this["proxyHandler"];

    /**
     * The value of the property / attribute.
     * If "this" is a property / attribute, this will probably manipulated by a field.
     * If "this" is an original field, this will be the global value of this.object[this.property].
     * If "this" is a watched field, this will hold the value if there is no sub object.
     *
     * @memberof Field
     */
    protected value?: T[K];

    constructor(object: T, property: K) {
        this.object = object;
        this.property = property;
    }

    /**
     * Follows the convention of the valueOf() method of most native objects.
     * This method will be called by some other objects and will get a managed
     * value depending on the parameters which are passed into the decorator.
     *
     * @returns The current value of the field
     * @memberof Field
     */
    public valueOf() {
        return this.value;
    }

    /**
     * Sets the value depending on the parameters which are passed into the
     * decorator and stops early if the value is not changed.
     *
     * @param value The value to set to the field
     * @memberof Field
     */
    public setValue(value: T[K]) {
        this.value = value;
    }

    /**
     * Checks if the given type is the required type and generates an error if not.
     * returns undefined if everything is OK and an error else.
     *
     * @param _value The value which should be checked for types
     * @returns undefined if no error occurred and an error else
     * @memberof Field
     */
    public typeGuard(_value?: T[K] | Modification<any>): Error | undefined {
        if (this.disableTypeGuard) return;
        // let valueToPass = value;
        // if (value instanceof Modification) valueToPass = value.valueOf();
        let error;
        return error;
    }

    /**
     * Handles the behavior of the proxy if value is an Object
     *
     * @param _path The path where thy proxy action was triggered on
     * @param _changedVal The value which was assigned or unassigned
     * @param _prevVal The old value
     * @param _name The name of the operation which triggered the handler and undefined if it was an assignment
     * @memberof Watched
     */
    public proxyHandler(_path: string, _changedVal: T[K], _prevVal: T[K], _name?: string) {
        throw new Error("proxy handler not implemented");
    }

    /**
     * Constructs a proxy object around arrays and objects to get information
     * about changes inside of the watched objects.
     *
     * @param value The value which should be converted into a proxy
     * @returns The proxy version of the value
     * @memberof Watched
     */
    protected proxyfyValue(value?: any) {
        if (!isArray(value) && !isObject(value) || isBDOModel(value)) return value;
        return onChange(getProxyTarget(value), (path, changedValue, previousValue, name) => {
            (this.proxyHandlerReplacement ?? this.proxyHandler).call(this, path, <T[K]>changedValue, <T[K]>previousValue, name);
        }, { isShallow: true, ignoreSymbols: true });
    }

    protected revertProxyChanges(oldValue: Record<string, any>, newValue: Record<string, any>, path: string, name?: string, addedElements?: Record<string, any>, removedElements?: Record<string, any>) {
        const pTargetValue = getProxyTarget(newValue);
        if (!addedElements || !removedElements) [addedElements, removedElements] = diffChangedObject(oldValue, pTargetValue, path, name);
        let deleteCount = 0;
        // Remove added elements
        for (const key in addedElements) {
            if (Object.prototype.hasOwnProperty.call(addedElements, key)) {
                if (isArray(pTargetValue)) {
                    pTargetValue.splice(parseInt(key, 10) - deleteCount, 1);
                    deleteCount++;
                } else delete pTargetValue[key];
            }
        }

        let addCount = 0;
        // Add removed elements
        for (const key in removedElements) {
            if (Object.prototype.hasOwnProperty.call(removedElements, key)) {
                const element = removedElements[key];
                if (isArray(pTargetValue)) {
                    pTargetValue.splice(parseInt(key, 10) + addCount, 0, element);
                    addCount++;
                } else pTargetValue[key] = element;
            }
        }
    }
}
