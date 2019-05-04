import { isString, isObject } from 'lodash';
import { Template, renderString } from 'nunjucks';

/**
 * Builds an object similar to element.attributes
 *
 * @param {IndexStructure} definedProperties
 * @returns {ComponentProperties}
 */
function properties(definedProperties: IndexStructure): ComponentProperties {
    const keys = Object.keys(definedProperties);
    const length = keys.length;
    const values = Object.values(definedProperties);
    return { length, keys, values, definedProperties };
}

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
        public static readonly extends: string | null = null;

        /**
         * Holds with a @properties() decorator marked properties with values
         * which will be maintained by this decorator.
         *
         * @static
         * @type {IndexStructure}
         * @memberof BaseComponent
         */
        public static readonly definedProperties: IndexStructure = {};

        /**
         * This is for better identification of base components and instance check
         *
         * @type {boolean}
         */
        public readonly isBaseComponent: boolean = true;

        /**
         * Gives access to the properties similar to element.attributes
         *
         * @type {IndexStructure}
         * @memberof BaseComponent
         */
        public readonly properties: ComponentProperties = properties((<any>this.constructor).definedProperties);

        /**
         * Defines the template of the of the component.
         * Musst have exactly one root node and can be a string or a Template
         * for e.g. require("./path/to/template.njk")
         *
         * @type {(string | Template)}
         * @memberof BaseComponent
         */
        protected readonly templateString: string | Template = '<div><slot></slot></div>';

        /**
         * Contains an object which keys matches the interpolations of the template.
         * This could be used to define a standard style similar to the default
         * style of normal HTMLElements or to define a standard content.
         *
         * @protected
         * @type {IndexStructure}
         * @memberof BaseComponent
         */
        protected templateParams: IndexStructure = {};

        /**
         * Holds the attributes with their values which are defined in DOM so
         * that attributes which are defined in the object are just defaults.
         *
         * @private
         * @type {IndexStructure}
         * @memberof BaseComponent
         */
        private readonly definedAttributes: IndexStructure<string, Attr> = {};

        constructor(..._args: any[]) {
            super();
            for (const attribute of Array.from(this.attributes)) {
                this.definedAttributes[attribute.name] = this.getAttribute(attribute.name);
            }
        }

        /**
         * @inheritdoc
         *
         * @param {string} qualifiedName
         * @param {string} value
         * @returns {void}
         * @memberof BaseComponent
         */
        public setAttribute(qualifiedName: string, value: string): void {
            if (qualifiedName in (<any>this.constructor).definedProperties) {
                throw new Error(`"${qualifiedName}" can't be set as attribute because it is a defined property`);
            }
            (<any>this)[qualifiedName] = value;
            super.setAttribute(qualifiedName, value);
        }

        /**
         * @inheritdoc
         *
         * @param {string} qualifiedName
         * @memberof BaseComponent
         */
        public removeAttribute(qualifiedName: string): void {
            super.removeAttribute(qualifiedName);
            (<any>this)[qualifiedName] = undefined;
        }

        /**
         * Called when a component is connected with the dom and sets predefined
         * attributes which are masked with a _.
         *
         * @protected
         * @memberof BaseComponent
         */
        protected connectedCallback(): void {
            // Render template only if this component doesn't extend a native one
            if ((<any>this.constructor).extends === null) {
                // Attach a shadow root to the element.
                let stringToParse = null;
                if (isString(this.templateString)) {
                    stringToParse = renderString(this.templateString, this.templateParams);
                }
                if (isObject(this.templateString)) {
                    stringToParse = (<Template>this.templateString).render(this.templateParams);
                }
                if (stringToParse) {
                    const shadowRoot = this.attachShadow({ mode: 'open' });
                    const doc = new DOMParser().parseFromString(stringToParse, 'text/html');
                    shadowRoot.appendChild(<ChildNode>doc.body.firstChild);
                }
            }

            // Set attributes defined in DOM
            for (const key in this.definedAttributes) {
                if (this.definedAttributes.hasOwnProperty(key)) {
                    this.setAttribute(key, this.definedAttributes[key]);
                }
            }
        }

        /**
         * Called when a component will be finally removed from the dom.
         * removes all controllers and event listeners.
         *
         * @protected
         * @memberof BaseComponent
         */
        protected disconnectedCallback(): void { }

        /**
         * Called when the component is moved to another document.
         * Rebinds all controllers and event listeners.
         *
         * @protected
         * @memberof BaseComponent
         */
        protected adoptedCallback(): void { }
    }
    return BaseComponent;
}
