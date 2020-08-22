import { Modification } from "~bdo/lib/Modification";
import { Field, IFieldParams } from "~bdo/lib/Field";
import { getMetadata, defineMetadata } from "~bdo/utils/metadata";
import { isBrowser } from "~bdo/utils/environment";
import { ucFirst, isProxy, isFunction, getProxyTarget } from "~bdo/utils/util";
import { IWatchAttrPropSettings, canGetNamespacedStorage } from "~bdo/utils/framework";

/**
 * This parameters should only be used in models and components other objects
 * should not be effected with this behavior.
 *
 * @interface IPropertyParams
 */
export interface IPropertyParams extends IFieldParams {

    /**
     * If true the value will be saved in localStorage until its deletion
     * in localStorage or in redis until its deletion in redis.
     * This is useful to relieve heavy databases.
     *
     * @default false Values will NOT be saved in cache
     * @memberof IPropertyParams
     */
    saveInLocalStorage?: boolean;

    /**
     * The name of the function which will be executed after basic type checking
     * and before final determination. The function must return a corresponding
     * error if something went wrong.
     *
     * @memberof IPropertyParams
     */
    onTypeCheck?: string;

    /**
     * Defines the name of the function which should be called when the type check fails.
     * By default it is onPropertyNameTypeCheckFail
     *
     * @memberof IPropertyParams
     */
    onTypeCheckFail?: string;

    /**
     * Defines the name of the function which will be executed if all type
     * checks are succeeded.
     *
     * @memberof IPropertyParams
     */
    onTypeCheckSuccess?: string;

}

/**
 * Holds all the logic for the parameters of property() decorator and manages
 * getting/setting the right value.
 */
export class Property<T extends Record<string, any> = any, K extends DefNonFuncPropNames<T> = any> extends Field<T, K> implements IPropertyParams {

    /**
     * @inheritdoc
     *
     * @memberof Property
     */
    public saveInLocalStorage?: boolean;

    /**
     * @inheritdoc
     *
     * @memberof Property
     */
    public onTypeCheckFail: string;

    /**
     * @inheritdoc
     *
     * @memberof Property
     */
    public onTypeCheck: string;

    /**
     * @inheritdoc
     *
     * @memberof Property
     */
    public onTypeCheckSuccess: string;

    /**
     * The value of the property / attribute this will probably manipulated by a field
     *
     * @protected
     * @memberof Property
     */
    protected value?: T[K];

    /**
     * This is the not manipulated value of this property / attribute and is
     * used for the decision whether to change the value or not.
     *
     * @protected
     * @memberof Property
     */
    protected ownValue?: T[K];

    constructor(object: T, property: K, params?: IWatchAttrPropSettings<IPropertyParams>) {
        super(object, property);
        let parameters: IPropertyParams = {};

        if (params && params.params) parameters = params.params;
        Object.assign(this, parameters);
        this.typeFunc = params && params.typeFunc;

        const capitalizedProp = ucFirst(property as string);
        const onTypeCheckFail = `on${capitalizedProp}TypeCheckFail`;
        const onTypeCheck = `on${capitalizedProp}TypeCheck`;
        const onTypeCheckSuccess = `on${capitalizedProp}TypeCheckSuccess`;

        this.onTypeCheckFail = parameters ? parameters.onTypeCheckFail || onTypeCheckFail : onTypeCheckFail;
        this.onTypeCheck = parameters ? parameters.onTypeCheck || onTypeCheck : onTypeCheck;
        this.onTypeCheckSuccess = parameters ? parameters.onTypeCheckSuccess || onTypeCheckSuccess : onTypeCheckSuccess;
    }

    /**
     * @inheritdoc
     *
     * @deprecated This method in not supported on specific fields
     * @memberof Property
     */
    public addField() {
        throw new Error("This method in not supported on specific fields");
    }

    /**
     * @inheritdoc
     *
     * @deprecated This method in not supported on specific fields
     * @memberof Property
     */
    public removeField() {
        throw new Error("This method in not supported on specific fields");
    }

    /**
     * @inheritdoc
     *
     * @param value The value to set on the property
     * @memberof Property
     */
    public setValue(value?: T[K] | Modification<any>) {
        this.doSetValue(value, true);
    }

    /**
     * @inheritdoc
     *
     * @returns The current value of the property
     * @memberof Property
     */
    public valueOf() {
        const stringKey = this.property.toString();
        // Get from Reflect storage
        let value = this.value;
        // Get from localStorage if saveInLocalStorage in params
        if (!isProxy(value) && this.saveInLocalStorage && canGetNamespacedStorage<T>(this.object)) {
            value = this.object.getNamespacedStorage(stringKey as K) as T[K] | undefined;
        }
        return value;
    }

