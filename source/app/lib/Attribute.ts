import { Property, IPropertyParams } from "~bdo/lib/Property";
import { AdvancedOptions } from "type-graphql/dist/decorators/types";
import { isBrowser } from '../utils/environment';

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
}

/**
 * Test
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
     * Marks if an attribute is initialized on a DOM element
     *
     * @protected
     * @type {boolean}
     * @memberof Attribute
     */
    protected inDOMInitialized: boolean = false;

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
        super.setValue(value);
        this.reflectToDOMAttribute();
    }

    /**
     * Prefers the value of the dom attribute and reactivates the setter of the
     * attribute to overwrite the programmatically given value.
     *
     * @protected
     * @returns
     * @memberof Attribute
     */
    protected reflectToDOMAttribute() {
        if (!isBrowser()) return;
        const stringKey = this.property.toString();

        if (this.object instanceof HTMLElement) {
            const attrValue = this.object.getAttribute(stringKey);

            if (!this.inDOMInitialized && attrValue) {
                this.inDOMInitialized = true;
                // Set the real value and redo setter
                (<IndexStructure>this.object)[stringKey] = attrValue;
                return;
            } else this.inDOMInitialized = true;
            // Reflect property changes to attribute
            if (attrValue !== this.value) this.object.setAttribute(stringKey, this.value);
        }
    }
}
