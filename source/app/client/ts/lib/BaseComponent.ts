import 'reflect-metadata';
import { Template, renderString } from 'nunjucks';
import { property, attribute } from '~bdo/utils/decorators';
import { getMetadata, getWildcardMetadata } from "~bdo/utils/metadata";
import { Binding } from "~bdo/lib/Binding";
import { Property } from "~bdo/lib/Property";
import { getNamespacedStorage, setUpdateNamespacedStorage, deleteFromNamespacedStorage } from "~client/utils/util";
import { constructTypeOfHTMLAttribute, isPrimitive, isString, isObject, pascalCase2kebabCase } from '~bdo/utils/util';

/**
 * Creates a new BaseComponent based on the HTMLTypeElement
 *
 * @export
 * @template TBase An interface which is derived from HTMLElement
 * @param {TBase} HTMLTypeElement Derived class from HTMLElement
 * @returns The BaseComponent
 */
export function BaseComponentFactory<TBase extends Constructor<HTMLElement>>(HTMLTypeElement: TBase) {

    /**
     * Provides pase functionality for every component, manages and registers them
     *
     * @class BaseComponent
     * @extends {HTMLTypeElement}
     */
    abstract class BaseComponent extends HTMLTypeElement {

        /**
         * Determines wether this component extends a native element which
         * could not be defined as a custom element in a direct way like the
         * HTMLAnchorElement.
         *
         * @static
         * @type {(string | null)}
         * @memberof BaseComponent
         */
        public static readonly extends?: string;

        /**
         * The static version of the base component identifier
         *
         * @static
         * @type {boolean}
         * @memberof BaseComponent
         */
        public static readonly isBaseComponent: boolean = true;

        /**
         * @see BaseConstructor.isProceduralComponentConstruction
         *
         * @static
         * @type {boolean}
         * @memberof BaseComponent
         */
        public static isProceduralComponentConstruction: boolean = false;

        /**
         * Gives access to the properties similar to element.attributes
         *
         * @readonly
         * @memberof BaseComponent
         */
        public get properties(): Map<string, Property<this>> {
            const props = new Map();
            const properties = getMetadata(this, "definedProperties");
            if (properties) {
                for (const prop of properties.keys()) {
                    props.set(prop, getWildcardMetadata(this, prop));
                }
            }
            return props;
        }

        /**
         * To ensure that every component has a unique ID attribute
         *
         * @type {string}
         * @memberof BaseComponent
         */
        @attribute() public id: string = this.generateUniqueID();

        /**
         * this contains all HTMLElements with a ref attribute to give fast
         * access to this element without conflicting ids.
         *
         * @type {IndexStructure<string, HTMLElement>}
         * @memberof BaseComponent
         */
        @property() public refs: IndexStructure<string, HTMLElement> = {};

        /**
         * This is for better identification of base components and instance check
         *
         * @type {boolean}
         * @memberof BaseComponent
         */
        @property() public readonly isBaseComponent: boolean = true;

        /**
         * Represents the constructors name.
         *
         * @protected
         * @type {string}
         * @memberof BDOModel
         */
        @property() public readonly className: string = Object.getPrototypeOf(this.constructor).name;

        /**
         * Defines the template of the of the component.
         * Must have exactly one root node and can be a string or a Template
         * for e.g. require("./path/to/template.njk")
         *
         * @type {(string | Template)}
         * @memberof BaseComponent
         */
        @property({ disableTypeGuard: true }) protected readonly templateString: string | Template = '<div><slot></slot></div>';

        /**
         * Holds a list of all bindings to all models
         *
         * @readonly
         * @protected
         * @type {Map<string, Binding<this, DefNonFuncPropNames<this>>>}
         * @memberof BaseComponent
         */
        protected get bindings(): Map<string, Binding<this, DefNonFuncPropNames<this>>> {
            const bindings = getMetadata(this, "initiatorBinding");
            return bindings ? bindings : new Map();
        }

        /**
         * Provides the possibility to construct a component programmatically
         * with respecting default settings.
         *
         * @static
         * @template T
         * @param {new () => T} this
         * @param {ConstParams<T>} [params]
         * @returns
         * @memberof BaseComponent
         */
        public static create<T extends BaseComponent>(this: Constructor<T>, params?: ConstParams<T>) {
            const that = this as unknown as typeof BaseComponent;
            const className = pascalCase2kebabCase(Object.getPrototypeOf(this).name);
            let is = that.extends;
            let tagName = className;
            if (is) {
                tagName = is;
                is = className;
            }
            that.isProceduralComponentConstruction = true;
            const element = document.createElement(tagName, { is }) as unknown as BaseComponent;
            that.isProceduralComponentConstruction = false;
            element.invokeLifeCycle(params);
            if (is) element.setAttribute("is", is, true);
            return element;
        }

        constructor(...args: any[]) {
            super(...args);
        }

        /**
         * Assigns all const params to the current instance and initializes the life cycle
         *
         * @template T
         * @param {Constructor<T>} this
         * @param {ConstParams<T>} ConstParams
         * @memberof BaseComponent
         */
        public invokeLifeCycle<T extends BaseComponent>(_ConstParams?: ConstParams<T>) {
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
         * @inheritdoc SetValue is used by proxyHandler to avoid setting a
         * new value is an object has been changed.
         *
         * @param {string} qualifiedName
         * @param {string} value
         * @returns {void}
         * @memberof BaseComponent
         */
        public setAttribute(qualifiedName: string, value: string, setValue: boolean = true): void {
            if (this.properties && this.properties.has(qualifiedName)) {
                throw new Error(`"${qualifiedName}" can't be set as attribute because it is a defined property`);
            }
            if (value) {
                let valueToSet = value;
                if (!isPrimitive(value)) valueToSet = JSON.stringify(value).replace(/\"/g, "'");
                super.setAttribute(qualifiedName, valueToSet);
                valueToSet = constructTypeOfHTMLAttribute(this, qualifiedName);
                if (setValue) (<any>this)[qualifiedName] = valueToSet;
            } else this.removeAttribute(qualifiedName);
        }

        /**
         * @inheritdoc
         *
         * @param {string} qualifiedName
         * @memberof BaseComponent
         */
        public removeAttribute(qualifiedName: string): void {
            if (this.properties && this.properties.has(qualifiedName)) {
                throw new Error(`"${qualifiedName}" can't be removed as attribute because it is a defined property`);
            }
            super.removeAttribute(qualifiedName);
            (<any>this)[qualifiedName] = undefined;
        }

        /**
         * Converts the current instance of this to a json with properties only
         * NOTE: This will be used by JSON.stringify() to make a string out of this
         *       instance.
         *
         * @returns
         * @memberof BaseComponent
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
         * their corresponding properties / attributes. Also sets predefined
         * attributes from the dom.
         *
         * @protected
         * @param {...any[]} _args Same parameters like the constructor
         * @memberof BaseComponent
         */
        protected constructedCallback(..._args: any[]) {
            // Render template only if this component doesn't extend a native one
            if (!(<any>this.constructor).extends) {
                // Attach a shadow root to the element.
                let stringToParse = null;
                if (isString(this.templateString)) stringToParse = renderString(this.templateString, this.toJSON());
                if (isObject(this.templateString)) stringToParse = (<Template>this.templateString).render(this.toJSON());
                if (stringToParse) {
                    const shadowRoot = this.attachShadow({ mode: 'open' });
                    const doc = new DOMParser().parseFromString(stringToParse, 'text/html');
                    const refs = Array.from(doc.querySelectorAll("[ref]"));
                    for (const ref of refs) {
                        const refName = ref.getAttribute("ref");
                        if (!refName) continue;
                        if (refName in this.refs) throw new Error(`ref ${refName} already exists`);
                        this.refs[refName] = ref;
                    }
                    shadowRoot.appendChild(<ChildNode>doc.body.firstChild);
                }
            }
        }

        /**
         * 2. Called when a component is connected with the dom.
         *
         * @protected
         * @memberof BaseComponent
         */
        protected connectedCallback(): void { }

        /**
         * 3. Called when a component will be finally removed from the dom.
         * removes all controllers and event listeners.
         *
         * @protected
         * @memberof BaseComponent
         */
        protected disconnectedCallback(): void { }

        /**
         * 4. Called when the component is moved to another document.
         * Rebinds all controllers and event listeners.
         *
         * @protected
         * @memberof BaseComponent
         */
        protected adoptedCallback(): void { }

        /**
         * Initializes the given controller and returns its instance
         *
         * @protected
         * @memberof BaseComponent
         */
        protected addController(): void { }

        /**
         * Removes the given controller
         *
         * @protected
         * @memberof BaseComponent
         */
        protected removeController(): void { }

        /**
         * Generates a unique ID for each webcomponent based on class name and occurrence position.
         *
         * @private
         * @returns
         * @memberof BaseComponent
         */
        private generateUniqueID() {
            const className = Object.getPrototypeOf(this.constructor).name;
            const occurrences = Array.from(document.getElementsByTagName(this.tagName));
            const index = occurrences.indexOf(this);
            let occurrence = index >= 0 ? index : occurrences.length;
            while (document.getElementById(`${className}_${occurrence}`)) {
                occurrence++;
            }
            return `${className}_${occurrence}`;
        }
    }

    return BaseComponent;
}
