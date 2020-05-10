import { Binding } from "~bdo/lib/Binding";
import { getMetadata, defineMetadata } from "~bdo/utils/metadata";
import { isFunction } from "~bdo/utils/util";
import { isComponent, IGetNamespaceStorageAddition, BaseComponentInstance, canGetNamespacedStorage } from "~bdo/utils/framework";
import { ObjectTypeOptions } from "type-graphql/dist/decorators/ObjectType";

export interface IBaseConstructorCtor<T = any> extends IGetNamespaceStorageAddition<T> {

    /**
     * In generally this will be called for everything which is decorated with
     * the BaseConstructor AFTER the native constructor has been finished but
     * Object is still in construction
     *
     * @memberof IBaseConstructorCtor
     */
    constructedCallback?: () => void;

    /**
     * If the BaseConstructor is part of a Component of the frontend, there
     * will be a renderTemplate function which looks into the templateString
     * and tries to render a DOM.
     *
     * @memberof IBaseConstructorCtor
     */
    renderTemplate?: () => void;
}
/**
 * This parameters should only be used on models because on other objects they
 * will have no effects.
 *
 * @export
 * @interface IBaseConstructorOpts
 * @extends {ObjectOptions}
 */
export interface IBaseConstructorOpts extends ObjectTypeOptions {

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
         * Assigns all const params and other values which are used for
         * initialization to the current instance and initializes the life
         * cycle.
         *
         * @param {IndexStructure} constParams
         * @memberof BaseConstructor
         */
        public invokeLifeCycle(constParams: IndexStructure) {
            if (!(constParams instanceof Object)) constParams = {};
            let defaultSettings: IndexStructure = getMetadata(this, "defaultSettings") || {};
            // Assign attributes for declarative instantiation of component
            this.assignComponentDeclarativeAttributes(defaultSettings);
            // Assign constParams for programmatically instantiation
            defaultSettings = Object.assign(defaultSettings, constParams);
            // Assign cached settings which are the strongest settings
            this.assignCachedSettings(constParams.id || defaultSettings.id, defaultSettings);
            // Assign all merged settings which are collected
            Object.assign(this, defaultSettings);
            defineMetadata(this, "constructionComplete", true);
            if (isComponent(ctor) && isFunction(this.renderTemplate)) this.renderTemplate();
            if (isFunction(this.constructedCallback)) this.constructedCallback();
        }

        /**
         * Assigns values of declared attributes in DOM to bindings and setters.
         * This is important because DOM attributes are stronger than any
         * default setting which implies that a binding should be changed, too.
         *
         * @private
         * @param {IndexStructure<any>} defaultSettings
         * @returns {void}
         * @memberof BaseConstructor
         */
        private assignComponentDeclarativeAttributes(defaultSettings: IndexStructure<any>) {
            if (!isComponent<BaseComponentInstance>(this)) return;
            const attributes = Array.from(this.attributes.keys());
            for (const attribute of attributes) {
                const attrValue = this.getAttribute(attribute);
                if (!attrValue) continue;
                if (defaultSettings[attribute] && defaultSettings[attribute] instanceof Binding) {
                    defaultSettings[attribute].setValue(attrValue);
                } else Object.assign(defaultSettings, { [attribute]: attrValue });
            }
        }

        /**
         * Assigns values from cache to setters and bindings because they are
         * the strongest settings (because they are cached).
         *
         * @private
         * @param {string} id
         * @param {IndexStructure<any>} defaultSettings
         * @returns {void}
         * @memberof BaseConstructor
         */
        private assignCachedSettings(id: string, defaultSettings: IndexStructure<any>) {
            if (!canGetNamespacedStorage(this)) return;
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
    }
    return BaseConstructor;
}
