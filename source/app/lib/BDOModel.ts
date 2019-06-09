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
    public bind(property: string): any {
        const binding = new Binding(this, property);
        if (!Reflect.hasMetadata("bindings", this)) Reflect.defineMetadata("bindings", {}, this);
        const boundMetadata: IndexStructure<string, Binding[]> = Reflect.getMetadata("bindings", this);
        if (!(property in boundMetadata)) boundMetadata[property] = [];
        boundMetadata[property].push(binding);
        return binding;
    }
}
