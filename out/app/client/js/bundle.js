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
"use strict";
const BaseComponent_1 = __webpack_require__("./source/app/client/ts/lib/BaseComponent.ts");
const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");
const Test1_1 = __webpack_require__("./source/app/client/ts/models/Test1.ts");
let ViewLink = class ViewLink extends BaseComponent_1.BaseComponentFactory(HTMLAnchorElement) {
    constructor(_params) {
        super();
        this.model = new Test1_1.Test1({ id: "1", title: String(Date.now()), oha: "oha..." });
        this.test = this.model.bind("title");
        this.tester = ["haha"];
    }
    constructedCallback() {
        super.constructedCallback();
        this.addEventListener("click", this.onLinkClick.bind(this));
    }
    onTesterAdd(_added) {
    }
    onTesterChange(_changed) {
    }
    onTestChange(_changed) {
    }
    onLinkClick(event) {
        event.preventDefault();
        window.router.navigate(this.href, true);
    }
};
ViewLink.extends = 'a';
tslib_1.__decorate([
    decorators_1.property(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Test1_1.Test1 !== "undefined" && Test1_1.Test1) === "function" ? _a : Object)
], ViewLink.prototype, "model", void 0);
tslib_1.__decorate([
    decorators_1.watched(), decorators_1.attribute(),
    tslib_1.__metadata("design:type", String)
], ViewLink.prototype, "test", void 0);
tslib_1.__decorate([
    decorators_1.watched({
        onRemove: "onTesterChange",
        onInit: "onTesterChange"
    }), decorators_1.property(),
    tslib_1.__metadata("design:type", Array)
], ViewLink.prototype, "tester", void 0);
ViewLink = tslib_1.__decorate([
    decorators_1.baseConstructor(),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof ConstParams !== "undefined" && ConstParams) === "function" ? _b : Object])
], ViewLink);
exports.default = ViewLink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld0xpbmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1ZpZXdMaW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNkRBQWlFO0FBQ2pFLHNEQUFzRjtBQUN0RixnREFBNkM7QUFVN0MsSUFBcUIsUUFBUSxHQUE3QixNQUFxQixRQUFTLFNBQVEsb0NBQW9CLENBQUMsaUJBQWlCLENBQUM7SUFxQ3pFLFlBQVksT0FBK0I7UUFDdkMsS0FBSyxFQUFFLENBQUM7UUF0Qk8sVUFBSyxHQUFVLElBQUksYUFBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBUXBFLFNBQUksR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQVdqRCxXQUFNLEdBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUlsRCxDQUFDO0lBT00sbUJBQW1CO1FBQ3RCLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBU1MsV0FBVyxDQUFDLE1BQXNCO0lBRTVDLENBQUM7SUFTUyxjQUFjLENBQUMsUUFBd0I7SUFFakQsQ0FBQztJQVNTLFlBQVksQ0FBQyxRQUFzQjtJQUU3QyxDQUFDO0lBU08sV0FBVyxDQUFDLEtBQVk7UUFDNUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNKLENBQUE7QUF2RjBCLGdCQUFPLEdBQVcsR0FBRyxDQUFDO0FBUWpDO0lBQVgscUJBQVEsRUFBRTswREFBZSxhQUFLLG9CQUFMLGFBQUs7dUNBQW9FO0FBUTNFO0lBQXZCLG9CQUFPLEVBQUUsRUFBRSxzQkFBUyxFQUFFOztzQ0FBZ0Q7QUFXeEQ7SUFIZCxvQkFBTyxDQUFDO1FBQ0wsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixNQUFNLEVBQUUsZ0JBQWdCO0tBQzNCLENBQUMsRUFBRSxxQkFBUSxFQUFFOzt3Q0FBb0M7QUFuQ2pDLFFBQVE7SUFENUIsNEJBQWUsRUFBRTtpRUFzQ1EsV0FBVyxvQkFBWCxXQUFXO0dBckNoQixRQUFRLENBK0Y1QjtrQkEvRm9CLFFBQVEifQ==

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
const uuid_1 = __webpack_require__("./node_modules/uuid/index.js");
const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");
const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");
const util_1 = __webpack_require__("./source/app/client/ts/utils/util.ts");
const util_2 = __webpack_require__("./source/app/utils/util.ts");
function BaseComponentFactory(HTMLTypeElement) {
    var _a, _b, _c;
    class BaseComponent extends HTMLTypeElement {
        constructor(...args) {
            super(...args);
            this.id = uuid_1.v4();
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
        setAttribute(qualifiedName, value) {
            if (this.properties && this.properties.has(qualifiedName)) {
                throw new Error(`"${qualifiedName}" can't be set as attribute because it is a defined property`);
            }
            if (value) {
                super.setAttribute(qualifiedName, value);
                const valueToSet = util_2.constructTypeOfHTMLAttribute(this, qualifiedName);
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
        decorators_1.property(),
        tslib_1.__metadata("design:type", Object)
    ], BaseComponent.prototype, "templateString", void 0);
    tslib_1.__decorate([
        decorators_1.property(),
        tslib_1.__metadata("design:type", typeof (_b = typeof IndexStructure !== "undefined" && IndexStructure) === "function" ? _b : Object)
    ], BaseComponent.prototype, "templateParams", void 0);
    tslib_1.__decorate([
        decorators_1.property(),
        tslib_1.__metadata("design:type", typeof (_c = typeof Map !== "undefined" && Map) === "function" ? _c : Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], BaseComponent.prototype, "bindings", null);
    return BaseComponent;
}
exports.BaseComponentFactory = BaseComponentFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9CYXNlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRCQUEwQjtBQUMxQixtQ0FBNEM7QUFDNUMsdUNBQWtEO0FBQ2xELCtCQUFrQztBQUNsQyxzREFBNEQ7QUFDNUQsa0RBQXVFO0FBR3ZFLDZDQUFtSDtBQUNuSCxtREFBd0U7QUFVeEUsU0FBZ0Isb0JBQW9CLENBQXlDLGVBQXNCOztJQVEvRixNQUFlLGFBQWMsU0FBUSxlQUFlO1FBa0doRCxZQUFZLEdBQUcsSUFBVztZQUN0QixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQXREQyxPQUFFLEdBQVcsU0FBSSxFQUFFLENBQUM7WUFRWixvQkFBZSxHQUFZLElBQUksQ0FBQztZQVNoQyxjQUFTLEdBQVcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBVTlELG1CQUFjLEdBQXNCLDBCQUEwQixDQUFDO1lBV3hFLG1CQUFjLEdBQW1CLEVBQUUsQ0FBQztRQWlCMUQsQ0FBQztRQXhFRCxJQUFXLFVBQVU7WUFDakIsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUN4QixNQUFNLFVBQVUsR0FBRyxzQkFBVyxDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBcUMsQ0FBQztZQUM5RixJQUFJLFVBQVUsRUFBRTtnQkFDWixLQUFLLE1BQU0sSUFBSSxJQUFJLFVBQVUsRUFBRTtvQkFDM0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsOEJBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ3BEO2FBQ0o7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBd0RXLElBQWMsUUFBUTtZQUM5QixNQUFNLFFBQVEsR0FBRyxzQkFBVyxDQUFD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

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
    async save() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50TW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQ2xpZW50TW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtFO0FBQ2xFLGdEQUE2QztBQUM3Qyw2Q0FBbUg7QUFXbkgsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBWSxTQUFRLG1CQUFRO0lBRHpDOztRQW1CZ0Msa0JBQWEsR0FBWSxJQUFJLENBQUM7SUFpRDlELENBQUM7SUF0Q1Usb0JBQW9CLENBQUMsR0FBVyxFQUFFLE1BQWUsRUFBRSxPQUFnQjtRQUN0RSxPQUFPLDJCQUFvQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFXTSwwQkFBMEIsQ0FBQyxHQUFXLEVBQUUsTUFBVyxFQUFFLE1BQWU7UUFDdkUsT0FBTyxpQ0FBMEIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBVU0sMkJBQTJCLENBQUMsR0FBVyxFQUFFLE1BQWU7UUFDM0QsT0FBTyxrQ0FBMkIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFPTSxLQUFLLENBQUMsSUFBSTtJQUVqQixDQUFDO0NBRUosQ0FBQTtBQXpEMEIseUJBQWEsR0FBWSxJQUFJLENBQUM7QUFRekM7SUFBWCxxQkFBUSxFQUFFOztrREFBK0M7QUFsQmpELFdBQVc7SUFEdkIsNEJBQWUsRUFBRTtHQUNMLFdBQVcsQ0FtRXZCO0FBbkVZLGtDQUFXIn0=

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
"use strict";
const BDOTest1_1 = __webpack_require__("./source/app/models/BDOTest1.ts");
const Test_1 = __webpack_require__("./source/app/client/ts/models/Test.ts");
const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");
let Test1 = class Test1 extends BDOTest1_1.BDOTest1Factory(Test_1.Test) {
    constructor(params) {
        super(params);
    }
    wadde() {
        this.bindings.get("title");
    }
};
Test1 = tslib_1.__decorate([
    decorators_1.baseConstructor({ collectionName: "Test1" }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ConstParams !== "undefined" && ConstParams) === "function" ? _a : Object])
], Test1);
exports.Test1 = Test1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdDEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdDEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxtREFBdUQ7QUFDdkQsOENBQTJDO0FBQzNDLHNEQUF3RDtBQVV4RCxJQUFhLEtBQUssR0FBbEIsTUFBYSxLQUFNLFNBQVEsMEJBQWUsQ0FBQyxXQUFJLENBQUM7SUFFNUMsWUFBWSxNQUEyQjtRQUNuQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQU9NLEtBQUs7UUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0osQ0FBQTtBQWRZLEtBQUs7SUFEakIsNEJBQWUsQ0FBQyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsQ0FBQztpRUFHcEIsV0FBVyxvQkFBWCxXQUFXO0dBRnZCLEtBQUssQ0FjakI7QUFkWSxzQkFBSyJ9

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
class Attribute extends Property_1.Property {
    constructor(object, property, params) {
        super(object, property, params);
        this.inDOMInitialized = false;
    }
    setValue(value) {
        if (this.valueOf() === value)
            return;
        this.doSetValue(value);
        this.reflectToDOMAttribute(value);
    }
    valueOf() {
        let value = super.valueOf();
        if (this.unsavedChange && !this.storeTemporary && !this.doNotPersist && this.object.isBDOModel) {
            value = this.unsavedChange;
        }
        return value;
    }
    reflectToDOMAttribute(value) {
        if (!environment_1.isBrowser() || !(this.object instanceof HTMLElement))
            return;
        let valueToPass = value;
        if (value instanceof Modification_1.Modification)
            valueToPass = value.valueOf();
        const stringKey = this.property.toString();
        const attrValue = this.object.getAttribute(stringKey);
        let setAttribute = true;
        if (!this.inDOMInitialized && attrValue) {
            const valueToSet = util_1.constructTypeOfHTMLAttribute(this.object, this.property);
            this.object[stringKey] = valueToSet;
            this.inDOMInitialized = true;
            setAttribute = false;
        }
        if (setAttribute && attrValue !== JSON.stringify(valueToPass))
            this.object.setAttribute(stringKey, valueToPass);
    }
    doSetValue(value) {
        let valueToPass = value;
        if (value instanceof Modification_1.Modification)
            valueToPass = value.valueOf();
        super.doSetValue(value, false);
        if (!this.object.isBDOModel || this.storeTemporary || this.doNotPersist || (value instanceof Modification_1.Modification && value.type === "update")) {
            this.value = valueToPass;
        }
        else {
            if (valueToPass === undefined && valueToPass !== super.valueOf()) {
                this.unsavedChange = new Modification_1.Modification();
            }
            else
                this.unsavedChange = valueToPass;
        }
        if (value === super.valueOf())
            this.unsavedChange = undefined;
    }
}
exports.Attribute = Attribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9saWIvQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQThEO0FBRTlELHdEQUFtRDtBQUNuRCx3REFBcUQ7QUFDckQsMENBQStEO0FBc0UvRCxNQUFhLFNBQTJELFNBQVEsbUJBQVE7SUE0RHBGLFlBQVksTUFBUyxFQUFFLFFBQVcsRUFBRSxNQUF5QjtRQUN6RCxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUgxQixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7SUFJNUMsQ0FBQztJQVFNLFFBQVEsQ0FBQyxLQUFXO1FBQ3ZCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEtBQUs7WUFBRSxPQUFPO1FBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFLTSxPQUFPO1FBQ1YsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQzVGLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQVVTLHFCQUFxQixDQUFDLEtBQVU7UUFDdEMsSUFBSSxDQUFDLHVCQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sWUFBWSxXQUFXLENBQUM7WUFBRSxPQUFPO1FBQ2xFLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLEtBQUssWUFBWSwyQkFBWTtZQUFFLFdBQVcsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFakUsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxTQUFTLEVBQUU7WUFFckMsTUFBTSxVQUFVLEdBQUcsbUNBQTRCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFM0QsSUFBSSxDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxVQUFVLENBQUM7WUFDdEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUM3QixZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxZQUFZLElBQUksU0FBUyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3BILENBQUM7SUFZUyxVQUFVLENBQUMsS0FBVztRQUM1QixJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxLQUFLLFlBQVksMkJBQVk7WUFBRSxXQUFXLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FDdkUsS0FBSyxZQUFZLDJCQUFZLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsRUFBRTtZQUMzRCxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztTQUM1QjthQUFNO1lBQ0gsSUFBSSxXQUFXLEtBQUssU0FBUyxJQUFJLFdBQVcsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQzlELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSwyQkFBWSxFQUFxQixDQUFDO2FBQzlEOztnQkFBTSxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQztTQUMzQztRQUNELElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNsRSxDQUFDO0NBQ0o7QUE1SUQsOEJBNElDIn0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9saWIvQkRPTG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDREQUE0QjtBQUM1QiwrQkFBMkI7QUFDM0IsMENBQW1GO0FBV25GLE1BQXNCLFNBQVM7SUFrRDNCLFlBQVksT0FBZ0M7UUEzQ3JDLFlBQU8sR0FBWSxhQUFhLENBQUM7UUFRakMsd0JBQW1CLEdBQWEsS0FBSyxDQUFDO1FBUXRDLHFCQUFnQixHQUFhLEtBQUssQ0FBQztRQWVuQyxhQUFRLEdBQWUsT0FBTyxDQUFDO1FBVW5CLG1CQUFjLEdBQWEsaUNBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFL0IsQ0FBQztJQVcxQyxHQUFHLENBQUMsT0FBWSxFQUFFLFdBQXNCLEtBQUssRUFBRSxHQUFHLElBQVc7UUFDaEUsSUFBSSxRQUFRLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFBRSxPQUFPO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2xFLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEMsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO1lBQzNCLElBQUksTUFBTSxZQUFZLEtBQUssRUFBRTtnQkFDekIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDcEM7O2dCQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUIsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QixPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNkLE9BQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLFFBQVEsS0FBSyxPQUFPLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6RjtJQUNMLENBQUM7SUFRTSxLQUFLLENBQUMsT0FBWSxFQUFFLEdBQUcsSUFBUztRQUNuQyxNQUFNLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFvQixLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBUU0sSUFBSSxDQUFDLE9BQVksRUFBRSxHQUFHLElBQVM7UUFDbEMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBb0IsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQVFNLElBQUksQ0FBQyxPQUFZLEVBQUUsR0FBRyxJQUFTO1FBQ2xDLE1BQU0sS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQW9CLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFRTSxLQUFLLENBQUMsT0FBWSxFQUFFLEdBQUcsSUFBUztRQUNuQyxNQUFNLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFvQixLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBU1MsV0FBVztRQUNqQixPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDekcsQ0FBQztJQStCUyxTQUFTLENBQUMsUUFBbUI7UUFDbkMsTUFBTSxhQUFhLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEUsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQVMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFTUyxXQUFXO1FBQ2pCLE9BQU8sZ0JBQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFTUyxXQUFXO1FBQ2pCLE1BQU0sS0FBSyxHQUFZLElBQUksS0FBSyxFQUFFLENBQUMsS0FBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxJQUFJLFNBQVMsQ0FBQztRQUNkLEtBQUssTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDOUMsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsU0FBUztZQUNyQixJQUFJLENBQUMsMkJBQW9CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLEVBQUU7Z0JBQzlELFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUN2QyxNQUFNO2FBQ1Q7U0FDSjtRQUNELElBQUksU0FBUyxFQUFFO1lBQ1gsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDSCxTQUFTLEdBQUcsRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztDQUNKO0FBM01ELDhCQTJNQyJ9
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2xpYi9CRE9Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtCQUFrQztBQUNsQywrQ0FBa0M7QUFDbEMsOENBQXdEO0FBQ3hELHNEQUE2RTtBQUM3RSxrREFBa0Q7QUFXbEQsSUFBc0IsUUFBUSxnQkFBOUIsTUFBc0IsUUFBUTtJQUQ5QjtRQXNDZ0MsZUFBVSxHQUFZLElBQUksQ0FBQztRQVEzQixtQkFBYyxHQUFZLFVBQVEsQ0FBQyxjQUFjLENBQUM7UUFTN0MsT0FBRSxHQUFXLFdBQVcsU0FBSSxFQUFFLEVBQUUsQ0FBQztRQVVyQyxjQUFTLEdBQVcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBeURsRyxDQUFDO0lBL0NHLElBQWMsUUFBUTtRQUNsQixNQUFNLFFBQVEsR0FBRyxzQkFBVyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMvQyxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFXTSxJQUFJLENBQTJFLFFBQVcsRUFBRSxJQUFRO1FBQ3ZHLE9BQU8sSUFBSSxpQkFBTyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUE2RCxDQUFDO0lBQ3pHLENBQUM7SUFRTSxRQUFRO1FBQ1gsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBVU0sTUFBTTtRQUNULE1BQU0sSUFBSSxHQUFtQixFQUFFLENBQUM7UUFDaEMsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDcEIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUN6QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7YUFDdkI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FDSixDQUFBO0FBL0cwQixvQkFBVyxHQUFRLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBbUIvRCxtQkFBVSxHQUFZLElBQUksQ0FBQztBQVF0QztJQUFYLHFCQUFRLEVBQUU7OzRDQUE0QztBQVEzQztJQUFYLHFCQUFRLEVBQUU7O2dEQUFtRTtBQVNwRDtJQUF6QixzQkFBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxpQkFBRSxDQUFDOztvQ0FBeUM7QUFVckQ7SUFBWixzQkFBUyxFQUFFOzsyQ0FBa0Y7QUFoRTVFLFFBQVE7SUFEN0IsNEJBQWUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQztHQUNoQixRQUFRLENBeUg3QjtBQXpIcUIsNEJBQVEifQ==

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
const Modification_1 = __webpack_require__("./source/app/lib/Modification.ts");
const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");
class Binding {
    constructor(object, property, mode = "ReadWrite") {
        this.object = object;
        this.property = property;
        this.mode = mode;
        let descriptor = Reflect.getOwnPropertyDescriptor(this.object, this.property);
        const bindingDescriptor = metadata_1.getMetadata(this.object, "bindingDescriptor");
        let prototype = this.object;
        while (!descriptor) {
            prototype = Object.getPrototypeOf(prototype);
            if (!prototype)
                break;
            if (prototype.constructor.name === "BaseConstructor")
                prototype = Object.getPrototypeOf(prototype);
            descriptor = Reflect.getOwnPropertyDescriptor(prototype, this.property);
        }
        if (descriptor && bindingDescriptor && descriptor === bindingDescriptor) {
            const mData = metadata_1.getMetadata(this.object, "bindings");
            const bindings = mData ? mData.get(this.property) : undefined;
            if (bindings)
                this.descriptor = bindings[0].descriptor;
        }
        if (!this.descriptor)
            this.descriptor = descriptor;
    }
    valueOf() {
        if (this.mode === "WriteOnly")
            return new Modification_1.Modification(undefined);
        return this.object[this.property];
    }
    reflectToInitiators(newVal) {
        if (newVal instanceof Modification_1.Modification)
            newVal = newVal.valueOf();
        if (this.initiator[this.initiatorProperty] === newVal || this.mode === "WriteOnly")
            return;
        const mData = metadata_1.getMetadata(this.object, "bindings");
        if (mData) {
            const bindings = mData.get(this.property);
            if (bindings)
                for (const binding of bindings)
                    binding.initiator[binding.initiatorProperty] = newVal;
        }
    }
    reflectToObject(newVal) {
        if (newVal instanceof Modification_1.Modification)
            newVal = newVal.valueOf();
        if (this.object[this.property] === newVal || this.mode === "ReadOnly")
            return;
        this.object[this.property] = newVal;
    }
    install(initiator, property) {
        this.initiator = initiator;
        this.initiatorProperty = property.toString();
        if (!Reflect.hasMetadata("initiatorBinding", this.initiator)) {
            metadata_1.defineMetadata(this.initiator, "initiatorBinding", new Map());
        }
        const initiatorMData = metadata_1.getMetadata(this.initiator, "initiatorBinding") || new Map();
        const initiatorBinding = initiatorMData.get(this.initiatorProperty);
        if (initiatorBinding)
            initiatorBinding.remove();
        this.bind();
        initiatorMData.set(this.initiatorProperty, this);
    }
    remove() {
        const objectValue = this.object[this.property];
        const initiatorValue = this.initiator[this.initiatorProperty];
        const objectMData = metadata_1.getMetadata(this.object, "bindings");
        const objectBindings = objectMData ? objectMData.get(this.property) : undefined;
        const initiatorMData = metadata_1.getMetadata(this.initiator, "initiatorBinding");
        const initiatorBinding = initiatorMData ? initiatorMData.get(this.initiatorProperty) : undefined;
        if (objectBindings) {
            util_1.removeElementFromArray(objectBindings, this);
            if (!objectBindings.length) {
                if (objectMData)
                    objectMData.delete(this.property);
                this.restoreDescriptor(this.object, this.property, objectValue, this.descriptor);
            }
        }
        if (initiatorBinding) {
            if (initiatorMData)
                initiatorMData.delete(this.initiatorProperty);
            this.restoreDescriptor(this.initiator, this.initiatorProperty, initiatorValue, this.initiatorDescriptor);
        }
    }
    bind() {
        if (!Reflect.hasMetadata("bindings", this.object))
            metadata_1.defineMetadata(this.object, "bindings", new Map());
        const mData = metadata_1.getMetadata(this.object, "bindings");
        const initialValue = this.object[this.property];
        if (mData) {
            if (!mData.has(this.property)) {
                mData.set(this.property, []);
                const that = this;
                Reflect.deleteProperty(this.object, this.property);
                Reflect.defineProperty(this.object, this.property, {
                    get: function modelGet() {
                        if (that.descriptor && that.descriptor.get) {
                            return that.descriptor.get.call(that.object);
                        }
                        else
                            return metadata_1.getWildcardMetadata(that.object, that.property).valueOf() || initialValue;
                    },
                    set: function modelSet(newVal) {
                        if (newVal === that.object[that.property])
                            return;
                        if (that.descriptor && that.descriptor.set)
                            that.descriptor.set.call(that.object, newVal);
                        that.reflectToInitiators(newVal);
                    },
                    configurable: true,
                    enumerable: true
                });
                const bindingDescriptor = Reflect.getOwnPropertyDescriptor(this.object, this.property);
                metadata_1.defineMetadata(this.object, "bindingDescriptor", bindingDescriptor);
            }
            const definitelyDefinedBindings = mData.get(this.property);
            if (definitelyDefinedBindings) {
                let alreadyBound = false;
                for (const [index, binding] of definitelyDefinedBindings.entries()) {
                    if (binding.initiator === this.initiator && binding.initiatorProperty === this.initiatorProperty) {
                        definitelyDefinedBindings[index] = this;
                        alreadyBound = true;
                        break;
                    }
                }
                if (!alreadyBound)
                    definitelyDefinedBindings.push(this);
            }
        }
    }
    restoreDescriptor(object, property, value, descriptor) {
        Reflect.deleteProperty(object, property);
        if (descriptor) {
            Reflect.defineProperty(this.initiator, this.initiatorProperty, descriptor);
        }
        object[property.toString()] = value;
    }
}
exports.Binding = Binding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmluZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvbGliL0JpbmRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBeUQ7QUFDekQsd0RBQXFEO0FBQ3JELGtEQUF1RjtBQXdCdkYsTUFBYSxPQUFPO0lBMkRoQixZQUFZLE1BQVMsRUFBRSxRQUFXLEVBQUUsT0FBb0IsV0FBVztRQUMvRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUtqQixJQUFJLFVBQVUsR0FBbUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlHLE1BQU0saUJBQWlCLEdBQUcsc0JBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFFeEUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QixPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ2hCLFNBQVMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxTQUFTO2dCQUFFLE1BQU07WUFDdEIsSUFBSSxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxpQkFBaUI7Z0JBQUUsU0FBUyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkcsVUFBVSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzNFO1FBQ0QsSUFBSSxVQUFVLElBQUksaUJBQWlCLElBQUksVUFBVSxLQUFLLGlCQUFpQixFQUFFO1lBQ3JFLE1BQU0sS0FBSyxHQUFHLHNCQUFXLENBQUMsSUFB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

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
const Modification_1 = __webpack_require__("./source/app/lib/Modification.ts");
const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");
const environment_1 = __webpack_require__("./source/app/utils/environment.ts");
class Property {
    constructor(object, property, params) {
        this.object = object;
        this.property = property;
        Object.assign(this, params);
    }
    setValue(value) {
        this.doSetValue(value, true);
    }
    valueOf() {
        const stringKey = this.property.toString();
        let value = this.value;
        if (this.saveInLocalStorage && "getNamespacedStorage" in this.object) {
            value = this.object.getNamespacedStorage(stringKey);
        }
        if (value && this.storeTemporary) {
            if (this.expires && this.expires < Date.now()) {
                const defaultSettings = metadata_1.getMetadata(this.object, "defaultSettings");
                value = defaultSettings && !this.nullable ? defaultSettings[stringKey] : undefined;
            }
            else
                value = this.value;
        }
        return value;
    }
    doSetValue(value, modifyValue) {
        if (this.valueOf() === value)
            return;
        let valueToPass = value;
        if (value instanceof Modification_1.Modification)
            valueToPass = value.valueOf();
        if (modifyValue)
            this.value = valueToPass;
        this.addExpiration(valueToPass);
        if (this.shouldUpdateNsStorage() && "setUpdateNamespacedStorage" in this.object) {
            this.object.setUpdateNamespacedStorage(this.property.toString(), valueToPass);
        }
    }
    addExpiration(value) {
        if (value === undefined || !this.storeTemporary)
            return;
        const stringKey = this.property.toString();
        this.expires = Date.now() + this.storeTemporary;
        if (this.expirationTimeout)
            clearTimeout(this.expirationTimeout);
        this.expirationTimeout = setTimeout(() => {
            const defaultSettings = metadata_1.getMetadata(this.object, "defaultSettings");
            const delValue = defaultSettings && !this.nullable ? defaultSettings[stringKey] : undefined;
            this.object[stringKey] = new Modification_1.Modification(delValue);
        }, this.storeTemporary);
    }
    shouldUpdateNsStorage() {
        if (!this.saveInLocalStorage || !environment_1.isBrowser())
            return false;
        const stringKey = this.property.toString();
        const keyShouldBeUpdated = metadata_1.getMetadata(this.object, "keyShouldBeUpdated") || {};
        if (keyShouldBeUpdated[stringKey])
            return true;
        if ("getNamespacedStorage" in this.object &&
            this.object.getNamespacedStorage(stringKey) === undefined) {
            metadata_1.defineMetadata(this.object, "keyShouldBeUpdated", Object.assign(keyShouldBeUpdated, { [stringKey]: true }));
            return true;
        }
        return Boolean(metadata_1.getMetadata(this.object, "constructionComplete"));
    }
}
exports.Property = Property;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2xpYi9Qcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHdEQUFxRDtBQUNyRCxrREFBa0U7QUFDbEUsd0RBQW1EO0FBZ0RuRCxNQUFhLFFBQVE7SUFxRWpCLFlBQVksTUFBUyxFQUFFLFFBQVcsRUFBRSxNQUF3QjtRQUN4RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBU00sUUFBUSxDQUFDLEtBQVc7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQVVNLE9BQU87UUFDVixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTNDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFdkIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLElBQUksc0JBQXNCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsRSxLQUFLLEdBQW9CLElBQUksQ0FBQyxNQUFPLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDekU7UUFFRCxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDM0MsTUFBTSxlQUFlLEdBQUcsc0JBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDLENBQUM7Z0JBQ3BFLEtBQUssR0FBRyxlQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsUUFB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

/***/ }),

/***/ "./source/app/lib/Watched.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
const Modification_1 = __webpack_require__("./source/app/lib/Modification.ts");
const util_1 = __webpack_require__("./source/app/utils/util.ts");
const on_change_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/on-change/index.js"));
const lodash_1 = __webpack_require__("./node_modules/lodash/lodash.js");
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
        let oldVal = this.valueOf();
        if (oldVal === value)
            return;
        let valueToPass = value;
        if (value instanceof Modification_1.Modification)
            valueToPass = value.valueOf();
        oldVal = clone_deep_1.default(oldVal);
        valueToPass = this.getArrayObjectProxy(valueToPass);
        if (this.subObject) {
            this.subObject.setValue(value);
        }
        else
            this.value = valueToPass;
        if (this.onChange in this.object && this.isInitialized)
            this.object[this.onChange](oldVal);
        if (this.onInit in this.object && !this.isInitialized)
            this.object[this.onInit](valueToPass);
        this.isInitialized = true;
    }
    valueOf() {
        if (this.subObject)
            return this.subObject.valueOf();
        return this.value;
    }
    setSubObject(subObject) {
        let value = on_change_1.default.unsubscribe(this.valueOf());
        value = this.getArrayObjectProxy(value);
        this.subObject = subObject;
        this.subObject.setValue(value);
    }
    getArrayObjectProxy(value) {
        if (value instanceof Array || lodash_1.isObject(value)) {
            return on_change_1.default(value, (path, changedValue, previousValue) => {
                const newKeys = Object.keys(changedValue);
                const oldKeys = Object.keys(previousValue);
                const newLen = newKeys.length;
                const oldLen = oldKeys.length;
                this.caseDetectExec({
                    len1: newLen,
                    len2: oldLen,
                    func: this.onAdd,
                    keys1: newKeys,
                    keys2: oldKeys,
                    changedValue,
                    path
                });
                this.caseDetectExec({
                    len1: oldLen,
                    len2: newLen,
                    func: this.onRemove,
                    keys1: oldKeys,
                    keys2: newKeys,
                    changedValue,
                    path
                });
                if (newLen === oldLen && this.onChange in this && this.isInitialized) {
                    this.object[this.onChange](changedValue, path);
                }
            }, { isShallow: this.isShallow });
        }
        return value;
    }
    caseDetectExec(cdParams) {
        if (cdParams.len1 > cdParams.len2 && cdParams.func in this.object) {
            for (const modified of cdParams.keys1) {
                if (!cdParams.keys2.includes(modified)) {
                    this.object[cdParams.func]((cdParams.changedValue)[modified], cdParams.path);
                    break;
                }
            }
        }
    }
}
exports.Watched = Watched;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2F0Y2hlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvbGliL1dhdGNoZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esd0RBQXFEO0FBQ3JELDBDQUEwQztBQUMxQyxrRUFBaUM7QUFDakMsbUNBQWtDO0FBQ2xDLG9FQUFtQztBQStIbkMsTUFBYSxPQUFPO0lBMEZoQixZQUFZLE1BQVMsRUFBRSxRQUFXLEVBQUUsTUFBdUI7UUFyQnBELGNBQVMsR0FBWSxLQUFLLENBQUM7UUFtQnhCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBR3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRXpCLE1BQU0sZUFBZSxHQUFHLGNBQU8sQ0FBQyxRQUFrQixDQUFDLENBQUM7UUFFcEQsTUFBTSxVQUFVLEdBQUcsS0FBSyxlQUFlLE1BQU0sQ0FBQztRQUM5QyxNQUFNLFlBQVksR0FBRyxLQUFLLGVBQWUsUUFBUSxDQUFDO1FBQ2xELE1BQU0sU0FBUyxHQUFHLEtBQUssZUFBZSxLQUFLLENBQUM7UUFDNUMsTUFBTSxZQUFZLEdBQUcsS0FBSyxlQUFlLFFBQVEsQ0FBQztRQUVsRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUNoRSxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUN4RSxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxD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

/***/ }),

