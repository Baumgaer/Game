(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lib"],{

/***/ "./source/app/client/ts/lib/BaseComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponentFactory", function() { return BaseComponentFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nunjucks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/nunjucks/browser/nunjucks.js");
/* harmony import */ var nunjucks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nunjucks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./source/app/utils/decorators.ts");
/* harmony import */ var _bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./source/app/utils/metadata.ts");
/* harmony import */ var _bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _client_utils_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./source/app/client/ts/utils/util.ts");
/* harmony import */ var _client_utils_util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_client_utils_util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bdo_utils_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./source/app/utils/util.ts");
/* harmony import */ var _bdo_utils_util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _bdo_utils_framework__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./source/app/utils/framework.ts");
/* harmony import */ var _bdo_utils_framework__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_bdo_utils_framework__WEBPACK_IMPORTED_MODULE_7__);








function BaseComponentFactory(HTMLTypeElement) {
  var _a;

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
      const properties = Object(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_4__["getMetadata"])(this, "definedProperties");

      if (properties) {
        for (const prop of properties.keys()) {
          props.set(prop.toString(), Object(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_4__["getWildcardMetadata"])(this, prop));
        }
      }

      return props;
    }

    get refs() {
      const refs = {};
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

    get parentComponent() {
      let currentElement = this;
      let parentComponent = null;

      while (!parentComponent) {
        const rootNode = currentElement.getRootNode();
        let parentElement = currentElement.parentElement;
        if (!parentElement && rootNode instanceof ShadowRoot) parentElement = rootNode.host;
        if (!parentElement) break;

        if (Object(_bdo_utils_framework__WEBPACK_IMPORTED_MODULE_7__["isComponent"])(parentElement)) {
          parentComponent = parentElement;
          break;
        } else currentElement = parentElement;
      }

      return parentComponent;
    }

    get childComponents() {
      var _a, _b;

      const children = Array.from((_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : []).concat(Array.from(this.children));
      const childComponents = [];

      for (const child of children) {
        if (Object(_bdo_utils_framework__WEBPACK_IMPORTED_MODULE_7__["isComponent"])(child)) childComponents.push(child);
      }

      return childComponents;
    }

    get firstComponentChild() {
      var _a, _b;

      const children = Array.from((_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : []).concat(Array.from(this.children));

      for (const child of children) {
        if (Object(_bdo_utils_framework__WEBPACK_IMPORTED_MODULE_7__["isComponent"])(child)) return child;
      }

      return null;
    }

    get lastComponentChild() {
      var _a, _b;

      let currentChild = this.lastElementChild;

      while (currentChild) {
        if (Object(_bdo_utils_framework__WEBPACK_IMPORTED_MODULE_7__["isComponent"])(currentChild)) return currentChild;
        currentChild = currentChild.previousElementSibling;
        if (!currentChild) currentChild = (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.firstElementChild) !== null && _b !== void 0 ? _b : null;
      }

      return null;
    }

    get nextComponentSibling() {
      let currentElement = this;
      let nextComponentSibling = null;

      while (!nextComponentSibling) {
        const rootNode = currentElement.getRootNode();
        let nextElementSibling = currentElement.nextElementSibling;
        if (!nextElementSibling && rootNode instanceof ShadowRoot) nextElementSibling = rootNode.host.firstElementChild;
        if (!nextElementSibling) break;

        if (Object(_bdo_utils_framework__WEBPACK_IMPORTED_MODULE_7__["isComponent"])(nextElementSibling)) {
          nextComponentSibling = nextElementSibling;
          break;
        } else currentElement = nextElementSibling;
      }

      return nextComponentSibling;
    }

    get previousComponentSibling() {
      var _a, _b;

      let currentElement = this;
      let previousComponentSibling = null;

      while (!previousComponentSibling) {
        const rootNode = currentElement.getRootNode();
        let previousElementSibling = currentElement.previousElementSibling;
        if (!previousElementSibling && rootNode instanceof ShadowRoot) previousElementSibling = (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.firstElementChild) !== null && _b !== void 0 ? _b : null;
        if (!previousElementSibling) break;

        if (Object(_bdo_utils_framework__WEBPACK_IMPORTED_MODULE_7__["isComponent"])(previousElementSibling)) {
          previousComponentSibling = previousElementSibling;
          break;
        } else currentElement = previousElementSibling;
      }

      return previousComponentSibling;
    }

    get bindings() {
      const bindings = Object(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_4__["getMetadata"])(this, "initiatorBinding");
      return bindings ? bindings : new Map();
    }

    static create(params) {
      const that = this;
      const className = Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_6__["pascalCase2kebabCase"])(Object.getPrototypeOf(this).name);
      let is = that.extends;
      let tagName = className;

      if (is) {
        tagName = is;
        is = className;
      }

      that.isProceduralComponentConstruction = true;
      const element = document.createElement(tagName, {
        is
      });
      that.isProceduralComponentConstruction = false;
      element.invokeLifeCycle(params);
      if (is) element.setAttribute("is", is, true);
      return element;
    }

    invokeLifeCycle(_ConstParams) {
      throw new Error("This is not a BaseConstructor");
    }

    getNamespacedStorage(key, nsProp, forceNS) {
      return Object(_client_utils_util__WEBPACK_IMPORTED_MODULE_5__["getNamespacedStorage"])(this, key, nsProp, forceNS);
    }

    setUpdateNamespacedStorage(key, newVal, nsProp) {
      return Object(_client_utils_util__WEBPACK_IMPORTED_MODULE_5__["setUpdateNamespacedStorage"])(this, key, newVal, nsProp);
    }

    deleteFromNamespacedStorage(key, nsProp) {
      return Object(_client_utils_util__WEBPACK_IMPORTED_MODULE_5__["deleteFromNamespacedStorage"])(this, key, nsProp);
    }

    setAttribute(qualifiedName, value, setValue = true) {
      if (this.properties && this.properties.has(qualifiedName)) {
        throw new Error(`"${qualifiedName}" can't be set as attribute because it is a defined property`);
      }

      if (value) {
        let valueToSet = value;
        if (!Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_6__["isPrimitive"])(value)) valueToSet = JSON.stringify(value).replace(/\"/g, "'");
        super.setAttribute(qualifiedName, valueToSet);
        valueToSet = Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_6__["constructTypeOfHTMLAttribute"])(this, qualifiedName);
        if (setValue) this[qualifiedName] = valueToSet;
      } else this.removeAttribute(qualifiedName);
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
      } else if (value) valueToAssign = value;

      elementOrName.style.setProperty(nameOrValue, valueToAssign);
    }

    removeStyle(elementOrName, name) {
      let styleToRemove = null;

      if (!(elementOrName instanceof HTMLElement)) {
        styleToRemove = elementOrName;
        elementOrName = this;
      } else if (name) styleToRemove = name;

      if (styleToRemove) elementOrName.style.removeProperty(styleToRemove);
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
        if (Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_6__["isString"])(this.templateString)) stringToParse = Object(nunjucks__WEBPACK_IMPORTED_MODULE_2__["renderString"])(this.templateString, this.toJSON());
        if (Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_6__["isObject"])(this.templateString)) stringToParse = this.templateString.render(this.toJSON());

        if (stringToParse) {
          const shadowRoot = this.attachShadow({
            mode: 'open'
          });
          const doc = new DOMParser().parseFromString(stringToParse, 'text/html');
          shadowRoot.appendChild(doc.body.firstChild);
        }
      }
    }

    constructedCallback() {}

    connectedCallback() {}

    disconnectedCallback() {}

    adoptedCallback() {}

    addController() {}

    removeController() {}

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

  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_3__["attribute"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], BaseComponent.prototype, "id", void 0);

  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_3__["property"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], BaseComponent.prototype, "isBaseComponent", void 0);

  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_3__["property"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], BaseComponent.prototype, "className", void 0);

  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_3__["property"])({
    disableTypeGuard: true
  }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], BaseComponent.prototype, "templateString", void 0);

  return BaseComponent;
}

/***/ }),

/***/ "./source/app/client/ts/lib/BaseController.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class BaseController {
  constructor() {}

  constructedCallback() {}

  connectedCallback() {}

  disconnectedCallback() {}

  adoptedCallback() {}

}

exports.BaseController = BaseController;

/***/ }),

/***/ "./source/app/client/ts/lib/ClientModel.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ClientModel_1;
Object.defineProperty(exports, "__esModule", {
  value: true
});

const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");

const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");

const BDOModel_1 = __webpack_require__("./source/app/lib/BDOModel.ts");

const util_1 = __webpack_require__("./source/app/client/ts/utils/util.ts");

const framework_1 = __webpack_require__("./source/app/utils/framework.ts");

const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");

const Logger_1 = __webpack_require__("./source/app/client/ts/lib/Logger.ts");

const DatabaseManager_1 = __webpack_require__("./source/app/client/ts/lib/DatabaseManager.ts");

const Watched_1 = __webpack_require__("./source/app/lib/Watched.ts");

const util_2 = __webpack_require__("./source/app/utils/util.ts");

const ModelRegistry_1 = __webpack_require__("./source/app/lib/ModelRegistry.ts");

const logger = new Logger_1.Logger();
const databaseManager = DatabaseManager_1.DatabaseManager.getInstance();
let ClientModel = ClientModel_1 = class ClientModel extends BDOModel_1.BDOModel {
  constructor() {
    super(...arguments);
    this.isClientModel = true;
  }

  static getInstanceByID(id) {
    return new Promise(async resolve => {
      let model = ModelRegistry_1.ModelRegistry.getInstance().getModelById(id, this);
      if (!model) model = new this();
      const dataFromLocalDB = await databaseManager.database(model.databaseName).collection(model.collectionName).get(id);

      if (dataFromLocalDB) {
        const pendingPromises = [];

        for (const key in dataFromLocalDB) {
          if (dataFromLocalDB.hasOwnProperty(key)) {
            const modelElem = Reflect.get(model, key);
            let klass;
            let elem = dataFromLocalDB[key];
            let correspondingListLikeDB = [];

            if (modelElem instanceof Array) {
              correspondingListLikeDB = modelElem.map(item => {
                if (item instanceof ClientModel_1) return item.getReferenceString();
                return item;
              });
            }

            if (elem instanceof Array && util_2.difference(correspondingListLikeDB, elem).length) {
              const pendingItems = [];

              for (let item of elem) {
                if (framework_1.isReferenceString(item)) {
                  const refParts = item.split(":")[1];
                  const className = refParts[1];
                  klass = __webpack_require__("./source/app/client/ts/models sync recursive ^\\.\\/.*\\.ts$")(`./${className}.ts`)[className];
                  pendingItems.push(klass.getInstanceByID(refParts[2]).then(result => {
                    item = result;
                  }));
                }
              }

              pendingPromises.push(Promise.all(pendingItems).then());
            } else if (framework_1.isReferenceString(elem) && elem !== model.getReferenceString()) {
              const refParts = elem.split(":")[1];
              const className = refParts[1];
              klass = __webpack_require__("./source/app/client/ts/models sync recursive ^\\.\\/.*\\.ts$")(`./${className}.ts`)[className];
              pendingPromises.push(klass.getInstanceByID(refParts[2]).then(result => {
                elem = result;
              }));
            }
          }
        }

        await Promise.all(pendingPromises);
        Object.assign(model, dataFromLocalDB);
      }

      if (!model.id.includes("pending")) return resolve(model);
      return resolve();
    });
  }

  static getInstancesByAttributes(attributes) {
    return ModelRegistry_1.ModelRegistry.getInstance().getModelsByAttributes(attributes);
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

  async save(attr) {
    const definedAttributes = metadata_1.getMetadata(this, "definedAttributes");
    if (!definedAttributes || attr && !definedAttributes.has(attr)) throw new Error("invalid defined attributes");
    const attributes = attr ? [attr] : definedAttributes.keys();
    const unsavedChanges = await this.getUnsavedChanges();
    const toSave = {};
    const sendToServer = {};

    for (const attribute of attributes) {
      if (unsavedChanges.hasOwnProperty(attribute)) {
        const strAttr = attribute;
        let proxyVal = util_2.getProxyTarget(unsavedChanges[strAttr]);

        if (proxyVal instanceof Array) {
          proxyVal = proxyVal.map(item => {
            if (item instanceof ClientModel_1) {
              return item.getReferenceString();
            }

            return util_2.getProxyTarget(item);
          });
        }

        if (proxyVal instanceof ClientModel_1) proxyVal = proxyVal.getReferenceString();
        let wildCardMetadata = metadata_1.getWildcardMetadata(this, strAttr);
        if (wildCardMetadata instanceof Watched_1.Watched) wildCardMetadata = wildCardMetadata.subObject;
        if (!wildCardMetadata.doNotPersist) toSave[strAttr] = proxyVal;
        if (!wildCardMetadata.noServerInteraction) sendToServer[strAttr] = proxyVal;
      }
    }

    try {
      if (Object.keys(toSave).length) {
        await databaseManager.database(this.databaseName).collection(this.collectionName).update(this.id, toSave);
      }

      if (Object.keys(sendToServer).length) logger.debug(`send ${JSON.stringify(sendToServer)} to server`);
    } catch (error) {
      return Promise.reject(error);
    }

    return Promise.resolve(unsavedChanges);
  }

  discard(_attr) {
    throw new Error("Method not implemented.");
  }

  async getUnsavedChanges() {
    if (!this.collectionName) return Promise.reject("No collectionName provided");
    const unsavedChanges = {};
    let dbCollection = await databaseManager.database("default").collection(this.collectionName).get(this.id);
    const definedAttributes = metadata_1.getMetadata(this, "definedAttributes");
    dbCollection = dbCollection || {};

    if (definedAttributes) {
      for (const attr of definedAttributes.keys()) {
        const strAttr = attr.toString();
        const attrVal = util_2.getProxyTarget(this[attr]);

        if (util_2.isArray(attrVal) && util_2.difference(attrVal, dbCollection[strAttr]).length) {
          unsavedChanges[strAttr] = this[attr];
        } else if (util_2.isObject(attrVal) && !util_2.isEqual(attrVal, dbCollection[strAttr])) {
          unsavedChanges[strAttr] = this[attr];
        } else if (util_2.isPrimitive(attrVal) && attrVal !== dbCollection[strAttr]) {
          unsavedChanges[strAttr] = this[attr];
        }
      }
    }

    return Promise.resolve(unsavedChanges);
  }

  onTypeCheckFail(error) {
    logger.error(error.message);
  }

};
ClientModel.isClientModel = true;

tslib_1.__decorate([decorators_1.property(), tslib_1.__metadata("design:type", Boolean)], ClientModel.prototype, "isClientModel", void 0);

ClientModel = ClientModel_1 = tslib_1.__decorate([decorators_1.baseConstructor()], ClientModel);
exports.ClientModel = ClientModel;

/***/ }),

/***/ "./source/app/client/ts/lib/ClientRoute.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const BDORoute_1 = __webpack_require__("./source/app/lib/BDORoute.ts");

const util_1 = __webpack_require__("./source/app/utils/util.ts");

const Logger_1 = __webpack_require__("./source/app/client/ts/lib/Logger.ts");

const logger = new Logger_1.Logger();

class ClientRoute extends BDORoute_1.BDORoute {
  constructor() {
    super(...arguments);
    this.isClientRoute = true;
  }

  get router() {
    const routes = {};

    for (const route of this.routes) {
      routes[`${this.routerNameSpace}/${route}`.replace("//", "/")] = this.handleGet.bind(this);
    }

    return routes;
  }

  async templateParams(params) {
    return super.templateParams(params);
  }

  async handleGet(params) {
    logger.log(util_1.merge((await this.templateParamsFromServer()), (await this.templateParams(params))));
  }

  async templateParamsFromServer() {
    let urlToAskFor = location.pathname;
    if (!urlToAskFor) urlToAskFor = `/`;
    const headers = new Headers({
      'X-Game-As-JSON': 'true'
    });
    return (await fetch(urlToAskFor, {
      headers
    })).json();
  }

}

exports.ClientRoute = ClientRoute;

/***/ }),

/***/ "./source/app/client/ts/lib/ConfigManager.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const BDOConfigManager_1 = __webpack_require__("./source/app/lib/BDOConfigManager.ts");

class ConfigManager extends BDOConfigManager_1.BDOConfigManager {
  set(_config) {
    throw new Error('Method not implemented.');
  }

  load(_config) {
    throw new Error('Method not implemented.');
  }

  getCache(_config) {
    throw new Error('Method not implemented.');
  }

  setCache(_config, _value) {
    throw new Error('Method not implemented.');
  }

}

exports.ConfigManager = ConfigManager;

/***/ }),

/***/ "./source/app/client/ts/lib/DatabaseManager.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");

const BDODatabaseManager_1 = __webpack_require__("./source/app/lib/BDODatabaseManager.ts");

const localforage_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/localforage/dist/localforage.js"));

class DatabaseManager extends BDODatabaseManager_1.BDODatabasemanager {
  constructor() {
    super();
    this.databases = new Map();
  }

  static getInstance() {
    if (!DatabaseManager.instance) DatabaseManager.instance = new DatabaseManager();
    return DatabaseManager.instance;
  }

  database(name) {
    this.currentDatabase = name;

    if (!this.databases.hasOwnProperty(name)) {
      this.databases.set(name, localforage_1.default.createInstance({
        name: name,
        driver: [localforage_1.default.INDEXEDDB, localforage_1.default.WEBSQL]
      }));
    }

    delete this.currentCollection;
    delete this.currentGraph;
    delete this.currentView;
    return this;
  }

  collection(name) {
    this.currentCollection = `collection_${name}`;
    this.getDatabase().config({
      storeName: this.currentCollection
    });
    delete this.currentGraph;
    delete this.currentView;
    return this;
  }

  view(name) {
    this.currentView = `view_${name}`;
    this.getDatabase().config({
      storeName: this.currentView
    });
    delete this.currentCollection;
    delete this.currentGraph;
    return this;
  }

  graph(name) {
    this.currentGraph = `graph_${name}`;
    this.getDatabase().config({
      storeName: this.currentGraph
    });
    delete this.currentCollection;
    delete this.currentView;
    return this;
  }

  get(id) {
    return this.getDatabase().getItem(id);
  }

  insert(id, value) {
    return this.getDatabase().setItem(id, value);
  }

  update(id, values) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = (await this.get(id)) || {};
        Object.assign(result, values);
        await this.insert(id, result);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  delete(id) {
    return this.getDatabase().removeItem(id);
  }

  clear() {
    return this.getDatabase().clear();
  }

  length() {
    return this.getDatabase().length();
  }

  key(index) {
    return this.getDatabase().key(index);
  }

  keys() {
    return this.getDatabase().keys();
  }

  iterate(iterator) {
    return this.getDatabase().iterate(iterator);
  }

  getDatabase() {
    if (!this.currentDatabase) throw new Error("No Database chosen");
    return this.databases.get(this.currentDatabase);
  }

}

exports.DatabaseManager = DatabaseManager;

/***/ }),

/***/ "./source/app/client/ts/lib/Logger.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _a;

Object.defineProperty(exports, "__esModule", {
  value: true
});

const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");

const BDOLogger_1 = __webpack_require__("./source/app/lib/BDOLogger.ts");

const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");

let Logger = class Logger extends BDOLogger_1.BDOLogger {
  constructor(params) {
    super(params);
    this.logLevelColors = {
      log: 'color: gray; font-weight: bold;',
      debug: 'color: green; font-weight: bold;',
      info: 'color: #00806B; font-weight: bold;',
      warn: 'color: #808000; font-weight: bold;',
      error: 'color: red; font-weight: bold;'
    };
  }

  getHeader(logLevel, printEnv = 'console') {
    const procInfo = this.getProcInfo();
    const currentTime = this.currentTime();
    const upperLogLevel = logLevel.toUpperCase();
    const logPoint = this.getLogPoint();
    const resetStyle = 'color: black; font-weight: normal';
    const magenta = 'color: #800080; font-weight: normal';
    const cyan = 'color: #00806B; font-weight: normal';

    if (printEnv === 'console') {
      const formattedLogLevel = this.logLevelColors[logLevel];
      const formattedLogPoint = magenta;
      const formattedTime = cyan;
      const formattedProcInfo = magenta;
      return [`%c[%c${upperLogLevel} %c- %c${procInfo} %c- %c${currentTime} %cat %c${logPoint}%c]`, resetStyle, formattedLogLevel, resetStyle, formattedProcInfo, resetStyle, formattedTime, resetStyle, formattedLogPoint, resetStyle];
    }

    return `[${upperLogLevel} - ${procInfo} - ${currentTime} - ${logPoint}]`;
  }

  writeToFile(_logLevel, _message) {}

};
Logger = tslib_1.__decorate([decorators_1.baseConstructor(), tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ConstParams !== "undefined" && ConstParams) === "function" ? _a : Object])], Logger);
exports.Logger = Logger;

/***/ }),

/***/ "./source/app/lib/Attribute.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const Property_1 = __webpack_require__("./source/app/lib/Property.ts");

const environment_1 = __webpack_require__("./source/app/utils/environment.ts");

const Modification_1 = __webpack_require__("./source/app/lib/Modification.ts");

const util_1 = __webpack_require__("./source/app/utils/util.ts");

const Errors_1 = __webpack_require__("./source/app/lib/Errors.ts");

const ModelRegistry_1 = __webpack_require__("./source/app/lib/ModelRegistry.ts");

class Attribute extends Property_1.Property {
  constructor(object, property, params) {
    super(object, property, params);
    this.inDOMInitialized = false;
    this.autoSaveAllowed = false;
  }

  setValue(value) {
    if (!this.shouldDoSetValue(value)) return;
    let oldID;
    if (this.object.isBDOModel && this.property === "id") oldID = this.ownValue;
    this.doSetValue(value, true, true);
    if (oldID) ModelRegistry_1.ModelRegistry.getInstance().updateID(oldID, this.object);
    this.reflectToDOMAttribute(value);
    this.doAutoSave();
  }

  proxyHandler(_path, _changedVal, _prevVal) {
    const value = this.value;
    if (value === undefined || value === null) return;
    this.doSetValue(util_1.getProxyTarget(value), true, true);
    this.reflectToDOMAttribute(value);
    this.doAutoSave();
  }

  getUnsavedChange() {}

  shouldDoSetValue(value, skipGuard = false) {
    if (environment_1.isBrowser() && !this.object.isBDOModel && this.object instanceof HTMLElement) {
      const constructedType = util_1.constructTypeOfHTMLAttribute(this.object, this.property);

      if (!this.inDOMInitialized && this.object.getAttribute(this.property) && value !== constructedType) {
        this.setValue(constructedType);
        return false;
      }
    }

    return !(value === this.ownValue || !skipGuard && !this.disableTypeGuard && !this.typeGuard(value));
  }

  reflectToDOMAttribute(value) {
    if (!environment_1.isBrowser() || !(this.object instanceof HTMLElement)) return;
    const stringKey = this.property.toString();
    const attrValue = this.object.getAttribute(stringKey);
    let setAttribute = true;
    let pTarget;
    let valueToPass = value;
    if (value instanceof Modification_1.Modification) valueToPass = value.valueOf();

    if (!this.inDOMInitialized && attrValue) {
      setAttribute = false;
    } else pTarget = util_1.getProxyTarget(valueToPass);

    this.inDOMInitialized = true;

    if (setAttribute && attrValue !== pTarget && attrValue !== JSON.stringify(pTarget).replace(/\"/g, "'")) {
      this.object.setAttribute(stringKey, pTarget, false);
    }
  }

  doAutoSave() {
    if (this.autoSave && this.doNotPersist) {
      throw new Errors_1.ConfigurationError("You have turned on autosave but at the same time it is forbidden to persist the value!");
    }

    if (!this.autoSaveAllowed) {
      this.autoSaveAllowed = true;
      return;
    }

    if (!this.autoSave || !util_1.isFunction(this.object.save)) return;
    if (typeof this.autoSave === "boolean") this.object.save(this.property);

    if (typeof this.autoSave === "number" && !this.autoSaveTimeout) {
      this.autoSaveTimeout = setTimeout(() => {
        this.object.save(this.property);
        delete this.autoSaveTimeout;
      }, Math.abs(this.autoSave));
    }
  }

}

exports.Attribute = Attribute;

/***/ }),

/***/ "./source/app/lib/BDOConfigManager.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");

const ms_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/ms/index.js"));

const BDOMapCache_1 = __webpack_require__("./source/app/lib/BDOMapCache.ts");

class BDOConfigManager {
  constructor() {
    this.cache = new BDOMapCache_1.BDOMapCache();
  }

  async get(config) {
    let value = await this.getCache(config);

    if (!value) {
      value = await this.load(config);
      await this.setCache(config, value);
    }

    return Promise.resolve(value);
  }

  getCache(config) {
    const fromLocalCache = this.cache.get(config);

    if (fromLocalCache) {
      return fromLocalCache;
    }

    return null;
  }

  async setCache(config, value) {
    let conf = this.cache.get('__ConfigManagerCacheTimeout__');

    if (!this.cache.has('__ConfigManagerCacheTimeout__')) {
      conf = (await this.load('config')).timeouts.configCache;
      if (conf) conf = ms_1.default(conf);
      this.cache.set('__ConfigManagerCacheTimeout__', conf);
    }

    this.cache.set(config, value, conf);
  }

}

exports.BDOConfigManager = BDOConfigManager;

/***/ }),

/***/ "./source/app/lib/BDODatabaseManager.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class BDODatabasemanager {}

exports.BDODatabasemanager = BDODatabasemanager;

/***/ }),

/***/ "./source/app/lib/BDOLogger.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");

const moment_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/moment/moment.js"));

const path_1 = __webpack_require__("./node_modules/path-browserify/index.js");

const util_1 = __webpack_require__("./source/app/utils/util.ts");

class BDOLogger {
  constructor(_params) {
    this.logFile = 'default.log';
    this.preventConsolePrint = false;
    this.preventFilePrint = false;
    this.logLevel = 'debug';
    this.prototypeNames = util_1.getPrototypeNamesRecursive(this);
  }

  log(message, loglevel = 'log', ...args) {
    if (loglevel !== 'log' && !this.isAllowed(loglevel)) return;

    if (!this.preventConsolePrint || ['log', 'error'].includes(loglevel)) {
      const header = this.getHeader(loglevel);
      let newArgs = [];

      if (header instanceof Array) {
        newArgs = newArgs.concat(header);
      } else newArgs.push(header);

      newArgs.push(message);
      newArgs = newArgs.concat(args);
      console[loglevel].apply(this, newArgs);
    }

    const parsedString = JSON.stringify(args);

    if (!this.preventFilePrint || loglevel === 'error') {
      this.writeToFile(loglevel, message + parsedString.substr(1, parsedString.length - 2));
    }
  }

  debug(message, ...args) {
    const apply = [message, 'debug'].concat(args);
    this.log.apply(this, apply);
  }

  info(message, ...args) {
    const apply = [message, 'info'].concat(args);
    this.log.apply(this, apply);
  }

  warn(message, ...args) {
    const apply = [message, 'warn'].concat(args);
    this.log.apply(this, apply);
  }

  error(message, ...args) {
    const apply = [message, 'error'].concat(args);
    this.log.apply(this, apply);
  }

  getProcInfo() {
    return `${global.process.env.name || ''} ${global.process.env.hostname || ''} ${global.process.pid}`;
  }

  isAllowed(logLevel) {
    const logLevelOrder = ['log', 'debug', 'info', 'warn', 'error'];
    return logLevelOrder.indexOf(logLevel) >= logLevelOrder.indexOf(this.logLevel);
  }

  currentTime() {
    return moment_1.default().format('DD.MM.YYYY HH:mm:ss');
  }

  getLogPoint() {
    const stack = new Error().stack.split('\n');
    let callpoint;

    for (const [index, stackpart] of stack.entries()) {
      if (!index) continue;

      if (!util_1.includesMemberOfList(stackpart, this.prototypeNames, '.ts')) {
        callpoint = stackpart.split(path_1.sep).pop();
        break;
      }
    }

    if (callpoint) {
      callpoint = callpoint.replace(')', '');
    } else {
      callpoint = '';
    }

    return callpoint;
  }

}

exports.BDOLogger = BDOLogger;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./source/app/lib/BDOMapCache.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class Entity {
  constructor(data, duration) {
    this.expire = Infinity;
    this.data = data;
    this.expire = new Date().getTime() + (duration || Infinity);
  }

  get expired() {
    return this.expire ? this.expire < new Date().getTime() : false;
  }

}

class BDOMapCache extends Map {
  set(key, value, duration) {
    const entity = new Entity(value, duration);
    return super.set(key, entity);
  }

  get(key) {
    const entity = super.get(key);

    if (entity === undefined || entity.expired) {
      this.delete(key);
      return undefined;
    }

    return entity.data;
  }

}

exports.BDOMapCache = BDOMapCache;

/***/ }),

/***/ "./source/app/lib/BDOModel.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BDOModel_1;
Object.defineProperty(exports, "__esModule", {
  value: true
});

const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");

const uuid_1 = __webpack_require__("./node_modules/uuid/dist/esm-browser/index.js");

const type_graphql_1 = __webpack_require__("./node_modules/type-graphql/dist/browser-shim.js");

const Binding_1 = __webpack_require__("./source/app/lib/Binding.ts");

const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");

const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");

const ModelRegistry_1 = __webpack_require__("./source/app/lib/ModelRegistry.ts");

let BDOModel = BDOModel_1 = class BDOModel {
  constructor() {
    this.isBDOModel = true;
    this.collectionName = BDOModel_1.collectionName;
    this.databaseName = BDOModel_1.databaseName;
    this.id = `pending_${uuid_1.v4()}`;
    this.className = Object.getPrototypeOf(this.constructor).name;
    ModelRegistry_1.ModelRegistry.getInstance().register(this);
  }

  get bindings() {
    const bindings = metadata_1.getMetadata(this, "bindings");
    return bindings ? bindings : new Map();
  }

  static getInstanceByID(_id) {
    throw new Error("Not implemented");
  }

  getReferenceString() {
    return `_reference:${this.className}${this.id}`;
  }

  bind(propName, mode) {
    return new Binding_1.Binding(this, propName, mode);
  }

  toString() {
    const data = this.toJSON();
    return JSON.stringify(data);
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

  async isUnsaved(attr) {
    const unsavedChanges = await this.getUnsavedChanges();
    let unsaved = false;
    if (unsavedChanges && unsavedChanges.hasOwnProperty(attr)) unsaved = true;
    return Promise.resolve(unsaved);
  }

  async hasUnsavedChanges() {
    const unsavedChanges = await this.getUnsavedChanges();
    return Promise.resolve(Boolean(Object.keys(unsavedChanges).length));
  }

};
BDOModel.graphQLType = Object.getPrototypeOf(BDOModel_1.constructor);
BDOModel.isBDOModel = true;

tslib_1.__decorate([decorators_1.property(), tslib_1.__metadata("design:type", Boolean)], BDOModel.prototype, "isBDOModel", void 0);

tslib_1.__decorate([decorators_1.property(), tslib_1.__metadata("design:type", String)], BDOModel.prototype, "collectionName", void 0);

tslib_1.__decorate([decorators_1.property(), tslib_1.__metadata("design:type", String)], BDOModel.prototype, "databaseName", void 0);

tslib_1.__decorate([decorators_1.attribute(_type => type_graphql_1.ID), tslib_1.__metadata("design:type", String)], BDOModel.prototype, "id", void 0);

tslib_1.__decorate([decorators_1.attribute(), tslib_1.__metadata("design:type", String)], BDOModel.prototype, "className", void 0);

BDOModel = BDOModel_1 = tslib_1.__decorate([decorators_1.baseConstructor({
  isAbstract: true
}), tslib_1.__metadata("design:paramtypes", [])], BDOModel);
exports.BDOModel = BDOModel;

/***/ }),

/***/ "./source/app/lib/BDORoute.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const util_1 = __webpack_require__("./source/app/utils/util.ts");

const environment_1 = __webpack_require__("./source/app/utils/environment.ts");

class BDORoute {
  constructor() {
    this.routerNameSpace = `/${this.constructor.name.toLowerCase()}`;
    this.routes = ['/'];
    this.templateString = '<div></div>';
    this.jsonOnly = false;
  }

  renderTemplate(templateParams) {
    let stringToParse = null;

    if (util_1.isString(this.templateString)) {
      stringToParse = environment_1.templateEnvironment.renderString(this.templateString, templateParams);
    }

    if (util_1.isObject(this.templateString)) {
      stringToParse = this.templateString.render(templateParams);
    }

    return stringToParse;
  }

  async templateParams(_requestOrParams) {
    return {};
  }

}

exports.BDORoute = BDORoute;
BDORoute.attachToServers = ['*'];

/***/ }),

/***/ "./source/app/lib/BaseConstructor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const Binding_1 = __webpack_require__("./source/app/lib/Binding.ts");

const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");

const util_1 = __webpack_require__("./source/app/utils/util.ts");

const framework_1 = __webpack_require__("./source/app/utils/framework.ts");

function baseConstructorFactory(ctor, constParamsIndex) {
  class BaseConstructor extends ctor {
    constructor(...params) {
      super(...params);
      this.collectionName = BaseConstructor.collectionName;
      this.databaseName = BaseConstructor.databaseName;
      const constParams = params[constParamsIndex];
      metadata_1.defineMetadata(this, "normalFunctionality", true);
      if (!BaseConstructor.isProceduralComponentConstruction) this.invokeLifeCycle(constParams);
    }

    invokeLifeCycle(constParams) {
      if (!(constParams instanceof Object)) constParams = {};
      let defaultSettings = metadata_1.getMetadata(this, "defaultSettings") || {};
      defaultSettings = Object.assign(defaultSettings, constParams);

      if (util_1.isFunction(this.getNamespacedStorage)) {
        const id = constParams.id || defaultSettings.id;
        const cachedSettings = this.getNamespacedStorage("*", "id", id) || {};

        for (const key in cachedSettings) {
          if (cachedSettings.hasOwnProperty(key)) {
            const element = defaultSettings[key];

            if (element instanceof Binding_1.Binding) {
              element.setValue(cachedSettings[key]);
            } else defaultSettings[key] = cachedSettings[key];
          }
        }
      }

      Object.assign(this, defaultSettings);
      metadata_1.defineMetadata(this, "constructionComplete", true);
      if (framework_1.isComponent(ctor) && util_1.isFunction(this.renderTemplate)) this.renderTemplate();
      if (util_1.isFunction(this.constructedCallback)) this.constructedCallback();
    }

  }

  BaseConstructor.className = Object.getPrototypeOf(BaseConstructor).name;
  BaseConstructor.graphQLType = ctor;
  BaseConstructor.collectionName = metadata_1.getMetadata(BaseConstructor, "collectionName");
  BaseConstructor.databaseName = metadata_1.getMetadata(BaseConstructor, "databaseName");
  BaseConstructor.isProceduralComponentConstruction = false;
  return BaseConstructor;
}

exports.baseConstructorFactory = baseConstructorFactory;

/***/ }),

/***/ "./source/app/lib/Binding.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const util_1 = __webpack_require__("./source/app/utils/util.ts");

const Field_1 = __webpack_require__("./source/app/lib/Field.ts");

const framework_1 = __webpack_require__("./source/app/utils/framework.ts");

const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");

const iniBindName = "initiatorBinding";
const bindName = "bindings";

class Binding {
  constructor(object, property, mode = "ReadWrite") {
    this.object = object;
    this.property = property;
    this.mode = mode;
    this.descriptor = this.getOriginalPropertyDescriptor(this.object, this.property);
  }

  setValue(value) {
    this.value = value;
  }

  valueOf() {
    return this.value || this.object[this.property];
  }

