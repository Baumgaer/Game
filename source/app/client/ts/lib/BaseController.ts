
import { getNamespacedStorage, setUpdateNamespacedStorage, deleteFromNamespacedStorage } from "~client/utils/util";
import { getMetadata, getWildcardMetadata } from "~bdo/utils/metadata";
import { removeElementFromArray } from "~bdo/utils/util";
import { attribute, property, watched } from "~bdo/utils/decorators";
import { ControllerRegistry } from "~client/lib/ControllerRegistry";
import { Binding } from "~bdo/lib/Binding";
import { isComponent, BaseComponentInstance } from '~bdo/utils/framework';
import languageResources from "~static/locales";

import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import type { Property } from "~bdo/lib/Property";
import type { Attribute } from "~bdo/lib/Attribute";
import type { BaseComponentFactory } from "~client/lib/BaseComponent";

type controllerLifeCycleFuncNames = "constructedCallback" | "connectedCallback" | "disconnectedCallback" | "adoptedCallback" | "remove";
type eventMapKey = keyof HTMLElementEventMap;
type eventListenerFunc<K extends eventMapKey> = (this: ReturnType<typeof BaseControllerFactory>, ev: HTMLElementEventMap[K]) => any;

interface OwnerType extends InstanceType<ReturnType<typeof BaseComponentFactory>> { } // eslint-disable-line