/***/ "./source/app/models/BDOTest.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");
function BDOTestFactory(ctor) {
    var _a;
    let BDOTest = class BDOTest extends ctor {
        constructor() {
            super(...arguments);
            this.title = 'test';
            this.testObj = {};
        }
    };
    tslib_1.__decorate([
        decorators_1.attribute({ storeTemporary: 5000 }),
        tslib_1.__metadata("design:type", String)
    ], BDOTest.prototype, "title", void 0);
    tslib_1.__decorate([
        decorators_1.attribute({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], BDOTest.prototype, "description", void 0);
    tslib_1.__decorate([
        decorators_1.property({ nullable: true }),
        tslib_1.__metadata("design:type", typeof (_a = typeof Object !== "undefined" && Object) === "function" ? _a : Object)
    ], BDOTest.prototype, "testObj", void 0);
    BDOTest = tslib_1.__decorate([
        decorators_1.baseConstructor({ isAbstract: true, collectionName: "BDOTest" })
    ], BDOTest);
    return BDOTest;
}
exports.BDOTestFactory = BDOTestFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvbW9kZWxzL0JET1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQTZFO0FBVTdFLFNBQWdCLGNBQWMsQ0FBc0MsSUFBVzs7SUFTM0UsSUFBZSxPQUFPLEdBQXRCLE1BQWUsT0FBUSxTQUFRLElBQUk7UUFEbkM7O1lBU2dELFVBQUssR0FBVyxNQUFNLENBQUM7WUFnQjlCLFlBQU8sR0FBWSxFQUFFLENBQUM7UUFFL0QsQ0FBQztLQUFBLENBQUE7SUFsQndDO1FBQXBDLHNCQUFTLENBQUMsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUM7OzBDQUErQjtJQVFwQztRQUE5QixzQkFBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztnREFBNkI7SUFRN0I7UUFBN0IscUJBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs4REFBa0IsTUFBTSxvQkFBTixNQUFNOzRDQUFNO0lBeEJoRCxPQUFPO1FBRHJCLDRCQUFlLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsQ0FBQztPQUNsRCxPQUFPLENBMEJyQjtJQUNELE9BQU8sT0FBTyxDQUFDO0FBRW5CLENBQUM7QUF0Q0Qsd0NBc0NDIn0=

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
            this.oha = 'test';
        }
        doSomething() {
            return "lol";
        }
        onOhaInit(_value) {
        }
    };
    tslib_1.__decorate([
        decorators_1.property({ saveInLocalStorage: true }),
        tslib_1.__metadata("design:type", String)
    ], BDOTest1.prototype, "oha", void 0);
    BDOTest1 = tslib_1.__decorate([
        decorators_1.baseConstructor({ isAbstract: true, collectionName: "BDOTest1" })
    ], BDOTest1);
    return BDOTest1;
}
exports.BDOTest1Factory = BDOTest1Factory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPVGVzdDEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL21vZGVscy9CRE9UZXN0MS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxzREFBa0U7QUFTbEUsU0FBZ0IsZUFBZSxDQUFrRCxJQUFXO0lBVXhGLElBQWUsUUFBUSxHQUF2QixNQUFlLFFBQVMsU0FBUSxJQUFJO1FBRHBDOztZQVNtRCxRQUFHLEdBQVcsTUFBTSxDQUFDO1FBc0J4RSxDQUFDO1FBZFUsV0FBVztZQUNkLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFTUyxTQUFTLENBQUMsTUFBYztRQUVsQyxDQUFDO0tBQ0osQ0FBQTtJQXRCMkM7UUFBdkMscUJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDOzt5Q0FBNkI7SUFSekQsUUFBUTtRQUR0Qiw0QkFBZSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLENBQUM7T0FDbkQsUUFBUSxDQThCdEI7SUFDRCxPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDO0FBMUNELDBDQTBDQyJ9

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/reflect-metadata/Reflect.js");
const Binding_1 = __webpack_require__("./source/app/lib/Binding.ts");
const util_1 = __webpack_require__("./source/app/utils/util.ts");
const environment_1 = __webpack_require__("./source/app/utils/environment.ts");
const Property_1 = __webpack_require__("./source/app/lib/Property.ts");
const Attribute_1 = __webpack_require__("./source/app/lib/Attribute.ts");
const Watched_1 = __webpack_require__("./source/app/lib/Watched.ts");
const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");
const type_graphql_1 = __webpack_require__("./node_modules/type-graphql/dist/browser-shim.js");
function watched(params = {}) {
    return (target, key) => {
        const propDesc = Reflect.getOwnPropertyDescriptor(target, key);
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return getter(this, key, propDesc);
            },
            set: function set(newVal) {
                const stringKey = key.toString();
                const mData = metadata_1.getWildcardMetadata(this, stringKey);
                const prop = new Watched_1.Watched(this, stringKey, params);
                if (mData instanceof Attribute_1.Attribute || mData instanceof Property_1.Property) {
                    prop.setSubObject(mData);
                    metadata_1.defineWildcardMetadata(this, stringKey, prop);
                }
                else if (!mData)
                    metadata_1.defineWildcardMetadata(this, stringKey, prop);
                setter(this, key, newVal, propDesc);
            },
            enumerable: true,
            configurable: true
        });
    };
}
exports.watched = watched;
function property(params = {}) {
    return (target, key) => {
        const propDesc = beforePropertyDescriptors(target, key.toString(), "definedProperties");
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return getter(this, key, propDesc);
            },
            set: function set(newVal) {
                const stringKey = key.toString();
                const mData = metadata_1.getWildcardMetadata(this, stringKey);
                const prop = new Property_1.Property(this, stringKey, params);
                if (!mData) {
                    metadata_1.defineWildcardMetadata(this, stringKey, prop);
                }
                else if (mData instanceof Watched_1.Watched && !mData.subObject)
                    mData.setSubObject(prop);
                if (!(mData instanceof Watched_1.Watched)) {
                    setter(this, key, newVal, propDesc);
                }
                else if (propDesc && propDesc.set)
                    propDesc.set.call(this, newVal);
            },
            enumerable: true,
            configurable: true
        });
    };
}
exports.property = property;
function attribute(typeFunc, params) {
    return (target, key) => {
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
        const propDesc = beforePropertyDescriptors(target, key.toString(), "definedAttributes");
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return getter(this, key, propDesc);
            },
            set: function set(newVal) {
                const stringKey = key.toString();
                const mData = metadata_1.getWildcardMetadata(this, stringKey);
                const attr = new Attribute_1.Attribute(this, stringKey, params);
                if (!mData) {
                    metadata_1.defineWildcardMetadata(this, stringKey, attr);
                }
                else if (mData instanceof Watched_1.Watched && !mData.subObject)
                    mData.setSubObject(attr);
                if (!(mData instanceof Watched_1.Watched)) {
                    setter(this, key, newVal, propDesc);
                }
                else if (propDesc && propDesc.set)
                    propDesc.set.call(this, newVal);
            },
            enumerable: true,
            configurable: true
        });
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
                if ("getNamespacedStorage" in this) {
                    const cachedSettings = this.getNamespacedStorage("*", "id", constParams.id);
                    defaultSettings = Object.assign(defaultSettings, cachedSettings);
                }
                Object.assign(this, defaultSettings);
                metadata_1.defineMetadata(this, "constructionComplete", true);
                if ("constructedCallback" in this)
                    this.constructedCallback(...params);
            }
        }
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
function beforePropertyDescriptors(target, key, mDataName) {
    const propDesc = Reflect.getOwnPropertyDescriptor(target, key);
    if (!Reflect.hasMetadata(mDataName, target))
        metadata_1.defineMetadata(target, mDataName, new Array());
    const map = metadata_1.getMetadata(target, mDataName);
    map.push(key.toString());
    return propDesc;
}
function getter(instance, key, propDesc) {
    if (!metadata_1.getMetadata(instance, "normalFunctionality")) {
        const defaultSettings = metadata_1.getMetadata(instance, "defaultSettings") || {};
        return defaultSettings[key.toString()];
    }
    const stringKey = key.toString();
    if (propDesc && propDesc.get) {
        return propDesc.get.call(instance);
    }
    else {
        const mData = metadata_1.getWildcardMetadata(instance, stringKey);
        if (mData)
            return mData.valueOf();
        return undefined;
    }
}
function setter(instance, key, newVal, propDesc) {
    if (!metadata_1.getMetadata(instance, "normalFunctionality")) {
        const defaultSettings = metadata_1.getMetadata(instance, "defaultSettings") || {};
        Object.assign(defaultSettings, { [key]: newVal });
        metadata_1.defineMetadata(instance, "defaultSettings", defaultSettings);
        return;
    }
    const stringKey = key.toString();
    if (instance[stringKey] === newVal)
        return;
    const mData = metadata_1.getWildcardMetadata(instance, stringKey);
    const initiatorMData = metadata_1.getMetadata(instance, "initiatorBinding");
    const initiatorBinding = initiatorMData ? initiatorMData.get(stringKey) : undefined;
    if (newVal instanceof Binding_1.Binding) {
        newVal.install(instance, stringKey);
        newVal = newVal.valueOf();
    }
    mData.setValue(newVal);
    if (initiatorBinding)
        initiatorBinding.reflectToObject(newVal);
    if (propDesc && propDesc.set)
        propDesc.set.call(instance, newVal);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvdXRpbHMvZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQiw4Q0FBMkM7QUFDM0MsMENBQXVEO0FBQ3ZELHdEQUFtRDtBQUNuRCxnREFBOEQ7QUFDOUQsa0RBQWlFO0FBQ2pFLDhDQUEyRDtBQUMzRCxrREFBK0c7QUFHL0csK0NBWXNCO0FBNEJ0QixTQUFnQixPQUFPLENBQUMsU0FBeUIsRUFBRTtJQUMvQyxPQUFPLENBQUMsTUFBVyxFQUFFLEdBQW9CLEVBQUUsRUFBRTtRQUN6QyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRy9ELE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNoQyxHQUFHLEVBQUUsU0FBUyxHQUFHO2dCQUNiLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDdkMsQ0FBQztZQUNELEdBQUcsRUFBRSxTQUFTLEdBQUcsQ0FBQyxNQUFXO2dCQUN6QixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2pDLE1BQU0sS0FBSyxHQUFHLDhCQUFtQixDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDbkQsTUFBTSxJQUFJLEdBQUcsSUFBSSxpQkFBTyxDQUFNLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZELElBQUksS0FBSyxZQUFZLHFCQUFTLElBQUksS0FBSyxZQUFZLG1CQUFRLEVBQUU7b0JBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pCLGlDQUFzQixD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

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL3V0aWxzL21ldGFkYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBZ0lBLFNBQWdCLGNBQWMsQ0FBNEMsTUFBUyxFQUFFLEdBQU0sRUFBRSxHQUFrQjtJQUMzRyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUZELHdDQUVDO0FBV0QsU0FBZ0IsV0FBVyxDQUE0QyxNQUFTLEVBQUUsR0FBTTtJQUNwRixPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFGRCxrQ0FFQztBQVVELFNBQWdCLHNCQUFzQixDQUFDLE1BQWMsRUFBRSxHQUFjLEVBQUUsS0FBVTtJQUM3RSxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUZELHdEQUVDO0FBVUQsU0FBZ0IsbUJBQW1CLENBQUMsTUFBYyxFQUFFLEdBQWM7SUFDOUQsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRkQsa0RBRUM7QUFVRCxTQUFnQixhQUFhLENBQUMsTUFBYyxFQUFFLEdBQVc7SUFDckQsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDM0QsQ0FBQztBQUZELHNDQUVDIn0=

/***/ }),

