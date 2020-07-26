import { Property, IPropertyParams } from "~bdo/lib/Property";
import { AdvancedOptions } from "type-graphql/dist/decorators/types";
import { Modification } from "~bdo/lib/Modification";
import { constructTypeOfHTMLAttribute, getProxyTarget, isFunction } from '~bdo/utils/util';
import { IWatchAttrPropSettings, isComponent, BaseComponentInstance, isBDOModel } from "~bdo/utils/framework";
import { ConfigurationError } from "~bdo/lib/Errors";
import { ModelRegistry } from "~bdo/lib/ModelRegistry";

type prop<T> = DefNonFuncPropNames<T>;

/**
 * This parameters will only ba make sense when used in a model.
 * A Component or other objects will not be effected.
 *
 * @interface IAttributeParams
 * @see https://typegraphql.ml/docs/introduction.html
 */
export interface IAttributeParams extends IPropertyParams, AdvancedOptions {
    /**
     * If true the value will not be sent to server if value is set
     * or save() will be called. Only effects the behavior of a model.
     *
     * @default false
     * @type {boolean}
     * @memberof IAttributeParams
     */
    noServerInteraction?: boolean;

    /**
     * If true the value will not be sent to client if value is set
     * or save() will be called. Only effects the behavior of a model.
     *
     * @default false
     * @type {boolean}
     * @memberof IAttributeParams
     */
    noClientInteraction?: boolean;

    /**
     * If true the value will not be sent to p2p clients of current client if
     * value is set or save() will be called. Only effects the behavior of a model.
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
     * save timeout. Only effects the behavior of a model.
     *
     * @default false
     * @type {(boolean | number)}
     * @memberof IAttributeParams
     */
    autoSave?: boolean | number;

    /**
     * Defines wether to persist data in a Database like ArangoDB or IndexedDB.
     * Only effects the behavior of a model.
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
 * @extends Property
 */
export class Attribute<T extends Record<string, any> = any, K extends prop<T> = any> extends Property implements IAttributeParams {

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
     * @type {boolean}
     * @memberof Attribute
     */
    private inDOMInitialized: boolean = false;

    /**
     * Stores the timeout which is used to debounce the autosave of the attribute
     *
     * @memberof Attribute
     */
    private autoSaveTimeout?: NodeJS.Timeout;

    /**
     * Determines after the first call of doAutoSave whether it is allowed to automatically save the value or not
     *
     * @type {boolean}
     * @memberof Attribute
     */
    private autoSaveAllowed: boolean = false;

    constructor(object: T, property: K, params?: IWatchAttrPropSettings<IAttributeParams>) {
        super(object, property, params);
    }

    /**
     * @inheritdoc
     *
     * @param value The value to set to this attribute
     * @memberof Attribute
     */
    public setValue(value?: T[K] | Modification<any>) {
        if (!this.shouldDoSetValue(value)) return;
        let oldID;
        if (isBDOModel(this.object) && this.property === "id") oldID = this.ownValue;
        this.doSetValue(value, true, true);
        if (oldID) ModelRegistry.getInstance().updateID(oldID, this.object);
        this.reflectToDOMAttribute(value);
        this.doAutoSave();
    }

    /**
     * @inheritdoc
     *
     * @memberof Attribute
     */
    public proxyHandler(path?: string, changedVal?: T[K], prevVal?: T[K]) {
        const value = this.value;
        if (value === undefined || value === null) return;
        super.proxyHandler(path, changedVal, prevVal);
        this.reflectToDOMAttribute(value);
        this.doAutoSave();
    }

    /**
     * Compares the value of this attribute with the value in the IndexedDB and
     * returns this value if it is different from the value in the store. If the
     * value is an Array or an Object, only keys with changes will be returned.
     *
     * @memberof Attribute
     */
    public getUnsavedChange() {
        // Do Nothing at this time
    }

    /**
     * @inheritdoc
     *
     * @param value The value which should maybe set
     * @returns true if should be set and false else
     * @memberof Attribute
     */
    public shouldDoSetValue(value?: T[K] | Modification<any>, skipGuard: boolean = false) {
        if (isBDOModel(this.object) && isComponent<BaseComponentInstance>(this.object)) {
            const constructedType = constructTypeOfHTMLAttribute(this.object, this.property);
            if (!this.inDOMInitialized && this.object.getAttribute(this.property) && value !== constructedType) {
                this.setValue(constructedType);
                return false;
            }
        }
        return super.shouldDoSetValue(value, skipGuard);
    }

    /**
     * Prefers the value of the dom attribute and reactivates the setter of the
     * attribute to overwrite the programmatically given value.
     * SetValue is used by proxyHandler to avoid setting a new value is an object
     * has been changed.
     *
     * @param value The value to reflect
     * @memberof Attribute
     */
    public reflectToDOMAttribute(value?: T[K] | Modification<any>) {
        if (!isComponent<BaseComponentInstance>(this.object)) return;
        const stringKey = this.property.toString();
        const attrValue = this.object.getAttribute(stringKey);
        let setAttribute = true;
        let pTarget;

        let valueToPass = value;
        if (value instanceof Modification) valueToPass = value.valueOf();

        if (!this.inDOMInitialized && attrValue) {
            setAttribute = false;
        } else pTarget = getProxyTarget(valueToPass);
        this.inDOMInitialized = true;

        // Reflect property changes to attribute
        if (setAttribute && attrValue !== pTarget && attrValue !== JSON.stringify(pTarget).replace(/"/g, "'")) {
            (this.object).setAttribute(stringKey, pTarget, false);
        }
    }

    /**
     * Saves the attribute automatically if autoSave is defined and debounces
     * it if autosave is a number.
     *
     * @memberof Attribute
     */
    private doAutoSave() {
        if (this.autoSave && this.doNotPersist) {
            throw new ConfigurationError("You have turned on autosave but at the same time it is forbidden to persist the value!");
        }
        if (!this.autoSaveAllowed) {
            this.autoSaveAllowed = true;
            return;
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
