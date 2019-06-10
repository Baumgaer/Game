import { removeElementFromArray } from "~bdo/utils/util";
/**
 * Creates a Binding object for watched attributes / properties.
 * Should not be used outside the watched-decorator or the bind-function of an Object
 *
 * @export
 * @class Binding
 */
export class Binding<T, K extends Exclude<NonFunctionPropertyNames<T>, undefined>> {

    /**
     * The object instance which contains the property which should be bound
     *
     * @type {IndexStructure}
     * @memberof Binding
     */
    public object: IndexStructure;

    /**
     * The property of the object instance which should be bound
     *
     * @type {string}
     * @memberof Binding
     */
    public property: string;

    /**
     * The possible property descriptor of the objects property
     *
     * @type {PropertyDescriptor}
     * @memberof Binding
     */
    public descriptor?: PropertyDescriptor;

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

    constructor(object: T, property: K) {
        this.object = object;
        this.property = property.toString();
    }

    /**
     * Returns the original value of the bound object property
     *
     * @returns {*} The original value
     * @memberof Binding
     */
    public valueOf(): any {
        return this.object[this.property];
    }

    /**
     * Binds the current bound object property to the initializer object property
     *
     * @param {object} object
     * @param {(Symbol | string | number)} property
     * @memberof Binding
     */
    public bind(object: object, property: symbol | string | number): void {
        this.initiator = object;
        this.initiatorProperty = property.toString();

        const that = this;
        // Define default (current) value of bound property in this
        Reflect.defineMetadata(this.property, this.object[this.property], this.object);

        // Save the original property descriptor only if it is not a binding descriptor
        const thisDescriptor = Reflect.getOwnPropertyDescriptor(this.object, this.property);
        if (!this.descriptor) this.descriptor = thisDescriptor;
        const descriptor = Reflect.getOwnPropertyDescriptor(object, property);

        // Create new property descriptor on bound object
        Reflect.deleteProperty(this.object, this.property);
        Reflect.defineProperty(this.object, this.property, {
            get: function modelGet() {
                return Reflect.getMetadata(that.property, that.object);
            },
            set: function modelSet(newVal: any) {
                if (newVal === Reflect.getMetadata(that.property, that.object)) return;
                // Set value to binding initializer object
                (<IndexStructure>object)[property.toString()] = newVal;
                // Call other descriptors else set this
                if (descriptor && descriptor.set) {
                    descriptor.set.call(that.object, newVal);
                } else Reflect.defineMetadata(that.property, newVal, that.object);
            },
            configurable: true,
            enumerable: true
        });
    }

    /**
     * Restores the old property descriptor and sets the current value
     *
     * @memberof Binding
     */
    public unbind(): void {
        const value = this.object[this.property];

        // Check if there was a descriptor creation between creating and removing the binding
        const descriptor = Reflect.getOwnPropertyDescriptor(this.object, this.property);
        if (!this.descriptor) this.descriptor = descriptor;
        if (this.descriptor) {
            // Overwrite binding descriptor with original descriptor
            Reflect.defineProperty(this.object, this.property, this.descriptor);
        }
        // Set original value
        this.object[this.property] = value;
        // Remove binding from bindings list of object and initiator
        removeElementFromArray(this.object.bindings[this.property], this);
        removeElementFromArray(this.initiator.bindings[this.initiatorProperty], this);
    }
}