  install(initiator, property) {
    this.initiator = initiator;
    this.initiatorProperty = property;
    this.initiatorDescriptor = this.getOriginalPropertyDescriptor(this.initiator, this.initiatorProperty);
    if (!Reflect.hasMetadata(iniBindName, this.initiator)) metadata_1.defineMetadata(this.initiator, iniBindName, new Map());
    if (!Reflect.hasMetadata(bindName, this.object)) metadata_1.defineMetadata(this.object, bindName, new Map());
    const initiatorMData = metadata_1.getMetadata(this.initiator, iniBindName) || new Map();
    const initiatorBinding = initiatorMData.get(this.initiatorProperty);
    if (initiatorBinding) initiatorBinding.remove();
    const mData = metadata_1.getMetadata(this.object, bindName) || new Map();
    if (!mData.has(this.property)) mData.set(this.property, []);
    mData.get(this.property).push(this);
    initiatorMData.set(this.initiatorProperty, this);
    const fieldMDataName = `field:${this.property}`;
    const objectField = metadata_1.getWildcardMetadata(this.object, this.property);
    const initiatorField = metadata_1.getWildcardMetadata(this.initiator, this.initiatorProperty);
    let field = metadata_1.getWildcardMetadata(this.object, fieldMDataName);
    if (!field) metadata_1.defineWildcardMetadata(this.object, fieldMDataName, new Field_1.Field(this.object, this.property));
    field = metadata_1.getWildcardMetadata(this.object, fieldMDataName);
    field.addField(objectField);
    field.addField(initiatorField);
    this.replaceDescriptor();
    Reflect.set(this.initiator, this.initiatorProperty, this.valueOf());
  }

  remove() {
    const objectValue = this.object[this.property];
    const initiatorValue = this.initiator[this.initiatorProperty];
    const objectMData = metadata_1.getMetadata(this.object, bindName);
    const objectBindings = objectMData ? objectMData.get(this.property) : undefined;
    const initiatorMData = metadata_1.getMetadata(this.initiator, iniBindName);
    const initiatorBinding = initiatorMData ? initiatorMData.get(this.initiatorProperty.toString()) : undefined;
    const fieldMDataName = `field:${this.property}`;
    const field = metadata_1.getWildcardMetadata(this.object, fieldMDataName);

    if (initiatorBinding) {
      if (initiatorMData) initiatorMData.delete(this.initiatorProperty.toString());
      this.restoreDescriptor(this.initiator, this.initiatorProperty, initiatorValue, this.initiatorDescriptor);
      field.removeField(metadata_1.getWildcardMetadata(this.initiator, this.initiatorProperty));
    }

    if (objectBindings) {
      util_1.removeElementFromArray(objectBindings, this);
      field.removeField(metadata_1.getWildcardMetadata(this.object, this.property));

      if (!objectBindings.length) {
        if (objectMData) objectMData.delete(this.property);
        this.restoreDescriptor(this.object, this.property, objectValue, this.descriptor);
        metadata_1.defineWildcardMetadata(this.object, fieldMDataName, null);
      }
    }
  }

  replaceDescriptor() {
    const that = this;
    Reflect.deleteProperty(this.object, this.property);
    Reflect.defineProperty(this.object, this.property, {
      get: function bindingGet() {
        if (that.mode === "WriteOnly" && this === that.initiator) return undefined;
        return framework_1.getter(that.object, that.property, "field");
      },
      set: function bindingSet(newVal) {
        if (that.mode === "ReadOnly" && this === that.initiator) return;
        framework_1.setter(that.object, that.property, newVal, "field");
      },
      configurable: true,
      enumerable: true
    });
    const bindingDesc = Reflect.getOwnPropertyDescriptor(this.object, this.property);
    Reflect.deleteProperty(this.initiator, this.initiatorProperty);
    Reflect.defineProperty(this.initiator, this.initiatorProperty, bindingDesc);
    metadata_1.defineMetadata(this.object, "bindingDescriptor", bindingDesc);
  }

  restoreDescriptor(object, property, value, descriptor) {
    Reflect.deleteProperty(object, property);

    if (descriptor) {
      Reflect.defineProperty(this.initiator, this.initiatorProperty, descriptor);
    }

    object[property.toString()] = value;
  }

  getOriginalPropertyDescriptor(object, key) {
    let descriptor = Reflect.getOwnPropertyDescriptor(object, key);
    let mDataName = bindName;
    let prototype = object;
    if (object === this.initiator) mDataName = iniBindName;

    while (!descriptor) {
      prototype = Object.getPrototypeOf(prototype);
      if (!prototype) break;
      if (prototype.constructor.name === "BaseConstructor") prototype = Object.getPrototypeOf(prototype);
      descriptor = Reflect.getOwnPropertyDescriptor(prototype, key);
    }

    let searchDescriptorInBindings = false;

    if (descriptor) {
      if (descriptor.set && descriptor.set.name === "bindingSet") searchDescriptorInBindings = true;
      if (descriptor.get && descriptor.get.name === "bindingGet") searchDescriptorInBindings = true;
    }

    if (searchDescriptorInBindings) {
      const mData = metadata_1.getMetadata(object, mDataName);
      const bindings = mData ? mData.get(key.toString()) : undefined;

      if (bindings) {
        if (bindings instanceof Array) {
          descriptor = bindings[0].descriptor;
        } else descriptor = bindings.initiatorDescriptor;
      }
    }

    return descriptor;
  }

}

exports.Binding = Binding;

/***/ }),

/***/ "./source/app/lib/Errors.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class ValueError extends Error {}

exports.ValueError = ValueError;

class TypeError extends Error {}

exports.TypeError = TypeError;

class ConfigurationError extends Error {}

exports.ConfigurationError = ConfigurationError;

/***/ }),

/***/ "./source/app/lib/Field.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");

const Watched_1 = __webpack_require__("./source/app/lib/Watched.ts");

const util_1 = __webpack_require__("./source/app/utils/util.ts");

const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");

const on_change_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/on-change/index.js"));

class Field {
  constructor(object, property) {
    this.fields = [];
    this.object = object;
    this.property = property;
  }

  addField(field) {
    if (this.fields.includes(field)) return;
    if (field.object && field.object.isBDOModel) this.value = this.proxyfyValue(field.valueOf());
    if (field instanceof Watched_1.Watched && field.subObject) this.redefineValue(field.subObject);
    this.redefineValue(field);
    this.fields.push(field);
  }

  removeField(field) {
    if (!this.fields.includes(field)) return;
    if (field instanceof Watched_1.Watched && field.subObject) this.restoreValue(field.subObject);
    this.restoreValue(field);
    util_1.removeElementFromArray(this.fields, field);
  }

  setValue(value) {
    for (const field of this.fields) field.setValue(value);
  }

  valueOf() {
    return this.value;
  }

  redefineValue(field) {
    metadata_1.defineWildcardMetadata(field, "value", field.valueOf());
    const that = this;
    Reflect.deleteProperty(field, "value");
    Reflect.defineProperty(field, "value", {
      get() {
        return that.value;
      },

      set(value) {
        value = util_1.getProxyTarget(value);
        const thatValue = util_1.getProxyTarget(that.value);
        if (value === thatValue) return;
        that.value = that.proxyfyValue(value);
      },

      configurable: true,
      enumerable: true
    });
  }

  restoreValue(field) {
    Reflect.deleteProperty(field, "value");
    field.setValue(util_1.getProxyTarget(this.value));
  }

  proxyfyValue(value) {
    if (value instanceof Array || util_1.isObject(value) && !value.isBDOModel) {
      let isShallow = true;

      for (const field of this.fields) {
        if (!field.isShallow) {
          isShallow = false;
          break;
        }
      }

      value = on_change_1.default.target(value);
      return on_change_1.default(value, (path, changedValue, previousValue) => {
        const pathSize = path.split(".").length;

        for (const field of this.fields) {
          if (!field.isShallow || field.isShallow && pathSize <= 1) {
            field.proxyHandler(path, changedValue, previousValue);
          }
        }
      }, {
        isShallow
      });
    }

    return value;
  }

}

exports.Field = Field;

/***/ }),

/***/ "./source/app/lib/ModelRegistry.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const framework_1 = __webpack_require__("./source/app/utils/framework.ts");

class ModelRegistry {
  constructor() {
    this.models = new Map();
  }

  static getInstance() {
    if (!ModelRegistry.instance) ModelRegistry.instance = new ModelRegistry();
    return ModelRegistry.instance;
  }

  register(model) {
    this.models.set(`${model.className}${model.id}`, model);
  }

  unregister(model) {
    this.models.delete(`${model.className}${model.id}`);
  }

  getModelById(id, constructor) {
    return this.models.get(`${this.getClassName(constructor)}${id}`);
  }

  getModelsByAttributes(attributes) {
    const models = [];
    this.models.forEach(model => {
      for (const key in attributes) {
        if (attributes.hasOwnProperty(key)) {
          const element = attributes[key];

          if (!(key in model) || element !== model[key]) {
            return;
          }
        }
      }

      models.push(model);
    });
    return models;
  }

  updateID(oldID, constructor) {
    const model = this.models.get(`${this.getClassName(constructor)}${oldID}`);
    if (!model) return;
    this.models.delete(`${this.getClassName(constructor)}${oldID}`);
    this.register(model);
  }

  getModelsByCondition(func, mode = "all") {
    const models = [];
    let lastModel;

    for (const model of this.models.values()) {
      if (func(model)) {
        if (mode === "first") return model;
        if (mode === "all") models.push(model);
        if (mode === "last") lastModel = model;
      }
    }

    return mode === "last" ? lastModel : models;
  }

  getClassName(constructor) {
    let className;

    if (framework_1.isBaseConstructor(constructor)) {
      className = constructor.className;
    } else if ("className" in constructor) {
      className = constructor.className;
    } else if (typeof constructor === "function") {
      className = constructor.name;
    } else className = constructor.constructor.name;

    return className;
  }

}

exports.ModelRegistry = ModelRegistry;

/***/ }),

/***/ "./source/app/lib/Modification.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class Modification {
  constructor(value, type = "delete") {
    this.value = value;
    this.type = type;
  }

  valueOf() {
    return this.value;
  }

  setValue(value) {
    this.value = value;
  }

}

exports.Modification = Modification;

/***/ }),

/***/ "./source/app/lib/Property.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");

const Modification_1 = __webpack_require__("./source/app/lib/Modification.ts");

const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");

const environment_1 = __webpack_require__("./source/app/utils/environment.ts");

const util_1 = __webpack_require__("./source/app/utils/util.ts");

const Errors_1 = __webpack_require__("./source/app/lib/Errors.ts");

const on_change_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/on-change/index.js"));

class Property {
  constructor(object, property, params) {
    this.isShallow = true;
    this.object = object;
    this.property = property;
    let parameters = {};
    if (params && params.params) parameters = params.params;
    Object.assign(this, parameters);
    const capitalizedProp = util_1.ucFirst(property);
    const onTypeCheckFail = `on${capitalizedProp}TypeCheckFail`;
    const onTypeCheck = `on${capitalizedProp}TypeCheck`;
    const onTypeCheckSuccess = `on${capitalizedProp}TypeCheckSuccess`;
    this.onTypeCheckFail = parameters ? parameters.onTypeCheckFail || onTypeCheckFail : onTypeCheckFail;
    this.onTypeCheck = parameters ? parameters.onTypeCheck || onTypeCheck : onTypeCheck;
    this.onTypeCheckSuccess = parameters ? parameters.onTypeCheckSuccess || onTypeCheckSuccess : onTypeCheckSuccess;
  }

  setValue(value) {
    this.doSetValue(value, true);
  }

  valueOf() {
    const stringKey = this.property.toString();
    let value = this.value;

    if (!util_1.isProxy(value) && this.saveInLocalStorage && util_1.isFunction(this.object.getNamespacedStorage)) {
      value = this.object.getNamespacedStorage(stringKey);
    }

    return value;
  }

  typeGuard(value) {
    let valueToPass = value;
    if (value instanceof Modification_1.Modification) valueToPass = value.valueOf();
    const designType = metadata_1.getDesignType(this.object, this.property.toString());
    const typeError = new Errors_1.TypeError(`${valueToPass} is not type of ${designType.className || designType.name}`);
    const idxStructObj = this.object;
    let error;
    if (!this.nullable && (valueToPass === undefined || valueToPass === null)) error = typeError;

    if (!error) {
      if (util_1.isPrimitive(valueToPass)) {
        if (typeof valueToPass !== designType.name.toLowerCase()) {
          if (!this.nullable || !(valueToPass === undefined || valueToPass === null)) error = typeError;
        }
      } else if (!(valueToPass instanceof designType)) error = typeError;
    }

    if (!error && util_1.isFunction(idxStructObj[this.onTypeCheck])) error = idxStructObj[this.onTypeCheck](valueToPass);

    if (error) {
      if (util_1.isFunction(idxStructObj[this.onTypeCheckFail])) {
        idxStructObj[this.onTypeCheckFail](error);
      } else if (util_1.isFunction(idxStructObj.onTypeCheckFail)) {
        idxStructObj.onTypeCheckFail(error);
      } else throw error;
    } else if (util_1.isFunction(idxStructObj[this.onTypeCheckSuccess])) idxStructObj[this.onTypeCheckSuccess]();

    return !Boolean(error).valueOf();
  }

  proxyHandler(_path, _changedVal, _prevVal) {
    const value = this.value;
    if (value === undefined || value === null) return;
    this.doSetValue(on_change_1.default.target(value), false);
  }

  shouldDoSetValue(value, skipGuard = false) {
    return !(value === this.ownValue || !skipGuard && !this.disableTypeGuard && !this.typeGuard(value));
  }

  doSetValue(value, modifyValue = true, skipGuard = false) {
    if (!this.shouldDoSetValue(value, skipGuard)) return;
    let valueToPass;

    if (value instanceof Modification_1.Modification) {
      valueToPass = value.valueOf();
    } else valueToPass = value;

    if (modifyValue) {
      const proxyfied = this.proxyfyValue(valueToPass);
      this.value = proxyfied;
      this.ownValue = valueToPass;
    }

    if (this.shouldUpdateNsStorage() && util_1.isFunction(this.object.setUpdateNamespacedStorage)) {
      this.object.setUpdateNamespacedStorage(this.property.toString(), valueToPass);
    }
  }

  proxyfyValue(value) {
    if (value instanceof Array || util_1.isObject(value) && !value.isBDOModel) {
      value = on_change_1.default.target(value);
      return on_change_1.default(value, (path, changedVal, prevVal) => {
        if (this.proxyHandlerReplacement) {
          this.proxyHandlerReplacement(path, changedVal, prevVal);
        } else this.proxyHandler(path, changedVal, prevVal);
      }, {
        isShallow: this.isShallow
      });
    }

    return value;
  }

  shouldUpdateNsStorage() {
    if (!this.saveInLocalStorage || !environment_1.isBrowser()) return false;
    const stringKey = this.property.toString();
    const keyShouldBeUpdated = metadata_1.getMetadata(this.object, "keyShouldBeUpdated") || {};
    if (keyShouldBeUpdated[stringKey]) return true;

    if (util_1.isFunction(this.object.getNamespacedStorage) && this.object.getNamespacedStorage(stringKey) === undefined) {
      metadata_1.defineMetadata(this.object, "keyShouldBeUpdated", Object.assign(keyShouldBeUpdated, {
        [stringKey]: true
      }));
      return true;
    }

    return Boolean(metadata_1.getMetadata(this.object, "constructionComplete"));
  }

}

exports.Property = Property;

/***/ }),

/***/ "./source/app/lib/Watched.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");

const Modification_1 = __webpack_require__("./source/app/lib/Modification.ts");

const util_1 = __webpack_require__("./source/app/utils/util.ts");

const on_change_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/on-change/index.js"));

const clone_deep_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/clone-deep/index.js"));

class Watched {
  constructor(object, property, params) {
    this.isShallow = true;
    this.isInitialized = false;
    this.object = object;
    this.property = property;
    const capitalizedProp = util_1.ucFirst(property);
    const onInitFunc = `on${capitalizedProp}Init`;
    const onChangeFunc = `on${capitalizedProp}Change`;
    const onAddFunc = `on${capitalizedProp}Add`;
    const onRemoveFunc = `on${capitalizedProp}Remove`;
    this.onInit = params ? params.onInit || onInitFunc : onInitFunc;
    this.onChange = params ? params.onChange || onChangeFunc : onChangeFunc;
    this.onAdd = params ? params.onAdd || onAddFunc : onAddFunc;
    this.onRemove = params ? params.onRemove || onRemoveFunc : onRemoveFunc;
    this.isShallow = params && typeof params.isShallow === "boolean" ? params.isShallow : this.isShallow;
  }

  setValue(value) {
    if (!this.shouldDoSetValue(value)) return;
    const oldVal = clone_deep_1.default(this.ownValue);
    let valueToPass;

    if (value instanceof Modification_1.Modification) {
      valueToPass = value.valueOf();
    } else valueToPass = value;

    let useValue = false;

    if (value instanceof Modification_1.Modification) {
      value.setValue(valueToPass);
      useValue = true;
    }

    const valueToSet = useValue ? value : valueToPass;

    if (this.subObject) {
      this.subObject.setValue(valueToSet);
      this.ownValue = util_1.getProxyTarget(this.subObject.valueOf());
    } else {
      valueToPass = this.proxyfyValue(valueToPass);
      this.value = valueToPass;
      this.ownValue = util_1.getProxyTarget(valueToPass);
    }

    const idxStructObj = this.object;
    if (util_1.isFunction(idxStructObj[this.onChange]) && this.isInitialized) idxStructObj[this.onChange](oldVal);
    if (util_1.isFunction(idxStructObj[this.onInit]) && !this.isInitialized) idxStructObj[this.onInit](valueToPass);
    this.isInitialized = true;
  }

  valueOf() {
    if (this.subObject) return this.subObject.valueOf();
    return this.value;
  }

  setSubObject(subObject) {
    subObject.proxyHandlerReplacement = this.proxyHandler.bind(this);
    subObject.isShallow = this.isShallow;
    this.subObject = subObject;
  }

  proxyHandler(path, changedVal, prevVal) {
    if (this.subObject) this.subObject.proxyHandler(path, changedVal, prevVal);
    const newKeys = changedVal ? Object.keys(changedVal) : [];
    const oldKeys = prevVal ? Object.keys(prevVal) : [];
    const newLen = newKeys.length;
    const oldLen = oldKeys.length;
    this.caseDetectExec({
      len1: newLen,
      len2: oldLen,
      func: this.onAdd,
      keys1: newKeys,
      keys2: oldKeys,
      changedVal,
      path
    });
    this.caseDetectExec({
      len1: oldLen,
      len2: newLen,
      func: this.onRemove,
      keys1: oldKeys,
      keys2: newKeys,
      changedVal,
      path
    });

    if (newLen === oldLen && this.onChange in this && this.isInitialized) {
      this.object[this.onChange](changedVal, path);
    }
  }

  shouldDoSetValue(value, skipGuard = false) {
    if (this.subObject) {
      return this.subObject.shouldDoSetValue(value, skipGuard);
    } else return value !== this.ownValue;
  }

  proxyfyValue(value) {
    if (value instanceof Array || util_1.isObject(value) && !value.isBDOModel) {
      value = on_change_1.default.target(value);
      return on_change_1.default(value, (path, changedValue, previousValue) => {
        this.proxyHandler(path, changedValue, previousValue);
      }, {
        isShallow: this.isShallow
      });
    }

    return value;
  }

  caseDetectExec(cdParams) {
    if (cdParams.len1 > cdParams.len2 && cdParams.func in this.object) {
      for (const modified of cdParams.keys1) {
        if (!cdParams.keys2.includes(modified)) {
          this.object[cdParams.func](cdParams.changedVal[modified], cdParams.path);
          break;
        }
      }
    }
  }

}

