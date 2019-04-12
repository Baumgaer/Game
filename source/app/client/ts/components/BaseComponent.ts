import { merge, isString, isObject } from 'lodash';
import { Template, renderString } from 'nunjucks';
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
         * This is just an identifier to determine if a component is a BaseComponent
         *
         * @type {boolean}
         */
        public readonly isBaseComponent: boolean = true;

        /**
         * Defines the template of the of the component.
         * Musst have exactly one root node and can be a string or a Template
         * for e.g. require("./path/to/template.njk")
         *
         * @type {(string | Template)}
         * @memberof BaseComponent
         */
        protected templateString: string | Template = '<div><slot></slot></div>';

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

        constructor(...args: any[]) {
            super();
            merge(this, args[0] || {});
        }

        /**
         * Called when a component is connected with the dom and sets predefined
         * attributes which are masked with a _.
         *
         * @protected
         * @memberof BaseComponent
         */
        protected connectedCallback(): void {
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

            // Map default _properties to native attributes
            for (const key in this) {
                if (this.hasOwnProperty(key) && key.startsWith('_') && !this.getAttribute(key.substr(1))) {
                    this.setAttribute(key.substr(1), String(this[key]));
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
        protected disconnectedCallback(): void {}

        /**
         * Called when the component is moved to another document.
         * Rebinds all controllers and event listeners.
         *
         * @protected
         * @memberof BaseComponent
         */
        protected adoptedCallback(): void {}
    }
    return BaseComponent;
}
