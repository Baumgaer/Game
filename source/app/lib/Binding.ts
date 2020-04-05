import { removeElementFromArray } from "~bdo/utils/util";
import { Modification } from "~bdo/lib/Modification";
import { Field } from "~bdo/lib/Field";
import { getter, setter } from "~bdo/utils/framework";
import { defineMetadata, getMetadata, getWildcardMetadata, defineWildcardMetadata } from "~bdo/utils/metadata";

export type writeRights = "ReadWrite" | "ReadOnly" | "WriteOnly";

const iniBindName = "initiatorBinding";
const bindName = "bindings";

/**
 * Creates a Binding object for watched attributes / properties.
 * Should not be used outside the watched-decorator or the bind-function of an Object.
 *
 * The binding happens in 2 steps:
 *
 * 1. The initialization with the object which should be bound
 * 2. The binding with the initiator
 *
 * example:
 *
 * Component A wants to bind property p from model M to its property q.
 * Then the Component A is the initiator so the Binding is initialized
 * with the model M and property p.
 *
 * After that the component A completes the binding with itself and its property q
 *
 * @export
 * @class Binding
 */
export class Binding<
    T extends object = any,
    K extends DefNonFuncPropNames<T> = any,
    U extends object = any,
    L extends DefNonFuncPropNames<U> = any> {

    /**
     * The object instance which contains the property which should be bound
     *
     * @type {T}
     * @memberof Binding
     */
    public object: T;

    /**
     * The property of the object instance which should be bound
     *
     * @type {K}
     * @memberof Binding
     */
    public property: K;

    /**
     * The possible property descriptor of the objects property
     *
     * @type {PropDesc}
     * @memberof Binding
     */
    public descriptor?: PropDesc;

    /**
     * The object which initiates the binding to the objects property
     *
     * @type {*}
     * @memberof Binding
     */
    public initiator!: U;

    /**
     * The property name to which the objects property is bound
     *
     * @type {string}
     * @memberof Binding
     */
    public initiatorProperty!: L;

    /**
     * The possible property descriptor of the initiators property
     *
     * @type {PropDesc}
     * @memberof Binding
     */
    public initiatorDescriptor?: PropDesc;

    /**
     * The value which should be used for the binding. Mostly used for components
     * which are going to initialize. When undefined the value of the model will
     * be used.
     *
     * @private
     * @type {T[K]}
     * @memberof Binding
     */
    private value?: T[K];

    /**
     * Locks reading or writing prom object property or both is allowed
     *
     * @private
     * @type {writeRights}
     * @memberof Binding
     */
    private mode: writeRights;

    constructor(object: T, property: K, mode: writeRights = "ReadWrite") {
        if ((<any>object).bindings.get(property)) throw new Error(`property ${property} of object ${(<any>object).className} is already bound`);
        this.object = object;
        this.property = property;
        this.mode = mode;
        this.descriptor = this.getOriginalPropertyDescriptor(this.object, this.property);
    }

    /**
     * setValue
     */
    public setValue(value: T[K]) {
        this.value = value;
    }

    /**
     * Returns the value depending of the own value or the value of the bound object
     *
     * @returns
     * @memberof Binding
     */
    public valueOf() {
        return this.value || this.object[this.property];
    }

    /**
     * Installs the binding to the initiator
     *
     * @param {object} initiator
     * @param {(symbol | string | number)} property
     * @memberof Binding
     */
    public install(initiator: U, property: L) {
        this.initiator = initiator;
        this.initiatorProperty = property;
        this.initiatorDescriptor = this.getOriginalPropertyDescriptor(this.initiator, this.initiatorProperty);

        // Prepare store for bindings
        if (!Reflect.hasMetadata(iniBindName, this.initiator)) defineMetadata(this.initiator, iniBindName, new Map());
        if (!Reflect.hasMetadata(bindName, this.object)) defineMetadata(this.object, bindName, new Map());

        // Remove old binding
        const initiatorMData = getMetadata(this.initiator, iniBindName) || new Map();
        const initiatorBinding = initiatorMData.get(this.initiatorProperty);
        if (initiatorBinding) initiatorBinding.remove();

        // install new binding
        const mData = getMetadata(this.object, bindName) || new Map();
        if (!mData.has(this.property)) mData.set(this.property, []);
        mData.get(this.property).push(this);
        initiatorMData.set(this.initiatorProperty, this);

        // Prepare global field
        const fieldMDataName = `field:${this.property}`;
        const objectField = getWildcardMetadata(this.object, this.property);
        const initiatorField = getWildcardMetadata(this.initiator, this.initiatorProperty);
        let field: Field<T, K> = getWildcardMetadata(this.object, fieldMDataName);
        if (!field) defineWildcardMetadata(this.object, fieldMDataName, new Field(this.object, this.property));

        // Add local fields to global field
        field = getWildcardMetadata(this.object, fieldMDataName) as Field<T, K>;
        field.addField(objectField);
        field.addField(initiatorField);

        // Replace property descriptor
        this.replaceDescriptor();
        Reflect.set(this.initiator, this.initiatorProperty, this.valueOf());
    }

    /**
     * Restores the old property descriptor and sets the current value
     *
     * @memberof Binding
     */
    public remove() {
        // Get original values
        const objectValue = this.object[this.property];
        const initiatorValue = this.initiator[this.initiatorProperty];

        // Get Bindings
        const objectMData = getMetadata(this.object, bindName);
        const objectBindings = objectMData ? objectMData.get(this.property) : undefined;
        const initiatorMData = getMetadata(this.initiator, iniBindName);
        const initiatorBinding = initiatorMData ? initiatorMData.get(this.initiatorProperty.toString()) : undefined;

        const fieldMDataName = `field:${this.property}`;
        const field: Field<T, K> = getWildcardMetadata(this.object, fieldMDataName);

        if (initiatorBinding) {
            if (initiatorMData) initiatorMData.delete(this.initiatorProperty.toString());
            this.restoreDescriptor(this.initiator, this.initiatorProperty, initiatorValue, this.initiatorDescriptor);
            field.removeField(getWildcardMetadata(this.initiator, this.initiatorProperty));
        }

        if (objectBindings) {
            removeElementFromArray(objectBindings, this);
            field.removeField(getWildcardMetadata(this.object, this.property));
            if (!objectBindings.length) {
                if (objectMData) objectMData.delete(this.property);
                this.restoreDescriptor(this.object, this.property, objectValue, this.descriptor);
                defineWildcardMetadata(this.object, fieldMDataName, null);
            }
        }
    }

    /**
     * Binds the current bound object property to the initializer object property
     *
     * @param {object} object
     * @param {(Symbol | string | number)} property
     * @memberof Binding
     */
    private replaceDescriptor() {
        const that = this;
        Reflect.deleteProperty(this.object, this.property);
        Reflect.defineProperty(this.object, this.property, {
            get: function bindingGet() {
                if (that.mode === "WriteOnly" && this === that.initiator) return undefined;
                return getter(that.object, that.property, "field");
            },
            set: function bindingSet(newVal?: T[K] | Binding<T, K> | Modification<any>) {
                if (that.mode === "ReadOnly" && this === that.initiator) return;
                setter(that.object, that.property, newVal, "field");
            },
            configurable: true,
            enumerable: true
        });
        const bindingDesc = Reflect.getOwnPropertyDescriptor(this.object, this.property) as PropertyDescriptor;
        Reflect.deleteProperty(this.initiator, this.initiatorProperty);
        Reflect.defineProperty(this.initiator, this.initiatorProperty, bindingDesc);
        defineMetadata(this.object, "bindingDescriptor", bindingDesc);
    }

    /**
     * restores the original property descriptor of object and sets the current value to the property
     *
     * @private
     * @param {IndexStructure} object
     * @param {string} property
     * @param {*} value
     * @param {PropertyDescriptor} [descriptor]
     * @memberof Binding
     */
    private restoreDescriptor(object: IndexStructure, property: strNumSym, value: any, descriptor?: PropDesc) {
        Reflect.deleteProperty(object, property);
        if (descriptor) {
            Reflect.defineProperty(this.initiator, this.initiatorProperty, descriptor);
        }
        object[property.toString()] = value;
    }

    /**
     * Determines the original property descriptor which is not named with bindingGet or bindingSet
     *
     * @private
     * @param {Object} object
     * @param {strNumSym} key
     * @returns
     * @memberof Binding
     */
    private getOriginalPropertyDescriptor(object: Object, key: strNumSym) {
        let descriptor: PropertyDescriptor | undefined = Reflect.getOwnPropertyDescriptor(object, key);
        let mDataName: "bindings" | "initiatorBinding" = bindName;
        let prototype = object;
        if (object === <Object>this.initiator) mDataName = iniBindName;
        while (!descriptor) {
            prototype = Object.getPrototypeOf(prototype);
            if (!prototype) break;
            if (prototype.constructor.name === "BaseConstructor") prototype = Object.getPrototypeOf(prototype);
            descriptor = Reflect.getOwnPropertyDescriptor(prototype, key);
        }
        let searchDescriptorInBindings = false;
        if (descriptor) {
            if (descriptor.set && descriptor.set.name === "bindingSet") searchDescriptorInBindings = true;
            if (descriptor.get && descriptor.get.name === "bindingGet") searchDescriptorInBindings = true;
        }
        if (searchDescriptorInBindings) {
            const mData = getMetadata(<any>object, mDataName);
            const bindings = mData ? mData.get(key.toString()) : undefined;
            if (bindings) {
                if (bindings instanceof Array) {
                    descriptor = bindings[0].descriptor;
                } else descriptor = bindings.initiatorDescriptor;
            }
        }
        return descriptor;
    }
}