i18next.use(LanguageDetector).init({
    resources: languageResources,
    cleanCode: true,
    lowerCaseLng: true,
    initImmediate: true,
    detection: {
        caches: ["sessionStorage"],
        order: ['querystring', 'cookie', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain']
    }
});

/**
 * Creates a new BaseController based on extension.
 * NOTE: Every **Component** is a also controller.
 *
 * @template TBase
 * @param extension The type to extend with
 * @returns The mixedin class BaseController
 */
export function BaseControllerFactory<TBase extends Constructor<any>>(extension: TBase) {

    /**
     * Provides basic support for controller
     *
     * @extends TBase
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
         * @memberof BaseController
         */
        public readonly controllers: IndexStructure<BaseController> = {};

        /**
         * if this is a controller, the owner will be the component which
         * initializes this controller. If this is a component it will be
         * undefined.
         *
         * @protected
         * @memberof BaseController
         */
        protected owner!: this extends HTMLElement ? undefined : OwnerType;

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
         * @returns a Map with all registered properties
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
         * Gives access to the properties similar to element.attributes
         *
         * @readonly
         * @returns A map with all registerd attributes
         * @memberof BaseController
         */
        public get attributes(): Map<string, Attribute<this>> {
            const attrs = new Map<string, Attribute<this>>();
            const attributes = getMetadata(this, "definedAttributes");
            if (attributes) {
                for (const attr of attributes.keys()) {
                    attrs.set(attr.toString(), getWildcardMetadata(this, attr));
                }
            }
            return attrs;
        }

        /**
         * Holds a list of all bindings to all models
         *
         * @readonly
         * @protected
         * @returns A map with registered bindings
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
         * @param _ConstParams The parameters which were used to construct the controller
         * @memberof BaseController
         */
        public invokeLifeCycle<T extends BaseController>(_ConstParams?: ConstParams<T>) {
            throw new Error("This is not a BaseConstructor");
        }

        /**
         * Translates a given translationKey in the given Namespace.
         * If no translationKey is given, the namespace will be used as the
         * translationKey and the used namespace will be detected by tha name
         * of the component or - in case of controller - owner.
         *
         * @param namespaceOrTranslationKey A namespace which should be used or the key to translate
         * @param translationKey The key to translate
         * @returns The translation of the key
         * @memberof BaseController
         */
        translation(namespaceOrTranslationKey: string, translationKey?: string): string {
            let namespace = namespaceOrTranslationKey;
            let key = translationKey;

            // Because translations on client side are on
            let classToTakeCareOf = this as unknown as BaseComponentInstance;
            if (!isComponent<BaseComponentInstance>(this)) classToTakeCareOf = this.owner;

            if (!key) {
                namespace = classToTakeCareOf.className;
                key = namespaceOrTranslationKey;
            }

            let translation = i18next.getResource(i18next.language, namespace, key);
            let prototype = Object.getPrototypeOf(classToTakeCareOf.constructor);
            while (!translation && isComponent(prototype) && !(namespaceOrTranslationKey && translationKey)) {
                prototype = Object.getPrototypeOf(prototype);
                translation = i18next.getResource(i18next.language, prototype.name, key);
            }

            return translation || `${namespace}:${key}`;
        }

        /**
         * See doc string in ~client/utils/util
         *
         * @param key The key of the namespaced storage to get
         * @param nsProp The property which should be used as a namespace suffix (The prefix is the name of the instance)
         * @param forceNS This will overwrite every property value (nsProp value) and will be used as namespace suffix
         * @returns The value of the given key respecting the namespace
         * @memberof BaseController
         */
        public getNamespacedStorage<K extends DefNonFuncPropNames<this>, P extends DefNonFuncPropNames<this>>(key: K, nsProp?: P, forceNS?: string) {
            return getNamespacedStorage(this, key, nsProp, forceNS);
        }

        /**
         * See doc string in ~client/utils/util
         *
         * @param key The key of the namespaced storage to set
         * @param newVal The value which should bet set to the key
         * @param nsProp The property which should be used as a namespace suffix (The prefix is the name of the instance)
         * @memberof BaseController
         */
        public setUpdateNamespacedStorage<K extends DefNonFuncPropNames<this>, P extends DefNonFuncPropNames<this>>(key: K, newVal: this[K], nsProp?: P): void {
            setUpdateNamespacedStorage(this, key, newVal, nsProp);
        }

        /**
         * see doc string in ~client/utils/util
         *
         * @param key The key of the namespaced storage to delete
         * @param nsProp The property which should be used as a namespace suffix (The prefix is the name of the instance)
         * @memberof BaseController
         */
        public deleteFromNamespacedStorage<K extends DefNonFuncPropNames<this> | "*", P extends DefNonFuncPropNames<this>>(key: K, nsProp?: P) {
            deleteFromNamespacedStorage(this, key, nsProp);
        }

        /**
         * Converts the current instance of this to a json with properties only
         * NOTE: This will be used by JSON.stringify() to make a string out of this
         *       instance.
         *
         * @returns The controller as a simple JSON
         * @memberof BaseController
         */
        public toJSON() {
            const data: IndexStructure<this[keyof this]> = {};
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
         * @param type The name of the event to listen to
         * @param listener The handler function to react to the event
         * @param options Special options to change behavior of the listener
         * @memberof BaseController
         */
        public addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: eventListenerFunc<K>, options?: boolean | AddEventListenerOptions): void {
            if (!(this instanceof HTMLElement) && !(this instanceof EventTarget)) throw new Error("This is not an instance of HTMLElement or EventTarget");
            if (!this.listeners.has(type)) this.listeners.set(type, []);
            const listenersArray: eventListenerFunc<K>[] = this.listeners.get(type) || [];
            listenersArray.push(listener);
            if (super.addEventListener) super.addEventListener(type, listener, options);
        }

        /**
         * @inheritdoc
         *
         * @param type The name of the event  to remove from object
         * @param listener The handler to remove
         * @param options Special options to change the behavior of the handler
         * @memberof BaseController
         */
        public removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: eventListenerFunc<K>, options?: boolean | EventListenerOptions): void {
            if (!(this instanceof HTMLElement) && !(this instanceof EventTarget)) throw new Error("This is not an instance of HTMLElement or EventTarget");
            if (!this.listeners.has(type)) return;
            if (this.listeners.has(type)) removeElementFromArray(this.listeners.get(type) || [], listener);
            if (super.removeEventListener) super.removeEventListener(type, listener, options);
        }

        /**
         * Removes controllers from components and event listeners from controllers.
         *
         * @memberof BaseController
         */
        public remove() {
            for (const listenerName of this.listeners.keys()) {
                for (const listener of this.listeners.get(listenerName) || []) {
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
        protected constructedCallback() {
            // Nothing to do here
        }

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
         * @param name The registration name of the controller
         * @param controller The class of the controller
         * @param params The construction params of the controller class
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
         * @param name The registration name of the controller
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
         * @param oldId The old value of the id of the controller
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
         * @returns A unique id for the controller
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
         * @param funcName The name of the live cycle function which should be called
         * @memberof BaseController
         */
        private callLiveCycleFunctionsOfControllers(funcName: controllerLifeCycleFuncNames): void {
            for (const controllerName in this.controllers) {
                if (controllerName in this.controllers) {
                    const controller = this.controllers[controllerName];
                    controller[funcName]();
                }
            }
        }
    }

    return BaseController;
}
