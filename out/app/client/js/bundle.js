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
        if (!definedAttributes || attr && !definedAttributes.includes(attr))
            throw new Error("invalid defined attributes");
        const attributes = attr ? [attr] : definedAttributes;
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
        const definedAttributes = metadata_1.getMetadata(this, "definedAttributes") || [];
        dbCollection = dbCollection || {};
        for (const attr of definedAttributes) {
            const strAttr = attr;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50TW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQ2xpZW50TW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNEQUFrRTtBQUNsRSxnREFBNkM7QUFDN0MsNkNBQW1IO0FBQ25ILG9EQUF5RDtBQUN6RCxrREFBdUU7QUFDdkUsK0NBQTRDO0FBQzVDLGlFQUE4RDtBQUU5RCw4Q0FBMkM7QUFDM0MsMENBQXNHO0FBQ3RHLDBEQUF1RDtBQUV2RCxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO0FBQzVCLE1BQU0sZUFBZSxHQUFHLGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7QUFXdEQsSUFBYSxXQUFXLG1CQUF4QixNQUFhLFdBQVksU0FBUSxtQkFBUTtJQUF6Qzs7UUFrQmdDLGtCQUFhLEdBQVksSUFBSSxDQUFDO0lBZ085RCxDQUFDO0lBaE5VLE1BQU0sQ0FBQyxlQUFlLENBQTJDLEVBQVc7UUFDL0UsT0FBTyxJQUFJLE9BQU8sQ0FBZ0IsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQ2hELElBQUksS0FBSyxHQUFHLDZCQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQWtCLENBQUM7WUFDaEYsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDL0IsTUFBTSxlQUFlLEdBQUcsTUFBTSxlQUFlO2lCQUN4QyxRQUFRLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztpQkFDNUIsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7aUJBQ2hDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNiLElBQUksZUFBZSxFQUFFO2dCQUNqQixNQUFNLGVBQWUsR0FBd0IsRUFBRSxDQUFDO2dCQUNoRCxLQUFLLE1BQU0sR0FBRyxJQUFJLGVBQWUsRUFBRTtvQkFDL0IsSUFBSSxlQUFlLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUNyQyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFDMUMsSUFBSSxLQUF5QixDQUFDO3dCQUM5QixJQUFJLElBQUksR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2hDLElBQUksdUJBQXVCLEdBQUcsRUFBRSxDQUFDO3dCQUVqQyxJQUFJLFNBQVMsWUFBWSxLQUFLLEVBQUU7NEJBQzVCLHVCQUF1QixHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQ0FDN0MsSUFBSSxJQUFJLFlBQVksYUFBVztvQ0FBRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dDQUNsRSxPQUFPLElBQUksQ0FBQzs0QkFDaEIsQ0FBQyxDQUFDLENBQUM7eUJBQ047d0JBQ0QsSUFBSSxJQUFJLFlBQVksS0FBSyxJQUFJLGlCQUFVLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFOzRCQUMzRSxNQUFNLFlBQVksR0FBd0IsRUFBRSxDQUFDOzRCQUM3QyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtnQ0FDbkIsSUFBSSw2QkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQ0FDekIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQ0FDcEMsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29DQUM5QixLQUFLLEdBQUcsT0FBTyxDQUFDLGVBQWUsU0FBUyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQ0FDMUQsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO3dDQUNqRSxJQUFJLEdBQUcsTUFBTSxDQUFDO29DQUNsQixDQUFDLENBQUMsQ0FBQyxDQUFDO2lDQUNQOzZCQUNKOzRCQUNELGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO3lCQUNuRDs2QkFBTSxJQUFJLDZCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsRUFBRTs0QkFDdkUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDcEMsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUM5QixLQUFLLEdBQUcsT0FBTyxDQUFDLGVBQWUsU0FBUyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQzs0QkFDMUQsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dDQUNwRSxJQUFJLEdBQUcsTUFBTSxDQUFDOzRCQUNsQixDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUNQO3FCQUNKO2lCQUNKO2dCQUNELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUM7YUFDekM7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO2dCQUFFLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pELE9BQU8sT0FBTyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBYU0sTUFBTSxDQUFDLHdCQUF3QixDQUEyQyxVQUEwQjtRQUN2RyxPQUFPLDZCQUFhLENBQUMsV0FBVyxFQUFFLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFrQixDQUFDO0lBQzFGLENBQUM7SUFZTSxvQkFBb0IsQ0FBQyxHQUFXLEVBQUUsTUFBZSxFQUFFLE9BQWdCO1FBQ3RFLE9BQU8sMkJBQW9CLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQVlNLDBCQUEwQixDQUFDLEdBQVcsRUFBRSxNQUFXLEVBQUUsTUFBZTtRQUN2RSxPQUFPLGlDQUEwQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFXTSwyQkFBMkIsQ0FBQyxHQUFXLEVBQUUsTUFBZTtRQUMzRCxPQUFPLGtDQUEyQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQVFNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBZ0M7UUFDOUMsTUFBTSxpQkFBaUIsR0FBRyxzQkFBVyxDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ25ILE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7UUFDckQsTUFBTSxjQUFjLEdBQW1CLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdEUsTUFBTSxNQUFNLEdBQW1CLEVBQUUsQ0FBQztRQUNsQyxNQUFNLFlBQVksR0FBbUIsRUFBRSxDQUFDO1FBQ3hDLEtBQUssTUFBTSxTQUFTLElBQUksVUFBVSxFQUFFO1lBQ2hDLElBQUksY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDMUMsTUFBTSxPQUFPLEdBQVcsU0FBUyxDQUFDO2dCQUNsQyxJQUFJLFFBQVEsR0FBRyxxQkFBYyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxJQUFJLFFBQVEsWUFBWSxLQUFLLEVBQUU7b0JBQzNCLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7d0JBQzdCLElBQUksSUFBSSxZQUFZLGFBQVcsRUFBRTs0QkFDN0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzt5QkFDcEM7d0JBQ0QsT0FBTyxxQkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNoQyxDQUFDLENBQUMsQ0FBQztpQkFDTjtnQkFDRCxJQUFJLFFBQVEsWUFBWSxhQUFXO29CQUFFLFFBQVEsR0FBRyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFFOUUsSUFBSSxnQkFBZ0IsR0FBYyw4QkFBbUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3JFLElBQUksZ0JBQWdCLFlBQVksaUJBQU87b0JBQUUsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMsU0FBc0IsQ0FBQztnQkFFcEcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVk7b0JBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQztnQkFFL0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQjtvQkFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDO2FBQy9FO1NBQ0o7UUFDRCxJQUFJO1lBQ0EsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDNUIsTUFBTSxlQUFlO3FCQUNoQixRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztxQkFDM0IsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7cUJBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ2hDO1lBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU07Z0JBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3hHO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7UUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBbUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFTTSxPQUFPLENBQUMsS0FBaUM7UUFDNUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFRTSxLQUFLLENBQUMsaUJBQWlCO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYztZQUFFLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQzlFLE1BQU0sY0FBYyxHQUFzQixFQUFFLENBQUM7UUFDN0MsSUFBSSxZQUFZLEdBQUcsTUFBTSxlQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxRyxNQUFNLGlCQUFpQixHQUFHLHNCQUFXLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZFLFlBQVksR0FBRyxZQUFZLElBQUksRUFBRSxDQUFDO1FBQ2xDLEtBQUssTUFBTSxJQUFJLElBQUksaUJBQWlCLEVBQUU7WUFDbEMsTUFBTSxPQUFPLEdBQVcsSUFBSSxDQUFDO1lBQzdCLE1BQU0sT0FBTyxHQUFHLHFCQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxjQUFPLENBQUMsT0FBTyxDQUFDLElBQUksaUJBQVUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUN0RCxjQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFEO2lCQUFNLElBQUksZUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBTyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRTtnQkFDckQsY0FBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMxRDtpQkFBTSxJQUFJLGtCQUFXLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxLQUFLLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDakQsY0FBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMxRDtTQUNKO1FBQ0QsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFVUyxlQUFlLENBQUMsS0FBWTtRQUNsQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBRUosQ0FBQTtBQXhPMEIseUJBQWEsR0FBWSxJQUFJLENBQUM7QUFRekM7SUFBWCxxQkFBUSxFQUFFOztrREFBK0M7QUFsQmpELFdBQVc7SUFEdkIsNEJBQWUsRUFBRTtHQUNMLFdBQVcsQ0FrUHZCO0FBbFBZLGtDQUFXIn0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9saWIvQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQThEO0FBRTlELHdEQUFtRDtBQUNuRCx3REFBcUQ7QUFDckQsMENBQTJGO0FBQzNGLDRDQUFxRDtBQUNyRCwwREFBdUQ7QUFzRXZELE1BQWEsU0FBMkQsU0FBUSxtQkFBUTtJQXFFcEYsWUFBWSxNQUFTLEVBQUUsUUFBVyxFQUFFLE1BQXlCO1FBQ3pELEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBckI1QixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFrQmxDLG9CQUFlLEdBQVksS0FBSyxDQUFDO0lBSXpDLENBQUM7SUFRTSxRQUFRLENBQUMsS0FBZ0M7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPO1FBQzFDLElBQUksS0FBSyxDQUFDO1FBQ1YsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUk7WUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM1RSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxLQUFLO1lBQUUsNkJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFRTSxZQUFZLENBQUMsS0FBYyxFQUFFLFdBQWtCLEVBQUUsUUFBZTtRQUNuRSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxD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

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
    BaseConstructor.databaseName = metadata_1.getMetadata(BaseConstructor, "databaseName");
    return BaseConstructor;
}
exports.baseConstructorFactory = baseConstructorFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbnN0cnVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9saWIvQmFzZUNvbnN0cnVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLGtEQUFrRTtBQUNsRSwwQ0FBNkM7QUF3QzdDLFNBQWdCLHNCQUFzQixDQUFDLElBQVMsRUFBRSxnQkFBd0I7SUFRdEUsTUFBTSxlQUFnQixTQUFRLElBQUk7UUFzRDlCLFlBQVksR0FBRyxNQUFhO1lBQ3hCLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBWEwsbUJBQWMsR0FBWSxlQUFlLENBQUMsY0FBYyxDQUFDO1lBUXpELGlCQUFZLEdBQVksZUFBZSxDQUFDLFlBQVksQ0FBQztZQUlqRSxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsQ0FBQyxXQUFXLFlBQVksTUFBTSxDQUFDO2dCQUFFLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDdkQseUJBQWMsQ0FBQyxJQUFJLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbEQsSUFBSSxlQUFlLEdBQWlDLHNCQUFXLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQy9GLGVBQWUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM5RCxJQUFJLGlCQUFVLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUU7Z0JBQ3ZDLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxFQUFFLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQztnQkFDaEQsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN0RSxLQUFLLE1BQU0sR0FBRyxJQUFJLGNBQWMsRUFBRTtvQkFDOUIsSUFBSSxjQUFjLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUNwQyxNQUFNLE9BQU8sR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3JDLElBQUksT0FBTyxZQUFZLGlCQUFPLEVBQUU7NEJBQzVCLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQ3pDOzs0QkFBTSxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNyRDtpQkFDSjthQUNKO1lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDckMseUJBQWMsQ0FBQyxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkQsSUFBSSxpQkFBVSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztnQkFBUSxJQUFLLENBQUMsbUJBQW1CLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUN6RixDQUFDOztJQXBFc0IseUJBQVMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQztJQVV4RCwyQkFBVyxHQUFRLElBQUksQ0FBQztJQVN4Qiw4QkFBYyxHQUFZLHNCQUFXLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFTekUsNEJBQVksR0FBWSxzQkFBVyxDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMsQ0FBQztJQTBDaEcsT0FBTyxlQUFlLENBQUM7QUFDM0IsQ0FBQztBQXZGRCx3REF1RkMifQ==

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmluZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvbGliL0JpbmRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBeUQ7QUFFekQsMENBQXVDO0FBQ3ZDLG9EQUFzRDtBQUN0RCxrREFBK0c7QUFJL0csTUFBTSxXQUFXLEdBQUcsa0JBQWtCLENBQUM7QUFDdkMsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDO0FBc0I1QixNQUFhLE9BQU87SUEwRWhCLFlBQVksTUFBUyxFQUFFLFFBQVcsRUFBRSxPQUFvQixXQUFXO1FBQy9ELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFLTSxRQUFRLENBQUMsS0FBVztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBUU0sT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBU00sT0FBTyxDQUFDLFNBQVksRUFBRSxRQUFXO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUM7UUFDbEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBR3RHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQUUseUJBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDOUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7WUFBRSx5QkFBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztRQUdsRyxNQUFNLGNBQWMsR0FBRyxzQkFBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUM3RSxNQUFNLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDcEUsSUFBSSxnQkFBZ0I7WUFBRSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUdoRCxNQUFNLEtBQUssR0FBRyxzQkFBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVELEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUdqRCxNQUFNLGNBQWMsR0FBRyxTQUFTLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoRCxNQUFNLFdBQVcsR0FBRyw4QkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRSxNQUFNLGNBQWMsR0FBRyw4QkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25GLElBQUksS0FBSyxHQUFnQiw4QkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxLQUFLO1lBQUUsaUNBQXNCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUd2RyxLQUFLLEdBQUcsOEJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQWdCLENBQUM7UUFDeEUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1QixLQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRy9CLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQU9NLE1BQU07UUFFVCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRzlELE1BQU0sV0FBVyxHQUFHLHNCQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN2RCxNQUFNLGNBQWMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDaEYsTUFBTSxjQUFjLEdBQUcsc0JBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFNUcsTUFBTSxjQUFjLEdBQUcsU0FBUyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEQsTUFBTSxLQUFLLEdBQWdCLDhCQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFNUUsSUFBSSxnQkFBZ0IsRUFBRTtZQUNsQixJQUFJLGNBQWM7Z0JBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3pHLEtBQUssQ0FBQyxXQUFXLENBQUMsOEJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1NBQ2xGO1FBRUQsSUFBSSxjQUFjLEVBQUU7WUFDaEIsNkJBQXNCLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdDLEtBQUssQ0FBQyxXQUFXLENBQUMsOEJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtnQkFDeEIsSUFBSSxXQUFXO29CQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2pGLGlDQUFzQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzdEO1NBQ0o7SUFDTCxDQUFDO0lBU08saUJBQWlCO1FBQ3JCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQy9DLEdBQUcsRUFBRSxTQUFTLFVBQVU7Z0JBQ3BCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxXQUFXLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxTQUFTO29CQUFFLE9BQU8sU0FBUyxDQUFDO2dCQUMzRSxPQUFPLGtCQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZELENBQUM7WUFDRCxHQUFHLEVBQUUsU0FBUyxVQUFVLENBQUMsTUFBaUQ7Z0JBQ3RFLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxTQUFTO29CQUFFLE9BQU87Z0JBQ2hFLGtCQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN4RCxDQUFDO1lBQ0QsWUFBWSxFQUFFLElBQUk7WUFDbEIsVUFBVSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBdUIsQ0FBQztRQUN2RyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0QsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM1RSx5QkFBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQVlPLGlCQUFpQixDQUFDLE1BQXNCLEVBQUUsUUFBbUIsRUFBRSxLQUFVLEVBQUUsVUFBcUI7UUFDcEcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDekMsSUFBSSxVQUFVLEVBQUU7WUFDWixPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQzlFO1FBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUN4QyxDQUFDO0lBV08sNkJBQTZCLENBQUMsTUFBYyxFQUFFLEdBQWM7UUFDaEUsSUFBSSxVQUFVLEdBQW1DLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0YsSUFBSSxTQUFTLEdBQW9DLFFBQVEsQ0FBQztRQUMxRCxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDdkIsSUFBSSxNQUFNLEtBQWEsSUFBSSxDQUFDLFNBQVM7WUFBRSxTQUFTLEdBQUcsV0FBVyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDaEIsU0FBUyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFNBQVM7Z0JBQUUsTUFBTTtZQUN0QixJQUFJLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLGlCQUFpQjtnQkFBRSxTQUFTLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNuRyxVQUFVLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNqRTtRQUNELElBQUksMEJBQTBCLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLElBQUksVUFBVSxFQUFFO1lBQ1osSUFBSSxVQUFVLENBQUMsR0FBRyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLFlBQVk7Z0JBQUUsMEJBQTBCLEdBQUcsSUFBSSxDQUFDO1lBQzlGLElBQUksVUFBVSxDQUFDLEdBQUcsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxZQUFZO2dCQUFFLDBCQUEwQixHQUFHLElBQUksQ0FBQztTQUNqRztRQUNELElBQUksMEJBQTBCLEVBQUU7WUFDNUIsTUFBTSxLQUFLLEdBQUcsc0JBQVcsQ0FBTSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbEQsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDL0QsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsSUFBSSxRQUFRLFlBQVksS0FBSyxFQUFFO29CQUMzQixVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztpQkFDdkM7O29CQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsbUJBQW1CLENBQUM7YUFDcEQ7U0FDSjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7Q0FDSjtBQXBRRCwwQkFvUUMifQ==

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2xpYi9Qcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3REFBcUQ7QUFDckQsa0RBQWlGO0FBQ2pGLHdEQUFtRDtBQUNuRCwwQ0FBc0Y7QUFDdEYsNENBQTRDO0FBQzVDLGtFQUFpQztBQTJFakMsTUFBYSxRQUFRO0lBcUdqQixZQUFZLE1BQVMsRUFBRSxRQUFXLEVBQUUsTUFBd0I7UUFyQnJELGNBQVMsR0FBWSxJQUFJLENBQUM7UUFzQjdCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTVCLE1BQU0sZUFBZSxHQUFHLGNBQU8sQ0FBQyxRQUFrQixDQUFDLENBQUM7UUFDcEQsTUFBTSxlQUFlLEdBQUcsS0FBSyxlQUFlLGVBQWUsQ0FBQztRQUM1RCxNQUFNLFdBQVcsR0FBRyxLQUFLLGVBQWUsV0FBVyxDQUFDO1FBQ3BELE1BQU0sa0JBQWtCLEdBQUcsS0FBSyxlQUFlLGtCQUFrQixDQUFDO1FBRWxFLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO1FBQzVGLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQzVFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUM7SUFDNUcsQ0FBQztJQVNNLFFBQVEsQ0FBQyxL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

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
const BaseConstructor_1 = __webpack_require__("./source/app/lib/BaseConstructor.ts");
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
        if (framework_1.isBaseConstructor(prototype))
            Object.setPrototypeOf(ctor, Object.getPrototypeOf(prototype));
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
            if (options && (typeof options === "object")) {
                const prevCollectionName = metadata_1.getMetadata(ctor, "collectionName");
                const prevDatabaseName = metadata_1.getMetadata(ctor, "databaseName");
                metadata_1.defineMetadata(ctor, "collectionName", options.collectionName || prevCollectionName || "default");
                metadata_1.defineMetadata(ctor, "databaseName", options.databaseName || prevDatabaseName || "default");
            }
        }
        if (options && (typeof options === "object" && options.isAbstract))
            return ctor;
        const BaseConstructor = BaseConstructor_1.baseConstructorFactory(ctor, constParamsIndex);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvdXRpbHMvZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQiwwQ0FBdUQ7QUFDdkQsd0RBQW1EO0FBSW5ELDhEQUF3RjtBQUN4RixrREFBa0U7QUFDbEUsb0RBQStHO0FBRS9HLCtDQVlzQjtBQWlCdEIsU0FBZ0IsT0FBTyxDQUFDLFNBQXlCLEVBQUU7SUFDL0MsT0FBTyxDQUFDLE1BQVcsRUFBRSxHQUFvQixFQUFFLEVBQUU7UUFDekMsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pDLHFDQUF5QixDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNoRSxxQ0FBeUIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwRSxDQUFDLENBQUM7QUFDTixDQUFDO0FBTkQsMEJBTUM7QUFVRCxTQUFnQixRQUFRLENBQUMsU0FBMEIsRUFBRTtJQUNqRCxPQUFPLENBQUMsTUFBVyxFQUFFLEdBQW9CLEVBQUUsRUFBRTtRQUN6QyxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMscUNBQXlCLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2xFLHFDQUF5QixDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JFLENBQUMsQ0FBQztBQUNOLENBQUM7QUFORCw0QkFNQztBQWVELFNBQWdCLFNBQVMsQ0FBQyxRQUEyQixFQUFFLE1BQXlCO0lBQzVFLE9BQU8sQ0FBQyxNQUFXLEVBQUUsR0FBb0IsRUFBRSxFQUFFO1FBQ3pDLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQyxJ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

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWV3b3JrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC91dGlscy9mcmFtZXdvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBMkM7QUFDM0Msa0RBQWlFO0FBQ2pFLGdEQUE4RDtBQUM5RCw4Q0FBMkQ7QUFFM0Qsa0RBQStHO0FBbUIvRyxTQUFnQix5QkFBeUIsQ0FBQyxNQUFXLEVBQUUsR0FBVyxFQUFFLFNBQXdCO0lBRXhGLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7UUFBRSx5QkFBYyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxLQUFLLEVBQVUsQ0FBQyxDQUFDO0lBQ3BHLE1BQU0sR0FBRyxHQUFHLHNCQUFXLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBYSxDQUFDO0lBQ3ZELEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUxELDhEQUtDO0FBYUQsU0FBZ0IsTUFBTSxDQUFxRCxRQUFXLEVBQUUsR0FBTSxFQUFFLEtBQWEsRUFBRTtJQUMzRyxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsSUFBSSxFQUFFO1FBQUUsU0FBUyxHQUFHLEdBQUcsRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ25DLElBQUksQ0FBQyxzQkFBVyxDQUFDLFFBQVEsRUFBRSxxQkFBcUIsQ0FBQyxFQUFFO1FBQy9DLE1BQU0sZUFBZSxHQUFHLHNCQUFXLENBQUMsUUFBUSxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDbEQ7SUFDRCxNQUFNLEtBQUssR0FBRyw4QkFBbUIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdkQsSUFB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

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL3V0aWxzL21ldGFkYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBeUlBLFNBQWdCLGNBQWMsQ0FBNEMsTUFBUyxFQUFFLEdBQU0sRUFBRSxHQUFrQjtJQUMzRyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUZELHdDQUVDO0FBV0QsU0FBZ0IsV0FBVyxDQUE0QyxNQUFTLEVBQUUsR0FBTTtJQUNwRixPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFGRCxrQ0FFQztBQVVELFNBQWdCLHNCQUFzQixDQUFDLE1BQWMsRUFBRSxHQUFjLEVBQUUsS0FBVTtJQUM3RSxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUZELHdEQUVDO0FBVUQsU0FBZ0IsbUJBQW1CLENBQUMsTUFBYyxFQUFFLEdBQWM7SUFDOUQsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRkQsa0RBRUM7QUFVRCxTQUFnQixhQUFhLENBQUMsTUFBYyxFQUFFLEdBQVc7SUFDckQsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDM0QsQ0FBQztBQUZELHNDQUVDIn0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvR2FtZVdpbmRvdy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1Rlc3RDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvY29tcG9uZW50cy9WaWV3TGluay50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1ZpZXdSb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9DbGllbnRNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQ2xpZW50Um91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0NvbmZpZ01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0RhdGFiYXNlTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL21vZGVscyBzeW5jIF5cXC5cXC8uKlxcLnRzJCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdDEudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzIHN5bmMgXlxcLlxcLy4qXFwudHMkIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9Db25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0dhbWVMb2JieS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvSG9tZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy91dGlscy91dGlsLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0F0dHJpYnV0ZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Db25maWdNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0JET0RhdGFiYXNlTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvQkRPTWFwQ2FjaGUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvQkRPTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvQkRPUm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvQmFzZUNvbnN0cnVjdG9yLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0JpbmRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvRXJyb3JzLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0ZpZWxkLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL01vZGVsUmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvTW9kaWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL1Byb3BlcnR5LnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL1dhdGNoZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9tb2RlbHMvQkRPVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL21vZGVscy9CRE9UZXN0MS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL21vZGVscy9DZWxsLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbW9kZWxzL0NodW5rLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvcm91dGVzL0JET0NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3JvdXRlcy9CRE9HYW1lTG9iYnkudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9yb3V0ZXMvQkRPSG9tZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3V0aWxzIHN5bmMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscy9kZWNvcmF0b3JzLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvdXRpbHMvZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscy9mcmFtZXdvcmsudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscy9tZXRhZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3V0aWxzL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vdmFyL3RtcC92aXJ0dWFsRW50cnlQb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsKzRJOzs7Ozs7OztBQzdHOUI7QUFDYjtBQUNBLDJDQUEyQywyUSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yXCIsXCJ0ZW1wbGF0ZXNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1TR1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLVNHLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2EsIF9iO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcblwidXNlIHN0cmljdFwiO1xuY29uc3QgQmFzZUNvbXBvbmVudF8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0Jhc2VDb21wb25lbnRcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgZGVjb3JhdG9yc18yID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IEJBQllMT04gPSB0c2xpYl8xLl9faW1wb3J0U3RhcihyZXF1aXJlKFwiYmFieWxvbmpzXCIpKTtcbmxldCBHYW1lV2luZG93ID0gY2xhc3MgR2FtZVdpbmRvdyBleHRlbmRzIEJhc2VDb21wb25lbnRfMS5CYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmVuZ2luZSA9IG5ldyBCQUJZTE9OLkVuZ2luZSh0aGlzLCB0cnVlLCB7XG4gICAgICAgICAgICBhdWRpb0VuZ2luZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gYDEwMCVgO1xuICAgICAgICB0aGlzLnN0eWxlLndpZHRoID0gYDEwMCVgO1xuICAgICAgICB0aGlzLmVuZ2luZS5ydW5SZW5kZXJMb29wKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVuZ2luZS5yZXNpemUoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY3JlYXRlU2NlbmUoKSB7XG4gICAgICAgIGNvbnN0IHNjZW5lID0gbmV3IEJBQllMT04uU2NlbmUodGhpcy5lbmdpbmUpO1xuICAgICAgICBjb25zdCBjYW1lcmEgPSBuZXcgQkFCWUxPTi5GcmVlQ2FtZXJhKCdjYW1lcmEnLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDUsIC0xMCksIHNjZW5lKTtcbiAgICAgICAgY2FtZXJhLnNldFRhcmdldChCQUJZTE9OLlZlY3RvcjMuWmVybygpKTtcbiAgICAgICAgY2FtZXJhLmF0dGFjaENvbnRyb2wodGhpcywgZmFsc2UpO1xuICAgICAgICBjb25zdCBsaWdodCA9IG5ldyBCQUJZTE9OLkhlbWlzcGhlcmljTGlnaHQoJ2xpZ2h0MScsIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMSwgMCksIHNjZW5lKTtcbiAgICAgICAgbGlnaHQuc2hhZG93RW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IHNwaGVyZSA9IEJBQllMT04uTWVzaEJ1aWxkZXIuQ3JlYXRlU3BoZXJlKCdzcGhlcmUnLCB7IHNlZ21lbnRzOiAxNiwgZGlhbWV0ZXI6IDIgfSwgc2NlbmUpO1xuICAgICAgICBzcGhlcmUucG9zaXRpb24ueSA9IDE7XG4gICAgICAgIEJBQllMT04uTWVzaEJ1aWxkZXIuQ3JlYXRlR3JvdW5kKCdncm91bmQxJywgeyBoZWlnaHQ6IDYsIHdpZHRoOiA2LCBzdWJkaXZpc2lvbnM6IDIgfSwgc2NlbmUpO1xuICAgICAgICByZXR1cm4gc2NlbmU7XG4gICAgfVxuICAgIGNyZWF0ZVRlcnJhaW4oKSB7IH1cbn07XG5HYW1lV2luZG93LmV4dGVuZHMgPSBcImNhbnZhc1wiO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzIucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCB0eXBlb2YgKF9hID0gdHlwZW9mIEJBQllMT04gIT09IFwidW5kZWZpbmVkXCIgJiYgQkFCWUxPTi5FbmdpbmUpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdClcbl0sIEdhbWVXaW5kb3cucHJvdG90eXBlLCBcImVuZ2luZVwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzIucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCB0eXBlb2YgKF9iID0gdHlwZW9mIEJBQllMT04gIT09IFwidW5kZWZpbmVkXCIgJiYgQkFCWUxPTi5TY2VuZSkgPT09IFwiZnVuY3Rpb25cIiA/IF9iIDogT2JqZWN0KVxuXSwgR2FtZVdpbmRvdy5wcm90b3R5cGUsIFwic2NlbmVcIiwgdm9pZCAwKTtcbkdhbWVXaW5kb3cgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoKVxuXSwgR2FtZVdpbmRvdyk7XG5leHBvcnRzLmRlZmF1bHQgPSBHYW1lV2luZG93O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUjJGdFpWZHBibVJ2ZHk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyTnZiWEJ2Ym1WdWRITXZSMkZ0WlZkcGJtUnZkeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTERaRVFVRnBSVHRCUVVOcVJTeHpSRUZCZDBRN1FVRkRlRVFzYzBSQlFXbEVPMEZCUTJwRUxESkVRVUZ4UXp0QlFWVnlReXhKUVVGeFFpeFZRVUZWTEVkQlFTOUNMRTFCUVhGQ0xGVkJRVmNzVTBGQlVTeHZRMEZCYjBJc1EwRkJReXhwUWtGQmFVSXNRMEZCUXp0SlFVUXZSVHM3VVVGdFFqQkNMRmRCUVUwc1IwRkJiVUlzU1VGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVU3V1VGRE1VVXNWMEZCVnl4RlFVRkZMRWxCUVVrN1UwRkRjRUlzUTBGQlF5eERRVUZETzFGQlUyMUNMRlZCUVVzc1IwRkJhMElzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMGxCZVVSd1JTeERRVUZETzBsQmJFUlZMR2xDUVVGcFFqdFJRVU53UWl4TFFVRkxMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVXNRMEZCUXp0UlFVTXhRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRNMElzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRekZDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1lVRkJZU3hEUVVGRExFZEJRVWNzUlVGQlJUdFpRVU16UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFGQlEzaENMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMGdzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRSUVVOeVFpeE5RVUZOTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlFVY3NSVUZCUlR0WlFVTnVReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNN1dVRkRMMElzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRE8xRkJRM0pETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTFBc1EwRkJRenRKUVZOVExGZEJRVmM3VVVGRmFrSXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVVM1F5eE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRmRrWXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkZla01zVFVGQlRTeERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRmJFTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXpGR0xFdEJRVXNzUTBGQlF5eGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUlROQ0xFMUJRVTBzVFVGQlRTeEhRVUZITEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEZGQlFWRXNSVUZCUlN4RlFVRkZMRVZCUVVVc1VVRkJVU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUldoSExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVWMFFpeFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhUUVVGVExFVkJRVVVzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFVkJRVVVzV1VGQldTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJSVGRHTEU5QlFVOHNTMEZCU3l4RFFVRkRPMGxCUTJwQ0xFTkJRVU03U1VGUlV5eGhRVUZoTEV0QlFVc3NRMEZCUXp0RFFVTm9ReXhEUVVGQk8wRkJOMFV3UWl4clFrRkJUeXhIUVVGWExGRkJRVkVzUTBGQlF6dEJRVk4wUXp0SlFVRllMSEZDUVVGUkxFVkJRVVU3TUVSQlFXMUNMRTlCUVU4c2IwSkJRVkFzVDBGQlR5eERRVUZETEUxQlFVMDdNRU5CUlhwRE8wRkJVMU03U1VGQldDeHhRa0ZCVVN4RlFVRkZPekJFUVVGclFpeFBRVUZQTEc5Q1FVRlFMRTlCUVU4c1EwRkJReXhMUVVGTE8zbERRVUZ6UWp0QlFUZENMME1zVlVGQlZUdEpRVVE1UWl3MFFrRkJaU3hGUVVGRk8wZEJRMGNzVlVGQlZTeERRWE5HT1VJN2EwSkJkRVp2UWl4VlFVRlZJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgQmFzZUNvbXBvbmVudF8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0Jhc2VDb21wb25lbnRcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgZGVjb3JhdG9yc18yID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmxldCBUZXN0Q29tcG9uZW50ID0gY2xhc3MgVGVzdENvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnRfMS5CYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnRlbXBsYXRlU3RyaW5nID0gcmVxdWlyZSgnfnN0YXRpYy92aWV3cy90ZXN0Q29tcG9uZW50Lm5qaycpO1xuICAgIH1cbn07XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMi5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbl0sIFRlc3RDb21wb25lbnQucHJvdG90eXBlLCBcInRlbXBsYXRlU3RyaW5nXCIsIHZvaWQgMCk7XG5UZXN0Q29tcG9uZW50ID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKClcbl0sIFRlc3RDb21wb25lbnQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVGVzdENvbXBvbmVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHVnpkRU52YlhCdmJtVnVkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDJOdmJYQnZibVZ1ZEhNdlZHVnpkRU52YlhCdmJtVnVkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3cyUkVGQmFVVTdRVUZEYWtVc2MwUkJRWGRFTzBGQlEzaEVMSE5FUVVGcFJEdEJRVlZxUkN4SlFVRnhRaXhoUVVGaExFZEJRV3hETEUxQlFYRkNMR0ZCUVdNc1UwRkJVU3h2UTBGQmIwSXNRMEZCUXl4WFFVRlhMRU5CUVVNN1NVRkVOVVU3TzFGQlV6QkNMRzFDUVVGakxFZEJRVWNzVDBGQlR5eERRVUZETEdsRFFVRnBReXhEUVVGRExFTkJRVU03U1VGRmRFWXNRMEZCUXp0RFFVRkJMRU5CUVVFN1FVRkdaVHRKUVVGWUxIRkNRVUZSTEVWQlFVVTdPM0ZFUVVGMVJUdEJRVkpxUlN4aFFVRmhPMGxCUkdwRExEUkNRVUZsTEVWQlFVVTdSMEZEUnl4aFFVRmhMRU5CVldwRE8ydENRVlp2UWl4aFFVRmhJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2EsIF9iO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJhc2VDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9CYXNlQ29tcG9uZW50XCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IFRlc3QxXzEgPSByZXF1aXJlKFwifmNsaWVudC9tb2RlbHMvVGVzdDFcIik7XG5sZXQgVmlld0xpbmsgPSBjbGFzcyBWaWV3TGluayBleHRlbmRzIEJhc2VDb21wb25lbnRfMS5CYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgIGNvbnN0cnVjdG9yKF9wYXJhbXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBUZXN0MV8xLlRlc3QxKHsgdGl0bGU6IFN0cmluZyhEYXRlLm5vdygpKSB9KTtcbiAgICAgICAgdGhpcy50ZXN0ID0gdGhpcy5tb2RlbC5iaW5kKFwidGl0bGVcIik7XG4gICAgICAgIHRoaXMudGVzdGVyID0gdGhpcy5tb2RlbC5iaW5kKFwidGVzdGVyXCIpO1xuICAgICAgICB0aGlzLnRlc3RlbiA9IHt9O1xuICAgIH1cbiAgICBjb25zdHJ1Y3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3RlZENhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25MaW5rQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uVGVzdFR5cGVDaGVjayh2YWx1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNraW5nIHR5cGUgb2YgdGVzdCB3aXRoIHZhbHVlXCIsIHZhbHVlKTtcbiAgICB9XG4gICAgb25UZXN0VHlwZUNoZWNrU3VjY2VzcygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUeXBlY2hlY2sgb2YgdGVzdCBzdWNjZXNzZnVsXCIpO1xuICAgIH1cbiAgICBvblRlc3RUeXBlQ2hlY2tGYWlsKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHlwZWNoZWNrIG9mIHRlc3QgZmFpbGVkXCIsIGVycm9yKTtcbiAgICB9XG4gICAgb25UZXN0Q2hhbmdlKGNoYW5nZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0IGNoYW5nZWRcIiwgY2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuICAgIG9uVGVzdGVySW5pdChpbml0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIGluaXRcIiwgaW5pdCwgdGhpcyk7XG4gICAgfVxuICAgIG9uVGVzdGVyQ2hhbmdlKGNoYW5nZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgY2hhbmdlZFwiLCBjaGFuZ2VkLCB0aGlzKTtcbiAgICB9XG4gICAgb25UZXN0ZXJBZGQoYWRkZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgYWRkZWRcIiwgYWRkZWQsIHRoaXMpO1xuICAgIH1cbiAgICBvblRlc3RlclJlbW92ZShyZW1vdmVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIHJlbW92ZWRcIiwgcmVtb3ZlZCwgdGhpcyk7XG4gICAgfVxuICAgIG9uTGlua0NsaWNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvdy5yb3V0ZXIubmF2aWdhdGUodGhpcy5ocmVmLCB0cnVlKTtcbiAgICB9XG59O1xuVmlld0xpbmsuZXh0ZW5kcyA9ICdhJztcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuXSwgVmlld0xpbmsucHJvdG90eXBlLCBcIm1vZGVsXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBWaWV3TGluay5wcm90b3R5cGUsIFwidGVzdFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEud2F0Y2hlZCgpLCBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQXJyYXkpXG5dLCBWaWV3TGluay5wcm90b3R5cGUsIFwidGVzdGVyXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIHR5cGVvZiAoX2EgPSB0eXBlb2YgT2JqZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIE9iamVjdCkgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0KVxuXSwgVmlld0xpbmsucHJvdG90eXBlLCBcInRlc3RlblwiLCB2b2lkIDApO1xuVmlld0xpbmsgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYiA9IHR5cGVvZiBDb25zdFBhcmFtcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBDb25zdFBhcmFtcykgPT09IFwiZnVuY3Rpb25cIiA/IF9iIDogT2JqZWN0XSlcbl0sIFZpZXdMaW5rKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFZpZXdMaW5rO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVm1sbGQweHBibXN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJOc2FXVnVkQzkwY3k5amIyMXdiMjVsYm5SekwxWnBaWGRNYVc1ckxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFTdzJSRUZCYVVVN1FVRkRha1VzYzBSQlFYTkdPMEZCUTNSR0xHZEVRVUUyUXp0QlFWVTNReXhKUVVGeFFpeFJRVUZSTEVkQlFUZENMRTFCUVhGQ0xGRkJRVk1zVTBGQlVTeHZRMEZCYjBJc1EwRkJReXhwUWtGQmFVSXNRMEZCUXp0SlFYbERla1VzV1VGQldTeFBRVUVyUWp0UlFVTjJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFJRVE5DVHl4VlFVRkxMRWRCUVVjc1NVRkJTU3hoUVVGTExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFWRm9SQ3hUUVVGSkxFZEJRVmNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGUk4wSXNWMEZCVFN4SFFVRmhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCVVhwRUxGZEJRVTBzUjBGQlZ5eEZRVUZGTEVOQlFVTTdTVUZKZGtNc1EwRkJRenRKUVU5TkxHMUNRVUZ0UWp0UlFVTjBRaXhMUVVGTExFTkJRVU1zYlVKQlFXMUNMRVZCUVVVc1EwRkJRenRSUVVNMVFpeEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYUVVc1EwRkJRenRKUVZOVExHVkJRV1VzUTBGQlF5eExRVUZ0UWp0UlFVTjZReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEd0RFFVRnJReXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF6TkVMRU5CUVVNN1NVRlJVeXh6UWtGQmMwSTdVVUZETlVJc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5dzRRa0ZCT0VJc1EwRkJReXhEUVVGRE8wbEJRMmhFTEVOQlFVTTdTVUZSVXl4dFFrRkJiVUlzUTBGQlF5eExRVUZaTzFGQlEzUkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zTUVKQlFUQkNMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJrUXNRMEZCUXp0SlFWTlRMRmxCUVZrc1EwRkJReXhQUVVGMVFqdFJRVU14UXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExHTkJRV01zUlVGQlJTeFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRMME1zUTBGQlF6dEpRVk5UTEZsQlFWa3NRMEZCUXl4SlFVRnZRanRSUVVOMlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETTBNc1EwRkJRenRKUVZOVExHTkJRV01zUTBGQlF5eFBRVUYxUWp0UlFVTTFReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEdkQ1FVRm5RaXhGUVVGRkxFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTnFSQ3hEUVVGRE8wbEJVMU1zVjBGQlZ5eERRVUZETEV0QlFYRkNPMUZCUTNaRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNZMEZCWXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU0zUXl4RFFVRkRPMGxCVTFNc1kwRkJZeXhEUVVGRExFOUJRWFZDTzFGQlF6VkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEycEVMRU5CUVVNN1NVRlRUeXhYUVVGWExFTkJRVU1zUzBGQldUdFJRVU0xUWl4TFFVRkxMRU5CUVVNc1kwRkJZeXhGUVVGRkxFTkJRVU03VVVGRGRrSXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVNMVF5eERRVUZETzBOQlEwb3NRMEZCUVR0QlFXaEtNRUlzWjBKQlFVOHNSMEZCVnl4SFFVRkhMRU5CUVVNN1FVRlBha003U1VGQldDeHhRa0ZCVVN4RlFVRkZPenQxUTBGQmVVUTdRVUZSZGtRN1NVRkJXaXh6UWtGQlV5eEZRVUZGT3p0elEwRkJaMFE3UVVGUmNFTTdTVUZCZGtJc2IwSkJRVThzUlVGQlJTeEZRVUZGTEhOQ1FVRlRMRVZCUVVVN08zZERRVUZ4UkR0QlFWRm9SVHRKUVVGWUxIRkNRVUZSTEVWQlFVVTdNRVJCUVdkQ0xFMUJRVTBzYjBKQlFVNHNUVUZCVFR0M1EwRkJUVHRCUVhaRGRFSXNVVUZCVVR0SlFVUTFRaXcwUWtGQlpTeEZRVUZGTzJsRlFUQkRVU3hYUVVGWExHOUNRVUZZTEZkQlFWYzdSMEY2UTJoQ0xGRkJRVkVzUTBGM1NqVkNPMnRDUVhoS2IwSXNVVUZCVVNKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJhc2VDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9CYXNlQ29tcG9uZW50XCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBkZWNvcmF0b3JzXzIgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgbmF2aWdvXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibmF2aWdvXCIpKTtcbmxldCBWaWV3Um91dGVyID0gY2xhc3MgVmlld1JvdXRlciBleHRlbmRzIEJhc2VDb21wb25lbnRfMS5CYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnJvdXRlciA9IG5ldyBuYXZpZ29fMS5kZWZhdWx0KCk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICB0aGlzLnJvdXRlQ29sbGVjdGlvbigpO1xuICAgICAgICB3aW5kb3cucm91dGVyID0gdGhpcy5yb3V0ZXI7XG4gICAgfVxuICAgIHJvdXRlQ29sbGVjdGlvbigpIHtcbiAgICAgICAgZm9yIChjb25zdCByb3V0ZSBvZiB3aW5kb3cudmlydHVhbFJvdXRlcykge1xuICAgICAgICAgICAgY29uc3QgbXlSb3V0ZSA9IHJlcXVpcmUoYC4vLi4vcm91dGVzLyR7cm91dGV9LnRzYCkuZGVmYXVsdDtcbiAgICAgICAgICAgIHRoaXMuc2luZ2VSb3V0ZUNvbGxlY3Rpb24obXlSb3V0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2luZ2VSb3V0ZUNvbGxlY3Rpb24oUm91dGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghdXRpbF8xLmluY2x1ZGVzTWVtYmVyT2ZMaXN0KFJvdXRlLmF0dGFjaFRvU2VydmVycywgW2dsb2JhbC5wcm9jZXNzLmVudi5uYW1lLCAnKiddKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBSb3V0ZUNsYXNzID0gbmV3IFJvdXRlKCk7XG4gICAgICAgICAgICBpZiAoIVJvdXRlQ2xhc3MuaXNDbGllbnRSb3V0ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtSb3V0ZUNsYXNzLmNvbnN0cnVjdG9yLm5hbWV9IGlzIG5vdCBpbnN0YW5jZSBvZiB+Y2xpZW50L2xpYi9CYXNlUm91dGVgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucm91dGVyLm9uKFJvdXRlQ2xhc3Mucm91dGVyKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxufTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18yLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuXSwgVmlld1JvdXRlci5wcm90b3R5cGUsIFwicm91dGVyXCIsIHZvaWQgMCk7XG5WaWV3Um91dGVyID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKClcbl0sIFZpZXdSb3V0ZXIpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVmlld1JvdXRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZtbGxkMUp2ZFhSbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMMk52YlhCdmJtVnVkSE12Vm1sbGQxSnZkWFJsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN3MlJFRkJhVVU3UVVGRGFrVXNNRU5CUVhWRU8wRkJRM1pFTEhORVFVRjNSRHRCUVVONFJDeHpSRUZCYVVRN1FVRkRha1FzTkVSQlFUUkNPMEZCVlRWQ0xFbEJRWEZDTEZWQlFWVXNSMEZCTDBJc1RVRkJjVUlzVlVGQlZ5eFRRVUZSTEc5RFFVRnZRaXhEUVVGRExGZEJRVmNzUTBGQlF6dEpRVVI2UlRzN1VVRlZhVU1zVjBGQlRTeEhRVUZITEVsQlFVa3NaMEpCUVUwc1JVRkJSU3hEUVVGRE8wbEJLME4yUkN4RFFVRkRPMGxCZGtOaExHbENRVUZwUWp0UlFVTjJRaXhMUVVGTExFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1EwRkJRenRSUVVNeFFpeEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZMRU5CUVVNN1VVRkRka0lzVFVGQlRTeERRVUZETEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJRMmhETEVOQlFVTTdTVUZSVHl4bFFVRmxPMUZCUTI1Q0xFdEJRVXNzVFVGQlRTeExRVUZMTEVsQlFVa3NUVUZCVFN4RFFVRkRMR0ZCUVdFc1JVRkJSVHRaUVVOMFF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1pVRkJaU3hMUVVGTExFdEJRVXNzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXp0WlFVTXpSQ3hKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VTBGRGRFTTdTVUZEVEN4RFFVRkRPMGxCVlU4c2IwSkJRVzlDTEVOQlFVTXNTMEZCVlR0UlFVTnVReXhKUVVGSk8xbEJRMEVzU1VGQlNTeERRVUZETERKQ1FVRnZRaXhEUVVGWExFdEJRVXNzUTBGQlF5eGxRVUZsTEVWQlFVVXNRMEZCVXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRVVVzVDBGQlR6dFpRVU16Unl4TlFVRk5MRlZCUVZVc1IwRkJSeXhKUVVGSkxFdEJRVXNzUlVGQlJTeERRVUZETzFsQlF5OUNMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zWVVGQllTeEZRVUZGTzJkQ1FVTXpRaXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxESkRRVUV5UXl4RFFVRkRMRU5CUVVNN1lVRkRPVVk3V1VGRFJDeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVMEZEY2tNN1VVRkJReXhQUVVGUExFdEJRVXNzUlVGQlJUdFpRVU5hTEUxQlFVMHNTMEZCU3l4RFFVRkRPMU5CUTJZN1NVRkRUQ3hEUVVGRE8wTkJRMG9zUTBGQlFUdEJRUzlEWlR0SlFVRllMSEZDUVVGUkxFVkJRVVU3T3pCRFFVRjNRenRCUVZSc1F5eFZRVUZWTzBsQlJEbENMRFJDUVVGbExFVkJRVVU3UjBGRFJ5eFZRVUZWTEVOQmQwUTVRanRyUWtGNFJHOUNMRlZCUVZVaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5yZXF1aXJlKFwicmVmbGVjdC1tZXRhZGF0YVwiKTtcbmNvbnN0IG51bmp1Y2tzXzEgPSByZXF1aXJlKFwibnVuanVja3NcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5jbGllbnQvdXRpbHMvdXRpbFwiKTtcbmNvbnN0IHV0aWxfMiA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5mdW5jdGlvbiBCYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MVHlwZUVsZW1lbnQpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBIVE1MVHlwZUVsZW1lbnQge1xuICAgICAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLmdlbmVyYXRlVW5pcXVlSUQoKTtcbiAgICAgICAgICAgIHRoaXMuaXNCYXNlQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMuY29uc3RydWN0b3IpLm5hbWU7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlU3RyaW5nID0gJzxkaXY+PHNsb3Q+PC9zbG90PjwvZGl2Pic7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlUGFyYW1zID0ge307XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMsIFwiZGVmaW5lZFByb3BlcnRpZXNcIik7XG4gICAgICAgICAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBvZiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnNldChwcm9wLCBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcywgcHJvcCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgICAgfVxuICAgICAgICBnZXQgYmluZGluZ3MoKSB7XG4gICAgICAgICAgICBjb25zdCBiaW5kaW5ncyA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcywgXCJpbml0aWF0b3JCaW5kaW5nXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmdzID8gYmluZGluZ3MgOiBuZXcgTWFwKCk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0TmFtZXNwYWNlZFN0b3JhZ2Uoa2V5LCBuc1Byb3AsIGZvcmNlTlMpIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlsXzEuZ2V0TmFtZXNwYWNlZFN0b3JhZ2UodGhpcywga2V5LCBuc1Byb3AsIGZvcmNlTlMpO1xuICAgICAgICB9XG4gICAgICAgIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGtleSwgbmV3VmFsLCBuc1Byb3ApIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlsXzEuc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2UodGhpcywga2V5LCBuZXdWYWwsIG5zUHJvcCk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlKGtleSwgbnNQcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gdXRpbF8xLmRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5zUHJvcCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0QXR0cmlidXRlKHF1YWxpZmllZE5hbWUsIHZhbHVlLCBzZXRWYWx1ZSA9IHRydWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMgJiYgdGhpcy5wcm9wZXJ0aWVzLmhhcyhxdWFsaWZpZWROYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgXCIke3F1YWxpZmllZE5hbWV9XCIgY2FuJ3QgYmUgc2V0IGFzIGF0dHJpYnV0ZSBiZWNhdXNlIGl0IGlzIGEgZGVmaW5lZCBwcm9wZXJ0eWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlVG9TZXQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIXV0aWxfMi5pc1ByaW1pdGl2ZSh2YWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlVG9TZXQgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXFxcIi9nLCBcIidcIik7XG4gICAgICAgICAgICAgICAgc3VwZXIuc2V0QXR0cmlidXRlKHF1YWxpZmllZE5hbWUsIHZhbHVlVG9TZXQpO1xuICAgICAgICAgICAgICAgIHZhbHVlVG9TZXQgPSB1dGlsXzIuY29uc3RydWN0VHlwZU9mSFRNTEF0dHJpYnV0ZSh0aGlzLCBxdWFsaWZpZWROYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoc2V0VmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbcXVhbGlmaWVkTmFtZV0gPSB2YWx1ZVRvU2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKHF1YWxpZmllZE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZUF0dHJpYnV0ZShxdWFsaWZpZWROYW1lKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzICYmIHRoaXMucHJvcGVydGllcy5oYXMocXVhbGlmaWVkTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFwiJHtxdWFsaWZpZWROYW1lfVwiIGNhbid0IGJlIHJlbW92ZWQgYXMgYXR0cmlidXRlIGJlY2F1c2UgaXQgaXMgYSBkZWZpbmVkIHByb3BlcnR5YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdXBlci5yZW1vdmVBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSk7XG4gICAgICAgICAgICB0aGlzW3F1YWxpZmllZE5hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRvSlNPTigpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpc1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtrZXldID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdHJ1Y3RlZENhbGxiYWNrKC4uLl9hcmdzKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY29uc3RydWN0b3IuZXh0ZW5kcykge1xuICAgICAgICAgICAgICAgIGxldCBzdHJpbmdUb1BhcnNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAodXRpbF8yLmlzU3RyaW5nKHRoaXMudGVtcGxhdGVTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ1RvUGFyc2UgPSBudW5qdWNrc18xLnJlbmRlclN0cmluZyh0aGlzLnRlbXBsYXRlU3RyaW5nLCB0aGlzLnRlbXBsYXRlUGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxfMi5pc09iamVjdCh0aGlzLnRlbXBsYXRlU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmdUb1BhcnNlID0gdGhpcy50ZW1wbGF0ZVN0cmluZy5yZW5kZXIodGhpcy50ZW1wbGF0ZVBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJpbmdUb1BhcnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzdHJpbmdUb1BhcnNlLCAndGV4dC9odG1sJyk7XG4gICAgICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoZG9jLmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkgeyB9XG4gICAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkgeyB9XG4gICAgICAgIGFkb3B0ZWRDYWxsYmFjaygpIHsgfVxuICAgICAgICBhZGRDb250cm9sbGVyKCkgeyB9XG4gICAgICAgIHJlbW92ZUNvbnRyb2xsZXIoKSB7IH1cbiAgICAgICAgZ2VuZXJhdGVVbmlxdWVJRCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzLmNvbnN0cnVjdG9yKS5uYW1lO1xuICAgICAgICAgICAgY29uc3Qgb2NjdXJyZW5jZSA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGhpcy50YWdOYW1lKSkuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBgJHtjbGFzc05hbWV9XyR7b2NjdXJyZW5jZX1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIEJhc2VDb21wb25lbnQuaXNCYXNlQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxuICAgIF0sIEJhc2VDb21wb25lbnQucHJvdG90eXBlLCBcImlzQmFzZUNvbXBvbmVudFwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgQmFzZUNvbXBvbmVudC5wcm90b3R5cGUsIFwiY2xhc3NOYW1lXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KHsgZGlzYWJsZVR5cGVHdWFyZDogdHJ1ZSB9KSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuICAgIF0sIEJhc2VDb21wb25lbnQucHJvdG90eXBlLCBcInRlbXBsYXRlU3RyaW5nXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIHR5cGVvZiAoX2IgPSB0eXBlb2YgSW5kZXhTdHJ1Y3R1cmUgIT09IFwidW5kZWZpbmVkXCIgJiYgSW5kZXhTdHJ1Y3R1cmUpID09PSBcImZ1bmN0aW9uXCIgPyBfYiA6IE9iamVjdClcbiAgICBdLCBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJ0ZW1wbGF0ZVBhcmFtc1wiLCB2b2lkIDApO1xuICAgIHJldHVybiBCYXNlQ29tcG9uZW50O1xufVxuZXhwb3J0cy5CYXNlQ29tcG9uZW50RmFjdG9yeSA9IEJhc2VDb21wb25lbnRGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUW1GelpVTnZiWEJ2Ym1WdWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMMnhwWWk5Q1lYTmxRMjl0Y0c5dVpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVRkJMRFJDUVVFd1FqdEJRVU14UWl4MVEwRkJhMFE3UVVGRGJFUXNjMFJCUVRSRU8wRkJRelZFTEd0RVFVRjFSVHRCUVVkMlJTdzJRMEZCYlVnN1FVRkRia2dzTUVOQlFXZEhPMEZCVldoSExGTkJRV2RDTEc5Q1FVRnZRaXhEUVVGNVF5eGxRVUZ6UWpzN1NVRlJMMFlzVFVGQlpTeGhRVUZqTEZOQlFWRXNaVUZCWlR0UlFXdEhhRVFzV1VGQldTeEhRVUZITEVsQlFWYzdXVUZEZEVJc1MwRkJTeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdXVUYwUkVNc1QwRkJSU3hIUVVGWExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3hEUVVGRE8xbEJVVGRDTEc5Q1FVRmxMRWRCUVZrc1NVRkJTU3hEUVVGRE8xbEJVMmhETEdOQlFWTXNSMEZCVnl4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNN1dVRlZjRU1zYlVKQlFXTXNSMEZCYzBJc01FSkJRVEJDTEVOQlFVTTdXVUZYYkVjc2JVSkJRV01zUjBGQmJVSXNSVUZCUlN4RFFVRkRPMUZCYVVJeFJDeERRVUZETzFGQmVFVkVMRWxCUVZjc1ZVRkJWVHRaUVVOcVFpeE5RVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRM2hDTEUxQlFVMHNWVUZCVlN4SFFVRkhMSE5DUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTEcxQ1FVRnRRaXhEUVVGeFF5eERRVUZETzFsQlF6bEdMRWxCUVVrc1ZVRkJWU3hGUVVGRk8yZENRVU5hTEV0QlFVc3NUVUZCVFN4SlFVRkpMRWxCUVVrc1ZVRkJWU3hGUVVGRk8yOUNRVU16UWl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJTdzRRa0ZCYlVJc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0cFFrRkRjRVE3WVVGRFNqdFpRVU5FTEU5QlFVOHNTMEZCU3l4RFFVRkRPMUZCUTJwQ0xFTkJRVU03VVVGM1JFUXNTVUZCWXl4UlFVRlJPMWxCUTJ4Q0xFMUJRVTBzVVVGQlVTeEhRVUZITEhOQ1FVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxHdENRVUZyUWl4RFFVRkRMRU5CUVVNN1dVRkRka1FzVDBGQlR5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTXpReXhEUVVGRE8xRkJaVTBzYjBKQlFXOUNMRU5CUVVNc1IwRkJWeXhGUVVGRkxFMUJRV1VzUlVGQlJTeFBRVUZuUWp0WlFVTjBSU3hQUVVGUExESkNRVUZ2UWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFVkJRVVVzVFVGQlRTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUXpWRUxFTkJRVU03VVVGWFRTd3dRa0ZCTUVJc1EwRkJReXhIUVVGWExFVkJRVVVzVFVGQlZ5eEZRVUZGTEUxQlFXVTdXVUZEZGtVc1QwRkJUeXhwUTBGQk1FSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFMUJRVTBzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTnFSU3hEUVVGRE8xRkJWVTBzTWtKQlFUSkNMRU5CUVVNc1IwRkJWeXhGUVVGRkxFMUJRV1U3V1VGRE0wUXNUMEZCVHl4clEwRkJNa0lzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRekZFTEVOQlFVTTdVVUZYVFN4WlFVRlpMRU5CUVVNc1lVRkJjVUlzUlVGQlJTeExRVUZoTEVWQlFVVXNWMEZCYjBJc1NVRkJTVHRaUVVNNVJTeEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWxCUVVrc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNZVUZCWVN4RFFVRkRMRVZCUVVVN1owSkJRM1pFTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hoUVVGaExEaEVRVUU0UkN4RFFVRkRMRU5CUVVNN1lVRkRjRWM3V1VGRFJDeEpRVUZKTEV0QlFVc3NSVUZCUlR0blFrRkRVQ3hKUVVGSkxGVkJRVlVzUjBGQlJ5eExRVUZMTEVOQlFVTTdaMEpCUTNaQ0xFbEJRVWtzUTBGQlF5eHJRa0ZCVnl4RFFVRkRMRXRCUVVzc1EwRkJRenR2UWtGQlJTeFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVU5vUml4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExHRkJRV0VzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXp0blFrRkRPVU1zVlVGQlZTeEhRVUZITEcxRFFVRTBRaXhEUVVGRExFbEJRVWtzUlVGQlJTeGhRVUZoTEVOQlFVTXNRMEZCUXp0blFrRkRMMFFzU1VGQlNTeFJRVUZSTzI5Q1FVRlJMRWxCUVVzc1EwRkJReXhoUVVGaExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTTdZVUZEZWtRN08yZENRVUZOTEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03VVVGREwwTXNRMEZCUXp0UlFWRk5MR1ZCUVdVc1EwRkJReXhoUVVGeFFqdFpRVU40UXl4SlFVRkpMRWxCUVVrc1EwRkJReXhWUVVGVkxFbEJRVWtzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1lVRkJZU3hEUVVGRExFVkJRVVU3WjBKQlEzWkVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeGhRVUZoTEd0RlFVRnJSU3hEUVVGRExFTkJRVU03WVVGRGVFYzdXVUZEUkN4TFFVRkxMRU5CUVVNc1pVRkJaU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzFsQlF5OUNMRWxCUVVzc1EwRkJReXhoUVVGaExFTkJRVU1zUjBGQlJ5eFRRVUZUTEVOQlFVTTdVVUZETTBNc1EwRkJRenRSUVZWTkxFMUJRVTA3V1VGRFZDeE5RVUZOTEVsQlFVa3NSMEZCYlVJc1JVRkJSU3hEUVVGRE8xbEJRMmhETEV0QlFVc3NUVUZCVFN4SFFVRkhMRWxCUVVrc1NVRkJTU3hGUVVGRk8yZENRVU53UWl4SlFVRkpMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eFRRVUZUTEVWQlFVVTdiMEpCUTNwQ0xFMUJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenR2UWtGRE1VSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF6dHBRa0ZEZGtJN1lVRkRTanRaUVVORUxFOUJRVThzU1VGQlNTeERRVUZETzFGQlEyaENMRU5CUVVNN1VVRlhVeXh0UWtGQmJVSXNRMEZCUXl4SFFVRkhMRXRCUVZrN1dVRkZla01zU1VGQlNTeERRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlpMRU5CUVVNc1QwRkJUeXhGUVVGRk8yZENRVVZzUXl4SlFVRkpMR0ZCUVdFc1IwRkJSeXhKUVVGSkxFTkJRVU03WjBKQlEzcENMRWxCUVVrc1pVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNSVUZCUlR0dlFrRkRMMElzWVVGQllTeEhRVUZITEhWQ1FVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUlVGQlJTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNN2FVSkJRekZGTzJkQ1FVTkVMRWxCUVVrc1pVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNSVUZCUlR0dlFrRkRMMElzWVVGQllTeEhRVUZqTEVsQlFVa3NRMEZCUXl4alFVRmxMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXp0cFFrRkRMMFU3WjBKQlEwUXNTVUZCU1N4aFFVRmhMRVZCUVVVN2IwSkJRMllzVFVGQlRTeFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhGUVVGRkxFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMjlDUVVOMlJDeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRk5CUVZNc1JVRkJSU3hEUVVGRExHVkJRV1VzUTBGQlF5eGhRVUZoTEVWQlFVVXNWMEZCVnl4RFFVRkRMRU5CUVVNN2IwSkJRM2hGTEZWQlFWVXNRMEZCUXl4WFFVRlhMRU5CUVZrc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0cFFrRkRNVVE3WVVGRFNqdFJRVU5NTEVOQlFVTTdVVUZSVXl4cFFrRkJhVUlzUzBGQlZ5eERRVUZETzFGQlV6ZENMRzlDUVVGdlFpeExRVUZYTEVOQlFVTTdVVUZUYUVNc1pVRkJaU3hMUVVGWExFTkJRVU03VVVGUk0wSXNZVUZCWVN4TFFVRlhMRU5CUVVNN1VVRlJla0lzWjBKQlFXZENMRXRCUVZjc1EwRkJRenRSUVZNNVFpeG5Ra0ZCWjBJN1dVRkRjRUlzVFVGQlRTeFRRVUZUTEVkQlFVY3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMWxCUXk5RUxFMUJRVTBzVlVGQlZTeEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVONlJpeFBRVUZQTEVkQlFVY3NVMEZCVXl4SlFVRkpMRlZCUVZVc1JVRkJSU3hEUVVGRE8xRkJRM2hETEVOQlFVTTdPMGxCYUZGelFpdzJRa0ZCWlN4SFFVRlpMRWxCUVVrc1EwRkJRenRKUVhsQ01VTTdVVUZCV2l4elFrRkJVeXhGUVVGRk96czJRMEZCTmtNN1NVRlJOME03VVVGQldDeHhRa0ZCVVN4RlFVRkZPenN3UkVGQmFVUTdTVUZUYUVRN1VVRkJXQ3h4UWtGQlVTeEZRVUZGT3p0dlJFRkJhMFk3U1VGVmRrUTdVVUZCY2tNc2NVSkJRVkVzUTBGQlF5eEZRVUZGTEdkQ1FVRm5RaXhGUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZET3p0NVJFRkJiVVk3U1VGWE5VYzdVVUZCV0N4eFFrRkJVU3hGUVVGRk96aEVRVUV5UWl4alFVRmpMRzlDUVVGa0xHTkJRV003ZVVSQlFVMDdTVUZ2VFRsRUxFOUJRVThzWVVGQllTeERRVUZETzBGQlEzcENMRU5CUVVNN1FVRm9VMFFzYjBSQloxTkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBCYXNlQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICBjb25zdHJ1Y3RlZENhbGxiYWNrKCkgeyB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7IH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHsgfVxuICAgIGFkb3B0ZWRDYWxsYmFjaygpIHsgfVxufVxuZXhwb3J0cy5CYXNlQ29udHJvbGxlciA9IEJhc2VDb250cm9sbGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUW1GelpVTnZiblJ5YjJ4c1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMk5zYVdWdWRDOTBjeTlzYVdJdlFtRnpaVU52Ym5SeWIyeHNaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRlBRU3hOUVVGaExHTkJRV003U1VGRmRrSXNaMEpCUVdkQ0xFTkJRVU03U1VGVFVDeHRRa0ZCYlVJc1MwRkJTeXhEUVVGRE8wbEJVWHBDTEdsQ1FVRnBRaXhMUVVGTExFTkJRVU03U1VGVGRrSXNiMEpCUVc5Q0xFdEJRVXNzUTBGQlF6dEpRVk14UWl4bFFVRmxMRXRCUVVzc1EwRkJRenREUVVOc1F6dEJRWFJEUkN4M1EwRnpRME1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xudmFyIENsaWVudE1vZGVsXzE7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IEJET01vZGVsXzEgPSByZXF1aXJlKFwifmJkby9saWIvQkRPTW9kZWxcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmNsaWVudC91dGlscy91dGlsXCIpO1xuY29uc3QgZnJhbWV3b3JrXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9mcmFtZXdvcmtcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCBMb2dnZXJfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9Mb2dnZXJcIik7XG5jb25zdCBEYXRhYmFzZU1hbmFnZXJfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9EYXRhYmFzZU1hbmFnZXJcIik7XG5jb25zdCBXYXRjaGVkXzEgPSByZXF1aXJlKFwifmJkby9saWIvV2F0Y2hlZFwiKTtcbmNvbnN0IHV0aWxfMiA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBNb2RlbFJlZ2lzdHJ5XzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kZWxSZWdpc3RyeVwiKTtcbmNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXJfMS5Mb2dnZXIoKTtcbmNvbnN0IGRhdGFiYXNlTWFuYWdlciA9IERhdGFiYXNlTWFuYWdlcl8xLkRhdGFiYXNlTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xubGV0IENsaWVudE1vZGVsID0gQ2xpZW50TW9kZWxfMSA9IGNsYXNzIENsaWVudE1vZGVsIGV4dGVuZHMgQkRPTW9kZWxfMS5CRE9Nb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuaXNDbGllbnRNb2RlbCA9IHRydWU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZUJ5SUQoaWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbW9kZWwgPSBNb2RlbFJlZ2lzdHJ5XzEuTW9kZWxSZWdpc3RyeS5nZXRJbnN0YW5jZSgpLmdldE1vZGVsQnlJZChpZCwgdGhpcyk7XG4gICAgICAgICAgICBpZiAoIW1vZGVsKVxuICAgICAgICAgICAgICAgIG1vZGVsID0gbmV3IHRoaXMoKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFGcm9tTG9jYWxEQiA9IGF3YWl0IGRhdGFiYXNlTWFuYWdlclxuICAgICAgICAgICAgICAgIC5kYXRhYmFzZShtb2RlbC5kYXRhYmFzZU5hbWUpXG4gICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24obW9kZWwuY29sbGVjdGlvbk5hbWUpXG4gICAgICAgICAgICAgICAgLmdldChpZCk7XG4gICAgICAgICAgICBpZiAoZGF0YUZyb21Mb2NhbERCKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGVuZGluZ1Byb21pc2VzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YUZyb21Mb2NhbERCKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhRnJvbUxvY2FsREIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kZWxFbGVtID0gUmVmbGVjdC5nZXQobW9kZWwsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga2xhc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbSA9IGRhdGFGcm9tTG9jYWxEQltrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvcnJlc3BvbmRpbmdMaXN0TGlrZURCID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWxFbGVtIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JyZXNwb25kaW5nTGlzdExpa2VEQiA9IG1vZGVsRWxlbS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBDbGllbnRNb2RlbF8xKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZ2V0UmVmZXJlbmNlU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0gaW5zdGFuY2VvZiBBcnJheSAmJiB1dGlsXzIuZGlmZmVyZW5jZShjb3JyZXNwb25kaW5nTGlzdExpa2VEQiwgZWxlbSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGVuZGluZ0l0ZW1zID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBlbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmcmFtZXdvcmtfMS5pc1JlZmVyZW5jZVN0cmluZyhpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmUGFydHMgPSBpdGVtLnNwbGl0KFwiOlwiKVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHJlZlBhcnRzWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2xhc3MgPSByZXF1aXJlKGAuLy4uL21vZGVscy8ke2NsYXNzTmFtZX0udHNgKVtjbGFzc05hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ0l0ZW1zLnB1c2goa2xhc3MuZ2V0SW5zdGFuY2VCeUlEKHJlZlBhcnRzWzJdKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmdQcm9taXNlcy5wdXNoKFByb21pc2UuYWxsKHBlbmRpbmdJdGVtcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZnJhbWV3b3JrXzEuaXNSZWZlcmVuY2VTdHJpbmcoZWxlbSkgJiYgZWxlbSAhPT0gbW9kZWwuZ2V0UmVmZXJlbmNlU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZQYXJ0cyA9IGVsZW0uc3BsaXQoXCI6XCIpWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHJlZlBhcnRzWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtsYXNzID0gcmVxdWlyZShgLi8uLi9tb2RlbHMvJHtjbGFzc05hbWV9LnRzYClbY2xhc3NOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nUHJvbWlzZXMucHVzaChrbGFzcy5nZXRJbnN0YW5jZUJ5SUQocmVmUGFydHNbMl0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwZW5kaW5nUHJvbWlzZXMpO1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obW9kZWwsIGRhdGFGcm9tTG9jYWxEQik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW1vZGVsLmlkLmluY2x1ZGVzKFwicGVuZGluZ1wiKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShtb2RlbCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlc0J5QXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBNb2RlbFJlZ2lzdHJ5XzEuTW9kZWxSZWdpc3RyeS5nZXRJbnN0YW5jZSgpLmdldE1vZGVsc0J5QXR0cmlidXRlcyhhdHRyaWJ1dGVzKTtcbiAgICB9XG4gICAgZ2V0TmFtZXNwYWNlZFN0b3JhZ2Uoa2V5LCBuc1Byb3AsIGZvcmNlTlMpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxfMS5nZXROYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5zUHJvcCwgZm9yY2VOUyk7XG4gICAgfVxuICAgIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGtleSwgbmV3VmFsLCBuc1Byb3ApIHtcbiAgICAgICAgcmV0dXJuIHV0aWxfMS5zZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5ld1ZhbCwgbnNQcm9wKTtcbiAgICB9XG4gICAgZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlKGtleSwgbnNQcm9wKSB7XG4gICAgICAgIHJldHVybiB1dGlsXzEuZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlKHRoaXMsIGtleSwgbnNQcm9wKTtcbiAgICB9XG4gICAgYXN5bmMgc2F2ZShhdHRyKSB7XG4gICAgICAgIGNvbnN0IGRlZmluZWRBdHRyaWJ1dGVzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLCBcImRlZmluZWRBdHRyaWJ1dGVzXCIpO1xuICAgICAgICBpZiAoIWRlZmluZWRBdHRyaWJ1dGVzIHx8IGF0dHIgJiYgIWRlZmluZWRBdHRyaWJ1dGVzLmluY2x1ZGVzKGF0dHIpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBkZWZpbmVkIGF0dHJpYnV0ZXNcIik7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBhdHRyID8gW2F0dHJdIDogZGVmaW5lZEF0dHJpYnV0ZXM7XG4gICAgICAgIGNvbnN0IHVuc2F2ZWRDaGFuZ2VzID0gYXdhaXQgdGhpcy5nZXRVbnNhdmVkQ2hhbmdlcygpO1xuICAgICAgICBjb25zdCB0b1NhdmUgPSB7fTtcbiAgICAgICAgY29uc3Qgc2VuZFRvU2VydmVyID0ge307XG4gICAgICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGlmICh1bnNhdmVkQ2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyQXR0ciA9IGF0dHJpYnV0ZTtcbiAgICAgICAgICAgICAgICBsZXQgcHJveHlWYWwgPSB1dGlsXzIuZ2V0UHJveHlUYXJnZXQodW5zYXZlZENoYW5nZXNbc3RyQXR0cl0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm94eVZhbCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3h5VmFsID0gcHJveHlWYWwubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIENsaWVudE1vZGVsXzEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5nZXRSZWZlcmVuY2VTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlsXzIuZ2V0UHJveHlUYXJnZXQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJveHlWYWwgaW5zdGFuY2VvZiBDbGllbnRNb2RlbF8xKVxuICAgICAgICAgICAgICAgICAgICBwcm94eVZhbCA9IHByb3h5VmFsLmdldFJlZmVyZW5jZVN0cmluZygpO1xuICAgICAgICAgICAgICAgIGxldCB3aWxkQ2FyZE1ldGFkYXRhID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMsIHN0ckF0dHIpO1xuICAgICAgICAgICAgICAgIGlmICh3aWxkQ2FyZE1ldGFkYXRhIGluc3RhbmNlb2YgV2F0Y2hlZF8xLldhdGNoZWQpXG4gICAgICAgICAgICAgICAgICAgIHdpbGRDYXJkTWV0YWRhdGEgPSB3aWxkQ2FyZE1ldGFkYXRhLnN1Yk9iamVjdDtcbiAgICAgICAgICAgICAgICBpZiAoIXdpbGRDYXJkTWV0YWRhdGEuZG9Ob3RQZXJzaXN0KVxuICAgICAgICAgICAgICAgICAgICB0b1NhdmVbc3RyQXR0cl0gPSBwcm94eVZhbDtcbiAgICAgICAgICAgICAgICBpZiAoIXdpbGRDYXJkTWV0YWRhdGEubm9TZXJ2ZXJJbnRlcmFjdGlvbilcbiAgICAgICAgICAgICAgICAgICAgc2VuZFRvU2VydmVyW3N0ckF0dHJdID0gcHJveHlWYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh0b1NhdmUpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRhdGFiYXNlTWFuYWdlclxuICAgICAgICAgICAgICAgICAgICAuZGF0YWJhc2UodGhpcy5kYXRhYmFzZU5hbWUpXG4gICAgICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbk5hbWUpXG4gICAgICAgICAgICAgICAgICAgIC51cGRhdGUodGhpcy5pZCwgdG9TYXZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhzZW5kVG9TZXJ2ZXIpLmxlbmd0aClcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYHNlbmQgJHtKU09OLnN0cmluZ2lmeShzZW5kVG9TZXJ2ZXIpfSB0byBzZXJ2ZXJgKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bnNhdmVkQ2hhbmdlcyk7XG4gICAgfVxuICAgIGRpc2NhcmQoX2F0dHIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIGFzeW5jIGdldFVuc2F2ZWRDaGFuZ2VzKCkge1xuICAgICAgICBpZiAoIXRoaXMuY29sbGVjdGlvbk5hbWUpXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJObyBjb2xsZWN0aW9uTmFtZSBwcm92aWRlZFwiKTtcbiAgICAgICAgY29uc3QgdW5zYXZlZENoYW5nZXMgPSB7fTtcbiAgICAgICAgbGV0IGRiQ29sbGVjdGlvbiA9IGF3YWl0IGRhdGFiYXNlTWFuYWdlci5kYXRhYmFzZShcImRlZmF1bHRcIikuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb25OYW1lKS5nZXQodGhpcy5pZCk7XG4gICAgICAgIGNvbnN0IGRlZmluZWRBdHRyaWJ1dGVzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLCBcImRlZmluZWRBdHRyaWJ1dGVzXCIpIHx8IFtdO1xuICAgICAgICBkYkNvbGxlY3Rpb24gPSBkYkNvbGxlY3Rpb24gfHwge307XG4gICAgICAgIGZvciAoY29uc3QgYXR0ciBvZiBkZWZpbmVkQXR0cmlidXRlcykge1xuICAgICAgICAgICAgY29uc3Qgc3RyQXR0ciA9IGF0dHI7XG4gICAgICAgICAgICBjb25zdCBhdHRyVmFsID0gdXRpbF8yLmdldFByb3h5VGFyZ2V0KHRoaXNbYXR0cl0pO1xuICAgICAgICAgICAgaWYgKHV0aWxfMi5pc0FycmF5KGF0dHJWYWwpICYmIHV0aWxfMi5kaWZmZXJlbmNlKGF0dHJWYWwsIGRiQ29sbGVjdGlvbltzdHJBdHRyXSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdW5zYXZlZENoYW5nZXNbc3RyQXR0cl0gPSB0aGlzW2F0dHJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodXRpbF8yLmlzT2JqZWN0KGF0dHJWYWwpICYmICF1dGlsXzIuaXNFcXVhbChhdHRyVmFsLCBkYkNvbGxlY3Rpb25bc3RyQXR0cl0pKSB7XG4gICAgICAgICAgICAgICAgdW5zYXZlZENoYW5nZXNbc3RyQXR0cl0gPSB0aGlzW2F0dHJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodXRpbF8yLmlzUHJpbWl0aXZlKGF0dHJWYWwpICYmIGF0dHJWYWwgIT09IGRiQ29sbGVjdGlvbltzdHJBdHRyXSkge1xuICAgICAgICAgICAgICAgIHVuc2F2ZWRDaGFuZ2VzW3N0ckF0dHJdID0gdGhpc1thdHRyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuc2F2ZWRDaGFuZ2VzKTtcbiAgICB9XG4gICAgb25UeXBlQ2hlY2tGYWlsKGVycm9yKSB7XG4gICAgICAgIGxvZ2dlci5lcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9XG59O1xuQ2xpZW50TW9kZWwuaXNDbGllbnRNb2RlbCA9IHRydWU7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG5dLCBDbGllbnRNb2RlbC5wcm90b3R5cGUsIFwiaXNDbGllbnRNb2RlbFwiLCB2b2lkIDApO1xuQ2xpZW50TW9kZWwgPSBDbGllbnRNb2RlbF8xID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKClcbl0sIENsaWVudE1vZGVsKTtcbmV4cG9ydHMuQ2xpZW50TW9kZWwgPSBDbGllbnRNb2RlbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyeHBaVzUwVFc5a1pXd3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMk5zYVdWdWRDOTBjeTlzYVdJdlEyeHBaVzUwVFc5a1pXd3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJMSE5FUVVGclJUdEJRVU5zUlN4blJFRkJOa003UVVGRE4wTXNOa05CUVcxSU8wRkJRMjVJTEc5RVFVRjVSRHRCUVVONlJDeHJSRUZCZFVVN1FVRkRka1VzSzBOQlFUUkRPMEZCUXpWRExHbEZRVUU0UkR0QlFVVTVSQ3c0UTBGQk1rTTdRVUZETTBNc01FTkJRWE5ITzBGQlEzUkhMREJFUVVGMVJEdEJRVVYyUkN4TlFVRk5MRTFCUVUwc1IwRkJSeXhKUVVGSkxHVkJRVTBzUlVGQlJTeERRVUZETzBGQlF6VkNMRTFCUVUwc1pVRkJaU3hIUVVGSExHbERRVUZsTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1FVRlhkRVFzU1VGQllTeFhRVUZYTEcxQ1FVRjRRaXhOUVVGaExGZEJRVmtzVTBGQlVTeHRRa0ZCVVR0SlFVRjZRenM3VVVGclFtZERMR3RDUVVGaExFZEJRVmtzU1VGQlNTeERRVUZETzBsQlowODVSQ3hEUVVGRE8wbEJhRTVWTEUxQlFVMHNRMEZCUXl4bFFVRmxMRU5CUVRKRExFVkJRVmM3VVVGREwwVXNUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJaMElzUzBGQlN5eEZRVUZGTEU5QlFVOHNSVUZCUlN4RlFVRkZPMWxCUTJoRUxFbEJRVWtzUzBGQlN5eEhRVUZITERaQ1FVRmhMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zV1VGQldTeERRVUZETEVWQlFVVXNSVUZCUlN4SlFVRkpMRU5CUVd0Q0xFTkJRVU03V1VGRGFFWXNTVUZCU1N4RFFVRkRMRXRCUVVzN1owSkJRVVVzUzBGQlN5eEhRVUZITEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNN1dVRkRMMElzVFVGQlRTeGxRVUZsTEVkQlFVY3NUVUZCVFN4bFFVRmxPMmxDUVVONFF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJRenRwUWtGRE5VSXNWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU03YVVKQlEyaERMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU5pTEVsQlFVa3NaVUZCWlN4RlFVRkZPMmRDUVVOcVFpeE5RVUZOTEdWQlFXVXNSMEZCZDBJc1JVRkJSU3hEUVVGRE8yZENRVU5vUkN4TFFVRkxMRTFCUVUwc1IwRkJSeXhKUVVGSkxHVkJRV1VzUlVGQlJUdHZRa0ZETDBJc1NVRkJTU3hsUVVGbExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPM2RDUVVOeVF5eE5RVUZOTEZOQlFWTXNSMEZCUnl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0M1FrRkRNVU1zU1VGQlNTeExRVUY1UWl4RFFVRkRPM2RDUVVNNVFpeEpRVUZKTEVsQlFVa3NSMEZCUnl4bFFVRmxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03ZDBKQlEyaERMRWxCUVVrc2RVSkJRWFZDTEVkQlFVY3NSVUZCUlN4RFFVRkRPM2RDUVVWcVF5eEpRVUZKTEZOQlFWTXNXVUZCV1N4TFFVRkxMRVZCUVVVN05FSkJRelZDTEhWQ1FVRjFRaXhIUVVGSExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSVHRuUTBGRE4wTXNTVUZCU1N4SlFVRkpMRmxCUVZrc1lVRkJWenR2UTBGQlJTeFBRVUZQTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUlVGQlJTeERRVUZETzJkRFFVTnNSU3hQUVVGUExFbEJRVWtzUTBGQlF6czBRa0ZEYUVJc1EwRkJReXhEUVVGRExFTkJRVU03ZVVKQlEwNDdkMEpCUTBRc1NVRkJTU3hKUVVGSkxGbEJRVmtzUzBGQlN5eEpRVUZKTEdsQ1FVRlZMRU5CUVVNc2RVSkJRWFZDTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1RVRkJUU3hGUVVGRk96UkNRVU16UlN4TlFVRk5MRmxCUVZrc1IwRkJkMElzUlVGQlJTeERRVUZET3pSQ1FVTTNReXhMUVVGTExFbEJRVWtzU1VGQlNTeEpRVUZKTEVsQlFVa3NSVUZCUlR0blEwRkRia0lzU1VGQlNTdzJRa0ZCYVVJc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdHZRMEZEZWtJc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRMEZEY0VNc1RVRkJUU3hUUVVGVExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlEUVVNNVFpeExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRMR1ZCUVdVc1UwRkJVeXhMUVVGTExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0dlEwRkRNVVFzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1pVRkJaU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTzNkRFFVTnFSU3hKUVVGSkxFZEJRVWNzVFVGQlRTeERRVUZETzI5RFFVTnNRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJsRFFVTlFPelpDUVVOS096UkNRVU5FTEdWQlFXVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRPM2xDUVVOdVJEczJRa0ZCVFN4SlFVRkpMRFpDUVVGcFFpeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRWxCUVVrc1MwRkJTeXhMUVVGTExFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1JVRkJSVHMwUWtGRGRrVXNUVUZCVFN4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenMwUWtGRGNFTXNUVUZCVFN4VFFVRlRMRWRCUVVjc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZET3pSQ1FVTTVRaXhMUVVGTExFZEJRVWNzVDBGQlR5eERRVUZETEdWQlFXVXNVMEZCVXl4TFFVRkxMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6czBRa0ZETVVRc1pVRkJaU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNaVUZCWlN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hGUVVGRk8yZERRVU53UlN4SlFVRkpMRWRCUVVjc1RVRkJUU3hEUVVGRE96UkNRVU5zUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8zbENRVU5RTzNGQ1FVTktPMmxDUVVOS08yZENRVU5FTEUxQlFVMHNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF6dG5Ra0ZEYmtNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNaVUZCWlN4RFFVRkRMRU5CUVVNN1lVRkRla003V1VGRFJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zVTBGQlV5eERRVUZETzJkQ1FVRkZMRTlCUVU4c1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlEzcEVMRTlCUVU4c1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGRGNrSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRVQ3hEUVVGRE8wbEJZVTBzVFVGQlRTeERRVUZETEhkQ1FVRjNRaXhEUVVFeVF5eFZRVUV3UWp0UlFVTjJSeXhQUVVGUExEWkNRVUZoTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNWVUZCVlN4RFFVRnJRaXhEUVVGRE8wbEJRekZHTEVOQlFVTTdTVUZaVFN4dlFrRkJiMElzUTBGQlF5eEhRVUZYTEVWQlFVVXNUVUZCWlN4RlFVRkZMRTlCUVdkQ08xRkJRM1JGTEU5QlFVOHNNa0pCUVc5Q0xFTkJRVU1zU1VGQlNTeEZRVUZGTEVkQlFVY3NSVUZCUlN4TlFVRk5MRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRE5VUXNRMEZCUXp0SlFWbE5MREJDUVVFd1FpeERRVUZETEVkQlFWY3NSVUZCUlN4TlFVRlhMRVZCUVVVc1RVRkJaVHRSUVVOMlJTeFBRVUZQTEdsRFFVRXdRaXhEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVWQlFVVXNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRMnBGTEVOQlFVTTdTVUZYVFN3eVFrRkJNa0lzUTBGQlF5eEhRVUZYTEVWQlFVVXNUVUZCWlR0UlFVTXpSQ3hQUVVGUExHdERRVUV5UWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdTVUZETVVRc1EwRkJRenRKUVZGTkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCWjBNN1VVRkRPVU1zVFVGQlRTeHBRa0ZCYVVJc1IwRkJSeXh6UWtGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlN4dFFrRkJiVUlzUTBGQlF5eERRVUZETzFGQlEycEZMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNTVUZCU1N4SlFVRkpMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRE8xbEJRVVVzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl3MFFrRkJORUlzUTBGQlF5eERRVUZETzFGQlEyNUlMRTFCUVUwc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zYVVKQlFXbENMRU5CUVVNN1VVRkRja1FzVFVGQlRTeGpRVUZqTEVkQlFXMUNMRTFCUVUwc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RlFVRkZMRU5CUVVNN1VVRkRkRVVzVFVGQlRTeE5RVUZOTEVkQlFXMUNMRVZCUVVVc1EwRkJRenRSUVVOc1F5eE5RVUZOTEZsQlFWa3NSMEZCYlVJc1JVRkJSU3hEUVVGRE8xRkJRM2hETEV0QlFVc3NUVUZCVFN4VFFVRlRMRWxCUVVrc1ZVRkJWU3hGUVVGRk8xbEJRMmhETEVsQlFVa3NZMEZCWXl4RFFVRkRMR05CUVdNc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJUdG5Ra0ZETVVNc1RVRkJUU3hQUVVGUExFZEJRVmNzVTBGQlV5eERRVUZETzJkQ1FVTnNReXhKUVVGSkxGRkJRVkVzUjBGQlJ5eHhRa0ZCWXl4RFFVRkRMR05CUVdNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjJSQ3hKUVVGSkxGRkJRVkVzV1VGQldTeExRVUZMTEVWQlFVVTdiMEpCUXpOQ0xGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFVkJRVVU3ZDBKQlF6ZENMRWxCUVVrc1NVRkJTU3haUVVGWkxHRkJRVmNzUlVGQlJUczBRa0ZETjBJc1QwRkJUeXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1EwRkJRenQ1UWtGRGNFTTdkMEpCUTBRc1QwRkJUeXh4UWtGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMjlDUVVOb1F5eERRVUZETEVOQlFVTXNRMEZCUXp0cFFrRkRUanRuUWtGRFJDeEpRVUZKTEZGQlFWRXNXVUZCV1N4aFFVRlhPMjlDUVVGRkxGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzUTBGQlF6dG5Ra0ZGT1VVc1NVRkJTU3huUWtGQlowSXNSMEZCWXl3NFFrRkJiVUlzUTBGQlF5eEpRVUZKTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1owSkJRM0pGTEVsQlFVa3NaMEpCUVdkQ0xGbEJRVmtzYVVKQlFVODdiMEpCUVVVc1owSkJRV2RDTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU1zVTBGQmMwSXNRMEZCUXp0blFrRkZjRWNzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExGbEJRVms3YjBKQlFVVXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF6dG5Ra0ZGTDBRc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRzFDUVVGdFFqdHZRa0ZCUlN4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETzJGQlF5OUZPMU5CUTBvN1VVRkRSQ3hKUVVGSk8xbEJRMEVzU1VGQlNTeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJUdG5Ra0ZETlVJc1RVRkJUU3hsUVVGbE8zRkNRVU5vUWl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF6dHhRa0ZETTBJc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTTdjVUpCUXk5Q0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8yRkJRMmhETzFsQlEwUXNTVUZCU1N4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEUxQlFVMDdaMEpCUVVVc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1dVRkJXU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzFOQlEzaEhPMUZCUVVNc1QwRkJUeXhMUVVGTExFVkJRVVU3V1VGRFdpeFBRVUZQTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VTBGRGFFTTdVVUZEUkN4UFFVRlBMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zWTBGQmJVTXNRMEZCUXl4RFFVRkRPMGxCUTJoRkxFTkJRVU03U1VGVFRTeFBRVUZQTEVOQlFVTXNTMEZCYVVNN1VVRkROVU1zVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eERRVUZETzBsQlF5OURMRU5CUVVNN1NVRlJUU3hMUVVGTExFTkJRVU1zYVVKQlFXbENPMUZCUXpGQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXp0WlFVRkZMRTlCUVU4c1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5dzBRa0ZCTkVJc1EwRkJReXhEUVVGRE8xRkJRemxGTEUxQlFVMHNZMEZCWXl4SFFVRnpRaXhGUVVGRkxFTkJRVU03VVVGRE4wTXNTVUZCU1N4WlFVRlpMRWRCUVVjc1RVRkJUU3hsUVVGbExFTkJRVU1zVVVGQlVTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU14Unl4TlFVRk5MR2xDUVVGcFFpeEhRVUZITEhOQ1FVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxHMUNRVUZ0UWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRM1pGTEZsQlFWa3NSMEZCUnl4WlFVRlpMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRMnhETEV0QlFVc3NUVUZCVFN4SlFVRkpMRWxCUVVrc2FVSkJRV2xDTEVWQlFVVTdXVUZEYkVNc1RVRkJUU3hQUVVGUExFZEJRVmNzU1VGQlNTeERRVUZETzFsQlF6ZENMRTFCUVUwc1QwRkJUeXhIUVVGSExIRkNRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE0wTXNTVUZCU1N4alFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzYVVKQlFWVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZPMmRDUVVOMFJDeGpRVUZsTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJGQlF6RkVPMmxDUVVGTkxFbEJRVWtzWlVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJTeFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1JVRkJSVHRuUWtGRGNrUXNZMEZCWlN4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0aFFVTXhSRHRwUWtGQlRTeEpRVUZKTEd0Q1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzVDBGQlR5eExRVUZMTEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSVHRuUWtGRGFrUXNZMEZCWlN4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0aFFVTXhSRHRUUVVOS08xRkJRMFFzVDBGQlR5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRE8wbEJRek5ETEVOQlFVTTdTVUZWVXl4bFFVRmxMRU5CUVVNc1MwRkJXVHRSUVVOc1F5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dEpRVU5vUXl4RFFVRkRPME5CUlVvc1EwRkJRVHRCUVhoUE1FSXNlVUpCUVdFc1IwRkJXU3hKUVVGSkxFTkJRVU03UVVGUmVrTTdTVUZCV0N4eFFrRkJVU3hGUVVGRk96dHJSRUZCSzBNN1FVRnNRbXBFTEZkQlFWYzdTVUZFZGtJc05FSkJRV1VzUlVGQlJUdEhRVU5NTEZkQlFWY3NRMEZyVUhaQ08wRkJiRkJaTEd0RFFVRlhJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBCRE9Sb3V0ZV8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET1JvdXRlXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IExvZ2dlcl8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0xvZ2dlclwiKTtcbmNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXJfMS5Mb2dnZXIoKTtcbmNsYXNzIENsaWVudFJvdXRlIGV4dGVuZHMgQkRPUm91dGVfMS5CRE9Sb3V0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuaXNDbGllbnRSb3V0ZSA9IHRydWU7XG4gICAgfVxuICAgIGdldCByb3V0ZXIoKSB7XG4gICAgICAgIGNvbnN0IHJvdXRlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIHRoaXMucm91dGVzKSB7XG4gICAgICAgICAgICByb3V0ZXNbYCR7dGhpcy5yb3V0ZXJOYW1lU3BhY2V9LyR7cm91dGV9YC5yZXBsYWNlKFwiLy9cIiwgXCIvXCIpXSA9IHRoaXMuaGFuZGxlR2V0LmJpbmQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvdXRlcztcbiAgICB9XG4gICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBzdXBlci50ZW1wbGF0ZVBhcmFtcyhwYXJhbXMpO1xuICAgIH1cbiAgICBhc3luYyBoYW5kbGVHZXQocGFyYW1zKSB7XG4gICAgICAgIGxvZ2dlci5sb2codXRpbF8xLm1lcmdlKGF3YWl0IHRoaXMudGVtcGxhdGVQYXJhbXNGcm9tU2VydmVyKCksIGF3YWl0IHRoaXMudGVtcGxhdGVQYXJhbXMocGFyYW1zKSkpO1xuICAgIH1cbiAgICBhc3luYyB0ZW1wbGF0ZVBhcmFtc0Zyb21TZXJ2ZXIoKSB7XG4gICAgICAgIGxldCB1cmxUb0Fza0ZvciA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICBpZiAoIXVybFRvQXNrRm9yKVxuICAgICAgICAgICAgdXJsVG9Bc2tGb3IgPSBgL2A7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdYLUdhbWUtQXMtSlNPTic6ICd0cnVlJyB9KTtcbiAgICAgICAgcmV0dXJuIChhd2FpdCBmZXRjaCh1cmxUb0Fza0ZvciwgeyBoZWFkZXJzIH0pKS5qc29uKCk7XG4gICAgfVxufVxuZXhwb3J0cy5DbGllbnRSb3V0ZSA9IENsaWVudFJvdXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTJ4cFpXNTBVbTkxZEdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyTnNhV1Z1ZEM5MGN5OXNhV0l2UTJ4cFpXNTBVbTkxZEdVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN4blJFRkJOa003UVVGRE4wTXNNRU5CUVhkRE8wRkJRM2hETEN0RFFVRTBRenRCUVVVMVF5eE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMR1ZCUVUwc1JVRkJSU3hEUVVGRE8wRkJWVFZDTEUxQlFXRXNWMEZCV1N4VFFVRlJMRzFDUVVGUk8wbEJRWHBET3p0UlFWRnZRaXhyUWtGQllTeEhRVUZaTEVsQlFVa3NRMEZCUXp0SlFYTkViRVFzUTBGQlF6dEpRVGxEUnl4SlFVRlhMRTFCUVUwN1VVRkRZaXhOUVVGTkxFMUJRVTBzUjBGQlVTeEZRVUZGTEVOQlFVTTdVVUZEZGtJc1MwRkJTeXhOUVVGTkxFdEJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMWxCUXpkQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRWxCUVVrc1MwRkJTeXhGUVVGRkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xTkJRemRHTzFGQlEwUXNUMEZCVHl4TlFVRk5MRU5CUVVNN1NVRkRiRUlzUTBGQlF6dEpRVmRUTEV0QlFVc3NRMEZCUXl4alFVRmpMRU5CUVVNc1RVRkJjMEk3VVVGRGFrUXNUMEZCVHl4TFFVRkxMRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlEzaERMRU5CUVVNN1NVRlRVeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFYTkNPMUZCUXpWRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNXVUZCU3l4RFFVRkRMRTFCUVUwc1NVRkJTU3hEUVVGRExIZENRVUYzUWl4RlFVRkZMRVZCUVVVc1RVRkJUU3hKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOb1J5eERRVUZETzBsQlZVOHNTMEZCU3l4RFFVRkRMSGRDUVVGM1FqdFJRVU5zUXl4SlFVRkpMRmRCUVZjc1IwRkJSeXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETzFGQlEzQkRMRWxCUVVrc1EwRkJReXhYUVVGWE8xbEJRVVVzVjBGQlZ5eEhRVUZITEVkQlFVY3NRMEZCUXp0UlFVTndReXhOUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEU5QlFVOHNRMEZCUXl4RlFVRkZMR2RDUVVGblFpeEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRNVVFzVDBGQlR5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRmRCUVZjc1JVRkJSU3hGUVVGRkxFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRKUVVNeFJDeERRVUZETzBOQlEwbzdRVUU1UkVRc2EwTkJPRVJESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQkRPQ29uZmlnTWFuYWdlcl8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET0NvbmZpZ01hbmFnZXJcIik7XG5jbGFzcyBDb25maWdNYW5hZ2VyIGV4dGVuZHMgQkRPQ29uZmlnTWFuYWdlcl8xLkJET0NvbmZpZ01hbmFnZXIge1xuICAgIHNldChfY29uZmlnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgbG9hZChfY29uZmlnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgZ2V0Q2FjaGUoX2NvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIHNldENhY2hlKF9jb25maWcsIF92YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxufVxuZXhwb3J0cy5Db25maWdNYW5hZ2VyID0gQ29uZmlnTWFuYWdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyOXVabWxuVFdGdVlXZGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDJ4cFlpOURiMjVtYVdkTllXNWhaMlZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUVzWjBWQlFUWkVPMEZCV1RkRUxFMUJRV0VzWVVGQll5eFRRVUZSTEcxRFFVRm5RanRKUVZONFF5eEhRVUZITEVOQlFVTXNUMEZCWlR0UlFVTjBRaXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhsQ1FVRjVRaXhEUVVGRExFTkJRVU03U1VGREwwTXNRMEZCUXp0SlFWVlRMRWxCUVVrc1EwRkJReXhQUVVGbE8xRkJRekZDTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2VVSkJRWGxDTEVOQlFVTXNRMEZCUXp0SlFVTXZReXhEUVVGRE8wbEJWVk1zVVVGQlVTeERRVUZETEU5QlFXVTdVVUZET1VJc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eDVRa0ZCZVVJc1EwRkJReXhEUVVGRE8wbEJReTlETEVOQlFVTTdTVUZYVXl4UlFVRlJMRU5CUVVNc1QwRkJaU3hGUVVGRkxFMUJRVmM3VVVGRE0wTXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4RFFVRkRPMGxCUXk5RExFTkJRVU03UTBGRFNqdEJRV3BFUkN4elEwRnBSRU1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJET0RhdGFiYXNlTWFuYWdlcl8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET0RhdGFiYXNlTWFuYWdlclwiKTtcbmNvbnN0IGxvY2FsZm9yYWdlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibG9jYWxmb3JhZ2VcIikpO1xuY2xhc3MgRGF0YWJhc2VNYW5hZ2VyIGV4dGVuZHMgQkRPRGF0YWJhc2VNYW5hZ2VyXzEuQkRPRGF0YWJhc2VtYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kYXRhYmFzZXMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFEYXRhYmFzZU1hbmFnZXIuaW5zdGFuY2UpXG4gICAgICAgICAgICBEYXRhYmFzZU1hbmFnZXIuaW5zdGFuY2UgPSBuZXcgRGF0YWJhc2VNYW5hZ2VyKCk7XG4gICAgICAgIHJldHVybiBEYXRhYmFzZU1hbmFnZXIuaW5zdGFuY2U7XG4gICAgfVxuICAgIGRhdGFiYXNlKG5hbWUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0YWJhc2UgPSBuYW1lO1xuICAgICAgICBpZiAoIXRoaXMuZGF0YWJhc2VzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFiYXNlcy5zZXQobmFtZSwgbG9jYWxmb3JhZ2VfMS5kZWZhdWx0LmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGRyaXZlcjogW2xvY2FsZm9yYWdlXzEuZGVmYXVsdC5JTkRFWEVEREIsIGxvY2FsZm9yYWdlXzEuZGVmYXVsdC5XRUJTUUxdXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudENvbGxlY3Rpb247XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRHcmFwaDtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudFZpZXc7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb2xsZWN0aW9uKG5hbWUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q29sbGVjdGlvbiA9IGBjb2xsZWN0aW9uXyR7bmFtZX1gO1xuICAgICAgICB0aGlzLmdldERhdGFiYXNlKCkuY29uZmlnKHsgc3RvcmVOYW1lOiB0aGlzLmN1cnJlbnRDb2xsZWN0aW9uIH0pO1xuICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50R3JhcGg7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRWaWV3O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdmlldyhuYW1lKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZXcgPSBgdmlld18ke25hbWV9YDtcbiAgICAgICAgdGhpcy5nZXREYXRhYmFzZSgpLmNvbmZpZyh7IHN0b3JlTmFtZTogdGhpcy5jdXJyZW50VmlldyB9KTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudENvbGxlY3Rpb247XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRHcmFwaDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdyYXBoKG5hbWUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50R3JhcGggPSBgZ3JhcGhfJHtuYW1lfWA7XG4gICAgICAgIHRoaXMuZ2V0RGF0YWJhc2UoKS5jb25maWcoeyBzdG9yZU5hbWU6IHRoaXMuY3VycmVudEdyYXBoIH0pO1xuICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50Q29sbGVjdGlvbjtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudFZpZXc7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5nZXRJdGVtKGlkKTtcbiAgICB9XG4gICAgaW5zZXJ0KGlkLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhYmFzZSgpLnNldEl0ZW0oaWQsIHZhbHVlKTtcbiAgICB9XG4gICAgdXBkYXRlKGlkLCB2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5nZXQoaWQpIHx8IHt9O1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVzdWx0LCB2YWx1ZXMpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuaW5zZXJ0KGlkLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZWxldGUoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5yZW1vdmVJdGVtKGlkKTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGFiYXNlKCkuY2xlYXIoKTtcbiAgICB9XG4gICAgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhYmFzZSgpLmxlbmd0aCgpO1xuICAgIH1cbiAgICBrZXkoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5rZXkoaW5kZXgpO1xuICAgIH1cbiAgICBrZXlzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhYmFzZSgpLmtleXMoKTtcbiAgICB9XG4gICAgaXRlcmF0ZShpdGVyYXRvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhYmFzZSgpLml0ZXJhdGUoaXRlcmF0b3IpO1xuICAgIH1cbiAgICBnZXREYXRhYmFzZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnREYXRhYmFzZSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIERhdGFiYXNlIGNob3NlblwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YWJhc2VzLmdldCh0aGlzLmN1cnJlbnREYXRhYmFzZSk7XG4gICAgfVxufVxuZXhwb3J0cy5EYXRhYmFzZU1hbmFnZXIgPSBEYXRhYmFzZU1hbmFnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSR0YwWVdKaGMyVk5ZVzVoWjJWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOWpiR2xsYm5RdmRITXZiR2xpTDBSaGRHRmlZWE5sVFdGdVlXZGxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkRRU3h2UlVGQmFVVTdRVUZEYWtVc2MwVkJRWE5ETzBGQlJYUkRMRTFCUVdFc1pVRkJkMFlzVTBGQlVTeDFRMEZCYTBJN1NVRnRRak5JTzFGQlEwa3NTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRlNTaXhqUVVGVExFZEJRWGRDTEVsQlFVa3NSMEZCUnl4RlFVRnJRaXhEUVVGRE8wbEJVMjVGTEVOQlFVTTdTVUZRVFN4TlFVRk5MRU5CUVVNc1YwRkJWenRSUVVOeVFpeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRkZCUVZFN1dVRkJSU3hsUVVGbExFTkJRVU1zVVVGQlVTeEhRVUZITEVsQlFVa3NaVUZCWlN4RlFVRkZMRU5CUVVNN1VVRkRhRVlzVDBGQlR5eGxRVUZsTEVOQlFVTXNVVUZCVVN4RFFVRkRPMGxCUTNCRExFTkJRVU03U1VGTlRTeFJRVUZSTEVOQlFVTXNTVUZCVHp0UlFVTnVRaXhKUVVGSkxFTkJRVU1zWlVGQlpTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTTFRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRGRFTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeEZRVUZGTEhGQ1FVRlhMRU5CUVVNc1kwRkJZeXhEUVVGRE8yZENRVU5vUkN4SlFVRkpMRVZCUVVVc1NVRkJTVHRuUWtGRFZpeE5RVUZOTEVWQlFVVXNRMEZCUXl4eFFrRkJWeXhEUVVGRExGTkJRVk1zUlVGQlJTeHhRa0ZCVnl4RFFVRkRMRTFCUVUwc1EwRkJRenRoUVVOMFJDeERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTlFPMUZCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNN1VVRkRPVUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRPMUZCUTNwQ0xFOUJRVThzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0UlFVTjRRaXhQUVVGUExFbEJRVWtzUTBGQlF6dEpRVU5vUWl4RFFVRkRPMGxCUlUwc1ZVRkJWU3hEUVVGRExFbEJRVTg3VVVGRGNrSXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEhRVUZOTEdOQlFXTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRha1FzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEycEZMRTlCUVU4c1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF6dFJRVU42UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRGVFSXNUMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkRhRUlzUTBGQlF6dEpRVVZOTEVsQlFVa3NRMEZCUXl4SlFVRlBPMUZCUTJZc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlRTeFJRVUZSTEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUTNKRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRNMFFzVDBGQlR5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU03VVVGRE9VSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRE8xRkJRM3BDTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTJoQ0xFTkJRVU03U1VGRlRTeExRVUZMTEVOQlFVTXNTVUZCVHp0UlFVTm9RaXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZOTEZOQlFWTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRka01zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNMVJDeFBRVUZQTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF6dFJRVU01UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRGVFSXNUMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkRhRUlzUTBGQlF6dEpRVVZOTEVkQlFVY3NRMEZCUXl4RlFVRlZPMUZCUTJwQ0xFOUJRVThzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU14UXl4RFFVRkRPMGxCUlUwc1RVRkJUU3hEUVVGRExFVkJRVlVzUlVGQlJTeExRVUZyUXp0UlFVTjRSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEycEVMRU5CUVVNN1NVRkZUU3hOUVVGTkxFTkJRVU1zUlVGQlZTeEZRVUZGTEUxQlFXMURPMUZCUTNwRUxFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJUdFpRVU42UXl4SlFVRkpPMmRDUVVOQkxFMUJRVTBzVFVGQlRTeEhRVUZITEUxQlFVMHNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdaMEpCUTNoRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8yZENRVU01UWl4TlFVRk5MRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMmRDUVVNNVFpeFBRVUZQTEVWQlFVVXNRMEZCUXp0aFFVTmlPMWxCUVVNc1QwRkJUeXhMUVVGTExFVkJRVVU3WjBKQlExb3NUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8yRkJRMnBDTzFGQlEwd3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRVQ3hEUVVGRE8wbEJSVTBzVFVGQlRTeERRVUZETEVWQlFWVTdVVUZEY0VJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRemRETEVOQlFVTTdTVUZGVFN4TFFVRkxPMUZCUTFJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1NVRkRkRU1zUTBGQlF6dEpRVVZOTEUxQlFVMDdVVUZEVkN4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0SlFVTjJReXhEUVVGRE8wbEJSVTBzUjBGQlJ5eERRVUZETEV0QlFXRTdVVUZEY0VJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRM3BETEVOQlFVTTdTVUZGVFN4SlFVRkpPMUZCUTFBc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1NVRkRja01zUTBGQlF6dEpRVVZOTEU5QlFVOHNRMEZCUXl4UlFVRTRSanRSUVVONlJ5eFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdTVUZEYUVRc1EwRkJRenRKUVVWUExGZEJRVmM3VVVGRFppeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVN1dVRkJSU3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEc5Q1FVRnZRaXhEUVVGRExFTkJRVU03VVVGRGFrVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRm5RaXhEUVVGRE8wbEJRMjVGTEVOQlFVTTdRMEZGU2p0QlFTOUhSQ3d3UTBFclIwTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBCRE9Mb2dnZXJfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Mb2dnZXJcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xubGV0IExvZ2dlciA9IGNsYXNzIExvZ2dlciBleHRlbmRzIEJET0xvZ2dlcl8xLkJET0xvZ2dlciB7XG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgICAgIHRoaXMubG9nTGV2ZWxDb2xvcnMgPSB7XG4gICAgICAgICAgICBsb2c6ICdjb2xvcjogZ3JheTsgZm9udC13ZWlnaHQ6IGJvbGQ7JyxcbiAgICAgICAgICAgIGRlYnVnOiAnY29sb3I6IGdyZWVuOyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgICAgICAgICAgaW5mbzogJ2NvbG9yOiAjMDA4MDZCOyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgICAgICAgICAgd2FybjogJ2NvbG9yOiAjODA4MDAwOyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgICAgICAgICAgZXJyb3I6ICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogYm9sZDsnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldEhlYWRlcihsb2dMZXZlbCwgcHJpbnRFbnYgPSAnY29uc29sZScpIHtcbiAgICAgICAgY29uc3QgcHJvY0luZm8gPSB0aGlzLmdldFByb2NJbmZvKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gdGhpcy5jdXJyZW50VGltZSgpO1xuICAgICAgICBjb25zdCB1cHBlckxvZ0xldmVsID0gbG9nTGV2ZWwudG9VcHBlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9nUG9pbnQgPSB0aGlzLmdldExvZ1BvaW50KCk7XG4gICAgICAgIGNvbnN0IHJlc2V0U3R5bGUgPSAnY29sb3I6IGJsYWNrOyBmb250LXdlaWdodDogbm9ybWFsJztcbiAgICAgICAgY29uc3QgbWFnZW50YSA9ICdjb2xvcjogIzgwMDA4MDsgZm9udC13ZWlnaHQ6IG5vcm1hbCc7XG4gICAgICAgIGNvbnN0IGN5YW4gPSAnY29sb3I6ICMwMDgwNkI7IGZvbnQtd2VpZ2h0OiBub3JtYWwnO1xuICAgICAgICBpZiAocHJpbnRFbnYgPT09ICdjb25zb2xlJykge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkTG9nTGV2ZWwgPSB0aGlzLmxvZ0xldmVsQ29sb3JzW2xvZ0xldmVsXTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZExvZ1BvaW50ID0gbWFnZW50YTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBjeWFuO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkUHJvY0luZm8gPSBtYWdlbnRhO1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBgJWNbJWMke3VwcGVyTG9nTGV2ZWx9ICVjLSAlYyR7cHJvY0luZm99ICVjLSAlYyR7Y3VycmVudFRpbWV9ICVjYXQgJWMke2xvZ1BvaW50fSVjXWAsXG4gICAgICAgICAgICAgICAgcmVzZXRTdHlsZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRMb2dMZXZlbCxcbiAgICAgICAgICAgICAgICByZXNldFN0eWxlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZFByb2NJbmZvLFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkVGltZSxcbiAgICAgICAgICAgICAgICByZXNldFN0eWxlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZExvZ1BvaW50LFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGVcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBbJHt1cHBlckxvZ0xldmVsfSAtICR7cHJvY0luZm99IC0gJHtjdXJyZW50VGltZX0gLSAke2xvZ1BvaW50fV1gO1xuICAgIH1cbiAgICB3cml0ZVRvRmlsZShfbG9nTGV2ZWwsIF9tZXNzYWdlKSB7XG4gICAgfVxufTtcbkxvZ2dlciA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIENvbnN0UGFyYW1zICE9PSBcInVuZGVmaW5lZFwiICYmIENvbnN0UGFyYW1zKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3RdKVxuXSwgTG9nZ2VyKTtcbmV4cG9ydHMuTG9nZ2VyID0gTG9nZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVEc5bloyVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlqYkdsbGJuUXZkSE12YkdsaUwweHZaMmRsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxHdEVRVUUyUlR0QlFVTTNSU3h6UkVGQmQwUTdRVUZWZUVRc1NVRkJZU3hOUVVGTkxFZEJRVzVDTEUxQlFXRXNUVUZCVHl4VFFVRlJMSEZDUVVGVE8wbEJaV3BETEZsQlFWa3NUVUZCTkVJN1VVRkRjRU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCVkZZc2JVSkJRV01zUjBGQlJ6dFpRVU55UWl4SFFVRkhMRVZCUVVVc2FVTkJRV2xETzFsQlEzUkRMRXRCUVVzc1JVRkJSU3hyUTBGQmEwTTdXVUZEZWtNc1NVRkJTU3hGUVVGRkxHOURRVUZ2UXp0WlFVTXhReXhKUVVGSkxFVkJRVVVzYjBOQlFXOURPMWxCUXpGRExFdEJRVXNzUlVGQlJTeG5RMEZCWjBNN1UwRkRNVU1zUTBGQlF6dEpRVWxHTEVOQlFVTTdTVUZYVXl4VFFVRlRMRU5CUVVNc1VVRkJiVUlzUlVGQlJTeFhRVUU0UWl4VFFVRlRPMUZCUXpWRkxFMUJRVTBzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRSUVVOd1F5eE5RVUZOTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03VVVGRGRrTXNUVUZCVFN4aFFVRmhMRWRCUVVjc1VVRkJVU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzFGQlF6ZERMRTFCUVUwc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVTndReXhOUVVGTkxGVkJRVlVzUjBGQlJ5eHRRMEZCYlVNc1EwRkJRenRSUVVOMlJDeE5RVUZOTEU5QlFVOHNSMEZCUnl4eFEwRkJjVU1zUTBGQlF6dFJRVU4wUkN4TlFVRk5MRWxCUVVrc1IwRkJSeXh4UTBGQmNVTXNRMEZCUXp0UlFVTnVSQ3hKUVVGSkxGRkJRVkVzUzBGQlN5eFRRVUZUTEVWQlFVVTdXVUZEZUVJc1RVRkJUU3hwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFsQlEzaEVMRTFCUVUwc2FVSkJRV2xDTEVkQlFVY3NUMEZCVHl4RFFVRkRPMWxCUTJ4RExFMUJRVTBzWVVGQllTeEhRVUZITEVsQlFVa3NRMEZCUXp0WlFVTXpRaXhOUVVGTkxHbENRVUZwUWl4SFFVRkhMRTlCUVU4c1EwRkJRenRaUVVOc1F5eFBRVUZQTzJkQ1FVTklMRkZCUVZFc1lVRkJZU3hWUVVGVkxGRkJRVkVzVlVGQlZTeFhRVUZYTEZkQlFWY3NVVUZCVVN4TFFVRkxPMmRDUVVOd1JpeFZRVUZWTzJkQ1FVTldMR2xDUVVGcFFqdG5Ra0ZEYWtJc1ZVRkJWVHRuUWtGRFZpeHBRa0ZCYVVJN1owSkJRMnBDTEZWQlFWVTdaMEpCUTFZc1lVRkJZVHRuUWtGRFlpeFZRVUZWTzJkQ1FVTldMR2xDUVVGcFFqdG5Ra0ZEYWtJc1ZVRkJWVHRoUVVOaUxFTkJRVU03VTBGRFREdFJRVU5FTEU5QlFVOHNTVUZCU1N4aFFVRmhMRTFCUVUwc1VVRkJVU3hOUVVGTkxGZEJRVmNzVFVGQlRTeFJRVUZSTEVkQlFVY3NRMEZCUXp0SlFVTTNSU3hEUVVGRE8wbEJWVk1zVjBGQlZ5eERRVUZETEZOQlFXOUNMRVZCUVVVc1VVRkJZVHRKUVVWNlJDeERRVUZETzBOQlEwb3NRMEZCUVR0QlFYQkZXU3hOUVVGTk8wbEJSR3hDTERSQ1FVRmxMRVZCUVVVN2FVVkJaMEpQTEZkQlFWY3NiMEpCUVZnc1YwRkJWenRIUVdaMlFpeE5RVUZOTEVOQmIwVnNRanRCUVhCRldTeDNRa0ZCVFNKOSIsInZhciBtYXAgPSB7XG5cdFwiLi9UZXN0LnRzXCI6IFwiLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdC50c1wiLFxuXHRcIi4vVGVzdDEudHNcIjogXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL21vZGVscy9UZXN0MS50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL21vZGVscyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC50cyRcIjsiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfYTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBCRE9UZXN0XzEgPSByZXF1aXJlKFwifmJkby9tb2RlbHMvQkRPVGVzdFwiKTtcbmNvbnN0IENsaWVudE1vZGVsXzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQ2xpZW50TW9kZWxcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xubGV0IFRlc3QgPSBjbGFzcyBUZXN0IGV4dGVuZHMgQkRPVGVzdF8xLkJET1Rlc3RGYWN0b3J5KENsaWVudE1vZGVsXzEuQ2xpZW50TW9kZWwpIHtcbiAgICBjb25zdHJ1Y3RvcihfcGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHRlc3QoKSB7XG4gICAgfVxufTtcblRlc3QgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoeyBjb2xsZWN0aW9uTmFtZTogXCJUZXN0XCIgfSksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgQ29uc3RQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIgJiYgQ29uc3RQYXJhbXMpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdF0pXG5dLCBUZXN0KTtcbmV4cG9ydHMuVGVzdCA9IFRlc3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWR1Z6ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyMXZaR1ZzY3k5VVpYTjBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRU3hwUkVGQmNVUTdRVUZEY2tRc2VVUkJRWE5FTzBGQlEzUkVMSE5FUVVGM1JEdEJRVlY0UkN4SlFVRmhMRWxCUVVrc1IwRkJha0lzVFVGQllTeEpRVUZMTEZOQlFWRXNkMEpCUVdNc1EwRkJReXg1UWtGQlZ5eERRVUZETzBsQlJXcEVMRmxCUVZrc1QwRkJNa0k3VVVGRGJrTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1NVRkRXaXhEUVVGRE8wbEJUMDBzU1VGQlNUdEpRVVZZTEVOQlFVTTdRMEZEU2l4RFFVRkJPMEZCWkZrc1NVRkJTVHRKUVVSb1FpdzBRa0ZCWlN4RFFVRkRMRVZCUVVVc1kwRkJZeXhGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETzJsRlFVZHNRaXhYUVVGWExHOUNRVUZZTEZkQlFWYzdSMEZHZUVJc1NVRkJTU3hEUVdOb1FqdEJRV1JaTEc5Q1FVRkpJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgVGVzdDFfMSwgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgQkRPVGVzdDFfMSA9IHJlcXVpcmUoXCJ+YmRvL21vZGVscy9CRE9UZXN0MVwiKTtcbmNvbnN0IFRlc3RfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L21vZGVscy9UZXN0XCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmxldCBUZXN0MSA9IFRlc3QxXzEgPSBjbGFzcyBUZXN0MSBleHRlbmRzIEJET1Rlc3QxXzEuQkRPVGVzdDFGYWN0b3J5KFRlc3RfMS5UZXN0KSB7XG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgfVxuICAgIGFzeW5jIHdhZGRlKCkge1xuICAgICAgICBjb25zdCB0ZXN0ID0gYXdhaXQgVGVzdDFfMS5nZXRJbnN0YW5jZUJ5SUQodGhpcy5pZCk7XG4gICAgICAgIGlmICh0ZXN0KVxuICAgICAgICAgICAgcmV0dXJuIHRlc3QuZ2V0VW5zYXZlZENoYW5nZXMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn07XG5UZXN0MSA9IFRlc3QxXzEgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoeyBjb2xsZWN0aW9uTmFtZTogXCJUZXN0MVwiIH0pLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIENvbnN0UGFyYW1zICE9PSBcInVuZGVmaW5lZFwiICYmIENvbnN0UGFyYW1zKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3RdKVxuXSwgVGVzdDEpO1xuZXhwb3J0cy5UZXN0MSA9IFRlc3QxO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVkdWemRERXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMk5zYVdWdWRDOTBjeTl0YjJSbGJITXZWR1Z6ZERFdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVOQkxHMUVRVUYxUkR0QlFVTjJSQ3c0UTBGQk1rTTdRVUZETTBNc2MwUkJRWGRFTzBGQlZYaEVMRWxCUVdFc1MwRkJTeXhoUVVGc1FpeE5RVUZoTEV0QlFVMHNVMEZCVVN3d1FrRkJaU3hEUVVGRExGZEJRVWtzUTBGQlF6dEpRVVUxUXl4WlFVRlpMRTFCUVRKQ08xRkJRMjVETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRKUVVOc1FpeERRVUZETzBsQlQwMHNTMEZCU3l4RFFVRkRMRXRCUVVzN1VVRkRaQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eE5RVUZOTEU5QlFVc3NRMEZCUXl4bFFVRmxMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEyeEVMRWxCUVVrc1NVRkJTVHRaUVVGRkxFOUJRVThzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhGUVVGRkxFTkJRVU03VVVGRE1VTXNUMEZCVHp0SlFVTllMRU5CUVVNN1EwRkRTaXhEUVVGQk8wRkJhRUpaTEV0QlFVczdTVUZFYWtJc05FSkJRV1VzUTBGQlF5eEZRVUZGTEdOQlFXTXNSVUZCUlN4UFFVRlBMRVZCUVVVc1EwRkJRenRwUlVGSGNFSXNWMEZCVnl4dlFrRkJXQ3hYUVVGWE8wZEJSblpDTEV0QlFVc3NRMEZuUW1wQ08wRkJhRUpaTEhOQ1FVRkxJbjA9IiwidmFyIG1hcCA9IHtcblx0XCIuL0NvbmZpZy50c1wiOiBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0NvbmZpZy50c1wiLFxuXHRcIi4vR2FtZUxvYmJ5LnRzXCI6IFwiLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvR2FtZUxvYmJ5LnRzXCIsXG5cdFwiLi9Ib21lLnRzXCI6IFwiLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvSG9tZS50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC50cyRcIjsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENsaWVudFJvdXRlXzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQ2xpZW50Um91dGVcIik7XG5jb25zdCBCRE9Db25maWdfMSA9IHJlcXVpcmUoXCJ+YmRvL3JvdXRlcy9CRE9Db25maWdcIik7XG5jbGFzcyBDb25maWcgZXh0ZW5kcyBCRE9Db25maWdfMS5CRE9Db25maWdGYWN0b3J5KENsaWVudFJvdXRlXzEuQ2xpZW50Um91dGUpIHtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IENvbmZpZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyOXVabWxuTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5amJHbGxiblF2ZEhNdmNtOTFkR1Z6TDBOdmJtWnBaeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMSGxFUVVGelJEdEJRVU4wUkN4eFJFRkJlVVE3UVVGWGVrUXNUVUZCY1VJc1RVRkJUeXhUUVVGUkxEUkNRVUZuUWl4RFFVRkRMSGxDUVVGWExFTkJRVU03UTBGQlNUdEJRVUZ5UlN4NVFrRkJjVVVpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ2xpZW50Um91dGVfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9DbGllbnRSb3V0ZVwiKTtcbmNvbnN0IEJET0dhbWVMb2JieV8xID0gcmVxdWlyZShcIn5iZG8vcm91dGVzL0JET0dhbWVMb2JieVwiKTtcbmNsYXNzIEdhbWVMb2JieSBleHRlbmRzIEJET0dhbWVMb2JieV8xLkJET0dhbWVMb2JieUZhY3RvcnkoQ2xpZW50Um91dGVfMS5DbGllbnRSb3V0ZSkge1xuICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGVzdDogJ2xvbCdcbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBHYW1lTG9iYnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSMkZ0WlV4dlltSjVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlqYkdsbGJuUXZkSE12Y205MWRHVnpMMGRoYldWTWIySmllUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMSGxFUVVGelJEdEJRVU4wUkN3eVJFRkJLMFE3UVVGVEwwUXNUVUZCY1VJc1UwRkJWU3hUUVVGUkxHdERRVUZ0UWl4RFFVRkRMSGxDUVVGWExFTkJRVU03U1VGVmVrUXNTMEZCU3l4RFFVRkRMR05CUVdNN1VVRkRNVUlzVDBGQlR6dFpRVU5JTEVsQlFVa3NSVUZCUlN4TFFVRkxPMU5CUTJRc1EwRkJRenRKUVVOT0xFTkJRVU03UTBGRFNqdEJRV1pFTERSQ1FXVkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBDbGllbnRSb3V0ZV8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0NsaWVudFJvdXRlXCIpO1xuY29uc3QgQkRPSG9tZV8xID0gcmVxdWlyZShcIn5iZG8vcm91dGVzL0JET0hvbWVcIik7XG5jbGFzcyBIb21lIGV4dGVuZHMgQkRPSG9tZV8xLkJET0hvbWVGYWN0b3J5KENsaWVudFJvdXRlXzEuQ2xpZW50Um91dGUpIHtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEhvbWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lTRzl0WlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwzSnZkWFJsY3k5SWIyMWxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNlVVJCUVhORU8wRkJRM1JFTEdsRVFVRnhSRHRCUVZOeVJDeE5RVUZ4UWl4SlFVRkxMRk5CUVZFc2QwSkJRV01zUTBGQlF5eDVRa0ZCVnl4RFFVRkRPME5CUVVrN1FVRkJha1VzZFVKQlFXbEZJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5mdW5jdGlvbiBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZShpbnN0YW5jZSwga2V5LCBuZXdWYWwsIG5zUHJvcCA9IFwiaWRcIikge1xuICAgIGlmIChrZXkgPT09IFwiKlwiKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCIqIGlzIGEgc3BlY2lhbCBjaGFyYWN0ZXIgYW5kIGRvZXMgbm90IGZvbGxvdyB0aGUgcHJvcGVydHkgY29udmVudGlvblwiKTtcbiAgICBjb25zdCBuc1ByZWZpeCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihpbnN0YW5jZS5jb25zdHJ1Y3RvcikubmFtZTtcbiAgICBsZXQgbnNTdWZmaXggPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGluc3RhbmNlLCBcIm9sZFN0b3JhZ2VOc1N1ZmZpeFwiKTtcbiAgICBsZXQgc3RvcmFnZVZhbHVlO1xuICAgIGlmICghbnNTdWZmaXgpXG4gICAgICAgIG5zU3VmZml4ID0gaW5zdGFuY2VbbnNQcm9wXTtcbiAgICBsZXQgbnMgPSBgJHtuc1ByZWZpeH1fJHtuc1N1ZmZpeH1gO1xuICAgIGlmIChrZXkgPT09IG5zUHJvcCB8fCBuc1N1ZmZpeCAhPT0gaW5zdGFuY2VbbnNQcm9wXSkge1xuICAgICAgICBuc1N1ZmZpeCA9IGtleSA9PT0gbnNQcm9wID8gbmV3VmFsIDogaW5zdGFuY2VbbnNQcm9wXTtcbiAgICAgICAgY29uc3QgbmV3TnMgPSBgJHtuc1ByZWZpeH1fJHtuc1N1ZmZpeH1gO1xuICAgICAgICBzdG9yYWdlVmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShucyk7XG4gICAgICAgIGlmIChzdG9yYWdlVmFsdWUpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5zKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5ld05zLCBzdG9yYWdlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIG5zID0gbmV3TnM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzdG9yYWdlVmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShucyk7XG4gICAgICAgIGlmIChzdG9yYWdlVmFsdWUpIHtcbiAgICAgICAgICAgIHN0b3JhZ2VWYWx1ZSA9IEpTT04ucGFyc2Uoc3RvcmFnZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzdG9yYWdlVmFsdWUgPSB7fTtcbiAgICAgICAgaWYgKG5ld1ZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkZWxldGUgc3RvcmFnZVZhbHVlW2tleV07XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKHN0b3JhZ2VWYWx1ZSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5zLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlVmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShucywgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmFzc2lnbihzdG9yYWdlVmFsdWUsIHsgW2tleV06IG5ld1ZhbCB9KSkpO1xuICAgIH1cbiAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKGluc3RhbmNlLCBcIm9sZFN0b3JhZ2VOc1N1ZmZpeFwiLCBuc1N1ZmZpeCk7XG59XG5leHBvcnRzLnNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlID0gc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2U7XG5mdW5jdGlvbiBnZXROYW1lc3BhY2VkU3RvcmFnZShpbnN0YW5jZSwga2V5LCBuc1Byb3AgPSBcImlkXCIsIGZvcmNlTlMpIHtcbiAgICBjb25zdCBuc1ByZWZpeCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihpbnN0YW5jZS5jb25zdHJ1Y3RvcikubmFtZTtcbiAgICBsZXQgbnNTdWZmaXggPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGluc3RhbmNlLCBcIm9sZFN0b3JhZ2VOc1N1ZmZpeFwiKTtcbiAgICBpZiAobnNTdWZmaXggIT09IGluc3RhbmNlW25zUHJvcF0pXG4gICAgICAgIG5zU3VmZml4ID0gaW5zdGFuY2VbbnNQcm9wXTtcbiAgICBpZiAoZm9yY2VOUylcbiAgICAgICAgbnNTdWZmaXggPSBmb3JjZU5TO1xuICAgIGxldCBzdG9yYWdlVmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtuc1ByZWZpeH1fJHtuc1N1ZmZpeH1gKTtcbiAgICBpZiAoc3RvcmFnZVZhbHVlKVxuICAgICAgICBzdG9yYWdlVmFsdWUgPSBKU09OLnBhcnNlKHN0b3JhZ2VWYWx1ZSk7XG4gICAgaWYgKHN0b3JhZ2VWYWx1ZSAmJiBrZXkgPT09IFwiKlwiKVxuICAgICAgICByZXR1cm4gc3RvcmFnZVZhbHVlO1xuICAgIGlmIChzdG9yYWdlVmFsdWUgJiYga2V5IGluIHN0b3JhZ2VWYWx1ZSlcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VWYWx1ZVtrZXldO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5leHBvcnRzLmdldE5hbWVzcGFjZWRTdG9yYWdlID0gZ2V0TmFtZXNwYWNlZFN0b3JhZ2U7XG5mdW5jdGlvbiBkZWxldGVGcm9tTmFtZXNwYWNlZFN0b3JhZ2UoaW5zdGFuY2UsIGtleSwgbnNQcm9wID0gXCJpZFwiKSB7XG4gICAgaWYgKGtleSA9PT0gXCIqXCIpIHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IGdldE5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBrZXksIG5zUHJvcCk7XG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBzdG9yYWdlKSB7XG4gICAgICAgICAgICBpZiAoc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSlcbiAgICAgICAgICAgICAgICBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZShpbnN0YW5jZSwgcHJvcCwgdW5kZWZpbmVkLCBuc1Byb3ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2UoaW5zdGFuY2UsIGtleSwgdW5kZWZpbmVkLCBuc1Byb3ApO1xufVxuZXhwb3J0cy5kZWxldGVGcm9tTmFtZXNwYWNlZFN0b3JhZ2UgPSBkZWxldGVGcm9tTmFtZXNwYWNlZFN0b3JhZ2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkWFJwYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwzVjBhV3h6TDNWMGFXd3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTeHJSRUZCYTBVN1FVRlZiRVVzVTBGQlowSXNNRUpCUVRCQ0xFTkJRVU1zVVVGQllTeEZRVUZGTEVkQlFWY3NSVUZCUlN4TlFVRlhMRVZCUVVVc1UwRkJhVUlzU1VGQlNUdEpRVU55Unl4SlFVRkpMRWRCUVVjc1MwRkJTeXhIUVVGSE8xRkJRVVVzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4elJVRkJjMFVzUTBGQlF5eERRVUZETzBsQlIzcEhMRTFCUVUwc1VVRkJVU3hIUVVGSExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU5zUlN4SlFVRkpMRkZCUVZFc1IwRkJSeXh6UWtGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4dlFrRkJiMElzUTBGQlF5eERRVUZETzBsQlF6TkVMRWxCUVVrc1dVRkJhVUlzUTBGQlF6dEpRVWQwUWl4SlFVRkpMRU5CUVVNc1VVRkJVVHRSUVVGRkxGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRNME1zU1VGQlNTeEZRVUZGTEVkQlFVY3NSMEZCUnl4UlFVRlJMRWxCUVVrc1VVRkJVU3hGUVVGRkxFTkJRVU03U1VGRGJrTXNTVUZCU1N4SFFVRkhMRXRCUVVzc1RVRkJUU3hKUVVGSkxGRkJRVkVzUzBGQlN5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVN1VVRkZha1FzVVVGQlVTeEhRVUZITEVkQlFVY3NTMEZCU3l4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRM1JFTEUxQlFVMHNTMEZCU3l4SFFVRkhMRWRCUVVjc1VVRkJVU3hKUVVGSkxGRkJRVkVzUlVGQlJTeERRVUZETzFGQlEzaERMRmxCUVZrc1IwRkJSeXhaUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTNoRExFbEJRVWtzV1VGQldTeEZRVUZGTzFsQlEyUXNXVUZCV1N4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU0xUWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeFpRVUZaTEVOQlFVTXNRMEZCUXp0VFFVTTNRenRSUVVORUxFVkJRVVVzUjBGQlJ5eExRVUZMTEVOQlFVTTdTMEZEWkR0VFFVRk5PMUZCUlVnc1dVRkJXU3hIUVVGSExGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRlRU1zU1VGQlNTeFpRVUZaTEVWQlFVVTdXVUZEWkN4WlFVRlpMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0VFFVTXpRenM3V1VGQlRTeFpRVUZaTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUlhwQ0xFbEJRVWtzVFVGQlRTeExRVUZMTEZOQlFWTXNSVUZCUlR0WlFVTjBRaXhQUVVGUExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTjZRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVU3WjBKQlEyNURMRmxCUVZrc1EwRkJReXhWUVVGVkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdZVUZETDBJN08yZENRVUZOTEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOcVJUczdXVUZCVFN4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVVzUlVGQlJTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zV1VGQldTeEZRVUZGTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0TFFVTnVSenRKUVVWRUxIbENRVUZqTEVOQlFVTXNVVUZCVVN4RlFVRkZMRzlDUVVGdlFpeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMEZCUXpkRUxFTkJRVU03UVVGeVEwUXNaMFZCY1VORE8wRkJhMEpFTEZOQlFXZENMRzlDUVVGdlFpeERRVUZETEZGQlFXRXNSVUZCUlN4SFFVRlhMRVZCUVVVc1UwRkJhVUlzU1VGQlNTeEZRVUZGTEU5QlFXZENPMGxCUTNCSExFMUJRVTBzVVVGQlVTeEhRVUZITEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXp0SlFVTnNSU3hKUVVGSkxGRkJRVkVzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3h2UWtGQmIwSXNRMEZCUXl4RFFVRkRPMGxCUXpORUxFbEJRVWtzVVVGQlVTeExRVUZMTEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkJSU3hSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUXk5RUxFbEJRVWtzVDBGQlR6dFJRVUZGTEZGQlFWRXNSMEZCUnl4UFFVRlBMRU5CUVVNN1NVRkRhRU1zU1VGQlNTeFpRVUZaTEVkQlFWRXNXVUZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExGRkJRVkVzU1VGQlNTeFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUTNoRkxFbEJRVWtzV1VGQldUdFJRVUZGTEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzBsQlF6RkVMRWxCUVVrc1dVRkJXU3hKUVVGSkxFZEJRVWNzUzBGQlN5eEhRVUZITzFGQlFVVXNUMEZCVHl4WlFVRlpMRU5CUVVNN1NVRkRja1FzU1VGQlNTeFpRVUZaTEVsQlFVa3NSMEZCUnl4SlFVRkpMRmxCUVZrN1VVRkJSU3hQUVVGUExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTnNSU3hQUVVGUExGTkJRVk1zUTBGQlF6dEJRVU55UWl4RFFVRkRPMEZCVmtRc2IwUkJWVU03UVVGWFJDeFRRVUZuUWl3eVFrRkJNa0lzUTBGQlF5eFJRVUZoTEVWQlFVVXNSMEZCVnl4RlFVRkZMRk5CUVdsQ0xFbEJRVWs3U1VGRGVrWXNTVUZCU1N4SFFVRkhMRXRCUVVzc1IwRkJSeXhGUVVGRk8xRkJRMklzVFVGQlRTeFBRVUZQTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlFVY3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVNMVJDeExRVUZMTEUxQlFVMHNTVUZCU1N4SlFVRkpMRTlCUVU4c1JVRkJSVHRaUVVONFFpeEpRVUZKTEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRE8yZENRVUZGTERCQ1FVRXdRaXhEUVVGRExGRkJRVkVzUlVGQlJTeEpRVUZKTEVWQlFVVXNVMEZCVXl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8xTkJRMjVITzB0QlEwbzdPMUZCUVUwc01FSkJRVEJDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVjc1JVRkJSU3hUUVVGVExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdRVUZEZUVVc1EwRkJRenRCUVZCRUxHdEZRVTlESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUHJvcGVydHlfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Qcm9wZXJ0eVwiKTtcbmNvbnN0IGVudmlyb25tZW50XzEgPSByZXF1aXJlKFwifmJkby91dGlscy9lbnZpcm9ubWVudFwiKTtcbmNvbnN0IE1vZGlmaWNhdGlvbl8xID0gcmVxdWlyZShcIn5iZG8vbGliL01vZGlmaWNhdGlvblwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBFcnJvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9FcnJvcnNcIik7XG5jb25zdCBNb2RlbFJlZ2lzdHJ5XzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kZWxSZWdpc3RyeVwiKTtcbmNsYXNzIEF0dHJpYnV0ZSBleHRlbmRzIFByb3BlcnR5XzEuUHJvcGVydHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHksIHBhcmFtcykge1xuICAgICAgICBzdXBlcihvYmplY3QsIHByb3BlcnR5LCBwYXJhbXMpO1xuICAgICAgICB0aGlzLmluRE9NSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hdXRvU2F2ZUFsbG93ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZERvU2V0VmFsdWUodmFsdWUpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgb2xkSUQ7XG4gICAgICAgIGlmICh0aGlzLm9iamVjdC5pc0JET01vZGVsICYmIHRoaXMucHJvcGVydHkgPT09IFwiaWRcIilcbiAgICAgICAgICAgIG9sZElEID0gdGhpcy5vd25WYWx1ZTtcbiAgICAgICAgdGhpcy5kb1NldFZhbHVlKHZhbHVlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgaWYgKG9sZElEKVxuICAgICAgICAgICAgTW9kZWxSZWdpc3RyeV8xLk1vZGVsUmVnaXN0cnkuZ2V0SW5zdGFuY2UoKS51cGRhdGVJRChvbGRJRCwgdGhpcy5vYmplY3QpO1xuICAgICAgICB0aGlzLnJlZmxlY3RUb0RPTUF0dHJpYnV0ZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuZG9BdXRvU2F2ZSgpO1xuICAgIH1cbiAgICBwcm94eUhhbmRsZXIoX3BhdGgsIF9jaGFuZ2VkVmFsLCBfcHJldlZhbCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmRvU2V0VmFsdWUodXRpbF8xLmdldFByb3h5VGFyZ2V0KHZhbHVlKSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMucmVmbGVjdFRvRE9NQXR0cmlidXRlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5kb0F1dG9TYXZlKCk7XG4gICAgfVxuICAgIGdldFVuc2F2ZWRDaGFuZ2UoKSB7IH1cbiAgICBzaG91bGREb1NldFZhbHVlKHZhbHVlLCBza2lwR3VhcmQgPSBmYWxzZSkge1xuICAgICAgICBpZiAoZW52aXJvbm1lbnRfMS5pc0Jyb3dzZXIoKSAmJiAhdGhpcy5vYmplY3QuaXNCRE9Nb2RlbCAmJiAodGhpcy5vYmplY3QgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdGVkVHlwZSA9IHV0aWxfMS5jb25zdHJ1Y3RUeXBlT2ZIVE1MQXR0cmlidXRlKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pbkRPTUluaXRpYWxpemVkICYmIHRoaXMub2JqZWN0LmdldEF0dHJpYnV0ZSh0aGlzLnByb3BlcnR5KSAmJiB2YWx1ZSAhPT0gY29uc3RydWN0ZWRUeXBlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShjb25zdHJ1Y3RlZFR5cGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gISh2YWx1ZSA9PT0gdGhpcy5vd25WYWx1ZSB8fCAhc2tpcEd1YXJkICYmICF0aGlzLmRpc2FibGVUeXBlR3VhcmQgJiYgIXRoaXMudHlwZUd1YXJkKHZhbHVlKSk7XG4gICAgfVxuICAgIHJlZmxlY3RUb0RPTUF0dHJpYnV0ZSh2YWx1ZSkge1xuICAgICAgICBpZiAoIWVudmlyb25tZW50XzEuaXNCcm93c2VyKCkgfHwgISh0aGlzLm9iamVjdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3Qgc3RyaW5nS2V5ID0gdGhpcy5wcm9wZXJ0eS50b1N0cmluZygpO1xuICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSB0aGlzLm9iamVjdC5nZXRBdHRyaWJ1dGUoc3RyaW5nS2V5KTtcbiAgICAgICAgbGV0IHNldEF0dHJpYnV0ZSA9IHRydWU7XG4gICAgICAgIGxldCBwVGFyZ2V0O1xuICAgICAgICBsZXQgdmFsdWVUb1Bhc3MgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kaWZpY2F0aW9uXzEuTW9kaWZpY2F0aW9uKVxuICAgICAgICAgICAgdmFsdWVUb1Bhc3MgPSB2YWx1ZS52YWx1ZU9mKCk7XG4gICAgICAgIGlmICghdGhpcy5pbkRPTUluaXRpYWxpemVkICYmIGF0dHJWYWx1ZSkge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcFRhcmdldCA9IHV0aWxfMS5nZXRQcm94eVRhcmdldCh2YWx1ZVRvUGFzcyk7XG4gICAgICAgIHRoaXMuaW5ET01Jbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIGlmIChzZXRBdHRyaWJ1dGUgJiYgYXR0clZhbHVlICE9PSBwVGFyZ2V0ICYmIGF0dHJWYWx1ZSAhPT0gSlNPTi5zdHJpbmdpZnkocFRhcmdldCkucmVwbGFjZSgvXFxcIi9nLCBcIidcIikpIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0LnNldEF0dHJpYnV0ZShzdHJpbmdLZXksIHBUYXJnZXQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb0F1dG9TYXZlKCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvU2F2ZSAmJiB0aGlzLmRvTm90UGVyc2lzdCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yc18xLkNvbmZpZ3VyYXRpb25FcnJvcihcIllvdSBoYXZlIHR1cm5lZCBvbiBhdXRvc2F2ZSBidXQgYXQgdGhlIHNhbWUgdGltZSBpdCBpcyBmb3JiaWRkZW4gdG8gcGVyc2lzdCB0aGUgdmFsdWUhXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5hdXRvU2F2ZUFsbG93ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b1NhdmVBbGxvd2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuYXV0b1NhdmUgfHwgIXV0aWxfMS5pc0Z1bmN0aW9uKHRoaXMub2JqZWN0LnNhdmUpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYXV0b1NhdmUgPT09IFwiYm9vbGVhblwiKVxuICAgICAgICAgICAgdGhpcy5vYmplY3Quc2F2ZSh0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmF1dG9TYXZlID09PSBcIm51bWJlclwiICYmICF0aGlzLmF1dG9TYXZlVGltZW91dCkge1xuICAgICAgICAgICAgdGhpcy5hdXRvU2F2ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9iamVjdC5zYXZlKHRoaXMucHJvcGVydHkpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmF1dG9TYXZlVGltZW91dDtcbiAgICAgICAgICAgIH0sIE1hdGguYWJzKHRoaXMuYXV0b1NhdmUpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuQXR0cmlidXRlID0gQXR0cmlidXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVhSMGNtbGlkWFJsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5c2FXSXZRWFIwY21saWRYUmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNaMFJCUVRoRU8wRkJSVGxFTEhkRVFVRnRSRHRCUVVOdVJDeDNSRUZCY1VRN1FVRkRja1FzTUVOQlFUSkdPMEZCUXpOR0xEUkRRVUZ4UkR0QlFVTnlSQ3d3UkVGQmRVUTdRVUZ6UlhaRUxFMUJRV0VzVTBGQk1rUXNVMEZCVVN4dFFrRkJVVHRKUVhGRmNFWXNXVUZCV1N4TlFVRlRMRVZCUVVVc1VVRkJWeXhGUVVGRkxFMUJRWGxDTzFGQlEzcEVMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzVVVGQlVTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCY2tJMVFpeHhRa0ZCWjBJc1IwRkJXU3hMUVVGTExFTkJRVU03VVVGclFteERMRzlDUVVGbExFZEJRVmtzUzBGQlN5eERRVUZETzBsQlNYcERMRU5CUVVNN1NVRlJUU3hSUVVGUkxFTkJRVU1zUzBGQlowTTdVVUZETlVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhMUVVGTExFTkJRVU03V1VGQlJTeFBRVUZQTzFGQlF6RkRMRWxCUVVrc1MwRkJTeXhEUVVGRE8xRkJRMVlzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeExRVUZMTEVsQlFVazdXVUZCUlN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF6dFJRVU0xUlN4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRia01zU1VGQlNTeExRVUZMTzFsQlFVVXNOa0pCUVdFc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU53UlN4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRiRU1zU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMGxCUTNSQ0xFTkJRVU03U1VGUlRTeFpRVUZaTEVOQlFVTXNTMEZCWXl4RlFVRkZMRmRCUVd0Q0xFVkJRVVVzVVVGQlpUdFJRVU51UlN4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzFGQlEzcENMRWxCUVVrc1MwRkJTeXhMUVVGTExGTkJRVk1zU1VGQlNTeExRVUZMTEV0QlFVc3NTVUZCU1R0WlFVRkZMRTlCUVU4N1VVRkRiRVFzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4eFFrRkJZeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOdVJDeEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEYkVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETzBsQlEzUkNMRU5CUVVNN1NVRlRUU3huUWtGQlowSXNTMEZCU3l4RFFVRkRPMGxCVlhSQ0xHZENRVUZuUWl4RFFVRkRMRXRCUVdkRExFVkJRVVVzV1VGQmNVSXNTMEZCU3p0UlFVTm9SaXhKUVVGSkxIVkNRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1dVRkJXU3hYUVVGWExFTkJRVU1zUlVGQlJUdFpRVU5vUml4TlFVRk5MR1ZCUVdVc1IwRkJSeXh0UTBGQk5FSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0WlFVTnFSaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeExRVUZMTEV0QlFVc3NaVUZCWlN4RlFVRkZPMmRDUVVOb1J5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRE8yZENRVU12UWl4UFFVRlBMRXRCUVVzc1EwRkJRenRoUVVOb1FqdFRRVU5LTzFGQlEwUXNUMEZCVHl4RFFVRkRMRU5CUVVNc1MwRkJTeXhMUVVGTExFbEJRVWtzUTBGQlF5eFJRVUZSTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRlRWNzUTBGQlF6dEpRV05QTEhGQ1FVRnhRaXhEUVVGRExFdEJRV2RETzFGQlF6RkVMRWxCUVVrc1EwRkJReXgxUWtGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxGbEJRVmtzVjBGQlZ5eERRVUZETzFsQlFVVXNUMEZCVHp0UlFVTnNSU3hOUVVGTkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJRek5ETEUxQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUTNSRUxFbEJRVWtzV1VGQldTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTjRRaXhKUVVGSkxFOUJRVThzUTBGQlF6dFJRVVZhTEVsQlFVa3NWMEZCVnl4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVONFFpeEpRVUZKTEV0QlFVc3NXVUZCV1N3eVFrRkJXVHRaUVVGRkxGZEJRVmNzUjBGQlJ5eExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1VVRkZha1VzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4blFrRkJaMElzU1VGQlNTeFRRVUZUTEVWQlFVVTdXVUZEY2tNc1dVRkJXU3hIUVVGSExFdEJRVXNzUTBGQlF6dFRRVU40UWpzN1dVRkJUU3hQUVVGUExFZEJRVWNzY1VKQlFXTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRSUVVNM1F5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFZEJRVWNzU1VGQlNTeERRVUZETzFGQlJ6ZENMRWxCUVVrc1dVRkJXU3hKUVVGSkxGTkJRVk1zUzBGQlN5eFBRVUZQTEVsQlFVa3NVMEZCVXl4TFFVRkxMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU01Uml4SlFVRkpMRU5CUVVNc1RVRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eFRRVUZUTEVWQlFVVXNUMEZCVHl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xTkJRemxFTzBsQlEwd3NRMEZCUXp0SlFWVlBMRlZCUVZVN1VVRkRaQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmxCUVZrc1JVRkJSVHRaUVVOd1F5eE5RVUZOTEVsQlFVa3NNa0pCUVd0Q0xFTkJRVU1zZDBaQlFYZEdMRU5CUVVNc1EwRkJRenRUUVVNeFNEdFJRVU5FTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRk8xbEJRM1pDTEVsQlFVa3NRMEZCUXl4bFFVRmxMRWRCUVVjc1NVRkJTU3hEUVVGRE8xbEJRelZDTEU5QlFVODdVMEZEVmp0UlFVTkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEpRVUZKTEVOQlFVTXNhVUpCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXp0WlFVRkZMRTlCUVU4N1VVRkROVVFzU1VGQlNTeFBRVUZQTEVsQlFVa3NRMEZCUXl4UlFVRlJMRXRCUVVzc1UwRkJVenRaUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVU40UlN4SlFVRkpMRTlCUVU4c1NVRkJTU3hEUVVGRExGRkJRVkVzUzBGQlN5eFJRVUZSTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRk8xbEJRelZFTEVsQlFVa3NRMEZCUXl4bFFVRmxMRWRCUVVjc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJUdG5Ra0ZEYmtNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8yZENRVU5vUXl4UFFVRlBMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU03V1VGRGFFTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRMMEk3U1VGRFRDeERRVUZETzBOQlEwbzdRVUUzVEVRc09FSkJOa3hESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IG1zXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibXNcIikpO1xuY29uc3QgQkRPTWFwQ2FjaGVfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9NYXBDYWNoZVwiKTtcbmNsYXNzIEJET0NvbmZpZ01hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IEJET01hcENhY2hlXzEuQkRPTWFwQ2FjaGUoKTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0KGNvbmZpZykge1xuICAgICAgICBsZXQgdmFsdWUgPSBhd2FpdCB0aGlzLmdldENhY2hlKGNvbmZpZyk7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYXdhaXQgdGhpcy5sb2FkKGNvbmZpZyk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldENhY2hlKGNvbmZpZywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpO1xuICAgIH1cbiAgICBnZXRDYWNoZShjb25maWcpIHtcbiAgICAgICAgY29uc3QgZnJvbUxvY2FsQ2FjaGUgPSB0aGlzLmNhY2hlLmdldChjb25maWcpO1xuICAgICAgICBpZiAoZnJvbUxvY2FsQ2FjaGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tTG9jYWxDYWNoZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgYXN5bmMgc2V0Q2FjaGUoY29uZmlnLCB2YWx1ZSkge1xuICAgICAgICBsZXQgY29uZiA9IHRoaXMuY2FjaGUuZ2V0KCdfX0NvbmZpZ01hbmFnZXJDYWNoZVRpbWVvdXRfXycpO1xuICAgICAgICBpZiAoIXRoaXMuY2FjaGUuaGFzKCdfX0NvbmZpZ01hbmFnZXJDYWNoZVRpbWVvdXRfXycpKSB7XG4gICAgICAgICAgICBjb25mID0gKGF3YWl0IHRoaXMubG9hZCgnY29uZmlnJykpLnRpbWVvdXRzLmNvbmZpZ0NhY2hlO1xuICAgICAgICAgICAgaWYgKGNvbmYpXG4gICAgICAgICAgICAgICAgY29uZiA9IG1zXzEuZGVmYXVsdChjb25mKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUuc2V0KCdfX0NvbmZpZ01hbmFnZXJDYWNoZVRpbWVvdXRfXycsIGNvbmYpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGUuc2V0KGNvbmZpZywgdmFsdWUsIGNvbmYpO1xuICAgIH1cbn1cbmV4cG9ydHMuQkRPQ29uZmlnTWFuYWdlciA9IEJET0NvbmZpZ01hbmFnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQUTI5dVptbG5UV0Z1WVdkbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiR2xpTDBKRVQwTnZibVpwWjAxaGJtRm5aWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzYjBSQlFXOUNPMEZCUTNCQ0xITkVRVUZ0UkR0QlFXMUNia1FzVFVGQmMwSXNaMEpCUVdkQ08wbEJRWFJETzFGQlZXTXNWVUZCU3l4SFFVRTJRaXhKUVVGSkxIbENRVUZYTEVWQlFVVXNRMEZCUXp0SlFYZEZiRVVzUTBGQlF6dEpRUzlFVlN4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRV003VVVGRE0wSXNTVUZCU1N4TFFVRkxMRWRCUVVjc1RVRkJUU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTNoRExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdXVUZEVWl4TFFVRkxMRWRCUVVjc1RVRkJUU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMWxCUTJoRExFMUJRVTBzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VTBGRGRFTTdVVUZEUkN4UFFVRlBMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYkVNc1EwRkJRenRKUVRoQ1V5eFJRVUZSTEVOQlFVTXNUVUZCWXp0UlFVTTNRaXhOUVVGTkxHTkJRV01zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU01UXl4SlFVRkpMR05CUVdNc1JVRkJSVHRaUVVOb1FpeFBRVUZQTEdOQlFXTXNRMEZCUXp0VFFVTjZRanRSUVVORUxFOUJRVThzU1VGQlNTeERRVUZETzBsQlEyaENMRU5CUVVNN1NVRlhVeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFXTXNSVUZCUlN4TFFVRlZPMUZCUXk5RExFbEJRVWtzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExDdENRVUVyUWl4RFFVRkRMRU5CUVVNN1VVRkRNMFFzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExDdENRVUVyUWl4RFFVRkRMRVZCUVVVN1dVRkRiRVFzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJRenRaUVVONFJDeEpRVUZKTEVsQlFVazdaMEpCUVVVc1NVRkJTU3hIUVVGSExGbEJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTXhRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl3clFrRkJLMElzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTjZSRHRSUVVORUxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEZUVNc1EwRkJRenREUVVOS08wRkJiRVpFTERSRFFXdEdReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBCRE9EYXRhYmFzZW1hbmFnZXIge1xufVxuZXhwb3J0cy5CRE9EYXRhYmFzZW1hbmFnZXIgPSBCRE9EYXRhYmFzZW1hbmFnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQUkdGMFlXSmhjMlZOWVc1aFoyVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlzYVdJdlFrUlBSR0YwWVdKaGMyVk5ZVzVoWjJWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUTBFc1RVRkJjMElzYTBKQlFXdENPME5CUlhaRE8wRkJSa1FzWjBSQlJVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgbW9tZW50XzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibW9tZW50XCIpKTtcbmNvbnN0IHBhdGhfMSA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNsYXNzIEJET0xvZ2dlciB7XG4gICAgY29uc3RydWN0b3IoX3BhcmFtcykge1xuICAgICAgICB0aGlzLmxvZ0ZpbGUgPSAnZGVmYXVsdC5sb2cnO1xuICAgICAgICB0aGlzLnByZXZlbnRDb25zb2xlUHJpbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcmV2ZW50RmlsZVByaW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9nTGV2ZWwgPSAnZGVidWcnO1xuICAgICAgICB0aGlzLnByb3RvdHlwZU5hbWVzID0gdXRpbF8xLmdldFByb3RvdHlwZU5hbWVzUmVjdXJzaXZlKHRoaXMpO1xuICAgIH1cbiAgICBsb2cobWVzc2FnZSwgbG9nbGV2ZWwgPSAnbG9nJywgLi4uYXJncykge1xuICAgICAgICBpZiAobG9nbGV2ZWwgIT09ICdsb2cnICYmICF0aGlzLmlzQWxsb3dlZChsb2dsZXZlbCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy5wcmV2ZW50Q29uc29sZVByaW50IHx8IFsnbG9nJywgJ2Vycm9yJ10uaW5jbHVkZXMobG9nbGV2ZWwpKSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmdldEhlYWRlcihsb2dsZXZlbCk7XG4gICAgICAgICAgICBsZXQgbmV3QXJncyA9IFtdO1xuICAgICAgICAgICAgaWYgKGhlYWRlciBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgbmV3QXJncyA9IG5ld0FyZ3MuY29uY2F0KGhlYWRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbmV3QXJncy5wdXNoKGhlYWRlcik7XG4gICAgICAgICAgICBuZXdBcmdzLnB1c2gobWVzc2FnZSk7XG4gICAgICAgICAgICBuZXdBcmdzID0gbmV3QXJncy5jb25jYXQoYXJncyk7XG4gICAgICAgICAgICBjb25zb2xlW2xvZ2xldmVsXS5hcHBseSh0aGlzLCBuZXdBcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShhcmdzKTtcbiAgICAgICAgaWYgKCF0aGlzLnByZXZlbnRGaWxlUHJpbnQgfHwgbG9nbGV2ZWwgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMud3JpdGVUb0ZpbGUobG9nbGV2ZWwsIG1lc3NhZ2UgKyBwYXJzZWRTdHJpbmcuc3Vic3RyKDEsIHBhcnNlZFN0cmluZy5sZW5ndGggLSAyKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVidWcobWVzc2FnZSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBhcHBseSA9IFttZXNzYWdlLCAnZGVidWcnXS5jb25jYXQoYXJncyk7XG4gICAgICAgIHRoaXMubG9nLmFwcGx5KHRoaXMsIGFwcGx5KTtcbiAgICB9XG4gICAgaW5mbyhtZXNzYWdlLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGFwcGx5ID0gW21lc3NhZ2UsICdpbmZvJ10uY29uY2F0KGFyZ3MpO1xuICAgICAgICB0aGlzLmxvZy5hcHBseSh0aGlzLCBhcHBseSk7XG4gICAgfVxuICAgIHdhcm4obWVzc2FnZSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBhcHBseSA9IFttZXNzYWdlLCAnd2FybiddLmNvbmNhdChhcmdzKTtcbiAgICAgICAgdGhpcy5sb2cuYXBwbHkodGhpcywgYXBwbHkpO1xuICAgIH1cbiAgICBlcnJvcihtZXNzYWdlLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGFwcGx5ID0gW21lc3NhZ2UsICdlcnJvciddLmNvbmNhdChhcmdzKTtcbiAgICAgICAgdGhpcy5sb2cuYXBwbHkodGhpcywgYXBwbHkpO1xuICAgIH1cbiAgICBnZXRQcm9jSW5mbygpIHtcbiAgICAgICAgcmV0dXJuIGAke2dsb2JhbC5wcm9jZXNzLmVudi5uYW1lIHx8ICcnfSAke2dsb2JhbC5wcm9jZXNzLmVudi5ob3N0bmFtZSB8fCAnJ30gJHtnbG9iYWwucHJvY2Vzcy5waWR9YDtcbiAgICB9XG4gICAgaXNBbGxvd2VkKGxvZ0xldmVsKSB7XG4gICAgICAgIGNvbnN0IGxvZ0xldmVsT3JkZXIgPSBbJ2xvZycsICdkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXTtcbiAgICAgICAgcmV0dXJuIGxvZ0xldmVsT3JkZXIuaW5kZXhPZihsb2dMZXZlbCkgPj0gbG9nTGV2ZWxPcmRlci5pbmRleE9mKHRoaXMubG9nTGV2ZWwpO1xuICAgIH1cbiAgICBjdXJyZW50VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudF8xLmRlZmF1bHQoKS5mb3JtYXQoJ0RELk1NLllZWVkgSEg6bW06c3MnKTtcbiAgICB9XG4gICAgZ2V0TG9nUG9pbnQoKSB7XG4gICAgICAgIGNvbnN0IHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgICBsZXQgY2FsbHBvaW50O1xuICAgICAgICBmb3IgKGNvbnN0IFtpbmRleCwgc3RhY2twYXJ0XSBvZiBzdGFjay5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgIGlmICghaW5kZXgpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIXV0aWxfMS5pbmNsdWRlc01lbWJlck9mTGlzdChzdGFja3BhcnQsIHRoaXMucHJvdG90eXBlTmFtZXMsICcudHMnKSkge1xuICAgICAgICAgICAgICAgIGNhbGxwb2ludCA9IHN0YWNrcGFydC5zcGxpdChwYXRoXzEuc2VwKS5wb3AoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsbHBvaW50KSB7XG4gICAgICAgICAgICBjYWxscG9pbnQgPSBjYWxscG9pbnQucmVwbGFjZSgnKScsICcnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxwb2ludCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWxscG9pbnQ7XG4gICAgfVxufVxuZXhwb3J0cy5CRE9Mb2dnZXIgPSBCRE9Mb2dnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQVEc5bloyVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlzYVdJdlFrUlBURzluWjJWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVOQkxEUkVRVUUwUWp0QlFVTTFRaXdyUWtGQk1rSTdRVUZETTBJc01FTkJRVzFHTzBGQlYyNUdMRTFCUVhOQ0xGTkJRVk03U1VGclJETkNMRmxCUVZrc1QwRkJaME03VVVFelEzSkRMRmxCUVU4c1IwRkJXU3hoUVVGaExFTkJRVU03VVVGUmFrTXNkMEpCUVcxQ0xFZEJRV0VzUzBGQlN5eERRVUZETzFGQlVYUkRMSEZDUVVGblFpeEhRVUZoTEV0QlFVc3NRMEZCUXp0UlFXVnVReXhoUVVGUkxFZEJRV1VzVDBGQlR5eERRVUZETzFGQlZXNUNMRzFDUVVGakxFZEJRV0VzYVVOQlFUQkNMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRkwwSXNRMEZCUXp0SlFWY3hReXhIUVVGSExFTkJRVU1zVDBGQldTeEZRVUZGTEZkQlFYTkNMRXRCUVVzc1JVRkJSU3hIUVVGSExFbEJRVmM3VVVGRGFFVXNTVUZCU1N4UlFVRlJMRXRCUVVzc1MwRkJTeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNN1dVRkJSU3hQUVVGUE8xRkJRelZFTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZPMWxCUTJ4RkxFMUJRVTBzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03V1VGRGVFTXNTVUZCU1N4UFFVRlBMRWRCUVdFc1JVRkJSU3hEUVVGRE8xbEJRek5DTEVsQlFVa3NUVUZCVFN4WlFVRlpMRXRCUVVzc1JVRkJSVHRuUWtGRGVrSXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdZVUZEY0VNN08yZENRVUZOTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03V1VGRE5VSXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFpRVU4wUWl4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTmtMRTlCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8xTkJRelZFTzFGQlEwUXNUVUZCVFN4WlFVRlpMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTXhReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhKUVVGSkxGRkJRVkVzUzBGQlN5eFBRVUZQTEVWQlFVVTdXVUZEYUVRc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVWQlFVVXNUMEZCVHl4SFFVRkhMRmxCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEZsQlFWa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU42Ump0SlFVTk1MRU5CUVVNN1NVRlJUU3hMUVVGTExFTkJRVU1zVDBGQldTeEZRVUZGTEVkQlFVY3NTVUZCVXp0UlFVTnVReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZET1VNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRnZRaXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU5zUkN4RFFVRkRPMGxCVVUwc1NVRkJTU3hEUVVGRExFOUJRVmtzUlVGQlJTeEhRVUZITEVsQlFWTTdVVUZEYkVNc1RVRkJUU3hMUVVGTExFZEJRVWNzUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlF6ZERMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NSVUZCYjBJc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJFUXNRMEZCUXp0SlFWRk5MRWxCUVVrc1EwRkJReXhQUVVGWkxFVkJRVVVzUjBGQlJ5eEpRVUZUTzFGQlEyeERMRTFCUVUwc1MwRkJTeXhIUVVGSExFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU0zUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVWQlFXOUNMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMnhFTEVOQlFVTTdTVUZSVFN4TFFVRkxMRU5CUVVNc1QwRkJXU3hGUVVGRkxFZEJRVWNzU1VGQlV6dFJRVU51UXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE9VTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZ2UWl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOc1JDeERRVUZETzBsQlUxTXNWMEZCVnp0UlFVTnFRaXhQUVVGUExFZEJRVWNzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSkxFVkJRVVVzU1VGQlNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFbEJRVWtzUlVGQlJTeEpRVUZKTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03U1VGRGVrY3NRMEZCUXp0SlFTdENVeXhUUVVGVExFTkJRVU1zVVVGQmJVSTdVVUZEYmtNc1RVRkJUU3hoUVVGaExFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RlFVRkZMRTFCUVUwc1JVRkJSU3hOUVVGTkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdVVUZEYUVVc1QwRkJUeXhoUVVGaExFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMR0ZCUVdFc1EwRkJReXhQUVVGUExFTkJRVk1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMGxCUXpOR0xFTkJRVU03U1VGVFV5eFhRVUZYTzFGQlEycENMRTlCUVU4c1owSkJRVTBzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eERRVUZETzBsQlEyeEVMRU5CUVVNN1NVRlRVeXhYUVVGWE8xRkJRMnBDTEUxQlFVMHNTMEZCU3l4SFFVRlpMRWxCUVVrc1MwRkJTeXhGUVVGRkxFTkJRVU1zUzBGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOMFJDeEpRVUZKTEZOQlFWTXNRMEZCUXp0UlFVTmtMRXRCUVVzc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZUTEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFVkJRVVU3V1VGRE9VTXNTVUZCU1N4RFFVRkRMRXRCUVVzN1owSkJRVVVzVTBGQlV6dFpRVU55UWl4SlFVRkpMRU5CUVVNc01rSkJRVzlDTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRVVVzUzBGQlN5eERRVUZETEVWQlFVVTdaMEpCUXpsRUxGTkJRVk1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRlZCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTjJReXhOUVVGTk8yRkJRMVE3VTBGRFNqdFJRVU5FTEVsQlFVa3NVMEZCVXl4RlFVRkZPMWxCUTFnc1UwRkJVeXhIUVVGSExGTkJRVk1zUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRekZETzJGQlFVMDdXVUZEU0N4VFFVRlRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xTkJRMnhDTzFGQlEwUXNUMEZCVHl4VFFVRlRMRU5CUVVNN1NVRkRja0lzUTBGQlF6dERRVU5LTzBGQk0wMUVMRGhDUVRKTlF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEVudGl0eSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSwgZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5leHBpcmUgPSBJbmZpbml0eTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5leHBpcmUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIChkdXJhdGlvbiB8fCBJbmZpbml0eSk7XG4gICAgfVxuICAgIGdldCBleHBpcmVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leHBpcmUgPyB0aGlzLmV4cGlyZSA8IG5ldyBEYXRlKCkuZ2V0VGltZSgpIDogZmFsc2U7XG4gICAgfVxufVxuY2xhc3MgQkRPTWFwQ2FjaGUgZXh0ZW5kcyBNYXAge1xuICAgIHNldChrZXksIHZhbHVlLCBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBlbnRpdHkgPSBuZXcgRW50aXR5KHZhbHVlLCBkdXJhdGlvbik7XG4gICAgICAgIHJldHVybiBzdXBlci5zZXQoa2V5LCBlbnRpdHkpO1xuICAgIH1cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IHN1cGVyLmdldChrZXkpO1xuICAgICAgICBpZiAoZW50aXR5ID09PSB1bmRlZmluZWQgfHwgZW50aXR5LmV4cGlyZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnRpdHkuZGF0YTtcbiAgICB9XG59XG5leHBvcnRzLkJET01hcENhY2hlID0gQkRPTWFwQ2FjaGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQVFdGd1EyRmphR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJ4cFlpOUNSRTlOWVhCRFlXTm9aUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVdEJMRTFCUVUwc1RVRkJUVHRKUVdkQ1VpeFpRVUZaTEVsQlFVOHNSVUZCUlN4UlFVRnBRanRSUVVZNVFpeFhRVUZOTEVkQlFWY3NVVUZCVVN4RFFVRkRPMUZCUnpsQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTJwQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4SlFVRkpMRVZCUVVVc1EwRkJReXhQUVVGUExFVkJRVVVzUjBGQlJ5eERRVUZETEZGQlFWRXNTVUZCU1N4UlFVRlJMRU5CUVVNc1EwRkJRenRKUVVOb1JTeERRVUZETzBsQlUwUXNTVUZCU1N4UFFVRlBPMUZCUTFBc1QwRkJUeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWtzU1VGQlNTeEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU53UlN4RFFVRkRPME5CUTBvN1FVRlRSQ3hOUVVGaExGZEJRV3RDTEZOQlFWRXNSMEZCYVVJN1NVRlhOME1zUjBGQlJ5eERRVUZETEVkQlFVMHNSVUZCUlN4TFFVRlJMRVZCUVVVc1VVRkJhVUk3VVVGRE1VTXNUVUZCVFN4TlFVRk5MRWRCUVVjc1NVRkJTU3hOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUXpORExFOUJRVThzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGJFTXNRMEZCUXp0SlFWTk5MRWRCUVVjc1EwRkJReXhIUVVGTk8xRkJRMklzVFVGQlRTeE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU01UWl4SlFVRkpMRTFCUVUwc1MwRkJTeXhUUVVGVExFbEJRVWtzVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlR0WlFVTjRReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTJwQ0xFOUJRVThzVTBGQlV5eERRVUZETzFOQlEzQkNPMUZCUTBRc1QwRkJUeXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETzBsQlEzWkNMRU5CUVVNN1EwRkRTanRCUVM5Q1JDeHJRMEVyUWtNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBCRE9Nb2RlbF8xO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IHV1aWRfMSA9IHJlcXVpcmUoXCJ1dWlkXCIpO1xuY29uc3QgdHlwZV9ncmFwaHFsXzEgPSByZXF1aXJlKFwidHlwZS1ncmFwaHFsXCIpO1xuY29uc3QgQmluZGluZ18xID0gcmVxdWlyZShcIn5iZG8vbGliL0JpbmRpbmdcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgTW9kZWxSZWdpc3RyeV8xID0gcmVxdWlyZShcIn5iZG8vbGliL01vZGVsUmVnaXN0cnlcIik7XG5sZXQgQkRPTW9kZWwgPSBCRE9Nb2RlbF8xID0gY2xhc3MgQkRPTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQkRPTW9kZWwgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gQkRPTW9kZWxfMS5jb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy5kYXRhYmFzZU5hbWUgPSBCRE9Nb2RlbF8xLmRhdGFiYXNlTmFtZTtcbiAgICAgICAgdGhpcy5pZCA9IGBwZW5kaW5nXyR7dXVpZF8xLnY0KCl9YDtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcy5jb25zdHJ1Y3RvcikubmFtZTtcbiAgICAgICAgTW9kZWxSZWdpc3RyeV8xLk1vZGVsUmVnaXN0cnkuZ2V0SW5zdGFuY2UoKS5yZWdpc3Rlcih0aGlzKTtcbiAgICB9XG4gICAgZ2V0IGJpbmRpbmdzKCkge1xuICAgICAgICBjb25zdCBiaW5kaW5ncyA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcywgXCJiaW5kaW5nc1wiKTtcbiAgICAgICAgcmV0dXJuIGJpbmRpbmdzID8gYmluZGluZ3MgOiBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZUJ5SUQoX2lkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKTtcbiAgICB9XG4gICAgZ2V0UmVmZXJlbmNlU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYF9yZWZlcmVuY2U6JHt0aGlzLmNsYXNzTmFtZX0ke3RoaXMuaWR9YDtcbiAgICB9XG4gICAgYmluZChwcm9wTmFtZSwgbW9kZSkge1xuICAgICAgICByZXR1cm4gbmV3IEJpbmRpbmdfMS5CaW5kaW5nKHRoaXMsIHByb3BOYW1lLCBtb2RlKTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnRvSlNPTigpO1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgICAgICAgICBpZiAodGhpc1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpc1trZXldO1xuICAgICAgICAgICAgICAgIGRhdGFba2V5XSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGFzeW5jIGlzVW5zYXZlZChhdHRyKSB7XG4gICAgICAgIGNvbnN0IHVuc2F2ZWRDaGFuZ2VzID0gYXdhaXQgdGhpcy5nZXRVbnNhdmVkQ2hhbmdlcygpO1xuICAgICAgICBsZXQgdW5zYXZlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodW5zYXZlZENoYW5nZXMgJiYgdW5zYXZlZENoYW5nZXMuaGFzT3duUHJvcGVydHkoYXR0cikpXG4gICAgICAgICAgICB1bnNhdmVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bnNhdmVkKTtcbiAgICB9XG4gICAgYXN5bmMgaGFzVW5zYXZlZENoYW5nZXMoKSB7XG4gICAgICAgIGNvbnN0IHVuc2F2ZWRDaGFuZ2VzID0gYXdhaXQgdGhpcy5nZXRVbnNhdmVkQ2hhbmdlcygpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKEJvb2xlYW4oT2JqZWN0LmtleXModW5zYXZlZENoYW5nZXMpLmxlbmd0aCkpO1xuICAgIH1cbn07XG5CRE9Nb2RlbC5ncmFwaFFMVHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihCRE9Nb2RlbF8xLmNvbnN0cnVjdG9yKTtcbkJET01vZGVsLmlzQkRPTW9kZWwgPSB0cnVlO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxuXSwgQkRPTW9kZWwucHJvdG90eXBlLCBcImlzQkRPTW9kZWxcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgQkRPTW9kZWwucHJvdG90eXBlLCBcImNvbGxlY3Rpb25OYW1lXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIEJET01vZGVsLnByb3RvdHlwZSwgXCJkYXRhYmFzZU5hbWVcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmF0dHJpYnV0ZSgoX3R5cGUpID0+IHR5cGVfZ3JhcGhxbF8xLklEKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBCRE9Nb2RlbC5wcm90b3R5cGUsIFwiaWRcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmF0dHJpYnV0ZSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIEJET01vZGVsLnByb3RvdHlwZSwgXCJjbGFzc05hbWVcIiwgdm9pZCAwKTtcbkJET01vZGVsID0gQkRPTW9kZWxfMSA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3Rvcih7IGlzQWJzdHJhY3Q6IHRydWUgfSksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG5dLCBCRE9Nb2RlbCk7XG5leHBvcnRzLkJET01vZGVsID0gQkRPTW9kZWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQVFc5a1pXd3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMnhwWWk5Q1JFOU5iMlJsYkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFc0swSkJRV3RETzBGQlEyeERMQ3REUVVGclF6dEJRVU5zUXl3NFEwRkJkMFE3UVVGRGVFUXNjMFJCUVRaRk8wRkJRemRGTEd0RVFVRnJSRHRCUVVWc1JDd3dSRUZCZFVRN1FVRlhka1FzU1VGQmMwSXNVVUZCVVN4blFrRkJPVUlzVFVGQmMwSXNVVUZCVVR0SlFTdEhNVUk3VVVGb1JEUkNMR1ZCUVZVc1IwRkJXU3hKUVVGSkxFTkJRVU03VVVGUk0wSXNiVUpCUVdNc1IwRkJXU3hWUVVGUkxFTkJRVU1zWTBGQll5eERRVUZETzFGQlVXeEVMR2xDUVVGWkxFZEJRVmtzVlVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXp0UlFWTjZReXhQUVVGRkxFZEJRVmNzVjBGQlZ5eFRRVUZKTEVWQlFVVXNSVUZCUlN4RFFVRkRPMUZCVlhKRExHTkJRVk1zUjBGQlZ5eE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTTdVVUZqTVVZc05rSkJRV0VzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGREwwTXNRMEZCUXp0SlFYWkhSQ3hKUVVGakxGRkJRVkU3VVVGRGJFSXNUVUZCVFN4UlFVRlJMRWRCUVVjc2MwSkJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRMME1zVDBGQlR5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZITEVWQlFVVXNRMEZCUXp0SlFVTXpReXhEUVVGRE8wbEJPRVpOTEUxQlFVMHNRMEZCUXl4bFFVRmxMRU5CUVhkRExFZEJRVms3VVVGRE4wVXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMGxCUTNaRExFTkJRVU03U1VGWlRTeHJRa0ZCYTBJN1VVRkRja0lzVDBGQlR5eGpRVUZqTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzQkVMRU5CUVVNN1NVRlhUU3hKUVVGSkxFTkJRVEpGTEZGQlFWY3NSVUZCUlN4SlFVRlJPMUZCUTNaSExFOUJRVThzU1VGQlNTeHBRa0ZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUUyUkN4RFFVRkRPMGxCUTNwSExFTkJRVU03U1VGUlRTeFJRVUZSTzFGQlExZ3NUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFGQlF6TkNMRTlCUVU4c1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTm9ReXhEUVVGRE8wbEJWVTBzVFVGQlRUdFJRVU5VTEUxQlFVMHNTVUZCU1N4SFFVRnRRaXhGUVVGRkxFTkJRVU03VVVGRGFFTXNTMEZCU3l4TlFVRk5MRWRCUVVjc1NVRkJTU3hKUVVGSkxFVkJRVVU3V1VGRGNFSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzVTBGQlV5eEZRVUZGTzJkQ1FVTjZRaXhOUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRekZDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU03WVVGRGRrSTdVMEZEU2p0UlFVTkVMRTlCUVU4c1NVRkJTU3hEUVVGRE8wbEJRMmhDTEVOQlFVTTdTVUUwUWswc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUVyUWp0UlFVTnNSQ3hOUVVGTkxHTkJRV01zUjBGQlJ5eE5RVUZOTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeERRVUZETzFGQlEzUkVMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU53UWl4SlFVRkpMR05CUVdNc1NVRkJTU3hqUVVGakxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXp0WlFVRkZMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRE1VVXNUMEZCVHl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzBsQlEzQkRMRU5CUVVNN1NVRlRUU3hMUVVGTExFTkJRVU1zYVVKQlFXbENPMUZCUXpGQ0xFMUJRVTBzWTBGQll5eEhRVUZITEUxQlFVMHNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTEVOQlFVTTdVVUZEZEVRc1QwRkJUeXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRlRVVzUTBGQlF6dERRVmRLTEVOQlFVRTdRVUYyVFRCQ0xHOUNRVUZYTEVkQlFWRXNUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhWUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdRVUZuUXk5RUxHMUNRVUZWTEVkQlFWa3NTVUZCU1N4RFFVRkRPMEZCVVhSRE8wbEJRVmdzY1VKQlFWRXNSVUZCUlRzN05FTkJRVFJETzBGQlVUTkRPMGxCUVZnc2NVSkJRVkVzUlVGQlJUczdaMFJCUVcxRk8wRkJVV3hGTzBsQlFWZ3NjVUpCUVZFc1JVRkJSVHM3T0VOQlFTdEVPMEZCVTJoRU8wbEJRWHBDTEhOQ1FVRlRMRU5CUVVNc1EwRkJReXhMUVVGTExFVkJRVVVzUlVGQlJTeERRVUZETEdsQ1FVRkZMRU5CUVVNN08yOURRVUY1UXp0QlFWVnlSRHRKUVVGYUxITkNRVUZUTEVWQlFVVTdPekpEUVVGclJqdEJRV3hITlVVc1VVRkJVVHRKUVVRM1FpdzBRa0ZCWlN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZET3p0SFFVTm9RaXhSUVVGUkxFTkJPRTQzUWp0QlFUbE9jVUlzTkVKQlFWRWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuY2xhc3MgQkRPUm91dGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJvdXRlck5hbWVTcGFjZSA9IGAvJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWUudG9Mb3dlckNhc2UoKX1gO1xuICAgICAgICB0aGlzLnJvdXRlcyA9IFsnLyddO1xuICAgICAgICB0aGlzLnRlbXBsYXRlU3RyaW5nID0gJzxkaXY+PC9kaXY+JztcbiAgICAgICAgdGhpcy5qc29uT25seSA9IGZhbHNlO1xuICAgIH1cbiAgICByZW5kZXJUZW1wbGF0ZSh0ZW1wbGF0ZVBhcmFtcykge1xuICAgICAgICBsZXQgc3RyaW5nVG9QYXJzZSA9IG51bGw7XG4gICAgICAgIGlmICh1dGlsXzEuaXNTdHJpbmcodGhpcy50ZW1wbGF0ZVN0cmluZykpIHtcbiAgICAgICAgICAgIHN0cmluZ1RvUGFyc2UgPSBlbnZpcm9ubWVudF8xLnRlbXBsYXRlRW52aXJvbm1lbnQucmVuZGVyU3RyaW5nKHRoaXMudGVtcGxhdGVTdHJpbmcsIHRlbXBsYXRlUGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXRpbF8xLmlzT2JqZWN0KHRoaXMudGVtcGxhdGVTdHJpbmcpKSB7XG4gICAgICAgICAgICBzdHJpbmdUb1BhcnNlID0gdGhpcy50ZW1wbGF0ZVN0cmluZy5yZW5kZXIodGVtcGxhdGVQYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHJpbmdUb1BhcnNlO1xuICAgIH1cbiAgICBhc3luYyB0ZW1wbGF0ZVBhcmFtcyhfcmVxdWVzdE9yUGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG59XG5leHBvcnRzLkJET1JvdXRlID0gQkRPUm91dGU7XG5CRE9Sb3V0ZS5hdHRhY2hUb1NlcnZlcnMgPSBbJyonXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBVbTkxZEdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyeHBZaTlDUkU5U2IzVjBaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVVkJMREJEUVVGeFJEdEJRVU55UkN4M1JFRkJOa1E3UVVGVE4wUXNUVUZCYzBJc1VVRkJVVHRKUVVFNVFqdFJRWEZDVnl4dlFrRkJaU3hIUVVGWExFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFVkJRVVVzUTBGQlF6dFJRVkZ3UlN4WFFVRk5MRWRCUVdFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRV3RDZEVJc2JVSkJRV01zUjBGQmMwSXNZVUZCWVN4RFFVRkRPMUZCVld4RUxHRkJRVkVzUjBGQldTeExRVUZMTEVOQlFVTTdTVUZ0UkhoRExFTkJRVU03U1VGNFEyRXNZMEZCWXl4RFFVRkRMR05CUVRoQ08xRkJRMjVFTEVsQlFVa3NZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVONlFpeEpRVUZKTEdWQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFVkJRVVU3V1VGREwwSXNZVUZCWVN4SFFVRkhMR2xEUVVGdFFpeERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhGUVVGRkxHTkJRV01zUTBGQlF5eERRVUZETzFOQlEzcEdPMUZCUTBRc1NVRkJTU3hsUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RlFVRkZPMWxCUXk5Q0xHRkJRV0VzUjBGQll5eEpRVUZKTEVOQlFVTXNZMEZCWlN4RFFVRkRMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF6dFRRVU14UlR0UlFVTkVMRTlCUVU4c1lVRkJZU3hEUVVGRE8wbEJRM3BDTEVOQlFVTTdTVUZYVXl4TFFVRkxMRU5CUVVNc1kwRkJZeXhEUVVGRExHZENRVUV3UXp0UlFVTnlSU3hQUVVGUExFVkJRVVVzUTBGQlF6dEpRVU5rTEVOQlFVTTdPMEZCTVVaTUxEUkNRVFJIUXp0QlFXaEhhVUlzZDBKQlFXVXNSMEZCWVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJpbmRpbmdfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CaW5kaW5nXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmZ1bmN0aW9uIGJhc2VDb25zdHJ1Y3RvckZhY3RvcnkoY3RvciwgY29uc3RQYXJhbXNJbmRleCkge1xuICAgIGNsYXNzIEJhc2VDb25zdHJ1Y3RvciBleHRlbmRzIGN0b3Ige1xuICAgICAgICBjb25zdHJ1Y3RvciguLi5wYXJhbXMpIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLnBhcmFtcyk7XG4gICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gQmFzZUNvbnN0cnVjdG9yLmNvbGxlY3Rpb25OYW1lO1xuICAgICAgICAgICAgdGhpcy5kYXRhYmFzZU5hbWUgPSBCYXNlQ29uc3RydWN0b3IuZGF0YWJhc2VOYW1lO1xuICAgICAgICAgICAgbGV0IGNvbnN0UGFyYW1zID0gcGFyYW1zW2NvbnN0UGFyYW1zSW5kZXhdO1xuICAgICAgICAgICAgaWYgKCEoY29uc3RQYXJhbXMgaW5zdGFuY2VvZiBPYmplY3QpKVxuICAgICAgICAgICAgICAgIGNvbnN0UGFyYW1zID0ge307XG4gICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMsIFwibm9ybWFsRnVuY3Rpb25hbGl0eVwiLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBkZWZhdWx0U2V0dGluZ3MgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMsIFwiZGVmYXVsdFNldHRpbmdzXCIpIHx8IHt9O1xuICAgICAgICAgICAgZGVmYXVsdFNldHRpbmdzID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0U2V0dGluZ3MsIGNvbnN0UGFyYW1zKTtcbiAgICAgICAgICAgIGlmICh1dGlsXzEuaXNGdW5jdGlvbih0aGlzLmdldE5hbWVzcGFjZWRTdG9yYWdlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gY29uc3RQYXJhbXMuaWQgfHwgZGVmYXVsdFNldHRpbmdzLmlkO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlZFNldHRpbmdzID0gdGhpcy5nZXROYW1lc3BhY2VkU3RvcmFnZShcIipcIiwgXCJpZFwiLCBpZCkgfHwge307XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY2FjaGVkU2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhY2hlZFNldHRpbmdzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkZWZhdWx0U2V0dGluZ3Nba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQmluZGluZ18xLkJpbmRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldFZhbHVlKGNhY2hlZFNldHRpbmdzW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTZXR0aW5nc1trZXldID0gY2FjaGVkU2V0dGluZ3Nba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGVmYXVsdFNldHRpbmdzKTtcbiAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcywgXCJjb25zdHJ1Y3Rpb25Db21wbGV0ZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICh1dGlsXzEuaXNGdW5jdGlvbih0aGlzLmNvbnN0cnVjdGVkQ2FsbGJhY2spKVxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0ZWRDYWxsYmFjayguLi5wYXJhbXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEJhc2VDb25zdHJ1Y3Rvci5jbGFzc05hbWUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQmFzZUNvbnN0cnVjdG9yKS5uYW1lO1xuICAgIEJhc2VDb25zdHJ1Y3Rvci5ncmFwaFFMVHlwZSA9IGN0b3I7XG4gICAgQmFzZUNvbnN0cnVjdG9yLmNvbGxlY3Rpb25OYW1lID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShCYXNlQ29uc3RydWN0b3IsIFwiY29sbGVjdGlvbk5hbWVcIik7XG4gICAgQmFzZUNvbnN0cnVjdG9yLmRhdGFiYXNlTmFtZSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoQmFzZUNvbnN0cnVjdG9yLCBcImRhdGFiYXNlTmFtZVwiKTtcbiAgICByZXR1cm4gQmFzZUNvbnN0cnVjdG9yO1xufVxuZXhwb3J0cy5iYXNlQ29uc3RydWN0b3JGYWN0b3J5ID0gYmFzZUNvbnN0cnVjdG9yRmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFtRnpaVU52Ym5OMGNuVmpkRzl5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5c2FXSXZRbUZ6WlVOdmJuTjBjblZqZEc5eUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc09FTkJRVEpETzBGQlF6TkRMR3RFUVVGclJUdEJRVU5zUlN3d1EwRkJOa003UVVGM1F6ZERMRk5CUVdkQ0xITkNRVUZ6UWl4RFFVRkRMRWxCUVZNc1JVRkJSU3huUWtGQmQwSTdTVUZSZEVVc1RVRkJUU3hsUVVGblFpeFRRVUZSTEVsQlFVazdVVUZ6UkRsQ0xGbEJRVmtzUjBGQlJ5eE5RVUZoTzFsQlEzaENMRXRCUVVzc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETzFsQldFd3NiVUpCUVdNc1IwRkJXU3hsUVVGbExFTkJRVU1zWTBGQll5eERRVUZETzFsQlVYcEVMR2xDUVVGWkxFZEJRVmtzWlVGQlpTeERRVUZETEZsQlFWa3NRMEZCUXp0WlFVbHFSU3hKUVVGSkxGZEJRVmNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF6dFpRVU16UXl4SlFVRkpMRU5CUVVNc1EwRkJReXhYUVVGWExGbEJRVmtzVFVGQlRTeERRVUZETzJkQ1FVRkZMRmRCUVZjc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRGRrUXNlVUpCUVdNc1EwRkJReXhKUVVGSkxFVkJRVVVzY1VKQlFYRkNMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRGJFUXNTVUZCU1N4bFFVRmxMRWRCUVdsRExITkNRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMR2xDUVVGcFFpeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMWxCUXk5R0xHVkJRV1VzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMR1ZCUVdVc1JVRkJSU3hYUVVGWExFTkJRVU1zUTBGQlF6dFpRVU01UkN4SlFVRkpMR2xDUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExFVkJRVVU3WjBKQlEzWkRMRTFCUVUwc1JVRkJSU3hIUVVGSExGZEJRVmNzUTBGQlF5eEZRVUZGTEVsQlFVa3NaVUZCWlN4RFFVRkRMRVZCUVVVc1EwRkJRenRuUWtGRGFFUXNUVUZCVFN4alFVRmpMRWRCUVVjc1NVRkJTU3hEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRWRCUVVjc1JVRkJSU3hKUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMmRDUVVOMFJTeExRVUZMTEUxQlFVMHNSMEZCUnl4SlFVRkpMR05CUVdNc1JVRkJSVHR2UWtGRE9VSXNTVUZCU1N4alFVRmpMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzNkQ1FVTndReXhOUVVGTkxFOUJRVThzUjBGQlJ5eGxRVUZsTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2QwSkJRM0pETEVsQlFVa3NUMEZCVHl4WlFVRlpMR2xDUVVGUExFVkJRVVU3TkVKQlF6VkNMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN2VVSkJRM3BET3pzMFFrRkJUU3hsUVVGbExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8zRkNRVU55UkR0cFFrRkRTanRoUVVOS08xbEJRMFFzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1pVRkJaU3hEUVVGRExFTkJRVU03V1VGRGNrTXNlVUpCUVdNc1EwRkJReXhKUVVGSkxFVkJRVVVzYzBKQlFYTkNMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRGJrUXNTVUZCU1N4cFFrRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJRenRuUWtGQlVTeEpRVUZMTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTjZSaXhEUVVGRE96dEpRWEJGYzBJc2VVSkJRVk1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dEpRVlY0UkN3eVFrRkJWeXhIUVVGUkxFbEJRVWtzUTBGQlF6dEpRVk40UWl3NFFrRkJZeXhIUVVGWkxITkNRVUZYTEVOQlFVTXNaVUZCWlN4RlFVRkZMR2RDUVVGblFpeERRVUZETEVOQlFVTTdTVUZUZWtVc05FSkJRVmtzUjBGQldTeHpRa0ZCVnl4RFFVRkRMR1ZCUVdVc1JVRkJSU3hqUVVGakxFTkJRVU1zUTBGQlF6dEpRVEJEYUVjc1QwRkJUeXhsUVVGbExFTkJRVU03UVVGRE0wSXNRMEZCUXp0QlFYWkdSQ3gzUkVGMVJrTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgRmllbGRfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9GaWVsZFwiKTtcbmNvbnN0IGZyYW1ld29ya18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZnJhbWV3b3JrXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgaW5pQmluZE5hbWUgPSBcImluaXRpYXRvckJpbmRpbmdcIjtcbmNvbnN0IGJpbmROYW1lID0gXCJiaW5kaW5nc1wiO1xuY2xhc3MgQmluZGluZyB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSwgbW9kZSA9IFwiUmVhZFdyaXRlXCIpIHtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdG9yID0gdGhpcy5nZXRPcmlnaW5hbFByb3BlcnR5RGVzY3JpcHRvcih0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSk7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgfHwgdGhpcy5vYmplY3RbdGhpcy5wcm9wZXJ0eV07XG4gICAgfVxuICAgIGluc3RhbGwoaW5pdGlhdG9yLCBwcm9wZXJ0eSkge1xuICAgICAgICB0aGlzLmluaXRpYXRvciA9IGluaXRpYXRvcjtcbiAgICAgICAgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgICAgICB0aGlzLmluaXRpYXRvckRlc2NyaXB0b3IgPSB0aGlzLmdldE9yaWdpbmFsUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5KTtcbiAgICAgICAgaWYgKCFSZWZsZWN0Lmhhc01ldGFkYXRhKGluaUJpbmROYW1lLCB0aGlzLmluaXRpYXRvcikpXG4gICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCBpbmlCaW5kTmFtZSwgbmV3IE1hcCgpKTtcbiAgICAgICAgaWYgKCFSZWZsZWN0Lmhhc01ldGFkYXRhKGJpbmROYW1lLCB0aGlzLm9iamVjdCkpXG4gICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMub2JqZWN0LCBiaW5kTmFtZSwgbmV3IE1hcCgpKTtcbiAgICAgICAgY29uc3QgaW5pdGlhdG9yTURhdGEgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCBpbmlCaW5kTmFtZSkgfHwgbmV3IE1hcCgpO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JCaW5kaW5nID0gaW5pdGlhdG9yTURhdGEuZ2V0KHRoaXMuaW5pdGlhdG9yUHJvcGVydHkpO1xuICAgICAgICBpZiAoaW5pdGlhdG9yQmluZGluZylcbiAgICAgICAgICAgIGluaXRpYXRvckJpbmRpbmcucmVtb3ZlKCk7XG4gICAgICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLm9iamVjdCwgYmluZE5hbWUpIHx8IG5ldyBNYXAoKTtcbiAgICAgICAgaWYgKCFtRGF0YS5oYXModGhpcy5wcm9wZXJ0eSkpXG4gICAgICAgICAgICBtRGF0YS5zZXQodGhpcy5wcm9wZXJ0eSwgW10pO1xuICAgICAgICBtRGF0YS5nZXQodGhpcy5wcm9wZXJ0eSkucHVzaCh0aGlzKTtcbiAgICAgICAgaW5pdGlhdG9yTURhdGEuc2V0KHRoaXMuaW5pdGlhdG9yUHJvcGVydHksIHRoaXMpO1xuICAgICAgICBjb25zdCBmaWVsZE1EYXRhTmFtZSA9IGBmaWVsZDoke3RoaXMucHJvcGVydHl9YDtcbiAgICAgICAgY29uc3Qgb2JqZWN0RmllbGQgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JGaWVsZCA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLmluaXRpYXRvciwgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSk7XG4gICAgICAgIGxldCBmaWVsZCA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLm9iamVjdCwgZmllbGRNRGF0YU5hbWUpO1xuICAgICAgICBpZiAoIWZpZWxkKVxuICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhKHRoaXMub2JqZWN0LCBmaWVsZE1EYXRhTmFtZSwgbmV3IEZpZWxkXzEuRmllbGQodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpKTtcbiAgICAgICAgZmllbGQgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIGZpZWxkTURhdGFOYW1lKTtcbiAgICAgICAgZmllbGQuYWRkRmllbGQob2JqZWN0RmllbGQpO1xuICAgICAgICBmaWVsZC5hZGRGaWVsZChpbml0aWF0b3JGaWVsZCk7XG4gICAgICAgIHRoaXMucmVwbGFjZURlc2NyaXB0b3IoKTtcbiAgICAgICAgUmVmbGVjdC5zZXQodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHksIHRoaXMudmFsdWVPZigpKTtcbiAgICB9XG4gICAgcmVtb3ZlKCkge1xuICAgICAgICBjb25zdCBvYmplY3RWYWx1ZSA9IHRoaXMub2JqZWN0W3RoaXMucHJvcGVydHldO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JWYWx1ZSA9IHRoaXMuaW5pdGlhdG9yW3RoaXMuaW5pdGlhdG9yUHJvcGVydHldO1xuICAgICAgICBjb25zdCBvYmplY3RNRGF0YSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5vYmplY3QsIGJpbmROYW1lKTtcbiAgICAgICAgY29uc3Qgb2JqZWN0QmluZGluZ3MgPSBvYmplY3RNRGF0YSA/IG9iamVjdE1EYXRhLmdldCh0aGlzLnByb3BlcnR5KSA6IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgaW5pdGlhdG9yTURhdGEgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCBpbmlCaW5kTmFtZSk7XG4gICAgICAgIGNvbnN0IGluaXRpYXRvckJpbmRpbmcgPSBpbml0aWF0b3JNRGF0YSA/IGluaXRpYXRvck1EYXRhLmdldCh0aGlzLmluaXRpYXRvclByb3BlcnR5LnRvU3RyaW5nKCkpIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBmaWVsZE1EYXRhTmFtZSA9IGBmaWVsZDoke3RoaXMucHJvcGVydHl9YDtcbiAgICAgICAgY29uc3QgZmllbGQgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIGZpZWxkTURhdGFOYW1lKTtcbiAgICAgICAgaWYgKGluaXRpYXRvckJpbmRpbmcpIHtcbiAgICAgICAgICAgIGlmIChpbml0aWF0b3JNRGF0YSlcbiAgICAgICAgICAgICAgICBpbml0aWF0b3JNRGF0YS5kZWxldGUodGhpcy5pbml0aWF0b3JQcm9wZXJ0eS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZURlc2NyaXB0b3IodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHksIGluaXRpYXRvclZhbHVlLCB0aGlzLmluaXRpYXRvckRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgZmllbGQucmVtb3ZlRmllbGQobWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iamVjdEJpbmRpbmdzKSB7XG4gICAgICAgICAgICB1dGlsXzEucmVtb3ZlRWxlbWVudEZyb21BcnJheShvYmplY3RCaW5kaW5ncywgdGhpcyk7XG4gICAgICAgICAgICBmaWVsZC5yZW1vdmVGaWVsZChtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpKTtcbiAgICAgICAgICAgIGlmICghb2JqZWN0QmluZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdE1EYXRhKVxuICAgICAgICAgICAgICAgICAgICBvYmplY3RNRGF0YS5kZWxldGUodGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlRGVzY3JpcHRvcih0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSwgb2JqZWN0VmFsdWUsIHRoaXMuZGVzY3JpcHRvcik7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhKHRoaXMub2JqZWN0LCBmaWVsZE1EYXRhTmFtZSwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVwbGFjZURlc2NyaXB0b3IoKSB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBiaW5kaW5nR2V0KCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGF0Lm1vZGUgPT09IFwiV3JpdGVPbmx5XCIgJiYgdGhpcyA9PT0gdGhhdC5pbml0aWF0b3IpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyYW1ld29ya18xLmdldHRlcih0aGF0Lm9iamVjdCwgdGhhdC5wcm9wZXJ0eSwgXCJmaWVsZFwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIGJpbmRpbmdTZXQobmV3VmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoYXQubW9kZSA9PT0gXCJSZWFkT25seVwiICYmIHRoaXMgPT09IHRoYXQuaW5pdGlhdG9yKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgZnJhbWV3b3JrXzEuc2V0dGVyKHRoYXQub2JqZWN0LCB0aGF0LnByb3BlcnR5LCBuZXdWYWwsIFwiZmllbGRcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYmluZGluZ0Rlc2MgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHkpO1xuICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5LCBiaW5kaW5nRGVzYyk7XG4gICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcy5vYmplY3QsIFwiYmluZGluZ0Rlc2NyaXB0b3JcIiwgYmluZGluZ0Rlc2MpO1xuICAgIH1cbiAgICByZXN0b3JlRGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5LCB2YWx1ZSwgZGVzY3JpcHRvcikge1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KG9iamVjdCwgcHJvcGVydHkpO1xuICAgICAgICBpZiAoZGVzY3JpcHRvcikge1xuICAgICAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmluaXRpYXRvciwgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH1cbiAgICAgICAgb2JqZWN0W3Byb3BlcnR5LnRvU3RyaW5nKCldID0gdmFsdWU7XG4gICAgfVxuICAgIGdldE9yaWdpbmFsUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwga2V5KSB7XG4gICAgICAgIGxldCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBrZXkpO1xuICAgICAgICBsZXQgbURhdGFOYW1lID0gYmluZE5hbWU7XG4gICAgICAgIGxldCBwcm90b3R5cGUgPSBvYmplY3Q7XG4gICAgICAgIGlmIChvYmplY3QgPT09IHRoaXMuaW5pdGlhdG9yKVxuICAgICAgICAgICAgbURhdGFOYW1lID0gaW5pQmluZE5hbWU7XG4gICAgICAgIHdoaWxlICghZGVzY3JpcHRvcikge1xuICAgICAgICAgICAgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSk7XG4gICAgICAgICAgICBpZiAoIXByb3RvdHlwZSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGlmIChwcm90b3R5cGUuY29uc3RydWN0b3IubmFtZSA9PT0gXCJCYXNlQ29uc3RydWN0b3JcIilcbiAgICAgICAgICAgICAgICBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKTtcbiAgICAgICAgICAgIGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlYXJjaERlc2NyaXB0b3JJbkJpbmRpbmdzID0gZmFsc2U7XG4gICAgICAgIGlmIChkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvci5zZXQgJiYgZGVzY3JpcHRvci5zZXQubmFtZSA9PT0gXCJiaW5kaW5nU2V0XCIpXG4gICAgICAgICAgICAgICAgc2VhcmNoRGVzY3JpcHRvckluQmluZGluZ3MgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3IuZ2V0ICYmIGRlc2NyaXB0b3IuZ2V0Lm5hbWUgPT09IFwiYmluZGluZ0dldFwiKVxuICAgICAgICAgICAgICAgIHNlYXJjaERlc2NyaXB0b3JJbkJpbmRpbmdzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VhcmNoRGVzY3JpcHRvckluQmluZGluZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShvYmplY3QsIG1EYXRhTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBiaW5kaW5ncyA9IG1EYXRhID8gbURhdGEuZ2V0KGtleS50b1N0cmluZygpKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChiaW5kaW5ncykge1xuICAgICAgICAgICAgICAgIGlmIChiaW5kaW5ncyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IgPSBiaW5kaW5nc1swXS5kZXNjcmlwdG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IgPSBiaW5kaW5ncy5pbml0aWF0b3JEZXNjcmlwdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICAgIH1cbn1cbmV4cG9ydHMuQmluZGluZyA9IEJpbmRpbmc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRbWx1WkdsdVp5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiR2xpTDBKcGJtUnBibWN1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3d3UTBGQmVVUTdRVUZGZWtRc01FTkJRWFZETzBGQlEzWkRMRzlFUVVGelJEdEJRVU4wUkN4clJFRkJLMGM3UVVGSkwwY3NUVUZCVFN4WFFVRlhMRWRCUVVjc2EwSkJRV3RDTEVOQlFVTTdRVUZEZGtNc1RVRkJUU3hSUVVGUkxFZEJRVWNzVlVGQlZTeERRVUZETzBGQmMwSTFRaXhOUVVGaExFOUJRVTg3U1VFd1JXaENMRmxCUVZrc1RVRkJVeXhGUVVGRkxGRkJRVmNzUlVGQlJTeFBRVUZ2UWl4WFFVRlhPMUZCUXk5RUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUTNKQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTJwQ0xFbEJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRFpDUVVFMlFpeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzBsQlEzSkdMRU5CUVVNN1NVRkxUU3hSUVVGUkxFTkJRVU1zUzBGQlZ6dFJRVU4yUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dEpRVU4yUWl4RFFVRkRPMGxCVVUwc1QwRkJUenRSUVVOV0xFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0SlFVTndSQ3hEUVVGRE8wbEJVMDBzVDBGQlR5eERRVUZETEZOQlFWa3NSVUZCUlN4UlFVRlhPMUZCUTNCRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUXpOQ0xFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1IwRkJSeXhSUVVGUkxFTkJRVU03VVVGRGJFTXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEhRVUZITEVsQlFVa3NRMEZCUXl3MlFrRkJOa0lzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMUZCUjNSSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETzFsQlFVVXNlVUpCUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEZkQlFWY3NSVUZCUlN4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRE9VY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1dVRkJSU3g1UWtGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVZHNSeXhOUVVGTkxHTkJRV01zUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzVjBGQlZ5eERRVUZETEVsQlFVa3NTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVNM1JTeE5RVUZOTEdkQ1FVRm5RaXhIUVVGSExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVOQlFVTTdVVUZEY0VVc1NVRkJTU3huUWtGQlowSTdXVUZCUlN4blFrRkJaMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0UlFVZG9SQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzVVVGQlVTeERRVUZETEVsQlFVa3NTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVNNVJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETzFsQlFVVXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpWRUxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTndReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVZHFSQ3hOUVVGTkxHTkJRV01zUjBGQlJ5eFRRVUZUTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVOb1JDeE5RVUZOTEZkQlFWY3NSMEZCUnl3NFFrRkJiVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVU53UlN4TlFVRk5MR05CUVdNc1IwRkJSeXc0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8xRkJRMjVHTEVsQlFVa3NTMEZCU3l4SFFVRm5RaXc0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxHTkJRV01zUTBGQlF5eERRVUZETzFGQlF6RkZMRWxCUVVrc1EwRkJReXhMUVVGTE8xbEJRVVVzYVVOQlFYTkNMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeGpRVUZqTEVWQlFVVXNTVUZCU1N4aFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVkMlJ5eExRVUZMTEVkQlFVY3NPRUpCUVcxQ0xFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4alFVRmpMRU5CUVdkQ0xFTkJRVU03VVVGRGVFVXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFJRVU0xUWl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETzFGQlJ5OUNMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4RFFVRkRPMUZCUTNwQ0xFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEZUVVc1EwRkJRenRKUVU5TkxFMUJRVTA3VVVGRlZDeE5RVUZOTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTXZReXhOUVVGTkxHTkJRV01zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMUZCUnpsRUxFMUJRVTBzVjBGQlZ5eEhRVUZITEhOQ1FVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTjJSQ3hOUVVGTkxHTkJRV01zUjBGQlJ5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU03VVVGRGFFWXNUVUZCVFN4alFVRmpMRWRCUVVjc2MwSkJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRmRCUVZjc1EwRkJReXhEUVVGRE8xRkJRMmhGTEUxQlFVMHNaMEpCUVdkQ0xFZEJRVWNzWTBGQll5eERRVUZETEVOQlFVTXNRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNN1VVRkZOVWNzVFVGQlRTeGpRVUZqTEVkQlFVY3NVMEZCVXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRGFFUXNUVUZCVFN4TFFVRkxMRWRCUVdkQ0xEaENRVUZ0UWl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzWTBGQll5eERRVUZETEVOQlFVTTdVVUZGTlVVc1NVRkJTU3huUWtGQlowSXNSVUZCUlR0WlFVTnNRaXhKUVVGSkxHTkJRV003WjBKQlFVVXNZMEZCWXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU0zUlN4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1kwRkJZeXhGUVVGRkxFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRE8xbEJRM3BITEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc09FSkJRVzFDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMnhHTzFGQlJVUXNTVUZCU1N4alFVRmpMRVZCUVVVN1dVRkRhRUlzTmtKQlFYTkNMRU5CUVVNc1kwRkJZeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFsQlF6ZERMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zT0VKQlFXMUNMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOdVJTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1JVRkJSVHRuUWtGRGVFSXNTVUZCU1N4WFFVRlhPMjlDUVVGRkxGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8yZENRVU51UkN4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZkQlFWY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03WjBKQlEycEdMR2xEUVVGelFpeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1kwRkJZeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzJGQlF6ZEVPMU5CUTBvN1NVRkRUQ3hEUVVGRE8wbEJVMDhzYVVKQlFXbENPMUZCUTNKQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTnNRaXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlEyNUVMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRk8xbEJReTlETEVkQlFVY3NSVUZCUlN4VFFVRlRMRlZCUVZVN1owSkJRM0JDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWxCUVVrc1MwRkJTeXhYUVVGWExFbEJRVWtzU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUXl4VFFVRlRPMjlDUVVGRkxFOUJRVThzVTBGQlV5eERRVUZETzJkQ1FVTXpSU3hQUVVGUExHdENRVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMWxCUTNaRUxFTkJRVU03V1VGRFJDeEhRVUZITEVWQlFVVXNVMEZCVXl4VlFVRlZMRU5CUVVNc1RVRkJhVVE3WjBKQlEzUkZMRWxCUVVrc1NVRkJTU3hEUVVGRExFbEJRVWtzUzBGQlN5eFZRVUZWTEVsQlFVa3NTVUZCU1N4TFFVRkxMRWxCUVVrc1EwRkJReXhUUVVGVE8yOUNRVUZGTEU5QlFVODdaMEpCUTJoRkxHdENRVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEUxQlFVMHNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRaUVVONFJDeERRVUZETzFsQlEwUXNXVUZCV1N4RlFVRkZMRWxCUVVrN1dVRkRiRUlzVlVGQlZTeEZRVUZGTEVsQlFVazdVMEZEYmtJc1EwRkJReXhEUVVGRE8xRkJRMGdzVFVGQlRTeFhRVUZYTEVkQlFVY3NUMEZCVHl4RFFVRkRMSGRDUVVGM1FpeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQmRVSXNRMEZCUXp0UlFVTjJSeXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNN1VVRkRMMFFzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hYUVVGWExFTkJRVU1zUTBGQlF6dFJRVU0xUlN4NVFrRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNiVUpCUVcxQ0xFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdTVUZEYkVVc1EwRkJRenRKUVZsUExHbENRVUZwUWl4RFFVRkRMRTFCUVhOQ0xFVkJRVVVzVVVGQmJVSXNSVUZCUlN4TFFVRlZMRVZCUVVVc1ZVRkJjVUk3VVVGRGNFY3NUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhOUVVGTkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdVVUZEZWtNc1NVRkJTU3hWUVVGVkxFVkJRVVU3V1VGRFdpeFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzFOQlF6bEZPMUZCUTBRc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVONFF5eERRVUZETzBsQlYwOHNOa0pCUVRaQ0xFTkJRVU1zVFVGQll5eEZRVUZGTEVkQlFXTTdVVUZEYUVVc1NVRkJTU3hWUVVGVkxFZEJRVzFETEU5QlFVOHNRMEZCUXl4M1FrRkJkMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRMMFlzU1VGQlNTeFRRVUZUTEVkQlFXOURMRkZCUVZFc1EwRkJRenRSUVVNeFJDeEpRVUZKTEZOQlFWTXNSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRka0lzU1VGQlNTeE5RVUZOTEV0QlFXRXNTVUZCU1N4RFFVRkRMRk5CUVZNN1dVRkJSU3hUUVVGVExFZEJRVWNzVjBGQlZ5eERRVUZETzFGQlF5OUVMRTlCUVU4c1EwRkJReXhWUVVGVkxFVkJRVVU3V1VGRGFFSXNVMEZCVXl4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdXVUZETjBNc1NVRkJTU3hEUVVGRExGTkJRVk03WjBKQlFVVXNUVUZCVFR0WlFVTjBRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4TFFVRkxMR2xDUVVGcFFqdG5Ra0ZCUlN4VFFVRlRMRWRCUVVjc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0WlFVTnVSeXhWUVVGVkxFZEJRVWNzVDBGQlR5eERRVUZETEhkQ1FVRjNRaXhEUVVGRExGTkJRVk1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0VFFVTnFSVHRSUVVORUxFbEJRVWtzTUVKQlFUQkNMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRM1pETEVsQlFVa3NWVUZCVlN4RlFVRkZPMWxCUTFvc1NVRkJTU3hWUVVGVkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hMUVVGTExGbEJRVms3WjBKQlFVVXNNRUpCUVRCQ0xFZEJRVWNzU1VGQlNTeERRVUZETzFsQlF6bEdMRWxCUVVrc1ZVRkJWU3hEUVVGRExFZEJRVWNzU1VGQlNTeFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1MwRkJTeXhaUVVGWk8yZENRVUZGTERCQ1FVRXdRaXhIUVVGSExFbEJRVWtzUTBGQlF6dFRRVU5xUnp0UlFVTkVMRWxCUVVrc01FSkJRVEJDTEVWQlFVVTdXVUZETlVJc1RVRkJUU3hMUVVGTExFZEJRVWNzYzBKQlFWY3NRMEZCVFN4TlFVRk5MRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03V1VGRGJFUXNUVUZCVFN4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkRMMFFzU1VGQlNTeFJRVUZSTEVWQlFVVTdaMEpCUTFZc1NVRkJTU3hSUVVGUkxGbEJRVmtzUzBGQlN5eEZRVUZGTzI5Q1FVTXpRaXhWUVVGVkxFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJRenRwUWtGRGRrTTdPMjlDUVVGTkxGVkJRVlVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU03WVVGRGNFUTdVMEZEU2p0UlFVTkVMRTlCUVU4c1ZVRkJWU3hEUVVGRE8wbEJRM1JDTEVOQlFVTTdRMEZEU2p0QlFYQlJSQ3d3UWtGdlVVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBWYWx1ZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuZXhwb3J0cy5WYWx1ZUVycm9yID0gVmFsdWVFcnJvcjtcbmNsYXNzIFR5cGVFcnJvciBleHRlbmRzIEVycm9yIHtcbn1cbmV4cG9ydHMuVHlwZUVycm9yID0gVHlwZUVycm9yO1xuY2xhc3MgQ29uZmlndXJhdGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuZXhwb3J0cy5Db25maWd1cmF0aW9uRXJyb3IgPSBDb25maWd1cmF0aW9uRXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSWEp5YjNKekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXNhV0l2UlhKeWIzSnpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlQwRXNUVUZCWVN4VlFVRlhMRk5CUVZFc1MwRkJTenREUVVGSk8wRkJRWHBETEdkRFFVRjVRenRCUVZONlF5eE5RVUZoTEZOQlFWVXNVMEZCVVN4TFFVRkxPME5CUVVrN1FVRkJlRU1zT0VKQlFYZERPMEZCVlhoRExFMUJRV0VzYTBKQlFXMUNMRk5CUVZFc1MwRkJTenREUVVGSk8wRkJRV3BFTEdkRVFVRnBSQ0o5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgV2F0Y2hlZF8xID0gcmVxdWlyZShcIn5iZG8vbGliL1dhdGNoZWRcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3Qgb25fY2hhbmdlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwib24tY2hhbmdlXCIpKTtcbmNsYXNzIEZpZWxkIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgICAgIHRoaXMuZmllbGRzID0gW107XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgfVxuICAgIGFkZEZpZWxkKGZpZWxkKSB7XG4gICAgICAgIGlmICh0aGlzLmZpZWxkcy5pbmNsdWRlcyhmaWVsZCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChmaWVsZC5vYmplY3QgJiYgZmllbGQub2JqZWN0LmlzQkRPTW9kZWwpXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5wcm94eWZ5VmFsdWUoZmllbGQudmFsdWVPZigpKTtcbiAgICAgICAgaWYgKGZpZWxkIGluc3RhbmNlb2YgV2F0Y2hlZF8xLldhdGNoZWQgJiYgZmllbGQuc3ViT2JqZWN0KVxuICAgICAgICAgICAgdGhpcy5yZWRlZmluZVZhbHVlKGZpZWxkLnN1Yk9iamVjdCk7XG4gICAgICAgIHRoaXMucmVkZWZpbmVWYWx1ZShmaWVsZCk7XG4gICAgICAgIHRoaXMuZmllbGRzLnB1c2goZmllbGQpO1xuICAgIH1cbiAgICByZW1vdmVGaWVsZChmaWVsZCkge1xuICAgICAgICBpZiAoIXRoaXMuZmllbGRzLmluY2x1ZGVzKGZpZWxkKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKGZpZWxkIGluc3RhbmNlb2YgV2F0Y2hlZF8xLldhdGNoZWQgJiYgZmllbGQuc3ViT2JqZWN0KVxuICAgICAgICAgICAgdGhpcy5yZXN0b3JlVmFsdWUoZmllbGQuc3ViT2JqZWN0KTtcbiAgICAgICAgdGhpcy5yZXN0b3JlVmFsdWUoZmllbGQpO1xuICAgICAgICB1dGlsXzEucmVtb3ZlRWxlbWVudEZyb21BcnJheSh0aGlzLmZpZWxkcywgZmllbGQpO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuZmllbGRzKVxuICAgICAgICAgICAgZmllbGQuc2V0VmFsdWUodmFsdWUpO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgcmVkZWZpbmVWYWx1ZShmaWVsZCkge1xuICAgICAgICBtZXRhZGF0YV8xLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEoZmllbGQsIFwidmFsdWVcIiwgZmllbGQudmFsdWVPZigpKTtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoZmllbGQsIFwidmFsdWVcIik7XG4gICAgICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoZmllbGQsIFwidmFsdWVcIiwge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGF0LnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdXRpbF8xLmdldFByb3h5VGFyZ2V0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aGF0VmFsdWUgPSB1dGlsXzEuZ2V0UHJveHlUYXJnZXQodGhhdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB0aGF0VmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGF0LnZhbHVlID0gdGhhdC5wcm94eWZ5VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlc3RvcmVWYWx1ZShmaWVsZCkge1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGZpZWxkLCBcInZhbHVlXCIpO1xuICAgICAgICBmaWVsZC5zZXRWYWx1ZSh1dGlsXzEuZ2V0UHJveHlUYXJnZXQodGhpcy52YWx1ZSkpO1xuICAgIH1cbiAgICBwcm94eWZ5VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgfHwgdXRpbF8xLmlzT2JqZWN0KHZhbHVlKSAmJiAhdmFsdWUuaXNCRE9Nb2RlbCkge1xuICAgICAgICAgICAgbGV0IGlzU2hhbGxvdyA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuZmllbGRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFmaWVsZC5pc1NoYWxsb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTaGFsbG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlID0gb25fY2hhbmdlXzEuZGVmYXVsdC50YXJnZXQodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIG9uX2NoYW5nZV8xLmRlZmF1bHQodmFsdWUsIChwYXRoLCBjaGFuZ2VkVmFsdWUsIHByZXZpb3VzVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRoU2l6ZSA9IHBhdGguc3BsaXQoXCIuXCIpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuZmllbGRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZmllbGQuaXNTaGFsbG93IHx8IGZpZWxkLmlzU2hhbGxvdyAmJiBwYXRoU2l6ZSA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5wcm94eUhhbmRsZXIocGF0aCwgY2hhbmdlZFZhbHVlLCBwcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHsgaXNTaGFsbG93IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSbWxsYkdRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyeHBZaTlHYVdWc1pDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGRlFTdzRRMEZCTWtNN1FVRkZNME1zTUVOQlFXMUdPMEZCUTI1R0xHdEVRVUUyUkR0QlFVTTNSQ3hyUlVGQmFVTTdRVUZwUW1wRExFMUJRV0VzUzBGQlN6dEpRVzlEWkN4WlFVRlpMRTFCUVZNc1JVRkJSU3hSUVVGWE8xRkJSakZDTEZkQlFVMHNSMEZCYVVNc1JVRkJSU3hEUVVGRE8xRkJSemxETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRM0pDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRE8wbEJRemRDTEVOQlFVTTdTVUZWVFN4UlFVRlJMRU5CUVVNc1MwRkJORUk3VVVGRGVFTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZCUlN4UFFVRlBPMUZCUlhoRExFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNTVUZCWlN4TFFVRkxMRU5CUVVNc1RVRkJUeXhEUVVGRExGVkJRVlU3V1VGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRla2NzU1VGQlNTeExRVUZMTEZsQlFWa3NhVUpCUVU4c1NVRkJTU3hMUVVGTExFTkJRVU1zVTBGQlV6dFpRVUZGTEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzFGQlEzSkdMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZETVVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkROVUlzUTBGQlF6dEpRVlZOTEZkQlFWY3NRMEZCUXl4TFFVRTBRanRSUVVNelF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETzFsQlFVVXNUMEZCVHp0UlFVTjZReXhKUVVGSkxFdEJRVXNzV1VGQldTeHBRa0ZCVHl4SlFVRkpMRXRCUVVzc1EwRkJReXhUUVVGVE8xbEJRVVVzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VVVGRGNFWXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU42UWl3MlFrRkJjMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJReTlETEVOQlFVTTdTVUZUVFN4UlFVRlJMRU5CUVVNc1MwRkJaME03VVVGRE5VTXNTMEZCU3l4TlFVRk5MRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRUdFpRVUZGTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRE0wUXNRMEZCUXp0SlFWRk5MRTlCUVU4N1VVRkRWaXhQUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdTVUZEZEVJc1EwRkJRenRKUVZkUExHRkJRV0VzUTBGQlF5eExRVUUwUWp0UlFVTTVReXhwUTBGQmMwSXNRMEZCVXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhGUVVGRkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTJoRkxFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTnNRaXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEV0QlFVc3NSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVOMlF5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFVkJRVVU3V1VGRGJrTXNSMEZCUnp0blFrRkRReXhQUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZEZEVJc1EwRkJRenRaUVVORUxFZEJRVWNzUTBGQlF5eExRVUZYTzJkQ1FVTllMRXRCUVVzc1IwRkJSeXh4UWtGQll5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMmRDUVVNNVFpeE5RVUZOTEZOQlFWTXNSMEZCUnl4eFFrRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0blFrRkROME1zU1VGQlNTeExRVUZMTEV0QlFVc3NVMEZCVXp0dlFrRkJSU3hQUVVGUE8yZENRVU5vUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUTBGQlF6dFpRVU5FTEZsQlFWa3NSVUZCUlN4SlFVRkpPMWxCUTJ4Q0xGVkJRVlVzUlVGQlJTeEpRVUZKTzFOQlEyNUNMRU5CUVVNc1EwRkJRenRKUVVOUUxFTkJRVU03U1VGVFR5eFpRVUZaTEVOQlFVTXNTMEZCTkVJN1VVRkROME1zVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGRrTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXh4UWtGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJReTlETEVOQlFVTTdTVUZWVHl4WlFVRlpMRU5CUVVNc1MwRkJXVHRSUVVNM1FpeEpRVUZKTEV0QlFVc3NXVUZCV1N4TFFVRkxMRWxCUVVrc1pVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVOHNTMEZCVFN4RFFVRkRMRlZCUVZVc1JVRkJSVHRaUVVOMlJTeEpRVUZKTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNN1dVRkRja0lzUzBGQlN5eE5RVUZOTEV0QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8yZENRVU0zUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUlVGQlJUdHZRa0ZEYkVJc1UwRkJVeXhIUVVGSExFdEJRVXNzUTBGQlF6dHZRa0ZEYkVJc1RVRkJUVHRwUWtGRFZEdGhRVU5LTzFsQlEwUXNTMEZCU3l4SFFVRkhMRzFDUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUXk5Q0xFOUJRVThzYlVKQlFWRXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzV1VGQldTeEZRVUZGTEdGQlFXRXNSVUZCUlN4RlFVRkZPMmRDUVVONlJDeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXp0blFrRkRlRU1zUzBGQlN5eE5RVUZOTEV0QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8yOUNRVU0zUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zU1VGQlNTeExRVUZMTEVOQlFVTXNVMEZCVXl4SlFVRkpMRkZCUVZFc1NVRkJTU3hEUVVGRExFVkJRVVU3ZDBKQlEzUkVMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZSTEZsQlFWa3NSVUZCVVN4aFFVRmhMRU5CUVVNc1EwRkJRenR4UWtGRGNrVTdhVUpCUTBvN1dVRkRUQ3hEUVVGRExFVkJRVVVzUlVGQlJTeFRRVUZUTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNKQ08xRkJRMFFzVDBGQlR5eExRVUZMTEVOQlFVTTdTVUZEYWtJc1EwRkJRenREUVVOS08wRkJia3RFTEhOQ1FXMUxReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBmcmFtZXdvcmtfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2ZyYW1ld29ya1wiKTtcbmNsYXNzIE1vZGVsUmVnaXN0cnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vZGVscyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIU1vZGVsUmVnaXN0cnkuaW5zdGFuY2UpXG4gICAgICAgICAgICBNb2RlbFJlZ2lzdHJ5Lmluc3RhbmNlID0gbmV3IE1vZGVsUmVnaXN0cnkoKTtcbiAgICAgICAgcmV0dXJuIE1vZGVsUmVnaXN0cnkuaW5zdGFuY2U7XG4gICAgfVxuICAgIHJlZ2lzdGVyKG1vZGVsKSB7XG4gICAgICAgIHRoaXMubW9kZWxzLnNldChgJHttb2RlbC5jbGFzc05hbWV9JHttb2RlbC5pZH1gLCBtb2RlbCk7XG4gICAgfVxuICAgIHVucmVnaXN0ZXIobW9kZWwpIHtcbiAgICAgICAgdGhpcy5tb2RlbHMuZGVsZXRlKGAke21vZGVsLmNsYXNzTmFtZX0ke21vZGVsLmlkfWApO1xuICAgIH1cbiAgICBnZXRNb2RlbEJ5SWQoaWQsIGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVscy5nZXQoYCR7dGhpcy5nZXRDbGFzc05hbWUoY29uc3RydWN0b3IpfSR7aWR9YCk7XG4gICAgfVxuICAgIGdldE1vZGVsc0J5QXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGNvbnN0IG1vZGVscyA9IFtdO1xuICAgICAgICB0aGlzLm1vZGVscy5mb3JFYWNoKChtb2RlbCkgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoa2V5IGluIG1vZGVsKSB8fCBlbGVtZW50ICE9PSBtb2RlbFtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb2RlbHMucHVzaChtb2RlbCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbW9kZWxzO1xuICAgIH1cbiAgICB1cGRhdGVJRChvbGRJRCwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgY29uc3QgbW9kZWwgPSB0aGlzLm1vZGVscy5nZXQoYCR7dGhpcy5nZXRDbGFzc05hbWUoY29uc3RydWN0b3IpfSR7b2xkSUR9YCk7XG4gICAgICAgIGlmICghbW9kZWwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMubW9kZWxzLmRlbGV0ZShgJHt0aGlzLmdldENsYXNzTmFtZShjb25zdHJ1Y3Rvcil9JHtvbGRJRH1gKTtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihtb2RlbCk7XG4gICAgfVxuICAgIGdldE1vZGVsc0J5Q29uZGl0aW9uKGZ1bmMsIG1vZGUgPSBcImFsbFwiKSB7XG4gICAgICAgIGNvbnN0IG1vZGVscyA9IFtdO1xuICAgICAgICBsZXQgbGFzdE1vZGVsO1xuICAgICAgICBmb3IgKGNvbnN0IG1vZGVsIG9mIHRoaXMubW9kZWxzLnZhbHVlcygpKSB7XG4gICAgICAgICAgICBpZiAoZnVuYyhtb2RlbCkpIHtcbiAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gXCJmaXJzdFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kZWw7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09IFwiYWxsXCIpXG4gICAgICAgICAgICAgICAgICAgIG1vZGVscy5wdXNoKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gXCJsYXN0XCIpXG4gICAgICAgICAgICAgICAgICAgIGxhc3RNb2RlbCA9IG1vZGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2RlID09PSBcImxhc3RcIiA/IGxhc3RNb2RlbCA6IG1vZGVscztcbiAgICB9XG4gICAgZ2V0Q2xhc3NOYW1lKGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWU7XG4gICAgICAgIGlmIChmcmFtZXdvcmtfMS5pc0Jhc2VDb25zdHJ1Y3Rvcihjb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNvbnN0cnVjdG9yLmNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChcImNsYXNzTmFtZVwiIGluIGNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjb25zdHJ1Y3Rvci5jbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNvbnN0cnVjdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgY2xhc3NOYW1lID0gY29uc3RydWN0b3IuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9XG59XG5leHBvcnRzLk1vZGVsUmVnaXN0cnkgPSBNb2RlbFJlZ2lzdHJ5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVFc5a1pXeFNaV2RwYzNSeWVTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiR2xpTDAxdlpHVnNVbVZuYVhOMGNua3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRFFTeHZSRUZCZVVRN1FVRlhla1FzVFVGQllTeGhRVUZoTzBsQmFVTjBRanRSUVdSUkxGZEJRVTBzUjBGQk1FSXNTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVdNeFFpeERRVUZETzBsQlRHeENMRTFCUVUwc1EwRkJReXhYUVVGWE8xRkJRM0pDTEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1VVRkJVVHRaUVVGRkxHRkJRV0VzUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1N4aFFVRmhMRVZCUVVVc1EwRkJRenRSUVVNeFJTeFBRVUZQTEdGQlFXRXNRMEZCUXl4UlFVRlJMRU5CUVVNN1NVRkRiRU1zUTBGQlF6dEpRVlZOTEZGQlFWRXNRMEZCUXl4TFFVRmxPMUZCUXpOQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRE5VUXNRMEZCUXp0SlFWTk5MRlZCUVZVc1EwRkJReXhMUVVGbE8xRkJRemRDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEZOQlFWTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU40UkN4RFFVRkRPMGxCVlUwc1dVRkJXU3hEUVVFMlF5eEZRVUZWTEVWQlFVVXNWMEZCWXp0UlFVTjBSaXhQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJiVU1zUTBGQlF6dEpRVU4yUnl4RFFVRkRPMGxCVlUwc2NVSkJRWEZDTEVOQlFVTXNWVUZCZFVNN1VVRkRhRVVzVFVGQlRTeE5RVUZOTEVkQlFXVXNSVUZCUlN4RFFVRkRPMUZCUXpsQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVU3V1VGRE1VSXNTMEZCU3l4TlFVRk5MRWRCUVVjc1NVRkJTU3hWUVVGVkxFVkJRVVU3WjBKQlF6RkNMRWxCUVVrc1ZVRkJWU3hEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0dlFrRkRhRU1zVFVGQlRTeFBRVUZQTEVkQlFVY3NWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yOUNRVU5vUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUzBGQlN5eERRVUZETEVsQlFVa3NUMEZCVHl4TFFVRnpRaXhMUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdkMEpCUXpkRUxFOUJRVTg3Y1VKQlExWTdhVUpCUTBvN1lVRkRTanRaUVVORUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRka0lzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEU0N4UFFVRlBMRTFCUVUwc1EwRkJRenRKUVVOc1FpeERRVUZETzBsQldVMHNVVUZCVVN4RFFVRnhRaXhMUVVGakxFVkJRVVVzVjBGQll6dFJRVU01UkN4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVjBGQlZ5eERRVUZETEVkQlFVY3NTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNelJTeEpRVUZKTEVOQlFVTXNTMEZCU3p0WlFVRkZMRTlCUVU4N1VVRkRia0lzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZkQlFWY3NRMEZCUXl4SFFVRkhMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGFFVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCWlUwc2IwSkJRVzlDTEVOQlFVTXNTVUZCYTBNc1JVRkJSU3hQUVVGcFF5eExRVUZMTzFGQlEyeEhMRTFCUVUwc1RVRkJUU3hIUVVGbExFVkJRVVVzUTBGQlF6dFJRVU01UWl4SlFVRkpMRk5CUVN0Q0xFTkJRVU03VVVGRGNFTXNTMEZCU3l4TlFVRk5MRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4RlFVRkZPMWxCUTNSRExFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMmRDUVVOaUxFbEJRVWtzU1VGQlNTeExRVUZMTEU5QlFVODdiMEpCUVVVc1QwRkJUeXhMUVVGTExFTkJRVU03WjBKQlEyNURMRWxCUVVrc1NVRkJTU3hMUVVGTExFdEJRVXM3YjBKQlFVVXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dG5Ra0ZEZGtNc1NVRkJTU3hKUVVGSkxFdEJRVXNzVFVGQlRUdHZRa0ZCUlN4VFFVRlRMRWRCUVVjc1MwRkJTeXhEUVVGRE8yRkJRekZETzFOQlEwbzdVVUZEUkN4UFFVRlBMRWxCUVVrc1MwRkJTeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJRMmhFTEVOQlFVTTdTVUZWVHl4WlFVRlpMRU5CUVVNc1YwRkJOa003VVVGRE9VUXNTVUZCU1N4VFFVRnBRaXhEUVVGRE8xRkJRM1JDTEVsQlFVa3NOa0pCUVdsQ0xFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVTdXVUZEYUVNc1UwRkJVeXhIUVVGSExGZEJRVmNzUTBGQlF5eFRRVUZUTEVOQlFVTTdVMEZEY2tNN1lVRkJUU3hKUVVGSkxGZEJRVmNzU1VGQlNTeFhRVUZYTEVWQlFVVTdXVUZEYmtNc1UwRkJVeXhIUVVGSExGZEJRVmNzUTBGQlF5eFRRVUZUTEVOQlFVTTdVMEZEY2tNN1lVRkJUU3hKUVVGSkxFOUJRVThzVjBGQlZ5eExRVUZMTEZWQlFWVXNSVUZCUlR0WlFVTXhReXhUUVVGVExFZEJRVWNzVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXp0VFFVTm9RenM3V1VGQlRTeFRRVUZUTEVkQlFWTXNWMEZCV1N4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU03VVVGRGRrUXNUMEZCVHl4VFFVRlRMRU5CUVVNN1NVRkRja0lzUTBGQlF6dERRVU5LTzBGQk1VcEVMSE5EUVRCS1F5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIE1vZGlmaWNhdGlvbiB7XG4gICAgY29uc3RydWN0b3IodmFsdWUsIHR5cGUgPSBcImRlbGV0ZVwiKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59XG5leHBvcnRzLk1vZGlmaWNhdGlvbiA9IE1vZGlmaWNhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVRXOWthV1pwWTJGMGFXOXVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlzYVdJdlRXOWthV1pwWTJGMGFXOXVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlVVRXNUVUZCWVN4WlFVRlpPMGxCYlVKeVFpeFpRVUZaTEV0QlFWY3NSVUZCUlN4UFFVRnhRaXhSUVVGUk8xRkJRMnhFTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRMjVDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVUwc1NVRkJTU3hEUVVGRE8wbEJRM2hDTEVOQlFVTTdTVUZSVFN4UFFVRlBPMUZCUTFZc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzBsQlEzUkNMRU5CUVVNN1NVRlJUU3hSUVVGUkxFTkJRVU1zUzBGQlZUdFJRVU4wUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dEpRVU4yUWl4RFFVRkRPME5CUTBvN1FVRXpRMFFzYjBOQk1rTkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgTW9kaWZpY2F0aW9uXzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kaWZpY2F0aW9uXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IEVycm9yc18xID0gcmVxdWlyZShcIn5iZG8vbGliL0Vycm9yc1wiKTtcbmNvbnN0IG9uX2NoYW5nZV8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm9uLWNoYW5nZVwiKSk7XG5jbGFzcyBQcm9wZXJ0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSwgcGFyYW1zKSB7XG4gICAgICAgIHRoaXMuaXNTaGFsbG93ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBjYXBpdGFsaXplZFByb3AgPSB1dGlsXzEudWNGaXJzdChwcm9wZXJ0eSk7XG4gICAgICAgIGNvbnN0IG9uVHlwZUNoZWNrRmFpbCA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfVR5cGVDaGVja0ZhaWxgO1xuICAgICAgICBjb25zdCBvblR5cGVDaGVjayA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfVR5cGVDaGVja2A7XG4gICAgICAgIGNvbnN0IG9uVHlwZUNoZWNrU3VjY2VzcyA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfVR5cGVDaGVja1N1Y2Nlc3NgO1xuICAgICAgICB0aGlzLm9uVHlwZUNoZWNrRmFpbCA9IHBhcmFtcyA/IHBhcmFtcy5vblR5cGVDaGVja0ZhaWwgfHwgb25UeXBlQ2hlY2tGYWlsIDogb25UeXBlQ2hlY2tGYWlsO1xuICAgICAgICB0aGlzLm9uVHlwZUNoZWNrID0gcGFyYW1zID8gcGFyYW1zLm9uVHlwZUNoZWNrIHx8IG9uVHlwZUNoZWNrIDogb25UeXBlQ2hlY2s7XG4gICAgICAgIHRoaXMub25UeXBlQ2hlY2tTdWNjZXNzID0gcGFyYW1zID8gcGFyYW1zLm9uVHlwZUNoZWNrU3VjY2VzcyB8fCBvblR5cGVDaGVja1N1Y2Nlc3MgOiBvblR5cGVDaGVja1N1Y2Nlc3M7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZG9TZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IHRoaXMucHJvcGVydHkudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKCF1dGlsXzEuaXNQcm94eSh2YWx1ZSkgJiYgdGhpcy5zYXZlSW5Mb2NhbFN0b3JhZ2UgJiYgdXRpbF8xLmlzRnVuY3Rpb24odGhpcy5vYmplY3QuZ2V0TmFtZXNwYWNlZFN0b3JhZ2UpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMub2JqZWN0LmdldE5hbWVzcGFjZWRTdG9yYWdlKHN0cmluZ0tleSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICB0eXBlR3VhcmQodmFsdWUpIHtcbiAgICAgICAgbGV0IHZhbHVlVG9QYXNzID0gdmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGlmaWNhdGlvbl8xLk1vZGlmaWNhdGlvbilcbiAgICAgICAgICAgIHZhbHVlVG9QYXNzID0gdmFsdWUudmFsdWVPZigpO1xuICAgICAgICBjb25zdCBkZXNpZ25UeXBlID0gbWV0YWRhdGFfMS5nZXREZXNpZ25UeXBlKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5LnRvU3RyaW5nKCkpO1xuICAgICAgICBjb25zdCB0eXBlRXJyb3IgPSBuZXcgRXJyb3JzXzEuVHlwZUVycm9yKGAke3ZhbHVlVG9QYXNzfSBpcyBub3QgdHlwZSBvZiAke2Rlc2lnblR5cGUuY2xhc3NOYW1lIHx8IGRlc2lnblR5cGUubmFtZX1gKTtcbiAgICAgICAgY29uc3QgaWR4U3RydWN0T2JqID0gdGhpcy5vYmplY3Q7XG4gICAgICAgIGxldCBlcnJvcjtcbiAgICAgICAgaWYgKCF0aGlzLm51bGxhYmxlICYmICh2YWx1ZVRvUGFzcyA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlVG9QYXNzID09PSBudWxsKSlcbiAgICAgICAgICAgIGVycm9yID0gdHlwZUVycm9yO1xuICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICBpZiAodXRpbF8xLmlzUHJpbWl0aXZlKHZhbHVlVG9QYXNzKSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWVUb1Bhc3MgIT09IGRlc2lnblR5cGUubmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5udWxsYWJsZSB8fCAhKHZhbHVlVG9QYXNzID09PSB1bmRlZmluZWQgfHwgdmFsdWVUb1Bhc3MgPT09IG51bGwpKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSB0eXBlRXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoISh2YWx1ZVRvUGFzcyBpbnN0YW5jZW9mIGRlc2lnblR5cGUpKVxuICAgICAgICAgICAgICAgIGVycm9yID0gdHlwZUVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZXJyb3IgJiYgdXRpbF8xLmlzRnVuY3Rpb24oaWR4U3RydWN0T2JqW3RoaXMub25UeXBlQ2hlY2tdKSlcbiAgICAgICAgICAgIGVycm9yID0gaWR4U3RydWN0T2JqW3RoaXMub25UeXBlQ2hlY2tdKHZhbHVlVG9QYXNzKTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAodXRpbF8xLmlzRnVuY3Rpb24oaWR4U3RydWN0T2JqW3RoaXMub25UeXBlQ2hlY2tGYWlsXSkpIHtcbiAgICAgICAgICAgICAgICBpZHhTdHJ1Y3RPYmpbdGhpcy5vblR5cGVDaGVja0ZhaWxdKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHV0aWxfMS5pc0Z1bmN0aW9uKGlkeFN0cnVjdE9iai5vblR5cGVDaGVja0ZhaWwpKSB7XG4gICAgICAgICAgICAgICAgaWR4U3RydWN0T2JqLm9uVHlwZUNoZWNrRmFpbChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodXRpbF8xLmlzRnVuY3Rpb24oaWR4U3RydWN0T2JqW3RoaXMub25UeXBlQ2hlY2tTdWNjZXNzXSkpXG4gICAgICAgICAgICBpZHhTdHJ1Y3RPYmpbdGhpcy5vblR5cGVDaGVja1N1Y2Nlc3NdKCk7XG4gICAgICAgIHJldHVybiAhKEJvb2xlYW4oZXJyb3IpLnZhbHVlT2YoKSk7XG4gICAgfVxuICAgIHByb3h5SGFuZGxlcihfcGF0aCwgX2NoYW5nZWRWYWwsIF9wcmV2VmFsKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuZG9TZXRWYWx1ZShvbl9jaGFuZ2VfMS5kZWZhdWx0LnRhcmdldCh2YWx1ZSksIGZhbHNlKTtcbiAgICB9XG4gICAgc2hvdWxkRG9TZXRWYWx1ZSh2YWx1ZSwgc2tpcEd1YXJkID0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuICEodmFsdWUgPT09IHRoaXMub3duVmFsdWUgfHwgIXNraXBHdWFyZCAmJiAhdGhpcy5kaXNhYmxlVHlwZUd1YXJkICYmICF0aGlzLnR5cGVHdWFyZCh2YWx1ZSkpO1xuICAgIH1cbiAgICBkb1NldFZhbHVlKHZhbHVlLCBtb2RpZnlWYWx1ZSA9IHRydWUsIHNraXBHdWFyZCA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdGhpcy5zaG91bGREb1NldFZhbHVlKHZhbHVlLCBza2lwR3VhcmQpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgdmFsdWVUb1Bhc3M7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGlmaWNhdGlvbl8xLk1vZGlmaWNhdGlvbikge1xuICAgICAgICAgICAgdmFsdWVUb1Bhc3MgPSB2YWx1ZS52YWx1ZU9mKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdmFsdWVUb1Bhc3MgPSB2YWx1ZTtcbiAgICAgICAgaWYgKG1vZGlmeVZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBwcm94eWZpZWQgPSB0aGlzLnByb3h5ZnlWYWx1ZSh2YWx1ZVRvUGFzcyk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gcHJveHlmaWVkO1xuICAgICAgICAgICAgdGhpcy5vd25WYWx1ZSA9IHZhbHVlVG9QYXNzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNob3VsZFVwZGF0ZU5zU3RvcmFnZSgpICYmIHV0aWxfMS5pc0Z1bmN0aW9uKHRoaXMub2JqZWN0LnNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKSkge1xuICAgICAgICAgICAgdGhpcy5vYmplY3Quc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2UodGhpcy5wcm9wZXJ0eS50b1N0cmluZygpLCB2YWx1ZVRvUGFzcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJveHlmeVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5IHx8IHV0aWxfMS5pc09iamVjdCh2YWx1ZSkgJiYgIXZhbHVlLmlzQkRPTW9kZWwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gb25fY2hhbmdlXzEuZGVmYXVsdC50YXJnZXQodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIG9uX2NoYW5nZV8xLmRlZmF1bHQodmFsdWUsIChwYXRoLCBjaGFuZ2VkVmFsLCBwcmV2VmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJveHlIYW5kbGVyUmVwbGFjZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm94eUhhbmRsZXJSZXBsYWNlbWVudChwYXRoLCBjaGFuZ2VkVmFsLCBwcmV2VmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3h5SGFuZGxlcihwYXRoLCBjaGFuZ2VkVmFsLCBwcmV2VmFsKTtcbiAgICAgICAgICAgIH0sIHsgaXNTaGFsbG93OiB0aGlzLmlzU2hhbGxvdyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHNob3VsZFVwZGF0ZU5zU3RvcmFnZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNhdmVJbkxvY2FsU3RvcmFnZSB8fCAhZW52aXJvbm1lbnRfMS5pc0Jyb3dzZXIoKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3Qgc3RyaW5nS2V5ID0gdGhpcy5wcm9wZXJ0eS50b1N0cmluZygpO1xuICAgICAgICBjb25zdCBrZXlTaG91bGRCZVVwZGF0ZWQgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMub2JqZWN0LCBcImtleVNob3VsZEJlVXBkYXRlZFwiKSB8fCB7fTtcbiAgICAgICAgaWYgKGtleVNob3VsZEJlVXBkYXRlZFtzdHJpbmdLZXldKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICh1dGlsXzEuaXNGdW5jdGlvbih0aGlzLm9iamVjdC5nZXROYW1lc3BhY2VkU3RvcmFnZSkgJiZcbiAgICAgICAgICAgIHRoaXMub2JqZWN0LmdldE5hbWVzcGFjZWRTdG9yYWdlKHN0cmluZ0tleSkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YSh0aGlzLm9iamVjdCwgXCJrZXlTaG91bGRCZVVwZGF0ZWRcIiwgT2JqZWN0LmFzc2lnbihrZXlTaG91bGRCZVVwZGF0ZWQsIHsgW3N0cmluZ0tleV06IHRydWUgfSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEJvb2xlYW4obWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLm9iamVjdCwgXCJjb25zdHJ1Y3Rpb25Db21wbGV0ZVwiKSk7XG4gICAgfVxufVxuZXhwb3J0cy5Qcm9wZXJ0eSA9IFByb3BlcnR5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVUhKdmNHVnlkSGt1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJ4cFlpOVFjbTl3WlhKMGVTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGRFFTeDNSRUZCY1VRN1FVRkRja1FzYTBSQlFXbEdPMEZCUTJwR0xIZEVRVUZ0UkR0QlFVTnVSQ3d3UTBGQmMwWTdRVUZEZEVZc05FTkJRVFJETzBGQlF6VkRMR3RGUVVGcFF6dEJRVEpGYWtNc1RVRkJZU3hSUVVGUk8wbEJjVWRxUWl4WlFVRlpMRTFCUVZNc1JVRkJSU3hSUVVGWExFVkJRVVVzVFVGQmQwSTdVVUZ5UW5KRUxHTkJRVk1zUjBGQldTeEpRVUZKTEVOQlFVTTdVVUZ6UWpkQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUTNKQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRPMUZCUTNwQ0xFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJSVFZDTEUxQlFVMHNaVUZCWlN4SFFVRkhMR05CUVU4c1EwRkJReXhSUVVGclFpeERRVUZETEVOQlFVTTdVVUZEY0VRc1RVRkJUU3hsUVVGbExFZEJRVWNzUzBGQlN5eGxRVUZsTEdWQlFXVXNRMEZCUXp0UlFVTTFSQ3hOUVVGTkxGZEJRVmNzUjBGQlJ5eExRVUZMTEdWQlFXVXNWMEZCVnl4RFFVRkRPMUZCUTNCRUxFMUJRVTBzYTBKQlFXdENMRWRCUVVjc1MwRkJTeXhsUVVGbExHdENRVUZyUWl4RFFVRkRPMUZCUld4RkxFbEJRVWtzUTBGQlF5eGxRVUZsTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zWlVGQlpTeEpRVUZKTEdWQlFXVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1pVRkJaU3hEUVVGRE8xRkJRelZHTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4SlFVRkpMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETzFGQlF6VkZMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eHJRa0ZCYTBJc1NVRkJTU3hyUWtGQmEwSXNRMEZCUXl4RFFVRkRMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTTdTVUZETlVjc1EwRkJRenRKUVZOTkxGRkJRVkVzUTBGQlF5eExRVUZuUXp0UlFVTTFReXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOcVF5eERRVUZETzBsQlZVMHNUMEZCVHp0UlFVTldMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkZNME1zU1VGQlNTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVWMlFpeEpRVUZKTEVOQlFVTXNZMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1NVRkJTU3hwUWtGQlZTeERRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRlBMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNSVUZCUlR0WlFVTnVSeXhMUVVGTExFZEJRVk1zU1VGQlNTeERRVUZETEUxQlFVOHNRMEZCUXl4dlFrRkJiMElzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0VFFVTTVSRHRSUVVORUxFOUJRVThzUzBGQlN5eERRVUZETzBsQlEycENMRU5CUVVNN1NVRlZUU3hUUVVGVExFTkJRVU1zUzBGQlowTTdVVUZETjBNc1NVRkJTU3hYUVVGWExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlEzaENMRWxCUVVrc1MwRkJTeXhaUVVGWkxESkNRVUZaTzFsQlFVVXNWMEZCVnl4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dFJRVVZxUlN4TlFVRk5MRlZCUVZVc1IwRkJSeXgzUWtGQllTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTNoRkxFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NhMEpCUVZNc1EwRkJReXhIUVVGSExGZEJRVmNzYlVKQlFXMUNMRlZCUVZVc1EwRkJReXhUUVVGVExFbEJRVWtzVlVGQlZTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkROVWNzVFVGQlRTeFpRVUZaTEVkQlFXMUNMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRmFrUXNTVUZCU1N4TFFVRkxMRU5CUVVNN1VVRkZWaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNTVUZCU1N4RFFVRkRMRmRCUVZjc1MwRkJTeXhUUVVGVExFbEJRVWtzVjBGQlZ5eExRVUZMTEVsQlFVa3NRMEZCUXp0WlFVRkZMRXRCUVVzc1IwRkJSeXhUUVVGVExFTkJRVU03VVVGRk4wWXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSVHRaUVVOU0xFbEJRVWtzYTBKQlFWY3NRMEZCUXl4WFFVRlhMRU5CUVVNc1JVRkJSVHRuUWtGRE1VSXNTVUZCU1N4UFFVRlBMRmRCUVZjc1MwRkJTeXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RlFVRkZPMjlDUVVOMFJDeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1NVRkJTU3hEUVVGRExFTkJRVU1zVjBGQlZ5eExRVUZMTEZOQlFWTXNTVUZCU1N4WFFVRlhMRXRCUVVzc1NVRkJTU3hEUVVGRE8zZENRVUZGTEV0QlFVc3NSMEZCUnl4VFFVRlRMRU5CUVVNN2FVSkJRMnBITzJGQlEwbzdhVUpCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU1zVjBGQlZ5eFpRVUZaTEZWQlFWVXNRMEZCUXp0blFrRkJSU3hMUVVGTExFZEJRVWNzVTBGQlV5eERRVUZETzFOQlEzUkZPMUZCUjBRc1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeHBRa0ZCVlN4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdXVUZCUlN4TFFVRkxMRWRCUVVjc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRSUVVjNVJ5eEpRVUZKTEV0QlFVc3NSVUZCUlR0WlFVTlFMRWxCUVVrc2FVSkJRVlVzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRExFVkJRVVU3WjBKQlEyaEVMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1lVRkROME03YVVKQlFVMHNTVUZCU1N4cFFrRkJWU3hEUVVGRExGbEJRVmtzUTBGQlF5eGxRVUZsTEVOQlFVTXNSVUZCUlR0blFrRkRha1FzV1VGQldTeERRVUZETEdWQlFXVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRoUVVOMlF6czdaMEpCUVUwc1RVRkJUU3hMUVVGTExFTkJRVU03VTBGRGRFSTdZVUZCVFN4SlFVRkpMR2xDUVVGVkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUTBGQlF5eERRVUZETzFsQlFVVXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RlFVRkZMRU5CUVVNN1VVRkRkRWNzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEZGtNc1EwRkJRenRKUVU5TkxGbEJRVmtzUTBGQlF5eExRVUZqTEVWQlFVVXNWMEZCYTBJc1JVRkJSU3hSUVVGbE8xRkJRMjVGTEUxQlFVMHNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03VVVGRGVrSXNTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVeXhKUVVGSkxFdEJRVXNzUzBGQlN5eEpRVUZKTzFsQlFVVXNUMEZCVHp0UlFVTnNSQ3hKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEcxQ1FVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTI1RUxFTkJRVU03U1VGVlRTeG5Ra0ZCWjBJc1EwRkJReXhMUVVGblF5eEZRVUZGTEZsQlFYRkNMRXRCUVVzN1VVRkRhRVlzVDBGQlR5eERRVUZETEVOQlFVTXNTMEZCU3l4TFFVRkxMRWxCUVVrc1EwRkJReXhSUVVGUkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZUVjc1EwRkJRenRKUVZsVExGVkJRVlVzUTBGQlF5eExRVUZuUXl4RlFVRkZMR05CUVhWQ0xFbEJRVWtzUlVGQlJTeFpRVUZ4UWl4TFFVRkxPMUZCUXpGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUzBGQlN5eEZRVUZGTEZOQlFWTXNRMEZCUXp0WlFVRkZMRTlCUVU4N1VVRkRja1FzU1VGQlNTeFhRVUUyUWl4RFFVRkRPMUZCUTJ4RExFbEJRVWtzUzBGQlN5eFpRVUZaTERKQ1FVRlpMRVZCUVVVN1dVRkRMMElzVjBGQlZ5eEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRUUVVOcVF6czdXVUZCVFN4WFFVRlhMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRek5DTEVsQlFVa3NWMEZCVnl4RlFVRkZPMWxCUTJJc1RVRkJUU3hUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRaUVVOcVJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRk5CUVZNc1EwRkJRenRaUVVOMlFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRmRCUVZjc1EwRkJRenRUUVVNdlFqdFJRVU5FTEVsQlFVa3NTVUZCU1N4RFFVRkRMSEZDUVVGeFFpeEZRVUZGTEVsQlFVa3NhVUpCUVZVc1EwRkJhMElzU1VGQlNTeERRVUZETEUxQlFVOHNRMEZCUXl3d1FrRkJNRUlzUTBGQlF5eEZRVUZGTzFsQlEzSkdMRWxCUVVrc1EwRkJReXhOUVVGUExFTkJRVU1zTUVKQlFUQkNMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNSVUZCUlN4WFFVRlhMRU5CUVVNc1EwRkJRenRUUVVOdVJ6dEpRVU5NTEVOQlFVTTdTVUZWVXl4WlFVRlpMRU5CUVVNc1MwRkJXVHRSUVVNdlFpeEpRVUZKTEV0QlFVc3NXVUZCV1N4TFFVRkxMRWxCUVVrc1pVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVOHNTMEZCVFN4RFFVRkRMRlZCUVZVc1JVRkJSVHRaUVVOMlJTeExRVUZMTEVkQlFVY3NiVUpCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZETDBJc1QwRkJUeXh0UWtGQlVTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hWUVVGVkxFVkJRVVVzVDBGQlR5eEZRVUZGTEVWQlFVVTdaMEpCUTJwRUxFbEJRVWtzU1VGQlNTeERRVUZETEhWQ1FVRjFRaXhGUVVGRk8yOUNRVU01UWl4SlFVRkpMRU5CUVVNc2RVSkJRWFZDTEVOQlFVTXNTVUZCU1N4RlFVRlJMRlZCUVZVc1JVRkJVU3hQUVVGUExFTkJRVU1zUTBGQlF6dHBRa0ZEZGtVN08yOUNRVUZOTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGUkxGVkJRVlVzUlVGQlVTeFBRVUZQTEVOQlFVTXNRMEZCUXp0WlFVTndSU3hEUVVGRExFVkJRVVVzUlVGQlJTeFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGNrTTdVVUZEUkN4UFFVRlBMRXRCUVVzc1EwRkJRenRKUVVOcVFpeERRVUZETzBsQlUxTXNjVUpCUVhGQ08xRkJRek5DTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVsQlFVa3NRMEZCUXl4MVFrRkJVeXhGUVVGRk8xbEJRVVVzVDBGQlR5eExRVUZMTEVOQlFVTTdVVUZETTBRc1RVRkJUU3hUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVNelF5eE5RVUZOTEd0Q1FVRnJRaXhIUVVGSExITkNRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3h2UWtGQmIwSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVOb1JpeEpRVUZKTEd0Q1FVRnJRaXhEUVVGRExGTkJRVk1zUTBGQlF6dFpRVUZGTEU5QlFVOHNTVUZCU1N4RFFVRkRPMUZCUXk5RExFbEJRVWtzYVVKQlFWVXNRMEZCYTBJc1NVRkJTU3hEUVVGRExFMUJRVThzUTBGQlF5eHZRa0ZCYjBJc1EwRkJRenRaUVVNM1F5eEpRVUZKTEVOQlFVTXNUVUZCVHl4RFFVRkRMRzlDUVVGdlFpeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1JVRkJSVHRaUVVNM1JTeDVRa0ZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzYjBKQlFXOUNMRVZCUVVVc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eHJRa0ZCYTBJc1JVRkJSU3hGUVVGRkxFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRelZITEU5QlFVOHNTVUZCU1N4RFFVRkRPMU5CUTJZN1VVRkRSQ3hQUVVGUExFOUJRVThzUTBGQlF5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzYzBKQlFYTkNMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM0pGTEVOQlFVTTdRMEZEU2p0QlFYQlNSQ3cwUWtGdlVrTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgTW9kaWZpY2F0aW9uXzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kaWZpY2F0aW9uXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IG9uX2NoYW5nZV8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm9uLWNoYW5nZVwiKSk7XG5jb25zdCBjbG9uZV9kZWVwXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiY2xvbmUtZGVlcFwiKSk7XG5jbGFzcyBXYXRjaGVkIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5LCBwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5pc1NoYWxsb3cgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgY29uc3QgY2FwaXRhbGl6ZWRQcm9wID0gdXRpbF8xLnVjRmlyc3QocHJvcGVydHkpO1xuICAgICAgICBjb25zdCBvbkluaXRGdW5jID0gYG9uJHtjYXBpdGFsaXplZFByb3B9SW5pdGA7XG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlRnVuYyA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfUNoYW5nZWA7XG4gICAgICAgIGNvbnN0IG9uQWRkRnVuYyA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfUFkZGA7XG4gICAgICAgIGNvbnN0IG9uUmVtb3ZlRnVuYyA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfVJlbW92ZWA7XG4gICAgICAgIHRoaXMub25Jbml0ID0gcGFyYW1zID8gcGFyYW1zLm9uSW5pdCB8fCBvbkluaXRGdW5jIDogb25Jbml0RnVuYztcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHBhcmFtcyA/IHBhcmFtcy5vbkNoYW5nZSB8fCBvbkNoYW5nZUZ1bmMgOiBvbkNoYW5nZUZ1bmM7XG4gICAgICAgIHRoaXMub25BZGQgPSBwYXJhbXMgPyBwYXJhbXMub25BZGQgfHwgb25BZGRGdW5jIDogb25BZGRGdW5jO1xuICAgICAgICB0aGlzLm9uUmVtb3ZlID0gcGFyYW1zID8gcGFyYW1zLm9uUmVtb3ZlIHx8IG9uUmVtb3ZlRnVuYyA6IG9uUmVtb3ZlRnVuYztcbiAgICAgICAgdGhpcy5pc1NoYWxsb3cgPSBwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcy5pc1NoYWxsb3cgPT09IFwiYm9vbGVhblwiID8gcGFyYW1zLmlzU2hhbGxvdyA6IHRoaXMuaXNTaGFsbG93O1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkRG9TZXRWYWx1ZSh2YWx1ZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IG9sZFZhbCA9IGNsb25lX2RlZXBfMS5kZWZhdWx0KHRoaXMub3duVmFsdWUpO1xuICAgICAgICBsZXQgdmFsdWVUb1Bhc3M7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGlmaWNhdGlvbl8xLk1vZGlmaWNhdGlvbikge1xuICAgICAgICAgICAgdmFsdWVUb1Bhc3MgPSB2YWx1ZS52YWx1ZU9mKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdmFsdWVUb1Bhc3MgPSB2YWx1ZTtcbiAgICAgICAgbGV0IHVzZVZhbHVlID0gZmFsc2U7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGlmaWNhdGlvbl8xLk1vZGlmaWNhdGlvbikge1xuICAgICAgICAgICAgdmFsdWUuc2V0VmFsdWUodmFsdWVUb1Bhc3MpO1xuICAgICAgICAgICAgdXNlVmFsdWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlVG9TZXQgPSB1c2VWYWx1ZSA/IHZhbHVlIDogdmFsdWVUb1Bhc3M7XG4gICAgICAgIGlmICh0aGlzLnN1Yk9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy5zdWJPYmplY3Quc2V0VmFsdWUodmFsdWVUb1NldCk7XG4gICAgICAgICAgICB0aGlzLm93blZhbHVlID0gdXRpbF8xLmdldFByb3h5VGFyZ2V0KHRoaXMuc3ViT2JqZWN0LnZhbHVlT2YoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHRoaXMucHJveHlmeVZhbHVlKHZhbHVlVG9QYXNzKTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVRvUGFzcztcbiAgICAgICAgICAgIHRoaXMub3duVmFsdWUgPSB1dGlsXzEuZ2V0UHJveHlUYXJnZXQodmFsdWVUb1Bhc3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkeFN0cnVjdE9iaiA9IHRoaXMub2JqZWN0O1xuICAgICAgICBpZiAodXRpbF8xLmlzRnVuY3Rpb24oaWR4U3RydWN0T2JqW3RoaXMub25DaGFuZ2VdKSAmJiB0aGlzLmlzSW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICBpZHhTdHJ1Y3RPYmpbdGhpcy5vbkNoYW5nZV0ob2xkVmFsKTtcbiAgICAgICAgaWYgKHV0aWxfMS5pc0Z1bmN0aW9uKGlkeFN0cnVjdE9ialt0aGlzLm9uSW5pdF0pICYmICF0aGlzLmlzSW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICBpZHhTdHJ1Y3RPYmpbdGhpcy5vbkluaXRdKHZhbHVlVG9QYXNzKTtcbiAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViT2JqZWN0KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ViT2JqZWN0LnZhbHVlT2YoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHNldFN1Yk9iamVjdChzdWJPYmplY3QpIHtcbiAgICAgICAgc3ViT2JqZWN0LnByb3h5SGFuZGxlclJlcGxhY2VtZW50ID0gdGhpcy5wcm94eUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgc3ViT2JqZWN0LmlzU2hhbGxvdyA9IHRoaXMuaXNTaGFsbG93O1xuICAgICAgICB0aGlzLnN1Yk9iamVjdCA9IHN1Yk9iamVjdDtcbiAgICB9XG4gICAgcHJveHlIYW5kbGVyKHBhdGgsIGNoYW5nZWRWYWwsIHByZXZWYWwpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViT2JqZWN0KVxuICAgICAgICAgICAgdGhpcy5zdWJPYmplY3QucHJveHlIYW5kbGVyKHBhdGgsIGNoYW5nZWRWYWwsIHByZXZWYWwpO1xuICAgICAgICBjb25zdCBuZXdLZXlzID0gY2hhbmdlZFZhbCA/IE9iamVjdC5rZXlzKGNoYW5nZWRWYWwpIDogW107XG4gICAgICAgIGNvbnN0IG9sZEtleXMgPSBwcmV2VmFsID8gT2JqZWN0LmtleXMocHJldlZhbCkgOiBbXTtcbiAgICAgICAgY29uc3QgbmV3TGVuID0gbmV3S2V5cy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IG9sZExlbiA9IG9sZEtleXMubGVuZ3RoO1xuICAgICAgICB0aGlzLmNhc2VEZXRlY3RFeGVjKHtcbiAgICAgICAgICAgIGxlbjE6IG5ld0xlbixcbiAgICAgICAgICAgIGxlbjI6IG9sZExlbixcbiAgICAgICAgICAgIGZ1bmM6IHRoaXMub25BZGQsXG4gICAgICAgICAgICBrZXlzMTogbmV3S2V5cyxcbiAgICAgICAgICAgIGtleXMyOiBvbGRLZXlzLFxuICAgICAgICAgICAgY2hhbmdlZFZhbCxcbiAgICAgICAgICAgIHBhdGhcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2FzZURldGVjdEV4ZWMoe1xuICAgICAgICAgICAgbGVuMTogb2xkTGVuLFxuICAgICAgICAgICAgbGVuMjogbmV3TGVuLFxuICAgICAgICAgICAgZnVuYzogdGhpcy5vblJlbW92ZSxcbiAgICAgICAgICAgIGtleXMxOiBvbGRLZXlzLFxuICAgICAgICAgICAga2V5czI6IG5ld0tleXMsXG4gICAgICAgICAgICBjaGFuZ2VkVmFsLFxuICAgICAgICAgICAgcGF0aFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5ld0xlbiA9PT0gb2xkTGVuICYmIHRoaXMub25DaGFuZ2UgaW4gdGhpcyAmJiB0aGlzLmlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0W3RoaXMub25DaGFuZ2VdKGNoYW5nZWRWYWwsIHBhdGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNob3VsZERvU2V0VmFsdWUodmFsdWUsIHNraXBHdWFyZCA9IGZhbHNlKSB7XG4gICAgICAgIGlmICh0aGlzLnN1Yk9iamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ViT2JqZWN0LnNob3VsZERvU2V0VmFsdWUodmFsdWUsIHNraXBHdWFyZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuICh2YWx1ZSAhPT0gdGhpcy5vd25WYWx1ZSk7XG4gICAgfVxuICAgIHByb3h5ZnlWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSB8fCB1dGlsXzEuaXNPYmplY3QodmFsdWUpICYmICF2YWx1ZS5pc0JET01vZGVsKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG9uX2NoYW5nZV8xLmRlZmF1bHQudGFyZ2V0KHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBvbl9jaGFuZ2VfMS5kZWZhdWx0KHZhbHVlLCAocGF0aCwgY2hhbmdlZFZhbHVlLCBwcmV2aW91c1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm94eUhhbmRsZXIocGF0aCwgY2hhbmdlZFZhbHVlLCBwcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgICAgIH0sIHsgaXNTaGFsbG93OiB0aGlzLmlzU2hhbGxvdyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNhc2VEZXRlY3RFeGVjKGNkUGFyYW1zKSB7XG4gICAgICAgIGlmIChjZFBhcmFtcy5sZW4xID4gY2RQYXJhbXMubGVuMiAmJiBjZFBhcmFtcy5mdW5jIGluIHRoaXMub2JqZWN0KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1vZGlmaWVkIG9mIGNkUGFyYW1zLmtleXMxKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjZFBhcmFtcy5rZXlzMi5pbmNsdWRlcyhtb2RpZmllZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmplY3RbY2RQYXJhbXMuZnVuY10oKGNkUGFyYW1zLmNoYW5nZWRWYWwpW21vZGlmaWVkXSwgY2RQYXJhbXMucGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuV2F0Y2hlZCA9IFdhdGNoZWQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWMkYwWTJobFpDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiR2xpTDFkaGRHTm9aV1F1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJSVUVzZDBSQlFYRkVPMEZCUTNKRUxEQkRRVUZuUmp0QlFVTm9SaXhyUlVGQmFVTTdRVUZEYWtNc2IwVkJRVzFETzBGQk9FaHVReXhOUVVGaExFOUJRVTg3U1VGeFIyaENMRmxCUVZrc1RVRkJVeXhGUVVGRkxGRkJRVmNzUlVGQlJTeE5RVUYxUWp0UlFXaERjRVFzWTBGQlV5eEhRVUZaTEVsQlFVa3NRMEZCUXp0UlFUaENla0lzYTBKQlFXRXNSMEZCV1N4TFFVRkxMRU5CUVVNN1VVRkhia01zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRja0lzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNN1VVRkZla0lzVFVGQlRTeGxRVUZsTEVkQlFVY3NZMEZCVHl4RFFVRkRMRkZCUVd0Q0xFTkJRVU1zUTBGQlF6dFJRVVZ3UkN4TlFVRk5MRlZCUVZVc1IwRkJSeXhMUVVGTExHVkJRV1VzVFVGQlRTeERRVUZETzFGQlF6bERMRTFCUVUwc1dVRkJXU3hIUVVGSExFdEJRVXNzWlVGQlpTeFJRVUZSTEVOQlFVTTdVVUZEYkVRc1RVRkJUU3hUUVVGVExFZEJRVWNzUzBGQlN5eGxRVUZsTEV0QlFVc3NRMEZCUXp0UlFVTTFReXhOUVVGTkxGbEJRVmtzUjBGQlJ5eExRVUZMTEdWQlFXVXNVVUZCVVN4RFFVRkRPMUZCUld4RUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEpRVUZKTEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRE8xRkJRMmhGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4SlFVRkpMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETzFGQlEzaEZMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRPMUZCUXpWRUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeEpRVUZKTEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRE8xRkJSWGhGTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1RVRkJUU3hKUVVGSkxFOUJRVThzVFVGQlRTeERRVUZETEZOQlFWTXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU03U1VGRGVrY3NRMEZCUXp0SlFWVk5MRkZCUVZFc1EwRkJReXhMUVVGblF6dFJRVU0xUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRXRCUVVzc1EwRkJRenRaUVVGRkxFOUJRVTg3VVVGSE1VTXNUVUZCVFN4TlFVRk5MRWRCUVVjc2IwSkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkZlRU1zU1VGQlNTeFhRVUUyUWl4RFFVRkRPMUZCUTJ4RExFbEJRVWtzUzBGQlN5eFpRVUZaTERKQ1FVRlpMRVZCUVVVN1dVRkRMMElzVjBGQlZ5eEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRUUVVOcVF6czdXVUZCVFN4WFFVRlhMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJSek5DTEVsQlFVa3NVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOeVFpeEpRVUZKTEV0QlFVc3NXVUZCV1N3eVFrRkJXU3hGUVVGRk8xbEJReTlDTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03V1VGRE5VSXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJRenRUUVVOdVFqdFJRVVZFTEUxQlFVMHNWVUZCVlN4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkZiRVFzU1VGQlNTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZPMWxCUTJoQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc2NVSkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRE5VUTdZVUZCVFR0WlFVVklMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMWxCUXpkRExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NWMEZCVnl4RFFVRkRPMWxCUTNwQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NjVUpCUVdNc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFRRVU12UXp0UlFVVkVMRTFCUVUwc1dVRkJXU3hIUVVGdFFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUldwRUxFbEJRVWtzYVVKQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMR0ZCUVdFN1dVRkJSU3haUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJSWFpITEVsQlFVa3NhVUpCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWVVGQllUdFpRVUZGTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVVUZEZWtjc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eEpRVUZKTEVOQlFVTTdTVUZET1VJc1EwRkJRenRKUVZWTkxFOUJRVTg3VVVGRFZpeEpRVUZKTEVsQlFVa3NRMEZCUXl4VFFVRlRPMWxCUVVVc1QwRkJUeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUTNCRUxFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTjBRaXhEUVVGRE8wbEJWVTBzV1VGQldTeERRVUZETEZOQlFUSkRPMUZCUXpORUxGTkJRVk1zUTBGQlF5eDFRa0ZCZFVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOcVJTeFRRVUZUTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU03VVVGRGNrTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU03U1VGREwwSXNRMEZCUXp0SlFWVk5MRmxCUVZrc1EwRkJReXhKUVVGWkxFVkJRVVVzVlVGQlowSXNSVUZCUlN4UFFVRmhPMUZCUXpkRUxFbEJRVWtzU1VGQlNTeERRVUZETEZOQlFWTTdXVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8xRkJRek5GTEUxQlFVMHNUMEZCVHl4SFFVRkhMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETzFGQlF6RkVMRTFCUVUwc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMUZCUTNCRUxFMUJRVTBzVFVGQlRTeEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRPVUlzVFVGQlRTeE5RVUZOTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVjNVFpeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRPMWxCUTJoQ0xFbEJRVWtzUlVGQlJTeE5RVUZOTzFsQlExb3NTVUZCU1N4RlFVRkZMRTFCUVUwN1dVRkRXaXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVczdXVUZEYUVJc1MwRkJTeXhGUVVGRkxFOUJRVTg3V1VGRFpDeExRVUZMTEVWQlFVVXNUMEZCVHp0WlFVTmtMRlZCUVZVN1dVRkRWaXhKUVVGSk8xTkJRMUFzUTBGQlF5eERRVUZETzFGQlJVZ3NTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJRenRaUVVOb1FpeEpRVUZKTEVWQlFVVXNUVUZCVFR0WlFVTmFMRWxCUVVrc1JVRkJSU3hOUVVGTk8xbEJRMW9zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJPMWxCUTI1Q0xFdEJRVXNzUlVGQlJTeFBRVUZQTzFsQlEyUXNTMEZCU3l4RlFVRkZMRTlCUVU4N1dVRkRaQ3hWUVVGVk8xbEJRMVlzU1VGQlNUdFRRVU5RTEVOQlFVTXNRMEZCUXp0UlFVVklMRWxCUVVrc1RVRkJUU3hMUVVGTExFMUJRVTBzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4SlFVRkpMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zWVVGQllTeEZRVUZGTzFsQlEycEVMRWxCUVVrc1EwRkJReXhOUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRlZCUVZVc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU5zUlR0SlFVTk1MRU5CUVVNN1NVRlhUeXhuUWtGQlowSXNRMEZCUXl4TFFVRm5ReXhGUVVGRkxGbEJRWEZDTEV0QlFVczdVVUZEYWtZc1NVRkJTU3hKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTzFsQlEyaENMRTlCUVU4c1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhMUVVGTExFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdVMEZETlVRN08xbEJRVTBzVDBGQlR5eERRVUZETEV0QlFVc3NTMEZCU3l4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03U1VGRE5VTXNRMEZCUXp0SlFWZFBMRmxCUVZrc1EwRkJReXhMUVVGWk8xRkJRemRDTEVsQlFVa3NTMEZCU3l4WlFVRlpMRXRCUVVzc1NVRkJTU3hsUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCVHl4TFFVRk5MRU5CUVVNc1ZVRkJWU3hGUVVGRk8xbEJRM1pGTEV0QlFVc3NSMEZCUnl4dFFrRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTXZRaXhQUVVGUExHMUNRVUZSTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxGbEJRVmtzUlVGQlJTeGhRVUZoTEVWQlFVVXNSVUZCUlR0blFrRkRla1FzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVZFc1dVRkJXU3hGUVVGUkxHRkJRV0VzUTBGQlF5eERRVUZETzFsQlEzSkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOeVF6dFJRVU5FTEU5QlFVOHNTMEZCU3l4RFFVRkRPMGxCUTJwQ0xFTkJRVU03U1VGVFR5eGpRVUZqTEVOQlFVTXNVVUZCTWtJN1VVRkRPVU1zU1VGQlNTeFJRVUZSTEVOQlFVTXNTVUZCU1N4SFFVRkhMRkZCUVZFc1EwRkJReXhKUVVGSkxFbEJRVWtzVVVGQlVTeERRVUZETEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJReTlFTEV0QlFVc3NUVUZCVFN4UlFVRlJMRWxCUVVrc1VVRkJVU3hEUVVGRExFdEJRVXNzUlVGQlJUdG5Ra0ZEYmtNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRk8yOUNRVU01UWl4SlFVRkpMRU5CUVVNc1RVRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlRTeFJRVUZSTEVOQlFVTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03YjBKQlEzWkdMRTFCUVUwN2FVSkJRMVE3WVVGRFNqdFRRVU5LTzBsQlEwd3NRMEZCUXp0RFFVTktPMEZCTjFKRUxEQkNRVFpTUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5mdW5jdGlvbiBCRE9UZXN0RmFjdG9yeShjdG9yKSB7XG4gICAgbGV0IEJET1Rlc3QgPSBjbGFzcyBCRE9UZXN0IGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSAndGVzdCc7XG4gICAgICAgICAgICB0aGlzLnRlc3RlciA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIG9uVGVzdENoYW5nZShjaGFuZ2VkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3QgY2hhbmdlZFwiLCBjaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBvblRlc3RlckluaXQoaW5pdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgaW5pdFwiLCBpbml0LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBvblRlc3RlckNoYW5nZShjaGFuZ2VkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RlciBjaGFuZ2VkXCIsIGNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIG9uVGVzdGVyQWRkKGFkZGVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RlciBhZGRlZFwiLCBhZGRlZCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgb25UZXN0ZXJSZW1vdmUocmVtb3ZlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgcmVtb3ZlZFwiLCByZW1vdmVkLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLmF0dHJpYnV0ZSh7IGF1dG9TYXZlOiB0cnVlIH0pLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgQkRPVGVzdC5wcm90b3R5cGUsIFwidGl0bGVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEud2F0Y2hlZCgpLCBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKChfdHlwZSkgPT4gW1N0cmluZ10pLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSlcbiAgICBdLCBCRE9UZXN0LnByb3RvdHlwZSwgXCJ0ZXN0ZXJcIiwgdm9pZCAwKTtcbiAgICBCRE9UZXN0ID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3Rvcih7IGlzQWJzdHJhY3Q6IHRydWUsIGNvbGxlY3Rpb25OYW1lOiBcIkJET1Rlc3RcIiB9KVxuICAgIF0sIEJET1Rlc3QpO1xuICAgIHJldHVybiBCRE9UZXN0O1xufVxuZXhwb3J0cy5CRE9UZXN0RmFjdG9yeSA9IEJET1Rlc3RGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFZHVnpkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2Ylc5a1pXeHpMMEpFVDFSbGMzUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNjMFJCUVRSRk8wRkJWVFZGTEZOQlFXZENMR05CUVdNc1EwRkJjME1zU1VGQlZ6dEpRVk16UlN4SlFVRmxMRTlCUVU4c1IwRkJkRUlzVFVGQlpTeFBRVUZSTEZOQlFWRXNTVUZCU1R0UlFVRnVRenM3V1VGUk1FTXNWVUZCU3l4SFFVRlhMRTFCUVUwc1EwRkJRenRaUVZGWUxGZEJRVTBzUjBGQllTeEZRVUZGTEVOQlFVTTdVVUY1UkRWRkxFTkJRVU03VVVGb1JHRXNXVUZCV1N4RFFVRkRMRTlCUVhWQ08xbEJRekZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1kwRkJZeXhGUVVGRkxFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTXZReXhEUVVGRE8xRkJVMU1zV1VGQldTeERRVUZETEVsQlFXOUNPMWxCUTNaRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNZVUZCWVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU16UXl4RFFVRkRPMUZCVTFNc1kwRkJZeXhEUVVGRExFOUJRWFZDTzFsQlF6VkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEycEVMRU5CUVVNN1VVRlRVeXhYUVVGWExFTkJRVU1zUzBGQmNVSTdXVUZEZGtNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eGpRVUZqTEVWQlFVVXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRemRETEVOQlFVTTdVVUZUVXl4alFVRmpMRU5CUVVNc1QwRkJkVUk3V1VGRE5VTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhuUWtGQlowSXNSVUZCUlN4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRGFrUXNRMEZCUXp0TFFVVktMRU5CUVVFN1NVRnFSV3RETzFGQlFUbENMSE5DUVVGVExFTkJRVU1zUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RlFVRkZMRU5CUVVNN096QkRRVUVyUWp0SlFWRnNRanRSUVVFeFF5eHZRa0ZCVHl4RlFVRkZMRVZCUVVVc2MwSkJRVk1zUTBGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6czdNa05CUVRoQ08wbEJhRUkzUkN4UFFVRlBPMUZCUkhKQ0xEUkNRVUZsTEVOQlFVTXNSVUZCUlN4VlFVRlZMRVZCUVVVc1NVRkJTU3hGUVVGRkxHTkJRV01zUlVGQlJTeFRRVUZUTEVWQlFVVXNRMEZCUXp0UFFVTnNSQ3hQUVVGUExFTkJlVVZ5UWp0SlFVTkVMRTlCUVU4c1QwRkJUeXhEUVVGRE8wRkJSVzVDTEVOQlFVTTdRVUZ5UmtRc2QwTkJjVVpESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5mdW5jdGlvbiBCRE9UZXN0MUZhY3RvcnkoY3Rvcikge1xuICAgIGxldCBCRE9UZXN0MSA9IGNsYXNzIEJET1Rlc3QxIGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGRvU29tZXRoaW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwibG9sXCI7XG4gICAgICAgIH1cbiAgICAgICAgb25PaGFJbml0KF92YWx1ZSkge1xuICAgICAgICB9XG4gICAgfTtcbiAgICBCRE9UZXN0MSA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoeyBpc0Fic3RyYWN0OiB0cnVlLCBjb2xsZWN0aW9uTmFtZTogXCJCRE9UZXN0MVwiIH0pXG4gICAgXSwgQkRPVGVzdDEpO1xuICAgIHJldHVybiBCRE9UZXN0MTtcbn1cbmV4cG9ydHMuQkRPVGVzdDFGYWN0b3J5ID0gQkRPVGVzdDFGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFZHVnpkREV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDIxdlpHVnNjeTlDUkU5VVpYTjBNUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkRRU3h6UkVGQmQwUTdRVUZUZUVRc1UwRkJaMElzWlVGQlpTeERRVUZyUkN4SlFVRlhPMGxCVlhoR0xFbEJRV1VzVVVGQlVTeEhRVUYyUWl4TlFVRmxMRkZCUVZNc1UwRkJVU3hKUVVGSk8xRkJVWHBDTEZkQlFWYzdXVUZEWkN4UFFVRlBMRXRCUVVzc1EwRkJRenRSUVVOcVFpeERRVUZETzFGQlUxTXNVMEZCVXl4RFFVRkRMRTFCUVdNN1VVRkZiRU1zUTBGQlF6dExRVU5LTEVOQlFVRTdTVUYwUW1Nc1VVRkJVVHRSUVVSMFFpdzBRa0ZCWlN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFbEJRVWtzUlVGQlJTeGpRVUZqTEVWQlFVVXNWVUZCVlN4RlFVRkZMRU5CUVVNN1QwRkRia1FzVVVGQlVTeERRWE5DZEVJN1NVRkRSQ3hQUVVGUExGRkJRVkVzUTBGQlF6dEJRVU53UWl4RFFVRkRPMEZCYkVORUxEQkRRV3REUXlKOSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcblwidXNlIHN0cmljdFwiO1xuY29uc3QgQ2h1bmtfMSA9IHJlcXVpcmUoXCIuL0NodW5rXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmxldCBDZWxsID0gY2xhc3MgQ2VsbCB7XG4gICAgY29uc3RydWN0b3IoX3BhcmFtcykge1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLmNhdmUgPSAwO1xuICAgICAgICB0aGlzLnJpdmVyID0gMDtcbiAgICAgICAgdGhpcy5odW1pZGl0eSA9IDA7XG4gICAgICAgIHRoaXMudGVtcGVyYXR1cmUgPSAwO1xuICAgICAgICB0aGlzLmNodW5rID0gbmV3IENodW5rXzEuQ2h1bmsoKTtcbiAgICB9XG59O1xuQ2VsbCA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIENvbnN0UGFyYW1zICE9PSBcInVuZGVmaW5lZFwiICYmIENvbnN0UGFyYW1zKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3RdKVxuXSwgQ2VsbCk7XG5leHBvcnRzLkNlbGwgPSBDZWxsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTJWc2JDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiVzlrWld4ekwwTmxiR3d1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdRVUZCUVN4dFEwRkJaME03UVVGRGFFTXNjMFJCUVhkRU8wRkJVM2hFTEVsQlFXRXNTVUZCU1N4SFFVRnFRaXhOUVVGaExFbEJRVWs3U1VGNVJHSXNXVUZCV1N4UFFVRXlRanRSUVd4RWFFTXNUVUZCUXl4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVZGa0xFMUJRVU1zUjBGQlZ5eERRVUZETEVOQlFVTTdVVUZSWkN4VFFVRkpMRWRCUVZjc1EwRkJReXhEUVVGRE8xRkJVV3BDTEZWQlFVc3NSMEZCVnl4RFFVRkRMRU5CUVVNN1VVRlJiRUlzWVVGQlVTeEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFWRnlRaXhuUWtGQlZ5eEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFWRjRRaXhWUVVGTExFZEJRVlVzU1VGQlNTeGhRVUZMTEVWQlFVVXNRMEZCUXp0SlFVVlRMRU5CUVVNN1EwRkRMME1zUTBGQlFUdEJRVEZFV1N4SlFVRkpPMGxCUkdoQ0xEUkNRVUZsTEVWQlFVVTdhVVZCTUVSUkxGZEJRVmNzYjBKQlFWZ3NWMEZCVnp0SFFYcEVlRUlzU1VGQlNTeERRVEJFYUVJN1FVRXhSRmtzYjBKQlFVa2lmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3Qgb3Blbl9zaW1wbGV4X25vaXNlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwib3Blbi1zaW1wbGV4LW5vaXNlXCIpKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBDZWxsXzEgPSByZXF1aXJlKFwiLi9DZWxsXCIpO1xuY2xhc3MgQ2h1bmsge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLnNpemUgPSA2NDtcbiAgICAgICAgdGhpcy5ncmlkID0gW107XG4gICAgICAgIHRoaXMuc2ltcGxleENhdmUgPSBuZXcgb3Blbl9zaW1wbGV4X25vaXNlXzEuZGVmYXVsdCgxKTtcbiAgICAgICAgdGhpcy5zaW1wbGV4Uml2ZXIgPSBuZXcgb3Blbl9zaW1wbGV4X25vaXNlXzEuZGVmYXVsdCgyKTtcbiAgICAgICAgdGhpcy5zaW1wbGV4VGVtcGVyYXR1cmUgPSBuZXcgb3Blbl9zaW1wbGV4X25vaXNlXzEuZGVmYXVsdCgzKTtcbiAgICAgICAgdGhpcy5zaW1wbGV4SHVtaWRpdHkgPSBuZXcgb3Blbl9zaW1wbGV4X25vaXNlXzEuZGVmYXVsdCg0KTtcbiAgICAgICAgdXRpbF8xLm1lcmdlKHRoaXMsIHBhcmFtcyk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVHcmlkKCk7XG4gICAgfVxuICAgIGdlbmVyYXRlR3JpZCgpIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5zaXplOyByb3crKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdyaWRbcm93XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5wdXNoKFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuc2l6ZTsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4Q29vcmRpbmF0ZSA9IGNvbCArIHRoaXMueCAqIHRoaXMuc2l6ZTtcbiAgICAgICAgICAgICAgICBjb25zdCB5Q29vcmRpbmF0ZSA9IHJvdyArIHRoaXMueSAqIHRoaXMuc2l6ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRbcm93XS5wdXNoKG5ldyBDZWxsXzEuQ2VsbCh7XG4gICAgICAgICAgICAgICAgICAgIHg6IHhDb29yZGluYXRlLFxuICAgICAgICAgICAgICAgICAgICB5OiB5Q29vcmRpbmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgY2F2ZTogdGhpcy5zaW1wbGV4Q2F2ZS5ub2lzZTJEKHhDb29yZGluYXRlIC8gMTAwLCB5Q29vcmRpbmF0ZSAvIDEwMCksXG4gICAgICAgICAgICAgICAgICAgIHJpdmVyOiB0aGlzLnNpbXBsZXhSaXZlci5ub2lzZTJEKHhDb29yZGluYXRlIC8gNTAwLCB5Q29vcmRpbmF0ZSAvIDUwMCksXG4gICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiB0aGlzLnNpbXBsZXhUZW1wZXJhdHVyZS5ub2lzZTJEKHhDb29yZGluYXRlIC8gMjUwMCwgeUNvb3JkaW5hdGUgLyAyNTAwKSxcbiAgICAgICAgICAgICAgICAgICAgaHVtaWRpdHk6IHRoaXMuc2ltcGxleEh1bWlkaXR5Lm5vaXNlMkQoeENvb3JkaW5hdGUgLyAyNTAwLCB5Q29vcmRpbmF0ZSAvIDI1MDApLFxuICAgICAgICAgICAgICAgICAgICBjaHVuazogdGhpc1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuQ2h1bmsgPSBDaHVuaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyaDFibXN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDIxdlpHVnNjeTlEYUhWdWF5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTeHZSa0ZCYTBRN1FVRkRiRVFzTUVOQlFYZERPMEZCUTNoRExHbERRVUU0UWp0QlFWRTVRaXhOUVVGaExFdEJRVXM3U1VGelJXUXNXVUZCV1N4TlFVRXlRanRSUVM5RWFFTXNUVUZCUXl4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVZGa0xFMUJRVU1zUjBGQlZ5eERRVUZETEVOQlFVTTdVVUZSWkN4VFFVRkpMRWRCUVZrc1JVRkJSU3hEUVVGRE8xRkJVMmhDTEZOQlFVa3NSMEZCWVN4RlFVRkZMRU5CUVVNN1VVRlRjRUlzWjBKQlFWY3NSMEZCY1VJc1NVRkJTU3cwUWtGQlowSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVZONFJDeHBRa0ZCV1N4SFFVRnhRaXhKUVVGSkxEUkNRVUZuUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJVM3BFTEhWQ1FVRnJRaXhIUVVGeFFpeEpRVUZKTERSQ1FVRm5RaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlV5OUVMRzlDUVVGbExFZEJRWEZDTEVsQlFVa3NORUpCUVdkQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZIYkVVc1dVRkJTeXhEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTndRaXhKUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTTdTVUZEZUVJc1EwRkJRenRKUVZGVExGbEJRVms3VVVGRGJFSXNTMEZCU3l4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZaTEVsQlFVa3NRMEZCUXl4SlFVRkxMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVU3V1VGRGFFUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdaMEpCUTJwQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8yRkJRM1JDTzFsQlEwUXNTMEZCU3l4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZaTEVsQlFVa3NRMEZCUXl4SlFVRkxMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVU3WjBKQlEyaEVMRTFCUVUwc1YwRkJWeXhIUVVGSExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRlhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU03WjBKQlEzSkVMRTFCUVUwc1YwRkJWeXhIUVVGSExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRlhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU03WjBKQlJYSkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVTm1MRWxCUVVrc1YwRkJTU3hEUVVGRE8yOUNRVU5NTEVOQlFVTXNSVUZCUlN4WFFVRlhPMjlDUVVOa0xFTkJRVU1zUlVGQlJTeFhRVUZYTzI5Q1FVTmtMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRWRCUVVjc1IwRkJSeXhGUVVGRkxGZEJRVmNzUjBGQlJ5eEhRVUZITEVOQlFVTTdiMEpCUTNCRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFZEJRVWNzUjBGQlJ5eEZRVUZGTEZkQlFWY3NSMEZCUnl4SFFVRkhMRU5CUVVNN2IwSkJRM1JGTEZkQlFWY3NSVUZCUlN4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFVkJRVVVzVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXp0dlFrRkRjRVlzVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUjBGQlJ5eEpRVUZKTEVWQlFVVXNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJRenR2UWtGRE9VVXNTMEZCU3l4RlFVRkZMRWxCUVVrN2FVSkJRMlFzUTBGQlF5eERRVU5NTEVOQlFVTTdZVUZEVER0VFFVTktPMGxCUTB3c1EwRkJRenREUVVOS08wRkJlRWRFTEhOQ1FYZEhReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBCRE9Db25maWdGYWN0b3J5KGN0b3IpIHtcbiAgICBjbGFzcyBCRE9Db25maWcgZXh0ZW5kcyBjdG9yIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXMgPSBbXCIvOm5hbWVcIl07XG4gICAgICAgICAgICB0aGlzLmpzb25Pbmx5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gQkRPQ29uZmlnO1xufVxuZXhwb3J0cy5CRE9Db25maWdGYWN0b3J5ID0gQkRPQ29uZmlnRmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBRMjl1Wm1sbkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXliM1YwWlhNdlFrUlBRMjl1Wm1sbkxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCVTBFc1UwRkJaMElzWjBKQlFXZENMRU5CUVhORExFbEJRVmM3U1VGVk4wVXNUVUZCWlN4VFFVRlZMRk5CUVZFc1NVRkJTVHRSUVVGeVF6czdXVUZQVnl4WFFVRk5MRWRCUVdFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVTh6UWl4aFFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRemxDTEVOQlFVTTdTMEZCUVR0SlFVVkVMRTlCUVU4c1UwRkJVeXhEUVVGRE8wRkJRM0pDTEVOQlFVTTdRVUUxUWtRc05FTkJORUpESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gQkRPR2FtZUxvYmJ5RmFjdG9yeShjdG9yKSB7XG4gICAgY2xhc3MgQkRPR2FtZUxvYmJ5IGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyTmFtZVNwYWNlID0gJy8nO1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVN0cmluZyA9IHJlcXVpcmUoJ35iZG8vdmlld3MvZ2FtZUxvYmJ5Lm5qaycpO1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvaGE6ICdPT09PT0hBQUFBQUFBQSEhISdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQkRPR2FtZUxvYmJ5LmF0dGFjaFRvU2VydmVycyA9IFtcIkdhbWVTZXJ2ZXJcIl07XG4gICAgcmV0dXJuIEJET0dhbWVMb2JieTtcbn1cbmV4cG9ydHMuQkRPR2FtZUxvYmJ5RmFjdG9yeSA9IEJET0dhbWVMb2JieUZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQUjJGdFpVeHZZbUo1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5eWIzVjBaWE12UWtSUFIyRnRaVXh2WW1KNUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCVlVFc1UwRkJaMElzYlVKQlFXMUNMRU5CUVhORExFbEJRVmM3U1VGVGFFWXNUVUZCWlN4WlFVRmhMRk5CUVZFc1NVRkJTVHRSUVVGNFF6czdXVUZuUWxjc2IwSkJRV1VzUjBGQlJ5eEhRVUZITEVOQlFVTTdXVUZSYmtJc2JVSkJRV01zUjBGQllTeFBRVUZQTEVOQlFVTXNNRUpCUVRCQ0xFTkJRVU1zUTBGQlF6dFJRV00zUlN4RFFVRkRPMUZCVEdFc1MwRkJTeXhEUVVGRExHTkJRV003V1VGRE1VSXNUMEZCVHp0blFrRkRTQ3hIUVVGSExFVkJRVVVzYlVKQlFXMUNPMkZCUXpOQ0xFTkJRVU03VVVGRFRpeERRVUZET3p0SlFUVkNZU3cwUWtGQlpTeEhRVUZoTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1NVRXJRamRFTEU5QlFVOHNXVUZCV1N4RFFVRkRPMEZCUTNoQ0xFTkJRVU03UVVGc1JFUXNhMFJCYTBSREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIEJET0hvbWVGYWN0b3J5KGN0b3IpIHtcbiAgICBjbGFzcyBCRE9Ib21lIGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyTmFtZVNwYWNlID0gJy8nO1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVN0cmluZyA9IHJlcXVpcmUoJ35iZG8vdmlld3MvaG9tZS5uamsnKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyB0ZW1wbGF0ZVBhcmFtcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb2hhOiAnZW5kbGljaCB6dSBIYXVzZSA9KSdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQkRPSG9tZS5hdHRhY2hUb1NlcnZlcnMgPSBbXCJXZWJTZXJ2ZXJcIl07XG4gICAgcmV0dXJuIEJET0hvbWU7XG59XG5leHBvcnRzLkJET0hvbWVGYWN0b3J5ID0gQkRPSG9tZUZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQU0c5dFpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZjbTkxZEdWekwwSkVUMGh2YldVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZWUVN4VFFVRm5RaXhqUVVGakxFTkJRWE5ETEVsQlFWYzdTVUZUTTBVc1RVRkJaU3hQUVVGUkxGTkJRVkVzU1VGQlNUdFJRVUZ1UXpzN1dVRm5RbGNzYjBKQlFXVXNSMEZCUnl4SFFVRkhMRU5CUVVNN1dVRlJia0lzYlVKQlFXTXNSMEZCWVN4UFFVRlBMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNRMEZCUXp0UlFXTjRSU3hEUVVGRE8xRkJUR0VzUzBGQlN5eERRVUZETEdOQlFXTTdXVUZETVVJc1QwRkJUenRuUWtGRFNDeEhRVUZITEVWQlFVVXNjVUpCUVhGQ08yRkJRemRDTEVOQlFVTTdVVUZEVGl4RFFVRkRPenRKUVRWQ1lTeDFRa0ZCWlN4SFFVRmhMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03U1VFclFqVkVMRTlCUVU4c1QwRkJUeXhEUVVGRE8wRkJRMjVDTEVOQlFVTTdRVUZzUkVRc2QwTkJhMFJESW4wPSIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL3NvdXJjZS9hcHAvdXRpbHMgc3luYyByZWN1cnNpdmVcIjsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCJyZWZsZWN0LW1ldGFkYXRhXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IGVudmlyb25tZW50XzEgPSByZXF1aXJlKFwifmJkby91dGlscy9lbnZpcm9ubWVudFwiKTtcbmNvbnN0IEJhc2VDb25zdHJ1Y3Rvcl8xID0gcmVxdWlyZShcIn5iZG8vbGliL0Jhc2VDb25zdHJ1Y3RvclwiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IGZyYW1ld29ya18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZnJhbWV3b3JrXCIpO1xuY29uc3QgdHlwZV9ncmFwaHFsXzEgPSByZXF1aXJlKFwidHlwZS1ncmFwaHFsXCIpO1xuZnVuY3Rpb24gd2F0Y2hlZChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nS2V5ID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgICAgIGZyYW1ld29ya18xLmJlZm9yZVByb3BlcnR5RGVzY3JpcHRvcnModGFyZ2V0LCBzdHJpbmdLZXksIFwiZGVmaW5lZFdhdGNoZXJzXCIpO1xuICAgICAgICBmcmFtZXdvcmtfMS5jcmVhdGVEZWNvcmF0b3JEZXNjcmlwdG9yKHRhcmdldCwgc3RyaW5nS2V5LCBcIldhdGNoZWRcIiwgcGFyYW1zKTtcbiAgICB9O1xufVxuZXhwb3J0cy53YXRjaGVkID0gd2F0Y2hlZDtcbmZ1bmN0aW9uIHByb3BlcnR5KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICAgICAgZnJhbWV3b3JrXzEuYmVmb3JlUHJvcGVydHlEZXNjcmlwdG9ycyh0YXJnZXQsIHN0cmluZ0tleSwgXCJkZWZpbmVkUHJvcGVydGllc1wiKTtcbiAgICAgICAgZnJhbWV3b3JrXzEuY3JlYXRlRGVjb3JhdG9yRGVzY3JpcHRvcih0YXJnZXQsIHN0cmluZ0tleSwgXCJQcm9wZXJ0eVwiLCBwYXJhbXMpO1xuICAgIH07XG59XG5leHBvcnRzLnByb3BlcnR5ID0gcHJvcGVydHk7XG5mdW5jdGlvbiBhdHRyaWJ1dGUodHlwZUZ1bmMsIHBhcmFtcykge1xuICAgIHJldHVybiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nS2V5ID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgICAgIGlmICh0eXBlRnVuYyAmJiAhKHR5cGVGdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pICYmICFwYXJhbXMpXG4gICAgICAgICAgICBwYXJhbXMgPSB0eXBlRnVuYztcbiAgICAgICAgaWYgKCFwYXJhbXMpXG4gICAgICAgICAgICBwYXJhbXMgPSB7fTtcbiAgICAgICAgaWYgKHR5cGVGdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24gJiYgcGFyYW1zKVxuICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuRmllbGQodHlwZUZ1bmMsIHBhcmFtcykodGFyZ2V0LCBrZXkpO1xuICAgICAgICBlbHNlIGlmICh0eXBlRnVuYyBpbnN0YW5jZW9mIEZ1bmN0aW9uKVxuICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuRmllbGQodHlwZUZ1bmMpKHRhcmdldCwga2V5KTtcbiAgICAgICAgZWxzZSBpZiAocGFyYW1zKVxuICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuRmllbGQocGFyYW1zKSh0YXJnZXQsIGtleSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLkZpZWxkKCkodGFyZ2V0LCBrZXkpO1xuICAgICAgICBmcmFtZXdvcmtfMS5iZWZvcmVQcm9wZXJ0eURlc2NyaXB0b3JzKHRhcmdldCwgc3RyaW5nS2V5LCBcImRlZmluZWRBdHRyaWJ1dGVzXCIpO1xuICAgICAgICBmcmFtZXdvcmtfMS5jcmVhdGVEZWNvcmF0b3JEZXNjcmlwdG9yKHRhcmdldCwgc3RyaW5nS2V5LCBcIkF0dHJpYnV0ZVwiLCBwYXJhbXMpO1xuICAgIH07XG59XG5leHBvcnRzLmF0dHJpYnV0ZSA9IGF0dHJpYnV0ZTtcbmZ1bmN0aW9uIGJhc2VDb25zdHJ1Y3RvcihuYW1lLCBvcHRpb25zLCBjb25zdFBhcmFtc0luZGV4ID0gMCkge1xuICAgIHJldHVybiAoY3RvcikgPT4ge1xuICAgICAgICBjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoY3Rvcik7XG4gICAgICAgIGlmIChmcmFtZXdvcmtfMS5pc0Jhc2VDb25zdHJ1Y3Rvcihwcm90b3R5cGUpKVxuICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGN0b3IsIE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpKTtcbiAgICAgICAgaWYgKG5hbWUgJiYgKHR5cGVvZiBuYW1lID09PSBcIm51bWJlclwiKSlcbiAgICAgICAgICAgIGNvbnN0UGFyYW1zSW5kZXggPSBuYW1lO1xuICAgICAgICBpZiAobmFtZSAmJiAodHlwZW9mIG5hbWUgPT09IFwib2JqZWN0XCIpKVxuICAgICAgICAgICAgb3B0aW9ucyA9IG5hbWU7XG4gICAgICAgIGlmIChuYW1lICYmICgodHlwZW9mIG5hbWUgPT09IFwib2JqZWN0XCIpIHx8ICh0eXBlb2YgbmFtZSA9PT0gXCJudW1iZXJcIikpKVxuICAgICAgICAgICAgbmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgKHR5cGVvZiBvcHRpb25zID09PSBcIm51bWJlclwiKSlcbiAgICAgICAgICAgIGNvbnN0UGFyYW1zSW5kZXggPSBvcHRpb25zO1xuICAgICAgICBpZiAob3B0aW9ucyAmJiAodHlwZW9mIG9wdGlvbnMgPT09IFwibnVtYmVyXCIpKVxuICAgICAgICAgICAgb3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKFwiaXNCRE9Nb2RlbFwiIGluIGN0b3IpIHtcbiAgICAgICAgICAgIGlmIChuYW1lICYmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIikgJiYgb3B0aW9ucyAmJiAodHlwZW9mIG9wdGlvbnMgPT09IFwib2JqZWN0XCIpKSB7XG4gICAgICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuT2JqZWN0VHlwZShuYW1lLCBvcHRpb25zKShjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUgJiYgKHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLk9iamVjdFR5cGUobmFtZSkoY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zICYmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJvYmplY3RcIikpIHtcbiAgICAgICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5PYmplY3RUeXBlKG9wdGlvbnMpKGN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLk9iamVjdFR5cGUoKShjdG9yKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zICYmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJvYmplY3RcIikpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2Q29sbGVjdGlvbk5hbWUgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGN0b3IsIFwiY29sbGVjdGlvbk5hbWVcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkRhdGFiYXNlTmFtZSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoY3RvciwgXCJkYXRhYmFzZU5hbWVcIik7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YShjdG9yLCBcImNvbGxlY3Rpb25OYW1lXCIsIG9wdGlvbnMuY29sbGVjdGlvbk5hbWUgfHwgcHJldkNvbGxlY3Rpb25OYW1lIHx8IFwiZGVmYXVsdFwiKTtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKGN0b3IsIFwiZGF0YWJhc2VOYW1lXCIsIG9wdGlvbnMuZGF0YWJhc2VOYW1lIHx8IHByZXZEYXRhYmFzZU5hbWUgfHwgXCJkZWZhdWx0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zICYmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmlzQWJzdHJhY3QpKVxuICAgICAgICAgICAgcmV0dXJuIGN0b3I7XG4gICAgICAgIGNvbnN0IEJhc2VDb25zdHJ1Y3RvciA9IEJhc2VDb25zdHJ1Y3Rvcl8xLmJhc2VDb25zdHJ1Y3RvckZhY3RvcnkoY3RvciwgY29uc3RQYXJhbXNJbmRleCk7XG4gICAgICAgIGlmIChlbnZpcm9ubWVudF8xLmlzQnJvd3NlcigpICYmIGN0b3IuaXNCYXNlQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodXRpbF8xLnBhc2NhbENhc2Uya2ViYWJDYXNlKGN0b3IubmFtZSksIEJhc2VDb25zdHJ1Y3Rvciwge1xuICAgICAgICAgICAgICAgIGV4dGVuZHM6IEJhc2VDb25zdHJ1Y3Rvci5leHRlbmRzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQmFzZUNvbnN0cnVjdG9yO1xuICAgIH07XG59XG5leHBvcnRzLmJhc2VDb25zdHJ1Y3RvciA9IGJhc2VDb25zdHJ1Y3RvcjtcbmV4cG9ydHMucXVlcnkgPSB0eXBlX2dyYXBocWxfMS5RdWVyeTtcbmV4cG9ydHMuYXJnID0gdHlwZV9ncmFwaHFsXzEuQXJnO1xuZXhwb3J0cy5hcmdzID0gdHlwZV9ncmFwaHFsXzEuQXJncztcbmV4cG9ydHMucmVzb2x2ZXIgPSB0eXBlX2dyYXBocWxfMS5SZXNvbHZlcjtcbmV4cG9ydHMucm9vdCA9IHR5cGVfZ3JhcGhxbF8xLlJvb3Q7XG5leHBvcnRzLm11dGF0aW9uID0gdHlwZV9ncmFwaHFsXzEuTXV0YXRpb247XG5leHBvcnRzLnN1YnNjcmlwdGlvbiA9IHR5cGVfZ3JhcGhxbF8xLlN1YnNjcmlwdGlvbjtcbmV4cG9ydHMucHViU3ViID0gdHlwZV9ncmFwaHFsXzEuUHViU3ViO1xuZXhwb3J0cy5pbnB1dFR5cGUgPSB0eXBlX2dyYXBocWxfMS5JbnB1dFR5cGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laR1ZqYjNKaGRHOXljeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2ZFhScGJITXZaR1ZqYjNKaGRHOXljeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMRFJDUVVFd1FqdEJRVU14UWl3d1EwRkJkVVE3UVVGRGRrUXNkMFJCUVcxRU8wRkJTVzVFTERoRVFVRjNSanRCUVVONFJpeHJSRUZCYTBVN1FVRkRiRVVzYjBSQlFTdEhPMEZCUlM5SExDdERRVmx6UWp0QlFXbENkRUlzVTBGQlowSXNUMEZCVHl4RFFVRkRMRk5CUVhsQ0xFVkJRVVU3U1VGREwwTXNUMEZCVHl4RFFVRkRMRTFCUVZjc1JVRkJSU3hIUVVGdlFpeEZRVUZGTEVWQlFVVTdVVUZEZWtNc1RVRkJUU3hUUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUTJwRExIRkRRVUY1UWl4RFFVRkRMRTFCUVUwc1JVRkJSU3hUUVVGVExFVkJRVVVzYVVKQlFXbENMRU5CUVVNc1EwRkJRenRSUVVOb1JTeHhRMEZCZVVJc1EwRkJReXhOUVVGTkxFVkJRVVVzVTBGQlV5eEZRVUZGTEZOQlFWTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRKUVVOd1JTeERRVUZETEVOQlFVTTdRVUZEVGl4RFFVRkRPMEZCVGtRc01FSkJUVU03UVVGVlJDeFRRVUZuUWl4UlFVRlJMRU5CUVVNc1UwRkJNRUlzUlVGQlJUdEpRVU5xUkN4UFFVRlBMRU5CUVVNc1RVRkJWeXhGUVVGRkxFZEJRVzlDTEVWQlFVVXNSVUZCUlR0UlFVTjZReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkRha01zY1VOQlFYbENMRU5CUVVNc1RVRkJUU3hGUVVGRkxGTkJRVk1zUlVGQlJTeHRRa0ZCYlVJc1EwRkJReXhEUVVGRE8xRkJRMnhGTEhGRFFVRjVRaXhEUVVGRExFMUJRVTBzUlVGQlJTeFRRVUZUTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRM0pGTEVOQlFVTXNRMEZCUXp0QlFVTk9MRU5CUVVNN1FVRk9SQ3cwUWtGTlF6dEJRV1ZFTEZOQlFXZENMRk5CUVZNc1EwRkJReXhSUVVFeVFpeEZRVUZGTEUxQlFYbENPMGxCUXpWRkxFOUJRVThzUTBGQlF5eE5RVUZYTEVWQlFVVXNSMEZCYjBJc1JVRkJSU3hGUVVGRk8xRkJRM3BETEUxQlFVMHNVMEZCVXl4SFFVRkhMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVU5xUXl4SlFVRkpMRkZCUVZFc1NVRkJTU3hEUVVGRExFTkJRVU1zVVVGQlVTeFpRVUZaTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUVHRaUVVGRkxFMUJRVTBzUjBGQlJ5eFJRVUZSTEVOQlFVTTdVVUZET1VVc1NVRkJTU3hEUVVGRExFMUJRVTA3V1VGQlJTeE5RVUZOTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUjNwQ0xFbEJRVWtzVVVGQlVTeFpRVUZaTEZGQlFWRXNTVUZCU1N4TlFVRk5PMWxCUVVVc2IwSkJRVXNzUTBGQlF5eFJRVUZSTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzJGQlF6VkZMRWxCUVVrc1VVRkJVU3haUVVGWkxGRkJRVkU3V1VGQlJTeHZRa0ZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0aFFVTXZSQ3hKUVVGSkxFMUJRVTA3V1VGQlJTeHZRa0ZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXpzN1dVRkRka01zYjBKQlFVc3NSVUZCUlN4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU14UWl4eFEwRkJlVUlzUTBGQlF5eE5RVUZOTEVWQlFVVXNVMEZCVXl4RlFVRkZMRzFDUVVGdFFpeERRVUZETEVOQlFVTTdVVUZEYkVVc2NVTkJRWGxDTEVOQlFVTXNUVUZCVFN4RlFVRkZMRk5CUVZNc1JVRkJSU3hYUVVGWExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEZEVVc1EwRkJReXhEUVVGRE8wRkJRMDRzUTBGQlF6dEJRV1JFTERoQ1FXTkRPMEZCVlVRc1UwRkJaMElzWlVGQlpTeERRVUZETEVsQlFYZENMRVZCUVVVc1QwRkJjVUlzUlVGQlJTeHRRa0ZCTWtJc1EwRkJRenRKUVVWNlJ5eFBRVUZQTEVOQlFVTXNTVUZCVXl4RlFVRkZMRVZCUVVVN1VVRkRha0lzVFVGQlRTeFRRVUZUTEVkQlFVY3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU01UXl4SlFVRkpMRFpDUVVGcFFpeERRVUZETEZOQlFWTXNRMEZCUXp0WlFVRkZMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVWRvUnl4SlFVRkpMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeExRVUZMTEZGQlFWRXNRMEZCUXp0WlFVRkZMR2RDUVVGblFpeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTm9SU3hKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNTVUZCU1N4TFFVRkxMRkZCUVZFc1EwRkJRenRaUVVGRkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEZGtRc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEU5QlFVOHNTVUZCU1N4TFFVRkxMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEpRVUZKTEV0QlFVc3NVVUZCVVN4RFFVRkRMRU5CUVVNN1dVRkJSU3hKUVVGSkxFZEJRVWNzVTBGQlV5eERRVUZETzFGQlEzcEdMRWxCUVVrc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eFBRVUZQTEV0QlFVc3NVVUZCVVN4RFFVRkRPMWxCUVVVc1owSkJRV2RDTEVkQlFVY3NUMEZCVHl4RFFVRkRPMUZCUTNwRkxFbEJRVWtzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4UFFVRlBMRXRCUVVzc1VVRkJVU3hEUVVGRE8xbEJRVVVzVDBGQlR5eEhRVUZITEZOQlFWTXNRMEZCUXp0UlFVVnNSU3hKUVVGSkxGbEJRVmtzU1VGQlNTeEpRVUZKTEVWQlFVVTdXVUZGZEVJc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVsQlFVa3NTMEZCU3l4UlFVRlJMRU5CUVVNc1NVRkJTU3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEU5QlFVOHNTMEZCU3l4UlFVRlJMRU5CUVVNc1JVRkJSVHRuUWtGRGFFWXNlVUpCUVZVc1EwRkJReXhKUVVGSkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1lVRkRia003YVVKQlFVMHNTVUZCU1N4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFbEJRVWtzUzBGQlN5eFJRVUZSTEVOQlFVTXNSVUZCUlR0blFrRkRNME1zZVVKQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dGhRVU14UWp0cFFrRkJUU3hKUVVGSkxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNUMEZCVHl4TFFVRkxMRkZCUVZFc1EwRkJReXhGUVVGRk8yZENRVU5xUkN4NVFrRkJWU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMkZCUXpkQ096dG5Ra0ZCVFN4NVFrRkJWU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZITVVJc1NVRkJTU3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEU5QlFVOHNTMEZCU3l4UlFVRlJMRU5CUVVNc1JVRkJSVHRuUWtGRE1VTXNUVUZCVFN4clFrRkJhMElzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3huUWtGQlowSXNRMEZCUXl4RFFVRkRPMmRDUVVNdlJDeE5RVUZOTEdkQ1FVRm5RaXhIUVVGSExITkNRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMR05CUVdNc1EwRkJReXhEUVVGRE8yZENRVU16UkN4NVFrRkJZeXhEUVVGRExFbEJRVWtzUlVGQlJTeG5Ra0ZCWjBJc1JVRkJSU3hQUVVGUExFTkJRVU1zWTBGQll5eEpRVUZKTEd0Q1FVRnJRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETzJkQ1FVTnNSeXg1UWtGQll5eERRVUZETEVsQlFVa3NSVUZCUlN4alFVRmpMRVZCUVVVc1QwRkJUeXhEUVVGRExGbEJRVmtzU1VGQlNTeG5Ra0ZCWjBJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF6dGhRVU12Ump0VFFVTktPMUZCUTBRc1NVRkJTU3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEU5QlFVOHNTMEZCU3l4UlFVRlJMRWxCUVVrc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF6dFpRVUZGTEU5QlFVOHNTVUZCU1N4RFFVRkRPMUZCUldoR0xFMUJRVTBzWlVGQlpTeEhRVUZITEhkRFFVRnpRaXhEUVVGRExFbEJRVWtzUlVGQlJTeG5Ra0ZCWjBJc1EwRkJReXhEUVVGRE8xRkJSWFpGTEVsQlFVa3NkVUpCUVZNc1JVRkJSU3hKUVVGSkxFbEJRVWtzUTBGQlF5eGxRVUZsTEVWQlFVVTdXVUZEY2tNc1kwRkJZeXhEUVVGRExFMUJRVTBzUTBGQlF5d3lRa0ZCYjBJc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNaVUZCWlN4RlFVRkZPMmRDUVVOd1JTeFBRVUZQTEVWQlFVVXNaVUZCWlN4RFFVRkRMRTlCUVU4N1lVRkRia01zUTBGQlF5eERRVUZETzFOQlEwNDdVVUZEUkN4UFFVRlBMR1ZCUVdVc1EwRkJRenRKUVVNelFpeERRVUZETEVOQlFVTTdRVUZEVGl4RFFVRkRPMEZCTVVORUxEQkRRVEJEUXp0QlFVVlZMRkZCUVVFc1MwRkJTeXhIUVVGSExHOUNRVUZMTEVOQlFVTTdRVUZEWkN4UlFVRkJMRWRCUVVjc1IwRkJSeXhyUWtGQlJ5eERRVUZETzBGQlExWXNVVUZCUVN4SlFVRkpMRWRCUVVjc2JVSkJRVWtzUTBGQlF6dEJRVU5hTEZGQlFVRXNVVUZCVVN4SFFVRkhMSFZDUVVGUkxFTkJRVU03UVVGRGNFSXNVVUZCUVN4SlFVRkpMRWRCUVVjc2JVSkJRVWtzUTBGQlF6dEJRVU5hTEZGQlFVRXNVVUZCVVN4SFFVRkhMSFZDUVVGUkxFTkJRVU03UVVGRGNFSXNVVUZCUVN4WlFVRlpMRWRCUVVjc01rSkJRVmtzUTBGQlF6dEJRVU0xUWl4UlFVRkJMRTFCUVUwc1IwRkJSeXh4UWtGQlRTeERRVUZETzBGQlEyaENMRkZCUVVFc1UwRkJVeXhIUVVGSExIZENRVUZUTEVOQlFVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgbnVuanVja3MgPSB0c2xpYl8xLl9faW1wb3J0U3RhcihyZXF1aXJlKFwibnVuanVja3NcIikpO1xuZnVuY3Rpb24gaXNOb2RlSlMoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc05vZGVKUyA9IGlzTm9kZUpTO1xuZnVuY3Rpb24gaXNCcm93c2VyKCkge1xuICAgIHJldHVybiAhaXNOb2RlSlMoKTtcbn1cbmV4cG9ydHMuaXNCcm93c2VyID0gaXNCcm93c2VyO1xuZXhwb3J0cy50ZW1wbGF0ZUVudmlyb25tZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBub0NhY2hlID0gZ2xvYmFsLnByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGNvbnN0IGVudiA9IG5ldyBudW5qdWNrcy5FbnZpcm9ubWVudCh7XG4gICAgICAgIGdldFNvdXJjZTogKHBhdGgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHNyYzogcmVxdWlyZShwYXRoKSwgcGF0aCwgbm9DYWNoZSB9O1xuICAgICAgICB9XG4gICAgfSwgeyBub0NhY2hlIH0pO1xuICAgIGVudi5hZGRGaWx0ZXIoJ2pzb24nLCAodmFsdWUsIHNwYWNlcykgPT4ge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBudW5qdWNrcy5ydW50aW1lLlNhZmVTdHJpbmcpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IG51bmp1Y2tzLnJ1bnRpbWUuU2FmZVN0cmluZyhKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgc3BhY2VzKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVudjtcbn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laVzUyYVhKdmJtMWxiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDNWMGFXeHpMMlZ1ZG1seWIyNXRaVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZCTERKRVFVRnhRenRCUVZGeVF5eFRRVUZuUWl4UlFVRlJPMGxCUTNCQ0xFbEJRVWtzVDBGQlR5eE5RVUZOTEV0QlFVc3NWMEZCVnl4SlFVRkpMRTlCUVU4c1QwRkJUeXhMUVVGTExGRkJRVkVzUlVGQlJUdFJRVU01UkN4UFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObU8wbEJRMFFzVDBGQlR5eExRVUZMTEVOQlFVTTdRVUZEYWtJc1EwRkJRenRCUVV4RUxEUkNRVXRETzBGQlVVUXNVMEZCWjBJc1UwRkJVenRKUVVOeVFpeFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1FVRkRka0lzUTBGQlF6dEJRVVpFTERoQ1FVVkRPMEZCUzFrc1VVRkJRU3h0UWtGQmJVSXNSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSVHRKUVVOeVF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEV0QlFVc3NZVUZCWVN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTTNSU3hOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRha01zVTBGQlV5eEZRVUZGTEVOQlFVTXNTVUZCV1N4RlFVRkZMRVZCUVVVN1dVRkRlRUlzVDBGQlR5eEZRVUZGTEVkQlFVY3NSVUZCUlN4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUTJwRUxFTkJRVU03UzBGRFNpeEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVWb1FpeEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVWQlFVVXNSVUZCUlR0UlFVTndReXhKUVVGSkxFdEJRVXNzV1VGQldTeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1JVRkJSVHRaUVVNNVF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xTkJRelZDTzFGQlEwUXNUMEZCVHl4SlFVRkpMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJoR0xFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEwZ3NUMEZCVHl4SFFVRkhMRU5CUVVNN1FVRkRaaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQmluZGluZ18xID0gcmVxdWlyZShcIn5iZG8vbGliL0JpbmRpbmdcIik7XG5jb25zdCBBdHRyaWJ1dGVfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9BdHRyaWJ1dGVcIik7XG5jb25zdCBQcm9wZXJ0eV8xID0gcmVxdWlyZShcIn5iZG8vbGliL1Byb3BlcnR5XCIpO1xuY29uc3QgV2F0Y2hlZF8xID0gcmVxdWlyZShcIn5iZG8vbGliL1dhdGNoZWRcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5mdW5jdGlvbiBiZWZvcmVQcm9wZXJ0eURlc2NyaXB0b3JzKHRhcmdldCwga2V5LCBtRGF0YU5hbWUpIHtcbiAgICBpZiAoIVJlZmxlY3QuaGFzTWV0YWRhdGEobURhdGFOYW1lLCB0YXJnZXQpKVxuICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRhcmdldCwgbURhdGFOYW1lLCBuZXcgQXJyYXkoKSk7XG4gICAgY29uc3QgbWFwID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0YXJnZXQsIG1EYXRhTmFtZSk7XG4gICAgbWFwLnB1c2goa2V5LnRvU3RyaW5nKCkpO1xufVxuZXhwb3J0cy5iZWZvcmVQcm9wZXJ0eURlc2NyaXB0b3JzID0gYmVmb3JlUHJvcGVydHlEZXNjcmlwdG9ycztcbmZ1bmN0aW9uIGdldHRlcihpbnN0YW5jZSwga2V5LCBucyA9IFwiXCIpIHtcbiAgICBsZXQgc3RyaW5nS2V5ID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgaWYgKG5zKVxuICAgICAgICBzdHJpbmdLZXkgPSBgJHtuc306JHtrZXl9YDtcbiAgICBpZiAoIW1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwibm9ybWFsRnVuY3Rpb25hbGl0eVwiKSkge1xuICAgICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGluc3RhbmNlLCBcImRlZmF1bHRTZXR0aW5nc1wiKSB8fCB7fTtcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGRlZmF1bHRTZXR0aW5ncywgc3RyaW5nS2V5KTtcbiAgICB9XG4gICAgY29uc3QgbURhdGEgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEoaW5zdGFuY2UsIHN0cmluZ0tleSk7XG4gICAgaWYgKG1EYXRhKVxuICAgICAgICByZXR1cm4gbURhdGEudmFsdWVPZigpO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5leHBvcnRzLmdldHRlciA9IGdldHRlcjtcbmZ1bmN0aW9uIHNldHRlcihpbnN0YW5jZSwga2V5LCBuZXdWYWwsIG5zID0gXCJcIikge1xuICAgIGxldCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICBpZiAobnMpXG4gICAgICAgIHN0cmluZ0tleSA9IGAke25zfToke2tleX1gO1xuICAgIGlmICghbnMgJiYgaW5zdGFuY2Vbc3RyaW5nS2V5XSA9PT0gbmV3VmFsKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKCFtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGluc3RhbmNlLCBcIm5vcm1hbEZ1bmN0aW9uYWxpdHlcIikpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShpbnN0YW5jZSwgXCJkZWZhdWx0U2V0dGluZ3NcIikgfHwge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGVmYXVsdFNldHRpbmdzLCB7IFtzdHJpbmdLZXldOiBuZXdWYWwgfSk7XG4gICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEoaW5zdGFuY2UsIFwiZGVmYXVsdFNldHRpbmdzXCIsIGRlZmF1bHRTZXR0aW5ncyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbURhdGEgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEoaW5zdGFuY2UsIHN0cmluZ0tleSk7XG4gICAgaWYgKG5ld1ZhbCBpbnN0YW5jZW9mIEJpbmRpbmdfMS5CaW5kaW5nKSB7XG4gICAgICAgIG5ld1ZhbC5pbnN0YWxsKGluc3RhbmNlLCBrZXkpO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIG1EYXRhLnNldFZhbHVlKG5ld1ZhbCk7XG59XG5leHBvcnRzLnNldHRlciA9IHNldHRlcjtcbmZ1bmN0aW9uIGNyZWF0ZURlY29yYXRvckRlc2NyaXB0b3IodGFyZ2V0LCBrZXksIHR5cGUsIHBhcmFtcykge1xuICAgIGNvbnN0IHByb3BEZXNjID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgIGNvbnN0IHN0cmluZ0tleSA9IGtleS50b1N0cmluZygpO1xuICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBrZXkpO1xuICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBkZWNvcmF0b3JHZXR0ZXIoKSB7XG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBnZXR0ZXIodGhhdCwgc3RyaW5nS2V5KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBkZWNvcmF0b3JTZXR0ZXIobmV3VmFsKSB7XG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMsIGtleSk7XG4gICAgICAgICAgICBsZXQgZmllbGQ7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJBdHRyaWJ1dGVcIikge1xuICAgICAgICAgICAgICAgIGZpZWxkID0gbmV3IEF0dHJpYnV0ZV8xLkF0dHJpYnV0ZSh0aGF0LCBzdHJpbmdLZXksIHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIlByb3BlcnR5XCIpIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA9IG5ldyBQcm9wZXJ0eV8xLlByb3BlcnR5KHRoYXQsIHN0cmluZ0tleSwgcGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBmaWVsZCA9IG5ldyBXYXRjaGVkXzEuV2F0Y2hlZCh0aGF0LCBzdHJpbmdLZXksIHBhcmFtcyk7XG4gICAgICAgICAgICBpZiAobURhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoKG1EYXRhIGluc3RhbmNlb2YgQXR0cmlidXRlXzEuQXR0cmlidXRlIHx8IG1EYXRhIGluc3RhbmNlb2YgUHJvcGVydHlfMS5Qcm9wZXJ0eSkgJiYgZmllbGQgaW5zdGFuY2VvZiBXYXRjaGVkXzEuV2F0Y2hlZCkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZC5zZXRTdWJPYmplY3QobURhdGEpO1xuICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEodGhpcywgc3RyaW5nS2V5LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChmaWVsZCBpbnN0YW5jZW9mIFByb3BlcnR5XzEuUHJvcGVydHkgfHwgZmllbGQgaW5zdGFuY2VvZiBBdHRyaWJ1dGVfMS5BdHRyaWJ1dGUpICYmIG1EYXRhIGluc3RhbmNlb2YgV2F0Y2hlZF8xLldhdGNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtRGF0YS5zdWJPYmplY3QpXG4gICAgICAgICAgICAgICAgICAgICAgICBtRGF0YS5zZXRTdWJPYmplY3QoZmllbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEodGhpcywgc3RyaW5nS2V5LCBmaWVsZCk7XG4gICAgICAgICAgICBpZiAoKCh0eXBlID09PSBcIkF0dHJpYnV0ZVwiIHx8IHR5cGUgPT09IFwiUHJvcGVydHlcIikgJiYgIShtRGF0YSBpbnN0YW5jZW9mIFdhdGNoZWRfMS5XYXRjaGVkKSkgfHwgdHlwZSA9PT0gXCJXYXRjaGVkXCIpIHtcbiAgICAgICAgICAgICAgICBzZXR0ZXIodGhhdCwgc3RyaW5nS2V5LCBuZXdWYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BEZXNjICYmIHByb3BEZXNjLnNldCAmJiBwcm9wRGVzYy5zZXQubmFtZSA9PT0gXCJkZWNvcmF0b3JTZXR0ZXJcIilcbiAgICAgICAgICAgICAgICBwcm9wRGVzYy5zZXQuY2FsbCh0aGlzLCBuZXdWYWwpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbn1cbmV4cG9ydHMuY3JlYXRlRGVjb3JhdG9yRGVzY3JpcHRvciA9IGNyZWF0ZURlY29yYXRvckRlc2NyaXB0b3I7XG5mdW5jdGlvbiBpc0Jhc2VDb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiAmJiB2YWx1ZS5uYW1lID09PSBcIkJhc2VDb25zdHJ1Y3RvclwiKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgdmFsdWUuY29uc3RydWN0b3IubmFtZSA9PT0gXCJCYXNlQ29uc3RydWN0b3JcIilcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc0Jhc2VDb25zdHJ1Y3RvciA9IGlzQmFzZUNvbnN0cnVjdG9yO1xuZnVuY3Rpb24gaXNSZWZlcmVuY2VTdHJpbmcodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgcmVmUmVnRXggPSAvX3JlZmVyZW5jZVxcOltBLVp8MC05fF98JF0qXFw6W0EtWnwwLTl8XFwtfF9dKi9naTtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZS5tYXRjaChyZWZSZWdFeCkpLnZhbHVlT2YoKTtcbn1cbmV4cG9ydHMuaXNSZWZlcmVuY2VTdHJpbmcgPSBpc1JlZmVyZW5jZVN0cmluZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpuSmhiV1YzYjNKckxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOTFkR2xzY3k5bWNtRnRaWGR2Y21zdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN3NFEwRkJNa003UVVGRE0wTXNhMFJCUVdsRk8wRkJRMnBGTEdkRVFVRTRSRHRCUVVNNVJDdzRRMEZCTWtRN1FVRkZNMFFzYTBSQlFTdEhPMEZCYlVJdlJ5eFRRVUZuUWl4NVFrRkJlVUlzUTBGQlF5eE5RVUZYTEVWQlFVVXNSMEZCVnl4RlFVRkZMRk5CUVhkQ08wbEJSWGhHTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExGTkJRVk1zUlVGQlJTeE5RVUZOTEVOQlFVTTdVVUZCUlN4NVFrRkJZeXhEUVVGRExFMUJRVTBzUlVGQlJTeFRRVUZUTEVWQlFVVXNTVUZCU1N4TFFVRkxMRVZCUVZVc1EwRkJReXhEUVVGRE8wbEJRM0JITEUxQlFVMHNSMEZCUnl4SFFVRkhMSE5DUVVGWExFTkJRVU1zVFVGQlRTeEZRVUZGTEZOQlFWTXNRMEZCWVN4RFFVRkRPMGxCUTNaRUxFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGRE4wSXNRMEZCUXp0QlFVeEVMRGhFUVV0RE8wRkJZVVFzVTBGQlowSXNUVUZCVFN4RFFVRnhSQ3hSUVVGWExFVkJRVVVzUjBGQlRTeEZRVUZGTEV0QlFXRXNSVUZCUlR0SlFVTXpSeXhKUVVGSkxGTkJRVk1zUjBGQlJ5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkRMMElzU1VGQlNTeEZRVUZGTzFGQlFVVXNVMEZCVXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hKUVVGSkxFZEJRVWNzUlVGQlJTeERRVUZETzBsQlEyNURMRWxCUVVrc1EwRkJReXh6UWtGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4eFFrRkJjVUlzUTBGQlF5eEZRVUZGTzFGQlF5OURMRTFCUVUwc1pVRkJaU3hIUVVGSExITkNRVUZYTEVOQlFVTXNVVUZCVVN4RlFVRkZMR2xDUVVGcFFpeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUTNaRkxFOUJRVThzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4bFFVRmxMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03UzBGRGJFUTdTVUZEUkN4TlFVRk5MRXRCUVVzc1IwRkJSeXc0UWtGQmJVSXNRMEZCUXl4UlFVRlJMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03U1VGRGRrUXNTVUZCU1N4TFFVRkxPMUZCUVVVc1QwRkJUeXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdTVUZEYkVNc1QwRkJUeXhUUVVGVExFTkJRVU03UVVGRGNrSXNRMEZCUXp0QlFWWkVMSGRDUVZWRE8wRkJaVVFzVTBGQlowSXNUVUZCVFN4RFFVVm5RaXhSUVVGWExFVkJRVVVzUjBGQlRTeEZRVUZGTEUxQlFYRkNMRVZCUVVVc1MwRkJZU3hGUVVGRk8wbEJSemRHTEVsQlFVa3NVMEZCVXl4SFFVRkhMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dEpRVU12UWl4SlFVRkpMRVZCUVVVN1VVRkJSU3hUUVVGVExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNN1NVRkhia01zU1VGQlNTeERRVUZETEVWQlFVVXNTVUZCU1N4UlFVRlJMRU5CUVVrc1UwRkJVeXhEUVVGRExFdEJRVXNzVFVGQlRUdFJRVUZGTEU5QlFVODdTVUZIY2tRc1NVRkJTU3hEUVVGRExITkNRVUZYTEVOQlFVTXNVVUZCVVN4RlFVRkZMSEZDUVVGeFFpeERRVUZETEVWQlFVVTdVVUZETDBNc1RVRkJUU3hsUVVGbExFZEJRVWNzYzBKQlFWY3NRMEZCUXl4UlFVRlJMRVZCUVVVc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRka1VzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4bFFVRmxMRVZCUVVVc1JVRkJSU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRlRVFzZVVKQlFXTXNRMEZCUXl4UlFVRlJMRVZCUVVVc2FVSkJRV2xDTEVWQlFVVXNaVUZCWlN4RFFVRkRMRU5CUVVNN1VVRkROMFFzVDBGQlR6dExRVU5XTzBsQlIwUXNUVUZCVFN4TFFVRkxMRWRCUVVjc09FSkJRVzFDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRE8wbEJSWFpFTEVsQlFVa3NUVUZCVFN4WlFVRlpMR2xDUVVGUExFVkJRVVU3VVVGRE0wSXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdTMEZEYWtNN08xRkJRVTBzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRCUVVOc1F5eERRVUZETzBGQmVrSkVMSGRDUVhsQ1F6dEJRVmRFTEZOQlFXZENMSGxDUVVGNVFpeERRVWRVTEUxQlFWTXNSVUZCUlN4SFFVRk5MRVZCUVVVc1NVRkJiVUlzUlVGQlJTeE5RVUZUTzBsQlJUZEZMRTFCUVUwc1VVRkJVU3hIUVVGSExFOUJRVThzUTBGQlF5eDNRa0ZCZDBJc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZETDBRc1RVRkJUU3hUUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUldwRExFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRM0JETEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUlVGQlJUdFJRVU5vUXl4SFFVRkhMRVZCUVVVc1UwRkJVeXhsUVVGbE8xbEJRM3BDTEUxQlFVMHNTVUZCU1N4SFFVRlJMRWxCUVVrc1EwRkJRenRaUVVOMlFpeFBRVUZQTEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03VVVGRGJrTXNRMEZCUXp0UlFVTkVMRWRCUVVjc1JVRkJSU3hUUVVGVExHVkJRV1VzUTBGQlF5eE5RVUZYTzFsQlEzSkRMRTFCUVUwc1NVRkJTU3hIUVVGUkxFbEJRVWtzUTBGQlF6dFpRVU4yUWl4TlFVRk5MRXRCUVVzc1IwRkJSeXc0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGSE4wTXNTVUZCU1N4TFFVRkxMRU5CUVVNN1dVRkRWaXhKUVVGSkxFbEJRVWtzUzBGQlN5eFhRVUZYTEVWQlFVVTdaMEpCUTNSQ0xFdEJRVXNzUjBGQlJ5eEpRVUZKTEhGQ1FVRlRMRU5CUVVNc1NVRkJTU3hGUVVGRkxGTkJRVk1zUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0aFFVTnNSRHRwUWtGQlRTeEpRVUZKTEVsQlFVa3NTMEZCU3l4VlFVRlZMRVZCUVVVN1owSkJRelZDTEV0QlFVc3NSMEZCUnl4SlFVRkpMRzFDUVVGUkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZOQlFWTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRoUVVOcVJEczdaMEpCUVUwc1MwRkJTeXhIUVVGSExFbEJRVWtzYVVKQlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVc1UwRkJVeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzFsQlIzQkVMRWxCUVVrc1MwRkJTeXhGUVVGRk8yZENRVU5RTEVsQlFVa3NRMEZCUXl4TFFVRkxMRmxCUVZrc2NVSkJRVk1zU1VGQlNTeExRVUZMTEZsQlFWa3NiVUpCUVZFc1EwRkJReXhKUVVGSkxFdEJRVXNzV1VGQldTeHBRa0ZCVHl4RlFVRkZPMjlDUVVOMlJpeExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8yOUNRVU14UWl4cFEwRkJjMElzUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVXl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8ybENRVU5zUkR0eFFrRkJUU3hKUVVGSkxFTkJRVU1zUzBGQlN5eFpRVUZaTEcxQ1FVRlJMRWxCUVVrc1MwRkJTeXhaUVVGWkxIRkNRVUZUTEVOQlFVTXNTVUZCU1N4TFFVRkxMRmxCUVZrc2FVSkJRVThzUlVGQlJUdHZRa0ZET1VZc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTzNkQ1FVRkZMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdhVUpCUTI1RU8yRkJRMG83TzJkQ1FVRk5MR2xEUVVGelFpeERRVUZETEVsQlFVa3NSVUZCUlN4VFFVRlRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRGRFUXNTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hMUVVGTExGZEJRVmNzU1VGQlNTeEpRVUZKTEV0QlFVc3NWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFdEJRVXNzV1VGQldTeHBRa0ZCVHl4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFdEJRVXNzVTBGQlV5eEZRVUZGTzJkQ1FVTjBSeXhOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZOQlFWTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRoUVVOdVF6dFpRVU5FTEVsQlFVa3NVVUZCVVN4SlFVRkpMRkZCUVZFc1EwRkJReXhIUVVGSExFbEJRVWtzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRXRCUVVzc2FVSkJRV2xDTzJkQ1FVRkZMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVNM1J5eERRVUZETzFGQlEwUXNWVUZCVlN4RlFVRkZMRWxCUVVrN1VVRkRhRUlzV1VGQldTeEZRVUZGTEVsQlFVazdTMEZEY2tJc1EwRkJReXhEUVVGRE8wRkJRMUFzUTBGQlF6dEJRVE5EUkN3NFJFRXlRME03UVVGVFJDeFRRVUZuUWl4cFFrRkJhVUlzUTBGQlF5eExRVUZoTzBsQlF6TkRMRWxCUVVrc1QwRkJUeXhMUVVGTExFdEJRVXNzVlVGQlZTeEpRVUZKTEV0QlFVc3NRMEZCUXl4SlFVRkpMRXRCUVVzc2FVSkJRV2xDTzFGQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkRha1lzU1VGQlNTeExRVUZMTEZsQlFWa3NUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeExRVUZMTEdsQ1FVRnBRanRSUVVGRkxFOUJRVThzU1VGQlNTeERRVUZETzBsQlEzcEdMRTlCUVU4c1MwRkJTeXhEUVVGRE8wRkJRMnBDTEVOQlFVTTdRVUZLUkN3NFEwRkpRenRCUVZORUxGTkJRV2RDTEdsQ1FVRnBRaXhEUVVGRExFdEJRVlU3U1VGRGVFTXNTVUZCU1N4UFFVRlBMRXRCUVVzc1MwRkJTeXhSUVVGUk8xRkJRVVVzVDBGQlR5eExRVUZMTEVOQlFVTTdTVUZETlVNc1RVRkJUU3hSUVVGUkxFZEJRVWNzSzBOQlFTdERMRU5CUVVNN1NVRkRha1VzVDBGQlR5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMEZCUTNCRUxFTkJRVU03UVVGS1JDdzRRMEZKUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZGVmaW5lTWV0YWRhdGEodGFyZ2V0LCBrZXksIHZhbCkge1xuICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoa2V5LCB2YWwsIHRhcmdldCk7XG59XG5leHBvcnRzLmRlZmluZU1ldGFkYXRhID0gZGVmaW5lTWV0YWRhdGE7XG5mdW5jdGlvbiBnZXRNZXRhZGF0YSh0YXJnZXQsIGtleSkge1xuICAgIHJldHVybiBSZWZsZWN0LmdldE1ldGFkYXRhKGtleSwgdGFyZ2V0KTtcbn1cbmV4cG9ydHMuZ2V0TWV0YWRhdGEgPSBnZXRNZXRhZGF0YTtcbmZ1bmN0aW9uIGRlZmluZVdpbGRjYXJkTWV0YWRhdGEodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShrZXksIHZhbHVlLCB0YXJnZXQpO1xufVxuZXhwb3J0cy5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhID0gZGVmaW5lV2lsZGNhcmRNZXRhZGF0YTtcbmZ1bmN0aW9uIGdldFdpbGRjYXJkTWV0YWRhdGEodGFyZ2V0LCBrZXkpIHtcbiAgICByZXR1cm4gUmVmbGVjdC5nZXRNZXRhZGF0YShrZXksIHRhcmdldCk7XG59XG5leHBvcnRzLmdldFdpbGRjYXJkTWV0YWRhdGEgPSBnZXRXaWxkY2FyZE1ldGFkYXRhO1xuZnVuY3Rpb24gZ2V0RGVzaWduVHlwZSh0YXJnZXQsIGtleSkge1xuICAgIHJldHVybiBSZWZsZWN0LmdldE1ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdGFyZ2V0LCBrZXkpO1xufVxuZXhwb3J0cy5nZXREZXNpZ25UeXBlID0gZ2V0RGVzaWduVHlwZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXVjBZV1JoZEdFdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wzVjBhV3h6TDIxbGRHRmtZWFJoTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJlVWxCTEZOQlFXZENMR05CUVdNc1EwRkJORU1zVFVGQlV5eEZRVUZGTEVkQlFVMHNSVUZCUlN4SFFVRnJRanRKUVVNelJ5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdRVUZETjBNc1EwRkJRenRCUVVaRUxIZERRVVZETzBGQlYwUXNVMEZCWjBJc1YwRkJWeXhEUVVFMFF5eE5RVUZUTEVWQlFVVXNSMEZCVFR0SlFVTndSaXhQUVVGUExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRelZETEVOQlFVTTdRVUZHUkN4clEwRkZRenRCUVZWRUxGTkJRV2RDTEhOQ1FVRnpRaXhEUVVGRExFMUJRV01zUlVGQlJTeEhRVUZqTEVWQlFVVXNTMEZCVlR0SlFVTTNSU3hQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NSVUZCUlN4TFFVRkxMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03UVVGREwwTXNRMEZCUXp0QlFVWkVMSGRFUVVWRE8wRkJWVVFzVTBGQlowSXNiVUpCUVcxQ0xFTkJRVU1zVFVGQll5eEZRVUZGTEVkQlFXTTdTVUZET1VRc1QwRkJUeXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEVkQlFVY3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRCUVVNMVF5eERRVUZETzBGQlJrUXNhMFJCUlVNN1FVRlZSQ3hUUVVGblFpeGhRVUZoTEVOQlFVTXNUVUZCWXl4RlFVRkZMRWRCUVZjN1NVRkRja1FzVDBGQlR5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZETTBRc1EwRkJRenRCUVVaRUxITkRRVVZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IGVudmlyb25tZW50XzEgPSByZXF1aXJlKFwifmJkby91dGlscy9lbnZpcm9ubWVudFwiKTtcbmNvbnN0IG9uX2NoYW5nZV8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm9uLWNoYW5nZVwiKSk7XG52YXIgbG9kYXNoXzEgPSByZXF1aXJlKFwibG9kYXNoXCIpO1xuZXhwb3J0cy5tZXJnZSA9IGxvZGFzaF8xLm1lcmdlO1xuZXhwb3J0cy5vbWl0ID0gbG9kYXNoXzEub21pdDtcbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGxvZGFzaF8xLmlzRnVuY3Rpb247XG5leHBvcnRzLmlzT2JqZWN0ID0gbG9kYXNoXzEuaXNPYmplY3Q7XG5leHBvcnRzLnBpY2tCeSA9IGxvZGFzaF8xLnBpY2tCeTtcbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBsb2Rhc2hfMS5pc1VuZGVmaW5lZDtcbmV4cG9ydHMuaXNFcXVhbCA9IGxvZGFzaF8xLmlzRXF1YWw7XG5leHBvcnRzLmlzU3RyaW5nID0gbG9kYXNoXzEuaXNTdHJpbmc7XG5leHBvcnRzLmlzTnVtYmVyID0gbG9kYXNoXzEuaXNOdW1iZXI7XG5leHBvcnRzLmlzQXJyYXkgPSBsb2Rhc2hfMS5pc0FycmF5O1xuZXhwb3J0cy5kaWZmZXJlbmNlID0gbG9kYXNoXzEuZGlmZmVyZW5jZTtcbmV4cG9ydHMuZGVib3VuY2UgPSBsb2Rhc2hfMS5kZWJvdW5jZTtcbmZ1bmN0aW9uIHVjRmlyc3Qoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cbmV4cG9ydHMudWNGaXJzdCA9IHVjRmlyc3Q7XG5mdW5jdGlvbiBjYW1lbENhc2Uya2ViYWJDYXNlKHN0cikge1xuICAgIHN0ciA9IHN0ci5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbYS16MC05XXwoPz1bQS1aXSkpKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xufVxuZXhwb3J0cy5jYW1lbENhc2Uya2ViYWJDYXNlID0gY2FtZWxDYXNlMmtlYmFiQ2FzZTtcbmZ1bmN0aW9uIHBhc2NhbENhc2Uya2ViYWJDYXNlKHN0cikge1xuICAgIHN0ciA9IHVjRmlyc3Qoc3RyKTtcbiAgICByZXR1cm4gY2FtZWxDYXNlMmtlYmFiQ2FzZShzdHIpO1xufVxuZXhwb3J0cy5wYXNjYWxDYXNlMmtlYmFiQ2FzZSA9IHBhc2NhbENhc2Uya2ViYWJDYXNlO1xuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudEZyb21BcnJheShhcnJheSwgZWxlbWVudCkge1xuICAgIGNvbnN0IGluZGV4ID0gYXJyYXkuaW5kZXhPZihlbGVtZW50KTtcbiAgICBpZiAoaW5kZXggPj0gMClcbiAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbn1cbmV4cG9ydHMucmVtb3ZlRWxlbWVudEZyb21BcnJheSA9IHJlbW92ZUVsZW1lbnRGcm9tQXJyYXk7XG5mdW5jdGlvbiBnZXRQcm90b3R5cGVOYW1lc1JlY3Vyc2l2ZShvYmplY3QsIHByb3RvdHlwZXMgPSBbXSkge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChwcm90b3R5cGUpIHtcbiAgICAgICAgcHJvdG90eXBlcy5wdXNoKHByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICAgICAgZ2V0UHJvdG90eXBlTmFtZXNSZWN1cnNpdmUocHJvdG90eXBlLCBwcm90b3R5cGVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3RvdHlwZXM7XG59XG5leHBvcnRzLmdldFByb3RvdHlwZU5hbWVzUmVjdXJzaXZlID0gZ2V0UHJvdG90eXBlTmFtZXNSZWN1cnNpdmU7XG5mdW5jdGlvbiBpbmNsdWRlc01lbWJlck9mTGlzdChzZWFyY2gsIGxpc3QsIGV4dGVuc2lvbiA9ICcnKSB7XG4gICAgZm9yIChjb25zdCBtZW1iZXIgb2YgbGlzdCkge1xuICAgICAgICBpZiAoc2VhcmNoLmluY2x1ZGVzKGAke21lbWJlcn0ke2V4dGVuc2lvbn1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pbmNsdWRlc01lbWJlck9mTGlzdCA9IGluY2x1ZGVzTWVtYmVyT2ZMaXN0O1xuZnVuY3Rpb24gY29uc3RydWN0VHlwZU9mSFRNTEF0dHJpYnV0ZShvYmplY3QsIGtleSkge1xuICAgIGlmICghZW52aXJvbm1lbnRfMS5pc0Jyb3dzZXIoKSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHR5cGUgPSBtZXRhZGF0YV8xLmdldERlc2lnblR5cGUob2JqZWN0LCBrZXkpO1xuICAgIGNvbnN0IGF0dHJWYWx1ZSA9IG9iamVjdC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICBsZXQgdmFsdWVUb1NldCA9IGF0dHJWYWx1ZTtcbiAgICBpZiAoYXR0clZhbHVlICYmIHR5cGUgJiYgdHlwZS5uYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKFtcIk51bWJlclwiLCBcIkJvb2xlYW5cIiwgXCJPYmplY3RcIiwgXCJBcnJheVwiXS5pbmNsdWRlcyh0eXBlLm5hbWUpKSB7XG4gICAgICAgICAgICB2YWx1ZVRvU2V0ID0gSlNPTi5wYXJzZShhdHRyVmFsdWUucmVwbGFjZSgvJy9nLCAnXCInKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUubmFtZSA9PT0gXCJCYXNlQ29uc3RydWN0b3JcIikge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0gSlNPTi5wYXJzZShhdHRyVmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gb2JqLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIGlmICghY2xhc3NOYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNsYXNzTmFtZSBpcyBtaXNzaW5nIGluIGNvbXBvbmVudCBhdHRyaWJ1dGUgdmFsdWVcIik7XG4gICAgICAgICAgICBkZWxldGUgb2JqLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIHZhbHVlVG9TZXQgPSBuZXcgKHR5cGUubmFtZSkob2JqKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodmFsdWVUb1NldCAmJiB0eXBlICYmIHZhbHVlVG9TZXQuY29uc3RydWN0b3IubmFtZSAhPT0gdHlwZS5uYW1lKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdHRyaWJ1dGUgdHlwZSBlcXVhbHMgbm90IGRlZmluZWQgdHlwZVwiKTtcbiAgICByZXR1cm4gdmFsdWVUb1NldDtcbn1cbmV4cG9ydHMuY29uc3RydWN0VHlwZU9mSFRNTEF0dHJpYnV0ZSA9IGNvbnN0cnVjdFR5cGVPZkhUTUxBdHRyaWJ1dGU7XG5mdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgIT09IE9iamVjdCh2YWx1ZSkpO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuZnVuY3Rpb24gaXNQcm94eSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG9uX2NoYW5nZV8xLmRlZmF1bHQudGFyZ2V0KHZhbHVlKSA9PT0gdmFsdWUpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydHMuaXNQcm94eSA9IGlzUHJveHk7XG5mdW5jdGlvbiBnZXRQcm94eVRhcmdldCh2YWx1ZSkge1xuICAgIGlmIChpc1Byb3h5KHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIG9uX2NoYW5nZV8xLmRlZmF1bHQudGFyZ2V0KHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5leHBvcnRzLmdldFByb3h5VGFyZ2V0ID0gZ2V0UHJveHlUYXJnZXQ7XG5mdW5jdGlvbiB0b1VSSVBhdGhQYXJ0KHZhbHVlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXC8rL2csIFwiL1wiKTtcbiAgICBpZiAoIXZhbHVlLnN0YXJ0c1dpdGgoXCIvXCIpKVxuICAgICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gO1xuICAgIGlmICh2YWx1ZS5lbmRzV2l0aChcIi9cIikgJiYgdmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIC0xKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZXhwb3J0cy50b1VSSVBhdGhQYXJ0ID0gdG9VUklQYXRoUGFydDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRYUnBiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2ZFhScGJITXZkWFJwYkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN4clJFRkJiMFE3UVVGRGNFUXNkMFJCUVcxRU8wRkJRMjVFTEd0RlFVRnBRenRCUVVWcVF5eHBRMEZoWjBJN1FVRmFXaXg1UWtGQlFTeExRVUZMTEVOQlFVRTdRVUZEVEN4M1FrRkJRU3hKUVVGSkxFTkJRVUU3UVVGRFNpdzRRa0ZCUVN4VlFVRlZMRU5CUVVFN1FVRkRWaXcwUWtGQlFTeFJRVUZSTEVOQlFVRTdRVUZEVWl3d1FrRkJRU3hOUVVGTkxFTkJRVUU3UVVGRFRpd3JRa0ZCUVN4WFFVRlhMRU5CUVVFN1FVRkRXQ3d5UWtGQlFTeFBRVUZQTEVOQlFVRTdRVUZEVUN3MFFrRkJRU3hSUVVGUkxFTkJRVUU3UVVGRFVpdzBRa0ZCUVN4UlFVRlJMRU5CUVVFN1FVRkRVaXd5UWtGQlFTeFBRVUZQTEVOQlFVRTdRVUZEVUN3NFFrRkJRU3hWUVVGVkxFTkJRVUU3UVVGRFZpdzBRa0ZCUVN4UlFVRlJMRU5CUVVFN1FVRlZXaXhUUVVGblFpeFBRVUZQTEVOQlFVTXNSMEZCVnp0SlFVTXZRaXhQUVVGUExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOMFJDeERRVUZETzBGQlJrUXNNRUpCUlVNN1FVRlRSQ3hUUVVGblFpeHRRa0ZCYlVJc1EwRkJReXhIUVVGWE8wbEJRek5ETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYWtRc1QwRkJUeXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETERoQ1FVRTRRaXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMEZCUXpsRkxFTkJRVU03UVVGSVJDeHJSRUZIUXp0QlFWTkVMRk5CUVdkQ0xHOUNRVUZ2UWl4RFFVRkRMRWRCUVZjN1NVRkROVU1zUjBGQlJ5eEhRVUZITEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOdVFpeFBRVUZQTEcxQ1FVRnRRaXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEzQkRMRU5CUVVNN1FVRklSQ3h2UkVGSFF6dEJRVk5FTEZOQlFXZENMSE5DUVVGelFpeERRVUZETEV0QlFWa3NSVUZCUlN4UFFVRlpPMGxCUXpkRUxFMUJRVTBzUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRGNrTXNTVUZCU1N4TFFVRkxMRWxCUVVrc1EwRkJRenRSUVVGRkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRek5ETEVOQlFVTTdRVUZJUkN4M1JFRkhRenRCUVZORUxGTkJRV2RDTERCQ1FVRXdRaXhEUVVGRExFMUJRVmNzUlVGQlJTeGhRVUYxUWl4RlFVRkZPMGxCUXpkRkxFMUJRVTBzVTBGQlV5eEhRVUZITEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGFFUXNTVUZCU1N4VFFVRlRMRVZCUVVVN1VVRkRXQ3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE5VTXNNRUpCUVRCQ0xFTkJRVU1zVTBGQlV5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRPMHRCUTNKRU8wbEJRMFFzVDBGQlR5eFZRVUZWTEVOQlFVTTdRVUZEZEVJc1EwRkJRenRCUVZCRUxHZEZRVTlETzBGQlYwUXNVMEZCWjBJc2IwSkJRVzlDTEVOQlFVTXNUVUZCZVVJc1JVRkJSU3hKUVVGakxFVkJRVVVzV1VGQmIwSXNSVUZCUlR0SlFVTnNSeXhMUVVGTExFMUJRVTBzVFVGQlRTeEpRVUZKTEVsQlFVa3NSVUZCUlR0UlFVTjJRaXhKUVVGSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4TlFVRk5MRWRCUVVjc1UwRkJVeXhGUVVGRkxFTkJRVU1zUlVGQlJUdFpRVU14UXl4UFFVRlBMRWxCUVVrc1EwRkJRenRUUVVObU8wdEJRMG83U1VGRFJDeFBRVUZQTEV0QlFVc3NRMEZCUXp0QlFVTnFRaXhEUVVGRE8wRkJVRVFzYjBSQlQwTTdRVUZYUkN4VFFVRm5RaXcwUWtGQk5FSXNRMEZCUXl4TlFVRnRRaXhGUVVGRkxFZEJRVmM3U1VGRGVrVXNTVUZCU1N4RFFVRkRMSFZDUVVGVExFVkJRVVU3VVVGQlJTeFBRVUZQTzBsQlEzcENMRTFCUVUwc1NVRkJTU3hIUVVGSExIZENRVUZoTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRM2hETEUxQlFVMHNVMEZCVXl4SFFVRkhMRTFCUVUwc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZKTTBNc1NVRkJTU3hWUVVGVkxFZEJRVkVzVTBGQlV5eERRVUZETzBsQlEyaERMRWxCUVVrc1UwRkJVeXhKUVVGSkxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4TFFVRkxMRk5CUVZNc1JVRkJSVHRSUVVNNVF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRk5CUVZNc1JVRkJSU3hSUVVGUkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU01UkN4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzcEVPMUZCUTBRc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeExRVUZMTEdsQ1FVRnBRaXhGUVVGRk8xbEJRMnBETEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdXVUZEYkVNc1RVRkJUU3hUUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXp0WlFVTm9ReXhKUVVGSkxFTkJRVU1zVTBGQlV6dG5Ra0ZCUlN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHMUVRVUZ0UkN4RFFVRkRMRU5CUVVNN1dVRkRja1lzVDBGQlR5eEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRPMWxCUTNKQ0xGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFOQlEzSkRPMHRCUTBvN1NVRkRSQ3hKUVVGSkxGVkJRVlVzU1VGQlNTeEpRVUZKTEVsQlFVa3NWVUZCVlN4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFdEJRVXNzU1VGQlNTeERRVUZETEVsQlFVazdVVUZCUlN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExIZERRVUYzUXl4RFFVRkRMRU5CUVVNN1NVRkRMMGdzVDBGQlR5eFZRVUZWTEVOQlFVTTdRVUZEZEVJc1EwRkJRenRCUVhSQ1JDeHZSVUZ6UWtNN1FVRlRSQ3hUUVVGblFpeFhRVUZYTEVOQlFVTXNTMEZCVlR0SlFVTnNReXhQUVVGUExFTkJRVU1zUzBGQlN5eExRVUZMTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM0pETEVOQlFVTTdRVUZHUkN4clEwRkZRenRCUVZORUxGTkJRV2RDTEU5QlFVOHNRMEZCUXl4TFFVRlZPMGxCUXpsQ0xFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1NVRkJTVHRSUVVGRkxFOUJRVThzUzBGQlN5eERRVUZETzBsQlEzaEVMRWxCUVVrc2JVSkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1MwRkJTenRSUVVGRkxFOUJRVThzUzBGQlN5eERRVUZETzBsQlEyNUVMRTlCUVU4c1NVRkJTU3hEUVVGRE8wRkJRMmhDTEVOQlFVTTdRVUZLUkN3d1FrRkpRenRCUVZWRUxGTkJRV2RDTEdOQlFXTXNRMEZCUXl4TFFVRlZPMGxCUTNKRExFbEJRVWtzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXp0UlFVRkZMRTlCUVU4c2JVSkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRiRVFzVDBGQlR5eExRVUZMTEVOQlFVTTdRVUZEYWtJc1EwRkJRenRCUVVoRUxIZERRVWRETzBGQlZVUXNVMEZCWjBJc1lVRkJZU3hEUVVGRExFdEJRV0U3U1VGRGRrTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUTI1RExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVGRkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEV0QlFVc3NSVUZCUlN4RFFVRkRPMGxCUTJoRUxFbEJRVWtzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlR0UlFVTjZReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dExRVU01UWp0SlFVTkVMRTlCUVU4c1MwRkJTeXhEUVVGRE8wRkJRMnBDTEVOQlFVTTdRVUZRUkN4elEwRlBReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG53aW5kb3cudmlydHVhbFJvdXRlcyA9IFtcIkNvbmZpZ1wiLCBcIkdhbWVMb2JieVwiLCBcIkhvbWVcIl07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkbWx5ZEhWaGJFVnVkSEo1VUc5cGJuUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOTJZWEl2ZEcxd0wzWnBjblIxWVd4RmJuUnllVkJ2YVc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCVFN4TlFVRlBMRU5CUVVNc1lVRkJZU3hIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZETEZkQlFWY3NSVUZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReUo5Il0sInNvdXJjZVJvb3QiOiIifQ==