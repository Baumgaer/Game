import { v1 as uuid } from "uuid";
import { ID } from "type-graphql";
import { Binding, writeRights } from "~bdo/lib/Binding";
import { attribute, baseConstructor, property } from "~bdo/utils/decorators";
import { getMetadata } from "~bdo/utils/metadata";

/**
 * Provides basic functionality and fields for each Model on each side
 * (server and client)
 *
 * @export
 * @abstract
 * @class BDOModel
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
     * This is just a BDOModel identifier in case you want to know if a not
     * initialized class is a model.
     *
     * @static
     * @type {boolean}
     * @memberof BDOModel
     */
    public static readonly isBDOModel: boolean = true;

    /**
     * Provides a unique id for each model. If there is no id given, a unique
     * dummy id will be generated.
     *
     * @type {string}
     * @memberof BDOModel
     */
    @attribute((_type) => ID) public id: string = `pending_${uuid()}`;

    /**
     * Represents the constructors name to ensure the right Model construction
     * on client and server side when data is received.
     *
     * @protected
     * @type {string}
     * @memberof BDOModel
     */
    @attribute() public readonly className: string = Object.getPrototypeOf(this.constructor).name;

    /**
     * This is for better identification of BDO models and instance check
     *
     * @type {boolean}
     * @memberof BDOModel
     */
    @property() public readonly isBDOModel: boolean = true;

    /**
     * Holds a list of all bindings to all components
     *
     * @readonly
     * @protected
     * @type {Map<string, Array<Binding<this, DefNonFuncPropNames<this>>>>}
     * @memberof BDOModel
     */
    protected get bindings(): Map<string, Array<Binding<this>>> {
        const bindings = getMetadata(this, "bindings");
        return bindings ? bindings : new Map();
    }

    /**
     * gets the property of this model and converts it to a watched one.
     * Only useful in combination with the watched decorator.
     *
     * @param {string} propName Name of the property which should be watched
     * @param {writeRights} mode one string of the writeRights
     * @returns {*} The identity of the property as none primitive
     * @memberof BDOModel
     */
    public bind<K extends DefNonFuncPropNames<this>, M extends writeRights = "ReadWrite">(propName: K, mode?: M) {
        return new Binding(this, propName, mode) as unknown as (M extends "WriteOnly" ? undefined : this[K]);
    }

    /**
     * Converts the current instance if this to a stringified JSON with properties only
     *
     * @returns
     * @memberof BDOModel
     */
    public toString() {
        const data = this.toJSON();
        return JSON.stringify(data);
    }

    /**
     * Converts the current instance of this to a json with properties only
     * NOTE: This will be used by JSON.stringify() to make a string out of this
     *       instance.
     *
     * @returns
     * @memberof BDOModel
     */
    public toJSON() {
        const data: IndexStructure = {};
        for (const key in this) {
            if (this[key] !== undefined) {
                const element = this[key];
                data[key] = element;
            }
        }
        return data;
    }
}
