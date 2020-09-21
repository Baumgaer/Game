import { baseConstructor, property } from "~bdo/utils/decorators";
import { BDOModel } from "~bdo/lib/BDOModel";
import { getNamespacedStorage, setUpdateNamespacedStorage, deleteFromNamespacedStorage } from "~client/utils/util";
import { Logger } from "~client/lib/Logger";

const logger = new Logger();

/**
 * Provides basic functionality and fields for each Model on each side
 * (server and client)
 *
 * @abstract
 * @extends BDOModel
 */
@baseConstructor({ isAbstract: true })
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

    constructor(_params?: ConstParams<ClientModel>) {
        super();
    }

    /**
     * @see getNamespacedStorage
     *
     * @param key The key of the namespaced storage to get
     * @param nsProp The property which should be used as a namespace suffix (The prefix is the name of the instance). Default: "id"
     * @param forceNS This will overwrite every property value (nsProp value) and will be used as namespace suffix
     * @returns The value of the given key respecting the namespace
     * @memberof ClientModel
     */
    public getNamespacedStorage<K extends DefNonFuncPropNames<this>, P extends DefNonFuncPropNames<this>>(key: K, nsProp?: P, forceNS?: string) {
        return getNamespacedStorage(this, key, nsProp, forceNS);
    }

    /**
     * @see setUpdateNamespacedStorage
     *
     * @param key The key of the namespaced storage to set
     * @param newVal The value which should bet set to the key
     * @param nsProp The property which should be used as a namespace suffix (The prefix is the name of the instance). Default: "id"
     * @memberof ClientModel
     */
    public setUpdateNamespacedStorage<K extends DefNonFuncPropNames<this>, P extends DefNonFuncPropNames<this>>(key: K, newVal: this[K], nsProp?: P) {
        setUpdateNamespacedStorage(this, key, newVal, nsProp);
    }

    /**
     * @see deleteFromNamespacedStorage
     *
     * @param key The key of the namespaced storage to delete
     * @param nsProp The property which should be used as a namespace suffix (The prefix is the name of the instance). Default: "id"
     * @memberof ClientModel
     */
    public deleteFromNamespacedStorage<K extends DefNonFuncPropNames<this> | "*", P extends DefNonFuncPropNames<this>>(key: K, nsProp?: P) {
        deleteFromNamespacedStorage(this, key, nsProp);
    }

    public async save() {
        throw new Error("not implemented");
    }

    /**
     * @inheritdoc
     *
     * @param _attr An attribute to discard
     * @memberof ClientModel
     */
    public discard(_attr?: DefNonFuncPropNames<this>): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * General procedure to handle general type errors of all attributes and
     * properties for client side.
     *
     * @protected
     * @param error The error which happened while checking the type of an attribute
     * @memberof ClientModel
     */
    protected onTypeCheckFail(error: Error) {
        logger.error(error.message);
    }

    protected afterDatabaseLoadCallback() {
        console.log("LOAD!"); // eslint-disable-line
    }

}
