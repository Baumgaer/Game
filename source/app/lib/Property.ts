import { NullableListOptions } from "type-graphql/dist/decorators/types";
import { Modification } from "~bdo/lib/Modification";
import { getMetadata, defineMetadata, getDesignType } from "~bdo/utils/metadata";
import { isBrowser } from "~bdo/utils/environment";
import { isPrimitive, ucFirst } from "~bdo/utils/util";
import { TypeError } from "~bdo/lib/Errors";
import onChange from "on-change";
import { isFunction } from "lodash";

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
     * @type {boolean}
     */
    saveInLocalStorage?: boolean;

    /**
     * Decides wether to be able to set values null or undefined on a property.
     * It is also used to generate a graphQL schema when used in an attribute.
     *
     * @default false
     * @type {boolean}
     * @memberof IPropertyParams
     */
    nullable?: boolean | NullableListOptions;

    /**
     * Disables the type guard on runtime. The TypeGuard of the API stays active!
     *
     * @type {boolean}
     * @memberof IPropertyParams
     */
    disableTypeGuard?: boolean;

    /**
     * The name of the function which will be executed after basic type checking
     * and before final determination. The function must return true if everything
     * is ok and false else.
     *
     * @type {string}
     * @memberof IPropertyParams
     */
    onTypeCheck?: string;

    /**
     * Defines the name of the function which should be called when the type check fails.
     * By default it is onPropertyNameTypeCheckFail
     *
     * @type {string}
     * @memberof IPropertyParams
     */
    onTypeCheckFail?: string;

    /**
     * Defines the name of the function which will be executed if all type
     * checks are succeeded.
     *
     * @type {string}
     * @memberof IPropertyParams
     */
    onTypeCheckSuccess?: string;

}

/**
 * Holds all the logic for the parameters of property() decorator and manages
 * getting/setting the right value.
 *
 * @export
 * @class Property
 */
export class Property<T extends object = any, K extends DefNonFuncPropNames<T> = any> implements IPropertyParams {

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
    public property: K | Modification<any>;

    /**
     * @inheritdoc
     *
     * @type {boolean}
     * @memberof Property
     */
    public saveInLocalStorage?: boolean;

    /**
     * @inheritdoc
     *
     * @type {(boolean | NullableListOptions)}
     * @memberof Property
     */
    public nullable?: boolean | NullableListOptions;

    /**
     * @inheritdoc
     *
     * @type {boolean}
     * @memberof Property
     */
    public disableTypeGuard?: boolean;

    /**
     * @inheritdoc
     *
     * @type {string}
     * @memberof Property
     */
    public onTypeCheckFail: string;

    /**
     * @inheritdoc
     *
     * @type {string}
     * @memberof Property
     */
    public onTypeCheck: string;

    /**
     * @inheritdoc
     *
     * @type {string}
     * @memberof Property
     */
    public onTypeCheckSuccess: string;

    /**
     * The value of the property / attribute this will probably manipulated by a field
     *
     * @protected
     * @type {T[K]}
     * @memberof Property
     */
    protected value?: T[K];

    /**
     * This is the not manipulated value of this property / attribute and is
     * used for the decision whether to change the value or not.
     *
     * @protected
     * @type {T[K]}
     * @memberof Property
     */
    protected ownValue?: T[K];

    constructor(object: T, property: K, params?: IPropertyParams) {
        this.object = object;
        this.property = property;
        Object.assign(this, params);

        const capitalizedProp = ucFirst(property as string);
        const onTypeCheckFail = `on${capitalizedProp}TypeCheckFail`;
        const onTypeCheck = `on${capitalizedProp}TypeCheck`;
        const onTypeCheckSuccess = `on${capitalizedProp}TypeCheckSuccess`;

        this.onTypeCheckFail = params ? params.onTypeCheckFail || onTypeCheckFail : onTypeCheckFail;
        this.onTypeCheck = params ? params.onTypeCheck || onTypeCheck : onTypeCheck;
        this.onTypeCheckSuccess = params ? params.onTypeCheckSuccess || onTypeCheckSuccess : onTypeCheckSuccess;
    }

