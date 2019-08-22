/**
 * Forces the setter to use the newVal (undefined or something else) even it's
 * equal to the old value.
 * It also forces the execution of a setter when the value must be undefined
 * but the setter must be executed
 *
 * @class Deletion
 */
export class Deletion {

    /**
     * The value which should be used to reset the property
     *
     * @private
     * @type {*}
     * @memberof Deletion
     */
    private value: any;

    constructor(value: any) {
        this.value = value;
    }

    /**
     * Returns the original value
     *
     * @returns
     * @memberof Deletion
     */
    public valueOf() {
        return this.value;
    }
}
