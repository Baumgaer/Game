import { baseConstructor, property } from "~bdo/utils/decorators";
import { BDOModel } from "~bdo/lib/BDOModel";
import { getNamespacedStorage, setUpdateNamespacedStorage, deleteFromNamespacedStorage } from "~client/utils/util";
import { getWildcardMetadata, getMetadata } from "~bdo/utils/metadata";
import { Logger } from "~client/lib/Logger";
import { DatabaseManager } from "~client/lib/DatabaseManager";
import { Attribute } from '~bdo/lib/Attribute';
import { Watched } from '~bdo/lib/Watched';
import { getProxyTarget, isEqual, isArray, difference, isObject, isPrimitive } from "~bdo/utils/util";

const logger = new Logger();
const databaseManager = DatabaseManager.getInstance();

/**
 * Provides basic functionality and fields for each Model on each side
 * (server and client)
 *
 * @export
 * @abstract
 * @class BDOModel
 */
@baseConstructor()
export class ClientModel extends BDOModel {

    /**
     * This is just a BDOModel identifier in case you want to know if a not
     * initialized class is a model.
     *
     * @static
     * @type {boolean}
     * @memberof BDOModel
     */
    public static readonly isClientModel: boolean = true;

    /**
     * This is for better identification of BDO models and instance check
     *
     * @type {boolean}
     * @memberof BDOModel
     */
    @property() public readonly isClientModel: boolean = true;

    /**
     * Returns an existing instance of the current model type if available and
     * otherwise creates a new instance first from properties in local database
     * and updates this properties. If there is no entry in the local database
     * on client side, the server will be asked for an instance. If there is no
     * such id, undefined will be returned.
     *
     * @static
     * @param {string} _id
     * @returns
     * @memberof ClientModel
     */
    public static getInstanceByID<T extends ClientModel>(_id: T["id"]): T | undefined {
        return (new this() as unknown as T);
    }

    /**
     * Searches for models of current model type by attributes in the local
     * database and creates instances of them using getInstanceByID.
     *
     * @static
     * @param {ConstParams<ClientModel>} _attributes
     * @returns
     * @memberof ClientModel
     */
    public static getInstancesByAttributes<T extends ClientModel>(_attributes: ConstParams<T>): Array<T | undefined> {
        return [(new this() as unknown as T)];
    }

    /**
     * See doc string in ~client/utils/util
     *
     * @param {string} key
     * @param {string} [nsProp]
     * @param {string} [forceNS]
     * @returns
     * @memberof ClientModel
     */
    public getNamespacedStorage(key: string, nsProp?: string, forceNS?: string) {
        return getNamespacedStorage(this, key, nsProp, forceNS);
    }

    /**
     * See doc string in ~client/utils/util
     *
     * @param {string} key
     * @param {*} newVal
     * @param {string} [nsProp]
     * @returns
     * @memberof ClientModel
     */
    public setUpdateNamespacedStorage(key: string, newVal: any, nsProp?: string) {
        return setUpdateNamespacedStorage(this, key, newVal, nsProp);
    }

    /**
     * see doc string in ~client/utils/util
     *
     * @param {string} key
     * @param {string} [nsProp]
     * @returns
     * @memberof ClientModel
     */
    public deleteFromNamespacedStorage(key: string, nsProp?: string) {
        return deleteFromNamespacedStorage(this, key, nsProp);
    }

    /**
     * @inheritdoc
     *
     * @param {string} attr
     * @memberof ClientModel
     */
    public async save(attr?: DefNonFuncPropNames<this>): Promise<ConstParams<this>> {
        const attributes = attr ? [attr] : getMetadata(this, "definedAttributes") || [];
        const unsavedChanges: IndexStructure = await this.getUnsavedChanges();
        const toSave: ConstParams<this> = {};
        for (const attribute of attributes) {
            if (unsavedChanges.hasOwnProperty(attribute)) {
                const strAttr = <string>attribute;
                (<IndexStructure>toSave)[strAttr] = unsavedChanges[strAttr];
            }
        }
        databaseManager.database("default").collection(this.collectionName).update(this.id, toSave);
        return Promise.resolve(toSave);
    }

    /**
     * @inheritdoc
     *
     * @param {DefNonFuncPropNames<this>} attr
     * @returns {Promise<void>}
     * @memberof ClientModel
     */
    public discardChange(_attr: DefNonFuncPropNames<this>): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * @inheritdoc
     *
     * @returns {Promise<void>}
     * @memberof ClientModel
     */
    public discardChanges(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * @inheritdoc
     *
     * @returns {Promise<ConstParams<this>>}
     * @memberof ClientModel
     */
    public async getUnsavedChanges(): Promise<ConstParams<this>> {
        if (!this.collectionName) return Promise.reject();
        const unsavedChanges: ConstParams<this> = {};
        let dbCollection = await databaseManager.database("default").collection(this.collectionName).get(this.id);
        const definedAttributes = getMetadata(this, "definedAttributes");
        let attributes: Array<Attribute<this, DefNonFuncPropNames<this>>> = [];
        if (definedAttributes) {
            attributes = definedAttributes.map((definedAttribute) => {
                let wildCardMetadata = getWildcardMetadata(this, definedAttribute);
                if (wildCardMetadata instanceof Watched) wildCardMetadata = wildCardMetadata.subObject;
                return wildCardMetadata;
            });
        }
        dbCollection = dbCollection || {};
        for (const attr of attributes) {
            const attrVal = getProxyTarget(attr.valueOf());
            if (isArray(attrVal) && difference(attrVal, dbCollection[attr.property]).length) {
                (<IndexStructure>unsavedChanges)[attr.property] = attrVal;
            } else if (isObject(attrVal) && !isEqual(attrVal, dbCollection[attr.property])) {
                (<IndexStructure>unsavedChanges)[attr.property] = attrVal;
            } else if (isPrimitive(attrVal) && attrVal !== dbCollection[attr.property]) {
                (<IndexStructure>unsavedChanges)[attr.property] = attrVal;
            }
        }
        return Promise.resolve(unsavedChanges);
    }

    /**
     * General procedure to handle general type errors of all attributes and
     * properties for client side.
     *
     * @protected
     * @param {Error} error
     * @memberof ClientModel
     */
    protected onTypeCheckFail(error: Error) {
        logger.error(error.message);
    }

}
