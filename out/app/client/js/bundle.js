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
let ViewLink = class ViewLink extends BaseComponent_1.BaseComponentFactory(HTMLAnchorElement) {
    constructor(_params) {
        super();
        this.model = new Test1_1.Test1({ title: String(Date.now()) });
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
    decorators_1.watched(), decorators_1.attribute(),
    tslib_1.__metadata("design:type", Array)
], ViewLink.prototype, "tester", void 0);
ViewLink = tslib_1.__decorate([
    decorators_1.baseConstructor(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ConstParams !== "undefined" && ConstParams) === "function" ? _a : Object])
], ViewLink);
exports.default = ViewLink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld0xpbmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1ZpZXdMaW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2REFBaUU7QUFDakUsc0RBQXNGO0FBQ3RGLGdEQUE2QztBQVU3QyxJQUFxQixRQUFRLEdBQTdCLE1BQXFCLFFBQVMsU0FBUSxvQ0FBb0IsQ0FBQyxpQkFBaUIsQ0FBQztJQWlDekUsWUFBWSxPQUErQjtRQUN2QyxLQUFLLEVBQUUsQ0FBQztRQW5CTyxVQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQVFoRCxTQUFJLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFRN0IsV0FBTSxHQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBSTVFLENBQUM7SUFPTSxtQkFBbUI7UUFDdEIsS0FBSyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFTUyxlQUFlLENBQUMsS0FBbUI7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBUVMsc0JBQXNCO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBUVMsbUJBQW1CLENBQUMsS0FBWTtRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFTUyxZQUFZLENBQUMsT0FBdUI7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFTUyxZQUFZLENBQUMsSUFBb0I7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFTUyxjQUFjLENBQUMsT0FBdUI7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQVNTLFdBQVcsQ0FBQyxLQUFxQjtRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQVNTLGNBQWMsQ0FBQyxPQUF1QjtRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBU08sV0FBVyxDQUFDLEtBQVk7UUFDNUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNKLENBQUE7QUF4STBCLGdCQUFPLEdBQVcsR0FBRyxDQUFDO0FBT2pDO0lBQVgscUJBQVEsRUFBRTs7dUNBQXlEO0FBUXZEO0lBQVosc0JBQVMsRUFBRTs7c0NBQWdEO0FBUXBDO0lBQXZCLG9CQUFPLEVBQUUsRUFBRSxzQkFBUyxFQUFFOzt3Q0FBcUQ7QUEvQjNELFFBQVE7SUFENUIsNEJBQWUsRUFBRTtpRUFrQ1EsV0FBVyxvQkFBWCxXQUFXO0dBakNoQixRQUFRLENBZ0o1QjtrQkFoSm9CLFFBQVEifQ==

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9CYXNlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRCQUEwQjtBQUMxQix1Q0FBa0Q7QUFDbEQsc0RBQTREO0FBQzVELGtEQUF1RTtBQUd2RSw2Q0FBbUg7QUFDbkgsMENBQWdHO0FBVWhHLFNBQWdCLG9CQUFvQixDQUF5QyxlQUFzQjs7SUFRL0YsTUFBZSxhQUFjLFNBQVEsZUFBZTtRQWtHaEQsWUFBWSxHQUFHLElBQVc7WUFDdEIsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUF0REMsT0FBRSxHQUFXLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBUTdCLG9CQUFlLEdBQVksSUFBSSxDQUFDO1lBU2hDLGNBQVMsR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFVcEMsbUJBQWMsR0FBc0IsMEJBQTBCLENBQUM7WUFXbEcsbUJBQWMsR0FBbUIsRUFBRSxDQUFDO1FBaUIxRCxDQUFDO1FBeEVELElBQVcsVUFBVTtZQUNqQixNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ3hCLE1BQU0sVUFBVSxHQUFHLHNCQUFXLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFxQyxDQUFDO1lBQzlGLElBQUksVUFBVSxFQUFFO2dCQUNaLEtBQUssTUFBTSxJQUFJLElBQUksVUFBVSxFQUFFO29CQUMzQixLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSw4QkFBbUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDcEQ7YUFDSjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUF3REQsSUFBYyxRQUFRO1lBQ2xCLE1BQU0sUUFBUSxHQUFHLHNCQUFXLENBQUMsSUFBSSxFQUFFLGtC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

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
/* harmony import */ var _client_utils_util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_client_utils_util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./source/app/utils/metadata.ts");
/* harmony import */ var _bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _client_lib_Logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./source/app/client/ts/lib/Logger.ts");
/* harmony import */ var _client_lib_Logger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_client_lib_Logger__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _client_lib_DatabaseManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./source/app/client/ts/lib/DatabaseManager.ts");
/* harmony import */ var _client_lib_DatabaseManager__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_client_lib_DatabaseManager__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _bdo_lib_Watched__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./source/app/lib/Watched.ts");
/* harmony import */ var _bdo_lib_Watched__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_bdo_lib_Watched__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _bdo_utils_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./source/app/utils/util.ts");
/* harmony import */ var _bdo_utils_util__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_8__);









const logger = new _client_lib_Logger__WEBPACK_IMPORTED_MODULE_5__["Logger"]();
const databaseManager = _client_lib_DatabaseManager__WEBPACK_IMPORTED_MODULE_6__["DatabaseManager"].getInstance();
let ClientModel = class ClientModel extends _bdo_lib_BDOModel__WEBPACK_IMPORTED_MODULE_2__["BDOModel"] {
    constructor() {
        super(...arguments);
        this.isClientModel = true;
    }
    static getInstanceByID(_id) {
        return new this();
    }
    static getInstancesByAttributes(_attributes) {
        return [new this()];
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
            const definedAttributes = Object(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_4__["getMetadata"])(this, "definedAttributes");
            if (!definedAttributes || attr && !definedAttributes.includes(attr))
                throw new Error("invalid defined attributes");
            const attributes = attr ? [attr] : definedAttributes;
            const unsavedChanges = yield this.getUnsavedChanges();
            const toSave = {};
            const sendToServer = {};
            for (const attribute of attributes) {
                if (unsavedChanges.hasOwnProperty(attribute)) {
                    const strAttr = attribute;
                    const proxyVal = Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_8__["getProxyTarget"])(unsavedChanges[strAttr]);
                    let wildCardMetadata = Object(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_4__["getWildcardMetadata"])(this, strAttr);
                    if (wildCardMetadata instanceof _bdo_lib_Watched__WEBPACK_IMPORTED_MODULE_7__["Watched"])
                        wildCardMetadata = wildCardMetadata.subObject;
                    if (!wildCardMetadata.doNotPersist)
                        toSave[strAttr] = proxyVal;
                    if (!wildCardMetadata.noServerInteraction)
                        sendToServer[strAttr] = proxyVal;
                }
            }
            if (Object.keys(toSave).length) {
                databaseManager.database("default").collection(this.collectionName).update(this.id, toSave);
            }
            if (Object.keys(sendToServer).length)
                logger.debug(`send ${JSON.stringify(sendToServer)} to server`);
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
            const definedAttributes = Object(_bdo_utils_metadata__WEBPACK_IMPORTED_MODULE_4__["getMetadata"])(this, "definedAttributes") || [];
            dbCollection = dbCollection || {};
            for (const attr of definedAttributes) {
                const strAttr = attr;
                const attrVal = Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_8__["getProxyTarget"])(this[attr]);
                if (Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_8__["isArray"])(attrVal) && Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_8__["difference"])(attrVal, dbCollection[strAttr]).length) {
                    unsavedChanges[strAttr] = this[attr];
                }
                else if (Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_8__["isObject"])(attrVal) && !Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_8__["isEqual"])(attrVal, dbCollection[strAttr])) {
                    unsavedChanges[strAttr] = this[attr];
                }
                else if (Object(_bdo_utils_util__WEBPACK_IMPORTED_MODULE_8__["isPrimitive"])(attrVal) && attrVal !== dbCollection[strAttr]) {
                    unsavedChanges[strAttr] = this[attr];
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
ClientModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
class Attribute extends Property_1.Property {
    constructor(object, property, params) {
        super(object, property, params);
        this.inDOMInitialized = false;
        this.autoSaveAllowed = false;
    }
    setValue(value) {
        if (!this.shouldDoSetValue(value))
            return;
        this.doSetValue(value, true, true);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9saWIvQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQThEO0FBRTlELHdEQUFtRDtBQUNuRCx3REFBcUQ7QUFDckQsMENBQTJGO0FBQzNGLDRDQUFxRDtBQXNFckQsTUFBYSxTQUEyRCxTQUFRLG1CQUFRO0lBcUVwRixZQUFZLE1BQVMsRUFBRSxRQUFXLEVBQUUsTUFBeUI7UUFDekQsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFyQjVCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQWtCbEMsb0JBQWUsR0FBWSxLQUFLLENBQUM7SUFJekMsQ0FBQztJQVFNLFFBQVEsQ0FBQyxLQUFnQztRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU87UUFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQVFNLFlBQVksQ0FBQyxLQUFjLEVBQUUsV0FBa0IsRUFBRSxRQUFlO1FBQ25FLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJO1lBQUUsT0FBTztRQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFjLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQVNN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

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
    static getInstanceByID(_id) {
        throw new Error("Not implemented");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2xpYi9CRE9Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsK0JBQWtDO0FBQ2xDLCtDQUFrQztBQUNsQyw4Q0FBd0Q7QUFDeEQsc0RBQTZFO0FBQzdFLGtEQUFrRDtBQVdsRCxJQUFzQixRQUFRLGdCQUE5QixNQUFzQixRQUFRO0lBQTlCO1FBcUNnQyxlQUFVLEdBQVksSUFBSSxDQUFDO1FBUTNCLG1CQUFjLEdBQVksVUFBUSxDQUFDLGNBQWMsQ0FBQztRQVM3QyxPQUFFLEdBQVcsV0FBVyxTQUFJLEVBQUUsRUFBRSxDQUFDO1FBVXJDLGNBQVMsR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUM7SUEySGxHLENBQUM7SUFqSEcsSUFBYyxRQUFRO1FBQ2xCLE1BQU0sUUFBUSxHQUFHLHNCQUFXLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQVNNLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBVztRQUNyQyxNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQVdNLElBQUksQ0FBMkUsUUFBVyxFQUFFLElBQVE7UUFDdkcsT0FBTyxJQUFJLGlCQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQTZELENBQUM7SUFDekcsQ0FBQztJQVFNLFFBQVE7UUFDWCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFVTSxNQUFNO1FBQ1QsTUFBTSxJQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUNoQyxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtZQUNwQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQ3pCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQzthQUN2QjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQTRCTSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQStCO1FBQ2xELE1BQU0sY0FBYyxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdEQsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksY0FBYyxJQUFJLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMxRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQVNNLEtBQUssQ0FBQyxpQkFBaUI7UUFDMUIsTUFBTSxjQUFjLEdBQUcsTUFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN0RCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0NBV0osQ0FBQTtBQWpMMEIsb0JBQVcsR0FBUSxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQW1CL0QsbUJBQVUsR0FBWSxJQUFJLENBQUM7QUFRdEM7SUFBWCxxQkFBUSxFQUFFOzs0Q0FBNEM7QUFRM0M7SUFBWCxxQkFBUSxFQUFFOztnREFBbUU7QUFTcEQ7SUFBekIsc0JBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsaUJBQUUsQ0FBQzs7b0NBQXlDO0FBVXJEO0lBQVosc0JBQVMsRUFBRTs7MkNBQWtGO0FBaEU1RSxRQUFRO0lBRDdCLDRCQUFlLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUM7R0FDaEIsUUFBUSxDQTJMN0I7QUEzTHFCLDRCQUFRIn0=

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
        if (field.object && field.object.isBDOModel) {
            const arrayObjProxy = this.proxyfyValue(field.valueOf());
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
        if (value instanceof Array || util_1.isObject(value)) {
            value = on_change_1.default.target(value);
            return on_change_1.default(value, (path, changedValue, previousValue) => {
                for (const field of this.fields) {
                    field.proxyHandler(path, changedValue, previousValue);
                }
            });
        }
        return value;
    }
}
exports.Field = Field;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2xpYi9GaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSw4Q0FBMkM7QUFFM0MsMENBQW1GO0FBQ25GLGtEQUE2RDtBQUM3RCxrRUFBaUM7QUFpQmpDLE1BQWEsS0FBSztJQW9DZCxZQUFZLE1BQVMsRUFBRSxRQUFXO1FBRjFCLFdBQU0sR0FBaUMsRUFBRSxDQUFDO1FBRzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFVTSxRQUFRLENBQUMsS0FBNEI7UUFDeEMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPO1FBQ3hDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBZSxLQUFLLENBQUMsTUFBTyxDQUFDLFVBQVUsRUFBRTtZQUNyRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxLQUFLLFlBQVksaUJBQU8sSUFBSSxLQUFLLENBQUMsU0FBUztZQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQVVNLFdBQVcsQ0FBQyxLQUE0QjtRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTztRQUN6QyxJQUFJLEtBQUssWUFBWSxpQkFBTyxJQUFJLEtBQUssQ0FBQyxTQUFTO1lBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6Qiw2QkFBc0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFTTSxRQUFRLENBQUMsS0FBZ0M7UUFDNUMsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTTtZQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQVFNLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQVdPLGFBQWEsQ0FBQyxLQUE0QjtRQUM5QyxpQ0FBc0IsQ0FBUyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUU7WUFDbkMsR0FBRztnQkFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQztZQUNELEdBQUcsQ0FBQyxLQUFXO2dCQUNYLEtBQUssR0FBRyxxQkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QixNQUFNLFNBQVMsR0FBRyxxQkFBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxLQUFLLEtBQUssU0FBUztvQkFBRSxPQUFPO2dCQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsQ0FBQztZQUNELFlBQVksRUFBRSxJQUFJO1lBQ2xCLFVBQVUsRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUFTTyxZQUFZLENBQUMsS0FBNEI7UUFDN0MsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxxQkFBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFVTyxZQUFZLENBQUMsS0FBVztRQUM1QixJQUFJLEtBQUssWUFBWSxLQUFLLElBQUksZUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNDLEtBQUssR0FBRyxtQkFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQixPQUFPLG1CQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsRUFBRTtnQkFDekQsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUM3QixLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBUSxZQUFZLEVBQVEsYUFBYSxDQUFDLENBQUM7aUJBQ3JFO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7Q0FDSjtBQTNKRCxzQkEySkMifQ==

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
        if (value instanceof Array) {
            value = on_change_1.default.target(value);
            return on_change_1.default(value, (path, changedVal, prevVal) => {
                if (this.proxyHandlerReplacement) {
                    this.proxyHandlerReplacement(path, changedVal, prevVal);
                }
                else
                    this.proxyHandler(path, changedVal, prevVal);
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
        if (util_1.isFunction(this.object.getNamespacedStorage) &&
            this.object.getNamespacedStorage(stringKey) === undefined) {
            metadata_1.defineMetadata(this.object, "keyShouldBeUpdated", Object.assign(keyShouldBeUpdated, { [stringKey]: true }));
            return true;
        }
        return Boolean(metadata_1.getMetadata(this.object, "constructionComplete"));
    }
}
exports.Property = Property;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2xpYi9Qcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3REFBcUQ7QUFDckQsa0RBQWlGO0FBQ2pGLHdEQUFtRDtBQUNuRCwwQ0FBNEU7QUFDNUUsNENBQTRDO0FBQzVDLGtFQUFpQztBQTJFakMsTUFBYSxRQUFRO0lBNkZqQixZQUFZLE1BQVMsRUFBRSxRQUFXLEVBQUUsTUFBd0I7UUFDeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFNUIsTUFBTSxlQUFlLEdBQUcsY0FBTyxDQUFDLFFBQWtCLENBQUMsQ0FBQztRQUNwRCxNQUFNLGVBQWUsR0FBRyxLQUFLLGVBQWUsZUFBZSxDQUFDO1FBQzVELE1BQU0sV0FBVyxHQUFHLEtBQUssZUFBZSxXQUFXLENBQUM7UUFDcEQsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLGVBQWUsa0JBQWtCLENBQUM7UUFFbEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFlLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUM7UUFDNUYsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDNUUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixJQUFJLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztJQUM1RyxDQUFDO0lBU00sUUFBUSxDQUFDLEtBQWdDO1FBQzVDLElBQUksQ0FBQyxVQUFVLENB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

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
        this.subObject = subObject;
    }
    proxyHandler(path, changedVal, prevVal) {
        if (this.subObject)
            this.subObject.proxyHandler(path, changedVal, prevVal);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2F0Y2hlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvbGliL1dhdGNoZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsd0RBQXFEO0FBQ3JELDBDQUFzRTtBQUN0RSxrRUFBaUM7QUFDakMsb0VBQW1DO0FBOEhuQyxNQUFhLE9BQU87SUFxR2hCLFlBQVksTUFBUyxFQUFFLFFBQVcsRUFBRSxNQUF1QjtRQWhDcEQsY0FBUyxHQUFZLEtBQUssQ0FBQztRQThCMUIsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFHbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFekIsTUFBTSxlQUFlLEdBQUcsY0FBTyxDQUFDLFFBQWtCLENBQUMsQ0FBQztRQUVwRCxNQUFNLFVBQVUsR0FBRyxLQUFLLGVBQWUsTUFBTSxDQUFDO1FBQzlDLE1BQU0sWUFBWSxHQUFHLEtBQUssZUFBZSxRQUFRLENBQUM7UUFDbEQsTUFBTSxTQUFTLEdBQUcsS0FBSyxlQUFlLEtBQUssQ0FBQztRQUM1QyxNQUFNLFlBQVksR0FBRyxLQUFLLGVBQWUsUUFBUSxDQUFDO1FBRWxELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ3hFLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFN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

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
const Binding_1 = __webpack_require__("./source/app/lib/Binding.ts");
const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");
const framework_1 = __webpack_require__("./source/app/utils/framework.ts");
const type_graphql_1 = __webpack_require__("./node_modules/type-graphql/dist/browser-shim.js");
function watched(params = {}) {
    return (target, key) => {
        const stringKey = key.toString();
        framework_1.beforePropertyDescriptors(target, stringKey, "definedWatchers");
        framework_1.createDecoratorDescriptor(target, stringKey, "Watched", params);
    };
}
exports.watched = watched;
function property(params = {}) {
    return (target, key) => {
        const stringKey = key.toString();
        framework_1.beforePropertyDescriptors(target, stringKey, "definedProperties");
        framework_1.createDecoratorDescriptor(target, stringKey, "Property", params);
    };
}
exports.property = property;
function attribute(typeFunc, params) {
    return (target, key) => {
        const stringKey = key.toString();
        if (typeFunc && !(typeFunc instanceof Function) && !params)
            params = typeFunc;
        if (!params)
            params = {};
        if (typeFunc instanceof Function && params)
            type_graphql_1.Field(typeFunc, params)(target, key);
        else if (typeFunc instanceof Function)
            type_graphql_1.Field(typeFunc)(target, key);
        else if (params)
            type_graphql_1.Field(params)(target, key);
        else
            type_graphql_1.Field()(target, key);
        framework_1.beforePropertyDescriptors(target, stringKey, "definedAttributes");
        framework_1.createDecoratorDescriptor(target, stringKey, "Attribute", params);
    };
}
exports.attribute = attribute;
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
                type_graphql_1.ObjectType(name, options)(ctor);
            }
            else if (name && (typeof name === "string")) {
                type_graphql_1.ObjectType(name)(ctor);
            }
            else if (options && (typeof options === "object")) {
                type_graphql_1.ObjectType(options)(ctor);
            }
            else
                type_graphql_1.ObjectType()(ctor);
            if (options && (typeof options === "object") && options.collectionName) {
                metadata_1.defineMetadata(ctor, "collectionName", options.collectionName);
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
                metadata_1.defineMetadata(this, "normalFunctionality", true);
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
                    this.constructedCallback(...params);
            }
        }
        BaseConstructor.className = Object.getPrototypeOf(BaseConstructor).name;
        BaseConstructor.graphQLType = ctor;
        BaseConstructor.collectionName = metadata_1.getMetadata(BaseConstructor, "collectionName");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvdXRpbHMvZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQiwwQ0FBbUU7QUFDbkUsd0RBQW1EO0FBSW5ELDhDQUEyQztBQUMzQyxrREFBa0U7QUFDbEUsb0RBQTRGO0FBRzVGLCtDQVlzQjtBQTJCdEIsU0FBZ0IsT0FBTyxDQUFDLFNBQXlCLEVBQUU7SUFDL0MsT0FBTyxDQUFDLE1BQVcsRUFBRSxHQUFvQixFQUFFLEVBQUU7UUFDekMsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pDLHFDQUF5QixDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNoRSxxQ0FBeUIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwRSxDQUFDLENBQUM7QUFDTixDQUFDO0FBTkQsMEJBTUM7QUFVRCxTQUFnQixRQUFRLENBQUMsU0FBMEIsRUFBRTtJQUNqRCxPQUFPLENBQUMsTUFBVyxFQUFFLEdBQW9CLEVBQUUsRUFBRTtRQUN6QyxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMscUNBQXlCLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2xFLHFDQUF5QixDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JFLENBQUMsQ0FBQztBQUNOLENBQUM7QUFORCw0QkFNQztBQWVELFNBQWdCLFNBQVMsQ0FBQyxRQUEyQixFQUFFLE1BQXlCO0lBQzVFLE9BQU8sQ0FBQyxNQUFXLEVBQUUsR0FBb0IsRUFBRSxFQUFFO1FBQ3pDLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQyxJ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

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
__webpack_require__("./source/app/lib/BDOConfigManager.ts");
__webpack_require__("./source/app/lib/BDODatabaseManager.ts");
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
__webpack_require__("./source/app/client/ts/lib/DatabaseManager.ts");
__webpack_require__("./source/app/client/ts/lib/Logger.ts");
__webpack_require__("./source/app/client/ts/components/GameWindow.ts");
__webpack_require__("./source/app/client/ts/components/TestComponent.ts");
__webpack_require__("./source/app/client/ts/components/ViewLink.ts");
module.exports = __webpack_require__("./source/app/client/ts/components/ViewRouter.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvR2FtZVdpbmRvdy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1Rlc3RDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvY29tcG9uZW50cy9WaWV3TGluay50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1ZpZXdSb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9DbGllbnRNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQ2xpZW50Um91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0NvbmZpZ01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0RhdGFiYXNlTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL21vZGVscy9UZXN0LnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL21vZGVscy9UZXN0MS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMgc3luYyBeXFwuXFwvLipcXC50cyQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvR2FtZUxvYmJ5LnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9Ib21lLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3V0aWxzL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvQXR0cmlidXRlLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0JET0NvbmZpZ01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvQkRPRGF0YWJhc2VNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0JET0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9NYXBDYWNoZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Nb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Sb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CaW5kaW5nLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0Vycm9ycy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9GaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9Nb2RpZmljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvUHJvcGVydHkudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvV2F0Y2hlZC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL21vZGVscy9CRE9UZXN0LnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbW9kZWxzL0JET1Rlc3QxLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbW9kZWxzL0NlbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9tb2RlbHMvQ2h1bmsudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9yb3V0ZXMvQkRPQ29uZmlnLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvcm91dGVzL0JET0dhbWVMb2JieS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3JvdXRlcy9CRE9Ib21lLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvdXRpbHMgc3luYyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3V0aWxzL2RlY29yYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscy9lbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3V0aWxzL2ZyYW1ld29yay50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3V0aWxzL21ldGFkYXRhLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvdXRpbHMvdXRpbC50cyIsIndlYnBhY2s6Ly8vLi92YXIvdG1wL3ZpcnR1YWxFbnRyeVBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7OztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0FBMkMsbTdIOzs7Ozs7OztBQ25HOUI7QUFDYjtBQUNBLDJDQUEyQywyUSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yXCIsXCJ0ZW1wbGF0ZXNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1TR1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLVNHLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2EsIF9iO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcblwidXNlIHN0cmljdFwiO1xuY29uc3QgQmFzZUNvbXBvbmVudF8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0Jhc2VDb21wb25lbnRcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgZGVjb3JhdG9yc18yID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IEJBQllMT04gPSB0c2xpYl8xLl9faW1wb3J0U3RhcihyZXF1aXJlKFwiYmFieWxvbmpzXCIpKTtcbmxldCBHYW1lV2luZG93ID0gY2xhc3MgR2FtZVdpbmRvdyBleHRlbmRzIEJhc2VDb21wb25lbnRfMS5CYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmVuZ2luZSA9IG5ldyBCQUJZTE9OLkVuZ2luZSh0aGlzLCB0cnVlLCB7XG4gICAgICAgICAgICBhdWRpb0VuZ2luZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gYDEwMCVgO1xuICAgICAgICB0aGlzLnN0eWxlLndpZHRoID0gYDEwMCVgO1xuICAgICAgICB0aGlzLmVuZ2luZS5ydW5SZW5kZXJMb29wKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVuZ2luZS5yZXNpemUoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY3JlYXRlU2NlbmUoKSB7XG4gICAgICAgIGNvbnN0IHNjZW5lID0gbmV3IEJBQllMT04uU2NlbmUodGhpcy5lbmdpbmUpO1xuICAgICAgICBjb25zdCBjYW1lcmEgPSBuZXcgQkFCWUxPTi5GcmVlQ2FtZXJhKCdjYW1lcmEnLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDUsIC0xMCksIHNjZW5lKTtcbiAgICAgICAgY2FtZXJhLnNldFRhcmdldChCQUJZTE9OLlZlY3RvcjMuWmVybygpKTtcbiAgICAgICAgY2FtZXJhLmF0dGFjaENvbnRyb2wodGhpcywgZmFsc2UpO1xuICAgICAgICBjb25zdCBsaWdodCA9IG5ldyBCQUJZTE9OLkhlbWlzcGhlcmljTGlnaHQoJ2xpZ2h0MScsIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMSwgMCksIHNjZW5lKTtcbiAgICAgICAgbGlnaHQuc2hhZG93RW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IHNwaGVyZSA9IEJBQllMT04uTWVzaEJ1aWxkZXIuQ3JlYXRlU3BoZXJlKCdzcGhlcmUnLCB7IHNlZ21lbnRzOiAxNiwgZGlhbWV0ZXI6IDIgfSwgc2NlbmUpO1xuICAgICAgICBzcGhlcmUucG9zaXRpb24ueSA9IDE7XG4gICAgICAgIEJBQllMT04uTWVzaEJ1aWxkZXIuQ3JlYXRlR3JvdW5kKCdncm91bmQxJywgeyBoZWlnaHQ6IDYsIHdpZHRoOiA2LCBzdWJkaXZpc2lvbnM6IDIgfSwgc2NlbmUpO1xuICAgICAgICByZXR1cm4gc2NlbmU7XG4gICAgfVxuICAgIGNyZWF0ZVRlcnJhaW4oKSB7IH1cbn07XG5HYW1lV2luZG93LmV4dGVuZHMgPSBcImNhbnZhc1wiO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzIucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCB0eXBlb2YgKF9hID0gdHlwZW9mIEJBQllMT04gIT09IFwidW5kZWZpbmVkXCIgJiYgQkFCWUxPTi5FbmdpbmUpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdClcbl0sIEdhbWVXaW5kb3cucHJvdG90eXBlLCBcImVuZ2luZVwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzIucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCB0eXBlb2YgKF9iID0gdHlwZW9mIEJBQllMT04gIT09IFwidW5kZWZpbmVkXCIgJiYgQkFCWUxPTi5TY2VuZSkgPT09IFwiZnVuY3Rpb25cIiA/IF9iIDogT2JqZWN0KVxuXSwgR2FtZVdpbmRvdy5wcm90b3R5cGUsIFwic2NlbmVcIiwgdm9pZCAwKTtcbkdhbWVXaW5kb3cgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoKVxuXSwgR2FtZVdpbmRvdyk7XG5leHBvcnRzLmRlZmF1bHQgPSBHYW1lV2luZG93O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUjJGdFpWZHBibVJ2ZHk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyTnZiWEJ2Ym1WdWRITXZSMkZ0WlZkcGJtUnZkeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTERaRVFVRnBSVHRCUVVOcVJTeHpSRUZCZDBRN1FVRkRlRVFzYzBSQlFXbEVPMEZCUTJwRUxESkVRVUZ4UXp0QlFWVnlReXhKUVVGeFFpeFZRVUZWTEVkQlFTOUNMRTFCUVhGQ0xGVkJRVmNzVTBGQlVTeHZRMEZCYjBJc1EwRkJReXhwUWtGQmFVSXNRMEZCUXp0SlFVUXZSVHM3VVVGdFFqQkNMRmRCUVUwc1IwRkJiVUlzU1VGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVU3V1VGRE1VVXNWMEZCVnl4RlFVRkZMRWxCUVVrN1UwRkRjRUlzUTBGQlF5eERRVUZETzFGQlUyMUNMRlZCUVVzc1IwRkJhMElzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMGxCZVVSd1JTeERRVUZETzBsQmJFUlZMR2xDUVVGcFFqdFJRVU53UWl4TFFVRkxMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVXNRMEZCUXp0UlFVTXhRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRNMElzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRekZDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1lVRkJZU3hEUVVGRExFZEJRVWNzUlVGQlJUdFpRVU16UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFGQlEzaENMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMGdzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRSUVVOeVFpeE5RVUZOTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlFVY3NSVUZCUlR0WlFVTnVReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNN1dVRkRMMElzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRE8xRkJRM0pETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTFBc1EwRkJRenRKUVZOVExGZEJRVmM3VVVGRmFrSXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVVM1F5eE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRmRrWXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkZla01zVFVGQlRTeERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRmJFTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXpGR0xFdEJRVXNzUTBGQlF5eGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUlROQ0xFMUJRVTBzVFVGQlRTeEhRVUZITEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEZGQlFWRXNSVUZCUlN4RlFVRkZMRVZCUVVVc1VVRkJVU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUldoSExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVWMFFpeFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhUUVVGVExFVkJRVVVzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFVkJRVVVzV1VGQldTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJSVGRHTEU5QlFVOHNTMEZCU3l4RFFVRkRPMGxCUTJwQ0xFTkJRVU03U1VGUlV5eGhRVUZoTEV0QlFVc3NRMEZCUXp0RFFVTm9ReXhEUVVGQk8wRkJOMFV3UWl4clFrRkJUeXhIUVVGWExGRkJRVkVzUTBGQlF6dEJRVk4wUXp0SlFVRllMSEZDUVVGUkxFVkJRVVU3TUVSQlFXMUNMRTlCUVU4c2IwSkJRVkFzVDBGQlR5eERRVUZETEUxQlFVMDdNRU5CUlhwRE8wRkJVMU03U1VGQldDeHhRa0ZCVVN4RlFVRkZPekJFUVVGclFpeFBRVUZQTEc5Q1FVRlFMRTlCUVU4c1EwRkJReXhMUVVGTE8zbERRVUZ6UWp0QlFUZENMME1zVlVGQlZUdEpRVVE1UWl3MFFrRkJaU3hGUVVGRk8wZEJRMGNzVlVGQlZTeERRWE5HT1VJN2EwSkJkRVp2UWl4VlFVRlZJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgQmFzZUNvbXBvbmVudF8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0Jhc2VDb21wb25lbnRcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgZGVjb3JhdG9yc18yID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmxldCBUZXN0Q29tcG9uZW50ID0gY2xhc3MgVGVzdENvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnRfMS5CYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnRlbXBsYXRlU3RyaW5nID0gcmVxdWlyZSgnfnN0YXRpYy92aWV3cy90ZXN0Q29tcG9uZW50Lm5qaycpO1xuICAgIH1cbn07XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMi5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbl0sIFRlc3RDb21wb25lbnQucHJvdG90eXBlLCBcInRlbXBsYXRlU3RyaW5nXCIsIHZvaWQgMCk7XG5UZXN0Q29tcG9uZW50ID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKClcbl0sIFRlc3RDb21wb25lbnQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVGVzdENvbXBvbmVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHVnpkRU52YlhCdmJtVnVkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDJOdmJYQnZibVZ1ZEhNdlZHVnpkRU52YlhCdmJtVnVkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3cyUkVGQmFVVTdRVUZEYWtVc2MwUkJRWGRFTzBGQlEzaEVMSE5FUVVGcFJEdEJRVlZxUkN4SlFVRnhRaXhoUVVGaExFZEJRV3hETEUxQlFYRkNMR0ZCUVdNc1UwRkJVU3h2UTBGQmIwSXNRMEZCUXl4WFFVRlhMRU5CUVVNN1NVRkVOVVU3TzFGQlV6QkNMRzFDUVVGakxFZEJRVWNzVDBGQlR5eERRVUZETEdsRFFVRnBReXhEUVVGRExFTkJRVU03U1VGRmRFWXNRMEZCUXp0RFFVRkJMRU5CUVVFN1FVRkdaVHRKUVVGWUxIRkNRVUZSTEVWQlFVVTdPM0ZFUVVGMVJUdEJRVkpxUlN4aFFVRmhPMGxCUkdwRExEUkNRVUZsTEVWQlFVVTdSMEZEUnl4aFFVRmhMRU5CVldwRE8ydENRVlp2UWl4aFFVRmhJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgQmFzZUNvbXBvbmVudF8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0Jhc2VDb21wb25lbnRcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgVGVzdDFfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L21vZGVscy9UZXN0MVwiKTtcbmxldCBWaWV3TGluayA9IGNsYXNzIFZpZXdMaW5rIGV4dGVuZHMgQmFzZUNvbXBvbmVudF8xLkJhc2VDb21wb25lbnRGYWN0b3J5KEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgY29uc3RydWN0b3IoX3BhcmFtcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IFRlc3QxXzEuVGVzdDEoeyB0aXRsZTogU3RyaW5nKERhdGUubm93KCkpIH0pO1xuICAgICAgICB0aGlzLnRlc3QgPSB0aGlzLm1vZGVsLmJpbmQoXCJ0aXRsZVwiKTtcbiAgICAgICAgdGhpcy50ZXN0ZXIgPSB0aGlzLm1vZGVsLmJpbmQoXCJ0ZXN0ZXJcIik7XG4gICAgfVxuICAgIGNvbnN0cnVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkxpbmtDbGljay5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25UZXN0VHlwZUNoZWNrKHZhbHVlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tpbmcgdHlwZSBvZiB0ZXN0IHdpdGggdmFsdWVcIiwgdmFsdWUpO1xuICAgIH1cbiAgICBvblRlc3RUeXBlQ2hlY2tTdWNjZXNzKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlR5cGVjaGVjayBvZiB0ZXN0IHN1Y2Nlc3NmdWxcIik7XG4gICAgfVxuICAgIG9uVGVzdFR5cGVDaGVja0ZhaWwoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUeXBlY2hlY2sgb2YgdGVzdCBmYWlsZWRcIiwgZXJyb3IpO1xuICAgIH1cbiAgICBvblRlc3RDaGFuZ2UoY2hhbmdlZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRlc3QgY2hhbmdlZFwiLCBjaGFuZ2VkLCB0aGlzKTtcbiAgICB9XG4gICAgb25UZXN0ZXJJbml0KGluaXQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgaW5pdFwiLCBpbml0LCB0aGlzKTtcbiAgICB9XG4gICAgb25UZXN0ZXJDaGFuZ2UoY2hhbmdlZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RlciBjaGFuZ2VkXCIsIGNoYW5nZWQsIHRoaXMpO1xuICAgIH1cbiAgICBvblRlc3RlckFkZChhZGRlZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RlciBhZGRlZFwiLCBhZGRlZCwgdGhpcyk7XG4gICAgfVxuICAgIG9uVGVzdGVyUmVtb3ZlKHJlbW92ZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgcmVtb3ZlZFwiLCByZW1vdmVkLCB0aGlzKTtcbiAgICB9XG4gICAgb25MaW5rQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93LnJvdXRlci5uYXZpZ2F0ZSh0aGlzLmhyZWYsIHRydWUpO1xuICAgIH1cbn07XG5WaWV3TGluay5leHRlbmRzID0gJ2EnO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG5dLCBWaWV3TGluay5wcm90b3R5cGUsIFwibW9kZWxcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmF0dHJpYnV0ZSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIFZpZXdMaW5rLnByb3RvdHlwZSwgXCJ0ZXN0XCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS53YXRjaGVkKCksIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSlcbl0sIFZpZXdMaW5rLnByb3RvdHlwZSwgXCJ0ZXN0ZXJcIiwgdm9pZCAwKTtcblZpZXdMaW5rID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgQ29uc3RQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIgJiYgQ29uc3RQYXJhbXMpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdF0pXG5dLCBWaWV3TGluayk7XG5leHBvcnRzLmRlZmF1bHQgPSBWaWV3TGluaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZtbGxkMHhwYm1zdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyTnNhV1Z1ZEM5MGN5OWpiMjF3YjI1bGJuUnpMMVpwWlhkTWFXNXJMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRU3cyUkVGQmFVVTdRVUZEYWtVc2MwUkJRWE5HTzBGQlEzUkdMR2RFUVVFMlF6dEJRVlUzUXl4SlFVRnhRaXhSUVVGUkxFZEJRVGRDTEUxQlFYRkNMRkZCUVZNc1UwRkJVU3h2UTBGQmIwSXNRMEZCUXl4cFFrRkJhVUlzUTBGQlF6dEpRV2xEZWtVc1dVRkJXU3hQUVVFclFqdFJRVU4yUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVc1Q1R5eFZRVUZMTEVkQlFVY3NTVUZCU1N4aFFVRkxMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVkZvUkN4VFFVRkpMRWRCUVZjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRlJOMElzVjBGQlRTeEhRVUZoTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzBsQlNUVkZMRU5CUVVNN1NVRlBUU3h0UWtGQmJVSTdVVUZEZEVJc1MwRkJTeXhEUVVGRExHMUNRVUZ0UWl4RlFVRkZMRU5CUVVNN1VVRkROVUlzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEyaEZMRU5CUVVNN1NVRlRVeXhsUVVGbExFTkJRVU1zUzBGQmJVSTdVVUZEZWtNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eHJRMEZCYTBNc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU16UkN4RFFVRkRPMGxCVVZNc2MwSkJRWE5DTzFGQlF6VkNMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zT0VKQlFUaENMRU5CUVVNc1EwRkJRenRKUVVOb1JDeERRVUZETzBsQlVWTXNiVUpCUVcxQ0xFTkJRVU1zUzBGQldUdFJRVU4wUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExEQkNRVUV3UWl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMjVFTEVOQlFVTTdTVUZUVXl4WlFVRlpMRU5CUVVNc1QwRkJkVUk3VVVGRE1VTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhqUVVGakxFVkJRVVVzVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUXk5RExFTkJRVU03U1VGVFV5eFpRVUZaTEVOQlFVTXNTVUZCYjBJN1VVRkRka01zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4aFFVRmhMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBsQlF6TkRMRU5CUVVNN1NVRlRVeXhqUVVGakxFTkJRVU1zVDBGQmRVSTdVVUZETlVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3hQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEYWtRc1EwRkJRenRKUVZOVExGZEJRVmNzUTBGQlF5eExRVUZ4UWp0UlFVTjJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEdOQlFXTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRE4wTXNRMEZCUXp0SlFWTlRMR05CUVdNc1EwRkJReXhQUVVGMVFqdFJRVU0xUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExHZENRVUZuUWl4RlFVRkZMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU5xUkN4RFFVRkRPMGxCVTA4c1YwRkJWeXhEUVVGRExFdEJRVms3VVVGRE5VSXNTMEZCU3l4RFFVRkRMR05CUVdNc1JVRkJSU3hEUVVGRE8xRkJRM1pDTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkROVU1zUTBGQlF6dERRVU5LTEVOQlFVRTdRVUY0U1RCQ0xHZENRVUZQTEVkQlFWY3NSMEZCUnl4RFFVRkRPMEZCVDJwRE8wbEJRVmdzY1VKQlFWRXNSVUZCUlRzN2RVTkJRWGxFTzBGQlVYWkVPMGxCUVZvc2MwSkJRVk1zUlVGQlJUczdjME5CUVdkRU8wRkJVWEJETzBsQlFYWkNMRzlDUVVGUExFVkJRVVVzUlVGQlJTeHpRa0ZCVXl4RlFVRkZPenQzUTBGQmNVUTdRVUV2UWpORUxGRkJRVkU3U1VGRU5VSXNORUpCUVdVc1JVRkJSVHRwUlVGclExRXNWMEZCVnl4dlFrRkJXQ3hYUVVGWE8wZEJha05vUWl4UlFVRlJMRU5CWjBvMVFqdHJRa0ZvU205Q0xGRkJRVkVpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJhc2VDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9CYXNlQ29tcG9uZW50XCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBkZWNvcmF0b3JzXzIgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgbmF2aWdvXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibmF2aWdvXCIpKTtcbmxldCBWaWV3Um91dGVyID0gY2xhc3MgVmlld1JvdXRlciBleHRlbmRzIEJhc2VDb21wb25lbnRfMS5CYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnJvdXRlciA9IG5ldyBuYXZpZ29fMS5kZWZhdWx0KCk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICB0aGlzLnJvdXRlQ29sbGVjdGlvbigpO1xuICAgICAgICB3aW5kb3cucm91dGVyID0gdGhpcy5yb3V0ZXI7XG4gICAgfVxuICAgIHJvdXRlQ29sbGVjdGlvbigpIHtcbiAgICAgICAgZm9yIChjb25zdCByb3V0ZSBvZiB3aW5kb3cudmlydHVhbFJvdXRlcykge1xuICAgICAgICAgICAgY29uc3QgbXlSb3V0ZSA9IHJlcXVpcmUoYC4vLi4vcm91dGVzLyR7cm91dGV9LnRzYCkuZGVmYXVsdDtcbiAgICAgICAgICAgIHRoaXMuc2luZ2VSb3V0ZUNvbGxlY3Rpb24obXlSb3V0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2luZ2VSb3V0ZUNvbGxlY3Rpb24oUm91dGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghdXRpbF8xLmluY2x1ZGVzTWVtYmVyT2ZMaXN0KFJvdXRlLmF0dGFjaFRvU2VydmVycywgW2dsb2JhbC5wcm9jZXNzLmVudi5uYW1lLCAnKiddKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBSb3V0ZUNsYXNzID0gbmV3IFJvdXRlKCk7XG4gICAgICAgICAgICBpZiAoIVJvdXRlQ2xhc3MuaXNDbGllbnRSb3V0ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtSb3V0ZUNsYXNzLmNvbnN0cnVjdG9yLm5hbWV9IGlzIG5vdCBpbnN0YW5jZSBvZiB+Y2xpZW50L2xpYi9CYXNlUm91dGVgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucm91dGVyLm9uKFJvdXRlQ2xhc3Mucm91dGVyKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxufTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18yLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuXSwgVmlld1JvdXRlci5wcm90b3R5cGUsIFwicm91dGVyXCIsIHZvaWQgMCk7XG5WaWV3Um91dGVyID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKClcbl0sIFZpZXdSb3V0ZXIpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVmlld1JvdXRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZtbGxkMUp2ZFhSbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMMk52YlhCdmJtVnVkSE12Vm1sbGQxSnZkWFJsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN3MlJFRkJhVVU3UVVGRGFrVXNNRU5CUVhWRU8wRkJRM1pFTEhORVFVRjNSRHRCUVVONFJDeHpSRUZCYVVRN1FVRkRha1FzTkVSQlFUUkNPMEZCVlRWQ0xFbEJRWEZDTEZWQlFWVXNSMEZCTDBJc1RVRkJjVUlzVlVGQlZ5eFRRVUZSTEc5RFFVRnZRaXhEUVVGRExGZEJRVmNzUTBGQlF6dEpRVVI2UlRzN1VVRlZhVU1zVjBGQlRTeEhRVUZITEVsQlFVa3NaMEpCUVUwc1JVRkJSU3hEUVVGRE8wbEJLME4yUkN4RFFVRkRPMGxCZGtOaExHbENRVUZwUWp0UlFVTjJRaXhMUVVGTExFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1EwRkJRenRSUVVNeFFpeEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZMRU5CUVVNN1VVRkRka0lzVFVGQlRTeERRVUZETEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJRMmhETEVOQlFVTTdTVUZSVHl4bFFVRmxPMUZCUTI1Q0xFdEJRVXNzVFVGQlRTeExRVUZMTEVsQlFVa3NUVUZCVFN4RFFVRkRMR0ZCUVdFc1JVRkJSVHRaUVVOMFF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1pVRkJaU3hMUVVGTExFdEJRVXNzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXp0WlFVTXpSQ3hKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VTBGRGRFTTdTVUZEVEN4RFFVRkRPMGxCVlU4c2IwSkJRVzlDTEVOQlFVTXNTMEZCVlR0UlFVTnVReXhKUVVGSk8xbEJRMEVzU1VGQlNTeERRVUZETERKQ1FVRnZRaXhEUVVGWExFdEJRVXNzUTBGQlF5eGxRVUZsTEVWQlFVVXNRMEZCVXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRVVVzVDBGQlR6dFpRVU16Unl4TlFVRk5MRlZCUVZVc1IwRkJSeXhKUVVGSkxFdEJRVXNzUlVGQlJTeERRVUZETzFsQlF5OUNMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zWVVGQllTeEZRVUZGTzJkQ1FVTXpRaXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxESkRRVUV5UXl4RFFVRkRMRU5CUVVNN1lVRkRPVVk3V1VGRFJDeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVMEZEY2tNN1VVRkJReXhQUVVGUExFdEJRVXNzUlVGQlJUdFpRVU5hTEUxQlFVMHNTMEZCU3l4RFFVRkRPMU5CUTJZN1NVRkRUQ3hEUVVGRE8wTkJRMG9zUTBGQlFUdEJRUzlEWlR0SlFVRllMSEZDUVVGUkxFVkJRVVU3T3pCRFFVRjNRenRCUVZSc1F5eFZRVUZWTzBsQlJEbENMRFJDUVVGbExFVkJRVVU3UjBGRFJ5eFZRVUZWTEVOQmQwUTVRanRyUWtGNFJHOUNMRlZCUVZVaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5yZXF1aXJlKFwicmVmbGVjdC1tZXRhZGF0YVwiKTtcbmNvbnN0IG51bmp1Y2tzXzEgPSByZXF1aXJlKFwibnVuanVja3NcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5jbGllbnQvdXRpbHMvdXRpbFwiKTtcbmNvbnN0IHV0aWxfMiA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5mdW5jdGlvbiBCYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MVHlwZUVsZW1lbnQpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBIVE1MVHlwZUVsZW1lbnQge1xuICAgICAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLmdlbmVyYXRlVW5pcXVlSUQoKTtcbiAgICAgICAgICAgIHRoaXMuaXNCYXNlQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMuY29uc3RydWN0b3IpLm5hbWU7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlU3RyaW5nID0gJzxkaXY+PHNsb3Q+PC9zbG90PjwvZGl2Pic7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlUGFyYW1zID0ge307XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMsIFwiZGVmaW5lZFByb3BlcnRpZXNcIik7XG4gICAgICAgICAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBvZiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnNldChwcm9wLCBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcywgcHJvcCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgICAgfVxuICAgICAgICBnZXQgYmluZGluZ3MoKSB7XG4gICAgICAgICAgICBjb25zdCBiaW5kaW5ncyA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcywgXCJpbml0aWF0b3JCaW5kaW5nXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmdzID8gYmluZGluZ3MgOiBuZXcgTWFwKCk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0TmFtZXNwYWNlZFN0b3JhZ2Uoa2V5LCBuc1Byb3AsIGZvcmNlTlMpIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlsXzEuZ2V0TmFtZXNwYWNlZFN0b3JhZ2UodGhpcywga2V5LCBuc1Byb3AsIGZvcmNlTlMpO1xuICAgICAgICB9XG4gICAgICAgIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGtleSwgbmV3VmFsLCBuc1Byb3ApIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlsXzEuc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2UodGhpcywga2V5LCBuZXdWYWwsIG5zUHJvcCk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlKGtleSwgbnNQcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gdXRpbF8xLmRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5zUHJvcCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0QXR0cmlidXRlKHF1YWxpZmllZE5hbWUsIHZhbHVlLCBzZXRWYWx1ZSA9IHRydWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMgJiYgdGhpcy5wcm9wZXJ0aWVzLmhhcyhxdWFsaWZpZWROYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgXCIke3F1YWxpZmllZE5hbWV9XCIgY2FuJ3QgYmUgc2V0IGFzIGF0dHJpYnV0ZSBiZWNhdXNlIGl0IGlzIGEgZGVmaW5lZCBwcm9wZXJ0eWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlVG9TZXQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIXV0aWxfMi5pc1ByaW1pdGl2ZSh2YWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlVG9TZXQgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXFxcIi9nLCBcIidcIik7XG4gICAgICAgICAgICAgICAgc3VwZXIuc2V0QXR0cmlidXRlKHF1YWxpZmllZE5hbWUsIHZhbHVlVG9TZXQpO1xuICAgICAgICAgICAgICAgIHZhbHVlVG9TZXQgPSB1dGlsXzIuY29uc3RydWN0VHlwZU9mSFRNTEF0dHJpYnV0ZSh0aGlzLCBxdWFsaWZpZWROYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoc2V0VmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbcXVhbGlmaWVkTmFtZV0gPSB2YWx1ZVRvU2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKHF1YWxpZmllZE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZUF0dHJpYnV0ZShxdWFsaWZpZWROYW1lKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzICYmIHRoaXMucHJvcGVydGllcy5oYXMocXVhbGlmaWVkTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFwiJHtxdWFsaWZpZWROYW1lfVwiIGNhbid0IGJlIHJlbW92ZWQgYXMgYXR0cmlidXRlIGJlY2F1c2UgaXQgaXMgYSBkZWZpbmVkIHByb3BlcnR5YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdXBlci5yZW1vdmVBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSk7XG4gICAgICAgICAgICB0aGlzW3F1YWxpZmllZE5hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRvSlNPTigpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpc1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtrZXldID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdHJ1Y3RlZENhbGxiYWNrKC4uLl9hcmdzKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY29uc3RydWN0b3IuZXh0ZW5kcykge1xuICAgICAgICAgICAgICAgIGxldCBzdHJpbmdUb1BhcnNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAodXRpbF8yLmlzU3RyaW5nKHRoaXMudGVtcGxhdGVTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ1RvUGFyc2UgPSBudW5qdWNrc18xLnJlbmRlclN0cmluZyh0aGlzLnRlbXBsYXRlU3RyaW5nLCB0aGlzLnRlbXBsYXRlUGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxfMi5pc09iamVjdCh0aGlzLnRlbXBsYXRlU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmdUb1BhcnNlID0gdGhpcy50ZW1wbGF0ZVN0cmluZy5yZW5kZXIodGhpcy50ZW1wbGF0ZVBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJpbmdUb1BhcnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzdHJpbmdUb1BhcnNlLCAndGV4dC9odG1sJyk7XG4gICAgICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoZG9jLmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkgeyB9XG4gICAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkgeyB9XG4gICAgICAgIGFkb3B0ZWRDYWxsYmFjaygpIHsgfVxuICAgICAgICBhZGRDb250cm9sbGVyKCkgeyB9XG4gICAgICAgIHJlbW92ZUNvbnRyb2xsZXIoKSB7IH1cbiAgICAgICAgZ2VuZXJhdGVVbmlxdWVJRCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzLmNvbnN0cnVjdG9yKS5uYW1lO1xuICAgICAgICAgICAgY29uc3Qgb2NjdXJyZW5jZSA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGhpcy50YWdOYW1lKSkuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBgJHtjbGFzc05hbWV9XyR7b2NjdXJyZW5jZX1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIEJhc2VDb21wb25lbnQuaXNCYXNlQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxuICAgIF0sIEJhc2VDb21wb25lbnQucHJvdG90eXBlLCBcImlzQmFzZUNvbXBvbmVudFwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgQmFzZUNvbXBvbmVudC5wcm90b3R5cGUsIFwiY2xhc3NOYW1lXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KHsgZGlzYWJsZVR5cGVHdWFyZDogdHJ1ZSB9KSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuICAgIF0sIEJhc2VDb21wb25lbnQucHJvdG90eXBlLCBcInRlbXBsYXRlU3RyaW5nXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIHR5cGVvZiAoX2IgPSB0eXBlb2YgSW5kZXhTdHJ1Y3R1cmUgIT09IFwidW5kZWZpbmVkXCIgJiYgSW5kZXhTdHJ1Y3R1cmUpID09PSBcImZ1bmN0aW9uXCIgPyBfYiA6IE9iamVjdClcbiAgICBdLCBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJ0ZW1wbGF0ZVBhcmFtc1wiLCB2b2lkIDApO1xuICAgIHJldHVybiBCYXNlQ29tcG9uZW50O1xufVxuZXhwb3J0cy5CYXNlQ29tcG9uZW50RmFjdG9yeSA9IEJhc2VDb21wb25lbnRGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUW1GelpVTnZiWEJ2Ym1WdWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMMnhwWWk5Q1lYTmxRMjl0Y0c5dVpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVRkJMRFJDUVVFd1FqdEJRVU14UWl4MVEwRkJhMFE3UVVGRGJFUXNjMFJCUVRSRU8wRkJRelZFTEd0RVFVRjFSVHRCUVVkMlJTdzJRMEZCYlVnN1FVRkRia2dzTUVOQlFXZEhPMEZCVldoSExGTkJRV2RDTEc5Q1FVRnZRaXhEUVVGNVF5eGxRVUZ6UWpzN1NVRlJMMFlzVFVGQlpTeGhRVUZqTEZOQlFWRXNaVUZCWlR0UlFXdEhhRVFzV1VGQldTeEhRVUZITEVsQlFWYzdXVUZEZEVJc1MwRkJTeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdXVUYwUkVNc1QwRkJSU3hIUVVGWExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3hEUVVGRE8xbEJVVGRDTEc5Q1FVRmxMRWRCUVZrc1NVRkJTU3hEUVVGRE8xbEJVMmhETEdOQlFWTXNSMEZCVnl4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNN1dVRlZjRU1zYlVKQlFXTXNSMEZCYzBJc01FSkJRVEJDTEVOQlFVTTdXVUZYYkVjc2JVSkJRV01zUjBGQmJVSXNSVUZCUlN4RFFVRkRPMUZCYVVJeFJDeERRVUZETzFGQmVFVkVMRWxCUVZjc1ZVRkJWVHRaUVVOcVFpeE5RVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRM2hDTEUxQlFVMHNWVUZCVlN4SFFVRkhMSE5DUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTEcxQ1FVRnRRaXhEUVVGeFF5eERRVUZETzFsQlF6bEdMRWxCUVVrc1ZVRkJWU3hGUVVGRk8yZENRVU5hTEV0QlFVc3NUVUZCVFN4SlFVRkpMRWxCUVVrc1ZVRkJWU3hGUVVGRk8yOUNRVU16UWl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJTdzRRa0ZCYlVJc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0cFFrRkRjRVE3WVVGRFNqdFpRVU5FTEU5QlFVOHNTMEZCU3l4RFFVRkRPMUZCUTJwQ0xFTkJRVU03VVVGM1JFUXNTVUZCWXl4UlFVRlJPMWxCUTJ4Q0xFMUJRVTBzVVVGQlVTeEhRVUZITEhOQ1FVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxHdENRVUZyUWl4RFFVRkRMRU5CUVVNN1dVRkRka1FzVDBGQlR5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTXpReXhEUVVGRE8xRkJaVTBzYjBKQlFXOUNMRU5CUVVNc1IwRkJWeXhGUVVGRkxFMUJRV1VzUlVGQlJTeFBRVUZuUWp0WlFVTjBSU3hQUVVGUExESkNRVUZ2UWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFVkJRVVVzVFVGQlRTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUXpWRUxFTkJRVU03VVVGWFRTd3dRa0ZCTUVJc1EwRkJReXhIUVVGWExFVkJRVVVzVFVGQlZ5eEZRVUZGTEUxQlFXVTdXVUZEZGtVc1QwRkJUeXhwUTBGQk1FSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFMUJRVTBzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTnFSU3hEUVVGRE8xRkJWVTBzTWtKQlFUSkNMRU5CUVVNc1IwRkJWeXhGUVVGRkxFMUJRV1U3V1VGRE0wUXNUMEZCVHl4clEwRkJNa0lzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRekZFTEVOQlFVTTdVVUZYVFN4WlFVRlpMRU5CUVVNc1lVRkJjVUlzUlVGQlJTeExRVUZoTEVWQlFVVXNWMEZCYjBJc1NVRkJTVHRaUVVNNVJTeEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWxCUVVrc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNZVUZCWVN4RFFVRkRMRVZCUVVVN1owSkJRM1pFTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hoUVVGaExEaEVRVUU0UkN4RFFVRkRMRU5CUVVNN1lVRkRjRWM3V1VGRFJDeEpRVUZKTEV0QlFVc3NSVUZCUlR0blFrRkRVQ3hKUVVGSkxGVkJRVlVzUjBGQlJ5eExRVUZMTEVOQlFVTTdaMEpCUTNaQ0xFbEJRVWtzUTBGQlF5eHJRa0ZCVnl4RFFVRkRMRXRCUVVzc1EwRkJRenR2UWtGQlJTeFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVU5vUml4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExHRkJRV0VzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXp0blFrRkRPVU1zVlVGQlZTeEhRVUZITEcxRFFVRTBRaXhEUVVGRExFbEJRVWtzUlVGQlJTeGhRVUZoTEVOQlFVTXNRMEZCUXp0blFrRkRMMFFzU1VGQlNTeFJRVUZSTzI5Q1FVRlJMRWxCUVVzc1EwRkJReXhoUVVGaExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTTdZVUZEZWtRN08yZENRVUZOTEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03VVVGREwwTXNRMEZCUXp0UlFWRk5MR1ZCUVdVc1EwRkJReXhoUVVGeFFqdFpRVU40UXl4SlFVRkpMRWxCUVVrc1EwRkJReXhWUVVGVkxFbEJRVWtzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1lVRkJZU3hEUVVGRExFVkJRVVU3WjBKQlEzWkVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeGhRVUZoTEd0RlFVRnJSU3hEUVVGRExFTkJRVU03WVVGRGVFYzdXVUZEUkN4TFFVRkxMRU5CUVVNc1pVRkJaU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzFsQlF5OUNMRWxCUVVzc1EwRkJReXhoUVVGaExFTkJRVU1zUjBGQlJ5eFRRVUZUTEVOQlFVTTdVVUZETTBNc1EwRkJRenRSUVZWTkxFMUJRVTA3V1VGRFZDeE5RVUZOTEVsQlFVa3NSMEZCYlVJc1JVRkJSU3hEUVVGRE8xbEJRMmhETEV0QlFVc3NUVUZCVFN4SFFVRkhMRWxCUVVrc1NVRkJTU3hGUVVGRk8yZENRVU53UWl4SlFVRkpMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eFRRVUZUTEVWQlFVVTdiMEpCUTNwQ0xFMUJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenR2UWtGRE1VSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF6dHBRa0ZEZGtJN1lVRkRTanRaUVVORUxFOUJRVThzU1VGQlNTeERRVUZETzFGQlEyaENMRU5CUVVNN1VVRlhVeXh0UWtGQmJVSXNRMEZCUXl4SFFVRkhMRXRCUVZrN1dVRkZla01zU1VGQlNTeERRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlpMRU5CUVVNc1QwRkJUeXhGUVVGRk8yZENRVVZzUXl4SlFVRkpMR0ZCUVdFc1IwRkJSeXhKUVVGSkxFTkJRVU03WjBKQlEzcENMRWxCUVVrc1pVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNSVUZCUlR0dlFrRkRMMElzWVVGQllTeEhRVUZITEhWQ1FVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUlVGQlJTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNN2FVSkJRekZGTzJkQ1FVTkVMRWxCUVVrc1pVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNSVUZCUlR0dlFrRkRMMElzWVVGQllTeEhRVUZqTEVsQlFVa3NRMEZCUXl4alFVRmxMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXp0cFFrRkRMMFU3WjBKQlEwUXNTVUZCU1N4aFFVRmhMRVZCUVVVN2IwSkJRMllzVFVGQlRTeFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhGUVVGRkxFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMjlDUVVOMlJDeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRk5CUVZNc1JVRkJSU3hEUVVGRExHVkJRV1VzUTBGQlF5eGhRVUZoTEVWQlFVVXNWMEZCVnl4RFFVRkRMRU5CUVVNN2IwSkJRM2hGTEZWQlFWVXNRMEZCUXl4WFFVRlhMRU5CUVZrc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0cFFrRkRNVVE3WVVGRFNqdFJRVU5NTEVOQlFVTTdVVUZSVXl4cFFrRkJhVUlzUzBGQlZ5eERRVUZETzFGQlV6ZENMRzlDUVVGdlFpeExRVUZYTEVOQlFVTTdVVUZUYUVNc1pVRkJaU3hMUVVGWExFTkJRVU03VVVGUk0wSXNZVUZCWVN4TFFVRlhMRU5CUVVNN1VVRlJla0lzWjBKQlFXZENMRXRCUVZjc1EwRkJRenRSUVZNNVFpeG5Ra0ZCWjBJN1dVRkRjRUlzVFVGQlRTeFRRVUZUTEVkQlFVY3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMWxCUXk5RUxFMUJRVTBzVlVGQlZTeEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVONlJpeFBRVUZQTEVkQlFVY3NVMEZCVXl4SlFVRkpMRlZCUVZVc1JVRkJSU3hEUVVGRE8xRkJRM2hETEVOQlFVTTdPMGxCYUZGelFpdzJRa0ZCWlN4SFFVRlpMRWxCUVVrc1EwRkJRenRKUVhsQ01VTTdVVUZCV2l4elFrRkJVeXhGUVVGRk96czJRMEZCTmtNN1NVRlJOME03VVVGQldDeHhRa0ZCVVN4RlFVRkZPenN3UkVGQmFVUTdTVUZUYUVRN1VVRkJXQ3h4UWtGQlVTeEZRVUZGT3p0dlJFRkJhMFk3U1VGVmRrUTdVVUZCY2tNc2NVSkJRVkVzUTBGQlF5eEZRVUZGTEdkQ1FVRm5RaXhGUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZET3p0NVJFRkJiVVk3U1VGWE5VYzdVVUZCV0N4eFFrRkJVU3hGUVVGRk96aEVRVUV5UWl4alFVRmpMRzlDUVVGa0xHTkJRV003ZVVSQlFVMDdTVUZ2VFRsRUxFOUJRVThzWVVGQllTeERRVUZETzBGQlEzcENMRU5CUVVNN1FVRm9VMFFzYjBSQloxTkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBCYXNlQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICBjb25zdHJ1Y3RlZENhbGxiYWNrKCkgeyB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7IH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHsgfVxuICAgIGFkb3B0ZWRDYWxsYmFjaygpIHsgfVxufVxuZXhwb3J0cy5CYXNlQ29udHJvbGxlciA9IEJhc2VDb250cm9sbGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUW1GelpVTnZiblJ5YjJ4c1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMk5zYVdWdWRDOTBjeTlzYVdJdlFtRnpaVU52Ym5SeWIyeHNaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRlBRU3hOUVVGaExHTkJRV003U1VGRmRrSXNaMEpCUVdkQ0xFTkJRVU03U1VGVFVDeHRRa0ZCYlVJc1MwRkJTeXhEUVVGRE8wbEJVWHBDTEdsQ1FVRnBRaXhMUVVGTExFTkJRVU03U1VGVGRrSXNiMEpCUVc5Q0xFdEJRVXNzUTBGQlF6dEpRVk14UWl4bFFVRmxMRXRCUVVzc1EwRkJRenREUVVOc1F6dEJRWFJEUkN4M1EwRnpRME1pZlE9PSIsImltcG9ydCB7IGJhc2VDb25zdHJ1Y3RvciwgcHJvcGVydHkgfSBmcm9tIFwifmJkby91dGlscy9kZWNvcmF0b3JzXCI7XG5pbXBvcnQgeyBCRE9Nb2RlbCB9IGZyb20gXCJ+YmRvL2xpYi9CRE9Nb2RlbFwiO1xuaW1wb3J0IHsgZ2V0TmFtZXNwYWNlZFN0b3JhZ2UsIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlLCBkZWxldGVGcm9tTmFtZXNwYWNlZFN0b3JhZ2UgfSBmcm9tIFwifmNsaWVudC91dGlscy91dGlsXCI7XG5pbXBvcnQgeyBnZXRXaWxkY2FyZE1ldGFkYXRhLCBnZXRNZXRhZGF0YSB9IGZyb20gXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwifmNsaWVudC9saWIvTG9nZ2VyXCI7XG5pbXBvcnQgeyBEYXRhYmFzZU1hbmFnZXIgfSBmcm9tIFwifmNsaWVudC9saWIvRGF0YWJhc2VNYW5hZ2VyXCI7XG5pbXBvcnQgeyBBdHRyaWJ1dGUgfSBmcm9tICd+YmRvL2xpYi9BdHRyaWJ1dGUnO1xuaW1wb3J0IHsgV2F0Y2hlZCB9IGZyb20gJ35iZG8vbGliL1dhdGNoZWQnO1xuaW1wb3J0IHsgZ2V0UHJveHlUYXJnZXQsIGlzRXF1YWwsIGlzQXJyYXksIGRpZmZlcmVuY2UsIGlzT2JqZWN0LCBpc1ByaW1pdGl2ZSB9IGZyb20gXCJ+YmRvL3V0aWxzL3V0aWxcIjtcblxuY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcigpO1xuY29uc3QgZGF0YWJhc2VNYW5hZ2VyID0gRGF0YWJhc2VNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG5cbi8qKlxuICogUHJvdmlkZXMgYmFzaWMgZnVuY3Rpb25hbGl0eSBhbmQgZmllbGRzIGZvciBlYWNoIE1vZGVsIG9uIGVhY2ggc2lkZVxuICogKHNlcnZlciBhbmQgY2xpZW50KVxuICpcbiAqIEBleHBvcnRcbiAqIEBhYnN0cmFjdFxuICogQGNsYXNzIEJET01vZGVsXG4gKi9cbkBiYXNlQ29uc3RydWN0b3IoKVxuZXhwb3J0IGNsYXNzIENsaWVudE1vZGVsIGV4dGVuZHMgQkRPTW9kZWwge1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBqdXN0IGEgQkRPTW9kZWwgaWRlbnRpZmllciBpbiBjYXNlIHlvdSB3YW50IHRvIGtub3cgaWYgYSBub3RcbiAgICAgKiBpbml0aWFsaXplZCBjbGFzcyBpcyBhIG1vZGVsLlxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBCRE9Nb2RlbFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaXNDbGllbnRNb2RlbDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIGZvciBiZXR0ZXIgaWRlbnRpZmljYXRpb24gb2YgQkRPIG1vZGVscyBhbmQgaW5zdGFuY2UgY2hlY2tcbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBCRE9Nb2RlbFxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSgpIHB1YmxpYyByZWFkb25seSBpc0NsaWVudE1vZGVsOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gZXhpc3RpbmcgaW5zdGFuY2Ugb2YgdGhlIGN1cnJlbnQgbW9kZWwgdHlwZSBpZiBhdmFpbGFibGUgYW5kXG4gICAgICogb3RoZXJ3aXNlIGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgZmlyc3QgZnJvbSBwcm9wZXJ0aWVzIGluIGxvY2FsIGRhdGFiYXNlXG4gICAgICogYW5kIHVwZGF0ZXMgdGhpcyBwcm9wZXJ0aWVzLiBJZiB0aGVyZSBpcyBubyBlbnRyeSBpbiB0aGUgbG9jYWwgZGF0YWJhc2VcbiAgICAgKiBvbiBjbGllbnQgc2lkZSwgdGhlIHNlcnZlciB3aWxsIGJlIGFza2VkIGZvciBhbiBpbnN0YW5jZS4gSWYgdGhlcmUgaXMgbm9cbiAgICAgKiBzdWNoIGlkLCB1bmRlZmluZWQgd2lsbCBiZSByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX2lkXG4gICAgICogQHJldHVybnNcbiAgICAgKiBAbWVtYmVyb2YgQ2xpZW50TW9kZWxcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlQnlJRDxUIGV4dGVuZHMgQ2xpZW50TW9kZWw+KF9pZDogVFtcImlkXCJdKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiAobmV3IHRoaXMoKSBhcyB1bmtub3duIGFzIFQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlYXJjaGVzIGZvciBtb2RlbHMgb2YgY3VycmVudCBtb2RlbCB0eXBlIGJ5IGF0dHJpYnV0ZXMgaW4gdGhlIGxvY2FsXG4gICAgICogZGF0YWJhc2UgYW5kIGNyZWF0ZXMgaW5zdGFuY2VzIG9mIHRoZW0gdXNpbmcgZ2V0SW5zdGFuY2VCeUlELlxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7Q29uc3RQYXJhbXM8Q2xpZW50TW9kZWw+fSBfYXR0cmlidXRlc1xuICAgICAqIEByZXR1cm5zXG4gICAgICogQG1lbWJlcm9mIENsaWVudE1vZGVsXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZXNCeUF0dHJpYnV0ZXM8VCBleHRlbmRzIENsaWVudE1vZGVsPihfYXR0cmlidXRlczogQ29uc3RQYXJhbXM8VD4pOiBBcnJheTxUIHwgdW5kZWZpbmVkPiB7XG4gICAgICAgIHJldHVybiBbKG5ldyB0aGlzKCkgYXMgdW5rbm93biBhcyBUKV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VlIGRvYyBzdHJpbmcgaW4gfmNsaWVudC91dGlscy91dGlsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtuc1Byb3BdXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtmb3JjZU5TXVxuICAgICAqIEByZXR1cm5zXG4gICAgICogQG1lbWJlcm9mIENsaWVudE1vZGVsXG4gICAgICovXG4gICAgcHVibGljIGdldE5hbWVzcGFjZWRTdG9yYWdlKGtleTogc3RyaW5nLCBuc1Byb3A/OiBzdHJpbmcsIGZvcmNlTlM/OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGdldE5hbWVzcGFjZWRTdG9yYWdlKHRoaXMsIGtleSwgbnNQcm9wLCBmb3JjZU5TKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWUgZG9jIHN0cmluZyBpbiB+Y2xpZW50L3V0aWxzL3V0aWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKiBAcGFyYW0geyp9IG5ld1ZhbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbnNQcm9wXVxuICAgICAqIEByZXR1cm5zXG4gICAgICogQG1lbWJlcm9mIENsaWVudE1vZGVsXG4gICAgICovXG4gICAgcHVibGljIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGtleTogc3RyaW5nLCBuZXdWYWw6IGFueSwgbnNQcm9wPzogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5ld1ZhbCwgbnNQcm9wKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzZWUgZG9jIHN0cmluZyBpbiB+Y2xpZW50L3V0aWxzL3V0aWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW25zUHJvcF1cbiAgICAgKiBAcmV0dXJuc1xuICAgICAqIEBtZW1iZXJvZiBDbGllbnRNb2RlbFxuICAgICAqL1xuICAgIHB1YmxpYyBkZWxldGVGcm9tTmFtZXNwYWNlZFN0b3JhZ2Uoa2V5OiBzdHJpbmcsIG5zUHJvcD86IHN0cmluZykge1xuICAgICAgICByZXR1cm4gZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlKHRoaXMsIGtleSwgbnNQcm9wKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJcbiAgICAgKiBAbWVtYmVyb2YgQ2xpZW50TW9kZWxcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgc2F2ZShhdHRyPzogRGVmTm9uRnVuY1Byb3BOYW1lczx0aGlzPik6IFByb21pc2U8Q29uc3RQYXJhbXM8dGhpcz4+IHtcbiAgICAgICAgY29uc3QgZGVmaW5lZEF0dHJpYnV0ZXMgPSBnZXRNZXRhZGF0YSh0aGlzLCBcImRlZmluZWRBdHRyaWJ1dGVzXCIpO1xuICAgICAgICBpZiAoIWRlZmluZWRBdHRyaWJ1dGVzIHx8IGF0dHIgJiYgIWRlZmluZWRBdHRyaWJ1dGVzLmluY2x1ZGVzKGF0dHIpKSB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGRlZmluZWQgYXR0cmlidXRlc1wiKTtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IGF0dHIgPyBbYXR0cl0gOiBkZWZpbmVkQXR0cmlidXRlcztcbiAgICAgICAgY29uc3QgdW5zYXZlZENoYW5nZXM6IEluZGV4U3RydWN0dXJlID0gYXdhaXQgdGhpcy5nZXRVbnNhdmVkQ2hhbmdlcygpO1xuICAgICAgICBjb25zdCB0b1NhdmU6IEluZGV4U3RydWN0dXJlID0ge307XG4gICAgICAgIGNvbnN0IHNlbmRUb1NlcnZlcjogSW5kZXhTdHJ1Y3R1cmUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlcykge1xuICAgICAgICAgICAgaWYgKHVuc2F2ZWRDaGFuZ2VzLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJBdHRyID0gPHN0cmluZz5hdHRyaWJ1dGU7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJveHlWYWwgPSBnZXRQcm94eVRhcmdldCh1bnNhdmVkQ2hhbmdlc1tzdHJBdHRyXSk7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgbGV0IHdpbGRDYXJkTWV0YWRhdGE6IEF0dHJpYnV0ZSA9IGdldFdpbGRjYXJkTWV0YWRhdGEodGhpcywgc3RyQXR0cik7XG4gICAgICAgICAgICAgICAgaWYgKHdpbGRDYXJkTWV0YWRhdGEgaW5zdGFuY2VvZiBXYXRjaGVkKSB3aWxkQ2FyZE1ldGFkYXRhID0gd2lsZENhcmRNZXRhZGF0YS5zdWJPYmplY3QgYXMgQXR0cmlidXRlO1xuICAgICAgICAgICAgICAgIC8vIERldGVybWluZSBhdHRyaWJ1dGVzIHRvIHNhdmUgaW4gbG9jYWwgZGF0YWJhc2VcbiAgICAgICAgICAgICAgICBpZiAoIXdpbGRDYXJkTWV0YWRhdGEuZG9Ob3RQZXJzaXN0KSB0b1NhdmVbc3RyQXR0cl0gPSBwcm94eVZhbDtcbiAgICAgICAgICAgICAgICAvLyBEZXRlcm1pbmUgYXR0cmlidXRlcyB0byBzZW5kIHRvIHNlcnZlclxuICAgICAgICAgICAgICAgIGlmICghd2lsZENhcmRNZXRhZGF0YS5ub1NlcnZlckludGVyYWN0aW9uKSBzZW5kVG9TZXJ2ZXJbc3RyQXR0cl0gPSBwcm94eVZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoT2JqZWN0LmtleXModG9TYXZlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRhdGFiYXNlTWFuYWdlci5kYXRhYmFzZShcImRlZmF1bHRcIikuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb25OYW1lKS51cGRhdGUodGhpcy5pZCwgdG9TYXZlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoc2VuZFRvU2VydmVyKS5sZW5ndGgpIGxvZ2dlci5kZWJ1Zyhgc2VuZCAke0pTT04uc3RyaW5naWZ5KHNlbmRUb1NlcnZlcil9IHRvIHNlcnZlcmApO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuc2F2ZWRDaGFuZ2VzIGFzIENvbnN0UGFyYW1zPHRoaXM+KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqXG4gICAgICogQHBhcmFtIHtEZWZOb25GdW5jUHJvcE5hbWVzPHRoaXM+fSBhdHRyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAgICogQG1lbWJlcm9mIENsaWVudE1vZGVsXG4gICAgICovXG4gICAgcHVibGljIGRpc2NhcmQoX2F0dHI/OiBEZWZOb25GdW5jUHJvcE5hbWVzPHRoaXM+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDb25zdFBhcmFtczx0aGlzPj59XG4gICAgICogQG1lbWJlcm9mIENsaWVudE1vZGVsXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGdldFVuc2F2ZWRDaGFuZ2VzKCk6IFByb21pc2U8Q29uc3RQYXJhbXM8dGhpcz4+IHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbGxlY3Rpb25OYW1lKSByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJObyBjb2xsZWN0aW9uTmFtZSBwcm92aWRlZFwiKTtcbiAgICAgICAgY29uc3QgdW5zYXZlZENoYW5nZXM6IENvbnN0UGFyYW1zPHRoaXM+ID0ge307XG4gICAgICAgIGxldCBkYkNvbGxlY3Rpb24gPSBhd2FpdCBkYXRhYmFzZU1hbmFnZXIuZGF0YWJhc2UoXCJkZWZhdWx0XCIpLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uTmFtZSkuZ2V0KHRoaXMuaWQpO1xuICAgICAgICBjb25zdCBkZWZpbmVkQXR0cmlidXRlcyA9IGdldE1ldGFkYXRhKHRoaXMsIFwiZGVmaW5lZEF0dHJpYnV0ZXNcIikgfHwgW107XG4gICAgICAgIGRiQ29sbGVjdGlvbiA9IGRiQ29sbGVjdGlvbiB8fCB7fTtcbiAgICAgICAgZm9yIChjb25zdCBhdHRyIG9mIGRlZmluZWRBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBjb25zdCBzdHJBdHRyID0gPHN0cmluZz5hdHRyO1xuICAgICAgICAgICAgY29uc3QgYXR0clZhbCA9IGdldFByb3h5VGFyZ2V0KHRoaXNbYXR0cl0pO1xuICAgICAgICAgICAgaWYgKGlzQXJyYXkoYXR0clZhbCkgJiYgZGlmZmVyZW5jZShhdHRyVmFsLCBkYkNvbGxlY3Rpb25bc3RyQXR0cl0pLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICg8SW5kZXhTdHJ1Y3R1cmU+dW5zYXZlZENoYW5nZXMpW3N0ckF0dHJdID0gdGhpc1thdHRyXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoYXR0clZhbCkgJiYgIWlzRXF1YWwoYXR0clZhbCwgZGJDb2xsZWN0aW9uW3N0ckF0dHJdKSkge1xuICAgICAgICAgICAgICAgICg8SW5kZXhTdHJ1Y3R1cmU+dW5zYXZlZENoYW5nZXMpW3N0ckF0dHJdID0gdGhpc1thdHRyXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNQcmltaXRpdmUoYXR0clZhbCkgJiYgYXR0clZhbCAhPT0gZGJDb2xsZWN0aW9uW3N0ckF0dHJdKSB7XG4gICAgICAgICAgICAgICAgKDxJbmRleFN0cnVjdHVyZT51bnNhdmVkQ2hhbmdlcylbc3RyQXR0cl0gPSB0aGlzW2F0dHJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5zYXZlZENoYW5nZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYWwgcHJvY2VkdXJlIHRvIGhhbmRsZSBnZW5lcmFsIHR5cGUgZXJyb3JzIG9mIGFsbCBhdHRyaWJ1dGVzIGFuZFxuICAgICAqIHByb3BlcnRpZXMgZm9yIGNsaWVudCBzaWRlLlxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBwYXJhbSB7RXJyb3J9IGVycm9yXG4gICAgICogQG1lbWJlcm9mIENsaWVudE1vZGVsXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uVHlwZUNoZWNrRmFpbChlcnJvcjogRXJyb3IpIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cblxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBCRE9Sb3V0ZV8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET1JvdXRlXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IExvZ2dlcl8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0xvZ2dlclwiKTtcbmNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXJfMS5Mb2dnZXIoKTtcbmNsYXNzIENsaWVudFJvdXRlIGV4dGVuZHMgQkRPUm91dGVfMS5CRE9Sb3V0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuaXNDbGllbnRSb3V0ZSA9IHRydWU7XG4gICAgfVxuICAgIGdldCByb3V0ZXIoKSB7XG4gICAgICAgIGNvbnN0IHJvdXRlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIHRoaXMucm91dGVzKSB7XG4gICAgICAgICAgICByb3V0ZXNbYCR7dGhpcy5yb3V0ZXJOYW1lU3BhY2V9LyR7cm91dGV9YC5yZXBsYWNlKFwiLy9cIiwgXCIvXCIpXSA9IHRoaXMuaGFuZGxlR2V0LmJpbmQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvdXRlcztcbiAgICB9XG4gICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBzdXBlci50ZW1wbGF0ZVBhcmFtcyhwYXJhbXMpO1xuICAgIH1cbiAgICBhc3luYyBoYW5kbGVHZXQocGFyYW1zKSB7XG4gICAgICAgIGxvZ2dlci5sb2codXRpbF8xLm1lcmdlKGF3YWl0IHRoaXMudGVtcGxhdGVQYXJhbXNGcm9tU2VydmVyKCksIGF3YWl0IHRoaXMudGVtcGxhdGVQYXJhbXMocGFyYW1zKSkpO1xuICAgIH1cbiAgICBhc3luYyB0ZW1wbGF0ZVBhcmFtc0Zyb21TZXJ2ZXIoKSB7XG4gICAgICAgIGxldCB1cmxUb0Fza0ZvciA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICBpZiAoIXVybFRvQXNrRm9yKVxuICAgICAgICAgICAgdXJsVG9Bc2tGb3IgPSBgL2A7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdYLUdhbWUtQXMtSlNPTic6ICd0cnVlJyB9KTtcbiAgICAgICAgcmV0dXJuIChhd2FpdCBmZXRjaCh1cmxUb0Fza0ZvciwgeyBoZWFkZXJzIH0pKS5qc29uKCk7XG4gICAgfVxufVxuZXhwb3J0cy5DbGllbnRSb3V0ZSA9IENsaWVudFJvdXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTJ4cFpXNTBVbTkxZEdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyTnNhV1Z1ZEM5MGN5OXNhV0l2UTJ4cFpXNTBVbTkxZEdVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN4blJFRkJOa003UVVGRE4wTXNNRU5CUVhkRE8wRkJRM2hETEN0RFFVRTBRenRCUVVVMVF5eE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMR1ZCUVUwc1JVRkJSU3hEUVVGRE8wRkJWVFZDTEUxQlFXRXNWMEZCV1N4VFFVRlJMRzFDUVVGUk8wbEJRWHBET3p0UlFWRnZRaXhyUWtGQllTeEhRVUZaTEVsQlFVa3NRMEZCUXp0SlFYTkViRVFzUTBGQlF6dEpRVGxEUnl4SlFVRlhMRTFCUVUwN1VVRkRZaXhOUVVGTkxFMUJRVTBzUjBGQlVTeEZRVUZGTEVOQlFVTTdVVUZEZGtJc1MwRkJTeXhOUVVGTkxFdEJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMWxCUXpkQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRWxCUVVrc1MwRkJTeXhGUVVGRkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xTkJRemRHTzFGQlEwUXNUMEZCVHl4TlFVRk5MRU5CUVVNN1NVRkRiRUlzUTBGQlF6dEpRVmRUTEV0QlFVc3NRMEZCUXl4alFVRmpMRU5CUVVNc1RVRkJjMEk3VVVGRGFrUXNUMEZCVHl4TFFVRkxMRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlEzaERMRU5CUVVNN1NVRlRVeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFYTkNPMUZCUXpWRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNXVUZCU3l4RFFVRkRMRTFCUVUwc1NVRkJTU3hEUVVGRExIZENRVUYzUWl4RlFVRkZMRVZCUVVVc1RVRkJUU3hKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOb1J5eERRVUZETzBsQlZVOHNTMEZCU3l4RFFVRkRMSGRDUVVGM1FqdFJRVU5zUXl4SlFVRkpMRmRCUVZjc1IwRkJSeXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETzFGQlEzQkRMRWxCUVVrc1EwRkJReXhYUVVGWE8xbEJRVVVzVjBGQlZ5eEhRVUZITEVkQlFVY3NRMEZCUXp0UlFVTndReXhOUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEU5QlFVOHNRMEZCUXl4RlFVRkZMR2RDUVVGblFpeEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRNVVFzVDBGQlR5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRmRCUVZjc1JVRkJSU3hGUVVGRkxFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRKUVVNeFJDeERRVUZETzBOQlEwbzdRVUU1UkVRc2EwTkJPRVJESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQkRPQ29uZmlnTWFuYWdlcl8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET0NvbmZpZ01hbmFnZXJcIik7XG5jbGFzcyBDb25maWdNYW5hZ2VyIGV4dGVuZHMgQkRPQ29uZmlnTWFuYWdlcl8xLkJET0NvbmZpZ01hbmFnZXIge1xuICAgIHNldChfY29uZmlnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgbG9hZChfY29uZmlnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgZ2V0Q2FjaGUoX2NvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIHNldENhY2hlKF9jb25maWcsIF92YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxufVxuZXhwb3J0cy5Db25maWdNYW5hZ2VyID0gQ29uZmlnTWFuYWdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyOXVabWxuVFdGdVlXZGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDJ4cFlpOURiMjVtYVdkTllXNWhaMlZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUVzWjBWQlFUWkVPMEZCV1RkRUxFMUJRV0VzWVVGQll5eFRRVUZSTEcxRFFVRm5RanRKUVZONFF5eEhRVUZITEVOQlFVTXNUMEZCWlR0UlFVTjBRaXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhsQ1FVRjVRaXhEUVVGRExFTkJRVU03U1VGREwwTXNRMEZCUXp0SlFWVlRMRWxCUVVrc1EwRkJReXhQUVVGbE8xRkJRekZDTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2VVSkJRWGxDTEVOQlFVTXNRMEZCUXp0SlFVTXZReXhEUVVGRE8wbEJWVk1zVVVGQlVTeERRVUZETEU5QlFXVTdVVUZET1VJc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eDVRa0ZCZVVJc1EwRkJReXhEUVVGRE8wbEJReTlETEVOQlFVTTdTVUZYVXl4UlFVRlJMRU5CUVVNc1QwRkJaU3hGUVVGRkxFMUJRVmM3VVVGRE0wTXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4RFFVRkRPMGxCUXk5RExFTkJRVU03UTBGRFNqdEJRV3BFUkN4elEwRnBSRU1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJET0RhdGFiYXNlTWFuYWdlcl8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET0RhdGFiYXNlTWFuYWdlclwiKTtcbmNvbnN0IGxvY2FsZm9yYWdlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibG9jYWxmb3JhZ2VcIikpO1xuY2xhc3MgRGF0YWJhc2VNYW5hZ2VyIGV4dGVuZHMgQkRPRGF0YWJhc2VNYW5hZ2VyXzEuQkRPRGF0YWJhc2VtYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kYXRhYmFzZXMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFEYXRhYmFzZU1hbmFnZXIuaW5zdGFuY2UpXG4gICAgICAgICAgICBEYXRhYmFzZU1hbmFnZXIuaW5zdGFuY2UgPSBuZXcgRGF0YWJhc2VNYW5hZ2VyKCk7XG4gICAgICAgIHJldHVybiBEYXRhYmFzZU1hbmFnZXIuaW5zdGFuY2U7XG4gICAgfVxuICAgIGRhdGFiYXNlKG5hbWUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0YWJhc2UgPSBuYW1lO1xuICAgICAgICBpZiAoIXRoaXMuZGF0YWJhc2VzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFiYXNlcy5zZXQobmFtZSwgbG9jYWxmb3JhZ2VfMS5kZWZhdWx0LmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGRyaXZlcjogW2xvY2FsZm9yYWdlXzEuZGVmYXVsdC5JTkRFWEVEREIsIGxvY2FsZm9yYWdlXzEuZGVmYXVsdC5XRUJTUUxdXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudENvbGxlY3Rpb247XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRHcmFwaDtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudFZpZXc7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb2xsZWN0aW9uKG5hbWUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q29sbGVjdGlvbiA9IGBjb2xsZWN0aW9uXyR7bmFtZX1gO1xuICAgICAgICB0aGlzLmdldERhdGFiYXNlKCkuY29uZmlnKHsgc3RvcmVOYW1lOiB0aGlzLmN1cnJlbnRDb2xsZWN0aW9uIH0pO1xuICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50R3JhcGg7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRWaWV3O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdmlldyhuYW1lKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZXcgPSBgdmlld18ke25hbWV9YDtcbiAgICAgICAgdGhpcy5nZXREYXRhYmFzZSgpLmNvbmZpZyh7IHN0b3JlTmFtZTogdGhpcy5jdXJyZW50VmlldyB9KTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudENvbGxlY3Rpb247XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRHcmFwaDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdyYXBoKG5hbWUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50R3JhcGggPSBgZ3JhcGhfJHtuYW1lfWA7XG4gICAgICAgIHRoaXMuZ2V0RGF0YWJhc2UoKS5jb25maWcoeyBzdG9yZU5hbWU6IHRoaXMuY3VycmVudEdyYXBoIH0pO1xuICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50Q29sbGVjdGlvbjtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudFZpZXc7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5nZXRJdGVtKGlkKTtcbiAgICB9XG4gICAgaW5zZXJ0KGlkLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhYmFzZSgpLnNldEl0ZW0oaWQsIHZhbHVlKTtcbiAgICB9XG4gICAgdXBkYXRlKGlkLCB2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5nZXQoaWQpIHx8IHt9O1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVzdWx0LCB2YWx1ZXMpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuaW5zZXJ0KGlkLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZWxldGUoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5yZW1vdmVJdGVtKGlkKTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGFiYXNlKCkuY2xlYXIoKTtcbiAgICB9XG4gICAgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhYmFzZSgpLmxlbmd0aCgpO1xuICAgIH1cbiAgICBrZXkoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5rZXkoaW5kZXgpO1xuICAgIH1cbiAgICBrZXlzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhYmFzZSgpLmtleXMoKTtcbiAgICB9XG4gICAgaXRlcmF0ZShpdGVyYXRvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhYmFzZSgpLml0ZXJhdGUoaXRlcmF0b3IpO1xuICAgIH1cbiAgICBnZXREYXRhYmFzZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnREYXRhYmFzZSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIERhdGFiYXNlIGNob3NlblwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YWJhc2VzLmdldCh0aGlzLmN1cnJlbnREYXRhYmFzZSk7XG4gICAgfVxufVxuZXhwb3J0cy5EYXRhYmFzZU1hbmFnZXIgPSBEYXRhYmFzZU1hbmFnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSR0YwWVdKaGMyVk5ZVzVoWjJWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOWpiR2xsYm5RdmRITXZiR2xpTDBSaGRHRmlZWE5sVFdGdVlXZGxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkRRU3h2UlVGQmFVVTdRVUZEYWtVc2MwVkJRWE5ETzBGQlJYUkRMRTFCUVdFc1pVRkJkMFlzVTBGQlVTeDFRMEZCYTBJN1NVRnRRak5JTzFGQlEwa3NTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRlNTaXhqUVVGVExFZEJRWGRDTEVsQlFVa3NSMEZCUnl4RlFVRnJRaXhEUVVGRE8wbEJVMjVGTEVOQlFVTTdTVUZRVFN4TlFVRk5MRU5CUVVNc1YwRkJWenRSUVVOeVFpeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRkZCUVZFN1dVRkJSU3hsUVVGbExFTkJRVU1zVVVGQlVTeEhRVUZITEVsQlFVa3NaVUZCWlN4RlFVRkZMRU5CUVVNN1VVRkRhRVlzVDBGQlR5eGxRVUZsTEVOQlFVTXNVVUZCVVN4RFFVRkRPMGxCUTNCRExFTkJRVU03U1VGTlRTeFJRVUZSTEVOQlFVTXNTVUZCVHp0UlFVTnVRaXhKUVVGSkxFTkJRVU1zWlVGQlpTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTTFRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRGRFTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeEZRVUZGTEhGQ1FVRlhMRU5CUVVNc1kwRkJZeXhEUVVGRE8yZENRVU5vUkN4SlFVRkpMRVZCUVVVc1NVRkJTVHRuUWtGRFZpeE5RVUZOTEVWQlFVVXNRMEZCUXl4eFFrRkJWeXhEUVVGRExGTkJRVk1zUlVGQlJTeHhRa0ZCVnl4RFFVRkRMRTFCUVUwc1EwRkJRenRoUVVOMFJDeERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTlFPMUZCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNN1VVRkRPVUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRPMUZCUTNwQ0xFOUJRVThzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0UlFVTjRRaXhQUVVGUExFbEJRVWtzUTBGQlF6dEpRVU5vUWl4RFFVRkRPMGxCUlUwc1ZVRkJWU3hEUVVGRExFbEJRVTg3VVVGRGNrSXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEhRVUZOTEdOQlFXTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRha1FzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEycEZMRTlCUVU4c1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF6dFJRVU42UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRGVFSXNUMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkRhRUlzUTBGQlF6dEpRVVZOTEVsQlFVa3NRMEZCUXl4SlFVRlBPMUZCUTJZc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlRTeFJRVUZSTEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUTNKRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRNMFFzVDBGQlR5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU03VVVGRE9VSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRE8xRkJRM3BDTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTJoQ0xFTkJRVU03U1VGRlRTeExRVUZMTEVOQlFVTXNTVUZCVHp0UlFVTm9RaXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZOTEZOQlFWTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRka01zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNMVJDeFBRVUZQTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF6dFJRVU01UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRGVFSXNUMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkRhRUlzUTBGQlF6dEpRVVZOTEVkQlFVY3NRMEZCUXl4RlFVRlZPMUZCUTJwQ0xFOUJRVThzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU14UXl4RFFVRkRPMGxCUlUwc1RVRkJUU3hEUVVGRExFVkJRVlVzUlVGQlJTeExRVUZyUXp0UlFVTjRSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEycEVMRU5CUVVNN1NVRkZUU3hOUVVGTkxFTkJRVU1zUlVGQlZTeEZRVUZGTEUxQlFXMURPMUZCUTNwRUxFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJUdFpRVU42UXl4SlFVRkpPMmRDUVVOQkxFMUJRVTBzVFVGQlRTeEhRVUZITEUxQlFVMHNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdaMEpCUTNoRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8yZENRVU01UWl4TlFVRk5MRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMmRDUVVNNVFpeFBRVUZQTEVWQlFVVXNRMEZCUXp0aFFVTmlPMWxCUVVNc1QwRkJUeXhMUVVGTExFVkJRVVU3WjBKQlExb3NUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8yRkJRMnBDTzFGQlEwd3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRVQ3hEUVVGRE8wbEJSVTBzVFVGQlRTeERRVUZETEVWQlFWVTdVVUZEY0VJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRemRETEVOQlFVTTdTVUZGVFN4TFFVRkxPMUZCUTFJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1NVRkRkRU1zUTBGQlF6dEpRVVZOTEUxQlFVMDdVVUZEVkN4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0SlFVTjJReXhEUVVGRE8wbEJSVTBzUjBGQlJ5eERRVUZETEV0QlFXRTdVVUZEY0VJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRM3BETEVOQlFVTTdTVUZGVFN4SlFVRkpPMUZCUTFBc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1NVRkRja01zUTBGQlF6dEpRVVZOTEU5QlFVOHNRMEZCUXl4UlFVRTRSanRSUVVONlJ5eFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdTVUZEYUVRc1EwRkJRenRKUVVWUExGZEJRVmM3VVVGRFppeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVN1dVRkJSU3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEc5Q1FVRnZRaXhEUVVGRExFTkJRVU03VVVGRGFrVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRm5RaXhEUVVGRE8wbEJRMjVGTEVOQlFVTTdRMEZGU2p0QlFTOUhSQ3d3UTBFclIwTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBCRE9Mb2dnZXJfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Mb2dnZXJcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xubGV0IExvZ2dlciA9IGNsYXNzIExvZ2dlciBleHRlbmRzIEJET0xvZ2dlcl8xLkJET0xvZ2dlciB7XG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgICAgIHRoaXMubG9nTGV2ZWxDb2xvcnMgPSB7XG4gICAgICAgICAgICBsb2c6ICdjb2xvcjogZ3JheTsgZm9udC13ZWlnaHQ6IGJvbGQ7JyxcbiAgICAgICAgICAgIGRlYnVnOiAnY29sb3I6IGdyZWVuOyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgICAgICAgICAgaW5mbzogJ2NvbG9yOiAjMDA4MDZCOyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgICAgICAgICAgd2FybjogJ2NvbG9yOiAjODA4MDAwOyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgICAgICAgICAgZXJyb3I6ICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogYm9sZDsnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldEhlYWRlcihsb2dMZXZlbCwgcHJpbnRFbnYgPSAnY29uc29sZScpIHtcbiAgICAgICAgY29uc3QgcHJvY0luZm8gPSB0aGlzLmdldFByb2NJbmZvKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gdGhpcy5jdXJyZW50VGltZSgpO1xuICAgICAgICBjb25zdCB1cHBlckxvZ0xldmVsID0gbG9nTGV2ZWwudG9VcHBlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9nUG9pbnQgPSB0aGlzLmdldExvZ1BvaW50KCk7XG4gICAgICAgIGNvbnN0IHJlc2V0U3R5bGUgPSAnY29sb3I6IGJsYWNrOyBmb250LXdlaWdodDogbm9ybWFsJztcbiAgICAgICAgY29uc3QgbWFnZW50YSA9ICdjb2xvcjogIzgwMDA4MDsgZm9udC13ZWlnaHQ6IG5vcm1hbCc7XG4gICAgICAgIGNvbnN0IGN5YW4gPSAnY29sb3I6ICMwMDgwNkI7IGZvbnQtd2VpZ2h0OiBub3JtYWwnO1xuICAgICAgICBpZiAocHJpbnRFbnYgPT09ICdjb25zb2xlJykge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkTG9nTGV2ZWwgPSB0aGlzLmxvZ0xldmVsQ29sb3JzW2xvZ0xldmVsXTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZExvZ1BvaW50ID0gbWFnZW50YTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBjeWFuO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkUHJvY0luZm8gPSBtYWdlbnRhO1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBgJWNbJWMke3VwcGVyTG9nTGV2ZWx9ICVjLSAlYyR7cHJvY0luZm99ICVjLSAlYyR7Y3VycmVudFRpbWV9ICVjYXQgJWMke2xvZ1BvaW50fSVjXWAsXG4gICAgICAgICAgICAgICAgcmVzZXRTdHlsZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRMb2dMZXZlbCxcbiAgICAgICAgICAgICAgICByZXNldFN0eWxlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZFByb2NJbmZvLFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkVGltZSxcbiAgICAgICAgICAgICAgICByZXNldFN0eWxlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZExvZ1BvaW50LFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGVcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBbJHt1cHBlckxvZ0xldmVsfSAtICR7cHJvY0luZm99IC0gJHtjdXJyZW50VGltZX0gLSAke2xvZ1BvaW50fV1gO1xuICAgIH1cbiAgICB3cml0ZVRvRmlsZShfbG9nTGV2ZWwsIF9tZXNzYWdlKSB7XG4gICAgfVxufTtcbkxvZ2dlciA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIENvbnN0UGFyYW1zICE9PSBcInVuZGVmaW5lZFwiICYmIENvbnN0UGFyYW1zKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3RdKVxuXSwgTG9nZ2VyKTtcbmV4cG9ydHMuTG9nZ2VyID0gTG9nZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVEc5bloyVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlqYkdsbGJuUXZkSE12YkdsaUwweHZaMmRsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxHdEVRVUUyUlR0QlFVTTNSU3h6UkVGQmQwUTdRVUZWZUVRc1NVRkJZU3hOUVVGTkxFZEJRVzVDTEUxQlFXRXNUVUZCVHl4VFFVRlJMSEZDUVVGVE8wbEJaV3BETEZsQlFWa3NUVUZCTkVJN1VVRkRjRU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCVkZZc2JVSkJRV01zUjBGQlJ6dFpRVU55UWl4SFFVRkhMRVZCUVVVc2FVTkJRV2xETzFsQlEzUkRMRXRCUVVzc1JVRkJSU3hyUTBGQmEwTTdXVUZEZWtNc1NVRkJTU3hGUVVGRkxHOURRVUZ2UXp0WlFVTXhReXhKUVVGSkxFVkJRVVVzYjBOQlFXOURPMWxCUXpGRExFdEJRVXNzUlVGQlJTeG5RMEZCWjBNN1UwRkRNVU1zUTBGQlF6dEpRVWxHTEVOQlFVTTdTVUZYVXl4VFFVRlRMRU5CUVVNc1VVRkJiVUlzUlVGQlJTeFhRVUU0UWl4VFFVRlRPMUZCUXpWRkxFMUJRVTBzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRSUVVOd1F5eE5RVUZOTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03VVVGRGRrTXNUVUZCVFN4aFFVRmhMRWRCUVVjc1VVRkJVU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzFGQlF6ZERMRTFCUVUwc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVTndReXhOUVVGTkxGVkJRVlVzUjBGQlJ5eHRRMEZCYlVNc1EwRkJRenRSUVVOMlJDeE5RVUZOTEU5QlFVOHNSMEZCUnl4eFEwRkJjVU1zUTBGQlF6dFJRVU4wUkN4TlFVRk5MRWxCUVVrc1IwRkJSeXh4UTBGQmNVTXNRMEZCUXp0UlFVTnVSQ3hKUVVGSkxGRkJRVkVzUzBGQlN5eFRRVUZUTEVWQlFVVTdXVUZEZUVJc1RVRkJUU3hwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFsQlEzaEVMRTFCUVUwc2FVSkJRV2xDTEVkQlFVY3NUMEZCVHl4RFFVRkRPMWxCUTJ4RExFMUJRVTBzWVVGQllTeEhRVUZITEVsQlFVa3NRMEZCUXp0WlFVTXpRaXhOUVVGTkxHbENRVUZwUWl4SFFVRkhMRTlCUVU4c1EwRkJRenRaUVVOc1F5eFBRVUZQTzJkQ1FVTklMRkZCUVZFc1lVRkJZU3hWUVVGVkxGRkJRVkVzVlVGQlZTeFhRVUZYTEZkQlFWY3NVVUZCVVN4TFFVRkxPMmRDUVVOd1JpeFZRVUZWTzJkQ1FVTldMR2xDUVVGcFFqdG5Ra0ZEYWtJc1ZVRkJWVHRuUWtGRFZpeHBRa0ZCYVVJN1owSkJRMnBDTEZWQlFWVTdaMEpCUTFZc1lVRkJZVHRuUWtGRFlpeFZRVUZWTzJkQ1FVTldMR2xDUVVGcFFqdG5Ra0ZEYWtJc1ZVRkJWVHRoUVVOaUxFTkJRVU03VTBGRFREdFJRVU5FTEU5QlFVOHNTVUZCU1N4aFFVRmhMRTFCUVUwc1VVRkJVU3hOUVVGTkxGZEJRVmNzVFVGQlRTeFJRVUZSTEVkQlFVY3NRMEZCUXp0SlFVTTNSU3hEUVVGRE8wbEJWVk1zVjBGQlZ5eERRVUZETEZOQlFXOUNMRVZCUVVVc1VVRkJZVHRKUVVWNlJDeERRVUZETzBOQlEwb3NRMEZCUVR0QlFYQkZXU3hOUVVGTk8wbEJSR3hDTERSQ1FVRmxMRVZCUVVVN2FVVkJaMEpQTEZkQlFWY3NiMEpCUVZnc1YwRkJWenRIUVdaMlFpeE5RVUZOTEVOQmIwVnNRanRCUVhCRldTeDNRa0ZCVFNKOSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJET1Rlc3RfMSA9IHJlcXVpcmUoXCJ+YmRvL21vZGVscy9CRE9UZXN0XCIpO1xuY29uc3QgQ2xpZW50TW9kZWxfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9DbGllbnRNb2RlbFwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5sZXQgVGVzdCA9IGNsYXNzIFRlc3QgZXh0ZW5kcyBCRE9UZXN0XzEuQkRPVGVzdEZhY3RvcnkoQ2xpZW50TW9kZWxfMS5DbGllbnRNb2RlbCkge1xuICAgIGNvbnN0cnVjdG9yKF9wYXJhbXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgdGVzdCgpIHtcbiAgICB9XG59O1xuVGVzdCA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3Rvcih7IGNvbGxlY3Rpb25OYW1lOiBcIlRlc3RcIiB9KSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBDb25zdFBhcmFtcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBDb25zdFBhcmFtcykgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0XSlcbl0sIFRlc3QpO1xuZXhwb3J0cy5UZXN0ID0gVGVzdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHVnpkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDIxdlpHVnNjeTlVWlhOMExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFTeHBSRUZCY1VRN1FVRkRja1FzZVVSQlFYTkVPMEZCUTNSRUxITkVRVUYzUkR0QlFWVjRSQ3hKUVVGaExFbEJRVWtzUjBGQmFrSXNUVUZCWVN4SlFVRkxMRk5CUVZFc2QwSkJRV01zUTBGQlF5eDVRa0ZCVnl4RFFVRkRPMGxCUldwRUxGbEJRVmtzVDBGQk1rSTdVVUZEYmtNc1MwRkJTeXhGUVVGRkxFTkJRVU03U1VGRFdpeERRVUZETzBsQlQwMHNTVUZCU1R0SlFVVllMRU5CUVVNN1EwRkRTaXhEUVVGQk8wRkJaRmtzU1VGQlNUdEpRVVJvUWl3MFFrRkJaU3hEUVVGRExFVkJRVVVzWTBGQll5eEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRPMmxGUVVkc1FpeFhRVUZYTEc5Q1FVRllMRmRCUVZjN1IwRkdlRUlzU1VGQlNTeERRV05vUWp0QlFXUlpMRzlDUVVGSkluMD0iLCJcbmltcG9ydCB7IEJET1Rlc3QxRmFjdG9yeSB9IGZyb20gXCJ+YmRvL21vZGVscy9CRE9UZXN0MVwiO1xuaW1wb3J0IHsgVGVzdCB9IGZyb20gXCJ+Y2xpZW50L21vZGVscy9UZXN0XCI7XG5pbXBvcnQgeyBiYXNlQ29uc3RydWN0b3IgfSBmcm9tIFwifmJkby91dGlscy9kZWNvcmF0b3JzXCI7XG5cbi8qKlxuICogVGVzdFxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBUZXN0MVxuICogQGV4dGVuZHMge0JET1Rlc3QxRmFjdG9yeSgpfVxuICovXG5AYmFzZUNvbnN0cnVjdG9yKHsgY29sbGVjdGlvbk5hbWU6IFwiVGVzdDFcIiB9KVxuZXhwb3J0IGNsYXNzIFRlc3QxIGV4dGVuZHMgQkRPVGVzdDFGYWN0b3J5KFRlc3QpIHtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmFtcz86IENvbnN0UGFyYW1zPFRlc3QxPikge1xuICAgICAgICBzdXBlcihwYXJhbXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRlc3RcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBUZXN0MVxuICAgICAqL1xuICAgIHB1YmxpYyB3YWRkZSgpIHtcbiAgICAgICAgdGhpcy5iaW5kaW5ncy5nZXQoXCJ0aXRsZVwiKTtcbiAgICB9XG59XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vQ29uZmlnLnRzXCI6IFwiLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvQ29uZmlnLnRzXCIsXG5cdFwiLi9HYW1lTG9iYnkudHNcIjogXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9HYW1lTG9iYnkudHNcIixcblx0XCIuL0hvbWUudHNcIjogXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9Ib21lLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLnRzJFwiOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ2xpZW50Um91dGVfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9DbGllbnRSb3V0ZVwiKTtcbmNvbnN0IEJET0NvbmZpZ18xID0gcmVxdWlyZShcIn5iZG8vcm91dGVzL0JET0NvbmZpZ1wiKTtcbmNsYXNzIENvbmZpZyBleHRlbmRzIEJET0NvbmZpZ18xLkJET0NvbmZpZ0ZhY3RvcnkoQ2xpZW50Um91dGVfMS5DbGllbnRSb3V0ZSkge1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ29uZmlnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTI5dVptbG5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlqYkdsbGJuUXZkSE12Y205MWRHVnpMME52Ym1acFp5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxIbEVRVUZ6UkR0QlFVTjBSQ3h4UkVGQmVVUTdRVUZYZWtRc1RVRkJjVUlzVFVGQlR5eFRRVUZSTERSQ1FVRm5RaXhEUVVGRExIbENRVUZYTEVOQlFVTTdRMEZCU1R0QlFVRnlSU3g1UWtGQmNVVWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBDbGllbnRSb3V0ZV8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0NsaWVudFJvdXRlXCIpO1xuY29uc3QgQkRPR2FtZUxvYmJ5XzEgPSByZXF1aXJlKFwifmJkby9yb3V0ZXMvQkRPR2FtZUxvYmJ5XCIpO1xuY2xhc3MgR2FtZUxvYmJ5IGV4dGVuZHMgQkRPR2FtZUxvYmJ5XzEuQkRPR2FtZUxvYmJ5RmFjdG9yeShDbGllbnRSb3V0ZV8xLkNsaWVudFJvdXRlKSB7XG4gICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZXN0OiAnbG9sJ1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEdhbWVMb2JieTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVIyRnRaVXh2WW1KNUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOWpiR2xsYm5RdmRITXZjbTkxZEdWekwwZGhiV1ZNYjJKaWVTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxIbEVRVUZ6UkR0QlFVTjBSQ3d5UkVGQkswUTdRVUZUTDBRc1RVRkJjVUlzVTBGQlZTeFRRVUZSTEd0RFFVRnRRaXhEUVVGRExIbENRVUZYTEVOQlFVTTdTVUZWZWtRc1MwRkJTeXhEUVVGRExHTkJRV003VVVGRE1VSXNUMEZCVHp0WlFVTklMRWxCUVVrc1JVRkJSU3hMUVVGTE8xTkJRMlFzUTBGQlF6dEpRVU5PTEVOQlFVTTdRMEZEU2p0QlFXWkVMRFJDUVdWREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENsaWVudFJvdXRlXzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQ2xpZW50Um91dGVcIik7XG5jb25zdCBCRE9Ib21lXzEgPSByZXF1aXJlKFwifmJkby9yb3V0ZXMvQkRPSG9tZVwiKTtcbmNsYXNzIEhvbWUgZXh0ZW5kcyBCRE9Ib21lXzEuQkRPSG9tZUZhY3RvcnkoQ2xpZW50Um91dGVfMS5DbGllbnRSb3V0ZSkge1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gSG9tZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVNHOXRaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDNKdmRYUmxjeTlJYjIxbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc2VVUkJRWE5FTzBGQlEzUkVMR2xFUVVGeFJEdEJRVk55UkN4TlFVRnhRaXhKUVVGTExGTkJRVkVzZDBKQlFXTXNRMEZCUXl4NVFrRkJWeXhEUVVGRE8wTkJRVWs3UVVGQmFrVXNkVUpCUVdsRkluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmZ1bmN0aW9uIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBrZXksIG5ld1ZhbCwgbnNQcm9wID0gXCJpZFwiKSB7XG4gICAgaWYgKGtleSA9PT0gXCIqXCIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIiogaXMgYSBzcGVjaWFsIGNoYXJhY3RlciBhbmQgZG9lcyBub3QgZm9sbG93IHRoZSBwcm9wZXJ0eSBjb252ZW50aW9uXCIpO1xuICAgIGNvbnN0IG5zUHJlZml4ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGluc3RhbmNlLmNvbnN0cnVjdG9yKS5uYW1lO1xuICAgIGxldCBuc1N1ZmZpeCA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwib2xkU3RvcmFnZU5zU3VmZml4XCIpO1xuICAgIGxldCBzdG9yYWdlVmFsdWU7XG4gICAgaWYgKCFuc1N1ZmZpeClcbiAgICAgICAgbnNTdWZmaXggPSBpbnN0YW5jZVtuc1Byb3BdO1xuICAgIGxldCBucyA9IGAke25zUHJlZml4fV8ke25zU3VmZml4fWA7XG4gICAgaWYgKGtleSA9PT0gbnNQcm9wIHx8IG5zU3VmZml4ICE9PSBpbnN0YW5jZVtuc1Byb3BdKSB7XG4gICAgICAgIG5zU3VmZml4ID0ga2V5ID09PSBuc1Byb3AgPyBuZXdWYWwgOiBpbnN0YW5jZVtuc1Byb3BdO1xuICAgICAgICBjb25zdCBuZXdOcyA9IGAke25zUHJlZml4fV8ke25zU3VmZml4fWA7XG4gICAgICAgIHN0b3JhZ2VWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5zKTtcbiAgICAgICAgaWYgKHN0b3JhZ2VWYWx1ZSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obnMpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3TnMsIHN0b3JhZ2VWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbnMgPSBuZXdOcztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN0b3JhZ2VWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5zKTtcbiAgICAgICAgaWYgKHN0b3JhZ2VWYWx1ZSkge1xuICAgICAgICAgICAgc3RvcmFnZVZhbHVlID0gSlNPTi5wYXJzZShzdG9yYWdlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHN0b3JhZ2VWYWx1ZSA9IHt9O1xuICAgICAgICBpZiAobmV3VmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdG9yYWdlVmFsdWVba2V5XTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LmtleXMoc3RvcmFnZVZhbHVlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obnMsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VWYWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5zLCBKU09OLnN0cmluZ2lmeShPYmplY3QuYXNzaWduKHN0b3JhZ2VWYWx1ZSwgeyBba2V5XTogbmV3VmFsIH0pKSk7XG4gICAgfVxuICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEoaW5zdGFuY2UsIFwib2xkU3RvcmFnZU5zU3VmZml4XCIsIG5zU3VmZml4KTtcbn1cbmV4cG9ydHMuc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2UgPSBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZTtcbmZ1bmN0aW9uIGdldE5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBrZXksIG5zUHJvcCA9IFwiaWRcIiwgZm9yY2VOUykge1xuICAgIGNvbnN0IG5zUHJlZml4ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGluc3RhbmNlLmNvbnN0cnVjdG9yKS5uYW1lO1xuICAgIGxldCBuc1N1ZmZpeCA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwib2xkU3RvcmFnZU5zU3VmZml4XCIpO1xuICAgIGlmIChuc1N1ZmZpeCAhPT0gaW5zdGFuY2VbbnNQcm9wXSlcbiAgICAgICAgbnNTdWZmaXggPSBpbnN0YW5jZVtuc1Byb3BdO1xuICAgIGlmIChmb3JjZU5TKVxuICAgICAgICBuc1N1ZmZpeCA9IGZvcmNlTlM7XG4gICAgbGV0IHN0b3JhZ2VWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke25zUHJlZml4fV8ke25zU3VmZml4fWApO1xuICAgIGlmIChzdG9yYWdlVmFsdWUpXG4gICAgICAgIHN0b3JhZ2VWYWx1ZSA9IEpTT04ucGFyc2Uoc3RvcmFnZVZhbHVlKTtcbiAgICBpZiAoc3RvcmFnZVZhbHVlICYmIGtleSA9PT0gXCIqXCIpXG4gICAgICAgIHJldHVybiBzdG9yYWdlVmFsdWU7XG4gICAgaWYgKHN0b3JhZ2VWYWx1ZSAmJiBrZXkgaW4gc3RvcmFnZVZhbHVlKVxuICAgICAgICByZXR1cm4gc3RvcmFnZVZhbHVlW2tleV07XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmV4cG9ydHMuZ2V0TmFtZXNwYWNlZFN0b3JhZ2UgPSBnZXROYW1lc3BhY2VkU3RvcmFnZTtcbmZ1bmN0aW9uIGRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZShpbnN0YW5jZSwga2V5LCBuc1Byb3AgPSBcImlkXCIpIHtcbiAgICBpZiAoa2V5ID09PSBcIipcIikge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gZ2V0TmFtZXNwYWNlZFN0b3JhZ2UoaW5zdGFuY2UsIGtleSwgbnNQcm9wKTtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHN0b3JhZ2UpIHtcbiAgICAgICAgICAgIGlmIChzdG9yYWdlLmhhc093blByb3BlcnR5KHByb3ApKVxuICAgICAgICAgICAgICAgIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBwcm9wLCB1bmRlZmluZWQsIG5zUHJvcCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZVxuICAgICAgICBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZShpbnN0YW5jZSwga2V5LCB1bmRlZmluZWQsIG5zUHJvcCk7XG59XG5leHBvcnRzLmRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZSA9IGRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRYUnBiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDNWMGFXeHpMM1YwYVd3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN4clJFRkJhMFU3UVVGVmJFVXNVMEZCWjBJc01FSkJRVEJDTEVOQlFVTXNVVUZCWVN4RlFVRkZMRWRCUVZjc1JVRkJSU3hOUVVGWExFVkJRVVVzVTBGQmFVSXNTVUZCU1R0SlFVTnlSeXhKUVVGSkxFZEJRVWNzUzBGQlN5eEhRVUZITzFGQlFVVXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXh6UlVGQmMwVXNRMEZCUXl4RFFVRkRPMGxCUjNwSExFMUJRVTBzVVVGQlVTeEhRVUZITEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXp0SlFVTnNSU3hKUVVGSkxGRkJRVkVzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3h2UWtGQmIwSXNRMEZCUXl4RFFVRkRPMGxCUXpORUxFbEJRVWtzV1VGQmFVSXNRMEZCUXp0SlFVZDBRaXhKUVVGSkxFTkJRVU1zVVVGQlVUdFJRVUZGTEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRE0wTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1IwRkJSeXhSUVVGUkxFbEJRVWtzVVVGQlVTeEZRVUZGTEVOQlFVTTdTVUZEYmtNc1NVRkJTU3hIUVVGSExFdEJRVXNzVFVGQlRTeEpRVUZKTEZGQlFWRXNTMEZCU3l4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVU3VVVGRmFrUXNVVUZCVVN4SFFVRkhMRWRCUVVjc1MwRkJTeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEzUkVMRTFCUVUwc1MwRkJTeXhIUVVGSExFZEJRVWNzVVVGQlVTeEpRVUZKTEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUTNoRExGbEJRVmtzUjBGQlJ5eFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRM2hETEVsQlFVa3NXVUZCV1N4RlFVRkZPMWxCUTJRc1dVRkJXU3hEUVVGRExGVkJRVlVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTTFRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4WlFVRlpMRU5CUVVNc1EwRkJRenRUUVVNM1F6dFJRVU5FTEVWQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVNN1MwRkRaRHRUUVVGTk8xRkJSVWdzV1VGQldTeEhRVUZITEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGVFTXNTVUZCU1N4WlFVRlpMRVZCUVVVN1dVRkRaQ3haUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRUUVVNelF6czdXVUZCVFN4WlFVRlpMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJSWHBDTEVsQlFVa3NUVUZCVFN4TFFVRkxMRk5CUVZNc1JVRkJSVHRaUVVOMFFpeFBRVUZQTEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVONlFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVTdaMEpCUTI1RExGbEJRVmtzUTBGQlF5eFZRVUZWTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRMMEk3TzJkQ1FVRk5MRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5xUlRzN1dVRkJUU3haUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVOdVJ6dEpRVVZFTEhsQ1FVRmpMRU5CUVVNc1VVRkJVU3hGUVVGRkxHOUNRVUZ2UWl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8wRkJRemRFTEVOQlFVTTdRVUZ5UTBRc1owVkJjVU5ETzBGQmEwSkVMRk5CUVdkQ0xHOUNRVUZ2UWl4RFFVRkRMRkZCUVdFc1JVRkJSU3hIUVVGWExFVkJRVVVzVTBGQmFVSXNTVUZCU1N4RlFVRkZMRTlCUVdkQ08wbEJRM0JITEUxQlFVMHNVVUZCVVN4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJRenRKUVVOc1JTeEpRVUZKTEZGQlFWRXNSMEZCUnl4elFrRkJWeXhEUVVGRExGRkJRVkVzUlVGQlJTeHZRa0ZCYjBJc1EwRkJReXhEUVVGRE8wbEJRek5FTEVsQlFVa3NVVUZCVVN4TFFVRkxMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGQlJTeFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJReTlFTEVsQlFVa3NUMEZCVHp0UlFVRkZMRkZCUVZFc1IwRkJSeXhQUVVGUExFTkJRVU03U1VGRGFFTXNTVUZCU1N4WlFVRlpMRWRCUVZFc1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEZGQlFWRXNTVUZCU1N4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRM2hGTEVsQlFVa3NXVUZCV1R0UlFVRkZMRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMGxCUXpGRUxFbEJRVWtzV1VGQldTeEpRVUZKTEVkQlFVY3NTMEZCU3l4SFFVRkhPMUZCUVVVc1QwRkJUeXhaUVVGWkxFTkJRVU03U1VGRGNrUXNTVUZCU1N4WlFVRlpMRWxCUVVrc1IwRkJSeXhKUVVGSkxGbEJRVms3VVVGQlJTeFBRVUZQTEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOc1JTeFBRVUZQTEZOQlFWTXNRMEZCUXp0QlFVTnlRaXhEUVVGRE8wRkJWa1FzYjBSQlZVTTdRVUZYUkN4VFFVRm5RaXd5UWtGQk1rSXNRMEZCUXl4UlFVRmhMRVZCUVVVc1IwRkJWeXhGUVVGRkxGTkJRV2xDTEVsQlFVazdTVUZEZWtZc1NVRkJTU3hIUVVGSExFdEJRVXNzUjBGQlJ5eEZRVUZGTzFGQlEySXNUVUZCVFN4UFFVRlBMRWRCUVVjc2IwSkJRVzlDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVjc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU0xUkN4TFFVRkxMRTFCUVUwc1NVRkJTU3hKUVVGSkxFOUJRVThzUlVGQlJUdFpRVU40UWl4SlFVRkpMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETzJkQ1FVRkZMREJDUVVFd1FpeERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRVZCUVVVc1UwRkJVeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzFOQlEyNUhPMHRCUTBvN08xRkJRVTBzTUVKQlFUQkNMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzUlVGQlJTeFRRVUZUTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkRlRVVzUTBGQlF6dEJRVkJFTEd0RlFVOURJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBQcm9wZXJ0eV8xID0gcmVxdWlyZShcIn5iZG8vbGliL1Byb3BlcnR5XCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuY29uc3QgTW9kaWZpY2F0aW9uXzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kaWZpY2F0aW9uXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IEVycm9yc18xID0gcmVxdWlyZShcIn5iZG8vbGliL0Vycm9yc1wiKTtcbmNsYXNzIEF0dHJpYnV0ZSBleHRlbmRzIFByb3BlcnR5XzEuUHJvcGVydHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHksIHBhcmFtcykge1xuICAgICAgICBzdXBlcihvYmplY3QsIHByb3BlcnR5LCBwYXJhbXMpO1xuICAgICAgICB0aGlzLmluRE9NSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hdXRvU2F2ZUFsbG93ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZERvU2V0VmFsdWUodmFsdWUpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmRvU2V0VmFsdWUodmFsdWUsIHRydWUsIHRydWUpO1xuICAgICAgICB0aGlzLnJlZmxlY3RUb0RPTUF0dHJpYnV0ZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuZG9BdXRvU2F2ZSgpO1xuICAgIH1cbiAgICBwcm94eUhhbmRsZXIoX3BhdGgsIF9jaGFuZ2VkVmFsLCBfcHJldlZhbCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmRvU2V0VmFsdWUodXRpbF8xLmdldFByb3h5VGFyZ2V0KHZhbHVlKSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMucmVmbGVjdFRvRE9NQXR0cmlidXRlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5kb0F1dG9TYXZlKCk7XG4gICAgfVxuICAgIGdldFVuc2F2ZWRDaGFuZ2UoKSB7IH1cbiAgICBzaG91bGREb1NldFZhbHVlKHZhbHVlLCBza2lwR3VhcmQgPSBmYWxzZSkge1xuICAgICAgICBpZiAoZW52aXJvbm1lbnRfMS5pc0Jyb3dzZXIoKSAmJiAhdGhpcy5vYmplY3QuaXNCRE9Nb2RlbCAmJiAodGhpcy5vYmplY3QgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdGVkVHlwZSA9IHV0aWxfMS5jb25zdHJ1Y3RUeXBlT2ZIVE1MQXR0cmlidXRlKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pbkRPTUluaXRpYWxpemVkICYmIHRoaXMub2JqZWN0LmdldEF0dHJpYnV0ZSh0aGlzLnByb3BlcnR5KSAmJiB2YWx1ZSAhPT0gY29uc3RydWN0ZWRUeXBlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShjb25zdHJ1Y3RlZFR5cGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gISh2YWx1ZSA9PT0gdGhpcy5vd25WYWx1ZSB8fCAhc2tpcEd1YXJkICYmICF0aGlzLmRpc2FibGVUeXBlR3VhcmQgJiYgIXRoaXMudHlwZUd1YXJkKHZhbHVlKSk7XG4gICAgfVxuICAgIHJlZmxlY3RUb0RPTUF0dHJpYnV0ZSh2YWx1ZSkge1xuICAgICAgICBpZiAoIWVudmlyb25tZW50XzEuaXNCcm93c2VyKCkgfHwgISh0aGlzLm9iamVjdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3Qgc3RyaW5nS2V5ID0gdGhpcy5wcm9wZXJ0eS50b1N0cmluZygpO1xuICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSB0aGlzLm9iamVjdC5nZXRBdHRyaWJ1dGUoc3RyaW5nS2V5KTtcbiAgICAgICAgbGV0IHNldEF0dHJpYnV0ZSA9IHRydWU7XG4gICAgICAgIGxldCBwVGFyZ2V0O1xuICAgICAgICBsZXQgdmFsdWVUb1Bhc3MgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kaWZpY2F0aW9uXzEuTW9kaWZpY2F0aW9uKVxuICAgICAgICAgICAgdmFsdWVUb1Bhc3MgPSB2YWx1ZS52YWx1ZU9mKCk7XG4gICAgICAgIGlmICghdGhpcy5pbkRPTUluaXRpYWxpemVkICYmIGF0dHJWYWx1ZSkge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcFRhcmdldCA9IHV0aWxfMS5nZXRQcm94eVRhcmdldCh2YWx1ZVRvUGFzcyk7XG4gICAgICAgIHRoaXMuaW5ET01Jbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIGlmIChzZXRBdHRyaWJ1dGUgJiYgYXR0clZhbHVlICE9PSBwVGFyZ2V0ICYmIGF0dHJWYWx1ZSAhPT0gSlNPTi5zdHJpbmdpZnkocFRhcmdldCkucmVwbGFjZSgvXFxcIi9nLCBcIidcIikpIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0LnNldEF0dHJpYnV0ZShzdHJpbmdLZXksIHBUYXJnZXQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb0F1dG9TYXZlKCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvU2F2ZSAmJiB0aGlzLmRvTm90UGVyc2lzdCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yc18xLkNvbmZpZ3VyYXRpb25FcnJvcihcIllvdSBoYXZlIHR1cm5lZCBvbiBhdXRvc2F2ZSBidXQgYXQgdGhlIHNhbWUgdGltZSBpdCBpcyBmb3JiaWRkZW4gdG8gcGVyc2lzdCB0aGUgdmFsdWUhXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5hdXRvU2F2ZUFsbG93ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b1NhdmVBbGxvd2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuYXV0b1NhdmUgfHwgIXV0aWxfMS5pc0Z1bmN0aW9uKHRoaXMub2JqZWN0LnNhdmUpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYXV0b1NhdmUgPT09IFwiYm9vbGVhblwiKVxuICAgICAgICAgICAgdGhpcy5vYmplY3Quc2F2ZSh0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmF1dG9TYXZlID09PSBcIm51bWJlclwiICYmICF0aGlzLmF1dG9TYXZlVGltZW91dCkge1xuICAgICAgICAgICAgdGhpcy5hdXRvU2F2ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9iamVjdC5zYXZlKHRoaXMucHJvcGVydHkpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmF1dG9TYXZlVGltZW91dDtcbiAgICAgICAgICAgIH0sIE1hdGguYWJzKHRoaXMuYXV0b1NhdmUpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuQXR0cmlidXRlID0gQXR0cmlidXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVhSMGNtbGlkWFJsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5c2FXSXZRWFIwY21saWRYUmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNaMFJCUVRoRU8wRkJSVGxFTEhkRVFVRnRSRHRCUVVOdVJDeDNSRUZCY1VRN1FVRkRja1FzTUVOQlFUSkdPMEZCUXpOR0xEUkRRVUZ4UkR0QlFYTkZja1FzVFVGQllTeFRRVUV5UkN4VFFVRlJMRzFDUVVGUk8wbEJjVVZ3Uml4WlFVRlpMRTFCUVZNc1JVRkJSU3hSUVVGWExFVkJRVVVzVFVGQmVVSTdVVUZEZWtRc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeFJRVUZSTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRnlRalZDTEhGQ1FVRm5RaXhIUVVGWkxFdEJRVXNzUTBGQlF6dFJRV3RDYkVNc2IwSkJRV1VzUjBGQldTeExRVUZMTEVOQlFVTTdTVUZKZWtNc1EwRkJRenRKUVZGTkxGRkJRVkVzUTBGQlF5eExRVUZuUXp0UlFVTTFReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFdEJRVXNzUTBGQlF6dFpRVUZGTEU5QlFVODdVVUZETVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZMTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRMjVETEVsQlFVa3NRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTnNReXhKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJRenRKUVZGTkxGbEJRVmtzUTBGQlF5eExRVUZqTEVWQlFVVXNWMEZCYTBJc1JVRkJSU3hSUVVGbE8xRkJRMjVGTEUxQlFVMHNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03VVVGRGVrSXNTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVeXhKUVVGSkxFdEJRVXNzUzBGQlN5eEpRVUZKTzFsQlFVVXNUMEZCVHp0UlFVTnNSQ3hKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEhGQ1FVRmpMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTI1RUxFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU5zUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU03U1VGRGRFSXNRMEZCUXp0SlFWTk5MR2RDUVVGblFpeExRVUZMTEVOQlFVTTdTVUZWZEVJc1owSkJRV2RDTEVOQlFVTXNTMEZCWjBNc1JVRkJSU3haUVVGeFFpeExRVUZMTzFGQlEyaEdMRWxCUVVrc2RVSkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4WlFVRlpMRmRCUVZjc1EwRkJReXhGUVVGRk8xbEJRMmhHTEUxQlFVMHNaVUZCWlN4SFFVRkhMRzFEUVVFMFFpeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFsQlEycEdMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFdEJRVXNzUzBGQlN5eGxRVUZsTEVWQlFVVTdaMEpCUTJoSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNN1owSkJReTlDTEU5QlFVOHNTMEZCU3l4RFFVRkRPMkZCUTJoQ08xTkJRMG83VVVGRFJDeFBRVUZQTEVOQlFVTXNRMEZCUXl4TFFVRkxMRXRCUVVzc1NVRkJTU3hEUVVGRExGRkJRVkVzU1VGQlNTeERRVUZETEZOQlFWTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjRSeXhEUVVGRE8wbEJZMDhzY1VKQlFYRkNMRU5CUVVNc1MwRkJaME03VVVGRE1VUXNTVUZCU1N4RFFVRkRMSFZDUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1dVRkJXU3hYUVVGWExFTkJRVU03V1VGQlJTeFBRVUZQTzFGQlEyeEZMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkRNME1zVFVGQlRTeFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhaUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEZEVRc1NVRkJTU3haUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEzaENMRWxCUVVrc1QwRkJUeXhEUVVGRE8xRkJSVm9zU1VGQlNTeFhRVUZYTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTNoQ0xFbEJRVWtzUzBGQlN5eFpRVUZaTERKQ1FVRlpPMWxCUVVVc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0UlFVVnFSU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhKUVVGSkxGTkJRVk1zUlVGQlJUdFpRVU55UXl4WlFVRlpMRWRCUVVjc1MwRkJTeXhEUVVGRE8xTkJRM2hDT3p0WlFVRk5MRTlCUVU4c1IwRkJSeXh4UWtGQll5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUXpkRExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGSE4wSXNTVUZCU1N4WlFVRlpMRWxCUVVrc1UwRkJVeXhMUVVGTExFOUJRVThzU1VGQlNTeFRRVUZUTEV0QlFVc3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJRemxHTEVsQlFVa3NRMEZCUXl4TlFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExGTkJRVk1zUlVGQlJTeFBRVUZQTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1UwRkRPVVE3U1VGRFRDeERRVUZETzBsQlZVOHNWVUZCVlR0UlFVTmtMRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzU1VGQlNTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZPMWxCUTNCRExFMUJRVTBzU1VGQlNTd3lRa0ZCYTBJc1EwRkJReXgzUmtGQmQwWXNRMEZCUXl4RFFVRkRPMU5CUXpGSU8xRkJRMFFzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4bFFVRmxMRVZCUVVVN1dVRkRka0lzU1VGQlNTeERRVUZETEdWQlFXVXNSMEZCUnl4SlFVRkpMRU5CUVVNN1dVRkROVUlzVDBGQlR6dFRRVU5XTzFGQlEwUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFbEJRVWtzUTBGQlF5eHBRa0ZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETzFsQlFVVXNUMEZCVHp0UlFVTTFSQ3hKUVVGSkxFOUJRVThzU1VGQlNTeERRVUZETEZGQlFWRXNTMEZCU3l4VFFVRlRPMWxCUVVVc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRM2hGTEVsQlFVa3NUMEZCVHl4SlFVRkpMRU5CUVVNc1VVRkJVU3hMUVVGTExGRkJRVkVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4bFFVRmxMRVZCUVVVN1dVRkROVVFzU1VGQlNTeERRVUZETEdWQlFXVXNSMEZCUnl4VlFVRlZMRU5CUVVNc1IwRkJSeXhGUVVGRk8yZENRVU51UXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1owSkJRMmhETEU5QlFVOHNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJRenRaUVVOb1F5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTXZRanRKUVVOTUxFTkJRVU03UTBGRFNqdEJRVEZNUkN3NFFrRXdURU1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IG1zXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibXNcIikpO1xuY29uc3QgQkRPTWFwQ2FjaGVfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9NYXBDYWNoZVwiKTtcbmNsYXNzIEJET0NvbmZpZ01hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IEJET01hcENhY2hlXzEuQkRPTWFwQ2FjaGUoKTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0KGNvbmZpZykge1xuICAgICAgICBsZXQgdmFsdWUgPSBhd2FpdCB0aGlzLmdldENhY2hlKGNvbmZpZyk7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYXdhaXQgdGhpcy5sb2FkKGNvbmZpZyk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldENhY2hlKGNvbmZpZywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpO1xuICAgIH1cbiAgICBnZXRDYWNoZShjb25maWcpIHtcbiAgICAgICAgY29uc3QgZnJvbUxvY2FsQ2FjaGUgPSB0aGlzLmNhY2hlLmdldChjb25maWcpO1xuICAgICAgICBpZiAoZnJvbUxvY2FsQ2FjaGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tTG9jYWxDYWNoZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgYXN5bmMgc2V0Q2FjaGUoY29uZmlnLCB2YWx1ZSkge1xuICAgICAgICBsZXQgY29uZiA9IHRoaXMuY2FjaGUuZ2V0KCdfX0NvbmZpZ01hbmFnZXJDYWNoZVRpbWVvdXRfXycpO1xuICAgICAgICBpZiAoIXRoaXMuY2FjaGUuaGFzKCdfX0NvbmZpZ01hbmFnZXJDYWNoZVRpbWVvdXRfXycpKSB7XG4gICAgICAgICAgICBjb25mID0gKGF3YWl0IHRoaXMubG9hZCgnY29uZmlnJykpLnRpbWVvdXRzLmNvbmZpZ0NhY2hlO1xuICAgICAgICAgICAgaWYgKGNvbmYpXG4gICAgICAgICAgICAgICAgY29uZiA9IG1zXzEuZGVmYXVsdChjb25mKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUuc2V0KCdfX0NvbmZpZ01hbmFnZXJDYWNoZVRpbWVvdXRfXycsIGNvbmYpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGUuc2V0KGNvbmZpZywgdmFsdWUsIGNvbmYpO1xuICAgIH1cbn1cbmV4cG9ydHMuQkRPQ29uZmlnTWFuYWdlciA9IEJET0NvbmZpZ01hbmFnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQUTI5dVptbG5UV0Z1WVdkbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiR2xpTDBKRVQwTnZibVpwWjAxaGJtRm5aWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzYjBSQlFXOUNPMEZCUTNCQ0xITkVRVUZ0UkR0QlFXMUNia1FzVFVGQmMwSXNaMEpCUVdkQ08wbEJRWFJETzFGQlZXTXNWVUZCU3l4SFFVRTJRaXhKUVVGSkxIbENRVUZYTEVWQlFVVXNRMEZCUXp0SlFYZEZiRVVzUTBGQlF6dEpRUzlFVlN4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRV003VVVGRE0wSXNTVUZCU1N4TFFVRkxMRWRCUVVjc1RVRkJUU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTNoRExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdXVUZEVWl4TFFVRkxMRWRCUVVjc1RVRkJUU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMWxCUTJoRExFMUJRVTBzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VTBGRGRFTTdVVUZEUkN4UFFVRlBMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYkVNc1EwRkJRenRKUVRoQ1V5eFJRVUZSTEVOQlFVTXNUVUZCWXp0UlFVTTNRaXhOUVVGTkxHTkJRV01zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU01UXl4SlFVRkpMR05CUVdNc1JVRkJSVHRaUVVOb1FpeFBRVUZQTEdOQlFXTXNRMEZCUXp0VFFVTjZRanRSUVVORUxFOUJRVThzU1VGQlNTeERRVUZETzBsQlEyaENMRU5CUVVNN1NVRlhVeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFXTXNSVUZCUlN4TFFVRlZPMUZCUXk5RExFbEJRVWtzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExDdENRVUVyUWl4RFFVRkRMRU5CUVVNN1VVRkRNMFFzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExDdENRVUVyUWl4RFFVRkRMRVZCUVVVN1dVRkRiRVFzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJRenRaUVVONFJDeEpRVUZKTEVsQlFVazdaMEpCUVVVc1NVRkJTU3hIUVVGSExGbEJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTXhRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl3clFrRkJLMElzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTjZSRHRSUVVORUxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEZUVNc1EwRkJRenREUVVOS08wRkJiRVpFTERSRFFXdEdReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBCRE9EYXRhYmFzZW1hbmFnZXIge1xufVxuZXhwb3J0cy5CRE9EYXRhYmFzZW1hbmFnZXIgPSBCRE9EYXRhYmFzZW1hbmFnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQUkdGMFlXSmhjMlZOWVc1aFoyVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlzYVdJdlFrUlBSR0YwWVdKaGMyVk5ZVzVoWjJWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUTBFc1RVRkJjMElzYTBKQlFXdENPME5CUlhaRE8wRkJSa1FzWjBSQlJVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgbW9tZW50XzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibW9tZW50XCIpKTtcbmNvbnN0IHBhdGhfMSA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNsYXNzIEJET0xvZ2dlciB7XG4gICAgY29uc3RydWN0b3IoX3BhcmFtcykge1xuICAgICAgICB0aGlzLmxvZ0ZpbGUgPSAnZGVmYXVsdC5sb2cnO1xuICAgICAgICB0aGlzLnByZXZlbnRDb25zb2xlUHJpbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcmV2ZW50RmlsZVByaW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9nTGV2ZWwgPSAnZGVidWcnO1xuICAgICAgICB0aGlzLnByb3RvdHlwZU5hbWVzID0gdXRpbF8xLmdldFByb3RvdHlwZU5hbWVzUmVjdXJzaXZlKHRoaXMpO1xuICAgIH1cbiAgICBsb2cobWVzc2FnZSwgbG9nbGV2ZWwgPSAnbG9nJywgLi4uYXJncykge1xuICAgICAgICBpZiAobG9nbGV2ZWwgIT09ICdsb2cnICYmICF0aGlzLmlzQWxsb3dlZChsb2dsZXZlbCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy5wcmV2ZW50Q29uc29sZVByaW50IHx8IFsnbG9nJywgJ2Vycm9yJ10uaW5jbHVkZXMobG9nbGV2ZWwpKSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmdldEhlYWRlcihsb2dsZXZlbCk7XG4gICAgICAgICAgICBsZXQgbmV3QXJncyA9IFtdO1xuICAgICAgICAgICAgaWYgKGhlYWRlciBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgbmV3QXJncyA9IG5ld0FyZ3MuY29uY2F0KGhlYWRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbmV3QXJncy5wdXNoKGhlYWRlcik7XG4gICAgICAgICAgICBuZXdBcmdzLnB1c2gobWVzc2FnZSk7XG4gICAgICAgICAgICBuZXdBcmdzID0gbmV3QXJncy5jb25jYXQoYXJncyk7XG4gICAgICAgICAgICBjb25zb2xlW2xvZ2xldmVsXS5hcHBseSh0aGlzLCBuZXdBcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShhcmdzKTtcbiAgICAgICAgaWYgKCF0aGlzLnByZXZlbnRGaWxlUHJpbnQgfHwgbG9nbGV2ZWwgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMud3JpdGVUb0ZpbGUobG9nbGV2ZWwsIG1lc3NhZ2UgKyBwYXJzZWRTdHJpbmcuc3Vic3RyKDEsIHBhcnNlZFN0cmluZy5sZW5ndGggLSAyKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVidWcobWVzc2FnZSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBhcHBseSA9IFttZXNzYWdlLCAnZGVidWcnXS5jb25jYXQoYXJncyk7XG4gICAgICAgIHRoaXMubG9nLmFwcGx5KHRoaXMsIGFwcGx5KTtcbiAgICB9XG4gICAgaW5mbyhtZXNzYWdlLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGFwcGx5ID0gW21lc3NhZ2UsICdpbmZvJ10uY29uY2F0KGFyZ3MpO1xuICAgICAgICB0aGlzLmxvZy5hcHBseSh0aGlzLCBhcHBseSk7XG4gICAgfVxuICAgIHdhcm4obWVzc2FnZSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBhcHBseSA9IFttZXNzYWdlLCAnd2FybiddLmNvbmNhdChhcmdzKTtcbiAgICAgICAgdGhpcy5sb2cuYXBwbHkodGhpcywgYXBwbHkpO1xuICAgIH1cbiAgICBlcnJvcihtZXNzYWdlLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGFwcGx5ID0gW21lc3NhZ2UsICdlcnJvciddLmNvbmNhdChhcmdzKTtcbiAgICAgICAgdGhpcy5sb2cuYXBwbHkodGhpcywgYXBwbHkpO1xuICAgIH1cbiAgICBnZXRQcm9jSW5mbygpIHtcbiAgICAgICAgcmV0dXJuIGAke2dsb2JhbC5wcm9jZXNzLmVudi5uYW1lIHx8ICcnfSAke2dsb2JhbC5wcm9jZXNzLmVudi5ob3N0bmFtZSB8fCAnJ30gJHtnbG9iYWwucHJvY2Vzcy5waWR9YDtcbiAgICB9XG4gICAgaXNBbGxvd2VkKGxvZ0xldmVsKSB7XG4gICAgICAgIGNvbnN0IGxvZ0xldmVsT3JkZXIgPSBbJ2xvZycsICdkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXTtcbiAgICAgICAgcmV0dXJuIGxvZ0xldmVsT3JkZXIuaW5kZXhPZihsb2dMZXZlbCkgPj0gbG9nTGV2ZWxPcmRlci5pbmRleE9mKHRoaXMubG9nTGV2ZWwpO1xuICAgIH1cbiAgICBjdXJyZW50VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudF8xLmRlZmF1bHQoKS5mb3JtYXQoJ0RELk1NLllZWVkgSEg6bW06c3MnKTtcbiAgICB9XG4gICAgZ2V0TG9nUG9pbnQoKSB7XG4gICAgICAgIGNvbnN0IHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgICBsZXQgY2FsbHBvaW50O1xuICAgICAgICBmb3IgKGNvbnN0IFtpbmRleCwgc3RhY2twYXJ0XSBvZiBzdGFjay5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgIGlmICghaW5kZXgpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIXV0aWxfMS5pbmNsdWRlc01lbWJlck9mTGlzdChzdGFja3BhcnQsIHRoaXMucHJvdG90eXBlTmFtZXMsICcudHMnKSkge1xuICAgICAgICAgICAgICAgIGNhbGxwb2ludCA9IHN0YWNrcGFydC5zcGxpdChwYXRoXzEuc2VwKS5wb3AoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsbHBvaW50KSB7XG4gICAgICAgICAgICBjYWxscG9pbnQgPSBjYWxscG9pbnQucmVwbGFjZSgnKScsICcnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxwb2ludCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWxscG9pbnQ7XG4gICAgfVxufVxuZXhwb3J0cy5CRE9Mb2dnZXIgPSBCRE9Mb2dnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQVEc5bloyVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlzYVdJdlFrUlBURzluWjJWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVOQkxEUkVRVUUwUWp0QlFVTTFRaXdyUWtGQk1rSTdRVUZETTBJc01FTkJRVzFHTzBGQlYyNUdMRTFCUVhOQ0xGTkJRVk03U1VGclJETkNMRmxCUVZrc1QwRkJaME03VVVFelEzSkRMRmxCUVU4c1IwRkJXU3hoUVVGaExFTkJRVU03VVVGUmFrTXNkMEpCUVcxQ0xFZEJRV0VzUzBGQlN5eERRVUZETzFGQlVYUkRMSEZDUVVGblFpeEhRVUZoTEV0QlFVc3NRMEZCUXp0UlFXVnVReXhoUVVGUkxFZEJRV1VzVDBGQlR5eERRVUZETzFGQlZXNUNMRzFDUVVGakxFZEJRV0VzYVVOQlFUQkNMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRkwwSXNRMEZCUXp0SlFWY3hReXhIUVVGSExFTkJRVU1zVDBGQldTeEZRVUZGTEZkQlFYTkNMRXRCUVVzc1JVRkJSU3hIUVVGSExFbEJRVmM3VVVGRGFFVXNTVUZCU1N4UlFVRlJMRXRCUVVzc1MwRkJTeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNN1dVRkJSU3hQUVVGUE8xRkJRelZFTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZPMWxCUTJ4RkxFMUJRVTBzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03V1VGRGVFTXNTVUZCU1N4UFFVRlBMRWRCUVdFc1JVRkJSU3hEUVVGRE8xbEJRek5DTEVsQlFVa3NUVUZCVFN4WlFVRlpMRXRCUVVzc1JVRkJSVHRuUWtGRGVrSXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdZVUZEY0VNN08yZENRVUZOTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03V1VGRE5VSXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFpRVU4wUWl4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTmtMRTlCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8xTkJRelZFTzFGQlEwUXNUVUZCVFN4WlFVRlpMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTXhReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhKUVVGSkxGRkJRVkVzUzBGQlN5eFBRVUZQTEVWQlFVVTdXVUZEYUVRc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVWQlFVVXNUMEZCVHl4SFFVRkhMRmxCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEZsQlFWa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU42Ump0SlFVTk1MRU5CUVVNN1NVRlJUU3hMUVVGTExFTkJRVU1zVDBGQldTeEZRVUZGTEVkQlFVY3NTVUZCVXp0UlFVTnVReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZET1VNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRnZRaXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU5zUkN4RFFVRkRPMGxCVVUwc1NVRkJTU3hEUVVGRExFOUJRVmtzUlVGQlJTeEhRVUZITEVsQlFWTTdVVUZEYkVNc1RVRkJUU3hMUVVGTExFZEJRVWNzUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlF6ZERMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NSVUZCYjBJc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJFUXNRMEZCUXp0SlFWRk5MRWxCUVVrc1EwRkJReXhQUVVGWkxFVkJRVVVzUjBGQlJ5eEpRVUZUTzFGQlEyeERMRTFCUVUwc1MwRkJTeXhIUVVGSExFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU0zUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVWQlFXOUNMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMnhFTEVOQlFVTTdTVUZSVFN4TFFVRkxMRU5CUVVNc1QwRkJXU3hGUVVGRkxFZEJRVWNzU1VGQlV6dFJRVU51UXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE9VTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZ2UWl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOc1JDeERRVUZETzBsQlUxTXNWMEZCVnp0UlFVTnFRaXhQUVVGUExFZEJRVWNzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSkxFVkJRVVVzU1VGQlNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFbEJRVWtzUlVGQlJTeEpRVUZKTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03U1VGRGVrY3NRMEZCUXp0SlFTdENVeXhUUVVGVExFTkJRVU1zVVVGQmJVSTdVVUZEYmtNc1RVRkJUU3hoUVVGaExFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RlFVRkZMRTFCUVUwc1JVRkJSU3hOUVVGTkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdVVUZEYUVVc1QwRkJUeXhoUVVGaExFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMR0ZCUVdFc1EwRkJReXhQUVVGUExFTkJRVk1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMGxCUXpOR0xFTkJRVU03U1VGVFV5eFhRVUZYTzFGQlEycENMRTlCUVU4c1owSkJRVTBzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eERRVUZETzBsQlEyeEVMRU5CUVVNN1NVRlRVeXhYUVVGWE8xRkJRMnBDTEUxQlFVMHNTMEZCU3l4SFFVRlpMRWxCUVVrc1MwRkJTeXhGUVVGRkxFTkJRVU1zUzBGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOMFJDeEpRVUZKTEZOQlFWTXNRMEZCUXp0UlFVTmtMRXRCUVVzc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZUTEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFVkJRVVU3V1VGRE9VTXNTVUZCU1N4RFFVRkRMRXRCUVVzN1owSkJRVVVzVTBGQlV6dFpRVU55UWl4SlFVRkpMRU5CUVVNc01rSkJRVzlDTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRVVVzUzBGQlN5eERRVUZETEVWQlFVVTdaMEpCUXpsRUxGTkJRVk1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRlZCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTjJReXhOUVVGTk8yRkJRMVE3VTBGRFNqdFJRVU5FTEVsQlFVa3NVMEZCVXl4RlFVRkZPMWxCUTFnc1UwRkJVeXhIUVVGSExGTkJRVk1zUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRekZETzJGQlFVMDdXVUZEU0N4VFFVRlRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xTkJRMnhDTzFGQlEwUXNUMEZCVHl4VFFVRlRMRU5CUVVNN1NVRkRja0lzUTBGQlF6dERRVU5LTzBGQk0wMUVMRGhDUVRKTlF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEVudGl0eSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSwgZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5leHBpcmUgPSBJbmZpbml0eTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5leHBpcmUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIChkdXJhdGlvbiB8fCBJbmZpbml0eSk7XG4gICAgfVxuICAgIGdldCBleHBpcmVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leHBpcmUgPyB0aGlzLmV4cGlyZSA8IG5ldyBEYXRlKCkuZ2V0VGltZSgpIDogZmFsc2U7XG4gICAgfVxufVxuY2xhc3MgQkRPTWFwQ2FjaGUgZXh0ZW5kcyBNYXAge1xuICAgIHNldChrZXksIHZhbHVlLCBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBlbnRpdHkgPSBuZXcgRW50aXR5KHZhbHVlLCBkdXJhdGlvbik7XG4gICAgICAgIHJldHVybiBzdXBlci5zZXQoa2V5LCBlbnRpdHkpO1xuICAgIH1cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IHN1cGVyLmdldChrZXkpO1xuICAgICAgICBpZiAoZW50aXR5ID09PSB1bmRlZmluZWQgfHwgZW50aXR5LmV4cGlyZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnRpdHkuZGF0YTtcbiAgICB9XG59XG5leHBvcnRzLkJET01hcENhY2hlID0gQkRPTWFwQ2FjaGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQVFdGd1EyRmphR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJ4cFlpOUNSRTlOWVhCRFlXTm9aUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVdEJMRTFCUVUwc1RVRkJUVHRKUVdkQ1VpeFpRVUZaTEVsQlFVOHNSVUZCUlN4UlFVRnBRanRSUVVZNVFpeFhRVUZOTEVkQlFWY3NVVUZCVVN4RFFVRkRPMUZCUnpsQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTJwQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4SlFVRkpMRVZCUVVVc1EwRkJReXhQUVVGUExFVkJRVVVzUjBGQlJ5eERRVUZETEZGQlFWRXNTVUZCU1N4UlFVRlJMRU5CUVVNc1EwRkJRenRKUVVOb1JTeERRVUZETzBsQlUwUXNTVUZCU1N4UFFVRlBPMUZCUTFBc1QwRkJUeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWtzU1VGQlNTeEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU53UlN4RFFVRkRPME5CUTBvN1FVRlRSQ3hOUVVGaExGZEJRV3RDTEZOQlFWRXNSMEZCYVVJN1NVRlhOME1zUjBGQlJ5eERRVUZETEVkQlFVMHNSVUZCUlN4TFFVRlJMRVZCUVVVc1VVRkJhVUk3VVVGRE1VTXNUVUZCVFN4TlFVRk5MRWRCUVVjc1NVRkJTU3hOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUXpORExFOUJRVThzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGJFTXNRMEZCUXp0SlFWTk5MRWRCUVVjc1EwRkJReXhIUVVGTk8xRkJRMklzVFVGQlRTeE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU01UWl4SlFVRkpMRTFCUVUwc1MwRkJTeXhUUVVGVExFbEJRVWtzVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlR0WlFVTjRReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTJwQ0xFOUJRVThzVTBGQlV5eERRVUZETzFOQlEzQkNPMUZCUTBRc1QwRkJUeXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETzBsQlEzWkNMRU5CUVVNN1EwRkRTanRCUVM5Q1JDeHJRMEVyUWtNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBCRE9Nb2RlbF8xO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IHV1aWRfMSA9IHJlcXVpcmUoXCJ1dWlkXCIpO1xuY29uc3QgdHlwZV9ncmFwaHFsXzEgPSByZXF1aXJlKFwidHlwZS1ncmFwaHFsXCIpO1xuY29uc3QgQmluZGluZ18xID0gcmVxdWlyZShcIn5iZG8vbGliL0JpbmRpbmdcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xubGV0IEJET01vZGVsID0gQkRPTW9kZWxfMSA9IGNsYXNzIEJET01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0JET01vZGVsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uTmFtZSA9IEJET01vZGVsXzEuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMuaWQgPSBgcGVuZGluZ18ke3V1aWRfMS52MSgpfWA7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMuY29uc3RydWN0b3IpLm5hbWU7XG4gICAgfVxuICAgIGdldCBiaW5kaW5ncygpIHtcbiAgICAgICAgY29uc3QgYmluZGluZ3MgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMsIFwiYmluZGluZ3NcIik7XG4gICAgICAgIHJldHVybiBiaW5kaW5ncyA/IGJpbmRpbmdzIDogbmV3IE1hcCgpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2VCeUlEKF9pZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIik7XG4gICAgfVxuICAgIGJpbmQocHJvcE5hbWUsIG1vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBCaW5kaW5nXzEuQmluZGluZyh0aGlzLCBwcm9wTmFtZSwgbW9kZSk7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy50b0pTT04oKTtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcykge1xuICAgICAgICAgICAgaWYgKHRoaXNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXNba2V5XTtcbiAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBhc3luYyBpc1Vuc2F2ZWQoYXR0cikge1xuICAgICAgICBjb25zdCB1bnNhdmVkQ2hhbmdlcyA9IGF3YWl0IHRoaXMuZ2V0VW5zYXZlZENoYW5nZXMoKTtcbiAgICAgICAgbGV0IHVuc2F2ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHVuc2F2ZWRDaGFuZ2VzICYmIHVuc2F2ZWRDaGFuZ2VzLmhhc093blByb3BlcnR5KGF0dHIpKVxuICAgICAgICAgICAgdW5zYXZlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5zYXZlZCk7XG4gICAgfVxuICAgIGFzeW5jIGhhc1Vuc2F2ZWRDaGFuZ2VzKCkge1xuICAgICAgICBjb25zdCB1bnNhdmVkQ2hhbmdlcyA9IGF3YWl0IHRoaXMuZ2V0VW5zYXZlZENoYW5nZXMoKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShCb29sZWFuKE9iamVjdC5rZXlzKHVuc2F2ZWRDaGFuZ2VzKS5sZW5ndGgpKTtcbiAgICB9XG59O1xuQkRPTW9kZWwuZ3JhcGhRTFR5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQkRPTW9kZWxfMS5jb25zdHJ1Y3Rvcik7XG5CRE9Nb2RlbC5pc0JET01vZGVsID0gdHJ1ZTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcbl0sIEJET01vZGVsLnByb3RvdHlwZSwgXCJpc0JET01vZGVsXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIEJET01vZGVsLnByb3RvdHlwZSwgXCJjb2xsZWN0aW9uTmFtZVwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKChfdHlwZSkgPT4gdHlwZV9ncmFwaHFsXzEuSUQpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIEJET01vZGVsLnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgQkRPTW9kZWwucHJvdG90eXBlLCBcImNsYXNzTmFtZVwiLCB2b2lkIDApO1xuQkRPTW9kZWwgPSBCRE9Nb2RlbF8xID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKHsgaXNBYnN0cmFjdDogdHJ1ZSB9KVxuXSwgQkRPTW9kZWwpO1xuZXhwb3J0cy5CRE9Nb2RlbCA9IEJET01vZGVsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFRXOWtaV3d1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJ4cFlpOUNSRTlOYjJSbGJDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRXNLMEpCUVd0RE8wRkJRMnhETEN0RFFVRnJRenRCUVVOc1F5dzRRMEZCZDBRN1FVRkRlRVFzYzBSQlFUWkZPMEZCUXpkRkxHdEVRVUZyUkR0QlFWZHNSQ3hKUVVGelFpeFJRVUZSTEdkQ1FVRTVRaXhOUVVGelFpeFJRVUZSTzBsQlFUbENPMUZCY1VOblF5eGxRVUZWTEVkQlFWa3NTVUZCU1N4RFFVRkRPMUZCVVROQ0xHMUNRVUZqTEVkQlFWa3NWVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJRenRSUVZNM1F5eFBRVUZGTEVkQlFWY3NWMEZCVnl4VFFVRkpMRVZCUVVVc1JVRkJSU3hEUVVGRE8xRkJWWEpETEdOQlFWTXNSMEZCVnl4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNN1NVRXlTR3hITEVOQlFVTTdTVUZxU0Vjc1NVRkJZeXhSUVVGUk8xRkJRMnhDTEUxQlFVMHNVVUZCVVN4SFFVRkhMSE5DUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUXk5RExFOUJRVThzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZETTBNc1EwRkJRenRKUVZOTkxFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNSMEZCVnp0UlFVTnlReXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEdsQ1FVRnBRaXhEUVVGRExFTkJRVU03U1VGRGRrTXNRMEZCUXp0SlFWZE5MRWxCUVVrc1EwRkJNa1VzVVVGQlZ5eEZRVUZGTEVsQlFWRTdVVUZEZGtjc1QwRkJUeXhKUVVGSkxHbENRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVFpFTEVOQlFVTTdTVUZEZWtjc1EwRkJRenRKUVZGTkxGRkJRVkU3VVVGRFdDeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU03VVVGRE0wSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEyaERMRU5CUVVNN1NVRlZUU3hOUVVGTk8xRkJRMVFzVFVGQlRTeEpRVUZKTEVkQlFXMUNMRVZCUVVVc1EwRkJRenRSUVVOb1F5eExRVUZMTEUxQlFVMHNSMEZCUnl4SlFVRkpMRWxCUVVrc1JVRkJSVHRaUVVOd1FpeEpRVUZKTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhUUVVGVExFVkJRVVU3WjBKQlEzcENMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkRNVUlzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJRenRoUVVOMlFqdFRRVU5LTzFGQlEwUXNUMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkRhRUlzUTBGQlF6dEpRVFJDVFN4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRU3RDTzFGQlEyeEVMRTFCUVUwc1kwRkJZeXhIUVVGSExFMUJRVTBzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhGUVVGRkxFTkJRVU03VVVGRGRFUXNTVUZCU1N4UFFVRlBMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRM0JDTEVsQlFVa3NZMEZCWXl4SlFVRkpMR05CUVdNc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETzFsQlFVVXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVNeFJTeFBRVUZQTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRGNFTXNRMEZCUXp0SlFWTk5MRXRCUVVzc1EwRkJReXhwUWtGQmFVSTdVVUZETVVJc1RVRkJUU3hqUVVGakxFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzUTBGQlF6dFJRVU4wUkN4UFFVRlBMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjRSU3hEUVVGRE8wTkJWMG9zUTBGQlFUdEJRV3BNTUVJc2IwSkJRVmNzUjBGQlVTeE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRlZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dEJRVzFDTDBRc2JVSkJRVlVzUjBGQldTeEpRVUZKTEVOQlFVTTdRVUZSZEVNN1NVRkJXQ3h4UWtGQlVTeEZRVUZGT3pzMFEwRkJORU03UVVGUk0wTTdTVUZCV0N4eFFrRkJVU3hGUVVGRk96dG5SRUZCYlVVN1FVRlRjRVE3U1VGQmVrSXNjMEpCUVZNc1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeEZRVUZGTEVOQlFVTXNhVUpCUVVVc1EwRkJRenM3YjBOQlFYbERPMEZCVlhKRU8wbEJRVm9zYzBKQlFWTXNSVUZCUlRzN01rTkJRV3RHTzBGQmFFVTFSU3hSUVVGUk8wbEJSRGRDTERSQ1FVRmxMRU5CUVVNc1JVRkJSU3hWUVVGVkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVOQlFVTTdSMEZEYUVJc1VVRkJVU3hEUVRKTU4wSTdRVUV6VEhGQ0xEUkNRVUZSSW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IGVudmlyb25tZW50XzEgPSByZXF1aXJlKFwifmJkby91dGlscy9lbnZpcm9ubWVudFwiKTtcbmNsYXNzIEJET1JvdXRlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJOYW1lU3BhY2UgPSBgLyR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lLnRvTG93ZXJDYXNlKCl9YDtcbiAgICAgICAgdGhpcy5yb3V0ZXMgPSBbJy8nXTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVN0cmluZyA9ICc8ZGl2PjwvZGl2Pic7XG4gICAgICAgIHRoaXMuanNvbk9ubHkgPSBmYWxzZTtcbiAgICB9XG4gICAgcmVuZGVyVGVtcGxhdGUodGVtcGxhdGVQYXJhbXMpIHtcbiAgICAgICAgbGV0IHN0cmluZ1RvUGFyc2UgPSBudWxsO1xuICAgICAgICBpZiAodXRpbF8xLmlzU3RyaW5nKHRoaXMudGVtcGxhdGVTdHJpbmcpKSB7XG4gICAgICAgICAgICBzdHJpbmdUb1BhcnNlID0gZW52aXJvbm1lbnRfMS50ZW1wbGF0ZUVudmlyb25tZW50LnJlbmRlclN0cmluZyh0aGlzLnRlbXBsYXRlU3RyaW5nLCB0ZW1wbGF0ZVBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHV0aWxfMS5pc09iamVjdCh0aGlzLnRlbXBsYXRlU3RyaW5nKSkge1xuICAgICAgICAgICAgc3RyaW5nVG9QYXJzZSA9IHRoaXMudGVtcGxhdGVTdHJpbmcucmVuZGVyKHRlbXBsYXRlUGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyaW5nVG9QYXJzZTtcbiAgICB9XG4gICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMoX3JlcXVlc3RPclBhcmFtcykge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxufVxuZXhwb3J0cy5CRE9Sb3V0ZSA9IEJET1JvdXRlO1xuQkRPUm91dGUuYXR0YWNoVG9TZXJ2ZXJzID0gWycqJ107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQVW05MWRHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMnhwWWk5Q1JFOVNiM1YwWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVVZCTERCRFFVRnhSRHRCUVVOeVJDeDNSRUZCTmtRN1FVRlROMFFzVFVGQmMwSXNVVUZCVVR0SlFVRTVRanRSUVhGQ1Z5eHZRa0ZCWlN4SFFVRlhMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRVZCUVVVc1EwRkJRenRSUVZGd1JTeFhRVUZOTEVkQlFXRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVd0Q2RFSXNiVUpCUVdNc1IwRkJjMElzWVVGQllTeERRVUZETzFGQlZXeEVMR0ZCUVZFc1IwRkJXU3hMUVVGTExFTkJRVU03U1VGdFJIaERMRU5CUVVNN1NVRjRRMkVzWTBGQll5eERRVUZETEdOQlFUaENPMUZCUTI1RUxFbEJRVWtzWVVGQllTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTjZRaXhKUVVGSkxHVkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRVZCUVVVN1dVRkRMMElzWVVGQllTeEhRVUZITEdsRFFVRnRRaXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RlFVRkZMR05CUVdNc1EwRkJReXhEUVVGRE8xTkJRM3BHTzFGQlEwUXNTVUZCU1N4bFFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eEZRVUZGTzFsQlF5OUNMR0ZCUVdFc1IwRkJZeXhKUVVGSkxFTkJRVU1zWTBGQlpTeERRVUZETEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenRUUVVNeFJUdFJRVU5FTEU5QlFVOHNZVUZCWVN4RFFVRkRPMGxCUTNwQ0xFTkJRVU03U1VGWFV5eExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMR2RDUVVFd1F6dFJRVU55UlN4UFFVRlBMRVZCUVVVc1EwRkJRenRKUVVOa0xFTkJRVU03TzBGQk1VWk1MRFJDUVRSSFF6dEJRV2hIYVVJc2QwSkJRV1VzUjBGQllTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgRmllbGRfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9GaWVsZFwiKTtcbmNvbnN0IGZyYW1ld29ya18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZnJhbWV3b3JrXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgaW5pQmluZE5hbWUgPSBcImluaXRpYXRvckJpbmRpbmdcIjtcbmNvbnN0IGJpbmROYW1lID0gXCJiaW5kaW5nc1wiO1xuY2xhc3MgQmluZGluZyB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSwgbW9kZSA9IFwiUmVhZFdyaXRlXCIpIHtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdG9yID0gdGhpcy5nZXRPcmlnaW5hbFByb3BlcnR5RGVzY3JpcHRvcih0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSk7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgfHwgdGhpcy5vYmplY3RbdGhpcy5wcm9wZXJ0eV07XG4gICAgfVxuICAgIGluc3RhbGwoaW5pdGlhdG9yLCBwcm9wZXJ0eSkge1xuICAgICAgICB0aGlzLmluaXRpYXRvciA9IGluaXRpYXRvcjtcbiAgICAgICAgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgICAgICB0aGlzLmluaXRpYXRvckRlc2NyaXB0b3IgPSB0aGlzLmdldE9yaWdpbmFsUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5KTtcbiAgICAgICAgaWYgKCFSZWZsZWN0Lmhhc01ldGFkYXRhKGluaUJpbmROYW1lLCB0aGlzLmluaXRpYXRvcikpXG4gICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCBpbmlCaW5kTmFtZSwgbmV3IE1hcCgpKTtcbiAgICAgICAgaWYgKCFSZWZsZWN0Lmhhc01ldGFkYXRhKGJpbmROYW1lLCB0aGlzLm9iamVjdCkpXG4gICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMub2JqZWN0LCBiaW5kTmFtZSwgbmV3IE1hcCgpKTtcbiAgICAgICAgY29uc3QgaW5pdGlhdG9yTURhdGEgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCBpbmlCaW5kTmFtZSkgfHwgbmV3IE1hcCgpO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JCaW5kaW5nID0gaW5pdGlhdG9yTURhdGEuZ2V0KHRoaXMuaW5pdGlhdG9yUHJvcGVydHkpO1xuICAgICAgICBpZiAoaW5pdGlhdG9yQmluZGluZylcbiAgICAgICAgICAgIGluaXRpYXRvckJpbmRpbmcucmVtb3ZlKCk7XG4gICAgICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLm9iamVjdCwgYmluZE5hbWUpIHx8IG5ldyBNYXAoKTtcbiAgICAgICAgaWYgKCFtRGF0YS5oYXModGhpcy5wcm9wZXJ0eSkpXG4gICAgICAgICAgICBtRGF0YS5zZXQodGhpcy5wcm9wZXJ0eSwgW10pO1xuICAgICAgICBtRGF0YS5nZXQodGhpcy5wcm9wZXJ0eSkucHVzaCh0aGlzKTtcbiAgICAgICAgaW5pdGlhdG9yTURhdGEuc2V0KHRoaXMuaW5pdGlhdG9yUHJvcGVydHksIHRoaXMpO1xuICAgICAgICBjb25zdCBmaWVsZE1EYXRhTmFtZSA9IGBmaWVsZDoke3RoaXMucHJvcGVydHl9YDtcbiAgICAgICAgY29uc3Qgb2JqZWN0RmllbGQgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JGaWVsZCA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLmluaXRpYXRvciwgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSk7XG4gICAgICAgIGxldCBmaWVsZCA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLm9iamVjdCwgZmllbGRNRGF0YU5hbWUpO1xuICAgICAgICBpZiAoIWZpZWxkKVxuICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhKHRoaXMub2JqZWN0LCBmaWVsZE1EYXRhTmFtZSwgbmV3IEZpZWxkXzEuRmllbGQodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpKTtcbiAgICAgICAgZmllbGQgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIGZpZWxkTURhdGFOYW1lKTtcbiAgICAgICAgZmllbGQuYWRkRmllbGQob2JqZWN0RmllbGQpO1xuICAgICAgICBmaWVsZC5hZGRGaWVsZChpbml0aWF0b3JGaWVsZCk7XG4gICAgICAgIHRoaXMucmVwbGFjZURlc2NyaXB0b3IoKTtcbiAgICAgICAgUmVmbGVjdC5zZXQodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHksIHRoaXMudmFsdWVPZigpKTtcbiAgICB9XG4gICAgcmVtb3ZlKCkge1xuICAgICAgICBjb25zdCBvYmplY3RWYWx1ZSA9IHRoaXMub2JqZWN0W3RoaXMucHJvcGVydHldO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JWYWx1ZSA9IHRoaXMuaW5pdGlhdG9yW3RoaXMuaW5pdGlhdG9yUHJvcGVydHldO1xuICAgICAgICBjb25zdCBvYmplY3RNRGF0YSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5vYmplY3QsIGJpbmROYW1lKTtcbiAgICAgICAgY29uc3Qgb2JqZWN0QmluZGluZ3MgPSBvYmplY3RNRGF0YSA/IG9iamVjdE1EYXRhLmdldCh0aGlzLnByb3BlcnR5KSA6IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgaW5pdGlhdG9yTURhdGEgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCBpbmlCaW5kTmFtZSk7XG4gICAgICAgIGNvbnN0IGluaXRpYXRvckJpbmRpbmcgPSBpbml0aWF0b3JNRGF0YSA/IGluaXRpYXRvck1EYXRhLmdldCh0aGlzLmluaXRpYXRvclByb3BlcnR5LnRvU3RyaW5nKCkpIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBmaWVsZE1EYXRhTmFtZSA9IGBmaWVsZDoke3RoaXMucHJvcGVydHl9YDtcbiAgICAgICAgY29uc3QgZmllbGQgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIGZpZWxkTURhdGFOYW1lKTtcbiAgICAgICAgaWYgKGluaXRpYXRvckJpbmRpbmcpIHtcbiAgICAgICAgICAgIGlmIChpbml0aWF0b3JNRGF0YSlcbiAgICAgICAgICAgICAgICBpbml0aWF0b3JNRGF0YS5kZWxldGUodGhpcy5pbml0aWF0b3JQcm9wZXJ0eS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZURlc2NyaXB0b3IodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHksIGluaXRpYXRvclZhbHVlLCB0aGlzLmluaXRpYXRvckRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgZmllbGQucmVtb3ZlRmllbGQobWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iamVjdEJpbmRpbmdzKSB7XG4gICAgICAgICAgICB1dGlsXzEucmVtb3ZlRWxlbWVudEZyb21BcnJheShvYmplY3RCaW5kaW5ncywgdGhpcyk7XG4gICAgICAgICAgICBmaWVsZC5yZW1vdmVGaWVsZChtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpKTtcbiAgICAgICAgICAgIGlmICghb2JqZWN0QmluZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdE1EYXRhKVxuICAgICAgICAgICAgICAgICAgICBvYmplY3RNRGF0YS5kZWxldGUodGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlRGVzY3JpcHRvcih0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSwgb2JqZWN0VmFsdWUsIHRoaXMuZGVzY3JpcHRvcik7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhKHRoaXMub2JqZWN0LCBmaWVsZE1EYXRhTmFtZSwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVwbGFjZURlc2NyaXB0b3IoKSB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBiaW5kaW5nR2V0KCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGF0Lm1vZGUgPT09IFwiV3JpdGVPbmx5XCIgJiYgdGhpcyA9PT0gdGhhdC5pbml0aWF0b3IpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyYW1ld29ya18xLmdldHRlcih0aGF0Lm9iamVjdCwgdGhhdC5wcm9wZXJ0eSwgXCJmaWVsZFwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIGJpbmRpbmdTZXQobmV3VmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoYXQubW9kZSA9PT0gXCJSZWFkT25seVwiICYmIHRoaXMgPT09IHRoYXQuaW5pdGlhdG9yKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgZnJhbWV3b3JrXzEuc2V0dGVyKHRoYXQub2JqZWN0LCB0aGF0LnByb3BlcnR5LCBuZXdWYWwsIFwiZmllbGRcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYmluZGluZ0Rlc2MgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHkpO1xuICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5LCBiaW5kaW5nRGVzYyk7XG4gICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcy5vYmplY3QsIFwiYmluZGluZ0Rlc2NyaXB0b3JcIiwgYmluZGluZ0Rlc2MpO1xuICAgIH1cbiAgICByZXN0b3JlRGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5LCB2YWx1ZSwgZGVzY3JpcHRvcikge1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KG9iamVjdCwgcHJvcGVydHkpO1xuICAgICAgICBpZiAoZGVzY3JpcHRvcikge1xuICAgICAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmluaXRpYXRvciwgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH1cbiAgICAgICAgb2JqZWN0W3Byb3BlcnR5LnRvU3RyaW5nKCldID0gdmFsdWU7XG4gICAgfVxuICAgIGdldE9yaWdpbmFsUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwga2V5KSB7XG4gICAgICAgIGxldCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBrZXkpO1xuICAgICAgICBsZXQgbURhdGFOYW1lID0gYmluZE5hbWU7XG4gICAgICAgIGxldCBwcm90b3R5cGUgPSBvYmplY3Q7XG4gICAgICAgIGlmIChvYmplY3QgPT09IHRoaXMuaW5pdGlhdG9yKVxuICAgICAgICAgICAgbURhdGFOYW1lID0gaW5pQmluZE5hbWU7XG4gICAgICAgIHdoaWxlICghZGVzY3JpcHRvcikge1xuICAgICAgICAgICAgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSk7XG4gICAgICAgICAgICBpZiAoIXByb3RvdHlwZSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGlmIChwcm90b3R5cGUuY29uc3RydWN0b3IubmFtZSA9PT0gXCJCYXNlQ29uc3RydWN0b3JcIilcbiAgICAgICAgICAgICAgICBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKTtcbiAgICAgICAgICAgIGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlYXJjaERlc2NyaXB0b3JJbkJpbmRpbmdzID0gZmFsc2U7XG4gICAgICAgIGlmIChkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvci5zZXQgJiYgZGVzY3JpcHRvci5zZXQubmFtZSA9PT0gXCJiaW5kaW5nU2V0XCIpXG4gICAgICAgICAgICAgICAgc2VhcmNoRGVzY3JpcHRvckluQmluZGluZ3MgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3IuZ2V0ICYmIGRlc2NyaXB0b3IuZ2V0Lm5hbWUgPT09IFwiYmluZGluZ0dldFwiKVxuICAgICAgICAgICAgICAgIHNlYXJjaERlc2NyaXB0b3JJbkJpbmRpbmdzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VhcmNoRGVzY3JpcHRvckluQmluZGluZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShvYmplY3QsIG1EYXRhTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBiaW5kaW5ncyA9IG1EYXRhID8gbURhdGEuZ2V0KGtleS50b1N0cmluZygpKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChiaW5kaW5ncykge1xuICAgICAgICAgICAgICAgIGlmIChiaW5kaW5ncyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IgPSBiaW5kaW5nc1swXS5kZXNjcmlwdG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IgPSBiaW5kaW5ncy5pbml0aWF0b3JEZXNjcmlwdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICAgIH1cbn1cbmV4cG9ydHMuQmluZGluZyA9IEJpbmRpbmc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRbWx1WkdsdVp5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiR2xpTDBKcGJtUnBibWN1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3d3UTBGQmVVUTdRVUZGZWtRc01FTkJRWFZETzBGQlEzWkRMRzlFUVVGelJEdEJRVU4wUkN4clJFRkJLMGM3UVVGSkwwY3NUVUZCVFN4WFFVRlhMRWRCUVVjc2EwSkJRV3RDTEVOQlFVTTdRVUZEZGtNc1RVRkJUU3hSUVVGUkxFZEJRVWNzVlVGQlZTeERRVUZETzBGQmMwSTFRaXhOUVVGaExFOUJRVTg3U1VFd1JXaENMRmxCUVZrc1RVRkJVeXhGUVVGRkxGRkJRVmNzUlVGQlJTeFBRVUZ2UWl4WFFVRlhPMUZCUXk5RUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUTNKQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTJwQ0xFbEJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRFpDUVVFMlFpeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzBsQlEzSkdMRU5CUVVNN1NVRkxUU3hSUVVGUkxFTkJRVU1zUzBGQlZ6dFJRVU4yUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dEpRVU4yUWl4RFFVRkRPMGxCVVUwc1QwRkJUenRSUVVOV0xFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0SlFVTndSQ3hEUVVGRE8wbEJVMDBzVDBGQlR5eERRVUZETEZOQlFWa3NSVUZCUlN4UlFVRlhPMUZCUTNCRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUXpOQ0xFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1IwRkJSeXhSUVVGUkxFTkJRVU03VVVGRGJFTXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEhRVUZITEVsQlFVa3NRMEZCUXl3MlFrRkJOa0lzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMUZCUjNSSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETzFsQlFVVXNlVUpCUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEZkQlFWY3NSVUZCUlN4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRE9VY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1dVRkJSU3g1UWtGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVZHNSeXhOUVVGTkxHTkJRV01zUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzVjBGQlZ5eERRVUZETEVsQlFVa3NTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVNM1JTeE5RVUZOTEdkQ1FVRm5RaXhIUVVGSExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVOQlFVTTdVVUZEY0VVc1NVRkJTU3huUWtGQlowSTdXVUZCUlN4blFrRkJaMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0UlFVZG9SQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzVVVGQlVTeERRVUZETEVsQlFVa3NTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVNNVJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETzFsQlFVVXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpWRUxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTndReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVZHFSQ3hOUVVGTkxHTkJRV01zUjBGQlJ5eFRRVUZUTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVOb1JDeE5RVUZOTEZkQlFWY3NSMEZCUnl3NFFrRkJiVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVU53UlN4TlFVRk5MR05CUVdNc1IwRkJSeXc0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8xRkJRMjVHTEVsQlFVa3NTMEZCU3l4SFFVRm5RaXc0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxHTkJRV01zUTBGQlF5eERRVUZETzFGQlF6RkZMRWxCUVVrc1EwRkJReXhMUVVGTE8xbEJRVVVzYVVOQlFYTkNMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeGpRVUZqTEVWQlFVVXNTVUZCU1N4aFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVkMlJ5eExRVUZMTEVkQlFVY3NPRUpCUVcxQ0xFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4alFVRmpMRU5CUVdkQ0xFTkJRVU03VVVGRGVFVXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFJRVU0xUWl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETzFGQlJ5OUNMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4RFFVRkRPMUZCUTNwQ0xFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEZUVVc1EwRkJRenRKUVU5TkxFMUJRVTA3VVVGRlZDeE5RVUZOTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTXZReXhOUVVGTkxHTkJRV01zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMUZCUnpsRUxFMUJRVTBzVjBGQlZ5eEhRVUZITEhOQ1FVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTjJSQ3hOUVVGTkxHTkJRV01zUjBGQlJ5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU03VVVGRGFFWXNUVUZCVFN4alFVRmpMRWRCUVVjc2MwSkJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRmRCUVZjc1EwRkJReXhEUVVGRE8xRkJRMmhGTEUxQlFVMHNaMEpCUVdkQ0xFZEJRVWNzWTBGQll5eERRVUZETEVOQlFVTXNRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNN1VVRkZOVWNzVFVGQlRTeGpRVUZqTEVkQlFVY3NVMEZCVXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRGFFUXNUVUZCVFN4TFFVRkxMRWRCUVdkQ0xEaENRVUZ0UWl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzWTBGQll5eERRVUZETEVOQlFVTTdVVUZGTlVVc1NVRkJTU3huUWtGQlowSXNSVUZCUlR0WlFVTnNRaXhKUVVGSkxHTkJRV003WjBKQlFVVXNZMEZCWXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU0zUlN4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1kwRkJZeXhGUVVGRkxFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRE8xbEJRM3BITEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc09FSkJRVzFDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMnhHTzFGQlJVUXNTVUZCU1N4alFVRmpMRVZCUVVVN1dVRkRhRUlzTmtKQlFYTkNMRU5CUVVNc1kwRkJZeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFsQlF6ZERMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zT0VKQlFXMUNMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOdVJTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1JVRkJSVHRuUWtGRGVFSXNTVUZCU1N4WFFVRlhPMjlDUVVGRkxGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8yZENRVU51UkN4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZkQlFWY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03WjBKQlEycEdMR2xEUVVGelFpeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1kwRkJZeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzJGQlF6ZEVPMU5CUTBvN1NVRkRUQ3hEUVVGRE8wbEJVMDhzYVVKQlFXbENPMUZCUTNKQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTnNRaXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlEyNUVMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRk8xbEJReTlETEVkQlFVY3NSVUZCUlN4VFFVRlRMRlZCUVZVN1owSkJRM0JDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWxCUVVrc1MwRkJTeXhYUVVGWExFbEJRVWtzU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUXl4VFFVRlRPMjlDUVVGRkxFOUJRVThzVTBGQlV5eERRVUZETzJkQ1FVTXpSU3hQUVVGUExHdENRVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMWxCUTNaRUxFTkJRVU03V1VGRFJDeEhRVUZITEVWQlFVVXNVMEZCVXl4VlFVRlZMRU5CUVVNc1RVRkJhVVE3WjBKQlEzUkZMRWxCUVVrc1NVRkJTU3hEUVVGRExFbEJRVWtzUzBGQlN5eFZRVUZWTEVsQlFVa3NTVUZCU1N4TFFVRkxMRWxCUVVrc1EwRkJReXhUUVVGVE8yOUNRVUZGTEU5QlFVODdaMEpCUTJoRkxHdENRVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEUxQlFVMHNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRaUVVONFJDeERRVUZETzFsQlEwUXNXVUZCV1N4RlFVRkZMRWxCUVVrN1dVRkRiRUlzVlVGQlZTeEZRVUZGTEVsQlFVazdVMEZEYmtJc1EwRkJReXhEUVVGRE8xRkJRMGdzVFVGQlRTeFhRVUZYTEVkQlFVY3NUMEZCVHl4RFFVRkRMSGRDUVVGM1FpeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQmRVSXNRMEZCUXp0UlFVTjJSeXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNN1VVRkRMMFFzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hYUVVGWExFTkJRVU1zUTBGQlF6dFJRVU0xUlN4NVFrRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNiVUpCUVcxQ0xFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdTVUZEYkVVc1EwRkJRenRKUVZsUExHbENRVUZwUWl4RFFVRkRMRTFCUVhOQ0xFVkJRVVVzVVVGQmJVSXNSVUZCUlN4TFFVRlZMRVZCUVVVc1ZVRkJjVUk3VVVGRGNFY3NUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhOUVVGTkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdVVUZEZWtNc1NVRkJTU3hWUVVGVkxFVkJRVVU3V1VGRFdpeFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzFOQlF6bEZPMUZCUTBRc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVONFF5eERRVUZETzBsQlYwOHNOa0pCUVRaQ0xFTkJRVU1zVFVGQll5eEZRVUZGTEVkQlFXTTdVVUZEYUVVc1NVRkJTU3hWUVVGVkxFZEJRVzFETEU5QlFVOHNRMEZCUXl4M1FrRkJkMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRMMFlzU1VGQlNTeFRRVUZUTEVkQlFXOURMRkZCUVZFc1EwRkJRenRSUVVNeFJDeEpRVUZKTEZOQlFWTXNSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRka0lzU1VGQlNTeE5RVUZOTEV0QlFXRXNTVUZCU1N4RFFVRkRMRk5CUVZNN1dVRkJSU3hUUVVGVExFZEJRVWNzVjBGQlZ5eERRVUZETzFGQlF5OUVMRTlCUVU4c1EwRkJReXhWUVVGVkxFVkJRVVU3V1VGRGFFSXNVMEZCVXl4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdXVUZETjBNc1NVRkJTU3hEUVVGRExGTkJRVk03WjBKQlFVVXNUVUZCVFR0WlFVTjBRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4TFFVRkxMR2xDUVVGcFFqdG5Ra0ZCUlN4VFFVRlRMRWRCUVVjc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0WlFVTnVSeXhWUVVGVkxFZEJRVWNzVDBGQlR5eERRVUZETEhkQ1FVRjNRaXhEUVVGRExGTkJRVk1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0VFFVTnFSVHRSUVVORUxFbEJRVWtzTUVKQlFUQkNMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRM1pETEVsQlFVa3NWVUZCVlN4RlFVRkZPMWxCUTFvc1NVRkJTU3hWUVVGVkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hMUVVGTExGbEJRVms3WjBKQlFVVXNNRUpCUVRCQ0xFZEJRVWNzU1VGQlNTeERRVUZETzFsQlF6bEdMRWxCUVVrc1ZVRkJWU3hEUVVGRExFZEJRVWNzU1VGQlNTeFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1MwRkJTeXhaUVVGWk8yZENRVUZGTERCQ1FVRXdRaXhIUVVGSExFbEJRVWtzUTBGQlF6dFRRVU5xUnp0UlFVTkVMRWxCUVVrc01FSkJRVEJDTEVWQlFVVTdXVUZETlVJc1RVRkJUU3hMUVVGTExFZEJRVWNzYzBKQlFWY3NRMEZCVFN4TlFVRk5MRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03V1VGRGJFUXNUVUZCVFN4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkRMMFFzU1VGQlNTeFJRVUZSTEVWQlFVVTdaMEpCUTFZc1NVRkJTU3hSUVVGUkxGbEJRVmtzUzBGQlN5eEZRVUZGTzI5Q1FVTXpRaXhWUVVGVkxFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJRenRwUWtGRGRrTTdPMjlDUVVGTkxGVkJRVlVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU03WVVGRGNFUTdVMEZEU2p0UlFVTkVMRTlCUVU4c1ZVRkJWU3hEUVVGRE8wbEJRM1JDTEVOQlFVTTdRMEZEU2p0QlFYQlJSQ3d3UWtGdlVVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBWYWx1ZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuZXhwb3J0cy5WYWx1ZUVycm9yID0gVmFsdWVFcnJvcjtcbmNsYXNzIFR5cGVFcnJvciBleHRlbmRzIEVycm9yIHtcbn1cbmV4cG9ydHMuVHlwZUVycm9yID0gVHlwZUVycm9yO1xuY2xhc3MgQ29uZmlndXJhdGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuZXhwb3J0cy5Db25maWd1cmF0aW9uRXJyb3IgPSBDb25maWd1cmF0aW9uRXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSWEp5YjNKekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXNhV0l2UlhKeWIzSnpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlQwRXNUVUZCWVN4VlFVRlhMRk5CUVZFc1MwRkJTenREUVVGSk8wRkJRWHBETEdkRFFVRjVRenRCUVZONlF5eE5RVUZoTEZOQlFWVXNVMEZCVVN4TFFVRkxPME5CUVVrN1FVRkJlRU1zT0VKQlFYZERPMEZCVlhoRExFMUJRV0VzYTBKQlFXMUNMRk5CUVZFc1MwRkJTenREUVVGSk8wRkJRV3BFTEdkRVFVRnBSQ0o5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgV2F0Y2hlZF8xID0gcmVxdWlyZShcIn5iZG8vbGliL1dhdGNoZWRcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3Qgb25fY2hhbmdlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwib24tY2hhbmdlXCIpKTtcbmNsYXNzIEZpZWxkIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgICAgIHRoaXMuZmllbGRzID0gW107XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgfVxuICAgIGFkZEZpZWxkKGZpZWxkKSB7XG4gICAgICAgIGlmICh0aGlzLmZpZWxkcy5pbmNsdWRlcyhmaWVsZCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChmaWVsZC5vYmplY3QgJiYgZmllbGQub2JqZWN0LmlzQkRPTW9kZWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGFycmF5T2JqUHJveHkgPSB0aGlzLnByb3h5ZnlWYWx1ZShmaWVsZC52YWx1ZU9mKCkpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGFycmF5T2JqUHJveHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpZWxkIGluc3RhbmNlb2YgV2F0Y2hlZF8xLldhdGNoZWQgJiYgZmllbGQuc3ViT2JqZWN0KVxuICAgICAgICAgICAgdGhpcy5yZWRlZmluZVZhbHVlKGZpZWxkLnN1Yk9iamVjdCk7XG4gICAgICAgIHRoaXMucmVkZWZpbmVWYWx1ZShmaWVsZCk7XG4gICAgICAgIHRoaXMuZmllbGRzLnB1c2goZmllbGQpO1xuICAgIH1cbiAgICByZW1vdmVGaWVsZChmaWVsZCkge1xuICAgICAgICBpZiAoIXRoaXMuZmllbGRzLmluY2x1ZGVzKGZpZWxkKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKGZpZWxkIGluc3RhbmNlb2YgV2F0Y2hlZF8xLldhdGNoZWQgJiYgZmllbGQuc3ViT2JqZWN0KVxuICAgICAgICAgICAgdGhpcy5yZXN0b3JlVmFsdWUoZmllbGQuc3ViT2JqZWN0KTtcbiAgICAgICAgdGhpcy5yZXN0b3JlVmFsdWUoZmllbGQpO1xuICAgICAgICB1dGlsXzEucmVtb3ZlRWxlbWVudEZyb21BcnJheSh0aGlzLmZpZWxkcywgZmllbGQpO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuZmllbGRzKVxuICAgICAgICAgICAgZmllbGQuc2V0VmFsdWUodmFsdWUpO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgcmVkZWZpbmVWYWx1ZShmaWVsZCkge1xuICAgICAgICBtZXRhZGF0YV8xLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEoZmllbGQsIFwidmFsdWVcIiwgZmllbGQudmFsdWVPZigpKTtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoZmllbGQsIFwidmFsdWVcIik7XG4gICAgICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoZmllbGQsIFwidmFsdWVcIiwge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGF0LnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdXRpbF8xLmdldFByb3h5VGFyZ2V0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aGF0VmFsdWUgPSB1dGlsXzEuZ2V0UHJveHlUYXJnZXQodGhhdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB0aGF0VmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGF0LnZhbHVlID0gdGhhdC5wcm94eWZ5VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlc3RvcmVWYWx1ZShmaWVsZCkge1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGZpZWxkLCBcInZhbHVlXCIpO1xuICAgICAgICBmaWVsZC5zZXRWYWx1ZSh1dGlsXzEuZ2V0UHJveHlUYXJnZXQodGhpcy52YWx1ZSkpO1xuICAgIH1cbiAgICBwcm94eWZ5VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgfHwgdXRpbF8xLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBvbl9jaGFuZ2VfMS5kZWZhdWx0LnRhcmdldCh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gb25fY2hhbmdlXzEuZGVmYXVsdCh2YWx1ZSwgKHBhdGgsIGNoYW5nZWRWYWx1ZSwgcHJldmlvdXNWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5maWVsZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQucHJveHlIYW5kbGVyKHBhdGgsIGNoYW5nZWRWYWx1ZSwgcHJldmlvdXNWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVJtbGxiR1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJ4cFlpOUdhV1ZzWkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZGUVN3NFEwRkJNa003UVVGRk0wTXNNRU5CUVcxR08wRkJRMjVHTEd0RVFVRTJSRHRCUVVNM1JDeHJSVUZCYVVNN1FVRnBRbXBETEUxQlFXRXNTMEZCU3p0SlFXOURaQ3haUVVGWkxFMUJRVk1zUlVGQlJTeFJRVUZYTzFGQlJqRkNMRmRCUVUwc1IwRkJhVU1zUlVGQlJTeERRVUZETzFGQlJ6bERMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETzFGQlEzSkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETzBsQlF6ZENMRU5CUVVNN1NVRlZUU3hSUVVGUkxFTkJRVU1zUzBGQk5FSTdVVUZEZUVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNN1dVRkJSU3hQUVVGUE8xRkJRM2hETEVsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1NVRkJaU3hMUVVGTExFTkJRVU1zVFVGQlR5eERRVUZETEZWQlFWVXNSVUZCUlR0WlFVTnlSQ3hOUVVGTkxHRkJRV0VzUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzcEVMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzWVVGQllTeERRVUZETzFOQlF6bENPMUZCUTBRc1NVRkJTU3hMUVVGTExGbEJRVmtzYVVKQlFVOHNTVUZCU1N4TFFVRkxMRU5CUVVNc1UwRkJVenRaUVVGRkxFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRM0pHTEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRE1VSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETlVJc1EwRkJRenRKUVZWTkxGZEJRVmNzUTBGQlF5eExRVUUwUWp0UlFVTXpReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRE8xbEJRVVVzVDBGQlR6dFJRVU42UXl4SlFVRkpMRXRCUVVzc1dVRkJXU3hwUWtGQlR5eEpRVUZKTEV0QlFVc3NRMEZCUXl4VFFVRlRPMWxCUVVVc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkRjRVlzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVONlFpdzJRa0ZCYzBJc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXk5RExFTkJRVU03U1VGVFRTeFJRVUZSTEVOQlFVTXNTMEZCWjBNN1VVRkROVU1zUzBGQlN5eE5RVUZOTEV0QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUVHRaUVVGRkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRNMFFzUTBGQlF6dEpRVkZOTEU5QlFVODdVVUZEVml4UFFVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03U1VGRGRFSXNRMEZCUXp0SlFWZFBMR0ZCUVdFc1EwRkJReXhMUVVFMFFqdFJRVU01UXl4cFEwRkJjMElzUTBGQlV5eExRVUZMTEVWQlFVVXNUMEZCVHl4RlFVRkZMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEyaEZMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU5zUWl4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTjJReXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEV0QlFVc3NSVUZCUlN4UFFVRlBMRVZCUVVVN1dVRkRia01zUjBGQlJ6dG5Ra0ZEUXl4UFFVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03V1VGRGRFSXNRMEZCUXp0WlFVTkVMRWRCUVVjc1EwRkJReXhMUVVGWE8yZENRVU5ZTEV0QlFVc3NSMEZCUnl4eFFrRkJZeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzJkQ1FVTTVRaXhOUVVGTkxGTkJRVk1zUjBGQlJ5eHhRa0ZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dG5Ra0ZETjBNc1NVRkJTU3hMUVVGTExFdEJRVXNzVTBGQlV6dHZRa0ZCUlN4UFFVRlBPMmRDUVVOb1F5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZETVVNc1EwRkJRenRaUVVORUxGbEJRVmtzUlVGQlJTeEpRVUZKTzFsQlEyeENMRlZCUVZVc1JVRkJSU3hKUVVGSk8xTkJRMjVDTEVOQlFVTXNRMEZCUXp0SlFVTlFMRU5CUVVNN1NVRlRUeXhaUVVGWkxFTkJRVU1zUzBGQk5FSTdVVUZETjBNc1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRka01zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4eFFrRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXk5RExFTkJRVU03U1VGVlR5eFpRVUZaTEVOQlFVTXNTMEZCVnp0UlFVTTFRaXhKUVVGSkxFdEJRVXNzV1VGQldTeExRVUZMTEVsQlFVa3NaVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRek5ETEV0QlFVc3NSMEZCUnl4dFFrRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTXZRaXhQUVVGUExHMUNRVUZSTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxGbEJRVmtzUlVGQlJTeGhRVUZoTEVWQlFVVXNSVUZCUlR0blFrRkRla1FzUzBGQlN5eE5RVUZOTEV0QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8yOUNRVU0zUWl4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUlVGQlVTeFpRVUZaTEVWQlFWRXNZVUZCWVN4RFFVRkRMRU5CUVVNN2FVSkJRM0pGTzFsQlEwd3NRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRUanRSUVVORUxFOUJRVThzUzBGQlN5eERRVUZETzBsQlEycENMRU5CUVVNN1EwRkRTanRCUVROS1JDeHpRa0V5U2tNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIE1vZGlmaWNhdGlvbiB7XG4gICAgY29uc3RydWN0b3IodmFsdWUsIHR5cGUgPSBcImRlbGV0ZVwiKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59XG5leHBvcnRzLk1vZGlmaWNhdGlvbiA9IE1vZGlmaWNhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVRXOWthV1pwWTJGMGFXOXVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlzYVdJdlRXOWthV1pwWTJGMGFXOXVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlVVRXNUVUZCWVN4WlFVRlpPMGxCYlVKeVFpeFpRVUZaTEV0QlFWY3NSVUZCUlN4UFFVRnhRaXhSUVVGUk8xRkJRMnhFTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRMjVDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVUwc1NVRkJTU3hEUVVGRE8wbEJRM2hDTEVOQlFVTTdTVUZSVFN4UFFVRlBPMUZCUTFZc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzBsQlEzUkNMRU5CUVVNN1NVRlJUU3hSUVVGUkxFTkJRVU1zUzBGQlZUdFJRVU4wUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dEpRVU4yUWl4RFFVRkRPME5CUTBvN1FVRXpRMFFzYjBOQk1rTkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgTW9kaWZpY2F0aW9uXzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kaWZpY2F0aW9uXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IEVycm9yc18xID0gcmVxdWlyZShcIn5iZG8vbGliL0Vycm9yc1wiKTtcbmNvbnN0IG9uX2NoYW5nZV8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm9uLWNoYW5nZVwiKSk7XG5jbGFzcyBQcm9wZXJ0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSwgcGFyYW1zKSB7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgY2FwaXRhbGl6ZWRQcm9wID0gdXRpbF8xLnVjRmlyc3QocHJvcGVydHkpO1xuICAgICAgICBjb25zdCBvblR5cGVDaGVja0ZhaWwgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1UeXBlQ2hlY2tGYWlsYDtcbiAgICAgICAgY29uc3Qgb25UeXBlQ2hlY2sgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1UeXBlQ2hlY2tgO1xuICAgICAgICBjb25zdCBvblR5cGVDaGVja1N1Y2Nlc3MgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1UeXBlQ2hlY2tTdWNjZXNzYDtcbiAgICAgICAgdGhpcy5vblR5cGVDaGVja0ZhaWwgPSBwYXJhbXMgPyBwYXJhbXMub25UeXBlQ2hlY2tGYWlsIHx8IG9uVHlwZUNoZWNrRmFpbCA6IG9uVHlwZUNoZWNrRmFpbDtcbiAgICAgICAgdGhpcy5vblR5cGVDaGVjayA9IHBhcmFtcyA/IHBhcmFtcy5vblR5cGVDaGVjayB8fCBvblR5cGVDaGVjayA6IG9uVHlwZUNoZWNrO1xuICAgICAgICB0aGlzLm9uVHlwZUNoZWNrU3VjY2VzcyA9IHBhcmFtcyA/IHBhcmFtcy5vblR5cGVDaGVja1N1Y2Nlc3MgfHwgb25UeXBlQ2hlY2tTdWNjZXNzIDogb25UeXBlQ2hlY2tTdWNjZXNzO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmRvU2V0VmFsdWUodmFsdWUsIHRydWUpO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSB0aGlzLnByb3BlcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICghdXRpbF8xLmlzUHJveHkodmFsdWUpICYmIHRoaXMuc2F2ZUluTG9jYWxTdG9yYWdlICYmIHV0aWxfMS5pc0Z1bmN0aW9uKHRoaXMub2JqZWN0LmdldE5hbWVzcGFjZWRTdG9yYWdlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLm9iamVjdC5nZXROYW1lc3BhY2VkU3RvcmFnZShzdHJpbmdLZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgdHlwZUd1YXJkKHZhbHVlKSB7XG4gICAgICAgIGxldCB2YWx1ZVRvUGFzcyA9IHZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNb2RpZmljYXRpb25fMS5Nb2RpZmljYXRpb24pXG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgY29uc3QgZGVzaWduVHlwZSA9IG1ldGFkYXRhXzEuZ2V0RGVzaWduVHlwZSh0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eS50b1N0cmluZygpKTtcbiAgICAgICAgY29uc3QgdHlwZUVycm9yID0gbmV3IEVycm9yc18xLlR5cGVFcnJvcihgJHt2YWx1ZVRvUGFzc30gaXMgbm90IHR5cGUgb2YgJHtkZXNpZ25UeXBlLmNsYXNzTmFtZSB8fCBkZXNpZ25UeXBlLm5hbWV9YCk7XG4gICAgICAgIGNvbnN0IGlkeFN0cnVjdE9iaiA9IHRoaXMub2JqZWN0O1xuICAgICAgICBsZXQgZXJyb3I7XG4gICAgICAgIGlmICghdGhpcy5udWxsYWJsZSAmJiAodmFsdWVUb1Bhc3MgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZVRvUGFzcyA9PT0gbnVsbCkpXG4gICAgICAgICAgICBlcnJvciA9IHR5cGVFcnJvcjtcbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgaWYgKHV0aWxfMS5pc1ByaW1pdGl2ZSh2YWx1ZVRvUGFzcykpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlVG9QYXNzICE9PSBkZXNpZ25UeXBlLm5hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMubnVsbGFibGUgfHwgISh2YWx1ZVRvUGFzcyA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlVG9QYXNzID09PSBudWxsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gdHlwZUVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCEodmFsdWVUb1Bhc3MgaW5zdGFuY2VvZiBkZXNpZ25UeXBlKSlcbiAgICAgICAgICAgICAgICBlcnJvciA9IHR5cGVFcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVycm9yICYmIHV0aWxfMS5pc0Z1bmN0aW9uKGlkeFN0cnVjdE9ialt0aGlzLm9uVHlwZUNoZWNrXSkpXG4gICAgICAgICAgICBlcnJvciA9IGlkeFN0cnVjdE9ialt0aGlzLm9uVHlwZUNoZWNrXSh2YWx1ZVRvUGFzcyk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKHV0aWxfMS5pc0Z1bmN0aW9uKGlkeFN0cnVjdE9ialt0aGlzLm9uVHlwZUNoZWNrRmFpbF0pKSB7XG4gICAgICAgICAgICAgICAgaWR4U3RydWN0T2JqW3RoaXMub25UeXBlQ2hlY2tGYWlsXShlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh1dGlsXzEuaXNGdW5jdGlvbihpZHhTdHJ1Y3RPYmoub25UeXBlQ2hlY2tGYWlsKSkge1xuICAgICAgICAgICAgICAgIGlkeFN0cnVjdE9iai5vblR5cGVDaGVja0ZhaWwoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHV0aWxfMS5pc0Z1bmN0aW9uKGlkeFN0cnVjdE9ialt0aGlzLm9uVHlwZUNoZWNrU3VjY2Vzc10pKVxuICAgICAgICAgICAgaWR4U3RydWN0T2JqW3RoaXMub25UeXBlQ2hlY2tTdWNjZXNzXSgpO1xuICAgICAgICByZXR1cm4gIShCb29sZWFuKGVycm9yKS52YWx1ZU9mKCkpO1xuICAgIH1cbiAgICBwcm94eUhhbmRsZXIoX3BhdGgsIF9jaGFuZ2VkVmFsLCBfcHJldlZhbCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmRvU2V0VmFsdWUob25fY2hhbmdlXzEuZGVmYXVsdC50YXJnZXQodmFsdWUpLCBmYWxzZSk7XG4gICAgfVxuICAgIHNob3VsZERvU2V0VmFsdWUodmFsdWUsIHNraXBHdWFyZCA9IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiAhKHZhbHVlID09PSB0aGlzLm93blZhbHVlIHx8ICFza2lwR3VhcmQgJiYgIXRoaXMuZGlzYWJsZVR5cGVHdWFyZCAmJiAhdGhpcy50eXBlR3VhcmQodmFsdWUpKTtcbiAgICB9XG4gICAgZG9TZXRWYWx1ZSh2YWx1ZSwgbW9kaWZ5VmFsdWUgPSB0cnVlLCBza2lwR3VhcmQgPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkRG9TZXRWYWx1ZSh2YWx1ZSwgc2tpcEd1YXJkKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbGV0IHZhbHVlVG9QYXNzO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNb2RpZmljYXRpb25fMS5Nb2RpZmljYXRpb24pIHtcbiAgICAgICAgICAgIHZhbHVlVG9QYXNzID0gdmFsdWUudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHZhbHVlVG9QYXNzID0gdmFsdWU7XG4gICAgICAgIGlmIChtb2RpZnlWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgcHJveHlmaWVkID0gdGhpcy5wcm94eWZ5VmFsdWUodmFsdWVUb1Bhc3MpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHByb3h5ZmllZDtcbiAgICAgICAgICAgIHRoaXMub3duVmFsdWUgPSB2YWx1ZVRvUGFzcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zaG91bGRVcGRhdGVOc1N0b3JhZ2UoKSAmJiB1dGlsXzEuaXNGdW5jdGlvbih0aGlzLm9iamVjdC5zZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSkpIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0LnNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKHRoaXMucHJvcGVydHkudG9TdHJpbmcoKSwgdmFsdWVUb1Bhc3MpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3h5ZnlWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgdmFsdWUgPSBvbl9jaGFuZ2VfMS5kZWZhdWx0LnRhcmdldCh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gb25fY2hhbmdlXzEuZGVmYXVsdCh2YWx1ZSwgKHBhdGgsIGNoYW5nZWRWYWwsIHByZXZWYWwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm94eUhhbmRsZXJSZXBsYWNlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3h5SGFuZGxlclJlcGxhY2VtZW50KHBhdGgsIGNoYW5nZWRWYWwsIHByZXZWYWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJveHlIYW5kbGVyKHBhdGgsIGNoYW5nZWRWYWwsIHByZXZWYWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBzaG91bGRVcGRhdGVOc1N0b3JhZ2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5zYXZlSW5Mb2NhbFN0b3JhZ2UgfHwgIWVudmlyb25tZW50XzEuaXNCcm93c2VyKCkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IHRoaXMucHJvcGVydHkudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3Qga2V5U2hvdWxkQmVVcGRhdGVkID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLm9iamVjdCwgXCJrZXlTaG91bGRCZVVwZGF0ZWRcIikgfHwge307XG4gICAgICAgIGlmIChrZXlTaG91bGRCZVVwZGF0ZWRbc3RyaW5nS2V5XSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAodXRpbF8xLmlzRnVuY3Rpb24odGhpcy5vYmplY3QuZ2V0TmFtZXNwYWNlZFN0b3JhZ2UpICYmXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5nZXROYW1lc3BhY2VkU3RvcmFnZShzdHJpbmdLZXkpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcy5vYmplY3QsIFwia2V5U2hvdWxkQmVVcGRhdGVkXCIsIE9iamVjdC5hc3NpZ24oa2V5U2hvdWxkQmVVcGRhdGVkLCB7IFtzdHJpbmdLZXldOiB0cnVlIH0pKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBCb29sZWFuKG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5vYmplY3QsIFwiY29uc3RydWN0aW9uQ29tcGxldGVcIikpO1xuICAgIH1cbn1cbmV4cG9ydHMuUHJvcGVydHkgPSBQcm9wZXJ0eTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVISnZjR1Z5ZEhrdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyeHBZaTlRY205d1pYSjBlUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkRRU3gzUkVGQmNVUTdRVUZEY2tRc2EwUkJRV2xHTzBGQlEycEdMSGRFUVVGdFJEdEJRVU51UkN3d1EwRkJORVU3UVVGRE5VVXNORU5CUVRSRE8wRkJRelZETEd0RlFVRnBRenRCUVRKRmFrTXNUVUZCWVN4UlFVRlJPMGxCTmtacVFpeFpRVUZaTEUxQlFWTXNSVUZCUlN4UlFVRlhMRVZCUVVVc1RVRkJkMEk3VVVGRGVFUXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRGNrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU03VVVGRGVrSXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdVVUZGTlVJc1RVRkJUU3hsUVVGbExFZEJRVWNzWTBGQlR5eERRVUZETEZGQlFXdENMRU5CUVVNc1EwRkJRenRSUVVOd1JDeE5RVUZOTEdWQlFXVXNSMEZCUnl4TFFVRkxMR1ZCUVdVc1pVRkJaU3hEUVVGRE8xRkJRelZFTEUxQlFVMHNWMEZCVnl4SFFVRkhMRXRCUVVzc1pVRkJaU3hYUVVGWExFTkJRVU03VVVGRGNFUXNUVUZCVFN4clFrRkJhMElzUjBGQlJ5eExRVUZMTEdWQlFXVXNhMEpCUVd0Q0xFTkJRVU03VVVGRmJFVXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4bFFVRmxMRWxCUVVrc1pVRkJaU3hEUVVGRExFTkJRVU1zUTBGQlF5eGxRVUZsTEVOQlFVTTdVVUZETlVZc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhYUVVGWExFbEJRVWtzVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkROVVVzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMR3RDUVVGclFpeEpRVUZKTEd0Q1FVRnJRaXhEUVVGRExFTkJRVU1zUTBGQlF5eHJRa0ZCYTBJc1EwRkJRenRKUVVNMVJ5eERRVUZETzBsQlUwMHNVVUZCVVN4RFFVRkRMRXRCUVdkRE8xRkJRelZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEycERMRU5CUVVNN1NVRlZUU3hQUVVGUE8xRkJRMVlzVFVGQlRTeFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVVV6UXl4SlFVRkpMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzFGQlJYWkNMRWxCUVVrc1EwRkJReXhqUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMR3RDUVVGclFpeEpRVUZKTEdsQ1FVRlZMRU5CUVU4c1NVRkJTU3hEUVVGRExFMUJRVThzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhGUVVGRk8xbEJRMjVITEV0QlFVc3NSMEZCVXl4SlFVRkpMRU5CUVVNc1RVRkJUeXhEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xTkJRemxFTzFGQlEwUXNUMEZCVHl4TFFVRkxMRU5CUVVNN1NVRkRha0lzUTBGQlF6dEpRVlZOTEZOQlFWTXNRMEZCUXl4TFFVRm5RenRSUVVNM1F5eEpRVUZKTEZkQlFWY3NSMEZCUnl4TFFVRkxMRU5CUVVNN1VVRkRlRUlzU1VGQlNTeExRVUZMTEZsQlFWa3NNa0pCUVZrN1dVRkJSU3hYUVVGWExFZEJRVWNzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUldwRkxFMUJRVTBzVlVGQlZTeEhRVUZITEhkQ1FVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGVFVXNUVUZCVFN4VFFVRlRMRWRCUVVjc1NVRkJTU3hyUWtGQlV5eERRVUZETEVkQlFVY3NWMEZCVnl4dFFrRkJiVUlzVlVGQlZTeERRVUZETEZOQlFWTXNTVUZCU1N4VlFVRlZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU0xUnl4TlFVRk5MRmxCUVZrc1IwRkJiVUlzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVVnFSQ3hKUVVGSkxFdEJRVXNzUTBGQlF6dFJRVVZXTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eExRVUZMTEZOQlFWTXNTVUZCU1N4WFFVRlhMRXRCUVVzc1NVRkJTU3hEUVVGRE8xbEJRVVVzUzBGQlN5eEhRVUZITEZOQlFWTXNRMEZCUXp0UlFVVTNSaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTzFsQlExSXNTVUZCU1N4clFrRkJWeXhEUVVGRExGZEJRVmNzUTBGQlF5eEZRVUZGTzJkQ1FVTXhRaXhKUVVGSkxFOUJRVThzVjBGQlZ5eExRVUZMTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFVkJRVVU3YjBKQlEzUkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEpRVUZKTEVOQlFVTXNRMEZCUXl4WFFVRlhMRXRCUVVzc1UwRkJVeXhKUVVGSkxGZEJRVmNzUzBGQlN5eEpRVUZKTEVOQlFVTTdkMEpCUVVVc1MwRkJTeXhIUVVGSExGTkJRVk1zUTBGQlF6dHBRa0ZEYWtjN1lVRkRTanRwUWtGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXl4WFFVRlhMRmxCUVZrc1ZVRkJWU3hEUVVGRE8yZENRVUZGTEV0QlFVc3NSMEZCUnl4VFFVRlRMRU5CUVVNN1UwRkRkRVU3VVVGSFJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4SlFVRkpMR2xDUVVGVkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRaUVVGRkxFdEJRVXNzUjBGQlJ5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFGQlJ6bEhMRWxCUVVrc1MwRkJTeXhGUVVGRk8xbEJRMUFzU1VGQlNTeHBRa0ZCVlN4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNSVUZCUlR0blFrRkRhRVFzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dGhRVU0zUXp0cFFrRkJUU3hKUVVGSkxHbENRVUZWTEVOQlFVTXNXVUZCV1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhGUVVGRk8yZENRVU5xUkN4WlFVRlpMRU5CUVVNc1pVRkJaU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzJGQlEzWkRPenRuUWtGQlRTeE5RVUZOTEV0QlFVc3NRMEZCUXp0VFFVTjBRanRoUVVGTkxFbEJRVWtzYVVKQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRU5CUVVNN1dVRkJSU3haUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExFVkJRVVVzUTBGQlF6dFJRVU4wUnl4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVOMlF5eERRVUZETzBsQlQwMHNXVUZCV1N4RFFVRkRMRXRCUVdNc1JVRkJSU3hYUVVGclFpeEZRVUZGTEZGQlFXVTdVVUZEYmtVc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0UlFVTjZRaXhKUVVGSkxFdEJRVXNzUzBGQlN5eFRRVUZUTEVsQlFVa3NTMEZCU3l4TFFVRkxMRWxCUVVrN1dVRkJSU3hQUVVGUE8xRkJRMnhFTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc2JVSkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJrUXNRMEZCUXp0SlFWVk5MR2RDUVVGblFpeERRVUZETEV0QlFXZERMRVZCUVVVc1dVRkJjVUlzUzBGQlN6dFJRVU5vUml4UFFVRlBMRU5CUVVNc1EwRkJReXhMUVVGTExFdEJRVXNzU1VGQlNTeERRVUZETEZGQlFWRXNTVUZCU1N4RFFVRkRMRk5CUVZNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONFJ5eERRVUZETzBsQldWTXNWVUZCVlN4RFFVRkRMRXRCUVdkRExFVkJRVVVzWTBGQmRVSXNTVUZCU1N4RlFVRkZMRmxCUVhGQ0xFdEJRVXM3VVVGRE1VY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRE8xbEJRVVVzVDBGQlR6dFJRVU55UkN4SlFVRkpMRmRCUVRaQ0xFTkJRVU03VVVGRGJFTXNTVUZCU1N4TFFVRkxMRmxCUVZrc01rSkJRVmtzUlVGQlJUdFpRVU12UWl4WFFVRlhMRWRCUVVjc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFOQlEycERPenRaUVVGTkxGZEJRVmNzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZETTBJc1NVRkJTU3hYUVVGWExFVkJRVVU3V1VGRFlpeE5RVUZOTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFsQlEycEVMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzVTBGQlV5eERRVUZETzFsQlEzWkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVjBGQlZ5eERRVUZETzFOQlF5OUNPMUZCUTBRc1NVRkJTU3hKUVVGSkxFTkJRVU1zY1VKQlFYRkNMRVZCUVVVc1NVRkJTU3hwUWtGQlZTeERRVUZyUWl4SlFVRkpMRU5CUVVNc1RVRkJUeXhEUVVGRExEQkNRVUV3UWl4RFFVRkRMRVZCUVVVN1dVRkRja1lzU1VGQlNTeERRVUZETEUxQlFVOHNRMEZCUXl3d1FrRkJNRUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxGZEJRVmNzUTBGQlF5eERRVUZETzFOQlEyNUhPMGxCUTB3c1EwRkJRenRKUVZWVExGbEJRVmtzUTBGQlF5eExRVUZaTzFGQlF5OUNMRWxCUVVrc1MwRkJTeXhaUVVGWkxFdEJRVXNzUlVGQlJUdFpRVU40UWl4TFFVRkxMRWRCUVVjc2JVSkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1dVRkRMMElzVDBGQlR5eHRRa0ZCVVN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeFZRVUZWTEVWQlFVVXNUMEZCVHl4RlFVRkZMRVZCUVVVN1owSkJRMnBFTEVsQlFVa3NTVUZCU1N4RFFVRkRMSFZDUVVGMVFpeEZRVUZGTzI5Q1FVTTVRaXhKUVVGSkxFTkJRVU1zZFVKQlFYVkNMRU5CUVVNc1NVRkJTU3hGUVVGUkxGVkJRVlVzUlVGQlVTeFBRVUZQTEVOQlFVTXNRMEZCUXp0cFFrRkRka1U3TzI5Q1FVRk5MRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZSTEZWQlFWVXNSVUZCVVN4UFFVRlBMRU5CUVVNc1EwRkJRenRaUVVOd1JTeERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTk9PMUZCUTBRc1QwRkJUeXhMUVVGTExFTkJRVU03U1VGRGFrSXNRMEZCUXp0SlFWTlRMSEZDUVVGeFFqdFJRVU16UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4SlFVRkpMRU5CUVVNc2RVSkJRVk1zUlVGQlJUdFpRVUZGTEU5QlFVOHNTMEZCU3l4RFFVRkRPMUZCUXpORUxFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRE0wTXNUVUZCVFN4clFrRkJhMElzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzYjBKQlFXOUNMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRGFFWXNTVUZCU1N4clFrRkJhMElzUTBGQlF5eFRRVUZUTEVOQlFVTTdXVUZCUlN4UFFVRlBMRWxCUVVrc1EwRkJRenRSUVVNdlF5eEpRVUZKTEdsQ1FVRlZMRU5CUVd0Q0xFbEJRVWtzUTBGQlF5eE5RVUZQTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU03V1VGRE4wTXNTVUZCU1N4RFFVRkRMRTFCUVU4c1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhUUVVGVExFVkJRVVU3V1VGRE4wVXNlVUpCUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEc5Q1FVRnZRaXhGUVVGRkxFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzUlVGQlJTeERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU0xUnl4UFFVRlBMRWxCUVVrc1EwRkJRenRUUVVObU8xRkJRMFFzVDBGQlR5eFBRVUZQTEVOQlFVTXNjMEpCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEhOQ1FVRnpRaXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU55UlN4RFFVRkRPME5CUTBvN1FVRTFVVVFzTkVKQk5GRkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgTW9kaWZpY2F0aW9uXzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kaWZpY2F0aW9uXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IG9uX2NoYW5nZV8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm9uLWNoYW5nZVwiKSk7XG5jb25zdCBjbG9uZV9kZWVwXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiY2xvbmUtZGVlcFwiKSk7XG5jbGFzcyBXYXRjaGVkIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5LCBwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5pc1NoYWxsb3cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgICAgIGNvbnN0IGNhcGl0YWxpemVkUHJvcCA9IHV0aWxfMS51Y0ZpcnN0KHByb3BlcnR5KTtcbiAgICAgICAgY29uc3Qgb25Jbml0RnVuYyA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfUluaXRgO1xuICAgICAgICBjb25zdCBvbkNoYW5nZUZ1bmMgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1DaGFuZ2VgO1xuICAgICAgICBjb25zdCBvbkFkZEZ1bmMgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1BZGRgO1xuICAgICAgICBjb25zdCBvblJlbW92ZUZ1bmMgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1SZW1vdmVgO1xuICAgICAgICB0aGlzLm9uSW5pdCA9IHBhcmFtcyA/IHBhcmFtcy5vbkluaXQgfHwgb25Jbml0RnVuYyA6IG9uSW5pdEZ1bmM7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBwYXJhbXMgPyBwYXJhbXMub25DaGFuZ2UgfHwgb25DaGFuZ2VGdW5jIDogb25DaGFuZ2VGdW5jO1xuICAgICAgICB0aGlzLm9uQWRkID0gcGFyYW1zID8gcGFyYW1zLm9uQWRkIHx8IG9uQWRkRnVuYyA6IG9uQWRkRnVuYztcbiAgICAgICAgdGhpcy5vblJlbW92ZSA9IHBhcmFtcyA/IHBhcmFtcy5vblJlbW92ZSB8fCBvblJlbW92ZUZ1bmMgOiBvblJlbW92ZUZ1bmM7XG4gICAgICAgIHRoaXMuaXNTaGFsbG93ID0gcGFyYW1zID8gQm9vbGVhbihwYXJhbXMuaXNTaGFsbG93KSA6IGZhbHNlO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkRG9TZXRWYWx1ZSh2YWx1ZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IG9sZFZhbCA9IGNsb25lX2RlZXBfMS5kZWZhdWx0KHRoaXMub3duVmFsdWUpO1xuICAgICAgICBsZXQgdmFsdWVUb1Bhc3M7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGlmaWNhdGlvbl8xLk1vZGlmaWNhdGlvbikge1xuICAgICAgICAgICAgdmFsdWVUb1Bhc3MgPSB2YWx1ZS52YWx1ZU9mKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdmFsdWVUb1Bhc3MgPSB2YWx1ZTtcbiAgICAgICAgbGV0IHVzZVZhbHVlID0gZmFsc2U7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGlmaWNhdGlvbl8xLk1vZGlmaWNhdGlvbikge1xuICAgICAgICAgICAgdmFsdWUuc2V0VmFsdWUodmFsdWVUb1Bhc3MpO1xuICAgICAgICAgICAgdXNlVmFsdWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlVG9TZXQgPSB1c2VWYWx1ZSA/IHZhbHVlIDogdmFsdWVUb1Bhc3M7XG4gICAgICAgIGlmICh0aGlzLnN1Yk9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy5zdWJPYmplY3Quc2V0VmFsdWUodmFsdWVUb1NldCk7XG4gICAgICAgICAgICB0aGlzLm93blZhbHVlID0gdXRpbF8xLmdldFByb3h5VGFyZ2V0KHRoaXMuc3ViT2JqZWN0LnZhbHVlT2YoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHRoaXMucHJveHlmeVZhbHVlKHZhbHVlVG9QYXNzKTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVRvUGFzcztcbiAgICAgICAgICAgIHRoaXMub3duVmFsdWUgPSB1dGlsXzEuZ2V0UHJveHlUYXJnZXQodmFsdWVUb1Bhc3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkeFN0cnVjdE9iaiA9IHRoaXMub2JqZWN0O1xuICAgICAgICBpZiAodXRpbF8xLmlzRnVuY3Rpb24oaWR4U3RydWN0T2JqW3RoaXMub25DaGFuZ2VdKSAmJiB0aGlzLmlzSW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICBpZHhTdHJ1Y3RPYmpbdGhpcy5vbkNoYW5nZV0ob2xkVmFsKTtcbiAgICAgICAgaWYgKHV0aWxfMS5pc0Z1bmN0aW9uKGlkeFN0cnVjdE9ialt0aGlzLm9uSW5pdF0pICYmICF0aGlzLmlzSW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICBpZHhTdHJ1Y3RPYmpbdGhpcy5vbkluaXRdKHZhbHVlVG9QYXNzKTtcbiAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViT2JqZWN0KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ViT2JqZWN0LnZhbHVlT2YoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHNldFN1Yk9iamVjdChzdWJPYmplY3QpIHtcbiAgICAgICAgc3ViT2JqZWN0LnByb3h5SGFuZGxlclJlcGxhY2VtZW50ID0gdGhpcy5wcm94eUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdWJPYmplY3QgPSBzdWJPYmplY3Q7XG4gICAgfVxuICAgIHByb3h5SGFuZGxlcihwYXRoLCBjaGFuZ2VkVmFsLCBwcmV2VmFsKSB7XG4gICAgICAgIGlmICh0aGlzLnN1Yk9iamVjdClcbiAgICAgICAgICAgIHRoaXMuc3ViT2JqZWN0LnByb3h5SGFuZGxlcihwYXRoLCBjaGFuZ2VkVmFsLCBwcmV2VmFsKTtcbiAgICAgICAgY29uc3QgbmV3S2V5cyA9IE9iamVjdC5rZXlzKGNoYW5nZWRWYWwpO1xuICAgICAgICBjb25zdCBvbGRLZXlzID0gT2JqZWN0LmtleXMocHJldlZhbCk7XG4gICAgICAgIGNvbnN0IG5ld0xlbiA9IG5ld0tleXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBvbGRMZW4gPSBvbGRLZXlzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5jYXNlRGV0ZWN0RXhlYyh7XG4gICAgICAgICAgICBsZW4xOiBuZXdMZW4sXG4gICAgICAgICAgICBsZW4yOiBvbGRMZW4sXG4gICAgICAgICAgICBmdW5jOiB0aGlzLm9uQWRkLFxuICAgICAgICAgICAga2V5czE6IG5ld0tleXMsXG4gICAgICAgICAgICBrZXlzMjogb2xkS2V5cyxcbiAgICAgICAgICAgIGNoYW5nZWRWYWwsXG4gICAgICAgICAgICBwYXRoXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhc2VEZXRlY3RFeGVjKHtcbiAgICAgICAgICAgIGxlbjE6IG9sZExlbixcbiAgICAgICAgICAgIGxlbjI6IG5ld0xlbixcbiAgICAgICAgICAgIGZ1bmM6IHRoaXMub25SZW1vdmUsXG4gICAgICAgICAgICBrZXlzMTogb2xkS2V5cyxcbiAgICAgICAgICAgIGtleXMyOiBuZXdLZXlzLFxuICAgICAgICAgICAgY2hhbmdlZFZhbCxcbiAgICAgICAgICAgIHBhdGhcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChuZXdMZW4gPT09IG9sZExlbiAmJiB0aGlzLm9uQ2hhbmdlIGluIHRoaXMgJiYgdGhpcy5pc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICB0aGlzLm9iamVjdFt0aGlzLm9uQ2hhbmdlXShjaGFuZ2VkVmFsLCBwYXRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaG91bGREb1NldFZhbHVlKHZhbHVlLCBza2lwR3VhcmQgPSBmYWxzZSkge1xuICAgICAgICBpZiAodGhpcy5zdWJPYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1Yk9iamVjdC5zaG91bGREb1NldFZhbHVlKHZhbHVlLCBza2lwR3VhcmQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiAodmFsdWUgIT09IHRoaXMub3duVmFsdWUpO1xuICAgIH1cbiAgICBwcm94eWZ5VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gb25fY2hhbmdlXzEuZGVmYXVsdC50YXJnZXQodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIG9uX2NoYW5nZV8xLmRlZmF1bHQodmFsdWUsIChwYXRoLCBjaGFuZ2VkVmFsdWUsIHByZXZpb3VzVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3h5SGFuZGxlcihwYXRoLCBjaGFuZ2VkVmFsdWUsIHByZXZpb3VzVmFsdWUpO1xuICAgICAgICAgICAgfSwgeyBpc1NoYWxsb3c6IHRoaXMuaXNTaGFsbG93IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY2FzZURldGVjdEV4ZWMoY2RQYXJhbXMpIHtcbiAgICAgICAgaWYgKGNkUGFyYW1zLmxlbjEgPiBjZFBhcmFtcy5sZW4yICYmIGNkUGFyYW1zLmZ1bmMgaW4gdGhpcy5vYmplY3QpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbW9kaWZpZWQgb2YgY2RQYXJhbXMua2V5czEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNkUGFyYW1zLmtleXMyLmluY2x1ZGVzKG1vZGlmaWVkKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iamVjdFtjZFBhcmFtcy5mdW5jXSgoY2RQYXJhbXMuY2hhbmdlZFZhbClbbW9kaWZpZWRdLCBjZFBhcmFtcy5wYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5XYXRjaGVkID0gV2F0Y2hlZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVYyRjBZMmhsWkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmJHbGlMMWRoZEdOb1pXUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlJVRXNkMFJCUVhGRU8wRkJRM0pFTERCRFFVRnpSVHRCUVVOMFJTeHJSVUZCYVVNN1FVRkRha01zYjBWQlFXMURPMEZCT0VodVF5eE5RVUZoTEU5QlFVODdTVUZ4UjJoQ0xGbEJRVmtzVFVGQlV5eEZRVUZGTEZGQlFWY3NSVUZCUlN4TlFVRjFRanRSUVdoRGNFUXNZMEZCVXl4SFFVRlpMRXRCUVVzc1EwRkJRenRSUVRoQ01VSXNhMEpCUVdFc1IwRkJXU3hMUVVGTExFTkJRVU03VVVGSGJrTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRGNrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU03VVVGRmVrSXNUVUZCVFN4bFFVRmxMRWRCUVVjc1kwRkJUeXhEUVVGRExGRkJRV3RDTEVOQlFVTXNRMEZCUXp0UlFVVndSQ3hOUVVGTkxGVkJRVlVzUjBGQlJ5eExRVUZMTEdWQlFXVXNUVUZCVFN4RFFVRkRPMUZCUXpsRExFMUJRVTBzV1VGQldTeEhRVUZITEV0QlFVc3NaVUZCWlN4UlFVRlJMRU5CUVVNN1VVRkRiRVFzVFVGQlRTeFRRVUZUTEVkQlFVY3NTMEZCU3l4bFFVRmxMRXRCUVVzc1EwRkJRenRSUVVNMVF5eE5RVUZOTEZsQlFWa3NSMEZCUnl4TFFVRkxMR1ZCUVdVc1VVRkJVU3hEUVVGRE8xRkJSV3hFTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4SlFVRkpMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETzFGQlEyaEZMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hKUVVGSkxGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRPMUZCUTNoRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRE8xRkJRelZFTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4SlFVRkpMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETzFGQlJYaEZMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNN1NVRkRhRVVzUTBGQlF6dEpRVlZOTEZGQlFWRXNRMEZCUXl4TFFVRm5RenRSUVVNMVF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEV0QlFVc3NRMEZCUXp0WlFVRkZMRTlCUVU4N1VVRkhNVU1zVFVGQlRTeE5RVUZOTEVkQlFVY3NiMEpCUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdVVUZGZUVNc1NVRkJTU3hYUVVFMlFpeERRVUZETzFGQlEyeERMRWxCUVVrc1MwRkJTeXhaUVVGWkxESkNRVUZaTEVWQlFVVTdXVUZETDBJc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0VFFVTnFRenM3V1VGQlRTeFhRVUZYTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUnpOQ0xFbEJRVWtzVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTnlRaXhKUVVGSkxFdEJRVXNzV1VGQldTd3lRa0ZCV1N4RlFVRkZPMWxCUXk5Q0xFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkROVUlzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXp0VFFVTnVRanRSUVVWRUxFMUJRVTBzVlVGQlZTeEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZGYkVRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTzFsQlEyaENMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NjVUpCUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkROVVE3WVVGQlRUdFpRVVZJTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFsQlF6ZERMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzVjBGQlZ5eERRVUZETzFsQlEzcENMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzY1VKQlFXTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRUUVVNdlF6dFJRVVZFTEUxQlFVMHNXVUZCV1N4SFFVRnRRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzFGQlJXcEVMRWxCUVVrc2FVSkJRVlVzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEdGQlFXRTdXVUZCUlN4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUlhaSExFbEJRVWtzYVVKQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZVHRaUVVGRkxGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03VVVGRGVrY3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhKUVVGSkxFTkJRVU03U1VGRE9VSXNRMEZCUXp0SlFWVk5MRTlCUVU4N1VVRkRWaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFRRVUZUTzFsQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFGQlEzQkVMRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU4wUWl4RFFVRkRPMGxCVlUwc1dVRkJXU3hEUVVGRExGTkJRVEpETzFGQlF6TkVMRk5CUVZNc1EwRkJReXgxUWtGQmRVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTnFSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZITEZOQlFWTXNRMEZCUXp0SlFVTXZRaXhEUVVGRE8wbEJWVTBzV1VGQldTeERRVUZETEVsQlFWa3NSVUZCUlN4VlFVRm5RaXhGUVVGRkxFOUJRV0U3VVVGRE4wUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1UwRkJVenRaUVVGRkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hWUVVGVkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdVVUZETTBVc1RVRkJUU3hQUVVGUExFZEJRVWNzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVONFF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFGQlEzSkRMRTFCUVUwc1RVRkJUU3hIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZET1VJc1RVRkJUU3hOUVVGTkxFZEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXp0UlFVYzVRaXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETzFsQlEyaENMRWxCUVVrc1JVRkJSU3hOUVVGTk8xbEJRMW9zU1VGQlNTeEZRVUZGTEUxQlFVMDdXVUZEV2l4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXM3V1VGRGFFSXNTMEZCU3l4RlFVRkZMRTlCUVU4N1dVRkRaQ3hMUVVGTExFVkJRVVVzVDBGQlR6dFpRVU5rTEZWQlFWVTdXVUZEVml4SlFVRkpPMU5CUTFBc1EwRkJReXhEUVVGRE8xRkJSVWdzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXp0WlFVTm9RaXhKUVVGSkxFVkJRVVVzVFVGQlRUdFpRVU5hTEVsQlFVa3NSVUZCUlN4TlFVRk5PMWxCUTFvc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTzFsQlEyNUNMRXRCUVVzc1JVRkJSU3hQUVVGUE8xbEJRMlFzUzBGQlN5eEZRVUZGTEU5QlFVODdXVUZEWkN4VlFVRlZPMWxCUTFZc1NVRkJTVHRUUVVOUUxFTkJRVU1zUTBGQlF6dFJRVVZJTEVsQlFVa3NUVUZCVFN4TFFVRkxMRTFCUVUwc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEpRVUZKTEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRk8xbEJRMnBFTEVsQlFVa3NRMEZCUXl4TlFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEZWQlFWVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVOc1JUdEpRVU5NTEVOQlFVTTdTVUZYVHl4blFrRkJaMElzUTBGQlF5eExRVUZuUXl4RlFVRkZMRmxCUVhGQ0xFdEJRVXM3VVVGRGFrWXNTVUZCU1N4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRk8xbEJRMmhDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03VTBGRE5VUTdPMWxCUVUwc1QwRkJUeXhEUVVGRExFdEJRVXNzUzBGQlN5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1NVRkROVU1zUTBGQlF6dEpRVmRQTEZsQlFWa3NRMEZCUXl4TFFVRlpPMUZCUXpkQ0xFbEJRVWtzUzBGQlN5eFpRVUZaTEV0QlFVc3NSVUZCUlR0WlFVTjRRaXhMUVVGTExFZEJRVWNzYlVKQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGREwwSXNUMEZCVHl4dFFrRkJVU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4WlFVRlpMRVZCUVVVc1lVRkJZU3hGUVVGRkxFVkJRVVU3WjBKQlEzcEVMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZSTEZsQlFWa3NSVUZCVVN4aFFVRmhMRU5CUVVNc1EwRkJRenRaUVVOeVJTeERRVUZETEVWQlFVVXNSVUZCUlN4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEY2tNN1VVRkRSQ3hQUVVGUExFdEJRVXNzUTBGQlF6dEpRVU5xUWl4RFFVRkRPMGxCVTA4c1kwRkJZeXhEUVVGRExGRkJRVEpDTzFGQlF6bERMRWxCUVVrc1VVRkJVU3hEUVVGRExFbEJRVWtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTVUZCU1N4SlFVRkpMRkZCUVZFc1EwRkJReXhKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlR0WlFVTXZSQ3hMUVVGTExFMUJRVTBzVVVGQlVTeEpRVUZKTEZGQlFWRXNRMEZCUXl4TFFVRkxMRVZCUVVVN1owSkJRMjVETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlR0dlFrRkRPVUlzU1VGQlNTeERRVUZETEUxQlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVUwc1VVRkJVU3hEUVVGRExFVkJRVVVzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMjlDUVVOMlJpeE5RVUZOTzJsQ1FVTlVPMkZCUTBvN1UwRkRTanRKUVVOTUxFTkJRVU03UTBGRFNqdEJRVFZTUkN3d1FrRTBVa01pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5mdW5jdGlvbiBCRE9UZXN0RmFjdG9yeShjdG9yKSB7XG4gICAgbGV0IEJET1Rlc3QgPSBjbGFzcyBCRE9UZXN0IGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSAndGVzdCc7XG4gICAgICAgICAgICB0aGlzLnRlc3RlciA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIG9uVGVzdENoYW5nZShjaGFuZ2VkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3QgY2hhbmdlZFwiLCBjaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBvblRlc3RlckluaXQoaW5pdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgaW5pdFwiLCBpbml0LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBvblRlc3RlckNoYW5nZShjaGFuZ2VkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RlciBjaGFuZ2VkXCIsIGNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIG9uVGVzdGVyQWRkKGFkZGVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RlciBhZGRlZFwiLCBhZGRlZCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgb25UZXN0ZXJSZW1vdmUocmVtb3ZlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgcmVtb3ZlZFwiLCByZW1vdmVkLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLmF0dHJpYnV0ZSh7IGF1dG9TYXZlOiB0cnVlIH0pLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgQkRPVGVzdC5wcm90b3R5cGUsIFwidGl0bGVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEud2F0Y2hlZCgpLCBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKChfdHlwZSkgPT4gW1N0cmluZ10pLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSlcbiAgICBdLCBCRE9UZXN0LnByb3RvdHlwZSwgXCJ0ZXN0ZXJcIiwgdm9pZCAwKTtcbiAgICBCRE9UZXN0ID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3Rvcih7IGlzQWJzdHJhY3Q6IHRydWUsIGNvbGxlY3Rpb25OYW1lOiBcIkJET1Rlc3RcIiB9KVxuICAgIF0sIEJET1Rlc3QpO1xuICAgIHJldHVybiBCRE9UZXN0O1xufVxuZXhwb3J0cy5CRE9UZXN0RmFjdG9yeSA9IEJET1Rlc3RGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFZHVnpkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2Ylc5a1pXeHpMMEpFVDFSbGMzUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNjMFJCUVRSRk8wRkJWVFZGTEZOQlFXZENMR05CUVdNc1EwRkJjME1zU1VGQlZ6dEpRVk16UlN4SlFVRmxMRTlCUVU4c1IwRkJkRUlzVFVGQlpTeFBRVUZSTEZOQlFWRXNTVUZCU1R0UlFVRnVRenM3V1VGUk1FTXNWVUZCU3l4SFFVRlhMRTFCUVUwc1EwRkJRenRaUVZGWUxGZEJRVTBzUjBGQllTeEZRVUZGTEVOQlFVTTdVVUY1UkRWRkxFTkJRVU03VVVGb1JHRXNXVUZCV1N4RFFVRkRMRTlCUVhWQ08xbEJRekZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1kwRkJZeXhGUVVGRkxFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTXZReXhEUVVGRE8xRkJVMU1zV1VGQldTeERRVUZETEVsQlFXOUNPMWxCUTNaRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNZVUZCWVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU16UXl4RFFVRkRPMUZCVTFNc1kwRkJZeXhEUVVGRExFOUJRWFZDTzFsQlF6VkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEycEVMRU5CUVVNN1VVRlRVeXhYUVVGWExFTkJRVU1zUzBGQmNVSTdXVUZEZGtNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eGpRVUZqTEVWQlFVVXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRemRETEVOQlFVTTdVVUZUVXl4alFVRmpMRU5CUVVNc1QwRkJkVUk3V1VGRE5VTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhuUWtGQlowSXNSVUZCUlN4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRGFrUXNRMEZCUXp0TFFVVktMRU5CUVVFN1NVRnFSV3RETzFGQlFUbENMSE5DUVVGVExFTkJRVU1zUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RlFVRkZMRU5CUVVNN096QkRRVUVyUWp0SlFWRnNRanRSUVVFeFF5eHZRa0ZCVHl4RlFVRkZMRVZCUVVVc2MwSkJRVk1zUTBGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6czdNa05CUVRoQ08wbEJhRUkzUkN4UFFVRlBPMUZCUkhKQ0xEUkNRVUZsTEVOQlFVTXNSVUZCUlN4VlFVRlZMRVZCUVVVc1NVRkJTU3hGUVVGRkxHTkJRV01zUlVGQlJTeFRRVUZUTEVWQlFVVXNRMEZCUXp0UFFVTnNSQ3hQUVVGUExFTkJlVVZ5UWp0SlFVTkVMRTlCUVU4c1QwRkJUeXhEUVVGRE8wRkJSVzVDTEVOQlFVTTdRVUZ5UmtRc2QwTkJjVVpESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5mdW5jdGlvbiBCRE9UZXN0MUZhY3RvcnkoY3Rvcikge1xuICAgIGxldCBCRE9UZXN0MSA9IGNsYXNzIEJET1Rlc3QxIGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGRvU29tZXRoaW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwibG9sXCI7XG4gICAgICAgIH1cbiAgICAgICAgb25PaGFJbml0KF92YWx1ZSkge1xuICAgICAgICB9XG4gICAgfTtcbiAgICBCRE9UZXN0MSA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoeyBpc0Fic3RyYWN0OiB0cnVlLCBjb2xsZWN0aW9uTmFtZTogXCJCRE9UZXN0MVwiIH0pXG4gICAgXSwgQkRPVGVzdDEpO1xuICAgIHJldHVybiBCRE9UZXN0MTtcbn1cbmV4cG9ydHMuQkRPVGVzdDFGYWN0b3J5ID0gQkRPVGVzdDFGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFZHVnpkREV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDIxdlpHVnNjeTlDUkU5VVpYTjBNUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkRRU3h6UkVGQmQwUTdRVUZUZUVRc1UwRkJaMElzWlVGQlpTeERRVUZyUkN4SlFVRlhPMGxCVlhoR0xFbEJRV1VzVVVGQlVTeEhRVUYyUWl4TlFVRmxMRkZCUVZNc1UwRkJVU3hKUVVGSk8xRkJVWHBDTEZkQlFWYzdXVUZEWkN4UFFVRlBMRXRCUVVzc1EwRkJRenRSUVVOcVFpeERRVUZETzFGQlUxTXNVMEZCVXl4RFFVRkRMRTFCUVdNN1VVRkZiRU1zUTBGQlF6dExRVU5LTEVOQlFVRTdTVUYwUW1Nc1VVRkJVVHRSUVVSMFFpdzBRa0ZCWlN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFbEJRVWtzUlVGQlJTeGpRVUZqTEVWQlFVVXNWVUZCVlN4RlFVRkZMRU5CUVVNN1QwRkRia1FzVVVGQlVTeERRWE5DZEVJN1NVRkRSQ3hQUVVGUExGRkJRVkVzUTBGQlF6dEJRVU53UWl4RFFVRkRPMEZCYkVORUxEQkRRV3REUXlKOSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcblwidXNlIHN0cmljdFwiO1xuY29uc3QgQ2h1bmtfMSA9IHJlcXVpcmUoXCIuL0NodW5rXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmxldCBDZWxsID0gY2xhc3MgQ2VsbCB7XG4gICAgY29uc3RydWN0b3IoX3BhcmFtcykge1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLmNhdmUgPSAwO1xuICAgICAgICB0aGlzLnJpdmVyID0gMDtcbiAgICAgICAgdGhpcy5odW1pZGl0eSA9IDA7XG4gICAgICAgIHRoaXMudGVtcGVyYXR1cmUgPSAwO1xuICAgICAgICB0aGlzLmNodW5rID0gbmV3IENodW5rXzEuQ2h1bmsoKTtcbiAgICB9XG59O1xuQ2VsbCA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIENvbnN0UGFyYW1zICE9PSBcInVuZGVmaW5lZFwiICYmIENvbnN0UGFyYW1zKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3RdKVxuXSwgQ2VsbCk7XG5leHBvcnRzLkNlbGwgPSBDZWxsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTJWc2JDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiVzlrWld4ekwwTmxiR3d1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdRVUZCUVN4dFEwRkJaME03UVVGRGFFTXNjMFJCUVhkRU8wRkJVM2hFTEVsQlFXRXNTVUZCU1N4SFFVRnFRaXhOUVVGaExFbEJRVWs3U1VGNVJHSXNXVUZCV1N4UFFVRXlRanRSUVd4RWFFTXNUVUZCUXl4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVZGa0xFMUJRVU1zUjBGQlZ5eERRVUZETEVOQlFVTTdVVUZSWkN4VFFVRkpMRWRCUVZjc1EwRkJReXhEUVVGRE8xRkJVV3BDTEZWQlFVc3NSMEZCVnl4RFFVRkRMRU5CUVVNN1VVRlJiRUlzWVVGQlVTeEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFWRnlRaXhuUWtGQlZ5eEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFWRjRRaXhWUVVGTExFZEJRVlVzU1VGQlNTeGhRVUZMTEVWQlFVVXNRMEZCUXp0SlFVVlRMRU5CUVVNN1EwRkRMME1zUTBGQlFUdEJRVEZFV1N4SlFVRkpPMGxCUkdoQ0xEUkNRVUZsTEVWQlFVVTdhVVZCTUVSUkxGZEJRVmNzYjBKQlFWZ3NWMEZCVnp0SFFYcEVlRUlzU1VGQlNTeERRVEJFYUVJN1FVRXhSRmtzYjBKQlFVa2lmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3Qgb3Blbl9zaW1wbGV4X25vaXNlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwib3Blbi1zaW1wbGV4LW5vaXNlXCIpKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBDZWxsXzEgPSByZXF1aXJlKFwiLi9DZWxsXCIpO1xuY2xhc3MgQ2h1bmsge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLnNpemUgPSA2NDtcbiAgICAgICAgdGhpcy5ncmlkID0gW107XG4gICAgICAgIHRoaXMuc2ltcGxleENhdmUgPSBuZXcgb3Blbl9zaW1wbGV4X25vaXNlXzEuZGVmYXVsdCgxKTtcbiAgICAgICAgdGhpcy5zaW1wbGV4Uml2ZXIgPSBuZXcgb3Blbl9zaW1wbGV4X25vaXNlXzEuZGVmYXVsdCgyKTtcbiAgICAgICAgdGhpcy5zaW1wbGV4VGVtcGVyYXR1cmUgPSBuZXcgb3Blbl9zaW1wbGV4X25vaXNlXzEuZGVmYXVsdCgzKTtcbiAgICAgICAgdGhpcy5zaW1wbGV4SHVtaWRpdHkgPSBuZXcgb3Blbl9zaW1wbGV4X25vaXNlXzEuZGVmYXVsdCg0KTtcbiAgICAgICAgdXRpbF8xLm1lcmdlKHRoaXMsIHBhcmFtcyk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVHcmlkKCk7XG4gICAgfVxuICAgIGdlbmVyYXRlR3JpZCgpIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5zaXplOyByb3crKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdyaWRbcm93XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5wdXNoKFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuc2l6ZTsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4Q29vcmRpbmF0ZSA9IGNvbCArIHRoaXMueCAqIHRoaXMuc2l6ZTtcbiAgICAgICAgICAgICAgICBjb25zdCB5Q29vcmRpbmF0ZSA9IHJvdyArIHRoaXMueSAqIHRoaXMuc2l6ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRbcm93XS5wdXNoKG5ldyBDZWxsXzEuQ2VsbCh7XG4gICAgICAgICAgICAgICAgICAgIHg6IHhDb29yZGluYXRlLFxuICAgICAgICAgICAgICAgICAgICB5OiB5Q29vcmRpbmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgY2F2ZTogdGhpcy5zaW1wbGV4Q2F2ZS5ub2lzZTJEKHhDb29yZGluYXRlIC8gMTAwLCB5Q29vcmRpbmF0ZSAvIDEwMCksXG4gICAgICAgICAgICAgICAgICAgIHJpdmVyOiB0aGlzLnNpbXBsZXhSaXZlci5ub2lzZTJEKHhDb29yZGluYXRlIC8gNTAwLCB5Q29vcmRpbmF0ZSAvIDUwMCksXG4gICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiB0aGlzLnNpbXBsZXhUZW1wZXJhdHVyZS5ub2lzZTJEKHhDb29yZGluYXRlIC8gMjUwMCwgeUNvb3JkaW5hdGUgLyAyNTAwKSxcbiAgICAgICAgICAgICAgICAgICAgaHVtaWRpdHk6IHRoaXMuc2ltcGxleEh1bWlkaXR5Lm5vaXNlMkQoeENvb3JkaW5hdGUgLyAyNTAwLCB5Q29vcmRpbmF0ZSAvIDI1MDApLFxuICAgICAgICAgICAgICAgICAgICBjaHVuazogdGhpc1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuQ2h1bmsgPSBDaHVuaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyaDFibXN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDIxdlpHVnNjeTlEYUhWdWF5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTeHZSa0ZCYTBRN1FVRkRiRVFzTUVOQlFYZERPMEZCUTNoRExHbERRVUU0UWp0QlFWRTVRaXhOUVVGaExFdEJRVXM3U1VGelJXUXNXVUZCV1N4TlFVRXlRanRSUVM5RWFFTXNUVUZCUXl4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVZGa0xFMUJRVU1zUjBGQlZ5eERRVUZETEVOQlFVTTdVVUZSWkN4VFFVRkpMRWRCUVZrc1JVRkJSU3hEUVVGRE8xRkJVMmhDTEZOQlFVa3NSMEZCWVN4RlFVRkZMRU5CUVVNN1VVRlRjRUlzWjBKQlFWY3NSMEZCY1VJc1NVRkJTU3cwUWtGQlowSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVZONFJDeHBRa0ZCV1N4SFFVRnhRaXhKUVVGSkxEUkNRVUZuUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJVM3BFTEhWQ1FVRnJRaXhIUVVGeFFpeEpRVUZKTERSQ1FVRm5RaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlV5OUVMRzlDUVVGbExFZEJRWEZDTEVsQlFVa3NORUpCUVdkQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZIYkVVc1dVRkJTeXhEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTndRaXhKUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTTdTVUZEZUVJc1EwRkJRenRKUVZGVExGbEJRVms3VVVGRGJFSXNTMEZCU3l4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZaTEVsQlFVa3NRMEZCUXl4SlFVRkxMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVU3V1VGRGFFUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdaMEpCUTJwQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8yRkJRM1JDTzFsQlEwUXNTMEZCU3l4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZaTEVsQlFVa3NRMEZCUXl4SlFVRkxMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVU3WjBKQlEyaEVMRTFCUVUwc1YwRkJWeXhIUVVGSExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRlhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU03WjBKQlEzSkVMRTFCUVUwc1YwRkJWeXhIUVVGSExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRlhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU03WjBKQlJYSkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVTm1MRWxCUVVrc1YwRkJTU3hEUVVGRE8yOUNRVU5NTEVOQlFVTXNSVUZCUlN4WFFVRlhPMjlDUVVOa0xFTkJRVU1zUlVGQlJTeFhRVUZYTzI5Q1FVTmtMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRWRCUVVjc1IwRkJSeXhGUVVGRkxGZEJRVmNzUjBGQlJ5eEhRVUZITEVOQlFVTTdiMEpCUTNCRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFZEJRVWNzUjBGQlJ5eEZRVUZGTEZkQlFWY3NSMEZCUnl4SFFVRkhMRU5CUVVNN2IwSkJRM1JGTEZkQlFWY3NSVUZCUlN4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFVkJRVVVzVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXp0dlFrRkRjRVlzVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUjBGQlJ5eEpRVUZKTEVWQlFVVXNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJRenR2UWtGRE9VVXNTMEZCU3l4RlFVRkZMRWxCUVVrN2FVSkJRMlFzUTBGQlF5eERRVU5NTEVOQlFVTTdZVUZEVER0VFFVTktPMGxCUTB3c1EwRkJRenREUVVOS08wRkJlRWRFTEhOQ1FYZEhReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBCRE9Db25maWdGYWN0b3J5KGN0b3IpIHtcbiAgICBjbGFzcyBCRE9Db25maWcgZXh0ZW5kcyBjdG9yIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXMgPSBbXCIvOm5hbWVcIl07XG4gICAgICAgICAgICB0aGlzLmpzb25Pbmx5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gQkRPQ29uZmlnO1xufVxuZXhwb3J0cy5CRE9Db25maWdGYWN0b3J5ID0gQkRPQ29uZmlnRmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBRMjl1Wm1sbkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXliM1YwWlhNdlFrUlBRMjl1Wm1sbkxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCVTBFc1UwRkJaMElzWjBKQlFXZENMRU5CUVhORExFbEJRVmM3U1VGVk4wVXNUVUZCWlN4VFFVRlZMRk5CUVZFc1NVRkJTVHRSUVVGeVF6czdXVUZQVnl4WFFVRk5MRWRCUVdFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVTh6UWl4aFFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRemxDTEVOQlFVTTdTMEZCUVR0SlFVVkVMRTlCUVU4c1UwRkJVeXhEUVVGRE8wRkJRM0pDTEVOQlFVTTdRVUUxUWtRc05FTkJORUpESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gQkRPR2FtZUxvYmJ5RmFjdG9yeShjdG9yKSB7XG4gICAgY2xhc3MgQkRPR2FtZUxvYmJ5IGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyTmFtZVNwYWNlID0gJy8nO1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVN0cmluZyA9IHJlcXVpcmUoJ35iZG8vdmlld3MvZ2FtZUxvYmJ5Lm5qaycpO1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvaGE6ICdPT09PT0hBQUFBQUFBQSEhISdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQkRPR2FtZUxvYmJ5LmF0dGFjaFRvU2VydmVycyA9IFtcIkdhbWVTZXJ2ZXJcIl07XG4gICAgcmV0dXJuIEJET0dhbWVMb2JieTtcbn1cbmV4cG9ydHMuQkRPR2FtZUxvYmJ5RmFjdG9yeSA9IEJET0dhbWVMb2JieUZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQUjJGdFpVeHZZbUo1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5eWIzVjBaWE12UWtSUFIyRnRaVXh2WW1KNUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCVlVFc1UwRkJaMElzYlVKQlFXMUNMRU5CUVhORExFbEJRVmM3U1VGVGFFWXNUVUZCWlN4WlFVRmhMRk5CUVZFc1NVRkJTVHRSUVVGNFF6czdXVUZuUWxjc2IwSkJRV1VzUjBGQlJ5eEhRVUZITEVOQlFVTTdXVUZSYmtJc2JVSkJRV01zUjBGQllTeFBRVUZQTEVOQlFVTXNNRUpCUVRCQ0xFTkJRVU1zUTBGQlF6dFJRV00zUlN4RFFVRkRPMUZCVEdFc1MwRkJTeXhEUVVGRExHTkJRV003V1VGRE1VSXNUMEZCVHp0blFrRkRTQ3hIUVVGSExFVkJRVVVzYlVKQlFXMUNPMkZCUXpOQ0xFTkJRVU03VVVGRFRpeERRVUZET3p0SlFUVkNZU3cwUWtGQlpTeEhRVUZoTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1NVRXJRamRFTEU5QlFVOHNXVUZCV1N4RFFVRkRPMEZCUTNoQ0xFTkJRVU03UVVGc1JFUXNhMFJCYTBSREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIEJET0hvbWVGYWN0b3J5KGN0b3IpIHtcbiAgICBjbGFzcyBCRE9Ib21lIGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyTmFtZVNwYWNlID0gJy8nO1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVN0cmluZyA9IHJlcXVpcmUoJ35iZG8vdmlld3MvaG9tZS5uamsnKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyB0ZW1wbGF0ZVBhcmFtcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb2hhOiAnZW5kbGljaCB6dSBIYXVzZSA9KSdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQkRPSG9tZS5hdHRhY2hUb1NlcnZlcnMgPSBbXCJXZWJTZXJ2ZXJcIl07XG4gICAgcmV0dXJuIEJET0hvbWU7XG59XG5leHBvcnRzLkJET0hvbWVGYWN0b3J5ID0gQkRPSG9tZUZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQU0c5dFpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZjbTkxZEdWekwwSkVUMGh2YldVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZWUVN4VFFVRm5RaXhqUVVGakxFTkJRWE5ETEVsQlFWYzdTVUZUTTBVc1RVRkJaU3hQUVVGUkxGTkJRVkVzU1VGQlNUdFJRVUZ1UXpzN1dVRm5RbGNzYjBKQlFXVXNSMEZCUnl4SFFVRkhMRU5CUVVNN1dVRlJia0lzYlVKQlFXTXNSMEZCWVN4UFFVRlBMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNRMEZCUXp0UlFXTjRSU3hEUVVGRE8xRkJUR0VzUzBGQlN5eERRVUZETEdOQlFXTTdXVUZETVVJc1QwRkJUenRuUWtGRFNDeEhRVUZITEVWQlFVVXNjVUpCUVhGQ08yRkJRemRDTEVOQlFVTTdVVUZEVGl4RFFVRkRPenRKUVRWQ1lTeDFRa0ZCWlN4SFFVRmhMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03U1VFclFqVkVMRTlCUVU4c1QwRkJUeXhEUVVGRE8wRkJRMjVDTEVOQlFVTTdRVUZzUkVRc2QwTkJhMFJESW4wPSIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL3NvdXJjZS9hcHAvdXRpbHMgc3luYyByZWN1cnNpdmVcIjsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCJyZWZsZWN0LW1ldGFkYXRhXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IGVudmlyb25tZW50XzEgPSByZXF1aXJlKFwifmJkby91dGlscy9lbnZpcm9ubWVudFwiKTtcbmNvbnN0IEJpbmRpbmdfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CaW5kaW5nXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgZnJhbWV3b3JrXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9mcmFtZXdvcmtcIik7XG5jb25zdCB0eXBlX2dyYXBocWxfMSA9IHJlcXVpcmUoXCJ0eXBlLWdyYXBocWxcIik7XG5mdW5jdGlvbiB3YXRjaGVkKHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICAgICAgZnJhbWV3b3JrXzEuYmVmb3JlUHJvcGVydHlEZXNjcmlwdG9ycyh0YXJnZXQsIHN0cmluZ0tleSwgXCJkZWZpbmVkV2F0Y2hlcnNcIik7XG4gICAgICAgIGZyYW1ld29ya18xLmNyZWF0ZURlY29yYXRvckRlc2NyaXB0b3IodGFyZ2V0LCBzdHJpbmdLZXksIFwiV2F0Y2hlZFwiLCBwYXJhbXMpO1xuICAgIH07XG59XG5leHBvcnRzLndhdGNoZWQgPSB3YXRjaGVkO1xuZnVuY3Rpb24gcHJvcGVydHkocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IGtleS50b1N0cmluZygpO1xuICAgICAgICBmcmFtZXdvcmtfMS5iZWZvcmVQcm9wZXJ0eURlc2NyaXB0b3JzKHRhcmdldCwgc3RyaW5nS2V5LCBcImRlZmluZWRQcm9wZXJ0aWVzXCIpO1xuICAgICAgICBmcmFtZXdvcmtfMS5jcmVhdGVEZWNvcmF0b3JEZXNjcmlwdG9yKHRhcmdldCwgc3RyaW5nS2V5LCBcIlByb3BlcnR5XCIsIHBhcmFtcyk7XG4gICAgfTtcbn1cbmV4cG9ydHMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbmZ1bmN0aW9uIGF0dHJpYnV0ZSh0eXBlRnVuYywgcGFyYW1zKSB7XG4gICAgcmV0dXJuICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKHR5cGVGdW5jICYmICEodHlwZUZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbikgJiYgIXBhcmFtcylcbiAgICAgICAgICAgIHBhcmFtcyA9IHR5cGVGdW5jO1xuICAgICAgICBpZiAoIXBhcmFtcylcbiAgICAgICAgICAgIHBhcmFtcyA9IHt9O1xuICAgICAgICBpZiAodHlwZUZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBwYXJhbXMpXG4gICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5GaWVsZCh0eXBlRnVuYywgcGFyYW1zKSh0YXJnZXQsIGtleSk7XG4gICAgICAgIGVsc2UgaWYgKHR5cGVGdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pXG4gICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5GaWVsZCh0eXBlRnVuYykodGFyZ2V0LCBrZXkpO1xuICAgICAgICBlbHNlIGlmIChwYXJhbXMpXG4gICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5GaWVsZChwYXJhbXMpKHRhcmdldCwga2V5KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuRmllbGQoKSh0YXJnZXQsIGtleSk7XG4gICAgICAgIGZyYW1ld29ya18xLmJlZm9yZVByb3BlcnR5RGVzY3JpcHRvcnModGFyZ2V0LCBzdHJpbmdLZXksIFwiZGVmaW5lZEF0dHJpYnV0ZXNcIik7XG4gICAgICAgIGZyYW1ld29ya18xLmNyZWF0ZURlY29yYXRvckRlc2NyaXB0b3IodGFyZ2V0LCBzdHJpbmdLZXksIFwiQXR0cmlidXRlXCIsIHBhcmFtcyk7XG4gICAgfTtcbn1cbmV4cG9ydHMuYXR0cmlidXRlID0gYXR0cmlidXRlO1xuZnVuY3Rpb24gYmFzZUNvbnN0cnVjdG9yKG5hbWUsIG9wdGlvbnMsIGNvbnN0UGFyYW1zSW5kZXggPSAwKSB7XG4gICAgcmV0dXJuIChjdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihjdG9yKTtcbiAgICAgICAgaWYgKHByb3RvdHlwZS5uYW1lID09PSBcIkJhc2VDb25zdHJ1Y3RvclwiKSB7XG4gICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY3RvciwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuYW1lICYmICh0eXBlb2YgbmFtZSA9PT0gXCJudW1iZXJcIikpXG4gICAgICAgICAgICBjb25zdFBhcmFtc0luZGV4ID0gbmFtZTtcbiAgICAgICAgaWYgKG5hbWUgJiYgKHR5cGVvZiBuYW1lID09PSBcIm9iamVjdFwiKSlcbiAgICAgICAgICAgIG9wdGlvbnMgPSBuYW1lO1xuICAgICAgICBpZiAobmFtZSAmJiAoKHR5cGVvZiBuYW1lID09PSBcIm9iamVjdFwiKSB8fCAodHlwZW9mIG5hbWUgPT09IFwibnVtYmVyXCIpKSlcbiAgICAgICAgICAgIG5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChvcHRpb25zICYmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJudW1iZXJcIikpXG4gICAgICAgICAgICBjb25zdFBhcmFtc0luZGV4ID0gb3B0aW9ucztcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgKHR5cGVvZiBvcHRpb25zID09PSBcIm51bWJlclwiKSlcbiAgICAgICAgICAgIG9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChcImlzQkRPTW9kZWxcIiBpbiBjdG9yKSB7XG4gICAgICAgICAgICBpZiAobmFtZSAmJiAodHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIpICYmIG9wdGlvbnMgJiYgKHR5cGVvZiBvcHRpb25zID09PSBcIm9iamVjdFwiKSkge1xuICAgICAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLk9iamVjdFR5cGUobmFtZSwgb3B0aW9ucykoY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuYW1lICYmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5PYmplY3RUeXBlKG5hbWUpKGN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucyAmJiAodHlwZW9mIG9wdGlvbnMgPT09IFwib2JqZWN0XCIpKSB7XG4gICAgICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuT2JqZWN0VHlwZShvcHRpb25zKShjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5PYmplY3RUeXBlKCkoY3Rvcik7XG4gICAgICAgICAgICBpZiAob3B0aW9ucyAmJiAodHlwZW9mIG9wdGlvbnMgPT09IFwib2JqZWN0XCIpICYmIG9wdGlvbnMuY29sbGVjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKGN0b3IsIFwiY29sbGVjdGlvbk5hbWVcIiwgb3B0aW9ucy5jb2xsZWN0aW9uTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgKHR5cGVvZiBvcHRpb25zID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaXNBYnN0cmFjdCkpXG4gICAgICAgICAgICByZXR1cm4gY3RvcjtcbiAgICAgICAgY2xhc3MgQmFzZUNvbnN0cnVjdG9yIGV4dGVuZHMgY3RvciB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvciguLi5wYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBzdXBlciguLi5wYXJhbXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbk5hbWUgPSBCYXNlQ29uc3RydWN0b3IuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnN0UGFyYW1zID0gcGFyYW1zW2NvbnN0UGFyYW1zSW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmICghKGNvbnN0UGFyYW1zIGluc3RhbmNlb2YgT2JqZWN0KSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3RQYXJhbXMgPSB7fTtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMsIFwibm9ybWFsRnVuY3Rpb25hbGl0eVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdFNldHRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLCBcImRlZmF1bHRTZXR0aW5nc1wiKSB8fCB7fTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0U2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRTZXR0aW5ncywgY29uc3RQYXJhbXMpO1xuICAgICAgICAgICAgICAgIGlmICh1dGlsXzEuaXNGdW5jdGlvbih0aGlzLmdldE5hbWVzcGFjZWRTdG9yYWdlKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGNvbnN0UGFyYW1zLmlkIHx8IGRlZmF1bHRTZXR0aW5ncy5pZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FjaGVkU2V0dGluZ3MgPSB0aGlzLmdldE5hbWVzcGFjZWRTdG9yYWdlKFwiKlwiLCBcImlkXCIsIGlkKSB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY2FjaGVkU2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWNoZWRTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRlZmF1bHRTZXR0aW5nc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQmluZGluZ18xLkJpbmRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRWYWx1ZShjYWNoZWRTZXR0aW5nc1trZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U2V0dGluZ3Nba2V5XSA9IGNhY2hlZFNldHRpbmdzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZWZhdWx0U2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcywgXCJjb25zdHJ1Y3Rpb25Db21wbGV0ZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAodXRpbF8xLmlzRnVuY3Rpb24odGhpcy5jb25zdHJ1Y3RlZENhbGxiYWNrKSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3RlZENhbGxiYWNrKC4uLnBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQmFzZUNvbnN0cnVjdG9yLmNsYXNzTmFtZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihCYXNlQ29uc3RydWN0b3IpLm5hbWU7XG4gICAgICAgIEJhc2VDb25zdHJ1Y3Rvci5ncmFwaFFMVHlwZSA9IGN0b3I7XG4gICAgICAgIEJhc2VDb25zdHJ1Y3Rvci5jb2xsZWN0aW9uTmFtZSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoQmFzZUNvbnN0cnVjdG9yLCBcImNvbGxlY3Rpb25OYW1lXCIpO1xuICAgICAgICBpZiAoZW52aXJvbm1lbnRfMS5pc0Jyb3dzZXIoKSAmJiBjdG9yLmlzQmFzZUNvbXBvbmVudCkge1xuICAgICAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHV0aWxfMS5wYXNjYWxDYXNlMmtlYmFiQ2FzZShjdG9yLm5hbWUpLCBCYXNlQ29uc3RydWN0b3IsIHtcbiAgICAgICAgICAgICAgICBleHRlbmRzOiBCYXNlQ29uc3RydWN0b3IuZXh0ZW5kc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEJhc2VDb25zdHJ1Y3RvcjtcbiAgICB9O1xufVxuZXhwb3J0cy5iYXNlQ29uc3RydWN0b3IgPSBiYXNlQ29uc3RydWN0b3I7XG5leHBvcnRzLnF1ZXJ5ID0gdHlwZV9ncmFwaHFsXzEuUXVlcnk7XG5leHBvcnRzLmFyZyA9IHR5cGVfZ3JhcGhxbF8xLkFyZztcbmV4cG9ydHMuYXJncyA9IHR5cGVfZ3JhcGhxbF8xLkFyZ3M7XG5leHBvcnRzLnJlc29sdmVyID0gdHlwZV9ncmFwaHFsXzEuUmVzb2x2ZXI7XG5leHBvcnRzLnJvb3QgPSB0eXBlX2dyYXBocWxfMS5Sb290O1xuZXhwb3J0cy5tdXRhdGlvbiA9IHR5cGVfZ3JhcGhxbF8xLk11dGF0aW9uO1xuZXhwb3J0cy5zdWJzY3JpcHRpb24gPSB0eXBlX2dyYXBocWxfMS5TdWJzY3JpcHRpb247XG5leHBvcnRzLnB1YlN1YiA9IHR5cGVfZ3JhcGhxbF8xLlB1YlN1YjtcbmV4cG9ydHMuaW5wdXRUeXBlID0gdHlwZV9ncmFwaHFsXzEuSW5wdXRUeXBlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWkdWamIzSmhkRzl5Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmRYUnBiSE12WkdWamIzSmhkRzl5Y3k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTERSQ1FVRXdRanRCUVVNeFFpd3dRMEZCYlVVN1FVRkRia1VzZDBSQlFXMUVPMEZCU1c1RUxEaERRVUV5UXp0QlFVTXpReXhyUkVGQmEwVTdRVUZEYkVVc2IwUkJRVFJHTzBGQlJ6VkdMQ3REUVZselFqdEJRVEpDZEVJc1UwRkJaMElzVDBGQlR5eERRVUZETEZOQlFYbENMRVZCUVVVN1NVRkRMME1zVDBGQlR5eERRVUZETEUxQlFWY3NSVUZCUlN4SFFVRnZRaXhGUVVGRkxFVkJRVVU3VVVGRGVrTXNUVUZCVFN4VFFVRlRMRWRCUVVjc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlEycERMSEZEUVVGNVFpeERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc2FVSkJRV2xDTEVOQlFVTXNRMEZCUXp0UlFVTm9SU3h4UTBGQmVVSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1UwRkJVeXhGUVVGRkxGTkJRVk1zUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVTndSU3hEUVVGRExFTkJRVU03UVVGRFRpeERRVUZETzBGQlRrUXNNRUpCVFVNN1FVRlZSQ3hUUVVGblFpeFJRVUZSTEVOQlFVTXNVMEZCTUVJc1JVRkJSVHRKUVVOcVJDeFBRVUZQTEVOQlFVTXNUVUZCVnl4RlFVRkZMRWRCUVc5Q0xFVkJRVVVzUlVGQlJUdFJRVU42UXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZEYWtNc2NVTkJRWGxDTEVOQlFVTXNUVUZCVFN4RlFVRkZMRk5CUVZNc1JVRkJSU3h0UWtGQmJVSXNRMEZCUXl4RFFVRkRPMUZCUTJ4RkxIRkRRVUY1UWl4RFFVRkRMRTFCUVUwc1JVRkJSU3hUUVVGVExFVkJRVVVzVlVGQlZTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUTNKRkxFTkJRVU1zUTBGQlF6dEJRVU5PTEVOQlFVTTdRVUZPUkN3MFFrRk5RenRCUVdWRUxGTkJRV2RDTEZOQlFWTXNRMEZCUXl4UlFVRXlRaXhGUVVGRkxFMUJRWGxDTzBsQlF6VkZMRTlCUVU4c1EwRkJReXhOUVVGWExFVkJRVVVzUjBGQmIwSXNSVUZCUlN4RlFVRkZPMUZCUTNwRExFMUJRVTBzVTBGQlV5eEhRVUZITEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVOcVF5eEpRVUZKTEZGQlFWRXNTVUZCU1N4RFFVRkRMRU5CUVVNc1VVRkJVU3haUVVGWkxGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFR0WlFVRkZMRTFCUVUwc1IwRkJSeXhSUVVGUkxFTkJRVU03VVVGRE9VVXNTVUZCU1N4RFFVRkRMRTFCUVUwN1dVRkJSU3hOUVVGTkxFZEJRVWNzUlVGQlJTeERRVUZETzFGQlIzcENMRWxCUVVrc1VVRkJVU3haUVVGWkxGRkJRVkVzU1VGQlNTeE5RVUZOTzFsQlFVVXNiMEpCUVVzc1EwRkJReXhSUVVGUkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJRelZGTEVsQlFVa3NVVUZCVVN4WlFVRlpMRkZCUVZFN1dVRkJSU3h2UWtGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dGhRVU12UkN4SlFVRkpMRTFCUVUwN1dVRkJSU3h2UWtGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6czdXVUZEZGtNc2IwSkJRVXNzUlVGQlJTeERRVUZETEUxQlFVMHNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNeFFpeHhRMEZCZVVJc1EwRkJReXhOUVVGTkxFVkJRVVVzVTBGQlV5eEZRVUZGTEcxQ1FVRnRRaXhEUVVGRExFTkJRVU03VVVGRGJFVXNjVU5CUVhsQ0xFTkJRVU1zVFVGQlRTeEZRVUZGTEZOQlFWTXNSVUZCUlN4WFFVRlhMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGRFVXNRMEZCUXl4RFFVRkRPMEZCUTA0c1EwRkJRenRCUVdSRUxEaENRV05ETzBGQlZVUXNVMEZCWjBJc1pVRkJaU3hEUVVGRExFbEJRWGRDTEVWQlFVVXNUMEZCY1VJc1JVRkJSU3h0UWtGQk1rSXNRMEZCUXp0SlFVVjZSeXhQUVVGUExFTkJRVU1zU1VGQlV5eEZRVUZGTEVWQlFVVTdVVUZEYWtJc1RVRkJUU3hUUVVGVExFZEJRVWNzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNNVF5eEpRVUZKTEZOQlFWTXNRMEZCUXl4SlFVRkpMRXRCUVVzc2FVSkJRV2xDTEVWQlFVVTdXVUZEZEVNc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEycEZPMUZCUjBRc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVsQlFVa3NTMEZCU3l4UlFVRlJMRU5CUVVNN1dVRkJSU3huUWtGQlowSXNSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRhRVVzU1VGQlNTeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWxCUVVrc1MwRkJTeXhSUVVGUkxFTkJRVU03V1VGQlJTeFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTNaRUxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4UFFVRlBMRWxCUVVrc1MwRkJTeXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNTVUZCU1N4TFFVRkxMRkZCUVZFc1EwRkJReXhEUVVGRE8xbEJRVVVzU1VGQlNTeEhRVUZITEZOQlFWTXNRMEZCUXp0UlFVTjZSaXhKUVVGSkxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNUMEZCVHl4TFFVRkxMRkZCUVZFc1EwRkJRenRaUVVGRkxHZENRVUZuUWl4SFFVRkhMRTlCUVU4c1EwRkJRenRSUVVONlJTeEpRVUZKTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1QwRkJUeXhMUVVGTExGRkJRVkVzUTBGQlF6dFpRVUZGTEU5QlFVOHNSMEZCUnl4VFFVRlRMRU5CUVVNN1VVRkZiRVVzU1VGQlNTeFpRVUZaTEVsQlFVa3NTVUZCU1N4RlFVRkZPMWxCUlhSQ0xFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4SlFVRkpMRXRCUVVzc1VVRkJVU3hEUVVGRExFbEJRVWtzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4UFFVRlBMRXRCUVVzc1VVRkJVU3hEUVVGRExFVkJRVVU3WjBKQlEyaEdMSGxDUVVGVkxFTkJRVU1zU1VGQlNTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yRkJRMjVETzJsQ1FVRk5MRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEpRVUZKTEV0QlFVc3NVVUZCVVN4RFFVRkRMRVZCUVVVN1owSkJRek5ETEhsQ1FVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdZVUZETVVJN2FVSkJRVTBzU1VGQlNTeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRTlCUVU4c1MwRkJTeXhSUVVGUkxFTkJRVU1zUlVGQlJUdG5Ra0ZEYWtRc2VVSkJRVlVzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRoUVVNM1FqczdaMEpCUVUwc2VVSkJRVlVzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUlRGQ0xFbEJRVWtzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4UFFVRlBMRXRCUVVzc1VVRkJVU3hEUVVGRExFbEJRVWtzVDBGQlR5eERRVUZETEdOQlFXTXNSVUZCUlR0blFrRkRjRVVzZVVKQlFXTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1owSkJRV2RDTEVWQlFVVXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRE8yRkJRMnhGTzFOQlEwbzdVVUZGUkN4SlFVRkpMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzVDBGQlR5eExRVUZMTEZGQlFWRXNTVUZCU1N4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRE8xbEJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTTdVVUZSYUVZc1RVRkJUU3hsUVVGblFpeFRRVUZSTEVsQlFVazdXVUZ4UXpsQ0xGbEJRVmtzUjBGQlJ5eE5RVUZoTzJkQ1FVTjRRaXhMUVVGTExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXp0blFrRklUQ3h0UWtGQll5eEhRVUZaTEdWQlFXVXNRMEZCUXl4alFVRmpMRU5CUVVNN1owSkJTWEpGTEVsQlFVa3NWMEZCVnl4SFFVRkhMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RFFVRkRPMmRDUVVNelF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4WFFVRlhMRmxCUVZrc1RVRkJUU3hEUVVGRE8yOUNRVUZGTEZkQlFWY3NSMEZCUnl4RlFVRkZMRU5CUVVNN1owSkJRM1pFTEhsQ1FVRmpMRU5CUVVNc1NVRkJTU3hGUVVGRkxIRkNRVUZ4UWl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU5zUkN4SlFVRkpMR1ZCUVdVc1IwRkJhVU1zYzBKQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1owSkJReTlHTEdWQlFXVXNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExHVkJRV1VzUlVGQlJTeFhRVUZYTEVOQlFVTXNRMEZCUXp0blFrRkRPVVFzU1VGQlNTeHBRa0ZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4RlFVRkZPMjlDUVVOMlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4WFFVRlhMRU5CUVVNc1JVRkJSU3hKUVVGSkxHVkJRV1VzUTBGQlF5eEZRVUZGTEVOQlFVTTdiMEpCUTJoRUxFMUJRVTBzWTBGQll5eEhRVUZITEVsQlFVa3NRMEZCUXl4dlFrRkJiMElzUTBGQlF5eEhRVUZITEVWQlFVVXNTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dHZRa0ZEZEVVc1MwRkJTeXhOUVVGTkxFZEJRVWNzU1VGQlNTeGpRVUZqTEVWQlFVVTdkMEpCUXpsQ0xFbEJRVWtzWTBGQll5eERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHMwUWtGRGNFTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1pVRkJaU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZET3pSQ1FVTnlReXhKUVVGSkxFOUJRVThzV1VGQldTeHBRa0ZCVHl4RlFVRkZPMmREUVVNMVFpeFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZET3paQ1FVTjZRenM3WjBOQlFVMHNaVUZCWlN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0NVFrRkRja1E3Y1VKQlEwbzdhVUpCUTBvN1owSkJRMFFzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1pVRkJaU3hEUVVGRExFTkJRVU03WjBKQlEzSkRMSGxDUVVGakxFTkJRVU1zU1VGQlNTeEZRVUZGTEhOQ1FVRnpRaXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTnVSQ3hKUVVGSkxHbENRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETzI5Q1FVRlJMRWxCUVVzc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRE8xbEJRM3BHTEVOQlFVTTdPMUZCYmtSelFpeDVRa0ZCVXl4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMUZCVlhoRUxESkNRVUZYTEVkQlFWRXNTVUZCU1N4RFFVRkRPMUZCVTNoQ0xEaENRVUZqTEVkQlFWa3NjMEpCUVZjc1EwRkJReXhsUVVGbExFVkJRVVVzWjBKQlFXZENMRU5CUVVNc1EwRkJRenRSUVc5RGNFY3NTVUZCU1N4MVFrRkJVeXhGUVVGRkxFbEJRVWtzU1VGQlNTeERRVUZETEdWQlFXVXNSVUZCUlR0WlFVTnlReXhqUVVGakxFTkJRVU1zVFVGQlRTeERRVUZETERKQ1FVRnZRaXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4bFFVRmxMRVZCUVVVN1owSkJRM0JGTEU5QlFVOHNSVUZCUlN4bFFVRmxMRU5CUVVNc1QwRkJUenRoUVVOdVF5eERRVUZETEVOQlFVTTdVMEZEVGp0UlFVTkVMRTlCUVU4c1pVRkJaU3hEUVVGRE8wbEJRek5DTEVOQlFVTXNRMEZCUXp0QlFVTk9MRU5CUVVNN1FVRTFSMFFzTUVOQk5FZERPMEZCUlZVc1VVRkJRU3hMUVVGTExFZEJRVWNzYjBKQlFVc3NRMEZCUXp0QlFVTmtMRkZCUVVFc1IwRkJSeXhIUVVGSExHdENRVUZITEVOQlFVTTdRVUZEVml4UlFVRkJMRWxCUVVrc1IwRkJSeXh0UWtGQlNTeERRVUZETzBGQlExb3NVVUZCUVN4UlFVRlJMRWRCUVVjc2RVSkJRVkVzUTBGQlF6dEJRVU53UWl4UlFVRkJMRWxCUVVrc1IwRkJSeXh0UWtGQlNTeERRVUZETzBGQlExb3NVVUZCUVN4UlFVRlJMRWRCUVVjc2RVSkJRVkVzUTBGQlF6dEJRVU53UWl4UlFVRkJMRmxCUVZrc1IwRkJSeXd5UWtGQldTeERRVUZETzBGQlF6VkNMRkZCUVVFc1RVRkJUU3hIUVVGSExIRkNRVUZOTEVOQlFVTTdRVUZEYUVJc1VVRkJRU3hUUVVGVExFZEJRVWNzZDBKQlFWTXNRMEZCUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IG51bmp1Y2tzID0gdHNsaWJfMS5fX2ltcG9ydFN0YXIocmVxdWlyZShcIm51bmp1Y2tzXCIpKTtcbmZ1bmN0aW9uIGlzTm9kZUpTKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaXNOb2RlSlMgPSBpc05vZGVKUztcbmZ1bmN0aW9uIGlzQnJvd3NlcigpIHtcbiAgICByZXR1cm4gIWlzTm9kZUpTKCk7XG59XG5leHBvcnRzLmlzQnJvd3NlciA9IGlzQnJvd3NlcjtcbmV4cG9ydHMudGVtcGxhdGVFbnZpcm9ubWVudCA9ICgoKSA9PiB7XG4gICAgY29uc3Qgbm9DYWNoZSA9IGdsb2JhbC5wcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zdCBlbnYgPSBuZXcgbnVuanVja3MuRW52aXJvbm1lbnQoe1xuICAgICAgICBnZXRTb3VyY2U6IChwYXRoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyBzcmM6IHJlcXVpcmUocGF0aCksIHBhdGgsIG5vQ2FjaGUgfTtcbiAgICAgICAgfVxuICAgIH0sIHsgbm9DYWNoZSB9KTtcbiAgICBlbnYuYWRkRmlsdGVyKCdqc29uJywgKHZhbHVlLCBzcGFjZXMpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgbnVuanVja3MucnVudGltZS5TYWZlU3RyaW5nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBudW5qdWNrcy5ydW50aW1lLlNhZmVTdHJpbmcoSlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIHNwYWNlcykpO1xuICAgIH0pO1xuICAgIHJldHVybiBlbnY7XG59KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWlc1MmFYSnZibTFsYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wzVjBhV3h6TDJWdWRtbHliMjV0Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxESkVRVUZ4UXp0QlFWRnlReXhUUVVGblFpeFJRVUZSTzBsQlEzQkNMRWxCUVVrc1QwRkJUeXhOUVVGTkxFdEJRVXNzVjBGQlZ5eEpRVUZKTEU5QlFVOHNUMEZCVHl4TFFVRkxMRkZCUVZFc1JVRkJSVHRSUVVNNVJDeFBRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTm1PMGxCUTBRc1QwRkJUeXhMUVVGTExFTkJRVU03UVVGRGFrSXNRMEZCUXp0QlFVeEVMRFJDUVV0RE8wRkJVVVFzVTBGQlowSXNVMEZCVXp0SlFVTnlRaXhQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdRVUZEZGtJc1EwRkJRenRCUVVaRUxEaENRVVZETzBGQlMxa3NVVUZCUVN4dFFrRkJiVUlzUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlR0SlFVTnlReXhOUVVGTkxFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFdEJRVXNzWVVGQllTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU0zUlN4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZEYWtNc1UwRkJVeXhGUVVGRkxFTkJRVU1zU1VGQldTeEZRVUZGTEVWQlFVVTdXVUZEZUVJc1QwRkJUeXhGUVVGRkxFZEJRVWNzUlVGQlJTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFOUJRVThzUlVGQlJTeERRVUZETzFGQlEycEVMRU5CUVVNN1MwRkRTaXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVVm9RaXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJUdFJRVU53UXl4SlFVRkpMRXRCUVVzc1dVRkJXU3hSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNSVUZCUlR0WlFVTTVReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMU5CUXpWQ08xRkJRMFFzVDBGQlR5eEpRVUZKTEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEyaEdMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMGdzVDBGQlR5eEhRVUZITEVOQlFVTTdRVUZEWml4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJpbmRpbmdfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CaW5kaW5nXCIpO1xuY29uc3QgQXR0cmlidXRlXzEgPSByZXF1aXJlKFwifmJkby9saWIvQXR0cmlidXRlXCIpO1xuY29uc3QgUHJvcGVydHlfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Qcm9wZXJ0eVwiKTtcbmNvbnN0IFdhdGNoZWRfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9XYXRjaGVkXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuZnVuY3Rpb24gYmVmb3JlUHJvcGVydHlEZXNjcmlwdG9ycyh0YXJnZXQsIGtleSwgbURhdGFOYW1lKSB7XG4gICAgaWYgKCFSZWZsZWN0Lmhhc01ldGFkYXRhKG1EYXRhTmFtZSwgdGFyZ2V0KSlcbiAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YSh0YXJnZXQsIG1EYXRhTmFtZSwgbmV3IEFycmF5KCkpO1xuICAgIGNvbnN0IG1hcCA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGFyZ2V0LCBtRGF0YU5hbWUpO1xuICAgIG1hcC5wdXNoKGtleS50b1N0cmluZygpKTtcbn1cbmV4cG9ydHMuYmVmb3JlUHJvcGVydHlEZXNjcmlwdG9ycyA9IGJlZm9yZVByb3BlcnR5RGVzY3JpcHRvcnM7XG5mdW5jdGlvbiBnZXR0ZXIoaW5zdGFuY2UsIGtleSwgbnMgPSBcIlwiKSB7XG4gICAgbGV0IHN0cmluZ0tleSA9IGtleS50b1N0cmluZygpO1xuICAgIGlmIChucylcbiAgICAgICAgc3RyaW5nS2V5ID0gYCR7bnN9OiR7a2V5fWA7XG4gICAgaWYgKCFtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGluc3RhbmNlLCBcIm5vcm1hbEZ1bmN0aW9uYWxpdHlcIikpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShpbnN0YW5jZSwgXCJkZWZhdWx0U2V0dGluZ3NcIikgfHwge307XG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldChkZWZhdWx0U2V0dGluZ3MsIHN0cmluZ0tleSk7XG4gICAgfVxuICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKGluc3RhbmNlLCBzdHJpbmdLZXkpO1xuICAgIGlmIChtRGF0YSlcbiAgICAgICAgcmV0dXJuIG1EYXRhLnZhbHVlT2YoKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZXhwb3J0cy5nZXR0ZXIgPSBnZXR0ZXI7XG5mdW5jdGlvbiBzZXR0ZXIoaW5zdGFuY2UsIGtleSwgbmV3VmFsLCBucyA9IFwiXCIpIHtcbiAgICBsZXQgc3RyaW5nS2V5ID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgaWYgKG5zKVxuICAgICAgICBzdHJpbmdLZXkgPSBgJHtuc306JHtrZXl9YDtcbiAgICBpZiAoIW5zICYmIGluc3RhbmNlW3N0cmluZ0tleV0gPT09IG5ld1ZhbClcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmICghbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShpbnN0YW5jZSwgXCJub3JtYWxGdW5jdGlvbmFsaXR5XCIpKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwiZGVmYXVsdFNldHRpbmdzXCIpIHx8IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKGRlZmF1bHRTZXR0aW5ncywgeyBbc3RyaW5nS2V5XTogbmV3VmFsIH0pO1xuICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKGluc3RhbmNlLCBcImRlZmF1bHRTZXR0aW5nc1wiLCBkZWZhdWx0U2V0dGluZ3MpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKGluc3RhbmNlLCBzdHJpbmdLZXkpO1xuICAgIGlmIChuZXdWYWwgaW5zdGFuY2VvZiBCaW5kaW5nXzEuQmluZGluZykge1xuICAgICAgICBuZXdWYWwuaW5zdGFsbChpbnN0YW5jZSwga2V5KTtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgICBtRGF0YS5zZXRWYWx1ZShuZXdWYWwpO1xufVxuZXhwb3J0cy5zZXR0ZXIgPSBzZXR0ZXI7XG5mdW5jdGlvbiBjcmVhdGVEZWNvcmF0b3JEZXNjcmlwdG9yKHRhcmdldCwga2V5LCB0eXBlLCBwYXJhbXMpIHtcbiAgICBjb25zdCBwcm9wRGVzYyA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICBjb25zdCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KTtcbiAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gZGVjb3JhdG9yR2V0dGVyKCkge1xuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gZ2V0dGVyKHRoYXQsIHN0cmluZ0tleSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gZGVjb3JhdG9yU2V0dGVyKG5ld1ZhbCkge1xuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBtRGF0YSA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLCBrZXkpO1xuICAgICAgICAgICAgbGV0IGZpZWxkO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiQXR0cmlidXRlXCIpIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA9IG5ldyBBdHRyaWJ1dGVfMS5BdHRyaWJ1dGUodGhhdCwgc3RyaW5nS2V5LCBwYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJQcm9wZXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgZmllbGQgPSBuZXcgUHJvcGVydHlfMS5Qcm9wZXJ0eSh0aGF0LCBzdHJpbmdLZXksIHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZmllbGQgPSBuZXcgV2F0Y2hlZF8xLldhdGNoZWQodGhhdCwgc3RyaW5nS2V5LCBwYXJhbXMpO1xuICAgICAgICAgICAgaWYgKG1EYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKChtRGF0YSBpbnN0YW5jZW9mIEF0dHJpYnV0ZV8xLkF0dHJpYnV0ZSB8fCBtRGF0YSBpbnN0YW5jZW9mIFByb3BlcnR5XzEuUHJvcGVydHkpICYmIGZpZWxkIGluc3RhbmNlb2YgV2F0Y2hlZF8xLldhdGNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuc2V0U3ViT2JqZWN0KG1EYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhKHRoaXMsIHN0cmluZ0tleSwgZmllbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgoZmllbGQgaW5zdGFuY2VvZiBQcm9wZXJ0eV8xLlByb3BlcnR5IHx8IGZpZWxkIGluc3RhbmNlb2YgQXR0cmlidXRlXzEuQXR0cmlidXRlKSAmJiBtRGF0YSBpbnN0YW5jZW9mIFdhdGNoZWRfMS5XYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbURhdGEuc3ViT2JqZWN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgbURhdGEuc2V0U3ViT2JqZWN0KGZpZWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhKHRoaXMsIHN0cmluZ0tleSwgZmllbGQpO1xuICAgICAgICAgICAgaWYgKCgodHlwZSA9PT0gXCJBdHRyaWJ1dGVcIiB8fCB0eXBlID09PSBcIlByb3BlcnR5XCIpICYmICEobURhdGEgaW5zdGFuY2VvZiBXYXRjaGVkXzEuV2F0Y2hlZCkpIHx8IHR5cGUgPT09IFwiV2F0Y2hlZFwiKSB7XG4gICAgICAgICAgICAgICAgc2V0dGVyKHRoYXQsIHN0cmluZ0tleSwgbmV3VmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wRGVzYyAmJiBwcm9wRGVzYy5zZXQgJiYgcHJvcERlc2Muc2V0Lm5hbWUgPT09IFwiZGVjb3JhdG9yU2V0dGVyXCIpXG4gICAgICAgICAgICAgICAgcHJvcERlc2Muc2V0LmNhbGwodGhpcywgbmV3VmFsKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG59XG5leHBvcnRzLmNyZWF0ZURlY29yYXRvckRlc2NyaXB0b3IgPSBjcmVhdGVEZWNvcmF0b3JEZXNjcmlwdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWm5KaGJXVjNiM0pyTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5MWRHbHNjeTltY21GdFpYZHZjbXN1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3c0UTBGQk1rTTdRVUZETTBNc2EwUkJRV2xGTzBGQlEycEZMR2RFUVVFNFJEdEJRVU01UkN3NFEwRkJNa1E3UVVGRk0wUXNhMFJCUVN0SE8wRkJhMEl2Unl4VFFVRm5RaXg1UWtGQmVVSXNRMEZCUXl4TlFVRlhMRVZCUVVVc1IwRkJWeXhGUVVGRkxGTkJRWGRDTzBsQlJYaEdMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEZOQlFWTXNSVUZCUlN4TlFVRk5MRU5CUVVNN1VVRkJSU3g1UWtGQll5eERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc1NVRkJTU3hMUVVGTExFVkJRVlVzUTBGQlF5eERRVUZETzBsQlEzQkhMRTFCUVUwc1IwRkJSeXhIUVVGSExITkNRVUZYTEVOQlFVTXNUVUZCVFN4RlFVRkZMRk5CUVZNc1EwRkJZU3hEUVVGRE8wbEJRM1pFTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZETjBJc1EwRkJRenRCUVV4RUxEaEVRVXRETzBGQllVUXNVMEZCWjBJc1RVRkJUU3hEUVVGeFJDeFJRVUZYTEVWQlFVVXNSMEZCVFN4RlFVRkZMRXRCUVdFc1JVRkJSVHRKUVVNelJ5eEpRVUZKTEZOQlFWTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03U1VGREwwSXNTVUZCU1N4RlFVRkZPMUZCUVVVc1UwRkJVeXhIUVVGSExFZEJRVWNzUlVGQlJTeEpRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUTI1RExFbEJRVWtzUTBGQlF5eHpRa0ZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3h4UWtGQmNVSXNRMEZCUXl4RlFVRkZPMUZCUXk5RExFMUJRVTBzWlVGQlpTeEhRVUZITEhOQ1FVRlhMRU5CUVVNc1VVRkJVU3hGUVVGRkxHbENRVUZwUWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRM1pGTEU5QlFVOHNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhsUVVGbExFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdTMEZEYkVRN1NVRkRSQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5dzRRa0ZCYlVJc1EwRkJReXhSUVVGUkxFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdTVUZEZGtRc1NVRkJTU3hMUVVGTE8xRkJRVVVzVDBGQlR5eExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1NVRkRiRU1zVDBGQlR5eFRRVUZUTEVOQlFVTTdRVUZEY2tJc1EwRkJRenRCUVZaRUxIZENRVlZETzBGQlpVUXNVMEZCWjBJc1RVRkJUU3hEUVVWblFpeFJRVUZYTEVWQlFVVXNSMEZCVFN4RlFVRkZMRTFCUVhGQ0xFVkJRVVVzUzBGQllTeEZRVUZGTzBsQlJ6ZEdMRWxCUVVrc1UwRkJVeXhIUVVGSExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTXZRaXhKUVVGSkxFVkJRVVU3VVVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnl4RlFVRkZMRWxCUVVrc1IwRkJSeXhGUVVGRkxFTkJRVU03U1VGSGJrTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1NVRkJTU3hSUVVGUkxFTkJRVWtzVTBGQlV5eERRVUZETEV0QlFVc3NUVUZCVFR0UlFVRkZMRTlCUVU4N1NVRkhja1FzU1VGQlNTeERRVUZETEhOQ1FVRlhMRU5CUVVNc1VVRkJVU3hGUVVGRkxIRkNRVUZ4UWl4RFFVRkRMRVZCUVVVN1VVRkRMME1zVFVGQlRTeGxRVUZsTEVkQlFVY3NjMEpCUVZjc1EwRkJReXhSUVVGUkxFVkJRVVVzYVVKQlFXbENMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRGRrVXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhsUVVGbExFVkJRVVVzUlVGQlJTeERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGVFUXNlVUpCUVdNc1EwRkJReXhSUVVGUkxFVkJRVVVzYVVKQlFXbENMRVZCUVVVc1pVRkJaU3hEUVVGRExFTkJRVU03VVVGRE4wUXNUMEZCVHp0TFFVTldPMGxCUjBRc1RVRkJUU3hMUVVGTExFZEJRVWNzT0VKQlFXMUNMRU5CUVVNc1VVRkJVU3hGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZETzBsQlJYWkVMRWxCUVVrc1RVRkJUU3haUVVGWkxHbENRVUZQTEVWQlFVVTdVVUZETTBJc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1MwRkRha003TzFGQlFVMHNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEJRVU5zUXl4RFFVRkRPMEZCZWtKRUxIZENRWGxDUXp0QlFWZEVMRk5CUVdkQ0xIbENRVUY1UWl4RFFVZFVMRTFCUVZNc1JVRkJSU3hIUVVGTkxFVkJRVVVzU1VGQmJVSXNSVUZCUlN4TlFVRlRPMGxCUlRkRkxFMUJRVTBzVVVGQlVTeEhRVUZITEU5QlFVOHNRMEZCUXl4M1FrRkJkMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkRMMFFzVFVGQlRTeFRRVUZUTEVkQlFVY3NSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJSV3BETEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEzQkRMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NSVUZCUlR0UlFVTm9ReXhIUVVGSExFVkJRVVVzVTBGQlV5eGxRVUZsTzFsQlEzcENMRTFCUVUwc1NVRkJTU3hIUVVGUkxFbEJRVWtzUTBGQlF6dFpRVU4yUWl4UFFVRlBMRTFCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEYmtNc1EwRkJRenRSUVVORUxFZEJRVWNzUlVGQlJTeFRRVUZUTEdWQlFXVXNRMEZCUXl4TlFVRlhPMWxCUTNKRExFMUJRVTBzU1VGQlNTeEhRVUZSTEVsQlFVa3NRMEZCUXp0WlFVTjJRaXhOUVVGTkxFdEJRVXNzUjBGQlJ5dzRRa0ZCYlVJc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZITjBNc1NVRkJTU3hMUVVGTExFTkJRVU03V1VGRFZpeEpRVUZKTEVsQlFVa3NTMEZCU3l4WFFVRlhMRVZCUVVVN1owSkJRM1JDTEV0QlFVc3NSMEZCUnl4SlFVRkpMSEZDUVVGVExFTkJRVU1zU1VGQlNTeEZRVUZGTEZOQlFWTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRoUVVOc1JEdHBRa0ZCVFN4SlFVRkpMRWxCUVVrc1MwRkJTeXhWUVVGVkxFVkJRVVU3WjBKQlF6VkNMRXRCUVVzc1IwRkJSeXhKUVVGSkxHMUNRVUZSTEVOQlFVTXNTVUZCU1N4RlFVRkZMRk5CUVZNc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dGhRVU5xUkRzN1owSkJRVTBzUzBGQlN5eEhRVUZITEVsQlFVa3NhVUpCUVU4c1EwRkJReXhKUVVGSkxFVkJRVVVzVTBGQlV5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMWxCUjNCRUxFbEJRVWtzUzBGQlN5eEZRVUZGTzJkQ1FVTlFMRWxCUVVrc1EwRkJReXhMUVVGTExGbEJRVmtzY1VKQlFWTXNTVUZCU1N4TFFVRkxMRmxCUVZrc2JVSkJRVkVzUTBGQlF5eEpRVUZKTEV0QlFVc3NXVUZCV1N4cFFrRkJUeXhGUVVGRk8yOUNRVU4yUml4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzI5Q1FVTXhRaXhwUTBGQmMwSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1UwRkJVeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzJsQ1FVTnNSRHR4UWtGQlRTeEpRVUZKTEVOQlFVTXNTMEZCU3l4WlFVRlpMRzFDUVVGUkxFbEJRVWtzUzBGQlN5eFpRVUZaTEhGQ1FVRlRMRU5CUVVNc1NVRkJTU3hMUVVGTExGbEJRVmtzYVVKQlFVOHNSVUZCUlR0dlFrRkRPVVlzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4VFFVRlRPM2RDUVVGRkxFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN2FVSkJRMjVFTzJGQlEwbzdPMmRDUVVGTkxHbERRVUZ6UWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hUUVVGVExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdXVUZEZEVRc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeExRVUZMTEZkQlFWY3NTVUZCU1N4SlFVRkpMRXRCUVVzc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEV0QlFVc3NXVUZCV1N4cFFrRkJUeXhEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEV0QlFVc3NVMEZCVXl4RlFVRkZPMmRDUVVOMFJ5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRk5CUVZNc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dGhRVU51UXp0WlFVTkVMRWxCUVVrc1VVRkJVU3hKUVVGSkxGRkJRVkVzUTBGQlF5eEhRVUZITEVsQlFVa3NVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFdEJRVXNzYVVKQlFXbENPMmRDUVVGRkxGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU0zUnl4RFFVRkRPMUZCUTBRc1ZVRkJWU3hGUVVGRkxFbEJRVWs3VVVGRGFFSXNXVUZCV1N4RlFVRkZMRWxCUVVrN1MwRkRja0lzUTBGQlF5eERRVUZETzBGQlExQXNRMEZCUXp0QlFUTkRSQ3c0UkVFeVEwTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBkZWZpbmVNZXRhZGF0YSh0YXJnZXQsIGtleSwgdmFsKSB7XG4gICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShrZXksIHZhbCwgdGFyZ2V0KTtcbn1cbmV4cG9ydHMuZGVmaW5lTWV0YWRhdGEgPSBkZWZpbmVNZXRhZGF0YTtcbmZ1bmN0aW9uIGdldE1ldGFkYXRhKHRhcmdldCwga2V5KSB7XG4gICAgcmV0dXJuIFJlZmxlY3QuZ2V0TWV0YWRhdGEoa2V5LCB0YXJnZXQpO1xufVxuZXhwb3J0cy5nZXRNZXRhZGF0YSA9IGdldE1ldGFkYXRhO1xuZnVuY3Rpb24gZGVmaW5lV2lsZGNhcmRNZXRhZGF0YSh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKGtleSwgdmFsdWUsIHRhcmdldCk7XG59XG5leHBvcnRzLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEgPSBkZWZpbmVXaWxkY2FyZE1ldGFkYXRhO1xuZnVuY3Rpb24gZ2V0V2lsZGNhcmRNZXRhZGF0YSh0YXJnZXQsIGtleSkge1xuICAgIHJldHVybiBSZWZsZWN0LmdldE1ldGFkYXRhKGtleSwgdGFyZ2V0KTtcbn1cbmV4cG9ydHMuZ2V0V2lsZGNhcmRNZXRhZGF0YSA9IGdldFdpbGRjYXJkTWV0YWRhdGE7XG5mdW5jdGlvbiBnZXREZXNpZ25UeXBlKHRhcmdldCwga2V5KSB7XG4gICAgcmV0dXJuIFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCB0YXJnZXQsIGtleSk7XG59XG5leHBvcnRzLmdldERlc2lnblR5cGUgPSBnZXREZXNpZ25UeXBlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldWMFlXUmhkR0V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDNWMGFXeHpMMjFsZEdGa1lYUmhMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQmFVbEJMRk5CUVdkQ0xHTkJRV01zUTBGQk5FTXNUVUZCVXl4RlFVRkZMRWRCUVUwc1JVRkJSU3hIUVVGclFqdEpRVU16Unl4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkROME1zUTBGQlF6dEJRVVpFTEhkRFFVVkRPMEZCVjBRc1UwRkJaMElzVjBGQlZ5eERRVUUwUXl4TlFVRlRMRVZCUVVVc1IwRkJUVHRKUVVOd1JpeFBRVUZQTEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzBGQlF6VkRMRU5CUVVNN1FVRkdSQ3hyUTBGRlF6dEJRVlZFTEZOQlFXZENMSE5DUVVGelFpeERRVUZETEUxQlFXTXNSVUZCUlN4SFFVRmpMRVZCUVVVc1MwRkJWVHRKUVVNM1JTeFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdRVUZETDBNc1EwRkJRenRCUVVaRUxIZEVRVVZETzBGQlZVUXNVMEZCWjBJc2JVSkJRVzFDTEVOQlFVTXNUVUZCWXl4RlFVRkZMRWRCUVdNN1NVRkRPVVFzVDBGQlR5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dEJRVU0xUXl4RFFVRkRPMEZCUmtRc2EwUkJSVU03UVVGVlJDeFRRVUZuUWl4aFFVRmhMRU5CUVVNc1RVRkJZeXhGUVVGRkxFZEJRVmM3U1VGRGNrUXNUMEZCVHl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExHRkJRV0VzUlVGQlJTeE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRNMFFzUTBGQlF6dEJRVVpFTEhORFFVVkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuY29uc3Qgb25fY2hhbmdlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwib24tY2hhbmdlXCIpKTtcbnZhciBsb2Rhc2hfMSA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5leHBvcnRzLm1lcmdlID0gbG9kYXNoXzEubWVyZ2U7XG5leHBvcnRzLm9taXQgPSBsb2Rhc2hfMS5vbWl0O1xuZXhwb3J0cy5pc0Z1bmN0aW9uID0gbG9kYXNoXzEuaXNGdW5jdGlvbjtcbmV4cG9ydHMuaXNPYmplY3QgPSBsb2Rhc2hfMS5pc09iamVjdDtcbmV4cG9ydHMucGlja0J5ID0gbG9kYXNoXzEucGlja0J5O1xuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGxvZGFzaF8xLmlzVW5kZWZpbmVkO1xuZXhwb3J0cy5pc0VxdWFsID0gbG9kYXNoXzEuaXNFcXVhbDtcbmV4cG9ydHMuaXNTdHJpbmcgPSBsb2Rhc2hfMS5pc1N0cmluZztcbmV4cG9ydHMuaXNOdW1iZXIgPSBsb2Rhc2hfMS5pc051bWJlcjtcbmV4cG9ydHMuaXNBcnJheSA9IGxvZGFzaF8xLmlzQXJyYXk7XG5leHBvcnRzLmRpZmZlcmVuY2UgPSBsb2Rhc2hfMS5kaWZmZXJlbmNlO1xuZXhwb3J0cy5kZWJvdW5jZSA9IGxvZGFzaF8xLmRlYm91bmNlO1xuZnVuY3Rpb24gdWNGaXJzdChzdHIpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuZXhwb3J0cy51Y0ZpcnN0ID0gdWNGaXJzdDtcbmZ1bmN0aW9uIGNhbWVsQ2FzZTJrZWJhYkNhc2Uoc3RyKSB7XG4gICAgc3RyID0gc3RyLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFthLXowLTldfCg/PVtBLVpdKSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG59XG5leHBvcnRzLmNhbWVsQ2FzZTJrZWJhYkNhc2UgPSBjYW1lbENhc2Uya2ViYWJDYXNlO1xuZnVuY3Rpb24gcGFzY2FsQ2FzZTJrZWJhYkNhc2Uoc3RyKSB7XG4gICAgc3RyID0gdWNGaXJzdChzdHIpO1xuICAgIHJldHVybiBjYW1lbENhc2Uya2ViYWJDYXNlKHN0cik7XG59XG5leHBvcnRzLnBhc2NhbENhc2Uya2ViYWJDYXNlID0gcGFzY2FsQ2FzZTJrZWJhYkNhc2U7XG5mdW5jdGlvbiByZW1vdmVFbGVtZW50RnJvbUFycmF5KGFycmF5LCBlbGVtZW50KSB7XG4gICAgY29uc3QgaW5kZXggPSBhcnJheS5pbmRleE9mKGVsZW1lbnQpO1xuICAgIGlmIChpbmRleCA+PSAwKVxuICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xufVxuZXhwb3J0cy5yZW1vdmVFbGVtZW50RnJvbUFycmF5ID0gcmVtb3ZlRWxlbWVudEZyb21BcnJheTtcbmZ1bmN0aW9uIGdldFByb3RvdHlwZU5hbWVzUmVjdXJzaXZlKG9iamVjdCwgcHJvdG90eXBlcyA9IFtdKSB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKHByb3RvdHlwZSkge1xuICAgICAgICBwcm90b3R5cGVzLnB1c2gocHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgICAgICBnZXRQcm90b3R5cGVOYW1lc1JlY3Vyc2l2ZShwcm90b3R5cGUsIHByb3RvdHlwZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvdG90eXBlcztcbn1cbmV4cG9ydHMuZ2V0UHJvdG90eXBlTmFtZXNSZWN1cnNpdmUgPSBnZXRQcm90b3R5cGVOYW1lc1JlY3Vyc2l2ZTtcbmZ1bmN0aW9uIGluY2x1ZGVzTWVtYmVyT2ZMaXN0KHNlYXJjaCwgbGlzdCwgZXh0ZW5zaW9uID0gJycpIHtcbiAgICBmb3IgKGNvbnN0IG1lbWJlciBvZiBsaXN0KSB7XG4gICAgICAgIGlmIChzZWFyY2guaW5jbHVkZXMoYCR7bWVtYmVyfSR7ZXh0ZW5zaW9ufWApKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmluY2x1ZGVzTWVtYmVyT2ZMaXN0ID0gaW5jbHVkZXNNZW1iZXJPZkxpc3Q7XG5mdW5jdGlvbiBjb25zdHJ1Y3RUeXBlT2ZIVE1MQXR0cmlidXRlKG9iamVjdCwga2V5KSB7XG4gICAgaWYgKCFlbnZpcm9ubWVudF8xLmlzQnJvd3NlcigpKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgdHlwZSA9IG1ldGFkYXRhXzEuZ2V0RGVzaWduVHlwZShvYmplY3QsIGtleSk7XG4gICAgY29uc3QgYXR0clZhbHVlID0gb2JqZWN0LmdldEF0dHJpYnV0ZShrZXkpO1xuICAgIGxldCB2YWx1ZVRvU2V0ID0gYXR0clZhbHVlO1xuICAgIGlmIChhdHRyVmFsdWUgJiYgdHlwZSAmJiB0eXBlLm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoW1wiTnVtYmVyXCIsIFwiQm9vbGVhblwiLCBcIk9iamVjdFwiLCBcIkFycmF5XCJdLmluY2x1ZGVzKHR5cGUubmFtZSkpIHtcbiAgICAgICAgICAgIHZhbHVlVG9TZXQgPSBKU09OLnBhcnNlKGF0dHJWYWx1ZS5yZXBsYWNlKC8nL2csICdcIicpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZS5uYW1lID09PSBcIkJhc2VDb25zdHJ1Y3RvclwiKSB7XG4gICAgICAgICAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBvYmouY2xhc3NOYW1lO1xuICAgICAgICAgICAgaWYgKCFjbGFzc05hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2xhc3NOYW1lIGlzIG1pc3NpbmcgaW4gY29tcG9uZW50IGF0dHJpYnV0ZSB2YWx1ZVwiKTtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmouY2xhc3NOYW1lO1xuICAgICAgICAgICAgdmFsdWVUb1NldCA9IG5ldyAodHlwZS5uYW1lKShvYmopO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh2YWx1ZVRvU2V0ICYmIHR5cGUgJiYgdmFsdWVUb1NldC5jb25zdHJ1Y3Rvci5uYW1lICE9PSB0eXBlLm5hbWUpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImF0dHJpYnV0ZSB0eXBlIGVxdWFscyBub3QgZGVmaW5lZCB0eXBlXCIpO1xuICAgIHJldHVybiB2YWx1ZVRvU2V0O1xufVxuZXhwb3J0cy5jb25zdHJ1Y3RUeXBlT2ZIVE1MQXR0cmlidXRlID0gY29uc3RydWN0VHlwZU9mSFRNTEF0dHJpYnV0ZTtcbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbHVlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAhPT0gT2JqZWN0KHZhbHVlKSk7XG59XG5leHBvcnRzLmlzUHJpbWl0aXZlID0gaXNQcmltaXRpdmU7XG5mdW5jdGlvbiBpc1Byb3h5KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZiAob25fY2hhbmdlXzEuZGVmYXVsdC50YXJnZXQodmFsdWUpID09PSB2YWx1ZSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5pc1Byb3h5ID0gaXNQcm94eTtcbmZ1bmN0aW9uIGdldFByb3h5VGFyZ2V0KHZhbHVlKSB7XG4gICAgaWYgKGlzUHJveHkodmFsdWUpKVxuICAgICAgICByZXR1cm4gb25fY2hhbmdlXzEuZGVmYXVsdC50YXJnZXQodmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmV4cG9ydHMuZ2V0UHJveHlUYXJnZXQgPSBnZXRQcm94eVRhcmdldDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRYUnBiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2ZFhScGJITXZkWFJwYkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN4clJFRkJiMFE3UVVGRGNFUXNkMFJCUVcxRU8wRkJRMjVFTEd0RlFVRnBRenRCUVVWcVF5eHBRMEZoWjBJN1FVRmFXaXg1UWtGQlFTeExRVUZMTEVOQlFVRTdRVUZEVEN4M1FrRkJRU3hKUVVGSkxFTkJRVUU3UVVGRFNpdzRRa0ZCUVN4VlFVRlZMRU5CUVVFN1FVRkRWaXcwUWtGQlFTeFJRVUZSTEVOQlFVRTdRVUZEVWl3d1FrRkJRU3hOUVVGTkxFTkJRVUU3UVVGRFRpd3JRa0ZCUVN4WFFVRlhMRU5CUVVFN1FVRkRXQ3d5UWtGQlFTeFBRVUZQTEVOQlFVRTdRVUZEVUN3MFFrRkJRU3hSUVVGUkxFTkJRVUU3UVVGRFVpdzBRa0ZCUVN4UlFVRlJMRU5CUVVFN1FVRkRVaXd5UWtGQlFTeFBRVUZQTEVOQlFVRTdRVUZEVUN3NFFrRkJRU3hWUVVGVkxFTkJRVUU3UVVGRFZpdzBRa0ZCUVN4UlFVRlJMRU5CUVVFN1FVRlZXaXhUUVVGblFpeFBRVUZQTEVOQlFVTXNSMEZCVnp0SlFVTXZRaXhQUVVGUExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOMFJDeERRVUZETzBGQlJrUXNNRUpCUlVNN1FVRlRSQ3hUUVVGblFpeHRRa0ZCYlVJc1EwRkJReXhIUVVGWE8wbEJRek5ETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYWtRc1QwRkJUeXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETERoQ1FVRTRRaXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMEZCUXpsRkxFTkJRVU03UVVGSVJDeHJSRUZIUXp0QlFWTkVMRk5CUVdkQ0xHOUNRVUZ2UWl4RFFVRkRMRWRCUVZjN1NVRkROVU1zUjBGQlJ5eEhRVUZITEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOdVFpeFBRVUZQTEcxQ1FVRnRRaXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEzQkRMRU5CUVVNN1FVRklSQ3h2UkVGSFF6dEJRVk5FTEZOQlFXZENMSE5DUVVGelFpeERRVUZETEV0QlFWa3NSVUZCUlN4UFFVRlpPMGxCUXpkRUxFMUJRVTBzUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRGNrTXNTVUZCU1N4TFFVRkxMRWxCUVVrc1EwRkJRenRSUVVGRkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRek5ETEVOQlFVTTdRVUZJUkN4M1JFRkhRenRCUVZORUxGTkJRV2RDTERCQ1FVRXdRaXhEUVVGRExFMUJRVmNzUlVGQlJTeGhRVUYxUWl4RlFVRkZPMGxCUXpkRkxFMUJRVTBzVTBGQlV5eEhRVUZITEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGFFUXNTVUZCU1N4VFFVRlRMRVZCUVVVN1VVRkRXQ3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE5VTXNNRUpCUVRCQ0xFTkJRVU1zVTBGQlV5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRPMHRCUTNKRU8wbEJRMFFzVDBGQlR5eFZRVUZWTEVOQlFVTTdRVUZEZEVJc1EwRkJRenRCUVZCRUxHZEZRVTlETzBGQlYwUXNVMEZCWjBJc2IwSkJRVzlDTEVOQlFVTXNUVUZCZVVJc1JVRkJSU3hKUVVGakxFVkJRVVVzV1VGQmIwSXNSVUZCUlR0SlFVTnNSeXhMUVVGTExFMUJRVTBzVFVGQlRTeEpRVUZKTEVsQlFVa3NSVUZCUlR0UlFVTjJRaXhKUVVGSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4TlFVRk5MRWRCUVVjc1UwRkJVeXhGUVVGRkxFTkJRVU1zUlVGQlJUdFpRVU14UXl4UFFVRlBMRWxCUVVrc1EwRkJRenRUUVVObU8wdEJRMG83U1VGRFJDeFBRVUZQTEV0QlFVc3NRMEZCUXp0QlFVTnFRaXhEUVVGRE8wRkJVRVFzYjBSQlQwTTdRVUZYUkN4VFFVRm5RaXcwUWtGQk5FSXNRMEZCUXl4TlFVRnRRaXhGUVVGRkxFZEJRVmM3U1VGRGVrVXNTVUZCU1N4RFFVRkRMSFZDUVVGVExFVkJRVVU3VVVGQlJTeFBRVUZQTzBsQlEzcENMRTFCUVUwc1NVRkJTU3hIUVVGSExIZENRVUZoTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRM2hETEUxQlFVMHNVMEZCVXl4SFFVRkhMRTFCUVUwc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZKTTBNc1NVRkJTU3hWUVVGVkxFZEJRVkVzVTBGQlV5eERRVUZETzBsQlEyaERMRWxCUVVrc1UwRkJVeXhKUVVGSkxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4TFFVRkxMRk5CUVZNc1JVRkJSVHRSUVVNNVF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRk5CUVZNc1JVRkJSU3hSUVVGUkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU01UkN4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzcEVPMUZCUTBRc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeExRVUZMTEdsQ1FVRnBRaXhGUVVGRk8xbEJRMnBETEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdXVUZEYkVNc1RVRkJUU3hUUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXp0WlFVTm9ReXhKUVVGSkxFTkJRVU1zVTBGQlV6dG5Ra0ZCUlN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHMUVRVUZ0UkN4RFFVRkRMRU5CUVVNN1dVRkRja1lzVDBGQlR5eEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRPMWxCUTNKQ0xGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFOQlEzSkRPMHRCUTBvN1NVRkRSQ3hKUVVGSkxGVkJRVlVzU1VGQlNTeEpRVUZKTEVsQlFVa3NWVUZCVlN4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFdEJRVXNzU1VGQlNTeERRVUZETEVsQlFVazdVVUZCUlN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExIZERRVUYzUXl4RFFVRkRMRU5CUVVNN1NVRkRMMGdzVDBGQlR5eFZRVUZWTEVOQlFVTTdRVUZEZEVJc1EwRkJRenRCUVhSQ1JDeHZSVUZ6UWtNN1FVRlRSQ3hUUVVGblFpeFhRVUZYTEVOQlFVTXNTMEZCVlR0SlFVTnNReXhQUVVGUExFTkJRVU1zUzBGQlN5eExRVUZMTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM0pETEVOQlFVTTdRVUZHUkN4clEwRkZRenRCUVZORUxGTkJRV2RDTEU5QlFVOHNRMEZCUXl4TFFVRlZPMGxCUXpsQ0xFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1NVRkJTVHRSUVVGRkxFOUJRVThzUzBGQlN5eERRVUZETzBsQlEzaEVMRWxCUVVrc2JVSkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1MwRkJTenRSUVVGRkxFOUJRVThzUzBGQlN5eERRVUZETzBsQlEyNUVMRTlCUVU4c1NVRkJTU3hEUVVGRE8wRkJRMmhDTEVOQlFVTTdRVUZLUkN3d1FrRkpRenRCUVZWRUxGTkJRV2RDTEdOQlFXTXNRMEZCUXl4TFFVRlZPMGxCUTNKRExFbEJRVWtzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXp0UlFVRkZMRTlCUVU4c2JVSkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRiRVFzVDBGQlR5eExRVUZMTEVOQlFVTTdRVUZEYWtJc1EwRkJRenRCUVVoRUxIZERRVWRESW4wPSIsIlwidXNlIHN0cmljdFwiO1xud2luZG93LnZpcnR1YWxSb3V0ZXMgPSBbXCJDb25maWdcIiwgXCJHYW1lTG9iYnlcIiwgXCJIb21lXCJdO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZG1seWRIVmhiRVZ1ZEhKNVVHOXBiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTkyWVhJdmRHMXdMM1pwY25SMVlXeEZiblJ5ZVZCdmFXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlRTeE5RVUZQTEVOQlFVTXNZVUZCWVN4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRExGZEJRVmNzUlVGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXlKOSJdLCJzb3VyY2VSb290IjoiIn0=