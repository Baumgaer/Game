import { Property, IPropertyParams } from "~bdo/lib/Property";
import { AdvancedOptions } from "type-graphql/dist/decorators/types";
import { isBrowser } from '~bdo/utils/environment';
import { Modification } from "~bdo/lib/Modification";
import { constructTypeOfHTMLAttribute, getProxyTarget, isPrimitive } from '~bdo/utils/util';
import { ConfigurationError } from "~bdo/lib/Errors";
import { isFunction } from "lodash";

type prop<T> = DefNonFuncPropNames<T>;

/**
 * This parameters will only ba make sense when used in a model.
 * A Component or other objects will not be effected.
 *
 * @interface IAttributeParams
 */
export interface IAttributeParams extends IPropertyParams, AdvancedOptions {
    /**
     * If true the value will not be sent to server if value is set
     * or save() will be called.
     *
     * @default false
     * @type {boolean}
     * @memberof IAttributeParams
     */
    noServerInteraction?: boolean;

    /**
     * If true the value will not be sent to client if value is set
     * or save() will be called.
     *
     * @default false
     * @type {boolean}
     * @memberof IAttributeParams
     */
    noClientInteraction?: boolean;

    /**
     * If true the value will not be sent to p2p clients of current client if
     * value is set or save() will be called.
     *
     * @default false
     * @type {boolean}
     * @memberof IAttributeParams
     */
    noP2PInteraction?: boolean;

    /**
     * If true, value will be saved automatically and immediately.
     * If it is a number > 0 the value will be saved automatically but
     * debounced which means that the number is the time in milliseconds of
     * save timeout.
     *
     * @default false
     * @type {(boolean | number)}
     * @memberof IAttributeParams
     */
    autoSave?: boolean | number;

    /**
     * Defines wether to persist data in a Database like ArangoDB or IndexedDB.
     *
     * @type {boolean}
     * @memberof IAttributeParams
     */
    doNotPersist?: boolean;
}

/**
 * Holds all the logic for the parameters of attribute() decorator and manages
 * getting/setting the right value.
 *
 * @export
 * @class Attribute
 * @extends {Property}
 */
export class Attribute<T extends object = any, K extends prop<T> = any> extends Property implements IAttributeParams {

    /**
     * @inheritdoc
     *
     * @type {boolean}
     * @memberof Attribute
     */
    public noServerInteraction?: boolean;

    /**
     * @inheritdoc
     *
     * @type {boolean}
     * @memberof Attribute
     */
    public noClientInteraction?: boolean;

    /**
     * @inheritdoc
     *
     * @type {boolean}
     * @memberof Attribute
     */
    public noP2PInteraction?: boolean;

    /**
     * @inheritdoc
     *
     * @type {(boolean | number)}
     * @memberof Attribute
     */
    public autoSave?: boolean | number;

    /**
     * @inheritdoc
     *
     * @type {boolean}
     * @memberof Attribute
     */
    public doNotPersist?: boolean;

    /**
     * Marks if an attribute is initialized on a DOM element
     *
     * @protected
     * @type {boolean}
     * @memberof Attribute
     */
    protected inDOMInitialized: boolean = false;

    /**
     * Stores the timeout which is used to debounce the autosave of the attribute
     *
     * @private
     * @type {NodeJS.Timeout}
     * @memberof Attribute
     */
    private autoSaveTimeout?: NodeJS.Timeout;

    constructor(object: T, property: K, params?: IAttributeParams) {
        super(object, property, params);
    }

    /**
     * @inheritdoc
     *
     * @param {T[K]} value
     * @memberof Attribute
     */
    public setValue(value?: T[K] | Modification<any>) {
        if (!this.shouldDoSetValue(value)) return;
        this.doSetValue(value);
        this.reflectToDOMAttribute(value);
        this.doAutoSave();
    }

    /**
     * @inheritdoc
     *
     * @returns
     * @memberof Attribute
     */
    public proxyHandler(_path?: string, _changedVal?: T[K], _prevVal?: T[K], attrReflectsToObj: boolean = true) {
        const value = this.value;
        if (value === undefined || value === null) return;
        this.doSetValue(getProxyTarget(value));
        this.reflectToDOMAttribute(value, attrReflectsToObj);
        this.doAutoSave();
    }

    /**
     * Compares the value of this attribute with the value in the IndexedDB and
     * returns this value if it is different from the value in the store. If the
     * value is an Array or an Object, only keys with changes will be returned.
     *
     * @memberof Attribute
     */
    public getUnsavedChange() { }

    /**
     * @inheritdoc
     *
     * @public
     * @param {(T[K] | Modification<any>)} [value]
     * @returns
     * @memberof Attribute
     */
    public shouldDoSetValue(value?: T[K] | Modification<any>, skipGuard: boolean = false) {
        if (isBrowser() && !this.object.isBDOModel && (this.object instanceof HTMLElement)) {
            const constructedType = constructTypeOfHTMLAttribute(this.object, this.property);
            if (!this.inDOMInitialized && this.object.getAttribute(this.property) && value !== constructedType) {
                (<T>this.object)[<K>this.property] = constructedType;
                return false;
            }
        }
        return !(value === this.ownValue || !skipGuard && !this.disableTypeGuard && !this.typeGuard(value));
    }

    /**
     * Prefers the value of the dom attribute and reactivates the setter of the
     * attribute to overwrite the programmatically given value.
     * SetValue is used by proxyHandler to avoid setting a new value is an object
     * has been changed.
     *
     * @protected
     * @param {(T[K] | Modification<any>)} [value]
     * @param {boolean} [setValue=true]
     * @returns
     * @memberof Attribute
     */
    protected reflectToDOMAttribute(value?: T[K] | Modification<any>, setValue: boolean = true) {
        if (!isBrowser() || !(this.object instanceof HTMLElement)) return;
        const stringKey = this.property.toString();
        const attrValue = this.object.getAttribute(stringKey);
        let setAttribute = true;
        let pTarget;

        let valueToPass = value;
        if (value instanceof Modification) {
            valueToPass = value.valueOf();
            if (value.type === "delete" && !isPrimitive(value.valueOf())) setValue = false;
        }

        if (!this.inDOMInitialized && attrValue) {
            setAttribute = false;
        } else pTarget = getProxyTarget(valueToPass);
        this.inDOMInitialized = true;

        // Reflect property changes to attribute
        if (setAttribute && attrValue !== pTarget && attrValue !== JSON.stringify(pTarget).replace(/\"/g, "'")) {
            (<any>this.object).setAttribute(stringKey, pTarget, setValue);
        }
    }

    /**
     * Saves the attribute automatically if autoSave is defined and debounces
     * it if autosave is a number.
     *
     * @protected
     * @returns
     * @memberof Attribute
     */
    protected doAutoSave() {
        if (this.autoSave && this.doNotPersist) {
            throw new ConfigurationError("You have turned on autosave but at the same time it is forbidden to persist the value!");
        }
        if (!this.autoSave || !isFunction(this.object.save)) return;
        if (typeof this.autoSave === "boolean") this.object.save(this.property);
        if (typeof this.autoSave === "number" && !this.autoSaveTimeout) {
            this.autoSaveTimeout = setTimeout(() => {
                this.object.save(this.property);
                delete this.autoSaveTimeout;
            }, Math.abs(this.autoSave));
        }
    }
}
