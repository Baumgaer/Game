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
     * Used to define the name of the database collection where a BDOModel is stored in
     *
     * @static
     * @type {string}
     * @memberof BDOModel
     */
    public static readonly collectionName?: string;

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
     * This is for better identification of BDO models and instance check
     *
     * @type {boolean}
     * @memberof BDOModel
     */
    @property() public readonly isBDOModel: boolean = true;

    /**
     * The instance version of the static property collectionName
     *
     * @type {string}
     * @memberof BDOModel
     */
    @property() public readonly collectionName?: string = BDOModel.collectionName;

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
     * Test
     *
     * @static
     * @param {string} id
     * @memberof BDOModel
     */
    public static getInstanceByID(_id: string) {
        throw new Error("Not implemented");
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

    /**
     * Stores the unsaved changes into the corresponding collection of the model.
     * It is also possible to save only a single attribute.
     *
     * @memberof BDOModel
     */
    public abstract async save(attr?: DefNonFuncPropNames<this>): Promise<IndexStructure>;

    /**
     * Discards the changes of the given attribute to the value saved in the database
     *
     * @abstract
     * @param {DefNonFuncPropNames<this>} attr
     * @returns {Promise<void>}
     * @memberof BDOModel
     */
    public abstract async discardChange(attr: DefNonFuncPropNames<this>): Promise<void>;

    /**
     * Discards all unsaved changes of all attributes
     *
     * @abstract
     * @returns {Promise<void>}
     * @memberof BDOModel
     */
    public abstract async discardChanges(): Promise<void>;

    /**
     * Checks if a value of an attribute is stored in the database
     *
     * @abstract
     * @param {DefNonFuncPropNames<this>} attr
     * @returns {Promise<boolean>}
     * @memberof BDOModel
     */
    public async isUnsaved(attr: DefNonFuncPropNames<this>): Promise<boolean> {
        const unsavedChanges = await this.getUnsavedChanges();
        let unsaved = false;
        if (unsavedChanges && unsavedChanges.hasOwnProperty(attr)) unsaved = true;
        return Promise.resolve(unsaved);
    }

    /**
     * Checks if all values of all attributes are stored in the database
     *
     * @abstract
     * @returns {Promise<boolean>}
     * @memberof BDOModel
     */
    public async hasUnsavedChanges(): Promise<boolean> {
        const unsavedChanges = await this.getUnsavedChanges();
        return Promise.resolve(Boolean(Object.keys(unsavedChanges).length));
    }

    /**
     * Returns all values of all attributes which are not stored in the database
     *
     * @abstract
     * @returns {Promise<ConstParams<this>>}
     * @memberof BDOModel
     */
    public abstract async getUnsavedChanges(): Promise<IndexStructure>;

}
