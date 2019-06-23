import { Binding } from "~bdo/lib/Binding";
/**
 * Test
 *
 * @export
 * @abstract
 * @class BDOBaseModel
 */
export abstract class BDOModel {

    /**
     * Holds a list of all bindings to all components
     *
     * @readonly
     * @protected
     * @type {Map<string, Array<Binding<this, DefinitiveNonFunctionPropertyNames<this>>>>}
     * @memberof BDOModel
     */
    protected get bindings(): Map<string, Array<Binding<this, DefinitiveNonFunctionPropertyNames<this>>>> {
        const bindings = Reflect.getMetadata("bindings", this);
        return bindings ? bindings : new Map();
    }

    /**
     * gets the property of this model and converts it to a watched one.
     * Only useful in combination with the watched decorator.
     *
     * @param {string} property Name of the property which should be watched
     * @returns {*} The identity of the property as none primitive
     * @memberof BDOModel
     */
    public bind<K extends Exclude<NonFunctionPropertyNames<this>, undefined>>(property: K) {
        return new Binding(this, property) as unknown as this[K];
    }
}
