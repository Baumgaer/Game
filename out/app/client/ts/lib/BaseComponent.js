"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const nunjucks_1 = require("nunjucks");
const decorators_1 = require("~bdo/utils/decorators");
const metadata_1 = require("~bdo/utils/metadata");
const util_1 = require("~client/utils/util");
const util_2 = require("~bdo/utils/util");
function BaseComponentFactory(HTMLTypeElement) {
    class BaseComponent extends HTMLTypeElement {
        constructor(...args) {
            super(...args);
            this.id = this.generateUniqueID();
            this.refs = {};
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
        constructedCallback(..._args) {
            if (!this.constructor.extends) {
                let stringToParse = null;
                if (util_2.isString(this.templateString))
                    stringToParse = nunjucks_1.renderString(this.templateString, this.toJSON());
                if (util_2.isObject(this.templateString))
                    stringToParse = this.templateString.render(this.toJSON());
                if (stringToParse) {
                    const shadowRoot = this.attachShadow({ mode: 'open' });
                    const doc = new DOMParser().parseFromString(stringToParse, 'text/html');
                    const refs = Array.from(doc.querySelectorAll("[ref]"));
                    for (const ref of refs) {
                        const refName = ref.getAttribute("ref");
                        if (!refName)
                            continue;
                        if (refName in this.refs)
                            throw new Error(`ref ${refName} already exists`);
                        this.refs[refName] = ref;
                    }
                    shadowRoot.appendChild(doc.body.firstChild);
                }
            }
        }
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
        tslib_1.__metadata("design:type", Object)
    ], BaseComponent.prototype, "refs", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9CYXNlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRCQUEwQjtBQUMxQix1Q0FBa0Q7QUFDbEQsc0RBQTREO0FBQzVELGtEQUF1RTtBQUd2RSw2Q0FBbUg7QUFDbkgsMENBQXNIO0FBVXRILFNBQWdCLG9CQUFvQixDQUF5QyxlQUFzQjtJQVEvRixNQUFlLGFBQWMsU0FBUSxlQUFlO1FBcUloRCxZQUFZLEdBQUcsSUFBVztZQUN0QixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQWhGQyxPQUFFLEdBQVcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFTdEMsU0FBSSxHQUF3QyxFQUFFLENBQUM7WUFRdEMsb0JBQWUsR0FBWSxJQUFJLENBQUM7WUFTaEMsY0FBUyxHQUFXLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQVVwQyxtQkFBYyxHQUFzQiwwQkFBMEIsQ0FBQztRQTZDeEgsQ0FBQztRQWxHRCxJQUFXLFVBQVU7WUFDakIsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUN4QixNQUFNLFVBQVUsR0FBRyxzQkFBVyxDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1lBQzFELElBQUksVUFBVSxFQUFFO2dCQUNaLEtBQUssTUFBTSxJQUFJLElBQUksVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFO29CQUNsQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSw4QkFBbUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDcEQ7YUFDSjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFzREQsSUFBYyxRQUFRO1lBQ2xCLE1BQU0sUUFBUSxHQUFH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