    /**
     * Sets the value depending on the parameters which are passed into the
     * decorator and stops early if the value is not changed.
     *
     * @param {T[K]} value
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
     * @returns
     * @memberof Property
     */
    public valueOf() {
        const stringKey = this.property.toString();
        // Get from Reflect storage
        let value = this.value;
        // Get from localStorage if saveInLocalStorage in params
        if (this.saveInLocalStorage && isFunction((<IndexStructure>this.object).getNamespacedStorage)) {
            value = (<IndexStructure>this.object).getNamespacedStorage(stringKey);
        }
        return value;
    }

    /**
     * Checks if the given type is the required type and throws an error if not.
     * returns true if everything is OK and false else.
     *
     * @public
     * @param {T[K]} value
     * @memberof Property
     */
    public typeGuard(value?: T[K] | Modification<any>) {
        let valueToPass = value;
        if (value instanceof Modification) valueToPass = value.valueOf();

        const designType = getDesignType(this.object, this.property.toString());
        const typeError = new TypeError(`${valueToPass} is not type of ${designType.className || designType.name}`);
        const idxStructObj: IndexStructure = this.object;

        let error;

        if (!this.nullable && (valueToPass === undefined || valueToPass === null)) error = typeError;

        if (!error) {
            if (isPrimitive(valueToPass)) {
                if (typeof valueToPass !== designType.name.toLowerCase()) {
                    if (!this.nullable || !(valueToPass === undefined || valueToPass === null)) error = typeError;
                }
            } else if (!(valueToPass instanceof designType)) error = typeError;
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
        return !(Boolean(error).valueOf());
    }

    /**
     * Handles the behavior of the proxy if value is an Object
     *
     * @memberof Property
     */
    public proxyHandler(_path?: string, _changedVal?: T[K], _prevVal?: T[K], _attrReflectsToObj: boolean = true) {
        const value = this.value;
        if (value === undefined || value === null) return;
        this.doSetValue(onChange.target(value), false);
    }

    /**
     * Executes value setting depending on modifyValue parameter and initialization
     * properties.
     *
     * @protected
     * @param {T[K]} value
     * @param {boolean} modifyValue
     * @returns
     * @memberof Property
     */
    protected doSetValue(value?: T[K] | Modification<any>, modifyValue: boolean = true, skipGuard: boolean = false) {
        if (value === this.ownValue || !skipGuard && !this.disableTypeGuard && !this.typeGuard(value)) return;
        let valueToPass: T[K] | undefined;
        if (value instanceof Modification) {
            valueToPass = value.valueOf();
        } else valueToPass = value;
        if (modifyValue) {
            const proxyfied = this.proxyfyValue(valueToPass);
            this.value = proxyfied;
            this.ownValue = proxyfied;
        }
        if (this.shouldUpdateNsStorage() && isFunction((<IndexStructure>this.object).setUpdateNamespacedStorage)) {
            (<IndexStructure>this.object).setUpdateNamespacedStorage(this.property.toString(), valueToPass);
        }
    }

    /**
     * Proxyfyes the value to detect changes in objects and execute behavior if wanted
     *
     * @protected
     * @param {T[K]} [value]
     * @returns
     * @memberof Property
     */
    protected proxyfyValue(value?: T[K]) {
        if (value instanceof Array) {
            value = onChange.target(value);
            return onChange(value, (path, changedVal, prevVal) => {
                this.proxyHandler(path, <T[K]>changedVal, <T[K]>prevVal, false);
            });
        }
        return value;
    }

    /**
     * Decides wether to update the namespaced storage or not
     *
     * @protected
     * @returns {boolean}
     * @memberof Property
     */
    protected shouldUpdateNsStorage() {
        if (!this.saveInLocalStorage || !isBrowser()) return false;
        const stringKey = this.property.toString();
        const keyShouldBeUpdated = getMetadata(this.object, "keyShouldBeUpdated") || {};
        if (keyShouldBeUpdated[stringKey]) return true;
        if (isFunction((<IndexStructure>this.object).getNamespacedStorage) &&
            (<IndexStructure>this.object).getNamespacedStorage(stringKey) === undefined) {
            defineMetadata(this.object, "keyShouldBeUpdated", Object.assign(keyShouldBeUpdated, { [stringKey]: true }));
            return true;
        }
        return Boolean(getMetadata(this.object, "constructionComplete"));
    }
}
