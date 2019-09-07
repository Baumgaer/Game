import { Property, IPropertyParams } from "~bdo/lib/Property";
import { AdvancedOptions } from "type-graphql/dist/decorators/types";
import { isBrowser } from '~bdo/utils/environment';
import { Modification } from "~bdo/lib/Modification";
import { constructTypeOfHTMLAttribute } from '~bdo/utils/util';

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
     * holds changes of the attribute which are not saved or discarded
     *
     * @public
     * @type {T[K]}
     * @memberof Attribute
     */
    public unsavedChange?: T[K];

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
    public setValue(value: T[K]) {
        if (this.valueOf() === value) return;
        this.doSetValue(value);
        this.reflectToDOMAttribute(value);
        this.doAutoSave();
    }

    /**
     * valueOf
     */
    public valueOf() {
        let value = super.valueOf();
        if (this.unsavedChange && !this.storeTemporary && !this.doNotPersist && this.object.isBDOModel) {
            value = this.unsavedChange;
        }
        return value;
    }

    /**
     * Prefers the value of the dom attribute and reactivates the setter of the
     * attribute to overwrite the programmatically given value.
     *
     * @protected
     * @returns
     * @memberof Attribute
     */
    protected reflectToDOMAttribute(value: any) {
        if (!isBrowser() || !(this.object instanceof HTMLElement)) return;
        let valueToPass = value;
        if (value instanceof Modification) valueToPass = value.valueOf();

        const stringKey = this.property.toString();
        const attrValue = this.object.getAttribute(stringKey);
        let setAttribute = true;

        if (!this.inDOMInitialized && attrValue) {
            // Determine type of attribute
            const valueToSet = constructTypeOfHTMLAttribute(this.object, this.property);
            // Set the real value and redo setter
            (<IndexStructure>this.object)[stringKey] = valueToSet;
            this.inDOMInitialized = true;
            setAttribute = false;
        }
        // Reflect property changes to attribute
        if (setAttribute && attrValue !== JSON.stringify(valueToPass)) this.object.setAttribute(stringKey, valueToPass);
    }

    /**
     * Stores values in unsavedChanges if object is an BDOModel. Normally this
     * will be used in methods called save() or discard(). If a modification of
     * type fromServer is passed in it will not update the unsaved changes
     *
     * @protected
     * @param {*} value
     * @returns
     * @memberof Attribute
     */
    protected doSetValue(value: T[K]) {
        let valueToPass = value;
        if (value instanceof Modification) valueToPass = value.valueOf();
        super.doSetValue(value, false);
        if (!this.object.isBDOModel || this.storeTemporary || this.doNotPersist || (
            value instanceof Modification && value.type === "update")) {
            this.value = valueToPass;
        } else {
            if (valueToPass === undefined && valueToPass !== super.valueOf()) {
                this.unsavedChange = new Modification() as unknown as T[K];
            } else this.unsavedChange = valueToPass;
        }
        if (value === super.valueOf()) this.unsavedChange = undefined;
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
        if (!this.autoSave) return;
        if (typeof this.autoSave === "boolean") this.object.save(this.property);
        if (typeof this.autoSave === "number" && !this.autoSaveTimeout) {
            this.autoSaveTimeout = setTimeout(() => {
                this.object.save(this.property);
                delete this.autoSaveTimeout;
            }, Math.abs(this.autoSave));
        }
    }
}
