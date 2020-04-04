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
            this.styleString = '';
        }
        get properties() {
            const props = new Map();
            const properties = metadata_1.getMetadata(this, "definedProperties");
            if (properties) {
                for (const prop of properties.keys()) {
                    props.set(prop.toString(), metadata_1.getWildcardMetadata(this, prop));
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
        setStyle(elementOrName, nameOrValue, value) {
            let valueToAssign = null;
            if (!(elementOrName instanceof HTMLElement)) {
                valueToAssign = nameOrValue;
                nameOrValue = elementOrName;
                elementOrName = this;
            }
            else if (value)
                valueToAssign = value;
            elementOrName.style.setProperty(nameOrValue, valueToAssign);
        }
        removeStyle(elementOrName, name) {
            let styleToRemove = null;
            if (!(elementOrName instanceof HTMLElement)) {
                styleToRemove = elementOrName;
                elementOrName = this;
            }
            else if (name)
                styleToRemove = name;
            if (styleToRemove)
                elementOrName.style.removeProperty(styleToRemove);
        }
        place(refNode, newNode, position) {
            let thisRefNode = refNode;
            let thisNewNode = newNode;
            let thisPosition = position;
            if (!(newNode instanceof Element)) {
                thisPosition = newNode;
                thisRefNode = refNode;
                thisNewNode = this;
            }
            if (!thisPosition)
                thisPosition = "last";
            if (typeof thisPosition === "number") {
                const children = Array.from(thisRefNode.children);
                if (children.length <= thisPosition) {
                    thisPosition = "last";
                }
                else if (thisPosition <= 0) {
                    thisPosition = "first";
                }
                else {
                    thisRefNode = children[thisPosition + 1];
                    thisPosition = "before";
                }
            }
            if (thisPosition === "after") {
                if (thisRefNode.nextElementSibling) {
                    thisRefNode = thisRefNode.nextElementSibling;
                    thisPosition = "before";
                }
                else {
                    thisRefNode = thisRefNode.parentElement;
                    position = "last";
                }
            }
            if (thisPosition === "first")
                thisRefNode.prepend(thisNewNode);
            if (thisPosition === "last")
                thisRefNode.appendChild(thisNewNode);
            if (thisPosition === "replace")
                thisRefNode.replaceWith(thisNewNode);
            if (thisPosition === "before")
                thisRefNode.parentElement.insertBefore(thisNewNode, thisRefNode);
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
                    const doc = new DOMParser().parseFromString(`<style>${this.styleString}</style>${stringToParse}`, 'text/html');
                    shadowRoot.appendChild(doc.head.firstChild);
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
    tslib_1.__decorate([
        decorators_1.property({ disableTypeGuard: true }),
        tslib_1.__metadata("design:type", String)
    ], BaseComponent.prototype, "styleString", void 0);
    return BaseComponent;
}
exports.BaseComponentFactory = BaseComponentFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9CYXNlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRCQUEwQjtBQUMxQix1Q0FBa0Q7QUFFbEQsc0RBQTREO0FBQzVELGtEQUF1RTtBQUd2RSw2Q0FBbUg7QUFDbkgsMENBQXNIO0FBQ3RILG9EQUFtRDtBQVluRCxTQUFnQixvQkFBb0IsQ0FBeUMsZUFBc0I7SUFRL0YsTUFBZSxhQUFjLFNBQVEsZUFBZTtRQW9SaEQsWUFBWSxHQUFHLElBQVc7WUFDdEIsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUF6TUMsT0FBRSxHQUFXLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBUTdCLG9CQUFlLEdBQVksSUFBSSxDQUFDO1lBU2hDLGNBQVMsR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFVcEMsbUJBQWMsR0FBc0IsMEJBQTBCLENBQUM7WUFZL0QsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFtS2xGLENBQUM7UUFoUEQsSUFBVyxVQUFVO1lBQ2pCLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxFQUEwQixDQUFDO1lBQ2hELE1BQU0sVUFBVSxHQUFHLHNCQUFXLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDLENBQUM7WUFDMUQsSUFBSSxVQUFVLEVBQUU7Z0JBQ1osS0FBSyxNQUFNLElBQUksSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQ2xDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLDhCQUFtQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUMvRDthQUNKO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQVVELElB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