import { Binding } from "~bdo/lib/Binding";
import { getMetadata, defineMetadata } from "~bdo/utils/metadata";
import { isFunction } from "~bdo/utils/util";
import { ObjectOptions } from "type-graphql/dist/decorators/ObjectType";

/**
 * This parameters should only be used on models because on other objects they
 * will have no effects.
 *
 * @export
 * @interface IBaseConstructorOpts
 * @extends {ObjectOptions}
 */
export interface IBaseConstructorOpts extends ObjectOptions {
    /**
     * Defines the name of the collection where a model is saved in.
     * Only effects the behavior of a model.
     *
     * @default "default"
     * @type {string}
     * @memberof baseConstructorOpts
     */
    collectionName?: string;

    /**
     * Defines the name of the database where a model is saved in.
     * Only effects the behavior of a model.
     *
     * @default "default"
     * @type {string}
     * @memberof IBaseConstructorOpts
     */
    databaseName?: string;
}

/**
 * Creates a new BaseConstructor based on ctor as prototype and arguments at
 * position constParamsIndex.
 *
 * @export
 * @param {*} ctor
 * @param {number} constParamsIndex
 * @returns
 */
export function baseConstructorFactory(ctor: any, constParamsIndex: number) {

    /**
     * Invokes the life cycle of every component and model
     *
     * @class BaseConstructor
     * @extends {ctor}
     */
    class BaseConstructor extends ctor implements IBaseConstructorOpts {

        /**
         * Represents the original class name of the constructor
         *
         * @static
         * @memberof BaseConstructor
         */
        public static readonly className = Object.getPrototypeOf(BaseConstructor).name;

        /**
         * Determines the original type of this model - set by the
         * baseConstructor - for the GraphQL resolver
         *
         * @static
         * @type {*}
         * @memberof BaseConstructor
         */
        public static readonly graphQLType: any = ctor;

        /**
         * @inheritdoc
         *
         * @static
         * @type {string}
         * @memberof BaseConstructor
         */
        public static readonly collectionName?: string = getMetadata(BaseConstructor, "collectionName");

        /**
         * @inheritdoc
         *
         * @static
         * @type {string}
         * @memberof BaseConstructor
         */
        public static readonly databaseName?: string = getMetadata(BaseConstructor, "databaseName");

        /**
         * @see BaseConstructor.collectionName
         *
         * @type {string}
         * @memberof BaseConstructor
         */
        public readonly collectionName?: string = BaseConstructor.collectionName;

        /**
         * @see BaseConstructor.databaseName
         *
         * @type {string}
         * @memberof BaseConstructor
         */
        public readonly databaseName?: string = BaseConstructor.databaseName;

        constructor(...params: any[]) {
            super(...params);
            let constParams = params[constParamsIndex];
            if (!(constParams instanceof Object)) constParams = {};
            defineMetadata(this, "normalFunctionality", true);
            let defaultSettings: ConstParams<BaseConstructor> = getMetadata(this, "defaultSettings") || {};
            defaultSettings = Object.assign(defaultSettings, constParams);
            if (isFunction(this.getNamespacedStorage)) {
                const id = constParams.id || defaultSettings.id;
                const cachedSettings = this.getNamespacedStorage("*", "id", id) || {};
                for (const key in cachedSettings) {
                    if (cachedSettings.hasOwnProperty(key)) {
                        const element = defaultSettings[key];
                        if (element instanceof Binding) {
                            element.setValue(cachedSettings[key]);
                        } else defaultSettings[key] = cachedSettings[key];
                    }
                }
            }
            Object.assign(this, defaultSettings);
            defineMetadata(this, "constructionComplete", true);
            if (isFunction(this.constructedCallback)) (<any>this).constructedCallback(...params);
        }
    }
    return BaseConstructor;
}
