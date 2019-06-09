/**
 * Test
 *
 * @export
 * @abstract
 * @class BDOBaseModel
 */
export abstract class BDOModel {

    /**
     * gets the property of this model and converts it to a watched one.
     * Only useful in combination with the watched decorator.
     *
     * @param {string} property Name of the property which should be watched
     * @returns {*} The identity of the property as none primitive
     * @memberof BDOModel
     */
    public watched(property: string): any {
        const that: IndexStructure = this;
        let type;
        if (that[property]) type = that[property].constructor;
        let newVal: IndexStructure = {
            valueOf() {
                return that[property];
            }
        };
        if (type) newVal = new type((that)[property]);
        newVal.__watched__ = {
            model: that,
            property
        };
        return newVal;
    }
}
