import { removeElementFromArray } from "~bdo/utils/util";
import { Modification } from "~bdo/lib/Modification";
import { Distributor } from "~bdo/lib/Distributor";
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
 * @class Binding
 */
export class Binding<
    T extends Record<string, any> = any,
    K extends DefNonFuncPropNames<T> = any,
    U extends Record<string, any> = any,
    L extends DefNonFuncPropNames<U> = any> {

    /**
     * The object instance which contains the property which should be bound
     *
     * @memberof Binding
     */
    public object: T;

    /**
     * The property of the object instance which should be bound
     *
     * @memberof Binding
     */
    public property: K;

    /**
     * The possible property descriptor of the objects property
     *
     * @memberof Binding
     */
    public descriptor?: PropDesc;

    /**
     * The object which initiates the binding to the objects property
     *
     * @memberof Binding
     */
    public initiator!: U;

    /**
     * The property name to which the objects property is bound
     *
     * @memberof Binding
     */
    public initiatorProperty!: L;

    /**
     * The possible property descriptor of the initiators property
     *
     * @memberof Binding
     */
    public initiatorDescriptor?: PropDesc;

    /**
     * The value which should be used for the binding. Mostly used for components
     * which are going to initialize. When undefined the value of the model will
     * be used.
     *
     * @private
     * @memberof Binding
     */
    private value?: T[K];

    /**
     * Locks reading or writing prom object property or both is allowed
     *
     * @private
     * @memberof Binding
     */
    private mode: writeRights;

    constructor(object: T, property: K, mode: writeRights = "ReadWrite") {
        this.object = object;
        this.property = property;
        this.mode = mode;
        this.descriptor = this.getOriginalPropertyDescriptor(this.object, this.property);
    }

    /**
     * Sets the value to the binding
     *
     * @param value The value to set to the binding
     * @memberof Binding
     */
    public setValue(value: T[K]) {
        this.value = value;
    }

    /**
     * Returns the value depending of the own value or the value of the bound object
     *
     * @returns The value of the binding if given and the objects value else
     * @memberof Binding
     */
    public valueOf() {
        return this.value || this.object[this.property];
    }

    /**
     * Installs the binding to the initiator
     *
     * @param initiator The objects which initiated the binding
     * @param property The property name on which the binding was initiated
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
        const fieldMDataName = `distributor:${this.property}`;
        const objectField = getWildcardMetadata(this.object, this.property);
        const initiatorField = getWildcardMetadata(this.initiator, this.initiatorProperty);
        let distributor: Distributor<T, K> = getWildcardMetadata(this.object, fieldMDataName);
        if (!distributor) defineWildcardMetadata(this.object, fieldMDataName, new Distributor(this.object, this.property));

        // Add local fields to global field
        distributor = getWildcardMetadata(this.object, fieldMDataName) as Distributor<T, K>;
        distributor.addField(objectField);
        distributor.addField(initiatorField);

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

        const fieldMDataName = `distributor:${this.property}`;
        const distributor: Distributor<T, K> = getWildcardMetadata(this.object, fieldMDataName);

        if (initiatorBinding) {
            if (initiatorMData) initiatorMData.delete(this.initiatorProperty.toString());
            this.restoreDescriptor(this.initiator, this.initiatorProperty, initiatorValue, this.initiatorDescriptor);
            distributor.removeField(getWildcardMetadata(this.initiator, this.initiatorProperty));
        }

        if (objectBindings) {
            removeElementFromArray(objectBindings, this);
            distributor.removeField(getWildcardMetadata(this.object, this.property));
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
     * @memberof Binding
     */
    private replaceDescriptor() {
        const that = this;
        Reflect.deleteProperty(this.object, this.property);
        Reflect.defineProperty(this.object, this.property, {
            get: function bindingGet() {
                if (that.mode === "WriteOnly" && this === that.initiator) return undefined;
                return getter(that.object, that.property, "distributor");
            },
            set: function bindingSet(newVal?: T[K] | Binding<T, K> | Modification<any>) {
                if (that.mode === "ReadOnly" && this === that.initiator) return;
                // Use the initiators setter when a new binding is coming in to
                // initiate the installation of the new binding.
                // NOTE: A binding can only income on the initiator! The Object
                //       gives the binding!
                if (newVal instanceof Binding) {
                    setter(that.initiator, that.initiatorProperty, <Binding>newVal);
                } else setter(that.object, that.property, newVal, "distributor");
            },
            configurable: true,
            enumerable: true
        });

        // NOTE: It is necessary to take the REAL property descriptor of the
        // object because the simple assignment of the handler would create a
        // NEW property descriptor for the initiator which is not intended.
        // We want to use ne EXACT SAME descriptor
        const bindingDesc = Reflect.getOwnPropertyDescriptor(this.object, this.property) as PropertyDescriptor;
        Reflect.deleteProperty(this.initiator, this.initiatorProperty);
        Reflect.defineProperty(this.initiator, this.initiatorProperty, bindingDesc);
        defineMetadata(this.object, "bindingDescriptor", bindingDesc);
    }

    /**
     * restores the original property descriptor of object and sets the current
     * value to the property.
     *
     * @private
     * @param object The target or initiator object of the binding
     * @param property The property name where the binding was initialized on
     * @param value The value which should be assigned to the property
     * @param descriptor The property descriptor which should be assigned
     * @memberof Binding
     */
    private restoreDescriptor(object: Record<string, any>, property: strNumSym, value: any, descriptor?: PropDesc) {
        Reflect.deleteProperty(object, property);
        if (descriptor) {
            Reflect.defineProperty(this.initiator, this.initiatorProperty, descriptor);
        }
        object[property.toString()] = value;
    }

    /**
     * Determines the original property descriptor which is not named with
     * bindingGet or bindingSet.
     *
     * @private
     * @param object The target or initiator object of the binding
     * @param key The name of the property of the object where the binding was initialized on
     * @returns The original property descriptor if found
     * @memberof Binding
     */
    private getOriginalPropertyDescriptor(object: Record<string, any>, key: strNumSym) {
        let descriptor = Reflect.getOwnPropertyDescriptor(object, key);
        let mDataName: "bindings" | "initiatorBinding" = bindName;
        let prototype = object;
        if (object === this.initiator) mDataName = iniBindName;
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
