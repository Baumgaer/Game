import { baseConstructor, property } from "~bdo/utils/decorators";
import { BDOModel } from "~bdo/lib/BDOModel";
import { getNamespacedStorage, setUpdateNamespacedStorage, deleteFromNamespacedStorage } from "~client/utils/util";
import { isReferenceString } from "~bdo/utils/framework";
import { getWildcardMetadata, getMetadata } from "~bdo/utils/metadata";
import { Logger } from "~client/lib/Logger";
import { DatabaseManager } from "~client/lib/DatabaseManager";
import { Attribute } from '~bdo/lib/Attribute';
import { Watched } from '~bdo/lib/Watched';
import { getProxyTarget, isEqual, isArray, difference, isObject, isPrimitive } from "~bdo/utils/util";
import { ModelRegistry } from "~bdo/lib/ModelRegistry";

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
     * This is just a ClientModel identifier in case you want to know if a not
     * initialized class is a model.
     *
     * @static
     * @type {boolean}
     * @memberof BDOModel
     */
    public static readonly isClientModel: boolean = true;

    /**
     * @see ClientModel.isClientModel
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
     * @template T
     * @param {Constructor<T>} this
     * @param {T["id"]} id
     * @returns
     * @memberof ClientModel
     */
    public static getInstanceByID<T extends BDOModel>(this: Constructor<T>, id: T["id"]) {
        return new Promise<T | undefined>(async (resolve) => {
            let model = ModelRegistry.getInstance().getModelById(id, this) as T | undefined;
            if (!model) model = new this();
            const dataFromLocalDB = await databaseManager
                .database(model.databaseName)
                .collection(model.collectionName)
                .get(id);
            if (dataFromLocalDB) {
                const pendingPromises: Array<Promise<any>> = [];
                for (const key in dataFromLocalDB) {
                    if (dataFromLocalDB.hasOwnProperty(key)) {
                        const modelElem = Reflect.get(model, key);
                        let klass: typeof ClientModel;
                        let elem = dataFromLocalDB[key];
                        let correspondingListLikeDB = [];

                        if (modelElem instanceof Array) {
                            correspondingListLikeDB = modelElem.map((item) => {
                                if (item instanceof ClientModel) return item.getReferenceString();
                                return item;
                            });
                        }
                        if (elem instanceof Array && difference(correspondingListLikeDB, elem).length) {
                            const pendingItems: Array<Promise<any>> = [];
                            for (let item of elem) {
                                if (isReferenceString(item)) {
                                    const refParts = item.split(":")[1];
                                    const className = refParts[1];
                                    klass = require(`./../models/${className}.ts`)[className];
                                    pendingItems.push(klass.getInstanceByID(refParts[2]).then((result) => {
                                        item = result;
                                    }));
                                }
                            }
                            pendingPromises.push(Promise.all(pendingItems));
                        } else if (isReferenceString(elem) && elem !== model.getReferenceString()) {
                            const refParts = elem.split(":")[1];
                            const className = refParts[1];
                            klass = require(`./../models/${className}.ts`)[className];
                            pendingPromises.push(klass.getInstanceByID(refParts[2]).then((result) => {
                                elem = result;
                            }));
                        }
                    }
                }
                await Promise.all(pendingPromises);
                Object.assign(model, dataFromLocalDB);
            }
            if (!model.id.includes("pending")) return resolve(model);
            return resolve();
        });
    }

    /**
     * Searches for models of current model type by attributes in the local
     * database and creates instances of them using getInstanceByID.
     *
     * @static
     * @template T
     * @param {Constructor<T>} this
     * @param {ConstParams<T>} attributes
     * @returns
     * @memberof ClientModel
     */
    public static getInstancesByAttributes<T extends BDOModel>(this: Constructor<T>, attributes: ConstParams<T>) {
        return ModelRegistry.getInstance().getModelsByAttributes(attributes) as ClientModel[];
    }

    /**
     * @see getNamespacedStorage
     * @link ~client/utils/util
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
     * @see setUpdateNamespacedStorage
     * @link ~client/utils/util
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
     * @see deleteFromNamespacedStorage
     * @link ~client/utils/util
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
    public async save(attr?: DefNonFuncPropNames<this>): Promise<IndexStructure> {
        const definedAttributes = getMetadata(this, "definedAttributes");
        if (!definedAttributes || attr && !definedAttributes.has(attr)) throw new Error("invalid defined attributes");
        const attributes = attr ? [attr] : definedAttributes;
        const unsavedChanges: IndexStructure = await this.getUnsavedChanges();
        const toSave: IndexStructure = {};
        const sendToServer: IndexStructure = {};
        for (const attribute of attributes.keys()) {
            if (unsavedChanges.hasOwnProperty(attribute)) {
                const strAttr = <string>attribute;
                let proxyVal = getProxyTarget(unsavedChanges[strAttr]);
                if (proxyVal instanceof Array) {
                    proxyVal = proxyVal.map((item) => {
                        if (item instanceof ClientModel) {
                            return item.getReferenceString();
                        }
                        return getProxyTarget(item);
                    });
                }
                if (proxyVal instanceof ClientModel) proxyVal = proxyVal.getReferenceString();
                // Get corresponding attribute
                let wildCardMetadata: Attribute = getWildcardMetadata(this, strAttr);
                if (wildCardMetadata instanceof Watched) wildCardMetadata = wildCardMetadata.subObject as Attribute;
                // Determine attributes to save in local database
                if (!wildCardMetadata.doNotPersist) toSave[strAttr] = proxyVal;
                // Determine attributes to send to server
                if (!wildCardMetadata.noServerInteraction) sendToServer[strAttr] = proxyVal;
            }
        }
        try {
            if (Object.keys(toSave).length) {
                await databaseManager
                    .database(this.databaseName)
                    .collection(this.collectionName)
                    .update(this.id, toSave);
            }
            if (Object.keys(sendToServer).length) logger.debug(`send ${JSON.stringify(sendToServer)} to server`);
        } catch (error) {
            return Promise.reject(error);
        }
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
    public async getUnsavedChanges(): Promise<IndexStructure> {
        if (!this.collectionName) return Promise.reject("No collectionName provided");
        const unsavedChanges: ConstParams<this> = {};
        let dbCollection = await databaseManager.database("default").collection(this.collectionName).get(this.id);
        const definedAttributes = getMetadata(this, "definedAttributes");
        dbCollection = dbCollection || {};
        if (definedAttributes) {
            for (const attr of definedAttributes.keys()) {
                const strAttr = attr.toString();
                const attrVal = getProxyTarget(this[attr]);
                if (isArray(attrVal) && difference(attrVal, dbCollection[strAttr]).length) {
                    (<IndexStructure>unsavedChanges)[strAttr] = this[attr];
                } else if (isObject(attrVal) && !isEqual(attrVal, dbCollection[strAttr])) {
                    (<IndexStructure>unsavedChanges)[strAttr] = this[attr];
                } else if (isPrimitive(attrVal) && attrVal !== dbCollection[strAttr]) {
                    (<IndexStructure>unsavedChanges)[strAttr] = this[attr];
                }
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
