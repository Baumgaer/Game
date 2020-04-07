import 'reflect-metadata';
import { Template, renderString } from 'nunjucks';
import { Properties } from "csstype";
import { property } from '~bdo/utils/decorators';
import { constructTypeOfHTMLAttribute, isPrimitive, isString, isObject, pascalCase2kebabCase } from '~bdo/utils/util';
import { isComponent } from "~bdo/utils/framework";
import { BaseControllerFactory } from "~client/lib/BaseController";

export type Position = "after" | "before" | "replace" | "first" | "last" | number;

/**
 * Creates a new BaseComponent based on the HTMLTypeElement.
 * NOTE: Every component is also a controller.
 *
 * @export
 * @template TBase An interface which is derived from HTMLElement
 * @param {TBase} HTMLTypeElement Derived class from HTMLElement
 * @returns The BaseComponent
 */
export function BaseComponentFactory<TBase extends Constructor<HTMLElement>>(HTMLTypeElement: TBase) {

    /**
     * Provides base functionality for every component, manages and registers
     * them and add some handy functions for navigation and styling.
     *
     * @class BaseComponent
     * @extends {HTMLTypeElement}
     */
    abstract class BaseComponent extends BaseControllerFactory<TBase>(HTMLTypeElement) {

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
         * @see IBaseConstructorCtor.isProceduralComponentConstruction
         *
         * @static
         * @type {boolean}
         * @memberof BaseComponent
         */
        public static isProceduralComponentConstruction: boolean = false;

        /**
         * This is for better identification of base components and instance check
         *
         * @type {boolean}
         * @memberof BaseComponent
         */
        @property() public readonly isBaseComponent: boolean = true;

        /**
         * Defines the template of the component.
         * Must have exactly one root node and can be a string or a Template
         * for e.g. require("./path/to/template.njk") or module syntax.
         *
         * @type {(string | Template)}
         * @memberof BaseComponent
         */
        @property({ disableTypeGuard: true }) protected readonly templateString: string | Template = '<div><slot></slot></div>';

        /**
         * Defines the style of the component.
         * Must not include a style tag, only the rules and can be a string
         * written here or in a file included by require("./path/to/style.less")
         * or module syntax.
         *
         * @protected
         * @type {string}
         * @memberof BaseComponent
         */
        @property({ disableTypeGuard: true }) protected readonly styleString: string = '';

        /**
         * this contains all HTMLElements with a ref attribute to give fast
         * access to this element without conflicting ids.
         *
         * @readonly
         * @type {IndexStructure<string, Element>}
         * @memberof BaseComponent
         */
        public get refs() {
            const refs: IndexStructure<string, Element> = {};
            if (!this.shadowRoot) return refs;
            const refElements = Array.from(this.shadowRoot.querySelectorAll("[ref]"));
            for (const refElement of refElements) {
                const refName = refElement.getAttribute("ref");
                if (!refName) continue;
                if (refName in refs) throw new Error(`ref ${refName} already exists`);
                refs[refName] = refElement;
            }
            return refs;
        }

        /**
         * Returns the parent component (not normal HTMLElement)
         *
         * @readonly
         * @public
         * @returns {(BaseComponent | null)}
         * @memberof BaseComponent
         */
        public get parentComponent(): BaseComponent | null {
            let currentElement: Element = this;
            let parentComponent = null;
            while (!parentComponent) {
                const rootNode = currentElement.getRootNode();
                let parentElement: Element | null = currentElement.parentElement;
                if (!parentElement && rootNode instanceof ShadowRoot) parentElement = rootNode.host;
                if (!parentElement) break;
                if (isComponent<BaseComponent>(parentElement)) {
                    parentComponent = parentElement;
                    break;
                } else currentElement = parentElement;
            }
            return parentComponent;
        }

        /**
         * Returns all child components excluding normal HTMLElements
         *
         * @readonly
         * @type {BaseComponent[]}
         * @memberof BaseComponent
         */
        public get childComponents(): BaseComponent[] {
            const children = Array.from(this.shadowRoot?.children ?? []).concat(Array.from(this.children));
            const childComponents: BaseComponent[] = [];
            for (const child of children) {
                if (isComponent<BaseComponent>(child)) childComponents.push(child);
            }
            return childComponents;
        }

        /**
         * Returns the first child which is a component
         *
         * @readonly
         * @type {(BaseComponent | null)}
         * @memberof BaseComponent
         */
        public get firstComponentChild(): BaseComponent | null {
            const children = Array.from(this.shadowRoot?.children ?? []).concat(Array.from(this.children));
            for (const child of children) {
                if (isComponent<BaseComponent>(child)) return child;
            }
            return null;
        }

        /**
         * Returns the last child which is a component
         *
         * @readonly
         * @type {(BaseComponent | null)}
         * @memberof BaseComponent
         */
        public get lastComponentChild(): BaseComponent | null {
            let currentChild = this.lastElementChild;
            while (currentChild) {
                if (isComponent<BaseComponent>(currentChild)) return currentChild;
                currentChild = currentChild.previousElementSibling;
                if (!currentChild) currentChild = this.shadowRoot?.firstElementChild ?? null;
            }
            return null;
        }

        /**
         * Returns the next sibling which is a component
         *
         * @readonly
         * @type {(BaseComponent | null)}
         * @memberof BaseComponent
         */
        public get nextComponentSibling(): BaseComponent | null {
            let currentElement: Element = this;
            let nextComponentSibling = null;
            while (!nextComponentSibling) {
                const rootNode = currentElement.getRootNode();
                let nextElementSibling = currentElement.nextElementSibling;
                if (!nextElementSibling && rootNode instanceof ShadowRoot) nextElementSibling = rootNode.host.firstElementChild;
                if (!nextElementSibling) break;
                if (isComponent<BaseComponent>(nextElementSibling)) {
                    nextComponentSibling = nextElementSibling;
                    break;
                } else currentElement = nextElementSibling;
            }
            return nextComponentSibling;
        }

        /**
         * Returns the previous sibling which is a component
         *
         * @readonly
         * @type {(BaseComponent | null)}
         * @memberof BaseComponent
         */
        public get previousComponentSibling(): BaseComponent | null {
            let currentElement: Element = this;
            let previousComponentSibling = null;
            while (!previousComponentSibling) {
                const rootNode = currentElement.getRootNode();
                let previousElementSibling = currentElement.previousElementSibling;
                if (!previousElementSibling && rootNode instanceof ShadowRoot) previousElementSibling = this.shadowRoot?.firstElementChild ?? null;
                if (!previousElementSibling) break;
                if (isComponent<BaseComponent>(previousElementSibling)) {
                    previousComponentSibling = previousElementSibling;
                    break;
                } else currentElement = previousElementSibling;
            }
            return previousComponentSibling;
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
         * @inheritdoc SetValue is used by proxyHandler to avoid setting a
         * new value if an object has been changed.
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
         * Sets the style of this component if the first parameter is a css
         * attribute name. Otherwise the style of the given element is set if
         * the first parameter is an Element.
         *
         * @template T
         * @param {T} key
         * @param {Properties[T]} value
         * @memberof BaseComponent
         */
        public setStyle<T extends keyof OneOf<Properties>>(key: T, value: Properties[T]): void;
        public setStyle<T extends keyof OneOf<Properties>>(element: HTMLElement, key: T, value: Properties[T]): void;
        public setStyle(elementOrName: HTMLElement | string, nameOrValue: string, value?: string): void {
            let valueToAssign = null;
            if (!(elementOrName instanceof HTMLElement)) {
                valueToAssign = nameOrValue;
                nameOrValue = elementOrName;
                elementOrName = this;
            } else if (value) valueToAssign = value;
            elementOrName.style.setProperty(nameOrValue, valueToAssign);
        }

        /**
         * Removes the given style attribute from this component if the first
         * parameter is a string and removes the given style attribute of the
         * given element if the first parameter is a HTMLElement.
         *
         * @template T
         * @param {T} name
         * @memberof BaseComponent
         */
        public removeStyle<T extends keyof OneOf<Properties>>(name: T): void;
        public removeStyle<T extends keyof OneOf<Properties>>(element: HTMLElement, name: T): void;
        public removeStyle(elementOrName: HTMLElement | string, name?: keyof OneOf<Properties>): void {
            let styleToRemove = null;
            if (!(elementOrName instanceof HTMLElement)) {
                styleToRemove = elementOrName;
                elementOrName = this;
            } else if (name) styleToRemove = name;
            if (!styleToRemove) throw new Error("Property name must be provided!");
            elementOrName.style.removeProperty(styleToRemove);
        }

        /**
         * returns the current value of the given style property name of a
         * reference node. If only one parameter is given, this component will
         * be the reference node.
         *
         * @template T
         * @param {T} name
         * @returns {Properties[T]}
         * @memberof BaseComponent
         */
        public getStyle<T extends keyof OneOf<Properties>>(name: T): Properties[T];
        public getStyle<T extends keyof OneOf<Properties>>(element: HTMLElement, name: T): Properties[T];
        public getStyle<T extends keyof OneOf<Properties>>(elementOrName: HTMLElement | T, name?: T): Properties[T] {
            let propToGet = null;
            if (!(elementOrName instanceof HTMLElement)) {
                propToGet = elementOrName;
                elementOrName = this;
            } else if (name) propToGet = name;
            if (!propToGet) throw new Error("Property name must be provided!");
            return elementOrName.style.getPropertyValue(propToGet) as Properties[T];
        }

        /**
         * Adds a CSS class name to the given element. If no element is given,
         * this component will be the target element.
         *
         * @param {string} name
         * @memberof BaseComponent
         */
        public addClass(name: string): void;
        public addClass(element: HTMLElement, name: string): void;
        public addClass(elementOrName: HTMLElement | string, name?: string): void {
            let classToAdd = null;
            if (!(elementOrName instanceof HTMLElement)) {
                classToAdd = elementOrName;
                elementOrName = this;
            } else if (name) classToAdd = name;
            if (!classToAdd) throw new Error("Class name must be provided!");
            elementOrName.classList.add(classToAdd);
        }

        /**
         * Removes a CSS class name from the given element. If no element is
         * given, this component will be the target element.
         *
         * @param {string} name
         * @memberof BaseComponent
         */
        public removeClass(name: string): void;
        public removeClass(element: HTMLElement, name: string): void;
        public removeClass(elementOrName: HTMLElement | string, name?: string): void {
            let classToRemove = null;
            if (!(elementOrName instanceof HTMLElement)) {
                classToRemove = elementOrName;
                elementOrName = this;
            } else if (name) classToRemove = name;
            if (!classToRemove) throw new Error("Class name must be provided!");
            elementOrName.classList.remove(classToRemove);
        }

        /**
         * Places an element at a specific position relative to a reference
         * node or replaces the reference node. If only two arguments are given,
         * this component will be the new node and the given node as first
         * element is the reference node.
         *
         * @param {HTMLElement} newNode
         * @param {Position} position
         * @memberof BaseComponent
         */
        public placeAt(newNode: HTMLElement, position: Position): void;
        public placeAt(refNode: HTMLElement, newNode: HTMLElement, position: Position): void;
        public placeAt(refNode: HTMLElement, newNode: HTMLElement | Position, position?: Position): void {
            let thisRefNode: Element = refNode;
            let thisNewNode: Element = newNode as HTMLElement;
            let thisPosition = position;
            if (!(newNode instanceof Element)) {
                thisPosition = newNode;
                thisRefNode = refNode;
                thisNewNode = this;
            }
            if (!thisPosition) thisPosition = "last";
            if (typeof thisPosition === "number") {
                const children = Array.from(thisRefNode.children);
                if (children.length <= thisPosition) {
                    thisPosition = "last";
                } else if (thisPosition <= 0) {
                    thisPosition = "first";
                } else {
                    thisRefNode = children[thisPosition + 1];
                    thisPosition = "before";
                }
            }
            if (thisPosition === "after") {
                if (thisRefNode.nextElementSibling) {
                    thisRefNode = thisRefNode.nextElementSibling;
                    thisPosition = "before";
                } else {
                    thisRefNode = thisRefNode.parentElement!;
                    position = "last";
                }
            }
            if (thisPosition === "first") thisRefNode.prepend(thisNewNode);
            if (thisPosition === "last") thisRefNode.appendChild(thisNewNode);
            if (thisPosition === "replace") thisRefNode.replaceWith(thisNewNode);
            if (thisPosition === "before") thisRefNode.parentElement!.insertBefore(thisNewNode, thisRefNode);
        }

        /**
         * 0. This is called by the BaseConstructor as a part of the "live cycle"
         *
         * @see IBaseConstructorCtor.renderTemplate
         *
         * @protected
         * @memberof BaseComponent
         */
        protected renderTemplate() {
            // Render template only if this component doesn't extend a native one
            if (!(<any>this.constructor).extends) {
                // Attach a shadow root to the element.
                let stringToParse = null;
                if (isString(this.templateString)) stringToParse = renderString(this.templateString, this.toJSON());
                if (isObject(this.templateString)) stringToParse = (<Template>this.templateString).render(this.toJSON());
                if (stringToParse) {
                    const shadowRoot = this.attachShadow({ mode: 'open' });
                    const doc = new DOMParser().parseFromString(`<style>${this.styleString}</style>${stringToParse}`, 'text/html');
                    shadowRoot.appendChild(doc.head.firstChild!);
                    shadowRoot.appendChild(doc.body.firstChild!);
                }
            }
        }
    }

    return BaseComponent;
}
