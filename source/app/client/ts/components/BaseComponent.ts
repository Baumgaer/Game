import { merge } from 'lodash';
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

        constructor(...args: any[]) {
            super(args);
            merge(this, args[0] || {});

            // Attach a shadow root to the element.
            this.attachShadow({ mode: 'open' });
            // shadowRoot.appendChild("");
        }

        /**
         * Called when a component is connected with the dom and sets predefined
         * attributes which are masked with a _.
         *
         * @protected
         * @memberof BaseComponent
         */
        protected connectedCallback(): void {
            for (const key in this) {
                if (this.hasOwnProperty(key) && key.startsWith('_')) {
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
