"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const nunjucks_1 = require("nunjucks");
const decorators_1 = require("~bdo/utils/decorators");
const metadata_1 = require("~bdo/utils/metadata");
const util_1 = require("~client/utils/util");
const util_2 = require("~bdo/utils/util");
const framework_1 = require("~bdo/utils/framework");
function BaseComponentFactory(HTMLTypeElement) {
    class BaseComponent extends HTMLTypeElement {
        constructor(...args) {
            super(...args);
            this.id = this.generateUniqueID();
            this.isBaseComponent = true;
            this.className = Object.getPrototypeOf(this.constructor).name;
            this.templateString = '<div><slot></slot></div>';
        }
        get properties() {
            const props = new Map();
            const properties = metadata_1.getMetadata(this, "definedProperties");
            if (properties) {
                for (const prop of properties.keys()) {
                    props.set(prop, metadata_1.getWildcardMetadata(this, prop));
                }
            }
            return props;
        }
        get refs() {
            const refs = {};
            if (!this.shadowRoot)
                return refs;
            const refElements = Array.from(this.shadowRoot.querySelectorAll("[ref]"));
            for (const refElement of refElements) {
                const refName = refElement.getAttribute("ref");
                if (!refName)
                    continue;
                if (refName in refs)
                    throw new Error(`ref ${refName} already exists`);
                refs[refName] = refElement;
            }
            return refs;
        }
        get parentComponent() {
            let currentElement = this;
            let parentComponent = null;
            while (!parentComponent) {
                const rootNode = currentElement.getRootNode();
                let parentElement = currentElement.parentElement;
                if (!parentElement && rootNode instanceof ShadowRoot)
                    parentElement = rootNode.host;
                if (!parentElement)
                    break;
                if (framework_1.isComponent(parentElement)) {
                    parentComponent = parentElement;
                    break;
                }
                else
                    currentElement = parentElement;
            }
            return parentComponent;
        }
        get childComponents() {
            const children = Array.from(this.shadowRoot?.children ?? []).concat(Array.from(this.children));
            const childComponents = [];
            for (const child of children) {
                if (framework_1.isComponent(child))
                    childComponents.push(child);
            }
            return childComponents;
        }
        get firstComponentChild() {
            const children = Array.from(this.shadowRoot?.children ?? []).concat(Array.from(this.children));
            for (const child of children) {
                if (framework_1.isComponent(child))
                    return child;
            }
            return null;
        }
        get lastComponentChild() {
            let currentChild = this.lastElementChild;
            while (currentChild) {
                if (framework_1.isComponent(currentChild))
                    return currentChild;
                currentChild = currentChild.previousElementSibling;
                if (!currentChild)
                    currentChild = this.shadowRoot?.firstElementChild ?? null;
            }
            return null;
        }
        get nextComponentSibling() {
            let currentElement = this;
            let nextComponentSibling = null;
            while (!nextComponentSibling) {
                const rootNode = currentElement.getRootNode();
                let nextElementSibling = currentElement.nextElementSibling;
                if (!nextElementSibling && rootNode instanceof ShadowRoot)
                    nextElementSibling = rootNode.host.firstElementChild;
                if (!nextElementSibling)
                    break;
                if (framework_1.isComponent(nextElementSibling)) {
                    nextComponentSibling = nextElementSibling;
                    break;
                }
                else
                    currentElement = nextElementSibling;
            }
            return nextComponentSibling;
        }
        get previousComponentSibling() {
            let currentElement = this;
            let previousComponentSibling = null;
            while (!previousComponentSibling) {
                const rootNode = currentElement.getRootNode();
                let previousElementSibling = currentElement.previousElementSibling;
                if (!previousElementSibling && rootNode instanceof ShadowRoot)
                    previousElementSibling = this.shadowRoot?.firstElementChild ?? null;
                if (!previousElementSibling)
                    break;
                if (framework_1.isComponent(previousElementSibling)) {
                    previousComponentSibling = previousElementSibling;
                    break;
                }
                else
                    currentElement = previousElementSibling;
            }
            return previousComponentSibling;
        }
        get bindings() {
            const bindings = metadata_1.getMetadata(this, "initiatorBinding");
            return bindings ? bindings : new Map();
        }
        static create(params) {
            const that = this;
            const className = util_2.pascalCase2kebabCase(Object.getPrototypeOf(this).name);
            let is = that.extends;
            let tagName = className;
            if (is) {
                tagName = is;
                is = className;
            }
            that.isProceduralComponentConstruction = true;
            const element = document.createElement(tagName, { is });
            that.isProceduralComponentConstruction = false;
            element.invokeLifeCycle(params);
            if (is)
                element.setAttribute("is", is, true);
            return element;
        }
        invokeLifeCycle(_ConstParams) {
            throw new Error("This is not a BaseConstructor");
        }
        getNamespacedStorage(key, nsProp, forceNS) {
            return util_1.getNamespacedStorage(this, key, nsProp, forceNS);
        }
        setUpdateNamespacedStorage(key, newVal, nsProp) {
            return util_1.setUpdateNamespacedStorage(this, key, newVal, nsProp);
        }
        deleteFromNamespacedStorage(key, nsProp) {
            return util_1.deleteFromNamespacedStorage(this, key, nsProp);
        }
        setAttribute(qualifiedName, value, setValue = true) {
            if (this.properties && this.properties.has(qualifiedName)) {
                throw new Error(`"${qualifiedName}" can't be set as attribute because it is a defined property`);
            }
            if (value) {
                let valueToSet = value;
                if (!util_2.isPrimitive(value))
                    valueToSet = JSON.stringify(value).replace(/\"/g, "'");
                super.setAttribute(qualifiedName, valueToSet);
                valueToSet = util_2.constructTypeOfHTMLAttribute(this, qualifiedName);
                if (setValue)
                    this[qualifiedName] = valueToSet;
            }
            else
                this.removeAttribute(qualifiedName);
        }
        removeAttribute(qualifiedName) {
            if (this.properties && this.properties.has(qualifiedName)) {
                throw new Error(`"${qualifiedName}" can't be removed as attribute because it is a defined property`);
            }
            super.removeAttribute(qualifiedName);
            this[qualifiedName] = undefined;
        }
        toJSON() {
            const data = {};
            for (const key in this) {
                if (this[key] !== undefined) {
                    const element = this[key];
                    data[key] = element;
                }
            }
            return data;
        }
        renderTemplate() {
            if (!this.constructor.extends) {
                let stringToParse = null;
                if (util_2.isString(this.templateString))
                    stringToParse = nunjucks_1.renderString(this.templateString, this.toJSON());
                if (util_2.isObject(this.templateString))
                    stringToParse = this.templateString.render(this.toJSON());
                if (stringToParse) {
                    const shadowRoot = this.attachShadow({ mode: 'open' });
                    const doc = new DOMParser().parseFromString(stringToParse, 'text/html');
                    shadowRoot.appendChild(doc.body.firstChild);
                }
            }
        }
        constructedCallback() { }
        connectedCallback() { }
        disconnectedCallback() { }
        adoptedCallback() { }
        addController() { }
        removeController() { }
        generateUniqueID() {
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
    BaseComponent.isBaseComponent = true;
    BaseComponent.isProceduralComponentConstruction = false;
    tslib_1.__decorate([
        decorators_1.attribute(),
        tslib_1.__metadata("design:type", String)
    ], BaseComponent.prototype, "id", void 0);
    tslib_1.__decorate([
        decorators_1.property(),
        tslib_1.__metadata("design:type", Boolean)
    ], BaseComponent.prototype, "isBaseComponent", void 0);
    tslib_1.__decorate([
        decorators_1.property(),
        tslib_1.__metadata("design:type", String)
    ], BaseComponent.prototype, "className", void 0);
    tslib_1.__decorate([
        decorators_1.property({ disableTypeGuard: true }),
        tslib_1.__metadata("design:type", Object)
    ], BaseComponent.prototype, "templateString", void 0);
    return BaseComponent;
}
exports.BaseComponentFactory = BaseComponentFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9CYXNlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRCQUEwQjtBQUMxQix1Q0FBa0Q7QUFDbEQsc0RBQTREO0FBQzVELGtEQUF1RTtBQUd2RSw2Q0FBbUg7QUFDbkgsMENBQXNIO0FBQ3RILG9EQUFtRDtBQVVuRCxTQUFnQixvQkFBb0IsQ0FBeUMsZUFBc0I7SUFRL0YsTUFBZSxhQUFjLFNBQVEsZUFBZTtRQXdRaEQsWUFBWSxHQUFHLElBQVc7WUFDdEIsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUE3TEMsT0FBRSxHQUFXLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBUTdCLG9CQUFlLEdBQVksSUFBSSxDQUFDO1lBU2hDLGNBQVMsR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFVcEMsbUJBQWMsR0FBc0IsMEJBQTBCLENBQUM7UUFtS3hILENBQUM7UUFwT0QsSUFBVyxVQUFVO1lBQ2pCLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7WUFDeEIsTUFBTSxVQUFVLEdBQUcsc0JBQVcsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztZQUMxRCxJQUFJLFVBQVUsRUFBRTtnQkFDWixLQUFLLE1BQU0sSUFBSSxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDbEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsOEJBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ3BEO2FBQ0o7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBVUQsSUFBVyxJQUFJO1lBQ1gsTUFBTSxJQUFJLEdBQXdDLEVBQUUsQ0FBQztZQUNy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