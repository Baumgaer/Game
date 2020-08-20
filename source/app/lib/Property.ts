import { NullableListOptions, ReturnTypeFunc } from "type-graphql/dist/decorators/types";
import { Modification } from "~bdo/lib/Modification";
import { getMetadata, defineMetadata, getDesignType } from "~bdo/utils/metadata";
import { isBrowser } from "~bdo/utils/environment";
import { isPrimitive, ucFirst, isProxy, isFunction, isObject, isArray, getProxyTarget } from "~bdo/utils/util";
import { IWatchAttrPropSettings, isBDOModel, canGetNamespacedStorage } from "~bdo/utils/framework";
import { TypeError } from "~bdo/lib/Errors";
import { typeCheck } from "type-check";
import onChange from "on-change";


interface IHistory<T extends Record<string, any> = any, K extends DefNonFuncPropNames<T> = any> {
    action: "set" | "insert" | "delete" | "increment" | "decrement",
    value?: T[K],
    key: null | string | number
}

/**
 * This parameters should only be used in models and components other objects
 * should not be effected with this behavior.
 *
 * @interface IPropertyParams
 */
export interface IPropertyParams {

    /**
     * If true the value will be saved in localStorage until its deletion
     * in localStorage or in redis until its deletion in redis.
     * This is useful to relieve heavy databases.
     *
     * @default false Values will NOT be saved in cache
     */
    saveInLocalStorage?: boolean;

    /**
     * Decides wether to be able to set values null or undefined on a property.
     * It is also used to generate a graphQL schema when used in an attribute.
     *
     * @default false
     * @memberof IPropertyParams
     */
    nullable?: boolean | NullableListOptions;

    /**
     * Disables the type guard on runtime. The TypeGuard of the API stays active!
     *
     * @memberof IPropertyParams
     */
    disableTypeGuard?: boolean;

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
export class Property<T extends Record<string, any> = any, K extends DefNonFuncPropNames<T> = any> implements IPropertyParams {

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
    public nullable?: boolean | NullableListOptions;

    /**
     * @inheritdoc
     *
     * @memberof Property
     */
    public disableTypeGuard?: boolean;

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
     * The proxy handler which should be used instead of the own handler
     *
     * @memberof Property
     */
    public proxyHandlerReplacement?: this["proxyHandler"];

    /**
     * A function which returns a more specific type than the design:type from
     * typescript.
     * With this you can define tuples or infer types inside an array or objects
     * which are not a model.
     *
     * @protected
     * @memberof Property
     */
    protected typeFunc?: ReturnTypeFunc;

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

    protected history: IHistory[] = [];

    constructor(object: T, property: K, params?: IWatchAttrPropSettings<IPropertyParams>) {
        this.object = object;
        this.property = property;
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
     * Sets the value depending on the parameters which are passed into the
     * decorator and stops early if the value is not changed.
     *
     * @param value The value to set on the property
     * @memberof Property
     */
    public setValue(value?: T[K] | Modification<any>) {
        this.doSetValue(value, true);
    }

    /**
     * Follows the convention of the valueOf() method of most native objects.
     * This method will be called by some other objects and will get a managed
     * value depending on the parameters which are passed into the decorator.
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
     * Checks if the given type is the required type and throws an error if not.
     * returns true if everything is OK and false else.
     *
     * @public
     * @param value The value which should be checked for types
     * @returns true if no error occurred and false else
     * @memberof Property
     */
    public typeGuard(value?: T[K] | Modification<any>) {
        let valueToPass = value;
        if (value instanceof Modification) valueToPass = value.valueOf();

        const typeFuncResult = this.typeFunc && this.typeFunc();
        const designType = getDesignType(this.object, this.property.toString());
        const typeError = new TypeError(`${valueToPass} is not type of ${designType.className || designType.name}`);
        const idxStructObj = this.object;

        let error;

        if (!this.nullable && (valueToPass === undefined || valueToPass === null)) error = typeError;

        if (!error) {
            if (isPrimitive(valueToPass)) {
                if (typeof valueToPass !== designType.name.toLowerCase()) {
                    if (!this.nullable || !(valueToPass === undefined || valueToPass === null)) error = typeError;
                }
            } else if (!(valueToPass instanceof designType)) {
                error = typeError;
            } else {
                if (isArray(typeFuncResult)) {
                    let checkString = `[${(<IndexStructure>typeFuncResult[0]).name} | Undefined]`;
                    if (typeFuncResult.length === 1 && !typeCheck(checkString, valueToPass)) error = new TypeError(`${valueToPass} is not assignable to type ${checkString}`);
                    checkString = `(${typeFuncResult.map((type) => (<IndexStructure>type).name).join(",")})`;
                    if (typeFuncResult.length > 1 && !typeCheck(checkString, valueToPass)) error = new TypeError(`${valueToPass} is not assignable to type ${checkString}`);
                }
            }
        }

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
        return !error;
    }

    /**
     * Handles the behavior of the proxy if value is an Object
     *
     * @param path The path as a dot separated list where the proxy was triggered on
     * @param changedVal The Value which has been assigned or unassigned
     * @param prevVal The old value
     * @param _name The name of the operation which triggered the handler and undefined if it was an assignment
     * @memberof Property
     */
    public proxyHandler(path?: string, changedVal?: T[K], prevVal?: T[K], _name?: string) {
        const value = this.value;
        if (value === undefined || value === null) return;
        this.doSetValue(getProxyTarget(value), false);
        if (path) {
            if (prevVal === undefined && changedVal !== undefined) this.history.push({ action: "insert", key: path, value: changedVal });
            if (prevVal !== undefined && changedVal === undefined) this.history.push(({ action: "delete", key: path }));
            if (prevVal !== undefined && changedVal !== undefined) this.history.push({ action: "set", key: path, value: changedVal });
        }
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
        if (!skipGuard && !this.disableTypeGuard) typeGuardPassed = this.typeGuard(value);
        if (typeGuardPassed && value !== this.ownValue) {
            return true;
        }
        return false;
    }

    /**
     * Executes value setting depending on modifyValue parameter and initialization
     * properties. It also reflects the value to the DOM when a binding node is present.
     *
     * @protected
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
            const proxyfied = this.proxyfyValue(valueToPass);
            this.value = proxyfied;
            this.ownValue = getProxyTarget(valueToPass);
            if (!isProxy(valueToPass)) this.history.push({ action: "set", key: null, value: valueToPass });
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
     * Proxyfies the value to detect changes in objects and execute behavior if wanted
     *
     * @protected
     * @param value The value which should be converted to a proxy
     * @returns The proxy version of the value
     * @memberof Property
     */
    protected proxyfyValue(value?: any) {
        if (isArray(value) || isObject(value) && !isBDOModel(value)) {
            value = getProxyTarget(value);
            return onChange(value, (path, changedVal, prevVal) => {
                if (this.proxyHandlerReplacement) {
                    this.proxyHandlerReplacement(path, <T[K]>changedVal, <T[K]>prevVal);
                } else this.proxyHandler(path, <T[K]>changedVal, <T[K]>prevVal);
            }, { isShallow: true, ignoreSymbols: true });
        }
        return value;
    }

    /**
     * Decides wether to update the namespaced storage or not
     *
     * @protected
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
