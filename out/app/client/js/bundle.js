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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZVdpbmRvdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvR2FtZVdpbmRvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkRBQWlFO0FBQ2pFLHNEQUF3RDtBQUN4RCxzREFBaUQ7QUFDakQsMkRBQXFDO0FBVXJDLElBQXFCLFVBQVUsR0FBL0IsTUFBcUIsVUFBVyxTQUFRLG9DQUFvQixDQUFDLGlCQUFpQixDQUFDO0lBQS9FOztRQWtCMEIsV0FBTSxHQUFtQixJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtZQUMxRSxXQUFXLEVBQUUsSUFBSTtTQUNwQixDQUFDLENBQUM7UUFTbUIsVUFBSyxHQUFrQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUF5RHBFLENBQUM7SUFsRFUsaUJBQWlCO1FBQ3BCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFO1lBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBU1MsV0FBVztRQUVqQixNQUFNLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTdDLE1BQU0sTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV2RixNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUV6QyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVsQyxNQUFNLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUYsS0FBSyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFFM0IsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFaEcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXRCLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFN0YsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQVFTLGFBQWEsS0FBSyxDQUFDO0NBQ2hDLENBQUE7QUE3RTBCLGtCQUFPLEdBQVcsUUFBUSxDQUFDO0FBU3RDO0lBQVgscUJBQVEsRUFBRTswREFBbUIsT0FBTyxvQkFBUCxPQUFPLENBQUMsTUFBTTswQ0FFekM7QUFTUztJQUFYLHFCQUFRLEVBQUU7MERBQWtCLE9BQU8sb0JBQVAsT0FBTyxDQUFDLEtBQUs7eUNBQXNCO0FBN0IvQyxVQUFVO0lBRDlCLDRCQUFlLEVBQUU7R0FDRyxVQUFVLENBc0Y5QjtrQkF0Rm9CLFVBQVUifQ==

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdENvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvVGVzdENvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2REFBaUU7QUFDakUsc0RBQXdEO0FBQ3hELHNEQUFpRDtBQVVqRCxJQUFxQixhQUFhLEdBQWxDLE1BQXFCLGFBQWMsU0FBUSxvQ0FBb0IsQ0FBQyxXQUFXLENBQUM7SUFBNUU7O1FBUTBCLG1CQUFjLEdBQUcsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7SUFFdEYsQ0FBQztDQUFBLENBQUE7QUFGZTtJQUFYLHFCQUFRLEVBQUU7O3FEQUF1RTtBQVJqRSxhQUFhO0lBRGpDLDRCQUFlLEVBQUU7R0FDRyxhQUFhLENBVWpDO2tCQVZvQixhQUFhIn0=

/***/ }),

/***/ "./source/app/client/ts/components/ViewLink.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
const BaseComponent_1 = __webpack_require__("./source/app/client/ts/lib/BaseComponent.ts");
const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");
const Test1_1 = __webpack_require__("./source/app/client/ts/models/Test1.ts");
let ViewLink = class ViewLink extends BaseComponent_1.BaseComponentFactory(HTMLAnchorElement) {
    constructor(_params) {
        super();
        this.model = new Test1_1.Test1({ title: String(Date.now()) });
        this.test = this.model.bind("title");
        this.tester = this.model.bind("tester");
        this.testen = {};
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
    decorators_1.watched(), decorators_1.attribute(),
    tslib_1.__metadata("design:type", Array)
], ViewLink.prototype, "tester", void 0);
tslib_1.__decorate([
    decorators_1.property(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Object !== "undefined" && Object) === "function" ? _a : Object)
], ViewLink.prototype, "testen", void 0);
ViewLink = tslib_1.__decorate([
    decorators_1.baseConstructor(),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof ConstParams !== "undefined" && ConstParams) === "function" ? _b : Object])
], ViewLink);
exports.default = ViewLink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld0xpbmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1ZpZXdMaW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2REFBaUU7QUFDakUsc0RBQXNGO0FBQ3RGLGdEQUE2QztBQVU3QyxJQUFxQixRQUFRLEdBQTdCLE1BQXFCLFFBQVMsU0FBUSxvQ0FBb0IsQ0FBQyxpQkFBaUIsQ0FBQztJQXlDekUsWUFBWSxPQUErQjtRQUN2QyxLQUFLLEVBQUUsQ0FBQztRQTNCTyxVQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQVFoRCxTQUFJLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFRN0IsV0FBTSxHQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBUXpELFdBQU0sR0FBVyxFQUFFLENBQUM7SUFJdkMsQ0FBQztJQU9NLG1CQUFtQjtRQUN0QixLQUFLLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQVNTLGVBQWUsQ0FBQyxLQUFtQjtRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFRUyxzQkFBc0I7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFRUyxtQkFBbUIsQ0FBQyxLQUFZO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQVNTLFlBQVksQ0FBQyxPQUF1QjtRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQVNTLFlBQVksQ0FBQyxJQUFvQjtRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQVNTLGNBQWMsQ0FBQyxPQUF1QjtRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBU1MsV0FBVyxDQUFDLEtBQXFCO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBU1MsY0FBYyxDQUFDLE9BQXVCO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFTTyxXQUFXLENBQUMsS0FBWTtRQUM1QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0osQ0FBQTtBQWhKMEIsZ0JBQU8sR0FBVyxHQUFHLENBQUM7QUFPakM7SUFBWCxxQkFBUSxFQUFFOzt1Q0FBeUQ7QUFRdkQ7SUFBWixzQkFBUyxFQUFFOztzQ0FBZ0Q7QUFRcEM7SUFBdkIsb0JBQU8sRUFBRSxFQUFFLHNCQUFTLEVBQUU7O3dDQUFxRDtBQVFoRTtJQUFYLHFCQUFRLEVBQUU7MERBQWdCLE1BQU0sb0JBQU4sTUFBTTt3Q0FBTTtBQXZDdEIsUUFBUTtJQUQ1Qiw0QkFBZSxFQUFFO2lFQTBDUSxXQUFXLG9CQUFYLFdBQVc7R0F6Q2hCLFFBQVEsQ0F3SjVCO2tCQXhKb0IsUUFBUSJ9

/***/ }),

/***/ "./source/app/client/ts/components/ViewRouter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _client_lib_BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./source/app/client/ts/lib/BaseComponent.ts");
/* harmony import */ var _bdo_utils_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./source/app/utils/util.ts");
/* harmony import */ var _bdo_utils_util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./source/app/utils/decorators.ts");
/* harmony import */ var _bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var navigo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/navigo/lib/navigo.min.js");
/* harmony import */ var navigo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(navigo__WEBPACK_IMPORTED_MODULE_4__);






let ViewRouter = class ViewRouter extends Object(_client_lib_BaseComponent__WEBPACK_IMPORTED_MODULE_1__["BaseComponentFactory"])(HTMLElement) {
    constructor() {
        super(...arguments);
        this.router = new navigo__WEBPACK_IMPORTED_MODULE_4___default.a();
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
            if (!Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_2__["includesMemberOfList"])(Route.attachToServers, [global.process.env.name, '*']))
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
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_3__["property"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ViewRouter.prototype, "router", void 0);
ViewRouter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_3__["baseConstructor"])()
], ViewRouter);
/* harmony default export */ __webpack_exports__["default"] = (ViewRouter);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js?cd00")))

/***/ }),

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
/* harmony import */ var _bdo_utils_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./source/app/utils/util.ts");
/* harmony import */ var _bdo_utils_util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_6__);







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
            const properties = Object(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_4__["getMetadata"])(this, "definedProperties");
            if (properties) {
                for (const prop of properties.keys()) {
                    props.set(prop, Object(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_4__["getWildcardMetadata"])(this, prop));
                }
            }
            return props;
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
                if (!Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_6__["isPrimitive"])(value))
                    valueToSet = JSON.stringify(value).replace(/\"/g, "'");
                super.setAttribute(qualifiedName, valueToSet);
                valueToSet = Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_6__["constructTypeOfHTMLAttribute"])(this, qualifiedName);
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
                if (Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_6__["isString"])(this.templateString)) {
                    stringToParse = Object(nunjucks__WEBPACK_IMPORTED_MODULE_2__["renderString"])(this.templateString, this.templateParams);
                }
                if (Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_6__["isObject"])(this.templateString)) {
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
            const occurrences = Array.from(document.getElementsByTagName(this.tagName));
            const occurrence = occurrences.indexOf(this);
            return `${className}_${occurrence >= 0 ? occurrence : occurrences.length}`;
        }
    }
    BaseComponent.isBaseComponent = true;
    BaseComponent.isProceduralComponentConstruction = false;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_3__["attribute"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], BaseComponent.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_3__["property"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], BaseComponent.prototype, "isBaseComponent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_3__["property"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], BaseComponent.prototype, "className", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_3__["property"])({ disableTypeGuard: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], BaseComponent.prototype, "templateString", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_3__["property"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof IndexStructure !== "undefined" && IndexStructure) === "function" ? _b : Object)
    ], BaseComponent.prototype, "templateParams", void 0);
    return BaseComponent;
}


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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModel", function() { return ClientModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./source/app/utils/decorators.ts");
/* harmony import */ var _bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bdo_lib_BDOModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./source/app/lib/BDOModel.ts");
/* harmony import */ var _bdo_lib_BDOModel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bdo_lib_BDOModel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client_utils_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./source/app/client/ts/utils/util.ts");
/* harmony import */ var _bdo_utils_framework__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./source/app/utils/framework.ts");
/* harmony import */ var _bdo_utils_framework__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bdo_utils_framework__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./source/app/utils/metadata.ts");
/* harmony import */ var _bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _client_lib_Logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./source/app/client/ts/lib/Logger.ts");
/* harmony import */ var _client_lib_Logger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_client_lib_Logger__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _client_lib_DatabaseManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./source/app/client/ts/lib/DatabaseManager.ts");
/* harmony import */ var _client_lib_DatabaseManager__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_client_lib_DatabaseManager__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _bdo_lib_Watched__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./source/app/lib/Watched.ts");
/* harmony import */ var _bdo_lib_Watched__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_bdo_lib_Watched__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _bdo_utils_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./source/app/utils/util.ts");
/* harmony import */ var _bdo_utils_util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _bdo_lib_ModelRegistry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./source/app/lib/ModelRegistry.ts");
/* harmony import */ var _bdo_lib_ModelRegistry__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_bdo_lib_ModelRegistry__WEBPACK_IMPORTED_MODULE_10__);
var ClientModel_1;











const logger = new _client_lib_Logger__WEBPACK_IMPORTED_MODULE_6__["Logger"]();
const databaseManager = _client_lib_DatabaseManager__WEBPACK_IMPORTED_MODULE_7__["DatabaseManager"].getInstance();
let ClientModel = ClientModel_1 = class ClientModel extends _bdo_lib_BDOModel__WEBPACK_IMPORTED_MODULE_2__["BDOModel"] {
    constructor() {
        super(...arguments);
        this.isClientModel = true;
    }
    static getInstanceByID(id) {
        return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let model = _bdo_lib_ModelRegistry__WEBPACK_IMPORTED_MODULE_10__["ModelRegistry"].getInstance().getModelById(id, this);
            if (!model)
                model = new this();
            const dataFromLocalDB = yield databaseManager
                .database(model.databaseName)
                .collection(model.collectionName)
                .get(id);
            if (dataFromLocalDB) {
                const pendingPromises = [];
                for (const key in dataFromLocalDB) {
                    if (dataFromLocalDB.hasOwnProperty(key)) {
                        const modelElem = Reflect.get(model, key);
                        let klass;
                        let elem = dataFromLocalDB[key];
                        let correspondingListLikeDB = [];
                        if (modelElem instanceof Array) {
                            correspondingListLikeDB = modelElem.map((item) => {
                                if (item instanceof ClientModel_1)
                                    return item.getReferenceString();
                                return item;
                            });
                        }
                        if (elem instanceof Array && Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_9__["difference"])(correspondingListLikeDB, elem).length) {
                            const pendingItems = [];
                            for (let item of elem) {
                                if (Object(_bdo_utils_framework__WEBPACK_IMPORTED_MODULE_4__["isReferenceString"])(item)) {
                                    const refParts = item.split(":")[1];
                                    const className = refParts[1];
                                    klass = __webpack_require__("./source/app/client/ts/models sync recursive ^\\.\\/.*\\.ts$")(`./${className}.ts`)[className];
                                    pendingItems.push(klass.getInstanceByID(refParts[2]).then((result) => {
                                        item = result;
                                    }));
                                }
                            }
                            pendingPromises.push(Promise.all(pendingItems).then());
                        }
                        else if (Object(_bdo_utils_framework__WEBPACK_IMPORTED_MODULE_4__["isReferenceString"])(elem) && elem !== model.getReferenceString()) {
                            const refParts = elem.split(":")[1];
                            const className = refParts[1];
                            klass = __webpack_require__("./source/app/client/ts/models sync recursive ^\\.\\/.*\\.ts$")(`./${className}.ts`)[className];
                            pendingPromises.push(klass.getInstanceByID(refParts[2]).then((result) => {
                                elem = result;
                            }));
                        }
                    }
                }
                yield Promise.all(pendingPromises);
                Object.assign(model, dataFromLocalDB);
            }
            if (!model.id.includes("pending"))
                return resolve(model);
            return resolve();
        }));
    }
    static getInstancesByAttributes(attributes) {
        return _bdo_lib_ModelRegistry__WEBPACK_IMPORTED_MODULE_10__["ModelRegistry"].getInstance().getModelsByAttributes(attributes);
    }
    getNamespacedStorage(key, nsProp, forceNS) {
        return Object(_client_utils_util__WEBPACK_IMPORTED_MODULE_3__["getNamespacedStorage"])(this, key, nsProp, forceNS);
    }
    setUpdateNamespacedStorage(key, newVal, nsProp) {
        return Object(_client_utils_util__WEBPACK_IMPORTED_MODULE_3__["setUpdateNamespacedStorage"])(this, key, newVal, nsProp);
    }
    deleteFromNamespacedStorage(key, nsProp) {
        return Object(_client_utils_util__WEBPACK_IMPORTED_MODULE_3__["deleteFromNamespacedStorage"])(this, key, nsProp);
    }
    save(attr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const definedAttributes = Object(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_5__["getMetadata"])(this, "definedAttributes");
            if (!definedAttributes || attr && !definedAttributes.has(attr))
                throw new Error("invalid defined attributes");
            const attributes = attr ? [attr] : definedAttributes.keys();
            const unsavedChanges = yield this.getUnsavedChanges();
            const toSave = {};
            const sendToServer = {};
            for (const attribute of attributes) {
                if (unsavedChanges.hasOwnProperty(attribute)) {
                    const strAttr = attribute;
                    let proxyVal = Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_9__["getProxyTarget"])(unsavedChanges[strAttr]);
                    if (proxyVal instanceof Array) {
                        proxyVal = proxyVal.map((item) => {
                            if (item instanceof ClientModel_1) {
                                return item.getReferenceString();
                            }
                            return Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_9__["getProxyTarget"])(item);
                        });
                    }
                    if (proxyVal instanceof ClientModel_1)
                        proxyVal = proxyVal.getReferenceString();
                    let wildCardMetadata = Object(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_5__["getWildcardMetadata"])(this, strAttr);
                    if (wildCardMetadata instanceof _bdo_lib_Watched__WEBPACK_IMPORTED_MODULE_8__["Watched"])
                        wildCardMetadata = wildCardMetadata.subObject;
                    if (!wildCardMetadata.doNotPersist)
                        toSave[strAttr] = proxyVal;
                    if (!wildCardMetadata.noServerInteraction)
                        sendToServer[strAttr] = proxyVal;
                }
            }
            try {
                if (Object.keys(toSave).length) {
                    yield databaseManager
                        .database(this.databaseName)
                        .collection(this.collectionName)
                        .update(this.id, toSave);
                }
                if (Object.keys(sendToServer).length)
                    logger.debug(`send ${JSON.stringify(sendToServer)} to server`);
            }
            catch (error) {
                return Promise.reject(error);
            }
            return Promise.resolve(unsavedChanges);
        });
    }
    discard(_attr) {
        throw new Error("Method not implemented.");
    }
    getUnsavedChanges() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.collectionName)
                return Promise.reject("No collectionName provided");
            const unsavedChanges = {};
            let dbCollection = yield databaseManager.database("default").collection(this.collectionName).get(this.id);
            const definedAttributes = Object(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_5__["getMetadata"])(this, "definedAttributes");
            dbCollection = dbCollection || {};
            if (definedAttributes) {
                for (const attr of definedAttributes.keys()) {
                    const strAttr = attr.toString();
                    const attrVal = Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_9__["getProxyTarget"])(this[attr]);
                    if (Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_9__["isArray"])(attrVal) && Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_9__["difference"])(attrVal, dbCollection[strAttr]).length) {
                        unsavedChanges[strAttr] = this[attr];
                    }
                    else if (Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_9__["isObject"])(attrVal) && !Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_9__["isEqual"])(attrVal, dbCollection[strAttr])) {
                        unsavedChanges[strAttr] = this[attr];
                    }
                    else if (Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_9__["isPrimitive"])(attrVal) && attrVal !== dbCollection[strAttr]) {
                        unsavedChanges[strAttr] = this[attr];
                    }
                }
            }
            return Promise.resolve(unsavedChanges);
        });
    }
    onTypeCheckFail(error) {
        logger.error(error.message);
    }
};
ClientModel.isClientModel = true;
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_1__["property"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], ClientModel.prototype, "isClientModel", void 0);
ClientModel = ClientModel_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_1__["baseConstructor"])()
], ClientModel);



/***/ }),

/***/ "./source/app/client/ts/lib/ClientRoute.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
        logger.log(util_1.merge(await this.templateParamsFromServer(), await this.templateParams(params)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50Um91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQ2xpZW50Um91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnREFBNkM7QUFDN0MsMENBQXdDO0FBQ3hDLCtDQUE0QztBQUU1QyxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO0FBVTVCLE1BQWEsV0FBWSxTQUFRLG1CQUFRO0lBQXpDOztRQVFvQixrQkFBYSxHQUFZLElBQUksQ0FBQztJQXNEbEQsQ0FBQztJQTlDRyxJQUFXLE1BQU07UUFDYixNQUFNLE1BQU0sR0FBcUMsRUFBRSxDQUFDO1FBQ3BELEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM3QixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3RjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFXUyxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQXNCO1FBQ2pELE9BQU8sS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBU1MsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFzQjtRQUM1QyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQVVPLEtBQUssQ0FBQyx3QkFBd0I7UUFDbEMsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVztZQUFFLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDcEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzFELE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUQsQ0FBQztDQUNKO0FBOURELGtDQThEQyJ9

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

/***/ "./source/app/client/ts/lib/DatabaseManager.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
const BDODatabaseManager_1 = __webpack_require__("./source/app/lib/BDODatabaseManager.ts");
const localforage_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/localforage/dist/localforage.js"));
class DatabaseManager extends BDODatabaseManager_1.BDODatabasemanager {
    constructor() {
        super();
        this.databases = new Map();
    }
    static getInstance() {
        if (!DatabaseManager.instance)
            DatabaseManager.instance = new DatabaseManager();
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
        this.getDatabase().config({ storeName: this.currentCollection });
        delete this.currentGraph;
        delete this.currentView;
        return this;
    }
    view(name) {
        this.currentView = `view_${name}`;
        this.getDatabase().config({ storeName: this.currentView });
        delete this.currentCollection;
        delete this.currentGraph;
        return this;
    }
    graph(name) {
        this.currentGraph = `graph_${name}`;
        this.getDatabase().config({ storeName: this.currentGraph });
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
                const result = await this.get(id) || {};
                Object.assign(result, values);
                await this.insert(id, result);
                resolve();
            }
            catch (error) {
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
        if (!this.currentDatabase)
            throw new Error("No Database chosen");
        return this.databases.get(this.currentDatabase);
    }
}
exports.DatabaseManager = DatabaseManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWJhc2VNYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0RhdGFiYXNlTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxvRUFBaUU7QUFDakUsc0VBQXNDO0FBRXRDLE1BQWEsZUFBd0YsU0FBUSx1Q0FBa0I7SUFtQjNIO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFSSixjQUFTLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDO0lBU25FLENBQUM7SUFQTSxNQUFNLENBQUMsV0FBVztRQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVE7WUFBRSxlQUFlLENBQUMsUUFBUSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7UUFDaEYsT0FBTyxlQUFlLENBQUMsUUFBUSxDQUFDO0lBQ3BDLENBQUM7SUFNTSxRQUFRLENBQUMsSUFBTztRQUNuQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLHFCQUFXLENBQUMsY0FBYyxDQUFDO2dCQUNoRCxJQUFJLEVBQUUsSUFBSTtnQkFDVixNQUFNLEVBQUUsQ0FBQyxxQkFBVyxDQUFDLFNBQVMsRUFBRSxxQkFBVyxDQUFDLE1BQU0sQ0FBQzthQUN0RCxDQUFDLENBQUMsQ0FBQztTQUNQO1FBQ0QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sVUFBVSxDQUFDLElBQU87UUFDckIsSUFBSSxDQUFDLGlCQUFpQixHQUFNLGNBQWMsSUFBSSxFQUFFLENBQUM7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

/***/ }),

/***/ "./source/app/client/ts/lib/Logger.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsa0RBQTZFO0FBQzdFLHNEQUF3RDtBQVV4RCxJQUFhLE1BQU0sR0FBbkIsTUFBYSxNQUFPLFNBQVEscUJBQVM7SUFlakMsWUFBWSxNQUE0QjtRQUNwQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFUVixtQkFBYyxHQUFHO1lBQ3JCLEdBQUcsRUFBRSxpQ0FBaUM7WUFDdEMsS0FBSyxFQUFFLGtDQUFrQztZQUN6QyxJQUFJLEVBQUUsb0NBQW9DO1lBQzFDLElBQUksRUFBRSxvQ0FBb0M7WUFDMUMsS0FBSyxFQUFFLGdDQUFnQztTQUMxQyxDQUFDO0lBSUYsQ0FBQztJQVdTLFNBQVMsQ0FBQyxRQUFtQixFQUFFLFdBQThCLFNBQVM7UUFDNUUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QyxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0MsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLE1BQU0sVUFBVSxHQUFHLG1DQUFtQyxDQUFDO1FBQ3ZELE1BQU0sT0FBTyxHQUFHLHFDQUFxQyxDQUFDO1FBQ3RELE1BQU0sSUFBSSxHQUFHLHFDQUFxQyxDQUFDO1FBQ25ELElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEQsTUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUM7WUFDbEMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzNCLE1BQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDO1lBQ2xDLE9BQU87Z0JBQ0gsUUFBUSxhQUFhLFVBQVUsUUFBUSxVQUFVLFdBQVcsV0FBVyxRQUFRLEtBQUs7Z0JBQ3BGLFVBQVU7Z0JBQ1YsaUJBQWlCO2dCQUNqQixVQUFVO2dCQUNWLGlCQUFpQjtnQkFDakIsVUFBVTtnQkFDVixhQUFhO2dCQUNiLFVBQVU7Z0JBQ1YsaUJBQWlCO2dCQUNqQixVQUFVO2FBQ2IsQ0FBQztTQUNMO1FBQ0QsT0FBTyxJQUFJLGFBQWEsTUFBTSxRQUFRLE1BQU0sV0FBVyxNQUFNLFFBQVEsR0FBRyxDQUFDO0lBQzdFLENBQUM7SUFVUyxXQUFXLENBQUMsU0FBb0IsRUFBRSxRQUFhO0lBRXpELENBQUM7Q0FDSixDQUFBO0FBcEVZLE1BQU07SUFEbEIsNEJBQWUsRUFBRTtpRUFnQk8sV0FBVyxvQkFBWCxXQUFXO0dBZnZCLE1BQU0sQ0FvRWxCO0FBcEVZLHdCQUFNIn0=

/***/ }),

/***/ "./source/app/client/ts/models sync recursive ^\\.\\/.*\\.ts$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Test.ts": "./source/app/client/ts/models/Test.ts",
	"./Test1.ts": "./source/app/client/ts/models/Test1.ts"
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
webpackContext.id = "./source/app/client/ts/models sync recursive ^\\.\\/.*\\.ts$";

/***/ }),

/***/ "./source/app/client/ts/models/Test.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL21vZGVscy9UZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpREFBcUQ7QUFDckQseURBQXNEO0FBQ3RELHNEQUF3RDtBQVV4RCxJQUFhLElBQUksR0FBakIsTUFBYSxJQUFLLFNBQVEsd0JBQWMsQ0FBQyx5QkFBVyxDQUFDO0lBRWpELFlBQVksT0FBMkI7UUFDbkMsS0FBSyxFQUFFLENBQUM7SUFDWixDQUFDO0lBT00sSUFBSTtJQUVYLENBQUM7Q0FDSixDQUFBO0FBZFksSUFBSTtJQURoQiw0QkFBZSxDQUFDLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxDQUFDO2lFQUdsQixXQUFXLG9CQUFYLFdBQVc7R0FGeEIsSUFBSSxDQWNoQjtBQWRZLG9CQUFJIn0=

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
/* harmony import */ var _bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_3__);
var Test1_1, _a;




let Test1 = Test1_1 = class Test1 extends Object(_bdo_models_BDOTest1__WEBPACK_IMPORTED_MODULE_1__["BDOTest1Factory"])(_client_models_Test__WEBPACK_IMPORTED_MODULE_2__["Test"]) {
    constructor(params) {
        super(params);
    }
    wadde() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const test = yield Test1_1.getInstanceByID(this.id);
            if (test)
                return test.getUnsavedChanges();
            return;
        });
    }
};
Test1 = Test1_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUpdateNamespacedStorage", function() { return setUpdateNamespacedStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNamespacedStorage", function() { return getNamespacedStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFromNamespacedStorage", function() { return deleteFromNamespacedStorage; });
/* harmony import */ var _bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./source/app/utils/metadata.ts");
/* harmony import */ var _bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_0__);

function setUpdateNamespacedStorage(instance, key, newVal, nsProp = "id") {
    if (key === "*")
        throw new Error("* is a special character and does not follow the property convention");
    const nsPrefix = Object.getPrototypeOf(instance.constructor).name;
    let nsSuffix = Object(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_0__["getMetadata"])(instance, "oldStorageNsSuffix");
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
    Object(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_0__["defineMetadata"])(instance, "oldStorageNsSuffix", nsSuffix);
}
function getNamespacedStorage(instance, key, nsProp = "id", forceNS) {
    const nsPrefix = Object.getPrototypeOf(instance.constructor).name;
    let nsSuffix = Object(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_0__["getMetadata"])(instance, "oldStorageNsSuffix");
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
const ModelRegistry_1 = __webpack_require__("./source/app/lib/ModelRegistry.ts");
class Attribute extends Property_1.Property {
    constructor(object, property, params) {
        super(object, property, params);
        this.inDOMInitialized = false;
        this.autoSaveAllowed = false;
    }
    setValue(value) {
        if (!this.shouldDoSetValue(value))
            return;
        let oldID;
        if (this.object.isBDOModel && this.property === "id")
            oldID = this.ownValue;
        this.doSetValue(value, true, true);
        if (oldID)
            ModelRegistry_1.ModelRegistry.getInstance().updateID(oldID, this.object);
        this.reflectToDOMAttribute(value);
        this.doAutoSave();
    }
    proxyHandler(_path, _changedVal, _prevVal) {
        const value = this.value;
        if (value === undefined || value === null)
            return;
        this.doSetValue(util_1.getProxyTarget(value), true, true);
        this.reflectToDOMAttribute(value);
        this.doAutoSave();
    }
    getUnsavedChange() { }
    shouldDoSetValue(value, skipGuard = false) {
        if (environment_1.isBrowser() && !this.object.isBDOModel && (this.object instanceof HTMLElement)) {
            const constructedType = util_1.constructTypeOfHTMLAttribute(this.object, this.property);
            if (!this.inDOMInitialized && this.object.getAttribute(this.property) && value !== constructedType) {
                this.setValue(constructedType);
                return false;
            }
        }
        return !(value === this.ownValue || !skipGuard && !this.disableTypeGuard && !this.typeGuard(value));
    }
    reflectToDOMAttribute(value) {
        if (!environment_1.isBrowser() || !(this.object instanceof HTMLElement))
            return;
        const stringKey = this.property.toString();
        const attrValue = this.object.getAttribute(stringKey);
        let setAttribute = true;
        let pTarget;
        let valueToPass = value;
        if (value instanceof Modification_1.Modification)
            valueToPass = value.valueOf();
        if (!this.inDOMInitialized && attrValue) {
            setAttribute = false;
        }
        else
            pTarget = util_1.getProxyTarget(valueToPass);
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
        if (!this.autoSave || !util_1.isFunction(this.object.save))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9saWIvQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQThEO0FBRTlELHdEQUFtRDtBQUNuRCx3REFBcUQ7QUFDckQsMENBQTJGO0FBRTNGLDRDQUFxRDtBQUNyRCwwREFBdUQ7QUF3RXZELE1BQWEsU0FBMkQsU0FBUSxtQkFBUTtJQXFFcEYsWUFBWSxNQUFTLEVBQUUsUUFBVyxFQUFFLE1BQWlEO1FBQ2pGLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBckI1QixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFrQmxDLG9CQUFlLEdBQVksS0FBSyxDQUFDO0lBSXpDLENBQUM7SUFRTSxRQUFRLENBQUMsS0FBZ0M7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPO1FBQzFDLElBQUksS0FBSyxDQUFDO1FBQ1YsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUk7WUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM1RSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxLQUFLO1lBQUUsNkJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFRTSxZQUFZLENBQUMsS0FBYyxFQUFFLFdBQWtCLEVBQUUsUUFBZTtRQUNuRSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxD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

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

/***/ "./source/app/lib/BDODatabaseManager.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class BDODatabasemanager {
}
exports.BDODatabasemanager = BDODatabasemanager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPRGF0YWJhc2VNYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9saWIvQkRPRGF0YWJhc2VNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsTUFBc0Isa0JBQWtCO0NBRXZDO0FBRkQsZ0RBRUMifQ==

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9saWIvQkRPTG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDREQUE0QjtBQUM1QiwrQkFBMkI7QUFDM0IsMENBQW1GO0FBV25GLE1BQXNCLFNBQVM7SUFrRDNCLFlBQVksT0FBZ0M7UUEzQ3JDLFlBQU8sR0FBWSxhQUFhLENBQUM7UUFRakMsd0JBQW1CLEdBQWEsS0FBSyxDQUFDO1FBUXRDLHFCQUFnQixHQUFhLEtBQUssQ0FBQztRQWVuQyxhQUFRLEdBQWUsT0FBTyxDQUFDO1FBVW5CLG1CQUFjLEdBQWEsaUNBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFL0IsQ0FBQztJQVcxQyxHQUFHLENBQUMsT0FBWSxFQUFFLFdBQXNCLEtBQUssRUFBRSxHQUFHLElBQVc7UUFDaEUsSUFBSSxRQUFRLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFBRSxPQUFPO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2xFLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEMsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO1lBQzNCLElBQUksTUFBTSxZQUFZLEtBQUssRUFBRTtnQkFDekIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDcEM7O2dCQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUIsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QixPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNkLE9BQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLFFBQVEsS0FBSyxPQUFPLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6RjtJQUNMLENBQUM7SUFRTSxLQUFLLENBQUMsT0FBWSxFQUFFLEdBQUcsSUFBUztRQUNuQyxNQUFNLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFvQixLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBUU0sSUFBSSxDQUFDLE9BQVksRUFBRSxHQUFHLElBQVM7UUFDbEMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBb0IsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQVFNLElBQUksQ0FBQyxPQUFZLEVBQUUsR0FBRyxJQUFTO1FBQ2xDLE1BQU0sS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQW9CLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFRTSxLQUFLLENBQUMsT0FBWSxFQUFFLEdBQUcsSUFBUztRQUNuQyxNQUFNLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFvQixLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBU1MsV0FBVztRQUNqQixPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDekcsQ0FBQztJQStCUyxTQUFTLENBQUMsUUFBbUI7UUFDbkMsTUFBTSxhQUFhLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEUsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQVMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFTUyxXQUFXO1FBQ2pCLE9BQU8sZ0JBQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFTUyxXQUFXO1FBQ2pCLE1BQU0sS0FBSyxHQUFZLElBQUksS0FBSyxFQUFFLENBQUMsS0FBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxJQUFJLFNBQVMsQ0FBQztRQUNkLEtBQUssTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDOUMsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsU0FBUztZQUNyQixJQUFJLENBQUMsMkJBQW9CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLEVBQUU7Z0JBQzlELFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUN2QyxNQUFNO2FBQ1Q7U0FDSjtRQUNELElBQUksU0FBUyxFQUFFO1lBQ1gsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDSCxTQUFTLEdBQUcsRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztDQUNKO0FBM01ELDhCQTJNQyJ9
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js?cd00")))

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
const uuid_1 = __webpack_require__("./node_modules/uuid/index.js");
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
        if (unsavedChanges && unsavedChanges.hasOwnProperty(attr))
            unsaved = true;
        return Promise.resolve(unsaved);
    }
    async hasUnsavedChanges() {
        const unsavedChanges = await this.getUnsavedChanges();
        return Promise.resolve(Boolean(Object.keys(unsavedChanges).length));
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
    decorators_1.property(),
    tslib_1.__metadata("design:type", String)
], BDOModel.prototype, "databaseName", void 0);
tslib_1.__decorate([
    decorators_1.attribute((_type) => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], BDOModel.prototype, "id", void 0);
tslib_1.__decorate([
    decorators_1.attribute(),
    tslib_1.__metadata("design:type", String)
], BDOModel.prototype, "className", void 0);
BDOModel = BDOModel_1 = tslib_1.__decorate([
    decorators_1.baseConstructor({ isAbstract: true }),
    tslib_1.__metadata("design:paramtypes", [])
], BDOModel);
exports.BDOModel = BDOModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2xpYi9CRE9Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsK0JBQWtDO0FBQ2xDLCtDQUFrQztBQUNsQyw4Q0FBd0Q7QUFDeEQsc0RBQTZFO0FBQzdFLGtEQUFrRDtBQUVsRCwwREFBdUQ7QUFXdkQsSUFBc0IsUUFBUSxnQkFBOUIsTUFBc0IsUUFBUTtJQStHMUI7UUFoRDRCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFRM0IsbUJBQWMsR0FBWSxVQUFRLENBQUMsY0FBYyxDQUFDO1FBUWxELGlCQUFZLEdBQVksVUFBUSxDQUFDLFlBQVksQ0FBQztRQVN6QyxPQUFFLEdBQVcsV0FBVyxTQUFJLEVBQUUsRUFBRSxDQUFDO1FBVXJDLGNBQVMsR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFjMUYsNkJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQXZHRCxJQUFjLFFBQVE7UUFDbEIsTUFBTSxRQUFRLEdBQUcsc0JBQVcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDL0MsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBOEZNLE1BQU0sQ0FBQyxlQUFlLENBQXdDLEdBQVk7UUFDN0UsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFZTSxrQkFBa0I7UUFDckIsT0FBTyxjQUFjLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFXTSxJQUFJLENBQTJFLFFBQVcsRUFBRSxJQUFRO1FBQ3ZHLE9BQU8sSUFBSSxpQkFBTyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUE2RCxDQUFDO0lBQ3pHLENBQUM7SUFRTSxRQUFRO1FBQ1gsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBVU0sTUFBTTtRQUNULE1BQU0sSUFBSSxHQUFtQixFQUFFLENBQUM7UUFDaEMsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDcEIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUN6QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7YUFDdkI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUE0Qk0sS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUErQjtRQUNsRCxNQUFNLGNBQWMsR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3RELElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLGNBQWMsSUFBSSxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDMUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFTTSxLQUFLLENBQUMsaUJBQWlCO1FBQzFCLE1BQU0sY0FBYyxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdEQsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztDQVdKLENBQUE7QUF2TTBCLG9CQUFXLEdBQVEsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7QUFnQy9ELG1CQUFVLEdBQVksSUFBSSxDQUFDO0FBUXRDO0lBQVgscUJBQVEsRUFBRTs7NENBQTRDO0FBUTNDO0lBQVgscUJBQVEsRUFBRTs7Z0RBQW1FO0FBUWxFO0lBQVgscUJBQVEsRUFBRTs7OENBQStEO0FBU2hEO0lBQXpCLHNCQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLGlCQUFFLENBQUM7O29DQUF5QztBQVVyRDtJQUFaLHNCQUFTLEVBQUU7OzJDQUFrRjtBQWxHNUUsUUFBUTtJQUQ3Qiw0QkFBZSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDOztHQUNoQixRQUFRLENBOE43QjtBQTlOcUIsNEJBQVEifQ==

/***/ }),

/***/ "./source/app/lib/BDORoute.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPUm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2xpYi9CRE9Sb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDBDQUFxRDtBQUNyRCx3REFBNkQ7QUFTN0QsTUFBc0IsUUFBUTtJQUE5QjtRQXFCVyxvQkFBZSxHQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztRQVFwRSxXQUFNLEdBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQWtCdEIsbUJBQWMsR0FBc0IsYUFBYSxDQUFDO1FBVWxELGFBQVEsR0FBWSxLQUFLLENBQUM7SUFtRHhDLENBQUM7SUF4Q2EsY0FBYyxDQUFDLGNBQThCO1FBQ25ELElBQUksYUFBYSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLGVBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDL0IsYUFBYSxHQUFHLGlDQUFtQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ3pGO1FBQ0QsSUFBSSxlQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQy9CLGFBQWEsR0FBYyxJQUFJLENBQUMsY0FBZSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMxRTtRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3pCLENBQUM7SUFXUyxLQUFLLENBQUMsY0FBYyxDQUFDLGdCQUEwQztRQUNyRSxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7O0FBMUZMLDRCQTRHQztBQWhHaUIsd0JBQWUsR0FBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDIn0=

/***/ }),

/***/ "./source/app/lib/BaseConstructor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Binding_1 = __webpack_require__("./source/app/lib/Binding.ts");
const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");
const util_1 = __webpack_require__("./source/app/utils/util.ts");
function baseConstructorFactory(ctor, constParamsIndex) {
    class BaseConstructor extends ctor {
        constructor(...params) {
            super(...params);
            this.collectionName = BaseConstructor.collectionName;
            this.databaseName = BaseConstructor.databaseName;
            const constParams = params[constParamsIndex];
            metadata_1.defineMetadata(this, "normalFunctionality", true);
            if (!BaseConstructor.isProceduralComponentConstruction)
                this.invokeLifeCycle(constParams);
        }
        invokeLifeCycle(constParams) {
            if (!(constParams instanceof Object))
                constParams = {};
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
                        }
                        else
                            defaultSettings[key] = cachedSettings[key];
                    }
                }
            }
            Object.assign(this, defaultSettings);
            metadata_1.defineMetadata(this, "constructionComplete", true);
            if (util_1.isFunction(this.constructedCallback))
                this.constructedCallback();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbnN0cnVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9saWIvQmFzZUNvbnN0cnVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLGtEQUFrRTtBQUNsRSwwQ0FBNkM7QUErRDdDLFNBQWdCLHNCQUFzQixDQUE4QyxJQUFPLEVBQUUsZ0JBQXdCO0lBUWpILE1BQU0sZUFBZ0IsU0FBUSxJQUFJO1FBZ0U5QixZQUFZLEdBQUcsTUFBYTtZQUN4QixLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztZQVhMLG1CQUFjLEdBQVksZUFBZSxDQUFDLGNBQWMsQ0FBQztZQVF6RCxpQkFBWSxHQUFZLGVBQWUsQ0FBQyxZQUFZLENBQUM7WUFJakUsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDN0MseUJBQWMsQ0FBQyxJQUFJLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQ0FBaUM7Z0JBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5RixDQUFDO1FBUU0sZUFBZSxDQUFDLFdBQXdDO1lBQzNELElBQUksQ0FBQyxDQUFDLFdBQVcsWUFBWSxNQUFNLENBQUM7Z0JBQUUsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN2RCxJQUFJLGVBQWUsR0FBMkMsc0JBQVcsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekcsZUFBZSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzlELElBQUksaUJBQVUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRTtnQkFDdkMsTUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLEVBQUUsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDO2dCQUNoRCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RFLEtBQUssTUFBTSxHQUFHLElBQUksY0FBYyxFQUFFO29CQUM5QixJQUFJLGNBQWMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ3BDLE1BQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDckMsSUFBSSxPQUFPLFlBQVksaUJBQU8sRUFBRTs0QkFDNUIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt5QkFDekM7OzRCQUFNLGVBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3JEO2lCQUNKO2FBQ0o7WUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztZQUNyQyx5QkFBYyxDQUFDLElBQUksRUFBRSxzQkFBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuRCxJQUFJLGlCQUFVLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2dCQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3pFLENBQUM7O0lBeEZzQix5QkFBUyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBVXhELDJCQUFXLEdBQUcsSUFBSSxDQUFDO0lBU25CLDhCQUFjLEdBQVksc0JBQVcsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQVN6RSw0QkFBWSxHQUFZLHNCQUFXLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBVTlFLGlEQUFpQyxHQUFZLEtBQUssQ0FBQztJQW9EckUsT0FBTyxlQUFlLENBQUM7QUFDM0IsQ0FBQztBQTNHRCx3REEyR0MifQ==

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
class Field {
    constructor(object, property) {
        this.fields = [];
        this.object = object;
        this.property = property;
    }
    addField(field) {
        if (this.fields.includes(field))
            return;
        if (field.object && field.object.isBDOModel)
            this.value = this.proxyfyValue(field.valueOf());
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
            }, { isShallow });
        }
        return value;
    }
}
exports.Field = Field;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2xpYi9GaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSw4Q0FBMkM7QUFFM0MsMENBQW1GO0FBQ25GLGtEQUE2RDtBQUM3RCxrRUFBaUM7QUFpQmpDLE1BQWEsS0FBSztJQW9DZCxZQUFZLE1BQVMsRUFBRSxRQUFXO1FBRjFCLFdBQU0sR0FBaUMsRUFBRSxDQUFDO1FBRzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFVTSxRQUFRLENBQUMsS0FBNEI7UUFDeEMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPO1FBRXhDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBZSxLQUFLLENBQUMsTUFBTyxDQUFDLFVBQVU7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDekcsSUFBSSxLQUFLLFlBQVksaUJBQU8sSUFBSSxLQUFLLENBQUMsU0FBUztZQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQVVNLFdBQVcsQ0FBQyxLQUE0QjtRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTztRQUN6QyxJQUFJLEtBQUssWUFBWSxpQkFBTyxJQUFJLEtBQUssQ0FBQyxTQUFTO1lBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMs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

/***/ }),

/***/ "./source/app/lib/ModelRegistry.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const framework_1 = __webpack_require__("./source/app/utils/framework.ts");
class ModelRegistry {
    constructor() {
        this.models = new Map();
    }
    static getInstance() {
        if (!ModelRegistry.instance)
            ModelRegistry.instance = new ModelRegistry();
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
        this.models.forEach((model) => {
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
        if (!model)
            return;
        this.models.delete(`${this.getClassName(constructor)}${oldID}`);
        this.register(model);
    }
    getModelsByCondition(func, mode = "all") {
        const models = [];
        let lastModel;
        for (const model of this.models.values()) {
            if (func(model)) {
                if (mode === "first")
                    return model;
                if (mode === "all")
                    models.push(model);
                if (mode === "last")
                    lastModel = model;
            }
        }
        return mode === "last" ? lastModel : models;
    }
    getClassName(constructor) {
        let className;
        if (framework_1.isBaseConstructor(constructor)) {
            className = constructor.className;
        }
        else if ("className" in constructor) {
            className = constructor.className;
        }
        else if (typeof constructor === "function") {
            className = constructor.name;
        }
        else
            className = constructor.constructor.name;
        return className;
    }
}
exports.ModelRegistry = ModelRegistry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kZWxSZWdpc3RyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvbGliL01vZGVsUmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxvREFBeUQ7QUFXekQsTUFBYSxhQUFhO0lBaUN0QjtRQWRRLFdBQU0sR0FBMEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQWMxQixDQUFDO0lBTGxCLE1BQU0sQ0FBQyxXQUFXO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUTtZQUFFLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUMxRSxPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQVVNLFFBQVEsQ0FBQyxLQUFlO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQVNNLFVBQVUsQ0FBQyxLQUFlO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBVU0sWUFBWSxDQUE2QyxFQUFVLEVBQUUsV0FBYztRQUN0RixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBbUMsQ0FBQztJQUN2RyxDQUFDO0lBVU0scUJBQXFCLENBQUMsVUFBdUM7UUFDaEUsTUFBTSxNQUFNLEdBQWUsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDMUIsS0FBSyxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7Z0JBQzFCLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDaEMsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNoQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksT0FBTyxLQUFzQixLQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQzdELE9BQU87cUJBQ1Y7aUJBQ0o7YUFDSjtZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBWU0sUUFBUSxDQUFxQixLQUFjLEVBQUUsV0FBYztRQUM5RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBZU0sb0JBQW9CLENBQUMsSUFBa0MsRUFBRSxPQUFpQyxLQUFLO1FBQ2xHLE1BQU0sTUFBTSxHQUFlLEVBQUUsQ0FBQztRQUM5QixJQUFJLFNBQStCLENBQUM7UUFDcEMsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNiLElBQUksSUFBSSxLQUFLLE9BQU87b0JBQUUsT0FBTyxLQUFLLENBQUM7Z0JBQ25DLElBQUksSUFBSSxLQUFLLEtBQUs7b0JBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxJQUFJLEtBQUssTUFBTTtvQkFBRSxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQzFDO1NBQ0o7UUFDRCxPQUFPLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ2hELENBQUM7SUFVTyxZQUFZLENBQUMsV0FBNkM7UUFDOUQsSUFBSSxTQUFpQixDQUFDO1FBQ3RCLElBQUksNkJBQWlCLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDaEMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUM7U0FDckM7YUFBTSxJQUFJLFdBQVcsSUFBSSxXQUFXLEVBQUU7WUFDbkMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUM7U0FDckM7YUFBTSxJQUFJLE9BQU8sV0FBVyxLQUFLLFVBQVUsRUFBRTtZQUMxQyxTQUFTLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztTQUNoQzs7WUFBTSxTQUFTLEdBQVMsV0FBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDdkQsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztDQUNKO0FBMUpELHNDQTBKQyJ9

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
class Property {
    constructor(object, property, params) {
        this.isShallow = true;
        this.object = object;
        this.property = property;
        let parameters = {};
        if (params && params.params)
            parameters = params.params;
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
        if (!error && util_1.isFunction(idxStructObj[this.onTypeCheck]))
            error = idxStructObj[this.onTypeCheck](valueToPass);
        if (error) {
            if (util_1.isFunction(idxStructObj[this.onTypeCheckFail])) {
                idxStructObj[this.onTypeCheckFail](error);
            }
            else if (util_1.isFunction(idxStructObj.onTypeCheckFail)) {
                idxStructObj.onTypeCheckFail(error);
            }
            else
                throw error;
        }
        else if (util_1.isFunction(idxStructObj[this.onTypeCheckSuccess]))
            idxStructObj[this.onTypeCheckSuccess]();
        return !(Boolean(error).valueOf());
    }
    proxyHandler(_path, _changedVal, _prevVal) {
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
                }
                else
                    this.proxyHandler(path, changedVal, prevVal);
            }, { isShallow: this.isShallow });
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
        if (util_1.isFunction(this.object.getNamespacedStorage) &&
            this.object.getNamespacedStorage(stringKey) === undefined) {
            metadata_1.defineMetadata(this.object, "keyShouldBeUpdated", Object.assign(keyShouldBeUpdated, { [stringKey]: true }));
            return true;
        }
        return Boolean(metadata_1.getMetadata(this.object, "constructionComplete"));
    }
}
exports.Property = Property;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2xpYi9Qcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3REFBcUQ7QUFDckQsa0RBQWlGO0FBQ2pGLHdEQUFtRDtBQUNuRCwwQ0FBc0Y7QUFFdEYsNENBQTRDO0FBQzVDLGtFQUFpQztBQTJFakMsTUFBYSxRQUFRO0lBcUdqQixZQUFZLE1BQVMsRUFBRSxRQUFXLEVBQUUsTUFBZ0Q7UUFyQjdFLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFzQjdCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksVUFBVSxHQUFvQixFQUFFLENBQUM7UUFFckMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU07WUFBRSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN4RCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUVoQyxNQUFNLGVBQWUsR0FBRyxjQUFPLENBQUMsUUFBa0IsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sZUFBZSxHQUFHLEtBQUssZUFBZSxlQUFlLENBQUM7UUFDNUQsTUFBTSxXQUFXLEdBQUcsS0FBSyxlQUFlLFdBQVcsQ0FBQztRQUNwRCxNQUFNLGtCQUFrQixHQUFHLEtBQUssZUFBZSxrQkFBa0IsQ0FBQztRQUVsRSxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQztRQUNwRyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNwRixJQUFJLENBQUMsa0JBQWtCLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLElBQUksa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO0lBQ3BILENBQUM7SUFTTSxRQUFRLENBQUMsS0FBZ0M7UUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQVVNLE9BQU87UUFDVixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTNDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFdkIsSUFBSSxDQUFDLGNBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLElBQUksaUJBQVUsQ0FBTyxJQUFJLENBQUMsTUFBTyxDQUFDLG9CQUFvQixDQUFDLEVBQUU7WUFDbkcsS0FBSyxHQUFTLElBQUksQ0FBQyxNQUFPLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDOUQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBVU0sU0FBUyxDQUFDLEtBQWdDO1FBQzdDLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLEtBQUssWUFBWSwyQkFBWTtZQUFFLFdBQVcsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFakUsTUFBTSxVQUFVLEdBQUcsd0JBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4RSxNQUFNLFNBQVMsR0FBRyxJQUFJLGtCQUFTLENBQUMsR0FBRyxXQUFXLG1CQUFtQixVQUFVLENBQUMsU0FBUyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzVHLE1BQU0sWUFBWSxHQUFtQixJQUFJLENBQUMsTUFBTSxDQUFDO1FBRWpELElBQUksS0FBSyxDQUFDO1FBRVYsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLFdBQVcsS0FBSyxJQUFJLENBQUM7WUFBRSxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBRTdGLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixJQUFJLGtCQUFXLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQzFCLElBQUksT0FBTyxXQUFXLEtBQUssVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtvQkFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLFdBQVcsS0FBSyxTQUFTLElBQUksV0FBVyxLQUFLLElBQUksQ0FBQzt3QkFBRSxLQUFLLEdBQUcsU0FBUyxDQUFDO2lCQUNqRzthQUNKO2lCQUFNLElBQUksQ0FBQyxDQUFDLFdBQVcsWUFBWSxVQUFVLENBQUM7Z0JBQUUsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUN0RTtRQUdELElBQUksQ0FBQyxLQUFLLElBQUksaUJBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQUUsS0FBSyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7UUFHOUcsSUFBSSxLQUFLLEVBQUU7WUFDUCxJQUFJLGlCQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFO2dCQUNoRCxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdDO2lCQUFNLElBQUksaUJBQVUsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQ2pELFlBQVksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdkM7O2dCQUFNLE1BQU0sS0FBSyxDQUFDO1NBQ3RCO2FBQU0sSUFBSSxpQkFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3RHLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFPTSxZQUFZLENBQUMsS0FBYyxFQUFFLFdBQWtCLEVBQUUsUUFBZTtRQUNuRSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSTtZQUFFLE9BQU87UUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBVU0sZ0JBQWdCLENBQUMsS0FBZ0MsRUFBRSxZQUFxQixLQUFLO1FBQ2hGLE9BQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFZUyxVQUFVLENBQUMsS0FBZ0MsRUFBRSxjQUF1QixJQUFJLEVBQUUsWUFBcUIsS0FBSztRQUMxRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxTQUFTLENBQUM7WUFBRSxPQUFPO1FBQ3JELElBQUksV0FBNkIsQ0FBQztRQUNsQyxJQUFJLEtBQUssWUFBWSwyQkFBWSxFQUFFO1lBQy9CLFdBQVcsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDakM7O1lBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLFdBQVcsRUFBRTtZQUNiLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7U0FDL0I7UUFDRCxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLGlCQUFVLENBQWtCLElBQUksQ0FBQyxNQUFPLENBQUMsMEJBQTBCLENBQUMsRUFBRTtZQUNyRixJQUFJLENBQUMsTUFBTyxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDbkc7SUFDTCxDQUFDO0lBVVMsWUFBWSxDQUFDLEtBQVk7UUFDL0IsSUFBSSxLQUFLLFlBQVksS0FBSyxJQUFJLGVBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFPLEtBQU0sQ0FBQyxVQUFVLEVBQUU7WUFDdkUsS0FBSyxHQUFHLG1CQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLE9BQU8sbUJBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxFQUFFO2dCQUNqRCxJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtvQkFDOUIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBUSxVQUFVLEVBQVEsT0FBTyxDQUFDLENBQUM7aUJBQ3ZFOztvQkFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBUSxVQUFVLEVBQVEsT0FBTyxDQUFDLENBQUM7WUFDcEUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQVNTLHFCQUFxQjtRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixJQUFJLENBQUMsdUJBQVMsRUFBRTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzNELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsTUFBTSxrQkFBa0IsR0FBRyxzQkFBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsb0JBQW9CLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEYsSUFBSSxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUMvQyxJQUFJLGlCQUFVLENBQWtCLElBQUksQ0FBQyxNQUFPLENBQUMsb0JBQW9CLENBQUM7WUFDN0MsSUFBSSxDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDN0UseUJBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1RyxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxPQUFPLENBQUMsc0JBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0NBQ0o7QUF2UkQsNEJBdVJDIn0=

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
        if (util_1.isFunction(idxStructObj[this.onChange]) && this.isInitialized)
            idxStructObj[this.onChange](oldVal);
        if (util_1.isFunction(idxStructObj[this.onInit]) && !this.isInitialized)
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
        subObject.isShallow = this.isShallow;
        this.subObject = subObject;
    }
    proxyHandler(path, changedVal, prevVal) {
        if (this.subObject)
            this.subObject.proxyHandler(path, changedVal, prevVal);
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
        }
        else
            return (value !== this.ownValue);
    }
    proxyfyValue(value) {
        if (value instanceof Array || util_1.isObject(value) && !value.isBDOModel) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2F0Y2hlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvbGliL1dhdGNoZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsd0RBQXFEO0FBQ3JELDBDQUFnRjtBQUNoRixrRUFBaUM7QUFDakMsb0VBQW1DO0FBOEhuQyxNQUFhLE9BQU87SUFxR2hCLFlBQVksTUFBUyxFQUFFLFFBQVcsRUFBRSxNQUF1QjtRQWhDcEQsY0FBUyxHQUFZLElBQUksQ0FBQztRQThCekIsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFHbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFekIsTUFBTSxlQUFlLEdBQUcsY0FBTyxDQUFDLFFBQWtCLENBQUMsQ0FBQztRQUVwRCxNQUFNLFVBQVUsR0FBRyxLQUFLLGVBQWUsTUFBTSxDQUFDO1FBQzlDLE1BQU0sWUFBWSxHQUFHLEtBQUssZUFBZSxRQUFRLENBQUM7UUFDbEQsTUFBTSxTQUFTLEdBQUcsS0FBSyxlQUFlLEtBQUssQ0FBQztRQUM1QyxNQUFNLFlBQVksR0FBRyxLQUFLLGVBQWUsUUFBUSxDQUFDO1FBRWxELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ3hFLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFN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

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
        decorators_1.attribute({ autoSave: true }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvbW9kZWxzL0JET1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQTRFO0FBVTVFLFNBQWdCLGNBQWMsQ0FBc0MsSUFBVztJQVMzRSxJQUFlLE9BQU8sR0FBdEIsTUFBZSxPQUFRLFNBQVEsSUFBSTtRQUFuQzs7WUFRMEMsVUFBSyxHQUFXLE1BQU0sQ0FBQztZQVFYLFdBQU0sR0FBYSxFQUFFLENBQUM7UUF5RDVFLENBQUM7UUFoRGEsWUFBWSxDQUFDLE9BQXVCO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBU1MsWUFBWSxDQUFDLElBQW9CO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBU1MsY0FBYyxDQUFDLE9BQXVCO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFTUyxXQUFXLENBQUMsS0FBcUI7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFTUyxjQUFjLENBQUMsT0FBdUI7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQztLQUVKLENBQUE7SUFqRWtDO1FBQTlCLHNCQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzBDQUErQjtJQVFsQjtRQUExQyxvQkFBTyxFQUFFLEVBQUUsc0JBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7MkNBQThCO0lBaEI3RCxPQUFPO1FBRHJCLDRCQUFlLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsQ0FBQztPQUNsRCxPQUFPLENBeUVyQjtJQUNELE9BQU8sT0FBTyxDQUFDO0FBRW5CLENBQUM7QUFyRkQsd0NBcUZDIn0=

/***/ }),

/***/ "./source/app/models/BDOTest1.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");
function BDOTest1Factory(ctor) {
    let BDOTest1 = class BDOTest1 extends ctor {
        constructor() {
            super(...arguments);
            this.title = 'test';
        }
        doSomething() {
            return "lol";
        }
        onOhaInit(_value) {
        }
    };
    tslib_1.__decorate([
        decorators_1.attribute({ description: "tester..." }),
        tslib_1.__metadata("design:type", String)
    ], BDOTest1.prototype, "title", void 0);
    BDOTest1 = tslib_1.__decorate([
        decorators_1.baseConstructor({ isAbstract: true, collectionName: "BDOTest1" })
    ], BDOTest1);
    return BDOTest1;
}
exports.BDOTest1Factory = BDOTest1Factory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPVGVzdDEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL21vZGVscy9CRE9UZXN0MS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxzREFBbUU7QUFTbkUsU0FBZ0IsZUFBZSxDQUFrRCxJQUFXO0lBVXhGLElBQWUsUUFBUSxHQUF2QixNQUFlLFFBQVMsU0FBUSxJQUFJO1FBQXBDOztZQVFvRCxVQUFLLEdBQVcsTUFBTSxDQUFDO1FBc0IzRSxDQUFDO1FBZFUsV0FBVztZQUNkLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFTUyxTQUFTLENBQUMsTUFBYztRQUVsQyxDQUFDO0tBQ0osQ0FBQTtJQXRCNEM7UUFBeEMsc0JBQVMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsQ0FBQzs7MkNBQStCO0lBUjVELFFBQVE7UUFEdEIsNEJBQWUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxDQUFDO09BQ25ELFFBQVEsQ0E4QnRCO0lBQ0QsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQztBQTFDRCwwQ0EwQ0MifQ==

/***/ }),

/***/ "./source/app/models/Cell.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvbW9kZWxzL0NlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLG1DQUFnQztBQUNoQyxzREFBd0Q7QUFTeEQsSUFBYSxJQUFJLEdBQWpCLE1BQWEsSUFBSTtJQXlEYixZQUFZLE9BQTJCO1FBbERoQyxNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBUWQsTUFBQyxHQUFXLENBQUMsQ0FBQztRQVFkLFNBQUksR0FBVyxDQUFDLENBQUM7UUFRakIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQVFsQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBUXJCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBUXhCLFVBQUssR0FBVSxJQUFJLGFBQUssRUFBRSxDQUFDO0lBRVMsQ0FBQztDQUMvQyxDQUFBO0FBMURZLElBQUk7SUFEaEIsNEJBQWUsRUFBRTtpRUEwRFEsV0FBVyxvQkFBWCxXQUFXO0dBekR4QixJQUFJLENBMERoQjtBQTFEWSxvQkFBSSJ9

/***/ }),

/***/ "./source/app/models/Chunk.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
const open_simplex_noise_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/open-simplex-noise/lib/index.js"));
const util_1 = __webpack_require__("./source/app/utils/util.ts");
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
        util_1.merge(this, params);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2h1bmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL21vZGVscy9DaHVuay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvRkFBa0Q7QUFDbEQsMENBQXdDO0FBQ3hDLGlDQUE4QjtBQVE5QixNQUFhLEtBQUs7SUFzRWQsWUFBWSxNQUEyQjtRQS9EaEMsTUFBQyxHQUFXLENBQUMsQ0FBQztRQVFkLE1BQUMsR0FBVyxDQUFDLENBQUM7UUFRZCxTQUFJLEdBQVksRUFBRSxDQUFDO1FBU2hCLFNBQUksR0FBYSxFQUFFLENBQUM7UUFTcEIsZ0JBQVcsR0FBcUIsSUFBSSw0QkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQVN4RCxpQkFBWSxHQUFxQixJQUFJLDRCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBU3pELHVCQUFrQixHQUFxQixJQUFJLDRCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBUy9ELG9CQUFlLEdBQXFCLElBQUksNEJBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFHbEUsWUFBSyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQVFTLFlBQVk7UUFDbEIsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFZLElBQUksQ0FBQyxJQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3RCO1lBQ0QsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFZLElBQUksQ0FBQyxJQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQ2hELE1BQU0sV0FBVyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3JELE1BQU0sV0FBVyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBRXJELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNmLElBQUksV0FBSSxDQUFDO29CQUNMLENBQUMsRUFBRSxXQUFXO29CQUNkLENBQUMsRUFBRSxXQUFXO29CQUNkLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFLFdBQVcsR0FBRyxHQUFHLENBQUM7b0JBQ3BFLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFLFdBQVcsR0FBRyxHQUFHLENBQUM7b0JBQ3RFLFdBQVcsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQUUsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDcEYsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQUUsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDOUUsS0FBSyxFQUFFLElBQUk7aUJBQ2QsQ0FBQyxDQUNMLENBQUM7YUFDTDtTQUNKO0lBQ0wsQ0FBQztDQUNKO0FBeEdELHNCQXdHQyJ9

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/reflect-metadata/Reflect.js");
const util_1 = __webpack_require__("./source/app/utils/util.ts");
const environment_1 = __webpack_require__("./source/app/utils/environment.ts");
const BaseConstructor_1 = __webpack_require__("./source/app/lib/BaseConstructor.ts");
const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");
const framework_1 = __webpack_require__("./source/app/utils/framework.ts");
const type_graphql_1 = __webpack_require__("./node_modules/type-graphql/dist/browser-shim.js");
function watched(params = {}) {
    return (target, key) => {
        const stringKey = key.toString();
        const decoratorSettings = framework_1.beforeDescriptor(target, stringKey, "definedWatchers", { params });
        framework_1.createDecoratorDescriptor(target, stringKey, "Watched", decoratorSettings);
    };
}
exports.watched = watched;
function property(typeFunc, params) {
    return (target, key) => {
        const stringKey = key.toString();
        if (typeFunc && !(typeFunc instanceof Function) && !params)
            params = typeFunc;
        if (typeFunc && !(typeFunc instanceof Function))
            typeFunc = undefined;
        if (!params || !(params instanceof Object))
            params = {};
        const decoratorSettings = framework_1.beforeDescriptor(target, stringKey, "definedProperties", { typeFunc, params });
        framework_1.createDecoratorDescriptor(target, stringKey, "Property", decoratorSettings);
    };
}
exports.property = property;
function attribute(typeFunc, params) {
    return (target, key) => {
        const stringKey = key.toString();
        if (typeFunc && !(typeFunc instanceof Function) && !params)
            params = typeFunc;
        if (typeFunc && !(typeFunc instanceof Function))
            typeFunc = undefined;
        if (!params || !(params instanceof Object))
            params = {};
        if (typeFunc instanceof Function && params)
            type_graphql_1.Field(typeFunc, params)(target, key);
        else if (typeFunc instanceof Function)
            type_graphql_1.Field(typeFunc)(target, key);
        else if (params)
            type_graphql_1.Field(params)(target, key);
        else
            type_graphql_1.Field()(target, key);
        const decoratorSettings = framework_1.beforeDescriptor(target, stringKey, "definedAttributes", { typeFunc, params });
        framework_1.createDecoratorDescriptor(target, stringKey, "Attribute", decoratorSettings);
    };
}
exports.attribute = attribute;
function baseConstructor(name, params, index = 0) {
    return (ctor) => {
        const prototype = Object.getPrototypeOf(ctor);
        if (framework_1.isBaseConstructor(prototype))
            Object.setPrototypeOf(ctor, Object.getPrototypeOf(prototype));
        if (name && (typeof name === "number"))
            index = name;
        if (name && (typeof name === "object"))
            params = name;
        if (name && ((typeof name === "object") || (typeof name === "number")))
            name = undefined;
        if (params && (typeof params === "number"))
            index = params;
        if (params && (typeof params === "number"))
            params = undefined;
        if ("isBDOModel" in ctor) {
            if (name && (typeof name === "string") && params && (typeof params === "object")) {
                type_graphql_1.ObjectType(name, params)(ctor);
            }
            else if (name && (typeof name === "string")) {
                type_graphql_1.ObjectType(name)(ctor);
            }
            else if (params && (typeof params === "object")) {
                type_graphql_1.ObjectType(params)(ctor);
            }
            else
                type_graphql_1.ObjectType()(ctor);
            if (params && (typeof params === "object")) {
                const prevCollectionName = metadata_1.getMetadata(ctor, "collectionName");
                const prevDatabaseName = metadata_1.getMetadata(ctor, "databaseName");
                metadata_1.defineMetadata(ctor, "collectionName", params.collectionName || prevCollectionName || "default");
                metadata_1.defineMetadata(ctor, "databaseName", params.databaseName || prevDatabaseName || "default");
            }
        }
        if (params && (typeof params === "object" && params.isAbstract))
            return ctor;
        const BaseConstructor = BaseConstructor_1.baseConstructorFactory(ctor, index);
        if (environment_1.isBrowser() && ctor.isBaseComponent) {
            customElements.define(util_1.pascalCase2kebabCase(ctor.name), BaseConstructor, {
                extends: BaseConstructor.extends
            });
        }
        return BaseConstructor;
    };
}
exports.baseConstructor = baseConstructor;
exports.query = type_graphql_1.Query;
exports.arg = type_graphql_1.Arg;
exports.args = type_graphql_1.Args;
exports.resolver = type_graphql_1.Resolver;
exports.root = type_graphql_1.Root;
exports.mutation = type_graphql_1.Mutation;
exports.subscription = type_graphql_1.Subscription;
exports.pubSub = type_graphql_1.PubSub;
exports.inputType = type_graphql_1.InputType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvdXRpbHMvZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQiwwQ0FBdUQ7QUFDdkQsd0RBQW1EO0FBSW5ELDhEQUF3RjtBQUN4RixrREFBa0U7QUFDbEUsb0RBQXNHO0FBRXRHLCtDQVlzQjtBQWtCdEIsU0FBZ0IsT0FBTyxDQUFDLFNBQXlCLEVBQUU7SUFDL0MsT0FBTyxDQUFDLE1BQVcsRUFBRSxHQUFvQixFQUFFLEVBQUU7UUFDekMsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pDLE1BQU0saUJBQWlCLEdBQUcsNEJBQWdCLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDN0YscUNBQXlCLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUMvRSxDQUFDLENBQUM7QUFDTixDQUFDO0FBTkQsMEJBTUM7QUFnQkQsU0FBZ0IsUUFBUSxDQUFDLFFBQTJCLEVBQUUsTUFBd0I7SUFDMUUsT0FBTyxDQUFDLE1BQVcsRUFBRSxHQUFvQixFQUFFLEVBQUU7UUFDekMsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBR2pDLElBQUksUUFBUSxJQUFJLENBQUMsQ0FBQyxRQUFRLFlBQVksUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUM5RSxJQUFJLFFBQVEsSUFBSSxDQUFDLENBQUMsUUFBUSxZQUFZLFFBQVEsQ0FBQztZQUFFLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDdEUsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLE1BQU0sQ0FBQztZQUFFLE1BQU0sR0FBRyxFQUFF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

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/process/browser.js?f28c"), __webpack_require__("./node_modules/webpack/buildin/global.js?cd00")))

/***/ }),

/***/ "./source/app/utils/framework.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Binding_1 = __webpack_require__("./source/app/lib/Binding.ts");
const Attribute_1 = __webpack_require__("./source/app/lib/Attribute.ts");
const Property_1 = __webpack_require__("./source/app/lib/Property.ts");
const Watched_1 = __webpack_require__("./source/app/lib/Watched.ts");
const util_1 = __webpack_require__("./source/app/utils/util.ts");
const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");
function beforeDescriptor(target, key, mDataName, params) {
    if (!Reflect.hasMetadata(mDataName, target))
        metadata_1.defineMetadata(target, mDataName, new Map());
    const map = metadata_1.getMetadata(target, mDataName);
    const oldDecoratorSettings = map.get(key) || {};
    const settings = util_1.merge(oldDecoratorSettings, params);
    map.set(key, settings);
    return settings;
}
exports.beforeDescriptor = beforeDescriptor;
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
function isBaseConstructor(value) {
    if (typeof value === "function" && value.name === "BaseConstructor")
        return true;
    if (value instanceof Object && value.constructor.name === "BaseConstructor")
        return true;
    return false;
}
exports.isBaseConstructor = isBaseConstructor;
function isReferenceString(value) {
    if (typeof value !== "string")
        return false;
    const refRegEx = /_reference\:[A-Z|0-9|_|$]*\:[A-Z|0-9|\-|_]*/gi;
    return Boolean(value.match(refRegEx)).valueOf();
}
exports.isReferenceString = isReferenceString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWV3b3JrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC91dGlscy9mcmFtZXdvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBMkM7QUFDM0Msa0RBQWlFO0FBQ2pFLGdEQUE4RDtBQUM5RCw4Q0FBMkQ7QUFFM0QsMENBQXdDO0FBQ3hDLGtEQUErRztBQXlDL0csU0FBZ0IsZ0JBQWdCLENBSzlCLE1BQVMsRUFBRSxHQUFNLEVBQUUsU0FBWSxFQUFFLE1BQVM7SUFFeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQztRQUFFLHlCQUFjLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDMUYsTUFBTSxHQUFHLEdBQUcsc0JBQVcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFtQyxDQUFDO0lBQzdFLE1BQU0sb0JBQW9CLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEQsTUFBTSxRQUFRLEdBQUcsWUFBSyxDQUFDLG9CQUFvQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JELEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZCLE9BQU8sUUFBUSxDQUFDO0FBQ3BCLENBQUM7QUFiRCw0Q0FhQztBQWFELFNBQWdCLE1BQU0sQ0FBcUQsUUFBVyxFQUFFLEdBQU0sRUFBRSxLQUFhLEVBQUU7SUFDM0csSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLElBQUksRUFBRTtRQUFFLFNBQVMsR0FBRyxHQUFHLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNuQyxJQUFJLENBQUMsc0JBQVcsQ0FBQyxRQUFRLEVBQUUscUJBQXFCLENBQUMsRUFBRTtRQUMvQyxNQUFNLGVBQWUsR0FBRyxzQkFBVyxDQUFD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

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL3V0aWxzL21ldGFkYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBOElBLFNBQWdCLGNBQWMsQ0FBK0MsTUFBUyxFQUFFLEdBQU0sRUFBRSxHQUFrQjtJQUM5RyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUZELHdDQUVDO0FBV0QsU0FBZ0IsV0FBVyxDQUErQyxNQUFTLEVBQUUsR0FBTTtJQUN2RixPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFGRCxrQ0FFQztBQVVELFNBQWdCLHNCQUFzQixDQUFDLE1BQWMsRUFBRSxHQUFjLEVBQUUsS0FBVTtJQUM3RSxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUZELHdEQUVDO0FBVUQsU0FBZ0IsbUJBQW1CLENBQUMsTUFBYyxFQUFFLEdBQWM7SUFDOUQsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRkQsa0RBRUM7QUFVRCxTQUFnQixhQUFhLENBQUMsTUFBYyxFQUFFLEdBQVc7SUFDckQsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDM0QsQ0FBQztBQUZELHNDQUVDIn0=

/***/ }),

/***/ "./source/app/utils/util.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");
const environment_1 = __webpack_require__("./source/app/utils/environment.ts");
const on_change_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/on-change/index.js"));
var lodash_1 = __webpack_require__("./node_modules/lodash/lodash.js");
exports.merge = lodash_1.merge;
exports.omit = lodash_1.omit;
exports.isFunction = lodash_1.isFunction;
exports.isObject = lodash_1.isObject;
exports.pickBy = lodash_1.pickBy;
exports.isUndefined = lodash_1.isUndefined;
exports.isEqual = lodash_1.isEqual;
exports.isString = lodash_1.isString;
exports.isNumber = lodash_1.isNumber;
exports.isArray = lodash_1.isArray;
exports.difference = lodash_1.difference;
exports.debounce = lodash_1.debounce;
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
function toURIPathPart(value) {
    value = value.replace(/\/+/g, "/");
    if (!value.startsWith("/"))
        value = `/${value}`;
    if (value.endsWith("/") && value.length > 1) {
        value = value.slice(0, -1);
    }
    return value;
}
exports.toURIPathPart = toURIPathPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvdXRpbHMvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrREFBb0Q7QUFDcEQsd0RBQW1EO0FBQ25ELGtFQUFpQztBQUVqQyxpQ0FhZ0I7QUFaWix5QkFBQSxLQUFLLENBQUE7QUFDTCx3QkFBQSxJQUFJLENBQUE7QUFDSiw4QkFBQSxVQUFVLENBQUE7QUFDViw0QkFBQSxRQUFRLENBQUE7QUFDUiwwQkFBQSxNQUFNLENBQUE7QUFDTiwrQkFBQSxXQUFXLENBQUE7QUFDWCwyQkFBQSxPQUFPLENBQUE7QUFDUCw0QkFBQSxRQUFRLENBQUE7QUFDUiw0QkFBQSxRQUFRLENBQUE7QUFDUiwyQkFBQSxPQUFPLENBQUE7QUFDUCw4QkFBQSxVQUFVLENBQUE7QUFDViw0QkFBQSxRQUFRLENBQUE7QUFVWixTQUFnQixPQUFPLENBQUMsR0FBVztJQUMvQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBRkQsMEJBRUM7QUFTRCxTQUFnQixtQkFBbUIsQ0FBQyxHQUFXO0lBQzNDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLDhCQUE4QixFQUFFLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzlFLENBQUM7QUFIRCxrREFHQztBQVNELFNBQWdCLG9CQUFvQixDQUFDLEdBQVc7SUFDNUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQixPQUFPLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLENB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

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
__webpack_require__("./source/app/lib/BaseConstructor.ts");
__webpack_require__("./source/app/lib/BDOConfigManager.ts");
__webpack_require__("./source/app/lib/BDODatabaseManager.ts");
__webpack_require__("./source/app/lib/BDOLogger.ts");
__webpack_require__("./source/app/lib/BDOMapCache.ts");
__webpack_require__("./source/app/lib/BDOModel.ts");
__webpack_require__("./source/app/lib/BDORoute.ts");
__webpack_require__("./source/app/lib/Binding.ts");
__webpack_require__("./source/app/lib/Errors.ts");
__webpack_require__("./source/app/lib/Field.ts");
__webpack_require__("./source/app/lib/ModelRegistry.ts");
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
__webpack_require__("./source/app/client/ts/lib/DatabaseManager.ts");
__webpack_require__("./source/app/client/ts/lib/Logger.ts");
__webpack_require__("./source/app/client/ts/components/GameWindow.ts");
__webpack_require__("./source/app/client/ts/components/TestComponent.ts");
__webpack_require__("./source/app/client/ts/components/ViewLink.ts");
module.exports = __webpack_require__("./source/app/client/ts/components/ViewRouter.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvR2FtZVdpbmRvdy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1Rlc3RDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvY29tcG9uZW50cy9WaWV3TGluay50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1ZpZXdSb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9DbGllbnRNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQ2xpZW50Um91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0NvbmZpZ01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0RhdGFiYXNlTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL21vZGVscyBzeW5jIF5cXC5cXC8uKlxcLnRzJCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdDEudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzIHN5bmMgXlxcLlxcLy4qXFwudHMkIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9Db25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0dhbWVMb2JieS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvSG9tZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy91dGlscy91dGlsLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0F0dHJpYnV0ZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Db25maWdNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0JET0RhdGFiYXNlTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvQkRPTWFwQ2FjaGUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvQkRPTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvQkRPUm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvQmFzZUNvbnN0cnVjdG9yLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0JpbmRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvRXJyb3JzLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0ZpZWxkLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL01vZGVsUmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvTW9kaWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL1Byb3BlcnR5LnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL1dhdGNoZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9tb2RlbHMvQkRPVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL21vZGVscy9CRE9UZXN0MS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL21vZGVscy9DZWxsLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbW9kZWxzL0NodW5rLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvcm91dGVzL0JET0NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3JvdXRlcy9CRE9HYW1lTG9iYnkudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9yb3V0ZXMvQkRPSG9tZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3V0aWxzIHN5bmMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscy9kZWNvcmF0b3JzLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvdXRpbHMvZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscy9mcmFtZXdvcmsudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscy9tZXRhZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3V0aWxzL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vdmFyL3RtcC92aXJ0dWFsRW50cnlQb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBLCtCQUErQixPQUFPLEVBQUUsVUFBVTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsKzRJOzs7Ozs7OztBQzdHOUI7QUFDYjtBQUNBLDJDQUEyQywyUSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yXCIsXCJ0ZW1wbGF0ZXNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1TR1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLVNHLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2EsIF9iO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJhc2VDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9CYXNlQ29tcG9uZW50XCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMiA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBCQUJZTE9OID0gdHNsaWJfMS5fX2ltcG9ydFN0YXIocmVxdWlyZShcImJhYnlsb25qc1wiKSk7XG5sZXQgR2FtZVdpbmRvdyA9IGNsYXNzIEdhbWVXaW5kb3cgZXh0ZW5kcyBCYXNlQ29tcG9uZW50XzEuQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBuZXcgQkFCWUxPTi5FbmdpbmUodGhpcywgdHJ1ZSwge1xuICAgICAgICAgICAgYXVkaW9FbmdpbmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2NlbmUgPSB0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IGAxMDAlYDtcbiAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IGAxMDAlYDtcbiAgICAgICAgdGhpcy5lbmdpbmUucnVuUmVuZGVyTG9vcCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbmdpbmUucmVzaXplKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNyZWF0ZVNjZW5lKCkge1xuICAgICAgICBjb25zdCBzY2VuZSA9IG5ldyBCQUJZTE9OLlNjZW5lKHRoaXMuZW5naW5lKTtcbiAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IEJBQllMT04uRnJlZUNhbWVyYSgnY2FtZXJhJywgbmV3IEJBQllMT04uVmVjdG9yMygwLCA1LCAtMTApLCBzY2VuZSk7XG4gICAgICAgIGNhbWVyYS5zZXRUYXJnZXQoQkFCWUxPTi5WZWN0b3IzLlplcm8oKSk7XG4gICAgICAgIGNhbWVyYS5hdHRhY2hDb250cm9sKHRoaXMsIGZhbHNlKTtcbiAgICAgICAgY29uc3QgbGlnaHQgPSBuZXcgQkFCWUxPTi5IZW1pc3BoZXJpY0xpZ2h0KCdsaWdodDEnLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDEsIDApLCBzY2VuZSk7XG4gICAgICAgIGxpZ2h0LnNoYWRvd0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBzcGhlcmUgPSBCQUJZTE9OLk1lc2hCdWlsZGVyLkNyZWF0ZVNwaGVyZSgnc3BoZXJlJywgeyBzZWdtZW50czogMTYsIGRpYW1ldGVyOiAyIH0sIHNjZW5lKTtcbiAgICAgICAgc3BoZXJlLnBvc2l0aW9uLnkgPSAxO1xuICAgICAgICBCQUJZTE9OLk1lc2hCdWlsZGVyLkNyZWF0ZUdyb3VuZCgnZ3JvdW5kMScsIHsgaGVpZ2h0OiA2LCB3aWR0aDogNiwgc3ViZGl2aXNpb25zOiAyIH0sIHNjZW5lKTtcbiAgICAgICAgcmV0dXJuIHNjZW5lO1xuICAgIH1cbiAgICBjcmVhdGVUZXJyYWluKCkgeyB9XG59O1xuR2FtZVdpbmRvdy5leHRlbmRzID0gXCJjYW52YXNcIjtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18yLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdHlwZW9mIChfYSA9IHR5cGVvZiBCQUJZTE9OICE9PSBcInVuZGVmaW5lZFwiICYmIEJBQllMT04uRW5naW5lKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3QpXG5dLCBHYW1lV2luZG93LnByb3RvdHlwZSwgXCJlbmdpbmVcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18yLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdHlwZW9mIChfYiA9IHR5cGVvZiBCQUJZTE9OICE9PSBcInVuZGVmaW5lZFwiICYmIEJBQllMT04uU2NlbmUpID09PSBcImZ1bmN0aW9uXCIgPyBfYiA6IE9iamVjdClcbl0sIEdhbWVXaW5kb3cucHJvdG90eXBlLCBcInNjZW5lXCIsIHZvaWQgMCk7XG5HYW1lV2luZG93ID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKClcbl0sIEdhbWVXaW5kb3cpO1xuZXhwb3J0cy5kZWZhdWx0ID0gR2FtZVdpbmRvdztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVIyRnRaVmRwYm1SdmR5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMMk52YlhCdmJtVnVkSE12UjJGdFpWZHBibVJ2ZHk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFc05rUkJRV2xGTzBGQlEycEZMSE5FUVVGM1JEdEJRVU40UkN4elJFRkJhVVE3UVVGRGFrUXNNa1JCUVhGRE8wRkJWWEpETEVsQlFYRkNMRlZCUVZVc1IwRkJMMElzVFVGQmNVSXNWVUZCVnl4VFFVRlJMRzlEUVVGdlFpeERRVUZETEdsQ1FVRnBRaXhEUVVGRE8wbEJRUzlGT3p0UlFXdENNRUlzVjBGQlRTeEhRVUZ0UWl4SlFVRkpMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlR0WlFVTXhSU3hYUVVGWExFVkJRVVVzU1VGQlNUdFRRVU53UWl4RFFVRkRMRU5CUVVNN1VVRlRiVUlzVlVGQlN5eEhRVUZyUWl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03U1VGNVJIQkZMRU5CUVVNN1NVRnNSRlVzYVVKQlFXbENPMUZCUTNCQ0xFdEJRVXNzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hEUVVGRE8xRkJRekZDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dFJRVU16UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZETVVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eGhRVUZoTEVOQlFVTXNSMEZCUnl4RlFVRkZPMWxCUXpOQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNN1VVRkRlRUlzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEU0N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFGQlEzSkNMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4UlFVRlJMRVZCUVVVc1IwRkJSeXhGUVVGRk8xbEJRMjVETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF6dFpRVU12UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZEY2tNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFVDeERRVUZETzBsQlUxTXNWMEZCVnp0UlFVVnFRaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlJUZERMRTFCUVUwc1RVRkJUU3hIUVVGSExFbEJRVWtzVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1NVRkJTU3hQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVVjJSaXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVVY2UXl4TlFVRk5MRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVVnNReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEU5QlFVOHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eFJRVUZSTEVWQlFVVXNTVUZCU1N4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRE1VWXNTMEZCU3l4RFFVRkRMR0ZCUVdFc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRk0wSXNUVUZCVFN4TlFVRk5MRWRCUVVjc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVc1VVRkJVU3hGUVVGRkxFVkJRVVVzUlVGQlJTeFJRVUZSTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRmFFY3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJYUkNMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEZOQlFWTXNSVUZCUlN4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNSVUZCUlN4WlFVRlpMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdVVUZGTjBZc1QwRkJUeXhMUVVGTExFTkJRVU03U1VGRGFrSXNRMEZCUXp0SlFWRlRMR0ZCUVdFc1MwRkJTeXhEUVVGRE8wTkJRMmhETEVOQlFVRTdRVUUzUlRCQ0xHdENRVUZQTEVkQlFWY3NVVUZCVVN4RFFVRkRPMEZCVTNSRE8wbEJRVmdzY1VKQlFWRXNSVUZCUlRzd1JFRkJiVUlzVDBGQlR5eHZRa0ZCVUN4UFFVRlBMRU5CUVVNc1RVRkJUVHN3UTBGRmVrTTdRVUZUVXp0SlFVRllMSEZDUVVGUkxFVkJRVVU3TUVSQlFXdENMRTlCUVU4c2IwSkJRVkFzVDBGQlR5eERRVUZETEV0QlFVczdlVU5CUVhOQ08wRkJOMEl2UXl4VlFVRlZPMGxCUkRsQ0xEUkNRVUZsTEVWQlFVVTdSMEZEUnl4VlFVRlZMRU5CYzBZNVFqdHJRa0YwUm05Q0xGVkJRVlVpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJhc2VDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9CYXNlQ29tcG9uZW50XCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMiA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5sZXQgVGVzdENvbXBvbmVudCA9IGNsYXNzIFRlc3RDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50XzEuQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVN0cmluZyA9IHJlcXVpcmUoJ35zdGF0aWMvdmlld3MvdGVzdENvbXBvbmVudC5uamsnKTtcbiAgICB9XG59O1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzIucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG5dLCBUZXN0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJ0ZW1wbGF0ZVN0cmluZ1wiLCB2b2lkIDApO1xuVGVzdENvbXBvbmVudCA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpXG5dLCBUZXN0Q29tcG9uZW50KTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRlc3RDb21wb25lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWR1Z6ZEVOdmJYQnZibVZ1ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyTnZiWEJ2Ym1WdWRITXZWR1Z6ZEVOdmJYQnZibVZ1ZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN3MlJFRkJhVVU3UVVGRGFrVXNjMFJCUVhkRU8wRkJRM2hFTEhORVFVRnBSRHRCUVZWcVJDeEpRVUZ4UWl4aFFVRmhMRWRCUVd4RExFMUJRWEZDTEdGQlFXTXNVMEZCVVN4dlEwRkJiMElzUTBGQlF5eFhRVUZYTEVOQlFVTTdTVUZCTlVVN08xRkJVVEJDTEcxQ1FVRmpMRWRCUVVjc1QwRkJUeXhEUVVGRExHbERRVUZwUXl4RFFVRkRMRU5CUVVNN1NVRkZkRVlzUTBGQlF6dERRVUZCTEVOQlFVRTdRVUZHWlR0SlFVRllMSEZDUVVGUkxFVkJRVVU3TzNGRVFVRjFSVHRCUVZKcVJTeGhRVUZoTzBsQlJHcERMRFJDUVVGbExFVkJRVVU3UjBGRFJ5eGhRVUZoTEVOQlZXcERPMnRDUVZadlFpeGhRVUZoSW4wPSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hLCBfYjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBCYXNlQ29tcG9uZW50XzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQmFzZUNvbXBvbmVudFwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBUZXN0MV8xID0gcmVxdWlyZShcIn5jbGllbnQvbW9kZWxzL1Rlc3QxXCIpO1xubGV0IFZpZXdMaW5rID0gY2xhc3MgVmlld0xpbmsgZXh0ZW5kcyBCYXNlQ29tcG9uZW50XzEuQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICBjb25zdHJ1Y3RvcihfcGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgVGVzdDFfMS5UZXN0MSh7IHRpdGxlOiBTdHJpbmcoRGF0ZS5ub3coKSkgfSk7XG4gICAgICAgIHRoaXMudGVzdCA9IHRoaXMubW9kZWwuYmluZChcInRpdGxlXCIpO1xuICAgICAgICB0aGlzLnRlc3RlciA9IHRoaXMubW9kZWwuYmluZChcInRlc3RlclwiKTtcbiAgICAgICAgdGhpcy50ZXN0ZW4gPSB7fTtcbiAgICB9XG4gICAgY29uc3RydWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uTGlua0NsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblRlc3RUeXBlQ2hlY2sodmFsdWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja2luZyB0eXBlIG9mIHRlc3Qgd2l0aCB2YWx1ZVwiLCB2YWx1ZSk7XG4gICAgfVxuICAgIG9uVGVzdFR5cGVDaGVja1N1Y2Nlc3MoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHlwZWNoZWNrIG9mIHRlc3Qgc3VjY2Vzc2Z1bFwiKTtcbiAgICB9XG4gICAgb25UZXN0VHlwZUNoZWNrRmFpbChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlR5cGVjaGVjayBvZiB0ZXN0IGZhaWxlZFwiLCBlcnJvcik7XG4gICAgfVxuICAgIG9uVGVzdENoYW5nZShjaGFuZ2VkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdCBjaGFuZ2VkXCIsIGNoYW5nZWQsIHRoaXMpO1xuICAgIH1cbiAgICBvblRlc3RlckluaXQoaW5pdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RlciBpbml0XCIsIGluaXQsIHRoaXMpO1xuICAgIH1cbiAgICBvblRlc3RlckNoYW5nZShjaGFuZ2VkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIGNoYW5nZWRcIiwgY2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuICAgIG9uVGVzdGVyQWRkKGFkZGVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIGFkZGVkXCIsIGFkZGVkLCB0aGlzKTtcbiAgICB9XG4gICAgb25UZXN0ZXJSZW1vdmUocmVtb3ZlZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RlciByZW1vdmVkXCIsIHJlbW92ZWQsIHRoaXMpO1xuICAgIH1cbiAgICBvbkxpbmtDbGljayhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cucm91dGVyLm5hdmlnYXRlKHRoaXMuaHJlZiwgdHJ1ZSk7XG4gICAgfVxufTtcblZpZXdMaW5rLmV4dGVuZHMgPSAnYSc7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbl0sIFZpZXdMaW5rLnByb3RvdHlwZSwgXCJtb2RlbFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgVmlld0xpbmsucHJvdG90eXBlLCBcInRlc3RcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLndhdGNoZWQoKSwgZGVjb3JhdG9yc18xLmF0dHJpYnV0ZSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEFycmF5KVxuXSwgVmlld0xpbmsucHJvdG90eXBlLCBcInRlc3RlclwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCB0eXBlb2YgKF9hID0gdHlwZW9mIE9iamVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBPYmplY3QpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdClcbl0sIFZpZXdMaW5rLnByb3RvdHlwZSwgXCJ0ZXN0ZW5cIiwgdm9pZCAwKTtcblZpZXdMaW5rID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2IgPSB0eXBlb2YgQ29uc3RQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIgJiYgQ29uc3RQYXJhbXMpID09PSBcImZ1bmN0aW9uXCIgPyBfYiA6IE9iamVjdF0pXG5dLCBWaWV3TGluayk7XG5leHBvcnRzLmRlZmF1bHQgPSBWaWV3TGluaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZtbGxkMHhwYm1zdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyTnNhV1Z1ZEM5MGN5OWpiMjF3YjI1bGJuUnpMMVpwWlhkTWFXNXJMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRU3cyUkVGQmFVVTdRVUZEYWtVc2MwUkJRWE5HTzBGQlEzUkdMR2RFUVVFMlF6dEJRVlUzUXl4SlFVRnhRaXhSUVVGUkxFZEJRVGRDTEUxQlFYRkNMRkZCUVZNc1UwRkJVU3h2UTBGQmIwSXNRMEZCUXl4cFFrRkJhVUlzUTBGQlF6dEpRWGxEZWtVc1dVRkJXU3hQUVVFclFqdFJRVU4yUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVROQ1R5eFZRVUZMTEVkQlFVY3NTVUZCU1N4aFFVRkxMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVkZvUkN4VFFVRkpMRWRCUVZjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRlJOMElzVjBGQlRTeEhRVUZoTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlVYcEVMRmRCUVUwc1IwRkJWeXhGUVVGRkxFTkJRVU03U1VGSmRrTXNRMEZCUXp0SlFVOU5MRzFDUVVGdFFqdFJRVU4wUWl4TFFVRkxMRU5CUVVNc2JVSkJRVzFDTEVWQlFVVXNRMEZCUXp0UlFVTTFRaXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGFFVXNRMEZCUXp0SlFWTlRMR1ZCUVdVc1EwRkJReXhMUVVGdFFqdFJRVU42UXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExHdERRVUZyUXl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRek5FTEVOQlFVTTdTVUZSVXl4elFrRkJjMEk3VVVGRE5VSXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXc0UWtGQk9FSXNRMEZCUXl4RFFVRkRPMGxCUTJoRUxFTkJRVU03U1VGUlV5eHRRa0ZCYlVJc1EwRkJReXhMUVVGWk8xRkJRM1JETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc01FSkJRVEJDTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRia1FzUTBGQlF6dEpRVk5UTEZsQlFWa3NRMEZCUXl4UFFVRjFRanRSUVVNeFF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMR05CUVdNc1JVRkJSU3hQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETDBNc1EwRkJRenRKUVZOVExGbEJRVmtzUTBGQlF5eEpRVUZ2UWp0UlFVTjJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEdGQlFXRXNSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRE0wTXNRMEZCUXp0SlFWTlRMR05CUVdNc1EwRkJReXhQUVVGMVFqdFJRVU0xUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExHZENRVUZuUWl4RlFVRkZMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU5xUkN4RFFVRkRPMGxCVTFNc1YwRkJWeXhEUVVGRExFdEJRWEZDTzFGQlEzWkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zWTBGQll5eEZRVUZGTEV0QlFVc3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVNM1F5eERRVUZETzBsQlUxTXNZMEZCWXl4RFFVRkRMRTlCUVhWQ08xRkJRelZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRMnBFTEVOQlFVTTdTVUZUVHl4WFFVRlhMRU5CUVVNc1MwRkJXVHRSUVVNMVFpeExRVUZMTEVOQlFVTXNZMEZCWXl4RlFVRkZMRU5CUVVNN1VVRkRka0lzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTTFReXhEUVVGRE8wTkJRMG9zUTBGQlFUdEJRV2hLTUVJc1owSkJRVThzUjBGQlZ5eEhRVUZITEVOQlFVTTdRVUZQYWtNN1NVRkJXQ3h4UWtGQlVTeEZRVUZGT3p0MVEwRkJlVVE3UVVGUmRrUTdTVUZCV2l4elFrRkJVeXhGUVVGRk96dHpRMEZCWjBRN1FVRlJjRU03U1VGQmRrSXNiMEpCUVU4c1JVRkJSU3hGUVVGRkxITkNRVUZUTEVWQlFVVTdPM2REUVVGeFJEdEJRVkZvUlR0SlFVRllMSEZDUVVGUkxFVkJRVVU3TUVSQlFXZENMRTFCUVUwc2IwSkJRVTRzVFVGQlRUdDNRMEZCVFR0QlFYWkRkRUlzVVVGQlVUdEpRVVExUWl3MFFrRkJaU3hGUVVGRk8ybEZRVEJEVVN4WFFVRlhMRzlDUVVGWUxGZEJRVmM3UjBGNlEyaENMRkZCUVZFc1EwRjNTalZDTzJ0Q1FYaEtiMElzVVVGQlVTSjkiLCJpbXBvcnQgeyBCYXNlQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gJ35jbGllbnQvbGliL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IHsgaW5jbHVkZXNNZW1iZXJPZkxpc3QgfSBmcm9tICd+YmRvL3V0aWxzL3V0aWwnO1xuaW1wb3J0IHsgYmFzZUNvbnN0cnVjdG9yIH0gZnJvbSAnfmJkby91dGlscy9kZWNvcmF0b3JzJztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnfmJkby91dGlscy9kZWNvcmF0b3JzJztcbmltcG9ydCB7IENsaWVudFJvdXRlIH0gZnJvbSBcIn5jbGllbnQvbGliL0NsaWVudFJvdXRlXCI7XG5pbXBvcnQgTmF2aWdvIGZyb20gXCJuYXZpZ29cIjtcblxuLyoqXG4gKiBNYW5hZ2VzIHJvdXRpbmcgb24gY2xpZW50IHNpZGUsIHN3aXRjaGVzIHZpZXdzIGFuZCBjb2xsZWN0cyByb3V0ZXMgZm9yIGNsaWVudC5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgR2FtZVZpZXdcbiAqIEBleHRlbmRzIHtCYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MRWxlbWVudCl9XG4gKi9cbkBiYXNlQ29uc3RydWN0b3IoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld1JvdXRlciBleHRlbmRzIEJhc2VDb21wb25lbnRGYWN0b3J5KEhUTUxFbGVtZW50KSB7XG5cbiAgICAvKipcbiAgICAgKiBQcm92aWRlcyB0aGUgcG9zc2liaWxpdHkgdG8gcmVhY3Qgb24gYW5jaG9yIHRhZyBjbGlja3MsIGNhdGNoIHRoZSBkZWZhdWx0XG4gICAgICogYmVoYXZpb3IgYW5kIHN0YXJ0cyByb3V0aW5nLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWVtYmVyb2YgVmlld1JvdXRlclxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSgpIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyID0gbmV3IE5hdmlnbygpO1xuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAbWVtYmVyb2YgR2FtZVZpZXdcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMucm91dGVDb2xsZWN0aW9uKCk7XG4gICAgICAgIHdpbmRvdy5yb3V0ZXIgPSB0aGlzLnJvdXRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjb2xsZWN0cyBhbGwgYXZhaWxhYmxlIHJvdXRlcyBhbmQgaW5pdGlhbGl6ZXMgdGhlbVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWVtYmVyb2YgVmlld1JvdXRlclxuICAgICAqL1xuICAgIHByaXZhdGUgcm91dGVDb2xsZWN0aW9uKCkge1xuICAgICAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIHdpbmRvdy52aXJ0dWFsUm91dGVzKSB7XG4gICAgICAgICAgICBjb25zdCBteVJvdXRlID0gcmVxdWlyZShgLi8uLi9yb3V0ZXMvJHtyb3V0ZX0udHNgKS5kZWZhdWx0O1xuICAgICAgICAgICAgdGhpcy5zaW5nZVJvdXRlQ29sbGVjdGlvbihteVJvdXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGEgc2luZ2xlIHJvdXRlIGJhc2VkIG9uIGl0cyBmaWxlXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7dHlwZW9mIENsaWVudFJvdXRlfSBSb3V0ZVxuICAgICAqIEByZXR1cm5zXG4gICAgICogQG1lbWJlcm9mIFZpZXdSb3V0ZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIHNpbmdlUm91dGVDb2xsZWN0aW9uKFJvdXRlOiB0eXBlb2YgQ2xpZW50Um91dGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghaW5jbHVkZXNNZW1iZXJPZkxpc3QoPHN0cmluZ1tdPlJvdXRlLmF0dGFjaFRvU2VydmVycywgWzxzdHJpbmc+Z2xvYmFsLnByb2Nlc3MuZW52Lm5hbWUsICcqJ10pKSByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBSb3V0ZUNsYXNzID0gbmV3IFJvdXRlKCk7XG4gICAgICAgICAgICBpZiAoIVJvdXRlQ2xhc3MuaXNDbGllbnRSb3V0ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtSb3V0ZUNsYXNzLmNvbnN0cnVjdG9yLm5hbWV9IGlzIG5vdCBpbnN0YW5jZSBvZiB+Y2xpZW50L2xpYi9CYXNlUm91dGVgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucm91dGVyLm9uKFJvdXRlQ2xhc3Mucm91dGVyKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcbmltcG9ydCB7IFRlbXBsYXRlLCByZW5kZXJTdHJpbmcgfSBmcm9tICdudW5qdWNrcyc7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgYXR0cmlidXRlIH0gZnJvbSAnfmJkby91dGlscy9kZWNvcmF0b3JzJztcbmltcG9ydCB7IGdldE1ldGFkYXRhLCBnZXRXaWxkY2FyZE1ldGFkYXRhIH0gZnJvbSBcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIjtcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tIFwifmJkby9saWIvQmluZGluZ1wiO1xuaW1wb3J0IHsgUHJvcGVydHkgfSBmcm9tIFwifmJkby9saWIvUHJvcGVydHlcIjtcbmltcG9ydCB7IGdldE5hbWVzcGFjZWRTdG9yYWdlLCBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSwgZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlIH0gZnJvbSBcIn5jbGllbnQvdXRpbHMvdXRpbFwiO1xuaW1wb3J0IHsgY29uc3RydWN0VHlwZU9mSFRNTEF0dHJpYnV0ZSwgaXNQcmltaXRpdmUsIGlzU3RyaW5nLCBpc09iamVjdCwgcGFzY2FsQ2FzZTJrZWJhYkNhc2UgfSBmcm9tICd+YmRvL3V0aWxzL3V0aWwnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgQmFzZUNvbXBvbmVudCBiYXNlZCBvbiB0aGUgSFRNTFR5cGVFbGVtZW50XG4gKlxuICogQGV4cG9ydFxuICogQHRlbXBsYXRlIFRCYXNlIEFuIGludGVyZmFjZSB3aGljaCBpcyBkZXJpdmVkIGZyb20gSFRNTEVsZW1lbnRcbiAqIEBwYXJhbSB7VEJhc2V9IEhUTUxUeXBlRWxlbWVudCBEZXJpdmVkIGNsYXNzIGZyb20gSFRNTEVsZW1lbnRcbiAqIEByZXR1cm5zIFRoZSBCYXNlQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCYXNlQ29tcG9uZW50RmFjdG9yeTxUQmFzZSBleHRlbmRzIENvbnN0cnVjdG9yPEhUTUxFbGVtZW50Pj4oSFRNTFR5cGVFbGVtZW50OiBUQmFzZSkge1xuXG4gICAgLyoqXG4gICAgICogUHJvdmlkZXMgcGFzZSBmdW5jdGlvbmFsaXR5IGZvciBldmVyeSBjb21wb25lbnQsIG1hbmFnZXMgYW5kIHJlZ2lzdGVycyB0aGVtXG4gICAgICpcbiAgICAgKiBAY2xhc3MgQmFzZUNvbXBvbmVudFxuICAgICAqIEBleHRlbmRzIHtIVE1MVHlwZUVsZW1lbnR9XG4gICAgICovXG4gICAgYWJzdHJhY3QgY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIEhUTUxUeXBlRWxlbWVudCB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERldGVybWluZXMgd2V0aGVyIHRoaXMgY29tcG9uZW50IGV4dGVuZHMgYSBuYXRpdmUgZWxlbWVudCB3aGljaFxuICAgICAgICAgKiBjb3VsZCBub3QgYmUgZGVmaW5lZCBhcyBhIGN1c3RvbSBlbGVtZW50IGluIGEgZGlyZWN0IHdheSBsaWtlIHRoZVxuICAgICAgICAgKiBIVE1MQW5jaG9yRWxlbWVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAdHlwZSB7KHN0cmluZyB8IG51bGwpfVxuICAgICAgICAgKiBAbWVtYmVyb2YgQmFzZUNvbXBvbmVudFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBleHRlbmRzPzogc3RyaW5nO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc3RhdGljIHZlcnNpb24gb2YgdGhlIGJhc2UgY29tcG9uZW50IGlkZW50aWZpZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICogQG1lbWJlcm9mIEJhc2VDb21wb25lbnRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaXNCYXNlQ29tcG9uZW50OiBib29sZWFuID0gdHJ1ZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHNlZSBCYXNlQ29uc3RydWN0b3IuaXNQcm9jZWR1cmFsQ29tcG9uZW50Q29uc3RydWN0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqIEBtZW1iZXJvZiBCYXNlQ29tcG9uZW50XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGlzUHJvY2VkdXJhbENvbXBvbmVudENvbnN0cnVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHaXZlcyBhY2Nlc3MgdG8gdGhlIHByb3BlcnRpZXMgc2ltaWxhciB0byBlbGVtZW50LmF0dHJpYnV0ZXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqIEBtZW1iZXJvZiBCYXNlQ29tcG9uZW50XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0IHByb3BlcnRpZXMoKTogTWFwPHN0cmluZywgUHJvcGVydHk8dGhpcz4+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IGdldE1ldGFkYXRhKHRoaXMsIFwiZGVmaW5lZFByb3BlcnRpZXNcIik7XG4gICAgICAgICAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBvZiBwcm9wZXJ0aWVzLmtleXMoKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5zZXQocHJvcCwgZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLCBwcm9wKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRvIGVuc3VyZSB0aGF0IGV2ZXJ5IGNvbXBvbmVudCBoYXMgYSB1bmlxdWUgSUQgYXR0cmlidXRlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEBtZW1iZXJvZiBCYXNlQ29tcG9uZW50XG4gICAgICAgICAqL1xuICAgICAgICBAYXR0cmlidXRlKCkgcHVibGljIGlkOiBzdHJpbmcgPSB0aGlzLmdlbmVyYXRlVW5pcXVlSUQoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBpcyBmb3IgYmV0dGVyIGlkZW50aWZpY2F0aW9uIG9mIGJhc2UgY29tcG9uZW50cyBhbmQgaW5zdGFuY2UgY2hlY2tcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqIEBtZW1iZXJvZiBCYXNlQ29tcG9uZW50XG4gICAgICAgICAqL1xuICAgICAgICBAcHJvcGVydHkoKSBwdWJsaWMgcmVhZG9ubHkgaXNCYXNlQ29tcG9uZW50OiBib29sZWFuID0gdHJ1ZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVwcmVzZW50cyB0aGUgY29uc3RydWN0b3JzIG5hbWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQG1lbWJlcm9mIEJET01vZGVsXG4gICAgICAgICAqL1xuICAgICAgICBAcHJvcGVydHkoKSBwdWJsaWMgcmVhZG9ubHkgY2xhc3NOYW1lOiBzdHJpbmcgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcy5jb25zdHJ1Y3RvcikubmFtZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmaW5lcyB0aGUgdGVtcGxhdGUgb2YgdGhlIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICAgICAqIE11c3QgaGF2ZSBleGFjdGx5IG9uZSByb290IG5vZGUgYW5kIGNhbiBiZSBhIHN0cmluZyBvciBhIFRlbXBsYXRlXG4gICAgICAgICAqIGZvciBlLmcuIHJlcXVpcmUoXCIuL3BhdGgvdG8vdGVtcGxhdGUubmprXCIpXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHsoc3RyaW5nIHwgVGVtcGxhdGUpfVxuICAgICAgICAgKiBAbWVtYmVyb2YgQmFzZUNvbXBvbmVudFxuICAgICAgICAgKi9cbiAgICAgICAgQHByb3BlcnR5KHsgZGlzYWJsZVR5cGVHdWFyZDogdHJ1ZSB9KSBwcm90ZWN0ZWQgcmVhZG9ubHkgdGVtcGxhdGVTdHJpbmc6IHN0cmluZyB8IFRlbXBsYXRlID0gJzxkaXY+PHNsb3Q+PC9zbG90PjwvZGl2Pic7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnRhaW5zIGFuIG9iamVjdCB3aGljaCBrZXlzIG1hdGNoZXMgdGhlIGludGVycG9sYXRpb25zIG9mIHRoZSB0ZW1wbGF0ZS5cbiAgICAgICAgICogVGhpcyBjb3VsZCBiZSB1c2VkIHRvIGRlZmluZSBhIHN0YW5kYXJkIHN0eWxlIHNpbWlsYXIgdG8gdGhlIGRlZmF1bHRcbiAgICAgICAgICogc3R5bGUgb2Ygbm9ybWFsIEhUTUxFbGVtZW50cyBvciB0byBkZWZpbmUgYSBzdGFuZGFyZCBjb250ZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEB0eXBlIHtJbmRleFN0cnVjdHVyZX1cbiAgICAgICAgICogQG1lbWJlcm9mIEJhc2VDb21wb25lbnRcbiAgICAgICAgICovXG4gICAgICAgIEBwcm9wZXJ0eSgpIHByb3RlY3RlZCB0ZW1wbGF0ZVBhcmFtczogSW5kZXhTdHJ1Y3R1cmUgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSG9sZHMgYSBsaXN0IG9mIGFsbCBiaW5kaW5ncyB0byBhbGwgbW9kZWxzXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEB0eXBlIHtNYXA8c3RyaW5nLCBCaW5kaW5nPHRoaXMsIERlZk5vbkZ1bmNQcm9wTmFtZXM8dGhpcz4+Pn1cbiAgICAgICAgICogQG1lbWJlcm9mIEJhc2VDb21wb25lbnRcbiAgICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBnZXQgYmluZGluZ3MoKTogTWFwPHN0cmluZywgQmluZGluZzx0aGlzLCBEZWZOb25GdW5jUHJvcE5hbWVzPHRoaXM+Pj4ge1xuICAgICAgICAgICAgY29uc3QgYmluZGluZ3MgPSBnZXRNZXRhZGF0YSh0aGlzLCBcImluaXRpYXRvckJpbmRpbmdcIik7XG4gICAgICAgICAgICByZXR1cm4gYmluZGluZ3MgPyBiaW5kaW5ncyA6IG5ldyBNYXAoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm92aWRlcyB0aGUgcG9zc2liaWxpdHkgdG8gY29uc3RydWN0IGEgY29tcG9uZW50IHByb2dyYW1tYXRpY2FsbHlcbiAgICAgICAgICogd2l0aCByZXNwZWN0aW5nIGRlZmF1bHQgc2V0dGluZ3MuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHRlbXBsYXRlIFRcbiAgICAgICAgICogQHBhcmFtIHtuZXcgKCkgPT4gVH0gdGhpc1xuICAgICAgICAgKiBAcGFyYW0ge0NvbnN0UGFyYW1zPFQ+fSBbcGFyYW1zXVxuICAgICAgICAgKiBAcmV0dXJuc1xuICAgICAgICAgKiBAbWVtYmVyb2YgQmFzZUNvbXBvbmVudFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGU8VCBleHRlbmRzIEJhc2VDb21wb25lbnQ+KHRoaXM6IENvbnN0cnVjdG9yPFQ+LCBwYXJhbXM/OiBDb25zdFBhcmFtczxUPikge1xuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXMgYXMgdW5rbm93biBhcyB0eXBlb2YgQmFzZUNvbXBvbmVudDtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHBhc2NhbENhc2Uya2ViYWJDYXNlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5uYW1lKTtcbiAgICAgICAgICAgIGxldCBpcyA9IHRoYXQuZXh0ZW5kcztcbiAgICAgICAgICAgIGxldCB0YWdOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgICAgICAgaWYgKGlzKSB7XG4gICAgICAgICAgICAgICAgdGFnTmFtZSA9IGlzO1xuICAgICAgICAgICAgICAgIGlzID0gY2xhc3NOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhhdC5pc1Byb2NlZHVyYWxDb21wb25lbnRDb25zdHJ1Y3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgeyBpcyB9KSBhcyB1bmtub3duIGFzIEJhc2VDb21wb25lbnQ7XG4gICAgICAgICAgICB0aGF0LmlzUHJvY2VkdXJhbENvbXBvbmVudENvbnN0cnVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgZWxlbWVudC5pbnZva2VMaWZlQ3ljbGUocGFyYW1zKTtcbiAgICAgICAgICAgIGlmIChpcykgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpc1wiLCBpcywgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBc3NpZ25zIGFsbCBjb25zdCBwYXJhbXMgdG8gdGhlIGN1cnJlbnQgaW5zdGFuY2UgYW5kIGluaXRpYWxpemVzIHRoZSBsaWZlIGN5Y2xlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0ZW1wbGF0ZSBUXG4gICAgICAgICAqIEBwYXJhbSB7Q29uc3RydWN0b3I8VD59IHRoaXNcbiAgICAgICAgICogQHBhcmFtIHtDb25zdFBhcmFtczxUPn0gQ29uc3RQYXJhbXNcbiAgICAgICAgICogQG1lbWJlcm9mIEJhc2VDb21wb25lbnRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpbnZva2VMaWZlQ3ljbGU8VCBleHRlbmRzIEJhc2VDb21wb25lbnQ+KF9Db25zdFBhcmFtcz86IENvbnN0UGFyYW1zPFQ+KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGlzIG5vdCBhIEJhc2VDb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZWUgZG9jIHN0cmluZyBpbiB+Y2xpZW50L3V0aWxzL3V0aWxcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW25zUHJvcF1cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtmb3JjZU5TXVxuICAgICAgICAgKiBAcmV0dXJuc1xuICAgICAgICAgKiBAbWVtYmVyb2YgQ2xpZW50TW9kZWxcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXROYW1lc3BhY2VkU3RvcmFnZShrZXk6IHN0cmluZywgbnNQcm9wPzogc3RyaW5nLCBmb3JjZU5TPzogc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0TmFtZXNwYWNlZFN0b3JhZ2UodGhpcywga2V5LCBuc1Byb3AsIGZvcmNlTlMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlZSBkb2Mgc3RyaW5nIGluIH5jbGllbnQvdXRpbHMvdXRpbFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICAgICAqIEBwYXJhbSB7Kn0gbmV3VmFsXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbnNQcm9wXVxuICAgICAgICAgKiBAcmV0dXJuc1xuICAgICAgICAgKiBAbWVtYmVyb2YgQ2xpZW50TW9kZWxcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZShrZXk6IHN0cmluZywgbmV3VmFsOiBhbnksIG5zUHJvcD86IHN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKHRoaXMsIGtleSwgbmV3VmFsLCBuc1Byb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHNlZSBkb2Mgc3RyaW5nIGluIH5jbGllbnQvdXRpbHMvdXRpbFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbnNQcm9wXVxuICAgICAgICAgKiBAcmV0dXJuc1xuICAgICAgICAgKiBAbWVtYmVyb2YgQ2xpZW50TW9kZWxcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBkZWxldGVGcm9tTmFtZXNwYWNlZFN0b3JhZ2Uoa2V5OiBzdHJpbmcsIG5zUHJvcD86IHN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5zUHJvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQGluaGVyaXRkb2MgU2V0VmFsdWUgaXMgdXNlZCBieSBwcm94eUhhbmRsZXIgdG8gYXZvaWQgc2V0dGluZyBhXG4gICAgICAgICAqIG5ldyB2YWx1ZSBpcyBhbiBvYmplY3QgaGFzIGJlZW4gY2hhbmdlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHF1YWxpZmllZE5hbWVcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAgICAgKiBAbWVtYmVyb2YgQmFzZUNvbXBvbmVudFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldEF0dHJpYnV0ZShxdWFsaWZpZWROYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHNldFZhbHVlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcGVydGllcyAmJiB0aGlzLnByb3BlcnRpZXMuaGFzKHF1YWxpZmllZE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBcIiR7cXVhbGlmaWVkTmFtZX1cIiBjYW4ndCBiZSBzZXQgYXMgYXR0cmlidXRlIGJlY2F1c2UgaXQgaXMgYSBkZWZpbmVkIHByb3BlcnR5YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVUb1NldCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICghaXNQcmltaXRpdmUodmFsdWUpKSB2YWx1ZVRvU2V0ID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL1xcXCIvZywgXCInXCIpO1xuICAgICAgICAgICAgICAgIHN1cGVyLnNldEF0dHJpYnV0ZShxdWFsaWZpZWROYW1lLCB2YWx1ZVRvU2V0KTtcbiAgICAgICAgICAgICAgICB2YWx1ZVRvU2V0ID0gY29uc3RydWN0VHlwZU9mSFRNTEF0dHJpYnV0ZSh0aGlzLCBxdWFsaWZpZWROYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoc2V0VmFsdWUpICg8YW55PnRoaXMpW3F1YWxpZmllZE5hbWVdID0gdmFsdWVUb1NldDtcbiAgICAgICAgICAgIH0gZWxzZSB0aGlzLnJlbW92ZUF0dHJpYnV0ZShxdWFsaWZpZWROYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcXVhbGlmaWVkTmFtZVxuICAgICAgICAgKiBAbWVtYmVyb2YgQmFzZUNvbXBvbmVudFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlbW92ZUF0dHJpYnV0ZShxdWFsaWZpZWROYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMgJiYgdGhpcy5wcm9wZXJ0aWVzLmhhcyhxdWFsaWZpZWROYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgXCIke3F1YWxpZmllZE5hbWV9XCIgY2FuJ3QgYmUgcmVtb3ZlZCBhcyBhdHRyaWJ1dGUgYmVjYXVzZSBpdCBpcyBhIGRlZmluZWQgcHJvcGVydHlgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1cGVyLnJlbW92ZUF0dHJpYnV0ZShxdWFsaWZpZWROYW1lKTtcbiAgICAgICAgICAgICg8YW55PnRoaXMpW3F1YWxpZmllZE5hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnZlcnRzIHRoZSBjdXJyZW50IGluc3RhbmNlIG9mIHRoaXMgdG8gYSBqc29uIHdpdGggcHJvcGVydGllcyBvbmx5XG4gICAgICAgICAqIE5PVEU6IFRoaXMgd2lsbCBiZSB1c2VkIGJ5IEpTT04uc3RyaW5naWZ5KCkgdG8gbWFrZSBhIHN0cmluZyBvdXQgb2YgdGhpc1xuICAgICAgICAgKiAgICAgICBpbnN0YW5jZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnNcbiAgICAgICAgICogQG1lbWJlcm9mIEJhc2VDb21wb25lbnRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0b0pTT04oKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhOiBJbmRleFN0cnVjdHVyZSA9IHt9O1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIDEuIENhbGxlZCB3aGVuIGFsbCBwcm92aWRlZCBjb25zdHJ1Y3RvciBwYXJhbWV0ZXJzIGFyZSBhc3NpZ25lZCB0b1xuICAgICAgICAgKiB0aGVpciBjb3JyZXNwb25kaW5nIHByb3BlcnRpZXMgLyBhdHRyaWJ1dGVzLiBBbHNvIHNldHMgcHJlZGVmaW5lZFxuICAgICAgICAgKiBhdHRyaWJ1dGVzIGZyb20gdGhlIGRvbS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAcGFyYW0gey4uLmFueVtdfSBfYXJncyBTYW1lIHBhcmFtZXRlcnMgbGlrZSB0aGUgY29uc3RydWN0b3JcbiAgICAgICAgICogQG1lbWJlcm9mIEJhc2VDb21wb25lbnRcbiAgICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RlZENhbGxiYWNrKC4uLl9hcmdzOiBhbnlbXSkge1xuICAgICAgICAgICAgLy8gUmVuZGVyIHRlbXBsYXRlIG9ubHkgaWYgdGhpcyBjb21wb25lbnQgZG9lc24ndCBleHRlbmQgYSBuYXRpdmUgb25lXG4gICAgICAgICAgICBpZiAoISg8YW55PnRoaXMuY29uc3RydWN0b3IpLmV4dGVuZHMpIHtcbiAgICAgICAgICAgICAgICAvLyBBdHRhY2ggYSBzaGFkb3cgcm9vdCB0byB0aGUgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBsZXQgc3RyaW5nVG9QYXJzZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKHRoaXMudGVtcGxhdGVTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ1RvUGFyc2UgPSByZW5kZXJTdHJpbmcodGhpcy50ZW1wbGF0ZVN0cmluZywgdGhpcy50ZW1wbGF0ZVBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc09iamVjdCh0aGlzLnRlbXBsYXRlU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmdUb1BhcnNlID0gKDxUZW1wbGF0ZT50aGlzLnRlbXBsYXRlU3RyaW5nKS5yZW5kZXIodGhpcy50ZW1wbGF0ZVBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJpbmdUb1BhcnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzdHJpbmdUb1BhcnNlLCAndGV4dC9odG1sJyk7XG4gICAgICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoPENoaWxkTm9kZT5kb2MuYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogMi4gQ2FsbGVkIHdoZW4gYSBjb21wb25lbnQgaXMgY29ubmVjdGVkIHdpdGggdGhlIGRvbS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAbWVtYmVyb2YgQmFzZUNvbXBvbmVudFxuICAgICAgICAgKi9cbiAgICAgICAgcHJvdGVjdGVkIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQgeyB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIDMuIENhbGxlZCB3aGVuIGEgY29tcG9uZW50IHdpbGwgYmUgZmluYWxseSByZW1vdmVkIGZyb20gdGhlIGRvbS5cbiAgICAgICAgICogcmVtb3ZlcyBhbGwgY29udHJvbGxlcnMgYW5kIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAbWVtYmVyb2YgQmFzZUNvbXBvbmVudFxuICAgICAgICAgKi9cbiAgICAgICAgcHJvdGVjdGVkIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQgeyB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIDQuIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW92ZWQgdG8gYW5vdGhlciBkb2N1bWVudC5cbiAgICAgICAgICogUmViaW5kcyBhbGwgY29udHJvbGxlcnMgYW5kIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAbWVtYmVyb2YgQmFzZUNvbXBvbmVudFxuICAgICAgICAgKi9cbiAgICAgICAgcHJvdGVjdGVkIGFkb3B0ZWRDYWxsYmFjaygpOiB2b2lkIHsgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0aWFsaXplcyB0aGUgZ2l2ZW4gY29udHJvbGxlciBhbmQgcmV0dXJucyBpdHMgaW5zdGFuY2VcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAbWVtYmVyb2YgQmFzZUNvbXBvbmVudFxuICAgICAgICAgKi9cbiAgICAgICAgcHJvdGVjdGVkIGFkZENvbnRyb2xsZXIoKTogdm9pZCB7IH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4gY29udHJvbGxlclxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBtZW1iZXJvZiBCYXNlQ29tcG9uZW50XG4gICAgICAgICAqL1xuICAgICAgICBwcm90ZWN0ZWQgcmVtb3ZlQ29udHJvbGxlcigpOiB2b2lkIHsgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZW5lcmF0ZXMgYSB1bmlxdWUgSUQgZm9yIGVhY2ggd2ViY29tcG9uZW50IGJhc2VkIG9uIGNsYXNzIG5hbWUgYW5kIG9jY3VycmVuY2UgcG9zaXRpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEByZXR1cm5zXG4gICAgICAgICAqIEBtZW1iZXJvZiBCYXNlQ29tcG9uZW50XG4gICAgICAgICAqL1xuICAgICAgICBwcml2YXRlIGdlbmVyYXRlVW5pcXVlSUQoKSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcy5jb25zdHJ1Y3RvcikubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IG9jY3VycmVuY2VzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0aGlzLnRhZ05hbWUpKTtcbiAgICAgICAgICAgIGNvbnN0IG9jY3VycmVuY2UgPSBvY2N1cnJlbmNlcy5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIGAke2NsYXNzTmFtZX1fJHtvY2N1cnJlbmNlID49IDAgPyBvY2N1cnJlbmNlIDogb2NjdXJyZW5jZXMubGVuZ3RofWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gQmFzZUNvbXBvbmVudDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgQmFzZUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG4gICAgY29uc3RydWN0ZWRDYWxsYmFjaygpIHsgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkgeyB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7IH1cbiAgICBhZG9wdGVkQ2FsbGJhY2soKSB7IH1cbn1cbmV4cG9ydHMuQmFzZUNvbnRyb2xsZXIgPSBCYXNlQ29udHJvbGxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFtRnpaVU52Ym5SeWIyeHNaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJOc2FXVnVkQzkwY3k5c2FXSXZRbUZ6WlVOdmJuUnliMnhzWlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZQUVN4TlFVRmhMR05CUVdNN1NVRkZka0lzWjBKQlFXZENMRU5CUVVNN1NVRlRVQ3h0UWtGQmJVSXNTMEZCU3l4RFFVRkRPMGxCVVhwQ0xHbENRVUZwUWl4TFFVRkxMRU5CUVVNN1NVRlRka0lzYjBKQlFXOUNMRXRCUVVzc1EwRkJRenRKUVZNeFFpeGxRVUZsTEV0QlFVc3NRMEZCUXp0RFFVTnNRenRCUVhSRFJDeDNRMEZ6UTBNaWZRPT0iLCJpbXBvcnQgeyBiYXNlQ29uc3RydWN0b3IsIHByb3BlcnR5IH0gZnJvbSBcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiO1xuaW1wb3J0IHsgQkRPTW9kZWwgfSBmcm9tIFwifmJkby9saWIvQkRPTW9kZWxcIjtcbmltcG9ydCB7IGdldE5hbWVzcGFjZWRTdG9yYWdlLCBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSwgZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlIH0gZnJvbSBcIn5jbGllbnQvdXRpbHMvdXRpbFwiO1xuaW1wb3J0IHsgaXNSZWZlcmVuY2VTdHJpbmcgfSBmcm9tIFwifmJkby91dGlscy9mcmFtZXdvcmtcIjtcbmltcG9ydCB7IGdldFdpbGRjYXJkTWV0YWRhdGEsIGdldE1ldGFkYXRhIH0gZnJvbSBcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIjtcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJ+Y2xpZW50L2xpYi9Mb2dnZXJcIjtcbmltcG9ydCB7IERhdGFiYXNlTWFuYWdlciB9IGZyb20gXCJ+Y2xpZW50L2xpYi9EYXRhYmFzZU1hbmFnZXJcIjtcbmltcG9ydCB7IEF0dHJpYnV0ZSB9IGZyb20gJ35iZG8vbGliL0F0dHJpYnV0ZSc7XG5pbXBvcnQgeyBXYXRjaGVkIH0gZnJvbSAnfmJkby9saWIvV2F0Y2hlZCc7XG5pbXBvcnQgeyBnZXRQcm94eVRhcmdldCwgaXNFcXVhbCwgaXNBcnJheSwgZGlmZmVyZW5jZSwgaXNPYmplY3QsIGlzUHJpbWl0aXZlIH0gZnJvbSBcIn5iZG8vdXRpbHMvdXRpbFwiO1xuaW1wb3J0IHsgTW9kZWxSZWdpc3RyeSB9IGZyb20gXCJ+YmRvL2xpYi9Nb2RlbFJlZ2lzdHJ5XCI7XG5cbmNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoKTtcbmNvbnN0IGRhdGFiYXNlTWFuYWdlciA9IERhdGFiYXNlTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuXG4vKipcbiAqIFByb3ZpZGVzIGJhc2ljIGZ1bmN0aW9uYWxpdHkgYW5kIGZpZWxkcyBmb3IgZWFjaCBNb2RlbCBvbiBlYWNoIHNpZGVcbiAqIChzZXJ2ZXIgYW5kIGNsaWVudClcbiAqXG4gKiBAZXhwb3J0XG4gKiBAYWJzdHJhY3RcbiAqIEBjbGFzcyBCRE9Nb2RlbFxuICovXG5AYmFzZUNvbnN0cnVjdG9yKClcbmV4cG9ydCBjbGFzcyBDbGllbnRNb2RlbCBleHRlbmRzIEJET01vZGVsIHtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMganVzdCBhIENsaWVudE1vZGVsIGlkZW50aWZpZXIgaW4gY2FzZSB5b3Ugd2FudCB0byBrbm93IGlmIGEgbm90XG4gICAgICogaW5pdGlhbGl6ZWQgY2xhc3MgaXMgYSBtb2RlbC5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgQkRPTW9kZWxcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGlzQ2xpZW50TW9kZWw6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogQHNlZSBDbGllbnRNb2RlbC5pc0NsaWVudE1vZGVsXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgQkRPTW9kZWxcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoKSBwdWJsaWMgcmVhZG9ubHkgaXNDbGllbnRNb2RlbDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGV4aXN0aW5nIGluc3RhbmNlIG9mIHRoZSBjdXJyZW50IG1vZGVsIHR5cGUgaWYgYXZhaWxhYmxlIGFuZFxuICAgICAqIG90aGVyd2lzZSBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIGZpcnN0IGZyb20gcHJvcGVydGllcyBpbiBsb2NhbCBkYXRhYmFzZVxuICAgICAqIGFuZCB1cGRhdGVzIHRoaXMgcHJvcGVydGllcy4gSWYgdGhlcmUgaXMgbm8gZW50cnkgaW4gdGhlIGxvY2FsIGRhdGFiYXNlXG4gICAgICogb24gY2xpZW50IHNpZGUsIHRoZSBzZXJ2ZXIgd2lsbCBiZSBhc2tlZCBmb3IgYW4gaW5zdGFuY2UuIElmIHRoZXJlIGlzIG5vXG4gICAgICogc3VjaCBpZCwgdW5kZWZpbmVkIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHRlbXBsYXRlIFRcbiAgICAgKiBAcGFyYW0ge0NvbnN0cnVjdG9yPFQ+fSB0aGlzXG4gICAgICogQHBhcmFtIHtUW1wiaWRcIl19IGlkXG4gICAgICogQHJldHVybnNcbiAgICAgKiBAbWVtYmVyb2YgQ2xpZW50TW9kZWxcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlQnlJRDxUIGV4dGVuZHMgQkRPTW9kZWw+KHRoaXM6IENvbnN0cnVjdG9yPFQ+LCBpZDogVFtcImlkXCJdKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxUIHwgdW5kZWZpbmVkPihhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IG1vZGVsID0gTW9kZWxSZWdpc3RyeS5nZXRJbnN0YW5jZSgpLmdldE1vZGVsQnlJZChpZCwgdGhpcykgYXMgVCB8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmICghbW9kZWwpIG1vZGVsID0gbmV3IHRoaXMoKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFGcm9tTG9jYWxEQiA9IGF3YWl0IGRhdGFiYXNlTWFuYWdlclxuICAgICAgICAgICAgICAgIC5kYXRhYmFzZShtb2RlbC5kYXRhYmFzZU5hbWUpXG4gICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24obW9kZWwuY29sbGVjdGlvbk5hbWUpXG4gICAgICAgICAgICAgICAgLmdldChpZCk7XG4gICAgICAgICAgICBpZiAoZGF0YUZyb21Mb2NhbERCKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGVuZGluZ1Byb21pc2VzOiBBcnJheTxQcm9taXNlPHZvaWQ+PiA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGFGcm9tTG9jYWxEQikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YUZyb21Mb2NhbERCLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGVsRWxlbSA9IFJlZmxlY3QuZ2V0KG1vZGVsLCBrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzOiB0eXBlb2YgQ2xpZW50TW9kZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbSA9IGRhdGFGcm9tTG9jYWxEQltrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvcnJlc3BvbmRpbmdMaXN0TGlrZURCID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbEVsZW0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlc3BvbmRpbmdMaXN0TGlrZURCID0gbW9kZWxFbGVtLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIENsaWVudE1vZGVsKSByZXR1cm4gaXRlbS5nZXRSZWZlcmVuY2VTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbSBpbnN0YW5jZW9mIEFycmF5ICYmIGRpZmZlcmVuY2UoY29ycmVzcG9uZGluZ0xpc3RMaWtlREIsIGVsZW0pLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBlbmRpbmdJdGVtczogQXJyYXk8UHJvbWlzZTx2b2lkPj4gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzUmVmZXJlbmNlU3RyaW5nKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZQYXJ0cyA9IGl0ZW0uc3BsaXQoXCI6XCIpWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gcmVmUGFydHNbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrbGFzcyA9IHJlcXVpcmUoYC4vLi4vbW9kZWxzLyR7Y2xhc3NOYW1lfS50c2ApW2NsYXNzTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nSXRlbXMucHVzaChrbGFzcy5nZXRJbnN0YW5jZUJ5SUQocmVmUGFydHNbMl0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ1Byb21pc2VzLnB1c2goUHJvbWlzZS5hbGwocGVuZGluZ0l0ZW1zKS50aGVuKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1JlZmVyZW5jZVN0cmluZyhlbGVtKSAmJiBlbGVtICE9PSBtb2RlbC5nZXRSZWZlcmVuY2VTdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZlBhcnRzID0gZWxlbS5zcGxpdChcIjpcIilbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gcmVmUGFydHNbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2xhc3MgPSByZXF1aXJlKGAuLy4uL21vZGVscy8ke2NsYXNzTmFtZX0udHNgKVtjbGFzc05hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmdQcm9taXNlcy5wdXNoKGtsYXNzLmdldEluc3RhbmNlQnlJRChyZWZQYXJ0c1syXSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHBlbmRpbmdQcm9taXNlcyk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihtb2RlbCwgZGF0YUZyb21Mb2NhbERCKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbW9kZWwuaWQuaW5jbHVkZXMoXCJwZW5kaW5nXCIpKSByZXR1cm4gcmVzb2x2ZShtb2RlbCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2hlcyBmb3IgbW9kZWxzIG9mIGN1cnJlbnQgbW9kZWwgdHlwZSBieSBhdHRyaWJ1dGVzIGluIHRoZSBsb2NhbFxuICAgICAqIGRhdGFiYXNlIGFuZCBjcmVhdGVzIGluc3RhbmNlcyBvZiB0aGVtIHVzaW5nIGdldEluc3RhbmNlQnlJRC5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAdGVtcGxhdGUgVFxuICAgICAqIEBwYXJhbSB7Q29uc3RydWN0b3I8VD59IHRoaXNcbiAgICAgKiBAcGFyYW0ge0NvbnN0UGFyYW1zPFQ+fSBhdHRyaWJ1dGVzXG4gICAgICogQHJldHVybnNcbiAgICAgKiBAbWVtYmVyb2YgQ2xpZW50TW9kZWxcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlc0J5QXR0cmlidXRlczxUIGV4dGVuZHMgQkRPTW9kZWw+KHRoaXM6IENvbnN0cnVjdG9yPFQ+LCBhdHRyaWJ1dGVzOiBDb25zdFBhcmFtczxUPikge1xuICAgICAgICByZXR1cm4gTW9kZWxSZWdpc3RyeS5nZXRJbnN0YW5jZSgpLmdldE1vZGVsc0J5QXR0cmlidXRlcyhhdHRyaWJ1dGVzKSBhcyBDbGllbnRNb2RlbFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBzZWUgZ2V0TmFtZXNwYWNlZFN0b3JhZ2VcbiAgICAgKiBAbGluayB+Y2xpZW50L3V0aWxzL3V0aWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW25zUHJvcF1cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2ZvcmNlTlNdXG4gICAgICogQHJldHVybnNcbiAgICAgKiBAbWVtYmVyb2YgQ2xpZW50TW9kZWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0TmFtZXNwYWNlZFN0b3JhZ2Uoa2V5OiBzdHJpbmcsIG5zUHJvcD86IHN0cmluZywgZm9yY2VOUz86IHN0cmluZykge1xuICAgICAgICByZXR1cm4gZ2V0TmFtZXNwYWNlZFN0b3JhZ2UodGhpcywga2V5LCBuc1Byb3AsIGZvcmNlTlMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBzZWUgc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2VcbiAgICAgKiBAbGluayB+Y2xpZW50L3V0aWxzL3V0aWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKiBAcGFyYW0geyp9IG5ld1ZhbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbnNQcm9wXVxuICAgICAqIEByZXR1cm5zXG4gICAgICogQG1lbWJlcm9mIENsaWVudE1vZGVsXG4gICAgICovXG4gICAgcHVibGljIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGtleTogc3RyaW5nLCBuZXdWYWw6IGFueSwgbnNQcm9wPzogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5ld1ZhbCwgbnNQcm9wKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAc2VlIGRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZVxuICAgICAqIEBsaW5rIH5jbGllbnQvdXRpbHMvdXRpbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbnNQcm9wXVxuICAgICAqIEByZXR1cm5zXG4gICAgICogQG1lbWJlcm9mIENsaWVudE1vZGVsXG4gICAgICovXG4gICAgcHVibGljIGRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZShrZXk6IHN0cmluZywgbnNQcm9wPzogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBkZWxldGVGcm9tTmFtZXNwYWNlZFN0b3JhZ2UodGhpcywga2V5LCBuc1Byb3ApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0clxuICAgICAqIEBtZW1iZXJvZiBDbGllbnRNb2RlbFxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBzYXZlKGF0dHI/OiBEZWZOb25GdW5jUHJvcE5hbWVzPHRoaXM+KTogUHJvbWlzZTxJbmRleFN0cnVjdHVyZT4ge1xuICAgICAgICBjb25zdCBkZWZpbmVkQXR0cmlidXRlcyA9IGdldE1ldGFkYXRhKHRoaXMsIFwiZGVmaW5lZEF0dHJpYnV0ZXNcIik7XG4gICAgICAgIGlmICghZGVmaW5lZEF0dHJpYnV0ZXMgfHwgYXR0ciAmJiAhZGVmaW5lZEF0dHJpYnV0ZXMuaGFzKGF0dHIpKSB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGRlZmluZWQgYXR0cmlidXRlc1wiKTtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IGF0dHIgPyBbYXR0cl0gOiBkZWZpbmVkQXR0cmlidXRlcy5rZXlzKCk7XG4gICAgICAgIGNvbnN0IHVuc2F2ZWRDaGFuZ2VzOiBJbmRleFN0cnVjdHVyZSA9IGF3YWl0IHRoaXMuZ2V0VW5zYXZlZENoYW5nZXMoKTtcbiAgICAgICAgY29uc3QgdG9TYXZlOiBJbmRleFN0cnVjdHVyZSA9IHt9O1xuICAgICAgICBjb25zdCBzZW5kVG9TZXJ2ZXI6IEluZGV4U3RydWN0dXJlID0ge307XG4gICAgICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGlmICh1bnNhdmVkQ2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyQXR0ciA9IDxzdHJpbmc+YXR0cmlidXRlO1xuICAgICAgICAgICAgICAgIGxldCBwcm94eVZhbCA9IGdldFByb3h5VGFyZ2V0KHVuc2F2ZWRDaGFuZ2VzW3N0ckF0dHJdKTtcbiAgICAgICAgICAgICAgICBpZiAocHJveHlWYWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBwcm94eVZhbCA9IHByb3h5VmFsLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBDbGllbnRNb2RlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmdldFJlZmVyZW5jZVN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFByb3h5VGFyZ2V0KGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByb3h5VmFsIGluc3RhbmNlb2YgQ2xpZW50TW9kZWwpIHByb3h5VmFsID0gcHJveHlWYWwuZ2V0UmVmZXJlbmNlU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgbGV0IHdpbGRDYXJkTWV0YWRhdGE6IEF0dHJpYnV0ZSA9IGdldFdpbGRjYXJkTWV0YWRhdGEodGhpcywgc3RyQXR0cik7XG4gICAgICAgICAgICAgICAgaWYgKHdpbGRDYXJkTWV0YWRhdGEgaW5zdGFuY2VvZiBXYXRjaGVkKSB3aWxkQ2FyZE1ldGFkYXRhID0gd2lsZENhcmRNZXRhZGF0YS5zdWJPYmplY3QgYXMgQXR0cmlidXRlO1xuICAgICAgICAgICAgICAgIC8vIERldGVybWluZSBhdHRyaWJ1dGVzIHRvIHNhdmUgaW4gbG9jYWwgZGF0YWJhc2VcbiAgICAgICAgICAgICAgICBpZiAoIXdpbGRDYXJkTWV0YWRhdGEuZG9Ob3RQZXJzaXN0KSB0b1NhdmVbc3RyQXR0cl0gPSBwcm94eVZhbDtcbiAgICAgICAgICAgICAgICAvLyBEZXRlcm1pbmUgYXR0cmlidXRlcyB0byBzZW5kIHRvIHNlcnZlclxuICAgICAgICAgICAgICAgIGlmICghd2lsZENhcmRNZXRhZGF0YS5ub1NlcnZlckludGVyYWN0aW9uKSBzZW5kVG9TZXJ2ZXJbc3RyQXR0cl0gPSBwcm94eVZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRvU2F2ZSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgZGF0YWJhc2VNYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhYmFzZSh0aGlzLmRhdGFiYXNlTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh0aGlzLmlkLCB0b1NhdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHNlbmRUb1NlcnZlcikubGVuZ3RoKSBsb2dnZXIuZGVidWcoYHNlbmQgJHtKU09OLnN0cmluZ2lmeShzZW5kVG9TZXJ2ZXIpfSB0byBzZXJ2ZXJgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bnNhdmVkQ2hhbmdlcyBhcyBDb25zdFBhcmFtczx0aGlzPik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RGVmTm9uRnVuY1Byb3BOYW1lczx0aGlzPn0gYXR0clxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqIEBtZW1iZXJvZiBDbGllbnRNb2RlbFxuICAgICAqL1xuICAgIHB1YmxpYyBkaXNjYXJkKF9hdHRyPzogRGVmTm9uRnVuY1Byb3BOYW1lczx0aGlzPik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q29uc3RQYXJhbXM8dGhpcz4+fVxuICAgICAqIEBtZW1iZXJvZiBDbGllbnRNb2RlbFxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBnZXRVbnNhdmVkQ2hhbmdlcygpOiBQcm9taXNlPEluZGV4U3RydWN0dXJlPiB7XG4gICAgICAgIGlmICghdGhpcy5jb2xsZWN0aW9uTmFtZSkgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiTm8gY29sbGVjdGlvbk5hbWUgcHJvdmlkZWRcIik7XG4gICAgICAgIGNvbnN0IHVuc2F2ZWRDaGFuZ2VzOiBDb25zdFBhcmFtczx0aGlzPiA9IHt9O1xuICAgICAgICBsZXQgZGJDb2xsZWN0aW9uID0gYXdhaXQgZGF0YWJhc2VNYW5hZ2VyLmRhdGFiYXNlKFwiZGVmYXVsdFwiKS5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbk5hbWUpLmdldCh0aGlzLmlkKTtcbiAgICAgICAgY29uc3QgZGVmaW5lZEF0dHJpYnV0ZXMgPSBnZXRNZXRhZGF0YSh0aGlzLCBcImRlZmluZWRBdHRyaWJ1dGVzXCIpO1xuICAgICAgICBkYkNvbGxlY3Rpb24gPSBkYkNvbGxlY3Rpb24gfHwge307XG4gICAgICAgIGlmIChkZWZpbmVkQXR0cmlidXRlcykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBhdHRyIG9mIGRlZmluZWRBdHRyaWJ1dGVzLmtleXMoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0ckF0dHIgPSBhdHRyLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0clZhbCA9IGdldFByb3h5VGFyZ2V0KHRoaXNbYXR0cl0pO1xuICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KGF0dHJWYWwpICYmIGRpZmZlcmVuY2UoYXR0clZhbCwgZGJDb2xsZWN0aW9uW3N0ckF0dHJdKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgKDxJbmRleFN0cnVjdHVyZT51bnNhdmVkQ2hhbmdlcylbc3RyQXR0cl0gPSB0aGlzW2F0dHJdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoYXR0clZhbCkgJiYgIWlzRXF1YWwoYXR0clZhbCwgZGJDb2xsZWN0aW9uW3N0ckF0dHJdKSkge1xuICAgICAgICAgICAgICAgICAgICAoPEluZGV4U3RydWN0dXJlPnVuc2F2ZWRDaGFuZ2VzKVtzdHJBdHRyXSA9IHRoaXNbYXR0cl07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1ByaW1pdGl2ZShhdHRyVmFsKSAmJiBhdHRyVmFsICE9PSBkYkNvbGxlY3Rpb25bc3RyQXR0cl0pIHtcbiAgICAgICAgICAgICAgICAgICAgKDxJbmRleFN0cnVjdHVyZT51bnNhdmVkQ2hhbmdlcylbc3RyQXR0cl0gPSB0aGlzW2F0dHJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuc2F2ZWRDaGFuZ2VzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmFsIHByb2NlZHVyZSB0byBoYW5kbGUgZ2VuZXJhbCB0eXBlIGVycm9ycyBvZiBhbGwgYXR0cmlidXRlcyBhbmRcbiAgICAgKiBwcm9wZXJ0aWVzIGZvciBjbGllbnQgc2lkZS5cbiAgICAgKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcGFyYW0ge0Vycm9yfSBlcnJvclxuICAgICAqIEBtZW1iZXJvZiBDbGllbnRNb2RlbFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvblR5cGVDaGVja0ZhaWwoZXJyb3I6IEVycm9yKSB7XG4gICAgICAgIGxvZ2dlci5lcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9XG5cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQkRPUm91dGVfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Sb3V0ZVwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBMb2dnZXJfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9Mb2dnZXJcIik7XG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyXzEuTG9nZ2VyKCk7XG5jbGFzcyBDbGllbnRSb3V0ZSBleHRlbmRzIEJET1JvdXRlXzEuQkRPUm91dGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmlzQ2xpZW50Um91dGUgPSB0cnVlO1xuICAgIH1cbiAgICBnZXQgcm91dGVyKCkge1xuICAgICAgICBjb25zdCByb3V0ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCByb3V0ZSBvZiB0aGlzLnJvdXRlcykge1xuICAgICAgICAgICAgcm91dGVzW2Ake3RoaXMucm91dGVyTmFtZVNwYWNlfS8ke3JvdXRlfWAucmVwbGFjZShcIi8vXCIsIFwiL1wiKV0gPSB0aGlzLmhhbmRsZUdldC5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3V0ZXM7XG4gICAgfVxuICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gc3VwZXIudGVtcGxhdGVQYXJhbXMocGFyYW1zKTtcbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlR2V0KHBhcmFtcykge1xuICAgICAgICBsb2dnZXIubG9nKHV0aWxfMS5tZXJnZShhd2FpdCB0aGlzLnRlbXBsYXRlUGFyYW1zRnJvbVNlcnZlcigpLCBhd2FpdCB0aGlzLnRlbXBsYXRlUGFyYW1zKHBhcmFtcykpKTtcbiAgICB9XG4gICAgYXN5bmMgdGVtcGxhdGVQYXJhbXNGcm9tU2VydmVyKCkge1xuICAgICAgICBsZXQgdXJsVG9Bc2tGb3IgPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgaWYgKCF1cmxUb0Fza0ZvcilcbiAgICAgICAgICAgIHVybFRvQXNrRm9yID0gYC9gO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnWC1HYW1lLUFzLUpTT04nOiAndHJ1ZScgfSk7XG4gICAgICAgIHJldHVybiAoYXdhaXQgZmV0Y2godXJsVG9Bc2tGb3IsIHsgaGVhZGVycyB9KSkuanNvbigpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ2xpZW50Um91dGUgPSBDbGllbnRSb3V0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyeHBaVzUwVW05MWRHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMk5zYVdWdWRDOTBjeTlzYVdJdlEyeHBaVzUwVW05MWRHVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTeG5SRUZCTmtNN1FVRkROME1zTUVOQlFYZERPMEZCUTNoRExDdERRVUUwUXp0QlFVVTFReXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEdWQlFVMHNSVUZCUlN4RFFVRkRPMEZCVlRWQ0xFMUJRV0VzVjBGQldTeFRRVUZSTEcxQ1FVRlJPMGxCUVhwRE96dFJRVkZ2UWl4clFrRkJZU3hIUVVGWkxFbEJRVWtzUTBGQlF6dEpRWE5FYkVRc1EwRkJRenRKUVRsRFJ5eEpRVUZYTEUxQlFVMDdVVUZEWWl4TlFVRk5MRTFCUVUwc1IwRkJjVU1zUlVGQlJTeERRVUZETzFGQlEzQkVMRXRCUVVzc1RVRkJUU3hMUVVGTExFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlR0WlFVTTNRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNaVUZCWlN4SlFVRkpMRXRCUVVzc1JVRkJSU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVNM1JqdFJRVU5FTEU5QlFVOHNUVUZCVFN4RFFVRkRPMGxCUTJ4Q0xFTkJRVU03U1VGWFV5eExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVhOQ08xRkJRMnBFTEU5QlFVOHNTMEZCU3l4RFFVRkRMR05CUVdNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU40UXl4RFFVRkRPMGxCVTFNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZ6UWp0UlFVTTFReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEZsQlFVc3NRMEZCUXl4TlFVRk5MRWxCUVVrc1EwRkJReXgzUWtGQmQwSXNSVUZCUlN4RlFVRkZMRTFCUVUwc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRhRWNzUTBGQlF6dEpRVlZQTEV0QlFVc3NRMEZCUXl4M1FrRkJkMEk3VVVGRGJFTXNTVUZCU1N4WFFVRlhMRWRCUVVjc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF6dFJRVU53UXl4SlFVRkpMRU5CUVVNc1YwRkJWenRaUVVGRkxGZEJRVmNzUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZEY0VNc1RVRkJUU3hQUVVGUExFZEJRVWNzU1VGQlNTeFBRVUZQTEVOQlFVTXNSVUZCUlN4blFrRkJaMElzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpGRUxFOUJRVThzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4WFFVRlhMRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1NVRkRNVVFzUTBGQlF6dERRVU5LTzBGQk9VUkVMR3REUVRoRVF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJET0NvbmZpZ01hbmFnZXJfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Db25maWdNYW5hZ2VyXCIpO1xuY2xhc3MgQ29uZmlnTWFuYWdlciBleHRlbmRzIEJET0NvbmZpZ01hbmFnZXJfMS5CRE9Db25maWdNYW5hZ2VyIHtcbiAgICBzZXQoX2NvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIGxvYWQoX2NvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIGdldENhY2hlKF9jb25maWcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgICBzZXRDYWNoZShfY29uZmlnLCBfdmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29uZmlnTWFuYWdlciA9IENvbmZpZ01hbmFnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMjl1Wm1sblRXRnVZV2RsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyeHBZaTlEYjI1bWFXZE5ZVzVoWjJWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc1owVkJRVFpFTzBGQldUZEVMRTFCUVdFc1lVRkJZeXhUUVVGUkxHMURRVUZuUWp0SlFWTjRReXhIUVVGSExFTkJRVU1zVDBGQlpUdFJRVU4wUWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExIbENRVUY1UWl4RFFVRkRMRU5CUVVNN1NVRkRMME1zUTBGQlF6dEpRVlZUTEVsQlFVa3NRMEZCUXl4UFFVRmxPMUZCUXpGQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU1zUTBGQlF6dEpRVU12UXl4RFFVRkRPMGxCVlZNc1VVRkJVU3hEUVVGRExFOUJRV1U3VVVGRE9VSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4RFFVRkRPMGxCUXk5RExFTkJRVU03U1VGWFV5eFJRVUZSTEVOQlFVTXNUMEZCWlN4RlFVRkZMRTFCUVZjN1VVRkRNME1zVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eERRVUZETzBsQlF5OURMRU5CUVVNN1EwRkRTanRCUVdwRVJDeHpRMEZwUkVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBCRE9EYXRhYmFzZU1hbmFnZXJfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9EYXRhYmFzZU1hbmFnZXJcIik7XG5jb25zdCBsb2NhbGZvcmFnZV8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImxvY2FsZm9yYWdlXCIpKTtcbmNsYXNzIERhdGFiYXNlTWFuYWdlciBleHRlbmRzIEJET0RhdGFiYXNlTWFuYWdlcl8xLkJET0RhdGFiYXNlbWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZGF0YWJhc2VzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghRGF0YWJhc2VNYW5hZ2VyLmluc3RhbmNlKVxuICAgICAgICAgICAgRGF0YWJhc2VNYW5hZ2VyLmluc3RhbmNlID0gbmV3IERhdGFiYXNlTWFuYWdlcigpO1xuICAgICAgICByZXR1cm4gRGF0YWJhc2VNYW5hZ2VyLmluc3RhbmNlO1xuICAgIH1cbiAgICBkYXRhYmFzZShuYW1lKSB7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGFiYXNlID0gbmFtZTtcbiAgICAgICAgaWYgKCF0aGlzLmRhdGFiYXNlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhYmFzZXMuc2V0KG5hbWUsIGxvY2FsZm9yYWdlXzEuZGVmYXVsdC5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBkcml2ZXI6IFtsb2NhbGZvcmFnZV8xLmRlZmF1bHQuSU5ERVhFRERCLCBsb2NhbGZvcmFnZV8xLmRlZmF1bHQuV0VCU1FMXVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRDb2xsZWN0aW9uO1xuICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50R3JhcGg7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRWaWV3O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY29sbGVjdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuY3VycmVudENvbGxlY3Rpb24gPSBgY29sbGVjdGlvbl8ke25hbWV9YDtcbiAgICAgICAgdGhpcy5nZXREYXRhYmFzZSgpLmNvbmZpZyh7IHN0b3JlTmFtZTogdGhpcy5jdXJyZW50Q29sbGVjdGlvbiB9KTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudEdyYXBoO1xuICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50VmlldztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHZpZXcobmFtZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gYHZpZXdfJHtuYW1lfWA7XG4gICAgICAgIHRoaXMuZ2V0RGF0YWJhc2UoKS5jb25maWcoeyBzdG9yZU5hbWU6IHRoaXMuY3VycmVudFZpZXcgfSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRDb2xsZWN0aW9uO1xuICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50R3JhcGg7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBncmFwaChuYW1lKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEdyYXBoID0gYGdyYXBoXyR7bmFtZX1gO1xuICAgICAgICB0aGlzLmdldERhdGFiYXNlKCkuY29uZmlnKHsgc3RvcmVOYW1lOiB0aGlzLmN1cnJlbnRHcmFwaCB9KTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudENvbGxlY3Rpb247XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRWaWV3O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0KGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGFiYXNlKCkuZ2V0SXRlbShpZCk7XG4gICAgfVxuICAgIGluc2VydChpZCwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5zZXRJdGVtKGlkLCB2YWx1ZSk7XG4gICAgfVxuICAgIHVwZGF0ZShpZCwgdmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZ2V0KGlkKSB8fCB7fTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlc3VsdCwgdmFsdWVzKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmluc2VydChpZCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVsZXRlKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGFiYXNlKCkucmVtb3ZlSXRlbShpZCk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhYmFzZSgpLmNsZWFyKCk7XG4gICAgfVxuICAgIGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5sZW5ndGgoKTtcbiAgICB9XG4gICAga2V5KGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGFiYXNlKCkua2V5KGluZGV4KTtcbiAgICB9XG4gICAga2V5cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5rZXlzKCk7XG4gICAgfVxuICAgIGl0ZXJhdGUoaXRlcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5pdGVyYXRlKGl0ZXJhdG9yKTtcbiAgICB9XG4gICAgZ2V0RGF0YWJhc2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50RGF0YWJhc2UpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBEYXRhYmFzZSBjaG9zZW5cIik7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFiYXNlcy5nZXQodGhpcy5jdXJyZW50RGF0YWJhc2UpO1xuICAgIH1cbn1cbmV4cG9ydHMuRGF0YWJhc2VNYW5hZ2VyID0gRGF0YWJhc2VNYW5hZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUkdGMFlXSmhjMlZOWVc1aFoyVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlqYkdsbGJuUXZkSE12YkdsaUwwUmhkR0ZpWVhObFRXRnVZV2RsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZEUVN4dlJVRkJhVVU3UVVGRGFrVXNjMFZCUVhORE8wRkJSWFJETEUxQlFXRXNaVUZCZDBZc1UwRkJVU3gxUTBGQmEwSTdTVUZ0UWpOSU8xRkJRMGtzUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZTU2l4alFVRlRMRWRCUVhkQ0xFbEJRVWtzUjBGQlJ5eEZRVUZyUWl4RFFVRkRPMGxCVTI1RkxFTkJRVU03U1VGUVRTeE5RVUZOTEVOQlFVTXNWMEZCVnp0UlFVTnlRaXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEZGQlFWRTdXVUZCUlN4bFFVRmxMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzWlVGQlpTeEZRVUZGTEVOQlFVTTdVVUZEYUVZc1QwRkJUeXhsUVVGbExFTkJRVU1zVVVGQlVTeERRVUZETzBsQlEzQkRMRU5CUVVNN1NVRk5UU3hSUVVGUkxFTkJRVU1zU1VGQlR6dFJRVU51UWl4SlFVRkpMRU5CUVVNc1pVRkJaU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU0xUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkRkRU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxIRkNRVUZYTEVOQlFVTXNZMEZCWXl4RFFVRkRPMmRDUVVOb1JDeEpRVUZKTEVWQlFVVXNTVUZCU1R0blFrRkRWaXhOUVVGTkxFVkJRVVVzUTBGQlF5eHhRa0ZCVnl4RFFVRkRMRk5CUVZNc1JVRkJSU3h4UWtGQlZ5eERRVUZETEUxQlFVMHNRMEZCUXp0aFFVTjBSQ3hEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5RTzFGQlEwUXNUMEZCVHl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTTdVVUZET1VJc1QwRkJUeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETzFGQlEzcENMRTlCUVU4c1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dFJRVU40UWl4UFFVRlBMRWxCUVVrc1EwRkJRenRKUVVOb1FpeERRVUZETzBsQlJVMHNWVUZCVlN4RFFVRkRMRWxCUVU4N1VVRkRja0lzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhIUVVGTkxHTkJRV01zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEYWtRc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRMnBGTEU5QlFVOHNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJRenRSUVVONlFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRlRUlzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEYUVJc1EwRkJRenRKUVVWTkxFbEJRVWtzUTBGQlF5eEpRVUZQTzFGQlEyWXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJUU3hSUVVGUkxFbEJRVWtzUlVGQlJTeERRVUZETzFGQlEzSkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNN1VVRkRPVUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRPMUZCUTNwQ0xFOUJRVThzU1VGQlNTeERRVUZETzBsQlEyaENMRU5CUVVNN1NVRkZUU3hMUVVGTExFTkJRVU1zU1VGQlR6dFJRVU5vUWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGTkxGTkJRVk1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEZGtNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTFSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJRenRSUVVNNVFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRlRUlzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEYUVJc1EwRkJRenRKUVVWTkxFZEJRVWNzUTBGQlF5eEZRVUZWTzFGQlEycENMRTlCUVU4c1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVNeFF5eERRVUZETzBsQlJVMHNUVUZCVFN4RFFVRkRMRVZCUVZVc1JVRkJSU3hMUVVGclF6dFJRVU40UkN4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMnBFTEVOQlFVTTdTVUZGVFN4TlFVRk5MRU5CUVVNc1JVRkJWU3hGUVVGRkxFMUJRVzFETzFGQlEzcEVMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1JVRkJSVHRaUVVONlF5eEpRVUZKTzJkQ1FVTkJMRTFCUVUwc1RVRkJUU3hIUVVGSExFMUJRVTBzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03WjBKQlEzaERMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMmRDUVVNNVFpeE5RVUZOTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzJkQ1FVTTVRaXhQUVVGUExFVkJRVVVzUTBGQlF6dGhRVU5pTzFsQlFVTXNUMEZCVHl4TFFVRkxMRVZCUVVVN1owSkJRMW9zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMkZCUTJwQ08xRkJRMHdzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEVUN4RFFVRkRPMGxCUlUwc1RVRkJUU3hEUVVGRExFVkJRVlU3VVVGRGNFSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zVlVGQlZTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpkRExFTkJRVU03U1VGRlRTeExRVUZMTzFGQlExSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdTVUZEZEVNc1EwRkJRenRKUVVWTkxFMUJRVTA3VVVGRFZDeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dEpRVU4yUXl4RFFVRkRPMGxCUlUwc1IwRkJSeXhEUVVGRExFdEJRV0U3VVVGRGNFSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNwRExFTkJRVU03U1VGRlRTeEpRVUZKTzFGQlExQXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdTVUZEY2tNc1EwRkJRenRKUVVWTkxFOUJRVThzUTBGQlF5eFJRVUU0Ump0UlFVTjZSeXhQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03U1VGRGFFUXNRMEZCUXp0SlFVVlBMRmRCUVZjN1VVRkRaaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVTdXVUZCUlN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRU5CUVVNN1VVRkRha1VzVDBGQlR5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZuUWl4RFFVRkRPMGxCUTI1RkxFTkJRVU03UTBGRlNqdEJRUzlIUkN3d1EwRXJSME1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJET0xvZ2dlcl8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET0xvZ2dlclwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5sZXQgTG9nZ2VyID0gY2xhc3MgTG9nZ2VyIGV4dGVuZHMgQkRPTG9nZ2VyXzEuQkRPTG9nZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICAgICAgc3VwZXIocGFyYW1zKTtcbiAgICAgICAgdGhpcy5sb2dMZXZlbENvbG9ycyA9IHtcbiAgICAgICAgICAgIGxvZzogJ2NvbG9yOiBncmF5OyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgICAgICAgICAgZGVidWc6ICdjb2xvcjogZ3JlZW47IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICBpbmZvOiAnY29sb3I6ICMwMDgwNkI7IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICB3YXJuOiAnY29sb3I6ICM4MDgwMDA7IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICBlcnJvcjogJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkOydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0SGVhZGVyKGxvZ0xldmVsLCBwcmludEVudiA9ICdjb25zb2xlJykge1xuICAgICAgICBjb25zdCBwcm9jSW5mbyA9IHRoaXMuZ2V0UHJvY0luZm8oKTtcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lKCk7XG4gICAgICAgIGNvbnN0IHVwcGVyTG9nTGV2ZWwgPSBsb2dMZXZlbC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2dQb2ludCA9IHRoaXMuZ2V0TG9nUG9pbnQoKTtcbiAgICAgICAgY29uc3QgcmVzZXRTdHlsZSA9ICdjb2xvcjogYmxhY2s7IGZvbnQtd2VpZ2h0OiBub3JtYWwnO1xuICAgICAgICBjb25zdCBtYWdlbnRhID0gJ2NvbG9yOiAjODAwMDgwOyBmb250LXdlaWdodDogbm9ybWFsJztcbiAgICAgICAgY29uc3QgY3lhbiA9ICdjb2xvcjogIzAwODA2QjsgZm9udC13ZWlnaHQ6IG5vcm1hbCc7XG4gICAgICAgIGlmIChwcmludEVudiA9PT0gJ2NvbnNvbGUnKSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRMb2dMZXZlbCA9IHRoaXMubG9nTGV2ZWxDb2xvcnNbbG9nTGV2ZWxdO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkTG9nUG9pbnQgPSBtYWdlbnRhO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkVGltZSA9IGN5YW47XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRQcm9jSW5mbyA9IG1hZ2VudGE7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIGAlY1slYyR7dXBwZXJMb2dMZXZlbH0gJWMtICVjJHtwcm9jSW5mb30gJWMtICVjJHtjdXJyZW50VGltZX0gJWNhdCAlYyR7bG9nUG9pbnR9JWNdYCxcbiAgICAgICAgICAgICAgICByZXNldFN0eWxlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZExvZ0xldmVsLFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkUHJvY0luZm8sXG4gICAgICAgICAgICAgICAgcmVzZXRTdHlsZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRUaW1lLFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkTG9nUG9pbnQsXG4gICAgICAgICAgICAgICAgcmVzZXRTdHlsZVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYFske3VwcGVyTG9nTGV2ZWx9IC0gJHtwcm9jSW5mb30gLSAke2N1cnJlbnRUaW1lfSAtICR7bG9nUG9pbnR9XWA7XG4gICAgfVxuICAgIHdyaXRlVG9GaWxlKF9sb2dMZXZlbCwgX21lc3NhZ2UpIHtcbiAgICB9XG59O1xuTG9nZ2VyID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgQ29uc3RQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIgJiYgQ29uc3RQYXJhbXMpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdF0pXG5dLCBMb2dnZXIpO1xuZXhwb3J0cy5Mb2dnZXIgPSBMb2dnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lURzluWjJWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOWpiR2xsYm5RdmRITXZiR2xpTDB4dloyZGxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUVzYTBSQlFUWkZPMEZCUXpkRkxITkVRVUYzUkR0QlFWVjRSQ3hKUVVGaExFMUJRVTBzUjBGQmJrSXNUVUZCWVN4TlFVRlBMRk5CUVZFc2NVSkJRVk03U1VGbGFrTXNXVUZCV1N4TlFVRTBRanRSUVVOd1F5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRlVWaXh0UWtGQll5eEhRVUZITzFsQlEzSkNMRWRCUVVjc1JVRkJSU3hwUTBGQmFVTTdXVUZEZEVNc1MwRkJTeXhGUVVGRkxHdERRVUZyUXp0WlFVTjZReXhKUVVGSkxFVkJRVVVzYjBOQlFXOURPMWxCUXpGRExFbEJRVWtzUlVGQlJTeHZRMEZCYjBNN1dVRkRNVU1zUzBGQlN5eEZRVUZGTEdkRFFVRm5RenRUUVVNeFF5eERRVUZETzBsQlNVWXNRMEZCUXp0SlFWZFRMRk5CUVZNc1EwRkJReXhSUVVGdFFpeEZRVUZGTEZkQlFUaENMRk5CUVZNN1VVRkROVVVzVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8xRkJRM0JETEUxQlFVMHNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dFJRVU4yUXl4TlFVRk5MR0ZCUVdFc1IwRkJSeXhSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdVVUZETjBNc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUTNCRExFMUJRVTBzVlVGQlZTeEhRVUZITEcxRFFVRnRReXhEUVVGRE8xRkJRM1pFTEUxQlFVMHNUMEZCVHl4SFFVRkhMSEZEUVVGeFF5eERRVUZETzFGQlEzUkVMRTFCUVUwc1NVRkJTU3hIUVVGSExIRkRRVUZ4UXl4RFFVRkRPMUZCUTI1RUxFbEJRVWtzVVVGQlVTeExRVUZMTEZOQlFWTXNSVUZCUlR0WlFVTjRRaXhOUVVGTkxHbENRVUZwUWl4SFFVRkhMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdXVUZEZUVRc1RVRkJUU3hwUWtGQmFVSXNSMEZCUnl4UFFVRlBMRU5CUVVNN1dVRkRiRU1zVFVGQlRTeGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUXpOQ0xFMUJRVTBzYVVKQlFXbENMRWRCUVVjc1QwRkJUeXhEUVVGRE8xbEJRMnhETEU5QlFVODdaMEpCUTBnc1VVRkJVU3hoUVVGaExGVkJRVlVzVVVGQlVTeFZRVUZWTEZkQlFWY3NWMEZCVnl4UlFVRlJMRXRCUVVzN1owSkJRM0JHTEZWQlFWVTdaMEpCUTFZc2FVSkJRV2xDTzJkQ1FVTnFRaXhWUVVGVk8yZENRVU5XTEdsQ1FVRnBRanRuUWtGRGFrSXNWVUZCVlR0blFrRkRWaXhoUVVGaE8yZENRVU5pTEZWQlFWVTdaMEpCUTFZc2FVSkJRV2xDTzJkQ1FVTnFRaXhWUVVGVk8yRkJRMklzUTBGQlF6dFRRVU5NTzFGQlEwUXNUMEZCVHl4SlFVRkpMR0ZCUVdFc1RVRkJUU3hSUVVGUkxFMUJRVTBzVjBGQlZ5eE5RVUZOTEZGQlFWRXNSMEZCUnl4RFFVRkRPMGxCUXpkRkxFTkJRVU03U1VGVlV5eFhRVUZYTEVOQlFVTXNVMEZCYjBJc1JVRkJSU3hSUVVGaE8wbEJSWHBFTEVOQlFVTTdRMEZEU2l4RFFVRkJPMEZCY0VWWkxFMUJRVTA3U1VGRWJFSXNORUpCUVdVc1JVRkJSVHRwUlVGblFrOHNWMEZCVnl4dlFrRkJXQ3hYUVVGWE8wZEJablpDTEUxQlFVMHNRMEZ2Uld4Q08wRkJjRVZaTEhkQ1FVRk5JbjA9IiwidmFyIG1hcCA9IHtcblx0XCIuL1Rlc3QudHNcIjogXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL21vZGVscy9UZXN0LnRzXCIsXG5cdFwiLi9UZXN0MS50c1wiOiBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvbW9kZWxzL1Rlc3QxLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvbW9kZWxzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLnRzJFwiOyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJET1Rlc3RfMSA9IHJlcXVpcmUoXCJ+YmRvL21vZGVscy9CRE9UZXN0XCIpO1xuY29uc3QgQ2xpZW50TW9kZWxfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9DbGllbnRNb2RlbFwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5sZXQgVGVzdCA9IGNsYXNzIFRlc3QgZXh0ZW5kcyBCRE9UZXN0XzEuQkRPVGVzdEZhY3RvcnkoQ2xpZW50TW9kZWxfMS5DbGllbnRNb2RlbCkge1xuICAgIGNvbnN0cnVjdG9yKF9wYXJhbXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgdGVzdCgpIHtcbiAgICB9XG59O1xuVGVzdCA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3Rvcih7IGNvbGxlY3Rpb25OYW1lOiBcIlRlc3RcIiB9KSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBDb25zdFBhcmFtcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBDb25zdFBhcmFtcykgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0XSlcbl0sIFRlc3QpO1xuZXhwb3J0cy5UZXN0ID0gVGVzdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHVnpkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDIxdlpHVnNjeTlVWlhOMExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFTeHBSRUZCY1VRN1FVRkRja1FzZVVSQlFYTkVPMEZCUTNSRUxITkVRVUYzUkR0QlFWVjRSQ3hKUVVGaExFbEJRVWtzUjBGQmFrSXNUVUZCWVN4SlFVRkxMRk5CUVZFc2QwSkJRV01zUTBGQlF5eDVRa0ZCVnl4RFFVRkRPMGxCUldwRUxGbEJRVmtzVDBGQk1rSTdVVUZEYmtNc1MwRkJTeXhGUVVGRkxFTkJRVU03U1VGRFdpeERRVUZETzBsQlQwMHNTVUZCU1R0SlFVVllMRU5CUVVNN1EwRkRTaXhEUVVGQk8wRkJaRmtzU1VGQlNUdEpRVVJvUWl3MFFrRkJaU3hEUVVGRExFVkJRVVVzWTBGQll5eEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRPMmxGUVVkc1FpeFhRVUZYTEc5Q1FVRllMRmRCUVZjN1IwRkdlRUlzU1VGQlNTeERRV05vUWp0QlFXUlpMRzlDUVVGSkluMD0iLCJcbmltcG9ydCB7IEJET1Rlc3QxRmFjdG9yeSB9IGZyb20gXCJ+YmRvL21vZGVscy9CRE9UZXN0MVwiO1xuaW1wb3J0IHsgVGVzdCB9IGZyb20gXCJ+Y2xpZW50L21vZGVscy9UZXN0XCI7XG5pbXBvcnQgeyBiYXNlQ29uc3RydWN0b3IgfSBmcm9tIFwifmJkby91dGlscy9kZWNvcmF0b3JzXCI7XG5cbi8qKlxuICogVGVzdFxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBUZXN0MVxuICogQGV4dGVuZHMge0JET1Rlc3QxRmFjdG9yeSgpfVxuICovXG5AYmFzZUNvbnN0cnVjdG9yKHsgY29sbGVjdGlvbk5hbWU6IFwiVGVzdDFcIiB9KVxuZXhwb3J0IGNsYXNzIFRlc3QxIGV4dGVuZHMgQkRPVGVzdDFGYWN0b3J5KFRlc3QpIHtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmFtcz86IENvbnN0UGFyYW1zPFRlc3QxPikge1xuICAgICAgICBzdXBlcihwYXJhbXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRlc3RcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBUZXN0MVxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyB3YWRkZSgpIHtcbiAgICAgICAgY29uc3QgdGVzdCA9IGF3YWl0IFRlc3QxLmdldEluc3RhbmNlQnlJRCh0aGlzLmlkKTtcbiAgICAgICAgaWYgKHRlc3QpIHJldHVybiB0ZXN0LmdldFVuc2F2ZWRDaGFuZ2VzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vQ29uZmlnLnRzXCI6IFwiLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvQ29uZmlnLnRzXCIsXG5cdFwiLi9HYW1lTG9iYnkudHNcIjogXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9HYW1lTG9iYnkudHNcIixcblx0XCIuL0hvbWUudHNcIjogXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9Ib21lLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLnRzJFwiOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ2xpZW50Um91dGVfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9DbGllbnRSb3V0ZVwiKTtcbmNvbnN0IEJET0NvbmZpZ18xID0gcmVxdWlyZShcIn5iZG8vcm91dGVzL0JET0NvbmZpZ1wiKTtcbmNsYXNzIENvbmZpZyBleHRlbmRzIEJET0NvbmZpZ18xLkJET0NvbmZpZ0ZhY3RvcnkoQ2xpZW50Um91dGVfMS5DbGllbnRSb3V0ZSkge1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ29uZmlnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTI5dVptbG5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlqYkdsbGJuUXZkSE12Y205MWRHVnpMME52Ym1acFp5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxIbEVRVUZ6UkR0QlFVTjBSQ3h4UkVGQmVVUTdRVUZYZWtRc1RVRkJjVUlzVFVGQlR5eFRRVUZSTERSQ1FVRm5RaXhEUVVGRExIbENRVUZYTEVOQlFVTTdRMEZCU1R0QlFVRnlSU3g1UWtGQmNVVWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBDbGllbnRSb3V0ZV8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0NsaWVudFJvdXRlXCIpO1xuY29uc3QgQkRPR2FtZUxvYmJ5XzEgPSByZXF1aXJlKFwifmJkby9yb3V0ZXMvQkRPR2FtZUxvYmJ5XCIpO1xuY2xhc3MgR2FtZUxvYmJ5IGV4dGVuZHMgQkRPR2FtZUxvYmJ5XzEuQkRPR2FtZUxvYmJ5RmFjdG9yeShDbGllbnRSb3V0ZV8xLkNsaWVudFJvdXRlKSB7XG4gICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZXN0OiAnbG9sJ1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEdhbWVMb2JieTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVIyRnRaVXh2WW1KNUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOWpiR2xsYm5RdmRITXZjbTkxZEdWekwwZGhiV1ZNYjJKaWVTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxIbEVRVUZ6UkR0QlFVTjBSQ3d5UkVGQkswUTdRVUZUTDBRc1RVRkJjVUlzVTBGQlZTeFRRVUZSTEd0RFFVRnRRaXhEUVVGRExIbENRVUZYTEVOQlFVTTdTVUZWZWtRc1MwRkJTeXhEUVVGRExHTkJRV003VVVGRE1VSXNUMEZCVHp0WlFVTklMRWxCUVVrc1JVRkJSU3hMUVVGTE8xTkJRMlFzUTBGQlF6dEpRVU5PTEVOQlFVTTdRMEZEU2p0QlFXWkVMRFJDUVdWREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENsaWVudFJvdXRlXzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQ2xpZW50Um91dGVcIik7XG5jb25zdCBCRE9Ib21lXzEgPSByZXF1aXJlKFwifmJkby9yb3V0ZXMvQkRPSG9tZVwiKTtcbmNsYXNzIEhvbWUgZXh0ZW5kcyBCRE9Ib21lXzEuQkRPSG9tZUZhY3RvcnkoQ2xpZW50Um91dGVfMS5DbGllbnRSb3V0ZSkge1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gSG9tZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVNHOXRaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDNKdmRYUmxjeTlJYjIxbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc2VVUkJRWE5FTzBGQlEzUkVMR2xFUVVGeFJEdEJRVk55UkN4TlFVRnhRaXhKUVVGTExGTkJRVkVzZDBKQlFXTXNRMEZCUXl4NVFrRkJWeXhEUVVGRE8wTkJRVWs3UVVGQmFrVXNkVUpCUVdsRkluMD0iLCJpbXBvcnQgeyBnZXRNZXRhZGF0YSwgZGVmaW5lTWV0YWRhdGEgfSBmcm9tIFwifmJkby91dGlscy9tZXRhZGF0YVwiO1xuLyoqXG4gKiBTdG9yZXMgYSB2YWx1ZSB3aXRoIGl0cyBrZXkgaW4gYSBzZXBhcmF0ZSBuYW1lc3BhY2UgZGVwZW5kaW5nIG9uIGEgcHJvcGVydHlcbiAqIG5hbWUgb2YgdGhlIGluc3RhbmNlIChuc1Byb3ApXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHsqfSBpbnN0YW5jZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSBuZXdWYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlOiBhbnksIGtleTogc3RyaW5nLCBuZXdWYWw6IGFueSwgbnNQcm9wOiBzdHJpbmcgPSBcImlkXCIpIHtcbiAgICBpZiAoa2V5ID09PSBcIipcIikgdGhyb3cgbmV3IEVycm9yKFwiKiBpcyBhIHNwZWNpYWwgY2hhcmFjdGVyIGFuZCBkb2VzIG5vdCBmb2xsb3cgdGhlIHByb3BlcnR5IGNvbnZlbnRpb25cIik7XG5cbiAgICAvLyBHZXQgYmFzaWMgaW5mb3JtYXRpb25cbiAgICBjb25zdCBuc1ByZWZpeCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihpbnN0YW5jZS5jb25zdHJ1Y3RvcikubmFtZTtcbiAgICBsZXQgbnNTdWZmaXggPSBnZXRNZXRhZGF0YShpbnN0YW5jZSwgXCJvbGRTdG9yYWdlTnNTdWZmaXhcIik7XG4gICAgbGV0IHN0b3JhZ2VWYWx1ZTogYW55O1xuXG4gICAgLy8gQ3JlYXRlIG5hbWVzcGFjZSBpZiBub3QgYXZhaWxhYmxlXG4gICAgaWYgKCFuc1N1ZmZpeCkgbnNTdWZmaXggPSBpbnN0YW5jZVtuc1Byb3BdO1xuICAgIGxldCBucyA9IGAke25zUHJlZml4fV8ke25zU3VmZml4fWA7XG4gICAgaWYgKGtleSA9PT0gbnNQcm9wIHx8IG5zU3VmZml4ICE9PSBpbnN0YW5jZVtuc1Byb3BdKSB7XG4gICAgICAgIC8vIFVwZGF0ZSBuYW1lc3BhY2UgaWYgY2hhbmdlZFxuICAgICAgICBuc1N1ZmZpeCA9IGtleSA9PT0gbnNQcm9wID8gbmV3VmFsIDogaW5zdGFuY2VbbnNQcm9wXTtcbiAgICAgICAgY29uc3QgbmV3TnMgPSBgJHtuc1ByZWZpeH1fJHtuc1N1ZmZpeH1gO1xuICAgICAgICBzdG9yYWdlVmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShucyk7XG4gICAgICAgIGlmIChzdG9yYWdlVmFsdWUpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5zKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5ld05zLCBzdG9yYWdlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIG5zID0gbmV3TnM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZ2V0IGN1cnJlbnQgdmFsdWVcbiAgICAgICAgc3RvcmFnZVZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obnMpO1xuICAgICAgICBpZiAoc3RvcmFnZVZhbHVlKSB7XG4gICAgICAgICAgICBzdG9yYWdlVmFsdWUgPSBKU09OLnBhcnNlKHN0b3JhZ2VWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSBzdG9yYWdlVmFsdWUgPSB7fTtcbiAgICAgICAgLy8gRGVsZXRlIHZhbHVlIGlmIHVuZGVmaW5lZCBlbHNlIHVwZGF0ZVxuICAgICAgICBpZiAobmV3VmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdG9yYWdlVmFsdWVba2V5XTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LmtleXMoc3RvcmFnZVZhbHVlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShucyk7XG4gICAgICAgICAgICB9IGVsc2UgbG9jYWxTdG9yYWdlLnNldEl0ZW0obnMsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VWYWx1ZSkpO1xuICAgICAgICB9IGVsc2UgbG9jYWxTdG9yYWdlLnNldEl0ZW0obnMsIEpTT04uc3RyaW5naWZ5KE9iamVjdC5hc3NpZ24oc3RvcmFnZVZhbHVlLCB7IFtrZXldOiBuZXdWYWwgfSkpKTtcbiAgICB9XG4gICAgLy8gVHJhY2UgbmFtZXNwYWNlIHN1ZmZpeFxuICAgIGRlZmluZU1ldGFkYXRhKGluc3RhbmNlLCBcIm9sZFN0b3JhZ2VOc1N1ZmZpeFwiLCBuc1N1ZmZpeCk7XG59XG5cbi8qKlxuICogR2V0cyBhIHZhbHVlIG9mIHRoZSBrZXkgZGVwZW5kaW5nIG9uIHRoZSBuYW1lc3BhY2Ugc3VmZml4IHdoaWNoIHdhcyB1c2VkXG4gKiBiZWZvcmUgaW4gYSBzdG9yZSBhY3Rpb24gb3IgZGVwZW5kaW5nIG9uIHRoZSBuc1Byb3AuXG4gKlxuICogWW91IGFsc28gY2FuIGZvcmNlIGEgbmFtZXNwYWNlIHdoaWNoIHdpbGwgYmUgdXNlZCBpbnN0ZWFkIG9mIGFsbCBwcmV2aW91c1xuICogZGV0ZWN0ZWQgbmFtZXNwYWNlcy5cbiAqXG4gKiBpZiBrZXkgaXMgYSAqLCBhbGwga2V5cyBpbiB0aGlzIG5hbWVzcGFjZSB3aWxsIGJlIHJldHVybmVkIGluIGFuIG9iamVjdC5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0geyp9IGluc3RhbmNlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ30gW25zUHJvcD1cImlkXCJdXG4gKiBAcGFyYW0ge3N0cmluZ30gW2ZvcmNlTlNdXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmFtZXNwYWNlZFN0b3JhZ2UoaW5zdGFuY2U6IGFueSwga2V5OiBzdHJpbmcsIG5zUHJvcDogc3RyaW5nID0gXCJpZFwiLCBmb3JjZU5TPzogc3RyaW5nKSB7XG4gICAgY29uc3QgbnNQcmVmaXggPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoaW5zdGFuY2UuY29uc3RydWN0b3IpLm5hbWU7XG4gICAgbGV0IG5zU3VmZml4ID0gZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwib2xkU3RvcmFnZU5zU3VmZml4XCIpO1xuICAgIGlmIChuc1N1ZmZpeCAhPT0gaW5zdGFuY2VbbnNQcm9wXSkgbnNTdWZmaXggPSBpbnN0YW5jZVtuc1Byb3BdO1xuICAgIGlmIChmb3JjZU5TKSBuc1N1ZmZpeCA9IGZvcmNlTlM7XG4gICAgbGV0IHN0b3JhZ2VWYWx1ZTogYW55ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7bnNQcmVmaXh9XyR7bnNTdWZmaXh9YCk7XG4gICAgaWYgKHN0b3JhZ2VWYWx1ZSkgc3RvcmFnZVZhbHVlID0gSlNPTi5wYXJzZShzdG9yYWdlVmFsdWUpO1xuICAgIGlmIChzdG9yYWdlVmFsdWUgJiYga2V5ID09PSBcIipcIikgcmV0dXJuIHN0b3JhZ2VWYWx1ZTtcbiAgICBpZiAoc3RvcmFnZVZhbHVlICYmIGtleSBpbiBzdG9yYWdlVmFsdWUpIHJldHVybiBzdG9yYWdlVmFsdWVba2V5XTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIERlbGV0ZXMgYSBrZXkgZnJvbSBuYW1lc3BhY2VkIHN0b3JhZ2UgZGVwZW5kaW5nIG9uIGEgcHJvcGVydHlcbiAqIG5hbWUgb2YgdGhlIGluc3RhbmNlLiBJZiBrZXkgaXMgXCIqXCIgdGhlIG5hbWVzcGFjZWQgc3RvcmFnZSB3aWxsIGJlIGNsZWFyZWQuXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHsqfSBpbnN0YW5jZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHBhcmFtIHtzdHJpbmd9IFtuc1Byb3A9XCJpZFwiXVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlOiBhbnksIGtleTogc3RyaW5nLCBuc1Byb3A6IHN0cmluZyA9IFwiaWRcIikge1xuICAgIGlmIChrZXkgPT09IFwiKlwiKSB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBnZXROYW1lc3BhY2VkU3RvcmFnZShpbnN0YW5jZSwga2V5LCBuc1Byb3ApO1xuICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gc3RvcmFnZSkge1xuICAgICAgICAgICAgaWYgKHN0b3JhZ2UuaGFzT3duUHJvcGVydHkocHJvcCkpIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBwcm9wLCB1bmRlZmluZWQsIG5zUHJvcCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Ugc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2UoaW5zdGFuY2UsIGtleSwgdW5kZWZpbmVkLCBuc1Byb3ApO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBQcm9wZXJ0eV8xID0gcmVxdWlyZShcIn5iZG8vbGliL1Byb3BlcnR5XCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuY29uc3QgTW9kaWZpY2F0aW9uXzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kaWZpY2F0aW9uXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IEVycm9yc18xID0gcmVxdWlyZShcIn5iZG8vbGliL0Vycm9yc1wiKTtcbmNvbnN0IE1vZGVsUmVnaXN0cnlfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Nb2RlbFJlZ2lzdHJ5XCIpO1xuY2xhc3MgQXR0cmlidXRlIGV4dGVuZHMgUHJvcGVydHlfMS5Qcm9wZXJ0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSwgcGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCwgcHJvcGVydHksIHBhcmFtcyk7XG4gICAgICAgIHRoaXMuaW5ET01Jbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmF1dG9TYXZlQWxsb3dlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkRG9TZXRWYWx1ZSh2YWx1ZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBvbGRJRDtcbiAgICAgICAgaWYgKHRoaXMub2JqZWN0LmlzQkRPTW9kZWwgJiYgdGhpcy5wcm9wZXJ0eSA9PT0gXCJpZFwiKVxuICAgICAgICAgICAgb2xkSUQgPSB0aGlzLm93blZhbHVlO1xuICAgICAgICB0aGlzLmRvU2V0VmFsdWUodmFsdWUsIHRydWUsIHRydWUpO1xuICAgICAgICBpZiAob2xkSUQpXG4gICAgICAgICAgICBNb2RlbFJlZ2lzdHJ5XzEuTW9kZWxSZWdpc3RyeS5nZXRJbnN0YW5jZSgpLnVwZGF0ZUlEKG9sZElELCB0aGlzLm9iamVjdCk7XG4gICAgICAgIHRoaXMucmVmbGVjdFRvRE9NQXR0cmlidXRlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5kb0F1dG9TYXZlKCk7XG4gICAgfVxuICAgIHByb3h5SGFuZGxlcihfcGF0aCwgX2NoYW5nZWRWYWwsIF9wcmV2VmFsKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuZG9TZXRWYWx1ZSh1dGlsXzEuZ2V0UHJveHlUYXJnZXQodmFsdWUpLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5yZWZsZWN0VG9ET01BdHRyaWJ1dGUodmFsdWUpO1xuICAgICAgICB0aGlzLmRvQXV0b1NhdmUoKTtcbiAgICB9XG4gICAgZ2V0VW5zYXZlZENoYW5nZSgpIHsgfVxuICAgIHNob3VsZERvU2V0VmFsdWUodmFsdWUsIHNraXBHdWFyZCA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChlbnZpcm9ubWVudF8xLmlzQnJvd3NlcigpICYmICF0aGlzLm9iamVjdC5pc0JET01vZGVsICYmICh0aGlzLm9iamVjdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgY29uc3QgY29uc3RydWN0ZWRUeXBlID0gdXRpbF8xLmNvbnN0cnVjdFR5cGVPZkhUTUxBdHRyaWJ1dGUodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmluRE9NSW5pdGlhbGl6ZWQgJiYgdGhpcy5vYmplY3QuZ2V0QXR0cmlidXRlKHRoaXMucHJvcGVydHkpICYmIHZhbHVlICE9PSBjb25zdHJ1Y3RlZFR5cGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKGNvbnN0cnVjdGVkVHlwZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhKHZhbHVlID09PSB0aGlzLm93blZhbHVlIHx8ICFza2lwR3VhcmQgJiYgIXRoaXMuZGlzYWJsZVR5cGVHdWFyZCAmJiAhdGhpcy50eXBlR3VhcmQodmFsdWUpKTtcbiAgICB9XG4gICAgcmVmbGVjdFRvRE9NQXR0cmlidXRlKHZhbHVlKSB7XG4gICAgICAgIGlmICghZW52aXJvbm1lbnRfMS5pc0Jyb3dzZXIoKSB8fCAhKHRoaXMub2JqZWN0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSB0aGlzLnByb3BlcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IHRoaXMub2JqZWN0LmdldEF0dHJpYnV0ZShzdHJpbmdLZXkpO1xuICAgICAgICBsZXQgc2V0QXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgbGV0IHBUYXJnZXQ7XG4gICAgICAgIGxldCB2YWx1ZVRvUGFzcyA9IHZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNb2RpZmljYXRpb25fMS5Nb2RpZmljYXRpb24pXG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgaWYgKCF0aGlzLmluRE9NSW5pdGlhbGl6ZWQgJiYgYXR0clZhbHVlKSB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBwVGFyZ2V0ID0gdXRpbF8xLmdldFByb3h5VGFyZ2V0KHZhbHVlVG9QYXNzKTtcbiAgICAgICAgdGhpcy5pbkRPTUluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHNldEF0dHJpYnV0ZSAmJiBhdHRyVmFsdWUgIT09IHBUYXJnZXQgJiYgYXR0clZhbHVlICE9PSBKU09OLnN0cmluZ2lmeShwVGFyZ2V0KS5yZXBsYWNlKC9cXFwiL2csIFwiJ1wiKSkge1xuICAgICAgICAgICAgdGhpcy5vYmplY3Quc2V0QXR0cmlidXRlKHN0cmluZ0tleSwgcFRhcmdldCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRvQXV0b1NhdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9TYXZlICYmIHRoaXMuZG9Ob3RQZXJzaXN0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3JzXzEuQ29uZmlndXJhdGlvbkVycm9yKFwiWW91IGhhdmUgdHVybmVkIG9uIGF1dG9zYXZlIGJ1dCBhdCB0aGUgc2FtZSB0aW1lIGl0IGlzIGZvcmJpZGRlbiB0byBwZXJzaXN0IHRoZSB2YWx1ZSFcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmF1dG9TYXZlQWxsb3dlZCkge1xuICAgICAgICAgICAgdGhpcy5hdXRvU2F2ZUFsbG93ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5hdXRvU2F2ZSB8fCAhdXRpbF8xLmlzRnVuY3Rpb24odGhpcy5vYmplY3Quc2F2ZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5hdXRvU2F2ZSA9PT0gXCJib29sZWFuXCIpXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5zYXZlKHRoaXMucHJvcGVydHkpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYXV0b1NhdmUgPT09IFwibnVtYmVyXCIgJiYgIXRoaXMuYXV0b1NhdmVUaW1lb3V0KSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9TYXZlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0LnNhdmUodGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuYXV0b1NhdmVUaW1lb3V0O1xuICAgICAgICAgICAgfSwgTWF0aC5hYnModGhpcy5hdXRvU2F2ZSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5BdHRyaWJ1dGUgPSBBdHRyaWJ1dGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRWFIwY21saWRYUmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlzYVdJdlFYUjBjbWxpZFhSbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc1owUkJRVGhFTzBGQlJUbEVMSGRFUVVGdFJEdEJRVU51UkN4M1JFRkJjVVE3UVVGRGNrUXNNRU5CUVRKR08wRkJSVE5HTERSRFFVRnhSRHRCUVVOeVJDd3dSRUZCZFVRN1FVRjNSWFpFTEUxQlFXRXNVMEZCTWtRc1UwRkJVU3h0UWtGQlVUdEpRWEZGY0VZc1dVRkJXU3hOUVVGVExFVkJRVVVzVVVGQlZ5eEZRVUZGTEUxQlFXbEVPMUZCUTJwR0xFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNVVUZCVVN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJja0kxUWl4eFFrRkJaMElzUjBGQldTeExRVUZMTEVOQlFVTTdVVUZyUW14RExHOUNRVUZsTEVkQlFWa3NTMEZCU3l4RFFVRkRPMGxCU1hwRExFTkJRVU03U1VGUlRTeFJRVUZSTEVOQlFVTXNTMEZCWjBNN1VVRkROVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZCUlN4UFFVRlBPMUZCUXpGRExFbEJRVWtzUzBGQlN5eERRVUZETzFGQlExWXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4TFFVRkxMRWxCUVVrN1dVRkJSU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXp0UlFVTTFSU3hKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRGJrTXNTVUZCU1N4TFFVRkxPMWxCUVVVc05rSkJRV0VzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTndSU3hKUVVGSkxFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRGJFTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8wbEJRM1JDTEVOQlFVTTdTVUZSVFN4WlFVRlpMRU5CUVVNc1MwRkJZeXhGUVVGRkxGZEJRV3RDTEVWQlFVVXNVVUZCWlR0UlFVTnVSU3hOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1NVRkJTVHRaUVVGRkxFOUJRVTg3VVVGRGJFUXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXh4UWtGQll5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU51UkN4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRiRU1zU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMGxCUTNSQ0xFTkJRVU03U1VGVFRTeG5Ra0ZCWjBJc1MwRkJTeXhEUVVGRE8wbEJWWFJDTEdkQ1FVRm5RaXhEUVVGRExFdEJRV2RETEVWQlFVVXNXVUZCY1VJc1MwRkJTenRSUVVOb1JpeEpRVUZKTEhWQ1FVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzV1VGQldTeFhRVUZYTEVOQlFVTXNSVUZCUlR0WlFVTm9SaXhOUVVGTkxHVkJRV1VzUjBGQlJ5eHRRMEZCTkVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRaUVVOcVJpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1pVRkJaU3hGUVVGRk8yZENRVU5vUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETzJkQ1FVTXZRaXhQUVVGUExFdEJRVXNzUTBGQlF6dGhRVU5vUWp0VFFVTktPMUZCUTBRc1QwRkJUeXhEUVVGRExFTkJRVU1zUzBGQlN5eExRVUZMTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1EwRkJReXhUUVVGVExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVFY3NRMEZCUXp0SlFXTk5MSEZDUVVGeFFpeERRVUZETEV0QlFXZERPMUZCUTNwRUxFbEJRVWtzUTBGQlF5eDFRa0ZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEZsQlFWa3NWMEZCVnl4RFFVRkRPMWxCUVVVc1QwRkJUenRSUVVOc1JTeE5RVUZOTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlF6TkRMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRM1JFTEVsQlFVa3NXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVONFFpeEpRVUZKTEU5QlFVOHNRMEZCUXp0UlFVVmFMRWxCUVVrc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU40UWl4SlFVRkpMRXRCUVVzc1dVRkJXU3d5UWtGQldUdFpRVUZGTEZkQlFWY3NSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGRmFrVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNTVUZCU1N4VFFVRlRMRVZCUVVVN1dVRkRja01zV1VGQldTeEhRVUZITEV0QlFVc3NRMEZCUXp0VFFVTjRRanM3V1VGQlRTeFBRVUZQTEVkQlFVY3NjVUpCUVdNc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFJRVU0zUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUnpkQ0xFbEJRVWtzV1VGQldTeEpRVUZKTEZOQlFWTXNTMEZCU3l4UFFVRlBMRWxCUVVrc1UwRkJVeXhMUVVGTExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTTVSaXhKUVVGSkxFTkJRVU1zVFVGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1QwRkJUeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFOQlF6bEVPMGxCUTB3c1EwRkJRenRKUVZWUExGVkJRVlU3VVVGRFpDeEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJUdFpRVU53UXl4TlFVRk5MRWxCUVVrc01rSkJRV3RDTEVOQlFVTXNkMFpCUVhkR0xFTkJRVU1zUTBGQlF6dFRRVU14U0R0UlFVTkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTzFsQlEzWkNMRWxCUVVrc1EwRkJReXhsUVVGbExFZEJRVWNzU1VGQlNTeERRVUZETzFsQlF6VkNMRTlCUVU4N1UwRkRWanRSUVVORUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4SlFVRkpMRU5CUVVNc2FVSkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJRenRaUVVGRkxFOUJRVTg3VVVGRE5VUXNTVUZCU1N4UFFVRlBMRWxCUVVrc1EwRkJReXhSUVVGUkxFdEJRVXNzVTBGQlV6dFpRVUZGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTjRSU3hKUVVGSkxFOUJRVThzU1VGQlNTeERRVUZETEZGQlFWRXNTMEZCU3l4UlFVRlJMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTzFsQlF6VkVMRWxCUVVrc1EwRkJReXhsUVVGbExFZEJRVWNzVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlR0blFrRkRia01zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzJkQ1FVTm9ReXhQUVVGUExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTTdXVUZEYUVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03VTBGREwwSTdTVUZEVEN4RFFVRkRPME5CUTBvN1FVRTNURVFzT0VKQk5reERJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgbXNfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJtc1wiKSk7XG5jb25zdCBCRE9NYXBDYWNoZV8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET01hcENhY2hlXCIpO1xuY2xhc3MgQkRPQ29uZmlnTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgQkRPTWFwQ2FjaGVfMS5CRE9NYXBDYWNoZSgpO1xuICAgIH1cbiAgICBhc3luYyBnZXQoY29uZmlnKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGF3YWl0IHRoaXMuZ2V0Q2FjaGUoY29uZmlnKTtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBhd2FpdCB0aGlzLmxvYWQoY29uZmlnKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0Q2FjaGUoY29uZmlnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XG4gICAgfVxuICAgIGdldENhY2hlKGNvbmZpZykge1xuICAgICAgICBjb25zdCBmcm9tTG9jYWxDYWNoZSA9IHRoaXMuY2FjaGUuZ2V0KGNvbmZpZyk7XG4gICAgICAgIGlmIChmcm9tTG9jYWxDYWNoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21Mb2NhbENhY2hlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBhc3luYyBzZXRDYWNoZShjb25maWcsIHZhbHVlKSB7XG4gICAgICAgIGxldCBjb25mID0gdGhpcy5jYWNoZS5nZXQoJ19fQ29uZmlnTWFuYWdlckNhY2hlVGltZW91dF9fJyk7XG4gICAgICAgIGlmICghdGhpcy5jYWNoZS5oYXMoJ19fQ29uZmlnTWFuYWdlckNhY2hlVGltZW91dF9fJykpIHtcbiAgICAgICAgICAgIGNvbmYgPSAoYXdhaXQgdGhpcy5sb2FkKCdjb25maWcnKSkudGltZW91dHMuY29uZmlnQ2FjaGU7XG4gICAgICAgICAgICBpZiAoY29uZilcbiAgICAgICAgICAgICAgICBjb25mID0gbXNfMS5kZWZhdWx0KGNvbmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5zZXQoJ19fQ29uZmlnTWFuYWdlckNhY2hlVGltZW91dF9fJywgY29uZik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZS5zZXQoY29uZmlnLCB2YWx1ZSwgY29uZik7XG4gICAgfVxufVxuZXhwb3J0cy5CRE9Db25maWdNYW5hZ2VyID0gQkRPQ29uZmlnTWFuYWdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBRMjl1Wm1sblRXRnVZV2RsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmJHbGlMMEpFVDBOdmJtWnBaMDFoYm1GblpYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNiMFJCUVc5Q08wRkJRM0JDTEhORVFVRnRSRHRCUVcxQ2JrUXNUVUZCYzBJc1owSkJRV2RDTzBsQlFYUkRPMUZCVldNc1ZVRkJTeXhIUVVFMlFpeEpRVUZKTEhsQ1FVRlhMRVZCUVVVc1EwRkJRenRKUVhkRmJFVXNRMEZCUXp0SlFTOUVWU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFXTTdVVUZETTBJc1NVRkJTU3hMUVVGTExFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRM2hETEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1dVRkRVaXhMUVVGTExFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xbEJRMmhETEUxQlFVMHNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdVMEZEZEVNN1VVRkRSQ3hQUVVGUExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRiRU1zUTBGQlF6dEpRVGhDVXl4UlFVRlJMRU5CUVVNc1RVRkJZenRSUVVNM1FpeE5RVUZOTEdOQlFXTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTTVReXhKUVVGSkxHTkJRV01zUlVGQlJUdFpRVU5vUWl4UFFVRlBMR05CUVdNc1EwRkJRenRUUVVONlFqdFJRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTJoQ0xFTkJRVU03U1VGWFV5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVdNc1JVRkJSU3hMUVVGVk8xRkJReTlETEVsQlFVa3NTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEN0Q1FVRXJRaXhEUVVGRExFTkJRVU03VVVGRE0wUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEN0Q1FVRXJRaXhEUVVGRExFVkJRVVU3V1VGRGJFUXNTVUZCU1N4SFFVRkhMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF6dFpRVU40UkN4SlFVRkpMRWxCUVVrN1owSkJRVVVzU1VGQlNTeEhRVUZITEZsQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVNeFFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXdyUWtGQkswSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVONlJEdFJRVU5FTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRlRU1zUTBGQlF6dERRVU5LTzBGQmJFWkVMRFJEUVd0R1F5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEJET0RhdGFiYXNlbWFuYWdlciB7XG59XG5leHBvcnRzLkJET0RhdGFiYXNlbWFuYWdlciA9IEJET0RhdGFiYXNlbWFuYWdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBSR0YwWVdKaGMyVk5ZVzVoWjJWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXNhV0l2UWtSUFJHRjBZV0poYzJWTllXNWhaMlZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRMEVzVFVGQmMwSXNhMEpCUVd0Q08wTkJSWFpETzBGQlJrUXNaMFJCUlVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBtb21lbnRfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJtb21lbnRcIikpO1xuY29uc3QgcGF0aF8xID0gcmVxdWlyZShcInBhdGhcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY2xhc3MgQkRPTG9nZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihfcGFyYW1zKSB7XG4gICAgICAgIHRoaXMubG9nRmlsZSA9ICdkZWZhdWx0LmxvZyc7XG4gICAgICAgIHRoaXMucHJldmVudENvbnNvbGVQcmludCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByZXZlbnRGaWxlUHJpbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2dMZXZlbCA9ICdkZWJ1Zyc7XG4gICAgICAgIHRoaXMucHJvdG90eXBlTmFtZXMgPSB1dGlsXzEuZ2V0UHJvdG90eXBlTmFtZXNSZWN1cnNpdmUodGhpcyk7XG4gICAgfVxuICAgIGxvZyhtZXNzYWdlLCBsb2dsZXZlbCA9ICdsb2cnLCAuLi5hcmdzKSB7XG4gICAgICAgIGlmIChsb2dsZXZlbCAhPT0gJ2xvZycgJiYgIXRoaXMuaXNBbGxvd2VkKGxvZ2xldmVsKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLnByZXZlbnRDb25zb2xlUHJpbnQgfHwgWydsb2cnLCAnZXJyb3InXS5pbmNsdWRlcyhsb2dsZXZlbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0SGVhZGVyKGxvZ2xldmVsKTtcbiAgICAgICAgICAgIGxldCBuZXdBcmdzID0gW107XG4gICAgICAgICAgICBpZiAoaGVhZGVyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBuZXdBcmdzID0gbmV3QXJncy5jb25jYXQoaGVhZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBuZXdBcmdzLnB1c2goaGVhZGVyKTtcbiAgICAgICAgICAgIG5ld0FyZ3MucHVzaChtZXNzYWdlKTtcbiAgICAgICAgICAgIG5ld0FyZ3MgPSBuZXdBcmdzLmNvbmNhdChhcmdzKTtcbiAgICAgICAgICAgIGNvbnNvbGVbbG9nbGV2ZWxdLmFwcGx5KHRoaXMsIG5ld0FyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGFyZ3MpO1xuICAgICAgICBpZiAoIXRoaXMucHJldmVudEZpbGVQcmludCB8fCBsb2dsZXZlbCA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy53cml0ZVRvRmlsZShsb2dsZXZlbCwgbWVzc2FnZSArIHBhcnNlZFN0cmluZy5zdWJzdHIoMSwgcGFyc2VkU3RyaW5nLmxlbmd0aCAtIDIpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWJ1ZyhtZXNzYWdlLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGFwcGx5ID0gW21lc3NhZ2UsICdkZWJ1ZyddLmNvbmNhdChhcmdzKTtcbiAgICAgICAgdGhpcy5sb2cuYXBwbHkodGhpcywgYXBwbHkpO1xuICAgIH1cbiAgICBpbmZvKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgYXBwbHkgPSBbbWVzc2FnZSwgJ2luZm8nXS5jb25jYXQoYXJncyk7XG4gICAgICAgIHRoaXMubG9nLmFwcGx5KHRoaXMsIGFwcGx5KTtcbiAgICB9XG4gICAgd2FybihtZXNzYWdlLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGFwcGx5ID0gW21lc3NhZ2UsICd3YXJuJ10uY29uY2F0KGFyZ3MpO1xuICAgICAgICB0aGlzLmxvZy5hcHBseSh0aGlzLCBhcHBseSk7XG4gICAgfVxuICAgIGVycm9yKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgYXBwbHkgPSBbbWVzc2FnZSwgJ2Vycm9yJ10uY29uY2F0KGFyZ3MpO1xuICAgICAgICB0aGlzLmxvZy5hcHBseSh0aGlzLCBhcHBseSk7XG4gICAgfVxuICAgIGdldFByb2NJbmZvKCkge1xuICAgICAgICByZXR1cm4gYCR7Z2xvYmFsLnByb2Nlc3MuZW52Lm5hbWUgfHwgJyd9ICR7Z2xvYmFsLnByb2Nlc3MuZW52Lmhvc3RuYW1lIHx8ICcnfSAke2dsb2JhbC5wcm9jZXNzLnBpZH1gO1xuICAgIH1cbiAgICBpc0FsbG93ZWQobG9nTGV2ZWwpIHtcbiAgICAgICAgY29uc3QgbG9nTGV2ZWxPcmRlciA9IFsnbG9nJywgJ2RlYnVnJywgJ2luZm8nLCAnd2FybicsICdlcnJvciddO1xuICAgICAgICByZXR1cm4gbG9nTGV2ZWxPcmRlci5pbmRleE9mKGxvZ0xldmVsKSA+PSBsb2dMZXZlbE9yZGVyLmluZGV4T2YodGhpcy5sb2dMZXZlbCk7XG4gICAgfVxuICAgIGN1cnJlbnRUaW1lKCkge1xuICAgICAgICByZXR1cm4gbW9tZW50XzEuZGVmYXVsdCgpLmZvcm1hdCgnREQuTU0uWVlZWSBISDptbTpzcycpO1xuICAgIH1cbiAgICBnZXRMb2dQb2ludCgpIHtcbiAgICAgICAgY29uc3Qgc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGxldCBjYWxscG9pbnQ7XG4gICAgICAgIGZvciAoY29uc3QgW2luZGV4LCBzdGFja3BhcnRdIG9mIHN0YWNrLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgaWYgKCFpbmRleClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghdXRpbF8xLmluY2x1ZGVzTWVtYmVyT2ZMaXN0KHN0YWNrcGFydCwgdGhpcy5wcm90b3R5cGVOYW1lcywgJy50cycpKSB7XG4gICAgICAgICAgICAgICAgY2FsbHBvaW50ID0gc3RhY2twYXJ0LnNwbGl0KHBhdGhfMS5zZXApLnBvcCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxscG9pbnQpIHtcbiAgICAgICAgICAgIGNhbGxwb2ludCA9IGNhbGxwb2ludC5yZXBsYWNlKCcpJywgJycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsbHBvaW50ID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbGxwb2ludDtcbiAgICB9XG59XG5leHBvcnRzLkJET0xvZ2dlciA9IEJET0xvZ2dlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBURzluWjJWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXNhV0l2UWtSUFRHOW5aMlZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVU5CTERSRVFVRTBRanRCUVVNMVFpd3JRa0ZCTWtJN1FVRkRNMElzTUVOQlFXMUdPMEZCVjI1R0xFMUJRWE5DTEZOQlFWTTdTVUZyUkROQ0xGbEJRVmtzVDBGQlowTTdVVUV6UTNKRExGbEJRVThzUjBGQldTeGhRVUZoTEVOQlFVTTdVVUZSYWtNc2QwSkJRVzFDTEVkQlFXRXNTMEZCU3l4RFFVRkRPMUZCVVhSRExIRkNRVUZuUWl4SFFVRmhMRXRCUVVzc1EwRkJRenRSUVdWdVF5eGhRVUZSTEVkQlFXVXNUMEZCVHl4RFFVRkRPMUZCVlc1Q0xHMUNRVUZqTEVkQlFXRXNhVU5CUVRCQ0xFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZGTDBJc1EwRkJRenRKUVZjeFF5eEhRVUZITEVOQlFVTXNUMEZCV1N4RlFVRkZMRmRCUVhOQ0xFdEJRVXNzUlVGQlJTeEhRVUZITEVsQlFWYzdVVUZEYUVVc1NVRkJTU3hSUVVGUkxFdEJRVXNzUzBGQlN5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU03V1VGQlJTeFBRVUZQTzFGQlF6VkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRk8xbEJRMnhGTEUxQlFVMHNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdXVUZEZUVNc1NVRkJTU3hQUVVGUExFZEJRV0VzUlVGQlJTeERRVUZETzFsQlF6TkNMRWxCUVVrc1RVRkJUU3haUVVGWkxFdEJRVXNzUlVGQlJUdG5Ra0ZEZWtJc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1lVRkRjRU03TzJkQ1FVRk5MRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZETlVJc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0WlFVTjBRaXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOa0xFOUJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzFOQlF6VkVPMUZCUTBRc1RVRkJUU3haUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNeFF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeEpRVUZKTEZGQlFWRXNTMEZCU3l4UFFVRlBMRVZCUVVVN1dVRkRhRVFzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1QwRkJUeXhIUVVGSExGbEJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRmxCUVZrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTjZSanRKUVVOTUxFTkJRVU03U1VGUlRTeExRVUZMTEVOQlFVTXNUMEZCV1N4RlFVRkZMRWRCUVVjc1NVRkJVenRSUVVOdVF5eE5RVUZOTEV0QlFVc3NSMEZCUnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRPVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGdlFpeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnNSQ3hEUVVGRE8wbEJVVTBzU1VGQlNTeERRVUZETEU5QlFWa3NSVUZCUlN4SFFVRkhMRWxCUVZNN1VVRkRiRU1zVFVGQlRTeExRVUZMTEVkQlFVY3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUXpkRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJiMElzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYkVRc1EwRkJRenRKUVZGTkxFbEJRVWtzUTBGQlF5eFBRVUZaTEVWQlFVVXNSMEZCUnl4SlFVRlRPMUZCUTJ4RExFMUJRVTBzUzBGQlN5eEhRVUZITEVOQlFVTXNUMEZCVHl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTTNReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVc5Q0xFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEyeEVMRU5CUVVNN1NVRlJUU3hMUVVGTExFTkJRVU1zVDBGQldTeEZRVUZGTEVkQlFVY3NTVUZCVXp0UlFVTnVReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZET1VNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRnZRaXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU5zUkN4RFFVRkRPMGxCVTFNc1YwRkJWenRSUVVOcVFpeFBRVUZQTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeEpRVUZKTEVWQlFVVXNTVUZCU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVsQlFVa3NSVUZCUlN4SlFVRkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZEZWtjc1EwRkJRenRKUVN0Q1V5eFRRVUZUTEVOQlFVTXNVVUZCYlVJN1VVRkRia01zVFVGQlRTeGhRVUZoTEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhGUVVGRkxFMUJRVTBzUlVGQlJTeE5RVUZOTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRhRVVzVDBGQlR5eGhRVUZoTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxHRkJRV0VzUTBGQlF5eFBRVUZQTEVOQlFWTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wbEJRek5HTEVOQlFVTTdTVUZUVXl4WFFVRlhPMUZCUTJwQ0xFOUJRVThzWjBKQlFVMHNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXh4UWtGQmNVSXNRMEZCUXl4RFFVRkRPMGxCUTJ4RUxFTkJRVU03U1VGVFV5eFhRVUZYTzFGQlEycENMRTFCUVUwc1MwRkJTeXhIUVVGWkxFbEJRVWtzUzBGQlN5eEZRVUZGTEVOQlFVTXNTMEZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU4wUkN4SlFVRkpMRk5CUVZNc1EwRkJRenRSUVVOa0xFdEJRVXNzVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4VFFVRlRMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVTdXVUZET1VNc1NVRkJTU3hEUVVGRExFdEJRVXM3WjBKQlFVVXNVMEZCVXp0WlFVTnlRaXhKUVVGSkxFTkJRVU1zTWtKQlFXOUNMRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eGpRVUZqTEVWQlFVVXNTMEZCU3l4RFFVRkRMRVZCUVVVN1owSkJRemxFTEZOQlFWTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExGVkJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVOMlF5eE5RVUZOTzJGQlExUTdVMEZEU2p0UlFVTkVMRWxCUVVrc1UwRkJVeXhGUVVGRk8xbEJRMWdzVTBGQlV5eEhRVUZITEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlF6RkRPMkZCUVUwN1dVRkRTQ3hUUVVGVExFZEJRVWNzUlVGQlJTeERRVUZETzFOQlEyeENPMUZCUTBRc1QwRkJUeXhUUVVGVExFTkJRVU03U1VGRGNrSXNRMEZCUXp0RFFVTktPMEZCTTAxRUxEaENRVEpOUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLmV4cGlyZSA9IEluZmluaXR5O1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmV4cGlyZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKGR1cmF0aW9uIHx8IEluZmluaXR5KTtcbiAgICB9XG4gICAgZ2V0IGV4cGlyZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4cGlyZSA/IHRoaXMuZXhwaXJlIDwgbmV3IERhdGUoKS5nZXRUaW1lKCkgOiBmYWxzZTtcbiAgICB9XG59XG5jbGFzcyBCRE9NYXBDYWNoZSBleHRlbmRzIE1hcCB7XG4gICAgc2V0KGtleSwgdmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyBFbnRpdHkodmFsdWUsIGR1cmF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnNldChrZXksIGVudGl0eSk7XG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gc3VwZXIuZ2V0KGtleSk7XG4gICAgICAgIGlmIChlbnRpdHkgPT09IHVuZGVmaW5lZCB8fCBlbnRpdHkuZXhwaXJlZCkge1xuICAgICAgICAgICAgdGhpcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudGl0eS5kYXRhO1xuICAgIH1cbn1cbmV4cG9ydHMuQkRPTWFwQ2FjaGUgPSBCRE9NYXBDYWNoZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBUV0Z3UTJGamFHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMnhwWWk5Q1JFOU5ZWEJEWVdOb1pTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVV0QkxFMUJRVTBzVFVGQlRUdEpRV2RDVWl4WlFVRlpMRWxCUVU4c1JVRkJSU3hSUVVGcFFqdFJRVVk1UWl4WFFVRk5MRWRCUVZjc1VVRkJVU3hEUVVGRE8xRkJSemxDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMnBDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hKUVVGSkxFVkJRVVVzUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RFFVRkRMRkZCUVZFc1NVRkJTU3hSUVVGUkxFTkJRVU1zUTBGQlF6dEpRVU5vUlN4RFFVRkRPMGxCVTBRc1NVRkJTU3hQUVVGUE8xRkJRMUFzVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTndSU3hEUVVGRE8wTkJRMG83UVVGVFJDeE5RVUZoTEZkQlFXdENMRk5CUVZFc1IwRkJhVUk3U1VGWE4wTXNSMEZCUnl4RFFVRkRMRWRCUVUwc1JVRkJSU3hMUVVGUkxFVkJRVVVzVVVGQmFVSTdVVUZETVVNc1RVRkJUU3hOUVVGTkxFZEJRVWNzU1VGQlNTeE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRek5ETEU5QlFVOHNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEYkVNc1EwRkJRenRKUVZOTkxFZEJRVWNzUTBGQlF5eEhRVUZOTzFGQlEySXNUVUZCVFN4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTTVRaXhKUVVGSkxFMUJRVTBzUzBGQlN5eFRRVUZUTEVsQlFVa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVONFF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMnBDTEU5QlFVOHNVMEZCVXl4RFFVRkRPMU5CUTNCQ08xRkJRMFFzVDBGQlR5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCUTNaQ0xFTkJRVU03UTBGRFNqdEJRUzlDUkN4clEwRXJRa01pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xudmFyIEJET01vZGVsXzE7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgdXVpZF8xID0gcmVxdWlyZShcInV1aWRcIik7XG5jb25zdCB0eXBlX2dyYXBocWxfMSA9IHJlcXVpcmUoXCJ0eXBlLWdyYXBocWxcIik7XG5jb25zdCBCaW5kaW5nXzEgPSByZXF1aXJlKFwifmJkby9saWIvQmluZGluZ1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCBNb2RlbFJlZ2lzdHJ5XzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kZWxSZWdpc3RyeVwiKTtcbmxldCBCRE9Nb2RlbCA9IEJET01vZGVsXzEgPSBjbGFzcyBCRE9Nb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNCRE9Nb2RlbCA9IHRydWU7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbk5hbWUgPSBCRE9Nb2RlbF8xLmNvbGxlY3Rpb25OYW1lO1xuICAgICAgICB0aGlzLmRhdGFiYXNlTmFtZSA9IEJET01vZGVsXzEuZGF0YWJhc2VOYW1lO1xuICAgICAgICB0aGlzLmlkID0gYHBlbmRpbmdfJHt1dWlkXzEudjQoKX1gO1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzLmNvbnN0cnVjdG9yKS5uYW1lO1xuICAgICAgICBNb2RlbFJlZ2lzdHJ5XzEuTW9kZWxSZWdpc3RyeS5nZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgYmluZGluZ3MoKSB7XG4gICAgICAgIGNvbnN0IGJpbmRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLCBcImJpbmRpbmdzXCIpO1xuICAgICAgICByZXR1cm4gYmluZGluZ3MgPyBiaW5kaW5ncyA6IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlQnlJRChfaWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkXCIpO1xuICAgIH1cbiAgICBnZXRSZWZlcmVuY2VTdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgX3JlZmVyZW5jZToke3RoaXMuY2xhc3NOYW1lfSR7dGhpcy5pZH1gO1xuICAgIH1cbiAgICBiaW5kKHByb3BOYW1lLCBtb2RlKSB7XG4gICAgICAgIHJldHVybiBuZXcgQmluZGluZ18xLkJpbmRpbmcodGhpcywgcHJvcE5hbWUsIG1vZGUpO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMudG9KU09OKCk7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICBjb25zdCBkYXRhID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzW2tleV07XG4gICAgICAgICAgICAgICAgZGF0YVtrZXldID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgYXN5bmMgaXNVbnNhdmVkKGF0dHIpIHtcbiAgICAgICAgY29uc3QgdW5zYXZlZENoYW5nZXMgPSBhd2FpdCB0aGlzLmdldFVuc2F2ZWRDaGFuZ2VzKCk7XG4gICAgICAgIGxldCB1bnNhdmVkID0gZmFsc2U7XG4gICAgICAgIGlmICh1bnNhdmVkQ2hhbmdlcyAmJiB1bnNhdmVkQ2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShhdHRyKSlcbiAgICAgICAgICAgIHVuc2F2ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuc2F2ZWQpO1xuICAgIH1cbiAgICBhc3luYyBoYXNVbnNhdmVkQ2hhbmdlcygpIHtcbiAgICAgICAgY29uc3QgdW5zYXZlZENoYW5nZXMgPSBhd2FpdCB0aGlzLmdldFVuc2F2ZWRDaGFuZ2VzKCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoQm9vbGVhbihPYmplY3Qua2V5cyh1bnNhdmVkQ2hhbmdlcykubGVuZ3RoKSk7XG4gICAgfVxufTtcbkJET01vZGVsLmdyYXBoUUxUeXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKEJET01vZGVsXzEuY29uc3RydWN0b3IpO1xuQkRPTW9kZWwuaXNCRE9Nb2RlbCA9IHRydWU7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG5dLCBCRE9Nb2RlbC5wcm90b3R5cGUsIFwiaXNCRE9Nb2RlbFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBCRE9Nb2RlbC5wcm90b3R5cGUsIFwiY29sbGVjdGlvbk5hbWVcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgQkRPTW9kZWwucHJvdG90eXBlLCBcImRhdGFiYXNlTmFtZVwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKChfdHlwZSkgPT4gdHlwZV9ncmFwaHFsXzEuSUQpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIEJET01vZGVsLnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgQkRPTW9kZWwucHJvdG90eXBlLCBcImNsYXNzTmFtZVwiLCB2b2lkIDApO1xuQkRPTW9kZWwgPSBCRE9Nb2RlbF8xID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKHsgaXNBYnN0cmFjdDogdHJ1ZSB9KSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbl0sIEJET01vZGVsKTtcbmV4cG9ydHMuQkRPTW9kZWwgPSBCRE9Nb2RlbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBUVzlrWld3dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyeHBZaTlDUkU5TmIyUmxiQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUVzSzBKQlFXdERPMEZCUTJ4RExDdERRVUZyUXp0QlFVTnNReXc0UTBGQmQwUTdRVUZEZUVRc2MwUkJRVFpGTzBGQlF6ZEZMR3RFUVVGclJEdEJRVVZzUkN3d1JFRkJkVVE3UVVGWGRrUXNTVUZCYzBJc1VVRkJVU3huUWtGQk9VSXNUVUZCYzBJc1VVRkJVVHRKUVN0SE1VSTdVVUZvUkRSQ0xHVkJRVlVzUjBGQldTeEpRVUZKTEVOQlFVTTdVVUZSTTBJc2JVSkJRV01zUjBGQldTeFZRVUZSTEVOQlFVTXNZMEZCWXl4RFFVRkRPMUZCVVd4RUxHbENRVUZaTEVkQlFWa3NWVUZCVVN4RFFVRkRMRmxCUVZrc1EwRkJRenRSUVZONlF5eFBRVUZGTEVkQlFWY3NWMEZCVnl4VFFVRkpMRVZCUVVVc1JVRkJSU3hEUVVGRE8xRkJWWEpETEdOQlFWTXNSMEZCVnl4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNN1VVRmpNVVlzTmtKQlFXRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETDBNc1EwRkJRenRKUVhaSFJDeEpRVUZqTEZGQlFWRTdVVUZEYkVJc1RVRkJUU3hSUVVGUkxFZEJRVWNzYzBKQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGREwwTXNUMEZCVHl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVNelF5eERRVUZETzBsQk9FWk5MRTFCUVUwc1EwRkJReXhsUVVGbExFTkJRWGRETEVkQlFWazdVVUZETjBVc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8wbEJRM1pETEVOQlFVTTdTVUZaVFN4clFrRkJhMEk3VVVGRGNrSXNUMEZCVHl4alFVRmpMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNCRUxFTkJRVU03U1VGWFRTeEpRVUZKTEVOQlFUSkZMRkZCUVZjc1JVRkJSU3hKUVVGUk8xRkJRM1pITEU5QlFVOHNTVUZCU1N4cFFrRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRTJSQ3hEUVVGRE8wbEJRM3BITEVOQlFVTTdTVUZSVFN4UlFVRlJPMUZCUTFnc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMUZCUXpOQ0xFOUJRVThzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOb1F5eERRVUZETzBsQlZVMHNUVUZCVFR0UlFVTlVMRTFCUVUwc1NVRkJTU3hIUVVGdFFpeEZRVUZGTEVOQlFVTTdVVUZEYUVNc1MwRkJTeXhOUVVGTkxFZEJRVWNzU1VGQlNTeEpRVUZKTEVWQlFVVTdXVUZEY0VJc1NVRkJTU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NVMEZCVXl4RlFVRkZPMmRDUVVONlFpeE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlF6RkNMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTTdZVUZEZGtJN1UwRkRTanRSUVVORUxFOUJRVThzU1VGQlNTeERRVUZETzBsQlEyaENMRU5CUVVNN1NVRTBRazBzUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRXJRanRSUVVOc1JDeE5RVUZOTEdOQlFXTXNSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4RFFVRkRPMUZCUTNSRUxFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTndRaXhKUVVGSkxHTkJRV01zU1VGQlNTeGpRVUZqTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJRenRaUVVGRkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZETVVVc1QwRkJUeXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUTNCRExFTkJRVU03U1VGVFRTeExRVUZMTEVOQlFVTXNhVUpCUVdsQ08xRkJRekZDTEUxQlFVMHNZMEZCWXl4SFFVRkhMRTFCUVUwc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RlFVRkZMRU5CUVVNN1VVRkRkRVFzVDBGQlR5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVFVXNRMEZCUXp0RFFWZEtMRU5CUVVFN1FVRjJUVEJDTEc5Q1FVRlhMRWRCUVZFc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eFZRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1FVRm5ReTlFTEcxQ1FVRlZMRWRCUVZrc1NVRkJTU3hEUVVGRE8wRkJVWFJETzBsQlFWZ3NjVUpCUVZFc1JVRkJSVHM3TkVOQlFUUkRPMEZCVVRORE8wbEJRVmdzY1VKQlFWRXNSVUZCUlRzN1owUkJRVzFGTzBGQlVXeEZPMGxCUVZnc2NVSkJRVkVzUlVGQlJUczdPRU5CUVN0RU8wRkJVMmhFTzBsQlFYcENMSE5DUVVGVExFTkJRVU1zUTBGQlF5eExRVUZMTEVWQlFVVXNSVUZCUlN4RFFVRkRMR2xDUVVGRkxFTkJRVU03TzI5RFFVRjVRenRCUVZWeVJEdEpRVUZhTEhOQ1FVRlRMRVZCUVVVN096SkRRVUZyUmp0QlFXeEhOVVVzVVVGQlVUdEpRVVEzUWl3MFFrRkJaU3hEUVVGRExFVkJRVVVzVlVGQlZTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkRPenRIUVVOb1FpeFJRVUZSTEVOQk9FNDNRanRCUVRsT2NVSXNORUpCUVZFaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBlbnZpcm9ubWVudF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZW52aXJvbm1lbnRcIik7XG5jbGFzcyBCRE9Sb3V0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucm91dGVyTmFtZVNwYWNlID0gYC8ke3RoaXMuY29uc3RydWN0b3IubmFtZS50b0xvd2VyQ2FzZSgpfWA7XG4gICAgICAgIHRoaXMucm91dGVzID0gWycvJ107XG4gICAgICAgIHRoaXMudGVtcGxhdGVTdHJpbmcgPSAnPGRpdj48L2Rpdj4nO1xuICAgICAgICB0aGlzLmpzb25Pbmx5ID0gZmFsc2U7XG4gICAgfVxuICAgIHJlbmRlclRlbXBsYXRlKHRlbXBsYXRlUGFyYW1zKSB7XG4gICAgICAgIGxldCBzdHJpbmdUb1BhcnNlID0gbnVsbDtcbiAgICAgICAgaWYgKHV0aWxfMS5pc1N0cmluZyh0aGlzLnRlbXBsYXRlU3RyaW5nKSkge1xuICAgICAgICAgICAgc3RyaW5nVG9QYXJzZSA9IGVudmlyb25tZW50XzEudGVtcGxhdGVFbnZpcm9ubWVudC5yZW5kZXJTdHJpbmcodGhpcy50ZW1wbGF0ZVN0cmluZywgdGVtcGxhdGVQYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1dGlsXzEuaXNPYmplY3QodGhpcy50ZW1wbGF0ZVN0cmluZykpIHtcbiAgICAgICAgICAgIHN0cmluZ1RvUGFyc2UgPSB0aGlzLnRlbXBsYXRlU3RyaW5nLnJlbmRlcih0ZW1wbGF0ZVBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cmluZ1RvUGFyc2U7XG4gICAgfVxuICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zKF9yZXF1ZXN0T3JQYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn1cbmV4cG9ydHMuQkRPUm91dGUgPSBCRE9Sb3V0ZTtcbkJET1JvdXRlLmF0dGFjaFRvU2VydmVycyA9IFsnKiddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFVtOTFkR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJ4cFlpOUNSRTlTYjNWMFpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVWQkxEQkRRVUZ4UkR0QlFVTnlSQ3gzUkVGQk5rUTdRVUZUTjBRc1RVRkJjMElzVVVGQlVUdEpRVUU1UWp0UlFYRkNWeXh2UWtGQlpTeEhRVUZYTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVWQlFVVXNRMEZCUXp0UlFWRndSU3hYUVVGTkxFZEJRV0VzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFXdENkRUlzYlVKQlFXTXNSMEZCYzBJc1lVRkJZU3hEUVVGRE8xRkJWV3hFTEdGQlFWRXNSMEZCV1N4TFFVRkxMRU5CUVVNN1NVRnRSSGhETEVOQlFVTTdTVUY0UTJFc1kwRkJZeXhEUVVGRExHTkJRVGhDTzFGQlEyNUVMRWxCUVVrc1lVRkJZU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU42UWl4SlFVRkpMR1ZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVWQlFVVTdXVUZETDBJc1lVRkJZU3hIUVVGSExHbERRVUZ0UWl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eEZRVUZGTEdOQlFXTXNRMEZCUXl4RFFVRkRPMU5CUTNwR08xRkJRMFFzU1VGQlNTeGxRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhGUVVGRk8xbEJReTlDTEdGQlFXRXNSMEZCWXl4SlFVRkpMRU5CUVVNc1kwRkJaU3hEUVVGRExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXp0VFFVTXhSVHRSUVVORUxFOUJRVThzWVVGQllTeERRVUZETzBsQlEzcENMRU5CUVVNN1NVRlhVeXhMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEdkQ1FVRXdRenRSUVVOeVJTeFBRVUZQTEVWQlFVVXNRMEZCUXp0SlFVTmtMRU5CUVVNN08wRkJNVVpNTERSQ1FUUkhRenRCUVdoSGFVSXNkMEpCUVdVc1IwRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQmluZGluZ18xID0gcmVxdWlyZShcIn5iZG8vbGliL0JpbmRpbmdcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuZnVuY3Rpb24gYmFzZUNvbnN0cnVjdG9yRmFjdG9yeShjdG9yLCBjb25zdFBhcmFtc0luZGV4KSB7XG4gICAgY2xhc3MgQmFzZUNvbnN0cnVjdG9yIGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKC4uLnBhcmFtcykge1xuICAgICAgICAgICAgc3VwZXIoLi4ucGFyYW1zKTtcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbk5hbWUgPSBCYXNlQ29uc3RydWN0b3IuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgICAgICB0aGlzLmRhdGFiYXNlTmFtZSA9IEJhc2VDb25zdHJ1Y3Rvci5kYXRhYmFzZU5hbWU7XG4gICAgICAgICAgICBjb25zdCBjb25zdFBhcmFtcyA9IHBhcmFtc1tjb25zdFBhcmFtc0luZGV4XTtcbiAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcywgXCJub3JtYWxGdW5jdGlvbmFsaXR5XCIsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFCYXNlQ29uc3RydWN0b3IuaXNQcm9jZWR1cmFsQ29tcG9uZW50Q29uc3RydWN0aW9uKVxuICAgICAgICAgICAgICAgIHRoaXMuaW52b2tlTGlmZUN5Y2xlKGNvbnN0UGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICBpbnZva2VMaWZlQ3ljbGUoY29uc3RQYXJhbXMpIHtcbiAgICAgICAgICAgIGlmICghKGNvbnN0UGFyYW1zIGluc3RhbmNlb2YgT2JqZWN0KSlcbiAgICAgICAgICAgICAgICBjb25zdFBhcmFtcyA9IHt9O1xuICAgICAgICAgICAgbGV0IGRlZmF1bHRTZXR0aW5ncyA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcywgXCJkZWZhdWx0U2V0dGluZ3NcIikgfHwge307XG4gICAgICAgICAgICBkZWZhdWx0U2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRTZXR0aW5ncywgY29uc3RQYXJhbXMpO1xuICAgICAgICAgICAgaWYgKHV0aWxfMS5pc0Z1bmN0aW9uKHRoaXMuZ2V0TmFtZXNwYWNlZFN0b3JhZ2UpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBjb25zdFBhcmFtcy5pZCB8fCBkZWZhdWx0U2V0dGluZ3MuaWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGVkU2V0dGluZ3MgPSB0aGlzLmdldE5hbWVzcGFjZWRTdG9yYWdlKFwiKlwiLCBcImlkXCIsIGlkKSB8fCB7fTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjYWNoZWRTZXR0aW5ncykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FjaGVkU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRlZmF1bHRTZXR0aW5nc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBCaW5kaW5nXzEuQmluZGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0VmFsdWUoY2FjaGVkU2V0dGluZ3Nba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFNldHRpbmdzW2tleV0gPSBjYWNoZWRTZXR0aW5nc1trZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZWZhdWx0U2V0dGluZ3MpO1xuICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YSh0aGlzLCBcImNvbnN0cnVjdGlvbkNvbXBsZXRlXCIsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHV0aWxfMS5pc0Z1bmN0aW9uKHRoaXMuY29uc3RydWN0ZWRDYWxsYmFjaykpXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3RlZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQmFzZUNvbnN0cnVjdG9yLmNsYXNzTmFtZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihCYXNlQ29uc3RydWN0b3IpLm5hbWU7XG4gICAgQmFzZUNvbnN0cnVjdG9yLmdyYXBoUUxUeXBlID0gY3RvcjtcbiAgICBCYXNlQ29uc3RydWN0b3IuY29sbGVjdGlvbk5hbWUgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKEJhc2VDb25zdHJ1Y3RvciwgXCJjb2xsZWN0aW9uTmFtZVwiKTtcbiAgICBCYXNlQ29uc3RydWN0b3IuZGF0YWJhc2VOYW1lID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShCYXNlQ29uc3RydWN0b3IsIFwiZGF0YWJhc2VOYW1lXCIpO1xuICAgIEJhc2VDb25zdHJ1Y3Rvci5pc1Byb2NlZHVyYWxDb21wb25lbnRDb25zdHJ1Y3Rpb24gPSBmYWxzZTtcbiAgICByZXR1cm4gQmFzZUNvbnN0cnVjdG9yO1xufVxuZXhwb3J0cy5iYXNlQ29uc3RydWN0b3JGYWN0b3J5ID0gYmFzZUNvbnN0cnVjdG9yRmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFtRnpaVU52Ym5OMGNuVmpkRzl5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5c2FXSXZRbUZ6WlVOdmJuTjBjblZqZEc5eUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc09FTkJRVEpETzBGQlF6TkRMR3RFUVVGclJUdEJRVU5zUlN3d1EwRkJOa003UVVFclJEZERMRk5CUVdkQ0xITkNRVUZ6UWl4RFFVRTRReXhKUVVGUExFVkJRVVVzWjBKQlFYZENPMGxCVVdwSUxFMUJRVTBzWlVGQlowSXNVMEZCVVN4SlFVRkpPMUZCWjBVNVFpeFpRVUZaTEVkQlFVY3NUVUZCWVR0WlFVTjRRaXhMUVVGTExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXp0WlFWaE1MRzFDUVVGakxFZEJRVmtzWlVGQlpTeERRVUZETEdOQlFXTXNRMEZCUXp0WlFWRjZSQ3hwUWtGQldTeEhRVUZaTEdWQlFXVXNRMEZCUXl4WlFVRlpMRU5CUVVNN1dVRkpha1VzVFVGQlRTeFhRVUZYTEVkQlFVY3NUVUZCVFN4RFFVRkRMR2RDUVVGblFpeERRVUZETEVOQlFVTTdXVUZETjBNc2VVSkJRV01zUTBGQlF5eEpRVUZKTEVWQlFVVXNjVUpCUVhGQ0xFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEYkVRc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eHBRMEZCYVVNN1owSkJRVVVzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRSUVVNNVJpeERRVUZETzFGQlVVMHNaVUZCWlN4RFFVRkRMRmRCUVhkRE8xbEJRek5FTEVsQlFVa3NRMEZCUXl4RFFVRkRMRmRCUVZjc1dVRkJXU3hOUVVGTkxFTkJRVU03WjBKQlFVVXNWMEZCVnl4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVOMlJDeEpRVUZKTEdWQlFXVXNSMEZCTWtNc2MwSkJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNhVUpCUVdsQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdXVUZEZWtjc1pVRkJaU3hIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNaVUZCWlN4RlFVRkZMRmRCUVZjc1EwRkJReXhEUVVGRE8xbEJRemxFTEVsQlFVa3NhVUpCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1JVRkJSVHRuUWtGRGRrTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1YwRkJWeXhEUVVGRExFVkJRVVVzU1VGQlNTeGxRVUZsTEVOQlFVTXNSVUZCUlN4RFFVRkRPMmRDUVVOb1JDeE5RVUZOTEdOQlFXTXNSMEZCUnl4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdaMEpCUTNSRkxFdEJRVXNzVFVGQlRTeEhRVUZITEVsQlFVa3NZMEZCWXl4RlFVRkZPMjlDUVVNNVFpeEpRVUZKTEdOQlFXTXNRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3ZDBKQlEzQkRMRTFCUVUwc1QwRkJUeXhIUVVGSExHVkJRV1VzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0M1FrRkRja01zU1VGQlNTeFBRVUZQTEZsQlFWa3NhVUpCUVU4c1JVRkJSVHMwUWtGRE5VSXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0NVFrRkRla003T3pSQ1FVRk5MR1ZCUVdVc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2NVSkJRM0pFTzJsQ1FVTktPMkZCUTBvN1dVRkRSQ3hOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4bFFVRmxMRU5CUVVNc1EwRkJRenRaUVVOeVF5eDVRa0ZCWXl4RFFVRkRMRWxCUVVrc1JVRkJSU3h6UWtGQmMwSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOdVJDeEpRVUZKTEdsQ1FVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRPMmRDUVVGRkxFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1JVRkJSU3hEUVVGRE8xRkJRM3BGTEVOQlFVTTdPMGxCZUVaelFpeDVRa0ZCVXl4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCVlhoRUxESkNRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRPMGxCVTI1Q0xEaENRVUZqTEVkQlFWa3NjMEpCUVZjc1EwRkJReXhsUVVGbExFVkJRVVVzWjBKQlFXZENMRU5CUVVNc1EwRkJRenRKUVZONlJTdzBRa0ZCV1N4SFFVRlpMSE5DUVVGWExFTkJRVU1zWlVGQlpTeEZRVUZGTEdOQlFXTXNRMEZCUXl4RFFVRkRPMGxCVlRsRkxHbEVRVUZwUXl4SFFVRlpMRXRCUVVzc1EwRkJRenRKUVc5RWNrVXNUMEZCVHl4bFFVRmxMRU5CUVVNN1FVRkRNMElzUTBGQlF6dEJRVE5IUkN4M1JFRXlSME1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IEZpZWxkXzEgPSByZXF1aXJlKFwifmJkby9saWIvRmllbGRcIik7XG5jb25zdCBmcmFtZXdvcmtfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2ZyYW1ld29ya1wiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IGluaUJpbmROYW1lID0gXCJpbml0aWF0b3JCaW5kaW5nXCI7XG5jb25zdCBiaW5kTmFtZSA9IFwiYmluZGluZ3NcIjtcbmNsYXNzIEJpbmRpbmcge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHksIG1vZGUgPSBcIlJlYWRXcml0ZVwiKSB7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgICAgIHRoaXMubW9kZSA9IG1vZGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRvciA9IHRoaXMuZ2V0T3JpZ2luYWxQcm9wZXJ0eURlc2NyaXB0b3IodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlIHx8IHRoaXMub2JqZWN0W3RoaXMucHJvcGVydHldO1xuICAgIH1cbiAgICBpbnN0YWxsKGluaXRpYXRvciwgcHJvcGVydHkpIHtcbiAgICAgICAgdGhpcy5pbml0aWF0b3IgPSBpbml0aWF0b3I7XG4gICAgICAgIHRoaXMuaW5pdGlhdG9yUHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgdGhpcy5pbml0aWF0b3JEZXNjcmlwdG9yID0gdGhpcy5nZXRPcmlnaW5hbFByb3BlcnR5RGVzY3JpcHRvcih0aGlzLmluaXRpYXRvciwgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSk7XG4gICAgICAgIGlmICghUmVmbGVjdC5oYXNNZXRhZGF0YShpbmlCaW5kTmFtZSwgdGhpcy5pbml0aWF0b3IpKVxuICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YSh0aGlzLmluaXRpYXRvciwgaW5pQmluZE5hbWUsIG5ldyBNYXAoKSk7XG4gICAgICAgIGlmICghUmVmbGVjdC5oYXNNZXRhZGF0YShiaW5kTmFtZSwgdGhpcy5vYmplY3QpKVxuICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YSh0aGlzLm9iamVjdCwgYmluZE5hbWUsIG5ldyBNYXAoKSk7XG4gICAgICAgIGNvbnN0IGluaXRpYXRvck1EYXRhID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLmluaXRpYXRvciwgaW5pQmluZE5hbWUpIHx8IG5ldyBNYXAoKTtcbiAgICAgICAgY29uc3QgaW5pdGlhdG9yQmluZGluZyA9IGluaXRpYXRvck1EYXRhLmdldCh0aGlzLmluaXRpYXRvclByb3BlcnR5KTtcbiAgICAgICAgaWYgKGluaXRpYXRvckJpbmRpbmcpXG4gICAgICAgICAgICBpbml0aWF0b3JCaW5kaW5nLnJlbW92ZSgpO1xuICAgICAgICBjb25zdCBtRGF0YSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5vYmplY3QsIGJpbmROYW1lKSB8fCBuZXcgTWFwKCk7XG4gICAgICAgIGlmICghbURhdGEuaGFzKHRoaXMucHJvcGVydHkpKVxuICAgICAgICAgICAgbURhdGEuc2V0KHRoaXMucHJvcGVydHksIFtdKTtcbiAgICAgICAgbURhdGEuZ2V0KHRoaXMucHJvcGVydHkpLnB1c2godGhpcyk7XG4gICAgICAgIGluaXRpYXRvck1EYXRhLnNldCh0aGlzLmluaXRpYXRvclByb3BlcnR5LCB0aGlzKTtcbiAgICAgICAgY29uc3QgZmllbGRNRGF0YU5hbWUgPSBgZmllbGQ6JHt0aGlzLnByb3BlcnR5fWA7XG4gICAgICAgIGNvbnN0IG9iamVjdEZpZWxkID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgY29uc3QgaW5pdGlhdG9yRmllbGQgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHkpO1xuICAgICAgICBsZXQgZmllbGQgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIGZpZWxkTURhdGFOYW1lKTtcbiAgICAgICAgaWYgKCFmaWVsZClcbiAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lV2lsZGNhcmRNZXRhZGF0YSh0aGlzLm9iamVjdCwgZmllbGRNRGF0YU5hbWUsIG5ldyBGaWVsZF8xLkZpZWxkKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KSk7XG4gICAgICAgIGZpZWxkID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMub2JqZWN0LCBmaWVsZE1EYXRhTmFtZSk7XG4gICAgICAgIGZpZWxkLmFkZEZpZWxkKG9iamVjdEZpZWxkKTtcbiAgICAgICAgZmllbGQuYWRkRmllbGQoaW5pdGlhdG9yRmllbGQpO1xuICAgICAgICB0aGlzLnJlcGxhY2VEZXNjcmlwdG9yKCk7XG4gICAgICAgIFJlZmxlY3Quc2V0KHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5LCB0aGlzLnZhbHVlT2YoKSk7XG4gICAgfVxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgY29uc3Qgb2JqZWN0VmFsdWUgPSB0aGlzLm9iamVjdFt0aGlzLnByb3BlcnR5XTtcbiAgICAgICAgY29uc3QgaW5pdGlhdG9yVmFsdWUgPSB0aGlzLmluaXRpYXRvclt0aGlzLmluaXRpYXRvclByb3BlcnR5XTtcbiAgICAgICAgY29uc3Qgb2JqZWN0TURhdGEgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMub2JqZWN0LCBiaW5kTmFtZSk7XG4gICAgICAgIGNvbnN0IG9iamVjdEJpbmRpbmdzID0gb2JqZWN0TURhdGEgPyBvYmplY3RNRGF0YS5nZXQodGhpcy5wcm9wZXJ0eSkgOiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IGluaXRpYXRvck1EYXRhID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLmluaXRpYXRvciwgaW5pQmluZE5hbWUpO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JCaW5kaW5nID0gaW5pdGlhdG9yTURhdGEgPyBpbml0aWF0b3JNRGF0YS5nZXQodGhpcy5pbml0aWF0b3JQcm9wZXJ0eS50b1N0cmluZygpKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgZmllbGRNRGF0YU5hbWUgPSBgZmllbGQ6JHt0aGlzLnByb3BlcnR5fWA7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMub2JqZWN0LCBmaWVsZE1EYXRhTmFtZSk7XG4gICAgICAgIGlmIChpbml0aWF0b3JCaW5kaW5nKSB7XG4gICAgICAgICAgICBpZiAoaW5pdGlhdG9yTURhdGEpXG4gICAgICAgICAgICAgICAgaW5pdGlhdG9yTURhdGEuZGVsZXRlKHRoaXMuaW5pdGlhdG9yUHJvcGVydHkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB0aGlzLnJlc3RvcmVEZXNjcmlwdG9yKHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5LCBpbml0aWF0b3JWYWx1ZSwgdGhpcy5pbml0aWF0b3JEZXNjcmlwdG9yKTtcbiAgICAgICAgICAgIGZpZWxkLnJlbW92ZUZpZWxkKG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLmluaXRpYXRvciwgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYmplY3RCaW5kaW5ncykge1xuICAgICAgICAgICAgdXRpbF8xLnJlbW92ZUVsZW1lbnRGcm9tQXJyYXkob2JqZWN0QmluZGluZ3MsIHRoaXMpO1xuICAgICAgICAgICAgZmllbGQucmVtb3ZlRmllbGQobWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KSk7XG4gICAgICAgICAgICBpZiAoIW9iamVjdEJpbmRpbmdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3RNRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0TURhdGEuZGVsZXRlKHRoaXMucHJvcGVydHkpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdG9yZURlc2NyaXB0b3IodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHksIG9iamVjdFZhbHVlLCB0aGlzLmRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lV2lsZGNhcmRNZXRhZGF0YSh0aGlzLm9iamVjdCwgZmllbGRNRGF0YU5hbWUsIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlcGxhY2VEZXNjcmlwdG9yKCkge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHksIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gYmluZGluZ0dldCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5tb2RlID09PSBcIldyaXRlT25seVwiICYmIHRoaXMgPT09IHRoYXQuaW5pdGlhdG9yKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHJldHVybiBmcmFtZXdvcmtfMS5nZXR0ZXIodGhhdC5vYmplY3QsIHRoYXQucHJvcGVydHksIFwiZmllbGRcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBiaW5kaW5nU2V0KG5ld1ZhbCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGF0Lm1vZGUgPT09IFwiUmVhZE9ubHlcIiAmJiB0aGlzID09PSB0aGF0LmluaXRpYXRvcilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGZyYW1ld29ya18xLnNldHRlcih0aGF0Lm9iamVjdCwgdGhhdC5wcm9wZXJ0eSwgbmV3VmFsLCBcImZpZWxkXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJpbmRpbmdEZXNjID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpO1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5KTtcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmluaXRpYXRvciwgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSwgYmluZGluZ0Rlc2MpO1xuICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMub2JqZWN0LCBcImJpbmRpbmdEZXNjcmlwdG9yXCIsIGJpbmRpbmdEZXNjKTtcbiAgICB9XG4gICAgcmVzdG9yZURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSwgdmFsdWUsIGRlc2NyaXB0b3IpIHtcbiAgICAgICAgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5KTtcbiAgICAgICAgaWYgKGRlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9XG4gICAgICAgIG9iamVjdFtwcm9wZXJ0eS50b1N0cmluZygpXSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXRPcmlnaW5hbFByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIGtleSkge1xuICAgICAgICBsZXQgZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwga2V5KTtcbiAgICAgICAgbGV0IG1EYXRhTmFtZSA9IGJpbmROYW1lO1xuICAgICAgICBsZXQgcHJvdG90eXBlID0gb2JqZWN0O1xuICAgICAgICBpZiAob2JqZWN0ID09PSB0aGlzLmluaXRpYXRvcilcbiAgICAgICAgICAgIG1EYXRhTmFtZSA9IGluaUJpbmROYW1lO1xuICAgICAgICB3aGlsZSAoIWRlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgIHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpO1xuICAgICAgICAgICAgaWYgKCFwcm90b3R5cGUpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBpZiAocHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiQmFzZUNvbnN0cnVjdG9yXCIpXG4gICAgICAgICAgICAgICAgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSk7XG4gICAgICAgICAgICBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG90eXBlLCBrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZWFyY2hEZXNjcmlwdG9ySW5CaW5kaW5ncyA9IGZhbHNlO1xuICAgICAgICBpZiAoZGVzY3JpcHRvcikge1xuICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3Iuc2V0ICYmIGRlc2NyaXB0b3Iuc2V0Lm5hbWUgPT09IFwiYmluZGluZ1NldFwiKVxuICAgICAgICAgICAgICAgIHNlYXJjaERlc2NyaXB0b3JJbkJpbmRpbmdzID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yLmdldCAmJiBkZXNjcmlwdG9yLmdldC5uYW1lID09PSBcImJpbmRpbmdHZXRcIilcbiAgICAgICAgICAgICAgICBzZWFyY2hEZXNjcmlwdG9ySW5CaW5kaW5ncyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlYXJjaERlc2NyaXB0b3JJbkJpbmRpbmdzKSB7XG4gICAgICAgICAgICBjb25zdCBtRGF0YSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEob2JqZWN0LCBtRGF0YU5hbWUpO1xuICAgICAgICAgICAgY29uc3QgYmluZGluZ3MgPSBtRGF0YSA/IG1EYXRhLmdldChrZXkudG9TdHJpbmcoKSkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAoYmluZGluZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoYmluZGluZ3MgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yID0gYmluZGluZ3NbMF0uZGVzY3JpcHRvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yID0gYmluZGluZ3MuaW5pdGlhdG9yRGVzY3JpcHRvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICB9XG59XG5leHBvcnRzLkJpbmRpbmcgPSBCaW5kaW5nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUW1sdVpHbHVaeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2YkdsaUwwSnBibVJwYm1jdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN3d1EwRkJlVVE3UVVGRmVrUXNNRU5CUVhWRE8wRkJRM1pETEc5RVFVRnpSRHRCUVVOMFJDeHJSRUZCSzBjN1FVRkpMMGNzVFVGQlRTeFhRVUZYTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03UVVGRGRrTXNUVUZCVFN4UlFVRlJMRWRCUVVjc1ZVRkJWU3hEUVVGRE8wRkJjMEkxUWl4TlFVRmhMRTlCUVU4N1NVRXdSV2hDTEZsQlFWa3NUVUZCVXl4RlFVRkZMRkZCUVZjc1JVRkJSU3hQUVVGdlFpeFhRVUZYTzFGQlF5OUVMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETzFGQlEzSkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETzFGQlEzcENMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEycENMRWxCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETERaQ1FVRTJRaXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wbEJRM0pHTEVOQlFVTTdTVUZMVFN4UlFVRlJMRU5CUVVNc1MwRkJWenRSUVVOMlFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVOMlFpeERRVUZETzBsQlVVMHNUMEZCVHp0UlFVTldMRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEpRVU53UkN4RFFVRkRPMGxCVTAwc1QwRkJUeXhEUVVGRExGTkJRVmtzUlVGQlJTeFJRVUZYTzFGQlEzQkRMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzVTBGQlV5eERRVUZETzFGQlF6TkNMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNSMEZCUnl4UlFVRlJMRU5CUVVNN1VVRkRiRU1zU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhIUVVGSExFbEJRVWtzUTBGQlF5dzJRa0ZCTmtJc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eERRVUZETzFGQlIzUkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEZkQlFWY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRE8xbEJRVVVzZVVKQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxGZEJRVmNzUlVGQlJTeEpRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRPVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTTdXVUZCUlN4NVFrRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVWRzUnl4TlFVRk5MR05CUVdNc1IwRkJSeXh6UWtGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1YwRkJWeXhEUVVGRExFbEJRVWtzU1VGQlNTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTTNSU3hOUVVGTkxHZENRVUZuUWl4SFFVRkhMR05CUVdNc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFTkJRVU03VVVGRGNFVXNTVUZCU1N4blFrRkJaMEk3V1VGQlJTeG5Ra0ZCWjBJc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dFJRVWRvUkN4TlFVRk5MRXRCUVVzc1IwRkJSeXh6UWtGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1VVRkJVU3hEUVVGRExFbEJRVWtzU1VGQlNTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTTVSQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRE8xbEJRVVVzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6VkVMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU53UXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVWRxUkN4TlFVRk5MR05CUVdNc1IwRkJSeXhUUVVGVExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVTm9SQ3hOUVVGTkxGZEJRVmNzUjBGQlJ5dzRRa0ZCYlVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVOd1JTeE5RVUZOTEdOQlFXTXNSMEZCUnl3NFFrRkJiVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMUZCUTI1R0xFbEJRVWtzUzBGQlN5eEhRVUZuUWl3NFFrRkJiVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMR05CUVdNc1EwRkJReXhEUVVGRE8xRkJRekZGTEVsQlFVa3NRMEZCUXl4TFFVRkxPMWxCUVVVc2FVTkJRWE5DTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hqUVVGakxFVkJRVVVzU1VGQlNTeGhRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVZDJSeXhMUVVGTExFZEJRVWNzT0VKQlFXMUNMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeGpRVUZqTEVOQlFXZENMRU5CUVVNN1VVRkRlRVVzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRSUVVNMVFpeExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRE8xRkJSeTlDTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeERRVUZETzFGQlEzcENMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRGVFVXNRMEZCUXp0SlFVOU5MRTFCUVUwN1VVRkZWQ3hOUVVGTkxGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVU12UXl4TlFVRk5MR05CUVdNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eERRVUZETzFGQlJ6bEVMRTFCUVUwc1YwRkJWeXhIUVVGSExITkNRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVU4yUkN4TlFVRk5MR05CUVdNc1IwRkJSeXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNN1VVRkRhRVlzVFVGQlRTeGpRVUZqTEVkQlFVY3NjMEpCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEZkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUTJoRkxFMUJRVTBzWjBKQlFXZENMRWRCUVVjc1kwRkJZeXhEUVVGRExFTkJRVU1zUTBGQlF5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTTdVVUZGTlVjc1RVRkJUU3hqUVVGakxFZEJRVWNzVTBGQlV5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkRhRVFzVFVGQlRTeExRVUZMTEVkQlFXZENMRGhDUVVGdFFpeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1kwRkJZeXhEUVVGRExFTkJRVU03VVVGRk5VVXNTVUZCU1N4blFrRkJaMElzUlVGQlJUdFpRVU5zUWl4SlFVRkpMR05CUVdNN1owSkJRVVVzWTBGQll5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVNM1JTeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVXNZMEZCWXl4RlFVRkZMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4RFFVRkRPMWxCUTNwSExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNPRUpCUVcxQ0xFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTJ4R08xRkJSVVFzU1VGQlNTeGpRVUZqTEVWQlFVVTdXVUZEYUVJc05rSkJRWE5DTEVOQlFVTXNZMEZCWXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRemRETEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc09FSkJRVzFDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVSU3hKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEUxQlFVMHNSVUZCUlR0blFrRkRlRUlzU1VGQlNTeFhRVUZYTzI5Q1FVRkZMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMmRDUVVOdVJDeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxGZEJRVmNzUlVGQlJTeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1owSkJRMnBHTEdsRFFVRnpRaXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNZMEZCWXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8yRkJRemRFTzFOQlEwbzdTVUZEVEN4RFFVRkRPMGxCVTA4c2FVSkJRV2xDTzFGQlEzSkNMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU5zUWl4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRMjVFTEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZPMWxCUXk5RExFZEJRVWNzUlVGQlJTeFRRVUZUTEZWQlFWVTdaMEpCUTNCQ0xFbEJRVWtzU1VGQlNTeERRVUZETEVsQlFVa3NTMEZCU3l4WFFVRlhMRWxCUVVrc1NVRkJTU3hMUVVGTExFbEJRVWtzUTBGQlF5eFRRVUZUTzI5Q1FVRkZMRTlCUVU4c1UwRkJVeXhEUVVGRE8yZENRVU16UlN4UFFVRlBMR3RDUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzFsQlEzWkVMRU5CUVVNN1dVRkRSQ3hIUVVGSExFVkJRVVVzVTBGQlV5eFZRVUZWTEVOQlFVTXNUVUZCYVVRN1owSkJRM1JGTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWxCUVVrc1MwRkJTeXhWUVVGVkxFbEJRVWtzU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUXl4VFFVRlRPMjlDUVVGRkxFOUJRVTg3WjBKQlEyaEZMR3RDUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFMUJRVTBzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0WlFVTjRSQ3hEUVVGRE8xbEJRMFFzV1VGQldTeEZRVUZGTEVsQlFVazdXVUZEYkVJc1ZVRkJWU3hGUVVGRkxFbEJRVWs3VTBGRGJrSXNRMEZCUXl4RFFVRkRPMUZCUTBnc1RVRkJUU3hYUVVGWExFZEJRVWNzVDBGQlR5eERRVUZETEhkQ1FVRjNRaXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJkVUlzUTBGQlF6dFJRVU4yUnl4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVOQlFVTTdVVUZETDBRc1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4WFFVRlhMRU5CUVVNc1EwRkJRenRSUVVNMVJTeDVRa0ZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzYlVKQlFXMUNMRVZCUVVVc1YwRkJWeXhEUVVGRExFTkJRVU03U1VGRGJFVXNRMEZCUXp0SlFWbFBMR2xDUVVGcFFpeERRVUZETEUxQlFYTkNMRVZCUVVVc1VVRkJiVUlzUlVGQlJTeExRVUZWTEVWQlFVVXNWVUZCY1VJN1VVRkRjRWNzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03VVVGRGVrTXNTVUZCU1N4VlFVRlZMRVZCUVVVN1dVRkRXaXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8xTkJRemxGTzFGQlEwUXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVTjRReXhEUVVGRE8wbEJWMDhzTmtKQlFUWkNMRU5CUVVNc1RVRkJZeXhGUVVGRkxFZEJRV003VVVGRGFFVXNTVUZCU1N4VlFVRlZMRWRCUVcxRExFOUJRVThzUTBGQlF5eDNRa0ZCZDBJc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZETDBZc1NVRkJTU3hUUVVGVExFZEJRVzlETEZGQlFWRXNRMEZCUXp0UlFVTXhSQ3hKUVVGSkxGTkJRVk1zUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZEZGtJc1NVRkJTU3hOUVVGTkxFdEJRV0VzU1VGQlNTeERRVUZETEZOQlFWTTdXVUZCUlN4VFFVRlRMRWRCUVVjc1YwRkJWeXhEUVVGRE8xRkJReTlFTEU5QlFVOHNRMEZCUXl4VlFVRlZMRVZCUVVVN1dVRkRhRUlzVTBGQlV5eEhRVUZITEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03V1VGRE4wTXNTVUZCU1N4RFFVRkRMRk5CUVZNN1owSkJRVVVzVFVGQlRUdFpRVU4wUWl4SlFVRkpMRk5CUVZNc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeExRVUZMTEdsQ1FVRnBRanRuUWtGQlJTeFRRVUZUTEVkQlFVY3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dFpRVU51Unl4VlFVRlZMRWRCUVVjc1QwRkJUeXhEUVVGRExIZENRVUYzUWl4RFFVRkRMRk5CUVZNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dFRRVU5xUlR0UlFVTkVMRWxCUVVrc01FSkJRVEJDTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTNaRExFbEJRVWtzVlVGQlZTeEZRVUZGTzFsQlExb3NTVUZCU1N4VlFVRlZMRU5CUVVNc1IwRkJSeXhKUVVGSkxGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4TFFVRkxMRmxCUVZrN1owSkJRVVVzTUVKQlFUQkNMRWRCUVVjc1NVRkJTU3hEUVVGRE8xbEJRemxHTEVsQlFVa3NWVUZCVlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NTMEZCU3l4WlFVRlpPMmRDUVVGRkxEQkNRVUV3UWl4SFFVRkhMRWxCUVVrc1EwRkJRenRUUVVOcVJ6dFJRVU5FTEVsQlFVa3NNRUpCUVRCQ0xFVkJRVVU3V1VGRE5VSXNUVUZCVFN4TFFVRkxMRWRCUVVjc2MwSkJRVmNzUTBGQlRTeE5RVUZOTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1dVRkRiRVFzVFVGQlRTeFJRVUZSTEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTTdXVUZETDBRc1NVRkJTU3hSUVVGUkxFVkJRVVU3WjBKQlExWXNTVUZCU1N4UlFVRlJMRmxCUVZrc1MwRkJTeXhGUVVGRk8yOUNRVU16UWl4VlFVRlZMRWRCUVVjc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXp0cFFrRkRka003TzI5Q1FVRk5MRlZCUVZVc1IwRkJSeXhSUVVGUkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNN1lVRkRjRVE3VTBGRFNqdFJRVU5FTEU5QlFVOHNWVUZCVlN4RFFVRkRPMGxCUTNSQ0xFTkJRVU03UTBGRFNqdEJRWEJSUkN3d1FrRnZVVU1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgVmFsdWVFcnJvciBleHRlbmRzIEVycm9yIHtcbn1cbmV4cG9ydHMuVmFsdWVFcnJvciA9IFZhbHVlRXJyb3I7XG5jbGFzcyBUeXBlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG59XG5leHBvcnRzLlR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbmNsYXNzIENvbmZpZ3VyYXRpb25FcnJvciBleHRlbmRzIEVycm9yIHtcbn1cbmV4cG9ydHMuQ29uZmlndXJhdGlvbkVycm9yID0gQ29uZmlndXJhdGlvbkVycm9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUlhKeWIzSnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlzYVdJdlJYSnliM0p6TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJUMEVzVFVGQllTeFZRVUZYTEZOQlFWRXNTMEZCU3p0RFFVRkpPMEZCUVhwRExHZERRVUY1UXp0QlFWTjZReXhOUVVGaExGTkJRVlVzVTBGQlVTeExRVUZMTzBOQlFVazdRVUZCZUVNc09FSkJRWGRETzBGQlZYaERMRTFCUVdFc2EwSkJRVzFDTEZOQlFWRXNTMEZCU3p0RFFVRkpPMEZCUVdwRUxHZEVRVUZwUkNKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IFdhdGNoZWRfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9XYXRjaGVkXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IG9uX2NoYW5nZV8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm9uLWNoYW5nZVwiKSk7XG5jbGFzcyBGaWVsZCB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgICAgICB0aGlzLmZpZWxkcyA9IFtdO1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgIH1cbiAgICBhZGRGaWVsZChmaWVsZCkge1xuICAgICAgICBpZiAodGhpcy5maWVsZHMuaW5jbHVkZXMoZmllbGQpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoZmllbGQub2JqZWN0ICYmIGZpZWxkLm9iamVjdC5pc0JET01vZGVsKVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMucHJveHlmeVZhbHVlKGZpZWxkLnZhbHVlT2YoKSk7XG4gICAgICAgIGlmIChmaWVsZCBpbnN0YW5jZW9mIFdhdGNoZWRfMS5XYXRjaGVkICYmIGZpZWxkLnN1Yk9iamVjdClcbiAgICAgICAgICAgIHRoaXMucmVkZWZpbmVWYWx1ZShmaWVsZC5zdWJPYmplY3QpO1xuICAgICAgICB0aGlzLnJlZGVmaW5lVmFsdWUoZmllbGQpO1xuICAgICAgICB0aGlzLmZpZWxkcy5wdXNoKGZpZWxkKTtcbiAgICB9XG4gICAgcmVtb3ZlRmllbGQoZmllbGQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkcy5pbmNsdWRlcyhmaWVsZCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChmaWVsZCBpbnN0YW5jZW9mIFdhdGNoZWRfMS5XYXRjaGVkICYmIGZpZWxkLnN1Yk9iamVjdClcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZVZhbHVlKGZpZWxkLnN1Yk9iamVjdCk7XG4gICAgICAgIHRoaXMucmVzdG9yZVZhbHVlKGZpZWxkKTtcbiAgICAgICAgdXRpbF8xLnJlbW92ZUVsZW1lbnRGcm9tQXJyYXkodGhpcy5maWVsZHMsIGZpZWxkKTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLmZpZWxkcylcbiAgICAgICAgICAgIGZpZWxkLnNldFZhbHVlKHZhbHVlKTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHJlZGVmaW5lVmFsdWUoZmllbGQpIHtcbiAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhKGZpZWxkLCBcInZhbHVlXCIsIGZpZWxkLnZhbHVlT2YoKSk7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGZpZWxkLCBcInZhbHVlXCIpO1xuICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KGZpZWxkLCBcInZhbHVlXCIsIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhhdC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHV0aWxfMS5nZXRQcm94eVRhcmdldCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGhhdFZhbHVlID0gdXRpbF8xLmdldFByb3h5VGFyZ2V0KHRoYXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdGhhdFZhbHVlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgdGhhdC52YWx1ZSA9IHRoYXQucHJveHlmeVZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXN0b3JlVmFsdWUoZmllbGQpIHtcbiAgICAgICAgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShmaWVsZCwgXCJ2YWx1ZVwiKTtcbiAgICAgICAgZmllbGQuc2V0VmFsdWUodXRpbF8xLmdldFByb3h5VGFyZ2V0KHRoaXMudmFsdWUpKTtcbiAgICB9XG4gICAgcHJveHlmeVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5IHx8IHV0aWxfMS5pc09iamVjdCh2YWx1ZSkgJiYgIXZhbHVlLmlzQkRPTW9kZWwpIHtcbiAgICAgICAgICAgIGxldCBpc1NoYWxsb3cgPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLmZpZWxkcykge1xuICAgICAgICAgICAgICAgIGlmICghZmllbGQuaXNTaGFsbG93KSB7XG4gICAgICAgICAgICAgICAgICAgIGlzU2hhbGxvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IG9uX2NoYW5nZV8xLmRlZmF1bHQudGFyZ2V0KHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBvbl9jaGFuZ2VfMS5kZWZhdWx0KHZhbHVlLCAocGF0aCwgY2hhbmdlZFZhbHVlLCBwcmV2aW91c1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGF0aFNpemUgPSBwYXRoLnNwbGl0KFwiLlwiKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLmZpZWxkcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWZpZWxkLmlzU2hhbGxvdyB8fCBmaWVsZC5pc1NoYWxsb3cgJiYgcGF0aFNpemUgPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQucHJveHlIYW5kbGVyKHBhdGgsIGNoYW5nZWRWYWx1ZSwgcHJldmlvdXNWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7IGlzU2hhbGxvdyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufVxuZXhwb3J0cy5GaWVsZCA9IEZpZWxkO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUm1sbGJHUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMnhwWWk5R2FXVnNaQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkZRU3c0UTBGQk1rTTdRVUZGTTBNc01FTkJRVzFHTzBGQlEyNUdMR3RFUVVFMlJEdEJRVU0zUkN4clJVRkJhVU03UVVGcFFtcERMRTFCUVdFc1MwRkJTenRKUVc5RFpDeFpRVUZaTEUxQlFWTXNSVUZCUlN4UlFVRlhPMUZCUmpGQ0xGZEJRVTBzUjBGQmFVTXNSVUZCUlN4RFFVRkRPMUZCUnpsRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUTNKQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRPMGxCUXpkQ0xFTkJRVU03U1VGVlRTeFJRVUZSTEVOQlFVTXNTMEZCTkVJN1VVRkRlRU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU03V1VGQlJTeFBRVUZQTzFGQlJYaERMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzU1VGQlpTeExRVUZMTEVOQlFVTXNUVUZCVHl4RFFVRkRMRlZCUVZVN1dVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEZWtjc1NVRkJTU3hMUVVGTExGbEJRVmtzYVVKQlFVOHNTVUZCU1N4TFFVRkxMRU5CUVVNc1UwRkJVenRaUVVGRkxFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRM0pHTEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRE1VSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETlVJc1EwRkJRenRKUVZWTkxGZEJRVmNzUTBGQlF5eExRVUUwUWp0UlFVTXpReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRE8xbEJRVVVzVDBGQlR6dFJRVU42UXl4SlFVRkpMRXRCUVVzc1dVRkJXU3hwUWtGQlR5eEpRVUZKTEV0QlFVc3NRMEZCUXl4VFFVRlRPMWxCUVVVc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkRjRVlzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVONlFpdzJRa0ZCYzBJc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXk5RExFTkJRVU03U1VGVFRTeFJRVUZSTEVOQlFVTXNTMEZCWjBNN1VVRkROVU1zUzBGQlN5eE5RVUZOTEV0QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUVHRaUVVGRkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRNMFFzUTBGQlF6dEpRVkZOTEU5QlFVODdVVUZEVml4UFFVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03U1VGRGRFSXNRMEZCUXp0SlFWZFBMR0ZCUVdFc1EwRkJReXhMUVVFMFFqdFJRVU01UXl4cFEwRkJjMElzUTBGQlV5eExRVUZMTEVWQlFVVXNUMEZCVHl4RlFVRkZMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEyaEZMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU5zUWl4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTjJReXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEV0QlFVc3NSVUZCUlN4UFFVRlBMRVZCUVVVN1dVRkRia01zUjBGQlJ6dG5Ra0ZEUXl4UFFVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03V1VGRGRFSXNRMEZCUXp0WlFVTkVMRWRCUVVjc1EwRkJReXhMUVVGWE8yZENRVU5ZTEV0QlFVc3NSMEZCUnl4eFFrRkJZeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzJkQ1FVTTVRaXhOUVVGTkxGTkJRVk1zUjBGQlJ5eHhRa0ZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dG5Ra0ZETjBNc1NVRkJTU3hMUVVGTExFdEJRVXNzVTBGQlV6dHZRa0ZCUlN4UFFVRlBPMmRDUVVOb1F5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZETVVNc1EwRkJRenRaUVVORUxGbEJRVmtzUlVGQlJTeEpRVUZKTzFsQlEyeENMRlZCUVZVc1JVRkJSU3hKUVVGSk8xTkJRMjVDTEVOQlFVTXNRMEZCUXp0SlFVTlFMRU5CUVVNN1NVRlRUeXhaUVVGWkxFTkJRVU1zUzBGQk5FSTdVVUZETjBNc1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRka01zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4eFFrRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXk5RExFTkJRVU03U1VGVlR5eFpRVUZaTEVOQlFVTXNTMEZCV1R0UlFVTTNRaXhKUVVGSkxFdEJRVXNzV1VGQldTeExRVUZMTEVsQlFVa3NaVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVThzUzBGQlRTeERRVUZETEZWQlFWVXNSVUZCUlR0WlFVTjJSU3hKUVVGSkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZEY2tJc1MwRkJTeXhOUVVGTkxFdEJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMmRDUVVNM1FpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1JVRkJSVHR2UWtGRGJFSXNVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJRenR2UWtGRGJFSXNUVUZCVFR0cFFrRkRWRHRoUVVOS08xbEJRMFFzUzBGQlN5eEhRVUZITEcxQ1FVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlF5OUNMRTlCUVU4c2JVSkJRVkVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1dVRkJXU3hGUVVGRkxHRkJRV0VzUlVGQlJTeEZRVUZGTzJkQ1FVTjZSQ3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF6dG5Ra0ZEZUVNc1MwRkJTeXhOUVVGTkxFdEJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMjlDUVVNM1FpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1NVRkJTU3hMUVVGTExFTkJRVU1zVTBGQlV5eEpRVUZKTEZGQlFWRXNTVUZCU1N4RFFVRkRMRVZCUVVVN2QwSkJRM1JFTEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGUkxGbEJRVmtzUlVGQlVTeGhRVUZoTEVOQlFVTXNRMEZCUXp0eFFrRkRja1U3YVVKQlEwbzdXVUZEVEN4RFFVRkRMRVZCUVVVc1JVRkJSU3hUUVVGVExFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzSkNPMUZCUTBRc1QwRkJUeXhMUVVGTExFTkJRVU03U1VGRGFrSXNRMEZCUXp0RFFVTktPMEZCYmt0RUxITkNRVzFMUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZnJhbWV3b3JrXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9mcmFtZXdvcmtcIik7XG5jbGFzcyBNb2RlbFJlZ2lzdHJ5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tb2RlbHMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFNb2RlbFJlZ2lzdHJ5Lmluc3RhbmNlKVxuICAgICAgICAgICAgTW9kZWxSZWdpc3RyeS5pbnN0YW5jZSA9IG5ldyBNb2RlbFJlZ2lzdHJ5KCk7XG4gICAgICAgIHJldHVybiBNb2RlbFJlZ2lzdHJ5Lmluc3RhbmNlO1xuICAgIH1cbiAgICByZWdpc3Rlcihtb2RlbCkge1xuICAgICAgICB0aGlzLm1vZGVscy5zZXQoYCR7bW9kZWwuY2xhc3NOYW1lfSR7bW9kZWwuaWR9YCwgbW9kZWwpO1xuICAgIH1cbiAgICB1bnJlZ2lzdGVyKG1vZGVsKSB7XG4gICAgICAgIHRoaXMubW9kZWxzLmRlbGV0ZShgJHttb2RlbC5jbGFzc05hbWV9JHttb2RlbC5pZH1gKTtcbiAgICB9XG4gICAgZ2V0TW9kZWxCeUlkKGlkLCBjb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbHMuZ2V0KGAke3RoaXMuZ2V0Q2xhc3NOYW1lKGNvbnN0cnVjdG9yKX0ke2lkfWApO1xuICAgIH1cbiAgICBnZXRNb2RlbHNCeUF0dHJpYnV0ZXMoYXR0cmlidXRlcykge1xuICAgICAgICBjb25zdCBtb2RlbHMgPSBbXTtcbiAgICAgICAgdGhpcy5tb2RlbHMuZm9yRWFjaCgobW9kZWwpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBtb2RlbCkgfHwgZWxlbWVudCAhPT0gbW9kZWxba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW9kZWxzLnB1c2gobW9kZWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1vZGVscztcbiAgICB9XG4gICAgdXBkYXRlSUQob2xkSUQsIGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gdGhpcy5tb2RlbHMuZ2V0KGAke3RoaXMuZ2V0Q2xhc3NOYW1lKGNvbnN0cnVjdG9yKX0ke29sZElEfWApO1xuICAgICAgICBpZiAoIW1vZGVsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLm1vZGVscy5kZWxldGUoYCR7dGhpcy5nZXRDbGFzc05hbWUoY29uc3RydWN0b3IpfSR7b2xkSUR9YCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIobW9kZWwpO1xuICAgIH1cbiAgICBnZXRNb2RlbHNCeUNvbmRpdGlvbihmdW5jLCBtb2RlID0gXCJhbGxcIikge1xuICAgICAgICBjb25zdCBtb2RlbHMgPSBbXTtcbiAgICAgICAgbGV0IGxhc3RNb2RlbDtcbiAgICAgICAgZm9yIChjb25zdCBtb2RlbCBvZiB0aGlzLm1vZGVscy52YWx1ZXMoKSkge1xuICAgICAgICAgICAgaWYgKGZ1bmMobW9kZWwpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09IFwiZmlyc3RcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGVsO1xuICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSBcImFsbFwiKVxuICAgICAgICAgICAgICAgICAgICBtb2RlbHMucHVzaChtb2RlbCk7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09IFwibGFzdFwiKVxuICAgICAgICAgICAgICAgICAgICBsYXN0TW9kZWwgPSBtb2RlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW9kZSA9PT0gXCJsYXN0XCIgPyBsYXN0TW9kZWwgOiBtb2RlbHM7XG4gICAgfVxuICAgIGdldENsYXNzTmFtZShjb25zdHJ1Y3Rvcikge1xuICAgICAgICBsZXQgY2xhc3NOYW1lO1xuICAgICAgICBpZiAoZnJhbWV3b3JrXzEuaXNCYXNlQ29uc3RydWN0b3IoY29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjb25zdHJ1Y3Rvci5jbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoXCJjbGFzc05hbWVcIiBpbiBjb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY29uc3RydWN0b3IuY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjb25zdHJ1Y3RvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNvbnN0cnVjdG9yLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfVxufVxuZXhwb3J0cy5Nb2RlbFJlZ2lzdHJ5ID0gTW9kZWxSZWdpc3RyeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVRXOWtaV3hTWldkcGMzUnllUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2YkdsaUwwMXZaR1ZzVW1WbmFYTjBjbmt1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkRRU3h2UkVGQmVVUTdRVUZYZWtRc1RVRkJZU3hoUVVGaE8wbEJhVU4wUWp0UlFXUlJMRmRCUVUwc1IwRkJNRUlzU1VGQlNTeEhRVUZITEVWQlFVVXNRMEZCUXp0SlFXTXhRaXhEUVVGRE8wbEJUR3hDTEUxQlFVMHNRMEZCUXl4WFFVRlhPMUZCUTNKQ0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNVVUZCVVR0WlFVRkZMR0ZCUVdFc1EwRkJReXhSUVVGUkxFZEJRVWNzU1VGQlNTeGhRVUZoTEVWQlFVVXNRMEZCUXp0UlFVTXhSU3hQUVVGUExHRkJRV0VzUTBGQlF5eFJRVUZSTEVOQlFVTTdTVUZEYkVNc1EwRkJRenRKUVZWTkxGRkJRVkVzUTBGQlF5eExRVUZsTzFGQlF6TkNMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRk5CUVZNc1IwRkJSeXhMUVVGTExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkROVVFzUTBGQlF6dEpRVk5OTEZWQlFWVXNRMEZCUXl4TFFVRmxPMUZCUXpkQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVONFJDeERRVUZETzBsQlZVMHNXVUZCV1N4RFFVRTJReXhGUVVGVkxFVkJRVVVzVjBGQll6dFJRVU4wUml4UFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhYUVVGWExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCYlVNc1EwRkJRenRKUVVOMlJ5eERRVUZETzBsQlZVMHNjVUpCUVhGQ0xFTkJRVU1zVlVGQmRVTTdVVUZEYUVVc1RVRkJUU3hOUVVGTkxFZEJRV1VzUlVGQlJTeERRVUZETzFGQlF6bENMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRVZCUVVVN1dVRkRNVUlzUzBGQlN5eE5RVUZOTEVkQlFVY3NTVUZCU1N4VlFVRlZMRVZCUVVVN1owSkJRekZDTEVsQlFVa3NWVUZCVlN4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdHZRa0ZEYUVNc1RVRkJUU3hQUVVGUExFZEJRVWNzVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMjlDUVVOb1F5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzVDBGQlR5eExRVUZ6UWl4TFFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3ZDBKQlF6ZEVMRTlCUVU4N2NVSkJRMVk3YVVKQlEwbzdZVUZEU2p0WlFVTkVMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEZGtJc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFNDeFBRVUZQTEUxQlFVMHNRMEZCUXp0SlFVTnNRaXhEUVVGRE8wbEJXVTBzVVVGQlVTeERRVUZ4UWl4TFFVRmpMRVZCUVVVc1YwRkJZenRSUVVNNVJDeE5RVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1YwRkJWeXhEUVVGRExFZEJRVWNzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTXpSU3hKUVVGSkxFTkJRVU1zUzBGQlN6dFpRVUZGTEU5QlFVODdVVUZEYmtJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGZEJRVmNzUTBGQlF5eEhRVUZITEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRhRVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVONlFpeERRVUZETzBsQlpVMHNiMEpCUVc5Q0xFTkJRVU1zU1VGQmEwTXNSVUZCUlN4UFFVRnBReXhMUVVGTE8xRkJRMnhITEUxQlFVMHNUVUZCVFN4SFFVRmxMRVZCUVVVc1EwRkJRenRSUVVNNVFpeEpRVUZKTEZOQlFTdENMRU5CUVVNN1VVRkRjRU1zUzBGQlN5eE5RVUZOTEV0QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTzFsQlEzUkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzJkQ1FVTmlMRWxCUVVrc1NVRkJTU3hMUVVGTExFOUJRVTg3YjBKQlFVVXNUMEZCVHl4TFFVRkxMRU5CUVVNN1owSkJRMjVETEVsQlFVa3NTVUZCU1N4TFFVRkxMRXRCUVVzN2IwSkJRVVVzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRuUWtGRGRrTXNTVUZCU1N4SlFVRkpMRXRCUVVzc1RVRkJUVHR2UWtGQlJTeFRRVUZUTEVkQlFVY3NTMEZCU3l4RFFVRkRPMkZCUXpGRE8xTkJRMG83VVVGRFJDeFBRVUZQTEVsQlFVa3NTMEZCU3l4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUTJoRUxFTkJRVU03U1VGVlR5eFpRVUZaTEVOQlFVTXNWMEZCTmtNN1VVRkRPVVFzU1VGQlNTeFRRVUZwUWl4RFFVRkRPMUZCUTNSQ0xFbEJRVWtzTmtKQlFXbENMRU5CUVVNc1YwRkJWeXhEUVVGRExFVkJRVVU3V1VGRGFFTXNVMEZCVXl4SFFVRkhMRmRCUVZjc1EwRkJReXhUUVVGVExFTkJRVU03VTBGRGNrTTdZVUZCVFN4SlFVRkpMRmRCUVZjc1NVRkJTU3hYUVVGWExFVkJRVVU3V1VGRGJrTXNVMEZCVXl4SFFVRkhMRmRCUVZjc1EwRkJReXhUUVVGVExFTkJRVU03VTBGRGNrTTdZVUZCVFN4SlFVRkpMRTlCUVU4c1YwRkJWeXhMUVVGTExGVkJRVlVzUlVGQlJUdFpRVU14UXl4VFFVRlRMRWRCUVVjc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF6dFRRVU5vUXpzN1dVRkJUU3hUUVVGVExFZEJRVk1zVjBGQldTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNN1VVRkRka1FzVDBGQlR5eFRRVUZUTEVOQlFVTTdTVUZEY2tJc1EwRkJRenREUVVOS08wRkJNVXBFTEhORFFUQktReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBNb2RpZmljYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCB0eXBlID0gXCJkZWxldGVcIikge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxufVxuZXhwb3J0cy5Nb2RpZmljYXRpb24gPSBNb2RpZmljYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lUVzlrYVdacFkyRjBhVzl1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5c2FXSXZUVzlrYVdacFkyRjBhVzl1TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJVVUVzVFVGQllTeFpRVUZaTzBsQmJVSnlRaXhaUVVGWkxFdEJRVmNzUlVGQlJTeFBRVUZ4UWl4UlFVRlJPMUZCUTJ4RUxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTI1Q0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVMHNTVUZCU1N4RFFVRkRPMGxCUTNoQ0xFTkJRVU03U1VGUlRTeFBRVUZQTzFGQlExWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8wbEJRM1JDTEVOQlFVTTdTVUZSVFN4UlFVRlJMRU5CUVVNc1MwRkJWVHRSUVVOMFFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVOMlFpeERRVUZETzBOQlEwbzdRVUV6UTBRc2IwTkJNa05ESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IE1vZGlmaWNhdGlvbl8xID0gcmVxdWlyZShcIn5iZG8vbGliL01vZGlmaWNhdGlvblwiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IGVudmlyb25tZW50XzEgPSByZXF1aXJlKFwifmJkby91dGlscy9lbnZpcm9ubWVudFwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBFcnJvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9FcnJvcnNcIik7XG5jb25zdCBvbl9jaGFuZ2VfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJvbi1jaGFuZ2VcIikpO1xuY2xhc3MgUHJvcGVydHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHksIHBhcmFtcykge1xuICAgICAgICB0aGlzLmlzU2hhbGxvdyA9IHRydWU7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgICAgIGxldCBwYXJhbWV0ZXJzID0ge307XG4gICAgICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnBhcmFtcylcbiAgICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbXMucGFyYW1zO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHBhcmFtZXRlcnMpO1xuICAgICAgICBjb25zdCBjYXBpdGFsaXplZFByb3AgPSB1dGlsXzEudWNGaXJzdChwcm9wZXJ0eSk7XG4gICAgICAgIGNvbnN0IG9uVHlwZUNoZWNrRmFpbCA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfVR5cGVDaGVja0ZhaWxgO1xuICAgICAgICBjb25zdCBvblR5cGVDaGVjayA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfVR5cGVDaGVja2A7XG4gICAgICAgIGNvbnN0IG9uVHlwZUNoZWNrU3VjY2VzcyA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfVR5cGVDaGVja1N1Y2Nlc3NgO1xuICAgICAgICB0aGlzLm9uVHlwZUNoZWNrRmFpbCA9IHBhcmFtZXRlcnMgPyBwYXJhbWV0ZXJzLm9uVHlwZUNoZWNrRmFpbCB8fCBvblR5cGVDaGVja0ZhaWwgOiBvblR5cGVDaGVja0ZhaWw7XG4gICAgICAgIHRoaXMub25UeXBlQ2hlY2sgPSBwYXJhbWV0ZXJzID8gcGFyYW1ldGVycy5vblR5cGVDaGVjayB8fCBvblR5cGVDaGVjayA6IG9uVHlwZUNoZWNrO1xuICAgICAgICB0aGlzLm9uVHlwZUNoZWNrU3VjY2VzcyA9IHBhcmFtZXRlcnMgPyBwYXJhbWV0ZXJzLm9uVHlwZUNoZWNrU3VjY2VzcyB8fCBvblR5cGVDaGVja1N1Y2Nlc3MgOiBvblR5cGVDaGVja1N1Y2Nlc3M7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZG9TZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IHRoaXMucHJvcGVydHkudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKCF1dGlsXzEuaXNQcm94eSh2YWx1ZSkgJiYgdGhpcy5zYXZlSW5Mb2NhbFN0b3JhZ2UgJiYgdXRpbF8xLmlzRnVuY3Rpb24odGhpcy5vYmplY3QuZ2V0TmFtZXNwYWNlZFN0b3JhZ2UpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMub2JqZWN0LmdldE5hbWVzcGFjZWRTdG9yYWdlKHN0cmluZ0tleSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICB0eXBlR3VhcmQodmFsdWUpIHtcbiAgICAgICAgbGV0IHZhbHVlVG9QYXNzID0gdmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGlmaWNhdGlvbl8xLk1vZGlmaWNhdGlvbilcbiAgICAgICAgICAgIHZhbHVlVG9QYXNzID0gdmFsdWUudmFsdWVPZigpO1xuICAgICAgICBjb25zdCBkZXNpZ25UeXBlID0gbWV0YWRhdGFfMS5nZXREZXNpZ25UeXBlKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5LnRvU3RyaW5nKCkpO1xuICAgICAgICBjb25zdCB0eXBlRXJyb3IgPSBuZXcgRXJyb3JzXzEuVHlwZUVycm9yKGAke3ZhbHVlVG9QYXNzfSBpcyBub3QgdHlwZSBvZiAke2Rlc2lnblR5cGUuY2xhc3NOYW1lIHx8IGRlc2lnblR5cGUubmFtZX1gKTtcbiAgICAgICAgY29uc3QgaWR4U3RydWN0T2JqID0gdGhpcy5vYmplY3Q7XG4gICAgICAgIGxldCBlcnJvcjtcbiAgICAgICAgaWYgKCF0aGlzLm51bGxhYmxlICYmICh2YWx1ZVRvUGFzcyA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlVG9QYXNzID09PSBudWxsKSlcbiAgICAgICAgICAgIGVycm9yID0gdHlwZUVycm9yO1xuICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICBpZiAodXRpbF8xLmlzUHJpbWl0aXZlKHZhbHVlVG9QYXNzKSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWVUb1Bhc3MgIT09IGRlc2lnblR5cGUubmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5udWxsYWJsZSB8fCAhKHZhbHVlVG9QYXNzID09PSB1bmRlZmluZWQgfHwgdmFsdWVUb1Bhc3MgPT09IG51bGwpKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSB0eXBlRXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoISh2YWx1ZVRvUGFzcyBpbnN0YW5jZW9mIGRlc2lnblR5cGUpKVxuICAgICAgICAgICAgICAgIGVycm9yID0gdHlwZUVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZXJyb3IgJiYgdXRpbF8xLmlzRnVuY3Rpb24oaWR4U3RydWN0T2JqW3RoaXMub25UeXBlQ2hlY2tdKSlcbiAgICAgICAgICAgIGVycm9yID0gaWR4U3RydWN0T2JqW3RoaXMub25UeXBlQ2hlY2tdKHZhbHVlVG9QYXNzKTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAodXRpbF8xLmlzRnVuY3Rpb24oaWR4U3RydWN0T2JqW3RoaXMub25UeXBlQ2hlY2tGYWlsXSkpIHtcbiAgICAgICAgICAgICAgICBpZHhTdHJ1Y3RPYmpbdGhpcy5vblR5cGVDaGVja0ZhaWxdKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHV0aWxfMS5pc0Z1bmN0aW9uKGlkeFN0cnVjdE9iai5vblR5cGVDaGVja0ZhaWwpKSB7XG4gICAgICAgICAgICAgICAgaWR4U3RydWN0T2JqLm9uVHlwZUNoZWNrRmFpbChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodXRpbF8xLmlzRnVuY3Rpb24oaWR4U3RydWN0T2JqW3RoaXMub25UeXBlQ2hlY2tTdWNjZXNzXSkpXG4gICAgICAgICAgICBpZHhTdHJ1Y3RPYmpbdGhpcy5vblR5cGVDaGVja1N1Y2Nlc3NdKCk7XG4gICAgICAgIHJldHVybiAhKEJvb2xlYW4oZXJyb3IpLnZhbHVlT2YoKSk7XG4gICAgfVxuICAgIHByb3h5SGFuZGxlcihfcGF0aCwgX2NoYW5nZWRWYWwsIF9wcmV2VmFsKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuZG9TZXRWYWx1ZShvbl9jaGFuZ2VfMS5kZWZhdWx0LnRhcmdldCh2YWx1ZSksIGZhbHNlKTtcbiAgICB9XG4gICAgc2hvdWxkRG9TZXRWYWx1ZSh2YWx1ZSwgc2tpcEd1YXJkID0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuICEodmFsdWUgPT09IHRoaXMub3duVmFsdWUgfHwgIXNraXBHdWFyZCAmJiAhdGhpcy5kaXNhYmxlVHlwZUd1YXJkICYmICF0aGlzLnR5cGVHdWFyZCh2YWx1ZSkpO1xuICAgIH1cbiAgICBkb1NldFZhbHVlKHZhbHVlLCBtb2RpZnlWYWx1ZSA9IHRydWUsIHNraXBHdWFyZCA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdGhpcy5zaG91bGREb1NldFZhbHVlKHZhbHVlLCBza2lwR3VhcmQpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgdmFsdWVUb1Bhc3M7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGlmaWNhdGlvbl8xLk1vZGlmaWNhdGlvbikge1xuICAgICAgICAgICAgdmFsdWVUb1Bhc3MgPSB2YWx1ZS52YWx1ZU9mKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdmFsdWVUb1Bhc3MgPSB2YWx1ZTtcbiAgICAgICAgaWYgKG1vZGlmeVZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBwcm94eWZpZWQgPSB0aGlzLnByb3h5ZnlWYWx1ZSh2YWx1ZVRvUGFzcyk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gcHJveHlmaWVkO1xuICAgICAgICAgICAgdGhpcy5vd25WYWx1ZSA9IHZhbHVlVG9QYXNzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNob3VsZFVwZGF0ZU5zU3RvcmFnZSgpICYmIHV0aWxfMS5pc0Z1bmN0aW9uKHRoaXMub2JqZWN0LnNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKSkge1xuICAgICAgICAgICAgdGhpcy5vYmplY3Quc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2UodGhpcy5wcm9wZXJ0eS50b1N0cmluZygpLCB2YWx1ZVRvUGFzcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJveHlmeVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5IHx8IHV0aWxfMS5pc09iamVjdCh2YWx1ZSkgJiYgIXZhbHVlLmlzQkRPTW9kZWwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gb25fY2hhbmdlXzEuZGVmYXVsdC50YXJnZXQodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIG9uX2NoYW5nZV8xLmRlZmF1bHQodmFsdWUsIChwYXRoLCBjaGFuZ2VkVmFsLCBwcmV2VmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJveHlIYW5kbGVyUmVwbGFjZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm94eUhhbmRsZXJSZXBsYWNlbWVudChwYXRoLCBjaGFuZ2VkVmFsLCBwcmV2VmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3h5SGFuZGxlcihwYXRoLCBjaGFuZ2VkVmFsLCBwcmV2VmFsKTtcbiAgICAgICAgICAgIH0sIHsgaXNTaGFsbG93OiB0aGlzLmlzU2hhbGxvdyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHNob3VsZFVwZGF0ZU5zU3RvcmFnZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNhdmVJbkxvY2FsU3RvcmFnZSB8fCAhZW52aXJvbm1lbnRfMS5pc0Jyb3dzZXIoKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3Qgc3RyaW5nS2V5ID0gdGhpcy5wcm9wZXJ0eS50b1N0cmluZygpO1xuICAgICAgICBjb25zdCBrZXlTaG91bGRCZVVwZGF0ZWQgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMub2JqZWN0LCBcImtleVNob3VsZEJlVXBkYXRlZFwiKSB8fCB7fTtcbiAgICAgICAgaWYgKGtleVNob3VsZEJlVXBkYXRlZFtzdHJpbmdLZXldKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICh1dGlsXzEuaXNGdW5jdGlvbih0aGlzLm9iamVjdC5nZXROYW1lc3BhY2VkU3RvcmFnZSkgJiZcbiAgICAgICAgICAgIHRoaXMub2JqZWN0LmdldE5hbWVzcGFjZWRTdG9yYWdlKHN0cmluZ0tleSkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YSh0aGlzLm9iamVjdCwgXCJrZXlTaG91bGRCZVVwZGF0ZWRcIiwgT2JqZWN0LmFzc2lnbihrZXlTaG91bGRCZVVwZGF0ZWQsIHsgW3N0cmluZ0tleV06IHRydWUgfSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEJvb2xlYW4obWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLm9iamVjdCwgXCJjb25zdHJ1Y3Rpb25Db21wbGV0ZVwiKSk7XG4gICAgfVxufVxuZXhwb3J0cy5Qcm9wZXJ0eSA9IFByb3BlcnR5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVUhKdmNHVnlkSGt1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJ4cFlpOVFjbTl3WlhKMGVTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGRFFTeDNSRUZCY1VRN1FVRkRja1FzYTBSQlFXbEdPMEZCUTJwR0xIZEVRVUZ0UkR0QlFVTnVSQ3d3UTBGQmMwWTdRVUZGZEVZc05FTkJRVFJETzBGQlF6VkRMR3RGUVVGcFF6dEJRVEpGYWtNc1RVRkJZU3hSUVVGUk8wbEJjVWRxUWl4WlFVRlpMRTFCUVZNc1JVRkJSU3hSUVVGWExFVkJRVVVzVFVGQlowUTdVVUZ5UWpkRkxHTkJRVk1zUjBGQldTeEpRVUZKTEVOQlFVTTdVVUZ6UWpkQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUTNKQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzVlVGQlZTeEhRVUZ2UWl4RlFVRkZMRU5CUVVNN1VVRkZja01zU1VGQlNTeE5RVUZOTEVsQlFVa3NUVUZCVFN4RFFVRkRMRTFCUVUwN1dVRkJSU3hWUVVGVkxFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTjRSQ3hOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVWb1F5eE5RVUZOTEdWQlFXVXNSMEZCUnl4alFVRlBMRU5CUVVNc1VVRkJhMElzUTBGQlF5eERRVUZETzFGQlEzQkVMRTFCUVUwc1pVRkJaU3hIUVVGSExFdEJRVXNzWlVGQlpTeGxRVUZsTEVOQlFVTTdVVUZETlVRc1RVRkJUU3hYUVVGWExFZEJRVWNzUzBGQlN5eGxRVUZsTEZkQlFWY3NRMEZCUXp0UlFVTndSQ3hOUVVGTkxHdENRVUZyUWl4SFFVRkhMRXRCUVVzc1pVRkJaU3hyUWtGQmEwSXNRMEZCUXp0UlFVVnNSU3hKUVVGSkxFTkJRVU1zWlVGQlpTeEhRVUZITEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExHVkJRV1VzU1VGQlNTeGxRVUZsTEVOQlFVTXNRMEZCUXl4RFFVRkRMR1ZCUVdVc1EwRkJRenRSUVVOd1J5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETEZkQlFWY3NTVUZCU1N4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF6dFJRVU53Uml4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVkQlFVY3NWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhWUVVGVkxFTkJRVU1zYTBKQlFXdENMRWxCUVVrc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXl4RFFVRkRMR3RDUVVGclFpeERRVUZETzBsQlEzQklMRU5CUVVNN1NVRlRUU3hSUVVGUkxFTkJRVU1zUzBGQlowTTdVVUZETlVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZMTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRha01zUTBGQlF6dEpRVlZOTEU5QlFVODdVVUZEVml4TlFVRk5MRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUlRORExFbEJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkZka0lzU1VGQlNTeERRVUZETEdOQlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zYTBKQlFXdENMRWxCUVVrc2FVSkJRVlVzUTBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVHl4RFFVRkRMRzlDUVVGdlFpeERRVUZETEVWQlFVVTdXVUZEYmtjc1MwRkJTeXhIUVVGVExFbEJRVWtzUTBGQlF5eE5RVUZQTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVMEZET1VRN1VVRkRSQ3hQUVVGUExFdEJRVXNzUTBGQlF6dEpRVU5xUWl4RFFVRkRPMGxCVlUwc1UwRkJVeXhEUVVGRExFdEJRV2RETzFGQlF6ZERMRWxCUVVrc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU40UWl4SlFVRkpMRXRCUVVzc1dVRkJXU3d5UWtGQldUdFpRVUZGTEZkQlFWY3NSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGRmFrVXNUVUZCVFN4VlFVRlZMRWRCUVVjc2QwSkJRV0VzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTjRSU3hOUVVGTkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEd0Q1FVRlRMRU5CUVVNc1IwRkJSeXhYUVVGWExHMUNRVUZ0UWl4VlFVRlZMRU5CUVVNc1UwRkJVeXhKUVVGSkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpWSExFMUJRVTBzV1VGQldTeEhRVUZ0UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJSV3BFTEVsQlFVa3NTMEZCU3l4RFFVRkRPMUZCUlZZc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVsQlFVa3NRMEZCUXl4WFFVRlhMRXRCUVVzc1UwRkJVeXhKUVVGSkxGZEJRVmNzUzBGQlN5eEpRVUZKTEVOQlFVTTdXVUZCUlN4TFFVRkxMRWRCUVVjc1UwRkJVeXhEUVVGRE8xRkJSVGRHTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1dVRkRVaXhKUVVGSkxHdENRVUZYTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUVVVN1owSkJRekZDTEVsQlFVa3NUMEZCVHl4WFFVRlhMRXRCUVVzc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNSVUZCUlR0dlFrRkRkRVFzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1EwRkJReXhEUVVGRExGZEJRVmNzUzBGQlN5eFRRVUZUTEVsQlFVa3NWMEZCVnl4TFFVRkxMRWxCUVVrc1EwRkJRenQzUWtGQlJTeExRVUZMTEVkQlFVY3NVMEZCVXl4RFFVRkRPMmxDUVVOcVJ6dGhRVU5LTzJsQ1FVRk5MRWxCUVVrc1EwRkJReXhEUVVGRExGZEJRVmNzV1VGQldTeFZRVUZWTEVOQlFVTTdaMEpCUVVVc1MwRkJTeXhIUVVGSExGTkJRVk1zUTBGQlF6dFRRVU4wUlR0UlFVZEVMRWxCUVVrc1EwRkJReXhMUVVGTExFbEJRVWtzYVVKQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFsQlFVVXNTMEZCU3l4SFFVRkhMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1VVRkhPVWNzU1VGQlNTeExRVUZMTEVWQlFVVTdXVUZEVUN4SlFVRkpMR2xDUVVGVkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJReXhGUVVGRk8yZENRVU5vUkN4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMkZCUXpkRE8ybENRVUZOTEVsQlFVa3NhVUpCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zWlVGQlpTeERRVUZETEVWQlFVVTdaMEpCUTJwRUxGbEJRVmtzUTBGQlF5eGxRVUZsTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1lVRkRka003TzJkQ1FVRk5MRTFCUVUwc1MwRkJTeXhEUVVGRE8xTkJRM1JDTzJGQlFVMHNTVUZCU1N4cFFrRkJWU3hEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dFpRVUZGTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNSVUZCUlN4RFFVRkRPMUZCUTNSSExFOUJRVThzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEzWkRMRU5CUVVNN1NVRlBUU3haUVVGWkxFTkJRVU1zUzBGQll5eEZRVUZGTEZkQlFXdENMRVZCUVVVc1VVRkJaVHRSUVVOdVJTeE5RVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRM3BDTEVsQlFVa3NTMEZCU3l4TFFVRkxMRk5CUVZNc1NVRkJTU3hMUVVGTExFdEJRVXNzU1VGQlNUdFpRVUZGTEU5QlFVODdVVUZEYkVRc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eHRRa0ZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnVSQ3hEUVVGRE8wbEJWVTBzWjBKQlFXZENMRU5CUVVNc1MwRkJaME1zUlVGQlJTeFpRVUZ4UWl4TFFVRkxPMUZCUTJoR0xFOUJRVThzUTBGQlF5eERRVUZETEV0QlFVc3NTMEZCU3l4SlFVRkpMRU5CUVVNc1VVRkJVU3hKUVVGSkxFTkJRVU1zVTBGQlV5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzaEhMRU5CUVVNN1NVRlpVeXhWUVVGVkxFTkJRVU1zUzBGQlowTXNSVUZCUlN4alFVRjFRaXhKUVVGSkxFVkJRVVVzV1VGQmNVSXNTMEZCU3p0UlFVTXhSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZUTEVOQlFVTTdXVUZCUlN4UFFVRlBPMUZCUTNKRUxFbEJRVWtzVjBGQk5rSXNRMEZCUXp0UlFVTnNReXhKUVVGSkxFdEJRVXNzV1VGQldTd3lRa0ZCV1N4RlFVRkZPMWxCUXk5Q0xGZEJRVmNzUjBGQlJ5eExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1UwRkRha003TzFsQlFVMHNWMEZCVnl4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVNelFpeEpRVUZKTEZkQlFWY3NSVUZCUlR0WlFVTmlMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkRha1FzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4VFFVRlRMRU5CUVVNN1dVRkRka0lzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4WFFVRlhMRU5CUVVNN1UwRkRMMEk3VVVGRFJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4eFFrRkJjVUlzUlVGQlJTeEpRVUZKTEdsQ1FVRlZMRU5CUVd0Q0xFbEJRVWtzUTBGQlF5eE5RVUZQTEVOQlFVTXNNRUpCUVRCQ0xFTkJRVU1zUlVGQlJUdFpRVU55Uml4SlFVRkpMRU5CUVVNc1RVRkJUeXhEUVVGRExEQkNRVUV3UWl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVXNWMEZCVnl4RFFVRkRMRU5CUVVNN1UwRkRia2M3U1VGRFRDeERRVUZETzBsQlZWTXNXVUZCV1N4RFFVRkRMRXRCUVZrN1VVRkRMMElzU1VGQlNTeExRVUZMTEZsQlFWa3NTMEZCU3l4SlFVRkpMR1ZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZQTEV0QlFVMHNRMEZCUXl4VlFVRlZMRVZCUVVVN1dVRkRka1VzUzBGQlN5eEhRVUZITEcxQ1FVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlF5OUNMRTlCUVU4c2JVSkJRVkVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFOUJRVThzUlVGQlJTeEZRVUZGTzJkQ1FVTnFSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eDFRa0ZCZFVJc1JVRkJSVHR2UWtGRE9VSXNTVUZCU1N4RFFVRkRMSFZDUVVGMVFpeERRVUZETEVsQlFVa3NSVUZCVVN4VlFVRlZMRVZCUVZFc1QwRkJUeXhEUVVGRExFTkJRVU03YVVKQlEzWkZPenR2UWtGQlRTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJVU3hWUVVGVkxFVkJRVkVzVDBGQlR5eERRVUZETEVOQlFVTTdXVUZEY0VVc1EwRkJReXhGUVVGRkxFVkJRVVVzVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRM0pETzFGQlEwUXNUMEZCVHl4TFFVRkxMRU5CUVVNN1NVRkRha0lzUTBGQlF6dEpRVk5UTEhGQ1FVRnhRanRSUVVNelFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpeEpRVUZKTEVOQlFVTXNkVUpCUVZNc1JVRkJSVHRaUVVGRkxFOUJRVThzUzBGQlN5eERRVUZETzFGQlF6TkVMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkRNME1zVFVGQlRTeHJRa0ZCYTBJc1IwRkJSeXh6UWtGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc2IwSkJRVzlDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRhRVlzU1VGQlNTeHJRa0ZCYTBJc1EwRkJReXhUUVVGVExFTkJRVU03V1VGQlJTeFBRVUZQTEVsQlFVa3NRMEZCUXp0UlFVTXZReXhKUVVGSkxHbENRVUZWTEVOQlFXdENMRWxCUVVrc1EwRkJReXhOUVVGUExFTkJRVU1zYjBKQlFXOUNMRU5CUVVNN1dVRkROME1zU1VGQlNTeERRVUZETEUxQlFVOHNRMEZCUXl4dlFrRkJiMElzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4VFFVRlRMRVZCUVVVN1dVRkROMFVzZVVKQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxHOUNRVUZ2UWl4RlFVRkZMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1JVRkJSU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNMVJ5eFBRVUZQTEVsQlFVa3NRMEZCUXp0VFFVTm1PMUZCUTBRc1QwRkJUeXhQUVVGUExFTkJRVU1zYzBKQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxITkNRVUZ6UWl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOeVJTeERRVUZETzBOQlEwbzdRVUYyVWtRc05FSkJkVkpESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IE1vZGlmaWNhdGlvbl8xID0gcmVxdWlyZShcIn5iZG8vbGliL01vZGlmaWNhdGlvblwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBvbl9jaGFuZ2VfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJvbi1jaGFuZ2VcIikpO1xuY29uc3QgY2xvbmVfZGVlcF8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImNsb25lLWRlZXBcIikpO1xuY2xhc3MgV2F0Y2hlZCB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSwgcGFyYW1zKSB7XG4gICAgICAgIHRoaXMuaXNTaGFsbG93ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgICAgIGNvbnN0IGNhcGl0YWxpemVkUHJvcCA9IHV0aWxfMS51Y0ZpcnN0KHByb3BlcnR5KTtcbiAgICAgICAgY29uc3Qgb25Jbml0RnVuYyA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfUluaXRgO1xuICAgICAgICBjb25zdCBvbkNoYW5nZUZ1bmMgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1DaGFuZ2VgO1xuICAgICAgICBjb25zdCBvbkFkZEZ1bmMgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1BZGRgO1xuICAgICAgICBjb25zdCBvblJlbW92ZUZ1bmMgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1SZW1vdmVgO1xuICAgICAgICB0aGlzLm9uSW5pdCA9IHBhcmFtcyA/IHBhcmFtcy5vbkluaXQgfHwgb25Jbml0RnVuYyA6IG9uSW5pdEZ1bmM7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBwYXJhbXMgPyBwYXJhbXMub25DaGFuZ2UgfHwgb25DaGFuZ2VGdW5jIDogb25DaGFuZ2VGdW5jO1xuICAgICAgICB0aGlzLm9uQWRkID0gcGFyYW1zID8gcGFyYW1zLm9uQWRkIHx8IG9uQWRkRnVuYyA6IG9uQWRkRnVuYztcbiAgICAgICAgdGhpcy5vblJlbW92ZSA9IHBhcmFtcyA/IHBhcmFtcy5vblJlbW92ZSB8fCBvblJlbW92ZUZ1bmMgOiBvblJlbW92ZUZ1bmM7XG4gICAgICAgIHRoaXMuaXNTaGFsbG93ID0gcGFyYW1zICYmIHR5cGVvZiBwYXJhbXMuaXNTaGFsbG93ID09PSBcImJvb2xlYW5cIiA/IHBhcmFtcy5pc1NoYWxsb3cgOiB0aGlzLmlzU2hhbGxvdztcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZERvU2V0VmFsdWUodmFsdWUpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBvbGRWYWwgPSBjbG9uZV9kZWVwXzEuZGVmYXVsdCh0aGlzLm93blZhbHVlKTtcbiAgICAgICAgbGV0IHZhbHVlVG9QYXNzO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNb2RpZmljYXRpb25fMS5Nb2RpZmljYXRpb24pIHtcbiAgICAgICAgICAgIHZhbHVlVG9QYXNzID0gdmFsdWUudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHZhbHVlVG9QYXNzID0gdmFsdWU7XG4gICAgICAgIGxldCB1c2VWYWx1ZSA9IGZhbHNlO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNb2RpZmljYXRpb25fMS5Nb2RpZmljYXRpb24pIHtcbiAgICAgICAgICAgIHZhbHVlLnNldFZhbHVlKHZhbHVlVG9QYXNzKTtcbiAgICAgICAgICAgIHVzZVZhbHVlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZVRvU2V0ID0gdXNlVmFsdWUgPyB2YWx1ZSA6IHZhbHVlVG9QYXNzO1xuICAgICAgICBpZiAodGhpcy5zdWJPYmplY3QpIHtcbiAgICAgICAgICAgIHRoaXMuc3ViT2JqZWN0LnNldFZhbHVlKHZhbHVlVG9TZXQpO1xuICAgICAgICAgICAgdGhpcy5vd25WYWx1ZSA9IHV0aWxfMS5nZXRQcm94eVRhcmdldCh0aGlzLnN1Yk9iamVjdC52YWx1ZU9mKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVUb1Bhc3MgPSB0aGlzLnByb3h5ZnlWYWx1ZSh2YWx1ZVRvUGFzcyk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWVUb1Bhc3M7XG4gICAgICAgICAgICB0aGlzLm93blZhbHVlID0gdXRpbF8xLmdldFByb3h5VGFyZ2V0KHZhbHVlVG9QYXNzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZHhTdHJ1Y3RPYmogPSB0aGlzLm9iamVjdDtcbiAgICAgICAgaWYgKHV0aWxfMS5pc0Z1bmN0aW9uKGlkeFN0cnVjdE9ialt0aGlzLm9uQ2hhbmdlXSkgJiYgdGhpcy5pc0luaXRpYWxpemVkKVxuICAgICAgICAgICAgaWR4U3RydWN0T2JqW3RoaXMub25DaGFuZ2VdKG9sZFZhbCk7XG4gICAgICAgIGlmICh1dGlsXzEuaXNGdW5jdGlvbihpZHhTdHJ1Y3RPYmpbdGhpcy5vbkluaXRdKSAmJiAhdGhpcy5pc0luaXRpYWxpemVkKVxuICAgICAgICAgICAgaWR4U3RydWN0T2JqW3RoaXMub25Jbml0XSh2YWx1ZVRvUGFzcyk7XG4gICAgICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIGlmICh0aGlzLnN1Yk9iamVjdClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1Yk9iamVjdC52YWx1ZU9mKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICBzZXRTdWJPYmplY3Qoc3ViT2JqZWN0KSB7XG4gICAgICAgIHN1Yk9iamVjdC5wcm94eUhhbmRsZXJSZXBsYWNlbWVudCA9IHRoaXMucHJveHlIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHN1Yk9iamVjdC5pc1NoYWxsb3cgPSB0aGlzLmlzU2hhbGxvdztcbiAgICAgICAgdGhpcy5zdWJPYmplY3QgPSBzdWJPYmplY3Q7XG4gICAgfVxuICAgIHByb3h5SGFuZGxlcihwYXRoLCBjaGFuZ2VkVmFsLCBwcmV2VmFsKSB7XG4gICAgICAgIGlmICh0aGlzLnN1Yk9iamVjdClcbiAgICAgICAgICAgIHRoaXMuc3ViT2JqZWN0LnByb3h5SGFuZGxlcihwYXRoLCBjaGFuZ2VkVmFsLCBwcmV2VmFsKTtcbiAgICAgICAgY29uc3QgbmV3S2V5cyA9IGNoYW5nZWRWYWwgPyBPYmplY3Qua2V5cyhjaGFuZ2VkVmFsKSA6IFtdO1xuICAgICAgICBjb25zdCBvbGRLZXlzID0gcHJldlZhbCA/IE9iamVjdC5rZXlzKHByZXZWYWwpIDogW107XG4gICAgICAgIGNvbnN0IG5ld0xlbiA9IG5ld0tleXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBvbGRMZW4gPSBvbGRLZXlzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5jYXNlRGV0ZWN0RXhlYyh7XG4gICAgICAgICAgICBsZW4xOiBuZXdMZW4sXG4gICAgICAgICAgICBsZW4yOiBvbGRMZW4sXG4gICAgICAgICAgICBmdW5jOiB0aGlzLm9uQWRkLFxuICAgICAgICAgICAga2V5czE6IG5ld0tleXMsXG4gICAgICAgICAgICBrZXlzMjogb2xkS2V5cyxcbiAgICAgICAgICAgIGNoYW5nZWRWYWwsXG4gICAgICAgICAgICBwYXRoXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhc2VEZXRlY3RFeGVjKHtcbiAgICAgICAgICAgIGxlbjE6IG9sZExlbixcbiAgICAgICAgICAgIGxlbjI6IG5ld0xlbixcbiAgICAgICAgICAgIGZ1bmM6IHRoaXMub25SZW1vdmUsXG4gICAgICAgICAgICBrZXlzMTogb2xkS2V5cyxcbiAgICAgICAgICAgIGtleXMyOiBuZXdLZXlzLFxuICAgICAgICAgICAgY2hhbmdlZFZhbCxcbiAgICAgICAgICAgIHBhdGhcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChuZXdMZW4gPT09IG9sZExlbiAmJiB0aGlzLm9uQ2hhbmdlIGluIHRoaXMgJiYgdGhpcy5pc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICB0aGlzLm9iamVjdFt0aGlzLm9uQ2hhbmdlXShjaGFuZ2VkVmFsLCBwYXRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaG91bGREb1NldFZhbHVlKHZhbHVlLCBza2lwR3VhcmQgPSBmYWxzZSkge1xuICAgICAgICBpZiAodGhpcy5zdWJPYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1Yk9iamVjdC5zaG91bGREb1NldFZhbHVlKHZhbHVlLCBza2lwR3VhcmQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiAodmFsdWUgIT09IHRoaXMub3duVmFsdWUpO1xuICAgIH1cbiAgICBwcm94eWZ5VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgfHwgdXRpbF8xLmlzT2JqZWN0KHZhbHVlKSAmJiAhdmFsdWUuaXNCRE9Nb2RlbCkge1xuICAgICAgICAgICAgdmFsdWUgPSBvbl9jaGFuZ2VfMS5kZWZhdWx0LnRhcmdldCh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gb25fY2hhbmdlXzEuZGVmYXVsdCh2YWx1ZSwgKHBhdGgsIGNoYW5nZWRWYWx1ZSwgcHJldmlvdXNWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJveHlIYW5kbGVyKHBhdGgsIGNoYW5nZWRWYWx1ZSwgcHJldmlvdXNWYWx1ZSk7XG4gICAgICAgICAgICB9LCB7IGlzU2hhbGxvdzogdGhpcy5pc1NoYWxsb3cgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjYXNlRGV0ZWN0RXhlYyhjZFBhcmFtcykge1xuICAgICAgICBpZiAoY2RQYXJhbXMubGVuMSA+IGNkUGFyYW1zLmxlbjIgJiYgY2RQYXJhbXMuZnVuYyBpbiB0aGlzLm9iamVjdCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBtb2RpZmllZCBvZiBjZFBhcmFtcy5rZXlzMSkge1xuICAgICAgICAgICAgICAgIGlmICghY2RQYXJhbXMua2V5czIuaW5jbHVkZXMobW9kaWZpZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0W2NkUGFyYW1zLmZ1bmNdKChjZFBhcmFtcy5jaGFuZ2VkVmFsKVttb2RpZmllZF0sIGNkUGFyYW1zLnBhdGgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLldhdGNoZWQgPSBXYXRjaGVkO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVjJGMFkyaGxaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2YkdsaUwxZGhkR05vWldRdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUlVFc2QwUkJRWEZFTzBGQlEzSkVMREJEUVVGblJqdEJRVU5vUml4clJVRkJhVU03UVVGRGFrTXNiMFZCUVcxRE8wRkJPRWh1UXl4TlFVRmhMRTlCUVU4N1NVRnhSMmhDTEZsQlFWa3NUVUZCVXl4RlFVRkZMRkZCUVZjc1JVRkJSU3hOUVVGMVFqdFJRV2hEY0VRc1kwRkJVeXhIUVVGWkxFbEJRVWtzUTBGQlF6dFJRVGhDZWtJc2EwSkJRV0VzUjBGQldTeExRVUZMTEVOQlFVTTdVVUZIYmtNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZEY2tJc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTTdVVUZGZWtJc1RVRkJUU3hsUVVGbExFZEJRVWNzWTBGQlR5eERRVUZETEZGQlFXdENMRU5CUVVNc1EwRkJRenRSUVVWd1JDeE5RVUZOTEZWQlFWVXNSMEZCUnl4TFFVRkxMR1ZCUVdVc1RVRkJUU3hEUVVGRE8xRkJRemxETEUxQlFVMHNXVUZCV1N4SFFVRkhMRXRCUVVzc1pVRkJaU3hSUVVGUkxFTkJRVU03VVVGRGJFUXNUVUZCVFN4VFFVRlRMRWRCUVVjc1MwRkJTeXhsUVVGbExFdEJRVXNzUTBGQlF6dFJRVU0xUXl4TlFVRk5MRmxCUVZrc1IwRkJSeXhMUVVGTExHVkJRV1VzVVVGQlVTeERRVUZETzFGQlJXeEVMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hKUVVGSkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRPMUZCUTJoRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeEpRVUZKTEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRE8xRkJRM2hGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETzFGQlF6VkVMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hKUVVGSkxGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRPMUZCUlhoRkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NUVUZCVFN4SlFVRkpMRTlCUVU4c1RVRkJUU3hEUVVGRExGTkJRVk1zUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNN1NVRkRla2NzUTBGQlF6dEpRVlZOTEZGQlFWRXNRMEZCUXl4TFFVRm5RenRSUVVNMVF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEV0QlFVc3NRMEZCUXp0WlFVRkZMRTlCUVU4N1VVRkhNVU1zVFVGQlRTeE5RVUZOTEVkQlFVY3NiMEpCUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdVVUZGZUVNc1NVRkJTU3hYUVVFMlFpeERRVUZETzFGQlEyeERMRWxCUVVrc1MwRkJTeXhaUVVGWkxESkNRVUZaTEVWQlFVVTdXVUZETDBJc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0VFFVTnFRenM3V1VGQlRTeFhRVUZYTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUnpOQ0xFbEJRVWtzVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTnlRaXhKUVVGSkxFdEJRVXNzV1VGQldTd3lRa0ZCV1N4RlFVRkZPMWxCUXk5Q0xFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkROVUlzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXp0VFFVTnVRanRSUVVWRUxFMUJRVTBzVlVGQlZTeEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZGYkVRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTzFsQlEyaENMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NjVUpCUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkROVVE3WVVGQlRUdFpRVVZJTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFsQlF6ZERMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzVjBGQlZ5eERRVUZETzFsQlEzcENMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzY1VKQlFXTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRUUVVNdlF6dFJRVVZFTEUxQlFVMHNXVUZCV1N4SFFVRnRRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzFGQlJXcEVMRWxCUVVrc2FVSkJRVlVzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEdGQlFXRTdXVUZCUlN4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUlhaSExFbEJRVWtzYVVKQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZVHRaUVVGRkxGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03VVVGRGVrY3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhKUVVGSkxFTkJRVU03U1VGRE9VSXNRMEZCUXp0SlFWVk5MRTlCUVU4N1VVRkRWaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFRRVUZUTzFsQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFGQlEzQkVMRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU4wUWl4RFFVRkRPMGxCVlUwc1dVRkJXU3hEUVVGRExGTkJRVEpETzFGQlF6TkVMRk5CUVZNc1EwRkJReXgxUWtGQmRVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTnFSU3hUUVVGVExFTkJRVU1zVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNN1VVRkRja01zU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4VFFVRlRMRU5CUVVNN1NVRkRMMElzUTBGQlF6dEpRVlZOTEZsQlFWa3NRMEZCUXl4SlFVRlpMRVZCUVVVc1ZVRkJaMElzUlVGQlJTeFBRVUZoTzFGQlF6ZEVMRWxCUVVrc1NVRkJTU3hEUVVGRExGTkJRVk03V1VGQlJTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzVlVGQlZTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUXpORkxFMUJRVTBzVDBGQlR5eEhRVUZITEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8xRkJRekZFTEUxQlFVMHNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETzFGQlEzQkVMRTFCUVUwc1RVRkJUU3hIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZET1VJc1RVRkJUU3hOUVVGTkxFZEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXp0UlFVYzVRaXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETzFsQlEyaENMRWxCUVVrc1JVRkJSU3hOUVVGTk8xbEJRMW9zU1VGQlNTeEZRVUZGTEUxQlFVMDdXVUZEV2l4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXM3V1VGRGFFSXNTMEZCU3l4RlFVRkZMRTlCUVU4N1dVRkRaQ3hMUVVGTExFVkJRVVVzVDBGQlR6dFpRVU5rTEZWQlFWVTdXVUZEVml4SlFVRkpPMU5CUTFBc1EwRkJReXhEUVVGRE8xRkJSVWdzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXp0WlFVTm9RaXhKUVVGSkxFVkJRVVVzVFVGQlRUdFpRVU5hTEVsQlFVa3NSVUZCUlN4TlFVRk5PMWxCUTFvc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTzFsQlEyNUNMRXRCUVVzc1JVRkJSU3hQUVVGUE8xbEJRMlFzUzBGQlN5eEZRVUZGTEU5QlFVODdXVUZEWkN4VlFVRlZPMWxCUTFZc1NVRkJTVHRUUVVOUUxFTkJRVU1zUTBGQlF6dFJRVVZJTEVsQlFVa3NUVUZCVFN4TFFVRkxMRTFCUVUwc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEpRVUZKTEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRk8xbEJRMnBFTEVsQlFVa3NRMEZCUXl4TlFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEZWQlFWVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVOc1JUdEpRVU5NTEVOQlFVTTdTVUZYVHl4blFrRkJaMElzUTBGQlF5eExRVUZuUXl4RlFVRkZMRmxCUVhGQ0xFdEJRVXM3VVVGRGFrWXNTVUZCU1N4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRk8xbEJRMmhDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03VTBGRE5VUTdPMWxCUVUwc1QwRkJUeXhEUVVGRExFdEJRVXNzUzBGQlN5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1NVRkROVU1zUTBGQlF6dEpRVmRQTEZsQlFWa3NRMEZCUXl4TFFVRlpPMUZCUXpkQ0xFbEJRVWtzUzBGQlN5eFpRVUZaTEV0QlFVc3NTVUZCU1N4bFFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlR5eExRVUZOTEVOQlFVTXNWVUZCVlN4RlFVRkZPMWxCUTNaRkxFdEJRVXNzUjBGQlJ5eHRRa0ZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU12UWl4UFFVRlBMRzFDUVVGUkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRmxCUVZrc1JVRkJSU3hoUVVGaExFVkJRVVVzUlVGQlJUdG5Ra0ZEZWtRc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFWRXNXVUZCV1N4RlFVRlJMR0ZCUVdFc1EwRkJReXhEUVVGRE8xbEJRM0pGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTnlRenRSUVVORUxFOUJRVThzUzBGQlN5eERRVUZETzBsQlEycENMRU5CUVVNN1NVRlRUeXhqUVVGakxFTkJRVU1zVVVGQk1rSTdVVUZET1VNc1NVRkJTU3hSUVVGUkxFTkJRVU1zU1VGQlNTeEhRVUZITEZGQlFWRXNRMEZCUXl4SlFVRkpMRWxCUVVrc1VVRkJVU3hEUVVGRExFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMWxCUXk5RUxFdEJRVXNzVFVGQlRTeFJRVUZSTEVsQlFVa3NVVUZCVVN4RFFVRkRMRXRCUVVzc1JVRkJSVHRuUWtGRGJrTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZPMjlDUVVNNVFpeEpRVUZKTEVOQlFVTXNUVUZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJUU3hSUVVGUkxFTkJRVU1zUlVGQlJTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN2IwSkJRM1pHTEUxQlFVMDdhVUpCUTFRN1lVRkRTanRUUVVOS08wbEJRMHdzUTBGQlF6dERRVU5LTzBGQk4xSkVMREJDUVRaU1F5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuZnVuY3Rpb24gQkRPVGVzdEZhY3RvcnkoY3Rvcikge1xuICAgIGxldCBCRE9UZXN0ID0gY2xhc3MgQkRPVGVzdCBleHRlbmRzIGN0b3Ige1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gJ3Rlc3QnO1xuICAgICAgICAgICAgdGhpcy50ZXN0ZXIgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBvblRlc3RDaGFuZ2UoY2hhbmdlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0IGNoYW5nZWRcIiwgY2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgb25UZXN0ZXJJbml0KGluaXQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIGluaXRcIiwgaW5pdCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgb25UZXN0ZXJDaGFuZ2UoY2hhbmdlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgY2hhbmdlZFwiLCBjaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBvblRlc3RlckFkZChhZGRlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgYWRkZWRcIiwgYWRkZWQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIG9uVGVzdGVyUmVtb3ZlKHJlbW92ZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIHJlbW92ZWRcIiwgcmVtb3ZlZCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoeyBhdXRvU2F2ZTogdHJ1ZSB9KSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIEJET1Rlc3QucHJvdG90eXBlLCBcInRpdGxlXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLndhdGNoZWQoKSwgZGVjb3JhdG9yc18xLmF0dHJpYnV0ZSgoX3R5cGUpID0+IFtTdHJpbmddKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQXJyYXkpXG4gICAgXSwgQkRPVGVzdC5wcm90b3R5cGUsIFwidGVzdGVyXCIsIHZvaWQgMCk7XG4gICAgQkRPVGVzdCA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoeyBpc0Fic3RyYWN0OiB0cnVlLCBjb2xsZWN0aW9uTmFtZTogXCJCRE9UZXN0XCIgfSlcbiAgICBdLCBCRE9UZXN0KTtcbiAgICByZXR1cm4gQkRPVGVzdDtcbn1cbmV4cG9ydHMuQkRPVGVzdEZhY3RvcnkgPSBCRE9UZXN0RmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBWR1Z6ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmJXOWtaV3h6TDBKRVQxUmxjM1F1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzYzBSQlFUUkZPMEZCVlRWRkxGTkJRV2RDTEdOQlFXTXNRMEZCYzBNc1NVRkJWenRKUVZNelJTeEpRVUZsTEU5QlFVOHNSMEZCZEVJc1RVRkJaU3hQUVVGUkxGTkJRVkVzU1VGQlNUdFJRVUZ1UXpzN1dVRlJNRU1zVlVGQlN5eEhRVUZYTEUxQlFVMHNRMEZCUXp0WlFWRllMRmRCUVUwc1IwRkJZU3hGUVVGRkxFTkJRVU03VVVGNVJEVkZMRU5CUVVNN1VVRm9SR0VzV1VGQldTeERRVUZETEU5QlFYVkNPMWxCUXpGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNZMEZCWXl4RlFVRkZMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU12UXl4RFFVRkRPMUZCVTFNc1dVRkJXU3hEUVVGRExFbEJRVzlDTzFsQlEzWkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zWVVGQllTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNelF5eERRVUZETzFGQlUxTXNZMEZCWXl4RFFVRkRMRTlCUVhWQ08xbEJRelZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRMnBFTEVOQlFVTTdVVUZUVXl4WFFVRlhMRU5CUVVNc1MwRkJjVUk3V1VGRGRrTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhqUVVGakxFVkJRVVVzUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUXpkRExFTkJRVU03VVVGVFV5eGpRVUZqTEVOQlFVTXNUMEZCZFVJN1dVRkROVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4blFrRkJaMElzUlVGQlJTeFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRha1FzUTBGQlF6dExRVVZLTEVOQlFVRTdTVUZxUld0RE8xRkJRVGxDTEhOQ1FVRlRMRU5CUVVNc1JVRkJSU3hSUVVGUkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVOQlFVTTdPekJEUVVFclFqdEpRVkZzUWp0UlFVRXhReXh2UWtGQlR5eEZRVUZGTEVWQlFVVXNjMEpCUVZNc1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenM3TWtOQlFUaENPMGxCYUVJM1JDeFBRVUZQTzFGQlJISkNMRFJDUVVGbExFTkJRVU1zUlVGQlJTeFZRVUZWTEVWQlFVVXNTVUZCU1N4RlFVRkZMR05CUVdNc1JVRkJSU3hUUVVGVExFVkJRVVVzUTBGQlF6dFBRVU5zUkN4UFFVRlBMRU5CZVVWeVFqdEpRVU5FTEU5QlFVOHNUMEZCVHl4RFFVRkRPMEZCUlc1Q0xFTkJRVU03UVVGeVJrUXNkME5CY1VaREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuZnVuY3Rpb24gQkRPVGVzdDFGYWN0b3J5KGN0b3IpIHtcbiAgICBsZXQgQkRPVGVzdDEgPSBjbGFzcyBCRE9UZXN0MSBleHRlbmRzIGN0b3Ige1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gJ3Rlc3QnO1xuICAgICAgICB9XG4gICAgICAgIGRvU29tZXRoaW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwibG9sXCI7XG4gICAgICAgIH1cbiAgICAgICAgb25PaGFJbml0KF92YWx1ZSkge1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKHsgZGVzY3JpcHRpb246IFwidGVzdGVyLi4uXCIgfSksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBCRE9UZXN0MS5wcm90b3R5cGUsIFwidGl0bGVcIiwgdm9pZCAwKTtcbiAgICBCRE9UZXN0MSA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoeyBpc0Fic3RyYWN0OiB0cnVlLCBjb2xsZWN0aW9uTmFtZTogXCJCRE9UZXN0MVwiIH0pXG4gICAgXSwgQkRPVGVzdDEpO1xuICAgIHJldHVybiBCRE9UZXN0MTtcbn1cbmV4cG9ydHMuQkRPVGVzdDFGYWN0b3J5ID0gQkRPVGVzdDFGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFZHVnpkREV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDIxdlpHVnNjeTlDUkU5VVpYTjBNUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkRRU3h6UkVGQmJVVTdRVUZUYmtVc1UwRkJaMElzWlVGQlpTeERRVUZyUkN4SlFVRlhPMGxCVlhoR0xFbEJRV1VzVVVGQlVTeEhRVUYyUWl4TlFVRmxMRkZCUVZNc1UwRkJVU3hKUVVGSk8xRkJRWEJET3p0WlFWRnZSQ3hWUVVGTExFZEJRVmNzVFVGQlRTeERRVUZETzFGQmMwSXpSU3hEUVVGRE8xRkJaRlVzVjBGQlZ6dFpRVU5rTEU5QlFVOHNTMEZCU3l4RFFVRkRPMUZCUTJwQ0xFTkJRVU03VVVGVFV5eFRRVUZUTEVOQlFVTXNUVUZCWXp0UlFVVnNReXhEUVVGRE8wdEJRMG9zUTBGQlFUdEpRWFJDTkVNN1VVRkJlRU1zYzBKQlFWTXNRMEZCUXl4RlFVRkZMRmRCUVZjc1JVRkJSU3hYUVVGWExFVkJRVVVzUTBGQlF6czdNa05CUVN0Q08wbEJValZFTEZGQlFWRTdVVUZFZEVJc05FSkJRV1VzUTBGQlF5eEZRVUZGTEZWQlFWVXNSVUZCUlN4SlFVRkpMRVZCUVVVc1kwRkJZeXhGUVVGRkxGVkJRVlVzUlVGQlJTeERRVUZETzA5QlEyNUVMRkZCUVZFc1EwRTRRblJDTzBsQlEwUXNUMEZCVHl4UlFVRlJMRU5CUVVNN1FVRkRjRUlzUTBGQlF6dEJRVEZEUkN3d1EwRXdRME1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IENodW5rXzEgPSByZXF1aXJlKFwiLi9DaHVua1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5sZXQgQ2VsbCA9IGNsYXNzIENlbGwge1xuICAgIGNvbnN0cnVjdG9yKF9wYXJhbXMpIHtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy5jYXZlID0gMDtcbiAgICAgICAgdGhpcy5yaXZlciA9IDA7XG4gICAgICAgIHRoaXMuaHVtaWRpdHkgPSAwO1xuICAgICAgICB0aGlzLnRlbXBlcmF0dXJlID0gMDtcbiAgICAgICAgdGhpcy5jaHVuayA9IG5ldyBDaHVua18xLkNodW5rKCk7XG4gICAgfVxufTtcbkNlbGwgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBDb25zdFBhcmFtcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBDb25zdFBhcmFtcykgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0XSlcbl0sIENlbGwpO1xuZXhwb3J0cy5DZWxsID0gQ2VsbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyVnNiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2Ylc5a1pXeHpMME5sYkd3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQkxHMURRVUZuUXp0QlFVTm9ReXh6UkVGQmQwUTdRVUZUZUVRc1NVRkJZU3hKUVVGSkxFZEJRV3BDTEUxQlFXRXNTVUZCU1R0SlFYbEVZaXhaUVVGWkxFOUJRVEpDTzFGQmJFUm9ReXhOUVVGRExFZEJRVmNzUTBGQlF5eERRVUZETzFGQlVXUXNUVUZCUXl4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVZGa0xGTkJRVWtzUjBGQlZ5eERRVUZETEVOQlFVTTdVVUZSYWtJc1ZVRkJTeXhIUVVGWExFTkJRVU1zUTBGQlF6dFJRVkZzUWl4aFFVRlJMRWRCUVZjc1EwRkJReXhEUVVGRE8xRkJVWEpDTEdkQ1FVRlhMRWRCUVZjc1EwRkJReXhEUVVGRE8xRkJVWGhDTEZWQlFVc3NSMEZCVlN4SlFVRkpMR0ZCUVVzc1JVRkJSU3hEUVVGRE8wbEJSVk1zUTBGQlF6dERRVU12UXl4RFFVRkJPMEZCTVVSWkxFbEJRVWs3U1VGRWFFSXNORUpCUVdVc1JVRkJSVHRwUlVFd1JGRXNWMEZCVnl4dlFrRkJXQ3hYUVVGWE8wZEJla1I0UWl4SlFVRkpMRU5CTUVSb1FqdEJRVEZFV1N4dlFrRkJTU0o5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3Qgb3Blbl9zaW1wbGV4X25vaXNlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwib3Blbi1zaW1wbGV4LW5vaXNlXCIpKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBDZWxsXzEgPSByZXF1aXJlKFwiLi9DZWxsXCIpO1xuY2xhc3MgQ2h1bmsge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLnNpemUgPSA2NDtcbiAgICAgICAgdGhpcy5ncmlkID0gW107XG4gICAgICAgIHRoaXMuc2ltcGxleENhdmUgPSBuZXcgb3Blbl9zaW1wbGV4X25vaXNlXzEuZGVmYXVsdCgxKTtcbiAgICAgICAgdGhpcy5zaW1wbGV4Uml2ZXIgPSBuZXcgb3Blbl9zaW1wbGV4X25vaXNlXzEuZGVmYXVsdCgyKTtcbiAgICAgICAgdGhpcy5zaW1wbGV4VGVtcGVyYXR1cmUgPSBuZXcgb3Blbl9zaW1wbGV4X25vaXNlXzEuZGVmYXVsdCgzKTtcbiAgICAgICAgdGhpcy5zaW1wbGV4SHVtaWRpdHkgPSBuZXcgb3Blbl9zaW1wbGV4X25vaXNlXzEuZGVmYXVsdCg0KTtcbiAgICAgICAgdXRpbF8xLm1lcmdlKHRoaXMsIHBhcmFtcyk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVHcmlkKCk7XG4gICAgfVxuICAgIGdlbmVyYXRlR3JpZCgpIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5zaXplOyByb3crKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdyaWRbcm93XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5wdXNoKFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuc2l6ZTsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4Q29vcmRpbmF0ZSA9IGNvbCArIHRoaXMueCAqIHRoaXMuc2l6ZTtcbiAgICAgICAgICAgICAgICBjb25zdCB5Q29vcmRpbmF0ZSA9IHJvdyArIHRoaXMueSAqIHRoaXMuc2l6ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRbcm93XS5wdXNoKG5ldyBDZWxsXzEuQ2VsbCh7XG4gICAgICAgICAgICAgICAgICAgIHg6IHhDb29yZGluYXRlLFxuICAgICAgICAgICAgICAgICAgICB5OiB5Q29vcmRpbmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgY2F2ZTogdGhpcy5zaW1wbGV4Q2F2ZS5ub2lzZTJEKHhDb29yZGluYXRlIC8gMTAwLCB5Q29vcmRpbmF0ZSAvIDEwMCksXG4gICAgICAgICAgICAgICAgICAgIHJpdmVyOiB0aGlzLnNpbXBsZXhSaXZlci5ub2lzZTJEKHhDb29yZGluYXRlIC8gNTAwLCB5Q29vcmRpbmF0ZSAvIDUwMCksXG4gICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiB0aGlzLnNpbXBsZXhUZW1wZXJhdHVyZS5ub2lzZTJEKHhDb29yZGluYXRlIC8gMjUwMCwgeUNvb3JkaW5hdGUgLyAyNTAwKSxcbiAgICAgICAgICAgICAgICAgICAgaHVtaWRpdHk6IHRoaXMuc2ltcGxleEh1bWlkaXR5Lm5vaXNlMkQoeENvb3JkaW5hdGUgLyAyNTAwLCB5Q29vcmRpbmF0ZSAvIDI1MDApLFxuICAgICAgICAgICAgICAgICAgICBjaHVuazogdGhpc1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuQ2h1bmsgPSBDaHVuaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyaDFibXN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDIxdlpHVnNjeTlEYUhWdWF5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTeHZSa0ZCYTBRN1FVRkRiRVFzTUVOQlFYZERPMEZCUTNoRExHbERRVUU0UWp0QlFWRTVRaXhOUVVGaExFdEJRVXM3U1VGelJXUXNXVUZCV1N4TlFVRXlRanRSUVM5RWFFTXNUVUZCUXl4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVZGa0xFMUJRVU1zUjBGQlZ5eERRVUZETEVOQlFVTTdVVUZSWkN4VFFVRkpMRWRCUVZrc1JVRkJSU3hEUVVGRE8xRkJVMmhDTEZOQlFVa3NSMEZCWVN4RlFVRkZMRU5CUVVNN1VVRlRjRUlzWjBKQlFWY3NSMEZCY1VJc1NVRkJTU3cwUWtGQlowSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVZONFJDeHBRa0ZCV1N4SFFVRnhRaXhKUVVGSkxEUkNRVUZuUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJVM3BFTEhWQ1FVRnJRaXhIUVVGeFFpeEpRVUZKTERSQ1FVRm5RaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlV5OUVMRzlDUVVGbExFZEJRWEZDTEVsQlFVa3NORUpCUVdkQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZIYkVVc1dVRkJTeXhEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTndRaXhKUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTTdTVUZEZUVJc1EwRkJRenRKUVZGVExGbEJRVms3VVVGRGJFSXNTMEZCU3l4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZaTEVsQlFVa3NRMEZCUXl4SlFVRkxMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVU3V1VGRGFFUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdaMEpCUTJwQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8yRkJRM1JDTzFsQlEwUXNTMEZCU3l4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZaTEVsQlFVa3NRMEZCUXl4SlFVRkxMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVU3WjBKQlEyaEVMRTFCUVUwc1YwRkJWeXhIUVVGSExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRlhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU03WjBKQlEzSkVMRTFCUVUwc1YwRkJWeXhIUVVGSExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRlhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU03WjBKQlJYSkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVTm1MRWxCUVVrc1YwRkJTU3hEUVVGRE8yOUNRVU5NTEVOQlFVTXNSVUZCUlN4WFFVRlhPMjlDUVVOa0xFTkJRVU1zUlVGQlJTeFhRVUZYTzI5Q1FVTmtMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRWRCUVVjc1IwRkJSeXhGUVVGRkxGZEJRVmNzUjBGQlJ5eEhRVUZITEVOQlFVTTdiMEpCUTNCRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFZEJRVWNzUjBGQlJ5eEZRVUZGTEZkQlFWY3NSMEZCUnl4SFFVRkhMRU5CUVVNN2IwSkJRM1JGTEZkQlFWY3NSVUZCUlN4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFVkJRVVVzVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXp0dlFrRkRjRVlzVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUjBGQlJ5eEpRVUZKTEVWQlFVVXNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJRenR2UWtGRE9VVXNTMEZCU3l4RlFVRkZMRWxCUVVrN2FVSkJRMlFzUTBGQlF5eERRVU5NTEVOQlFVTTdZVUZEVER0VFFVTktPMGxCUTB3c1EwRkJRenREUVVOS08wRkJlRWRFTEhOQ1FYZEhReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBCRE9Db25maWdGYWN0b3J5KGN0b3IpIHtcbiAgICBjbGFzcyBCRE9Db25maWcgZXh0ZW5kcyBjdG9yIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXMgPSBbXCIvOm5hbWVcIl07XG4gICAgICAgICAgICB0aGlzLmpzb25Pbmx5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gQkRPQ29uZmlnO1xufVxuZXhwb3J0cy5CRE9Db25maWdGYWN0b3J5ID0gQkRPQ29uZmlnRmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBRMjl1Wm1sbkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXliM1YwWlhNdlFrUlBRMjl1Wm1sbkxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCVTBFc1UwRkJaMElzWjBKQlFXZENMRU5CUVhORExFbEJRVmM3U1VGVk4wVXNUVUZCWlN4VFFVRlZMRk5CUVZFc1NVRkJTVHRSUVVGeVF6czdXVUZQVnl4WFFVRk5MRWRCUVdFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVTh6UWl4aFFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRemxDTEVOQlFVTTdTMEZCUVR0SlFVVkVMRTlCUVU4c1UwRkJVeXhEUVVGRE8wRkJRM0pDTEVOQlFVTTdRVUUxUWtRc05FTkJORUpESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gQkRPR2FtZUxvYmJ5RmFjdG9yeShjdG9yKSB7XG4gICAgY2xhc3MgQkRPR2FtZUxvYmJ5IGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyTmFtZVNwYWNlID0gJy8nO1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVN0cmluZyA9IHJlcXVpcmUoJ35iZG8vdmlld3MvZ2FtZUxvYmJ5Lm5qaycpO1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvaGE6ICdPT09PT0hBQUFBQUFBQSEhISdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQkRPR2FtZUxvYmJ5LmF0dGFjaFRvU2VydmVycyA9IFtcIkdhbWVTZXJ2ZXJcIl07XG4gICAgcmV0dXJuIEJET0dhbWVMb2JieTtcbn1cbmV4cG9ydHMuQkRPR2FtZUxvYmJ5RmFjdG9yeSA9IEJET0dhbWVMb2JieUZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQUjJGdFpVeHZZbUo1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5eWIzVjBaWE12UWtSUFIyRnRaVXh2WW1KNUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCVlVFc1UwRkJaMElzYlVKQlFXMUNMRU5CUVhORExFbEJRVmM3U1VGVGFFWXNUVUZCWlN4WlFVRmhMRk5CUVZFc1NVRkJTVHRSUVVGNFF6czdXVUZuUWxjc2IwSkJRV1VzUjBGQlJ5eEhRVUZITEVOQlFVTTdXVUZSYmtJc2JVSkJRV01zUjBGQllTeFBRVUZQTEVOQlFVTXNNRUpCUVRCQ0xFTkJRVU1zUTBGQlF6dFJRV00zUlN4RFFVRkRPMUZCVEdFc1MwRkJTeXhEUVVGRExHTkJRV003V1VGRE1VSXNUMEZCVHp0blFrRkRTQ3hIUVVGSExFVkJRVVVzYlVKQlFXMUNPMkZCUXpOQ0xFTkJRVU03VVVGRFRpeERRVUZET3p0SlFUVkNZU3cwUWtGQlpTeEhRVUZoTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1NVRXJRamRFTEU5QlFVOHNXVUZCV1N4RFFVRkRPMEZCUTNoQ0xFTkJRVU03UVVGc1JFUXNhMFJCYTBSREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIEJET0hvbWVGYWN0b3J5KGN0b3IpIHtcbiAgICBjbGFzcyBCRE9Ib21lIGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyTmFtZVNwYWNlID0gJy8nO1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVN0cmluZyA9IHJlcXVpcmUoJ35iZG8vdmlld3MvaG9tZS5uamsnKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyB0ZW1wbGF0ZVBhcmFtcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb2hhOiAnZW5kbGljaCB6dSBIYXVzZSA9KSdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQkRPSG9tZS5hdHRhY2hUb1NlcnZlcnMgPSBbXCJXZWJTZXJ2ZXJcIl07XG4gICAgcmV0dXJuIEJET0hvbWU7XG59XG5leHBvcnRzLkJET0hvbWVGYWN0b3J5ID0gQkRPSG9tZUZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQU0c5dFpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZjbTkxZEdWekwwSkVUMGh2YldVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZWUVN4VFFVRm5RaXhqUVVGakxFTkJRWE5ETEVsQlFWYzdTVUZUTTBVc1RVRkJaU3hQUVVGUkxGTkJRVkVzU1VGQlNUdFJRVUZ1UXpzN1dVRm5RbGNzYjBKQlFXVXNSMEZCUnl4SFFVRkhMRU5CUVVNN1dVRlJia0lzYlVKQlFXTXNSMEZCWVN4UFFVRlBMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNRMEZCUXp0UlFXTjRSU3hEUVVGRE8xRkJUR0VzUzBGQlN5eERRVUZETEdOQlFXTTdXVUZETVVJc1QwRkJUenRuUWtGRFNDeEhRVUZITEVWQlFVVXNjVUpCUVhGQ08yRkJRemRDTEVOQlFVTTdVVUZEVGl4RFFVRkRPenRKUVRWQ1lTeDFRa0ZCWlN4SFFVRmhMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03U1VFclFqVkVMRTlCUVU4c1QwRkJUeXhEUVVGRE8wRkJRMjVDTEVOQlFVTTdRVUZzUkVRc2QwTkJhMFJESW4wPSIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL3NvdXJjZS9hcHAvdXRpbHMgc3luYyByZWN1cnNpdmVcIjsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCJyZWZsZWN0LW1ldGFkYXRhXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IGVudmlyb25tZW50XzEgPSByZXF1aXJlKFwifmJkby91dGlscy9lbnZpcm9ubWVudFwiKTtcbmNvbnN0IEJhc2VDb25zdHJ1Y3Rvcl8xID0gcmVxdWlyZShcIn5iZG8vbGliL0Jhc2VDb25zdHJ1Y3RvclwiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IGZyYW1ld29ya18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZnJhbWV3b3JrXCIpO1xuY29uc3QgdHlwZV9ncmFwaHFsXzEgPSByZXF1aXJlKFwidHlwZS1ncmFwaHFsXCIpO1xuZnVuY3Rpb24gd2F0Y2hlZChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nS2V5ID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGRlY29yYXRvclNldHRpbmdzID0gZnJhbWV3b3JrXzEuYmVmb3JlRGVzY3JpcHRvcih0YXJnZXQsIHN0cmluZ0tleSwgXCJkZWZpbmVkV2F0Y2hlcnNcIiwgeyBwYXJhbXMgfSk7XG4gICAgICAgIGZyYW1ld29ya18xLmNyZWF0ZURlY29yYXRvckRlc2NyaXB0b3IodGFyZ2V0LCBzdHJpbmdLZXksIFwiV2F0Y2hlZFwiLCBkZWNvcmF0b3JTZXR0aW5ncyk7XG4gICAgfTtcbn1cbmV4cG9ydHMud2F0Y2hlZCA9IHdhdGNoZWQ7XG5mdW5jdGlvbiBwcm9wZXJ0eSh0eXBlRnVuYywgcGFyYW1zKSB7XG4gICAgcmV0dXJuICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKHR5cGVGdW5jICYmICEodHlwZUZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbikgJiYgIXBhcmFtcylcbiAgICAgICAgICAgIHBhcmFtcyA9IHR5cGVGdW5jO1xuICAgICAgICBpZiAodHlwZUZ1bmMgJiYgISh0eXBlRnVuYyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSlcbiAgICAgICAgICAgIHR5cGVGdW5jID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXBhcmFtcyB8fCAhKHBhcmFtcyBpbnN0YW5jZW9mIE9iamVjdCkpXG4gICAgICAgICAgICBwYXJhbXMgPSB7fTtcbiAgICAgICAgY29uc3QgZGVjb3JhdG9yU2V0dGluZ3MgPSBmcmFtZXdvcmtfMS5iZWZvcmVEZXNjcmlwdG9yKHRhcmdldCwgc3RyaW5nS2V5LCBcImRlZmluZWRQcm9wZXJ0aWVzXCIsIHsgdHlwZUZ1bmMsIHBhcmFtcyB9KTtcbiAgICAgICAgZnJhbWV3b3JrXzEuY3JlYXRlRGVjb3JhdG9yRGVzY3JpcHRvcih0YXJnZXQsIHN0cmluZ0tleSwgXCJQcm9wZXJ0eVwiLCBkZWNvcmF0b3JTZXR0aW5ncyk7XG4gICAgfTtcbn1cbmV4cG9ydHMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbmZ1bmN0aW9uIGF0dHJpYnV0ZSh0eXBlRnVuYywgcGFyYW1zKSB7XG4gICAgcmV0dXJuICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKHR5cGVGdW5jICYmICEodHlwZUZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbikgJiYgIXBhcmFtcylcbiAgICAgICAgICAgIHBhcmFtcyA9IHR5cGVGdW5jO1xuICAgICAgICBpZiAodHlwZUZ1bmMgJiYgISh0eXBlRnVuYyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSlcbiAgICAgICAgICAgIHR5cGVGdW5jID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXBhcmFtcyB8fCAhKHBhcmFtcyBpbnN0YW5jZW9mIE9iamVjdCkpXG4gICAgICAgICAgICBwYXJhbXMgPSB7fTtcbiAgICAgICAgaWYgKHR5cGVGdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24gJiYgcGFyYW1zKVxuICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuRmllbGQodHlwZUZ1bmMsIHBhcmFtcykodGFyZ2V0LCBrZXkpO1xuICAgICAgICBlbHNlIGlmICh0eXBlRnVuYyBpbnN0YW5jZW9mIEZ1bmN0aW9uKVxuICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuRmllbGQodHlwZUZ1bmMpKHRhcmdldCwga2V5KTtcbiAgICAgICAgZWxzZSBpZiAocGFyYW1zKVxuICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuRmllbGQocGFyYW1zKSh0YXJnZXQsIGtleSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLkZpZWxkKCkodGFyZ2V0LCBrZXkpO1xuICAgICAgICBjb25zdCBkZWNvcmF0b3JTZXR0aW5ncyA9IGZyYW1ld29ya18xLmJlZm9yZURlc2NyaXB0b3IodGFyZ2V0LCBzdHJpbmdLZXksIFwiZGVmaW5lZEF0dHJpYnV0ZXNcIiwgeyB0eXBlRnVuYywgcGFyYW1zIH0pO1xuICAgICAgICBmcmFtZXdvcmtfMS5jcmVhdGVEZWNvcmF0b3JEZXNjcmlwdG9yKHRhcmdldCwgc3RyaW5nS2V5LCBcIkF0dHJpYnV0ZVwiLCBkZWNvcmF0b3JTZXR0aW5ncyk7XG4gICAgfTtcbn1cbmV4cG9ydHMuYXR0cmlidXRlID0gYXR0cmlidXRlO1xuZnVuY3Rpb24gYmFzZUNvbnN0cnVjdG9yKG5hbWUsIHBhcmFtcywgaW5kZXggPSAwKSB7XG4gICAgcmV0dXJuIChjdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihjdG9yKTtcbiAgICAgICAgaWYgKGZyYW1ld29ya18xLmlzQmFzZUNvbnN0cnVjdG9yKHByb3RvdHlwZSkpXG4gICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY3RvciwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSkpO1xuICAgICAgICBpZiAobmFtZSAmJiAodHlwZW9mIG5hbWUgPT09IFwibnVtYmVyXCIpKVxuICAgICAgICAgICAgaW5kZXggPSBuYW1lO1xuICAgICAgICBpZiAobmFtZSAmJiAodHlwZW9mIG5hbWUgPT09IFwib2JqZWN0XCIpKVxuICAgICAgICAgICAgcGFyYW1zID0gbmFtZTtcbiAgICAgICAgaWYgKG5hbWUgJiYgKCh0eXBlb2YgbmFtZSA9PT0gXCJvYmplY3RcIikgfHwgKHR5cGVvZiBuYW1lID09PSBcIm51bWJlclwiKSkpXG4gICAgICAgICAgICBuYW1lID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAocGFyYW1zICYmICh0eXBlb2YgcGFyYW1zID09PSBcIm51bWJlclwiKSlcbiAgICAgICAgICAgIGluZGV4ID0gcGFyYW1zO1xuICAgICAgICBpZiAocGFyYW1zICYmICh0eXBlb2YgcGFyYW1zID09PSBcIm51bWJlclwiKSlcbiAgICAgICAgICAgIHBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKFwiaXNCRE9Nb2RlbFwiIGluIGN0b3IpIHtcbiAgICAgICAgICAgIGlmIChuYW1lICYmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIikgJiYgcGFyYW1zICYmICh0eXBlb2YgcGFyYW1zID09PSBcIm9iamVjdFwiKSkge1xuICAgICAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLk9iamVjdFR5cGUobmFtZSwgcGFyYW1zKShjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUgJiYgKHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLk9iamVjdFR5cGUobmFtZSkoY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXJhbXMgJiYgKHR5cGVvZiBwYXJhbXMgPT09IFwib2JqZWN0XCIpKSB7XG4gICAgICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuT2JqZWN0VHlwZShwYXJhbXMpKGN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLk9iamVjdFR5cGUoKShjdG9yKTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMgJiYgKHR5cGVvZiBwYXJhbXMgPT09IFwib2JqZWN0XCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkNvbGxlY3Rpb25OYW1lID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShjdG9yLCBcImNvbGxlY3Rpb25OYW1lXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZEYXRhYmFzZU5hbWUgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGN0b3IsIFwiZGF0YWJhc2VOYW1lXCIpO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEoY3RvciwgXCJjb2xsZWN0aW9uTmFtZVwiLCBwYXJhbXMuY29sbGVjdGlvbk5hbWUgfHwgcHJldkNvbGxlY3Rpb25OYW1lIHx8IFwiZGVmYXVsdFwiKTtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKGN0b3IsIFwiZGF0YWJhc2VOYW1lXCIsIHBhcmFtcy5kYXRhYmFzZU5hbWUgfHwgcHJldkRhdGFiYXNlTmFtZSB8fCBcImRlZmF1bHRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcyAmJiAodHlwZW9mIHBhcmFtcyA9PT0gXCJvYmplY3RcIiAmJiBwYXJhbXMuaXNBYnN0cmFjdCkpXG4gICAgICAgICAgICByZXR1cm4gY3RvcjtcbiAgICAgICAgY29uc3QgQmFzZUNvbnN0cnVjdG9yID0gQmFzZUNvbnN0cnVjdG9yXzEuYmFzZUNvbnN0cnVjdG9yRmFjdG9yeShjdG9yLCBpbmRleCk7XG4gICAgICAgIGlmIChlbnZpcm9ubWVudF8xLmlzQnJvd3NlcigpICYmIGN0b3IuaXNCYXNlQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodXRpbF8xLnBhc2NhbENhc2Uya2ViYWJDYXNlKGN0b3IubmFtZSksIEJhc2VDb25zdHJ1Y3Rvciwge1xuICAgICAgICAgICAgICAgIGV4dGVuZHM6IEJhc2VDb25zdHJ1Y3Rvci5leHRlbmRzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQmFzZUNvbnN0cnVjdG9yO1xuICAgIH07XG59XG5leHBvcnRzLmJhc2VDb25zdHJ1Y3RvciA9IGJhc2VDb25zdHJ1Y3RvcjtcbmV4cG9ydHMucXVlcnkgPSB0eXBlX2dyYXBocWxfMS5RdWVyeTtcbmV4cG9ydHMuYXJnID0gdHlwZV9ncmFwaHFsXzEuQXJnO1xuZXhwb3J0cy5hcmdzID0gdHlwZV9ncmFwaHFsXzEuQXJncztcbmV4cG9ydHMucmVzb2x2ZXIgPSB0eXBlX2dyYXBocWxfMS5SZXNvbHZlcjtcbmV4cG9ydHMucm9vdCA9IHR5cGVfZ3JhcGhxbF8xLlJvb3Q7XG5leHBvcnRzLm11dGF0aW9uID0gdHlwZV9ncmFwaHFsXzEuTXV0YXRpb247XG5leHBvcnRzLnN1YnNjcmlwdGlvbiA9IHR5cGVfZ3JhcGhxbF8xLlN1YnNjcmlwdGlvbjtcbmV4cG9ydHMucHViU3ViID0gdHlwZV9ncmFwaHFsXzEuUHViU3ViO1xuZXhwb3J0cy5pbnB1dFR5cGUgPSB0eXBlX2dyYXBocWxfMS5JbnB1dFR5cGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laR1ZqYjNKaGRHOXljeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2ZFhScGJITXZaR1ZqYjNKaGRHOXljeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMRFJDUVVFd1FqdEJRVU14UWl3d1EwRkJkVVE3UVVGRGRrUXNkMFJCUVcxRU8wRkJTVzVFTERoRVFVRjNSanRCUVVONFJpeHJSRUZCYTBVN1FVRkRiRVVzYjBSQlFYTkhPMEZCUlhSSExDdERRVmx6UWp0QlFXdENkRUlzVTBGQlowSXNUMEZCVHl4RFFVRkRMRk5CUVhsQ0xFVkJRVVU3U1VGREwwTXNUMEZCVHl4RFFVRkRMRTFCUVZjc1JVRkJSU3hIUVVGdlFpeEZRVUZGTEVWQlFVVTdVVUZEZWtNc1RVRkJUU3hUUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUTJwRExFMUJRVTBzYVVKQlFXbENMRWRCUVVjc05FSkJRV2RDTEVOQlFVTXNUVUZCVFN4RlFVRkZMRk5CUVZNc1JVRkJSU3hwUWtGQmFVSXNSVUZCUlN4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRE4wWXNjVU5CUVhsQ0xFTkJRVU1zVFVGQlRTeEZRVUZGTEZOQlFWTXNSVUZCUlN4VFFVRlRMRVZCUVVVc2FVSkJRV2xDTEVOQlFVTXNRMEZCUXp0SlFVTXZSU3hEUVVGRExFTkJRVU03UVVGRFRpeERRVUZETzBGQlRrUXNNRUpCVFVNN1FVRm5Ra1FzVTBGQlowSXNVVUZCVVN4RFFVRkRMRkZCUVRKQ0xFVkJRVVVzVFVGQmQwSTdTVUZETVVVc1QwRkJUeXhEUVVGRExFMUJRVmNzUlVGQlJTeEhRVUZ2UWl4RlFVRkZMRVZCUVVVN1VVRkRla01zVFVGQlRTeFRRVUZUTEVkQlFVY3NSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJSMnBETEVsQlFVa3NVVUZCVVN4SlFVRkpMRU5CUVVNc1EwRkJReXhSUVVGUkxGbEJRVmtzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5PMWxCUVVVc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF6dFJRVU01UlN4SlFVRkpMRkZCUVZFc1NVRkJTU3hEUVVGRExFTkJRVU1zVVVGQlVTeFpRVUZaTEZGQlFWRXNRMEZCUXp0WlFVRkZMRkZCUVZFc1IwRkJSeXhUUVVGVExFTkJRVU03VVVGRGRFVXNTVUZCU1N4RFFVRkRMRTFCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU1zVFVGQlRTeFpRVUZaTEUxQlFVMHNRMEZCUXp0WlFVRkZMRTFCUVUwc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGSGVFUXNUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5dzBRa0ZCWjBJc1EwRkJReXhOUVVGTkxFVkJRVVVzVTBGQlV5eEZRVUZGTEcxQ1FVRnRRaXhGUVVGRkxFVkJRVVVzVVVGQlVTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRla2NzY1VOQlFYbENMRU5CUVVNc1RVRkJUU3hGUVVGRkxGTkJRVk1zUlVGQlJTeFZRVUZWTEVWQlFVVXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF6dEpRVU5vUml4RFFVRkRMRU5CUVVNN1FVRkRUaXhEUVVGRE8wRkJZa1FzTkVKQllVTTdRVUZ4UWtRc1UwRkJaMElzVTBGQlV5eERRVUZETEZGQlFUSkNMRVZCUVVVc1RVRkJlVUk3U1VGRE5VVXNUMEZCVHl4RFFVRkRMRTFCUVZjc1JVRkJSU3hIUVVGdlFpeEZRVUZGTEVWQlFVVTdVVUZEZWtNc1RVRkJUU3hUUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUjJwRExFbEJRVWtzVVVGQlVTeEpRVUZKTEVOQlFVTXNRMEZCUXl4UlFVRlJMRmxCUVZrc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTzFsQlFVVXNUVUZCVFN4SFFVRkhMRkZCUVZFc1EwRkJRenRSUVVNNVJTeEpRVUZKTEZGQlFWRXNTVUZCU1N4RFFVRkRMRU5CUVVNc1VVRkJVU3haUVVGWkxGRkJRVkVzUTBGQlF6dFpRVUZGTEZGQlFWRXNSMEZCUnl4VFFVRlRMRU5CUVVNN1VVRkRkRVVzU1VGQlNTeERRVUZETEUxQlFVMHNTVUZCU1N4RFFVRkRMRU5CUVVNc1RVRkJUU3haUVVGWkxFMUJRVTBzUTBGQlF6dFpRVUZGTEUxQlFVMHNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkhlRVFzU1VGQlNTeFJRVUZSTEZsQlFWa3NVVUZCVVN4SlFVRkpMRTFCUVUwN1dVRkJSU3h2UWtGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdZVUZETlVVc1NVRkJTU3hSUVVGUkxGbEJRVmtzVVVGQlVUdFpRVUZGTEc5Q1FVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUXk5RUxFbEJRVWtzVFVGQlRUdFpRVUZGTEc5Q1FVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPenRaUVVOMlF5eHZRa0ZCU3l4RlFVRkZMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJ6RkNMRTFCUVUwc2FVSkJRV2xDTEVkQlFVY3NORUpCUVdkQ0xFTkJRVU1zVFVGQlRTeEZRVUZGTEZOQlFWTXNSVUZCUlN4dFFrRkJiVUlzUlVGQlJTeEZRVUZGTEZGQlFWRXNSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRM3BITEhGRFFVRjVRaXhEUVVGRExFMUJRVTBzUlVGQlJTeFRRVUZUTEVWQlFVVXNWMEZCVnl4RlFVRkZMR2xDUVVGcFFpeERRVUZETEVOQlFVTTdTVUZEYWtZc1EwRkJReXhEUVVGRE8wRkJRMDRzUTBGQlF6dEJRVzVDUkN3NFFrRnRRa003UVVGalJDeFRRVUZuUWl4bFFVRmxMRU5CUVVNc1NVRkJhMElzUlVGQlJTeE5RVUZuUWl4RlFVRkZMRkZCUVdkQ0xFTkJRVU03U1VGRmJrWXNUMEZCVHl4RFFVRkRMRWxCUVZNc1JVRkJSU3hGUVVGRk8xRkJRMnBDTEUxQlFVMHNVMEZCVXl4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZET1VNc1NVRkJTU3cyUWtGQmFVSXNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkJSU3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZIYUVjc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVsQlFVa3NTMEZCU3l4UlFVRlJMRU5CUVVNN1dVRkJSU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEzSkVMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEpRVUZKTEV0QlFVc3NVVUZCVVN4RFFVRkRPMWxCUVVVc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU4wUkN4SlFVRkpMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zVDBGQlR5eEpRVUZKTEV0QlFVc3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFbEJRVWtzUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUXp0WlFVRkZMRWxCUVVrc1IwRkJSeXhUUVVGVExFTkJRVU03VVVGRGVrWXNTVUZCU1N4TlFVRk5MRWxCUVVrc1EwRkJReXhQUVVGUExFMUJRVTBzUzBGQlN5eFJRVUZSTEVOQlFVTTdXVUZCUlN4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRek5FTEVsQlFVa3NUVUZCVFN4SlFVRkpMRU5CUVVNc1QwRkJUeXhOUVVGTkxFdEJRVXNzVVVGQlVTeERRVUZETzFsQlFVVXNUVUZCVFN4SFFVRkhMRk5CUVZNc1EwRkJRenRSUVVVdlJDeEpRVUZKTEZsQlFWa3NTVUZCU1N4SlFVRkpMRVZCUVVVN1dVRkZkRUlzU1VGQlNTeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWxCUVVrc1MwRkJTeXhSUVVGUkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVsQlFVa3NRMEZCUXl4UFFVRlBMRTFCUVUwc1MwRkJTeXhSUVVGUkxFTkJRVU1zUlVGQlJUdG5Ra0ZET1VVc2VVSkJRVlVzUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WVVGRGJFTTdhVUpCUVUwc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVsQlFVa3NTMEZCU3l4UlFVRlJMRU5CUVVNc1JVRkJSVHRuUWtGRE0wTXNlVUpCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0aFFVTXhRanRwUWtGQlRTeEpRVUZKTEUxQlFVMHNTVUZCU1N4RFFVRkRMRTlCUVU4c1RVRkJUU3hMUVVGTExGRkJRVkVzUTBGQlF5eEZRVUZGTzJkQ1FVTXZReXg1UWtGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yRkJRelZDT3p0blFrRkJUU3g1UWtGQlZTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkhNVUlzU1VGQlNTeE5RVUZOTEVsQlFVa3NRMEZCUXl4UFFVRlBMRTFCUVUwc1MwRkJTeXhSUVVGUkxFTkJRVU1zUlVGQlJUdG5Ra0ZEZUVNc1RVRkJUU3hyUWtGQmEwSXNSMEZCUnl4elFrRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeG5Ra0ZCWjBJc1EwRkJReXhEUVVGRE8yZENRVU12UkN4TlFVRk5MR2RDUVVGblFpeEhRVUZITEhOQ1FVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxHTkJRV01zUTBGQlF5eERRVUZETzJkQ1FVTXpSQ3g1UWtGQll5eERRVUZETEVsQlFVa3NSVUZCUlN4blFrRkJaMElzUlVGQlJTeE5RVUZOTEVOQlFVTXNZMEZCWXl4SlFVRkpMR3RDUVVGclFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRPMmRDUVVOcVJ5eDVRa0ZCWXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hqUVVGakxFVkJRVVVzVFVGQlRTeERRVUZETEZsQlFWa3NTVUZCU1N4blFrRkJaMElzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXp0aFFVTTVSanRUUVVOS08xRkJRMFFzU1VGQlNTeE5RVUZOTEVsQlFVa3NRMEZCUXl4UFFVRlBMRTFCUVUwc1MwRkJTeXhSUVVGUkxFbEJRVWtzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXp0WlFVRkZMRTlCUVU4c1NVRkJTU3hEUVVGRE8xRkJSVGRGTEUxQlFVMHNaVUZCWlN4SFFVRkhMSGREUVVGelFpeERRVUZETEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVVMVJDeEpRVUZKTEhWQ1FVRlRMRVZCUVVVc1NVRkJTU3hKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTzFsQlEzSkRMR05CUVdNc1EwRkJReXhOUVVGTkxFTkJRVU1zTWtKQlFXOUNMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEdWQlFXVXNSVUZCUlR0blFrRkRjRVVzVDBGQlR5eEZRVUZGTEdWQlFXVXNRMEZCUXl4UFFVRlBPMkZCUTI1RExFTkJRVU1zUTBGQlF6dFRRVU5PTzFGQlEwUXNUMEZCVHl4bFFVRmxMRU5CUVVNN1NVRkRNMElzUTBGQlF5eERRVUZETzBGQlEwNHNRMEZCUXp0QlFURkRSQ3d3UTBFd1EwTTdRVUZGVlN4UlFVRkJMRXRCUVVzc1IwRkJSeXh2UWtGQlN5eERRVUZETzBGQlEyUXNVVUZCUVN4SFFVRkhMRWRCUVVjc2EwSkJRVWNzUTBGQlF6dEJRVU5XTEZGQlFVRXNTVUZCU1N4SFFVRkhMRzFDUVVGSkxFTkJRVU03UVVGRFdpeFJRVUZCTEZGQlFWRXNSMEZCUnl4MVFrRkJVU3hEUVVGRE8wRkJRM0JDTEZGQlFVRXNTVUZCU1N4SFFVRkhMRzFDUVVGSkxFTkJRVU03UVVGRFdpeFJRVUZCTEZGQlFWRXNSMEZCUnl4MVFrRkJVU3hEUVVGRE8wRkJRM0JDTEZGQlFVRXNXVUZCV1N4SFFVRkhMREpDUVVGWkxFTkJRVU03UVVGRE5VSXNVVUZCUVN4TlFVRk5MRWRCUVVjc2NVSkJRVTBzUTBGQlF6dEJRVU5vUWl4UlFVRkJMRk5CUVZNc1IwRkJSeXgzUWtGQlV5eERRVUZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IG51bmp1Y2tzID0gdHNsaWJfMS5fX2ltcG9ydFN0YXIocmVxdWlyZShcIm51bmp1Y2tzXCIpKTtcbmZ1bmN0aW9uIGlzTm9kZUpTKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaXNOb2RlSlMgPSBpc05vZGVKUztcbmZ1bmN0aW9uIGlzQnJvd3NlcigpIHtcbiAgICByZXR1cm4gIWlzTm9kZUpTKCk7XG59XG5leHBvcnRzLmlzQnJvd3NlciA9IGlzQnJvd3NlcjtcbmV4cG9ydHMudGVtcGxhdGVFbnZpcm9ubWVudCA9ICgoKSA9PiB7XG4gICAgY29uc3Qgbm9DYWNoZSA9IGdsb2JhbC5wcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zdCBlbnYgPSBuZXcgbnVuanVja3MuRW52aXJvbm1lbnQoe1xuICAgICAgICBnZXRTb3VyY2U6IChwYXRoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyBzcmM6IHJlcXVpcmUocGF0aCksIHBhdGgsIG5vQ2FjaGUgfTtcbiAgICAgICAgfVxuICAgIH0sIHsgbm9DYWNoZSB9KTtcbiAgICBlbnYuYWRkRmlsdGVyKCdqc29uJywgKHZhbHVlLCBzcGFjZXMpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgbnVuanVja3MucnVudGltZS5TYWZlU3RyaW5nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBudW5qdWNrcy5ydW50aW1lLlNhZmVTdHJpbmcoSlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIHNwYWNlcykpO1xuICAgIH0pO1xuICAgIHJldHVybiBlbnY7XG59KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWlc1MmFYSnZibTFsYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wzVjBhV3h6TDJWdWRtbHliMjV0Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxESkVRVUZ4UXp0QlFWRnlReXhUUVVGblFpeFJRVUZSTzBsQlEzQkNMRWxCUVVrc1QwRkJUeXhOUVVGTkxFdEJRVXNzVjBGQlZ5eEpRVUZKTEU5QlFVOHNUMEZCVHl4TFFVRkxMRkZCUVZFc1JVRkJSVHRSUVVNNVJDeFBRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTm1PMGxCUTBRc1QwRkJUeXhMUVVGTExFTkJRVU03UVVGRGFrSXNRMEZCUXp0QlFVeEVMRFJDUVV0RE8wRkJVVVFzVTBGQlowSXNVMEZCVXp0SlFVTnlRaXhQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdRVUZEZGtJc1EwRkJRenRCUVVaRUxEaENRVVZETzBGQlMxa3NVVUZCUVN4dFFrRkJiVUlzUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlR0SlFVTnlReXhOUVVGTkxFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFdEJRVXNzWVVGQllTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU0zUlN4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZEYWtNc1UwRkJVeXhGUVVGRkxFTkJRVU1zU1VGQldTeEZRVUZGTEVWQlFVVTdXVUZEZUVJc1QwRkJUeXhGUVVGRkxFZEJRVWNzUlVGQlJTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFOUJRVThzUlVGQlJTeERRVUZETzFGQlEycEVMRU5CUVVNN1MwRkRTaXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVVm9RaXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJUdFJRVU53UXl4SlFVRkpMRXRCUVVzc1dVRkJXU3hSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNSVUZCUlR0WlFVTTVReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMU5CUXpWQ08xRkJRMFFzVDBGQlR5eEpRVUZKTEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEyaEdMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMGdzVDBGQlR5eEhRVUZITEVOQlFVTTdRVUZEWml4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJpbmRpbmdfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CaW5kaW5nXCIpO1xuY29uc3QgQXR0cmlidXRlXzEgPSByZXF1aXJlKFwifmJkby9saWIvQXR0cmlidXRlXCIpO1xuY29uc3QgUHJvcGVydHlfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Qcm9wZXJ0eVwiKTtcbmNvbnN0IFdhdGNoZWRfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9XYXRjaGVkXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmZ1bmN0aW9uIGJlZm9yZURlc2NyaXB0b3IodGFyZ2V0LCBrZXksIG1EYXRhTmFtZSwgcGFyYW1zKSB7XG4gICAgaWYgKCFSZWZsZWN0Lmhhc01ldGFkYXRhKG1EYXRhTmFtZSwgdGFyZ2V0KSlcbiAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YSh0YXJnZXQsIG1EYXRhTmFtZSwgbmV3IE1hcCgpKTtcbiAgICBjb25zdCBtYXAgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRhcmdldCwgbURhdGFOYW1lKTtcbiAgICBjb25zdCBvbGREZWNvcmF0b3JTZXR0aW5ncyA9IG1hcC5nZXQoa2V5KSB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHV0aWxfMS5tZXJnZShvbGREZWNvcmF0b3JTZXR0aW5ncywgcGFyYW1zKTtcbiAgICBtYXAuc2V0KGtleSwgc2V0dGluZ3MpO1xuICAgIHJldHVybiBzZXR0aW5ncztcbn1cbmV4cG9ydHMuYmVmb3JlRGVzY3JpcHRvciA9IGJlZm9yZURlc2NyaXB0b3I7XG5mdW5jdGlvbiBnZXR0ZXIoaW5zdGFuY2UsIGtleSwgbnMgPSBcIlwiKSB7XG4gICAgbGV0IHN0cmluZ0tleSA9IGtleS50b1N0cmluZygpO1xuICAgIGlmIChucylcbiAgICAgICAgc3RyaW5nS2V5ID0gYCR7bnN9OiR7a2V5fWA7XG4gICAgaWYgKCFtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGluc3RhbmNlLCBcIm5vcm1hbEZ1bmN0aW9uYWxpdHlcIikpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShpbnN0YW5jZSwgXCJkZWZhdWx0U2V0dGluZ3NcIikgfHwge307XG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldChkZWZhdWx0U2V0dGluZ3MsIHN0cmluZ0tleSk7XG4gICAgfVxuICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKGluc3RhbmNlLCBzdHJpbmdLZXkpO1xuICAgIGlmIChtRGF0YSlcbiAgICAgICAgcmV0dXJuIG1EYXRhLnZhbHVlT2YoKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZXhwb3J0cy5nZXR0ZXIgPSBnZXR0ZXI7XG5mdW5jdGlvbiBzZXR0ZXIoaW5zdGFuY2UsIGtleSwgbmV3VmFsLCBucyA9IFwiXCIpIHtcbiAgICBsZXQgc3RyaW5nS2V5ID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgaWYgKG5zKVxuICAgICAgICBzdHJpbmdLZXkgPSBgJHtuc306JHtrZXl9YDtcbiAgICBpZiAoIW5zICYmIGluc3RhbmNlW3N0cmluZ0tleV0gPT09IG5ld1ZhbClcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmICghbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShpbnN0YW5jZSwgXCJub3JtYWxGdW5jdGlvbmFsaXR5XCIpKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwiZGVmYXVsdFNldHRpbmdzXCIpIHx8IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKGRlZmF1bHRTZXR0aW5ncywgeyBbc3RyaW5nS2V5XTogbmV3VmFsIH0pO1xuICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKGluc3RhbmNlLCBcImRlZmF1bHRTZXR0aW5nc1wiLCBkZWZhdWx0U2V0dGluZ3MpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKGluc3RhbmNlLCBzdHJpbmdLZXkpO1xuICAgIGlmIChuZXdWYWwgaW5zdGFuY2VvZiBCaW5kaW5nXzEuQmluZGluZykge1xuICAgICAgICBuZXdWYWwuaW5zdGFsbChpbnN0YW5jZSwga2V5KTtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgICBtRGF0YS5zZXRWYWx1ZShuZXdWYWwpO1xufVxuZXhwb3J0cy5zZXR0ZXIgPSBzZXR0ZXI7XG5mdW5jdGlvbiBjcmVhdGVEZWNvcmF0b3JEZXNjcmlwdG9yKHRhcmdldCwga2V5LCB0eXBlLCBwYXJhbXMpIHtcbiAgICBjb25zdCBwcm9wRGVzYyA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICBjb25zdCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KTtcbiAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gZGVjb3JhdG9yR2V0dGVyKCkge1xuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gZ2V0dGVyKHRoYXQsIHN0cmluZ0tleSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gZGVjb3JhdG9yU2V0dGVyKG5ld1ZhbCkge1xuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBtRGF0YSA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLCBrZXkpO1xuICAgICAgICAgICAgbGV0IGZpZWxkO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiQXR0cmlidXRlXCIpIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA9IG5ldyBBdHRyaWJ1dGVfMS5BdHRyaWJ1dGUodGhhdCwgc3RyaW5nS2V5LCBwYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJQcm9wZXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgZmllbGQgPSBuZXcgUHJvcGVydHlfMS5Qcm9wZXJ0eSh0aGF0LCBzdHJpbmdLZXksIHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZmllbGQgPSBuZXcgV2F0Y2hlZF8xLldhdGNoZWQodGhhdCwgc3RyaW5nS2V5LCBwYXJhbXMpO1xuICAgICAgICAgICAgaWYgKG1EYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKChtRGF0YSBpbnN0YW5jZW9mIEF0dHJpYnV0ZV8xLkF0dHJpYnV0ZSB8fCBtRGF0YSBpbnN0YW5jZW9mIFByb3BlcnR5XzEuUHJvcGVydHkpICYmIGZpZWxkIGluc3RhbmNlb2YgV2F0Y2hlZF8xLldhdGNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuc2V0U3ViT2JqZWN0KG1EYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhKHRoaXMsIHN0cmluZ0tleSwgZmllbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgoZmllbGQgaW5zdGFuY2VvZiBQcm9wZXJ0eV8xLlByb3BlcnR5IHx8IGZpZWxkIGluc3RhbmNlb2YgQXR0cmlidXRlXzEuQXR0cmlidXRlKSAmJiBtRGF0YSBpbnN0YW5jZW9mIFdhdGNoZWRfMS5XYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbURhdGEuc3ViT2JqZWN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgbURhdGEuc2V0U3ViT2JqZWN0KGZpZWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhKHRoaXMsIHN0cmluZ0tleSwgZmllbGQpO1xuICAgICAgICAgICAgaWYgKCgodHlwZSA9PT0gXCJBdHRyaWJ1dGVcIiB8fCB0eXBlID09PSBcIlByb3BlcnR5XCIpICYmICEobURhdGEgaW5zdGFuY2VvZiBXYXRjaGVkXzEuV2F0Y2hlZCkpIHx8IHR5cGUgPT09IFwiV2F0Y2hlZFwiKSB7XG4gICAgICAgICAgICAgICAgc2V0dGVyKHRoYXQsIHN0cmluZ0tleSwgbmV3VmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wRGVzYyAmJiBwcm9wRGVzYy5zZXQgJiYgcHJvcERlc2Muc2V0Lm5hbWUgPT09IFwiZGVjb3JhdG9yU2V0dGVyXCIpXG4gICAgICAgICAgICAgICAgcHJvcERlc2Muc2V0LmNhbGwodGhpcywgbmV3VmFsKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG59XG5leHBvcnRzLmNyZWF0ZURlY29yYXRvckRlc2NyaXB0b3IgPSBjcmVhdGVEZWNvcmF0b3JEZXNjcmlwdG9yO1xuZnVuY3Rpb24gaXNCYXNlQ29uc3RydWN0b3IodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgJiYgdmFsdWUubmFtZSA9PT0gXCJCYXNlQ29uc3RydWN0b3JcIilcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmIHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiQmFzZUNvbnN0cnVjdG9yXCIpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaXNCYXNlQ29uc3RydWN0b3IgPSBpc0Jhc2VDb25zdHJ1Y3RvcjtcbmZ1bmN0aW9uIGlzUmVmZXJlbmNlU3RyaW5nKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIilcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IHJlZlJlZ0V4ID0gL19yZWZlcmVuY2VcXDpbQS1afDAtOXxffCRdKlxcOltBLVp8MC05fFxcLXxfXSovZ2k7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUubWF0Y2gocmVmUmVnRXgpKS52YWx1ZU9mKCk7XG59XG5leHBvcnRzLmlzUmVmZXJlbmNlU3RyaW5nID0gaXNSZWZlcmVuY2VTdHJpbmc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labkpoYldWM2IzSnJMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzkxZEdsc2N5OW1jbUZ0WlhkdmNtc3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTdzRRMEZCTWtNN1FVRkRNME1zYTBSQlFXbEZPMEZCUTJwRkxHZEVRVUU0UkR0QlFVTTVSQ3c0UTBGQk1rUTdRVUZGTTBRc01FTkJRWGRETzBGQlEzaERMR3RFUVVFclJ6dEJRWGxETDBjc1UwRkJaMElzWjBKQlFXZENMRU5CU3psQ0xFMUJRVk1zUlVGQlJTeEhRVUZOTEVWQlFVVXNVMEZCV1N4RlFVRkZMRTFCUVZNN1NVRkZlRU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1UwRkJVeXhGUVVGRkxFMUJRVTBzUTBGQlF6dFJRVUZGTEhsQ1FVRmpMRU5CUVVNc1RVRkJUU3hGUVVGRkxGTkJRVk1zUlVGQlJTeEpRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRNVVlzVFVGQlRTeEhRVUZITEVkQlFVY3NjMEpCUVZjc1EwRkJReXhOUVVGTkxFVkJRVVVzVTBGQlV5eERRVUZ0UXl4RFFVRkRPMGxCUXpkRkxFMUJRVTBzYjBKQlFXOUNMRWRCUVVjc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1NVRkRhRVFzVFVGQlRTeFJRVUZSTEVkQlFVY3NXVUZCU3l4RFFVRkRMRzlDUVVGdlFpeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUTNKRUxFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8wbEJRM1pDTEU5QlFVOHNVVUZCVVN4RFFVRkRPMEZCUTNCQ0xFTkJRVU03UVVGaVJDdzBRMEZoUXp0QlFXRkVMRk5CUVdkQ0xFMUJRVTBzUTBGQmNVUXNVVUZCVnl4RlFVRkZMRWRCUVUwc1JVRkJSU3hMUVVGaExFVkJRVVU3U1VGRE0wY3NTVUZCU1N4VFFVRlRMRWRCUVVjc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBsQlF5OUNMRWxCUVVrc1JVRkJSVHRSUVVGRkxGTkJRVk1zUjBGQlJ5eEhRVUZITEVWQlFVVXNTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVOdVF5eEpRVUZKTEVOQlFVTXNjMEpCUVZjc1EwRkJReXhSUVVGUkxFVkJRVVVzY1VKQlFYRkNMRU5CUVVNc1JVRkJSVHRSUVVNdlF5eE5RVUZOTEdWQlFXVXNSMEZCUnl4elFrRkJWeXhEUVVGRExGRkJRVkVzUlVGQlJTeHBRa0ZCYVVJc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU4yUlN4UFFVRlBMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zWlVGQlpTeEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkRPMHRCUTJ4RU8wbEJRMFFzVFVGQlRTeExRVUZMTEVkQlFVY3NPRUpCUVcxQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkRPMGxCUTNaRUxFbEJRVWtzUzBGQlN6dFJRVUZGTEU5QlFVOHNTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8wbEJRMnhETEU5QlFVOHNVMEZCVXl4RFFVRkRPMEZCUTNKQ0xFTkJRVU03UVVGV1JDeDNRa0ZWUXp0QlFXVkVMRk5CUVdkQ0xFMUJRVTBzUTBGRlowSXNVVUZCVnl4RlFVRkZMRWRCUVUwc1JVRkJSU3hOUVVGeFFpeEZRVUZGTEV0QlFXRXNSVUZCUlR0SlFVYzNSaXhKUVVGSkxGTkJRVk1zUjBGQlJ5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkRMMElzU1VGQlNTeEZRVUZGTzFGQlFVVXNVMEZCVXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hKUVVGSkxFZEJRVWNzUlVGQlJTeERRVUZETzBsQlIyNURMRWxCUVVrc1EwRkJReXhGUVVGRkxFbEJRVWtzVVVGQlVTeERRVUZKTEZOQlFWTXNRMEZCUXl4TFFVRkxMRTFCUVUwN1VVRkJSU3hQUVVGUE8wbEJSM0pFTEVsQlFVa3NRMEZCUXl4elFrRkJWeXhEUVVGRExGRkJRVkVzUlVGQlJTeHhRa0ZCY1VJc1EwRkJReXhGUVVGRk8xRkJReTlETEUxQlFVMHNaVUZCWlN4SFFVRkhMSE5DUVVGWExFTkJRVU1zVVVGQlVTeEZRVUZGTEdsQ1FVRnBRaXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzFGQlEzWkZMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVWQlFVVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEzaEVMSGxDUVVGakxFTkJRVU1zVVVGQlVTeEZRVUZGTEdsQ1FVRnBRaXhGUVVGRkxHVkJRV1VzUTBGQlF5eERRVUZETzFGQlF6ZEVMRTlCUVU4N1MwRkRWanRKUVVkRUxFMUJRVTBzUzBGQlN5eEhRVUZITERoQ1FVRnRRaXhEUVVGRExGRkJRVkVzUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXp0SlFVVjJSQ3hKUVVGSkxFMUJRVTBzV1VGQldTeHBRa0ZCVHl4RlFVRkZPMUZCUXpOQ0xFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wdEJRMnBET3p0UlFVRk5MRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdRVUZEYkVNc1EwRkJRenRCUVhwQ1JDeDNRa0Y1UWtNN1FVRlhSQ3hUUVVGblFpeDVRa0ZCZVVJc1EwRkhWQ3hOUVVGVExFVkJRVVVzUjBGQlRTeEZRVUZGTEVsQlFXMUNMRVZCUVVVc1RVRkJVenRKUVVVM1JTeE5RVUZOTEZGQlFWRXNSMEZCUnl4UFFVRlBMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJReTlFTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dEpRVVZxUXl4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTndReXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEUxQlFVMHNSVUZCUlN4SFFVRkhMRVZCUVVVN1VVRkRhRU1zUjBGQlJ5eEZRVUZGTEZOQlFWTXNaVUZCWlR0WlFVTjZRaXhOUVVGTkxFbEJRVWtzUjBGQlVTeEpRVUZKTEVOQlFVTTdXVUZEZGtJc1QwRkJUeXhOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUTI1RExFTkJRVU03VVVGRFJDeEhRVUZITEVWQlFVVXNVMEZCVXl4bFFVRmxMRU5CUVVNc1RVRkJWenRaUVVOeVF5eE5RVUZOTEVsQlFVa3NSMEZCVVN4SlFVRkpMRU5CUVVNN1dVRkRka0lzVFVGQlRTeExRVUZMTEVkQlFVY3NPRUpCUVcxQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUnpkRExFbEJRVWtzUzBGQlN5eERRVUZETzFsQlExWXNTVUZCU1N4SlFVRkpMRXRCUVVzc1YwRkJWeXhGUVVGRk8yZENRVU4wUWl4TFFVRkxMRWRCUVVjc1NVRkJTU3h4UWtGQlV5eERRVUZETEVsQlFVa3NSVUZCUlN4VFFVRlRMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03WVVGRGJFUTdhVUpCUVUwc1NVRkJTU3hKUVVGSkxFdEJRVXNzVlVGQlZTeEZRVUZGTzJkQ1FVTTFRaXhMUVVGTExFZEJRVWNzU1VGQlNTeHRRa0ZCVVN4RFFVRkRMRWxCUVVrc1JVRkJSU3hUUVVGVExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdZVUZEYWtRN08yZENRVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMR2xDUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGTEZOQlFWTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRaUVVkd1JDeEpRVUZKTEV0QlFVc3NSVUZCUlR0blFrRkRVQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eFpRVUZaTEhGQ1FVRlRMRWxCUVVrc1MwRkJTeXhaUVVGWkxHMUNRVUZSTEVOQlFVTXNTVUZCU1N4TFFVRkxMRmxCUVZrc2FVSkJRVThzUlVGQlJUdHZRa0ZEZGtZc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0dlFrRkRNVUlzYVVOQlFYTkNMRU5CUVVNc1NVRkJTU3hGUVVGRkxGTkJRVk1zUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0cFFrRkRiRVE3Y1VKQlFVMHNTVUZCU1N4RFFVRkRMRXRCUVVzc1dVRkJXU3h0UWtGQlVTeEpRVUZKTEV0QlFVc3NXVUZCV1N4eFFrRkJVeXhEUVVGRExFbEJRVWtzUzBGQlN5eFpRVUZaTEdsQ1FVRlBMRVZCUVVVN2IwSkJRemxHTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVenQzUWtGQlJTeExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8ybENRVU51UkR0aFFVTktPenRuUWtGQlRTeHBRMEZCYzBJc1EwRkJReXhKUVVGSkxFVkJRVVVzVTBGQlV5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUTNSRUxFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NTMEZCU3l4WFFVRlhMRWxCUVVrc1NVRkJTU3hMUVVGTExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4TFFVRkxMRmxCUVZrc2FVSkJRVThzUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4TFFVRkxMRk5CUVZNc1JVRkJSVHRuUWtGRGRFY3NUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hUUVVGVExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdZVUZEYmtNN1dVRkRSQ3hKUVVGSkxGRkJRVkVzU1VGQlNTeFJRVUZSTEVOQlFVTXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeExRVUZMTEdsQ1FVRnBRanRuUWtGQlJTeFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdVVUZETjBjc1EwRkJRenRSUVVORUxGVkJRVlVzUlVGQlJTeEpRVUZKTzFGQlEyaENMRmxCUVZrc1JVRkJSU3hKUVVGSk8wdEJRM0pDTEVOQlFVTXNRMEZCUXp0QlFVTlFMRU5CUVVNN1FVRXpRMFFzT0VSQk1rTkRPMEZCVTBRc1UwRkJaMElzYVVKQlFXbENMRU5CUVVNc1MwRkJZVHRKUVVNelF5eEpRVUZKTEU5QlFVOHNTMEZCU3l4TFFVRkxMRlZCUVZVc1NVRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeExRVUZMTEdsQ1FVRnBRanRSUVVGRkxFOUJRVThzU1VGQlNTeERRVUZETzBsQlEycEdMRWxCUVVrc1MwRkJTeXhaUVVGWkxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1MwRkJTeXhwUWtGQmFVSTdVVUZCUlN4UFFVRlBMRWxCUVVrc1EwRkJRenRKUVVONlJpeFBRVUZQTEV0QlFVc3NRMEZCUXp0QlFVTnFRaXhEUVVGRE8wRkJTa1FzT0VOQlNVTTdRVUZUUkN4VFFVRm5RaXhwUWtGQmFVSXNRMEZCUXl4TFFVRlZPMGxCUTNoRExFbEJRVWtzVDBGQlR5eExRVUZMTEV0QlFVc3NVVUZCVVR0UlFVRkZMRTlCUVU4c1MwRkJTeXhEUVVGRE8wbEJRelZETEUxQlFVMHNVVUZCVVN4SFFVRkhMQ3REUVVFclF5eERRVUZETzBsQlEycEZMRTlCUVU4c1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dEJRVU53UkN4RFFVRkRPMEZCU2tRc09FTkJTVU1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZGVmaW5lTWV0YWRhdGEodGFyZ2V0LCBrZXksIHZhbCkge1xuICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoa2V5LCB2YWwsIHRhcmdldCk7XG59XG5leHBvcnRzLmRlZmluZU1ldGFkYXRhID0gZGVmaW5lTWV0YWRhdGE7XG5mdW5jdGlvbiBnZXRNZXRhZGF0YSh0YXJnZXQsIGtleSkge1xuICAgIHJldHVybiBSZWZsZWN0LmdldE1ldGFkYXRhKGtleSwgdGFyZ2V0KTtcbn1cbmV4cG9ydHMuZ2V0TWV0YWRhdGEgPSBnZXRNZXRhZGF0YTtcbmZ1bmN0aW9uIGRlZmluZVdpbGRjYXJkTWV0YWRhdGEodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShrZXksIHZhbHVlLCB0YXJnZXQpO1xufVxuZXhwb3J0cy5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhID0gZGVmaW5lV2lsZGNhcmRNZXRhZGF0YTtcbmZ1bmN0aW9uIGdldFdpbGRjYXJkTWV0YWRhdGEodGFyZ2V0LCBrZXkpIHtcbiAgICByZXR1cm4gUmVmbGVjdC5nZXRNZXRhZGF0YShrZXksIHRhcmdldCk7XG59XG5leHBvcnRzLmdldFdpbGRjYXJkTWV0YWRhdGEgPSBnZXRXaWxkY2FyZE1ldGFkYXRhO1xuZnVuY3Rpb24gZ2V0RGVzaWduVHlwZSh0YXJnZXQsIGtleSkge1xuICAgIHJldHVybiBSZWZsZWN0LmdldE1ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdGFyZ2V0LCBrZXkpO1xufVxuZXhwb3J0cy5nZXREZXNpZ25UeXBlID0gZ2V0RGVzaWduVHlwZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXVjBZV1JoZEdFdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wzVjBhV3h6TDIxbGRHRmtZWFJoTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJPRWxCTEZOQlFXZENMR05CUVdNc1EwRkJLME1zVFVGQlV5eEZRVUZGTEVkQlFVMHNSVUZCUlN4SFFVRnJRanRKUVVNNVJ5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdRVUZETjBNc1EwRkJRenRCUVVaRUxIZERRVVZETzBGQlYwUXNVMEZCWjBJc1YwRkJWeXhEUVVFclF5eE5RVUZUTEVWQlFVVXNSMEZCVFR0SlFVTjJSaXhQUVVGUExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRelZETEVOQlFVTTdRVUZHUkN4clEwRkZRenRCUVZWRUxGTkJRV2RDTEhOQ1FVRnpRaXhEUVVGRExFMUJRV01zUlVGQlJTeEhRVUZqTEVWQlFVVXNTMEZCVlR0SlFVTTNSU3hQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NSVUZCUlN4TFFVRkxMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03UVVGREwwTXNRMEZCUXp0QlFVWkVMSGRFUVVWRE8wRkJWVVFzVTBGQlowSXNiVUpCUVcxQ0xFTkJRVU1zVFVGQll5eEZRVUZGTEVkQlFXTTdTVUZET1VRc1QwRkJUeXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEVkQlFVY3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRCUVVNMVF5eERRVUZETzBGQlJrUXNhMFJCUlVNN1FVRlZSQ3hUUVVGblFpeGhRVUZoTEVOQlFVTXNUVUZCWXl4RlFVRkZMRWRCUVZjN1NVRkRja1FzVDBGQlR5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZETTBRc1EwRkJRenRCUVVaRUxITkRRVVZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IGVudmlyb25tZW50XzEgPSByZXF1aXJlKFwifmJkby91dGlscy9lbnZpcm9ubWVudFwiKTtcbmNvbnN0IG9uX2NoYW5nZV8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm9uLWNoYW5nZVwiKSk7XG52YXIgbG9kYXNoXzEgPSByZXF1aXJlKFwibG9kYXNoXCIpO1xuZXhwb3J0cy5tZXJnZSA9IGxvZGFzaF8xLm1lcmdlO1xuZXhwb3J0cy5vbWl0ID0gbG9kYXNoXzEub21pdDtcbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGxvZGFzaF8xLmlzRnVuY3Rpb247XG5leHBvcnRzLmlzT2JqZWN0ID0gbG9kYXNoXzEuaXNPYmplY3Q7XG5leHBvcnRzLnBpY2tCeSA9IGxvZGFzaF8xLnBpY2tCeTtcbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBsb2Rhc2hfMS5pc1VuZGVmaW5lZDtcbmV4cG9ydHMuaXNFcXVhbCA9IGxvZGFzaF8xLmlzRXF1YWw7XG5leHBvcnRzLmlzU3RyaW5nID0gbG9kYXNoXzEuaXNTdHJpbmc7XG5leHBvcnRzLmlzTnVtYmVyID0gbG9kYXNoXzEuaXNOdW1iZXI7XG5leHBvcnRzLmlzQXJyYXkgPSBsb2Rhc2hfMS5pc0FycmF5O1xuZXhwb3J0cy5kaWZmZXJlbmNlID0gbG9kYXNoXzEuZGlmZmVyZW5jZTtcbmV4cG9ydHMuZGVib3VuY2UgPSBsb2Rhc2hfMS5kZWJvdW5jZTtcbmZ1bmN0aW9uIHVjRmlyc3Qoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cbmV4cG9ydHMudWNGaXJzdCA9IHVjRmlyc3Q7XG5mdW5jdGlvbiBjYW1lbENhc2Uya2ViYWJDYXNlKHN0cikge1xuICAgIHN0ciA9IHN0ci5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbYS16MC05XXwoPz1bQS1aXSkpKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xufVxuZXhwb3J0cy5jYW1lbENhc2Uya2ViYWJDYXNlID0gY2FtZWxDYXNlMmtlYmFiQ2FzZTtcbmZ1bmN0aW9uIHBhc2NhbENhc2Uya2ViYWJDYXNlKHN0cikge1xuICAgIHN0ciA9IHVjRmlyc3Qoc3RyKTtcbiAgICByZXR1cm4gY2FtZWxDYXNlMmtlYmFiQ2FzZShzdHIpO1xufVxuZXhwb3J0cy5wYXNjYWxDYXNlMmtlYmFiQ2FzZSA9IHBhc2NhbENhc2Uya2ViYWJDYXNlO1xuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudEZyb21BcnJheShhcnJheSwgZWxlbWVudCkge1xuICAgIGNvbnN0IGluZGV4ID0gYXJyYXkuaW5kZXhPZihlbGVtZW50KTtcbiAgICBpZiAoaW5kZXggPj0gMClcbiAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbn1cbmV4cG9ydHMucmVtb3ZlRWxlbWVudEZyb21BcnJheSA9IHJlbW92ZUVsZW1lbnRGcm9tQXJyYXk7XG5mdW5jdGlvbiBnZXRQcm90b3R5cGVOYW1lc1JlY3Vyc2l2ZShvYmplY3QsIHByb3RvdHlwZXMgPSBbXSkge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChwcm90b3R5cGUpIHtcbiAgICAgICAgcHJvdG90eXBlcy5wdXNoKHByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICAgICAgZ2V0UHJvdG90eXBlTmFtZXNSZWN1cnNpdmUocHJvdG90eXBlLCBwcm90b3R5cGVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3RvdHlwZXM7XG59XG5leHBvcnRzLmdldFByb3RvdHlwZU5hbWVzUmVjdXJzaXZlID0gZ2V0UHJvdG90eXBlTmFtZXNSZWN1cnNpdmU7XG5mdW5jdGlvbiBpbmNsdWRlc01lbWJlck9mTGlzdChzZWFyY2gsIGxpc3QsIGV4dGVuc2lvbiA9ICcnKSB7XG4gICAgZm9yIChjb25zdCBtZW1iZXIgb2YgbGlzdCkge1xuICAgICAgICBpZiAoc2VhcmNoLmluY2x1ZGVzKGAke21lbWJlcn0ke2V4dGVuc2lvbn1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pbmNsdWRlc01lbWJlck9mTGlzdCA9IGluY2x1ZGVzTWVtYmVyT2ZMaXN0O1xuZnVuY3Rpb24gY29uc3RydWN0VHlwZU9mSFRNTEF0dHJpYnV0ZShvYmplY3QsIGtleSkge1xuICAgIGlmICghZW52aXJvbm1lbnRfMS5pc0Jyb3dzZXIoKSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHR5cGUgPSBtZXRhZGF0YV8xLmdldERlc2lnblR5cGUob2JqZWN0LCBrZXkpO1xuICAgIGNvbnN0IGF0dHJWYWx1ZSA9IG9iamVjdC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICBsZXQgdmFsdWVUb1NldCA9IGF0dHJWYWx1ZTtcbiAgICBpZiAoYXR0clZhbHVlICYmIHR5cGUgJiYgdHlwZS5uYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKFtcIk51bWJlclwiLCBcIkJvb2xlYW5cIiwgXCJPYmplY3RcIiwgXCJBcnJheVwiXS5pbmNsdWRlcyh0eXBlLm5hbWUpKSB7XG4gICAgICAgICAgICB2YWx1ZVRvU2V0ID0gSlNPTi5wYXJzZShhdHRyVmFsdWUucmVwbGFjZSgvJy9nLCAnXCInKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUubmFtZSA9PT0gXCJCYXNlQ29uc3RydWN0b3JcIikge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0gSlNPTi5wYXJzZShhdHRyVmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gb2JqLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIGlmICghY2xhc3NOYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNsYXNzTmFtZSBpcyBtaXNzaW5nIGluIGNvbXBvbmVudCBhdHRyaWJ1dGUgdmFsdWVcIik7XG4gICAgICAgICAgICBkZWxldGUgb2JqLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIHZhbHVlVG9TZXQgPSBuZXcgKHR5cGUubmFtZSkob2JqKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodmFsdWVUb1NldCAmJiB0eXBlICYmIHZhbHVlVG9TZXQuY29uc3RydWN0b3IubmFtZSAhPT0gdHlwZS5uYW1lKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdHRyaWJ1dGUgdHlwZSBlcXVhbHMgbm90IGRlZmluZWQgdHlwZVwiKTtcbiAgICByZXR1cm4gdmFsdWVUb1NldDtcbn1cbmV4cG9ydHMuY29uc3RydWN0VHlwZU9mSFRNTEF0dHJpYnV0ZSA9IGNvbnN0cnVjdFR5cGVPZkhUTUxBdHRyaWJ1dGU7XG5mdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgIT09IE9iamVjdCh2YWx1ZSkpO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuZnVuY3Rpb24gaXNQcm94eSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG9uX2NoYW5nZV8xLmRlZmF1bHQudGFyZ2V0KHZhbHVlKSA9PT0gdmFsdWUpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydHMuaXNQcm94eSA9IGlzUHJveHk7XG5mdW5jdGlvbiBnZXRQcm94eVRhcmdldCh2YWx1ZSkge1xuICAgIGlmIChpc1Byb3h5KHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIG9uX2NoYW5nZV8xLmRlZmF1bHQudGFyZ2V0KHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5leHBvcnRzLmdldFByb3h5VGFyZ2V0ID0gZ2V0UHJveHlUYXJnZXQ7XG5mdW5jdGlvbiB0b1VSSVBhdGhQYXJ0KHZhbHVlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXC8rL2csIFwiL1wiKTtcbiAgICBpZiAoIXZhbHVlLnN0YXJ0c1dpdGgoXCIvXCIpKVxuICAgICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gO1xuICAgIGlmICh2YWx1ZS5lbmRzV2l0aChcIi9cIikgJiYgdmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIC0xKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZXhwb3J0cy50b1VSSVBhdGhQYXJ0ID0gdG9VUklQYXRoUGFydDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRYUnBiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2ZFhScGJITXZkWFJwYkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN4clJFRkJiMFE3UVVGRGNFUXNkMFJCUVcxRU8wRkJRMjVFTEd0RlFVRnBRenRCUVVWcVF5eHBRMEZoWjBJN1FVRmFXaXg1UWtGQlFTeExRVUZMTEVOQlFVRTdRVUZEVEN4M1FrRkJRU3hKUVVGSkxFTkJRVUU3UVVGRFNpdzRRa0ZCUVN4VlFVRlZMRU5CUVVFN1FVRkRWaXcwUWtGQlFTeFJRVUZSTEVOQlFVRTdRVUZEVWl3d1FrRkJRU3hOUVVGTkxFTkJRVUU3UVVGRFRpd3JRa0ZCUVN4WFFVRlhMRU5CUVVFN1FVRkRXQ3d5UWtGQlFTeFBRVUZQTEVOQlFVRTdRVUZEVUN3MFFrRkJRU3hSUVVGUkxFTkJRVUU3UVVGRFVpdzBRa0ZCUVN4UlFVRlJMRU5CUVVFN1FVRkRVaXd5UWtGQlFTeFBRVUZQTEVOQlFVRTdRVUZEVUN3NFFrRkJRU3hWUVVGVkxFTkJRVUU3UVVGRFZpdzBRa0ZCUVN4UlFVRlJMRU5CUVVFN1FVRlZXaXhUUVVGblFpeFBRVUZQTEVOQlFVTXNSMEZCVnp0SlFVTXZRaXhQUVVGUExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOMFJDeERRVUZETzBGQlJrUXNNRUpCUlVNN1FVRlRSQ3hUUVVGblFpeHRRa0ZCYlVJc1EwRkJReXhIUVVGWE8wbEJRek5ETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYWtRc1QwRkJUeXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETERoQ1FVRTRRaXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMEZCUXpsRkxFTkJRVU03UVVGSVJDeHJSRUZIUXp0QlFWTkVMRk5CUVdkQ0xHOUNRVUZ2UWl4RFFVRkRMRWRCUVZjN1NVRkROVU1zUjBGQlJ5eEhRVUZITEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOdVFpeFBRVUZQTEcxQ1FVRnRRaXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEzQkRMRU5CUVVNN1FVRklSQ3h2UkVGSFF6dEJRVk5FTEZOQlFXZENMSE5DUVVGelFpeERRVUZETEV0QlFWa3NSVUZCUlN4UFFVRlpPMGxCUXpkRUxFMUJRVTBzUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRGNrTXNTVUZCU1N4TFFVRkxMRWxCUVVrc1EwRkJRenRSUVVGRkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRek5ETEVOQlFVTTdRVUZJUkN4M1JFRkhRenRCUVZORUxGTkJRV2RDTERCQ1FVRXdRaXhEUVVGRExFMUJRVmNzUlVGQlJTeGhRVUYxUWl4RlFVRkZPMGxCUXpkRkxFMUJRVTBzVTBGQlV5eEhRVUZITEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGFFUXNTVUZCU1N4VFFVRlRMRVZCUVVVN1VVRkRXQ3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE5VTXNNRUpCUVRCQ0xFTkJRVU1zVTBGQlV5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRPMHRCUTNKRU8wbEJRMFFzVDBGQlR5eFZRVUZWTEVOQlFVTTdRVUZEZEVJc1EwRkJRenRCUVZCRUxHZEZRVTlETzBGQlYwUXNVMEZCWjBJc2IwSkJRVzlDTEVOQlFVTXNUVUZCZVVJc1JVRkJSU3hKUVVGakxFVkJRVVVzV1VGQmIwSXNSVUZCUlR0SlFVTnNSeXhMUVVGTExFMUJRVTBzVFVGQlRTeEpRVUZKTEVsQlFVa3NSVUZCUlR0UlFVTjJRaXhKUVVGSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4TlFVRk5MRWRCUVVjc1UwRkJVeXhGUVVGRkxFTkJRVU1zUlVGQlJUdFpRVU14UXl4UFFVRlBMRWxCUVVrc1EwRkJRenRUUVVObU8wdEJRMG83U1VGRFJDeFBRVUZQTEV0QlFVc3NRMEZCUXp0QlFVTnFRaXhEUVVGRE8wRkJVRVFzYjBSQlQwTTdRVUZYUkN4VFFVRm5RaXcwUWtGQk5FSXNRMEZCUXl4TlFVRnRRaXhGUVVGRkxFZEJRVmM3U1VGRGVrVXNTVUZCU1N4RFFVRkRMSFZDUVVGVExFVkJRVVU3VVVGQlJTeFBRVUZQTzBsQlEzcENMRTFCUVUwc1NVRkJTU3hIUVVGSExIZENRVUZoTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRM2hETEUxQlFVMHNVMEZCVXl4SFFVRkhMRTFCUVUwc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZKTTBNc1NVRkJTU3hWUVVGVkxFZEJRVkVzVTBGQlV5eERRVUZETzBsQlEyaERMRWxCUVVrc1UwRkJVeXhKUVVGSkxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4TFFVRkxMRk5CUVZNc1JVRkJSVHRSUVVNNVF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRk5CUVZNc1JVRkJSU3hSUVVGUkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU01UkN4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzcEVPMUZCUTBRc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeExRVUZMTEdsQ1FVRnBRaXhGUVVGRk8xbEJRMnBETEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdXVUZEYkVNc1RVRkJUU3hUUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXp0WlFVTm9ReXhKUVVGSkxFTkJRVU1zVTBGQlV6dG5Ra0ZCUlN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHMUVRVUZ0UkN4RFFVRkRMRU5CUVVNN1dVRkRja1lzVDBGQlR5eEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRPMWxCUTNKQ0xGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFOQlEzSkRPMHRCUTBvN1NVRkRSQ3hKUVVGSkxGVkJRVlVzU1VGQlNTeEpRVUZKTEVsQlFVa3NWVUZCVlN4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFdEJRVXNzU1VGQlNTeERRVUZETEVsQlFVazdVVUZCUlN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExIZERRVUYzUXl4RFFVRkRMRU5CUVVNN1NVRkRMMGdzVDBGQlR5eFZRVUZWTEVOQlFVTTdRVUZEZEVJc1EwRkJRenRCUVhSQ1JDeHZSVUZ6UWtNN1FVRlRSQ3hUUVVGblFpeFhRVUZYTEVOQlFVTXNTMEZCVlR0SlFVTnNReXhQUVVGUExFTkJRVU1zUzBGQlN5eExRVUZMTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM0pETEVOQlFVTTdRVUZHUkN4clEwRkZRenRCUVZORUxGTkJRV2RDTEU5QlFVOHNRMEZCUXl4TFFVRlZPMGxCUXpsQ0xFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1NVRkJTVHRSUVVGRkxFOUJRVThzUzBGQlN5eERRVUZETzBsQlEzaEVMRWxCUVVrc2JVSkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1MwRkJTenRSUVVGRkxFOUJRVThzUzBGQlN5eERRVUZETzBsQlEyNUVMRTlCUVU4c1NVRkJTU3hEUVVGRE8wRkJRMmhDTEVOQlFVTTdRVUZLUkN3d1FrRkpRenRCUVZWRUxGTkJRV2RDTEdOQlFXTXNRMEZCUXl4TFFVRlZPMGxCUTNKRExFbEJRVWtzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXp0UlFVRkZMRTlCUVU4c2JVSkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRiRVFzVDBGQlR5eExRVUZMTEVOQlFVTTdRVUZEYWtJc1EwRkJRenRCUVVoRUxIZERRVWRETzBGQlZVUXNVMEZCWjBJc1lVRkJZU3hEUVVGRExFdEJRV0U3U1VGRGRrTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUTI1RExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVGRkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEV0QlFVc3NSVUZCUlN4RFFVRkRPMGxCUTJoRUxFbEJRVWtzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlR0UlFVTjZReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dExRVU01UWp0SlFVTkVMRTlCUVU4c1MwRkJTeXhEUVVGRE8wRkJRMnBDTEVOQlFVTTdRVUZRUkN4elEwRlBReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG53aW5kb3cudmlydHVhbFJvdXRlcyA9IFtcIkNvbmZpZ1wiLCBcIkdhbWVMb2JieVwiLCBcIkhvbWVcIl07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkbWx5ZEhWaGJFVnVkSEo1VUc5cGJuUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOTJZWEl2ZEcxd0wzWnBjblIxWVd4RmJuUnllVkJ2YVc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCVFN4TlFVRlBMRU5CUVVNc1lVRkJZU3hIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZETEZkQlFWY3NSVUZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReUo5Il0sInNvdXJjZVJvb3QiOiIifQ==