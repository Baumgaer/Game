/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor","templates"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./source/app/client/ts/components/GameWindow.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
"use strict";
const BaseComponent_1 = __webpack_require__("./source/app/client/ts/lib/BaseComponent.ts");
const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");
const decorators_2 = __webpack_require__("./source/app/utils/decorators.ts");
const BABYLON = tslib_1.__importStar(__webpack_require__("./node_modules/babylonjs/babylon.js"));
let GameWindow = class GameWindow extends BaseComponent_1.BaseComponentFactory(HTMLCanvasElement) {
    constructor() {
        super(...arguments);
        this.engine = new BABYLON.Engine(this, true, {
            audioEngine: true
        });
        this.scene = this.createScene();
    }
    connectedCallback() {
        super.connectedCallback();
        this.style.height = `100%`;
        this.style.width = `100%`;
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
        this.engine.resize();
        window.addEventListener('resize', () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        });
    }
    createScene() {
        const scene = new BABYLON.Scene(this.engine);
        const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 5, -10), scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(this, false);
        const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
        light.shadowEnabled = true;
        const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', { segments: 16, diameter: 2 }, scene);
        sphere.position.y = 1;
        BABYLON.MeshBuilder.CreateGround('ground1', { height: 6, width: 6, subdivisions: 2 }, scene);
        return scene;
    }
    createTerrain() { }
};
GameWindow.extends = "canvas";
tslib_1.__decorate([
    decorators_2.property(),
    tslib_1.__metadata("design:type", typeof (_a = typeof BABYLON !== "undefined" && BABYLON.Engine) === "function" ? _a : Object)
], GameWindow.prototype, "engine", void 0);
tslib_1.__decorate([
    decorators_2.property(),
    tslib_1.__metadata("design:type", typeof (_b = typeof BABYLON !== "undefined" && BABYLON.Scene) === "function" ? _b : Object)
], GameWindow.prototype, "scene", void 0);
GameWindow = tslib_1.__decorate([
    decorators_1.baseConstructor()
], GameWindow);
exports.default = GameWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZVdpbmRvdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvR2FtZVdpbmRvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZEQUFpRTtBQUNqRSxzREFBd0Q7QUFDeEQsc0RBQWlEO0FBQ2pELDJEQUFxQztBQVVyQyxJQUFxQixVQUFVLEdBQS9CLE1BQXFCLFVBQVcsU0FBUSxvQ0FBb0IsQ0FBQyxpQkFBaUIsQ0FBQztJQUQvRTs7UUFtQjBCLFdBQU0sR0FBbUIsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7WUFDMUUsV0FBVyxFQUFFLElBQUk7U0FDcEIsQ0FBQyxDQUFDO1FBU21CLFVBQUssR0FBa0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBeURwRSxDQUFDO0lBbERVLGlCQUFpQjtRQUNwQixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRTtZQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNyQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVNTLFdBQVc7UUFFakIsTUFBTSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU3QyxNQUFNLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFdkYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFFekMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFbEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFGLEtBQUssQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBRTNCLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRWhHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0QixPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTdGLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFRUyxhQUFhLEtBQUssQ0FBQztDQUNoQyxDQUFBO0FBN0UwQixrQkFBTyxHQUFXLFFBQVEsQ0FBQztBQVN0QztJQUFYLHFCQUFRLEVBQUU7MERBQW1CLE9BQU8sb0JBQVAsT0FBTyxDQUFDLE1BQU07MENBRXpDO0FBU1M7SUFBWCxxQkFBUSxFQUFFOzBEQUFrQixPQUFPLG9CQUFQLE9BQU8sQ0FBQyxLQUFLO3lDQUFzQjtBQTdCL0MsVUFBVTtJQUQ5Qiw0QkFBZSxFQUFFO0dBQ0csVUFBVSxDQXNGOUI7a0JBdEZvQixVQUFVIn0=

/***/ }),

/***/ "./source/app/client/ts/components/TestComponent.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
const BaseComponent_1 = __webpack_require__("./source/app/client/ts/lib/BaseComponent.ts");
const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");
const decorators_2 = __webpack_require__("./source/app/utils/decorators.ts");
let TestComponent = class TestComponent extends BaseComponent_1.BaseComponentFactory(HTMLElement) {
    constructor() {
        super(...arguments);
        this.templateString = __webpack_require__("./out/app/client/views/testComponent.njk");
    }
};
tslib_1.__decorate([
    decorators_2.property(),
    tslib_1.__metadata("design:type", Object)
], TestComponent.prototype, "templateString", void 0);
TestComponent = tslib_1.__decorate([
    decorators_1.baseConstructor()
], TestComponent);
exports.default = TestComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdENvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvVGVzdENvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2REFBaUU7QUFDakUsc0RBQXdEO0FBQ3hELHNEQUFpRDtBQVVqRCxJQUFxQixhQUFhLEdBQWxDLE1BQXFCLGFBQWMsU0FBUSxvQ0FBb0IsQ0FBQyxXQUFXLENBQUM7SUFENUU7O1FBUzBCLG1CQUFjLEdBQUcsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7SUFFdEYsQ0FBQztDQUFBLENBQUE7QUFGZTtJQUFYLHFCQUFRLEVBQUU7O3FEQUF1RTtBQVJqRSxhQUFhO0lBRGpDLDRCQUFlLEVBQUU7R0FDRyxhQUFhLENBVWpDO2tCQVZvQixhQUFhIn0=

/***/ }),

/***/ "./source/app/client/ts/components/ViewLink.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
const BaseComponent_1 = __webpack_require__("./source/app/client/ts/lib/BaseComponent.ts");
const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");
const Test1_1 = __webpack_require__("./source/app/client/ts/models/Test1.ts");
const testModel = new Test1_1.Test1({ title: String(Date.now()) });
let ViewLink = class ViewLink extends BaseComponent_1.BaseComponentFactory(HTMLAnchorElement) {
    constructor(_params) {
        super();
        this.model = testModel;
        this.test = this.model.bind("title");
        this.tester = this.model.bind("tester");
    }
    constructedCallback() {
        super.constructedCallback();
        this.addEventListener("click", this.onLinkClick.bind(this));
    }
    onTestTypeCheck(value) {
        console.log("checking type of test with value", value);
    }
    onTestTypeCheckSuccess() {
        console.log("Typecheck of test successful");
    }
    onTestTypeCheckFail(error) {
        console.log("Typecheck of test failed", error);
    }
    onTestChange(changed) {
        console.log("test changed", changed, this);
    }
    onTesterInit(init) {
        console.log("tester init", init, this);
    }
    onTesterChange(changed) {
        console.log("tester changed", changed, this);
    }
    onTesterAdd(added) {
        console.log("tester added", added, this);
    }
    onTesterRemove(removed) {
        console.log("tester removed", removed, this);
    }
    onLinkClick(event) {
        event.preventDefault();
        window.router.navigate(this.href, true);
    }
};
ViewLink.extends = 'a';
tslib_1.__decorate([
    decorators_1.property(),
    tslib_1.__metadata("design:type", Object)
], ViewLink.prototype, "model", void 0);
tslib_1.__decorate([
    decorators_1.attribute(),
    tslib_1.__metadata("design:type", String)
], ViewLink.prototype, "test", void 0);
tslib_1.__decorate([
    decorators_1.watched(), decorators_1.property(),
    tslib_1.__metadata("design:type", Array)
], ViewLink.prototype, "tester", void 0);
ViewLink = tslib_1.__decorate([
    decorators_1.baseConstructor(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ConstParams !== "undefined" && ConstParams) === "function" ? _a : Object])
], ViewLink);
exports.default = ViewLink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld0xpbmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1ZpZXdMaW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2REFBaUU7QUFDakUsc0RBQXNGO0FBQ3RGLGdEQUE2QztBQUU3QyxNQUFNLFNBQVMsR0FBRyxJQUFJLGFBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBUzNELElBQXFCLFFBQVEsR0FBN0IsTUFBcUIsUUFBUyxTQUFRLG9DQUFvQixDQUFDLGlCQUFpQixDQUFDO0lBaUN6RSxZQUFZLE9BQStCO1FBQ3ZDLEtBQUssRUFBRSxDQUFDO1FBbkJPLFVBQUssR0FBRyxTQUFTLENBQUM7UUFRakIsU0FBSSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBUTlCLFdBQU0sR0FBYSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUkzRSxDQUFDO0lBT00sbUJBQW1CO1FBQ3RCLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBU1MsZUFBZSxDQUFDLEtBQW1CO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQVFTLHNCQUFzQjtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQVFTLG1CQUFtQixDQUFDLEtBQVk7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBU1MsWUFBWSxDQUFDLE9BQXVCO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBU1MsWUFBWSxDQUFDLElBQW9CO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBU1MsY0FBYyxDQUFDLE9BQXVCO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFTUyxXQUFXLENBQUMsS0FBcUI7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFTUyxjQUFjLENBQUMsT0FBdUI7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQVNPLFdBQVcsQ0FBQyxLQUFZO1FBQzVCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDSixDQUFBO0FBeEkwQixnQkFBTyxHQUFXLEdBQUcsQ0FBQztBQU9qQztJQUFYLHFCQUFRLEVBQUU7O3VDQUEwQjtBQVF4QjtJQUFaLHNCQUFTLEVBQUU7O3NDQUFnRDtBQVFyQztJQUF0QixvQkFBTyxFQUFFLEVBQUUscUJBQVEsRUFBRTs7d0NBQXFEO0FBL0IxRCxRQUFRO0lBRDVCLDRCQUFlLEVBQUU7aUVBa0NRLFdBQVcsb0JBQVgsV0FBVztHQWpDaEIsUUFBUSxDQWdKNUI7a0JBaEpvQixRQUFRIn0=

/***/ }),

/***/ "./source/app/client/ts/components/ViewRouter.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
const BaseComponent_1 = __webpack_require__("./source/app/client/ts/lib/BaseComponent.ts");
const util_1 = __webpack_require__("./source/app/utils/util.ts");
const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");
const decorators_2 = __webpack_require__("./source/app/utils/decorators.ts");
const navigo_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/navigo/lib/navigo.min.js"));
let ViewRouter = class ViewRouter extends BaseComponent_1.BaseComponentFactory(HTMLElement) {
    constructor() {
        super(...arguments);
        this.router = new navigo_1.default();
    }
    connectedCallback() {
        super.connectedCallback();
        this.routeCollection();
        window.router = this.router;
    }
    routeCollection() {
        for (const route of window.virtualRoutes) {
            const myRoute = __webpack_require__("./source/app/client/ts/routes sync recursive ^\\.\\/.*\\.ts$")(`./${route}.ts`).default;
            this.singeRouteCollection(myRoute);
        }
    }
    singeRouteCollection(Route) {
        try {
            if (!util_1.includesMemberOfList(Route.attachToServers, [global.process.env.name, '*']))
                return;
            const RouteClass = new Route();
            if (!RouteClass.isClientRoute) {
                throw new Error(`${RouteClass.constructor.name} is not instance of ~client/lib/BaseRoute`);
            }
            this.router.on(RouteClass.router);
        }
        catch (error) {
            throw error;
        }
    }
};
tslib_1.__decorate([
    decorators_2.property(),
    tslib_1.__metadata("design:type", Object)
], ViewRouter.prototype, "router", void 0);
ViewRouter = tslib_1.__decorate([
    decorators_1.baseConstructor()
], ViewRouter);
exports.default = ViewRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld1JvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvVmlld1JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2REFBaUU7QUFDakUsMENBQXVEO0FBQ3ZELHNEQUF3RDtBQUN4RCxzREFBaUQ7QUFDakQsNERBQTRCO0FBVTVCLElBQXFCLFVBQVUsR0FBL0IsTUFBcUIsVUFBVyxTQUFRLG9DQUFvQixDQUFDLFdBQVcsQ0FBQztJQUR6RTs7UUFVaUMsV0FBTSxHQUFHLElBQUksZ0JBQU0sRUFBRSxDQUFDO0lBK0N2RCxDQUFDO0lBdkNhLGlCQUFpQjtRQUN2QixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2hDLENBQUM7SUFRTyxlQUFlO1FBQ25CLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRTtZQUN0QyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsZUFBZSxLQUFLLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUMzRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBVU8sb0JBQW9CLENBQUMsS0FBVTtRQUNuQyxJQUFJO1lBQ0EsSUFBSSxDQUFDLDJCQUFvQixDQUFXLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBUyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQUUsT0FBTztZQUMzRyxNQUFNLFVBQVUsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO2dCQUMzQixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLDJDQUEyQyxDQUFDLENBQUM7YUFDOUY7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDckM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE1BQU0sS0FBSyxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0NBQ0osQ0FBQTtBQS9DZTtJQUFYLHFCQUFRLEVBQUU7OzBDQUF3QztBQVRsQyxVQUFVO0lBRDlCLDRCQUFlLEVBQUU7R0FDRyxVQUFVLENBd0Q5QjtrQkF4RG9CLFVBQVUifQ==
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./source/app/client/ts/lib/BaseComponent.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
__webpack_require__("./node_modules/reflect-metadata/Reflect.js");
const lodash_1 = __webpack_require__("./node_modules/lodash/lodash.js");
const nunjucks_1 = __webpack_require__("./node_modules/nunjucks/browser/nunjucks.js");
const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");
const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");
const util_1 = __webpack_require__("./source/app/client/ts/utils/util.ts");
const util_2 = __webpack_require__("./source/app/utils/util.ts");
function BaseComponentFactory(HTMLTypeElement) {
    var _a, _b;
    class BaseComponent extends HTMLTypeElement {
        constructor(...args) {
            super(...args);
            this.id = this.generateUniqueID();
            this.isBaseComponent = true;
            this.className = Object.getPrototypeOf(this.constructor).name;
            this.templateString = '<div><slot></slot></div>';
            this.templateParams = {};
        }
        get properties() {
            const props = new Map();
            const properties = metadata_1.getMetadata(this, "definedProperties");
            if (properties) {
                for (const prop of properties) {
                    props.set(prop, metadata_1.getWildcardMetadata(this, prop));
                }
            }
            return props;
        }
        get bindings() {
            const bindings = metadata_1.getMetadata(this, "initiatorBinding");
            return bindings ? bindings : new Map();
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
                if (lodash_1.isString(this.templateString)) {
                    stringToParse = nunjucks_1.renderString(this.templateString, this.templateParams);
                }
                if (lodash_1.isObject(this.templateString)) {
                    stringToParse = this.templateString.render(this.templateParams);
                }
                if (stringToParse) {
                    const shadowRoot = this.attachShadow({ mode: 'open' });
                    const doc = new DOMParser().parseFromString(stringToParse, 'text/html');
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
            const occurrence = Array.from(document.getElementsByTagName(this.tagName)).indexOf(this);
            return `${className}_${occurrence}`;
        }
    }
    BaseComponent.isBaseComponent = true;
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
        decorators_1.property(),
        tslib_1.__metadata("design:type", typeof (_b = typeof IndexStructure !== "undefined" && IndexStructure) === "function" ? _b : Object)
    ], BaseComponent.prototype, "templateParams", void 0);
    return BaseComponent;
}
exports.BaseComponentFactory = BaseComponentFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9CYXNlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRCQUEwQjtBQUMxQixtQ0FBNEM7QUFDNUMsdUNBQWtEO0FBQ2xELHNEQUE0RDtBQUM1RCxrREFBdUU7QUFHdkUsNkNBQW1IO0FBQ25ILDBDQUE0RTtBQVU1RSxTQUFnQixvQkFBb0IsQ0FBeUMsZUFBc0I7O0lBUS9GLE1BQWUsYUFBYyxTQUFRLGVBQWU7UUFrR2hELFlBQVksR0FBRyxJQUFXO1lBQ3RCLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBdERDLE9BQUUsR0FBVyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQVE3QixvQkFBZSxHQUFZLElBQUksQ0FBQztZQVNoQyxjQUFTLEdBQVcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBVXBDLG1CQUFjLEdBQXNCLDBCQUEwQixDQUFDO1lBV2xHLG1CQUFjLEdBQW1CLEVBQUUsQ0FBQztRQWlCMUQsQ0FBQztRQXhFRCxJQUFXLFVBQVU7WUFDakIsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUN4QixNQUFNLFVBQVUsR0FBRyxzQkFBVyxDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBcUMsQ0FBQztZQUM5RixJQUFJLFVBQVUsRUFBRTtnQkFDWixLQUFLLE1BQU0sSUFBSSxJQUFJLFVBQVUsRUFBRTtvQkFDM0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsOEJBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ3BEO2FBQ0o7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBd0RELElBQWMsUUFBUTtZQUNsQixNQUFNLFFBQVEsR0FBRyxzQkFBVyxDQUFD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

/***/ }),

/***/ "./source/app/client/ts/lib/BaseController.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class BaseController {
    constructor() { }
    constructedCallback() { }
    connectedCallback() { }
    disconnectedCallback() { }
    adoptedCallback() { }
}
exports.BaseController = BaseController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQmFzZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQSxNQUFhLGNBQWM7SUFFdkIsZ0JBQWdCLENBQUM7SUFTUCxtQkFBbUIsS0FBSyxDQUFDO0lBUXpCLGlCQUFpQixLQUFLLENBQUM7SUFTdkIsb0JBQW9CLEtBQUssQ0FBQztJQVMxQixlQUFlLEtBQUssQ0FBQztDQUNsQztBQXRDRCx3Q0FzQ0MifQ==

/***/ }),

/***/ "./source/app/client/ts/lib/ClientModel.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");
const BDOModel_1 = __webpack_require__("./source/app/lib/BDOModel.ts");
const util_1 = __webpack_require__("./source/app/client/ts/utils/util.ts");
const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");
const Logger_1 = __webpack_require__("./source/app/client/ts/lib/Logger.ts");
const logger = new Logger_1.Logger();
let ClientModel = class ClientModel extends BDOModel_1.BDOModel {
    constructor() {
        super(...arguments);
        this.isClientModel = true;
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
    async save(_prop) {
        return new Promise((resolve, _reject) => {
            const unsavedChange = metadata_1.getWildcardMetadata(this, _prop).unsavedChange;
            console.log(`saved ${_prop} with val ${unsavedChange}!`);
            resolve();
        });
    }
    onTypeCheckFail(error) {
        logger.error(error.message);
    }
};
ClientModel.isClientModel = true;
tslib_1.__decorate([
    decorators_1.property(),
    tslib_1.__metadata("design:type", Boolean)
], ClientModel.prototype, "isClientModel", void 0);
ClientModel = tslib_1.__decorate([
    decorators_1.baseConstructor()
], ClientModel);
exports.ClientModel = ClientModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50TW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQ2xpZW50TW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtFO0FBQ2xFLGdEQUE2QztBQUM3Qyw2Q0FBbUg7QUFDbkgsa0RBQTBEO0FBQzFELCtDQUE0QztBQUU1QyxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO0FBVzVCLElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVksU0FBUSxtQkFBUTtJQUF6Qzs7UUFrQmdDLGtCQUFhLEdBQVksSUFBSSxDQUFDO0lBa0U5RCxDQUFDO0lBdkRVLG9CQUFvQixDQUFDLEdBQVcsRUFBRSxNQUFlLEVBQUUsT0FBZ0I7UUFDdEUsT0FBTywyQkFBb0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBV00sMEJBQTBCLENBQUMsR0FBVyxFQUFFLE1BQVcsRUFBRSxNQUFlO1FBQ3ZFLE9BQU8saUNBQTBCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQVVNLDJCQUEyQixDQUFDLEdBQVcsRUFBRSxNQUFlO1FBQzNELE9BQU8sa0NBQTJCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBUU0sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFhO1FBQzNCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDcEMsTUFBTSxhQUFhLEdBQUcsOEJBQW1CLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUNyRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsS0FBSyxhQUFhLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFDekQsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFVUyxlQUFlLENBQUMsS0FBWTtRQUNsQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBRUosQ0FBQTtBQTFFMEIseUJBQWEsR0FBWSxJQUFJLENBQUM7QUFRekM7SUFBWCxxQkFBUSxFQUFFOztrREFBK0M7QUFsQmpELFdBQVc7SUFEdkIsNEJBQWUsRUFBRTtHQUNMLFdBQVcsQ0FvRnZCO0FBcEZZLGtDQUFXIn0=

/***/ }),

/***/ "./source/app/client/ts/lib/ClientRoute.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BDORoute_1 = __webpack_require__("./source/app/lib/BDORoute.ts");
const lodash_1 = __webpack_require__("./node_modules/lodash/lodash.js");
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
        logger.log(lodash_1.merge(await this.templateParamsFromServer(), await this.templateParams(params)));
    }
    async templateParamsFromServer() {
        let urlToAskFor = location.pathname;
        if (!urlToAskFor)
            urlToAskFor = `/`;
        const headers = new Headers({ 'X-Game-As-JSON': 'true' });
        return (await fetch(urlToAskFor, { headers })).json();
    }
}
exports.ClientRoute = ClientRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50Um91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQ2xpZW50Um91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnREFBNkM7QUFDN0MsbUNBQStCO0FBQy9CLCtDQUE0QztBQUU1QyxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO0FBVTVCLE1BQWEsV0FBWSxTQUFRLG1CQUFRO0lBQXpDOztRQVFvQixrQkFBYSxHQUFZLElBQUksQ0FBQztJQXNEbEQsQ0FBQztJQTlDRyxJQUFXLE1BQU07UUFDYixNQUFNLE1BQU0sR0FBUSxFQUFFLENBQUM7UUFDdkIsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzdCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdGO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQVdTLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBc0I7UUFDakQsT0FBTyxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFTUyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQXNCO1FBQzVDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixFQUFFLEVBQUUsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBVU8sS0FBSyxDQUFDLHdCQUF3QjtRQUNsQyxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXO1lBQUUsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUNwQyxNQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDMUQsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0NBQ0o7QUE5REQsa0NBOERDIn0=

/***/ }),

/***/ "./source/app/client/ts/lib/ConfigManager.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9Db25maWdNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0VBQTZEO0FBWTdELE1BQWEsYUFBYyxTQUFRLG1DQUFnQjtJQVN4QyxHQUFHLENBQUMsT0FBZTtRQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQVVTLElBQUksQ0FBQyxPQUFlO1FBQzFCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBVVMsUUFBUSxDQUFDLE9BQWU7UUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFXUyxRQUFRLENBQUMsT0FBZSxFQUFFLE1BQVc7UUFDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDSjtBQWpERCxzQ0FpREMifQ==

/***/ }),

/***/ "./source/app/client/ts/lib/Logger.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
"use strict";
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
            return [
                `%c[%c${upperLogLevel} %c- %c${procInfo} %c- %c${currentTime} %cat %c${logPoint}%c]`,
                resetStyle,
                formattedLogLevel,
                resetStyle,
                formattedProcInfo,
                resetStyle,
                formattedTime,
                resetStyle,
                formattedLogPoint,
                resetStyle
            ];
        }
        return `[${upperLogLevel} - ${procInfo} - ${currentTime} - ${logPoint}]`;
    }
    writeToFile(_logLevel, _message) {
    }
};
Logger = tslib_1.__decorate([
    decorators_1.baseConstructor(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ConstParams !== "undefined" && ConstParams) === "function" ? _a : Object])
], Logger);
exports.Logger = Logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUE2RTtBQUM3RSxzREFBd0Q7QUFVeEQsSUFBYSxNQUFNLEdBQW5CLE1BQWEsTUFBTyxTQUFRLHFCQUFTO0lBZWpDLFlBQVksTUFBNEI7UUFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBVFYsbUJBQWMsR0FBRztZQUNyQixHQUFHLEVBQUUsaUNBQWlDO1lBQ3RDLEtBQUssRUFBRSxrQ0FBa0M7WUFDekMsSUFBSSxFQUFFLG9DQUFvQztZQUMxQyxJQUFJLEVBQUUsb0NBQW9DO1lBQzFDLEtBQUssRUFBRSxnQ0FBZ0M7U0FDMUMsQ0FBQztJQUlGLENBQUM7SUFXUyxTQUFTLENBQUMsUUFBbUIsRUFBRSxXQUE4QixTQUFTO1FBQzVFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkMsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxNQUFNLFVBQVUsR0FBRyxtQ0FBbUMsQ0FBQztRQUN2RCxNQUFNLE9BQU8sR0FBRyxxQ0FBcUMsQ0FBQztRQUN0RCxNQUFNLElBQUksR0FBRyxxQ0FBcUMsQ0FBQztRQUNuRCxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hELE1BQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDO1lBQ2xDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQztZQUMzQixNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQztZQUNsQyxPQUFPO2dCQUNILFFBQVEsYUFBYSxVQUFVLFFBQVEsVUFBVSxXQUFXLFdBQVcsUUFBUSxLQUFLO2dCQUNwRixVQUFVO2dCQUNWLGlCQUFpQjtnQkFDakIsVUFBVTtnQkFDVixpQkFBaUI7Z0JBQ2pCLFVBQVU7Z0JBQ1YsYUFBYTtnQkFDYixVQUFVO2dCQUNWLGlCQUFpQjtnQkFDakIsVUFBVTthQUNiLENBQUM7U0FDTDtRQUNELE9BQU8sSUFBSSxhQUFhLE1BQU0sUUFBUSxNQUFNLFdBQVcsTUFBTSxRQUFRLEdBQUcsQ0FBQztJQUM3RSxDQUFDO0lBVVMsV0FBVyxDQUFDLFNBQW9CLEVBQUUsUUFBYTtJQUV6RCxDQUFDO0NBQ0osQ0FBQTtBQXBFWSxNQUFNO0lBRGxCLDRCQUFlLEVBQUU7aUVBZ0JPLFdBQVcsb0JBQVgsV0FBVztHQWZ2QixNQUFNLENBb0VsQjtBQXBFWSx3QkFBTSJ9

/***/ }),

/***/ "./source/app/client/ts/models/Test.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
"use strict";
const BDOTest_1 = __webpack_require__("./source/app/models/BDOTest.ts");
const ClientModel_1 = __webpack_require__("./source/app/client/ts/lib/ClientModel.ts");
const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");
let Test = class Test extends BDOTest_1.BDOTestFactory(ClientModel_1.ClientModel) {
    constructor(_params) {
        super();
    }
    test() {
    }
};
Test = tslib_1.__decorate([
    decorators_1.baseConstructor({ collectionName: "Test" }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ConstParams !== "undefined" && ConstParams) === "function" ? _a : Object])
], Test);
exports.Test = Test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL21vZGVscy9UZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaURBQXFEO0FBQ3JELHlEQUFzRDtBQUN0RCxzREFBd0Q7QUFVeEQsSUFBYSxJQUFJLEdBQWpCLE1BQWEsSUFBSyxTQUFRLHdCQUFjLENBQUMseUJBQVcsQ0FBQztJQUVqRCxZQUFZLE9BQTJCO1FBQ25DLEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztJQU9NLElBQUk7SUFFWCxDQUFDO0NBQ0osQ0FBQTtBQWRZLElBQUk7SUFEaEIsNEJBQWUsQ0FBQyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsQ0FBQztpRUFHbEIsV0FBVyxvQkFBWCxXQUFXO0dBRnhCLElBQUksQ0FjaEI7QUFkWSxvQkFBSSJ9

/***/ }),

/***/ "./source/app/client/ts/models/Test1.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test1", function() { return Test1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _bdo_models_BDOTest1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./source/app/models/BDOTest1.ts");
/* harmony import */ var _bdo_models_BDOTest1__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bdo_models_BDOTest1__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client_models_Test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./source/app/client/ts/models/Test.ts");
/* harmony import */ var _client_models_Test__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_client_models_Test__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./source/app/utils/decorators.ts");
var _a;




let Test1 = class Test1 extends Object(_bdo_models_BDOTest1__WEBPACK_IMPORTED_MODULE_1__["BDOTest1Factory"])(_client_models_Test__WEBPACK_IMPORTED_MODULE_2__["Test"]) {
    constructor(params) {
        super(params);
    }
    wadde() {
        this.bindings.get("title");
    }
};
Test1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_3__["baseConstructor"])({ collectionName: "Test1" }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof ConstParams !== "undefined" && ConstParams) === "function" ? _a : Object])
], Test1);



/***/ }),

/***/ "./source/app/client/ts/routes sync recursive ^\\.\\/.*\\.ts$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Config.ts": "./source/app/client/ts/routes/Config.ts",
	"./GameLobby.ts": "./source/app/client/ts/routes/GameLobby.ts",
	"./Home.ts": "./source/app/client/ts/routes/Home.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./source/app/client/ts/routes sync recursive ^\\.\\/.*\\.ts$";

/***/ }),

/***/ "./source/app/client/ts/routes/Config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ClientRoute_1 = __webpack_require__("./source/app/client/ts/lib/ClientRoute.ts");
const BDOConfig_1 = __webpack_require__("./source/app/routes/BDOConfig.ts");
class Config extends BDOConfig_1.BDOConfigFactory(ClientRoute_1.ClientRoute) {
}
exports.default = Config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlEQUFzRDtBQUN0RCxxREFBeUQ7QUFXekQsTUFBcUIsTUFBTyxTQUFRLDRCQUFnQixDQUFDLHlCQUFXLENBQUM7Q0FBSTtBQUFyRSx5QkFBcUUifQ==

/***/ }),

/***/ "./source/app/client/ts/routes/GameLobby.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ClientRoute_1 = __webpack_require__("./source/app/client/ts/lib/ClientRoute.ts");
const BDOGameLobby_1 = __webpack_require__("./source/app/routes/BDOGameLobby.ts");
class GameLobby extends BDOGameLobby_1.BDOGameLobbyFactory(ClientRoute_1.ClientRoute) {
    async templateParams() {
        return {
            test: 'lol'
        };
    }
}
exports.default = GameLobby;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZUxvYmJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0dhbWVMb2JieS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlEQUFzRDtBQUN0RCwyREFBK0Q7QUFTL0QsTUFBcUIsU0FBVSxTQUFRLGtDQUFtQixDQUFDLHlCQUFXLENBQUM7SUFVekQsS0FBSyxDQUFDLGNBQWM7UUFDMUIsT0FBTztZQUNILElBQUksRUFBRSxLQUFLO1NBQ2QsQ0FBQztJQUNOLENBQUM7Q0FDSjtBQWZELDRCQWVDIn0=

/***/ }),

/***/ "./source/app/client/ts/routes/Home.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ClientRoute_1 = __webpack_require__("./source/app/client/ts/lib/ClientRoute.ts");
const BDOHome_1 = __webpack_require__("./source/app/routes/BDOHome.ts");
class Home extends BDOHome_1.BDOHomeFactory(ClientRoute_1.ClientRoute) {
}
exports.default = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9Ib21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseURBQXNEO0FBQ3RELGlEQUFxRDtBQVNyRCxNQUFxQixJQUFLLFNBQVEsd0JBQWMsQ0FBQyx5QkFBVyxDQUFDO0NBQUk7QUFBakUsdUJBQWlFIn0=

/***/ }),

/***/ "./source/app/client/ts/utils/util.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");
function setUpdateNamespacedStorage(instance, key, newVal, nsProp = "id") {
    if (key === "*")
        throw new Error("* is a special character and does not follow the property convention");
    const nsPrefix = Object.getPrototypeOf(instance.constructor).name;
    let nsSuffix = metadata_1.getMetadata(instance, "oldStorageNsSuffix");
    let storageValue;
    if (!nsSuffix)
        nsSuffix = instance[nsProp];
    let ns = `${nsPrefix}_${nsSuffix}`;
    if (key === nsProp || nsSuffix !== instance[nsProp]) {
        nsSuffix = key === nsProp ? newVal : instance[nsProp];
        const newNs = `${nsPrefix}_${nsSuffix}`;
        storageValue = localStorage.getItem(ns);
        if (storageValue) {
            localStorage.removeItem(ns);
            localStorage.setItem(newNs, storageValue);
        }
        ns = newNs;
    }
    else {
        storageValue = localStorage.getItem(ns);
        if (storageValue) {
            storageValue = JSON.parse(storageValue);
        }
        else
            storageValue = {};
        if (newVal === undefined) {
            delete storageValue[key];
            if (!Object.keys(storageValue).length) {
                localStorage.removeItem(ns);
            }
            else
                localStorage.setItem(ns, JSON.stringify(storageValue));
        }
        else
            localStorage.setItem(ns, JSON.stringify(Object.assign(storageValue, { [key]: newVal })));
    }
    metadata_1.defineMetadata(instance, "oldStorageNsSuffix", nsSuffix);
}
exports.setUpdateNamespacedStorage = setUpdateNamespacedStorage;
function getNamespacedStorage(instance, key, nsProp = "id", forceNS) {
    const nsPrefix = Object.getPrototypeOf(instance.constructor).name;
    let nsSuffix = metadata_1.getMetadata(instance, "oldStorageNsSuffix");
    if (nsSuffix !== instance[nsProp])
        nsSuffix = instance[nsProp];
    if (forceNS)
        nsSuffix = forceNS;
    let storageValue = localStorage.getItem(`${nsPrefix}_${nsSuffix}`);
    if (storageValue)
        storageValue = JSON.parse(storageValue);
    if (storageValue && key === "*")
        return storageValue;
    if (storageValue && key in storageValue)
        return storageValue[key];
    return undefined;
}
exports.getNamespacedStorage = getNamespacedStorage;
function deleteFromNamespacedStorage(instance, key, nsProp = "id") {
    if (key === "*") {
        const storage = getNamespacedStorage(instance, key, nsProp);
        for (const prop in storage) {
            if (storage.hasOwnProperty(prop))
                setUpdateNamespacedStorage(instance, prop, undefined, nsProp);
        }
    }
    else
        setUpdateNamespacedStorage(instance, key, undefined, nsProp);
}
exports.deleteFromNamespacedStorage = deleteFromNamespacedStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3V0aWxzL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrREFBa0U7QUFVbEUsU0FBZ0IsMEJBQTBCLENBQUMsUUFBYSxFQUFFLEdBQVcsRUFBRSxNQUFXLEVBQUUsU0FBaUIsSUFBSTtJQUNyRyxJQUFJLEdBQUcsS0FBSyxHQUFHO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO0lBR3pHLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNsRSxJQUFJLFFBQVEsR0FBRyxzQkFBVyxDQUFDLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzNELElBQUksWUFBaUIsQ0FBQztJQUd0QixJQUFJLENBQUMsUUFBUTtRQUFFLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0MsSUFBSSxFQUFFLEdBQUcsR0FBRyxRQUFRLElBQUksUUFBUSxFQUFFLENBQUM7SUFDbkMsSUFBSSxHQUFHLEtBQUssTUFBTSxJQUFJLFFBQVEsS0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFFakQsUUFBUSxHQUFHLEdBQUcsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELE1BQU0sS0FBSyxHQUFHLEdBQUcsUUFBUSxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ3hDLFlBQVksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksWUFBWSxFQUFFO1lBQ2QsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1QixZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxZQUFZLENB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

/***/ }),

/***/ "./source/app/lib/Attribute.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Property_1 = __webpack_require__("./source/app/lib/Property.ts");
const environment_1 = __webpack_require__("./source/app/utils/environment.ts");
const Modification_1 = __webpack_require__("./source/app/lib/Modification.ts");
const util_1 = __webpack_require__("./source/app/utils/util.ts");
const Errors_1 = __webpack_require__("./source/app/lib/Errors.ts");
const lodash_1 = __webpack_require__("./node_modules/lodash/lodash.js");
class Attribute extends Property_1.Property {
    constructor(object, property, params) {
        super(object, property, params);
        this.inDOMInitialized = false;
    }
    setValue(value) {
        if (!this.shouldDoSetValue(value))
            return;
        this.doSetValue(value);
        this.reflectToDOMAttribute(value);
        this.doAutoSave();
    }
    proxyHandler(_path, _changedVal, _prevVal, attrReflectsToObj = true) {
        const value = this.value;
        if (value === undefined || value === null)
            return;
        this.doSetValue(util_1.getProxyTarget(value));
        this.reflectToDOMAttribute(value, attrReflectsToObj);
        this.doAutoSave();
    }
    getUnsavedChange() { }
    shouldDoSetValue(value, skipGuard = false) {
        if (environment_1.isBrowser() && !this.object.isBDOModel && (this.object instanceof HTMLElement)) {
            const constructedType = util_1.constructTypeOfHTMLAttribute(this.object, this.property);
            if (!this.inDOMInitialized && this.object.getAttribute(this.property) && value !== constructedType) {
                this.object[this.property] = constructedType;
                return false;
            }
        }
        return !(value === this.ownValue || !skipGuard && !this.disableTypeGuard && !this.typeGuard(value));
    }
    reflectToDOMAttribute(value, setValue = true) {
        if (!environment_1.isBrowser() || !(this.object instanceof HTMLElement))
            return;
        const stringKey = this.property.toString();
        const attrValue = this.object.getAttribute(stringKey);
        let setAttribute = true;
        let pTarget;
        let valueToPass = value;
        if (value instanceof Modification_1.Modification) {
            valueToPass = value.valueOf();
            if (value.type === "delete" && !util_1.isPrimitive(value.valueOf()))
                setValue = false;
        }
        if (!this.inDOMInitialized && attrValue) {
            setAttribute = false;
        }
        else
            pTarget = util_1.getProxyTarget(valueToPass);
        this.inDOMInitialized = true;
        if (setAttribute && attrValue !== pTarget && attrValue !== JSON.stringify(pTarget).replace(/\"/g, "'")) {
            this.object.setAttribute(stringKey, pTarget, setValue);
        }
    }
    doAutoSave() {
        if (this.autoSave && this.doNotPersist) {
            throw new Errors_1.ConfigurationError("You have turned on autosave but at the same time it is forbidden to persist the value!");
        }
        if (!this.autoSave || !lodash_1.isFunction(this.object.save))
            return;
        if (typeof this.autoSave === "boolean")
            this.object.save(this.property);
        if (typeof this.autoSave === "number" && !this.autoSaveTimeout) {
            this.autoSaveTimeout = setTimeout(() => {
                this.object.save(this.property);
                delete this.autoSaveTimeout;
            }, Math.abs(this.autoSave));
        }
    }
}
exports.Attribute = Attribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9saWIvQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQThEO0FBRTlELHdEQUFtRDtBQUNuRCx3REFBcUQ7QUFDckQsMENBQTRGO0FBQzVGLDRDQUFxRDtBQUNyRCxtQ0FBb0M7QUFzRXBDLE1BQWEsU0FBMkQsU0FBUSxtQkFBUTtJQTREcEYsWUFBWSxNQUFTLEVBQUUsUUFBVyxFQUFFLE1BQXlCO1FBQ3pELEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBWjFCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztJQWE1QyxDQUFDO0lBUU0sUUFBUSxDQUFDLEtBQWdDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTztRQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQVFNLFlBQVksQ0FBQyxLQUFjLEVBQUUsV0FBa0IsRUFBRSxRQUFlLEVBQUUsb0JBQTZCLElBQUk7UUFDdEcsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUk7WUFBRSxPQUFPO1FBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMscUJBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQVNNLGdCQUFnQixLQUFLLENBQUM7SUFVdEIsZ0JB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

/***/ }),

/***/ "./source/app/lib/BDOConfigManager.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
            if (conf)
                conf = ms_1.default(conf);
            this.cache.set('__ConfigManagerCacheTimeout__', conf);
        }
        this.cache.set(config, value, conf);
    }
}
exports.BDOConfigManager = BDOConfigManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPQ29uZmlnTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvbGliL0JET0NvbmZpZ01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsb0RBQW9CO0FBQ3BCLHNEQUFtRDtBQW1CbkQsTUFBc0IsZ0JBQWdCO0lBQXRDO1FBVWMsVUFBSyxHQUE2QixJQUFJLHlCQUFXLEVBQUUsQ0FBQztJQXdFbEUsQ0FBQztJQS9EVSxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQWM7UUFDM0IsSUFBSSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdEM7UUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQThCUyxRQUFRLENBQUMsTUFBYztRQUM3QixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxJQUFJLGNBQWMsRUFBRTtZQUNoQixPQUFPLGNBQWMsQ0FBQztTQUN6QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFXUyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQWMsRUFBRSxLQUFVO1FBQy9DLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLEVBQUU7WUFDbEQsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztZQUN4RCxJQUFJLElBQUk7Z0JBQUUsSUFBSSxHQUFHLFlBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN6RDtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUNKO0FBbEZELDRDQWtGQyJ9

/***/ }),

/***/ "./source/app/lib/BDOLogger.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
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
        if (loglevel !== 'log' && !this.isAllowed(loglevel))
            return;
        if (!this.preventConsolePrint || ['log', 'error'].includes(loglevel)) {
            const header = this.getHeader(loglevel);
            let newArgs = [];
            if (header instanceof Array) {
                newArgs = newArgs.concat(header);
            }
            else
                newArgs.push(header);
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
            if (!index)
                continue;
            if (!util_1.includesMemberOfList(stackpart, this.prototypeNames, '.ts')) {
                callpoint = stackpart.split(path_1.sep).pop();
                break;
            }
        }
        if (callpoint) {
            callpoint = callpoint.replace(')', '');
        }
        else {
            callpoint = '';
        }
        return callpoint;
    }
}
exports.BDOLogger = BDOLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9saWIvQkRPTG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDREQUE0QjtBQUM1QiwrQkFBMkI7QUFDM0IsMENBQW1GO0FBV25GLE1BQXNCLFNBQVM7SUFrRDNCLFlBQVksT0FBZ0M7UUEzQ3JDLFlBQU8sR0FBWSxhQUFhLENBQUM7UUFRakMsd0JBQW1CLEdBQWEsS0FBSyxDQUFDO1FBUXRDLHFCQUFnQixHQUFhLEtBQUssQ0FBQztRQWVuQyxhQUFRLEdBQWUsT0FBTyxDQUFDO1FBVW5CLG1CQUFjLEdBQWEsaUNBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFL0IsQ0FBQztJQVcxQyxHQUFHLENBQUMsT0FBWSxFQUFFLFdBQXNCLEtBQUssRUFBRSxHQUFHLElBQVc7UUFDaEUsSUFBSSxRQUFRLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFBRSxPQUFPO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2xFLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEMsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO1lBQzNCLElBQUksTUFBTSxZQUFZLEtBQUssRUFBRTtnQkFDekIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDcEM7O2dCQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUIsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QixPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNkLE9BQVEs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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./source/app/lib/BDOMapCache.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPTWFwQ2FjaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2xpYi9CRE9NYXBDYWNoZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLE1BQU0sTUFBTTtJQWdCUixZQUFZLElBQU8sRUFBRSxRQUFpQjtRQUY5QixXQUFNLEdBQVcsUUFBUSxDQUFDO1FBRzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBU0QsSUFBSSxPQUFPO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNwRSxDQUFDO0NBQ0o7QUFTRCxNQUFhLFdBQWtCLFNBQVEsR0FBaUI7SUFXN0MsR0FBRyxDQUFDLEdBQU0sRUFBRSxLQUFRLEVBQUUsUUFBaUI7UUFDMUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQVNNLEdBQUcsQ0FBQyxHQUFNO1FBQ2IsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE9BQU8sU0FBUyxDQUFDO1NBQ3BCO1FBQ0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Q0FDSjtBQS9CRCxrQ0ErQkMifQ==

/***/ }),

/***/ "./source/app/lib/BDOModel.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var BDOModel_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
"use strict";
const uuid_1 = __webpack_require__("./node_modules/uuid/index.js");
const type_graphql_1 = __webpack_require__("./node_modules/type-graphql/dist/browser-shim.js");
const Binding_1 = __webpack_require__("./source/app/lib/Binding.ts");
const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");
const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");
let BDOModel = BDOModel_1 = class BDOModel {
    constructor() {
        this.isBDOModel = true;
        this.collectionName = BDOModel_1.collectionName;
        this.id = `pending_${uuid_1.v1()}`;
        this.className = Object.getPrototypeOf(this.constructor).name;
    }
    get bindings() {
        const bindings = metadata_1.getMetadata(this, "bindings");
        return bindings ? bindings : new Map();
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
};
BDOModel.graphQLType = Object.getPrototypeOf(BDOModel_1.constructor);
BDOModel.isBDOModel = true;
tslib_1.__decorate([
    decorators_1.property(),
    tslib_1.__metadata("design:type", Boolean)
], BDOModel.prototype, "isBDOModel", void 0);
tslib_1.__decorate([
    decorators_1.property(),
    tslib_1.__metadata("design:type", String)
], BDOModel.prototype, "collectionName", void 0);
tslib_1.__decorate([
    decorators_1.attribute((_type) => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], BDOModel.prototype, "id", void 0);
tslib_1.__decorate([
    decorators_1.attribute(),
    tslib_1.__metadata("design:type", String)
], BDOModel.prototype, "className", void 0);
BDOModel = BDOModel_1 = tslib_1.__decorate([
    decorators_1.baseConstructor({ isAbstract: true })
], BDOModel);
exports.BDOModel = BDOModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2xpYi9CRE9Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtCQUFrQztBQUNsQywrQ0FBa0M7QUFDbEMsOENBQXdEO0FBQ3hELHNEQUE2RTtBQUM3RSxrREFBa0Q7QUFXbEQsSUFBc0IsUUFBUSxnQkFBOUIsTUFBc0IsUUFBUTtJQUQ5QjtRQXNDZ0MsZUFBVSxHQUFZLElBQUksQ0FBQztRQVEzQixtQkFBYyxHQUFZLFVBQVEsQ0FBQyxjQUFjLENBQUM7UUFTN0MsT0FBRSxHQUFXLFdBQVcsU0FBSSxFQUFFLEVBQUUsQ0FBQztRQVVyQyxjQUFTLEdBQVcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBaUVsRyxDQUFDO0lBdkRHLElBQWMsUUFBUTtRQUNsQixNQUFNLFFBQVEsR0FBRyxzQkFBVyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMvQyxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFXTSxJQUFJLENBQTJFLFFBQVcsRUFBRSxJQUFRO1FBQ3ZHLE9BQU8sSUFBSSxpQkFBTyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUE2RCxDQUFDO0lBQ3pHLENBQUM7SUFRTSxRQUFRO1FBQ1gsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBVU0sTUFBTTtRQUNULE1BQU0sSUFBSSxHQUFtQixFQUFFLENBQUM7UUFDaEMsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDcEIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUN6QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7YUFDdkI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FTSixDQUFBO0FBdkgwQixvQkFBVyxHQUFRLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBbUIvRCxtQkFBVSxHQUFZLElBQUksQ0FBQztBQVF0QztJQUFYLHFCQUFRLEVBQUU7OzRDQUE0QztBQVEzQztJQUFYLHFCQUFRLEVBQUU7O2dEQUFtRTtBQVNwRDtJQUF6QixzQkFBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxpQkFBRSxDQUFDOztvQ0FBeUM7QUFVckQ7SUFBWixzQkFBUyxFQUFFOzsyQ0FBa0Y7QUFoRTVFLFFBQVE7SUFEN0IsNEJBQWUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQztHQUNoQixRQUFRLENBaUk3QjtBQWpJcUIsNEJBQVEifQ==

/***/ }),

/***/ "./source/app/lib/BDORoute.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __webpack_require__("./node_modules/lodash/lodash.js");
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
        if (lodash_1.isString(this.templateString)) {
            stringToParse = environment_1.templateEnvironment.renderString(this.templateString, templateParams);
        }
        if (lodash_1.isObject(this.templateString)) {
            stringToParse = this.templateString.render(templateParams);
        }
        return stringToParse;
    }
    async templateParams(_requestOrParams) {
        return {};
    }
}
BDORoute.attachToServers = ['*'];
exports.BDORoute = BDORoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPUm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2xpYi9CRE9Sb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLG1DQUE0QztBQUM1Qyx3REFBNkQ7QUFTN0QsTUFBc0IsUUFBUTtJQUE5QjtRQXFCVyxvQkFBZSxHQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztRQVFwRSxXQUFNLEdBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQWtCdEIsbUJBQWMsR0FBc0IsYUFBYSxDQUFDO1FBVWxELGFBQVEsR0FBWSxLQUFLLENBQUM7SUFtRHhDLENBQUM7SUF4Q2EsY0FBYyxDQUFDLGNBQThCO1FBQ25ELElBQUksYUFBYSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQy9CLGFBQWEsR0FBRyxpQ0FBbUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUN6RjtRQUNELElBQUksaUJBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDL0IsYUFBYSxHQUFjLElBQUksQ0FBQyxjQUFlLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzFFO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDekIsQ0FBQztJQVdTLEtBQUssQ0FBQyxjQUFjLENBQUMsZ0JBQTBDO1FBQ3JFLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7QUE5RWEsd0JBQWUsR0FBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBWnBELDRCQTRHQyJ9

/***/ }),

/***/ "./source/app/lib/Binding.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
        if (!Reflect.hasMetadata(iniBindName, this.initiator))
            metadata_1.defineMetadata(this.initiator, iniBindName, new Map());
        if (!Reflect.hasMetadata(bindName, this.object))
            metadata_1.defineMetadata(this.object, bindName, new Map());
        const initiatorMData = metadata_1.getMetadata(this.initiator, iniBindName) || new Map();
        const initiatorBinding = initiatorMData.get(this.initiatorProperty);
        if (initiatorBinding)
            initiatorBinding.remove();
        const mData = metadata_1.getMetadata(this.object, bindName) || new Map();
        if (!mData.has(this.property))
            mData.set(this.property, []);
        mData.get(this.property).push(this);
        initiatorMData.set(this.initiatorProperty, this);
        const fieldMDataName = `field:${this.property}`;
        const objectField = metadata_1.getWildcardMetadata(this.object, this.property);
        const initiatorField = metadata_1.getWildcardMetadata(this.initiator, this.initiatorProperty);
        let field = metadata_1.getWildcardMetadata(this.object, fieldMDataName);
        if (!field)
            metadata_1.defineWildcardMetadata(this.object, fieldMDataName, new Field_1.Field(this.object, this.property));
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
            if (initiatorMData)
                initiatorMData.delete(this.initiatorProperty.toString());
            this.restoreDescriptor(this.initiator, this.initiatorProperty, initiatorValue, this.initiatorDescriptor);
            field.removeField(metadata_1.getWildcardMetadata(this.initiator, this.initiatorProperty));
        }
        if (objectBindings) {
            util_1.removeElementFromArray(objectBindings, this);
            field.removeField(metadata_1.getWildcardMetadata(this.object, this.property));
            if (!objectBindings.length) {
                if (objectMData)
                    objectMData.delete(this.property);
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
                if (that.mode === "WriteOnly" && this === that.initiator)
                    return undefined;
                return framework_1.getter(that.object, that.property, "field");
            },
            set: function bindingSet(newVal) {
                if (that.mode === "ReadOnly" && this === that.initiator)
                    return;
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
        if (object === this.initiator)
            mDataName = iniBindName;
        while (!descriptor) {
            prototype = Object.getPrototypeOf(prototype);
            if (!prototype)
                break;
            if (prototype.constructor.name === "BaseConstructor")
                prototype = Object.getPrototypeOf(prototype);
            descriptor = Reflect.getOwnPropertyDescriptor(prototype, key);
        }
        let searchDescriptorInBindings = false;
        if (descriptor) {
            if (descriptor.set && descriptor.set.name === "bindingSet")
                searchDescriptorInBindings = true;
            if (descriptor.get && descriptor.get.name === "bindingGet")
                searchDescriptorInBindings = true;
        }
        if (searchDescriptorInBindings) {
            const mData = metadata_1.getMetadata(object, mDataName);
            const bindings = mData ? mData.get(key.toString()) : undefined;
            if (bindings) {
                if (bindings instanceof Array) {
                    descriptor = bindings[0].descriptor;
                }
                else
                    descriptor = bindings.initiatorDescriptor;
            }
        }
        return descriptor;
    }
}
exports.Binding = Binding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmluZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvbGliL0JpbmRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBeUQ7QUFFekQsMENBQXVDO0FBQ3ZDLG9EQUFzRDtBQUN0RCxrREFBK0c7QUFJL0csTUFBTSxXQUFXLEdBQUcsa0JBQWtCLENBQUM7QUFDdkMsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDO0FBc0I1QixNQUFhLE9BQU87SUEwRWhCLFlBQVksTUFBUyxFQUFFLFFBQVcsRUFBRSxPQUFvQixXQUFXO1FBQy9ELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFLTSxRQUFRLENBQUMsS0FBVztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBUU0sT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBU00sT0FBTyxDQUFDLFNBQVksRUFBRSxRQUFXO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUM7UUFDbEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBR3RHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxD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

/***/ }),

/***/ "./source/app/lib/Errors.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ValueError extends Error {
}
exports.ValueError = ValueError;
class TypeError extends Error {
}
exports.TypeError = TypeError;
class ConfigurationError extends Error {
}
exports.ConfigurationError = ConfigurationError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9saWIvRXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0EsTUFBYSxVQUFXLFNBQVEsS0FBSztDQUFJO0FBQXpDLGdDQUF5QztBQVN6QyxNQUFhLFNBQVUsU0FBUSxLQUFLO0NBQUk7QUFBeEMsOEJBQXdDO0FBVXhDLE1BQWEsa0JBQW1CLFNBQVEsS0FBSztDQUFJO0FBQWpELGdEQUFpRCJ9

/***/ }),

/***/ "./source/app/lib/Field.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
const Watched_1 = __webpack_require__("./source/app/lib/Watched.ts");
const util_1 = __webpack_require__("./source/app/utils/util.ts");
const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");
const on_change_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/on-change/index.js"));
const lodash_1 = __webpack_require__("./node_modules/lodash/lodash.js");
class Field {
    constructor(object, property) {
        this.fields = [];
        this.object = object;
        this.property = property;
    }
    addField(field) {
        if (this.fields.includes(field))
            return;
        if (field.object && field.object.isBDOModel) {
            const arrayObjProxy = this.getArrayObjectProxy(field.valueOf());
            this.value = arrayObjProxy;
        }
        if (field instanceof Watched_1.Watched && field.subObject)
            this.redefineValue(field.subObject);
        this.redefineValue(field);
        this.fields.push(field);
    }
    removeField(field) {
        if (!this.fields.includes(field))
            return;
        if (field instanceof Watched_1.Watched && field.subObject)
            this.restoreValue(field.subObject);
        this.restoreValue(field);
        util_1.removeElementFromArray(this.fields, field);
    }
    setValue(value) {
        for (const field of this.fields)
            field.setValue(value);
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
                if (value === thatValue)
                    return;
                that.value = that.getArrayObjectProxy(value);
                ;
            },
            configurable: true,
            enumerable: true
        });
    }
    restoreValue(field) {
        Reflect.deleteProperty(field, "value");
        field.setValue(util_1.getProxyTarget(this.value));
    }
    getArrayObjectProxy(value) {
        if (value instanceof Array || lodash_1.isObject(value)) {
            value = on_change_1.default.target(value);
            return on_change_1.default(value, (path, changedValue, previousValue) => {
                for (const field of this.fields) {
                    field.proxyHandler(path, changedValue, previousValue, false);
                }
            });
        }
        return value;
    }
}
exports.Field = Field;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2xpYi9GaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSw4Q0FBMkM7QUFFM0MsMENBQXlFO0FBQ3pFLGtEQUE2RDtBQUM3RCxrRUFBaUM7QUFDakMsbUNBQWtDO0FBUWxDLE1BQWEsS0FBSztJQVVkLFlBQVksTUFBUyxFQUFFLFFBQVc7UUFGMUIsV0FBTSxHQUFpQyxFQUFFLENBQUM7UUFHOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVNLFFBQVEsQ0FBQyxLQUE0QjtRQUN4QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU87UUFDeEMsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFlLEtBQUssQ0FBQyxNQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3JELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztTQUM5QjtRQUNELElBQUksS0FBSyxZQUFZLGlCQUFPLElBQUksS0FBSyxDQUFDLFNBQVM7WUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTSxXQUFXLENBQUMsS0FBNEI7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU87UUFDekMsSUFBSSxLQUFLLFlBQVksaUJBQU8sSUFBSSxLQUFLLENBQUMsU0FBUztZQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsNkJBQXNCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sUUFBUSxDQUFDLEtBQWdDO1FBQzVDLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFTSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTyxhQUFhLENBQUMsS0FBNEI7UUFDOUMsaUNBQXNCLENBQVMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNoRSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFO1lBQ25DLEdBQUc7Z0JBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUM7WUFDRCxHQUFHLENBQUMsS0FBVztnQkFDWCxLQUFLLEdBQUcscUJBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsTUFBTSxTQUFTLEdBQUcscUJBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzdDLElBQUksS0FBSyxLQUFLLFNBQVM7b0JBQUUsT0FBTztnQkFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQUEsQ0FBQztZQUNsRCxDQUFDO1lBQ0QsWUFBWSxFQUFFLElBQUk7WUFDbEIsVUFBVSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLFlBQVksQ0FBQyxLQUE0QjtRQUM3QyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QyxLQUFLLENBQUMsUUFBUSxDQUFDLHFCQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVPLG1CQUFtQixDQUFDLEtBQVc7UUFDbkMsSUFBSSxLQUFLLFlBQVksS0FBSyxJQUFJLGlCQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0MsS0FBSyxHQUFHLG1CQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLE9BQU8sbUJBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxFQUFFO2dCQUN6RCxLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQzdCLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFRLFlBQVksRUFBUSxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQzVFO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7Q0FDSjtBQTVFRCxzQkE0RUMifQ==

/***/ }),

/***/ "./source/app/lib/Modification.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kaWZpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9saWIvTW9kaWZpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUEsTUFBYSxZQUFZO0lBbUJyQixZQUFZLEtBQVcsRUFBRSxPQUFxQixRQUFRO1FBQ2xELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQU0sSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFRTSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFRTSxRQUFRLENBQUMsS0FBVTtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0NBQ0o7QUEzQ0Qsb0NBMkNDIn0=

/***/ }),

/***/ "./source/app/lib/Property.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
const Modification_1 = __webpack_require__("./source/app/lib/Modification.ts");
const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");
const environment_1 = __webpack_require__("./source/app/utils/environment.ts");
const util_1 = __webpack_require__("./source/app/utils/util.ts");
const Errors_1 = __webpack_require__("./source/app/lib/Errors.ts");
const on_change_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/on-change/index.js"));
const lodash_1 = __webpack_require__("./node_modules/lodash/lodash.js");
class Property {
    constructor(object, property, params) {
        this.object = object;
        this.property = property;
        Object.assign(this, params);
        const capitalizedProp = util_1.ucFirst(property);
        const onTypeCheckFail = `on${capitalizedProp}TypeCheckFail`;
        const onTypeCheck = `on${capitalizedProp}TypeCheck`;
        const onTypeCheckSuccess = `on${capitalizedProp}TypeCheckSuccess`;
        this.onTypeCheckFail = params ? params.onTypeCheckFail || onTypeCheckFail : onTypeCheckFail;
        this.onTypeCheck = params ? params.onTypeCheck || onTypeCheck : onTypeCheck;
        this.onTypeCheckSuccess = params ? params.onTypeCheckSuccess || onTypeCheckSuccess : onTypeCheckSuccess;
    }
    setValue(value) {
        this.doSetValue(value, true);
    }
    valueOf() {
        const stringKey = this.property.toString();
        let value = this.value;
        if (!util_1.isProxy(value) && this.saveInLocalStorage && lodash_1.isFunction(this.object.getNamespacedStorage)) {
            value = this.object.getNamespacedStorage(stringKey);
        }
        return value;
    }
    typeGuard(value) {
        let valueToPass = value;
        if (value instanceof Modification_1.Modification)
            valueToPass = value.valueOf();
        const designType = metadata_1.getDesignType(this.object, this.property.toString());
        const typeError = new Errors_1.TypeError(`${valueToPass} is not type of ${designType.className || designType.name}`);
        const idxStructObj = this.object;
        let error;
        if (!this.nullable && (valueToPass === undefined || valueToPass === null))
            error = typeError;
        if (!error) {
            if (util_1.isPrimitive(valueToPass)) {
                if (typeof valueToPass !== designType.name.toLowerCase()) {
                    if (!this.nullable || !(valueToPass === undefined || valueToPass === null))
                        error = typeError;
                }
            }
            else if (!(valueToPass instanceof designType))
                error = typeError;
        }
        if (!error && lodash_1.isFunction(idxStructObj[this.onTypeCheck]))
            error = idxStructObj[this.onTypeCheck](valueToPass);
        if (error) {
            if (lodash_1.isFunction(idxStructObj[this.onTypeCheckFail])) {
                idxStructObj[this.onTypeCheckFail](error);
            }
            else if (lodash_1.isFunction(idxStructObj.onTypeCheckFail)) {
                idxStructObj.onTypeCheckFail(error);
            }
            else
                throw error;
        }
        else if (lodash_1.isFunction(idxStructObj[this.onTypeCheckSuccess]))
            idxStructObj[this.onTypeCheckSuccess]();
        return !(Boolean(error).valueOf());
    }
    proxyHandler(_path, _changedVal, _prevVal, _attrReflectsToObj = true) {
        const value = this.value;
        if (value === undefined || value === null)
            return;
        this.doSetValue(on_change_1.default.target(value), false);
    }
    shouldDoSetValue(value, skipGuard = false) {
        return !(value === this.ownValue || !skipGuard && !this.disableTypeGuard && !this.typeGuard(value));
    }
    doSetValue(value, modifyValue = true, skipGuard = false) {
        if (!this.shouldDoSetValue(value, skipGuard))
            return;
        let valueToPass;
        if (value instanceof Modification_1.Modification) {
            valueToPass = value.valueOf();
        }
        else
            valueToPass = value;
        if (modifyValue) {
            const proxyfied = this.proxyfyValue(valueToPass);
            this.value = proxyfied;
            this.ownValue = valueToPass;
        }
        if (this.shouldUpdateNsStorage() && lodash_1.isFunction(this.object.setUpdateNamespacedStorage)) {
            this.object.setUpdateNamespacedStorage(this.property.toString(), valueToPass);
        }
    }
    proxyfyValue(value) {
        if (value instanceof Array) {
            value = on_change_1.default.target(value);
            return on_change_1.default(value, (path, changedVal, prevVal) => {
                if (this.proxyHandlerReplacement) {
                    this.proxyHandlerReplacement(path, changedVal, prevVal, false);
                }
                else
                    this.proxyHandler(path, changedVal, prevVal, false);
            });
        }
        return value;
    }
    shouldUpdateNsStorage() {
        if (!this.saveInLocalStorage || !environment_1.isBrowser())
            return false;
        const stringKey = this.property.toString();
        const keyShouldBeUpdated = metadata_1.getMetadata(this.object, "keyShouldBeUpdated") || {};
        if (keyShouldBeUpdated[stringKey])
            return true;
        if (lodash_1.isFunction(this.object.getNamespacedStorage) &&
            this.object.getNamespacedStorage(stringKey) === undefined) {
            metadata_1.defineMetadata(this.object, "keyShouldBeUpdated", Object.assign(keyShouldBeUpdated, { [stringKey]: true }));
            return true;
        }
        return Boolean(metadata_1.getMetadata(this.object, "constructionComplete"));
    }
}
exports.Property = Property;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2xpYi9Qcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3REFBcUQ7QUFDckQsa0RBQWlGO0FBQ2pGLHdEQUFtRDtBQUNuRCwwQ0FBZ0U7QUFDaEUsNENBQTRDO0FBQzVDLGtFQUFpQztBQUNqQyxtQ0FBb0M7QUEyRXBDLE1BQWEsUUFBUTtJQTZGakIsWUFBWSxNQUFTLEVBQUUsUUFBVyxFQUFFLE1BQXdCO1FBQ3hELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTVCLE1BQU0sZUFBZSxHQUFHLGNBQU8sQ0FBQyxRQUFrQixDQUFDLENBQUM7UUFDcEQsTUFBTSxlQUFlLEdBQUcsS0FBSyxlQUFlLGVBQWUsQ0FBQztRQUM1RCxNQUFNLFdBQVcsR0FBRyxLQUFLLGVBQWUsV0FBVyxDQUFDO1FBQ3BELE1BQU0sa0JBQWtCLEdBQUcsS0FBSyxlQUFlLGtCQUFrQixDQUFDO1FBRWxFLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO1FBQzVGLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQzVFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUM7SUFDNUcsQ0FBQztJQVNNLFFBQVEsQ0FBQyxLQUFnQztRQUM1QyxJQUFJ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

/***/ }),

/***/ "./source/app/lib/Watched.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
const Modification_1 = __webpack_require__("./source/app/lib/Modification.ts");
const util_1 = __webpack_require__("./source/app/utils/util.ts");
const on_change_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/on-change/index.js"));
const clone_deep_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/clone-deep/index.js"));
const lodash_1 = __webpack_require__("./node_modules/lodash/lodash.js");
class Watched {
    constructor(object, property, params) {
        this.isShallow = false;
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
        this.isShallow = params ? Boolean(params.isShallow) : false;
    }
    setValue(value) {
        if (!this.shouldDoSetValue(value))
            return;
        const oldVal = clone_deep_1.default(this.ownValue);
        let valueToPass;
        if (value instanceof Modification_1.Modification) {
            valueToPass = value.valueOf();
        }
        else
            valueToPass = value;
        let useValue = false;
        if (value instanceof Modification_1.Modification) {
            value.setValue(valueToPass);
            useValue = true;
        }
        const valueToSet = useValue ? value : valueToPass;
        if (this.subObject) {
            this.subObject.setValue(valueToSet);
            this.ownValue = util_1.getProxyTarget(this.subObject.valueOf());
        }
        else {
            valueToPass = this.proxyfyValue(valueToPass);
            this.value = valueToPass;
            this.ownValue = util_1.getProxyTarget(valueToPass);
        }
        const idxStructObj = this.object;
        if (lodash_1.isFunction(idxStructObj[this.onChange]) && this.isInitialized)
            idxStructObj[this.onChange](oldVal);
        if (lodash_1.isFunction(idxStructObj[this.onInit]) && !this.isInitialized)
            idxStructObj[this.onInit](valueToPass);
        this.isInitialized = true;
    }
    valueOf() {
        if (this.subObject)
            return this.subObject.valueOf();
        return this.value;
    }
    setSubObject(subObject) {
        subObject.proxyHandlerReplacement = this.proxyHandler.bind(this);
        this.subObject = subObject;
    }
    proxyHandler(path, changedVal, prevVal, attrReflectsToObj = true) {
        if (this.subObject)
            this.subObject.proxyHandler(path, changedVal, prevVal, attrReflectsToObj);
        const newKeys = Object.keys(changedVal);
        const oldKeys = Object.keys(prevVal);
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
        }
        else
            return (value !== this.ownValue);
    }
    proxyfyValue(value) {
        if (value instanceof Array) {
            value = on_change_1.default.target(value);
            return on_change_1.default(value, (path, changedValue, previousValue) => {
                this.proxyHandler(path, changedValue, previousValue);
            }, { isShallow: this.isShallow });
        }
        return value;
    }
    caseDetectExec(cdParams) {
        if (cdParams.len1 > cdParams.len2 && cdParams.func in this.object) {
            for (const modified of cdParams.keys1) {
                if (!cdParams.keys2.includes(modified)) {
                    this.object[cdParams.func]((cdParams.changedVal)[modified], cdParams.path);
                    break;
                }
            }
        }
    }
}
exports.Watched = Watched;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2F0Y2hlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvbGliL1dhdGNoZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsd0RBQXFEO0FBQ3JELDBDQUEwRDtBQUMxRCxrRUFBaUM7QUFDakMsb0VBQW1DO0FBQ25DLG1DQUFvQztBQThIcEMsTUFBYSxPQUFPO0lBcUdoQixZQUFZLE1BQVMsRUFBRSxRQUFXLEVBQUUsTUFBdUI7UUFoQ3BELGNBQVMsR0FBWSxLQUFLLENBQUM7UUE4QnhCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBR3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRXpCLE1BQU0sZUFBZSxHQUFHLGNBQU8sQ0FBQyxRQUFrQixDQUFDLENBQUM7UUFFcEQsTUFBTSxVQUFVLEdBQUcsS0FBSyxlQUFlLE1BQU0sQ0FBQztRQUM5QyxNQUFNLFlBQVksR0FBRyxLQUFLLGVBQWUsUUFBUSxDQUFDO1FBQ2xELE1BQU0sU0FBUyxHQUFHLEtBQUssZUFBZSxLQUFLLENBQUM7UUFDNUMsTUFBTSxZQUFZLEdBQUcsS0FBSyxlQUFlLFFBQVEsQ0FBQztRQUVsRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUNoRSxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUN4RSxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxD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

/***/ }),

/***/ "./source/app/models/BDOTest.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");
function BDOTestFactory(ctor) {
    let BDOTest = class BDOTest extends ctor {
        constructor() {
            super(...arguments);
            this.title = 'test';
            this.tester = [];
        }
        onTestChange(changed) {
            console.log("test changed", changed, this);
        }
        onTesterInit(init) {
            console.log("tester init", init, this);
        }
        onTesterChange(changed) {
            console.log("tester changed", changed, this);
        }
        onTesterAdd(added) {
            console.log("tester added", added, this);
        }
        onTesterRemove(removed) {
            console.log("tester removed", removed, this);
        }
    };
    tslib_1.__decorate([
        decorators_1.attribute(),
        tslib_1.__metadata("design:type", String)
    ], BDOTest.prototype, "title", void 0);
    tslib_1.__decorate([
        decorators_1.watched(), decorators_1.attribute((_type) => [String]),
        tslib_1.__metadata("design:type", Array)
    ], BDOTest.prototype, "tester", void 0);
    BDOTest = tslib_1.__decorate([
        decorators_1.baseConstructor({ isAbstract: true, collectionName: "BDOTest" })
    ], BDOTest);
    return BDOTest;
}
exports.BDOTestFactory = BDOTestFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvbW9kZWxzL0JET1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQTRFO0FBVTVFLFNBQWdCLGNBQWMsQ0FBc0MsSUFBVztJQVMzRSxJQUFlLE9BQU8sR0FBdEIsTUFBZSxPQUFRLFNBQVEsSUFBSTtRQUFuQzs7WUFRd0IsVUFBSyxHQUFXLE1BQU0sQ0FBQztZQVFPLFdBQU0sR0FBYSxFQUFFLENBQUM7UUF5RDVFLENBQUM7UUFoRGEsWUFBWSxDQUFDLE9BQXVCO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBU1MsWUFBWSxDQUFDLElBQW9CO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBU1MsY0FBYyxDQUFDLE9BQXVCO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFTUyxXQUFXLENBQUMsS0FBcUI7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFTUyxjQUFjLENBQUMsT0FBdUI7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQztLQUVKLENBQUE7SUFqRWdCO1FBQVosc0JBQVMsRUFBRTs7MENBQStCO0lBUUE7UUFBMUMsb0JBQU8sRUFBRSxFQUFFLHNCQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7OzJDQUE4QjtJQWhCN0QsT0FBTztRQURyQiw0QkFBZSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLENBQUM7T0FDbEQsT0FBTyxDQXlFckI7SUFDRCxPQUFPLE9BQU8sQ0FBQztBQUVuQixDQUFDO0FBckZELHdDQXFGQyJ9

/***/ }),

/***/ "./source/app/models/BDOTest1.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");
function BDOTest1Factory(ctor) {
    let BDOTest1 = class BDOTest1 extends ctor {
        doSomething() {
            return "lol";
        }
        onOhaInit(_value) {
        }
    };
    BDOTest1 = tslib_1.__decorate([
        decorators_1.baseConstructor({ isAbstract: true, collectionName: "BDOTest1" })
    ], BDOTest1);
    return BDOTest1;
}
exports.BDOTest1Factory = BDOTest1Factory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPVGVzdDEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL21vZGVscy9CRE9UZXN0MS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxzREFBd0Q7QUFTeEQsU0FBZ0IsZUFBZSxDQUFrRCxJQUFXO0lBVXhGLElBQWUsUUFBUSxHQUF2QixNQUFlLFFBQVMsU0FBUSxJQUFJO1FBUXpCLFdBQVc7WUFDZCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBU1MsU0FBUyxDQUFDLE1BQWM7UUFFbEMsQ0FBQztLQUNKLENBQUE7SUF0QmMsUUFBUTtRQUR0Qiw0QkFBZSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLENBQUM7T0FDbkQsUUFBUSxDQXNCdEI7SUFDRCxPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDO0FBbENELDBDQWtDQyJ9

/***/ }),

/***/ "./source/app/models/Cell.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
"use strict";
const Chunk_1 = __webpack_require__("./source/app/models/Chunk.ts");
const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");
let Cell = class Cell {
    constructor(_params) {
        this.x = 0;
        this.y = 0;
        this.cave = 0;
        this.river = 0;
        this.humidity = 0;
        this.temperature = 0;
        this.chunk = new Chunk_1.Chunk();
    }
};
Cell = tslib_1.__decorate([
    decorators_1.baseConstructor(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ConstParams !== "undefined" && ConstParams) === "function" ? _a : Object])
], Cell);
exports.Cell = Cell;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvbW9kZWxzL0NlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBZ0M7QUFDaEMsc0RBQXdEO0FBU3hELElBQWEsSUFBSSxHQUFqQixNQUFhLElBQUk7SUF5RGIsWUFBWSxPQUEyQjtRQWxEaEMsTUFBQyxHQUFXLENBQUMsQ0FBQztRQVFkLE1BQUMsR0FBVyxDQUFDLENBQUM7UUFRZCxTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBUWpCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFRbEIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQVFyQixnQkFBVyxHQUFXLENBQUMsQ0FBQztRQVF4QixVQUFLLEdBQVUsSUFBSSxhQUFLLEVBQUUsQ0FBQztJQUVTLENBQUM7Q0FDL0MsQ0FBQTtBQTFEWSxJQUFJO0lBRGhCLDRCQUFlLEVBQUU7aUVBMERRLFdBQVcsb0JBQVgsV0FBVztHQXpEeEIsSUFBSSxDQTBEaEI7QUExRFksb0JBQUkifQ==

/***/ }),

/***/ "./source/app/models/Chunk.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
const open_simplex_noise_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/open-simplex-noise/lib/index.js"));
const lodash_1 = __webpack_require__("./node_modules/lodash/lodash.js");
const Cell_1 = __webpack_require__("./source/app/models/Cell.ts");
class Chunk {
    constructor(params) {
        this.x = 0;
        this.y = 0;
        this.size = 64;
        this.grid = [];
        this.simplexCave = new open_simplex_noise_1.default(1);
        this.simplexRiver = new open_simplex_noise_1.default(2);
        this.simplexTemperature = new open_simplex_noise_1.default(3);
        this.simplexHumidity = new open_simplex_noise_1.default(4);
        lodash_1.merge(this, params);
        this.generateGrid();
    }
    generateGrid() {
        for (let row = 0; row < this.size; row++) {
            if (!this.grid[row]) {
                this.grid.push([]);
            }
            for (let col = 0; col < this.size; col++) {
                const xCoordinate = col + this.x * this.size;
                const yCoordinate = row + this.y * this.size;
                this.grid[row].push(new Cell_1.Cell({
                    x: xCoordinate,
                    y: yCoordinate,
                    cave: this.simplexCave.noise2D(xCoordinate / 100, yCoordinate / 100),
                    river: this.simplexRiver.noise2D(xCoordinate / 500, yCoordinate / 500),
                    temperature: this.simplexTemperature.noise2D(xCoordinate / 2500, yCoordinate / 2500),
                    humidity: this.simplexHumidity.noise2D(xCoordinate / 2500, yCoordinate / 2500),
                    chunk: this
                }));
            }
        }
    }
}
exports.Chunk = Chunk;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2h1bmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL21vZGVscy9DaHVuay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvRkFBa0Q7QUFDbEQsbUNBQStCO0FBQy9CLGlDQUE4QjtBQVE5QixNQUFhLEtBQUs7SUFzRWQsWUFBWSxNQUEyQjtRQS9EaEMsTUFBQyxHQUFXLENBQUMsQ0FBQztRQVFkLE1BQUMsR0FBVyxDQUFDLENBQUM7UUFRZCxTQUFJLEdBQVksRUFBRSxDQUFDO1FBU2hCLFNBQUksR0FBYSxFQUFFLENBQUM7UUFTcEIsZ0JBQVcsR0FBcUIsSUFBSSw0QkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQVN4RCxpQkFBWSxHQUFxQixJQUFJLDRCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBU3pELHVCQUFrQixHQUFxQixJQUFJLDRCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBUy9ELG9CQUFlLEdBQXFCLElBQUksNEJBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFHbEUsY0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQVFTLFlBQVk7UUFDbEIsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFZLElBQUksQ0FBQyxJQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3RCO1lBQ0QsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFZLElBQUksQ0FBQyxJQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQ2hELE1BQU0sV0FBVyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3JELE1BQU0sV0FBVyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBRXJELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNmLElBQUksV0FBSSxDQUFDO29CQUNMLENBQUMsRUFBRSxXQUFXO29CQUNkLENBQUMsRUFBRSxXQUFXO29CQUNkLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFLFdBQVcsR0FBRyxHQUFHLENBQUM7b0JBQ3BFLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFLFdBQVcsR0FBRyxHQUFHLENBQUM7b0JBQ3RFLFdBQVcsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQUUsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDcEYsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQUUsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDOUUsS0FBSyxFQUFFLElBQUk7aUJBQ2QsQ0FBQyxDQUNMLENBQUM7YUFDTDtTQUNKO0lBQ0wsQ0FBQztDQUNKO0FBeEdELHNCQXdHQyJ9

/***/ }),

/***/ "./source/app/routes/BDOConfig.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function BDOConfigFactory(ctor) {
    class BDOConfig extends ctor {
        constructor() {
            super(...arguments);
            this.routes = ["/:name"];
            this.jsonOnly = true;
        }
    }
    return BDOConfig;
}
exports.BDOConfigFactory = BDOConfigFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9yb3V0ZXMvQkRPQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBU0EsU0FBZ0IsZ0JBQWdCLENBQXNDLElBQVc7SUFVN0UsTUFBZSxTQUFVLFNBQVEsSUFBSTtRQUFyQzs7WUFPVyxXQUFNLEdBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQU8zQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzlCLENBQUM7S0FBQTtJQUVELE9BQU8sU0FBUyxDQUFDO0FBQ3JCLENBQUM7QUE1QkQsNENBNEJDIn0=

/***/ }),

/***/ "./source/app/routes/BDOGameLobby.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function BDOGameLobbyFactory(ctor) {
    class BDOGameLobby extends ctor {
        constructor() {
            super(...arguments);
            this.routerNameSpace = '/';
            this.templateString = __webpack_require__("./out/app/views/gameLobby.njk");
        }
        async templateParams() {
            return {
                oha: 'OOOOOHAAAAAAAA!!!'
            };
        }
    }
    BDOGameLobby.attachToServers = ["GameServer"];
    return BDOGameLobby;
}
exports.BDOGameLobbyFactory = BDOGameLobbyFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPR2FtZUxvYmJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9yb3V0ZXMvQkRPR2FtZUxvYmJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBVUEsU0FBZ0IsbUJBQW1CLENBQXNDLElBQVc7SUFTaEYsTUFBZSxZQUFhLFNBQVEsSUFBSTtRQUF4Qzs7WUFnQlcsb0JBQWUsR0FBRyxHQUFHLENBQUM7WUFRbkIsbUJBQWMsR0FBYSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQWM3RSxDQUFDO1FBTGEsS0FBSyxDQUFDLGNBQWM7WUFDMUIsT0FBTztnQkFDSCxHQUFHLEVBQUUsbUJBQW1CO2FBQzNCLENBQUM7UUFDTixDQUFDOztJQTVCYSw0QkFBZSxHQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUErQjdELE9BQU8sWUFBWSxDQUFDO0FBQ3hCLENBQUM7QUFsREQsa0RBa0RDIn0=

/***/ }),

/***/ "./source/app/routes/BDOHome.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function BDOHomeFactory(ctor) {
    class BDOHome extends ctor {
        constructor() {
            super(...arguments);
            this.routerNameSpace = '/';
            this.templateString = __webpack_require__("./out/app/views/home.njk");
        }
        async templateParams() {
            return {
                oha: 'endlich zu Hause =)'
            };
        }
    }
    BDOHome.attachToServers = ["WebServer"];
    return BDOHome;
}
exports.BDOHomeFactory = BDOHomeFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPSG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvcm91dGVzL0JET0hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFVQSxTQUFnQixjQUFjLENBQXNDLElBQVc7SUFTM0UsTUFBZSxPQUFRLFNBQVEsSUFBSTtRQUFuQzs7WUFnQlcsb0JBQWUsR0FBRyxHQUFHLENBQUM7WUFRbkIsbUJBQWMsR0FBYSxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQWN4RSxDQUFDO1FBTGEsS0FBSyxDQUFDLGNBQWM7WUFDMUIsT0FBTztnQkFDSCxHQUFHLEVBQUUscUJBQXFCO2FBQzdCLENBQUM7UUFDTixDQUFDOztJQTVCYSx1QkFBZSxHQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUErQjVELE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUM7QUFsREQsd0NBa0RDIn0=

/***/ }),

/***/ "./source/app/utils sync recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./source/app/utils sync recursive";

/***/ }),

/***/ "./source/app/utils/decorators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watched", function() { return watched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "property", function() { return property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attribute", function() { return attribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseConstructor", function() { return baseConstructor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arg", function() { return arg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "args", function() { return args; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolver", function() { return resolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutation", function() { return mutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscription", function() { return subscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pubSub", function() { return pubSub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputType", function() { return inputType; });
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bdo_utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./source/app/utils/util.ts");
/* harmony import */ var _bdo_utils_util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bdo_utils_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./source/app/utils/environment.ts");
/* harmony import */ var _bdo_utils_environment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bdo_utils_environment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bdo_lib_Binding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./source/app/lib/Binding.ts");
/* harmony import */ var _bdo_lib_Binding__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bdo_lib_Binding__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./source/app/utils/metadata.ts");
/* harmony import */ var _bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bdo_utils_framework__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./source/app/utils/framework.ts");
/* harmony import */ var _bdo_utils_framework__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_bdo_utils_framework__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/type-graphql/dist/browser-shim.js");
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(type_graphql__WEBPACK_IMPORTED_MODULE_7__);








function watched(params = {}) {
    return (target, key) => {
        const stringKey = key.toString();
        Object(_bdo_utils_framework__WEBPACK_IMPORTED_MODULE_5__["beforePropertyDescriptors"])(target, stringKey, "definedWatchers");
        Object(_bdo_utils_framework__WEBPACK_IMPORTED_MODULE_5__["createDecoratorDescriptor"])(target, stringKey, "Watched", params);
    };
}
function property(params = {}) {
    return (target, key) => {
        const stringKey = key.toString();
        Object(_bdo_utils_framework__WEBPACK_IMPORTED_MODULE_5__["beforePropertyDescriptors"])(target, stringKey, "definedProperties");
        Object(_bdo_utils_framework__WEBPACK_IMPORTED_MODULE_5__["createDecoratorDescriptor"])(target, stringKey, "Property", params);
    };
}
function attribute(typeFunc, params) {
    return (target, key) => {
        const stringKey = key.toString();
        if (typeFunc && !(typeFunc instanceof Function) && !params)
            params = typeFunc;
        if (!params)
            params = {};
        if (typeFunc instanceof Function && params)
            Object(type_graphql__WEBPACK_IMPORTED_MODULE_7__["Field"])(typeFunc, params)(target, key);
        else if (typeFunc instanceof Function)
            Object(type_graphql__WEBPACK_IMPORTED_MODULE_7__["Field"])(typeFunc)(target, key);
        else if (params)
            Object(type_graphql__WEBPACK_IMPORTED_MODULE_7__["Field"])(params)(target, key);
        else
            Object(type_graphql__WEBPACK_IMPORTED_MODULE_7__["Field"])()(target, key);
        Object(_bdo_utils_framework__WEBPACK_IMPORTED_MODULE_5__["beforePropertyDescriptors"])(target, stringKey, "definedAttributes");
        Object(_bdo_utils_framework__WEBPACK_IMPORTED_MODULE_5__["createDecoratorDescriptor"])(target, stringKey, "Attribute", params);
    };
}
function baseConstructor(name, options, constParamsIndex = 0) {
    return (ctor) => {
        const prototype = Object.getPrototypeOf(ctor);
        if (prototype.name === "BaseConstructor") {
            Object.setPrototypeOf(ctor, Object.getPrototypeOf(prototype));
        }
        if (name && (typeof name === "number"))
            constParamsIndex = name;
        if (name && (typeof name === "object"))
            options = name;
        if (name && ((typeof name === "object") || (typeof name === "number")))
            name = undefined;
        if (options && (typeof options === "number"))
            constParamsIndex = options;
        if (options && (typeof options === "number"))
            options = undefined;
        if ("isBDOModel" in ctor) {
            if (name && (typeof name === "string") && options && (typeof options === "object")) {
                Object(type_graphql__WEBPACK_IMPORTED_MODULE_7__["ObjectType"])(name, options)(ctor);
            }
            else if (name && (typeof name === "string")) {
                Object(type_graphql__WEBPACK_IMPORTED_MODULE_7__["ObjectType"])(name)(ctor);
            }
            else if (options && (typeof options === "object")) {
                Object(type_graphql__WEBPACK_IMPORTED_MODULE_7__["ObjectType"])(options)(ctor);
            }
            else
                Object(type_graphql__WEBPACK_IMPORTED_MODULE_7__["ObjectType"])()(ctor);
            if (options && (typeof options === "object") && options.collectionName) {
                Object(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_4__["defineMetadata"])(ctor, "collectionName", options.collectionName);
            }
        }
        if (options && (typeof options === "object" && options.isAbstract))
            return ctor;
        class BaseConstructor extends ctor {
            constructor(...params) {
                super(...params);
                this.collectionName = BaseConstructor.collectionName;
                let constParams = params[constParamsIndex];
                if (!(constParams instanceof Object))
                    constParams = {};
                Object(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_4__["defineMetadata"])(this, "normalFunctionality", true);
                let defaultSettings = Object(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_4__["getMetadata"])(this, "defaultSettings") || {};
                defaultSettings = Object.assign(defaultSettings, constParams);
                if (Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(this.getNamespacedStorage)) {
                    const id = constParams.id || defaultSettings.id;
                    const cachedSettings = this.getNamespacedStorage("*", "id", id) || {};
                    for (const key in cachedSettings) {
                        if (cachedSettings.hasOwnProperty(key)) {
                            const element = defaultSettings[key];
                            if (element instanceof _bdo_lib_Binding__WEBPACK_IMPORTED_MODULE_3__["Binding"]) {
                                element.setValue(cachedSettings[key]);
                            }
                            else
                                defaultSettings[key] = cachedSettings[key];
                        }
                    }
                }
                Object.assign(this, defaultSettings);
                Object(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_4__["defineMetadata"])(this, "constructionComplete", true);
                if (Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(this.constructedCallback))
                    this.constructedCallback(...params);
            }
        }
        BaseConstructor.className = Object.getPrototypeOf(BaseConstructor).name;
        BaseConstructor.graphQLType = ctor;
        BaseConstructor.collectionName = Object(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_4__["getMetadata"])(BaseConstructor, "collectionName");
        if (Object(_bdo_utils_environment__WEBPACK_IMPORTED_MODULE_2__["isBrowser"])() && ctor.isBaseComponent) {
            customElements.define(Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_1__["pascalCase2kebabCase"])(ctor.name), BaseConstructor, {
                extends: BaseConstructor.extends
            });
        }
        return BaseConstructor;
    };
}
let query = type_graphql__WEBPACK_IMPORTED_MODULE_7__["Query"];
let arg = type_graphql__WEBPACK_IMPORTED_MODULE_7__["Arg"];
let args = type_graphql__WEBPACK_IMPORTED_MODULE_7__["Args"];
let resolver = type_graphql__WEBPACK_IMPORTED_MODULE_7__["Resolver"];
let root = type_graphql__WEBPACK_IMPORTED_MODULE_7__["Root"];
let mutation = type_graphql__WEBPACK_IMPORTED_MODULE_7__["Mutation"];
let subscription = type_graphql__WEBPACK_IMPORTED_MODULE_7__["Subscription"];
let pubSub = type_graphql__WEBPACK_IMPORTED_MODULE_7__["PubSub"];
let inputType = type_graphql__WEBPACK_IMPORTED_MODULE_7__["InputType"];


/***/ }),

/***/ "./source/app/utils/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
const nunjucks = tslib_1.__importStar(__webpack_require__("./node_modules/nunjucks/browser/nunjucks.js"));
function isNodeJS() {
    if (typeof window === 'undefined' && typeof process === 'object') {
        return true;
    }
    return false;
}
exports.isNodeJS = isNodeJS;
function isBrowser() {
    return !isNodeJS();
}
exports.isBrowser = isBrowser;
exports.templateEnvironment = (() => {
    const noCache = global.process.env.NODE_ENV === 'development' ? true : false;
    const env = new nunjucks.Environment({
        getSource: (path) => {
            return { src: __webpack_require__("./source/app/utils sync recursive")(path), path, noCache };
        }
    }, { noCache });
    env.addFilter('json', (value, spaces) => {
        if (value instanceof nunjucks.runtime.SafeString) {
            value = value.toString();
        }
        return new nunjucks.runtime.SafeString(JSON.stringify(value, null, spaces));
    });
    return env;
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL3V0aWxzL2Vudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUFxQztBQVFyQyxTQUFnQixRQUFRO0lBQ3BCLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtRQUM5RCxPQUFPLElBQUksQ0FBQztLQUNmO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUxELDRCQUtDO0FBUUQsU0FBZ0IsU0FBUztJQUNyQixPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdkIsQ0FBQztBQUZELDhCQUVDO0FBS1ksUUFBQSxtQkFBbUIsR0FBRyxDQUFDLEdBQUcsRUFBRTtJQUNyQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM3RSxNQUFNLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDakMsU0FBUyxFQUFFLENBQUMsSUFBWSxFQUFFLEVBQUU7WUFDeEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQ2pELENBQUM7S0FDSixFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUVoQixHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUNwQyxJQUFJLEtBQUssWUFBWSxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUM5QyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDLENBQUMsRUFBRSxDQUFDIn0=
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/process/browser.js"), __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./source/app/utils/framework.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Binding_1 = __webpack_require__("./source/app/lib/Binding.ts");
const Attribute_1 = __webpack_require__("./source/app/lib/Attribute.ts");
const Property_1 = __webpack_require__("./source/app/lib/Property.ts");
const Watched_1 = __webpack_require__("./source/app/lib/Watched.ts");
const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");
function beforePropertyDescriptors(target, key, mDataName) {
    if (!Reflect.hasMetadata(mDataName, target))
        metadata_1.defineMetadata(target, mDataName, new Array());
    const map = metadata_1.getMetadata(target, mDataName);
    map.push(key.toString());
}
exports.beforePropertyDescriptors = beforePropertyDescriptors;
function getter(instance, key, ns = "") {
    let stringKey = key.toString();
    if (ns)
        stringKey = `${ns}:${key}`;
    if (!metadata_1.getMetadata(instance, "normalFunctionality")) {
        const defaultSettings = metadata_1.getMetadata(instance, "defaultSettings") || {};
        return Reflect.get(defaultSettings, stringKey);
    }
    const mData = metadata_1.getWildcardMetadata(instance, stringKey);
    if (mData)
        return mData.valueOf();
    return undefined;
}
exports.getter = getter;
function setter(instance, key, newVal, ns = "") {
    let stringKey = key.toString();
    if (ns)
        stringKey = `${ns}:${key}`;
    if (!ns && instance[stringKey] === newVal)
        return;
    if (!metadata_1.getMetadata(instance, "normalFunctionality")) {
        const defaultSettings = metadata_1.getMetadata(instance, "defaultSettings") || {};
        Object.assign(defaultSettings, { [stringKey]: newVal });
        metadata_1.defineMetadata(instance, "defaultSettings", defaultSettings);
        return;
    }
    const mData = metadata_1.getWildcardMetadata(instance, stringKey);
    if (newVal instanceof Binding_1.Binding) {
        newVal.install(instance, key);
    }
    else
        mData.setValue(newVal);
}
exports.setter = setter;
function createDecoratorDescriptor(target, key, type, params) {
    const propDesc = Reflect.getOwnPropertyDescriptor(target, key);
    const stringKey = key.toString();
    Reflect.deleteProperty(target, key);
    Reflect.defineProperty(target, key, {
        get: function decoratorGetter() {
            const that = this;
            return getter(that, stringKey);
        },
        set: function decoratorSetter(newVal) {
            const that = this;
            const mData = metadata_1.getWildcardMetadata(this, key);
            let field;
            if (type === "Attribute") {
                field = new Attribute_1.Attribute(that, stringKey, params);
            }
            else if (type === "Property") {
                field = new Property_1.Property(that, stringKey, params);
            }
            else
                field = new Watched_1.Watched(that, stringKey, params);
            if (mData) {
                if ((mData instanceof Attribute_1.Attribute || mData instanceof Property_1.Property) && field instanceof Watched_1.Watched) {
                    field.setSubObject(mData);
                    metadata_1.defineWildcardMetadata(this, stringKey, field);
                }
                else if ((field instanceof Property_1.Property || field instanceof Attribute_1.Attribute) && mData instanceof Watched_1.Watched) {
                    if (!mData.subObject)
                        mData.setSubObject(field);
                }
            }
            else
                metadata_1.defineWildcardMetadata(this, stringKey, field);
            if (((type === "Attribute" || type === "Property") && !(mData instanceof Watched_1.Watched)) || type === "Watched") {
                setter(that, stringKey, newVal);
            }
            if (propDesc && propDesc.set && propDesc.set.name === "decoratorSetter")
                propDesc.set.call(this, newVal);
        },
        enumerable: true,
        configurable: true
    });
}
exports.createDecoratorDescriptor = createDecoratorDescriptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWV3b3JrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC91dGlscy9mcmFtZXdvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBMkM7QUFDM0Msa0RBQWlFO0FBQ2pFLGdEQUE4RDtBQUM5RCw4Q0FBMkQ7QUFFM0Qsa0RBQStHO0FBa0IvRyxTQUFnQix5QkFBeUIsQ0FBQyxNQUFXLEVBQUUsR0FBVyxFQUFFLFNBQXdCO0lBRXhGLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7UUFBRSx5QkFBYyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxLQUFLLEVBQVUsQ0FBQyxDQUFDO0lBQ3BHLE1BQU0sR0FBRyxHQUFHLHNCQUFXLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBYSxDQUFDO0lBQ3ZELEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUxELDhEQUtDO0FBYUQsU0FBZ0IsTUFBTSxDQUFxRCxRQUFXLEVBQUUsR0FBTSxFQUFFLEtBQWEsRUFBRTtJQUMzRyxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsSUFBSSxFQUFFO1FBQUUsU0FBUyxHQUFHLEdBQUcsRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ25DLElBQUksQ0FBQyxzQkFBVyxDQUFDLFFBQVEsRUFBRSxxQkFBcUIsQ0FBQyxFQUFFO1FBQy9DLE1BQU0sZUFBZSxHQUFHLHNCQUFXLENBQUMsUUFBUSxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDbEQ7SUFDRCxNQUFNLEtBQUssR0FBRyw4QkFBbUIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdkQsSUFB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

/***/ }),

/***/ "./source/app/utils/metadata.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function defineMetadata(target, key, val) {
    Reflect.defineMetadata(key, val, target);
}
exports.defineMetadata = defineMetadata;
function getMetadata(target, key) {
    return Reflect.getMetadata(key, target);
}
exports.getMetadata = getMetadata;
function defineWildcardMetadata(target, key, value) {
    Reflect.defineMetadata(key, value, target);
}
exports.defineWildcardMetadata = defineWildcardMetadata;
function getWildcardMetadata(target, key) {
    return Reflect.getMetadata(key, target);
}
exports.getWildcardMetadata = getWildcardMetadata;
function getDesignType(target, key) {
    return Reflect.getMetadata("design:type", target, key);
}
exports.getDesignType = getDesignType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL3V0aWxzL21ldGFkYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBaUlBLFNBQWdCLGNBQWMsQ0FBNEMsTUFBUyxFQUFFLEdBQU0sRUFBRSxHQUFrQjtJQUMzRyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUZELHdDQUVDO0FBV0QsU0FBZ0IsV0FBVyxDQUE0QyxNQUFTLEVBQUUsR0FBTTtJQUNwRixPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFGRCxrQ0FFQztBQVVELFNBQWdCLHNCQUFzQixDQUFDLE1BQWMsRUFBRSxHQUFjLEVBQUUsS0FBVTtJQUM3RSxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUZELHdEQUVDO0FBVUQsU0FBZ0IsbUJBQW1CLENBQUMsTUFBYyxFQUFFLEdBQWM7SUFDOUQsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRkQsa0RBRUM7QUFVRCxTQUFnQixhQUFhLENBQUMsTUFBYyxFQUFFLEdBQVc7SUFDckQsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDM0QsQ0FBQztBQUZELHNDQUVDIn0=

/***/ }),

/***/ "./source/app/utils/util.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");
const environment_1 = __webpack_require__("./source/app/utils/environment.ts");
const on_change_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/on-change/index.js"));
function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.ucFirst = ucFirst;
function camelCase2kebabCase(str) {
    str = str.charAt(0).toLowerCase() + str.slice(1);
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}
exports.camelCase2kebabCase = camelCase2kebabCase;
function pascalCase2kebabCase(str) {
    str = ucFirst(str);
    return camelCase2kebabCase(str);
}
exports.pascalCase2kebabCase = pascalCase2kebabCase;
function removeElementFromArray(array, element) {
    const index = array.indexOf(element);
    if (index >= 0)
        array.splice(index, 1);
}
exports.removeElementFromArray = removeElementFromArray;
function getPrototypeNamesRecursive(object, prototypes = []) {
    const prototype = Object.getPrototypeOf(object);
    if (prototype) {
        prototypes.push(prototype.constructor.name);
        getPrototypeNamesRecursive(prototype, prototypes);
    }
    return prototypes;
}
exports.getPrototypeNamesRecursive = getPrototypeNamesRecursive;
function includesMemberOfList(search, list, extension = '') {
    for (const member of list) {
        if (search.includes(`${member}${extension}`)) {
            return true;
        }
    }
    return false;
}
exports.includesMemberOfList = includesMemberOfList;
function constructTypeOfHTMLAttribute(object, key) {
    if (!environment_1.isBrowser())
        return;
    const type = metadata_1.getDesignType(object, key);
    const attrValue = object.getAttribute(key);
    let valueToSet = attrValue;
    if (attrValue && type && type.name !== undefined) {
        if (["Number", "Boolean", "Object", "Array"].includes(type.name)) {
            valueToSet = JSON.parse(attrValue.replace(/'/g, '"'));
        }
        if (type.name === "BaseConstructor") {
            const obj = JSON.parse(attrValue);
            const className = obj.className;
            if (!className)
                throw new Error("ClassName is missing in component attribute value");
            delete obj.className;
            valueToSet = new (type.name)(obj);
        }
    }
    if (valueToSet && type && valueToSet.constructor.name !== type.name)
        throw new Error("attribute type equals not defined type");
    return valueToSet;
}
exports.constructTypeOfHTMLAttribute = constructTypeOfHTMLAttribute;
function isPrimitive(value) {
    return (value !== Object(value));
}
exports.isPrimitive = isPrimitive;
function isProxy(value) {
    if (value === undefined || value === null)
        return false;
    if (on_change_1.default.target(value) === value)
        return false;
    return true;
}
exports.isProxy = isProxy;
function getProxyTarget(value) {
    if (isProxy(value))
        return on_change_1.default.target(value);
    return value;
}
exports.getProxyTarget = getProxyTarget;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvdXRpbHMvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrREFBb0Q7QUFDcEQsd0RBQW1EO0FBQ25ELGtFQUFpQztBQVNqQyxTQUFnQixPQUFPLENBQUMsR0FBVztJQUMvQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBRkQsMEJBRUM7QUFTRCxTQUFnQixtQkFBbUIsQ0FBQyxHQUFXO0lBQzNDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLDhCQUE4QixFQUFFLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzlFLENBQUM7QUFIRCxrREFHQztBQVNELFNBQWdCLG9CQUFvQixDQUFDLEdBQVc7SUFDNUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQixPQUFPLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFIRCxvREFHQztBQVNELFNBQWdCLHNCQUFzQixDQUFDLEtBQVksRUFBRSxPQUFZO0lBQzdELE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsSUFBSSxLQUFLLElBQUksQ0FBQztRQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFIRCx3REFHQztBQVNELFNBQWdCLDBCQUEwQixDQUFDLE1BQVcsRUFBRSxhQUF1QixFQUFFO0lBQzdFLE1BQU0sU0FB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

/***/ }),

/***/ "./var/tmp/virtualEntryPoint.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

window.virtualRoutes = ["Config", "GameLobby", "Home"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbEVudHJ5UG9pbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi92YXIvdG1wL3ZpcnR1YWxFbnRyeVBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBTSxNQUFPLENBQUMsYUFBYSxHQUFHLENBQUMsUUFBUSxFQUFDLFdBQVcsRUFBQyxNQUFNLENBQUMsQ0FBQyJ9

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js");
__webpack_require__("./var/tmp/virtualEntryPoint.ts");
__webpack_require__("./source/app/utils/decorators.ts");
__webpack_require__("./source/app/utils/environment.ts");
__webpack_require__("./source/app/utils/framework.ts");
__webpack_require__("./source/app/utils/metadata.ts");
__webpack_require__("./source/app/utils/util.ts");
__webpack_require__("./source/app/routes/BDOConfig.ts");
__webpack_require__("./source/app/routes/BDOGameLobby.ts");
__webpack_require__("./source/app/routes/BDOHome.ts");
__webpack_require__("./source/app/models/BDOTest.ts");
__webpack_require__("./source/app/models/BDOTest1.ts");
__webpack_require__("./source/app/models/Cell.ts");
__webpack_require__("./source/app/models/Chunk.ts");
__webpack_require__("./source/app/lib/Attribute.ts");
__webpack_require__("./source/app/lib/BDOConfigManager.ts");
__webpack_require__("./source/app/lib/BDOLogger.ts");
__webpack_require__("./source/app/lib/BDOMapCache.ts");
__webpack_require__("./source/app/lib/BDOModel.ts");
__webpack_require__("./source/app/lib/BDORoute.ts");
__webpack_require__("./source/app/lib/Binding.ts");
__webpack_require__("./source/app/lib/Errors.ts");
__webpack_require__("./source/app/lib/Field.ts");
__webpack_require__("./source/app/lib/Modification.ts");
__webpack_require__("./source/app/lib/Property.ts");
__webpack_require__("./source/app/lib/Watched.ts");
__webpack_require__("./source/app/client/ts/utils/util.ts");
__webpack_require__("./source/app/client/ts/routes/Config.ts");
__webpack_require__("./source/app/client/ts/routes/GameLobby.ts");
__webpack_require__("./source/app/client/ts/routes/Home.ts");
__webpack_require__("./source/app/client/ts/models/Test.ts");
__webpack_require__("./source/app/client/ts/models/Test1.ts");
__webpack_require__("./source/app/client/ts/lib/BaseComponent.ts");
__webpack_require__("./source/app/client/ts/lib/BaseController.ts");
__webpack_require__("./source/app/client/ts/lib/ClientModel.ts");
__webpack_require__("./source/app/client/ts/lib/ClientRoute.ts");
__webpack_require__("./source/app/client/ts/lib/ConfigManager.ts");
__webpack_require__("./source/app/client/ts/lib/Logger.ts");
__webpack_require__("./source/app/client/ts/components/GameWindow.ts");
__webpack_require__("./source/app/client/ts/components/TestComponent.ts");
__webpack_require__("./source/app/client/ts/components/ViewLink.ts");
module.exports = __webpack_require__("./source/app/client/ts/components/ViewRouter.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvR2FtZVdpbmRvdy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1Rlc3RDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvY29tcG9uZW50cy9WaWV3TGluay50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1ZpZXdSb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9DbGllbnRNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQ2xpZW50Um91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0NvbmZpZ01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdDEudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzIHN5bmMgXlxcLlxcLy4qXFwudHMkIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9Db25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0dhbWVMb2JieS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvSG9tZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy91dGlscy91dGlsLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0F0dHJpYnV0ZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Db25maWdNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0JET0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9NYXBDYWNoZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Nb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Sb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CaW5kaW5nLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0Vycm9ycy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9GaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9Nb2RpZmljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvUHJvcGVydHkudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvV2F0Y2hlZC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL21vZGVscy9CRE9UZXN0LnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbW9kZWxzL0JET1Rlc3QxLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbW9kZWxzL0NlbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9tb2RlbHMvQ2h1bmsudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9yb3V0ZXMvQkRPQ29uZmlnLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvcm91dGVzL0JET0dhbWVMb2JieS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3JvdXRlcy9CRE9Ib21lLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvdXRpbHMgc3luYyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3V0aWxzL2RlY29yYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscy9lbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3V0aWxzL2ZyYW1ld29yay50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3V0aWxzL21ldGFkYXRhLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvdXRpbHMvdXRpbC50cyIsIndlYnBhY2s6Ly8vLi92YXIvdG1wL3ZpcnR1YWxFbnRyeVBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7OztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFOzs7Ozs7OztBQ25SYTtBQUNiO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFP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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1sSDs7Ozs7Ozs7QUN0RjlCO0FBQ2I7QUFDQSwyQ0FBMkMsMlEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvclwiLFwidGVtcGxhdGVzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYWYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXItZHouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXItbHlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItbWEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYm1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vYnMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vZGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZGUtYXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZW4tU0dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1TRy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hLCBfYjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5cInVzZSBzdHJpY3RcIjtcbmNvbnN0IEJhc2VDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9CYXNlQ29tcG9uZW50XCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMiA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBCQUJZTE9OID0gdHNsaWJfMS5fX2ltcG9ydFN0YXIocmVxdWlyZShcImJhYnlsb25qc1wiKSk7XG5sZXQgR2FtZVdpbmRvdyA9IGNsYXNzIEdhbWVXaW5kb3cgZXh0ZW5kcyBCYXNlQ29tcG9uZW50XzEuQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBuZXcgQkFCWUxPTi5FbmdpbmUodGhpcywgdHJ1ZSwge1xuICAgICAgICAgICAgYXVkaW9FbmdpbmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2NlbmUgPSB0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IGAxMDAlYDtcbiAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IGAxMDAlYDtcbiAgICAgICAgdGhpcy5lbmdpbmUucnVuUmVuZGVyTG9vcCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbmdpbmUucmVzaXplKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNyZWF0ZVNjZW5lKCkge1xuICAgICAgICBjb25zdCBzY2VuZSA9IG5ldyBCQUJZTE9OLlNjZW5lKHRoaXMuZW5naW5lKTtcbiAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IEJBQllMT04uRnJlZUNhbWVyYSgnY2FtZXJhJywgbmV3IEJBQllMT04uVmVjdG9yMygwLCA1LCAtMTApLCBzY2VuZSk7XG4gICAgICAgIGNhbWVyYS5zZXRUYXJnZXQoQkFCWUxPTi5WZWN0b3IzLlplcm8oKSk7XG4gICAgICAgIGNhbWVyYS5hdHRhY2hDb250cm9sKHRoaXMsIGZhbHNlKTtcbiAgICAgICAgY29uc3QgbGlnaHQgPSBuZXcgQkFCWUxPTi5IZW1pc3BoZXJpY0xpZ2h0KCdsaWdodDEnLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDEsIDApLCBzY2VuZSk7XG4gICAgICAgIGxpZ2h0LnNoYWRvd0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBzcGhlcmUgPSBCQUJZTE9OLk1lc2hCdWlsZGVyLkNyZWF0ZVNwaGVyZSgnc3BoZXJlJywgeyBzZWdtZW50czogMTYsIGRpYW1ldGVyOiAyIH0sIHNjZW5lKTtcbiAgICAgICAgc3BoZXJlLnBvc2l0aW9uLnkgPSAxO1xuICAgICAgICBCQUJZTE9OLk1lc2hCdWlsZGVyLkNyZWF0ZUdyb3VuZCgnZ3JvdW5kMScsIHsgaGVpZ2h0OiA2LCB3aWR0aDogNiwgc3ViZGl2aXNpb25zOiAyIH0sIHNjZW5lKTtcbiAgICAgICAgcmV0dXJuIHNjZW5lO1xuICAgIH1cbiAgICBjcmVhdGVUZXJyYWluKCkgeyB9XG59O1xuR2FtZVdpbmRvdy5leHRlbmRzID0gXCJjYW52YXNcIjtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18yLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdHlwZW9mIChfYSA9IHR5cGVvZiBCQUJZTE9OICE9PSBcInVuZGVmaW5lZFwiICYmIEJBQllMT04uRW5naW5lKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3QpXG5dLCBHYW1lV2luZG93LnByb3RvdHlwZSwgXCJlbmdpbmVcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18yLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdHlwZW9mIChfYiA9IHR5cGVvZiBCQUJZTE9OICE9PSBcInVuZGVmaW5lZFwiICYmIEJBQllMT04uU2NlbmUpID09PSBcImZ1bmN0aW9uXCIgPyBfYiA6IE9iamVjdClcbl0sIEdhbWVXaW5kb3cucHJvdG90eXBlLCBcInNjZW5lXCIsIHZvaWQgMCk7XG5HYW1lV2luZG93ID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKClcbl0sIEdhbWVXaW5kb3cpO1xuZXhwb3J0cy5kZWZhdWx0ID0gR2FtZVdpbmRvdztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVIyRnRaVmRwYm1SdmR5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMMk52YlhCdmJtVnVkSE12UjJGdFpWZHBibVJ2ZHk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxEWkVRVUZwUlR0QlFVTnFSU3h6UkVGQmQwUTdRVUZEZUVRc2MwUkJRV2xFTzBGQlEycEVMREpFUVVGeFF6dEJRVlZ5UXl4SlFVRnhRaXhWUVVGVkxFZEJRUzlDTEUxQlFYRkNMRlZCUVZjc1UwRkJVU3h2UTBGQmIwSXNRMEZCUXl4cFFrRkJhVUlzUTBGQlF6dEpRVVF2UlRzN1VVRnRRakJDTEZkQlFVMHNSMEZCYlVJc1NVRkJTU3hQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVN1dVRkRNVVVzVjBGQlZ5eEZRVUZGTEVsQlFVazdVMEZEY0VJc1EwRkJReXhEUVVGRE8xRkJVMjFDTEZWQlFVc3NSMEZCYTBJc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzBsQmVVUndSU3hEUVVGRE8wbEJiRVJWTEdsQ1FVRnBRanRSUVVOd1FpeExRVUZMTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzUTBGQlF6dFJRVU14UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZETTBJc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUXpGQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWRCUVVjc1JVRkJSVHRaUVVNelFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8xRkJRM2hDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTBnc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0UlFVTnlRaXhOUVVGTkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzUlVGQlJUdFpRVU51UXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTTdXVUZETDBJc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUTNKRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXp0SlFWTlRMRmRCUVZjN1VVRkZha0lzVFVGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVVTNReXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEU5QlFVOHNRMEZCUXl4VlFVRlZMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkZka1lzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZGZWtNc1RVRkJUU3hEUVVGRExHRkJRV0VzUTBGQlF5eEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkZiRU1zVFVGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFGQlF6RkdMRXRCUVVzc1EwRkJReXhoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETzFGQlJUTkNMRTFCUVUwc1RVRkJUU3hIUVVGSExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxGRkJRVkVzUlVGQlJTeEZRVUZGTEVWQlFVVXNVVUZCVVN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFGQlJXaEhMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVjBRaXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRVZCUVVVc1dVRkJXU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUlRkR0xFOUJRVThzUzBGQlN5eERRVUZETzBsQlEycENMRU5CUVVNN1NVRlJVeXhoUVVGaExFdEJRVXNzUTBGQlF6dERRVU5vUXl4RFFVRkJPMEZCTjBVd1FpeHJRa0ZCVHl4SFFVRlhMRkZCUVZFc1EwRkJRenRCUVZOMFF6dEpRVUZZTEhGQ1FVRlJMRVZCUVVVN01FUkJRVzFDTEU5QlFVOHNiMEpCUVZBc1QwRkJUeXhEUVVGRExFMUJRVTA3TUVOQlJYcERPMEZCVTFNN1NVRkJXQ3h4UWtGQlVTeEZRVUZGT3pCRVFVRnJRaXhQUVVGUExHOUNRVUZRTEU5QlFVOHNRMEZCUXl4TFFVRkxPM2xEUVVGelFqdEJRVGRDTDBNc1ZVRkJWVHRKUVVRNVFpdzBRa0ZCWlN4RlFVRkZPMGRCUTBjc1ZVRkJWU3hEUVhOR09VSTdhMEpCZEVadlFpeFZRVUZWSW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJhc2VDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9CYXNlQ29tcG9uZW50XCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMiA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5sZXQgVGVzdENvbXBvbmVudCA9IGNsYXNzIFRlc3RDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50XzEuQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVN0cmluZyA9IHJlcXVpcmUoJ35zdGF0aWMvdmlld3MvdGVzdENvbXBvbmVudC5uamsnKTtcbiAgICB9XG59O1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzIucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG5dLCBUZXN0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJ0ZW1wbGF0ZVN0cmluZ1wiLCB2b2lkIDApO1xuVGVzdENvbXBvbmVudCA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpXG5dLCBUZXN0Q29tcG9uZW50KTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRlc3RDb21wb25lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWR1Z6ZEVOdmJYQnZibVZ1ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyTnZiWEJ2Ym1WdWRITXZWR1Z6ZEVOdmJYQnZibVZ1ZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN3MlJFRkJhVVU3UVVGRGFrVXNjMFJCUVhkRU8wRkJRM2hFTEhORVFVRnBSRHRCUVZWcVJDeEpRVUZ4UWl4aFFVRmhMRWRCUVd4RExFMUJRWEZDTEdGQlFXTXNVMEZCVVN4dlEwRkJiMElzUTBGQlF5eFhRVUZYTEVOQlFVTTdTVUZFTlVVN08xRkJVekJDTEcxQ1FVRmpMRWRCUVVjc1QwRkJUeXhEUVVGRExHbERRVUZwUXl4RFFVRkRMRU5CUVVNN1NVRkZkRVlzUTBGQlF6dERRVUZCTEVOQlFVRTdRVUZHWlR0SlFVRllMSEZDUVVGUkxFVkJRVVU3TzNGRVFVRjFSVHRCUVZKcVJTeGhRVUZoTzBsQlJHcERMRFJDUVVGbExFVkJRVVU3UjBGRFJ5eGhRVUZoTEVOQlZXcERPMnRDUVZadlFpeGhRVUZoSW4wPSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJhc2VDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9CYXNlQ29tcG9uZW50XCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IFRlc3QxXzEgPSByZXF1aXJlKFwifmNsaWVudC9tb2RlbHMvVGVzdDFcIik7XG5jb25zdCB0ZXN0TW9kZWwgPSBuZXcgVGVzdDFfMS5UZXN0MSh7IHRpdGxlOiBTdHJpbmcoRGF0ZS5ub3coKSkgfSk7XG5sZXQgVmlld0xpbmsgPSBjbGFzcyBWaWV3TGluayBleHRlbmRzIEJhc2VDb21wb25lbnRfMS5CYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgIGNvbnN0cnVjdG9yKF9wYXJhbXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tb2RlbCA9IHRlc3RNb2RlbDtcbiAgICAgICAgdGhpcy50ZXN0ID0gdGhpcy5tb2RlbC5iaW5kKFwidGl0bGVcIik7XG4gICAgICAgIHRoaXMudGVzdGVyID0gdGhpcy5tb2RlbC5iaW5kKFwidGVzdGVyXCIpO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3RlZENhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25MaW5rQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uVGVzdFR5cGVDaGVjayh2YWx1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNraW5nIHR5cGUgb2YgdGVzdCB3aXRoIHZhbHVlXCIsIHZhbHVlKTtcbiAgICB9XG4gICAgb25UZXN0VHlwZUNoZWNrU3VjY2VzcygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUeXBlY2hlY2sgb2YgdGVzdCBzdWNjZXNzZnVsXCIpO1xuICAgIH1cbiAgICBvblRlc3RUeXBlQ2hlY2tGYWlsKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHlwZWNoZWNrIG9mIHRlc3QgZmFpbGVkXCIsIGVycm9yKTtcbiAgICB9XG4gICAgb25UZXN0Q2hhbmdlKGNoYW5nZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0IGNoYW5nZWRcIiwgY2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuICAgIG9uVGVzdGVySW5pdChpbml0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIGluaXRcIiwgaW5pdCwgdGhpcyk7XG4gICAgfVxuICAgIG9uVGVzdGVyQ2hhbmdlKGNoYW5nZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgY2hhbmdlZFwiLCBjaGFuZ2VkLCB0aGlzKTtcbiAgICB9XG4gICAgb25UZXN0ZXJBZGQoYWRkZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgYWRkZWRcIiwgYWRkZWQsIHRoaXMpO1xuICAgIH1cbiAgICBvblRlc3RlclJlbW92ZShyZW1vdmVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIHJlbW92ZWRcIiwgcmVtb3ZlZCwgdGhpcyk7XG4gICAgfVxuICAgIG9uTGlua0NsaWNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvdy5yb3V0ZXIubmF2aWdhdGUodGhpcy5ocmVmLCB0cnVlKTtcbiAgICB9XG59O1xuVmlld0xpbmsuZXh0ZW5kcyA9ICdhJztcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuXSwgVmlld0xpbmsucHJvdG90eXBlLCBcIm1vZGVsXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBWaWV3TGluay5wcm90b3R5cGUsIFwidGVzdFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEud2F0Y2hlZCgpLCBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSlcbl0sIFZpZXdMaW5rLnByb3RvdHlwZSwgXCJ0ZXN0ZXJcIiwgdm9pZCAwKTtcblZpZXdMaW5rID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgQ29uc3RQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIgJiYgQ29uc3RQYXJhbXMpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdF0pXG5dLCBWaWV3TGluayk7XG5leHBvcnRzLmRlZmF1bHQgPSBWaWV3TGluaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZtbGxkMHhwYm1zdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyTnNhV1Z1ZEM5MGN5OWpiMjF3YjI1bGJuUnpMMVpwWlhkTWFXNXJMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRU3cyUkVGQmFVVTdRVUZEYWtVc2MwUkJRWE5HTzBGQlEzUkdMR2RFUVVFMlF6dEJRVVUzUXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhKUVVGSkxHRkJRVXNzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMEZCVXpORUxFbEJRWEZDTEZGQlFWRXNSMEZCTjBJc1RVRkJjVUlzVVVGQlV5eFRRVUZSTEc5RFFVRnZRaXhEUVVGRExHbENRVUZwUWl4RFFVRkRPMGxCYVVONlJTeFpRVUZaTEU5QlFTdENPMUZCUTNaRExFdEJRVXNzUlVGQlJTeERRVUZETzFGQmJrSlBMRlZCUVVzc1IwRkJSeXhUUVVGVExFTkJRVU03VVVGUmFrSXNVMEZCU1N4SFFVRlhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCVVRsQ0xGZEJRVTBzUjBGQllTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEpRVWt6UlN4RFFVRkRPMGxCVDAwc2JVSkJRVzFDTzFGQlEzUkNMRXRCUVVzc1EwRkJReXh0UWtGQmJVSXNSVUZCUlN4RFFVRkRPMUZCUXpWQ0xFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5vUlN4RFFVRkRPMGxCVTFNc1pVRkJaU3hEUVVGRExFdEJRVzFDTzFGQlEzcERMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zYTBOQlFXdERMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRE0wUXNRMEZCUXp0SlFWRlRMSE5DUVVGelFqdFJRVU0xUWl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExEaENRVUU0UWl4RFFVRkRMRU5CUVVNN1NVRkRhRVFzUTBGQlF6dEpRVkZUTEcxQ1FVRnRRaXhEUVVGRExFdEJRVms3VVVGRGRFTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXd3UWtGQk1FSXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOdVJDeERRVUZETzBsQlUxTXNXVUZCV1N4RFFVRkRMRTlCUVhWQ08xRkJRekZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1kwRkJZeXhGUVVGRkxFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTXZReXhEUVVGRE8wbEJVMU1zV1VGQldTeERRVUZETEVsQlFXOUNPMUZCUTNaRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNZVUZCWVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU16UXl4RFFVRkRPMGxCVTFNc1kwRkJZeXhEUVVGRExFOUJRWFZDTzFGQlF6VkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEycEVMRU5CUVVNN1NVRlRVeXhYUVVGWExFTkJRVU1zUzBGQmNVSTdVVUZEZGtNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eGpRVUZqTEVWQlFVVXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRemRETEVOQlFVTTdTVUZUVXl4alFVRmpMRU5CUVVNc1QwRkJkVUk3VVVGRE5VTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhuUWtGQlowSXNSVUZCUlN4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRGFrUXNRMEZCUXp0SlFWTlBMRmRCUVZjc1EwRkJReXhMUVVGWk8xRkJRelZDTEV0QlFVc3NRMEZCUXl4alFVRmpMRVZCUVVVc1EwRkJRenRSUVVOMlFpeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUXpWRExFTkJRVU03UTBGRFNpeERRVUZCTzBGQmVFa3dRaXhuUWtGQlR5eEhRVUZYTEVkQlFVY3NRMEZCUXp0QlFVOXFRenRKUVVGWUxIRkNRVUZSTEVWQlFVVTdPM1ZEUVVFd1FqdEJRVkY0UWp0SlFVRmFMSE5DUVVGVExFVkJRVVU3TzNORFFVRm5SRHRCUVZGeVF6dEpRVUYwUWl4dlFrRkJUeXhGUVVGRkxFVkJRVVVzY1VKQlFWRXNSVUZCUlRzN2QwTkJRWEZFTzBGQkwwSXhSQ3hSUVVGUk8wbEJSRFZDTERSQ1FVRmxMRVZCUVVVN2FVVkJhME5STEZkQlFWY3NiMEpCUVZnc1YwRkJWenRIUVdwRGFFSXNVVUZCVVN4RFFXZEtOVUk3YTBKQmFFcHZRaXhSUVVGUkluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBCYXNlQ29tcG9uZW50XzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQmFzZUNvbXBvbmVudFwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgZGVjb3JhdG9yc18yID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IG5hdmlnb18xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm5hdmlnb1wiKSk7XG5sZXQgVmlld1JvdXRlciA9IGNsYXNzIFZpZXdSb3V0ZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50XzEuQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSBuZXcgbmF2aWdvXzEuZGVmYXVsdCgpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5yb3V0ZUNvbGxlY3Rpb24oKTtcbiAgICAgICAgd2luZG93LnJvdXRlciA9IHRoaXMucm91dGVyO1xuICAgIH1cbiAgICByb3V0ZUNvbGxlY3Rpb24oKSB7XG4gICAgICAgIGZvciAoY29uc3Qgcm91dGUgb2Ygd2luZG93LnZpcnR1YWxSb3V0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG15Um91dGUgPSByZXF1aXJlKGAuLy4uL3JvdXRlcy8ke3JvdXRlfS50c2ApLmRlZmF1bHQ7XG4gICAgICAgICAgICB0aGlzLnNpbmdlUm91dGVDb2xsZWN0aW9uKG15Um91dGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNpbmdlUm91dGVDb2xsZWN0aW9uKFJvdXRlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXV0aWxfMS5pbmNsdWRlc01lbWJlck9mTGlzdChSb3V0ZS5hdHRhY2hUb1NlcnZlcnMsIFtnbG9iYWwucHJvY2Vzcy5lbnYubmFtZSwgJyonXSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgUm91dGVDbGFzcyA9IG5ldyBSb3V0ZSgpO1xuICAgICAgICAgICAgaWYgKCFSb3V0ZUNsYXNzLmlzQ2xpZW50Um91dGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Um91dGVDbGFzcy5jb25zdHJ1Y3Rvci5uYW1lfSBpcyBub3QgaW5zdGFuY2Ugb2YgfmNsaWVudC9saWIvQmFzZVJvdXRlYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5vbihSb3V0ZUNsYXNzLnJvdXRlcik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbn07XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMi5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbl0sIFZpZXdSb3V0ZXIucHJvdG90eXBlLCBcInJvdXRlclwiLCB2b2lkIDApO1xuVmlld1JvdXRlciA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpXG5dLCBWaWV3Um91dGVyKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFZpZXdSb3V0ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWbWxsZDFKdmRYUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDJOdmJYQnZibVZ1ZEhNdlZtbGxkMUp2ZFhSbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTdzJSRUZCYVVVN1FVRkRha1VzTUVOQlFYVkVPMEZCUTNaRUxITkVRVUYzUkR0QlFVTjRSQ3h6UkVGQmFVUTdRVUZEYWtRc05FUkJRVFJDTzBGQlZUVkNMRWxCUVhGQ0xGVkJRVlVzUjBGQkwwSXNUVUZCY1VJc1ZVRkJWeXhUUVVGUkxHOURRVUZ2UWl4RFFVRkRMRmRCUVZjc1EwRkJRenRKUVVSNlJUczdVVUZWYVVNc1YwRkJUU3hIUVVGSExFbEJRVWtzWjBKQlFVMHNSVUZCUlN4RFFVRkRPMGxCSzBOMlJDeERRVUZETzBsQmRrTmhMR2xDUVVGcFFqdFJRVU4yUWl4TFFVRkxMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVXNRMEZCUXp0UlFVTXhRaXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVOQlFVTTdVVUZEZGtJc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUTJoRExFTkJRVU03U1VGUlR5eGxRVUZsTzFGQlEyNUNMRXRCUVVzc1RVRkJUU3hMUVVGTExFbEJRVWtzVFVGQlRTeERRVUZETEdGQlFXRXNSVUZCUlR0WlFVTjBReXhOUVVGTkxFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTXNaVUZCWlN4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF6dFpRVU16UkN4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1UwRkRkRU03U1VGRFRDeERRVUZETzBsQlZVOHNiMEpCUVc5Q0xFTkJRVU1zUzBGQlZUdFJRVU51UXl4SlFVRkpPMWxCUTBFc1NVRkJTU3hEUVVGRExESkNRVUZ2UWl4RFFVRlhMRXRCUVVzc1EwRkJReXhsUVVGbExFVkJRVVVzUTBGQlV5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUVVVc1QwRkJUenRaUVVNelJ5eE5RVUZOTEZWQlFWVXNSMEZCUnl4SlFVRkpMRXRCUVVzc1JVRkJSU3hEUVVGRE8xbEJReTlDTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1lVRkJZU3hGUVVGRk8yZENRVU16UWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMREpEUVVFeVF5eERRVUZETEVOQlFVTTdZVUZET1VZN1dVRkRSQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VTBGRGNrTTdVVUZCUXl4UFFVRlBMRXRCUVVzc1JVRkJSVHRaUVVOYUxFMUJRVTBzUzBGQlN5eERRVUZETzFOQlEyWTdTVUZEVEN4RFFVRkRPME5CUTBvc1EwRkJRVHRCUVM5RFpUdEpRVUZZTEhGQ1FVRlJMRVZCUVVVN096QkRRVUYzUXp0QlFWUnNReXhWUVVGVk8wbEJSRGxDTERSQ1FVRmxMRVZCUVVVN1IwRkRSeXhWUVVGVkxFTkJkMFE1UWp0clFrRjRSRzlDTEZWQlFWVWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xucmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7XG5jb25zdCBsb2Rhc2hfMSA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5jb25zdCBudW5qdWNrc18xID0gcmVxdWlyZShcIm51bmp1Y2tzXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L3V0aWxzL3V0aWxcIik7XG5jb25zdCB1dGlsXzIgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuZnVuY3Rpb24gQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTFR5cGVFbGVtZW50KSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBjbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgSFRNTFR5cGVFbGVtZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5nZW5lcmF0ZVVuaXF1ZUlEKCk7XG4gICAgICAgICAgICB0aGlzLmlzQmFzZUNvbXBvbmVudCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzLmNvbnN0cnVjdG9yKS5uYW1lO1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVN0cmluZyA9ICc8ZGl2PjxzbG90Pjwvc2xvdD48L2Rpdj4nO1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVBhcmFtcyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLCBcImRlZmluZWRQcm9wZXJ0aWVzXCIpO1xuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb3Agb2YgcHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5zZXQocHJvcCwgbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMsIHByb3ApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IGJpbmRpbmdzKCkge1xuICAgICAgICAgICAgY29uc3QgYmluZGluZ3MgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMsIFwiaW5pdGlhdG9yQmluZGluZ1wiKTtcbiAgICAgICAgICAgIHJldHVybiBiaW5kaW5ncyA/IGJpbmRpbmdzIDogbmV3IE1hcCgpO1xuICAgICAgICB9XG4gICAgICAgIGdldE5hbWVzcGFjZWRTdG9yYWdlKGtleSwgbnNQcm9wLCBmb3JjZU5TKSB7XG4gICAgICAgICAgICByZXR1cm4gdXRpbF8xLmdldE5hbWVzcGFjZWRTdG9yYWdlKHRoaXMsIGtleSwgbnNQcm9wLCBmb3JjZU5TKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZShrZXksIG5ld1ZhbCwgbnNQcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gdXRpbF8xLnNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKHRoaXMsIGtleSwgbmV3VmFsLCBuc1Byb3ApO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZShrZXksIG5zUHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHV0aWxfMS5kZWxldGVGcm9tTmFtZXNwYWNlZFN0b3JhZ2UodGhpcywga2V5LCBuc1Byb3ApO1xuICAgICAgICB9XG4gICAgICAgIHNldEF0dHJpYnV0ZShxdWFsaWZpZWROYW1lLCB2YWx1ZSwgc2V0VmFsdWUgPSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzICYmIHRoaXMucHJvcGVydGllcy5oYXMocXVhbGlmaWVkTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFwiJHtxdWFsaWZpZWROYW1lfVwiIGNhbid0IGJlIHNldCBhcyBhdHRyaWJ1dGUgYmVjYXVzZSBpdCBpcyBhIGRlZmluZWQgcHJvcGVydHlgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZVRvU2V0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKCF1dGlsXzIuaXNQcmltaXRpdmUodmFsdWUpKVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVRvU2V0ID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL1xcXCIvZywgXCInXCIpO1xuICAgICAgICAgICAgICAgIHN1cGVyLnNldEF0dHJpYnV0ZShxdWFsaWZpZWROYW1lLCB2YWx1ZVRvU2V0KTtcbiAgICAgICAgICAgICAgICB2YWx1ZVRvU2V0ID0gdXRpbF8yLmNvbnN0cnVjdFR5cGVPZkhUTUxBdHRyaWJ1dGUodGhpcywgcXVhbGlmaWVkTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNldFZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzW3F1YWxpZmllZE5hbWVdID0gdmFsdWVUb1NldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShxdWFsaWZpZWROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmVBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcGVydGllcyAmJiB0aGlzLnByb3BlcnRpZXMuaGFzKHF1YWxpZmllZE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBcIiR7cXVhbGlmaWVkTmFtZX1cIiBjYW4ndCBiZSByZW1vdmVkIGFzIGF0dHJpYnV0ZSBiZWNhdXNlIGl0IGlzIGEgZGVmaW5lZCBwcm9wZXJ0eWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3VwZXIucmVtb3ZlQXR0cmlidXRlKHF1YWxpZmllZE5hbWUpO1xuICAgICAgICAgICAgdGhpc1txdWFsaWZpZWROYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0b0pTT04oKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGRhdGFba2V5XSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3RydWN0ZWRDYWxsYmFjayguLi5fYXJncykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbnN0cnVjdG9yLmV4dGVuZHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RyaW5nVG9QYXJzZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKGxvZGFzaF8xLmlzU3RyaW5nKHRoaXMudGVtcGxhdGVTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ1RvUGFyc2UgPSBudW5qdWNrc18xLnJlbmRlclN0cmluZyh0aGlzLnRlbXBsYXRlU3RyaW5nLCB0aGlzLnRlbXBsYXRlUGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxvZGFzaF8xLmlzT2JqZWN0KHRoaXMudGVtcGxhdGVTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ1RvUGFyc2UgPSB0aGlzLnRlbXBsYXRlU3RyaW5nLnJlbmRlcih0aGlzLnRlbXBsYXRlUGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cmluZ1RvUGFyc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHN0cmluZ1RvUGFyc2UsICd0ZXh0L2h0bWwnKTtcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93Um9vdC5hcHBlbmRDaGlsZChkb2MuYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7IH1cbiAgICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7IH1cbiAgICAgICAgYWRvcHRlZENhbGxiYWNrKCkgeyB9XG4gICAgICAgIGFkZENvbnRyb2xsZXIoKSB7IH1cbiAgICAgICAgcmVtb3ZlQ29udHJvbGxlcigpIHsgfVxuICAgICAgICBnZW5lcmF0ZVVuaXF1ZUlEKCkge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMuY29uc3RydWN0b3IpLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBvY2N1cnJlbmNlID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0aGlzLnRhZ05hbWUpKS5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIGAke2NsYXNzTmFtZX1fJHtvY2N1cnJlbmNlfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQmFzZUNvbXBvbmVudC5pc0Jhc2VDb21wb25lbnQgPSB0cnVlO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIEJhc2VDb21wb25lbnQucHJvdG90eXBlLCBcImlkXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG4gICAgXSwgQmFzZUNvbXBvbmVudC5wcm90b3R5cGUsIFwiaXNCYXNlQ29tcG9uZW50XCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJjbGFzc05hbWVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoeyBkaXNhYmxlVHlwZUd1YXJkOiB0cnVlIH0pLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgQmFzZUNvbXBvbmVudC5wcm90b3R5cGUsIFwidGVtcGxhdGVTdHJpbmdcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdHlwZW9mIChfYiA9IHR5cGVvZiBJbmRleFN0cnVjdHVyZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJbmRleFN0cnVjdHVyZSkgPT09IFwiZnVuY3Rpb25cIiA/IF9iIDogT2JqZWN0KVxuICAgIF0sIEJhc2VDb21wb25lbnQucHJvdG90eXBlLCBcInRlbXBsYXRlUGFyYW1zXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIEJhc2VDb21wb25lbnQ7XG59XG5leHBvcnRzLkJhc2VDb21wb25lbnRGYWN0b3J5ID0gQmFzZUNvbXBvbmVudEZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRbUZ6WlVOdmJYQnZibVZ1ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyeHBZaTlDWVhObFEyOXRjRzl1Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxEUkNRVUV3UWp0QlFVTXhRaXh0UTBGQk5FTTdRVUZETlVNc2RVTkJRV3RFTzBGQlEyeEVMSE5FUVVFMFJEdEJRVU0xUkN4clJFRkJkVVU3UVVGSGRrVXNOa05CUVcxSU8wRkJRMjVJTERCRFFVRTBSVHRCUVZVMVJTeFRRVUZuUWl4dlFrRkJiMElzUTBGQmVVTXNaVUZCYzBJN08wbEJVUzlHTEUxQlFXVXNZVUZCWXl4VFFVRlJMR1ZCUVdVN1VVRnJSMmhFTEZsQlFWa3NSMEZCUnl4SlFVRlhPMWxCUTNSQ0xFdEJRVXNzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCZEVSRExFOUJRVVVzUjBGQlZ5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzUTBGQlF6dFpRVkUzUWl4dlFrRkJaU3hIUVVGWkxFbEJRVWtzUTBGQlF6dFpRVk5vUXl4alFVRlRMRWRCUVZjc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRE8xbEJWWEJETEcxQ1FVRmpMRWRCUVhOQ0xEQkNRVUV3UWl4RFFVRkRPMWxCVjJ4SExHMUNRVUZqTEVkQlFXMUNMRVZCUVVVc1EwRkJRenRSUVdsQ01VUXNRMEZCUXp0UlFYaEZSQ3hKUVVGWExGVkJRVlU3V1VGRGFrSXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU40UWl4TlFVRk5MRlZCUVZVc1IwRkJSeXh6UWtGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlN4dFFrRkJiVUlzUTBGQmNVTXNRMEZCUXp0WlFVTTVSaXhKUVVGSkxGVkJRVlVzUlVGQlJUdG5Ra0ZEV2l4TFFVRkxMRTFCUVUwc1NVRkJTU3hKUVVGSkxGVkJRVlVzUlVGQlJUdHZRa0ZETTBJc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNPRUpCUVcxQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN2FVSkJRM0JFTzJGQlEwbzdXVUZEUkN4UFFVRlBMRXRCUVVzc1EwRkJRenRSUVVOcVFpeERRVUZETzFGQmQwUkVMRWxCUVdNc1VVRkJVVHRaUVVOc1FpeE5RVUZOTEZGQlFWRXNSMEZCUnl4elFrRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeHJRa0ZCYTBJc1EwRkJReXhEUVVGRE8xbEJRM1pFTEU5QlFVOHNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRNME1zUTBGQlF6dFJRV1ZOTEc5Q1FVRnZRaXhEUVVGRExFZEJRVmNzUlVGQlJTeE5RVUZsTEVWQlFVVXNUMEZCWjBJN1dVRkRkRVVzVDBGQlR5d3lRa0ZCYjBJc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEUxQlFVMHNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVNMVJDeERRVUZETzFGQlYwMHNNRUpCUVRCQ0xFTkJRVU1zUjBGQlZ5eEZRVUZGTEUxQlFWY3NSVUZCUlN4TlFVRmxPMWxCUTNaRkxFOUJRVThzYVVOQlFUQkNMRU5CUVVNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUlVGQlJTeE5RVUZOTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRha1VzUTBGQlF6dFJRVlZOTERKQ1FVRXlRaXhEUVVGRExFZEJRVmNzUlVGQlJTeE5RVUZsTzFsQlF6TkVMRTlCUVU4c2EwTkJRVEpDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU14UkN4RFFVRkRPMUZCVjAwc1dVRkJXU3hEUVVGRExHRkJRWEZDTEVWQlFVVXNTMEZCWVN4RlFVRkZMRmRCUVc5Q0xFbEJRVWs3V1VGRE9VVXNTVUZCU1N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMR0ZCUVdFc1EwRkJReXhGUVVGRk8yZENRVU4yUkN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzWVVGQllTdzRSRUZCT0VRc1EwRkJReXhEUVVGRE8yRkJRM0JITzFsQlEwUXNTVUZCU1N4TFFVRkxMRVZCUVVVN1owSkJRMUFzU1VGQlNTeFZRVUZWTEVkQlFVY3NTMEZCU3l4RFFVRkRPMmRDUVVOMlFpeEpRVUZKTEVOQlFVTXNhMEpCUVZjc1EwRkJReXhMUVVGTExFTkJRVU03YjBKQlFVVXNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZEYUVZc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eGhRVUZoTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1owSkJRemxETEZWQlFWVXNSMEZCUnl4dFEwRkJORUlzUTBGQlF5eEpRVUZKTEVWQlFVVXNZVUZCWVN4RFFVRkRMRU5CUVVNN1owSkJReTlFTEVsQlFVa3NVVUZCVVR0dlFrRkJVU3hKUVVGTExFTkJRVU1zWVVGQllTeERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRPMkZCUTNwRU96dG5Ra0ZCVFN4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzFGQlF5OURMRU5CUVVNN1VVRlJUU3hsUVVGbExFTkJRVU1zWVVGQmNVSTdXVUZEZUVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVlVGQlZTeEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExHRkJRV0VzUTBGQlF5eEZRVUZGTzJkQ1FVTjJSQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEVsQlFVa3NZVUZCWVN4clJVRkJhMFVzUTBGQlF5eERRVUZETzJGQlEzaEhPMWxCUTBRc1MwRkJTeXhEUVVGRExHVkJRV1VzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXp0WlFVTXZRaXhKUVVGTExFTkJRVU1zWVVGQllTeERRVUZETEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUXpORExFTkJRVU03VVVGVlRTeE5RVUZOTzFsQlExUXNUVUZCVFN4SlFVRkpMRWRCUVcxQ0xFVkJRVVVzUTBGQlF6dFpRVU5vUXl4TFFVRkxMRTFCUVUwc1IwRkJSeXhKUVVGSkxFbEJRVWtzUlVGQlJUdG5Ra0ZEY0VJc1NVRkJTU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NVMEZCVXl4RlFVRkZPMjlDUVVONlFpeE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03YjBKQlF6RkNMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTTdhVUpCUTNaQ08yRkJRMG83V1VGRFJDeFBRVUZQTEVsQlFVa3NRMEZCUXp0UlFVTm9RaXhEUVVGRE8xRkJWMU1zYlVKQlFXMUNMRU5CUVVNc1IwRkJSeXhMUVVGWk8xbEJSWHBETEVsQlFVa3NRMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJXU3hEUVVGRExFOUJRVThzUlVGQlJUdG5Ra0ZGYkVNc1NVRkJTU3hoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETzJkQ1FVTjZRaXhKUVVGSkxHbENRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhGUVVGRk8yOUNRVU12UWl4aFFVRmhMRWRCUVVjc2RVSkJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RlFVRkZMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF6dHBRa0ZETVVVN1owSkJRMFFzU1VGQlNTeHBRa0ZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUlVGQlJUdHZRa0ZETDBJc1lVRkJZU3hIUVVGakxFbEJRVWtzUTBGQlF5eGpRVUZsTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF6dHBRa0ZETDBVN1owSkJRMFFzU1VGQlNTeGhRVUZoTEVWQlFVVTdiMEpCUTJZc1RVRkJUU3hWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzI5Q1FVTjJSQ3hOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEZOQlFWTXNSVUZCUlN4RFFVRkRMR1ZCUVdVc1EwRkJReXhoUVVGaExFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdiMEpCUTNoRkxGVkJRVlVzUTBGQlF5eFhRVUZYTEVOQlFWa3NSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dHBRa0ZETVVRN1lVRkRTanRSUVVOTUxFTkJRVU03VVVGUlV5eHBRa0ZCYVVJc1MwRkJWeXhEUVVGRE8xRkJVemRDTEc5Q1FVRnZRaXhMUVVGWExFTkJRVU03VVVGVGFFTXNaVUZCWlN4TFFVRlhMRU5CUVVNN1VVRlJNMElzWVVGQllTeExRVUZYTEVOQlFVTTdVVUZSZWtJc1owSkJRV2RDTEV0QlFWY3NRMEZCUXp0UlFWTTVRaXhuUWtGQlowSTdXVUZEY0VJc1RVRkJUU3hUUVVGVExFZEJRVWNzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETzFsQlF5OUVMRTFCUVUwc1ZVRkJWU3hIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRzlDUVVGdlFpeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTjZSaXhQUVVGUExFZEJRVWNzVTBGQlV5eEpRVUZKTEZWQlFWVXNSVUZCUlN4RFFVRkRPMUZCUTNoRExFTkJRVU03TzBsQmFGRnpRaXcyUWtGQlpTeEhRVUZaTEVsQlFVa3NRMEZCUXp0SlFYbENNVU03VVVGQldpeHpRa0ZCVXl4RlFVRkZPenMyUTBGQk5rTTdTVUZSTjBNN1VVRkJXQ3h4UWtGQlVTeEZRVUZGT3pzd1JFRkJhVVE3U1VGVGFFUTdVVUZCV0N4eFFrRkJVU3hGUVVGRk96dHZSRUZCYTBZN1NVRlZka1E3VVVGQmNrTXNjVUpCUVZFc1EwRkJReXhGUVVGRkxHZENRVUZuUWl4RlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVGRE96dDVSRUZCYlVZN1NVRlhOVWM3VVVGQldDeHhRa0ZCVVN4RlFVRkZPemhFUVVFeVFpeGpRVUZqTEc5Q1FVRmtMR05CUVdNN2VVUkJRVTA3U1VGdlRUbEVMRTlCUVU4c1lVRkJZU3hEUVVGRE8wRkJRM3BDTEVOQlFVTTdRVUZvVTBRc2IwUkJaMU5ESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgQmFzZUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG4gICAgY29uc3RydWN0ZWRDYWxsYmFjaygpIHsgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkgeyB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7IH1cbiAgICBhZG9wdGVkQ2FsbGJhY2soKSB7IH1cbn1cbmV4cG9ydHMuQmFzZUNvbnRyb2xsZXIgPSBCYXNlQ29udHJvbGxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFtRnpaVU52Ym5SeWIyeHNaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJOc2FXVnVkQzkwY3k5c2FXSXZRbUZ6WlVOdmJuUnliMnhzWlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZQUVN4TlFVRmhMR05CUVdNN1NVRkZka0lzWjBKQlFXZENMRU5CUVVNN1NVRlRVQ3h0UWtGQmJVSXNTMEZCU3l4RFFVRkRPMGxCVVhwQ0xHbENRVUZwUWl4TFFVRkxMRU5CUVVNN1NVRlRka0lzYjBKQlFXOUNMRXRCUVVzc1EwRkJRenRKUVZNeFFpeGxRVUZsTEV0QlFVc3NRMEZCUXp0RFFVTnNRenRCUVhSRFJDeDNRMEZ6UTBNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgQkRPTW9kZWxfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Nb2RlbFwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L3V0aWxzL3V0aWxcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCBMb2dnZXJfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9Mb2dnZXJcIik7XG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyXzEuTG9nZ2VyKCk7XG5sZXQgQ2xpZW50TW9kZWwgPSBjbGFzcyBDbGllbnRNb2RlbCBleHRlbmRzIEJET01vZGVsXzEuQkRPTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmlzQ2xpZW50TW9kZWwgPSB0cnVlO1xuICAgIH1cbiAgICBnZXROYW1lc3BhY2VkU3RvcmFnZShrZXksIG5zUHJvcCwgZm9yY2VOUykge1xuICAgICAgICByZXR1cm4gdXRpbF8xLmdldE5hbWVzcGFjZWRTdG9yYWdlKHRoaXMsIGtleSwgbnNQcm9wLCBmb3JjZU5TKTtcbiAgICB9XG4gICAgc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2Uoa2V5LCBuZXdWYWwsIG5zUHJvcCkge1xuICAgICAgICByZXR1cm4gdXRpbF8xLnNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKHRoaXMsIGtleSwgbmV3VmFsLCBuc1Byb3ApO1xuICAgIH1cbiAgICBkZWxldGVGcm9tTmFtZXNwYWNlZFN0b3JhZ2Uoa2V5LCBuc1Byb3ApIHtcbiAgICAgICAgcmV0dXJuIHV0aWxfMS5kZWxldGVGcm9tTmFtZXNwYWNlZFN0b3JhZ2UodGhpcywga2V5LCBuc1Byb3ApO1xuICAgIH1cbiAgICBhc3luYyBzYXZlKF9wcm9wKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgX3JlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdW5zYXZlZENoYW5nZSA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLCBfcHJvcCkudW5zYXZlZENoYW5nZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzYXZlZCAke19wcm9wfSB3aXRoIHZhbCAke3Vuc2F2ZWRDaGFuZ2V9IWApO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25UeXBlQ2hlY2tGYWlsKGVycm9yKSB7XG4gICAgICAgIGxvZ2dlci5lcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9XG59O1xuQ2xpZW50TW9kZWwuaXNDbGllbnRNb2RlbCA9IHRydWU7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG5dLCBDbGllbnRNb2RlbC5wcm90b3R5cGUsIFwiaXNDbGllbnRNb2RlbFwiLCB2b2lkIDApO1xuQ2xpZW50TW9kZWwgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoKVxuXSwgQ2xpZW50TW9kZWwpO1xuZXhwb3J0cy5DbGllbnRNb2RlbCA9IENsaWVudE1vZGVsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTJ4cFpXNTBUVzlrWld3dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyTnNhV1Z1ZEM5MGN5OXNhV0l2UTJ4cFpXNTBUVzlrWld3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc2MwUkJRV3RGTzBGQlEyeEZMR2RFUVVFMlF6dEJRVU0zUXl3MlEwRkJiVWc3UVVGRGJrZ3NhMFJCUVRCRU8wRkJRekZFTEN0RFFVRTBRenRCUVVVMVF5eE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMR1ZCUVUwc1JVRkJSU3hEUVVGRE8wRkJWelZDTEVsQlFXRXNWMEZCVnl4SFFVRjRRaXhOUVVGaExGZEJRVmtzVTBGQlVTeHRRa0ZCVVR0SlFVRjZRenM3VVVGclFtZERMR3RDUVVGaExFZEJRVmtzU1VGQlNTeERRVUZETzBsQmEwVTVSQ3hEUVVGRE8wbEJka1JWTEc5Q1FVRnZRaXhEUVVGRExFZEJRVmNzUlVGQlJTeE5RVUZsTEVWQlFVVXNUMEZCWjBJN1VVRkRkRVVzVDBGQlR5d3lRa0ZCYjBJc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEUxQlFVMHNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRKUVVNMVJDeERRVUZETzBsQlYwMHNNRUpCUVRCQ0xFTkJRVU1zUjBGQlZ5eEZRVUZGTEUxQlFWY3NSVUZCUlN4TlFVRmxPMUZCUTNaRkxFOUJRVThzYVVOQlFUQkNMRU5CUVVNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUlVGQlJTeE5RVUZOTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRha1VzUTBGQlF6dEpRVlZOTERKQ1FVRXlRaXhEUVVGRExFZEJRVmNzUlVGQlJTeE5RVUZsTzFGQlF6TkVMRTlCUVU4c2EwTkJRVEpDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU14UkN4RFFVRkRPMGxCVVUwc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZoTzFGQlF6TkNMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZMRVZCUVVVN1dVRkRjRU1zVFVGQlRTeGhRVUZoTEVkQlFVY3NPRUpCUVcxQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRMR0ZCUVdFc1EwRkJRenRaUVVOeVJTeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1MwRkJTeXhoUVVGaExHRkJRV0VzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEZWtRc1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGRFpDeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTlFMRU5CUVVNN1NVRlZVeXhsUVVGbExFTkJRVU1zUzBGQldUdFJRVU5zUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0SlFVTm9ReXhEUVVGRE8wTkJSVW9zUTBGQlFUdEJRVEZGTUVJc2VVSkJRV0VzUjBGQldTeEpRVUZKTEVOQlFVTTdRVUZSZWtNN1NVRkJXQ3h4UWtGQlVTeEZRVUZGT3p0clJFRkJLME03UVVGc1FtcEVMRmRCUVZjN1NVRkVka0lzTkVKQlFXVXNSVUZCUlR0SFFVTk1MRmRCUVZjc1EwRnZSblpDTzBGQmNFWlpMR3REUVVGWEluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJET1JvdXRlXzEgPSByZXF1aXJlKFwifmJkby9saWIvQkRPUm91dGVcIik7XG5jb25zdCBsb2Rhc2hfMSA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5jb25zdCBMb2dnZXJfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9Mb2dnZXJcIik7XG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyXzEuTG9nZ2VyKCk7XG5jbGFzcyBDbGllbnRSb3V0ZSBleHRlbmRzIEJET1JvdXRlXzEuQkRPUm91dGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmlzQ2xpZW50Um91dGUgPSB0cnVlO1xuICAgIH1cbiAgICBnZXQgcm91dGVyKCkge1xuICAgICAgICBjb25zdCByb3V0ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCByb3V0ZSBvZiB0aGlzLnJvdXRlcykge1xuICAgICAgICAgICAgcm91dGVzW2Ake3RoaXMucm91dGVyTmFtZVNwYWNlfS8ke3JvdXRlfWAucmVwbGFjZShcIi8vXCIsIFwiL1wiKV0gPSB0aGlzLmhhbmRsZUdldC5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3V0ZXM7XG4gICAgfVxuICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gc3VwZXIudGVtcGxhdGVQYXJhbXMocGFyYW1zKTtcbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlR2V0KHBhcmFtcykge1xuICAgICAgICBsb2dnZXIubG9nKGxvZGFzaF8xLm1lcmdlKGF3YWl0IHRoaXMudGVtcGxhdGVQYXJhbXNGcm9tU2VydmVyKCksIGF3YWl0IHRoaXMudGVtcGxhdGVQYXJhbXMocGFyYW1zKSkpO1xuICAgIH1cbiAgICBhc3luYyB0ZW1wbGF0ZVBhcmFtc0Zyb21TZXJ2ZXIoKSB7XG4gICAgICAgIGxldCB1cmxUb0Fza0ZvciA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICBpZiAoIXVybFRvQXNrRm9yKVxuICAgICAgICAgICAgdXJsVG9Bc2tGb3IgPSBgL2A7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdYLUdhbWUtQXMtSlNPTic6ICd0cnVlJyB9KTtcbiAgICAgICAgcmV0dXJuIChhd2FpdCBmZXRjaCh1cmxUb0Fza0ZvciwgeyBoZWFkZXJzIH0pKS5qc29uKCk7XG4gICAgfVxufVxuZXhwb3J0cy5DbGllbnRSb3V0ZSA9IENsaWVudFJvdXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTJ4cFpXNTBVbTkxZEdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyTnNhV1Z1ZEM5MGN5OXNhV0l2UTJ4cFpXNTBVbTkxZEdVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN4blJFRkJOa003UVVGRE4wTXNiVU5CUVN0Q08wRkJReTlDTEN0RFFVRTBRenRCUVVVMVF5eE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMR1ZCUVUwc1JVRkJSU3hEUVVGRE8wRkJWVFZDTEUxQlFXRXNWMEZCV1N4VFFVRlJMRzFDUVVGUk8wbEJRWHBET3p0UlFWRnZRaXhyUWtGQllTeEhRVUZaTEVsQlFVa3NRMEZCUXp0SlFYTkViRVFzUTBGQlF6dEpRVGxEUnl4SlFVRlhMRTFCUVUwN1VVRkRZaXhOUVVGTkxFMUJRVTBzUjBGQlVTeEZRVUZGTEVOQlFVTTdVVUZEZGtJc1MwRkJTeXhOUVVGTkxFdEJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMWxCUXpkQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRWxCUVVrc1MwRkJTeXhGUVVGRkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xTkJRemRHTzFGQlEwUXNUMEZCVHl4TlFVRk5MRU5CUVVNN1NVRkRiRUlzUTBGQlF6dEpRVmRUTEV0QlFVc3NRMEZCUXl4alFVRmpMRU5CUVVNc1RVRkJjMEk3VVVGRGFrUXNUMEZCVHl4TFFVRkxMRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlEzaERMRU5CUVVNN1NVRlRVeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFYTkNPMUZCUXpWRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNZMEZCU3l4RFFVRkRMRTFCUVUwc1NVRkJTU3hEUVVGRExIZENRVUYzUWl4RlFVRkZMRVZCUVVVc1RVRkJUU3hKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOb1J5eERRVUZETzBsQlZVOHNTMEZCU3l4RFFVRkRMSGRDUVVGM1FqdFJRVU5zUXl4SlFVRkpMRmRCUVZjc1IwRkJSeXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETzFGQlEzQkRMRWxCUVVrc1EwRkJReXhYUVVGWE8xbEJRVVVzVjBGQlZ5eEhRVUZITEVkQlFVY3NRMEZCUXp0UlFVTndReXhOUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEU5QlFVOHNRMEZCUXl4RlFVRkZMR2RDUVVGblFpeEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRNVVFzVDBGQlR5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRmRCUVZjc1JVRkJSU3hGUVVGRkxFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRKUVVNeFJDeERRVUZETzBOQlEwbzdRVUU1UkVRc2EwTkJPRVJESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQkRPQ29uZmlnTWFuYWdlcl8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET0NvbmZpZ01hbmFnZXJcIik7XG5jbGFzcyBDb25maWdNYW5hZ2VyIGV4dGVuZHMgQkRPQ29uZmlnTWFuYWdlcl8xLkJET0NvbmZpZ01hbmFnZXIge1xuICAgIHNldChfY29uZmlnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgbG9hZChfY29uZmlnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgZ2V0Q2FjaGUoX2NvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIHNldENhY2hlKF9jb25maWcsIF92YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxufVxuZXhwb3J0cy5Db25maWdNYW5hZ2VyID0gQ29uZmlnTWFuYWdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyOXVabWxuVFdGdVlXZGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDJ4cFlpOURiMjVtYVdkTllXNWhaMlZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUVzWjBWQlFUWkVPMEZCV1RkRUxFMUJRV0VzWVVGQll5eFRRVUZSTEcxRFFVRm5RanRKUVZONFF5eEhRVUZITEVOQlFVTXNUMEZCWlR0UlFVTjBRaXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhsQ1FVRjVRaXhEUVVGRExFTkJRVU03U1VGREwwTXNRMEZCUXp0SlFWVlRMRWxCUVVrc1EwRkJReXhQUVVGbE8xRkJRekZDTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2VVSkJRWGxDTEVOQlFVTXNRMEZCUXp0SlFVTXZReXhEUVVGRE8wbEJWVk1zVVVGQlVTeERRVUZETEU5QlFXVTdVVUZET1VJc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eDVRa0ZCZVVJc1EwRkJReXhEUVVGRE8wbEJReTlETEVOQlFVTTdTVUZYVXl4UlFVRlJMRU5CUVVNc1QwRkJaU3hGUVVGRkxFMUJRVmM3VVVGRE0wTXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4RFFVRkRPMGxCUXk5RExFTkJRVU03UTBGRFNqdEJRV3BFUkN4elEwRnBSRU1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcblwidXNlIHN0cmljdFwiO1xuY29uc3QgQkRPTG9nZ2VyXzEgPSByZXF1aXJlKFwifmJkby9saWIvQkRPTG9nZ2VyXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmxldCBMb2dnZXIgPSBjbGFzcyBMb2dnZXIgZXh0ZW5kcyBCRE9Mb2dnZXJfMS5CRE9Mb2dnZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgICAgICBzdXBlcihwYXJhbXMpO1xuICAgICAgICB0aGlzLmxvZ0xldmVsQ29sb3JzID0ge1xuICAgICAgICAgICAgbG9nOiAnY29sb3I6IGdyYXk7IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICBkZWJ1ZzogJ2NvbG9yOiBncmVlbjsgZm9udC13ZWlnaHQ6IGJvbGQ7JyxcbiAgICAgICAgICAgIGluZm86ICdjb2xvcjogIzAwODA2QjsgZm9udC13ZWlnaHQ6IGJvbGQ7JyxcbiAgICAgICAgICAgIHdhcm46ICdjb2xvcjogIzgwODAwMDsgZm9udC13ZWlnaHQ6IGJvbGQ7JyxcbiAgICAgICAgICAgIGVycm9yOiAnY29sb3I6IHJlZDsgZm9udC13ZWlnaHQ6IGJvbGQ7J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRIZWFkZXIobG9nTGV2ZWwsIHByaW50RW52ID0gJ2NvbnNvbGUnKSB7XG4gICAgICAgIGNvbnN0IHByb2NJbmZvID0gdGhpcy5nZXRQcm9jSW5mbygpO1xuICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IHRoaXMuY3VycmVudFRpbWUoKTtcbiAgICAgICAgY29uc3QgdXBwZXJMb2dMZXZlbCA9IGxvZ0xldmVsLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvZ1BvaW50ID0gdGhpcy5nZXRMb2dQb2ludCgpO1xuICAgICAgICBjb25zdCByZXNldFN0eWxlID0gJ2NvbG9yOiBibGFjazsgZm9udC13ZWlnaHQ6IG5vcm1hbCc7XG4gICAgICAgIGNvbnN0IG1hZ2VudGEgPSAnY29sb3I6ICM4MDAwODA7IGZvbnQtd2VpZ2h0OiBub3JtYWwnO1xuICAgICAgICBjb25zdCBjeWFuID0gJ2NvbG9yOiAjMDA4MDZCOyBmb250LXdlaWdodDogbm9ybWFsJztcbiAgICAgICAgaWYgKHByaW50RW52ID09PSAnY29uc29sZScpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZExvZ0xldmVsID0gdGhpcy5sb2dMZXZlbENvbG9yc1tsb2dMZXZlbF07XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRMb2dQb2ludCA9IG1hZ2VudGE7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gY3lhbjtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFByb2NJbmZvID0gbWFnZW50YTtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgYCVjWyVjJHt1cHBlckxvZ0xldmVsfSAlYy0gJWMke3Byb2NJbmZvfSAlYy0gJWMke2N1cnJlbnRUaW1lfSAlY2F0ICVjJHtsb2dQb2ludH0lY11gLFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkTG9nTGV2ZWwsXG4gICAgICAgICAgICAgICAgcmVzZXRTdHlsZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRQcm9jSW5mbyxcbiAgICAgICAgICAgICAgICByZXNldFN0eWxlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZFRpbWUsXG4gICAgICAgICAgICAgICAgcmVzZXRTdHlsZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRMb2dQb2ludCxcbiAgICAgICAgICAgICAgICByZXNldFN0eWxlXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgWyR7dXBwZXJMb2dMZXZlbH0gLSAke3Byb2NJbmZvfSAtICR7Y3VycmVudFRpbWV9IC0gJHtsb2dQb2ludH1dYDtcbiAgICB9XG4gICAgd3JpdGVUb0ZpbGUoX2xvZ0xldmVsLCBfbWVzc2FnZSkge1xuICAgIH1cbn07XG5Mb2dnZXIgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBDb25zdFBhcmFtcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBDb25zdFBhcmFtcykgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0XSlcbl0sIExvZ2dlcik7XG5leHBvcnRzLkxvZ2dlciA9IExvZ2dlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVRHOW5aMlZ5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5amJHbGxiblF2ZEhNdmJHbGlMMHh2WjJkbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMR3RFUVVFMlJUdEJRVU0zUlN4elJFRkJkMFE3UVVGVmVFUXNTVUZCWVN4TlFVRk5MRWRCUVc1Q0xFMUJRV0VzVFVGQlR5eFRRVUZSTEhGQ1FVRlRPMGxCWldwRExGbEJRVmtzVFVGQk5FSTdVVUZEY0VNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlZGWXNiVUpCUVdNc1IwRkJSenRaUVVOeVFpeEhRVUZITEVWQlFVVXNhVU5CUVdsRE8xbEJRM1JETEV0QlFVc3NSVUZCUlN4clEwRkJhME03V1VGRGVrTXNTVUZCU1N4RlFVRkZMRzlEUVVGdlF6dFpRVU14UXl4SlFVRkpMRVZCUVVVc2IwTkJRVzlETzFsQlF6RkRMRXRCUVVzc1JVRkJSU3huUTBGQlowTTdVMEZETVVNc1EwRkJRenRKUVVsR0xFTkJRVU03U1VGWFV5eFRRVUZUTEVOQlFVTXNVVUZCYlVJc1JVRkJSU3hYUVVFNFFpeFRRVUZUTzFGQlF6VkZMRTFCUVUwc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVTndReXhOUVVGTkxGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1VVRkRka01zVFVGQlRTeGhRVUZoTEVkQlFVY3NVVUZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8xRkJRemRETEUxQlFVMHNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dFJRVU53UXl4TlFVRk5MRlZCUVZVc1IwRkJSeXh0UTBGQmJVTXNRMEZCUXp0UlFVTjJSQ3hOUVVGTkxFOUJRVThzUjBGQlJ5eHhRMEZCY1VNc1EwRkJRenRSUVVOMFJDeE5RVUZOTEVsQlFVa3NSMEZCUnl4eFEwRkJjVU1zUTBGQlF6dFJRVU51UkN4SlFVRkpMRkZCUVZFc1MwRkJTeXhUUVVGVExFVkJRVVU3V1VGRGVFSXNUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xbEJRM2hFTEUxQlFVMHNhVUpCUVdsQ0xFZEJRVWNzVDBGQlR5eERRVUZETzFsQlEyeERMRTFCUVUwc1lVRkJZU3hIUVVGSExFbEJRVWtzUTBGQlF6dFpRVU16UWl4TlFVRk5MR2xDUVVGcFFpeEhRVUZITEU5QlFVOHNRMEZCUXp0WlFVTnNReXhQUVVGUE8yZENRVU5JTEZGQlFWRXNZVUZCWVN4VlFVRlZMRkZCUVZFc1ZVRkJWU3hYUVVGWExGZEJRVmNzVVVGQlVTeExRVUZMTzJkQ1FVTndSaXhWUVVGVk8yZENRVU5XTEdsQ1FVRnBRanRuUWtGRGFrSXNWVUZCVlR0blFrRkRWaXhwUWtGQmFVSTdaMEpCUTJwQ0xGVkJRVlU3WjBKQlExWXNZVUZCWVR0blFrRkRZaXhWUVVGVk8yZENRVU5XTEdsQ1FVRnBRanRuUWtGRGFrSXNWVUZCVlR0aFFVTmlMRU5CUVVNN1UwRkRURHRSUVVORUxFOUJRVThzU1VGQlNTeGhRVUZoTEUxQlFVMHNVVUZCVVN4TlFVRk5MRmRCUVZjc1RVRkJUU3hSUVVGUkxFZEJRVWNzUTBGQlF6dEpRVU0zUlN4RFFVRkRPMGxCVlZNc1YwRkJWeXhEUVVGRExGTkJRVzlDTEVWQlFVVXNVVUZCWVR0SlFVVjZSQ3hEUVVGRE8wTkJRMG9zUTBGQlFUdEJRWEJGV1N4TlFVRk5PMGxCUkd4Q0xEUkNRVUZsTEVWQlFVVTdhVVZCWjBKUExGZEJRVmNzYjBKQlFWZ3NWMEZCVnp0SFFXWjJRaXhOUVVGTkxFTkJiMFZzUWp0QlFYQkZXU3gzUWtGQlRTSjkiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfYTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5cInVzZSBzdHJpY3RcIjtcbmNvbnN0IEJET1Rlc3RfMSA9IHJlcXVpcmUoXCJ+YmRvL21vZGVscy9CRE9UZXN0XCIpO1xuY29uc3QgQ2xpZW50TW9kZWxfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9DbGllbnRNb2RlbFwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5sZXQgVGVzdCA9IGNsYXNzIFRlc3QgZXh0ZW5kcyBCRE9UZXN0XzEuQkRPVGVzdEZhY3RvcnkoQ2xpZW50TW9kZWxfMS5DbGllbnRNb2RlbCkge1xuICAgIGNvbnN0cnVjdG9yKF9wYXJhbXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgdGVzdCgpIHtcbiAgICB9XG59O1xuVGVzdCA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3Rvcih7IGNvbGxlY3Rpb25OYW1lOiBcIlRlc3RcIiB9KSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBDb25zdFBhcmFtcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBDb25zdFBhcmFtcykgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0XSlcbl0sIFRlc3QpO1xuZXhwb3J0cy5UZXN0ID0gVGVzdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHVnpkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDIxdlpHVnNjeTlVWlhOMExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3TzBGQlFVRXNhVVJCUVhGRU8wRkJRM0pFTEhsRVFVRnpSRHRCUVVOMFJDeHpSRUZCZDBRN1FVRlZlRVFzU1VGQllTeEpRVUZKTEVkQlFXcENMRTFCUVdFc1NVRkJTeXhUUVVGUkxIZENRVUZqTEVOQlFVTXNlVUpCUVZjc1EwRkJRenRKUVVWcVJDeFpRVUZaTEU5QlFUSkNPMUZCUTI1RExFdEJRVXNzUlVGQlJTeERRVUZETzBsQlExb3NRMEZCUXp0SlFVOU5MRWxCUVVrN1NVRkZXQ3hEUVVGRE8wTkJRMG9zUTBGQlFUdEJRV1JaTEVsQlFVazdTVUZFYUVJc05FSkJRV1VzUTBGQlF5eEZRVUZGTEdOQlFXTXNSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJRenRwUlVGSGJFSXNWMEZCVnl4dlFrRkJXQ3hYUVVGWE8wZEJSbmhDTEVsQlFVa3NRMEZqYUVJN1FVRmtXU3h2UWtGQlNTSjkiLCJcbmltcG9ydCB7IEJET1Rlc3QxRmFjdG9yeSB9IGZyb20gXCJ+YmRvL21vZGVscy9CRE9UZXN0MVwiO1xuaW1wb3J0IHsgVGVzdCB9IGZyb20gXCJ+Y2xpZW50L21vZGVscy9UZXN0XCI7XG5pbXBvcnQgeyBiYXNlQ29uc3RydWN0b3IgfSBmcm9tIFwifmJkby91dGlscy9kZWNvcmF0b3JzXCI7XG5cbi8qKlxuICogVGVzdFxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBUZXN0MVxuICogQGV4dGVuZHMge0JET1Rlc3QxRmFjdG9yeSgpfVxuICovXG5AYmFzZUNvbnN0cnVjdG9yKHsgY29sbGVjdGlvbk5hbWU6IFwiVGVzdDFcIiB9KVxuZXhwb3J0IGNsYXNzIFRlc3QxIGV4dGVuZHMgQkRPVGVzdDFGYWN0b3J5KFRlc3QpIHtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmFtcz86IENvbnN0UGFyYW1zPFRlc3QxPikge1xuICAgICAgICBzdXBlcihwYXJhbXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRlc3RcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBUZXN0MVxuICAgICAqL1xuICAgIHB1YmxpYyB3YWRkZSgpIHtcbiAgICAgICAgdGhpcy5iaW5kaW5ncy5nZXQoXCJ0aXRsZVwiKTtcbiAgICB9XG59XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vQ29uZmlnLnRzXCI6IFwiLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvQ29uZmlnLnRzXCIsXG5cdFwiLi9HYW1lTG9iYnkudHNcIjogXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9HYW1lTG9iYnkudHNcIixcblx0XCIuL0hvbWUudHNcIjogXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9Ib21lLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLnRzJFwiOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ2xpZW50Um91dGVfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9DbGllbnRSb3V0ZVwiKTtcbmNvbnN0IEJET0NvbmZpZ18xID0gcmVxdWlyZShcIn5iZG8vcm91dGVzL0JET0NvbmZpZ1wiKTtcbmNsYXNzIENvbmZpZyBleHRlbmRzIEJET0NvbmZpZ18xLkJET0NvbmZpZ0ZhY3RvcnkoQ2xpZW50Um91dGVfMS5DbGllbnRSb3V0ZSkge1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ29uZmlnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTI5dVptbG5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlqYkdsbGJuUXZkSE12Y205MWRHVnpMME52Ym1acFp5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxIbEVRVUZ6UkR0QlFVTjBSQ3h4UkVGQmVVUTdRVUZYZWtRc1RVRkJjVUlzVFVGQlR5eFRRVUZSTERSQ1FVRm5RaXhEUVVGRExIbENRVUZYTEVOQlFVTTdRMEZCU1R0QlFVRnlSU3g1UWtGQmNVVWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBDbGllbnRSb3V0ZV8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0NsaWVudFJvdXRlXCIpO1xuY29uc3QgQkRPR2FtZUxvYmJ5XzEgPSByZXF1aXJlKFwifmJkby9yb3V0ZXMvQkRPR2FtZUxvYmJ5XCIpO1xuY2xhc3MgR2FtZUxvYmJ5IGV4dGVuZHMgQkRPR2FtZUxvYmJ5XzEuQkRPR2FtZUxvYmJ5RmFjdG9yeShDbGllbnRSb3V0ZV8xLkNsaWVudFJvdXRlKSB7XG4gICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZXN0OiAnbG9sJ1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEdhbWVMb2JieTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVIyRnRaVXh2WW1KNUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOWpiR2xsYm5RdmRITXZjbTkxZEdWekwwZGhiV1ZNYjJKaWVTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxIbEVRVUZ6UkR0QlFVTjBSQ3d5UkVGQkswUTdRVUZUTDBRc1RVRkJjVUlzVTBGQlZTeFRRVUZSTEd0RFFVRnRRaXhEUVVGRExIbENRVUZYTEVOQlFVTTdTVUZWZWtRc1MwRkJTeXhEUVVGRExHTkJRV003VVVGRE1VSXNUMEZCVHp0WlFVTklMRWxCUVVrc1JVRkJSU3hMUVVGTE8xTkJRMlFzUTBGQlF6dEpRVU5PTEVOQlFVTTdRMEZEU2p0QlFXWkVMRFJDUVdWREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENsaWVudFJvdXRlXzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQ2xpZW50Um91dGVcIik7XG5jb25zdCBCRE9Ib21lXzEgPSByZXF1aXJlKFwifmJkby9yb3V0ZXMvQkRPSG9tZVwiKTtcbmNsYXNzIEhvbWUgZXh0ZW5kcyBCRE9Ib21lXzEuQkRPSG9tZUZhY3RvcnkoQ2xpZW50Um91dGVfMS5DbGllbnRSb3V0ZSkge1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gSG9tZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVNHOXRaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDNKdmRYUmxjeTlJYjIxbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc2VVUkJRWE5FTzBGQlEzUkVMR2xFUVVGeFJEdEJRVk55UkN4TlFVRnhRaXhKUVVGTExGTkJRVkVzZDBKQlFXTXNRMEZCUXl4NVFrRkJWeXhEUVVGRE8wTkJRVWs3UVVGQmFrVXNkVUpCUVdsRkluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmZ1bmN0aW9uIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBrZXksIG5ld1ZhbCwgbnNQcm9wID0gXCJpZFwiKSB7XG4gICAgaWYgKGtleSA9PT0gXCIqXCIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIiogaXMgYSBzcGVjaWFsIGNoYXJhY3RlciBhbmQgZG9lcyBub3QgZm9sbG93IHRoZSBwcm9wZXJ0eSBjb252ZW50aW9uXCIpO1xuICAgIGNvbnN0IG5zUHJlZml4ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGluc3RhbmNlLmNvbnN0cnVjdG9yKS5uYW1lO1xuICAgIGxldCBuc1N1ZmZpeCA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwib2xkU3RvcmFnZU5zU3VmZml4XCIpO1xuICAgIGxldCBzdG9yYWdlVmFsdWU7XG4gICAgaWYgKCFuc1N1ZmZpeClcbiAgICAgICAgbnNTdWZmaXggPSBpbnN0YW5jZVtuc1Byb3BdO1xuICAgIGxldCBucyA9IGAke25zUHJlZml4fV8ke25zU3VmZml4fWA7XG4gICAgaWYgKGtleSA9PT0gbnNQcm9wIHx8IG5zU3VmZml4ICE9PSBpbnN0YW5jZVtuc1Byb3BdKSB7XG4gICAgICAgIG5zU3VmZml4ID0ga2V5ID09PSBuc1Byb3AgPyBuZXdWYWwgOiBpbnN0YW5jZVtuc1Byb3BdO1xuICAgICAgICBjb25zdCBuZXdOcyA9IGAke25zUHJlZml4fV8ke25zU3VmZml4fWA7XG4gICAgICAgIHN0b3JhZ2VWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5zKTtcbiAgICAgICAgaWYgKHN0b3JhZ2VWYWx1ZSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obnMpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3TnMsIHN0b3JhZ2VWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbnMgPSBuZXdOcztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN0b3JhZ2VWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5zKTtcbiAgICAgICAgaWYgKHN0b3JhZ2VWYWx1ZSkge1xuICAgICAgICAgICAgc3RvcmFnZVZhbHVlID0gSlNPTi5wYXJzZShzdG9yYWdlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHN0b3JhZ2VWYWx1ZSA9IHt9O1xuICAgICAgICBpZiAobmV3VmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdG9yYWdlVmFsdWVba2V5XTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LmtleXMoc3RvcmFnZVZhbHVlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obnMsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VWYWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5zLCBKU09OLnN0cmluZ2lmeShPYmplY3QuYXNzaWduKHN0b3JhZ2VWYWx1ZSwgeyBba2V5XTogbmV3VmFsIH0pKSk7XG4gICAgfVxuICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEoaW5zdGFuY2UsIFwib2xkU3RvcmFnZU5zU3VmZml4XCIsIG5zU3VmZml4KTtcbn1cbmV4cG9ydHMuc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2UgPSBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZTtcbmZ1bmN0aW9uIGdldE5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBrZXksIG5zUHJvcCA9IFwiaWRcIiwgZm9yY2VOUykge1xuICAgIGNvbnN0IG5zUHJlZml4ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGluc3RhbmNlLmNvbnN0cnVjdG9yKS5uYW1lO1xuICAgIGxldCBuc1N1ZmZpeCA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwib2xkU3RvcmFnZU5zU3VmZml4XCIpO1xuICAgIGlmIChuc1N1ZmZpeCAhPT0gaW5zdGFuY2VbbnNQcm9wXSlcbiAgICAgICAgbnNTdWZmaXggPSBpbnN0YW5jZVtuc1Byb3BdO1xuICAgIGlmIChmb3JjZU5TKVxuICAgICAgICBuc1N1ZmZpeCA9IGZvcmNlTlM7XG4gICAgbGV0IHN0b3JhZ2VWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke25zUHJlZml4fV8ke25zU3VmZml4fWApO1xuICAgIGlmIChzdG9yYWdlVmFsdWUpXG4gICAgICAgIHN0b3JhZ2VWYWx1ZSA9IEpTT04ucGFyc2Uoc3RvcmFnZVZhbHVlKTtcbiAgICBpZiAoc3RvcmFnZVZhbHVlICYmIGtleSA9PT0gXCIqXCIpXG4gICAgICAgIHJldHVybiBzdG9yYWdlVmFsdWU7XG4gICAgaWYgKHN0b3JhZ2VWYWx1ZSAmJiBrZXkgaW4gc3RvcmFnZVZhbHVlKVxuICAgICAgICByZXR1cm4gc3RvcmFnZVZhbHVlW2tleV07XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmV4cG9ydHMuZ2V0TmFtZXNwYWNlZFN0b3JhZ2UgPSBnZXROYW1lc3BhY2VkU3RvcmFnZTtcbmZ1bmN0aW9uIGRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZShpbnN0YW5jZSwga2V5LCBuc1Byb3AgPSBcImlkXCIpIHtcbiAgICBpZiAoa2V5ID09PSBcIipcIikge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gZ2V0TmFtZXNwYWNlZFN0b3JhZ2UoaW5zdGFuY2UsIGtleSwgbnNQcm9wKTtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHN0b3JhZ2UpIHtcbiAgICAgICAgICAgIGlmIChzdG9yYWdlLmhhc093blByb3BlcnR5KHByb3ApKVxuICAgICAgICAgICAgICAgIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBwcm9wLCB1bmRlZmluZWQsIG5zUHJvcCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZVxuICAgICAgICBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZShpbnN0YW5jZSwga2V5LCB1bmRlZmluZWQsIG5zUHJvcCk7XG59XG5leHBvcnRzLmRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZSA9IGRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRYUnBiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDNWMGFXeHpMM1YwYVd3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN4clJFRkJhMFU3UVVGVmJFVXNVMEZCWjBJc01FSkJRVEJDTEVOQlFVTXNVVUZCWVN4RlFVRkZMRWRCUVZjc1JVRkJSU3hOUVVGWExFVkJRVVVzVTBGQmFVSXNTVUZCU1R0SlFVTnlSeXhKUVVGSkxFZEJRVWNzUzBGQlN5eEhRVUZITzFGQlFVVXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXh6UlVGQmMwVXNRMEZCUXl4RFFVRkRPMGxCUjNwSExFMUJRVTBzVVVGQlVTeEhRVUZITEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXp0SlFVTnNSU3hKUVVGSkxGRkJRVkVzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3h2UWtGQmIwSXNRMEZCUXl4RFFVRkRPMGxCUXpORUxFbEJRVWtzV1VGQmFVSXNRMEZCUXp0SlFVZDBRaXhKUVVGSkxFTkJRVU1zVVVGQlVUdFJRVUZGTEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRE0wTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1IwRkJSeXhSUVVGUkxFbEJRVWtzVVVGQlVTeEZRVUZGTEVOQlFVTTdTVUZEYmtNc1NVRkJTU3hIUVVGSExFdEJRVXNzVFVGQlRTeEpRVUZKTEZGQlFWRXNTMEZCU3l4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVU3VVVGRmFrUXNVVUZCVVN4SFFVRkhMRWRCUVVjc1MwRkJTeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEzUkVMRTFCUVUwc1MwRkJTeXhIUVVGSExFZEJRVWNzVVVGQlVTeEpRVUZKTEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUTNoRExGbEJRVmtzUjBGQlJ5eFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRM2hETEVsQlFVa3NXVUZCV1N4RlFVRkZPMWxCUTJRc1dVRkJXU3hEUVVGRExGVkJRVlVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTTFRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4WlFVRlpMRU5CUVVNc1EwRkJRenRUUVVNM1F6dFJRVU5FTEVWQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVNN1MwRkRaRHRUUVVGTk8xRkJSVWdzV1VGQldTeEhRVUZITEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGVFTXNTVUZCU1N4WlFVRlpMRVZCUVVVN1dVRkRaQ3haUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRUUVVNelF6czdXVUZCVFN4WlFVRlpMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJSWHBDTEVsQlFVa3NUVUZCVFN4TFFVRkxMRk5CUVZNc1JVRkJSVHRaUVVOMFFpeFBRVUZQTEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVONlFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVTdaMEpCUTI1RExGbEJRVmtzUTBGQlF5eFZRVUZWTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRMMEk3TzJkQ1FVRk5MRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5xUlRzN1dVRkJUU3haUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVOdVJ6dEpRVVZFTEhsQ1FVRmpMRU5CUVVNc1VVRkJVU3hGUVVGRkxHOUNRVUZ2UWl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8wRkJRemRFTEVOQlFVTTdRVUZ5UTBRc1owVkJjVU5ETzBGQmEwSkVMRk5CUVdkQ0xHOUNRVUZ2UWl4RFFVRkRMRkZCUVdFc1JVRkJSU3hIUVVGWExFVkJRVVVzVTBGQmFVSXNTVUZCU1N4RlFVRkZMRTlCUVdkQ08wbEJRM0JITEUxQlFVMHNVVUZCVVN4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJRenRKUVVOc1JTeEpRVUZKTEZGQlFWRXNSMEZCUnl4elFrRkJWeXhEUVVGRExGRkJRVkVzUlVGQlJTeHZRa0ZCYjBJc1EwRkJReXhEUVVGRE8wbEJRek5FTEVsQlFVa3NVVUZCVVN4TFFVRkxMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGQlJTeFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJReTlFTEVsQlFVa3NUMEZCVHp0UlFVRkZMRkZCUVZFc1IwRkJSeXhQUVVGUExFTkJRVU03U1VGRGFFTXNTVUZCU1N4WlFVRlpMRWRCUVZFc1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEZGQlFWRXNTVUZCU1N4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRM2hGTEVsQlFVa3NXVUZCV1R0UlFVRkZMRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMGxCUXpGRUxFbEJRVWtzV1VGQldTeEpRVUZKTEVkQlFVY3NTMEZCU3l4SFFVRkhPMUZCUVVVc1QwRkJUeXhaUVVGWkxFTkJRVU03U1VGRGNrUXNTVUZCU1N4WlFVRlpMRWxCUVVrc1IwRkJSeXhKUVVGSkxGbEJRVms3VVVGQlJTeFBRVUZQTEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOc1JTeFBRVUZQTEZOQlFWTXNRMEZCUXp0QlFVTnlRaXhEUVVGRE8wRkJWa1FzYjBSQlZVTTdRVUZYUkN4VFFVRm5RaXd5UWtGQk1rSXNRMEZCUXl4UlFVRmhMRVZCUVVVc1IwRkJWeXhGUVVGRkxGTkJRV2xDTEVsQlFVazdTVUZEZWtZc1NVRkJTU3hIUVVGSExFdEJRVXNzUjBGQlJ5eEZRVUZGTzFGQlEySXNUVUZCVFN4UFFVRlBMRWRCUVVjc2IwSkJRVzlDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVjc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU0xUkN4TFFVRkxMRTFCUVUwc1NVRkJTU3hKUVVGSkxFOUJRVThzUlVGQlJUdFpRVU40UWl4SlFVRkpMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETzJkQ1FVRkZMREJDUVVFd1FpeERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRVZCUVVVc1UwRkJVeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzFOQlEyNUhPMHRCUTBvN08xRkJRVTBzTUVKQlFUQkNMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzUlVGQlJTeFRRVUZUTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkRlRVVzUTBGQlF6dEJRVkJFTEd0RlFVOURJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBQcm9wZXJ0eV8xID0gcmVxdWlyZShcIn5iZG8vbGliL1Byb3BlcnR5XCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuY29uc3QgTW9kaWZpY2F0aW9uXzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kaWZpY2F0aW9uXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IEVycm9yc18xID0gcmVxdWlyZShcIn5iZG8vbGliL0Vycm9yc1wiKTtcbmNvbnN0IGxvZGFzaF8xID0gcmVxdWlyZShcImxvZGFzaFwiKTtcbmNsYXNzIEF0dHJpYnV0ZSBleHRlbmRzIFByb3BlcnR5XzEuUHJvcGVydHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHksIHBhcmFtcykge1xuICAgICAgICBzdXBlcihvYmplY3QsIHByb3BlcnR5LCBwYXJhbXMpO1xuICAgICAgICB0aGlzLmluRE9NSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZERvU2V0VmFsdWUodmFsdWUpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmRvU2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB0aGlzLnJlZmxlY3RUb0RPTUF0dHJpYnV0ZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuZG9BdXRvU2F2ZSgpO1xuICAgIH1cbiAgICBwcm94eUhhbmRsZXIoX3BhdGgsIF9jaGFuZ2VkVmFsLCBfcHJldlZhbCwgYXR0clJlZmxlY3RzVG9PYmogPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuZG9TZXRWYWx1ZSh1dGlsXzEuZ2V0UHJveHlUYXJnZXQodmFsdWUpKTtcbiAgICAgICAgdGhpcy5yZWZsZWN0VG9ET01BdHRyaWJ1dGUodmFsdWUsIGF0dHJSZWZsZWN0c1RvT2JqKTtcbiAgICAgICAgdGhpcy5kb0F1dG9TYXZlKCk7XG4gICAgfVxuICAgIGdldFVuc2F2ZWRDaGFuZ2UoKSB7IH1cbiAgICBzaG91bGREb1NldFZhbHVlKHZhbHVlLCBza2lwR3VhcmQgPSBmYWxzZSkge1xuICAgICAgICBpZiAoZW52aXJvbm1lbnRfMS5pc0Jyb3dzZXIoKSAmJiAhdGhpcy5vYmplY3QuaXNCRE9Nb2RlbCAmJiAodGhpcy5vYmplY3QgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdGVkVHlwZSA9IHV0aWxfMS5jb25zdHJ1Y3RUeXBlT2ZIVE1MQXR0cmlidXRlKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pbkRPTUluaXRpYWxpemVkICYmIHRoaXMub2JqZWN0LmdldEF0dHJpYnV0ZSh0aGlzLnByb3BlcnR5KSAmJiB2YWx1ZSAhPT0gY29uc3RydWN0ZWRUeXBlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vYmplY3RbdGhpcy5wcm9wZXJ0eV0gPSBjb25zdHJ1Y3RlZFR5cGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhKHZhbHVlID09PSB0aGlzLm93blZhbHVlIHx8ICFza2lwR3VhcmQgJiYgIXRoaXMuZGlzYWJsZVR5cGVHdWFyZCAmJiAhdGhpcy50eXBlR3VhcmQodmFsdWUpKTtcbiAgICB9XG4gICAgcmVmbGVjdFRvRE9NQXR0cmlidXRlKHZhbHVlLCBzZXRWYWx1ZSA9IHRydWUpIHtcbiAgICAgICAgaWYgKCFlbnZpcm9ubWVudF8xLmlzQnJvd3NlcigpIHx8ICEodGhpcy5vYmplY3QgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IHRoaXMucHJvcGVydHkudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgYXR0clZhbHVlID0gdGhpcy5vYmplY3QuZ2V0QXR0cmlidXRlKHN0cmluZ0tleSk7XG4gICAgICAgIGxldCBzZXRBdHRyaWJ1dGUgPSB0cnVlO1xuICAgICAgICBsZXQgcFRhcmdldDtcbiAgICAgICAgbGV0IHZhbHVlVG9QYXNzID0gdmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGlmaWNhdGlvbl8xLk1vZGlmaWNhdGlvbikge1xuICAgICAgICAgICAgdmFsdWVUb1Bhc3MgPSB2YWx1ZS52YWx1ZU9mKCk7XG4gICAgICAgICAgICBpZiAodmFsdWUudHlwZSA9PT0gXCJkZWxldGVcIiAmJiAhdXRpbF8xLmlzUHJpbWl0aXZlKHZhbHVlLnZhbHVlT2YoKSkpXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaW5ET01Jbml0aWFsaXplZCAmJiBhdHRyVmFsdWUpIHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHBUYXJnZXQgPSB1dGlsXzEuZ2V0UHJveHlUYXJnZXQodmFsdWVUb1Bhc3MpO1xuICAgICAgICB0aGlzLmluRE9NSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICBpZiAoc2V0QXR0cmlidXRlICYmIGF0dHJWYWx1ZSAhPT0gcFRhcmdldCAmJiBhdHRyVmFsdWUgIT09IEpTT04uc3RyaW5naWZ5KHBUYXJnZXQpLnJlcGxhY2UoL1xcXCIvZywgXCInXCIpKSB7XG4gICAgICAgICAgICB0aGlzLm9iamVjdC5zZXRBdHRyaWJ1dGUoc3RyaW5nS2V5LCBwVGFyZ2V0LCBzZXRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9BdXRvU2F2ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b1NhdmUgJiYgdGhpcy5kb05vdFBlcnNpc3QpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcnNfMS5Db25maWd1cmF0aW9uRXJyb3IoXCJZb3UgaGF2ZSB0dXJuZWQgb24gYXV0b3NhdmUgYnV0IGF0IHRoZSBzYW1lIHRpbWUgaXQgaXMgZm9yYmlkZGVuIHRvIHBlcnNpc3QgdGhlIHZhbHVlIVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuYXV0b1NhdmUgfHwgIWxvZGFzaF8xLmlzRnVuY3Rpb24odGhpcy5vYmplY3Quc2F2ZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5hdXRvU2F2ZSA9PT0gXCJib29sZWFuXCIpXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5zYXZlKHRoaXMucHJvcGVydHkpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYXV0b1NhdmUgPT09IFwibnVtYmVyXCIgJiYgIXRoaXMuYXV0b1NhdmVUaW1lb3V0KSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9TYXZlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0LnNhdmUodGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuYXV0b1NhdmVUaW1lb3V0O1xuICAgICAgICAgICAgfSwgTWF0aC5hYnModGhpcy5hdXRvU2F2ZSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5BdHRyaWJ1dGUgPSBBdHRyaWJ1dGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRWFIwY21saWRYUmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlzYVdJdlFYUjBjbWxpZFhSbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc1owUkJRVGhFTzBGQlJUbEVMSGRFUVVGdFJEdEJRVU51UkN4M1JFRkJjVVE3UVVGRGNrUXNNRU5CUVRSR08wRkJRelZHTERSRFFVRnhSRHRCUVVOeVJDeHRRMEZCYjBNN1FVRnpSWEJETEUxQlFXRXNVMEZCTWtRc1UwRkJVU3h0UWtGQlVUdEpRVFJFY0VZc1dVRkJXU3hOUVVGVExFVkJRVVVzVVVGQlZ5eEZRVUZGTEUxQlFYbENPMUZCUTNwRUxFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNVVUZCVVN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJXakZDTEhGQ1FVRm5RaXhIUVVGWkxFdEJRVXNzUTBGQlF6dEpRV0UxUXl4RFFVRkRPMGxCVVUwc1VVRkJVU3hEUVVGRExFdEJRV2RETzFGQlF6VkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1MwRkJTeXhEUVVGRE8xbEJRVVVzVDBGQlR6dFJRVU14UXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlEzWkNMRWxCUVVrc1EwRkJReXh4UWtGQmNVSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVOc1F5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF6dEpRVkZOTEZsQlFWa3NRMEZCUXl4TFFVRmpMRVZCUVVVc1YwRkJhMElzUlVGQlJTeFJRVUZsTEVWQlFVVXNiMEpCUVRaQ0xFbEJRVWs3VVVGRGRFY3NUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dFJRVU42UWl4SlFVRkpMRXRCUVVzc1MwRkJTeXhUUVVGVExFbEJRVWtzUzBGQlN5eExRVUZMTEVsQlFVazdXVUZCUlN4UFFVRlBPMUZCUTJ4RUxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNjVUpCUVdNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzWkRMRWxCUVVrc1EwRkJReXh4UWtGQmNVSXNRMEZCUXl4TFFVRkxMRVZCUVVVc2FVSkJRV2xDTEVOQlFVTXNRMEZCUXp0UlFVTnlSQ3hKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJRenRKUVZOTkxHZENRVUZuUWl4TFFVRkxMRU5CUVVNN1NVRlZkRUlzWjBKQlFXZENMRU5CUVVNc1MwRkJaME1zUlVGQlJTeFpRVUZ4UWl4TFFVRkxPMUZCUTJoR0xFbEJRVWtzZFVKQlFWTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3haUVVGWkxGZEJRVmNzUTBGQlF5eEZRVUZGTzFsQlEyaEdMRTFCUVUwc1pVRkJaU3hIUVVGSExHMURRVUUwUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMWxCUTJwR0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEV0QlFVc3NTMEZCU3l4bFFVRmxMRVZCUVVVN1owSkJRelZHTEVsQlFVa3NRMEZCUXl4TlFVRlBMRU5CUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEdWQlFXVXNRMEZCUXp0blFrRkRja1FzVDBGQlR5eExRVUZMTEVOQlFVTTdZVUZEYUVJN1UwRkRTanRSUVVORUxFOUJRVThzUTBGQlF5eERRVUZETEV0QlFVc3NTMEZCU3l4SlFVRkpMRU5CUVVNc1VVRkJVU3hKUVVGSkxFTkJRVU1zVTBGQlV5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzaEhMRU5CUVVNN1NVRmpVeXh4UWtGQmNVSXNRMEZCUXl4TFFVRm5ReXhGUVVGRkxGZEJRVzlDTEVsQlFVazdVVUZEZEVZc1NVRkJTU3hEUVVGRExIVkNRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzV1VGQldTeFhRVUZYTEVOQlFVTTdXVUZCUlN4UFFVRlBPMUZCUTJ4RkxFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRE0wTXNUVUZCVFN4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkRkRVFzU1VGQlNTeFpRVUZaTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTNoQ0xFbEJRVWtzVDBGQlR5eERRVUZETzFGQlJWb3NTVUZCU1N4WFFVRlhMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRM2hDTEVsQlFVa3NTMEZCU3l4WlFVRlpMREpDUVVGWkxFVkJRVVU3V1VGREwwSXNWMEZCVnl4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dFpRVU01UWl4SlFVRkpMRXRCUVVzc1EwRkJReXhKUVVGSkxFdEJRVXNzVVVGQlVTeEpRVUZKTEVOQlFVTXNhMEpCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdaMEpCUVVVc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF6dFRRVU5zUmp0UlFVVkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRWxCUVVrc1UwRkJVeXhGUVVGRk8xbEJRM0pETEZsQlFWa3NSMEZCUnl4TFFVRkxMRU5CUVVNN1UwRkRlRUk3TzFsQlFVMHNUMEZCVHl4SFFVRkhMSEZDUVVGakxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVVUZETjBNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVjM1FpeEpRVUZKTEZsQlFWa3NTVUZCU1N4VFFVRlRMRXRCUVVzc1QwRkJUeXhKUVVGSkxGTkJRVk1zUzBGQlN5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRPVVlzU1VGQlNTeERRVUZETEUxQlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0VFFVTnFSVHRKUVVOTUxFTkJRVU03U1VGVlV5eFZRVUZWTzFGQlEyaENMRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzU1VGQlNTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZPMWxCUTNCRExFMUJRVTBzU1VGQlNTd3lRa0ZCYTBJc1EwRkJReXgzUmtGQmQwWXNRMEZCUXl4RFFVRkRPMU5CUXpGSU8xRkJRMFFzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1EwRkJReXh0UWtGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRE8xbEJRVVVzVDBGQlR6dFJRVU0xUkN4SlFVRkpMRTlCUVU4c1NVRkJTU3hEUVVGRExGRkJRVkVzUzBGQlN5eFRRVUZUTzFsQlFVVXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUTNoRkxFbEJRVWtzVDBGQlR5eEpRVUZKTEVOQlFVTXNVVUZCVVN4TFFVRkxMRkZCUVZFc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVWQlFVVTdXVUZETlVRc1NVRkJTU3hEUVVGRExHVkJRV1VzUjBGQlJ5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RlFVRkZPMmRDUVVOdVF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdaMEpCUTJoRExFOUJRVThzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXp0WlFVTm9ReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU12UWp0SlFVTk1MRU5CUVVNN1EwRkRTanRCUVdoTVJDdzRRa0ZuVEVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBtc18xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm1zXCIpKTtcbmNvbnN0IEJET01hcENhY2hlXzEgPSByZXF1aXJlKFwifmJkby9saWIvQkRPTWFwQ2FjaGVcIik7XG5jbGFzcyBCRE9Db25maWdNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBCRE9NYXBDYWNoZV8xLkJET01hcENhY2hlKCk7XG4gICAgfVxuICAgIGFzeW5jIGdldChjb25maWcpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gYXdhaXQgdGhpcy5nZXRDYWNoZShjb25maWcpO1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGF3YWl0IHRoaXMubG9hZChjb25maWcpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRDYWNoZShjb25maWcsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKTtcbiAgICB9XG4gICAgZ2V0Q2FjaGUoY29uZmlnKSB7XG4gICAgICAgIGNvbnN0IGZyb21Mb2NhbENhY2hlID0gdGhpcy5jYWNoZS5nZXQoY29uZmlnKTtcbiAgICAgICAgaWYgKGZyb21Mb2NhbENhY2hlKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbUxvY2FsQ2FjaGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGFzeW5jIHNldENhY2hlKGNvbmZpZywgdmFsdWUpIHtcbiAgICAgICAgbGV0IGNvbmYgPSB0aGlzLmNhY2hlLmdldCgnX19Db25maWdNYW5hZ2VyQ2FjaGVUaW1lb3V0X18nKTtcbiAgICAgICAgaWYgKCF0aGlzLmNhY2hlLmhhcygnX19Db25maWdNYW5hZ2VyQ2FjaGVUaW1lb3V0X18nKSkge1xuICAgICAgICAgICAgY29uZiA9IChhd2FpdCB0aGlzLmxvYWQoJ2NvbmZpZycpKS50aW1lb3V0cy5jb25maWdDYWNoZTtcbiAgICAgICAgICAgIGlmIChjb25mKVxuICAgICAgICAgICAgICAgIGNvbmYgPSBtc18xLmRlZmF1bHQoY29uZik7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnNldCgnX19Db25maWdNYW5hZ2VyQ2FjaGVUaW1lb3V0X18nLCBjb25mKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlLnNldChjb25maWcsIHZhbHVlLCBjb25mKTtcbiAgICB9XG59XG5leHBvcnRzLkJET0NvbmZpZ01hbmFnZXIgPSBCRE9Db25maWdNYW5hZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFEyOXVabWxuVFdGdVlXZGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2YkdsaUwwSkVUME52Ym1acFowMWhibUZuWlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc2IwUkJRVzlDTzBGQlEzQkNMSE5FUVVGdFJEdEJRVzFDYmtRc1RVRkJjMElzWjBKQlFXZENPMGxCUVhSRE8xRkJWV01zVlVGQlN5eEhRVUUyUWl4SlFVRkpMSGxDUVVGWExFVkJRVVVzUTBGQlF6dEpRWGRGYkVVc1EwRkJRenRKUVM5RVZTeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVdNN1VVRkRNMElzU1VGQlNTeExRVUZMTEVkQlFVY3NUVUZCVFN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEzaERMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVU3V1VGRFVpeExRVUZMTEVkQlFVY3NUVUZCVFN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFsQlEyaERMRTFCUVUwc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1UwRkRkRU03VVVGRFJDeFBRVUZQTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJFTXNRMEZCUXp0SlFUaENVeXhSUVVGUkxFTkJRVU1zVFVGQll6dFJRVU0zUWl4TlFVRk5MR05CUVdNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVNNVF5eEpRVUZKTEdOQlFXTXNSVUZCUlR0WlFVTm9RaXhQUVVGUExHTkJRV01zUTBGQlF6dFRRVU42UWp0UlFVTkVMRTlCUVU4c1NVRkJTU3hEUVVGRE8wbEJRMmhDTEVOQlFVTTdTVUZYVXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRV01zUlVGQlJTeExRVUZWTzFGQlF5OURMRWxCUVVrc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMQ3RDUVVFclFpeERRVUZETEVOQlFVTTdVVUZETTBRc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMQ3RDUVVFclFpeERRVUZETEVWQlFVVTdXVUZEYkVRc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXp0WlFVTjRSQ3hKUVVGSkxFbEJRVWs3WjBKQlFVVXNTVUZCU1N4SFFVRkhMRmxCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU14UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5d3JRa0ZCSzBJc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU42UkR0UlFVTkVMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNSVUZCUlN4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRGVFTXNRMEZCUXp0RFFVTktPMEZCYkVaRUxEUkRRV3RHUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IG1vbWVudF8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm1vbWVudFwiKSk7XG5jb25zdCBwYXRoXzEgPSByZXF1aXJlKFwicGF0aFwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jbGFzcyBCRE9Mb2dnZXIge1xuICAgIGNvbnN0cnVjdG9yKF9wYXJhbXMpIHtcbiAgICAgICAgdGhpcy5sb2dGaWxlID0gJ2RlZmF1bHQubG9nJztcbiAgICAgICAgdGhpcy5wcmV2ZW50Q29uc29sZVByaW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJldmVudEZpbGVQcmludCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvZ0xldmVsID0gJ2RlYnVnJztcbiAgICAgICAgdGhpcy5wcm90b3R5cGVOYW1lcyA9IHV0aWxfMS5nZXRQcm90b3R5cGVOYW1lc1JlY3Vyc2l2ZSh0aGlzKTtcbiAgICB9XG4gICAgbG9nKG1lc3NhZ2UsIGxvZ2xldmVsID0gJ2xvZycsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKGxvZ2xldmVsICE9PSAnbG9nJyAmJiAhdGhpcy5pc0FsbG93ZWQobG9nbGV2ZWwpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMucHJldmVudENvbnNvbGVQcmludCB8fCBbJ2xvZycsICdlcnJvciddLmluY2x1ZGVzKGxvZ2xldmVsKSkge1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5nZXRIZWFkZXIobG9nbGV2ZWwpO1xuICAgICAgICAgICAgbGV0IG5ld0FyZ3MgPSBbXTtcbiAgICAgICAgICAgIGlmIChoZWFkZXIgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIG5ld0FyZ3MgPSBuZXdBcmdzLmNvbmNhdChoZWFkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIG5ld0FyZ3MucHVzaChoZWFkZXIpO1xuICAgICAgICAgICAgbmV3QXJncy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICAgICAgbmV3QXJncyA9IG5ld0FyZ3MuY29uY2F0KGFyZ3MpO1xuICAgICAgICAgICAgY29uc29sZVtsb2dsZXZlbF0uYXBwbHkodGhpcywgbmV3QXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoYXJncyk7XG4gICAgICAgIGlmICghdGhpcy5wcmV2ZW50RmlsZVByaW50IHx8IGxvZ2xldmVsID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLndyaXRlVG9GaWxlKGxvZ2xldmVsLCBtZXNzYWdlICsgcGFyc2VkU3RyaW5nLnN1YnN0cigxLCBwYXJzZWRTdHJpbmcubGVuZ3RoIC0gMikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRlYnVnKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgYXBwbHkgPSBbbWVzc2FnZSwgJ2RlYnVnJ10uY29uY2F0KGFyZ3MpO1xuICAgICAgICB0aGlzLmxvZy5hcHBseSh0aGlzLCBhcHBseSk7XG4gICAgfVxuICAgIGluZm8obWVzc2FnZSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBhcHBseSA9IFttZXNzYWdlLCAnaW5mbyddLmNvbmNhdChhcmdzKTtcbiAgICAgICAgdGhpcy5sb2cuYXBwbHkodGhpcywgYXBwbHkpO1xuICAgIH1cbiAgICB3YXJuKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgYXBwbHkgPSBbbWVzc2FnZSwgJ3dhcm4nXS5jb25jYXQoYXJncyk7XG4gICAgICAgIHRoaXMubG9nLmFwcGx5KHRoaXMsIGFwcGx5KTtcbiAgICB9XG4gICAgZXJyb3IobWVzc2FnZSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBhcHBseSA9IFttZXNzYWdlLCAnZXJyb3InXS5jb25jYXQoYXJncyk7XG4gICAgICAgIHRoaXMubG9nLmFwcGx5KHRoaXMsIGFwcGx5KTtcbiAgICB9XG4gICAgZ2V0UHJvY0luZm8oKSB7XG4gICAgICAgIHJldHVybiBgJHtnbG9iYWwucHJvY2Vzcy5lbnYubmFtZSB8fCAnJ30gJHtnbG9iYWwucHJvY2Vzcy5lbnYuaG9zdG5hbWUgfHwgJyd9ICR7Z2xvYmFsLnByb2Nlc3MucGlkfWA7XG4gICAgfVxuICAgIGlzQWxsb3dlZChsb2dMZXZlbCkge1xuICAgICAgICBjb25zdCBsb2dMZXZlbE9yZGVyID0gWydsb2cnLCAnZGVidWcnLCAnaW5mbycsICd3YXJuJywgJ2Vycm9yJ107XG4gICAgICAgIHJldHVybiBsb2dMZXZlbE9yZGVyLmluZGV4T2YobG9nTGV2ZWwpID49IGxvZ0xldmVsT3JkZXIuaW5kZXhPZih0aGlzLmxvZ0xldmVsKTtcbiAgICB9XG4gICAgY3VycmVudFRpbWUoKSB7XG4gICAgICAgIHJldHVybiBtb21lbnRfMS5kZWZhdWx0KCkuZm9ybWF0KCdERC5NTS5ZWVlZIEhIOm1tOnNzJyk7XG4gICAgfVxuICAgIGdldExvZ1BvaW50KCkge1xuICAgICAgICBjb25zdCBzdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgbGV0IGNhbGxwb2ludDtcbiAgICAgICAgZm9yIChjb25zdCBbaW5kZXgsIHN0YWNrcGFydF0gb2Ygc3RhY2suZW50cmllcygpKSB7XG4gICAgICAgICAgICBpZiAoIWluZGV4KVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCF1dGlsXzEuaW5jbHVkZXNNZW1iZXJPZkxpc3Qoc3RhY2twYXJ0LCB0aGlzLnByb3RvdHlwZU5hbWVzLCAnLnRzJykpIHtcbiAgICAgICAgICAgICAgICBjYWxscG9pbnQgPSBzdGFja3BhcnQuc3BsaXQocGF0aF8xLnNlcCkucG9wKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxwb2ludCkge1xuICAgICAgICAgICAgY2FsbHBvaW50ID0gY2FsbHBvaW50LnJlcGxhY2UoJyknLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxscG9pbnQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FsbHBvaW50O1xuICAgIH1cbn1cbmV4cG9ydHMuQkRPTG9nZ2VyID0gQkRPTG9nZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFRHOW5aMlZ5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5c2FXSXZRa1JQVEc5bloyVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVTkJMRFJFUVVFMFFqdEJRVU0xUWl3clFrRkJNa0k3UVVGRE0wSXNNRU5CUVcxR08wRkJWMjVHTEUxQlFYTkNMRk5CUVZNN1NVRnJSRE5DTEZsQlFWa3NUMEZCWjBNN1VVRXpRM0pETEZsQlFVOHNSMEZCV1N4aFFVRmhMRU5CUVVNN1VVRlJha01zZDBKQlFXMUNMRWRCUVdFc1MwRkJTeXhEUVVGRE8xRkJVWFJETEhGQ1FVRm5RaXhIUVVGaExFdEJRVXNzUTBGQlF6dFJRV1Z1UXl4aFFVRlJMRWRCUVdVc1QwRkJUeXhEUVVGRE8xRkJWVzVDTEcxQ1FVRmpMRWRCUVdFc2FVTkJRVEJDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkZMMElzUTBGQlF6dEpRVmN4UXl4SFFVRkhMRU5CUVVNc1QwRkJXU3hGUVVGRkxGZEJRWE5DTEV0QlFVc3NSVUZCUlN4SFFVRkhMRWxCUVZjN1VVRkRhRVVzU1VGQlNTeFJRVUZSTEV0QlFVc3NTMEZCU3l4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTTdXVUZCUlN4UFFVRlBPMUZCUXpWRUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTzFsQlEyeEZMRTFCUVUwc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1dVRkRlRU1zU1VGQlNTeFBRVUZQTEVkQlFXRXNSVUZCUlN4RFFVRkRPMWxCUXpOQ0xFbEJRVWtzVFVGQlRTeFpRVUZaTEV0QlFVc3NSVUZCUlR0blFrRkRla0lzVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03WVVGRGNFTTdPMmRDUVVGTkxFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkROVUlzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRaUVVOMFFpeFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5rTEU5QlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMU5CUXpWRU8xRkJRMFFzVFVGQlRTeFpRVUZaTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU14UXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4SlFVRkpMRkZCUVZFc1MwRkJTeXhQUVVGUExFVkJRVVU3V1VGRGFFUXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFVkJRVVVzVDBGQlR5eEhRVUZITEZsQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxGbEJRVmtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVONlJqdEpRVU5NTEVOQlFVTTdTVUZSVFN4TFFVRkxMRU5CUVVNc1QwRkJXU3hGUVVGRkxFZEJRVWNzU1VGQlV6dFJRVU51UXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE9VTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZ2UWl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOc1JDeERRVUZETzBsQlVVMHNTVUZCU1N4RFFVRkRMRTlCUVZrc1JVRkJSU3hIUVVGSExFbEJRVk03VVVGRGJFTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRemRETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUlVGQmIwSXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRiRVFzUTBGQlF6dEpRVkZOTEVsQlFVa3NRMEZCUXl4UFFVRlpMRVZCUVVVc1IwRkJSeXhKUVVGVE8xRkJRMnhETEUxQlFVMHNTMEZCU3l4SFFVRkhMRU5CUVVNc1QwRkJUeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNM1F5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFVkJRVzlDTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJ4RUxFTkJRVU03U1VGUlRTeExRVUZMTEVOQlFVTXNUMEZCV1N4RlFVRkZMRWRCUVVjc1NVRkJVenRSUVVOdVF5eE5RVUZOTEV0QlFVc3NSMEZCUnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRPVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGdlFpeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnNSQ3hEUVVGRE8wbEJVMU1zVjBGQlZ6dFJRVU5xUWl4UFFVRlBMRWRCUVVjc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4SlFVRkpMRVZCUVVVc1NVRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRWxCUVVrc1JVRkJSU3hKUVVGSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1NVRkRla2NzUTBGQlF6dEpRU3RDVXl4VFFVRlRMRU5CUVVNc1VVRkJiVUk3VVVGRGJrTXNUVUZCVFN4aFFVRmhMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzVDBGQlR5eEZRVUZGTEUxQlFVMHNSVUZCUlN4TlFVRk5MRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGFFVXNUMEZCVHl4aFFVRmhMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEdGQlFXRXNRMEZCUXl4UFFVRlBMRU5CUVZNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzBsQlF6TkdMRU5CUVVNN1NVRlRVeXhYUVVGWE8xRkJRMnBDTEU5QlFVOHNaMEpCUVUwc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eHhRa0ZCY1VJc1EwRkJReXhEUVVGRE8wbEJRMnhFTEVOQlFVTTdTVUZUVXl4WFFVRlhPMUZCUTJwQ0xFMUJRVTBzUzBGQlN5eEhRVUZaTEVsQlFVa3NTMEZCU3l4RlFVRkZMRU5CUVVNc1MwRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTjBSQ3hKUVVGSkxGTkJRVk1zUTBGQlF6dFJRVU5rTEV0QlFVc3NUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGVExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVN1dVRkRPVU1zU1VGQlNTeERRVUZETEV0QlFVczdaMEpCUVVVc1UwRkJVenRaUVVOeVFpeEpRVUZKTEVOQlFVTXNNa0pCUVc5Q0xFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4alFVRmpMRVZCUVVVc1MwRkJTeXhEUVVGRExFVkJRVVU3WjBKQlF6bEVMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEZWQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8yZENRVU4yUXl4TlFVRk5PMkZCUTFRN1UwRkRTanRSUVVORUxFbEJRVWtzVTBGQlV5eEZRVUZGTzFsQlExZ3NVMEZCVXl4SFFVRkhMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpGRE8yRkJRVTA3V1VGRFNDeFRRVUZUTEVkQlFVY3NSVUZCUlN4RFFVRkRPMU5CUTJ4Q08xRkJRMFFzVDBGQlR5eFRRVUZUTEVOQlFVTTdTVUZEY2tJc1EwRkJRenREUVVOS08wRkJNMDFFTERoQ1FUSk5ReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEsIGR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuZXhwaXJlID0gSW5maW5pdHk7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuZXhwaXJlID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoZHVyYXRpb24gfHwgSW5maW5pdHkpO1xuICAgIH1cbiAgICBnZXQgZXhwaXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhwaXJlID8gdGhpcy5leHBpcmUgPCBuZXcgRGF0ZSgpLmdldFRpbWUoKSA6IGZhbHNlO1xuICAgIH1cbn1cbmNsYXNzIEJET01hcENhY2hlIGV4dGVuZHMgTWFwIHtcbiAgICBzZXQoa2V5LCB2YWx1ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gbmV3IEVudGl0eSh2YWx1ZSwgZHVyYXRpb24pO1xuICAgICAgICByZXR1cm4gc3VwZXIuc2V0KGtleSwgZW50aXR5KTtcbiAgICB9XG4gICAgZ2V0KGtleSkge1xuICAgICAgICBjb25zdCBlbnRpdHkgPSBzdXBlci5nZXQoa2V5KTtcbiAgICAgICAgaWYgKGVudGl0eSA9PT0gdW5kZWZpbmVkIHx8IGVudGl0eS5leHBpcmVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50aXR5LmRhdGE7XG4gICAgfVxufVxuZXhwb3J0cy5CRE9NYXBDYWNoZSA9IEJET01hcENhY2hlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFRXRndRMkZqYUdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyeHBZaTlDUkU5TllYQkRZV05vWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVXRCTEUxQlFVMHNUVUZCVFR0SlFXZENVaXhaUVVGWkxFbEJRVThzUlVGQlJTeFJRVUZwUWp0UlFVWTVRaXhYUVVGTkxFZEJRVmNzVVVGQlVTeERRVUZETzFGQlJ6bENMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEycENMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeEpRVUZKTEVWQlFVVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1IwRkJSeXhEUVVGRExGRkJRVkVzU1VGQlNTeFJRVUZSTEVOQlFVTXNRMEZCUXp0SlFVTm9SU3hEUVVGRE8wbEJVMFFzU1VGQlNTeFBRVUZQTzFGQlExQXNUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1NVRkJTU3hGUVVGRkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJRenRKUVVOd1JTeERRVUZETzBOQlEwbzdRVUZUUkN4TlFVRmhMRmRCUVd0Q0xGTkJRVkVzUjBGQmFVSTdTVUZYTjBNc1IwRkJSeXhEUVVGRExFZEJRVTBzUlVGQlJTeExRVUZSTEVWQlFVVXNVVUZCYVVJN1VVRkRNVU1zVFVGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzFGQlF6TkRMRTlCUVU4c1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRiRU1zUTBGQlF6dEpRVk5OTEVkQlFVY3NRMEZCUXl4SFFVRk5PMUZCUTJJc1RVRkJUU3hOUVVGTkxFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNNVFpeEpRVUZKTEUxQlFVMHNTMEZCU3l4VFFVRlRMRWxCUVVrc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJUdFpRVU40UXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlEycENMRTlCUVU4c1UwRkJVeXhEUVVGRE8xTkJRM0JDTzFGQlEwUXNUMEZCVHl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJRM1pDTEVOQlFVTTdRMEZEU2p0QlFTOUNSQ3hyUTBFclFrTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQkRPTW9kZWxfMTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5cInVzZSBzdHJpY3RcIjtcbmNvbnN0IHV1aWRfMSA9IHJlcXVpcmUoXCJ1dWlkXCIpO1xuY29uc3QgdHlwZV9ncmFwaHFsXzEgPSByZXF1aXJlKFwidHlwZS1ncmFwaHFsXCIpO1xuY29uc3QgQmluZGluZ18xID0gcmVxdWlyZShcIn5iZG8vbGliL0JpbmRpbmdcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xubGV0IEJET01vZGVsID0gQkRPTW9kZWxfMSA9IGNsYXNzIEJET01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0JET01vZGVsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uTmFtZSA9IEJET01vZGVsXzEuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMuaWQgPSBgcGVuZGluZ18ke3V1aWRfMS52MSgpfWA7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMuY29uc3RydWN0b3IpLm5hbWU7XG4gICAgfVxuICAgIGdldCBiaW5kaW5ncygpIHtcbiAgICAgICAgY29uc3QgYmluZGluZ3MgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMsIFwiYmluZGluZ3NcIik7XG4gICAgICAgIHJldHVybiBiaW5kaW5ncyA/IGJpbmRpbmdzIDogbmV3IE1hcCgpO1xuICAgIH1cbiAgICBiaW5kKHByb3BOYW1lLCBtb2RlKSB7XG4gICAgICAgIHJldHVybiBuZXcgQmluZGluZ18xLkJpbmRpbmcodGhpcywgcHJvcE5hbWUsIG1vZGUpO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMudG9KU09OKCk7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICBjb25zdCBkYXRhID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzW2tleV07XG4gICAgICAgICAgICAgICAgZGF0YVtrZXldID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59O1xuQkRPTW9kZWwuZ3JhcGhRTFR5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQkRPTW9kZWxfMS5jb25zdHJ1Y3Rvcik7XG5CRE9Nb2RlbC5pc0JET01vZGVsID0gdHJ1ZTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcbl0sIEJET01vZGVsLnByb3RvdHlwZSwgXCJpc0JET01vZGVsXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIEJET01vZGVsLnByb3RvdHlwZSwgXCJjb2xsZWN0aW9uTmFtZVwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKChfdHlwZSkgPT4gdHlwZV9ncmFwaHFsXzEuSUQpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIEJET01vZGVsLnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgQkRPTW9kZWwucHJvdG90eXBlLCBcImNsYXNzTmFtZVwiLCB2b2lkIDApO1xuQkRPTW9kZWwgPSBCRE9Nb2RlbF8xID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKHsgaXNBYnN0cmFjdDogdHJ1ZSB9KVxuXSwgQkRPTW9kZWwpO1xuZXhwb3J0cy5CRE9Nb2RlbCA9IEJET01vZGVsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFRXOWtaV3d1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJ4cFlpOUNSRTlOYjJSbGJDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMQ3RDUVVGclF6dEJRVU5zUXl3clEwRkJhME03UVVGRGJFTXNPRU5CUVhkRU8wRkJRM2hFTEhORVFVRTJSVHRCUVVNM1JTeHJSRUZCYTBRN1FVRlhiRVFzU1VGQmMwSXNVVUZCVVN4blFrRkJPVUlzVFVGQmMwSXNVVUZCVVR0SlFVUTVRanRSUVhORFowTXNaVUZCVlN4SFFVRlpMRWxCUVVrc1EwRkJRenRSUVZFelFpeHRRa0ZCWXl4SFFVRlpMRlZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU03VVVGVE4wTXNUMEZCUlN4SFFVRlhMRmRCUVZjc1UwRkJTU3hGUVVGRkxFVkJRVVVzUTBGQlF6dFJRVlZ5UXl4alFVRlRMRWRCUVZjc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJhVVZzUnl4RFFVRkRPMGxCZGtSSExFbEJRV01zVVVGQlVUdFJRVU5zUWl4TlFVRk5MRkZCUVZFc1IwRkJSeXh6UWtGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVNdlF5eFBRVUZQTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUXpORExFTkJRVU03U1VGWFRTeEpRVUZKTEVOQlFUSkZMRkZCUVZjc1JVRkJSU3hKUVVGUk8xRkJRM1pITEU5QlFVOHNTVUZCU1N4cFFrRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRTJSQ3hEUVVGRE8wbEJRM3BITEVOQlFVTTdTVUZSVFN4UlFVRlJPMUZCUTFnc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMUZCUXpOQ0xFOUJRVThzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOb1F5eERRVUZETzBsQlZVMHNUVUZCVFR0UlFVTlVMRTFCUVUwc1NVRkJTU3hIUVVGdFFpeEZRVUZGTEVOQlFVTTdVVUZEYUVNc1MwRkJTeXhOUVVGTkxFZEJRVWNzU1VGQlNTeEpRVUZKTEVWQlFVVTdXVUZEY0VJc1NVRkJTU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NVMEZCVXl4RlFVRkZPMmRDUVVONlFpeE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlF6RkNMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTTdZVUZEZGtJN1UwRkRTanRSUVVORUxFOUJRVThzU1VGQlNTeERRVUZETzBsQlEyaENMRU5CUVVNN1EwRlRTaXhEUVVGQk8wRkJka2d3UWl4dlFrRkJWeXhIUVVGUkxFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNWVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8wRkJiVUl2UkN4dFFrRkJWU3hIUVVGWkxFbEJRVWtzUTBGQlF6dEJRVkYwUXp0SlFVRllMSEZDUVVGUkxFVkJRVVU3T3pSRFFVRTBRenRCUVZFelF6dEpRVUZZTEhGQ1FVRlJMRVZCUVVVN08yZEVRVUZ0UlR0QlFWTndSRHRKUVVGNlFpeHpRa0ZCVXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVVzUTBGQlF5eHBRa0ZCUlN4RFFVRkRPenR2UTBGQmVVTTdRVUZWY2tRN1NVRkJXaXh6UWtGQlV5eEZRVUZGT3pzeVEwRkJhMFk3UVVGb1JUVkZMRkZCUVZFN1NVRkVOMElzTkVKQlFXVXNRMEZCUXl4RlFVRkZMRlZCUVZVc1JVRkJSU3hKUVVGSkxFVkJRVVVzUTBGQlF6dEhRVU5vUWl4UlFVRlJMRU5CYVVrM1FqdEJRV3BKY1VJc05FSkJRVkVpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbG9kYXNoXzEgPSByZXF1aXJlKFwibG9kYXNoXCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuY2xhc3MgQkRPUm91dGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJvdXRlck5hbWVTcGFjZSA9IGAvJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWUudG9Mb3dlckNhc2UoKX1gO1xuICAgICAgICB0aGlzLnJvdXRlcyA9IFsnLyddO1xuICAgICAgICB0aGlzLnRlbXBsYXRlU3RyaW5nID0gJzxkaXY+PC9kaXY+JztcbiAgICAgICAgdGhpcy5qc29uT25seSA9IGZhbHNlO1xuICAgIH1cbiAgICByZW5kZXJUZW1wbGF0ZSh0ZW1wbGF0ZVBhcmFtcykge1xuICAgICAgICBsZXQgc3RyaW5nVG9QYXJzZSA9IG51bGw7XG4gICAgICAgIGlmIChsb2Rhc2hfMS5pc1N0cmluZyh0aGlzLnRlbXBsYXRlU3RyaW5nKSkge1xuICAgICAgICAgICAgc3RyaW5nVG9QYXJzZSA9IGVudmlyb25tZW50XzEudGVtcGxhdGVFbnZpcm9ubWVudC5yZW5kZXJTdHJpbmcodGhpcy50ZW1wbGF0ZVN0cmluZywgdGVtcGxhdGVQYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsb2Rhc2hfMS5pc09iamVjdCh0aGlzLnRlbXBsYXRlU3RyaW5nKSkge1xuICAgICAgICAgICAgc3RyaW5nVG9QYXJzZSA9IHRoaXMudGVtcGxhdGVTdHJpbmcucmVuZGVyKHRlbXBsYXRlUGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyaW5nVG9QYXJzZTtcbiAgICB9XG4gICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMoX3JlcXVlc3RPclBhcmFtcykge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxufVxuQkRPUm91dGUuYXR0YWNoVG9TZXJ2ZXJzID0gWycqJ107XG5leHBvcnRzLkJET1JvdXRlID0gQkRPUm91dGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQVW05MWRHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMnhwWWk5Q1JFOVNiM1YwWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVVZCTEcxRFFVRTBRenRCUVVNMVF5eDNSRUZCTmtRN1FVRlROMFFzVFVGQmMwSXNVVUZCVVR0SlFVRTVRanRSUVhGQ1Z5eHZRa0ZCWlN4SFFVRlhMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRVZCUVVVc1EwRkJRenRSUVZGd1JTeFhRVUZOTEVkQlFXRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVd0Q2RFSXNiVUpCUVdNc1IwRkJjMElzWVVGQllTeERRVUZETzFGQlZXeEVMR0ZCUVZFc1IwRkJXU3hMUVVGTExFTkJRVU03U1VGdFJIaERMRU5CUVVNN1NVRjRRMkVzWTBGQll5eERRVUZETEdOQlFUaENPMUZCUTI1RUxFbEJRVWtzWVVGQllTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTjZRaXhKUVVGSkxHbENRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhGUVVGRk8xbEJReTlDTEdGQlFXRXNSMEZCUnl4cFEwRkJiVUlzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1JVRkJSU3hqUVVGakxFTkJRVU1zUTBGQlF6dFRRVU42Ump0UlFVTkVMRWxCUVVrc2FVSkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRVZCUVVVN1dVRkRMMElzWVVGQllTeEhRVUZqTEVsQlFVa3NRMEZCUXl4alFVRmxMRU5CUVVNc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETzFOQlF6RkZPMUZCUTBRc1QwRkJUeXhoUVVGaExFTkJRVU03U1VGRGVrSXNRMEZCUXp0SlFWZFRMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU1zWjBKQlFUQkRPMUZCUTNKRkxFOUJRVThzUlVGQlJTeERRVUZETzBsQlEyUXNRMEZCUXpzN1FVRTVSV0VzZDBKQlFXVXNSMEZCWVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJXbkJFTERSQ1FUUkhReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgRmllbGRfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9GaWVsZFwiKTtcbmNvbnN0IGZyYW1ld29ya18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZnJhbWV3b3JrXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgaW5pQmluZE5hbWUgPSBcImluaXRpYXRvckJpbmRpbmdcIjtcbmNvbnN0IGJpbmROYW1lID0gXCJiaW5kaW5nc1wiO1xuY2xhc3MgQmluZGluZyB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSwgbW9kZSA9IFwiUmVhZFdyaXRlXCIpIHtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdG9yID0gdGhpcy5nZXRPcmlnaW5hbFByb3BlcnR5RGVzY3JpcHRvcih0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSk7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgfHwgdGhpcy5vYmplY3RbdGhpcy5wcm9wZXJ0eV07XG4gICAgfVxuICAgIGluc3RhbGwoaW5pdGlhdG9yLCBwcm9wZXJ0eSkge1xuICAgICAgICB0aGlzLmluaXRpYXRvciA9IGluaXRpYXRvcjtcbiAgICAgICAgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgICAgICB0aGlzLmluaXRpYXRvckRlc2NyaXB0b3IgPSB0aGlzLmdldE9yaWdpbmFsUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5KTtcbiAgICAgICAgaWYgKCFSZWZsZWN0Lmhhc01ldGFkYXRhKGluaUJpbmROYW1lLCB0aGlzLmluaXRpYXRvcikpXG4gICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCBpbmlCaW5kTmFtZSwgbmV3IE1hcCgpKTtcbiAgICAgICAgaWYgKCFSZWZsZWN0Lmhhc01ldGFkYXRhKGJpbmROYW1lLCB0aGlzLm9iamVjdCkpXG4gICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMub2JqZWN0LCBiaW5kTmFtZSwgbmV3IE1hcCgpKTtcbiAgICAgICAgY29uc3QgaW5pdGlhdG9yTURhdGEgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCBpbmlCaW5kTmFtZSkgfHwgbmV3IE1hcCgpO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JCaW5kaW5nID0gaW5pdGlhdG9yTURhdGEuZ2V0KHRoaXMuaW5pdGlhdG9yUHJvcGVydHkpO1xuICAgICAgICBpZiAoaW5pdGlhdG9yQmluZGluZylcbiAgICAgICAgICAgIGluaXRpYXRvckJpbmRpbmcucmVtb3ZlKCk7XG4gICAgICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLm9iamVjdCwgYmluZE5hbWUpIHx8IG5ldyBNYXAoKTtcbiAgICAgICAgaWYgKCFtRGF0YS5oYXModGhpcy5wcm9wZXJ0eSkpXG4gICAgICAgICAgICBtRGF0YS5zZXQodGhpcy5wcm9wZXJ0eSwgW10pO1xuICAgICAgICBtRGF0YS5nZXQodGhpcy5wcm9wZXJ0eSkucHVzaCh0aGlzKTtcbiAgICAgICAgaW5pdGlhdG9yTURhdGEuc2V0KHRoaXMuaW5pdGlhdG9yUHJvcGVydHksIHRoaXMpO1xuICAgICAgICBjb25zdCBmaWVsZE1EYXRhTmFtZSA9IGBmaWVsZDoke3RoaXMucHJvcGVydHl9YDtcbiAgICAgICAgY29uc3Qgb2JqZWN0RmllbGQgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JGaWVsZCA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLmluaXRpYXRvciwgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSk7XG4gICAgICAgIGxldCBmaWVsZCA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLm9iamVjdCwgZmllbGRNRGF0YU5hbWUpO1xuICAgICAgICBpZiAoIWZpZWxkKVxuICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhKHRoaXMub2JqZWN0LCBmaWVsZE1EYXRhTmFtZSwgbmV3IEZpZWxkXzEuRmllbGQodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpKTtcbiAgICAgICAgZmllbGQgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIGZpZWxkTURhdGFOYW1lKTtcbiAgICAgICAgZmllbGQuYWRkRmllbGQob2JqZWN0RmllbGQpO1xuICAgICAgICBmaWVsZC5hZGRGaWVsZChpbml0aWF0b3JGaWVsZCk7XG4gICAgICAgIHRoaXMucmVwbGFjZURlc2NyaXB0b3IoKTtcbiAgICAgICAgUmVmbGVjdC5zZXQodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHksIHRoaXMudmFsdWVPZigpKTtcbiAgICB9XG4gICAgcmVtb3ZlKCkge1xuICAgICAgICBjb25zdCBvYmplY3RWYWx1ZSA9IHRoaXMub2JqZWN0W3RoaXMucHJvcGVydHldO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JWYWx1ZSA9IHRoaXMuaW5pdGlhdG9yW3RoaXMuaW5pdGlhdG9yUHJvcGVydHldO1xuICAgICAgICBjb25zdCBvYmplY3RNRGF0YSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5vYmplY3QsIGJpbmROYW1lKTtcbiAgICAgICAgY29uc3Qgb2JqZWN0QmluZGluZ3MgPSBvYmplY3RNRGF0YSA/IG9iamVjdE1EYXRhLmdldCh0aGlzLnByb3BlcnR5KSA6IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgaW5pdGlhdG9yTURhdGEgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCBpbmlCaW5kTmFtZSk7XG4gICAgICAgIGNvbnN0IGluaXRpYXRvckJpbmRpbmcgPSBpbml0aWF0b3JNRGF0YSA/IGluaXRpYXRvck1EYXRhLmdldCh0aGlzLmluaXRpYXRvclByb3BlcnR5LnRvU3RyaW5nKCkpIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBmaWVsZE1EYXRhTmFtZSA9IGBmaWVsZDoke3RoaXMucHJvcGVydHl9YDtcbiAgICAgICAgY29uc3QgZmllbGQgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIGZpZWxkTURhdGFOYW1lKTtcbiAgICAgICAgaWYgKGluaXRpYXRvckJpbmRpbmcpIHtcbiAgICAgICAgICAgIGlmIChpbml0aWF0b3JNRGF0YSlcbiAgICAgICAgICAgICAgICBpbml0aWF0b3JNRGF0YS5kZWxldGUodGhpcy5pbml0aWF0b3JQcm9wZXJ0eS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZURlc2NyaXB0b3IodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHksIGluaXRpYXRvclZhbHVlLCB0aGlzLmluaXRpYXRvckRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgZmllbGQucmVtb3ZlRmllbGQobWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iamVjdEJpbmRpbmdzKSB7XG4gICAgICAgICAgICB1dGlsXzEucmVtb3ZlRWxlbWVudEZyb21BcnJheShvYmplY3RCaW5kaW5ncywgdGhpcyk7XG4gICAgICAgICAgICBmaWVsZC5yZW1vdmVGaWVsZChtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpKTtcbiAgICAgICAgICAgIGlmICghb2JqZWN0QmluZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdE1EYXRhKVxuICAgICAgICAgICAgICAgICAgICBvYmplY3RNRGF0YS5kZWxldGUodGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlRGVzY3JpcHRvcih0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSwgb2JqZWN0VmFsdWUsIHRoaXMuZGVzY3JpcHRvcik7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhKHRoaXMub2JqZWN0LCBmaWVsZE1EYXRhTmFtZSwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVwbGFjZURlc2NyaXB0b3IoKSB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBiaW5kaW5nR2V0KCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGF0Lm1vZGUgPT09IFwiV3JpdGVPbmx5XCIgJiYgdGhpcyA9PT0gdGhhdC5pbml0aWF0b3IpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyYW1ld29ya18xLmdldHRlcih0aGF0Lm9iamVjdCwgdGhhdC5wcm9wZXJ0eSwgXCJmaWVsZFwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIGJpbmRpbmdTZXQobmV3VmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoYXQubW9kZSA9PT0gXCJSZWFkT25seVwiICYmIHRoaXMgPT09IHRoYXQuaW5pdGlhdG9yKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgZnJhbWV3b3JrXzEuc2V0dGVyKHRoYXQub2JqZWN0LCB0aGF0LnByb3BlcnR5LCBuZXdWYWwsIFwiZmllbGRcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYmluZGluZ0Rlc2MgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHkpO1xuICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5LCBiaW5kaW5nRGVzYyk7XG4gICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcy5vYmplY3QsIFwiYmluZGluZ0Rlc2NyaXB0b3JcIiwgYmluZGluZ0Rlc2MpO1xuICAgIH1cbiAgICByZXN0b3JlRGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5LCB2YWx1ZSwgZGVzY3JpcHRvcikge1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KG9iamVjdCwgcHJvcGVydHkpO1xuICAgICAgICBpZiAoZGVzY3JpcHRvcikge1xuICAgICAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmluaXRpYXRvciwgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH1cbiAgICAgICAgb2JqZWN0W3Byb3BlcnR5LnRvU3RyaW5nKCldID0gdmFsdWU7XG4gICAgfVxuICAgIGdldE9yaWdpbmFsUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwga2V5KSB7XG4gICAgICAgIGxldCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBrZXkpO1xuICAgICAgICBsZXQgbURhdGFOYW1lID0gYmluZE5hbWU7XG4gICAgICAgIGxldCBwcm90b3R5cGUgPSBvYmplY3Q7XG4gICAgICAgIGlmIChvYmplY3QgPT09IHRoaXMuaW5pdGlhdG9yKVxuICAgICAgICAgICAgbURhdGFOYW1lID0gaW5pQmluZE5hbWU7XG4gICAgICAgIHdoaWxlICghZGVzY3JpcHRvcikge1xuICAgICAgICAgICAgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSk7XG4gICAgICAgICAgICBpZiAoIXByb3RvdHlwZSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGlmIChwcm90b3R5cGUuY29uc3RydWN0b3IubmFtZSA9PT0gXCJCYXNlQ29uc3RydWN0b3JcIilcbiAgICAgICAgICAgICAgICBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKTtcbiAgICAgICAgICAgIGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlYXJjaERlc2NyaXB0b3JJbkJpbmRpbmdzID0gZmFsc2U7XG4gICAgICAgIGlmIChkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvci5zZXQgJiYgZGVzY3JpcHRvci5zZXQubmFtZSA9PT0gXCJiaW5kaW5nU2V0XCIpXG4gICAgICAgICAgICAgICAgc2VhcmNoRGVzY3JpcHRvckluQmluZGluZ3MgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3IuZ2V0ICYmIGRlc2NyaXB0b3IuZ2V0Lm5hbWUgPT09IFwiYmluZGluZ0dldFwiKVxuICAgICAgICAgICAgICAgIHNlYXJjaERlc2NyaXB0b3JJbkJpbmRpbmdzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VhcmNoRGVzY3JpcHRvckluQmluZGluZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShvYmplY3QsIG1EYXRhTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBiaW5kaW5ncyA9IG1EYXRhID8gbURhdGEuZ2V0KGtleS50b1N0cmluZygpKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChiaW5kaW5ncykge1xuICAgICAgICAgICAgICAgIGlmIChiaW5kaW5ncyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IgPSBiaW5kaW5nc1swXS5kZXNjcmlwdG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IgPSBiaW5kaW5ncy5pbml0aWF0b3JEZXNjcmlwdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICAgIH1cbn1cbmV4cG9ydHMuQmluZGluZyA9IEJpbmRpbmc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRbWx1WkdsdVp5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiR2xpTDBKcGJtUnBibWN1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3d3UTBGQmVVUTdRVUZGZWtRc01FTkJRWFZETzBGQlEzWkRMRzlFUVVGelJEdEJRVU4wUkN4clJFRkJLMGM3UVVGSkwwY3NUVUZCVFN4WFFVRlhMRWRCUVVjc2EwSkJRV3RDTEVOQlFVTTdRVUZEZGtNc1RVRkJUU3hSUVVGUkxFZEJRVWNzVlVGQlZTeERRVUZETzBGQmMwSTFRaXhOUVVGaExFOUJRVTg3U1VFd1JXaENMRmxCUVZrc1RVRkJVeXhGUVVGRkxGRkJRVmNzUlVGQlJTeFBRVUZ2UWl4WFFVRlhPMUZCUXk5RUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUTNKQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTJwQ0xFbEJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRFpDUVVFMlFpeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzBsQlEzSkdMRU5CUVVNN1NVRkxUU3hSUVVGUkxFTkJRVU1zUzBGQlZ6dFJRVU4yUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dEpRVU4yUWl4RFFVRkRPMGxCVVUwc1QwRkJUenRSUVVOV0xFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0SlFVTndSQ3hEUVVGRE8wbEJVMDBzVDBGQlR5eERRVUZETEZOQlFWa3NSVUZCUlN4UlFVRlhPMUZCUTNCRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUXpOQ0xFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1IwRkJSeXhSUVVGUkxFTkJRVU03VVVGRGJFTXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEhRVUZITEVsQlFVa3NRMEZCUXl3MlFrRkJOa0lzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMUZCUjNSSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETzFsQlFVVXNlVUpCUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEZkQlFWY3NSVUZCUlN4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRE9VY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1dVRkJSU3g1UWtGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVZHNSeXhOUVVGTkxHTkJRV01zUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzVjBGQlZ5eERRVUZETEVsQlFVa3NTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVNM1JTeE5RVUZOTEdkQ1FVRm5RaXhIUVVGSExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVOQlFVTTdVVUZEY0VVc1NVRkJTU3huUWtGQlowSTdXVUZCUlN4blFrRkJaMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0UlFVZG9SQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzVVVGQlVTeERRVUZETEVsQlFVa3NTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVNNVJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETzFsQlFVVXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpWRUxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTndReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVZHFSQ3hOUVVGTkxHTkJRV01zUjBGQlJ5eFRRVUZUTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVOb1JDeE5RVUZOTEZkQlFWY3NSMEZCUnl3NFFrRkJiVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVU53UlN4TlFVRk5MR05CUVdNc1IwRkJSeXc0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8xRkJRMjVHTEVsQlFVa3NTMEZCU3l4SFFVRm5RaXc0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxHTkJRV01zUTBGQlF5eERRVUZETzFGQlF6RkZMRWxCUVVrc1EwRkJReXhMUVVGTE8xbEJRVVVzYVVOQlFYTkNMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeGpRVUZqTEVWQlFVVXNTVUZCU1N4aFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVkMlJ5eExRVUZMTEVkQlFVY3NPRUpCUVcxQ0xFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4alFVRmpMRU5CUVdkQ0xFTkJRVU03VVVGRGVFVXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFJRVU0xUWl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETzFGQlJ5OUNMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4RFFVRkRPMUZCUTNwQ0xFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEZUVVc1EwRkJRenRKUVU5TkxFMUJRVTA3VVVGRlZDeE5RVUZOTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTXZReXhOUVVGTkxHTkJRV01zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMUZCUnpsRUxFMUJRVTBzVjBGQlZ5eEhRVUZITEhOQ1FVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTjJSQ3hOUVVGTkxHTkJRV01zUjBGQlJ5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU03VVVGRGFFWXNUVUZCVFN4alFVRmpMRWRCUVVjc2MwSkJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRmRCUVZjc1EwRkJReXhEUVVGRE8xRkJRMmhGTEUxQlFVMHNaMEpCUVdkQ0xFZEJRVWNzWTBGQll5eERRVUZETEVOQlFVTXNRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNN1VVRkZOVWNzVFVGQlRTeGpRVUZqTEVkQlFVY3NVMEZCVXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRGFFUXNUVUZCVFN4TFFVRkxMRWRCUVdkQ0xEaENRVUZ0UWl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzWTBGQll5eERRVUZETEVOQlFVTTdVVUZGTlVVc1NVRkJTU3huUWtGQlowSXNSVUZCUlR0WlFVTnNRaXhKUVVGSkxHTkJRV003WjBKQlFVVXNZMEZCWXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU0zUlN4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1kwRkJZeXhGUVVGRkxFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRE8xbEJRM3BITEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc09FSkJRVzFDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMnhHTzFGQlJVUXNTVUZCU1N4alFVRmpMRVZCUVVVN1dVRkRhRUlzTmtKQlFYTkNMRU5CUVVNc1kwRkJZeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFsQlF6ZERMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zT0VKQlFXMUNMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOdVJTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1JVRkJSVHRuUWtGRGVFSXNTVUZCU1N4WFFVRlhPMjlDUVVGRkxGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8yZENRVU51UkN4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZkQlFWY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03WjBKQlEycEdMR2xEUVVGelFpeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1kwRkJZeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzJGQlF6ZEVPMU5CUTBvN1NVRkRUQ3hEUVVGRE8wbEJVMDhzYVVKQlFXbENPMUZCUTNKQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTnNRaXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlEyNUVMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRk8xbEJReTlETEVkQlFVY3NSVUZCUlN4VFFVRlRMRlZCUVZVN1owSkJRM0JDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWxCUVVrc1MwRkJTeXhYUVVGWExFbEJRVWtzU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUXl4VFFVRlRPMjlDUVVGRkxFOUJRVThzVTBGQlV5eERRVUZETzJkQ1FVTXpSU3hQUVVGUExHdENRVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMWxCUTNaRUxFTkJRVU03V1VGRFJDeEhRVUZITEVWQlFVVXNVMEZCVXl4VlFVRlZMRU5CUVVNc1RVRkJhVVE3WjBKQlEzUkZMRWxCUVVrc1NVRkJTU3hEUVVGRExFbEJRVWtzUzBGQlN5eFZRVUZWTEVsQlFVa3NTVUZCU1N4TFFVRkxMRWxCUVVrc1EwRkJReXhUUVVGVE8yOUNRVUZGTEU5QlFVODdaMEpCUTJoRkxHdENRVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEUxQlFVMHNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRaUVVONFJDeERRVUZETzFsQlEwUXNXVUZCV1N4RlFVRkZMRWxCUVVrN1dVRkRiRUlzVlVGQlZTeEZRVUZGTEVsQlFVazdVMEZEYmtJc1EwRkJReXhEUVVGRE8xRkJRMGdzVFVGQlRTeFhRVUZYTEVkQlFVY3NUMEZCVHl4RFFVRkRMSGRDUVVGM1FpeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQmRVSXNRMEZCUXp0UlFVTjJSeXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNN1VVRkRMMFFzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hYUVVGWExFTkJRVU1zUTBGQlF6dFJRVU0xUlN4NVFrRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNiVUpCUVcxQ0xFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdTVUZEYkVVc1EwRkJRenRKUVZsUExHbENRVUZwUWl4RFFVRkRMRTFCUVhOQ0xFVkJRVVVzVVVGQmJVSXNSVUZCUlN4TFFVRlZMRVZCUVVVc1ZVRkJjVUk3VVVGRGNFY3NUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhOUVVGTkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdVVUZEZWtNc1NVRkJTU3hWUVVGVkxFVkJRVVU3V1VGRFdpeFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzFOQlF6bEZPMUZCUTBRc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVONFF5eERRVUZETzBsQlYwOHNOa0pCUVRaQ0xFTkJRVU1zVFVGQll5eEZRVUZGTEVkQlFXTTdVVUZEYUVVc1NVRkJTU3hWUVVGVkxFZEJRVzFETEU5QlFVOHNRMEZCUXl4M1FrRkJkMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRMMFlzU1VGQlNTeFRRVUZUTEVkQlFXOURMRkZCUVZFc1EwRkJRenRSUVVNeFJDeEpRVUZKTEZOQlFWTXNSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRka0lzU1VGQlNTeE5RVUZOTEV0QlFXRXNTVUZCU1N4RFFVRkRMRk5CUVZNN1dVRkJSU3hUUVVGVExFZEJRVWNzVjBGQlZ5eERRVUZETzFGQlF5OUVMRTlCUVU4c1EwRkJReXhWUVVGVkxFVkJRVVU3V1VGRGFFSXNVMEZCVXl4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdXVUZETjBNc1NVRkJTU3hEUVVGRExGTkJRVk03WjBKQlFVVXNUVUZCVFR0WlFVTjBRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4TFFVRkxMR2xDUVVGcFFqdG5Ra0ZCUlN4VFFVRlRMRWRCUVVjc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0WlFVTnVSeXhWUVVGVkxFZEJRVWNzVDBGQlR5eERRVUZETEhkQ1FVRjNRaXhEUVVGRExGTkJRVk1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0VFFVTnFSVHRSUVVORUxFbEJRVWtzTUVKQlFUQkNMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRM1pETEVsQlFVa3NWVUZCVlN4RlFVRkZPMWxCUTFvc1NVRkJTU3hWUVVGVkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hMUVVGTExGbEJRVms3WjBKQlFVVXNNRUpCUVRCQ0xFZEJRVWNzU1VGQlNTeERRVUZETzFsQlF6bEdMRWxCUVVrc1ZVRkJWU3hEUVVGRExFZEJRVWNzU1VGQlNTeFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1MwRkJTeXhaUVVGWk8yZENRVUZGTERCQ1FVRXdRaXhIUVVGSExFbEJRVWtzUTBGQlF6dFRRVU5xUnp0UlFVTkVMRWxCUVVrc01FSkJRVEJDTEVWQlFVVTdXVUZETlVJc1RVRkJUU3hMUVVGTExFZEJRVWNzYzBKQlFWY3NRMEZCVFN4TlFVRk5MRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03V1VGRGJFUXNUVUZCVFN4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkRMMFFzU1VGQlNTeFJRVUZSTEVWQlFVVTdaMEpCUTFZc1NVRkJTU3hSUVVGUkxGbEJRVmtzUzBGQlN5eEZRVUZGTzI5Q1FVTXpRaXhWUVVGVkxFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJRenRwUWtGRGRrTTdPMjlDUVVGTkxGVkJRVlVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU03WVVGRGNFUTdVMEZEU2p0UlFVTkVMRTlCUVU4c1ZVRkJWU3hEUVVGRE8wbEJRM1JDTEVOQlFVTTdRMEZEU2p0QlFYQlJSQ3d3UWtGdlVVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBWYWx1ZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuZXhwb3J0cy5WYWx1ZUVycm9yID0gVmFsdWVFcnJvcjtcbmNsYXNzIFR5cGVFcnJvciBleHRlbmRzIEVycm9yIHtcbn1cbmV4cG9ydHMuVHlwZUVycm9yID0gVHlwZUVycm9yO1xuY2xhc3MgQ29uZmlndXJhdGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuZXhwb3J0cy5Db25maWd1cmF0aW9uRXJyb3IgPSBDb25maWd1cmF0aW9uRXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSWEp5YjNKekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXNhV0l2UlhKeWIzSnpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlQwRXNUVUZCWVN4VlFVRlhMRk5CUVZFc1MwRkJTenREUVVGSk8wRkJRWHBETEdkRFFVRjVRenRCUVZONlF5eE5RVUZoTEZOQlFWVXNVMEZCVVN4TFFVRkxPME5CUVVrN1FVRkJlRU1zT0VKQlFYZERPMEZCVlhoRExFMUJRV0VzYTBKQlFXMUNMRk5CUVZFc1MwRkJTenREUVVGSk8wRkJRV3BFTEdkRVFVRnBSQ0o5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgV2F0Y2hlZF8xID0gcmVxdWlyZShcIn5iZG8vbGliL1dhdGNoZWRcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3Qgb25fY2hhbmdlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwib24tY2hhbmdlXCIpKTtcbmNvbnN0IGxvZGFzaF8xID0gcmVxdWlyZShcImxvZGFzaFwiKTtcbmNsYXNzIEZpZWxkIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgICAgIHRoaXMuZmllbGRzID0gW107XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgfVxuICAgIGFkZEZpZWxkKGZpZWxkKSB7XG4gICAgICAgIGlmICh0aGlzLmZpZWxkcy5pbmNsdWRlcyhmaWVsZCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChmaWVsZC5vYmplY3QgJiYgZmllbGQub2JqZWN0LmlzQkRPTW9kZWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGFycmF5T2JqUHJveHkgPSB0aGlzLmdldEFycmF5T2JqZWN0UHJveHkoZmllbGQudmFsdWVPZigpKTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBhcnJheU9ialByb3h5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZCBpbnN0YW5jZW9mIFdhdGNoZWRfMS5XYXRjaGVkICYmIGZpZWxkLnN1Yk9iamVjdClcbiAgICAgICAgICAgIHRoaXMucmVkZWZpbmVWYWx1ZShmaWVsZC5zdWJPYmplY3QpO1xuICAgICAgICB0aGlzLnJlZGVmaW5lVmFsdWUoZmllbGQpO1xuICAgICAgICB0aGlzLmZpZWxkcy5wdXNoKGZpZWxkKTtcbiAgICB9XG4gICAgcmVtb3ZlRmllbGQoZmllbGQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkcy5pbmNsdWRlcyhmaWVsZCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChmaWVsZCBpbnN0YW5jZW9mIFdhdGNoZWRfMS5XYXRjaGVkICYmIGZpZWxkLnN1Yk9iamVjdClcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZVZhbHVlKGZpZWxkLnN1Yk9iamVjdCk7XG4gICAgICAgIHRoaXMucmVzdG9yZVZhbHVlKGZpZWxkKTtcbiAgICAgICAgdXRpbF8xLnJlbW92ZUVsZW1lbnRGcm9tQXJyYXkodGhpcy5maWVsZHMsIGZpZWxkKTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLmZpZWxkcylcbiAgICAgICAgICAgIGZpZWxkLnNldFZhbHVlKHZhbHVlKTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHJlZGVmaW5lVmFsdWUoZmllbGQpIHtcbiAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhKGZpZWxkLCBcInZhbHVlXCIsIGZpZWxkLnZhbHVlT2YoKSk7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGZpZWxkLCBcInZhbHVlXCIpO1xuICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KGZpZWxkLCBcInZhbHVlXCIsIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhhdC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHV0aWxfMS5nZXRQcm94eVRhcmdldCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGhhdFZhbHVlID0gdXRpbF8xLmdldFByb3h5VGFyZ2V0KHRoYXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdGhhdFZhbHVlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgdGhhdC52YWx1ZSA9IHRoYXQuZ2V0QXJyYXlPYmplY3RQcm94eSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlc3RvcmVWYWx1ZShmaWVsZCkge1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGZpZWxkLCBcInZhbHVlXCIpO1xuICAgICAgICBmaWVsZC5zZXRWYWx1ZSh1dGlsXzEuZ2V0UHJveHlUYXJnZXQodGhpcy52YWx1ZSkpO1xuICAgIH1cbiAgICBnZXRBcnJheU9iamVjdFByb3h5KHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5IHx8IGxvZGFzaF8xLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBvbl9jaGFuZ2VfMS5kZWZhdWx0LnRhcmdldCh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gb25fY2hhbmdlXzEuZGVmYXVsdCh2YWx1ZSwgKHBhdGgsIGNoYW5nZWRWYWx1ZSwgcHJldmlvdXNWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5maWVsZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQucHJveHlIYW5kbGVyKHBhdGgsIGNoYW5nZWRWYWx1ZSwgcHJldmlvdXNWYWx1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSbWxsYkdRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyeHBZaTlHYVdWc1pDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGSFFTdzRRMEZCTWtNN1FVRkZNME1zTUVOQlFYbEZPMEZCUTNwRkxHdEVRVUUyUkR0QlFVTTNSQ3hyUlVGQmFVTTdRVUZEYWtNc2JVTkJRV3RETzBGQlVXeERMRTFCUVdFc1MwRkJTenRKUVZWa0xGbEJRVmtzVFVGQlV5eEZRVUZGTEZGQlFWYzdVVUZHTVVJc1YwRkJUU3hIUVVGcFF5eEZRVUZGTEVOQlFVTTdVVUZIT1VNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZEY2tJc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTTdTVUZETjBJc1EwRkJRenRKUVVWTkxGRkJRVkVzUTBGQlF5eExRVUUwUWp0UlFVTjRReXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJRenRaUVVGRkxFOUJRVTg3VVVGRGVFTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hKUVVGbExFdEJRVXNzUTBGQlF5eE5RVUZQTEVOQlFVTXNWVUZCVlN4RlFVRkZPMWxCUTNKRUxFMUJRVTBzWVVGQllTeEhRVUZITEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOb1JTeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMR0ZCUVdFc1EwRkJRenRUUVVNNVFqdFJRVU5FTEVsQlFVa3NTMEZCU3l4WlFVRlpMR2xDUVVGUExFbEJRVWtzUzBGQlN5eERRVUZETEZOQlFWTTdXVUZCUlN4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0UlFVTnlSaXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXpGQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRelZDTEVOQlFVTTdTVUZGVFN4WFFVRlhMRU5CUVVNc1MwRkJORUk3VVVGRE0wTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXp0WlFVRkZMRTlCUVU4N1VVRkRla01zU1VGQlNTeExRVUZMTEZsQlFWa3NhVUpCUVU4c1NVRkJTU3hMUVVGTExFTkJRVU1zVTBGQlV6dFpRVUZGTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzFGQlEzQkdMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEZWtJc05rSkJRWE5DTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU12UXl4RFFVRkRPMGxCUlUwc1VVRkJVU3hEUVVGRExFdEJRV2RETzFGQlF6VkRMRXRCUVVzc1RVRkJUU3hMUVVGTExFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMDdXVUZCUlN4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF6TkVMRU5CUVVNN1NVRkZUU3hQUVVGUE8xRkJRMVlzVDBGQlR5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTNSQ0xFTkJRVU03U1VGRlR5eGhRVUZoTEVOQlFVTXNTMEZCTkVJN1VVRkRPVU1zYVVOQlFYTkNMRU5CUVZNc1MwRkJTeXhGUVVGRkxFOUJRVThzUlVGQlJTeExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOb1JTeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRiRUlzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGRrTXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhMUVVGTExFVkJRVVVzVDBGQlR5eEZRVUZGTzFsQlEyNURMRWRCUVVjN1owSkJRME1zVDBGQlR5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMWxCUTNSQ0xFTkJRVU03V1VGRFJDeEhRVUZITEVOQlFVTXNTMEZCVnp0blFrRkRXQ3hMUVVGTExFZEJRVWNzY1VKQlFXTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRuUWtGRE9VSXNUVUZCVFN4VFFVRlRMRWRCUVVjc2NVSkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1owSkJRemRETEVsQlFVa3NTMEZCU3l4TFFVRkxMRk5CUVZNN2IwSkJRVVVzVDBGQlR6dG5Ra0ZEYUVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdaMEpCUVVFc1EwRkJRenRaUVVOc1JDeERRVUZETzFsQlEwUXNXVUZCV1N4RlFVRkZMRWxCUVVrN1dVRkRiRUlzVlVGQlZTeEZRVUZGTEVsQlFVazdVMEZEYmtJc1EwRkJReXhEUVVGRE8wbEJRMUFzUTBGQlF6dEpRVVZQTEZsQlFWa3NRMEZCUXl4TFFVRTBRanRSUVVNM1F5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU4yUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExIRkNRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03U1VGREwwTXNRMEZCUXp0SlFVVlBMRzFDUVVGdFFpeERRVUZETEV0QlFWYzdVVUZEYmtNc1NVRkJTU3hMUVVGTExGbEJRVmtzUzBGQlN5eEpRVUZKTEdsQ1FVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRE0wTXNTMEZCU3l4SFFVRkhMRzFDUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUXk5Q0xFOUJRVThzYlVKQlFWRXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzV1VGQldTeEZRVUZGTEdGQlFXRXNSVUZCUlN4RlFVRkZPMmRDUVVONlJDeExRVUZMTEUxQlFVMHNTMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVU3YjBKQlF6ZENMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZSTEZsQlFWa3NSVUZCVVN4aFFVRmhMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03YVVKQlF6VkZPMWxCUTB3c1EwRkJReXhEUVVGRExFTkJRVU03VTBGRFRqdFJRVU5FTEU5QlFVOHNTMEZCU3l4RFFVRkRPMGxCUTJwQ0xFTkJRVU03UTBGRFNqdEJRVFZGUkN4elFrRTBSVU1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgTW9kaWZpY2F0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgdHlwZSA9IFwiZGVsZXRlXCIpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydHMuTW9kaWZpY2F0aW9uID0gTW9kaWZpY2F0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVFc5a2FXWnBZMkYwYVc5dUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXNhV0l2VFc5a2FXWnBZMkYwYVc5dUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCVVVFc1RVRkJZU3haUVVGWk8wbEJiVUp5UWl4WlFVRlpMRXRCUVZjc1JVRkJSU3hQUVVGeFFpeFJRVUZSTzFGQlEyeEVMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlEyNUNMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVTBzU1VGQlNTeERRVUZETzBsQlEzaENMRU5CUVVNN1NVRlJUU3hQUVVGUE8xRkJRMVlzVDBGQlR5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTNSQ0xFTkJRVU03U1VGUlRTeFJRVUZSTEVOQlFVTXNTMEZCVlR0UlFVTjBRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVTjJRaXhEUVVGRE8wTkJRMG83UVVFelEwUXNiME5CTWtOREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBNb2RpZmljYXRpb25fMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Nb2RpZmljYXRpb25cIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCBlbnZpcm9ubWVudF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZW52aXJvbm1lbnRcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgRXJyb3JzXzEgPSByZXF1aXJlKFwifmJkby9saWIvRXJyb3JzXCIpO1xuY29uc3Qgb25fY2hhbmdlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwib24tY2hhbmdlXCIpKTtcbmNvbnN0IGxvZGFzaF8xID0gcmVxdWlyZShcImxvZGFzaFwiKTtcbmNsYXNzIFByb3BlcnR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5LCBwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBjYXBpdGFsaXplZFByb3AgPSB1dGlsXzEudWNGaXJzdChwcm9wZXJ0eSk7XG4gICAgICAgIGNvbnN0IG9uVHlwZUNoZWNrRmFpbCA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfVR5cGVDaGVja0ZhaWxgO1xuICAgICAgICBjb25zdCBvblR5cGVDaGVjayA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfVR5cGVDaGVja2A7XG4gICAgICAgIGNvbnN0IG9uVHlwZUNoZWNrU3VjY2VzcyA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfVR5cGVDaGVja1N1Y2Nlc3NgO1xuICAgICAgICB0aGlzLm9uVHlwZUNoZWNrRmFpbCA9IHBhcmFtcyA/IHBhcmFtcy5vblR5cGVDaGVja0ZhaWwgfHwgb25UeXBlQ2hlY2tGYWlsIDogb25UeXBlQ2hlY2tGYWlsO1xuICAgICAgICB0aGlzLm9uVHlwZUNoZWNrID0gcGFyYW1zID8gcGFyYW1zLm9uVHlwZUNoZWNrIHx8IG9uVHlwZUNoZWNrIDogb25UeXBlQ2hlY2s7XG4gICAgICAgIHRoaXMub25UeXBlQ2hlY2tTdWNjZXNzID0gcGFyYW1zID8gcGFyYW1zLm9uVHlwZUNoZWNrU3VjY2VzcyB8fCBvblR5cGVDaGVja1N1Y2Nlc3MgOiBvblR5cGVDaGVja1N1Y2Nlc3M7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZG9TZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IHRoaXMucHJvcGVydHkudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKCF1dGlsXzEuaXNQcm94eSh2YWx1ZSkgJiYgdGhpcy5zYXZlSW5Mb2NhbFN0b3JhZ2UgJiYgbG9kYXNoXzEuaXNGdW5jdGlvbih0aGlzLm9iamVjdC5nZXROYW1lc3BhY2VkU3RvcmFnZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5vYmplY3QuZ2V0TmFtZXNwYWNlZFN0b3JhZ2Uoc3RyaW5nS2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHR5cGVHdWFyZCh2YWx1ZSkge1xuICAgICAgICBsZXQgdmFsdWVUb1Bhc3MgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kaWZpY2F0aW9uXzEuTW9kaWZpY2F0aW9uKVxuICAgICAgICAgICAgdmFsdWVUb1Bhc3MgPSB2YWx1ZS52YWx1ZU9mKCk7XG4gICAgICAgIGNvbnN0IGRlc2lnblR5cGUgPSBtZXRhZGF0YV8xLmdldERlc2lnblR5cGUodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkudG9TdHJpbmcoKSk7XG4gICAgICAgIGNvbnN0IHR5cGVFcnJvciA9IG5ldyBFcnJvcnNfMS5UeXBlRXJyb3IoYCR7dmFsdWVUb1Bhc3N9IGlzIG5vdCB0eXBlIG9mICR7ZGVzaWduVHlwZS5jbGFzc05hbWUgfHwgZGVzaWduVHlwZS5uYW1lfWApO1xuICAgICAgICBjb25zdCBpZHhTdHJ1Y3RPYmogPSB0aGlzLm9iamVjdDtcbiAgICAgICAgbGV0IGVycm9yO1xuICAgICAgICBpZiAoIXRoaXMubnVsbGFibGUgJiYgKHZhbHVlVG9QYXNzID09PSB1bmRlZmluZWQgfHwgdmFsdWVUb1Bhc3MgPT09IG51bGwpKVxuICAgICAgICAgICAgZXJyb3IgPSB0eXBlRXJyb3I7XG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgIGlmICh1dGlsXzEuaXNQcmltaXRpdmUodmFsdWVUb1Bhc3MpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZVRvUGFzcyAhPT0gZGVzaWduVHlwZS5uYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLm51bGxhYmxlIHx8ICEodmFsdWVUb1Bhc3MgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZVRvUGFzcyA9PT0gbnVsbCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IHR5cGVFcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghKHZhbHVlVG9QYXNzIGluc3RhbmNlb2YgZGVzaWduVHlwZSkpXG4gICAgICAgICAgICAgICAgZXJyb3IgPSB0eXBlRXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlcnJvciAmJiBsb2Rhc2hfMS5pc0Z1bmN0aW9uKGlkeFN0cnVjdE9ialt0aGlzLm9uVHlwZUNoZWNrXSkpXG4gICAgICAgICAgICBlcnJvciA9IGlkeFN0cnVjdE9ialt0aGlzLm9uVHlwZUNoZWNrXSh2YWx1ZVRvUGFzcyk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGxvZGFzaF8xLmlzRnVuY3Rpb24oaWR4U3RydWN0T2JqW3RoaXMub25UeXBlQ2hlY2tGYWlsXSkpIHtcbiAgICAgICAgICAgICAgICBpZHhTdHJ1Y3RPYmpbdGhpcy5vblR5cGVDaGVja0ZhaWxdKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxvZGFzaF8xLmlzRnVuY3Rpb24oaWR4U3RydWN0T2JqLm9uVHlwZUNoZWNrRmFpbCkpIHtcbiAgICAgICAgICAgICAgICBpZHhTdHJ1Y3RPYmoub25UeXBlQ2hlY2tGYWlsKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsb2Rhc2hfMS5pc0Z1bmN0aW9uKGlkeFN0cnVjdE9ialt0aGlzLm9uVHlwZUNoZWNrU3VjY2Vzc10pKVxuICAgICAgICAgICAgaWR4U3RydWN0T2JqW3RoaXMub25UeXBlQ2hlY2tTdWNjZXNzXSgpO1xuICAgICAgICByZXR1cm4gIShCb29sZWFuKGVycm9yKS52YWx1ZU9mKCkpO1xuICAgIH1cbiAgICBwcm94eUhhbmRsZXIoX3BhdGgsIF9jaGFuZ2VkVmFsLCBfcHJldlZhbCwgX2F0dHJSZWZsZWN0c1RvT2JqID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmRvU2V0VmFsdWUob25fY2hhbmdlXzEuZGVmYXVsdC50YXJnZXQodmFsdWUpLCBmYWxzZSk7XG4gICAgfVxuICAgIHNob3VsZERvU2V0VmFsdWUodmFsdWUsIHNraXBHdWFyZCA9IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiAhKHZhbHVlID09PSB0aGlzLm93blZhbHVlIHx8ICFza2lwR3VhcmQgJiYgIXRoaXMuZGlzYWJsZVR5cGVHdWFyZCAmJiAhdGhpcy50eXBlR3VhcmQodmFsdWUpKTtcbiAgICB9XG4gICAgZG9TZXRWYWx1ZSh2YWx1ZSwgbW9kaWZ5VmFsdWUgPSB0cnVlLCBza2lwR3VhcmQgPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkRG9TZXRWYWx1ZSh2YWx1ZSwgc2tpcEd1YXJkKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbGV0IHZhbHVlVG9QYXNzO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNb2RpZmljYXRpb25fMS5Nb2RpZmljYXRpb24pIHtcbiAgICAgICAgICAgIHZhbHVlVG9QYXNzID0gdmFsdWUudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHZhbHVlVG9QYXNzID0gdmFsdWU7XG4gICAgICAgIGlmIChtb2RpZnlWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgcHJveHlmaWVkID0gdGhpcy5wcm94eWZ5VmFsdWUodmFsdWVUb1Bhc3MpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHByb3h5ZmllZDtcbiAgICAgICAgICAgIHRoaXMub3duVmFsdWUgPSB2YWx1ZVRvUGFzcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zaG91bGRVcGRhdGVOc1N0b3JhZ2UoKSAmJiBsb2Rhc2hfMS5pc0Z1bmN0aW9uKHRoaXMub2JqZWN0LnNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKSkge1xuICAgICAgICAgICAgdGhpcy5vYmplY3Quc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2UodGhpcy5wcm9wZXJ0eS50b1N0cmluZygpLCB2YWx1ZVRvUGFzcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJveHlmeVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG9uX2NoYW5nZV8xLmRlZmF1bHQudGFyZ2V0KHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBvbl9jaGFuZ2VfMS5kZWZhdWx0KHZhbHVlLCAocGF0aCwgY2hhbmdlZFZhbCwgcHJldlZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3h5SGFuZGxlclJlcGxhY2VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJveHlIYW5kbGVyUmVwbGFjZW1lbnQocGF0aCwgY2hhbmdlZFZhbCwgcHJldlZhbCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJveHlIYW5kbGVyKHBhdGgsIGNoYW5nZWRWYWwsIHByZXZWYWwsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgc2hvdWxkVXBkYXRlTnNTdG9yYWdlKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2F2ZUluTG9jYWxTdG9yYWdlIHx8ICFlbnZpcm9ubWVudF8xLmlzQnJvd3NlcigpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSB0aGlzLnByb3BlcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGtleVNob3VsZEJlVXBkYXRlZCA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5vYmplY3QsIFwia2V5U2hvdWxkQmVVcGRhdGVkXCIpIHx8IHt9O1xuICAgICAgICBpZiAoa2V5U2hvdWxkQmVVcGRhdGVkW3N0cmluZ0tleV0pXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKGxvZGFzaF8xLmlzRnVuY3Rpb24odGhpcy5vYmplY3QuZ2V0TmFtZXNwYWNlZFN0b3JhZ2UpICYmXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5nZXROYW1lc3BhY2VkU3RvcmFnZShzdHJpbmdLZXkpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcy5vYmplY3QsIFwia2V5U2hvdWxkQmVVcGRhdGVkXCIsIE9iamVjdC5hc3NpZ24oa2V5U2hvdWxkQmVVcGRhdGVkLCB7IFtzdHJpbmdLZXldOiB0cnVlIH0pKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBCb29sZWFuKG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5vYmplY3QsIFwiY29uc3RydWN0aW9uQ29tcGxldGVcIikpO1xuICAgIH1cbn1cbmV4cG9ydHMuUHJvcGVydHkgPSBQcm9wZXJ0eTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVISnZjR1Z5ZEhrdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyeHBZaTlRY205d1pYSjBlUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkRRU3gzUkVGQmNVUTdRVUZEY2tRc2EwUkJRV2xHTzBGQlEycEdMSGRFUVVGdFJEdEJRVU51UkN3d1EwRkJaMFU3UVVGRGFFVXNORU5CUVRSRE8wRkJRelZETEd0RlFVRnBRenRCUVVOcVF5eHRRMEZCYjBNN1FVRXlSWEJETEUxQlFXRXNVVUZCVVR0SlFUWkdha0lzV1VGQldTeE5RVUZUTEVWQlFVVXNVVUZCVnl4RlFVRkZMRTFCUVhkQ08xRkJRM2hFTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRM0pDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRE8xRkJRM3BDTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzFGQlJUVkNMRTFCUVUwc1pVRkJaU3hIUVVGSExHTkJRVThzUTBGQlF5eFJRVUZyUWl4RFFVRkRMRU5CUVVNN1VVRkRjRVFzVFVGQlRTeGxRVUZsTEVkQlFVY3NTMEZCU3l4bFFVRmxMR1ZCUVdVc1EwRkJRenRSUVVNMVJDeE5RVUZOTEZkQlFWY3NSMEZCUnl4TFFVRkxMR1ZCUVdVc1YwRkJWeXhEUVVGRE8xRkJRM0JFTEUxQlFVMHNhMEpCUVd0Q0xFZEJRVWNzUzBGQlN5eGxRVUZsTEd0Q1FVRnJRaXhEUVVGRE8xRkJSV3hGTEVsQlFVa3NRMEZCUXl4bFFVRmxMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNaVUZCWlN4SlFVRkpMR1ZCUVdVc1EwRkJReXhEUVVGRExFTkJRVU1zWlVGQlpTeERRVUZETzFGQlF6VkdMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhKUVVGSkxGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUXpWRkxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4clFrRkJhMElzU1VGQlNTeHJRa0ZCYTBJc1EwRkJReXhEUVVGRExFTkJRVU1zYTBKQlFXdENMRU5CUVVNN1NVRkROVWNzUTBGQlF6dEpRVk5OTEZGQlFWRXNRMEZCUXl4TFFVRm5RenRSUVVNMVF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU5xUXl4RFFVRkRPMGxCVlUwc1QwRkJUenRSUVVOV0xFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRk0wTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dFJRVVYyUWl4SlFVRkpMRU5CUVVNc1kwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzU1VGQlNTeHRRa0ZCVlN4RFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGUExFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1JVRkJSVHRaUVVOdVJ5eExRVUZMTEVkQlFWTXNTVUZCU1N4RFFVRkRMRTFCUVU4c1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRUUVVNNVJEdFJRVU5FTEU5QlFVOHNTMEZCU3l4RFFVRkRPMGxCUTJwQ0xFTkJRVU03U1VGVlRTeFRRVUZUTEVOQlFVTXNTMEZCWjBNN1VVRkROME1zU1VGQlNTeFhRVUZYTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTNoQ0xFbEJRVWtzUzBGQlN5eFpRVUZaTERKQ1FVRlpPMWxCUVVVc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0UlFVVnFSU3hOUVVGTkxGVkJRVlVzUjBGQlJ5eDNRa0ZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRM2hGTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc2EwSkJRVk1zUTBGQlF5eEhRVUZITEZkQlFWY3NiVUpCUVcxQ0xGVkJRVlVzUTBGQlF5eFRRVUZUTEVsQlFVa3NWVUZCVlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRE5VY3NUVUZCVFN4WlFVRlpMRWRCUVcxQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZGYWtRc1NVRkJTU3hMUVVGTExFTkJRVU03VVVGRlZpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1NVRkJTU3hEUVVGRExGZEJRVmNzUzBGQlN5eFRRVUZUTEVsQlFVa3NWMEZCVnl4TFFVRkxMRWxCUVVrc1EwRkJRenRaUVVGRkxFdEJRVXNzUjBGQlJ5eFRRVUZUTEVOQlFVTTdVVUZGTjBZc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJUdFpRVU5TTEVsQlFVa3NhMEpCUVZjc1EwRkJReXhYUVVGWExFTkJRVU1zUlVGQlJUdG5Ra0ZETVVJc1NVRkJTU3hQUVVGUExGZEJRVmNzUzBGQlN5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hGUVVGRk8yOUNRVU4wUkN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzU1VGQlNTeERRVUZETEVOQlFVTXNWMEZCVnl4TFFVRkxMRk5CUVZNc1NVRkJTU3hYUVVGWExFdEJRVXNzU1VGQlNTeERRVUZETzNkQ1FVRkZMRXRCUVVzc1IwRkJSeXhUUVVGVExFTkJRVU03YVVKQlEycEhPMkZCUTBvN2FVSkJRVTBzU1VGQlNTeERRVUZETEVOQlFVTXNWMEZCVnl4WlFVRlpMRlZCUVZVc1EwRkJRenRuUWtGQlJTeExRVUZMTEVkQlFVY3NVMEZCVXl4RFFVRkRPMU5CUTNSRk8xRkJSMFFzU1VGQlNTeERRVUZETEV0QlFVc3NTVUZCU1N4dFFrRkJWU3hEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkJSU3hMUVVGTExFZEJRVWNzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFJRVWM1Unl4SlFVRkpMRXRCUVVzc1JVRkJSVHRaUVVOUUxFbEJRVWtzYlVKQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETEVWQlFVVTdaMEpCUTJoRUxGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03WVVGRE4wTTdhVUpCUVUwc1NVRkJTU3h0UWtGQlZTeERRVUZETEZsQlFWa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1JVRkJSVHRuUWtGRGFrUXNXVUZCV1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dGhRVU4yUXpzN1owSkJRVTBzVFVGQlRTeExRVUZMTEVOQlFVTTdVMEZEZEVJN1lVRkJUU3hKUVVGSkxHMUNRVUZWTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMWxCUVVVc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhGUVVGRkxFTkJRVU03VVVGRGRFY3NUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRka01zUTBGQlF6dEpRVTlOTEZsQlFWa3NRMEZCUXl4TFFVRmpMRVZCUVVVc1YwRkJhMElzUlVGQlJTeFJRVUZsTEVWQlFVVXNjVUpCUVRoQ0xFbEJRVWs3VVVGRGRrY3NUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dFJRVU42UWl4SlFVRkpMRXRCUVVzc1MwRkJTeXhUUVVGVExFbEJRVWtzUzBGQlN5eExRVUZMTEVsQlFVazdXVUZCUlN4UFFVRlBPMUZCUTJ4RUxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNiVUpCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRia1FzUTBGQlF6dEpRVlZOTEdkQ1FVRm5RaXhEUVVGRExFdEJRV2RETEVWQlFVVXNXVUZCY1VJc1MwRkJTenRSUVVOb1JpeFBRVUZQTEVOQlFVTXNRMEZCUXl4TFFVRkxMRXRCUVVzc1NVRkJTU3hEUVVGRExGRkJRVkVzU1VGQlNTeERRVUZETEZOQlFWTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjRSeXhEUVVGRE8wbEJXVk1zVlVGQlZTeERRVUZETEV0QlFXZERMRVZCUVVVc1kwRkJkVUlzU1VGQlNTeEZRVUZGTEZsQlFYRkNMRXRCUVVzN1VVRkRNVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRPMWxCUVVVc1QwRkJUenRSUVVOeVJDeEpRVUZKTEZkQlFUWkNMRU5CUVVNN1VVRkRiRU1zU1VGQlNTeExRVUZMTEZsQlFWa3NNa0pCUVZrc1JVRkJSVHRaUVVNdlFpeFhRVUZYTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xTkJRMnBET3p0WlFVRk5MRmRCUVZjc1IwRkJSeXhMUVVGTExFTkJRVU03VVVGRE0wSXNTVUZCU1N4WFFVRlhMRVZCUVVVN1dVRkRZaXhOUVVGTkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xbEJRMnBFTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1UwRkJVeXhEUVVGRE8xbEJRM1pDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1YwRkJWeXhEUVVGRE8xTkJReTlDTzFGQlEwUXNTVUZCU1N4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVWQlFVVXNTVUZCU1N4dFFrRkJWU3hEUVVGclFpeEpRVUZKTEVOQlFVTXNUVUZCVHl4RFFVRkRMREJDUVVFd1FpeERRVUZETEVWQlFVVTdXVUZEY2tZc1NVRkJTU3hEUVVGRExFMUJRVThzUTBGQlF5d3dRa0ZCTUVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRmRCUVZjc1EwRkJReXhEUVVGRE8xTkJRMjVITzBsQlEwd3NRMEZCUXp0SlFWVlRMRmxCUVZrc1EwRkJReXhMUVVGWk8xRkJReTlDTEVsQlFVa3NTMEZCU3l4WlFVRlpMRXRCUVVzc1JVRkJSVHRaUVVONFFpeExRVUZMTEVkQlFVY3NiVUpCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZETDBJc1QwRkJUeXh0UWtGQlVTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hWUVVGVkxFVkJRVVVzVDBGQlR5eEZRVUZGTEVWQlFVVTdaMEpCUTJwRUxFbEJRVWtzU1VGQlNTeERRVUZETEhWQ1FVRjFRaXhGUVVGRk8yOUNRVU01UWl4SlFVRkpMRU5CUVVNc2RVSkJRWFZDTEVOQlFVTXNTVUZCU1N4RlFVRlJMRlZCUVZVc1JVRkJVU3hQUVVGUExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdhVUpCUXpsRk96dHZRa0ZCVFN4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUlVGQlVTeFZRVUZWTEVWQlFWRXNUMEZCVHl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJRek5GTEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTA0N1VVRkRSQ3hQUVVGUExFdEJRVXNzUTBGQlF6dEpRVU5xUWl4RFFVRkRPMGxCVTFNc2NVSkJRWEZDTzFGQlF6TkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRWxCUVVrc1EwRkJReXgxUWtGQlV5eEZRVUZGTzFsQlFVVXNUMEZCVHl4TFFVRkxMRU5CUVVNN1VVRkRNMFFzVFVGQlRTeFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVU16UXl4TlFVRk5MR3RDUVVGclFpeEhRVUZITEhOQ1FVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeHZRa0ZCYjBJc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU5vUml4SlFVRkpMR3RDUVVGclFpeERRVUZETEZOQlFWTXNRMEZCUXp0WlFVRkZMRTlCUVU4c1NVRkJTU3hEUVVGRE8xRkJReTlETEVsQlFVa3NiVUpCUVZVc1EwRkJhMElzU1VGQlNTeERRVUZETEUxQlFVOHNRMEZCUXl4dlFrRkJiMElzUTBGQlF6dFpRVU0zUXl4SlFVRkpMRU5CUVVNc1RVRkJUeXhEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExGTkJRVk1zUlVGQlJUdFpRVU0zUlN4NVFrRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNiMEpCUVc5Q0xFVkJRVVVzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4clFrRkJhMElzUlVGQlJTeEZRVUZGTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkhMRTlCUVU4c1NVRkJTU3hEUVVGRE8xTkJRMlk3VVVGRFJDeFBRVUZQTEU5QlFVOHNRMEZCUXl4elFrRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNjMEpCUVhOQ0xFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzSkZMRU5CUVVNN1EwRkRTanRCUVRWUlJDdzBRa0UwVVVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBNb2RpZmljYXRpb25fMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Nb2RpZmljYXRpb25cIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3Qgb25fY2hhbmdlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwib24tY2hhbmdlXCIpKTtcbmNvbnN0IGNsb25lX2RlZXBfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJjbG9uZS1kZWVwXCIpKTtcbmNvbnN0IGxvZGFzaF8xID0gcmVxdWlyZShcImxvZGFzaFwiKTtcbmNsYXNzIFdhdGNoZWQge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHksIHBhcmFtcykge1xuICAgICAgICB0aGlzLmlzU2hhbGxvdyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgY29uc3QgY2FwaXRhbGl6ZWRQcm9wID0gdXRpbF8xLnVjRmlyc3QocHJvcGVydHkpO1xuICAgICAgICBjb25zdCBvbkluaXRGdW5jID0gYG9uJHtjYXBpdGFsaXplZFByb3B9SW5pdGA7XG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlRnVuYyA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfUNoYW5nZWA7XG4gICAgICAgIGNvbnN0IG9uQWRkRnVuYyA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfUFkZGA7XG4gICAgICAgIGNvbnN0IG9uUmVtb3ZlRnVuYyA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfVJlbW92ZWA7XG4gICAgICAgIHRoaXMub25Jbml0ID0gcGFyYW1zID8gcGFyYW1zLm9uSW5pdCB8fCBvbkluaXRGdW5jIDogb25Jbml0RnVuYztcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHBhcmFtcyA/IHBhcmFtcy5vbkNoYW5nZSB8fCBvbkNoYW5nZUZ1bmMgOiBvbkNoYW5nZUZ1bmM7XG4gICAgICAgIHRoaXMub25BZGQgPSBwYXJhbXMgPyBwYXJhbXMub25BZGQgfHwgb25BZGRGdW5jIDogb25BZGRGdW5jO1xuICAgICAgICB0aGlzLm9uUmVtb3ZlID0gcGFyYW1zID8gcGFyYW1zLm9uUmVtb3ZlIHx8IG9uUmVtb3ZlRnVuYyA6IG9uUmVtb3ZlRnVuYztcbiAgICAgICAgdGhpcy5pc1NoYWxsb3cgPSBwYXJhbXMgPyBCb29sZWFuKHBhcmFtcy5pc1NoYWxsb3cpIDogZmFsc2U7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5zaG91bGREb1NldFZhbHVlKHZhbHVlKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3Qgb2xkVmFsID0gY2xvbmVfZGVlcF8xLmRlZmF1bHQodGhpcy5vd25WYWx1ZSk7XG4gICAgICAgIGxldCB2YWx1ZVRvUGFzcztcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kaWZpY2F0aW9uXzEuTW9kaWZpY2F0aW9uKSB7XG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHZhbHVlO1xuICAgICAgICBsZXQgdXNlVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kaWZpY2F0aW9uXzEuTW9kaWZpY2F0aW9uKSB7XG4gICAgICAgICAgICB2YWx1ZS5zZXRWYWx1ZSh2YWx1ZVRvUGFzcyk7XG4gICAgICAgICAgICB1c2VWYWx1ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWVUb1NldCA9IHVzZVZhbHVlID8gdmFsdWUgOiB2YWx1ZVRvUGFzcztcbiAgICAgICAgaWYgKHRoaXMuc3ViT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnN1Yk9iamVjdC5zZXRWYWx1ZSh2YWx1ZVRvU2V0KTtcbiAgICAgICAgICAgIHRoaXMub3duVmFsdWUgPSB1dGlsXzEuZ2V0UHJveHlUYXJnZXQodGhpcy5zdWJPYmplY3QudmFsdWVPZigpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlVG9QYXNzID0gdGhpcy5wcm94eWZ5VmFsdWUodmFsdWVUb1Bhc3MpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlVG9QYXNzO1xuICAgICAgICAgICAgdGhpcy5vd25WYWx1ZSA9IHV0aWxfMS5nZXRQcm94eVRhcmdldCh2YWx1ZVRvUGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWR4U3RydWN0T2JqID0gdGhpcy5vYmplY3Q7XG4gICAgICAgIGlmIChsb2Rhc2hfMS5pc0Z1bmN0aW9uKGlkeFN0cnVjdE9ialt0aGlzLm9uQ2hhbmdlXSkgJiYgdGhpcy5pc0luaXRpYWxpemVkKVxuICAgICAgICAgICAgaWR4U3RydWN0T2JqW3RoaXMub25DaGFuZ2VdKG9sZFZhbCk7XG4gICAgICAgIGlmIChsb2Rhc2hfMS5pc0Z1bmN0aW9uKGlkeFN0cnVjdE9ialt0aGlzLm9uSW5pdF0pICYmICF0aGlzLmlzSW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICBpZHhTdHJ1Y3RPYmpbdGhpcy5vbkluaXRdKHZhbHVlVG9QYXNzKTtcbiAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViT2JqZWN0KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ViT2JqZWN0LnZhbHVlT2YoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHNldFN1Yk9iamVjdChzdWJPYmplY3QpIHtcbiAgICAgICAgc3ViT2JqZWN0LnByb3h5SGFuZGxlclJlcGxhY2VtZW50ID0gdGhpcy5wcm94eUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdWJPYmplY3QgPSBzdWJPYmplY3Q7XG4gICAgfVxuICAgIHByb3h5SGFuZGxlcihwYXRoLCBjaGFuZ2VkVmFsLCBwcmV2VmFsLCBhdHRyUmVmbGVjdHNUb09iaiA9IHRydWUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViT2JqZWN0KVxuICAgICAgICAgICAgdGhpcy5zdWJPYmplY3QucHJveHlIYW5kbGVyKHBhdGgsIGNoYW5nZWRWYWwsIHByZXZWYWwsIGF0dHJSZWZsZWN0c1RvT2JqKTtcbiAgICAgICAgY29uc3QgbmV3S2V5cyA9IE9iamVjdC5rZXlzKGNoYW5nZWRWYWwpO1xuICAgICAgICBjb25zdCBvbGRLZXlzID0gT2JqZWN0LmtleXMocHJldlZhbCk7XG4gICAgICAgIGNvbnN0IG5ld0xlbiA9IG5ld0tleXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBvbGRMZW4gPSBvbGRLZXlzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5jYXNlRGV0ZWN0RXhlYyh7XG4gICAgICAgICAgICBsZW4xOiBuZXdMZW4sXG4gICAgICAgICAgICBsZW4yOiBvbGRMZW4sXG4gICAgICAgICAgICBmdW5jOiB0aGlzLm9uQWRkLFxuICAgICAgICAgICAga2V5czE6IG5ld0tleXMsXG4gICAgICAgICAgICBrZXlzMjogb2xkS2V5cyxcbiAgICAgICAgICAgIGNoYW5nZWRWYWwsXG4gICAgICAgICAgICBwYXRoXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhc2VEZXRlY3RFeGVjKHtcbiAgICAgICAgICAgIGxlbjE6IG9sZExlbixcbiAgICAgICAgICAgIGxlbjI6IG5ld0xlbixcbiAgICAgICAgICAgIGZ1bmM6IHRoaXMub25SZW1vdmUsXG4gICAgICAgICAgICBrZXlzMTogb2xkS2V5cyxcbiAgICAgICAgICAgIGtleXMyOiBuZXdLZXlzLFxuICAgICAgICAgICAgY2hhbmdlZFZhbCxcbiAgICAgICAgICAgIHBhdGhcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChuZXdMZW4gPT09IG9sZExlbiAmJiB0aGlzLm9uQ2hhbmdlIGluIHRoaXMgJiYgdGhpcy5pc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICB0aGlzLm9iamVjdFt0aGlzLm9uQ2hhbmdlXShjaGFuZ2VkVmFsLCBwYXRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaG91bGREb1NldFZhbHVlKHZhbHVlLCBza2lwR3VhcmQgPSBmYWxzZSkge1xuICAgICAgICBpZiAodGhpcy5zdWJPYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1Yk9iamVjdC5zaG91bGREb1NldFZhbHVlKHZhbHVlLCBza2lwR3VhcmQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiAodmFsdWUgIT09IHRoaXMub3duVmFsdWUpO1xuICAgIH1cbiAgICBwcm94eWZ5VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gb25fY2hhbmdlXzEuZGVmYXVsdC50YXJnZXQodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIG9uX2NoYW5nZV8xLmRlZmF1bHQodmFsdWUsIChwYXRoLCBjaGFuZ2VkVmFsdWUsIHByZXZpb3VzVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3h5SGFuZGxlcihwYXRoLCBjaGFuZ2VkVmFsdWUsIHByZXZpb3VzVmFsdWUpO1xuICAgICAgICAgICAgfSwgeyBpc1NoYWxsb3c6IHRoaXMuaXNTaGFsbG93IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY2FzZURldGVjdEV4ZWMoY2RQYXJhbXMpIHtcbiAgICAgICAgaWYgKGNkUGFyYW1zLmxlbjEgPiBjZFBhcmFtcy5sZW4yICYmIGNkUGFyYW1zLmZ1bmMgaW4gdGhpcy5vYmplY3QpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbW9kaWZpZWQgb2YgY2RQYXJhbXMua2V5czEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNkUGFyYW1zLmtleXMyLmluY2x1ZGVzKG1vZGlmaWVkKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iamVjdFtjZFBhcmFtcy5mdW5jXSgoY2RQYXJhbXMuY2hhbmdlZFZhbClbbW9kaWZpZWRdLCBjZFBhcmFtcy5wYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5XYXRjaGVkID0gV2F0Y2hlZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVYyRjBZMmhsWkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmJHbGlMMWRoZEdOb1pXUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlJVRXNkMFJCUVhGRU8wRkJRM0pFTERCRFFVRXdSRHRCUVVNeFJDeHJSVUZCYVVNN1FVRkRha01zYjBWQlFXMURPMEZCUTI1RExHMURRVUZ2UXp0QlFUaEljRU1zVFVGQllTeFBRVUZQTzBsQmNVZG9RaXhaUVVGWkxFMUJRVk1zUlVGQlJTeFJRVUZYTEVWQlFVVXNUVUZCZFVJN1VVRm9RM0JFTEdOQlFWTXNSMEZCV1N4TFFVRkxMRU5CUVVNN1VVRTRRbmhDTEd0Q1FVRmhMRWRCUVZrc1MwRkJTeXhEUVVGRE8xRkJSM0pETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRM0pDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRE8xRkJSWHBDTEUxQlFVMHNaVUZCWlN4SFFVRkhMR05CUVU4c1EwRkJReXhSUVVGclFpeERRVUZETEVOQlFVTTdVVUZGY0VRc1RVRkJUU3hWUVVGVkxFZEJRVWNzUzBGQlN5eGxRVUZsTEUxQlFVMHNRMEZCUXp0UlFVTTVReXhOUVVGTkxGbEJRVmtzUjBGQlJ5eExRVUZMTEdWQlFXVXNVVUZCVVN4RFFVRkRPMUZCUTJ4RUxFMUJRVTBzVTBGQlV5eEhRVUZITEV0QlFVc3NaVUZCWlN4TFFVRkxMRU5CUVVNN1VVRkROVU1zVFVGQlRTeFpRVUZaTEVkQlFVY3NTMEZCU3l4bFFVRmxMRkZCUVZFc1EwRkJRenRSUVVWc1JDeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNTVUZCU1N4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExGVkJRVlVzUTBGQlF6dFJRVU5vUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1NVRkJTU3haUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEZsQlFWa3NRMEZCUXp0UlFVTjRSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJRenRSUVVNMVJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNTVUZCU1N4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExGbEJRVmtzUTBGQlF6dFJRVVY0UlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTJoRkxFTkJRVU03U1VGVlRTeFJRVUZSTEVOQlFVTXNTMEZCWjBNN1VVRkROVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZCUlN4UFFVRlBPMUZCUnpGRExFMUJRVTBzVFVGQlRTeEhRVUZITEc5Q1FVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlJYaERMRWxCUVVrc1YwRkJOa0lzUTBGQlF6dFJRVU5zUXl4SlFVRkpMRXRCUVVzc1dVRkJXU3d5UWtGQldTeEZRVUZGTzFsQlF5OUNMRmRCUVZjc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdVMEZEYWtNN08xbEJRVTBzVjBGQlZ5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVY3pRaXhKUVVGSkxGRkJRVkVzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZEY2tJc1NVRkJTU3hMUVVGTExGbEJRVmtzTWtKQlFWa3NSVUZCUlR0WlFVTXZRaXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMWxCUXpWQ0xGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVMEZEYmtJN1VVRkZSQ3hOUVVGTkxGVkJRVlVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETzFGQlJXeEVMRWxCUVVrc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJUdFpRVU5vUWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0WlFVTndReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEhGQ1FVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpWRU8yRkJRVTA3V1VGRlNDeFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFpRVU0zUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExGZEJRVmNzUTBGQlF6dFpRVU42UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExIRkNRVUZqTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1UwRkRMME03VVVGRlJDeE5RVUZOTEZsQlFWa3NSMEZCYlVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVVZxUkN4SlFVRkpMRzFDUVVGVkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eGhRVUZoTzFsQlFVVXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVVjJSeXhKUVVGSkxHMUNRVUZWTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVdFN1dVRkJSU3haUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xRkJRM3BITEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1NVRkJTU3hEUVVGRE8wbEJRemxDTEVOQlFVTTdTVUZWVFN4UFFVRlBPMUZCUTFZc1NVRkJTU3hKUVVGSkxFTkJRVU1zVTBGQlV6dFpRVUZGTEU5QlFVOHNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dFJRVU53UkN4UFFVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03U1VGRGRFSXNRMEZCUXp0SlFWVk5MRmxCUVZrc1EwRkJReXhUUVVFeVF6dFJRVU16UkN4VFFVRlRMRU5CUVVNc2RVSkJRWFZDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEYWtVc1NVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eFRRVUZUTEVOQlFVTTdTVUZETDBJc1EwRkJRenRKUVZWTkxGbEJRVmtzUTBGQlF5eEpRVUZaTEVWQlFVVXNWVUZCWjBJc1JVRkJSU3hQUVVGaExFVkJRVVVzYjBKQlFUWkNMRWxCUVVrN1VVRkRhRWNzU1VGQlNTeEpRVUZKTEVOQlFVTXNVMEZCVXp0WlFVRkZMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NSVUZCUlN4VlFVRlZMRVZCUVVVc1QwRkJUeXhGUVVGRkxHbENRVUZwUWl4RFFVRkRMRU5CUVVNN1VVRkRPVVlzVFVGQlRTeFBRVUZQTEVkQlFVY3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVU40UXl4TlFVRk5MRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUTNKRExFMUJRVTBzVFVGQlRTeEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRPVUlzVFVGQlRTeE5RVUZOTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVjNVFpeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRPMWxCUTJoQ0xFbEJRVWtzUlVGQlJTeE5RVUZOTzFsQlExb3NTVUZCU1N4RlFVRkZMRTFCUVUwN1dVRkRXaXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVczdXVUZEYUVJc1MwRkJTeXhGUVVGRkxFOUJRVTg3V1VGRFpDeExRVUZMTEVWQlFVVXNUMEZCVHp0WlFVTmtMRlZCUVZVN1dVRkRWaXhKUVVGSk8xTkJRMUFzUTBGQlF5eERRVUZETzFGQlJVZ3NTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJRenRaUVVOb1FpeEpRVUZKTEVWQlFVVXNUVUZCVFR0WlFVTmFMRWxCUVVrc1JVRkJSU3hOUVVGTk8xbEJRMW9zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJPMWxCUTI1Q0xFdEJRVXNzUlVGQlJTeFBRVUZQTzFsQlEyUXNTMEZCU3l4RlFVRkZMRTlCUVU4N1dVRkRaQ3hWUVVGVk8xbEJRMVlzU1VGQlNUdFRRVU5RTEVOQlFVTXNRMEZCUXp0UlFVVklMRWxCUVVrc1RVRkJUU3hMUVVGTExFMUJRVTBzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4SlFVRkpMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zWVVGQllTeEZRVUZGTzFsQlEycEVMRWxCUVVrc1EwRkJReXhOUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRlZCUVZVc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU5zUlR0SlFVTk1MRU5CUVVNN1NVRlZUU3huUWtGQlowSXNRMEZCUXl4TFFVRm5ReXhGUVVGRkxGbEJRWEZDTEV0QlFVczdVVUZEYUVZc1NVRkJTU3hKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTzFsQlEyaENMRTlCUVU4c1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhMUVVGTExFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdVMEZETlVRN08xbEJRVTBzVDBGQlR5eERRVUZETEV0QlFVc3NTMEZCU3l4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03U1VGRE5VTXNRMEZCUXp0SlFWZFBMRmxCUVZrc1EwRkJReXhMUVVGWk8xRkJRemRDTEVsQlFVa3NTMEZCU3l4WlFVRlpMRXRCUVVzc1JVRkJSVHRaUVVONFFpeExRVUZMTEVkQlFVY3NiVUpCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZETDBJc1QwRkJUeXh0UWtGQlVTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3haUVVGWkxFVkJRVVVzWVVGQllTeEZRVUZGTEVWQlFVVTdaMEpCUTNwRUxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRlJMRmxCUVZrc1JVRkJVU3hoUVVGaExFTkJRVU1zUTBGQlF6dFpRVU55UlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRja003VVVGRFJDeFBRVUZQTEV0QlFVc3NRMEZCUXp0SlFVTnFRaXhEUVVGRE8wbEJVMDhzWTBGQll5eERRVUZETEZGQlFUSkNPMUZCUXpsRExFbEJRVWtzVVVGQlVTeERRVUZETEVsQlFVa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1NVRkJTU3hKUVVGSkxGRkJRVkVzUTBGQlF5eEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSVHRaUVVNdlJDeExRVUZMTEUxQlFVMHNVVUZCVVN4SlFVRkpMRkZCUVZFc1EwRkJReXhMUVVGTExFVkJRVVU3WjBKQlEyNURMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSVHR2UWtGRE9VSXNTVUZCU1N4RFFVRkRMRTFCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVTBzVVVGQlVTeERRVUZETEVWQlFVVXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yOUNRVU4yUml4TlFVRk5PMmxDUVVOVU8yRkJRMG83VTBGRFNqdEpRVU5NTEVOQlFVTTdRMEZEU2p0QlFUTlNSQ3d3UWtFeVVrTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmZ1bmN0aW9uIEJET1Rlc3RGYWN0b3J5KGN0b3IpIHtcbiAgICBsZXQgQkRPVGVzdCA9IGNsYXNzIEJET1Rlc3QgZXh0ZW5kcyBjdG9yIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9ICd0ZXN0JztcbiAgICAgICAgICAgIHRoaXMudGVzdGVyID0gW107XG4gICAgICAgIH1cbiAgICAgICAgb25UZXN0Q2hhbmdlKGNoYW5nZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVzdCBjaGFuZ2VkXCIsIGNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIG9uVGVzdGVySW5pdChpbml0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RlciBpbml0XCIsIGluaXQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIG9uVGVzdGVyQ2hhbmdlKGNoYW5nZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIGNoYW5nZWRcIiwgY2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgb25UZXN0ZXJBZGQoYWRkZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIGFkZGVkXCIsIGFkZGVkLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBvblRlc3RlclJlbW92ZShyZW1vdmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RlciByZW1vdmVkXCIsIHJlbW92ZWQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBCRE9UZXN0LnByb3RvdHlwZSwgXCJ0aXRsZVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS53YXRjaGVkKCksIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoKF90eXBlKSA9PiBbU3RyaW5nXSksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEFycmF5KVxuICAgIF0sIEJET1Rlc3QucHJvdG90eXBlLCBcInRlc3RlclwiLCB2b2lkIDApO1xuICAgIEJET1Rlc3QgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKHsgaXNBYnN0cmFjdDogdHJ1ZSwgY29sbGVjdGlvbk5hbWU6IFwiQkRPVGVzdFwiIH0pXG4gICAgXSwgQkRPVGVzdCk7XG4gICAgcmV0dXJuIEJET1Rlc3Q7XG59XG5leHBvcnRzLkJET1Rlc3RGYWN0b3J5ID0gQkRPVGVzdEZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQVkdWemRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiVzlrWld4ekwwSkVUMVJsYzNRdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc2MwUkJRVFJGTzBGQlZUVkZMRk5CUVdkQ0xHTkJRV01zUTBGQmMwTXNTVUZCVnp0SlFWTXpSU3hKUVVGbExFOUJRVThzUjBGQmRFSXNUVUZCWlN4UFFVRlJMRk5CUVZFc1NVRkJTVHRSUVVGdVF6czdXVUZSZDBJc1ZVRkJTeXhIUVVGWExFMUJRVTBzUTBGQlF6dFpRVkZQTEZkQlFVMHNSMEZCWVN4RlFVRkZMRU5CUVVNN1VVRjVSRFZGTEVOQlFVTTdVVUZvUkdFc1dVRkJXU3hEUVVGRExFOUJRWFZDTzFsQlF6RkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zWTBGQll5eEZRVUZGTEU5QlFVOHNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNdlF5eERRVUZETzFGQlUxTXNXVUZCV1N4RFFVRkRMRWxCUVc5Q08xbEJRM1pETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1lVRkJZU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTXpReXhEUVVGRE8xRkJVMU1zWTBGQll5eERRVUZETEU5QlFYVkNPMWxCUXpWRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTJwRUxFTkJRVU03VVVGVFV5eFhRVUZYTEVOQlFVTXNTMEZCY1VJN1dVRkRka01zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4alFVRmpMRVZCUVVVc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlF6ZERMRU5CUVVNN1VVRlRVeXhqUVVGakxFTkJRVU1zVDBGQmRVSTdXVUZETlVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3hQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEYWtRc1EwRkJRenRMUVVWS0xFTkJRVUU3U1VGcVJXZENPMUZCUVZvc2MwSkJRVk1zUlVGQlJUczdNRU5CUVN0Q08wbEJVVUU3VVVGQk1VTXNiMEpCUVU4c1JVRkJSU3hGUVVGRkxITkNRVUZUTEVOQlFVTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdPekpEUVVFNFFqdEpRV2hDTjBRc1QwRkJUenRSUVVSeVFpdzBRa0ZCWlN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFbEJRVWtzUlVGQlJTeGpRVUZqTEVWQlFVVXNVMEZCVXl4RlFVRkZMRU5CUVVNN1QwRkRiRVFzVDBGQlR5eERRWGxGY2tJN1NVRkRSQ3hQUVVGUExFOUJRVThzUTBGQlF6dEJRVVZ1UWl4RFFVRkRPMEZCY2taRUxIZERRWEZHUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5mdW5jdGlvbiBCRE9UZXN0MUZhY3RvcnkoY3Rvcikge1xuICAgIGxldCBCRE9UZXN0MSA9IGNsYXNzIEJET1Rlc3QxIGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGRvU29tZXRoaW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwibG9sXCI7XG4gICAgICAgIH1cbiAgICAgICAgb25PaGFJbml0KF92YWx1ZSkge1xuICAgICAgICB9XG4gICAgfTtcbiAgICBCRE9UZXN0MSA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoeyBpc0Fic3RyYWN0OiB0cnVlLCBjb2xsZWN0aW9uTmFtZTogXCJCRE9UZXN0MVwiIH0pXG4gICAgXSwgQkRPVGVzdDEpO1xuICAgIHJldHVybiBCRE9UZXN0MTtcbn1cbmV4cG9ydHMuQkRPVGVzdDFGYWN0b3J5ID0gQkRPVGVzdDFGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFZHVnpkREV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDIxdlpHVnNjeTlDUkU5VVpYTjBNUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkRRU3h6UkVGQmQwUTdRVUZUZUVRc1UwRkJaMElzWlVGQlpTeERRVUZyUkN4SlFVRlhPMGxCVlhoR0xFbEJRV1VzVVVGQlVTeEhRVUYyUWl4TlFVRmxMRkZCUVZNc1UwRkJVU3hKUVVGSk8xRkJVWHBDTEZkQlFWYzdXVUZEWkN4UFFVRlBMRXRCUVVzc1EwRkJRenRSUVVOcVFpeERRVUZETzFGQlUxTXNVMEZCVXl4RFFVRkRMRTFCUVdNN1VVRkZiRU1zUTBGQlF6dExRVU5LTEVOQlFVRTdTVUYwUW1Nc1VVRkJVVHRSUVVSMFFpdzBRa0ZCWlN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFbEJRVWtzUlVGQlJTeGpRVUZqTEVWQlFVVXNWVUZCVlN4RlFVRkZMRU5CUVVNN1QwRkRia1FzVVVGQlVTeERRWE5DZEVJN1NVRkRSQ3hQUVVGUExGRkJRVkVzUTBGQlF6dEJRVU53UWl4RFFVRkRPMEZCYkVORUxEQkRRV3REUXlKOSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcblwidXNlIHN0cmljdFwiO1xuY29uc3QgQ2h1bmtfMSA9IHJlcXVpcmUoXCIuL0NodW5rXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmxldCBDZWxsID0gY2xhc3MgQ2VsbCB7XG4gICAgY29uc3RydWN0b3IoX3BhcmFtcykge1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLmNhdmUgPSAwO1xuICAgICAgICB0aGlzLnJpdmVyID0gMDtcbiAgICAgICAgdGhpcy5odW1pZGl0eSA9IDA7XG4gICAgICAgIHRoaXMudGVtcGVyYXR1cmUgPSAwO1xuICAgICAgICB0aGlzLmNodW5rID0gbmV3IENodW5rXzEuQ2h1bmsoKTtcbiAgICB9XG59O1xuQ2VsbCA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIENvbnN0UGFyYW1zICE9PSBcInVuZGVmaW5lZFwiICYmIENvbnN0UGFyYW1zKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3RdKVxuXSwgQ2VsbCk7XG5leHBvcnRzLkNlbGwgPSBDZWxsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTJWc2JDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiVzlrWld4ekwwTmxiR3d1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdRVUZCUVN4dFEwRkJaME03UVVGRGFFTXNjMFJCUVhkRU8wRkJVM2hFTEVsQlFXRXNTVUZCU1N4SFFVRnFRaXhOUVVGaExFbEJRVWs3U1VGNVJHSXNXVUZCV1N4UFFVRXlRanRSUVd4RWFFTXNUVUZCUXl4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVZGa0xFMUJRVU1zUjBGQlZ5eERRVUZETEVOQlFVTTdVVUZSWkN4VFFVRkpMRWRCUVZjc1EwRkJReXhEUVVGRE8xRkJVV3BDTEZWQlFVc3NSMEZCVnl4RFFVRkRMRU5CUVVNN1VVRlJiRUlzWVVGQlVTeEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFWRnlRaXhuUWtGQlZ5eEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFWRjRRaXhWUVVGTExFZEJRVlVzU1VGQlNTeGhRVUZMTEVWQlFVVXNRMEZCUXp0SlFVVlRMRU5CUVVNN1EwRkRMME1zUTBGQlFUdEJRVEZFV1N4SlFVRkpPMGxCUkdoQ0xEUkNRVUZsTEVWQlFVVTdhVVZCTUVSUkxGZEJRVmNzYjBKQlFWZ3NWMEZCVnp0SFFYcEVlRUlzU1VGQlNTeERRVEJFYUVJN1FVRXhSRmtzYjBKQlFVa2lmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3Qgb3Blbl9zaW1wbGV4X25vaXNlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwib3Blbi1zaW1wbGV4LW5vaXNlXCIpKTtcbmNvbnN0IGxvZGFzaF8xID0gcmVxdWlyZShcImxvZGFzaFwiKTtcbmNvbnN0IENlbGxfMSA9IHJlcXVpcmUoXCIuL0NlbGxcIik7XG5jbGFzcyBDaHVuayB7XG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDY0O1xuICAgICAgICB0aGlzLmdyaWQgPSBbXTtcbiAgICAgICAgdGhpcy5zaW1wbGV4Q2F2ZSA9IG5ldyBvcGVuX3NpbXBsZXhfbm9pc2VfMS5kZWZhdWx0KDEpO1xuICAgICAgICB0aGlzLnNpbXBsZXhSaXZlciA9IG5ldyBvcGVuX3NpbXBsZXhfbm9pc2VfMS5kZWZhdWx0KDIpO1xuICAgICAgICB0aGlzLnNpbXBsZXhUZW1wZXJhdHVyZSA9IG5ldyBvcGVuX3NpbXBsZXhfbm9pc2VfMS5kZWZhdWx0KDMpO1xuICAgICAgICB0aGlzLnNpbXBsZXhIdW1pZGl0eSA9IG5ldyBvcGVuX3NpbXBsZXhfbm9pc2VfMS5kZWZhdWx0KDQpO1xuICAgICAgICBsb2Rhc2hfMS5tZXJnZSh0aGlzLCBwYXJhbXMpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlR3JpZCgpO1xuICAgIH1cbiAgICBnZW5lcmF0ZUdyaWQoKSB7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMuc2l6ZTsgcm93KyspIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ncmlkW3Jvd10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQucHVzaChbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLnNpemU7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeENvb3JkaW5hdGUgPSBjb2wgKyB0aGlzLnggKiB0aGlzLnNpemU7XG4gICAgICAgICAgICAgICAgY29uc3QgeUNvb3JkaW5hdGUgPSByb3cgKyB0aGlzLnkgKiB0aGlzLnNpemU7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkW3Jvd10ucHVzaChuZXcgQ2VsbF8xLkNlbGwoe1xuICAgICAgICAgICAgICAgICAgICB4OiB4Q29vcmRpbmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgeTogeUNvb3JkaW5hdGUsXG4gICAgICAgICAgICAgICAgICAgIGNhdmU6IHRoaXMuc2ltcGxleENhdmUubm9pc2UyRCh4Q29vcmRpbmF0ZSAvIDEwMCwgeUNvb3JkaW5hdGUgLyAxMDApLFxuICAgICAgICAgICAgICAgICAgICByaXZlcjogdGhpcy5zaW1wbGV4Uml2ZXIubm9pc2UyRCh4Q29vcmRpbmF0ZSAvIDUwMCwgeUNvb3JkaW5hdGUgLyA1MDApLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZTogdGhpcy5zaW1wbGV4VGVtcGVyYXR1cmUubm9pc2UyRCh4Q29vcmRpbmF0ZSAvIDI1MDAsIHlDb29yZGluYXRlIC8gMjUwMCksXG4gICAgICAgICAgICAgICAgICAgIGh1bWlkaXR5OiB0aGlzLnNpbXBsZXhIdW1pZGl0eS5ub2lzZTJEKHhDb29yZGluYXRlIC8gMjUwMCwgeUNvb3JkaW5hdGUgLyAyNTAwKSxcbiAgICAgICAgICAgICAgICAgICAgY2h1bms6IHRoaXNcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkNodW5rID0gQ2h1bms7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMmgxYm1zdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyMXZaR1ZzY3k5RGFIVnVheTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3h2UmtGQmEwUTdRVUZEYkVRc2JVTkJRU3RDTzBGQlF5OUNMR2xEUVVFNFFqdEJRVkU1UWl4TlFVRmhMRXRCUVVzN1NVRnpSV1FzV1VGQldTeE5RVUV5UWp0UlFTOUVhRU1zVFVGQlF5eEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFWRmtMRTFCUVVNc1IwRkJWeXhEUVVGRExFTkJRVU03VVVGUlpDeFRRVUZKTEVkQlFWa3NSVUZCUlN4RFFVRkRPMUZCVTJoQ0xGTkJRVWtzUjBGQllTeEZRVUZGTEVOQlFVTTdVVUZUY0VJc1owSkJRVmNzUjBGQmNVSXNTVUZCU1N3MFFrRkJaMElzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFWTjRSQ3hwUWtGQldTeEhRVUZ4UWl4SlFVRkpMRFJDUVVGblFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCVTNwRUxIVkNRVUZyUWl4SFFVRnhRaXhKUVVGSkxEUkNRVUZuUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJVeTlFTEc5Q1FVRmxMRWRCUVhGQ0xFbEJRVWtzTkVKQlFXZENMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGSGJFVXNZMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU53UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU03U1VGRGVFSXNRMEZCUXp0SlFWRlRMRmxCUVZrN1VVRkRiRUlzUzBGQlN5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGWkxFbEJRVWtzUTBGQlF5eEpRVUZMTEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVN1dVRkRhRVFzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3WjBKQlEycENMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMkZCUTNSQ08xbEJRMFFzUzBGQlN5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGWkxFbEJRVWtzUTBGQlF5eEpRVUZMTEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVN1owSkJRMmhFTEUxQlFVMHNWMEZCVnl4SFFVRkhMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZYTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNN1owSkJRM0pFTEUxQlFVMHNWMEZCVnl4SFFVRkhMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZYTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNN1owSkJSWEpFTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVU5tTEVsQlFVa3NWMEZCU1N4RFFVRkRPMjlDUVVOTUxFTkJRVU1zUlVGQlJTeFhRVUZYTzI5Q1FVTmtMRU5CUVVNc1JVRkJSU3hYUVVGWE8yOUNRVU5rTEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVkQlFVY3NSMEZCUnl4RlFVRkZMRmRCUVZjc1IwRkJSeXhIUVVGSExFTkJRVU03YjBKQlEzQkZMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRWRCUVVjc1IwRkJSeXhGUVVGRkxGZEJRVmNzUjBGQlJ5eEhRVUZITEVOQlFVTTdiMEpCUTNSRkxGZEJRVmNzUlVGQlJTeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NSMEZCUnl4SlFVRkpMRVZCUVVVc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF6dHZRa0ZEY0VZc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFVkJRVVVzVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXp0dlFrRkRPVVVzUzBGQlN5eEZRVUZGTEVsQlFVazdhVUpCUTJRc1EwRkJReXhEUVVOTUxFTkJRVU03WVVGRFREdFRRVU5LTzBsQlEwd3NRMEZCUXp0RFFVTktPMEZCZUVkRUxITkNRWGRIUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gQkRPQ29uZmlnRmFjdG9yeShjdG9yKSB7XG4gICAgY2xhc3MgQkRPQ29uZmlnIGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVzID0gW1wiLzpuYW1lXCJdO1xuICAgICAgICAgICAgdGhpcy5qc29uT25seSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEJET0NvbmZpZztcbn1cbmV4cG9ydHMuQkRPQ29uZmlnRmFjdG9yeSA9IEJET0NvbmZpZ0ZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQUTI5dVptbG5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzl5YjNWMFpYTXZRa1JQUTI5dVptbG5MblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlUwRXNVMEZCWjBJc1owSkJRV2RDTEVOQlFYTkRMRWxCUVZjN1NVRlZOMFVzVFVGQlpTeFRRVUZWTEZOQlFWRXNTVUZCU1R0UlFVRnlRenM3V1VGUFZ5eFhRVUZOTEVkQlFXRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRaUVU4elFpeGhRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUXpsQ0xFTkJRVU03UzBGQlFUdEpRVVZFTEU5QlFVOHNVMEZCVXl4RFFVRkRPMEZCUTNKQ0xFTkJRVU03UVVFMVFrUXNORU5CTkVKREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIEJET0dhbWVMb2JieUZhY3RvcnkoY3Rvcikge1xuICAgIGNsYXNzIEJET0dhbWVMb2JieSBleHRlbmRzIGN0b3Ige1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlck5hbWVTcGFjZSA9ICcvJztcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGVTdHJpbmcgPSByZXF1aXJlKCd+YmRvL3ZpZXdzL2dhbWVMb2JieS5uamsnKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyB0ZW1wbGF0ZVBhcmFtcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb2hhOiAnT09PT09IQUFBQUFBQUEhISEnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJET0dhbWVMb2JieS5hdHRhY2hUb1NlcnZlcnMgPSBbXCJHYW1lU2VydmVyXCJdO1xuICAgIHJldHVybiBCRE9HYW1lTG9iYnk7XG59XG5leHBvcnRzLkJET0dhbWVMb2JieUZhY3RvcnkgPSBCRE9HYW1lTG9iYnlGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFIyRnRaVXh2WW1KNUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXliM1YwWlhNdlFrUlBSMkZ0WlV4dlltSjVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlZVRXNVMEZCWjBJc2JVSkJRVzFDTEVOQlFYTkRMRWxCUVZjN1NVRlRhRVlzVFVGQlpTeFpRVUZoTEZOQlFWRXNTVUZCU1R0UlFVRjRRenM3V1VGblFsY3NiMEpCUVdVc1IwRkJSeXhIUVVGSExFTkJRVU03V1VGUmJrSXNiVUpCUVdNc1IwRkJZU3hQUVVGUExFTkJRVU1zTUVKQlFUQkNMRU5CUVVNc1EwRkJRenRSUVdNM1JTeERRVUZETzFGQlRHRXNTMEZCU3l4RFFVRkRMR05CUVdNN1dVRkRNVUlzVDBGQlR6dG5Ra0ZEU0N4SFFVRkhMRVZCUVVVc2JVSkJRVzFDTzJGQlF6TkNMRU5CUVVNN1VVRkRUaXhEUVVGRE96dEpRVFZDWVN3MFFrRkJaU3hIUVVGaExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdTVUVyUWpkRUxFOUJRVThzV1VGQldTeERRVUZETzBGQlEzaENMRU5CUVVNN1FVRnNSRVFzYTBSQmEwUkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBCRE9Ib21lRmFjdG9yeShjdG9yKSB7XG4gICAgY2xhc3MgQkRPSG9tZSBleHRlbmRzIGN0b3Ige1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlck5hbWVTcGFjZSA9ICcvJztcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGVTdHJpbmcgPSByZXF1aXJlKCd+YmRvL3ZpZXdzL2hvbWUubmprJyk7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9oYTogJ2VuZGxpY2ggenUgSGF1c2UgPSknXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJET0hvbWUuYXR0YWNoVG9TZXJ2ZXJzID0gW1wiV2ViU2VydmVyXCJdO1xuICAgIHJldHVybiBCRE9Ib21lO1xufVxuZXhwb3J0cy5CRE9Ib21lRmFjdG9yeSA9IEJET0hvbWVGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFNHOXRaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2Y205MWRHVnpMMEpFVDBodmJXVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGVlFTeFRRVUZuUWl4alFVRmpMRU5CUVhORExFbEJRVmM3U1VGVE0wVXNUVUZCWlN4UFFVRlJMRk5CUVZFc1NVRkJTVHRSUVVGdVF6czdXVUZuUWxjc2IwSkJRV1VzUjBGQlJ5eEhRVUZITEVOQlFVTTdXVUZSYmtJc2JVSkJRV01zUjBGQllTeFBRVUZQTEVOQlFVTXNjVUpCUVhGQ0xFTkJRVU1zUTBGQlF6dFJRV040UlN4RFFVRkRPMUZCVEdFc1MwRkJTeXhEUVVGRExHTkJRV003V1VGRE1VSXNUMEZCVHp0blFrRkRTQ3hIUVVGSExFVkJRVVVzY1VKQlFYRkNPMkZCUXpkQ0xFTkJRVU03VVVGRFRpeERRVUZET3p0SlFUVkNZU3gxUWtGQlpTeEhRVUZoTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1NVRXJRalZFTEU5QlFVOHNUMEZCVHl4RFFVRkRPMEZCUTI1Q0xFTkJRVU03UVVGc1JFUXNkME5CYTBSREluMD0iLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9zb3VyY2UvYXBwL3V0aWxzIHN5bmMgcmVjdXJzaXZlXCI7IiwiaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcbmltcG9ydCB7IHBhc2NhbENhc2Uya2ViYWJDYXNlIH0gZnJvbSBcIn5iZG8vdXRpbHMvdXRpbFwiO1xuaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSBcIn5iZG8vdXRpbHMvZW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IElQcm9wZXJ0eVBhcmFtcyB9IGZyb20gXCJ+YmRvL2xpYi9Qcm9wZXJ0eVwiO1xuaW1wb3J0IHsgSUF0dHJpYnV0ZVBhcmFtcyB9IGZyb20gXCJ+YmRvL2xpYi9BdHRyaWJ1dGVcIjtcbmltcG9ydCB7IElXYXRjaGVkUGFyYW1zIH0gZnJvbSBcIn5iZG8vbGliL1dhdGNoZWRcIjtcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tIFwifmJkby9saWIvQmluZGluZ1wiO1xuaW1wb3J0IHsgZ2V0TWV0YWRhdGEsIGRlZmluZU1ldGFkYXRhIH0gZnJvbSBcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIjtcbmltcG9ydCB7IGJlZm9yZVByb3BlcnR5RGVzY3JpcHRvcnMsIGNyZWF0ZURlY29yYXRvckRlc2NyaXB0b3IgfSBmcm9tIFwifmJkby91dGlscy9mcmFtZXdvcmtcIjtcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBSZXR1cm5UeXBlRnVuYyB9IGZyb20gXCJ0eXBlLWdyYXBocWwvZGlzdC9kZWNvcmF0b3JzL3R5cGVzXCI7XG5pbXBvcnQgeyBPYmplY3RPcHRpb25zIH0gZnJvbSBcInR5cGUtZ3JhcGhxbC9kaXN0L2RlY29yYXRvcnMvT2JqZWN0VHlwZVwiO1xuaW1wb3J0IHtcbiAgICBGaWVsZCxcbiAgICBPYmplY3RUeXBlLFxuICAgIFF1ZXJ5LFxuICAgIEFyZyxcbiAgICBBcmdzLFxuICAgIFJlc29sdmVyLFxuICAgIFJvb3QsXG4gICAgU3Vic2NyaXB0aW9uLFxuICAgIE11dGF0aW9uLFxuICAgIFB1YlN1YixcbiAgICBJbnB1dFR5cGVcbn0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuXG5pbnRlcmZhY2UgSUJhc2VDb25zdHJ1Y3Rvck9wdHMgZXh0ZW5kcyBPYmplY3RPcHRpb25zIHtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uIHdoZXJlIGEgbW9kZWwgaXMgc2F2ZWQgaW5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIGJhc2VDb25zdHJ1Y3Rvck9wdHNcbiAgICAgKi9cbiAgICBjb2xsZWN0aW9uTmFtZT86IHN0cmluZztcbn1cblxudHlwZSBGdW5jT3JBdHRyUGFyYW1zID0gUmV0dXJuVHlwZUZ1bmMgfCBJQXR0cmlidXRlUGFyYW1zO1xudHlwZSBuYW1lT3JPcHRzT3JJbmRleCA9IHN0cmluZyB8IElCYXNlQ29uc3RydWN0b3JPcHRzIHwgbnVtYmVyO1xudHlwZSBvcHRzT3JJbmRleCA9IElCYXNlQ29uc3RydWN0b3JPcHRzIHwgbnVtYmVyO1xuXG4vKipcbiAqIHJlYWN0cyBvbiBzZXZlcmFsIHR5cGVzIG9mIGNoYW5nZXMgb2YgdGhlIHByb3BlcnR5IC8gYXR0cmlidXRlLlxuICogSWYgbm8gZnVuY3Rpb24gbmFtZSBpcyBnaXZlbiwgaXQgd2lsbCBsb29rIGZvciBvbjxQcm9wZXJ0eU5hbWU+PEFjdGlvbj4uXG4gKlxuICogRXhhbXBsZTogVGhlIHByb3BlcnR5IGlzIG5hbWVkIHRlc3QgYW5kIGlzIG9mIHR5cGUgc3RyaW5nLCB0aGVuIHRoZVxuICogcmVhY3Rpb25GdW5jdGlvbiBpcyBjYWxsZWQgb25UZXN0Q2hhbmdlLlxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7SW5kZXhTdHJ1Y3R1cmV9IHBhcmFtc1xuICogQHJldHVybnMge1Byb3BlcnR5RGVjb3JhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24gd2F0Y2hlZChwYXJhbXM6IElXYXRjaGVkUGFyYW1zID0ge30pOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcgfCBzeW1ib2wpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nS2V5ID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgICAgIGJlZm9yZVByb3BlcnR5RGVzY3JpcHRvcnModGFyZ2V0LCBzdHJpbmdLZXksIFwiZGVmaW5lZFdhdGNoZXJzXCIpO1xuICAgICAgICBjcmVhdGVEZWNvcmF0b3JEZXNjcmlwdG9yKHRhcmdldCwgc3RyaW5nS2V5LCBcIldhdGNoZWRcIiwgcGFyYW1zKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIE1hcmtzIGFuIGNvbXBvbmVudCBwcm9wZXJ0eSBhcyBhIHJlYWwgcHJvcGVydHkgYW5kIGF2b2lkcyBzZXR0aW5nIHRoZVxuICogY29ycmVzcG9uZGluZyBhdHRyaWJ1dGUuIEFsc28gaXQgbWFpbnRhaW5zIHRoZSBcInByb3BlcnRpZXNcIiB2YWx1ZXMgb2YgYVxuICogY29tcG9uZW50LlxuICpcbiAqIEBleHBvcnRcbiAqIEByZXR1cm5zIHtQcm9wZXJ0eURlY29yYXRvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5KHBhcmFtczogSVByb3BlcnR5UGFyYW1zID0ge30pOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcgfCBzeW1ib2wpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nS2V5ID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgICAgIGJlZm9yZVByb3BlcnR5RGVzY3JpcHRvcnModGFyZ2V0LCBzdHJpbmdLZXksIFwiZGVmaW5lZFByb3BlcnRpZXNcIik7XG4gICAgICAgIGNyZWF0ZURlY29yYXRvckRlc2NyaXB0b3IodGFyZ2V0LCBzdHJpbmdLZXksIFwiUHJvcGVydHlcIiwgcGFyYW1zKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIE1hcmtzIGEgY29tcG9uZW50IHByb3BlcnR5IGFzIGEgcmVhbCBhdHRyaWJ1dGUgYW5kIHJlZmxlY3RzIHRoZSBzZXQgdmFsdWVzXG4gKiB0byB0aGUgYXR0cmlidXRlIGRvbSBldmVuIGl0IGlzIG5vdCBhIG5hdGl2ZSBhdHRyaWJ1dGUuXG4gKlxuICogSWYgaXQgaXMgYSBCRE9Nb2RlbCBpdCBtYXJrcyB0aGUgcHJvcGVydHkgYXMgYW4gYXR0cmlidXRlIHdoaWNoIHNob3VsZCBiZVxuICogc2VuZCB0byBzZXJ2ZXIgb3Igc2F2ZWQgaW4gZGF0YWJhc2UuXG4gKlxuICogSXQgYWxzbyBkbyBzb21lIG90aGVyIGxvZ2ljIGxpa2UgZGF0YSBmbG93LCBjYWNoaW5nIGFuZCBzbyBvbi4gRm9yIG1vcmVcbiAqIGluZm9ybWF0aW9uIHJlYWQgdGhlIHByb3BlcnR5IGNvbW1lbnRzLlxuICpcbiAqIEBleHBvcnRcbiAqIEByZXR1cm5zIHtQcm9wZXJ0eURlY29yYXRvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF0dHJpYnV0ZSh0eXBlRnVuYz86IEZ1bmNPckF0dHJQYXJhbXMsIHBhcmFtcz86IElBdHRyaWJ1dGVQYXJhbXMpOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcgfCBzeW1ib2wpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nS2V5ID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgICAgIGlmICh0eXBlRnVuYyAmJiAhKHR5cGVGdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pICYmICFwYXJhbXMpIHBhcmFtcyA9IHR5cGVGdW5jO1xuICAgICAgICBpZiAoIXBhcmFtcykgcGFyYW1zID0ge307XG5cbiAgICAgICAgLy8gRGVjaWRlIHdoaWNoIEZpZWxkIHNob3VsZCBiZSB1c2VkXG4gICAgICAgIGlmICh0eXBlRnVuYyBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmIHBhcmFtcykgRmllbGQodHlwZUZ1bmMsIHBhcmFtcykodGFyZ2V0LCBrZXkpO1xuICAgICAgICBlbHNlIGlmICh0eXBlRnVuYyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSBGaWVsZCh0eXBlRnVuYykodGFyZ2V0LCBrZXkpO1xuICAgICAgICBlbHNlIGlmIChwYXJhbXMpIEZpZWxkKHBhcmFtcykodGFyZ2V0LCBrZXkpO1xuICAgICAgICBlbHNlIEZpZWxkKCkodGFyZ2V0LCBrZXkpO1xuICAgICAgICBiZWZvcmVQcm9wZXJ0eURlc2NyaXB0b3JzKHRhcmdldCwgc3RyaW5nS2V5LCBcImRlZmluZWRBdHRyaWJ1dGVzXCIpO1xuICAgICAgICBjcmVhdGVEZWNvcmF0b3JEZXNjcmlwdG9yKHRhcmdldCwgc3RyaW5nS2V5LCBcIkF0dHJpYnV0ZVwiLCBwYXJhbXMpO1xuICAgIH07XG59XG5cbi8qKlxuICogQ29uc3RydWN0cyBhbiBvYmplY3Qgd2l0aCBpdHMgY29uc3RQYXJhbXMgd2l0aCBwb3NpdGlvbiBjb25zdFBhcmFtc0luZGV4LlxuICogSXQgYWxzbyBkZWZpbmVzIGFuIGdyYXBoUUwgb2JqZWN0IHR5cGUgaWYgaXQgaXMgYSBCRE9Nb2RlbFxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBbY29uc3RQYXJhbXNJbmRleD0wXSBQb3NpdGlvbiBvZiBwYXJhbWV0ZXJzIHdoaWNoIGFyZSB1c2VkIHRvIGluaXRpYWxpemUgdGhlIG9iamVjdFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJhc2VDb25zdHJ1Y3RvcihuYW1lPzogbmFtZU9yT3B0c09ySW5kZXgsIG9wdGlvbnM/OiBvcHRzT3JJbmRleCwgY29uc3RQYXJhbXNJbmRleDogbnVtYmVyID0gMCkge1xuXG4gICAgcmV0dXJuIChjdG9yOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGN0b3IpO1xuICAgICAgICBpZiAocHJvdG90eXBlLm5hbWUgPT09IFwiQmFzZUNvbnN0cnVjdG9yXCIpIHtcbiAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihjdG9yLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXRlcm1pbmUgcGFyYW0gdHlwZXNcbiAgICAgICAgaWYgKG5hbWUgJiYgKHR5cGVvZiBuYW1lID09PSBcIm51bWJlclwiKSkgY29uc3RQYXJhbXNJbmRleCA9IG5hbWU7XG4gICAgICAgIGlmIChuYW1lICYmICh0eXBlb2YgbmFtZSA9PT0gXCJvYmplY3RcIikpIG9wdGlvbnMgPSBuYW1lO1xuICAgICAgICBpZiAobmFtZSAmJiAoKHR5cGVvZiBuYW1lID09PSBcIm9iamVjdFwiKSB8fCAodHlwZW9mIG5hbWUgPT09IFwibnVtYmVyXCIpKSkgbmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgKHR5cGVvZiBvcHRpb25zID09PSBcIm51bWJlclwiKSkgY29uc3RQYXJhbXNJbmRleCA9IG9wdGlvbnM7XG4gICAgICAgIGlmIChvcHRpb25zICYmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJudW1iZXJcIikpIG9wdGlvbnMgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKFwiaXNCRE9Nb2RlbFwiIGluIGN0b3IpIHtcbiAgICAgICAgICAgIC8vIERlY2lkZSB3aGljaCBPYmplY3RUeXBlIHRvIHVzZVxuICAgICAgICAgICAgaWYgKG5hbWUgJiYgKHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiKSAmJiBvcHRpb25zICYmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJvYmplY3RcIikpIHtcbiAgICAgICAgICAgICAgICBPYmplY3RUeXBlKG5hbWUsIG9wdGlvbnMpKGN0b3IpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuYW1lICYmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgICAgICBPYmplY3RUeXBlKG5hbWUpKGN0b3IpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zICYmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJvYmplY3RcIikpIHtcbiAgICAgICAgICAgICAgICBPYmplY3RUeXBlKG9wdGlvbnMpKGN0b3IpO1xuICAgICAgICAgICAgfSBlbHNlIE9iamVjdFR5cGUoKShjdG9yKTtcbiAgICAgICAgICAgIC8vIHNldCBjb2xsZWN0aW9uIG5hbWVcbiAgICAgICAgICAgIGlmIChvcHRpb25zICYmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJvYmplY3RcIikgJiYgb3B0aW9ucy5jb2xsZWN0aW9uTmFtZSkge1xuICAgICAgICAgICAgICAgIGRlZmluZU1ldGFkYXRhKGN0b3IsIFwiY29sbGVjdGlvbk5hbWVcIiwgb3B0aW9ucy5jb2xsZWN0aW9uTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucyAmJiAodHlwZW9mIG9wdGlvbnMgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pc0Fic3RyYWN0KSkgcmV0dXJuIGN0b3I7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludm9rZXMgdGhlIGxpZmUgY3ljbGUgb2YgZXZlcnkgY29tcG9uZW50IGFuZCBtb2RlbFxuICAgICAgICAgKlxuICAgICAgICAgKiBAY2xhc3MgQmFzZUNvbnN0cnVjdG9yXG4gICAgICAgICAqIEBleHRlbmRzIHtjdG9yfVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3MgQmFzZUNvbnN0cnVjdG9yIGV4dGVuZHMgY3RvciB7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVwcmVzZW50cyB0aGUgb3JpZ2luYWwgY2xhc3MgbmFtZSBvZiB0aGUgY29uc3RydWN0b3JcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgQmFzZUNvbnN0cnVjdG9yXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgY2xhc3NOYW1lID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKEJhc2VDb25zdHJ1Y3RvcikubmFtZTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZXRlcm1pbmVzIHRoZSBvcmlnaW5hbCB0eXBlIG9mIHRoaXMgbW9kZWwgLSBzZXQgYnkgdGhlXG4gICAgICAgICAgICAgKiBiYXNlQ29uc3RydWN0b3IgLSBmb3IgdGhlIEdyYXBoUUwgcmVzb2x2ZXJcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgKiBAdHlwZSB7Kn1cbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBCYXNlQ29uc3RydWN0b3JcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBncmFwaFFMVHlwZTogYW55ID0gY3RvcjtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVc2VkIHRvIGRlZmluZSB0aGUgbmFtZSBvZiB0aGUgZGF0YWJhc2UgY29sbGVjdGlvbiB3aGVyZSBhIEJET01vZGVsIGlzIHN0b3JlZCBpblxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgQmFzZUNvbnN0cnVjdG9yXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgY29sbGVjdGlvbk5hbWU/OiBzdHJpbmcgPSBnZXRNZXRhZGF0YShCYXNlQ29uc3RydWN0b3IsIFwiY29sbGVjdGlvbk5hbWVcIik7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIGluc3RhbmNlIHZlcnNpb24gb2YgdGhlIHN0YXRpYyBwcm9wZXJ0eSBjb2xsZWN0aW9uTmFtZVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgQmFzZUNvbnN0cnVjdG9yXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHB1YmxpYyByZWFkb25seSBjb2xsZWN0aW9uTmFtZT86IHN0cmluZyA9IEJhc2VDb25zdHJ1Y3Rvci5jb2xsZWN0aW9uTmFtZTtcblxuICAgICAgICAgICAgY29uc3RydWN0b3IoLi4ucGFyYW1zOiBhbnlbXSkge1xuICAgICAgICAgICAgICAgIHN1cGVyKC4uLnBhcmFtcyk7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnN0UGFyYW1zID0gcGFyYW1zW2NvbnN0UGFyYW1zSW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmICghKGNvbnN0UGFyYW1zIGluc3RhbmNlb2YgT2JqZWN0KSkgY29uc3RQYXJhbXMgPSB7fTtcbiAgICAgICAgICAgICAgICBkZWZpbmVNZXRhZGF0YSh0aGlzLCBcIm5vcm1hbEZ1bmN0aW9uYWxpdHlcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRTZXR0aW5nczogQ29uc3RQYXJhbXM8QmFzZUNvbnN0cnVjdG9yPiA9IGdldE1ldGFkYXRhKHRoaXMsIFwiZGVmYXVsdFNldHRpbmdzXCIpIHx8IHt9O1xuICAgICAgICAgICAgICAgIGRlZmF1bHRTZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdFNldHRpbmdzLCBjb25zdFBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24odGhpcy5nZXROYW1lc3BhY2VkU3RvcmFnZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBjb25zdFBhcmFtcy5pZCB8fCBkZWZhdWx0U2V0dGluZ3MuaWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlZFNldHRpbmdzID0gdGhpcy5nZXROYW1lc3BhY2VkU3RvcmFnZShcIipcIiwgXCJpZFwiLCBpZCkgfHwge307XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNhY2hlZFNldHRpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FjaGVkU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkZWZhdWx0U2V0dGluZ3Nba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEJpbmRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRWYWx1ZShjYWNoZWRTZXR0aW5nc1trZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZGVmYXVsdFNldHRpbmdzW2tleV0gPSBjYWNoZWRTZXR0aW5nc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGVmYXVsdFNldHRpbmdzKTtcbiAgICAgICAgICAgICAgICBkZWZpbmVNZXRhZGF0YSh0aGlzLCBcImNvbnN0cnVjdGlvbkNvbXBsZXRlXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHRoaXMuY29uc3RydWN0ZWRDYWxsYmFjaykpICg8YW55PnRoaXMpLmNvbnN0cnVjdGVkQ2FsbGJhY2soLi4ucGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlZ2lzdGVyIGN1c3RvbSBFbGVtZW50XG4gICAgICAgIGlmIChpc0Jyb3dzZXIoKSAmJiBjdG9yLmlzQmFzZUNvbXBvbmVudCkge1xuICAgICAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHBhc2NhbENhc2Uya2ViYWJDYXNlKGN0b3IubmFtZSksIEJhc2VDb25zdHJ1Y3Rvciwge1xuICAgICAgICAgICAgICAgIGV4dGVuZHM6IEJhc2VDb25zdHJ1Y3Rvci5leHRlbmRzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQmFzZUNvbnN0cnVjdG9yO1xuICAgIH07XG59XG5cbmV4cG9ydCBsZXQgcXVlcnkgPSBRdWVyeTtcbmV4cG9ydCBsZXQgYXJnID0gQXJnO1xuZXhwb3J0IGxldCBhcmdzID0gQXJncztcbmV4cG9ydCBsZXQgcmVzb2x2ZXIgPSBSZXNvbHZlcjtcbmV4cG9ydCBsZXQgcm9vdCA9IFJvb3Q7XG5leHBvcnQgbGV0IG11dGF0aW9uID0gTXV0YXRpb247XG5leHBvcnQgbGV0IHN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbjtcbmV4cG9ydCBsZXQgcHViU3ViID0gUHViU3ViO1xuZXhwb3J0IGxldCBpbnB1dFR5cGUgPSBJbnB1dFR5cGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBudW5qdWNrcyA9IHRzbGliXzEuX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJudW5qdWNrc1wiKSk7XG5mdW5jdGlvbiBpc05vZGVKUygpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmlzTm9kZUpTID0gaXNOb2RlSlM7XG5mdW5jdGlvbiBpc0Jyb3dzZXIoKSB7XG4gICAgcmV0dXJuICFpc05vZGVKUygpO1xufVxuZXhwb3J0cy5pc0Jyb3dzZXIgPSBpc0Jyb3dzZXI7XG5leHBvcnRzLnRlbXBsYXRlRW52aXJvbm1lbnQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG5vQ2FjaGUgPSBnbG9iYWwucHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyB0cnVlIDogZmFsc2U7XG4gICAgY29uc3QgZW52ID0gbmV3IG51bmp1Y2tzLkVudmlyb25tZW50KHtcbiAgICAgICAgZ2V0U291cmNlOiAocGF0aCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3JjOiByZXF1aXJlKHBhdGgpLCBwYXRoLCBub0NhY2hlIH07XG4gICAgICAgIH1cbiAgICB9LCB7IG5vQ2FjaGUgfSk7XG4gICAgZW52LmFkZEZpbHRlcignanNvbicsICh2YWx1ZSwgc3BhY2VzKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIG51bmp1Y2tzLnJ1bnRpbWUuU2FmZVN0cmluZykge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgbnVuanVja3MucnVudGltZS5TYWZlU3RyaW5nKEpTT04uc3RyaW5naWZ5KHZhbHVlLCBudWxsLCBzcGFjZXMpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZW52O1xufSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpXNTJhWEp2Ym0xbGJuUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMM1YwYVd4ekwyVnVkbWx5YjI1dFpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVRkJMREpFUVVGeFF6dEJRVkZ5UXl4VFFVRm5RaXhSUVVGUk8wbEJRM0JDTEVsQlFVa3NUMEZCVHl4TlFVRk5MRXRCUVVzc1YwRkJWeXhKUVVGSkxFOUJRVThzVDBGQlR5eExRVUZMTEZGQlFWRXNSVUZCUlR0UlFVTTVSQ3hQUVVGUExFbEJRVWtzUTBGQlF6dExRVU5tTzBsQlEwUXNUMEZCVHl4TFFVRkxMRU5CUVVNN1FVRkRha0lzUTBGQlF6dEJRVXhFTERSQ1FVdERPMEZCVVVRc1UwRkJaMElzVTBGQlV6dEpRVU55UWl4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03UVVGRGRrSXNRMEZCUXp0QlFVWkVMRGhDUVVWRE8wRkJTMWtzVVVGQlFTeHRRa0ZCYlVJc1IwRkJSeXhEUVVGRExFZEJRVWNzUlVGQlJUdEpRVU55UXl4TlFVRk5MRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRXRCUVVzc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJRenRKUVVNM1JTeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRGFrTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1NVRkJXU3hGUVVGRkxFVkJRVVU3V1VGRGVFSXNUMEZCVHl4RlFVRkZMRWRCUVVjc1JVRkJSU3hQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNTVUZCU1N4RlFVRkZMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJRMnBFTEVOQlFVTTdTMEZEU2l4RlFVRkZMRVZCUVVVc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVVZvUWl4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4TlFVRk5MRVZCUVVVc1JVRkJSVHRSUVVOd1F5eEpRVUZKTEV0QlFVc3NXVUZCV1N4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUlVGQlJUdFpRVU01UXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFOQlF6VkNPMUZCUTBRc1QwRkJUeXhKUVVGSkxGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eEZRVUZGTEVsQlFVa3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMmhHTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTBnc1QwRkJUeXhIUVVGSExFTkJRVU03UVVGRFppeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBCaW5kaW5nXzEgPSByZXF1aXJlKFwifmJkby9saWIvQmluZGluZ1wiKTtcbmNvbnN0IEF0dHJpYnV0ZV8xID0gcmVxdWlyZShcIn5iZG8vbGliL0F0dHJpYnV0ZVwiKTtcbmNvbnN0IFByb3BlcnR5XzEgPSByZXF1aXJlKFwifmJkby9saWIvUHJvcGVydHlcIik7XG5jb25zdCBXYXRjaGVkXzEgPSByZXF1aXJlKFwifmJkby9saWIvV2F0Y2hlZFwiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmZ1bmN0aW9uIGJlZm9yZVByb3BlcnR5RGVzY3JpcHRvcnModGFyZ2V0LCBrZXksIG1EYXRhTmFtZSkge1xuICAgIGlmICghUmVmbGVjdC5oYXNNZXRhZGF0YShtRGF0YU5hbWUsIHRhcmdldCkpXG4gICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGFyZ2V0LCBtRGF0YU5hbWUsIG5ldyBBcnJheSgpKTtcbiAgICBjb25zdCBtYXAgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRhcmdldCwgbURhdGFOYW1lKTtcbiAgICBtYXAucHVzaChrZXkudG9TdHJpbmcoKSk7XG59XG5leHBvcnRzLmJlZm9yZVByb3BlcnR5RGVzY3JpcHRvcnMgPSBiZWZvcmVQcm9wZXJ0eURlc2NyaXB0b3JzO1xuZnVuY3Rpb24gZ2V0dGVyKGluc3RhbmNlLCBrZXksIG5zID0gXCJcIikge1xuICAgIGxldCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICBpZiAobnMpXG4gICAgICAgIHN0cmluZ0tleSA9IGAke25zfToke2tleX1gO1xuICAgIGlmICghbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShpbnN0YW5jZSwgXCJub3JtYWxGdW5jdGlvbmFsaXR5XCIpKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwiZGVmYXVsdFNldHRpbmdzXCIpIHx8IHt9O1xuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQoZGVmYXVsdFNldHRpbmdzLCBzdHJpbmdLZXkpO1xuICAgIH1cbiAgICBjb25zdCBtRGF0YSA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YShpbnN0YW5jZSwgc3RyaW5nS2V5KTtcbiAgICBpZiAobURhdGEpXG4gICAgICAgIHJldHVybiBtRGF0YS52YWx1ZU9mKCk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmV4cG9ydHMuZ2V0dGVyID0gZ2V0dGVyO1xuZnVuY3Rpb24gc2V0dGVyKGluc3RhbmNlLCBrZXksIG5ld1ZhbCwgbnMgPSBcIlwiKSB7XG4gICAgbGV0IHN0cmluZ0tleSA9IGtleS50b1N0cmluZygpO1xuICAgIGlmIChucylcbiAgICAgICAgc3RyaW5nS2V5ID0gYCR7bnN9OiR7a2V5fWA7XG4gICAgaWYgKCFucyAmJiBpbnN0YW5jZVtzdHJpbmdLZXldID09PSBuZXdWYWwpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAoIW1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwibm9ybWFsRnVuY3Rpb25hbGl0eVwiKSkge1xuICAgICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGluc3RhbmNlLCBcImRlZmF1bHRTZXR0aW5nc1wiKSB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0U2V0dGluZ3MsIHsgW3N0cmluZ0tleV06IG5ld1ZhbCB9KTtcbiAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YShpbnN0YW5jZSwgXCJkZWZhdWx0U2V0dGluZ3NcIiwgZGVmYXVsdFNldHRpbmdzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtRGF0YSA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YShpbnN0YW5jZSwgc3RyaW5nS2V5KTtcbiAgICBpZiAobmV3VmFsIGluc3RhbmNlb2YgQmluZGluZ18xLkJpbmRpbmcpIHtcbiAgICAgICAgbmV3VmFsLmluc3RhbGwoaW5zdGFuY2UsIGtleSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgbURhdGEuc2V0VmFsdWUobmV3VmFsKTtcbn1cbmV4cG9ydHMuc2V0dGVyID0gc2V0dGVyO1xuZnVuY3Rpb24gY3JlYXRlRGVjb3JhdG9yRGVzY3JpcHRvcih0YXJnZXQsIGtleSwgdHlwZSwgcGFyYW1zKSB7XG4gICAgY29uc3QgcHJvcERlc2MgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgY29uc3Qgc3RyaW5nS2V5ID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIGtleSk7XG4gICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGRlY29yYXRvckdldHRlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIGdldHRlcih0aGF0LCBzdHJpbmdLZXkpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIGRlY29yYXRvclNldHRlcihuZXdWYWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgbURhdGEgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcywga2V5KTtcbiAgICAgICAgICAgIGxldCBmaWVsZDtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcIkF0dHJpYnV0ZVwiKSB7XG4gICAgICAgICAgICAgICAgZmllbGQgPSBuZXcgQXR0cmlidXRlXzEuQXR0cmlidXRlKHRoYXQsIHN0cmluZ0tleSwgcGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiUHJvcGVydHlcIikge1xuICAgICAgICAgICAgICAgIGZpZWxkID0gbmV3IFByb3BlcnR5XzEuUHJvcGVydHkodGhhdCwgc3RyaW5nS2V5LCBwYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGZpZWxkID0gbmV3IFdhdGNoZWRfMS5XYXRjaGVkKHRoYXQsIHN0cmluZ0tleSwgcGFyYW1zKTtcbiAgICAgICAgICAgIGlmIChtRGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICgobURhdGEgaW5zdGFuY2VvZiBBdHRyaWJ1dGVfMS5BdHRyaWJ1dGUgfHwgbURhdGEgaW5zdGFuY2VvZiBQcm9wZXJ0eV8xLlByb3BlcnR5KSAmJiBmaWVsZCBpbnN0YW5jZW9mIFdhdGNoZWRfMS5XYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLnNldFN1Yk9iamVjdChtRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lV2lsZGNhcmRNZXRhZGF0YSh0aGlzLCBzdHJpbmdLZXksIGZpZWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoKGZpZWxkIGluc3RhbmNlb2YgUHJvcGVydHlfMS5Qcm9wZXJ0eSB8fCBmaWVsZCBpbnN0YW5jZW9mIEF0dHJpYnV0ZV8xLkF0dHJpYnV0ZSkgJiYgbURhdGEgaW5zdGFuY2VvZiBXYXRjaGVkXzEuV2F0Y2hlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW1EYXRhLnN1Yk9iamVjdClcbiAgICAgICAgICAgICAgICAgICAgICAgIG1EYXRhLnNldFN1Yk9iamVjdChmaWVsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lV2lsZGNhcmRNZXRhZGF0YSh0aGlzLCBzdHJpbmdLZXksIGZpZWxkKTtcbiAgICAgICAgICAgIGlmICgoKHR5cGUgPT09IFwiQXR0cmlidXRlXCIgfHwgdHlwZSA9PT0gXCJQcm9wZXJ0eVwiKSAmJiAhKG1EYXRhIGluc3RhbmNlb2YgV2F0Y2hlZF8xLldhdGNoZWQpKSB8fCB0eXBlID09PSBcIldhdGNoZWRcIikge1xuICAgICAgICAgICAgICAgIHNldHRlcih0aGF0LCBzdHJpbmdLZXksIG5ld1ZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcERlc2MgJiYgcHJvcERlc2Muc2V0ICYmIHByb3BEZXNjLnNldC5uYW1lID09PSBcImRlY29yYXRvclNldHRlclwiKVxuICAgICAgICAgICAgICAgIHByb3BEZXNjLnNldC5jYWxsKHRoaXMsIG5ld1ZhbCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xufVxuZXhwb3J0cy5jcmVhdGVEZWNvcmF0b3JEZXNjcmlwdG9yID0gY3JlYXRlRGVjb3JhdG9yRGVzY3JpcHRvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpuSmhiV1YzYjNKckxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOTFkR2xzY3k5bWNtRnRaWGR2Y21zdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN3NFEwRkJNa003UVVGRE0wTXNhMFJCUVdsRk8wRkJRMnBGTEdkRVFVRTRSRHRCUVVNNVJDdzRRMEZCTWtRN1FVRkZNMFFzYTBSQlFTdEhPMEZCYTBJdlJ5eFRRVUZuUWl4NVFrRkJlVUlzUTBGQlF5eE5RVUZYTEVWQlFVVXNSMEZCVnl4RlFVRkZMRk5CUVhkQ08wbEJSWGhHTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExGTkJRVk1zUlVGQlJTeE5RVUZOTEVOQlFVTTdVVUZCUlN4NVFrRkJZeXhEUVVGRExFMUJRVTBzUlVGQlJTeFRRVUZUTEVWQlFVVXNTVUZCU1N4TFFVRkxMRVZCUVZVc1EwRkJReXhEUVVGRE8wbEJRM0JITEUxQlFVMHNSMEZCUnl4SFFVRkhMSE5DUVVGWExFTkJRVU1zVFVGQlRTeEZRVUZGTEZOQlFWTXNRMEZCWVN4RFFVRkRPMGxCUTNaRUxFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGRE4wSXNRMEZCUXp0QlFVeEVMRGhFUVV0RE8wRkJZVVFzVTBGQlowSXNUVUZCVFN4RFFVRnhSQ3hSUVVGWExFVkJRVVVzUjBGQlRTeEZRVUZGTEV0QlFXRXNSVUZCUlR0SlFVTXpSeXhKUVVGSkxGTkJRVk1zUjBGQlJ5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkRMMElzU1VGQlNTeEZRVUZGTzFGQlFVVXNVMEZCVXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hKUVVGSkxFZEJRVWNzUlVGQlJTeERRVUZETzBsQlEyNURMRWxCUVVrc1EwRkJReXh6UWtGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4eFFrRkJjVUlzUTBGQlF5eEZRVUZGTzFGQlF5OURMRTFCUVUwc1pVRkJaU3hIUVVGSExITkNRVUZYTEVOQlFVTXNVVUZCVVN4RlFVRkZMR2xDUVVGcFFpeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUTNaRkxFOUJRVThzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4bFFVRmxMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03UzBGRGJFUTdTVUZEUkN4TlFVRk5MRXRCUVVzc1IwRkJSeXc0UWtGQmJVSXNRMEZCUXl4UlFVRlJMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03U1VGRGRrUXNTVUZCU1N4TFFVRkxPMUZCUVVVc1QwRkJUeXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdTVUZEYkVNc1QwRkJUeXhUUVVGVExFTkJRVU03UVVGRGNrSXNRMEZCUXp0QlFWWkVMSGRDUVZWRE8wRkJaVVFzVTBGQlowSXNUVUZCVFN4RFFVVm5RaXhSUVVGWExFVkJRVVVzUjBGQlRTeEZRVUZGTEUxQlFYRkNMRVZCUVVVc1MwRkJZU3hGUVVGRk8wbEJSemRHTEVsQlFVa3NVMEZCVXl4SFFVRkhMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dEpRVU12UWl4SlFVRkpMRVZCUVVVN1VVRkJSU3hUUVVGVExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNN1NVRkhia01zU1VGQlNTeERRVUZETEVWQlFVVXNTVUZCU1N4UlFVRlJMRU5CUVVrc1UwRkJVeXhEUVVGRExFdEJRVXNzVFVGQlRUdFJRVUZGTEU5QlFVODdTVUZIY2tRc1NVRkJTU3hEUVVGRExITkNRVUZYTEVOQlFVTXNVVUZCVVN4RlFVRkZMSEZDUVVGeFFpeERRVUZETEVWQlFVVTdVVUZETDBNc1RVRkJUU3hsUVVGbExFZEJRVWNzYzBKQlFWY3NRMEZCUXl4UlFVRlJMRVZCUVVVc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRka1VzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4bFFVRmxMRVZCUVVVc1JVRkJSU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRlRVFzZVVKQlFXTXNRMEZCUXl4UlFVRlJMRVZCUVVVc2FVSkJRV2xDTEVWQlFVVXNaVUZCWlN4RFFVRkRMRU5CUVVNN1VVRkROMFFzVDBGQlR6dExRVU5XTzBsQlIwUXNUVUZCVFN4TFFVRkxMRWRCUVVjc09FSkJRVzFDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRE8wbEJSWFpFTEVsQlFVa3NUVUZCVFN4WlFVRlpMR2xDUVVGUExFVkJRVVU3VVVGRE0wSXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdTMEZEYWtNN08xRkJRVTBzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRCUVVOc1F5eERRVUZETzBGQmVrSkVMSGRDUVhsQ1F6dEJRVmRFTEZOQlFXZENMSGxDUVVGNVFpeERRVWRVTEUxQlFWTXNSVUZCUlN4SFFVRk5MRVZCUVVVc1NVRkJiVUlzUlVGQlJTeE5RVUZUTzBsQlJUZEZMRTFCUVUwc1VVRkJVU3hIUVVGSExFOUJRVThzUTBGQlF5eDNRa0ZCZDBJc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZETDBRc1RVRkJUU3hUUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUldwRExFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRM0JETEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUlVGQlJUdFJRVU5vUXl4SFFVRkhMRVZCUVVVc1UwRkJVeXhsUVVGbE8xbEJRM3BDTEUxQlFVMHNTVUZCU1N4SFFVRlJMRWxCUVVrc1EwRkJRenRaUVVOMlFpeFBRVUZQTEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03VVVGRGJrTXNRMEZCUXp0UlFVTkVMRWRCUVVjc1JVRkJSU3hUUVVGVExHVkJRV1VzUTBGQlF5eE5RVUZYTzFsQlEzSkRMRTFCUVUwc1NVRkJTU3hIUVVGUkxFbEJRVWtzUTBGQlF6dFpRVU4yUWl4TlFVRk5MRXRCUVVzc1IwRkJSeXc0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGSE4wTXNTVUZCU1N4TFFVRkxMRU5CUVVNN1dVRkRWaXhKUVVGSkxFbEJRVWtzUzBGQlN5eFhRVUZYTEVWQlFVVTdaMEpCUTNSQ0xFdEJRVXNzUjBGQlJ5eEpRVUZKTEhGQ1FVRlRMRU5CUVVNc1NVRkJTU3hGUVVGRkxGTkJRVk1zUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0aFFVTnNSRHRwUWtGQlRTeEpRVUZKTEVsQlFVa3NTMEZCU3l4VlFVRlZMRVZCUVVVN1owSkJRelZDTEV0QlFVc3NSMEZCUnl4SlFVRkpMRzFDUVVGUkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZOQlFWTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRoUVVOcVJEczdaMEpCUVUwc1MwRkJTeXhIUVVGSExFbEJRVWtzYVVKQlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVc1UwRkJVeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzFsQlIzQkVMRWxCUVVrc1MwRkJTeXhGUVVGRk8yZENRVU5RTEVsQlFVa3NRMEZCUXl4TFFVRkxMRmxCUVZrc2NVSkJRVk1zU1VGQlNTeExRVUZMTEZsQlFWa3NiVUpCUVZFc1EwRkJReXhKUVVGSkxFdEJRVXNzV1VGQldTeHBRa0ZCVHl4RlFVRkZPMjlDUVVOMlJpeExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8yOUNRVU14UWl4cFEwRkJjMElzUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVXl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8ybENRVU5zUkR0eFFrRkJUU3hKUVVGSkxFTkJRVU1zUzBGQlN5eFpRVUZaTEcxQ1FVRlJMRWxCUVVrc1MwRkJTeXhaUVVGWkxIRkNRVUZUTEVOQlFVTXNTVUZCU1N4TFFVRkxMRmxCUVZrc2FVSkJRVThzUlVGQlJUdHZRa0ZET1VZc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTzNkQ1FVRkZMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdhVUpCUTI1RU8yRkJRMG83TzJkQ1FVRk5MR2xEUVVGelFpeERRVUZETEVsQlFVa3NSVUZCUlN4VFFVRlRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRGRFUXNTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hMUVVGTExGZEJRVmNzU1VGQlNTeEpRVUZKTEV0QlFVc3NWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFdEJRVXNzV1VGQldTeHBRa0ZCVHl4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFdEJRVXNzVTBGQlV5eEZRVUZGTzJkQ1FVTjBSeXhOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZOQlFWTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRoUVVOdVF6dFpRVU5FTEVsQlFVa3NVVUZCVVN4SlFVRkpMRkZCUVZFc1EwRkJReXhIUVVGSExFbEJRVWtzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRXRCUVVzc2FVSkJRV2xDTzJkQ1FVRkZMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVNM1J5eERRVUZETzFGQlEwUXNWVUZCVlN4RlFVRkZMRWxCUVVrN1VVRkRhRUlzV1VGQldTeEZRVUZGTEVsQlFVazdTMEZEY2tJc1EwRkJReXhEUVVGRE8wRkJRMUFzUTBGQlF6dEJRVE5EUkN3NFJFRXlRME1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZGVmaW5lTWV0YWRhdGEodGFyZ2V0LCBrZXksIHZhbCkge1xuICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoa2V5LCB2YWwsIHRhcmdldCk7XG59XG5leHBvcnRzLmRlZmluZU1ldGFkYXRhID0gZGVmaW5lTWV0YWRhdGE7XG5mdW5jdGlvbiBnZXRNZXRhZGF0YSh0YXJnZXQsIGtleSkge1xuICAgIHJldHVybiBSZWZsZWN0LmdldE1ldGFkYXRhKGtleSwgdGFyZ2V0KTtcbn1cbmV4cG9ydHMuZ2V0TWV0YWRhdGEgPSBnZXRNZXRhZGF0YTtcbmZ1bmN0aW9uIGRlZmluZVdpbGRjYXJkTWV0YWRhdGEodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShrZXksIHZhbHVlLCB0YXJnZXQpO1xufVxuZXhwb3J0cy5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhID0gZGVmaW5lV2lsZGNhcmRNZXRhZGF0YTtcbmZ1bmN0aW9uIGdldFdpbGRjYXJkTWV0YWRhdGEodGFyZ2V0LCBrZXkpIHtcbiAgICByZXR1cm4gUmVmbGVjdC5nZXRNZXRhZGF0YShrZXksIHRhcmdldCk7XG59XG5leHBvcnRzLmdldFdpbGRjYXJkTWV0YWRhdGEgPSBnZXRXaWxkY2FyZE1ldGFkYXRhO1xuZnVuY3Rpb24gZ2V0RGVzaWduVHlwZSh0YXJnZXQsIGtleSkge1xuICAgIHJldHVybiBSZWZsZWN0LmdldE1ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdGFyZ2V0LCBrZXkpO1xufVxuZXhwb3J0cy5nZXREZXNpZ25UeXBlID0gZ2V0RGVzaWduVHlwZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXVjBZV1JoZEdFdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wzVjBhV3h6TDIxbGRHRmtZWFJoTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJhVWxCTEZOQlFXZENMR05CUVdNc1EwRkJORU1zVFVGQlV5eEZRVUZGTEVkQlFVMHNSVUZCUlN4SFFVRnJRanRKUVVNelJ5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdRVUZETjBNc1EwRkJRenRCUVVaRUxIZERRVVZETzBGQlYwUXNVMEZCWjBJc1YwRkJWeXhEUVVFMFF5eE5RVUZUTEVWQlFVVXNSMEZCVFR0SlFVTndSaXhQUVVGUExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRelZETEVOQlFVTTdRVUZHUkN4clEwRkZRenRCUVZWRUxGTkJRV2RDTEhOQ1FVRnpRaXhEUVVGRExFMUJRV01zUlVGQlJTeEhRVUZqTEVWQlFVVXNTMEZCVlR0SlFVTTNSU3hQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NSVUZCUlN4TFFVRkxMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03UVVGREwwTXNRMEZCUXp0QlFVWkVMSGRFUVVWRE8wRkJWVVFzVTBGQlowSXNiVUpCUVcxQ0xFTkJRVU1zVFVGQll5eEZRVUZGTEVkQlFXTTdTVUZET1VRc1QwRkJUeXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEVkQlFVY3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRCUVVNMVF5eERRVUZETzBGQlJrUXNhMFJCUlVNN1FVRlZSQ3hUUVVGblFpeGhRVUZoTEVOQlFVTXNUVUZCWXl4RlFVRkZMRWRCUVZjN1NVRkRja1FzVDBGQlR5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZETTBRc1EwRkJRenRCUVVaRUxITkRRVVZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IGVudmlyb25tZW50XzEgPSByZXF1aXJlKFwifmJkby91dGlscy9lbnZpcm9ubWVudFwiKTtcbmNvbnN0IG9uX2NoYW5nZV8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm9uLWNoYW5nZVwiKSk7XG5mdW5jdGlvbiB1Y0ZpcnN0KHN0cikge1xuICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5leHBvcnRzLnVjRmlyc3QgPSB1Y0ZpcnN0O1xuZnVuY3Rpb24gY2FtZWxDYXNlMmtlYmFiQ2FzZShzdHIpIHtcbiAgICBzdHIgPSBzdHIuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW2EtejAtOV18KD89W0EtWl0pKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbn1cbmV4cG9ydHMuY2FtZWxDYXNlMmtlYmFiQ2FzZSA9IGNhbWVsQ2FzZTJrZWJhYkNhc2U7XG5mdW5jdGlvbiBwYXNjYWxDYXNlMmtlYmFiQ2FzZShzdHIpIHtcbiAgICBzdHIgPSB1Y0ZpcnN0KHN0cik7XG4gICAgcmV0dXJuIGNhbWVsQ2FzZTJrZWJhYkNhc2Uoc3RyKTtcbn1cbmV4cG9ydHMucGFzY2FsQ2FzZTJrZWJhYkNhc2UgPSBwYXNjYWxDYXNlMmtlYmFiQ2FzZTtcbmZ1bmN0aW9uIHJlbW92ZUVsZW1lbnRGcm9tQXJyYXkoYXJyYXksIGVsZW1lbnQpIHtcbiAgICBjb25zdCBpbmRleCA9IGFycmF5LmluZGV4T2YoZWxlbWVudCk7XG4gICAgaWYgKGluZGV4ID49IDApXG4gICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG59XG5leHBvcnRzLnJlbW92ZUVsZW1lbnRGcm9tQXJyYXkgPSByZW1vdmVFbGVtZW50RnJvbUFycmF5O1xuZnVuY3Rpb24gZ2V0UHJvdG90eXBlTmFtZXNSZWN1cnNpdmUob2JqZWN0LCBwcm90b3R5cGVzID0gW10pIHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAocHJvdG90eXBlKSB7XG4gICAgICAgIHByb3RvdHlwZXMucHVzaChwcm90b3R5cGUuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICAgIGdldFByb3RvdHlwZU5hbWVzUmVjdXJzaXZlKHByb3RvdHlwZSwgcHJvdG90eXBlcyk7XG4gICAgfVxuICAgIHJldHVybiBwcm90b3R5cGVzO1xufVxuZXhwb3J0cy5nZXRQcm90b3R5cGVOYW1lc1JlY3Vyc2l2ZSA9IGdldFByb3RvdHlwZU5hbWVzUmVjdXJzaXZlO1xuZnVuY3Rpb24gaW5jbHVkZXNNZW1iZXJPZkxpc3Qoc2VhcmNoLCBsaXN0LCBleHRlbnNpb24gPSAnJykge1xuICAgIGZvciAoY29uc3QgbWVtYmVyIG9mIGxpc3QpIHtcbiAgICAgICAgaWYgKHNlYXJjaC5pbmNsdWRlcyhgJHttZW1iZXJ9JHtleHRlbnNpb259YCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaW5jbHVkZXNNZW1iZXJPZkxpc3QgPSBpbmNsdWRlc01lbWJlck9mTGlzdDtcbmZ1bmN0aW9uIGNvbnN0cnVjdFR5cGVPZkhUTUxBdHRyaWJ1dGUob2JqZWN0LCBrZXkpIHtcbiAgICBpZiAoIWVudmlyb25tZW50XzEuaXNCcm93c2VyKCkpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCB0eXBlID0gbWV0YWRhdGFfMS5nZXREZXNpZ25UeXBlKG9iamVjdCwga2V5KTtcbiAgICBjb25zdCBhdHRyVmFsdWUgPSBvYmplY3QuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgbGV0IHZhbHVlVG9TZXQgPSBhdHRyVmFsdWU7XG4gICAgaWYgKGF0dHJWYWx1ZSAmJiB0eXBlICYmIHR5cGUubmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChbXCJOdW1iZXJcIiwgXCJCb29sZWFuXCIsIFwiT2JqZWN0XCIsIFwiQXJyYXlcIl0uaW5jbHVkZXModHlwZS5uYW1lKSkge1xuICAgICAgICAgICAgdmFsdWVUb1NldCA9IEpTT04ucGFyc2UoYXR0clZhbHVlLnJlcGxhY2UoLycvZywgJ1wiJykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlLm5hbWUgPT09IFwiQmFzZUNvbnN0cnVjdG9yXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IEpTT04ucGFyc2UoYXR0clZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IG9iai5jbGFzc05hbWU7XG4gICAgICAgICAgICBpZiAoIWNsYXNzTmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDbGFzc05hbWUgaXMgbWlzc2luZyBpbiBjb21wb25lbnQgYXR0cmlidXRlIHZhbHVlXCIpO1xuICAgICAgICAgICAgZGVsZXRlIG9iai5jbGFzc05hbWU7XG4gICAgICAgICAgICB2YWx1ZVRvU2V0ID0gbmV3ICh0eXBlLm5hbWUpKG9iaik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbHVlVG9TZXQgJiYgdHlwZSAmJiB2YWx1ZVRvU2V0LmNvbnN0cnVjdG9yLm5hbWUgIT09IHR5cGUubmFtZSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXR0cmlidXRlIHR5cGUgZXF1YWxzIG5vdCBkZWZpbmVkIHR5cGVcIik7XG4gICAgcmV0dXJuIHZhbHVlVG9TZXQ7XG59XG5leHBvcnRzLmNvbnN0cnVjdFR5cGVPZkhUTUxBdHRyaWJ1dGUgPSBjb25zdHJ1Y3RUeXBlT2ZIVE1MQXR0cmlidXRlO1xuZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlICE9PSBPYmplY3QodmFsdWUpKTtcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcbmZ1bmN0aW9uIGlzUHJveHkodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChvbl9jaGFuZ2VfMS5kZWZhdWx0LnRhcmdldCh2YWx1ZSkgPT09IHZhbHVlKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnRzLmlzUHJveHkgPSBpc1Byb3h5O1xuZnVuY3Rpb24gZ2V0UHJveHlUYXJnZXQodmFsdWUpIHtcbiAgICBpZiAoaXNQcm94eSh2YWx1ZSkpXG4gICAgICAgIHJldHVybiBvbl9jaGFuZ2VfMS5kZWZhdWx0LnRhcmdldCh2YWx1ZSk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZXhwb3J0cy5nZXRQcm94eVRhcmdldCA9IGdldFByb3h5VGFyZ2V0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhScGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZkWFJwYkhNdmRYUnBiQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3hyUkVGQmIwUTdRVUZEY0VRc2QwUkJRVzFFTzBGQlEyNUVMR3RGUVVGcFF6dEJRVk5xUXl4VFFVRm5RaXhQUVVGUExFTkJRVU1zUjBGQlZ6dEpRVU12UWl4UFFVRlBMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTjBSQ3hEUVVGRE8wRkJSa1FzTUVKQlJVTTdRVUZUUkN4VFFVRm5RaXh0UWtGQmJVSXNRMEZCUXl4SFFVRlhPMGxCUXpORExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGFrUXNUMEZCVHl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExEaENRVUU0UWl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzBGQlF6bEZMRU5CUVVNN1FVRklSQ3hyUkVGSFF6dEJRVk5FTEZOQlFXZENMRzlDUVVGdlFpeERRVUZETEVkQlFWYzdTVUZETlVNc1IwRkJSeXhIUVVGSExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTnVRaXhQUVVGUExHMUNRVUZ0UWl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRM0JETEVOQlFVTTdRVUZJUkN4dlJFRkhRenRCUVZORUxGTkJRV2RDTEhOQ1FVRnpRaXhEUVVGRExFdEJRVmtzUlVGQlJTeFBRVUZaTzBsQlF6ZEVMRTFCUVUwc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkRja01zU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUXp0UlFVRkZMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpORExFTkJRVU03UVVGSVJDeDNSRUZIUXp0QlFWTkVMRk5CUVdkQ0xEQkNRVUV3UWl4RFFVRkRMRTFCUVZjc1JVRkJSU3hoUVVGMVFpeEZRVUZGTzBsQlF6ZEZMRTFCUVUwc1UwRkJVeXhIUVVGSExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRhRVFzU1VGQlNTeFRRVUZUTEVWQlFVVTdVVUZEV0N4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkROVU1zTUVKQlFUQkNMRU5CUVVNc1UwRkJVeXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzB0QlEzSkVPMGxCUTBRc1QwRkJUeXhWUVVGVkxFTkJRVU03UVVGRGRFSXNRMEZCUXp0QlFWQkVMR2RGUVU5RE8wRkJWMFFzVTBGQlowSXNiMEpCUVc5Q0xFTkJRVU1zVFVGQmVVSXNSVUZCUlN4SlFVRmpMRVZCUVVVc1dVRkJiMElzUlVGQlJUdEpRVU5zUnl4TFFVRkxMRTFCUVUwc1RVRkJUU3hKUVVGSkxFbEJRVWtzUlVGQlJUdFJRVU4yUWl4SlFVRkpMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVkQlFVY3NVMEZCVXl4RlFVRkZMRU5CUVVNc1JVRkJSVHRaUVVNeFF5eFBRVUZQTEVsQlFVa3NRMEZCUXp0VFFVTm1PMHRCUTBvN1NVRkRSQ3hQUVVGUExFdEJRVXNzUTBGQlF6dEJRVU5xUWl4RFFVRkRPMEZCVUVRc2IwUkJUME03UVVGWFJDeFRRVUZuUWl3MFFrRkJORUlzUTBGQlF5eE5RVUZ0UWl4RlFVRkZMRWRCUVZjN1NVRkRla1VzU1VGQlNTeERRVUZETEhWQ1FVRlRMRVZCUVVVN1VVRkJSU3hQUVVGUE8wbEJRM3BDTEUxQlFVMHNTVUZCU1N4SFFVRkhMSGRDUVVGaExFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUTNoRExFMUJRVTBzVTBGQlV5eEhRVUZITEUxQlFVMHNRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGSk0wTXNTVUZCU1N4VlFVRlZMRWRCUVZFc1UwRkJVeXhEUVVGRE8wbEJRMmhETEVsQlFVa3NVMEZCVXl4SlFVRkpMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeExRVUZMTEZOQlFWTXNSVUZCUlR0UlFVTTVReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZOQlFWTXNSVUZCUlN4UlFVRlJMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVNNVJDeFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRM3BFTzFGQlEwUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hMUVVGTExHbENRVUZwUWl4RlFVRkZPMWxCUTJwRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03V1VGRGJFTXNUVUZCVFN4VFFVRlRMRWRCUVVjc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF6dFpRVU5vUXl4SlFVRkpMRU5CUVVNc1UwRkJVenRuUWtGQlJTeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRzFFUVVGdFJDeERRVUZETEVOQlFVTTdXVUZEY2tZc1QwRkJUeXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETzFsQlEzSkNMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRM0pETzB0QlEwbzdTVUZEUkN4SlFVRkpMRlZCUVZVc1NVRkJTU3hKUVVGSkxFbEJRVWtzVlVGQlZTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRXRCUVVzc1NVRkJTU3hEUVVGRExFbEJRVWs3VVVGQlJTeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSGREUVVGM1F5eERRVUZETEVOQlFVTTdTVUZETDBnc1QwRkJUeXhWUVVGVkxFTkJRVU03UVVGRGRFSXNRMEZCUXp0QlFYUkNSQ3h2UlVGelFrTTdRVUZUUkN4VFFVRm5RaXhYUVVGWExFTkJRVU1zUzBGQlZUdEpRVU5zUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhMUVVGTExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTNKRExFTkJRVU03UVVGR1JDeHJRMEZGUXp0QlFWTkVMRk5CUVdkQ0xFOUJRVThzUTBGQlF5eExRVUZWTzBsQlF6bENMRWxCUVVrc1MwRkJTeXhMUVVGTExGTkJRVk1zU1VGQlNTeExRVUZMTEV0QlFVc3NTVUZCU1R0UlFVRkZMRTlCUVU4c1MwRkJTeXhEUVVGRE8wbEJRM2hFTEVsQlFVa3NiVUpCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NTMEZCU3p0UlFVRkZMRTlCUVU4c1MwRkJTeXhEUVVGRE8wbEJRMjVFTEU5QlFVOHNTVUZCU1N4RFFVRkRPMEZCUTJoQ0xFTkJRVU03UVVGS1JDd3dRa0ZKUXp0QlFWVkVMRk5CUVdkQ0xHTkJRV01zUTBGQlF5eExRVUZWTzBsQlEzSkRMRWxCUVVrc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF6dFJRVUZGTEU5QlFVOHNiVUpCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYkVRc1QwRkJUeXhMUVVGTExFTkJRVU03UVVGRGFrSXNRMEZCUXp0QlFVaEVMSGREUVVkREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbndpbmRvdy52aXJ0dWFsUm91dGVzID0gW1wiQ29uZmlnXCIsIFwiR2FtZUxvYmJ5XCIsIFwiSG9tZVwiXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRtbHlkSFZoYkVWdWRISjVVRzlwYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5MllYSXZkRzF3TDNacGNuUjFZV3hGYm5SeWVWQnZhVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJUU3hOUVVGUExFTkJRVU1zWVVGQllTeEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkRMRmRCUVZjc1JVRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5SjkiXSwic291cmNlUm9vdCI6IiJ9