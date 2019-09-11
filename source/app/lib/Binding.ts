import { removeElementFromArray } from "~bdo/utils/util";
import { Modification } from "~bdo/lib/Modification";
import { defineMetadata, getMetadata, getWildcardMetadata } from "~bdo/utils/metadata";

export type writeRights = "ReadWrite" | "ReadOnly" | "WriteOnly";

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
export class Binding<T extends object = any, K extends DefNonFuncPropNames<T> = any> {

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
     * @type {IndexStructure}
     * @memberof Binding
     */
    public initiator!: IndexStructure;

    /**
     * The property name to which the objects property is bound
     *
     * @type {string}
     * @memberof Binding
     */
    public initiatorProperty!: string;

    /**
     * The possible property descriptor of the initiators property
     *
     * @type {PropDesc}
     * @memberof Binding
     */
    public initiatorDescriptor?: PropDesc;

    /**
     * Locks reading or writing prom object property or both is allowed
     *
     * @protected
     * @type {writeRights}
     * @memberof Binding
     */
    protected mode: writeRights;

    constructor(object: T, property: K, mode: writeRights = "ReadWrite") {
        this.object = object;
        this.property = property;
        this.mode = mode;

        // Save the original property descriptor only if it is not a binding descriptor
        // In case it is a binding descriptor, have a look at the bindings of this property
        // and take the first descriptor you can find
        let descriptor: PropertyDescriptor | undefined = Reflect.getOwnPropertyDescriptor(this.object, this.property);
        const bindingDescriptor = getMetadata(this.object, "bindingDescriptor");

        let prototype = this.object;
        while (!descriptor) {
            prototype = Object.getPrototypeOf(prototype);
            if (!prototype) break;
            if (prototype.constructor.name === "BaseConstructor") prototype = Object.getPrototypeOf(prototype);
            descriptor = Reflect.getOwnPropertyDescriptor(prototype, this.property);
        }
        if (descriptor && bindingDescriptor && descriptor === bindingDescriptor) {
            const mData = getMetadata(this.object, "bindings");
            const bindings = mData ? mData.get(this.property) : undefined;
            if (bindings) this.descriptor = bindings[0].descriptor;
        }
        if (!this.descriptor) this.descriptor = descriptor;
    }

    /**
     * Returns the original value of the bound object property
     *
     * @returns {*} The original value
     * @memberof Binding
     */
    public valueOf(): T[K] | undefined {
        if (this.mode === "WriteOnly") return new Modification(undefined) as unknown as undefined;
        return this.object[this.property];
    }

    /**
     * Reflects all changes of this object property to all initiators properties
     *
     * @memberof Binding
     */
    public reflectToInitiators(newVal: T[K] | Modification<any>) {
        if (newVal instanceof Modification) newVal = newVal.valueOf();
        if (this.initiator[this.initiatorProperty] === newVal || this.mode === "WriteOnly") return;
        const mData = getMetadata(this.object, "bindings");
        if (mData) {
            const bindings = mData.get(this.property);
            if (bindings) for (const binding of bindings) binding.initiator[binding.initiatorProperty] = newVal;
        }
    }

    /**
     * Reflects the changes to the objects property
     *
     * @param {T[K]} newVal
     * @memberof Binding
     */
    public reflectToObject(newVal: T[K] | Modification<any>) {
        if (newVal instanceof Modification) newVal = newVal.valueOf();
        if (this.object[this.property] === newVal || this.mode === "ReadOnly") return;
        this.object[this.property] = newVal as T[K];
    }

    /**
     * Installs the binding to the initiator
     *
     * @param {object} initiator
     * @param {(symbol | string | number)} property
     * @memberof Binding
     */
    public install<O extends Constructor, P extends DefNonFuncPropNames<O>>(initiator: O, property: P) {
        this.initiator = initiator;
        this.initiatorProperty = property.toString();
        if (!Reflect.hasMetadata("initiatorBinding", this.initiator)) {
            defineMetadata(this.initiator, "initiatorBinding", new Map());
        }
        const initiatorMData = getMetadata(this.initiator, "initiatorBinding") || new Map();
        const initiatorBinding = initiatorMData.get(this.initiatorProperty);
        if (initiatorBinding) initiatorBinding.remove();
        this.bind();
        initiatorMData.set(this.initiatorProperty, this);
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
        const objectMData = getMetadata(this.object, "bindings");
        const objectBindings = objectMData ? objectMData.get(this.property) : undefined;
        const initiatorMData = getMetadata(this.initiator, "initiatorBinding");
        const initiatorBinding = initiatorMData ? initiatorMData.get(this.initiatorProperty) : undefined;

        if (objectBindings) {
            removeElementFromArray(objectBindings, this);
            if (!objectBindings.length) {
                if (objectMData) objectMData.delete(this.property);
                this.restoreDescriptor(this.object, this.property, objectValue, this.descriptor);
            }
        }

        if (initiatorBinding) {
            if (initiatorMData) initiatorMData.delete(this.initiatorProperty);
            this.restoreDescriptor(this.initiator, this.initiatorProperty, initiatorValue, this.initiatorDescriptor);
        }
    }

    /**
     * Binds the current bound object property to the initializer object property
     *
     * @param {object} object
     * @param {(Symbol | string | number)} property
     * @memberof Binding
     */
    private bind() {
        // Define bindings metadata for this property
        if (!Reflect.hasMetadata("bindings", this.object)) defineMetadata(this.object, "bindings", new Map());
        const mData = getMetadata(this.object, "bindings");
        const initialValue = this.object[this.property];

        if (mData) {
            // Define a general change detector if property is not already bound
            if (!mData.has(this.property)) {
                mData.set(this.property, []);
                const that = this;
                Reflect.deleteProperty(this.object, this.property);
                Reflect.defineProperty(this.object, this.property, {
                    get: function modelGet() {
                        // Call other descriptors of this object property if
                        // available otherwise simply get the value
                        if (that.descriptor && that.descriptor.get) {
                            return that.descriptor.get.call(that.object);
                        } else return getWildcardMetadata(that.object, that.property).valueOf() || initialValue;
                    },
                    set: function modelSet(newVal: T[K]) {
                        if (newVal === that.object[that.property]) return;
                        // Call other descriptors of this object property if
                        // available otherwise simply set the value
                        if (that.descriptor && that.descriptor.set) that.descriptor.set.call(that.object, newVal);
                        // Reflect changes to every bound initiator of this object
                        that.reflectToInitiators(newVal);
                    },
                    configurable: true,
                    enumerable: true
                });
                const bindingDescriptor = Reflect.getOwnPropertyDescriptor(this.object, this.property);
                defineMetadata(this.object, "bindingDescriptor", bindingDescriptor);
            }
            // Find old binding and replace it with this new binding
            const definitelyDefinedBindings = mData.get(this.property);
            if (definitelyDefinedBindings) {
                let alreadyBound = false;
                for (const [index, binding] of definitelyDefinedBindings.entries()) {
                    if (binding.initiator === this.initiator && binding.initiatorProperty === this.initiatorProperty) {
                        definitelyDefinedBindings[index] = this;
                        alreadyBound = true;
                        break;
                    }
                }
                // Otherwise if not already bound add it
                if (!alreadyBound) definitelyDefinedBindings.push(this);
            }
        }
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
}