exports.Watched = Watched;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQmFzZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQ2xpZW50TW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9DbGllbnRSb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0NvbmZpZ01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9EYXRhYmFzZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvbGliL0F0dHJpYnV0ZS50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9saWIvQkRPQ29uZmlnTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9saWIvQkRPRGF0YWJhc2VNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uLi9zb3VyY2UvYXBwL2xpYi9CRE9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvbGliL0JET01hcENhY2hlLnRzIiwid2VicGFjazovLy8uLi9zb3VyY2UvYXBwL2xpYi9CRE9Nb2RlbC50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9saWIvQkRPUm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvbGliL0Jhc2VDb25zdHJ1Y3Rvci50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9saWIvQmluZGluZy50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9saWIvRXJyb3JzLnRzIiwid2VicGFjazovLy8uLi9zb3VyY2UvYXBwL2xpYi9GaWVsZC50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9saWIvTW9kZWxSZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9saWIvTW9kaWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uLi9zb3VyY2UvYXBwL2xpYi9Qcm9wZXJ0eS50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9saWIvV2F0Y2hlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQVlNLFNBQVUsb0JBQVYsQ0FBdUUsZUFBdkUsRUFBNkY7OztBQVEvRixRQUFlLGFBQWYsU0FBcUMsZUFBckMsQ0FBb0Q7QUF3UWhELGdCQUFZLEdBQUcsSUFBZixFQUEwQjtBQUN0QixZQUFNLEdBQUcsSUFBVDtBQTdMZ0IsZ0JBQWEsS0FBSyxnQkFBTCxFQUFiO0FBUVEsNkJBQTJCLElBQTNCO0FBU0EsdUJBQW9CLE1BQU0sQ0FBQyxjQUFQLENBQXNCLEtBQUssV0FBM0IsRUFBd0MsSUFBNUQ7QUFVNkIsNEJBQW9DLDBCQUFwQztBQW1LeEQ7O0FBcE9ELFFBQVcsVUFBWCxHQUFxQjtBQUNqQixZQUFNLEtBQUssR0FBRyxJQUFJLEdBQUosRUFBZDtBQUNBLFlBQU0sVUFBVSxHQUFHLHVFQUFXLENBQUMsSUFBRCxFQUFPLG1CQUFQLENBQTlCOztBQUNBLFVBQUksVUFBSixFQUFnQjtBQUNaLGFBQUssTUFBTSxJQUFYLElBQW1CLFVBQVUsQ0FBQyxJQUFYLEVBQW5CLEVBQXNDO0FBQ2xDLGVBQUssQ0FBQyxHQUFOLENBQVUsSUFBSSxDQUFDLFFBQUwsRUFBVixFQUEyQiwrRUFBbUIsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUE5QztBQUNIO0FBQ0o7O0FBQ0QsYUFBTyxLQUFQO0FBQ0g7O0FBVUQsUUFBVyxJQUFYLEdBQWU7QUFDWCxZQUFNLElBQUksR0FBb0MsRUFBOUM7QUFDQSxVQUFJLENBQUMsS0FB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QUE1QixFQUFrRSxRQUFRLENBQUMsSUFBM0U7QUFDTjtBQUNIO0FBQ0o7QUFDSjtBQUNKOztBQTVSZTs7QUFBcEIsMEIiLCJmaWxlIjoibGliLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG5pbXBvcnQgeyBUZW1wbGF0ZSwgcmVuZGVyU3RyaW5nIH0gZnJvbSAnbnVuanVja3MnO1xuaW1wb3J0IHsgUHJvcGVydGllcyB9IGZyb20gXCJjc3N0eXBlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgYXR0cmlidXRlIH0gZnJvbSAnfmJkby91dGlscy9kZWNvcmF0b3JzJztcbmltcG9ydCB7IGdldE1ldGFkYXRhLCBnZXRXaWxkY2FyZE1ldGFkYXRhIH0gZnJvbSBcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIjtcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tIFwifmJkby9saWIvQmluZGluZ1wiO1xuaW1wb3J0IHsgUHJvcGVydHkgfSBmcm9tIFwifmJkby9saWIvUHJvcGVydHlcIjtcbmltcG9ydCB7IGdldE5hbWVzcGFjZWRTdG9yYWdlLCBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSwgZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlIH0gZnJvbSBcIn5jbGllbnQvdXRpbHMvdXRpbFwiO1xuaW1wb3J0IHsgY29uc3RydWN0VHlwZU9mSFRNTEF0dHJpYnV0ZSwgaXNQcmltaXRpdmUsIGlzU3RyaW5nLCBpc09iamVjdCwgcGFzY2FsQ2FzZTJrZWJhYkNhc2UgfSBmcm9tICd+YmRvL3V0aWxzL3V0aWwnO1xuaW1wb3J0IHsgaXNDb21wb25lbnQgfSBmcm9tIFwifmJkby91dGlscy9mcmFtZXdvcmtcIjtcblxuZXhwb3J0IHR5cGUgUG9zaXRpb24gPSBcImFmdGVyXCIgfCBcImJlZm9yZVwiIHwgXCJyZXBsYWNlXCIgfCBcImZpcnN0XCIgfCBcImxhc3RcIiB8IG51bWJlcjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IEJhc2VDb21wb25lbnQgYmFzZWQgb24gdGhlIEhUTUxUeXBlRWxlbWVudFxuICpcbiAqIEBleHBvcnRcbiAqIEB0ZW1wbGF0ZSBUQmFzZSBBbiBpbnRlcmZhY2Ugd2hpY2ggaXMgZGVyaXZlZCBmcm9tIEhUTUxFbGVtZW50XG4gKiBAcGFyYW0ge1RCYXNlfSBIVE1MVHlwZUVsZW1lbnQgRGVyaXZlZCBjbGFzcyBmcm9tIEhUTUxFbGVtZW50XG4gKiBAcmV0dXJucyBUaGUgQmFzZUNvbXBvbmVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gQmFzZUNvbXBvbmVudEZhY3Rvcnk8VEJhc2UgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxIVE1MRWxlbWVudD4+KEhUTUxUeXBlRWxlbWVudDogVEJhc2UpIHtcblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGVzIGJhc2UgZnVuY3Rpb25hbGl0eSBmb3IgZXZlcnkgY29tcG9uZW50LCBtYW5hZ2VzIGFuZCByZWdpc3RlcnMgdGhlbVxuICAgICAqXG4gICAgICogQGNsYXNzIEJhc2VDb21wb25lbnRcbiAgICAgKiBAZXh0ZW5kcyB7SFRNTFR5cGVFbGVtZW50fVxuICAgICAqL1xuICAgIGFic3RyYWN0IGNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBIVE1MVHlwZUVsZW1lbnQge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZXRlcm1pbmVzIHdldGhlciB0aGlzIGNvbXBvbmVudCBleHRlbmRzIGEgbmF0aXZlIGVsZW1lbnQgd2hpY2hcbiAgICAgICAgICogY291bGQgbm90IGJlIGRlZmluZWQgYXMgYSBjdXN0b20gZWxlbWVudCBpbiBhIGRpcmVjdCB3YXkgbGlrZSB0aGVcbiAgICAgICAgICogSFRNTEFuY2hvckVsZW1lbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHR5cGUgeyhzdHJpbmcgfCBudWxsKX1cbiAgICAgICAgICogQG1lbWJlcm9mIEJhc2VDb21wb25lbnRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgZXh0ZW5kcz86IHN0cmluZztcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHN0YXRpYyB2ZXJzaW9uIG9mIHRoZSBiYXNlIGNvbXBvbmVudCBpZGVudGlmaWVyXG4gICAgICAgICAqXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqIEBtZW1iZXJvZiBCYXNlQ29tcG9uZW50XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGlzQmFzZUNvbXBvbmVudDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBzZWUgSUJhc2VDb25zdHJ1Y3RvckN0b3IuaXNQcm9jZWR1cmFsQ29tcG9uZW50Q29uc3RydWN0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqIEBtZW1iZXJvZiBCYXNlQ29tcG9uZW50XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGlzUHJvY2VkdXJhbENvbXBvbmVudENvbnN0cnVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHaXZlcyBhY2Nlc3MgdG8gdGhlIHByb3BlcnRpZXMgc2ltaWxhciB0byBlbGVtZW50LmF0dHJpYnV0ZXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqIEB0eXBlIHtNYXA8c3RyaW5nLCBQcm9wZXJ0eTx0aGlzPj59XG4gICAgICAgICAqIEBtZW1iZXJvZiBCYXNlQ29tcG9uZW50XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0IHByb3BlcnRpZXMoKTogTWFwPHN0cmluZywgUHJvcGVydHk8dGhpcz4+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gbmV3IE1hcDxzdHJpbmcsIFByb3BlcnR5PHRoaXM+PigpO1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IGdldE1ldGFkYXRhKHRoaXMsIFwiZGVmaW5lZFByb3BlcnRpZXNcIik7XG4gICAgICAgICAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBvZiBwcm9wZXJ0aWVzLmtleXMoKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5zZXQocHJvcC50b1N0cmluZygpLCBnZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMsIHByb3ApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogdGhpcyBjb250YWlucyBhbGwgSFRNTEVsZW1lbnRzIHdpdGggYSByZWYgYXR0cmlidXRlIHRvIGdpdmUgZmFzdFxuICAgICAgICAgKiBhY2Nlc3MgdG8gdGhpcyBlbGVtZW50IHdpdGhvdXQgY29uZmxpY3RpbmcgaWRzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmVhZG9ubHlcbiAgICAgICAgICogQHR5cGUge0luZGV4U3RydWN0dXJlPHN0cmluZywgRWxlbWVudD59XG4gICAgICAgICAqIEBtZW1iZXJvZiBCYXNlQ29tcG9uZW50XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0IHJlZnMoKSB7XG4gICAgICAgICAgICBjb25zdCByZWZzOiBJbmRleFN0cnVjdHVyZTxzdHJpbmcsIEVsZW1lbnQ+ID0ge307XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hhZG93Um9vdCkgcmV0dXJuIHJlZnM7XG4gICAgICAgICAgICBjb25zdCByZWZFbGVtZW50cyA9IEFycmF5LmZyb20odGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbcmVmXVwiKSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlZkVsZW1lbnQgb2YgcmVmRWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZOYW1lID0gcmVmRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJyZWZcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFyZWZOYW1lKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiAocmVmTmFtZSBpbiByZWZzKSB0aHJvdyBuZXcgRXJyb3IoYHJlZiAke3JlZk5hbWV9IGFscmVhZHkgZXhpc3RzYCk7XG4gICAgICAgICAgICAgICAgcmVmc1tyZWZOYW1lXSA9IHJlZkVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVmcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUbyBlbnN1cmUgdGhhdCBldmVyeSBjb21wb25lbnQgaGFzIGEgdW5pcXVlIElEIGF0dHJpYnV0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAbWVtYmVyb2YgQmFzZUNvbXBvbmVudFxuICAgICAgICAgKi9cbiAgICAgICAgQGF0dHJpYnV0ZSgpIHB1YmxpYyBpZDogc3RyaW5nID0gdGhpcy5nZW5lcmF0ZVVuaXF1ZUlEKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgaXMgZm9yIGJldHRlciBpZGVudGlmaWNhdGlvbiBvZiBiYXNlIGNvbXBvbmVudHMgYW5kIGluc3RhbmNlIGNoZWNrXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKiBAbWVtYmVyb2YgQmFzZUNvbXBvbmVudFxuICAgICAgICAgKi9cbiAgICAgICAgQHByb3BlcnR5KCkgcHVibGljIHJlYWRvbmx5IGlzQmFzZUNvbXBvbmVudDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlcHJlc2VudHMgdGhlIGNvbnN0cnVjdG9ycyBuYW1lLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEBtZW1iZXJvZiBCRE9Nb2RlbFxuICAgICAgICAgKi9cbiAgICAgICAgQHByb3BlcnR5KCkgcHVibGljIHJlYWRvbmx5IGNsYXNzTmFtZTogc3RyaW5nID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMuY29uc3RydWN0b3IpLm5hbWU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluZXMgdGhlIHRlbXBsYXRlIG9mIHRoZSBvZiB0aGUgY29tcG9uZW50LlxuICAgICAgICAgKiBNdXN0IGhhdmUgZXhhY3RseSBvbmUgcm9vdCBub2RlIGFuZCBjYW4gYmUgYSBzdHJpbmcgb3IgYSBUZW1wbGF0ZVxuICAgICAgICAgKiBmb3IgZS5nLiByZXF1aXJlKFwiLi9wYXRoL3RvL3RlbXBsYXRlLm5qa1wiKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7KHN0cmluZyB8IFRlbXBsYXRlKX1cbiAgICAgICAgICogQG1lbWJlcm9mIEJhc2VDb21wb25lbnRcbiAgICAgICAgICovXG4gICAgICAgIEBwcm9wZXJ0eSh7IGRpc2FibGVUeXBlR3VhcmQ6IHRydWUgfSkgcHJvdGVjdGVkIHJlYWRvbmx5IHRlbXBsYXRlU3RyaW5nOiBzdHJpbmcgfCBUZW1wbGF0ZSA9ICc8ZGl2PjxzbG90Pjwvc2xvdD48L2Rpdj4nO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBwYXJlbnQgY29tcG9uZW50IChub3Qgbm9ybWFsIEhUTUxFbGVtZW50KVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmVhZG9ubHlcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAcmV0dXJucyB7KEJhc2VDb21wb25lbnQgfCBudWxsKX1cbiAgICAgICAgICogQG1lbWJlcm9mIEJhc2VDb21wb25lbnRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXQgcGFyZW50Q29tcG9uZW50KCk6IEJhc2VDb21wb25lbnQgfCBudWxsIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudDogRWxlbWVudCA9IHRoaXM7XG4gICAgICAgICAgICBsZXQgcGFyZW50Q29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHdoaWxlICghcGFyZW50Q29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm9vdE5vZGUgPSBjdXJyZW50RWxlbWVudC5nZXRSb290Tm9kZSgpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJlbnRFbGVtZW50OiBFbGVtZW50IHwgbnVsbCA9IGN1cnJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRFbGVtZW50ICYmIHJvb3ROb2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdCkgcGFyZW50RWxlbWVudCA9IHJvb3ROb2RlLmhvc3Q7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRFbGVtZW50KSBicmVhaztcbiAgICAgICAgICAgICAgICBpZiAoaXNDb21wb25lbnQ8QmFzZUNvbXBvbmVudD4ocGFyZW50RWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29tcG9uZW50ID0gcGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGN1cnJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRDb21wb25lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhbGwgY2hpbGQgY29tcG9uZW50cyBleGNsdWRpbmcgbm9ybWFsIEhUTUxFbGVtZW50c1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcmVhZG9ubHlcbiAgICAgICAgICogQHR5cGUge0Jhc2VDb21wb25lbnRbXX1cbiAgICAgICAgICogQG1lbWJlcm9mIEJhc2VDb21wb25lbnRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXQgY2hpbGRDb21wb25lbnRzKCk6IEJhc2VDb21wb25lbnRbXSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IEFycmF5LmZyb20odGhpcy5zaGFkb3dSb290Py5jaGlsZHJlbiA/PyBbXSkuY29uY2F0KEFycmF5LmZyb20odGhpcy5jaGlsZHJlbikpO1xuICAgICAgICAgICAgY29uc3QgY2hpbGRDb21wb25lbnRzOiBCYXNlQ29tcG9uZW50W10gPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNDb21wb25lbnQ8QmFzZUNvbXBvbmVudD4oY2hpbGQpKSBjaGlsZENvbXBvbmVudHMucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRDb21wb25lbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIHdoaWNoIGlzIGEgY29tcG9uZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKiBAdHlwZSB7KEJhc2VDb21wb25lbnQgfCBudWxsKX1cbiAgICAgICAgICogQG1lbWJlcm9mIEJhc2VDb21wb25lbnRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXQgZmlyc3RDb21wb25lbnRDaGlsZCgpOiBCYXNlQ29tcG9uZW50IHwgbnVsbCB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IEFycmF5LmZyb20odGhpcy5zaGFkb3dSb290Py5jaGlsZHJlbiA/PyBbXSkuY29uY2F0KEFycmF5LmZyb20odGhpcy5jaGlsZHJlbikpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGlmIChpc0NvbXBvbmVudDxCYXNlQ29tcG9uZW50PihjaGlsZCkpIHJldHVybiBjaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGxhc3QgY2hpbGQgd2hpY2ggaXMgYSBjb21wb25lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqIEB0eXBlIHsoQmFzZUNvbXBvbmVudCB8IG51bGwpfVxuICAgICAgICAgKiBAbWVtYmVyb2YgQmFzZUNvbXBvbmVudFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldCBsYXN0Q29tcG9uZW50Q2hpbGQoKTogQmFzZUNvbXBvbmVudCB8IG51bGwge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRDaGlsZCA9IHRoaXMubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNDb21wb25lbnQ8QmFzZUNvbXBvbmVudD4oY3VycmVudENoaWxkKSkgcmV0dXJuIGN1cnJlbnRDaGlsZDtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2hpbGQgPSBjdXJyZW50Q2hpbGQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRDaGlsZCkgY3VycmVudENoaWxkID0gdGhpcy5zaGFkb3dSb290Py5maXJzdEVsZW1lbnRDaGlsZCA/PyBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbmV4dCBzaWJsaW5nIHdoaWNoIGlzIGEgY29tcG9uZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKiBAdHlwZSB7KEJhc2VDb21wb25lbnQgfCBudWxsKX1cbiAgICAgICAgICogQG1lbWJlcm9mIEJhc2VDb21wb25lbnRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXQgbmV4dENvbXBvbmVudFNpYmxpbmcoKTogQmFzZUNvbXBvbmVudCB8IG51bGwge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRFbGVtZW50OiBFbGVtZW50ID0gdGhpcztcbiAgICAgICAgICAgIGxldCBuZXh0Q29tcG9uZW50U2libGluZyA9IG51bGw7XG4gICAgICAgICAgICB3aGlsZSAoIW5leHRDb21wb25lbnRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm9vdE5vZGUgPSBjdXJyZW50RWxlbWVudC5nZXRSb290Tm9kZSgpO1xuICAgICAgICAgICAgICAgIGxldCBuZXh0RWxlbWVudFNpYmxpbmcgPSBjdXJyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgaWYgKCFuZXh0RWxlbWVudFNpYmxpbmcgJiYgcm9vdE5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290KSBuZXh0RWxlbWVudFNpYmxpbmcgPSByb290Tm9kZS5ob3N0LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgICAgIGlmICghbmV4dEVsZW1lbnRTaWJsaW5nKSBicmVhaztcbiAgICAgICAgICAgICAgICBpZiAoaXNDb21wb25lbnQ8QmFzZUNvbXBvbmVudD4obmV4dEVsZW1lbnRTaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0Q29tcG9uZW50U2libGluZyA9IG5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGN1cnJlbnRFbGVtZW50ID0gbmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5leHRDb21wb25lbnRTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIHByZXZpb3VzIHNpYmxpbmcgd2hpY2ggaXMgYSBjb21wb25lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqIEB0eXBlIHsoQmFzZUNvbXBvbmVudCB8IG51bGwpfVxuICAgICAgICAgKiBAbWVtYmVyb2YgQmFzZUNvbXBvbmVudFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldCBwcmV2aW91c0NvbXBvbmVudFNpYmxpbmcoKTogQmFzZUNvbXBvbmVudCB8IG51bGwge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRFbGVtZW50OiBFbGVtZW50ID0gdGhpcztcbiAgICAgICAgICAgIGxldCBwcmV2aW91c0NvbXBvbmVudFNpYmxpbmcgPSBudWxsO1xuICAgICAgICAgICAgd2hpbGUgKCFwcmV2aW91c0NvbXBvbmVudFNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByb290Tm9kZSA9IGN1cnJlbnRFbGVtZW50LmdldFJvb3ROb2RlKCk7XG4gICAgICAgICAgICAgICAgbGV0IHByZXZpb3VzRWxlbWVudFNpYmxpbmcgPSBjdXJyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGlmICghcHJldmlvdXNFbGVtZW50U2libGluZyAmJiByb290Tm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHByZXZpb3VzRWxlbWVudFNpYmxpbmcgPSB0aGlzLnNoYWRvd1Jvb3Q/LmZpcnN0RWxlbWVudENoaWxkID8/IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKCFwcmV2aW91c0VsZW1lbnRTaWJsaW5nKSBicmVhaztcbiAgICAgICAgICAgICAgICBpZiAoaXNDb21wb25lbnQ8QmFzZUNvbXBvbmVudD4ocHJldmlvdXNFbGVtZW50U2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNDb21wb25lbnRTaWJsaW5nID0gcHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGN1cnJlbnRFbGVtZW50ID0gcHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91c0NvbXBvbmVudFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSG9sZHMgYSBsaXN0IG9mIGFsbCBiaW5kaW5ncyB0byBhbGwgbW9kZWxzXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEB0eXBlIHtNYXA8c3RyaW5nLCBCaW5kaW5nPHRoaXMsIERlZk5vbkZ1bmNQcm9wTmFtZXM8dGhpcz4+Pn1cbiAgICAgICAgICogQG1lbWJlcm9mIEJhc2VDb21wb25lbnRcbiAgICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBnZXQgYmluZGluZ3MoKTogTWFwPHN0cmluZywgQmluZGluZzx0aGlzLCBEZWZOb25GdW5jUHJvcE5hbWVzPHRoaXM+Pj4ge1xuICAgICAgICAgICAgY29uc3QgYmluZGluZ3MgPSBnZXRNZXRhZGF0YSh0aGlzLCBcImluaXRpYXRvckJpbmRpbmdcIik7XG4gICAgICAgICAgICByZXR1cm4gYmluZGluZ3MgPyBiaW5kaW5ncyA6IG5ldyBNYXAoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm92aWRlcyB0aGUgcG9zc2liaWxpdHkgdG8gY29uc3RydWN0IGEgY29tcG9uZW50IHByb2dyYW1tYXRpY2FsbHlcbiAgICAgICAgICogd2l0aCByZXNwZWN0aW5nIGRlZmF1bHQgc2V0dGluZ3MuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHRlbXBsYXRlIFRcbiAgICAgICAgICogQHBhcmFtIHtuZXcgKCkgPT4gVH0gdGhpc1xuICAgICAgICAgKiBAcGFyYW0ge0NvbnN0UGFyYW1zPFQ+fSBbcGFyYW1zXVxuICAgICAgICAgKiBAcmV0dXJuc1xuICAgICAgICAgKiBAbWVtYmVyb2YgQmFzZUNvbXBvbmVudFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGU8VCBleHRlbmRzIEJhc2VDb21wb25lbnQ+KHRoaXM6IENvbnN0cnVjdG9yPFQ+LCBwYXJhbXM/OiBDb25zdFBhcmFtczxUPikge1xuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXMgYXMgdW5rbm93biBhcyB0eXBlb2YgQmFzZUNvbXBvbmVudDtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHBhc2NhbENhc2Uya2ViYWJDYXNlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5uYW1lKTtcbiAgICAgICAgICAgIGxldCBpcyA9IHRoYXQuZXh0ZW5kcztcbiAgICAgICAgICAgIGxldCB0YWdOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgICAgICAgaWYgKGlzKSB7XG4gICAgICAgICAgICAgICAgdGFnTmFtZSA9IGlzO1xuICAgICAgICAgICAgICAgIGlzID0gY2xhc3NOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhhdC5pc1Byb2NlZHVyYWxDb21wb25lbnRDb25zdHJ1Y3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgeyBpcyB9KSBhcyB1bmtub3duIGFzIEJhc2VDb21wb25lbnQ7XG4gICAgICAgICAgICB0aGF0LmlzUHJvY2VkdXJhbENvbXBvbmVudENvbnN0cnVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgZWxlbWVudC5pbnZva2VMaWZlQ3ljbGUocGFyYW1zKTtcbiAgICAgICAgICAgIGlmIChpcykgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpc1wiLCBpcywgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBc3NpZ25zIGFsbCBjb25zdCBwYXJhbXMgdG8gdGhlIGN1cnJlbnQgaW5zdGFuY2UgYW5kIGluaXRpYWxpemVzIHRoZSBsaWZlIGN5Y2xlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0ZW1wbGF0ZSBUXG4gICAgICAgICAqIEBwYXJhbSB7Q29uc3RydWN0b3I8VD59IHRoaXNcbiAgICAgICAgICogQHBhcmFtIHtDb25zdFBhcmFtczxUPn0gQ29uc3RQYXJhbXNcbiAgICAgICAgICogQG1lbWJlcm9mIEJhc2VDb21wb25lbnRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpbnZva2VMaWZlQ3ljbGU8VCBleHRlbmRzIEJhc2VDb21wb25lbnQ+KF9Db25zdFBhcmFtcz86IENvbnN0UGFyYW1zPFQ+KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGlzIG5vdCBhIEJhc2VDb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZWUgZG9jIHN0cmluZyBpbiB+Y2xpZW50L3V0aWxzL3V0aWxcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW25zUHJvcF1cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtmb3JjZU5TXVxuICAgICAgICAgKiBAcmV0dXJuc1xuICAgICAgICAgKiBAbWVtYmVyb2YgQ2xpZW50TW9kZWxcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXROYW1lc3BhY2VkU3RvcmFnZShrZXk6IHN0cmluZywgbnNQcm9wPzogc3RyaW5nLCBmb3JjZU5TPzogc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0TmFtZXNwYWNlZFN0b3JhZ2UodGhpcywga2V5LCBuc1Byb3AsIGZvcmNlTlMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlZSBkb2Mgc3RyaW5nIGluIH5jbGllbnQvdXRpbHMvdXRpbFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICAgICAqIEBwYXJhbSB7Kn0gbmV3VmFsXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbnNQcm9wXVxuICAgICAgICAgKiBAcmV0dXJuc1xuICAgICAgICAgKiBAbWVtYmVyb2YgQ2xpZW50TW9kZWxcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZShrZXk6IHN0cmluZywgbmV3VmFsOiBhbnksIG5zUHJvcD86IHN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKHRoaXMsIGtleSwgbmV3VmFsLCBuc1Byb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHNlZSBkb2Mgc3RyaW5nIGluIH5jbGllbnQvdXRpbHMvdXRpbFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbnNQcm9wXVxuICAgICAgICAgKiBAcmV0dXJuc1xuICAgICAgICAgKiBAbWVtYmVyb2YgQ2xpZW50TW9kZWxcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBkZWxldGVGcm9tTmFtZXNwYWNlZFN0b3JhZ2Uoa2V5OiBzdHJpbmcsIG5zUHJvcD86IHN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5zUHJvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQGluaGVyaXRkb2MgU2V0VmFsdWUgaXMgdXNlZCBieSBwcm94eUhhbmRsZXIgdG8gYXZvaWQgc2V0dGluZyBhXG4gICAgICAgICAqIG5ldyB2YWx1ZSBpcyBhbiBvYmplY3QgaGFzIGJlZW4gY2hhbmdlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHF1YWxpZmllZE5hbWVcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAgICAgKiBAbWVtYmVyb2YgQmFzZUNvbXBvbmVudFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldEF0dHJpYnV0ZShxdWFsaWZpZWROYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHNldFZhbHVlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcGVydGllcyAmJiB0aGlzLnByb3BlcnRpZXMuaGFzKHF1YWxpZmllZE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBcIiR7cXVhbGlmaWVkTmFtZX1cIiBjYW4ndCBiZSBzZXQgYXMgYXR0cmlidXRlIGJlY2F1c2UgaXQgaXMgYSBkZWZpbmVkIHByb3BlcnR5YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVUb1NldCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICghaXNQcmltaXRpdmUodmFsdWUpKSB2YWx1ZVRvU2V0ID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL1xcXCIvZywgXCInXCIpO1xuICAgICAgICAgICAgICAgIHN1cGVyLnNldEF0dHJpYnV0ZShxdWFsaWZpZWROYW1lLCB2YWx1ZVRvU2V0KTtcbiAgICAgICAgICAgICAgICB2YWx1ZVRvU2V0ID0gY29uc3RydWN0VHlwZU9mSFRNTEF0dHJpYnV0ZSh0aGlzLCBxdWFsaWZpZWROYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoc2V0VmFsdWUpICg8YW55PnRoaXMpW3F1YWxpZmllZE5hbWVdID0gdmFsdWVUb1NldDtcbiAgICAgICAgICAgIH0gZWxzZSB0aGlzLnJlbW92ZUF0dHJpYnV0ZShxdWFsaWZpZWROYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcXVhbGlmaWVkTmFtZVxuICAgICAgICAgKiBAbWVtYmVyb2YgQmFzZUNvbXBvbmVudFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlbW92ZUF0dHJpYnV0ZShxdWFsaWZpZWROYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMgJiYgdGhpcy5wcm9wZXJ0aWVzLmhhcyhxdWFsaWZpZWROYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgXCIke3F1YWxpZmllZE5hbWV9XCIgY2FuJ3QgYmUgcmVtb3ZlZCBhcyBhdHRyaWJ1dGUgYmVjYXVzZSBpdCBpcyBhIGRlZmluZWQgcHJvcGVydHlgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1cGVyLnJlbW92ZUF0dHJpYnV0ZShxdWFsaWZpZWROYW1lKTtcbiAgICAgICAgICAgICg8YW55PnRoaXMpW3F1YWxpZmllZE5hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIHN0eWxlIG9mIHRoaXMgY29tcG9uZW50IGlmIHRoZSBmaXJzdCBwYXJhbWV0ZXIgaXMgYSBjc3NcbiAgICAgICAgICogYXR0cmlidXRlIG5hbWUuIE90aGVyd2lzZSB0aGUgc3R5bGUgb2YgdGhlIGdpdmVuIGVsZW1lbnQgaXMgc2V0IGlmXG4gICAgICAgICAqIHRoZSBmaXJzdCBwYXJhbWV0ZXIgaXMgYW4gRWxlbWVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHRlbXBsYXRlIFRcbiAgICAgICAgICogQHBhcmFtIHtUfSBrZXlcbiAgICAgICAgICogQHBhcmFtIHtQcm9wZXJ0aWVzW1RdfSB2YWx1ZVxuICAgICAgICAgKiBAbWVtYmVyb2YgQmFzZUNvbXBvbmVudFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldFN0eWxlPFQgZXh0ZW5kcyBrZXlvZiBPbmVPZjxQcm9wZXJ0aWVzPj4oa2V5OiBULCB2YWx1ZTogUHJvcGVydGllc1tUXSk6IHZvaWQ7XG4gICAgICAgIHB1YmxpYyBzZXRTdHlsZTxUIGV4dGVuZHMga2V5b2YgT25lT2Y8UHJvcGVydGllcz4+KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBrZXk6IFQsIHZhbHVlOiBQcm9wZXJ0aWVzW1RdKTogdm9pZDtcbiAgICAgICAgcHVibGljIHNldFN0eWxlKGVsZW1lbnRPck5hbWU6IEhUTUxFbGVtZW50IHwgc3RyaW5nLCBuYW1lT3JWYWx1ZTogc3RyaW5nLCB2YWx1ZT86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICAgICAgbGV0IHZhbHVlVG9Bc3NpZ24gPSBudWxsO1xuICAgICAgICAgICAgaWYgKCEoZWxlbWVudE9yTmFtZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHZhbHVlVG9Bc3NpZ24gPSBuYW1lT3JWYWx1ZTtcbiAgICAgICAgICAgICAgICBuYW1lT3JWYWx1ZSA9IGVsZW1lbnRPck5hbWU7XG4gICAgICAgICAgICAgICAgZWxlbWVudE9yTmFtZSA9IHRoaXM7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlKSB2YWx1ZVRvQXNzaWduID0gdmFsdWU7XG4gICAgICAgICAgICBlbGVtZW50T3JOYW1lLnN0eWxlLnNldFByb3BlcnR5KG5hbWVPclZhbHVlLCB2YWx1ZVRvQXNzaWduKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBzdHlsZSBhdHRyaWJ1dGUgZnJvbSB0aGlzIGNvbXBvbmVudCBpZiB0aGUgZmlyc3RcbiAgICAgICAgICogcGFyYW1ldGVyIGlzIGEgc3RyaW5nIGFuZCByZW1vdmVzIHRoZSBnaXZlbiBzdHlsZSBhdHRyaWJ1dGUgb2YgdGhlXG4gICAgICAgICAqIGdpdmVuIGVsZW1lbnQgaWYgdGhlIGZpcnN0IHBhcmFtZXRlciBpcyBhIEhUTUxFbGVtZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdGVtcGxhdGUgVFxuICAgICAgICAgKiBAcGFyYW0ge1R9IG5hbWVcbiAgICAgICAgICogQG1lbWJlcm9mIEJhc2VDb21wb25lbnRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZW1vdmVTdHlsZTxUIGV4dGVuZHMga2V5b2YgT25lT2Y8UHJvcGVydGllcz4+KG5hbWU6IFQpOiB2b2lkO1xuICAgICAgICBwdWJsaWMgcmVtb3ZlU3R5bGU8VCBleHRlbmRzIGtleW9mIE9uZU9mPFByb3BlcnRpZXM+PihlbGVtZW50OiBIVE1MRWxlbWVudCwgbmFtZTogVCk6IHZvaWQ7XG4gICAgICAgIHB1YmxpYyByZW1vdmVTdHlsZShlbGVtZW50T3JOYW1lOiBIVE1MRWxlbWVudCB8IHN0cmluZywgbmFtZT86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICAgICAgbGV0IHN0eWxlVG9SZW1vdmUgPSBudWxsO1xuICAgICAgICAgICAgaWYgKCEoZWxlbWVudE9yTmFtZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHN0eWxlVG9SZW1vdmUgPSBlbGVtZW50T3JOYW1lO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRPck5hbWUgPSB0aGlzO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuYW1lKSBzdHlsZVRvUmVtb3ZlID0gbmFtZTtcbiAgICAgICAgICAgIGlmIChzdHlsZVRvUmVtb3ZlKSBlbGVtZW50T3JOYW1lLnN0eWxlLnJlbW92ZVByb3BlcnR5KHN0eWxlVG9SZW1vdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcHVibGljIHBsYWNlKHJlZk5vZGU6IEVsZW1lbnQsIG5ld05vZGU6IEVsZW1lbnQgfCBQb3NpdGlvbiwgcG9zaXRpb246IFBvc2l0aW9uKTogdm9pZCB7XG5cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb252ZXJ0cyB0aGUgY3VycmVudCBpbnN0YW5jZSBvZiB0aGlzIHRvIGEganNvbiB3aXRoIHByb3BlcnRpZXMgb25seVxuICAgICAgICAgKiBOT1RFOiBUaGlzIHdpbGwgYmUgdXNlZCBieSBKU09OLnN0cmluZ2lmeSgpIHRvIG1ha2UgYSBzdHJpbmcgb3V0IG9mIHRoaXNcbiAgICAgICAgICogICAgICAgaW5zdGFuY2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zXG4gICAgICAgICAqIEBtZW1iZXJvZiBCYXNlQ29tcG9uZW50XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdG9KU09OKCkge1xuICAgICAgICAgICAgY29uc3QgZGF0YTogSW5kZXhTdHJ1Y3R1cmUgPSB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpc1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtrZXldID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAwLiBUaGlzIGlzIGNhbGxlZCBieSB0aGUgQmFzZUNvbnN0cnVjdG9yIGFzIGEgcGFydCBvZiB0aGUgXCJsaXZlIGN5Y2xlXCJcbiAgICAgICAgICpcbiAgICAgICAgICogQHNlZSBJQmFzZUNvbnN0cnVjdG9yQ3Rvci5yZW5kZXJUZW1wbGF0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBtZW1iZXJvZiBCYXNlQ29tcG9uZW50XG4gICAgICAgICAqL1xuICAgICAgICBwcm90ZWN0ZWQgcmVuZGVyVGVtcGxhdGUoKSB7XG4gICAgICAgICAgICAvLyBSZW5kZXIgdGVtcGxhdGUgb25seSBpZiB0aGlzIGNvbXBvbmVudCBkb2Vzbid0IGV4dGVuZCBhIG5hdGl2ZSBvbmVcbiAgICAgICAgICAgIGlmICghKDxhbnk+dGhpcy5jb25zdHJ1Y3RvcikuZXh0ZW5kcykge1xuICAgICAgICAgICAgICAgIC8vIEF0dGFjaCBhIHNoYWRvdyByb290IHRvIHRoZSBlbGVtZW50LlxuICAgICAgICAgICAgICAgIGxldCBzdHJpbmdUb1BhcnNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoaXNTdHJpbmcodGhpcy50ZW1wbGF0ZVN0cmluZykpIHN0cmluZ1RvUGFyc2UgPSByZW5kZXJTdHJpbmcodGhpcy50ZW1wbGF0ZVN0cmluZywgdGhpcy50b0pTT04oKSk7XG4gICAgICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHRoaXMudGVtcGxhdGVTdHJpbmcpKSBzdHJpbmdUb1BhcnNlID0gKDxUZW1wbGF0ZT50aGlzLnRlbXBsYXRlU3RyaW5nKS5yZW5kZXIodGhpcy50b0pTT04oKSk7XG4gICAgICAgICAgICAgICAgaWYgKHN0cmluZ1RvUGFyc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHN0cmluZ1RvUGFyc2UsICd0ZXh0L2h0bWwnKTtcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93Um9vdC5hcHBlbmRDaGlsZCg8Q2hpbGROb2RlPmRvYy5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAxLiBDYWxsZWQgd2hlbiBhbGwgcHJvdmlkZWQgY29uc3RydWN0b3IgcGFyYW1ldGVycyBhcmUgYXNzaWduZWQgdG9cbiAgICAgICAgICogdGhlaXIgY29ycmVzcG9uZGluZyBwcm9wZXJ0aWVzIC8gYXR0cmlidXRlcy4gQWxzbyBzZXRzIHByZWRlZmluZWRcbiAgICAgICAgICogYXR0cmlidXRlcyBmcm9tIHRoZSBkb20uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQG1lbWJlcm9mIEJhc2VDb21wb25lbnRcbiAgICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RlZENhbGxiYWNrKCk6IHZvaWQgeyB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIDIuIENhbGxlZCB3aGVuIGEgY29tcG9uZW50IGlzIGNvbm5lY3RlZCB3aXRoIHRoZSBkb20uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQG1lbWJlcm9mIEJhc2VDb21wb25lbnRcbiAgICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHsgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAzLiBDYWxsZWQgd2hlbiBhIGNvbXBvbmVudCB3aWxsIGJlIGZpbmFsbHkgcmVtb3ZlZCBmcm9tIHRoZSBkb20uXG4gICAgICAgICAqIHJlbW92ZXMgYWxsIGNvbnRyb2xsZXJzIGFuZCBldmVudCBsaXN0ZW5lcnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQG1lbWJlcm9mIEJhc2VDb21wb25lbnRcbiAgICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHsgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiA0LiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdmVkIHRvIGFub3RoZXIgZG9jdW1lbnQuXG4gICAgICAgICAqIFJlYmluZHMgYWxsIGNvbnRyb2xsZXJzIGFuZCBldmVudCBsaXN0ZW5lcnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQG1lbWJlcm9mIEJhc2VDb21wb25lbnRcbiAgICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBhZG9wdGVkQ2FsbGJhY2soKTogdm9pZCB7IH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5pdGlhbGl6ZXMgdGhlIGdpdmVuIGNvbnRyb2xsZXIgYW5kIHJldHVybnMgaXRzIGluc3RhbmNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQG1lbWJlcm9mIEJhc2VDb21wb25lbnRcbiAgICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBhZGRDb250cm9sbGVyKCk6IHZvaWQgeyB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgdGhlIGdpdmVuIGNvbnRyb2xsZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAbWVtYmVyb2YgQmFzZUNvbXBvbmVudFxuICAgICAgICAgKi9cbiAgICAgICAgcHJvdGVjdGVkIHJlbW92ZUNvbnRyb2xsZXIoKTogdm9pZCB7IH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogR2VuZXJhdGVzIGEgdW5pcXVlIElEIGZvciBlYWNoIHdlYmNvbXBvbmVudCBiYXNlZCBvbiBjbGFzcyBuYW1lIGFuZCBvY2N1cnJlbmNlIHBvc2l0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcmV0dXJuc1xuICAgICAgICAgKiBAbWVtYmVyb2YgQmFzZUNvbXBvbmVudFxuICAgICAgICAgKi9cbiAgICAgICAgcHJpdmF0ZSBnZW5lcmF0ZVVuaXF1ZUlEKCkge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMuY29uc3RydWN0b3IpLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBvY2N1cnJlbmNlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGhpcy50YWdOYW1lKSk7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IG9jY3VycmVuY2VzLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICBsZXQgb2NjdXJyZW5jZSA9IGluZGV4ID49IDAgPyBpbmRleCA6IG9jY3VycmVuY2VzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtjbGFzc05hbWV9XyR7b2NjdXJyZW5jZX1gKSkge1xuICAgICAgICAgICAgICAgIG9jY3VycmVuY2UrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBgJHtjbGFzc05hbWV9XyR7b2NjdXJyZW5jZX1gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEJhc2VDb21wb25lbnQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEJhc2VDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuICAgIGNvbnN0cnVjdGVkQ2FsbGJhY2soKSB7IH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHsgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkgeyB9XG4gICAgYWRvcHRlZENhbGxiYWNrKCkgeyB9XG59XG5leHBvcnRzLkJhc2VDb250cm9sbGVyID0gQmFzZUNvbnRyb2xsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRbUZ6WlVOdmJuUnliMnhzWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyTnNhV1Z1ZEM5MGN5OXNhV0l2UW1GelpVTnZiblJ5YjJ4c1pYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGUFFTeE5RVUZoTEdOQlFXTTdTVUZGZGtJc1owSkJRV2RDTEVOQlFVTTdTVUZUVUN4dFFrRkJiVUlzUzBGQlN5eERRVUZETzBsQlVYcENMR2xDUVVGcFFpeExRVUZMTEVOQlFVTTdTVUZUZGtJc2IwSkJRVzlDTEV0QlFVc3NRMEZCUXp0SlFWTXhRaXhsUVVGbExFdEJRVXNzUTBGQlF6dERRVU5zUXp0QlFYUkRSQ3gzUTBGelEwTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQ2xpZW50TW9kZWxfMTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgQkRPTW9kZWxfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Nb2RlbFwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L3V0aWxzL3V0aWxcIik7XG5jb25zdCBmcmFtZXdvcmtfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2ZyYW1ld29ya1wiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IExvZ2dlcl8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0xvZ2dlclwiKTtcbmNvbnN0IERhdGFiYXNlTWFuYWdlcl8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0RhdGFiYXNlTWFuYWdlclwiKTtcbmNvbnN0IFdhdGNoZWRfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9XYXRjaGVkXCIpO1xuY29uc3QgdXRpbF8yID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IE1vZGVsUmVnaXN0cnlfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Nb2RlbFJlZ2lzdHJ5XCIpO1xuY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcl8xLkxvZ2dlcigpO1xuY29uc3QgZGF0YWJhc2VNYW5hZ2VyID0gRGF0YWJhc2VNYW5hZ2VyXzEuRGF0YWJhc2VNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG5sZXQgQ2xpZW50TW9kZWwgPSBDbGllbnRNb2RlbF8xID0gY2xhc3MgQ2xpZW50TW9kZWwgZXh0ZW5kcyBCRE9Nb2RlbF8xLkJET01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5pc0NsaWVudE1vZGVsID0gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlQnlJRChpZCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBtb2RlbCA9IE1vZGVsUmVnaXN0cnlfMS5Nb2RlbFJlZ2lzdHJ5LmdldEluc3RhbmNlKCkuZ2V0TW9kZWxCeUlkKGlkLCB0aGlzKTtcbiAgICAgICAgICAgIGlmICghbW9kZWwpXG4gICAgICAgICAgICAgICAgbW9kZWwgPSBuZXcgdGhpcygpO1xuICAgICAgICAgICAgY29uc3QgZGF0YUZyb21Mb2NhbERCID0gYXdhaXQgZGF0YWJhc2VNYW5hZ2VyXG4gICAgICAgICAgICAgICAgLmRhdGFiYXNlKG1vZGVsLmRhdGFiYXNlTmFtZSlcbiAgICAgICAgICAgICAgICAuY29sbGVjdGlvbihtb2RlbC5jb2xsZWN0aW9uTmFtZSlcbiAgICAgICAgICAgICAgICAuZ2V0KGlkKTtcbiAgICAgICAgICAgIGlmIChkYXRhRnJvbUxvY2FsREIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwZW5kaW5nUHJvbWlzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhRnJvbUxvY2FsREIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFGcm9tTG9jYWxEQi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RlbEVsZW0gPSBSZWZsZWN0LmdldChtb2RlbCwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrbGFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtID0gZGF0YUZyb21Mb2NhbERCW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29ycmVzcG9uZGluZ0xpc3RMaWtlREIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbEVsZW0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlc3BvbmRpbmdMaXN0TGlrZURCID0gbW9kZWxFbGVtLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIENsaWVudE1vZGVsXzEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5nZXRSZWZlcmVuY2VTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbSBpbnN0YW5jZW9mIEFycmF5ICYmIHV0aWxfMi5kaWZmZXJlbmNlKGNvcnJlc3BvbmRpbmdMaXN0TGlrZURCLCBlbGVtKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwZW5kaW5nSXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZyYW1ld29ya18xLmlzUmVmZXJlbmNlU3RyaW5nKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZQYXJ0cyA9IGl0ZW0uc3BsaXQoXCI6XCIpWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gcmVmUGFydHNbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrbGFzcyA9IHJlcXVpcmUoYC4vLi4vbW9kZWxzLyR7Y2xhc3NOYW1lfS50c2ApW2NsYXNzTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nSXRlbXMucHVzaChrbGFzcy5nZXRJbnN0YW5jZUJ5SUQocmVmUGFydHNbMl0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ1Byb21pc2VzLnB1c2goUHJvbWlzZS5hbGwocGVuZGluZ0l0ZW1zKS50aGVuKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZnJhbWV3b3JrXzEuaXNSZWZlcmVuY2VTdHJpbmcoZWxlbSkgJiYgZWxlbSAhPT0gbW9kZWwuZ2V0UmVmZXJlbmNlU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZQYXJ0cyA9IGVsZW0uc3BsaXQoXCI6XCIpWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHJlZlBhcnRzWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtsYXNzID0gcmVxdWlyZShgLi8uLi9tb2RlbHMvJHtjbGFzc05hbWV9LnRzYClbY2xhc3NOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nUHJvbWlzZXMucHVzaChrbGFzcy5nZXRJbnN0YW5jZUJ5SUQocmVmUGFydHNbMl0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwZW5kaW5nUHJvbWlzZXMpO1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obW9kZWwsIGRhdGFGcm9tTG9jYWxEQik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW1vZGVsLmlkLmluY2x1ZGVzKFwicGVuZGluZ1wiKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShtb2RlbCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlc0J5QXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBNb2RlbFJlZ2lzdHJ5XzEuTW9kZWxSZWdpc3RyeS5nZXRJbnN0YW5jZSgpLmdldE1vZGVsc0J5QXR0cmlidXRlcyhhdHRyaWJ1dGVzKTtcbiAgICB9XG4gICAgZ2V0TmFtZXNwYWNlZFN0b3JhZ2Uoa2V5LCBuc1Byb3AsIGZvcmNlTlMpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxfMS5nZXROYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5zUHJvcCwgZm9yY2VOUyk7XG4gICAgfVxuICAgIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGtleSwgbmV3VmFsLCBuc1Byb3ApIHtcbiAgICAgICAgcmV0dXJuIHV0aWxfMS5zZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5ld1ZhbCwgbnNQcm9wKTtcbiAgICB9XG4gICAgZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlKGtleSwgbnNQcm9wKSB7XG4gICAgICAgIHJldHVybiB1dGlsXzEuZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlKHRoaXMsIGtleSwgbnNQcm9wKTtcbiAgICB9XG4gICAgYXN5bmMgc2F2ZShhdHRyKSB7XG4gICAgICAgIGNvbnN0IGRlZmluZWRBdHRyaWJ1dGVzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLCBcImRlZmluZWRBdHRyaWJ1dGVzXCIpO1xuICAgICAgICBpZiAoIWRlZmluZWRBdHRyaWJ1dGVzIHx8IGF0dHIgJiYgIWRlZmluZWRBdHRyaWJ1dGVzLmhhcyhhdHRyKSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgZGVmaW5lZCBhdHRyaWJ1dGVzXCIpO1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gYXR0ciA/IFthdHRyXSA6IGRlZmluZWRBdHRyaWJ1dGVzLmtleXMoKTtcbiAgICAgICAgY29uc3QgdW5zYXZlZENoYW5nZXMgPSBhd2FpdCB0aGlzLmdldFVuc2F2ZWRDaGFuZ2VzKCk7XG4gICAgICAgIGNvbnN0IHRvU2F2ZSA9IHt9O1xuICAgICAgICBjb25zdCBzZW5kVG9TZXJ2ZXIgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlcykge1xuICAgICAgICAgICAgaWYgKHVuc2F2ZWRDaGFuZ2VzLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJBdHRyID0gYXR0cmlidXRlO1xuICAgICAgICAgICAgICAgIGxldCBwcm94eVZhbCA9IHV0aWxfMi5nZXRQcm94eVRhcmdldCh1bnNhdmVkQ2hhbmdlc1tzdHJBdHRyXSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb3h5VmFsIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJveHlWYWwgPSBwcm94eVZhbC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgQ2xpZW50TW9kZWxfMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmdldFJlZmVyZW5jZVN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxfMi5nZXRQcm94eVRhcmdldChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcm94eVZhbCBpbnN0YW5jZW9mIENsaWVudE1vZGVsXzEpXG4gICAgICAgICAgICAgICAgICAgIHByb3h5VmFsID0gcHJveHlWYWwuZ2V0UmVmZXJlbmNlU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgbGV0IHdpbGRDYXJkTWV0YWRhdGEgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcywgc3RyQXR0cik7XG4gICAgICAgICAgICAgICAgaWYgKHdpbGRDYXJkTWV0YWRhdGEgaW5zdGFuY2VvZiBXYXRjaGVkXzEuV2F0Y2hlZClcbiAgICAgICAgICAgICAgICAgICAgd2lsZENhcmRNZXRhZGF0YSA9IHdpbGRDYXJkTWV0YWRhdGEuc3ViT2JqZWN0O1xuICAgICAgICAgICAgICAgIGlmICghd2lsZENhcmRNZXRhZGF0YS5kb05vdFBlcnNpc3QpXG4gICAgICAgICAgICAgICAgICAgIHRvU2F2ZVtzdHJBdHRyXSA9IHByb3h5VmFsO1xuICAgICAgICAgICAgICAgIGlmICghd2lsZENhcmRNZXRhZGF0YS5ub1NlcnZlckludGVyYWN0aW9uKVxuICAgICAgICAgICAgICAgICAgICBzZW5kVG9TZXJ2ZXJbc3RyQXR0cl0gPSBwcm94eVZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRvU2F2ZSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgZGF0YWJhc2VNYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhYmFzZSh0aGlzLmRhdGFiYXNlTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh0aGlzLmlkLCB0b1NhdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHNlbmRUb1NlcnZlcikubGVuZ3RoKVxuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1Zyhgc2VuZCAke0pTT04uc3RyaW5naWZ5KHNlbmRUb1NlcnZlcil9IHRvIHNlcnZlcmApO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuc2F2ZWRDaGFuZ2VzKTtcbiAgICB9XG4gICAgZGlzY2FyZChfYXR0cikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0VW5zYXZlZENoYW5nZXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb2xsZWN0aW9uTmFtZSlcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIk5vIGNvbGxlY3Rpb25OYW1lIHByb3ZpZGVkXCIpO1xuICAgICAgICBjb25zdCB1bnNhdmVkQ2hhbmdlcyA9IHt9O1xuICAgICAgICBsZXQgZGJDb2xsZWN0aW9uID0gYXdhaXQgZGF0YWJhc2VNYW5hZ2VyLmRhdGFiYXNlKFwiZGVmYXVsdFwiKS5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbk5hbWUpLmdldCh0aGlzLmlkKTtcbiAgICAgICAgY29uc3QgZGVmaW5lZEF0dHJpYnV0ZXMgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMsIFwiZGVmaW5lZEF0dHJpYnV0ZXNcIik7XG4gICAgICAgIGRiQ29sbGVjdGlvbiA9IGRiQ29sbGVjdGlvbiB8fCB7fTtcbiAgICAgICAgaWYgKGRlZmluZWRBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGF0dHIgb2YgZGVmaW5lZEF0dHJpYnV0ZXMua2V5cygpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyQXR0ciA9IGF0dHIudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyVmFsID0gdXRpbF8yLmdldFByb3h5VGFyZ2V0KHRoaXNbYXR0cl0pO1xuICAgICAgICAgICAgICAgIGlmICh1dGlsXzIuaXNBcnJheShhdHRyVmFsKSAmJiB1dGlsXzIuZGlmZmVyZW5jZShhdHRyVmFsLCBkYkNvbGxlY3Rpb25bc3RyQXR0cl0pLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdmVkQ2hhbmdlc1tzdHJBdHRyXSA9IHRoaXNbYXR0cl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHV0aWxfMi5pc09iamVjdChhdHRyVmFsKSAmJiAhdXRpbF8yLmlzRXF1YWwoYXR0clZhbCwgZGJDb2xsZWN0aW9uW3N0ckF0dHJdKSkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdmVkQ2hhbmdlc1tzdHJBdHRyXSA9IHRoaXNbYXR0cl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHV0aWxfMi5pc1ByaW1pdGl2ZShhdHRyVmFsKSAmJiBhdHRyVmFsICE9PSBkYkNvbGxlY3Rpb25bc3RyQXR0cl0pIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXZlZENoYW5nZXNbc3RyQXR0cl0gPSB0aGlzW2F0dHJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuc2F2ZWRDaGFuZ2VzKTtcbiAgICB9XG4gICAgb25UeXBlQ2hlY2tGYWlsKGVycm9yKSB7XG4gICAgICAgIGxvZ2dlci5lcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9XG59O1xuQ2xpZW50TW9kZWwuaXNDbGllbnRNb2RlbCA9IHRydWU7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG5dLCBDbGllbnRNb2RlbC5wcm90b3R5cGUsIFwiaXNDbGllbnRNb2RlbFwiLCB2b2lkIDApO1xuQ2xpZW50TW9kZWwgPSBDbGllbnRNb2RlbF8xID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKClcbl0sIENsaWVudE1vZGVsKTtcbmV4cG9ydHMuQ2xpZW50TW9kZWwgPSBDbGllbnRNb2RlbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyeHBaVzUwVFc5a1pXd3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMk5zYVdWdWRDOTBjeTlzYVdJdlEyeHBaVzUwVFc5a1pXd3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJMSE5FUVVGclJUdEJRVU5zUlN4blJFRkJOa003UVVGRE4wTXNOa05CUVcxSU8wRkJRMjVJTEc5RVFVRjVSRHRCUVVONlJDeHJSRUZCZFVVN1FVRkRka1VzSzBOQlFUUkRPMEZCUXpWRExHbEZRVUU0UkR0QlFVVTVSQ3c0UTBGQk1rTTdRVUZETTBNc01FTkJRWE5ITzBGQlEzUkhMREJFUVVGMVJEdEJRVVYyUkN4TlFVRk5MRTFCUVUwc1IwRkJSeXhKUVVGSkxHVkJRVTBzUlVGQlJTeERRVUZETzBGQlF6VkNMRTFCUVUwc1pVRkJaU3hIUVVGSExHbERRVUZsTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1FVRlhkRVFzU1VGQllTeFhRVUZYTEcxQ1FVRjRRaXhOUVVGaExGZEJRVmtzVTBGQlVTeHRRa0ZCVVR0SlFVRjZRenM3VVVGclFtZERMR3RDUVVGaExFZEJRVmtzU1VGQlNTeERRVUZETzBsQmEwODVSQ3hEUVVGRE8wbEJiRTVWTEUxQlFVMHNRMEZCUXl4bFFVRmxMRU5CUVRKRExFVkJRVmM3VVVGREwwVXNUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJaMElzUzBGQlN5eEZRVUZGTEU5QlFVOHNSVUZCUlN4RlFVRkZPMWxCUTJoRUxFbEJRVWtzUzBGQlN5eEhRVUZITERaQ1FVRmhMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zV1VGQldTeERRVUZETEVWQlFVVXNSVUZCUlN4SlFVRkpMRU5CUVd0Q0xFTkJRVU03V1VGRGFFWXNTVUZCU1N4RFFVRkRMRXRCUVVzN1owSkJRVVVzUzBGQlN5eEhRVUZITEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNN1dVRkRMMElzVFVGQlRTeGxRVUZsTEVkQlFVY3NUVUZCVFN4bFFVRmxPMmxDUVVONFF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJRenRwUWtGRE5VSXNWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU03YVVKQlEyaERMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU5pTEVsQlFVa3NaVUZCWlN4RlFVRkZPMmRDUVVOcVFpeE5RVUZOTEdWQlFXVXNSMEZCZVVJc1JVRkJSU3hEUVVGRE8yZENRVU5xUkN4TFFVRkxMRTFCUVUwc1IwRkJSeXhKUVVGSkxHVkJRV1VzUlVGQlJUdHZRa0ZETDBJc1NVRkJTU3hsUVVGbExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPM2RDUVVOeVF5eE5RVUZOTEZOQlFWTXNSMEZCUnl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0M1FrRkRNVU1zU1VGQlNTeExRVUY1UWl4RFFVRkRPM2RDUVVNNVFpeEpRVUZKTEVsQlFVa3NSMEZCUnl4bFFVRmxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03ZDBKQlEyaERMRWxCUVVrc2RVSkJRWFZDTEVkQlFVY3NSVUZCUlN4RFFVRkRPM2RDUVVWcVF5eEpRVUZKTEZOQlFWTXNXVUZCV1N4TFFVRkxMRVZCUVVVN05FSkJRelZDTEhWQ1FVRjFRaXhIUVVGSExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSVHRuUTBGRE4wTXNTVUZCU1N4SlFVRkpMRmxCUVZrc1lVRkJWenR2UTBGQlJTeFBRVUZQTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUlVGQlJTeERRVUZETzJkRFFVTnNSU3hQUVVGUExFbEJRVWtzUTBGQlF6czBRa0ZEYUVJc1EwRkJReXhEUVVGRExFTkJRVU03ZVVKQlEwNDdkMEpCUTBRc1NVRkJTU3hKUVVGSkxGbEJRVmtzUzBGQlN5eEpRVUZKTEdsQ1FVRlZMRU5CUVVNc2RVSkJRWFZDTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1RVRkJUU3hGUVVGRk96UkNRVU16UlN4TlFVRk5MRmxCUVZrc1IwRkJlVUlzUlVGQlJTeERRVUZET3pSQ1FVTTVReXhMUVVGTExFbEJRVWtzU1VGQlNTeEpRVUZKTEVsQlFVa3NSVUZCUlR0blEwRkRia0lzU1VGQlNTdzJRa0ZCYVVJc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdHZRMEZEZWtJc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRMEZEY0VNc1RVRkJUU3hUUVVGVExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlEUVVNNVFpeExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRMR1ZCUVdVc1UwRkJVeXhMUVVGTExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0dlEwRkRNVVFzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1pVRkJaU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTzNkRFFVTnFSU3hKUVVGSkxFZEJRVWNzVFVGQlRTeERRVUZETzI5RFFVTnNRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJsRFFVTlFPelpDUVVOS096UkNRVU5FTEdWQlFXVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8zbENRVU14UkRzMlFrRkJUU3hKUVVGSkxEWkNRVUZwUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFbEJRVWtzUzBGQlN5eExRVUZMTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzUlVGQlJUczBRa0ZEZGtVc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6czBRa0ZEY0VNc1RVRkJUU3hUUVVGVExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPelJDUVVNNVFpeExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRMR1ZCUVdVc1UwRkJVeXhMUVVGTExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXpzMFFrRkRNVVFzWlVGQlpTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1pVRkJaU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTzJkRFFVTndSU3hKUVVGSkxFZEJRVWNzVFVGQlRTeERRVUZET3pSQ1FVTnNRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzNsQ1FVTlFPM0ZDUVVOS08ybENRVU5LTzJkQ1FVTkVMRTFCUVUwc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXp0blFrRkRia01zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1pVRkJaU3hEUVVGRExFTkJRVU03WVVGRGVrTTdXVUZEUkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRPMmRDUVVGRkxFOUJRVThzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUTNwRUxFOUJRVThzVDBGQlR5eEZRVUZGTEVOQlFVTTdVVUZEY2tJc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFVDeERRVUZETzBsQllVMHNUVUZCVFN4RFFVRkRMSGRDUVVGM1FpeERRVUV5UXl4VlFVRXdRanRSUVVOMlJ5eFBRVUZQTERaQ1FVRmhMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1ZVRkJWU3hEUVVGclFpeERRVUZETzBsQlF6RkdMRU5CUVVNN1NVRlpUU3h2UWtGQmIwSXNRMEZCUXl4SFFVRlhMRVZCUVVVc1RVRkJaU3hGUVVGRkxFOUJRV2RDTzFGQlEzUkZMRTlCUVU4c01rSkJRVzlDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1JVRkJSU3hOUVVGTkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdTVUZETlVRc1EwRkJRenRKUVZsTkxEQkNRVUV3UWl4RFFVRkRMRWRCUVZjc1JVRkJSU3hOUVVGWExFVkJRVVVzVFVGQlpUdFJRVU4yUlN4UFFVRlBMR2xEUVVFd1FpeERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc1RVRkJUU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzBsQlEycEZMRU5CUVVNN1NVRlhUU3d5UWtGQk1rSXNRMEZCUXl4SFFVRlhMRVZCUVVVc1RVRkJaVHRSUVVNelJDeFBRVUZQTEd0RFFVRXlRaXhEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRNVVFzUTBGQlF6dEpRVkZOTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJaME03VVVGRE9VTXNUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3h0UWtGQmJVSXNRMEZCUXl4RFFVRkRPMUZCUTJwRkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETzFsQlFVVXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXcwUWtGQk5FSXNRMEZCUXl4RFFVRkRPMUZCUXpsSExFMUJRVTBzVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZETlVRc1RVRkJUU3hqUVVGakxFZEJRVzFDTEUxQlFVMHNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTEVOQlFVTTdVVUZEZEVVc1RVRkJUU3hOUVVGTkxFZEJRVzFDTEVWQlFVVXNRMEZCUXp0UlFVTnNReXhOUVVGTkxGbEJRVmtzUjBGQmJVSXNSVUZCUlN4RFFVRkRPMUZCUTNoRExFdEJRVXNzVFVGQlRTeFRRVUZUTEVsQlFVa3NWVUZCVlN4RlFVRkZPMWxCUTJoRExFbEJRVWtzWTBGQll5eERRVUZETEdOQlFXTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRuUWtGRE1VTXNUVUZCVFN4UFFVRlBMRWRCUVZjc1UwRkJVeXhEUVVGRE8yZENRVU5zUXl4SlFVRkpMRkZCUVZFc1IwRkJSeXh4UWtGQll5eERRVUZETEdOQlFXTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU4yUkN4SlFVRkpMRkZCUVZFc1dVRkJXU3hMUVVGTExFVkJRVVU3YjBKQlF6TkNMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRVZCUVVVN2QwSkJRemRDTEVsQlFVa3NTVUZCU1N4WlFVRlpMR0ZCUVZjc1JVRkJSVHMwUWtGRE4wSXNUMEZCVHl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNRMEZCUXp0NVFrRkRjRU03ZDBKQlEwUXNUMEZCVHl4eFFrRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzI5Q1FVTm9ReXhEUVVGRExFTkJRVU1zUTBGQlF6dHBRa0ZEVGp0blFrRkRSQ3hKUVVGSkxGRkJRVkVzV1VGQldTeGhRVUZYTzI5Q1FVRkZMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1EwRkJRenRuUWtGRk9VVXNTVUZCU1N4blFrRkJaMElzUjBGQll5dzRRa0ZCYlVJc1EwRkJReXhKUVVGSkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdaMEpCUTNKRkxFbEJRVWtzWjBKQlFXZENMRmxCUVZrc2FVSkJRVTg3YjBKQlFVVXNaMEpCUVdkQ0xFZEJRVWNzWjBKQlFXZENMRU5CUVVNc1UwRkJjMElzUTBGQlF6dG5Ra0ZGY0Vjc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRmxCUVZrN2IwSkJRVVVzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJRenRuUWtGRkwwUXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEcxQ1FVRnRRanR2UWtGQlJTeFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRE8yRkJReTlGTzFOQlEwbzdVVUZEUkN4SlFVRkpPMWxCUTBFc1NVRkJTU3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSVHRuUWtGRE5VSXNUVUZCVFN4bFFVRmxPM0ZDUVVOb1FpeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJRenR4UWtGRE0wSXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU03Y1VKQlF5OUNMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMkZCUTJoRE8xbEJRMFFzU1VGQlNTeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFMUJRVTA3WjBKQlFVVXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNXVUZCV1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8xTkJRM2hITzFGQlFVTXNUMEZCVHl4TFFVRkxMRVZCUVVVN1dVRkRXaXhQUVVGUExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1UwRkRhRU03VVVGRFJDeFBRVUZQTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1kwRkJiVU1zUTBGQlF5eERRVUZETzBsQlEyaEZMRU5CUVVNN1NVRlRUU3hQUVVGUExFTkJRVU1zUzBGQmFVTTdVVUZETlVNc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eDVRa0ZCZVVJc1EwRkJReXhEUVVGRE8wbEJReTlETEVOQlFVTTdTVUZSVFN4TFFVRkxMRU5CUVVNc2FVSkJRV2xDTzFGQlF6RkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll6dFpRVUZGTEU5QlFVOHNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXcwUWtGQk5FSXNRMEZCUXl4RFFVRkRPMUZCUXpsRkxFMUJRVTBzWTBGQll5eEhRVUZ6UWl4RlFVRkZMRU5CUVVNN1VVRkROME1zU1VGQlNTeFpRVUZaTEVkQlFVY3NUVUZCVFN4bFFVRmxMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNeFJ5eE5RVUZOTEdsQ1FVRnBRaXhIUVVGSExITkNRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRzFDUVVGdFFpeERRVUZETEVOQlFVTTdVVUZEYWtVc1dVRkJXU3hIUVVGSExGbEJRVmtzU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEYkVNc1NVRkJTU3hwUWtGQmFVSXNSVUZCUlR0WlFVTnVRaXhMUVVGTExFMUJRVTBzU1VGQlNTeEpRVUZKTEdsQ1FVRnBRaXhEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTzJkQ1FVTjZReXhOUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1owSkJRMmhETEUxQlFVMHNUMEZCVHl4SFFVRkhMSEZDUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRek5ETEVsQlFVa3NZMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxHbENRVUZWTEVOQlFVTXNUMEZCVHl4RlFVRkZMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlR0dlFrRkRkRVFzWTBGQlpTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dHBRa0ZETVVRN2NVSkJRVTBzU1VGQlNTeGxRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZGTEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhGUVVGRk8yOUNRVU55UkN4alFVRmxMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmxDUVVNeFJEdHhRa0ZCVFN4SlFVRkpMR3RDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NUMEZCVHl4TFFVRkxMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJUdHZRa0ZEYWtRc1kwRkJaU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRwUWtGRE1VUTdZVUZEU2p0VFFVTktPMUZCUTBRc1QwRkJUeXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMGxCUXpORExFTkJRVU03U1VGVlV5eGxRVUZsTEVOQlFVTXNTMEZCV1R0UlFVTnNReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRKUVVOb1F5eERRVUZETzBOQlJVb3NRMEZCUVR0QlFURlBNRUlzZVVKQlFXRXNSMEZCV1N4SlFVRkpMRU5CUVVNN1FVRlJla003U1VGQldDeHhRa0ZCVVN4RlFVRkZPenRyUkVGQkswTTdRVUZzUW1wRUxGZEJRVmM3U1VGRWRrSXNORUpCUVdVc1JVRkJSVHRIUVVOTUxGZEJRVmNzUTBGdlVIWkNPMEZCY0ZCWkxHdERRVUZYSW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQkRPUm91dGVfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Sb3V0ZVwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBMb2dnZXJfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9Mb2dnZXJcIik7XG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyXzEuTG9nZ2VyKCk7XG5jbGFzcyBDbGllbnRSb3V0ZSBleHRlbmRzIEJET1JvdXRlXzEuQkRPUm91dGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmlzQ2xpZW50Um91dGUgPSB0cnVlO1xuICAgIH1cbiAgICBnZXQgcm91dGVyKCkge1xuICAgICAgICBjb25zdCByb3V0ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCByb3V0ZSBvZiB0aGlzLnJvdXRlcykge1xuICAgICAgICAgICAgcm91dGVzW2Ake3RoaXMucm91dGVyTmFtZVNwYWNlfS8ke3JvdXRlfWAucmVwbGFjZShcIi8vXCIsIFwiL1wiKV0gPSB0aGlzLmhhbmRsZUdldC5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3V0ZXM7XG4gICAgfVxuICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gc3VwZXIudGVtcGxhdGVQYXJhbXMocGFyYW1zKTtcbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlR2V0KHBhcmFtcykge1xuICAgICAgICBsb2dnZXIubG9nKHV0aWxfMS5tZXJnZShhd2FpdCB0aGlzLnRlbXBsYXRlUGFyYW1zRnJvbVNlcnZlcigpLCBhd2FpdCB0aGlzLnRlbXBsYXRlUGFyYW1zKHBhcmFtcykpKTtcbiAgICB9XG4gICAgYXN5bmMgdGVtcGxhdGVQYXJhbXNGcm9tU2VydmVyKCkge1xuICAgICAgICBsZXQgdXJsVG9Bc2tGb3IgPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgaWYgKCF1cmxUb0Fza0ZvcilcbiAgICAgICAgICAgIHVybFRvQXNrRm9yID0gYC9gO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnWC1HYW1lLUFzLUpTT04nOiAndHJ1ZScgfSk7XG4gICAgICAgIHJldHVybiAoYXdhaXQgZmV0Y2godXJsVG9Bc2tGb3IsIHsgaGVhZGVycyB9KSkuanNvbigpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ2xpZW50Um91dGUgPSBDbGllbnRSb3V0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyeHBaVzUwVW05MWRHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMk5zYVdWdWRDOTBjeTlzYVdJdlEyeHBaVzUwVW05MWRHVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTeG5SRUZCTmtNN1FVRkROME1zTUVOQlFYZERPMEZCUTNoRExDdERRVUUwUXp0QlFVVTFReXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEdWQlFVMHNSVUZCUlN4RFFVRkRPMEZCVlRWQ0xFMUJRV0VzVjBGQldTeFRRVUZSTEcxQ1FVRlJPMGxCUVhwRE96dFJRVkZ2UWl4clFrRkJZU3hIUVVGWkxFbEJRVWtzUTBGQlF6dEpRWE5FYkVRc1EwRkJRenRKUVRsRFJ5eEpRVUZYTEUxQlFVMDdVVUZEWWl4TlFVRk5MRTFCUVUwc1IwRkJjVU1zUlVGQlJTeERRVUZETzFGQlEzQkVMRXRCUVVzc1RVRkJUU3hMUVVGTExFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlR0WlFVTTNRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNaVUZCWlN4SlFVRkpMRXRCUVVzc1JVRkJSU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVNM1JqdFJRVU5FTEU5QlFVOHNUVUZCVFN4RFFVRkRPMGxCUTJ4Q0xFTkJRVU03U1VGWFV5eExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVhOQ08xRkJRMnBFTEU5QlFVOHNTMEZCU3l4RFFVRkRMR05CUVdNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU40UXl4RFFVRkRPMGxCVTFNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZ6UWp0UlFVTTFReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEZsQlFVc3NRMEZCUXl4TlFVRk5MRWxCUVVrc1EwRkJReXgzUWtGQmQwSXNSVUZCUlN4RlFVRkZMRTFCUVUwc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRhRWNzUTBGQlF6dEpRVlZQTEV0QlFVc3NRMEZCUXl4M1FrRkJkMEk3VVVGRGJFTXNTVUZCU1N4WFFVRlhMRWRCUVVjc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF6dFJRVU53UXl4SlFVRkpMRU5CUVVNc1YwRkJWenRaUVVGRkxGZEJRVmNzUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZEY0VNc1RVRkJUU3hQUVVGUExFZEJRVWNzU1VGQlNTeFBRVUZQTEVOQlFVTXNSVUZCUlN4blFrRkJaMElzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpGRUxFOUJRVThzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4WFFVRlhMRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1NVRkRNVVFzUTBGQlF6dERRVU5LTzBGQk9VUkVMR3REUVRoRVF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJET0NvbmZpZ01hbmFnZXJfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Db25maWdNYW5hZ2VyXCIpO1xuY2xhc3MgQ29uZmlnTWFuYWdlciBleHRlbmRzIEJET0NvbmZpZ01hbmFnZXJfMS5CRE9Db25maWdNYW5hZ2VyIHtcbiAgICBzZXQoX2NvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIGxvYWQoX2NvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIGdldENhY2hlKF9jb25maWcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgICBzZXRDYWNoZShfY29uZmlnLCBfdmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29uZmlnTWFuYWdlciA9IENvbmZpZ01hbmFnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMjl1Wm1sblRXRnVZV2RsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyeHBZaTlEYjI1bWFXZE5ZVzVoWjJWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc1owVkJRVFpFTzBGQldUZEVMRTFCUVdFc1lVRkJZeXhUUVVGUkxHMURRVUZuUWp0SlFWTjRReXhIUVVGSExFTkJRVU1zVDBGQlpUdFJRVU4wUWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExIbENRVUY1UWl4RFFVRkRMRU5CUVVNN1NVRkRMME1zUTBGQlF6dEpRVlZUTEVsQlFVa3NRMEZCUXl4UFFVRmxPMUZCUXpGQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU1zUTBGQlF6dEpRVU12UXl4RFFVRkRPMGxCVlZNc1VVRkJVU3hEUVVGRExFOUJRV1U3VVVGRE9VSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4RFFVRkRPMGxCUXk5RExFTkJRVU03U1VGWFV5eFJRVUZSTEVOQlFVTXNUMEZCWlN4RlFVRkZMRTFCUVZjN1VVRkRNME1zVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eERRVUZETzBsQlF5OURMRU5CUVVNN1EwRkRTanRCUVdwRVJDeHpRMEZwUkVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBCRE9EYXRhYmFzZU1hbmFnZXJfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9EYXRhYmFzZU1hbmFnZXJcIik7XG5jb25zdCBsb2NhbGZvcmFnZV8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImxvY2FsZm9yYWdlXCIpKTtcbmNsYXNzIERhdGFiYXNlTWFuYWdlciBleHRlbmRzIEJET0RhdGFiYXNlTWFuYWdlcl8xLkJET0RhdGFiYXNlbWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZGF0YWJhc2VzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghRGF0YWJhc2VNYW5hZ2VyLmluc3RhbmNlKVxuICAgICAgICAgICAgRGF0YWJhc2VNYW5hZ2VyLmluc3RhbmNlID0gbmV3IERhdGFiYXNlTWFuYWdlcigpO1xuICAgICAgICByZXR1cm4gRGF0YWJhc2VNYW5hZ2VyLmluc3RhbmNlO1xuICAgIH1cbiAgICBkYXRhYmFzZShuYW1lKSB7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGFiYXNlID0gbmFtZTtcbiAgICAgICAgaWYgKCF0aGlzLmRhdGFiYXNlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhYmFzZXMuc2V0KG5hbWUsIGxvY2FsZm9yYWdlXzEuZGVmYXVsdC5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBkcml2ZXI6IFtsb2NhbGZvcmFnZV8xLmRlZmF1bHQuSU5ERVhFRERCLCBsb2NhbGZvcmFnZV8xLmRlZmF1bHQuV0VCU1FMXVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRDb2xsZWN0aW9uO1xuICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50R3JhcGg7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRWaWV3O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY29sbGVjdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuY3VycmVudENvbGxlY3Rpb24gPSBgY29sbGVjdGlvbl8ke25hbWV9YDtcbiAgICAgICAgdGhpcy5nZXREYXRhYmFzZSgpLmNvbmZpZyh7IHN0b3JlTmFtZTogdGhpcy5jdXJyZW50Q29sbGVjdGlvbiB9KTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudEdyYXBoO1xuICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50VmlldztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHZpZXcobmFtZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gYHZpZXdfJHtuYW1lfWA7XG4gICAgICAgIHRoaXMuZ2V0RGF0YWJhc2UoKS5jb25maWcoeyBzdG9yZU5hbWU6IHRoaXMuY3VycmVudFZpZXcgfSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRDb2xsZWN0aW9uO1xuICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50R3JhcGg7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBncmFwaChuYW1lKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEdyYXBoID0gYGdyYXBoXyR7bmFtZX1gO1xuICAgICAgICB0aGlzLmdldERhdGFiYXNlKCkuY29uZmlnKHsgc3RvcmVOYW1lOiB0aGlzLmN1cnJlbnRHcmFwaCB9KTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudENvbGxlY3Rpb247XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRWaWV3O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0KGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGFiYXNlKCkuZ2V0SXRlbShpZCk7XG4gICAgfVxuICAgIGluc2VydChpZCwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5zZXRJdGVtKGlkLCB2YWx1ZSk7XG4gICAgfVxuICAgIHVwZGF0ZShpZCwgdmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZ2V0KGlkKSB8fCB7fTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlc3VsdCwgdmFsdWVzKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmluc2VydChpZCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVsZXRlKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGFiYXNlKCkucmVtb3ZlSXRlbShpZCk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhYmFzZSgpLmNsZWFyKCk7XG4gICAgfVxuICAgIGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5sZW5ndGgoKTtcbiAgICB9XG4gICAga2V5KGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGFiYXNlKCkua2V5KGluZGV4KTtcbiAgICB9XG4gICAga2V5cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5rZXlzKCk7XG4gICAgfVxuICAgIGl0ZXJhdGUoaXRlcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5pdGVyYXRlKGl0ZXJhdG9yKTtcbiAgICB9XG4gICAgZ2V0RGF0YWJhc2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50RGF0YWJhc2UpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBEYXRhYmFzZSBjaG9zZW5cIik7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFiYXNlcy5nZXQodGhpcy5jdXJyZW50RGF0YWJhc2UpO1xuICAgIH1cbn1cbmV4cG9ydHMuRGF0YWJhc2VNYW5hZ2VyID0gRGF0YWJhc2VNYW5hZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUkdGMFlXSmhjMlZOWVc1aFoyVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlqYkdsbGJuUXZkSE12YkdsaUwwUmhkR0ZpWVhObFRXRnVZV2RsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZEUVN4dlJVRkJhVVU3UVVGRGFrVXNjMFZCUVhORE8wRkJSWFJETEUxQlFXRXNaVUZCZDBZc1UwRkJVU3gxUTBGQmEwSTdTVUZ0UWpOSU8xRkJRMGtzUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZTU2l4alFVRlRMRWRCUVhkQ0xFbEJRVWtzUjBGQlJ5eEZRVUZyUWl4RFFVRkRPMGxCVTI1RkxFTkJRVU03U1VGUVRTeE5RVUZOTEVOQlFVTXNWMEZCVnp0UlFVTnlRaXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEZGQlFWRTdXVUZCUlN4bFFVRmxMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzWlVGQlpTeEZRVUZGTEVOQlFVTTdVVUZEYUVZc1QwRkJUeXhsUVVGbExFTkJRVU1zVVVGQlVTeERRVUZETzBsQlEzQkRMRU5CUVVNN1NVRk5UU3hSUVVGUkxFTkJRVU1zU1VGQlR6dFJRVU51UWl4SlFVRkpMRU5CUVVNc1pVRkJaU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU0xUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkRkRU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxIRkNRVUZYTEVOQlFVTXNZMEZCWXl4RFFVRkRPMmRDUVVOb1JDeEpRVUZKTEVWQlFVVXNTVUZCU1R0blFrRkRWaXhOUVVGTkxFVkJRVVVzUTBGQlF5eHhRa0ZCVnl4RFFVRkRMRk5CUVZNc1JVRkJSU3h4UWtGQlZ5eERRVUZETEUxQlFVMHNRMEZCUXp0aFFVTjBSQ3hEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5RTzFGQlEwUXNUMEZCVHl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTTdVVUZET1VJc1QwRkJUeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETzFGQlEzcENMRTlCUVU4c1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dFJRVU40UWl4UFFVRlBMRWxCUVVrc1EwRkJRenRKUVVOb1FpeERRVUZETzBsQlJVMHNWVUZCVlN4RFFVRkRMRWxCUVU4N1VVRkRja0lzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhIUVVGTkxHTkJRV01zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEYWtRc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRMnBGTEU5QlFVOHNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJRenRSUVVONlFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRlRUlzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEYUVJc1EwRkJRenRKUVVWTkxFbEJRVWtzUTBGQlF5eEpRVUZQTzFGQlEyWXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJUU3hSUVVGUkxFbEJRVWtzUlVGQlJTeERRVUZETzFGQlEzSkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNN1VVRkRPVUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRPMUZCUTNwQ0xFOUJRVThzU1VGQlNTeERRVUZETzBsQlEyaENMRU5CUVVNN1NVRkZUU3hMUVVGTExFTkJRVU1zU1VGQlR6dFJRVU5vUWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGTkxGTkJRVk1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEZGtNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTFSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJRenRSUVVNNVFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRlRUlzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEYUVJc1EwRkJRenRKUVVWTkxFZEJRVWNzUTBGQlF5eEZRVUZWTzFGQlEycENMRTlCUVU4c1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVNeFF5eERRVUZETzBsQlJVMHNUVUZCVFN4RFFVRkRMRVZCUVZVc1JVRkJSU3hMUVVGclF6dFJRVU40UkN4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMnBFTEVOQlFVTTdTVUZGVFN4TlFVRk5MRU5CUVVNc1JVRkJWU3hGUVVGRkxFMUJRVzFETzFGQlEzcEVMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1JVRkJSVHRaUVVONlF5eEpRVUZKTzJkQ1FVTkJMRTFCUVUwc1RVRkJUU3hIUVVGSExFMUJRVTBzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03WjBKQlEzaERMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMmRDUVVNNVFpeE5RVUZOTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzJkQ1FVTTVRaXhQUVVGUExFVkJRVVVzUTBGQlF6dGhRVU5pTzFsQlFVTXNUMEZCVHl4TFFVRkxMRVZCUVVVN1owSkJRMW9zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMkZCUTJwQ08xRkJRMHdzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEVUN4RFFVRkRPMGxCUlUwc1RVRkJUU3hEUVVGRExFVkJRVlU3VVVGRGNFSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zVlVGQlZTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpkRExFTkJRVU03U1VGRlRTeExRVUZMTzFGQlExSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdTVUZEZEVNc1EwRkJRenRKUVVWTkxFMUJRVTA3VVVGRFZDeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dEpRVU4yUXl4RFFVRkRPMGxCUlUwc1IwRkJSeXhEUVVGRExFdEJRV0U3VVVGRGNFSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNwRExFTkJRVU03U1VGRlRTeEpRVUZKTzFGQlExQXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdTVUZEY2tNc1EwRkJRenRKUVVWTkxFOUJRVThzUTBGQlF5eFJRVUU0Ump0UlFVTjZSeXhQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03U1VGRGFFUXNRMEZCUXp0SlFVVlBMRmRCUVZjN1VVRkRaaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVTdXVUZCUlN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRU5CUVVNN1VVRkRha1VzVDBGQlR5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZuUWl4RFFVRkRPMGxCUTI1RkxFTkJRVU03UTBGRlNqdEJRUzlIUkN3d1EwRXJSME1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJET0xvZ2dlcl8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET0xvZ2dlclwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5sZXQgTG9nZ2VyID0gY2xhc3MgTG9nZ2VyIGV4dGVuZHMgQkRPTG9nZ2VyXzEuQkRPTG9nZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICAgICAgc3VwZXIocGFyYW1zKTtcbiAgICAgICAgdGhpcy5sb2dMZXZlbENvbG9ycyA9IHtcbiAgICAgICAgICAgIGxvZzogJ2NvbG9yOiBncmF5OyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgICAgICAgICAgZGVidWc6ICdjb2xvcjogZ3JlZW47IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICBpbmZvOiAnY29sb3I6ICMwMDgwNkI7IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICB3YXJuOiAnY29sb3I6ICM4MDgwMDA7IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICBlcnJvcjogJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkOydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0SGVhZGVyKGxvZ0xldmVsLCBwcmludEVudiA9ICdjb25zb2xlJykge1xuICAgICAgICBjb25zdCBwcm9jSW5mbyA9IHRoaXMuZ2V0UHJvY0luZm8oKTtcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lKCk7XG4gICAgICAgIGNvbnN0IHVwcGVyTG9nTGV2ZWwgPSBsb2dMZXZlbC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2dQb2ludCA9IHRoaXMuZ2V0TG9nUG9pbnQoKTtcbiAgICAgICAgY29uc3QgcmVzZXRTdHlsZSA9ICdjb2xvcjogYmxhY2s7IGZvbnQtd2VpZ2h0OiBub3JtYWwnO1xuICAgICAgICBjb25zdCBtYWdlbnRhID0gJ2NvbG9yOiAjODAwMDgwOyBmb250LXdlaWdodDogbm9ybWFsJztcbiAgICAgICAgY29uc3QgY3lhbiA9ICdjb2xvcjogIzAwODA2QjsgZm9udC13ZWlnaHQ6IG5vcm1hbCc7XG4gICAgICAgIGlmIChwcmludEVudiA9PT0gJ2NvbnNvbGUnKSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRMb2dMZXZlbCA9IHRoaXMubG9nTGV2ZWxDb2xvcnNbbG9nTGV2ZWxdO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkTG9nUG9pbnQgPSBtYWdlbnRhO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkVGltZSA9IGN5YW47XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRQcm9jSW5mbyA9IG1hZ2VudGE7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIGAlY1slYyR7dXBwZXJMb2dMZXZlbH0gJWMtICVjJHtwcm9jSW5mb30gJWMtICVjJHtjdXJyZW50VGltZX0gJWNhdCAlYyR7bG9nUG9pbnR9JWNdYCxcbiAgICAgICAgICAgICAgICByZXNldFN0eWxlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZExvZ0xldmVsLFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkUHJvY0luZm8sXG4gICAgICAgICAgICAgICAgcmVzZXRTdHlsZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRUaW1lLFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkTG9nUG9pbnQsXG4gICAgICAgICAgICAgICAgcmVzZXRTdHlsZVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYFske3VwcGVyTG9nTGV2ZWx9IC0gJHtwcm9jSW5mb30gLSAke2N1cnJlbnRUaW1lfSAtICR7bG9nUG9pbnR9XWA7XG4gICAgfVxuICAgIHdyaXRlVG9GaWxlKF9sb2dMZXZlbCwgX21lc3NhZ2UpIHtcbiAgICB9XG59O1xuTG9nZ2VyID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgQ29uc3RQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIgJiYgQ29uc3RQYXJhbXMpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdF0pXG5dLCBMb2dnZXIpO1xuZXhwb3J0cy5Mb2dnZXIgPSBMb2dnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lURzluWjJWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOWpiR2xsYm5RdmRITXZiR2xpTDB4dloyZGxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUVzYTBSQlFUWkZPMEZCUXpkRkxITkVRVUYzUkR0QlFWVjRSQ3hKUVVGaExFMUJRVTBzUjBGQmJrSXNUVUZCWVN4TlFVRlBMRk5CUVZFc2NVSkJRVk03U1VGbGFrTXNXVUZCV1N4TlFVRTBRanRSUVVOd1F5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRlVWaXh0UWtGQll5eEhRVUZITzFsQlEzSkNMRWRCUVVjc1JVRkJSU3hwUTBGQmFVTTdXVUZEZEVNc1MwRkJTeXhGUVVGRkxHdERRVUZyUXp0WlFVTjZReXhKUVVGSkxFVkJRVVVzYjBOQlFXOURPMWxCUXpGRExFbEJRVWtzUlVGQlJTeHZRMEZCYjBNN1dVRkRNVU1zUzBGQlN5eEZRVUZGTEdkRFFVRm5RenRUUVVNeFF5eERRVUZETzBsQlNVWXNRMEZCUXp0SlFWZFRMRk5CUVZNc1EwRkJReXhSUVVGdFFpeEZRVUZGTEZkQlFUaENMRk5CUVZNN1VVRkROVVVzVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8xRkJRM0JETEUxQlFVMHNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dFJRVU4yUXl4TlFVRk5MR0ZCUVdFc1IwRkJSeXhSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdVVUZETjBNc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUTNCRExFMUJRVTBzVlVGQlZTeEhRVUZITEcxRFFVRnRReXhEUVVGRE8xRkJRM1pFTEUxQlFVMHNUMEZCVHl4SFFVRkhMSEZEUVVGeFF5eERRVUZETzFGQlEzUkVMRTFCUVUwc1NVRkJTU3hIUVVGSExIRkRRVUZ4UXl4RFFVRkRPMUZCUTI1RUxFbEJRVWtzVVVGQlVTeExRVUZMTEZOQlFWTXNSVUZCUlR0WlFVTjRRaXhOUVVGTkxHbENRVUZwUWl4SFFVRkhMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdXVUZEZUVRc1RVRkJUU3hwUWtGQmFVSXNSMEZCUnl4UFFVRlBMRU5CUVVNN1dVRkRiRU1zVFVGQlRTeGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUXpOQ0xFMUJRVTBzYVVKQlFXbENMRWRCUVVjc1QwRkJUeXhEUVVGRE8xbEJRMnhETEU5QlFVODdaMEpCUTBnc1VVRkJVU3hoUVVGaExGVkJRVlVzVVVGQlVTeFZRVUZWTEZkQlFWY3NWMEZCVnl4UlFVRlJMRXRCUVVzN1owSkJRM0JHTEZWQlFWVTdaMEpCUTFZc2FVSkJRV2xDTzJkQ1FVTnFRaXhWUVVGVk8yZENRVU5XTEdsQ1FVRnBRanRuUWtGRGFrSXNWVUZCVlR0blFrRkRWaXhoUVVGaE8yZENRVU5pTEZWQlFWVTdaMEpCUTFZc2FVSkJRV2xDTzJkQ1FVTnFRaXhWUVVGVk8yRkJRMklzUTBGQlF6dFRRVU5NTzFGQlEwUXNUMEZCVHl4SlFVRkpMR0ZCUVdFc1RVRkJUU3hSUVVGUkxFMUJRVTBzVjBGQlZ5eE5RVUZOTEZGQlFWRXNSMEZCUnl4RFFVRkRPMGxCUXpkRkxFTkJRVU03U1VGVlV5eFhRVUZYTEVOQlFVTXNVMEZCYjBJc1JVRkJSU3hSUVVGaE8wbEJSWHBFTEVOQlFVTTdRMEZEU2l4RFFVRkJPMEZCY0VWWkxFMUJRVTA3U1VGRWJFSXNORUpCUVdVc1JVRkJSVHRwUlVGblFrOHNWMEZCVnl4dlFrRkJXQ3hYUVVGWE8wZEJablpDTEUxQlFVMHNRMEZ2Uld4Q08wRkJjRVZaTEhkQ1FVRk5JbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBQcm9wZXJ0eV8xID0gcmVxdWlyZShcIn5iZG8vbGliL1Byb3BlcnR5XCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuY29uc3QgTW9kaWZpY2F0aW9uXzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kaWZpY2F0aW9uXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IEVycm9yc18xID0gcmVxdWlyZShcIn5iZG8vbGliL0Vycm9yc1wiKTtcbmNvbnN0IE1vZGVsUmVnaXN0cnlfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Nb2RlbFJlZ2lzdHJ5XCIpO1xuY2xhc3MgQXR0cmlidXRlIGV4dGVuZHMgUHJvcGVydHlfMS5Qcm9wZXJ0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSwgcGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCwgcHJvcGVydHksIHBhcmFtcyk7XG4gICAgICAgIHRoaXMuaW5ET01Jbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmF1dG9TYXZlQWxsb3dlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkRG9TZXRWYWx1ZSh2YWx1ZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBvbGRJRDtcbiAgICAgICAgaWYgKHRoaXMub2JqZWN0LmlzQkRPTW9kZWwgJiYgdGhpcy5wcm9wZXJ0eSA9PT0gXCJpZFwiKVxuICAgICAgICAgICAgb2xkSUQgPSB0aGlzLm93blZhbHVlO1xuICAgICAgICB0aGlzLmRvU2V0VmFsdWUodmFsdWUsIHRydWUsIHRydWUpO1xuICAgICAgICBpZiAob2xkSUQpXG4gICAgICAgICAgICBNb2RlbFJlZ2lzdHJ5XzEuTW9kZWxSZWdpc3RyeS5nZXRJbnN0YW5jZSgpLnVwZGF0ZUlEKG9sZElELCB0aGlzLm9iamVjdCk7XG4gICAgICAgIHRoaXMucmVmbGVjdFRvRE9NQXR0cmlidXRlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5kb0F1dG9TYXZlKCk7XG4gICAgfVxuICAgIHByb3h5SGFuZGxlcihfcGF0aCwgX2NoYW5nZWRWYWwsIF9wcmV2VmFsKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuZG9TZXRWYWx1ZSh1dGlsXzEuZ2V0UHJveHlUYXJnZXQodmFsdWUpLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5yZWZsZWN0VG9ET01BdHRyaWJ1dGUodmFsdWUpO1xuICAgICAgICB0aGlzLmRvQXV0b1NhdmUoKTtcbiAgICB9XG4gICAgZ2V0VW5zYXZlZENoYW5nZSgpIHsgfVxuICAgIHNob3VsZERvU2V0VmFsdWUodmFsdWUsIHNraXBHdWFyZCA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChlbnZpcm9ubWVudF8xLmlzQnJvd3NlcigpICYmICF0aGlzLm9iamVjdC5pc0JET01vZGVsICYmICh0aGlzLm9iamVjdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgY29uc3QgY29uc3RydWN0ZWRUeXBlID0gdXRpbF8xLmNvbnN0cnVjdFR5cGVPZkhUTUxBdHRyaWJ1dGUodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmluRE9NSW5pdGlhbGl6ZWQgJiYgdGhpcy5vYmplY3QuZ2V0QXR0cmlidXRlKHRoaXMucHJvcGVydHkpICYmIHZhbHVlICE9PSBjb25zdHJ1Y3RlZFR5cGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKGNvbnN0cnVjdGVkVHlwZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhKHZhbHVlID09PSB0aGlzLm93blZhbHVlIHx8ICFza2lwR3VhcmQgJiYgIXRoaXMuZGlzYWJsZVR5cGVHdWFyZCAmJiAhdGhpcy50eXBlR3VhcmQodmFsdWUpKTtcbiAgICB9XG4gICAgcmVmbGVjdFRvRE9NQXR0cmlidXRlKHZhbHVlKSB7XG4gICAgICAgIGlmICghZW52aXJvbm1lbnRfMS5pc0Jyb3dzZXIoKSB8fCAhKHRoaXMub2JqZWN0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSB0aGlzLnByb3BlcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IHRoaXMub2JqZWN0LmdldEF0dHJpYnV0ZShzdHJpbmdLZXkpO1xuICAgICAgICBsZXQgc2V0QXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgbGV0IHBUYXJnZXQ7XG4gICAgICAgIGxldCB2YWx1ZVRvUGFzcyA9IHZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNb2RpZmljYXRpb25fMS5Nb2RpZmljYXRpb24pXG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgaWYgKCF0aGlzLmluRE9NSW5pdGlhbGl6ZWQgJiYgYXR0clZhbHVlKSB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBwVGFyZ2V0ID0gdXRpbF8xLmdldFByb3h5VGFyZ2V0KHZhbHVlVG9QYXNzKTtcbiAgICAgICAgdGhpcy5pbkRPTUluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHNldEF0dHJpYnV0ZSAmJiBhdHRyVmFsdWUgIT09IHBUYXJnZXQgJiYgYXR0clZhbHVlICE9PSBKU09OLnN0cmluZ2lmeShwVGFyZ2V0KS5yZXBsYWNlKC9cXFwiL2csIFwiJ1wiKSkge1xuICAgICAgICAgICAgdGhpcy5vYmplY3Quc2V0QXR0cmlidXRlKHN0cmluZ0tleSwgcFRhcmdldCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRvQXV0b1NhdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9TYXZlICYmIHRoaXMuZG9Ob3RQZXJzaXN0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3JzXzEuQ29uZmlndXJhdGlvbkVycm9yKFwiWW91IGhhdmUgdHVybmVkIG9uIGF1dG9zYXZlIGJ1dCBhdCB0aGUgc2FtZSB0aW1lIGl0IGlzIGZvcmJpZGRlbiB0byBwZXJzaXN0IHRoZSB2YWx1ZSFcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmF1dG9TYXZlQWxsb3dlZCkge1xuICAgICAgICAgICAgdGhpcy5hdXRvU2F2ZUFsbG93ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5hdXRvU2F2ZSB8fCAhdXRpbF8xLmlzRnVuY3Rpb24odGhpcy5vYmplY3Quc2F2ZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5hdXRvU2F2ZSA9PT0gXCJib29sZWFuXCIpXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5zYXZlKHRoaXMucHJvcGVydHkpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYXV0b1NhdmUgPT09IFwibnVtYmVyXCIgJiYgIXRoaXMuYXV0b1NhdmVUaW1lb3V0KSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9TYXZlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0LnNhdmUodGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuYXV0b1NhdmVUaW1lb3V0O1xuICAgICAgICAgICAgfSwgTWF0aC5hYnModGhpcy5hdXRvU2F2ZSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5BdHRyaWJ1dGUgPSBBdHRyaWJ1dGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRWFIwY21saWRYUmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlzYVdJdlFYUjBjbWxpZFhSbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc1owUkJRVGhFTzBGQlJUbEVMSGRFUVVGdFJEdEJRVU51UkN4M1JFRkJjVVE3UVVGRGNrUXNNRU5CUVRKR08wRkJSVE5HTERSRFFVRnhSRHRCUVVOeVJDd3dSRUZCZFVRN1FVRjNSWFpFTEUxQlFXRXNVMEZCTWtRc1UwRkJVU3h0UWtGQlVUdEpRWEZGY0VZc1dVRkJXU3hOUVVGVExFVkJRVVVzVVVGQlZ5eEZRVUZGTEUxQlFXbEVPMUZCUTJwR0xFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNVVUZCVVN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJja0kxUWl4eFFrRkJaMElzUjBGQldTeExRVUZMTEVOQlFVTTdVVUZyUW14RExHOUNRVUZsTEVkQlFWa3NTMEZCU3l4RFFVRkRPMGxCU1hwRExFTkJRVU03U1VGUlRTeFJRVUZSTEVOQlFVTXNTMEZCWjBNN1VVRkROVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZCUlN4UFFVRlBPMUZCUXpGRExFbEJRVWtzUzBGQlN5eERRVUZETzFGQlExWXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4TFFVRkxMRWxCUVVrN1dVRkJSU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXp0UlFVTTFSU3hKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRGJrTXNTVUZCU1N4TFFVRkxPMWxCUVVVc05rSkJRV0VzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTndSU3hKUVVGSkxFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRGJFTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8wbEJRM1JDTEVOQlFVTTdTVUZSVFN4WlFVRlpMRU5CUVVNc1MwRkJZeXhGUVVGRkxGZEJRV3RDTEVWQlFVVXNVVUZCWlR0UlFVTnVSU3hOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1NVRkJTVHRaUVVGRkxFOUJRVTg3VVVGRGJFUXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXh4UWtGQll5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU51UkN4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRiRU1zU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMGxCUTNSQ0xFTkJRVU03U1VGVFRTeG5Ra0ZCWjBJc1MwRkJTeXhEUVVGRE8wbEJWWFJDTEdkQ1FVRm5RaXhEUVVGRExFdEJRV2RETEVWQlFVVXNXVUZCY1VJc1MwRkJTenRSUVVOb1JpeEpRVUZKTEhWQ1FVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzV1VGQldTeFhRVUZYTEVOQlFVTXNSVUZCUlR0WlFVTm9SaXhOUVVGTkxHVkJRV1VzUjBGQlJ5eHRRMEZCTkVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRaUVVOcVJpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1pVRkJaU3hGUVVGRk8yZENRVU5vUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETzJkQ1FVTXZRaXhQUVVGUExFdEJRVXNzUTBGQlF6dGhRVU5vUWp0VFFVTktPMUZCUTBRc1QwRkJUeXhEUVVGRExFTkJRVU1zUzBGQlN5eExRVUZMTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1EwRkJReXhUUVVGVExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVFY3NRMEZCUXp0SlFXTk5MSEZDUVVGeFFpeERRVUZETEV0QlFXZERPMUZCUTNwRUxFbEJRVWtzUTBGQlF5eDFRa0ZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEZsQlFWa3NWMEZCVnl4RFFVRkRPMWxCUVVVc1QwRkJUenRSUVVOc1JTeE5RVUZOTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlF6TkRMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRM1JFTEVsQlFVa3NXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVONFFpeEpRVUZKTEU5QlFVOHNRMEZCUXp0UlFVVmFMRWxCUVVrc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU40UWl4SlFVRkpMRXRCUVVzc1dVRkJXU3d5UWtGQldUdFpRVUZGTEZkQlFWY3NSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGRmFrVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNTVUZCU1N4VFFVRlRMRVZCUVVVN1dVRkRja01zV1VGQldTeEhRVUZITEV0QlFVc3NRMEZCUXp0VFFVTjRRanM3V1VGQlRTeFBRVUZQTEVkQlFVY3NjVUpCUVdNc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFJRVU0zUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUnpkQ0xFbEJRVWtzV1VGQldTeEpRVUZKTEZOQlFWTXNTMEZCU3l4UFFVRlBMRWxCUVVrc1UwRkJVeXhMUVVGTExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTTVSaXhKUVVGSkxFTkJRVU1zVFVGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1QwRkJUeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFOQlF6bEVPMGxCUTB3c1EwRkJRenRKUVZWUExGVkJRVlU3VVVGRFpDeEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJUdFpRVU53UXl4TlFVRk5MRWxCUVVrc01rSkJRV3RDTEVOQlFVTXNkMFpCUVhkR0xFTkJRVU1zUTBGQlF6dFRRVU14U0R0UlFVTkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTzFsQlEzWkNMRWxCUVVrc1EwRkJReXhsUVVGbExFZEJRVWNzU1VGQlNTeERRVUZETzFsQlF6VkNMRTlCUVU4N1UwRkRWanRSUVVORUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4SlFVRkpMRU5CUVVNc2FVSkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJRenRaUVVGRkxFOUJRVTg3VVVGRE5VUXNTVUZCU1N4UFFVRlBMRWxCUVVrc1EwRkJReXhSUVVGUkxFdEJRVXNzVTBGQlV6dFpRVUZGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTjRSU3hKUVVGSkxFOUJRVThzU1VGQlNTeERRVUZETEZGQlFWRXNTMEZCU3l4UlFVRlJMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTzFsQlF6VkVMRWxCUVVrc1EwRkJReXhsUVVGbExFZEJRVWNzVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlR0blFrRkRia01zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzJkQ1FVTm9ReXhQUVVGUExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTTdXVUZEYUVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03VTBGREwwSTdTVUZEVEN4RFFVRkRPME5CUTBvN1FVRTNURVFzT0VKQk5reERJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgbXNfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJtc1wiKSk7XG5jb25zdCBCRE9NYXBDYWNoZV8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET01hcENhY2hlXCIpO1xuY2xhc3MgQkRPQ29uZmlnTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgQkRPTWFwQ2FjaGVfMS5CRE9NYXBDYWNoZSgpO1xuICAgIH1cbiAgICBhc3luYyBnZXQoY29uZmlnKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGF3YWl0IHRoaXMuZ2V0Q2FjaGUoY29uZmlnKTtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBhd2FpdCB0aGlzLmxvYWQoY29uZmlnKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0Q2FjaGUoY29uZmlnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XG4gICAgfVxuICAgIGdldENhY2hlKGNvbmZpZykge1xuICAgICAgICBjb25zdCBmcm9tTG9jYWxDYWNoZSA9IHRoaXMuY2FjaGUuZ2V0KGNvbmZpZyk7XG4gICAgICAgIGlmIChmcm9tTG9jYWxDYWNoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21Mb2NhbENhY2hlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBhc3luYyBzZXRDYWNoZShjb25maWcsIHZhbHVlKSB7XG4gICAgICAgIGxldCBjb25mID0gdGhpcy5jYWNoZS5nZXQoJ19fQ29uZmlnTWFuYWdlckNhY2hlVGltZW91dF9fJyk7XG4gICAgICAgIGlmICghdGhpcy5jYWNoZS5oYXMoJ19fQ29uZmlnTWFuYWdlckNhY2hlVGltZW91dF9fJykpIHtcbiAgICAgICAgICAgIGNvbmYgPSAoYXdhaXQgdGhpcy5sb2FkKCdjb25maWcnKSkudGltZW91dHMuY29uZmlnQ2FjaGU7XG4gICAgICAgICAgICBpZiAoY29uZilcbiAgICAgICAgICAgICAgICBjb25mID0gbXNfMS5kZWZhdWx0KGNvbmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5zZXQoJ19fQ29uZmlnTWFuYWdlckNhY2hlVGltZW91dF9fJywgY29uZik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZS5zZXQoY29uZmlnLCB2YWx1ZSwgY29uZik7XG4gICAgfVxufVxuZXhwb3J0cy5CRE9Db25maWdNYW5hZ2VyID0gQkRPQ29uZmlnTWFuYWdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBRMjl1Wm1sblRXRnVZV2RsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmJHbGlMMEpFVDBOdmJtWnBaMDFoYm1GblpYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNiMFJCUVc5Q08wRkJRM0JDTEhORVFVRnRSRHRCUVcxQ2JrUXNUVUZCYzBJc1owSkJRV2RDTzBsQlFYUkRPMUZCVldNc1ZVRkJTeXhIUVVFMlFpeEpRVUZKTEhsQ1FVRlhMRVZCUVVVc1EwRkJRenRKUVhkRmJFVXNRMEZCUXp0SlFTOUVWU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFXTTdVVUZETTBJc1NVRkJTU3hMUVVGTExFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRM2hETEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1dVRkRVaXhMUVVGTExFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xbEJRMmhETEUxQlFVMHNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdVMEZEZEVNN1VVRkRSQ3hQUVVGUExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRiRU1zUTBGQlF6dEpRVGhDVXl4UlFVRlJMRU5CUVVNc1RVRkJZenRSUVVNM1FpeE5RVUZOTEdOQlFXTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTTVReXhKUVVGSkxHTkJRV01zUlVGQlJUdFpRVU5vUWl4UFFVRlBMR05CUVdNc1EwRkJRenRUUVVONlFqdFJRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTJoQ0xFTkJRVU03U1VGWFV5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVdNc1JVRkJSU3hMUVVGVk8xRkJReTlETEVsQlFVa3NTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEN0Q1FVRXJRaXhEUVVGRExFTkJRVU03VVVGRE0wUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEN0Q1FVRXJRaXhEUVVGRExFVkJRVVU3V1VGRGJFUXNTVUZCU1N4SFFVRkhMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF6dFpRVU40UkN4SlFVRkpMRWxCUVVrN1owSkJRVVVzU1VGQlNTeEhRVUZITEZsQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVNeFFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXdyUWtGQkswSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVONlJEdFJRVU5FTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRlRU1zUTBGQlF6dERRVU5LTzBGQmJFWkVMRFJEUVd0R1F5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEJET0RhdGFiYXNlbWFuYWdlciB7XG59XG5leHBvcnRzLkJET0RhdGFiYXNlbWFuYWdlciA9IEJET0RhdGFiYXNlbWFuYWdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBSR0YwWVdKaGMyVk5ZVzVoWjJWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXNhV0l2UWtSUFJHRjBZV0poYzJWTllXNWhaMlZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRMEVzVFVGQmMwSXNhMEpCUVd0Q08wTkJSWFpETzBGQlJrUXNaMFJCUlVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBtb21lbnRfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJtb21lbnRcIikpO1xuY29uc3QgcGF0aF8xID0gcmVxdWlyZShcInBhdGhcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY2xhc3MgQkRPTG9nZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihfcGFyYW1zKSB7XG4gICAgICAgIHRoaXMubG9nRmlsZSA9ICdkZWZhdWx0LmxvZyc7XG4gICAgICAgIHRoaXMucHJldmVudENvbnNvbGVQcmludCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByZXZlbnRGaWxlUHJpbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2dMZXZlbCA9ICdkZWJ1Zyc7XG4gICAgICAgIHRoaXMucHJvdG90eXBlTmFtZXMgPSB1dGlsXzEuZ2V0UHJvdG90eXBlTmFtZXNSZWN1cnNpdmUodGhpcyk7XG4gICAgfVxuICAgIGxvZyhtZXNzYWdlLCBsb2dsZXZlbCA9ICdsb2cnLCAuLi5hcmdzKSB7XG4gICAgICAgIGlmIChsb2dsZXZlbCAhPT0gJ2xvZycgJiYgIXRoaXMuaXNBbGxvd2VkKGxvZ2xldmVsKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLnByZXZlbnRDb25zb2xlUHJpbnQgfHwgWydsb2cnLCAnZXJyb3InXS5pbmNsdWRlcyhsb2dsZXZlbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0SGVhZGVyKGxvZ2xldmVsKTtcbiAgICAgICAgICAgIGxldCBuZXdBcmdzID0gW107XG4gICAgICAgICAgICBpZiAoaGVhZGVyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBuZXdBcmdzID0gbmV3QXJncy5jb25jYXQoaGVhZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBuZXdBcmdzLnB1c2goaGVhZGVyKTtcbiAgICAgICAgICAgIG5ld0FyZ3MucHVzaChtZXNzYWdlKTtcbiAgICAgICAgICAgIG5ld0FyZ3MgPSBuZXdBcmdzLmNvbmNhdChhcmdzKTtcbiAgICAgICAgICAgIGNvbnNvbGVbbG9nbGV2ZWxdLmFwcGx5KHRoaXMsIG5ld0FyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGFyZ3MpO1xuICAgICAgICBpZiAoIXRoaXMucHJldmVudEZpbGVQcmludCB8fCBsb2dsZXZlbCA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy53cml0ZVRvRmlsZShsb2dsZXZlbCwgbWVzc2FnZSArIHBhcnNlZFN0cmluZy5zdWJzdHIoMSwgcGFyc2VkU3RyaW5nLmxlbmd0aCAtIDIpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWJ1ZyhtZXNzYWdlLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGFwcGx5ID0gW21lc3NhZ2UsICdkZWJ1ZyddLmNvbmNhdChhcmdzKTtcbiAgICAgICAgdGhpcy5sb2cuYXBwbHkodGhpcywgYXBwbHkpO1xuICAgIH1cbiAgICBpbmZvKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgYXBwbHkgPSBbbWVzc2FnZSwgJ2luZm8nXS5jb25jYXQoYXJncyk7XG4gICAgICAgIHRoaXMubG9nLmFwcGx5KHRoaXMsIGFwcGx5KTtcbiAgICB9XG4gICAgd2FybihtZXNzYWdlLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGFwcGx5ID0gW21lc3NhZ2UsICd3YXJuJ10uY29uY2F0KGFyZ3MpO1xuICAgICAgICB0aGlzLmxvZy5hcHBseSh0aGlzLCBhcHBseSk7XG4gICAgfVxuICAgIGVycm9yKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgYXBwbHkgPSBbbWVzc2FnZSwgJ2Vycm9yJ10uY29uY2F0KGFyZ3MpO1xuICAgICAgICB0aGlzLmxvZy5hcHBseSh0aGlzLCBhcHBseSk7XG4gICAgfVxuICAgIGdldFByb2NJbmZvKCkge1xuICAgICAgICByZXR1cm4gYCR7Z2xvYmFsLnByb2Nlc3MuZW52Lm5hbWUgfHwgJyd9ICR7Z2xvYmFsLnByb2Nlc3MuZW52Lmhvc3RuYW1lIHx8ICcnfSAke2dsb2JhbC5wcm9jZXNzLnBpZH1gO1xuICAgIH1cbiAgICBpc0FsbG93ZWQobG9nTGV2ZWwpIHtcbiAgICAgICAgY29uc3QgbG9nTGV2ZWxPcmRlciA9IFsnbG9nJywgJ2RlYnVnJywgJ2luZm8nLCAnd2FybicsICdlcnJvciddO1xuICAgICAgICByZXR1cm4gbG9nTGV2ZWxPcmRlci5pbmRleE9mKGxvZ0xldmVsKSA+PSBsb2dMZXZlbE9yZGVyLmluZGV4T2YodGhpcy5sb2dMZXZlbCk7XG4gICAgfVxuICAgIGN1cnJlbnRUaW1lKCkge1xuICAgICAgICByZXR1cm4gbW9tZW50XzEuZGVmYXVsdCgpLmZvcm1hdCgnREQuTU0uWVlZWSBISDptbTpzcycpO1xuICAgIH1cbiAgICBnZXRMb2dQb2ludCgpIHtcbiAgICAgICAgY29uc3Qgc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGxldCBjYWxscG9pbnQ7XG4gICAgICAgIGZvciAoY29uc3QgW2luZGV4LCBzdGFja3BhcnRdIG9mIHN0YWNrLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgaWYgKCFpbmRleClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghdXRpbF8xLmluY2x1ZGVzTWVtYmVyT2ZMaXN0KHN0YWNrcGFydCwgdGhpcy5wcm90b3R5cGVOYW1lcywgJy50cycpKSB7XG4gICAgICAgICAgICAgICAgY2FsbHBvaW50ID0gc3RhY2twYXJ0LnNwbGl0KHBhdGhfMS5zZXApLnBvcCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxscG9pbnQpIHtcbiAgICAgICAgICAgIGNhbGxwb2ludCA9IGNhbGxwb2ludC5yZXBsYWNlKCcpJywgJycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsbHBvaW50ID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbGxwb2ludDtcbiAgICB9XG59XG5leHBvcnRzLkJET0xvZ2dlciA9IEJET0xvZ2dlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBURzluWjJWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXNhV0l2UWtSUFRHOW5aMlZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVU5CTERSRVFVRTBRanRCUVVNMVFpd3JRa0ZCTWtJN1FVRkRNMElzTUVOQlFXMUdPMEZCVjI1R0xFMUJRWE5DTEZOQlFWTTdTVUZyUkROQ0xGbEJRVmtzVDBGQlowTTdVVUV6UTNKRExGbEJRVThzUjBGQldTeGhRVUZoTEVOQlFVTTdVVUZSYWtNc2QwSkJRVzFDTEVkQlFXRXNTMEZCU3l4RFFVRkRPMUZCVVhSRExIRkNRVUZuUWl4SFFVRmhMRXRCUVVzc1EwRkJRenRSUVdWdVF5eGhRVUZSTEVkQlFXVXNUMEZCVHl4RFFVRkRPMUZCVlc1Q0xHMUNRVUZqTEVkQlFXRXNhVU5CUVRCQ0xFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZGTDBJc1EwRkJRenRKUVZjeFF5eEhRVUZITEVOQlFVTXNUMEZCV1N4RlFVRkZMRmRCUVhOQ0xFdEJRVXNzUlVGQlJTeEhRVUZITEVsQlFWYzdVVUZEYUVVc1NVRkJTU3hSUVVGUkxFdEJRVXNzUzBGQlN5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU03V1VGQlJTeFBRVUZQTzFGQlF6VkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRk8xbEJRMnhGTEUxQlFVMHNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdXVUZEZUVNc1NVRkJTU3hQUVVGUExFZEJRV0VzUlVGQlJTeERRVUZETzFsQlF6TkNMRWxCUVVrc1RVRkJUU3haUVVGWkxFdEJRVXNzUlVGQlJUdG5Ra0ZEZWtJc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1lVRkRjRU03TzJkQ1FVRk5MRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZETlVJc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0WlFVTjBRaXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOa0xFOUJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzFOQlF6VkVPMUZCUTBRc1RVRkJUU3haUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNeFF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeEpRVUZKTEZGQlFWRXNTMEZCU3l4UFFVRlBMRVZCUVVVN1dVRkRhRVFzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1QwRkJUeXhIUVVGSExGbEJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRmxCUVZrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTjZSanRKUVVOTUxFTkJRVU03U1VGUlRTeExRVUZMTEVOQlFVTXNUMEZCV1N4RlFVRkZMRWRCUVVjc1NVRkJVenRSUVVOdVF5eE5RVUZOTEV0QlFVc3NSMEZCUnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRPVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGdlFpeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnNSQ3hEUVVGRE8wbEJVVTBzU1VGQlNTeERRVUZETEU5QlFWa3NSVUZCUlN4SFFVRkhMRWxCUVZNN1VVRkRiRU1zVFVGQlRTeExRVUZMTEVkQlFVY3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUXpkRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJiMElzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYkVRc1EwRkJRenRKUVZGTkxFbEJRVWtzUTBGQlF5eFBRVUZaTEVWQlFVVXNSMEZCUnl4SlFVRlRPMUZCUTJ4RExFMUJRVTBzUzBGQlN5eEhRVUZITEVOQlFVTXNUMEZCVHl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTTNReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVc5Q0xFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEyeEVMRU5CUVVNN1NVRlJUU3hMUVVGTExFTkJRVU1zVDBGQldTeEZRVUZGTEVkQlFVY3NTVUZCVXp0UlFVTnVReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZET1VNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRnZRaXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU5zUkN4RFFVRkRPMGxCVTFNc1YwRkJWenRSUVVOcVFpeFBRVUZQTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeEpRVUZKTEVWQlFVVXNTVUZCU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVsQlFVa3NSVUZCUlN4SlFVRkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZEZWtjc1EwRkJRenRKUVN0Q1V5eFRRVUZUTEVOQlFVTXNVVUZCYlVJN1VVRkRia01zVFVGQlRTeGhRVUZoTEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhGUVVGRkxFMUJRVTBzUlVGQlJTeE5RVUZOTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRhRVVzVDBGQlR5eGhRVUZoTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxHRkJRV0VzUTBGQlF5eFBRVUZQTEVOQlFWTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wbEJRek5HTEVOQlFVTTdTVUZUVXl4WFFVRlhPMUZCUTJwQ0xFOUJRVThzWjBKQlFVMHNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXh4UWtGQmNVSXNRMEZCUXl4RFFVRkRPMGxCUTJ4RUxFTkJRVU03U1VGVFV5eFhRVUZYTzFGQlEycENMRTFCUVUwc1MwRkJTeXhIUVVGWkxFbEJRVWtzUzBGQlN5eEZRVUZGTEVOQlFVTXNTMEZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU4wUkN4SlFVRkpMRk5CUVZNc1EwRkJRenRSUVVOa0xFdEJRVXNzVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4VFFVRlRMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVTdXVUZET1VNc1NVRkJTU3hEUVVGRExFdEJRVXM3WjBKQlFVVXNVMEZCVXp0WlFVTnlRaXhKUVVGSkxFTkJRVU1zTWtKQlFXOUNMRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eGpRVUZqTEVWQlFVVXNTMEZCU3l4RFFVRkRMRVZCUVVVN1owSkJRemxFTEZOQlFWTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExGVkJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVOMlF5eE5RVUZOTzJGQlExUTdVMEZEU2p0UlFVTkVMRWxCUVVrc1UwRkJVeXhGUVVGRk8xbEJRMWdzVTBGQlV5eEhRVUZITEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlF6RkRPMkZCUVUwN1dVRkRTQ3hUUVVGVExFZEJRVWNzUlVGQlJTeERRVUZETzFOQlEyeENPMUZCUTBRc1QwRkJUeXhUUVVGVExFTkJRVU03U1VGRGNrSXNRMEZCUXp0RFFVTktPMEZCTTAxRUxEaENRVEpOUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLmV4cGlyZSA9IEluZmluaXR5O1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmV4cGlyZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKGR1cmF0aW9uIHx8IEluZmluaXR5KTtcbiAgICB9XG4gICAgZ2V0IGV4cGlyZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4cGlyZSA/IHRoaXMuZXhwaXJlIDwgbmV3IERhdGUoKS5nZXRUaW1lKCkgOiBmYWxzZTtcbiAgICB9XG59XG5jbGFzcyBCRE9NYXBDYWNoZSBleHRlbmRzIE1hcCB7XG4gICAgc2V0KGtleSwgdmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyBFbnRpdHkodmFsdWUsIGR1cmF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnNldChrZXksIGVudGl0eSk7XG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gc3VwZXIuZ2V0KGtleSk7XG4gICAgICAgIGlmIChlbnRpdHkgPT09IHVuZGVmaW5lZCB8fCBlbnRpdHkuZXhwaXJlZCkge1xuICAgICAgICAgICAgdGhpcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudGl0eS5kYXRhO1xuICAgIH1cbn1cbmV4cG9ydHMuQkRPTWFwQ2FjaGUgPSBCRE9NYXBDYWNoZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBUV0Z3UTJGamFHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMnhwWWk5Q1JFOU5ZWEJEWVdOb1pTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVV0QkxFMUJRVTBzVFVGQlRUdEpRV2RDVWl4WlFVRlpMRWxCUVU4c1JVRkJSU3hSUVVGcFFqdFJRVVk1UWl4WFFVRk5MRWRCUVZjc1VVRkJVU3hEUVVGRE8xRkJSemxDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMnBDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hKUVVGSkxFVkJRVVVzUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RFFVRkRMRkZCUVZFc1NVRkJTU3hSUVVGUkxFTkJRVU1zUTBGQlF6dEpRVU5vUlN4RFFVRkRPMGxCVTBRc1NVRkJTU3hQUVVGUE8xRkJRMUFzVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTndSU3hEUVVGRE8wTkJRMG83UVVGVFJDeE5RVUZoTEZkQlFXdENMRk5CUVZFc1IwRkJhVUk3U1VGWE4wTXNSMEZCUnl4RFFVRkRMRWRCUVUwc1JVRkJSU3hMUVVGUkxFVkJRVVVzVVVGQmFVSTdVVUZETVVNc1RVRkJUU3hOUVVGTkxFZEJRVWNzU1VGQlNTeE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRek5ETEU5QlFVOHNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEYkVNc1EwRkJRenRKUVZOTkxFZEJRVWNzUTBGQlF5eEhRVUZOTzFGQlEySXNUVUZCVFN4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTTVRaXhKUVVGSkxFMUJRVTBzUzBGQlN5eFRRVUZUTEVsQlFVa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVONFF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMnBDTEU5QlFVOHNVMEZCVXl4RFFVRkRPMU5CUTNCQ08xRkJRMFFzVDBGQlR5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCUTNaQ0xFTkJRVU03UTBGRFNqdEJRUzlDUkN4clEwRXJRa01pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xudmFyIEJET01vZGVsXzE7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgdXVpZF8xID0gcmVxdWlyZShcInV1aWRcIik7XG5jb25zdCB0eXBlX2dyYXBocWxfMSA9IHJlcXVpcmUoXCJ0eXBlLWdyYXBocWxcIik7XG5jb25zdCBCaW5kaW5nXzEgPSByZXF1aXJlKFwifmJkby9saWIvQmluZGluZ1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCBNb2RlbFJlZ2lzdHJ5XzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kZWxSZWdpc3RyeVwiKTtcbmxldCBCRE9Nb2RlbCA9IEJET01vZGVsXzEgPSBjbGFzcyBCRE9Nb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNCRE9Nb2RlbCA9IHRydWU7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbk5hbWUgPSBCRE9Nb2RlbF8xLmNvbGxlY3Rpb25OYW1lO1xuICAgICAgICB0aGlzLmRhdGFiYXNlTmFtZSA9IEJET01vZGVsXzEuZGF0YWJhc2VOYW1lO1xuICAgICAgICB0aGlzLmlkID0gYHBlbmRpbmdfJHt1dWlkXzEudjQoKX1gO1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzLmNvbnN0cnVjdG9yKS5uYW1lO1xuICAgICAgICBNb2RlbFJlZ2lzdHJ5XzEuTW9kZWxSZWdpc3RyeS5nZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgYmluZGluZ3MoKSB7XG4gICAgICAgIGNvbnN0IGJpbmRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLCBcImJpbmRpbmdzXCIpO1xuICAgICAgICByZXR1cm4gYmluZGluZ3MgPyBiaW5kaW5ncyA6IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlQnlJRChfaWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkXCIpO1xuICAgIH1cbiAgICBnZXRSZWZlcmVuY2VTdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgX3JlZmVyZW5jZToke3RoaXMuY2xhc3NOYW1lfSR7dGhpcy5pZH1gO1xuICAgIH1cbiAgICBiaW5kKHByb3BOYW1lLCBtb2RlKSB7XG4gICAgICAgIHJldHVybiBuZXcgQmluZGluZ18xLkJpbmRpbmcodGhpcywgcHJvcE5hbWUsIG1vZGUpO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMudG9KU09OKCk7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICBjb25zdCBkYXRhID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzW2tleV07XG4gICAgICAgICAgICAgICAgZGF0YVtrZXldID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgYXN5bmMgaXNVbnNhdmVkKGF0dHIpIHtcbiAgICAgICAgY29uc3QgdW5zYXZlZENoYW5nZXMgPSBhd2FpdCB0aGlzLmdldFVuc2F2ZWRDaGFuZ2VzKCk7XG4gICAgICAgIGxldCB1bnNhdmVkID0gZmFsc2U7XG4gICAgICAgIGlmICh1bnNhdmVkQ2hhbmdlcyAmJiB1bnNhdmVkQ2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShhdHRyKSlcbiAgICAgICAgICAgIHVuc2F2ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuc2F2ZWQpO1xuICAgIH1cbiAgICBhc3luYyBoYXNVbnNhdmVkQ2hhbmdlcygpIHtcbiAgICAgICAgY29uc3QgdW5zYXZlZENoYW5nZXMgPSBhd2FpdCB0aGlzLmdldFVuc2F2ZWRDaGFuZ2VzKCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoQm9vbGVhbihPYmplY3Qua2V5cyh1bnNhdmVkQ2hhbmdlcykubGVuZ3RoKSk7XG4gICAgfVxufTtcbkJET01vZGVsLmdyYXBoUUxUeXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKEJET01vZGVsXzEuY29uc3RydWN0b3IpO1xuQkRPTW9kZWwuaXNCRE9Nb2RlbCA9IHRydWU7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG5dLCBCRE9Nb2RlbC5wcm90b3R5cGUsIFwiaXNCRE9Nb2RlbFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBCRE9Nb2RlbC5wcm90b3R5cGUsIFwiY29sbGVjdGlvbk5hbWVcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgQkRPTW9kZWwucHJvdG90eXBlLCBcImRhdGFiYXNlTmFtZVwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKChfdHlwZSkgPT4gdHlwZV9ncmFwaHFsXzEuSUQpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIEJET01vZGVsLnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgQkRPTW9kZWwucHJvdG90eXBlLCBcImNsYXNzTmFtZVwiLCB2b2lkIDApO1xuQkRPTW9kZWwgPSBCRE9Nb2RlbF8xID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKHsgaXNBYnN0cmFjdDogdHJ1ZSB9KSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbl0sIEJET01vZGVsKTtcbmV4cG9ydHMuQkRPTW9kZWwgPSBCRE9Nb2RlbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBUVzlrWld3dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyeHBZaTlDUkU5TmIyUmxiQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUVzSzBKQlFXdERPMEZCUTJ4RExDdERRVUZyUXp0QlFVTnNReXc0UTBGQmQwUTdRVUZEZUVRc2MwUkJRVFpGTzBGQlF6ZEZMR3RFUVVGclJEdEJRVVZzUkN3d1JFRkJkVVE3UVVGWGRrUXNTVUZCYzBJc1VVRkJVU3huUWtGQk9VSXNUVUZCYzBJc1VVRkJVVHRKUVN0SE1VSTdVVUZvUkRSQ0xHVkJRVlVzUjBGQldTeEpRVUZKTEVOQlFVTTdVVUZSTTBJc2JVSkJRV01zUjBGQldTeFZRVUZSTEVOQlFVTXNZMEZCWXl4RFFVRkRPMUZCVVd4RUxHbENRVUZaTEVkQlFWa3NWVUZCVVN4RFFVRkRMRmxCUVZrc1EwRkJRenRSUVZONlF5eFBRVUZGTEVkQlFWY3NWMEZCVnl4VFFVRkpMRVZCUVVVc1JVRkJSU3hEUVVGRE8xRkJWWEpETEdOQlFWTXNSMEZCVnl4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNN1VVRmpNVVlzTmtKQlFXRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETDBNc1EwRkJRenRKUVhaSFJDeEpRVUZqTEZGQlFWRTdVVUZEYkVJc1RVRkJUU3hSUVVGUkxFZEJRVWNzYzBKQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGREwwTXNUMEZCVHl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVNelF5eERRVUZETzBsQk9FWk5MRTFCUVUwc1EwRkJReXhsUVVGbExFTkJRWGRETEVkQlFWazdVVUZETjBVc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8wbEJRM1pETEVOQlFVTTdTVUZaVFN4clFrRkJhMEk3VVVGRGNrSXNUMEZCVHl4alFVRmpMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNCRUxFTkJRVU03U1VGWFRTeEpRVUZKTEVOQlFUSkZMRkZCUVZjc1JVRkJSU3hKUVVGUk8xRkJRM1pITEU5QlFVOHNTVUZCU1N4cFFrRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRTJSQ3hEUVVGRE8wbEJRM3BITEVOQlFVTTdTVUZSVFN4UlFVRlJPMUZCUTFnc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMUZCUXpOQ0xFOUJRVThzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOb1F5eERRVUZETzBsQlZVMHNUVUZCVFR0UlFVTlVMRTFCUVUwc1NVRkJTU3hIUVVGdFFpeEZRVUZGTEVOQlFVTTdVVUZEYUVNc1MwRkJTeXhOUVVGTkxFZEJRVWNzU1VGQlNTeEpRVUZKTEVWQlFVVTdXVUZEY0VJc1NVRkJTU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NVMEZCVXl4RlFVRkZPMmRDUVVONlFpeE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlF6RkNMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTTdZVUZEZGtJN1UwRkRTanRSUVVORUxFOUJRVThzU1VGQlNTeERRVUZETzBsQlEyaENMRU5CUVVNN1NVRTBRazBzUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRXJRanRSUVVOc1JDeE5RVUZOTEdOQlFXTXNSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4RFFVRkRPMUZCUTNSRUxFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTndRaXhKUVVGSkxHTkJRV01zU1VGQlNTeGpRVUZqTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJRenRaUVVGRkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZETVVVc1QwRkJUeXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUTNCRExFTkJRVU03U1VGVFRTeExRVUZMTEVOQlFVTXNhVUpCUVdsQ08xRkJRekZDTEUxQlFVMHNZMEZCWXl4SFFVRkhMRTFCUVUwc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RlFVRkZMRU5CUVVNN1VVRkRkRVFzVDBGQlR5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVFVXNRMEZCUXp0RFFWZEtMRU5CUVVFN1FVRjJUVEJDTEc5Q1FVRlhMRWRCUVZFc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eFZRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1FVRm5ReTlFTEcxQ1FVRlZMRWRCUVZrc1NVRkJTU3hEUVVGRE8wRkJVWFJETzBsQlFWZ3NjVUpCUVZFc1JVRkJSVHM3TkVOQlFUUkRPMEZCVVRORE8wbEJRVmdzY1VKQlFWRXNSVUZCUlRzN1owUkJRVzFGTzBGQlVXeEZPMGxCUVZnc2NVSkJRVkVzUlVGQlJUczdPRU5CUVN0RU8wRkJVMmhFTzBsQlFYcENMSE5DUVVGVExFTkJRVU1zUTBGQlF5eExRVUZMTEVWQlFVVXNSVUZCUlN4RFFVRkRMR2xDUVVGRkxFTkJRVU03TzI5RFFVRjVRenRCUVZWeVJEdEpRVUZhTEhOQ1FVRlRMRVZCUVVVN096SkRRVUZyUmp0QlFXeEhOVVVzVVVGQlVUdEpRVVEzUWl3MFFrRkJaU3hEUVVGRExFVkJRVVVzVlVGQlZTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkRPenRIUVVOb1FpeFJRVUZSTEVOQk9FNDNRanRCUVRsT2NVSXNORUpCUVZFaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBlbnZpcm9ubWVudF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZW52aXJvbm1lbnRcIik7XG5jbGFzcyBCRE9Sb3V0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucm91dGVyTmFtZVNwYWNlID0gYC8ke3RoaXMuY29uc3RydWN0b3IubmFtZS50b0xvd2VyQ2FzZSgpfWA7XG4gICAgICAgIHRoaXMucm91dGVzID0gWycvJ107XG4gICAgICAgIHRoaXMudGVtcGxhdGVTdHJpbmcgPSAnPGRpdj48L2Rpdj4nO1xuICAgICAgICB0aGlzLmpzb25Pbmx5ID0gZmFsc2U7XG4gICAgfVxuICAgIHJlbmRlclRlbXBsYXRlKHRlbXBsYXRlUGFyYW1zKSB7XG4gICAgICAgIGxldCBzdHJpbmdUb1BhcnNlID0gbnVsbDtcbiAgICAgICAgaWYgKHV0aWxfMS5pc1N0cmluZyh0aGlzLnRlbXBsYXRlU3RyaW5nKSkge1xuICAgICAgICAgICAgc3RyaW5nVG9QYXJzZSA9IGVudmlyb25tZW50XzEudGVtcGxhdGVFbnZpcm9ubWVudC5yZW5kZXJTdHJpbmcodGhpcy50ZW1wbGF0ZVN0cmluZywgdGVtcGxhdGVQYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1dGlsXzEuaXNPYmplY3QodGhpcy50ZW1wbGF0ZVN0cmluZykpIHtcbiAgICAgICAgICAgIHN0cmluZ1RvUGFyc2UgPSB0aGlzLnRlbXBsYXRlU3RyaW5nLnJlbmRlcih0ZW1wbGF0ZVBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cmluZ1RvUGFyc2U7XG4gICAgfVxuICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zKF9yZXF1ZXN0T3JQYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn1cbmV4cG9ydHMuQkRPUm91dGUgPSBCRE9Sb3V0ZTtcbkJET1JvdXRlLmF0dGFjaFRvU2VydmVycyA9IFsnKiddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFVtOTFkR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJ4cFlpOUNSRTlTYjNWMFpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVWQkxEQkRRVUZ4UkR0QlFVTnlSQ3gzUkVGQk5rUTdRVUZUTjBRc1RVRkJjMElzVVVGQlVUdEpRVUU1UWp0UlFYRkNWeXh2UWtGQlpTeEhRVUZYTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVWQlFVVXNRMEZCUXp0UlFWRndSU3hYUVVGTkxFZEJRV0VzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFXdENkRUlzYlVKQlFXTXNSMEZCYzBJc1lVRkJZU3hEUVVGRE8xRkJWV3hFTEdGQlFWRXNSMEZCV1N4TFFVRkxMRU5CUVVNN1NVRnRSSGhETEVOQlFVTTdTVUY0UTJFc1kwRkJZeXhEUVVGRExHTkJRVGhDTzFGQlEyNUVMRWxCUVVrc1lVRkJZU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU42UWl4SlFVRkpMR1ZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVWQlFVVTdXVUZETDBJc1lVRkJZU3hIUVVGSExHbERRVUZ0UWl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eEZRVUZGTEdOQlFXTXNRMEZCUXl4RFFVRkRPMU5CUTNwR08xRkJRMFFzU1VGQlNTeGxRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhGUVVGRk8xbEJReTlDTEdGQlFXRXNSMEZCWXl4SlFVRkpMRU5CUVVNc1kwRkJaU3hEUVVGRExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXp0VFFVTXhSVHRSUVVORUxFOUJRVThzWVVGQllTeERRVUZETzBsQlEzcENMRU5CUVVNN1NVRlhVeXhMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEdkQ1FVRXdRenRSUVVOeVJTeFBRVUZQTEVWQlFVVXNRMEZCUXp0SlFVTmtMRU5CUVVNN08wRkJNVVpNTERSQ1FUUkhRenRCUVdoSGFVSXNkMEpCUVdVc1IwRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQmluZGluZ18xID0gcmVxdWlyZShcIn5iZG8vbGliL0JpbmRpbmdcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgZnJhbWV3b3JrXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9mcmFtZXdvcmtcIik7XG5mdW5jdGlvbiBiYXNlQ29uc3RydWN0b3JGYWN0b3J5KGN0b3IsIGNvbnN0UGFyYW1zSW5kZXgpIHtcbiAgICBjbGFzcyBCYXNlQ29uc3RydWN0b3IgZXh0ZW5kcyBjdG9yIHtcbiAgICAgICAgY29uc3RydWN0b3IoLi4ucGFyYW1zKSB7XG4gICAgICAgICAgICBzdXBlciguLi5wYXJhbXMpO1xuICAgICAgICAgICAgdGhpcy5jb2xsZWN0aW9uTmFtZSA9IEJhc2VDb25zdHJ1Y3Rvci5jb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgICAgIHRoaXMuZGF0YWJhc2VOYW1lID0gQmFzZUNvbnN0cnVjdG9yLmRhdGFiYXNlTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0UGFyYW1zID0gcGFyYW1zW2NvbnN0UGFyYW1zSW5kZXhdO1xuICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YSh0aGlzLCBcIm5vcm1hbEZ1bmN0aW9uYWxpdHlcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIUJhc2VDb25zdHJ1Y3Rvci5pc1Byb2NlZHVyYWxDb21wb25lbnRDb25zdHJ1Y3Rpb24pXG4gICAgICAgICAgICAgICAgdGhpcy5pbnZva2VMaWZlQ3ljbGUoY29uc3RQYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIGludm9rZUxpZmVDeWNsZShjb25zdFBhcmFtcykge1xuICAgICAgICAgICAgaWYgKCEoY29uc3RQYXJhbXMgaW5zdGFuY2VvZiBPYmplY3QpKVxuICAgICAgICAgICAgICAgIGNvbnN0UGFyYW1zID0ge307XG4gICAgICAgICAgICBsZXQgZGVmYXVsdFNldHRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLCBcImRlZmF1bHRTZXR0aW5nc1wiKSB8fCB7fTtcbiAgICAgICAgICAgIGRlZmF1bHRTZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdFNldHRpbmdzLCBjb25zdFBhcmFtcyk7XG4gICAgICAgICAgICBpZiAodXRpbF8xLmlzRnVuY3Rpb24odGhpcy5nZXROYW1lc3BhY2VkU3RvcmFnZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGNvbnN0UGFyYW1zLmlkIHx8IGRlZmF1bHRTZXR0aW5ncy5pZDtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWNoZWRTZXR0aW5ncyA9IHRoaXMuZ2V0TmFtZXNwYWNlZFN0b3JhZ2UoXCIqXCIsIFwiaWRcIiwgaWQpIHx8IHt9O1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNhY2hlZFNldHRpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWNoZWRTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZGVmYXVsdFNldHRpbmdzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEJpbmRpbmdfMS5CaW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRWYWx1ZShjYWNoZWRTZXR0aW5nc1trZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U2V0dGluZ3Nba2V5XSA9IGNhY2hlZFNldHRpbmdzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRTZXR0aW5ncyk7XG4gICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMsIFwiY29uc3RydWN0aW9uQ29tcGxldGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoZnJhbWV3b3JrXzEuaXNDb21wb25lbnQoY3RvcikgJiYgdXRpbF8xLmlzRnVuY3Rpb24odGhpcy5yZW5kZXJUZW1wbGF0ZSkpXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUZW1wbGF0ZSgpO1xuICAgICAgICAgICAgaWYgKHV0aWxfMS5pc0Z1bmN0aW9uKHRoaXMuY29uc3RydWN0ZWRDYWxsYmFjaykpXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3RlZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQmFzZUNvbnN0cnVjdG9yLmNsYXNzTmFtZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihCYXNlQ29uc3RydWN0b3IpLm5hbWU7XG4gICAgQmFzZUNvbnN0cnVjdG9yLmdyYXBoUUxUeXBlID0gY3RvcjtcbiAgICBCYXNlQ29uc3RydWN0b3IuY29sbGVjdGlvbk5hbWUgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKEJhc2VDb25zdHJ1Y3RvciwgXCJjb2xsZWN0aW9uTmFtZVwiKTtcbiAgICBCYXNlQ29uc3RydWN0b3IuZGF0YWJhc2VOYW1lID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShCYXNlQ29uc3RydWN0b3IsIFwiZGF0YWJhc2VOYW1lXCIpO1xuICAgIEJhc2VDb25zdHJ1Y3Rvci5pc1Byb2NlZHVyYWxDb21wb25lbnRDb25zdHJ1Y3Rpb24gPSBmYWxzZTtcbiAgICByZXR1cm4gQmFzZUNvbnN0cnVjdG9yO1xufVxuZXhwb3J0cy5iYXNlQ29uc3RydWN0b3JGYWN0b3J5ID0gYmFzZUNvbnN0cnVjdG9yRmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFtRnpaVU52Ym5OMGNuVmpkRzl5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5c2FXSXZRbUZ6WlVOdmJuTjBjblZqZEc5eUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc09FTkJRVEpETzBGQlF6TkRMR3RFUVVGclJUdEJRVU5zUlN3d1EwRkJOa003UVVGRE4wTXNiMFJCUVcxRU8wRkJkMFZ1UkN4VFFVRm5RaXh6UWtGQmMwSXNRMEZCT0VNc1NVRkJUeXhGUVVGRkxHZENRVUYzUWp0SlFWRnFTQ3hOUVVGTkxHVkJRV2RDTEZOQlFWRXNTVUZCU1R0UlFXZEZPVUlzV1VGQldTeEhRVUZITEUxQlFXRTdXVUZEZUVJc1MwRkJTeXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTTdXVUZZVEN4dFFrRkJZeXhIUVVGWkxHVkJRV1VzUTBGQlF5eGpRVUZqTEVOQlFVTTdXVUZSZWtRc2FVSkJRVmtzUjBGQldTeGxRVUZsTEVOQlFVTXNXVUZCV1N4RFFVRkRPMWxCU1dwRkxFMUJRVTBzVjBGQlZ5eEhRVUZITEUxQlFVMHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eERRVUZETzFsQlF6ZERMSGxDUVVGakxFTkJRVU1zU1VGQlNTeEZRVUZGTEhGQ1FVRnhRaXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEyeEVMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zYVVOQlFXbERPMmRDUVVGRkxFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1VVRkRPVVlzUTBGQlF6dFJRVkZOTEdWQlFXVXNRMEZCUXl4WFFVRjNRenRaUVVNelJDeEpRVUZKTEVOQlFVTXNRMEZCUXl4WFFVRlhMRmxCUVZrc1RVRkJUU3hEUVVGRE8yZENRVUZGTEZkQlFWY3NSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRka1FzU1VGQlNTeGxRVUZsTEVkQlFUSkRMSE5DUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTEdsQ1FVRnBRaXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzFsQlEzcEhMR1ZCUVdVc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEdWQlFXVXNSVUZCUlN4WFFVRlhMRU5CUVVNc1EwRkJRenRaUVVNNVJDeEpRVUZKTEdsQ1FVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRVZCUVVVN1owSkJRM1pETEUxQlFVMHNSVUZCUlN4SFFVRkhMRmRCUVZjc1EwRkJReXhGUVVGRkxFbEJRVWtzWlVGQlpTeERRVUZETEVWQlFVVXNRMEZCUXp0blFrRkRhRVFzVFVGQlRTeGpRVUZqTEVkQlFVY3NTVUZCU1N4RFFVRkRMRzlDUVVGdlFpeERRVUZETEVkQlFVY3NSVUZCUlN4SlFVRkpMRVZCUVVVc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzJkQ1FVTjBSU3hMUVVGTExFMUJRVTBzUjBGQlJ5eEpRVUZKTEdOQlFXTXNSVUZCUlR0dlFrRkRPVUlzU1VGQlNTeGpRVUZqTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8zZENRVU53UXl4TlFVRk5MRTlCUVU4c1IwRkJSeXhsUVVGbExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdkMEpCUTNKRExFbEJRVWtzVDBGQlR5eFpRVUZaTEdsQ1FVRlBMRVZCUVVVN05FSkJRelZDTEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdlVUpCUTNwRE96czBRa0ZCVFN4bFFVRmxMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPM0ZDUVVOeVJEdHBRa0ZEU2p0aFFVTktPMWxCUTBRc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNaVUZCWlN4RFFVRkRMRU5CUVVNN1dVRkRja01zZVVKQlFXTXNRMEZCUXl4SlFVRkpMRVZCUVVVc2MwSkJRWE5DTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRia1FzU1VGQlNTeDFRa0ZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxHbENRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJRenRuUWtGQlJTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RlFVRkZMRU5CUVVNN1dVRkRhRVlzU1VGQlNTeHBRa0ZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNRMEZCUXp0blFrRkJSU3hKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRVZCUVVVc1EwRkJRenRSUVVONlJTeERRVUZET3p0SlFYcEdjMElzZVVKQlFWTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXp0SlFWVjRSQ3d5UWtGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXp0SlFWTnVRaXc0UWtGQll5eEhRVUZaTEhOQ1FVRlhMRU5CUVVNc1pVRkJaU3hGUVVGRkxHZENRVUZuUWl4RFFVRkRMRU5CUVVNN1NVRlRla1VzTkVKQlFWa3NSMEZCV1N4elFrRkJWeXhEUVVGRExHVkJRV1VzUlVGQlJTeGpRVUZqTEVOQlFVTXNRMEZCUXp0SlFWVTVSU3hwUkVGQmFVTXNSMEZCV1N4TFFVRkxMRU5CUVVNN1NVRnhSSEpGTEU5QlFVOHNaVUZCWlN4RFFVRkRPMEZCUXpOQ0xFTkJRVU03UVVFMVIwUXNkMFJCTkVkREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBGaWVsZF8xID0gcmVxdWlyZShcIn5iZG8vbGliL0ZpZWxkXCIpO1xuY29uc3QgZnJhbWV3b3JrXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9mcmFtZXdvcmtcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCBpbmlCaW5kTmFtZSA9IFwiaW5pdGlhdG9yQmluZGluZ1wiO1xuY29uc3QgYmluZE5hbWUgPSBcImJpbmRpbmdzXCI7XG5jbGFzcyBCaW5kaW5nIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5LCBtb2RlID0gXCJSZWFkV3JpdGVcIikge1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgICAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0b3IgPSB0aGlzLmdldE9yaWdpbmFsUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSB8fCB0aGlzLm9iamVjdFt0aGlzLnByb3BlcnR5XTtcbiAgICB9XG4gICAgaW5zdGFsbChpbml0aWF0b3IsIHByb3BlcnR5KSB7XG4gICAgICAgIHRoaXMuaW5pdGlhdG9yID0gaW5pdGlhdG9yO1xuICAgICAgICB0aGlzLmluaXRpYXRvclByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgICAgIHRoaXMuaW5pdGlhdG9yRGVzY3JpcHRvciA9IHRoaXMuZ2V0T3JpZ2luYWxQcm9wZXJ0eURlc2NyaXB0b3IodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHkpO1xuICAgICAgICBpZiAoIVJlZmxlY3QuaGFzTWV0YWRhdGEoaW5pQmluZE5hbWUsIHRoaXMuaW5pdGlhdG9yKSlcbiAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcy5pbml0aWF0b3IsIGluaUJpbmROYW1lLCBuZXcgTWFwKCkpO1xuICAgICAgICBpZiAoIVJlZmxlY3QuaGFzTWV0YWRhdGEoYmluZE5hbWUsIHRoaXMub2JqZWN0KSlcbiAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcy5vYmplY3QsIGJpbmROYW1lLCBuZXcgTWFwKCkpO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JNRGF0YSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5pbml0aWF0b3IsIGluaUJpbmROYW1lKSB8fCBuZXcgTWFwKCk7XG4gICAgICAgIGNvbnN0IGluaXRpYXRvckJpbmRpbmcgPSBpbml0aWF0b3JNRGF0YS5nZXQodGhpcy5pbml0aWF0b3JQcm9wZXJ0eSk7XG4gICAgICAgIGlmIChpbml0aWF0b3JCaW5kaW5nKVxuICAgICAgICAgICAgaW5pdGlhdG9yQmluZGluZy5yZW1vdmUoKTtcbiAgICAgICAgY29uc3QgbURhdGEgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMub2JqZWN0LCBiaW5kTmFtZSkgfHwgbmV3IE1hcCgpO1xuICAgICAgICBpZiAoIW1EYXRhLmhhcyh0aGlzLnByb3BlcnR5KSlcbiAgICAgICAgICAgIG1EYXRhLnNldCh0aGlzLnByb3BlcnR5LCBbXSk7XG4gICAgICAgIG1EYXRhLmdldCh0aGlzLnByb3BlcnR5KS5wdXNoKHRoaXMpO1xuICAgICAgICBpbml0aWF0b3JNRGF0YS5zZXQodGhpcy5pbml0aWF0b3JQcm9wZXJ0eSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IGZpZWxkTURhdGFOYW1lID0gYGZpZWxkOiR7dGhpcy5wcm9wZXJ0eX1gO1xuICAgICAgICBjb25zdCBvYmplY3RGaWVsZCA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgIGNvbnN0IGluaXRpYXRvckZpZWxkID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5KTtcbiAgICAgICAgbGV0IGZpZWxkID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMub2JqZWN0LCBmaWVsZE1EYXRhTmFtZSk7XG4gICAgICAgIGlmICghZmllbGQpXG4gICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIGZpZWxkTURhdGFOYW1lLCBuZXcgRmllbGRfMS5GaWVsZCh0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSkpO1xuICAgICAgICBmaWVsZCA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLm9iamVjdCwgZmllbGRNRGF0YU5hbWUpO1xuICAgICAgICBmaWVsZC5hZGRGaWVsZChvYmplY3RGaWVsZCk7XG4gICAgICAgIGZpZWxkLmFkZEZpZWxkKGluaXRpYXRvckZpZWxkKTtcbiAgICAgICAgdGhpcy5yZXBsYWNlRGVzY3JpcHRvcigpO1xuICAgICAgICBSZWZsZWN0LnNldCh0aGlzLmluaXRpYXRvciwgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSwgdGhpcy52YWx1ZU9mKCkpO1xuICAgIH1cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIGNvbnN0IG9iamVjdFZhbHVlID0gdGhpcy5vYmplY3RbdGhpcy5wcm9wZXJ0eV07XG4gICAgICAgIGNvbnN0IGluaXRpYXRvclZhbHVlID0gdGhpcy5pbml0aWF0b3JbdGhpcy5pbml0aWF0b3JQcm9wZXJ0eV07XG4gICAgICAgIGNvbnN0IG9iamVjdE1EYXRhID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLm9iamVjdCwgYmluZE5hbWUpO1xuICAgICAgICBjb25zdCBvYmplY3RCaW5kaW5ncyA9IG9iamVjdE1EYXRhID8gb2JqZWN0TURhdGEuZ2V0KHRoaXMucHJvcGVydHkpIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JNRGF0YSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5pbml0aWF0b3IsIGluaUJpbmROYW1lKTtcbiAgICAgICAgY29uc3QgaW5pdGlhdG9yQmluZGluZyA9IGluaXRpYXRvck1EYXRhID8gaW5pdGlhdG9yTURhdGEuZ2V0KHRoaXMuaW5pdGlhdG9yUHJvcGVydHkudG9TdHJpbmcoKSkgOiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IGZpZWxkTURhdGFOYW1lID0gYGZpZWxkOiR7dGhpcy5wcm9wZXJ0eX1gO1xuICAgICAgICBjb25zdCBmaWVsZCA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLm9iamVjdCwgZmllbGRNRGF0YU5hbWUpO1xuICAgICAgICBpZiAoaW5pdGlhdG9yQmluZGluZykge1xuICAgICAgICAgICAgaWYgKGluaXRpYXRvck1EYXRhKVxuICAgICAgICAgICAgICAgIGluaXRpYXRvck1EYXRhLmRlbGV0ZSh0aGlzLmluaXRpYXRvclByb3BlcnR5LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgdGhpcy5yZXN0b3JlRGVzY3JpcHRvcih0aGlzLmluaXRpYXRvciwgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSwgaW5pdGlhdG9yVmFsdWUsIHRoaXMuaW5pdGlhdG9yRGVzY3JpcHRvcik7XG4gICAgICAgICAgICBmaWVsZC5yZW1vdmVGaWVsZChtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHkpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqZWN0QmluZGluZ3MpIHtcbiAgICAgICAgICAgIHV0aWxfMS5yZW1vdmVFbGVtZW50RnJvbUFycmF5KG9iamVjdEJpbmRpbmdzLCB0aGlzKTtcbiAgICAgICAgICAgIGZpZWxkLnJlbW92ZUZpZWxkKG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSkpO1xuICAgICAgICAgICAgaWYgKCFvYmplY3RCaW5kaW5ncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0TURhdGEpXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdE1EYXRhLmRlbGV0ZSh0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RvcmVEZXNjcmlwdG9yKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5LCBvYmplY3RWYWx1ZSwgdGhpcy5kZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIGZpZWxkTURhdGFOYW1lLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXBsYWNlRGVzY3JpcHRvcigpIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpO1xuICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5LCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGJpbmRpbmdHZXQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoYXQubW9kZSA9PT0gXCJXcml0ZU9ubHlcIiAmJiB0aGlzID09PSB0aGF0LmluaXRpYXRvcilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJhbWV3b3JrXzEuZ2V0dGVyKHRoYXQub2JqZWN0LCB0aGF0LnByb3BlcnR5LCBcImZpZWxkXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gYmluZGluZ1NldChuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5tb2RlID09PSBcIlJlYWRPbmx5XCIgJiYgdGhpcyA9PT0gdGhhdC5pbml0aWF0b3IpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBmcmFtZXdvcmtfMS5zZXR0ZXIodGhhdC5vYmplY3QsIHRoYXQucHJvcGVydHksIG5ld1ZhbCwgXCJmaWVsZFwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiaW5kaW5nRGVzYyA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0aGlzLmluaXRpYXRvciwgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSk7XG4gICAgICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHksIGJpbmRpbmdEZXNjKTtcbiAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YSh0aGlzLm9iamVjdCwgXCJiaW5kaW5nRGVzY3JpcHRvclwiLCBiaW5kaW5nRGVzYyk7XG4gICAgfVxuICAgIHJlc3RvcmVEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHksIHZhbHVlLCBkZXNjcmlwdG9yKSB7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eSk7XG4gICAgICAgIGlmIChkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBvYmplY3RbcHJvcGVydHkudG9TdHJpbmcoKV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0T3JpZ2luYWxQcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBrZXkpIHtcbiAgICAgICAgbGV0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIGtleSk7XG4gICAgICAgIGxldCBtRGF0YU5hbWUgPSBiaW5kTmFtZTtcbiAgICAgICAgbGV0IHByb3RvdHlwZSA9IG9iamVjdDtcbiAgICAgICAgaWYgKG9iamVjdCA9PT0gdGhpcy5pbml0aWF0b3IpXG4gICAgICAgICAgICBtRGF0YU5hbWUgPSBpbmlCaW5kTmFtZTtcbiAgICAgICAgd2hpbGUgKCFkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKTtcbiAgICAgICAgICAgIGlmICghcHJvdG90eXBlKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgaWYgKHByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIkJhc2VDb25zdHJ1Y3RvclwiKVxuICAgICAgICAgICAgICAgIHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpO1xuICAgICAgICAgICAgZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvdHlwZSwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VhcmNoRGVzY3JpcHRvckluQmluZGluZ3MgPSBmYWxzZTtcbiAgICAgICAgaWYgKGRlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yLnNldCAmJiBkZXNjcmlwdG9yLnNldC5uYW1lID09PSBcImJpbmRpbmdTZXRcIilcbiAgICAgICAgICAgICAgICBzZWFyY2hEZXNjcmlwdG9ySW5CaW5kaW5ncyA9IHRydWU7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvci5nZXQgJiYgZGVzY3JpcHRvci5nZXQubmFtZSA9PT0gXCJiaW5kaW5nR2V0XCIpXG4gICAgICAgICAgICAgICAgc2VhcmNoRGVzY3JpcHRvckluQmluZGluZ3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWFyY2hEZXNjcmlwdG9ySW5CaW5kaW5ncykge1xuICAgICAgICAgICAgY29uc3QgbURhdGEgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKG9iamVjdCwgbURhdGFOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGJpbmRpbmdzID0gbURhdGEgPyBtRGF0YS5nZXQoa2V5LnRvU3RyaW5nKCkpIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKGJpbmRpbmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJpbmRpbmdzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRvciA9IGJpbmRpbmdzWzBdLmRlc2NyaXB0b3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRvciA9IGJpbmRpbmdzLmluaXRpYXRvckRlc2NyaXB0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gICAgfVxufVxuZXhwb3J0cy5CaW5kaW5nID0gQmluZGluZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFtbHVaR2x1Wnk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmJHbGlMMEpwYm1ScGJtY3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTd3dRMEZCZVVRN1FVRkZla1FzTUVOQlFYVkRPMEZCUTNaRExHOUVRVUZ6UkR0QlFVTjBSQ3hyUkVGQkswYzdRVUZKTDBjc1RVRkJUU3hYUVVGWExFZEJRVWNzYTBKQlFXdENMRU5CUVVNN1FVRkRka01zVFVGQlRTeFJRVUZSTEVkQlFVY3NWVUZCVlN4RFFVRkRPMEZCYzBJMVFpeE5RVUZoTEU5QlFVODdTVUV3UldoQ0xGbEJRVmtzVFVGQlV5eEZRVUZGTEZGQlFWY3NSVUZCUlN4UFFVRnZRaXhYUVVGWE8xRkJReTlFTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRM0pDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRE8xRkJRM3BDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMnBDTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExEWkNRVUUyUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMGxCUTNKR0xFTkJRVU03U1VGTFRTeFJRVUZSTEVOQlFVTXNTMEZCVnp0UlFVTjJRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVTjJRaXhEUVVGRE8wbEJVVTBzVDBGQlR6dFJRVU5XTEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRKUVVOd1JDeERRVUZETzBsQlUwMHNUMEZCVHl4RFFVRkRMRk5CUVZrc1JVRkJSU3hSUVVGWE8xRkJRM0JETEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1UwRkJVeXhEUVVGRE8xRkJRek5DTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUjBGQlJ5eFJRVUZSTEVOQlFVTTdVVUZEYkVNc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4SFFVRkhMRWxCUVVrc1EwRkJReXcyUWtGQk5rSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8xRkJSM1JITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExGZEJRVmNzUlVGQlJTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRPMWxCUVVVc2VVSkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRmRCUVZjc1JVRkJSU3hKUVVGSkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZET1Vjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03V1VGQlJTeDVRa0ZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzVVVGQlVTeEZRVUZGTEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVkc1J5eE5RVUZOTEdOQlFXTXNSMEZCUnl4elFrRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNWMEZCVnl4RFFVRkRMRWxCUVVrc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU0zUlN4TlFVRk5MR2RDUVVGblFpeEhRVUZITEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNN1VVRkRjRVVzU1VGQlNTeG5Ra0ZCWjBJN1dVRkJSU3huUWtGQlowSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRSUVVkb1JDeE5RVUZOTEV0QlFVc3NSMEZCUnl4elFrRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNVVUZCVVN4RFFVRkRMRWxCUVVrc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU01UkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRPMWxCUVVVc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRelZFTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOd1F5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVkcVJDeE5RVUZOTEdOQlFXTXNSMEZCUnl4VFFVRlRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVU5vUkN4TlFVRk5MRmRCUVZjc1IwRkJSeXc0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTndSU3hOUVVGTkxHTkJRV01zUjBGQlJ5dzRRa0ZCYlVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eERRVUZETzFGQlEyNUdMRWxCUVVrc1MwRkJTeXhIUVVGblFpdzRRa0ZCYlVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEdOQlFXTXNRMEZCUXl4RFFVRkRPMUZCUXpGRkxFbEJRVWtzUTBGQlF5eExRVUZMTzFsQlFVVXNhVU5CUVhOQ0xFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4alFVRmpMRVZCUVVVc1NVRkJTU3hoUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVWQyUnl4TFFVRkxMRWRCUVVjc09FSkJRVzFDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hqUVVGakxFTkJRV2RDTEVOQlFVTTdVVUZEZUVVc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTTFRaXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMUZCUnk5Q0xFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hEUVVGRE8xRkJRM3BDTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRlRVVzUTBGQlF6dEpRVTlOTEUxQlFVMDdVVUZGVkN4TlFVRk5MRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVNdlF5eE5RVUZOTEdOQlFXTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8xRkJSemxFTEUxQlFVMHNWMEZCVnl4SFFVRkhMSE5DUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVOMlJDeE5RVUZOTEdOQlFXTXNSMEZCUnl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTTdVVUZEYUVZc1RVRkJUU3hqUVVGakxFZEJRVWNzYzBKQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxGZEJRVmNzUTBGQlF5eERRVUZETzFGQlEyaEZMRTFCUVUwc1owSkJRV2RDTEVkQlFVY3NZMEZCWXl4RFFVRkRMRU5CUVVNc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU03VVVGRk5VY3NUVUZCVFN4alFVRmpMRWRCUVVjc1UwRkJVeXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZEYUVRc1RVRkJUU3hMUVVGTExFZEJRV2RDTERoQ1FVRnRRaXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNZMEZCWXl4RFFVRkRMRU5CUVVNN1VVRkZOVVVzU1VGQlNTeG5Ra0ZCWjBJc1JVRkJSVHRaUVVOc1FpeEpRVUZKTEdOQlFXTTdaMEpCUVVVc1kwRkJZeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTTNSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzWTBGQll5eEZRVUZGTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eERRVUZETzFsQlEzcEhMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zT0VKQlFXMUNMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEyeEdPMUZCUlVRc1NVRkJTU3hqUVVGakxFVkJRVVU3V1VGRGFFSXNOa0pCUVhOQ0xFTkJRVU1zWTBGQll5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUXpkRExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNPRUpCUVcxQ0xFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51UlN4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUlVGQlJUdG5Ra0ZEZUVJc1NVRkJTU3hYUVVGWE8yOUNRVUZGTEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzJkQ1FVTnVSQ3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdaMEpCUTJwR0xHbERRVUZ6UWl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzWTBGQll5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMkZCUXpkRU8xTkJRMG83U1VGRFRDeERRVUZETzBsQlUwOHNhVUpCUVdsQ08xRkJRM0pDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOc1FpeFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUTI1RUxFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTzFsQlF5OURMRWRCUVVjc1JVRkJSU3hUUVVGVExGVkJRVlU3WjBKQlEzQkNMRWxCUVVrc1NVRkJTU3hEUVVGRExFbEJRVWtzUzBGQlN5eFhRVUZYTEVsQlFVa3NTVUZCU1N4TFFVRkxMRWxCUVVrc1EwRkJReXhUUVVGVE8yOUNRVUZGTEU5QlFVOHNVMEZCVXl4RFFVRkRPMmRDUVVNelJTeFBRVUZQTEd0Q1FVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8xbEJRM1pFTEVOQlFVTTdXVUZEUkN4SFFVRkhMRVZCUVVVc1UwRkJVeXhWUVVGVkxFTkJRVU1zVFVGQmFVUTdaMEpCUTNSRkxFbEJRVWtzU1VGQlNTeERRVUZETEVsQlFVa3NTMEZCU3l4VlFVRlZMRWxCUVVrc1NVRkJTU3hMUVVGTExFbEJRVWtzUTBGQlF5eFRRVUZUTzI5Q1FVRkZMRTlCUVU4N1owSkJRMmhGTEd0Q1FVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRTFCUVUwc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dFpRVU40UkN4RFFVRkRPMWxCUTBRc1dVRkJXU3hGUVVGRkxFbEJRVWs3V1VGRGJFSXNWVUZCVlN4RlFVRkZMRWxCUVVrN1UwRkRia0lzUTBGQlF5eERRVUZETzFGQlEwZ3NUVUZCVFN4WFFVRlhMRWRCUVVjc1QwRkJUeXhEUVVGRExIZENRVUYzUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCZFVJc1EwRkJRenRSUVVOMlJ5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFTkJRVU03VVVGREwwUXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTTFSU3g1UWtGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc2JVSkJRVzFDTEVWQlFVVXNWMEZCVnl4RFFVRkRMRU5CUVVNN1NVRkRiRVVzUTBGQlF6dEpRVmxQTEdsQ1FVRnBRaXhEUVVGRExFMUJRWE5DTEVWQlFVVXNVVUZCYlVJc1JVRkJSU3hMUVVGVkxFVkJRVVVzVlVGQmNVSTdVVUZEY0Vjc1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eE5RVUZOTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkRla01zU1VGQlNTeFZRVUZWTEVWQlFVVTdXVUZEV2l4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRPMU5CUXpsRk8xRkJRMFFzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF6dEpRVU40UXl4RFFVRkRPMGxCVjA4c05rSkJRVFpDTEVOQlFVTXNUVUZCWXl4RlFVRkZMRWRCUVdNN1VVRkRhRVVzU1VGQlNTeFZRVUZWTEVkQlFXMURMRTlCUVU4c1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGREwwWXNTVUZCU1N4VFFVRlRMRWRCUVc5RExGRkJRVkVzUTBGQlF6dFJRVU14UkN4SlFVRkpMRk5CUVZNc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRGRrSXNTVUZCU1N4TlFVRk5MRXRCUVdFc1NVRkJTU3hEUVVGRExGTkJRVk03V1VGQlJTeFRRVUZUTEVkQlFVY3NWMEZCVnl4RFFVRkRPMUZCUXk5RUxFOUJRVThzUTBGQlF5eFZRVUZWTEVWQlFVVTdXVUZEYUVJc1UwRkJVeXhIUVVGSExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1dVRkROME1zU1VGQlNTeERRVUZETEZOQlFWTTdaMEpCUVVVc1RVRkJUVHRaUVVOMFFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hMUVVGTExHbENRVUZwUWp0blFrRkJSU3hUUVVGVExFZEJRVWNzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRaUVVOdVJ5eFZRVUZWTEVkQlFVY3NUMEZCVHl4RFFVRkRMSGRDUVVGM1FpeERRVUZETEZOQlFWTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRUUVVOcVJUdFJRVU5FTEVsQlFVa3NNRUpCUVRCQ0xFZEJRVWNzUzBGQlN5eERRVUZETzFGQlEzWkRMRWxCUVVrc1ZVRkJWU3hGUVVGRk8xbEJRMW9zU1VGQlNTeFZRVUZWTEVOQlFVTXNSMEZCUnl4SlFVRkpMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeExRVUZMTEZsQlFWazdaMEpCUVVVc01FSkJRVEJDTEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUXpsR0xFbEJRVWtzVlVGQlZTeERRVUZETEVkQlFVY3NTVUZCU1N4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUzBGQlN5eFpRVUZaTzJkQ1FVRkZMREJDUVVFd1FpeEhRVUZITEVsQlFVa3NRMEZCUXp0VFFVTnFSenRSUVVORUxFbEJRVWtzTUVKQlFUQkNMRVZCUVVVN1dVRkROVUlzVFVGQlRTeExRVUZMTEVkQlFVY3NjMEpCUVZjc1EwRkJUU3hOUVVGTkxFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdXVUZEYkVRc1RVRkJUU3hSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU03V1VGREwwUXNTVUZCU1N4UlFVRlJMRVZCUVVVN1owSkJRMVlzU1VGQlNTeFJRVUZSTEZsQlFWa3NTMEZCU3l4RlFVRkZPMjlDUVVNelFpeFZRVUZWTEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGVkJRVlVzUTBGQlF6dHBRa0ZEZGtNN08yOUNRVUZOTEZWQlFWVXNSMEZCUnl4UlFVRlJMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTTdZVUZEY0VRN1UwRkRTanRSUVVORUxFOUJRVThzVlVGQlZTeERRVUZETzBsQlEzUkNMRU5CUVVNN1EwRkRTanRCUVhCUlJDd3dRa0Z2VVVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIFZhbHVlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG59XG5leHBvcnRzLlZhbHVlRXJyb3IgPSBWYWx1ZUVycm9yO1xuY2xhc3MgVHlwZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuZXhwb3J0cy5UeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5jbGFzcyBDb25maWd1cmF0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG59XG5leHBvcnRzLkNvbmZpZ3VyYXRpb25FcnJvciA9IENvbmZpZ3VyYXRpb25FcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVJYSnliM0p6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5c2FXSXZSWEp5YjNKekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCVDBFc1RVRkJZU3hWUVVGWExGTkJRVkVzUzBGQlN6dERRVUZKTzBGQlFYcERMR2REUVVGNVF6dEJRVk42UXl4TlFVRmhMRk5CUVZVc1UwRkJVU3hMUVVGTE8wTkJRVWs3UVVGQmVFTXNPRUpCUVhkRE8wRkJWWGhETEUxQlFXRXNhMEpCUVcxQ0xGTkJRVkVzUzBGQlN6dERRVUZKTzBGQlFXcEVMR2RFUVVGcFJDSjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBXYXRjaGVkXzEgPSByZXF1aXJlKFwifmJkby9saWIvV2F0Y2hlZFwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCBvbl9jaGFuZ2VfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJvbi1jaGFuZ2VcIikpO1xuY2xhc3MgRmllbGQge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICAgICAgdGhpcy5maWVsZHMgPSBbXTtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICB9XG4gICAgYWRkRmllbGQoZmllbGQpIHtcbiAgICAgICAgaWYgKHRoaXMuZmllbGRzLmluY2x1ZGVzKGZpZWxkKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKGZpZWxkLm9iamVjdCAmJiBmaWVsZC5vYmplY3QuaXNCRE9Nb2RlbClcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnByb3h5ZnlWYWx1ZShmaWVsZC52YWx1ZU9mKCkpO1xuICAgICAgICBpZiAoZmllbGQgaW5zdGFuY2VvZiBXYXRjaGVkXzEuV2F0Y2hlZCAmJiBmaWVsZC5zdWJPYmplY3QpXG4gICAgICAgICAgICB0aGlzLnJlZGVmaW5lVmFsdWUoZmllbGQuc3ViT2JqZWN0KTtcbiAgICAgICAgdGhpcy5yZWRlZmluZVZhbHVlKGZpZWxkKTtcbiAgICAgICAgdGhpcy5maWVsZHMucHVzaChmaWVsZCk7XG4gICAgfVxuICAgIHJlbW92ZUZpZWxkKGZpZWxkKSB7XG4gICAgICAgIGlmICghdGhpcy5maWVsZHMuaW5jbHVkZXMoZmllbGQpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoZmllbGQgaW5zdGFuY2VvZiBXYXRjaGVkXzEuV2F0Y2hlZCAmJiBmaWVsZC5zdWJPYmplY3QpXG4gICAgICAgICAgICB0aGlzLnJlc3RvcmVWYWx1ZShmaWVsZC5zdWJPYmplY3QpO1xuICAgICAgICB0aGlzLnJlc3RvcmVWYWx1ZShmaWVsZCk7XG4gICAgICAgIHV0aWxfMS5yZW1vdmVFbGVtZW50RnJvbUFycmF5KHRoaXMuZmllbGRzLCBmaWVsZCk7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5maWVsZHMpXG4gICAgICAgICAgICBmaWVsZC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICByZWRlZmluZVZhbHVlKGZpZWxkKSB7XG4gICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lV2lsZGNhcmRNZXRhZGF0YShmaWVsZCwgXCJ2YWx1ZVwiLCBmaWVsZC52YWx1ZU9mKCkpO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShmaWVsZCwgXCJ2YWx1ZVwiKTtcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShmaWVsZCwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB1dGlsXzEuZ2V0UHJveHlUYXJnZXQodmFsdWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRoYXRWYWx1ZSA9IHV0aWxfMS5nZXRQcm94eVRhcmdldCh0aGF0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHRoYXRWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoYXQudmFsdWUgPSB0aGF0LnByb3h5ZnlWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVzdG9yZVZhbHVlKGZpZWxkKSB7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoZmllbGQsIFwidmFsdWVcIik7XG4gICAgICAgIGZpZWxkLnNldFZhbHVlKHV0aWxfMS5nZXRQcm94eVRhcmdldCh0aGlzLnZhbHVlKSk7XG4gICAgfVxuICAgIHByb3h5ZnlWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSB8fCB1dGlsXzEuaXNPYmplY3QodmFsdWUpICYmICF2YWx1ZS5pc0JET01vZGVsKSB7XG4gICAgICAgICAgICBsZXQgaXNTaGFsbG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5maWVsZHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWZpZWxkLmlzU2hhbGxvdykge1xuICAgICAgICAgICAgICAgICAgICBpc1NoYWxsb3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgPSBvbl9jaGFuZ2VfMS5kZWZhdWx0LnRhcmdldCh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gb25fY2hhbmdlXzEuZGVmYXVsdCh2YWx1ZSwgKHBhdGgsIGNoYW5nZWRWYWx1ZSwgcHJldmlvdXNWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhdGhTaXplID0gcGF0aC5zcGxpdChcIi5cIikubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5maWVsZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWVsZC5pc1NoYWxsb3cgfHwgZmllbGQuaXNTaGFsbG93ICYmIHBhdGhTaXplIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnByb3h5SGFuZGxlcihwYXRoLCBjaGFuZ2VkVmFsdWUsIHByZXZpb3VzVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgeyBpc1NoYWxsb3cgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVJtbGxiR1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJ4cFlpOUdhV1ZzWkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZGUVN3NFEwRkJNa003UVVGRk0wTXNNRU5CUVcxR08wRkJRMjVHTEd0RVFVRTJSRHRCUVVNM1JDeHJSVUZCYVVNN1FVRnBRbXBETEUxQlFXRXNTMEZCU3p0SlFXOURaQ3haUVVGWkxFMUJRVk1zUlVGQlJTeFJRVUZYTzFGQlJqRkNMRmRCUVUwc1IwRkJhVU1zUlVGQlJTeERRVUZETzFGQlJ6bERMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETzFGQlEzSkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETzBsQlF6ZENMRU5CUVVNN1NVRlZUU3hSUVVGUkxFTkJRVU1zUzBGQk5FSTdVVUZEZUVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNN1dVRkJSU3hQUVVGUE8xRkJSWGhETEVsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1NVRkJaU3hMUVVGTExFTkJRVU1zVFVGQlR5eERRVUZETEZWQlFWVTdXVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGVrY3NTVUZCU1N4TFFVRkxMRmxCUVZrc2FVSkJRVThzU1VGQlNTeExRVUZMTEVOQlFVTXNVMEZCVXp0WlFVRkZMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUTNKR0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRNVUlzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRE5VSXNRMEZCUXp0SlFWVk5MRmRCUVZjc1EwRkJReXhMUVVFMFFqdFJRVU16UXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRPMWxCUVVVc1QwRkJUenRSUVVONlF5eEpRVUZKTEV0QlFVc3NXVUZCV1N4cFFrRkJUeXhKUVVGSkxFdEJRVXNzUTBGQlF5eFRRVUZUTzFsQlFVVXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEY0VZc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTjZRaXcyUWtGQmMwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF5OURMRU5CUVVNN1NVRlRUU3hSUVVGUkxFTkJRVU1zUzBGQlowTTdVVUZETlVNc1MwRkJTeXhOUVVGTkxFdEJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFR0WlFVRkZMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETTBRc1EwRkJRenRKUVZGTkxFOUJRVTg3VVVGRFZpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1NVRkRkRUlzUTBGQlF6dEpRVmRQTEdGQlFXRXNRMEZCUXl4TFFVRTBRanRSUVVNNVF5eHBRMEZCYzBJc1EwRkJVeXhMUVVGTExFVkJRVVVzVDBGQlR5eEZRVUZGTEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRMmhGTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOc1FpeFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU4yUXl4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVWQlFVVTdXVUZEYmtNc1IwRkJSenRuUWtGRFF5eFBRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1dVRkRkRUlzUTBGQlF6dFpRVU5FTEVkQlFVY3NRMEZCUXl4TFFVRlhPMmRDUVVOWUxFdEJRVXNzUjBGQlJ5eHhRa0ZCWXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8yZENRVU01UWl4TlFVRk5MRk5CUVZNc1IwRkJSeXh4UWtGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRuUWtGRE4wTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVenR2UWtGQlJTeFBRVUZQTzJkQ1FVTm9ReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRE1VTXNRMEZCUXp0WlFVTkVMRmxCUVZrc1JVRkJSU3hKUVVGSk8xbEJRMnhDTEZWQlFWVXNSVUZCUlN4SlFVRkpPMU5CUTI1Q0xFTkJRVU1zUTBGQlF6dEpRVU5RTEVOQlFVTTdTVUZUVHl4WlFVRlpMRU5CUVVNc1MwRkJORUk3VVVGRE4wTXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhMUVVGTExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdVVUZEZGtNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eHhRa0ZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF5OURMRU5CUVVNN1NVRlZUeXhaUVVGWkxFTkJRVU1zUzBGQldUdFJRVU0zUWl4SlFVRkpMRXRCUVVzc1dVRkJXU3hMUVVGTExFbEJRVWtzWlVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVU4c1MwRkJUU3hEUVVGRExGVkJRVlVzUlVGQlJUdFpRVU4yUlN4SlFVRkpMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRGNrSXNTMEZCU3l4TlFVRk5MRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzJkQ1FVTTNRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNSVUZCUlR0dlFrRkRiRUlzVTBGQlV5eEhRVUZITEV0QlFVc3NRMEZCUXp0dlFrRkRiRUlzVFVGQlRUdHBRa0ZEVkR0aFFVTktPMWxCUTBRc1MwRkJTeXhIUVVGSExHMUNRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJReTlDTEU5QlFVOHNiVUpCUVZFc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNXVUZCV1N4RlFVRkZMR0ZCUVdFc1JVRkJSU3hGUVVGRk8yZENRVU42UkN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJRenRuUWtGRGVFTXNTMEZCU3l4TlFVRk5MRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzI5Q1FVTTNRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1UwRkJVeXhKUVVGSkxGRkJRVkVzU1VGQlNTeERRVUZETEVWQlFVVTdkMEpCUTNSRUxFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRlJMRmxCUVZrc1JVRkJVU3hoUVVGaExFTkJRVU1zUTBGQlF6dHhRa0ZEY2tVN2FVSkJRMG83V1VGRFRDeERRVUZETEVWQlFVVXNSVUZCUlN4VFFVRlRMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRM0pDTzFGQlEwUXNUMEZCVHl4TFFVRkxMRU5CUVVNN1NVRkRha0lzUTBGQlF6dERRVU5LTzBGQmJrdEVMSE5DUVcxTFF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZyYW1ld29ya18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZnJhbWV3b3JrXCIpO1xuY2xhc3MgTW9kZWxSZWdpc3RyeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubW9kZWxzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghTW9kZWxSZWdpc3RyeS5pbnN0YW5jZSlcbiAgICAgICAgICAgIE1vZGVsUmVnaXN0cnkuaW5zdGFuY2UgPSBuZXcgTW9kZWxSZWdpc3RyeSgpO1xuICAgICAgICByZXR1cm4gTW9kZWxSZWdpc3RyeS5pbnN0YW5jZTtcbiAgICB9XG4gICAgcmVnaXN0ZXIobW9kZWwpIHtcbiAgICAgICAgdGhpcy5tb2RlbHMuc2V0KGAke21vZGVsLmNsYXNzTmFtZX0ke21vZGVsLmlkfWAsIG1vZGVsKTtcbiAgICB9XG4gICAgdW5yZWdpc3Rlcihtb2RlbCkge1xuICAgICAgICB0aGlzLm1vZGVscy5kZWxldGUoYCR7bW9kZWwuY2xhc3NOYW1lfSR7bW9kZWwuaWR9YCk7XG4gICAgfVxuICAgIGdldE1vZGVsQnlJZChpZCwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxzLmdldChgJHt0aGlzLmdldENsYXNzTmFtZShjb25zdHJ1Y3Rvcil9JHtpZH1gKTtcbiAgICB9XG4gICAgZ2V0TW9kZWxzQnlBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgY29uc3QgbW9kZWxzID0gW107XG4gICAgICAgIHRoaXMubW9kZWxzLmZvckVhY2goKG1vZGVsKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4gbW9kZWwpIHx8IGVsZW1lbnQgIT09IG1vZGVsW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vZGVscy5wdXNoKG1vZGVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtb2RlbHM7XG4gICAgfVxuICAgIHVwZGF0ZUlEKG9sZElELCBjb25zdHJ1Y3Rvcikge1xuICAgICAgICBjb25zdCBtb2RlbCA9IHRoaXMubW9kZWxzLmdldChgJHt0aGlzLmdldENsYXNzTmFtZShjb25zdHJ1Y3Rvcil9JHtvbGRJRH1gKTtcbiAgICAgICAgaWYgKCFtb2RlbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5tb2RlbHMuZGVsZXRlKGAke3RoaXMuZ2V0Q2xhc3NOYW1lKGNvbnN0cnVjdG9yKX0ke29sZElEfWApO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKG1vZGVsKTtcbiAgICB9XG4gICAgZ2V0TW9kZWxzQnlDb25kaXRpb24oZnVuYywgbW9kZSA9IFwiYWxsXCIpIHtcbiAgICAgICAgY29uc3QgbW9kZWxzID0gW107XG4gICAgICAgIGxldCBsYXN0TW9kZWw7XG4gICAgICAgIGZvciAoY29uc3QgbW9kZWwgb2YgdGhpcy5tb2RlbHMudmFsdWVzKCkpIHtcbiAgICAgICAgICAgIGlmIChmdW5jKG1vZGVsKSkge1xuICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSBcImZpcnN0XCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbDtcbiAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gXCJhbGxcIilcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxzLnB1c2gobW9kZWwpO1xuICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSBcImxhc3RcIilcbiAgICAgICAgICAgICAgICAgICAgbGFzdE1vZGVsID0gbW9kZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGUgPT09IFwibGFzdFwiID8gbGFzdE1vZGVsIDogbW9kZWxzO1xuICAgIH1cbiAgICBnZXRDbGFzc05hbWUoY29uc3RydWN0b3IpIHtcbiAgICAgICAgbGV0IGNsYXNzTmFtZTtcbiAgICAgICAgaWYgKGZyYW1ld29ya18xLmlzQmFzZUNvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY29uc3RydWN0b3IuY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFwiY2xhc3NOYW1lXCIgaW4gY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNvbnN0cnVjdG9yLmNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY29uc3RydWN0b3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjb25zdHJ1Y3Rvci5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH1cbn1cbmV4cG9ydHMuTW9kZWxSZWdpc3RyeSA9IE1vZGVsUmVnaXN0cnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lUVzlrWld4U1pXZHBjM1J5ZVM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmJHbGlMMDF2WkdWc1VtVm5hWE4wY25rdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZEUVN4dlJFRkJlVVE3UVVGWGVrUXNUVUZCWVN4aFFVRmhPMGxCYVVOMFFqdFJRV1JSTEZkQlFVMHNSMEZCTUVJc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF6dEpRV014UWl4RFFVRkRPMGxCVEd4Q0xFMUJRVTBzUTBGQlF5eFhRVUZYTzFGQlEzSkNMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zVVVGQlVUdFpRVUZGTEdGQlFXRXNRMEZCUXl4UlFVRlJMRWRCUVVjc1NVRkJTU3hoUVVGaExFVkJRVVVzUTBGQlF6dFJRVU14UlN4UFFVRlBMR0ZCUVdFc1EwRkJReXhSUVVGUkxFTkJRVU03U1VGRGJFTXNRMEZCUXp0SlFWVk5MRkZCUVZFc1EwRkJReXhMUVVGbE8xRkJRek5DTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEZOQlFWTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETlVRc1EwRkJRenRKUVZOTkxGVkJRVlVzUTBGQlF5eExRVUZsTzFGQlF6ZENMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRk5CUVZNc1IwRkJSeXhMUVVGTExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTjRSQ3hEUVVGRE8wbEJWVTBzV1VGQldTeERRVUUyUXl4RlFVRlZMRVZCUVVVc1YwRkJZenRSUVVOMFJpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQmJVTXNRMEZCUXp0SlFVTjJSeXhEUVVGRE8wbEJWVTBzY1VKQlFYRkNMRU5CUVVNc1ZVRkJkVU03VVVGRGFFVXNUVUZCVFN4TlFVRk5MRWRCUVdVc1JVRkJSU3hEUVVGRE8xRkJRemxDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVTdXVUZETVVJc1MwRkJTeXhOUVVGTkxFZEJRVWNzU1VGQlNTeFZRVUZWTEVWQlFVVTdaMEpCUXpGQ0xFbEJRVWtzVlVGQlZTeERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHR2UWtGRGFFTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzI5Q1FVTm9ReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMRWxCUVVrc1QwRkJUeXhMUVVGelFpeExRVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN2QwSkJRemRFTEU5QlFVODdjVUpCUTFZN2FVSkJRMG83WVVGRFNqdFpRVU5FTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRGRrSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRTQ3hQUVVGUExFMUJRVTBzUTBGQlF6dEpRVU5zUWl4RFFVRkRPMGxCV1Uwc1VVRkJVU3hEUVVGeFFpeExRVUZqTEVWQlFVVXNWMEZCWXp0UlFVTTVSQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU16UlN4SlFVRkpMRU5CUVVNc1MwRkJTenRaUVVGRkxFOUJRVTg3VVVGRGJrSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEYUVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTjZRaXhEUVVGRE8wbEJaVTBzYjBKQlFXOUNMRU5CUVVNc1NVRkJhME1zUlVGQlJTeFBRVUZwUXl4TFFVRkxPMUZCUTJ4SExFMUJRVTBzVFVGQlRTeEhRVUZsTEVWQlFVVXNRMEZCUXp0UlFVTTVRaXhKUVVGSkxGTkJRU3RDTEVOQlFVTTdVVUZEY0VNc1MwRkJTeXhOUVVGTkxFdEJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hGUVVGRk8xbEJRM1JETEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8yZENRVU5pTEVsQlFVa3NTVUZCU1N4TFFVRkxMRTlCUVU4N2IwSkJRVVVzVDBGQlR5eExRVUZMTEVOQlFVTTdaMEpCUTI1RExFbEJRVWtzU1VGQlNTeExRVUZMTEV0QlFVczdiMEpCUVVVc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0blFrRkRka01zU1VGQlNTeEpRVUZKTEV0QlFVc3NUVUZCVFR0dlFrRkJSU3hUUVVGVExFZEJRVWNzUzBGQlN5eERRVUZETzJGQlF6RkRPMU5CUTBvN1VVRkRSQ3hQUVVGUExFbEJRVWtzUzBGQlN5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETzBsQlEyaEVMRU5CUVVNN1NVRlZUeXhaUVVGWkxFTkJRVU1zVjBGQk5rTTdVVUZET1VRc1NVRkJTU3hUUVVGcFFpeERRVUZETzFGQlEzUkNMRWxCUVVrc05rSkJRV2xDTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUVVVN1dVRkRhRU1zVTBGQlV5eEhRVUZITEZkQlFWY3NRMEZCUXl4VFFVRlRMRU5CUVVNN1UwRkRja003WVVGQlRTeEpRVUZKTEZkQlFWY3NTVUZCU1N4WFFVRlhMRVZCUVVVN1dVRkRia01zVTBGQlV5eEhRVUZITEZkQlFWY3NRMEZCUXl4VFFVRlRMRU5CUVVNN1UwRkRja003WVVGQlRTeEpRVUZKTEU5QlFVOHNWMEZCVnl4TFFVRkxMRlZCUVZVc1JVRkJSVHRaUVVNeFF5eFRRVUZUTEVkQlFVY3NWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJRenRUUVVOb1F6czdXVUZCVFN4VFFVRlRMRWRCUVZNc1YwRkJXU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTTdVVUZEZGtRc1QwRkJUeXhUUVVGVExFTkJRVU03U1VGRGNrSXNRMEZCUXp0RFFVTktPMEZCTVVwRUxITkRRVEJLUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgTW9kaWZpY2F0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgdHlwZSA9IFwiZGVsZXRlXCIpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydHMuTW9kaWZpY2F0aW9uID0gTW9kaWZpY2F0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVFc5a2FXWnBZMkYwYVc5dUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXNhV0l2VFc5a2FXWnBZMkYwYVc5dUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCVVVFc1RVRkJZU3haUVVGWk8wbEJiVUp5UWl4WlFVRlpMRXRCUVZjc1JVRkJSU3hQUVVGeFFpeFJRVUZSTzFGQlEyeEVMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlEyNUNMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVTBzU1VGQlNTeERRVUZETzBsQlEzaENMRU5CUVVNN1NVRlJUU3hQUVVGUE8xRkJRMVlzVDBGQlR5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTNSQ0xFTkJRVU03U1VGUlRTeFJRVUZSTEVOQlFVTXNTMEZCVlR0UlFVTjBRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVTjJRaXhEUVVGRE8wTkJRMG83UVVFelEwUXNiME5CTWtOREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBNb2RpZmljYXRpb25fMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Nb2RpZmljYXRpb25cIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCBlbnZpcm9ubWVudF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZW52aXJvbm1lbnRcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgRXJyb3JzXzEgPSByZXF1aXJlKFwifmJkby9saWIvRXJyb3JzXCIpO1xuY29uc3Qgb25fY2hhbmdlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwib24tY2hhbmdlXCIpKTtcbmNsYXNzIFByb3BlcnR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5LCBwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5pc1NoYWxsb3cgPSB0cnVlO1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgICAgICBsZXQgcGFyYW1ldGVycyA9IHt9O1xuICAgICAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wYXJhbXMpXG4gICAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1zLnBhcmFtcztcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgY29uc3QgY2FwaXRhbGl6ZWRQcm9wID0gdXRpbF8xLnVjRmlyc3QocHJvcGVydHkpO1xuICAgICAgICBjb25zdCBvblR5cGVDaGVja0ZhaWwgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1UeXBlQ2hlY2tGYWlsYDtcbiAgICAgICAgY29uc3Qgb25UeXBlQ2hlY2sgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1UeXBlQ2hlY2tgO1xuICAgICAgICBjb25zdCBvblR5cGVDaGVja1N1Y2Nlc3MgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1UeXBlQ2hlY2tTdWNjZXNzYDtcbiAgICAgICAgdGhpcy5vblR5cGVDaGVja0ZhaWwgPSBwYXJhbWV0ZXJzID8gcGFyYW1ldGVycy5vblR5cGVDaGVja0ZhaWwgfHwgb25UeXBlQ2hlY2tGYWlsIDogb25UeXBlQ2hlY2tGYWlsO1xuICAgICAgICB0aGlzLm9uVHlwZUNoZWNrID0gcGFyYW1ldGVycyA/IHBhcmFtZXRlcnMub25UeXBlQ2hlY2sgfHwgb25UeXBlQ2hlY2sgOiBvblR5cGVDaGVjaztcbiAgICAgICAgdGhpcy5vblR5cGVDaGVja1N1Y2Nlc3MgPSBwYXJhbWV0ZXJzID8gcGFyYW1ldGVycy5vblR5cGVDaGVja1N1Y2Nlc3MgfHwgb25UeXBlQ2hlY2tTdWNjZXNzIDogb25UeXBlQ2hlY2tTdWNjZXNzO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmRvU2V0VmFsdWUodmFsdWUsIHRydWUpO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSB0aGlzLnByb3BlcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICghdXRpbF8xLmlzUHJveHkodmFsdWUpICYmIHRoaXMuc2F2ZUluTG9jYWxTdG9yYWdlICYmIHV0aWxfMS5pc0Z1bmN0aW9uKHRoaXMub2JqZWN0LmdldE5hbWVzcGFjZWRTdG9yYWdlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLm9iamVjdC5nZXROYW1lc3BhY2VkU3RvcmFnZShzdHJpbmdLZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgdHlwZUd1YXJkKHZhbHVlKSB7XG4gICAgICAgIGxldCB2YWx1ZVRvUGFzcyA9IHZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNb2RpZmljYXRpb25fMS5Nb2RpZmljYXRpb24pXG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgY29uc3QgZGVzaWduVHlwZSA9IG1ldGFkYXRhXzEuZ2V0RGVzaWduVHlwZSh0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eS50b1N0cmluZygpKTtcbiAgICAgICAgY29uc3QgdHlwZUVycm9yID0gbmV3IEVycm9yc18xLlR5cGVFcnJvcihgJHt2YWx1ZVRvUGFzc30gaXMgbm90IHR5cGUgb2YgJHtkZXNpZ25UeXBlLmNsYXNzTmFtZSB8fCBkZXNpZ25UeXBlLm5hbWV9YCk7XG4gICAgICAgIGNvbnN0IGlkeFN0cnVjdE9iaiA9IHRoaXMub2JqZWN0O1xuICAgICAgICBsZXQgZXJyb3I7XG4gICAgICAgIGlmICghdGhpcy5udWxsYWJsZSAmJiAodmFsdWVUb1Bhc3MgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZVRvUGFzcyA9PT0gbnVsbCkpXG4gICAgICAgICAgICBlcnJvciA9IHR5cGVFcnJvcjtcbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgaWYgKHV0aWxfMS5pc1ByaW1pdGl2ZSh2YWx1ZVRvUGFzcykpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlVG9QYXNzICE9PSBkZXNpZ25UeXBlLm5hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMubnVsbGFibGUgfHwgISh2YWx1ZVRvUGFzcyA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlVG9QYXNzID09PSBudWxsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gdHlwZUVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCEodmFsdWVUb1Bhc3MgaW5zdGFuY2VvZiBkZXNpZ25UeXBlKSlcbiAgICAgICAgICAgICAgICBlcnJvciA9IHR5cGVFcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVycm9yICYmIHV0aWxfMS5pc0Z1bmN0aW9uKGlkeFN0cnVjdE9ialt0aGlzLm9uVHlwZUNoZWNrXSkpXG4gICAgICAgICAgICBlcnJvciA9IGlkeFN0cnVjdE9ialt0aGlzLm9uVHlwZUNoZWNrXSh2YWx1ZVRvUGFzcyk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKHV0aWxfMS5pc0Z1bmN0aW9uKGlkeFN0cnVjdE9ialt0aGlzLm9uVHlwZUNoZWNrRmFpbF0pKSB7XG4gICAgICAgICAgICAgICAgaWR4U3RydWN0T2JqW3RoaXMub25UeXBlQ2hlY2tGYWlsXShlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh1dGlsXzEuaXNGdW5jdGlvbihpZHhTdHJ1Y3RPYmoub25UeXBlQ2hlY2tGYWlsKSkge1xuICAgICAgICAgICAgICAgIGlkeFN0cnVjdE9iai5vblR5cGVDaGVja0ZhaWwoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHV0aWxfMS5pc0Z1bmN0aW9uKGlkeFN0cnVjdE9ialt0aGlzLm9uVHlwZUNoZWNrU3VjY2Vzc10pKVxuICAgICAgICAgICAgaWR4U3RydWN0T2JqW3RoaXMub25UeXBlQ2hlY2tTdWNjZXNzXSgpO1xuICAgICAgICByZXR1cm4gIShCb29sZWFuKGVycm9yKS52YWx1ZU9mKCkpO1xuICAgIH1cbiAgICBwcm94eUhhbmRsZXIoX3BhdGgsIF9jaGFuZ2VkVmFsLCBfcHJldlZhbCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmRvU2V0VmFsdWUob25fY2hhbmdlXzEuZGVmYXVsdC50YXJnZXQodmFsdWUpLCBmYWxzZSk7XG4gICAgfVxuICAgIHNob3VsZERvU2V0VmFsdWUodmFsdWUsIHNraXBHdWFyZCA9IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiAhKHZhbHVlID09PSB0aGlzLm93blZhbHVlIHx8ICFza2lwR3VhcmQgJiYgIXRoaXMuZGlzYWJsZVR5cGVHdWFyZCAmJiAhdGhpcy50eXBlR3VhcmQodmFsdWUpKTtcbiAgICB9XG4gICAgZG9TZXRWYWx1ZSh2YWx1ZSwgbW9kaWZ5VmFsdWUgPSB0cnVlLCBza2lwR3VhcmQgPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkRG9TZXRWYWx1ZSh2YWx1ZSwgc2tpcEd1YXJkKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbGV0IHZhbHVlVG9QYXNzO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNb2RpZmljYXRpb25fMS5Nb2RpZmljYXRpb24pIHtcbiAgICAgICAgICAgIHZhbHVlVG9QYXNzID0gdmFsdWUudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHZhbHVlVG9QYXNzID0gdmFsdWU7XG4gICAgICAgIGlmIChtb2RpZnlWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgcHJveHlmaWVkID0gdGhpcy5wcm94eWZ5VmFsdWUodmFsdWVUb1Bhc3MpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHByb3h5ZmllZDtcbiAgICAgICAgICAgIHRoaXMub3duVmFsdWUgPSB2YWx1ZVRvUGFzcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zaG91bGRVcGRhdGVOc1N0b3JhZ2UoKSAmJiB1dGlsXzEuaXNGdW5jdGlvbih0aGlzLm9iamVjdC5zZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSkpIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0LnNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKHRoaXMucHJvcGVydHkudG9TdHJpbmcoKSwgdmFsdWVUb1Bhc3MpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3h5ZnlWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSB8fCB1dGlsXzEuaXNPYmplY3QodmFsdWUpICYmICF2YWx1ZS5pc0JET01vZGVsKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG9uX2NoYW5nZV8xLmRlZmF1bHQudGFyZ2V0KHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBvbl9jaGFuZ2VfMS5kZWZhdWx0KHZhbHVlLCAocGF0aCwgY2hhbmdlZFZhbCwgcHJldlZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3h5SGFuZGxlclJlcGxhY2VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJveHlIYW5kbGVyUmVwbGFjZW1lbnQocGF0aCwgY2hhbmdlZFZhbCwgcHJldlZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm94eUhhbmRsZXIocGF0aCwgY2hhbmdlZFZhbCwgcHJldlZhbCk7XG4gICAgICAgICAgICB9LCB7IGlzU2hhbGxvdzogdGhpcy5pc1NoYWxsb3cgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBzaG91bGRVcGRhdGVOc1N0b3JhZ2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5zYXZlSW5Mb2NhbFN0b3JhZ2UgfHwgIWVudmlyb25tZW50XzEuaXNCcm93c2VyKCkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IHRoaXMucHJvcGVydHkudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3Qga2V5U2hvdWxkQmVVcGRhdGVkID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLm9iamVjdCwgXCJrZXlTaG91bGRCZVVwZGF0ZWRcIikgfHwge307XG4gICAgICAgIGlmIChrZXlTaG91bGRCZVVwZGF0ZWRbc3RyaW5nS2V5XSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAodXRpbF8xLmlzRnVuY3Rpb24odGhpcy5vYmplY3QuZ2V0TmFtZXNwYWNlZFN0b3JhZ2UpICYmXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5nZXROYW1lc3BhY2VkU3RvcmFnZShzdHJpbmdLZXkpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcy5vYmplY3QsIFwia2V5U2hvdWxkQmVVcGRhdGVkXCIsIE9iamVjdC5hc3NpZ24oa2V5U2hvdWxkQmVVcGRhdGVkLCB7IFtzdHJpbmdLZXldOiB0cnVlIH0pKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBCb29sZWFuKG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5vYmplY3QsIFwiY29uc3RydWN0aW9uQ29tcGxldGVcIikpO1xuICAgIH1cbn1cbmV4cG9ydHMuUHJvcGVydHkgPSBQcm9wZXJ0eTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVISnZjR1Z5ZEhrdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyeHBZaTlRY205d1pYSjBlUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkRRU3gzUkVGQmNVUTdRVUZEY2tRc2EwUkJRV2xHTzBGQlEycEdMSGRFUVVGdFJEdEJRVU51UkN3d1EwRkJjMFk3UVVGRmRFWXNORU5CUVRSRE8wRkJRelZETEd0RlFVRnBRenRCUVRKRmFrTXNUVUZCWVN4UlFVRlJPMGxCY1VkcVFpeFpRVUZaTEUxQlFWTXNSVUZCUlN4UlFVRlhMRVZCUVVVc1RVRkJaMFE3VVVGeVFqZEZMR05CUVZNc1IwRkJXU3hKUVVGSkxFTkJRVU03VVVGelFqZENMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETzFGQlEzSkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETzFGQlEzcENMRWxCUVVrc1ZVRkJWU3hIUVVGdlFpeEZRVUZGTEVOQlFVTTdVVUZGY2tNc1NVRkJTU3hOUVVGTkxFbEJRVWtzVFVGQlRTeERRVUZETEUxQlFVMDdXVUZCUlN4VlFVRlZMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU40UkN4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVVm9ReXhOUVVGTkxHVkJRV1VzUjBGQlJ5eGpRVUZQTEVOQlFVTXNVVUZCYTBJc1EwRkJReXhEUVVGRE8xRkJRM0JFTEUxQlFVMHNaVUZCWlN4SFFVRkhMRXRCUVVzc1pVRkJaU3hsUVVGbExFTkJRVU03VVVGRE5VUXNUVUZCVFN4WFFVRlhMRWRCUVVjc1MwRkJTeXhsUVVGbExGZEJRVmNzUTBGQlF6dFJRVU53UkN4TlFVRk5MR3RDUVVGclFpeEhRVUZITEV0QlFVc3NaVUZCWlN4clFrRkJhMElzUTBGQlF6dFJRVVZzUlN4SlFVRkpMRU5CUVVNc1pVRkJaU3hIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRMR1ZCUVdVc1NVRkJTU3hsUVVGbExFTkJRVU1zUTBGQlF5eERRVUZETEdWQlFXVXNRMEZCUXp0UlFVTndSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExGZEJRVmNzU1VGQlNTeFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJRenRSUVVOd1JpeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNc2EwSkJRV3RDTEVsQlFVa3NhMEpCUVd0Q0xFTkJRVU1zUTBGQlF5eERRVUZETEd0Q1FVRnJRaXhEUVVGRE8wbEJRM0JJTEVOQlFVTTdTVUZUVFN4UlFVRlJMRU5CUVVNc1MwRkJaME03VVVGRE5VTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEYWtNc1EwRkJRenRKUVZWTkxFOUJRVTg3VVVGRFZpeE5RVUZOTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlJUTkRMRWxCUVVrc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZGZGtJc1NVRkJTU3hEUVVGRExHTkJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVsQlFVa3NhVUpCUVZVc1EwRkJUeXhKUVVGSkxFTkJRVU1zVFVGQlR5eERRVUZETEc5Q1FVRnZRaXhEUVVGRExFVkJRVVU3V1VGRGJrY3NTMEZCU3l4SFFVRlRMRWxCUVVrc1EwRkJReXhOUVVGUExFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VTBGRE9VUTdVVUZEUkN4UFFVRlBMRXRCUVVzc1EwRkJRenRKUVVOcVFpeERRVUZETzBsQlZVMHNVMEZCVXl4RFFVRkRMRXRCUVdkRE8xRkJRemRETEVsQlFVa3NWMEZCVnl4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVONFFpeEpRVUZKTEV0QlFVc3NXVUZCV1N3eVFrRkJXVHRaUVVGRkxGZEJRVmNzUjBGQlJ5eExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1VVRkZha1VzVFVGQlRTeFZRVUZWTEVkQlFVY3NkMEpCUVdFc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU40UlN4TlFVRk5MRk5CUVZNc1IwRkJSeXhKUVVGSkxHdENRVUZUTEVOQlFVTXNSMEZCUnl4WFFVRlhMRzFDUVVGdFFpeFZRVUZWTEVOQlFVTXNVMEZCVXl4SlFVRkpMRlZCUVZVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6VkhMRTFCUVUwc1dVRkJXU3hIUVVGdFFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUldwRUxFbEJRVWtzUzBGQlN5eERRVUZETzFGQlJWWXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFbEJRVWtzUTBGQlF5eFhRVUZYTEV0QlFVc3NVMEZCVXl4SlFVRkpMRmRCUVZjc1MwRkJTeXhKUVVGSkxFTkJRVU03V1VGQlJTeExRVUZMTEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUlRkR0xFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdXVUZEVWl4SlFVRkpMR3RDUVVGWExFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVTdaMEpCUXpGQ0xFbEJRVWtzVDBGQlR5eFhRVUZYTEV0QlFVc3NWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUlVGQlJUdHZRa0ZEZEVRc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVsQlFVa3NRMEZCUXl4RFFVRkRMRmRCUVZjc1MwRkJTeXhUUVVGVExFbEJRVWtzVjBGQlZ5eExRVUZMTEVsQlFVa3NRMEZCUXp0M1FrRkJSU3hMUVVGTExFZEJRVWNzVTBGQlV5eERRVUZETzJsQ1FVTnFSenRoUVVOS08ybENRVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRMRmRCUVZjc1dVRkJXU3hWUVVGVkxFTkJRVU03WjBKQlFVVXNTMEZCU3l4SFFVRkhMRk5CUVZNc1EwRkJRenRUUVVOMFJUdFJRVWRFTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWxCUVVrc2FVSkJRVlVzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xbEJRVVVzUzBGQlN5eEhRVUZITEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVVUZIT1Vjc1NVRkJTU3hMUVVGTExFVkJRVVU3V1VGRFVDeEpRVUZKTEdsQ1FVRlZMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXl4RlFVRkZPMmRDUVVOb1JDeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzJGQlF6ZERPMmxDUVVGTkxFbEJRVWtzYVVKQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1pVRkJaU3hEUVVGRExFVkJRVVU3WjBKQlEycEVMRmxCUVZrc1EwRkJReXhsUVVGbExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdZVUZEZGtNN08yZENRVUZOTEUxQlFVMHNTMEZCU3l4RFFVRkRPMU5CUTNSQ08yRkJRVTBzU1VGQlNTeHBRa0ZCVlN4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJRenRaUVVGRkxGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUlVGQlJTeERRVUZETzFGQlEzUkhMRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRM1pETEVOQlFVTTdTVUZQVFN4WlFVRlpMRU5CUVVNc1MwRkJZeXhGUVVGRkxGZEJRV3RDTEVWQlFVVXNVVUZCWlR0UlFVTnVSU3hOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1NVRkJTVHRaUVVGRkxFOUJRVTg3VVVGRGJFUXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXh0UWtGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU51UkN4RFFVRkRPMGxCVlUwc1owSkJRV2RDTEVOQlFVTXNTMEZCWjBNc1JVRkJSU3haUVVGeFFpeExRVUZMTzFGQlEyaEdMRTlCUVU4c1EwRkJReXhEUVVGRExFdEJRVXNzUzBGQlN5eEpRVUZKTEVOQlFVTXNVVUZCVVN4SlFVRkpMRU5CUVVNc1UwRkJVeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM2hITEVOQlFVTTdTVUZaVXl4VlFVRlZMRU5CUVVNc1MwRkJaME1zUlVGQlJTeGpRVUYxUWl4SlFVRkpMRVZCUVVVc1dVRkJjVUlzUzBGQlN6dFJRVU14Unl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGVExFTkJRVU03V1VGQlJTeFBRVUZQTzFGQlEzSkVMRWxCUVVrc1YwRkJOa0lzUTBGQlF6dFJRVU5zUXl4SlFVRkpMRXRCUVVzc1dVRkJXU3d5UWtGQldTeEZRVUZGTzFsQlF5OUNMRmRCUVZjc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdVMEZEYWtNN08xbEJRVTBzVjBGQlZ5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTXpRaXhKUVVGSkxGZEJRVmNzUlVGQlJUdFpRVU5pTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdXVUZEYWtRc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFRRVUZUTEVOQlFVTTdXVUZEZGtJc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFhRVUZYTEVOQlFVTTdVMEZETDBJN1VVRkRSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1JVRkJSU3hKUVVGSkxHbENRVUZWTEVOQlFXdENMRWxCUVVrc1EwRkJReXhOUVVGUExFTkJRVU1zTUVKQlFUQkNMRU5CUVVNc1JVRkJSVHRaUVVOeVJpeEpRVUZKTEVOQlFVTXNUVUZCVHl4RFFVRkRMREJDUVVFd1FpeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVGRkxFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdVMEZEYmtjN1NVRkRUQ3hEUVVGRE8wbEJWVk1zV1VGQldTeERRVUZETEV0QlFWazdVVUZETDBJc1NVRkJTU3hMUVVGTExGbEJRVmtzUzBGQlN5eEpRVUZKTEdWQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGUExFdEJRVTBzUTBGQlF5eFZRVUZWTEVWQlFVVTdXVUZEZGtVc1MwRkJTeXhIUVVGSExHMUNRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJReTlDTEU5QlFVOHNiVUpCUVZFc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTlCUVU4c1JVRkJSU3hGUVVGRk8yZENRVU5xUkN4SlFVRkpMRWxCUVVrc1EwRkJReXgxUWtGQmRVSXNSVUZCUlR0dlFrRkRPVUlzU1VGQlNTeERRVUZETEhWQ1FVRjFRaXhEUVVGRExFbEJRVWtzUlVGQlVTeFZRVUZWTEVWQlFWRXNUMEZCVHl4RFFVRkRMRU5CUVVNN2FVSkJRM1pGT3p0dlFrRkJUU3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NSVUZCVVN4VlFVRlZMRVZCUVZFc1QwRkJUeXhEUVVGRExFTkJRVU03V1VGRGNFVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNKRE8xRkJRMFFzVDBGQlR5eExRVUZMTEVOQlFVTTdTVUZEYWtJc1EwRkJRenRKUVZOVExIRkNRVUZ4UWp0UlFVTXpRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhKUVVGSkxFTkJRVU1zZFVKQlFWTXNSVUZCUlR0WlFVRkZMRTlCUVU4c1MwRkJTeXhEUVVGRE8xRkJRek5FTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZETTBNc1RVRkJUU3hyUWtGQmEwSXNSMEZCUnl4elFrRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNiMEpCUVc5Q0xFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEYUVZc1NVRkJTU3hyUWtGQmEwSXNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkJSU3hQUVVGUExFbEJRVWtzUTBGQlF6dFJRVU12UXl4SlFVRkpMR2xDUVVGVkxFTkJRV3RDTEVsQlFVa3NRMEZCUXl4TlFVRlBMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTTdXVUZETjBNc1NVRkJTU3hEUVVGRExFMUJRVThzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eFRRVUZUTEVWQlFVVTdXVUZETjBVc2VVSkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRzlDUVVGdlFpeEZRVUZGTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNSVUZCUlN4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTFSeXhQUVVGUExFbEJRVWtzUTBGQlF6dFRRVU5tTzFGQlEwUXNUMEZCVHl4UFFVRlBMRU5CUVVNc2MwSkJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMSE5DUVVGelFpeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTnlSU3hEUVVGRE8wTkJRMG83UVVGMlVrUXNORUpCZFZKREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBNb2RpZmljYXRpb25fMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Nb2RpZmljYXRpb25cIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3Qgb25fY2hhbmdlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwib24tY2hhbmdlXCIpKTtcbmNvbnN0IGNsb25lX2RlZXBfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJjbG9uZS1kZWVwXCIpKTtcbmNsYXNzIFdhdGNoZWQge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHksIHBhcmFtcykge1xuICAgICAgICB0aGlzLmlzU2hhbGxvdyA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgICAgICBjb25zdCBjYXBpdGFsaXplZFByb3AgPSB1dGlsXzEudWNGaXJzdChwcm9wZXJ0eSk7XG4gICAgICAgIGNvbnN0IG9uSW5pdEZ1bmMgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1Jbml0YDtcbiAgICAgICAgY29uc3Qgb25DaGFuZ2VGdW5jID0gYG9uJHtjYXBpdGFsaXplZFByb3B9Q2hhbmdlYDtcbiAgICAgICAgY29uc3Qgb25BZGRGdW5jID0gYG9uJHtjYXBpdGFsaXplZFByb3B9QWRkYDtcbiAgICAgICAgY29uc3Qgb25SZW1vdmVGdW5jID0gYG9uJHtjYXBpdGFsaXplZFByb3B9UmVtb3ZlYDtcbiAgICAgICAgdGhpcy5vbkluaXQgPSBwYXJhbXMgPyBwYXJhbXMub25Jbml0IHx8IG9uSW5pdEZ1bmMgOiBvbkluaXRGdW5jO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gcGFyYW1zID8gcGFyYW1zLm9uQ2hhbmdlIHx8IG9uQ2hhbmdlRnVuYyA6IG9uQ2hhbmdlRnVuYztcbiAgICAgICAgdGhpcy5vbkFkZCA9IHBhcmFtcyA/IHBhcmFtcy5vbkFkZCB8fCBvbkFkZEZ1bmMgOiBvbkFkZEZ1bmM7XG4gICAgICAgIHRoaXMub25SZW1vdmUgPSBwYXJhbXMgPyBwYXJhbXMub25SZW1vdmUgfHwgb25SZW1vdmVGdW5jIDogb25SZW1vdmVGdW5jO1xuICAgICAgICB0aGlzLmlzU2hhbGxvdyA9IHBhcmFtcyAmJiB0eXBlb2YgcGFyYW1zLmlzU2hhbGxvdyA9PT0gXCJib29sZWFuXCIgPyBwYXJhbXMuaXNTaGFsbG93IDogdGhpcy5pc1NoYWxsb3c7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5zaG91bGREb1NldFZhbHVlKHZhbHVlKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3Qgb2xkVmFsID0gY2xvbmVfZGVlcF8xLmRlZmF1bHQodGhpcy5vd25WYWx1ZSk7XG4gICAgICAgIGxldCB2YWx1ZVRvUGFzcztcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kaWZpY2F0aW9uXzEuTW9kaWZpY2F0aW9uKSB7XG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHZhbHVlO1xuICAgICAgICBsZXQgdXNlVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kaWZpY2F0aW9uXzEuTW9kaWZpY2F0aW9uKSB7XG4gICAgICAgICAgICB2YWx1ZS5zZXRWYWx1ZSh2YWx1ZVRvUGFzcyk7XG4gICAgICAgICAgICB1c2VWYWx1ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWVUb1NldCA9IHVzZVZhbHVlID8gdmFsdWUgOiB2YWx1ZVRvUGFzcztcbiAgICAgICAgaWYgKHRoaXMuc3ViT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnN1Yk9iamVjdC5zZXRWYWx1ZSh2YWx1ZVRvU2V0KTtcbiAgICAgICAgICAgIHRoaXMub3duVmFsdWUgPSB1dGlsXzEuZ2V0UHJveHlUYXJnZXQodGhpcy5zdWJPYmplY3QudmFsdWVPZigpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlVG9QYXNzID0gdGhpcy5wcm94eWZ5VmFsdWUodmFsdWVUb1Bhc3MpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlVG9QYXNzO1xuICAgICAgICAgICAgdGhpcy5vd25WYWx1ZSA9IHV0aWxfMS5nZXRQcm94eVRhcmdldCh2YWx1ZVRvUGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWR4U3RydWN0T2JqID0gdGhpcy5vYmplY3Q7XG4gICAgICAgIGlmICh1dGlsXzEuaXNGdW5jdGlvbihpZHhTdHJ1Y3RPYmpbdGhpcy5vbkNoYW5nZV0pICYmIHRoaXMuaXNJbml0aWFsaXplZClcbiAgICAgICAgICAgIGlkeFN0cnVjdE9ialt0aGlzLm9uQ2hhbmdlXShvbGRWYWwpO1xuICAgICAgICBpZiAodXRpbF8xLmlzRnVuY3Rpb24oaWR4U3RydWN0T2JqW3RoaXMub25Jbml0XSkgJiYgIXRoaXMuaXNJbml0aWFsaXplZClcbiAgICAgICAgICAgIGlkeFN0cnVjdE9ialt0aGlzLm9uSW5pdF0odmFsdWVUb1Bhc3MpO1xuICAgICAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICBpZiAodGhpcy5zdWJPYmplY3QpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJPYmplY3QudmFsdWVPZigpO1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgc2V0U3ViT2JqZWN0KHN1Yk9iamVjdCkge1xuICAgICAgICBzdWJPYmplY3QucHJveHlIYW5kbGVyUmVwbGFjZW1lbnQgPSB0aGlzLnByb3h5SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICBzdWJPYmplY3QuaXNTaGFsbG93ID0gdGhpcy5pc1NoYWxsb3c7XG4gICAgICAgIHRoaXMuc3ViT2JqZWN0ID0gc3ViT2JqZWN0O1xuICAgIH1cbiAgICBwcm94eUhhbmRsZXIocGF0aCwgY2hhbmdlZFZhbCwgcHJldlZhbCkge1xuICAgICAgICBpZiAodGhpcy5zdWJPYmplY3QpXG4gICAgICAgICAgICB0aGlzLnN1Yk9iamVjdC5wcm94eUhhbmRsZXIocGF0aCwgY2hhbmdlZFZhbCwgcHJldlZhbCk7XG4gICAgICAgIGNvbnN0IG5ld0tleXMgPSBjaGFuZ2VkVmFsID8gT2JqZWN0LmtleXMoY2hhbmdlZFZhbCkgOiBbXTtcbiAgICAgICAgY29uc3Qgb2xkS2V5cyA9IHByZXZWYWwgPyBPYmplY3Qua2V5cyhwcmV2VmFsKSA6IFtdO1xuICAgICAgICBjb25zdCBuZXdMZW4gPSBuZXdLZXlzLmxlbmd0aDtcbiAgICAgICAgY29uc3Qgb2xkTGVuID0gb2xkS2V5cy5sZW5ndGg7XG4gICAgICAgIHRoaXMuY2FzZURldGVjdEV4ZWMoe1xuICAgICAgICAgICAgbGVuMTogbmV3TGVuLFxuICAgICAgICAgICAgbGVuMjogb2xkTGVuLFxuICAgICAgICAgICAgZnVuYzogdGhpcy5vbkFkZCxcbiAgICAgICAgICAgIGtleXMxOiBuZXdLZXlzLFxuICAgICAgICAgICAga2V5czI6IG9sZEtleXMsXG4gICAgICAgICAgICBjaGFuZ2VkVmFsLFxuICAgICAgICAgICAgcGF0aFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jYXNlRGV0ZWN0RXhlYyh7XG4gICAgICAgICAgICBsZW4xOiBvbGRMZW4sXG4gICAgICAgICAgICBsZW4yOiBuZXdMZW4sXG4gICAgICAgICAgICBmdW5jOiB0aGlzLm9uUmVtb3ZlLFxuICAgICAgICAgICAga2V5czE6IG9sZEtleXMsXG4gICAgICAgICAgICBrZXlzMjogbmV3S2V5cyxcbiAgICAgICAgICAgIGNoYW5nZWRWYWwsXG4gICAgICAgICAgICBwYXRoXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobmV3TGVuID09PSBvbGRMZW4gJiYgdGhpcy5vbkNoYW5nZSBpbiB0aGlzICYmIHRoaXMuaXNJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgdGhpcy5vYmplY3RbdGhpcy5vbkNoYW5nZV0oY2hhbmdlZFZhbCwgcGF0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hvdWxkRG9TZXRWYWx1ZSh2YWx1ZSwgc2tpcEd1YXJkID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViT2JqZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJPYmplY3Quc2hvdWxkRG9TZXRWYWx1ZSh2YWx1ZSwgc2tpcEd1YXJkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gKHZhbHVlICE9PSB0aGlzLm93blZhbHVlKTtcbiAgICB9XG4gICAgcHJveHlmeVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5IHx8IHV0aWxfMS5pc09iamVjdCh2YWx1ZSkgJiYgIXZhbHVlLmlzQkRPTW9kZWwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gb25fY2hhbmdlXzEuZGVmYXVsdC50YXJnZXQodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIG9uX2NoYW5nZV8xLmRlZmF1bHQodmFsdWUsIChwYXRoLCBjaGFuZ2VkVmFsdWUsIHByZXZpb3VzVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3h5SGFuZGxlcihwYXRoLCBjaGFuZ2VkVmFsdWUsIHByZXZpb3VzVmFsdWUpO1xuICAgICAgICAgICAgfSwgeyBpc1NoYWxsb3c6IHRoaXMuaXNTaGFsbG93IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY2FzZURldGVjdEV4ZWMoY2RQYXJhbXMpIHtcbiAgICAgICAgaWYgKGNkUGFyYW1zLmxlbjEgPiBjZFBhcmFtcy5sZW4yICYmIGNkUGFyYW1zLmZ1bmMgaW4gdGhpcy5vYmplY3QpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbW9kaWZpZWQgb2YgY2RQYXJhbXMua2V5czEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNkUGFyYW1zLmtleXMyLmluY2x1ZGVzKG1vZGlmaWVkKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iamVjdFtjZFBhcmFtcy5mdW5jXSgoY2RQYXJhbXMuY2hhbmdlZFZhbClbbW9kaWZpZWRdLCBjZFBhcmFtcy5wYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5XYXRjaGVkID0gV2F0Y2hlZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVYyRjBZMmhsWkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmJHbGlMMWRoZEdOb1pXUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlJVRXNkMFJCUVhGRU8wRkJRM0pFTERCRFFVRm5SanRCUVVOb1JpeHJSVUZCYVVNN1FVRkRha01zYjBWQlFXMURPMEZCT0VodVF5eE5RVUZoTEU5QlFVODdTVUZ4UjJoQ0xGbEJRVmtzVFVGQlV5eEZRVUZGTEZGQlFWY3NSVUZCUlN4TlFVRjFRanRSUVdoRGNFUXNZMEZCVXl4SFFVRlpMRWxCUVVrc1EwRkJRenRSUVRoQ2VrSXNhMEpCUVdFc1IwRkJXU3hMUVVGTExFTkJRVU03VVVGSGJrTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRGNrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU03VVVGRmVrSXNUVUZCVFN4bFFVRmxMRWRCUVVjc1kwRkJUeXhEUVVGRExGRkJRV3RDTEVOQlFVTXNRMEZCUXp0UlFVVndSQ3hOUVVGTkxGVkJRVlVzUjBGQlJ5eExRVUZMTEdWQlFXVXNUVUZCVFN4RFFVRkRPMUZCUXpsRExFMUJRVTBzV1VGQldTeEhRVUZITEV0QlFVc3NaVUZCWlN4UlFVRlJMRU5CUVVNN1VVRkRiRVFzVFVGQlRTeFRRVUZUTEVkQlFVY3NTMEZCU3l4bFFVRmxMRXRCUVVzc1EwRkJRenRSUVVNMVF5eE5RVUZOTEZsQlFWa3NSMEZCUnl4TFFVRkxMR1ZCUVdVc1VVRkJVU3hEUVVGRE8xRkJSV3hFTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4SlFVRkpMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETzFGQlEyaEZMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hKUVVGSkxGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRPMUZCUTNoRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRE8xRkJRelZFTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4SlFVRkpMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETzFGQlJYaEZMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzVFVGQlRTeEpRVUZKTEU5QlFVOHNUVUZCVFN4RFFVRkRMRk5CUVZNc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTTdTVUZEZWtjc1EwRkJRenRKUVZWTkxGRkJRVkVzUTBGQlF5eExRVUZuUXp0UlFVTTFReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFdEJRVXNzUTBGQlF6dFpRVUZGTEU5QlFVODdVVUZITVVNc1RVRkJUU3hOUVVGTkxFZEJRVWNzYjBKQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03VVVGRmVFTXNTVUZCU1N4WFFVRTJRaXhEUVVGRE8xRkJRMnhETEVsQlFVa3NTMEZCU3l4WlFVRlpMREpDUVVGWkxFVkJRVVU3V1VGREwwSXNWMEZCVnl4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dFRRVU5xUXpzN1dVRkJUU3hYUVVGWExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlJ6TkNMRWxCUVVrc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU55UWl4SlFVRkpMRXRCUVVzc1dVRkJXU3d5UWtGQldTeEZRVUZGTzFsQlF5OUNMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdXVUZETlVJc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF6dFRRVU51UWp0UlFVVkVMRTFCUVUwc1ZVRkJWU3hIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRmJFUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRk8xbEJRMmhDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzY1VKQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZETlVRN1lVRkJUVHRaUVVWSUxGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xbEJRemRETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1YwRkJWeXhEUVVGRE8xbEJRM3BDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc2NVSkJRV01zUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0VFFVTXZRenRSUVVWRUxFMUJRVTBzV1VGQldTeEhRVUZ0UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJSV3BFTEVsQlFVa3NhVUpCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExHRkJRV0U3V1VGQlJTeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlJYWkhMRWxCUVVrc2FVSkJRVlVzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVR0WlFVRkZMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1VVRkRla2NzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4SlFVRkpMRU5CUVVNN1NVRkRPVUlzUTBGQlF6dEpRVlZOTEU5QlFVODdVVUZEVml4SlFVRkpMRWxCUVVrc1EwRkJReXhUUVVGVE8xbEJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJRM0JFTEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRKUVVOMFFpeERRVUZETzBsQlZVMHNXVUZCV1N4RFFVRkRMRk5CUVRKRE8xRkJRek5FTEZOQlFWTXNRMEZCUXl4MVFrRkJkVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5xUlN4VFFVRlRMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTTdVVUZEY2tNc1NVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eFRRVUZUTEVOQlFVTTdTVUZETDBJc1EwRkJRenRKUVZWTkxGbEJRVmtzUTBGQlF5eEpRVUZaTEVWQlFVVXNWVUZCWjBJc1JVRkJSU3hQUVVGaE8xRkJRemRFTEVsQlFVa3NTVUZCU1N4RFFVRkRMRk5CUVZNN1dVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzFGQlF6TkZMRTFCUVUwc1QwRkJUeXhIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMUZCUXpGRUxFMUJRVTBzVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8xRkJRM0JFTEUxQlFVMHNUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRE9VSXNUVUZCVFN4TlFVRk5MRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF6dFJRVWM1UWl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRE8xbEJRMmhDTEVsQlFVa3NSVUZCUlN4TlFVRk5PMWxCUTFvc1NVRkJTU3hGUVVGRkxFMUJRVTA3V1VGRFdpeEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzN1dVRkRhRUlzUzBGQlN5eEZRVUZGTEU5QlFVODdXVUZEWkN4TFFVRkxMRVZCUVVVc1QwRkJUenRaUVVOa0xGVkJRVlU3V1VGRFZpeEpRVUZKTzFOQlExQXNRMEZCUXl4RFFVRkRPMUZCUlVnc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF6dFpRVU5vUWl4SlFVRkpMRVZCUVVVc1RVRkJUVHRaUVVOYUxFbEJRVWtzUlVGQlJTeE5RVUZOTzFsQlExb3NTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUk8xbEJRMjVDTEV0QlFVc3NSVUZCUlN4UFFVRlBPMWxCUTJRc1MwRkJTeXhGUVVGRkxFOUJRVTg3V1VGRFpDeFZRVUZWTzFsQlExWXNTVUZCU1R0VFFVTlFMRU5CUVVNc1EwRkJRenRSUVVWSUxFbEJRVWtzVFVGQlRTeExRVUZMTEUxQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hKUVVGSkxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNZVUZCWVN4RlFVRkZPMWxCUTJwRUxFbEJRVWtzUTBGQlF5eE5RVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExGVkJRVlVzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTnNSVHRKUVVOTUxFTkJRVU03U1VGWFR5eG5Ra0ZCWjBJc1EwRkJReXhMUVVGblF5eEZRVUZGTEZsQlFYRkNMRXRCUVVzN1VVRkRha1lzU1VGQlNTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZPMWxCUTJoQ0xFOUJRVThzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1UwRkROVVE3TzFsQlFVMHNUMEZCVHl4RFFVRkRMRXRCUVVzc1MwRkJTeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdTVUZETlVNc1EwRkJRenRKUVZkUExGbEJRVmtzUTBGQlF5eExRVUZaTzFGQlF6ZENMRWxCUVVrc1MwRkJTeXhaUVVGWkxFdEJRVXNzU1VGQlNTeGxRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJUeXhMUVVGTkxFTkJRVU1zVlVGQlZTeEZRVUZGTzFsQlEzWkZMRXRCUVVzc1IwRkJSeXh0UWtGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVNdlFpeFBRVUZQTEcxQ1FVRlJMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZsQlFWa3NSVUZCUlN4aFFVRmhMRVZCUVVVc1JVRkJSVHRuUWtGRGVrUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVkVzV1VGQldTeEZRVUZSTEdGQlFXRXNRMEZCUXl4RFFVRkRPMWxCUTNKRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEZOQlFWTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU55UXp0UlFVTkVMRTlCUVU4c1MwRkJTeXhEUVVGRE8wbEJRMnBDTEVOQlFVTTdTVUZUVHl4alFVRmpMRU5CUVVNc1VVRkJNa0k3VVVGRE9VTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1NVRkJTU3hIUVVGSExGRkJRVkVzUTBGQlF5eEpRVUZKTEVsQlFVa3NVVUZCVVN4RFFVRkRMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzFsQlF5OUVMRXRCUVVzc1RVRkJUU3hSUVVGUkxFbEJRVWtzVVVGQlVTeERRVUZETEV0QlFVc3NSVUZCUlR0blFrRkRia01zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTzI5Q1FVTTVRaXhKUVVGSkxFTkJRVU1zVFVGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCVFN4UlFVRlJMRU5CUVVNc1JVRkJSU3hSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdiMEpCUTNaR0xFMUJRVTA3YVVKQlExUTdZVUZEU2p0VFFVTktPMGxCUTB3c1EwRkJRenREUVVOS08wRkJOMUpFTERCQ1FUWlNReUo5Il0sInNvdXJjZVJvb3QiOiIifQ==