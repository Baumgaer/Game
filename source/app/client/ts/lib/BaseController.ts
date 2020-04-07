
import { getNamespacedStorage, setUpdateNamespacedStorage, deleteFromNamespacedStorage } from "~client/utils/util";
import { getMetadata, getWildcardMetadata } from "~bdo/utils/metadata";
import { attribute, property, watched } from "~bdo/utils/decorators";
import { ControllerRegistry } from "~client/lib/ControllerRegistry";
import { Binding } from "~bdo/lib/Binding";

import type { Property } from "~bdo/lib/Property";

/**
 * Creates a new BaseController based on extension.
 * NOTE: Every **Component** is a also controller.
 *
 * @export
 * @template TBase
 * @param {TBase} extension
 * @returns
 */
export function BaseControllerFactory<TBase extends Constructor<Object>>(extension: TBase) {

    /**
     * Provides basic support for controller
     *
     * @class BaseController
     */
    abstract class BaseController extends (extension ?? Object) {

        /**
         * The static version of the base controller identifier
         *
         * @static
         * @type {boolean}
         * @memberof BaseController
         */
        public static readonly isBaseController: boolean = true;

        /**
         * Represents the constructors name.
         *
         * @protected
         * @type {string}
         * @memberof BaseController
         */
        @property() public readonly className: string = Object.getPrototypeOf(this.constructor).name;

        /**
         * This is for better identification of base controllers and instance check
         *
         * @type {boolean}
         * @memberof BaseController
         */
        @property() public readonly isBaseController: boolean = true;

        /**
         * To ensure that every component has a unique ID attribute
         *
         * @type {string}
         * @memberof BaseController
         */
        @watched() @attribute() public id: string = '';

        /**
         * Manages all controllers (and components) to be equal in id and provides an overview
         *
         * @private
         * @memberof BaseController
         */
        private controllerRegistry = ControllerRegistry.getInstance();

        /**
         * Gives access to the properties similar to element.attributes
         *
         * @readonly
         * @type {Map<string, Property<this>>}
         * @memberof BaseController
         */
        public get properties(): Map<string, Property<this>> {
            const props = new Map<string, Property<this>>();
            const properties = getMetadata(this, "definedProperties");
            if (properties) {
                for (const prop of properties.keys()) {
                    props.set(prop.toString(), getWildcardMetadata(this, prop));
                }
            }
            return props;
        }

        /**
         * Holds a list of all bindings to all models
         *
         * @readonly
         * @protected
         * @type {Map<string, Binding<this, DefNonFuncPropNames<this>>>}
         * @memberof BaseController
         */
        protected get bindings(): Map<string, Binding<this, DefNonFuncPropNames<this>>> {
            const bindings = getMetadata(this, "initiatorBinding");
            return bindings ? bindings : new Map();
        }

        constructor(...args: any[]) {
            super(...args);
            this.controllerRegistry.add(this);
            this.id = this.generateUniqueID();
        }

        /**
         * Assigns all const params to the current instance and initializes the life cycle
         *
         * @template T
         * @param {Constructor<T>} this
         * @param {ConstParams<T>} ConstParams
         * @memberof BaseController
         */
        public invokeLifeCycle<T extends BaseController>(_ConstParams?: ConstParams<T>) {
            throw new Error("This is not a BaseConstructor");
        }

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
         * Converts the current instance of this to a json with properties only
         * NOTE: This will be used by JSON.stringify() to make a string out of this
         *       instance.
         *
         * @returns
         * @memberof BaseController
         */
        public toJSON() {
            const data: IndexStructure = {};
            for (const key in this) {
                if (this[key] !== undefined) {
                    const element = this[key];
                    data[key] = element;
                }
            }
            return data;
        }

        /**
         * 1. Called when all provided constructor parameters are assigned to
         * their corresponding properties / attributes.
         *
         * @protected
         * @memberof BaseController
         */
        protected constructedCallback() { }

        /**
         * 2. Called when the component / owner is connected with the dom.
         *
         * @protected
         * @memberof BaseController
         */
        protected connectedCallback() { }

        /**
         * 3. Called when the component / owner will be finally removed from the dom.
         *
         * @protected
         * @memberof BaseController
         */
        protected disconnectedCallback() { }

        /**
         * 4. Called when the component / owner is moved to another document.
         *
         * @protected
         * @memberof BaseController
         */
        protected adoptedCallback() { }

        /**
         * Initializes the given controller and returns its instance
         *
         * @protected
         * @memberof BaseController
         */
        protected addController(): void { }

        /**
         * Removes the given controller
         *
         * @protected
         * @memberof BaseController
         */
        protected removeController(): void { }

        /**
         * Reacts on id first assignment just to ensure that the id in registry
         * is set.
         *
         * @protected
         * @memberof BaseController
         */
        protected onIdInit() {
            this.onIdChange('');
        }

        /**
         * Reacts on id change and updates or sets the id in the controller registry
         *
         * @protected
         * @param {string} oldId
         * @memberof BaseController
         */
        protected onIdChange(oldId: string) {
            if (!oldId) {
                this.controllerRegistry.setId(this.id, this);
            } else this.controllerRegistry.updateId(oldId, this.id);
        }

        /**
         * Generates a unique ID for each component and controller based on
         * class name and occurrence position.
         *
         * @private
         * @returns
         * @memberof BaseController
         */
        private generateUniqueID(): string {
            const occurrences = this.controllerRegistry.getByClassName(this.className);
            const index = occurrences.indexOf(this);
            let occurrence = index >= 0 ? index : occurrences.length;
            while (this.controllerRegistry.getById(`${this.className}_${occurrence}`)) {
                occurrence++;
            }
            return `${this.className}_${occurrence}`;
        }
    }

    return BaseController;
}