    /**
     * @inheritdoc
     *
     * @param value The value which should be checked for types
     * @param previousError An error which occurred before. This will skip the super.typeGuard()
     * @returns Error if an error occurred and undefined else
     * @memberof Property
     */
    public typeGuard(value?: T[K] | Modification<any>, previousError?: Error) {
        let valueToPass = value;
        if (value instanceof Modification) valueToPass = value.valueOf();

        const idxStructObj = this.object;

        let error = previousError || super.typeGuard(value);

        // Do custom type checking
        if (!error && isFunction(idxStructObj[this.onTypeCheck])) error = idxStructObj[this.onTypeCheck](valueToPass);

        // React on success or error
        if (error) {
            if (isFunction(idxStructObj[this.onTypeCheckFail])) {
                idxStructObj[this.onTypeCheckFail](error);
            } else if (isFunction(idxStructObj.onTypeCheckFail)) {
                idxStructObj.onTypeCheckFail(error);
            } else throw error;
        } else if (isFunction(idxStructObj[this.onTypeCheckSuccess])) idxStructObj[this.onTypeCheckSuccess]();
        return error;
    }

    /**
     * @inheritdoc
     *
     * @param _path The path as a dot separated list where the proxy was triggered on
     * @param _changedVal The Value which has been assigned or unassigned
     * @param _prevVal The old value
     * @param _name The name of the operation which triggered the handler and undefined if it was an assignment
     * @memberof Property
     */
    public proxyHandler(_path?: string, _changedVal?: T[K], _prevVal?: T[K], _name?: string) {
        const value = this.value;
        if (value === undefined || value === null) return;
        this.doSetValue(getProxyTarget(value), false);
    }

    /**
     * Determines wether to set the value respecting the DOM attribute, old value and type
     *
     * @param value The value to check for set or not to set
     * @param skipGuard Wether to skip the type guard
     * @returns true if the value of the property should be set and false else
     * @memberof Property
     */
    public shouldDoSetValue(value?: T[K] | Modification<any>, skipGuard: boolean = false) {
        let typeGuardPassed = true;
        if (!skipGuard && !this.disableTypeGuard) typeGuardPassed = !this.typeGuard(value);
        if (typeGuardPassed && value !== this.ownValue) return true;
        return false;
    }

    /**
     * Executes value setting depending on modifyValue parameter and initialization
     * properties. It also reflects the value to the DOM when a binding node is present.
     *
     * @param value The value which should be set on the property
     * @param modifyValue Wether to change the value of the property or not
     * @param skipGuard Wether to skip the guard or not
     * @memberof Property
     */
    protected doSetValue(value?: T[K] | Modification<any>, modifyValue = true, skipGuard = false) {
        if (!this.shouldDoSetValue(value, skipGuard)) return;
        let valueToPass: T[K] | undefined;
        if (value instanceof Modification) {
            valueToPass = value.valueOf();
        } else valueToPass = value;
        if (modifyValue) {
            const proxy = this.proxyfyValue(valueToPass);
            this.value = proxy;
            this.ownValue = getProxyTarget(valueToPass);
        }
        if (isBrowser() && this.object instanceof HTMLElement && this.object.shadowRoot) {
            const contentNode = this.object.shadowRoot.lastElementChild;
            if (contentNode) {
                const bindingNode = contentNode.getElementsByTagName("bind").namedItem(this.property.toString());
                if (bindingNode) bindingNode.innerHTML = String(this.value);
            }
        }
        if (this.shouldUpdateNsStorage() && isFunction(this.object.setUpdateNamespacedStorage)) {
            this.object.setUpdateNamespacedStorage(this.property.toString(), valueToPass);
        }
    }

    /**
     * Decides wether to update the namespaced storage or not
     *
     * @returns true if the namespaced storage should be updated and false else
     * @memberof Property
     */
    protected shouldUpdateNsStorage() {
        if (!this.saveInLocalStorage || !isBrowser()) return false;
        const stringKey = this.property.toString();
        const keyShouldBeUpdated = getMetadata(this.object, "keyShouldBeUpdated") || {};
        if (keyShouldBeUpdated[stringKey]) return true;
        if (isFunction(this.object.getNamespacedStorage) &&
            this.object.getNamespacedStorage(stringKey) === undefined) {
            defineMetadata(this.object, "keyShouldBeUpdated", Object.assign(keyShouldBeUpdated, { [stringKey]: true }));
            return true;
        }
        return Boolean(getMetadata(this.object, "constructionComplete"));
    }
}
