import { baseConstructor, property } from "~bdo/utils/decorators";
import { BDOModel } from "~bdo/lib/BDOModel";
// import { getWildcardMetadata } from "~bdo/utils/metadata";

/**
 * Provides basic functionality and fields for each Model on each side
 * (server and client)
 *
 * @abstract
 * @extends BDOModel
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
     * @param _attr The attributes which should be discarded
     * @memberof ServerModel
     */
    public discard(_attr?: DefNonFuncPropNames<this>): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * @inheritdoc
     *
     * @param _attr The attributes which should be checked
     * @throws {Error}
     * @memberof ServerModel
     */
    public isUnsaved(_attr?: DefNonFuncPropNames<this>): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    /**
     * @inheritdoc
     *
     * @memberof ServerModel
     */
    public hasUnsavedChanges(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    /**
     * @inheritdoc
     *
     * @memberof ServerModel
     */
    public getUnsavedChanges(): Promise<IndexStructure> {
        throw new Error("Method not implemented.");
    }

}
