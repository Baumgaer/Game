import { baseConstructor, property } from "~bdo/utils/decorators";
import { BDOModel } from "~bdo/lib/BDOModel";
import { getNamespacedStorage, setUpdateNamespacedStorage, deleteFromNamespacedStorage } from "~client/utils/util";

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
     * Stores the unsaved changes into the corresponding collection of the model
     *
     * @memberof ClientModel
     */
    public async save() {

    }

}
