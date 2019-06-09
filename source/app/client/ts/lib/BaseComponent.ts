import 'reflect-metadata';
import { isString, isObject } from 'lodash';
import { Template, renderString } from 'nunjucks';
import { BDOModel } from '~bdo/lib/BDOModel';
import { property } from '~client/utils/decorators';

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
         * Gives access to the properties similar to element.attributes
         *
         * @type {Map<string, any>}
         * @memberof BaseComponent
         */
        get properties() {
            const props = new Map<string, any>();
            const properties: string[] = Reflect.getMetadata("definedProperties", this);
            for (const prop of properties) {
                props.set(prop, (<IndexStructure>this)[prop]);
            }
            return props;
        }

        /**
         * This is for better identification of base components and instance check
         *
         * @type {boolean}
         */
        @property() public readonly isBaseComponent?: boolean = true;

        /**
         * Model which should be used by this Component
         *
         * @type {(BDOBaseModel | null)}
         * @memberof BaseComponent
         */
        @property() public model?: BDOModel;

        /**
         * Defines the template of the of the component.
         * Musst have exactly one root node and can be a string or a Template
         * for e.g. require("./path/to/template.njk")
         *
         * @type {(string | Template)}
         * @memberof BaseComponent
         */
        @property() protected readonly templateString: string | Template = '<div><slot></slot></div>';

        /**
         * Contains an object which keys matches the interpolations of the template.
         * This could be used to define a standard style similar to the default
         * style of normal HTMLElements or to define a standard content.
         *
         * @protected
         * @type {IndexStructure}
         * @memberof BaseComponent
         */
        @property() protected templateParams: IndexStructure = {};

        /**
         * Holds a list of all bindings to all models
         *
         * @protected
         * @type {Binding[]}
         * @memberof BDOModel
         */
        @property() protected get bindings() {
            const bindings = Reflect.getMetadata("bindings", this);
            return bindings ? bindings : {};
        }

        constructor(...args: any[]) {
            super(...args);
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
            if (this.properties && this.properties.has(qualifiedName)) {
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
            if (this.properties && this.properties.has(qualifiedName)) {
                throw new Error(`"${qualifiedName}" can't be removed as attribute because it is a defined property`);
            }
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
            if (!(<any>this.constructor).extends) {
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