/***/ "./source/app/utils/util.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");
const environment_1 = __webpack_require__("./source/app/utils/environment.ts");
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
    if (attrValue === null)
        throw new Error("No attribute set");
    let valueToSet = attrValue;
    if (type.name !== undefined) {
        if (["Number", "Boolean", "Object", "Array"].includes(type.name)) {
            valueToSet = JSON.parse(attrValue);
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
    if (valueToSet.constructor.name !== type.name)
        throw new Error("attribute type equals not defined type");
    return valueToSet;
}
exports.constructTypeOfHTMLAttribute = constructTypeOfHTMLAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvdXRpbHMvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtEQUFvRDtBQUNwRCx3REFBbUQ7QUFTbkQsU0FBZ0IsT0FBTyxDQUFDLEdBQVc7SUFDL0IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEQsQ0FBQztBQUZELDBCQUVDO0FBU0QsU0FBZ0IsbUJBQW1CLENBQUMsR0FBVztJQUMzQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsRUFBRSxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM5RSxDQUFDO0FBSEQsa0RBR0M7QUFTRCxTQUFnQixvQkFBb0IsQ0FBQyxHQUFXO0lBQzVDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkIsT0FBTyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBSEQsb0RBR0M7QUFTRCxTQUFnQixzQkFBc0IsQ0FBQyxLQUFZLEVBQUUsT0FBWTtJQUM3RCxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLElBQUksS0FBSyxJQUFJLENBQUM7UUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBSEQsd0RBR0M7QUFTRCxTQUFnQiwwQkFBMEIsQ0FBQyxNQUFXLEVBQUUsYUFBdUIsRUFBRTtJQUM3RSxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELElBQUksU0FBUyxFQUFFO1FBQ1gsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLDBCQUEwQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUNyRDtJQUNELE9BQU8sVUFBVSxDQUFDO0FBQ3RCLENBQUM7QUFQRCxnRUFPQztBQVdELFNBQWdCLG9CQUFvQixDQUFDLE1BQXlCLEVBQUUsSUFBYyxFQUFFLFlBQW9CLEVBQUU7SUFDbEcsS0FBSyxNQUFNLE1BQU0sSUFBSSxJQUFJLEVBQUU7UUFDdkIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxHQUFHLFNBQVMsRUFBRSxDQUFDLEVBQUU7WUFDMUMsT0FBTyxJQUFJLENBQUM7U0FDZjtLQUNKO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQVBELG9EQU9DO0FBV0QsU0FBZ0IsNEJBQTRCLENBQUMsTUFBbUIsRUFBRSxHQUFXO0lBQ3pFLElBQUksQ0FBQyx1QkFBUyxFQUFFO1FBQUUsT0FBTztJQUN6QixNQUFNLElBQUksR0FBRyx3QkFBYSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4QyxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTNDLElBQUksU0FBUyxLQUFLLElBQUk7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFFNUQsSUFBSSxVQUFVLEdBQVEsU0FBUyxDQUFDO0lBQ2hDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7UUFDekIsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDOUQsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdEM7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssaUJBQWlCLEVBQUU7WUFDakMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNsQyxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxTQUFTO2dCQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsbURBQW1ELENBQUMsQ0FBQztZQUNyRixPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDckIsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDckM7S0FDSjtJQUNELElBQUksVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUk7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7SUFDekcsT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQztBQXRCRCxvRUFzQkMifQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvR2FtZVdpbmRvdy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1Rlc3RDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvY29tcG9uZW50cy9WaWV3TGluay50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1ZpZXdSb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9DbGllbnRNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQ2xpZW50Um91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0NvbmZpZ01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdDEudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzIHN5bmMgXlxcLlxcLy4qXFwudHMkIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9Db25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0dhbWVMb2JieS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvSG9tZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy91dGlscy91dGlsLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0F0dHJpYnV0ZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Db25maWdNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0JET0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9NYXBDYWNoZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Nb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Sb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CaW5kaW5nLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL01vZGlmaWNhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9Qcm9wZXJ0eS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9XYXRjaGVkLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbW9kZWxzL0JET1Rlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9tb2RlbHMvQkRPVGVzdDEudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9tb2RlbHMvQ2VsbC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL21vZGVscy9DaHVuay50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3JvdXRlcy9CRE9Db25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9yb3V0ZXMvQkRPR2FtZUxvYmJ5LnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvcm91dGVzL0JET0hvbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscyBzeW5jIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvdXRpbHMvZGVjb3JhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3V0aWxzL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvdXRpbHMvbWV0YWRhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscy91dGlsLnRzIiwid2VicGFjazovLy8uL3Zhci90bXAvdmlydHVhbEVudHJ5UG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkU7Ozs7Ozs7O0FDblJhO0FBQ2I7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyxtQ0FBTztBQUMvQjtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLDZDQUEyQjtBQUMzRCxxQkFBcUIsbUJBQU8sQ0FBQyxrQ0FBdUI7QUFDcEQscUJBQXFCLG1CQUFPLENBQUMsa0NBQXVCO0FBQ3BELHFDQUFxQyxtQkFBTyxDQUFDLHFDQUFXO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLDRCQUE0QjtBQUMvRjtBQUNBLHFEQUFxRCx1Q0FBdUM7QUFDNUY7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVqRjs7Ozs7Ozs7QUN6RDlCO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsbUNBQU87QUFDL0Isd0JBQXdCLG1CQUFPLENBQUMsNkNBQTJCO0FBQzNELHFCQUFxQixtQkFBTyxDQUFDLGtDQUF1QjtBQUNwRCxxQkFBcUIsbUJBQU8sQ0FBQyxrQ0FBdUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG1CQUFPLENBQUMsMENBQWlDO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1pQjs7Ozs7Ozs7QUNwQjlCO0FBQ2I7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyxtQ0FBTztBQUMvQjtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLDZDQUEyQjtBQUMzRCxxQkFBcUIsbUJBQU8sQ0FBQyxrQ0FBdUI7QUFDcEQsZ0JBQWdCLG1CQUFPLENBQUMsd0NBQXNCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxvREFBb0Q7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbW1EOzs7Ozs7OztBQ25EM0MsOENBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyxtQ0FBTztBQUMvQix3QkFBd0IsbUJBQU8sQ0FBQyw2Q0FBMkI7QUFDM0QsZUFBZSxtQkFBTyxDQUFDLDRCQUFpQjtBQUN4QyxxQkFBcUIsbUJBQU8sQ0FBQyxrQ0FBdUI7QUFDcEQscUJBQXFCLG1CQUFPLENBQUMsa0NBQXVCO0FBQ3BELHlDQUF5QyxtQkFBTyxDQUFDLHlDQUFRO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixvRkFBUSxHQUFhLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDRCQUE0QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyaEQ7Ozs7Ozs7OztBQy9DOUI7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyxtQ0FBTztBQUMvQixtQkFBTyxDQUFDLDRDQUFrQjtBQUMxQixpQkFBaUIsbUJBQU8sQ0FBQyxpQ0FBUTtBQUNqQyxtQkFBbUIsbUJBQU8sQ0FBQyw2Q0FBVTtBQUNyQyxlQUFlLG1CQUFPLENBQUMsOEJBQU07QUFDN0IscUJBQXFCLG1CQUFPLENBQUMsa0NBQXVCO0FBQ3BELG1CQUFtQixtQkFBTyxDQUFDLGdDQUFxQjtBQUNoRCxlQUFlLG1CQUFPLENBQUMsc0NBQW9CO0FBQzNDLGVBQWUsbUJBQU8sQ0FBQyw0QkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxlQUFlO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsZ0NBQWdDO0FBQ2hDLDJCQUEyQjtBQUMzQix5QkFBeUI7QUFDekIsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxteUk7Ozs7Ozs7O0FDN0g5QjtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsbUJBQW1CO0FBQ25CLDJCQUEyQjtBQUMzQix5QkFBeUI7QUFDekIsNEJBQTRCO0FBQzVCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsMkNBQTJDLG1ZOzs7Ozs7OztBQ1Y5QjtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGdCQUFnQixtQkFBTyxDQUFDLG1DQUFPO0FBQy9CLHFCQUFxQixtQkFBTyxDQUFDLGtDQUF1QjtBQUNwRCxtQkFBbUIsbUJBQU8sQ0FBQyw4QkFBbUI7QUFDOUMsZUFBZSxtQkFBTyxDQUFDLHNDQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVnQzs7Ozs7Ozs7QUNoQzlCO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsbUJBQW1CLG1CQUFPLENBQUMsOEJBQW1CO0FBQzlDLGlCQUFpQixtQkFBTyxDQUFDLGlDQUFRO0FBQ2pDLGlCQUFpQixtQkFBTyxDQUFDLHNDQUFvQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCLEdBQUcsTUFBTTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQywyQkFBMkI7QUFDaEUsMENBQTBDLFVBQVU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHU4Qzs7Ozs7Ozs7QUNqQzlCO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsMkJBQTJCLG1CQUFPLENBQUMsc0NBQTJCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywycUI7Ozs7Ozs7O0FDbEI5QjtBQUNiO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsbUNBQU87QUFDL0I7QUFDQSxvQkFBb0IsbUJBQU8sQ0FBQywrQkFBb0I7QUFDaEQscUJBQXFCLG1CQUFPLENBQUMsa0NBQXVCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG1CQUFtQjtBQUNqRCxpQ0FBaUMsbUJBQW1CO0FBQ3BELGtDQUFrQyxtQkFBbUI7QUFDckQsa0NBQWtDLG1CQUFtQjtBQUNyRCwrQkFBK0IsbUJBQW1CO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDLHdDQUF3QztBQUN4QyxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGNBQWMsU0FBUyxTQUFTLFNBQVMsWUFBWSxVQUFVLFNBQVM7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixjQUFjLEtBQUssU0FBUyxLQUFLLFlBQVksS0FBSyxTQUFTO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtc0Q7Ozs7Ozs7O0FDdEQ5QjtBQUNiO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsbUNBQU87QUFDL0I7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxnQ0FBcUI7QUFDL0Msc0JBQXNCLG1CQUFPLENBQUMsMkNBQXlCO0FBQ3ZELHFCQUFxQixtQkFBTyxDQUFDLGtDQUF1QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHlCQUF5QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMmlCOzs7Ozs7OztBQ3BCOUI7QUFDYjtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGdCQUFnQixtQkFBTyxDQUFDLG1DQUFPO0FBQy9CO0FBQ0EsbUJBQW1CLG1CQUFPLENBQUMsaUNBQXNCO0FBQ2pELGVBQWUsbUJBQU8sQ0FBQyx1Q0FBcUI7QUFDNUMscUJBQXFCLG1CQUFPLENBQUMsa0NBQXVCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywwQkFBMEI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtuQjs7Ozs7OztBQ3JCM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1GOzs7Ozs7OztBQ3hCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELHNCQUFzQixtQkFBTyxDQUFDLDJDQUF5QjtBQUN2RCxvQkFBb0IsbUJBQU8sQ0FBQyxrQ0FBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDJTOzs7Ozs7OztBQ1A5QjtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELHNCQUFzQixtQkFBTyxDQUFDLDJDQUF5QjtBQUN2RCx1QkFBdUIsbUJBQU8sQ0FBQyxxQ0FBMEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrWTs7Ozs7Ozs7QUNaOUI7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxzQkFBc0IsbUJBQU8sQ0FBQywyQ0FBeUI7QUFDdkQsa0JBQWtCLG1CQUFPLENBQUMsZ0NBQXFCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtUzs7Ozs7Ozs7QUNQOUI7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxtQkFBbUIsbUJBQU8sQ0FBQyxnQ0FBcUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTLEdBQUcsU0FBUztBQUNyQztBQUNBO0FBQ0EseUJBQXlCLFNBQVMsR0FBRyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUYsZ0JBQWdCO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsU0FBUyxHQUFHLFNBQVM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCs1Rzs7Ozs7Ozs7QUN4RTlCO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsbUJBQW1CLG1CQUFPLENBQUMsOEJBQW1CO0FBQzlDLHNCQUFzQixtQkFBTyxDQUFDLG1DQUF3QjtBQUN0RCx1QkFBdUIsbUJBQU8sQ0FBQyxrQ0FBdUI7QUFDdEQsZUFBZSxtQkFBTyxDQUFDLDRCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHV2Rjs7Ozs7Ozs7QUM5RDlCO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsbUNBQU87QUFDL0IscUNBQXFDLG1CQUFPLENBQUMsNEJBQUk7QUFDakQsc0JBQXNCLG1CQUFPLENBQUMsaUNBQXNCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVpRDs7Ozs7Ozs7QUNwQzNDLDhDQUFhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsbUNBQU87QUFDL0IseUNBQXlDLG1CQUFPLENBQUMsaUNBQVE7QUFDekQsZUFBZSxtQkFBTyxDQUFDLHlDQUFNO0FBQzdCLGVBQWUsbUJBQU8sQ0FBQyw0QkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDhCQUE4QixHQUFHLGtDQUFrQyxHQUFHLG1CQUFtQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG0xSDs7Ozs7Ozs7O0FDakY5QjtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCt0Qzs7Ozs7Ozs7QUMzQjlCO0FBQ2I7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyxtQ0FBTztBQUMvQjtBQUNBLGVBQWUsbUJBQU8sQ0FBQyw4QkFBTTtBQUM3Qix1QkFBdUIsbUJBQU8sQ0FBQyxrREFBYztBQUM3QyxrQkFBa0IsbUJBQU8sQ0FBQyw2QkFBa0I7QUFDNUMscUJBQXFCLG1CQUFPLENBQUMsa0NBQXVCO0FBQ3BELG1CQUFtQixtQkFBTyxDQUFDLGdDQUFxQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixZQUFZO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1CQUFtQjtBQUNyRDtBQUNBO0FBQ0EsMkNBQTJDLHUwRDs7Ozs7Ozs7QUM3RDlCO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsaUJBQWlCLG1CQUFPLENBQUMsaUNBQVE7QUFDakMsc0JBQXNCLG1CQUFPLENBQUMsbUNBQXdCO0FBQ3REO0FBQ0E7QUFDQSxtQ0FBbUMsb0NBQW9DO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdWhDOzs7Ozs7OztBQzNCOUI7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxlQUFlLG1CQUFPLENBQUMsNEJBQWlCO0FBQ3hDLHVCQUF1QixtQkFBTyxDQUFDLGtDQUF1QjtBQUN0RCxtQkFBbUIsbUJBQU8sQ0FBQyxnQ0FBcUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbW1QOzs7Ozs7OztBQ2hKOUI7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1aEI7Ozs7Ozs7O0FDZjlCO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsdUJBQXVCLG1CQUFPLENBQUMsa0NBQXVCO0FBQ3RELG1CQUFtQixtQkFBTyxDQUFDLGdDQUFxQjtBQUNoRCxzQkFBc0IsbUJBQU8sQ0FBQyxtQ0FBd0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0R0FBNEcsb0JBQW9CO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1bUg7Ozs7Ozs7O0FDeEU5QjtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGdCQUFnQixtQkFBTyxDQUFDLG1DQUFPO0FBQy9CLHVCQUF1QixtQkFBTyxDQUFDLGtDQUF1QjtBQUN0RCxlQUFlLG1CQUFPLENBQUMsNEJBQWlCO0FBQ3hDLDRDQUE0QyxtQkFBTyxDQUFDLG1DQUFXO0FBQy9ELGlCQUFpQixtQkFBTyxDQUFDLGlDQUFRO0FBQ2pDLDZDQUE2QyxtQkFBTyxDQUFDLG9DQUFZO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdCQUFnQjtBQUNoRCxrQ0FBa0MsZ0JBQWdCO0FBQ2xELCtCQUErQixnQkFBZ0I7QUFDL0Msa0NBQWtDLGdCQUFnQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsR0FBRyw0QkFBNEI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtuSjs7Ozs7Ozs7QUNwRzlCO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsbUNBQU87QUFDL0IscUJBQXFCLG1CQUFPLENBQUMsa0NBQXVCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVCQUF1QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDhDQUE4QztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtMUI7Ozs7Ozs7O0FDL0I5QjtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGdCQUFnQixtQkFBTyxDQUFDLG1DQUFPO0FBQy9CLHFCQUFxQixtQkFBTyxDQUFDLGtDQUF1QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwyQkFBMkI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLCtDQUErQztBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtdEI7Ozs7Ozs7O0FDMUI5QjtBQUNiO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsbUNBQU87QUFDL0I7QUFDQSxnQkFBZ0IsbUJBQU8sQ0FBQyw4QkFBUztBQUNqQyxxQkFBcUIsbUJBQU8sQ0FBQyxrQ0FBdUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbXBCOzs7Ozs7OztBQ3ZCOUI7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyxtQ0FBTztBQUMvQixxREFBcUQsbUJBQU8sQ0FBQyxnREFBb0I7QUFDakYsaUJBQWlCLG1CQUFPLENBQUMsaUNBQVE7QUFDakMsZUFBZSxtQkFBTyxDQUFDLDZCQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaUJBQWlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpQkFBaUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyZ0U7Ozs7Ozs7O0FDekM5QjtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbWE7Ozs7Ozs7O0FDYjlCO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLCtCQUEwQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDJrQjs7Ozs7Ozs7QUNuQjlCO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDBCQUFxQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDJqQjs7Ozs7OztBQ25CM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQSw2RDs7Ozs7Ozs7QUNSYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELG1CQUFPLENBQUMsNENBQWtCO0FBQzFCLGtCQUFrQixtQkFBTyxDQUFDLDZCQUFrQjtBQUM1QyxlQUFlLG1CQUFPLENBQUMsNEJBQWlCO0FBQ3hDLHNCQUFzQixtQkFBTyxDQUFDLG1DQUF3QjtBQUN0RCxtQkFBbUIsbUJBQU8sQ0FBQyw4QkFBbUI7QUFDOUMsb0JBQW9CLG1CQUFPLENBQUMsK0JBQW9CO0FBQ2hELGtCQUFrQixtQkFBTyxDQUFDLDZCQUFrQjtBQUM1QyxtQkFBbUIsbUJBQU8sQ0FBQyxnQ0FBcUI7QUFDaEQsdUJBQXVCLG1CQUFPLENBQUMsa0RBQWM7QUFDN0MsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxnQkFBZ0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMmdXOzs7Ozs7OztBQ3BPM0MsdURBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyxtQ0FBTztBQUMvQixzQ0FBc0MsbUJBQU8sQ0FBQyw2Q0FBVTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTSx5REFBUSxJQUFJLENBQUM7QUFDdkM7QUFDQSxLQUFLLEdBQUcsVUFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNELDJDQUEyQyx1M0M7Ozs7Ozs7OztBQzlCOUI7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG0rQjs7Ozs7Ozs7QUN0QjlCO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsbUJBQW1CLG1CQUFPLENBQUMsZ0NBQXFCO0FBQ2hELHNCQUFzQixtQkFBTyxDQUFDLG1DQUF3QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixPQUFPLEVBQUUsVUFBVTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHU5Rjs7Ozs7Ozs7QUNwRTlCO0FBQ2I7QUFDQSwyQ0FBMkMsMlEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvclwiLFwidGVtcGxhdGVzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYWYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXItZHouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXItbHlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItbWEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYm1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vYnMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vZGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZGUtYXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZW4tU0dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1TRy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hLCBfYjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5cInVzZSBzdHJpY3RcIjtcbmNvbnN0IEJhc2VDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9CYXNlQ29tcG9uZW50XCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMiA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBCQUJZTE9OID0gdHNsaWJfMS5fX2ltcG9ydFN0YXIocmVxdWlyZShcImJhYnlsb25qc1wiKSk7XG5sZXQgR2FtZVdpbmRvdyA9IGNsYXNzIEdhbWVXaW5kb3cgZXh0ZW5kcyBCYXNlQ29tcG9uZW50XzEuQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBuZXcgQkFCWUxPTi5FbmdpbmUodGhpcywgdHJ1ZSwge1xuICAgICAgICAgICAgYXVkaW9FbmdpbmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2NlbmUgPSB0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IGAxMDAlYDtcbiAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IGAxMDAlYDtcbiAgICAgICAgdGhpcy5lbmdpbmUucnVuUmVuZGVyTG9vcCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbmdpbmUucmVzaXplKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNyZWF0ZVNjZW5lKCkge1xuICAgICAgICBjb25zdCBzY2VuZSA9IG5ldyBCQUJZTE9OLlNjZW5lKHRoaXMuZW5naW5lKTtcbiAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IEJBQllMT04uRnJlZUNhbWVyYSgnY2FtZXJhJywgbmV3IEJBQllMT04uVmVjdG9yMygwLCA1LCAtMTApLCBzY2VuZSk7XG4gICAgICAgIGNhbWVyYS5zZXRUYXJnZXQoQkFCWUxPTi5WZWN0b3IzLlplcm8oKSk7XG4gICAgICAgIGNhbWVyYS5hdHRhY2hDb250cm9sKHRoaXMsIGZhbHNlKTtcbiAgICAgICAgY29uc3QgbGlnaHQgPSBuZXcgQkFCWUxPTi5IZW1pc3BoZXJpY0xpZ2h0KCdsaWdodDEnLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDEsIDApLCBzY2VuZSk7XG4gICAgICAgIGxpZ2h0LnNoYWRvd0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBzcGhlcmUgPSBCQUJZTE9OLk1lc2hCdWlsZGVyLkNyZWF0ZVNwaGVyZSgnc3BoZXJlJywgeyBzZWdtZW50czogMTYsIGRpYW1ldGVyOiAyIH0sIHNjZW5lKTtcbiAgICAgICAgc3BoZXJlLnBvc2l0aW9uLnkgPSAxO1xuICAgICAgICBCQUJZTE9OLk1lc2hCdWlsZGVyLkNyZWF0ZUdyb3VuZCgnZ3JvdW5kMScsIHsgaGVpZ2h0OiA2LCB3aWR0aDogNiwgc3ViZGl2aXNpb25zOiAyIH0sIHNjZW5lKTtcbiAgICAgICAgcmV0dXJuIHNjZW5lO1xuICAgIH1cbiAgICBjcmVhdGVUZXJyYWluKCkgeyB9XG59O1xuR2FtZVdpbmRvdy5leHRlbmRzID0gXCJjYW52YXNcIjtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18yLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdHlwZW9mIChfYSA9IHR5cGVvZiBCQUJZTE9OICE9PSBcInVuZGVmaW5lZFwiICYmIEJBQllMT04uRW5naW5lKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3QpXG5dLCBHYW1lV2luZG93LnByb3RvdHlwZSwgXCJlbmdpbmVcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18yLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdHlwZW9mIChfYiA9IHR5cGVvZiBCQUJZTE9OICE9PSBcInVuZGVmaW5lZFwiICYmIEJBQllMT04uU2NlbmUpID09PSBcImZ1bmN0aW9uXCIgPyBfYiA6IE9iamVjdClcbl0sIEdhbWVXaW5kb3cucHJvdG90eXBlLCBcInNjZW5lXCIsIHZvaWQgMCk7XG5HYW1lV2luZG93ID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKClcbl0sIEdhbWVXaW5kb3cpO1xuZXhwb3J0cy5kZWZhdWx0ID0gR2FtZVdpbmRvdztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVIyRnRaVmRwYm1SdmR5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMMk52YlhCdmJtVnVkSE12UjJGdFpWZHBibVJ2ZHk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxEWkVRVUZwUlR0QlFVTnFSU3h6UkVGQmQwUTdRVUZEZUVRc2MwUkJRV2xFTzBGQlEycEVMREpFUVVGeFF6dEJRVlZ5UXl4SlFVRnhRaXhWUVVGVkxFZEJRUzlDTEUxQlFYRkNMRlZCUVZjc1UwRkJVU3h2UTBGQmIwSXNRMEZCUXl4cFFrRkJhVUlzUTBGQlF6dEpRVVF2UlRzN1VVRnRRakJDTEZkQlFVMHNSMEZCYlVJc1NVRkJTU3hQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVN1dVRkRNVVVzVjBGQlZ5eEZRVUZGTEVsQlFVazdVMEZEY0VJc1EwRkJReXhEUVVGRE8xRkJVMjFDTEZWQlFVc3NSMEZCYTBJc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzBsQmVVUndSU3hEUVVGRE8wbEJiRVJWTEdsQ1FVRnBRanRSUVVOd1FpeExRVUZMTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzUTBGQlF6dFJRVU14UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZETTBJc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUXpGQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWRCUVVjc1JVRkJSVHRaUVVNelFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8xRkJRM2hDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTBnc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0UlFVTnlRaXhOUVVGTkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzUlVGQlJUdFpRVU51UXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTTdXVUZETDBJc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUTNKRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXp0SlFWTlRMRmRCUVZjN1VVRkZha0lzVFVGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVVTNReXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEU5QlFVOHNRMEZCUXl4VlFVRlZMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkZka1lzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZGZWtNc1RVRkJUU3hEUVVGRExHRkJRV0VzUTBGQlF5eEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkZiRU1zVFVGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFGQlF6RkdMRXRCUVVzc1EwRkJReXhoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETzFGQlJUTkNMRTFCUVUwc1RVRkJUU3hIUVVGSExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxGRkJRVkVzUlVGQlJTeEZRVUZGTEVWQlFVVXNVVUZCVVN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFGQlJXaEhMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVjBRaXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRVZCUVVVc1dVRkJXU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUlRkR0xFOUJRVThzUzBGQlN5eERRVUZETzBsQlEycENMRU5CUVVNN1NVRlJVeXhoUVVGaExFdEJRVXNzUTBGQlF6dERRVU5vUXl4RFFVRkJPMEZCTjBVd1FpeHJRa0ZCVHl4SFFVRlhMRkZCUVZFc1EwRkJRenRCUVZOMFF6dEpRVUZZTEhGQ1FVRlJMRVZCUVVVN01FUkJRVzFDTEU5QlFVOHNiMEpCUVZBc1QwRkJUeXhEUVVGRExFMUJRVTA3TUVOQlJYcERPMEZCVTFNN1NVRkJXQ3h4UWtGQlVTeEZRVUZGT3pCRVFVRnJRaXhQUVVGUExHOUNRVUZRTEU5QlFVOHNRMEZCUXl4TFFVRkxPM2xEUVVGelFqdEJRVGRDTDBNc1ZVRkJWVHRKUVVRNVFpdzBRa0ZCWlN4RlFVRkZPMGRCUTBjc1ZVRkJWU3hEUVhOR09VSTdhMEpCZEVadlFpeFZRVUZWSW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJhc2VDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9CYXNlQ29tcG9uZW50XCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMiA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5sZXQgVGVzdENvbXBvbmVudCA9IGNsYXNzIFRlc3RDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50XzEuQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVN0cmluZyA9IHJlcXVpcmUoJ35zdGF0aWMvdmlld3MvdGVzdENvbXBvbmVudC5uamsnKTtcbiAgICB9XG59O1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzIucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG5dLCBUZXN0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJ0ZW1wbGF0ZVN0cmluZ1wiLCB2b2lkIDApO1xuVGVzdENvbXBvbmVudCA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpXG5dLCBUZXN0Q29tcG9uZW50KTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRlc3RDb21wb25lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWR1Z6ZEVOdmJYQnZibVZ1ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyTnZiWEJ2Ym1WdWRITXZWR1Z6ZEVOdmJYQnZibVZ1ZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN3MlJFRkJhVVU3UVVGRGFrVXNjMFJCUVhkRU8wRkJRM2hFTEhORVFVRnBSRHRCUVZWcVJDeEpRVUZ4UWl4aFFVRmhMRWRCUVd4RExFMUJRWEZDTEdGQlFXTXNVMEZCVVN4dlEwRkJiMElzUTBGQlF5eFhRVUZYTEVOQlFVTTdTVUZFTlVVN08xRkJVekJDTEcxQ1FVRmpMRWRCUVVjc1QwRkJUeXhEUVVGRExHbERRVUZwUXl4RFFVRkRMRU5CUVVNN1NVRkZkRVlzUTBGQlF6dERRVUZCTEVOQlFVRTdRVUZHWlR0SlFVRllMSEZDUVVGUkxFVkJRVVU3TzNGRVFVRjFSVHRCUVZKcVJTeGhRVUZoTzBsQlJHcERMRFJDUVVGbExFVkJRVVU3UjBGRFJ5eGhRVUZoTEVOQlZXcERPMnRDUVZadlFpeGhRVUZoSW4wPSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hLCBfYjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5cInVzZSBzdHJpY3RcIjtcbmNvbnN0IEJhc2VDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9CYXNlQ29tcG9uZW50XCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IFRlc3QxXzEgPSByZXF1aXJlKFwifmNsaWVudC9tb2RlbHMvVGVzdDFcIik7XG5sZXQgVmlld0xpbmsgPSBjbGFzcyBWaWV3TGluayBleHRlbmRzIEJhc2VDb21wb25lbnRfMS5CYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgIGNvbnN0cnVjdG9yKF9wYXJhbXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBUZXN0MV8xLlRlc3QxKHsgaWQ6IFwiMVwiLCB0aXRsZTogU3RyaW5nKERhdGUubm93KCkpLCBvaGE6IFwib2hhLi4uXCIgfSk7XG4gICAgICAgIHRoaXMudGVzdCA9IHRoaXMubW9kZWwuYmluZChcInRpdGxlXCIpO1xuICAgICAgICB0aGlzLnRlc3RlciA9IFtcImhhaGFcIl07XG4gICAgfVxuICAgIGNvbnN0cnVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkxpbmtDbGljay5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25UZXN0ZXJBZGQoX2FkZGVkKSB7XG4gICAgfVxuICAgIG9uVGVzdGVyQ2hhbmdlKF9jaGFuZ2VkKSB7XG4gICAgfVxuICAgIG9uVGVzdENoYW5nZShfY2hhbmdlZCkge1xuICAgIH1cbiAgICBvbkxpbmtDbGljayhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cucm91dGVyLm5hdmlnYXRlKHRoaXMuaHJlZiwgdHJ1ZSk7XG4gICAgfVxufTtcblZpZXdMaW5rLmV4dGVuZHMgPSAnYSc7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIHR5cGVvZiAoX2EgPSB0eXBlb2YgVGVzdDFfMS5UZXN0MSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBUZXN0MV8xLlRlc3QxKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3QpXG5dLCBWaWV3TGluay5wcm90b3R5cGUsIFwibW9kZWxcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLndhdGNoZWQoKSwgZGVjb3JhdG9yc18xLmF0dHJpYnV0ZSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIFZpZXdMaW5rLnByb3RvdHlwZSwgXCJ0ZXN0XCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS53YXRjaGVkKHtcbiAgICAgICAgb25SZW1vdmU6IFwib25UZXN0ZXJDaGFuZ2VcIixcbiAgICAgICAgb25Jbml0OiBcIm9uVGVzdGVyQ2hhbmdlXCJcbiAgICB9KSwgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQXJyYXkpXG5dLCBWaWV3TGluay5wcm90b3R5cGUsIFwidGVzdGVyXCIsIHZvaWQgMCk7XG5WaWV3TGluayA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9iID0gdHlwZW9mIENvbnN0UGFyYW1zICE9PSBcInVuZGVmaW5lZFwiICYmIENvbnN0UGFyYW1zKSA9PT0gXCJmdW5jdGlvblwiID8gX2IgOiBPYmplY3RdKVxuXSwgVmlld0xpbmspO1xuZXhwb3J0cy5kZWZhdWx0ID0gVmlld0xpbms7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWbWxsZDB4cGJtc3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMk5zYVdWdWRDOTBjeTlqYjIxd2IyNWxiblJ6TDFacFpYZE1hVzVyTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUVVFc05rUkJRV2xGTzBGQlEycEZMSE5FUVVGelJqdEJRVU4wUml4blJFRkJOa003UVVGVk4wTXNTVUZCY1VJc1VVRkJVU3hIUVVFM1FpeE5RVUZ4UWl4UlFVRlRMRk5CUVZFc2IwTkJRVzlDTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU03U1VGeFEzcEZMRmxCUVZrc1QwRkJLMEk3VVVGRGRrTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRjBRazhzVlVGQlN5eEhRVUZWTEVsQlFVa3NZVUZCU3l4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeExRVUZMTEVWQlFVVXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJVWEJGTEZOQlFVa3NSMEZCVnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFWZHFSQ3hYUVVGTkxFZEJRV0VzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVbHNSQ3hEUVVGRE8wbEJUMDBzYlVKQlFXMUNPMUZCUTNSQ0xFdEJRVXNzUTBGQlF5eHRRa0ZCYlVJc1JVRkJSU3hEUVVGRE8xRkJRelZDTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTm9SU3hEUVVGRE8wbEJVMU1zVjBGQlZ5eERRVUZETEUxQlFYTkNPMGxCUlRWRExFTkJRVU03U1VGVFV5eGpRVUZqTEVOQlFVTXNVVUZCZDBJN1NVRkZha1FzUTBGQlF6dEpRVk5UTEZsQlFWa3NRMEZCUXl4UlFVRnpRanRKUVVVM1F5eERRVUZETzBsQlUwOHNWMEZCVnl4RFFVRkRMRXRCUVZrN1VVRkROVUlzUzBGQlN5eERRVUZETEdOQlFXTXNSVUZCUlN4RFFVRkRPMUZCUTNaQ0xFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETlVNc1EwRkJRenREUVVOS0xFTkJRVUU3UVVGMlJqQkNMR2RDUVVGUExFZEJRVmNzUjBGQlJ5eERRVUZETzBGQlVXcERPMGxCUVZnc2NVSkJRVkVzUlVGQlJUc3dSRUZCWlN4aFFVRkxMRzlDUVVGTUxHRkJRVXM3ZFVOQlFXOUZPMEZCVVRORk8wbEJRWFpDTEc5Q1FVRlBMRVZCUVVVc1JVRkJSU3h6UWtGQlV5eEZRVUZGT3p0elEwRkJaMFE3UVVGWGVFUTdTVUZJWkN4dlFrRkJUeXhEUVVGRE8xRkJRMHdzVVVGQlVTeEZRVUZGTEdkQ1FVRm5RanRSUVVNeFFpeE5RVUZOTEVWQlFVVXNaMEpCUVdkQ08wdEJRek5DTEVOQlFVTXNSVUZCUlN4eFFrRkJVU3hGUVVGRk96dDNRMEZCYjBNN1FVRnVRMnBETEZGQlFWRTdTVUZFTlVJc05FSkJRV1VzUlVGQlJUdHBSVUZ6UTFFc1YwRkJWeXh2UWtGQldDeFhRVUZYTzBkQmNrTm9RaXhSUVVGUkxFTkJLMFkxUWp0clFrRXZSbTlDTEZGQlFWRWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgQmFzZUNvbXBvbmVudF8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0Jhc2VDb21wb25lbnRcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMiA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBuYXZpZ29fMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJuYXZpZ29cIikpO1xubGV0IFZpZXdSb3V0ZXIgPSBjbGFzcyBWaWV3Um91dGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudF8xLkJhc2VDb21wb25lbnRGYWN0b3J5KEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucm91dGVyID0gbmV3IG5hdmlnb18xLmRlZmF1bHQoKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMucm91dGVDb2xsZWN0aW9uKCk7XG4gICAgICAgIHdpbmRvdy5yb3V0ZXIgPSB0aGlzLnJvdXRlcjtcbiAgICB9XG4gICAgcm91dGVDb2xsZWN0aW9uKCkge1xuICAgICAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIHdpbmRvdy52aXJ0dWFsUm91dGVzKSB7XG4gICAgICAgICAgICBjb25zdCBteVJvdXRlID0gcmVxdWlyZShgLi8uLi9yb3V0ZXMvJHtyb3V0ZX0udHNgKS5kZWZhdWx0O1xuICAgICAgICAgICAgdGhpcy5zaW5nZVJvdXRlQ29sbGVjdGlvbihteVJvdXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaW5nZVJvdXRlQ29sbGVjdGlvbihSb3V0ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCF1dGlsXzEuaW5jbHVkZXNNZW1iZXJPZkxpc3QoUm91dGUuYXR0YWNoVG9TZXJ2ZXJzLCBbZ2xvYmFsLnByb2Nlc3MuZW52Lm5hbWUsICcqJ10pKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IFJvdXRlQ2xhc3MgPSBuZXcgUm91dGUoKTtcbiAgICAgICAgICAgIGlmICghUm91dGVDbGFzcy5pc0NsaWVudFJvdXRlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke1JvdXRlQ2xhc3MuY29uc3RydWN0b3IubmFtZX0gaXMgbm90IGluc3RhbmNlIG9mIH5jbGllbnQvbGliL0Jhc2VSb3V0ZWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIub24oUm91dGVDbGFzcy5yb3V0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG59O1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzIucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG5dLCBWaWV3Um91dGVyLnByb3RvdHlwZSwgXCJyb3V0ZXJcIiwgdm9pZCAwKTtcblZpZXdSb3V0ZXIgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoKVxuXSwgVmlld1JvdXRlcik7XG5leHBvcnRzLmRlZmF1bHQgPSBWaWV3Um91dGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVm1sbGQxSnZkWFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyTnZiWEJ2Ym1WdWRITXZWbWxsZDFKdmRYUmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3cyUkVGQmFVVTdRVUZEYWtVc01FTkJRWFZFTzBGQlEzWkVMSE5FUVVGM1JEdEJRVU40UkN4elJFRkJhVVE3UVVGRGFrUXNORVJCUVRSQ08wRkJWVFZDTEVsQlFYRkNMRlZCUVZVc1IwRkJMMElzVFVGQmNVSXNWVUZCVnl4VFFVRlJMRzlEUVVGdlFpeERRVUZETEZkQlFWY3NRMEZCUXp0SlFVUjZSVHM3VVVGVmFVTXNWMEZCVFN4SFFVRkhMRWxCUVVrc1owSkJRVTBzUlVGQlJTeERRVUZETzBsQkswTjJSQ3hEUVVGRE8wbEJka05oTEdsQ1FVRnBRanRSUVVOMlFpeExRVUZMTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzUTBGQlF6dFJRVU14UWl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFTkJRVU03VVVGRGRrSXNUVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzBsQlEyaERMRU5CUVVNN1NVRlJUeXhsUVVGbE8xRkJRMjVDTEV0QlFVc3NUVUZCVFN4TFFVRkxMRWxCUVVrc1RVRkJUU3hEUVVGRExHRkJRV0VzUlVGQlJUdFpRVU4wUXl4TlFVRk5MRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU1zWlVGQlpTeExRVUZMTEV0QlFVc3NRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJRenRaUVVNelJDeEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVMEZEZEVNN1NVRkRUQ3hEUVVGRE8wbEJWVThzYjBKQlFXOUNMRU5CUVVNc1MwRkJWVHRSUVVOdVF5eEpRVUZKTzFsQlEwRXNTVUZCU1N4RFFVRkRMREpDUVVGdlFpeERRVUZYTEV0QlFVc3NRMEZCUXl4bFFVRmxMRVZCUVVVc1EwRkJVeXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlFVVXNUMEZCVHp0WlFVTXpSeXhOUVVGTkxGVkJRVlVzUjBGQlJ5eEpRVUZKTEV0QlFVc3NSVUZCUlN4RFFVRkRPMWxCUXk5Q0xFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNZVUZCWVN4RlFVRkZPMmRDUVVNelFpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTERKRFFVRXlReXhEUVVGRExFTkJRVU03WVVGRE9VWTdXVUZEUkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1UwRkRja003VVVGQlF5eFBRVUZQTEV0QlFVc3NSVUZCUlR0WlFVTmFMRTFCUVUwc1MwRkJTeXhEUVVGRE8xTkJRMlk3U1VGRFRDeERRVUZETzBOQlEwb3NRMEZCUVR0QlFTOURaVHRKUVVGWUxIRkNRVUZSTEVWQlFVVTdPekJEUVVGM1F6dEJRVlJzUXl4VlFVRlZPMGxCUkRsQ0xEUkNRVUZsTEVWQlFVVTdSMEZEUnl4VlFVRlZMRU5CZDBRNVFqdHJRa0Y0Ukc5Q0xGVkJRVlVpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnJlcXVpcmUoXCJyZWZsZWN0LW1ldGFkYXRhXCIpO1xuY29uc3QgbG9kYXNoXzEgPSByZXF1aXJlKFwibG9kYXNoXCIpO1xuY29uc3QgbnVuanVja3NfMSA9IHJlcXVpcmUoXCJudW5qdWNrc1wiKTtcbmNvbnN0IHV1aWRfMSA9IHJlcXVpcmUoXCJ1dWlkXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L3V0aWxzL3V0aWxcIik7XG5jb25zdCB1dGlsXzIgPSByZXF1aXJlKFwifmNsaWVudC8uLi8uLi91dGlscy91dGlsXCIpO1xuZnVuY3Rpb24gQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTFR5cGVFbGVtZW50KSB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIEhUTUxUeXBlRWxlbWVudCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICAgICAgdGhpcy5pZCA9IHV1aWRfMS52NCgpO1xuICAgICAgICAgICAgdGhpcy5pc0Jhc2VDb21wb25lbnQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcy5jb25zdHJ1Y3RvcikubmFtZTtcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGVTdHJpbmcgPSAnPGRpdj48c2xvdD48L3Nsb3Q+PC9kaXY+JztcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGVQYXJhbXMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcywgXCJkZWZpbmVkUHJvcGVydGllc1wiKTtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wIG9mIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2V0KHByb3AsIG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLCBwcm9wKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgICAgICB9XG4gICAgICAgIGdldCBiaW5kaW5ncygpIHtcbiAgICAgICAgICAgIGNvbnN0IGJpbmRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLCBcImluaXRpYXRvckJpbmRpbmdcIik7XG4gICAgICAgICAgICByZXR1cm4gYmluZGluZ3MgPyBiaW5kaW5ncyA6IG5ldyBNYXAoKTtcbiAgICAgICAgfVxuICAgICAgICBnZXROYW1lc3BhY2VkU3RvcmFnZShrZXksIG5zUHJvcCwgZm9yY2VOUykge1xuICAgICAgICAgICAgcmV0dXJuIHV0aWxfMS5nZXROYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5zUHJvcCwgZm9yY2VOUyk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2Uoa2V5LCBuZXdWYWwsIG5zUHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHV0aWxfMS5zZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5ld1ZhbCwgbnNQcm9wKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGVGcm9tTmFtZXNwYWNlZFN0b3JhZ2Uoa2V5LCBuc1Byb3ApIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlsXzEuZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlKHRoaXMsIGtleSwgbnNQcm9wKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMgJiYgdGhpcy5wcm9wZXJ0aWVzLmhhcyhxdWFsaWZpZWROYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgXCIke3F1YWxpZmllZE5hbWV9XCIgY2FuJ3QgYmUgc2V0IGFzIGF0dHJpYnV0ZSBiZWNhdXNlIGl0IGlzIGEgZGVmaW5lZCBwcm9wZXJ0eWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc3VwZXIuc2V0QXR0cmlidXRlKHF1YWxpZmllZE5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZVRvU2V0ID0gdXRpbF8yLmNvbnN0cnVjdFR5cGVPZkhUTUxBdHRyaWJ1dGUodGhpcywgcXVhbGlmaWVkTmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpc1txdWFsaWZpZWROYW1lXSA9IHZhbHVlVG9TZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlQXR0cmlidXRlKHF1YWxpZmllZE5hbWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMgJiYgdGhpcy5wcm9wZXJ0aWVzLmhhcyhxdWFsaWZpZWROYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgXCIke3F1YWxpZmllZE5hbWV9XCIgY2FuJ3QgYmUgcmVtb3ZlZCBhcyBhdHRyaWJ1dGUgYmVjYXVzZSBpdCBpcyBhIGRlZmluZWQgcHJvcGVydHlgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1cGVyLnJlbW92ZUF0dHJpYnV0ZShxdWFsaWZpZWROYW1lKTtcbiAgICAgICAgICAgIHRoaXNbcXVhbGlmaWVkTmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdG9KU09OKCkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHt9O1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0cnVjdGVkQ2FsbGJhY2soLi4uX2FyZ3MpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jb25zdHJ1Y3Rvci5leHRlbmRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0cmluZ1RvUGFyc2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChsb2Rhc2hfMS5pc1N0cmluZyh0aGlzLnRlbXBsYXRlU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmdUb1BhcnNlID0gbnVuanVja3NfMS5yZW5kZXJTdHJpbmcodGhpcy50ZW1wbGF0ZVN0cmluZywgdGhpcy50ZW1wbGF0ZVBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsb2Rhc2hfMS5pc09iamVjdCh0aGlzLnRlbXBsYXRlU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmdUb1BhcnNlID0gdGhpcy50ZW1wbGF0ZVN0cmluZy5yZW5kZXIodGhpcy50ZW1wbGF0ZVBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJpbmdUb1BhcnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzdHJpbmdUb1BhcnNlLCAndGV4dC9odG1sJyk7XG4gICAgICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoZG9jLmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkgeyB9XG4gICAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkgeyB9XG4gICAgICAgIGFkb3B0ZWRDYWxsYmFjaygpIHsgfVxuICAgICAgICBhZGRDb250cm9sbGVyKCkgeyB9XG4gICAgICAgIHJlbW92ZUNvbnRyb2xsZXIoKSB7IH1cbiAgICB9XG4gICAgQmFzZUNvbXBvbmVudC5pc0Jhc2VDb21wb25lbnQgPSB0cnVlO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIEJhc2VDb21wb25lbnQucHJvdG90eXBlLCBcImlkXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG4gICAgXSwgQmFzZUNvbXBvbmVudC5wcm90b3R5cGUsIFwiaXNCYXNlQ29tcG9uZW50XCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJjbGFzc05hbWVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuICAgIF0sIEJhc2VDb21wb25lbnQucHJvdG90eXBlLCBcInRlbXBsYXRlU3RyaW5nXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIHR5cGVvZiAoX2IgPSB0eXBlb2YgSW5kZXhTdHJ1Y3R1cmUgIT09IFwidW5kZWZpbmVkXCIgJiYgSW5kZXhTdHJ1Y3R1cmUpID09PSBcImZ1bmN0aW9uXCIgPyBfYiA6IE9iamVjdClcbiAgICBdLCBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJ0ZW1wbGF0ZVBhcmFtc1wiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCB0eXBlb2YgKF9jID0gdHlwZW9mIE1hcCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBNYXApID09PSBcImZ1bmN0aW9uXCIgPyBfYyA6IE9iamVjdCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuICAgIF0sIEJhc2VDb21wb25lbnQucHJvdG90eXBlLCBcImJpbmRpbmdzXCIsIG51bGwpO1xuICAgIHJldHVybiBCYXNlQ29tcG9uZW50O1xufVxuZXhwb3J0cy5CYXNlQ29tcG9uZW50RmFjdG9yeSA9IEJhc2VDb21wb25lbnRGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUW1GelpVTnZiWEJ2Ym1WdWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMMnhwWWk5Q1lYTmxRMjl0Y0c5dVpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVRkJMRFJDUVVFd1FqdEJRVU14UWl4dFEwRkJORU03UVVGRE5VTXNkVU5CUVd0RU8wRkJRMnhFTEN0Q1FVRnJRenRCUVVOc1F5eHpSRUZCTkVRN1FVRkROVVFzYTBSQlFYVkZPMEZCUjNaRkxEWkRRVUZ0U0R0QlFVTnVTQ3h0UkVGQmQwVTdRVUZWZUVVc1UwRkJaMElzYjBKQlFXOUNMRU5CUVhsRExHVkJRWE5DT3p0SlFWRXZSaXhOUVVGbExHRkJRV01zVTBGQlVTeGxRVUZsTzFGQmEwZG9SQ3haUVVGWkxFZEJRVWNzU1VGQlZ6dFpRVU4wUWl4TFFVRkxMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRWFJFUXl4UFFVRkZMRWRCUVZjc1UwRkJTU3hGUVVGRkxFTkJRVU03V1VGUldpeHZRa0ZCWlN4SFFVRlpMRWxCUVVrc1EwRkJRenRaUVZOb1F5eGpRVUZUTEVkQlFWY3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMWxCVlRsRUxHMUNRVUZqTEVkQlFYTkNMREJDUVVFd1FpeERRVUZETzFsQlYzaEZMRzFDUVVGakxFZEJRVzFDTEVWQlFVVXNRMEZCUXp0UlFXbENNVVFzUTBGQlF6dFJRWGhGUkN4SlFVRlhMRlZCUVZVN1dVRkRha0lzVFVGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVONFFpeE5RVUZOTEZWQlFWVXNSMEZCUnl4elFrRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeHRRa0ZCYlVJc1EwRkJjVU1zUTBGQlF6dFpRVU01Uml4SlFVRkpMRlZCUVZVc1JVRkJSVHRuUWtGRFdpeExRVUZMTEUxQlFVMHNTVUZCU1N4SlFVRkpMRlZCUVZVc1JVRkJSVHR2UWtGRE0wSXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzT0VKQlFXMUNMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdhVUpCUTNCRU8yRkJRMG83V1VGRFJDeFBRVUZQTEV0QlFVc3NRMEZCUXp0UlFVTnFRaXhEUVVGRE8xRkJkMFJYTEVsQlFXTXNVVUZCVVR0WlFVTTVRaXhOUVVGTkxGRkJRVkVzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMWxCUTNaRUxFOUJRVThzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZETTBNc1EwRkJRenRSUVdWTkxHOUNRVUZ2UWl4RFFVRkRMRWRCUVZjc1JVRkJSU3hOUVVGbExFVkJRVVVzVDBGQlowSTdXVUZEZEVVc1QwRkJUeXd5UWtGQmIwSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFMUJRVTBzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTTFSQ3hEUVVGRE8xRkJWMDBzTUVKQlFUQkNMRU5CUVVNc1IwRkJWeXhGUVVGRkxFMUJRVmNzUlVGQlJTeE5RVUZsTzFsQlEzWkZMRTlCUVU4c2FVTkJRVEJDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1JVRkJSU3hOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdVVUZEYWtVc1EwRkJRenRSUVZWTkxESkNRVUV5UWl4RFFVRkRMRWRCUVZjc1JVRkJSU3hOUVVGbE8xbEJRek5FTEU5QlFVOHNhME5CUVRKQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEVkQlFVY3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVNeFJDeERRVUZETzFGQlZVMHNXVUZCV1N4RFFVRkRMR0ZCUVhGQ0xFVkJRVVVzUzBGQllUdFpRVU53UkN4SlFVRkpMRWxCUVVrc1EwRkJReXhWUVVGVkxFbEJRVWtzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1lVRkJZU3hEUVVGRExFVkJRVVU3WjBKQlEzWkVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeGhRVUZoTERoRVFVRTRSQ3hEUVVGRExFTkJRVU03WVVGRGNFYzdXVUZEUkN4SlFVRkpMRXRCUVVzc1JVRkJSVHRuUWtGRFVDeExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMR0ZCUVdFc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dG5Ra0ZEZWtNc1RVRkJUU3hWUVVGVkxFZEJRVWNzYlVOQlFUUkNMRU5CUVVNc1NVRkJTU3hGUVVGRkxHRkJRV0VzUTBGQlF5eERRVUZETzJkQ1FVTXZSQ3hKUVVGTExFTkJRVU1zWVVGQllTeERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRPMkZCUXpORE96dG5Ra0ZCVFN4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzFGQlF5OURMRU5CUVVNN1VVRlJUU3hsUVVGbExFTkJRVU1zWVVGQmNVSTdXVUZEZUVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVlVGQlZTeEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExHRkJRV0VzUTBGQlF5eEZRVUZGTzJkQ1FVTjJSQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEVsQlFVa3NZVUZCWVN4clJVRkJhMFVzUTBGQlF5eERRVUZETzJGQlEzaEhPMWxCUTBRc1MwRkJTeXhEUVVGRExHVkJRV1VzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXp0WlFVTXZRaXhKUVVGTExFTkJRVU1zWVVGQllTeERRVUZETEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUXpORExFTkJRVU03VVVGVlRTeE5RVUZOTzFsQlExUXNUVUZCVFN4SlFVRkpMRWRCUVcxQ0xFVkJRVVVzUTBGQlF6dFpRVU5vUXl4TFFVRkxMRTFCUVUwc1IwRkJSeXhKUVVGSkxFbEJRVWtzUlVGQlJUdG5Ra0ZEY0VJc1NVRkJTU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NVMEZCVXl4RlFVRkZPMjlDUVVONlFpeE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03YjBKQlF6RkNMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTTdhVUpCUTNaQ08yRkJRMG83V1VGRFJDeFBRVUZQTEVsQlFVa3NRMEZCUXp0UlFVTm9RaXhEUVVGRE8xRkJWMU1zYlVKQlFXMUNMRU5CUVVNc1IwRkJSeXhMUVVGWk8xbEJSWHBETEVsQlFVa3NRMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJXU3hEUVVGRExFOUJRVThzUlVGQlJUdG5Ra0ZGYkVNc1NVRkJTU3hoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETzJkQ1FVTjZRaXhKUVVGSkxHbENRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhGUVVGRk8yOUNRVU12UWl4aFFVRmhMRWRCUVVjc2RVSkJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RlFVRkZMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF6dHBRa0ZETVVVN1owSkJRMFFzU1VGQlNTeHBRa0ZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUlVGQlJUdHZRa0ZETDBJc1lVRkJZU3hIUVVGakxFbEJRVWtzUTBGQlF5eGpRVUZsTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF6dHBRa0ZETDBVN1owSkJRMFFzU1VGQlNTeGhRVUZoTEVWQlFVVTdiMEpCUTJZc1RVRkJUU3hWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzI5Q1FVTjJSQ3hOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEZOQlFWTXNSVUZCUlN4RFFVRkRMR1ZCUVdVc1EwRkJReXhoUVVGaExFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdiMEpCUTNoRkxGVkJRVlVzUTBGQlF5eFhRVUZYTEVOQlFWa3NSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dHBRa0ZETVVRN1lVRkRTanRSUVVOTUxFTkJRVU03VVVGUlV5eHBRa0ZCYVVJc1MwRkJWeXhEUVVGRE8xRkJVemRDTEc5Q1FVRnZRaXhMUVVGWExFTkJRVU03VVVGVGFFTXNaVUZCWlN4TFFVRlhMRU5CUVVNN1VVRlJNMElzWVVGQllTeExRVUZYTEVOQlFVTTdVVUZSZWtJc1owSkJRV2RDTEV0QlFWY3NRMEZCUXpzN1NVRm9VR1lzTmtKQlFXVXNSMEZCV1N4SlFVRkpMRU5CUVVNN1NVRjVRakZETzFGQlFWb3NjMEpCUVZNc1JVRkJSVHM3TmtOQlFUUkNPMGxCVVRWQ08xRkJRVmdzY1VKQlFWRXNSVUZCUlRzN01FUkJRV2xFTzBsQlUyaEVPMUZCUVZnc2NVSkJRVkVzUlVGQlJUczdiMFJCUVd0R08wbEJWV3BHTzFGQlFWZ3NjVUpCUVZFc1JVRkJSVHM3ZVVSQlFXMUdPMGxCVjJ4R08xRkJRVmdzY1VKQlFWRXNSVUZCUlRzNFJFRkJNa0lzWTBGQll5eHZRa0ZCWkN4alFVRmpPM2xFUVVGTk8wbEJWVGxETzFGQlFWZ3NjVUpCUVZFc1JVRkJSVHM0UkVGQk1rSXNSMEZCUnl4dlFrRkJTQ3hIUVVGSE96dHBSRUZIZUVNN1NVRjFTMHdzVDBGQlR5eGhRVUZoTEVOQlFVTTdRVUZEZWtJc1EwRkJRenRCUVdoU1JDeHZSRUZuVWtNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEJhc2VDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuICAgIGNvbnN0cnVjdGVkQ2FsbGJhY2soKSB7IH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHsgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkgeyB9XG4gICAgYWRvcHRlZENhbGxiYWNrKCkgeyB9XG59XG5leHBvcnRzLkJhc2VDb250cm9sbGVyID0gQmFzZUNvbnRyb2xsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRbUZ6WlVOdmJuUnliMnhzWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyTnNhV1Z1ZEM5MGN5OXNhV0l2UW1GelpVTnZiblJ5YjJ4c1pYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGUFFTeE5RVUZoTEdOQlFXTTdTVUZGZGtJc1owSkJRV2RDTEVOQlFVTTdTVUZUVUN4dFFrRkJiVUlzUzBGQlN5eERRVUZETzBsQlVYcENMR2xDUVVGcFFpeExRVUZMTEVOQlFVTTdTVUZUZGtJc2IwSkJRVzlDTEV0QlFVc3NRMEZCUXp0SlFWTXhRaXhsUVVGbExFdEJRVXNzUTBGQlF6dERRVU5zUXp0QlFYUkRSQ3gzUTBGelEwTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IEJET01vZGVsXzEgPSByZXF1aXJlKFwifmJkby9saWIvQkRPTW9kZWxcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmNsaWVudC91dGlscy91dGlsXCIpO1xubGV0IENsaWVudE1vZGVsID0gY2xhc3MgQ2xpZW50TW9kZWwgZXh0ZW5kcyBCRE9Nb2RlbF8xLkJET01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5pc0NsaWVudE1vZGVsID0gdHJ1ZTtcbiAgICB9XG4gICAgZ2V0TmFtZXNwYWNlZFN0b3JhZ2Uoa2V5LCBuc1Byb3AsIGZvcmNlTlMpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxfMS5nZXROYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5zUHJvcCwgZm9yY2VOUyk7XG4gICAgfVxuICAgIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGtleSwgbmV3VmFsLCBuc1Byb3ApIHtcbiAgICAgICAgcmV0dXJuIHV0aWxfMS5zZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5ld1ZhbCwgbnNQcm9wKTtcbiAgICB9XG4gICAgZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlKGtleSwgbnNQcm9wKSB7XG4gICAgICAgIHJldHVybiB1dGlsXzEuZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlKHRoaXMsIGtleSwgbnNQcm9wKTtcbiAgICB9XG4gICAgYXN5bmMgc2F2ZSgpIHtcbiAgICB9XG59O1xuQ2xpZW50TW9kZWwuaXNDbGllbnRNb2RlbCA9IHRydWU7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG5dLCBDbGllbnRNb2RlbC5wcm90b3R5cGUsIFwiaXNDbGllbnRNb2RlbFwiLCB2b2lkIDApO1xuQ2xpZW50TW9kZWwgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoKVxuXSwgQ2xpZW50TW9kZWwpO1xuZXhwb3J0cy5DbGllbnRNb2RlbCA9IENsaWVudE1vZGVsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTJ4cFpXNTBUVzlrWld3dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyTnNhV1Z1ZEM5MGN5OXNhV0l2UTJ4cFpXNTBUVzlrWld3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc2MwUkJRV3RGTzBGQlEyeEZMR2RFUVVFMlF6dEJRVU0zUXl3MlEwRkJiVWc3UVVGWGJrZ3NTVUZCWVN4WFFVRlhMRWRCUVhoQ0xFMUJRV0VzVjBGQldTeFRRVUZSTEcxQ1FVRlJPMGxCUkhwRE96dFJRVzFDWjBNc2EwSkJRV0VzUjBGQldTeEpRVUZKTEVOQlFVTTdTVUZwUkRsRUxFTkJRVU03U1VGMFExVXNiMEpCUVc5Q0xFTkJRVU1zUjBGQlZ5eEZRVUZGTEUxQlFXVXNSVUZCUlN4UFFVRm5RanRSUVVOMFJTeFBRVUZQTERKQ1FVRnZRaXhEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVWQlFVVXNUVUZCVFN4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8wbEJRelZFTEVOQlFVTTdTVUZYVFN3d1FrRkJNRUlzUTBGQlF5eEhRVUZYTEVWQlFVVXNUVUZCVnl4RlFVRkZMRTFCUVdVN1VVRkRka1VzVDBGQlR5eHBRMEZCTUVJc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEUxQlFVMHNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRKUVVOcVJTeERRVUZETzBsQlZVMHNNa0pCUVRKQ0xFTkJRVU1zUjBGQlZ5eEZRVUZGTEUxQlFXVTdVVUZETTBRc1QwRkJUeXhyUTBGQk1rSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNN1NVRlBUU3hMUVVGTExFTkJRVU1zU1VGQlNUdEpRVVZxUWl4RFFVRkRPME5CUlVvc1EwRkJRVHRCUVhwRU1FSXNlVUpCUVdFc1IwRkJXU3hKUVVGSkxFTkJRVU03UVVGUmVrTTdTVUZCV0N4eFFrRkJVU3hGUVVGRk96dHJSRUZCSzBNN1FVRnNRbXBFTEZkQlFWYzdTVUZFZGtJc05FSkJRV1VzUlVGQlJUdEhRVU5NTEZkQlFWY3NRMEZ0UlhaQ08wRkJia1ZaTEd0RFFVRlhJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBCRE9Sb3V0ZV8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET1JvdXRlXCIpO1xuY29uc3QgbG9kYXNoXzEgPSByZXF1aXJlKFwibG9kYXNoXCIpO1xuY29uc3QgTG9nZ2VyXzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvTG9nZ2VyXCIpO1xuY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcl8xLkxvZ2dlcigpO1xuY2xhc3MgQ2xpZW50Um91dGUgZXh0ZW5kcyBCRE9Sb3V0ZV8xLkJET1JvdXRlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5pc0NsaWVudFJvdXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgZ2V0IHJvdXRlcigpIHtcbiAgICAgICAgY29uc3Qgcm91dGVzID0ge307XG4gICAgICAgIGZvciAoY29uc3Qgcm91dGUgb2YgdGhpcy5yb3V0ZXMpIHtcbiAgICAgICAgICAgIHJvdXRlc1tgJHt0aGlzLnJvdXRlck5hbWVTcGFjZX0vJHtyb3V0ZX1gLnJlcGxhY2UoXCIvL1wiLCBcIi9cIildID0gdGhpcy5oYW5kbGVHZXQuYmluZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm91dGVzO1xuICAgIH1cbiAgICBhc3luYyB0ZW1wbGF0ZVBhcmFtcyhwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnRlbXBsYXRlUGFyYW1zKHBhcmFtcyk7XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZUdldChwYXJhbXMpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyhsb2Rhc2hfMS5tZXJnZShhd2FpdCB0aGlzLnRlbXBsYXRlUGFyYW1zRnJvbVNlcnZlcigpLCBhd2FpdCB0aGlzLnRlbXBsYXRlUGFyYW1zKHBhcmFtcykpKTtcbiAgICB9XG4gICAgYXN5bmMgdGVtcGxhdGVQYXJhbXNGcm9tU2VydmVyKCkge1xuICAgICAgICBsZXQgdXJsVG9Bc2tGb3IgPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgaWYgKCF1cmxUb0Fza0ZvcilcbiAgICAgICAgICAgIHVybFRvQXNrRm9yID0gYC9gO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnWC1HYW1lLUFzLUpTT04nOiAndHJ1ZScgfSk7XG4gICAgICAgIHJldHVybiAoYXdhaXQgZmV0Y2godXJsVG9Bc2tGb3IsIHsgaGVhZGVycyB9KSkuanNvbigpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ2xpZW50Um91dGUgPSBDbGllbnRSb3V0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyeHBaVzUwVW05MWRHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMk5zYVdWdWRDOTBjeTlzYVdJdlEyeHBaVzUwVW05MWRHVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTeG5SRUZCTmtNN1FVRkROME1zYlVOQlFTdENPMEZCUXk5Q0xDdERRVUUwUXp0QlFVVTFReXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEdWQlFVMHNSVUZCUlN4RFFVRkRPMEZCVlRWQ0xFMUJRV0VzVjBGQldTeFRRVUZSTEcxQ1FVRlJPMGxCUVhwRE96dFJRVkZ2UWl4clFrRkJZU3hIUVVGWkxFbEJRVWtzUTBGQlF6dEpRWE5FYkVRc1EwRkJRenRKUVRsRFJ5eEpRVUZYTEUxQlFVMDdVVUZEWWl4TlFVRk5MRTFCUVUwc1IwRkJVU3hGUVVGRkxFTkJRVU03VVVGRGRrSXNTMEZCU3l4TlFVRk5MRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzFsQlF6ZENMRTFCUVUwc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eGxRVUZsTEVsQlFVa3NTMEZCU3l4RlFVRkZMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMU5CUXpkR08xRkJRMFFzVDBGQlR5eE5RVUZOTEVOQlFVTTdTVUZEYkVJc1EwRkJRenRKUVZkVExFdEJRVXNzUTBGQlF5eGpRVUZqTEVOQlFVTXNUVUZCYzBJN1VVRkRha1FzVDBGQlR5eExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRM2hETEVOQlFVTTdTVUZUVXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRWE5DTzFGQlF6VkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zWTBGQlN5eERRVUZETEUxQlFVMHNTVUZCU1N4RFFVRkRMSGRDUVVGM1FpeEZRVUZGTEVWQlFVVXNUVUZCVFN4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTm9SeXhEUVVGRE8wbEJWVThzUzBGQlN5eERRVUZETEhkQ1FVRjNRanRSUVVOc1F5eEpRVUZKTEZkQlFWY3NSMEZCUnl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRE8xRkJRM0JETEVsQlFVa3NRMEZCUXl4WFFVRlhPMWxCUVVVc1YwRkJWeXhIUVVGSExFZEJRVWNzUTBGQlF6dFJRVU53UXl4TlFVRk5MRTlCUVU4c1IwRkJSeXhKUVVGSkxFOUJRVThzUTBGQlF5eEZRVUZGTEdkQ1FVRm5RaXhGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETVVRc1QwRkJUeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEZkQlFWY3NSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0SlFVTXhSQ3hEUVVGRE8wTkJRMG83UVVFNVJFUXNhME5CT0VSREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJET0NvbmZpZ01hbmFnZXJfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Db25maWdNYW5hZ2VyXCIpO1xuY2xhc3MgQ29uZmlnTWFuYWdlciBleHRlbmRzIEJET0NvbmZpZ01hbmFnZXJfMS5CRE9Db25maWdNYW5hZ2VyIHtcbiAgICBzZXQoX2NvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIGxvYWQoX2NvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIGdldENhY2hlKF9jb25maWcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgICBzZXRDYWNoZShfY29uZmlnLCBfdmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29uZmlnTWFuYWdlciA9IENvbmZpZ01hbmFnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMjl1Wm1sblRXRnVZV2RsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyeHBZaTlEYjI1bWFXZE5ZVzVoWjJWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc1owVkJRVFpFTzBGQldUZEVMRTFCUVdFc1lVRkJZeXhUUVVGUkxHMURRVUZuUWp0SlFWTjRReXhIUVVGSExFTkJRVU1zVDBGQlpUdFJRVU4wUWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExIbENRVUY1UWl4RFFVRkRMRU5CUVVNN1NVRkRMME1zUTBGQlF6dEpRVlZUTEVsQlFVa3NRMEZCUXl4UFFVRmxPMUZCUXpGQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU1zUTBGQlF6dEpRVU12UXl4RFFVRkRPMGxCVlZNc1VVRkJVU3hEUVVGRExFOUJRV1U3VVVGRE9VSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4RFFVRkRPMGxCUXk5RExFTkJRVU03U1VGWFV5eFJRVUZSTEVOQlFVTXNUMEZCWlN4RlFVRkZMRTFCUVZjN1VVRkRNME1zVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eERRVUZETzBsQlF5OURMRU5CUVVNN1EwRkRTanRCUVdwRVJDeHpRMEZwUkVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfYTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5cInVzZSBzdHJpY3RcIjtcbmNvbnN0IEJET0xvZ2dlcl8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET0xvZ2dlclwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5sZXQgTG9nZ2VyID0gY2xhc3MgTG9nZ2VyIGV4dGVuZHMgQkRPTG9nZ2VyXzEuQkRPTG9nZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICAgICAgc3VwZXIocGFyYW1zKTtcbiAgICAgICAgdGhpcy5sb2dMZXZlbENvbG9ycyA9IHtcbiAgICAgICAgICAgIGxvZzogJ2NvbG9yOiBncmF5OyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgICAgICAgICAgZGVidWc6ICdjb2xvcjogZ3JlZW47IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICBpbmZvOiAnY29sb3I6ICMwMDgwNkI7IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICB3YXJuOiAnY29sb3I6ICM4MDgwMDA7IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICBlcnJvcjogJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkOydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0SGVhZGVyKGxvZ0xldmVsLCBwcmludEVudiA9ICdjb25zb2xlJykge1xuICAgICAgICBjb25zdCBwcm9jSW5mbyA9IHRoaXMuZ2V0UHJvY0luZm8oKTtcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lKCk7XG4gICAgICAgIGNvbnN0IHVwcGVyTG9nTGV2ZWwgPSBsb2dMZXZlbC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2dQb2ludCA9IHRoaXMuZ2V0TG9nUG9pbnQoKTtcbiAgICAgICAgY29uc3QgcmVzZXRTdHlsZSA9ICdjb2xvcjogYmxhY2s7IGZvbnQtd2VpZ2h0OiBub3JtYWwnO1xuICAgICAgICBjb25zdCBtYWdlbnRhID0gJ2NvbG9yOiAjODAwMDgwOyBmb250LXdlaWdodDogbm9ybWFsJztcbiAgICAgICAgY29uc3QgY3lhbiA9ICdjb2xvcjogIzAwODA2QjsgZm9udC13ZWlnaHQ6IG5vcm1hbCc7XG4gICAgICAgIGlmIChwcmludEVudiA9PT0gJ2NvbnNvbGUnKSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRMb2dMZXZlbCA9IHRoaXMubG9nTGV2ZWxDb2xvcnNbbG9nTGV2ZWxdO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkTG9nUG9pbnQgPSBtYWdlbnRhO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkVGltZSA9IGN5YW47XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRQcm9jSW5mbyA9IG1hZ2VudGE7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIGAlY1slYyR7dXBwZXJMb2dMZXZlbH0gJWMtICVjJHtwcm9jSW5mb30gJWMtICVjJHtjdXJyZW50VGltZX0gJWNhdCAlYyR7bG9nUG9pbnR9JWNdYCxcbiAgICAgICAgICAgICAgICByZXNldFN0eWxlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZExvZ0xldmVsLFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkUHJvY0luZm8sXG4gICAgICAgICAgICAgICAgcmVzZXRTdHlsZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRUaW1lLFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkTG9nUG9pbnQsXG4gICAgICAgICAgICAgICAgcmVzZXRTdHlsZVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYFske3VwcGVyTG9nTGV2ZWx9IC0gJHtwcm9jSW5mb30gLSAke2N1cnJlbnRUaW1lfSAtICR7bG9nUG9pbnR9XWA7XG4gICAgfVxuICAgIHdyaXRlVG9GaWxlKF9sb2dMZXZlbCwgX21lc3NhZ2UpIHtcbiAgICB9XG59O1xuTG9nZ2VyID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgQ29uc3RQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIgJiYgQ29uc3RQYXJhbXMpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdF0pXG5dLCBMb2dnZXIpO1xuZXhwb3J0cy5Mb2dnZXIgPSBMb2dnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lURzluWjJWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOWpiR2xsYm5RdmRITXZiR2xpTDB4dloyZGxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTEd0RVFVRTJSVHRCUVVNM1JTeHpSRUZCZDBRN1FVRlZlRVFzU1VGQllTeE5RVUZOTEVkQlFXNUNMRTFCUVdFc1RVRkJUeXhUUVVGUkxIRkNRVUZUTzBsQlpXcERMRmxCUVZrc1RVRkJORUk3VVVGRGNFTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJWRllzYlVKQlFXTXNSMEZCUnp0WlFVTnlRaXhIUVVGSExFVkJRVVVzYVVOQlFXbERPMWxCUTNSRExFdEJRVXNzUlVGQlJTeHJRMEZCYTBNN1dVRkRla01zU1VGQlNTeEZRVUZGTEc5RFFVRnZRenRaUVVNeFF5eEpRVUZKTEVWQlFVVXNiME5CUVc5RE8xbEJRekZETEV0QlFVc3NSVUZCUlN4blEwRkJaME03VTBGRE1VTXNRMEZCUXp0SlFVbEdMRU5CUVVNN1NVRlhVeXhUUVVGVExFTkJRVU1zVVVGQmJVSXNSVUZCUlN4WFFVRTRRaXhUUVVGVE8xRkJRelZGTEUxQlFVMHNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dFJRVU53UXl4TlFVRk5MRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdVVUZEZGtNc1RVRkJUU3hoUVVGaExFZEJRVWNzVVVGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUXpkRExFMUJRVTBzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRSUVVOd1F5eE5RVUZOTEZWQlFWVXNSMEZCUnl4dFEwRkJiVU1zUTBGQlF6dFJRVU4yUkN4TlFVRk5MRTlCUVU4c1IwRkJSeXh4UTBGQmNVTXNRMEZCUXp0UlFVTjBSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eHhRMEZCY1VNc1EwRkJRenRSUVVOdVJDeEpRVUZKTEZGQlFWRXNTMEZCU3l4VFFVRlRMRVZCUVVVN1dVRkRlRUlzVFVGQlRTeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMWxCUTNoRUxFMUJRVTBzYVVKQlFXbENMRWRCUVVjc1QwRkJUeXhEUVVGRE8xbEJRMnhETEUxQlFVMHNZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVNelFpeE5RVUZOTEdsQ1FVRnBRaXhIUVVGSExFOUJRVThzUTBGQlF6dFpRVU5zUXl4UFFVRlBPMmRDUVVOSUxGRkJRVkVzWVVGQllTeFZRVUZWTEZGQlFWRXNWVUZCVlN4WFFVRlhMRmRCUVZjc1VVRkJVU3hMUVVGTE8yZENRVU53Uml4VlFVRlZPMmRDUVVOV0xHbENRVUZwUWp0blFrRkRha0lzVlVGQlZUdG5Ra0ZEVml4cFFrRkJhVUk3WjBKQlEycENMRlZCUVZVN1owSkJRMVlzWVVGQllUdG5Ra0ZEWWl4VlFVRlZPMmRDUVVOV0xHbENRVUZwUWp0blFrRkRha0lzVlVGQlZUdGhRVU5pTEVOQlFVTTdVMEZEVER0UlFVTkVMRTlCUVU4c1NVRkJTU3hoUVVGaExFMUJRVTBzVVVGQlVTeE5RVUZOTEZkQlFWY3NUVUZCVFN4UlFVRlJMRWRCUVVjc1EwRkJRenRKUVVNM1JTeERRVUZETzBsQlZWTXNWMEZCVnl4RFFVRkRMRk5CUVc5Q0xFVkJRVVVzVVVGQllUdEpRVVY2UkN4RFFVRkRPME5CUTBvc1EwRkJRVHRCUVhCRldTeE5RVUZOTzBsQlJHeENMRFJDUVVGbExFVkJRVVU3YVVWQlowSlBMRmRCUVZjc2IwSkJRVmdzVjBGQlZ6dEhRV1oyUWl4TlFVRk5MRU5CYjBWc1FqdEJRWEJGV1N4M1FrRkJUU0o5IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBCRE9UZXN0XzEgPSByZXF1aXJlKFwifmJkby9tb2RlbHMvQkRPVGVzdFwiKTtcbmNvbnN0IENsaWVudE1vZGVsXzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQ2xpZW50TW9kZWxcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xubGV0IFRlc3QgPSBjbGFzcyBUZXN0IGV4dGVuZHMgQkRPVGVzdF8xLkJET1Rlc3RGYWN0b3J5KENsaWVudE1vZGVsXzEuQ2xpZW50TW9kZWwpIHtcbiAgICBjb25zdHJ1Y3RvcihfcGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHRlc3QoKSB7XG4gICAgfVxufTtcblRlc3QgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoeyBjb2xsZWN0aW9uTmFtZTogXCJUZXN0XCIgfSksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgQ29uc3RQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIgJiYgQ29uc3RQYXJhbXMpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdF0pXG5dLCBUZXN0KTtcbmV4cG9ydHMuVGVzdCA9IFRlc3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWR1Z6ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyMXZaR1ZzY3k5VVpYTjBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN08wRkJRVUVzYVVSQlFYRkVPMEZCUTNKRUxIbEVRVUZ6UkR0QlFVTjBSQ3h6UkVGQmQwUTdRVUZWZUVRc1NVRkJZU3hKUVVGSkxFZEJRV3BDTEUxQlFXRXNTVUZCU3l4VFFVRlJMSGRDUVVGakxFTkJRVU1zZVVKQlFWY3NRMEZCUXp0SlFVVnFSQ3haUVVGWkxFOUJRVEpDTzFGQlEyNURMRXRCUVVzc1JVRkJSU3hEUVVGRE8wbEJRMW9zUTBGQlF6dEpRVTlOTEVsQlFVazdTVUZGV0N4RFFVRkRPME5CUTBvc1EwRkJRVHRCUVdSWkxFbEJRVWs3U1VGRWFFSXNORUpCUVdVc1EwRkJReXhGUVVGRkxHTkJRV01zUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXp0cFJVRkhiRUlzVjBGQlZ5eHZRa0ZCV0N4WFFVRlhPMGRCUm5oQ0xFbEJRVWtzUTBGamFFSTdRVUZrV1N4dlFrRkJTU0o5IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBCRE9UZXN0MV8xID0gcmVxdWlyZShcIn5iZG8vbW9kZWxzL0JET1Rlc3QxXCIpO1xuY29uc3QgVGVzdF8xID0gcmVxdWlyZShcIn5jbGllbnQvbW9kZWxzL1Rlc3RcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xubGV0IFRlc3QxID0gY2xhc3MgVGVzdDEgZXh0ZW5kcyBCRE9UZXN0MV8xLkJET1Rlc3QxRmFjdG9yeShUZXN0XzEuVGVzdCkge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgICAgICBzdXBlcihwYXJhbXMpO1xuICAgIH1cbiAgICB3YWRkZSgpIHtcbiAgICAgICAgdGhpcy5iaW5kaW5ncy5nZXQoXCJ0aXRsZVwiKTtcbiAgICB9XG59O1xuVGVzdDEgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoeyBjb2xsZWN0aW9uTmFtZTogXCJUZXN0MVwiIH0pLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIENvbnN0UGFyYW1zICE9PSBcInVuZGVmaW5lZFwiICYmIENvbnN0UGFyYW1zKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3RdKVxuXSwgVGVzdDEpO1xuZXhwb3J0cy5UZXN0MSA9IFRlc3QxO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVkdWemRERXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMk5zYVdWdWRDOTBjeTl0YjJSbGJITXZWR1Z6ZERFdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3UVVGRFFTeHRSRUZCZFVRN1FVRkRka1FzT0VOQlFUSkRPMEZCUXpORExITkVRVUYzUkR0QlFWVjRSQ3hKUVVGaExFdEJRVXNzUjBGQmJFSXNUVUZCWVN4TFFVRk5MRk5CUVZFc01FSkJRV1VzUTBGQlF5eFhRVUZKTEVOQlFVTTdTVUZGTlVNc1dVRkJXU3hOUVVFeVFqdFJRVU51UXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGJFSXNRMEZCUXp0SlFVOU5MRXRCUVVzN1VVRkRVaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRKUVVNdlFpeERRVUZETzBOQlEwb3NRMEZCUVR0QlFXUlpMRXRCUVVzN1NVRkVha0lzTkVKQlFXVXNRMEZCUXl4RlFVRkZMR05CUVdNc1JVRkJSU3hQUVVGUExFVkJRVVVzUTBGQlF6dHBSVUZIY0VJc1YwRkJWeXh2UWtGQldDeFhRVUZYTzBkQlJuWkNMRXRCUVVzc1EwRmpha0k3UVVGa1dTeHpRa0ZCU3lKOSIsInZhciBtYXAgPSB7XG5cdFwiLi9Db25maWcudHNcIjogXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9Db25maWcudHNcIixcblx0XCIuL0dhbWVMb2JieS50c1wiOiBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0dhbWVMb2JieS50c1wiLFxuXHRcIi4vSG9tZS50c1wiOiBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0hvbWUudHNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwudHMkXCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBDbGllbnRSb3V0ZV8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0NsaWVudFJvdXRlXCIpO1xuY29uc3QgQkRPQ29uZmlnXzEgPSByZXF1aXJlKFwifmJkby9yb3V0ZXMvQkRPQ29uZmlnXCIpO1xuY2xhc3MgQ29uZmlnIGV4dGVuZHMgQkRPQ29uZmlnXzEuQkRPQ29uZmlnRmFjdG9yeShDbGllbnRSb3V0ZV8xLkNsaWVudFJvdXRlKSB7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBDb25maWc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMjl1Wm1sbkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOWpiR2xsYm5RdmRITXZjbTkxZEdWekwwTnZibVpwWnk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTEhsRVFVRnpSRHRCUVVOMFJDeHhSRUZCZVVRN1FVRlhla1FzVFVGQmNVSXNUVUZCVHl4VFFVRlJMRFJDUVVGblFpeERRVUZETEhsQ1FVRlhMRU5CUVVNN1EwRkJTVHRCUVVGeVJTeDVRa0ZCY1VVaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENsaWVudFJvdXRlXzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQ2xpZW50Um91dGVcIik7XG5jb25zdCBCRE9HYW1lTG9iYnlfMSA9IHJlcXVpcmUoXCJ+YmRvL3JvdXRlcy9CRE9HYW1lTG9iYnlcIik7XG5jbGFzcyBHYW1lTG9iYnkgZXh0ZW5kcyBCRE9HYW1lTG9iYnlfMS5CRE9HYW1lTG9iYnlGYWN0b3J5KENsaWVudFJvdXRlXzEuQ2xpZW50Um91dGUpIHtcbiAgICBhc3luYyB0ZW1wbGF0ZVBhcmFtcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRlc3Q6ICdsb2wnXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gR2FtZUxvYmJ5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUjJGdFpVeHZZbUo1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5amJHbGxiblF2ZEhNdmNtOTFkR1Z6TDBkaGJXVk1iMkppZVM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTEhsRVFVRnpSRHRCUVVOMFJDd3lSRUZCSzBRN1FVRlRMMFFzVFVGQmNVSXNVMEZCVlN4VFFVRlJMR3REUVVGdFFpeERRVUZETEhsQ1FVRlhMRU5CUVVNN1NVRlZla1FzUzBGQlN5eERRVUZETEdOQlFXTTdVVUZETVVJc1QwRkJUenRaUVVOSUxFbEJRVWtzUlVGQlJTeExRVUZMTzFOQlEyUXNRMEZCUXp0SlFVTk9MRU5CUVVNN1EwRkRTanRCUVdaRUxEUkNRV1ZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ2xpZW50Um91dGVfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9DbGllbnRSb3V0ZVwiKTtcbmNvbnN0IEJET0hvbWVfMSA9IHJlcXVpcmUoXCJ+YmRvL3JvdXRlcy9CRE9Ib21lXCIpO1xuY2xhc3MgSG9tZSBleHRlbmRzIEJET0hvbWVfMS5CRE9Ib21lRmFjdG9yeShDbGllbnRSb3V0ZV8xLkNsaWVudFJvdXRlKSB7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBIb21lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pU0c5dFpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMM0p2ZFhSbGN5OUliMjFsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUVzZVVSQlFYTkVPMEZCUTNSRUxHbEVRVUZ4UkR0QlFWTnlSQ3hOUVVGeFFpeEpRVUZMTEZOQlFWRXNkMEpCUVdNc1EwRkJReXg1UWtGQlZ5eERRVUZETzBOQlFVazdRVUZCYWtVc2RVSkJRV2xGSW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuZnVuY3Rpb24gc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2UoaW5zdGFuY2UsIGtleSwgbmV3VmFsLCBuc1Byb3AgPSBcImlkXCIpIHtcbiAgICBpZiAoa2V5ID09PSBcIipcIilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiKiBpcyBhIHNwZWNpYWwgY2hhcmFjdGVyIGFuZCBkb2VzIG5vdCBmb2xsb3cgdGhlIHByb3BlcnR5IGNvbnZlbnRpb25cIik7XG4gICAgY29uc3QgbnNQcmVmaXggPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoaW5zdGFuY2UuY29uc3RydWN0b3IpLm5hbWU7XG4gICAgbGV0IG5zU3VmZml4ID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShpbnN0YW5jZSwgXCJvbGRTdG9yYWdlTnNTdWZmaXhcIik7XG4gICAgbGV0IHN0b3JhZ2VWYWx1ZTtcbiAgICBpZiAoIW5zU3VmZml4KVxuICAgICAgICBuc1N1ZmZpeCA9IGluc3RhbmNlW25zUHJvcF07XG4gICAgbGV0IG5zID0gYCR7bnNQcmVmaXh9XyR7bnNTdWZmaXh9YDtcbiAgICBpZiAoa2V5ID09PSBuc1Byb3AgfHwgbnNTdWZmaXggIT09IGluc3RhbmNlW25zUHJvcF0pIHtcbiAgICAgICAgbnNTdWZmaXggPSBrZXkgPT09IG5zUHJvcCA/IG5ld1ZhbCA6IGluc3RhbmNlW25zUHJvcF07XG4gICAgICAgIGNvbnN0IG5ld05zID0gYCR7bnNQcmVmaXh9XyR7bnNTdWZmaXh9YDtcbiAgICAgICAgc3RvcmFnZVZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obnMpO1xuICAgICAgICBpZiAoc3RvcmFnZVZhbHVlKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShucyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuZXdOcywgc3RvcmFnZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBucyA9IG5ld05zO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3RvcmFnZVZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obnMpO1xuICAgICAgICBpZiAoc3RvcmFnZVZhbHVlKSB7XG4gICAgICAgICAgICBzdG9yYWdlVmFsdWUgPSBKU09OLnBhcnNlKHN0b3JhZ2VWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgc3RvcmFnZVZhbHVlID0ge307XG4gICAgICAgIGlmIChuZXdWYWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGVsZXRlIHN0b3JhZ2VWYWx1ZVtrZXldO1xuICAgICAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhzdG9yYWdlVmFsdWUpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShucywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZVZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obnMsIEpTT04uc3RyaW5naWZ5KE9iamVjdC5hc3NpZ24oc3RvcmFnZVZhbHVlLCB7IFtrZXldOiBuZXdWYWwgfSkpKTtcbiAgICB9XG4gICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YShpbnN0YW5jZSwgXCJvbGRTdG9yYWdlTnNTdWZmaXhcIiwgbnNTdWZmaXgpO1xufVxuZXhwb3J0cy5zZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSA9IHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlO1xuZnVuY3Rpb24gZ2V0TmFtZXNwYWNlZFN0b3JhZ2UoaW5zdGFuY2UsIGtleSwgbnNQcm9wID0gXCJpZFwiLCBmb3JjZU5TKSB7XG4gICAgY29uc3QgbnNQcmVmaXggPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoaW5zdGFuY2UuY29uc3RydWN0b3IpLm5hbWU7XG4gICAgbGV0IG5zU3VmZml4ID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShpbnN0YW5jZSwgXCJvbGRTdG9yYWdlTnNTdWZmaXhcIik7XG4gICAgaWYgKG5zU3VmZml4ICE9PSBpbnN0YW5jZVtuc1Byb3BdKVxuICAgICAgICBuc1N1ZmZpeCA9IGluc3RhbmNlW25zUHJvcF07XG4gICAgaWYgKGZvcmNlTlMpXG4gICAgICAgIG5zU3VmZml4ID0gZm9yY2VOUztcbiAgICBsZXQgc3RvcmFnZVZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7bnNQcmVmaXh9XyR7bnNTdWZmaXh9YCk7XG4gICAgaWYgKHN0b3JhZ2VWYWx1ZSlcbiAgICAgICAgc3RvcmFnZVZhbHVlID0gSlNPTi5wYXJzZShzdG9yYWdlVmFsdWUpO1xuICAgIGlmIChzdG9yYWdlVmFsdWUgJiYga2V5ID09PSBcIipcIilcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VWYWx1ZTtcbiAgICBpZiAoc3RvcmFnZVZhbHVlICYmIGtleSBpbiBzdG9yYWdlVmFsdWUpXG4gICAgICAgIHJldHVybiBzdG9yYWdlVmFsdWVba2V5XTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZXhwb3J0cy5nZXROYW1lc3BhY2VkU3RvcmFnZSA9IGdldE5hbWVzcGFjZWRTdG9yYWdlO1xuZnVuY3Rpb24gZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBrZXksIG5zUHJvcCA9IFwiaWRcIikge1xuICAgIGlmIChrZXkgPT09IFwiKlwiKSB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBnZXROYW1lc3BhY2VkU3RvcmFnZShpbnN0YW5jZSwga2V5LCBuc1Byb3ApO1xuICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gc3RvcmFnZSkge1xuICAgICAgICAgICAgaWYgKHN0b3JhZ2UuaGFzT3duUHJvcGVydHkocHJvcCkpXG4gICAgICAgICAgICAgICAgc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2UoaW5zdGFuY2UsIHByb3AsIHVuZGVmaW5lZCwgbnNQcm9wKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBrZXksIHVuZGVmaW5lZCwgbnNQcm9wKTtcbn1cbmV4cG9ydHMuZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlID0gZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhScGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMM1YwYVd4ekwzVjBhV3d1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3hyUkVGQmEwVTdRVUZWYkVVc1UwRkJaMElzTUVKQlFUQkNMRU5CUVVNc1VVRkJZU3hGUVVGRkxFZEJRVmNzUlVGQlJTeE5RVUZYTEVWQlFVVXNVMEZCYVVJc1NVRkJTVHRKUVVOeVJ5eEpRVUZKTEVkQlFVY3NTMEZCU3l4SFFVRkhPMUZCUVVVc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHpSVUZCYzBVc1EwRkJReXhEUVVGRE8wbEJSM3BITEUxQlFVMHNVVUZCVVN4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJRenRKUVVOc1JTeEpRVUZKTEZGQlFWRXNSMEZCUnl4elFrRkJWeXhEUVVGRExGRkJRVkVzUlVGQlJTeHZRa0ZCYjBJc1EwRkJReXhEUVVGRE8wbEJRek5FTEVsQlFVa3NXVUZCYVVJc1EwRkJRenRKUVVkMFFpeEpRVUZKTEVOQlFVTXNVVUZCVVR0UlFVRkZMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdTVUZETTBNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUjBGQlJ5eFJRVUZSTEVsQlFVa3NVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkRia01zU1VGQlNTeEhRVUZITEV0QlFVc3NUVUZCVFN4SlFVRkpMRkZCUVZFc1MwRkJTeXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVTdVVUZGYWtRc1VVRkJVU3hIUVVGSExFZEJRVWNzUzBGQlN5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTNSRUxFMUJRVTBzUzBGQlN5eEhRVUZITEVkQlFVY3NVVUZCVVN4SlFVRkpMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJRM2hETEZsQlFWa3NSMEZCUnl4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEzaERMRWxCUVVrc1dVRkJXU3hGUVVGRk8xbEJRMlFzV1VGQldTeERRVUZETEZWQlFWVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVNMVFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF6dFRRVU0zUXp0UlFVTkVMRVZCUVVVc1IwRkJSeXhMUVVGTExFTkJRVU03UzBGRFpEdFRRVUZOTzFGQlJVZ3NXVUZCV1N4SFFVRkhMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEZUVNc1NVRkJTU3haUVVGWkxFVkJRVVU3V1VGRFpDeFpRVUZaTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dFRRVU16UXpzN1dVRkJUU3haUVVGWkxFZEJRVWNzUlVGQlJTeERRVUZETzFGQlJYcENMRWxCUVVrc1RVRkJUU3hMUVVGTExGTkJRVk1zUlVGQlJUdFpRVU4wUWl4UFFVRlBMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU42UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVN1owSkJRMjVETEZsQlFWa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03WVVGREwwSTdPMmRDUVVGTkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTnFSVHM3V1VGQlRTeFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1JVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1dVRkJXU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dExRVU51Unp0SlFVVkVMSGxDUVVGakxFTkJRVU1zVVVGQlVTeEZRVUZGTEc5Q1FVRnZRaXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzBGQlF6ZEVMRU5CUVVNN1FVRnlRMFFzWjBWQmNVTkRPMEZCYTBKRUxGTkJRV2RDTEc5Q1FVRnZRaXhEUVVGRExGRkJRV0VzUlVGQlJTeEhRVUZYTEVWQlFVVXNVMEZCYVVJc1NVRkJTU3hGUVVGRkxFOUJRV2RDTzBsQlEzQkhMRTFCUVUwc1VVRkJVU3hIUVVGSExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU5zUlN4SlFVRkpMRkZCUVZFc1IwRkJSeXh6UWtGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4dlFrRkJiMElzUTBGQlF5eERRVUZETzBsQlF6TkVMRWxCUVVrc1VVRkJVU3hMUVVGTExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZCUlN4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlF5OUVMRWxCUVVrc1QwRkJUenRSUVVGRkxGRkJRVkVzUjBGQlJ5eFBRVUZQTEVOQlFVTTdTVUZEYUVNc1NVRkJTU3haUVVGWkxFZEJRVkVzV1VGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRkZCUVZFc1NVRkJTU3hSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEzaEZMRWxCUVVrc1dVRkJXVHRSUVVGRkxGbEJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8wbEJRekZFTEVsQlFVa3NXVUZCV1N4SlFVRkpMRWRCUVVjc1MwRkJTeXhIUVVGSE8xRkJRVVVzVDBGQlR5eFpRVUZaTEVOQlFVTTdTVUZEY2tRc1NVRkJTU3haUVVGWkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEZsQlFWazdVVUZCUlN4UFFVRlBMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU5zUlN4UFFVRlBMRk5CUVZNc1EwRkJRenRCUVVOeVFpeERRVUZETzBGQlZrUXNiMFJCVlVNN1FVRlhSQ3hUUVVGblFpd3lRa0ZCTWtJc1EwRkJReXhSUVVGaExFVkJRVVVzUjBGQlZ5eEZRVUZGTEZOQlFXbENMRWxCUVVrN1NVRkRla1lzU1VGQlNTeEhRVUZITEV0QlFVc3NSMEZCUnl4RlFVRkZPMUZCUTJJc1RVRkJUU3hQUVVGUExFZEJRVWNzYjBKQlFXOUNMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTTFSQ3hMUVVGTExFMUJRVTBzU1VGQlNTeEpRVUZKTEU5QlFVOHNSVUZCUlR0WlFVTjRRaXhKUVVGSkxFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRPMmRDUVVGRkxEQkNRVUV3UWl4RFFVRkRMRkZCUVZFc1JVRkJSU3hKUVVGSkxFVkJRVVVzVTBGQlV5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMU5CUTI1SE8wdEJRMG83TzFGQlFVMHNNRUpCUVRCQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlFVY3NSVUZCUlN4VFFVRlRMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03UVVGRGVFVXNRMEZCUXp0QlFWQkVMR3RGUVU5REluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFByb3BlcnR5XzEgPSByZXF1aXJlKFwifmJkby9saWIvUHJvcGVydHlcIik7XG5jb25zdCBlbnZpcm9ubWVudF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZW52aXJvbm1lbnRcIik7XG5jb25zdCBNb2RpZmljYXRpb25fMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Nb2RpZmljYXRpb25cIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY2xhc3MgQXR0cmlidXRlIGV4dGVuZHMgUHJvcGVydHlfMS5Qcm9wZXJ0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSwgcGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCwgcHJvcGVydHksIHBhcmFtcyk7XG4gICAgICAgIHRoaXMuaW5ET01Jbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZU9mKCkgPT09IHZhbHVlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmRvU2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB0aGlzLnJlZmxlY3RUb0RPTUF0dHJpYnV0ZSh2YWx1ZSk7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHN1cGVyLnZhbHVlT2YoKTtcbiAgICAgICAgaWYgKHRoaXMudW5zYXZlZENoYW5nZSAmJiAhdGhpcy5zdG9yZVRlbXBvcmFyeSAmJiAhdGhpcy5kb05vdFBlcnNpc3QgJiYgdGhpcy5vYmplY3QuaXNCRE9Nb2RlbCkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnVuc2F2ZWRDaGFuZ2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZWZsZWN0VG9ET01BdHRyaWJ1dGUodmFsdWUpIHtcbiAgICAgICAgaWYgKCFlbnZpcm9ubWVudF8xLmlzQnJvd3NlcigpIHx8ICEodGhpcy5vYmplY3QgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCB2YWx1ZVRvUGFzcyA9IHZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNb2RpZmljYXRpb25fMS5Nb2RpZmljYXRpb24pXG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgY29uc3Qgc3RyaW5nS2V5ID0gdGhpcy5wcm9wZXJ0eS50b1N0cmluZygpO1xuICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSB0aGlzLm9iamVjdC5nZXRBdHRyaWJ1dGUoc3RyaW5nS2V5KTtcbiAgICAgICAgbGV0IHNldEF0dHJpYnV0ZSA9IHRydWU7XG4gICAgICAgIGlmICghdGhpcy5pbkRPTUluaXRpYWxpemVkICYmIGF0dHJWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVUb1NldCA9IHV0aWxfMS5jb25zdHJ1Y3RUeXBlT2ZIVE1MQXR0cmlidXRlKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0W3N0cmluZ0tleV0gPSB2YWx1ZVRvU2V0O1xuICAgICAgICAgICAgdGhpcy5pbkRPTUluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXRBdHRyaWJ1dGUgJiYgYXR0clZhbHVlICE9PSBKU09OLnN0cmluZ2lmeSh2YWx1ZVRvUGFzcykpXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5zZXRBdHRyaWJ1dGUoc3RyaW5nS2V5LCB2YWx1ZVRvUGFzcyk7XG4gICAgfVxuICAgIGRvU2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgbGV0IHZhbHVlVG9QYXNzID0gdmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGlmaWNhdGlvbl8xLk1vZGlmaWNhdGlvbilcbiAgICAgICAgICAgIHZhbHVlVG9QYXNzID0gdmFsdWUudmFsdWVPZigpO1xuICAgICAgICBzdXBlci5kb1NldFZhbHVlKHZhbHVlLCBmYWxzZSk7XG4gICAgICAgIGlmICghdGhpcy5vYmplY3QuaXNCRE9Nb2RlbCB8fCB0aGlzLnN0b3JlVGVtcG9yYXJ5IHx8IHRoaXMuZG9Ob3RQZXJzaXN0IHx8ICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGlmaWNhdGlvbl8xLk1vZGlmaWNhdGlvbiAmJiB2YWx1ZS50eXBlID09PSBcInVwZGF0ZVwiKSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlVG9QYXNzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHZhbHVlVG9QYXNzID09PSB1bmRlZmluZWQgJiYgdmFsdWVUb1Bhc3MgIT09IHN1cGVyLnZhbHVlT2YoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zYXZlZENoYW5nZSA9IG5ldyBNb2RpZmljYXRpb25fMS5Nb2RpZmljYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2F2ZWRDaGFuZ2UgPSB2YWx1ZVRvUGFzcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IHN1cGVyLnZhbHVlT2YoKSlcbiAgICAgICAgICAgIHRoaXMudW5zYXZlZENoYW5nZSA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG5leHBvcnRzLkF0dHJpYnV0ZSA9IEF0dHJpYnV0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFYUjBjbWxpZFhSbExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXNhV0l2UVhSMGNtbGlkWFJsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUVzWjBSQlFUaEVPMEZCUlRsRUxIZEVRVUZ0UkR0QlFVTnVSQ3gzUkVGQmNVUTdRVUZEY2tRc01FTkJRU3RFTzBGQmMwVXZSQ3hOUVVGaExGTkJRVEpFTEZOQlFWRXNiVUpCUVZFN1NVRTBSSEJHTEZsQlFWa3NUVUZCVXl4RlFVRkZMRkZCUVZjc1JVRkJSU3hOUVVGNVFqdFJRVU42UkN4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRkxGRkJRVkVzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVZ3hRaXh4UWtGQlowSXNSMEZCV1N4TFFVRkxMRU5CUVVNN1NVRkpOVU1zUTBGQlF6dEpRVkZOTEZGQlFWRXNRMEZCUXl4TFFVRlhPMUZCUTNaQ0xFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4TFFVRkxMRXRCUVVzN1dVRkJSU3hQUVVGUE8xRkJRM0pETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRGRrSXNTVUZCU1N4RFFVRkRMSEZDUVVGeFFpeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNSRExFTkJRVU03U1VGTFRTeFBRVUZQTzFGQlExWXNTVUZCU1N4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFGQlF6VkNMRWxCUVVrc1NVRkJTU3hEUVVGRExHRkJRV0VzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hGUVVGRk8xbEJRelZHTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRE8xTkJRemxDTzFGQlEwUXNUMEZCVHl4TFFVRkxMRU5CUVVNN1NVRkRha0lzUTBGQlF6dEpRVlZUTEhGQ1FVRnhRaXhEUVVGRExFdEJRVlU3VVVGRGRFTXNTVUZCU1N4RFFVRkRMSFZDUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1dVRkJXU3hYUVVGWExFTkJRVU03V1VGQlJTeFBRVUZQTzFGQlEyeEZMRWxCUVVrc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU40UWl4SlFVRkpMRXRCUVVzc1dVRkJXU3d5UWtGQldUdFpRVUZGTEZkQlFWY3NSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGRmFrVXNUVUZCVFN4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVTXpReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dFJRVU4wUkN4SlFVRkpMRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRmVFSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNTVUZCU1N4VFFVRlRMRVZCUVVVN1dVRkZja01zVFVGQlRTeFZRVUZWTEVkQlFVY3NiVU5CUVRSQ0xFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03V1VGRk0wUXNTVUZCU1N4RFFVRkRMRTFCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTTdXVUZEZEVRc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVNM1FpeFpRVUZaTEVkQlFVY3NTMEZCU3l4RFFVRkRPMU5CUTNoQ08xRkJSVVFzU1VGQlNTeFpRVUZaTEVsQlFVa3NVMEZCVXl4TFFVRkxMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVjBGQlZ5eERRVUZETzFsQlFVVXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhaUVVGWkxFTkJRVU1zVTBGQlV5eEZRVUZGTEZkQlFWY3NRMEZCUXl4RFFVRkRPMGxCUTNCSUxFTkJRVU03U1VGWlV5eFZRVUZWTEVOQlFVTXNTMEZCVnp0UlFVTTFRaXhKUVVGSkxGZEJRVmNzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZEZUVJc1NVRkJTU3hMUVVGTExGbEJRVmtzTWtKQlFWazdXVUZCUlN4WFFVRlhMRWRCUVVjc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFGQlEycEZMRXRCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXk5Q0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1NVRkJTU3hKUVVGSkxFTkJRVU1zWTBGQll5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWxCUVVrc1EwRkRka1VzUzBGQlN5eFpRVUZaTERKQ1FVRlpMRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzUzBGQlN5eFJRVUZSTEVOQlFVTXNSVUZCUlR0WlFVTXpSQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEZkQlFWY3NRMEZCUXp0VFFVTTFRanRoUVVGTk8xbEJRMGdzU1VGQlNTeFhRVUZYTEV0QlFVc3NVMEZCVXl4SlFVRkpMRmRCUVZjc1MwRkJTeXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVTdaMEpCUXpsRUxFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NTVUZCU1N3eVFrRkJXU3hGUVVGeFFpeERRVUZETzJGQlF6bEVPenRuUWtGQlRTeEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRmRCUVZjc1EwRkJRenRUUVVNelF6dFJRVU5FTEVsQlFVa3NTMEZCU3l4TFFVRkxMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVU3V1VGQlJTeEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRk5CUVZNc1EwRkJRenRKUVVOc1JTeERRVUZETzBOQlEwbzdRVUUxU1VRc09FSkJORWxESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IG1zXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibXNcIikpO1xuY29uc3QgQkRPTWFwQ2FjaGVfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9NYXBDYWNoZVwiKTtcbmNsYXNzIEJET0NvbmZpZ01hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IEJET01hcENhY2hlXzEuQkRPTWFwQ2FjaGUoKTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0KGNvbmZpZykge1xuICAgICAgICBsZXQgdmFsdWUgPSBhd2FpdCB0aGlzLmdldENhY2hlKGNvbmZpZyk7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYXdhaXQgdGhpcy5sb2FkKGNvbmZpZyk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldENhY2hlKGNvbmZpZywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpO1xuICAgIH1cbiAgICBnZXRDYWNoZShjb25maWcpIHtcbiAgICAgICAgY29uc3QgZnJvbUxvY2FsQ2FjaGUgPSB0aGlzLmNhY2hlLmdldChjb25maWcpO1xuICAgICAgICBpZiAoZnJvbUxvY2FsQ2FjaGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tTG9jYWxDYWNoZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgYXN5bmMgc2V0Q2FjaGUoY29uZmlnLCB2YWx1ZSkge1xuICAgICAgICBsZXQgY29uZiA9IHRoaXMuY2FjaGUuZ2V0KCdfX0NvbmZpZ01hbmFnZXJDYWNoZVRpbWVvdXRfXycpO1xuICAgICAgICBpZiAoIXRoaXMuY2FjaGUuaGFzKCdfX0NvbmZpZ01hbmFnZXJDYWNoZVRpbWVvdXRfXycpKSB7XG4gICAgICAgICAgICBjb25mID0gKGF3YWl0IHRoaXMubG9hZCgnY29uZmlnJykpLnRpbWVvdXRzLmNvbmZpZ0NhY2hlO1xuICAgICAgICAgICAgaWYgKGNvbmYpXG4gICAgICAgICAgICAgICAgY29uZiA9IG1zXzEuZGVmYXVsdChjb25mKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUuc2V0KCdfX0NvbmZpZ01hbmFnZXJDYWNoZVRpbWVvdXRfXycsIGNvbmYpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGUuc2V0KGNvbmZpZywgdmFsdWUsIGNvbmYpO1xuICAgIH1cbn1cbmV4cG9ydHMuQkRPQ29uZmlnTWFuYWdlciA9IEJET0NvbmZpZ01hbmFnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQUTI5dVptbG5UV0Z1WVdkbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiR2xpTDBKRVQwTnZibVpwWjAxaGJtRm5aWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzYjBSQlFXOUNPMEZCUTNCQ0xITkVRVUZ0UkR0QlFXMUNia1FzVFVGQmMwSXNaMEpCUVdkQ08wbEJRWFJETzFGQlZXTXNWVUZCU3l4SFFVRTJRaXhKUVVGSkxIbENRVUZYTEVWQlFVVXNRMEZCUXp0SlFYZEZiRVVzUTBGQlF6dEpRUzlFVlN4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRV003VVVGRE0wSXNTVUZCU1N4TFFVRkxMRWRCUVVjc1RVRkJUU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTNoRExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdXVUZEVWl4TFFVRkxMRWRCUVVjc1RVRkJUU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMWxCUTJoRExFMUJRVTBzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VTBGRGRFTTdVVUZEUkN4UFFVRlBMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYkVNc1EwRkJRenRKUVRoQ1V5eFJRVUZSTEVOQlFVTXNUVUZCWXp0UlFVTTNRaXhOUVVGTkxHTkJRV01zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU01UXl4SlFVRkpMR05CUVdNc1JVRkJSVHRaUVVOb1FpeFBRVUZQTEdOQlFXTXNRMEZCUXp0VFFVTjZRanRSUVVORUxFOUJRVThzU1VGQlNTeERRVUZETzBsQlEyaENMRU5CUVVNN1NVRlhVeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFXTXNSVUZCUlN4TFFVRlZPMUZCUXk5RExFbEJRVWtzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExDdENRVUVyUWl4RFFVRkRMRU5CUVVNN1VVRkRNMFFzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExDdENRVUVyUWl4RFFVRkRMRVZCUVVVN1dVRkRiRVFzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJRenRaUVVONFJDeEpRVUZKTEVsQlFVazdaMEpCUVVVc1NVRkJTU3hIUVVGSExGbEJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTXhRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl3clFrRkJLMElzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTjZSRHRSUVVORUxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEZUVNc1EwRkJRenREUVVOS08wRkJiRVpFTERSRFFXdEdReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgbW9tZW50XzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibW9tZW50XCIpKTtcbmNvbnN0IHBhdGhfMSA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNsYXNzIEJET0xvZ2dlciB7XG4gICAgY29uc3RydWN0b3IoX3BhcmFtcykge1xuICAgICAgICB0aGlzLmxvZ0ZpbGUgPSAnZGVmYXVsdC5sb2cnO1xuICAgICAgICB0aGlzLnByZXZlbnRDb25zb2xlUHJpbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcmV2ZW50RmlsZVByaW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9nTGV2ZWwgPSAnZGVidWcnO1xuICAgICAgICB0aGlzLnByb3RvdHlwZU5hbWVzID0gdXRpbF8xLmdldFByb3RvdHlwZU5hbWVzUmVjdXJzaXZlKHRoaXMpO1xuICAgIH1cbiAgICBsb2cobWVzc2FnZSwgbG9nbGV2ZWwgPSAnbG9nJywgLi4uYXJncykge1xuICAgICAgICBpZiAobG9nbGV2ZWwgIT09ICdsb2cnICYmICF0aGlzLmlzQWxsb3dlZChsb2dsZXZlbCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy5wcmV2ZW50Q29uc29sZVByaW50IHx8IFsnbG9nJywgJ2Vycm9yJ10uaW5jbHVkZXMobG9nbGV2ZWwpKSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmdldEhlYWRlcihsb2dsZXZlbCk7XG4gICAgICAgICAgICBsZXQgbmV3QXJncyA9IFtdO1xuICAgICAgICAgICAgaWYgKGhlYWRlciBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgbmV3QXJncyA9IG5ld0FyZ3MuY29uY2F0KGhlYWRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbmV3QXJncy5wdXNoKGhlYWRlcik7XG4gICAgICAgICAgICBuZXdBcmdzLnB1c2gobWVzc2FnZSk7XG4gICAgICAgICAgICBuZXdBcmdzID0gbmV3QXJncy5jb25jYXQoYXJncyk7XG4gICAgICAgICAgICBjb25zb2xlW2xvZ2xldmVsXS5hcHBseSh0aGlzLCBuZXdBcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShhcmdzKTtcbiAgICAgICAgaWYgKCF0aGlzLnByZXZlbnRGaWxlUHJpbnQgfHwgbG9nbGV2ZWwgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMud3JpdGVUb0ZpbGUobG9nbGV2ZWwsIG1lc3NhZ2UgKyBwYXJzZWRTdHJpbmcuc3Vic3RyKDEsIHBhcnNlZFN0cmluZy5sZW5ndGggLSAyKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVidWcobWVzc2FnZSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBhcHBseSA9IFttZXNzYWdlLCAnZGVidWcnXS5jb25jYXQoYXJncyk7XG4gICAgICAgIHRoaXMubG9nLmFwcGx5KHRoaXMsIGFwcGx5KTtcbiAgICB9XG4gICAgaW5mbyhtZXNzYWdlLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGFwcGx5ID0gW21lc3NhZ2UsICdpbmZvJ10uY29uY2F0KGFyZ3MpO1xuICAgICAgICB0aGlzLmxvZy5hcHBseSh0aGlzLCBhcHBseSk7XG4gICAgfVxuICAgIHdhcm4obWVzc2FnZSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBhcHBseSA9IFttZXNzYWdlLCAnd2FybiddLmNvbmNhdChhcmdzKTtcbiAgICAgICAgdGhpcy5sb2cuYXBwbHkodGhpcywgYXBwbHkpO1xuICAgIH1cbiAgICBlcnJvcihtZXNzYWdlLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGFwcGx5ID0gW21lc3NhZ2UsICdlcnJvciddLmNvbmNhdChhcmdzKTtcbiAgICAgICAgdGhpcy5sb2cuYXBwbHkodGhpcywgYXBwbHkpO1xuICAgIH1cbiAgICBnZXRQcm9jSW5mbygpIHtcbiAgICAgICAgcmV0dXJuIGAke2dsb2JhbC5wcm9jZXNzLmVudi5uYW1lIHx8ICcnfSAke2dsb2JhbC5wcm9jZXNzLmVudi5ob3N0bmFtZSB8fCAnJ30gJHtnbG9iYWwucHJvY2Vzcy5waWR9YDtcbiAgICB9XG4gICAgaXNBbGxvd2VkKGxvZ0xldmVsKSB7XG4gICAgICAgIGNvbnN0IGxvZ0xldmVsT3JkZXIgPSBbJ2xvZycsICdkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXTtcbiAgICAgICAgcmV0dXJuIGxvZ0xldmVsT3JkZXIuaW5kZXhPZihsb2dMZXZlbCkgPj0gbG9nTGV2ZWxPcmRlci5pbmRleE9mKHRoaXMubG9nTGV2ZWwpO1xuICAgIH1cbiAgICBjdXJyZW50VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudF8xLmRlZmF1bHQoKS5mb3JtYXQoJ0RELk1NLllZWVkgSEg6bW06c3MnKTtcbiAgICB9XG4gICAgZ2V0TG9nUG9pbnQoKSB7XG4gICAgICAgIGNvbnN0IHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgICBsZXQgY2FsbHBvaW50O1xuICAgICAgICBmb3IgKGNvbnN0IFtpbmRleCwgc3RhY2twYXJ0XSBvZiBzdGFjay5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgIGlmICghaW5kZXgpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIXV0aWxfMS5pbmNsdWRlc01lbWJlck9mTGlzdChzdGFja3BhcnQsIHRoaXMucHJvdG90eXBlTmFtZXMsICcudHMnKSkge1xuICAgICAgICAgICAgICAgIGNhbGxwb2ludCA9IHN0YWNrcGFydC5zcGxpdChwYXRoXzEuc2VwKS5wb3AoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsbHBvaW50KSB7XG4gICAgICAgICAgICBjYWxscG9pbnQgPSBjYWxscG9pbnQucmVwbGFjZSgnKScsICcnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxwb2ludCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWxscG9pbnQ7XG4gICAgfVxufVxuZXhwb3J0cy5CRE9Mb2dnZXIgPSBCRE9Mb2dnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQVEc5bloyVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlzYVdJdlFrUlBURzluWjJWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVOQkxEUkVRVUUwUWp0QlFVTTFRaXdyUWtGQk1rSTdRVUZETTBJc01FTkJRVzFHTzBGQlYyNUdMRTFCUVhOQ0xGTkJRVk03U1VGclJETkNMRmxCUVZrc1QwRkJaME03VVVFelEzSkRMRmxCUVU4c1IwRkJXU3hoUVVGaExFTkJRVU03VVVGUmFrTXNkMEpCUVcxQ0xFZEJRV0VzUzBGQlN5eERRVUZETzFGQlVYUkRMSEZDUVVGblFpeEhRVUZoTEV0QlFVc3NRMEZCUXp0UlFXVnVReXhoUVVGUkxFZEJRV1VzVDBGQlR5eERRVUZETzFGQlZXNUNMRzFDUVVGakxFZEJRV0VzYVVOQlFUQkNMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRkwwSXNRMEZCUXp0SlFWY3hReXhIUVVGSExFTkJRVU1zVDBGQldTeEZRVUZGTEZkQlFYTkNMRXRCUVVzc1JVRkJSU3hIUVVGSExFbEJRVmM3VVVGRGFFVXNTVUZCU1N4UlFVRlJMRXRCUVVzc1MwRkJTeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNN1dVRkJSU3hQUVVGUE8xRkJRelZFTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZPMWxCUTJ4RkxFMUJRVTBzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03V1VGRGVFTXNTVUZCU1N4UFFVRlBMRWRCUVdFc1JVRkJSU3hEUVVGRE8xbEJRek5DTEVsQlFVa3NUVUZCVFN4WlFVRlpMRXRCUVVzc1JVRkJSVHRuUWtGRGVrSXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdZVUZEY0VNN08yZENRVUZOTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03V1VGRE5VSXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFpRVU4wUWl4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTmtMRTlCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8xTkJRelZFTzFGQlEwUXNUVUZCVFN4WlFVRlpMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTXhReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhKUVVGSkxGRkJRVkVzUzBGQlN5eFBRVUZQTEVWQlFVVTdXVUZEYUVRc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVWQlFVVXNUMEZCVHl4SFFVRkhMRmxCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEZsQlFWa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU42Ump0SlFVTk1MRU5CUVVNN1NVRlJUU3hMUVVGTExFTkJRVU1zVDBGQldTeEZRVUZGTEVkQlFVY3NTVUZCVXp0UlFVTnVReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZET1VNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRnZRaXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU5zUkN4RFFVRkRPMGxCVVUwc1NVRkJTU3hEUVVGRExFOUJRVmtzUlVGQlJTeEhRVUZITEVsQlFWTTdVVUZEYkVNc1RVRkJUU3hMUVVGTExFZEJRVWNzUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlF6ZERMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NSVUZCYjBJc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJFUXNRMEZCUXp0SlFWRk5MRWxCUVVrc1EwRkJReXhQUVVGWkxFVkJRVVVzUjBGQlJ5eEpRVUZUTzFGQlEyeERMRTFCUVUwc1MwRkJTeXhIUVVGSExFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU0zUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVWQlFXOUNMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMnhFTEVOQlFVTTdTVUZSVFN4TFFVRkxMRU5CUVVNc1QwRkJXU3hGUVVGRkxFZEJRVWNzU1VGQlV6dFJRVU51UXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE9VTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZ2UWl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOc1JDeERRVUZETzBsQlUxTXNWMEZCVnp0UlFVTnFRaXhQUVVGUExFZEJRVWNzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSkxFVkJRVVVzU1VGQlNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFbEJRVWtzUlVGQlJTeEpRVUZKTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03U1VGRGVrY3NRMEZCUXp0SlFTdENVeXhUUVVGVExFTkJRVU1zVVVGQmJVSTdVVUZEYmtNc1RVRkJUU3hoUVVGaExFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RlFVRkZMRTFCUVUwc1JVRkJSU3hOUVVGTkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdVVUZEYUVVc1QwRkJUeXhoUVVGaExFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMR0ZCUVdFc1EwRkJReXhQUVVGUExFTkJRVk1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMGxCUXpOR0xFTkJRVU03U1VGVFV5eFhRVUZYTzFGQlEycENMRTlCUVU4c1owSkJRVTBzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eERRVUZETzBsQlEyeEVMRU5CUVVNN1NVRlRVeXhYUVVGWE8xRkJRMnBDTEUxQlFVMHNTMEZCU3l4SFFVRlpMRWxCUVVrc1MwRkJTeXhGUVVGRkxFTkJRVU1zUzBGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOMFJDeEpRVUZKTEZOQlFWTXNRMEZCUXp0UlFVTmtMRXRCUVVzc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZUTEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFVkJRVVU3V1VGRE9VTXNTVUZCU1N4RFFVRkRMRXRCUVVzN1owSkJRVVVzVTBGQlV6dFpRVU55UWl4SlFVRkpMRU5CUVVNc01rSkJRVzlDTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRVVVzUzBGQlN5eERRVUZETEVWQlFVVTdaMEpCUXpsRUxGTkJRVk1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRlZCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTjJReXhOUVVGTk8yRkJRMVE3VTBGRFNqdFJRVU5FTEVsQlFVa3NVMEZCVXl4RlFVRkZPMWxCUTFnc1UwRkJVeXhIUVVGSExGTkJRVk1zUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRekZETzJGQlFVMDdXVUZEU0N4VFFVRlRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xTkJRMnhDTzFGQlEwUXNUMEZCVHl4VFFVRlRMRU5CUVVNN1NVRkRja0lzUTBGQlF6dERRVU5LTzBGQk0wMUVMRGhDUVRKTlF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEVudGl0eSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSwgZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5leHBpcmUgPSBJbmZpbml0eTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5leHBpcmUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIChkdXJhdGlvbiB8fCBJbmZpbml0eSk7XG4gICAgfVxuICAgIGdldCBleHBpcmVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leHBpcmUgPyB0aGlzLmV4cGlyZSA8IG5ldyBEYXRlKCkuZ2V0VGltZSgpIDogZmFsc2U7XG4gICAgfVxufVxuY2xhc3MgQkRPTWFwQ2FjaGUgZXh0ZW5kcyBNYXAge1xuICAgIHNldChrZXksIHZhbHVlLCBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBlbnRpdHkgPSBuZXcgRW50aXR5KHZhbHVlLCBkdXJhdGlvbik7XG4gICAgICAgIHJldHVybiBzdXBlci5zZXQoa2V5LCBlbnRpdHkpO1xuICAgIH1cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IHN1cGVyLmdldChrZXkpO1xuICAgICAgICBpZiAoZW50aXR5ID09PSB1bmRlZmluZWQgfHwgZW50aXR5LmV4cGlyZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnRpdHkuZGF0YTtcbiAgICB9XG59XG5leHBvcnRzLkJET01hcENhY2hlID0gQkRPTWFwQ2FjaGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQVFdGd1EyRmphR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJ4cFlpOUNSRTlOWVhCRFlXTm9aUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVdEJMRTFCUVUwc1RVRkJUVHRKUVdkQ1VpeFpRVUZaTEVsQlFVOHNSVUZCUlN4UlFVRnBRanRSUVVZNVFpeFhRVUZOTEVkQlFWY3NVVUZCVVN4RFFVRkRPMUZCUnpsQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTJwQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4SlFVRkpMRVZCUVVVc1EwRkJReXhQUVVGUExFVkJRVVVzUjBGQlJ5eERRVUZETEZGQlFWRXNTVUZCU1N4UlFVRlJMRU5CUVVNc1EwRkJRenRKUVVOb1JTeERRVUZETzBsQlUwUXNTVUZCU1N4UFFVRlBPMUZCUTFBc1QwRkJUeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWtzU1VGQlNTeEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU53UlN4RFFVRkRPME5CUTBvN1FVRlRSQ3hOUVVGaExGZEJRV3RDTEZOQlFWRXNSMEZCYVVJN1NVRlhOME1zUjBGQlJ5eERRVUZETEVkQlFVMHNSVUZCUlN4TFFVRlJMRVZCUVVVc1VVRkJhVUk3VVVGRE1VTXNUVUZCVFN4TlFVRk5MRWRCUVVjc1NVRkJTU3hOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUXpORExFOUJRVThzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGJFTXNRMEZCUXp0SlFWTk5MRWRCUVVjc1EwRkJReXhIUVVGTk8xRkJRMklzVFVGQlRTeE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU01UWl4SlFVRkpMRTFCUVUwc1MwRkJTeXhUUVVGVExFbEJRVWtzVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlR0WlFVTjRReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTJwQ0xFOUJRVThzVTBGQlV5eERRVUZETzFOQlEzQkNPMUZCUTBRc1QwRkJUeXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETzBsQlEzWkNMRU5CUVVNN1EwRkRTanRCUVM5Q1JDeHJRMEVyUWtNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBCRE9Nb2RlbF8xO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcblwidXNlIHN0cmljdFwiO1xuY29uc3QgdXVpZF8xID0gcmVxdWlyZShcInV1aWRcIik7XG5jb25zdCB0eXBlX2dyYXBocWxfMSA9IHJlcXVpcmUoXCJ0eXBlLWdyYXBocWxcIik7XG5jb25zdCBCaW5kaW5nXzEgPSByZXF1aXJlKFwifmJkby9saWIvQmluZGluZ1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5sZXQgQkRPTW9kZWwgPSBCRE9Nb2RlbF8xID0gY2xhc3MgQkRPTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQkRPTW9kZWwgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gQkRPTW9kZWxfMS5jb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy5pZCA9IGBwZW5kaW5nXyR7dXVpZF8xLnYxKCl9YDtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcy5jb25zdHJ1Y3RvcikubmFtZTtcbiAgICB9XG4gICAgZ2V0IGJpbmRpbmdzKCkge1xuICAgICAgICBjb25zdCBiaW5kaW5ncyA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcywgXCJiaW5kaW5nc1wiKTtcbiAgICAgICAgcmV0dXJuIGJpbmRpbmdzID8gYmluZGluZ3MgOiBuZXcgTWFwKCk7XG4gICAgfVxuICAgIGJpbmQocHJvcE5hbWUsIG1vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBCaW5kaW5nXzEuQmluZGluZyh0aGlzLCBwcm9wTmFtZSwgbW9kZSk7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy50b0pTT04oKTtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcykge1xuICAgICAgICAgICAgaWYgKHRoaXNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXNba2V5XTtcbiAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbn07XG5CRE9Nb2RlbC5ncmFwaFFMVHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihCRE9Nb2RlbF8xLmNvbnN0cnVjdG9yKTtcbkJET01vZGVsLmlzQkRPTW9kZWwgPSB0cnVlO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxuXSwgQkRPTW9kZWwucHJvdG90eXBlLCBcImlzQkRPTW9kZWxcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgQkRPTW9kZWwucHJvdG90eXBlLCBcImNvbGxlY3Rpb25OYW1lXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoKF90eXBlKSA9PiB0eXBlX2dyYXBocWxfMS5JRCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgQkRPTW9kZWwucHJvdG90eXBlLCBcImlkXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBCRE9Nb2RlbC5wcm90b3R5cGUsIFwiY2xhc3NOYW1lXCIsIHZvaWQgMCk7XG5CRE9Nb2RlbCA9IEJET01vZGVsXzEgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoeyBpc0Fic3RyYWN0OiB0cnVlIH0pXG5dLCBCRE9Nb2RlbCk7XG5leHBvcnRzLkJET01vZGVsID0gQkRPTW9kZWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQVFc5a1pXd3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMnhwWWk5Q1JFOU5iMlJsYkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxDdENRVUZyUXp0QlFVTnNReXdyUTBGQmEwTTdRVUZEYkVNc09FTkJRWGRFTzBGQlEzaEVMSE5FUVVFMlJUdEJRVU0zUlN4clJFRkJhMFE3UVVGWGJFUXNTVUZCYzBJc1VVRkJVU3huUWtGQk9VSXNUVUZCYzBJc1VVRkJVVHRKUVVRNVFqdFJRWE5EWjBNc1pVRkJWU3hIUVVGWkxFbEJRVWtzUTBGQlF6dFJRVkV6UWl4dFFrRkJZeXhIUVVGWkxGVkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTTdVVUZUTjBNc1QwRkJSU3hIUVVGWExGZEJRVmNzVTBGQlNTeEZRVUZGTEVWQlFVVXNRMEZCUXp0UlFWVnlReXhqUVVGVExFZEJRVmNzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETzBsQmVVUnNSeXhEUVVGRE8wbEJMME5ITEVsQlFXTXNVVUZCVVR0UlFVTnNRaXhOUVVGTkxGRkJRVkVzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVU12UXl4UFFVRlBMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRE8wbEJRek5ETEVOQlFVTTdTVUZYVFN4SlFVRkpMRU5CUVRKRkxGRkJRVmNzUlVGQlJTeEpRVUZSTzFGQlEzWkhMRTlCUVU4c1NVRkJTU3hwUWtGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVFMlJDeERRVUZETzBsQlEzcEhMRU5CUVVNN1NVRlJUU3hSUVVGUk8xRkJRMWdzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8xRkJRek5DTEU5QlFVOHNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU5vUXl4RFFVRkRPMGxCVlUwc1RVRkJUVHRSUVVOVUxFMUJRVTBzU1VGQlNTeEhRVUZ0UWl4RlFVRkZMRU5CUVVNN1VVRkRhRU1zUzBGQlN5eE5RVUZOTEVkQlFVY3NTVUZCU1N4SlFVRkpMRVZCUVVVN1dVRkRjRUlzU1VGQlNTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1UwRkJVeXhGUVVGRk8yZENRVU42UWl4TlFVRk5MRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUXpGQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4UFFVRlBMRU5CUVVNN1lVRkRka0k3VTBGRFNqdFJRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTJoQ0xFTkJRVU03UTBGRFNpeERRVUZCTzBGQkwwY3dRaXh2UWtGQlZ5eEhRVUZSTEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1ZVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzBGQmJVSXZSQ3h0UWtGQlZTeEhRVUZaTEVsQlFVa3NRMEZCUXp0QlFWRjBRenRKUVVGWUxIRkNRVUZSTEVWQlFVVTdPelJEUVVFMFF6dEJRVkV6UXp0SlFVRllMSEZDUVVGUkxFVkJRVVU3TzJkRVFVRnRSVHRCUVZOd1JEdEpRVUY2UWl4elFrRkJVeXhEUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVXNRMEZCUXl4cFFrRkJSU3hEUVVGRE96dHZRMEZCZVVNN1FVRlZja1E3U1VGQldpeHpRa0ZCVXl4RlFVRkZPenN5UTBGQmEwWTdRVUZvUlRWRkxGRkJRVkU3U1VGRU4wSXNORUpCUVdVc1EwRkJReXhGUVVGRkxGVkJRVlVzUlVGQlJTeEpRVUZKTEVWQlFVVXNRMEZCUXp0SFFVTm9RaXhSUVVGUkxFTkJlVWczUWp0QlFYcEljVUlzTkVKQlFWRWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBsb2Rhc2hfMSA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5jb25zdCBlbnZpcm9ubWVudF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZW52aXJvbm1lbnRcIik7XG5jbGFzcyBCRE9Sb3V0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucm91dGVyTmFtZVNwYWNlID0gYC8ke3RoaXMuY29uc3RydWN0b3IubmFtZS50b0xvd2VyQ2FzZSgpfWA7XG4gICAgICAgIHRoaXMucm91dGVzID0gWycvJ107XG4gICAgICAgIHRoaXMudGVtcGxhdGVTdHJpbmcgPSAnPGRpdj48L2Rpdj4nO1xuICAgICAgICB0aGlzLmpzb25Pbmx5ID0gZmFsc2U7XG4gICAgfVxuICAgIHJlbmRlclRlbXBsYXRlKHRlbXBsYXRlUGFyYW1zKSB7XG4gICAgICAgIGxldCBzdHJpbmdUb1BhcnNlID0gbnVsbDtcbiAgICAgICAgaWYgKGxvZGFzaF8xLmlzU3RyaW5nKHRoaXMudGVtcGxhdGVTdHJpbmcpKSB7XG4gICAgICAgICAgICBzdHJpbmdUb1BhcnNlID0gZW52aXJvbm1lbnRfMS50ZW1wbGF0ZUVudmlyb25tZW50LnJlbmRlclN0cmluZyh0aGlzLnRlbXBsYXRlU3RyaW5nLCB0ZW1wbGF0ZVBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvZGFzaF8xLmlzT2JqZWN0KHRoaXMudGVtcGxhdGVTdHJpbmcpKSB7XG4gICAgICAgICAgICBzdHJpbmdUb1BhcnNlID0gdGhpcy50ZW1wbGF0ZVN0cmluZy5yZW5kZXIodGVtcGxhdGVQYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHJpbmdUb1BhcnNlO1xuICAgIH1cbiAgICBhc3luYyB0ZW1wbGF0ZVBhcmFtcyhfcmVxdWVzdE9yUGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG59XG5CRE9Sb3V0ZS5hdHRhY2hUb1NlcnZlcnMgPSBbJyonXTtcbmV4cG9ydHMuQkRPUm91dGUgPSBCRE9Sb3V0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBVbTkxZEdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyeHBZaTlDUkU5U2IzVjBaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVVkJMRzFEUVVFMFF6dEJRVU0xUXl4M1JFRkJOa1E3UVVGVE4wUXNUVUZCYzBJc1VVRkJVVHRKUVVFNVFqdFJRWEZDVnl4dlFrRkJaU3hIUVVGWExFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFVkJRVVVzUTBGQlF6dFJRVkZ3UlN4WFFVRk5MRWRCUVdFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRV3RDZEVJc2JVSkJRV01zUjBGQmMwSXNZVUZCWVN4RFFVRkRPMUZCVld4RUxHRkJRVkVzUjBGQldTeExRVUZMTEVOQlFVTTdTVUZ0UkhoRExFTkJRVU03U1VGNFEyRXNZMEZCWXl4RFFVRkRMR05CUVRoQ08xRkJRMjVFTEVsQlFVa3NZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVONlFpeEpRVUZKTEdsQ1FVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eEZRVUZGTzFsQlF5OUNMR0ZCUVdFc1IwRkJSeXhwUTBGQmJVSXNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUlVGQlJTeGpRVUZqTEVOQlFVTXNRMEZCUXp0VFFVTjZSanRSUVVORUxFbEJRVWtzYVVKQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFVkJRVVU3V1VGREwwSXNZVUZCWVN4SFFVRmpMRWxCUVVrc1EwRkJReXhqUVVGbExFTkJRVU1zVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMU5CUXpGRk8xRkJRMFFzVDBGQlR5eGhRVUZoTEVOQlFVTTdTVUZEZWtJc1EwRkJRenRKUVZkVExFdEJRVXNzUTBGQlF5eGpRVUZqTEVOQlFVTXNaMEpCUVRCRE8xRkJRM0pGTEU5QlFVOHNSVUZCUlN4RFFVRkRPMGxCUTJRc1EwRkJRenM3UVVFNVJXRXNkMEpCUVdVc1IwRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlduQkVMRFJDUVRSSFF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBNb2RpZmljYXRpb25fMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Nb2RpZmljYXRpb25cIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jbGFzcyBCaW5kaW5nIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5LCBtb2RlID0gXCJSZWFkV3JpdGVcIikge1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgICAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgICAgICBsZXQgZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgY29uc3QgYmluZGluZ0Rlc2NyaXB0b3IgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMub2JqZWN0LCBcImJpbmRpbmdEZXNjcmlwdG9yXCIpO1xuICAgICAgICBsZXQgcHJvdG90eXBlID0gdGhpcy5vYmplY3Q7XG4gICAgICAgIHdoaWxlICghZGVzY3JpcHRvcikge1xuICAgICAgICAgICAgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSk7XG4gICAgICAgICAgICBpZiAoIXByb3RvdHlwZSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGlmIChwcm90b3R5cGUuY29uc3RydWN0b3IubmFtZSA9PT0gXCJCYXNlQ29uc3RydWN0b3JcIilcbiAgICAgICAgICAgICAgICBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKTtcbiAgICAgICAgICAgIGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIHRoaXMucHJvcGVydHkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZXNjcmlwdG9yICYmIGJpbmRpbmdEZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IgPT09IGJpbmRpbmdEZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICBjb25zdCBtRGF0YSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5vYmplY3QsIFwiYmluZGluZ3NcIik7XG4gICAgICAgICAgICBjb25zdCBiaW5kaW5ncyA9IG1EYXRhID8gbURhdGEuZ2V0KHRoaXMucHJvcGVydHkpIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKGJpbmRpbmdzKVxuICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRvciA9IGJpbmRpbmdzWzBdLmRlc2NyaXB0b3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmRlc2NyaXB0b3IpXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0b3IgPSBkZXNjcmlwdG9yO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICBpZiAodGhpcy5tb2RlID09PSBcIldyaXRlT25seVwiKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb2RpZmljYXRpb25fMS5Nb2RpZmljYXRpb24odW5kZWZpbmVkKTtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0W3RoaXMucHJvcGVydHldO1xuICAgIH1cbiAgICByZWZsZWN0VG9Jbml0aWF0b3JzKG5ld1ZhbCkge1xuICAgICAgICBpZiAobmV3VmFsIGluc3RhbmNlb2YgTW9kaWZpY2F0aW9uXzEuTW9kaWZpY2F0aW9uKVxuICAgICAgICAgICAgbmV3VmFsID0gbmV3VmFsLnZhbHVlT2YoKTtcbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhdG9yW3RoaXMuaW5pdGlhdG9yUHJvcGVydHldID09PSBuZXdWYWwgfHwgdGhpcy5tb2RlID09PSBcIldyaXRlT25seVwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBtRGF0YSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5vYmplY3QsIFwiYmluZGluZ3NcIik7XG4gICAgICAgIGlmIChtRGF0YSkge1xuICAgICAgICAgICAgY29uc3QgYmluZGluZ3MgPSBtRGF0YS5nZXQodGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgICAgICBpZiAoYmluZGluZ3MpXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBiaW5kaW5nIG9mIGJpbmRpbmdzKVxuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nLmluaXRpYXRvcltiaW5kaW5nLmluaXRpYXRvclByb3BlcnR5XSA9IG5ld1ZhbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWZsZWN0VG9PYmplY3QobmV3VmFsKSB7XG4gICAgICAgIGlmIChuZXdWYWwgaW5zdGFuY2VvZiBNb2RpZmljYXRpb25fMS5Nb2RpZmljYXRpb24pXG4gICAgICAgICAgICBuZXdWYWwgPSBuZXdWYWwudmFsdWVPZigpO1xuICAgICAgICBpZiAodGhpcy5vYmplY3RbdGhpcy5wcm9wZXJ0eV0gPT09IG5ld1ZhbCB8fCB0aGlzLm1vZGUgPT09IFwiUmVhZE9ubHlcIilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5vYmplY3RbdGhpcy5wcm9wZXJ0eV0gPSBuZXdWYWw7XG4gICAgfVxuICAgIGluc3RhbGwoaW5pdGlhdG9yLCBwcm9wZXJ0eSkge1xuICAgICAgICB0aGlzLmluaXRpYXRvciA9IGluaXRpYXRvcjtcbiAgICAgICAgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSA9IHByb3BlcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgIGlmICghUmVmbGVjdC5oYXNNZXRhZGF0YShcImluaXRpYXRvckJpbmRpbmdcIiwgdGhpcy5pbml0aWF0b3IpKSB7XG4gICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCBcImluaXRpYXRvckJpbmRpbmdcIiwgbmV3IE1hcCgpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbml0aWF0b3JNRGF0YSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5pbml0aWF0b3IsIFwiaW5pdGlhdG9yQmluZGluZ1wiKSB8fCBuZXcgTWFwKCk7XG4gICAgICAgIGNvbnN0IGluaXRpYXRvckJpbmRpbmcgPSBpbml0aWF0b3JNRGF0YS5nZXQodGhpcy5pbml0aWF0b3JQcm9wZXJ0eSk7XG4gICAgICAgIGlmIChpbml0aWF0b3JCaW5kaW5nKVxuICAgICAgICAgICAgaW5pdGlhdG9yQmluZGluZy5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5iaW5kKCk7XG4gICAgICAgIGluaXRpYXRvck1EYXRhLnNldCh0aGlzLmluaXRpYXRvclByb3BlcnR5LCB0aGlzKTtcbiAgICB9XG4gICAgcmVtb3ZlKCkge1xuICAgICAgICBjb25zdCBvYmplY3RWYWx1ZSA9IHRoaXMub2JqZWN0W3RoaXMucHJvcGVydHldO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JWYWx1ZSA9IHRoaXMuaW5pdGlhdG9yW3RoaXMuaW5pdGlhdG9yUHJvcGVydHldO1xuICAgICAgICBjb25zdCBvYmplY3RNRGF0YSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5vYmplY3QsIFwiYmluZGluZ3NcIik7XG4gICAgICAgIGNvbnN0IG9iamVjdEJpbmRpbmdzID0gb2JqZWN0TURhdGEgPyBvYmplY3RNRGF0YS5nZXQodGhpcy5wcm9wZXJ0eSkgOiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IGluaXRpYXRvck1EYXRhID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLmluaXRpYXRvciwgXCJpbml0aWF0b3JCaW5kaW5nXCIpO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JCaW5kaW5nID0gaW5pdGlhdG9yTURhdGEgPyBpbml0aWF0b3JNRGF0YS5nZXQodGhpcy5pbml0aWF0b3JQcm9wZXJ0eSkgOiB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChvYmplY3RCaW5kaW5ncykge1xuICAgICAgICAgICAgdXRpbF8xLnJlbW92ZUVsZW1lbnRGcm9tQXJyYXkob2JqZWN0QmluZGluZ3MsIHRoaXMpO1xuICAgICAgICAgICAgaWYgKCFvYmplY3RCaW5kaW5ncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0TURhdGEpXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdE1EYXRhLmRlbGV0ZSh0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RvcmVEZXNjcmlwdG9yKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5LCBvYmplY3RWYWx1ZSwgdGhpcy5kZXNjcmlwdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5pdGlhdG9yQmluZGluZykge1xuICAgICAgICAgICAgaWYgKGluaXRpYXRvck1EYXRhKVxuICAgICAgICAgICAgICAgIGluaXRpYXRvck1EYXRhLmRlbGV0ZSh0aGlzLmluaXRpYXRvclByb3BlcnR5KTtcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZURlc2NyaXB0b3IodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHksIGluaXRpYXRvclZhbHVlLCB0aGlzLmluaXRpYXRvckRlc2NyaXB0b3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGJpbmQoKSB7XG4gICAgICAgIGlmICghUmVmbGVjdC5oYXNNZXRhZGF0YShcImJpbmRpbmdzXCIsIHRoaXMub2JqZWN0KSlcbiAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcy5vYmplY3QsIFwiYmluZGluZ3NcIiwgbmV3IE1hcCgpKTtcbiAgICAgICAgY29uc3QgbURhdGEgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMub2JqZWN0LCBcImJpbmRpbmdzXCIpO1xuICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB0aGlzLm9iamVjdFt0aGlzLnByb3BlcnR5XTtcbiAgICAgICAgaWYgKG1EYXRhKSB7XG4gICAgICAgICAgICBpZiAoIW1EYXRhLmhhcyh0aGlzLnByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgIG1EYXRhLnNldCh0aGlzLnByb3BlcnR5LCBbXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSwge1xuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIG1vZGVsR2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQuZGVzY3JpcHRvciAmJiB0aGF0LmRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQuZGVzY3JpcHRvci5nZXQuY2FsbCh0aGF0Lm9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGF0Lm9iamVjdCwgdGhhdC5wcm9wZXJ0eSkudmFsdWVPZigpIHx8IGluaXRpYWxWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBtb2RlbFNldChuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWwgPT09IHRoYXQub2JqZWN0W3RoYXQucHJvcGVydHldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGF0LmRlc2NyaXB0b3IgJiYgdGhhdC5kZXNjcmlwdG9yLnNldClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmRlc2NyaXB0b3Iuc2V0LmNhbGwodGhhdC5vYmplY3QsIG5ld1ZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlZmxlY3RUb0luaXRpYXRvcnMobmV3VmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgYmluZGluZ0Rlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YSh0aGlzLm9iamVjdCwgXCJiaW5kaW5nRGVzY3JpcHRvclwiLCBiaW5kaW5nRGVzY3JpcHRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0ZWx5RGVmaW5lZEJpbmRpbmdzID0gbURhdGEuZ2V0KHRoaXMucHJvcGVydHkpO1xuICAgICAgICAgICAgaWYgKGRlZmluaXRlbHlEZWZpbmVkQmluZGluZ3MpIHtcbiAgICAgICAgICAgICAgICBsZXQgYWxyZWFkeUJvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBbaW5kZXgsIGJpbmRpbmddIG9mIGRlZmluaXRlbHlEZWZpbmVkQmluZGluZ3MuZW50cmllcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiaW5kaW5nLmluaXRpYXRvciA9PT0gdGhpcy5pbml0aWF0b3IgJiYgYmluZGluZy5pbml0aWF0b3JQcm9wZXJ0eSA9PT0gdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGVseURlZmluZWRCaW5kaW5nc1tpbmRleF0gPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxyZWFkeUJvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghYWxyZWFkeUJvdW5kKVxuICAgICAgICAgICAgICAgICAgICBkZWZpbml0ZWx5RGVmaW5lZEJpbmRpbmdzLnB1c2godGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzdG9yZURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSwgdmFsdWUsIGRlc2NyaXB0b3IpIHtcbiAgICAgICAgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5KTtcbiAgICAgICAgaWYgKGRlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9XG4gICAgICAgIG9iamVjdFtwcm9wZXJ0eS50b1N0cmluZygpXSA9IHZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydHMuQmluZGluZyA9IEJpbmRpbmc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRbWx1WkdsdVp5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiR2xpTDBKcGJtUnBibWN1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3d3UTBGQmVVUTdRVUZEZWtRc2QwUkJRWEZFTzBGQlEzSkVMR3RFUVVGMVJqdEJRWGRDZGtZc1RVRkJZU3hQUVVGUE8wbEJNa1JvUWl4WlFVRlpMRTFCUVZNc1JVRkJSU3hSUVVGWExFVkJRVVVzVDBGQmIwSXNWMEZCVnp0UlFVTXZSQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXp0UlFVTnlRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXp0UlFVTjZRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVdHFRaXhKUVVGSkxGVkJRVlVzUjBGQmJVTXNUMEZCVHl4RFFVRkRMSGRDUVVGM1FpeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlF6bEhMRTFCUVUwc2FVSkJRV2xDTEVkQlFVY3NjMEpCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEcxQ1FVRnRRaXhEUVVGRExFTkJRVU03VVVGRmVFVXNTVUZCU1N4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU0xUWl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hGUVVGRk8xbEJRMmhDTEZOQlFWTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzFsQlF6ZERMRWxCUVVrc1EwRkJReXhUUVVGVE8yZENRVUZGTEUxQlFVMDdXVUZEZEVJc1NVRkJTU3hUUVVGVExFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NTMEZCU3l4cFFrRkJhVUk3WjBKQlFVVXNVMEZCVXl4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdXVUZEYmtjc1ZVRkJWU3hIUVVGSExFOUJRVThzUTBGQlF5eDNRa0ZCZDBJc1EwRkJReXhUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMU5CUXpORk8xRkJRMFFzU1VGQlNTeFZRVUZWTEVsQlFVa3NhVUpCUVdsQ0xFbEJRVWtzVlVGQlZTeExRVUZMTEdsQ1FVRnBRaXhGUVVGRk8xbEJRM0pGTEUxQlFVMHNTMEZCU3l4SFFVRkhMSE5DUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRaUVVOdVJDeE5RVUZOTEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTTdXVUZET1VRc1NVRkJTU3hSUVVGUk8yZENRVUZGTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWRCUVVjc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXp0VFFVTXhSRHRSUVVORUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlR0WlFVRkZMRWxCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzVlVGQlZTeERRVUZETzBsQlEzWkVMRU5CUVVNN1NVRlJUU3hQUVVGUE8xRkJRMVlzU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4TFFVRkxMRmRCUVZjN1dVRkJSU3hQUVVGUExFbEJRVWtzTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVhsQ0xFTkJRVU03VVVGRE1VWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0SlFVTjBReXhEUVVGRE8wbEJUMDBzYlVKQlFXMUNMRU5CUVVNc1RVRkJXVHRSUVVOdVF5eEpRVUZKTEUxQlFVMHNXVUZCV1N3eVFrRkJXVHRaUVVGRkxFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1VVRkRPVVFzU1VGQlNTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4TFFVRkxMRTFCUVUwc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeExRVUZMTEZkQlFWYzdXVUZCUlN4UFFVRlBPMUZCUXpOR0xFMUJRVTBzUzBGQlN5eEhRVUZITEhOQ1FVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVTnVSQ3hKUVVGSkxFdEJRVXNzUlVGQlJUdFpRVU5RTEUxQlFVMHNVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMWxCUXpGRExFbEJRVWtzVVVGQlVUdG5Ra0ZCUlN4TFFVRkxMRTFCUVUwc1QwRkJUeXhKUVVGSkxGRkJRVkU3YjBKQlFVVXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU03VTBGRGRrYzdTVUZEVEN4RFFVRkRPMGxCVVUwc1pVRkJaU3hEUVVGRExFMUJRVms3VVVGREwwSXNTVUZCU1N4TlFVRk5MRmxCUVZrc01rSkJRVms3V1VGQlJTeE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJRemxFTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NUVUZCVFN4SlFVRkpMRWxCUVVrc1EwRkJReXhKUVVGSkxFdEJRVXNzVlVGQlZUdFpRVUZGTEU5QlFVODdVVUZET1VVc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRE8wbEJRM2hETEVOQlFVTTdTVUZUVFN4UFFVRlBMRU5CUVRCRUxGTkJRVmtzUlVGQlJTeFJRVUZYTzFGQlF6ZEdMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzVTBGQlV5eERRVUZETzFGQlF6TkNMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNSMEZCUnl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRE4wTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTzFsQlF6RkVMSGxDUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4clFrRkJhMElzUlVGQlJTeEpRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRha1U3VVVGRFJDeE5RVUZOTEdOQlFXTXNSMEZCUnl4elFrRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNhMEpCUVd0Q0xFTkJRVU1zU1VGQlNTeEpRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTNCR0xFMUJRVTBzWjBKQlFXZENMRWRCUVVjc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF6dFJRVU53UlN4SlFVRkpMR2RDUVVGblFqdFpRVUZGTEdkQ1FVRm5RaXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFGQlEyaEVMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU5hTEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRM0pFTEVOQlFVTTdTVUZQVFN4TlFVRk5PMUZCUlZRc1RVRkJUU3hYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03VVVGREwwTXNUVUZCVFN4alFVRmpMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF6dFJRVWM1UkN4TlFVRk5MRmRCUVZjc1IwRkJSeXh6UWtGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRGVrUXNUVUZCVFN4alFVRmpMRWRCUVVjc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRPMUZCUTJoR0xFMUJRVTBzWTBGQll5eEhRVUZITEhOQ1FVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeHJRa0ZCYTBJc1EwRkJReXhEUVVGRE8xRkJRM1pGTEUxQlFVMHNaMEpCUVdkQ0xFZEJRVWNzWTBGQll5eERRVUZETEVOQlFVTXNRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTTdVVUZGYWtjc1NVRkJTU3hqUVVGakxFVkJRVVU3V1VGRGFFSXNOa0pCUVhOQ0xFTkJRVU1zWTBGQll5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUXpkRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNUVUZCVFN4RlFVRkZPMmRDUVVONFFpeEpRVUZKTEZkQlFWYzdiMEpCUVVVc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1owSkJRMjVFTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzVjBGQlZ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRoUVVOd1JqdFRRVU5LTzFGQlJVUXNTVUZCU1N4blFrRkJaMElzUlVGQlJUdFpRVU5zUWl4SlFVRkpMR05CUVdNN1owSkJRVVVzWTBGQll5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNRMEZCUXp0WlFVTnNSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzWTBGQll5eEZRVUZGTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eERRVUZETzFOQlF6VkhPMGxCUTB3c1EwRkJRenRKUVZOUExFbEJRVWs3VVVGRlVpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhWUVVGVkxFVkJRVVVzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0WlFVRkZMSGxDUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4VlFVRlZMRVZCUVVVc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEzUkhMRTFCUVUwc1MwRkJTeXhIUVVGSExITkNRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVU51UkN4TlFVRk5MRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVWb1JDeEpRVUZKTEV0QlFVc3NSVUZCUlR0WlFVVlFMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSVHRuUWtGRE0wSXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMmRDUVVNM1FpeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1owSkJRMnhDTEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1owSkJRMjVFTEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZPMjlDUVVNdlF5eEhRVUZITEVWQlFVVXNVMEZCVXl4UlFVRlJPM2RDUVVkc1FpeEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWxCUVVrc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVWQlFVVTdORUpCUTNoRExFOUJRVThzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0NVFrRkRhRVE3T3pSQ1FVRk5MRTlCUVU4c09FSkJRVzFDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRWxCUVVrc1dVRkJXU3hEUVVGRE8yOUNRVU0xUml4RFFVRkRPMjlDUVVORUxFZEJRVWNzUlVGQlJTeFRRVUZUTEZGQlFWRXNRMEZCUXl4TlFVRlpPM2RDUVVNdlFpeEpRVUZKTEUxQlFVMHNTMEZCU3l4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTTdORUpCUVVVc1QwRkJUenQzUWtGSGJFUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnpzMFFrRkJSU3hKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0M1FrRkZNVVlzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzI5Q1FVTnlReXhEUVVGRE8yOUNRVU5FTEZsQlFWa3NSVUZCUlN4SlFVRkpPMjlDUVVOc1FpeFZRVUZWTEVWQlFVVXNTVUZCU1R0cFFrRkRia0lzUTBGQlF5eERRVUZETzJkQ1FVTklMRTFCUVUwc2FVSkJRV2xDTEVkQlFVY3NUMEZCVHl4RFFVRkRMSGRDUVVGM1FpeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzJkQ1FVTjJSaXg1UWtGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc2JVSkJRVzFDTEVWQlFVVXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF6dGhRVU4yUlR0WlFVVkVMRTFCUVUwc2VVSkJRWGxDTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdXVUZETTBRc1NVRkJTU3g1UWtGQmVVSXNSVUZCUlR0blFrRkRNMElzU1VGQlNTeFpRVUZaTEVkQlFVY3NTMEZCU3l4RFFVRkRPMmRDUVVONlFpeExRVUZMTEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhEUVVGRExFbEJRVWtzZVVKQlFYbENMRU5CUVVNc1QwRkJUeXhGUVVGRkxFVkJRVVU3YjBKQlEyaEZMRWxCUVVrc1QwRkJUeXhEUVVGRExGTkJRVk1zUzBGQlN5eEpRVUZKTEVOQlFVTXNVMEZCVXl4SlFVRkpMRTlCUVU4c1EwRkJReXhwUWtGQmFVSXNTMEZCU3l4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVTdkMEpCUXpsR0xIbENRVUY1UWl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF6dDNRa0ZEZUVNc1dVRkJXU3hIUVVGSExFbEJRVWtzUTBGQlF6dDNRa0ZEY0VJc1RVRkJUVHR4UWtGRFZEdHBRa0ZEU2p0blFrRkZSQ3hKUVVGSkxFTkJRVU1zV1VGQldUdHZRa0ZCUlN4NVFrRkJlVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1lVRkRNMFE3VTBGRFNqdEpRVU5NTEVOQlFVTTdTVUZaVHl4cFFrRkJhVUlzUTBGQlF5eE5RVUZ6UWl4RlFVRkZMRkZCUVcxQ0xFVkJRVVVzUzBGQlZTeEZRVUZGTEZWQlFYRkNPMUZCUTNCSExFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNUVUZCVFN4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRM3BETEVsQlFVa3NWVUZCVlN4RlFVRkZPMWxCUTFvc1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRUUVVNNVJUdFJRVU5FTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTTdTVUZEZUVNc1EwRkJRenREUVVOS08wRkJlRkJFTERCQ1FYZFFReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBNb2RpZmljYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCB0eXBlID0gXCJkZWxldGVcIikge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxufVxuZXhwb3J0cy5Nb2RpZmljYXRpb24gPSBNb2RpZmljYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lUVzlrYVdacFkyRjBhVzl1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5c2FXSXZUVzlrYVdacFkyRjBhVzl1TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJVVUVzVFVGQllTeFpRVUZaTzBsQmJVSnlRaXhaUVVGWkxFdEJRVmNzUlVGQlJTeFBRVUZ4UWl4UlFVRlJPMUZCUTJ4RUxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTI1Q0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVMHNTVUZCU1N4RFFVRkRPMGxCUTNoQ0xFTkJRVU03U1VGUlRTeFBRVUZQTzFGQlExWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8wbEJRM1JDTEVOQlFVTTdTVUZSVFN4UlFVRlJMRU5CUVVNc1MwRkJWVHRSUVVOMFFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVOMlFpeERRVUZETzBOQlEwbzdRVUV6UTBRc2IwTkJNa05ESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgTW9kaWZpY2F0aW9uXzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kaWZpY2F0aW9uXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuY2xhc3MgUHJvcGVydHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHksIHBhcmFtcykge1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHBhcmFtcyk7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZG9TZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IHRoaXMucHJvcGVydHkudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuc2F2ZUluTG9jYWxTdG9yYWdlICYmIFwiZ2V0TmFtZXNwYWNlZFN0b3JhZ2VcIiBpbiB0aGlzLm9iamVjdCkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLm9iamVjdC5nZXROYW1lc3BhY2VkU3RvcmFnZShzdHJpbmdLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSAmJiB0aGlzLnN0b3JlVGVtcG9yYXJ5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5leHBpcmVzICYmIHRoaXMuZXhwaXJlcyA8IERhdGUubm93KCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMub2JqZWN0LCBcImRlZmF1bHRTZXR0aW5nc1wiKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGRlZmF1bHRTZXR0aW5ncyAmJiAhdGhpcy5udWxsYWJsZSA/IGRlZmF1bHRTZXR0aW5nc1tzdHJpbmdLZXldIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGRvU2V0VmFsdWUodmFsdWUsIG1vZGlmeVZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlT2YoKSA9PT0gdmFsdWUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCB2YWx1ZVRvUGFzcyA9IHZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNb2RpZmljYXRpb25fMS5Nb2RpZmljYXRpb24pXG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgaWYgKG1vZGlmeVZhbHVlKVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlVG9QYXNzO1xuICAgICAgICB0aGlzLmFkZEV4cGlyYXRpb24odmFsdWVUb1Bhc3MpO1xuICAgICAgICBpZiAodGhpcy5zaG91bGRVcGRhdGVOc1N0b3JhZ2UoKSAmJiBcInNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlXCIgaW4gdGhpcy5vYmplY3QpIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0LnNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKHRoaXMucHJvcGVydHkudG9TdHJpbmcoKSwgdmFsdWVUb1Bhc3MpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZEV4cGlyYXRpb24odmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgIXRoaXMuc3RvcmVUZW1wb3JhcnkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IHRoaXMucHJvcGVydHkudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5leHBpcmVzID0gRGF0ZS5ub3coKSArIHRoaXMuc3RvcmVUZW1wb3Jhcnk7XG4gICAgICAgIGlmICh0aGlzLmV4cGlyYXRpb25UaW1lb3V0KVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZXhwaXJhdGlvblRpbWVvdXQpO1xuICAgICAgICB0aGlzLmV4cGlyYXRpb25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMub2JqZWN0LCBcImRlZmF1bHRTZXR0aW5nc1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbFZhbHVlID0gZGVmYXVsdFNldHRpbmdzICYmICF0aGlzLm51bGxhYmxlID8gZGVmYXVsdFNldHRpbmdzW3N0cmluZ0tleV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLm9iamVjdFtzdHJpbmdLZXldID0gbmV3IE1vZGlmaWNhdGlvbl8xLk1vZGlmaWNhdGlvbihkZWxWYWx1ZSk7XG4gICAgICAgIH0sIHRoaXMuc3RvcmVUZW1wb3JhcnkpO1xuICAgIH1cbiAgICBzaG91bGRVcGRhdGVOc1N0b3JhZ2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5zYXZlSW5Mb2NhbFN0b3JhZ2UgfHwgIWVudmlyb25tZW50XzEuaXNCcm93c2VyKCkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IHRoaXMucHJvcGVydHkudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3Qga2V5U2hvdWxkQmVVcGRhdGVkID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLm9iamVjdCwgXCJrZXlTaG91bGRCZVVwZGF0ZWRcIikgfHwge307XG4gICAgICAgIGlmIChrZXlTaG91bGRCZVVwZGF0ZWRbc3RyaW5nS2V5XSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoXCJnZXROYW1lc3BhY2VkU3RvcmFnZVwiIGluIHRoaXMub2JqZWN0ICYmXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5nZXROYW1lc3BhY2VkU3RvcmFnZShzdHJpbmdLZXkpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcy5vYmplY3QsIFwia2V5U2hvdWxkQmVVcGRhdGVkXCIsIE9iamVjdC5hc3NpZ24oa2V5U2hvdWxkQmVVcGRhdGVkLCB7IFtzdHJpbmdLZXldOiB0cnVlIH0pKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBCb29sZWFuKG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5vYmplY3QsIFwiY29uc3RydWN0aW9uQ29tcGxldGVcIikpO1xuICAgIH1cbn1cbmV4cG9ydHMuUHJvcGVydHkgPSBQcm9wZXJ0eTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVISnZjR1Z5ZEhrdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyeHBZaTlRY205d1pYSjBlUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVTkJMSGRFUVVGeFJEdEJRVU55UkN4clJFRkJhMFU3UVVGRGJFVXNkMFJCUVcxRU8wRkJaMFJ1UkN4TlFVRmhMRkZCUVZFN1NVRnhSV3BDTEZsQlFWa3NUVUZCVXl4RlFVRkZMRkZCUVZjc1JVRkJSU3hOUVVGM1FqdFJRVU40UkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dFJRVU55UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF6dFJRVU42UWl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVTm9ReXhEUVVGRE8wbEJVMDBzVVVGQlVTeERRVUZETEV0QlFWYzdVVUZEZGtJc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZMTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRha01zUTBGQlF6dEpRVlZOTEU5QlFVODdVVUZEVml4TlFVRk5MRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUlRORExFbEJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkZka0lzU1VGQlNTeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFbEJRVWtzYzBKQlFYTkNMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJUdFpRVU5zUlN4TFFVRkxMRWRCUVc5Q0xFbEJRVWtzUTBGQlF5eE5RVUZQTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVMEZEZWtVN1VVRkZSQ3hKUVVGSkxFdEJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RlFVRkZPMWxCUXpsQ0xFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlR0blFrRkRNME1zVFVGQlRTeGxRVUZsTEVkQlFVY3NjMEpCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEdsQ1FVRnBRaXhEUVVGRExFTkJRVU03WjBKQlEzQkZMRXRCUVVzc1IwRkJSeXhsUVVGbExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJhMElzWlVGQlowSXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETzJGQlEzaEhPenRuUWtGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRUUVVNM1FqdFJRVU5FTEU5QlFVOHNTMEZCU3l4RFFVRkRPMGxCUTJwQ0xFTkJRVU03U1VGWlV5eFZRVUZWTEVOQlFVTXNTMEZCVnl4RlFVRkZMRmRCUVc5Q08xRkJRMnhFTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFdEJRVXM3V1VGQlJTeFBRVUZQTzFGQlEzSkRMRWxCUVVrc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU40UWl4SlFVRkpMRXRCUVVzc1dVRkJXU3d5UWtGQldUdFpRVUZGTEZkQlFWY3NSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGRGFrVXNTVUZCU1N4WFFVRlhPMWxCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFhRVUZYTEVOQlFVTTdVVUZETVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTm9ReXhKUVVGSkxFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1JVRkJSU3hKUVVGSkxEUkNRVUUwUWl4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVU3V1VGRE5VUXNTVUZCU1N4RFFVRkRMRTFCUVU4c1EwRkJReXd3UWtGQk1FSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEZkQlFWY3NRMEZCUXl4RFFVRkRPMU5CUTI1SE8wbEJRMHdzUTBGQlF6dEpRVmRUTEdGQlFXRXNRMEZCUXl4TFFVRlhPMUZCUXk5Q0xFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGak8xbEJRVVVzVDBGQlR6dFJRVU40UkN4TlFVRk5MRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUlRORExFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTTdVVUZGYUVRc1NVRkJTU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENPMWxCUVVVc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8xRkJRMnBGTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUjBGQlJ5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RlFVRkZPMWxCUTNKRExFMUJRVTBzWlVGQlpTeEhRVUZITEhOQ1FVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeHBRa0ZCYVVJc1EwRkJiVUlzUTBGQlF6dFpRVU4wUml4TlFVRk5MRkZCUVZFc1IwRkJSeXhsUVVGbExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhsUVVGbExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJRenRaUVVNelJTeEpRVUZKTEVOQlFVTXNUVUZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFbEJRVWtzTWtKQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVNeFJTeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRE8wbEJRelZDTEVOQlFVTTdTVUZUVXl4eFFrRkJjVUk3VVVGRE0wSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNTVUZCU1N4RFFVRkRMSFZDUVVGVExFVkJRVVU3V1VGQlJTeFBRVUZQTEV0QlFVc3NRMEZCUXp0UlFVTXpSQ3hOUVVGTkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJRek5ETEUxQlFVMHNhMEpCUVd0Q0xFZEJRVWNzYzBKQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxHOUNRVUZ2UWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRMmhHTEVsQlFVa3NhMEpCUVd0Q0xFTkJRVU1zVTBGQlV5eERRVUZETzFsQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNN1VVRkRMME1zU1VGQlNTeHpRa0ZCYzBJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRUdFpRVU53UWl4SlFVRkpMRU5CUVVNc1RVRkJUeXhEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExGTkJRVk1zUlVGQlJUdFpRVU0zUlN4NVFrRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNiMEpCUVc5Q0xFVkJRVVVzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4clFrRkJhMElzUlVGQlJTeEZRVUZGTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkhMRTlCUVU4c1NVRkJTU3hEUVVGRE8xTkJRMlk3VVVGRFJDeFBRVUZQTEU5QlFVOHNRMEZCUXl4elFrRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNjMEpCUVhOQ0xFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzSkZMRU5CUVVNN1EwRkRTanRCUVM5TFJDdzBRa0VyUzBNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBNb2RpZmljYXRpb25fMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Nb2RpZmljYXRpb25cIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3Qgb25fY2hhbmdlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwib24tY2hhbmdlXCIpKTtcbmNvbnN0IGxvZGFzaF8xID0gcmVxdWlyZShcImxvZGFzaFwiKTtcbmNvbnN0IGNsb25lX2RlZXBfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJjbG9uZS1kZWVwXCIpKTtcbmNsYXNzIFdhdGNoZWQge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHksIHBhcmFtcykge1xuICAgICAgICB0aGlzLmlzU2hhbGxvdyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgY29uc3QgY2FwaXRhbGl6ZWRQcm9wID0gdXRpbF8xLnVjRmlyc3QocHJvcGVydHkpO1xuICAgICAgICBjb25zdCBvbkluaXRGdW5jID0gYG9uJHtjYXBpdGFsaXplZFByb3B9SW5pdGA7XG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlRnVuYyA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfUNoYW5nZWA7XG4gICAgICAgIGNvbnN0IG9uQWRkRnVuYyA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfUFkZGA7XG4gICAgICAgIGNvbnN0IG9uUmVtb3ZlRnVuYyA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfVJlbW92ZWA7XG4gICAgICAgIHRoaXMub25Jbml0ID0gcGFyYW1zID8gcGFyYW1zLm9uSW5pdCB8fCBvbkluaXRGdW5jIDogb25Jbml0RnVuYztcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHBhcmFtcyA/IHBhcmFtcy5vbkNoYW5nZSB8fCBvbkNoYW5nZUZ1bmMgOiBvbkNoYW5nZUZ1bmM7XG4gICAgICAgIHRoaXMub25BZGQgPSBwYXJhbXMgPyBwYXJhbXMub25BZGQgfHwgb25BZGRGdW5jIDogb25BZGRGdW5jO1xuICAgICAgICB0aGlzLm9uUmVtb3ZlID0gcGFyYW1zID8gcGFyYW1zLm9uUmVtb3ZlIHx8IG9uUmVtb3ZlRnVuYyA6IG9uUmVtb3ZlRnVuYztcbiAgICAgICAgdGhpcy5pc1NoYWxsb3cgPSBwYXJhbXMgPyBCb29sZWFuKHBhcmFtcy5pc1NoYWxsb3cpIDogZmFsc2U7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGxldCBvbGRWYWwgPSB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgaWYgKG9sZFZhbCA9PT0gdmFsdWUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCB2YWx1ZVRvUGFzcyA9IHZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNb2RpZmljYXRpb25fMS5Nb2RpZmljYXRpb24pXG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgb2xkVmFsID0gY2xvbmVfZGVlcF8xLmRlZmF1bHQob2xkVmFsKTtcbiAgICAgICAgdmFsdWVUb1Bhc3MgPSB0aGlzLmdldEFycmF5T2JqZWN0UHJveHkodmFsdWVUb1Bhc3MpO1xuICAgICAgICBpZiAodGhpcy5zdWJPYmplY3QpIHtcbiAgICAgICAgICAgIHRoaXMuc3ViT2JqZWN0LnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWVUb1Bhc3M7XG4gICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlIGluIHRoaXMub2JqZWN0ICYmIHRoaXMuaXNJbml0aWFsaXplZClcbiAgICAgICAgICAgIHRoaXMub2JqZWN0W3RoaXMub25DaGFuZ2VdKG9sZFZhbCk7XG4gICAgICAgIGlmICh0aGlzLm9uSW5pdCBpbiB0aGlzLm9iamVjdCAmJiAhdGhpcy5pc0luaXRpYWxpemVkKVxuICAgICAgICAgICAgdGhpcy5vYmplY3RbdGhpcy5vbkluaXRdKHZhbHVlVG9QYXNzKTtcbiAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViT2JqZWN0KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ViT2JqZWN0LnZhbHVlT2YoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHNldFN1Yk9iamVjdChzdWJPYmplY3QpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gb25fY2hhbmdlXzEuZGVmYXVsdC51bnN1YnNjcmliZSh0aGlzLnZhbHVlT2YoKSk7XG4gICAgICAgIHZhbHVlID0gdGhpcy5nZXRBcnJheU9iamVjdFByb3h5KHZhbHVlKTtcbiAgICAgICAgdGhpcy5zdWJPYmplY3QgPSBzdWJPYmplY3Q7XG4gICAgICAgIHRoaXMuc3ViT2JqZWN0LnNldFZhbHVlKHZhbHVlKTtcbiAgICB9XG4gICAgZ2V0QXJyYXlPYmplY3RQcm94eSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSB8fCBsb2Rhc2hfMS5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBvbl9jaGFuZ2VfMS5kZWZhdWx0KHZhbHVlLCAocGF0aCwgY2hhbmdlZFZhbHVlLCBwcmV2aW91c1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3S2V5cyA9IE9iamVjdC5rZXlzKGNoYW5nZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkS2V5cyA9IE9iamVjdC5rZXlzKHByZXZpb3VzVmFsdWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0xlbiA9IG5ld0tleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZExlbiA9IG9sZEtleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FzZURldGVjdEV4ZWMoe1xuICAgICAgICAgICAgICAgICAgICBsZW4xOiBuZXdMZW4sXG4gICAgICAgICAgICAgICAgICAgIGxlbjI6IG9sZExlbixcbiAgICAgICAgICAgICAgICAgICAgZnVuYzogdGhpcy5vbkFkZCxcbiAgICAgICAgICAgICAgICAgICAga2V5czE6IG5ld0tleXMsXG4gICAgICAgICAgICAgICAgICAgIGtleXMyOiBvbGRLZXlzLFxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHBhdGhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhc2VEZXRlY3RFeGVjKHtcbiAgICAgICAgICAgICAgICAgICAgbGVuMTogb2xkTGVuLFxuICAgICAgICAgICAgICAgICAgICBsZW4yOiBuZXdMZW4sXG4gICAgICAgICAgICAgICAgICAgIGZ1bmM6IHRoaXMub25SZW1vdmUsXG4gICAgICAgICAgICAgICAgICAgIGtleXMxOiBvbGRLZXlzLFxuICAgICAgICAgICAgICAgICAgICBrZXlzMjogbmV3S2V5cyxcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0xlbiA9PT0gb2xkTGVuICYmIHRoaXMub25DaGFuZ2UgaW4gdGhpcyAmJiB0aGlzLmlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmplY3RbdGhpcy5vbkNoYW5nZV0oY2hhbmdlZFZhbHVlLCBwYXRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7IGlzU2hhbGxvdzogdGhpcy5pc1NoYWxsb3cgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjYXNlRGV0ZWN0RXhlYyhjZFBhcmFtcykge1xuICAgICAgICBpZiAoY2RQYXJhbXMubGVuMSA+IGNkUGFyYW1zLmxlbjIgJiYgY2RQYXJhbXMuZnVuYyBpbiB0aGlzLm9iamVjdCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBtb2RpZmllZCBvZiBjZFBhcmFtcy5rZXlzMSkge1xuICAgICAgICAgICAgICAgIGlmICghY2RQYXJhbXMua2V5czIuaW5jbHVkZXMobW9kaWZpZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0W2NkUGFyYW1zLmZ1bmNdKChjZFBhcmFtcy5jaGFuZ2VkVmFsdWUpW21vZGlmaWVkXSwgY2RQYXJhbXMucGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuV2F0Y2hlZCA9IFdhdGNoZWQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWMkYwWTJobFpDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiR2xpTDFkaGRHTm9aV1F1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRMEVzZDBSQlFYRkVPMEZCUTNKRUxEQkRRVUV3UXp0QlFVTXhReXhyUlVGQmFVTTdRVUZEYWtNc2JVTkJRV3RETzBGQlEyeERMRzlGUVVGdFF6dEJRU3RJYmtNc1RVRkJZU3hQUVVGUE8wbEJNRVpvUWl4WlFVRlpMRTFCUVZNc1JVRkJSU3hSUVVGWExFVkJRVVVzVFVGQmRVSTdVVUZ5UW5CRUxHTkJRVk1zUjBGQldTeExRVUZMTEVOQlFVTTdVVUZ0UW5oQ0xHdENRVUZoTEVkQlFWa3NTMEZCU3l4RFFVRkRPMUZCUjNKRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUTNKQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRPMUZCUlhwQ0xFMUJRVTBzWlVGQlpTeEhRVUZITEdOQlFVOHNRMEZCUXl4UlFVRnJRaXhEUVVGRExFTkJRVU03VVVGRmNFUXNUVUZCVFN4VlFVRlZMRWRCUVVjc1MwRkJTeXhsUVVGbExFMUJRVTBzUTBGQlF6dFJRVU01UXl4TlFVRk5MRmxCUVZrc1IwRkJSeXhMUVVGTExHVkJRV1VzVVVGQlVTeERRVUZETzFGQlEyeEVMRTFCUVUwc1UwRkJVeXhIUVVGSExFdEJRVXNzWlVGQlpTeExRVUZMTEVOQlFVTTdVVUZETlVNc1RVRkJUU3haUVVGWkxFZEJRVWNzUzBGQlN5eGxRVUZsTEZGQlFWRXNRMEZCUXp0UlFVVnNSQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzU1VGQlNTeFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJRenRSUVVOb1JTeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNTVUZCU1N4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExGbEJRVmtzUTBGQlF6dFJRVU40UlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXp0UlFVTTFSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzU1VGQlNTeFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmxCUVZrc1EwRkJRenRSUVVWNFJTeEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETzBsQlEyaEZMRU5CUVVNN1NVRlZUU3hSUVVGUkxFTkJRVU1zUzBGQlZ6dFJRVU4yUWl4SlFVRkpMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdVVUZETlVJc1NVRkJTU3hOUVVGTkxFdEJRVXNzUzBGQlN6dFpRVUZGTEU5QlFVODdVVUZGTjBJc1NVRkJTU3hYUVVGWExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlEzaENMRWxCUVVrc1MwRkJTeXhaUVVGWkxESkNRVUZaTzFsQlFVVXNWMEZCVnl4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dFJRVWRxUlN4TlFVRk5MRWRCUVVjc2IwSkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVY3pRaXhYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFGQlJYQkVMRWxCUVVrc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJUdFpRVU5vUWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0VFFVTnNRenM3V1VGQlRTeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRmRCUVZjc1EwRkJRenRSUVVkb1F5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzU1VGQlNTeEpRVUZKTEVOQlFVTXNZVUZCWVR0WlFVRnRRaXhKUVVGSkxFTkJRVU1zVFVGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVVUzUnl4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaE8xbEJRVzFDTEVsQlFVa3NRMEZCUXl4TlFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUXk5SExFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRPMGxCUXpsQ0xFTkJRVU03U1VGVlRTeFBRVUZQTzFGQlExWXNTVUZCU1N4SlFVRkpMRU5CUVVNc1UwRkJVenRaUVVGRkxFOUJRVThzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRSUVVOd1JDeFBRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1NVRkRkRUlzUTBGQlF6dEpRVlZOTEZsQlFWa3NRMEZCUXl4VFFVRnRRanRSUVVOdVF5eEpRVUZKTEV0QlFVc3NSMEZCUnl4dFFrRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVWcVJDeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTNoRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUXpOQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMjVETEVOQlFVTTdTVUZYVHl4dFFrRkJiVUlzUTBGQlF5eExRVUZYTzFGQlEyNURMRWxCUVVrc1MwRkJTeXhaUVVGWkxFdEJRVXNzU1VGQlNTeHBRa0ZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRek5ETEU5QlFVOHNiVUpCUVZFc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNXVUZCV1N4RlFVRkZMR0ZCUVdFc1JVRkJSU3hGUVVGRk8yZENRVU42UkN4TlFVRk5MRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZUTEZsQlFWa3NRMEZCUXl4RFFVRkRPMmRDUVVOc1JDeE5RVUZOTEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGVExHRkJRV0VzUTBGQlF5eERRVUZETzJkQ1FVTnVSQ3hOUVVGTkxFMUJRVTBzUjBGQlJ5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRPMmRDUVVNNVFpeE5RVUZOTEUxQlFVMHNSMEZCUnl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRE8yZENRVWM1UWl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRE8yOUNRVU5vUWl4SlFVRkpMRVZCUVVVc1RVRkJUVHR2UWtGRFdpeEpRVUZKTEVWQlFVVXNUVUZCVFR0dlFrRkRXaXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVczdiMEpCUTJoQ0xFdEJRVXNzUlVGQlJTeFBRVUZQTzI5Q1FVTmtMRXRCUVVzc1JVRkJSU3hQUVVGUE8yOUNRVU5rTEZsQlFWazdiMEpCUTFvc1NVRkJTVHRwUWtGRFVDeERRVUZETEVOQlFVTTdaMEpCUlVnc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF6dHZRa0ZEYUVJc1NVRkJTU3hGUVVGRkxFMUJRVTA3YjBKQlExb3NTVUZCU1N4RlFVRkZMRTFCUVUwN2IwSkJRMW9zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJPMjlDUVVOdVFpeExRVUZMTEVWQlFVVXNUMEZCVHp0dlFrRkRaQ3hMUVVGTExFVkJRVVVzVDBGQlR6dHZRa0ZEWkN4WlFVRlpPMjlDUVVOYUxFbEJRVWs3YVVKQlExQXNRMEZCUXl4RFFVRkRPMmRDUVVWSUxFbEJRVWtzVFVGQlRTeExRVUZMTEUxQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hKUVVGSkxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNZVUZCWVN4RlFVRkZPMjlDUVVOcVJDeEpRVUZKTEVOQlFVTXNUVUZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eFpRVUZaTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN2FVSkJRM0JGTzFsQlEwd3NRMEZCUXl4RlFVRkZMRVZCUVVVc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNKRE8xRkJRMFFzVDBGQlR5eExRVUZMTEVOQlFVTTdTVUZEYWtJc1EwRkJRenRKUVZOUExHTkJRV01zUTBGQlF5eFJRVUV5UWp0UlFVTTVReXhKUVVGSkxGRkJRVkVzUTBGQlF5eEpRVUZKTEVkQlFVY3NVVUZCVVN4RFFVRkRMRWxCUVVrc1NVRkJTU3hSUVVGUkxFTkJRVU1zU1VGQlNTeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRMMFFzUzBGQlN5eE5RVUZOTEZGQlFWRXNTVUZCU1N4UlFVRlJMRU5CUVVNc1MwRkJTeXhGUVVGRk8yZENRVU51UXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVN2IwSkJRemxDTEVsQlFVa3NRMEZCUXl4TlFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGTkxGRkJRVkVzUTBGQlF5eEZRVUZGTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenR2UWtGRGVrWXNUVUZCVFR0cFFrRkRWRHRoUVVOS08xTkJRMG83U1VGRFRDeERRVUZETzBOQlEwbzdRVUY2VDBRc01FSkJlVTlESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5mdW5jdGlvbiBCRE9UZXN0RmFjdG9yeShjdG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIGxldCBCRE9UZXN0ID0gY2xhc3MgQkRPVGVzdCBleHRlbmRzIGN0b3Ige1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gJ3Rlc3QnO1xuICAgICAgICAgICAgdGhpcy50ZXN0T2JqID0ge307XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoeyBzdG9yZVRlbXBvcmFyeTogNTAwMCB9KSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIEJET1Rlc3QucHJvdG90eXBlLCBcInRpdGxlXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLmF0dHJpYnV0ZSh7IG51bGxhYmxlOiB0cnVlIH0pLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgQkRPVGVzdC5wcm90b3R5cGUsIFwiZGVzY3JpcHRpb25cIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoeyBudWxsYWJsZTogdHJ1ZSB9KSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdHlwZW9mIChfYSA9IHR5cGVvZiBPYmplY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgT2JqZWN0KSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3QpXG4gICAgXSwgQkRPVGVzdC5wcm90b3R5cGUsIFwidGVzdE9ialwiLCB2b2lkIDApO1xuICAgIEJET1Rlc3QgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKHsgaXNBYnN0cmFjdDogdHJ1ZSwgY29sbGVjdGlvbk5hbWU6IFwiQkRPVGVzdFwiIH0pXG4gICAgXSwgQkRPVGVzdCk7XG4gICAgcmV0dXJuIEJET1Rlc3Q7XG59XG5leHBvcnRzLkJET1Rlc3RGYWN0b3J5ID0gQkRPVGVzdEZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQVkdWemRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiVzlrWld4ekwwSkVUMVJsYzNRdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc2MwUkJRVFpGTzBGQlZUZEZMRk5CUVdkQ0xHTkJRV01zUTBGQmMwTXNTVUZCVnpzN1NVRlRNMFVzU1VGQlpTeFBRVUZQTEVkQlFYUkNMRTFCUVdVc1QwRkJVU3hUUVVGUkxFbEJRVWs3VVVGRWJrTTdPMWxCVTJkRUxGVkJRVXNzUjBGQlZ5eE5RVUZOTEVOQlFVTTdXVUZuUWpsQ0xGbEJRVThzUjBGQldTeEZRVUZGTEVOQlFVTTdVVUZGTDBRc1EwRkJRenRMUVVGQkxFTkJRVUU3U1VGc1FuZERPMUZCUVhCRExITkNRVUZUTEVOQlFVTXNSVUZCUlN4alFVRmpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFTkJRVU03T3pCRFFVRXJRanRKUVZGd1F6dFJRVUU1UWl4elFrRkJVeXhEUVVGRExFVkJRVVVzVVVGQlVTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkRPenRuUkVGQk5rSTdTVUZSTjBJN1VVRkJOMElzY1VKQlFWRXNRMEZCUXl4RlFVRkZMRkZCUVZFc1JVRkJSU3hKUVVGSkxFVkJRVVVzUTBGQlF6czRSRUZCYTBJc1RVRkJUU3h2UWtGQlRpeE5RVUZOT3pSRFFVRk5PMGxCZUVKb1JDeFBRVUZQTzFGQlJISkNMRFJDUVVGbExFTkJRVU1zUlVGQlJTeFZRVUZWTEVWQlFVVXNTVUZCU1N4RlFVRkZMR05CUVdNc1JVRkJSU3hUUVVGVExFVkJRVVVzUTBGQlF6dFBRVU5zUkN4UFFVRlBMRU5CTUVKeVFqdEpRVU5FTEU5QlFVOHNUMEZCVHl4RFFVRkRPMEZCUlc1Q0xFTkJRVU03UVVGMFEwUXNkME5CYzBOREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuZnVuY3Rpb24gQkRPVGVzdDFGYWN0b3J5KGN0b3IpIHtcbiAgICBsZXQgQkRPVGVzdDEgPSBjbGFzcyBCRE9UZXN0MSBleHRlbmRzIGN0b3Ige1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICB0aGlzLm9oYSA9ICd0ZXN0JztcbiAgICAgICAgfVxuICAgICAgICBkb1NvbWV0aGluZygpIHtcbiAgICAgICAgICAgIHJldHVybiBcImxvbFwiO1xuICAgICAgICB9XG4gICAgICAgIG9uT2hhSW5pdChfdmFsdWUpIHtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KHsgc2F2ZUluTG9jYWxTdG9yYWdlOiB0cnVlIH0pLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgQkRPVGVzdDEucHJvdG90eXBlLCBcIm9oYVwiLCB2b2lkIDApO1xuICAgIEJET1Rlc3QxID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3Rvcih7IGlzQWJzdHJhY3Q6IHRydWUsIGNvbGxlY3Rpb25OYW1lOiBcIkJET1Rlc3QxXCIgfSlcbiAgICBdLCBCRE9UZXN0MSk7XG4gICAgcmV0dXJuIEJET1Rlc3QxO1xufVxuZXhwb3J0cy5CRE9UZXN0MUZhY3RvcnkgPSBCRE9UZXN0MUZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQVkdWemRERXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMjF2WkdWc2N5OUNSRTlVWlhOME1TNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGRFFTeHpSRUZCYTBVN1FVRlRiRVVzVTBGQlowSXNaVUZCWlN4RFFVRnJSQ3hKUVVGWE8wbEJWWGhHTEVsQlFXVXNVVUZCVVN4SFFVRjJRaXhOUVVGbExGRkJRVk1zVTBGQlVTeEpRVUZKTzFGQlJIQkRPenRaUVZOdFJDeFJRVUZITEVkQlFWY3NUVUZCVFN4RFFVRkRPMUZCYzBKNFJTeERRVUZETzFGQlpGVXNWMEZCVnp0WlFVTmtMRTlCUVU4c1MwRkJTeXhEUVVGRE8xRkJRMnBDTEVOQlFVTTdVVUZUVXl4VFFVRlRMRU5CUVVNc1RVRkJZenRSUVVWc1F5eERRVUZETzB0QlEwb3NRMEZCUVR0SlFYUkNNa003VVVGQmRrTXNjVUpCUVZFc1EwRkJReXhGUVVGRkxHdENRVUZyUWl4RlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVGRE96dDVRMEZCTmtJN1NVRlNla1FzVVVGQlVUdFJRVVIwUWl3MFFrRkJaU3hEUVVGRExFVkJRVVVzVlVGQlZTeEZRVUZGTEVsQlFVa3NSVUZCUlN4alFVRmpMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFTkJRVU03VDBGRGJrUXNVVUZCVVN4RFFUaENkRUk3U1VGRFJDeFBRVUZQTEZGQlFWRXNRMEZCUXp0QlFVTndRaXhEUVVGRE8wRkJNVU5FTERCRFFUQkRReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBDaHVua18xID0gcmVxdWlyZShcIi4vQ2h1bmtcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xubGV0IENlbGwgPSBjbGFzcyBDZWxsIHtcbiAgICBjb25zdHJ1Y3RvcihfcGFyYW1zKSB7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMuY2F2ZSA9IDA7XG4gICAgICAgIHRoaXMucml2ZXIgPSAwO1xuICAgICAgICB0aGlzLmh1bWlkaXR5ID0gMDtcbiAgICAgICAgdGhpcy50ZW1wZXJhdHVyZSA9IDA7XG4gICAgICAgIHRoaXMuY2h1bmsgPSBuZXcgQ2h1bmtfMS5DaHVuaygpO1xuICAgIH1cbn07XG5DZWxsID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgQ29uc3RQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIgJiYgQ29uc3RQYXJhbXMpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdF0pXG5dLCBDZWxsKTtcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMlZzYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmJXOWtaV3h6TDBObGJHd3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN1FVRkJRU3h0UTBGQlowTTdRVUZEYUVNc2MwUkJRWGRFTzBGQlUzaEVMRWxCUVdFc1NVRkJTU3hIUVVGcVFpeE5RVUZoTEVsQlFVazdTVUY1UkdJc1dVRkJXU3hQUVVFeVFqdFJRV3hFYUVNc1RVRkJReXhIUVVGWExFTkJRVU1zUTBGQlF6dFJRVkZrTEUxQlFVTXNSMEZCVnl4RFFVRkRMRU5CUVVNN1VVRlJaQ3hUUVVGSkxFZEJRVmNzUTBGQlF5eERRVUZETzFGQlVXcENMRlZCUVVzc1IwRkJWeXhEUVVGRExFTkJRVU03VVVGUmJFSXNZVUZCVVN4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVZGeVFpeG5Ra0ZCVnl4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVZGNFFpeFZRVUZMTEVkQlFWVXNTVUZCU1N4aFFVRkxMRVZCUVVVc1EwRkJRenRKUVVWVExFTkJRVU03UTBGREwwTXNRMEZCUVR0QlFURkVXU3hKUVVGSk8wbEJSR2hDTERSQ1FVRmxMRVZCUVVVN2FVVkJNRVJSTEZkQlFWY3NiMEpCUVZnc1YwRkJWenRIUVhwRWVFSXNTVUZCU1N4RFFUQkVhRUk3UVVFeFJGa3NiMEpCUVVraWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBvcGVuX3NpbXBsZXhfbm9pc2VfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJvcGVuLXNpbXBsZXgtbm9pc2VcIikpO1xuY29uc3QgbG9kYXNoXzEgPSByZXF1aXJlKFwibG9kYXNoXCIpO1xuY29uc3QgQ2VsbF8xID0gcmVxdWlyZShcIi4vQ2VsbFwiKTtcbmNsYXNzIENodW5rIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy5zaXplID0gNjQ7XG4gICAgICAgIHRoaXMuZ3JpZCA9IFtdO1xuICAgICAgICB0aGlzLnNpbXBsZXhDYXZlID0gbmV3IG9wZW5fc2ltcGxleF9ub2lzZV8xLmRlZmF1bHQoMSk7XG4gICAgICAgIHRoaXMuc2ltcGxleFJpdmVyID0gbmV3IG9wZW5fc2ltcGxleF9ub2lzZV8xLmRlZmF1bHQoMik7XG4gICAgICAgIHRoaXMuc2ltcGxleFRlbXBlcmF0dXJlID0gbmV3IG9wZW5fc2ltcGxleF9ub2lzZV8xLmRlZmF1bHQoMyk7XG4gICAgICAgIHRoaXMuc2ltcGxleEh1bWlkaXR5ID0gbmV3IG9wZW5fc2ltcGxleF9ub2lzZV8xLmRlZmF1bHQoNCk7XG4gICAgICAgIGxvZGFzaF8xLm1lcmdlKHRoaXMsIHBhcmFtcyk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVHcmlkKCk7XG4gICAgfVxuICAgIGdlbmVyYXRlR3JpZCgpIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5zaXplOyByb3crKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdyaWRbcm93XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5wdXNoKFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuc2l6ZTsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4Q29vcmRpbmF0ZSA9IGNvbCArIHRoaXMueCAqIHRoaXMuc2l6ZTtcbiAgICAgICAgICAgICAgICBjb25zdCB5Q29vcmRpbmF0ZSA9IHJvdyArIHRoaXMueSAqIHRoaXMuc2l6ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRbcm93XS5wdXNoKG5ldyBDZWxsXzEuQ2VsbCh7XG4gICAgICAgICAgICAgICAgICAgIHg6IHhDb29yZGluYXRlLFxuICAgICAgICAgICAgICAgICAgICB5OiB5Q29vcmRpbmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgY2F2ZTogdGhpcy5zaW1wbGV4Q2F2ZS5ub2lzZTJEKHhDb29yZGluYXRlIC8gMTAwLCB5Q29vcmRpbmF0ZSAvIDEwMCksXG4gICAgICAgICAgICAgICAgICAgIHJpdmVyOiB0aGlzLnNpbXBsZXhSaXZlci5ub2lzZTJEKHhDb29yZGluYXRlIC8gNTAwLCB5Q29vcmRpbmF0ZSAvIDUwMCksXG4gICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiB0aGlzLnNpbXBsZXhUZW1wZXJhdHVyZS5ub2lzZTJEKHhDb29yZGluYXRlIC8gMjUwMCwgeUNvb3JkaW5hdGUgLyAyNTAwKSxcbiAgICAgICAgICAgICAgICAgICAgaHVtaWRpdHk6IHRoaXMuc2ltcGxleEh1bWlkaXR5Lm5vaXNlMkQoeENvb3JkaW5hdGUgLyAyNTAwLCB5Q29vcmRpbmF0ZSAvIDI1MDApLFxuICAgICAgICAgICAgICAgICAgICBjaHVuazogdGhpc1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuQ2h1bmsgPSBDaHVuaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyaDFibXN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDIxdlpHVnNjeTlEYUhWdWF5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTeHZSa0ZCYTBRN1FVRkRiRVFzYlVOQlFTdENPMEZCUXk5Q0xHbERRVUU0UWp0QlFWRTVRaXhOUVVGaExFdEJRVXM3U1VGelJXUXNXVUZCV1N4TlFVRXlRanRSUVM5RWFFTXNUVUZCUXl4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVZGa0xFMUJRVU1zUjBGQlZ5eERRVUZETEVOQlFVTTdVVUZSWkN4VFFVRkpMRWRCUVZrc1JVRkJSU3hEUVVGRE8xRkJVMmhDTEZOQlFVa3NSMEZCWVN4RlFVRkZMRU5CUVVNN1VVRlRjRUlzWjBKQlFWY3NSMEZCY1VJc1NVRkJTU3cwUWtGQlowSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVZONFJDeHBRa0ZCV1N4SFFVRnhRaXhKUVVGSkxEUkNRVUZuUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJVM3BFTEhWQ1FVRnJRaXhIUVVGeFFpeEpRVUZKTERSQ1FVRm5RaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlV5OUVMRzlDUVVGbExFZEJRWEZDTEVsQlFVa3NORUpCUVdkQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZIYkVVc1kwRkJTeXhEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTndRaXhKUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTTdTVUZEZUVJc1EwRkJRenRKUVZGVExGbEJRVms3VVVGRGJFSXNTMEZCU3l4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZaTEVsQlFVa3NRMEZCUXl4SlFVRkxMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVU3V1VGRGFFUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdaMEpCUTJwQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8yRkJRM1JDTzFsQlEwUXNTMEZCU3l4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZaTEVsQlFVa3NRMEZCUXl4SlFVRkxMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVU3WjBKQlEyaEVMRTFCUVUwc1YwRkJWeXhIUVVGSExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRlhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU03WjBKQlEzSkVMRTFCUVUwc1YwRkJWeXhIUVVGSExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRlhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU03WjBKQlJYSkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVTm1MRWxCUVVrc1YwRkJTU3hEUVVGRE8yOUNRVU5NTEVOQlFVTXNSVUZCUlN4WFFVRlhPMjlDUVVOa0xFTkJRVU1zUlVGQlJTeFhRVUZYTzI5Q1FVTmtMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRWRCUVVjc1IwRkJSeXhGUVVGRkxGZEJRVmNzUjBGQlJ5eEhRVUZITEVOQlFVTTdiMEpCUTNCRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFZEJRVWNzUjBGQlJ5eEZRVUZGTEZkQlFWY3NSMEZCUnl4SFFVRkhMRU5CUVVNN2IwSkJRM1JGTEZkQlFWY3NSVUZCUlN4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFVkJRVVVzVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXp0dlFrRkRjRVlzVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUjBGQlJ5eEpRVUZKTEVWQlFVVXNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJRenR2UWtGRE9VVXNTMEZCU3l4RlFVRkZMRWxCUVVrN2FVSkJRMlFzUTBGQlF5eERRVU5NTEVOQlFVTTdZVUZEVER0VFFVTktPMGxCUTB3c1EwRkJRenREUVVOS08wRkJlRWRFTEhOQ1FYZEhReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBCRE9Db25maWdGYWN0b3J5KGN0b3IpIHtcbiAgICBjbGFzcyBCRE9Db25maWcgZXh0ZW5kcyBjdG9yIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXMgPSBbXCIvOm5hbWVcIl07XG4gICAgICAgICAgICB0aGlzLmpzb25Pbmx5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gQkRPQ29uZmlnO1xufVxuZXhwb3J0cy5CRE9Db25maWdGYWN0b3J5ID0gQkRPQ29uZmlnRmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBRMjl1Wm1sbkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXliM1YwWlhNdlFrUlBRMjl1Wm1sbkxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCVTBFc1UwRkJaMElzWjBKQlFXZENMRU5CUVhORExFbEJRVmM3U1VGVk4wVXNUVUZCWlN4VFFVRlZMRk5CUVZFc1NVRkJTVHRSUVVGeVF6czdXVUZQVnl4WFFVRk5MRWRCUVdFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVTh6UWl4aFFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRemxDTEVOQlFVTTdTMEZCUVR0SlFVVkVMRTlCUVU4c1UwRkJVeXhEUVVGRE8wRkJRM0pDTEVOQlFVTTdRVUUxUWtRc05FTkJORUpESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gQkRPR2FtZUxvYmJ5RmFjdG9yeShjdG9yKSB7XG4gICAgY2xhc3MgQkRPR2FtZUxvYmJ5IGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyTmFtZVNwYWNlID0gJy8nO1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVN0cmluZyA9IHJlcXVpcmUoJ35iZG8vdmlld3MvZ2FtZUxvYmJ5Lm5qaycpO1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvaGE6ICdPT09PT0hBQUFBQUFBQSEhISdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQkRPR2FtZUxvYmJ5LmF0dGFjaFRvU2VydmVycyA9IFtcIkdhbWVTZXJ2ZXJcIl07XG4gICAgcmV0dXJuIEJET0dhbWVMb2JieTtcbn1cbmV4cG9ydHMuQkRPR2FtZUxvYmJ5RmFjdG9yeSA9IEJET0dhbWVMb2JieUZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQUjJGdFpVeHZZbUo1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5eWIzVjBaWE12UWtSUFIyRnRaVXh2WW1KNUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCVlVFc1UwRkJaMElzYlVKQlFXMUNMRU5CUVhORExFbEJRVmM3U1VGVGFFWXNUVUZCWlN4WlFVRmhMRk5CUVZFc1NVRkJTVHRSUVVGNFF6czdXVUZuUWxjc2IwSkJRV1VzUjBGQlJ5eEhRVUZITEVOQlFVTTdXVUZSYmtJc2JVSkJRV01zUjBGQllTeFBRVUZQTEVOQlFVTXNNRUpCUVRCQ0xFTkJRVU1zUTBGQlF6dFJRV00zUlN4RFFVRkRPMUZCVEdFc1MwRkJTeXhEUVVGRExHTkJRV003V1VGRE1VSXNUMEZCVHp0blFrRkRTQ3hIUVVGSExFVkJRVVVzYlVKQlFXMUNPMkZCUXpOQ0xFTkJRVU03VVVGRFRpeERRVUZET3p0SlFUVkNZU3cwUWtGQlpTeEhRVUZoTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1NVRXJRamRFTEU5QlFVOHNXVUZCV1N4RFFVRkRPMEZCUTNoQ0xFTkJRVU03UVVGc1JFUXNhMFJCYTBSREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIEJET0hvbWVGYWN0b3J5KGN0b3IpIHtcbiAgICBjbGFzcyBCRE9Ib21lIGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyTmFtZVNwYWNlID0gJy8nO1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVN0cmluZyA9IHJlcXVpcmUoJ35iZG8vdmlld3MvaG9tZS5uamsnKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyB0ZW1wbGF0ZVBhcmFtcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb2hhOiAnZW5kbGljaCB6dSBIYXVzZSA9KSdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQkRPSG9tZS5hdHRhY2hUb1NlcnZlcnMgPSBbXCJXZWJTZXJ2ZXJcIl07XG4gICAgcmV0dXJuIEJET0hvbWU7XG59XG5leHBvcnRzLkJET0hvbWVGYWN0b3J5ID0gQkRPSG9tZUZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQU0c5dFpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZjbTkxZEdWekwwSkVUMGh2YldVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZWUVN4VFFVRm5RaXhqUVVGakxFTkJRWE5ETEVsQlFWYzdTVUZUTTBVc1RVRkJaU3hQUVVGUkxGTkJRVkVzU1VGQlNUdFJRVUZ1UXpzN1dVRm5RbGNzYjBKQlFXVXNSMEZCUnl4SFFVRkhMRU5CUVVNN1dVRlJia0lzYlVKQlFXTXNSMEZCWVN4UFFVRlBMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNRMEZCUXp0UlFXTjRSU3hEUVVGRE8xRkJUR0VzUzBGQlN5eERRVUZETEdOQlFXTTdXVUZETVVJc1QwRkJUenRuUWtGRFNDeEhRVUZITEVWQlFVVXNjVUpCUVhGQ08yRkJRemRDTEVOQlFVTTdVVUZEVGl4RFFVRkRPenRKUVRWQ1lTeDFRa0ZCWlN4SFFVRmhMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03U1VFclFqVkVMRTlCUVU4c1QwRkJUeXhEUVVGRE8wRkJRMjVDTEVOQlFVTTdRVUZzUkVRc2QwTkJhMFJESW4wPSIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL3NvdXJjZS9hcHAvdXRpbHMgc3luYyByZWN1cnNpdmVcIjsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCJyZWZsZWN0LW1ldGFkYXRhXCIpO1xuY29uc3QgQmluZGluZ18xID0gcmVxdWlyZShcIn5iZG8vbGliL0JpbmRpbmdcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuY29uc3QgUHJvcGVydHlfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Qcm9wZXJ0eVwiKTtcbmNvbnN0IEF0dHJpYnV0ZV8xID0gcmVxdWlyZShcIn5iZG8vbGliL0F0dHJpYnV0ZVwiKTtcbmNvbnN0IFdhdGNoZWRfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9XYXRjaGVkXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgdHlwZV9ncmFwaHFsXzEgPSByZXF1aXJlKFwidHlwZS1ncmFwaHFsXCIpO1xuZnVuY3Rpb24gd2F0Y2hlZChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcERlc2MgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBrZXkpO1xuICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0dGVyKHRoaXMsIGtleSwgcHJvcERlc2MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld1ZhbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IGtleS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMsIHN0cmluZ0tleSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IG5ldyBXYXRjaGVkXzEuV2F0Y2hlZCh0aGlzLCBzdHJpbmdLZXksIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKG1EYXRhIGluc3RhbmNlb2YgQXR0cmlidXRlXzEuQXR0cmlidXRlIHx8IG1EYXRhIGluc3RhbmNlb2YgUHJvcGVydHlfMS5Qcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wLnNldFN1Yk9iamVjdChtRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lV2lsZGNhcmRNZXRhZGF0YSh0aGlzLCBzdHJpbmdLZXksIHByb3ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghbURhdGEpXG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lV2lsZGNhcmRNZXRhZGF0YSh0aGlzLCBzdHJpbmdLZXksIHByb3ApO1xuICAgICAgICAgICAgICAgIHNldHRlcih0aGlzLCBrZXksIG5ld1ZhbCwgcHJvcERlc2MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmV4cG9ydHMud2F0Y2hlZCA9IHdhdGNoZWQ7XG5mdW5jdGlvbiBwcm9wZXJ0eShwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcERlc2MgPSBiZWZvcmVQcm9wZXJ0eURlc2NyaXB0b3JzKHRhcmdldCwga2V5LnRvU3RyaW5nKCksIFwiZGVmaW5lZFByb3BlcnRpZXNcIik7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBrZXkpO1xuICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0dGVyKHRoaXMsIGtleSwgcHJvcERlc2MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld1ZhbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IGtleS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMsIHN0cmluZ0tleSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IG5ldyBQcm9wZXJ0eV8xLlByb3BlcnR5KHRoaXMsIHN0cmluZ0tleSwgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAoIW1EYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lV2lsZGNhcmRNZXRhZGF0YSh0aGlzLCBzdHJpbmdLZXksIHByb3ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtRGF0YSBpbnN0YW5jZW9mIFdhdGNoZWRfMS5XYXRjaGVkICYmICFtRGF0YS5zdWJPYmplY3QpXG4gICAgICAgICAgICAgICAgICAgIG1EYXRhLnNldFN1Yk9iamVjdChwcm9wKTtcbiAgICAgICAgICAgICAgICBpZiAoIShtRGF0YSBpbnN0YW5jZW9mIFdhdGNoZWRfMS5XYXRjaGVkKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXR0ZXIodGhpcywga2V5LCBuZXdWYWwsIHByb3BEZXNjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcERlc2MgJiYgcHJvcERlc2Muc2V0KVxuICAgICAgICAgICAgICAgICAgICBwcm9wRGVzYy5zZXQuY2FsbCh0aGlzLCBuZXdWYWwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmV4cG9ydHMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbmZ1bmN0aW9uIGF0dHJpYnV0ZSh0eXBlRnVuYywgcGFyYW1zKSB7XG4gICAgcmV0dXJuICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBpZiAodHlwZUZ1bmMgJiYgISh0eXBlRnVuYyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSAmJiAhcGFyYW1zKVxuICAgICAgICAgICAgcGFyYW1zID0gdHlwZUZ1bmM7XG4gICAgICAgIGlmICghcGFyYW1zKVxuICAgICAgICAgICAgcGFyYW1zID0ge307XG4gICAgICAgIGlmICh0eXBlRnVuYyBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmIHBhcmFtcylcbiAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLkZpZWxkKHR5cGVGdW5jLCBwYXJhbXMpKHRhcmdldCwga2V5KTtcbiAgICAgICAgZWxzZSBpZiAodHlwZUZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbilcbiAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLkZpZWxkKHR5cGVGdW5jKSh0YXJnZXQsIGtleSk7XG4gICAgICAgIGVsc2UgaWYgKHBhcmFtcylcbiAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLkZpZWxkKHBhcmFtcykodGFyZ2V0LCBrZXkpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5GaWVsZCgpKHRhcmdldCwga2V5KTtcbiAgICAgICAgY29uc3QgcHJvcERlc2MgPSBiZWZvcmVQcm9wZXJ0eURlc2NyaXB0b3JzKHRhcmdldCwga2V5LnRvU3RyaW5nKCksIFwiZGVmaW5lZEF0dHJpYnV0ZXNcIik7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBrZXkpO1xuICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0dGVyKHRoaXMsIGtleSwgcHJvcERlc2MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld1ZhbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IGtleS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMsIHN0cmluZ0tleSk7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0ciA9IG5ldyBBdHRyaWJ1dGVfMS5BdHRyaWJ1dGUodGhpcywgc3RyaW5nS2V5LCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGlmICghbURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhKHRoaXMsIHN0cmluZ0tleSwgYXR0cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1EYXRhIGluc3RhbmNlb2YgV2F0Y2hlZF8xLldhdGNoZWQgJiYgIW1EYXRhLnN1Yk9iamVjdClcbiAgICAgICAgICAgICAgICAgICAgbURhdGEuc2V0U3ViT2JqZWN0KGF0dHIpO1xuICAgICAgICAgICAgICAgIGlmICghKG1EYXRhIGluc3RhbmNlb2YgV2F0Y2hlZF8xLldhdGNoZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldHRlcih0aGlzLCBrZXksIG5ld1ZhbCwgcHJvcERlc2MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9wRGVzYyAmJiBwcm9wRGVzYy5zZXQpXG4gICAgICAgICAgICAgICAgICAgIHByb3BEZXNjLnNldC5jYWxsKHRoaXMsIG5ld1ZhbCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xufVxuZXhwb3J0cy5hdHRyaWJ1dGUgPSBhdHRyaWJ1dGU7XG5mdW5jdGlvbiBiYXNlQ29uc3RydWN0b3IobmFtZSwgb3B0aW9ucywgY29uc3RQYXJhbXNJbmRleCA9IDApIHtcbiAgICByZXR1cm4gKGN0b3IpID0+IHtcbiAgICAgICAgY29uc3QgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGN0b3IpO1xuICAgICAgICBpZiAocHJvdG90eXBlLm5hbWUgPT09IFwiQmFzZUNvbnN0cnVjdG9yXCIpIHtcbiAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihjdG9yLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgJiYgKHR5cGVvZiBuYW1lID09PSBcIm51bWJlclwiKSlcbiAgICAgICAgICAgIGNvbnN0UGFyYW1zSW5kZXggPSBuYW1lO1xuICAgICAgICBpZiAobmFtZSAmJiAodHlwZW9mIG5hbWUgPT09IFwib2JqZWN0XCIpKVxuICAgICAgICAgICAgb3B0aW9ucyA9IG5hbWU7XG4gICAgICAgIGlmIChuYW1lICYmICgodHlwZW9mIG5hbWUgPT09IFwib2JqZWN0XCIpIHx8ICh0eXBlb2YgbmFtZSA9PT0gXCJudW1iZXJcIikpKVxuICAgICAgICAgICAgbmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgKHR5cGVvZiBvcHRpb25zID09PSBcIm51bWJlclwiKSlcbiAgICAgICAgICAgIGNvbnN0UGFyYW1zSW5kZXggPSBvcHRpb25zO1xuICAgICAgICBpZiAob3B0aW9ucyAmJiAodHlwZW9mIG9wdGlvbnMgPT09IFwibnVtYmVyXCIpKVxuICAgICAgICAgICAgb3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKFwiaXNCRE9Nb2RlbFwiIGluIGN0b3IpIHtcbiAgICAgICAgICAgIGlmIChuYW1lICYmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIikgJiYgb3B0aW9ucyAmJiAodHlwZW9mIG9wdGlvbnMgPT09IFwib2JqZWN0XCIpKSB7XG4gICAgICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuT2JqZWN0VHlwZShuYW1lLCBvcHRpb25zKShjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUgJiYgKHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLk9iamVjdFR5cGUobmFtZSkoY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zICYmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJvYmplY3RcIikpIHtcbiAgICAgICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5PYmplY3RUeXBlKG9wdGlvbnMpKGN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLk9iamVjdFR5cGUoKShjdG9yKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zICYmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJvYmplY3RcIikgJiYgb3B0aW9ucy5jb2xsZWN0aW9uTmFtZSkge1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEoY3RvciwgXCJjb2xsZWN0aW9uTmFtZVwiLCBvcHRpb25zLmNvbGxlY3Rpb25OYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucyAmJiAodHlwZW9mIG9wdGlvbnMgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pc0Fic3RyYWN0KSlcbiAgICAgICAgICAgIHJldHVybiBjdG9yO1xuICAgICAgICBjbGFzcyBCYXNlQ29uc3RydWN0b3IgZXh0ZW5kcyBjdG9yIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKC4uLnBhcmFtcykge1xuICAgICAgICAgICAgICAgIHN1cGVyKC4uLnBhcmFtcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsZWN0aW9uTmFtZSA9IEJhc2VDb25zdHJ1Y3Rvci5jb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgICAgICAgICBsZXQgY29uc3RQYXJhbXMgPSBwYXJhbXNbY29uc3RQYXJhbXNJbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKCEoY29uc3RQYXJhbXMgaW5zdGFuY2VvZiBPYmplY3QpKVxuICAgICAgICAgICAgICAgICAgICBjb25zdFBhcmFtcyA9IHt9O1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcywgXCJub3JtYWxGdW5jdGlvbmFsaXR5XCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0U2V0dGluZ3MgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMsIFwiZGVmYXVsdFNldHRpbmdzXCIpIHx8IHt9O1xuICAgICAgICAgICAgICAgIGRlZmF1bHRTZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdFNldHRpbmdzLCBjb25zdFBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKFwiZ2V0TmFtZXNwYWNlZFN0b3JhZ2VcIiBpbiB0aGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlZFNldHRpbmdzID0gdGhpcy5nZXROYW1lc3BhY2VkU3RvcmFnZShcIipcIiwgXCJpZFwiLCBjb25zdFBhcmFtcy5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdFNldHRpbmdzLCBjYWNoZWRTZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGVmYXVsdFNldHRpbmdzKTtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMsIFwiY29uc3RydWN0aW9uQ29tcGxldGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKFwiY29uc3RydWN0ZWRDYWxsYmFja1wiIGluIHRoaXMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0ZWRDYWxsYmFjayguLi5wYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEJhc2VDb25zdHJ1Y3Rvci5ncmFwaFFMVHlwZSA9IGN0b3I7XG4gICAgICAgIEJhc2VDb25zdHJ1Y3Rvci5jb2xsZWN0aW9uTmFtZSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoQmFzZUNvbnN0cnVjdG9yLCBcImNvbGxlY3Rpb25OYW1lXCIpO1xuICAgICAgICBpZiAoZW52aXJvbm1lbnRfMS5pc0Jyb3dzZXIoKSAmJiBjdG9yLmlzQmFzZUNvbXBvbmVudCkge1xuICAgICAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHV0aWxfMS5wYXNjYWxDYXNlMmtlYmFiQ2FzZShjdG9yLm5hbWUpLCBCYXNlQ29uc3RydWN0b3IsIHtcbiAgICAgICAgICAgICAgICBleHRlbmRzOiBCYXNlQ29uc3RydWN0b3IuZXh0ZW5kc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEJhc2VDb25zdHJ1Y3RvcjtcbiAgICB9O1xufVxuZXhwb3J0cy5iYXNlQ29uc3RydWN0b3IgPSBiYXNlQ29uc3RydWN0b3I7XG5leHBvcnRzLnF1ZXJ5ID0gdHlwZV9ncmFwaHFsXzEuUXVlcnk7XG5leHBvcnRzLmFyZyA9IHR5cGVfZ3JhcGhxbF8xLkFyZztcbmV4cG9ydHMuYXJncyA9IHR5cGVfZ3JhcGhxbF8xLkFyZ3M7XG5leHBvcnRzLnJlc29sdmVyID0gdHlwZV9ncmFwaHFsXzEuUmVzb2x2ZXI7XG5leHBvcnRzLnJvb3QgPSB0eXBlX2dyYXBocWxfMS5Sb290O1xuZXhwb3J0cy5tdXRhdGlvbiA9IHR5cGVfZ3JhcGhxbF8xLk11dGF0aW9uO1xuZXhwb3J0cy5zdWJzY3JpcHRpb24gPSB0eXBlX2dyYXBocWxfMS5TdWJzY3JpcHRpb247XG5leHBvcnRzLnB1YlN1YiA9IHR5cGVfZ3JhcGhxbF8xLlB1YlN1YjtcbmV4cG9ydHMuaW5wdXRUeXBlID0gdHlwZV9ncmFwaHFsXzEuSW5wdXRUeXBlO1xuZnVuY3Rpb24gYmVmb3JlUHJvcGVydHlEZXNjcmlwdG9ycyh0YXJnZXQsIGtleSwgbURhdGFOYW1lKSB7XG4gICAgY29uc3QgcHJvcERlc2MgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgaWYgKCFSZWZsZWN0Lmhhc01ldGFkYXRhKG1EYXRhTmFtZSwgdGFyZ2V0KSlcbiAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YSh0YXJnZXQsIG1EYXRhTmFtZSwgbmV3IEFycmF5KCkpO1xuICAgIGNvbnN0IG1hcCA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGFyZ2V0LCBtRGF0YU5hbWUpO1xuICAgIG1hcC5wdXNoKGtleS50b1N0cmluZygpKTtcbiAgICByZXR1cm4gcHJvcERlc2M7XG59XG5mdW5jdGlvbiBnZXR0ZXIoaW5zdGFuY2UsIGtleSwgcHJvcERlc2MpIHtcbiAgICBpZiAoIW1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwibm9ybWFsRnVuY3Rpb25hbGl0eVwiKSkge1xuICAgICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGluc3RhbmNlLCBcImRlZmF1bHRTZXR0aW5nc1wiKSB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRTZXR0aW5nc1trZXkudG9TdHJpbmcoKV07XG4gICAgfVxuICAgIGNvbnN0IHN0cmluZ0tleSA9IGtleS50b1N0cmluZygpO1xuICAgIGlmIChwcm9wRGVzYyAmJiBwcm9wRGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIHByb3BEZXNjLmdldC5jYWxsKGluc3RhbmNlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKGluc3RhbmNlLCBzdHJpbmdLZXkpO1xuICAgICAgICBpZiAobURhdGEpXG4gICAgICAgICAgICByZXR1cm4gbURhdGEudmFsdWVPZigpO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldHRlcihpbnN0YW5jZSwga2V5LCBuZXdWYWwsIHByb3BEZXNjKSB7XG4gICAgaWYgKCFtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGluc3RhbmNlLCBcIm5vcm1hbEZ1bmN0aW9uYWxpdHlcIikpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShpbnN0YW5jZSwgXCJkZWZhdWx0U2V0dGluZ3NcIikgfHwge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGVmYXVsdFNldHRpbmdzLCB7IFtrZXldOiBuZXdWYWwgfSk7XG4gICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEoaW5zdGFuY2UsIFwiZGVmYXVsdFNldHRpbmdzXCIsIGRlZmF1bHRTZXR0aW5ncyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3RyaW5nS2V5ID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgaWYgKGluc3RhbmNlW3N0cmluZ0tleV0gPT09IG5ld1ZhbClcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKGluc3RhbmNlLCBzdHJpbmdLZXkpO1xuICAgIGNvbnN0IGluaXRpYXRvck1EYXRhID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShpbnN0YW5jZSwgXCJpbml0aWF0b3JCaW5kaW5nXCIpO1xuICAgIGNvbnN0IGluaXRpYXRvckJpbmRpbmcgPSBpbml0aWF0b3JNRGF0YSA/IGluaXRpYXRvck1EYXRhLmdldChzdHJpbmdLZXkpIDogdW5kZWZpbmVkO1xuICAgIGlmIChuZXdWYWwgaW5zdGFuY2VvZiBCaW5kaW5nXzEuQmluZGluZykge1xuICAgICAgICBuZXdWYWwuaW5zdGFsbChpbnN0YW5jZSwgc3RyaW5nS2V5KTtcbiAgICAgICAgbmV3VmFsID0gbmV3VmFsLnZhbHVlT2YoKTtcbiAgICB9XG4gICAgbURhdGEuc2V0VmFsdWUobmV3VmFsKTtcbiAgICBpZiAoaW5pdGlhdG9yQmluZGluZylcbiAgICAgICAgaW5pdGlhdG9yQmluZGluZy5yZWZsZWN0VG9PYmplY3QobmV3VmFsKTtcbiAgICBpZiAocHJvcERlc2MgJiYgcHJvcERlc2Muc2V0KVxuICAgICAgICBwcm9wRGVzYy5zZXQuY2FsbChpbnN0YW5jZSwgbmV3VmFsKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpHVmpiM0poZEc5eWN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZkWFJwYkhNdlpHVmpiM0poZEc5eWN5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxEUkNRVUV3UWp0QlFVTXhRaXc0UTBGQk1rTTdRVUZETTBNc01FTkJRWFZFTzBGQlEzWkVMSGRFUVVGdFJEdEJRVU51UkN4blJFRkJPRVE3UVVGRE9VUXNhMFJCUVdsRk8wRkJRMnBGTERoRFFVRXlSRHRCUVVNelJDeHJSRUZCSzBjN1FVRkhMMGNzSzBOQldYTkNPMEZCTkVKMFFpeFRRVUZuUWl4UFFVRlBMRU5CUVVNc1UwRkJlVUlzUlVGQlJUdEpRVU12UXl4UFFVRlBMRU5CUVVNc1RVRkJWeXhGUVVGRkxFZEJRVzlDTEVWQlFVVXNSVUZCUlR0UlFVTjZReXhOUVVGTkxGRkJRVkVzUjBGQlJ5eFBRVUZQTEVOQlFVTXNkMEpCUVhkQ0xFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUnk5RUxFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM0JETEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUlVGQlJUdFpRVU5vUXl4SFFVRkhMRVZCUVVVc1UwRkJVeXhIUVVGSE8yZENRVU5pTEU5QlFVOHNUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdXVUZEZGtNc1EwRkJRenRaUVVORUxFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NRMEZCUXl4TlFVRlhPMmRDUVVONlFpeE5RVUZOTEZOQlFWTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03WjBKQlEycERMRTFCUVUwc1MwRkJTeXhIUVVGSExEaENRVUZ0UWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlF6dG5Ra0ZEYmtRc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeHBRa0ZCVHl4RFFVRk5MRWxCUVVrc1JVRkJSU3hUUVVGVExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdaMEpCUTNaRUxFbEJRVWtzUzBGQlN5eFpRVUZaTEhGQ1FVRlRMRWxCUVVrc1MwRkJTeXhaUVVGWkxHMUNRVUZSTEVWQlFVVTdiMEpCUTNwRUxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN2IwSkJRM3BDTEdsRFFVRnpRaXhEUVVGRExFbEJRVWtzUlVGQlJTeFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN2FVSkJRMnBFTzNGQ1FVRk5MRWxCUVVrc1EwRkJReXhMUVVGTE8yOUNRVUZGTEdsRFFVRnpRaXhEUVVGRExFbEJRVWtzUlVGQlJTeFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMnBGTEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFMUJRVTBzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0WlFVTjRReXhEUVVGRE8xbEJRMFFzVlVGQlZTeEZRVUZGTEVsQlFVazdXVUZEYUVJc1dVRkJXU3hGUVVGRkxFbEJRVWs3VTBGRGNrSXNRMEZCUXl4RFFVRkRPMGxCUTFBc1EwRkJReXhEUVVGRE8wRkJRMDRzUTBGQlF6dEJRWGhDUkN3d1FrRjNRa003UVVGVlJDeFRRVUZuUWl4UlFVRlJMRU5CUVVNc1UwRkJNRUlzUlVGQlJUdEpRVU5xUkN4UFFVRlBMRU5CUVVNc1RVRkJWeXhGUVVGRkxFZEJRVzlDTEVWQlFVVXNSVUZCUlR0UlFVTjZReXhOUVVGTkxGRkJRVkVzUjBGQlJ5eDVRa0ZCZVVJc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRzFDUVVGdFFpeERRVUZETEVOQlFVTTdVVUZGZUVZc1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRjRU1zVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRk8xbEJRMmhETEVkQlFVY3NSVUZCUlN4VFFVRlRMRWRCUVVjN1owSkJRMklzVDBGQlR5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVU4yUXl4RFFVRkRPMWxCUTBRc1IwRkJSeXhGUVVGRkxGTkJRVk1zUjBGQlJ5eERRVUZETEUxQlFWYzdaMEpCUTNwQ0xFMUJRVTBzVTBGQlV5eEhRVUZITEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRuUWtGRGFrTXNUVUZCVFN4TFFVRkxMRWRCUVVjc09FSkJRVzFDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRE8yZENRVU51UkN4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxHMUNRVUZSTEVOQlFVMHNTVUZCU1N4RlFVRkZMRk5CUVZNc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dG5Ra0ZEZUVRc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJUdHZRa0ZEVWl4cFEwRkJjMElzUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8ybENRVU5xUkR0eFFrRkJUU3hKUVVGSkxFdEJRVXNzV1VGQldTeHBRa0ZCVHl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk03YjBKQlFVVXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEYkVZc1NVRkJTU3hEUVVGRExFTkJRVU1zUzBGQlN5eFpRVUZaTEdsQ1FVRlBMRU5CUVVNc1JVRkJSVHR2UWtGRE4wSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFVkJRVVVzVFVGQlRTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMmxDUVVOMlF6dHhRa0ZCVFN4SlFVRkpMRkZCUVZFc1NVRkJTU3hSUVVGUkxFTkJRVU1zUjBGQlJ6dHZRa0ZCUlN4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkRla1VzUTBGQlF6dFpRVU5FTEZWQlFWVXNSVUZCUlN4SlFVRkpPMWxCUTJoQ0xGbEJRVmtzUlVGQlJTeEpRVUZKTzFOQlEzSkNMRU5CUVVNc1EwRkJRenRKUVVOUUxFTkJRVU1zUTBGQlF6dEJRVU5PTEVOQlFVTTdRVUY0UWtRc05FSkJkMEpETzBGQlpVUXNVMEZCWjBJc1UwRkJVeXhEUVVGRExGRkJRVEpDTEVWQlFVVXNUVUZCZVVJN1NVRkROVVVzVDBGQlR5eERRVUZETEUxQlFWY3NSVUZCUlN4SFFVRnZRaXhGUVVGRkxFVkJRVVU3VVVGRGVrTXNTVUZCU1N4UlFVRlJMRWxCUVVrc1EwRkJReXhEUVVGRExGRkJRVkVzV1VGQldTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwN1dVRkJSU3hOUVVGTkxFZEJRVWNzVVVGQlVTeERRVUZETzFGQlF6bEZMRWxCUVVrc1EwRkJReXhOUVVGTk8xbEJRVVVzVFVGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVZDZRaXhKUVVGSkxGRkJRVkVzV1VGQldTeFJRVUZSTEVsQlFVa3NUVUZCVFR0WlFVRkZMRzlDUVVGTExFTkJRVU1zVVVGQlVTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dGhRVU0xUlN4SlFVRkpMRkZCUVZFc1dVRkJXU3hSUVVGUk8xbEJRVVVzYjBKQlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdZVUZETDBRc1NVRkJTU3hOUVVGTk8xbEJRVVVzYjBKQlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdPMWxCUTNaRExHOUNRVUZMTEVWQlFVVXNRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRE1VSXNUVUZCVFN4UlFVRlJMRWRCUVVjc2VVSkJRWGxDTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUlVGQlJTeHRRa0ZCYlVJc1EwRkJReXhEUVVGRE8xRkJSWGhHTEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzQkRMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NSVUZCUlR0WlFVTm9ReXhIUVVGSExFVkJRVVVzVTBGQlV5eEhRVUZITzJkQ1FVTmlMRTlCUVU4c1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1dVRkRka01zUTBGQlF6dFpRVU5FTEVkQlFVY3NSVUZCUlN4VFFVRlRMRWRCUVVjc1EwRkJReXhOUVVGWE8yZENRVU42UWl4TlFVRk5MRk5CUVZNc1IwRkJSeXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdaMEpCUTJwRExFMUJRVTBzUzBGQlN5eEhRVUZITERoQ1FVRnRRaXhEUVVGRExFbEJRVWtzUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXp0blFrRkRia1FzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4eFFrRkJVeXhEUVVGTkxFbEJRVWtzUlVGQlJTeFRRVUZUTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1owSkJRM3BFTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN2IwSkJRMUlzYVVOQlFYTkNMRU5CUVVNc1NVRkJTU3hGUVVGRkxGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0cFFrRkRha1E3Y1VKQlFVMHNTVUZCU1N4TFFVRkxMRmxCUVZrc2FVSkJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4VFFVRlRPMjlDUVVGRkxFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMnhHTEVsQlFVa3NRMEZCUXl4RFFVRkRMRXRCUVVzc1dVRkJXU3hwUWtGQlR5eERRVUZETEVWQlFVVTdiMEpCUXpkQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVUwc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dHBRa0ZEZGtNN2NVSkJRVTBzU1VGQlNTeFJRVUZSTEVsQlFVa3NVVUZCVVN4RFFVRkRMRWRCUVVjN2IwSkJRVVVzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzFsQlEzcEZMRU5CUVVNN1dVRkRSQ3hWUVVGVkxFVkJRVVVzU1VGQlNUdFpRVU5vUWl4WlFVRlpMRVZCUVVVc1NVRkJTVHRUUVVOeVFpeERRVUZETEVOQlFVTTdTVUZEVUN4RFFVRkRMRU5CUVVNN1FVRkRUaXhEUVVGRE8wRkJhRU5FTERoQ1FXZERRenRCUVZWRUxGTkJRV2RDTEdWQlFXVXNRMEZCUXl4SlFVRjNRaXhGUVVGRkxFOUJRWEZDTEVWQlFVVXNiVUpCUVRKQ0xFTkJRVU03U1VGRmVrY3NUMEZCVHl4RFFVRkRMRWxCUVZNc1JVRkJSU3hGUVVGRk8xRkJRMnBDTEUxQlFVMHNVMEZCVXl4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZET1VNc1NVRkJTU3hUUVVGVExFTkJRVU1zU1VGQlNTeExRVUZMTEdsQ1FVRnBRaXhGUVVGRk8xbEJRM1JETEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOcVJUdFJRVWRFTEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhKUVVGSkxFdEJRVXNzVVVGQlVTeERRVUZETzFsQlFVVXNaMEpCUVdkQ0xFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEyaEZMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEpRVUZKTEV0QlFVc3NVVUZCVVN4RFFVRkRPMWxCUVVVc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU4yUkN4SlFVRkpMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zVDBGQlR5eEpRVUZKTEV0QlFVc3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFbEJRVWtzUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUXp0WlFVRkZMRWxCUVVrc1IwRkJSeXhUUVVGVExFTkJRVU03VVVGRGVrWXNTVUZCU1N4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFOUJRVThzUzBGQlN5eFJRVUZSTEVOQlFVTTdXVUZCUlN4blFrRkJaMElzUjBGQlJ5eFBRVUZQTEVOQlFVTTdVVUZEZWtVc1NVRkJTU3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEU5QlFVOHNTMEZCU3l4UlFVRlJMRU5CUVVNN1dVRkJSU3hQUVVGUExFZEJRVWNzVTBGQlV5eERRVUZETzFGQlJXeEZMRWxCUVVrc1dVRkJXU3hKUVVGSkxFbEJRVWtzUlVGQlJUdFpRVVYwUWl4SlFVRkpMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeExRVUZMTEZGQlFWRXNRMEZCUXl4SlFVRkpMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzVDBGQlR5eExRVUZMTEZGQlFWRXNRMEZCUXl4RlFVRkZPMmRDUVVOb1JpeDVRa0ZCVlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0aFFVTnVRenRwUWtGQlRTeEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1NVRkJTU3hMUVVGTExGRkJRVkVzUTBGQlF5eEZRVUZGTzJkQ1FVTXpReXg1UWtGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yRkJRekZDTzJsQ1FVRk5MRWxCUVVrc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eFBRVUZQTEV0QlFVc3NVVUZCVVN4RFFVRkRMRVZCUVVVN1owSkJRMnBFTEhsQ1FVRlZMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdZVUZETjBJN08yZENRVUZOTEhsQ1FVRlZMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVVV4UWl4SlFVRkpMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzVDBGQlR5eExRVUZMTEZGQlFWRXNRMEZCUXl4SlFVRkpMRTlCUVU4c1EwRkJReXhqUVVGakxFVkJRVVU3WjBKQlEzQkZMSGxDUVVGakxFTkJRVU1zU1VGQlNTeEZRVUZGTEdkQ1FVRm5RaXhGUVVGRkxFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXp0aFFVTnNSVHRUUVVOS08xRkJSVVFzU1VGQlNTeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRTlCUVU4c1MwRkJTeXhSUVVGUkxFbEJRVWtzVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXp0WlFVRkZMRTlCUVU4c1NVRkJTU3hEUVVGRE8xRkJVV2hHTEUxQlFVMHNaVUZCWjBJc1UwRkJVU3hKUVVGSk8xbEJOa0k1UWl4WlFVRlpMRWRCUVVjc1RVRkJZVHRuUWtGRGVFSXNTMEZCU3l4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU03WjBKQlNFd3NiVUpCUVdNc1IwRkJXU3hsUVVGbExFTkJRVU1zWTBGQll5eERRVUZETzJkQ1FVbHlSU3hKUVVGSkxGZEJRVmNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF6dG5Ra0ZETTBNc1NVRkJTU3hEUVVGRExFTkJRVU1zVjBGQlZ5eFpRVUZaTEUxQlFVMHNRMEZCUXp0dlFrRkJSU3hYUVVGWExFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTjJSQ3g1UWtGQll5eERRVUZETEVsQlFVa3NSVUZCUlN4eFFrRkJjVUlzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRiRVFzU1VGQlNTeGxRVUZsTEVkQlFVY3NjMEpCUVZjc1EwRkJReXhKUVVGSkxFVkJRVVVzYVVKQlFXbENMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03WjBKQlEycEZMR1ZCUVdVc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEdWQlFXVXNSVUZCUlN4WFFVRlhMRU5CUVVNc1EwRkJRenRuUWtGRE9VUXNTVUZCU1N4elFrRkJjMElzU1VGQlNTeEpRVUZKTEVWQlFVVTdiMEpCUTJoRExFMUJRVTBzWTBGQll5eEhRVUZITEVsQlFVa3NRMEZCUXl4dlFrRkJiMElzUTBGQlF5eEhRVUZITEVWQlFVVXNTVUZCU1N4RlFVRkZMRmRCUVZjc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dHZRa0ZETlVVc1pVRkJaU3hIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNaVUZCWlN4RlFVRkZMR05CUVdNc1EwRkJReXhEUVVGRE8ybENRVU53UlR0blFrRkRSQ3hOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4bFFVRmxMRU5CUVVNc1EwRkJRenRuUWtGRGNrTXNlVUpCUVdNc1EwRkJReXhKUVVGSkxFVkJRVVVzYzBKQlFYTkNMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEyNUVMRWxCUVVrc2NVSkJRWEZDTEVsQlFVa3NTVUZCU1R0dlFrRkJVU3hKUVVGTExFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF6dFpRVU5zUml4RFFVRkRPenRSUVdwRGMwSXNNa0pCUVZjc1IwRkJVU3hKUVVGSkxFTkJRVU03VVVGVGVFSXNPRUpCUVdNc1IwRkJXU3h6UWtGQlZ5eERRVUZETEdWQlFXVXNSVUZCUlN4blFrRkJaMElzUTBGQlF5eERRVUZETzFGQk5FSndSeXhKUVVGSkxIVkNRVUZUTEVWQlFVVXNTVUZCU1N4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRk8xbEJRM0pETEdOQlFXTXNRMEZCUXl4TlFVRk5MRU5CUVVNc01rSkJRVzlDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxHVkJRV1VzUlVGQlJUdG5Ra0ZEY0VVc1QwRkJUeXhGUVVGRkxHVkJRV1VzUTBGQlF5eFBRVUZQTzJGQlEyNURMRU5CUVVNc1EwRkJRenRUUVVOT08xRkJRMFFzVDBGQlR5eGxRVUZsTEVOQlFVTTdTVUZETTBJc1EwRkJReXhEUVVGRE8wRkJRMDRzUTBGQlF6dEJRVFZHUkN3d1EwRTBSa003UVVGRlZTeFJRVUZCTEV0QlFVc3NSMEZCUnl4dlFrRkJTeXhEUVVGRE8wRkJRMlFzVVVGQlFTeEhRVUZITEVkQlFVY3NhMEpCUVVjc1EwRkJRenRCUVVOV0xGRkJRVUVzU1VGQlNTeEhRVUZITEcxQ1FVRkpMRU5CUVVNN1FVRkRXaXhSUVVGQkxGRkJRVkVzUjBGQlJ5eDFRa0ZCVVN4RFFVRkRPMEZCUTNCQ0xGRkJRVUVzU1VGQlNTeEhRVUZITEcxQ1FVRkpMRU5CUVVNN1FVRkRXaXhSUVVGQkxGRkJRVkVzUjBGQlJ5eDFRa0ZCVVN4RFFVRkRPMEZCUTNCQ0xGRkJRVUVzV1VGQldTeEhRVUZITERKQ1FVRlpMRU5CUVVNN1FVRkROVUlzVVVGQlFTeE5RVUZOTEVkQlFVY3NjVUpCUVUwc1EwRkJRenRCUVVOb1FpeFJRVUZCTEZOQlFWTXNSMEZCUnl4M1FrRkJVeXhEUVVGRE8wRkJWMnBETEZOQlFWTXNlVUpCUVhsQ0xFTkJRVU1zVFVGQlZ5eEZRVUZGTEVkQlFWY3NSVUZCUlN4VFFVRjNRanRKUVVWcVJpeE5RVUZOTEZGQlFWRXNSMEZCUnl4UFFVRlBMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJSeTlFTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExGTkJRVk1zUlVGQlJTeE5RVUZOTEVOQlFVTTdVVUZCUlN4NVFrRkJZeXhEUVVGRExFMUJRVTBzUlVGQlJTeFRRVUZUTEVWQlFVVXNTVUZCU1N4TFFVRkxMRVZCUVZVc1EwRkJReXhEUVVGRE8wbEJRM0JITEUxQlFVMHNSMEZCUnl4SFFVRkhMSE5DUVVGWExFTkJRVU1zVFVGQlRTeEZRVUZGTEZOQlFWTXNRMEZCWVN4RFFVRkRPMGxCUTNaRUxFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRGVrSXNUMEZCVHl4UlFVRlJMRU5CUVVNN1FVRkRjRUlzUTBGQlF6dEJRVmRFTEZOQlFWTXNUVUZCVFN4RFFVRkRMRkZCUVdFc1JVRkJSU3hIUVVGdlFpeEZRVUZGTEZGQlFXMUNPMGxCUTNCRkxFbEJRVWtzUTBGQlF5eHpRa0ZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3h4UWtGQmNVSXNRMEZCUXl4RlFVRkZPMUZCUXk5RExFMUJRVTBzWlVGQlpTeEhRVUZITEhOQ1FVRlhMRU5CUVVNc1VVRkJVU3hGUVVGRkxHbENRVUZwUWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRM1pGTEU5QlFVOHNaVUZCWlN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzB0QlF6RkRPMGxCUTBRc1RVRkJUU3hUUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUTJwRExFbEJRVWtzVVVGQlVTeEpRVUZKTEZGQlFWRXNRMEZCUXl4SFFVRkhMRVZCUVVVN1VVRkRNVUlzVDBGQlR5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dExRVU4wUXp0VFFVRk5PMUZCUTBnc1RVRkJUU3hMUVVGTExFZEJRVWNzT0VKQlFXMUNMRU5CUVVNc1VVRkJVU3hGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZETzFGQlEzWkVMRWxCUVVrc1MwRkJTenRaUVVGRkxFOUJRVThzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUTJ4RExFOUJRVThzVTBGQlV5eERRVUZETzB0QlEzQkNPMEZCUTB3c1EwRkJRenRCUVdORUxGTkJRVk1zVFVGQlRTeERRVUZETEZGQlFXRXNSVUZCUlN4SFFVRnZRaXhGUVVGRkxFMUJRVmNzUlVGQlJTeFJRVUZ0UWp0SlFVVnFSaXhKUVVGSkxFTkJRVU1zYzBKQlFWY3NRMEZCUXl4UlFVRlJMRVZCUVVVc2NVSkJRWEZDTEVOQlFVTXNSVUZCUlR0UlFVTXZReXhOUVVGTkxHVkJRV1VzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hwUWtGQmFVSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVOMlJTeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMR1ZCUVdVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOc1JDeDVRa0ZCWXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hwUWtGQmFVSXNSVUZCUlN4bFFVRmxMRU5CUVVNc1EwRkJRenRSUVVNM1JDeFBRVUZQTzB0QlExWTdTVUZEUkN4TlFVRk5MRk5CUVZNc1IwRkJSeXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdTVUZIYWtNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NUVUZCVFR0UlFVRkZMRTlCUVU4N1NVRkRNME1zVFVGQlRTeExRVUZMTEVkQlFVY3NPRUpCUVcxQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkRPMGxCUTNaRUxFMUJRVTBzWTBGQll5eEhRVUZITEhOQ1FVRlhMRU5CUVVNc1VVRkJVU3hGUVVGRkxHdENRVUZyUWl4RFFVRkRMRU5CUVVNN1NVRkRha1VzVFVGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhqUVVGakxFTkJRVU1zUTBGQlF5eERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXp0SlFVVndSaXhKUVVGSkxFMUJRVTBzV1VGQldTeHBRa0ZCVHl4RlFVRkZPMUZCUlROQ0xFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRM0JETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03UzBGRE4wSTdTVUZGUkN4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlJYWkNMRWxCUVVrc1owSkJRV2RDTzFGQlFVVXNaMEpCUVdkQ0xFTkJRVU1zWlVGQlpTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUlM5RUxFbEJRVWtzVVVGQlVTeEpRVUZKTEZGQlFWRXNRMEZCUXl4SFFVRkhPMUZCUVVVc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRM1JGTEVOQlFVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgbnVuanVja3MgPSB0c2xpYl8xLl9faW1wb3J0U3RhcihyZXF1aXJlKFwibnVuanVja3NcIikpO1xuZnVuY3Rpb24gaXNOb2RlSlMoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc05vZGVKUyA9IGlzTm9kZUpTO1xuZnVuY3Rpb24gaXNCcm93c2VyKCkge1xuICAgIHJldHVybiAhaXNOb2RlSlMoKTtcbn1cbmV4cG9ydHMuaXNCcm93c2VyID0gaXNCcm93c2VyO1xuZXhwb3J0cy50ZW1wbGF0ZUVudmlyb25tZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBub0NhY2hlID0gZ2xvYmFsLnByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGNvbnN0IGVudiA9IG5ldyBudW5qdWNrcy5FbnZpcm9ubWVudCh7XG4gICAgICAgIGdldFNvdXJjZTogKHBhdGgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHNyYzogcmVxdWlyZShwYXRoKSwgcGF0aCwgbm9DYWNoZSB9O1xuICAgICAgICB9XG4gICAgfSwgeyBub0NhY2hlIH0pO1xuICAgIGVudi5hZGRGaWx0ZXIoJ2pzb24nLCAodmFsdWUsIHNwYWNlcykgPT4ge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBudW5qdWNrcy5ydW50aW1lLlNhZmVTdHJpbmcpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IG51bmp1Y2tzLnJ1bnRpbWUuU2FmZVN0cmluZyhKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgc3BhY2VzKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVudjtcbn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laVzUyYVhKdmJtMWxiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDNWMGFXeHpMMlZ1ZG1seWIyNXRaVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZCTERKRVFVRnhRenRCUVZGeVF5eFRRVUZuUWl4UlFVRlJPMGxCUTNCQ0xFbEJRVWtzVDBGQlR5eE5RVUZOTEV0QlFVc3NWMEZCVnl4SlFVRkpMRTlCUVU4c1QwRkJUeXhMUVVGTExGRkJRVkVzUlVGQlJUdFJRVU01UkN4UFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObU8wbEJRMFFzVDBGQlR5eExRVUZMTEVOQlFVTTdRVUZEYWtJc1EwRkJRenRCUVV4RUxEUkNRVXRETzBGQlVVUXNVMEZCWjBJc1UwRkJVenRKUVVOeVFpeFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1FVRkRka0lzUTBGQlF6dEJRVVpFTERoQ1FVVkRPMEZCUzFrc1VVRkJRU3h0UWtGQmJVSXNSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSVHRKUVVOeVF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEV0QlFVc3NZVUZCWVN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTTNSU3hOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRha01zVTBGQlV5eEZRVUZGTEVOQlFVTXNTVUZCV1N4RlFVRkZMRVZCUVVVN1dVRkRlRUlzVDBGQlR5eEZRVUZGTEVkQlFVY3NSVUZCUlN4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUTJwRUxFTkJRVU03UzBGRFNpeEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVWb1FpeEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVWQlFVVXNSVUZCUlR0UlFVTndReXhKUVVGSkxFdEJRVXNzV1VGQldTeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1JVRkJSVHRaUVVNNVF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xTkJRelZDTzFGQlEwUXNUMEZCVHl4SlFVRkpMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJoR0xFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEwZ3NUMEZCVHl4SFFVRkhMRU5CUVVNN1FVRkRaaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZGVmaW5lTWV0YWRhdGEodGFyZ2V0LCBrZXksIHZhbCkge1xuICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoa2V5LCB2YWwsIHRhcmdldCk7XG59XG5leHBvcnRzLmRlZmluZU1ldGFkYXRhID0gZGVmaW5lTWV0YWRhdGE7XG5mdW5jdGlvbiBnZXRNZXRhZGF0YSh0YXJnZXQsIGtleSkge1xuICAgIHJldHVybiBSZWZsZWN0LmdldE1ldGFkYXRhKGtleSwgdGFyZ2V0KTtcbn1cbmV4cG9ydHMuZ2V0TWV0YWRhdGEgPSBnZXRNZXRhZGF0YTtcbmZ1bmN0aW9uIGRlZmluZVdpbGRjYXJkTWV0YWRhdGEodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShrZXksIHZhbHVlLCB0YXJnZXQpO1xufVxuZXhwb3J0cy5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhID0gZGVmaW5lV2lsZGNhcmRNZXRhZGF0YTtcbmZ1bmN0aW9uIGdldFdpbGRjYXJkTWV0YWRhdGEodGFyZ2V0LCBrZXkpIHtcbiAgICByZXR1cm4gUmVmbGVjdC5nZXRNZXRhZGF0YShrZXksIHRhcmdldCk7XG59XG5leHBvcnRzLmdldFdpbGRjYXJkTWV0YWRhdGEgPSBnZXRXaWxkY2FyZE1ldGFkYXRhO1xuZnVuY3Rpb24gZ2V0RGVzaWduVHlwZSh0YXJnZXQsIGtleSkge1xuICAgIHJldHVybiBSZWZsZWN0LmdldE1ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdGFyZ2V0LCBrZXkpO1xufVxuZXhwb3J0cy5nZXREZXNpZ25UeXBlID0gZ2V0RGVzaWduVHlwZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXVjBZV1JoZEdFdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wzVjBhV3h6TDIxbGRHRmtZWFJoTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJaMGxCTEZOQlFXZENMR05CUVdNc1EwRkJORU1zVFVGQlV5eEZRVUZGTEVkQlFVMHNSVUZCUlN4SFFVRnJRanRKUVVNelJ5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdRVUZETjBNc1EwRkJRenRCUVVaRUxIZERRVVZETzBGQlYwUXNVMEZCWjBJc1YwRkJWeXhEUVVFMFF5eE5RVUZUTEVWQlFVVXNSMEZCVFR0SlFVTndSaXhQUVVGUExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRelZETEVOQlFVTTdRVUZHUkN4clEwRkZRenRCUVZWRUxGTkJRV2RDTEhOQ1FVRnpRaXhEUVVGRExFMUJRV01zUlVGQlJTeEhRVUZqTEVWQlFVVXNTMEZCVlR0SlFVTTNSU3hQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NSVUZCUlN4TFFVRkxMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03UVVGREwwTXNRMEZCUXp0QlFVWkVMSGRFUVVWRE8wRkJWVVFzVTBGQlowSXNiVUpCUVcxQ0xFTkJRVU1zVFVGQll5eEZRVUZGTEVkQlFXTTdTVUZET1VRc1QwRkJUeXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEVkQlFVY3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRCUVVNMVF5eERRVUZETzBGQlJrUXNhMFJCUlVNN1FVRlZSQ3hUUVVGblFpeGhRVUZoTEVOQlFVTXNUVUZCWXl4RlFVRkZMRWRCUVZjN1NVRkRja1FzVDBGQlR5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZETTBRc1EwRkJRenRCUVVaRUxITkRRVVZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuZnVuY3Rpb24gdWNGaXJzdChzdHIpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuZXhwb3J0cy51Y0ZpcnN0ID0gdWNGaXJzdDtcbmZ1bmN0aW9uIGNhbWVsQ2FzZTJrZWJhYkNhc2Uoc3RyKSB7XG4gICAgc3RyID0gc3RyLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFthLXowLTldfCg/PVtBLVpdKSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG59XG5leHBvcnRzLmNhbWVsQ2FzZTJrZWJhYkNhc2UgPSBjYW1lbENhc2Uya2ViYWJDYXNlO1xuZnVuY3Rpb24gcGFzY2FsQ2FzZTJrZWJhYkNhc2Uoc3RyKSB7XG4gICAgc3RyID0gdWNGaXJzdChzdHIpO1xuICAgIHJldHVybiBjYW1lbENhc2Uya2ViYWJDYXNlKHN0cik7XG59XG5leHBvcnRzLnBhc2NhbENhc2Uya2ViYWJDYXNlID0gcGFzY2FsQ2FzZTJrZWJhYkNhc2U7XG5mdW5jdGlvbiByZW1vdmVFbGVtZW50RnJvbUFycmF5KGFycmF5LCBlbGVtZW50KSB7XG4gICAgY29uc3QgaW5kZXggPSBhcnJheS5pbmRleE9mKGVsZW1lbnQpO1xuICAgIGlmIChpbmRleCA+PSAwKVxuICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xufVxuZXhwb3J0cy5yZW1vdmVFbGVtZW50RnJvbUFycmF5ID0gcmVtb3ZlRWxlbWVudEZyb21BcnJheTtcbmZ1bmN0aW9uIGdldFByb3RvdHlwZU5hbWVzUmVjdXJzaXZlKG9iamVjdCwgcHJvdG90eXBlcyA9IFtdKSB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKHByb3RvdHlwZSkge1xuICAgICAgICBwcm90b3R5cGVzLnB1c2gocHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgICAgICBnZXRQcm90b3R5cGVOYW1lc1JlY3Vyc2l2ZShwcm90b3R5cGUsIHByb3RvdHlwZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvdG90eXBlcztcbn1cbmV4cG9ydHMuZ2V0UHJvdG90eXBlTmFtZXNSZWN1cnNpdmUgPSBnZXRQcm90b3R5cGVOYW1lc1JlY3Vyc2l2ZTtcbmZ1bmN0aW9uIGluY2x1ZGVzTWVtYmVyT2ZMaXN0KHNlYXJjaCwgbGlzdCwgZXh0ZW5zaW9uID0gJycpIHtcbiAgICBmb3IgKGNvbnN0IG1lbWJlciBvZiBsaXN0KSB7XG4gICAgICAgIGlmIChzZWFyY2guaW5jbHVkZXMoYCR7bWVtYmVyfSR7ZXh0ZW5zaW9ufWApKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmluY2x1ZGVzTWVtYmVyT2ZMaXN0ID0gaW5jbHVkZXNNZW1iZXJPZkxpc3Q7XG5mdW5jdGlvbiBjb25zdHJ1Y3RUeXBlT2ZIVE1MQXR0cmlidXRlKG9iamVjdCwga2V5KSB7XG4gICAgaWYgKCFlbnZpcm9ubWVudF8xLmlzQnJvd3NlcigpKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgdHlwZSA9IG1ldGFkYXRhXzEuZ2V0RGVzaWduVHlwZShvYmplY3QsIGtleSk7XG4gICAgY29uc3QgYXR0clZhbHVlID0gb2JqZWN0LmdldEF0dHJpYnV0ZShrZXkpO1xuICAgIGlmIChhdHRyVmFsdWUgPT09IG51bGwpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGF0dHJpYnV0ZSBzZXRcIik7XG4gICAgbGV0IHZhbHVlVG9TZXQgPSBhdHRyVmFsdWU7XG4gICAgaWYgKHR5cGUubmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChbXCJOdW1iZXJcIiwgXCJCb29sZWFuXCIsIFwiT2JqZWN0XCIsIFwiQXJyYXlcIl0uaW5jbHVkZXModHlwZS5uYW1lKSkge1xuICAgICAgICAgICAgdmFsdWVUb1NldCA9IEpTT04ucGFyc2UoYXR0clZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZS5uYW1lID09PSBcIkJhc2VDb25zdHJ1Y3RvclwiKSB7XG4gICAgICAgICAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBvYmouY2xhc3NOYW1lO1xuICAgICAgICAgICAgaWYgKCFjbGFzc05hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2xhc3NOYW1lIGlzIG1pc3NpbmcgaW4gY29tcG9uZW50IGF0dHJpYnV0ZSB2YWx1ZVwiKTtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmouY2xhc3NOYW1lO1xuICAgICAgICAgICAgdmFsdWVUb1NldCA9IG5ldyAodHlwZS5uYW1lKShvYmopO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh2YWx1ZVRvU2V0LmNvbnN0cnVjdG9yLm5hbWUgIT09IHR5cGUubmFtZSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXR0cmlidXRlIHR5cGUgZXF1YWxzIG5vdCBkZWZpbmVkIHR5cGVcIik7XG4gICAgcmV0dXJuIHZhbHVlVG9TZXQ7XG59XG5leHBvcnRzLmNvbnN0cnVjdFR5cGVPZkhUTUxBdHRyaWJ1dGUgPSBjb25zdHJ1Y3RUeXBlT2ZIVE1MQXR0cmlidXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhScGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZkWFJwYkhNdmRYUnBiQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMR3RFUVVGdlJEdEJRVU53UkN4M1JFRkJiVVE3UVVGVGJrUXNVMEZCWjBJc1QwRkJUeXhEUVVGRExFZEJRVmM3U1VGREwwSXNUMEZCVHl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEZEVRc1EwRkJRenRCUVVaRUxEQkNRVVZETzBGQlUwUXNVMEZCWjBJc2JVSkJRVzFDTEVOQlFVTXNSMEZCVnp0SlFVTXpReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhYUVVGWExFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMnBFTEU5QlFVOHNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXc0UWtGQk9FSXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dEJRVU01UlN4RFFVRkRPMEZCU0VRc2EwUkJSME03UVVGVFJDeFRRVUZuUWl4dlFrRkJiMElzUTBGQlF5eEhRVUZYTzBsQlF6VkRMRWRCUVVjc1IwRkJSeXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEYmtJc1QwRkJUeXh0UWtGQmJVSXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOd1F5eERRVUZETzBGQlNFUXNiMFJCUjBNN1FVRlRSQ3hUUVVGblFpeHpRa0ZCYzBJc1EwRkJReXhMUVVGWkxFVkJRVVVzVDBGQldUdEpRVU0zUkN4TlFVRk5MRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUTNKRExFbEJRVWtzUzBGQlN5eEpRVUZKTEVOQlFVTTdVVUZCUlN4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTXpReXhEUVVGRE8wRkJTRVFzZDBSQlIwTTdRVUZUUkN4VFFVRm5RaXd3UWtGQk1FSXNRMEZCUXl4TlFVRlhMRVZCUVVVc1lVRkJkVUlzUlVGQlJUdEpRVU0zUlN4TlFVRk5MRk5CUVZNc1IwRkJSeXhOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUTJoRUxFbEJRVWtzVTBGQlV5eEZRVUZGTzFGQlExZ3NWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUXpWRExEQkNRVUV3UWl4RFFVRkRMRk5CUVZNc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dExRVU55UkR0SlFVTkVMRTlCUVU4c1ZVRkJWU3hEUVVGRE8wRkJRM1JDTEVOQlFVTTdRVUZRUkN4blJVRlBRenRCUVZkRUxGTkJRV2RDTEc5Q1FVRnZRaXhEUVVGRExFMUJRWGxDTEVWQlFVVXNTVUZCWXl4RlFVRkZMRmxCUVc5Q0xFVkJRVVU3U1VGRGJFY3NTMEZCU3l4TlFVRk5MRTFCUVUwc1NVRkJTU3hKUVVGSkxFVkJRVVU3VVVGRGRrSXNTVUZCU1N4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzVFVGQlRTeEhRVUZITEZOQlFWTXNSVUZCUlN4RFFVRkRMRVZCUVVVN1dVRkRNVU1zVDBGQlR5eEpRVUZKTEVOQlFVTTdVMEZEWmp0TFFVTktPMGxCUTBRc1QwRkJUeXhMUVVGTExFTkJRVU03UVVGRGFrSXNRMEZCUXp0QlFWQkVMRzlFUVU5RE8wRkJWMFFzVTBGQlowSXNORUpCUVRSQ0xFTkJRVU1zVFVGQmJVSXNSVUZCUlN4SFFVRlhPMGxCUTNwRkxFbEJRVWtzUTBGQlF5eDFRa0ZCVXl4RlFVRkZPMUZCUVVVc1QwRkJUenRKUVVONlFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4M1FrRkJZU3hEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTjRReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJSVE5ETEVsQlFVa3NVMEZCVXl4TFFVRkxMRWxCUVVrN1VVRkJSU3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEd0Q1FVRnJRaXhEUVVGRExFTkJRVU03U1VGRk5VUXNTVUZCU1N4VlFVRlZMRWRCUVZFc1UwRkJVeXhEUVVGRE8wbEJRMmhETEVsQlFVa3NTVUZCU1N4RFFVRkRMRWxCUVVrc1MwRkJTeXhUUVVGVExFVkJRVVU3VVVGRGVrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hUUVVGVExFVkJRVVVzVVVGQlVTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVTdXVUZET1VRc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1UwRkRkRU03VVVGRFJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRXRCUVVzc2FVSkJRV2xDTEVWQlFVVTdXVUZEYWtNc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRaUVVOc1F5eE5RVUZOTEZOQlFWTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRE8xbEJRMmhETEVsQlFVa3NRMEZCUXl4VFFVRlRPMmRDUVVGRkxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNiVVJCUVcxRUxFTkJRVU1zUTBGQlF6dFpRVU55Uml4UFFVRlBMRWRCUVVjc1EwRkJReXhUUVVGVExFTkJRVU03V1VGRGNrSXNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1UwRkRja003UzBGRFNqdEpRVU5FTEVsQlFVa3NWVUZCVlN4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFdEJRVXNzU1VGQlNTeERRVUZETEVsQlFVazdVVUZCUlN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExIZERRVUYzUXl4RFFVRkRMRU5CUVVNN1NVRkRla2NzVDBGQlR5eFZRVUZWTEVOQlFVTTdRVUZEZEVJc1EwRkJRenRCUVhSQ1JDeHZSVUZ6UWtNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbndpbmRvdy52aXJ0dWFsUm91dGVzID0gW1wiQ29uZmlnXCIsIFwiR2FtZUxvYmJ5XCIsIFwiSG9tZVwiXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRtbHlkSFZoYkVWdWRISjVVRzlwYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5MllYSXZkRzF3TDNacGNuUjFZV3hGYm5SeWVWQnZhVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJUU3hOUVVGUExFTkJRVU1zWVVGQllTeEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkRMRmRCUVZjc1JVRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5SjkiXSwic291cmNlUm9vdCI6IiJ9