/**
 * Forces the setter to use the newVal (undefined or something else) even it's
 * equal to the old value.
 * It also forces the execution of a setter when the value must be undefined
 * but the setter must be executed
 */
export class Modification<T extends "delete" | "update"> {

    /**
     * Represents the type of the modification. Things should happen depending in this.
     *
     * @memberof Modification
     */
    public type: T;

    /**
     * The value which should be used to reset the property/attribute
     *
     * @private
     * @memberof Modification
     */
    private value: any;

    constructor(value?: any, type: T | "delete" = "delete") {
        this.value = value;
        this.type = <T>type;
    }

    /**
     * Returns the original value
     *
     * @returns The value of the modification
     * @memberof Modification
     */
    public valueOf() {
        return this.value;
    }

    /**
     * Updated the value which was used at initialization
     *
     * @param value The value to set on the modification
     * @memberof Modification
     */
    public setValue(value: any) {
        this.value = value;
    }
}
