/**
 * Forces the setter to use the newVal (undefined or something else) even it's
 * equal to the old value.
 * It also forces the execution of a setter when the value must be undefined
 * but the setter must be executed
 *
 * @class Modification
 */
export class Modification<T extends "delete" | "update" | "fromServer"> {

    /**
     * Represents the type of the modification. Things should happen depending in this.
     *
     * @type {T}
     * @memberof Modification
     */
    public type: T;

    /**
     * The value which should be used to reset the property/attribute
     *
     * @private
     * @type {*}
     * @memberof Modification
     */
    private value: any;

    constructor(value: any, type: T | "delete" = "delete") {
        this.value = value;
        this.type = <T>type;
    }

    /**
     * Returns the original value
     *
     * @returns
     * @memberof Modification
     */
    public valueOf() {
        return this.value;
    }

    /**
     * Updated the value which was used at initialization
     *
     * @param {*} value
     * @memberof Modification
     */
    public setValue(value: any) {
        this.value = value;
    }
}
