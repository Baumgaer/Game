import { v4 as uuid } from "uuid";
import { ID } from "type-graphql";
import { Binding, writeRights } from "~bdo/lib/Binding";
import { attribute, baseConstructor, property } from "~bdo/utils/decorators";
import { getMetadata } from "~bdo/utils/metadata";
import { IBaseConstructorOpts } from "~bdo/lib/BaseConstructor";
import { ModelRegistry } from "~bdo/lib/ModelRegistry";

/**
 * Provides basic functionality and fields for each Model on each side
 * (server and client)
 *
 * @export
 * @abstract
 * @class BDOModel
 */
@baseConstructor({ isAbstract: true })
export abstract class BDOModel implements IBaseConstructorOpts {

    /**
     * Holds a list of all bindings to all components
     *
     * @readonly
     * @protected
     * @type {Map<string, Array<Binding<this, DefNonFuncPropNames<this>>>>}
     * @memberof BDOModel
     */
    protected get bindings(): Map<string, Binding<this>[]> {
        const bindings = getMetadata(this, "bindings");
        return bindings ? bindings : new Map();
    }

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
     * @inheritdoc
     *
     * This will be set by BaseConstructor
     *
     * @static
     * @type {string}
     * @memberof BDOModel
     */
    public static readonly collectionName?: string;

    /**
     * @inheritdoc
     *
     * This will be set by BaseConstructor
     *
     * @static
     * @type {string}
     * @memberof BDOModel
     */
    public static readonly databaseName?: string;

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
     * @see BDOModel.isBDOModel
     *
     * @type {boolean}
     * @memberof BDOModel
     */
    @property() public readonly isBDOModel: boolean = true;

    /**
     * @see BDOModel.collectionName
     *
     * @type {string}
     * @memberof BDOModel
     */
    @property() public readonly collectionName?: string = BDOModel.collectionName;

    /**
     * @see BDOModel.databaseName
     *
     * @type {string}
     * @memberof BDOModel
     */
    @property() public readonly databaseName?: string = BDOModel.databaseName;

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
     * Test
     *
     * @static
     * @param {string} id
     * @memberof BDOModel
     */
    public static getInstanceByID<T extends BDOModel>(this: new () => T, _id: T["id"]): Promise<T | undefined> {
        throw new Error("Not implemented");
    }

    constructor() {
        ModelRegistry.getInstance().register(this);
    }

    /**
     * Returns the reference string which is stored in the database instead of the model itself
     *
     * @returns
     * @memberof BDOModel
     */
    public getReferenceString() {
        return `_reference:${this.className}${this.id}`;
    }

    /**
     * Gets a property of this model and converts it into a data-binding
     * depending on the given mode. By default it is a two-way-data-binding.
     * The binding can be processed by a decorator @attribute, @property or @watched.
     *
     * @template K
     * @template M
     * @param {K} propName
     * @param {M} [mode]
     * @returns {Binding<this, K> as this[K] | undefined}
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
     * Discards the changes of the given attribute or all attributes to the value saved in the database
     *
     * @abstract
     * @param {DefNonFuncPropNames<this>} attr
     * @returns {Promise<void>}
     * @memberof BDOModel
     */
    public abstract async discard(attr?: DefNonFuncPropNames<this>): Promise<void>;

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
