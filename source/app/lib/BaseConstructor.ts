import { Binding } from "~bdo/lib/Binding";
import { getMetadata, defineMetadata } from "~bdo/utils/metadata";
import { isFunction } from "~bdo/utils/util";
import { ObjectOptions } from "type-graphql/dist/decorators/ObjectType";

type idyStructureBaseConst<T> = IndexStructure<ConstParams<T>>;
interface IBaseConstructorCtor {

    /**
     * In generally this will be called for everything which is decorated with
     * the BaseConstructor AFTER the native constructor has been finished but
     * Object is still in construction
     *
     * @memberof IBaseConstructorCtor
     */
    constructedCallback?: () => void;

    /**
     * Usually used to get items from a storage like the local storage.
     * The most important thing is, that this storage is a synchronous storage.
     *
     * @memberof IBaseConstructorCtor
     */
    getNamespacedStorage?: (key: string, nsProp: string, forceNS: string) => any;
}
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
     * @memberof IBaseConstructorOpts
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
export function baseConstructorFactory<T extends Constructor<IBaseConstructorCtor>>(ctor: T, constParamsIndex: number) {

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
        public static readonly graphQLType = ctor;

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
         * Sets a BaseComponent into procedural construction mode which disables
         * assigning const params and life cycle invocation
         *
         * @static
         * @type {boolean}
         * @memberof BaseConstructor
         */
        public static isProceduralComponentConstruction: boolean = false;

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
            const constParams = params[constParamsIndex];
            defineMetadata(this, "normalFunctionality", true);
            if (!BaseConstructor.isProceduralComponentConstruction) this.invokeLifeCycle(constParams);
        }

        /**
         * Assigns all const params to the current instance and initializes the life cycle
         *
         * @param {IndexStructure<string, any>} constParams
         * @memberof BaseConstructor
         */
        public invokeLifeCycle(constParams: IndexStructure<string, any>) {
            if (!(constParams instanceof Object)) constParams = {};
            let defaultSettings: idyStructureBaseConst<BaseConstructor> = getMetadata(this, "defaultSettings") || {};
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
            if (isFunction(this.constructedCallback)) this.constructedCallback();
        }
    }
    return BaseConstructor;
}
