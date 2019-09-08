import { NullableListOptions } from "type-graphql/dist/decorators/types";
import { Modification } from "~bdo/lib/Modification";
import { getMetadata, defineMetadata, getDesignType } from "~bdo/utils/metadata";
import { isBrowser } from "~bdo/utils/environment";
import { isPrimitive, ucFirst } from "~bdo/utils/util";
import { TypeError } from "~bdo/lib/Errors";

/**
 * This parameters should only be used in models and components other objects
 * should not be effected with this behavior.
 *
 * @interface IPropertyParams
 */
export interface IPropertyParams {
    /**
     * If set > 0 the value will expire after x milliseconds.
     * NOTE: On attributes this will turn on "doNotePersist" implicitly.
     *
     * @default 0 Means will stored permanently
     * @type {number}
     */
    storeTemporary?: number;

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
     * It also has effects to storeTemporary option. If this is true the value
     * will be set to undefined and defaultSetting else.
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
     * @type {number}
     * @memberof Property
     */
    public storeTemporary?: number;

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
     * The value of the property / attribute
     *
     * @protected
     * @type {T[K]}
     * @memberof Property
     */
    protected value?: T[K];

    /**
     * Holds the unix timestamp for expiration
     *
     * @protected
     * @type {number}
     * @memberof Property
     */
    protected expires?: number;

    /**
     * Holds the timeout handler in case the property / attribute has an expiration
     *
     * @protected
     * @type {NodeJS.Timeout}
     * @memberof Property
     */
    protected expirationTimeout?: NodeJS.Timeout;

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
    public setValue(value: T[K]) {
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
        if (this.saveInLocalStorage && "getNamespacedStorage" in this.object) {
            value = (<IndexStructure>this.object).getNamespacedStorage(stringKey);
        }
        // Execute expiration
        if (value && this.storeTemporary) {
            if (this.expires && this.expires < Date.now()) {
                const defaultSettings = getMetadata(this.object, "defaultSettings");
                value = defaultSettings && !this.nullable ? (<IndexStructure>defaultSettings)[stringKey] : undefined;
            } else value = this.value;
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
    public typeGuard(value: T[K]) {
        let valueToPass = value;
        if (value instanceof Modification) valueToPass = value.valueOf();

        const designType = getDesignType(this.object, this.property.toString());
        const typeError = new TypeError(`${valueToPass} is not type of ${designType.className || designType.name}`);

        let error;

        // Do basic type checking depending on annotated types in script
        if (!this.nullable && valueToPass === undefined) error = typeError;

        if (!error) {
            if (isPrimitive(valueToPass)) {
                if (typeof valueToPass !== designType.name.toLowerCase()) error = typeError;
            } else if (!(valueToPass instanceof designType)) error = typeError;
        }

        // Do custom type checking
        if (!error && this.onTypeCheck in this.object) {
            error = (<IndexStructure>this.object)[this.onTypeCheck](valueToPass);
        }

        // React on success or error
        if (error) {
            if (this.onTypeCheckFail in this.object) {
                (<IndexStructure>this.object)[this.onTypeCheckFail]();
            } else throw error;
        } else if (this.onTypeCheckSuccess in this.object) (<IndexStructure>this.object)[this.onTypeCheckSuccess]();
        return !(Boolean(error).valueOf());
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
    protected doSetValue(value: T[K], modifyValue: boolean) {
        if (this.valueOf() === value || (!this.disableTypeGuard && !this.typeGuard(value))) return;
        let valueToPass = value;
        if (value instanceof Modification) valueToPass = value.valueOf();
        if (modifyValue) this.value = valueToPass;
        this.addExpiration(value);
        if (this.shouldUpdateNsStorage() && "setUpdateNamespacedStorage" in this.object) {
            (<IndexStructure>this.object).setUpdateNamespacedStorage(this.property.toString(), valueToPass);
        }
    }

    /**
     * If the value should be stored temporary in the property descriptor,
     * then here the expiration date in unix timestamp will be added.
     *
     * @protected
     * @param {T[K]} newVal
     * @returns
     * @memberof Property
     */
    protected addExpiration(value: T[K]) {
        if (value === undefined || !this.storeTemporary || (value instanceof Modification && value.type === "delete")) {
            return;
        }

        const stringKey = this.property.toString();
        this.expires = Date.now() + this.storeTemporary;

        if (this.expirationTimeout) clearTimeout(this.expirationTimeout);
        this.expirationTimeout = setTimeout(() => {
            const defaultSettings = getMetadata(this.object, "defaultSettings") as IndexStructure;
            const delValue = defaultSettings && !this.nullable ? defaultSettings[stringKey] : undefined;
            (<IndexStructure>this.object)[stringKey] = new Modification(delValue);
        }, this.storeTemporary);
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
        if ("getNamespacedStorage" in this.object &&
            (<IndexStructure>this.object).getNamespacedStorage(stringKey) === undefined) {
            defineMetadata(this.object, "keyShouldBeUpdated", Object.assign(keyShouldBeUpdated, { [stringKey]: true }));
            return true;
        }
        return Boolean(getMetadata(this.object, "constructionComplete"));
    }
}
