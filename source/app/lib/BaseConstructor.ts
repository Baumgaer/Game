import { Binding } from "~bdo/lib/Binding";
import { getMetadata, defineMetadata } from "~bdo/utils/metadata";
import { isFunction } from "~bdo/utils/util";
import { isComponent, IGetNamespaceStorageAddition, BaseComponentInstance, canGetNamespacedStorage } from "~bdo/utils/framework";
import { ObjectTypeOptions } from "type-graphql/dist/decorators/ObjectType";
import { ViewEntityOptions } from "typeorm/decorator/options/ViewEntityOptions";
import { EntityOptions } from "typeorm/decorator/options/EntityOptions";
import { IndexOptions } from "typeorm/decorator/options/IndexOptions";
import { TreeType } from "typeorm/metadata/types/TreeTypes";

import type { BaseControllerFactory } from "~client/lib/BaseController";

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
 * @interface IBaseConstructorOpts
 * @extends ObjectOptions
 */
export interface IBaseConstructorOpts extends ObjectTypeOptions, Omit<EntityOptions, "name" | "database" | "engine"> {

    /**
     * Defines the name of the collection where a model is saved in.
     * Only effects the behavior of a model.
     *
     * @default "default"
     * @memberof IBaseConstructorOpts
     */
    collectionName?: string;

    /**
     * Defines the name of the database where a model is saved in.
     * Only effects the behavior of a model.
     *
     * @default "default"
     * @memberof IBaseConstructorOpts
     */
    databaseName?: string;

    /**
     * Enables inheritance for entities derived from this entity which are stored in same table
     *
     * @memberof IBaseConstructorOpts
     */
    enableTableInheritance?: boolean;

    /**
     * Indicates if a model should be used as a view in the database
     *
     * @memberof IBaseConstructorOpts
     */
    viewOptions?: Omit<ViewEntityOptions, "name" | "database">;

    /**
     * Declares the entity as a tree which should have parent and children.
     * Optimized for navigation
     *
     * @memberof IBaseConstructorOpts
     */
    treeType?: TreeType;

    /**
     * Enables the definition of intices which uses multiple columns
     *
     * @memberof IBaseConstructorOpts
     */
    multiColumnIndex?: { name?: string, fields: string[], options?: IndexOptions }[]
}

/**
 * Creates a new BaseConstructor based on ctor as prototype and arguments at
 * position constParamsIndex.
 *
 * @param ctor The class to extend with
 * @param constParamsIndex The position of the construction parameters
 * @returns The mixed in class BaseConstructor
 */
export function baseConstructorFactory<T extends IBaseConstructorCtor & ReturnType<typeof BaseControllerFactory>>(ctor: T, constParamsIndex: number) {

    /**
     * Invokes the life cycle of every component and model
     *
     * @extends T
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
         * @memberof BaseConstructor
         */
        public static readonly graphQLType = ctor;

        /**
         * @inheritdoc
         *
         * @static
         * @memberof BaseConstructor
         */
        public static readonly collectionName?: string = getMetadata(BaseConstructor, "collectionName");

        /**
         * @inheritdoc
         *
         * @static
         * @memberof BaseConstructor
         */
        public static readonly databaseName?: string = getMetadata(BaseConstructor, "databaseName");

        /**
         * Sets a BaseComponent into procedural construction mode which disables
         * assigning const params and life cycle invocation
         *
         * @static
         * @memberof BaseConstructor
         */
        public static isProceduralComponentConstruction: boolean = false;

        /**
         * @see BaseConstructor.collectionName
         *
         * @memberof BaseConstructor
         */
        public readonly collectionName?: string = BaseConstructor.collectionName;

        /**
         * @see BaseConstructor.databaseName
         *
         * @memberof BaseConstructor
         */
        public readonly databaseName?: string = BaseConstructor.databaseName;

        public readonly className: string = Object.getPrototypeOf(this.constructor).name;

        private callConnectedCallback: boolean = false;

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
         * @param constParams The parameters to construct the object with
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
            if (this.callConnectedCallback) this.connectedCallback();
        }

        protected connectedCallback() {
            if (isComponent(this) && !getMetadata(this, "constructionComplete")) {
                this.callConnectedCallback = true;
            } else super.connectedCallback();
        }

        /**
         * Assigns values of declared attributes in DOM to bindings and setters.
         * This is important because DOM attributes are stronger than any
         * default setting which implies that a binding should be changed, too.
         *
         * @param defaultSettings The settings which are set in the DOM of a component
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
         * @param id The id of the object
         * @param defaultSettings The settings which are set by default or are used for construction via assignment
         * @memberof BaseConstructor
         */
        private assignCachedSettings(id: string, defaultSettings: IndexStructure<any>) {
            if (!canGetNamespacedStorage(this)) return;
            const cachedSettings = this.getNamespacedStorage("*", "id", id) || {};
            for (const key in cachedSettings) {
                if (key in cachedSettings) {
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
