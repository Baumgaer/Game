
import { getNamespacedStorage, setUpdateNamespacedStorage, deleteFromNamespacedStorage } from "~client/utils/util";
import { getMetadata, getWildcardMetadata } from "~bdo/utils/metadata";
import { removeElementFromArray } from "~bdo/utils/util";
import { attribute, property, watched } from "~bdo/utils/decorators";
import { ControllerRegistry } from "~client/lib/ControllerRegistry";
import { Binding } from "~bdo/lib/Binding";

import type { Property } from "~bdo/lib/Property";
import type { BaseComponentFactory } from "~client/lib/BaseComponent";

type controllerLifeCycleFuncNames = "constructedCallback" | "connectedCallback" | "disconnectedCallback" | "adoptedCallback" | "remove";
type eventMapKey = keyof HTMLElementEventMap;
type eventListenerFunc<K extends eventMapKey> = (this: ReturnType<typeof BaseControllerFactory>, ev: HTMLElementEventMap[K]) => any;

interface IOwnerType extends InstanceType<ReturnType<typeof BaseComponentFactory>> { }
/**
 * Creates a new BaseController based on extension.
 * NOTE: Every **Component** is a also controller.
 *
 * @export
 * @template TBase
 * @param {TBase} extension
 * @returns
 */
export function BaseControllerFactory<TBase extends Constructor<any>>(extension: TBase) {

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
         * Contains all controllers which are registered on this controller / component
         *
         * @type {IndexStructure<BaseController>}
         * @memberof BaseController
         */
        public controllers: IndexStructure<BaseController> = {};

        /**
         * if this is a controller, the owner will be the component which
         * initializes this controller. If this is a component it will be
         * undefined.
         *
         * @protected
         * @type {IOwnerType | undefined}
         * @memberof BaseController
         */
        protected owner!: this extends HTMLElement ? undefined : IOwnerType;

        /**
         * Manages all controllers (and components) to be equal in id and provides an overview
         *
         * @private
         * @memberof BaseController
         */
        private controllerRegistry = ControllerRegistry.getInstance();

        /**
         * Contains all listeners which are registered on this controller to be
         * able to remove them when remove method is called.
         *
         * @private
         * @memberof BaseController
         */
        private listeners: Map<eventMapKey, eventListenerFunc<OneOf<eventMapKey>>[]> = new Map();

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
         * @inheritdoc
         *
         * @param {string} name
         * @param {(event: Event) => void} func
         * @memberof BaseController
         */
        public addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: eventListenerFunc<K>, options?: boolean | AddEventListenerOptions): void {
            if (!this.listeners.has(type)) this.listeners.set(type, []);
            const listenersArray: eventListenerFunc<K>[] = this.listeners.get(type)!;
            listenersArray.push(listener);
            if (this instanceof HTMLElement) super.addEventListener(type, listener, options);
        }

        /**
         * @inheritdoc
         *
         * @param {string} name
         * @param {(event: Event) => void} func
         * @memberof BaseController
         */
        public removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: eventListenerFunc<K>, options?: boolean | EventListenerOptions): void {
            if (this.listeners.has(type)) removeElementFromArray(this.listeners.get(type)!, listener);
            if (this instanceof HTMLElement) super.removeEventListener(type, listener, options);
        }

        /**
         * Removes components from DOM and controllers from components
         *
         * @memberof BaseController
         */
        public remove() {
            for (const listenerName of this.listeners.keys()) {
                for (const listener of this.listeners.get(listenerName)!) {
                    this.removeEventListener(listenerName, listener);
                }
            }
            this.callLiveCycleFunctionsOfControllers("remove");
            if (this instanceof HTMLElement) super.remove();
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
        protected connectedCallback() {
            this.callLiveCycleFunctionsOfControllers("connectedCallback");
        }

        /**
         * 3. Called when the component / owner will be finally removed from the dom.
         *
         * @protected
         * @memberof BaseController
         */
        protected disconnectedCallback() {
            this.callLiveCycleFunctionsOfControllers("disconnectedCallback");
        }

        /**
         * 4. Called when the component / owner is moved to another document.
         *
         * @protected
         * @memberof BaseController
         */
        protected adoptedCallback() {
            this.callLiveCycleFunctionsOfControllers("adoptedCallback");
        }

        /**
         * Initializes the given controller and returns its instance
         *
         * @protected
         * @memberof BaseController
         */
        protected addController<C extends Constructor<BaseController>>(name: string, controller: C, params: ConstParams<C>): void {
            if (name in this.controllers) throw new Error(`controller with name "${name}" already exists`);
            this.controllers[name] = new controller(Object.assign(params, { owner: this }));
        }

        /**
         * Removes the given controller
         *
         * @protected
         * @memberof BaseController
         */
        protected removeController(name: string): void {
            if (!(name in this.controllers)) throw new Error(`controller "${name}" does not exist`);
            this.controllers[name].remove();
            delete this.controllers[name];
        }

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

        /**
         * Calls the given funcName which is a life cycle func name of the controllers
         *
         * @private
         * @param {controllerLifeCycleFuncNames} funcName
         * @memberof BaseController
         */
        private callLiveCycleFunctionsOfControllers(funcName: controllerLifeCycleFuncNames): void {
            for (const controllerName in this.controllers) {
                if (this.controllers.hasOwnProperty(controllerName)) {
                    const controller = this.controllers[controllerName];
                    controller[funcName]();
                }
            }
        }
    }

    return BaseController;
}
