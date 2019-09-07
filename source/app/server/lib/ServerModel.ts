import { baseConstructor, property } from "~bdo/utils/decorators";
import { BDOModel } from "~bdo/lib/BDOModel";
// import { getWildcardMetadata } from "~bdo/utils/metadata";

/**
 * Provides basic functionality and fields for each Model on each side
 * (server and client)
 *
 * @export
 * @abstract
 * @class BDOModel
 */
@baseConstructor()
export class ServerModel extends BDOModel {

    /**
     * This is just a BDOModel identifier in case you want to know if a not
     * initialized class is a model.
     *
     * @static
     * @type {boolean}
     * @memberof BDOModel
     */
    public static readonly isServerModel: boolean = true;

    /**
     * This is for better identification of BDO models and instance check
     *
     * @type {boolean}
     * @memberof BDOModel
     */
    @property() public readonly isServerModel: boolean = true;

    /**
     * @inheritdoc
     *
     * @param {string} prop
     * @returns {Promise<any>}
     * @memberof ServerModel
     */
    public async save(_prop: string): Promise<any> {
        return new Promise((resolve, _reject) => {
            // console.log(`saved ${_prop} with val ${getWildcardMetadata(this, _prop).unsavedChange}!`);
            resolve();
        });
    }

}
