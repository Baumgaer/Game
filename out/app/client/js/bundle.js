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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _client_lib_BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./source/app/client/ts/lib/BaseComponent.ts");
/* harmony import */ var _client_lib_BaseComponent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client_lib_BaseComponent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./source/app/utils/decorators.ts");
/* harmony import */ var _bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client_models_Test1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./source/app/client/ts/models/Test1.ts");
/* harmony import */ var _client_models_Test1__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_client_models_Test1__WEBPACK_IMPORTED_MODULE_3__);
var _a, _b;




let ViewLink = class ViewLink extends Object(_client_lib_BaseComponent__WEBPACK_IMPORTED_MODULE_1__["BaseComponentFactory"])(HTMLAnchorElement) {
    constructor(_params) {
        super();
        this.model = new _client_models_Test1__WEBPACK_IMPORTED_MODULE_3__["Test1"]({ title: String(Date.now()) });
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
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_2__["property"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ViewLink.prototype, "model", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_2__["attribute"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ViewLink.prototype, "test", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_2__["watched"])(), Object(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_2__["attribute"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], ViewLink.prototype, "tester", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_2__["property"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof Object !== "undefined" && Object) === "function" ? _a : Object)
], ViewLink.prototype, "testen", void 0);
ViewLink = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_2__["baseConstructor"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof ConstParams !== "undefined" && ConstParams) === "function" ? _b : Object])
], ViewLink);
/* harmony default export */ __webpack_exports__["default"] = (ViewLink);


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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld1JvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvVmlld1JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2REFBaUU7QUFDakUsMENBQXVEO0FBQ3ZELHNEQUF3RDtBQUN4RCxzREFBaUQ7QUFFakQsNERBQTRCO0FBVTVCLElBQXFCLFVBQVUsR0FBL0IsTUFBcUIsVUFBVyxTQUFRLG9DQUFvQixDQUFDLFdBQVcsQ0FBQztJQUF6RTs7UUFTaUMsV0FBTSxHQUFHLElBQUksZ0JBQU0sRUFBRSxDQUFDO0lBK0N2RCxDQUFDO0lBdkNhLGlCQUFpQjtRQUN2QixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2hDLENBQUM7SUFRTyxlQUFlO1FBQ25CLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRTtZQUN0QyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsZUFBZSxLQUFLLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUMzRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBVU8sb0JBQW9CLENBQUMsS0FBeUI7UUFDbEQsSUFBSTtZQUNBLElBQUksQ0FBQywyQkFBb0IsQ0FBVyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQVMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUFFLE9BQU87WUFDM0csTUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtnQkFDM0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSwyQ0FBMkMsQ0FBQyxDQUFDO2FBQzlGO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixNQUFNLEtBQUssQ0FBQztTQUNmO0lBQ0wsQ0FBQztDQUNKLENBQUE7QUEvQ2U7SUFBWCxxQkFBUSxFQUFFOzswQ0FBd0M7QUFUbEMsVUFBVTtJQUQ5Qiw0QkFBZSxFQUFFO0dBQ0csVUFBVSxDQXdEOUI7a0JBeERvQixVQUFVIn0=
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
                            pendingPromises.push(Promise.all(pendingItems).then());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50TW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQ2xpZW50TW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNEQUFrRTtBQUNsRSxnREFBNkM7QUFDN0MsNkNBQW1IO0FBQ25ILG9EQUF5RDtBQUN6RCxrREFBdUU7QUFDdkUsK0NBQTRDO0FBQzVDLGlFQUE4RDtBQUU5RCw4Q0FBMkM7QUFDM0MsMENBQXNHO0FBQ3RHLDBEQUF1RDtBQUV2RCxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO0FBQzVCLE1BQU0sZUFBZSxHQUFHLGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7QUFXdEQsSUFBYSxXQUFXLG1CQUF4QixNQUFhLFdBQVksU0FBUSxtQkFBUTtJQUF6Qzs7UUFrQmdDLGtCQUFhLEdBQVksSUFBSSxDQUFDO0lBa085RCxDQUFDO0lBbE5VLE1BQU0sQ0FBQyxlQUFlLENBQTJDLEVBQVc7UUFDL0UsT0FBTyxJQUFJLE9BQU8sQ0FBZ0IsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQ2hELElBQUksS0FBSyxHQUFHLDZCQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQWtCLENBQUM7WUFDaEYsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDL0IsTUFBTSxlQUFlLEdBQUcsTUFBTSxlQUFlO2lCQUN4QyxRQUFRLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztpQkFDNUIsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7aUJBQ2hDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNiLElBQUksZUFBZSxFQUFFO2dCQUNqQixNQUFNLGVBQWUsR0FBeUIsRUFBRSxDQUFDO2dCQUNqRCxLQUFLLE1BQU0sR0FBRyxJQUFJLGVBQWUsRUFBRTtvQkFD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

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Test1_1, _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
const BDOTest1_1 = __webpack_require__("./source/app/models/BDOTest1.ts");
const Test_1 = __webpack_require__("./source/app/client/ts/models/Test.ts");
const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");
let Test1 = Test1_1 = class Test1 extends BDOTest1_1.BDOTest1Factory(Test_1.Test) {
    constructor(params) {
        super(params);
    }
    async wadde() {
        const test = await Test1_1.getInstanceByID(this.id);
        if (test)
            return test.getUnsavedChanges();
        return;
    }
};
Test1 = Test1_1 = tslib_1.__decorate([
    decorators_1.baseConstructor({ collectionName: "Test1" }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ConstParams !== "undefined" && ConstParams) === "function" ? _a : Object])
], Test1);
exports.Test1 = Test1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdDEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdDEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLG1EQUF1RDtBQUN2RCw4Q0FBMkM7QUFDM0Msc0RBQXdEO0FBVXhELElBQWEsS0FBSyxhQUFsQixNQUFhLEtBQU0sU0FBUSwwQkFBZSxDQUFDLFdBQUksQ0FBQztJQUU1QyxZQUFZLE1BQTJCO1FBQ25DLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBT00sS0FBSyxDQUFDLEtBQUs7UUFDZCxNQUFNLElBQUksR0FBRyxNQUFNLE9BQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDMUMsT0FBTztJQUNYLENBQUM7Q0FDSixDQUFBO0FBaEJZLEtBQUs7SUFEakIsNEJBQWUsQ0FBQyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsQ0FBQztpRUFHcEIsV0FBVyxvQkFBWCxXQUFXO0dBRnZCLEtBQUssQ0FnQmpCO0FBaEJZLHNCQUFLIn0=

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
const open_simplex_noise_1 = __webpack_require__("./node_modules/open-simplex-noise/lib/index.js");
const util_1 = __webpack_require__("./source/app/utils/util.ts");
const Cell_1 = __webpack_require__("./source/app/models/Cell.ts");
class Chunk {
    constructor(params) {
        this.x = 0;
        this.y = 0;
        this.size = 64;
        this.grid = [];
        this.simplexCave = open_simplex_noise_1.makeNoise2D(1);
        this.simplexRiver = open_simplex_noise_1.makeNoise2D(2);
        this.simplexTemperature = open_simplex_noise_1.makeNoise2D(3);
        this.simplexHumidity = open_simplex_noise_1.makeNoise2D(4);
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
                    cave: this.simplexCave(xCoordinate / 100, yCoordinate / 100),
                    river: this.simplexRiver(xCoordinate / 500, yCoordinate / 500),
                    temperature: this.simplexTemperature(xCoordinate / 2500, yCoordinate / 2500),
                    humidity: this.simplexHumidity(xCoordinate / 2500, yCoordinate / 2500),
                    chunk: this
                }));
            }
        }
    }
}
exports.Chunk = Chunk;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2h1bmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL21vZGVscy9DaHVuay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUFpRDtBQUNqRCwwQ0FBd0M7QUFDeEMsaUNBQThCO0FBUTlCLE1BQWEsS0FBSztJQXNFZCxZQUFZLE1BQTJCO1FBL0RoQyxNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBUWQsTUFBQyxHQUFXLENBQUMsQ0FBQztRQVFkLFNBQUksR0FBWSxFQUFFLENBQUM7UUFTaEIsU0FBSSxHQUFhLEVBQUUsQ0FBQztRQVNwQixnQkFBVyxHQUFHLGdDQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFTN0IsaUJBQVksR0FBRyxnQ0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBUzlCLHVCQUFrQixHQUFHLGdDQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFTcEMsb0JBQWUsR0FBRyxnQ0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBR3ZDLFlBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFRUyxZQUFZO1FBQ2xCLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBWSxJQUFJLENBQUMsSUFBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN0QjtZQUNELEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBWSxJQUFJLENBQUMsSUFBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUNoRCxNQUFNLFdBQVcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNyRCxNQUFNLFdBQVcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUVyRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDZixJQUFJLFdBQUksQ0FBQztvQkFDTCxDQUFDLEVBQUUsV0FBVztvQkFDZCxDQUFDLEVBQUUsV0FBVztvQkFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFLFdBQVcsR0FBRyxHQUFHLENBQUM7b0JBQzVELEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUUsV0FBVyxHQUFHLEdBQUcsQ0FBQztvQkFDOUQsV0FBVyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQzVFLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQUUsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDdEUsS0FBSyxFQUFFLElBQUk7aUJBQ2QsQ0FBQyxDQUNMLENBQUM7YUFDTDtTQUNKO0lBQ0wsQ0FBQztDQUNKO0FBeEdELHNCQXdHQyJ9

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
        if (framework_1.isBDOModel(ctor)) {
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
        if (framework_1.isComponent(ctor)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvdXRpbHMvZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQiwwQ0FBdUQ7QUFJdkQsOERBQXdGO0FBQ3hGLGtEQUFrRTtBQUNsRSxvREFBK0g7QUFFL0gsK0NBWXNCO0FBa0J0QixTQUFnQixPQUFPLENBQUMsU0FBeUIsRUFBRTtJQUMvQyxPQUFPLENBQUMsTUFBVyxFQUFFLEdBQW9CLEVBQUUsRUFBRTtRQUN6QyxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMsTUFBTSxpQkFBaUIsR0FBRyw0QkFBZ0IsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUM3RixxQ0FBeUIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQy9FLENBQUMsQ0FBQztBQUNOLENBQUM7QUFORCwwQkFNQztBQWdCRCxTQUFnQixRQUFRLENBQUMsUUFBMkIsRUFBRSxNQUF3QjtJQUMxRSxPQUFPLENBQUMsTUFBVyxFQUFFLEdBQW9CLEVBQUUsRUFBRTtRQUN6QyxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFHakMsSUFBSSxRQUFRLElBQUksQ0FBQyxDQUFDLFFBQVEsWUFBWSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxNQUFNLEdBQUcsUUFBUSxDQUFDO1FBQzlFLElBQUksUUFBUSxJQUFJLENBQUMsQ0FBQyxRQUFRLFlBQVksUUFBUSxDQUFDO1lBQUUsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUN0RSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksTUFBTSxDQUFDO1lBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUd4RCxN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

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
const util_1 = __webpack_require__("./source/app/utils/util.ts");
const environment_1 = __webpack_require__("./source/app/utils/environment.ts");
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
function isBDOModel(value) {
    if ("isBDOModel" in value)
        return true;
    return false;
}
exports.isBDOModel = isBDOModel;
function isClientModel(value) {
    if (isBDOModel(value) && "isClientModel" in value)
        return true;
    return false;
}
exports.isClientModel = isClientModel;
function isServerModel(value) {
    if (isBDOModel(value) && "isServerModel" in value)
        return true;
    return false;
}
exports.isServerModel = isServerModel;
function isComponent(value) {
    if (environment_1.isBrowser() && "isBaseComponent" in value)
        return true;
    return false;
}
exports.isComponent = isComponent;
function isReferenceString(value) {
    if (typeof value !== "string")
        return false;
    const refRegEx = /_reference\:[A-Z|0-9|_|$]*\:[A-Z|0-9|\-|_]*/gi;
    return Boolean(value.match(refRegEx)).valueOf();
}
exports.isReferenceString = isReferenceString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWV3b3JrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC91dGlscy9mcmFtZXdvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBMkM7QUFDM0Msa0RBQWlFO0FBQ2pFLGdEQUE4RDtBQUM5RCw4Q0FBMkQ7QUFFM0QsMENBQXdDO0FBQ3hDLHdEQUFtRDtBQUNuRCxrREFBK0c7QUE4Qy9HLFNBQWdCLGdCQUFnQixDQUs5QixNQUFTLEVBQUUsR0FBTSxFQUFFLFNBQVksRUFBRSxNQUFTO0lBRXhDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7UUFBRSx5QkFBYyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzFGLE1BQU0sR0FBRyxHQUFHLHNCQUFXLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBbUMsQ0FBQztJQUM3RSxNQUFNLG9CQUFvQixHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hELE1BQU0sUUFBUSxHQUFHLFlBQUssQ0FBQyxvQkFBb0IsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2QixPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDO0FBYkQsNENBYUM7QUFhRCxTQUFnQixNQUFNLENBQXFELFFBQVcsRUFBRSxHQUFNLEVBQUUsS0FBYSxFQUFFO0lBQzNHLElBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixJQUFJLEVBQUU7UUFBRSxTQUFTLEdBQUcsR0FBRyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUM7SUFDbkMsSUFBSSxDQUFDLHNCQUFXLENBQUMsUUFBUSxFQUFFLHFCQUFxQixDQUFDLEVBQUU7UUFDL0MsTUFBTSxlQUFlLEdBQUcsc0JBQVcsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQztLQUNsRDtJQUNELE1BQU0sS0FBSyxHQUFHLDhCQUFtQixDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN2RCxJQUFJLEtBQUs7UUFBRSxPQUFPLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsQyxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBVkQsd0JBVUM7QUFlRCxTQUFnQixNQUFNLENBRWdCLFFBQVcsRUFBRSxHQUFNLEVBQUUsTUFBcUIsRUFBRSxLQUFhLEVBQUU7SUFHN0YsSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLElBQUksRUFBRTtRQUFFLFNBQVMsR0FBRyxHQUFHLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUduQyxJQUFJLENBQUMsRUFBRSxJQUFJLFFBQVEsQ0FBSSxTQUFTLENBQUMsS0FBSyxNQUFNO1FBQUUsT0FBTztJQUdyRCxJQUFJLENBQUMsc0JBQVcsQ0FBQyxRQUFRLEVBQUUscUJBQXFCLENBQUMsRUFBRTtRQUMvQyxNQUFNLGVBQWUsR0FBRyxzQkFBVyxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2RSxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN4RCx5QkFBYyxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUM3RCxPQUFPO0tBQ1Y7SUFHRCxNQUFNLEtBQUssR0FBRyw4QkFBbUIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFdkQsSUFBSSxNQUFNLFlBQVksaUJBQU8sRUFBRTtRQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNqQzs7UUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUF6QkQsd0JBeUJDO0FBV0QsU0FBZ0IseUJBQXlCLENBR1QsTUFBUyxFQUFFLEdBQU0sRUFBRSxJQUFtQixFQUFFLE1BQVM7SUFFN0UsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMvRCxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFakMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1FBQ2hDLEdBQUcsRUFBRSxTQUFTLGVBQWU7WUFDekIsTUFBTSxJQUFJLEdBQVEsSUFBSSxDQUFDO1lBQ3ZCLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBQ0QsR0FBRyxFQUFFLFNBQVMsZUFBZSxDQUFDLE1BQVc7WUFDckMsTUFBTSxJQUFJLEdBQVEsSUFBSSxDQUFDO1lBQ3ZCLE1BQU0sS0FBSyxHQUFHLDhCQUFtQixDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztZQUc3QyxJQUFJLEtBQUssQ0FBQztZQUNWLElBQUksSUFBSSxLQUFLLFdBQVcsRUFBRTtnQkFDdEIsS0FBSyxHQUFHLElBQUkscUJBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ2xEO2lCQUFNLElBQUksSUFBSSxLQUFLLFVBQVUsRUFBRTtnQkFDNUIsS0FBSyxHQUFHLElBQUksbUJBQVEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ2pEOztnQkFBTSxLQUFLLEdBQUcsSUFBSSxpQkFBTyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFHcEQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLEtBQUssWUFBWSxxQkFBUyxJQUFJLEtBQUssWUFBWSxtQkFBUSxDQUFDLElBQUksS0FBSyxZQUFZLGlCQUFPLEVBQUU7b0JBQ3ZGLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzFCLGlDQUFzQixDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ2xEO3FCQUFNLElBQUksQ0FBQyxLQUFLLFlBQVksbUJBQVEsSUFBSSxLQUFLLFlBQVkscUJBQVMsQ0FBQyxJQUFJLEtBQUssWUFBWSxpQkFBTyxFQUFFO29CQUM5RixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7d0JBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbkQ7YUFDSjs7Z0JBQU0saUNBQXNCLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssV0FBVyxJQUFJLElBQUksS0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLGlCQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQ3RHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ25DO1lBQ0QsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxpQkFBaUI7Z0JBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdHLENBQUM7UUFDRCxVQUFVLEVBQUUsSUFBSTtRQUNoQixZQUFZLEVBQUUsSUFBSTtLQUNyQixDQUFDLENBQUM7QUFDUCxDQUFDO0FBM0NELDhEQTJDQztBQVNELFNBQWdCLGlCQUFpQixDQUFDLEtBQWE7SUFDM0MsSUFBSSxPQUFPLEtBQUssS0FBSyxVQUFVLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxpQkFBaUI7UUFBRSxPQUFPLElBQUksQ0FBQztJQUNqRixJQUFJLEtBQUssWUFBWSxNQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssaUJBQWlCO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDekYsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUpELDhDQUlDO0FBVUQsU0FBZ0IsVUFBVSxDQUFDLEtBQWE7SUFDcEMsSUFBSSxZQUFZLElBQUksS0FBSztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQ3ZDLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFIRCxnQ0FHQztBQVVELFNBQWdCLGFBQWEsQ0FBQyxLQUFhO0lBQ3ZDLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLGVBQWUsSUFBSSxLQUFLO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDL0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUhELHNDQUdDO0FBVUQsU0FBZ0IsYUFBYSxDQUFDLEtBQWE7SUFDdkMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksZUFBZSxJQUFJLEtBQUs7UUFBRSxPQUFPLElBQUksQ0FBQztJQUMvRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBSEQsc0NBR0M7QUFXRCxTQUFnQixXQUFXLENBQUMsS0FBYTtJQUNyQyxJQUFJLHVCQUFTLEVBQUUsSUFBSSxpQkFBaUIsSUFBSSxLQUFLO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDM0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUhELGtDQUdDO0FBU0QsU0FBZ0IsaUJBQWlCLENBQUMsS0FBVTtJQUN4QyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVE7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUM1QyxNQUFNLFFBQVEsR0FBRywrQ0FBK0MsQ0FBQztJQUNqRSxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDcEQsQ0FBQztBQUpELDhDQUlDIn0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvR2FtZVdpbmRvdy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1Rlc3RDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvY29tcG9uZW50cy9WaWV3TGluay50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1ZpZXdSb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9DbGllbnRNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQ2xpZW50Um91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0NvbmZpZ01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0RhdGFiYXNlTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL21vZGVscyBzeW5jIF5cXC5cXC8uKlxcLnRzJCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdDEudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzIHN5bmMgXlxcLlxcLy4qXFwudHMkIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9Db25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0dhbWVMb2JieS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvSG9tZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy91dGlscy91dGlsLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0F0dHJpYnV0ZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Db25maWdNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0JET0RhdGFiYXNlTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvQkRPTWFwQ2FjaGUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvQkRPTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvQkRPUm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvQmFzZUNvbnN0cnVjdG9yLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0JpbmRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvRXJyb3JzLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0ZpZWxkLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL01vZGVsUmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvTW9kaWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL1Byb3BlcnR5LnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL1dhdGNoZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9tb2RlbHMvQkRPVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL21vZGVscy9CRE9UZXN0MS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL21vZGVscy9DZWxsLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbW9kZWxzL0NodW5rLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvcm91dGVzL0JET0NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3JvdXRlcy9CRE9HYW1lTG9iYnkudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9yb3V0ZXMvQkRPSG9tZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3V0aWxzIHN5bmMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscy9kZWNvcmF0b3JzLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvdXRpbHMvZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscy9mcmFtZXdvcmsudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscy9tZXRhZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3V0aWxzL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vdmFyL3RtcC92aXJ0dWFsRW50cnlQb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsKzRJOzs7Ozs7OztBQzdHOUI7QUFDYjtBQUNBLDJDQUEyQywyUSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yXCIsXCJ0ZW1wbGF0ZXNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1TR1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLVNHLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2EsIF9iO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcblwidXNlIHN0cmljdFwiO1xuY29uc3QgQmFzZUNvbXBvbmVudF8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0Jhc2VDb21wb25lbnRcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgZGVjb3JhdG9yc18yID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IEJBQllMT04gPSB0c2xpYl8xLl9faW1wb3J0U3RhcihyZXF1aXJlKFwiYmFieWxvbmpzXCIpKTtcbmxldCBHYW1lV2luZG93ID0gY2xhc3MgR2FtZVdpbmRvdyBleHRlbmRzIEJhc2VDb21wb25lbnRfMS5CYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmVuZ2luZSA9IG5ldyBCQUJZTE9OLkVuZ2luZSh0aGlzLCB0cnVlLCB7XG4gICAgICAgICAgICBhdWRpb0VuZ2luZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gYDEwMCVgO1xuICAgICAgICB0aGlzLnN0eWxlLndpZHRoID0gYDEwMCVgO1xuICAgICAgICB0aGlzLmVuZ2luZS5ydW5SZW5kZXJMb29wKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVuZ2luZS5yZXNpemUoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY3JlYXRlU2NlbmUoKSB7XG4gICAgICAgIGNvbnN0IHNjZW5lID0gbmV3IEJBQllMT04uU2NlbmUodGhpcy5lbmdpbmUpO1xuICAgICAgICBjb25zdCBjYW1lcmEgPSBuZXcgQkFCWUxPTi5GcmVlQ2FtZXJhKCdjYW1lcmEnLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDUsIC0xMCksIHNjZW5lKTtcbiAgICAgICAgY2FtZXJhLnNldFRhcmdldChCQUJZTE9OLlZlY3RvcjMuWmVybygpKTtcbiAgICAgICAgY2FtZXJhLmF0dGFjaENvbnRyb2wodGhpcywgZmFsc2UpO1xuICAgICAgICBjb25zdCBsaWdodCA9IG5ldyBCQUJZTE9OLkhlbWlzcGhlcmljTGlnaHQoJ2xpZ2h0MScsIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMSwgMCksIHNjZW5lKTtcbiAgICAgICAgbGlnaHQuc2hhZG93RW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IHNwaGVyZSA9IEJBQllMT04uTWVzaEJ1aWxkZXIuQ3JlYXRlU3BoZXJlKCdzcGhlcmUnLCB7IHNlZ21lbnRzOiAxNiwgZGlhbWV0ZXI6IDIgfSwgc2NlbmUpO1xuICAgICAgICBzcGhlcmUucG9zaXRpb24ueSA9IDE7XG4gICAgICAgIEJBQllMT04uTWVzaEJ1aWxkZXIuQ3JlYXRlR3JvdW5kKCdncm91bmQxJywgeyBoZWlnaHQ6IDYsIHdpZHRoOiA2LCBzdWJkaXZpc2lvbnM6IDIgfSwgc2NlbmUpO1xuICAgICAgICByZXR1cm4gc2NlbmU7XG4gICAgfVxuICAgIGNyZWF0ZVRlcnJhaW4oKSB7IH1cbn07XG5HYW1lV2luZG93LmV4dGVuZHMgPSBcImNhbnZhc1wiO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzIucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCB0eXBlb2YgKF9hID0gdHlwZW9mIEJBQllMT04gIT09IFwidW5kZWZpbmVkXCIgJiYgQkFCWUxPTi5FbmdpbmUpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdClcbl0sIEdhbWVXaW5kb3cucHJvdG90eXBlLCBcImVuZ2luZVwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzIucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCB0eXBlb2YgKF9iID0gdHlwZW9mIEJBQllMT04gIT09IFwidW5kZWZpbmVkXCIgJiYgQkFCWUxPTi5TY2VuZSkgPT09IFwiZnVuY3Rpb25cIiA/IF9iIDogT2JqZWN0KVxuXSwgR2FtZVdpbmRvdy5wcm90b3R5cGUsIFwic2NlbmVcIiwgdm9pZCAwKTtcbkdhbWVXaW5kb3cgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoKVxuXSwgR2FtZVdpbmRvdyk7XG5leHBvcnRzLmRlZmF1bHQgPSBHYW1lV2luZG93O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUjJGdFpWZHBibVJ2ZHk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyTnZiWEJ2Ym1WdWRITXZSMkZ0WlZkcGJtUnZkeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTERaRVFVRnBSVHRCUVVOcVJTeHpSRUZCZDBRN1FVRkRlRVFzYzBSQlFXbEVPMEZCUTJwRUxESkVRVUZ4UXp0QlFWVnlReXhKUVVGeFFpeFZRVUZWTEVkQlFTOUNMRTFCUVhGQ0xGVkJRVmNzVTBGQlVTeHZRMEZCYjBJc1EwRkJReXhwUWtGQmFVSXNRMEZCUXp0SlFVUXZSVHM3VVVGdFFqQkNMRmRCUVUwc1IwRkJiVUlzU1VGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVU3V1VGRE1VVXNWMEZCVnl4RlFVRkZMRWxCUVVrN1UwRkRjRUlzUTBGQlF5eERRVUZETzFGQlUyMUNMRlZCUVVzc1IwRkJhMElzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMGxCZVVSd1JTeERRVUZETzBsQmJFUlZMR2xDUVVGcFFqdFJRVU53UWl4TFFVRkxMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVXNRMEZCUXp0UlFVTXhRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRNMElzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRekZDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1lVRkJZU3hEUVVGRExFZEJRVWNzUlVGQlJUdFpRVU16UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFGQlEzaENMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMGdzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRSUVVOeVFpeE5RVUZOTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlFVY3NSVUZCUlR0WlFVTnVReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNN1dVRkRMMElzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRE8xRkJRM0pETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTFBc1EwRkJRenRKUVZOVExGZEJRVmM3VVVGRmFrSXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVVM1F5eE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRmRrWXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkZla01zVFVGQlRTeERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRmJFTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXpGR0xFdEJRVXNzUTBGQlF5eGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUlROQ0xFMUJRVTBzVFVGQlRTeEhRVUZITEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEZGQlFWRXNSVUZCUlN4RlFVRkZMRVZCUVVVc1VVRkJVU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUldoSExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVWMFFpeFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhUUVVGVExFVkJRVVVzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFVkJRVVVzV1VGQldTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJSVGRHTEU5QlFVOHNTMEZCU3l4RFFVRkRPMGxCUTJwQ0xFTkJRVU03U1VGUlV5eGhRVUZoTEV0QlFVc3NRMEZCUXp0RFFVTm9ReXhEUVVGQk8wRkJOMFV3UWl4clFrRkJUeXhIUVVGWExGRkJRVkVzUTBGQlF6dEJRVk4wUXp0SlFVRllMSEZDUVVGUkxFVkJRVVU3TUVSQlFXMUNMRTlCUVU4c2IwSkJRVkFzVDBGQlR5eERRVUZETEUxQlFVMDdNRU5CUlhwRE8wRkJVMU03U1VGQldDeHhRa0ZCVVN4RlFVRkZPekJFUVVGclFpeFBRVUZQTEc5Q1FVRlFMRTlCUVU4c1EwRkJReXhMUVVGTE8zbERRVUZ6UWp0QlFUZENMME1zVlVGQlZUdEpRVVE1UWl3MFFrRkJaU3hGUVVGRk8wZEJRMGNzVlVGQlZTeERRWE5HT1VJN2EwSkJkRVp2UWl4VlFVRlZJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgQmFzZUNvbXBvbmVudF8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0Jhc2VDb21wb25lbnRcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgZGVjb3JhdG9yc18yID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmxldCBUZXN0Q29tcG9uZW50ID0gY2xhc3MgVGVzdENvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnRfMS5CYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnRlbXBsYXRlU3RyaW5nID0gcmVxdWlyZSgnfnN0YXRpYy92aWV3cy90ZXN0Q29tcG9uZW50Lm5qaycpO1xuICAgIH1cbn07XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMi5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbl0sIFRlc3RDb21wb25lbnQucHJvdG90eXBlLCBcInRlbXBsYXRlU3RyaW5nXCIsIHZvaWQgMCk7XG5UZXN0Q29tcG9uZW50ID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKClcbl0sIFRlc3RDb21wb25lbnQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVGVzdENvbXBvbmVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHVnpkRU52YlhCdmJtVnVkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDJOdmJYQnZibVZ1ZEhNdlZHVnpkRU52YlhCdmJtVnVkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3cyUkVGQmFVVTdRVUZEYWtVc2MwUkJRWGRFTzBGQlEzaEVMSE5FUVVGcFJEdEJRVlZxUkN4SlFVRnhRaXhoUVVGaExFZEJRV3hETEUxQlFYRkNMR0ZCUVdNc1UwRkJVU3h2UTBGQmIwSXNRMEZCUXl4WFFVRlhMRU5CUVVNN1NVRkVOVVU3TzFGQlV6QkNMRzFDUVVGakxFZEJRVWNzVDBGQlR5eERRVUZETEdsRFFVRnBReXhEUVVGRExFTkJRVU03U1VGRmRFWXNRMEZCUXp0RFFVRkJMRU5CUVVFN1FVRkdaVHRKUVVGWUxIRkNRVUZSTEVWQlFVVTdPM0ZFUVVGMVJUdEJRVkpxUlN4aFFVRmhPMGxCUkdwRExEUkNRVUZsTEVWQlFVVTdSMEZEUnl4aFFVRmhMRU5CVldwRE8ydENRVlp2UWl4aFFVRmhJbjA9IiwiaW1wb3J0IHsgQmFzZUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tICd+Y2xpZW50L2xpYi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IHByb3BlcnR5LCBhdHRyaWJ1dGUsIGJhc2VDb25zdHJ1Y3Rvciwgd2F0Y2hlZCB9IGZyb20gJ35iZG8vdXRpbHMvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBUZXN0MSB9IGZyb20gXCJ+Y2xpZW50L21vZGVscy9UZXN0MVwiO1xuXG4vKipcbiAqIFRlc3RcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgVmlld0xpbmtcbiAqIEBleHRlbmRzIHtCYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MQW5jaG9yRWxlbWVudCl9XG4gKi9cbkBiYXNlQ29uc3RydWN0b3IoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld0xpbmsgZXh0ZW5kcyBCYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MQW5jaG9yRWxlbWVudCkge1xuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAbWVtYmVyb2YgVmlld0xpbmtcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGV4dGVuZHM6IHN0cmluZyA9ICdhJztcblxuICAgIC8qKlxuICAgICAqIFRlc3RcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBWaWV3TGlua1xuICAgICAqL1xuICAgIEBwcm9wZXJ0eSgpIHB1YmxpYyBtb2RlbCA9IG5ldyBUZXN0MSh7IHRpdGxlOiBTdHJpbmcoRGF0ZS5ub3coKSkgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUZXN0XG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBWaWV3TGlua1xuICAgICAqL1xuICAgIEBhdHRyaWJ1dGUoKSBwdWJsaWMgdGVzdDogc3RyaW5nID0gdGhpcy5tb2RlbC5iaW5kKFwidGl0bGVcIik7XG5cbiAgICAvKipcbiAgICAgKiBUZXN0XG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAgICogQG1lbWJlcm9mIFZpZXdMaW5rXG4gICAgICovXG4gICAgQHdhdGNoZWQoKSBAYXR0cmlidXRlKCkgcHVibGljIHRlc3Rlcjogc3RyaW5nW10gPSB0aGlzLm1vZGVsLmJpbmQoXCJ0ZXN0ZXJcIik7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIGEgdGVzdCBvYmplY3RcbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQG1lbWJlcm9mIFZpZXdMaW5rXG4gICAgICovXG4gICAgQHByb3BlcnR5KCkgcHVibGljIHRlc3RlbjogT2JqZWN0ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcihfcGFyYW1zPzogQ29uc3RQYXJhbXM8Vmlld0xpbms+KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBWaWV3TGlua1xuICAgICAqL1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3RlZENhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25MaW5rQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVzdFxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBwYXJhbSB7dGhpc1tcInRlc3RcIl19IHZhbHVlXG4gICAgICogQG1lbWJlcm9mIFZpZXdMaW5rXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uVGVzdFR5cGVDaGVjayh2YWx1ZTogdGhpc1tcInRlc3RcIl0pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja2luZyB0eXBlIG9mIHRlc3Qgd2l0aCB2YWx1ZVwiLCB2YWx1ZSk7ICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVzdFxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBtZW1iZXJvZiBWaWV3TGlua1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBvblRlc3RUeXBlQ2hlY2tTdWNjZXNzKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlR5cGVjaGVjayBvZiB0ZXN0IHN1Y2Nlc3NmdWxcIik7ICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVzdFxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBtZW1iZXJvZiBWaWV3TGlua1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBvblRlc3RUeXBlQ2hlY2tGYWlsKGVycm9yOiBFcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlR5cGVjaGVjayBvZiB0ZXN0IGZhaWxlZFwiLCBlcnJvcik7ICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVzdFxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBwYXJhbSB7dGhpc1tcInRlc3RcIl19IGNoYW5nZWRcbiAgICAgKiBAbWVtYmVyb2YgVmlld0xpbmtcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25UZXN0Q2hhbmdlKGNoYW5nZWQ6IHRoaXNbXCJ0ZXN0ZXJcIl0pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0IGNoYW5nZWRcIiwgY2hhbmdlZCwgdGhpcyk7ICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVzdFxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBwYXJhbSB7dGhpc1tcInRlc3RcIl19IGluaXRcbiAgICAgKiBAbWVtYmVyb2YgVmlld0xpbmtcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25UZXN0ZXJJbml0KGluaXQ6IHRoaXNbXCJ0ZXN0ZXJcIl0pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgaW5pdFwiLCBpbml0LCB0aGlzKTsgIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZXN0XG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHBhcmFtIHt0aGlzW1widGVzdFwiXX0gY2hhbmdlZFxuICAgICAqIEBtZW1iZXJvZiBWaWV3TGlua1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBvblRlc3RlckNoYW5nZShjaGFuZ2VkOiB0aGlzW1widGVzdGVyXCJdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIGNoYW5nZWRcIiwgY2hhbmdlZCwgdGhpcyk7ICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVzdFxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBwYXJhbSB7dGhpc1tcInRlc3RcIl19IGFkZGVkXG4gICAgICogQG1lbWJlcm9mIFZpZXdMaW5rXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uVGVzdGVyQWRkKGFkZGVkOiB0aGlzW1widGVzdGVyXCJdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIGFkZGVkXCIsIGFkZGVkLCB0aGlzKTsgIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZXN0XG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHBhcmFtIHt0aGlzW1widGVzdFwiXX0gcmVtb3ZlZFxuICAgICAqIEBtZW1iZXJvZiBWaWV3TGlua1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBvblRlc3RlclJlbW92ZShyZW1vdmVkOiB0aGlzW1widGVzdGVyXCJdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIHJlbW92ZWRcIiwgcmVtb3ZlZCwgdGhpcyk7ICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgdGhlIHJvdXRlciB0byBuYXZpZ2F0ZSB0byB0aGUgaHJlZiBvZiB0aGUgbGlua1xuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqIEBtZW1iZXJvZiBWaWV3TGlua1xuICAgICAqL1xuICAgIHByaXZhdGUgb25MaW5rQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvdy5yb3V0ZXIubmF2aWdhdGUodGhpcy5ocmVmLCB0cnVlKTtcbiAgICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBCYXNlQ29tcG9uZW50XzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQmFzZUNvbXBvbmVudFwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgZGVjb3JhdG9yc18yID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IG5hdmlnb18xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm5hdmlnb1wiKSk7XG5sZXQgVmlld1JvdXRlciA9IGNsYXNzIFZpZXdSb3V0ZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50XzEuQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSBuZXcgbmF2aWdvXzEuZGVmYXVsdCgpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5yb3V0ZUNvbGxlY3Rpb24oKTtcbiAgICAgICAgd2luZG93LnJvdXRlciA9IHRoaXMucm91dGVyO1xuICAgIH1cbiAgICByb3V0ZUNvbGxlY3Rpb24oKSB7XG4gICAgICAgIGZvciAoY29uc3Qgcm91dGUgb2Ygd2luZG93LnZpcnR1YWxSb3V0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG15Um91dGUgPSByZXF1aXJlKGAuLy4uL3JvdXRlcy8ke3JvdXRlfS50c2ApLmRlZmF1bHQ7XG4gICAgICAgICAgICB0aGlzLnNpbmdlUm91dGVDb2xsZWN0aW9uKG15Um91dGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNpbmdlUm91dGVDb2xsZWN0aW9uKFJvdXRlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXV0aWxfMS5pbmNsdWRlc01lbWJlck9mTGlzdChSb3V0ZS5hdHRhY2hUb1NlcnZlcnMsIFtnbG9iYWwucHJvY2Vzcy5lbnYubmFtZSwgJyonXSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgUm91dGVDbGFzcyA9IG5ldyBSb3V0ZSgpO1xuICAgICAgICAgICAgaWYgKCFSb3V0ZUNsYXNzLmlzQ2xpZW50Um91dGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Um91dGVDbGFzcy5jb25zdHJ1Y3Rvci5uYW1lfSBpcyBub3QgaW5zdGFuY2Ugb2YgfmNsaWVudC9saWIvQmFzZVJvdXRlYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5vbihSb3V0ZUNsYXNzLnJvdXRlcik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbn07XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMi5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbl0sIFZpZXdSb3V0ZXIucHJvdG90eXBlLCBcInJvdXRlclwiLCB2b2lkIDApO1xuVmlld1JvdXRlciA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpXG5dLCBWaWV3Um91dGVyKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFZpZXdSb3V0ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWbWxsZDFKdmRYUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDJOdmJYQnZibVZ1ZEhNdlZtbGxkMUp2ZFhSbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTdzJSRUZCYVVVN1FVRkRha1VzTUVOQlFYVkVPMEZCUTNaRUxITkVRVUYzUkR0QlFVTjRSQ3h6UkVGQmFVUTdRVUZGYWtRc05FUkJRVFJDTzBGQlZUVkNMRWxCUVhGQ0xGVkJRVlVzUjBGQkwwSXNUVUZCY1VJc1ZVRkJWeXhUUVVGUkxHOURRVUZ2UWl4RFFVRkRMRmRCUVZjc1EwRkJRenRKUVVGNlJUczdVVUZUYVVNc1YwRkJUU3hIUVVGSExFbEJRVWtzWjBKQlFVMHNSVUZCUlN4RFFVRkRPMGxCSzBOMlJDeERRVUZETzBsQmRrTmhMR2xDUVVGcFFqdFJRVU4yUWl4TFFVRkxMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVXNRMEZCUXp0UlFVTXhRaXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVOQlFVTTdVVUZEZGtJc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUTJoRExFTkJRVU03U1VGUlR5eGxRVUZsTzFGQlEyNUNMRXRCUVVzc1RVRkJUU3hMUVVGTExFbEJRVWtzVFVGQlRTeERRVUZETEdGQlFXRXNSVUZCUlR0WlFVTjBReXhOUVVGTkxFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTXNaVUZCWlN4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF6dFpRVU16UkN4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1UwRkRkRU03U1VGRFRDeERRVUZETzBsQlZVOHNiMEpCUVc5Q0xFTkJRVU1zUzBGQmVVSTdVVUZEYkVRc1NVRkJTVHRaUVVOQkxFbEJRVWtzUTBGQlF5d3lRa0ZCYjBJc1EwRkJWeXhMUVVGTExFTkJRVU1zWlVGQlpTeEZRVUZGTEVOQlFWTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVGRkxFOUJRVTg3V1VGRE0wY3NUVUZCVFN4VlFVRlZMRWRCUVVjc1NVRkJTU3hMUVVGTExFVkJRVVVzUTBGQlF6dFpRVU12UWl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExHRkJRV0VzUlVGQlJUdG5Ra0ZETTBJc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eEhRVUZITEZWQlFWVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3d5UTBGQk1rTXNRMEZCUXl4RFFVRkRPMkZCUXpsR08xbEJRMFFzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFOQlEzSkRPMUZCUVVNc1QwRkJUeXhMUVVGTExFVkJRVVU3V1VGRFdpeE5RVUZOTEV0QlFVc3NRMEZCUXp0VFFVTm1PMGxCUTB3c1EwRkJRenREUVVOS0xFTkJRVUU3UVVFdlEyVTdTVUZCV0N4eFFrRkJVU3hGUVVGRk96c3dRMEZCZDBNN1FVRlViRU1zVlVGQlZUdEpRVVE1UWl3MFFrRkJaU3hGUVVGRk8wZEJRMGNzVlVGQlZTeERRWGRFT1VJN2EwSkJlRVJ2UWl4VlFVRlZJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xucmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7XG5jb25zdCBudW5qdWNrc18xID0gcmVxdWlyZShcIm51bmp1Y2tzXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L3V0aWxzL3V0aWxcIik7XG5jb25zdCB1dGlsXzIgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuZnVuY3Rpb24gQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTFR5cGVFbGVtZW50KSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBjbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgSFRNTFR5cGVFbGVtZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5nZW5lcmF0ZVVuaXF1ZUlEKCk7XG4gICAgICAgICAgICB0aGlzLmlzQmFzZUNvbXBvbmVudCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzLmNvbnN0cnVjdG9yKS5uYW1lO1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVN0cmluZyA9ICc8ZGl2PjxzbG90Pjwvc2xvdD48L2Rpdj4nO1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVBhcmFtcyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLCBcImRlZmluZWRQcm9wZXJ0aWVzXCIpO1xuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb3Agb2YgcHJvcGVydGllcy5rZXlzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2V0KHByb3AsIG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLCBwcm9wKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgICAgICB9XG4gICAgICAgIGdldCBiaW5kaW5ncygpIHtcbiAgICAgICAgICAgIGNvbnN0IGJpbmRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLCBcImluaXRpYXRvckJpbmRpbmdcIik7XG4gICAgICAgICAgICByZXR1cm4gYmluZGluZ3MgPyBiaW5kaW5ncyA6IG5ldyBNYXAoKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgY3JlYXRlKHBhcmFtcykge1xuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSB1dGlsXzIucGFzY2FsQ2FzZTJrZWJhYkNhc2UoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLm5hbWUpO1xuICAgICAgICAgICAgbGV0IGlzID0gdGhhdC5leHRlbmRzO1xuICAgICAgICAgICAgbGV0IHRhZ05hbWUgPSBjbGFzc05hbWU7XG4gICAgICAgICAgICBpZiAoaXMpIHtcbiAgICAgICAgICAgICAgICB0YWdOYW1lID0gaXM7XG4gICAgICAgICAgICAgICAgaXMgPSBjbGFzc05hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGF0LmlzUHJvY2VkdXJhbENvbXBvbmVudENvbnN0cnVjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lLCB7IGlzIH0pO1xuICAgICAgICAgICAgdGhhdC5pc1Byb2NlZHVyYWxDb21wb25lbnRDb25zdHJ1Y3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIGVsZW1lbnQuaW52b2tlTGlmZUN5Y2xlKHBhcmFtcyk7XG4gICAgICAgICAgICBpZiAoaXMpXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpc1wiLCBpcywgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBpbnZva2VMaWZlQ3ljbGUoX0NvbnN0UGFyYW1zKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGlzIG5vdCBhIEJhc2VDb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgfVxuICAgICAgICBnZXROYW1lc3BhY2VkU3RvcmFnZShrZXksIG5zUHJvcCwgZm9yY2VOUykge1xuICAgICAgICAgICAgcmV0dXJuIHV0aWxfMS5nZXROYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5zUHJvcCwgZm9yY2VOUyk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2Uoa2V5LCBuZXdWYWwsIG5zUHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHV0aWxfMS5zZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5ld1ZhbCwgbnNQcm9wKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGVGcm9tTmFtZXNwYWNlZFN0b3JhZ2Uoa2V5LCBuc1Byb3ApIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlsXzEuZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlKHRoaXMsIGtleSwgbnNQcm9wKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSwgdmFsdWUsIHNldFZhbHVlID0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcGVydGllcyAmJiB0aGlzLnByb3BlcnRpZXMuaGFzKHF1YWxpZmllZE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBcIiR7cXVhbGlmaWVkTmFtZX1cIiBjYW4ndCBiZSBzZXQgYXMgYXR0cmlidXRlIGJlY2F1c2UgaXQgaXMgYSBkZWZpbmVkIHByb3BlcnR5YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVUb1NldCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICghdXRpbF8yLmlzUHJpbWl0aXZlKHZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVUb1NldCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC9cXFwiL2csIFwiJ1wiKTtcbiAgICAgICAgICAgICAgICBzdXBlci5zZXRBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSwgdmFsdWVUb1NldCk7XG4gICAgICAgICAgICAgICAgdmFsdWVUb1NldCA9IHV0aWxfMi5jb25zdHJ1Y3RUeXBlT2ZIVE1MQXR0cmlidXRlKHRoaXMsIHF1YWxpZmllZE5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChzZXRWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpc1txdWFsaWZpZWROYW1lXSA9IHZhbHVlVG9TZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlQXR0cmlidXRlKHF1YWxpZmllZE5hbWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMgJiYgdGhpcy5wcm9wZXJ0aWVzLmhhcyhxdWFsaWZpZWROYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgXCIke3F1YWxpZmllZE5hbWV9XCIgY2FuJ3QgYmUgcmVtb3ZlZCBhcyBhdHRyaWJ1dGUgYmVjYXVzZSBpdCBpcyBhIGRlZmluZWQgcHJvcGVydHlgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1cGVyLnJlbW92ZUF0dHJpYnV0ZShxdWFsaWZpZWROYW1lKTtcbiAgICAgICAgICAgIHRoaXNbcXVhbGlmaWVkTmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdG9KU09OKCkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHt9O1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0cnVjdGVkQ2FsbGJhY2soLi4uX2FyZ3MpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jb25zdHJ1Y3Rvci5leHRlbmRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0cmluZ1RvUGFyc2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICh1dGlsXzIuaXNTdHJpbmcodGhpcy50ZW1wbGF0ZVN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nVG9QYXJzZSA9IG51bmp1Y2tzXzEucmVuZGVyU3RyaW5nKHRoaXMudGVtcGxhdGVTdHJpbmcsIHRoaXMudGVtcGxhdGVQYXJhbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodXRpbF8yLmlzT2JqZWN0KHRoaXMudGVtcGxhdGVTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ1RvUGFyc2UgPSB0aGlzLnRlbXBsYXRlU3RyaW5nLnJlbmRlcih0aGlzLnRlbXBsYXRlUGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cmluZ1RvUGFyc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHN0cmluZ1RvUGFyc2UsICd0ZXh0L2h0bWwnKTtcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93Um9vdC5hcHBlbmRDaGlsZChkb2MuYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7IH1cbiAgICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7IH1cbiAgICAgICAgYWRvcHRlZENhbGxiYWNrKCkgeyB9XG4gICAgICAgIGFkZENvbnRyb2xsZXIoKSB7IH1cbiAgICAgICAgcmVtb3ZlQ29udHJvbGxlcigpIHsgfVxuICAgICAgICBnZW5lcmF0ZVVuaXF1ZUlEKCkge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMuY29uc3RydWN0b3IpLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBvY2N1cnJlbmNlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGhpcy50YWdOYW1lKSk7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IG9jY3VycmVuY2VzLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICBsZXQgb2NjdXJyZW5jZSA9IGluZGV4ID49IDAgPyBpbmRleCA6IG9jY3VycmVuY2VzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtjbGFzc05hbWV9XyR7b2NjdXJyZW5jZX1gKSkge1xuICAgICAgICAgICAgICAgIG9jY3VycmVuY2UrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBgJHtjbGFzc05hbWV9XyR7b2NjdXJyZW5jZX1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIEJhc2VDb21wb25lbnQuaXNCYXNlQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICBCYXNlQ29tcG9uZW50LmlzUHJvY2VkdXJhbENvbXBvbmVudENvbnN0cnVjdGlvbiA9IGZhbHNlO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIEJhc2VDb21wb25lbnQucHJvdG90eXBlLCBcImlkXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG4gICAgXSwgQmFzZUNvbXBvbmVudC5wcm90b3R5cGUsIFwiaXNCYXNlQ29tcG9uZW50XCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJjbGFzc05hbWVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoeyBkaXNhYmxlVHlwZUd1YXJkOiB0cnVlIH0pLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgQmFzZUNvbXBvbmVudC5wcm90b3R5cGUsIFwidGVtcGxhdGVTdHJpbmdcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdHlwZW9mIChfYiA9IHR5cGVvZiBJbmRleFN0cnVjdHVyZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJbmRleFN0cnVjdHVyZSkgPT09IFwiZnVuY3Rpb25cIiA/IF9iIDogT2JqZWN0KVxuICAgIF0sIEJhc2VDb21wb25lbnQucHJvdG90eXBlLCBcInRlbXBsYXRlUGFyYW1zXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIEJhc2VDb21wb25lbnQ7XG59XG5leHBvcnRzLkJhc2VDb21wb25lbnRGYWN0b3J5ID0gQmFzZUNvbXBvbmVudEZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRbUZ6WlVOdmJYQnZibVZ1ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyeHBZaTlDWVhObFEyOXRjRzl1Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxEUkNRVUV3UWp0QlFVTXhRaXgxUTBGQmEwUTdRVUZEYkVRc2MwUkJRVFJFTzBGQlF6VkVMR3RFUVVGMVJUdEJRVWQyUlN3MlEwRkJiVWc3UVVGRGJrZ3NNRU5CUVhOSU8wRkJWWFJJTEZOQlFXZENMRzlDUVVGdlFpeERRVUY1UXl4bFFVRnpRanM3U1VGUkwwWXNUVUZCWlN4aFFVRmpMRk5CUVZFc1pVRkJaVHRSUVhWSmFFUXNXVUZCV1N4SFFVRkhMRWxCUVZjN1dVRkRkRUlzUzBGQlN5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRnNSa01zVDBGQlJTeEhRVUZYTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUlVGQlJTeERRVUZETzFsQlVUZENMRzlDUVVGbExFZEJRVmtzU1VGQlNTeERRVUZETzFsQlUyaERMR05CUVZNc1IwRkJWeXhOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU03V1VGVmNFTXNiVUpCUVdNc1IwRkJjMElzTUVKQlFUQkNMRU5CUVVNN1dVRlhiRWNzYlVKQlFXTXNSMEZCYlVJc1JVRkJSU3hEUVVGRE8xRkJOa014UkN4RFFVRkRPMUZCY0VkRUxFbEJRVmNzVlVGQlZUdFpRVU5xUWl4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFZEJRVWNzUlVGQlJTeERRVUZETzFsQlEzaENMRTFCUVUwc1ZVRkJWU3hIUVVGSExITkNRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRzFDUVVGdFFpeERRVUZETEVOQlFVTTdXVUZETVVRc1NVRkJTU3hWUVVGVkxFVkJRVVU3WjBKQlExb3NTMEZCU3l4TlFVRk5MRWxCUVVrc1NVRkJTU3hWUVVGVkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVTdiMEpCUTJ4RExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMRGhDUVVGdFFpeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8ybENRVU53UkR0aFFVTktPMWxCUTBRc1QwRkJUeXhMUVVGTExFTkJRVU03VVVGRGFrSXNRMEZCUXp0UlFYZEVSQ3hKUVVGakxGRkJRVkU3V1VGRGJFSXNUVUZCVFN4UlFVRlJMRWRCUVVjc2MwSkJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dFpRVU4yUkN4UFFVRlBMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRek5ETEVOQlFVTTdVVUZoVFN4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGblJDeE5RVUYxUWp0WlFVTjJSaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUYxUXl4RFFVRkRPMWxCUTNKRUxFMUJRVTBzVTBGQlV5eEhRVUZITERKQ1FVRnZRaXhEUVVGRExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRGVrVXNTVUZCU1N4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF6dFpRVU4wUWl4SlFVRkpMRTlCUVU4c1IwRkJSeXhUUVVGVExFTkJRVU03V1VGRGVFSXNTVUZCU1N4RlFVRkZMRVZCUVVVN1owSkJRMG9zVDBGQlR5eEhRVUZITEVWQlFVVXNRMEZCUXp0blFrRkRZaXhGUVVGRkxFZEJRVWNzVTBGQlV5eERRVUZETzJGQlEyeENPMWxCUTBRc1NVRkJTU3hEUVVGRExHbERRVUZwUXl4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVNNVF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExFOUJRVThzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRTJRaXhEUVVGRE8xbEJRM0JHTEVsQlFVa3NRMEZCUXl4cFEwRkJhVU1zUjBGQlJ5eExRVUZMTEVOQlFVTTdXVUZETDBNc1QwRkJUeXhEUVVGRExHVkJRV1VzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0WlFVTm9ReXhKUVVGSkxFVkJRVVU3WjBKQlFVVXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUXpkRExFOUJRVThzVDBGQlR5eERRVUZETzFGQlEyNUNMRU5CUVVNN1VVRmpUU3hsUVVGbExFTkJRVEJDTEZsQlFUWkNPMWxCUTNwRkxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNLMEpCUVN0Q0xFTkJRVU1zUTBGQlF6dFJRVU55UkN4RFFVRkRPMUZCVjAwc2IwSkJRVzlDTEVOQlFVTXNSMEZCVnl4RlFVRkZMRTFCUVdVc1JVRkJSU3hQUVVGblFqdFpRVU4wUlN4UFFVRlBMREpDUVVGdlFpeERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc1RVRkJUU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzFGQlF6VkVMRU5CUVVNN1VVRlhUU3d3UWtGQk1FSXNRMEZCUXl4SFFVRlhMRVZCUVVVc1RVRkJWeXhGUVVGRkxFMUJRV1U3V1VGRGRrVXNUMEZCVHl4cFEwRkJNRUlzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVUwc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU5xUlN4RFFVRkRPMUZCVlUwc01rSkJRVEpDTEVOQlFVTXNSMEZCVnl4RlFVRkZMRTFCUVdVN1dVRkRNMFFzVDBGQlR5eHJRMEZCTWtJc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUXpGRUxFTkJRVU03VVVGWFRTeFpRVUZaTEVOQlFVTXNZVUZCY1VJc1JVRkJSU3hMUVVGaExFVkJRVVVzVjBGQmIwSXNTVUZCU1R0WlFVTTVSU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVsQlFVa3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zWVVGQllTeERRVUZETEVWQlFVVTdaMEpCUTNaRUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNTVUZCU1N4aFFVRmhMRGhFUVVFNFJDeERRVUZETEVOQlFVTTdZVUZEY0VjN1dVRkRSQ3hKUVVGSkxFdEJRVXNzUlVGQlJUdG5Ra0ZEVUN4SlFVRkpMRlZCUVZVc1IwRkJSeXhMUVVGTExFTkJRVU03WjBKQlEzWkNMRWxCUVVrc1EwRkJReXhyUWtGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXp0dlFrRkJSU3hWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVOb1JpeExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMR0ZCUVdFc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dG5Ra0ZET1VNc1ZVRkJWU3hIUVVGSExHMURRVUUwUWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hoUVVGaExFTkJRVU1zUTBGQlF6dG5Ra0ZETDBRc1NVRkJTU3hSUVVGUk8yOUNRVUZSTEVsQlFVc3NRMEZCUXl4aFFVRmhMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU03WVVGRGVrUTdPMmRDUVVGTkxFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNN1VVRkRMME1zUTBGQlF6dFJRVkZOTEdWQlFXVXNRMEZCUXl4aFFVRnhRanRaUVVONFF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWxCUVVrc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNZVUZCWVN4RFFVRkRMRVZCUVVVN1owSkJRM1pFTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hoUVVGaExHdEZRVUZyUlN4RFFVRkRMRU5CUVVNN1lVRkRlRWM3V1VGRFJDeExRVUZMTEVOQlFVTXNaVUZCWlN4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xbEJReTlDTEVsQlFVc3NRMEZCUXl4aFFVRmhMRU5CUVVNc1IwRkJSeXhUUVVGVExFTkJRVU03VVVGRE0wTXNRMEZCUXp0UlFWVk5MRTFCUVUwN1dVRkRWQ3hOUVVGTkxFbEJRVWtzUjBGQmJVSXNSVUZCUlN4RFFVRkRPMWxCUTJoRExFdEJRVXNzVFVGQlRTeEhRVUZITEVsQlFVa3NTVUZCU1N4RlFVRkZPMmRDUVVOd1FpeEpRVUZKTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhUUVVGVExFVkJRVVU3YjBKQlEzcENMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0dlFrRkRNVUlzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJRenRwUWtGRGRrSTdZVUZEU2p0WlFVTkVMRTlCUVU4c1NVRkJTU3hEUVVGRE8xRkJRMmhDTEVOQlFVTTdVVUZYVXl4dFFrRkJiVUlzUTBGQlF5eEhRVUZITEV0QlFWazdXVUZGZWtNc1NVRkJTU3hEUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZaTEVOQlFVTXNUMEZCVHl4RlFVRkZPMmRDUVVWc1F5eEpRVUZKTEdGQlFXRXNSMEZCUnl4SlFVRkpMRU5CUVVNN1owSkJRM3BDTEVsQlFVa3NaVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUlVGQlJUdHZRa0ZETDBJc1lVRkJZU3hIUVVGSExIVkNRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1JVRkJSU3hKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTTdhVUpCUXpGRk8yZENRVU5FTEVsQlFVa3NaVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUlVGQlJUdHZRa0ZETDBJc1lVRkJZU3hIUVVGakxFbEJRVWtzUTBGQlF5eGpRVUZsTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF6dHBRa0ZETDBVN1owSkJRMFFzU1VGQlNTeGhRVUZoTEVWQlFVVTdiMEpCUTJZc1RVRkJUU3hWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzI5Q1FVTjJSQ3hOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEZOQlFWTXNSVUZCUlN4RFFVRkRMR1ZCUVdVc1EwRkJReXhoUVVGaExFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdiMEpCUTNoRkxGVkJRVlVzUTBGQlF5eFhRVUZYTEVOQlFWa3NSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dHBRa0ZETVVRN1lVRkRTanRSUVVOTUxFTkJRVU03VVVGUlV5eHBRa0ZCYVVJc1MwRkJWeXhEUVVGRE8xRkJVemRDTEc5Q1FVRnZRaXhMUVVGWExFTkJRVU03VVVGVGFFTXNaVUZCWlN4TFFVRlhMRU5CUVVNN1VVRlJNMElzWVVGQllTeExRVUZYTEVOQlFVTTdVVUZSZWtJc1owSkJRV2RDTEV0QlFWY3NRMEZCUXp0UlFWTTVRaXhuUWtGQlowSTdXVUZEY0VJc1RVRkJUU3hUUVVGVExFZEJRVWNzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETzFsQlF5OUVMRTFCUVUwc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRzlDUVVGdlFpeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRelZGTEUxQlFVMHNTMEZCU3l4SFFVRkhMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEZUVNc1NVRkJTU3hWUVVGVkxFZEJRVWNzUzBGQlN5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRPMWxCUTNwRUxFOUJRVThzVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRk5CUVZNc1NVRkJTU3hWUVVGVkxFVkJRVVVzUTBGQlF5eEZRVUZGTzJkQ1FVTXhSQ3hWUVVGVkxFVkJRVVVzUTBGQlF6dGhRVU5vUWp0WlFVTkVMRTlCUVU4c1IwRkJSeXhUUVVGVExFbEJRVWtzVlVGQlZTeEZRVUZGTEVOQlFVTTdVVUZEZUVNc1EwRkJRenM3U1VGMFZITkNMRFpDUVVGbExFZEJRVmtzU1VGQlNTeERRVUZETzBsQlUzcERMQ3REUVVGcFF5eEhRVUZaTEV0QlFVc3NRMEZCUXp0SlFYbENjRVE3VVVGQldpeHpRa0ZCVXl4RlFVRkZPenMyUTBGQk5rTTdTVUZSTjBNN1VVRkJXQ3h4UWtGQlVTeEZRVUZGT3pzd1JFRkJhVVE3U1VGVGFFUTdVVUZCV0N4eFFrRkJVU3hGUVVGRk96dHZSRUZCYTBZN1NVRlZka1E3VVVGQmNrTXNjVUpCUVZFc1EwRkJReXhGUVVGRkxHZENRVUZuUWl4RlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVGRE96dDVSRUZCYlVZN1NVRlhOVWM3VVVGQldDeHhRa0ZCVVN4RlFVRkZPemhFUVVFeVFpeGpRVUZqTEc5Q1FVRmtMR05CUVdNN2VVUkJRVTA3U1VGcFVEbEVMRTlCUVU4c1lVRkJZU3hEUVVGRE8wRkJRM3BDTEVOQlFVTTdRVUYwVmtRc2IwUkJjMVpESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgQmFzZUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG4gICAgY29uc3RydWN0ZWRDYWxsYmFjaygpIHsgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkgeyB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7IH1cbiAgICBhZG9wdGVkQ2FsbGJhY2soKSB7IH1cbn1cbmV4cG9ydHMuQmFzZUNvbnRyb2xsZXIgPSBCYXNlQ29udHJvbGxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFtRnpaVU52Ym5SeWIyeHNaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJOc2FXVnVkQzkwY3k5c2FXSXZRbUZ6WlVOdmJuUnliMnhzWlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZQUVN4TlFVRmhMR05CUVdNN1NVRkZka0lzWjBKQlFXZENMRU5CUVVNN1NVRlRVQ3h0UWtGQmJVSXNTMEZCU3l4RFFVRkRPMGxCVVhwQ0xHbENRVUZwUWl4TFFVRkxMRU5CUVVNN1NVRlRka0lzYjBKQlFXOUNMRXRCUVVzc1EwRkJRenRKUVZNeFFpeGxRVUZsTEV0QlFVc3NRMEZCUXp0RFFVTnNRenRCUVhSRFJDeDNRMEZ6UTBNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBDbGllbnRNb2RlbF8xO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBCRE9Nb2RlbF8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET01vZGVsXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5jbGllbnQvdXRpbHMvdXRpbFwiKTtcbmNvbnN0IGZyYW1ld29ya18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZnJhbWV3b3JrXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgTG9nZ2VyXzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvTG9nZ2VyXCIpO1xuY29uc3QgRGF0YWJhc2VNYW5hZ2VyXzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvRGF0YWJhc2VNYW5hZ2VyXCIpO1xuY29uc3QgV2F0Y2hlZF8xID0gcmVxdWlyZShcIn5iZG8vbGliL1dhdGNoZWRcIik7XG5jb25zdCB1dGlsXzIgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgTW9kZWxSZWdpc3RyeV8xID0gcmVxdWlyZShcIn5iZG8vbGliL01vZGVsUmVnaXN0cnlcIik7XG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyXzEuTG9nZ2VyKCk7XG5jb25zdCBkYXRhYmFzZU1hbmFnZXIgPSBEYXRhYmFzZU1hbmFnZXJfMS5EYXRhYmFzZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbmxldCBDbGllbnRNb2RlbCA9IENsaWVudE1vZGVsXzEgPSBjbGFzcyBDbGllbnRNb2RlbCBleHRlbmRzIEJET01vZGVsXzEuQkRPTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmlzQ2xpZW50TW9kZWwgPSB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2VCeUlEKGlkKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IG1vZGVsID0gTW9kZWxSZWdpc3RyeV8xLk1vZGVsUmVnaXN0cnkuZ2V0SW5zdGFuY2UoKS5nZXRNb2RlbEJ5SWQoaWQsIHRoaXMpO1xuICAgICAgICAgICAgaWYgKCFtb2RlbClcbiAgICAgICAgICAgICAgICBtb2RlbCA9IG5ldyB0aGlzKCk7XG4gICAgICAgICAgICBjb25zdCBkYXRhRnJvbUxvY2FsREIgPSBhd2FpdCBkYXRhYmFzZU1hbmFnZXJcbiAgICAgICAgICAgICAgICAuZGF0YWJhc2UobW9kZWwuZGF0YWJhc2VOYW1lKVxuICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKG1vZGVsLmNvbGxlY3Rpb25OYW1lKVxuICAgICAgICAgICAgICAgIC5nZXQoaWQpO1xuICAgICAgICAgICAgaWYgKGRhdGFGcm9tTG9jYWxEQikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBlbmRpbmdQcm9taXNlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGFGcm9tTG9jYWxEQikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YUZyb21Mb2NhbERCLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGVsRWxlbSA9IFJlZmxlY3QuZ2V0KG1vZGVsLCBrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW0gPSBkYXRhRnJvbUxvY2FsREJba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3JyZXNwb25kaW5nTGlzdExpa2VEQiA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsRWxlbSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVzcG9uZGluZ0xpc3RMaWtlREIgPSBtb2RlbEVsZW0ubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgQ2xpZW50TW9kZWxfMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmdldFJlZmVyZW5jZVN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtIGluc3RhbmNlb2YgQXJyYXkgJiYgdXRpbF8yLmRpZmZlcmVuY2UoY29ycmVzcG9uZGluZ0xpc3RMaWtlREIsIGVsZW0pLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBlbmRpbmdJdGVtcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZWxlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnJhbWV3b3JrXzEuaXNSZWZlcmVuY2VTdHJpbmcoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZlBhcnRzID0gaXRlbS5zcGxpdChcIjpcIilbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSByZWZQYXJ0c1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtsYXNzID0gcmVxdWlyZShgLi8uLi9tb2RlbHMvJHtjbGFzc05hbWV9LnRzYClbY2xhc3NOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmdJdGVtcy5wdXNoKGtsYXNzLmdldEluc3RhbmNlQnlJRChyZWZQYXJ0c1syXSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nUHJvbWlzZXMucHVzaChQcm9taXNlLmFsbChwZW5kaW5nSXRlbXMpLnRoZW4oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChmcmFtZXdvcmtfMS5pc1JlZmVyZW5jZVN0cmluZyhlbGVtKSAmJiBlbGVtICE9PSBtb2RlbC5nZXRSZWZlcmVuY2VTdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZlBhcnRzID0gZWxlbS5zcGxpdChcIjpcIilbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gcmVmUGFydHNbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2xhc3MgPSByZXF1aXJlKGAuLy4uL21vZGVscy8ke2NsYXNzTmFtZX0udHNgKVtjbGFzc05hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmdQcm9taXNlcy5wdXNoKGtsYXNzLmdldEluc3RhbmNlQnlJRChyZWZQYXJ0c1syXSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHBlbmRpbmdQcm9taXNlcyk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihtb2RlbCwgZGF0YUZyb21Mb2NhbERCKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbW9kZWwuaWQuaW5jbHVkZXMoXCJwZW5kaW5nXCIpKVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKG1vZGVsKTtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2VzQnlBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIE1vZGVsUmVnaXN0cnlfMS5Nb2RlbFJlZ2lzdHJ5LmdldEluc3RhbmNlKCkuZ2V0TW9kZWxzQnlBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpO1xuICAgIH1cbiAgICBnZXROYW1lc3BhY2VkU3RvcmFnZShrZXksIG5zUHJvcCwgZm9yY2VOUykge1xuICAgICAgICByZXR1cm4gdXRpbF8xLmdldE5hbWVzcGFjZWRTdG9yYWdlKHRoaXMsIGtleSwgbnNQcm9wLCBmb3JjZU5TKTtcbiAgICB9XG4gICAgc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2Uoa2V5LCBuZXdWYWwsIG5zUHJvcCkge1xuICAgICAgICByZXR1cm4gdXRpbF8xLnNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKHRoaXMsIGtleSwgbmV3VmFsLCBuc1Byb3ApO1xuICAgIH1cbiAgICBkZWxldGVGcm9tTmFtZXNwYWNlZFN0b3JhZ2Uoa2V5LCBuc1Byb3ApIHtcbiAgICAgICAgcmV0dXJuIHV0aWxfMS5kZWxldGVGcm9tTmFtZXNwYWNlZFN0b3JhZ2UodGhpcywga2V5LCBuc1Byb3ApO1xuICAgIH1cbiAgICBhc3luYyBzYXZlKGF0dHIpIHtcbiAgICAgICAgY29uc3QgZGVmaW5lZEF0dHJpYnV0ZXMgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMsIFwiZGVmaW5lZEF0dHJpYnV0ZXNcIik7XG4gICAgICAgIGlmICghZGVmaW5lZEF0dHJpYnV0ZXMgfHwgYXR0ciAmJiAhZGVmaW5lZEF0dHJpYnV0ZXMuaGFzKGF0dHIpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBkZWZpbmVkIGF0dHJpYnV0ZXNcIik7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBhdHRyID8gW2F0dHJdIDogZGVmaW5lZEF0dHJpYnV0ZXMua2V5cygpO1xuICAgICAgICBjb25zdCB1bnNhdmVkQ2hhbmdlcyA9IGF3YWl0IHRoaXMuZ2V0VW5zYXZlZENoYW5nZXMoKTtcbiAgICAgICAgY29uc3QgdG9TYXZlID0ge307XG4gICAgICAgIGNvbnN0IHNlbmRUb1NlcnZlciA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBpZiAodW5zYXZlZENoYW5nZXMuaGFzT3duUHJvcGVydHkoYXR0cmlidXRlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0ckF0dHIgPSBhdHRyaWJ1dGU7XG4gICAgICAgICAgICAgICAgbGV0IHByb3h5VmFsID0gdXRpbF8yLmdldFByb3h5VGFyZ2V0KHVuc2F2ZWRDaGFuZ2VzW3N0ckF0dHJdKTtcbiAgICAgICAgICAgICAgICBpZiAocHJveHlWYWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBwcm94eVZhbCA9IHByb3h5VmFsLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBDbGllbnRNb2RlbF8xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZ2V0UmVmZXJlbmNlU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbF8yLmdldFByb3h5VGFyZ2V0KGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByb3h5VmFsIGluc3RhbmNlb2YgQ2xpZW50TW9kZWxfMSlcbiAgICAgICAgICAgICAgICAgICAgcHJveHlWYWwgPSBwcm94eVZhbC5nZXRSZWZlcmVuY2VTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBsZXQgd2lsZENhcmRNZXRhZGF0YSA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLCBzdHJBdHRyKTtcbiAgICAgICAgICAgICAgICBpZiAod2lsZENhcmRNZXRhZGF0YSBpbnN0YW5jZW9mIFdhdGNoZWRfMS5XYXRjaGVkKVxuICAgICAgICAgICAgICAgICAgICB3aWxkQ2FyZE1ldGFkYXRhID0gd2lsZENhcmRNZXRhZGF0YS5zdWJPYmplY3Q7XG4gICAgICAgICAgICAgICAgaWYgKCF3aWxkQ2FyZE1ldGFkYXRhLmRvTm90UGVyc2lzdClcbiAgICAgICAgICAgICAgICAgICAgdG9TYXZlW3N0ckF0dHJdID0gcHJveHlWYWw7XG4gICAgICAgICAgICAgICAgaWYgKCF3aWxkQ2FyZE1ldGFkYXRhLm5vU2VydmVySW50ZXJhY3Rpb24pXG4gICAgICAgICAgICAgICAgICAgIHNlbmRUb1NlcnZlcltzdHJBdHRyXSA9IHByb3h5VmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModG9TYXZlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBkYXRhYmFzZU1hbmFnZXJcbiAgICAgICAgICAgICAgICAgICAgLmRhdGFiYXNlKHRoaXMuZGF0YWJhc2VOYW1lKVxuICAgICAgICAgICAgICAgICAgICAuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb25OYW1lKVxuICAgICAgICAgICAgICAgICAgICAudXBkYXRlKHRoaXMuaWQsIHRvU2F2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoc2VuZFRvU2VydmVyKS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBzZW5kICR7SlNPTi5zdHJpbmdpZnkoc2VuZFRvU2VydmVyKX0gdG8gc2VydmVyYCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5zYXZlZENoYW5nZXMpO1xuICAgIH1cbiAgICBkaXNjYXJkKF9hdHRyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBhc3luYyBnZXRVbnNhdmVkQ2hhbmdlcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbGxlY3Rpb25OYW1lKVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiTm8gY29sbGVjdGlvbk5hbWUgcHJvdmlkZWRcIik7XG4gICAgICAgIGNvbnN0IHVuc2F2ZWRDaGFuZ2VzID0ge307XG4gICAgICAgIGxldCBkYkNvbGxlY3Rpb24gPSBhd2FpdCBkYXRhYmFzZU1hbmFnZXIuZGF0YWJhc2UoXCJkZWZhdWx0XCIpLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uTmFtZSkuZ2V0KHRoaXMuaWQpO1xuICAgICAgICBjb25zdCBkZWZpbmVkQXR0cmlidXRlcyA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcywgXCJkZWZpbmVkQXR0cmlidXRlc1wiKTtcbiAgICAgICAgZGJDb2xsZWN0aW9uID0gZGJDb2xsZWN0aW9uIHx8IHt9O1xuICAgICAgICBpZiAoZGVmaW5lZEF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYXR0ciBvZiBkZWZpbmVkQXR0cmlidXRlcy5rZXlzKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJBdHRyID0gYXR0ci50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJWYWwgPSB1dGlsXzIuZ2V0UHJveHlUYXJnZXQodGhpc1thdHRyXSk7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxfMi5pc0FycmF5KGF0dHJWYWwpICYmIHV0aWxfMi5kaWZmZXJlbmNlKGF0dHJWYWwsIGRiQ29sbGVjdGlvbltzdHJBdHRyXSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F2ZWRDaGFuZ2VzW3N0ckF0dHJdID0gdGhpc1thdHRyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodXRpbF8yLmlzT2JqZWN0KGF0dHJWYWwpICYmICF1dGlsXzIuaXNFcXVhbChhdHRyVmFsLCBkYkNvbGxlY3Rpb25bc3RyQXR0cl0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F2ZWRDaGFuZ2VzW3N0ckF0dHJdID0gdGhpc1thdHRyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodXRpbF8yLmlzUHJpbWl0aXZlKGF0dHJWYWwpICYmIGF0dHJWYWwgIT09IGRiQ29sbGVjdGlvbltzdHJBdHRyXSkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdmVkQ2hhbmdlc1tzdHJBdHRyXSA9IHRoaXNbYXR0cl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5zYXZlZENoYW5nZXMpO1xuICAgIH1cbiAgICBvblR5cGVDaGVja0ZhaWwoZXJyb3IpIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbn07XG5DbGllbnRNb2RlbC5pc0NsaWVudE1vZGVsID0gdHJ1ZTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcbl0sIENsaWVudE1vZGVsLnByb3RvdHlwZSwgXCJpc0NsaWVudE1vZGVsXCIsIHZvaWQgMCk7XG5DbGllbnRNb2RlbCA9IENsaWVudE1vZGVsXzEgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoKVxuXSwgQ2xpZW50TW9kZWwpO1xuZXhwb3J0cy5DbGllbnRNb2RlbCA9IENsaWVudE1vZGVsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTJ4cFpXNTBUVzlrWld3dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyTnNhV1Z1ZEM5MGN5OXNhV0l2UTJ4cFpXNTBUVzlrWld3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQkxITkVRVUZyUlR0QlFVTnNSU3huUkVGQk5rTTdRVUZETjBNc05rTkJRVzFJTzBGQlEyNUlMRzlFUVVGNVJEdEJRVU42UkN4clJFRkJkVVU3UVVGRGRrVXNLME5CUVRSRE8wRkJRelZETEdsRlFVRTRSRHRCUVVVNVJDdzRRMEZCTWtNN1FVRkRNME1zTUVOQlFYTkhPMEZCUTNSSExEQkVRVUYxUkR0QlFVVjJSQ3hOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEdWQlFVMHNSVUZCUlN4RFFVRkRPMEZCUXpWQ0xFMUJRVTBzWlVGQlpTeEhRVUZITEdsRFFVRmxMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03UVVGWGRFUXNTVUZCWVN4WFFVRlhMRzFDUVVGNFFpeE5RVUZoTEZkQlFWa3NVMEZCVVN4dFFrRkJVVHRKUVVGNlF6czdVVUZyUW1kRExHdENRVUZoTEVkQlFWa3NTVUZCU1N4RFFVRkRPMGxCYTA4NVJDeERRVUZETzBsQmJFNVZMRTFCUVUwc1EwRkJReXhsUVVGbExFTkJRVEpETEVWQlFWYzdVVUZETDBVc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlowSXNTMEZCU3l4RlFVRkZMRTlCUVU4c1JVRkJSU3hGUVVGRk8xbEJRMmhFTEVsQlFVa3NTMEZCU3l4SFFVRkhMRFpDUVVGaExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RFFVRkRMRVZCUVVVc1JVRkJSU3hKUVVGSkxFTkJRV3RDTEVOQlFVTTdXVUZEYUVZc1NVRkJTU3hEUVVGRExFdEJRVXM3WjBKQlFVVXNTMEZCU3l4SFFVRkhMRWxCUVVrc1NVRkJTU3hGUVVGRkxFTkJRVU03V1VGREwwSXNUVUZCVFN4bFFVRmxMRWRCUVVjc1RVRkJUU3hsUVVGbE8ybENRVU40UXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF6dHBRa0ZETlVJc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eGpRVUZqTEVOQlFVTTdhVUpCUTJoRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTmlMRWxCUVVrc1pVRkJaU3hGUVVGRk8yZENRVU5xUWl4TlFVRk5MR1ZCUVdVc1IwRkJlVUlzUlVGQlJTeERRVUZETzJkQ1FVTnFSQ3hMUVVGTExFMUJRVTBzUjBGQlJ5eEpRVUZKTEdWQlFXVXNSVUZCUlR0dlFrRkRMMElzU1VGQlNTeGxRVUZsTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8zZENRVU55UXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenQzUWtGRE1VTXNTVUZCU1N4TFFVRjVRaXhEUVVGRE8zZENRVU01UWl4SlFVRkpMRWxCUVVrc1IwRkJSeXhsUVVGbExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdkMEpCUTJoRExFbEJRVWtzZFVKQlFYVkNMRWRCUVVjc1JVRkJSU3hEUVVGRE8zZENRVVZxUXl4SlFVRkpMRk5CUVZNc1dVRkJXU3hMUVVGTExFVkJRVVU3TkVKQlF6VkNMSFZDUVVGMVFpeEhRVUZITEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJUdG5RMEZETjBNc1NVRkJTU3hKUVVGSkxGbEJRVmtzWVVGQlZ6dHZRMEZCUlN4UFFVRlBMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNSVUZCUlN4RFFVRkRPMmREUVVOc1JTeFBRVUZQTEVsQlFVa3NRMEZCUXpzMFFrRkRhRUlzUTBGQlF5eERRVUZETEVOQlFVTTdlVUpCUTA0N2QwSkJRMFFzU1VGQlNTeEpRVUZKTEZsQlFWa3NTMEZCU3l4SlFVRkpMR2xDUVVGVkxFTkJRVU1zZFVKQlFYVkNMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zVFVGQlRTeEZRVUZGT3pSQ1FVTXpSU3hOUVVGTkxGbEJRVmtzUjBGQmVVSXNSVUZCUlN4RFFVRkRPelJDUVVNNVF5eExRVUZMTEVsQlFVa3NTVUZCU1N4SlFVRkpMRWxCUVVrc1JVRkJSVHRuUTBGRGJrSXNTVUZCU1N3MlFrRkJhVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0dlEwRkRla0lzVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0dlEwRkRjRU1zVFVGQlRTeFRRVUZUTEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yOURRVU01UWl4TFFVRkxMRWRCUVVjc1QwRkJUeXhEUVVGRExHVkJRV1VzVTBGQlV5eExRVUZMTEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenR2UTBGRE1VUXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zWlVGQlpTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4RlFVRkZPM2REUVVOcVJTeEpRVUZKTEVkQlFVY3NUVUZCVFN4RFFVRkRPMjlEUVVOc1FpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmxEUVVOUU96WkNRVU5LT3pSQ1FVTkVMR1ZCUVdVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzNsQ1FVTXhSRHMyUWtGQlRTeEpRVUZKTERaQ1FVRnBRaXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVsQlFVa3NTMEZCU3l4TFFVRkxMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNSVUZCUlRzMFFrRkRka1VzVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXpzMFFrRkRjRU1zVFVGQlRTeFRRVUZUTEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE96UkNRVU01UWl4TFFVRkxMRWRCUVVjc1QwRkJUeXhEUVVGRExHVkJRV1VzVTBGQlV5eExRVUZMTEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenMwUWtGRE1VUXNaVUZCWlN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zWlVGQlpTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4RlFVRkZPMmREUVVOd1JTeEpRVUZKTEVkQlFVY3NUVUZCVFN4RFFVRkRPelJDUVVOc1FpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPM2xDUVVOUU8zRkNRVU5LTzJsQ1FVTktPMmRDUVVORUxFMUJRVTBzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJRenRuUWtGRGJrTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzWlVGQlpTeERRVUZETEVOQlFVTTdZVUZEZWtNN1dVRkRSQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1UwRkJVeXhEUVVGRE8yZENRVUZGTEU5QlFVOHNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJRM3BFTEU5QlFVOHNUMEZCVHl4RlFVRkZMRU5CUVVNN1VVRkRja0lzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEVUN4RFFVRkRPMGxCWVUwc1RVRkJUU3hEUVVGRExIZENRVUYzUWl4RFFVRXlReXhWUVVFd1FqdFJRVU4yUnl4UFFVRlBMRFpDUVVGaExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNjVUpCUVhGQ0xFTkJRVU1zVlVGQlZTeERRVUZyUWl4RFFVRkRPMGxCUXpGR0xFTkJRVU03U1VGWlRTeHZRa0ZCYjBJc1EwRkJReXhIUVVGWExFVkJRVVVzVFVGQlpTeEZRVUZGTEU5QlFXZENPMUZCUTNSRkxFOUJRVThzTWtKQlFXOUNMRU5CUVVNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUlVGQlJTeE5RVUZOTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkROVVFzUTBGQlF6dEpRVmxOTERCQ1FVRXdRaXhEUVVGRExFZEJRVmNzUlVGQlJTeE5RVUZYTEVWQlFVVXNUVUZCWlR0UlFVTjJSU3hQUVVGUExHbERRVUV3UWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFVkJRVVVzVFVGQlRTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUTJwRkxFTkJRVU03U1VGWFRTd3lRa0ZCTWtJc1EwRkJReXhIUVVGWExFVkJRVVVzVFVGQlpUdFJRVU16UkN4UFFVRlBMR3REUVVFeVFpeERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRE1VUXNRMEZCUXp0SlFWRk5MRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlowTTdVVUZET1VNc1RVRkJUU3hwUWtGQmFVSXNSMEZCUnl4elFrRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeHRRa0ZCYlVJc1EwRkJReXhEUVVGRE8xRkJRMnBGTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzU1VGQlNTeEpRVUZKTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRPMWxCUVVVc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5dzBRa0ZCTkVJc1EwRkJReXhEUVVGRE8xRkJRemxITEUxQlFVMHNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkROVVFzVFVGQlRTeGpRVUZqTEVkQlFXMUNMRTFCUVUwc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RlFVRkZMRU5CUVVNN1VVRkRkRVVzVFVGQlRTeE5RVUZOTEVkQlFXMUNMRVZCUVVVc1EwRkJRenRSUVVOc1F5eE5RVUZOTEZsQlFWa3NSMEZCYlVJc1JVRkJSU3hEUVVGRE8xRkJRM2hETEV0QlFVc3NUVUZCVFN4VFFVRlRMRWxCUVVrc1ZVRkJWU3hGUVVGRk8xbEJRMmhETEVsQlFVa3NZMEZCWXl4RFFVRkRMR05CUVdNc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJUdG5Ra0ZETVVNc1RVRkJUU3hQUVVGUExFZEJRVmNzVTBGQlV5eERRVUZETzJkQ1FVTnNReXhKUVVGSkxGRkJRVkVzUjBGQlJ5eHhRa0ZCWXl4RFFVRkRMR05CUVdNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjJSQ3hKUVVGSkxGRkJRVkVzV1VGQldTeExRVUZMTEVWQlFVVTdiMEpCUXpOQ0xGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFVkJRVVU3ZDBKQlF6ZENMRWxCUVVrc1NVRkJTU3haUVVGWkxHRkJRVmNzUlVGQlJUczBRa0ZETjBJc1QwRkJUeXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1EwRkJRenQ1UWtGRGNFTTdkMEpCUTBRc1QwRkJUeXh4UWtGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMjlDUVVOb1F5eERRVUZETEVOQlFVTXNRMEZCUXp0cFFrRkRUanRuUWtGRFJDeEpRVUZKTEZGQlFWRXNXVUZCV1N4aFFVRlhPMjlDUVVGRkxGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzUTBGQlF6dG5Ra0ZGT1VVc1NVRkJTU3huUWtGQlowSXNSMEZCWXl3NFFrRkJiVUlzUTBGQlF5eEpRVUZKTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1owSkJRM0pGTEVsQlFVa3NaMEpCUVdkQ0xGbEJRVmtzYVVKQlFVODdiMEpCUVVVc1owSkJRV2RDTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU1zVTBGQmMwSXNRMEZCUXp0blFrRkZjRWNzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExGbEJRVms3YjBKQlFVVXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF6dG5Ra0ZGTDBRc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRzFDUVVGdFFqdHZRa0ZCUlN4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETzJGQlF5OUZPMU5CUTBvN1VVRkRSQ3hKUVVGSk8xbEJRMEVzU1VGQlNTeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJUdG5Ra0ZETlVJc1RVRkJUU3hsUVVGbE8zRkNRVU5vUWl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF6dHhRa0ZETTBJc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTTdjVUpCUXk5Q0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8yRkJRMmhETzFsQlEwUXNTVUZCU1N4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEUxQlFVMDdaMEpCUVVVc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1dVRkJXU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzFOQlEzaEhPMUZCUVVNc1QwRkJUeXhMUVVGTExFVkJRVVU3V1VGRFdpeFBRVUZQTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VTBGRGFFTTdVVUZEUkN4UFFVRlBMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zWTBGQmJVTXNRMEZCUXl4RFFVRkRPMGxCUTJoRkxFTkJRVU03U1VGVFRTeFBRVUZQTEVOQlFVTXNTMEZCYVVNN1VVRkROVU1zVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eERRVUZETzBsQlF5OURMRU5CUVVNN1NVRlJUU3hMUVVGTExFTkJRVU1zYVVKQlFXbENPMUZCUXpGQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXp0WlFVRkZMRTlCUVU4c1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5dzBRa0ZCTkVJc1EwRkJReXhEUVVGRE8xRkJRemxGTEUxQlFVMHNZMEZCWXl4SFFVRnpRaXhGUVVGRkxFTkJRVU03VVVGRE4wTXNTVUZCU1N4WlFVRlpMRWRCUVVjc1RVRkJUU3hsUVVGbExFTkJRVU1zVVVGQlVTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU14Unl4TlFVRk5MR2xDUVVGcFFpeEhRVUZITEhOQ1FVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNN1VVRkRha1VzV1VGQldTeEhRVUZITEZsQlFWa3NTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRiRU1zU1VGQlNTeHBRa0ZCYVVJc1JVRkJSVHRaUVVOdVFpeExRVUZMTEUxQlFVMHNTVUZCU1N4SlFVRkpMR2xDUVVGcFFpeERRVUZETEVsQlFVa3NSVUZCUlN4RlFVRkZPMmRDUVVONlF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03WjBKQlEyaERMRTFCUVUwc1QwRkJUeXhIUVVGSExIRkNRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlF6TkRMRWxCUVVrc1kwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEdsQ1FVRlZMRU5CUVVNc1QwRkJUeXhGUVVGRkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSVHR2UWtGRGRFUXNZMEZCWlN4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0cFFrRkRNVVE3Y1VKQlFVMHNTVUZCU1N4bFFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEZRVUZGTzI5Q1FVTnlSQ3hqUVVGbExFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8ybENRVU14UkR0eFFrRkJUU3hKUVVGSkxHdENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1QwRkJUeXhMUVVGTExGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlR0dlFrRkRha1FzWTBGQlpTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dHBRa0ZETVVRN1lVRkRTanRUUVVOS08xRkJRMFFzVDBGQlR5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRE8wbEJRek5ETEVOQlFVTTdTVUZWVXl4bFFVRmxMRU5CUVVNc1MwRkJXVHRSUVVOc1F5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dEpRVU5vUXl4RFFVRkRPME5CUlVvc1EwRkJRVHRCUVRGUE1FSXNlVUpCUVdFc1IwRkJXU3hKUVVGSkxFTkJRVU03UVVGUmVrTTdTVUZCV0N4eFFrRkJVU3hGUVVGRk96dHJSRUZCSzBNN1FVRnNRbXBFTEZkQlFWYzdTVUZFZGtJc05FSkJRV1VzUlVGQlJUdEhRVU5NTEZkQlFWY3NRMEZ2VUhaQ08wRkJjRkJaTEd0RFFVRlhJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBCRE9Sb3V0ZV8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET1JvdXRlXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IExvZ2dlcl8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0xvZ2dlclwiKTtcbmNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXJfMS5Mb2dnZXIoKTtcbmNsYXNzIENsaWVudFJvdXRlIGV4dGVuZHMgQkRPUm91dGVfMS5CRE9Sb3V0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuaXNDbGllbnRSb3V0ZSA9IHRydWU7XG4gICAgfVxuICAgIGdldCByb3V0ZXIoKSB7XG4gICAgICAgIGNvbnN0IHJvdXRlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIHRoaXMucm91dGVzKSB7XG4gICAgICAgICAgICByb3V0ZXNbYCR7dGhpcy5yb3V0ZXJOYW1lU3BhY2V9LyR7cm91dGV9YC5yZXBsYWNlKFwiLy9cIiwgXCIvXCIpXSA9IHRoaXMuaGFuZGxlR2V0LmJpbmQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvdXRlcztcbiAgICB9XG4gICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBzdXBlci50ZW1wbGF0ZVBhcmFtcyhwYXJhbXMpO1xuICAgIH1cbiAgICBhc3luYyBoYW5kbGVHZXQocGFyYW1zKSB7XG4gICAgICAgIGxvZ2dlci5sb2codXRpbF8xLm1lcmdlKGF3YWl0IHRoaXMudGVtcGxhdGVQYXJhbXNGcm9tU2VydmVyKCksIGF3YWl0IHRoaXMudGVtcGxhdGVQYXJhbXMocGFyYW1zKSkpO1xuICAgIH1cbiAgICBhc3luYyB0ZW1wbGF0ZVBhcmFtc0Zyb21TZXJ2ZXIoKSB7XG4gICAgICAgIGxldCB1cmxUb0Fza0ZvciA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICBpZiAoIXVybFRvQXNrRm9yKVxuICAgICAgICAgICAgdXJsVG9Bc2tGb3IgPSBgL2A7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdYLUdhbWUtQXMtSlNPTic6ICd0cnVlJyB9KTtcbiAgICAgICAgcmV0dXJuIChhd2FpdCBmZXRjaCh1cmxUb0Fza0ZvciwgeyBoZWFkZXJzIH0pKS5qc29uKCk7XG4gICAgfVxufVxuZXhwb3J0cy5DbGllbnRSb3V0ZSA9IENsaWVudFJvdXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTJ4cFpXNTBVbTkxZEdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyTnNhV1Z1ZEM5MGN5OXNhV0l2UTJ4cFpXNTBVbTkxZEdVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN4blJFRkJOa003UVVGRE4wTXNNRU5CUVhkRE8wRkJRM2hETEN0RFFVRTBRenRCUVVVMVF5eE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMR1ZCUVUwc1JVRkJSU3hEUVVGRE8wRkJWVFZDTEUxQlFXRXNWMEZCV1N4VFFVRlJMRzFDUVVGUk8wbEJRWHBET3p0UlFWRnZRaXhyUWtGQllTeEhRVUZaTEVsQlFVa3NRMEZCUXp0SlFYTkViRVFzUTBGQlF6dEpRVGxEUnl4SlFVRlhMRTFCUVUwN1VVRkRZaXhOUVVGTkxFMUJRVTBzUjBGQmNVTXNSVUZCUlN4RFFVRkRPMUZCUTNCRUxFdEJRVXNzVFVGQlRTeExRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSVHRaUVVNM1FpeE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1pVRkJaU3hKUVVGSkxFdEJRVXNzUlVGQlJTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU0zUmp0UlFVTkVMRTlCUVU4c1RVRkJUU3hEUVVGRE8wbEJRMnhDTEVOQlFVTTdTVUZYVXl4TFFVRkxMRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRWE5DTzFGQlEycEVMRTlCUVU4c1MwRkJTeXhEUVVGRExHTkJRV01zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVTjRReXhEUVVGRE8wbEJVMU1zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRnpRanRSUVVNMVF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRmxCUVVzc1EwRkJReXhOUVVGTkxFbEJRVWtzUTBGQlF5eDNRa0ZCZDBJc1JVRkJSU3hGUVVGRkxFMUJRVTBzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGFFY3NRMEZCUXp0SlFWVlBMRXRCUVVzc1EwRkJReXgzUWtGQmQwSTdVVUZEYkVNc1NVRkJTU3hYUVVGWExFZEJRVWNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXp0UlFVTndReXhKUVVGSkxFTkJRVU1zVjBGQlZ6dFpRVUZGTEZkQlFWY3NSMEZCUnl4SFFVRkhMRU5CUVVNN1VVRkRjRU1zVFVGQlRTeFBRVUZQTEVkQlFVY3NTVUZCU1N4UFFVRlBMRU5CUVVNc1JVRkJSU3huUWtGQlowSXNSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRekZFTEU5QlFVOHNRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhYUVVGWExFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03U1VGRE1VUXNRMEZCUXp0RFFVTktPMEZCT1VSRUxHdERRVGhFUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQkRPQ29uZmlnTWFuYWdlcl8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET0NvbmZpZ01hbmFnZXJcIik7XG5jbGFzcyBDb25maWdNYW5hZ2VyIGV4dGVuZHMgQkRPQ29uZmlnTWFuYWdlcl8xLkJET0NvbmZpZ01hbmFnZXIge1xuICAgIHNldChfY29uZmlnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgbG9hZChfY29uZmlnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgZ2V0Q2FjaGUoX2NvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIHNldENhY2hlKF9jb25maWcsIF92YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxufVxuZXhwb3J0cy5Db25maWdNYW5hZ2VyID0gQ29uZmlnTWFuYWdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyOXVabWxuVFdGdVlXZGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDJ4cFlpOURiMjVtYVdkTllXNWhaMlZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUVzWjBWQlFUWkVPMEZCV1RkRUxFMUJRV0VzWVVGQll5eFRRVUZSTEcxRFFVRm5RanRKUVZONFF5eEhRVUZITEVOQlFVTXNUMEZCWlR0UlFVTjBRaXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhsQ1FVRjVRaXhEUVVGRExFTkJRVU03U1VGREwwTXNRMEZCUXp0SlFWVlRMRWxCUVVrc1EwRkJReXhQUVVGbE8xRkJRekZDTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2VVSkJRWGxDTEVOQlFVTXNRMEZCUXp0SlFVTXZReXhEUVVGRE8wbEJWVk1zVVVGQlVTeERRVUZETEU5QlFXVTdVVUZET1VJc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eDVRa0ZCZVVJc1EwRkJReXhEUVVGRE8wbEJReTlETEVOQlFVTTdTVUZYVXl4UlFVRlJMRU5CUVVNc1QwRkJaU3hGUVVGRkxFMUJRVmM3VVVGRE0wTXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4RFFVRkRPMGxCUXk5RExFTkJRVU03UTBGRFNqdEJRV3BFUkN4elEwRnBSRU1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJET0RhdGFiYXNlTWFuYWdlcl8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET0RhdGFiYXNlTWFuYWdlclwiKTtcbmNvbnN0IGxvY2FsZm9yYWdlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibG9jYWxmb3JhZ2VcIikpO1xuY2xhc3MgRGF0YWJhc2VNYW5hZ2VyIGV4dGVuZHMgQkRPRGF0YWJhc2VNYW5hZ2VyXzEuQkRPRGF0YWJhc2VtYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kYXRhYmFzZXMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFEYXRhYmFzZU1hbmFnZXIuaW5zdGFuY2UpXG4gICAgICAgICAgICBEYXRhYmFzZU1hbmFnZXIuaW5zdGFuY2UgPSBuZXcgRGF0YWJhc2VNYW5hZ2VyKCk7XG4gICAgICAgIHJldHVybiBEYXRhYmFzZU1hbmFnZXIuaW5zdGFuY2U7XG4gICAgfVxuICAgIGRhdGFiYXNlKG5hbWUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0YWJhc2UgPSBuYW1lO1xuICAgICAgICBpZiAoIXRoaXMuZGF0YWJhc2VzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFiYXNlcy5zZXQobmFtZSwgbG9jYWxmb3JhZ2VfMS5kZWZhdWx0LmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGRyaXZlcjogW2xvY2FsZm9yYWdlXzEuZGVmYXVsdC5JTkRFWEVEREIsIGxvY2FsZm9yYWdlXzEuZGVmYXVsdC5XRUJTUUxdXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudENvbGxlY3Rpb247XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRHcmFwaDtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudFZpZXc7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb2xsZWN0aW9uKG5hbWUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q29sbGVjdGlvbiA9IGBjb2xsZWN0aW9uXyR7bmFtZX1gO1xuICAgICAgICB0aGlzLmdldERhdGFiYXNlKCkuY29uZmlnKHsgc3RvcmVOYW1lOiB0aGlzLmN1cnJlbnRDb2xsZWN0aW9uIH0pO1xuICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50R3JhcGg7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRWaWV3O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdmlldyhuYW1lKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZXcgPSBgdmlld18ke25hbWV9YDtcbiAgICAgICAgdGhpcy5nZXREYXRhYmFzZSgpLmNvbmZpZyh7IHN0b3JlTmFtZTogdGhpcy5jdXJyZW50VmlldyB9KTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudENvbGxlY3Rpb247XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRHcmFwaDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdyYXBoKG5hbWUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50R3JhcGggPSBgZ3JhcGhfJHtuYW1lfWA7XG4gICAgICAgIHRoaXMuZ2V0RGF0YWJhc2UoKS5jb25maWcoeyBzdG9yZU5hbWU6IHRoaXMuY3VycmVudEdyYXBoIH0pO1xuICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50Q29sbGVjdGlvbjtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudFZpZXc7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5nZXRJdGVtKGlkKTtcbiAgICB9XG4gICAgaW5zZXJ0KGlkLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhYmFzZSgpLnNldEl0ZW0oaWQsIHZhbHVlKTtcbiAgICB9XG4gICAgdXBkYXRlKGlkLCB2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5nZXQoaWQpIHx8IHt9O1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVzdWx0LCB2YWx1ZXMpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuaW5zZXJ0KGlkLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZWxldGUoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5yZW1vdmVJdGVtKGlkKTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGFiYXNlKCkuY2xlYXIoKTtcbiAgICB9XG4gICAgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhYmFzZSgpLmxlbmd0aCgpO1xuICAgIH1cbiAgICBrZXkoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5rZXkoaW5kZXgpO1xuICAgIH1cbiAgICBrZXlzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhYmFzZSgpLmtleXMoKTtcbiAgICB9XG4gICAgaXRlcmF0ZShpdGVyYXRvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhYmFzZSgpLml0ZXJhdGUoaXRlcmF0b3IpO1xuICAgIH1cbiAgICBnZXREYXRhYmFzZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnREYXRhYmFzZSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIERhdGFiYXNlIGNob3NlblwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YWJhc2VzLmdldCh0aGlzLmN1cnJlbnREYXRhYmFzZSk7XG4gICAgfVxufVxuZXhwb3J0cy5EYXRhYmFzZU1hbmFnZXIgPSBEYXRhYmFzZU1hbmFnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSR0YwWVdKaGMyVk5ZVzVoWjJWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOWpiR2xsYm5RdmRITXZiR2xpTDBSaGRHRmlZWE5sVFdGdVlXZGxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkRRU3h2UlVGQmFVVTdRVUZEYWtVc2MwVkJRWE5ETzBGQlJYUkRMRTFCUVdFc1pVRkJkMFlzVTBGQlVTeDFRMEZCYTBJN1NVRnRRak5JTzFGQlEwa3NTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRlNTaXhqUVVGVExFZEJRWGRDTEVsQlFVa3NSMEZCUnl4RlFVRnJRaXhEUVVGRE8wbEJVMjVGTEVOQlFVTTdTVUZRVFN4TlFVRk5MRU5CUVVNc1YwRkJWenRSUVVOeVFpeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRkZCUVZFN1dVRkJSU3hsUVVGbExFTkJRVU1zVVVGQlVTeEhRVUZITEVsQlFVa3NaVUZCWlN4RlFVRkZMRU5CUVVNN1VVRkRhRVlzVDBGQlR5eGxRVUZsTEVOQlFVTXNVVUZCVVN4RFFVRkRPMGxCUTNCRExFTkJRVU03U1VGTlRTeFJRVUZSTEVOQlFVTXNTVUZCVHp0UlFVTnVRaXhKUVVGSkxFTkJRVU1zWlVGQlpTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTTFRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRGRFTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeEZRVUZGTEhGQ1FVRlhMRU5CUVVNc1kwRkJZeXhEUVVGRE8yZENRVU5vUkN4SlFVRkpMRVZCUVVVc1NVRkJTVHRuUWtGRFZpeE5RVUZOTEVWQlFVVXNRMEZCUXl4eFFrRkJWeXhEUVVGRExGTkJRVk1zUlVGQlJTeHhRa0ZCVnl4RFFVRkRMRTFCUVUwc1EwRkJRenRoUVVOMFJDeERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTlFPMUZCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNN1VVRkRPVUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRPMUZCUTNwQ0xFOUJRVThzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0UlFVTjRRaXhQUVVGUExFbEJRVWtzUTBGQlF6dEpRVU5vUWl4RFFVRkRPMGxCUlUwc1ZVRkJWU3hEUVVGRExFbEJRVTg3VVVGRGNrSXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEhRVUZOTEdOQlFXTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRha1FzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEycEZMRTlCUVU4c1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF6dFJRVU42UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRGVFSXNUMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkRhRUlzUTBGQlF6dEpRVVZOTEVsQlFVa3NRMEZCUXl4SlFVRlBPMUZCUTJZc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlRTeFJRVUZSTEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUTNKRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRNMFFzVDBGQlR5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU03VVVGRE9VSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRE8xRkJRM3BDTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTJoQ0xFTkJRVU03U1VGRlRTeExRVUZMTEVOQlFVTXNTVUZCVHp0UlFVTm9RaXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZOTEZOQlFWTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRka01zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNMVJDeFBRVUZQTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF6dFJRVU01UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRGVFSXNUMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkRhRUlzUTBGQlF6dEpRVVZOTEVkQlFVY3NRMEZCUXl4RlFVRlZPMUZCUTJwQ0xFOUJRVThzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU14UXl4RFFVRkRPMGxCUlUwc1RVRkJUU3hEUVVGRExFVkJRVlVzUlVGQlJTeExRVUZyUXp0UlFVTjRSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEycEVMRU5CUVVNN1NVRkZUU3hOUVVGTkxFTkJRVU1zUlVGQlZTeEZRVUZGTEUxQlFXMURPMUZCUTNwRUxFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJUdFpRVU42UXl4SlFVRkpPMmRDUVVOQkxFMUJRVTBzVFVGQlRTeEhRVUZITEUxQlFVMHNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdaMEpCUTNoRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8yZENRVU01UWl4TlFVRk5MRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMmRDUVVNNVFpeFBRVUZQTEVWQlFVVXNRMEZCUXp0aFFVTmlPMWxCUVVNc1QwRkJUeXhMUVVGTExFVkJRVVU3WjBKQlExb3NUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8yRkJRMnBDTzFGQlEwd3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRVQ3hEUVVGRE8wbEJSVTBzVFVGQlRTeERRVUZETEVWQlFWVTdVVUZEY0VJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRemRETEVOQlFVTTdTVUZGVFN4TFFVRkxPMUZCUTFJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1NVRkRkRU1zUTBGQlF6dEpRVVZOTEUxQlFVMDdVVUZEVkN4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0SlFVTjJReXhEUVVGRE8wbEJSVTBzUjBGQlJ5eERRVUZETEV0QlFXRTdVVUZEY0VJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRM3BETEVOQlFVTTdTVUZGVFN4SlFVRkpPMUZCUTFBc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1NVRkRja01zUTBGQlF6dEpRVVZOTEU5QlFVOHNRMEZCUXl4UlFVRTRSanRSUVVONlJ5eFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdTVUZEYUVRc1EwRkJRenRKUVVWUExGZEJRVmM3VVVGRFppeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVN1dVRkJSU3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEc5Q1FVRnZRaXhEUVVGRExFTkJRVU03VVVGRGFrVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRm5RaXhEUVVGRE8wbEJRMjVGTEVOQlFVTTdRMEZGU2p0QlFTOUhSQ3d3UTBFclIwTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBCRE9Mb2dnZXJfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Mb2dnZXJcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xubGV0IExvZ2dlciA9IGNsYXNzIExvZ2dlciBleHRlbmRzIEJET0xvZ2dlcl8xLkJET0xvZ2dlciB7XG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgICAgIHRoaXMubG9nTGV2ZWxDb2xvcnMgPSB7XG4gICAgICAgICAgICBsb2c6ICdjb2xvcjogZ3JheTsgZm9udC13ZWlnaHQ6IGJvbGQ7JyxcbiAgICAgICAgICAgIGRlYnVnOiAnY29sb3I6IGdyZWVuOyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgICAgICAgICAgaW5mbzogJ2NvbG9yOiAjMDA4MDZCOyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgICAgICAgICAgd2FybjogJ2NvbG9yOiAjODA4MDAwOyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgICAgICAgICAgZXJyb3I6ICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogYm9sZDsnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldEhlYWRlcihsb2dMZXZlbCwgcHJpbnRFbnYgPSAnY29uc29sZScpIHtcbiAgICAgICAgY29uc3QgcHJvY0luZm8gPSB0aGlzLmdldFByb2NJbmZvKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gdGhpcy5jdXJyZW50VGltZSgpO1xuICAgICAgICBjb25zdCB1cHBlckxvZ0xldmVsID0gbG9nTGV2ZWwudG9VcHBlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9nUG9pbnQgPSB0aGlzLmdldExvZ1BvaW50KCk7XG4gICAgICAgIGNvbnN0IHJlc2V0U3R5bGUgPSAnY29sb3I6IGJsYWNrOyBmb250LXdlaWdodDogbm9ybWFsJztcbiAgICAgICAgY29uc3QgbWFnZW50YSA9ICdjb2xvcjogIzgwMDA4MDsgZm9udC13ZWlnaHQ6IG5vcm1hbCc7XG4gICAgICAgIGNvbnN0IGN5YW4gPSAnY29sb3I6ICMwMDgwNkI7IGZvbnQtd2VpZ2h0OiBub3JtYWwnO1xuICAgICAgICBpZiAocHJpbnRFbnYgPT09ICdjb25zb2xlJykge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkTG9nTGV2ZWwgPSB0aGlzLmxvZ0xldmVsQ29sb3JzW2xvZ0xldmVsXTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZExvZ1BvaW50ID0gbWFnZW50YTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBjeWFuO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkUHJvY0luZm8gPSBtYWdlbnRhO1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBgJWNbJWMke3VwcGVyTG9nTGV2ZWx9ICVjLSAlYyR7cHJvY0luZm99ICVjLSAlYyR7Y3VycmVudFRpbWV9ICVjYXQgJWMke2xvZ1BvaW50fSVjXWAsXG4gICAgICAgICAgICAgICAgcmVzZXRTdHlsZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRMb2dMZXZlbCxcbiAgICAgICAgICAgICAgICByZXNldFN0eWxlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZFByb2NJbmZvLFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkVGltZSxcbiAgICAgICAgICAgICAgICByZXNldFN0eWxlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZExvZ1BvaW50LFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGVcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBbJHt1cHBlckxvZ0xldmVsfSAtICR7cHJvY0luZm99IC0gJHtjdXJyZW50VGltZX0gLSAke2xvZ1BvaW50fV1gO1xuICAgIH1cbiAgICB3cml0ZVRvRmlsZShfbG9nTGV2ZWwsIF9tZXNzYWdlKSB7XG4gICAgfVxufTtcbkxvZ2dlciA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIENvbnN0UGFyYW1zICE9PSBcInVuZGVmaW5lZFwiICYmIENvbnN0UGFyYW1zKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3RdKVxuXSwgTG9nZ2VyKTtcbmV4cG9ydHMuTG9nZ2VyID0gTG9nZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVEc5bloyVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlqYkdsbGJuUXZkSE12YkdsaUwweHZaMmRsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxHdEVRVUUyUlR0QlFVTTNSU3h6UkVGQmQwUTdRVUZWZUVRc1NVRkJZU3hOUVVGTkxFZEJRVzVDTEUxQlFXRXNUVUZCVHl4VFFVRlJMSEZDUVVGVE8wbEJaV3BETEZsQlFWa3NUVUZCTkVJN1VVRkRjRU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCVkZZc2JVSkJRV01zUjBGQlJ6dFpRVU55UWl4SFFVRkhMRVZCUVVVc2FVTkJRV2xETzFsQlEzUkRMRXRCUVVzc1JVRkJSU3hyUTBGQmEwTTdXVUZEZWtNc1NVRkJTU3hGUVVGRkxHOURRVUZ2UXp0WlFVTXhReXhKUVVGSkxFVkJRVVVzYjBOQlFXOURPMWxCUXpGRExFdEJRVXNzUlVGQlJTeG5RMEZCWjBNN1UwRkRNVU1zUTBGQlF6dEpRVWxHTEVOQlFVTTdTVUZYVXl4VFFVRlRMRU5CUVVNc1VVRkJiVUlzUlVGQlJTeFhRVUU0UWl4VFFVRlRPMUZCUXpWRkxFMUJRVTBzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRSUVVOd1F5eE5RVUZOTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03VVVGRGRrTXNUVUZCVFN4aFFVRmhMRWRCUVVjc1VVRkJVU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzFGQlF6ZERMRTFCUVUwc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVTndReXhOUVVGTkxGVkJRVlVzUjBGQlJ5eHRRMEZCYlVNc1EwRkJRenRSUVVOMlJDeE5RVUZOTEU5QlFVOHNSMEZCUnl4eFEwRkJjVU1zUTBGQlF6dFJRVU4wUkN4TlFVRk5MRWxCUVVrc1IwRkJSeXh4UTBGQmNVTXNRMEZCUXp0UlFVTnVSQ3hKUVVGSkxGRkJRVkVzUzBGQlN5eFRRVUZUTEVWQlFVVTdXVUZEZUVJc1RVRkJUU3hwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFsQlEzaEVMRTFCUVUwc2FVSkJRV2xDTEVkQlFVY3NUMEZCVHl4RFFVRkRPMWxCUTJ4RExFMUJRVTBzWVVGQllTeEhRVUZITEVsQlFVa3NRMEZCUXp0WlFVTXpRaXhOUVVGTkxHbENRVUZwUWl4SFFVRkhMRTlCUVU4c1EwRkJRenRaUVVOc1F5eFBRVUZQTzJkQ1FVTklMRkZCUVZFc1lVRkJZU3hWUVVGVkxGRkJRVkVzVlVGQlZTeFhRVUZYTEZkQlFWY3NVVUZCVVN4TFFVRkxPMmRDUVVOd1JpeFZRVUZWTzJkQ1FVTldMR2xDUVVGcFFqdG5Ra0ZEYWtJc1ZVRkJWVHRuUWtGRFZpeHBRa0ZCYVVJN1owSkJRMnBDTEZWQlFWVTdaMEpCUTFZc1lVRkJZVHRuUWtGRFlpeFZRVUZWTzJkQ1FVTldMR2xDUVVGcFFqdG5Ra0ZEYWtJc1ZVRkJWVHRoUVVOaUxFTkJRVU03VTBGRFREdFJRVU5FTEU5QlFVOHNTVUZCU1N4aFFVRmhMRTFCUVUwc1VVRkJVU3hOUVVGTkxGZEJRVmNzVFVGQlRTeFJRVUZSTEVkQlFVY3NRMEZCUXp0SlFVTTNSU3hEUVVGRE8wbEJWVk1zVjBGQlZ5eERRVUZETEZOQlFXOUNMRVZCUVVVc1VVRkJZVHRKUVVWNlJDeERRVUZETzBOQlEwb3NRMEZCUVR0QlFYQkZXU3hOUVVGTk8wbEJSR3hDTERSQ1FVRmxMRVZCUVVVN2FVVkJaMEpQTEZkQlFWY3NiMEpCUVZnc1YwRkJWenRIUVdaMlFpeE5RVUZOTEVOQmIwVnNRanRCUVhCRldTeDNRa0ZCVFNKOSIsInZhciBtYXAgPSB7XG5cdFwiLi9UZXN0LnRzXCI6IFwiLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdC50c1wiLFxuXHRcIi4vVGVzdDEudHNcIjogXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL21vZGVscy9UZXN0MS50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL21vZGVscyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC50cyRcIjsiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfYTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBCRE9UZXN0XzEgPSByZXF1aXJlKFwifmJkby9tb2RlbHMvQkRPVGVzdFwiKTtcbmNvbnN0IENsaWVudE1vZGVsXzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQ2xpZW50TW9kZWxcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xubGV0IFRlc3QgPSBjbGFzcyBUZXN0IGV4dGVuZHMgQkRPVGVzdF8xLkJET1Rlc3RGYWN0b3J5KENsaWVudE1vZGVsXzEuQ2xpZW50TW9kZWwpIHtcbiAgICBjb25zdHJ1Y3RvcihfcGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHRlc3QoKSB7XG4gICAgfVxufTtcblRlc3QgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoeyBjb2xsZWN0aW9uTmFtZTogXCJUZXN0XCIgfSksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgQ29uc3RQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIgJiYgQ29uc3RQYXJhbXMpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdF0pXG5dLCBUZXN0KTtcbmV4cG9ydHMuVGVzdCA9IFRlc3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWR1Z6ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyMXZaR1ZzY3k5VVpYTjBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRU3hwUkVGQmNVUTdRVUZEY2tRc2VVUkJRWE5FTzBGQlEzUkVMSE5FUVVGM1JEdEJRVlY0UkN4SlFVRmhMRWxCUVVrc1IwRkJha0lzVFVGQllTeEpRVUZMTEZOQlFWRXNkMEpCUVdNc1EwRkJReXg1UWtGQlZ5eERRVUZETzBsQlJXcEVMRmxCUVZrc1QwRkJNa0k3VVVGRGJrTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1NVRkRXaXhEUVVGRE8wbEJUMDBzU1VGQlNUdEpRVVZZTEVOQlFVTTdRMEZEU2l4RFFVRkJPMEZCWkZrc1NVRkJTVHRKUVVSb1FpdzBRa0ZCWlN4RFFVRkRMRVZCUVVVc1kwRkJZeXhGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETzJsRlFVZHNRaXhYUVVGWExHOUNRVUZZTEZkQlFWYzdSMEZHZUVJc1NVRkJTU3hEUVdOb1FqdEJRV1JaTEc5Q1FVRkpJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgVGVzdDFfMSwgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgQkRPVGVzdDFfMSA9IHJlcXVpcmUoXCJ+YmRvL21vZGVscy9CRE9UZXN0MVwiKTtcbmNvbnN0IFRlc3RfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L21vZGVscy9UZXN0XCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmxldCBUZXN0MSA9IFRlc3QxXzEgPSBjbGFzcyBUZXN0MSBleHRlbmRzIEJET1Rlc3QxXzEuQkRPVGVzdDFGYWN0b3J5KFRlc3RfMS5UZXN0KSB7XG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgfVxuICAgIGFzeW5jIHdhZGRlKCkge1xuICAgICAgICBjb25zdCB0ZXN0ID0gYXdhaXQgVGVzdDFfMS5nZXRJbnN0YW5jZUJ5SUQodGhpcy5pZCk7XG4gICAgICAgIGlmICh0ZXN0KVxuICAgICAgICAgICAgcmV0dXJuIHRlc3QuZ2V0VW5zYXZlZENoYW5nZXMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn07XG5UZXN0MSA9IFRlc3QxXzEgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoeyBjb2xsZWN0aW9uTmFtZTogXCJUZXN0MVwiIH0pLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIENvbnN0UGFyYW1zICE9PSBcInVuZGVmaW5lZFwiICYmIENvbnN0UGFyYW1zKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3RdKVxuXSwgVGVzdDEpO1xuZXhwb3J0cy5UZXN0MSA9IFRlc3QxO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVkdWemRERXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMk5zYVdWdWRDOTBjeTl0YjJSbGJITXZWR1Z6ZERFdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVOQkxHMUVRVUYxUkR0QlFVTjJSQ3c0UTBGQk1rTTdRVUZETTBNc2MwUkJRWGRFTzBGQlZYaEVMRWxCUVdFc1MwRkJTeXhoUVVGc1FpeE5RVUZoTEV0QlFVMHNVMEZCVVN3d1FrRkJaU3hEUVVGRExGZEJRVWtzUTBGQlF6dEpRVVUxUXl4WlFVRlpMRTFCUVRKQ08xRkJRMjVETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRKUVVOc1FpeERRVUZETzBsQlQwMHNTMEZCU3l4RFFVRkRMRXRCUVVzN1VVRkRaQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eE5RVUZOTEU5QlFVc3NRMEZCUXl4bFFVRmxMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEyeEVMRWxCUVVrc1NVRkJTVHRaUVVGRkxFOUJRVThzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhGUVVGRkxFTkJRVU03VVVGRE1VTXNUMEZCVHp0SlFVTllMRU5CUVVNN1EwRkRTaXhEUVVGQk8wRkJhRUpaTEV0QlFVczdTVUZFYWtJc05FSkJRV1VzUTBGQlF5eEZRVUZGTEdOQlFXTXNSVUZCUlN4UFFVRlBMRVZCUVVVc1EwRkJRenRwUlVGSGNFSXNWMEZCVnl4dlFrRkJXQ3hYUVVGWE8wZEJSblpDTEV0QlFVc3NRMEZuUW1wQ08wRkJhRUpaTEhOQ1FVRkxJbjA9IiwidmFyIG1hcCA9IHtcblx0XCIuL0NvbmZpZy50c1wiOiBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0NvbmZpZy50c1wiLFxuXHRcIi4vR2FtZUxvYmJ5LnRzXCI6IFwiLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvR2FtZUxvYmJ5LnRzXCIsXG5cdFwiLi9Ib21lLnRzXCI6IFwiLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvSG9tZS50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC50cyRcIjsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENsaWVudFJvdXRlXzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQ2xpZW50Um91dGVcIik7XG5jb25zdCBCRE9Db25maWdfMSA9IHJlcXVpcmUoXCJ+YmRvL3JvdXRlcy9CRE9Db25maWdcIik7XG5jbGFzcyBDb25maWcgZXh0ZW5kcyBCRE9Db25maWdfMS5CRE9Db25maWdGYWN0b3J5KENsaWVudFJvdXRlXzEuQ2xpZW50Um91dGUpIHtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IENvbmZpZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyOXVabWxuTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5amJHbGxiblF2ZEhNdmNtOTFkR1Z6TDBOdmJtWnBaeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMSGxFUVVGelJEdEJRVU4wUkN4eFJFRkJlVVE3UVVGWGVrUXNUVUZCY1VJc1RVRkJUeXhUUVVGUkxEUkNRVUZuUWl4RFFVRkRMSGxDUVVGWExFTkJRVU03UTBGQlNUdEJRVUZ5UlN4NVFrRkJjVVVpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ2xpZW50Um91dGVfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9DbGllbnRSb3V0ZVwiKTtcbmNvbnN0IEJET0dhbWVMb2JieV8xID0gcmVxdWlyZShcIn5iZG8vcm91dGVzL0JET0dhbWVMb2JieVwiKTtcbmNsYXNzIEdhbWVMb2JieSBleHRlbmRzIEJET0dhbWVMb2JieV8xLkJET0dhbWVMb2JieUZhY3RvcnkoQ2xpZW50Um91dGVfMS5DbGllbnRSb3V0ZSkge1xuICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGVzdDogJ2xvbCdcbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBHYW1lTG9iYnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSMkZ0WlV4dlltSjVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlqYkdsbGJuUXZkSE12Y205MWRHVnpMMGRoYldWTWIySmllUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMSGxFUVVGelJEdEJRVU4wUkN3eVJFRkJLMFE3UVVGVEwwUXNUVUZCY1VJc1UwRkJWU3hUUVVGUkxHdERRVUZ0UWl4RFFVRkRMSGxDUVVGWExFTkJRVU03U1VGVmVrUXNTMEZCU3l4RFFVRkRMR05CUVdNN1VVRkRNVUlzVDBGQlR6dFpRVU5JTEVsQlFVa3NSVUZCUlN4TFFVRkxPMU5CUTJRc1EwRkJRenRKUVVOT0xFTkJRVU03UTBGRFNqdEJRV1pFTERSQ1FXVkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBDbGllbnRSb3V0ZV8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0NsaWVudFJvdXRlXCIpO1xuY29uc3QgQkRPSG9tZV8xID0gcmVxdWlyZShcIn5iZG8vcm91dGVzL0JET0hvbWVcIik7XG5jbGFzcyBIb21lIGV4dGVuZHMgQkRPSG9tZV8xLkJET0hvbWVGYWN0b3J5KENsaWVudFJvdXRlXzEuQ2xpZW50Um91dGUpIHtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEhvbWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lTRzl0WlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwzSnZkWFJsY3k5SWIyMWxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNlVVJCUVhORU8wRkJRM1JFTEdsRVFVRnhSRHRCUVZOeVJDeE5RVUZ4UWl4SlFVRkxMRk5CUVZFc2QwSkJRV01zUTBGQlF5eDVRa0ZCVnl4RFFVRkRPME5CUVVrN1FVRkJha1VzZFVKQlFXbEZJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5mdW5jdGlvbiBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZShpbnN0YW5jZSwga2V5LCBuZXdWYWwsIG5zUHJvcCA9IFwiaWRcIikge1xuICAgIGlmIChrZXkgPT09IFwiKlwiKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCIqIGlzIGEgc3BlY2lhbCBjaGFyYWN0ZXIgYW5kIGRvZXMgbm90IGZvbGxvdyB0aGUgcHJvcGVydHkgY29udmVudGlvblwiKTtcbiAgICBjb25zdCBuc1ByZWZpeCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihpbnN0YW5jZS5jb25zdHJ1Y3RvcikubmFtZTtcbiAgICBsZXQgbnNTdWZmaXggPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGluc3RhbmNlLCBcIm9sZFN0b3JhZ2VOc1N1ZmZpeFwiKTtcbiAgICBsZXQgc3RvcmFnZVZhbHVlO1xuICAgIGlmICghbnNTdWZmaXgpXG4gICAgICAgIG5zU3VmZml4ID0gaW5zdGFuY2VbbnNQcm9wXTtcbiAgICBsZXQgbnMgPSBgJHtuc1ByZWZpeH1fJHtuc1N1ZmZpeH1gO1xuICAgIGlmIChrZXkgPT09IG5zUHJvcCB8fCBuc1N1ZmZpeCAhPT0gaW5zdGFuY2VbbnNQcm9wXSkge1xuICAgICAgICBuc1N1ZmZpeCA9IGtleSA9PT0gbnNQcm9wID8gbmV3VmFsIDogaW5zdGFuY2VbbnNQcm9wXTtcbiAgICAgICAgY29uc3QgbmV3TnMgPSBgJHtuc1ByZWZpeH1fJHtuc1N1ZmZpeH1gO1xuICAgICAgICBzdG9yYWdlVmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShucyk7XG4gICAgICAgIGlmIChzdG9yYWdlVmFsdWUpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5zKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5ld05zLCBzdG9yYWdlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIG5zID0gbmV3TnM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzdG9yYWdlVmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShucyk7XG4gICAgICAgIGlmIChzdG9yYWdlVmFsdWUpIHtcbiAgICAgICAgICAgIHN0b3JhZ2VWYWx1ZSA9IEpTT04ucGFyc2Uoc3RvcmFnZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzdG9yYWdlVmFsdWUgPSB7fTtcbiAgICAgICAgaWYgKG5ld1ZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkZWxldGUgc3RvcmFnZVZhbHVlW2tleV07XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKHN0b3JhZ2VWYWx1ZSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5zLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlVmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShucywgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmFzc2lnbihzdG9yYWdlVmFsdWUsIHsgW2tleV06IG5ld1ZhbCB9KSkpO1xuICAgIH1cbiAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKGluc3RhbmNlLCBcIm9sZFN0b3JhZ2VOc1N1ZmZpeFwiLCBuc1N1ZmZpeCk7XG59XG5leHBvcnRzLnNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlID0gc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2U7XG5mdW5jdGlvbiBnZXROYW1lc3BhY2VkU3RvcmFnZShpbnN0YW5jZSwga2V5LCBuc1Byb3AgPSBcImlkXCIsIGZvcmNlTlMpIHtcbiAgICBjb25zdCBuc1ByZWZpeCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihpbnN0YW5jZS5jb25zdHJ1Y3RvcikubmFtZTtcbiAgICBsZXQgbnNTdWZmaXggPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGluc3RhbmNlLCBcIm9sZFN0b3JhZ2VOc1N1ZmZpeFwiKTtcbiAgICBpZiAobnNTdWZmaXggIT09IGluc3RhbmNlW25zUHJvcF0pXG4gICAgICAgIG5zU3VmZml4ID0gaW5zdGFuY2VbbnNQcm9wXTtcbiAgICBpZiAoZm9yY2VOUylcbiAgICAgICAgbnNTdWZmaXggPSBmb3JjZU5TO1xuICAgIGxldCBzdG9yYWdlVmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtuc1ByZWZpeH1fJHtuc1N1ZmZpeH1gKTtcbiAgICBpZiAoc3RvcmFnZVZhbHVlKVxuICAgICAgICBzdG9yYWdlVmFsdWUgPSBKU09OLnBhcnNlKHN0b3JhZ2VWYWx1ZSk7XG4gICAgaWYgKHN0b3JhZ2VWYWx1ZSAmJiBrZXkgPT09IFwiKlwiKVxuICAgICAgICByZXR1cm4gc3RvcmFnZVZhbHVlO1xuICAgIGlmIChzdG9yYWdlVmFsdWUgJiYga2V5IGluIHN0b3JhZ2VWYWx1ZSlcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VWYWx1ZVtrZXldO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5leHBvcnRzLmdldE5hbWVzcGFjZWRTdG9yYWdlID0gZ2V0TmFtZXNwYWNlZFN0b3JhZ2U7XG5mdW5jdGlvbiBkZWxldGVGcm9tTmFtZXNwYWNlZFN0b3JhZ2UoaW5zdGFuY2UsIGtleSwgbnNQcm9wID0gXCJpZFwiKSB7XG4gICAgaWYgKGtleSA9PT0gXCIqXCIpIHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IGdldE5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBrZXksIG5zUHJvcCk7XG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBzdG9yYWdlKSB7XG4gICAgICAgICAgICBpZiAoc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSlcbiAgICAgICAgICAgICAgICBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZShpbnN0YW5jZSwgcHJvcCwgdW5kZWZpbmVkLCBuc1Byb3ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2UoaW5zdGFuY2UsIGtleSwgdW5kZWZpbmVkLCBuc1Byb3ApO1xufVxuZXhwb3J0cy5kZWxldGVGcm9tTmFtZXNwYWNlZFN0b3JhZ2UgPSBkZWxldGVGcm9tTmFtZXNwYWNlZFN0b3JhZ2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkWFJwYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwzVjBhV3h6TDNWMGFXd3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTeHJSRUZCYTBVN1FVRlZiRVVzVTBGQlowSXNNRUpCUVRCQ0xFTkJRVU1zVVVGQllTeEZRVUZGTEVkQlFWY3NSVUZCUlN4TlFVRlhMRVZCUVVVc1UwRkJhVUlzU1VGQlNUdEpRVU55Unl4SlFVRkpMRWRCUVVjc1MwRkJTeXhIUVVGSE8xRkJRVVVzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4elJVRkJjMFVzUTBGQlF5eERRVUZETzBsQlIzcEhMRTFCUVUwc1VVRkJVU3hIUVVGSExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU5zUlN4SlFVRkpMRkZCUVZFc1IwRkJSeXh6UWtGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4dlFrRkJiMElzUTBGQlF5eERRVUZETzBsQlF6TkVMRWxCUVVrc1dVRkJhVUlzUTBGQlF6dEpRVWQwUWl4SlFVRkpMRU5CUVVNc1VVRkJVVHRSUVVGRkxGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRNME1zU1VGQlNTeEZRVUZGTEVkQlFVY3NSMEZCUnl4UlFVRlJMRWxCUVVrc1VVRkJVU3hGUVVGRkxFTkJRVU03U1VGRGJrTXNTVUZCU1N4SFFVRkhMRXRCUVVzc1RVRkJUU3hKUVVGSkxGRkJRVkVzUzBGQlN5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVN1VVRkZha1FzVVVGQlVTeEhRVUZITEVkQlFVY3NTMEZCU3l4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRM1JFTEUxQlFVMHNTMEZCU3l4SFFVRkhMRWRCUVVjc1VVRkJVU3hKUVVGSkxGRkJRVkVzUlVGQlJTeERRVUZETzFGQlEzaERMRmxCUVZrc1IwRkJSeXhaUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTNoRExFbEJRVWtzV1VGQldTeEZRVUZGTzFsQlEyUXNXVUZCV1N4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU0xUWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeFpRVUZaTEVOQlFVTXNRMEZCUXp0VFFVTTNRenRSUVVORUxFVkJRVVVzUjBGQlJ5eExRVUZMTEVOQlFVTTdTMEZEWkR0VFFVRk5PMUZCUlVnc1dVRkJXU3hIUVVGSExGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRlRU1zU1VGQlNTeFpRVUZaTEVWQlFVVTdXVUZEWkN4WlFVRlpMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0VFFVTXpRenM3V1VGQlRTeFpRVUZaTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUlhwQ0xFbEJRVWtzVFVGQlRTeExRVUZMTEZOQlFWTXNSVUZCUlR0WlFVTjBRaXhQUVVGUExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTjZRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVU3WjBKQlEyNURMRmxCUVZrc1EwRkJReXhWUVVGVkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdZVUZETDBJN08yZENRVUZOTEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOcVJUczdXVUZCVFN4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVVzUlVGQlJTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zV1VGQldTeEZRVUZGTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0TFFVTnVSenRKUVVWRUxIbENRVUZqTEVOQlFVTXNVVUZCVVN4RlFVRkZMRzlDUVVGdlFpeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMEZCUXpkRUxFTkJRVU03UVVGeVEwUXNaMFZCY1VORE8wRkJhMEpFTEZOQlFXZENMRzlDUVVGdlFpeERRVUZETEZGQlFXRXNSVUZCUlN4SFFVRlhMRVZCUVVVc1UwRkJhVUlzU1VGQlNTeEZRVUZGTEU5QlFXZENPMGxCUTNCSExFMUJRVTBzVVVGQlVTeEhRVUZITEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXp0SlFVTnNSU3hKUVVGSkxGRkJRVkVzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3h2UWtGQmIwSXNRMEZCUXl4RFFVRkRPMGxCUXpORUxFbEJRVWtzVVVGQlVTeExRVUZMTEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkJSU3hSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUXk5RUxFbEJRVWtzVDBGQlR6dFJRVUZGTEZGQlFWRXNSMEZCUnl4UFFVRlBMRU5CUVVNN1NVRkRhRU1zU1VGQlNTeFpRVUZaTEVkQlFWRXNXVUZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExGRkJRVkVzU1VGQlNTeFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUTNoRkxFbEJRVWtzV1VGQldUdFJRVUZGTEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzBsQlF6RkVMRWxCUVVrc1dVRkJXU3hKUVVGSkxFZEJRVWNzUzBGQlN5eEhRVUZITzFGQlFVVXNUMEZCVHl4WlFVRlpMRU5CUVVNN1NVRkRja1FzU1VGQlNTeFpRVUZaTEVsQlFVa3NSMEZCUnl4SlFVRkpMRmxCUVZrN1VVRkJSU3hQUVVGUExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTnNSU3hQUVVGUExGTkJRVk1zUTBGQlF6dEJRVU55UWl4RFFVRkRPMEZCVmtRc2IwUkJWVU03UVVGWFJDeFRRVUZuUWl3eVFrRkJNa0lzUTBGQlF5eFJRVUZoTEVWQlFVVXNSMEZCVnl4RlFVRkZMRk5CUVdsQ0xFbEJRVWs3U1VGRGVrWXNTVUZCU1N4SFFVRkhMRXRCUVVzc1IwRkJSeXhGUVVGRk8xRkJRMklzVFVGQlRTeFBRVUZQTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlFVY3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVNMVJDeExRVUZMTEUxQlFVMHNTVUZCU1N4SlFVRkpMRTlCUVU4c1JVRkJSVHRaUVVONFFpeEpRVUZKTEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRE8yZENRVUZGTERCQ1FVRXdRaXhEUVVGRExGRkJRVkVzUlVGQlJTeEpRVUZKTEVWQlFVVXNVMEZCVXl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8xTkJRMjVITzB0QlEwbzdPMUZCUVUwc01FSkJRVEJDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVjc1JVRkJSU3hUUVVGVExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdRVUZEZUVVc1EwRkJRenRCUVZCRUxHdEZRVTlESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUHJvcGVydHlfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Qcm9wZXJ0eVwiKTtcbmNvbnN0IGVudmlyb25tZW50XzEgPSByZXF1aXJlKFwifmJkby91dGlscy9lbnZpcm9ubWVudFwiKTtcbmNvbnN0IE1vZGlmaWNhdGlvbl8xID0gcmVxdWlyZShcIn5iZG8vbGliL01vZGlmaWNhdGlvblwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBFcnJvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9FcnJvcnNcIik7XG5jb25zdCBNb2RlbFJlZ2lzdHJ5XzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kZWxSZWdpc3RyeVwiKTtcbmNsYXNzIEF0dHJpYnV0ZSBleHRlbmRzIFByb3BlcnR5XzEuUHJvcGVydHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHksIHBhcmFtcykge1xuICAgICAgICBzdXBlcihvYmplY3QsIHByb3BlcnR5LCBwYXJhbXMpO1xuICAgICAgICB0aGlzLmluRE9NSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hdXRvU2F2ZUFsbG93ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZERvU2V0VmFsdWUodmFsdWUpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgb2xkSUQ7XG4gICAgICAgIGlmICh0aGlzLm9iamVjdC5pc0JET01vZGVsICYmIHRoaXMucHJvcGVydHkgPT09IFwiaWRcIilcbiAgICAgICAgICAgIG9sZElEID0gdGhpcy5vd25WYWx1ZTtcbiAgICAgICAgdGhpcy5kb1NldFZhbHVlKHZhbHVlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgaWYgKG9sZElEKVxuICAgICAgICAgICAgTW9kZWxSZWdpc3RyeV8xLk1vZGVsUmVnaXN0cnkuZ2V0SW5zdGFuY2UoKS51cGRhdGVJRChvbGRJRCwgdGhpcy5vYmplY3QpO1xuICAgICAgICB0aGlzLnJlZmxlY3RUb0RPTUF0dHJpYnV0ZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuZG9BdXRvU2F2ZSgpO1xuICAgIH1cbiAgICBwcm94eUhhbmRsZXIoX3BhdGgsIF9jaGFuZ2VkVmFsLCBfcHJldlZhbCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmRvU2V0VmFsdWUodXRpbF8xLmdldFByb3h5VGFyZ2V0KHZhbHVlKSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMucmVmbGVjdFRvRE9NQXR0cmlidXRlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5kb0F1dG9TYXZlKCk7XG4gICAgfVxuICAgIGdldFVuc2F2ZWRDaGFuZ2UoKSB7IH1cbiAgICBzaG91bGREb1NldFZhbHVlKHZhbHVlLCBza2lwR3VhcmQgPSBmYWxzZSkge1xuICAgICAgICBpZiAoZW52aXJvbm1lbnRfMS5pc0Jyb3dzZXIoKSAmJiAhdGhpcy5vYmplY3QuaXNCRE9Nb2RlbCAmJiAodGhpcy5vYmplY3QgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdGVkVHlwZSA9IHV0aWxfMS5jb25zdHJ1Y3RUeXBlT2ZIVE1MQXR0cmlidXRlKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pbkRPTUluaXRpYWxpemVkICYmIHRoaXMub2JqZWN0LmdldEF0dHJpYnV0ZSh0aGlzLnByb3BlcnR5KSAmJiB2YWx1ZSAhPT0gY29uc3RydWN0ZWRUeXBlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShjb25zdHJ1Y3RlZFR5cGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gISh2YWx1ZSA9PT0gdGhpcy5vd25WYWx1ZSB8fCAhc2tpcEd1YXJkICYmICF0aGlzLmRpc2FibGVUeXBlR3VhcmQgJiYgIXRoaXMudHlwZUd1YXJkKHZhbHVlKSk7XG4gICAgfVxuICAgIHJlZmxlY3RUb0RPTUF0dHJpYnV0ZSh2YWx1ZSkge1xuICAgICAgICBpZiAoIWVudmlyb25tZW50XzEuaXNCcm93c2VyKCkgfHwgISh0aGlzLm9iamVjdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3Qgc3RyaW5nS2V5ID0gdGhpcy5wcm9wZXJ0eS50b1N0cmluZygpO1xuICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSB0aGlzLm9iamVjdC5nZXRBdHRyaWJ1dGUoc3RyaW5nS2V5KTtcbiAgICAgICAgbGV0IHNldEF0dHJpYnV0ZSA9IHRydWU7XG4gICAgICAgIGxldCBwVGFyZ2V0O1xuICAgICAgICBsZXQgdmFsdWVUb1Bhc3MgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kaWZpY2F0aW9uXzEuTW9kaWZpY2F0aW9uKVxuICAgICAgICAgICAgdmFsdWVUb1Bhc3MgPSB2YWx1ZS52YWx1ZU9mKCk7XG4gICAgICAgIGlmICghdGhpcy5pbkRPTUluaXRpYWxpemVkICYmIGF0dHJWYWx1ZSkge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcFRhcmdldCA9IHV0aWxfMS5nZXRQcm94eVRhcmdldCh2YWx1ZVRvUGFzcyk7XG4gICAgICAgIHRoaXMuaW5ET01Jbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIGlmIChzZXRBdHRyaWJ1dGUgJiYgYXR0clZhbHVlICE9PSBwVGFyZ2V0ICYmIGF0dHJWYWx1ZSAhPT0gSlNPTi5zdHJpbmdpZnkocFRhcmdldCkucmVwbGFjZSgvXFxcIi9nLCBcIidcIikpIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0LnNldEF0dHJpYnV0ZShzdHJpbmdLZXksIHBUYXJnZXQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb0F1dG9TYXZlKCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvU2F2ZSAmJiB0aGlzLmRvTm90UGVyc2lzdCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yc18xLkNvbmZpZ3VyYXRpb25FcnJvcihcIllvdSBoYXZlIHR1cm5lZCBvbiBhdXRvc2F2ZSBidXQgYXQgdGhlIHNhbWUgdGltZSBpdCBpcyBmb3JiaWRkZW4gdG8gcGVyc2lzdCB0aGUgdmFsdWUhXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5hdXRvU2F2ZUFsbG93ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b1NhdmVBbGxvd2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuYXV0b1NhdmUgfHwgIXV0aWxfMS5pc0Z1bmN0aW9uKHRoaXMub2JqZWN0LnNhdmUpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYXV0b1NhdmUgPT09IFwiYm9vbGVhblwiKVxuICAgICAgICAgICAgdGhpcy5vYmplY3Quc2F2ZSh0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmF1dG9TYXZlID09PSBcIm51bWJlclwiICYmICF0aGlzLmF1dG9TYXZlVGltZW91dCkge1xuICAgICAgICAgICAgdGhpcy5hdXRvU2F2ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9iamVjdC5zYXZlKHRoaXMucHJvcGVydHkpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmF1dG9TYXZlVGltZW91dDtcbiAgICAgICAgICAgIH0sIE1hdGguYWJzKHRoaXMuYXV0b1NhdmUpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuQXR0cmlidXRlID0gQXR0cmlidXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVhSMGNtbGlkWFJsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5c2FXSXZRWFIwY21saWRYUmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNaMFJCUVRoRU8wRkJSVGxFTEhkRVFVRnRSRHRCUVVOdVJDeDNSRUZCY1VRN1FVRkRja1FzTUVOQlFUSkdPMEZCUlROR0xEUkRRVUZ4UkR0QlFVTnlSQ3d3UkVGQmRVUTdRVUYzUlhaRUxFMUJRV0VzVTBGQk1rUXNVMEZCVVN4dFFrRkJVVHRKUVhGRmNFWXNXVUZCV1N4TlFVRlRMRVZCUVVVc1VVRkJWeXhGUVVGRkxFMUJRV2xFTzFGQlEycEdMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzVVVGQlVTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCY2tJMVFpeHhRa0ZCWjBJc1IwRkJXU3hMUVVGTExFTkJRVU03VVVGclFteERMRzlDUVVGbExFZEJRVmtzUzBGQlN5eERRVUZETzBsQlNYcERMRU5CUVVNN1NVRlJUU3hSUVVGUkxFTkJRVU1zUzBGQlowTTdVVUZETlVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhMUVVGTExFTkJRVU03V1VGQlJTeFBRVUZQTzFGQlF6RkRMRWxCUVVrc1MwRkJTeXhEUVVGRE8xRkJRMVlzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeExRVUZMTEVsQlFVazdXVUZCUlN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF6dFJRVU0xUlN4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRia01zU1VGQlNTeExRVUZMTzFsQlFVVXNOa0pCUVdFc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU53UlN4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRiRU1zU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMGxCUTNSQ0xFTkJRVU03U1VGUlRTeFpRVUZaTEVOQlFVTXNTMEZCWXl4RlFVRkZMRmRCUVd0Q0xFVkJRVVVzVVVGQlpUdFJRVU51UlN4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzFGQlEzcENMRWxCUVVrc1MwRkJTeXhMUVVGTExGTkJRVk1zU1VGQlNTeExRVUZMTEV0QlFVc3NTVUZCU1R0WlFVRkZMRTlCUVU4N1VVRkRiRVFzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4eFFrRkJZeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOdVJDeEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEYkVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETzBsQlEzUkNMRU5CUVVNN1NVRlRUU3huUWtGQlowSXNTMEZCU3l4RFFVRkRPMGxCVlhSQ0xHZENRVUZuUWl4RFFVRkRMRXRCUVdkRExFVkJRVVVzV1VGQmNVSXNTMEZCU3p0UlFVTm9SaXhKUVVGSkxIVkNRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1dVRkJXU3hYUVVGWExFTkJRVU1zUlVGQlJUdFpRVU5vUml4TlFVRk5MR1ZCUVdVc1IwRkJSeXh0UTBGQk5FSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0WlFVTnFSaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeExRVUZMTEV0QlFVc3NaVUZCWlN4RlFVRkZPMmRDUVVOb1J5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRE8yZENRVU12UWl4UFFVRlBMRXRCUVVzc1EwRkJRenRoUVVOb1FqdFRRVU5LTzFGQlEwUXNUMEZCVHl4RFFVRkRMRU5CUVVNc1MwRkJTeXhMUVVGTExFbEJRVWtzUTBGQlF5eFJRVUZSTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRlRWNzUTBGQlF6dEpRV05OTEhGQ1FVRnhRaXhEUVVGRExFdEJRV2RETzFGQlEzcEVMRWxCUVVrc1EwRkJReXgxUWtGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxGbEJRVmtzVjBGQlZ5eERRVUZETzFsQlFVVXNUMEZCVHp0UlFVTnNSU3hOUVVGTkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJRek5ETEUxQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUTNSRUxFbEJRVWtzV1VGQldTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTjRRaXhKUVVGSkxFOUJRVThzUTBGQlF6dFJRVVZhTEVsQlFVa3NWMEZCVnl4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVONFFpeEpRVUZKTEV0QlFVc3NXVUZCV1N3eVFrRkJXVHRaUVVGRkxGZEJRVmNzUjBGQlJ5eExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1VVRkZha1VzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4blFrRkJaMElzU1VGQlNTeFRRVUZUTEVWQlFVVTdXVUZEY2tNc1dVRkJXU3hIUVVGSExFdEJRVXNzUTBGQlF6dFRRVU40UWpzN1dVRkJUU3hQUVVGUExFZEJRVWNzY1VKQlFXTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRSUVVNM1F5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFZEJRVWNzU1VGQlNTeERRVUZETzFGQlJ6ZENMRWxCUVVrc1dVRkJXU3hKUVVGSkxGTkJRVk1zUzBGQlN5eFBRVUZQTEVsQlFVa3NVMEZCVXl4TFFVRkxMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU01Uml4SlFVRkpMRU5CUVVNc1RVRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eFRRVUZUTEVWQlFVVXNUMEZCVHl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xTkJRemxFTzBsQlEwd3NRMEZCUXp0SlFWVlBMRlZCUVZVN1VVRkRaQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmxCUVZrc1JVRkJSVHRaUVVOd1F5eE5RVUZOTEVsQlFVa3NNa0pCUVd0Q0xFTkJRVU1zZDBaQlFYZEdMRU5CUVVNc1EwRkJRenRUUVVNeFNEdFJRVU5FTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRk8xbEJRM1pDTEVsQlFVa3NRMEZCUXl4bFFVRmxMRWRCUVVjc1NVRkJTU3hEUVVGRE8xbEJRelZDTEU5QlFVODdVMEZEVmp0UlFVTkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEpRVUZKTEVOQlFVTXNhVUpCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXp0WlFVRkZMRTlCUVU4N1VVRkROVVFzU1VGQlNTeFBRVUZQTEVsQlFVa3NRMEZCUXl4UlFVRlJMRXRCUVVzc1UwRkJVenRaUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVU40UlN4SlFVRkpMRTlCUVU4c1NVRkJTU3hEUVVGRExGRkJRVkVzUzBGQlN5eFJRVUZSTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRk8xbEJRelZFTEVsQlFVa3NRMEZCUXl4bFFVRmxMRWRCUVVjc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJUdG5Ra0ZEYmtNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8yZENRVU5vUXl4UFFVRlBMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU03V1VGRGFFTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRMMEk3U1VGRFRDeERRVUZETzBOQlEwbzdRVUUzVEVRc09FSkJOa3hESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IG1zXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibXNcIikpO1xuY29uc3QgQkRPTWFwQ2FjaGVfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9NYXBDYWNoZVwiKTtcbmNsYXNzIEJET0NvbmZpZ01hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IEJET01hcENhY2hlXzEuQkRPTWFwQ2FjaGUoKTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0KGNvbmZpZykge1xuICAgICAgICBsZXQgdmFsdWUgPSBhd2FpdCB0aGlzLmdldENhY2hlKGNvbmZpZyk7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYXdhaXQgdGhpcy5sb2FkKGNvbmZpZyk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldENhY2hlKGNvbmZpZywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpO1xuICAgIH1cbiAgICBnZXRDYWNoZShjb25maWcpIHtcbiAgICAgICAgY29uc3QgZnJvbUxvY2FsQ2FjaGUgPSB0aGlzLmNhY2hlLmdldChjb25maWcpO1xuICAgICAgICBpZiAoZnJvbUxvY2FsQ2FjaGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tTG9jYWxDYWNoZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgYXN5bmMgc2V0Q2FjaGUoY29uZmlnLCB2YWx1ZSkge1xuICAgICAgICBsZXQgY29uZiA9IHRoaXMuY2FjaGUuZ2V0KCdfX0NvbmZpZ01hbmFnZXJDYWNoZVRpbWVvdXRfXycpO1xuICAgICAgICBpZiAoIXRoaXMuY2FjaGUuaGFzKCdfX0NvbmZpZ01hbmFnZXJDYWNoZVRpbWVvdXRfXycpKSB7XG4gICAgICAgICAgICBjb25mID0gKGF3YWl0IHRoaXMubG9hZCgnY29uZmlnJykpLnRpbWVvdXRzLmNvbmZpZ0NhY2hlO1xuICAgICAgICAgICAgaWYgKGNvbmYpXG4gICAgICAgICAgICAgICAgY29uZiA9IG1zXzEuZGVmYXVsdChjb25mKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUuc2V0KCdfX0NvbmZpZ01hbmFnZXJDYWNoZVRpbWVvdXRfXycsIGNvbmYpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGUuc2V0KGNvbmZpZywgdmFsdWUsIGNvbmYpO1xuICAgIH1cbn1cbmV4cG9ydHMuQkRPQ29uZmlnTWFuYWdlciA9IEJET0NvbmZpZ01hbmFnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQUTI5dVptbG5UV0Z1WVdkbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiR2xpTDBKRVQwTnZibVpwWjAxaGJtRm5aWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzYjBSQlFXOUNPMEZCUTNCQ0xITkVRVUZ0UkR0QlFXMUNia1FzVFVGQmMwSXNaMEpCUVdkQ08wbEJRWFJETzFGQlZXTXNWVUZCU3l4SFFVRTJRaXhKUVVGSkxIbENRVUZYTEVWQlFVVXNRMEZCUXp0SlFYZEZiRVVzUTBGQlF6dEpRUzlFVlN4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRV003VVVGRE0wSXNTVUZCU1N4TFFVRkxMRWRCUVVjc1RVRkJUU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTNoRExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdXVUZEVWl4TFFVRkxMRWRCUVVjc1RVRkJUU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMWxCUTJoRExFMUJRVTBzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VTBGRGRFTTdVVUZEUkN4UFFVRlBMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYkVNc1EwRkJRenRKUVRoQ1V5eFJRVUZSTEVOQlFVTXNUVUZCWXp0UlFVTTNRaXhOUVVGTkxHTkJRV01zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU01UXl4SlFVRkpMR05CUVdNc1JVRkJSVHRaUVVOb1FpeFBRVUZQTEdOQlFXTXNRMEZCUXp0VFFVTjZRanRSUVVORUxFOUJRVThzU1VGQlNTeERRVUZETzBsQlEyaENMRU5CUVVNN1NVRlhVeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFXTXNSVUZCUlN4TFFVRlZPMUZCUXk5RExFbEJRVWtzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExDdENRVUVyUWl4RFFVRkRMRU5CUVVNN1VVRkRNMFFzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExDdENRVUVyUWl4RFFVRkRMRVZCUVVVN1dVRkRiRVFzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJRenRaUVVONFJDeEpRVUZKTEVsQlFVazdaMEpCUVVVc1NVRkJTU3hIUVVGSExGbEJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTXhRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl3clFrRkJLMElzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTjZSRHRSUVVORUxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEZUVNc1EwRkJRenREUVVOS08wRkJiRVpFTERSRFFXdEdReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBCRE9EYXRhYmFzZW1hbmFnZXIge1xufVxuZXhwb3J0cy5CRE9EYXRhYmFzZW1hbmFnZXIgPSBCRE9EYXRhYmFzZW1hbmFnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQUkdGMFlXSmhjMlZOWVc1aFoyVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlzYVdJdlFrUlBSR0YwWVdKaGMyVk5ZVzVoWjJWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUTBFc1RVRkJjMElzYTBKQlFXdENPME5CUlhaRE8wRkJSa1FzWjBSQlJVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgbW9tZW50XzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibW9tZW50XCIpKTtcbmNvbnN0IHBhdGhfMSA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNsYXNzIEJET0xvZ2dlciB7XG4gICAgY29uc3RydWN0b3IoX3BhcmFtcykge1xuICAgICAgICB0aGlzLmxvZ0ZpbGUgPSAnZGVmYXVsdC5sb2cnO1xuICAgICAgICB0aGlzLnByZXZlbnRDb25zb2xlUHJpbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcmV2ZW50RmlsZVByaW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9nTGV2ZWwgPSAnZGVidWcnO1xuICAgICAgICB0aGlzLnByb3RvdHlwZU5hbWVzID0gdXRpbF8xLmdldFByb3RvdHlwZU5hbWVzUmVjdXJzaXZlKHRoaXMpO1xuICAgIH1cbiAgICBsb2cobWVzc2FnZSwgbG9nbGV2ZWwgPSAnbG9nJywgLi4uYXJncykge1xuICAgICAgICBpZiAobG9nbGV2ZWwgIT09ICdsb2cnICYmICF0aGlzLmlzQWxsb3dlZChsb2dsZXZlbCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy5wcmV2ZW50Q29uc29sZVByaW50IHx8IFsnbG9nJywgJ2Vycm9yJ10uaW5jbHVkZXMobG9nbGV2ZWwpKSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmdldEhlYWRlcihsb2dsZXZlbCk7XG4gICAgICAgICAgICBsZXQgbmV3QXJncyA9IFtdO1xuICAgICAgICAgICAgaWYgKGhlYWRlciBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgbmV3QXJncyA9IG5ld0FyZ3MuY29uY2F0KGhlYWRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbmV3QXJncy5wdXNoKGhlYWRlcik7XG4gICAgICAgICAgICBuZXdBcmdzLnB1c2gobWVzc2FnZSk7XG4gICAgICAgICAgICBuZXdBcmdzID0gbmV3QXJncy5jb25jYXQoYXJncyk7XG4gICAgICAgICAgICBjb25zb2xlW2xvZ2xldmVsXS5hcHBseSh0aGlzLCBuZXdBcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShhcmdzKTtcbiAgICAgICAgaWYgKCF0aGlzLnByZXZlbnRGaWxlUHJpbnQgfHwgbG9nbGV2ZWwgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMud3JpdGVUb0ZpbGUobG9nbGV2ZWwsIG1lc3NhZ2UgKyBwYXJzZWRTdHJpbmcuc3Vic3RyKDEsIHBhcnNlZFN0cmluZy5sZW5ndGggLSAyKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVidWcobWVzc2FnZSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBhcHBseSA9IFttZXNzYWdlLCAnZGVidWcnXS5jb25jYXQoYXJncyk7XG4gICAgICAgIHRoaXMubG9nLmFwcGx5KHRoaXMsIGFwcGx5KTtcbiAgICB9XG4gICAgaW5mbyhtZXNzYWdlLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGFwcGx5ID0gW21lc3NhZ2UsICdpbmZvJ10uY29uY2F0KGFyZ3MpO1xuICAgICAgICB0aGlzLmxvZy5hcHBseSh0aGlzLCBhcHBseSk7XG4gICAgfVxuICAgIHdhcm4obWVzc2FnZSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBhcHBseSA9IFttZXNzYWdlLCAnd2FybiddLmNvbmNhdChhcmdzKTtcbiAgICAgICAgdGhpcy5sb2cuYXBwbHkodGhpcywgYXBwbHkpO1xuICAgIH1cbiAgICBlcnJvcihtZXNzYWdlLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGFwcGx5ID0gW21lc3NhZ2UsICdlcnJvciddLmNvbmNhdChhcmdzKTtcbiAgICAgICAgdGhpcy5sb2cuYXBwbHkodGhpcywgYXBwbHkpO1xuICAgIH1cbiAgICBnZXRQcm9jSW5mbygpIHtcbiAgICAgICAgcmV0dXJuIGAke2dsb2JhbC5wcm9jZXNzLmVudi5uYW1lIHx8ICcnfSAke2dsb2JhbC5wcm9jZXNzLmVudi5ob3N0bmFtZSB8fCAnJ30gJHtnbG9iYWwucHJvY2Vzcy5waWR9YDtcbiAgICB9XG4gICAgaXNBbGxvd2VkKGxvZ0xldmVsKSB7XG4gICAgICAgIGNvbnN0IGxvZ0xldmVsT3JkZXIgPSBbJ2xvZycsICdkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXTtcbiAgICAgICAgcmV0dXJuIGxvZ0xldmVsT3JkZXIuaW5kZXhPZihsb2dMZXZlbCkgPj0gbG9nTGV2ZWxPcmRlci5pbmRleE9mKHRoaXMubG9nTGV2ZWwpO1xuICAgIH1cbiAgICBjdXJyZW50VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudF8xLmRlZmF1bHQoKS5mb3JtYXQoJ0RELk1NLllZWVkgSEg6bW06c3MnKTtcbiAgICB9XG4gICAgZ2V0TG9nUG9pbnQoKSB7XG4gICAgICAgIGNvbnN0IHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgICBsZXQgY2FsbHBvaW50O1xuICAgICAgICBmb3IgKGNvbnN0IFtpbmRleCwgc3RhY2twYXJ0XSBvZiBzdGFjay5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgIGlmICghaW5kZXgpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIXV0aWxfMS5pbmNsdWRlc01lbWJlck9mTGlzdChzdGFja3BhcnQsIHRoaXMucHJvdG90eXBlTmFtZXMsICcudHMnKSkge1xuICAgICAgICAgICAgICAgIGNhbGxwb2ludCA9IHN0YWNrcGFydC5zcGxpdChwYXRoXzEuc2VwKS5wb3AoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsbHBvaW50KSB7XG4gICAgICAgICAgICBjYWxscG9pbnQgPSBjYWxscG9pbnQucmVwbGFjZSgnKScsICcnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxwb2ludCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWxscG9pbnQ7XG4gICAgfVxufVxuZXhwb3J0cy5CRE9Mb2dnZXIgPSBCRE9Mb2dnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQVEc5bloyVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlzYVdJdlFrUlBURzluWjJWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVOQkxEUkVRVUUwUWp0QlFVTTFRaXdyUWtGQk1rSTdRVUZETTBJc01FTkJRVzFHTzBGQlYyNUdMRTFCUVhOQ0xGTkJRVk03U1VGclJETkNMRmxCUVZrc1QwRkJaME03VVVFelEzSkRMRmxCUVU4c1IwRkJXU3hoUVVGaExFTkJRVU03VVVGUmFrTXNkMEpCUVcxQ0xFZEJRV0VzUzBGQlN5eERRVUZETzFGQlVYUkRMSEZDUVVGblFpeEhRVUZoTEV0QlFVc3NRMEZCUXp0UlFXVnVReXhoUVVGUkxFZEJRV1VzVDBGQlR5eERRVUZETzFGQlZXNUNMRzFDUVVGakxFZEJRV0VzYVVOQlFUQkNMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRkwwSXNRMEZCUXp0SlFWY3hReXhIUVVGSExFTkJRVU1zVDBGQldTeEZRVUZGTEZkQlFYTkNMRXRCUVVzc1JVRkJSU3hIUVVGSExFbEJRVmM3VVVGRGFFVXNTVUZCU1N4UlFVRlJMRXRCUVVzc1MwRkJTeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNN1dVRkJSU3hQUVVGUE8xRkJRelZFTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZPMWxCUTJ4RkxFMUJRVTBzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03V1VGRGVFTXNTVUZCU1N4UFFVRlBMRWRCUVdFc1JVRkJSU3hEUVVGRE8xbEJRek5DTEVsQlFVa3NUVUZCVFN4WlFVRlpMRXRCUVVzc1JVRkJSVHRuUWtGRGVrSXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdZVUZEY0VNN08yZENRVUZOTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03V1VGRE5VSXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFpRVU4wUWl4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTmtMRTlCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8xTkJRelZFTzFGQlEwUXNUVUZCVFN4WlFVRlpMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTXhReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhKUVVGSkxGRkJRVkVzUzBGQlN5eFBRVUZQTEVWQlFVVTdXVUZEYUVRc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVWQlFVVXNUMEZCVHl4SFFVRkhMRmxCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEZsQlFWa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU42Ump0SlFVTk1MRU5CUVVNN1NVRlJUU3hMUVVGTExFTkJRVU1zVDBGQldTeEZRVUZGTEVkQlFVY3NTVUZCVXp0UlFVTnVReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZET1VNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRnZRaXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU5zUkN4RFFVRkRPMGxCVVUwc1NVRkJTU3hEUVVGRExFOUJRVmtzUlVGQlJTeEhRVUZITEVsQlFWTTdVVUZEYkVNc1RVRkJUU3hMUVVGTExFZEJRVWNzUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlF6ZERMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NSVUZCYjBJc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJFUXNRMEZCUXp0SlFWRk5MRWxCUVVrc1EwRkJReXhQUVVGWkxFVkJRVVVzUjBGQlJ5eEpRVUZUTzFGQlEyeERMRTFCUVUwc1MwRkJTeXhIUVVGSExFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU0zUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVWQlFXOUNMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMnhFTEVOQlFVTTdTVUZSVFN4TFFVRkxMRU5CUVVNc1QwRkJXU3hGUVVGRkxFZEJRVWNzU1VGQlV6dFJRVU51UXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE9VTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZ2UWl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOc1JDeERRVUZETzBsQlUxTXNWMEZCVnp0UlFVTnFRaXhQUVVGUExFZEJRVWNzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSkxFVkJRVVVzU1VGQlNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFbEJRVWtzUlVGQlJTeEpRVUZKTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03U1VGRGVrY3NRMEZCUXp0SlFTdENVeXhUUVVGVExFTkJRVU1zVVVGQmJVSTdVVUZEYmtNc1RVRkJUU3hoUVVGaExFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RlFVRkZMRTFCUVUwc1JVRkJSU3hOUVVGTkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdVVUZEYUVVc1QwRkJUeXhoUVVGaExFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMR0ZCUVdFc1EwRkJReXhQUVVGUExFTkJRVk1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMGxCUXpOR0xFTkJRVU03U1VGVFV5eFhRVUZYTzFGQlEycENMRTlCUVU4c1owSkJRVTBzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eERRVUZETzBsQlEyeEVMRU5CUVVNN1NVRlRVeXhYUVVGWE8xRkJRMnBDTEUxQlFVMHNTMEZCU3l4SFFVRlpMRWxCUVVrc1MwRkJTeXhGUVVGRkxFTkJRVU1zUzBGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOMFJDeEpRVUZKTEZOQlFWTXNRMEZCUXp0UlFVTmtMRXRCUVVzc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZUTEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFVkJRVVU3V1VGRE9VTXNTVUZCU1N4RFFVRkRMRXRCUVVzN1owSkJRVVVzVTBGQlV6dFpRVU55UWl4SlFVRkpMRU5CUVVNc01rSkJRVzlDTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRVVVzUzBGQlN5eERRVUZETEVWQlFVVTdaMEpCUXpsRUxGTkJRVk1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRlZCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTjJReXhOUVVGTk8yRkJRMVE3VTBGRFNqdFJRVU5FTEVsQlFVa3NVMEZCVXl4RlFVRkZPMWxCUTFnc1UwRkJVeXhIUVVGSExGTkJRVk1zUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRekZETzJGQlFVMDdXVUZEU0N4VFFVRlRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xTkJRMnhDTzFGQlEwUXNUMEZCVHl4VFFVRlRMRU5CUVVNN1NVRkRja0lzUTBGQlF6dERRVU5LTzBGQk0wMUVMRGhDUVRKTlF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEVudGl0eSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSwgZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5leHBpcmUgPSBJbmZpbml0eTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5leHBpcmUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIChkdXJhdGlvbiB8fCBJbmZpbml0eSk7XG4gICAgfVxuICAgIGdldCBleHBpcmVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leHBpcmUgPyB0aGlzLmV4cGlyZSA8IG5ldyBEYXRlKCkuZ2V0VGltZSgpIDogZmFsc2U7XG4gICAgfVxufVxuY2xhc3MgQkRPTWFwQ2FjaGUgZXh0ZW5kcyBNYXAge1xuICAgIHNldChrZXksIHZhbHVlLCBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBlbnRpdHkgPSBuZXcgRW50aXR5KHZhbHVlLCBkdXJhdGlvbik7XG4gICAgICAgIHJldHVybiBzdXBlci5zZXQoa2V5LCBlbnRpdHkpO1xuICAgIH1cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IHN1cGVyLmdldChrZXkpO1xuICAgICAgICBpZiAoZW50aXR5ID09PSB1bmRlZmluZWQgfHwgZW50aXR5LmV4cGlyZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnRpdHkuZGF0YTtcbiAgICB9XG59XG5leHBvcnRzLkJET01hcENhY2hlID0gQkRPTWFwQ2FjaGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQVFdGd1EyRmphR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJ4cFlpOUNSRTlOWVhCRFlXTm9aUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVdEJMRTFCUVUwc1RVRkJUVHRKUVdkQ1VpeFpRVUZaTEVsQlFVOHNSVUZCUlN4UlFVRnBRanRSUVVZNVFpeFhRVUZOTEVkQlFWY3NVVUZCVVN4RFFVRkRPMUZCUnpsQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTJwQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4SlFVRkpMRVZCUVVVc1EwRkJReXhQUVVGUExFVkJRVVVzUjBGQlJ5eERRVUZETEZGQlFWRXNTVUZCU1N4UlFVRlJMRU5CUVVNc1EwRkJRenRKUVVOb1JTeERRVUZETzBsQlUwUXNTVUZCU1N4UFFVRlBPMUZCUTFBc1QwRkJUeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWtzU1VGQlNTeEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU53UlN4RFFVRkRPME5CUTBvN1FVRlRSQ3hOUVVGaExGZEJRV3RDTEZOQlFWRXNSMEZCYVVJN1NVRlhOME1zUjBGQlJ5eERRVUZETEVkQlFVMHNSVUZCUlN4TFFVRlJMRVZCUVVVc1VVRkJhVUk3VVVGRE1VTXNUVUZCVFN4TlFVRk5MRWRCUVVjc1NVRkJTU3hOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUXpORExFOUJRVThzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGJFTXNRMEZCUXp0SlFWTk5MRWRCUVVjc1EwRkJReXhIUVVGTk8xRkJRMklzVFVGQlRTeE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU01UWl4SlFVRkpMRTFCUVUwc1MwRkJTeXhUUVVGVExFbEJRVWtzVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlR0WlFVTjRReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTJwQ0xFOUJRVThzVTBGQlV5eERRVUZETzFOQlEzQkNPMUZCUTBRc1QwRkJUeXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETzBsQlEzWkNMRU5CUVVNN1EwRkRTanRCUVM5Q1JDeHJRMEVyUWtNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBCRE9Nb2RlbF8xO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IHV1aWRfMSA9IHJlcXVpcmUoXCJ1dWlkXCIpO1xuY29uc3QgdHlwZV9ncmFwaHFsXzEgPSByZXF1aXJlKFwidHlwZS1ncmFwaHFsXCIpO1xuY29uc3QgQmluZGluZ18xID0gcmVxdWlyZShcIn5iZG8vbGliL0JpbmRpbmdcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgTW9kZWxSZWdpc3RyeV8xID0gcmVxdWlyZShcIn5iZG8vbGliL01vZGVsUmVnaXN0cnlcIik7XG5sZXQgQkRPTW9kZWwgPSBCRE9Nb2RlbF8xID0gY2xhc3MgQkRPTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQkRPTW9kZWwgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gQkRPTW9kZWxfMS5jb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy5kYXRhYmFzZU5hbWUgPSBCRE9Nb2RlbF8xLmRhdGFiYXNlTmFtZTtcbiAgICAgICAgdGhpcy5pZCA9IGBwZW5kaW5nXyR7dXVpZF8xLnY0KCl9YDtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcy5jb25zdHJ1Y3RvcikubmFtZTtcbiAgICAgICAgTW9kZWxSZWdpc3RyeV8xLk1vZGVsUmVnaXN0cnkuZ2V0SW5zdGFuY2UoKS5yZWdpc3Rlcih0aGlzKTtcbiAgICB9XG4gICAgZ2V0IGJpbmRpbmdzKCkge1xuICAgICAgICBjb25zdCBiaW5kaW5ncyA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcywgXCJiaW5kaW5nc1wiKTtcbiAgICAgICAgcmV0dXJuIGJpbmRpbmdzID8gYmluZGluZ3MgOiBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZUJ5SUQoX2lkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKTtcbiAgICB9XG4gICAgZ2V0UmVmZXJlbmNlU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYF9yZWZlcmVuY2U6JHt0aGlzLmNsYXNzTmFtZX0ke3RoaXMuaWR9YDtcbiAgICB9XG4gICAgYmluZChwcm9wTmFtZSwgbW9kZSkge1xuICAgICAgICByZXR1cm4gbmV3IEJpbmRpbmdfMS5CaW5kaW5nKHRoaXMsIHByb3BOYW1lLCBtb2RlKTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnRvSlNPTigpO1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgICAgICAgICBpZiAodGhpc1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpc1trZXldO1xuICAgICAgICAgICAgICAgIGRhdGFba2V5XSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGFzeW5jIGlzVW5zYXZlZChhdHRyKSB7XG4gICAgICAgIGNvbnN0IHVuc2F2ZWRDaGFuZ2VzID0gYXdhaXQgdGhpcy5nZXRVbnNhdmVkQ2hhbmdlcygpO1xuICAgICAgICBsZXQgdW5zYXZlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodW5zYXZlZENoYW5nZXMgJiYgdW5zYXZlZENoYW5nZXMuaGFzT3duUHJvcGVydHkoYXR0cikpXG4gICAgICAgICAgICB1bnNhdmVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bnNhdmVkKTtcbiAgICB9XG4gICAgYXN5bmMgaGFzVW5zYXZlZENoYW5nZXMoKSB7XG4gICAgICAgIGNvbnN0IHVuc2F2ZWRDaGFuZ2VzID0gYXdhaXQgdGhpcy5nZXRVbnNhdmVkQ2hhbmdlcygpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKEJvb2xlYW4oT2JqZWN0LmtleXModW5zYXZlZENoYW5nZXMpLmxlbmd0aCkpO1xuICAgIH1cbn07XG5CRE9Nb2RlbC5ncmFwaFFMVHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihCRE9Nb2RlbF8xLmNvbnN0cnVjdG9yKTtcbkJET01vZGVsLmlzQkRPTW9kZWwgPSB0cnVlO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxuXSwgQkRPTW9kZWwucHJvdG90eXBlLCBcImlzQkRPTW9kZWxcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgQkRPTW9kZWwucHJvdG90eXBlLCBcImNvbGxlY3Rpb25OYW1lXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIEJET01vZGVsLnByb3RvdHlwZSwgXCJkYXRhYmFzZU5hbWVcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmF0dHJpYnV0ZSgoX3R5cGUpID0+IHR5cGVfZ3JhcGhxbF8xLklEKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBCRE9Nb2RlbC5wcm90b3R5cGUsIFwiaWRcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmF0dHJpYnV0ZSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIEJET01vZGVsLnByb3RvdHlwZSwgXCJjbGFzc05hbWVcIiwgdm9pZCAwKTtcbkJET01vZGVsID0gQkRPTW9kZWxfMSA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3Rvcih7IGlzQWJzdHJhY3Q6IHRydWUgfSksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG5dLCBCRE9Nb2RlbCk7XG5leHBvcnRzLkJET01vZGVsID0gQkRPTW9kZWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQVFc5a1pXd3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMnhwWWk5Q1JFOU5iMlJsYkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFc0swSkJRV3RETzBGQlEyeERMQ3REUVVGclF6dEJRVU5zUXl3NFEwRkJkMFE3UVVGRGVFUXNjMFJCUVRaRk8wRkJRemRGTEd0RVFVRnJSRHRCUVVWc1JDd3dSRUZCZFVRN1FVRlhka1FzU1VGQmMwSXNVVUZCVVN4blFrRkJPVUlzVFVGQmMwSXNVVUZCVVR0SlFTdEhNVUk3VVVGb1JEUkNMR1ZCUVZVc1IwRkJXU3hKUVVGSkxFTkJRVU03VVVGUk0wSXNiVUpCUVdNc1IwRkJXU3hWUVVGUkxFTkJRVU1zWTBGQll5eERRVUZETzFGQlVXeEVMR2xDUVVGWkxFZEJRVmtzVlVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXp0UlFWTjZReXhQUVVGRkxFZEJRVmNzVjBGQlZ5eFRRVUZKTEVWQlFVVXNSVUZCUlN4RFFVRkRPMUZCVlhKRExHTkJRVk1zUjBGQlZ5eE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTTdVVUZqTVVZc05rSkJRV0VzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGREwwTXNRMEZCUXp0SlFYWkhSQ3hKUVVGakxGRkJRVkU3VVVGRGJFSXNUVUZCVFN4UlFVRlJMRWRCUVVjc2MwSkJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRMME1zVDBGQlR5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZITEVWQlFVVXNRMEZCUXp0SlFVTXpReXhEUVVGRE8wbEJPRVpOTEUxQlFVMHNRMEZCUXl4bFFVRmxMRU5CUVhkRExFZEJRVms3VVVGRE4wVXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMGxCUTNaRExFTkJRVU03U1VGWlRTeHJRa0ZCYTBJN1VVRkRja0lzVDBGQlR5eGpRVUZqTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzQkVMRU5CUVVNN1NVRlhUU3hKUVVGSkxFTkJRVEpGTEZGQlFWY3NSVUZCUlN4SlFVRlJPMUZCUTNaSExFOUJRVThzU1VGQlNTeHBRa0ZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUUyUkN4RFFVRkRPMGxCUTNwSExFTkJRVU03U1VGUlRTeFJRVUZSTzFGQlExZ3NUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFGQlF6TkNMRTlCUVU4c1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTm9ReXhEUVVGRE8wbEJWVTBzVFVGQlRUdFJRVU5VTEUxQlFVMHNTVUZCU1N4SFFVRnRRaXhGUVVGRkxFTkJRVU03VVVGRGFFTXNTMEZCU3l4TlFVRk5MRWRCUVVjc1NVRkJTU3hKUVVGSkxFVkJRVVU3V1VGRGNFSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzVTBGQlV5eEZRVUZGTzJkQ1FVTjZRaXhOUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRekZDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU03WVVGRGRrSTdVMEZEU2p0UlFVTkVMRTlCUVU4c1NVRkJTU3hEUVVGRE8wbEJRMmhDTEVOQlFVTTdTVUUwUWswc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUVyUWp0UlFVTnNSQ3hOUVVGTkxHTkJRV01zUjBGQlJ5eE5RVUZOTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeERRVUZETzFGQlEzUkVMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU53UWl4SlFVRkpMR05CUVdNc1NVRkJTU3hqUVVGakxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXp0WlFVRkZMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRE1VVXNUMEZCVHl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzBsQlEzQkRMRU5CUVVNN1NVRlRUU3hMUVVGTExFTkJRVU1zYVVKQlFXbENPMUZCUXpGQ0xFMUJRVTBzWTBGQll5eEhRVUZITEUxQlFVMHNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTEVOQlFVTTdVVUZEZEVRc1QwRkJUeXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRlRVVzUTBGQlF6dERRVmRLTEVOQlFVRTdRVUYyVFRCQ0xHOUNRVUZYTEVkQlFWRXNUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhWUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdRVUZuUXk5RUxHMUNRVUZWTEVkQlFWa3NTVUZCU1N4RFFVRkRPMEZCVVhSRE8wbEJRVmdzY1VKQlFWRXNSVUZCUlRzN05FTkJRVFJETzBGQlVUTkRPMGxCUVZnc2NVSkJRVkVzUlVGQlJUczdaMFJCUVcxRk8wRkJVV3hGTzBsQlFWZ3NjVUpCUVZFc1JVRkJSVHM3T0VOQlFTdEVPMEZCVTJoRU8wbEJRWHBDTEhOQ1FVRlRMRU5CUVVNc1EwRkJReXhMUVVGTExFVkJRVVVzUlVGQlJTeERRVUZETEdsQ1FVRkZMRU5CUVVNN08yOURRVUY1UXp0QlFWVnlSRHRKUVVGYUxITkNRVUZUTEVWQlFVVTdPekpEUVVGclJqdEJRV3hITlVVc1VVRkJVVHRKUVVRM1FpdzBRa0ZCWlN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZET3p0SFFVTm9RaXhSUVVGUkxFTkJPRTQzUWp0QlFUbE9jVUlzTkVKQlFWRWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuY2xhc3MgQkRPUm91dGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJvdXRlck5hbWVTcGFjZSA9IGAvJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWUudG9Mb3dlckNhc2UoKX1gO1xuICAgICAgICB0aGlzLnJvdXRlcyA9IFsnLyddO1xuICAgICAgICB0aGlzLnRlbXBsYXRlU3RyaW5nID0gJzxkaXY+PC9kaXY+JztcbiAgICAgICAgdGhpcy5qc29uT25seSA9IGZhbHNlO1xuICAgIH1cbiAgICByZW5kZXJUZW1wbGF0ZSh0ZW1wbGF0ZVBhcmFtcykge1xuICAgICAgICBsZXQgc3RyaW5nVG9QYXJzZSA9IG51bGw7XG4gICAgICAgIGlmICh1dGlsXzEuaXNTdHJpbmcodGhpcy50ZW1wbGF0ZVN0cmluZykpIHtcbiAgICAgICAgICAgIHN0cmluZ1RvUGFyc2UgPSBlbnZpcm9ubWVudF8xLnRlbXBsYXRlRW52aXJvbm1lbnQucmVuZGVyU3RyaW5nKHRoaXMudGVtcGxhdGVTdHJpbmcsIHRlbXBsYXRlUGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXRpbF8xLmlzT2JqZWN0KHRoaXMudGVtcGxhdGVTdHJpbmcpKSB7XG4gICAgICAgICAgICBzdHJpbmdUb1BhcnNlID0gdGhpcy50ZW1wbGF0ZVN0cmluZy5yZW5kZXIodGVtcGxhdGVQYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHJpbmdUb1BhcnNlO1xuICAgIH1cbiAgICBhc3luYyB0ZW1wbGF0ZVBhcmFtcyhfcmVxdWVzdE9yUGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG59XG5leHBvcnRzLkJET1JvdXRlID0gQkRPUm91dGU7XG5CRE9Sb3V0ZS5hdHRhY2hUb1NlcnZlcnMgPSBbJyonXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBVbTkxZEdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyeHBZaTlDUkU5U2IzVjBaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVVkJMREJEUVVGeFJEdEJRVU55UkN4M1JFRkJOa1E3UVVGVE4wUXNUVUZCYzBJc1VVRkJVVHRKUVVFNVFqdFJRWEZDVnl4dlFrRkJaU3hIUVVGWExFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFVkJRVVVzUTBGQlF6dFJRVkZ3UlN4WFFVRk5MRWRCUVdFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRV3RDZEVJc2JVSkJRV01zUjBGQmMwSXNZVUZCWVN4RFFVRkRPMUZCVld4RUxHRkJRVkVzUjBGQldTeExRVUZMTEVOQlFVTTdTVUZ0UkhoRExFTkJRVU03U1VGNFEyRXNZMEZCWXl4RFFVRkRMR05CUVRoQ08xRkJRMjVFTEVsQlFVa3NZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVONlFpeEpRVUZKTEdWQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFVkJRVVU3V1VGREwwSXNZVUZCWVN4SFFVRkhMR2xEUVVGdFFpeERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhGUVVGRkxHTkJRV01zUTBGQlF5eERRVUZETzFOQlEzcEdPMUZCUTBRc1NVRkJTU3hsUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RlFVRkZPMWxCUXk5Q0xHRkJRV0VzUjBGQll5eEpRVUZKTEVOQlFVTXNZMEZCWlN4RFFVRkRMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF6dFRRVU14UlR0UlFVTkVMRTlCUVU4c1lVRkJZU3hEUVVGRE8wbEJRM3BDTEVOQlFVTTdTVUZYVXl4TFFVRkxMRU5CUVVNc1kwRkJZeXhEUVVGRExHZENRVUV3UXp0UlFVTnlSU3hQUVVGUExFVkJRVVVzUTBGQlF6dEpRVU5rTEVOQlFVTTdPMEZCTVVaTUxEUkNRVFJIUXp0QlFXaEhhVUlzZDBKQlFXVXNSMEZCWVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJpbmRpbmdfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CaW5kaW5nXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmZ1bmN0aW9uIGJhc2VDb25zdHJ1Y3RvckZhY3RvcnkoY3RvciwgY29uc3RQYXJhbXNJbmRleCkge1xuICAgIGNsYXNzIEJhc2VDb25zdHJ1Y3RvciBleHRlbmRzIGN0b3Ige1xuICAgICAgICBjb25zdHJ1Y3RvciguLi5wYXJhbXMpIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLnBhcmFtcyk7XG4gICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gQmFzZUNvbnN0cnVjdG9yLmNvbGxlY3Rpb25OYW1lO1xuICAgICAgICAgICAgdGhpcy5kYXRhYmFzZU5hbWUgPSBCYXNlQ29uc3RydWN0b3IuZGF0YWJhc2VOYW1lO1xuICAgICAgICAgICAgY29uc3QgY29uc3RQYXJhbXMgPSBwYXJhbXNbY29uc3RQYXJhbXNJbmRleF07XG4gICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMsIFwibm9ybWFsRnVuY3Rpb25hbGl0eVwiLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghQmFzZUNvbnN0cnVjdG9yLmlzUHJvY2VkdXJhbENvbXBvbmVudENvbnN0cnVjdGlvbilcbiAgICAgICAgICAgICAgICB0aGlzLmludm9rZUxpZmVDeWNsZShjb25zdFBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgaW52b2tlTGlmZUN5Y2xlKGNvbnN0UGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAoIShjb25zdFBhcmFtcyBpbnN0YW5jZW9mIE9iamVjdCkpXG4gICAgICAgICAgICAgICAgY29uc3RQYXJhbXMgPSB7fTtcbiAgICAgICAgICAgIGxldCBkZWZhdWx0U2V0dGluZ3MgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMsIFwiZGVmYXVsdFNldHRpbmdzXCIpIHx8IHt9O1xuICAgICAgICAgICAgZGVmYXVsdFNldHRpbmdzID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0U2V0dGluZ3MsIGNvbnN0UGFyYW1zKTtcbiAgICAgICAgICAgIGlmICh1dGlsXzEuaXNGdW5jdGlvbih0aGlzLmdldE5hbWVzcGFjZWRTdG9yYWdlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gY29uc3RQYXJhbXMuaWQgfHwgZGVmYXVsdFNldHRpbmdzLmlkO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlZFNldHRpbmdzID0gdGhpcy5nZXROYW1lc3BhY2VkU3RvcmFnZShcIipcIiwgXCJpZFwiLCBpZCkgfHwge307XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY2FjaGVkU2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhY2hlZFNldHRpbmdzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkZWZhdWx0U2V0dGluZ3Nba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQmluZGluZ18xLkJpbmRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldFZhbHVlKGNhY2hlZFNldHRpbmdzW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTZXR0aW5nc1trZXldID0gY2FjaGVkU2V0dGluZ3Nba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGVmYXVsdFNldHRpbmdzKTtcbiAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcywgXCJjb25zdHJ1Y3Rpb25Db21wbGV0ZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICh1dGlsXzEuaXNGdW5jdGlvbih0aGlzLmNvbnN0cnVjdGVkQ2FsbGJhY2spKVxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEJhc2VDb25zdHJ1Y3Rvci5jbGFzc05hbWUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQmFzZUNvbnN0cnVjdG9yKS5uYW1lO1xuICAgIEJhc2VDb25zdHJ1Y3Rvci5ncmFwaFFMVHlwZSA9IGN0b3I7XG4gICAgQmFzZUNvbnN0cnVjdG9yLmNvbGxlY3Rpb25OYW1lID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShCYXNlQ29uc3RydWN0b3IsIFwiY29sbGVjdGlvbk5hbWVcIik7XG4gICAgQmFzZUNvbnN0cnVjdG9yLmRhdGFiYXNlTmFtZSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoQmFzZUNvbnN0cnVjdG9yLCBcImRhdGFiYXNlTmFtZVwiKTtcbiAgICBCYXNlQ29uc3RydWN0b3IuaXNQcm9jZWR1cmFsQ29tcG9uZW50Q29uc3RydWN0aW9uID0gZmFsc2U7XG4gICAgcmV0dXJuIEJhc2VDb25zdHJ1Y3Rvcjtcbn1cbmV4cG9ydHMuYmFzZUNvbnN0cnVjdG9yRmFjdG9yeSA9IGJhc2VDb25zdHJ1Y3RvckZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRbUZ6WlVOdmJuTjBjblZqZEc5eUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXNhV0l2UW1GelpVTnZibk4wY25WamRHOXlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNPRU5CUVRKRE8wRkJRek5ETEd0RVFVRnJSVHRCUVVOc1JTd3dRMEZCTmtNN1FVRXJSRGRETEZOQlFXZENMSE5DUVVGelFpeERRVUU0UXl4SlFVRlBMRVZCUVVVc1owSkJRWGRDTzBsQlVXcElMRTFCUVUwc1pVRkJaMElzVTBGQlVTeEpRVUZKTzFGQlowVTVRaXhaUVVGWkxFZEJRVWNzVFVGQllUdFpRVU40UWl4TFFVRkxMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF6dFpRVmhNTEcxQ1FVRmpMRWRCUVZrc1pVRkJaU3hEUVVGRExHTkJRV01zUTBGQlF6dFpRVkY2UkN4cFFrRkJXU3hIUVVGWkxHVkJRV1VzUTBGQlF5eFpRVUZaTEVOQlFVTTdXVUZKYWtVc1RVRkJUU3hYUVVGWExFZEJRVWNzVFVGQlRTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFTkJRVU03V1VGRE4wTXNlVUpCUVdNc1EwRkJReXhKUVVGSkxFVkJRVVVzY1VKQlFYRkNMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRGJFUXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhwUTBGQmFVTTdaMEpCUVVVc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTTVSaXhEUVVGRE8xRkJVVTBzWlVGQlpTeERRVUZETEZkQlFYZERPMWxCUXpORUxFbEJRVWtzUTBGQlF5eERRVUZETEZkQlFWY3NXVUZCV1N4TlFVRk5MRU5CUVVNN1owSkJRVVVzVjBGQlZ5eEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTjJSQ3hKUVVGSkxHVkJRV1VzUjBGQk1rTXNjMEpCUVZjc1EwRkJReXhKUVVGSkxFVkJRVVVzYVVKQlFXbENMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03V1VGRGVrY3NaVUZCWlN4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zWlVGQlpTeEZRVUZGTEZkQlFWY3NRMEZCUXl4RFFVRkRPMWxCUXpsRUxFbEJRVWtzYVVKQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNSVUZCUlR0blFrRkRka01zVFVGQlRTeEZRVUZGTEVkQlFVY3NWMEZCVnl4RFFVRkRMRVZCUVVVc1NVRkJTU3hsUVVGbExFTkJRVU1zUlVGQlJTeERRVUZETzJkQ1FVTm9SQ3hOUVVGTkxHTkJRV01zUjBGQlJ5eEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zUjBGQlJ5eEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03WjBKQlEzUkZMRXRCUVVzc1RVRkJUU3hIUVVGSExFbEJRVWtzWTBGQll5eEZRVUZGTzI5Q1FVTTVRaXhKUVVGSkxHTkJRV01zUTBGQlF5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN2QwSkJRM0JETEUxQlFVMHNUMEZCVHl4SFFVRkhMR1ZCUVdVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dDNRa0ZEY2tNc1NVRkJTU3hQUVVGUExGbEJRVmtzYVVKQlFVOHNSVUZCUlRzMFFrRkROVUlzVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dDVRa0ZEZWtNN096UkNRVUZOTEdWQlFXVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdjVUpCUTNKRU8ybENRVU5LTzJGQlEwbzdXVUZEUkN4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeGxRVUZsTEVOQlFVTXNRMEZCUXp0WlFVTnlReXg1UWtGQll5eERRVUZETEVsQlFVa3NSVUZCUlN4elFrRkJjMElzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTnVSQ3hKUVVGSkxHbENRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETzJkQ1FVRkZMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNSVUZCUlN4RFFVRkRPMUZCUTNwRkxFTkJRVU03TzBsQmVFWnpRaXg1UWtGQlV5eEhRVUZITEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETzBsQlZYaEVMREpDUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETzBsQlUyNUNMRGhDUVVGakxFZEJRVmtzYzBKQlFWY3NRMEZCUXl4bFFVRmxMRVZCUVVVc1owSkJRV2RDTEVOQlFVTXNRMEZCUXp0SlFWTjZSU3cwUWtGQldTeEhRVUZaTEhOQ1FVRlhMRU5CUVVNc1pVRkJaU3hGUVVGRkxHTkJRV01zUTBGQlF5eERRVUZETzBsQlZUbEZMR2xFUVVGcFF5eEhRVUZaTEV0QlFVc3NRMEZCUXp0SlFXOUVja1VzVDBGQlR5eGxRVUZsTEVOQlFVTTdRVUZETTBJc1EwRkJRenRCUVROSFJDeDNSRUV5UjBNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBGaWVsZF8xID0gcmVxdWlyZShcIn5iZG8vbGliL0ZpZWxkXCIpO1xuY29uc3QgZnJhbWV3b3JrXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9mcmFtZXdvcmtcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCBpbmlCaW5kTmFtZSA9IFwiaW5pdGlhdG9yQmluZGluZ1wiO1xuY29uc3QgYmluZE5hbWUgPSBcImJpbmRpbmdzXCI7XG5jbGFzcyBCaW5kaW5nIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5LCBtb2RlID0gXCJSZWFkV3JpdGVcIikge1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgICAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0b3IgPSB0aGlzLmdldE9yaWdpbmFsUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSB8fCB0aGlzLm9iamVjdFt0aGlzLnByb3BlcnR5XTtcbiAgICB9XG4gICAgaW5zdGFsbChpbml0aWF0b3IsIHByb3BlcnR5KSB7XG4gICAgICAgIHRoaXMuaW5pdGlhdG9yID0gaW5pdGlhdG9yO1xuICAgICAgICB0aGlzLmluaXRpYXRvclByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgICAgIHRoaXMuaW5pdGlhdG9yRGVzY3JpcHRvciA9IHRoaXMuZ2V0T3JpZ2luYWxQcm9wZXJ0eURlc2NyaXB0b3IodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHkpO1xuICAgICAgICBpZiAoIVJlZmxlY3QuaGFzTWV0YWRhdGEoaW5pQmluZE5hbWUsIHRoaXMuaW5pdGlhdG9yKSlcbiAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcy5pbml0aWF0b3IsIGluaUJpbmROYW1lLCBuZXcgTWFwKCkpO1xuICAgICAgICBpZiAoIVJlZmxlY3QuaGFzTWV0YWRhdGEoYmluZE5hbWUsIHRoaXMub2JqZWN0KSlcbiAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcy5vYmplY3QsIGJpbmROYW1lLCBuZXcgTWFwKCkpO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JNRGF0YSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5pbml0aWF0b3IsIGluaUJpbmROYW1lKSB8fCBuZXcgTWFwKCk7XG4gICAgICAgIGNvbnN0IGluaXRpYXRvckJpbmRpbmcgPSBpbml0aWF0b3JNRGF0YS5nZXQodGhpcy5pbml0aWF0b3JQcm9wZXJ0eSk7XG4gICAgICAgIGlmIChpbml0aWF0b3JCaW5kaW5nKVxuICAgICAgICAgICAgaW5pdGlhdG9yQmluZGluZy5yZW1vdmUoKTtcbiAgICAgICAgY29uc3QgbURhdGEgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMub2JqZWN0LCBiaW5kTmFtZSkgfHwgbmV3IE1hcCgpO1xuICAgICAgICBpZiAoIW1EYXRhLmhhcyh0aGlzLnByb3BlcnR5KSlcbiAgICAgICAgICAgIG1EYXRhLnNldCh0aGlzLnByb3BlcnR5LCBbXSk7XG4gICAgICAgIG1EYXRhLmdldCh0aGlzLnByb3BlcnR5KS5wdXNoKHRoaXMpO1xuICAgICAgICBpbml0aWF0b3JNRGF0YS5zZXQodGhpcy5pbml0aWF0b3JQcm9wZXJ0eSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IGZpZWxkTURhdGFOYW1lID0gYGZpZWxkOiR7dGhpcy5wcm9wZXJ0eX1gO1xuICAgICAgICBjb25zdCBvYmplY3RGaWVsZCA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgIGNvbnN0IGluaXRpYXRvckZpZWxkID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5KTtcbiAgICAgICAgbGV0IGZpZWxkID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMub2JqZWN0LCBmaWVsZE1EYXRhTmFtZSk7XG4gICAgICAgIGlmICghZmllbGQpXG4gICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIGZpZWxkTURhdGFOYW1lLCBuZXcgRmllbGRfMS5GaWVsZCh0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSkpO1xuICAgICAgICBmaWVsZCA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLm9iamVjdCwgZmllbGRNRGF0YU5hbWUpO1xuICAgICAgICBmaWVsZC5hZGRGaWVsZChvYmplY3RGaWVsZCk7XG4gICAgICAgIGZpZWxkLmFkZEZpZWxkKGluaXRpYXRvckZpZWxkKTtcbiAgICAgICAgdGhpcy5yZXBsYWNlRGVzY3JpcHRvcigpO1xuICAgICAgICBSZWZsZWN0LnNldCh0aGlzLmluaXRpYXRvciwgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSwgdGhpcy52YWx1ZU9mKCkpO1xuICAgIH1cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIGNvbnN0IG9iamVjdFZhbHVlID0gdGhpcy5vYmplY3RbdGhpcy5wcm9wZXJ0eV07XG4gICAgICAgIGNvbnN0IGluaXRpYXRvclZhbHVlID0gdGhpcy5pbml0aWF0b3JbdGhpcy5pbml0aWF0b3JQcm9wZXJ0eV07XG4gICAgICAgIGNvbnN0IG9iamVjdE1EYXRhID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLm9iamVjdCwgYmluZE5hbWUpO1xuICAgICAgICBjb25zdCBvYmplY3RCaW5kaW5ncyA9IG9iamVjdE1EYXRhID8gb2JqZWN0TURhdGEuZ2V0KHRoaXMucHJvcGVydHkpIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JNRGF0YSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5pbml0aWF0b3IsIGluaUJpbmROYW1lKTtcbiAgICAgICAgY29uc3QgaW5pdGlhdG9yQmluZGluZyA9IGluaXRpYXRvck1EYXRhID8gaW5pdGlhdG9yTURhdGEuZ2V0KHRoaXMuaW5pdGlhdG9yUHJvcGVydHkudG9TdHJpbmcoKSkgOiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IGZpZWxkTURhdGFOYW1lID0gYGZpZWxkOiR7dGhpcy5wcm9wZXJ0eX1gO1xuICAgICAgICBjb25zdCBmaWVsZCA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLm9iamVjdCwgZmllbGRNRGF0YU5hbWUpO1xuICAgICAgICBpZiAoaW5pdGlhdG9yQmluZGluZykge1xuICAgICAgICAgICAgaWYgKGluaXRpYXRvck1EYXRhKVxuICAgICAgICAgICAgICAgIGluaXRpYXRvck1EYXRhLmRlbGV0ZSh0aGlzLmluaXRpYXRvclByb3BlcnR5LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgdGhpcy5yZXN0b3JlRGVzY3JpcHRvcih0aGlzLmluaXRpYXRvciwgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSwgaW5pdGlhdG9yVmFsdWUsIHRoaXMuaW5pdGlhdG9yRGVzY3JpcHRvcik7XG4gICAgICAgICAgICBmaWVsZC5yZW1vdmVGaWVsZChtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHkpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqZWN0QmluZGluZ3MpIHtcbiAgICAgICAgICAgIHV0aWxfMS5yZW1vdmVFbGVtZW50RnJvbUFycmF5KG9iamVjdEJpbmRpbmdzLCB0aGlzKTtcbiAgICAgICAgICAgIGZpZWxkLnJlbW92ZUZpZWxkKG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSkpO1xuICAgICAgICAgICAgaWYgKCFvYmplY3RCaW5kaW5ncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0TURhdGEpXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdE1EYXRhLmRlbGV0ZSh0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RvcmVEZXNjcmlwdG9yKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5LCBvYmplY3RWYWx1ZSwgdGhpcy5kZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIGZpZWxkTURhdGFOYW1lLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXBsYWNlRGVzY3JpcHRvcigpIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpO1xuICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5LCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGJpbmRpbmdHZXQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoYXQubW9kZSA9PT0gXCJXcml0ZU9ubHlcIiAmJiB0aGlzID09PSB0aGF0LmluaXRpYXRvcilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJhbWV3b3JrXzEuZ2V0dGVyKHRoYXQub2JqZWN0LCB0aGF0LnByb3BlcnR5LCBcImZpZWxkXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gYmluZGluZ1NldChuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5tb2RlID09PSBcIlJlYWRPbmx5XCIgJiYgdGhpcyA9PT0gdGhhdC5pbml0aWF0b3IpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBmcmFtZXdvcmtfMS5zZXR0ZXIodGhhdC5vYmplY3QsIHRoYXQucHJvcGVydHksIG5ld1ZhbCwgXCJmaWVsZFwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiaW5kaW5nRGVzYyA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0aGlzLmluaXRpYXRvciwgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSk7XG4gICAgICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHksIGJpbmRpbmdEZXNjKTtcbiAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YSh0aGlzLm9iamVjdCwgXCJiaW5kaW5nRGVzY3JpcHRvclwiLCBiaW5kaW5nRGVzYyk7XG4gICAgfVxuICAgIHJlc3RvcmVEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHksIHZhbHVlLCBkZXNjcmlwdG9yKSB7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eSk7XG4gICAgICAgIGlmIChkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBvYmplY3RbcHJvcGVydHkudG9TdHJpbmcoKV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0T3JpZ2luYWxQcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBrZXkpIHtcbiAgICAgICAgbGV0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIGtleSk7XG4gICAgICAgIGxldCBtRGF0YU5hbWUgPSBiaW5kTmFtZTtcbiAgICAgICAgbGV0IHByb3RvdHlwZSA9IG9iamVjdDtcbiAgICAgICAgaWYgKG9iamVjdCA9PT0gdGhpcy5pbml0aWF0b3IpXG4gICAgICAgICAgICBtRGF0YU5hbWUgPSBpbmlCaW5kTmFtZTtcbiAgICAgICAgd2hpbGUgKCFkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKTtcbiAgICAgICAgICAgIGlmICghcHJvdG90eXBlKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgaWYgKHByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIkJhc2VDb25zdHJ1Y3RvclwiKVxuICAgICAgICAgICAgICAgIHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpO1xuICAgICAgICAgICAgZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvdHlwZSwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VhcmNoRGVzY3JpcHRvckluQmluZGluZ3MgPSBmYWxzZTtcbiAgICAgICAgaWYgKGRlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yLnNldCAmJiBkZXNjcmlwdG9yLnNldC5uYW1lID09PSBcImJpbmRpbmdTZXRcIilcbiAgICAgICAgICAgICAgICBzZWFyY2hEZXNjcmlwdG9ySW5CaW5kaW5ncyA9IHRydWU7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvci5nZXQgJiYgZGVzY3JpcHRvci5nZXQubmFtZSA9PT0gXCJiaW5kaW5nR2V0XCIpXG4gICAgICAgICAgICAgICAgc2VhcmNoRGVzY3JpcHRvckluQmluZGluZ3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWFyY2hEZXNjcmlwdG9ySW5CaW5kaW5ncykge1xuICAgICAgICAgICAgY29uc3QgbURhdGEgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKG9iamVjdCwgbURhdGFOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGJpbmRpbmdzID0gbURhdGEgPyBtRGF0YS5nZXQoa2V5LnRvU3RyaW5nKCkpIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKGJpbmRpbmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJpbmRpbmdzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRvciA9IGJpbmRpbmdzWzBdLmRlc2NyaXB0b3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRvciA9IGJpbmRpbmdzLmluaXRpYXRvckRlc2NyaXB0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gICAgfVxufVxuZXhwb3J0cy5CaW5kaW5nID0gQmluZGluZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFtbHVaR2x1Wnk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmJHbGlMMEpwYm1ScGJtY3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTd3dRMEZCZVVRN1FVRkZla1FzTUVOQlFYVkRPMEZCUTNaRExHOUVRVUZ6UkR0QlFVTjBSQ3hyUkVGQkswYzdRVUZKTDBjc1RVRkJUU3hYUVVGWExFZEJRVWNzYTBKQlFXdENMRU5CUVVNN1FVRkRka01zVFVGQlRTeFJRVUZSTEVkQlFVY3NWVUZCVlN4RFFVRkRPMEZCYzBJMVFpeE5RVUZoTEU5QlFVODdTVUV3UldoQ0xGbEJRVmtzVFVGQlV5eEZRVUZGTEZGQlFWY3NSVUZCUlN4UFFVRnZRaXhYUVVGWE8xRkJReTlFTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRM0pDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRE8xRkJRM3BDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMnBDTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExEWkNRVUUyUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMGxCUTNKR0xFTkJRVU03U1VGTFRTeFJRVUZSTEVOQlFVTXNTMEZCVnp0UlFVTjJRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVTjJRaXhEUVVGRE8wbEJVVTBzVDBGQlR6dFJRVU5XTEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRKUVVOd1JDeERRVUZETzBsQlUwMHNUMEZCVHl4RFFVRkRMRk5CUVZrc1JVRkJSU3hSUVVGWE8xRkJRM0JETEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1UwRkJVeXhEUVVGRE8xRkJRek5DTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUjBGQlJ5eFJRVUZSTEVOQlFVTTdVVUZEYkVNc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4SFFVRkhMRWxCUVVrc1EwRkJReXcyUWtGQk5rSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8xRkJSM1JITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExGZEJRVmNzUlVGQlJTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRPMWxCUVVVc2VVSkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRmRCUVZjc1JVRkJSU3hKUVVGSkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZET1Vjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03V1VGQlJTeDVRa0ZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzVVVGQlVTeEZRVUZGTEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVkc1J5eE5RVUZOTEdOQlFXTXNSMEZCUnl4elFrRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNWMEZCVnl4RFFVRkRMRWxCUVVrc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU0zUlN4TlFVRk5MR2RDUVVGblFpeEhRVUZITEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNN1VVRkRjRVVzU1VGQlNTeG5Ra0ZCWjBJN1dVRkJSU3huUWtGQlowSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRSUVVkb1JDeE5RVUZOTEV0QlFVc3NSMEZCUnl4elFrRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNVVUZCVVN4RFFVRkRMRWxCUVVrc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU01UkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRPMWxCUVVVc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRelZFTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOd1F5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVkcVJDeE5RVUZOTEdOQlFXTXNSMEZCUnl4VFFVRlRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVU5vUkN4TlFVRk5MRmRCUVZjc1IwRkJSeXc0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTndSU3hOUVVGTkxHTkJRV01zUjBGQlJ5dzRRa0ZCYlVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eERRVUZETzFGQlEyNUdMRWxCUVVrc1MwRkJTeXhIUVVGblFpdzRRa0ZCYlVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEdOQlFXTXNRMEZCUXl4RFFVRkRPMUZCUXpGRkxFbEJRVWtzUTBGQlF5eExRVUZMTzFsQlFVVXNhVU5CUVhOQ0xFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4alFVRmpMRVZCUVVVc1NVRkJTU3hoUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVWQyUnl4TFFVRkxMRWRCUVVjc09FSkJRVzFDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hqUVVGakxFTkJRV2RDTEVOQlFVTTdVVUZEZUVVc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTTFRaXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMUZCUnk5Q0xFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hEUVVGRE8xRkJRM3BDTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRlRVVzUTBGQlF6dEpRVTlOTEUxQlFVMDdVVUZGVkN4TlFVRk5MRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVNdlF5eE5RVUZOTEdOQlFXTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8xRkJSemxFTEUxQlFVMHNWMEZCVnl4SFFVRkhMSE5DUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVOMlJDeE5RVUZOTEdOQlFXTXNSMEZCUnl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTTdVVUZEYUVZc1RVRkJUU3hqUVVGakxFZEJRVWNzYzBKQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxGZEJRVmNzUTBGQlF5eERRVUZETzFGQlEyaEZMRTFCUVUwc1owSkJRV2RDTEVkQlFVY3NZMEZCWXl4RFFVRkRMRU5CUVVNc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU03VVVGRk5VY3NUVUZCVFN4alFVRmpMRWRCUVVjc1UwRkJVeXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZEYUVRc1RVRkJUU3hMUVVGTExFZEJRV2RDTERoQ1FVRnRRaXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNZMEZCWXl4RFFVRkRMRU5CUVVNN1VVRkZOVVVzU1VGQlNTeG5Ra0ZCWjBJc1JVRkJSVHRaUVVOc1FpeEpRVUZKTEdOQlFXTTdaMEpCUVVVc1kwRkJZeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTTNSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzWTBGQll5eEZRVUZGTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eERRVUZETzFsQlEzcEhMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zT0VKQlFXMUNMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEyeEdPMUZCUlVRc1NVRkJTU3hqUVVGakxFVkJRVVU3V1VGRGFFSXNOa0pCUVhOQ0xFTkJRVU1zWTBGQll5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUXpkRExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNPRUpCUVcxQ0xFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51UlN4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUlVGQlJUdG5Ra0ZEZUVJc1NVRkJTU3hYUVVGWE8yOUNRVUZGTEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzJkQ1FVTnVSQ3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdaMEpCUTJwR0xHbERRVUZ6UWl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzWTBGQll5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMkZCUXpkRU8xTkJRMG83U1VGRFRDeERRVUZETzBsQlUwOHNhVUpCUVdsQ08xRkJRM0pDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOc1FpeFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUTI1RUxFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTzFsQlF5OURMRWRCUVVjc1JVRkJSU3hUUVVGVExGVkJRVlU3WjBKQlEzQkNMRWxCUVVrc1NVRkJTU3hEUVVGRExFbEJRVWtzUzBGQlN5eFhRVUZYTEVsQlFVa3NTVUZCU1N4TFFVRkxMRWxCUVVrc1EwRkJReXhUUVVGVE8yOUNRVUZGTEU5QlFVOHNVMEZCVXl4RFFVRkRPMmRDUVVNelJTeFBRVUZQTEd0Q1FVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8xbEJRM1pFTEVOQlFVTTdXVUZEUkN4SFFVRkhMRVZCUVVVc1UwRkJVeXhWUVVGVkxFTkJRVU1zVFVGQmFVUTdaMEpCUTNSRkxFbEJRVWtzU1VGQlNTeERRVUZETEVsQlFVa3NTMEZCU3l4VlFVRlZMRWxCUVVrc1NVRkJTU3hMUVVGTExFbEJRVWtzUTBGQlF5eFRRVUZUTzI5Q1FVRkZMRTlCUVU4N1owSkJRMmhGTEd0Q1FVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRTFCUVUwc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dFpRVU40UkN4RFFVRkRPMWxCUTBRc1dVRkJXU3hGUVVGRkxFbEJRVWs3V1VGRGJFSXNWVUZCVlN4RlFVRkZMRWxCUVVrN1UwRkRia0lzUTBGQlF5eERRVUZETzFGQlEwZ3NUVUZCVFN4WFFVRlhMRWRCUVVjc1QwRkJUeXhEUVVGRExIZENRVUYzUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCZFVJc1EwRkJRenRSUVVOMlJ5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFTkJRVU03VVVGREwwUXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTTFSU3g1UWtGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc2JVSkJRVzFDTEVWQlFVVXNWMEZCVnl4RFFVRkRMRU5CUVVNN1NVRkRiRVVzUTBGQlF6dEpRVmxQTEdsQ1FVRnBRaXhEUVVGRExFMUJRWE5DTEVWQlFVVXNVVUZCYlVJc1JVRkJSU3hMUVVGVkxFVkJRVVVzVlVGQmNVSTdVVUZEY0Vjc1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eE5RVUZOTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkRla01zU1VGQlNTeFZRVUZWTEVWQlFVVTdXVUZEV2l4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRPMU5CUXpsRk8xRkJRMFFzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF6dEpRVU40UXl4RFFVRkRPMGxCVjA4c05rSkJRVFpDTEVOQlFVTXNUVUZCWXl4RlFVRkZMRWRCUVdNN1VVRkRhRVVzU1VGQlNTeFZRVUZWTEVkQlFXMURMRTlCUVU4c1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGREwwWXNTVUZCU1N4VFFVRlRMRWRCUVc5RExGRkJRVkVzUTBGQlF6dFJRVU14UkN4SlFVRkpMRk5CUVZNc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRGRrSXNTVUZCU1N4TlFVRk5MRXRCUVdFc1NVRkJTU3hEUVVGRExGTkJRVk03V1VGQlJTeFRRVUZUTEVkQlFVY3NWMEZCVnl4RFFVRkRPMUZCUXk5RUxFOUJRVThzUTBGQlF5eFZRVUZWTEVWQlFVVTdXVUZEYUVJc1UwRkJVeXhIUVVGSExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1dVRkROME1zU1VGQlNTeERRVUZETEZOQlFWTTdaMEpCUVVVc1RVRkJUVHRaUVVOMFFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hMUVVGTExHbENRVUZwUWp0blFrRkJSU3hUUVVGVExFZEJRVWNzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRaUVVOdVJ5eFZRVUZWTEVkQlFVY3NUMEZCVHl4RFFVRkRMSGRDUVVGM1FpeERRVUZETEZOQlFWTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRUUVVOcVJUdFJRVU5FTEVsQlFVa3NNRUpCUVRCQ0xFZEJRVWNzUzBGQlN5eERRVUZETzFGQlEzWkRMRWxCUVVrc1ZVRkJWU3hGUVVGRk8xbEJRMW9zU1VGQlNTeFZRVUZWTEVOQlFVTXNSMEZCUnl4SlFVRkpMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeExRVUZMTEZsQlFWazdaMEpCUVVVc01FSkJRVEJDTEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUXpsR0xFbEJRVWtzVlVGQlZTeERRVUZETEVkQlFVY3NTVUZCU1N4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUzBGQlN5eFpRVUZaTzJkQ1FVRkZMREJDUVVFd1FpeEhRVUZITEVsQlFVa3NRMEZCUXp0VFFVTnFSenRSUVVORUxFbEJRVWtzTUVKQlFUQkNMRVZCUVVVN1dVRkROVUlzVFVGQlRTeExRVUZMTEVkQlFVY3NjMEpCUVZjc1EwRkJUU3hOUVVGTkxFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdXVUZEYkVRc1RVRkJUU3hSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU03V1VGREwwUXNTVUZCU1N4UlFVRlJMRVZCUVVVN1owSkJRMVlzU1VGQlNTeFJRVUZSTEZsQlFWa3NTMEZCU3l4RlFVRkZPMjlDUVVNelFpeFZRVUZWTEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGVkJRVlVzUTBGQlF6dHBRa0ZEZGtNN08yOUNRVUZOTEZWQlFWVXNSMEZCUnl4UlFVRlJMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTTdZVUZEY0VRN1UwRkRTanRSUVVORUxFOUJRVThzVlVGQlZTeERRVUZETzBsQlEzUkNMRU5CUVVNN1EwRkRTanRCUVhCUlJDd3dRa0Z2VVVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIFZhbHVlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG59XG5leHBvcnRzLlZhbHVlRXJyb3IgPSBWYWx1ZUVycm9yO1xuY2xhc3MgVHlwZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuZXhwb3J0cy5UeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5jbGFzcyBDb25maWd1cmF0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG59XG5leHBvcnRzLkNvbmZpZ3VyYXRpb25FcnJvciA9IENvbmZpZ3VyYXRpb25FcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVJYSnliM0p6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5c2FXSXZSWEp5YjNKekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCVDBFc1RVRkJZU3hWUVVGWExGTkJRVkVzUzBGQlN6dERRVUZKTzBGQlFYcERMR2REUVVGNVF6dEJRVk42UXl4TlFVRmhMRk5CUVZVc1UwRkJVU3hMUVVGTE8wTkJRVWs3UVVGQmVFTXNPRUpCUVhkRE8wRkJWWGhETEUxQlFXRXNhMEpCUVcxQ0xGTkJRVkVzUzBGQlN6dERRVUZKTzBGQlFXcEVMR2RFUVVGcFJDSjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBXYXRjaGVkXzEgPSByZXF1aXJlKFwifmJkby9saWIvV2F0Y2hlZFwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCBvbl9jaGFuZ2VfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJvbi1jaGFuZ2VcIikpO1xuY2xhc3MgRmllbGQge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICAgICAgdGhpcy5maWVsZHMgPSBbXTtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICB9XG4gICAgYWRkRmllbGQoZmllbGQpIHtcbiAgICAgICAgaWYgKHRoaXMuZmllbGRzLmluY2x1ZGVzKGZpZWxkKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKGZpZWxkLm9iamVjdCAmJiBmaWVsZC5vYmplY3QuaXNCRE9Nb2RlbClcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnByb3h5ZnlWYWx1ZShmaWVsZC52YWx1ZU9mKCkpO1xuICAgICAgICBpZiAoZmllbGQgaW5zdGFuY2VvZiBXYXRjaGVkXzEuV2F0Y2hlZCAmJiBmaWVsZC5zdWJPYmplY3QpXG4gICAgICAgICAgICB0aGlzLnJlZGVmaW5lVmFsdWUoZmllbGQuc3ViT2JqZWN0KTtcbiAgICAgICAgdGhpcy5yZWRlZmluZVZhbHVlKGZpZWxkKTtcbiAgICAgICAgdGhpcy5maWVsZHMucHVzaChmaWVsZCk7XG4gICAgfVxuICAgIHJlbW92ZUZpZWxkKGZpZWxkKSB7XG4gICAgICAgIGlmICghdGhpcy5maWVsZHMuaW5jbHVkZXMoZmllbGQpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoZmllbGQgaW5zdGFuY2VvZiBXYXRjaGVkXzEuV2F0Y2hlZCAmJiBmaWVsZC5zdWJPYmplY3QpXG4gICAgICAgICAgICB0aGlzLnJlc3RvcmVWYWx1ZShmaWVsZC5zdWJPYmplY3QpO1xuICAgICAgICB0aGlzLnJlc3RvcmVWYWx1ZShmaWVsZCk7XG4gICAgICAgIHV0aWxfMS5yZW1vdmVFbGVtZW50RnJvbUFycmF5KHRoaXMuZmllbGRzLCBmaWVsZCk7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5maWVsZHMpXG4gICAgICAgICAgICBmaWVsZC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICByZWRlZmluZVZhbHVlKGZpZWxkKSB7XG4gICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lV2lsZGNhcmRNZXRhZGF0YShmaWVsZCwgXCJ2YWx1ZVwiLCBmaWVsZC52YWx1ZU9mKCkpO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShmaWVsZCwgXCJ2YWx1ZVwiKTtcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShmaWVsZCwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB1dGlsXzEuZ2V0UHJveHlUYXJnZXQodmFsdWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRoYXRWYWx1ZSA9IHV0aWxfMS5nZXRQcm94eVRhcmdldCh0aGF0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHRoYXRWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoYXQudmFsdWUgPSB0aGF0LnByb3h5ZnlWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVzdG9yZVZhbHVlKGZpZWxkKSB7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoZmllbGQsIFwidmFsdWVcIik7XG4gICAgICAgIGZpZWxkLnNldFZhbHVlKHV0aWxfMS5nZXRQcm94eVRhcmdldCh0aGlzLnZhbHVlKSk7XG4gICAgfVxuICAgIHByb3h5ZnlWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSB8fCB1dGlsXzEuaXNPYmplY3QodmFsdWUpICYmICF2YWx1ZS5pc0JET01vZGVsKSB7XG4gICAgICAgICAgICBsZXQgaXNTaGFsbG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5maWVsZHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWZpZWxkLmlzU2hhbGxvdykge1xuICAgICAgICAgICAgICAgICAgICBpc1NoYWxsb3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgPSBvbl9jaGFuZ2VfMS5kZWZhdWx0LnRhcmdldCh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gb25fY2hhbmdlXzEuZGVmYXVsdCh2YWx1ZSwgKHBhdGgsIGNoYW5nZWRWYWx1ZSwgcHJldmlvdXNWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhdGhTaXplID0gcGF0aC5zcGxpdChcIi5cIikubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5maWVsZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWVsZC5pc1NoYWxsb3cgfHwgZmllbGQuaXNTaGFsbG93ICYmIHBhdGhTaXplIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnByb3h5SGFuZGxlcihwYXRoLCBjaGFuZ2VkVmFsdWUsIHByZXZpb3VzVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgeyBpc1NoYWxsb3cgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVJtbGxiR1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJ4cFlpOUdhV1ZzWkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZGUVN3NFEwRkJNa003UVVGRk0wTXNNRU5CUVcxR08wRkJRMjVHTEd0RVFVRTJSRHRCUVVNM1JDeHJSVUZCYVVNN1FVRnBRbXBETEUxQlFXRXNTMEZCU3p0SlFXOURaQ3haUVVGWkxFMUJRVk1zUlVGQlJTeFJRVUZYTzFGQlJqRkNMRmRCUVUwc1IwRkJhVU1zUlVGQlJTeERRVUZETzFGQlJ6bERMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETzFGQlEzSkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETzBsQlF6ZENMRU5CUVVNN1NVRlZUU3hSUVVGUkxFTkJRVU1zUzBGQk5FSTdVVUZEZUVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNN1dVRkJSU3hQUVVGUE8xRkJSWGhETEVsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1NVRkJaU3hMUVVGTExFTkJRVU1zVFVGQlR5eERRVUZETEZWQlFWVTdXVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGVrY3NTVUZCU1N4TFFVRkxMRmxCUVZrc2FVSkJRVThzU1VGQlNTeExRVUZMTEVOQlFVTXNVMEZCVXp0WlFVRkZMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUTNKR0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRNVUlzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRE5VSXNRMEZCUXp0SlFWVk5MRmRCUVZjc1EwRkJReXhMUVVFMFFqdFJRVU16UXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRPMWxCUVVVc1QwRkJUenRSUVVONlF5eEpRVUZKTEV0QlFVc3NXVUZCV1N4cFFrRkJUeXhKUVVGSkxFdEJRVXNzUTBGQlF5eFRRVUZUTzFsQlFVVXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEY0VZc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTjZRaXcyUWtGQmMwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF5OURMRU5CUVVNN1NVRlRUU3hSUVVGUkxFTkJRVU1zUzBGQlowTTdVVUZETlVNc1MwRkJTeXhOUVVGTkxFdEJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFR0WlFVRkZMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETTBRc1EwRkJRenRKUVZGTkxFOUJRVTg3VVVGRFZpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1NVRkRkRUlzUTBGQlF6dEpRVmRQTEdGQlFXRXNRMEZCUXl4TFFVRTBRanRSUVVNNVF5eHBRMEZCYzBJc1EwRkJVeXhMUVVGTExFVkJRVVVzVDBGQlR5eEZRVUZGTEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRMmhGTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOc1FpeFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU4yUXl4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVWQlFVVTdXVUZEYmtNc1IwRkJSenRuUWtGRFF5eFBRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1dVRkRkRUlzUTBGQlF6dFpRVU5FTEVkQlFVY3NRMEZCUXl4TFFVRlhPMmRDUVVOWUxFdEJRVXNzUjBGQlJ5eHhRa0ZCWXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8yZENRVU01UWl4TlFVRk5MRk5CUVZNc1IwRkJSeXh4UWtGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRuUWtGRE4wTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVenR2UWtGQlJTeFBRVUZQTzJkQ1FVTm9ReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRE1VTXNRMEZCUXp0WlFVTkVMRmxCUVZrc1JVRkJSU3hKUVVGSk8xbEJRMnhDTEZWQlFWVXNSVUZCUlN4SlFVRkpPMU5CUTI1Q0xFTkJRVU1zUTBGQlF6dEpRVU5RTEVOQlFVTTdTVUZUVHl4WlFVRlpMRU5CUVVNc1MwRkJORUk3VVVGRE4wTXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhMUVVGTExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdVVUZEZGtNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eHhRa0ZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF5OURMRU5CUVVNN1NVRlZUeXhaUVVGWkxFTkJRVU1zUzBGQldUdFJRVU0zUWl4SlFVRkpMRXRCUVVzc1dVRkJXU3hMUVVGTExFbEJRVWtzWlVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVU4c1MwRkJUU3hEUVVGRExGVkJRVlVzUlVGQlJUdFpRVU4yUlN4SlFVRkpMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRGNrSXNTMEZCU3l4TlFVRk5MRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzJkQ1FVTTNRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNSVUZCUlR0dlFrRkRiRUlzVTBGQlV5eEhRVUZITEV0QlFVc3NRMEZCUXp0dlFrRkRiRUlzVFVGQlRUdHBRa0ZEVkR0aFFVTktPMWxCUTBRc1MwRkJTeXhIUVVGSExHMUNRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJReTlDTEU5QlFVOHNiVUpCUVZFc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNXVUZCV1N4RlFVRkZMR0ZCUVdFc1JVRkJSU3hGUVVGRk8yZENRVU42UkN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJRenRuUWtGRGVFTXNTMEZCU3l4TlFVRk5MRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzI5Q1FVTTNRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1UwRkJVeXhKUVVGSkxGRkJRVkVzU1VGQlNTeERRVUZETEVWQlFVVTdkMEpCUTNSRUxFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRlJMRmxCUVZrc1JVRkJVU3hoUVVGaExFTkJRVU1zUTBGQlF6dHhRa0ZEY2tVN2FVSkJRMG83V1VGRFRDeERRVUZETEVWQlFVVXNSVUZCUlN4VFFVRlRMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRM0pDTzFGQlEwUXNUMEZCVHl4TFFVRkxMRU5CUVVNN1NVRkRha0lzUTBGQlF6dERRVU5LTzBGQmJrdEVMSE5DUVcxTFF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZyYW1ld29ya18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZnJhbWV3b3JrXCIpO1xuY2xhc3MgTW9kZWxSZWdpc3RyeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubW9kZWxzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghTW9kZWxSZWdpc3RyeS5pbnN0YW5jZSlcbiAgICAgICAgICAgIE1vZGVsUmVnaXN0cnkuaW5zdGFuY2UgPSBuZXcgTW9kZWxSZWdpc3RyeSgpO1xuICAgICAgICByZXR1cm4gTW9kZWxSZWdpc3RyeS5pbnN0YW5jZTtcbiAgICB9XG4gICAgcmVnaXN0ZXIobW9kZWwpIHtcbiAgICAgICAgdGhpcy5tb2RlbHMuc2V0KGAke21vZGVsLmNsYXNzTmFtZX0ke21vZGVsLmlkfWAsIG1vZGVsKTtcbiAgICB9XG4gICAgdW5yZWdpc3Rlcihtb2RlbCkge1xuICAgICAgICB0aGlzLm1vZGVscy5kZWxldGUoYCR7bW9kZWwuY2xhc3NOYW1lfSR7bW9kZWwuaWR9YCk7XG4gICAgfVxuICAgIGdldE1vZGVsQnlJZChpZCwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxzLmdldChgJHt0aGlzLmdldENsYXNzTmFtZShjb25zdHJ1Y3Rvcil9JHtpZH1gKTtcbiAgICB9XG4gICAgZ2V0TW9kZWxzQnlBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgY29uc3QgbW9kZWxzID0gW107XG4gICAgICAgIHRoaXMubW9kZWxzLmZvckVhY2goKG1vZGVsKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4gbW9kZWwpIHx8IGVsZW1lbnQgIT09IG1vZGVsW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vZGVscy5wdXNoKG1vZGVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtb2RlbHM7XG4gICAgfVxuICAgIHVwZGF0ZUlEKG9sZElELCBjb25zdHJ1Y3Rvcikge1xuICAgICAgICBjb25zdCBtb2RlbCA9IHRoaXMubW9kZWxzLmdldChgJHt0aGlzLmdldENsYXNzTmFtZShjb25zdHJ1Y3Rvcil9JHtvbGRJRH1gKTtcbiAgICAgICAgaWYgKCFtb2RlbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5tb2RlbHMuZGVsZXRlKGAke3RoaXMuZ2V0Q2xhc3NOYW1lKGNvbnN0cnVjdG9yKX0ke29sZElEfWApO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKG1vZGVsKTtcbiAgICB9XG4gICAgZ2V0TW9kZWxzQnlDb25kaXRpb24oZnVuYywgbW9kZSA9IFwiYWxsXCIpIHtcbiAgICAgICAgY29uc3QgbW9kZWxzID0gW107XG4gICAgICAgIGxldCBsYXN0TW9kZWw7XG4gICAgICAgIGZvciAoY29uc3QgbW9kZWwgb2YgdGhpcy5tb2RlbHMudmFsdWVzKCkpIHtcbiAgICAgICAgICAgIGlmIChmdW5jKG1vZGVsKSkge1xuICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSBcImZpcnN0XCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbDtcbiAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gXCJhbGxcIilcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxzLnB1c2gobW9kZWwpO1xuICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSBcImxhc3RcIilcbiAgICAgICAgICAgICAgICAgICAgbGFzdE1vZGVsID0gbW9kZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGUgPT09IFwibGFzdFwiID8gbGFzdE1vZGVsIDogbW9kZWxzO1xuICAgIH1cbiAgICBnZXRDbGFzc05hbWUoY29uc3RydWN0b3IpIHtcbiAgICAgICAgbGV0IGNsYXNzTmFtZTtcbiAgICAgICAgaWYgKGZyYW1ld29ya18xLmlzQmFzZUNvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY29uc3RydWN0b3IuY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFwiY2xhc3NOYW1lXCIgaW4gY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNvbnN0cnVjdG9yLmNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY29uc3RydWN0b3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjb25zdHJ1Y3Rvci5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH1cbn1cbmV4cG9ydHMuTW9kZWxSZWdpc3RyeSA9IE1vZGVsUmVnaXN0cnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lUVzlrWld4U1pXZHBjM1J5ZVM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmJHbGlMMDF2WkdWc1VtVm5hWE4wY25rdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZEUVN4dlJFRkJlVVE3UVVGWGVrUXNUVUZCWVN4aFFVRmhPMGxCYVVOMFFqdFJRV1JSTEZkQlFVMHNSMEZCTUVJc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF6dEpRV014UWl4RFFVRkRPMGxCVEd4Q0xFMUJRVTBzUTBGQlF5eFhRVUZYTzFGQlEzSkNMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zVVVGQlVUdFpRVUZGTEdGQlFXRXNRMEZCUXl4UlFVRlJMRWRCUVVjc1NVRkJTU3hoUVVGaExFVkJRVVVzUTBGQlF6dFJRVU14UlN4UFFVRlBMR0ZCUVdFc1EwRkJReXhSUVVGUkxFTkJRVU03U1VGRGJFTXNRMEZCUXp0SlFWVk5MRkZCUVZFc1EwRkJReXhMUVVGbE8xRkJRek5DTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEZOQlFWTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETlVRc1EwRkJRenRKUVZOTkxGVkJRVlVzUTBGQlF5eExRVUZsTzFGQlF6ZENMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRk5CUVZNc1IwRkJSeXhMUVVGTExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTjRSQ3hEUVVGRE8wbEJWVTBzV1VGQldTeERRVUUyUXl4RlFVRlZMRVZCUVVVc1YwRkJZenRSUVVOMFJpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQmJVTXNRMEZCUXp0SlFVTjJSeXhEUVVGRE8wbEJWVTBzY1VKQlFYRkNMRU5CUVVNc1ZVRkJkVU03VVVGRGFFVXNUVUZCVFN4TlFVRk5MRWRCUVdVc1JVRkJSU3hEUVVGRE8xRkJRemxDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVTdXVUZETVVJc1MwRkJTeXhOUVVGTkxFZEJRVWNzU1VGQlNTeFZRVUZWTEVWQlFVVTdaMEpCUXpGQ0xFbEJRVWtzVlVGQlZTeERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHR2UWtGRGFFTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzI5Q1FVTm9ReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMRWxCUVVrc1QwRkJUeXhMUVVGelFpeExRVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN2QwSkJRemRFTEU5QlFVODdjVUpCUTFZN2FVSkJRMG83WVVGRFNqdFpRVU5FTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRGRrSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRTQ3hQUVVGUExFMUJRVTBzUTBGQlF6dEpRVU5zUWl4RFFVRkRPMGxCV1Uwc1VVRkJVU3hEUVVGeFFpeExRVUZqTEVWQlFVVXNWMEZCWXp0UlFVTTVSQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU16UlN4SlFVRkpMRU5CUVVNc1MwRkJTenRaUVVGRkxFOUJRVTg3VVVGRGJrSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEYUVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTjZRaXhEUVVGRE8wbEJaVTBzYjBKQlFXOUNMRU5CUVVNc1NVRkJhME1zUlVGQlJTeFBRVUZwUXl4TFFVRkxPMUZCUTJ4SExFMUJRVTBzVFVGQlRTeEhRVUZsTEVWQlFVVXNRMEZCUXp0UlFVTTVRaXhKUVVGSkxGTkJRU3RDTEVOQlFVTTdVVUZEY0VNc1MwRkJTeXhOUVVGTkxFdEJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hGUVVGRk8xbEJRM1JETEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8yZENRVU5pTEVsQlFVa3NTVUZCU1N4TFFVRkxMRTlCUVU4N2IwSkJRVVVzVDBGQlR5eExRVUZMTEVOQlFVTTdaMEpCUTI1RExFbEJRVWtzU1VGQlNTeExRVUZMTEV0QlFVczdiMEpCUVVVc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0blFrRkRka01zU1VGQlNTeEpRVUZKTEV0QlFVc3NUVUZCVFR0dlFrRkJSU3hUUVVGVExFZEJRVWNzUzBGQlN5eERRVUZETzJGQlF6RkRPMU5CUTBvN1VVRkRSQ3hQUVVGUExFbEJRVWtzUzBGQlN5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETzBsQlEyaEVMRU5CUVVNN1NVRlZUeXhaUVVGWkxFTkJRVU1zVjBGQk5rTTdVVUZET1VRc1NVRkJTU3hUUVVGcFFpeERRVUZETzFGQlEzUkNMRWxCUVVrc05rSkJRV2xDTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUVVVN1dVRkRhRU1zVTBGQlV5eEhRVUZITEZkQlFWY3NRMEZCUXl4VFFVRlRMRU5CUVVNN1UwRkRja003WVVGQlRTeEpRVUZKTEZkQlFWY3NTVUZCU1N4WFFVRlhMRVZCUVVVN1dVRkRia01zVTBGQlV5eEhRVUZITEZkQlFWY3NRMEZCUXl4VFFVRlRMRU5CUVVNN1UwRkRja003WVVGQlRTeEpRVUZKTEU5QlFVOHNWMEZCVnl4TFFVRkxMRlZCUVZVc1JVRkJSVHRaUVVNeFF5eFRRVUZUTEVkQlFVY3NWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJRenRUUVVOb1F6czdXVUZCVFN4VFFVRlRMRWRCUVZNc1YwRkJXU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTTdVVUZEZGtRc1QwRkJUeXhUUVVGVExFTkJRVU03U1VGRGNrSXNRMEZCUXp0RFFVTktPMEZCTVVwRUxITkRRVEJLUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgTW9kaWZpY2F0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgdHlwZSA9IFwiZGVsZXRlXCIpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydHMuTW9kaWZpY2F0aW9uID0gTW9kaWZpY2F0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVFc5a2FXWnBZMkYwYVc5dUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXNhV0l2VFc5a2FXWnBZMkYwYVc5dUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCVVVFc1RVRkJZU3haUVVGWk8wbEJiVUp5UWl4WlFVRlpMRXRCUVZjc1JVRkJSU3hQUVVGeFFpeFJRVUZSTzFGQlEyeEVMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlEyNUNMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVTBzU1VGQlNTeERRVUZETzBsQlEzaENMRU5CUVVNN1NVRlJUU3hQUVVGUE8xRkJRMVlzVDBGQlR5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTNSQ0xFTkJRVU03U1VGUlRTeFJRVUZSTEVOQlFVTXNTMEZCVlR0UlFVTjBRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVTjJRaXhEUVVGRE8wTkJRMG83UVVFelEwUXNiME5CTWtOREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBNb2RpZmljYXRpb25fMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Nb2RpZmljYXRpb25cIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCBlbnZpcm9ubWVudF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZW52aXJvbm1lbnRcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgRXJyb3JzXzEgPSByZXF1aXJlKFwifmJkby9saWIvRXJyb3JzXCIpO1xuY29uc3Qgb25fY2hhbmdlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwib24tY2hhbmdlXCIpKTtcbmNsYXNzIFByb3BlcnR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5LCBwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5pc1NoYWxsb3cgPSB0cnVlO1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgICAgICBsZXQgcGFyYW1ldGVycyA9IHt9O1xuICAgICAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wYXJhbXMpXG4gICAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1zLnBhcmFtcztcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgY29uc3QgY2FwaXRhbGl6ZWRQcm9wID0gdXRpbF8xLnVjRmlyc3QocHJvcGVydHkpO1xuICAgICAgICBjb25zdCBvblR5cGVDaGVja0ZhaWwgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1UeXBlQ2hlY2tGYWlsYDtcbiAgICAgICAgY29uc3Qgb25UeXBlQ2hlY2sgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1UeXBlQ2hlY2tgO1xuICAgICAgICBjb25zdCBvblR5cGVDaGVja1N1Y2Nlc3MgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1UeXBlQ2hlY2tTdWNjZXNzYDtcbiAgICAgICAgdGhpcy5vblR5cGVDaGVja0ZhaWwgPSBwYXJhbWV0ZXJzID8gcGFyYW1ldGVycy5vblR5cGVDaGVja0ZhaWwgfHwgb25UeXBlQ2hlY2tGYWlsIDogb25UeXBlQ2hlY2tGYWlsO1xuICAgICAgICB0aGlzLm9uVHlwZUNoZWNrID0gcGFyYW1ldGVycyA/IHBhcmFtZXRlcnMub25UeXBlQ2hlY2sgfHwgb25UeXBlQ2hlY2sgOiBvblR5cGVDaGVjaztcbiAgICAgICAgdGhpcy5vblR5cGVDaGVja1N1Y2Nlc3MgPSBwYXJhbWV0ZXJzID8gcGFyYW1ldGVycy5vblR5cGVDaGVja1N1Y2Nlc3MgfHwgb25UeXBlQ2hlY2tTdWNjZXNzIDogb25UeXBlQ2hlY2tTdWNjZXNzO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmRvU2V0VmFsdWUodmFsdWUsIHRydWUpO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSB0aGlzLnByb3BlcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICghdXRpbF8xLmlzUHJveHkodmFsdWUpICYmIHRoaXMuc2F2ZUluTG9jYWxTdG9yYWdlICYmIHV0aWxfMS5pc0Z1bmN0aW9uKHRoaXMub2JqZWN0LmdldE5hbWVzcGFjZWRTdG9yYWdlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLm9iamVjdC5nZXROYW1lc3BhY2VkU3RvcmFnZShzdHJpbmdLZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgdHlwZUd1YXJkKHZhbHVlKSB7XG4gICAgICAgIGxldCB2YWx1ZVRvUGFzcyA9IHZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNb2RpZmljYXRpb25fMS5Nb2RpZmljYXRpb24pXG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgY29uc3QgZGVzaWduVHlwZSA9IG1ldGFkYXRhXzEuZ2V0RGVzaWduVHlwZSh0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eS50b1N0cmluZygpKTtcbiAgICAgICAgY29uc3QgdHlwZUVycm9yID0gbmV3IEVycm9yc18xLlR5cGVFcnJvcihgJHt2YWx1ZVRvUGFzc30gaXMgbm90IHR5cGUgb2YgJHtkZXNpZ25UeXBlLmNsYXNzTmFtZSB8fCBkZXNpZ25UeXBlLm5hbWV9YCk7XG4gICAgICAgIGNvbnN0IGlkeFN0cnVjdE9iaiA9IHRoaXMub2JqZWN0O1xuICAgICAgICBsZXQgZXJyb3I7XG4gICAgICAgIGlmICghdGhpcy5udWxsYWJsZSAmJiAodmFsdWVUb1Bhc3MgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZVRvUGFzcyA9PT0gbnVsbCkpXG4gICAgICAgICAgICBlcnJvciA9IHR5cGVFcnJvcjtcbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgaWYgKHV0aWxfMS5pc1ByaW1pdGl2ZSh2YWx1ZVRvUGFzcykpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlVG9QYXNzICE9PSBkZXNpZ25UeXBlLm5hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMubnVsbGFibGUgfHwgISh2YWx1ZVRvUGFzcyA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlVG9QYXNzID09PSBudWxsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gdHlwZUVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCEodmFsdWVUb1Bhc3MgaW5zdGFuY2VvZiBkZXNpZ25UeXBlKSlcbiAgICAgICAgICAgICAgICBlcnJvciA9IHR5cGVFcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVycm9yICYmIHV0aWxfMS5pc0Z1bmN0aW9uKGlkeFN0cnVjdE9ialt0aGlzLm9uVHlwZUNoZWNrXSkpXG4gICAgICAgICAgICBlcnJvciA9IGlkeFN0cnVjdE9ialt0aGlzLm9uVHlwZUNoZWNrXSh2YWx1ZVRvUGFzcyk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKHV0aWxfMS5pc0Z1bmN0aW9uKGlkeFN0cnVjdE9ialt0aGlzLm9uVHlwZUNoZWNrRmFpbF0pKSB7XG4gICAgICAgICAgICAgICAgaWR4U3RydWN0T2JqW3RoaXMub25UeXBlQ2hlY2tGYWlsXShlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh1dGlsXzEuaXNGdW5jdGlvbihpZHhTdHJ1Y3RPYmoub25UeXBlQ2hlY2tGYWlsKSkge1xuICAgICAgICAgICAgICAgIGlkeFN0cnVjdE9iai5vblR5cGVDaGVja0ZhaWwoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHV0aWxfMS5pc0Z1bmN0aW9uKGlkeFN0cnVjdE9ialt0aGlzLm9uVHlwZUNoZWNrU3VjY2Vzc10pKVxuICAgICAgICAgICAgaWR4U3RydWN0T2JqW3RoaXMub25UeXBlQ2hlY2tTdWNjZXNzXSgpO1xuICAgICAgICByZXR1cm4gIShCb29sZWFuKGVycm9yKS52YWx1ZU9mKCkpO1xuICAgIH1cbiAgICBwcm94eUhhbmRsZXIoX3BhdGgsIF9jaGFuZ2VkVmFsLCBfcHJldlZhbCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmRvU2V0VmFsdWUob25fY2hhbmdlXzEuZGVmYXVsdC50YXJnZXQodmFsdWUpLCBmYWxzZSk7XG4gICAgfVxuICAgIHNob3VsZERvU2V0VmFsdWUodmFsdWUsIHNraXBHdWFyZCA9IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiAhKHZhbHVlID09PSB0aGlzLm93blZhbHVlIHx8ICFza2lwR3VhcmQgJiYgIXRoaXMuZGlzYWJsZVR5cGVHdWFyZCAmJiAhdGhpcy50eXBlR3VhcmQodmFsdWUpKTtcbiAgICB9XG4gICAgZG9TZXRWYWx1ZSh2YWx1ZSwgbW9kaWZ5VmFsdWUgPSB0cnVlLCBza2lwR3VhcmQgPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkRG9TZXRWYWx1ZSh2YWx1ZSwgc2tpcEd1YXJkKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbGV0IHZhbHVlVG9QYXNzO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNb2RpZmljYXRpb25fMS5Nb2RpZmljYXRpb24pIHtcbiAgICAgICAgICAgIHZhbHVlVG9QYXNzID0gdmFsdWUudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHZhbHVlVG9QYXNzID0gdmFsdWU7XG4gICAgICAgIGlmIChtb2RpZnlWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgcHJveHlmaWVkID0gdGhpcy5wcm94eWZ5VmFsdWUodmFsdWVUb1Bhc3MpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHByb3h5ZmllZDtcbiAgICAgICAgICAgIHRoaXMub3duVmFsdWUgPSB2YWx1ZVRvUGFzcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zaG91bGRVcGRhdGVOc1N0b3JhZ2UoKSAmJiB1dGlsXzEuaXNGdW5jdGlvbih0aGlzLm9iamVjdC5zZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSkpIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0LnNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKHRoaXMucHJvcGVydHkudG9TdHJpbmcoKSwgdmFsdWVUb1Bhc3MpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3h5ZnlWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSB8fCB1dGlsXzEuaXNPYmplY3QodmFsdWUpICYmICF2YWx1ZS5pc0JET01vZGVsKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG9uX2NoYW5nZV8xLmRlZmF1bHQudGFyZ2V0KHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBvbl9jaGFuZ2VfMS5kZWZhdWx0KHZhbHVlLCAocGF0aCwgY2hhbmdlZFZhbCwgcHJldlZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3h5SGFuZGxlclJlcGxhY2VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJveHlIYW5kbGVyUmVwbGFjZW1lbnQocGF0aCwgY2hhbmdlZFZhbCwgcHJldlZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm94eUhhbmRsZXIocGF0aCwgY2hhbmdlZFZhbCwgcHJldlZhbCk7XG4gICAgICAgICAgICB9LCB7IGlzU2hhbGxvdzogdGhpcy5pc1NoYWxsb3cgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBzaG91bGRVcGRhdGVOc1N0b3JhZ2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5zYXZlSW5Mb2NhbFN0b3JhZ2UgfHwgIWVudmlyb25tZW50XzEuaXNCcm93c2VyKCkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IHRoaXMucHJvcGVydHkudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3Qga2V5U2hvdWxkQmVVcGRhdGVkID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLm9iamVjdCwgXCJrZXlTaG91bGRCZVVwZGF0ZWRcIikgfHwge307XG4gICAgICAgIGlmIChrZXlTaG91bGRCZVVwZGF0ZWRbc3RyaW5nS2V5XSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAodXRpbF8xLmlzRnVuY3Rpb24odGhpcy5vYmplY3QuZ2V0TmFtZXNwYWNlZFN0b3JhZ2UpICYmXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5nZXROYW1lc3BhY2VkU3RvcmFnZShzdHJpbmdLZXkpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcy5vYmplY3QsIFwia2V5U2hvdWxkQmVVcGRhdGVkXCIsIE9iamVjdC5hc3NpZ24oa2V5U2hvdWxkQmVVcGRhdGVkLCB7IFtzdHJpbmdLZXldOiB0cnVlIH0pKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBCb29sZWFuKG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5vYmplY3QsIFwiY29uc3RydWN0aW9uQ29tcGxldGVcIikpO1xuICAgIH1cbn1cbmV4cG9ydHMuUHJvcGVydHkgPSBQcm9wZXJ0eTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVISnZjR1Z5ZEhrdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyeHBZaTlRY205d1pYSjBlUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkRRU3gzUkVGQmNVUTdRVUZEY2tRc2EwUkJRV2xHTzBGQlEycEdMSGRFUVVGdFJEdEJRVU51UkN3d1EwRkJjMFk3UVVGRmRFWXNORU5CUVRSRE8wRkJRelZETEd0RlFVRnBRenRCUVRKRmFrTXNUVUZCWVN4UlFVRlJPMGxCY1VkcVFpeFpRVUZaTEUxQlFWTXNSVUZCUlN4UlFVRlhMRVZCUVVVc1RVRkJaMFE3VVVGeVFqZEZMR05CUVZNc1IwRkJXU3hKUVVGSkxFTkJRVU03VVVGelFqZENMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETzFGQlEzSkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETzFGQlEzcENMRWxCUVVrc1ZVRkJWU3hIUVVGdlFpeEZRVUZGTEVOQlFVTTdVVUZGY2tNc1NVRkJTU3hOUVVGTkxFbEJRVWtzVFVGQlRTeERRVUZETEUxQlFVMDdXVUZCUlN4VlFVRlZMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU40UkN4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVVm9ReXhOUVVGTkxHVkJRV1VzUjBGQlJ5eGpRVUZQTEVOQlFVTXNVVUZCYTBJc1EwRkJReXhEUVVGRE8xRkJRM0JFTEUxQlFVMHNaVUZCWlN4SFFVRkhMRXRCUVVzc1pVRkJaU3hsUVVGbExFTkJRVU03VVVGRE5VUXNUVUZCVFN4WFFVRlhMRWRCUVVjc1MwRkJTeXhsUVVGbExGZEJRVmNzUTBGQlF6dFJRVU53UkN4TlFVRk5MR3RDUVVGclFpeEhRVUZITEV0QlFVc3NaVUZCWlN4clFrRkJhMElzUTBGQlF6dFJRVVZzUlN4SlFVRkpMRU5CUVVNc1pVRkJaU3hIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRMR1ZCUVdVc1NVRkJTU3hsUVVGbExFTkJRVU1zUTBGQlF5eERRVUZETEdWQlFXVXNRMEZCUXp0UlFVTndSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExGZEJRVmNzU1VGQlNTeFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJRenRSUVVOd1JpeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNc2EwSkJRV3RDTEVsQlFVa3NhMEpCUVd0Q0xFTkJRVU1zUTBGQlF5eERRVUZETEd0Q1FVRnJRaXhEUVVGRE8wbEJRM0JJTEVOQlFVTTdTVUZUVFN4UlFVRlJMRU5CUVVNc1MwRkJaME03VVVGRE5VTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEYWtNc1EwRkJRenRKUVZWTkxFOUJRVTg3VVVGRFZpeE5RVUZOTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlJUTkRMRWxCUVVrc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZGZGtJc1NVRkJTU3hEUVVGRExHTkJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVsQlFVa3NhVUpCUVZVc1EwRkJUeXhKUVVGSkxFTkJRVU1zVFVGQlR5eERRVUZETEc5Q1FVRnZRaXhEUVVGRExFVkJRVVU3V1VGRGJrY3NTMEZCU3l4SFFVRlRMRWxCUVVrc1EwRkJReXhOUVVGUExFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VTBGRE9VUTdVVUZEUkN4UFFVRlBMRXRCUVVzc1EwRkJRenRKUVVOcVFpeERRVUZETzBsQlZVMHNVMEZCVXl4RFFVRkRMRXRCUVdkRE8xRkJRemRETEVsQlFVa3NWMEZCVnl4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVONFFpeEpRVUZKTEV0QlFVc3NXVUZCV1N3eVFrRkJXVHRaUVVGRkxGZEJRVmNzUjBGQlJ5eExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1VVRkZha1VzVFVGQlRTeFZRVUZWTEVkQlFVY3NkMEpCUVdFc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU40UlN4TlFVRk5MRk5CUVZNc1IwRkJSeXhKUVVGSkxHdENRVUZUTEVOQlFVTXNSMEZCUnl4WFFVRlhMRzFDUVVGdFFpeFZRVUZWTEVOQlFVTXNVMEZCVXl4SlFVRkpMRlZCUVZVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6VkhMRTFCUVUwc1dVRkJXU3hIUVVGdFFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUldwRUxFbEJRVWtzUzBGQlN5eERRVUZETzFGQlJWWXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFbEJRVWtzUTBGQlF5eFhRVUZYTEV0QlFVc3NVMEZCVXl4SlFVRkpMRmRCUVZjc1MwRkJTeXhKUVVGSkxFTkJRVU03V1VGQlJTeExRVUZMTEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUlRkR0xFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdXVUZEVWl4SlFVRkpMR3RDUVVGWExFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVTdaMEpCUXpGQ0xFbEJRVWtzVDBGQlR5eFhRVUZYTEV0QlFVc3NWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUlVGQlJUdHZRa0ZEZEVRc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVsQlFVa3NRMEZCUXl4RFFVRkRMRmRCUVZjc1MwRkJTeXhUUVVGVExFbEJRVWtzVjBGQlZ5eExRVUZMTEVsQlFVa3NRMEZCUXp0M1FrRkJSU3hMUVVGTExFZEJRVWNzVTBGQlV5eERRVUZETzJsQ1FVTnFSenRoUVVOS08ybENRVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRMRmRCUVZjc1dVRkJXU3hWUVVGVkxFTkJRVU03WjBKQlFVVXNTMEZCU3l4SFFVRkhMRk5CUVZNc1EwRkJRenRUUVVOMFJUdFJRVWRFTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWxCUVVrc2FVSkJRVlVzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xbEJRVVVzUzBGQlN5eEhRVUZITEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVVUZIT1Vjc1NVRkJTU3hMUVVGTExFVkJRVVU3V1VGRFVDeEpRVUZKTEdsQ1FVRlZMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXl4RlFVRkZPMmRDUVVOb1JDeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzJGQlF6ZERPMmxDUVVGTkxFbEJRVWtzYVVKQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1pVRkJaU3hEUVVGRExFVkJRVVU3WjBKQlEycEVMRmxCUVZrc1EwRkJReXhsUVVGbExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdZVUZEZGtNN08yZENRVUZOTEUxQlFVMHNTMEZCU3l4RFFVRkRPMU5CUTNSQ08yRkJRVTBzU1VGQlNTeHBRa0ZCVlN4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJRenRaUVVGRkxGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUlVGQlJTeERRVUZETzFGQlEzUkhMRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRM1pETEVOQlFVTTdTVUZQVFN4WlFVRlpMRU5CUVVNc1MwRkJZeXhGUVVGRkxGZEJRV3RDTEVWQlFVVXNVVUZCWlR0UlFVTnVSU3hOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1NVRkJTVHRaUVVGRkxFOUJRVTg3VVVGRGJFUXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXh0UWtGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU51UkN4RFFVRkRPMGxCVlUwc1owSkJRV2RDTEVOQlFVTXNTMEZCWjBNc1JVRkJSU3haUVVGeFFpeExRVUZMTzFGQlEyaEdMRTlCUVU4c1EwRkJReXhEUVVGRExFdEJRVXNzUzBGQlN5eEpRVUZKTEVOQlFVTXNVVUZCVVN4SlFVRkpMRU5CUVVNc1UwRkJVeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM2hITEVOQlFVTTdTVUZaVXl4VlFVRlZMRU5CUVVNc1MwRkJaME1zUlVGQlJTeGpRVUYxUWl4SlFVRkpMRVZCUVVVc1dVRkJjVUlzUzBGQlN6dFJRVU14Unl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGVExFTkJRVU03V1VGQlJTeFBRVUZQTzFGQlEzSkVMRWxCUVVrc1YwRkJOa0lzUTBGQlF6dFJRVU5zUXl4SlFVRkpMRXRCUVVzc1dVRkJXU3d5UWtGQldTeEZRVUZGTzFsQlF5OUNMRmRCUVZjc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdVMEZEYWtNN08xbEJRVTBzVjBGQlZ5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTXpRaXhKUVVGSkxGZEJRVmNzUlVGQlJUdFpRVU5pTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdXVUZEYWtRc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFRRVUZUTEVOQlFVTTdXVUZEZGtJc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFhRVUZYTEVOQlFVTTdVMEZETDBJN1VVRkRSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1JVRkJSU3hKUVVGSkxHbENRVUZWTEVOQlFXdENMRWxCUVVrc1EwRkJReXhOUVVGUExFTkJRVU1zTUVKQlFUQkNMRU5CUVVNc1JVRkJSVHRaUVVOeVJpeEpRVUZKTEVOQlFVTXNUVUZCVHl4RFFVRkRMREJDUVVFd1FpeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVGRkxFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdVMEZEYmtjN1NVRkRUQ3hEUVVGRE8wbEJWVk1zV1VGQldTeERRVUZETEV0QlFWazdVVUZETDBJc1NVRkJTU3hMUVVGTExGbEJRVmtzUzBGQlN5eEpRVUZKTEdWQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGUExFdEJRVTBzUTBGQlF5eFZRVUZWTEVWQlFVVTdXVUZEZGtVc1MwRkJTeXhIUVVGSExHMUNRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJReTlDTEU5QlFVOHNiVUpCUVZFc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTlCUVU4c1JVRkJSU3hGUVVGRk8yZENRVU5xUkN4SlFVRkpMRWxCUVVrc1EwRkJReXgxUWtGQmRVSXNSVUZCUlR0dlFrRkRPVUlzU1VGQlNTeERRVUZETEhWQ1FVRjFRaXhEUVVGRExFbEJRVWtzUlVGQlVTeFZRVUZWTEVWQlFWRXNUMEZCVHl4RFFVRkRMRU5CUVVNN2FVSkJRM1pGT3p0dlFrRkJUU3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NSVUZCVVN4VlFVRlZMRVZCUVZFc1QwRkJUeXhEUVVGRExFTkJRVU03V1VGRGNFVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNKRE8xRkJRMFFzVDBGQlR5eExRVUZMTEVOQlFVTTdTVUZEYWtJc1EwRkJRenRKUVZOVExIRkNRVUZ4UWp0UlFVTXpRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhKUVVGSkxFTkJRVU1zZFVKQlFWTXNSVUZCUlR0WlFVRkZMRTlCUVU4c1MwRkJTeXhEUVVGRE8xRkJRek5FTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZETTBNc1RVRkJUU3hyUWtGQmEwSXNSMEZCUnl4elFrRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNiMEpCUVc5Q0xFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEYUVZc1NVRkJTU3hyUWtGQmEwSXNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkJSU3hQUVVGUExFbEJRVWtzUTBGQlF6dFJRVU12UXl4SlFVRkpMR2xDUVVGVkxFTkJRV3RDTEVsQlFVa3NRMEZCUXl4TlFVRlBMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTTdXVUZETjBNc1NVRkJTU3hEUVVGRExFMUJRVThzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eFRRVUZUTEVWQlFVVTdXVUZETjBVc2VVSkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRzlDUVVGdlFpeEZRVUZGTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNSVUZCUlN4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTFSeXhQUVVGUExFbEJRVWtzUTBGQlF6dFRRVU5tTzFGQlEwUXNUMEZCVHl4UFFVRlBMRU5CUVVNc2MwSkJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMSE5DUVVGelFpeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTnlSU3hEUVVGRE8wTkJRMG83UVVGMlVrUXNORUpCZFZKREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBNb2RpZmljYXRpb25fMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Nb2RpZmljYXRpb25cIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3Qgb25fY2hhbmdlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwib24tY2hhbmdlXCIpKTtcbmNvbnN0IGNsb25lX2RlZXBfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJjbG9uZS1kZWVwXCIpKTtcbmNsYXNzIFdhdGNoZWQge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHksIHBhcmFtcykge1xuICAgICAgICB0aGlzLmlzU2hhbGxvdyA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgICAgICBjb25zdCBjYXBpdGFsaXplZFByb3AgPSB1dGlsXzEudWNGaXJzdChwcm9wZXJ0eSk7XG4gICAgICAgIGNvbnN0IG9uSW5pdEZ1bmMgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1Jbml0YDtcbiAgICAgICAgY29uc3Qgb25DaGFuZ2VGdW5jID0gYG9uJHtjYXBpdGFsaXplZFByb3B9Q2hhbmdlYDtcbiAgICAgICAgY29uc3Qgb25BZGRGdW5jID0gYG9uJHtjYXBpdGFsaXplZFByb3B9QWRkYDtcbiAgICAgICAgY29uc3Qgb25SZW1vdmVGdW5jID0gYG9uJHtjYXBpdGFsaXplZFByb3B9UmVtb3ZlYDtcbiAgICAgICAgdGhpcy5vbkluaXQgPSBwYXJhbXMgPyBwYXJhbXMub25Jbml0IHx8IG9uSW5pdEZ1bmMgOiBvbkluaXRGdW5jO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gcGFyYW1zID8gcGFyYW1zLm9uQ2hhbmdlIHx8IG9uQ2hhbmdlRnVuYyA6IG9uQ2hhbmdlRnVuYztcbiAgICAgICAgdGhpcy5vbkFkZCA9IHBhcmFtcyA/IHBhcmFtcy5vbkFkZCB8fCBvbkFkZEZ1bmMgOiBvbkFkZEZ1bmM7XG4gICAgICAgIHRoaXMub25SZW1vdmUgPSBwYXJhbXMgPyBwYXJhbXMub25SZW1vdmUgfHwgb25SZW1vdmVGdW5jIDogb25SZW1vdmVGdW5jO1xuICAgICAgICB0aGlzLmlzU2hhbGxvdyA9IHBhcmFtcyAmJiB0eXBlb2YgcGFyYW1zLmlzU2hhbGxvdyA9PT0gXCJib29sZWFuXCIgPyBwYXJhbXMuaXNTaGFsbG93IDogdGhpcy5pc1NoYWxsb3c7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5zaG91bGREb1NldFZhbHVlKHZhbHVlKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3Qgb2xkVmFsID0gY2xvbmVfZGVlcF8xLmRlZmF1bHQodGhpcy5vd25WYWx1ZSk7XG4gICAgICAgIGxldCB2YWx1ZVRvUGFzcztcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kaWZpY2F0aW9uXzEuTW9kaWZpY2F0aW9uKSB7XG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHZhbHVlO1xuICAgICAgICBsZXQgdXNlVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kaWZpY2F0aW9uXzEuTW9kaWZpY2F0aW9uKSB7XG4gICAgICAgICAgICB2YWx1ZS5zZXRWYWx1ZSh2YWx1ZVRvUGFzcyk7XG4gICAgICAgICAgICB1c2VWYWx1ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWVUb1NldCA9IHVzZVZhbHVlID8gdmFsdWUgOiB2YWx1ZVRvUGFzcztcbiAgICAgICAgaWYgKHRoaXMuc3ViT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnN1Yk9iamVjdC5zZXRWYWx1ZSh2YWx1ZVRvU2V0KTtcbiAgICAgICAgICAgIHRoaXMub3duVmFsdWUgPSB1dGlsXzEuZ2V0UHJveHlUYXJnZXQodGhpcy5zdWJPYmplY3QudmFsdWVPZigpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlVG9QYXNzID0gdGhpcy5wcm94eWZ5VmFsdWUodmFsdWVUb1Bhc3MpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlVG9QYXNzO1xuICAgICAgICAgICAgdGhpcy5vd25WYWx1ZSA9IHV0aWxfMS5nZXRQcm94eVRhcmdldCh2YWx1ZVRvUGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWR4U3RydWN0T2JqID0gdGhpcy5vYmplY3Q7XG4gICAgICAgIGlmICh1dGlsXzEuaXNGdW5jdGlvbihpZHhTdHJ1Y3RPYmpbdGhpcy5vbkNoYW5nZV0pICYmIHRoaXMuaXNJbml0aWFsaXplZClcbiAgICAgICAgICAgIGlkeFN0cnVjdE9ialt0aGlzLm9uQ2hhbmdlXShvbGRWYWwpO1xuICAgICAgICBpZiAodXRpbF8xLmlzRnVuY3Rpb24oaWR4U3RydWN0T2JqW3RoaXMub25Jbml0XSkgJiYgIXRoaXMuaXNJbml0aWFsaXplZClcbiAgICAgICAgICAgIGlkeFN0cnVjdE9ialt0aGlzLm9uSW5pdF0odmFsdWVUb1Bhc3MpO1xuICAgICAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICBpZiAodGhpcy5zdWJPYmplY3QpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJPYmplY3QudmFsdWVPZigpO1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgc2V0U3ViT2JqZWN0KHN1Yk9iamVjdCkge1xuICAgICAgICBzdWJPYmplY3QucHJveHlIYW5kbGVyUmVwbGFjZW1lbnQgPSB0aGlzLnByb3h5SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICBzdWJPYmplY3QuaXNTaGFsbG93ID0gdGhpcy5pc1NoYWxsb3c7XG4gICAgICAgIHRoaXMuc3ViT2JqZWN0ID0gc3ViT2JqZWN0O1xuICAgIH1cbiAgICBwcm94eUhhbmRsZXIocGF0aCwgY2hhbmdlZFZhbCwgcHJldlZhbCkge1xuICAgICAgICBpZiAodGhpcy5zdWJPYmplY3QpXG4gICAgICAgICAgICB0aGlzLnN1Yk9iamVjdC5wcm94eUhhbmRsZXIocGF0aCwgY2hhbmdlZFZhbCwgcHJldlZhbCk7XG4gICAgICAgIGNvbnN0IG5ld0tleXMgPSBjaGFuZ2VkVmFsID8gT2JqZWN0LmtleXMoY2hhbmdlZFZhbCkgOiBbXTtcbiAgICAgICAgY29uc3Qgb2xkS2V5cyA9IHByZXZWYWwgPyBPYmplY3Qua2V5cyhwcmV2VmFsKSA6IFtdO1xuICAgICAgICBjb25zdCBuZXdMZW4gPSBuZXdLZXlzLmxlbmd0aDtcbiAgICAgICAgY29uc3Qgb2xkTGVuID0gb2xkS2V5cy5sZW5ndGg7XG4gICAgICAgIHRoaXMuY2FzZURldGVjdEV4ZWMoe1xuICAgICAgICAgICAgbGVuMTogbmV3TGVuLFxuICAgICAgICAgICAgbGVuMjogb2xkTGVuLFxuICAgICAgICAgICAgZnVuYzogdGhpcy5vbkFkZCxcbiAgICAgICAgICAgIGtleXMxOiBuZXdLZXlzLFxuICAgICAgICAgICAga2V5czI6IG9sZEtleXMsXG4gICAgICAgICAgICBjaGFuZ2VkVmFsLFxuICAgICAgICAgICAgcGF0aFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jYXNlRGV0ZWN0RXhlYyh7XG4gICAgICAgICAgICBsZW4xOiBvbGRMZW4sXG4gICAgICAgICAgICBsZW4yOiBuZXdMZW4sXG4gICAgICAgICAgICBmdW5jOiB0aGlzLm9uUmVtb3ZlLFxuICAgICAgICAgICAga2V5czE6IG9sZEtleXMsXG4gICAgICAgICAgICBrZXlzMjogbmV3S2V5cyxcbiAgICAgICAgICAgIGNoYW5nZWRWYWwsXG4gICAgICAgICAgICBwYXRoXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobmV3TGVuID09PSBvbGRMZW4gJiYgdGhpcy5vbkNoYW5nZSBpbiB0aGlzICYmIHRoaXMuaXNJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgdGhpcy5vYmplY3RbdGhpcy5vbkNoYW5nZV0oY2hhbmdlZFZhbCwgcGF0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hvdWxkRG9TZXRWYWx1ZSh2YWx1ZSwgc2tpcEd1YXJkID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViT2JqZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJPYmplY3Quc2hvdWxkRG9TZXRWYWx1ZSh2YWx1ZSwgc2tpcEd1YXJkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gKHZhbHVlICE9PSB0aGlzLm93blZhbHVlKTtcbiAgICB9XG4gICAgcHJveHlmeVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5IHx8IHV0aWxfMS5pc09iamVjdCh2YWx1ZSkgJiYgIXZhbHVlLmlzQkRPTW9kZWwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gb25fY2hhbmdlXzEuZGVmYXVsdC50YXJnZXQodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIG9uX2NoYW5nZV8xLmRlZmF1bHQodmFsdWUsIChwYXRoLCBjaGFuZ2VkVmFsdWUsIHByZXZpb3VzVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3h5SGFuZGxlcihwYXRoLCBjaGFuZ2VkVmFsdWUsIHByZXZpb3VzVmFsdWUpO1xuICAgICAgICAgICAgfSwgeyBpc1NoYWxsb3c6IHRoaXMuaXNTaGFsbG93IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY2FzZURldGVjdEV4ZWMoY2RQYXJhbXMpIHtcbiAgICAgICAgaWYgKGNkUGFyYW1zLmxlbjEgPiBjZFBhcmFtcy5sZW4yICYmIGNkUGFyYW1zLmZ1bmMgaW4gdGhpcy5vYmplY3QpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbW9kaWZpZWQgb2YgY2RQYXJhbXMua2V5czEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNkUGFyYW1zLmtleXMyLmluY2x1ZGVzKG1vZGlmaWVkKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iamVjdFtjZFBhcmFtcy5mdW5jXSgoY2RQYXJhbXMuY2hhbmdlZFZhbClbbW9kaWZpZWRdLCBjZFBhcmFtcy5wYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5XYXRjaGVkID0gV2F0Y2hlZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVYyRjBZMmhsWkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmJHbGlMMWRoZEdOb1pXUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlJVRXNkMFJCUVhGRU8wRkJRM0pFTERCRFFVRm5SanRCUVVOb1JpeHJSVUZCYVVNN1FVRkRha01zYjBWQlFXMURPMEZCT0VodVF5eE5RVUZoTEU5QlFVODdTVUZ4UjJoQ0xGbEJRVmtzVFVGQlV5eEZRVUZGTEZGQlFWY3NSVUZCUlN4TlFVRjFRanRSUVdoRGNFUXNZMEZCVXl4SFFVRlpMRWxCUVVrc1EwRkJRenRSUVRoQ2VrSXNhMEpCUVdFc1IwRkJXU3hMUVVGTExFTkJRVU03VVVGSGJrTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRGNrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU03VVVGRmVrSXNUVUZCVFN4bFFVRmxMRWRCUVVjc1kwRkJUeXhEUVVGRExGRkJRV3RDTEVOQlFVTXNRMEZCUXp0UlFVVndSQ3hOUVVGTkxGVkJRVlVzUjBGQlJ5eExRVUZMTEdWQlFXVXNUVUZCVFN4RFFVRkRPMUZCUXpsRExFMUJRVTBzV1VGQldTeEhRVUZITEV0QlFVc3NaVUZCWlN4UlFVRlJMRU5CUVVNN1VVRkRiRVFzVFVGQlRTeFRRVUZUTEVkQlFVY3NTMEZCU3l4bFFVRmxMRXRCUVVzc1EwRkJRenRSUVVNMVF5eE5RVUZOTEZsQlFWa3NSMEZCUnl4TFFVRkxMR1ZCUVdVc1VVRkJVU3hEUVVGRE8xRkJSV3hFTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4SlFVRkpMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETzFGQlEyaEZMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hKUVVGSkxGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRPMUZCUTNoRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRE8xRkJRelZFTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4SlFVRkpMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETzFGQlJYaEZMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzVFVGQlRTeEpRVUZKTEU5QlFVOHNUVUZCVFN4RFFVRkRMRk5CUVZNc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTTdTVUZEZWtjc1EwRkJRenRKUVZWTkxGRkJRVkVzUTBGQlF5eExRVUZuUXp0UlFVTTFReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFdEJRVXNzUTBGQlF6dFpRVUZGTEU5QlFVODdVVUZITVVNc1RVRkJUU3hOUVVGTkxFZEJRVWNzYjBKQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03VVVGRmVFTXNTVUZCU1N4WFFVRTJRaXhEUVVGRE8xRkJRMnhETEVsQlFVa3NTMEZCU3l4WlFVRlpMREpDUVVGWkxFVkJRVVU3V1VGREwwSXNWMEZCVnl4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dFRRVU5xUXpzN1dVRkJUU3hYUVVGWExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlJ6TkNMRWxCUVVrc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU55UWl4SlFVRkpMRXRCUVVzc1dVRkJXU3d5UWtGQldTeEZRVUZGTzFsQlF5OUNMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdXVUZETlVJc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF6dFRRVU51UWp0UlFVVkVMRTFCUVUwc1ZVRkJWU3hIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRmJFUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRk8xbEJRMmhDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzY1VKQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZETlVRN1lVRkJUVHRaUVVWSUxGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xbEJRemRETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1YwRkJWeXhEUVVGRE8xbEJRM3BDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc2NVSkJRV01zUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0VFFVTXZRenRSUVVWRUxFMUJRVTBzV1VGQldTeEhRVUZ0UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJSV3BFTEVsQlFVa3NhVUpCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExHRkJRV0U3V1VGQlJTeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlJYWkhMRWxCUVVrc2FVSkJRVlVzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVR0WlFVRkZMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1VVRkRla2NzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4SlFVRkpMRU5CUVVNN1NVRkRPVUlzUTBGQlF6dEpRVlZOTEU5QlFVODdVVUZEVml4SlFVRkpMRWxCUVVrc1EwRkJReXhUUVVGVE8xbEJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJRM0JFTEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRKUVVOMFFpeERRVUZETzBsQlZVMHNXVUZCV1N4RFFVRkRMRk5CUVRKRE8xRkJRek5FTEZOQlFWTXNRMEZCUXl4MVFrRkJkVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5xUlN4VFFVRlRMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTTdVVUZEY2tNc1NVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eFRRVUZUTEVOQlFVTTdTVUZETDBJc1EwRkJRenRKUVZWTkxGbEJRVmtzUTBGQlF5eEpRVUZaTEVWQlFVVXNWVUZCWjBJc1JVRkJSU3hQUVVGaE8xRkJRemRFTEVsQlFVa3NTVUZCU1N4RFFVRkRMRk5CUVZNN1dVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzFGQlF6TkZMRTFCUVUwc1QwRkJUeXhIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMUZCUXpGRUxFMUJRVTBzVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8xRkJRM0JFTEUxQlFVMHNUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRE9VSXNUVUZCVFN4TlFVRk5MRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF6dFJRVWM1UWl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRE8xbEJRMmhDTEVsQlFVa3NSVUZCUlN4TlFVRk5PMWxCUTFvc1NVRkJTU3hGUVVGRkxFMUJRVTA3V1VGRFdpeEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzN1dVRkRhRUlzUzBGQlN5eEZRVUZGTEU5QlFVODdXVUZEWkN4TFFVRkxMRVZCUVVVc1QwRkJUenRaUVVOa0xGVkJRVlU3V1VGRFZpeEpRVUZKTzFOQlExQXNRMEZCUXl4RFFVRkRPMUZCUlVnc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF6dFpRVU5vUWl4SlFVRkpMRVZCUVVVc1RVRkJUVHRaUVVOYUxFbEJRVWtzUlVGQlJTeE5RVUZOTzFsQlExb3NTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUk8xbEJRMjVDTEV0QlFVc3NSVUZCUlN4UFFVRlBPMWxCUTJRc1MwRkJTeXhGUVVGRkxFOUJRVTg3V1VGRFpDeFZRVUZWTzFsQlExWXNTVUZCU1R0VFFVTlFMRU5CUVVNc1EwRkJRenRSUVVWSUxFbEJRVWtzVFVGQlRTeExRVUZMTEUxQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hKUVVGSkxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNZVUZCWVN4RlFVRkZPMWxCUTJwRUxFbEJRVWtzUTBGQlF5eE5RVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExGVkJRVlVzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTnNSVHRKUVVOTUxFTkJRVU03U1VGWFR5eG5Ra0ZCWjBJc1EwRkJReXhMUVVGblF5eEZRVUZGTEZsQlFYRkNMRXRCUVVzN1VVRkRha1lzU1VGQlNTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZPMWxCUTJoQ0xFOUJRVThzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1UwRkROVVE3TzFsQlFVMHNUMEZCVHl4RFFVRkRMRXRCUVVzc1MwRkJTeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdTVUZETlVNc1EwRkJRenRKUVZkUExGbEJRVmtzUTBGQlF5eExRVUZaTzFGQlF6ZENMRWxCUVVrc1MwRkJTeXhaUVVGWkxFdEJRVXNzU1VGQlNTeGxRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJUeXhMUVVGTkxFTkJRVU1zVlVGQlZTeEZRVUZGTzFsQlEzWkZMRXRCUVVzc1IwRkJSeXh0UWtGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVNdlFpeFBRVUZQTEcxQ1FVRlJMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZsQlFWa3NSVUZCUlN4aFFVRmhMRVZCUVVVc1JVRkJSVHRuUWtGRGVrUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVkVzV1VGQldTeEZRVUZSTEdGQlFXRXNRMEZCUXl4RFFVRkRPMWxCUTNKRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEZOQlFWTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU55UXp0UlFVTkVMRTlCUVU4c1MwRkJTeXhEUVVGRE8wbEJRMnBDTEVOQlFVTTdTVUZUVHl4alFVRmpMRU5CUVVNc1VVRkJNa0k3VVVGRE9VTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1NVRkJTU3hIUVVGSExGRkJRVkVzUTBGQlF5eEpRVUZKTEVsQlFVa3NVVUZCVVN4RFFVRkRMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzFsQlF5OUVMRXRCUVVzc1RVRkJUU3hSUVVGUkxFbEJRVWtzVVVGQlVTeERRVUZETEV0QlFVc3NSVUZCUlR0blFrRkRia01zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTzI5Q1FVTTVRaXhKUVVGSkxFTkJRVU1zVFVGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCVFN4UlFVRlJMRU5CUVVNc1JVRkJSU3hSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdiMEpCUTNaR0xFMUJRVTA3YVVKQlExUTdZVUZEU2p0VFFVTktPMGxCUTB3c1EwRkJRenREUVVOS08wRkJOMUpFTERCQ1FUWlNReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmZ1bmN0aW9uIEJET1Rlc3RGYWN0b3J5KGN0b3IpIHtcbiAgICBsZXQgQkRPVGVzdCA9IGNsYXNzIEJET1Rlc3QgZXh0ZW5kcyBjdG9yIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9ICd0ZXN0JztcbiAgICAgICAgICAgIHRoaXMudGVzdGVyID0gW107XG4gICAgICAgIH1cbiAgICAgICAgb25UZXN0Q2hhbmdlKGNoYW5nZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVzdCBjaGFuZ2VkXCIsIGNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIG9uVGVzdGVySW5pdChpbml0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RlciBpbml0XCIsIGluaXQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIG9uVGVzdGVyQ2hhbmdlKGNoYW5nZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIGNoYW5nZWRcIiwgY2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgb25UZXN0ZXJBZGQoYWRkZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIGFkZGVkXCIsIGFkZGVkLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBvblRlc3RlclJlbW92ZShyZW1vdmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RlciByZW1vdmVkXCIsIHJlbW92ZWQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKHsgYXV0b1NhdmU6IHRydWUgfSksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBCRE9UZXN0LnByb3RvdHlwZSwgXCJ0aXRsZVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS53YXRjaGVkKCksIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoKF90eXBlKSA9PiBbU3RyaW5nXSksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEFycmF5KVxuICAgIF0sIEJET1Rlc3QucHJvdG90eXBlLCBcInRlc3RlclwiLCB2b2lkIDApO1xuICAgIEJET1Rlc3QgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKHsgaXNBYnN0cmFjdDogdHJ1ZSwgY29sbGVjdGlvbk5hbWU6IFwiQkRPVGVzdFwiIH0pXG4gICAgXSwgQkRPVGVzdCk7XG4gICAgcmV0dXJuIEJET1Rlc3Q7XG59XG5leHBvcnRzLkJET1Rlc3RGYWN0b3J5ID0gQkRPVGVzdEZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQVkdWemRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiVzlrWld4ekwwSkVUMVJsYzNRdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc2MwUkJRVFJGTzBGQlZUVkZMRk5CUVdkQ0xHTkJRV01zUTBGQmMwTXNTVUZCVnp0SlFWTXpSU3hKUVVGbExFOUJRVThzUjBGQmRFSXNUVUZCWlN4UFFVRlJMRk5CUVZFc1NVRkJTVHRSUVVGdVF6czdXVUZSTUVNc1ZVRkJTeXhIUVVGWExFMUJRVTBzUTBGQlF6dFpRVkZZTEZkQlFVMHNSMEZCWVN4RlFVRkZMRU5CUVVNN1VVRjVSRFZGTEVOQlFVTTdVVUZvUkdFc1dVRkJXU3hEUVVGRExFOUJRWFZDTzFsQlF6RkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zWTBGQll5eEZRVUZGTEU5QlFVOHNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNdlF5eERRVUZETzFGQlUxTXNXVUZCV1N4RFFVRkRMRWxCUVc5Q08xbEJRM1pETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1lVRkJZU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTXpReXhEUVVGRE8xRkJVMU1zWTBGQll5eERRVUZETEU5QlFYVkNPMWxCUXpWRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTJwRUxFTkJRVU03VVVGVFV5eFhRVUZYTEVOQlFVTXNTMEZCY1VJN1dVRkRka01zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4alFVRmpMRVZCUVVVc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlF6ZERMRU5CUVVNN1VVRlRVeXhqUVVGakxFTkJRVU1zVDBGQmRVSTdXVUZETlVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3hQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEYWtRc1EwRkJRenRMUVVWS0xFTkJRVUU3U1VGcVJXdERPMUZCUVRsQ0xITkNRVUZUTEVOQlFVTXNSVUZCUlN4UlFVRlJMRVZCUVVVc1NVRkJTU3hGUVVGRkxFTkJRVU03T3pCRFFVRXJRanRKUVZGc1FqdFJRVUV4UXl4dlFrRkJUeXhGUVVGRkxFVkJRVVVzYzBKQlFWTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXpzN01rTkJRVGhDTzBsQmFFSTNSQ3hQUVVGUE8xRkJSSEpDTERSQ1FVRmxMRU5CUVVNc1JVRkJSU3hWUVVGVkxFVkJRVVVzU1VGQlNTeEZRVUZGTEdOQlFXTXNSVUZCUlN4VFFVRlRMRVZCUVVVc1EwRkJRenRQUVVOc1JDeFBRVUZQTEVOQmVVVnlRanRKUVVORUxFOUJRVThzVDBGQlR5eERRVUZETzBGQlJXNUNMRU5CUVVNN1FVRnlSa1FzZDBOQmNVWkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmZ1bmN0aW9uIEJET1Rlc3QxRmFjdG9yeShjdG9yKSB7XG4gICAgbGV0IEJET1Rlc3QxID0gY2xhc3MgQkRPVGVzdDEgZXh0ZW5kcyBjdG9yIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9ICd0ZXN0JztcbiAgICAgICAgfVxuICAgICAgICBkb1NvbWV0aGluZygpIHtcbiAgICAgICAgICAgIHJldHVybiBcImxvbFwiO1xuICAgICAgICB9XG4gICAgICAgIG9uT2hhSW5pdChfdmFsdWUpIHtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLmF0dHJpYnV0ZSh7IGRlc2NyaXB0aW9uOiBcInRlc3Rlci4uLlwiIH0pLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgQkRPVGVzdDEucHJvdG90eXBlLCBcInRpdGxlXCIsIHZvaWQgMCk7XG4gICAgQkRPVGVzdDEgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKHsgaXNBYnN0cmFjdDogdHJ1ZSwgY29sbGVjdGlvbk5hbWU6IFwiQkRPVGVzdDFcIiB9KVxuICAgIF0sIEJET1Rlc3QxKTtcbiAgICByZXR1cm4gQkRPVGVzdDE7XG59XG5leHBvcnRzLkJET1Rlc3QxRmFjdG9yeSA9IEJET1Rlc3QxRmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBWR1Z6ZERFdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyMXZaR1ZzY3k5Q1JFOVVaWE4wTVM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZEUVN4elJFRkJiVVU3UVVGVGJrVXNVMEZCWjBJc1pVRkJaU3hEUVVGclJDeEpRVUZYTzBsQlZYaEdMRWxCUVdVc1VVRkJVU3hIUVVGMlFpeE5RVUZsTEZGQlFWTXNVMEZCVVN4SlFVRkpPMUZCUVhCRE96dFpRVkZ2UkN4VlFVRkxMRWRCUVZjc1RVRkJUU3hEUVVGRE8xRkJjMEl6UlN4RFFVRkRPMUZCWkZVc1YwRkJWenRaUVVOa0xFOUJRVThzUzBGQlN5eERRVUZETzFGQlEycENMRU5CUVVNN1VVRlRVeXhUUVVGVExFTkJRVU1zVFVGQll6dFJRVVZzUXl4RFFVRkRPMHRCUTBvc1EwRkJRVHRKUVhSQ05FTTdVVUZCZUVNc2MwSkJRVk1zUTBGQlF5eEZRVUZGTEZkQlFWY3NSVUZCUlN4WFFVRlhMRVZCUVVVc1EwRkJRenM3TWtOQlFTdENPMGxCVWpWRUxGRkJRVkU3VVVGRWRFSXNORUpCUVdVc1EwRkJReXhGUVVGRkxGVkJRVlVzUlVGQlJTeEpRVUZKTEVWQlFVVXNZMEZCWXl4RlFVRkZMRlZCUVZVc1JVRkJSU3hEUVVGRE8wOUJRMjVFTEZGQlFWRXNRMEU0UW5SQ08wbEJRMFFzVDBGQlR5eFJRVUZSTEVOQlFVTTdRVUZEY0VJc1EwRkJRenRCUVRGRFJDd3dRMEV3UTBNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfYTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5cInVzZSBzdHJpY3RcIjtcbmNvbnN0IENodW5rXzEgPSByZXF1aXJlKFwiLi9DaHVua1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5sZXQgQ2VsbCA9IGNsYXNzIENlbGwge1xuICAgIGNvbnN0cnVjdG9yKF9wYXJhbXMpIHtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy5jYXZlID0gMDtcbiAgICAgICAgdGhpcy5yaXZlciA9IDA7XG4gICAgICAgIHRoaXMuaHVtaWRpdHkgPSAwO1xuICAgICAgICB0aGlzLnRlbXBlcmF0dXJlID0gMDtcbiAgICAgICAgdGhpcy5jaHVuayA9IG5ldyBDaHVua18xLkNodW5rKCk7XG4gICAgfVxufTtcbkNlbGwgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBDb25zdFBhcmFtcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBDb25zdFBhcmFtcykgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0XSlcbl0sIENlbGwpO1xuZXhwb3J0cy5DZWxsID0gQ2VsbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyVnNiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2Ylc5a1pXeHpMME5sYkd3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3UVVGQlFTeHRRMEZCWjBNN1FVRkRhRU1zYzBSQlFYZEVPMEZCVTNoRUxFbEJRV0VzU1VGQlNTeEhRVUZxUWl4TlFVRmhMRWxCUVVrN1NVRjVSR0lzV1VGQldTeFBRVUV5UWp0UlFXeEVhRU1zVFVGQlF5eEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFWRmtMRTFCUVVNc1IwRkJWeXhEUVVGRExFTkJRVU03VVVGUlpDeFRRVUZKTEVkQlFWY3NRMEZCUXl4RFFVRkRPMUZCVVdwQ0xGVkJRVXNzUjBGQlZ5eERRVUZETEVOQlFVTTdVVUZSYkVJc1lVRkJVU3hIUVVGWExFTkJRVU1zUTBGQlF6dFJRVkZ5UWl4blFrRkJWeXhIUVVGWExFTkJRVU1zUTBGQlF6dFJRVkY0UWl4VlFVRkxMRWRCUVZVc1NVRkJTU3hoUVVGTExFVkJRVVVzUTBGQlF6dEpRVVZUTEVOQlFVTTdRMEZETDBNc1EwRkJRVHRCUVRGRVdTeEpRVUZKTzBsQlJHaENMRFJDUVVGbExFVkJRVVU3YVVWQk1FUlJMRmRCUVZjc2IwSkJRVmdzVjBGQlZ6dEhRWHBFZUVJc1NVRkJTU3hEUVRCRWFFSTdRVUV4UkZrc2IwSkJRVWtpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgb3Blbl9zaW1wbGV4X25vaXNlXzEgPSByZXF1aXJlKFwib3Blbi1zaW1wbGV4LW5vaXNlXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IENlbGxfMSA9IHJlcXVpcmUoXCIuL0NlbGxcIik7XG5jbGFzcyBDaHVuayB7XG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDY0O1xuICAgICAgICB0aGlzLmdyaWQgPSBbXTtcbiAgICAgICAgdGhpcy5zaW1wbGV4Q2F2ZSA9IG9wZW5fc2ltcGxleF9ub2lzZV8xLm1ha2VOb2lzZTJEKDEpO1xuICAgICAgICB0aGlzLnNpbXBsZXhSaXZlciA9IG9wZW5fc2ltcGxleF9ub2lzZV8xLm1ha2VOb2lzZTJEKDIpO1xuICAgICAgICB0aGlzLnNpbXBsZXhUZW1wZXJhdHVyZSA9IG9wZW5fc2ltcGxleF9ub2lzZV8xLm1ha2VOb2lzZTJEKDMpO1xuICAgICAgICB0aGlzLnNpbXBsZXhIdW1pZGl0eSA9IG9wZW5fc2ltcGxleF9ub2lzZV8xLm1ha2VOb2lzZTJEKDQpO1xuICAgICAgICB1dGlsXzEubWVyZ2UodGhpcywgcGFyYW1zKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUdyaWQoKTtcbiAgICB9XG4gICAgZ2VuZXJhdGVHcmlkKCkge1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLnNpemU7IHJvdysrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ3JpZFtyb3ddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnB1c2goW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5zaXplOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHhDb29yZGluYXRlID0gY29sICsgdGhpcy54ICogdGhpcy5zaXplO1xuICAgICAgICAgICAgICAgIGNvbnN0IHlDb29yZGluYXRlID0gcm93ICsgdGhpcy55ICogdGhpcy5zaXplO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFtyb3ddLnB1c2gobmV3IENlbGxfMS5DZWxsKHtcbiAgICAgICAgICAgICAgICAgICAgeDogeENvb3JkaW5hdGUsXG4gICAgICAgICAgICAgICAgICAgIHk6IHlDb29yZGluYXRlLFxuICAgICAgICAgICAgICAgICAgICBjYXZlOiB0aGlzLnNpbXBsZXhDYXZlKHhDb29yZGluYXRlIC8gMTAwLCB5Q29vcmRpbmF0ZSAvIDEwMCksXG4gICAgICAgICAgICAgICAgICAgIHJpdmVyOiB0aGlzLnNpbXBsZXhSaXZlcih4Q29vcmRpbmF0ZSAvIDUwMCwgeUNvb3JkaW5hdGUgLyA1MDApLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZTogdGhpcy5zaW1wbGV4VGVtcGVyYXR1cmUoeENvb3JkaW5hdGUgLyAyNTAwLCB5Q29vcmRpbmF0ZSAvIDI1MDApLFxuICAgICAgICAgICAgICAgICAgICBodW1pZGl0eTogdGhpcy5zaW1wbGV4SHVtaWRpdHkoeENvb3JkaW5hdGUgLyAyNTAwLCB5Q29vcmRpbmF0ZSAvIDI1MDApLFxuICAgICAgICAgICAgICAgICAgICBjaHVuazogdGhpc1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuQ2h1bmsgPSBDaHVuaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyaDFibXN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDIxdlpHVnNjeTlEYUhWdWF5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxESkVRVUZwUkR0QlFVTnFSQ3d3UTBGQmQwTTdRVUZEZUVNc2FVTkJRVGhDTzBGQlVUbENMRTFCUVdFc1MwRkJTenRKUVhORlpDeFpRVUZaTEUxQlFUSkNPMUZCTDBSb1F5eE5RVUZETEVkQlFWY3NRMEZCUXl4RFFVRkRPMUZCVVdRc1RVRkJReXhIUVVGWExFTkJRVU1zUTBGQlF6dFJRVkZrTEZOQlFVa3NSMEZCV1N4RlFVRkZMRU5CUVVNN1VVRlRhRUlzVTBGQlNTeEhRVUZoTEVWQlFVVXNRMEZCUXp0UlFWTndRaXhuUWtGQlZ5eEhRVUZITEdkRFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGVE4wSXNhVUpCUVZrc1IwRkJSeXhuUTBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCVXpsQ0xIVkNRVUZyUWl4SFFVRkhMR2REUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZUY0VNc2IwSkJRV1VzUjBGQlJ5eG5RMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSM1pETEZsQlFVc3NRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRGNFSXNTVUZCU1N4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRE8wbEJRM2hDTEVOQlFVTTdTVUZSVXl4WlFVRlpPMUZCUTJ4Q0xFdEJRVXNzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJXU3hKUVVGSkxFTkJRVU1zU1VGQlN5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZPMWxCUTJoRUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8yZENRVU5xUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTjBRanRaUVVORUxFdEJRVXNzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJXU3hKUVVGSkxFTkJRVU1zU1VGQlN5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZPMmRDUVVOb1JDeE5RVUZOTEZkQlFWY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlZ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRPMmRDUVVOeVJDeE5RVUZOTEZkQlFWY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlZ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRPMmRDUVVWeVJDeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGRFppeEpRVUZKTEZkQlFVa3NRMEZCUXp0dlFrRkRUQ3hEUVVGRExFVkJRVVVzVjBGQlZ6dHZRa0ZEWkN4RFFVRkRMRVZCUVVVc1YwRkJWenR2UWtGRFpDeEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhYUVVGWExFZEJRVWNzUjBGQlJ5eEZRVUZGTEZkQlFWY3NSMEZCUnl4SFFVRkhMRU5CUVVNN2IwSkJRelZFTEV0QlFVc3NSVUZCUlN4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGZEJRVmNzUjBGQlJ5eEhRVUZITEVWQlFVVXNWMEZCVnl4SFFVRkhMRWRCUVVjc1EwRkJRenR2UWtGRE9VUXNWMEZCVnl4RlFVRkZMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4WFFVRlhMRWRCUVVjc1NVRkJTU3hGUVVGRkxGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdiMEpCUXpWRkxGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFVkJRVVVzVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXp0dlFrRkRkRVVzUzBGQlN5eEZRVUZGTEVsQlFVazdhVUpCUTJRc1EwRkJReXhEUVVOTUxFTkJRVU03WVVGRFREdFRRVU5LTzBsQlEwd3NRMEZCUXp0RFFVTktPMEZCZUVkRUxITkNRWGRIUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gQkRPQ29uZmlnRmFjdG9yeShjdG9yKSB7XG4gICAgY2xhc3MgQkRPQ29uZmlnIGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVzID0gW1wiLzpuYW1lXCJdO1xuICAgICAgICAgICAgdGhpcy5qc29uT25seSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEJET0NvbmZpZztcbn1cbmV4cG9ydHMuQkRPQ29uZmlnRmFjdG9yeSA9IEJET0NvbmZpZ0ZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQUTI5dVptbG5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzl5YjNWMFpYTXZRa1JQUTI5dVptbG5MblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlUwRXNVMEZCWjBJc1owSkJRV2RDTEVOQlFYTkRMRWxCUVZjN1NVRlZOMFVzVFVGQlpTeFRRVUZWTEZOQlFWRXNTVUZCU1R0UlFVRnlRenM3V1VGUFZ5eFhRVUZOTEVkQlFXRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRaUVU4elFpeGhRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUXpsQ0xFTkJRVU03UzBGQlFUdEpRVVZFTEU5QlFVOHNVMEZCVXl4RFFVRkRPMEZCUTNKQ0xFTkJRVU03UVVFMVFrUXNORU5CTkVKREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIEJET0dhbWVMb2JieUZhY3RvcnkoY3Rvcikge1xuICAgIGNsYXNzIEJET0dhbWVMb2JieSBleHRlbmRzIGN0b3Ige1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlck5hbWVTcGFjZSA9ICcvJztcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGVTdHJpbmcgPSByZXF1aXJlKCd+YmRvL3ZpZXdzL2dhbWVMb2JieS5uamsnKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyB0ZW1wbGF0ZVBhcmFtcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb2hhOiAnT09PT09IQUFBQUFBQUEhISEnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJET0dhbWVMb2JieS5hdHRhY2hUb1NlcnZlcnMgPSBbXCJHYW1lU2VydmVyXCJdO1xuICAgIHJldHVybiBCRE9HYW1lTG9iYnk7XG59XG5leHBvcnRzLkJET0dhbWVMb2JieUZhY3RvcnkgPSBCRE9HYW1lTG9iYnlGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFIyRnRaVXh2WW1KNUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXliM1YwWlhNdlFrUlBSMkZ0WlV4dlltSjVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlZVRXNVMEZCWjBJc2JVSkJRVzFDTEVOQlFYTkRMRWxCUVZjN1NVRlRhRVlzVFVGQlpTeFpRVUZoTEZOQlFWRXNTVUZCU1R0UlFVRjRRenM3V1VGblFsY3NiMEpCUVdVc1IwRkJSeXhIUVVGSExFTkJRVU03V1VGUmJrSXNiVUpCUVdNc1IwRkJZU3hQUVVGUExFTkJRVU1zTUVKQlFUQkNMRU5CUVVNc1EwRkJRenRSUVdNM1JTeERRVUZETzFGQlRHRXNTMEZCU3l4RFFVRkRMR05CUVdNN1dVRkRNVUlzVDBGQlR6dG5Ra0ZEU0N4SFFVRkhMRVZCUVVVc2JVSkJRVzFDTzJGQlF6TkNMRU5CUVVNN1VVRkRUaXhEUVVGRE96dEpRVFZDWVN3MFFrRkJaU3hIUVVGaExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdTVUVyUWpkRUxFOUJRVThzV1VGQldTeERRVUZETzBGQlEzaENMRU5CUVVNN1FVRnNSRVFzYTBSQmEwUkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBCRE9Ib21lRmFjdG9yeShjdG9yKSB7XG4gICAgY2xhc3MgQkRPSG9tZSBleHRlbmRzIGN0b3Ige1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlck5hbWVTcGFjZSA9ICcvJztcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGVTdHJpbmcgPSByZXF1aXJlKCd+YmRvL3ZpZXdzL2hvbWUubmprJyk7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9oYTogJ2VuZGxpY2ggenUgSGF1c2UgPSknXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJET0hvbWUuYXR0YWNoVG9TZXJ2ZXJzID0gW1wiV2ViU2VydmVyXCJdO1xuICAgIHJldHVybiBCRE9Ib21lO1xufVxuZXhwb3J0cy5CRE9Ib21lRmFjdG9yeSA9IEJET0hvbWVGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFNHOXRaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2Y205MWRHVnpMMEpFVDBodmJXVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGVlFTeFRRVUZuUWl4alFVRmpMRU5CUVhORExFbEJRVmM3U1VGVE0wVXNUVUZCWlN4UFFVRlJMRk5CUVZFc1NVRkJTVHRSUVVGdVF6czdXVUZuUWxjc2IwSkJRV1VzUjBGQlJ5eEhRVUZITEVOQlFVTTdXVUZSYmtJc2JVSkJRV01zUjBGQllTeFBRVUZQTEVOQlFVTXNjVUpCUVhGQ0xFTkJRVU1zUTBGQlF6dFJRV040UlN4RFFVRkRPMUZCVEdFc1MwRkJTeXhEUVVGRExHTkJRV003V1VGRE1VSXNUMEZCVHp0blFrRkRTQ3hIUVVGSExFVkJRVVVzY1VKQlFYRkNPMkZCUXpkQ0xFTkJRVU03VVVGRFRpeERRVUZET3p0SlFUVkNZU3gxUWtGQlpTeEhRVUZoTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1NVRXJRalZFTEU5QlFVOHNUMEZCVHl4RFFVRkRPMEZCUTI1Q0xFTkJRVU03UVVGc1JFUXNkME5CYTBSREluMD0iLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9zb3VyY2UvYXBwL3V0aWxzIHN5bmMgcmVjdXJzaXZlXCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwicmVmbGVjdC1tZXRhZGF0YVwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBCYXNlQ29uc3RydWN0b3JfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CYXNlQ29uc3RydWN0b3JcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCBmcmFtZXdvcmtfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2ZyYW1ld29ya1wiKTtcbmNvbnN0IHR5cGVfZ3JhcGhxbF8xID0gcmVxdWlyZShcInR5cGUtZ3JhcGhxbFwiKTtcbmZ1bmN0aW9uIHdhdGNoZWQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IGtleS50b1N0cmluZygpO1xuICAgICAgICBjb25zdCBkZWNvcmF0b3JTZXR0aW5ncyA9IGZyYW1ld29ya18xLmJlZm9yZURlc2NyaXB0b3IodGFyZ2V0LCBzdHJpbmdLZXksIFwiZGVmaW5lZFdhdGNoZXJzXCIsIHsgcGFyYW1zIH0pO1xuICAgICAgICBmcmFtZXdvcmtfMS5jcmVhdGVEZWNvcmF0b3JEZXNjcmlwdG9yKHRhcmdldCwgc3RyaW5nS2V5LCBcIldhdGNoZWRcIiwgZGVjb3JhdG9yU2V0dGluZ3MpO1xuICAgIH07XG59XG5leHBvcnRzLndhdGNoZWQgPSB3YXRjaGVkO1xuZnVuY3Rpb24gcHJvcGVydHkodHlwZUZ1bmMsIHBhcmFtcykge1xuICAgIHJldHVybiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nS2V5ID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgICAgIGlmICh0eXBlRnVuYyAmJiAhKHR5cGVGdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pICYmICFwYXJhbXMpXG4gICAgICAgICAgICBwYXJhbXMgPSB0eXBlRnVuYztcbiAgICAgICAgaWYgKHR5cGVGdW5jICYmICEodHlwZUZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbikpXG4gICAgICAgICAgICB0eXBlRnVuYyA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFwYXJhbXMgfHwgIShwYXJhbXMgaW5zdGFuY2VvZiBPYmplY3QpKVxuICAgICAgICAgICAgcGFyYW1zID0ge307XG4gICAgICAgIGNvbnN0IGRlY29yYXRvclNldHRpbmdzID0gZnJhbWV3b3JrXzEuYmVmb3JlRGVzY3JpcHRvcih0YXJnZXQsIHN0cmluZ0tleSwgXCJkZWZpbmVkUHJvcGVydGllc1wiLCB7IHR5cGVGdW5jLCBwYXJhbXMgfSk7XG4gICAgICAgIGZyYW1ld29ya18xLmNyZWF0ZURlY29yYXRvckRlc2NyaXB0b3IodGFyZ2V0LCBzdHJpbmdLZXksIFwiUHJvcGVydHlcIiwgZGVjb3JhdG9yU2V0dGluZ3MpO1xuICAgIH07XG59XG5leHBvcnRzLnByb3BlcnR5ID0gcHJvcGVydHk7XG5mdW5jdGlvbiBhdHRyaWJ1dGUodHlwZUZ1bmMsIHBhcmFtcykge1xuICAgIHJldHVybiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nS2V5ID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgICAgIGlmICh0eXBlRnVuYyAmJiAhKHR5cGVGdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pICYmICFwYXJhbXMpXG4gICAgICAgICAgICBwYXJhbXMgPSB0eXBlRnVuYztcbiAgICAgICAgaWYgKHR5cGVGdW5jICYmICEodHlwZUZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbikpXG4gICAgICAgICAgICB0eXBlRnVuYyA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFwYXJhbXMgfHwgIShwYXJhbXMgaW5zdGFuY2VvZiBPYmplY3QpKVxuICAgICAgICAgICAgcGFyYW1zID0ge307XG4gICAgICAgIGlmICh0eXBlRnVuYyBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmIHBhcmFtcylcbiAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLkZpZWxkKHR5cGVGdW5jLCBwYXJhbXMpKHRhcmdldCwga2V5KTtcbiAgICAgICAgZWxzZSBpZiAodHlwZUZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbilcbiAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLkZpZWxkKHR5cGVGdW5jKSh0YXJnZXQsIGtleSk7XG4gICAgICAgIGVsc2UgaWYgKHBhcmFtcylcbiAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLkZpZWxkKHBhcmFtcykodGFyZ2V0LCBrZXkpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5GaWVsZCgpKHRhcmdldCwga2V5KTtcbiAgICAgICAgY29uc3QgZGVjb3JhdG9yU2V0dGluZ3MgPSBmcmFtZXdvcmtfMS5iZWZvcmVEZXNjcmlwdG9yKHRhcmdldCwgc3RyaW5nS2V5LCBcImRlZmluZWRBdHRyaWJ1dGVzXCIsIHsgdHlwZUZ1bmMsIHBhcmFtcyB9KTtcbiAgICAgICAgZnJhbWV3b3JrXzEuY3JlYXRlRGVjb3JhdG9yRGVzY3JpcHRvcih0YXJnZXQsIHN0cmluZ0tleSwgXCJBdHRyaWJ1dGVcIiwgZGVjb3JhdG9yU2V0dGluZ3MpO1xuICAgIH07XG59XG5leHBvcnRzLmF0dHJpYnV0ZSA9IGF0dHJpYnV0ZTtcbmZ1bmN0aW9uIGJhc2VDb25zdHJ1Y3RvcihuYW1lLCBwYXJhbXMsIGluZGV4ID0gMCkge1xuICAgIHJldHVybiAoY3RvcikgPT4ge1xuICAgICAgICBjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoY3Rvcik7XG4gICAgICAgIGlmIChmcmFtZXdvcmtfMS5pc0Jhc2VDb25zdHJ1Y3Rvcihwcm90b3R5cGUpKVxuICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGN0b3IsIE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpKTtcbiAgICAgICAgaWYgKG5hbWUgJiYgKHR5cGVvZiBuYW1lID09PSBcIm51bWJlclwiKSlcbiAgICAgICAgICAgIGluZGV4ID0gbmFtZTtcbiAgICAgICAgaWYgKG5hbWUgJiYgKHR5cGVvZiBuYW1lID09PSBcIm9iamVjdFwiKSlcbiAgICAgICAgICAgIHBhcmFtcyA9IG5hbWU7XG4gICAgICAgIGlmIChuYW1lICYmICgodHlwZW9mIG5hbWUgPT09IFwib2JqZWN0XCIpIHx8ICh0eXBlb2YgbmFtZSA9PT0gXCJudW1iZXJcIikpKVxuICAgICAgICAgICAgbmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHBhcmFtcyAmJiAodHlwZW9mIHBhcmFtcyA9PT0gXCJudW1iZXJcIikpXG4gICAgICAgICAgICBpbmRleCA9IHBhcmFtcztcbiAgICAgICAgaWYgKHBhcmFtcyAmJiAodHlwZW9mIHBhcmFtcyA9PT0gXCJudW1iZXJcIikpXG4gICAgICAgICAgICBwYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChmcmFtZXdvcmtfMS5pc0JET01vZGVsKGN0b3IpKSB7XG4gICAgICAgICAgICBpZiAobmFtZSAmJiAodHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIpICYmIHBhcmFtcyAmJiAodHlwZW9mIHBhcmFtcyA9PT0gXCJvYmplY3RcIikpIHtcbiAgICAgICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5PYmplY3RUeXBlKG5hbWUsIHBhcmFtcykoY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuYW1lICYmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5PYmplY3RUeXBlKG5hbWUpKGN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGFyYW1zICYmICh0eXBlb2YgcGFyYW1zID09PSBcIm9iamVjdFwiKSkge1xuICAgICAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLk9iamVjdFR5cGUocGFyYW1zKShjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5PYmplY3RUeXBlKCkoY3Rvcik7XG4gICAgICAgICAgICBpZiAocGFyYW1zICYmICh0eXBlb2YgcGFyYW1zID09PSBcIm9iamVjdFwiKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZDb2xsZWN0aW9uTmFtZSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoY3RvciwgXCJjb2xsZWN0aW9uTmFtZVwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2RGF0YWJhc2VOYW1lID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShjdG9yLCBcImRhdGFiYXNlTmFtZVwiKTtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKGN0b3IsIFwiY29sbGVjdGlvbk5hbWVcIiwgcGFyYW1zLmNvbGxlY3Rpb25OYW1lIHx8IHByZXZDb2xsZWN0aW9uTmFtZSB8fCBcImRlZmF1bHRcIik7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YShjdG9yLCBcImRhdGFiYXNlTmFtZVwiLCBwYXJhbXMuZGF0YWJhc2VOYW1lIHx8IHByZXZEYXRhYmFzZU5hbWUgfHwgXCJkZWZhdWx0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMgJiYgKHR5cGVvZiBwYXJhbXMgPT09IFwib2JqZWN0XCIgJiYgcGFyYW1zLmlzQWJzdHJhY3QpKVxuICAgICAgICAgICAgcmV0dXJuIGN0b3I7XG4gICAgICAgIGNvbnN0IEJhc2VDb25zdHJ1Y3RvciA9IEJhc2VDb25zdHJ1Y3Rvcl8xLmJhc2VDb25zdHJ1Y3RvckZhY3RvcnkoY3RvciwgaW5kZXgpO1xuICAgICAgICBpZiAoZnJhbWV3b3JrXzEuaXNDb21wb25lbnQoY3RvcikpIHtcbiAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh1dGlsXzEucGFzY2FsQ2FzZTJrZWJhYkNhc2UoY3Rvci5uYW1lKSwgQmFzZUNvbnN0cnVjdG9yLCB7XG4gICAgICAgICAgICAgICAgZXh0ZW5kczogQmFzZUNvbnN0cnVjdG9yLmV4dGVuZHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBCYXNlQ29uc3RydWN0b3I7XG4gICAgfTtcbn1cbmV4cG9ydHMuYmFzZUNvbnN0cnVjdG9yID0gYmFzZUNvbnN0cnVjdG9yO1xuZXhwb3J0cy5xdWVyeSA9IHR5cGVfZ3JhcGhxbF8xLlF1ZXJ5O1xuZXhwb3J0cy5hcmcgPSB0eXBlX2dyYXBocWxfMS5Bcmc7XG5leHBvcnRzLmFyZ3MgPSB0eXBlX2dyYXBocWxfMS5BcmdzO1xuZXhwb3J0cy5yZXNvbHZlciA9IHR5cGVfZ3JhcGhxbF8xLlJlc29sdmVyO1xuZXhwb3J0cy5yb290ID0gdHlwZV9ncmFwaHFsXzEuUm9vdDtcbmV4cG9ydHMubXV0YXRpb24gPSB0eXBlX2dyYXBocWxfMS5NdXRhdGlvbjtcbmV4cG9ydHMuc3Vic2NyaXB0aW9uID0gdHlwZV9ncmFwaHFsXzEuU3Vic2NyaXB0aW9uO1xuZXhwb3J0cy5wdWJTdWIgPSB0eXBlX2dyYXBocWxfMS5QdWJTdWI7XG5leHBvcnRzLmlucHV0VHlwZSA9IHR5cGVfZ3JhcGhxbF8xLklucHV0VHlwZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpHVmpiM0poZEc5eWN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZkWFJwYkhNdlpHVmpiM0poZEc5eWN5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxEUkNRVUV3UWp0QlFVTXhRaXd3UTBGQmRVUTdRVUZKZGtRc09FUkJRWGRHTzBGQlEzaEdMR3RFUVVGclJUdEJRVU5zUlN4dlJFRkJLMGc3UVVGRkwwZ3NLME5CV1hOQ08wRkJhMEowUWl4VFFVRm5RaXhQUVVGUExFTkJRVU1zVTBGQmVVSXNSVUZCUlR0SlFVTXZReXhQUVVGUExFTkJRVU1zVFVGQlZ5eEZRVUZGTEVkQlFXOUNMRVZCUVVVc1JVRkJSVHRSUVVONlF5eE5RVUZOTEZOQlFWTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRGFrTXNUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5dzBRa0ZCWjBJc1EwRkJReXhOUVVGTkxFVkJRVVVzVTBGQlV5eEZRVUZGTEdsQ1FVRnBRaXhGUVVGRkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTNSaXh4UTBGQmVVSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1UwRkJVeXhGUVVGRkxGTkJRVk1zUlVGQlJTeHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8wbEJReTlGTEVOQlFVTXNRMEZCUXp0QlFVTk9MRU5CUVVNN1FVRk9SQ3d3UWtGTlF6dEJRV2RDUkN4VFFVRm5RaXhSUVVGUkxFTkJRVU1zVVVGQk1rSXNSVUZCUlN4TlFVRjNRanRKUVVNeFJTeFBRVUZQTEVOQlFVTXNUVUZCVnl4RlFVRkZMRWRCUVc5Q0xFVkJRVVVzUlVGQlJUdFJRVU42UXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZIYWtNc1NVRkJTU3hSUVVGUkxFbEJRVWtzUTBGQlF5eERRVUZETEZGQlFWRXNXVUZCV1N4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTA3V1VGQlJTeE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRPMUZCUXpsRkxFbEJRVWtzVVVGQlVTeEpRVUZKTEVOQlFVTXNRMEZCUXl4UlFVRlJMRmxCUVZrc1VVRkJVU3hEUVVGRE8xbEJRVVVzVVVGQlVTeEhRVUZITEZOQlFWTXNRMEZCUXp0UlFVTjBSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXl4TlFVRk5MRmxCUVZrc1RVRkJUU3hEUVVGRE8xbEJRVVVzVFVGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVZDRSQ3hOUVVGTkxHbENRVUZwUWl4SFFVRkhMRFJDUVVGblFpeERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc2JVSkJRVzFDTEVWQlFVVXNSVUZCUlN4UlFVRlJMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU42Unl4eFEwRkJlVUlzUTBGQlF5eE5RVUZOTEVWQlFVVXNVMEZCVXl4RlFVRkZMRlZCUVZVc1JVRkJSU3hwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMGxCUTJoR0xFTkJRVU1zUTBGQlF6dEJRVU5PTEVOQlFVTTdRVUZpUkN3MFFrRmhRenRCUVhGQ1JDeFRRVUZuUWl4VFFVRlRMRU5CUVVNc1VVRkJNa0lzUlVGQlJTeE5RVUY1UWp0SlFVTTFSU3hQUVVGUExFTkJRVU1zVFVGQlZ5eEZRVUZGTEVkQlFXOUNMRVZCUVVVc1JVRkJSVHRSUVVONlF5eE5RVUZOTEZOQlFWTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGSGFrTXNTVUZCU1N4UlFVRlJMRWxCUVVrc1EwRkJReXhEUVVGRExGRkJRVkVzV1VGQldTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwN1dVRkJSU3hOUVVGTkxFZEJRVWNzVVVGQlVTeERRVUZETzFGQlF6bEZMRWxCUVVrc1VVRkJVU3hKUVVGSkxFTkJRVU1zUTBGQlF5eFJRVUZSTEZsQlFWa3NVVUZCVVN4RFFVRkRPMWxCUVVVc1VVRkJVU3hIUVVGSExGTkJRVk1zUTBGQlF6dFJRVU4wUlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF5eE5RVUZOTEZsQlFWa3NUVUZCVFN4RFFVRkRPMWxCUVVVc1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVWQ0UkN4SlFVRkpMRkZCUVZFc1dVRkJXU3hSUVVGUkxFbEJRVWtzVFVGQlRUdFpRVUZGTEc5Q1FVRkxMRU5CUVVNc1VVRkJVU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVNMVJTeEpRVUZKTEZGQlFWRXNXVUZCV1N4UlFVRlJPMWxCUVVVc2IwSkJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03WVVGREwwUXNTVUZCU1N4TlFVRk5PMWxCUVVVc2IwSkJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03TzFsQlEzWkRMRzlDUVVGTExFVkJRVVVzUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkhNVUlzVFVGQlRTeHBRa0ZCYVVJc1IwRkJSeXcwUWtGQlowSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1UwRkJVeXhGUVVGRkxHMUNRVUZ0UWl4RlFVRkZMRVZCUVVVc1VVRkJVU3hGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEZWtjc2NVTkJRWGxDTEVOQlFVTXNUVUZCVFN4RlFVRkZMRk5CUVZNc1JVRkJSU3hYUVVGWExFVkJRVVVzYVVKQlFXbENMRU5CUVVNc1EwRkJRenRKUVVOcVJpeERRVUZETEVOQlFVTTdRVUZEVGl4RFFVRkRPMEZCYmtKRUxEaENRVzFDUXp0QlFXTkVMRk5CUVdkQ0xHVkJRV1VzUTBGQlF5eEpRVUZyUWl4RlFVRkZMRTFCUVdkQ0xFVkJRVVVzVVVGQlowSXNRMEZCUXp0SlFVVnVSaXhQUVVGUExFTkJRVU1zU1VGQlV5eEZRVUZGTEVWQlFVVTdVVUZEYWtJc1RVRkJUU3hUUVVGVExFZEJRVWNzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNNVF5eEpRVUZKTERaQ1FVRnBRaXhEUVVGRExGTkJRVk1zUTBGQlF6dFpRVUZGTEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVkb1J5eEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1NVRkJTU3hMUVVGTExGRkJRVkVzUTBGQlF6dFpRVUZGTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRja1FzU1VGQlNTeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWxCUVVrc1MwRkJTeXhSUVVGUkxFTkJRVU03V1VGQlJTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTNSRUxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4UFFVRlBMRWxCUVVrc1MwRkJTeXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNTVUZCU1N4TFFVRkxMRkZCUVZFc1EwRkJReXhEUVVGRE8xbEJRVVVzU1VGQlNTeEhRVUZITEZOQlFWTXNRMEZCUXp0UlFVTjZSaXhKUVVGSkxFMUJRVTBzU1VGQlNTeERRVUZETEU5QlFVOHNUVUZCVFN4TFFVRkxMRkZCUVZFc1EwRkJRenRaUVVGRkxFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZETTBRc1NVRkJTU3hOUVVGTkxFbEJRVWtzUTBGQlF5eFBRVUZQTEUxQlFVMHNTMEZCU3l4UlFVRlJMRU5CUVVNN1dVRkJSU3hOUVVGTkxFZEJRVWNzVTBGQlV5eERRVUZETzFGQlJTOUVMRWxCUVVrc2MwSkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVVnNRaXhKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNTVUZCU1N4TFFVRkxMRkZCUVZFc1EwRkJReXhKUVVGSkxFMUJRVTBzU1VGQlNTeERRVUZETEU5QlFVOHNUVUZCVFN4TFFVRkxMRkZCUVZFc1EwRkJReXhGUVVGRk8yZENRVU01UlN4NVFrRkJWU3hEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRoUVVOc1F6dHBRa0ZCVFN4SlFVRkpMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeExRVUZMTEZGQlFWRXNRMEZCUXl4RlFVRkZPMmRDUVVNelF5eDVRa0ZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJGQlF6RkNPMmxDUVVGTkxFbEJRVWtzVFVGQlRTeEpRVUZKTEVOQlFVTXNUMEZCVHl4TlFVRk5MRXRCUVVzc1VVRkJVU3hEUVVGRExFVkJRVVU3WjBKQlF5OURMSGxDUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1lVRkROVUk3TzJkQ1FVRk5MSGxDUVVGVkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVY3hRaXhKUVVGSkxFMUJRVTBzU1VGQlNTeERRVUZETEU5QlFVOHNUVUZCVFN4TFFVRkxMRkZCUVZFc1EwRkJReXhGUVVGRk8yZENRVU40UXl4TlFVRk5MR3RDUVVGclFpeEhRVUZITEhOQ1FVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxHZENRVUZuUWl4RFFVRkRMRU5CUVVNN1owSkJReTlFTEUxQlFVMHNaMEpCUVdkQ0xFZEJRVWNzYzBKQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1kwRkJZeXhEUVVGRExFTkJRVU03WjBKQlF6TkVMSGxDUVVGakxFTkJRVU1zU1VGQlNTeEZRVUZGTEdkQ1FVRm5RaXhGUVVGRkxFMUJRVTBzUTBGQlF5eGpRVUZqTEVsQlFVa3NhMEpCUVd0Q0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTTdaMEpCUTJwSExIbENRVUZqTEVOQlFVTXNTVUZCU1N4RlFVRkZMR05CUVdNc1JVRkJSU3hOUVVGTkxFTkJRVU1zV1VGQldTeEpRVUZKTEdkQ1FVRm5RaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETzJGQlF6bEdPMU5CUTBvN1VVRkRSQ3hKUVVGSkxFMUJRVTBzU1VGQlNTeERRVUZETEU5QlFVOHNUVUZCVFN4TFFVRkxMRkZCUVZFc1NVRkJTU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETzFsQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNN1VVRkZOMFVzVFVGQlRTeGxRVUZsTEVkQlFVY3NkME5CUVhOQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUlRWRUxFbEJRVWtzZFVKQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOdVFpeGpRVUZqTEVOQlFVTXNUVUZCVFN4RFFVRkRMREpDUVVGdlFpeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hsUVVGbExFVkJRVVU3WjBKQlEzQkZMRTlCUVU4c1JVRkJSU3hsUVVGbExFTkJRVU1zVDBGQlR6dGhRVU51UXl4RFFVRkRMRU5CUVVNN1UwRkRUanRSUVVORUxFOUJRVThzWlVGQlpTeERRVUZETzBsQlF6TkNMRU5CUVVNc1EwRkJRenRCUVVOT0xFTkJRVU03UVVFeFEwUXNNRU5CTUVORE8wRkJSVlVzVVVGQlFTeExRVUZMTEVkQlFVY3NiMEpCUVVzc1EwRkJRenRCUVVOa0xGRkJRVUVzUjBGQlJ5eEhRVUZITEd0Q1FVRkhMRU5CUVVNN1FVRkRWaXhSUVVGQkxFbEJRVWtzUjBGQlJ5eHRRa0ZCU1N4RFFVRkRPMEZCUTFvc1VVRkJRU3hSUVVGUkxFZEJRVWNzZFVKQlFWRXNRMEZCUXp0QlFVTndRaXhSUVVGQkxFbEJRVWtzUjBGQlJ5eHRRa0ZCU1N4RFFVRkRPMEZCUTFvc1VVRkJRU3hSUVVGUkxFZEJRVWNzZFVKQlFWRXNRMEZCUXp0QlFVTndRaXhSUVVGQkxGbEJRVmtzUjBGQlJ5d3lRa0ZCV1N4RFFVRkRPMEZCUXpWQ0xGRkJRVUVzVFVGQlRTeEhRVUZITEhGQ1FVRk5MRU5CUVVNN1FVRkRhRUlzVVVGQlFTeFRRVUZUTEVkQlFVY3NkMEpCUVZNc1EwRkJReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgbnVuanVja3MgPSB0c2xpYl8xLl9faW1wb3J0U3RhcihyZXF1aXJlKFwibnVuanVja3NcIikpO1xuZnVuY3Rpb24gaXNOb2RlSlMoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc05vZGVKUyA9IGlzTm9kZUpTO1xuZnVuY3Rpb24gaXNCcm93c2VyKCkge1xuICAgIHJldHVybiAhaXNOb2RlSlMoKTtcbn1cbmV4cG9ydHMuaXNCcm93c2VyID0gaXNCcm93c2VyO1xuZXhwb3J0cy50ZW1wbGF0ZUVudmlyb25tZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBub0NhY2hlID0gZ2xvYmFsLnByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGNvbnN0IGVudiA9IG5ldyBudW5qdWNrcy5FbnZpcm9ubWVudCh7XG4gICAgICAgIGdldFNvdXJjZTogKHBhdGgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHNyYzogcmVxdWlyZShwYXRoKSwgcGF0aCwgbm9DYWNoZSB9O1xuICAgICAgICB9XG4gICAgfSwgeyBub0NhY2hlIH0pO1xuICAgIGVudi5hZGRGaWx0ZXIoJ2pzb24nLCAodmFsdWUsIHNwYWNlcykgPT4ge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBudW5qdWNrcy5ydW50aW1lLlNhZmVTdHJpbmcpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IG51bmp1Y2tzLnJ1bnRpbWUuU2FmZVN0cmluZyhKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgc3BhY2VzKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVudjtcbn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laVzUyYVhKdmJtMWxiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDNWMGFXeHpMMlZ1ZG1seWIyNXRaVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZCTERKRVFVRnhRenRCUVZGeVF5eFRRVUZuUWl4UlFVRlJPMGxCUTNCQ0xFbEJRVWtzVDBGQlR5eE5RVUZOTEV0QlFVc3NWMEZCVnl4SlFVRkpMRTlCUVU4c1QwRkJUeXhMUVVGTExGRkJRVkVzUlVGQlJUdFJRVU01UkN4UFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObU8wbEJRMFFzVDBGQlR5eExRVUZMTEVOQlFVTTdRVUZEYWtJc1EwRkJRenRCUVV4RUxEUkNRVXRETzBGQlVVUXNVMEZCWjBJc1UwRkJVenRKUVVOeVFpeFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1FVRkRka0lzUTBGQlF6dEJRVVpFTERoQ1FVVkRPMEZCUzFrc1VVRkJRU3h0UWtGQmJVSXNSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSVHRKUVVOeVF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEV0QlFVc3NZVUZCWVN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTTNSU3hOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRha01zVTBGQlV5eEZRVUZGTEVOQlFVTXNTVUZCV1N4RlFVRkZMRVZCUVVVN1dVRkRlRUlzVDBGQlR5eEZRVUZGTEVkQlFVY3NSVUZCUlN4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUTJwRUxFTkJRVU03UzBGRFNpeEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVWb1FpeEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVWQlFVVXNSVUZCUlR0UlFVTndReXhKUVVGSkxFdEJRVXNzV1VGQldTeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1JVRkJSVHRaUVVNNVF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xTkJRelZDTzFGQlEwUXNUMEZCVHl4SlFVRkpMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJoR0xFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEwZ3NUMEZCVHl4SFFVRkhMRU5CUVVNN1FVRkRaaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQmluZGluZ18xID0gcmVxdWlyZShcIn5iZG8vbGliL0JpbmRpbmdcIik7XG5jb25zdCBBdHRyaWJ1dGVfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9BdHRyaWJ1dGVcIik7XG5jb25zdCBQcm9wZXJ0eV8xID0gcmVxdWlyZShcIn5iZG8vbGliL1Byb3BlcnR5XCIpO1xuY29uc3QgV2F0Y2hlZF8xID0gcmVxdWlyZShcIn5iZG8vbGliL1dhdGNoZWRcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuZnVuY3Rpb24gYmVmb3JlRGVzY3JpcHRvcih0YXJnZXQsIGtleSwgbURhdGFOYW1lLCBwYXJhbXMpIHtcbiAgICBpZiAoIVJlZmxlY3QuaGFzTWV0YWRhdGEobURhdGFOYW1lLCB0YXJnZXQpKVxuICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRhcmdldCwgbURhdGFOYW1lLCBuZXcgTWFwKCkpO1xuICAgIGNvbnN0IG1hcCA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGFyZ2V0LCBtRGF0YU5hbWUpO1xuICAgIGNvbnN0IG9sZERlY29yYXRvclNldHRpbmdzID0gbWFwLmdldChrZXkpIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0gdXRpbF8xLm1lcmdlKG9sZERlY29yYXRvclNldHRpbmdzLCBwYXJhbXMpO1xuICAgIG1hcC5zZXQoa2V5LCBzZXR0aW5ncyk7XG4gICAgcmV0dXJuIHNldHRpbmdzO1xufVxuZXhwb3J0cy5iZWZvcmVEZXNjcmlwdG9yID0gYmVmb3JlRGVzY3JpcHRvcjtcbmZ1bmN0aW9uIGdldHRlcihpbnN0YW5jZSwga2V5LCBucyA9IFwiXCIpIHtcbiAgICBsZXQgc3RyaW5nS2V5ID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgaWYgKG5zKVxuICAgICAgICBzdHJpbmdLZXkgPSBgJHtuc306JHtrZXl9YDtcbiAgICBpZiAoIW1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwibm9ybWFsRnVuY3Rpb25hbGl0eVwiKSkge1xuICAgICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGluc3RhbmNlLCBcImRlZmF1bHRTZXR0aW5nc1wiKSB8fCB7fTtcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGRlZmF1bHRTZXR0aW5ncywgc3RyaW5nS2V5KTtcbiAgICB9XG4gICAgY29uc3QgbURhdGEgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEoaW5zdGFuY2UsIHN0cmluZ0tleSk7XG4gICAgaWYgKG1EYXRhKVxuICAgICAgICByZXR1cm4gbURhdGEudmFsdWVPZigpO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5leHBvcnRzLmdldHRlciA9IGdldHRlcjtcbmZ1bmN0aW9uIHNldHRlcihpbnN0YW5jZSwga2V5LCBuZXdWYWwsIG5zID0gXCJcIikge1xuICAgIGxldCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICBpZiAobnMpXG4gICAgICAgIHN0cmluZ0tleSA9IGAke25zfToke2tleX1gO1xuICAgIGlmICghbnMgJiYgaW5zdGFuY2Vbc3RyaW5nS2V5XSA9PT0gbmV3VmFsKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKCFtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGluc3RhbmNlLCBcIm5vcm1hbEZ1bmN0aW9uYWxpdHlcIikpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShpbnN0YW5jZSwgXCJkZWZhdWx0U2V0dGluZ3NcIikgfHwge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGVmYXVsdFNldHRpbmdzLCB7IFtzdHJpbmdLZXldOiBuZXdWYWwgfSk7XG4gICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEoaW5zdGFuY2UsIFwiZGVmYXVsdFNldHRpbmdzXCIsIGRlZmF1bHRTZXR0aW5ncyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbURhdGEgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEoaW5zdGFuY2UsIHN0cmluZ0tleSk7XG4gICAgaWYgKG5ld1ZhbCBpbnN0YW5jZW9mIEJpbmRpbmdfMS5CaW5kaW5nKSB7XG4gICAgICAgIG5ld1ZhbC5pbnN0YWxsKGluc3RhbmNlLCBrZXkpO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIG1EYXRhLnNldFZhbHVlKG5ld1ZhbCk7XG59XG5leHBvcnRzLnNldHRlciA9IHNldHRlcjtcbmZ1bmN0aW9uIGNyZWF0ZURlY29yYXRvckRlc2NyaXB0b3IodGFyZ2V0LCBrZXksIHR5cGUsIHBhcmFtcykge1xuICAgIGNvbnN0IHByb3BEZXNjID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgIGNvbnN0IHN0cmluZ0tleSA9IGtleS50b1N0cmluZygpO1xuICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBrZXkpO1xuICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBkZWNvcmF0b3JHZXR0ZXIoKSB7XG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBnZXR0ZXIodGhhdCwgc3RyaW5nS2V5KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBkZWNvcmF0b3JTZXR0ZXIobmV3VmFsKSB7XG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMsIGtleSk7XG4gICAgICAgICAgICBsZXQgZmllbGQ7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJBdHRyaWJ1dGVcIikge1xuICAgICAgICAgICAgICAgIGZpZWxkID0gbmV3IEF0dHJpYnV0ZV8xLkF0dHJpYnV0ZSh0aGF0LCBzdHJpbmdLZXksIHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIlByb3BlcnR5XCIpIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA9IG5ldyBQcm9wZXJ0eV8xLlByb3BlcnR5KHRoYXQsIHN0cmluZ0tleSwgcGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBmaWVsZCA9IG5ldyBXYXRjaGVkXzEuV2F0Y2hlZCh0aGF0LCBzdHJpbmdLZXksIHBhcmFtcyk7XG4gICAgICAgICAgICBpZiAobURhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoKG1EYXRhIGluc3RhbmNlb2YgQXR0cmlidXRlXzEuQXR0cmlidXRlIHx8IG1EYXRhIGluc3RhbmNlb2YgUHJvcGVydHlfMS5Qcm9wZXJ0eSkgJiYgZmllbGQgaW5zdGFuY2VvZiBXYXRjaGVkXzEuV2F0Y2hlZCkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZC5zZXRTdWJPYmplY3QobURhdGEpO1xuICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEodGhpcywgc3RyaW5nS2V5LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChmaWVsZCBpbnN0YW5jZW9mIFByb3BlcnR5XzEuUHJvcGVydHkgfHwgZmllbGQgaW5zdGFuY2VvZiBBdHRyaWJ1dGVfMS5BdHRyaWJ1dGUpICYmIG1EYXRhIGluc3RhbmNlb2YgV2F0Y2hlZF8xLldhdGNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtRGF0YS5zdWJPYmplY3QpXG4gICAgICAgICAgICAgICAgICAgICAgICBtRGF0YS5zZXRTdWJPYmplY3QoZmllbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEodGhpcywgc3RyaW5nS2V5LCBmaWVsZCk7XG4gICAgICAgICAgICBpZiAoKCh0eXBlID09PSBcIkF0dHJpYnV0ZVwiIHx8IHR5cGUgPT09IFwiUHJvcGVydHlcIikgJiYgIShtRGF0YSBpbnN0YW5jZW9mIFdhdGNoZWRfMS5XYXRjaGVkKSkgfHwgdHlwZSA9PT0gXCJXYXRjaGVkXCIpIHtcbiAgICAgICAgICAgICAgICBzZXR0ZXIodGhhdCwgc3RyaW5nS2V5LCBuZXdWYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BEZXNjICYmIHByb3BEZXNjLnNldCAmJiBwcm9wRGVzYy5zZXQubmFtZSA9PT0gXCJkZWNvcmF0b3JTZXR0ZXJcIilcbiAgICAgICAgICAgICAgICBwcm9wRGVzYy5zZXQuY2FsbCh0aGlzLCBuZXdWYWwpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbn1cbmV4cG9ydHMuY3JlYXRlRGVjb3JhdG9yRGVzY3JpcHRvciA9IGNyZWF0ZURlY29yYXRvckRlc2NyaXB0b3I7XG5mdW5jdGlvbiBpc0Jhc2VDb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiAmJiB2YWx1ZS5uYW1lID09PSBcIkJhc2VDb25zdHJ1Y3RvclwiKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgdmFsdWUuY29uc3RydWN0b3IubmFtZSA9PT0gXCJCYXNlQ29uc3RydWN0b3JcIilcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc0Jhc2VDb25zdHJ1Y3RvciA9IGlzQmFzZUNvbnN0cnVjdG9yO1xuZnVuY3Rpb24gaXNCRE9Nb2RlbCh2YWx1ZSkge1xuICAgIGlmIChcImlzQkRPTW9kZWxcIiBpbiB2YWx1ZSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc0JET01vZGVsID0gaXNCRE9Nb2RlbDtcbmZ1bmN0aW9uIGlzQ2xpZW50TW9kZWwodmFsdWUpIHtcbiAgICBpZiAoaXNCRE9Nb2RlbCh2YWx1ZSkgJiYgXCJpc0NsaWVudE1vZGVsXCIgaW4gdmFsdWUpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaXNDbGllbnRNb2RlbCA9IGlzQ2xpZW50TW9kZWw7XG5mdW5jdGlvbiBpc1NlcnZlck1vZGVsKHZhbHVlKSB7XG4gICAgaWYgKGlzQkRPTW9kZWwodmFsdWUpICYmIFwiaXNTZXJ2ZXJNb2RlbFwiIGluIHZhbHVlKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmlzU2VydmVyTW9kZWwgPSBpc1NlcnZlck1vZGVsO1xuZnVuY3Rpb24gaXNDb21wb25lbnQodmFsdWUpIHtcbiAgICBpZiAoZW52aXJvbm1lbnRfMS5pc0Jyb3dzZXIoKSAmJiBcImlzQmFzZUNvbXBvbmVudFwiIGluIHZhbHVlKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmlzQ29tcG9uZW50ID0gaXNDb21wb25lbnQ7XG5mdW5jdGlvbiBpc1JlZmVyZW5jZVN0cmluZyh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCByZWZSZWdFeCA9IC9fcmVmZXJlbmNlXFw6W0EtWnwwLTl8X3wkXSpcXDpbQS1afDAtOXxcXC18X10qL2dpO1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlLm1hdGNoKHJlZlJlZ0V4KSkudmFsdWVPZigpO1xufVxuZXhwb3J0cy5pc1JlZmVyZW5jZVN0cmluZyA9IGlzUmVmZXJlbmNlU3RyaW5nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWm5KaGJXVjNiM0pyTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5MWRHbHNjeTltY21GdFpYZHZjbXN1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3c0UTBGQk1rTTdRVUZETTBNc2EwUkJRV2xGTzBGQlEycEZMR2RFUVVFNFJEdEJRVU01UkN3NFEwRkJNa1E3UVVGRk0wUXNNRU5CUVhkRE8wRkJRM2hETEhkRVFVRnRSRHRCUVVOdVJDeHJSRUZCSzBjN1FVRTRReTlITEZOQlFXZENMR2RDUVVGblFpeERRVXM1UWl4TlFVRlRMRVZCUVVVc1IwRkJUU3hGUVVGRkxGTkJRVmtzUlVGQlJTeE5RVUZUTzBsQlJYaERMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEZOQlFWTXNSVUZCUlN4TlFVRk5MRU5CUVVNN1VVRkJSU3g1UWtGQll5eERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkdMRTFCUVUwc1IwRkJSeXhIUVVGSExITkNRVUZYTEVOQlFVTXNUVUZCVFN4RlFVRkZMRk5CUVZNc1EwRkJiVU1zUTBGQlF6dEpRVU0zUlN4TlFVRk5MRzlDUVVGdlFpeEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzBsQlEyaEVMRTFCUVUwc1VVRkJVU3hIUVVGSExGbEJRVXNzUTBGQlF5eHZRa0ZCYjBJc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU55UkN4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0SlFVTjJRaXhQUVVGUExGRkJRVkVzUTBGQlF6dEJRVU53UWl4RFFVRkRPMEZCWWtRc05FTkJZVU03UVVGaFJDeFRRVUZuUWl4TlFVRk5MRU5CUVhGRUxGRkJRVmNzUlVGQlJTeEhRVUZOTEVWQlFVVXNTMEZCWVN4RlFVRkZPMGxCUXpOSExFbEJRVWtzVTBGQlV5eEhRVUZITEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVNdlFpeEpRVUZKTEVWQlFVVTdVVUZCUlN4VFFVRlRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFbEJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZEYmtNc1NVRkJTU3hEUVVGRExITkNRVUZYTEVOQlFVTXNVVUZCVVN4RlFVRkZMSEZDUVVGeFFpeERRVUZETEVWQlFVVTdVVUZETDBNc1RVRkJUU3hsUVVGbExFZEJRVWNzYzBKQlFWY3NRMEZCUXl4UlFVRlJMRVZCUVVVc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRka1VzVDBGQlR5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMR1ZCUVdVc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlF6dExRVU5zUkR0SlFVTkVMRTFCUVUwc1MwRkJTeXhIUVVGSExEaENRVUZ0UWl4RFFVRkRMRkZCUVZFc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlF6dEpRVU4yUkN4SlFVRkpMRXRCUVVzN1VVRkJSU3hQUVVGUExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0SlFVTnNReXhQUVVGUExGTkJRVk1zUTBGQlF6dEJRVU55UWl4RFFVRkRPMEZCVmtRc2QwSkJWVU03UVVGbFJDeFRRVUZuUWl4TlFVRk5MRU5CUldkQ0xGRkJRVmNzUlVGQlJTeEhRVUZOTEVWQlFVVXNUVUZCY1VJc1JVRkJSU3hMUVVGaExFVkJRVVU3U1VGSE4wWXNTVUZCU1N4VFFVRlRMRWRCUVVjc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBsQlF5OUNMRWxCUVVrc1JVRkJSVHRSUVVGRkxGTkJRVk1zUjBGQlJ5eEhRVUZITEVWQlFVVXNTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVkdVF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4SlFVRkpMRkZCUVZFc1EwRkJTU3hUUVVGVExFTkJRVU1zUzBGQlN5eE5RVUZOTzFGQlFVVXNUMEZCVHp0SlFVZHlSQ3hKUVVGSkxFTkJRVU1zYzBKQlFWY3NRMEZCUXl4UlFVRlJMRVZCUVVVc2NVSkJRWEZDTEVOQlFVTXNSVUZCUlR0UlFVTXZReXhOUVVGTkxHVkJRV1VzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hwUWtGQmFVSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVOMlJTeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMR1ZCUVdVc1JVRkJSU3hGUVVGRkxFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVONFJDeDVRa0ZCWXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hwUWtGQmFVSXNSVUZCUlN4bFFVRmxMRU5CUVVNc1EwRkJRenRSUVVNM1JDeFBRVUZQTzB0QlExWTdTVUZIUkN4TlFVRk5MRXRCUVVzc1IwRkJSeXc0UWtGQmJVSXNRMEZCUXl4UlFVRlJMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03U1VGRmRrUXNTVUZCU1N4TlFVRk5MRmxCUVZrc2FVSkJRVThzUlVGQlJUdFJRVU16UWl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0TFFVTnFRenM3VVVGQlRTeExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRMnhETEVOQlFVTTdRVUY2UWtRc2QwSkJlVUpETzBGQlYwUXNVMEZCWjBJc2VVSkJRWGxDTEVOQlIxUXNUVUZCVXl4RlFVRkZMRWRCUVUwc1JVRkJSU3hKUVVGdFFpeEZRVUZGTEUxQlFWTTdTVUZGTjBVc1RVRkJUU3hSUVVGUkxFZEJRVWNzVDBGQlR5eERRVUZETEhkQ1FVRjNRaXhEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTXZSQ3hOUVVGTkxGTkJRVk1zUjBGQlJ5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkZha01zVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRGNFTXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEZRVUZGTzFGQlEyaERMRWRCUVVjc1JVRkJSU3hUUVVGVExHVkJRV1U3V1VGRGVrSXNUVUZCVFN4SlFVRkpMRWRCUVZFc1NVRkJTU3hEUVVGRE8xbEJRM1pDTEU5QlFVOHNUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlF6dFJRVU51UXl4RFFVRkRPMUZCUTBRc1IwRkJSeXhGUVVGRkxGTkJRVk1zWlVGQlpTeERRVUZETEUxQlFWYzdXVUZEY2tNc1RVRkJUU3hKUVVGSkxFZEJRVkVzU1VGQlNTeERRVUZETzFsQlEzWkNMRTFCUVUwc1MwRkJTeXhIUVVGSExEaENRVUZ0UWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dFpRVWMzUXl4SlFVRkpMRXRCUVVzc1EwRkJRenRaUVVOV0xFbEJRVWtzU1VGQlNTeExRVUZMTEZkQlFWY3NSVUZCUlR0blFrRkRkRUlzUzBGQlN5eEhRVUZITEVsQlFVa3NjVUpCUVZNc1EwRkJReXhKUVVGSkxFVkJRVVVzVTBGQlV5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMkZCUTJ4RU8ybENRVUZOTEVsQlFVa3NTVUZCU1N4TFFVRkxMRlZCUVZVc1JVRkJSVHRuUWtGRE5VSXNTMEZCU3l4SFFVRkhMRWxCUVVrc2JVSkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVXl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8yRkJRMnBFT3p0blFrRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeHBRa0ZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hUUVVGVExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdXVUZIY0VRc1NVRkJTU3hMUVVGTExFVkJRVVU3WjBKQlExQXNTVUZCU1N4RFFVRkRMRXRCUVVzc1dVRkJXU3h4UWtGQlV5eEpRVUZKTEV0QlFVc3NXVUZCV1N4dFFrRkJVU3hEUVVGRExFbEJRVWtzUzBGQlN5eFpRVUZaTEdsQ1FVRlBMRVZCUVVVN2IwSkJRM1pHTEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03YjBKQlF6RkNMR2xEUVVGelFpeERRVUZETEVsQlFVa3NSVUZCUlN4VFFVRlRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03YVVKQlEyeEVPM0ZDUVVGTkxFbEJRVWtzUTBGQlF5eExRVUZMTEZsQlFWa3NiVUpCUVZFc1NVRkJTU3hMUVVGTExGbEJRVmtzY1VKQlFWTXNRMEZCUXl4SlFVRkpMRXRCUVVzc1dVRkJXU3hwUWtGQlR5eEZRVUZGTzI5Q1FVTTVSaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTTdkMEpCUVVVc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0cFFrRkRia1E3WVVGRFNqczdaMEpCUVUwc2FVTkJRWE5DTEVOQlFVTXNTVUZCU1N4RlFVRkZMRk5CUVZNc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU4wUkN4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFdEJRVXNzVjBGQlZ5eEpRVUZKTEVsQlFVa3NTMEZCU3l4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUzBGQlN5eFpRVUZaTEdsQ1FVRlBMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUzBGQlN5eFRRVUZUTEVWQlFVVTdaMEpCUTNSSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVXl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8yRkJRMjVETzFsQlEwUXNTVUZCU1N4UlFVRlJMRWxCUVVrc1VVRkJVU3hEUVVGRExFZEJRVWNzU1VGQlNTeFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1MwRkJTeXhwUWtGQmFVSTdaMEpCUVVVc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRemRITEVOQlFVTTdVVUZEUkN4VlFVRlZMRVZCUVVVc1NVRkJTVHRSUVVOb1FpeFpRVUZaTEVWQlFVVXNTVUZCU1R0TFFVTnlRaXhEUVVGRExFTkJRVU03UVVGRFVDeERRVUZETzBGQk0wTkVMRGhFUVRKRFF6dEJRVk5FTEZOQlFXZENMR2xDUVVGcFFpeERRVUZETEV0QlFXRTdTVUZETTBNc1NVRkJTU3hQUVVGUExFdEJRVXNzUzBGQlN5eFZRVUZWTEVsQlFVa3NTMEZCU3l4RFFVRkRMRWxCUVVrc1MwRkJTeXhwUWtGQmFVSTdVVUZCUlN4UFFVRlBMRWxCUVVrc1EwRkJRenRKUVVOcVJpeEpRVUZKTEV0QlFVc3NXVUZCV1N4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEV0QlFVc3NhVUpCUVdsQ08xRkJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEZWtZc1QwRkJUeXhMUVVGTExFTkJRVU03UVVGRGFrSXNRMEZCUXp0QlFVcEVMRGhEUVVsRE8wRkJWVVFzVTBGQlowSXNWVUZCVlN4RFFVRkRMRXRCUVdFN1NVRkRjRU1zU1VGQlNTeFpRVUZaTEVsQlFVa3NTMEZCU3p0UlFVRkZMRTlCUVU4c1NVRkJTU3hEUVVGRE8wbEJRM1pETEU5QlFVOHNTMEZCU3l4RFFVRkRPMEZCUTJwQ0xFTkJRVU03UVVGSVJDeG5RMEZIUXp0QlFWVkVMRk5CUVdkQ0xHRkJRV0VzUTBGQlF5eExRVUZoTzBsQlEzWkRMRWxCUVVrc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEdWQlFXVXNTVUZCU1N4TFFVRkxPMUZCUVVVc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGREwwUXNUMEZCVHl4TFFVRkxMRU5CUVVNN1FVRkRha0lzUTBGQlF6dEJRVWhFTEhORFFVZERPMEZCVlVRc1UwRkJaMElzWVVGQllTeERRVUZETEV0QlFXRTdTVUZEZGtNc1NVRkJTU3hWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NaVUZCWlN4SlFVRkpMRXRCUVVzN1VVRkJSU3hQUVVGUExFbEJRVWtzUTBGQlF6dEpRVU12UkN4UFFVRlBMRXRCUVVzc1EwRkJRenRCUVVOcVFpeERRVUZETzBGQlNFUXNjME5CUjBNN1FVRlhSQ3hUUVVGblFpeFhRVUZYTEVOQlFVTXNTMEZCWVR0SlFVTnlReXhKUVVGSkxIVkNRVUZUTEVWQlFVVXNTVUZCU1N4cFFrRkJhVUlzU1VGQlNTeExRVUZMTzFGQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkRNMFFzVDBGQlR5eExRVUZMTEVOQlFVTTdRVUZEYWtJc1EwRkJRenRCUVVoRUxHdERRVWRETzBGQlUwUXNVMEZCWjBJc2FVSkJRV2xDTEVOQlFVTXNTMEZCVlR0SlFVTjRReXhKUVVGSkxFOUJRVThzUzBGQlN5eExRVUZMTEZGQlFWRTdVVUZCUlN4UFFVRlBMRXRCUVVzc1EwRkJRenRKUVVNMVF5eE5RVUZOTEZGQlFWRXNSMEZCUnl3clEwRkJLME1zUTBGQlF6dEpRVU5xUlN4UFFVRlBMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03UVVGRGNFUXNRMEZCUXp0QlFVcEVMRGhEUVVsREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGRlZmluZU1ldGFkYXRhKHRhcmdldCwga2V5LCB2YWwpIHtcbiAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKGtleSwgdmFsLCB0YXJnZXQpO1xufVxuZXhwb3J0cy5kZWZpbmVNZXRhZGF0YSA9IGRlZmluZU1ldGFkYXRhO1xuZnVuY3Rpb24gZ2V0TWV0YWRhdGEodGFyZ2V0LCBrZXkpIHtcbiAgICByZXR1cm4gUmVmbGVjdC5nZXRNZXRhZGF0YShrZXksIHRhcmdldCk7XG59XG5leHBvcnRzLmdldE1ldGFkYXRhID0gZ2V0TWV0YWRhdGE7XG5mdW5jdGlvbiBkZWZpbmVXaWxkY2FyZE1ldGFkYXRhKHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoa2V5LCB2YWx1ZSwgdGFyZ2V0KTtcbn1cbmV4cG9ydHMuZGVmaW5lV2lsZGNhcmRNZXRhZGF0YSA9IGRlZmluZVdpbGRjYXJkTWV0YWRhdGE7XG5mdW5jdGlvbiBnZXRXaWxkY2FyZE1ldGFkYXRhKHRhcmdldCwga2V5KSB7XG4gICAgcmV0dXJuIFJlZmxlY3QuZ2V0TWV0YWRhdGEoa2V5LCB0YXJnZXQpO1xufVxuZXhwb3J0cy5nZXRXaWxkY2FyZE1ldGFkYXRhID0gZ2V0V2lsZGNhcmRNZXRhZGF0YTtcbmZ1bmN0aW9uIGdldERlc2lnblR5cGUodGFyZ2V0LCBrZXkpIHtcbiAgICByZXR1cm4gUmVmbGVjdC5nZXRNZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIHRhcmdldCwga2V5KTtcbn1cbmV4cG9ydHMuZ2V0RGVzaWduVHlwZSA9IGdldERlc2lnblR5cGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV1YwWVdSaGRHRXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMM1YwYVd4ekwyMWxkR0ZrWVhSaExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCT0VsQkxGTkJRV2RDTEdOQlFXTXNRMEZCSzBNc1RVRkJVeXhGUVVGRkxFZEJRVTBzUlVGQlJTeEhRVUZyUWp0SlFVTTVSeXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03UVVGRE4wTXNRMEZCUXp0QlFVWkVMSGREUVVWRE8wRkJWMFFzVTBGQlowSXNWMEZCVnl4RFFVRXJReXhOUVVGVExFVkJRVVVzUjBGQlRUdEpRVU4yUml4UFFVRlBMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zUjBGQlJ5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMEZCUXpWRExFTkJRVU03UVVGR1JDeHJRMEZGUXp0QlFWVkVMRk5CUVdkQ0xITkNRVUZ6UWl4RFFVRkRMRTFCUVdNc1JVRkJSU3hIUVVGakxFVkJRVVVzUzBGQlZUdEpRVU0zUlN4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUlVGQlJTeExRVUZMTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkRMME1zUTBGQlF6dEJRVVpFTEhkRVFVVkRPMEZCVlVRc1UwRkJaMElzYlVKQlFXMUNMRU5CUVVNc1RVRkJZeXhGUVVGRkxFZEJRV003U1VGRE9VUXNUMEZCVHl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFZEJRVWNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0QlFVTTFReXhEUVVGRE8wRkJSa1FzYTBSQlJVTTdRVUZWUkN4VFFVRm5RaXhoUVVGaExFTkJRVU1zVFVGQll5eEZRVUZGTEVkQlFWYzdTVUZEY2tRc1QwRkJUeXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEdGQlFXRXNSVUZCUlN4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRE0wUXNRMEZCUXp0QlFVWkVMSE5EUVVWREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCBlbnZpcm9ubWVudF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZW52aXJvbm1lbnRcIik7XG5jb25zdCBvbl9jaGFuZ2VfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJvbi1jaGFuZ2VcIikpO1xudmFyIGxvZGFzaF8xID0gcmVxdWlyZShcImxvZGFzaFwiKTtcbmV4cG9ydHMubWVyZ2UgPSBsb2Rhc2hfMS5tZXJnZTtcbmV4cG9ydHMub21pdCA9IGxvZGFzaF8xLm9taXQ7XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBsb2Rhc2hfMS5pc0Z1bmN0aW9uO1xuZXhwb3J0cy5pc09iamVjdCA9IGxvZGFzaF8xLmlzT2JqZWN0O1xuZXhwb3J0cy5waWNrQnkgPSBsb2Rhc2hfMS5waWNrQnk7XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gbG9kYXNoXzEuaXNVbmRlZmluZWQ7XG5leHBvcnRzLmlzRXF1YWwgPSBsb2Rhc2hfMS5pc0VxdWFsO1xuZXhwb3J0cy5pc1N0cmluZyA9IGxvZGFzaF8xLmlzU3RyaW5nO1xuZXhwb3J0cy5pc051bWJlciA9IGxvZGFzaF8xLmlzTnVtYmVyO1xuZXhwb3J0cy5pc0FycmF5ID0gbG9kYXNoXzEuaXNBcnJheTtcbmV4cG9ydHMuZGlmZmVyZW5jZSA9IGxvZGFzaF8xLmRpZmZlcmVuY2U7XG5leHBvcnRzLmRlYm91bmNlID0gbG9kYXNoXzEuZGVib3VuY2U7XG5mdW5jdGlvbiB1Y0ZpcnN0KHN0cikge1xuICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5leHBvcnRzLnVjRmlyc3QgPSB1Y0ZpcnN0O1xuZnVuY3Rpb24gY2FtZWxDYXNlMmtlYmFiQ2FzZShzdHIpIHtcbiAgICBzdHIgPSBzdHIuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW2EtejAtOV18KD89W0EtWl0pKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbn1cbmV4cG9ydHMuY2FtZWxDYXNlMmtlYmFiQ2FzZSA9IGNhbWVsQ2FzZTJrZWJhYkNhc2U7XG5mdW5jdGlvbiBwYXNjYWxDYXNlMmtlYmFiQ2FzZShzdHIpIHtcbiAgICBzdHIgPSB1Y0ZpcnN0KHN0cik7XG4gICAgcmV0dXJuIGNhbWVsQ2FzZTJrZWJhYkNhc2Uoc3RyKTtcbn1cbmV4cG9ydHMucGFzY2FsQ2FzZTJrZWJhYkNhc2UgPSBwYXNjYWxDYXNlMmtlYmFiQ2FzZTtcbmZ1bmN0aW9uIHJlbW92ZUVsZW1lbnRGcm9tQXJyYXkoYXJyYXksIGVsZW1lbnQpIHtcbiAgICBjb25zdCBpbmRleCA9IGFycmF5LmluZGV4T2YoZWxlbWVudCk7XG4gICAgaWYgKGluZGV4ID49IDApXG4gICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG59XG5leHBvcnRzLnJlbW92ZUVsZW1lbnRGcm9tQXJyYXkgPSByZW1vdmVFbGVtZW50RnJvbUFycmF5O1xuZnVuY3Rpb24gZ2V0UHJvdG90eXBlTmFtZXNSZWN1cnNpdmUob2JqZWN0LCBwcm90b3R5cGVzID0gW10pIHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAocHJvdG90eXBlKSB7XG4gICAgICAgIHByb3RvdHlwZXMucHVzaChwcm90b3R5cGUuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICAgIGdldFByb3RvdHlwZU5hbWVzUmVjdXJzaXZlKHByb3RvdHlwZSwgcHJvdG90eXBlcyk7XG4gICAgfVxuICAgIHJldHVybiBwcm90b3R5cGVzO1xufVxuZXhwb3J0cy5nZXRQcm90b3R5cGVOYW1lc1JlY3Vyc2l2ZSA9IGdldFByb3RvdHlwZU5hbWVzUmVjdXJzaXZlO1xuZnVuY3Rpb24gaW5jbHVkZXNNZW1iZXJPZkxpc3Qoc2VhcmNoLCBsaXN0LCBleHRlbnNpb24gPSAnJykge1xuICAgIGZvciAoY29uc3QgbWVtYmVyIG9mIGxpc3QpIHtcbiAgICAgICAgaWYgKHNlYXJjaC5pbmNsdWRlcyhgJHttZW1iZXJ9JHtleHRlbnNpb259YCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaW5jbHVkZXNNZW1iZXJPZkxpc3QgPSBpbmNsdWRlc01lbWJlck9mTGlzdDtcbmZ1bmN0aW9uIGNvbnN0cnVjdFR5cGVPZkhUTUxBdHRyaWJ1dGUob2JqZWN0LCBrZXkpIHtcbiAgICBpZiAoIWVudmlyb25tZW50XzEuaXNCcm93c2VyKCkpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCB0eXBlID0gbWV0YWRhdGFfMS5nZXREZXNpZ25UeXBlKG9iamVjdCwga2V5KTtcbiAgICBjb25zdCBhdHRyVmFsdWUgPSBvYmplY3QuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgbGV0IHZhbHVlVG9TZXQgPSBhdHRyVmFsdWU7XG4gICAgaWYgKGF0dHJWYWx1ZSAmJiB0eXBlICYmIHR5cGUubmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChbXCJOdW1iZXJcIiwgXCJCb29sZWFuXCIsIFwiT2JqZWN0XCIsIFwiQXJyYXlcIl0uaW5jbHVkZXModHlwZS5uYW1lKSkge1xuICAgICAgICAgICAgdmFsdWVUb1NldCA9IEpTT04ucGFyc2UoYXR0clZhbHVlLnJlcGxhY2UoLycvZywgJ1wiJykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlLm5hbWUgPT09IFwiQmFzZUNvbnN0cnVjdG9yXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IEpTT04ucGFyc2UoYXR0clZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IG9iai5jbGFzc05hbWU7XG4gICAgICAgICAgICBpZiAoIWNsYXNzTmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDbGFzc05hbWUgaXMgbWlzc2luZyBpbiBjb21wb25lbnQgYXR0cmlidXRlIHZhbHVlXCIpO1xuICAgICAgICAgICAgZGVsZXRlIG9iai5jbGFzc05hbWU7XG4gICAgICAgICAgICB2YWx1ZVRvU2V0ID0gbmV3ICh0eXBlLm5hbWUpKG9iaik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbHVlVG9TZXQgJiYgdHlwZSAmJiB2YWx1ZVRvU2V0LmNvbnN0cnVjdG9yLm5hbWUgIT09IHR5cGUubmFtZSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXR0cmlidXRlIHR5cGUgZXF1YWxzIG5vdCBkZWZpbmVkIHR5cGVcIik7XG4gICAgcmV0dXJuIHZhbHVlVG9TZXQ7XG59XG5leHBvcnRzLmNvbnN0cnVjdFR5cGVPZkhUTUxBdHRyaWJ1dGUgPSBjb25zdHJ1Y3RUeXBlT2ZIVE1MQXR0cmlidXRlO1xuZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlICE9PSBPYmplY3QodmFsdWUpKTtcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcbmZ1bmN0aW9uIGlzUHJveHkodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChvbl9jaGFuZ2VfMS5kZWZhdWx0LnRhcmdldCh2YWx1ZSkgPT09IHZhbHVlKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnRzLmlzUHJveHkgPSBpc1Byb3h5O1xuZnVuY3Rpb24gZ2V0UHJveHlUYXJnZXQodmFsdWUpIHtcbiAgICBpZiAoaXNQcm94eSh2YWx1ZSkpXG4gICAgICAgIHJldHVybiBvbl9jaGFuZ2VfMS5kZWZhdWx0LnRhcmdldCh2YWx1ZSk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZXhwb3J0cy5nZXRQcm94eVRhcmdldCA9IGdldFByb3h5VGFyZ2V0O1xuZnVuY3Rpb24gdG9VUklQYXRoUGFydCh2YWx1ZSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFwvKy9nLCBcIi9cIik7XG4gICAgaWYgKCF2YWx1ZS5zdGFydHNXaXRoKFwiL1wiKSlcbiAgICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YDtcbiAgICBpZiAodmFsdWUuZW5kc1dpdGgoXCIvXCIpICYmIHZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCAtMSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmV4cG9ydHMudG9VUklQYXRoUGFydCA9IHRvVVJJUGF0aFBhcnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkWFJwYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmRYUnBiSE12ZFhScGJDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTeHJSRUZCYjBRN1FVRkRjRVFzZDBSQlFXMUVPMEZCUTI1RUxHdEZRVUZwUXp0QlFVVnFReXhwUTBGaFowSTdRVUZhV2l4NVFrRkJRU3hMUVVGTExFTkJRVUU3UVVGRFRDeDNRa0ZCUVN4SlFVRkpMRU5CUVVFN1FVRkRTaXc0UWtGQlFTeFZRVUZWTEVOQlFVRTdRVUZEVml3MFFrRkJRU3hSUVVGUkxFTkJRVUU3UVVGRFVpd3dRa0ZCUVN4TlFVRk5MRU5CUVVFN1FVRkRUaXdyUWtGQlFTeFhRVUZYTEVOQlFVRTdRVUZEV0N3eVFrRkJRU3hQUVVGUExFTkJRVUU3UVVGRFVDdzBRa0ZCUVN4UlFVRlJMRU5CUVVFN1FVRkRVaXcwUWtGQlFTeFJRVUZSTEVOQlFVRTdRVUZEVWl3eVFrRkJRU3hQUVVGUExFTkJRVUU3UVVGRFVDdzRRa0ZCUVN4VlFVRlZMRU5CUVVFN1FVRkRWaXcwUWtGQlFTeFJRVUZSTEVOQlFVRTdRVUZWV2l4VFFVRm5RaXhQUVVGUExFTkJRVU1zUjBGQlZ6dEpRVU12UWl4UFFVRlBMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTjBSQ3hEUVVGRE8wRkJSa1FzTUVKQlJVTTdRVUZUUkN4VFFVRm5RaXh0UWtGQmJVSXNRMEZCUXl4SFFVRlhPMGxCUXpORExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGFrUXNUMEZCVHl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExEaENRVUU0UWl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzBGQlF6bEZMRU5CUVVNN1FVRklSQ3hyUkVGSFF6dEJRVk5FTEZOQlFXZENMRzlDUVVGdlFpeERRVUZETEVkQlFWYzdTVUZETlVNc1IwRkJSeXhIUVVGSExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTnVRaXhQUVVGUExHMUNRVUZ0UWl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRM0JETEVOQlFVTTdRVUZJUkN4dlJFRkhRenRCUVZORUxGTkJRV2RDTEhOQ1FVRnpRaXhEUVVGRExFdEJRVmtzUlVGQlJTeFBRVUZaTzBsQlF6ZEVMRTFCUVUwc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkRja01zU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUXp0UlFVRkZMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpORExFTkJRVU03UVVGSVJDeDNSRUZIUXp0QlFWTkVMRk5CUVdkQ0xEQkNRVUV3UWl4RFFVRkRMRTFCUVZjc1JVRkJSU3hoUVVGMVFpeEZRVUZGTzBsQlF6ZEZMRTFCUVUwc1UwRkJVeXhIUVVGSExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRhRVFzU1VGQlNTeFRRVUZUTEVWQlFVVTdVVUZEV0N4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkROVU1zTUVKQlFUQkNMRU5CUVVNc1UwRkJVeXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzB0QlEzSkVPMGxCUTBRc1QwRkJUeXhWUVVGVkxFTkJRVU03UVVGRGRFSXNRMEZCUXp0QlFWQkVMR2RGUVU5RE8wRkJWMFFzVTBGQlowSXNiMEpCUVc5Q0xFTkJRVU1zVFVGQmVVSXNSVUZCUlN4SlFVRmpMRVZCUVVVc1dVRkJiMElzUlVGQlJUdEpRVU5zUnl4TFFVRkxMRTFCUVUwc1RVRkJUU3hKUVVGSkxFbEJRVWtzUlVGQlJUdFJRVU4yUWl4SlFVRkpMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVkQlFVY3NVMEZCVXl4RlFVRkZMRU5CUVVNc1JVRkJSVHRaUVVNeFF5eFBRVUZQTEVsQlFVa3NRMEZCUXp0VFFVTm1PMHRCUTBvN1NVRkRSQ3hQUVVGUExFdEJRVXNzUTBGQlF6dEJRVU5xUWl4RFFVRkRPMEZCVUVRc2IwUkJUME03UVVGWFJDeFRRVUZuUWl3MFFrRkJORUlzUTBGQlF5eE5RVUZ0UWl4RlFVRkZMRWRCUVZjN1NVRkRla1VzU1VGQlNTeERRVUZETEhWQ1FVRlRMRVZCUVVVN1VVRkJSU3hQUVVGUE8wbEJRM3BDTEUxQlFVMHNTVUZCU1N4SFFVRkhMSGRDUVVGaExFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUTNoRExFMUJRVTBzVTBGQlV5eEhRVUZITEUxQlFVMHNRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGSk0wTXNTVUZCU1N4VlFVRlZMRWRCUVZFc1UwRkJVeXhEUVVGRE8wbEJRMmhETEVsQlFVa3NVMEZCVXl4SlFVRkpMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeExRVUZMTEZOQlFWTXNSVUZCUlR0UlFVTTVReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZOQlFWTXNSVUZCUlN4UlFVRlJMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVNNVJDeFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRM3BFTzFGQlEwUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hMUVVGTExHbENRVUZwUWl4RlFVRkZPMWxCUTJwRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03V1VGRGJFTXNUVUZCVFN4VFFVRlRMRWRCUVVjc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF6dFpRVU5vUXl4SlFVRkpMRU5CUVVNc1UwRkJVenRuUWtGQlJTeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRzFFUVVGdFJDeERRVUZETEVOQlFVTTdXVUZEY2tZc1QwRkJUeXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETzFsQlEzSkNMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRM0pETzB0QlEwbzdTVUZEUkN4SlFVRkpMRlZCUVZVc1NVRkJTU3hKUVVGSkxFbEJRVWtzVlVGQlZTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRXRCUVVzc1NVRkJTU3hEUVVGRExFbEJRVWs3VVVGQlJTeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSGREUVVGM1F5eERRVUZETEVOQlFVTTdTVUZETDBnc1QwRkJUeXhWUVVGVkxFTkJRVU03UVVGRGRFSXNRMEZCUXp0QlFYUkNSQ3h2UlVGelFrTTdRVUZUUkN4VFFVRm5RaXhYUVVGWExFTkJRVU1zUzBGQlZUdEpRVU5zUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhMUVVGTExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTNKRExFTkJRVU03UVVGR1JDeHJRMEZGUXp0QlFWTkVMRk5CUVdkQ0xFOUJRVThzUTBGQlF5eExRVUZWTzBsQlF6bENMRWxCUVVrc1MwRkJTeXhMUVVGTExGTkJRVk1zU1VGQlNTeExRVUZMTEV0QlFVc3NTVUZCU1R0UlFVRkZMRTlCUVU4c1MwRkJTeXhEUVVGRE8wbEJRM2hFTEVsQlFVa3NiVUpCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NTMEZCU3p0UlFVRkZMRTlCUVU4c1MwRkJTeXhEUVVGRE8wbEJRMjVFTEU5QlFVOHNTVUZCU1N4RFFVRkRPMEZCUTJoQ0xFTkJRVU03UVVGS1JDd3dRa0ZKUXp0QlFWVkVMRk5CUVdkQ0xHTkJRV01zUTBGQlF5eExRVUZWTzBsQlEzSkRMRWxCUVVrc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF6dFJRVUZGTEU5QlFVOHNiVUpCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYkVRc1QwRkJUeXhMUVVGTExFTkJRVU03UVVGRGFrSXNRMEZCUXp0QlFVaEVMSGREUVVkRE8wRkJWVVFzVTBGQlowSXNZVUZCWVN4RFFVRkRMRXRCUVdFN1NVRkRka01zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEyNURMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXp0UlFVRkZMRXRCUVVzc1IwRkJSeXhKUVVGSkxFdEJRVXNzUlVGQlJTeERRVUZETzBsQlEyaEVMRWxCUVVrc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJUdFJRVU42UXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVNNVFqdEpRVU5FTEU5QlFVOHNTMEZCU3l4RFFVRkRPMEZCUTJwQ0xFTkJRVU03UVVGUVJDeHpRMEZQUXlKOSIsIlwidXNlIHN0cmljdFwiO1xud2luZG93LnZpcnR1YWxSb3V0ZXMgPSBbXCJDb25maWdcIiwgXCJHYW1lTG9iYnlcIiwgXCJIb21lXCJdO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZG1seWRIVmhiRVZ1ZEhKNVVHOXBiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTkyWVhJdmRHMXdMM1pwY25SMVlXeEZiblJ5ZVZCdmFXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlRTeE5RVUZQTEVOQlFVTXNZVUZCWVN4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRExGZEJRVmNzUlVGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXlKOSJdLCJzb3VyY2VSb290IjoiIn0=