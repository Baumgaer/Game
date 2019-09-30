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
    public async save(_attr?: DefNonFuncPropNames<this>): Promise<any> {
        return Promise.resolve();
    }

    /**
     * @inheritdoc
     *
     * @param {DefNonFuncPropNames<this>} [_attr]
     * @returns {Promise<void>}
     * @memberof ServerModel
     */
    public discardChange(_attr?: DefNonFuncPropNames<this>): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * @inheritdoc
     *
     * @returns {Promise<void>}
     * @memberof ServerModel
     */
    public discardChanges(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * @inheritdoc
     *
     * @param {DefNonFuncPropNames<this>} [_attr]
     * @returns {Promise<boolean>}
     * @memberof ServerModel
     */
    public isUnsaved(_attr?: DefNonFuncPropNames<this>): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    /**
     * @inheritdoc
     *
     * @returns {Promise<boolean>}
     * @memberof ServerModel
     */
    public hasUnsavedChanges(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    /**
     * @inheritdoc
     *
     * @returns {Promise<IndexStructure<string, any>>}
     * @memberof ServerModel
     */
    public getUnsavedChanges(): Promise<IndexStructure<string, any>> {
        throw new Error("Method not implemented.");
    }

}
