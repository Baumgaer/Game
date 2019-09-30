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
        const definedAttributes = getMetadata(this, "definedAttributes");
        if (!definedAttributes || attr && !definedAttributes.includes(attr)) throw new Error("invalid defined attributes");
        const attributes = attr ? [attr] : definedAttributes;
        const unsavedChanges: IndexStructure = await this.getUnsavedChanges();
        const toSave: IndexStructure = {};
        const sendToServer: IndexStructure = {};
        for (const attribute of attributes) {
            if (unsavedChanges.hasOwnProperty(attribute)) {
                const strAttr = <string>attribute;
                const proxyVal = getProxyTarget(unsavedChanges[strAttr]);
                // Get corresponding attribute
                let wildCardMetadata: Attribute = getWildcardMetadata(this, strAttr);
                if (wildCardMetadata instanceof Watched) wildCardMetadata = wildCardMetadata.subObject as Attribute;
                // Determine attributes to save in local database
                if (!wildCardMetadata.doNotPersist) toSave[strAttr] = proxyVal;
                // Determine attributes to send to server
                if (!wildCardMetadata.noServerInteraction) sendToServer[strAttr] = proxyVal;
            }
        }
        if (Object.keys(toSave).length) {
            databaseManager.database("default").collection(this.collectionName).update(this.id, toSave);
        }
        if (Object.keys(sendToServer).length) logger.debug(`send ${JSON.stringify(sendToServer)} to server`);
        return Promise.resolve(unsavedChanges as ConstParams<this>);
    }

    /**
     * @inheritdoc
     *
     * @param {DefNonFuncPropNames<this>} attr
     * @returns {Promise<void>}
     * @memberof ClientModel
     */
    public discard(_attr?: DefNonFuncPropNames<this>): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * @inheritdoc
     *
     * @returns {Promise<ConstParams<this>>}
     * @memberof ClientModel
     */
    public async getUnsavedChanges(): Promise<ConstParams<this>> {
        if (!this.collectionName) return Promise.reject("No collectionName provided");
        const unsavedChanges: ConstParams<this> = {};
        let dbCollection = await databaseManager.database("default").collection(this.collectionName).get(this.id);
        const definedAttributes = getMetadata(this, "definedAttributes") || [];
        dbCollection = dbCollection || {};
        for (const attr of definedAttributes) {
            const strAttr = <string>attr;
            const attrVal = getProxyTarget(this[attr]);
            if (isArray(attrVal) && difference(attrVal, dbCollection[strAttr]).length) {
                (<IndexStructure>unsavedChanges)[strAttr] = this[attr];
            } else if (isObject(attrVal) && !isEqual(attrVal, dbCollection[strAttr])) {
                (<IndexStructure>unsavedChanges)[strAttr] = this[attr];
            } else if (isPrimitive(attrVal) && attrVal !== dbCollection[strAttr]) {
                (<IndexStructure>unsavedChanges)[strAttr] = this[attr];
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
