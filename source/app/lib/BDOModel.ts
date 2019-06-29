import { Binding } from "~bdo/lib/Binding";
import { attribute, baseConstructor } from "~bdo/utils/decorators";
/**
 * Test
 *
 * @export
 * @abstract
 * @class BDOBaseModel
 */
@baseConstructor({ isAbstract: true })
export abstract class BDOModel {

    /**
     * Determines the original type of this model - set by the
     * baseConstructor - for the GraphQL resolver
     *
     * @static
     * @type {*}
     * @memberof BDOModel
     */
    public static readonly graphQLType: any = Object.getPrototypeOf(BDOModel.constructor);

    /**
     * Represents the constructors name to ensure the right Model construction
     * on client and server side when data is received.
     *
     * @protected
     * @type {string}
     * @memberof BDOModel
     */
    @attribute() protected className: string = Object.getPrototypeOf(this.constructor).name;

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
