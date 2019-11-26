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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld1JvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvVmlld1JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2REFBaUU7QUFDakUsMENBQXVEO0FBQ3ZELHNEQUF3RDtBQUN4RCxzREFBaUQ7QUFDakQsNERBQTRCO0FBVTVCLElBQXFCLFVBQVUsR0FBL0IsTUFBcUIsVUFBVyxTQUFRLG9DQUFvQixDQUFDLFdBQVcsQ0FBQztJQUF6RTs7UUFTaUMsV0FBTSxHQUFHLElBQUksZ0JBQU0sRUFBRSxDQUFDO0lBK0N2RCxDQUFDO0lBdkNhLGlCQUFpQjtRQUN2QixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2hDLENBQUM7SUFRTyxlQUFlO1FBQ25CLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRTtZQUN0QyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsZUFBZSxLQUFLLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUMzRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBVU8sb0JBQW9CLENBQUMsS0FBVTtRQUNuQyxJQUFJO1lBQ0EsSUFBSSxDQUFDLDJCQUFvQixDQUFXLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBUyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQUUsT0FBTztZQUMzRyxNQUFNLFVBQVUsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO2dCQUMzQixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLDJDQUEyQyxDQUFDLENBQUM7YUFDOUY7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDckM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE1BQU0sS0FBSyxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0NBQ0osQ0FBQTtBQS9DZTtJQUFYLHFCQUFRLEVBQUU7OzBDQUF3QztBQVRsQyxVQUFVO0lBRDlCLDRCQUFlLEVBQUU7R0FDRyxVQUFVLENBd0Q5QjtrQkF4RG9CLFVBQVUifQ==
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js?cd00")))

/***/ }),

/***/ "./source/app/client/ts/lib/BaseComponent.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
__webpack_require__("./node_modules/reflect-metadata/Reflect.js");
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
                if (util_2.isString(this.templateString)) {
                    stringToParse = nunjucks_1.renderString(this.templateString, this.templateParams);
                }
                if (util_2.isObject(this.templateString)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9CYXNlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRCQUEwQjtBQUMxQix1Q0FBa0Q7QUFDbEQsc0RBQTREO0FBQzVELGtEQUF1RTtBQUd2RSw2Q0FBbUg7QUFDbkgsMENBQXNIO0FBVXRILFNBQWdCLG9CQUFvQixDQUF5QyxlQUFzQjs7SUFRL0YsTUFBZSxhQUFjLFNBQVEsZUFBZTtRQXVJaEQsWUFBWSxHQUFHLElBQVc7WUFDdEIsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFsRkMsT0FBRSxHQUFXLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBUTdCLG9CQUFlLEdBQVksSUFBSSxDQUFDO1lBU2hDLGNBQVMsR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFVcEMsbUJBQWMsR0FBc0IsMEJBQTBCLENBQUM7WUFXbEcsbUJBQWMsR0FBbUIsRUFBRSxDQUFDO1FBNkMxRCxDQUFDO1FBcEdELElBQVcsVUFBVTtZQUNqQixNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ3hCLE1BQU0sVUFBVSxHQUFHLHNCQUFXLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDLENBQUM7WUFDMUQsSUFBSSxVQUFVLEVBQUU7Z0JBQ1osS0FBSyxNQUFNLElBQUksSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQ2xDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLDhCQUFtQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUNwRDthQUNKO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQXdERCxJQUFjLFFBQVE7WUFDbEIsTUFBTSxRQUFRLEdBQUcsc0JBQVcsQ0FB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

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

var ClientModel_1;
Object.defineProperty(exports, "__esModule", { value: true });
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
        return new Promise(async (resolve) => {
            let model = ModelRegistry_1.ModelRegistry.getInstance().getModelById(id, this);
            if (!model)
                model = new this();
            const dataFromLocalDB = await databaseManager
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
                        if (elem instanceof Array && util_2.difference(correspondingListLikeDB, elem).length) {
                            const pendingItems = [];
                            for (let item of elem) {
                                if (framework_1.isReferenceString(item)) {
                                    const refParts = item.split(":")[1];
                                    const className = refParts[1];
                                    klass = __webpack_require__("./source/app/client/ts/models sync recursive ^\\.\\/.*\\.ts$")(`./${className}.ts`)[className];
                                    pendingItems.push(klass.getInstanceByID(refParts[2]).then((result) => {
                                        item = result;
                                    }));
                                }
                            }
                            pendingPromises.push(Promise.all(pendingItems));
                        }
                        else if (framework_1.isReferenceString(elem) && elem !== model.getReferenceString()) {
                            const refParts = elem.split(":")[1];
                            const className = refParts[1];
                            klass = __webpack_require__("./source/app/client/ts/models sync recursive ^\\.\\/.*\\.ts$")(`./${className}.ts`)[className];
                            pendingPromises.push(klass.getInstanceByID(refParts[2]).then((result) => {
                                elem = result;
                            }));
                        }
                    }
                }
                await Promise.all(pendingPromises);
                Object.assign(model, dataFromLocalDB);
            }
            if (!model.id.includes("pending"))
                return resolve(model);
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
        if (!definedAttributes || attr && !definedAttributes.has(attr))
            throw new Error("invalid defined attributes");
        const attributes = attr ? [attr] : definedAttributes.keys();
        const unsavedChanges = await this.getUnsavedChanges();
        const toSave = {};
        const sendToServer = {};
        for (const attribute of attributes) {
            if (unsavedChanges.hasOwnProperty(attribute)) {
                const strAttr = attribute;
                let proxyVal = util_2.getProxyTarget(unsavedChanges[strAttr]);
                if (proxyVal instanceof Array) {
                    proxyVal = proxyVal.map((item) => {
                        if (item instanceof ClientModel_1) {
                            return item.getReferenceString();
                        }
                        return util_2.getProxyTarget(item);
                    });
                }
                if (proxyVal instanceof ClientModel_1)
                    proxyVal = proxyVal.getReferenceString();
                let wildCardMetadata = metadata_1.getWildcardMetadata(this, strAttr);
                if (wildCardMetadata instanceof Watched_1.Watched)
                    wildCardMetadata = wildCardMetadata.subObject;
                if (!wildCardMetadata.doNotPersist)
                    toSave[strAttr] = proxyVal;
                if (!wildCardMetadata.noServerInteraction)
                    sendToServer[strAttr] = proxyVal;
            }
        }
        try {
            if (Object.keys(toSave).length) {
                await databaseManager
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
    }
    discard(_attr) {
        throw new Error("Method not implemented.");
    }
    async getUnsavedChanges() {
        if (!this.collectionName)
            return Promise.reject("No collectionName provided");
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
                }
                else if (util_2.isObject(attrVal) && !util_2.isEqual(attrVal, dbCollection[strAttr])) {
                    unsavedChanges[strAttr] = this[attr];
                }
                else if (util_2.isPrimitive(attrVal) && attrVal !== dbCollection[strAttr]) {
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
tslib_1.__decorate([
    decorators_1.property(),
    tslib_1.__metadata("design:type", Boolean)
], ClientModel.prototype, "isClientModel", void 0);
ClientModel = ClientModel_1 = tslib_1.__decorate([
    decorators_1.baseConstructor()
], ClientModel);
exports.ClientModel = ClientModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50TW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQ2xpZW50TW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNEQUFrRTtBQUNsRSxnREFBNkM7QUFDN0MsNkNBQW1IO0FBQ25ILG9EQUF5RDtBQUN6RCxrREFBdUU7QUFDdkUsK0NBQTRDO0FBQzVDLGlFQUE4RDtBQUU5RCw4Q0FBMkM7QUFDM0MsMENBQXNHO0FBQ3RHLDBEQUF1RDtBQUV2RCxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO0FBQzVCLE1BQU0sZUFBZSxHQUFHLGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7QUFXdEQsSUFBYSxXQUFXLG1CQUF4QixNQUFhLFdBQVksU0FBUSxtQkFBUTtJQUF6Qzs7UUFrQmdDLGtCQUFhLEdBQVksSUFBSSxDQUFDO0lBa085RCxDQUFDO0lBbE5VLE1BQU0sQ0FBQyxlQUFlLENBQTJDLEVBQVc7UUFDL0UsT0FBTyxJQUFJLE9BQU8sQ0FBZ0IsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQ2hELElBQUksS0FBSyxHQUFHLDZCQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQWtCLENBQUM7WUFDaEYsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDL0IsTUFBTSxlQUFlLEdBQUcsTUFBTSxlQUFlO2lCQUN4QyxRQUFRLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztpQkFDNUIsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7aUJBQ2hDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNiLElBQUksZUFBZSxFQUFFO2dCQUNqQixNQUFNLGVBQWUsR0FBd0IsRUFBRSxDQUFDO2dCQUNoRCxLQUFLLE1BQU0sR0FBRyxJQUFJLGVBQWUsRUFBRTtvQkFD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

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50Um91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQ2xpZW50Um91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnREFBNkM7QUFDN0MsMENBQXdDO0FBQ3hDLCtDQUE0QztBQUU1QyxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO0FBVTVCLE1BQWEsV0FBWSxTQUFRLG1CQUFRO0lBQXpDOztRQVFvQixrQkFBYSxHQUFZLElBQUksQ0FBQztJQXNEbEQsQ0FBQztJQTlDRyxJQUFXLE1BQU07UUFDYixNQUFNLE1BQU0sR0FBUSxFQUFFLENBQUM7UUFDdkIsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzdCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdGO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQVdTLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBc0I7UUFDakQsT0FBTyxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFTUyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQXNCO1FBQzVDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixFQUFFLEVBQUUsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBVU8sS0FBSyxDQUFDLHdCQUF3QjtRQUNsQyxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXO1lBQUUsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUNwQyxNQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDMUQsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0NBQ0o7QUE5REQsa0NBOERDIn0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9saWIvQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQThEO0FBRTlELHdEQUFtRDtBQUNuRCx3REFBcUQ7QUFDckQsMENBQTJGO0FBRTNGLDRDQUFxRDtBQUNyRCwwREFBdUQ7QUF3RXZELE1BQWEsU0FBMkQsU0FBUSxtQkFBUTtJQXFFcEYsWUFBWSxNQUFTLEVBQUUsUUFBVyxFQUFFLE1BQWlEO1FBQ2pGLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBckI1QixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFrQmxDLG9CQUFlLEdBQVksS0FBSyxDQUFDO0lBSXpDLENBQUM7SUFRTSxRQUFRLENBQUMsS0FBZ0M7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPO1FBQzFDLElBQUksS0FBSyxDQUFDO1FBQ1YsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUk7WUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM1RSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxLQUFLO1lBQUUsNkJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFRTSxZQUFZLENBQUMsS0FBYyxFQUFFLFdBQWtCLEVBQUUsUUFBZTtRQUNuRSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSTtZQUFFLE9BQU87UUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBYyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFTTSxnQkFBZ0IsS0FBSyxDQUFDO0lBVXRCLGdCQUFnQixDQUFDLEtBQWdDLEVBQUUsWUFBcUIsS0FBSztRQUNoRixJQUFJLHVCQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sWUFBWSxXQUFXLENBQUMsRUFBRTtZQUNoRixNQUFNLGVBQWUsR0FBRyxtQ0FBNEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLEtBQUssZUFBZSxFQUFFO2dCQUNoRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUMvQixPQUFPLEtBQUssQ0FBQzthQUNoQjtTQUNKO1FBQ0QsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQWNNLHFCQUFxQixDQUFDLEtBQWdDO1FBQ3pELElBQUksQ0FBQyx1QkFBUyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLFlBQVksV0FBVyxDQUFDO1lBQUUsT0FBTztRQUNsRSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLE9BQU8sQ0FBQztRQUVaLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLEtBQUssWUFBWSwyQkFBWTtZQUFFLFdBQVcsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFakUsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxTQUFTLEVBQUU7WUFDckMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUN4Qjs7WUFBTSxPQUFPLEdBQUcscUJBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBRzdCLElBQUksWUFBWSxJQUFJLFNBQVMsS0FBSyxPQUFPLElBQUksU0FBUyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRTtZQUM5RixJQUFJLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzlEO0lBQ0wsQ0FBQztJQVVPLFVBQVU7UUFDZCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNwQyxNQUFNLElBQUksMkJBQWtCLENBQUMsd0ZBQXdGLENBQUMsQ0FBQztTQUMxSDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQzVCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsaUJBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU87UUFDNUQsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RSxJQUFJLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQzVELElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDaEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDL0I7SUFDTCxDQUFDO0NBQ0o7QUE3TEQsOEJBNkxDIn0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9saWIvQkRPTG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDREQUE0QjtBQUM1QiwrQkFBMkI7QUFDM0IsMENBQW1GO0FBV25GLE1BQXNCLFNBQVM7SUFrRDNCLFlBQVksT0FBZ0M7UUEzQ3JDLFlBQU8sR0FBWSxhQUFhLENBQUM7UUFRakMsd0JBQW1CLEdBQWEsS0FBSyxDQUFDO1FBUXRDLHFCQUFnQixHQUFhLEtBQUssQ0FBQztRQWVuQyxhQUFRLEdBQWUsT0FBTyxDQUFDO1FBVW5CLG1CQUFjLEdBQWEsaUNBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFL0IsQ0FBQztJQVcxQyxHQUFHLENBQUMsT0FBWSxFQUFFLFdBQXNCLEtBQUssRUFBRSxHQUFHLElBQVc7UUFDaEUsSUFBSSxRQUFRLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFBRSxPQUFPO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2xFLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEMsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO1lBQzNCLElBQUksTUFBTSxZQUFZLEtBQUssRUFBRTtnQkFDekIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDcEM7O2dCQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUIsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QixPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNkLE9BQVEs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
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbnN0cnVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9saWIvQmFzZUNvbnN0cnVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLGtEQUFrRTtBQUNsRSwwQ0FBNkM7QUEwQzdDLFNBQWdCLHNCQUFzQixDQUFDLElBQVMsRUFBRSxnQkFBd0I7SUFRdEUsTUFBTSxlQUFnQixTQUFRLElBQUk7UUFnRTlCLFlBQVksR0FBRyxNQUFhO1lBQ3hCLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBWEwsbUJBQWMsR0FBWSxlQUFlLENBQUMsY0FBYyxDQUFDO1lBUXpELGlCQUFZLEdBQVksZUFBZSxDQUFDLFlBQVksQ0FBQztZQUlqRSxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM3Qyx5QkFBYyxDQUFDLElBQUksRUFBRSxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsZUFBZSxDQUFDLGlDQUFpQztnQkFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlGLENBQUM7UUFRTSxlQUFlLENBQUMsV0FBd0M7WUFDM0QsSUFBSSxDQUFDLENBQUMsV0FBVyxZQUFZLE1BQU0sQ0FBQztnQkFBRSxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3ZELElBQUksZUFBZSxHQUFpQyxzQkFBVyxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMvRixlQUFlLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDOUQsSUFBSSxpQkFBVSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO2dCQUN2QyxNQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsRUFBRSxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUM7Z0JBQ2hELE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEUsS0FBSyxNQUFNLEdBQUcsSUFBSSxjQUFjLEVBQUU7b0JBQzlCLElBQUksY0FBYyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDcEMsTUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQyxJQUFJLE9BQU8sWUFBWSxpQkFBTyxFQUFFOzRCQUM1QixPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3lCQUN6Qzs7NEJBQU0sZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDckQ7aUJBQ0o7YUFDSjtZQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQ3JDLHlCQUFjLENBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ25ELElBQUksaUJBQVUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7Z0JBQVEsSUFBSyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDaEYsQ0FBQzs7SUF4RnNCLHlCQUFTLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFVeEQsMkJBQVcsR0FBUSxJQUFJLENBQUM7SUFTeEIsOEJBQWMsR0FBWSxzQkFBVyxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBU3pFLDRCQUFZLEdBQVksc0JBQVcsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFVOUUsaURBQWlDLEdBQVksS0FBSyxDQUFDO0lBb0RyRSxPQUFPLGVBQWUsQ0FBQztBQUMzQixDQUFDO0FBM0dELHdEQTJHQyJ9

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2xpYi9Qcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3REFBcUQ7QUFDckQsa0RBQWlGO0FBQ2pGLHdEQUFtRDtBQUNuRCwwQ0FBc0Y7QUFFdEYsNENBQTRDO0FBQzVDLGtFQUFpQztBQTJFakMsTUFBYSxRQUFRO0lBcUdqQixZQUFZLE1BQVMsRUFBRSxRQUFXLEVBQUUsTUFBZ0Q7UUFyQjdFLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFzQjdCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksVUFBVSxHQUFvQixFQUFFLENBQUM7UUFFckMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU07WUFBRSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN4RCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUVoQyxNQUFNLGVBQWUsR0FBRyxjQUFPLENBQUMsUUFBa0IsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sZUFBZSxHQUFHLEtBQUssZUFBZSxlQUFlLENBQUM7UUFDNUQsTUFBTSxXQUFXLEdBQUcsS0FBSyxlQUFlLFdBQVcsQ0FBQztRQUNwRCxNQUFNLGtCQUFrQixHQUFHLEtBQUssZUFBZSxrQkFBa0IsQ0FBQztRQUVsRSxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQztRQUNwRyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNwRixJQUFJLENBQUMsa0JBQWtCLEdBQUcs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

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvR2FtZVdpbmRvdy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1Rlc3RDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvY29tcG9uZW50cy9WaWV3TGluay50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1ZpZXdSb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9DbGllbnRNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQ2xpZW50Um91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0NvbmZpZ01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0RhdGFiYXNlTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL21vZGVscyBzeW5jIF5cXC5cXC8uKlxcLnRzJCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdDEudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzIHN5bmMgXlxcLlxcLy4qXFwudHMkIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9Db25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0dhbWVMb2JieS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvSG9tZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy91dGlscy91dGlsLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0F0dHJpYnV0ZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Db25maWdNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0JET0RhdGFiYXNlTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvQkRPTWFwQ2FjaGUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvQkRPTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvQkRPUm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvQmFzZUNvbnN0cnVjdG9yLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0JpbmRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvRXJyb3JzLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0ZpZWxkLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL01vZGVsUmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvTW9kaWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL1Byb3BlcnR5LnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL1dhdGNoZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9tb2RlbHMvQkRPVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL21vZGVscy9CRE9UZXN0MS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL21vZGVscy9DZWxsLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbW9kZWxzL0NodW5rLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvcm91dGVzL0JET0NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3JvdXRlcy9CRE9HYW1lTG9iYnkudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9yb3V0ZXMvQkRPSG9tZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3V0aWxzIHN5bmMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscy9kZWNvcmF0b3JzLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvdXRpbHMvZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscy9mcmFtZXdvcmsudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscy9tZXRhZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3V0aWxzL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vdmFyL3RtcC92aXJ0dWFsRW50cnlQb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLG9GQUFRLEdBQWEsRUFBRSxVQUFVLElBQUksQ0FBQztBQUNsRjtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9GQUFRLEdBQWEsRUFBRSxVQUFVLElBQUksQ0FBQztBQUMxRTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDZCQUE2QjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbStCOzs7Ozs7OztBQ3RCOUI7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyxtQ0FBTztBQUMvQixtQkFBbUIsbUJBQU8sQ0FBQyxnQ0FBcUI7QUFDaEQsc0JBQXNCLG1CQUFPLENBQUMsbUNBQXdCO0FBQ3RELDRDQUE0QyxtQkFBTyxDQUFDLG1DQUFXO0FBQy9ELGVBQWUsbUJBQU8sQ0FBQyxpQ0FBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixPQUFPLEVBQUUsVUFBVTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsKzRJOzs7Ozs7OztBQzdHOUI7QUFDYjtBQUNBLDJDQUEyQywyUSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yXCIsXCJ0ZW1wbGF0ZXNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1TR1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLVNHLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2EsIF9iO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJhc2VDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9CYXNlQ29tcG9uZW50XCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMiA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBCQUJZTE9OID0gdHNsaWJfMS5fX2ltcG9ydFN0YXIocmVxdWlyZShcImJhYnlsb25qc1wiKSk7XG5sZXQgR2FtZVdpbmRvdyA9IGNsYXNzIEdhbWVXaW5kb3cgZXh0ZW5kcyBCYXNlQ29tcG9uZW50XzEuQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBuZXcgQkFCWUxPTi5FbmdpbmUodGhpcywgdHJ1ZSwge1xuICAgICAgICAgICAgYXVkaW9FbmdpbmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2NlbmUgPSB0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IGAxMDAlYDtcbiAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IGAxMDAlYDtcbiAgICAgICAgdGhpcy5lbmdpbmUucnVuUmVuZGVyTG9vcCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbmdpbmUucmVzaXplKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNyZWF0ZVNjZW5lKCkge1xuICAgICAgICBjb25zdCBzY2VuZSA9IG5ldyBCQUJZTE9OLlNjZW5lKHRoaXMuZW5naW5lKTtcbiAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IEJBQllMT04uRnJlZUNhbWVyYSgnY2FtZXJhJywgbmV3IEJBQllMT04uVmVjdG9yMygwLCA1LCAtMTApLCBzY2VuZSk7XG4gICAgICAgIGNhbWVyYS5zZXRUYXJnZXQoQkFCWUxPTi5WZWN0b3IzLlplcm8oKSk7XG4gICAgICAgIGNhbWVyYS5hdHRhY2hDb250cm9sKHRoaXMsIGZhbHNlKTtcbiAgICAgICAgY29uc3QgbGlnaHQgPSBuZXcgQkFCWUxPTi5IZW1pc3BoZXJpY0xpZ2h0KCdsaWdodDEnLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDEsIDApLCBzY2VuZSk7XG4gICAgICAgIGxpZ2h0LnNoYWRvd0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBzcGhlcmUgPSBCQUJZTE9OLk1lc2hCdWlsZGVyLkNyZWF0ZVNwaGVyZSgnc3BoZXJlJywgeyBzZWdtZW50czogMTYsIGRpYW1ldGVyOiAyIH0sIHNjZW5lKTtcbiAgICAgICAgc3BoZXJlLnBvc2l0aW9uLnkgPSAxO1xuICAgICAgICBCQUJZTE9OLk1lc2hCdWlsZGVyLkNyZWF0ZUdyb3VuZCgnZ3JvdW5kMScsIHsgaGVpZ2h0OiA2LCB3aWR0aDogNiwgc3ViZGl2aXNpb25zOiAyIH0sIHNjZW5lKTtcbiAgICAgICAgcmV0dXJuIHNjZW5lO1xuICAgIH1cbiAgICBjcmVhdGVUZXJyYWluKCkgeyB9XG59O1xuR2FtZVdpbmRvdy5leHRlbmRzID0gXCJjYW52YXNcIjtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18yLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdHlwZW9mIChfYSA9IHR5cGVvZiBCQUJZTE9OICE9PSBcInVuZGVmaW5lZFwiICYmIEJBQllMT04uRW5naW5lKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3QpXG5dLCBHYW1lV2luZG93LnByb3RvdHlwZSwgXCJlbmdpbmVcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18yLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdHlwZW9mIChfYiA9IHR5cGVvZiBCQUJZTE9OICE9PSBcInVuZGVmaW5lZFwiICYmIEJBQllMT04uU2NlbmUpID09PSBcImZ1bmN0aW9uXCIgPyBfYiA6IE9iamVjdClcbl0sIEdhbWVXaW5kb3cucHJvdG90eXBlLCBcInNjZW5lXCIsIHZvaWQgMCk7XG5HYW1lV2luZG93ID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKClcbl0sIEdhbWVXaW5kb3cpO1xuZXhwb3J0cy5kZWZhdWx0ID0gR2FtZVdpbmRvdztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVIyRnRaVmRwYm1SdmR5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMMk52YlhCdmJtVnVkSE12UjJGdFpWZHBibVJ2ZHk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFc05rUkJRV2xGTzBGQlEycEZMSE5FUVVGM1JEdEJRVU40UkN4elJFRkJhVVE3UVVGRGFrUXNNa1JCUVhGRE8wRkJWWEpETEVsQlFYRkNMRlZCUVZVc1IwRkJMMElzVFVGQmNVSXNWVUZCVnl4VFFVRlJMRzlEUVVGdlFpeERRVUZETEdsQ1FVRnBRaXhEUVVGRE8wbEJRUzlGT3p0UlFXdENNRUlzVjBGQlRTeEhRVUZ0UWl4SlFVRkpMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlR0WlFVTXhSU3hYUVVGWExFVkJRVVVzU1VGQlNUdFRRVU53UWl4RFFVRkRMRU5CUVVNN1VVRlRiVUlzVlVGQlN5eEhRVUZyUWl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03U1VGNVJIQkZMRU5CUVVNN1NVRnNSRlVzYVVKQlFXbENPMUZCUTNCQ0xFdEJRVXNzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hEUVVGRE8xRkJRekZDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dFJRVU16UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZETVVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eGhRVUZoTEVOQlFVTXNSMEZCUnl4RlFVRkZPMWxCUXpOQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNN1VVRkRlRUlzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEU0N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFGQlEzSkNMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4UlFVRlJMRVZCUVVVc1IwRkJSeXhGUVVGRk8xbEJRMjVETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF6dFpRVU12UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZEY2tNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFVDeERRVUZETzBsQlUxTXNWMEZCVnp0UlFVVnFRaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlJUZERMRTFCUVUwc1RVRkJUU3hIUVVGSExFbEJRVWtzVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1NVRkJTU3hQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVVjJSaXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVVY2UXl4TlFVRk5MRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVVnNReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEU5QlFVOHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eFJRVUZSTEVWQlFVVXNTVUZCU1N4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRE1VWXNTMEZCU3l4RFFVRkRMR0ZCUVdFc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRk0wSXNUVUZCVFN4TlFVRk5MRWRCUVVjc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVc1VVRkJVU3hGUVVGRkxFVkJRVVVzUlVGQlJTeFJRVUZSTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRmFFY3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJYUkNMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEZOQlFWTXNSVUZCUlN4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNSVUZCUlN4WlFVRlpMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdVVUZGTjBZc1QwRkJUeXhMUVVGTExFTkJRVU03U1VGRGFrSXNRMEZCUXp0SlFWRlRMR0ZCUVdFc1MwRkJTeXhEUVVGRE8wTkJRMmhETEVOQlFVRTdRVUUzUlRCQ0xHdENRVUZQTEVkQlFWY3NVVUZCVVN4RFFVRkRPMEZCVTNSRE8wbEJRVmdzY1VKQlFWRXNSVUZCUlRzd1JFRkJiVUlzVDBGQlR5eHZRa0ZCVUN4UFFVRlBMRU5CUVVNc1RVRkJUVHN3UTBGRmVrTTdRVUZUVXp0SlFVRllMSEZDUVVGUkxFVkJRVVU3TUVSQlFXdENMRTlCUVU4c2IwSkJRVkFzVDBGQlR5eERRVUZETEV0QlFVczdlVU5CUVhOQ08wRkJOMEl2UXl4VlFVRlZPMGxCUkRsQ0xEUkNRVUZsTEVWQlFVVTdSMEZEUnl4VlFVRlZMRU5CYzBZNVFqdHJRa0YwUm05Q0xGVkJRVlVpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJhc2VDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9CYXNlQ29tcG9uZW50XCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMiA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5sZXQgVGVzdENvbXBvbmVudCA9IGNsYXNzIFRlc3RDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50XzEuQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVN0cmluZyA9IHJlcXVpcmUoJ35zdGF0aWMvdmlld3MvdGVzdENvbXBvbmVudC5uamsnKTtcbiAgICB9XG59O1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzIucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG5dLCBUZXN0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJ0ZW1wbGF0ZVN0cmluZ1wiLCB2b2lkIDApO1xuVGVzdENvbXBvbmVudCA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpXG5dLCBUZXN0Q29tcG9uZW50KTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRlc3RDb21wb25lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWR1Z6ZEVOdmJYQnZibVZ1ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyTnZiWEJ2Ym1WdWRITXZWR1Z6ZEVOdmJYQnZibVZ1ZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN3MlJFRkJhVVU3UVVGRGFrVXNjMFJCUVhkRU8wRkJRM2hFTEhORVFVRnBSRHRCUVZWcVJDeEpRVUZ4UWl4aFFVRmhMRWRCUVd4RExFMUJRWEZDTEdGQlFXTXNVMEZCVVN4dlEwRkJiMElzUTBGQlF5eFhRVUZYTEVOQlFVTTdTVUZCTlVVN08xRkJVVEJDTEcxQ1FVRmpMRWRCUVVjc1QwRkJUeXhEUVVGRExHbERRVUZwUXl4RFFVRkRMRU5CUVVNN1NVRkZkRVlzUTBGQlF6dERRVUZCTEVOQlFVRTdRVUZHWlR0SlFVRllMSEZDUVVGUkxFVkJRVVU3TzNGRVFVRjFSVHRCUVZKcVJTeGhRVUZoTzBsQlJHcERMRFJDUVVGbExFVkJRVVU3UjBGRFJ5eGhRVUZoTEVOQlZXcERPMnRDUVZadlFpeGhRVUZoSW4wPSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hLCBfYjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBCYXNlQ29tcG9uZW50XzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQmFzZUNvbXBvbmVudFwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBUZXN0MV8xID0gcmVxdWlyZShcIn5jbGllbnQvbW9kZWxzL1Rlc3QxXCIpO1xubGV0IFZpZXdMaW5rID0gY2xhc3MgVmlld0xpbmsgZXh0ZW5kcyBCYXNlQ29tcG9uZW50XzEuQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICBjb25zdHJ1Y3RvcihfcGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgVGVzdDFfMS5UZXN0MSh7IHRpdGxlOiBTdHJpbmcoRGF0ZS5ub3coKSkgfSk7XG4gICAgICAgIHRoaXMudGVzdCA9IHRoaXMubW9kZWwuYmluZChcInRpdGxlXCIpO1xuICAgICAgICB0aGlzLnRlc3RlciA9IHRoaXMubW9kZWwuYmluZChcInRlc3RlclwiKTtcbiAgICAgICAgdGhpcy50ZXN0ZW4gPSB7fTtcbiAgICB9XG4gICAgY29uc3RydWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uTGlua0NsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblRlc3RUeXBlQ2hlY2sodmFsdWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja2luZyB0eXBlIG9mIHRlc3Qgd2l0aCB2YWx1ZVwiLCB2YWx1ZSk7XG4gICAgfVxuICAgIG9uVGVzdFR5cGVDaGVja1N1Y2Nlc3MoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHlwZWNoZWNrIG9mIHRlc3Qgc3VjY2Vzc2Z1bFwiKTtcbiAgICB9XG4gICAgb25UZXN0VHlwZUNoZWNrRmFpbChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlR5cGVjaGVjayBvZiB0ZXN0IGZhaWxlZFwiLCBlcnJvcik7XG4gICAgfVxuICAgIG9uVGVzdENoYW5nZShjaGFuZ2VkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdCBjaGFuZ2VkXCIsIGNoYW5nZWQsIHRoaXMpO1xuICAgIH1cbiAgICBvblRlc3RlckluaXQoaW5pdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RlciBpbml0XCIsIGluaXQsIHRoaXMpO1xuICAgIH1cbiAgICBvblRlc3RlckNoYW5nZShjaGFuZ2VkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIGNoYW5nZWRcIiwgY2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuICAgIG9uVGVzdGVyQWRkKGFkZGVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIGFkZGVkXCIsIGFkZGVkLCB0aGlzKTtcbiAgICB9XG4gICAgb25UZXN0ZXJSZW1vdmUocmVtb3ZlZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RlciByZW1vdmVkXCIsIHJlbW92ZWQsIHRoaXMpO1xuICAgIH1cbiAgICBvbkxpbmtDbGljayhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cucm91dGVyLm5hdmlnYXRlKHRoaXMuaHJlZiwgdHJ1ZSk7XG4gICAgfVxufTtcblZpZXdMaW5rLmV4dGVuZHMgPSAnYSc7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbl0sIFZpZXdMaW5rLnByb3RvdHlwZSwgXCJtb2RlbFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgVmlld0xpbmsucHJvdG90eXBlLCBcInRlc3RcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLndhdGNoZWQoKSwgZGVjb3JhdG9yc18xLmF0dHJpYnV0ZSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEFycmF5KVxuXSwgVmlld0xpbmsucHJvdG90eXBlLCBcInRlc3RlclwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCB0eXBlb2YgKF9hID0gdHlwZW9mIE9iamVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBPYmplY3QpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdClcbl0sIFZpZXdMaW5rLnByb3RvdHlwZSwgXCJ0ZXN0ZW5cIiwgdm9pZCAwKTtcblZpZXdMaW5rID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2IgPSB0eXBlb2YgQ29uc3RQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIgJiYgQ29uc3RQYXJhbXMpID09PSBcImZ1bmN0aW9uXCIgPyBfYiA6IE9iamVjdF0pXG5dLCBWaWV3TGluayk7XG5leHBvcnRzLmRlZmF1bHQgPSBWaWV3TGluaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZtbGxkMHhwYm1zdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyTnNhV1Z1ZEM5MGN5OWpiMjF3YjI1bGJuUnpMMVpwWlhkTWFXNXJMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRU3cyUkVGQmFVVTdRVUZEYWtVc2MwUkJRWE5HTzBGQlEzUkdMR2RFUVVFMlF6dEJRVlUzUXl4SlFVRnhRaXhSUVVGUkxFZEJRVGRDTEUxQlFYRkNMRkZCUVZNc1UwRkJVU3h2UTBGQmIwSXNRMEZCUXl4cFFrRkJhVUlzUTBGQlF6dEpRWGxEZWtVc1dVRkJXU3hQUVVFclFqdFJRVU4yUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVROQ1R5eFZRVUZMTEVkQlFVY3NTVUZCU1N4aFFVRkxMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVkZvUkN4VFFVRkpMRWRCUVZjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRlJOMElzVjBGQlRTeEhRVUZoTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlVYcEVMRmRCUVUwc1IwRkJWeXhGUVVGRkxFTkJRVU03U1VGSmRrTXNRMEZCUXp0SlFVOU5MRzFDUVVGdFFqdFJRVU4wUWl4TFFVRkxMRU5CUVVNc2JVSkJRVzFDTEVWQlFVVXNRMEZCUXp0UlFVTTFRaXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGFFVXNRMEZCUXp0SlFWTlRMR1ZCUVdVc1EwRkJReXhMUVVGdFFqdFJRVU42UXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExHdERRVUZyUXl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRek5FTEVOQlFVTTdTVUZSVXl4elFrRkJjMEk3VVVGRE5VSXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXc0UWtGQk9FSXNRMEZCUXl4RFFVRkRPMGxCUTJoRUxFTkJRVU03U1VGUlV5eHRRa0ZCYlVJc1EwRkJReXhMUVVGWk8xRkJRM1JETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc01FSkJRVEJDTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRia1FzUTBGQlF6dEpRVk5UTEZsQlFWa3NRMEZCUXl4UFFVRjFRanRSUVVNeFF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMR05CUVdNc1JVRkJSU3hQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETDBNc1EwRkJRenRKUVZOVExGbEJRVmtzUTBGQlF5eEpRVUZ2UWp0UlFVTjJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEdGQlFXRXNSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRE0wTXNRMEZCUXp0SlFWTlRMR05CUVdNc1EwRkJReXhQUVVGMVFqdFJRVU0xUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExHZENRVUZuUWl4RlFVRkZMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU5xUkN4RFFVRkRPMGxCVTFNc1YwRkJWeXhEUVVGRExFdEJRWEZDTzFGQlEzWkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zWTBGQll5eEZRVUZGTEV0QlFVc3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVNM1F5eERRVUZETzBsQlUxTXNZMEZCWXl4RFFVRkRMRTlCUVhWQ08xRkJRelZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRMnBFTEVOQlFVTTdTVUZUVHl4WFFVRlhMRU5CUVVNc1MwRkJXVHRSUVVNMVFpeExRVUZMTEVOQlFVTXNZMEZCWXl4RlFVRkZMRU5CUVVNN1VVRkRka0lzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTTFReXhEUVVGRE8wTkJRMG9zUTBGQlFUdEJRV2hLTUVJc1owSkJRVThzUjBGQlZ5eEhRVUZITEVOQlFVTTdRVUZQYWtNN1NVRkJXQ3h4UWtGQlVTeEZRVUZGT3p0MVEwRkJlVVE3UVVGUmRrUTdTVUZCV2l4elFrRkJVeXhGUVVGRk96dHpRMEZCWjBRN1FVRlJjRU03U1VGQmRrSXNiMEpCUVU4c1JVRkJSU3hGUVVGRkxITkNRVUZUTEVWQlFVVTdPM2REUVVGeFJEdEJRVkZvUlR0SlFVRllMSEZDUVVGUkxFVkJRVVU3TUVSQlFXZENMRTFCUVUwc2IwSkJRVTRzVFVGQlRUdDNRMEZCVFR0QlFYWkRkRUlzVVVGQlVUdEpRVVExUWl3MFFrRkJaU3hGUVVGRk8ybEZRVEJEVVN4WFFVRlhMRzlDUVVGWUxGZEJRVmM3UjBGNlEyaENMRkZCUVZFc1EwRjNTalZDTzJ0Q1FYaEtiMElzVVVGQlVTSjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBCYXNlQ29tcG9uZW50XzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQmFzZUNvbXBvbmVudFwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgZGVjb3JhdG9yc18yID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IG5hdmlnb18xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm5hdmlnb1wiKSk7XG5sZXQgVmlld1JvdXRlciA9IGNsYXNzIFZpZXdSb3V0ZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50XzEuQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSBuZXcgbmF2aWdvXzEuZGVmYXVsdCgpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5yb3V0ZUNvbGxlY3Rpb24oKTtcbiAgICAgICAgd2luZG93LnJvdXRlciA9IHRoaXMucm91dGVyO1xuICAgIH1cbiAgICByb3V0ZUNvbGxlY3Rpb24oKSB7XG4gICAgICAgIGZvciAoY29uc3Qgcm91dGUgb2Ygd2luZG93LnZpcnR1YWxSb3V0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG15Um91dGUgPSByZXF1aXJlKGAuLy4uL3JvdXRlcy8ke3JvdXRlfS50c2ApLmRlZmF1bHQ7XG4gICAgICAgICAgICB0aGlzLnNpbmdlUm91dGVDb2xsZWN0aW9uKG15Um91dGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNpbmdlUm91dGVDb2xsZWN0aW9uKFJvdXRlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXV0aWxfMS5pbmNsdWRlc01lbWJlck9mTGlzdChSb3V0ZS5hdHRhY2hUb1NlcnZlcnMsIFtnbG9iYWwucHJvY2Vzcy5lbnYubmFtZSwgJyonXSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgUm91dGVDbGFzcyA9IG5ldyBSb3V0ZSgpO1xuICAgICAgICAgICAgaWYgKCFSb3V0ZUNsYXNzLmlzQ2xpZW50Um91dGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Um91dGVDbGFzcy5jb25zdHJ1Y3Rvci5uYW1lfSBpcyBub3QgaW5zdGFuY2Ugb2YgfmNsaWVudC9saWIvQmFzZVJvdXRlYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5vbihSb3V0ZUNsYXNzLnJvdXRlcik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbn07XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMi5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbl0sIFZpZXdSb3V0ZXIucHJvdG90eXBlLCBcInJvdXRlclwiLCB2b2lkIDApO1xuVmlld1JvdXRlciA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpXG5dLCBWaWV3Um91dGVyKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFZpZXdSb3V0ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWbWxsZDFKdmRYUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDJOdmJYQnZibVZ1ZEhNdlZtbGxkMUp2ZFhSbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTdzJSRUZCYVVVN1FVRkRha1VzTUVOQlFYVkVPMEZCUTNaRUxITkVRVUYzUkR0QlFVTjRSQ3h6UkVGQmFVUTdRVUZEYWtRc05FUkJRVFJDTzBGQlZUVkNMRWxCUVhGQ0xGVkJRVlVzUjBGQkwwSXNUVUZCY1VJc1ZVRkJWeXhUUVVGUkxHOURRVUZ2UWl4RFFVRkRMRmRCUVZjc1EwRkJRenRKUVVGNlJUczdVVUZUYVVNc1YwRkJUU3hIUVVGSExFbEJRVWtzWjBKQlFVMHNSVUZCUlN4RFFVRkRPMGxCSzBOMlJDeERRVUZETzBsQmRrTmhMR2xDUVVGcFFqdFJRVU4yUWl4TFFVRkxMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVXNRMEZCUXp0UlFVTXhRaXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVOQlFVTTdVVUZEZGtJc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUTJoRExFTkJRVU03U1VGUlR5eGxRVUZsTzFGQlEyNUNMRXRCUVVzc1RVRkJUU3hMUVVGTExFbEJRVWtzVFVGQlRTeERRVUZETEdGQlFXRXNSVUZCUlR0WlFVTjBReXhOUVVGTkxFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTXNaVUZCWlN4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF6dFpRVU16UkN4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1UwRkRkRU03U1VGRFRDeERRVUZETzBsQlZVOHNiMEpCUVc5Q0xFTkJRVU1zUzBGQlZUdFJRVU51UXl4SlFVRkpPMWxCUTBFc1NVRkJTU3hEUVVGRExESkNRVUZ2UWl4RFFVRlhMRXRCUVVzc1EwRkJReXhsUVVGbExFVkJRVVVzUTBGQlV5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUVVVc1QwRkJUenRaUVVNelJ5eE5RVUZOTEZWQlFWVXNSMEZCUnl4SlFVRkpMRXRCUVVzc1JVRkJSU3hEUVVGRE8xbEJReTlDTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1lVRkJZU3hGUVVGRk8yZENRVU16UWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMREpEUVVFeVF5eERRVUZETEVOQlFVTTdZVUZET1VZN1dVRkRSQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VTBGRGNrTTdVVUZCUXl4UFFVRlBMRXRCUVVzc1JVRkJSVHRaUVVOYUxFMUJRVTBzUzBGQlN5eERRVUZETzFOQlEyWTdTVUZEVEN4RFFVRkRPME5CUTBvc1EwRkJRVHRCUVM5RFpUdEpRVUZZTEhGQ1FVRlJMRVZCUVVVN096QkRRVUYzUXp0QlFWUnNReXhWUVVGVk8wbEJSRGxDTERSQ1FVRmxMRVZCUVVVN1IwRkRSeXhWUVVGVkxFTkJkMFE1UWp0clFrRjRSRzlDTEZWQlFWVWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xucmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7XG5jb25zdCBudW5qdWNrc18xID0gcmVxdWlyZShcIm51bmp1Y2tzXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L3V0aWxzL3V0aWxcIik7XG5jb25zdCB1dGlsXzIgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuZnVuY3Rpb24gQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTFR5cGVFbGVtZW50KSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBjbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgSFRNTFR5cGVFbGVtZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5nZW5lcmF0ZVVuaXF1ZUlEKCk7XG4gICAgICAgICAgICB0aGlzLmlzQmFzZUNvbXBvbmVudCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzLmNvbnN0cnVjdG9yKS5uYW1lO1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVN0cmluZyA9ICc8ZGl2PjxzbG90Pjwvc2xvdD48L2Rpdj4nO1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVBhcmFtcyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLCBcImRlZmluZWRQcm9wZXJ0aWVzXCIpO1xuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb3Agb2YgcHJvcGVydGllcy5rZXlzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2V0KHByb3AsIG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLCBwcm9wKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgICAgICB9XG4gICAgICAgIGdldCBiaW5kaW5ncygpIHtcbiAgICAgICAgICAgIGNvbnN0IGJpbmRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLCBcImluaXRpYXRvckJpbmRpbmdcIik7XG4gICAgICAgICAgICByZXR1cm4gYmluZGluZ3MgPyBiaW5kaW5ncyA6IG5ldyBNYXAoKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgY3JlYXRlKHBhcmFtcykge1xuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSB1dGlsXzIucGFzY2FsQ2FzZTJrZWJhYkNhc2UoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLm5hbWUpO1xuICAgICAgICAgICAgbGV0IGlzID0gdGhhdC5leHRlbmRzO1xuICAgICAgICAgICAgbGV0IHRhZ05hbWUgPSBjbGFzc05hbWU7XG4gICAgICAgICAgICBpZiAoaXMpIHtcbiAgICAgICAgICAgICAgICB0YWdOYW1lID0gaXM7XG4gICAgICAgICAgICAgICAgaXMgPSBjbGFzc05hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGF0LmlzUHJvY2VkdXJhbENvbXBvbmVudENvbnN0cnVjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lLCB7IGlzIH0pO1xuICAgICAgICAgICAgdGhhdC5pc1Byb2NlZHVyYWxDb21wb25lbnRDb25zdHJ1Y3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIGVsZW1lbnQuaW52b2tlTGlmZUN5Y2xlKHBhcmFtcyk7XG4gICAgICAgICAgICBpZiAoaXMpXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpc1wiLCBpcywgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBpbnZva2VMaWZlQ3ljbGUoX0NvbnN0UGFyYW1zKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGlzIG5vdCBhIEJhc2VDb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgfVxuICAgICAgICBnZXROYW1lc3BhY2VkU3RvcmFnZShrZXksIG5zUHJvcCwgZm9yY2VOUykge1xuICAgICAgICAgICAgcmV0dXJuIHV0aWxfMS5nZXROYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5zUHJvcCwgZm9yY2VOUyk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2Uoa2V5LCBuZXdWYWwsIG5zUHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHV0aWxfMS5zZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5ld1ZhbCwgbnNQcm9wKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGVGcm9tTmFtZXNwYWNlZFN0b3JhZ2Uoa2V5LCBuc1Byb3ApIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlsXzEuZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlKHRoaXMsIGtleSwgbnNQcm9wKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSwgdmFsdWUsIHNldFZhbHVlID0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcGVydGllcyAmJiB0aGlzLnByb3BlcnRpZXMuaGFzKHF1YWxpZmllZE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBcIiR7cXVhbGlmaWVkTmFtZX1cIiBjYW4ndCBiZSBzZXQgYXMgYXR0cmlidXRlIGJlY2F1c2UgaXQgaXMgYSBkZWZpbmVkIHByb3BlcnR5YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVUb1NldCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICghdXRpbF8yLmlzUHJpbWl0aXZlKHZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVUb1NldCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC9cXFwiL2csIFwiJ1wiKTtcbiAgICAgICAgICAgICAgICBzdXBlci5zZXRBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSwgdmFsdWVUb1NldCk7XG4gICAgICAgICAgICAgICAgdmFsdWVUb1NldCA9IHV0aWxfMi5jb25zdHJ1Y3RUeXBlT2ZIVE1MQXR0cmlidXRlKHRoaXMsIHF1YWxpZmllZE5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChzZXRWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpc1txdWFsaWZpZWROYW1lXSA9IHZhbHVlVG9TZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlQXR0cmlidXRlKHF1YWxpZmllZE5hbWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMgJiYgdGhpcy5wcm9wZXJ0aWVzLmhhcyhxdWFsaWZpZWROYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgXCIke3F1YWxpZmllZE5hbWV9XCIgY2FuJ3QgYmUgcmVtb3ZlZCBhcyBhdHRyaWJ1dGUgYmVjYXVzZSBpdCBpcyBhIGRlZmluZWQgcHJvcGVydHlgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1cGVyLnJlbW92ZUF0dHJpYnV0ZShxdWFsaWZpZWROYW1lKTtcbiAgICAgICAgICAgIHRoaXNbcXVhbGlmaWVkTmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdG9KU09OKCkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHt9O1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0cnVjdGVkQ2FsbGJhY2soLi4uX2FyZ3MpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jb25zdHJ1Y3Rvci5leHRlbmRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0cmluZ1RvUGFyc2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICh1dGlsXzIuaXNTdHJpbmcodGhpcy50ZW1wbGF0ZVN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nVG9QYXJzZSA9IG51bmp1Y2tzXzEucmVuZGVyU3RyaW5nKHRoaXMudGVtcGxhdGVTdHJpbmcsIHRoaXMudGVtcGxhdGVQYXJhbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodXRpbF8yLmlzT2JqZWN0KHRoaXMudGVtcGxhdGVTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ1RvUGFyc2UgPSB0aGlzLnRlbXBsYXRlU3RyaW5nLnJlbmRlcih0aGlzLnRlbXBsYXRlUGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cmluZ1RvUGFyc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHN0cmluZ1RvUGFyc2UsICd0ZXh0L2h0bWwnKTtcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93Um9vdC5hcHBlbmRDaGlsZChkb2MuYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7IH1cbiAgICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7IH1cbiAgICAgICAgYWRvcHRlZENhbGxiYWNrKCkgeyB9XG4gICAgICAgIGFkZENvbnRyb2xsZXIoKSB7IH1cbiAgICAgICAgcmVtb3ZlQ29udHJvbGxlcigpIHsgfVxuICAgICAgICBnZW5lcmF0ZVVuaXF1ZUlEKCkge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMuY29uc3RydWN0b3IpLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBvY2N1cnJlbmNlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGhpcy50YWdOYW1lKSk7XG4gICAgICAgICAgICBjb25zdCBvY2N1cnJlbmNlID0gb2NjdXJyZW5jZXMuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBgJHtjbGFzc05hbWV9XyR7b2NjdXJyZW5jZSA+PSAwID8gb2NjdXJyZW5jZSA6IG9jY3VycmVuY2VzLmxlbmd0aH1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIEJhc2VDb21wb25lbnQuaXNCYXNlQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICBCYXNlQ29tcG9uZW50LmlzUHJvY2VkdXJhbENvbXBvbmVudENvbnN0cnVjdGlvbiA9IGZhbHNlO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIEJhc2VDb21wb25lbnQucHJvdG90eXBlLCBcImlkXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG4gICAgXSwgQmFzZUNvbXBvbmVudC5wcm90b3R5cGUsIFwiaXNCYXNlQ29tcG9uZW50XCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJjbGFzc05hbWVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoeyBkaXNhYmxlVHlwZUd1YXJkOiB0cnVlIH0pLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgQmFzZUNvbXBvbmVudC5wcm90b3R5cGUsIFwidGVtcGxhdGVTdHJpbmdcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdHlwZW9mIChfYiA9IHR5cGVvZiBJbmRleFN0cnVjdHVyZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJbmRleFN0cnVjdHVyZSkgPT09IFwiZnVuY3Rpb25cIiA/IF9iIDogT2JqZWN0KVxuICAgIF0sIEJhc2VDb21wb25lbnQucHJvdG90eXBlLCBcInRlbXBsYXRlUGFyYW1zXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIEJhc2VDb21wb25lbnQ7XG59XG5leHBvcnRzLkJhc2VDb21wb25lbnRGYWN0b3J5ID0gQmFzZUNvbXBvbmVudEZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRbUZ6WlVOdmJYQnZibVZ1ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyeHBZaTlDWVhObFEyOXRjRzl1Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxEUkNRVUV3UWp0QlFVTXhRaXgxUTBGQmEwUTdRVUZEYkVRc2MwUkJRVFJFTzBGQlF6VkVMR3RFUVVGMVJUdEJRVWQyUlN3MlEwRkJiVWc3UVVGRGJrZ3NNRU5CUVhOSU8wRkJWWFJJTEZOQlFXZENMRzlDUVVGdlFpeERRVUY1UXl4bFFVRnpRanM3U1VGUkwwWXNUVUZCWlN4aFFVRmpMRk5CUVZFc1pVRkJaVHRSUVhWSmFFUXNXVUZCV1N4SFFVRkhMRWxCUVZjN1dVRkRkRUlzUzBGQlN5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRnNSa01zVDBGQlJTeEhRVUZYTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUlVGQlJTeERRVUZETzFsQlVUZENMRzlDUVVGbExFZEJRVmtzU1VGQlNTeERRVUZETzFsQlUyaERMR05CUVZNc1IwRkJWeXhOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU03V1VGVmNFTXNiVUpCUVdNc1IwRkJjMElzTUVKQlFUQkNMRU5CUVVNN1dVRlhiRWNzYlVKQlFXTXNSMEZCYlVJc1JVRkJSU3hEUVVGRE8xRkJOa014UkN4RFFVRkRPMUZCY0VkRUxFbEJRVmNzVlVGQlZUdFpRVU5xUWl4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFZEJRVWNzUlVGQlJTeERRVUZETzFsQlEzaENMRTFCUVUwc1ZVRkJWU3hIUVVGSExITkNRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRzFDUVVGdFFpeERRVUZETEVOQlFVTTdXVUZETVVRc1NVRkJTU3hWUVVGVkxFVkJRVVU3WjBKQlExb3NTMEZCU3l4TlFVRk5MRWxCUVVrc1NVRkJTU3hWUVVGVkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVTdiMEpCUTJ4RExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMRGhDUVVGdFFpeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8ybENRVU53UkR0aFFVTktPMWxCUTBRc1QwRkJUeXhMUVVGTExFTkJRVU03VVVGRGFrSXNRMEZCUXp0UlFYZEVSQ3hKUVVGakxGRkJRVkU3V1VGRGJFSXNUVUZCVFN4UlFVRlJMRWRCUVVjc2MwSkJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dFpRVU4yUkN4UFFVRlBMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRek5ETEVOQlFVTTdVVUZoVFN4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGblJDeE5RVUYxUWp0WlFVTjJSaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUYxUXl4RFFVRkRPMWxCUTNKRUxFMUJRVTBzVTBGQlV5eEhRVUZITERKQ1FVRnZRaXhEUVVGRExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRGVrVXNTVUZCU1N4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF6dFpRVU4wUWl4SlFVRkpMRTlCUVU4c1IwRkJSeXhUUVVGVExFTkJRVU03V1VGRGVFSXNTVUZCU1N4RlFVRkZMRVZCUVVVN1owSkJRMG9zVDBGQlR5eEhRVUZITEVWQlFVVXNRMEZCUXp0blFrRkRZaXhGUVVGRkxFZEJRVWNzVTBGQlV5eERRVUZETzJGQlEyeENPMWxCUTBRc1NVRkJTU3hEUVVGRExHbERRVUZwUXl4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVNNVF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExFOUJRVThzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRTJRaXhEUVVGRE8xbEJRM0JHTEVsQlFVa3NRMEZCUXl4cFEwRkJhVU1zUjBGQlJ5eExRVUZMTEVOQlFVTTdXVUZETDBNc1QwRkJUeXhEUVVGRExHVkJRV1VzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0WlFVTm9ReXhKUVVGSkxFVkJRVVU3WjBKQlFVVXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUXpkRExFOUJRVThzVDBGQlR5eERRVUZETzFGQlEyNUNMRU5CUVVNN1VVRmpUU3hsUVVGbExFTkJRVEJDTEZsQlFUWkNPMWxCUTNwRkxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNLMEpCUVN0Q0xFTkJRVU1zUTBGQlF6dFJRVU55UkN4RFFVRkRPMUZCVjAwc2IwSkJRVzlDTEVOQlFVTXNSMEZCVnl4RlFVRkZMRTFCUVdVc1JVRkJSU3hQUVVGblFqdFpRVU4wUlN4UFFVRlBMREpDUVVGdlFpeERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc1RVRkJUU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzFGQlF6VkVMRU5CUVVNN1VVRlhUU3d3UWtGQk1FSXNRMEZCUXl4SFFVRlhMRVZCUVVVc1RVRkJWeXhGUVVGRkxFMUJRV1U3V1VGRGRrVXNUMEZCVHl4cFEwRkJNRUlzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVUwc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU5xUlN4RFFVRkRPMUZCVlUwc01rSkJRVEpDTEVOQlFVTXNSMEZCVnl4RlFVRkZMRTFCUVdVN1dVRkRNMFFzVDBGQlR5eHJRMEZCTWtJc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUXpGRUxFTkJRVU03VVVGWFRTeFpRVUZaTEVOQlFVTXNZVUZCY1VJc1JVRkJSU3hMUVVGaExFVkJRVVVzVjBGQmIwSXNTVUZCU1R0WlFVTTVSU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVsQlFVa3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zWVVGQllTeERRVUZETEVWQlFVVTdaMEpCUTNaRUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNTVUZCU1N4aFFVRmhMRGhFUVVFNFJDeERRVUZETEVOQlFVTTdZVUZEY0VjN1dVRkRSQ3hKUVVGSkxFdEJRVXNzUlVGQlJUdG5Ra0ZEVUN4SlFVRkpMRlZCUVZVc1IwRkJSeXhMUVVGTExFTkJRVU03WjBKQlEzWkNMRWxCUVVrc1EwRkJReXhyUWtGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXp0dlFrRkJSU3hWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVOb1JpeExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMR0ZCUVdFc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dG5Ra0ZET1VNc1ZVRkJWU3hIUVVGSExHMURRVUUwUWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hoUVVGaExFTkJRVU1zUTBGQlF6dG5Ra0ZETDBRc1NVRkJTU3hSUVVGUk8yOUNRVUZSTEVsQlFVc3NRMEZCUXl4aFFVRmhMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU03WVVGRGVrUTdPMmRDUVVGTkxFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNN1VVRkRMME1zUTBGQlF6dFJRVkZOTEdWQlFXVXNRMEZCUXl4aFFVRnhRanRaUVVONFF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWxCUVVrc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNZVUZCWVN4RFFVRkRMRVZCUVVVN1owSkJRM1pFTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hoUVVGaExHdEZRVUZyUlN4RFFVRkRMRU5CUVVNN1lVRkRlRWM3V1VGRFJDeExRVUZMTEVOQlFVTXNaVUZCWlN4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xbEJReTlDTEVsQlFVc3NRMEZCUXl4aFFVRmhMRU5CUVVNc1IwRkJSeXhUUVVGVExFTkJRVU03VVVGRE0wTXNRMEZCUXp0UlFWVk5MRTFCUVUwN1dVRkRWQ3hOUVVGTkxFbEJRVWtzUjBGQmJVSXNSVUZCUlN4RFFVRkRPMWxCUTJoRExFdEJRVXNzVFVGQlRTeEhRVUZITEVsQlFVa3NTVUZCU1N4RlFVRkZPMmRDUVVOd1FpeEpRVUZKTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhUUVVGVExFVkJRVVU3YjBKQlEzcENMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0dlFrRkRNVUlzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJRenRwUWtGRGRrSTdZVUZEU2p0WlFVTkVMRTlCUVU4c1NVRkJTU3hEUVVGRE8xRkJRMmhDTEVOQlFVTTdVVUZYVXl4dFFrRkJiVUlzUTBGQlF5eEhRVUZITEV0QlFWazdXVUZGZWtNc1NVRkJTU3hEUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZaTEVOQlFVTXNUMEZCVHl4RlFVRkZPMmRDUVVWc1F5eEpRVUZKTEdGQlFXRXNSMEZCUnl4SlFVRkpMRU5CUVVNN1owSkJRM3BDTEVsQlFVa3NaVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUlVGQlJUdHZRa0ZETDBJc1lVRkJZU3hIUVVGSExIVkNRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1JVRkJSU3hKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTTdhVUpCUXpGRk8yZENRVU5FTEVsQlFVa3NaVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUlVGQlJUdHZRa0ZETDBJc1lVRkJZU3hIUVVGakxFbEJRVWtzUTBGQlF5eGpRVUZsTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF6dHBRa0ZETDBVN1owSkJRMFFzU1VGQlNTeGhRVUZoTEVWQlFVVTdiMEpCUTJZc1RVRkJUU3hWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzI5Q1FVTjJSQ3hOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEZOQlFWTXNSVUZCUlN4RFFVRkRMR1ZCUVdVc1EwRkJReXhoUVVGaExFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdiMEpCUTNoRkxGVkJRVlVzUTBGQlF5eFhRVUZYTEVOQlFWa3NSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dHBRa0ZETVVRN1lVRkRTanRSUVVOTUxFTkJRVU03VVVGUlV5eHBRa0ZCYVVJc1MwRkJWeXhEUVVGRE8xRkJVemRDTEc5Q1FVRnZRaXhMUVVGWExFTkJRVU03VVVGVGFFTXNaVUZCWlN4TFFVRlhMRU5CUVVNN1VVRlJNMElzWVVGQllTeExRVUZYTEVOQlFVTTdVVUZSZWtJc1owSkJRV2RDTEV0QlFWY3NRMEZCUXp0UlFWTTVRaXhuUWtGQlowSTdXVUZEY0VJc1RVRkJUU3hUUVVGVExFZEJRVWNzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETzFsQlF5OUVMRTFCUVUwc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRzlDUVVGdlFpeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRelZGTEUxQlFVMHNWVUZCVlN4SFFVRkhMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZETjBNc1QwRkJUeXhIUVVGSExGTkJRVk1zU1VGQlNTeFZRVUZWTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRSUVVNdlJTeERRVUZET3p0SlFXeFVjMElzTmtKQlFXVXNSMEZCV1N4SlFVRkpMRU5CUVVNN1NVRlRla01zSzBOQlFXbERMRWRCUVZrc1MwRkJTeXhEUVVGRE8wbEJlVUp3UkR0UlFVRmFMSE5DUVVGVExFVkJRVVU3T3paRFFVRTJRenRKUVZFM1F6dFJRVUZZTEhGQ1FVRlJMRVZCUVVVN096QkVRVUZwUkR0SlFWTm9SRHRSUVVGWUxIRkNRVUZSTEVWQlFVVTdPMjlFUVVGclJqdEpRVlYyUkR0UlFVRnlReXh4UWtGQlVTeERRVUZETEVWQlFVVXNaMEpCUVdkQ0xFVkJRVVVzU1VGQlNTeEZRVUZGTEVOQlFVTTdPM2xFUVVGdFJqdEpRVmMxUnp0UlFVRllMSEZDUVVGUkxFVkJRVVU3T0VSQlFUSkNMR05CUVdNc2IwSkJRV1FzWTBGQll6dDVSRUZCVFR0SlFUWlBPVVFzVDBGQlR5eGhRVUZoTEVOQlFVTTdRVUZEZWtJc1EwRkJRenRCUVd4V1JDeHZSRUZyVmtNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEJhc2VDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuICAgIGNvbnN0cnVjdGVkQ2FsbGJhY2soKSB7IH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHsgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkgeyB9XG4gICAgYWRvcHRlZENhbGxiYWNrKCkgeyB9XG59XG5leHBvcnRzLkJhc2VDb250cm9sbGVyID0gQmFzZUNvbnRyb2xsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRbUZ6WlVOdmJuUnliMnhzWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyTnNhV1Z1ZEM5MGN5OXNhV0l2UW1GelpVTnZiblJ5YjJ4c1pYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGUFFTeE5RVUZoTEdOQlFXTTdTVUZGZGtJc1owSkJRV2RDTEVOQlFVTTdTVUZUVUN4dFFrRkJiVUlzUzBGQlN5eERRVUZETzBsQlVYcENMR2xDUVVGcFFpeExRVUZMTEVOQlFVTTdTVUZUZGtJc2IwSkJRVzlDTEV0QlFVc3NRMEZCUXp0SlFWTXhRaXhsUVVGbExFdEJRVXNzUTBGQlF6dERRVU5zUXp0QlFYUkRSQ3gzUTBGelEwTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQ2xpZW50TW9kZWxfMTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgQkRPTW9kZWxfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Nb2RlbFwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L3V0aWxzL3V0aWxcIik7XG5jb25zdCBmcmFtZXdvcmtfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2ZyYW1ld29ya1wiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IExvZ2dlcl8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0xvZ2dlclwiKTtcbmNvbnN0IERhdGFiYXNlTWFuYWdlcl8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0RhdGFiYXNlTWFuYWdlclwiKTtcbmNvbnN0IFdhdGNoZWRfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9XYXRjaGVkXCIpO1xuY29uc3QgdXRpbF8yID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IE1vZGVsUmVnaXN0cnlfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Nb2RlbFJlZ2lzdHJ5XCIpO1xuY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcl8xLkxvZ2dlcigpO1xuY29uc3QgZGF0YWJhc2VNYW5hZ2VyID0gRGF0YWJhc2VNYW5hZ2VyXzEuRGF0YWJhc2VNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG5sZXQgQ2xpZW50TW9kZWwgPSBDbGllbnRNb2RlbF8xID0gY2xhc3MgQ2xpZW50TW9kZWwgZXh0ZW5kcyBCRE9Nb2RlbF8xLkJET01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5pc0NsaWVudE1vZGVsID0gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlQnlJRChpZCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBtb2RlbCA9IE1vZGVsUmVnaXN0cnlfMS5Nb2RlbFJlZ2lzdHJ5LmdldEluc3RhbmNlKCkuZ2V0TW9kZWxCeUlkKGlkLCB0aGlzKTtcbiAgICAgICAgICAgIGlmICghbW9kZWwpXG4gICAgICAgICAgICAgICAgbW9kZWwgPSBuZXcgdGhpcygpO1xuICAgICAgICAgICAgY29uc3QgZGF0YUZyb21Mb2NhbERCID0gYXdhaXQgZGF0YWJhc2VNYW5hZ2VyXG4gICAgICAgICAgICAgICAgLmRhdGFiYXNlKG1vZGVsLmRhdGFiYXNlTmFtZSlcbiAgICAgICAgICAgICAgICAuY29sbGVjdGlvbihtb2RlbC5jb2xsZWN0aW9uTmFtZSlcbiAgICAgICAgICAgICAgICAuZ2V0KGlkKTtcbiAgICAgICAgICAgIGlmIChkYXRhRnJvbUxvY2FsREIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwZW5kaW5nUHJvbWlzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhRnJvbUxvY2FsREIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFGcm9tTG9jYWxEQi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RlbEVsZW0gPSBSZWZsZWN0LmdldChtb2RlbCwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrbGFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtID0gZGF0YUZyb21Mb2NhbERCW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29ycmVzcG9uZGluZ0xpc3RMaWtlREIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbEVsZW0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlc3BvbmRpbmdMaXN0TGlrZURCID0gbW9kZWxFbGVtLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIENsaWVudE1vZGVsXzEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5nZXRSZWZlcmVuY2VTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbSBpbnN0YW5jZW9mIEFycmF5ICYmIHV0aWxfMi5kaWZmZXJlbmNlKGNvcnJlc3BvbmRpbmdMaXN0TGlrZURCLCBlbGVtKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwZW5kaW5nSXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZyYW1ld29ya18xLmlzUmVmZXJlbmNlU3RyaW5nKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZQYXJ0cyA9IGl0ZW0uc3BsaXQoXCI6XCIpWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gcmVmUGFydHNbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrbGFzcyA9IHJlcXVpcmUoYC4vLi4vbW9kZWxzLyR7Y2xhc3NOYW1lfS50c2ApW2NsYXNzTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nSXRlbXMucHVzaChrbGFzcy5nZXRJbnN0YW5jZUJ5SUQocmVmUGFydHNbMl0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ1Byb21pc2VzLnB1c2goUHJvbWlzZS5hbGwocGVuZGluZ0l0ZW1zKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChmcmFtZXdvcmtfMS5pc1JlZmVyZW5jZVN0cmluZyhlbGVtKSAmJiBlbGVtICE9PSBtb2RlbC5nZXRSZWZlcmVuY2VTdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZlBhcnRzID0gZWxlbS5zcGxpdChcIjpcIilbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gcmVmUGFydHNbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2xhc3MgPSByZXF1aXJlKGAuLy4uL21vZGVscy8ke2NsYXNzTmFtZX0udHNgKVtjbGFzc05hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmdQcm9taXNlcy5wdXNoKGtsYXNzLmdldEluc3RhbmNlQnlJRChyZWZQYXJ0c1syXSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHBlbmRpbmdQcm9taXNlcyk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihtb2RlbCwgZGF0YUZyb21Mb2NhbERCKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbW9kZWwuaWQuaW5jbHVkZXMoXCJwZW5kaW5nXCIpKVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKG1vZGVsKTtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2VzQnlBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIE1vZGVsUmVnaXN0cnlfMS5Nb2RlbFJlZ2lzdHJ5LmdldEluc3RhbmNlKCkuZ2V0TW9kZWxzQnlBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpO1xuICAgIH1cbiAgICBnZXROYW1lc3BhY2VkU3RvcmFnZShrZXksIG5zUHJvcCwgZm9yY2VOUykge1xuICAgICAgICByZXR1cm4gdXRpbF8xLmdldE5hbWVzcGFjZWRTdG9yYWdlKHRoaXMsIGtleSwgbnNQcm9wLCBmb3JjZU5TKTtcbiAgICB9XG4gICAgc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2Uoa2V5LCBuZXdWYWwsIG5zUHJvcCkge1xuICAgICAgICByZXR1cm4gdXRpbF8xLnNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKHRoaXMsIGtleSwgbmV3VmFsLCBuc1Byb3ApO1xuICAgIH1cbiAgICBkZWxldGVGcm9tTmFtZXNwYWNlZFN0b3JhZ2Uoa2V5LCBuc1Byb3ApIHtcbiAgICAgICAgcmV0dXJuIHV0aWxfMS5kZWxldGVGcm9tTmFtZXNwYWNlZFN0b3JhZ2UodGhpcywga2V5LCBuc1Byb3ApO1xuICAgIH1cbiAgICBhc3luYyBzYXZlKGF0dHIpIHtcbiAgICAgICAgY29uc3QgZGVmaW5lZEF0dHJpYnV0ZXMgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMsIFwiZGVmaW5lZEF0dHJpYnV0ZXNcIik7XG4gICAgICAgIGlmICghZGVmaW5lZEF0dHJpYnV0ZXMgfHwgYXR0ciAmJiAhZGVmaW5lZEF0dHJpYnV0ZXMuaGFzKGF0dHIpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBkZWZpbmVkIGF0dHJpYnV0ZXNcIik7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBhdHRyID8gW2F0dHJdIDogZGVmaW5lZEF0dHJpYnV0ZXMua2V5cygpO1xuICAgICAgICBjb25zdCB1bnNhdmVkQ2hhbmdlcyA9IGF3YWl0IHRoaXMuZ2V0VW5zYXZlZENoYW5nZXMoKTtcbiAgICAgICAgY29uc3QgdG9TYXZlID0ge307XG4gICAgICAgIGNvbnN0IHNlbmRUb1NlcnZlciA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBpZiAodW5zYXZlZENoYW5nZXMuaGFzT3duUHJvcGVydHkoYXR0cmlidXRlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0ckF0dHIgPSBhdHRyaWJ1dGU7XG4gICAgICAgICAgICAgICAgbGV0IHByb3h5VmFsID0gdXRpbF8yLmdldFByb3h5VGFyZ2V0KHVuc2F2ZWRDaGFuZ2VzW3N0ckF0dHJdKTtcbiAgICAgICAgICAgICAgICBpZiAocHJveHlWYWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBwcm94eVZhbCA9IHByb3h5VmFsLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBDbGllbnRNb2RlbF8xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZ2V0UmVmZXJlbmNlU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbF8yLmdldFByb3h5VGFyZ2V0KGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByb3h5VmFsIGluc3RhbmNlb2YgQ2xpZW50TW9kZWxfMSlcbiAgICAgICAgICAgICAgICAgICAgcHJveHlWYWwgPSBwcm94eVZhbC5nZXRSZWZlcmVuY2VTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBsZXQgd2lsZENhcmRNZXRhZGF0YSA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLCBzdHJBdHRyKTtcbiAgICAgICAgICAgICAgICBpZiAod2lsZENhcmRNZXRhZGF0YSBpbnN0YW5jZW9mIFdhdGNoZWRfMS5XYXRjaGVkKVxuICAgICAgICAgICAgICAgICAgICB3aWxkQ2FyZE1ldGFkYXRhID0gd2lsZENhcmRNZXRhZGF0YS5zdWJPYmplY3Q7XG4gICAgICAgICAgICAgICAgaWYgKCF3aWxkQ2FyZE1ldGFkYXRhLmRvTm90UGVyc2lzdClcbiAgICAgICAgICAgICAgICAgICAgdG9TYXZlW3N0ckF0dHJdID0gcHJveHlWYWw7XG4gICAgICAgICAgICAgICAgaWYgKCF3aWxkQ2FyZE1ldGFkYXRhLm5vU2VydmVySW50ZXJhY3Rpb24pXG4gICAgICAgICAgICAgICAgICAgIHNlbmRUb1NlcnZlcltzdHJBdHRyXSA9IHByb3h5VmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModG9TYXZlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBkYXRhYmFzZU1hbmFnZXJcbiAgICAgICAgICAgICAgICAgICAgLmRhdGFiYXNlKHRoaXMuZGF0YWJhc2VOYW1lKVxuICAgICAgICAgICAgICAgICAgICAuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb25OYW1lKVxuICAgICAgICAgICAgICAgICAgICAudXBkYXRlKHRoaXMuaWQsIHRvU2F2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoc2VuZFRvU2VydmVyKS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBzZW5kICR7SlNPTi5zdHJpbmdpZnkoc2VuZFRvU2VydmVyKX0gdG8gc2VydmVyYCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5zYXZlZENoYW5nZXMpO1xuICAgIH1cbiAgICBkaXNjYXJkKF9hdHRyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBhc3luYyBnZXRVbnNhdmVkQ2hhbmdlcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbGxlY3Rpb25OYW1lKVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiTm8gY29sbGVjdGlvbk5hbWUgcHJvdmlkZWRcIik7XG4gICAgICAgIGNvbnN0IHVuc2F2ZWRDaGFuZ2VzID0ge307XG4gICAgICAgIGxldCBkYkNvbGxlY3Rpb24gPSBhd2FpdCBkYXRhYmFzZU1hbmFnZXIuZGF0YWJhc2UoXCJkZWZhdWx0XCIpLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uTmFtZSkuZ2V0KHRoaXMuaWQpO1xuICAgICAgICBjb25zdCBkZWZpbmVkQXR0cmlidXRlcyA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcywgXCJkZWZpbmVkQXR0cmlidXRlc1wiKTtcbiAgICAgICAgZGJDb2xsZWN0aW9uID0gZGJDb2xsZWN0aW9uIHx8IHt9O1xuICAgICAgICBpZiAoZGVmaW5lZEF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYXR0ciBvZiBkZWZpbmVkQXR0cmlidXRlcy5rZXlzKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJBdHRyID0gYXR0ci50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJWYWwgPSB1dGlsXzIuZ2V0UHJveHlUYXJnZXQodGhpc1thdHRyXSk7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxfMi5pc0FycmF5KGF0dHJWYWwpICYmIHV0aWxfMi5kaWZmZXJlbmNlKGF0dHJWYWwsIGRiQ29sbGVjdGlvbltzdHJBdHRyXSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F2ZWRDaGFuZ2VzW3N0ckF0dHJdID0gdGhpc1thdHRyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodXRpbF8yLmlzT2JqZWN0KGF0dHJWYWwpICYmICF1dGlsXzIuaXNFcXVhbChhdHRyVmFsLCBkYkNvbGxlY3Rpb25bc3RyQXR0cl0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F2ZWRDaGFuZ2VzW3N0ckF0dHJdID0gdGhpc1thdHRyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodXRpbF8yLmlzUHJpbWl0aXZlKGF0dHJWYWwpICYmIGF0dHJWYWwgIT09IGRiQ29sbGVjdGlvbltzdHJBdHRyXSkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdmVkQ2hhbmdlc1tzdHJBdHRyXSA9IHRoaXNbYXR0cl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5zYXZlZENoYW5nZXMpO1xuICAgIH1cbiAgICBvblR5cGVDaGVja0ZhaWwoZXJyb3IpIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbn07XG5DbGllbnRNb2RlbC5pc0NsaWVudE1vZGVsID0gdHJ1ZTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcbl0sIENsaWVudE1vZGVsLnByb3RvdHlwZSwgXCJpc0NsaWVudE1vZGVsXCIsIHZvaWQgMCk7XG5DbGllbnRNb2RlbCA9IENsaWVudE1vZGVsXzEgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoKVxuXSwgQ2xpZW50TW9kZWwpO1xuZXhwb3J0cy5DbGllbnRNb2RlbCA9IENsaWVudE1vZGVsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTJ4cFpXNTBUVzlrWld3dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyTnNhV1Z1ZEM5MGN5OXNhV0l2UTJ4cFpXNTBUVzlrWld3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQkxITkVRVUZyUlR0QlFVTnNSU3huUkVGQk5rTTdRVUZETjBNc05rTkJRVzFJTzBGQlEyNUlMRzlFUVVGNVJEdEJRVU42UkN4clJFRkJkVVU3UVVGRGRrVXNLME5CUVRSRE8wRkJRelZETEdsRlFVRTRSRHRCUVVVNVJDdzRRMEZCTWtNN1FVRkRNME1zTUVOQlFYTkhPMEZCUTNSSExEQkVRVUYxUkR0QlFVVjJSQ3hOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEdWQlFVMHNSVUZCUlN4RFFVRkRPMEZCUXpWQ0xFMUJRVTBzWlVGQlpTeEhRVUZITEdsRFFVRmxMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03UVVGWGRFUXNTVUZCWVN4WFFVRlhMRzFDUVVGNFFpeE5RVUZoTEZkQlFWa3NVMEZCVVN4dFFrRkJVVHRKUVVGNlF6czdVVUZyUW1kRExHdENRVUZoTEVkQlFWa3NTVUZCU1N4RFFVRkRPMGxCYTA4NVJDeERRVUZETzBsQmJFNVZMRTFCUVUwc1EwRkJReXhsUVVGbExFTkJRVEpETEVWQlFWYzdVVUZETDBVc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlowSXNTMEZCU3l4RlFVRkZMRTlCUVU4c1JVRkJSU3hGUVVGRk8xbEJRMmhFTEVsQlFVa3NTMEZCU3l4SFFVRkhMRFpDUVVGaExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RFFVRkRMRVZCUVVVc1JVRkJSU3hKUVVGSkxFTkJRV3RDTEVOQlFVTTdXVUZEYUVZc1NVRkJTU3hEUVVGRExFdEJRVXM3WjBKQlFVVXNTMEZCU3l4SFFVRkhMRWxCUVVrc1NVRkJTU3hGUVVGRkxFTkJRVU03V1VGREwwSXNUVUZCVFN4bFFVRmxMRWRCUVVjc1RVRkJUU3hsUVVGbE8ybENRVU40UXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF6dHBRa0ZETlVJc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eGpRVUZqTEVOQlFVTTdhVUpCUTJoRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTmlMRWxCUVVrc1pVRkJaU3hGUVVGRk8yZENRVU5xUWl4TlFVRk5MR1ZCUVdVc1IwRkJkMElzUlVGQlJTeERRVUZETzJkQ1FVTm9SQ3hMUVVGTExFMUJRVTBzUjBGQlJ5eEpRVUZKTEdWQlFXVXNSVUZCUlR0dlFrRkRMMElzU1VGQlNTeGxRVUZsTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8zZENRVU55UXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenQzUWtGRE1VTXNTVUZCU1N4TFFVRjVRaXhEUVVGRE8zZENRVU01UWl4SlFVRkpMRWxCUVVrc1IwRkJSeXhsUVVGbExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdkMEpCUTJoRExFbEJRVWtzZFVKQlFYVkNMRWRCUVVjc1JVRkJSU3hEUVVGRE8zZENRVVZxUXl4SlFVRkpMRk5CUVZNc1dVRkJXU3hMUVVGTExFVkJRVVU3TkVKQlF6VkNMSFZDUVVGMVFpeEhRVUZITEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJUdG5RMEZETjBNc1NVRkJTU3hKUVVGSkxGbEJRVmtzWVVGQlZ6dHZRMEZCUlN4UFFVRlBMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNSVUZCUlN4RFFVRkRPMmREUVVOc1JTeFBRVUZQTEVsQlFVa3NRMEZCUXpzMFFrRkRhRUlzUTBGQlF5eERRVUZETEVOQlFVTTdlVUpCUTA0N2QwSkJRMFFzU1VGQlNTeEpRVUZKTEZsQlFWa3NTMEZCU3l4SlFVRkpMR2xDUVVGVkxFTkJRVU1zZFVKQlFYVkNMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zVFVGQlRTeEZRVUZGT3pSQ1FVTXpSU3hOUVVGTkxGbEJRVmtzUjBGQmQwSXNSVUZCUlN4RFFVRkRPelJDUVVNM1F5eExRVUZMTEVsQlFVa3NTVUZCU1N4SlFVRkpMRWxCUVVrc1JVRkJSVHRuUTBGRGJrSXNTVUZCU1N3MlFrRkJhVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0dlEwRkRla0lzVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0dlEwRkRjRU1zVFVGQlRTeFRRVUZUTEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yOURRVU01UWl4TFFVRkxMRWRCUVVjc1QwRkJUeXhEUVVGRExHVkJRV1VzVTBGQlV5eExRVUZMTEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenR2UTBGRE1VUXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zWlVGQlpTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4RlFVRkZPM2REUVVOcVJTeEpRVUZKTEVkQlFVY3NUVUZCVFN4RFFVRkRPMjlEUVVOc1FpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmxEUVVOUU96WkNRVU5LT3pSQ1FVTkVMR1ZCUVdVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRE8zbENRVU51UkRzMlFrRkJUU3hKUVVGSkxEWkNRVUZwUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFbEJRVWtzUzBGQlN5eExRVUZMTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzUlVGQlJUczBRa0ZEZGtVc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6czBRa0ZEY0VNc1RVRkJUU3hUUVVGVExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPelJDUVVNNVFpeExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRMR1ZCUVdVc1UwRkJVeXhMUVVGTExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXpzMFFrRkRNVVFzWlVGQlpTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1pVRkJaU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTzJkRFFVTndSU3hKUVVGSkxFZEJRVWNzVFVGQlRTeERRVUZET3pSQ1FVTnNRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzNsQ1FVTlFPM0ZDUVVOS08ybENRVU5LTzJkQ1FVTkVMRTFCUVUwc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXp0blFrRkRia01zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1pVRkJaU3hEUVVGRExFTkJRVU03WVVGRGVrTTdXVUZEUkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRPMmRDUVVGRkxFOUJRVThzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUTNwRUxFOUJRVThzVDBGQlR5eEZRVUZGTEVOQlFVTTdVVUZEY2tJc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFVDeERRVUZETzBsQllVMHNUVUZCVFN4RFFVRkRMSGRDUVVGM1FpeERRVUV5UXl4VlFVRXdRanRSUVVOMlJ5eFBRVUZQTERaQ1FVRmhMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1ZVRkJWU3hEUVVGclFpeERRVUZETzBsQlF6RkdMRU5CUVVNN1NVRlpUU3h2UWtGQmIwSXNRMEZCUXl4SFFVRlhMRVZCUVVVc1RVRkJaU3hGUVVGRkxFOUJRV2RDTzFGQlEzUkZMRTlCUVU4c01rSkJRVzlDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1JVRkJSU3hOUVVGTkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdTVUZETlVRc1EwRkJRenRKUVZsTkxEQkNRVUV3UWl4RFFVRkRMRWRCUVZjc1JVRkJSU3hOUVVGWExFVkJRVVVzVFVGQlpUdFJRVU4yUlN4UFFVRlBMR2xEUVVFd1FpeERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc1RVRkJUU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzBsQlEycEZMRU5CUVVNN1NVRlhUU3d5UWtGQk1rSXNRMEZCUXl4SFFVRlhMRVZCUVVVc1RVRkJaVHRSUVVNelJDeFBRVUZQTEd0RFFVRXlRaXhEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRNVVFzUTBGQlF6dEpRVkZOTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJaME03VVVGRE9VTXNUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3h0UWtGQmJVSXNRMEZCUXl4RFFVRkRPMUZCUTJwRkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETzFsQlFVVXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXcwUWtGQk5FSXNRMEZCUXl4RFFVRkRPMUZCUXpsSExFMUJRVTBzVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZETlVRc1RVRkJUU3hqUVVGakxFZEJRVzFDTEUxQlFVMHNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTEVOQlFVTTdVVUZEZEVVc1RVRkJUU3hOUVVGTkxFZEJRVzFDTEVWQlFVVXNRMEZCUXp0UlFVTnNReXhOUVVGTkxGbEJRVmtzUjBGQmJVSXNSVUZCUlN4RFFVRkRPMUZCUTNoRExFdEJRVXNzVFVGQlRTeFRRVUZUTEVsQlFVa3NWVUZCVlN4RlFVRkZPMWxCUTJoRExFbEJRVWtzWTBGQll5eERRVUZETEdOQlFXTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRuUWtGRE1VTXNUVUZCVFN4UFFVRlBMRWRCUVZjc1UwRkJVeXhEUVVGRE8yZENRVU5zUXl4SlFVRkpMRkZCUVZFc1IwRkJSeXh4UWtGQll5eERRVUZETEdOQlFXTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU4yUkN4SlFVRkpMRkZCUVZFc1dVRkJXU3hMUVVGTExFVkJRVVU3YjBKQlF6TkNMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRVZCUVVVN2QwSkJRemRDTEVsQlFVa3NTVUZCU1N4WlFVRlpMR0ZCUVZjc1JVRkJSVHMwUWtGRE4wSXNUMEZCVHl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNRMEZCUXp0NVFrRkRjRU03ZDBKQlEwUXNUMEZCVHl4eFFrRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzI5Q1FVTm9ReXhEUVVGRExFTkJRVU1zUTBGQlF6dHBRa0ZEVGp0blFrRkRSQ3hKUVVGSkxGRkJRVkVzV1VGQldTeGhRVUZYTzI5Q1FVRkZMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1EwRkJRenRuUWtGRk9VVXNTVUZCU1N4blFrRkJaMElzUjBGQll5dzRRa0ZCYlVJc1EwRkJReXhKUVVGSkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdaMEpCUTNKRkxFbEJRVWtzWjBKQlFXZENMRmxCUVZrc2FVSkJRVTg3YjBKQlFVVXNaMEpCUVdkQ0xFZEJRVWNzWjBKQlFXZENMRU5CUVVNc1UwRkJjMElzUTBGQlF6dG5Ra0ZGY0Vjc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRmxCUVZrN2IwSkJRVVVzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJRenRuUWtGRkwwUXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEcxQ1FVRnRRanR2UWtGQlJTeFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRE8yRkJReTlGTzFOQlEwbzdVVUZEUkN4SlFVRkpPMWxCUTBFc1NVRkJTU3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSVHRuUWtGRE5VSXNUVUZCVFN4bFFVRmxPM0ZDUVVOb1FpeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJRenR4UWtGRE0wSXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU03Y1VKQlF5OUNMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMkZCUTJoRE8xbEJRMFFzU1VGQlNTeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFMUJRVTA3WjBKQlFVVXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNXVUZCV1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8xTkJRM2hITzFGQlFVTXNUMEZCVHl4TFFVRkxMRVZCUVVVN1dVRkRXaXhQUVVGUExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1UwRkRhRU03VVVGRFJDeFBRVUZQTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1kwRkJiVU1zUTBGQlF5eERRVUZETzBsQlEyaEZMRU5CUVVNN1NVRlRUU3hQUVVGUExFTkJRVU1zUzBGQmFVTTdVVUZETlVNc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eDVRa0ZCZVVJc1EwRkJReXhEUVVGRE8wbEJReTlETEVOQlFVTTdTVUZSVFN4TFFVRkxMRU5CUVVNc2FVSkJRV2xDTzFGQlF6RkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll6dFpRVUZGTEU5QlFVOHNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXcwUWtGQk5FSXNRMEZCUXl4RFFVRkRPMUZCUXpsRkxFMUJRVTBzWTBGQll5eEhRVUZ6UWl4RlFVRkZMRU5CUVVNN1VVRkROME1zU1VGQlNTeFpRVUZaTEVkQlFVY3NUVUZCVFN4bFFVRmxMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNeFJ5eE5RVUZOTEdsQ1FVRnBRaXhIUVVGSExITkNRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRzFDUVVGdFFpeERRVUZETEVOQlFVTTdVVUZEYWtVc1dVRkJXU3hIUVVGSExGbEJRVmtzU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEYkVNc1NVRkJTU3hwUWtGQmFVSXNSVUZCUlR0WlFVTnVRaXhMUVVGTExFMUJRVTBzU1VGQlNTeEpRVUZKTEdsQ1FVRnBRaXhEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTzJkQ1FVTjZReXhOUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1owSkJRMmhETEUxQlFVMHNUMEZCVHl4SFFVRkhMSEZDUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRek5ETEVsQlFVa3NZMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxHbENRVUZWTEVOQlFVTXNUMEZCVHl4RlFVRkZMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlR0dlFrRkRkRVFzWTBGQlpTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dHBRa0ZETVVRN2NVSkJRVTBzU1VGQlNTeGxRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZGTEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhGUVVGRk8yOUNRVU55UkN4alFVRmxMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmxDUVVNeFJEdHhRa0ZCVFN4SlFVRkpMR3RDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NUMEZCVHl4TFFVRkxMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJUdHZRa0ZEYWtRc1kwRkJaU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRwUWtGRE1VUTdZVUZEU2p0VFFVTktPMUZCUTBRc1QwRkJUeXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMGxCUXpORExFTkJRVU03U1VGVlV5eGxRVUZsTEVOQlFVTXNTMEZCV1R0UlFVTnNReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRKUVVOb1F5eERRVUZETzBOQlJVb3NRMEZCUVR0QlFURlBNRUlzZVVKQlFXRXNSMEZCV1N4SlFVRkpMRU5CUVVNN1FVRlJla003U1VGQldDeHhRa0ZCVVN4RlFVRkZPenRyUkVGQkswTTdRVUZzUW1wRUxGZEJRVmM3U1VGRWRrSXNORUpCUVdVc1JVRkJSVHRIUVVOTUxGZEJRVmNzUTBGdlVIWkNPMEZCY0ZCWkxHdERRVUZYSW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQkRPUm91dGVfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Sb3V0ZVwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBMb2dnZXJfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9Mb2dnZXJcIik7XG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyXzEuTG9nZ2VyKCk7XG5jbGFzcyBDbGllbnRSb3V0ZSBleHRlbmRzIEJET1JvdXRlXzEuQkRPUm91dGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmlzQ2xpZW50Um91dGUgPSB0cnVlO1xuICAgIH1cbiAgICBnZXQgcm91dGVyKCkge1xuICAgICAgICBjb25zdCByb3V0ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCByb3V0ZSBvZiB0aGlzLnJvdXRlcykge1xuICAgICAgICAgICAgcm91dGVzW2Ake3RoaXMucm91dGVyTmFtZVNwYWNlfS8ke3JvdXRlfWAucmVwbGFjZShcIi8vXCIsIFwiL1wiKV0gPSB0aGlzLmhhbmRsZUdldC5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3V0ZXM7XG4gICAgfVxuICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gc3VwZXIudGVtcGxhdGVQYXJhbXMocGFyYW1zKTtcbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlR2V0KHBhcmFtcykge1xuICAgICAgICBsb2dnZXIubG9nKHV0aWxfMS5tZXJnZShhd2FpdCB0aGlzLnRlbXBsYXRlUGFyYW1zRnJvbVNlcnZlcigpLCBhd2FpdCB0aGlzLnRlbXBsYXRlUGFyYW1zKHBhcmFtcykpKTtcbiAgICB9XG4gICAgYXN5bmMgdGVtcGxhdGVQYXJhbXNGcm9tU2VydmVyKCkge1xuICAgICAgICBsZXQgdXJsVG9Bc2tGb3IgPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgaWYgKCF1cmxUb0Fza0ZvcilcbiAgICAgICAgICAgIHVybFRvQXNrRm9yID0gYC9gO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnWC1HYW1lLUFzLUpTT04nOiAndHJ1ZScgfSk7XG4gICAgICAgIHJldHVybiAoYXdhaXQgZmV0Y2godXJsVG9Bc2tGb3IsIHsgaGVhZGVycyB9KSkuanNvbigpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ2xpZW50Um91dGUgPSBDbGllbnRSb3V0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyeHBaVzUwVW05MWRHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMk5zYVdWdWRDOTBjeTlzYVdJdlEyeHBaVzUwVW05MWRHVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTeG5SRUZCTmtNN1FVRkROME1zTUVOQlFYZERPMEZCUTNoRExDdERRVUUwUXp0QlFVVTFReXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEdWQlFVMHNSVUZCUlN4RFFVRkRPMEZCVlRWQ0xFMUJRV0VzVjBGQldTeFRRVUZSTEcxQ1FVRlJPMGxCUVhwRE96dFJRVkZ2UWl4clFrRkJZU3hIUVVGWkxFbEJRVWtzUTBGQlF6dEpRWE5FYkVRc1EwRkJRenRKUVRsRFJ5eEpRVUZYTEUxQlFVMDdVVUZEWWl4TlFVRk5MRTFCUVUwc1IwRkJVU3hGUVVGRkxFTkJRVU03VVVGRGRrSXNTMEZCU3l4TlFVRk5MRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzFsQlF6ZENMRTFCUVUwc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eGxRVUZsTEVsQlFVa3NTMEZCU3l4RlFVRkZMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMU5CUXpkR08xRkJRMFFzVDBGQlR5eE5RVUZOTEVOQlFVTTdTVUZEYkVJc1EwRkJRenRKUVZkVExFdEJRVXNzUTBGQlF5eGpRVUZqTEVOQlFVTXNUVUZCYzBJN1VVRkRha1FzVDBGQlR5eExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRM2hETEVOQlFVTTdTVUZUVXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRWE5DTzFGQlF6VkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zV1VGQlN5eERRVUZETEUxQlFVMHNTVUZCU1N4RFFVRkRMSGRDUVVGM1FpeEZRVUZGTEVWQlFVVXNUVUZCVFN4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTm9SeXhEUVVGRE8wbEJWVThzUzBGQlN5eERRVUZETEhkQ1FVRjNRanRSUVVOc1F5eEpRVUZKTEZkQlFWY3NSMEZCUnl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRE8xRkJRM0JETEVsQlFVa3NRMEZCUXl4WFFVRlhPMWxCUVVVc1YwRkJWeXhIUVVGSExFZEJRVWNzUTBGQlF6dFJRVU53UXl4TlFVRk5MRTlCUVU4c1IwRkJSeXhKUVVGSkxFOUJRVThzUTBGQlF5eEZRVUZGTEdkQ1FVRm5RaXhGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETVVRc1QwRkJUeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEZkQlFWY3NSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0SlFVTXhSQ3hEUVVGRE8wTkJRMG83UVVFNVJFUXNhME5CT0VSREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJET0NvbmZpZ01hbmFnZXJfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Db25maWdNYW5hZ2VyXCIpO1xuY2xhc3MgQ29uZmlnTWFuYWdlciBleHRlbmRzIEJET0NvbmZpZ01hbmFnZXJfMS5CRE9Db25maWdNYW5hZ2VyIHtcbiAgICBzZXQoX2NvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIGxvYWQoX2NvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIGdldENhY2hlKF9jb25maWcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgICBzZXRDYWNoZShfY29uZmlnLCBfdmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29uZmlnTWFuYWdlciA9IENvbmZpZ01hbmFnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMjl1Wm1sblRXRnVZV2RsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyeHBZaTlEYjI1bWFXZE5ZVzVoWjJWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc1owVkJRVFpFTzBGQldUZEVMRTFCUVdFc1lVRkJZeXhUUVVGUkxHMURRVUZuUWp0SlFWTjRReXhIUVVGSExFTkJRVU1zVDBGQlpUdFJRVU4wUWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExIbENRVUY1UWl4RFFVRkRMRU5CUVVNN1NVRkRMME1zUTBGQlF6dEpRVlZUTEVsQlFVa3NRMEZCUXl4UFFVRmxPMUZCUXpGQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU1zUTBGQlF6dEpRVU12UXl4RFFVRkRPMGxCVlZNc1VVRkJVU3hEUVVGRExFOUJRV1U3VVVGRE9VSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4RFFVRkRPMGxCUXk5RExFTkJRVU03U1VGWFV5eFJRVUZSTEVOQlFVTXNUMEZCWlN4RlFVRkZMRTFCUVZjN1VVRkRNME1zVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eERRVUZETzBsQlF5OURMRU5CUVVNN1EwRkRTanRCUVdwRVJDeHpRMEZwUkVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBCRE9EYXRhYmFzZU1hbmFnZXJfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9EYXRhYmFzZU1hbmFnZXJcIik7XG5jb25zdCBsb2NhbGZvcmFnZV8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImxvY2FsZm9yYWdlXCIpKTtcbmNsYXNzIERhdGFiYXNlTWFuYWdlciBleHRlbmRzIEJET0RhdGFiYXNlTWFuYWdlcl8xLkJET0RhdGFiYXNlbWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZGF0YWJhc2VzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghRGF0YWJhc2VNYW5hZ2VyLmluc3RhbmNlKVxuICAgICAgICAgICAgRGF0YWJhc2VNYW5hZ2VyLmluc3RhbmNlID0gbmV3IERhdGFiYXNlTWFuYWdlcigpO1xuICAgICAgICByZXR1cm4gRGF0YWJhc2VNYW5hZ2VyLmluc3RhbmNlO1xuICAgIH1cbiAgICBkYXRhYmFzZShuYW1lKSB7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGFiYXNlID0gbmFtZTtcbiAgICAgICAgaWYgKCF0aGlzLmRhdGFiYXNlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhYmFzZXMuc2V0KG5hbWUsIGxvY2FsZm9yYWdlXzEuZGVmYXVsdC5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBkcml2ZXI6IFtsb2NhbGZvcmFnZV8xLmRlZmF1bHQuSU5ERVhFRERCLCBsb2NhbGZvcmFnZV8xLmRlZmF1bHQuV0VCU1FMXVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRDb2xsZWN0aW9uO1xuICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50R3JhcGg7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRWaWV3O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY29sbGVjdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuY3VycmVudENvbGxlY3Rpb24gPSBgY29sbGVjdGlvbl8ke25hbWV9YDtcbiAgICAgICAgdGhpcy5nZXREYXRhYmFzZSgpLmNvbmZpZyh7IHN0b3JlTmFtZTogdGhpcy5jdXJyZW50Q29sbGVjdGlvbiB9KTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudEdyYXBoO1xuICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50VmlldztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHZpZXcobmFtZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gYHZpZXdfJHtuYW1lfWA7XG4gICAgICAgIHRoaXMuZ2V0RGF0YWJhc2UoKS5jb25maWcoeyBzdG9yZU5hbWU6IHRoaXMuY3VycmVudFZpZXcgfSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRDb2xsZWN0aW9uO1xuICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50R3JhcGg7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBncmFwaChuYW1lKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEdyYXBoID0gYGdyYXBoXyR7bmFtZX1gO1xuICAgICAgICB0aGlzLmdldERhdGFiYXNlKCkuY29uZmlnKHsgc3RvcmVOYW1lOiB0aGlzLmN1cnJlbnRHcmFwaCB9KTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudENvbGxlY3Rpb247XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRWaWV3O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0KGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGFiYXNlKCkuZ2V0SXRlbShpZCk7XG4gICAgfVxuICAgIGluc2VydChpZCwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5zZXRJdGVtKGlkLCB2YWx1ZSk7XG4gICAgfVxuICAgIHVwZGF0ZShpZCwgdmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZ2V0KGlkKSB8fCB7fTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlc3VsdCwgdmFsdWVzKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmluc2VydChpZCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVsZXRlKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGFiYXNlKCkucmVtb3ZlSXRlbShpZCk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhYmFzZSgpLmNsZWFyKCk7XG4gICAgfVxuICAgIGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5sZW5ndGgoKTtcbiAgICB9XG4gICAga2V5KGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGFiYXNlKCkua2V5KGluZGV4KTtcbiAgICB9XG4gICAga2V5cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5rZXlzKCk7XG4gICAgfVxuICAgIGl0ZXJhdGUoaXRlcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5pdGVyYXRlKGl0ZXJhdG9yKTtcbiAgICB9XG4gICAgZ2V0RGF0YWJhc2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50RGF0YWJhc2UpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBEYXRhYmFzZSBjaG9zZW5cIik7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFiYXNlcy5nZXQodGhpcy5jdXJyZW50RGF0YWJhc2UpO1xuICAgIH1cbn1cbmV4cG9ydHMuRGF0YWJhc2VNYW5hZ2VyID0gRGF0YWJhc2VNYW5hZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUkdGMFlXSmhjMlZOWVc1aFoyVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlqYkdsbGJuUXZkSE12YkdsaUwwUmhkR0ZpWVhObFRXRnVZV2RsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZEUVN4dlJVRkJhVVU3UVVGRGFrVXNjMFZCUVhORE8wRkJSWFJETEUxQlFXRXNaVUZCZDBZc1UwRkJVU3gxUTBGQmEwSTdTVUZ0UWpOSU8xRkJRMGtzUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZTU2l4alFVRlRMRWRCUVhkQ0xFbEJRVWtzUjBGQlJ5eEZRVUZyUWl4RFFVRkRPMGxCVTI1RkxFTkJRVU03U1VGUVRTeE5RVUZOTEVOQlFVTXNWMEZCVnp0UlFVTnlRaXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEZGQlFWRTdXVUZCUlN4bFFVRmxMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzWlVGQlpTeEZRVUZGTEVOQlFVTTdVVUZEYUVZc1QwRkJUeXhsUVVGbExFTkJRVU1zVVVGQlVTeERRVUZETzBsQlEzQkRMRU5CUVVNN1NVRk5UU3hSUVVGUkxFTkJRVU1zU1VGQlR6dFJRVU51UWl4SlFVRkpMRU5CUVVNc1pVRkJaU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU0xUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkRkRU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxIRkNRVUZYTEVOQlFVTXNZMEZCWXl4RFFVRkRPMmRDUVVOb1JDeEpRVUZKTEVWQlFVVXNTVUZCU1R0blFrRkRWaXhOUVVGTkxFVkJRVVVzUTBGQlF5eHhRa0ZCVnl4RFFVRkRMRk5CUVZNc1JVRkJSU3h4UWtGQlZ5eERRVUZETEUxQlFVMHNRMEZCUXp0aFFVTjBSQ3hEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5RTzFGQlEwUXNUMEZCVHl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTTdVVUZET1VJc1QwRkJUeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETzFGQlEzcENMRTlCUVU4c1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dFJRVU40UWl4UFFVRlBMRWxCUVVrc1EwRkJRenRKUVVOb1FpeERRVUZETzBsQlJVMHNWVUZCVlN4RFFVRkRMRWxCUVU4N1VVRkRja0lzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhIUVVGTkxHTkJRV01zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEYWtRc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRMnBGTEU5QlFVOHNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJRenRSUVVONlFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRlRUlzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEYUVJc1EwRkJRenRKUVVWTkxFbEJRVWtzUTBGQlF5eEpRVUZQTzFGQlEyWXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJUU3hSUVVGUkxFbEJRVWtzUlVGQlJTeERRVUZETzFGQlEzSkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNN1VVRkRPVUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRPMUZCUTNwQ0xFOUJRVThzU1VGQlNTeERRVUZETzBsQlEyaENMRU5CUVVNN1NVRkZUU3hMUVVGTExFTkJRVU1zU1VGQlR6dFJRVU5vUWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGTkxGTkJRVk1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEZGtNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTFSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJRenRSUVVNNVFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRlRUlzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEYUVJc1EwRkJRenRKUVVWTkxFZEJRVWNzUTBGQlF5eEZRVUZWTzFGQlEycENMRTlCUVU4c1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVNeFF5eERRVUZETzBsQlJVMHNUVUZCVFN4RFFVRkRMRVZCUVZVc1JVRkJSU3hMUVVGclF6dFJRVU40UkN4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMnBFTEVOQlFVTTdTVUZGVFN4TlFVRk5MRU5CUVVNc1JVRkJWU3hGUVVGRkxFMUJRVzFETzFGQlEzcEVMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1JVRkJSVHRaUVVONlF5eEpRVUZKTzJkQ1FVTkJMRTFCUVUwc1RVRkJUU3hIUVVGSExFMUJRVTBzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03WjBKQlEzaERMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMmRDUVVNNVFpeE5RVUZOTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzJkQ1FVTTVRaXhQUVVGUExFVkJRVVVzUTBGQlF6dGhRVU5pTzFsQlFVTXNUMEZCVHl4TFFVRkxMRVZCUVVVN1owSkJRMW9zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMkZCUTJwQ08xRkJRMHdzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEVUN4RFFVRkRPMGxCUlUwc1RVRkJUU3hEUVVGRExFVkJRVlU3VVVGRGNFSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zVlVGQlZTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpkRExFTkJRVU03U1VGRlRTeExRVUZMTzFGQlExSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdTVUZEZEVNc1EwRkJRenRKUVVWTkxFMUJRVTA3VVVGRFZDeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dEpRVU4yUXl4RFFVRkRPMGxCUlUwc1IwRkJSeXhEUVVGRExFdEJRV0U3VVVGRGNFSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNwRExFTkJRVU03U1VGRlRTeEpRVUZKTzFGQlExQXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdTVUZEY2tNc1EwRkJRenRKUVVWTkxFOUJRVThzUTBGQlF5eFJRVUU0Ump0UlFVTjZSeXhQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03U1VGRGFFUXNRMEZCUXp0SlFVVlBMRmRCUVZjN1VVRkRaaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVTdXVUZCUlN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRU5CUVVNN1VVRkRha1VzVDBGQlR5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZuUWl4RFFVRkRPMGxCUTI1RkxFTkJRVU03UTBGRlNqdEJRUzlIUkN3d1EwRXJSME1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJET0xvZ2dlcl8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET0xvZ2dlclwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5sZXQgTG9nZ2VyID0gY2xhc3MgTG9nZ2VyIGV4dGVuZHMgQkRPTG9nZ2VyXzEuQkRPTG9nZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICAgICAgc3VwZXIocGFyYW1zKTtcbiAgICAgICAgdGhpcy5sb2dMZXZlbENvbG9ycyA9IHtcbiAgICAgICAgICAgIGxvZzogJ2NvbG9yOiBncmF5OyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgICAgICAgICAgZGVidWc6ICdjb2xvcjogZ3JlZW47IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICBpbmZvOiAnY29sb3I6ICMwMDgwNkI7IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICB3YXJuOiAnY29sb3I6ICM4MDgwMDA7IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICBlcnJvcjogJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkOydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0SGVhZGVyKGxvZ0xldmVsLCBwcmludEVudiA9ICdjb25zb2xlJykge1xuICAgICAgICBjb25zdCBwcm9jSW5mbyA9IHRoaXMuZ2V0UHJvY0luZm8oKTtcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lKCk7XG4gICAgICAgIGNvbnN0IHVwcGVyTG9nTGV2ZWwgPSBsb2dMZXZlbC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2dQb2ludCA9IHRoaXMuZ2V0TG9nUG9pbnQoKTtcbiAgICAgICAgY29uc3QgcmVzZXRTdHlsZSA9ICdjb2xvcjogYmxhY2s7IGZvbnQtd2VpZ2h0OiBub3JtYWwnO1xuICAgICAgICBjb25zdCBtYWdlbnRhID0gJ2NvbG9yOiAjODAwMDgwOyBmb250LXdlaWdodDogbm9ybWFsJztcbiAgICAgICAgY29uc3QgY3lhbiA9ICdjb2xvcjogIzAwODA2QjsgZm9udC13ZWlnaHQ6IG5vcm1hbCc7XG4gICAgICAgIGlmIChwcmludEVudiA9PT0gJ2NvbnNvbGUnKSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRMb2dMZXZlbCA9IHRoaXMubG9nTGV2ZWxDb2xvcnNbbG9nTGV2ZWxdO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkTG9nUG9pbnQgPSBtYWdlbnRhO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkVGltZSA9IGN5YW47XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRQcm9jSW5mbyA9IG1hZ2VudGE7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIGAlY1slYyR7dXBwZXJMb2dMZXZlbH0gJWMtICVjJHtwcm9jSW5mb30gJWMtICVjJHtjdXJyZW50VGltZX0gJWNhdCAlYyR7bG9nUG9pbnR9JWNdYCxcbiAgICAgICAgICAgICAgICByZXNldFN0eWxlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZExvZ0xldmVsLFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkUHJvY0luZm8sXG4gICAgICAgICAgICAgICAgcmVzZXRTdHlsZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRUaW1lLFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkTG9nUG9pbnQsXG4gICAgICAgICAgICAgICAgcmVzZXRTdHlsZVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYFske3VwcGVyTG9nTGV2ZWx9IC0gJHtwcm9jSW5mb30gLSAke2N1cnJlbnRUaW1lfSAtICR7bG9nUG9pbnR9XWA7XG4gICAgfVxuICAgIHdyaXRlVG9GaWxlKF9sb2dMZXZlbCwgX21lc3NhZ2UpIHtcbiAgICB9XG59O1xuTG9nZ2VyID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgQ29uc3RQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIgJiYgQ29uc3RQYXJhbXMpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdF0pXG5dLCBMb2dnZXIpO1xuZXhwb3J0cy5Mb2dnZXIgPSBMb2dnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lURzluWjJWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOWpiR2xsYm5RdmRITXZiR2xpTDB4dloyZGxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUVzYTBSQlFUWkZPMEZCUXpkRkxITkVRVUYzUkR0QlFWVjRSQ3hKUVVGaExFMUJRVTBzUjBGQmJrSXNUVUZCWVN4TlFVRlBMRk5CUVZFc2NVSkJRVk03U1VGbGFrTXNXVUZCV1N4TlFVRTBRanRSUVVOd1F5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRlVWaXh0UWtGQll5eEhRVUZITzFsQlEzSkNMRWRCUVVjc1JVRkJSU3hwUTBGQmFVTTdXVUZEZEVNc1MwRkJTeXhGUVVGRkxHdERRVUZyUXp0WlFVTjZReXhKUVVGSkxFVkJRVVVzYjBOQlFXOURPMWxCUXpGRExFbEJRVWtzUlVGQlJTeHZRMEZCYjBNN1dVRkRNVU1zUzBGQlN5eEZRVUZGTEdkRFFVRm5RenRUUVVNeFF5eERRVUZETzBsQlNVWXNRMEZCUXp0SlFWZFRMRk5CUVZNc1EwRkJReXhSUVVGdFFpeEZRVUZGTEZkQlFUaENMRk5CUVZNN1VVRkROVVVzVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8xRkJRM0JETEUxQlFVMHNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dFJRVU4yUXl4TlFVRk5MR0ZCUVdFc1IwRkJSeXhSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdVVUZETjBNc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUTNCRExFMUJRVTBzVlVGQlZTeEhRVUZITEcxRFFVRnRReXhEUVVGRE8xRkJRM1pFTEUxQlFVMHNUMEZCVHl4SFFVRkhMSEZEUVVGeFF5eERRVUZETzFGQlEzUkVMRTFCUVUwc1NVRkJTU3hIUVVGSExIRkRRVUZ4UXl4RFFVRkRPMUZCUTI1RUxFbEJRVWtzVVVGQlVTeExRVUZMTEZOQlFWTXNSVUZCUlR0WlFVTjRRaXhOUVVGTkxHbENRVUZwUWl4SFFVRkhMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdXVUZEZUVRc1RVRkJUU3hwUWtGQmFVSXNSMEZCUnl4UFFVRlBMRU5CUVVNN1dVRkRiRU1zVFVGQlRTeGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUXpOQ0xFMUJRVTBzYVVKQlFXbENMRWRCUVVjc1QwRkJUeXhEUVVGRE8xbEJRMnhETEU5QlFVODdaMEpCUTBnc1VVRkJVU3hoUVVGaExGVkJRVlVzVVVGQlVTeFZRVUZWTEZkQlFWY3NWMEZCVnl4UlFVRlJMRXRCUVVzN1owSkJRM0JHTEZWQlFWVTdaMEpCUTFZc2FVSkJRV2xDTzJkQ1FVTnFRaXhWUVVGVk8yZENRVU5XTEdsQ1FVRnBRanRuUWtGRGFrSXNWVUZCVlR0blFrRkRWaXhoUVVGaE8yZENRVU5pTEZWQlFWVTdaMEpCUTFZc2FVSkJRV2xDTzJkQ1FVTnFRaXhWUVVGVk8yRkJRMklzUTBGQlF6dFRRVU5NTzFGQlEwUXNUMEZCVHl4SlFVRkpMR0ZCUVdFc1RVRkJUU3hSUVVGUkxFMUJRVTBzVjBGQlZ5eE5RVUZOTEZGQlFWRXNSMEZCUnl4RFFVRkRPMGxCUXpkRkxFTkJRVU03U1VGVlV5eFhRVUZYTEVOQlFVTXNVMEZCYjBJc1JVRkJSU3hSUVVGaE8wbEJSWHBFTEVOQlFVTTdRMEZEU2l4RFFVRkJPMEZCY0VWWkxFMUJRVTA3U1VGRWJFSXNORUpCUVdVc1JVRkJSVHRwUlVGblFrOHNWMEZCVnl4dlFrRkJXQ3hYUVVGWE8wZEJablpDTEUxQlFVMHNRMEZ2Uld4Q08wRkJjRVZaTEhkQ1FVRk5JbjA9IiwidmFyIG1hcCA9IHtcblx0XCIuL1Rlc3QudHNcIjogXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL21vZGVscy9UZXN0LnRzXCIsXG5cdFwiLi9UZXN0MS50c1wiOiBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvbW9kZWxzL1Rlc3QxLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvbW9kZWxzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLnRzJFwiOyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJET1Rlc3RfMSA9IHJlcXVpcmUoXCJ+YmRvL21vZGVscy9CRE9UZXN0XCIpO1xuY29uc3QgQ2xpZW50TW9kZWxfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9DbGllbnRNb2RlbFwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5sZXQgVGVzdCA9IGNsYXNzIFRlc3QgZXh0ZW5kcyBCRE9UZXN0XzEuQkRPVGVzdEZhY3RvcnkoQ2xpZW50TW9kZWxfMS5DbGllbnRNb2RlbCkge1xuICAgIGNvbnN0cnVjdG9yKF9wYXJhbXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgdGVzdCgpIHtcbiAgICB9XG59O1xuVGVzdCA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3Rvcih7IGNvbGxlY3Rpb25OYW1lOiBcIlRlc3RcIiB9KSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBDb25zdFBhcmFtcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBDb25zdFBhcmFtcykgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0XSlcbl0sIFRlc3QpO1xuZXhwb3J0cy5UZXN0ID0gVGVzdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHVnpkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDIxdlpHVnNjeTlVWlhOMExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFTeHBSRUZCY1VRN1FVRkRja1FzZVVSQlFYTkVPMEZCUTNSRUxITkVRVUYzUkR0QlFWVjRSQ3hKUVVGaExFbEJRVWtzUjBGQmFrSXNUVUZCWVN4SlFVRkxMRk5CUVZFc2QwSkJRV01zUTBGQlF5eDVRa0ZCVnl4RFFVRkRPMGxCUldwRUxGbEJRVmtzVDBGQk1rSTdVVUZEYmtNc1MwRkJTeXhGUVVGRkxFTkJRVU03U1VGRFdpeERRVUZETzBsQlQwMHNTVUZCU1R0SlFVVllMRU5CUVVNN1EwRkRTaXhEUVVGQk8wRkJaRmtzU1VGQlNUdEpRVVJvUWl3MFFrRkJaU3hEUVVGRExFVkJRVVVzWTBGQll5eEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRPMmxGUVVkc1FpeFhRVUZYTEc5Q1FVRllMRmRCUVZjN1IwRkdlRUlzU1VGQlNTeERRV05vUWp0QlFXUlpMRzlDUVVGSkluMD0iLCJcbmltcG9ydCB7IEJET1Rlc3QxRmFjdG9yeSB9IGZyb20gXCJ+YmRvL21vZGVscy9CRE9UZXN0MVwiO1xuaW1wb3J0IHsgVGVzdCB9IGZyb20gXCJ+Y2xpZW50L21vZGVscy9UZXN0XCI7XG5pbXBvcnQgeyBiYXNlQ29uc3RydWN0b3IgfSBmcm9tIFwifmJkby91dGlscy9kZWNvcmF0b3JzXCI7XG5cbi8qKlxuICogVGVzdFxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBUZXN0MVxuICogQGV4dGVuZHMge0JET1Rlc3QxRmFjdG9yeSgpfVxuICovXG5AYmFzZUNvbnN0cnVjdG9yKHsgY29sbGVjdGlvbk5hbWU6IFwiVGVzdDFcIiB9KVxuZXhwb3J0IGNsYXNzIFRlc3QxIGV4dGVuZHMgQkRPVGVzdDFGYWN0b3J5KFRlc3QpIHtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmFtcz86IENvbnN0UGFyYW1zPFRlc3QxPikge1xuICAgICAgICBzdXBlcihwYXJhbXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRlc3RcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBUZXN0MVxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyB3YWRkZSgpIHtcbiAgICAgICAgY29uc3QgdGVzdCA9IGF3YWl0IFRlc3QxLmdldEluc3RhbmNlQnlJRCh0aGlzLmlkKTtcbiAgICAgICAgaWYgKHRlc3QpIHJldHVybiB0ZXN0LmdldFVuc2F2ZWRDaGFuZ2VzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vQ29uZmlnLnRzXCI6IFwiLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvQ29uZmlnLnRzXCIsXG5cdFwiLi9HYW1lTG9iYnkudHNcIjogXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9HYW1lTG9iYnkudHNcIixcblx0XCIuL0hvbWUudHNcIjogXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9Ib21lLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLnRzJFwiOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ2xpZW50Um91dGVfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9DbGllbnRSb3V0ZVwiKTtcbmNvbnN0IEJET0NvbmZpZ18xID0gcmVxdWlyZShcIn5iZG8vcm91dGVzL0JET0NvbmZpZ1wiKTtcbmNsYXNzIENvbmZpZyBleHRlbmRzIEJET0NvbmZpZ18xLkJET0NvbmZpZ0ZhY3RvcnkoQ2xpZW50Um91dGVfMS5DbGllbnRSb3V0ZSkge1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ29uZmlnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTI5dVptbG5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlqYkdsbGJuUXZkSE12Y205MWRHVnpMME52Ym1acFp5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxIbEVRVUZ6UkR0QlFVTjBSQ3h4UkVGQmVVUTdRVUZYZWtRc1RVRkJjVUlzVFVGQlR5eFRRVUZSTERSQ1FVRm5RaXhEUVVGRExIbENRVUZYTEVOQlFVTTdRMEZCU1R0QlFVRnlSU3g1UWtGQmNVVWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBDbGllbnRSb3V0ZV8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0NsaWVudFJvdXRlXCIpO1xuY29uc3QgQkRPR2FtZUxvYmJ5XzEgPSByZXF1aXJlKFwifmJkby9yb3V0ZXMvQkRPR2FtZUxvYmJ5XCIpO1xuY2xhc3MgR2FtZUxvYmJ5IGV4dGVuZHMgQkRPR2FtZUxvYmJ5XzEuQkRPR2FtZUxvYmJ5RmFjdG9yeShDbGllbnRSb3V0ZV8xLkNsaWVudFJvdXRlKSB7XG4gICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZXN0OiAnbG9sJ1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEdhbWVMb2JieTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVIyRnRaVXh2WW1KNUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOWpiR2xsYm5RdmRITXZjbTkxZEdWekwwZGhiV1ZNYjJKaWVTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxIbEVRVUZ6UkR0QlFVTjBSQ3d5UkVGQkswUTdRVUZUTDBRc1RVRkJjVUlzVTBGQlZTeFRRVUZSTEd0RFFVRnRRaXhEUVVGRExIbENRVUZYTEVOQlFVTTdTVUZWZWtRc1MwRkJTeXhEUVVGRExHTkJRV003VVVGRE1VSXNUMEZCVHp0WlFVTklMRWxCUVVrc1JVRkJSU3hMUVVGTE8xTkJRMlFzUTBGQlF6dEpRVU5PTEVOQlFVTTdRMEZEU2p0QlFXWkVMRFJDUVdWREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENsaWVudFJvdXRlXzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQ2xpZW50Um91dGVcIik7XG5jb25zdCBCRE9Ib21lXzEgPSByZXF1aXJlKFwifmJkby9yb3V0ZXMvQkRPSG9tZVwiKTtcbmNsYXNzIEhvbWUgZXh0ZW5kcyBCRE9Ib21lXzEuQkRPSG9tZUZhY3RvcnkoQ2xpZW50Um91dGVfMS5DbGllbnRSb3V0ZSkge1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gSG9tZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVNHOXRaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDNKdmRYUmxjeTlJYjIxbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc2VVUkJRWE5FTzBGQlEzUkVMR2xFUVVGeFJEdEJRVk55UkN4TlFVRnhRaXhKUVVGTExGTkJRVkVzZDBKQlFXTXNRMEZCUXl4NVFrRkJWeXhEUVVGRE8wTkJRVWs3UVVGQmFrVXNkVUpCUVdsRkluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmZ1bmN0aW9uIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBrZXksIG5ld1ZhbCwgbnNQcm9wID0gXCJpZFwiKSB7XG4gICAgaWYgKGtleSA9PT0gXCIqXCIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIiogaXMgYSBzcGVjaWFsIGNoYXJhY3RlciBhbmQgZG9lcyBub3QgZm9sbG93IHRoZSBwcm9wZXJ0eSBjb252ZW50aW9uXCIpO1xuICAgIGNvbnN0IG5zUHJlZml4ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGluc3RhbmNlLmNvbnN0cnVjdG9yKS5uYW1lO1xuICAgIGxldCBuc1N1ZmZpeCA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwib2xkU3RvcmFnZU5zU3VmZml4XCIpO1xuICAgIGxldCBzdG9yYWdlVmFsdWU7XG4gICAgaWYgKCFuc1N1ZmZpeClcbiAgICAgICAgbnNTdWZmaXggPSBpbnN0YW5jZVtuc1Byb3BdO1xuICAgIGxldCBucyA9IGAke25zUHJlZml4fV8ke25zU3VmZml4fWA7XG4gICAgaWYgKGtleSA9PT0gbnNQcm9wIHx8IG5zU3VmZml4ICE9PSBpbnN0YW5jZVtuc1Byb3BdKSB7XG4gICAgICAgIG5zU3VmZml4ID0ga2V5ID09PSBuc1Byb3AgPyBuZXdWYWwgOiBpbnN0YW5jZVtuc1Byb3BdO1xuICAgICAgICBjb25zdCBuZXdOcyA9IGAke25zUHJlZml4fV8ke25zU3VmZml4fWA7XG4gICAgICAgIHN0b3JhZ2VWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5zKTtcbiAgICAgICAgaWYgKHN0b3JhZ2VWYWx1ZSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obnMpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3TnMsIHN0b3JhZ2VWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbnMgPSBuZXdOcztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN0b3JhZ2VWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5zKTtcbiAgICAgICAgaWYgKHN0b3JhZ2VWYWx1ZSkge1xuICAgICAgICAgICAgc3RvcmFnZVZhbHVlID0gSlNPTi5wYXJzZShzdG9yYWdlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHN0b3JhZ2VWYWx1ZSA9IHt9O1xuICAgICAgICBpZiAobmV3VmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdG9yYWdlVmFsdWVba2V5XTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LmtleXMoc3RvcmFnZVZhbHVlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obnMsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VWYWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5zLCBKU09OLnN0cmluZ2lmeShPYmplY3QuYXNzaWduKHN0b3JhZ2VWYWx1ZSwgeyBba2V5XTogbmV3VmFsIH0pKSk7XG4gICAgfVxuICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEoaW5zdGFuY2UsIFwib2xkU3RvcmFnZU5zU3VmZml4XCIsIG5zU3VmZml4KTtcbn1cbmV4cG9ydHMuc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2UgPSBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZTtcbmZ1bmN0aW9uIGdldE5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBrZXksIG5zUHJvcCA9IFwiaWRcIiwgZm9yY2VOUykge1xuICAgIGNvbnN0IG5zUHJlZml4ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGluc3RhbmNlLmNvbnN0cnVjdG9yKS5uYW1lO1xuICAgIGxldCBuc1N1ZmZpeCA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwib2xkU3RvcmFnZU5zU3VmZml4XCIpO1xuICAgIGlmIChuc1N1ZmZpeCAhPT0gaW5zdGFuY2VbbnNQcm9wXSlcbiAgICAgICAgbnNTdWZmaXggPSBpbnN0YW5jZVtuc1Byb3BdO1xuICAgIGlmIChmb3JjZU5TKVxuICAgICAgICBuc1N1ZmZpeCA9IGZvcmNlTlM7XG4gICAgbGV0IHN0b3JhZ2VWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke25zUHJlZml4fV8ke25zU3VmZml4fWApO1xuICAgIGlmIChzdG9yYWdlVmFsdWUpXG4gICAgICAgIHN0b3JhZ2VWYWx1ZSA9IEpTT04ucGFyc2Uoc3RvcmFnZVZhbHVlKTtcbiAgICBpZiAoc3RvcmFnZVZhbHVlICYmIGtleSA9PT0gXCIqXCIpXG4gICAgICAgIHJldHVybiBzdG9yYWdlVmFsdWU7XG4gICAgaWYgKHN0b3JhZ2VWYWx1ZSAmJiBrZXkgaW4gc3RvcmFnZVZhbHVlKVxuICAgICAgICByZXR1cm4gc3RvcmFnZVZhbHVlW2tleV07XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmV4cG9ydHMuZ2V0TmFtZXNwYWNlZFN0b3JhZ2UgPSBnZXROYW1lc3BhY2VkU3RvcmFnZTtcbmZ1bmN0aW9uIGRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZShpbnN0YW5jZSwga2V5LCBuc1Byb3AgPSBcImlkXCIpIHtcbiAgICBpZiAoa2V5ID09PSBcIipcIikge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gZ2V0TmFtZXNwYWNlZFN0b3JhZ2UoaW5zdGFuY2UsIGtleSwgbnNQcm9wKTtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHN0b3JhZ2UpIHtcbiAgICAgICAgICAgIGlmIChzdG9yYWdlLmhhc093blByb3BlcnR5KHByb3ApKVxuICAgICAgICAgICAgICAgIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBwcm9wLCB1bmRlZmluZWQsIG5zUHJvcCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZVxuICAgICAgICBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZShpbnN0YW5jZSwga2V5LCB1bmRlZmluZWQsIG5zUHJvcCk7XG59XG5leHBvcnRzLmRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZSA9IGRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRYUnBiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDNWMGFXeHpMM1YwYVd3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN4clJFRkJhMFU3UVVGVmJFVXNVMEZCWjBJc01FSkJRVEJDTEVOQlFVTXNVVUZCWVN4RlFVRkZMRWRCUVZjc1JVRkJSU3hOUVVGWExFVkJRVVVzVTBGQmFVSXNTVUZCU1R0SlFVTnlSeXhKUVVGSkxFZEJRVWNzUzBGQlN5eEhRVUZITzFGQlFVVXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXh6UlVGQmMwVXNRMEZCUXl4RFFVRkRPMGxCUjNwSExFMUJRVTBzVVVGQlVTeEhRVUZITEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXp0SlFVTnNSU3hKUVVGSkxGRkJRVkVzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3h2UWtGQmIwSXNRMEZCUXl4RFFVRkRPMGxCUXpORUxFbEJRVWtzV1VGQmFVSXNRMEZCUXp0SlFVZDBRaXhKUVVGSkxFTkJRVU1zVVVGQlVUdFJRVUZGTEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRE0wTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1IwRkJSeXhSUVVGUkxFbEJRVWtzVVVGQlVTeEZRVUZGTEVOQlFVTTdTVUZEYmtNc1NVRkJTU3hIUVVGSExFdEJRVXNzVFVGQlRTeEpRVUZKTEZGQlFWRXNTMEZCU3l4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVU3VVVGRmFrUXNVVUZCVVN4SFFVRkhMRWRCUVVjc1MwRkJTeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEzUkVMRTFCUVUwc1MwRkJTeXhIUVVGSExFZEJRVWNzVVVGQlVTeEpRVUZKTEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUTNoRExGbEJRVmtzUjBGQlJ5eFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRM2hETEVsQlFVa3NXVUZCV1N4RlFVRkZPMWxCUTJRc1dVRkJXU3hEUVVGRExGVkJRVlVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTTFRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4WlFVRlpMRU5CUVVNc1EwRkJRenRUUVVNM1F6dFJRVU5FTEVWQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVNN1MwRkRaRHRUUVVGTk8xRkJSVWdzV1VGQldTeEhRVUZITEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGVFTXNTVUZCU1N4WlFVRlpMRVZCUVVVN1dVRkRaQ3haUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRUUVVNelF6czdXVUZCVFN4WlFVRlpMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJSWHBDTEVsQlFVa3NUVUZCVFN4TFFVRkxMRk5CUVZNc1JVRkJSVHRaUVVOMFFpeFBRVUZQTEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVONlFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVTdaMEpCUTI1RExGbEJRVmtzUTBGQlF5eFZRVUZWTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRMMEk3TzJkQ1FVRk5MRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5xUlRzN1dVRkJUU3haUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVOdVJ6dEpRVVZFTEhsQ1FVRmpMRU5CUVVNc1VVRkJVU3hGUVVGRkxHOUNRVUZ2UWl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8wRkJRemRFTEVOQlFVTTdRVUZ5UTBRc1owVkJjVU5ETzBGQmEwSkVMRk5CUVdkQ0xHOUNRVUZ2UWl4RFFVRkRMRkZCUVdFc1JVRkJSU3hIUVVGWExFVkJRVVVzVTBGQmFVSXNTVUZCU1N4RlFVRkZMRTlCUVdkQ08wbEJRM0JITEUxQlFVMHNVVUZCVVN4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJRenRKUVVOc1JTeEpRVUZKTEZGQlFWRXNSMEZCUnl4elFrRkJWeXhEUVVGRExGRkJRVkVzUlVGQlJTeHZRa0ZCYjBJc1EwRkJReXhEUVVGRE8wbEJRek5FTEVsQlFVa3NVVUZCVVN4TFFVRkxMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGQlJTeFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJReTlFTEVsQlFVa3NUMEZCVHp0UlFVRkZMRkZCUVZFc1IwRkJSeXhQUVVGUExFTkJRVU03U1VGRGFFTXNTVUZCU1N4WlFVRlpMRWRCUVZFc1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEZGQlFWRXNTVUZCU1N4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRM2hGTEVsQlFVa3NXVUZCV1R0UlFVRkZMRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMGxCUXpGRUxFbEJRVWtzV1VGQldTeEpRVUZKTEVkQlFVY3NTMEZCU3l4SFFVRkhPMUZCUVVVc1QwRkJUeXhaUVVGWkxFTkJRVU03U1VGRGNrUXNTVUZCU1N4WlFVRlpMRWxCUVVrc1IwRkJSeXhKUVVGSkxGbEJRVms3VVVGQlJTeFBRVUZQTEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOc1JTeFBRVUZQTEZOQlFWTXNRMEZCUXp0QlFVTnlRaXhEUVVGRE8wRkJWa1FzYjBSQlZVTTdRVUZYUkN4VFFVRm5RaXd5UWtGQk1rSXNRMEZCUXl4UlFVRmhMRVZCUVVVc1IwRkJWeXhGUVVGRkxGTkJRV2xDTEVsQlFVazdTVUZEZWtZc1NVRkJTU3hIUVVGSExFdEJRVXNzUjBGQlJ5eEZRVUZGTzFGQlEySXNUVUZCVFN4UFFVRlBMRWRCUVVjc2IwSkJRVzlDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVjc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU0xUkN4TFFVRkxMRTFCUVUwc1NVRkJTU3hKUVVGSkxFOUJRVThzUlVGQlJUdFpRVU40UWl4SlFVRkpMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETzJkQ1FVRkZMREJDUVVFd1FpeERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRVZCUVVVc1UwRkJVeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzFOQlEyNUhPMHRCUTBvN08xRkJRVTBzTUVKQlFUQkNMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzUlVGQlJTeFRRVUZUTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkRlRVVzUTBGQlF6dEJRVkJFTEd0RlFVOURJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBQcm9wZXJ0eV8xID0gcmVxdWlyZShcIn5iZG8vbGliL1Byb3BlcnR5XCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuY29uc3QgTW9kaWZpY2F0aW9uXzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kaWZpY2F0aW9uXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IEVycm9yc18xID0gcmVxdWlyZShcIn5iZG8vbGliL0Vycm9yc1wiKTtcbmNvbnN0IE1vZGVsUmVnaXN0cnlfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Nb2RlbFJlZ2lzdHJ5XCIpO1xuY2xhc3MgQXR0cmlidXRlIGV4dGVuZHMgUHJvcGVydHlfMS5Qcm9wZXJ0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSwgcGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCwgcHJvcGVydHksIHBhcmFtcyk7XG4gICAgICAgIHRoaXMuaW5ET01Jbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmF1dG9TYXZlQWxsb3dlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkRG9TZXRWYWx1ZSh2YWx1ZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBvbGRJRDtcbiAgICAgICAgaWYgKHRoaXMub2JqZWN0LmlzQkRPTW9kZWwgJiYgdGhpcy5wcm9wZXJ0eSA9PT0gXCJpZFwiKVxuICAgICAgICAgICAgb2xkSUQgPSB0aGlzLm93blZhbHVlO1xuICAgICAgICB0aGlzLmRvU2V0VmFsdWUodmFsdWUsIHRydWUsIHRydWUpO1xuICAgICAgICBpZiAob2xkSUQpXG4gICAgICAgICAgICBNb2RlbFJlZ2lzdHJ5XzEuTW9kZWxSZWdpc3RyeS5nZXRJbnN0YW5jZSgpLnVwZGF0ZUlEKG9sZElELCB0aGlzLm9iamVjdCk7XG4gICAgICAgIHRoaXMucmVmbGVjdFRvRE9NQXR0cmlidXRlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5kb0F1dG9TYXZlKCk7XG4gICAgfVxuICAgIHByb3h5SGFuZGxlcihfcGF0aCwgX2NoYW5nZWRWYWwsIF9wcmV2VmFsKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuZG9TZXRWYWx1ZSh1dGlsXzEuZ2V0UHJveHlUYXJnZXQodmFsdWUpLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5yZWZsZWN0VG9ET01BdHRyaWJ1dGUodmFsdWUpO1xuICAgICAgICB0aGlzLmRvQXV0b1NhdmUoKTtcbiAgICB9XG4gICAgZ2V0VW5zYXZlZENoYW5nZSgpIHsgfVxuICAgIHNob3VsZERvU2V0VmFsdWUodmFsdWUsIHNraXBHdWFyZCA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChlbnZpcm9ubWVudF8xLmlzQnJvd3NlcigpICYmICF0aGlzLm9iamVjdC5pc0JET01vZGVsICYmICh0aGlzLm9iamVjdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgY29uc3QgY29uc3RydWN0ZWRUeXBlID0gdXRpbF8xLmNvbnN0cnVjdFR5cGVPZkhUTUxBdHRyaWJ1dGUodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmluRE9NSW5pdGlhbGl6ZWQgJiYgdGhpcy5vYmplY3QuZ2V0QXR0cmlidXRlKHRoaXMucHJvcGVydHkpICYmIHZhbHVlICE9PSBjb25zdHJ1Y3RlZFR5cGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKGNvbnN0cnVjdGVkVHlwZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhKHZhbHVlID09PSB0aGlzLm93blZhbHVlIHx8ICFza2lwR3VhcmQgJiYgIXRoaXMuZGlzYWJsZVR5cGVHdWFyZCAmJiAhdGhpcy50eXBlR3VhcmQodmFsdWUpKTtcbiAgICB9XG4gICAgcmVmbGVjdFRvRE9NQXR0cmlidXRlKHZhbHVlKSB7XG4gICAgICAgIGlmICghZW52aXJvbm1lbnRfMS5pc0Jyb3dzZXIoKSB8fCAhKHRoaXMub2JqZWN0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSB0aGlzLnByb3BlcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IHRoaXMub2JqZWN0LmdldEF0dHJpYnV0ZShzdHJpbmdLZXkpO1xuICAgICAgICBsZXQgc2V0QXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgbGV0IHBUYXJnZXQ7XG4gICAgICAgIGxldCB2YWx1ZVRvUGFzcyA9IHZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNb2RpZmljYXRpb25fMS5Nb2RpZmljYXRpb24pXG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgaWYgKCF0aGlzLmluRE9NSW5pdGlhbGl6ZWQgJiYgYXR0clZhbHVlKSB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBwVGFyZ2V0ID0gdXRpbF8xLmdldFByb3h5VGFyZ2V0KHZhbHVlVG9QYXNzKTtcbiAgICAgICAgdGhpcy5pbkRPTUluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHNldEF0dHJpYnV0ZSAmJiBhdHRyVmFsdWUgIT09IHBUYXJnZXQgJiYgYXR0clZhbHVlICE9PSBKU09OLnN0cmluZ2lmeShwVGFyZ2V0KS5yZXBsYWNlKC9cXFwiL2csIFwiJ1wiKSkge1xuICAgICAgICAgICAgdGhpcy5vYmplY3Quc2V0QXR0cmlidXRlKHN0cmluZ0tleSwgcFRhcmdldCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRvQXV0b1NhdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9TYXZlICYmIHRoaXMuZG9Ob3RQZXJzaXN0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3JzXzEuQ29uZmlndXJhdGlvbkVycm9yKFwiWW91IGhhdmUgdHVybmVkIG9uIGF1dG9zYXZlIGJ1dCBhdCB0aGUgc2FtZSB0aW1lIGl0IGlzIGZvcmJpZGRlbiB0byBwZXJzaXN0IHRoZSB2YWx1ZSFcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmF1dG9TYXZlQWxsb3dlZCkge1xuICAgICAgICAgICAgdGhpcy5hdXRvU2F2ZUFsbG93ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5hdXRvU2F2ZSB8fCAhdXRpbF8xLmlzRnVuY3Rpb24odGhpcy5vYmplY3Quc2F2ZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5hdXRvU2F2ZSA9PT0gXCJib29sZWFuXCIpXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5zYXZlKHRoaXMucHJvcGVydHkpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYXV0b1NhdmUgPT09IFwibnVtYmVyXCIgJiYgIXRoaXMuYXV0b1NhdmVUaW1lb3V0KSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9TYXZlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0LnNhdmUodGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuYXV0b1NhdmVUaW1lb3V0O1xuICAgICAgICAgICAgfSwgTWF0aC5hYnModGhpcy5hdXRvU2F2ZSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5BdHRyaWJ1dGUgPSBBdHRyaWJ1dGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRWFIwY21saWRYUmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlzYVdJdlFYUjBjbWxpZFhSbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc1owUkJRVGhFTzBGQlJUbEVMSGRFUVVGdFJEdEJRVU51UkN4M1JFRkJjVVE3UVVGRGNrUXNNRU5CUVRKR08wRkJSVE5HTERSRFFVRnhSRHRCUVVOeVJDd3dSRUZCZFVRN1FVRjNSWFpFTEUxQlFXRXNVMEZCTWtRc1UwRkJVU3h0UWtGQlVUdEpRWEZGY0VZc1dVRkJXU3hOUVVGVExFVkJRVVVzVVVGQlZ5eEZRVUZGTEUxQlFXbEVPMUZCUTJwR0xFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNVVUZCVVN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJja0kxUWl4eFFrRkJaMElzUjBGQldTeExRVUZMTEVOQlFVTTdVVUZyUW14RExHOUNRVUZsTEVkQlFWa3NTMEZCU3l4RFFVRkRPMGxCU1hwRExFTkJRVU03U1VGUlRTeFJRVUZSTEVOQlFVTXNTMEZCWjBNN1VVRkROVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZCUlN4UFFVRlBPMUZCUXpGRExFbEJRVWtzUzBGQlN5eERRVUZETzFGQlExWXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4TFFVRkxMRWxCUVVrN1dVRkJSU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXp0UlFVTTFSU3hKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRGJrTXNTVUZCU1N4TFFVRkxPMWxCUVVVc05rSkJRV0VzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTndSU3hKUVVGSkxFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRGJFTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8wbEJRM1JDTEVOQlFVTTdTVUZSVFN4WlFVRlpMRU5CUVVNc1MwRkJZeXhGUVVGRkxGZEJRV3RDTEVWQlFVVXNVVUZCWlR0UlFVTnVSU3hOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1NVRkJTVHRaUVVGRkxFOUJRVTg3VVVGRGJFUXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXh4UWtGQll5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU51UkN4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRiRU1zU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMGxCUTNSQ0xFTkJRVU03U1VGVFRTeG5Ra0ZCWjBJc1MwRkJTeXhEUVVGRE8wbEJWWFJDTEdkQ1FVRm5RaXhEUVVGRExFdEJRV2RETEVWQlFVVXNXVUZCY1VJc1MwRkJTenRSUVVOb1JpeEpRVUZKTEhWQ1FVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzV1VGQldTeFhRVUZYTEVOQlFVTXNSVUZCUlR0WlFVTm9SaXhOUVVGTkxHVkJRV1VzUjBGQlJ5eHRRMEZCTkVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRaUVVOcVJpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1pVRkJaU3hGUVVGRk8yZENRVU5vUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETzJkQ1FVTXZRaXhQUVVGUExFdEJRVXNzUTBGQlF6dGhRVU5vUWp0VFFVTktPMUZCUTBRc1QwRkJUeXhEUVVGRExFTkJRVU1zUzBGQlN5eExRVUZMTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1EwRkJReXhUUVVGVExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVFY3NRMEZCUXp0SlFXTk5MSEZDUVVGeFFpeERRVUZETEV0QlFXZERPMUZCUTNwRUxFbEJRVWtzUTBGQlF5eDFRa0ZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEZsQlFWa3NWMEZCVnl4RFFVRkRPMWxCUVVVc1QwRkJUenRSUVVOc1JTeE5RVUZOTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlF6TkRMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRM1JFTEVsQlFVa3NXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVONFFpeEpRVUZKTEU5QlFVOHNRMEZCUXp0UlFVVmFMRWxCUVVrc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU40UWl4SlFVRkpMRXRCUVVzc1dVRkJXU3d5UWtGQldUdFpRVUZGTEZkQlFWY3NSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGRmFrVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNTVUZCU1N4VFFVRlRMRVZCUVVVN1dVRkRja01zV1VGQldTeEhRVUZITEV0QlFVc3NRMEZCUXp0VFFVTjRRanM3V1VGQlRTeFBRVUZQTEVkQlFVY3NjVUpCUVdNc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFJRVU0zUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUnpkQ0xFbEJRVWtzV1VGQldTeEpRVUZKTEZOQlFWTXNTMEZCU3l4UFFVRlBMRWxCUVVrc1UwRkJVeXhMUVVGTExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTTVSaXhKUVVGSkxFTkJRVU1zVFVGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1QwRkJUeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFOQlF6bEVPMGxCUTB3c1EwRkJRenRKUVZWUExGVkJRVlU3VVVGRFpDeEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJUdFpRVU53UXl4TlFVRk5MRWxCUVVrc01rSkJRV3RDTEVOQlFVTXNkMFpCUVhkR0xFTkJRVU1zUTBGQlF6dFRRVU14U0R0UlFVTkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTzFsQlEzWkNMRWxCUVVrc1EwRkJReXhsUVVGbExFZEJRVWNzU1VGQlNTeERRVUZETzFsQlF6VkNMRTlCUVU4N1UwRkRWanRSUVVORUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4SlFVRkpMRU5CUVVNc2FVSkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJRenRaUVVGRkxFOUJRVTg3VVVGRE5VUXNTVUZCU1N4UFFVRlBMRWxCUVVrc1EwRkJReXhSUVVGUkxFdEJRVXNzVTBGQlV6dFpRVUZGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTjRSU3hKUVVGSkxFOUJRVThzU1VGQlNTeERRVUZETEZGQlFWRXNTMEZCU3l4UlFVRlJMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTzFsQlF6VkVMRWxCUVVrc1EwRkJReXhsUVVGbExFZEJRVWNzVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlR0blFrRkRia01zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzJkQ1FVTm9ReXhQUVVGUExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTTdXVUZEYUVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03VTBGREwwSTdTVUZEVEN4RFFVRkRPME5CUTBvN1FVRTNURVFzT0VKQk5reERJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgbXNfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJtc1wiKSk7XG5jb25zdCBCRE9NYXBDYWNoZV8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET01hcENhY2hlXCIpO1xuY2xhc3MgQkRPQ29uZmlnTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgQkRPTWFwQ2FjaGVfMS5CRE9NYXBDYWNoZSgpO1xuICAgIH1cbiAgICBhc3luYyBnZXQoY29uZmlnKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGF3YWl0IHRoaXMuZ2V0Q2FjaGUoY29uZmlnKTtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBhd2FpdCB0aGlzLmxvYWQoY29uZmlnKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0Q2FjaGUoY29uZmlnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XG4gICAgfVxuICAgIGdldENhY2hlKGNvbmZpZykge1xuICAgICAgICBjb25zdCBmcm9tTG9jYWxDYWNoZSA9IHRoaXMuY2FjaGUuZ2V0KGNvbmZpZyk7XG4gICAgICAgIGlmIChmcm9tTG9jYWxDYWNoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21Mb2NhbENhY2hlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBhc3luYyBzZXRDYWNoZShjb25maWcsIHZhbHVlKSB7XG4gICAgICAgIGxldCBjb25mID0gdGhpcy5jYWNoZS5nZXQoJ19fQ29uZmlnTWFuYWdlckNhY2hlVGltZW91dF9fJyk7XG4gICAgICAgIGlmICghdGhpcy5jYWNoZS5oYXMoJ19fQ29uZmlnTWFuYWdlckNhY2hlVGltZW91dF9fJykpIHtcbiAgICAgICAgICAgIGNvbmYgPSAoYXdhaXQgdGhpcy5sb2FkKCdjb25maWcnKSkudGltZW91dHMuY29uZmlnQ2FjaGU7XG4gICAgICAgICAgICBpZiAoY29uZilcbiAgICAgICAgICAgICAgICBjb25mID0gbXNfMS5kZWZhdWx0KGNvbmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5zZXQoJ19fQ29uZmlnTWFuYWdlckNhY2hlVGltZW91dF9fJywgY29uZik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZS5zZXQoY29uZmlnLCB2YWx1ZSwgY29uZik7XG4gICAgfVxufVxuZXhwb3J0cy5CRE9Db25maWdNYW5hZ2VyID0gQkRPQ29uZmlnTWFuYWdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBRMjl1Wm1sblRXRnVZV2RsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmJHbGlMMEpFVDBOdmJtWnBaMDFoYm1GblpYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNiMFJCUVc5Q08wRkJRM0JDTEhORVFVRnRSRHRCUVcxQ2JrUXNUVUZCYzBJc1owSkJRV2RDTzBsQlFYUkRPMUZCVldNc1ZVRkJTeXhIUVVFMlFpeEpRVUZKTEhsQ1FVRlhMRVZCUVVVc1EwRkJRenRKUVhkRmJFVXNRMEZCUXp0SlFTOUVWU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFXTTdVVUZETTBJc1NVRkJTU3hMUVVGTExFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRM2hETEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1dVRkRVaXhMUVVGTExFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xbEJRMmhETEUxQlFVMHNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdVMEZEZEVNN1VVRkRSQ3hQUVVGUExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRiRU1zUTBGQlF6dEpRVGhDVXl4UlFVRlJMRU5CUVVNc1RVRkJZenRSUVVNM1FpeE5RVUZOTEdOQlFXTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTTVReXhKUVVGSkxHTkJRV01zUlVGQlJUdFpRVU5vUWl4UFFVRlBMR05CUVdNc1EwRkJRenRUUVVONlFqdFJRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTJoQ0xFTkJRVU03U1VGWFV5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVdNc1JVRkJSU3hMUVVGVk8xRkJReTlETEVsQlFVa3NTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEN0Q1FVRXJRaXhEUVVGRExFTkJRVU03VVVGRE0wUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEN0Q1FVRXJRaXhEUVVGRExFVkJRVVU3V1VGRGJFUXNTVUZCU1N4SFFVRkhMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF6dFpRVU40UkN4SlFVRkpMRWxCUVVrN1owSkJRVVVzU1VGQlNTeEhRVUZITEZsQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVNeFFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXdyUWtGQkswSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVONlJEdFJRVU5FTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRlRU1zUTBGQlF6dERRVU5LTzBGQmJFWkVMRFJEUVd0R1F5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEJET0RhdGFiYXNlbWFuYWdlciB7XG59XG5leHBvcnRzLkJET0RhdGFiYXNlbWFuYWdlciA9IEJET0RhdGFiYXNlbWFuYWdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBSR0YwWVdKaGMyVk5ZVzVoWjJWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXNhV0l2UWtSUFJHRjBZV0poYzJWTllXNWhaMlZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRMEVzVFVGQmMwSXNhMEpCUVd0Q08wTkJSWFpETzBGQlJrUXNaMFJCUlVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBtb21lbnRfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJtb21lbnRcIikpO1xuY29uc3QgcGF0aF8xID0gcmVxdWlyZShcInBhdGhcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY2xhc3MgQkRPTG9nZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihfcGFyYW1zKSB7XG4gICAgICAgIHRoaXMubG9nRmlsZSA9ICdkZWZhdWx0LmxvZyc7XG4gICAgICAgIHRoaXMucHJldmVudENvbnNvbGVQcmludCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByZXZlbnRGaWxlUHJpbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2dMZXZlbCA9ICdkZWJ1Zyc7XG4gICAgICAgIHRoaXMucHJvdG90eXBlTmFtZXMgPSB1dGlsXzEuZ2V0UHJvdG90eXBlTmFtZXNSZWN1cnNpdmUodGhpcyk7XG4gICAgfVxuICAgIGxvZyhtZXNzYWdlLCBsb2dsZXZlbCA9ICdsb2cnLCAuLi5hcmdzKSB7XG4gICAgICAgIGlmIChsb2dsZXZlbCAhPT0gJ2xvZycgJiYgIXRoaXMuaXNBbGxvd2VkKGxvZ2xldmVsKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLnByZXZlbnRDb25zb2xlUHJpbnQgfHwgWydsb2cnLCAnZXJyb3InXS5pbmNsdWRlcyhsb2dsZXZlbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0SGVhZGVyKGxvZ2xldmVsKTtcbiAgICAgICAgICAgIGxldCBuZXdBcmdzID0gW107XG4gICAgICAgICAgICBpZiAoaGVhZGVyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBuZXdBcmdzID0gbmV3QXJncy5jb25jYXQoaGVhZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBuZXdBcmdzLnB1c2goaGVhZGVyKTtcbiAgICAgICAgICAgIG5ld0FyZ3MucHVzaChtZXNzYWdlKTtcbiAgICAgICAgICAgIG5ld0FyZ3MgPSBuZXdBcmdzLmNvbmNhdChhcmdzKTtcbiAgICAgICAgICAgIGNvbnNvbGVbbG9nbGV2ZWxdLmFwcGx5KHRoaXMsIG5ld0FyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGFyZ3MpO1xuICAgICAgICBpZiAoIXRoaXMucHJldmVudEZpbGVQcmludCB8fCBsb2dsZXZlbCA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy53cml0ZVRvRmlsZShsb2dsZXZlbCwgbWVzc2FnZSArIHBhcnNlZFN0cmluZy5zdWJzdHIoMSwgcGFyc2VkU3RyaW5nLmxlbmd0aCAtIDIpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWJ1ZyhtZXNzYWdlLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGFwcGx5ID0gW21lc3NhZ2UsICdkZWJ1ZyddLmNvbmNhdChhcmdzKTtcbiAgICAgICAgdGhpcy5sb2cuYXBwbHkodGhpcywgYXBwbHkpO1xuICAgIH1cbiAgICBpbmZvKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgYXBwbHkgPSBbbWVzc2FnZSwgJ2luZm8nXS5jb25jYXQoYXJncyk7XG4gICAgICAgIHRoaXMubG9nLmFwcGx5KHRoaXMsIGFwcGx5KTtcbiAgICB9XG4gICAgd2FybihtZXNzYWdlLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGFwcGx5ID0gW21lc3NhZ2UsICd3YXJuJ10uY29uY2F0KGFyZ3MpO1xuICAgICAgICB0aGlzLmxvZy5hcHBseSh0aGlzLCBhcHBseSk7XG4gICAgfVxuICAgIGVycm9yKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgYXBwbHkgPSBbbWVzc2FnZSwgJ2Vycm9yJ10uY29uY2F0KGFyZ3MpO1xuICAgICAgICB0aGlzLmxvZy5hcHBseSh0aGlzLCBhcHBseSk7XG4gICAgfVxuICAgIGdldFByb2NJbmZvKCkge1xuICAgICAgICByZXR1cm4gYCR7Z2xvYmFsLnByb2Nlc3MuZW52Lm5hbWUgfHwgJyd9ICR7Z2xvYmFsLnByb2Nlc3MuZW52Lmhvc3RuYW1lIHx8ICcnfSAke2dsb2JhbC5wcm9jZXNzLnBpZH1gO1xuICAgIH1cbiAgICBpc0FsbG93ZWQobG9nTGV2ZWwpIHtcbiAgICAgICAgY29uc3QgbG9nTGV2ZWxPcmRlciA9IFsnbG9nJywgJ2RlYnVnJywgJ2luZm8nLCAnd2FybicsICdlcnJvciddO1xuICAgICAgICByZXR1cm4gbG9nTGV2ZWxPcmRlci5pbmRleE9mKGxvZ0xldmVsKSA+PSBsb2dMZXZlbE9yZGVyLmluZGV4T2YodGhpcy5sb2dMZXZlbCk7XG4gICAgfVxuICAgIGN1cnJlbnRUaW1lKCkge1xuICAgICAgICByZXR1cm4gbW9tZW50XzEuZGVmYXVsdCgpLmZvcm1hdCgnREQuTU0uWVlZWSBISDptbTpzcycpO1xuICAgIH1cbiAgICBnZXRMb2dQb2ludCgpIHtcbiAgICAgICAgY29uc3Qgc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGxldCBjYWxscG9pbnQ7XG4gICAgICAgIGZvciAoY29uc3QgW2luZGV4LCBzdGFja3BhcnRdIG9mIHN0YWNrLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgaWYgKCFpbmRleClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghdXRpbF8xLmluY2x1ZGVzTWVtYmVyT2ZMaXN0KHN0YWNrcGFydCwgdGhpcy5wcm90b3R5cGVOYW1lcywgJy50cycpKSB7XG4gICAgICAgICAgICAgICAgY2FsbHBvaW50ID0gc3RhY2twYXJ0LnNwbGl0KHBhdGhfMS5zZXApLnBvcCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxscG9pbnQpIHtcbiAgICAgICAgICAgIGNhbGxwb2ludCA9IGNhbGxwb2ludC5yZXBsYWNlKCcpJywgJycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsbHBvaW50ID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbGxwb2ludDtcbiAgICB9XG59XG5leHBvcnRzLkJET0xvZ2dlciA9IEJET0xvZ2dlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBURzluWjJWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXNhV0l2UWtSUFRHOW5aMlZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVU5CTERSRVFVRTBRanRCUVVNMVFpd3JRa0ZCTWtJN1FVRkRNMElzTUVOQlFXMUdPMEZCVjI1R0xFMUJRWE5DTEZOQlFWTTdTVUZyUkROQ0xGbEJRVmtzVDBGQlowTTdVVUV6UTNKRExGbEJRVThzUjBGQldTeGhRVUZoTEVOQlFVTTdVVUZSYWtNc2QwSkJRVzFDTEVkQlFXRXNTMEZCU3l4RFFVRkRPMUZCVVhSRExIRkNRVUZuUWl4SFFVRmhMRXRCUVVzc1EwRkJRenRSUVdWdVF5eGhRVUZSTEVkQlFXVXNUMEZCVHl4RFFVRkRPMUZCVlc1Q0xHMUNRVUZqTEVkQlFXRXNhVU5CUVRCQ0xFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZGTDBJc1EwRkJRenRKUVZjeFF5eEhRVUZITEVOQlFVTXNUMEZCV1N4RlFVRkZMRmRCUVhOQ0xFdEJRVXNzUlVGQlJTeEhRVUZITEVsQlFWYzdVVUZEYUVVc1NVRkJTU3hSUVVGUkxFdEJRVXNzUzBGQlN5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU03V1VGQlJTeFBRVUZQTzFGQlF6VkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRk8xbEJRMnhGTEUxQlFVMHNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdXVUZEZUVNc1NVRkJTU3hQUVVGUExFZEJRV0VzUlVGQlJTeERRVUZETzFsQlF6TkNMRWxCUVVrc1RVRkJUU3haUVVGWkxFdEJRVXNzUlVGQlJUdG5Ra0ZEZWtJc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1lVRkRjRU03TzJkQ1FVRk5MRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZETlVJc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0WlFVTjBRaXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOa0xFOUJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzFOQlF6VkVPMUZCUTBRc1RVRkJUU3haUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNeFF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeEpRVUZKTEZGQlFWRXNTMEZCU3l4UFFVRlBMRVZCUVVVN1dVRkRhRVFzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1QwRkJUeXhIUVVGSExGbEJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRmxCUVZrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTjZSanRKUVVOTUxFTkJRVU03U1VGUlRTeExRVUZMTEVOQlFVTXNUMEZCV1N4RlFVRkZMRWRCUVVjc1NVRkJVenRSUVVOdVF5eE5RVUZOTEV0QlFVc3NSMEZCUnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRPVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGdlFpeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnNSQ3hEUVVGRE8wbEJVVTBzU1VGQlNTeERRVUZETEU5QlFWa3NSVUZCUlN4SFFVRkhMRWxCUVZNN1VVRkRiRU1zVFVGQlRTeExRVUZMTEVkQlFVY3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUXpkRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJiMElzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYkVRc1EwRkJRenRKUVZGTkxFbEJRVWtzUTBGQlF5eFBRVUZaTEVWQlFVVXNSMEZCUnl4SlFVRlRPMUZCUTJ4RExFMUJRVTBzUzBGQlN5eEhRVUZITEVOQlFVTXNUMEZCVHl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTTNReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVc5Q0xFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEyeEVMRU5CUVVNN1NVRlJUU3hMUVVGTExFTkJRVU1zVDBGQldTeEZRVUZGTEVkQlFVY3NTVUZCVXp0UlFVTnVReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZET1VNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRnZRaXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU5zUkN4RFFVRkRPMGxCVTFNc1YwRkJWenRSUVVOcVFpeFBRVUZQTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeEpRVUZKTEVWQlFVVXNTVUZCU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVsQlFVa3NSVUZCUlN4SlFVRkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZEZWtjc1EwRkJRenRKUVN0Q1V5eFRRVUZUTEVOQlFVTXNVVUZCYlVJN1VVRkRia01zVFVGQlRTeGhRVUZoTEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhGUVVGRkxFMUJRVTBzUlVGQlJTeE5RVUZOTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRhRVVzVDBGQlR5eGhRVUZoTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxHRkJRV0VzUTBGQlF5eFBRVUZQTEVOQlFWTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wbEJRek5HTEVOQlFVTTdTVUZUVXl4WFFVRlhPMUZCUTJwQ0xFOUJRVThzWjBKQlFVMHNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXh4UWtGQmNVSXNRMEZCUXl4RFFVRkRPMGxCUTJ4RUxFTkJRVU03U1VGVFV5eFhRVUZYTzFGQlEycENMRTFCUVUwc1MwRkJTeXhIUVVGWkxFbEJRVWtzUzBGQlN5eEZRVUZGTEVOQlFVTXNTMEZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU4wUkN4SlFVRkpMRk5CUVZNc1EwRkJRenRSUVVOa0xFdEJRVXNzVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4VFFVRlRMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVTdXVUZET1VNc1NVRkJTU3hEUVVGRExFdEJRVXM3WjBKQlFVVXNVMEZCVXp0WlFVTnlRaXhKUVVGSkxFTkJRVU1zTWtKQlFXOUNMRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eGpRVUZqTEVWQlFVVXNTMEZCU3l4RFFVRkRMRVZCUVVVN1owSkJRemxFTEZOQlFWTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExGVkJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVOMlF5eE5RVUZOTzJGQlExUTdVMEZEU2p0UlFVTkVMRWxCUVVrc1UwRkJVeXhGUVVGRk8xbEJRMWdzVTBGQlV5eEhRVUZITEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlF6RkRPMkZCUVUwN1dVRkRTQ3hUUVVGVExFZEJRVWNzUlVGQlJTeERRVUZETzFOQlEyeENPMUZCUTBRc1QwRkJUeXhUUVVGVExFTkJRVU03U1VGRGNrSXNRMEZCUXp0RFFVTktPMEZCTTAxRUxEaENRVEpOUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLmV4cGlyZSA9IEluZmluaXR5O1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmV4cGlyZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKGR1cmF0aW9uIHx8IEluZmluaXR5KTtcbiAgICB9XG4gICAgZ2V0IGV4cGlyZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4cGlyZSA/IHRoaXMuZXhwaXJlIDwgbmV3IERhdGUoKS5nZXRUaW1lKCkgOiBmYWxzZTtcbiAgICB9XG59XG5jbGFzcyBCRE9NYXBDYWNoZSBleHRlbmRzIE1hcCB7XG4gICAgc2V0KGtleSwgdmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyBFbnRpdHkodmFsdWUsIGR1cmF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnNldChrZXksIGVudGl0eSk7XG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gc3VwZXIuZ2V0KGtleSk7XG4gICAgICAgIGlmIChlbnRpdHkgPT09IHVuZGVmaW5lZCB8fCBlbnRpdHkuZXhwaXJlZCkge1xuICAgICAgICAgICAgdGhpcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudGl0eS5kYXRhO1xuICAgIH1cbn1cbmV4cG9ydHMuQkRPTWFwQ2FjaGUgPSBCRE9NYXBDYWNoZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBUV0Z3UTJGamFHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMnhwWWk5Q1JFOU5ZWEJEWVdOb1pTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVV0QkxFMUJRVTBzVFVGQlRUdEpRV2RDVWl4WlFVRlpMRWxCUVU4c1JVRkJSU3hSUVVGcFFqdFJRVVk1UWl4WFFVRk5MRWRCUVZjc1VVRkJVU3hEUVVGRE8xRkJSemxDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMnBDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hKUVVGSkxFVkJRVVVzUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RFFVRkRMRkZCUVZFc1NVRkJTU3hSUVVGUkxFTkJRVU1zUTBGQlF6dEpRVU5vUlN4RFFVRkRPMGxCVTBRc1NVRkJTU3hQUVVGUE8xRkJRMUFzVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTndSU3hEUVVGRE8wTkJRMG83UVVGVFJDeE5RVUZoTEZkQlFXdENMRk5CUVZFc1IwRkJhVUk3U1VGWE4wTXNSMEZCUnl4RFFVRkRMRWRCUVUwc1JVRkJSU3hMUVVGUkxFVkJRVVVzVVVGQmFVSTdVVUZETVVNc1RVRkJUU3hOUVVGTkxFZEJRVWNzU1VGQlNTeE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRek5ETEU5QlFVOHNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEYkVNc1EwRkJRenRKUVZOTkxFZEJRVWNzUTBGQlF5eEhRVUZOTzFGQlEySXNUVUZCVFN4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTTVRaXhKUVVGSkxFMUJRVTBzUzBGQlN5eFRRVUZUTEVsQlFVa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVONFF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMnBDTEU5QlFVOHNVMEZCVXl4RFFVRkRPMU5CUTNCQ08xRkJRMFFzVDBGQlR5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCUTNaQ0xFTkJRVU03UTBGRFNqdEJRUzlDUkN4clEwRXJRa01pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xudmFyIEJET01vZGVsXzE7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgdXVpZF8xID0gcmVxdWlyZShcInV1aWRcIik7XG5jb25zdCB0eXBlX2dyYXBocWxfMSA9IHJlcXVpcmUoXCJ0eXBlLWdyYXBocWxcIik7XG5jb25zdCBCaW5kaW5nXzEgPSByZXF1aXJlKFwifmJkby9saWIvQmluZGluZ1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCBNb2RlbFJlZ2lzdHJ5XzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kZWxSZWdpc3RyeVwiKTtcbmxldCBCRE9Nb2RlbCA9IEJET01vZGVsXzEgPSBjbGFzcyBCRE9Nb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNCRE9Nb2RlbCA9IHRydWU7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbk5hbWUgPSBCRE9Nb2RlbF8xLmNvbGxlY3Rpb25OYW1lO1xuICAgICAgICB0aGlzLmRhdGFiYXNlTmFtZSA9IEJET01vZGVsXzEuZGF0YWJhc2VOYW1lO1xuICAgICAgICB0aGlzLmlkID0gYHBlbmRpbmdfJHt1dWlkXzEudjQoKX1gO1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzLmNvbnN0cnVjdG9yKS5uYW1lO1xuICAgICAgICBNb2RlbFJlZ2lzdHJ5XzEuTW9kZWxSZWdpc3RyeS5nZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgYmluZGluZ3MoKSB7XG4gICAgICAgIGNvbnN0IGJpbmRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLCBcImJpbmRpbmdzXCIpO1xuICAgICAgICByZXR1cm4gYmluZGluZ3MgPyBiaW5kaW5ncyA6IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlQnlJRChfaWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkXCIpO1xuICAgIH1cbiAgICBnZXRSZWZlcmVuY2VTdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgX3JlZmVyZW5jZToke3RoaXMuY2xhc3NOYW1lfSR7dGhpcy5pZH1gO1xuICAgIH1cbiAgICBiaW5kKHByb3BOYW1lLCBtb2RlKSB7XG4gICAgICAgIHJldHVybiBuZXcgQmluZGluZ18xLkJpbmRpbmcodGhpcywgcHJvcE5hbWUsIG1vZGUpO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMudG9KU09OKCk7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICBjb25zdCBkYXRhID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzW2tleV07XG4gICAgICAgICAgICAgICAgZGF0YVtrZXldID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgYXN5bmMgaXNVbnNhdmVkKGF0dHIpIHtcbiAgICAgICAgY29uc3QgdW5zYXZlZENoYW5nZXMgPSBhd2FpdCB0aGlzLmdldFVuc2F2ZWRDaGFuZ2VzKCk7XG4gICAgICAgIGxldCB1bnNhdmVkID0gZmFsc2U7XG4gICAgICAgIGlmICh1bnNhdmVkQ2hhbmdlcyAmJiB1bnNhdmVkQ2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShhdHRyKSlcbiAgICAgICAgICAgIHVuc2F2ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuc2F2ZWQpO1xuICAgIH1cbiAgICBhc3luYyBoYXNVbnNhdmVkQ2hhbmdlcygpIHtcbiAgICAgICAgY29uc3QgdW5zYXZlZENoYW5nZXMgPSBhd2FpdCB0aGlzLmdldFVuc2F2ZWRDaGFuZ2VzKCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoQm9vbGVhbihPYmplY3Qua2V5cyh1bnNhdmVkQ2hhbmdlcykubGVuZ3RoKSk7XG4gICAgfVxufTtcbkJET01vZGVsLmdyYXBoUUxUeXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKEJET01vZGVsXzEuY29uc3RydWN0b3IpO1xuQkRPTW9kZWwuaXNCRE9Nb2RlbCA9IHRydWU7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG5dLCBCRE9Nb2RlbC5wcm90b3R5cGUsIFwiaXNCRE9Nb2RlbFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBCRE9Nb2RlbC5wcm90b3R5cGUsIFwiY29sbGVjdGlvbk5hbWVcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgQkRPTW9kZWwucHJvdG90eXBlLCBcImRhdGFiYXNlTmFtZVwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKChfdHlwZSkgPT4gdHlwZV9ncmFwaHFsXzEuSUQpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIEJET01vZGVsLnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgQkRPTW9kZWwucHJvdG90eXBlLCBcImNsYXNzTmFtZVwiLCB2b2lkIDApO1xuQkRPTW9kZWwgPSBCRE9Nb2RlbF8xID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKHsgaXNBYnN0cmFjdDogdHJ1ZSB9KSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbl0sIEJET01vZGVsKTtcbmV4cG9ydHMuQkRPTW9kZWwgPSBCRE9Nb2RlbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBUVzlrWld3dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyeHBZaTlDUkU5TmIyUmxiQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUVzSzBKQlFXdERPMEZCUTJ4RExDdERRVUZyUXp0QlFVTnNReXc0UTBGQmQwUTdRVUZEZUVRc2MwUkJRVFpGTzBGQlF6ZEZMR3RFUVVGclJEdEJRVVZzUkN3d1JFRkJkVVE3UVVGWGRrUXNTVUZCYzBJc1VVRkJVU3huUWtGQk9VSXNUVUZCYzBJc1VVRkJVVHRKUVN0SE1VSTdVVUZvUkRSQ0xHVkJRVlVzUjBGQldTeEpRVUZKTEVOQlFVTTdVVUZSTTBJc2JVSkJRV01zUjBGQldTeFZRVUZSTEVOQlFVTXNZMEZCWXl4RFFVRkRPMUZCVVd4RUxHbENRVUZaTEVkQlFWa3NWVUZCVVN4RFFVRkRMRmxCUVZrc1EwRkJRenRSUVZONlF5eFBRVUZGTEVkQlFWY3NWMEZCVnl4VFFVRkpMRVZCUVVVc1JVRkJSU3hEUVVGRE8xRkJWWEpETEdOQlFWTXNSMEZCVnl4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNN1VVRmpNVVlzTmtKQlFXRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETDBNc1EwRkJRenRKUVhaSFJDeEpRVUZqTEZGQlFWRTdVVUZEYkVJc1RVRkJUU3hSUVVGUkxFZEJRVWNzYzBKQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGREwwTXNUMEZCVHl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVNelF5eERRVUZETzBsQk9FWk5MRTFCUVUwc1EwRkJReXhsUVVGbExFTkJRWGRETEVkQlFWazdVVUZETjBVc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8wbEJRM1pETEVOQlFVTTdTVUZaVFN4clFrRkJhMEk3VVVGRGNrSXNUMEZCVHl4alFVRmpMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNCRUxFTkJRVU03U1VGWFRTeEpRVUZKTEVOQlFUSkZMRkZCUVZjc1JVRkJSU3hKUVVGUk8xRkJRM1pITEU5QlFVOHNTVUZCU1N4cFFrRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRTJSQ3hEUVVGRE8wbEJRM3BITEVOQlFVTTdTVUZSVFN4UlFVRlJPMUZCUTFnc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMUZCUXpOQ0xFOUJRVThzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOb1F5eERRVUZETzBsQlZVMHNUVUZCVFR0UlFVTlVMRTFCUVUwc1NVRkJTU3hIUVVGdFFpeEZRVUZGTEVOQlFVTTdVVUZEYUVNc1MwRkJTeXhOUVVGTkxFZEJRVWNzU1VGQlNTeEpRVUZKTEVWQlFVVTdXVUZEY0VJc1NVRkJTU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NVMEZCVXl4RlFVRkZPMmRDUVVONlFpeE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlF6RkNMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTTdZVUZEZGtJN1UwRkRTanRSUVVORUxFOUJRVThzU1VGQlNTeERRVUZETzBsQlEyaENMRU5CUVVNN1NVRTBRazBzUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRXJRanRSUVVOc1JDeE5RVUZOTEdOQlFXTXNSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4RFFVRkRPMUZCUTNSRUxFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTndRaXhKUVVGSkxHTkJRV01zU1VGQlNTeGpRVUZqTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJRenRaUVVGRkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZETVVVc1QwRkJUeXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUTNCRExFTkJRVU03U1VGVFRTeExRVUZMTEVOQlFVTXNhVUpCUVdsQ08xRkJRekZDTEUxQlFVMHNZMEZCWXl4SFFVRkhMRTFCUVUwc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RlFVRkZMRU5CUVVNN1VVRkRkRVFzVDBGQlR5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVFVXNRMEZCUXp0RFFWZEtMRU5CUVVFN1FVRjJUVEJDTEc5Q1FVRlhMRWRCUVZFc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eFZRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1FVRm5ReTlFTEcxQ1FVRlZMRWRCUVZrc1NVRkJTU3hEUVVGRE8wRkJVWFJETzBsQlFWZ3NjVUpCUVZFc1JVRkJSVHM3TkVOQlFUUkRPMEZCVVRORE8wbEJRVmdzY1VKQlFWRXNSVUZCUlRzN1owUkJRVzFGTzBGQlVXeEZPMGxCUVZnc2NVSkJRVkVzUlVGQlJUczdPRU5CUVN0RU8wRkJVMmhFTzBsQlFYcENMSE5DUVVGVExFTkJRVU1zUTBGQlF5eExRVUZMTEVWQlFVVXNSVUZCUlN4RFFVRkRMR2xDUVVGRkxFTkJRVU03TzI5RFFVRjVRenRCUVZWeVJEdEpRVUZhTEhOQ1FVRlRMRVZCUVVVN096SkRRVUZyUmp0QlFXeEhOVVVzVVVGQlVUdEpRVVEzUWl3MFFrRkJaU3hEUVVGRExFVkJRVVVzVlVGQlZTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkRPenRIUVVOb1FpeFJRVUZSTEVOQk9FNDNRanRCUVRsT2NVSXNORUpCUVZFaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBlbnZpcm9ubWVudF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZW52aXJvbm1lbnRcIik7XG5jbGFzcyBCRE9Sb3V0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucm91dGVyTmFtZVNwYWNlID0gYC8ke3RoaXMuY29uc3RydWN0b3IubmFtZS50b0xvd2VyQ2FzZSgpfWA7XG4gICAgICAgIHRoaXMucm91dGVzID0gWycvJ107XG4gICAgICAgIHRoaXMudGVtcGxhdGVTdHJpbmcgPSAnPGRpdj48L2Rpdj4nO1xuICAgICAgICB0aGlzLmpzb25Pbmx5ID0gZmFsc2U7XG4gICAgfVxuICAgIHJlbmRlclRlbXBsYXRlKHRlbXBsYXRlUGFyYW1zKSB7XG4gICAgICAgIGxldCBzdHJpbmdUb1BhcnNlID0gbnVsbDtcbiAgICAgICAgaWYgKHV0aWxfMS5pc1N0cmluZyh0aGlzLnRlbXBsYXRlU3RyaW5nKSkge1xuICAgICAgICAgICAgc3RyaW5nVG9QYXJzZSA9IGVudmlyb25tZW50XzEudGVtcGxhdGVFbnZpcm9ubWVudC5yZW5kZXJTdHJpbmcodGhpcy50ZW1wbGF0ZVN0cmluZywgdGVtcGxhdGVQYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1dGlsXzEuaXNPYmplY3QodGhpcy50ZW1wbGF0ZVN0cmluZykpIHtcbiAgICAgICAgICAgIHN0cmluZ1RvUGFyc2UgPSB0aGlzLnRlbXBsYXRlU3RyaW5nLnJlbmRlcih0ZW1wbGF0ZVBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cmluZ1RvUGFyc2U7XG4gICAgfVxuICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zKF9yZXF1ZXN0T3JQYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn1cbmV4cG9ydHMuQkRPUm91dGUgPSBCRE9Sb3V0ZTtcbkJET1JvdXRlLmF0dGFjaFRvU2VydmVycyA9IFsnKiddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFVtOTFkR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJ4cFlpOUNSRTlTYjNWMFpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVWQkxEQkRRVUZ4UkR0QlFVTnlSQ3gzUkVGQk5rUTdRVUZUTjBRc1RVRkJjMElzVVVGQlVUdEpRVUU1UWp0UlFYRkNWeXh2UWtGQlpTeEhRVUZYTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVWQlFVVXNRMEZCUXp0UlFWRndSU3hYUVVGTkxFZEJRV0VzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFXdENkRUlzYlVKQlFXTXNSMEZCYzBJc1lVRkJZU3hEUVVGRE8xRkJWV3hFTEdGQlFWRXNSMEZCV1N4TFFVRkxMRU5CUVVNN1NVRnRSSGhETEVOQlFVTTdTVUY0UTJFc1kwRkJZeXhEUVVGRExHTkJRVGhDTzFGQlEyNUVMRWxCUVVrc1lVRkJZU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU42UWl4SlFVRkpMR1ZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVWQlFVVTdXVUZETDBJc1lVRkJZU3hIUVVGSExHbERRVUZ0UWl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eEZRVUZGTEdOQlFXTXNRMEZCUXl4RFFVRkRPMU5CUTNwR08xRkJRMFFzU1VGQlNTeGxRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhGUVVGRk8xbEJReTlDTEdGQlFXRXNSMEZCWXl4SlFVRkpMRU5CUVVNc1kwRkJaU3hEUVVGRExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXp0VFFVTXhSVHRSUVVORUxFOUJRVThzWVVGQllTeERRVUZETzBsQlEzcENMRU5CUVVNN1NVRlhVeXhMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEdkQ1FVRXdRenRSUVVOeVJTeFBRVUZQTEVWQlFVVXNRMEZCUXp0SlFVTmtMRU5CUVVNN08wRkJNVVpNTERSQ1FUUkhRenRCUVdoSGFVSXNkMEpCUVdVc1IwRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQmluZGluZ18xID0gcmVxdWlyZShcIn5iZG8vbGliL0JpbmRpbmdcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuZnVuY3Rpb24gYmFzZUNvbnN0cnVjdG9yRmFjdG9yeShjdG9yLCBjb25zdFBhcmFtc0luZGV4KSB7XG4gICAgY2xhc3MgQmFzZUNvbnN0cnVjdG9yIGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKC4uLnBhcmFtcykge1xuICAgICAgICAgICAgc3VwZXIoLi4ucGFyYW1zKTtcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbk5hbWUgPSBCYXNlQ29uc3RydWN0b3IuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgICAgICB0aGlzLmRhdGFiYXNlTmFtZSA9IEJhc2VDb25zdHJ1Y3Rvci5kYXRhYmFzZU5hbWU7XG4gICAgICAgICAgICBjb25zdCBjb25zdFBhcmFtcyA9IHBhcmFtc1tjb25zdFBhcmFtc0luZGV4XTtcbiAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcywgXCJub3JtYWxGdW5jdGlvbmFsaXR5XCIsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFCYXNlQ29uc3RydWN0b3IuaXNQcm9jZWR1cmFsQ29tcG9uZW50Q29uc3RydWN0aW9uKVxuICAgICAgICAgICAgICAgIHRoaXMuaW52b2tlTGlmZUN5Y2xlKGNvbnN0UGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICBpbnZva2VMaWZlQ3ljbGUoY29uc3RQYXJhbXMpIHtcbiAgICAgICAgICAgIGlmICghKGNvbnN0UGFyYW1zIGluc3RhbmNlb2YgT2JqZWN0KSlcbiAgICAgICAgICAgICAgICBjb25zdFBhcmFtcyA9IHt9O1xuICAgICAgICAgICAgbGV0IGRlZmF1bHRTZXR0aW5ncyA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcywgXCJkZWZhdWx0U2V0dGluZ3NcIikgfHwge307XG4gICAgICAgICAgICBkZWZhdWx0U2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRTZXR0aW5ncywgY29uc3RQYXJhbXMpO1xuICAgICAgICAgICAgaWYgKHV0aWxfMS5pc0Z1bmN0aW9uKHRoaXMuZ2V0TmFtZXNwYWNlZFN0b3JhZ2UpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBjb25zdFBhcmFtcy5pZCB8fCBkZWZhdWx0U2V0dGluZ3MuaWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGVkU2V0dGluZ3MgPSB0aGlzLmdldE5hbWVzcGFjZWRTdG9yYWdlKFwiKlwiLCBcImlkXCIsIGlkKSB8fCB7fTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjYWNoZWRTZXR0aW5ncykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FjaGVkU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRlZmF1bHRTZXR0aW5nc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBCaW5kaW5nXzEuQmluZGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0VmFsdWUoY2FjaGVkU2V0dGluZ3Nba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFNldHRpbmdzW2tleV0gPSBjYWNoZWRTZXR0aW5nc1trZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZWZhdWx0U2V0dGluZ3MpO1xuICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YSh0aGlzLCBcImNvbnN0cnVjdGlvbkNvbXBsZXRlXCIsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHV0aWxfMS5pc0Z1bmN0aW9uKHRoaXMuY29uc3RydWN0ZWRDYWxsYmFjaykpXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3RlZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQmFzZUNvbnN0cnVjdG9yLmNsYXNzTmFtZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihCYXNlQ29uc3RydWN0b3IpLm5hbWU7XG4gICAgQmFzZUNvbnN0cnVjdG9yLmdyYXBoUUxUeXBlID0gY3RvcjtcbiAgICBCYXNlQ29uc3RydWN0b3IuY29sbGVjdGlvbk5hbWUgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKEJhc2VDb25zdHJ1Y3RvciwgXCJjb2xsZWN0aW9uTmFtZVwiKTtcbiAgICBCYXNlQ29uc3RydWN0b3IuZGF0YWJhc2VOYW1lID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShCYXNlQ29uc3RydWN0b3IsIFwiZGF0YWJhc2VOYW1lXCIpO1xuICAgIEJhc2VDb25zdHJ1Y3Rvci5pc1Byb2NlZHVyYWxDb21wb25lbnRDb25zdHJ1Y3Rpb24gPSBmYWxzZTtcbiAgICByZXR1cm4gQmFzZUNvbnN0cnVjdG9yO1xufVxuZXhwb3J0cy5iYXNlQ29uc3RydWN0b3JGYWN0b3J5ID0gYmFzZUNvbnN0cnVjdG9yRmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFtRnpaVU52Ym5OMGNuVmpkRzl5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5c2FXSXZRbUZ6WlVOdmJuTjBjblZqZEc5eUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc09FTkJRVEpETzBGQlF6TkRMR3RFUVVGclJUdEJRVU5zUlN3d1EwRkJOa003UVVFd1F6ZERMRk5CUVdkQ0xITkNRVUZ6UWl4RFFVRkRMRWxCUVZNc1JVRkJSU3huUWtGQmQwSTdTVUZSZEVVc1RVRkJUU3hsUVVGblFpeFRRVUZSTEVsQlFVazdVVUZuUlRsQ0xGbEJRVmtzUjBGQlJ5eE5RVUZoTzFsQlEzaENMRXRCUVVzc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETzFsQldFd3NiVUpCUVdNc1IwRkJXU3hsUVVGbExFTkJRVU1zWTBGQll5eERRVUZETzFsQlVYcEVMR2xDUVVGWkxFZEJRVmtzWlVGQlpTeERRVUZETEZsQlFWa3NRMEZCUXp0WlFVbHFSU3hOUVVGTkxGZEJRVmNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF6dFpRVU0zUXl4NVFrRkJZeXhEUVVGRExFbEJRVWtzUlVGQlJTeHhRa0ZCY1VJc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5zUkN4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExHbERRVUZwUXp0blFrRkJSU3hKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUXpsR0xFTkJRVU03VVVGUlRTeGxRVUZsTEVOQlFVTXNWMEZCZDBNN1dVRkRNMFFzU1VGQlNTeERRVUZETEVOQlFVTXNWMEZCVnl4WlFVRlpMRTFCUVUwc1EwRkJRenRuUWtGQlJTeFhRVUZYTEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUTNaRUxFbEJRVWtzWlVGQlpTeEhRVUZwUXl4elFrRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeHBRa0ZCYVVJc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dFpRVU12Uml4bFFVRmxMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eGxRVUZsTEVWQlFVVXNWMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkRPVVFzU1VGQlNTeHBRa0ZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4RlFVRkZPMmRDUVVOMlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4WFFVRlhMRU5CUVVNc1JVRkJSU3hKUVVGSkxHVkJRV1VzUTBGQlF5eEZRVUZGTEVOQlFVTTdaMEpCUTJoRUxFMUJRVTBzWTBGQll5eEhRVUZITEVsQlFVa3NRMEZCUXl4dlFrRkJiMElzUTBGQlF5eEhRVUZITEVWQlFVVXNTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dG5Ra0ZEZEVVc1MwRkJTeXhOUVVGTkxFZEJRVWNzU1VGQlNTeGpRVUZqTEVWQlFVVTdiMEpCUXpsQ0xFbEJRVWtzWTBGQll5eERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHQzUWtGRGNFTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1pVRkJaU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzNkQ1FVTnlReXhKUVVGSkxFOUJRVThzV1VGQldTeHBRa0ZCVHl4RlFVRkZPelJDUVVNMVFpeFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzNsQ1FVTjZRenM3TkVKQlFVMHNaVUZCWlN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0eFFrRkRja1E3YVVKQlEwbzdZVUZEU2p0WlFVTkVMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEdWQlFXVXNRMEZCUXl4RFFVRkRPMWxCUTNKRExIbENRVUZqTEVOQlFVTXNTVUZCU1N4RlFVRkZMSE5DUVVGelFpeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTI1RUxFbEJRVWtzYVVKQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTTdaMEpCUVZFc1NVRkJTeXhEUVVGRExHMUNRVUZ0UWl4RlFVRkZMRU5CUVVNN1VVRkRhRVlzUTBGQlF6czdTVUY0Um5OQ0xIbENRVUZUTEVkQlFVY3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTTdTVUZWZUVRc01rSkJRVmNzUjBGQlVTeEpRVUZKTEVOQlFVTTdTVUZUZUVJc09FSkJRV01zUjBGQldTeHpRa0ZCVnl4RFFVRkRMR1ZCUVdVc1JVRkJSU3huUWtGQlowSXNRMEZCUXl4RFFVRkRPMGxCVTNwRkxEUkNRVUZaTEVkQlFWa3NjMEpCUVZjc1EwRkJReXhsUVVGbExFVkJRVVVzWTBGQll5eERRVUZETEVOQlFVTTdTVUZWT1VVc2FVUkJRV2xETEVkQlFWa3NTMEZCU3l4RFFVRkRPMGxCYjBSeVJTeFBRVUZQTEdWQlFXVXNRMEZCUXp0QlFVTXpRaXhEUVVGRE8wRkJNMGRFTEhkRVFUSkhReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgRmllbGRfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9GaWVsZFwiKTtcbmNvbnN0IGZyYW1ld29ya18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZnJhbWV3b3JrXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgaW5pQmluZE5hbWUgPSBcImluaXRpYXRvckJpbmRpbmdcIjtcbmNvbnN0IGJpbmROYW1lID0gXCJiaW5kaW5nc1wiO1xuY2xhc3MgQmluZGluZyB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSwgbW9kZSA9IFwiUmVhZFdyaXRlXCIpIHtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdG9yID0gdGhpcy5nZXRPcmlnaW5hbFByb3BlcnR5RGVzY3JpcHRvcih0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSk7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgfHwgdGhpcy5vYmplY3RbdGhpcy5wcm9wZXJ0eV07XG4gICAgfVxuICAgIGluc3RhbGwoaW5pdGlhdG9yLCBwcm9wZXJ0eSkge1xuICAgICAgICB0aGlzLmluaXRpYXRvciA9IGluaXRpYXRvcjtcbiAgICAgICAgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgICAgICB0aGlzLmluaXRpYXRvckRlc2NyaXB0b3IgPSB0aGlzLmdldE9yaWdpbmFsUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5KTtcbiAgICAgICAgaWYgKCFSZWZsZWN0Lmhhc01ldGFkYXRhKGluaUJpbmROYW1lLCB0aGlzLmluaXRpYXRvcikpXG4gICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCBpbmlCaW5kTmFtZSwgbmV3IE1hcCgpKTtcbiAgICAgICAgaWYgKCFSZWZsZWN0Lmhhc01ldGFkYXRhKGJpbmROYW1lLCB0aGlzLm9iamVjdCkpXG4gICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMub2JqZWN0LCBiaW5kTmFtZSwgbmV3IE1hcCgpKTtcbiAgICAgICAgY29uc3QgaW5pdGlhdG9yTURhdGEgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCBpbmlCaW5kTmFtZSkgfHwgbmV3IE1hcCgpO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JCaW5kaW5nID0gaW5pdGlhdG9yTURhdGEuZ2V0KHRoaXMuaW5pdGlhdG9yUHJvcGVydHkpO1xuICAgICAgICBpZiAoaW5pdGlhdG9yQmluZGluZylcbiAgICAgICAgICAgIGluaXRpYXRvckJpbmRpbmcucmVtb3ZlKCk7XG4gICAgICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLm9iamVjdCwgYmluZE5hbWUpIHx8IG5ldyBNYXAoKTtcbiAgICAgICAgaWYgKCFtRGF0YS5oYXModGhpcy5wcm9wZXJ0eSkpXG4gICAgICAgICAgICBtRGF0YS5zZXQodGhpcy5wcm9wZXJ0eSwgW10pO1xuICAgICAgICBtRGF0YS5nZXQodGhpcy5wcm9wZXJ0eSkucHVzaCh0aGlzKTtcbiAgICAgICAgaW5pdGlhdG9yTURhdGEuc2V0KHRoaXMuaW5pdGlhdG9yUHJvcGVydHksIHRoaXMpO1xuICAgICAgICBjb25zdCBmaWVsZE1EYXRhTmFtZSA9IGBmaWVsZDoke3RoaXMucHJvcGVydHl9YDtcbiAgICAgICAgY29uc3Qgb2JqZWN0RmllbGQgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JGaWVsZCA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLmluaXRpYXRvciwgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSk7XG4gICAgICAgIGxldCBmaWVsZCA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLm9iamVjdCwgZmllbGRNRGF0YU5hbWUpO1xuICAgICAgICBpZiAoIWZpZWxkKVxuICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhKHRoaXMub2JqZWN0LCBmaWVsZE1EYXRhTmFtZSwgbmV3IEZpZWxkXzEuRmllbGQodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpKTtcbiAgICAgICAgZmllbGQgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIGZpZWxkTURhdGFOYW1lKTtcbiAgICAgICAgZmllbGQuYWRkRmllbGQob2JqZWN0RmllbGQpO1xuICAgICAgICBmaWVsZC5hZGRGaWVsZChpbml0aWF0b3JGaWVsZCk7XG4gICAgICAgIHRoaXMucmVwbGFjZURlc2NyaXB0b3IoKTtcbiAgICAgICAgUmVmbGVjdC5zZXQodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHksIHRoaXMudmFsdWVPZigpKTtcbiAgICB9XG4gICAgcmVtb3ZlKCkge1xuICAgICAgICBjb25zdCBvYmplY3RWYWx1ZSA9IHRoaXMub2JqZWN0W3RoaXMucHJvcGVydHldO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JWYWx1ZSA9IHRoaXMuaW5pdGlhdG9yW3RoaXMuaW5pdGlhdG9yUHJvcGVydHldO1xuICAgICAgICBjb25zdCBvYmplY3RNRGF0YSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5vYmplY3QsIGJpbmROYW1lKTtcbiAgICAgICAgY29uc3Qgb2JqZWN0QmluZGluZ3MgPSBvYmplY3RNRGF0YSA/IG9iamVjdE1EYXRhLmdldCh0aGlzLnByb3BlcnR5KSA6IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgaW5pdGlhdG9yTURhdGEgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCBpbmlCaW5kTmFtZSk7XG4gICAgICAgIGNvbnN0IGluaXRpYXRvckJpbmRpbmcgPSBpbml0aWF0b3JNRGF0YSA/IGluaXRpYXRvck1EYXRhLmdldCh0aGlzLmluaXRpYXRvclByb3BlcnR5LnRvU3RyaW5nKCkpIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBmaWVsZE1EYXRhTmFtZSA9IGBmaWVsZDoke3RoaXMucHJvcGVydHl9YDtcbiAgICAgICAgY29uc3QgZmllbGQgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIGZpZWxkTURhdGFOYW1lKTtcbiAgICAgICAgaWYgKGluaXRpYXRvckJpbmRpbmcpIHtcbiAgICAgICAgICAgIGlmIChpbml0aWF0b3JNRGF0YSlcbiAgICAgICAgICAgICAgICBpbml0aWF0b3JNRGF0YS5kZWxldGUodGhpcy5pbml0aWF0b3JQcm9wZXJ0eS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZURlc2NyaXB0b3IodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHksIGluaXRpYXRvclZhbHVlLCB0aGlzLmluaXRpYXRvckRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgZmllbGQucmVtb3ZlRmllbGQobWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iamVjdEJpbmRpbmdzKSB7XG4gICAgICAgICAgICB1dGlsXzEucmVtb3ZlRWxlbWVudEZyb21BcnJheShvYmplY3RCaW5kaW5ncywgdGhpcyk7XG4gICAgICAgICAgICBmaWVsZC5yZW1vdmVGaWVsZChtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpKTtcbiAgICAgICAgICAgIGlmICghb2JqZWN0QmluZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdE1EYXRhKVxuICAgICAgICAgICAgICAgICAgICBvYmplY3RNRGF0YS5kZWxldGUodGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlRGVzY3JpcHRvcih0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSwgb2JqZWN0VmFsdWUsIHRoaXMuZGVzY3JpcHRvcik7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhKHRoaXMub2JqZWN0LCBmaWVsZE1EYXRhTmFtZSwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVwbGFjZURlc2NyaXB0b3IoKSB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBiaW5kaW5nR2V0KCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGF0Lm1vZGUgPT09IFwiV3JpdGVPbmx5XCIgJiYgdGhpcyA9PT0gdGhhdC5pbml0aWF0b3IpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyYW1ld29ya18xLmdldHRlcih0aGF0Lm9iamVjdCwgdGhhdC5wcm9wZXJ0eSwgXCJmaWVsZFwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIGJpbmRpbmdTZXQobmV3VmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoYXQubW9kZSA9PT0gXCJSZWFkT25seVwiICYmIHRoaXMgPT09IHRoYXQuaW5pdGlhdG9yKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgZnJhbWV3b3JrXzEuc2V0dGVyKHRoYXQub2JqZWN0LCB0aGF0LnByb3BlcnR5LCBuZXdWYWwsIFwiZmllbGRcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYmluZGluZ0Rlc2MgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHkpO1xuICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5LCBiaW5kaW5nRGVzYyk7XG4gICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcy5vYmplY3QsIFwiYmluZGluZ0Rlc2NyaXB0b3JcIiwgYmluZGluZ0Rlc2MpO1xuICAgIH1cbiAgICByZXN0b3JlRGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5LCB2YWx1ZSwgZGVzY3JpcHRvcikge1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KG9iamVjdCwgcHJvcGVydHkpO1xuICAgICAgICBpZiAoZGVzY3JpcHRvcikge1xuICAgICAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmluaXRpYXRvciwgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH1cbiAgICAgICAgb2JqZWN0W3Byb3BlcnR5LnRvU3RyaW5nKCldID0gdmFsdWU7XG4gICAgfVxuICAgIGdldE9yaWdpbmFsUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwga2V5KSB7XG4gICAgICAgIGxldCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBrZXkpO1xuICAgICAgICBsZXQgbURhdGFOYW1lID0gYmluZE5hbWU7XG4gICAgICAgIGxldCBwcm90b3R5cGUgPSBvYmplY3Q7XG4gICAgICAgIGlmIChvYmplY3QgPT09IHRoaXMuaW5pdGlhdG9yKVxuICAgICAgICAgICAgbURhdGFOYW1lID0gaW5pQmluZE5hbWU7XG4gICAgICAgIHdoaWxlICghZGVzY3JpcHRvcikge1xuICAgICAgICAgICAgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSk7XG4gICAgICAgICAgICBpZiAoIXByb3RvdHlwZSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGlmIChwcm90b3R5cGUuY29uc3RydWN0b3IubmFtZSA9PT0gXCJCYXNlQ29uc3RydWN0b3JcIilcbiAgICAgICAgICAgICAgICBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKTtcbiAgICAgICAgICAgIGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlYXJjaERlc2NyaXB0b3JJbkJpbmRpbmdzID0gZmFsc2U7XG4gICAgICAgIGlmIChkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvci5zZXQgJiYgZGVzY3JpcHRvci5zZXQubmFtZSA9PT0gXCJiaW5kaW5nU2V0XCIpXG4gICAgICAgICAgICAgICAgc2VhcmNoRGVzY3JpcHRvckluQmluZGluZ3MgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3IuZ2V0ICYmIGRlc2NyaXB0b3IuZ2V0Lm5hbWUgPT09IFwiYmluZGluZ0dldFwiKVxuICAgICAgICAgICAgICAgIHNlYXJjaERlc2NyaXB0b3JJbkJpbmRpbmdzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VhcmNoRGVzY3JpcHRvckluQmluZGluZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShvYmplY3QsIG1EYXRhTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBiaW5kaW5ncyA9IG1EYXRhID8gbURhdGEuZ2V0KGtleS50b1N0cmluZygpKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChiaW5kaW5ncykge1xuICAgICAgICAgICAgICAgIGlmIChiaW5kaW5ncyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IgPSBiaW5kaW5nc1swXS5kZXNjcmlwdG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IgPSBiaW5kaW5ncy5pbml0aWF0b3JEZXNjcmlwdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICAgIH1cbn1cbmV4cG9ydHMuQmluZGluZyA9IEJpbmRpbmc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRbWx1WkdsdVp5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiR2xpTDBKcGJtUnBibWN1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3d3UTBGQmVVUTdRVUZGZWtRc01FTkJRWFZETzBGQlEzWkRMRzlFUVVGelJEdEJRVU4wUkN4clJFRkJLMGM3UVVGSkwwY3NUVUZCVFN4WFFVRlhMRWRCUVVjc2EwSkJRV3RDTEVOQlFVTTdRVUZEZGtNc1RVRkJUU3hSUVVGUkxFZEJRVWNzVlVGQlZTeERRVUZETzBGQmMwSTFRaXhOUVVGaExFOUJRVTg3U1VFd1JXaENMRmxCUVZrc1RVRkJVeXhGUVVGRkxGRkJRVmNzUlVGQlJTeFBRVUZ2UWl4WFFVRlhPMUZCUXk5RUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUTNKQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTJwQ0xFbEJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRFpDUVVFMlFpeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzBsQlEzSkdMRU5CUVVNN1NVRkxUU3hSUVVGUkxFTkJRVU1zUzBGQlZ6dFJRVU4yUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dEpRVU4yUWl4RFFVRkRPMGxCVVUwc1QwRkJUenRSUVVOV0xFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0SlFVTndSQ3hEUVVGRE8wbEJVMDBzVDBGQlR5eERRVUZETEZOQlFWa3NSVUZCUlN4UlFVRlhPMUZCUTNCRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUXpOQ0xFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1IwRkJSeXhSUVVGUkxFTkJRVU03VVVGRGJFTXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEhRVUZITEVsQlFVa3NRMEZCUXl3MlFrRkJOa0lzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMUZCUjNSSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETzFsQlFVVXNlVUpCUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEZkQlFWY3NSVUZCUlN4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRE9VY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1dVRkJSU3g1UWtGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVZHNSeXhOUVVGTkxHTkJRV01zUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzVjBGQlZ5eERRVUZETEVsQlFVa3NTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVNM1JTeE5RVUZOTEdkQ1FVRm5RaXhIUVVGSExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVOQlFVTTdVVUZEY0VVc1NVRkJTU3huUWtGQlowSTdXVUZCUlN4blFrRkJaMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0UlFVZG9SQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzVVVGQlVTeERRVUZETEVsQlFVa3NTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVNNVJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETzFsQlFVVXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpWRUxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTndReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVZHFSQ3hOUVVGTkxHTkJRV01zUjBGQlJ5eFRRVUZUTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVOb1JDeE5RVUZOTEZkQlFWY3NSMEZCUnl3NFFrRkJiVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVU53UlN4TlFVRk5MR05CUVdNc1IwRkJSeXc0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8xRkJRMjVHTEVsQlFVa3NTMEZCU3l4SFFVRm5RaXc0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxHTkJRV01zUTBGQlF5eERRVUZETzFGQlF6RkZMRWxCUVVrc1EwRkJReXhMUVVGTE8xbEJRVVVzYVVOQlFYTkNMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeGpRVUZqTEVWQlFVVXNTVUZCU1N4aFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVkMlJ5eExRVUZMTEVkQlFVY3NPRUpCUVcxQ0xFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4alFVRmpMRU5CUVdkQ0xFTkJRVU03VVVGRGVFVXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFJRVU0xUWl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETzFGQlJ5OUNMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4RFFVRkRPMUZCUTNwQ0xFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEZUVVc1EwRkJRenRKUVU5TkxFMUJRVTA3VVVGRlZDeE5RVUZOTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTXZReXhOUVVGTkxHTkJRV01zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMUZCUnpsRUxFMUJRVTBzVjBGQlZ5eEhRVUZITEhOQ1FVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTjJSQ3hOUVVGTkxHTkJRV01zUjBGQlJ5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU03VVVGRGFFWXNUVUZCVFN4alFVRmpMRWRCUVVjc2MwSkJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRmRCUVZjc1EwRkJReXhEUVVGRE8xRkJRMmhGTEUxQlFVMHNaMEpCUVdkQ0xFZEJRVWNzWTBGQll5eERRVUZETEVOQlFVTXNRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNN1VVRkZOVWNzVFVGQlRTeGpRVUZqTEVkQlFVY3NVMEZCVXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRGFFUXNUVUZCVFN4TFFVRkxMRWRCUVdkQ0xEaENRVUZ0UWl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzWTBGQll5eERRVUZETEVOQlFVTTdVVUZGTlVVc1NVRkJTU3huUWtGQlowSXNSVUZCUlR0WlFVTnNRaXhKUVVGSkxHTkJRV003WjBKQlFVVXNZMEZCWXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU0zUlN4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1kwRkJZeXhGUVVGRkxFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRE8xbEJRM3BITEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc09FSkJRVzFDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMnhHTzFGQlJVUXNTVUZCU1N4alFVRmpMRVZCUVVVN1dVRkRhRUlzTmtKQlFYTkNMRU5CUVVNc1kwRkJZeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFsQlF6ZERMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zT0VKQlFXMUNMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOdVJTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1JVRkJSVHRuUWtGRGVFSXNTVUZCU1N4WFFVRlhPMjlDUVVGRkxGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8yZENRVU51UkN4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZkQlFWY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03WjBKQlEycEdMR2xEUVVGelFpeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1kwRkJZeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzJGQlF6ZEVPMU5CUTBvN1NVRkRUQ3hEUVVGRE8wbEJVMDhzYVVKQlFXbENPMUZCUTNKQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTnNRaXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlEyNUVMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRk8xbEJReTlETEVkQlFVY3NSVUZCUlN4VFFVRlRMRlZCUVZVN1owSkJRM0JDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWxCUVVrc1MwRkJTeXhYUVVGWExFbEJRVWtzU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUXl4VFFVRlRPMjlDUVVGRkxFOUJRVThzVTBGQlV5eERRVUZETzJkQ1FVTXpSU3hQUVVGUExHdENRVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMWxCUTNaRUxFTkJRVU03V1VGRFJDeEhRVUZITEVWQlFVVXNVMEZCVXl4VlFVRlZMRU5CUVVNc1RVRkJhVVE3WjBKQlEzUkZMRWxCUVVrc1NVRkJTU3hEUVVGRExFbEJRVWtzUzBGQlN5eFZRVUZWTEVsQlFVa3NTVUZCU1N4TFFVRkxMRWxCUVVrc1EwRkJReXhUUVVGVE8yOUNRVUZGTEU5QlFVODdaMEpCUTJoRkxHdENRVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEUxQlFVMHNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRaUVVONFJDeERRVUZETzFsQlEwUXNXVUZCV1N4RlFVRkZMRWxCUVVrN1dVRkRiRUlzVlVGQlZTeEZRVUZGTEVsQlFVazdVMEZEYmtJc1EwRkJReXhEUVVGRE8xRkJRMGdzVFVGQlRTeFhRVUZYTEVkQlFVY3NUMEZCVHl4RFFVRkRMSGRDUVVGM1FpeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQmRVSXNRMEZCUXp0UlFVTjJSeXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNN1VVRkRMMFFzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hYUVVGWExFTkJRVU1zUTBGQlF6dFJRVU0xUlN4NVFrRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNiVUpCUVcxQ0xFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdTVUZEYkVVc1EwRkJRenRKUVZsUExHbENRVUZwUWl4RFFVRkRMRTFCUVhOQ0xFVkJRVVVzVVVGQmJVSXNSVUZCUlN4TFFVRlZMRVZCUVVVc1ZVRkJjVUk3VVVGRGNFY3NUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhOUVVGTkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdVVUZEZWtNc1NVRkJTU3hWUVVGVkxFVkJRVVU3V1VGRFdpeFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzFOQlF6bEZPMUZCUTBRc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVONFF5eERRVUZETzBsQlYwOHNOa0pCUVRaQ0xFTkJRVU1zVFVGQll5eEZRVUZGTEVkQlFXTTdVVUZEYUVVc1NVRkJTU3hWUVVGVkxFZEJRVzFETEU5QlFVOHNRMEZCUXl4M1FrRkJkMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRMMFlzU1VGQlNTeFRRVUZUTEVkQlFXOURMRkZCUVZFc1EwRkJRenRSUVVNeFJDeEpRVUZKTEZOQlFWTXNSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRka0lzU1VGQlNTeE5RVUZOTEV0QlFXRXNTVUZCU1N4RFFVRkRMRk5CUVZNN1dVRkJSU3hUUVVGVExFZEJRVWNzVjBGQlZ5eERRVUZETzFGQlF5OUVMRTlCUVU4c1EwRkJReXhWUVVGVkxFVkJRVVU3V1VGRGFFSXNVMEZCVXl4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdXVUZETjBNc1NVRkJTU3hEUVVGRExGTkJRVk03WjBKQlFVVXNUVUZCVFR0WlFVTjBRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4TFFVRkxMR2xDUVVGcFFqdG5Ra0ZCUlN4VFFVRlRMRWRCUVVjc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0WlFVTnVSeXhWUVVGVkxFZEJRVWNzVDBGQlR5eERRVUZETEhkQ1FVRjNRaXhEUVVGRExGTkJRVk1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0VFFVTnFSVHRSUVVORUxFbEJRVWtzTUVKQlFUQkNMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRM1pETEVsQlFVa3NWVUZCVlN4RlFVRkZPMWxCUTFvc1NVRkJTU3hWUVVGVkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hMUVVGTExGbEJRVms3WjBKQlFVVXNNRUpCUVRCQ0xFZEJRVWNzU1VGQlNTeERRVUZETzFsQlF6bEdMRWxCUVVrc1ZVRkJWU3hEUVVGRExFZEJRVWNzU1VGQlNTeFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1MwRkJTeXhaUVVGWk8yZENRVUZGTERCQ1FVRXdRaXhIUVVGSExFbEJRVWtzUTBGQlF6dFRRVU5xUnp0UlFVTkVMRWxCUVVrc01FSkJRVEJDTEVWQlFVVTdXVUZETlVJc1RVRkJUU3hMUVVGTExFZEJRVWNzYzBKQlFWY3NRMEZCVFN4TlFVRk5MRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03V1VGRGJFUXNUVUZCVFN4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkRMMFFzU1VGQlNTeFJRVUZSTEVWQlFVVTdaMEpCUTFZc1NVRkJTU3hSUVVGUkxGbEJRVmtzUzBGQlN5eEZRVUZGTzI5Q1FVTXpRaXhWUVVGVkxFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJRenRwUWtGRGRrTTdPMjlDUVVGTkxGVkJRVlVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU03WVVGRGNFUTdVMEZEU2p0UlFVTkVMRTlCUVU4c1ZVRkJWU3hEUVVGRE8wbEJRM1JDTEVOQlFVTTdRMEZEU2p0QlFYQlJSQ3d3UWtGdlVVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBWYWx1ZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuZXhwb3J0cy5WYWx1ZUVycm9yID0gVmFsdWVFcnJvcjtcbmNsYXNzIFR5cGVFcnJvciBleHRlbmRzIEVycm9yIHtcbn1cbmV4cG9ydHMuVHlwZUVycm9yID0gVHlwZUVycm9yO1xuY2xhc3MgQ29uZmlndXJhdGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuZXhwb3J0cy5Db25maWd1cmF0aW9uRXJyb3IgPSBDb25maWd1cmF0aW9uRXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSWEp5YjNKekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXNhV0l2UlhKeWIzSnpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlQwRXNUVUZCWVN4VlFVRlhMRk5CUVZFc1MwRkJTenREUVVGSk8wRkJRWHBETEdkRFFVRjVRenRCUVZONlF5eE5RVUZoTEZOQlFWVXNVMEZCVVN4TFFVRkxPME5CUVVrN1FVRkJlRU1zT0VKQlFYZERPMEZCVlhoRExFMUJRV0VzYTBKQlFXMUNMRk5CUVZFc1MwRkJTenREUVVGSk8wRkJRV3BFTEdkRVFVRnBSQ0o5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgV2F0Y2hlZF8xID0gcmVxdWlyZShcIn5iZG8vbGliL1dhdGNoZWRcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3Qgb25fY2hhbmdlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwib24tY2hhbmdlXCIpKTtcbmNsYXNzIEZpZWxkIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgICAgIHRoaXMuZmllbGRzID0gW107XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgfVxuICAgIGFkZEZpZWxkKGZpZWxkKSB7XG4gICAgICAgIGlmICh0aGlzLmZpZWxkcy5pbmNsdWRlcyhmaWVsZCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChmaWVsZC5vYmplY3QgJiYgZmllbGQub2JqZWN0LmlzQkRPTW9kZWwpXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5wcm94eWZ5VmFsdWUoZmllbGQudmFsdWVPZigpKTtcbiAgICAgICAgaWYgKGZpZWxkIGluc3RhbmNlb2YgV2F0Y2hlZF8xLldhdGNoZWQgJiYgZmllbGQuc3ViT2JqZWN0KVxuICAgICAgICAgICAgdGhpcy5yZWRlZmluZVZhbHVlKGZpZWxkLnN1Yk9iamVjdCk7XG4gICAgICAgIHRoaXMucmVkZWZpbmVWYWx1ZShmaWVsZCk7XG4gICAgICAgIHRoaXMuZmllbGRzLnB1c2goZmllbGQpO1xuICAgIH1cbiAgICByZW1vdmVGaWVsZChmaWVsZCkge1xuICAgICAgICBpZiAoIXRoaXMuZmllbGRzLmluY2x1ZGVzKGZpZWxkKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKGZpZWxkIGluc3RhbmNlb2YgV2F0Y2hlZF8xLldhdGNoZWQgJiYgZmllbGQuc3ViT2JqZWN0KVxuICAgICAgICAgICAgdGhpcy5yZXN0b3JlVmFsdWUoZmllbGQuc3ViT2JqZWN0KTtcbiAgICAgICAgdGhpcy5yZXN0b3JlVmFsdWUoZmllbGQpO1xuICAgICAgICB1dGlsXzEucmVtb3ZlRWxlbWVudEZyb21BcnJheSh0aGlzLmZpZWxkcywgZmllbGQpO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuZmllbGRzKVxuICAgICAgICAgICAgZmllbGQuc2V0VmFsdWUodmFsdWUpO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgcmVkZWZpbmVWYWx1ZShmaWVsZCkge1xuICAgICAgICBtZXRhZGF0YV8xLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEoZmllbGQsIFwidmFsdWVcIiwgZmllbGQudmFsdWVPZigpKTtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoZmllbGQsIFwidmFsdWVcIik7XG4gICAgICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoZmllbGQsIFwidmFsdWVcIiwge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGF0LnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdXRpbF8xLmdldFByb3h5VGFyZ2V0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aGF0VmFsdWUgPSB1dGlsXzEuZ2V0UHJveHlUYXJnZXQodGhhdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB0aGF0VmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGF0LnZhbHVlID0gdGhhdC5wcm94eWZ5VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlc3RvcmVWYWx1ZShmaWVsZCkge1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGZpZWxkLCBcInZhbHVlXCIpO1xuICAgICAgICBmaWVsZC5zZXRWYWx1ZSh1dGlsXzEuZ2V0UHJveHlUYXJnZXQodGhpcy52YWx1ZSkpO1xuICAgIH1cbiAgICBwcm94eWZ5VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgfHwgdXRpbF8xLmlzT2JqZWN0KHZhbHVlKSAmJiAhdmFsdWUuaXNCRE9Nb2RlbCkge1xuICAgICAgICAgICAgbGV0IGlzU2hhbGxvdyA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuZmllbGRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFmaWVsZC5pc1NoYWxsb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTaGFsbG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlID0gb25fY2hhbmdlXzEuZGVmYXVsdC50YXJnZXQodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIG9uX2NoYW5nZV8xLmRlZmF1bHQodmFsdWUsIChwYXRoLCBjaGFuZ2VkVmFsdWUsIHByZXZpb3VzVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRoU2l6ZSA9IHBhdGguc3BsaXQoXCIuXCIpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuZmllbGRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZmllbGQuaXNTaGFsbG93IHx8IGZpZWxkLmlzU2hhbGxvdyAmJiBwYXRoU2l6ZSA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5wcm94eUhhbmRsZXIocGF0aCwgY2hhbmdlZFZhbHVlLCBwcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHsgaXNTaGFsbG93IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSbWxsYkdRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyeHBZaTlHYVdWc1pDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGRlFTdzRRMEZCTWtNN1FVRkZNME1zTUVOQlFXMUdPMEZCUTI1R0xHdEVRVUUyUkR0QlFVTTNSQ3hyUlVGQmFVTTdRVUZwUW1wRExFMUJRV0VzUzBGQlN6dEpRVzlEWkN4WlFVRlpMRTFCUVZNc1JVRkJSU3hSUVVGWE8xRkJSakZDTEZkQlFVMHNSMEZCYVVNc1JVRkJSU3hEUVVGRE8xRkJSemxETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRM0pDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRE8wbEJRemRDTEVOQlFVTTdTVUZWVFN4UlFVRlJMRU5CUVVNc1MwRkJORUk3VVVGRGVFTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZCUlN4UFFVRlBPMUZCUlhoRExFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNTVUZCWlN4TFFVRkxMRU5CUVVNc1RVRkJUeXhEUVVGRExGVkJRVlU3V1VGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRla2NzU1VGQlNTeExRVUZMTEZsQlFWa3NhVUpCUVU4c1NVRkJTU3hMUVVGTExFTkJRVU1zVTBGQlV6dFpRVUZGTEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzFGQlEzSkdMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZETVVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkROVUlzUTBGQlF6dEpRVlZOTEZkQlFWY3NRMEZCUXl4TFFVRTBRanRSUVVNelF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETzFsQlFVVXNUMEZCVHp0UlFVTjZReXhKUVVGSkxFdEJRVXNzV1VGQldTeHBRa0ZCVHl4SlFVRkpMRXRCUVVzc1EwRkJReXhUUVVGVE8xbEJRVVVzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VVVGRGNFWXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU42UWl3MlFrRkJjMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJReTlETEVOQlFVTTdTVUZUVFN4UlFVRlJMRU5CUVVNc1MwRkJaME03VVVGRE5VTXNTMEZCU3l4TlFVRk5MRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRUdFpRVUZGTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRE0wUXNRMEZCUXp0SlFWRk5MRTlCUVU4N1VVRkRWaXhQUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdTVUZEZEVJc1EwRkJRenRKUVZkUExHRkJRV0VzUTBGQlF5eExRVUUwUWp0UlFVTTVReXhwUTBGQmMwSXNRMEZCVXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhGUVVGRkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTJoRkxFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTnNRaXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEV0QlFVc3NSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVOMlF5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFVkJRVVU3V1VGRGJrTXNSMEZCUnp0blFrRkRReXhQUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZEZEVJc1EwRkJRenRaUVVORUxFZEJRVWNzUTBGQlF5eExRVUZYTzJkQ1FVTllMRXRCUVVzc1IwRkJSeXh4UWtGQll5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMmRDUVVNNVFpeE5RVUZOTEZOQlFWTXNSMEZCUnl4eFFrRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0blFrRkROME1zU1VGQlNTeExRVUZMTEV0QlFVc3NVMEZCVXp0dlFrRkJSU3hQUVVGUE8yZENRVU5vUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUTBGQlF6dFpRVU5FTEZsQlFWa3NSVUZCUlN4SlFVRkpPMWxCUTJ4Q0xGVkJRVlVzUlVGQlJTeEpRVUZKTzFOQlEyNUNMRU5CUVVNc1EwRkJRenRKUVVOUUxFTkJRVU03U1VGVFR5eFpRVUZaTEVOQlFVTXNTMEZCTkVJN1VVRkROME1zVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGRrTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXh4UWtGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJReTlETEVOQlFVTTdTVUZWVHl4WlFVRlpMRU5CUVVNc1MwRkJXVHRSUVVNM1FpeEpRVUZKTEV0QlFVc3NXVUZCV1N4TFFVRkxMRWxCUVVrc1pVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVOHNTMEZCVFN4RFFVRkRMRlZCUVZVc1JVRkJSVHRaUVVOMlJTeEpRVUZKTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNN1dVRkRja0lzUzBGQlN5eE5RVUZOTEV0QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8yZENRVU0zUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUlVGQlJUdHZRa0ZEYkVJc1UwRkJVeXhIUVVGSExFdEJRVXNzUTBGQlF6dHZRa0ZEYkVJc1RVRkJUVHRwUWtGRFZEdGhRVU5LTzFsQlEwUXNTMEZCU3l4SFFVRkhMRzFDUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUXk5Q0xFOUJRVThzYlVKQlFWRXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzV1VGQldTeEZRVUZGTEdGQlFXRXNSVUZCUlN4RlFVRkZPMmRDUVVONlJDeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXp0blFrRkRlRU1zUzBGQlN5eE5RVUZOTEV0QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8yOUNRVU0zUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zU1VGQlNTeExRVUZMTEVOQlFVTXNVMEZCVXl4SlFVRkpMRkZCUVZFc1NVRkJTU3hEUVVGRExFVkJRVVU3ZDBKQlEzUkVMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZSTEZsQlFWa3NSVUZCVVN4aFFVRmhMRU5CUVVNc1EwRkJRenR4UWtGRGNrVTdhVUpCUTBvN1dVRkRUQ3hEUVVGRExFVkJRVVVzUlVGQlJTeFRRVUZUTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNKQ08xRkJRMFFzVDBGQlR5eExRVUZMTEVOQlFVTTdTVUZEYWtJc1EwRkJRenREUVVOS08wRkJia3RFTEhOQ1FXMUxReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBmcmFtZXdvcmtfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2ZyYW1ld29ya1wiKTtcbmNsYXNzIE1vZGVsUmVnaXN0cnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vZGVscyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIU1vZGVsUmVnaXN0cnkuaW5zdGFuY2UpXG4gICAgICAgICAgICBNb2RlbFJlZ2lzdHJ5Lmluc3RhbmNlID0gbmV3IE1vZGVsUmVnaXN0cnkoKTtcbiAgICAgICAgcmV0dXJuIE1vZGVsUmVnaXN0cnkuaW5zdGFuY2U7XG4gICAgfVxuICAgIHJlZ2lzdGVyKG1vZGVsKSB7XG4gICAgICAgIHRoaXMubW9kZWxzLnNldChgJHttb2RlbC5jbGFzc05hbWV9JHttb2RlbC5pZH1gLCBtb2RlbCk7XG4gICAgfVxuICAgIHVucmVnaXN0ZXIobW9kZWwpIHtcbiAgICAgICAgdGhpcy5tb2RlbHMuZGVsZXRlKGAke21vZGVsLmNsYXNzTmFtZX0ke21vZGVsLmlkfWApO1xuICAgIH1cbiAgICBnZXRNb2RlbEJ5SWQoaWQsIGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVscy5nZXQoYCR7dGhpcy5nZXRDbGFzc05hbWUoY29uc3RydWN0b3IpfSR7aWR9YCk7XG4gICAgfVxuICAgIGdldE1vZGVsc0J5QXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGNvbnN0IG1vZGVscyA9IFtdO1xuICAgICAgICB0aGlzLm1vZGVscy5mb3JFYWNoKChtb2RlbCkgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoa2V5IGluIG1vZGVsKSB8fCBlbGVtZW50ICE9PSBtb2RlbFtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb2RlbHMucHVzaChtb2RlbCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbW9kZWxzO1xuICAgIH1cbiAgICB1cGRhdGVJRChvbGRJRCwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgY29uc3QgbW9kZWwgPSB0aGlzLm1vZGVscy5nZXQoYCR7dGhpcy5nZXRDbGFzc05hbWUoY29uc3RydWN0b3IpfSR7b2xkSUR9YCk7XG4gICAgICAgIGlmICghbW9kZWwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMubW9kZWxzLmRlbGV0ZShgJHt0aGlzLmdldENsYXNzTmFtZShjb25zdHJ1Y3Rvcil9JHtvbGRJRH1gKTtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihtb2RlbCk7XG4gICAgfVxuICAgIGdldE1vZGVsc0J5Q29uZGl0aW9uKGZ1bmMsIG1vZGUgPSBcImFsbFwiKSB7XG4gICAgICAgIGNvbnN0IG1vZGVscyA9IFtdO1xuICAgICAgICBsZXQgbGFzdE1vZGVsO1xuICAgICAgICBmb3IgKGNvbnN0IG1vZGVsIG9mIHRoaXMubW9kZWxzLnZhbHVlcygpKSB7XG4gICAgICAgICAgICBpZiAoZnVuYyhtb2RlbCkpIHtcbiAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gXCJmaXJzdFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kZWw7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09IFwiYWxsXCIpXG4gICAgICAgICAgICAgICAgICAgIG1vZGVscy5wdXNoKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gXCJsYXN0XCIpXG4gICAgICAgICAgICAgICAgICAgIGxhc3RNb2RlbCA9IG1vZGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2RlID09PSBcImxhc3RcIiA/IGxhc3RNb2RlbCA6IG1vZGVscztcbiAgICB9XG4gICAgZ2V0Q2xhc3NOYW1lKGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWU7XG4gICAgICAgIGlmIChmcmFtZXdvcmtfMS5pc0Jhc2VDb25zdHJ1Y3Rvcihjb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNvbnN0cnVjdG9yLmNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChcImNsYXNzTmFtZVwiIGluIGNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjb25zdHJ1Y3Rvci5jbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNvbnN0cnVjdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgY2xhc3NOYW1lID0gY29uc3RydWN0b3IuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9XG59XG5leHBvcnRzLk1vZGVsUmVnaXN0cnkgPSBNb2RlbFJlZ2lzdHJ5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVFc5a1pXeFNaV2RwYzNSeWVTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiR2xpTDAxdlpHVnNVbVZuYVhOMGNua3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRFFTeHZSRUZCZVVRN1FVRlhla1FzVFVGQllTeGhRVUZoTzBsQmFVTjBRanRSUVdSUkxGZEJRVTBzUjBGQk1FSXNTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVdNeFFpeERRVUZETzBsQlRHeENMRTFCUVUwc1EwRkJReXhYUVVGWE8xRkJRM0pDTEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1VVRkJVVHRaUVVGRkxHRkJRV0VzUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1N4aFFVRmhMRVZCUVVVc1EwRkJRenRSUVVNeFJTeFBRVUZQTEdGQlFXRXNRMEZCUXl4UlFVRlJMRU5CUVVNN1NVRkRiRU1zUTBGQlF6dEpRVlZOTEZGQlFWRXNRMEZCUXl4TFFVRmxPMUZCUXpOQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRE5VUXNRMEZCUXp0SlFWTk5MRlZCUVZVc1EwRkJReXhMUVVGbE8xRkJRemRDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEZOQlFWTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU40UkN4RFFVRkRPMGxCVlUwc1dVRkJXU3hEUVVFMlF5eEZRVUZWTEVWQlFVVXNWMEZCWXp0UlFVTjBSaXhQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJiVU1zUTBGQlF6dEpRVU4yUnl4RFFVRkRPMGxCVlUwc2NVSkJRWEZDTEVOQlFVTXNWVUZCZFVNN1VVRkRhRVVzVFVGQlRTeE5RVUZOTEVkQlFXVXNSVUZCUlN4RFFVRkRPMUZCUXpsQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVU3V1VGRE1VSXNTMEZCU3l4TlFVRk5MRWRCUVVjc1NVRkJTU3hWUVVGVkxFVkJRVVU3WjBKQlF6RkNMRWxCUVVrc1ZVRkJWU3hEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0dlFrRkRhRU1zVFVGQlRTeFBRVUZQTEVkQlFVY3NWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yOUNRVU5vUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUzBGQlN5eERRVUZETEVsQlFVa3NUMEZCVHl4TFFVRnpRaXhMUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdkMEpCUXpkRUxFOUJRVTg3Y1VKQlExWTdhVUpCUTBvN1lVRkRTanRaUVVORUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRka0lzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEU0N4UFFVRlBMRTFCUVUwc1EwRkJRenRKUVVOc1FpeERRVUZETzBsQldVMHNVVUZCVVN4RFFVRnhRaXhMUVVGakxFVkJRVVVzVjBGQll6dFJRVU01UkN4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVjBGQlZ5eERRVUZETEVkQlFVY3NTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNelJTeEpRVUZKTEVOQlFVTXNTMEZCU3p0WlFVRkZMRTlCUVU4N1VVRkRia0lzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZkQlFWY3NRMEZCUXl4SFFVRkhMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGFFVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCWlUwc2IwSkJRVzlDTEVOQlFVTXNTVUZCYTBNc1JVRkJSU3hQUVVGcFF5eExRVUZMTzFGQlEyeEhMRTFCUVUwc1RVRkJUU3hIUVVGbExFVkJRVVVzUTBGQlF6dFJRVU01UWl4SlFVRkpMRk5CUVN0Q0xFTkJRVU03VVVGRGNFTXNTMEZCU3l4TlFVRk5MRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4RlFVRkZPMWxCUTNSRExFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMmRDUVVOaUxFbEJRVWtzU1VGQlNTeExRVUZMTEU5QlFVODdiMEpCUVVVc1QwRkJUeXhMUVVGTExFTkJRVU03WjBKQlEyNURMRWxCUVVrc1NVRkJTU3hMUVVGTExFdEJRVXM3YjBKQlFVVXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dG5Ra0ZEZGtNc1NVRkJTU3hKUVVGSkxFdEJRVXNzVFVGQlRUdHZRa0ZCUlN4VFFVRlRMRWRCUVVjc1MwRkJTeXhEUVVGRE8yRkJRekZETzFOQlEwbzdVVUZEUkN4UFFVRlBMRWxCUVVrc1MwRkJTeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJRMmhFTEVOQlFVTTdTVUZWVHl4WlFVRlpMRU5CUVVNc1YwRkJOa003VVVGRE9VUXNTVUZCU1N4VFFVRnBRaXhEUVVGRE8xRkJRM1JDTEVsQlFVa3NOa0pCUVdsQ0xFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVTdXVUZEYUVNc1UwRkJVeXhIUVVGSExGZEJRVmNzUTBGQlF5eFRRVUZUTEVOQlFVTTdVMEZEY2tNN1lVRkJUU3hKUVVGSkxGZEJRVmNzU1VGQlNTeFhRVUZYTEVWQlFVVTdXVUZEYmtNc1UwRkJVeXhIUVVGSExGZEJRVmNzUTBGQlF5eFRRVUZUTEVOQlFVTTdVMEZEY2tNN1lVRkJUU3hKUVVGSkxFOUJRVThzVjBGQlZ5eExRVUZMTEZWQlFWVXNSVUZCUlR0WlFVTXhReXhUUVVGVExFZEJRVWNzVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXp0VFFVTm9RenM3V1VGQlRTeFRRVUZUTEVkQlFWTXNWMEZCV1N4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU03VVVGRGRrUXNUMEZCVHl4VFFVRlRMRU5CUVVNN1NVRkRja0lzUTBGQlF6dERRVU5LTzBGQk1VcEVMSE5EUVRCS1F5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIE1vZGlmaWNhdGlvbiB7XG4gICAgY29uc3RydWN0b3IodmFsdWUsIHR5cGUgPSBcImRlbGV0ZVwiKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59XG5leHBvcnRzLk1vZGlmaWNhdGlvbiA9IE1vZGlmaWNhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVRXOWthV1pwWTJGMGFXOXVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlzYVdJdlRXOWthV1pwWTJGMGFXOXVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlVVRXNUVUZCWVN4WlFVRlpPMGxCYlVKeVFpeFpRVUZaTEV0QlFWY3NSVUZCUlN4UFFVRnhRaXhSUVVGUk8xRkJRMnhFTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRMjVDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVUwc1NVRkJTU3hEUVVGRE8wbEJRM2hDTEVOQlFVTTdTVUZSVFN4UFFVRlBPMUZCUTFZc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzBsQlEzUkNMRU5CUVVNN1NVRlJUU3hSUVVGUkxFTkJRVU1zUzBGQlZUdFJRVU4wUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dEpRVU4yUWl4RFFVRkRPME5CUTBvN1FVRXpRMFFzYjBOQk1rTkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgTW9kaWZpY2F0aW9uXzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kaWZpY2F0aW9uXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IEVycm9yc18xID0gcmVxdWlyZShcIn5iZG8vbGliL0Vycm9yc1wiKTtcbmNvbnN0IG9uX2NoYW5nZV8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm9uLWNoYW5nZVwiKSk7XG5jbGFzcyBQcm9wZXJ0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSwgcGFyYW1zKSB7XG4gICAgICAgIHRoaXMuaXNTaGFsbG93ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSB7fTtcbiAgICAgICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucGFyYW1zKVxuICAgICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtcy5wYXJhbXM7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgcGFyYW1ldGVycyk7XG4gICAgICAgIGNvbnN0IGNhcGl0YWxpemVkUHJvcCA9IHV0aWxfMS51Y0ZpcnN0KHByb3BlcnR5KTtcbiAgICAgICAgY29uc3Qgb25UeXBlQ2hlY2tGYWlsID0gYG9uJHtjYXBpdGFsaXplZFByb3B9VHlwZUNoZWNrRmFpbGA7XG4gICAgICAgIGNvbnN0IG9uVHlwZUNoZWNrID0gYG9uJHtjYXBpdGFsaXplZFByb3B9VHlwZUNoZWNrYDtcbiAgICAgICAgY29uc3Qgb25UeXBlQ2hlY2tTdWNjZXNzID0gYG9uJHtjYXBpdGFsaXplZFByb3B9VHlwZUNoZWNrU3VjY2Vzc2A7XG4gICAgICAgIHRoaXMub25UeXBlQ2hlY2tGYWlsID0gcGFyYW1ldGVycyA/IHBhcmFtZXRlcnMub25UeXBlQ2hlY2tGYWlsIHx8IG9uVHlwZUNoZWNrRmFpbCA6IG9uVHlwZUNoZWNrRmFpbDtcbiAgICAgICAgdGhpcy5vblR5cGVDaGVjayA9IHBhcmFtZXRlcnMgPyBwYXJhbWV0ZXJzLm9uVHlwZUNoZWNrIHx8IG9uVHlwZUNoZWNrIDogb25UeXBlQ2hlY2s7XG4gICAgICAgIHRoaXMub25UeXBlQ2hlY2tTdWNjZXNzID0gcGFyYW1ldGVycyA/IHBhcmFtZXRlcnMub25UeXBlQ2hlY2tTdWNjZXNzIHx8IG9uVHlwZUNoZWNrU3VjY2VzcyA6IG9uVHlwZUNoZWNrU3VjY2VzcztcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5kb1NldFZhbHVlKHZhbHVlLCB0cnVlKTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5nS2V5ID0gdGhpcy5wcm9wZXJ0eS50b1N0cmluZygpO1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAoIXV0aWxfMS5pc1Byb3h5KHZhbHVlKSAmJiB0aGlzLnNhdmVJbkxvY2FsU3RvcmFnZSAmJiB1dGlsXzEuaXNGdW5jdGlvbih0aGlzLm9iamVjdC5nZXROYW1lc3BhY2VkU3RvcmFnZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5vYmplY3QuZ2V0TmFtZXNwYWNlZFN0b3JhZ2Uoc3RyaW5nS2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHR5cGVHdWFyZCh2YWx1ZSkge1xuICAgICAgICBsZXQgdmFsdWVUb1Bhc3MgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kaWZpY2F0aW9uXzEuTW9kaWZpY2F0aW9uKVxuICAgICAgICAgICAgdmFsdWVUb1Bhc3MgPSB2YWx1ZS52YWx1ZU9mKCk7XG4gICAgICAgIGNvbnN0IGRlc2lnblR5cGUgPSBtZXRhZGF0YV8xLmdldERlc2lnblR5cGUodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkudG9TdHJpbmcoKSk7XG4gICAgICAgIGNvbnN0IHR5cGVFcnJvciA9IG5ldyBFcnJvcnNfMS5UeXBlRXJyb3IoYCR7dmFsdWVUb1Bhc3N9IGlzIG5vdCB0eXBlIG9mICR7ZGVzaWduVHlwZS5jbGFzc05hbWUgfHwgZGVzaWduVHlwZS5uYW1lfWApO1xuICAgICAgICBjb25zdCBpZHhTdHJ1Y3RPYmogPSB0aGlzLm9iamVjdDtcbiAgICAgICAgbGV0IGVycm9yO1xuICAgICAgICBpZiAoIXRoaXMubnVsbGFibGUgJiYgKHZhbHVlVG9QYXNzID09PSB1bmRlZmluZWQgfHwgdmFsdWVUb1Bhc3MgPT09IG51bGwpKVxuICAgICAgICAgICAgZXJyb3IgPSB0eXBlRXJyb3I7XG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgIGlmICh1dGlsXzEuaXNQcmltaXRpdmUodmFsdWVUb1Bhc3MpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZVRvUGFzcyAhPT0gZGVzaWduVHlwZS5uYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLm51bGxhYmxlIHx8ICEodmFsdWVUb1Bhc3MgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZVRvUGFzcyA9PT0gbnVsbCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IHR5cGVFcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghKHZhbHVlVG9QYXNzIGluc3RhbmNlb2YgZGVzaWduVHlwZSkpXG4gICAgICAgICAgICAgICAgZXJyb3IgPSB0eXBlRXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlcnJvciAmJiB1dGlsXzEuaXNGdW5jdGlvbihpZHhTdHJ1Y3RPYmpbdGhpcy5vblR5cGVDaGVja10pKVxuICAgICAgICAgICAgZXJyb3IgPSBpZHhTdHJ1Y3RPYmpbdGhpcy5vblR5cGVDaGVja10odmFsdWVUb1Bhc3MpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmICh1dGlsXzEuaXNGdW5jdGlvbihpZHhTdHJ1Y3RPYmpbdGhpcy5vblR5cGVDaGVja0ZhaWxdKSkge1xuICAgICAgICAgICAgICAgIGlkeFN0cnVjdE9ialt0aGlzLm9uVHlwZUNoZWNrRmFpbF0oZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodXRpbF8xLmlzRnVuY3Rpb24oaWR4U3RydWN0T2JqLm9uVHlwZUNoZWNrRmFpbCkpIHtcbiAgICAgICAgICAgICAgICBpZHhTdHJ1Y3RPYmoub25UeXBlQ2hlY2tGYWlsKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1dGlsXzEuaXNGdW5jdGlvbihpZHhTdHJ1Y3RPYmpbdGhpcy5vblR5cGVDaGVja1N1Y2Nlc3NdKSlcbiAgICAgICAgICAgIGlkeFN0cnVjdE9ialt0aGlzLm9uVHlwZUNoZWNrU3VjY2Vzc10oKTtcbiAgICAgICAgcmV0dXJuICEoQm9vbGVhbihlcnJvcikudmFsdWVPZigpKTtcbiAgICB9XG4gICAgcHJveHlIYW5kbGVyKF9wYXRoLCBfY2hhbmdlZFZhbCwgX3ByZXZWYWwpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5kb1NldFZhbHVlKG9uX2NoYW5nZV8xLmRlZmF1bHQudGFyZ2V0KHZhbHVlKSwgZmFsc2UpO1xuICAgIH1cbiAgICBzaG91bGREb1NldFZhbHVlKHZhbHVlLCBza2lwR3VhcmQgPSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gISh2YWx1ZSA9PT0gdGhpcy5vd25WYWx1ZSB8fCAhc2tpcEd1YXJkICYmICF0aGlzLmRpc2FibGVUeXBlR3VhcmQgJiYgIXRoaXMudHlwZUd1YXJkKHZhbHVlKSk7XG4gICAgfVxuICAgIGRvU2V0VmFsdWUodmFsdWUsIG1vZGlmeVZhbHVlID0gdHJ1ZSwgc2tpcEd1YXJkID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZERvU2V0VmFsdWUodmFsdWUsIHNraXBHdWFyZCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCB2YWx1ZVRvUGFzcztcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kaWZpY2F0aW9uXzEuTW9kaWZpY2F0aW9uKSB7XG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHZhbHVlO1xuICAgICAgICBpZiAobW9kaWZ5VmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3h5ZmllZCA9IHRoaXMucHJveHlmeVZhbHVlKHZhbHVlVG9QYXNzKTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBwcm94eWZpZWQ7XG4gICAgICAgICAgICB0aGlzLm93blZhbHVlID0gdmFsdWVUb1Bhc3M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkVXBkYXRlTnNTdG9yYWdlKCkgJiYgdXRpbF8xLmlzRnVuY3Rpb24odGhpcy5vYmplY3Quc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2UpKSB7XG4gICAgICAgICAgICB0aGlzLm9iamVjdC5zZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSh0aGlzLnByb3BlcnR5LnRvU3RyaW5nKCksIHZhbHVlVG9QYXNzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm94eWZ5VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgfHwgdXRpbF8xLmlzT2JqZWN0KHZhbHVlKSAmJiAhdmFsdWUuaXNCRE9Nb2RlbCkge1xuICAgICAgICAgICAgdmFsdWUgPSBvbl9jaGFuZ2VfMS5kZWZhdWx0LnRhcmdldCh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gb25fY2hhbmdlXzEuZGVmYXVsdCh2YWx1ZSwgKHBhdGgsIGNoYW5nZWRWYWwsIHByZXZWYWwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm94eUhhbmRsZXJSZXBsYWNlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3h5SGFuZGxlclJlcGxhY2VtZW50KHBhdGgsIGNoYW5nZWRWYWwsIHByZXZWYWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJveHlIYW5kbGVyKHBhdGgsIGNoYW5nZWRWYWwsIHByZXZWYWwpO1xuICAgICAgICAgICAgfSwgeyBpc1NoYWxsb3c6IHRoaXMuaXNTaGFsbG93IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgc2hvdWxkVXBkYXRlTnNTdG9yYWdlKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2F2ZUluTG9jYWxTdG9yYWdlIHx8ICFlbnZpcm9ubWVudF8xLmlzQnJvd3NlcigpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSB0aGlzLnByb3BlcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGtleVNob3VsZEJlVXBkYXRlZCA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5vYmplY3QsIFwia2V5U2hvdWxkQmVVcGRhdGVkXCIpIHx8IHt9O1xuICAgICAgICBpZiAoa2V5U2hvdWxkQmVVcGRhdGVkW3N0cmluZ0tleV0pXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHV0aWxfMS5pc0Z1bmN0aW9uKHRoaXMub2JqZWN0LmdldE5hbWVzcGFjZWRTdG9yYWdlKSAmJlxuICAgICAgICAgICAgdGhpcy5vYmplY3QuZ2V0TmFtZXNwYWNlZFN0b3JhZ2Uoc3RyaW5nS2V5KSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMub2JqZWN0LCBcImtleVNob3VsZEJlVXBkYXRlZFwiLCBPYmplY3QuYXNzaWduKGtleVNob3VsZEJlVXBkYXRlZCwgeyBbc3RyaW5nS2V5XTogdHJ1ZSB9KSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQm9vbGVhbihtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMub2JqZWN0LCBcImNvbnN0cnVjdGlvbkNvbXBsZXRlXCIpKTtcbiAgICB9XG59XG5leHBvcnRzLlByb3BlcnR5ID0gUHJvcGVydHk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lVSEp2Y0dWeWRIa3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMnhwWWk5UWNtOXdaWEowZVM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZEUVN4M1JFRkJjVVE3UVVGRGNrUXNhMFJCUVdsR08wRkJRMnBHTEhkRVFVRnRSRHRCUVVOdVJDd3dRMEZCYzBZN1FVRkZkRVlzTkVOQlFUUkRPMEZCUXpWRExHdEZRVUZwUXp0QlFUSkZha01zVFVGQllTeFJRVUZSTzBsQmNVZHFRaXhaUVVGWkxFMUJRVk1zUlVGQlJTeFJRVUZYTEVWQlFVVXNUVUZCWjBRN1VVRnlRamRGTEdOQlFWTXNSMEZCV1N4SlFVRkpMRU5CUVVNN1VVRnpRamRDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRM0pDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRE8xRkJRM3BDTEVsQlFVa3NWVUZCVlN4SFFVRnZRaXhGUVVGRkxFTkJRVU03VVVGRmNrTXNTVUZCU1N4TlFVRk5MRWxCUVVrc1RVRkJUU3hEUVVGRExFMUJRVTA3V1VGQlJTeFZRVUZWTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVONFJDeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVVZvUXl4TlFVRk5MR1ZCUVdVc1IwRkJSeXhqUVVGUExFTkJRVU1zVVVGQmEwSXNRMEZCUXl4RFFVRkRPMUZCUTNCRUxFMUJRVTBzWlVGQlpTeEhRVUZITEV0QlFVc3NaVUZCWlN4bFFVRmxMRU5CUVVNN1VVRkROVVFzVFVGQlRTeFhRVUZYTEVkQlFVY3NTMEZCU3l4bFFVRmxMRmRCUVZjc1EwRkJRenRSUVVOd1JDeE5RVUZOTEd0Q1FVRnJRaXhIUVVGSExFdEJRVXNzWlVGQlpTeHJRa0ZCYTBJc1EwRkJRenRSUVVWc1JTeEpRVUZKTEVOQlFVTXNaVUZCWlN4SFFVRkhMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETEdWQlFXVXNTVUZCU1N4bFFVRmxMRU5CUVVNc1EwRkJReXhEUVVGRExHVkJRV1VzUTBGQlF6dFJRVU53Unl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRMRmRCUVZjc1NVRkJTU3hYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXp0UlFVTndSaXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRWRCUVVjc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVTXNhMEpCUVd0Q0xFbEJRVWtzYTBKQlFXdENMRU5CUVVNc1EwRkJReXhEUVVGRExHdENRVUZyUWl4RFFVRkRPMGxCUTNCSUxFTkJRVU03U1VGVFRTeFJRVUZSTEVOQlFVTXNTMEZCWjBNN1VVRkROVU1zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRGFrTXNRMEZCUXp0SlFWVk5MRTlCUVU4N1VVRkRWaXhOUVVGTkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJSVE5ETEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03VVVGRmRrSXNTVUZCU1N4RFFVRkRMR05CUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFbEJRVWtzYVVKQlFWVXNRMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUeXhEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRVZCUVVVN1dVRkRia2NzUzBGQlN5eEhRVUZUTEVsQlFVa3NRMEZCUXl4TlFVRlBMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1UwRkRPVVE3VVVGRFJDeFBRVUZQTEV0QlFVc3NRMEZCUXp0SlFVTnFRaXhEUVVGRE8wbEJWVTBzVTBGQlV5eERRVUZETEV0QlFXZERPMUZCUXpkRExFbEJRVWtzVjBGQlZ5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTjRRaXhKUVVGSkxFdEJRVXNzV1VGQldTd3lRa0ZCV1R0WlFVRkZMRmRCUVZjc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdVVUZGYWtVc1RVRkJUU3hWUVVGVkxFZEJRVWNzZDBKQlFXRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVONFJTeE5RVUZOTEZOQlFWTXNSMEZCUnl4SlFVRkpMR3RDUVVGVExFTkJRVU1zUjBGQlJ5eFhRVUZYTEcxQ1FVRnRRaXhWUVVGVkxFTkJRVU1zVTBGQlV5eEpRVUZKTEZWQlFWVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRelZITEUxQlFVMHNXVUZCV1N4SFFVRnRRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzFGQlJXcEVMRWxCUVVrc1MwRkJTeXhEUVVGRE8xRkJSVllzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1EwRkJReXhYUVVGWExFdEJRVXNzVTBGQlV5eEpRVUZKTEZkQlFWY3NTMEZCU3l4SlFVRkpMRU5CUVVNN1dVRkJSU3hMUVVGTExFZEJRVWNzVTBGQlV5eERRVUZETzFGQlJUZEdMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVU3V1VGRFVpeEpRVUZKTEd0Q1FVRlhMRU5CUVVNc1YwRkJWeXhEUVVGRExFVkJRVVU3WjBKQlF6RkNMRWxCUVVrc1QwRkJUeXhYUVVGWExFdEJRVXNzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1JVRkJSVHR2UWtGRGRFUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFbEJRVWtzUTBGQlF5eERRVUZETEZkQlFWY3NTMEZCU3l4VFFVRlRMRWxCUVVrc1YwRkJWeXhMUVVGTExFbEJRVWtzUTBGQlF6dDNRa0ZCUlN4TFFVRkxMRWRCUVVjc1UwRkJVeXhEUVVGRE8ybENRVU5xUnp0aFFVTktPMmxDUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETEZkQlFWY3NXVUZCV1N4VlFVRlZMRU5CUVVNN1owSkJRVVVzUzBGQlN5eEhRVUZITEZOQlFWTXNRMEZCUXp0VFFVTjBSVHRSUVVkRUxFbEJRVWtzUTBGQlF5eExRVUZMTEVsQlFVa3NhVUpCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMWxCUVVVc1MwRkJTeXhIUVVGSExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03VVVGSE9VY3NTVUZCU1N4TFFVRkxMRVZCUVVVN1dVRkRVQ3hKUVVGSkxHbENRVUZWTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF5eEZRVUZGTzJkQ1FVTm9SQ3haUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8yRkJRemRETzJsQ1FVRk5MRWxCUVVrc2FVSkJRVlVzUTBGQlF5eFpRVUZaTEVOQlFVTXNaVUZCWlN4RFFVRkRMRVZCUVVVN1owSkJRMnBFTEZsQlFWa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03WVVGRGRrTTdPMmRDUVVGTkxFMUJRVTBzUzBGQlN5eERRVUZETzFOQlEzUkNPMkZCUVUwc1NVRkJTU3hwUWtGQlZTeERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXp0WlFVRkZMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1JVRkJSU3hEUVVGRE8xRkJRM1JITEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUTNaRExFTkJRVU03U1VGUFRTeFpRVUZaTEVOQlFVTXNTMEZCWXl4RlFVRkZMRmRCUVd0Q0xFVkJRVVVzVVVGQlpUdFJRVU51UlN4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzFGQlEzcENMRWxCUVVrc1MwRkJTeXhMUVVGTExGTkJRVk1zU1VGQlNTeExRVUZMTEV0QlFVc3NTVUZCU1R0WlFVRkZMRTlCUVU4N1VVRkRiRVFzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4dFFrRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOdVJDeERRVUZETzBsQlZVMHNaMEpCUVdkQ0xFTkJRVU1zUzBGQlowTXNSVUZCUlN4WlFVRnhRaXhMUVVGTE8xRkJRMmhHTEU5QlFVOHNRMEZCUXl4RFFVRkRMRXRCUVVzc1MwRkJTeXhKUVVGSkxFTkJRVU1zVVVGQlVTeEpRVUZKTEVOQlFVTXNVMEZCVXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNoSExFTkJRVU03U1VGWlV5eFZRVUZWTEVOQlFVTXNTMEZCWjBNc1JVRkJSU3hqUVVGMVFpeEpRVUZKTEVWQlFVVXNXVUZCY1VJc1MwRkJTenRSUVVNeFJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEV0QlFVc3NSVUZCUlN4VFFVRlRMRU5CUVVNN1dVRkJSU3hQUVVGUE8xRkJRM0pFTEVsQlFVa3NWMEZCTmtJc1EwRkJRenRSUVVOc1F5eEpRVUZKTEV0QlFVc3NXVUZCV1N3eVFrRkJXU3hGUVVGRk8xbEJReTlDTEZkQlFWY3NSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VTBGRGFrTTdPMWxCUVUwc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU16UWl4SlFVRkpMRmRCUVZjc1JVRkJSVHRaUVVOaUxFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03V1VGRGFrUXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhUUVVGVExFTkJRVU03V1VGRGRrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhYUVVGWExFTkJRVU03VTBGREwwSTdVVUZEUkN4SlFVRkpMRWxCUVVrc1EwRkJReXh4UWtGQmNVSXNSVUZCUlN4SlFVRkpMR2xDUVVGVkxFTkJRV3RDTEVsQlFVa3NRMEZCUXl4TlFVRlBMRU5CUVVNc01FSkJRVEJDTEVOQlFVTXNSVUZCUlR0WlFVTnlSaXhKUVVGSkxFTkJRVU1zVFVGQlR5eERRVUZETERCQ1FVRXdRaXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVc1YwRkJWeXhEUVVGRExFTkJRVU03VTBGRGJrYzdTVUZEVEN4RFFVRkRPMGxCVlZNc1dVRkJXU3hEUVVGRExFdEJRVms3VVVGREwwSXNTVUZCU1N4TFFVRkxMRmxCUVZrc1MwRkJTeXhKUVVGSkxHVkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRlBMRXRCUVUwc1EwRkJReXhWUVVGVkxFVkJRVVU3V1VGRGRrVXNTMEZCU3l4SFFVRkhMRzFDUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUXk5Q0xFOUJRVThzYlVKQlFWRXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzVlVGQlZTeEZRVUZGTEU5QlFVOHNSVUZCUlN4RlFVRkZPMmRDUVVOcVJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4MVFrRkJkVUlzUlVGQlJUdHZRa0ZET1VJc1NVRkJTU3hEUVVGRExIVkNRVUYxUWl4RFFVRkRMRWxCUVVrc1JVRkJVU3hWUVVGVkxFVkJRVkVzVDBGQlR5eERRVUZETEVOQlFVTTdhVUpCUTNaRk96dHZRa0ZCVFN4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUlVGQlVTeFZRVUZWTEVWQlFWRXNUMEZCVHl4RFFVRkRMRU5CUVVNN1dVRkRjRVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzSkRPMUZCUTBRc1QwRkJUeXhMUVVGTExFTkJRVU03U1VGRGFrSXNRMEZCUXp0SlFWTlRMSEZDUVVGeFFqdFJRVU16UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4SlFVRkpMRU5CUVVNc2RVSkJRVk1zUlVGQlJUdFpRVUZGTEU5QlFVOHNTMEZCU3l4RFFVRkRPMUZCUXpORUxFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRE0wTXNUVUZCVFN4clFrRkJhMElzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzYjBKQlFXOUNMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRGFFWXNTVUZCU1N4clFrRkJhMElzUTBGQlF5eFRRVUZUTEVOQlFVTTdXVUZCUlN4UFFVRlBMRWxCUVVrc1EwRkJRenRSUVVNdlF5eEpRVUZKTEdsQ1FVRlZMRU5CUVd0Q0xFbEJRVWtzUTBGQlF5eE5RVUZQTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU03V1VGRE4wTXNTVUZCU1N4RFFVRkRMRTFCUVU4c1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhUUVVGVExFVkJRVVU3V1VGRE4wVXNlVUpCUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEc5Q1FVRnZRaXhGUVVGRkxFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzUlVGQlJTeERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU0xUnl4UFFVRlBMRWxCUVVrc1EwRkJRenRUUVVObU8xRkJRMFFzVDBGQlR5eFBRVUZQTEVOQlFVTXNjMEpCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEhOQ1FVRnpRaXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU55UlN4RFFVRkRPME5CUTBvN1FVRjJVa1FzTkVKQmRWSkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgTW9kaWZpY2F0aW9uXzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kaWZpY2F0aW9uXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IG9uX2NoYW5nZV8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm9uLWNoYW5nZVwiKSk7XG5jb25zdCBjbG9uZV9kZWVwXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiY2xvbmUtZGVlcFwiKSk7XG5jbGFzcyBXYXRjaGVkIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5LCBwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5pc1NoYWxsb3cgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgY29uc3QgY2FwaXRhbGl6ZWRQcm9wID0gdXRpbF8xLnVjRmlyc3QocHJvcGVydHkpO1xuICAgICAgICBjb25zdCBvbkluaXRGdW5jID0gYG9uJHtjYXBpdGFsaXplZFByb3B9SW5pdGA7XG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlRnVuYyA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfUNoYW5nZWA7XG4gICAgICAgIGNvbnN0IG9uQWRkRnVuYyA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfUFkZGA7XG4gICAgICAgIGNvbnN0IG9uUmVtb3ZlRnVuYyA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfVJlbW92ZWA7XG4gICAgICAgIHRoaXMub25Jbml0ID0gcGFyYW1zID8gcGFyYW1zLm9uSW5pdCB8fCBvbkluaXRGdW5jIDogb25Jbml0RnVuYztcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHBhcmFtcyA/IHBhcmFtcy5vbkNoYW5nZSB8fCBvbkNoYW5nZUZ1bmMgOiBvbkNoYW5nZUZ1bmM7XG4gICAgICAgIHRoaXMub25BZGQgPSBwYXJhbXMgPyBwYXJhbXMub25BZGQgfHwgb25BZGRGdW5jIDogb25BZGRGdW5jO1xuICAgICAgICB0aGlzLm9uUmVtb3ZlID0gcGFyYW1zID8gcGFyYW1zLm9uUmVtb3ZlIHx8IG9uUmVtb3ZlRnVuYyA6IG9uUmVtb3ZlRnVuYztcbiAgICAgICAgdGhpcy5pc1NoYWxsb3cgPSBwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcy5pc1NoYWxsb3cgPT09IFwiYm9vbGVhblwiID8gcGFyYW1zLmlzU2hhbGxvdyA6IHRoaXMuaXNTaGFsbG93O1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkRG9TZXRWYWx1ZSh2YWx1ZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IG9sZFZhbCA9IGNsb25lX2RlZXBfMS5kZWZhdWx0KHRoaXMub3duVmFsdWUpO1xuICAgICAgICBsZXQgdmFsdWVUb1Bhc3M7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGlmaWNhdGlvbl8xLk1vZGlmaWNhdGlvbikge1xuICAgICAgICAgICAgdmFsdWVUb1Bhc3MgPSB2YWx1ZS52YWx1ZU9mKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdmFsdWVUb1Bhc3MgPSB2YWx1ZTtcbiAgICAgICAgbGV0IHVzZVZhbHVlID0gZmFsc2U7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGlmaWNhdGlvbl8xLk1vZGlmaWNhdGlvbikge1xuICAgICAgICAgICAgdmFsdWUuc2V0VmFsdWUodmFsdWVUb1Bhc3MpO1xuICAgICAgICAgICAgdXNlVmFsdWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlVG9TZXQgPSB1c2VWYWx1ZSA/IHZhbHVlIDogdmFsdWVUb1Bhc3M7XG4gICAgICAgIGlmICh0aGlzLnN1Yk9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy5zdWJPYmplY3Quc2V0VmFsdWUodmFsdWVUb1NldCk7XG4gICAgICAgICAgICB0aGlzLm93blZhbHVlID0gdXRpbF8xLmdldFByb3h5VGFyZ2V0KHRoaXMuc3ViT2JqZWN0LnZhbHVlT2YoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHRoaXMucHJveHlmeVZhbHVlKHZhbHVlVG9QYXNzKTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVRvUGFzcztcbiAgICAgICAgICAgIHRoaXMub3duVmFsdWUgPSB1dGlsXzEuZ2V0UHJveHlUYXJnZXQodmFsdWVUb1Bhc3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkeFN0cnVjdE9iaiA9IHRoaXMub2JqZWN0O1xuICAgICAgICBpZiAodXRpbF8xLmlzRnVuY3Rpb24oaWR4U3RydWN0T2JqW3RoaXMub25DaGFuZ2VdKSAmJiB0aGlzLmlzSW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICBpZHhTdHJ1Y3RPYmpbdGhpcy5vbkNoYW5nZV0ob2xkVmFsKTtcbiAgICAgICAgaWYgKHV0aWxfMS5pc0Z1bmN0aW9uKGlkeFN0cnVjdE9ialt0aGlzLm9uSW5pdF0pICYmICF0aGlzLmlzSW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICBpZHhTdHJ1Y3RPYmpbdGhpcy5vbkluaXRdKHZhbHVlVG9QYXNzKTtcbiAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViT2JqZWN0KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ViT2JqZWN0LnZhbHVlT2YoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHNldFN1Yk9iamVjdChzdWJPYmplY3QpIHtcbiAgICAgICAgc3ViT2JqZWN0LnByb3h5SGFuZGxlclJlcGxhY2VtZW50ID0gdGhpcy5wcm94eUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgc3ViT2JqZWN0LmlzU2hhbGxvdyA9IHRoaXMuaXNTaGFsbG93O1xuICAgICAgICB0aGlzLnN1Yk9iamVjdCA9IHN1Yk9iamVjdDtcbiAgICB9XG4gICAgcHJveHlIYW5kbGVyKHBhdGgsIGNoYW5nZWRWYWwsIHByZXZWYWwpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViT2JqZWN0KVxuICAgICAgICAgICAgdGhpcy5zdWJPYmplY3QucHJveHlIYW5kbGVyKHBhdGgsIGNoYW5nZWRWYWwsIHByZXZWYWwpO1xuICAgICAgICBjb25zdCBuZXdLZXlzID0gY2hhbmdlZFZhbCA/IE9iamVjdC5rZXlzKGNoYW5nZWRWYWwpIDogW107XG4gICAgICAgIGNvbnN0IG9sZEtleXMgPSBwcmV2VmFsID8gT2JqZWN0LmtleXMocHJldlZhbCkgOiBbXTtcbiAgICAgICAgY29uc3QgbmV3TGVuID0gbmV3S2V5cy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IG9sZExlbiA9IG9sZEtleXMubGVuZ3RoO1xuICAgICAgICB0aGlzLmNhc2VEZXRlY3RFeGVjKHtcbiAgICAgICAgICAgIGxlbjE6IG5ld0xlbixcbiAgICAgICAgICAgIGxlbjI6IG9sZExlbixcbiAgICAgICAgICAgIGZ1bmM6IHRoaXMub25BZGQsXG4gICAgICAgICAgICBrZXlzMTogbmV3S2V5cyxcbiAgICAgICAgICAgIGtleXMyOiBvbGRLZXlzLFxuICAgICAgICAgICAgY2hhbmdlZFZhbCxcbiAgICAgICAgICAgIHBhdGhcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2FzZURldGVjdEV4ZWMoe1xuICAgICAgICAgICAgbGVuMTogb2xkTGVuLFxuICAgICAgICAgICAgbGVuMjogbmV3TGVuLFxuICAgICAgICAgICAgZnVuYzogdGhpcy5vblJlbW92ZSxcbiAgICAgICAgICAgIGtleXMxOiBvbGRLZXlzLFxuICAgICAgICAgICAga2V5czI6IG5ld0tleXMsXG4gICAgICAgICAgICBjaGFuZ2VkVmFsLFxuICAgICAgICAgICAgcGF0aFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5ld0xlbiA9PT0gb2xkTGVuICYmIHRoaXMub25DaGFuZ2UgaW4gdGhpcyAmJiB0aGlzLmlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0W3RoaXMub25DaGFuZ2VdKGNoYW5nZWRWYWwsIHBhdGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNob3VsZERvU2V0VmFsdWUodmFsdWUsIHNraXBHdWFyZCA9IGZhbHNlKSB7XG4gICAgICAgIGlmICh0aGlzLnN1Yk9iamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ViT2JqZWN0LnNob3VsZERvU2V0VmFsdWUodmFsdWUsIHNraXBHdWFyZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuICh2YWx1ZSAhPT0gdGhpcy5vd25WYWx1ZSk7XG4gICAgfVxuICAgIHByb3h5ZnlWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSB8fCB1dGlsXzEuaXNPYmplY3QodmFsdWUpICYmICF2YWx1ZS5pc0JET01vZGVsKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG9uX2NoYW5nZV8xLmRlZmF1bHQudGFyZ2V0KHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBvbl9jaGFuZ2VfMS5kZWZhdWx0KHZhbHVlLCAocGF0aCwgY2hhbmdlZFZhbHVlLCBwcmV2aW91c1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm94eUhhbmRsZXIocGF0aCwgY2hhbmdlZFZhbHVlLCBwcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgICAgIH0sIHsgaXNTaGFsbG93OiB0aGlzLmlzU2hhbGxvdyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNhc2VEZXRlY3RFeGVjKGNkUGFyYW1zKSB7XG4gICAgICAgIGlmIChjZFBhcmFtcy5sZW4xID4gY2RQYXJhbXMubGVuMiAmJiBjZFBhcmFtcy5mdW5jIGluIHRoaXMub2JqZWN0KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1vZGlmaWVkIG9mIGNkUGFyYW1zLmtleXMxKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjZFBhcmFtcy5rZXlzMi5pbmNsdWRlcyhtb2RpZmllZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmplY3RbY2RQYXJhbXMuZnVuY10oKGNkUGFyYW1zLmNoYW5nZWRWYWwpW21vZGlmaWVkXSwgY2RQYXJhbXMucGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuV2F0Y2hlZCA9IFdhdGNoZWQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWMkYwWTJobFpDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiR2xpTDFkaGRHTm9aV1F1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJSVUVzZDBSQlFYRkVPMEZCUTNKRUxEQkRRVUZuUmp0QlFVTm9SaXhyUlVGQmFVTTdRVUZEYWtNc2IwVkJRVzFETzBGQk9FaHVReXhOUVVGaExFOUJRVTg3U1VGeFIyaENMRmxCUVZrc1RVRkJVeXhGUVVGRkxGRkJRVmNzUlVGQlJTeE5RVUYxUWp0UlFXaERjRVFzWTBGQlV5eEhRVUZaTEVsQlFVa3NRMEZCUXp0UlFUaENla0lzYTBKQlFXRXNSMEZCV1N4TFFVRkxMRU5CUVVNN1VVRkhia01zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRja0lzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNN1VVRkZla0lzVFVGQlRTeGxRVUZsTEVkQlFVY3NZMEZCVHl4RFFVRkRMRkZCUVd0Q0xFTkJRVU1zUTBGQlF6dFJRVVZ3UkN4TlFVRk5MRlZCUVZVc1IwRkJSeXhMUVVGTExHVkJRV1VzVFVGQlRTeERRVUZETzFGQlF6bERMRTFCUVUwc1dVRkJXU3hIUVVGSExFdEJRVXNzWlVGQlpTeFJRVUZSTEVOQlFVTTdVVUZEYkVRc1RVRkJUU3hUUVVGVExFZEJRVWNzUzBGQlN5eGxRVUZsTEV0QlFVc3NRMEZCUXp0UlFVTTFReXhOUVVGTkxGbEJRVmtzUjBGQlJ5eExRVUZMTEdWQlFXVXNVVUZCVVN4RFFVRkRPMUZCUld4RUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEpRVUZKTEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRE8xRkJRMmhGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4SlFVRkpMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETzFGQlEzaEZMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRPMUZCUXpWRUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeEpRVUZKTEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRE8xRkJSWGhGTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1RVRkJUU3hKUVVGSkxFOUJRVThzVFVGQlRTeERRVUZETEZOQlFWTXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU03U1VGRGVrY3NRMEZCUXp0SlFWVk5MRkZCUVZFc1EwRkJReXhMUVVGblF6dFJRVU0xUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRXRCUVVzc1EwRkJRenRaUVVGRkxFOUJRVTg3VVVGSE1VTXNUVUZCVFN4TlFVRk5MRWRCUVVjc2IwSkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkZlRU1zU1VGQlNTeFhRVUUyUWl4RFFVRkRPMUZCUTJ4RExFbEJRVWtzUzBGQlN5eFpRVUZaTERKQ1FVRlpMRVZCUVVVN1dVRkRMMElzVjBGQlZ5eEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRUUVVOcVF6czdXVUZCVFN4WFFVRlhMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJSek5DTEVsQlFVa3NVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOeVFpeEpRVUZKTEV0QlFVc3NXVUZCV1N3eVFrRkJXU3hGUVVGRk8xbEJReTlDTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03V1VGRE5VSXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJRenRUUVVOdVFqdFJRVVZFTEUxQlFVMHNWVUZCVlN4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkZiRVFzU1VGQlNTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZPMWxCUTJoQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc2NVSkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRE5VUTdZVUZCVFR0WlFVVklMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMWxCUXpkRExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NWMEZCVnl4RFFVRkRPMWxCUTNwQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NjVUpCUVdNc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFRRVU12UXp0UlFVVkVMRTFCUVUwc1dVRkJXU3hIUVVGdFFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUldwRUxFbEJRVWtzYVVKQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMR0ZCUVdFN1dVRkJSU3haUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJSWFpITEVsQlFVa3NhVUpCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWVVGQllUdFpRVUZGTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVVUZEZWtjc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eEpRVUZKTEVOQlFVTTdTVUZET1VJc1EwRkJRenRKUVZWTkxFOUJRVTg3VVVGRFZpeEpRVUZKTEVsQlFVa3NRMEZCUXl4VFFVRlRPMWxCUVVVc1QwRkJUeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUTNCRUxFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTjBRaXhEUVVGRE8wbEJWVTBzV1VGQldTeERRVUZETEZOQlFUSkRPMUZCUXpORUxGTkJRVk1zUTBGQlF5eDFRa0ZCZFVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOcVJTeFRRVUZUTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU03VVVGRGNrTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU03U1VGREwwSXNRMEZCUXp0SlFWVk5MRmxCUVZrc1EwRkJReXhKUVVGWkxFVkJRVVVzVlVGQlowSXNSVUZCUlN4UFFVRmhPMUZCUXpkRUxFbEJRVWtzU1VGQlNTeERRVUZETEZOQlFWTTdXVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8xRkJRek5GTEUxQlFVMHNUMEZCVHl4SFFVRkhMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETzFGQlF6RkVMRTFCUVUwc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMUZCUTNCRUxFMUJRVTBzVFVGQlRTeEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRPVUlzVFVGQlRTeE5RVUZOTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVjNVFpeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRPMWxCUTJoQ0xFbEJRVWtzUlVGQlJTeE5RVUZOTzFsQlExb3NTVUZCU1N4RlFVRkZMRTFCUVUwN1dVRkRXaXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVczdXVUZEYUVJc1MwRkJTeXhGUVVGRkxFOUJRVTg3V1VGRFpDeExRVUZMTEVWQlFVVXNUMEZCVHp0WlFVTmtMRlZCUVZVN1dVRkRWaXhKUVVGSk8xTkJRMUFzUTBGQlF5eERRVUZETzFGQlJVZ3NTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJRenRaUVVOb1FpeEpRVUZKTEVWQlFVVXNUVUZCVFR0WlFVTmFMRWxCUVVrc1JVRkJSU3hOUVVGTk8xbEJRMW9zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJPMWxCUTI1Q0xFdEJRVXNzUlVGQlJTeFBRVUZQTzFsQlEyUXNTMEZCU3l4RlFVRkZMRTlCUVU4N1dVRkRaQ3hWUVVGVk8xbEJRMVlzU1VGQlNUdFRRVU5RTEVOQlFVTXNRMEZCUXp0UlFVVklMRWxCUVVrc1RVRkJUU3hMUVVGTExFMUJRVTBzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4SlFVRkpMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zWVVGQllTeEZRVUZGTzFsQlEycEVMRWxCUVVrc1EwRkJReXhOUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRlZCUVZVc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU5zUlR0SlFVTk1MRU5CUVVNN1NVRlhUeXhuUWtGQlowSXNRMEZCUXl4TFFVRm5ReXhGUVVGRkxGbEJRWEZDTEV0QlFVczdVVUZEYWtZc1NVRkJTU3hKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTzFsQlEyaENMRTlCUVU4c1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhMUVVGTExFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdVMEZETlVRN08xbEJRVTBzVDBGQlR5eERRVUZETEV0QlFVc3NTMEZCU3l4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03U1VGRE5VTXNRMEZCUXp0SlFWZFBMRmxCUVZrc1EwRkJReXhMUVVGWk8xRkJRemRDTEVsQlFVa3NTMEZCU3l4WlFVRlpMRXRCUVVzc1NVRkJTU3hsUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCVHl4TFFVRk5MRU5CUVVNc1ZVRkJWU3hGUVVGRk8xbEJRM1pGTEV0QlFVc3NSMEZCUnl4dFFrRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTXZRaXhQUVVGUExHMUNRVUZSTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxGbEJRVmtzUlVGQlJTeGhRVUZoTEVWQlFVVXNSVUZCUlR0blFrRkRla1FzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVZFc1dVRkJXU3hGUVVGUkxHRkJRV0VzUTBGQlF5eERRVUZETzFsQlEzSkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOeVF6dFJRVU5FTEU5QlFVOHNTMEZCU3l4RFFVRkRPMGxCUTJwQ0xFTkJRVU03U1VGVFR5eGpRVUZqTEVOQlFVTXNVVUZCTWtJN1VVRkRPVU1zU1VGQlNTeFJRVUZSTEVOQlFVTXNTVUZCU1N4SFFVRkhMRkZCUVZFc1EwRkJReXhKUVVGSkxFbEJRVWtzVVVGQlVTeERRVUZETEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJReTlFTEV0QlFVc3NUVUZCVFN4UlFVRlJMRWxCUVVrc1VVRkJVU3hEUVVGRExFdEJRVXNzUlVGQlJUdG5Ra0ZEYmtNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRk8yOUNRVU01UWl4SlFVRkpMRU5CUVVNc1RVRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlRTeFJRVUZSTEVOQlFVTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03YjBKQlEzWkdMRTFCUVUwN2FVSkJRMVE3WVVGRFNqdFRRVU5LTzBsQlEwd3NRMEZCUXp0RFFVTktPMEZCTjFKRUxEQkNRVFpTUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5mdW5jdGlvbiBCRE9UZXN0RmFjdG9yeShjdG9yKSB7XG4gICAgbGV0IEJET1Rlc3QgPSBjbGFzcyBCRE9UZXN0IGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSAndGVzdCc7XG4gICAgICAgICAgICB0aGlzLnRlc3RlciA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIG9uVGVzdENoYW5nZShjaGFuZ2VkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3QgY2hhbmdlZFwiLCBjaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBvblRlc3RlckluaXQoaW5pdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgaW5pdFwiLCBpbml0LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBvblRlc3RlckNoYW5nZShjaGFuZ2VkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RlciBjaGFuZ2VkXCIsIGNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIG9uVGVzdGVyQWRkKGFkZGVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RlciBhZGRlZFwiLCBhZGRlZCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgb25UZXN0ZXJSZW1vdmUocmVtb3ZlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgcmVtb3ZlZFwiLCByZW1vdmVkLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLmF0dHJpYnV0ZSh7IGF1dG9TYXZlOiB0cnVlIH0pLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgQkRPVGVzdC5wcm90b3R5cGUsIFwidGl0bGVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEud2F0Y2hlZCgpLCBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKChfdHlwZSkgPT4gW1N0cmluZ10pLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSlcbiAgICBdLCBCRE9UZXN0LnByb3RvdHlwZSwgXCJ0ZXN0ZXJcIiwgdm9pZCAwKTtcbiAgICBCRE9UZXN0ID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3Rvcih7IGlzQWJzdHJhY3Q6IHRydWUsIGNvbGxlY3Rpb25OYW1lOiBcIkJET1Rlc3RcIiB9KVxuICAgIF0sIEJET1Rlc3QpO1xuICAgIHJldHVybiBCRE9UZXN0O1xufVxuZXhwb3J0cy5CRE9UZXN0RmFjdG9yeSA9IEJET1Rlc3RGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFZHVnpkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2Ylc5a1pXeHpMMEpFVDFSbGMzUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNjMFJCUVRSRk8wRkJWVFZGTEZOQlFXZENMR05CUVdNc1EwRkJjME1zU1VGQlZ6dEpRVk16UlN4SlFVRmxMRTlCUVU4c1IwRkJkRUlzVFVGQlpTeFBRVUZSTEZOQlFWRXNTVUZCU1R0UlFVRnVRenM3V1VGUk1FTXNWVUZCU3l4SFFVRlhMRTFCUVUwc1EwRkJRenRaUVZGWUxGZEJRVTBzUjBGQllTeEZRVUZGTEVOQlFVTTdVVUY1UkRWRkxFTkJRVU03VVVGb1JHRXNXVUZCV1N4RFFVRkRMRTlCUVhWQ08xbEJRekZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1kwRkJZeXhGUVVGRkxFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTXZReXhEUVVGRE8xRkJVMU1zV1VGQldTeERRVUZETEVsQlFXOUNPMWxCUTNaRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNZVUZCWVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU16UXl4RFFVRkRPMUZCVTFNc1kwRkJZeXhEUVVGRExFOUJRWFZDTzFsQlF6VkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEycEVMRU5CUVVNN1VVRlRVeXhYUVVGWExFTkJRVU1zUzBGQmNVSTdXVUZEZGtNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eGpRVUZqTEVWQlFVVXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRemRETEVOQlFVTTdVVUZUVXl4alFVRmpMRU5CUVVNc1QwRkJkVUk3V1VGRE5VTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhuUWtGQlowSXNSVUZCUlN4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRGFrUXNRMEZCUXp0TFFVVktMRU5CUVVFN1NVRnFSV3RETzFGQlFUbENMSE5DUVVGVExFTkJRVU1zUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RlFVRkZMRU5CUVVNN096QkRRVUVyUWp0SlFWRnNRanRSUVVFeFF5eHZRa0ZCVHl4RlFVRkZMRVZCUVVVc2MwSkJRVk1zUTBGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6czdNa05CUVRoQ08wbEJhRUkzUkN4UFFVRlBPMUZCUkhKQ0xEUkNRVUZsTEVOQlFVTXNSVUZCUlN4VlFVRlZMRVZCUVVVc1NVRkJTU3hGUVVGRkxHTkJRV01zUlVGQlJTeFRRVUZUTEVWQlFVVXNRMEZCUXp0UFFVTnNSQ3hQUVVGUExFTkJlVVZ5UWp0SlFVTkVMRTlCUVU4c1QwRkJUeXhEUVVGRE8wRkJSVzVDTEVOQlFVTTdRVUZ5UmtRc2QwTkJjVVpESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5mdW5jdGlvbiBCRE9UZXN0MUZhY3RvcnkoY3Rvcikge1xuICAgIGxldCBCRE9UZXN0MSA9IGNsYXNzIEJET1Rlc3QxIGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSAndGVzdCc7XG4gICAgICAgIH1cbiAgICAgICAgZG9Tb21ldGhpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJsb2xcIjtcbiAgICAgICAgfVxuICAgICAgICBvbk9oYUluaXQoX3ZhbHVlKSB7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoeyBkZXNjcmlwdGlvbjogXCJ0ZXN0ZXIuLi5cIiB9KSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIEJET1Rlc3QxLnByb3RvdHlwZSwgXCJ0aXRsZVwiLCB2b2lkIDApO1xuICAgIEJET1Rlc3QxID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3Rvcih7IGlzQWJzdHJhY3Q6IHRydWUsIGNvbGxlY3Rpb25OYW1lOiBcIkJET1Rlc3QxXCIgfSlcbiAgICBdLCBCRE9UZXN0MSk7XG4gICAgcmV0dXJuIEJET1Rlc3QxO1xufVxuZXhwb3J0cy5CRE9UZXN0MUZhY3RvcnkgPSBCRE9UZXN0MUZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQVkdWemRERXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMjF2WkdWc2N5OUNSRTlVWlhOME1TNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGRFFTeHpSRUZCYlVVN1FVRlRia1VzVTBGQlowSXNaVUZCWlN4RFFVRnJSQ3hKUVVGWE8wbEJWWGhHTEVsQlFXVXNVVUZCVVN4SFFVRjJRaXhOUVVGbExGRkJRVk1zVTBGQlVTeEpRVUZKTzFGQlFYQkRPenRaUVZGdlJDeFZRVUZMTEVkQlFWY3NUVUZCVFN4RFFVRkRPMUZCYzBJelJTeERRVUZETzFGQlpGVXNWMEZCVnp0WlFVTmtMRTlCUVU4c1MwRkJTeXhEUVVGRE8xRkJRMnBDTEVOQlFVTTdVVUZUVXl4VFFVRlRMRU5CUVVNc1RVRkJZenRSUVVWc1F5eERRVUZETzB0QlEwb3NRMEZCUVR0SlFYUkNORU03VVVGQmVFTXNjMEpCUVZNc1EwRkJReXhGUVVGRkxGZEJRVmNzUlVGQlJTeFhRVUZYTEVWQlFVVXNRMEZCUXpzN01rTkJRU3RDTzBsQlVqVkVMRkZCUVZFN1VVRkVkRUlzTkVKQlFXVXNRMEZCUXl4RlFVRkZMRlZCUVZVc1JVRkJSU3hKUVVGSkxFVkJRVVVzWTBGQll5eEZRVUZGTEZWQlFWVXNSVUZCUlN4RFFVRkRPMDlCUTI1RUxGRkJRVkVzUTBFNFFuUkNPMGxCUTBRc1QwRkJUeXhSUVVGUkxFTkJRVU03UVVGRGNFSXNRMEZCUXp0QlFURkRSQ3d3UTBFd1EwTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgQ2h1bmtfMSA9IHJlcXVpcmUoXCIuL0NodW5rXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmxldCBDZWxsID0gY2xhc3MgQ2VsbCB7XG4gICAgY29uc3RydWN0b3IoX3BhcmFtcykge1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLmNhdmUgPSAwO1xuICAgICAgICB0aGlzLnJpdmVyID0gMDtcbiAgICAgICAgdGhpcy5odW1pZGl0eSA9IDA7XG4gICAgICAgIHRoaXMudGVtcGVyYXR1cmUgPSAwO1xuICAgICAgICB0aGlzLmNodW5rID0gbmV3IENodW5rXzEuQ2h1bmsoKTtcbiAgICB9XG59O1xuQ2VsbCA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIENvbnN0UGFyYW1zICE9PSBcInVuZGVmaW5lZFwiICYmIENvbnN0UGFyYW1zKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3RdKVxuXSwgQ2VsbCk7XG5leHBvcnRzLkNlbGwgPSBDZWxsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTJWc2JDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiVzlrWld4ekwwTmxiR3d1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCTEcxRFFVRm5RenRCUVVOb1F5eHpSRUZCZDBRN1FVRlRlRVFzU1VGQllTeEpRVUZKTEVkQlFXcENMRTFCUVdFc1NVRkJTVHRKUVhsRVlpeFpRVUZaTEU5QlFUSkNPMUZCYkVSb1F5eE5RVUZETEVkQlFWY3NRMEZCUXl4RFFVRkRPMUZCVVdRc1RVRkJReXhIUVVGWExFTkJRVU1zUTBGQlF6dFJRVkZrTEZOQlFVa3NSMEZCVnl4RFFVRkRMRU5CUVVNN1VVRlJha0lzVlVGQlN5eEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFWRnNRaXhoUVVGUkxFZEJRVmNzUTBGQlF5eERRVUZETzFGQlVYSkNMR2RDUVVGWExFZEJRVmNzUTBGQlF5eERRVUZETzFGQlVYaENMRlZCUVVzc1IwRkJWU3hKUVVGSkxHRkJRVXNzUlVGQlJTeERRVUZETzBsQlJWTXNRMEZCUXp0RFFVTXZReXhEUVVGQk8wRkJNVVJaTEVsQlFVazdTVUZFYUVJc05FSkJRV1VzUlVGQlJUdHBSVUV3UkZFc1YwRkJWeXh2UWtGQldDeFhRVUZYTzBkQmVrUjRRaXhKUVVGSkxFTkJNRVJvUWp0QlFURkVXU3h2UWtGQlNTSjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBvcGVuX3NpbXBsZXhfbm9pc2VfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJvcGVuLXNpbXBsZXgtbm9pc2VcIikpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IENlbGxfMSA9IHJlcXVpcmUoXCIuL0NlbGxcIik7XG5jbGFzcyBDaHVuayB7XG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDY0O1xuICAgICAgICB0aGlzLmdyaWQgPSBbXTtcbiAgICAgICAgdGhpcy5zaW1wbGV4Q2F2ZSA9IG5ldyBvcGVuX3NpbXBsZXhfbm9pc2VfMS5kZWZhdWx0KDEpO1xuICAgICAgICB0aGlzLnNpbXBsZXhSaXZlciA9IG5ldyBvcGVuX3NpbXBsZXhfbm9pc2VfMS5kZWZhdWx0KDIpO1xuICAgICAgICB0aGlzLnNpbXBsZXhUZW1wZXJhdHVyZSA9IG5ldyBvcGVuX3NpbXBsZXhfbm9pc2VfMS5kZWZhdWx0KDMpO1xuICAgICAgICB0aGlzLnNpbXBsZXhIdW1pZGl0eSA9IG5ldyBvcGVuX3NpbXBsZXhfbm9pc2VfMS5kZWZhdWx0KDQpO1xuICAgICAgICB1dGlsXzEubWVyZ2UodGhpcywgcGFyYW1zKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUdyaWQoKTtcbiAgICB9XG4gICAgZ2VuZXJhdGVHcmlkKCkge1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLnNpemU7IHJvdysrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ3JpZFtyb3ddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnB1c2goW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5zaXplOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHhDb29yZGluYXRlID0gY29sICsgdGhpcy54ICogdGhpcy5zaXplO1xuICAgICAgICAgICAgICAgIGNvbnN0IHlDb29yZGluYXRlID0gcm93ICsgdGhpcy55ICogdGhpcy5zaXplO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFtyb3ddLnB1c2gobmV3IENlbGxfMS5DZWxsKHtcbiAgICAgICAgICAgICAgICAgICAgeDogeENvb3JkaW5hdGUsXG4gICAgICAgICAgICAgICAgICAgIHk6IHlDb29yZGluYXRlLFxuICAgICAgICAgICAgICAgICAgICBjYXZlOiB0aGlzLnNpbXBsZXhDYXZlLm5vaXNlMkQoeENvb3JkaW5hdGUgLyAxMDAsIHlDb29yZGluYXRlIC8gMTAwKSxcbiAgICAgICAgICAgICAgICAgICAgcml2ZXI6IHRoaXMuc2ltcGxleFJpdmVyLm5vaXNlMkQoeENvb3JkaW5hdGUgLyA1MDAsIHlDb29yZGluYXRlIC8gNTAwKSxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGVyYXR1cmU6IHRoaXMuc2ltcGxleFRlbXBlcmF0dXJlLm5vaXNlMkQoeENvb3JkaW5hdGUgLyAyNTAwLCB5Q29vcmRpbmF0ZSAvIDI1MDApLFxuICAgICAgICAgICAgICAgICAgICBodW1pZGl0eTogdGhpcy5zaW1wbGV4SHVtaWRpdHkubm9pc2UyRCh4Q29vcmRpbmF0ZSAvIDI1MDAsIHlDb29yZGluYXRlIC8gMjUwMCksXG4gICAgICAgICAgICAgICAgICAgIGNodW5rOiB0aGlzXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5DaHVuayA9IENodW5rO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTJoMWJtc3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMjF2WkdWc2N5OURhSFZ1YXk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN4dlJrRkJhMFE3UVVGRGJFUXNNRU5CUVhkRE8wRkJRM2hETEdsRFFVRTRRanRCUVZFNVFpeE5RVUZoTEV0QlFVczdTVUZ6UldRc1dVRkJXU3hOUVVFeVFqdFJRUzlFYUVNc1RVRkJReXhIUVVGWExFTkJRVU1zUTBGQlF6dFJRVkZrTEUxQlFVTXNSMEZCVnl4RFFVRkRMRU5CUVVNN1VVRlJaQ3hUUVVGSkxFZEJRVmtzUlVGQlJTeERRVUZETzFGQlUyaENMRk5CUVVrc1IwRkJZU3hGUVVGRkxFTkJRVU03VVVGVGNFSXNaMEpCUVZjc1IwRkJjVUlzU1VGQlNTdzBRa0ZCWjBJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVk40UkN4cFFrRkJXU3hIUVVGeFFpeEpRVUZKTERSQ1FVRm5RaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlUzcEVMSFZDUVVGclFpeEhRVUZ4UWl4SlFVRkpMRFJDUVVGblFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCVXk5RUxHOUNRVUZsTEVkQlFYRkNMRWxCUVVrc05FSkJRV2RDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkhiRVVzV1VGQlN5eERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOd1FpeEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNN1NVRkRlRUlzUTBGQlF6dEpRVkZUTEZsQlFWazdVVUZEYkVJc1MwRkJTeXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRlpMRWxCUVVrc1EwRkJReXhKUVVGTExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVTdXVUZEYUVRc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1owSkJRMnBDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzJGQlEzUkNPMWxCUTBRc1MwRkJTeXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRlpMRWxCUVVrc1EwRkJReXhKUVVGTExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVTdaMEpCUTJoRUxFMUJRVTBzVjBGQlZ5eEhRVUZITEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGWExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTTdaMEpCUTNKRUxFMUJRVTBzVjBGQlZ5eEhRVUZITEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGWExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTTdaMEpCUlhKRUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVObUxFbEJRVWtzVjBGQlNTeERRVUZETzI5Q1FVTk1MRU5CUVVNc1JVRkJSU3hYUVVGWE8yOUNRVU5rTEVOQlFVTXNSVUZCUlN4WFFVRlhPMjlDUVVOa0xFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFZEJRVWNzUjBGQlJ5eEZRVUZGTEZkQlFWY3NSMEZCUnl4SFFVRkhMRU5CUVVNN2IwSkJRM0JGTEV0QlFVc3NSVUZCUlN4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVkQlFVY3NSMEZCUnl4RlFVRkZMRmRCUVZjc1IwRkJSeXhIUVVGSExFTkJRVU03YjBKQlEzUkZMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUjBGQlJ5eEpRVUZKTEVWQlFVVXNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJRenR2UWtGRGNFWXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NSMEZCUnl4SlFVRkpMRVZCUVVVc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF6dHZRa0ZET1VVc1MwRkJTeXhGUVVGRkxFbEJRVWs3YVVKQlEyUXNRMEZCUXl4RFFVTk1MRU5CUVVNN1lVRkRURHRUUVVOS08wbEJRMHdzUTBGQlF6dERRVU5LTzBGQmVFZEVMSE5DUVhkSFF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIEJET0NvbmZpZ0ZhY3RvcnkoY3Rvcikge1xuICAgIGNsYXNzIEJET0NvbmZpZyBleHRlbmRzIGN0b3Ige1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlcyA9IFtcIi86bmFtZVwiXTtcbiAgICAgICAgICAgIHRoaXMuanNvbk9ubHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBCRE9Db25maWc7XG59XG5leHBvcnRzLkJET0NvbmZpZ0ZhY3RvcnkgPSBCRE9Db25maWdGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFEyOXVabWxuTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5eWIzVjBaWE12UWtSUFEyOXVabWxuTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJVMEVzVTBGQlowSXNaMEpCUVdkQ0xFTkJRWE5ETEVsQlFWYzdTVUZWTjBVc1RVRkJaU3hUUVVGVkxGTkJRVkVzU1VGQlNUdFJRVUZ5UXpzN1dVRlBWeXhYUVVGTkxFZEJRV0VzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0WlFVOHpRaXhoUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlF6bENMRU5CUVVNN1MwRkJRVHRKUVVWRUxFOUJRVThzVTBGQlV5eERRVUZETzBGQlEzSkNMRU5CUVVNN1FVRTFRa1FzTkVOQk5FSkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBCRE9HYW1lTG9iYnlGYWN0b3J5KGN0b3IpIHtcbiAgICBjbGFzcyBCRE9HYW1lTG9iYnkgZXh0ZW5kcyBjdG9yIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXJOYW1lU3BhY2UgPSAnLyc7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlU3RyaW5nID0gcmVxdWlyZSgnfmJkby92aWV3cy9nYW1lTG9iYnkubmprJyk7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9oYTogJ09PT09PSEFBQUFBQUFBISEhJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCRE9HYW1lTG9iYnkuYXR0YWNoVG9TZXJ2ZXJzID0gW1wiR2FtZVNlcnZlclwiXTtcbiAgICByZXR1cm4gQkRPR2FtZUxvYmJ5O1xufVxuZXhwb3J0cy5CRE9HYW1lTG9iYnlGYWN0b3J5ID0gQkRPR2FtZUxvYmJ5RmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBSMkZ0WlV4dlltSjVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzl5YjNWMFpYTXZRa1JQUjJGdFpVeHZZbUo1TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJWVUVzVTBGQlowSXNiVUpCUVcxQ0xFTkJRWE5ETEVsQlFWYzdTVUZUYUVZc1RVRkJaU3haUVVGaExGTkJRVkVzU1VGQlNUdFJRVUY0UXpzN1dVRm5RbGNzYjBKQlFXVXNSMEZCUnl4SFFVRkhMRU5CUVVNN1dVRlJia0lzYlVKQlFXTXNSMEZCWVN4UFFVRlBMRU5CUVVNc01FSkJRVEJDTEVOQlFVTXNRMEZCUXp0UlFXTTNSU3hEUVVGRE8xRkJUR0VzUzBGQlN5eERRVUZETEdOQlFXTTdXVUZETVVJc1QwRkJUenRuUWtGRFNDeEhRVUZITEVWQlFVVXNiVUpCUVcxQ08yRkJRek5DTEVOQlFVTTdVVUZEVGl4RFFVRkRPenRKUVRWQ1lTdzBRa0ZCWlN4SFFVRmhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03U1VFclFqZEVMRTlCUVU4c1dVRkJXU3hEUVVGRE8wRkJRM2hDTEVOQlFVTTdRVUZzUkVRc2EwUkJhMFJESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gQkRPSG9tZUZhY3RvcnkoY3Rvcikge1xuICAgIGNsYXNzIEJET0hvbWUgZXh0ZW5kcyBjdG9yIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXJOYW1lU3BhY2UgPSAnLyc7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlU3RyaW5nID0gcmVxdWlyZSgnfmJkby92aWV3cy9ob21lLm5qaycpO1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvaGE6ICdlbmRsaWNoIHp1IEhhdXNlID0pJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCRE9Ib21lLmF0dGFjaFRvU2VydmVycyA9IFtcIldlYlNlcnZlclwiXTtcbiAgICByZXR1cm4gQkRPSG9tZTtcbn1cbmV4cG9ydHMuQkRPSG9tZUZhY3RvcnkgPSBCRE9Ib21lRmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBTRzl0WlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmNtOTFkR1Z6TDBKRVQwaHZiV1V1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRlZRU3hUUVVGblFpeGpRVUZqTEVOQlFYTkRMRWxCUVZjN1NVRlRNMFVzVFVGQlpTeFBRVUZSTEZOQlFWRXNTVUZCU1R0UlFVRnVRenM3V1VGblFsY3NiMEpCUVdVc1IwRkJSeXhIUVVGSExFTkJRVU03V1VGUmJrSXNiVUpCUVdNc1IwRkJZU3hQUVVGUExFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1EwRkJRenRSUVdONFJTeERRVUZETzFGQlRHRXNTMEZCU3l4RFFVRkRMR05CUVdNN1dVRkRNVUlzVDBGQlR6dG5Ra0ZEU0N4SFFVRkhMRVZCUVVVc2NVSkJRWEZDTzJGQlF6ZENMRU5CUVVNN1VVRkRUaXhEUVVGRE96dEpRVFZDWVN4MVFrRkJaU3hIUVVGaExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdTVUVyUWpWRUxFOUJRVThzVDBGQlR5eERRVUZETzBGQlEyNUNMRU5CUVVNN1FVRnNSRVFzZDBOQmEwUkRJbjA9IiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vc291cmNlL2FwcC91dGlscyBzeW5jIHJlY3Vyc2l2ZVwiOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xucmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuY29uc3QgQmFzZUNvbnN0cnVjdG9yXzEgPSByZXF1aXJlKFwifmJkby9saWIvQmFzZUNvbnN0cnVjdG9yXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgZnJhbWV3b3JrXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9mcmFtZXdvcmtcIik7XG5jb25zdCB0eXBlX2dyYXBocWxfMSA9IHJlcXVpcmUoXCJ0eXBlLWdyYXBocWxcIik7XG5mdW5jdGlvbiB3YXRjaGVkKHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgZGVjb3JhdG9yU2V0dGluZ3MgPSBmcmFtZXdvcmtfMS5iZWZvcmVEZXNjcmlwdG9yKHRhcmdldCwgc3RyaW5nS2V5LCBcImRlZmluZWRXYXRjaGVyc1wiLCB7IHBhcmFtcyB9KTtcbiAgICAgICAgZnJhbWV3b3JrXzEuY3JlYXRlRGVjb3JhdG9yRGVzY3JpcHRvcih0YXJnZXQsIHN0cmluZ0tleSwgXCJXYXRjaGVkXCIsIGRlY29yYXRvclNldHRpbmdzKTtcbiAgICB9O1xufVxuZXhwb3J0cy53YXRjaGVkID0gd2F0Y2hlZDtcbmZ1bmN0aW9uIHByb3BlcnR5KHR5cGVGdW5jLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IGtleS50b1N0cmluZygpO1xuICAgICAgICBpZiAodHlwZUZ1bmMgJiYgISh0eXBlRnVuYyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSAmJiAhcGFyYW1zKVxuICAgICAgICAgICAgcGFyYW1zID0gdHlwZUZ1bmM7XG4gICAgICAgIGlmICh0eXBlRnVuYyAmJiAhKHR5cGVGdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pKVxuICAgICAgICAgICAgdHlwZUZ1bmMgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghcGFyYW1zIHx8ICEocGFyYW1zIGluc3RhbmNlb2YgT2JqZWN0KSlcbiAgICAgICAgICAgIHBhcmFtcyA9IHt9O1xuICAgICAgICBjb25zdCBkZWNvcmF0b3JTZXR0aW5ncyA9IGZyYW1ld29ya18xLmJlZm9yZURlc2NyaXB0b3IodGFyZ2V0LCBzdHJpbmdLZXksIFwiZGVmaW5lZFByb3BlcnRpZXNcIiwgeyB0eXBlRnVuYywgcGFyYW1zIH0pO1xuICAgICAgICBmcmFtZXdvcmtfMS5jcmVhdGVEZWNvcmF0b3JEZXNjcmlwdG9yKHRhcmdldCwgc3RyaW5nS2V5LCBcIlByb3BlcnR5XCIsIGRlY29yYXRvclNldHRpbmdzKTtcbiAgICB9O1xufVxuZXhwb3J0cy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuZnVuY3Rpb24gYXR0cmlidXRlKHR5cGVGdW5jLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IGtleS50b1N0cmluZygpO1xuICAgICAgICBpZiAodHlwZUZ1bmMgJiYgISh0eXBlRnVuYyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSAmJiAhcGFyYW1zKVxuICAgICAgICAgICAgcGFyYW1zID0gdHlwZUZ1bmM7XG4gICAgICAgIGlmICh0eXBlRnVuYyAmJiAhKHR5cGVGdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pKVxuICAgICAgICAgICAgdHlwZUZ1bmMgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghcGFyYW1zIHx8ICEocGFyYW1zIGluc3RhbmNlb2YgT2JqZWN0KSlcbiAgICAgICAgICAgIHBhcmFtcyA9IHt9O1xuICAgICAgICBpZiAodHlwZUZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBwYXJhbXMpXG4gICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5GaWVsZCh0eXBlRnVuYywgcGFyYW1zKSh0YXJnZXQsIGtleSk7XG4gICAgICAgIGVsc2UgaWYgKHR5cGVGdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pXG4gICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5GaWVsZCh0eXBlRnVuYykodGFyZ2V0LCBrZXkpO1xuICAgICAgICBlbHNlIGlmIChwYXJhbXMpXG4gICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5GaWVsZChwYXJhbXMpKHRhcmdldCwga2V5KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuRmllbGQoKSh0YXJnZXQsIGtleSk7XG4gICAgICAgIGNvbnN0IGRlY29yYXRvclNldHRpbmdzID0gZnJhbWV3b3JrXzEuYmVmb3JlRGVzY3JpcHRvcih0YXJnZXQsIHN0cmluZ0tleSwgXCJkZWZpbmVkQXR0cmlidXRlc1wiLCB7IHR5cGVGdW5jLCBwYXJhbXMgfSk7XG4gICAgICAgIGZyYW1ld29ya18xLmNyZWF0ZURlY29yYXRvckRlc2NyaXB0b3IodGFyZ2V0LCBzdHJpbmdLZXksIFwiQXR0cmlidXRlXCIsIGRlY29yYXRvclNldHRpbmdzKTtcbiAgICB9O1xufVxuZXhwb3J0cy5hdHRyaWJ1dGUgPSBhdHRyaWJ1dGU7XG5mdW5jdGlvbiBiYXNlQ29uc3RydWN0b3IobmFtZSwgcGFyYW1zLCBpbmRleCA9IDApIHtcbiAgICByZXR1cm4gKGN0b3IpID0+IHtcbiAgICAgICAgY29uc3QgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGN0b3IpO1xuICAgICAgICBpZiAoZnJhbWV3b3JrXzEuaXNCYXNlQ29uc3RydWN0b3IocHJvdG90eXBlKSlcbiAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihjdG9yLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKSk7XG4gICAgICAgIGlmIChuYW1lICYmICh0eXBlb2YgbmFtZSA9PT0gXCJudW1iZXJcIikpXG4gICAgICAgICAgICBpbmRleCA9IG5hbWU7XG4gICAgICAgIGlmIChuYW1lICYmICh0eXBlb2YgbmFtZSA9PT0gXCJvYmplY3RcIikpXG4gICAgICAgICAgICBwYXJhbXMgPSBuYW1lO1xuICAgICAgICBpZiAobmFtZSAmJiAoKHR5cGVvZiBuYW1lID09PSBcIm9iamVjdFwiKSB8fCAodHlwZW9mIG5hbWUgPT09IFwibnVtYmVyXCIpKSlcbiAgICAgICAgICAgIG5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChwYXJhbXMgJiYgKHR5cGVvZiBwYXJhbXMgPT09IFwibnVtYmVyXCIpKVxuICAgICAgICAgICAgaW5kZXggPSBwYXJhbXM7XG4gICAgICAgIGlmIChwYXJhbXMgJiYgKHR5cGVvZiBwYXJhbXMgPT09IFwibnVtYmVyXCIpKVxuICAgICAgICAgICAgcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoXCJpc0JET01vZGVsXCIgaW4gY3Rvcikge1xuICAgICAgICAgICAgaWYgKG5hbWUgJiYgKHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiKSAmJiBwYXJhbXMgJiYgKHR5cGVvZiBwYXJhbXMgPT09IFwib2JqZWN0XCIpKSB7XG4gICAgICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuT2JqZWN0VHlwZShuYW1lLCBwYXJhbXMpKGN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobmFtZSAmJiAodHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuT2JqZWN0VHlwZShuYW1lKShjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhcmFtcyAmJiAodHlwZW9mIHBhcmFtcyA9PT0gXCJvYmplY3RcIikpIHtcbiAgICAgICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5PYmplY3RUeXBlKHBhcmFtcykoY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuT2JqZWN0VHlwZSgpKGN0b3IpO1xuICAgICAgICAgICAgaWYgKHBhcmFtcyAmJiAodHlwZW9mIHBhcmFtcyA9PT0gXCJvYmplY3RcIikpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2Q29sbGVjdGlvbk5hbWUgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGN0b3IsIFwiY29sbGVjdGlvbk5hbWVcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkRhdGFiYXNlTmFtZSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoY3RvciwgXCJkYXRhYmFzZU5hbWVcIik7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YShjdG9yLCBcImNvbGxlY3Rpb25OYW1lXCIsIHBhcmFtcy5jb2xsZWN0aW9uTmFtZSB8fCBwcmV2Q29sbGVjdGlvbk5hbWUgfHwgXCJkZWZhdWx0XCIpO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEoY3RvciwgXCJkYXRhYmFzZU5hbWVcIiwgcGFyYW1zLmRhdGFiYXNlTmFtZSB8fCBwcmV2RGF0YWJhc2VOYW1lIHx8IFwiZGVmYXVsdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zICYmICh0eXBlb2YgcGFyYW1zID09PSBcIm9iamVjdFwiICYmIHBhcmFtcy5pc0Fic3RyYWN0KSlcbiAgICAgICAgICAgIHJldHVybiBjdG9yO1xuICAgICAgICBjb25zdCBCYXNlQ29uc3RydWN0b3IgPSBCYXNlQ29uc3RydWN0b3JfMS5iYXNlQ29uc3RydWN0b3JGYWN0b3J5KGN0b3IsIGluZGV4KTtcbiAgICAgICAgaWYgKGVudmlyb25tZW50XzEuaXNCcm93c2VyKCkgJiYgY3Rvci5pc0Jhc2VDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh1dGlsXzEucGFzY2FsQ2FzZTJrZWJhYkNhc2UoY3Rvci5uYW1lKSwgQmFzZUNvbnN0cnVjdG9yLCB7XG4gICAgICAgICAgICAgICAgZXh0ZW5kczogQmFzZUNvbnN0cnVjdG9yLmV4dGVuZHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBCYXNlQ29uc3RydWN0b3I7XG4gICAgfTtcbn1cbmV4cG9ydHMuYmFzZUNvbnN0cnVjdG9yID0gYmFzZUNvbnN0cnVjdG9yO1xuZXhwb3J0cy5xdWVyeSA9IHR5cGVfZ3JhcGhxbF8xLlF1ZXJ5O1xuZXhwb3J0cy5hcmcgPSB0eXBlX2dyYXBocWxfMS5Bcmc7XG5leHBvcnRzLmFyZ3MgPSB0eXBlX2dyYXBocWxfMS5BcmdzO1xuZXhwb3J0cy5yZXNvbHZlciA9IHR5cGVfZ3JhcGhxbF8xLlJlc29sdmVyO1xuZXhwb3J0cy5yb290ID0gdHlwZV9ncmFwaHFsXzEuUm9vdDtcbmV4cG9ydHMubXV0YXRpb24gPSB0eXBlX2dyYXBocWxfMS5NdXRhdGlvbjtcbmV4cG9ydHMuc3Vic2NyaXB0aW9uID0gdHlwZV9ncmFwaHFsXzEuU3Vic2NyaXB0aW9uO1xuZXhwb3J0cy5wdWJTdWIgPSB0eXBlX2dyYXBocWxfMS5QdWJTdWI7XG5leHBvcnRzLmlucHV0VHlwZSA9IHR5cGVfZ3JhcGhxbF8xLklucHV0VHlwZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpHVmpiM0poZEc5eWN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZkWFJwYkhNdlpHVmpiM0poZEc5eWN5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxEUkNRVUV3UWp0QlFVTXhRaXd3UTBGQmRVUTdRVUZEZGtRc2QwUkJRVzFFTzBGQlNXNUVMRGhFUVVGM1JqdEJRVU40Uml4clJFRkJhMFU3UVVGRGJFVXNiMFJCUVhOSE8wRkJSWFJITEN0RFFWbHpRanRCUVd0Q2RFSXNVMEZCWjBJc1QwRkJUeXhEUVVGRExGTkJRWGxDTEVWQlFVVTdTVUZETDBNc1QwRkJUeXhEUVVGRExFMUJRVmNzUlVGQlJTeEhRVUZ2UWl4RlFVRkZMRVZCUVVVN1VVRkRla01zVFVGQlRTeFRRVUZUTEVkQlFVY3NSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJRMnBETEUxQlFVMHNhVUpCUVdsQ0xFZEJRVWNzTkVKQlFXZENMRU5CUVVNc1RVRkJUU3hGUVVGRkxGTkJRVk1zUlVGQlJTeHBRa0ZCYVVJc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETjBZc2NVTkJRWGxDTEVOQlFVTXNUVUZCVFN4RlFVRkZMRk5CUVZNc1JVRkJSU3hUUVVGVExFVkJRVVVzYVVKQlFXbENMRU5CUVVNc1EwRkJRenRKUVVNdlJTeERRVUZETEVOQlFVTTdRVUZEVGl4RFFVRkRPMEZCVGtRc01FSkJUVU03UVVGblFrUXNVMEZCWjBJc1VVRkJVU3hEUVVGRExGRkJRVEpDTEVWQlFVVXNUVUZCZDBJN1NVRkRNVVVzVDBGQlR5eERRVUZETEUxQlFWY3NSVUZCUlN4SFFVRnZRaXhGUVVGRkxFVkJRVVU3VVVGRGVrTXNUVUZCVFN4VFFVRlRMRWRCUVVjc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlIycERMRWxCUVVrc1VVRkJVU3hKUVVGSkxFTkJRVU1zUTBGQlF5eFJRVUZSTEZsQlFWa3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTk8xbEJRVVVzVFVGQlRTeEhRVUZITEZGQlFWRXNRMEZCUXp0UlFVTTVSU3hKUVVGSkxGRkJRVkVzU1VGQlNTeERRVUZETEVOQlFVTXNVVUZCVVN4WlFVRlpMRkZCUVZFc1EwRkJRenRaUVVGRkxGRkJRVkVzUjBGQlJ5eFRRVUZUTEVOQlFVTTdVVUZEZEVVc1NVRkJTU3hEUVVGRExFMUJRVTBzU1VGQlNTeERRVUZETEVOQlFVTXNUVUZCVFN4WlFVRlpMRTFCUVUwc1EwRkJRenRaUVVGRkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZIZUVRc1RVRkJUU3hwUWtGQmFVSXNSMEZCUnl3MFFrRkJaMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNVMEZCVXl4RlFVRkZMRzFDUVVGdFFpeEZRVUZGTEVWQlFVVXNVVUZCVVN4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGVrY3NjVU5CUVhsQ0xFTkJRVU1zVFVGQlRTeEZRVUZGTEZOQlFWTXNSVUZCUlN4VlFVRlZMRVZCUVVVc2FVSkJRV2xDTEVOQlFVTXNRMEZCUXp0SlFVTm9SaXhEUVVGRExFTkJRVU03UVVGRFRpeERRVUZETzBGQllrUXNORUpCWVVNN1FVRnhRa1FzVTBGQlowSXNVMEZCVXl4RFFVRkRMRkZCUVRKQ0xFVkJRVVVzVFVGQmVVSTdTVUZETlVVc1QwRkJUeXhEUVVGRExFMUJRVmNzUlVGQlJTeEhRVUZ2UWl4RlFVRkZMRVZCUVVVN1VVRkRla01zVFVGQlRTeFRRVUZUTEVkQlFVY3NSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJSMnBETEVsQlFVa3NVVUZCVVN4SlFVRkpMRU5CUVVNc1EwRkJReXhSUVVGUkxGbEJRVmtzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5PMWxCUVVVc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF6dFJRVU01UlN4SlFVRkpMRkZCUVZFc1NVRkJTU3hEUVVGRExFTkJRVU1zVVVGQlVTeFpRVUZaTEZGQlFWRXNRMEZCUXp0WlFVRkZMRkZCUVZFc1IwRkJSeXhUUVVGVExFTkJRVU03VVVGRGRFVXNTVUZCU1N4RFFVRkRMRTFCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU1zVFVGQlRTeFpRVUZaTEUxQlFVMHNRMEZCUXp0WlFVRkZMRTFCUVUwc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGSGVFUXNTVUZCU1N4UlFVRlJMRmxCUVZrc1VVRkJVU3hKUVVGSkxFMUJRVTA3V1VGQlJTeHZRa0ZCU3l4RFFVRkRMRkZCUVZFc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkROVVVzU1VGQlNTeFJRVUZSTEZsQlFWa3NVVUZCVVR0WlFVRkZMRzlDUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJReTlFTEVsQlFVa3NUVUZCVFR0WlFVRkZMRzlDUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE96dFpRVU4yUXl4dlFrRkJTeXhGUVVGRkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUnpGQ0xFMUJRVTBzYVVKQlFXbENMRWRCUVVjc05FSkJRV2RDTEVOQlFVTXNUVUZCVFN4RlFVRkZMRk5CUVZNc1JVRkJSU3h0UWtGQmJVSXNSVUZCUlN4RlFVRkZMRkZCUVZFc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEzcEhMSEZEUVVGNVFpeERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc1YwRkJWeXhGUVVGRkxHbENRVUZwUWl4RFFVRkRMRU5CUVVNN1NVRkRha1lzUTBGQlF5eERRVUZETzBGQlEwNHNRMEZCUXp0QlFXNUNSQ3c0UWtGdFFrTTdRVUZqUkN4VFFVRm5RaXhsUVVGbExFTkJRVU1zU1VGQmEwSXNSVUZCUlN4TlFVRm5RaXhGUVVGRkxGRkJRV2RDTEVOQlFVTTdTVUZGYmtZc1QwRkJUeXhEUVVGRExFbEJRVk1zUlVGQlJTeEZRVUZGTzFGQlEycENMRTFCUVUwc1UwRkJVeXhIUVVGSExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRPVU1zU1VGQlNTdzJRa0ZCYVVJc1EwRkJReXhUUVVGVExFTkJRVU03V1VGQlJTeE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkhhRWNzU1VGQlNTeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWxCUVVrc1MwRkJTeXhSUVVGUkxFTkJRVU03V1VGQlJTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTNKRUxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4SlFVRkpMRXRCUVVzc1VVRkJVU3hEUVVGRE8xbEJRVVVzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTjBSQ3hKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNUMEZCVHl4SlFVRkpMRXRCUVVzc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVsQlFVa3NTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJRenRaUVVGRkxFbEJRVWtzUjBGQlJ5eFRRVUZUTEVOQlFVTTdVVUZEZWtZc1NVRkJTU3hOUVVGTkxFbEJRVWtzUTBGQlF5eFBRVUZQTEUxQlFVMHNTMEZCU3l4UlFVRlJMRU5CUVVNN1dVRkJSU3hMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETzFGQlF6TkVMRWxCUVVrc1RVRkJUU3hKUVVGSkxFTkJRVU1zVDBGQlR5eE5RVUZOTEV0QlFVc3NVVUZCVVN4RFFVRkRPMWxCUVVVc1RVRkJUU3hIUVVGSExGTkJRVk1zUTBGQlF6dFJRVVV2UkN4SlFVRkpMRmxCUVZrc1NVRkJTU3hKUVVGSkxFVkJRVVU3V1VGRmRFSXNTVUZCU1N4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFbEJRVWtzUzBGQlN5eFJRVUZSTEVOQlFVTXNTVUZCU1N4TlFVRk5MRWxCUVVrc1EwRkJReXhQUVVGUExFMUJRVTBzUzBGQlN5eFJRVUZSTEVOQlFVTXNSVUZCUlR0blFrRkRPVVVzZVVKQlFWVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdZVUZEYkVNN2FVSkJRVTBzU1VGQlNTeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWxCUVVrc1MwRkJTeXhSUVVGUkxFTkJRVU1zUlVGQlJUdG5Ra0ZETTBNc2VVSkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRoUVVNeFFqdHBRa0ZCVFN4SlFVRkpMRTFCUVUwc1NVRkJTU3hEUVVGRExFOUJRVThzVFVGQlRTeExRVUZMTEZGQlFWRXNRMEZCUXl4RlFVRkZPMmRDUVVNdlF5eDVRa0ZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJGQlF6VkNPenRuUWtGQlRTeDVRa0ZCVlN4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGSE1VSXNTVUZCU1N4TlFVRk5MRWxCUVVrc1EwRkJReXhQUVVGUExFMUJRVTBzUzBGQlN5eFJRVUZSTEVOQlFVTXNSVUZCUlR0blFrRkRlRU1zVFVGQlRTeHJRa0ZCYTBJc1IwRkJSeXh6UWtGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlN4blFrRkJaMElzUTBGQlF5eERRVUZETzJkQ1FVTXZSQ3hOUVVGTkxHZENRVUZuUWl4SFFVRkhMSE5DUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTEdOQlFXTXNRMEZCUXl4RFFVRkRPMmRDUVVNelJDeDVRa0ZCWXl4RFFVRkRMRWxCUVVrc1JVRkJSU3huUWtGQlowSXNSVUZCUlN4TlFVRk5MRU5CUVVNc1kwRkJZeXhKUVVGSkxHdENRVUZyUWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRE8yZENRVU5xUnl4NVFrRkJZeXhEUVVGRExFbEJRVWtzUlVGQlJTeGpRVUZqTEVWQlFVVXNUVUZCVFN4RFFVRkRMRmxCUVZrc1NVRkJTU3huUWtGQlowSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJRenRoUVVNNVJqdFRRVU5LTzFGQlEwUXNTVUZCU1N4TlFVRk5MRWxCUVVrc1EwRkJReXhQUVVGUExFMUJRVTBzUzBGQlN5eFJRVUZSTEVsQlFVa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJRenRaUVVGRkxFOUJRVThzU1VGQlNTeERRVUZETzFGQlJUZEZMRTFCUVUwc1pVRkJaU3hIUVVGSExIZERRVUZ6UWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVVUxUkN4SlFVRkpMSFZDUVVGVExFVkJRVVVzU1VGQlNTeEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZPMWxCUTNKRExHTkJRV01zUTBGQlF5eE5RVUZOTEVOQlFVTXNNa0pCUVc5Q0xFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMR1ZCUVdVc1JVRkJSVHRuUWtGRGNFVXNUMEZCVHl4RlFVRkZMR1ZCUVdVc1EwRkJReXhQUVVGUE8yRkJRMjVETEVOQlFVTXNRMEZCUXp0VFFVTk9PMUZCUTBRc1QwRkJUeXhsUVVGbExFTkJRVU03U1VGRE0wSXNRMEZCUXl4RFFVRkRPMEZCUTA0c1EwRkJRenRCUVRGRFJDd3dRMEV3UTBNN1FVRkZWU3hSUVVGQkxFdEJRVXNzUjBGQlJ5eHZRa0ZCU3l4RFFVRkRPMEZCUTJRc1VVRkJRU3hIUVVGSExFZEJRVWNzYTBKQlFVY3NRMEZCUXp0QlFVTldMRkZCUVVFc1NVRkJTU3hIUVVGSExHMUNRVUZKTEVOQlFVTTdRVUZEV2l4UlFVRkJMRkZCUVZFc1IwRkJSeXgxUWtGQlVTeERRVUZETzBGQlEzQkNMRkZCUVVFc1NVRkJTU3hIUVVGSExHMUNRVUZKTEVOQlFVTTdRVUZEV2l4UlFVRkJMRkZCUVZFc1IwRkJSeXgxUWtGQlVTeERRVUZETzBGQlEzQkNMRkZCUVVFc1dVRkJXU3hIUVVGSExESkNRVUZaTEVOQlFVTTdRVUZETlVJc1VVRkJRU3hOUVVGTkxFZEJRVWNzY1VKQlFVMHNRMEZCUXp0QlFVTm9RaXhSUVVGQkxGTkJRVk1zUjBGQlJ5eDNRa0ZCVXl4RFFVRkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgbnVuanVja3MgPSB0c2xpYl8xLl9faW1wb3J0U3RhcihyZXF1aXJlKFwibnVuanVja3NcIikpO1xuZnVuY3Rpb24gaXNOb2RlSlMoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc05vZGVKUyA9IGlzTm9kZUpTO1xuZnVuY3Rpb24gaXNCcm93c2VyKCkge1xuICAgIHJldHVybiAhaXNOb2RlSlMoKTtcbn1cbmV4cG9ydHMuaXNCcm93c2VyID0gaXNCcm93c2VyO1xuZXhwb3J0cy50ZW1wbGF0ZUVudmlyb25tZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBub0NhY2hlID0gZ2xvYmFsLnByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGNvbnN0IGVudiA9IG5ldyBudW5qdWNrcy5FbnZpcm9ubWVudCh7XG4gICAgICAgIGdldFNvdXJjZTogKHBhdGgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHNyYzogcmVxdWlyZShwYXRoKSwgcGF0aCwgbm9DYWNoZSB9O1xuICAgICAgICB9XG4gICAgfSwgeyBub0NhY2hlIH0pO1xuICAgIGVudi5hZGRGaWx0ZXIoJ2pzb24nLCAodmFsdWUsIHNwYWNlcykgPT4ge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBudW5qdWNrcy5ydW50aW1lLlNhZmVTdHJpbmcpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IG51bmp1Y2tzLnJ1bnRpbWUuU2FmZVN0cmluZyhKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgc3BhY2VzKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVudjtcbn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laVzUyYVhKdmJtMWxiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDNWMGFXeHpMMlZ1ZG1seWIyNXRaVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZCTERKRVFVRnhRenRCUVZGeVF5eFRRVUZuUWl4UlFVRlJPMGxCUTNCQ0xFbEJRVWtzVDBGQlR5eE5RVUZOTEV0QlFVc3NWMEZCVnl4SlFVRkpMRTlCUVU4c1QwRkJUeXhMUVVGTExGRkJRVkVzUlVGQlJUdFJRVU01UkN4UFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObU8wbEJRMFFzVDBGQlR5eExRVUZMTEVOQlFVTTdRVUZEYWtJc1EwRkJRenRCUVV4RUxEUkNRVXRETzBGQlVVUXNVMEZCWjBJc1UwRkJVenRKUVVOeVFpeFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1FVRkRka0lzUTBGQlF6dEJRVVpFTERoQ1FVVkRPMEZCUzFrc1VVRkJRU3h0UWtGQmJVSXNSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSVHRKUVVOeVF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEV0QlFVc3NZVUZCWVN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTTNSU3hOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRha01zVTBGQlV5eEZRVUZGTEVOQlFVTXNTVUZCV1N4RlFVRkZMRVZCUVVVN1dVRkRlRUlzVDBGQlR5eEZRVUZGTEVkQlFVY3NSVUZCUlN4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUTJwRUxFTkJRVU03UzBGRFNpeEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVWb1FpeEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVWQlFVVXNSVUZCUlR0UlFVTndReXhKUVVGSkxFdEJRVXNzV1VGQldTeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1JVRkJSVHRaUVVNNVF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xTkJRelZDTzFGQlEwUXNUMEZCVHl4SlFVRkpMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJoR0xFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEwZ3NUMEZCVHl4SFFVRkhMRU5CUVVNN1FVRkRaaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQmluZGluZ18xID0gcmVxdWlyZShcIn5iZG8vbGliL0JpbmRpbmdcIik7XG5jb25zdCBBdHRyaWJ1dGVfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9BdHRyaWJ1dGVcIik7XG5jb25zdCBQcm9wZXJ0eV8xID0gcmVxdWlyZShcIn5iZG8vbGliL1Byb3BlcnR5XCIpO1xuY29uc3QgV2F0Y2hlZF8xID0gcmVxdWlyZShcIn5iZG8vbGliL1dhdGNoZWRcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuZnVuY3Rpb24gYmVmb3JlRGVzY3JpcHRvcih0YXJnZXQsIGtleSwgbURhdGFOYW1lLCBwYXJhbXMpIHtcbiAgICBpZiAoIVJlZmxlY3QuaGFzTWV0YWRhdGEobURhdGFOYW1lLCB0YXJnZXQpKVxuICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRhcmdldCwgbURhdGFOYW1lLCBuZXcgTWFwKCkpO1xuICAgIGNvbnN0IG1hcCA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGFyZ2V0LCBtRGF0YU5hbWUpO1xuICAgIGNvbnN0IG9sZERlY29yYXRvclNldHRpbmdzID0gbWFwLmdldChrZXkpIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0gdXRpbF8xLm1lcmdlKG9sZERlY29yYXRvclNldHRpbmdzLCBwYXJhbXMpO1xuICAgIG1hcC5zZXQoa2V5LCBzZXR0aW5ncyk7XG4gICAgcmV0dXJuIHNldHRpbmdzO1xufVxuZXhwb3J0cy5iZWZvcmVEZXNjcmlwdG9yID0gYmVmb3JlRGVzY3JpcHRvcjtcbmZ1bmN0aW9uIGdldHRlcihpbnN0YW5jZSwga2V5LCBucyA9IFwiXCIpIHtcbiAgICBsZXQgc3RyaW5nS2V5ID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgaWYgKG5zKVxuICAgICAgICBzdHJpbmdLZXkgPSBgJHtuc306JHtrZXl9YDtcbiAgICBpZiAoIW1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwibm9ybWFsRnVuY3Rpb25hbGl0eVwiKSkge1xuICAgICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGluc3RhbmNlLCBcImRlZmF1bHRTZXR0aW5nc1wiKSB8fCB7fTtcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGRlZmF1bHRTZXR0aW5ncywgc3RyaW5nS2V5KTtcbiAgICB9XG4gICAgY29uc3QgbURhdGEgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEoaW5zdGFuY2UsIHN0cmluZ0tleSk7XG4gICAgaWYgKG1EYXRhKVxuICAgICAgICByZXR1cm4gbURhdGEudmFsdWVPZigpO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5leHBvcnRzLmdldHRlciA9IGdldHRlcjtcbmZ1bmN0aW9uIHNldHRlcihpbnN0YW5jZSwga2V5LCBuZXdWYWwsIG5zID0gXCJcIikge1xuICAgIGxldCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICBpZiAobnMpXG4gICAgICAgIHN0cmluZ0tleSA9IGAke25zfToke2tleX1gO1xuICAgIGlmICghbnMgJiYgaW5zdGFuY2Vbc3RyaW5nS2V5XSA9PT0gbmV3VmFsKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKCFtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGluc3RhbmNlLCBcIm5vcm1hbEZ1bmN0aW9uYWxpdHlcIikpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShpbnN0YW5jZSwgXCJkZWZhdWx0U2V0dGluZ3NcIikgfHwge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGVmYXVsdFNldHRpbmdzLCB7IFtzdHJpbmdLZXldOiBuZXdWYWwgfSk7XG4gICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEoaW5zdGFuY2UsIFwiZGVmYXVsdFNldHRpbmdzXCIsIGRlZmF1bHRTZXR0aW5ncyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbURhdGEgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEoaW5zdGFuY2UsIHN0cmluZ0tleSk7XG4gICAgaWYgKG5ld1ZhbCBpbnN0YW5jZW9mIEJpbmRpbmdfMS5CaW5kaW5nKSB7XG4gICAgICAgIG5ld1ZhbC5pbnN0YWxsKGluc3RhbmNlLCBrZXkpO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIG1EYXRhLnNldFZhbHVlKG5ld1ZhbCk7XG59XG5leHBvcnRzLnNldHRlciA9IHNldHRlcjtcbmZ1bmN0aW9uIGNyZWF0ZURlY29yYXRvckRlc2NyaXB0b3IodGFyZ2V0LCBrZXksIHR5cGUsIHBhcmFtcykge1xuICAgIGNvbnN0IHByb3BEZXNjID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgIGNvbnN0IHN0cmluZ0tleSA9IGtleS50b1N0cmluZygpO1xuICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBrZXkpO1xuICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBkZWNvcmF0b3JHZXR0ZXIoKSB7XG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBnZXR0ZXIodGhhdCwgc3RyaW5nS2V5KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBkZWNvcmF0b3JTZXR0ZXIobmV3VmFsKSB7XG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMsIGtleSk7XG4gICAgICAgICAgICBsZXQgZmllbGQ7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJBdHRyaWJ1dGVcIikge1xuICAgICAgICAgICAgICAgIGZpZWxkID0gbmV3IEF0dHJpYnV0ZV8xLkF0dHJpYnV0ZSh0aGF0LCBzdHJpbmdLZXksIHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIlByb3BlcnR5XCIpIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA9IG5ldyBQcm9wZXJ0eV8xLlByb3BlcnR5KHRoYXQsIHN0cmluZ0tleSwgcGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBmaWVsZCA9IG5ldyBXYXRjaGVkXzEuV2F0Y2hlZCh0aGF0LCBzdHJpbmdLZXksIHBhcmFtcyk7XG4gICAgICAgICAgICBpZiAobURhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoKG1EYXRhIGluc3RhbmNlb2YgQXR0cmlidXRlXzEuQXR0cmlidXRlIHx8IG1EYXRhIGluc3RhbmNlb2YgUHJvcGVydHlfMS5Qcm9wZXJ0eSkgJiYgZmllbGQgaW5zdGFuY2VvZiBXYXRjaGVkXzEuV2F0Y2hlZCkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZC5zZXRTdWJPYmplY3QobURhdGEpO1xuICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEodGhpcywgc3RyaW5nS2V5LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChmaWVsZCBpbnN0YW5jZW9mIFByb3BlcnR5XzEuUHJvcGVydHkgfHwgZmllbGQgaW5zdGFuY2VvZiBBdHRyaWJ1dGVfMS5BdHRyaWJ1dGUpICYmIG1EYXRhIGluc3RhbmNlb2YgV2F0Y2hlZF8xLldhdGNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtRGF0YS5zdWJPYmplY3QpXG4gICAgICAgICAgICAgICAgICAgICAgICBtRGF0YS5zZXRTdWJPYmplY3QoZmllbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEodGhpcywgc3RyaW5nS2V5LCBmaWVsZCk7XG4gICAgICAgICAgICBpZiAoKCh0eXBlID09PSBcIkF0dHJpYnV0ZVwiIHx8IHR5cGUgPT09IFwiUHJvcGVydHlcIikgJiYgIShtRGF0YSBpbnN0YW5jZW9mIFdhdGNoZWRfMS5XYXRjaGVkKSkgfHwgdHlwZSA9PT0gXCJXYXRjaGVkXCIpIHtcbiAgICAgICAgICAgICAgICBzZXR0ZXIodGhhdCwgc3RyaW5nS2V5LCBuZXdWYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BEZXNjICYmIHByb3BEZXNjLnNldCAmJiBwcm9wRGVzYy5zZXQubmFtZSA9PT0gXCJkZWNvcmF0b3JTZXR0ZXJcIilcbiAgICAgICAgICAgICAgICBwcm9wRGVzYy5zZXQuY2FsbCh0aGlzLCBuZXdWYWwpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbn1cbmV4cG9ydHMuY3JlYXRlRGVjb3JhdG9yRGVzY3JpcHRvciA9IGNyZWF0ZURlY29yYXRvckRlc2NyaXB0b3I7XG5mdW5jdGlvbiBpc0Jhc2VDb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiAmJiB2YWx1ZS5uYW1lID09PSBcIkJhc2VDb25zdHJ1Y3RvclwiKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgdmFsdWUuY29uc3RydWN0b3IubmFtZSA9PT0gXCJCYXNlQ29uc3RydWN0b3JcIilcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc0Jhc2VDb25zdHJ1Y3RvciA9IGlzQmFzZUNvbnN0cnVjdG9yO1xuZnVuY3Rpb24gaXNSZWZlcmVuY2VTdHJpbmcodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgcmVmUmVnRXggPSAvX3JlZmVyZW5jZVxcOltBLVp8MC05fF98JF0qXFw6W0EtWnwwLTl8XFwtfF9dKi9naTtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZS5tYXRjaChyZWZSZWdFeCkpLnZhbHVlT2YoKTtcbn1cbmV4cG9ydHMuaXNSZWZlcmVuY2VTdHJpbmcgPSBpc1JlZmVyZW5jZVN0cmluZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpuSmhiV1YzYjNKckxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOTFkR2xzY3k5bWNtRnRaWGR2Y21zdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN3NFEwRkJNa003UVVGRE0wTXNhMFJCUVdsRk8wRkJRMnBGTEdkRVFVRTRSRHRCUVVNNVJDdzRRMEZCTWtRN1FVRkZNMFFzTUVOQlFYZERPMEZCUTNoRExHdEVRVUVyUnp0QlFYbERMMGNzVTBGQlowSXNaMEpCUVdkQ0xFTkJTemxDTEUxQlFWTXNSVUZCUlN4SFFVRk5MRVZCUVVVc1UwRkJXU3hGUVVGRkxFMUJRVk03U1VGRmVFTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVTBGQlV5eEZRVUZGTEUxQlFVMHNRMEZCUXp0UlFVRkZMSGxDUVVGakxFTkJRVU1zVFVGQlRTeEZRVUZGTEZOQlFWTXNSVUZCUlN4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRE1VWXNUVUZCVFN4SFFVRkhMRWRCUVVjc2MwSkJRVmNzUTBGQlF5eE5RVUZOTEVWQlFVVXNVMEZCVXl4RFFVRnRReXhEUVVGRE8wbEJRemRGTEUxQlFVMHNiMEpCUVc5Q0xFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03U1VGRGFFUXNUVUZCVFN4UlFVRlJMRWRCUVVjc1dVRkJTeXhEUVVGRExHOUNRVUZ2UWl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRM0pFTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzBsQlEzWkNMRTlCUVU4c1VVRkJVU3hEUVVGRE8wRkJRM0JDTEVOQlFVTTdRVUZpUkN3MFEwRmhRenRCUVdGRUxGTkJRV2RDTEUxQlFVMHNRMEZCY1VRc1VVRkJWeXhGUVVGRkxFZEJRVTBzUlVGQlJTeExRVUZoTEVWQlFVVTdTVUZETTBjc1NVRkJTU3hUUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUXk5Q0xFbEJRVWtzUlVGQlJUdFJRVUZGTEZOQlFWTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF6dEpRVU51UXl4SlFVRkpMRU5CUVVNc2MwSkJRVmNzUTBGQlF5eFJRVUZSTEVWQlFVVXNjVUpCUVhGQ0xFTkJRVU1zUlVGQlJUdFJRVU12UXl4TlFVRk5MR1ZCUVdVc1IwRkJSeXh6UWtGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4cFFrRkJhVUlzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTjJSU3hQUVVGUExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNaVUZCWlN4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRE8wdEJRMnhFTzBsQlEwUXNUVUZCVFN4TFFVRkxMRWRCUVVjc09FSkJRVzFDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRE8wbEJRM1pFTEVsQlFVa3NTMEZCU3p0UlFVRkZMRTlCUVU4c1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzBsQlEyeERMRTlCUVU4c1UwRkJVeXhEUVVGRE8wRkJRM0pDTEVOQlFVTTdRVUZXUkN4M1FrRlZRenRCUVdWRUxGTkJRV2RDTEUxQlFVMHNRMEZGWjBJc1VVRkJWeXhGUVVGRkxFZEJRVTBzUlVGQlJTeE5RVUZ4UWl4RlFVRkZMRXRCUVdFc1JVRkJSVHRKUVVjM1JpeEpRVUZKTEZOQlFWTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03U1VGREwwSXNTVUZCU1N4RlFVRkZPMUZCUVVVc1UwRkJVeXhIUVVGSExFZEJRVWNzUlVGQlJTeEpRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUjI1RExFbEJRVWtzUTBGQlF5eEZRVUZGTEVsQlFVa3NVVUZCVVN4RFFVRkpMRk5CUVZNc1EwRkJReXhMUVVGTExFMUJRVTA3VVVGQlJTeFBRVUZQTzBsQlIzSkVMRWxCUVVrc1EwRkJReXh6UWtGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4eFFrRkJjVUlzUTBGQlF5eEZRVUZGTzFGQlF5OURMRTFCUVUwc1pVRkJaU3hIUVVGSExITkNRVUZYTEVOQlFVTXNVVUZCVVN4RlFVRkZMR2xDUVVGcFFpeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUTNaRkxFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNaVUZCWlN4RlFVRkZMRVZCUVVVc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTNoRUxIbENRVUZqTEVOQlFVTXNVVUZCVVN4RlFVRkZMR2xDUVVGcFFpeEZRVUZGTEdWQlFXVXNRMEZCUXl4RFFVRkRPMUZCUXpkRUxFOUJRVTg3UzBGRFZqdEpRVWRFTEUxQlFVMHNTMEZCU3l4SFFVRkhMRGhDUVVGdFFpeERRVUZETEZGQlFWRXNSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenRKUVVWMlJDeEpRVUZKTEUxQlFVMHNXVUZCV1N4cFFrRkJUeXhGUVVGRk8xRkJRek5DTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzB0QlEycERPenRSUVVGTkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkRiRU1zUTBGQlF6dEJRWHBDUkN4M1FrRjVRa003UVVGWFJDeFRRVUZuUWl4NVFrRkJlVUlzUTBGSFZDeE5RVUZUTEVWQlFVVXNSMEZCVFN4RlFVRkZMRWxCUVcxQ0xFVkJRVVVzVFVGQlV6dEpRVVUzUlN4TlFVRk5MRkZCUVZFc1IwRkJSeXhQUVVGUExFTkJRVU1zZDBKQlFYZENMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzBsQlF5OUVMRTFCUVUwc1UwRkJVeXhIUVVGSExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVVnFReXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEUxQlFVMHNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOd1F5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFVkJRVVU3VVVGRGFFTXNSMEZCUnl4RlFVRkZMRk5CUVZNc1pVRkJaVHRaUVVONlFpeE5RVUZOTEVsQlFVa3NSMEZCVVN4SlFVRkpMRU5CUVVNN1dVRkRka0lzVDBGQlR5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRMjVETEVOQlFVTTdVVUZEUkN4SFFVRkhMRVZCUVVVc1UwRkJVeXhsUVVGbExFTkJRVU1zVFVGQlZ6dFpRVU55UXl4TlFVRk5MRWxCUVVrc1IwRkJVU3hKUVVGSkxFTkJRVU03V1VGRGRrSXNUVUZCVFN4TFFVRkxMRWRCUVVjc09FSkJRVzFDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJSemRETEVsQlFVa3NTMEZCU3l4RFFVRkRPMWxCUTFZc1NVRkJTU3hKUVVGSkxFdEJRVXNzVjBGQlZ5eEZRVUZGTzJkQ1FVTjBRaXhMUVVGTExFZEJRVWNzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hUUVVGVExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdZVUZEYkVRN2FVSkJRVTBzU1VGQlNTeEpRVUZKTEV0QlFVc3NWVUZCVlN4RlFVRkZPMmRDUVVNMVFpeExRVUZMTEVkQlFVY3NTVUZCU1N4dFFrRkJVU3hEUVVGRExFbEJRVWtzUlVGQlJTeFRRVUZUTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1lVRkRha1E3TzJkQ1FVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxHbENRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRk5CUVZNc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFpRVWR3UkN4SlFVRkpMRXRCUVVzc1JVRkJSVHRuUWtGRFVDeEpRVUZKTEVOQlFVTXNTMEZCU3l4WlFVRlpMSEZDUVVGVExFbEJRVWtzUzBGQlN5eFpRVUZaTEcxQ1FVRlJMRU5CUVVNc1NVRkJTU3hMUVVGTExGbEJRVmtzYVVKQlFVOHNSVUZCUlR0dlFrRkRka1lzUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenR2UWtGRE1VSXNhVU5CUVhOQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEZOQlFWTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRwUWtGRGJFUTdjVUpCUVUwc1NVRkJTU3hEUVVGRExFdEJRVXNzV1VGQldTeHRRa0ZCVVN4SlFVRkpMRXRCUVVzc1dVRkJXU3h4UWtGQlV5eERRVUZETEVsQlFVa3NTMEZCU3l4WlFVRlpMR2xDUVVGUExFVkJRVVU3YjBKQlF6bEdMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV6dDNRa0ZCUlN4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzJsQ1FVTnVSRHRoUVVOS096dG5Ra0ZCVFN4cFEwRkJjMElzUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVXl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJRM1JFTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1MwRkJTeXhYUVVGWExFbEJRVWtzU1VGQlNTeExRVUZMTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhMUVVGTExGbEJRVmtzYVVKQlFVOHNRMEZCUXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hMUVVGTExGTkJRVk1zUlVGQlJUdG5Ra0ZEZEVjc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeFRRVUZUTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1lVRkRia003V1VGRFJDeEpRVUZKTEZGQlFWRXNTVUZCU1N4UlFVRlJMRU5CUVVNc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4TFFVRkxMR2xDUVVGcFFqdG5Ra0ZCUlN4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkROMGNzUTBGQlF6dFJRVU5FTEZWQlFWVXNSVUZCUlN4SlFVRkpPMUZCUTJoQ0xGbEJRVmtzUlVGQlJTeEpRVUZKTzB0QlEzSkNMRU5CUVVNc1EwRkJRenRCUVVOUUxFTkJRVU03UVVFelEwUXNPRVJCTWtORE8wRkJVMFFzVTBGQlowSXNhVUpCUVdsQ0xFTkJRVU1zUzBGQllUdEpRVU16UXl4SlFVRkpMRTlCUVU4c1MwRkJTeXhMUVVGTExGVkJRVlVzU1VGQlNTeExRVUZMTEVOQlFVTXNTVUZCU1N4TFFVRkxMR2xDUVVGcFFqdFJRVUZGTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTJwR0xFbEJRVWtzUzBGQlN5eFpRVUZaTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUzBGQlN5eHBRa0ZCYVVJN1VVRkJSU3hQUVVGUExFbEJRVWtzUTBGQlF6dEpRVU42Uml4UFFVRlBMRXRCUVVzc1EwRkJRenRCUVVOcVFpeERRVUZETzBGQlNrUXNPRU5CU1VNN1FVRlRSQ3hUUVVGblFpeHBRa0ZCYVVJc1EwRkJReXhMUVVGVk8wbEJRM2hETEVsQlFVa3NUMEZCVHl4TFFVRkxMRXRCUVVzc1VVRkJVVHRSUVVGRkxFOUJRVThzUzBGQlN5eERRVUZETzBsQlF6VkRMRTFCUVUwc1VVRkJVU3hIUVVGSExDdERRVUVyUXl4RFFVRkRPMGxCUTJwRkxFOUJRVThzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0QlFVTndSQ3hEUVVGRE8wRkJTa1FzT0VOQlNVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBkZWZpbmVNZXRhZGF0YSh0YXJnZXQsIGtleSwgdmFsKSB7XG4gICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShrZXksIHZhbCwgdGFyZ2V0KTtcbn1cbmV4cG9ydHMuZGVmaW5lTWV0YWRhdGEgPSBkZWZpbmVNZXRhZGF0YTtcbmZ1bmN0aW9uIGdldE1ldGFkYXRhKHRhcmdldCwga2V5KSB7XG4gICAgcmV0dXJuIFJlZmxlY3QuZ2V0TWV0YWRhdGEoa2V5LCB0YXJnZXQpO1xufVxuZXhwb3J0cy5nZXRNZXRhZGF0YSA9IGdldE1ldGFkYXRhO1xuZnVuY3Rpb24gZGVmaW5lV2lsZGNhcmRNZXRhZGF0YSh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKGtleSwgdmFsdWUsIHRhcmdldCk7XG59XG5leHBvcnRzLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEgPSBkZWZpbmVXaWxkY2FyZE1ldGFkYXRhO1xuZnVuY3Rpb24gZ2V0V2lsZGNhcmRNZXRhZGF0YSh0YXJnZXQsIGtleSkge1xuICAgIHJldHVybiBSZWZsZWN0LmdldE1ldGFkYXRhKGtleSwgdGFyZ2V0KTtcbn1cbmV4cG9ydHMuZ2V0V2lsZGNhcmRNZXRhZGF0YSA9IGdldFdpbGRjYXJkTWV0YWRhdGE7XG5mdW5jdGlvbiBnZXREZXNpZ25UeXBlKHRhcmdldCwga2V5KSB7XG4gICAgcmV0dXJuIFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCB0YXJnZXQsIGtleSk7XG59XG5leHBvcnRzLmdldERlc2lnblR5cGUgPSBnZXREZXNpZ25UeXBlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldWMFlXUmhkR0V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDNWMGFXeHpMMjFsZEdGa1lYUmhMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQk9FbEJMRk5CUVdkQ0xHTkJRV01zUTBGQkswTXNUVUZCVXl4RlFVRkZMRWRCUVUwc1JVRkJSU3hIUVVGclFqdEpRVU01Unl4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkROME1zUTBGQlF6dEJRVVpFTEhkRFFVVkRPMEZCVjBRc1UwRkJaMElzVjBGQlZ5eERRVUVyUXl4TlFVRlRMRVZCUVVVc1IwRkJUVHRKUVVOMlJpeFBRVUZQTEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzBGQlF6VkRMRU5CUVVNN1FVRkdSQ3hyUTBGRlF6dEJRVlZFTEZOQlFXZENMSE5DUVVGelFpeERRVUZETEUxQlFXTXNSVUZCUlN4SFFVRmpMRVZCUVVVc1MwRkJWVHRKUVVNM1JTeFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdRVUZETDBNc1EwRkJRenRCUVVaRUxIZEVRVVZETzBGQlZVUXNVMEZCWjBJc2JVSkJRVzFDTEVOQlFVTXNUVUZCWXl4RlFVRkZMRWRCUVdNN1NVRkRPVVFzVDBGQlR5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dEJRVU0xUXl4RFFVRkRPMEZCUmtRc2EwUkJSVU03UVVGVlJDeFRRVUZuUWl4aFFVRmhMRU5CUVVNc1RVRkJZeXhGUVVGRkxFZEJRVmM3U1VGRGNrUXNUMEZCVHl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExHRkJRV0VzUlVGQlJTeE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRNMFFzUTBGQlF6dEJRVVpFTEhORFFVVkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuY29uc3Qgb25fY2hhbmdlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwib24tY2hhbmdlXCIpKTtcbnZhciBsb2Rhc2hfMSA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5leHBvcnRzLm1lcmdlID0gbG9kYXNoXzEubWVyZ2U7XG5leHBvcnRzLm9taXQgPSBsb2Rhc2hfMS5vbWl0O1xuZXhwb3J0cy5pc0Z1bmN0aW9uID0gbG9kYXNoXzEuaXNGdW5jdGlvbjtcbmV4cG9ydHMuaXNPYmplY3QgPSBsb2Rhc2hfMS5pc09iamVjdDtcbmV4cG9ydHMucGlja0J5ID0gbG9kYXNoXzEucGlja0J5O1xuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGxvZGFzaF8xLmlzVW5kZWZpbmVkO1xuZXhwb3J0cy5pc0VxdWFsID0gbG9kYXNoXzEuaXNFcXVhbDtcbmV4cG9ydHMuaXNTdHJpbmcgPSBsb2Rhc2hfMS5pc1N0cmluZztcbmV4cG9ydHMuaXNOdW1iZXIgPSBsb2Rhc2hfMS5pc051bWJlcjtcbmV4cG9ydHMuaXNBcnJheSA9IGxvZGFzaF8xLmlzQXJyYXk7XG5leHBvcnRzLmRpZmZlcmVuY2UgPSBsb2Rhc2hfMS5kaWZmZXJlbmNlO1xuZXhwb3J0cy5kZWJvdW5jZSA9IGxvZGFzaF8xLmRlYm91bmNlO1xuZnVuY3Rpb24gdWNGaXJzdChzdHIpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuZXhwb3J0cy51Y0ZpcnN0ID0gdWNGaXJzdDtcbmZ1bmN0aW9uIGNhbWVsQ2FzZTJrZWJhYkNhc2Uoc3RyKSB7XG4gICAgc3RyID0gc3RyLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFthLXowLTldfCg/PVtBLVpdKSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG59XG5leHBvcnRzLmNhbWVsQ2FzZTJrZWJhYkNhc2UgPSBjYW1lbENhc2Uya2ViYWJDYXNlO1xuZnVuY3Rpb24gcGFzY2FsQ2FzZTJrZWJhYkNhc2Uoc3RyKSB7XG4gICAgc3RyID0gdWNGaXJzdChzdHIpO1xuICAgIHJldHVybiBjYW1lbENhc2Uya2ViYWJDYXNlKHN0cik7XG59XG5leHBvcnRzLnBhc2NhbENhc2Uya2ViYWJDYXNlID0gcGFzY2FsQ2FzZTJrZWJhYkNhc2U7XG5mdW5jdGlvbiByZW1vdmVFbGVtZW50RnJvbUFycmF5KGFycmF5LCBlbGVtZW50KSB7XG4gICAgY29uc3QgaW5kZXggPSBhcnJheS5pbmRleE9mKGVsZW1lbnQpO1xuICAgIGlmIChpbmRleCA+PSAwKVxuICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xufVxuZXhwb3J0cy5yZW1vdmVFbGVtZW50RnJvbUFycmF5ID0gcmVtb3ZlRWxlbWVudEZyb21BcnJheTtcbmZ1bmN0aW9uIGdldFByb3RvdHlwZU5hbWVzUmVjdXJzaXZlKG9iamVjdCwgcHJvdG90eXBlcyA9IFtdKSB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKHByb3RvdHlwZSkge1xuICAgICAgICBwcm90b3R5cGVzLnB1c2gocHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgICAgICBnZXRQcm90b3R5cGVOYW1lc1JlY3Vyc2l2ZShwcm90b3R5cGUsIHByb3RvdHlwZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvdG90eXBlcztcbn1cbmV4cG9ydHMuZ2V0UHJvdG90eXBlTmFtZXNSZWN1cnNpdmUgPSBnZXRQcm90b3R5cGVOYW1lc1JlY3Vyc2l2ZTtcbmZ1bmN0aW9uIGluY2x1ZGVzTWVtYmVyT2ZMaXN0KHNlYXJjaCwgbGlzdCwgZXh0ZW5zaW9uID0gJycpIHtcbiAgICBmb3IgKGNvbnN0IG1lbWJlciBvZiBsaXN0KSB7XG4gICAgICAgIGlmIChzZWFyY2guaW5jbHVkZXMoYCR7bWVtYmVyfSR7ZXh0ZW5zaW9ufWApKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmluY2x1ZGVzTWVtYmVyT2ZMaXN0ID0gaW5jbHVkZXNNZW1iZXJPZkxpc3Q7XG5mdW5jdGlvbiBjb25zdHJ1Y3RUeXBlT2ZIVE1MQXR0cmlidXRlKG9iamVjdCwga2V5KSB7XG4gICAgaWYgKCFlbnZpcm9ubWVudF8xLmlzQnJvd3NlcigpKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgdHlwZSA9IG1ldGFkYXRhXzEuZ2V0RGVzaWduVHlwZShvYmplY3QsIGtleSk7XG4gICAgY29uc3QgYXR0clZhbHVlID0gb2JqZWN0LmdldEF0dHJpYnV0ZShrZXkpO1xuICAgIGxldCB2YWx1ZVRvU2V0ID0gYXR0clZhbHVlO1xuICAgIGlmIChhdHRyVmFsdWUgJiYgdHlwZSAmJiB0eXBlLm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoW1wiTnVtYmVyXCIsIFwiQm9vbGVhblwiLCBcIk9iamVjdFwiLCBcIkFycmF5XCJdLmluY2x1ZGVzKHR5cGUubmFtZSkpIHtcbiAgICAgICAgICAgIHZhbHVlVG9TZXQgPSBKU09OLnBhcnNlKGF0dHJWYWx1ZS5yZXBsYWNlKC8nL2csICdcIicpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZS5uYW1lID09PSBcIkJhc2VDb25zdHJ1Y3RvclwiKSB7XG4gICAgICAgICAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBvYmouY2xhc3NOYW1lO1xuICAgICAgICAgICAgaWYgKCFjbGFzc05hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2xhc3NOYW1lIGlzIG1pc3NpbmcgaW4gY29tcG9uZW50IGF0dHJpYnV0ZSB2YWx1ZVwiKTtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmouY2xhc3NOYW1lO1xuICAgICAgICAgICAgdmFsdWVUb1NldCA9IG5ldyAodHlwZS5uYW1lKShvYmopO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh2YWx1ZVRvU2V0ICYmIHR5cGUgJiYgdmFsdWVUb1NldC5jb25zdHJ1Y3Rvci5uYW1lICE9PSB0eXBlLm5hbWUpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImF0dHJpYnV0ZSB0eXBlIGVxdWFscyBub3QgZGVmaW5lZCB0eXBlXCIpO1xuICAgIHJldHVybiB2YWx1ZVRvU2V0O1xufVxuZXhwb3J0cy5jb25zdHJ1Y3RUeXBlT2ZIVE1MQXR0cmlidXRlID0gY29uc3RydWN0VHlwZU9mSFRNTEF0dHJpYnV0ZTtcbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbHVlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAhPT0gT2JqZWN0KHZhbHVlKSk7XG59XG5leHBvcnRzLmlzUHJpbWl0aXZlID0gaXNQcmltaXRpdmU7XG5mdW5jdGlvbiBpc1Byb3h5KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZiAob25fY2hhbmdlXzEuZGVmYXVsdC50YXJnZXQodmFsdWUpID09PSB2YWx1ZSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5pc1Byb3h5ID0gaXNQcm94eTtcbmZ1bmN0aW9uIGdldFByb3h5VGFyZ2V0KHZhbHVlKSB7XG4gICAgaWYgKGlzUHJveHkodmFsdWUpKVxuICAgICAgICByZXR1cm4gb25fY2hhbmdlXzEuZGVmYXVsdC50YXJnZXQodmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmV4cG9ydHMuZ2V0UHJveHlUYXJnZXQgPSBnZXRQcm94eVRhcmdldDtcbmZ1bmN0aW9uIHRvVVJJUGF0aFBhcnQodmFsdWUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcLysvZywgXCIvXCIpO1xuICAgIGlmICghdmFsdWUuc3RhcnRzV2l0aChcIi9cIikpXG4gICAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWA7XG4gICAgaWYgKHZhbHVlLmVuZHNXaXRoKFwiL1wiKSAmJiB2YWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgLTEpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5leHBvcnRzLnRvVVJJUGF0aFBhcnQgPSB0b1VSSVBhdGhQYXJ0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhScGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZkWFJwYkhNdmRYUnBiQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3hyUkVGQmIwUTdRVUZEY0VRc2QwUkJRVzFFTzBGQlEyNUVMR3RGUVVGcFF6dEJRVVZxUXl4cFEwRmhaMEk3UVVGYVdpeDVRa0ZCUVN4TFFVRkxMRU5CUVVFN1FVRkRUQ3gzUWtGQlFTeEpRVUZKTEVOQlFVRTdRVUZEU2l3NFFrRkJRU3hWUVVGVkxFTkJRVUU3UVVGRFZpdzBRa0ZCUVN4UlFVRlJMRU5CUVVFN1FVRkRVaXd3UWtGQlFTeE5RVUZOTEVOQlFVRTdRVUZEVGl3clFrRkJRU3hYUVVGWExFTkJRVUU3UVVGRFdDd3lRa0ZCUVN4UFFVRlBMRU5CUVVFN1FVRkRVQ3cwUWtGQlFTeFJRVUZSTEVOQlFVRTdRVUZEVWl3MFFrRkJRU3hSUVVGUkxFTkJRVUU3UVVGRFVpd3lRa0ZCUVN4UFFVRlBMRU5CUVVFN1FVRkRVQ3c0UWtGQlFTeFZRVUZWTEVOQlFVRTdRVUZEVml3MFFrRkJRU3hSUVVGUkxFTkJRVUU3UVVGVldpeFRRVUZuUWl4UFFVRlBMRU5CUVVNc1IwRkJWenRKUVVNdlFpeFBRVUZQTEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU4wUkN4RFFVRkRPMEZCUmtRc01FSkJSVU03UVVGVFJDeFRRVUZuUWl4dFFrRkJiVUlzUTBGQlF5eEhRVUZYTzBsQlF6TkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRha1FzVDBGQlR5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRGhDUVVFNFFpeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8wRkJRemxGTEVOQlFVTTdRVUZJUkN4clJFRkhRenRCUVZORUxGTkJRV2RDTEc5Q1FVRnZRaXhEUVVGRExFZEJRVmM3U1VGRE5VTXNSMEZCUnl4SFFVRkhMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU51UWl4UFFVRlBMRzFDUVVGdFFpeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTNCRExFTkJRVU03UVVGSVJDeHZSRUZIUXp0QlFWTkVMRk5CUVdkQ0xITkNRVUZ6UWl4RFFVRkRMRXRCUVZrc1JVRkJSU3hQUVVGWk8wbEJRemRFTEUxQlFVMHNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdTVUZEY2tNc1NVRkJTU3hMUVVGTExFbEJRVWtzUTBGQlF6dFJRVUZGTEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlF6TkRMRU5CUVVNN1FVRklSQ3gzUkVGSFF6dEJRVk5FTEZOQlFXZENMREJDUVVFd1FpeERRVUZETEUxQlFWY3NSVUZCUlN4aFFVRjFRaXhGUVVGRk8wbEJRemRGTEUxQlFVMHNVMEZCVXl4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEYUVRc1NVRkJTU3hUUVVGVExFVkJRVVU3VVVGRFdDeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZETlVNc01FSkJRVEJDTEVOQlFVTXNVMEZCVXl4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8wdEJRM0pFTzBsQlEwUXNUMEZCVHl4VlFVRlZMRU5CUVVNN1FVRkRkRUlzUTBGQlF6dEJRVkJFTEdkRlFVOURPMEZCVjBRc1UwRkJaMElzYjBKQlFXOUNMRU5CUVVNc1RVRkJlVUlzUlVGQlJTeEpRVUZqTEVWQlFVVXNXVUZCYjBJc1JVRkJSVHRKUVVOc1J5eExRVUZMTEUxQlFVMHNUVUZCVFN4SlFVRkpMRWxCUVVrc1JVRkJSVHRSUVVOMlFpeEpRVUZKTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhOUVVGTkxFZEJRVWNzVTBGQlV5eEZRVUZGTEVOQlFVTXNSVUZCUlR0WlFVTXhReXhQUVVGUExFbEJRVWtzUTBGQlF6dFRRVU5tTzB0QlEwbzdTVUZEUkN4UFFVRlBMRXRCUVVzc1EwRkJRenRCUVVOcVFpeERRVUZETzBGQlVFUXNiMFJCVDBNN1FVRlhSQ3hUUVVGblFpdzBRa0ZCTkVJc1EwRkJReXhOUVVGdFFpeEZRVUZGTEVkQlFWYzdTVUZEZWtVc1NVRkJTU3hEUVVGRExIVkNRVUZUTEVWQlFVVTdVVUZCUlN4UFFVRlBPMGxCUTNwQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEhkQ1FVRmhMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEzaERMRTFCUVUwc1UwRkJVeXhIUVVGSExFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkpNME1zU1VGQlNTeFZRVUZWTEVkQlFWRXNVMEZCVXl4RFFVRkRPMGxCUTJoRExFbEJRVWtzVTBGQlV5eEpRVUZKTEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hMUVVGTExGTkJRVk1zUlVGQlJUdFJRVU01UXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxGTkJRVk1zUlVGQlJTeFJRVUZSTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTTVSQ3hWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTNwRU8xRkJRMFFzU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4TFFVRkxMR2xDUVVGcFFpeEZRVUZGTzFsQlEycERMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1dVRkRiRU1zVFVGQlRTeFRRVUZUTEVkQlFVY3NSMEZCUnl4RFFVRkRMRk5CUVZNc1EwRkJRenRaUVVOb1F5eEpRVUZKTEVOQlFVTXNVMEZCVXp0blFrRkJSU3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEcxRVFVRnRSQ3hEUVVGRExFTkJRVU03V1VGRGNrWXNUMEZCVHl4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRE8xbEJRM0pDTEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMU5CUTNKRE8wdEJRMG83U1VGRFJDeEpRVUZKTEZWQlFWVXNTVUZCU1N4SlFVRkpMRWxCUVVrc1ZVRkJWU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWxCUVVrN1VVRkJSU3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhkRFFVRjNReXhEUVVGRExFTkJRVU03U1VGREwwZ3NUMEZCVHl4VlFVRlZMRU5CUVVNN1FVRkRkRUlzUTBGQlF6dEJRWFJDUkN4dlJVRnpRa003UVVGVFJDeFRRVUZuUWl4WFFVRlhMRU5CUVVNc1MwRkJWVHRKUVVOc1F5eFBRVUZQTEVOQlFVTXNTMEZCU3l4TFFVRkxMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzSkRMRU5CUVVNN1FVRkdSQ3hyUTBGRlF6dEJRVk5FTEZOQlFXZENMRTlCUVU4c1EwRkJReXhMUVVGVk8wbEJRemxDTEVsQlFVa3NTMEZCU3l4TFFVRkxMRk5CUVZNc1NVRkJTU3hMUVVGTExFdEJRVXNzU1VGQlNUdFJRVUZGTEU5QlFVOHNTMEZCU3l4RFFVRkRPMGxCUTNoRUxFbEJRVWtzYlVKQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUzBGQlN6dFJRVUZGTEU5QlFVOHNTMEZCU3l4RFFVRkRPMGxCUTI1RUxFOUJRVThzU1VGQlNTeERRVUZETzBGQlEyaENMRU5CUVVNN1FVRktSQ3d3UWtGSlF6dEJRVlZFTEZOQlFXZENMR05CUVdNc1EwRkJReXhMUVVGVk8wbEJRM0pETEVsQlFVa3NUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVGRkxFOUJRVThzYlVKQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJFUXNUMEZCVHl4TFFVRkxMRU5CUVVNN1FVRkRha0lzUTBGQlF6dEJRVWhFTEhkRFFVZERPMEZCVlVRc1UwRkJaMElzWVVGQllTeERRVUZETEV0QlFXRTdTVUZEZGtNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRMjVETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF6dFJRVUZGTEV0QlFVc3NSMEZCUnl4SlFVRkpMRXRCUVVzc1JVRkJSU3hEUVVGRE8wbEJRMmhFTEVsQlFVa3NTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRSUVVONlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0TFFVTTVRanRKUVVORUxFOUJRVThzUzBGQlN5eERRVUZETzBGQlEycENMRU5CUVVNN1FVRlFSQ3h6UTBGUFF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbndpbmRvdy52aXJ0dWFsUm91dGVzID0gW1wiQ29uZmlnXCIsIFwiR2FtZUxvYmJ5XCIsIFwiSG9tZVwiXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRtbHlkSFZoYkVWdWRISjVVRzlwYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5MllYSXZkRzF3TDNacGNuUjFZV3hGYm5SeWVWQnZhVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJUU3hOUVVGUExFTkJRVU1zWVVGQllTeEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkRMRmRCUVZjc1JVRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5SjkiXSwic291cmNlUm9vdCI6IiJ9