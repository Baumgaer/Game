import { v4 as uuid } from "uuid";
import { ID } from "type-graphql";
import { PrimaryColumn } from "typeorm";
import { Binding, writeRights } from "~bdo/lib/Binding";
import { attribute, baseConstructor, property } from "~bdo/utils/decorators";
import { getMetadata } from "~bdo/utils/metadata";
import { IBaseConstructorOpts } from "~bdo/lib/BaseConstructor";
import { ModelRegistry } from "~bdo/lib/ModelRegistry";

/**
 * Provides basic functionality and fields for each Model on each side
 * (server and client)
 *
 * @abstract
 */
@baseConstructor({ isAbstract: true })
export abstract class BDOModel implements IBaseConstructorOpts {

    /**
     * Holds a list of all bindings to all components
     *
     * @readonly
     * @protected
     * @returns A map with all bindings on this model
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
     * @memberof BDOModel
     */
    public static readonly graphQLType: any = Object.getPrototypeOf(BDOModel.constructor);

    /**
     * @inheritdoc
     *
     * @static
     * @type {string}
     * @memberof BDOModel
     */
    public static readonly collectionName?: string;

    /**
     * @inheritdoc
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
    @PrimaryColumn() @attribute((_type) => ID) public id: string = `pending_${uuid()}`;

    /**
     * Represents the constructors name to ensure the right Model construction
     * on client and server side when data is received.
     *
     * @protected
     * @type {string}
     * @memberof BDOModel
     */
    @attribute() public readonly className: string = Object.getPrototypeOf(this.constructor).name;

    constructor() {
        ModelRegistry.getInstance().register(this);
    }

    /**
     * Test
     *
     * @static
     * @param this The this context of the method which can not be overwritten
     * @param _id The id of the instance of the model
     * @memberof BDOModel
     */
    public static getInstanceByID<T extends BDOModel>(this: new () => T, _id: T["id"]): Promise<T | undefined> {
        throw new Error("Not implemented");
    }

    /**
     * Returns the reference string which is stored in the database instead of the model itself
     *
     * @returns A string representing the model in the database within another model
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
     * @param propName The name of the property to bind to the caller
     * @param mode The mode which should be used for write access
     * @returns A binding to the models property
     * @memberof BDOModel
     */
    public bind<K extends DefNonFuncPropNames<this>, M extends writeRights = "ReadWrite">(propName: K, mode?: M) {
        return new Binding(this, propName, mode) as unknown as (M extends "WriteOnly" ? undefined : this[K]);
    }

    /**
     * Converts the current instance if this to a stringified JSON with properties only
     *
     * @returns The model as a JSON string
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
     * @returns The model as a simple JSON
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
     * Checks if a value of an attribute is stored in the database
     *
     * @abstract
     * @param attr The attribute which should be checked for persisted state or not
     * @returns true if attribute is not persisted and false else
     * @memberof BDOModel
     */
    public async isUnsaved(attr: DefNonFuncPropNames<this>): Promise<boolean> {
        const unsavedChanges = await this.getUnsavedChanges();
        let unsaved = false;
        if (unsavedChanges && <string>attr in unsavedChanges) unsaved = true;
        return Promise.resolve(unsaved);
    }

    /**
     * Checks if all values of all attributes are stored in the database
     *
     * @abstract
     * @returns true if there are unsaved changes and false else
     * @memberof BDOModel
     */
    public async hasUnsavedChanges(): Promise<boolean> {
        const unsavedChanges = await this.getUnsavedChanges();
        return Promise.resolve(Boolean(Object.keys(unsavedChanges).length));
    }

    /**
     * Discards the changes of the given attribute or all attributes to the value saved in the database
     *
     * @abstract
     * @param attr The attribute which should be discarded
     * @returns {Promise<void>}
     * @memberof BDOModel
     */
    public abstract async discard(attr?: DefNonFuncPropNames<this>): Promise<void>;

    /**
     * Returns all values of all attributes which are not stored in the database
     *
     * @abstract
     * @returns An object with all attributes which are not persisted yet
     * @memberof BDOModel
     */
    public abstract async getUnsavedChanges(): Promise<Record<string, any>>;

}
