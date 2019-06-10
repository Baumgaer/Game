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
     * @protected
     * @type {Binding[]}
     * @memberof BDOModel
     */
    protected get bindings() {
        const bindings = Reflect.getMetadata("bindings", this);
        return bindings ? bindings : {};
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
        const binding = new Binding(this, property);
        if (!Reflect.hasMetadata("bindings", this)) Reflect.defineMetadata("bindings", {}, this);
        const boundMetadata: IndexStructure<string, Array<Binding<this, K>>> = Reflect.getMetadata("bindings", this);
        if (!(property in boundMetadata)) boundMetadata[<string>property] = [];
        boundMetadata[<string>property].push(binding);
        return binding as unknown as this[K];
    }
}
