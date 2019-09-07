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
    async save(_prop) {
        return new Promise((resolve, _reject) => {
            resolve();
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50TW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQ2xpZW50TW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtFO0FBQ2xFLGdEQUE2QztBQUM3Qyw2Q0FBbUg7QUFZbkgsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBWSxTQUFRLG1CQUFRO0lBRHpDOztRQW1CZ0Msa0JBQWEsR0FBWSxJQUFJLENBQUM7SUFxRDlELENBQUM7SUExQ1Usb0JBQW9CLENBQUMsR0FBVyxFQUFFLE1BQWUsRUFBRSxPQUFnQjtRQUN0RSxPQUFPLDJCQUFvQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFXTSwwQkFBMEIsQ0FBQyxHQUFXLEVBQUUsTUFBVyxFQUFFLE1BQWU7UUFDdkUsT0FBTyxpQ0FBMEIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBVU0sMkJBQTJCLENBQUMsR0FBVyxFQUFFLE1BQWU7UUFDM0QsT0FBTyxrQ0FBMkIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFRTSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQWE7UUFDM0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUVwQyxPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUVKLENBQUE7QUE3RDBCLHlCQUFhLEdBQVksSUFBSSxDQUFDO0FBUXpDO0lBQVgscUJBQVEsRUFBRTs7a0RBQStDO0FBbEJqRCxXQUFXO0lBRHZCLDRCQUFlLEVBQUU7R0FDTCxXQUFXLENBdUV2QjtBQXZFWSxrQ0FBVyJ9

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
        this.testSave = "123";
    }
    wadde() {
        this.bindings.get("title");
    }
};
tslib_1.__decorate([
    decorators_1.attribute({ autoSave: 3000 }),
    tslib_1.__metadata("design:type", String)
], Test1.prototype, "testSave", void 0);
Test1 = tslib_1.__decorate([
    decorators_1.baseConstructor({ collectionName: "Test1" }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ConstParams !== "undefined" && ConstParams) === "function" ? _a : Object])
], Test1);
exports.Test1 = Test1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdDEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdDEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxtREFBdUQ7QUFDdkQsOENBQTJDO0FBQzNDLHNEQUFtRTtBQVVuRSxJQUFhLEtBQUssR0FBbEIsTUFBYSxLQUFNLFNBQVEsMEJBQWUsQ0FBQyxXQUFJLENBQUM7SUFVNUMsWUFBWSxNQUEyQjtRQUNuQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFIb0IsYUFBUSxHQUFXLEtBQUssQ0FBQztJQUkvRCxDQUFDO0lBT00sS0FBSztRQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FDSixDQUFBO0FBZGtDO0lBQTlCLHNCQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3VDQUFpQztBQVJ0RCxLQUFLO0lBRGpCLDRCQUFlLENBQUMsRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLENBQUM7aUVBV3BCLFdBQVcsb0JBQVgsV0FBVztHQVZ2QixLQUFLLENBc0JqQjtBQXRCWSxzQkFBSyJ9

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3V0aWxzL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrREFBa0U7QUFVbEUsU0FBZ0IsMEJBQTBCLENBQUMsUUFBYSxFQUFFLEdBQVcsRUFBRSxNQUFXLEVBQUUsU0FBaUIsSUFBSTtJQUNyRyxJQUFJLEdBQUcsS0FBSyxHQUFHO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO0lBR3pHLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNsRSxJQUFJLFFBQVEsR0FBRyxzQkFBVyxDQUFDLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzNELElBQUksWUFBaUIsQ0FBQztJQUd0QixJQUFJLENBQUMsUUFBUTtRQUFFLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0MsSUFBSSxFQUFFLEdBQUcsR0FBRyxRQUFRLElBQUksUUFBUSxFQUFFLENBQUM7SUFDbkMsSUFBSSxHQUFHLEtBQUssTUFBTSxJQUFJLFFBQVEsS0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFFakQsUUFBUSxHQUFHLEdBQUcsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELE1BQU0sS0FBSyxHQUFHLEdBQUcsUUFBUSxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ3hDLFlBQVksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksWUFBWSxFQUFFO1lBQ2QsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1QixZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztTQUM3QztRQUNELEVBQUUsR0FBRyxLQUFLLENBQUM7S0FDZDtTQUFNO1FBRUgsWUFBWSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEMsSUFBSSxZQUFZLEVBQUU7WUFDZCxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMzQzs7WUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBRXpCLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN0QixPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ25DLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDL0I7O2dCQUFNLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztTQUNqRTs7WUFBTSxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNuRztJQUVELHlCQUFjLENBQUMsUUFBUSxFQUFFLG9CQUFvQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzdELENBQUM7QUFyQ0QsZ0VBcUNDO0FBa0JELFNBQWdCLG9CQUFvQixDQUFDLFFBQWEsRUFBRSxHQUFXLEVBQUUsU0FBaUIsSUFBSSxFQUFFLE9BQWdCO0lBQ3BHLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNsRSxJQUFJLFFBQVEsR0FBRyxzQkFBVyxDQUFDLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzNELElBQUksUUFBUSxLQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFBRSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELElBQUksT0FBTztRQUFFLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDaEMsSUFBSSxZQUFZLEdBQVEsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLFFBQVEsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3hFLElBQUksWUFBWTtRQUFFLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFELElBQUksWUFBWSxJQUFJLEdBQUcsS0FBSyxHQUFHO1FBQUUsT0FBTyxZQUFZLENBQUM7SUFDckQsSUFBSSxZQUFZLElBQUksR0FBRyxJQUFJLFlBQVk7UUFBRSxPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsRSxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBVkQsb0RBVUM7QUFXRCxTQUFnQiwyQkFBMkIsQ0FBQyxRQUFhLEVBQUUsR0FBVyxFQUFFLFNBQWlCLElBQUk7SUFDekYsSUFBSSxHQUFHLEtBQUssR0FBRyxFQUFFO1FBQ2IsTUFBTSxPQUFPLEdBQUcsb0JBQW9CLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1RCxLQUFLLE1BQU0sSUFBSSxJQUFJLE9BQU8sRUFBRTtZQUN4QixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO2dCQUFFLDBCQUEwQixDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ25HO0tBQ0o7O1FBQU0sMEJBQTBCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEUsQ0FBQztBQVBELGtFQU9DIn0=

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
        this.doAutoSave();
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
    doAutoSave() {
        if (!this.autoSave)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9saWIvQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQThEO0FBRTlELHdEQUFtRDtBQUNuRCx3REFBcUQ7QUFDckQsMENBQStEO0FBc0UvRCxNQUFhLFNBQTJELFNBQVEsbUJBQVE7SUFxRXBGLFlBQVksTUFBUyxFQUFFLFFBQVcsRUFBRSxNQUF5QjtRQUN6RCxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQVoxQixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7SUFhNUMsQ0FBQztJQVFNLFFBQVEsQ0FBQyxLQUFXO1FBQ3ZCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEtBQUs7WUFBRSxPQUFPO1FBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBS00sT0FBTztRQUNWLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUM1RixLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUM5QjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFVUyxxQkFBcUIsQ0FBQyxLQUFVO1FBQ3RDLElBQUksQ0FBQyx1QkFBUyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLFlBQVksV0FBVyxDQUFDO1lBQUUsT0FBTztRQUNsRSxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7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

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
    if (type && type.name !== undefined) {
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
    if (valueToSet && type && valueToSet.constructor.name !== type.name)
        throw new Error("attribute type equals not defined type");
    return valueToSet;
}
exports.constructTypeOfHTMLAttribute = constructTypeOfHTMLAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvdXRpbHMvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtEQUFvRDtBQUNwRCx3REFBbUQ7QUFTbkQsU0FBZ0IsT0FBTyxDQUFDLEdBQVc7SUFDL0IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEQsQ0FBQztBQUZELDBCQUVDO0FBU0QsU0FBZ0IsbUJBQW1CLENBQUMsR0FBVztJQUMzQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsRUFBRSxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM5RSxDQUFDO0FBSEQsa0RBR0M7QUFTRCxTQUFnQixvQkFBb0IsQ0FBQyxHQUFXO0lBQzVDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkIsT0FBTyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBSEQsb0RBR0M7QUFTRCxTQUFnQixzQkFBc0IsQ0FBQyxLQUFZLEVBQUUsT0FBWTtJQUM3RCxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLElBQUksS0FBSyxJQUFJLENBQUM7UUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBSEQsd0RBR0M7QUFTRCxTQUFnQiwwQkFBMEIsQ0FBQyxNQUFXLEVBQUUsYUFBdUIsRUFBRTtJQUM3RSxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELElBQUksU0FBUyxFQUFFO1FBQ1gsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLDBCQUEwQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUNyRDtJQUNELE9BQU8sVUFBVSxDQUFDO0FBQ3RCLENBQUM7QUFQRCxnRUFPQztBQVdELFNBQWdCLG9CQUFvQixDQUFDLE1BQXlCLEVBQUUsSUFBYyxFQUFFLFlBQW9CLEVBQUU7SUFDbEcsS0FBSyxNQUFNLE1BQU0sSUFBSSxJQUFJLEVBQUU7UUFDdkIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxHQUFHLFNBQVMsRUFBRSxDQUFDLEVBQUU7WUFDMUMsT0FBTyxJQUFJLENBQUM7U0FDZjtLQUNKO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQVBELG9EQU9DO0FBV0QsU0FBZ0IsNEJBQTRCLENBQUMsTUFBbUIsRUFBRSxHQUFXO0lBQ3pFLElBQUksQ0FBQyx1QkFBUyxFQUFFO1FBQUUsT0FBTztJQUN6QixNQUFNLElBQUksR0FBRyx3QkFBYSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4QyxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTNDLElBQUksU0FBUyxLQUFLLElBQUk7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFFNUQsSUFBSSxVQUFVLEdBQVEsU0FBUyxDQUFDO0lBQ2hDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlELFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGlCQUFpQixFQUFFO1lBQ2pDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEMsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztZQUNoQyxJQUFJLENBQUMsU0FBUztnQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7WUFDckYsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDO1lBQ3JCLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3JDO0tBQ0o7SUFDRCxJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUk7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7SUFDL0gsT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQztBQXRCRCxvRUFzQkMifQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvR2FtZVdpbmRvdy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1Rlc3RDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvY29tcG9uZW50cy9WaWV3TGluay50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1ZpZXdSb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9DbGllbnRNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQ2xpZW50Um91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0NvbmZpZ01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdDEudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzIHN5bmMgXlxcLlxcLy4qXFwudHMkIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9Db25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0dhbWVMb2JieS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvSG9tZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy91dGlscy91dGlsLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0F0dHJpYnV0ZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Db25maWdNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0JET0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9NYXBDYWNoZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Nb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Sb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CaW5kaW5nLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL01vZGlmaWNhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9Qcm9wZXJ0eS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9XYXRjaGVkLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbW9kZWxzL0JET1Rlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9tb2RlbHMvQkRPVGVzdDEudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9tb2RlbHMvQ2VsbC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL21vZGVscy9DaHVuay50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3JvdXRlcy9CRE9Db25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9yb3V0ZXMvQkRPR2FtZUxvYmJ5LnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvcm91dGVzL0JET0hvbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscyBzeW5jIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvdXRpbHMvZGVjb3JhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3V0aWxzL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvdXRpbHMvbWV0YWRhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscy91dGlsLnRzIiwid2VicGFjazovLy8uL3Zhci90bXAvdmlydHVhbEVudHJ5UG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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O0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRCwyQ0FBMkMsdTNDOzs7Ozs7Ozs7QUM5QjlCO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtK0I7Ozs7Ozs7O0FDdEI5QjtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELG1CQUFtQixtQkFBTyxDQUFDLGdDQUFxQjtBQUNoRCxzQkFBc0IsbUJBQU8sQ0FBQyxtQ0FBd0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsT0FBTyxFQUFFLFVBQVU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrL0Y7Ozs7Ozs7O0FDcEU5QjtBQUNiO0FBQ0EsMkNBQTJDLDJRIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JcIixcInRlbXBsYXRlc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLVNHXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tU0cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtdXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfYSwgX2I7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBCYXNlQ29tcG9uZW50XzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQmFzZUNvbXBvbmVudFwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBkZWNvcmF0b3JzXzIgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgQkFCWUxPTiA9IHRzbGliXzEuX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJiYWJ5bG9uanNcIikpO1xubGV0IEdhbWVXaW5kb3cgPSBjbGFzcyBHYW1lV2luZG93IGV4dGVuZHMgQmFzZUNvbXBvbmVudF8xLkJhc2VDb21wb25lbnRGYWN0b3J5KEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZW5naW5lID0gbmV3IEJBQllMT04uRW5naW5lKHRoaXMsIHRydWUsIHtcbiAgICAgICAgICAgIGF1ZGlvRW5naW5lOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNjZW5lID0gdGhpcy5jcmVhdGVTY2VuZSgpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBgMTAwJWA7XG4gICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSBgMTAwJWA7XG4gICAgICAgIHRoaXMuZW5naW5lLnJ1blJlbmRlckxvb3AoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW5naW5lLnJlc2l6ZSgpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjcmVhdGVTY2VuZSgpIHtcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBuZXcgQkFCWUxPTi5TY2VuZSh0aGlzLmVuZ2luZSk7XG4gICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBCQUJZTE9OLkZyZWVDYW1lcmEoJ2NhbWVyYScsIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgNSwgLTEwKSwgc2NlbmUpO1xuICAgICAgICBjYW1lcmEuc2V0VGFyZ2V0KEJBQllMT04uVmVjdG9yMy5aZXJvKCkpO1xuICAgICAgICBjYW1lcmEuYXR0YWNoQ29udHJvbCh0aGlzLCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IGxpZ2h0ID0gbmV3IEJBQllMT04uSGVtaXNwaGVyaWNMaWdodCgnbGlnaHQxJywgbmV3IEJBQllMT04uVmVjdG9yMygwLCAxLCAwKSwgc2NlbmUpO1xuICAgICAgICBsaWdodC5zaGFkb3dFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgc3BoZXJlID0gQkFCWUxPTi5NZXNoQnVpbGRlci5DcmVhdGVTcGhlcmUoJ3NwaGVyZScsIHsgc2VnbWVudHM6IDE2LCBkaWFtZXRlcjogMiB9LCBzY2VuZSk7XG4gICAgICAgIHNwaGVyZS5wb3NpdGlvbi55ID0gMTtcbiAgICAgICAgQkFCWUxPTi5NZXNoQnVpbGRlci5DcmVhdGVHcm91bmQoJ2dyb3VuZDEnLCB7IGhlaWdodDogNiwgd2lkdGg6IDYsIHN1YmRpdmlzaW9uczogMiB9LCBzY2VuZSk7XG4gICAgICAgIHJldHVybiBzY2VuZTtcbiAgICB9XG4gICAgY3JlYXRlVGVycmFpbigpIHsgfVxufTtcbkdhbWVXaW5kb3cuZXh0ZW5kcyA9IFwiY2FudmFzXCI7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMi5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIHR5cGVvZiAoX2EgPSB0eXBlb2YgQkFCWUxPTiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBCQUJZTE9OLkVuZ2luZSkgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0KVxuXSwgR2FtZVdpbmRvdy5wcm90b3R5cGUsIFwiZW5naW5lXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMi5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIHR5cGVvZiAoX2IgPSB0eXBlb2YgQkFCWUxPTiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBCQUJZTE9OLlNjZW5lKSA9PT0gXCJmdW5jdGlvblwiID8gX2IgOiBPYmplY3QpXG5dLCBHYW1lV2luZG93LnByb3RvdHlwZSwgXCJzY2VuZVwiLCB2b2lkIDApO1xuR2FtZVdpbmRvdyA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpXG5dLCBHYW1lV2luZG93KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEdhbWVXaW5kb3c7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSMkZ0WlZkcGJtUnZkeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDJOdmJYQnZibVZ1ZEhNdlIyRnRaVmRwYm1SdmR5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMRFpFUVVGcFJUdEJRVU5xUlN4elJFRkJkMFE3UVVGRGVFUXNjMFJCUVdsRU8wRkJRMnBFTERKRVFVRnhRenRCUVZWeVF5eEpRVUZ4UWl4VlFVRlZMRWRCUVM5Q0xFMUJRWEZDTEZWQlFWY3NVMEZCVVN4dlEwRkJiMElzUTBGQlF5eHBRa0ZCYVVJc1EwRkJRenRKUVVRdlJUczdVVUZ0UWpCQ0xGZEJRVTBzUjBGQmJVSXNTVUZCU1N4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVTdXVUZETVVVc1YwRkJWeXhGUVVGRkxFbEJRVWs3VTBGRGNFSXNRMEZCUXl4RFFVRkRPMUZCVTIxQ0xGVkJRVXNzUjBGQmEwSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8wbEJlVVJ3UlN4RFFVRkRPMGxCYkVSVkxHbENRVUZwUWp0UlFVTndRaXhMUVVGTExFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1EwRkJRenRSUVVNeFFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRE0wSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETzFGQlF6RkNMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zWVVGQllTeERRVUZETEVkQlFVY3NSVUZCUlR0WlFVTXpRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMUZCUTNoQ0xFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEwZ3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dFJRVU55UWl4TlFVRk5MRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVjc1JVRkJSVHRaUVVOdVF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU03V1VGREwwSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETzFGQlEzSkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMUFzUTBGQlF6dEpRVk5UTEZkQlFWYzdVVUZGYWtJc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVVUzUXl4TlFVRk5MRTFCUVUwc1IwRkJSeXhKUVVGSkxFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdVVUZGZGtZc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRmVrTXNUVUZCVFN4RFFVRkRMR0ZCUVdFc1EwRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdVVUZGYkVNc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRekZHTEV0QlFVc3NRMEZCUXl4aFFVRmhMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJSVE5DTEUxQlFVMHNUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRkZCUVZFc1JVRkJSU3hGUVVGRkxFVkJRVVVzVVVGQlVTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJSV2hITEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVYwUWl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eFRRVUZUTEVWQlFVVXNSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVWQlFVVXNXVUZCV1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFGQlJUZEdMRTlCUVU4c1MwRkJTeXhEUVVGRE8wbEJRMnBDTEVOQlFVTTdTVUZSVXl4aFFVRmhMRXRCUVVzc1EwRkJRenREUVVOb1F5eERRVUZCTzBGQk4wVXdRaXhyUWtGQlR5eEhRVUZYTEZGQlFWRXNRMEZCUXp0QlFWTjBRenRKUVVGWUxIRkNRVUZSTEVWQlFVVTdNRVJCUVcxQ0xFOUJRVThzYjBKQlFWQXNUMEZCVHl4RFFVRkRMRTFCUVUwN01FTkJSWHBETzBGQlUxTTdTVUZCV0N4eFFrRkJVU3hGUVVGRk96QkVRVUZyUWl4UFFVRlBMRzlDUVVGUUxFOUJRVThzUTBGQlF5eExRVUZMTzNsRFFVRnpRanRCUVRkQ0wwTXNWVUZCVlR0SlFVUTVRaXcwUWtGQlpTeEZRVUZGTzBkQlEwY3NWVUZCVlN4RFFYTkdPVUk3YTBKQmRFWnZRaXhWUVVGVkluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBCYXNlQ29tcG9uZW50XzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQmFzZUNvbXBvbmVudFwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBkZWNvcmF0b3JzXzIgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xubGV0IFRlc3RDb21wb25lbnQgPSBjbGFzcyBUZXN0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudF8xLkJhc2VDb21wb25lbnRGYWN0b3J5KEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudGVtcGxhdGVTdHJpbmcgPSByZXF1aXJlKCd+c3RhdGljL3ZpZXdzL3Rlc3RDb21wb25lbnQubmprJyk7XG4gICAgfVxufTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18yLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuXSwgVGVzdENvbXBvbmVudC5wcm90b3R5cGUsIFwidGVtcGxhdGVTdHJpbmdcIiwgdm9pZCAwKTtcblRlc3RDb21wb25lbnQgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoKVxuXSwgVGVzdENvbXBvbmVudCk7XG5leHBvcnRzLmRlZmF1bHQgPSBUZXN0Q29tcG9uZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVkdWemRFTnZiWEJ2Ym1WdWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMMk52YlhCdmJtVnVkSE12VkdWemRFTnZiWEJ2Ym1WdWRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTdzJSRUZCYVVVN1FVRkRha1VzYzBSQlFYZEVPMEZCUTNoRUxITkVRVUZwUkR0QlFWVnFSQ3hKUVVGeFFpeGhRVUZoTEVkQlFXeERMRTFCUVhGQ0xHRkJRV01zVTBGQlVTeHZRMEZCYjBJc1EwRkJReXhYUVVGWExFTkJRVU03U1VGRU5VVTdPMUZCVXpCQ0xHMUNRVUZqTEVkQlFVY3NUMEZCVHl4RFFVRkRMR2xEUVVGcFF5eERRVUZETEVOQlFVTTdTVUZGZEVZc1EwRkJRenREUVVGQkxFTkJRVUU3UVVGR1pUdEpRVUZZTEhGQ1FVRlJMRVZCUVVVN08zRkVRVUYxUlR0QlFWSnFSU3hoUVVGaE8wbEJSR3BETERSQ1FVRmxMRVZCUVVVN1IwRkRSeXhoUVVGaExFTkJWV3BETzJ0Q1FWWnZRaXhoUVVGaEluMD0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfYSwgX2I7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBCYXNlQ29tcG9uZW50XzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQmFzZUNvbXBvbmVudFwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBUZXN0MV8xID0gcmVxdWlyZShcIn5jbGllbnQvbW9kZWxzL1Rlc3QxXCIpO1xubGV0IFZpZXdMaW5rID0gY2xhc3MgVmlld0xpbmsgZXh0ZW5kcyBCYXNlQ29tcG9uZW50XzEuQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICBjb25zdHJ1Y3RvcihfcGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgVGVzdDFfMS5UZXN0MSh7IGlkOiBcIjFcIiwgdGl0bGU6IFN0cmluZyhEYXRlLm5vdygpKSwgb2hhOiBcIm9oYS4uLlwiIH0pO1xuICAgICAgICB0aGlzLnRlc3QgPSB0aGlzLm1vZGVsLmJpbmQoXCJ0aXRsZVwiKTtcbiAgICAgICAgdGhpcy50ZXN0ZXIgPSBbXCJoYWhhXCJdO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3RlZENhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25MaW5rQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uVGVzdGVyQWRkKF9hZGRlZCkge1xuICAgIH1cbiAgICBvblRlc3RlckNoYW5nZShfY2hhbmdlZCkge1xuICAgIH1cbiAgICBvblRlc3RDaGFuZ2UoX2NoYW5nZWQpIHtcbiAgICB9XG4gICAgb25MaW5rQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93LnJvdXRlci5uYXZpZ2F0ZSh0aGlzLmhyZWYsIHRydWUpO1xuICAgIH1cbn07XG5WaWV3TGluay5leHRlbmRzID0gJ2EnO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCB0eXBlb2YgKF9hID0gdHlwZW9mIFRlc3QxXzEuVGVzdDEgIT09IFwidW5kZWZpbmVkXCIgJiYgVGVzdDFfMS5UZXN0MSkgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0KVxuXSwgVmlld0xpbmsucHJvdG90eXBlLCBcIm1vZGVsXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS53YXRjaGVkKCksIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBWaWV3TGluay5wcm90b3R5cGUsIFwidGVzdFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEud2F0Y2hlZCh7XG4gICAgICAgIG9uUmVtb3ZlOiBcIm9uVGVzdGVyQ2hhbmdlXCIsXG4gICAgICAgIG9uSW5pdDogXCJvblRlc3RlckNoYW5nZVwiXG4gICAgfSksIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEFycmF5KVxuXSwgVmlld0xpbmsucHJvdG90eXBlLCBcInRlc3RlclwiLCB2b2lkIDApO1xuVmlld0xpbmsgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYiA9IHR5cGVvZiBDb25zdFBhcmFtcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBDb25zdFBhcmFtcykgPT09IFwiZnVuY3Rpb25cIiA/IF9iIDogT2JqZWN0XSlcbl0sIFZpZXdMaW5rKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFZpZXdMaW5rO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVm1sbGQweHBibXN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJOc2FXVnVkQzkwY3k5amIyMXdiMjVsYm5SekwxWnBaWGRNYVc1ckxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3TzBGQlFVRXNOa1JCUVdsRk8wRkJRMnBGTEhORVFVRnpSanRCUVVOMFJpeG5SRUZCTmtNN1FVRlZOME1zU1VGQmNVSXNVVUZCVVN4SFFVRTNRaXhOUVVGeFFpeFJRVUZUTEZOQlFWRXNiME5CUVc5Q0xFTkJRVU1zYVVKQlFXbENMRU5CUVVNN1NVRnhRM3BGTEZsQlFWa3NUMEZCSzBJN1VVRkRka01zUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUYwUWs4c1ZVRkJTeXhIUVVGVkxFbEJRVWtzWVVGQlN5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCVVhCRkxGTkJRVWtzUjBGQlZ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVmRxUkN4WFFVRk5MRWRCUVdFc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVWxzUkN4RFFVRkRPMGxCVDAwc2JVSkJRVzFDTzFGQlEzUkNMRXRCUVVzc1EwRkJReXh0UWtGQmJVSXNSVUZCUlN4RFFVRkRPMUZCUXpWQ0xFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5vUlN4RFFVRkRPMGxCVTFNc1YwRkJWeXhEUVVGRExFMUJRWE5DTzBsQlJUVkRMRU5CUVVNN1NVRlRVeXhqUVVGakxFTkJRVU1zVVVGQmQwSTdTVUZGYWtRc1EwRkJRenRKUVZOVExGbEJRVmtzUTBGQlF5eFJRVUZ6UWp0SlFVVTNReXhEUVVGRE8wbEJVMDhzVjBGQlZ5eERRVUZETEV0QlFWazdVVUZETlVJc1MwRkJTeXhEUVVGRExHTkJRV01zUlVGQlJTeERRVUZETzFGQlEzWkNMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRE5VTXNRMEZCUXp0RFFVTktMRU5CUVVFN1FVRjJSakJDTEdkQ1FVRlBMRWRCUVZjc1IwRkJSeXhEUVVGRE8wRkJVV3BETzBsQlFWZ3NjVUpCUVZFc1JVRkJSVHN3UkVGQlpTeGhRVUZMTEc5Q1FVRk1MR0ZCUVVzN2RVTkJRVzlGTzBGQlVUTkZPMGxCUVhaQ0xHOUNRVUZQTEVWQlFVVXNSVUZCUlN4elFrRkJVeXhGUVVGRk96dHpRMEZCWjBRN1FVRlhlRVE3U1VGSVpDeHZRa0ZCVHl4RFFVRkRPMUZCUTB3c1VVRkJVU3hGUVVGRkxHZENRVUZuUWp0UlFVTXhRaXhOUVVGTkxFVkJRVVVzWjBKQlFXZENPMHRCUXpOQ0xFTkJRVU1zUlVGQlJTeHhRa0ZCVVN4RlFVRkZPenQzUTBGQmIwTTdRVUZ1UTJwRExGRkJRVkU3U1VGRU5VSXNORUpCUVdVc1JVRkJSVHRwUlVGelExRXNWMEZCVnl4dlFrRkJXQ3hYUVVGWE8wZEJja05vUWl4UlFVRlJMRU5CSzBZMVFqdHJRa0V2Um05Q0xGRkJRVkVpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJhc2VDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9CYXNlQ29tcG9uZW50XCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBkZWNvcmF0b3JzXzIgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgbmF2aWdvXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibmF2aWdvXCIpKTtcbmxldCBWaWV3Um91dGVyID0gY2xhc3MgVmlld1JvdXRlciBleHRlbmRzIEJhc2VDb21wb25lbnRfMS5CYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnJvdXRlciA9IG5ldyBuYXZpZ29fMS5kZWZhdWx0KCk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICB0aGlzLnJvdXRlQ29sbGVjdGlvbigpO1xuICAgICAgICB3aW5kb3cucm91dGVyID0gdGhpcy5yb3V0ZXI7XG4gICAgfVxuICAgIHJvdXRlQ29sbGVjdGlvbigpIHtcbiAgICAgICAgZm9yIChjb25zdCByb3V0ZSBvZiB3aW5kb3cudmlydHVhbFJvdXRlcykge1xuICAgICAgICAgICAgY29uc3QgbXlSb3V0ZSA9IHJlcXVpcmUoYC4vLi4vcm91dGVzLyR7cm91dGV9LnRzYCkuZGVmYXVsdDtcbiAgICAgICAgICAgIHRoaXMuc2luZ2VSb3V0ZUNvbGxlY3Rpb24obXlSb3V0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2luZ2VSb3V0ZUNvbGxlY3Rpb24oUm91dGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghdXRpbF8xLmluY2x1ZGVzTWVtYmVyT2ZMaXN0KFJvdXRlLmF0dGFjaFRvU2VydmVycywgW2dsb2JhbC5wcm9jZXNzLmVudi5uYW1lLCAnKiddKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBSb3V0ZUNsYXNzID0gbmV3IFJvdXRlKCk7XG4gICAgICAgICAgICBpZiAoIVJvdXRlQ2xhc3MuaXNDbGllbnRSb3V0ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtSb3V0ZUNsYXNzLmNvbnN0cnVjdG9yLm5hbWV9IGlzIG5vdCBpbnN0YW5jZSBvZiB+Y2xpZW50L2xpYi9CYXNlUm91dGVgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucm91dGVyLm9uKFJvdXRlQ2xhc3Mucm91dGVyKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxufTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18yLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuXSwgVmlld1JvdXRlci5wcm90b3R5cGUsIFwicm91dGVyXCIsIHZvaWQgMCk7XG5WaWV3Um91dGVyID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKClcbl0sIFZpZXdSb3V0ZXIpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVmlld1JvdXRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZtbGxkMUp2ZFhSbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMMk52YlhCdmJtVnVkSE12Vm1sbGQxSnZkWFJsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN3MlJFRkJhVVU3UVVGRGFrVXNNRU5CUVhWRU8wRkJRM1pFTEhORVFVRjNSRHRCUVVONFJDeHpSRUZCYVVRN1FVRkRha1FzTkVSQlFUUkNPMEZCVlRWQ0xFbEJRWEZDTEZWQlFWVXNSMEZCTDBJc1RVRkJjVUlzVlVGQlZ5eFRRVUZSTEc5RFFVRnZRaXhEUVVGRExGZEJRVmNzUTBGQlF6dEpRVVI2UlRzN1VVRlZhVU1zVjBGQlRTeEhRVUZITEVsQlFVa3NaMEpCUVUwc1JVRkJSU3hEUVVGRE8wbEJLME4yUkN4RFFVRkRPMGxCZGtOaExHbENRVUZwUWp0UlFVTjJRaXhMUVVGTExFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1EwRkJRenRSUVVNeFFpeEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZMRU5CUVVNN1VVRkRka0lzVFVGQlRTeERRVUZETEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJRMmhETEVOQlFVTTdTVUZSVHl4bFFVRmxPMUZCUTI1Q0xFdEJRVXNzVFVGQlRTeExRVUZMTEVsQlFVa3NUVUZCVFN4RFFVRkRMR0ZCUVdFc1JVRkJSVHRaUVVOMFF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1pVRkJaU3hMUVVGTExFdEJRVXNzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXp0WlFVTXpSQ3hKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VTBGRGRFTTdTVUZEVEN4RFFVRkRPMGxCVlU4c2IwSkJRVzlDTEVOQlFVTXNTMEZCVlR0UlFVTnVReXhKUVVGSk8xbEJRMEVzU1VGQlNTeERRVUZETERKQ1FVRnZRaXhEUVVGWExFdEJRVXNzUTBGQlF5eGxRVUZsTEVWQlFVVXNRMEZCVXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRVVVzVDBGQlR6dFpRVU16Unl4TlFVRk5MRlZCUVZVc1IwRkJSeXhKUVVGSkxFdEJRVXNzUlVGQlJTeERRVUZETzFsQlF5OUNMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zWVVGQllTeEZRVUZGTzJkQ1FVTXpRaXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxESkRRVUV5UXl4RFFVRkRMRU5CUVVNN1lVRkRPVVk3V1VGRFJDeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVMEZEY2tNN1VVRkJReXhQUVVGUExFdEJRVXNzUlVGQlJUdFpRVU5hTEUxQlFVMHNTMEZCU3l4RFFVRkRPMU5CUTJZN1NVRkRUQ3hEUVVGRE8wTkJRMG9zUTBGQlFUdEJRUzlEWlR0SlFVRllMSEZDUVVGUkxFVkJRVVU3T3pCRFFVRjNRenRCUVZSc1F5eFZRVUZWTzBsQlJEbENMRFJDUVVGbExFVkJRVVU3UjBGRFJ5eFZRVUZWTEVOQmQwUTVRanRyUWtGNFJHOUNMRlZCUVZVaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5yZXF1aXJlKFwicmVmbGVjdC1tZXRhZGF0YVwiKTtcbmNvbnN0IGxvZGFzaF8xID0gcmVxdWlyZShcImxvZGFzaFwiKTtcbmNvbnN0IG51bmp1Y2tzXzEgPSByZXF1aXJlKFwibnVuanVja3NcIik7XG5jb25zdCB1dWlkXzEgPSByZXF1aXJlKFwidXVpZFwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmNsaWVudC91dGlscy91dGlsXCIpO1xuY29uc3QgdXRpbF8yID0gcmVxdWlyZShcIn5jbGllbnQvLi4vLi4vdXRpbHMvdXRpbFwiKTtcbmZ1bmN0aW9uIEJhc2VDb21wb25lbnRGYWN0b3J5KEhUTUxUeXBlRWxlbWVudCkge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIGNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBIVE1MVHlwZUVsZW1lbnQge1xuICAgICAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB1dWlkXzEudjQoKTtcbiAgICAgICAgICAgIHRoaXMuaXNCYXNlQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMuY29uc3RydWN0b3IpLm5hbWU7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlU3RyaW5nID0gJzxkaXY+PHNsb3Q+PC9zbG90PjwvZGl2Pic7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlUGFyYW1zID0ge307XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMsIFwiZGVmaW5lZFByb3BlcnRpZXNcIik7XG4gICAgICAgICAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBvZiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnNldChwcm9wLCBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcywgcHJvcCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgICAgfVxuICAgICAgICBnZXQgYmluZGluZ3MoKSB7XG4gICAgICAgICAgICBjb25zdCBiaW5kaW5ncyA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcywgXCJpbml0aWF0b3JCaW5kaW5nXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmdzID8gYmluZGluZ3MgOiBuZXcgTWFwKCk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0TmFtZXNwYWNlZFN0b3JhZ2Uoa2V5LCBuc1Byb3AsIGZvcmNlTlMpIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlsXzEuZ2V0TmFtZXNwYWNlZFN0b3JhZ2UodGhpcywga2V5LCBuc1Byb3AsIGZvcmNlTlMpO1xuICAgICAgICB9XG4gICAgICAgIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGtleSwgbmV3VmFsLCBuc1Byb3ApIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlsXzEuc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2UodGhpcywga2V5LCBuZXdWYWwsIG5zUHJvcCk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlKGtleSwgbnNQcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gdXRpbF8xLmRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5zUHJvcCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0QXR0cmlidXRlKHF1YWxpZmllZE5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzICYmIHRoaXMucHJvcGVydGllcy5oYXMocXVhbGlmaWVkTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFwiJHtxdWFsaWZpZWROYW1lfVwiIGNhbid0IGJlIHNldCBhcyBhdHRyaWJ1dGUgYmVjYXVzZSBpdCBpcyBhIGRlZmluZWQgcHJvcGVydHlgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHN1cGVyLnNldEF0dHJpYnV0ZShxdWFsaWZpZWROYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVUb1NldCA9IHV0aWxfMi5jb25zdHJ1Y3RUeXBlT2ZIVE1MQXR0cmlidXRlKHRoaXMsIHF1YWxpZmllZE5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXNbcXVhbGlmaWVkTmFtZV0gPSB2YWx1ZVRvU2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKHF1YWxpZmllZE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZUF0dHJpYnV0ZShxdWFsaWZpZWROYW1lKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzICYmIHRoaXMucHJvcGVydGllcy5oYXMocXVhbGlmaWVkTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFwiJHtxdWFsaWZpZWROYW1lfVwiIGNhbid0IGJlIHJlbW92ZWQgYXMgYXR0cmlidXRlIGJlY2F1c2UgaXQgaXMgYSBkZWZpbmVkIHByb3BlcnR5YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdXBlci5yZW1vdmVBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSk7XG4gICAgICAgICAgICB0aGlzW3F1YWxpZmllZE5hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRvSlNPTigpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpc1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtrZXldID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdHJ1Y3RlZENhbGxiYWNrKC4uLl9hcmdzKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY29uc3RydWN0b3IuZXh0ZW5kcykge1xuICAgICAgICAgICAgICAgIGxldCBzdHJpbmdUb1BhcnNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAobG9kYXNoXzEuaXNTdHJpbmcodGhpcy50ZW1wbGF0ZVN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nVG9QYXJzZSA9IG51bmp1Y2tzXzEucmVuZGVyU3RyaW5nKHRoaXMudGVtcGxhdGVTdHJpbmcsIHRoaXMudGVtcGxhdGVQYXJhbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobG9kYXNoXzEuaXNPYmplY3QodGhpcy50ZW1wbGF0ZVN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nVG9QYXJzZSA9IHRoaXMudGVtcGxhdGVTdHJpbmcucmVuZGVyKHRoaXMudGVtcGxhdGVQYXJhbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyaW5nVG9QYXJzZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc3RyaW5nVG9QYXJzZSwgJ3RleHQvaHRtbCcpO1xuICAgICAgICAgICAgICAgICAgICBzaGFkb3dSb290LmFwcGVuZENoaWxkKGRvYy5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHsgfVxuICAgICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHsgfVxuICAgICAgICBhZG9wdGVkQ2FsbGJhY2soKSB7IH1cbiAgICAgICAgYWRkQ29udHJvbGxlcigpIHsgfVxuICAgICAgICByZW1vdmVDb250cm9sbGVyKCkgeyB9XG4gICAgfVxuICAgIEJhc2VDb21wb25lbnQuaXNCYXNlQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxuICAgIF0sIEJhc2VDb21wb25lbnQucHJvdG90eXBlLCBcImlzQmFzZUNvbXBvbmVudFwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgQmFzZUNvbXBvbmVudC5wcm90b3R5cGUsIFwiY2xhc3NOYW1lXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbiAgICBdLCBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJ0ZW1wbGF0ZVN0cmluZ1wiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCB0eXBlb2YgKF9iID0gdHlwZW9mIEluZGV4U3RydWN0dXJlICE9PSBcInVuZGVmaW5lZFwiICYmIEluZGV4U3RydWN0dXJlKSA9PT0gXCJmdW5jdGlvblwiID8gX2IgOiBPYmplY3QpXG4gICAgXSwgQmFzZUNvbXBvbmVudC5wcm90b3R5cGUsIFwidGVtcGxhdGVQYXJhbXNcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdHlwZW9mIChfYyA9IHR5cGVvZiBNYXAgIT09IFwidW5kZWZpbmVkXCIgJiYgTWFwKSA9PT0gXCJmdW5jdGlvblwiID8gX2MgOiBPYmplY3QpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbiAgICBdLCBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJiaW5kaW5nc1wiLCBudWxsKTtcbiAgICByZXR1cm4gQmFzZUNvbXBvbmVudDtcbn1cbmV4cG9ydHMuQmFzZUNvbXBvbmVudEZhY3RvcnkgPSBCYXNlQ29tcG9uZW50RmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFtRnpaVU52YlhCdmJtVnVkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDJ4cFlpOUNZWE5sUTI5dGNHOXVaVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZCTERSQ1FVRXdRanRCUVVNeFFpeHRRMEZCTkVNN1FVRkROVU1zZFVOQlFXdEVPMEZCUTJ4RUxDdENRVUZyUXp0QlFVTnNReXh6UkVGQk5FUTdRVUZETlVRc2EwUkJRWFZGTzBGQlIzWkZMRFpEUVVGdFNEdEJRVU51U0N4dFJFRkJkMFU3UVVGVmVFVXNVMEZCWjBJc2IwSkJRVzlDTEVOQlFYbERMR1ZCUVhOQ096dEpRVkV2Uml4TlFVRmxMR0ZCUVdNc1UwRkJVU3hsUVVGbE8xRkJhMGRvUkN4WlFVRlpMRWRCUVVjc1NVRkJWenRaUVVOMFFpeExRVUZMTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVhSRVF5eFBRVUZGTEVkQlFWY3NVMEZCU1N4RlFVRkZMRU5CUVVNN1dVRlJXaXh2UWtGQlpTeEhRVUZaTEVsQlFVa3NRMEZCUXp0WlFWTm9ReXhqUVVGVExFZEJRVmNzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETzFsQlZUbEVMRzFDUVVGakxFZEJRWE5DTERCQ1FVRXdRaXhEUVVGRE8xbEJWM2hGTEcxQ1FVRmpMRWRCUVcxQ0xFVkJRVVVzUTBGQlF6dFJRV2xDTVVRc1EwRkJRenRSUVhoRlJDeEpRVUZYTEZWQlFWVTdXVUZEYWtJc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTjRRaXhOUVVGTkxGVkJRVlVzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3h0UWtGQmJVSXNRMEZCY1VNc1EwRkJRenRaUVVNNVJpeEpRVUZKTEZWQlFWVXNSVUZCUlR0blFrRkRXaXhMUVVGTExFMUJRVTBzU1VGQlNTeEpRVUZKTEZWQlFWVXNSVUZCUlR0dlFrRkRNMElzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc09FSkJRVzFDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03YVVKQlEzQkVPMkZCUTBvN1dVRkRSQ3hQUVVGUExFdEJRVXNzUTBGQlF6dFJRVU5xUWl4RFFVRkRPMUZCZDBSWExFbEJRV01zVVVGQlVUdFpRVU01UWl4TlFVRk5MRkZCUVZFc1IwRkJSeXh6UWtGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlN4clFrRkJhMElzUTBGQlF5eERRVUZETzFsQlEzWkVMRTlCUVU4c1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRE0wTXNRMEZCUXp0UlFXVk5MRzlDUVVGdlFpeERRVUZETEVkQlFWY3NSVUZCUlN4TlFVRmxMRVZCUVVVc1QwRkJaMEk3V1VGRGRFVXNUMEZCVHl3eVFrRkJiMElzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVUwc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU0xUkN4RFFVRkRPMUZCVjAwc01FSkJRVEJDTEVOQlFVTXNSMEZCVnl4RlFVRkZMRTFCUVZjc1JVRkJSU3hOUVVGbE8xbEJRM1pGTEU5QlFVOHNhVU5CUVRCQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEVkQlFVY3NSVUZCUlN4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRGFrVXNRMEZCUXp0UlFWVk5MREpDUVVFeVFpeERRVUZETEVkQlFWY3NSVUZCUlN4TlFVRmxPMWxCUXpORUxFOUJRVThzYTBOQlFUSkNMRU5CUVVNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTXhSQ3hEUVVGRE8xRkJWVTBzV1VGQldTeERRVUZETEdGQlFYRkNMRVZCUVVVc1MwRkJZVHRaUVVOd1JDeEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWxCUVVrc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNZVUZCWVN4RFFVRkRMRVZCUVVVN1owSkJRM1pFTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hoUVVGaExEaEVRVUU0UkN4RFFVRkRMRU5CUVVNN1lVRkRjRWM3V1VGRFJDeEpRVUZKTEV0QlFVc3NSVUZCUlR0blFrRkRVQ3hMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEdGQlFXRXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRuUWtGRGVrTXNUVUZCVFN4VlFVRlZMRWRCUVVjc2JVTkJRVFJDTEVOQlFVTXNTVUZCU1N4RlFVRkZMR0ZCUVdFc1EwRkJReXhEUVVGRE8yZENRVU12UkN4SlFVRkxMRU5CUVVNc1lVRkJZU3hEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETzJGQlF6TkRPenRuUWtGQlRTeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xRkJReTlETEVOQlFVTTdVVUZSVFN4bFFVRmxMRU5CUVVNc1lVRkJjVUk3V1VGRGVFTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMR0ZCUVdFc1EwRkJReXhGUVVGRk8yZENRVU4yUkN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzWVVGQllTeHJSVUZCYTBVc1EwRkJReXhEUVVGRE8yRkJRM2hITzFsQlEwUXNTMEZCU3l4RFFVRkRMR1ZCUVdVc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dFpRVU12UWl4SlFVRkxMRU5CUVVNc1lVRkJZU3hEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETzFGQlF6TkRMRU5CUVVNN1VVRlZUU3hOUVVGTk8xbEJRMVFzVFVGQlRTeEpRVUZKTEVkQlFXMUNMRVZCUVVVc1EwRkJRenRaUVVOb1F5eExRVUZMTEUxQlFVMHNSMEZCUnl4SlFVRkpMRWxCUVVrc1JVRkJSVHRuUWtGRGNFSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzVTBGQlV5eEZRVUZGTzI5Q1FVTjZRaXhOUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2IwSkJRekZDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU03YVVKQlEzWkNPMkZCUTBvN1dVRkRSQ3hQUVVGUExFbEJRVWtzUTBGQlF6dFJRVU5vUWl4RFFVRkRPMUZCVjFNc2JVSkJRVzFDTEVOQlFVTXNSMEZCUnl4TFFVRlpPMWxCUlhwRExFbEJRVWtzUTBGQlR5eEpRVUZKTEVOQlFVTXNWMEZCV1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRuUWtGRmJFTXNTVUZCU1N4aFFVRmhMRWRCUVVjc1NVRkJTU3hEUVVGRE8yZENRVU42UWl4SlFVRkpMR2xDUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RlFVRkZPMjlDUVVNdlFpeGhRVUZoTEVkQlFVY3NkVUpCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eEZRVUZGTEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenRwUWtGRE1VVTdaMEpCUTBRc1NVRkJTU3hwUWtGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1JVRkJSVHR2UWtGREwwSXNZVUZCWVN4SFFVRmpMRWxCUVVrc1EwRkJReXhqUVVGbExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenRwUWtGREwwVTdaMEpCUTBRc1NVRkJTU3hoUVVGaExFVkJRVVU3YjBKQlEyWXNUVUZCVFN4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRE8yOUNRVU4yUkN4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxGTkJRVk1zUlVGQlJTeERRVUZETEdWQlFXVXNRMEZCUXl4aFFVRmhMRVZCUVVVc1YwRkJWeXhEUVVGRExFTkJRVU03YjBKQlEzaEZMRlZCUVZVc1EwRkJReXhYUVVGWExFTkJRVmtzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRwUWtGRE1VUTdZVUZEU2p0UlFVTk1MRU5CUVVNN1VVRlJVeXhwUWtGQmFVSXNTMEZCVnl4RFFVRkRPMUZCVXpkQ0xHOUNRVUZ2UWl4TFFVRlhMRU5CUVVNN1VVRlRhRU1zWlVGQlpTeExRVUZYTEVOQlFVTTdVVUZSTTBJc1lVRkJZU3hMUVVGWExFTkJRVU03VVVGUmVrSXNaMEpCUVdkQ0xFdEJRVmNzUTBGQlF6czdTVUZvVUdZc05rSkJRV1VzUjBGQldTeEpRVUZKTEVOQlFVTTdTVUY1UWpGRE8xRkJRVm9zYzBKQlFWTXNSVUZCUlRzN05rTkJRVFJDTzBsQlVUVkNPMUZCUVZnc2NVSkJRVkVzUlVGQlJUczdNRVJCUVdsRU8wbEJVMmhFTzFGQlFWZ3NjVUpCUVZFc1JVRkJSVHM3YjBSQlFXdEdPMGxCVldwR08xRkJRVmdzY1VKQlFWRXNSVUZCUlRzN2VVUkJRVzFHTzBsQlYyeEdPMUZCUVZnc2NVSkJRVkVzUlVGQlJUczRSRUZCTWtJc1kwRkJZeXh2UWtGQlpDeGpRVUZqTzNsRVFVRk5PMGxCVlRsRE8xRkJRVmdzY1VKQlFWRXNSVUZCUlRzNFJFRkJNa0lzUjBGQlJ5eHZRa0ZCU0N4SFFVRkhPenRwUkVGSGVFTTdTVUYxUzB3c1QwRkJUeXhoUVVGaExFTkJRVU03UVVGRGVrSXNRMEZCUXp0QlFXaFNSQ3h2UkVGblVrTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBCYXNlQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICBjb25zdHJ1Y3RlZENhbGxiYWNrKCkgeyB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7IH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHsgfVxuICAgIGFkb3B0ZWRDYWxsYmFjaygpIHsgfVxufVxuZXhwb3J0cy5CYXNlQ29udHJvbGxlciA9IEJhc2VDb250cm9sbGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUW1GelpVTnZiblJ5YjJ4c1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMk5zYVdWdWRDOTBjeTlzYVdJdlFtRnpaVU52Ym5SeWIyeHNaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRlBRU3hOUVVGaExHTkJRV003U1VGRmRrSXNaMEpCUVdkQ0xFTkJRVU03U1VGVFVDeHRRa0ZCYlVJc1MwRkJTeXhEUVVGRE8wbEJVWHBDTEdsQ1FVRnBRaXhMUVVGTExFTkJRVU03U1VGVGRrSXNiMEpCUVc5Q0xFdEJRVXNzUTBGQlF6dEpRVk14UWl4bFFVRmxMRXRCUVVzc1EwRkJRenREUVVOc1F6dEJRWFJEUkN4M1EwRnpRME1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBCRE9Nb2RlbF8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET01vZGVsXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5jbGllbnQvdXRpbHMvdXRpbFwiKTtcbmxldCBDbGllbnRNb2RlbCA9IGNsYXNzIENsaWVudE1vZGVsIGV4dGVuZHMgQkRPTW9kZWxfMS5CRE9Nb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuaXNDbGllbnRNb2RlbCA9IHRydWU7XG4gICAgfVxuICAgIGdldE5hbWVzcGFjZWRTdG9yYWdlKGtleSwgbnNQcm9wLCBmb3JjZU5TKSB7XG4gICAgICAgIHJldHVybiB1dGlsXzEuZ2V0TmFtZXNwYWNlZFN0b3JhZ2UodGhpcywga2V5LCBuc1Byb3AsIGZvcmNlTlMpO1xuICAgIH1cbiAgICBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZShrZXksIG5ld1ZhbCwgbnNQcm9wKSB7XG4gICAgICAgIHJldHVybiB1dGlsXzEuc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2UodGhpcywga2V5LCBuZXdWYWwsIG5zUHJvcCk7XG4gICAgfVxuICAgIGRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZShrZXksIG5zUHJvcCkge1xuICAgICAgICByZXR1cm4gdXRpbF8xLmRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5zUHJvcCk7XG4gICAgfVxuICAgIGFzeW5jIHNhdmUoX3Byb3ApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCBfcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5DbGllbnRNb2RlbC5pc0NsaWVudE1vZGVsID0gdHJ1ZTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcbl0sIENsaWVudE1vZGVsLnByb3RvdHlwZSwgXCJpc0NsaWVudE1vZGVsXCIsIHZvaWQgMCk7XG5DbGllbnRNb2RlbCA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpXG5dLCBDbGllbnRNb2RlbCk7XG5leHBvcnRzLkNsaWVudE1vZGVsID0gQ2xpZW50TW9kZWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMnhwWlc1MFRXOWtaV3d1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJOc2FXVnVkQzkwY3k5c2FXSXZRMnhwWlc1MFRXOWtaV3d1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzYzBSQlFXdEZPMEZCUTJ4RkxHZEVRVUUyUXp0QlFVTTNReXcyUTBGQmJVZzdRVUZaYmtnc1NVRkJZU3hYUVVGWExFZEJRWGhDTEUxQlFXRXNWMEZCV1N4VFFVRlJMRzFDUVVGUk8wbEJSSHBET3p0UlFXMUNaME1zYTBKQlFXRXNSMEZCV1N4SlFVRkpMRU5CUVVNN1NVRnhSRGxFTEVOQlFVTTdTVUV4UTFVc2IwSkJRVzlDTEVOQlFVTXNSMEZCVnl4RlFVRkZMRTFCUVdVc1JVRkJSU3hQUVVGblFqdFJRVU4wUlN4UFFVRlBMREpDUVVGdlFpeERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc1RVRkJUU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzBsQlF6VkVMRU5CUVVNN1NVRlhUU3d3UWtGQk1FSXNRMEZCUXl4SFFVRlhMRVZCUVVVc1RVRkJWeXhGUVVGRkxFMUJRV1U3VVVGRGRrVXNUMEZCVHl4cFEwRkJNRUlzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVUwc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU5xUlN4RFFVRkRPMGxCVlUwc01rSkJRVEpDTEVOQlFVTXNSMEZCVnl4RlFVRkZMRTFCUVdVN1VVRkRNMFFzVDBGQlR5eHJRMEZCTWtJc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU03U1VGUlRTeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVdFN1VVRkRNMElzVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFVkJRVVVzUlVGQlJUdFpRVVZ3UXl4UFFVRlBMRVZCUVVVc1EwRkJRenRSUVVOa0xFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXp0RFFVVktMRU5CUVVFN1FVRTNSREJDTEhsQ1FVRmhMRWRCUVZrc1NVRkJTU3hEUVVGRE8wRkJVWHBETzBsQlFWZ3NjVUpCUVZFc1JVRkJSVHM3YTBSQlFTdERPMEZCYkVKcVJDeFhRVUZYTzBsQlJIWkNMRFJDUVVGbExFVkJRVVU3UjBGRFRDeFhRVUZYTEVOQmRVVjJRanRCUVhaRldTeHJRMEZCVnlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQkRPUm91dGVfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Sb3V0ZVwiKTtcbmNvbnN0IGxvZGFzaF8xID0gcmVxdWlyZShcImxvZGFzaFwiKTtcbmNvbnN0IExvZ2dlcl8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0xvZ2dlclwiKTtcbmNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXJfMS5Mb2dnZXIoKTtcbmNsYXNzIENsaWVudFJvdXRlIGV4dGVuZHMgQkRPUm91dGVfMS5CRE9Sb3V0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuaXNDbGllbnRSb3V0ZSA9IHRydWU7XG4gICAgfVxuICAgIGdldCByb3V0ZXIoKSB7XG4gICAgICAgIGNvbnN0IHJvdXRlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIHRoaXMucm91dGVzKSB7XG4gICAgICAgICAgICByb3V0ZXNbYCR7dGhpcy5yb3V0ZXJOYW1lU3BhY2V9LyR7cm91dGV9YC5yZXBsYWNlKFwiLy9cIiwgXCIvXCIpXSA9IHRoaXMuaGFuZGxlR2V0LmJpbmQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvdXRlcztcbiAgICB9XG4gICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBzdXBlci50ZW1wbGF0ZVBhcmFtcyhwYXJhbXMpO1xuICAgIH1cbiAgICBhc3luYyBoYW5kbGVHZXQocGFyYW1zKSB7XG4gICAgICAgIGxvZ2dlci5sb2cobG9kYXNoXzEubWVyZ2UoYXdhaXQgdGhpcy50ZW1wbGF0ZVBhcmFtc0Zyb21TZXJ2ZXIoKSwgYXdhaXQgdGhpcy50ZW1wbGF0ZVBhcmFtcyhwYXJhbXMpKSk7XG4gICAgfVxuICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zRnJvbVNlcnZlcigpIHtcbiAgICAgICAgbGV0IHVybFRvQXNrRm9yID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgICAgIGlmICghdXJsVG9Bc2tGb3IpXG4gICAgICAgICAgICB1cmxUb0Fza0ZvciA9IGAvYDtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ1gtR2FtZS1Bcy1KU09OJzogJ3RydWUnIH0pO1xuICAgICAgICByZXR1cm4gKGF3YWl0IGZldGNoKHVybFRvQXNrRm9yLCB7IGhlYWRlcnMgfSkpLmpzb24oKTtcbiAgICB9XG59XG5leHBvcnRzLkNsaWVudFJvdXRlID0gQ2xpZW50Um91dGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMnhwWlc1MFVtOTFkR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJOc2FXVnVkQzkwY3k5c2FXSXZRMnhwWlc1MFVtOTFkR1V1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3huUkVGQk5rTTdRVUZETjBNc2JVTkJRU3RDTzBGQlF5OUNMQ3REUVVFMFF6dEJRVVUxUXl4TlFVRk5MRTFCUVUwc1IwRkJSeXhKUVVGSkxHVkJRVTBzUlVGQlJTeERRVUZETzBGQlZUVkNMRTFCUVdFc1YwRkJXU3hUUVVGUkxHMUNRVUZSTzBsQlFYcERPenRSUVZGdlFpeHJRa0ZCWVN4SFFVRlpMRWxCUVVrc1EwRkJRenRKUVhORWJFUXNRMEZCUXp0SlFUbERSeXhKUVVGWExFMUJRVTA3VVVGRFlpeE5RVUZOTEUxQlFVMHNSMEZCVVN4RlFVRkZMRU5CUVVNN1VVRkRka0lzUzBGQlN5eE5RVUZOTEV0QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJRemRDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhsUVVGbExFbEJRVWtzUzBGQlN5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFOQlF6ZEdPMUZCUTBRc1QwRkJUeXhOUVVGTkxFTkJRVU03U1VGRGJFSXNRMEZCUXp0SlFWZFRMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU1zVFVGQmMwSTdVVUZEYWtRc1QwRkJUeXhMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUTNoRExFTkJRVU03U1VGVFV5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVhOQ08xRkJRelZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1kwRkJTeXhEUVVGRExFMUJRVTBzU1VGQlNTeERRVUZETEhkQ1FVRjNRaXhGUVVGRkxFVkJRVVVzVFVGQlRTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5vUnl4RFFVRkRPMGxCVlU4c1MwRkJTeXhEUVVGRExIZENRVUYzUWp0UlFVTnNReXhKUVVGSkxGZEJRVmNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRPMUZCUTNCRExFbEJRVWtzUTBGQlF5eFhRVUZYTzFsQlFVVXNWMEZCVnl4SFFVRkhMRWRCUVVjc1EwRkJRenRSUVVOd1F5eE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRTlCUVU4c1EwRkJReXhGUVVGRkxHZENRVUZuUWl4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRE1VUXNUMEZCVHl4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExGZEJRVmNzUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dEpRVU14UkN4RFFVRkRPME5CUTBvN1FVRTVSRVFzYTBOQk9FUkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBCRE9Db25maWdNYW5hZ2VyXzEgPSByZXF1aXJlKFwifmJkby9saWIvQkRPQ29uZmlnTWFuYWdlclwiKTtcbmNsYXNzIENvbmZpZ01hbmFnZXIgZXh0ZW5kcyBCRE9Db25maWdNYW5hZ2VyXzEuQkRPQ29uZmlnTWFuYWdlciB7XG4gICAgc2V0KF9jb25maWcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgICBsb2FkKF9jb25maWcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgICBnZXRDYWNoZShfY29uZmlnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgc2V0Q2FjaGUoX2NvbmZpZywgX3ZhbHVlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG59XG5leHBvcnRzLkNvbmZpZ01hbmFnZXIgPSBDb25maWdNYW5hZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTI5dVptbG5UV0Z1WVdkbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMMnhwWWk5RGIyNW1hV2ROWVc1aFoyVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNaMFZCUVRaRU8wRkJXVGRFTEUxQlFXRXNZVUZCWXl4VFFVRlJMRzFEUVVGblFqdEpRVk40UXl4SFFVRkhMRU5CUVVNc1QwRkJaVHRSUVVOMFFpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSGxDUVVGNVFpeERRVUZETEVOQlFVTTdTVUZETDBNc1EwRkJRenRKUVZWVExFbEJRVWtzUTBGQlF5eFBRVUZsTzFGQlF6RkNMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zZVVKQlFYbENMRU5CUVVNc1EwRkJRenRKUVVNdlF5eERRVUZETzBsQlZWTXNVVUZCVVN4RFFVRkRMRTlCUVdVN1VVRkRPVUlzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eERRVUZETzBsQlF5OURMRU5CUVVNN1NVRlhVeXhSUVVGUkxFTkJRVU1zVDBGQlpTeEZRVUZGTEUxQlFWYzdVVUZETTBNc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eDVRa0ZCZVVJc1EwRkJReXhEUVVGRE8wbEJReTlETEVOQlFVTTdRMEZEU2p0QlFXcEVSQ3h6UTBGcFJFTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBCRE9Mb2dnZXJfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Mb2dnZXJcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xubGV0IExvZ2dlciA9IGNsYXNzIExvZ2dlciBleHRlbmRzIEJET0xvZ2dlcl8xLkJET0xvZ2dlciB7XG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgICAgIHRoaXMubG9nTGV2ZWxDb2xvcnMgPSB7XG4gICAgICAgICAgICBsb2c6ICdjb2xvcjogZ3JheTsgZm9udC13ZWlnaHQ6IGJvbGQ7JyxcbiAgICAgICAgICAgIGRlYnVnOiAnY29sb3I6IGdyZWVuOyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgICAgICAgICAgaW5mbzogJ2NvbG9yOiAjMDA4MDZCOyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgICAgICAgICAgd2FybjogJ2NvbG9yOiAjODA4MDAwOyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgICAgICAgICAgZXJyb3I6ICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogYm9sZDsnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldEhlYWRlcihsb2dMZXZlbCwgcHJpbnRFbnYgPSAnY29uc29sZScpIHtcbiAgICAgICAgY29uc3QgcHJvY0luZm8gPSB0aGlzLmdldFByb2NJbmZvKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gdGhpcy5jdXJyZW50VGltZSgpO1xuICAgICAgICBjb25zdCB1cHBlckxvZ0xldmVsID0gbG9nTGV2ZWwudG9VcHBlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9nUG9pbnQgPSB0aGlzLmdldExvZ1BvaW50KCk7XG4gICAgICAgIGNvbnN0IHJlc2V0U3R5bGUgPSAnY29sb3I6IGJsYWNrOyBmb250LXdlaWdodDogbm9ybWFsJztcbiAgICAgICAgY29uc3QgbWFnZW50YSA9ICdjb2xvcjogIzgwMDA4MDsgZm9udC13ZWlnaHQ6IG5vcm1hbCc7XG4gICAgICAgIGNvbnN0IGN5YW4gPSAnY29sb3I6ICMwMDgwNkI7IGZvbnQtd2VpZ2h0OiBub3JtYWwnO1xuICAgICAgICBpZiAocHJpbnRFbnYgPT09ICdjb25zb2xlJykge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkTG9nTGV2ZWwgPSB0aGlzLmxvZ0xldmVsQ29sb3JzW2xvZ0xldmVsXTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZExvZ1BvaW50ID0gbWFnZW50YTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBjeWFuO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkUHJvY0luZm8gPSBtYWdlbnRhO1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBgJWNbJWMke3VwcGVyTG9nTGV2ZWx9ICVjLSAlYyR7cHJvY0luZm99ICVjLSAlYyR7Y3VycmVudFRpbWV9ICVjYXQgJWMke2xvZ1BvaW50fSVjXWAsXG4gICAgICAgICAgICAgICAgcmVzZXRTdHlsZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRMb2dMZXZlbCxcbiAgICAgICAgICAgICAgICByZXNldFN0eWxlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZFByb2NJbmZvLFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkVGltZSxcbiAgICAgICAgICAgICAgICByZXNldFN0eWxlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZExvZ1BvaW50LFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGVcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBbJHt1cHBlckxvZ0xldmVsfSAtICR7cHJvY0luZm99IC0gJHtjdXJyZW50VGltZX0gLSAke2xvZ1BvaW50fV1gO1xuICAgIH1cbiAgICB3cml0ZVRvRmlsZShfbG9nTGV2ZWwsIF9tZXNzYWdlKSB7XG4gICAgfVxufTtcbkxvZ2dlciA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIENvbnN0UGFyYW1zICE9PSBcInVuZGVmaW5lZFwiICYmIENvbnN0UGFyYW1zKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3RdKVxuXSwgTG9nZ2VyKTtcbmV4cG9ydHMuTG9nZ2VyID0gTG9nZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVEc5bloyVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlqYkdsbGJuUXZkSE12YkdsaUwweHZaMmRsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxHdEVRVUUyUlR0QlFVTTNSU3h6UkVGQmQwUTdRVUZWZUVRc1NVRkJZU3hOUVVGTkxFZEJRVzVDTEUxQlFXRXNUVUZCVHl4VFFVRlJMSEZDUVVGVE8wbEJaV3BETEZsQlFWa3NUVUZCTkVJN1VVRkRjRU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCVkZZc2JVSkJRV01zUjBGQlJ6dFpRVU55UWl4SFFVRkhMRVZCUVVVc2FVTkJRV2xETzFsQlEzUkRMRXRCUVVzc1JVRkJSU3hyUTBGQmEwTTdXVUZEZWtNc1NVRkJTU3hGUVVGRkxHOURRVUZ2UXp0WlFVTXhReXhKUVVGSkxFVkJRVVVzYjBOQlFXOURPMWxCUXpGRExFdEJRVXNzUlVGQlJTeG5RMEZCWjBNN1UwRkRNVU1zUTBGQlF6dEpRVWxHTEVOQlFVTTdTVUZYVXl4VFFVRlRMRU5CUVVNc1VVRkJiVUlzUlVGQlJTeFhRVUU0UWl4VFFVRlRPMUZCUXpWRkxFMUJRVTBzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRSUVVOd1F5eE5RVUZOTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03VVVGRGRrTXNUVUZCVFN4aFFVRmhMRWRCUVVjc1VVRkJVU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzFGQlF6ZERMRTFCUVUwc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVTndReXhOUVVGTkxGVkJRVlVzUjBGQlJ5eHRRMEZCYlVNc1EwRkJRenRSUVVOMlJDeE5RVUZOTEU5QlFVOHNSMEZCUnl4eFEwRkJjVU1zUTBGQlF6dFJRVU4wUkN4TlFVRk5MRWxCUVVrc1IwRkJSeXh4UTBGQmNVTXNRMEZCUXp0UlFVTnVSQ3hKUVVGSkxGRkJRVkVzUzBGQlN5eFRRVUZUTEVWQlFVVTdXVUZEZUVJc1RVRkJUU3hwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFsQlEzaEVMRTFCUVUwc2FVSkJRV2xDTEVkQlFVY3NUMEZCVHl4RFFVRkRPMWxCUTJ4RExFMUJRVTBzWVVGQllTeEhRVUZITEVsQlFVa3NRMEZCUXp0WlFVTXpRaXhOUVVGTkxHbENRVUZwUWl4SFFVRkhMRTlCUVU4c1EwRkJRenRaUVVOc1F5eFBRVUZQTzJkQ1FVTklMRkZCUVZFc1lVRkJZU3hWUVVGVkxGRkJRVkVzVlVGQlZTeFhRVUZYTEZkQlFWY3NVVUZCVVN4TFFVRkxPMmRDUVVOd1JpeFZRVUZWTzJkQ1FVTldMR2xDUVVGcFFqdG5Ra0ZEYWtJc1ZVRkJWVHRuUWtGRFZpeHBRa0ZCYVVJN1owSkJRMnBDTEZWQlFWVTdaMEpCUTFZc1lVRkJZVHRuUWtGRFlpeFZRVUZWTzJkQ1FVTldMR2xDUVVGcFFqdG5Ra0ZEYWtJc1ZVRkJWVHRoUVVOaUxFTkJRVU03VTBGRFREdFJRVU5FTEU5QlFVOHNTVUZCU1N4aFFVRmhMRTFCUVUwc1VVRkJVU3hOUVVGTkxGZEJRVmNzVFVGQlRTeFJRVUZSTEVkQlFVY3NRMEZCUXp0SlFVTTNSU3hEUVVGRE8wbEJWVk1zVjBGQlZ5eERRVUZETEZOQlFXOUNMRVZCUVVVc1VVRkJZVHRKUVVWNlJDeERRVUZETzBOQlEwb3NRMEZCUVR0QlFYQkZXU3hOUVVGTk8wbEJSR3hDTERSQ1FVRmxMRVZCUVVVN2FVVkJaMEpQTEZkQlFWY3NiMEpCUVZnc1YwRkJWenRIUVdaMlFpeE5RVUZOTEVOQmIwVnNRanRCUVhCRldTeDNRa0ZCVFNKOSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcblwidXNlIHN0cmljdFwiO1xuY29uc3QgQkRPVGVzdF8xID0gcmVxdWlyZShcIn5iZG8vbW9kZWxzL0JET1Rlc3RcIik7XG5jb25zdCBDbGllbnRNb2RlbF8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0NsaWVudE1vZGVsXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmxldCBUZXN0ID0gY2xhc3MgVGVzdCBleHRlbmRzIEJET1Rlc3RfMS5CRE9UZXN0RmFjdG9yeShDbGllbnRNb2RlbF8xLkNsaWVudE1vZGVsKSB7XG4gICAgY29uc3RydWN0b3IoX3BhcmFtcykge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICB0ZXN0KCkge1xuICAgIH1cbn07XG5UZXN0ID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKHsgY29sbGVjdGlvbk5hbWU6IFwiVGVzdFwiIH0pLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIENvbnN0UGFyYW1zICE9PSBcInVuZGVmaW5lZFwiICYmIENvbnN0UGFyYW1zKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3RdKVxuXSwgVGVzdCk7XG5leHBvcnRzLlRlc3QgPSBUZXN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVkdWemRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMMjF2WkdWc2N5OVVaWE4wTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUVVFc2FVUkJRWEZFTzBGQlEzSkVMSGxFUVVGelJEdEJRVU4wUkN4elJFRkJkMFE3UVVGVmVFUXNTVUZCWVN4SlFVRkpMRWRCUVdwQ0xFMUJRV0VzU1VGQlN5eFRRVUZSTEhkQ1FVRmpMRU5CUVVNc2VVSkJRVmNzUTBGQlF6dEpRVVZxUkN4WlFVRlpMRTlCUVRKQ08xRkJRMjVETEV0QlFVc3NSVUZCUlN4RFFVRkRPMGxCUTFvc1EwRkJRenRKUVU5TkxFbEJRVWs3U1VGRldDeERRVUZETzBOQlEwb3NRMEZCUVR0QlFXUlpMRWxCUVVrN1NVRkVhRUlzTkVKQlFXVXNRMEZCUXl4RlFVRkZMR05CUVdNc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF6dHBSVUZIYkVJc1YwRkJWeXh2UWtGQldDeFhRVUZYTzBkQlJuaENMRWxCUVVrc1EwRmphRUk3UVVGa1dTeHZRa0ZCU1NKOSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcblwidXNlIHN0cmljdFwiO1xuY29uc3QgQkRPVGVzdDFfMSA9IHJlcXVpcmUoXCJ+YmRvL21vZGVscy9CRE9UZXN0MVwiKTtcbmNvbnN0IFRlc3RfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L21vZGVscy9UZXN0XCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmxldCBUZXN0MSA9IGNsYXNzIFRlc3QxIGV4dGVuZHMgQkRPVGVzdDFfMS5CRE9UZXN0MUZhY3RvcnkoVGVzdF8xLlRlc3QpIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICAgICAgc3VwZXIocGFyYW1zKTtcbiAgICAgICAgdGhpcy50ZXN0U2F2ZSA9IFwiMTIzXCI7XG4gICAgfVxuICAgIHdhZGRlKCkge1xuICAgICAgICB0aGlzLmJpbmRpbmdzLmdldChcInRpdGxlXCIpO1xuICAgIH1cbn07XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoeyBhdXRvU2F2ZTogMzAwMCB9KSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBUZXN0MS5wcm90b3R5cGUsIFwidGVzdFNhdmVcIiwgdm9pZCAwKTtcblRlc3QxID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKHsgY29sbGVjdGlvbk5hbWU6IFwiVGVzdDFcIiB9KSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBDb25zdFBhcmFtcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBDb25zdFBhcmFtcykgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0XSlcbl0sIFRlc3QxKTtcbmV4cG9ydHMuVGVzdDEgPSBUZXN0MTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHVnpkREV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJOc2FXVnVkQzkwY3k5dGIyUmxiSE12VkdWemRERXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN1FVRkRRU3h0UkVGQmRVUTdRVUZEZGtRc09FTkJRVEpETzBGQlF6TkRMSE5FUVVGdFJUdEJRVlZ1UlN4SlFVRmhMRXRCUVVzc1IwRkJiRUlzVFVGQllTeExRVUZOTEZOQlFWRXNNRUpCUVdVc1EwRkJReXhYUVVGSkxFTkJRVU03U1VGVk5VTXNXVUZCV1N4TlFVRXlRanRSUVVOdVF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkliMElzWVVGQlVTeEhRVUZYTEV0QlFVc3NRMEZCUXp0SlFVa3ZSQ3hEUVVGRE8wbEJUMDBzUzBGQlN6dFJRVU5TTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzBsQlF5OUNMRU5CUVVNN1EwRkRTaXhEUVVGQk8wRkJaR3RETzBsQlFUbENMSE5DUVVGVExFTkJRVU1zUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RlFVRkZMRU5CUVVNN08zVkRRVUZwUXp0QlFWSjBSQ3hMUVVGTE8wbEJSR3BDTERSQ1FVRmxMRU5CUVVNc1JVRkJSU3hqUVVGakxFVkJRVVVzVDBGQlR5eEZRVUZGTEVOQlFVTTdhVVZCVjNCQ0xGZEJRVmNzYjBKQlFWZ3NWMEZCVnp0SFFWWjJRaXhMUVVGTExFTkJjMEpxUWp0QlFYUkNXU3h6UWtGQlN5SjkiLCJ2YXIgbWFwID0ge1xuXHRcIi4vQ29uZmlnLnRzXCI6IFwiLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvQ29uZmlnLnRzXCIsXG5cdFwiLi9HYW1lTG9iYnkudHNcIjogXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9HYW1lTG9iYnkudHNcIixcblx0XCIuL0hvbWUudHNcIjogXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9Ib21lLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLnRzJFwiOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ2xpZW50Um91dGVfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9DbGllbnRSb3V0ZVwiKTtcbmNvbnN0IEJET0NvbmZpZ18xID0gcmVxdWlyZShcIn5iZG8vcm91dGVzL0JET0NvbmZpZ1wiKTtcbmNsYXNzIENvbmZpZyBleHRlbmRzIEJET0NvbmZpZ18xLkJET0NvbmZpZ0ZhY3RvcnkoQ2xpZW50Um91dGVfMS5DbGllbnRSb3V0ZSkge1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ29uZmlnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTI5dVptbG5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlqYkdsbGJuUXZkSE12Y205MWRHVnpMME52Ym1acFp5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxIbEVRVUZ6UkR0QlFVTjBSQ3h4UkVGQmVVUTdRVUZYZWtRc1RVRkJjVUlzVFVGQlR5eFRRVUZSTERSQ1FVRm5RaXhEUVVGRExIbENRVUZYTEVOQlFVTTdRMEZCU1R0QlFVRnlSU3g1UWtGQmNVVWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBDbGllbnRSb3V0ZV8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0NsaWVudFJvdXRlXCIpO1xuY29uc3QgQkRPR2FtZUxvYmJ5XzEgPSByZXF1aXJlKFwifmJkby9yb3V0ZXMvQkRPR2FtZUxvYmJ5XCIpO1xuY2xhc3MgR2FtZUxvYmJ5IGV4dGVuZHMgQkRPR2FtZUxvYmJ5XzEuQkRPR2FtZUxvYmJ5RmFjdG9yeShDbGllbnRSb3V0ZV8xLkNsaWVudFJvdXRlKSB7XG4gICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZXN0OiAnbG9sJ1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEdhbWVMb2JieTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVIyRnRaVXh2WW1KNUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOWpiR2xsYm5RdmRITXZjbTkxZEdWekwwZGhiV1ZNYjJKaWVTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxIbEVRVUZ6UkR0QlFVTjBSQ3d5UkVGQkswUTdRVUZUTDBRc1RVRkJjVUlzVTBGQlZTeFRRVUZSTEd0RFFVRnRRaXhEUVVGRExIbENRVUZYTEVOQlFVTTdTVUZWZWtRc1MwRkJTeXhEUVVGRExHTkJRV003VVVGRE1VSXNUMEZCVHp0WlFVTklMRWxCUVVrc1JVRkJSU3hMUVVGTE8xTkJRMlFzUTBGQlF6dEpRVU5PTEVOQlFVTTdRMEZEU2p0QlFXWkVMRFJDUVdWREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENsaWVudFJvdXRlXzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQ2xpZW50Um91dGVcIik7XG5jb25zdCBCRE9Ib21lXzEgPSByZXF1aXJlKFwifmJkby9yb3V0ZXMvQkRPSG9tZVwiKTtcbmNsYXNzIEhvbWUgZXh0ZW5kcyBCRE9Ib21lXzEuQkRPSG9tZUZhY3RvcnkoQ2xpZW50Um91dGVfMS5DbGllbnRSb3V0ZSkge1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gSG9tZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVNHOXRaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDNKdmRYUmxjeTlJYjIxbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc2VVUkJRWE5FTzBGQlEzUkVMR2xFUVVGeFJEdEJRVk55UkN4TlFVRnhRaXhKUVVGTExGTkJRVkVzZDBKQlFXTXNRMEZCUXl4NVFrRkJWeXhEUVVGRE8wTkJRVWs3UVVGQmFrVXNkVUpCUVdsRkluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmZ1bmN0aW9uIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBrZXksIG5ld1ZhbCwgbnNQcm9wID0gXCJpZFwiKSB7XG4gICAgaWYgKGtleSA9PT0gXCIqXCIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIiogaXMgYSBzcGVjaWFsIGNoYXJhY3RlciBhbmQgZG9lcyBub3QgZm9sbG93IHRoZSBwcm9wZXJ0eSBjb252ZW50aW9uXCIpO1xuICAgIGNvbnN0IG5zUHJlZml4ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGluc3RhbmNlLmNvbnN0cnVjdG9yKS5uYW1lO1xuICAgIGxldCBuc1N1ZmZpeCA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwib2xkU3RvcmFnZU5zU3VmZml4XCIpO1xuICAgIGxldCBzdG9yYWdlVmFsdWU7XG4gICAgaWYgKCFuc1N1ZmZpeClcbiAgICAgICAgbnNTdWZmaXggPSBpbnN0YW5jZVtuc1Byb3BdO1xuICAgIGxldCBucyA9IGAke25zUHJlZml4fV8ke25zU3VmZml4fWA7XG4gICAgaWYgKGtleSA9PT0gbnNQcm9wIHx8IG5zU3VmZml4ICE9PSBpbnN0YW5jZVtuc1Byb3BdKSB7XG4gICAgICAgIG5zU3VmZml4ID0ga2V5ID09PSBuc1Byb3AgPyBuZXdWYWwgOiBpbnN0YW5jZVtuc1Byb3BdO1xuICAgICAgICBjb25zdCBuZXdOcyA9IGAke25zUHJlZml4fV8ke25zU3VmZml4fWA7XG4gICAgICAgIHN0b3JhZ2VWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5zKTtcbiAgICAgICAgaWYgKHN0b3JhZ2VWYWx1ZSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obnMpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3TnMsIHN0b3JhZ2VWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbnMgPSBuZXdOcztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN0b3JhZ2VWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5zKTtcbiAgICAgICAgaWYgKHN0b3JhZ2VWYWx1ZSkge1xuICAgICAgICAgICAgc3RvcmFnZVZhbHVlID0gSlNPTi5wYXJzZShzdG9yYWdlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHN0b3JhZ2VWYWx1ZSA9IHt9O1xuICAgICAgICBpZiAobmV3VmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdG9yYWdlVmFsdWVba2V5XTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LmtleXMoc3RvcmFnZVZhbHVlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obnMsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VWYWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5zLCBKU09OLnN0cmluZ2lmeShPYmplY3QuYXNzaWduKHN0b3JhZ2VWYWx1ZSwgeyBba2V5XTogbmV3VmFsIH0pKSk7XG4gICAgfVxuICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEoaW5zdGFuY2UsIFwib2xkU3RvcmFnZU5zU3VmZml4XCIsIG5zU3VmZml4KTtcbn1cbmV4cG9ydHMuc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2UgPSBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZTtcbmZ1bmN0aW9uIGdldE5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBrZXksIG5zUHJvcCA9IFwiaWRcIiwgZm9yY2VOUykge1xuICAgIGNvbnN0IG5zUHJlZml4ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGluc3RhbmNlLmNvbnN0cnVjdG9yKS5uYW1lO1xuICAgIGxldCBuc1N1ZmZpeCA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwib2xkU3RvcmFnZU5zU3VmZml4XCIpO1xuICAgIGlmIChuc1N1ZmZpeCAhPT0gaW5zdGFuY2VbbnNQcm9wXSlcbiAgICAgICAgbnNTdWZmaXggPSBpbnN0YW5jZVtuc1Byb3BdO1xuICAgIGlmIChmb3JjZU5TKVxuICAgICAgICBuc1N1ZmZpeCA9IGZvcmNlTlM7XG4gICAgbGV0IHN0b3JhZ2VWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke25zUHJlZml4fV8ke25zU3VmZml4fWApO1xuICAgIGlmIChzdG9yYWdlVmFsdWUpXG4gICAgICAgIHN0b3JhZ2VWYWx1ZSA9IEpTT04ucGFyc2Uoc3RvcmFnZVZhbHVlKTtcbiAgICBpZiAoc3RvcmFnZVZhbHVlICYmIGtleSA9PT0gXCIqXCIpXG4gICAgICAgIHJldHVybiBzdG9yYWdlVmFsdWU7XG4gICAgaWYgKHN0b3JhZ2VWYWx1ZSAmJiBrZXkgaW4gc3RvcmFnZVZhbHVlKVxuICAgICAgICByZXR1cm4gc3RvcmFnZVZhbHVlW2tleV07XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmV4cG9ydHMuZ2V0TmFtZXNwYWNlZFN0b3JhZ2UgPSBnZXROYW1lc3BhY2VkU3RvcmFnZTtcbmZ1bmN0aW9uIGRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZShpbnN0YW5jZSwga2V5LCBuc1Byb3AgPSBcImlkXCIpIHtcbiAgICBpZiAoa2V5ID09PSBcIipcIikge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gZ2V0TmFtZXNwYWNlZFN0b3JhZ2UoaW5zdGFuY2UsIGtleSwgbnNQcm9wKTtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHN0b3JhZ2UpIHtcbiAgICAgICAgICAgIGlmIChzdG9yYWdlLmhhc093blByb3BlcnR5KHByb3ApKVxuICAgICAgICAgICAgICAgIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBwcm9wLCB1bmRlZmluZWQsIG5zUHJvcCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZVxuICAgICAgICBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZShpbnN0YW5jZSwga2V5LCB1bmRlZmluZWQsIG5zUHJvcCk7XG59XG5leHBvcnRzLmRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZSA9IGRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRYUnBiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDNWMGFXeHpMM1YwYVd3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN4clJFRkJhMFU3UVVGVmJFVXNVMEZCWjBJc01FSkJRVEJDTEVOQlFVTXNVVUZCWVN4RlFVRkZMRWRCUVZjc1JVRkJSU3hOUVVGWExFVkJRVVVzVTBGQmFVSXNTVUZCU1R0SlFVTnlSeXhKUVVGSkxFZEJRVWNzUzBGQlN5eEhRVUZITzFGQlFVVXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXh6UlVGQmMwVXNRMEZCUXl4RFFVRkRPMGxCUjNwSExFMUJRVTBzVVVGQlVTeEhRVUZITEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXp0SlFVTnNSU3hKUVVGSkxGRkJRVkVzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3h2UWtGQmIwSXNRMEZCUXl4RFFVRkRPMGxCUXpORUxFbEJRVWtzV1VGQmFVSXNRMEZCUXp0SlFVZDBRaXhKUVVGSkxFTkJRVU1zVVVGQlVUdFJRVUZGTEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRE0wTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1IwRkJSeXhSUVVGUkxFbEJRVWtzVVVGQlVTeEZRVUZGTEVOQlFVTTdTVUZEYmtNc1NVRkJTU3hIUVVGSExFdEJRVXNzVFVGQlRTeEpRVUZKTEZGQlFWRXNTMEZCU3l4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVU3VVVGRmFrUXNVVUZCVVN4SFFVRkhMRWRCUVVjc1MwRkJTeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEzUkVMRTFCUVUwc1MwRkJTeXhIUVVGSExFZEJRVWNzVVVGQlVTeEpRVUZKTEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUTNoRExGbEJRVmtzUjBGQlJ5eFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRM2hETEVsQlFVa3NXVUZCV1N4RlFVRkZPMWxCUTJRc1dVRkJXU3hEUVVGRExGVkJRVlVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTTFRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4WlFVRlpMRU5CUVVNc1EwRkJRenRUUVVNM1F6dFJRVU5FTEVWQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVNN1MwRkRaRHRUUVVGTk8xRkJSVWdzV1VGQldTeEhRVUZITEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGVFTXNTVUZCU1N4WlFVRlpMRVZCUVVVN1dVRkRaQ3haUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRUUVVNelF6czdXVUZCVFN4WlFVRlpMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJSWHBDTEVsQlFVa3NUVUZCVFN4TFFVRkxMRk5CUVZNc1JVRkJSVHRaUVVOMFFpeFBRVUZQTEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVONlFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVTdaMEpCUTI1RExGbEJRVmtzUTBGQlF5eFZRVUZWTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRMMEk3TzJkQ1FVRk5MRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5xUlRzN1dVRkJUU3haUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVOdVJ6dEpRVVZFTEhsQ1FVRmpMRU5CUVVNc1VVRkJVU3hGUVVGRkxHOUNRVUZ2UWl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8wRkJRemRFTEVOQlFVTTdRVUZ5UTBRc1owVkJjVU5ETzBGQmEwSkVMRk5CUVdkQ0xHOUNRVUZ2UWl4RFFVRkRMRkZCUVdFc1JVRkJSU3hIUVVGWExFVkJRVVVzVTBGQmFVSXNTVUZCU1N4RlFVRkZMRTlCUVdkQ08wbEJRM0JITEUxQlFVMHNVVUZCVVN4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJRenRKUVVOc1JTeEpRVUZKTEZGQlFWRXNSMEZCUnl4elFrRkJWeXhEUVVGRExGRkJRVkVzUlVGQlJTeHZRa0ZCYjBJc1EwRkJReXhEUVVGRE8wbEJRek5FTEVsQlFVa3NVVUZCVVN4TFFVRkxMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGQlJTeFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJReTlFTEVsQlFVa3NUMEZCVHp0UlFVRkZMRkZCUVZFc1IwRkJSeXhQUVVGUExFTkJRVU03U1VGRGFFTXNTVUZCU1N4WlFVRlpMRWRCUVZFc1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEZGQlFWRXNTVUZCU1N4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRM2hGTEVsQlFVa3NXVUZCV1R0UlFVRkZMRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMGxCUXpGRUxFbEJRVWtzV1VGQldTeEpRVUZKTEVkQlFVY3NTMEZCU3l4SFFVRkhPMUZCUVVVc1QwRkJUeXhaUVVGWkxFTkJRVU03U1VGRGNrUXNTVUZCU1N4WlFVRlpMRWxCUVVrc1IwRkJSeXhKUVVGSkxGbEJRVms3VVVGQlJTeFBRVUZQTEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOc1JTeFBRVUZQTEZOQlFWTXNRMEZCUXp0QlFVTnlRaXhEUVVGRE8wRkJWa1FzYjBSQlZVTTdRVUZYUkN4VFFVRm5RaXd5UWtGQk1rSXNRMEZCUXl4UlFVRmhMRVZCUVVVc1IwRkJWeXhGUVVGRkxGTkJRV2xDTEVsQlFVazdTVUZEZWtZc1NVRkJTU3hIUVVGSExFdEJRVXNzUjBGQlJ5eEZRVUZGTzFGQlEySXNUVUZCVFN4UFFVRlBMRWRCUVVjc2IwSkJRVzlDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVjc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU0xUkN4TFFVRkxMRTFCUVUwc1NVRkJTU3hKUVVGSkxFOUJRVThzUlVGQlJUdFpRVU40UWl4SlFVRkpMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETzJkQ1FVRkZMREJDUVVFd1FpeERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRVZCUVVVc1UwRkJVeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzFOQlEyNUhPMHRCUTBvN08xRkJRVTBzTUVKQlFUQkNMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzUlVGQlJTeFRRVUZUTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkRlRVVzUTBGQlF6dEJRVkJFTEd0RlFVOURJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBQcm9wZXJ0eV8xID0gcmVxdWlyZShcIn5iZG8vbGliL1Byb3BlcnR5XCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuY29uc3QgTW9kaWZpY2F0aW9uXzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kaWZpY2F0aW9uXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNsYXNzIEF0dHJpYnV0ZSBleHRlbmRzIFByb3BlcnR5XzEuUHJvcGVydHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHksIHBhcmFtcykge1xuICAgICAgICBzdXBlcihvYmplY3QsIHByb3BlcnR5LCBwYXJhbXMpO1xuICAgICAgICB0aGlzLmluRE9NSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWVPZigpID09PSB2YWx1ZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5kb1NldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5yZWZsZWN0VG9ET01BdHRyaWJ1dGUodmFsdWUpO1xuICAgICAgICB0aGlzLmRvQXV0b1NhdmUoKTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gc3VwZXIudmFsdWVPZigpO1xuICAgICAgICBpZiAodGhpcy51bnNhdmVkQ2hhbmdlICYmICF0aGlzLnN0b3JlVGVtcG9yYXJ5ICYmICF0aGlzLmRvTm90UGVyc2lzdCAmJiB0aGlzLm9iamVjdC5pc0JET01vZGVsKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMudW5zYXZlZENoYW5nZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJlZmxlY3RUb0RPTUF0dHJpYnV0ZSh2YWx1ZSkge1xuICAgICAgICBpZiAoIWVudmlyb25tZW50XzEuaXNCcm93c2VyKCkgfHwgISh0aGlzLm9iamVjdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbGV0IHZhbHVlVG9QYXNzID0gdmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGlmaWNhdGlvbl8xLk1vZGlmaWNhdGlvbilcbiAgICAgICAgICAgIHZhbHVlVG9QYXNzID0gdmFsdWUudmFsdWVPZigpO1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSB0aGlzLnByb3BlcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IHRoaXMub2JqZWN0LmdldEF0dHJpYnV0ZShzdHJpbmdLZXkpO1xuICAgICAgICBsZXQgc2V0QXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgaWYgKCF0aGlzLmluRE9NSW5pdGlhbGl6ZWQgJiYgYXR0clZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZVRvU2V0ID0gdXRpbF8xLmNvbnN0cnVjdFR5cGVPZkhUTUxBdHRyaWJ1dGUodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpO1xuICAgICAgICAgICAgdGhpcy5vYmplY3Rbc3RyaW5nS2V5XSA9IHZhbHVlVG9TZXQ7XG4gICAgICAgICAgICB0aGlzLmluRE9NSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNldEF0dHJpYnV0ZSAmJiBhdHRyVmFsdWUgIT09IEpTT04uc3RyaW5naWZ5KHZhbHVlVG9QYXNzKSlcbiAgICAgICAgICAgIHRoaXMub2JqZWN0LnNldEF0dHJpYnV0ZShzdHJpbmdLZXksIHZhbHVlVG9QYXNzKTtcbiAgICB9XG4gICAgZG9TZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBsZXQgdmFsdWVUb1Bhc3MgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kaWZpY2F0aW9uXzEuTW9kaWZpY2F0aW9uKVxuICAgICAgICAgICAgdmFsdWVUb1Bhc3MgPSB2YWx1ZS52YWx1ZU9mKCk7XG4gICAgICAgIHN1cGVyLmRvU2V0VmFsdWUodmFsdWUsIGZhbHNlKTtcbiAgICAgICAgaWYgKCF0aGlzLm9iamVjdC5pc0JET01vZGVsIHx8IHRoaXMuc3RvcmVUZW1wb3JhcnkgfHwgdGhpcy5kb05vdFBlcnNpc3QgfHwgKHZhbHVlIGluc3RhbmNlb2YgTW9kaWZpY2F0aW9uXzEuTW9kaWZpY2F0aW9uICYmIHZhbHVlLnR5cGUgPT09IFwidXBkYXRlXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWVUb1Bhc3M7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodmFsdWVUb1Bhc3MgPT09IHVuZGVmaW5lZCAmJiB2YWx1ZVRvUGFzcyAhPT0gc3VwZXIudmFsdWVPZigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnNhdmVkQ2hhbmdlID0gbmV3IE1vZGlmaWNhdGlvbl8xLk1vZGlmaWNhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMudW5zYXZlZENoYW5nZSA9IHZhbHVlVG9QYXNzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gc3VwZXIudmFsdWVPZigpKVxuICAgICAgICAgICAgdGhpcy51bnNhdmVkQ2hhbmdlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBkb0F1dG9TYXZlKCkge1xuICAgICAgICBpZiAoIXRoaXMuYXV0b1NhdmUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5hdXRvU2F2ZSA9PT0gXCJib29sZWFuXCIpXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5zYXZlKHRoaXMucHJvcGVydHkpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYXV0b1NhdmUgPT09IFwibnVtYmVyXCIgJiYgIXRoaXMuYXV0b1NhdmVUaW1lb3V0KSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9TYXZlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0LnNhdmUodGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuYXV0b1NhdmVUaW1lb3V0O1xuICAgICAgICAgICAgfSwgTWF0aC5hYnModGhpcy5hdXRvU2F2ZSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5BdHRyaWJ1dGUgPSBBdHRyaWJ1dGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRWFIwY21saWRYUmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlzYVdJdlFYUjBjbWxpZFhSbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc1owUkJRVGhFTzBGQlJUbEVMSGRFUVVGdFJEdEJRVU51UkN4M1JFRkJjVVE3UVVGRGNrUXNNRU5CUVN0RU8wRkJjMFV2UkN4TlFVRmhMRk5CUVRKRUxGTkJRVkVzYlVKQlFWRTdTVUZ4UlhCR0xGbEJRVmtzVFVGQlV5eEZRVUZGTEZGQlFWY3NSVUZCUlN4TlFVRjVRanRSUVVONlJDeExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRkZCUVZFc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVm94UWl4eFFrRkJaMElzUjBGQldTeExRVUZMTEVOQlFVTTdTVUZoTlVNc1EwRkJRenRKUVZGTkxGRkJRVkVzUTBGQlF5eExRVUZYTzFGQlEzWkNMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeExRVUZMTEV0QlFVczdXVUZCUlN4UFFVRlBPMUZCUTNKRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRka0lzU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlEyeERMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF6dEpRVU4wUWl4RFFVRkRPMGxCUzAwc1QwRkJUenRSUVVOV0xFbEJRVWtzUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRSUVVNMVFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNSVUZCUlR0WlFVTTFSaXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXp0VFFVTTVRanRSUVVORUxFOUJRVThzUzBGQlN5eERRVUZETzBsQlEycENMRU5CUVVNN1NVRlZVeXh4UWtGQmNVSXNRMEZCUXl4TFFVRlZPMUZCUTNSRExFbEJRVWtzUTBGQlF5eDFRa0ZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEZsQlFWa3NWMEZCVnl4RFFVRkRPMWxCUVVVc1QwRkJUenRSUVVOc1JTeEpRVUZKTEZkQlFWY3NSMEZCUnl4TFFVRkxMRU5CUVVNN1VVRkRlRUlzU1VGQlNTeExRVUZMTEZsQlFWa3NNa0pCUVZrN1dVRkJSU3hYUVVGWExFZEJRVWNzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUldwRkxFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRE0wTXNUVUZCVFN4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkRkRVFzU1VGQlNTeFpRVUZaTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUlhoQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFbEJRVWtzVTBGQlV5eEZRVUZGTzFsQlJYSkRMRTFCUVUwc1ZVRkJWU3hIUVVGSExHMURRVUUwUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMWxCUlRORUxFbEJRVWtzUTBGQlF5eE5RVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRE8xbEJRM1JFTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZETjBJc1dVRkJXU3hIUVVGSExFdEJRVXNzUTBGQlF6dFRRVU40UWp0UlFVVkVMRWxCUVVrc1dVRkJXU3hKUVVGSkxGTkJRVk1zUzBGQlN5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRmRCUVZjc1EwRkJRenRaUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hYUVVGWExFTkJRVU1zUTBGQlF6dEpRVU53U0N4RFFVRkRPMGxCV1ZNc1ZVRkJWU3hEUVVGRExFdEJRVmM3VVVGRE5VSXNTVUZCU1N4WFFVRlhMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRM2hDTEVsQlFVa3NTMEZCU3l4WlFVRlpMREpDUVVGWk8xbEJRVVVzVjBGQlZ5eEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRSUVVOcVJTeExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU12UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVsQlFVa3NTVUZCU1N4RFFVRkRMR05CUVdNc1NVRkJTU3hKUVVGSkxFTkJRVU1zV1VGQldTeEpRVUZKTEVOQlEzWkZMRXRCUVVzc1dVRkJXU3d5UWtGQldTeEpRVUZKTEV0QlFVc3NRMEZCUXl4SlFVRkpMRXRCUVVzc1VVRkJVU3hEUVVGRExFVkJRVVU3V1VGRE0wUXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhYUVVGWExFTkJRVU03VTBGRE5VSTdZVUZCVFR0WlFVTklMRWxCUVVrc1YwRkJWeXhMUVVGTExGTkJRVk1zU1VGQlNTeFhRVUZYTEV0QlFVc3NTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hGUVVGRk8yZENRVU01UkN4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFbEJRVWtzTWtKQlFWa3NSVUZCY1VJc1EwRkJRenRoUVVNNVJEczdaMEpCUVUwc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eFhRVUZYTEVOQlFVTTdVMEZETTBNN1VVRkRSQ3hKUVVGSkxFdEJRVXNzUzBGQlN5eExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZPMWxCUVVVc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eFRRVUZUTEVOQlFVTTdTVUZEYkVVc1EwRkJRenRKUVZWVExGVkJRVlU3VVVGRGFFSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUk8xbEJRVVVzVDBGQlR6dFJRVU16UWl4SlFVRkpMRTlCUVU4c1NVRkJTU3hEUVVGRExGRkJRVkVzUzBGQlN5eFRRVUZUTzFsQlFVVXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUTNoRkxFbEJRVWtzVDBGQlR5eEpRVUZKTEVOQlFVTXNVVUZCVVN4TFFVRkxMRkZCUVZFc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVWQlFVVTdXVUZETlVRc1NVRkJTU3hEUVVGRExHVkJRV1VzUjBGQlJ5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RlFVRkZPMmRDUVVOdVF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdaMEpCUTJoRExFOUJRVThzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXp0WlFVTm9ReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU12UWp0SlFVTk1MRU5CUVVNN1EwRkRTanRCUVhwTFJDdzRRa0Y1UzBNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBtc18xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm1zXCIpKTtcbmNvbnN0IEJET01hcENhY2hlXzEgPSByZXF1aXJlKFwifmJkby9saWIvQkRPTWFwQ2FjaGVcIik7XG5jbGFzcyBCRE9Db25maWdNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBCRE9NYXBDYWNoZV8xLkJET01hcENhY2hlKCk7XG4gICAgfVxuICAgIGFzeW5jIGdldChjb25maWcpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gYXdhaXQgdGhpcy5nZXRDYWNoZShjb25maWcpO1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGF3YWl0IHRoaXMubG9hZChjb25maWcpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRDYWNoZShjb25maWcsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKTtcbiAgICB9XG4gICAgZ2V0Q2FjaGUoY29uZmlnKSB7XG4gICAgICAgIGNvbnN0IGZyb21Mb2NhbENhY2hlID0gdGhpcy5jYWNoZS5nZXQoY29uZmlnKTtcbiAgICAgICAgaWYgKGZyb21Mb2NhbENhY2hlKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbUxvY2FsQ2FjaGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGFzeW5jIHNldENhY2hlKGNvbmZpZywgdmFsdWUpIHtcbiAgICAgICAgbGV0IGNvbmYgPSB0aGlzLmNhY2hlLmdldCgnX19Db25maWdNYW5hZ2VyQ2FjaGVUaW1lb3V0X18nKTtcbiAgICAgICAgaWYgKCF0aGlzLmNhY2hlLmhhcygnX19Db25maWdNYW5hZ2VyQ2FjaGVUaW1lb3V0X18nKSkge1xuICAgICAgICAgICAgY29uZiA9IChhd2FpdCB0aGlzLmxvYWQoJ2NvbmZpZycpKS50aW1lb3V0cy5jb25maWdDYWNoZTtcbiAgICAgICAgICAgIGlmIChjb25mKVxuICAgICAgICAgICAgICAgIGNvbmYgPSBtc18xLmRlZmF1bHQoY29uZik7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnNldCgnX19Db25maWdNYW5hZ2VyQ2FjaGVUaW1lb3V0X18nLCBjb25mKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlLnNldChjb25maWcsIHZhbHVlLCBjb25mKTtcbiAgICB9XG59XG5leHBvcnRzLkJET0NvbmZpZ01hbmFnZXIgPSBCRE9Db25maWdNYW5hZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFEyOXVabWxuVFdGdVlXZGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2YkdsaUwwSkVUME52Ym1acFowMWhibUZuWlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc2IwUkJRVzlDTzBGQlEzQkNMSE5FUVVGdFJEdEJRVzFDYmtRc1RVRkJjMElzWjBKQlFXZENPMGxCUVhSRE8xRkJWV01zVlVGQlN5eEhRVUUyUWl4SlFVRkpMSGxDUVVGWExFVkJRVVVzUTBGQlF6dEpRWGRGYkVVc1EwRkJRenRKUVM5RVZTeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVdNN1VVRkRNMElzU1VGQlNTeExRVUZMTEVkQlFVY3NUVUZCVFN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEzaERMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVU3V1VGRFVpeExRVUZMTEVkQlFVY3NUVUZCVFN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFsQlEyaERMRTFCUVUwc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1UwRkRkRU03VVVGRFJDeFBRVUZQTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJFTXNRMEZCUXp0SlFUaENVeXhSUVVGUkxFTkJRVU1zVFVGQll6dFJRVU0zUWl4TlFVRk5MR05CUVdNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVNNVF5eEpRVUZKTEdOQlFXTXNSVUZCUlR0WlFVTm9RaXhQUVVGUExHTkJRV01zUTBGQlF6dFRRVU42UWp0UlFVTkVMRTlCUVU4c1NVRkJTU3hEUVVGRE8wbEJRMmhDTEVOQlFVTTdTVUZYVXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRV01zUlVGQlJTeExRVUZWTzFGQlF5OURMRWxCUVVrc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMQ3RDUVVFclFpeERRVUZETEVOQlFVTTdVVUZETTBRc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMQ3RDUVVFclFpeERRVUZETEVWQlFVVTdXVUZEYkVRc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXp0WlFVTjRSQ3hKUVVGSkxFbEJRVWs3WjBKQlFVVXNTVUZCU1N4SFFVRkhMRmxCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU14UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5d3JRa0ZCSzBJc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU42UkR0UlFVTkVMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNSVUZCUlN4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRGVFTXNRMEZCUXp0RFFVTktPMEZCYkVaRUxEUkRRV3RHUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IG1vbWVudF8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm1vbWVudFwiKSk7XG5jb25zdCBwYXRoXzEgPSByZXF1aXJlKFwicGF0aFwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jbGFzcyBCRE9Mb2dnZXIge1xuICAgIGNvbnN0cnVjdG9yKF9wYXJhbXMpIHtcbiAgICAgICAgdGhpcy5sb2dGaWxlID0gJ2RlZmF1bHQubG9nJztcbiAgICAgICAgdGhpcy5wcmV2ZW50Q29uc29sZVByaW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJldmVudEZpbGVQcmludCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvZ0xldmVsID0gJ2RlYnVnJztcbiAgICAgICAgdGhpcy5wcm90b3R5cGVOYW1lcyA9IHV0aWxfMS5nZXRQcm90b3R5cGVOYW1lc1JlY3Vyc2l2ZSh0aGlzKTtcbiAgICB9XG4gICAgbG9nKG1lc3NhZ2UsIGxvZ2xldmVsID0gJ2xvZycsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKGxvZ2xldmVsICE9PSAnbG9nJyAmJiAhdGhpcy5pc0FsbG93ZWQobG9nbGV2ZWwpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMucHJldmVudENvbnNvbGVQcmludCB8fCBbJ2xvZycsICdlcnJvciddLmluY2x1ZGVzKGxvZ2xldmVsKSkge1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5nZXRIZWFkZXIobG9nbGV2ZWwpO1xuICAgICAgICAgICAgbGV0IG5ld0FyZ3MgPSBbXTtcbiAgICAgICAgICAgIGlmIChoZWFkZXIgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIG5ld0FyZ3MgPSBuZXdBcmdzLmNvbmNhdChoZWFkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIG5ld0FyZ3MucHVzaChoZWFkZXIpO1xuICAgICAgICAgICAgbmV3QXJncy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICAgICAgbmV3QXJncyA9IG5ld0FyZ3MuY29uY2F0KGFyZ3MpO1xuICAgICAgICAgICAgY29uc29sZVtsb2dsZXZlbF0uYXBwbHkodGhpcywgbmV3QXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoYXJncyk7XG4gICAgICAgIGlmICghdGhpcy5wcmV2ZW50RmlsZVByaW50IHx8IGxvZ2xldmVsID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLndyaXRlVG9GaWxlKGxvZ2xldmVsLCBtZXNzYWdlICsgcGFyc2VkU3RyaW5nLnN1YnN0cigxLCBwYXJzZWRTdHJpbmcubGVuZ3RoIC0gMikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRlYnVnKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgYXBwbHkgPSBbbWVzc2FnZSwgJ2RlYnVnJ10uY29uY2F0KGFyZ3MpO1xuICAgICAgICB0aGlzLmxvZy5hcHBseSh0aGlzLCBhcHBseSk7XG4gICAgfVxuICAgIGluZm8obWVzc2FnZSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBhcHBseSA9IFttZXNzYWdlLCAnaW5mbyddLmNvbmNhdChhcmdzKTtcbiAgICAgICAgdGhpcy5sb2cuYXBwbHkodGhpcywgYXBwbHkpO1xuICAgIH1cbiAgICB3YXJuKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgYXBwbHkgPSBbbWVzc2FnZSwgJ3dhcm4nXS5jb25jYXQoYXJncyk7XG4gICAgICAgIHRoaXMubG9nLmFwcGx5KHRoaXMsIGFwcGx5KTtcbiAgICB9XG4gICAgZXJyb3IobWVzc2FnZSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBhcHBseSA9IFttZXNzYWdlLCAnZXJyb3InXS5jb25jYXQoYXJncyk7XG4gICAgICAgIHRoaXMubG9nLmFwcGx5KHRoaXMsIGFwcGx5KTtcbiAgICB9XG4gICAgZ2V0UHJvY0luZm8oKSB7XG4gICAgICAgIHJldHVybiBgJHtnbG9iYWwucHJvY2Vzcy5lbnYubmFtZSB8fCAnJ30gJHtnbG9iYWwucHJvY2Vzcy5lbnYuaG9zdG5hbWUgfHwgJyd9ICR7Z2xvYmFsLnByb2Nlc3MucGlkfWA7XG4gICAgfVxuICAgIGlzQWxsb3dlZChsb2dMZXZlbCkge1xuICAgICAgICBjb25zdCBsb2dMZXZlbE9yZGVyID0gWydsb2cnLCAnZGVidWcnLCAnaW5mbycsICd3YXJuJywgJ2Vycm9yJ107XG4gICAgICAgIHJldHVybiBsb2dMZXZlbE9yZGVyLmluZGV4T2YobG9nTGV2ZWwpID49IGxvZ0xldmVsT3JkZXIuaW5kZXhPZih0aGlzLmxvZ0xldmVsKTtcbiAgICB9XG4gICAgY3VycmVudFRpbWUoKSB7XG4gICAgICAgIHJldHVybiBtb21lbnRfMS5kZWZhdWx0KCkuZm9ybWF0KCdERC5NTS5ZWVlZIEhIOm1tOnNzJyk7XG4gICAgfVxuICAgIGdldExvZ1BvaW50KCkge1xuICAgICAgICBjb25zdCBzdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgbGV0IGNhbGxwb2ludDtcbiAgICAgICAgZm9yIChjb25zdCBbaW5kZXgsIHN0YWNrcGFydF0gb2Ygc3RhY2suZW50cmllcygpKSB7XG4gICAgICAgICAgICBpZiAoIWluZGV4KVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCF1dGlsXzEuaW5jbHVkZXNNZW1iZXJPZkxpc3Qoc3RhY2twYXJ0LCB0aGlzLnByb3RvdHlwZU5hbWVzLCAnLnRzJykpIHtcbiAgICAgICAgICAgICAgICBjYWxscG9pbnQgPSBzdGFja3BhcnQuc3BsaXQocGF0aF8xLnNlcCkucG9wKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxwb2ludCkge1xuICAgICAgICAgICAgY2FsbHBvaW50ID0gY2FsbHBvaW50LnJlcGxhY2UoJyknLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxscG9pbnQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FsbHBvaW50O1xuICAgIH1cbn1cbmV4cG9ydHMuQkRPTG9nZ2VyID0gQkRPTG9nZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFRHOW5aMlZ5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5c2FXSXZRa1JQVEc5bloyVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVTkJMRFJFUVVFMFFqdEJRVU0xUWl3clFrRkJNa0k3UVVGRE0wSXNNRU5CUVcxR08wRkJWMjVHTEUxQlFYTkNMRk5CUVZNN1NVRnJSRE5DTEZsQlFWa3NUMEZCWjBNN1VVRXpRM0pETEZsQlFVOHNSMEZCV1N4aFFVRmhMRU5CUVVNN1VVRlJha01zZDBKQlFXMUNMRWRCUVdFc1MwRkJTeXhEUVVGRE8xRkJVWFJETEhGQ1FVRm5RaXhIUVVGaExFdEJRVXNzUTBGQlF6dFJRV1Z1UXl4aFFVRlJMRWRCUVdVc1QwRkJUeXhEUVVGRE8xRkJWVzVDTEcxQ1FVRmpMRWRCUVdFc2FVTkJRVEJDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkZMMElzUTBGQlF6dEpRVmN4UXl4SFFVRkhMRU5CUVVNc1QwRkJXU3hGUVVGRkxGZEJRWE5DTEV0QlFVc3NSVUZCUlN4SFFVRkhMRWxCUVZjN1VVRkRhRVVzU1VGQlNTeFJRVUZSTEV0QlFVc3NTMEZCU3l4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTTdXVUZCUlN4UFFVRlBPMUZCUXpWRUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTzFsQlEyeEZMRTFCUVUwc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1dVRkRlRU1zU1VGQlNTeFBRVUZQTEVkQlFXRXNSVUZCUlN4RFFVRkRPMWxCUXpOQ0xFbEJRVWtzVFVGQlRTeFpRVUZaTEV0QlFVc3NSVUZCUlR0blFrRkRla0lzVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03WVVGRGNFTTdPMmRDUVVGTkxFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkROVUlzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRaUVVOMFFpeFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5rTEU5QlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMU5CUXpWRU8xRkJRMFFzVFVGQlRTeFpRVUZaTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU14UXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4SlFVRkpMRkZCUVZFc1MwRkJTeXhQUVVGUExFVkJRVVU3V1VGRGFFUXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFVkJRVVVzVDBGQlR5eEhRVUZITEZsQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxGbEJRVmtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVONlJqdEpRVU5NTEVOQlFVTTdTVUZSVFN4TFFVRkxMRU5CUVVNc1QwRkJXU3hGUVVGRkxFZEJRVWNzU1VGQlV6dFJRVU51UXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE9VTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZ2UWl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOc1JDeERRVUZETzBsQlVVMHNTVUZCU1N4RFFVRkRMRTlCUVZrc1JVRkJSU3hIUVVGSExFbEJRVk03VVVGRGJFTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRemRETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUlVGQmIwSXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRiRVFzUTBGQlF6dEpRVkZOTEVsQlFVa3NRMEZCUXl4UFFVRlpMRVZCUVVVc1IwRkJSeXhKUVVGVE8xRkJRMnhETEUxQlFVMHNTMEZCU3l4SFFVRkhMRU5CUVVNc1QwRkJUeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNM1F5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFVkJRVzlDTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJ4RUxFTkJRVU03U1VGUlRTeExRVUZMTEVOQlFVTXNUMEZCV1N4RlFVRkZMRWRCUVVjc1NVRkJVenRSUVVOdVF5eE5RVUZOTEV0QlFVc3NSMEZCUnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRPVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGdlFpeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnNSQ3hEUVVGRE8wbEJVMU1zVjBGQlZ6dFJRVU5xUWl4UFFVRlBMRWRCUVVjc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4SlFVRkpMRVZCUVVVc1NVRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRWxCUVVrc1JVRkJSU3hKUVVGSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1NVRkRla2NzUTBGQlF6dEpRU3RDVXl4VFFVRlRMRU5CUVVNc1VVRkJiVUk3VVVGRGJrTXNUVUZCVFN4aFFVRmhMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzVDBGQlR5eEZRVUZGTEUxQlFVMHNSVUZCUlN4TlFVRk5MRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGFFVXNUMEZCVHl4aFFVRmhMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEdGQlFXRXNRMEZCUXl4UFFVRlBMRU5CUVZNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzBsQlF6TkdMRU5CUVVNN1NVRlRVeXhYUVVGWE8xRkJRMnBDTEU5QlFVOHNaMEpCUVUwc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eHhRa0ZCY1VJc1EwRkJReXhEUVVGRE8wbEJRMnhFTEVOQlFVTTdTVUZUVXl4WFFVRlhPMUZCUTJwQ0xFMUJRVTBzUzBGQlN5eEhRVUZaTEVsQlFVa3NTMEZCU3l4RlFVRkZMRU5CUVVNc1MwRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTjBSQ3hKUVVGSkxGTkJRVk1zUTBGQlF6dFJRVU5rTEV0QlFVc3NUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGVExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVN1dVRkRPVU1zU1VGQlNTeERRVUZETEV0QlFVczdaMEpCUVVVc1UwRkJVenRaUVVOeVFpeEpRVUZKTEVOQlFVTXNNa0pCUVc5Q0xFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4alFVRmpMRVZCUVVVc1MwRkJTeXhEUVVGRExFVkJRVVU3WjBKQlF6bEVMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEZWQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8yZENRVU4yUXl4TlFVRk5PMkZCUTFRN1UwRkRTanRSUVVORUxFbEJRVWtzVTBGQlV5eEZRVUZGTzFsQlExZ3NVMEZCVXl4SFFVRkhMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpGRE8yRkJRVTA3V1VGRFNDeFRRVUZUTEVkQlFVY3NSVUZCUlN4RFFVRkRPMU5CUTJ4Q08xRkJRMFFzVDBGQlR5eFRRVUZUTEVOQlFVTTdTVUZEY2tJc1EwRkJRenREUVVOS08wRkJNMDFFTERoQ1FUSk5ReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEsIGR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuZXhwaXJlID0gSW5maW5pdHk7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuZXhwaXJlID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoZHVyYXRpb24gfHwgSW5maW5pdHkpO1xuICAgIH1cbiAgICBnZXQgZXhwaXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhwaXJlID8gdGhpcy5leHBpcmUgPCBuZXcgRGF0ZSgpLmdldFRpbWUoKSA6IGZhbHNlO1xuICAgIH1cbn1cbmNsYXNzIEJET01hcENhY2hlIGV4dGVuZHMgTWFwIHtcbiAgICBzZXQoa2V5LCB2YWx1ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gbmV3IEVudGl0eSh2YWx1ZSwgZHVyYXRpb24pO1xuICAgICAgICByZXR1cm4gc3VwZXIuc2V0KGtleSwgZW50aXR5KTtcbiAgICB9XG4gICAgZ2V0KGtleSkge1xuICAgICAgICBjb25zdCBlbnRpdHkgPSBzdXBlci5nZXQoa2V5KTtcbiAgICAgICAgaWYgKGVudGl0eSA9PT0gdW5kZWZpbmVkIHx8IGVudGl0eS5leHBpcmVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50aXR5LmRhdGE7XG4gICAgfVxufVxuZXhwb3J0cy5CRE9NYXBDYWNoZSA9IEJET01hcENhY2hlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFRXRndRMkZqYUdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyeHBZaTlDUkU5TllYQkRZV05vWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVXRCTEUxQlFVMHNUVUZCVFR0SlFXZENVaXhaUVVGWkxFbEJRVThzUlVGQlJTeFJRVUZwUWp0UlFVWTVRaXhYUVVGTkxFZEJRVmNzVVVGQlVTeERRVUZETzFGQlJ6bENMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEycENMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeEpRVUZKTEVWQlFVVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1IwRkJSeXhEUVVGRExGRkJRVkVzU1VGQlNTeFJRVUZSTEVOQlFVTXNRMEZCUXp0SlFVTm9SU3hEUVVGRE8wbEJVMFFzU1VGQlNTeFBRVUZQTzFGQlExQXNUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1NVRkJTU3hGUVVGRkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJRenRKUVVOd1JTeERRVUZETzBOQlEwbzdRVUZUUkN4TlFVRmhMRmRCUVd0Q0xGTkJRVkVzUjBGQmFVSTdTVUZYTjBNc1IwRkJSeXhEUVVGRExFZEJRVTBzUlVGQlJTeExRVUZSTEVWQlFVVXNVVUZCYVVJN1VVRkRNVU1zVFVGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzFGQlF6TkRMRTlCUVU4c1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRiRU1zUTBGQlF6dEpRVk5OTEVkQlFVY3NRMEZCUXl4SFFVRk5PMUZCUTJJc1RVRkJUU3hOUVVGTkxFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNNVFpeEpRVUZKTEUxQlFVMHNTMEZCU3l4VFFVRlRMRWxCUVVrc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJUdFpRVU40UXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlEycENMRTlCUVU4c1UwRkJVeXhEUVVGRE8xTkJRM0JDTzFGQlEwUXNUMEZCVHl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJRM1pDTEVOQlFVTTdRMEZEU2p0QlFTOUNSQ3hyUTBFclFrTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQkRPTW9kZWxfMTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5cInVzZSBzdHJpY3RcIjtcbmNvbnN0IHV1aWRfMSA9IHJlcXVpcmUoXCJ1dWlkXCIpO1xuY29uc3QgdHlwZV9ncmFwaHFsXzEgPSByZXF1aXJlKFwidHlwZS1ncmFwaHFsXCIpO1xuY29uc3QgQmluZGluZ18xID0gcmVxdWlyZShcIn5iZG8vbGliL0JpbmRpbmdcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xubGV0IEJET01vZGVsID0gQkRPTW9kZWxfMSA9IGNsYXNzIEJET01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0JET01vZGVsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uTmFtZSA9IEJET01vZGVsXzEuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMuaWQgPSBgcGVuZGluZ18ke3V1aWRfMS52MSgpfWA7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMuY29uc3RydWN0b3IpLm5hbWU7XG4gICAgfVxuICAgIGdldCBiaW5kaW5ncygpIHtcbiAgICAgICAgY29uc3QgYmluZGluZ3MgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMsIFwiYmluZGluZ3NcIik7XG4gICAgICAgIHJldHVybiBiaW5kaW5ncyA/IGJpbmRpbmdzIDogbmV3IE1hcCgpO1xuICAgIH1cbiAgICBiaW5kKHByb3BOYW1lLCBtb2RlKSB7XG4gICAgICAgIHJldHVybiBuZXcgQmluZGluZ18xLkJpbmRpbmcodGhpcywgcHJvcE5hbWUsIG1vZGUpO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMudG9KU09OKCk7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICBjb25zdCBkYXRhID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzW2tleV07XG4gICAgICAgICAgICAgICAgZGF0YVtrZXldID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59O1xuQkRPTW9kZWwuZ3JhcGhRTFR5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQkRPTW9kZWxfMS5jb25zdHJ1Y3Rvcik7XG5CRE9Nb2RlbC5pc0JET01vZGVsID0gdHJ1ZTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcbl0sIEJET01vZGVsLnByb3RvdHlwZSwgXCJpc0JET01vZGVsXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIEJET01vZGVsLnByb3RvdHlwZSwgXCJjb2xsZWN0aW9uTmFtZVwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKChfdHlwZSkgPT4gdHlwZV9ncmFwaHFsXzEuSUQpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIEJET01vZGVsLnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgQkRPTW9kZWwucHJvdG90eXBlLCBcImNsYXNzTmFtZVwiLCB2b2lkIDApO1xuQkRPTW9kZWwgPSBCRE9Nb2RlbF8xID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKHsgaXNBYnN0cmFjdDogdHJ1ZSB9KVxuXSwgQkRPTW9kZWwpO1xuZXhwb3J0cy5CRE9Nb2RlbCA9IEJET01vZGVsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFRXOWtaV3d1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJ4cFlpOUNSRTlOYjJSbGJDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMQ3RDUVVGclF6dEJRVU5zUXl3clEwRkJhME03UVVGRGJFTXNPRU5CUVhkRU8wRkJRM2hFTEhORVFVRTJSVHRCUVVNM1JTeHJSRUZCYTBRN1FVRlhiRVFzU1VGQmMwSXNVVUZCVVN4blFrRkJPVUlzVFVGQmMwSXNVVUZCVVR0SlFVUTVRanRSUVhORFowTXNaVUZCVlN4SFFVRlpMRWxCUVVrc1EwRkJRenRSUVZFelFpeHRRa0ZCWXl4SFFVRlpMRlZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU03VVVGVE4wTXNUMEZCUlN4SFFVRlhMRmRCUVZjc1UwRkJTU3hGUVVGRkxFVkJRVVVzUTBGQlF6dFJRVlZ5UXl4alFVRlRMRWRCUVZjc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJhVVZzUnl4RFFVRkRPMGxCZGtSSExFbEJRV01zVVVGQlVUdFJRVU5zUWl4TlFVRk5MRkZCUVZFc1IwRkJSeXh6UWtGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVNdlF5eFBRVUZQTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUXpORExFTkJRVU03U1VGWFRTeEpRVUZKTEVOQlFUSkZMRkZCUVZjc1JVRkJSU3hKUVVGUk8xRkJRM1pITEU5QlFVOHNTVUZCU1N4cFFrRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRTJSQ3hEUVVGRE8wbEJRM3BITEVOQlFVTTdTVUZSVFN4UlFVRlJPMUZCUTFnc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMUZCUXpOQ0xFOUJRVThzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOb1F5eERRVUZETzBsQlZVMHNUVUZCVFR0UlFVTlVMRTFCUVUwc1NVRkJTU3hIUVVGdFFpeEZRVUZGTEVOQlFVTTdVVUZEYUVNc1MwRkJTeXhOUVVGTkxFZEJRVWNzU1VGQlNTeEpRVUZKTEVWQlFVVTdXVUZEY0VJc1NVRkJTU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NVMEZCVXl4RlFVRkZPMmRDUVVONlFpeE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlF6RkNMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTTdZVUZEZGtJN1UwRkRTanRSUVVORUxFOUJRVThzU1VGQlNTeERRVUZETzBsQlEyaENMRU5CUVVNN1EwRlRTaXhEUVVGQk8wRkJka2d3UWl4dlFrRkJWeXhIUVVGUkxFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNWVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8wRkJiVUl2UkN4dFFrRkJWU3hIUVVGWkxFbEJRVWtzUTBGQlF6dEJRVkYwUXp0SlFVRllMSEZDUVVGUkxFVkJRVVU3T3pSRFFVRTBRenRCUVZFelF6dEpRVUZZTEhGQ1FVRlJMRVZCUVVVN08yZEVRVUZ0UlR0QlFWTndSRHRKUVVGNlFpeHpRa0ZCVXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVVzUTBGQlF5eHBRa0ZCUlN4RFFVRkRPenR2UTBGQmVVTTdRVUZWY2tRN1NVRkJXaXh6UWtGQlV5eEZRVUZGT3pzeVEwRkJhMFk3UVVGb1JUVkZMRkZCUVZFN1NVRkVOMElzTkVKQlFXVXNRMEZCUXl4RlFVRkZMRlZCUVZVc1JVRkJSU3hKUVVGSkxFVkJRVVVzUTBGQlF6dEhRVU5vUWl4UlFVRlJMRU5CYVVrM1FqdEJRV3BKY1VJc05FSkJRVkVpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbG9kYXNoXzEgPSByZXF1aXJlKFwibG9kYXNoXCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuY2xhc3MgQkRPUm91dGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJvdXRlck5hbWVTcGFjZSA9IGAvJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWUudG9Mb3dlckNhc2UoKX1gO1xuICAgICAgICB0aGlzLnJvdXRlcyA9IFsnLyddO1xuICAgICAgICB0aGlzLnRlbXBsYXRlU3RyaW5nID0gJzxkaXY+PC9kaXY+JztcbiAgICAgICAgdGhpcy5qc29uT25seSA9IGZhbHNlO1xuICAgIH1cbiAgICByZW5kZXJUZW1wbGF0ZSh0ZW1wbGF0ZVBhcmFtcykge1xuICAgICAgICBsZXQgc3RyaW5nVG9QYXJzZSA9IG51bGw7XG4gICAgICAgIGlmIChsb2Rhc2hfMS5pc1N0cmluZyh0aGlzLnRlbXBsYXRlU3RyaW5nKSkge1xuICAgICAgICAgICAgc3RyaW5nVG9QYXJzZSA9IGVudmlyb25tZW50XzEudGVtcGxhdGVFbnZpcm9ubWVudC5yZW5kZXJTdHJpbmcodGhpcy50ZW1wbGF0ZVN0cmluZywgdGVtcGxhdGVQYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsb2Rhc2hfMS5pc09iamVjdCh0aGlzLnRlbXBsYXRlU3RyaW5nKSkge1xuICAgICAgICAgICAgc3RyaW5nVG9QYXJzZSA9IHRoaXMudGVtcGxhdGVTdHJpbmcucmVuZGVyKHRlbXBsYXRlUGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyaW5nVG9QYXJzZTtcbiAgICB9XG4gICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMoX3JlcXVlc3RPclBhcmFtcykge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxufVxuQkRPUm91dGUuYXR0YWNoVG9TZXJ2ZXJzID0gWycqJ107XG5leHBvcnRzLkJET1JvdXRlID0gQkRPUm91dGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQVW05MWRHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMnhwWWk5Q1JFOVNiM1YwWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVVZCTEcxRFFVRTBRenRCUVVNMVF5eDNSRUZCTmtRN1FVRlROMFFzVFVGQmMwSXNVVUZCVVR0SlFVRTVRanRSUVhGQ1Z5eHZRa0ZCWlN4SFFVRlhMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRVZCUVVVc1EwRkJRenRSUVZGd1JTeFhRVUZOTEVkQlFXRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVd0Q2RFSXNiVUpCUVdNc1IwRkJjMElzWVVGQllTeERRVUZETzFGQlZXeEVMR0ZCUVZFc1IwRkJXU3hMUVVGTExFTkJRVU03U1VGdFJIaERMRU5CUVVNN1NVRjRRMkVzWTBGQll5eERRVUZETEdOQlFUaENPMUZCUTI1RUxFbEJRVWtzWVVGQllTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTjZRaXhKUVVGSkxHbENRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhGUVVGRk8xbEJReTlDTEdGQlFXRXNSMEZCUnl4cFEwRkJiVUlzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1JVRkJSU3hqUVVGakxFTkJRVU1zUTBGQlF6dFRRVU42Ump0UlFVTkVMRWxCUVVrc2FVSkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRVZCUVVVN1dVRkRMMElzWVVGQllTeEhRVUZqTEVsQlFVa3NRMEZCUXl4alFVRmxMRU5CUVVNc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETzFOQlF6RkZPMUZCUTBRc1QwRkJUeXhoUVVGaExFTkJRVU03U1VGRGVrSXNRMEZCUXp0SlFWZFRMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU1zWjBKQlFUQkRPMUZCUTNKRkxFOUJRVThzUlVGQlJTeERRVUZETzBsQlEyUXNRMEZCUXpzN1FVRTVSV0VzZDBKQlFXVXNSMEZCWVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJXbkJFTERSQ1FUUkhReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgTW9kaWZpY2F0aW9uXzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kaWZpY2F0aW9uXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY2xhc3MgQmluZGluZyB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSwgbW9kZSA9IFwiUmVhZFdyaXRlXCIpIHtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgIGNvbnN0IGJpbmRpbmdEZXNjcmlwdG9yID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLm9iamVjdCwgXCJiaW5kaW5nRGVzY3JpcHRvclwiKTtcbiAgICAgICAgbGV0IHByb3RvdHlwZSA9IHRoaXMub2JqZWN0O1xuICAgICAgICB3aGlsZSAoIWRlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgIHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpO1xuICAgICAgICAgICAgaWYgKCFwcm90b3R5cGUpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBpZiAocHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiQmFzZUNvbnN0cnVjdG9yXCIpXG4gICAgICAgICAgICAgICAgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSk7XG4gICAgICAgICAgICBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG90eXBlLCB0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVzY3JpcHRvciAmJiBiaW5kaW5nRGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yID09PSBiaW5kaW5nRGVzY3JpcHRvcikge1xuICAgICAgICAgICAgY29uc3QgbURhdGEgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMub2JqZWN0LCBcImJpbmRpbmdzXCIpO1xuICAgICAgICAgICAgY29uc3QgYmluZGluZ3MgPSBtRGF0YSA/IG1EYXRhLmdldCh0aGlzLnByb3BlcnR5KSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChiaW5kaW5ncylcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0b3IgPSBiaW5kaW5nc1swXS5kZXNjcmlwdG9yO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5kZXNjcmlwdG9yKVxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdG9yID0gZGVzY3JpcHRvcjtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gXCJXcml0ZU9ubHlcIilcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW9kaWZpY2F0aW9uXzEuTW9kaWZpY2F0aW9uKHVuZGVmaW5lZCk7XG4gICAgICAgIHJldHVybiB0aGlzLm9iamVjdFt0aGlzLnByb3BlcnR5XTtcbiAgICB9XG4gICAgcmVmbGVjdFRvSW5pdGlhdG9ycyhuZXdWYWwpIHtcbiAgICAgICAgaWYgKG5ld1ZhbCBpbnN0YW5jZW9mIE1vZGlmaWNhdGlvbl8xLk1vZGlmaWNhdGlvbilcbiAgICAgICAgICAgIG5ld1ZhbCA9IG5ld1ZhbC52YWx1ZU9mKCk7XG4gICAgICAgIGlmICh0aGlzLmluaXRpYXRvclt0aGlzLmluaXRpYXRvclByb3BlcnR5XSA9PT0gbmV3VmFsIHx8IHRoaXMubW9kZSA9PT0gXCJXcml0ZU9ubHlcIilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgbURhdGEgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMub2JqZWN0LCBcImJpbmRpbmdzXCIpO1xuICAgICAgICBpZiAobURhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJpbmRpbmdzID0gbURhdGEuZ2V0KHRoaXMucHJvcGVydHkpO1xuICAgICAgICAgICAgaWYgKGJpbmRpbmdzKVxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYmluZGluZyBvZiBiaW5kaW5ncylcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZy5pbml0aWF0b3JbYmluZGluZy5pbml0aWF0b3JQcm9wZXJ0eV0gPSBuZXdWYWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVmbGVjdFRvT2JqZWN0KG5ld1ZhbCkge1xuICAgICAgICBpZiAobmV3VmFsIGluc3RhbmNlb2YgTW9kaWZpY2F0aW9uXzEuTW9kaWZpY2F0aW9uKVxuICAgICAgICAgICAgbmV3VmFsID0gbmV3VmFsLnZhbHVlT2YoKTtcbiAgICAgICAgaWYgKHRoaXMub2JqZWN0W3RoaXMucHJvcGVydHldID09PSBuZXdWYWwgfHwgdGhpcy5tb2RlID09PSBcIlJlYWRPbmx5XCIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMub2JqZWN0W3RoaXMucHJvcGVydHldID0gbmV3VmFsO1xuICAgIH1cbiAgICBpbnN0YWxsKGluaXRpYXRvciwgcHJvcGVydHkpIHtcbiAgICAgICAgdGhpcy5pbml0aWF0b3IgPSBpbml0aWF0b3I7XG4gICAgICAgIHRoaXMuaW5pdGlhdG9yUHJvcGVydHkgPSBwcm9wZXJ0eS50b1N0cmluZygpO1xuICAgICAgICBpZiAoIVJlZmxlY3QuaGFzTWV0YWRhdGEoXCJpbml0aWF0b3JCaW5kaW5nXCIsIHRoaXMuaW5pdGlhdG9yKSkge1xuICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YSh0aGlzLmluaXRpYXRvciwgXCJpbml0aWF0b3JCaW5kaW5nXCIsIG5ldyBNYXAoKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5pdGlhdG9yTURhdGEgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCBcImluaXRpYXRvckJpbmRpbmdcIikgfHwgbmV3IE1hcCgpO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JCaW5kaW5nID0gaW5pdGlhdG9yTURhdGEuZ2V0KHRoaXMuaW5pdGlhdG9yUHJvcGVydHkpO1xuICAgICAgICBpZiAoaW5pdGlhdG9yQmluZGluZylcbiAgICAgICAgICAgIGluaXRpYXRvckJpbmRpbmcucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgICAgICBpbml0aWF0b3JNRGF0YS5zZXQodGhpcy5pbml0aWF0b3JQcm9wZXJ0eSwgdGhpcyk7XG4gICAgfVxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgY29uc3Qgb2JqZWN0VmFsdWUgPSB0aGlzLm9iamVjdFt0aGlzLnByb3BlcnR5XTtcbiAgICAgICAgY29uc3QgaW5pdGlhdG9yVmFsdWUgPSB0aGlzLmluaXRpYXRvclt0aGlzLmluaXRpYXRvclByb3BlcnR5XTtcbiAgICAgICAgY29uc3Qgb2JqZWN0TURhdGEgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMub2JqZWN0LCBcImJpbmRpbmdzXCIpO1xuICAgICAgICBjb25zdCBvYmplY3RCaW5kaW5ncyA9IG9iamVjdE1EYXRhID8gb2JqZWN0TURhdGEuZ2V0KHRoaXMucHJvcGVydHkpIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JNRGF0YSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5pbml0aWF0b3IsIFwiaW5pdGlhdG9yQmluZGluZ1wiKTtcbiAgICAgICAgY29uc3QgaW5pdGlhdG9yQmluZGluZyA9IGluaXRpYXRvck1EYXRhID8gaW5pdGlhdG9yTURhdGEuZ2V0KHRoaXMuaW5pdGlhdG9yUHJvcGVydHkpIDogdW5kZWZpbmVkO1xuICAgICAgICBpZiAob2JqZWN0QmluZGluZ3MpIHtcbiAgICAgICAgICAgIHV0aWxfMS5yZW1vdmVFbGVtZW50RnJvbUFycmF5KG9iamVjdEJpbmRpbmdzLCB0aGlzKTtcbiAgICAgICAgICAgIGlmICghb2JqZWN0QmluZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdE1EYXRhKVxuICAgICAgICAgICAgICAgICAgICBvYmplY3RNRGF0YS5kZWxldGUodGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlRGVzY3JpcHRvcih0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSwgb2JqZWN0VmFsdWUsIHRoaXMuZGVzY3JpcHRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluaXRpYXRvckJpbmRpbmcpIHtcbiAgICAgICAgICAgIGlmIChpbml0aWF0b3JNRGF0YSlcbiAgICAgICAgICAgICAgICBpbml0aWF0b3JNRGF0YS5kZWxldGUodGhpcy5pbml0aWF0b3JQcm9wZXJ0eSk7XG4gICAgICAgICAgICB0aGlzLnJlc3RvcmVEZXNjcmlwdG9yKHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5LCBpbml0aWF0b3JWYWx1ZSwgdGhpcy5pbml0aWF0b3JEZXNjcmlwdG9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBiaW5kKCkge1xuICAgICAgICBpZiAoIVJlZmxlY3QuaGFzTWV0YWRhdGEoXCJiaW5kaW5nc1wiLCB0aGlzLm9iamVjdCkpXG4gICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMub2JqZWN0LCBcImJpbmRpbmdzXCIsIG5ldyBNYXAoKSk7XG4gICAgICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLm9iamVjdCwgXCJiaW5kaW5nc1wiKTtcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdGhpcy5vYmplY3RbdGhpcy5wcm9wZXJ0eV07XG4gICAgICAgIGlmIChtRGF0YSkge1xuICAgICAgICAgICAgaWYgKCFtRGF0YS5oYXModGhpcy5wcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICBtRGF0YS5zZXQodGhpcy5wcm9wZXJ0eSwgW10pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpO1xuICAgICAgICAgICAgICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHksIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBtb2RlbEdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGF0LmRlc2NyaXB0b3IgJiYgdGhhdC5kZXNjcmlwdG9yLmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGF0LmRlc2NyaXB0b3IuZ2V0LmNhbGwodGhhdC5vYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhhdC5vYmplY3QsIHRoYXQucHJvcGVydHkpLnZhbHVlT2YoKSB8fCBpbml0aWFsVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gbW9kZWxTZXQobmV3VmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsID09PSB0aGF0Lm9iamVjdFt0aGF0LnByb3BlcnR5XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhhdC5kZXNjcmlwdG9yICYmIHRoYXQuZGVzY3JpcHRvci5zZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5kZXNjcmlwdG9yLnNldC5jYWxsKHRoYXQub2JqZWN0LCBuZXdWYWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5yZWZsZWN0VG9Jbml0aWF0b3JzKG5ld1ZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJpbmRpbmdEZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcy5vYmplY3QsIFwiYmluZGluZ0Rlc2NyaXB0b3JcIiwgYmluZGluZ0Rlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGVseURlZmluZWRCaW5kaW5ncyA9IG1EYXRhLmdldCh0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgICAgIGlmIChkZWZpbml0ZWx5RGVmaW5lZEJpbmRpbmdzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFscmVhZHlCb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW2luZGV4LCBiaW5kaW5nXSBvZiBkZWZpbml0ZWx5RGVmaW5lZEJpbmRpbmdzLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmluZGluZy5pbml0aWF0b3IgPT09IHRoaXMuaW5pdGlhdG9yICYmIGJpbmRpbmcuaW5pdGlhdG9yUHJvcGVydHkgPT09IHRoaXMuaW5pdGlhdG9yUHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRlbHlEZWZpbmVkQmluZGluZ3NbaW5kZXhdID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGFscmVhZHlCb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWFscmVhZHlCb3VuZClcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGVseURlZmluZWRCaW5kaW5ncy5wdXNoKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlc3RvcmVEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHksIHZhbHVlLCBkZXNjcmlwdG9yKSB7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eSk7XG4gICAgICAgIGlmIChkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBvYmplY3RbcHJvcGVydHkudG9TdHJpbmcoKV0gPSB2YWx1ZTtcbiAgICB9XG59XG5leHBvcnRzLkJpbmRpbmcgPSBCaW5kaW5nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUW1sdVpHbHVaeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2YkdsaUwwSnBibVJwYm1jdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN3d1EwRkJlVVE3UVVGRGVrUXNkMFJCUVhGRU8wRkJRM0pFTEd0RVFVRjFSanRCUVhkQ2RrWXNUVUZCWVN4UFFVRlBPMGxCTWtSb1FpeFpRVUZaTEUxQlFWTXNSVUZCUlN4UlFVRlhMRVZCUVVVc1QwRkJiMElzVjBGQlZ6dFJRVU12UkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dFJRVU55UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF6dFJRVU42UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVXRxUWl4SlFVRkpMRlZCUVZVc1IwRkJiVU1zVDBGQlR5eERRVUZETEhkQ1FVRjNRaXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRemxITEUxQlFVMHNhVUpCUVdsQ0xFZEJRVWNzYzBKQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNN1VVRkZlRVVzU1VGQlNTeFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVNMVFpeFBRVUZQTEVOQlFVTXNWVUZCVlN4RlFVRkZPMWxCUTJoQ0xGTkJRVk1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xbEJRemRETEVsQlFVa3NRMEZCUXl4VFFVRlRPMmRDUVVGRkxFMUJRVTA3V1VGRGRFSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUzBGQlN5eHBRa0ZCYVVJN1owSkJRVVVzVTBGQlV5eEhRVUZITEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03V1VGRGJrY3NWVUZCVlN4SFFVRkhMRTlCUVU4c1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFOQlF6TkZPMUZCUTBRc1NVRkJTU3hWUVVGVkxFbEJRVWtzYVVKQlFXbENMRWxCUVVrc1ZVRkJWU3hMUVVGTExHbENRVUZwUWl4RlFVRkZPMWxCUTNKRkxFMUJRVTBzUzBGQlN5eEhRVUZITEhOQ1FVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXp0WlFVTnVSQ3hOUVVGTkxGRkJRVkVzUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU03V1VGRE9VUXNTVUZCU1N4UlFVRlJPMmRDUVVGRkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGVkJRVlVzUTBGQlF6dFRRVU14UkR0UlFVTkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlZUdFpRVUZGTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWRCUVVjc1ZVRkJWU3hEUVVGRE8wbEJRM1pFTEVOQlFVTTdTVUZSVFN4UFFVRlBPMUZCUTFZc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeExRVUZMTEZkQlFWYzdXVUZCUlN4UFFVRlBMRWxCUVVrc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFYbENMRU5CUVVNN1VVRkRNVVlzVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEpRVU4wUXl4RFFVRkRPMGxCVDAwc2JVSkJRVzFDTEVOQlFVTXNUVUZCV1R0UlFVTnVReXhKUVVGSkxFMUJRVTBzV1VGQldTd3lRa0ZCV1R0WlFVRkZMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdVVUZET1VRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eExRVUZMTEUxQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hMUVVGTExGZEJRVmM3V1VGQlJTeFBRVUZQTzFGQlF6TkdMRTFCUVUwc1MwRkJTeXhIUVVGSExITkNRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVU51UkN4SlFVRkpMRXRCUVVzc1JVRkJSVHRaUVVOUUxFMUJRVTBzVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFsQlF6RkRMRWxCUVVrc1VVRkJVVHRuUWtGQlJTeExRVUZMTEUxQlFVMHNUMEZCVHl4SlFVRkpMRkZCUVZFN2IwSkJRVVVzVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNN1UwRkRka2M3U1VGRFRDeERRVUZETzBsQlVVMHNaVUZCWlN4RFFVRkRMRTFCUVZrN1VVRkRMMElzU1VGQlNTeE5RVUZOTEZsQlFWa3NNa0pCUVZrN1dVRkJSU3hOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUXpsRUxFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzVFVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRXRCUVVzc1ZVRkJWVHRaUVVGRkxFOUJRVTg3VVVGRE9VVXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRPMGxCUTNoRExFTkJRVU03U1VGVFRTeFBRVUZQTEVOQlFUQkVMRk5CUVZrc1JVRkJSU3hSUVVGWE8xRkJRemRHTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1UwRkJVeXhEUVVGRE8xRkJRek5DTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUjBGQlJ5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkROME1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRk8xbEJRekZFTEhsQ1FVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeHJRa0ZCYTBJc1JVRkJSU3hKUVVGSkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEYWtVN1VVRkRSQ3hOUVVGTkxHTkJRV01zUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzYTBKQlFXdENMRU5CUVVNc1NVRkJTU3hKUVVGSkxFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEzQkdMRTFCUVUwc1owSkJRV2RDTEVkQlFVY3NZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1EwRkJRenRSUVVOd1JTeEpRVUZKTEdkQ1FVRm5RanRaUVVGRkxHZENRVUZuUWl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8xRkJRMmhFTEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVOYUxHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUTNKRUxFTkJRVU03U1VGUFRTeE5RVUZOTzFGQlJWUXNUVUZCVFN4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkRMME1zVFVGQlRTeGpRVUZqTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1EwRkJRenRSUVVjNVJDeE5RVUZOTEZkQlFWY3NSMEZCUnl4elFrRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRla1FzVFVGQlRTeGpRVUZqTEVkQlFVY3NWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETzFGQlEyaEdMRTFCUVUwc1kwRkJZeXhIUVVGSExITkNRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMUZCUTNaRkxFMUJRVTBzWjBKQlFXZENMRWRCUVVjc1kwRkJZeXhEUVVGRExFTkJRVU1zUTBGQlF5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU03VVVGRmFrY3NTVUZCU1N4alFVRmpMRVZCUVVVN1dVRkRhRUlzTmtKQlFYTkNMRU5CUVVNc1kwRkJZeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFsQlF6ZERMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zVFVGQlRTeEZRVUZGTzJkQ1FVTjRRaXhKUVVGSkxGZEJRVmM3YjBKQlFVVXNWMEZCVnl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdaMEpCUTI1RUxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1YwRkJWeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0aFFVTndSanRUUVVOS08xRkJSVVFzU1VGQlNTeG5Ra0ZCWjBJc1JVRkJSVHRaUVVOc1FpeEpRVUZKTEdOQlFXTTdaMEpCUVVVc1kwRkJZeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF6dFpRVU5zUlN4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1kwRkJZeXhGUVVGRkxFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRE8xTkJRelZITzBsQlEwd3NRMEZCUXp0SlFWTlBMRWxCUVVrN1VVRkZVaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4VlFVRlZMRVZCUVVVc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dFpRVUZGTEhsQ1FVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeFZRVUZWTEVWQlFVVXNTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRM1JITEUxQlFVMHNTMEZCU3l4SFFVRkhMSE5DUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVOdVJDeE5RVUZOTEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVVm9SQ3hKUVVGSkxFdEJRVXNzUlVGQlJUdFpRVVZRTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlR0blFrRkRNMElzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzJkQ1FVTTNRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdaMEpCUTJ4Q0xFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdaMEpCUTI1RUxFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTzI5Q1FVTXZReXhIUVVGSExFVkJRVVVzVTBGQlV5eFJRVUZSTzNkQ1FVZHNRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVsQlFVa3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFVkJRVVU3TkVKQlEzaERMRTlCUVU4c1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dDVRa0ZEYUVRN096UkNRVUZOTEU5QlFVOHNPRUpCUVcxQ0xFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NXVUZCV1N4RFFVRkRPMjlDUVVNMVJpeERRVUZETzI5Q1FVTkVMRWRCUVVjc1JVRkJSU3hUUVVGVExGRkJRVkVzUTBGQlF5eE5RVUZaTzNkQ1FVTXZRaXhKUVVGSkxFMUJRVTBzUzBGQlN5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU03TkVKQlFVVXNUMEZCVHp0M1FrRkhiRVFzU1VGQlNTeEpRVUZKTEVOQlFVTXNWVUZCVlN4SlFVRkpMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ6czBRa0ZCUlN4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dDNRa0ZGTVVZc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8yOUNRVU55UXl4RFFVRkRPMjlDUVVORUxGbEJRVmtzUlVGQlJTeEpRVUZKTzI5Q1FVTnNRaXhWUVVGVkxFVkJRVVVzU1VGQlNUdHBRa0ZEYmtJc1EwRkJReXhEUVVGRE8yZENRVU5JTEUxQlFVMHNhVUpCUVdsQ0xFZEJRVWNzVDBGQlR5eERRVUZETEhkQ1FVRjNRaXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8yZENRVU4yUml4NVFrRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNiVUpCUVcxQ0xFVkJRVVVzYVVKQlFXbENMRU5CUVVNc1EwRkJRenRoUVVOMlJUdFpRVVZFTEUxQlFVMHNlVUpCUVhsQ0xFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03V1VGRE0wUXNTVUZCU1N4NVFrRkJlVUlzUlVGQlJUdG5Ra0ZETTBJc1NVRkJTU3haUVVGWkxFZEJRVWNzUzBGQlN5eERRVUZETzJkQ1FVTjZRaXhMUVVGTExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RFFVRkRMRWxCUVVrc2VVSkJRWGxDTEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVN2IwSkJRMmhGTEVsQlFVa3NUMEZCVHl4RFFVRkRMRk5CUVZNc1MwRkJTeXhKUVVGSkxFTkJRVU1zVTBGQlV5eEpRVUZKTEU5QlFVOHNRMEZCUXl4cFFrRkJhVUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVU3ZDBKQlF6bEdMSGxDUVVGNVFpeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJRenQzUWtGRGVFTXNXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJRenQzUWtGRGNFSXNUVUZCVFR0eFFrRkRWRHRwUWtGRFNqdG5Ra0ZGUkN4SlFVRkpMRU5CUVVNc1dVRkJXVHR2UWtGQlJTeDVRa0ZCZVVJc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdZVUZETTBRN1UwRkRTanRKUVVOTUxFTkJRVU03U1VGWlR5eHBRa0ZCYVVJc1EwRkJReXhOUVVGelFpeEZRVUZGTEZGQlFXMUNMRVZCUVVVc1MwRkJWU3hGUVVGRkxGVkJRWEZDTzFGQlEzQkhMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zVFVGQlRTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUTNwRExFbEJRVWtzVlVGQlZTeEZRVUZGTzFsQlExb3NUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXp0VFFVTTVSVHRSUVVORUxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03U1VGRGVFTXNRMEZCUXp0RFFVTktPMEZCZUZCRUxEQkNRWGRRUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgTW9kaWZpY2F0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgdHlwZSA9IFwiZGVsZXRlXCIpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydHMuTW9kaWZpY2F0aW9uID0gTW9kaWZpY2F0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVFc5a2FXWnBZMkYwYVc5dUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXNhV0l2VFc5a2FXWnBZMkYwYVc5dUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCVVVFc1RVRkJZU3haUVVGWk8wbEJiVUp5UWl4WlFVRlpMRXRCUVZjc1JVRkJSU3hQUVVGeFFpeFJRVUZSTzFGQlEyeEVMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlEyNUNMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVTBzU1VGQlNTeERRVUZETzBsQlEzaENMRU5CUVVNN1NVRlJUU3hQUVVGUE8xRkJRMVlzVDBGQlR5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTNSQ0xFTkJRVU03U1VGUlRTeFJRVUZSTEVOQlFVTXNTMEZCVlR0UlFVTjBRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVTjJRaXhEUVVGRE8wTkJRMG83UVVFelEwUXNiME5CTWtOREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IE1vZGlmaWNhdGlvbl8xID0gcmVxdWlyZShcIn5iZG8vbGliL01vZGlmaWNhdGlvblwiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IGVudmlyb25tZW50XzEgPSByZXF1aXJlKFwifmJkby91dGlscy9lbnZpcm9ubWVudFwiKTtcbmNsYXNzIFByb3BlcnR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5LCBwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwYXJhbXMpO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmRvU2V0VmFsdWUodmFsdWUsIHRydWUpO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSB0aGlzLnByb3BlcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICh0aGlzLnNhdmVJbkxvY2FsU3RvcmFnZSAmJiBcImdldE5hbWVzcGFjZWRTdG9yYWdlXCIgaW4gdGhpcy5vYmplY3QpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5vYmplY3QuZ2V0TmFtZXNwYWNlZFN0b3JhZ2Uoc3RyaW5nS2V5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgJiYgdGhpcy5zdG9yZVRlbXBvcmFyeSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZXhwaXJlcyAmJiB0aGlzLmV4cGlyZXMgPCBEYXRlLm5vdygpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLm9iamVjdCwgXCJkZWZhdWx0U2V0dGluZ3NcIik7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkZWZhdWx0U2V0dGluZ3MgJiYgIXRoaXMubnVsbGFibGUgPyBkZWZhdWx0U2V0dGluZ3Nbc3RyaW5nS2V5XSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBkb1NldFZhbHVlKHZhbHVlLCBtb2RpZnlWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZU9mKCkgPT09IHZhbHVlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgdmFsdWVUb1Bhc3MgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kaWZpY2F0aW9uXzEuTW9kaWZpY2F0aW9uKVxuICAgICAgICAgICAgdmFsdWVUb1Bhc3MgPSB2YWx1ZS52YWx1ZU9mKCk7XG4gICAgICAgIGlmIChtb2RpZnlWYWx1ZSlcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVRvUGFzcztcbiAgICAgICAgdGhpcy5hZGRFeHBpcmF0aW9uKHZhbHVlVG9QYXNzKTtcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkVXBkYXRlTnNTdG9yYWdlKCkgJiYgXCJzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZVwiIGluIHRoaXMub2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLm9iamVjdC5zZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSh0aGlzLnByb3BlcnR5LnRvU3RyaW5nKCksIHZhbHVlVG9QYXNzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRFeHBpcmF0aW9uKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8ICF0aGlzLnN0b3JlVGVtcG9yYXJ5KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSB0aGlzLnByb3BlcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuZXhwaXJlcyA9IERhdGUubm93KCkgKyB0aGlzLnN0b3JlVGVtcG9yYXJ5O1xuICAgICAgICBpZiAodGhpcy5leHBpcmF0aW9uVGltZW91dClcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmV4cGlyYXRpb25UaW1lb3V0KTtcbiAgICAgICAgdGhpcy5leHBpcmF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLm9iamVjdCwgXCJkZWZhdWx0U2V0dGluZ3NcIik7XG4gICAgICAgICAgICBjb25zdCBkZWxWYWx1ZSA9IGRlZmF1bHRTZXR0aW5ncyAmJiAhdGhpcy5udWxsYWJsZSA/IGRlZmF1bHRTZXR0aW5nc1tzdHJpbmdLZXldIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5vYmplY3Rbc3RyaW5nS2V5XSA9IG5ldyBNb2RpZmljYXRpb25fMS5Nb2RpZmljYXRpb24oZGVsVmFsdWUpO1xuICAgICAgICB9LCB0aGlzLnN0b3JlVGVtcG9yYXJ5KTtcbiAgICB9XG4gICAgc2hvdWxkVXBkYXRlTnNTdG9yYWdlKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2F2ZUluTG9jYWxTdG9yYWdlIHx8ICFlbnZpcm9ubWVudF8xLmlzQnJvd3NlcigpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSB0aGlzLnByb3BlcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGtleVNob3VsZEJlVXBkYXRlZCA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5vYmplY3QsIFwia2V5U2hvdWxkQmVVcGRhdGVkXCIpIHx8IHt9O1xuICAgICAgICBpZiAoa2V5U2hvdWxkQmVVcGRhdGVkW3N0cmluZ0tleV0pXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKFwiZ2V0TmFtZXNwYWNlZFN0b3JhZ2VcIiBpbiB0aGlzLm9iamVjdCAmJlxuICAgICAgICAgICAgdGhpcy5vYmplY3QuZ2V0TmFtZXNwYWNlZFN0b3JhZ2Uoc3RyaW5nS2V5KSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMub2JqZWN0LCBcImtleVNob3VsZEJlVXBkYXRlZFwiLCBPYmplY3QuYXNzaWduKGtleVNob3VsZEJlVXBkYXRlZCwgeyBbc3RyaW5nS2V5XTogdHJ1ZSB9KSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQm9vbGVhbihtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMub2JqZWN0LCBcImNvbnN0cnVjdGlvbkNvbXBsZXRlXCIpKTtcbiAgICB9XG59XG5leHBvcnRzLlByb3BlcnR5ID0gUHJvcGVydHk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lVSEp2Y0dWeWRIa3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMnhwWWk5UWNtOXdaWEowZVM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVU5CTEhkRVFVRnhSRHRCUVVOeVJDeHJSRUZCYTBVN1FVRkRiRVVzZDBSQlFXMUVPMEZCWjBSdVJDeE5RVUZoTEZGQlFWRTdTVUZ4UldwQ0xGbEJRVmtzVFVGQlV5eEZRVUZGTEZGQlFWY3NSVUZCUlN4TlFVRjNRanRSUVVONFJDeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRSUVVOeVFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJRenRSUVVONlFpeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU5vUXl4RFFVRkRPMGxCVTAwc1VVRkJVU3hEUVVGRExFdEJRVmM3VVVGRGRrSXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEYWtNc1EwRkJRenRKUVZWTkxFOUJRVTg3VVVGRFZpeE5RVUZOTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlJUTkRMRWxCUVVrc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZGZGtJc1NVRkJTU3hKUVVGSkxFTkJRVU1zYTBKQlFXdENMRWxCUVVrc2MwSkJRWE5DTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSVHRaUVVOc1JTeExRVUZMTEVkQlFXOUNMRWxCUVVrc1EwRkJReXhOUVVGUExFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VTBGRGVrVTdVVUZGUkN4SlFVRkpMRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zWTBGQll5eEZRVUZGTzFsQlF6bENMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJUdG5Ra0ZETTBNc1RVRkJUU3hsUVVGbExFZEJRVWNzYzBKQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxHbENRVUZwUWl4RFFVRkRMRU5CUVVNN1owSkJRM0JGTEV0QlFVc3NSMEZCUnl4bFFVRmxMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCYTBJc1pVRkJaMElzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRE8yRkJRM2hIT3p0blFrRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0VFFVTTNRanRSUVVORUxFOUJRVThzUzBGQlN5eERRVUZETzBsQlEycENMRU5CUVVNN1NVRlpVeXhWUVVGVkxFTkJRVU1zUzBGQlZ5eEZRVUZGTEZkQlFXOUNPMUZCUTJ4RUxFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4TFFVRkxMRXRCUVVzN1dVRkJSU3hQUVVGUE8xRkJRM0pETEVsQlFVa3NWMEZCVnl4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVONFFpeEpRVUZKTEV0QlFVc3NXVUZCV1N3eVFrRkJXVHRaUVVGRkxGZEJRVmNzUjBGQlJ5eExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1VVRkRha1VzU1VGQlNTeFhRVUZYTzFsQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhYUVVGWExFTkJRVU03VVVGRE1VTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFJRVU5vUXl4SlFVRkpMRWxCUVVrc1EwRkJReXh4UWtGQmNVSXNSVUZCUlN4SlFVRkpMRFJDUVVFMFFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkROVVFzU1VGQlNTeERRVUZETEUxQlFVOHNRMEZCUXl3d1FrRkJNRUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxGZEJRVmNzUTBGQlF5eERRVUZETzFOQlEyNUhPMGxCUTB3c1EwRkJRenRKUVZkVExHRkJRV0VzUTBGQlF5eExRVUZYTzFGQlF5OUNMRWxCUVVrc1MwRkJTeXhMUVVGTExGTkJRVk1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpPMWxCUVVVc1QwRkJUenRSUVVONFJDeE5RVUZOTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlJUTkRMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU03VVVGRmFFUXNTVUZCU1N4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTzFsQlFVVXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMUZCUTJwRkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1IwRkJSeXhWUVVGVkxFTkJRVU1zUjBGQlJ5eEZRVUZGTzFsQlEzSkRMRTFCUVUwc1pVRkJaU3hIUVVGSExITkNRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hwUWtGQmFVSXNRMEZCYlVJc1EwRkJRenRaUVVOMFJpeE5RVUZOTEZGQlFWRXNSMEZCUnl4bFFVRmxMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4bFFVRmxMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXp0WlFVTXpSU3hKUVVGSkxFTkJRVU1zVFVGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRWxCUVVrc01rSkJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTXhSU3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMGxCUXpWQ0xFTkJRVU03U1VGVFV5eHhRa0ZCY1VJN1VVRkRNMElzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4clFrRkJhMElzU1VGQlNTeERRVUZETEhWQ1FVRlRMRVZCUVVVN1dVRkJSU3hQUVVGUExFdEJRVXNzUTBGQlF6dFJRVU16UkN4TlFVRk5MRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUXpORExFMUJRVTBzYTBKQlFXdENMRWRCUVVjc2MwSkJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRzlDUVVGdlFpeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUTJoR0xFbEJRVWtzYTBKQlFXdENMRU5CUVVNc1UwRkJVeXhEUVVGRE8xbEJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTTdVVUZETDBNc1NVRkJTU3h6UWtGQmMwSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUVHRaUVVOd1FpeEpRVUZKTEVOQlFVTXNUVUZCVHl4RFFVRkRMRzlDUVVGdlFpeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1JVRkJSVHRaUVVNM1JTeDVRa0ZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzYjBKQlFXOUNMRVZCUVVVc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eHJRa0ZCYTBJc1JVRkJSU3hGUVVGRkxFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRelZITEU5QlFVOHNTVUZCU1N4RFFVRkRPMU5CUTJZN1VVRkRSQ3hQUVVGUExFOUJRVThzUTBGQlF5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzYzBKQlFYTkNMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM0pGTEVOQlFVTTdRMEZEU2p0QlFTOUxSQ3cwUWtFclMwTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgTW9kaWZpY2F0aW9uXzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kaWZpY2F0aW9uXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IG9uX2NoYW5nZV8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm9uLWNoYW5nZVwiKSk7XG5jb25zdCBsb2Rhc2hfMSA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5jb25zdCBjbG9uZV9kZWVwXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiY2xvbmUtZGVlcFwiKSk7XG5jbGFzcyBXYXRjaGVkIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5LCBwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5pc1NoYWxsb3cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgICAgIGNvbnN0IGNhcGl0YWxpemVkUHJvcCA9IHV0aWxfMS51Y0ZpcnN0KHByb3BlcnR5KTtcbiAgICAgICAgY29uc3Qgb25Jbml0RnVuYyA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfUluaXRgO1xuICAgICAgICBjb25zdCBvbkNoYW5nZUZ1bmMgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1DaGFuZ2VgO1xuICAgICAgICBjb25zdCBvbkFkZEZ1bmMgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1BZGRgO1xuICAgICAgICBjb25zdCBvblJlbW92ZUZ1bmMgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1SZW1vdmVgO1xuICAgICAgICB0aGlzLm9uSW5pdCA9IHBhcmFtcyA/IHBhcmFtcy5vbkluaXQgfHwgb25Jbml0RnVuYyA6IG9uSW5pdEZ1bmM7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBwYXJhbXMgPyBwYXJhbXMub25DaGFuZ2UgfHwgb25DaGFuZ2VGdW5jIDogb25DaGFuZ2VGdW5jO1xuICAgICAgICB0aGlzLm9uQWRkID0gcGFyYW1zID8gcGFyYW1zLm9uQWRkIHx8IG9uQWRkRnVuYyA6IG9uQWRkRnVuYztcbiAgICAgICAgdGhpcy5vblJlbW92ZSA9IHBhcmFtcyA/IHBhcmFtcy5vblJlbW92ZSB8fCBvblJlbW92ZUZ1bmMgOiBvblJlbW92ZUZ1bmM7XG4gICAgICAgIHRoaXMuaXNTaGFsbG93ID0gcGFyYW1zID8gQm9vbGVhbihwYXJhbXMuaXNTaGFsbG93KSA6IGZhbHNlO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBsZXQgb2xkVmFsID0gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgIGlmIChvbGRWYWwgPT09IHZhbHVlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgdmFsdWVUb1Bhc3MgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kaWZpY2F0aW9uXzEuTW9kaWZpY2F0aW9uKVxuICAgICAgICAgICAgdmFsdWVUb1Bhc3MgPSB2YWx1ZS52YWx1ZU9mKCk7XG4gICAgICAgIG9sZFZhbCA9IGNsb25lX2RlZXBfMS5kZWZhdWx0KG9sZFZhbCk7XG4gICAgICAgIHZhbHVlVG9QYXNzID0gdGhpcy5nZXRBcnJheU9iamVjdFByb3h5KHZhbHVlVG9QYXNzKTtcbiAgICAgICAgaWYgKHRoaXMuc3ViT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnN1Yk9iamVjdC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlVG9QYXNzO1xuICAgICAgICBpZiAodGhpcy5vbkNoYW5nZSBpbiB0aGlzLm9iamVjdCAmJiB0aGlzLmlzSW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICB0aGlzLm9iamVjdFt0aGlzLm9uQ2hhbmdlXShvbGRWYWwpO1xuICAgICAgICBpZiAodGhpcy5vbkluaXQgaW4gdGhpcy5vYmplY3QgJiYgIXRoaXMuaXNJbml0aWFsaXplZClcbiAgICAgICAgICAgIHRoaXMub2JqZWN0W3RoaXMub25Jbml0XSh2YWx1ZVRvUGFzcyk7XG4gICAgICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIGlmICh0aGlzLnN1Yk9iamVjdClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1Yk9iamVjdC52YWx1ZU9mKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICBzZXRTdWJPYmplY3Qoc3ViT2JqZWN0KSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IG9uX2NoYW5nZV8xLmRlZmF1bHQudW5zdWJzY3JpYmUodGhpcy52YWx1ZU9mKCkpO1xuICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0QXJyYXlPYmplY3RQcm94eSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuc3ViT2JqZWN0ID0gc3ViT2JqZWN0O1xuICAgICAgICB0aGlzLnN1Yk9iamVjdC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICAgIGdldEFycmF5T2JqZWN0UHJveHkodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgfHwgbG9kYXNoXzEuaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gb25fY2hhbmdlXzEuZGVmYXVsdCh2YWx1ZSwgKHBhdGgsIGNoYW5nZWRWYWx1ZSwgcHJldmlvdXNWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0tleXMgPSBPYmplY3Qua2V5cyhjaGFuZ2VkVmFsdWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZEtleXMgPSBPYmplY3Qua2V5cyhwcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdMZW4gPSBuZXdLZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRMZW4gPSBvbGRLZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLmNhc2VEZXRlY3RFeGVjKHtcbiAgICAgICAgICAgICAgICAgICAgbGVuMTogbmV3TGVuLFxuICAgICAgICAgICAgICAgICAgICBsZW4yOiBvbGRMZW4sXG4gICAgICAgICAgICAgICAgICAgIGZ1bmM6IHRoaXMub25BZGQsXG4gICAgICAgICAgICAgICAgICAgIGtleXMxOiBuZXdLZXlzLFxuICAgICAgICAgICAgICAgICAgICBrZXlzMjogb2xkS2V5cyxcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXNlRGV0ZWN0RXhlYyh7XG4gICAgICAgICAgICAgICAgICAgIGxlbjE6IG9sZExlbixcbiAgICAgICAgICAgICAgICAgICAgbGVuMjogbmV3TGVuLFxuICAgICAgICAgICAgICAgICAgICBmdW5jOiB0aGlzLm9uUmVtb3ZlLFxuICAgICAgICAgICAgICAgICAgICBrZXlzMTogb2xkS2V5cyxcbiAgICAgICAgICAgICAgICAgICAga2V5czI6IG5ld0tleXMsXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChuZXdMZW4gPT09IG9sZExlbiAmJiB0aGlzLm9uQ2hhbmdlIGluIHRoaXMgJiYgdGhpcy5pc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0W3RoaXMub25DaGFuZ2VdKGNoYW5nZWRWYWx1ZSwgcGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgeyBpc1NoYWxsb3c6IHRoaXMuaXNTaGFsbG93IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY2FzZURldGVjdEV4ZWMoY2RQYXJhbXMpIHtcbiAgICAgICAgaWYgKGNkUGFyYW1zLmxlbjEgPiBjZFBhcmFtcy5sZW4yICYmIGNkUGFyYW1zLmZ1bmMgaW4gdGhpcy5vYmplY3QpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbW9kaWZpZWQgb2YgY2RQYXJhbXMua2V5czEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNkUGFyYW1zLmtleXMyLmluY2x1ZGVzKG1vZGlmaWVkKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iamVjdFtjZFBhcmFtcy5mdW5jXSgoY2RQYXJhbXMuY2hhbmdlZFZhbHVlKVttb2RpZmllZF0sIGNkUGFyYW1zLnBhdGgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLldhdGNoZWQgPSBXYXRjaGVkO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVjJGMFkyaGxaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2YkdsaUwxZGhkR05vWldRdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUTBFc2QwUkJRWEZFTzBGQlEzSkVMREJEUVVFd1F6dEJRVU14UXl4clJVRkJhVU03UVVGRGFrTXNiVU5CUVd0RE8wRkJRMnhETEc5RlFVRnRRenRCUVN0SWJrTXNUVUZCWVN4UFFVRlBPMGxCTUVab1FpeFpRVUZaTEUxQlFWTXNSVUZCUlN4UlFVRlhMRVZCUVVVc1RVRkJkVUk3VVVGeVFuQkVMR05CUVZNc1IwRkJXU3hMUVVGTExFTkJRVU03VVVGdFFuaENMR3RDUVVGaExFZEJRVmtzUzBGQlN5eERRVUZETzFGQlIzSkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETzFGQlEzSkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETzFGQlJYcENMRTFCUVUwc1pVRkJaU3hIUVVGSExHTkJRVThzUTBGQlF5eFJRVUZyUWl4RFFVRkRMRU5CUVVNN1VVRkZjRVFzVFVGQlRTeFZRVUZWTEVkQlFVY3NTMEZCU3l4bFFVRmxMRTFCUVUwc1EwRkJRenRSUVVNNVF5eE5RVUZOTEZsQlFWa3NSMEZCUnl4TFFVRkxMR1ZCUVdVc1VVRkJVU3hEUVVGRE8xRkJRMnhFTEUxQlFVMHNVMEZCVXl4SFFVRkhMRXRCUVVzc1pVRkJaU3hMUVVGTExFTkJRVU03VVVGRE5VTXNUVUZCVFN4WlFVRlpMRWRCUVVjc1MwRkJTeXhsUVVGbExGRkJRVkVzUTBGQlF6dFJRVVZzUkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1NVRkJTU3hWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXp0UlFVTm9SU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzU1VGQlNTeFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmxCUVZrc1EwRkJRenRSUVVONFJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF6dFJRVU0xUkN4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1NVRkJTU3haUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEZsQlFWa3NRMEZCUXp0UlFVVjRSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRE8wbEJRMmhGTEVOQlFVTTdTVUZWVFN4UlFVRlJMRU5CUVVNc1MwRkJWenRSUVVOMlFpeEpRVUZKTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGRE5VSXNTVUZCU1N4TlFVRk5MRXRCUVVzc1MwRkJTenRaUVVGRkxFOUJRVTg3VVVGRk4wSXNTVUZCU1N4WFFVRlhMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRM2hDTEVsQlFVa3NTMEZCU3l4WlFVRlpMREpDUVVGWk8xbEJRVVVzVjBGQlZ5eEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRSUVVkcVJTeE5RVUZOTEVkQlFVY3NiMEpCUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVWN6UWl4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xRkJSWEJFTEVsQlFVa3NTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSVHRaUVVOb1FpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFRRVU5zUXpzN1dVRkJUU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEZkQlFWY3NRMEZCUXp0UlFVZG9ReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1NVRkJTU3hKUVVGSkxFTkJRVU1zWVVGQllUdFpRVUZ0UWl4SlFVRkpMRU5CUVVNc1RVRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVVM1J5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhPMWxCUVcxQ0xFbEJRVWtzUTBGQlF5eE5RVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFGQlF5OUhMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETzBsQlF6bENMRU5CUVVNN1NVRlZUU3hQUVVGUE8xRkJRMVlzU1VGQlNTeEpRVUZKTEVOQlFVTXNVMEZCVXp0WlFVRkZMRTlCUVU4c1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0UlFVTndSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdTVUZEZEVJc1EwRkJRenRKUVZWTkxGbEJRVmtzUTBGQlF5eFRRVUZ0UWp0UlFVTnVReXhKUVVGSkxFdEJRVXNzUjBGQlJ5eHRRa0ZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVVnFSQ3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlEzaERMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzVTBGQlV5eERRVUZETzFGQlF6TkNMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTI1RExFTkJRVU03U1VGWFR5eHRRa0ZCYlVJc1EwRkJReXhMUVVGWE8xRkJRMjVETEVsQlFVa3NTMEZCU3l4WlFVRlpMRXRCUVVzc1NVRkJTU3hwUWtGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUXpORExFOUJRVThzYlVKQlFWRXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzV1VGQldTeEZRVUZGTEdGQlFXRXNSVUZCUlN4RlFVRkZPMmRDUVVONlJDeE5RVUZOTEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGVExGbEJRVmtzUTBGQlF5eERRVUZETzJkQ1FVTnNSQ3hOUVVGTkxFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRlRMR0ZCUVdFc1EwRkJReXhEUVVGRE8yZENRVU51UkN4TlFVRk5MRTFCUVUwc1IwRkJSeXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETzJkQ1FVTTVRaXhOUVVGTkxFMUJRVTBzUjBGQlJ5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRPMmRDUVVjNVFpeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRPMjlDUVVOb1FpeEpRVUZKTEVWQlFVVXNUVUZCVFR0dlFrRkRXaXhKUVVGSkxFVkJRVVVzVFVGQlRUdHZRa0ZEV2l4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXM3YjBKQlEyaENMRXRCUVVzc1JVRkJSU3hQUVVGUE8yOUNRVU5rTEV0QlFVc3NSVUZCUlN4UFFVRlBPMjlDUVVOa0xGbEJRVms3YjBKQlExb3NTVUZCU1R0cFFrRkRVQ3hEUVVGRExFTkJRVU03WjBKQlJVZ3NTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJRenR2UWtGRGFFSXNTVUZCU1N4RlFVRkZMRTFCUVUwN2IwSkJRMW9zU1VGQlNTeEZRVUZGTEUxQlFVMDdiMEpCUTFvc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTzI5Q1FVTnVRaXhMUVVGTExFVkJRVVVzVDBGQlR6dHZRa0ZEWkN4TFFVRkxMRVZCUVVVc1QwRkJUenR2UWtGRFpDeFpRVUZaTzI5Q1FVTmFMRWxCUVVrN2FVSkJRMUFzUTBGQlF5eERRVUZETzJkQ1FVVklMRWxCUVVrc1RVRkJUU3hMUVVGTExFMUJRVTBzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4SlFVRkpMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zWVVGQllTeEZRVUZGTzI5Q1FVTnFSQ3hKUVVGSkxFTkJRVU1zVFVGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhaUVVGWkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdhVUpCUTNCRk8xbEJRMHdzUTBGQlF5eEZRVUZGTEVWQlFVVXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzSkRPMUZCUTBRc1QwRkJUeXhMUVVGTExFTkJRVU03U1VGRGFrSXNRMEZCUXp0SlFWTlBMR05CUVdNc1EwRkJReXhSUVVFeVFqdFJRVU01UXl4SlFVRkpMRkZCUVZFc1EwRkJReXhKUVVGSkxFZEJRVWNzVVVGQlVTeERRVUZETEVsQlFVa3NTVUZCU1N4UlFVRlJMRU5CUVVNc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVTdXVUZETDBRc1MwRkJTeXhOUVVGTkxGRkJRVkVzU1VGQlNTeFJRVUZSTEVOQlFVTXNTMEZCU3l4RlFVRkZPMmRDUVVOdVF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVTdiMEpCUXpsQ0xFbEJRVWtzUTBGQlF5eE5RVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRk5MRkZCUVZFc1EwRkJReXhGUVVGRkxGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0dlFrRkRla1lzVFVGQlRUdHBRa0ZEVkR0aFFVTktPMU5CUTBvN1NVRkRUQ3hEUVVGRE8wTkJRMG83UVVGNlQwUXNNRUpCZVU5REluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuZnVuY3Rpb24gQkRPVGVzdEZhY3RvcnkoY3Rvcikge1xuICAgIHZhciBfYTtcbiAgICBsZXQgQkRPVGVzdCA9IGNsYXNzIEJET1Rlc3QgZXh0ZW5kcyBjdG9yIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9ICd0ZXN0JztcbiAgICAgICAgICAgIHRoaXMudGVzdE9iaiA9IHt9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKHsgc3RvcmVUZW1wb3Jhcnk6IDUwMDAgfSksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBCRE9UZXN0LnByb3RvdHlwZSwgXCJ0aXRsZVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoeyBudWxsYWJsZTogdHJ1ZSB9KSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIEJET1Rlc3QucHJvdG90eXBlLCBcImRlc2NyaXB0aW9uXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KHsgbnVsbGFibGU6IHRydWUgfSksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIHR5cGVvZiAoX2EgPSB0eXBlb2YgT2JqZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIE9iamVjdCkgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0KVxuICAgIF0sIEJET1Rlc3QucHJvdG90eXBlLCBcInRlc3RPYmpcIiwgdm9pZCAwKTtcbiAgICBCRE9UZXN0ID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3Rvcih7IGlzQWJzdHJhY3Q6IHRydWUsIGNvbGxlY3Rpb25OYW1lOiBcIkJET1Rlc3RcIiB9KVxuICAgIF0sIEJET1Rlc3QpO1xuICAgIHJldHVybiBCRE9UZXN0O1xufVxuZXhwb3J0cy5CRE9UZXN0RmFjdG9yeSA9IEJET1Rlc3RGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFZHVnpkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2Ylc5a1pXeHpMMEpFVDFSbGMzUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNjMFJCUVRaRk8wRkJWVGRGTEZOQlFXZENMR05CUVdNc1EwRkJjME1zU1VGQlZ6czdTVUZUTTBVc1NVRkJaU3hQUVVGUExFZEJRWFJDTEUxQlFXVXNUMEZCVVN4VFFVRlJMRWxCUVVrN1VVRkVia003TzFsQlUyZEVMRlZCUVVzc1IwRkJWeXhOUVVGTkxFTkJRVU03V1VGblFqbENMRmxCUVU4c1IwRkJXU3hGUVVGRkxFTkJRVU03VVVGRkwwUXNRMEZCUXp0TFFVRkJMRU5CUVVFN1NVRnNRbmRETzFGQlFYQkRMSE5DUVVGVExFTkJRVU1zUlVGQlJTeGpRVUZqTEVWQlFVVXNTVUZCU1N4RlFVRkZMRU5CUVVNN096QkRRVUVyUWp0SlFWRndRenRSUVVFNVFpeHpRa0ZCVXl4RFFVRkRMRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZET3p0blJFRkJOa0k3U1VGUk4wSTdVVUZCTjBJc2NVSkJRVkVzUTBGQlF5eEZRVUZGTEZGQlFWRXNSVUZCUlN4SlFVRkpMRVZCUVVVc1EwRkJRenM0UkVGQmEwSXNUVUZCVFN4dlFrRkJUaXhOUVVGTk96UkRRVUZOTzBsQmVFSm9SQ3hQUVVGUE8xRkJSSEpDTERSQ1FVRmxMRU5CUVVNc1JVRkJSU3hWUVVGVkxFVkJRVVVzU1VGQlNTeEZRVUZGTEdOQlFXTXNSVUZCUlN4VFFVRlRMRVZCUVVVc1EwRkJRenRQUVVOc1JDeFBRVUZQTEVOQk1FSnlRanRKUVVORUxFOUJRVThzVDBGQlR5eERRVUZETzBGQlJXNUNMRU5CUVVNN1FVRjBRMFFzZDBOQmMwTkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmZ1bmN0aW9uIEJET1Rlc3QxRmFjdG9yeShjdG9yKSB7XG4gICAgbGV0IEJET1Rlc3QxID0gY2xhc3MgQkRPVGVzdDEgZXh0ZW5kcyBjdG9yIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgdGhpcy5vaGEgPSAndGVzdCc7XG4gICAgICAgIH1cbiAgICAgICAgZG9Tb21ldGhpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJsb2xcIjtcbiAgICAgICAgfVxuICAgICAgICBvbk9oYUluaXQoX3ZhbHVlKSB7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSh7IHNhdmVJbkxvY2FsU3RvcmFnZTogdHJ1ZSB9KSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIEJET1Rlc3QxLnByb3RvdHlwZSwgXCJvaGFcIiwgdm9pZCAwKTtcbiAgICBCRE9UZXN0MSA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoeyBpc0Fic3RyYWN0OiB0cnVlLCBjb2xsZWN0aW9uTmFtZTogXCJCRE9UZXN0MVwiIH0pXG4gICAgXSwgQkRPVGVzdDEpO1xuICAgIHJldHVybiBCRE9UZXN0MTtcbn1cbmV4cG9ydHMuQkRPVGVzdDFGYWN0b3J5ID0gQkRPVGVzdDFGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFZHVnpkREV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDIxdlpHVnNjeTlDUkU5VVpYTjBNUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkRRU3h6UkVGQmEwVTdRVUZUYkVVc1UwRkJaMElzWlVGQlpTeERRVUZyUkN4SlFVRlhPMGxCVlhoR0xFbEJRV1VzVVVGQlVTeEhRVUYyUWl4TlFVRmxMRkZCUVZNc1UwRkJVU3hKUVVGSk8xRkJSSEJET3p0WlFWTnRSQ3hSUVVGSExFZEJRVmNzVFVGQlRTeERRVUZETzFGQmMwSjRSU3hEUVVGRE8xRkJaRlVzVjBGQlZ6dFpRVU5rTEU5QlFVOHNTMEZCU3l4RFFVRkRPMUZCUTJwQ0xFTkJRVU03VVVGVFV5eFRRVUZUTEVOQlFVTXNUVUZCWXp0UlFVVnNReXhEUVVGRE8wdEJRMG9zUTBGQlFUdEpRWFJDTWtNN1VVRkJka01zY1VKQlFWRXNRMEZCUXl4RlFVRkZMR3RDUVVGclFpeEZRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkRPenQ1UTBGQk5rSTdTVUZTZWtRc1VVRkJVVHRSUVVSMFFpdzBRa0ZCWlN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFbEJRVWtzUlVGQlJTeGpRVUZqTEVWQlFVVXNWVUZCVlN4RlFVRkZMRU5CUVVNN1QwRkRia1FzVVVGQlVTeERRVGhDZEVJN1NVRkRSQ3hQUVVGUExGRkJRVkVzUTBGQlF6dEJRVU53UWl4RFFVRkRPMEZCTVVORUxEQkRRVEJEUXlKOSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcblwidXNlIHN0cmljdFwiO1xuY29uc3QgQ2h1bmtfMSA9IHJlcXVpcmUoXCIuL0NodW5rXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmxldCBDZWxsID0gY2xhc3MgQ2VsbCB7XG4gICAgY29uc3RydWN0b3IoX3BhcmFtcykge1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLmNhdmUgPSAwO1xuICAgICAgICB0aGlzLnJpdmVyID0gMDtcbiAgICAgICAgdGhpcy5odW1pZGl0eSA9IDA7XG4gICAgICAgIHRoaXMudGVtcGVyYXR1cmUgPSAwO1xuICAgICAgICB0aGlzLmNodW5rID0gbmV3IENodW5rXzEuQ2h1bmsoKTtcbiAgICB9XG59O1xuQ2VsbCA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIENvbnN0UGFyYW1zICE9PSBcInVuZGVmaW5lZFwiICYmIENvbnN0UGFyYW1zKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3RdKVxuXSwgQ2VsbCk7XG5leHBvcnRzLkNlbGwgPSBDZWxsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTJWc2JDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiVzlrWld4ekwwTmxiR3d1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdRVUZCUVN4dFEwRkJaME03UVVGRGFFTXNjMFJCUVhkRU8wRkJVM2hFTEVsQlFXRXNTVUZCU1N4SFFVRnFRaXhOUVVGaExFbEJRVWs3U1VGNVJHSXNXVUZCV1N4UFFVRXlRanRSUVd4RWFFTXNUVUZCUXl4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVZGa0xFMUJRVU1zUjBGQlZ5eERRVUZETEVOQlFVTTdVVUZSWkN4VFFVRkpMRWRCUVZjc1EwRkJReXhEUVVGRE8xRkJVV3BDTEZWQlFVc3NSMEZCVnl4RFFVRkRMRU5CUVVNN1VVRlJiRUlzWVVGQlVTeEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFWRnlRaXhuUWtGQlZ5eEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFWRjRRaXhWUVVGTExFZEJRVlVzU1VGQlNTeGhRVUZMTEVWQlFVVXNRMEZCUXp0SlFVVlRMRU5CUVVNN1EwRkRMME1zUTBGQlFUdEJRVEZFV1N4SlFVRkpPMGxCUkdoQ0xEUkNRVUZsTEVWQlFVVTdhVVZCTUVSUkxGZEJRVmNzYjBKQlFWZ3NWMEZCVnp0SFFYcEVlRUlzU1VGQlNTeERRVEJFYUVJN1FVRXhSRmtzYjBKQlFVa2lmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3Qgb3Blbl9zaW1wbGV4X25vaXNlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwib3Blbi1zaW1wbGV4LW5vaXNlXCIpKTtcbmNvbnN0IGxvZGFzaF8xID0gcmVxdWlyZShcImxvZGFzaFwiKTtcbmNvbnN0IENlbGxfMSA9IHJlcXVpcmUoXCIuL0NlbGxcIik7XG5jbGFzcyBDaHVuayB7XG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDY0O1xuICAgICAgICB0aGlzLmdyaWQgPSBbXTtcbiAgICAgICAgdGhpcy5zaW1wbGV4Q2F2ZSA9IG5ldyBvcGVuX3NpbXBsZXhfbm9pc2VfMS5kZWZhdWx0KDEpO1xuICAgICAgICB0aGlzLnNpbXBsZXhSaXZlciA9IG5ldyBvcGVuX3NpbXBsZXhfbm9pc2VfMS5kZWZhdWx0KDIpO1xuICAgICAgICB0aGlzLnNpbXBsZXhUZW1wZXJhdHVyZSA9IG5ldyBvcGVuX3NpbXBsZXhfbm9pc2VfMS5kZWZhdWx0KDMpO1xuICAgICAgICB0aGlzLnNpbXBsZXhIdW1pZGl0eSA9IG5ldyBvcGVuX3NpbXBsZXhfbm9pc2VfMS5kZWZhdWx0KDQpO1xuICAgICAgICBsb2Rhc2hfMS5tZXJnZSh0aGlzLCBwYXJhbXMpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlR3JpZCgpO1xuICAgIH1cbiAgICBnZW5lcmF0ZUdyaWQoKSB7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMuc2l6ZTsgcm93KyspIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ncmlkW3Jvd10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQucHVzaChbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLnNpemU7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeENvb3JkaW5hdGUgPSBjb2wgKyB0aGlzLnggKiB0aGlzLnNpemU7XG4gICAgICAgICAgICAgICAgY29uc3QgeUNvb3JkaW5hdGUgPSByb3cgKyB0aGlzLnkgKiB0aGlzLnNpemU7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkW3Jvd10ucHVzaChuZXcgQ2VsbF8xLkNlbGwoe1xuICAgICAgICAgICAgICAgICAgICB4OiB4Q29vcmRpbmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgeTogeUNvb3JkaW5hdGUsXG4gICAgICAgICAgICAgICAgICAgIGNhdmU6IHRoaXMuc2ltcGxleENhdmUubm9pc2UyRCh4Q29vcmRpbmF0ZSAvIDEwMCwgeUNvb3JkaW5hdGUgLyAxMDApLFxuICAgICAgICAgICAgICAgICAgICByaXZlcjogdGhpcy5zaW1wbGV4Uml2ZXIubm9pc2UyRCh4Q29vcmRpbmF0ZSAvIDUwMCwgeUNvb3JkaW5hdGUgLyA1MDApLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZTogdGhpcy5zaW1wbGV4VGVtcGVyYXR1cmUubm9pc2UyRCh4Q29vcmRpbmF0ZSAvIDI1MDAsIHlDb29yZGluYXRlIC8gMjUwMCksXG4gICAgICAgICAgICAgICAgICAgIGh1bWlkaXR5OiB0aGlzLnNpbXBsZXhIdW1pZGl0eS5ub2lzZTJEKHhDb29yZGluYXRlIC8gMjUwMCwgeUNvb3JkaW5hdGUgLyAyNTAwKSxcbiAgICAgICAgICAgICAgICAgICAgY2h1bms6IHRoaXNcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkNodW5rID0gQ2h1bms7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMmgxYm1zdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyMXZaR1ZzY3k5RGFIVnVheTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3h2UmtGQmEwUTdRVUZEYkVRc2JVTkJRU3RDTzBGQlF5OUNMR2xEUVVFNFFqdEJRVkU1UWl4TlFVRmhMRXRCUVVzN1NVRnpSV1FzV1VGQldTeE5RVUV5UWp0UlFTOUVhRU1zVFVGQlF5eEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFWRmtMRTFCUVVNc1IwRkJWeXhEUVVGRExFTkJRVU03VVVGUlpDeFRRVUZKTEVkQlFWa3NSVUZCUlN4RFFVRkRPMUZCVTJoQ0xGTkJRVWtzUjBGQllTeEZRVUZGTEVOQlFVTTdVVUZUY0VJc1owSkJRVmNzUjBGQmNVSXNTVUZCU1N3MFFrRkJaMElzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFWTjRSQ3hwUWtGQldTeEhRVUZ4UWl4SlFVRkpMRFJDUVVGblFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCVTNwRUxIVkNRVUZyUWl4SFFVRnhRaXhKUVVGSkxEUkNRVUZuUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJVeTlFTEc5Q1FVRmxMRWRCUVhGQ0xFbEJRVWtzTkVKQlFXZENMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGSGJFVXNZMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU53UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU03U1VGRGVFSXNRMEZCUXp0SlFWRlRMRmxCUVZrN1VVRkRiRUlzUzBGQlN5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGWkxFbEJRVWtzUTBGQlF5eEpRVUZMTEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVN1dVRkRhRVFzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3WjBKQlEycENMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMkZCUTNSQ08xbEJRMFFzUzBGQlN5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGWkxFbEJRVWtzUTBGQlF5eEpRVUZMTEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVN1owSkJRMmhFTEUxQlFVMHNWMEZCVnl4SFFVRkhMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZYTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNN1owSkJRM0pFTEUxQlFVMHNWMEZCVnl4SFFVRkhMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZYTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNN1owSkJSWEpFTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVU5tTEVsQlFVa3NWMEZCU1N4RFFVRkRPMjlDUVVOTUxFTkJRVU1zUlVGQlJTeFhRVUZYTzI5Q1FVTmtMRU5CUVVNc1JVRkJSU3hYUVVGWE8yOUNRVU5rTEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVkQlFVY3NSMEZCUnl4RlFVRkZMRmRCUVZjc1IwRkJSeXhIUVVGSExFTkJRVU03YjBKQlEzQkZMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRWRCUVVjc1IwRkJSeXhGUVVGRkxGZEJRVmNzUjBGQlJ5eEhRVUZITEVOQlFVTTdiMEpCUTNSRkxGZEJRVmNzUlVGQlJTeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NSMEZCUnl4SlFVRkpMRVZCUVVVc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF6dHZRa0ZEY0VZc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFVkJRVVVzVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXp0dlFrRkRPVVVzUzBGQlN5eEZRVUZGTEVsQlFVazdhVUpCUTJRc1EwRkJReXhEUVVOTUxFTkJRVU03WVVGRFREdFRRVU5LTzBsQlEwd3NRMEZCUXp0RFFVTktPMEZCZUVkRUxITkNRWGRIUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gQkRPQ29uZmlnRmFjdG9yeShjdG9yKSB7XG4gICAgY2xhc3MgQkRPQ29uZmlnIGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVzID0gW1wiLzpuYW1lXCJdO1xuICAgICAgICAgICAgdGhpcy5qc29uT25seSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEJET0NvbmZpZztcbn1cbmV4cG9ydHMuQkRPQ29uZmlnRmFjdG9yeSA9IEJET0NvbmZpZ0ZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQUTI5dVptbG5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzl5YjNWMFpYTXZRa1JQUTI5dVptbG5MblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlUwRXNVMEZCWjBJc1owSkJRV2RDTEVOQlFYTkRMRWxCUVZjN1NVRlZOMFVzVFVGQlpTeFRRVUZWTEZOQlFWRXNTVUZCU1R0UlFVRnlRenM3V1VGUFZ5eFhRVUZOTEVkQlFXRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRaUVU4elFpeGhRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUXpsQ0xFTkJRVU03UzBGQlFUdEpRVVZFTEU5QlFVOHNVMEZCVXl4RFFVRkRPMEZCUTNKQ0xFTkJRVU03UVVFMVFrUXNORU5CTkVKREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIEJET0dhbWVMb2JieUZhY3RvcnkoY3Rvcikge1xuICAgIGNsYXNzIEJET0dhbWVMb2JieSBleHRlbmRzIGN0b3Ige1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlck5hbWVTcGFjZSA9ICcvJztcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGVTdHJpbmcgPSByZXF1aXJlKCd+YmRvL3ZpZXdzL2dhbWVMb2JieS5uamsnKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyB0ZW1wbGF0ZVBhcmFtcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb2hhOiAnT09PT09IQUFBQUFBQUEhISEnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJET0dhbWVMb2JieS5hdHRhY2hUb1NlcnZlcnMgPSBbXCJHYW1lU2VydmVyXCJdO1xuICAgIHJldHVybiBCRE9HYW1lTG9iYnk7XG59XG5leHBvcnRzLkJET0dhbWVMb2JieUZhY3RvcnkgPSBCRE9HYW1lTG9iYnlGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFIyRnRaVXh2WW1KNUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXliM1YwWlhNdlFrUlBSMkZ0WlV4dlltSjVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlZVRXNVMEZCWjBJc2JVSkJRVzFDTEVOQlFYTkRMRWxCUVZjN1NVRlRhRVlzVFVGQlpTeFpRVUZoTEZOQlFWRXNTVUZCU1R0UlFVRjRRenM3V1VGblFsY3NiMEpCUVdVc1IwRkJSeXhIUVVGSExFTkJRVU03V1VGUmJrSXNiVUpCUVdNc1IwRkJZU3hQUVVGUExFTkJRVU1zTUVKQlFUQkNMRU5CUVVNc1EwRkJRenRSUVdNM1JTeERRVUZETzFGQlRHRXNTMEZCU3l4RFFVRkRMR05CUVdNN1dVRkRNVUlzVDBGQlR6dG5Ra0ZEU0N4SFFVRkhMRVZCUVVVc2JVSkJRVzFDTzJGQlF6TkNMRU5CUVVNN1VVRkRUaXhEUVVGRE96dEpRVFZDWVN3MFFrRkJaU3hIUVVGaExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdTVUVyUWpkRUxFOUJRVThzV1VGQldTeERRVUZETzBGQlEzaENMRU5CUVVNN1FVRnNSRVFzYTBSQmEwUkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBCRE9Ib21lRmFjdG9yeShjdG9yKSB7XG4gICAgY2xhc3MgQkRPSG9tZSBleHRlbmRzIGN0b3Ige1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlck5hbWVTcGFjZSA9ICcvJztcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGVTdHJpbmcgPSByZXF1aXJlKCd+YmRvL3ZpZXdzL2hvbWUubmprJyk7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9oYTogJ2VuZGxpY2ggenUgSGF1c2UgPSknXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJET0hvbWUuYXR0YWNoVG9TZXJ2ZXJzID0gW1wiV2ViU2VydmVyXCJdO1xuICAgIHJldHVybiBCRE9Ib21lO1xufVxuZXhwb3J0cy5CRE9Ib21lRmFjdG9yeSA9IEJET0hvbWVGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFNHOXRaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2Y205MWRHVnpMMEpFVDBodmJXVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGVlFTeFRRVUZuUWl4alFVRmpMRU5CUVhORExFbEJRVmM3U1VGVE0wVXNUVUZCWlN4UFFVRlJMRk5CUVZFc1NVRkJTVHRSUVVGdVF6czdXVUZuUWxjc2IwSkJRV1VzUjBGQlJ5eEhRVUZITEVOQlFVTTdXVUZSYmtJc2JVSkJRV01zUjBGQllTeFBRVUZQTEVOQlFVTXNjVUpCUVhGQ0xFTkJRVU1zUTBGQlF6dFJRV040UlN4RFFVRkRPMUZCVEdFc1MwRkJTeXhEUVVGRExHTkJRV003V1VGRE1VSXNUMEZCVHp0blFrRkRTQ3hIUVVGSExFVkJRVVVzY1VKQlFYRkNPMkZCUXpkQ0xFTkJRVU03VVVGRFRpeERRVUZET3p0SlFUVkNZU3gxUWtGQlpTeEhRVUZoTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1NVRXJRalZFTEU5QlFVOHNUMEZCVHl4RFFVRkRPMEZCUTI1Q0xFTkJRVU03UVVGc1JFUXNkME5CYTBSREluMD0iLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9zb3VyY2UvYXBwL3V0aWxzIHN5bmMgcmVjdXJzaXZlXCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwicmVmbGVjdC1tZXRhZGF0YVwiKTtcbmNvbnN0IEJpbmRpbmdfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CaW5kaW5nXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IGVudmlyb25tZW50XzEgPSByZXF1aXJlKFwifmJkby91dGlscy9lbnZpcm9ubWVudFwiKTtcbmNvbnN0IFByb3BlcnR5XzEgPSByZXF1aXJlKFwifmJkby9saWIvUHJvcGVydHlcIik7XG5jb25zdCBBdHRyaWJ1dGVfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9BdHRyaWJ1dGVcIik7XG5jb25zdCBXYXRjaGVkXzEgPSByZXF1aXJlKFwifmJkby9saWIvV2F0Y2hlZFwiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IHR5cGVfZ3JhcGhxbF8xID0gcmVxdWlyZShcInR5cGUtZ3JhcGhxbFwiKTtcbmZ1bmN0aW9uIHdhdGNoZWQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BEZXNjID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KTtcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldHRlcih0aGlzLCBrZXksIHByb3BEZXNjKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtRGF0YSA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLCBzdHJpbmdLZXkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBuZXcgV2F0Y2hlZF8xLldhdGNoZWQodGhpcywgc3RyaW5nS2V5LCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGlmIChtRGF0YSBpbnN0YW5jZW9mIEF0dHJpYnV0ZV8xLkF0dHJpYnV0ZSB8fCBtRGF0YSBpbnN0YW5jZW9mIFByb3BlcnR5XzEuUHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcC5zZXRTdWJPYmplY3QobURhdGEpO1xuICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEodGhpcywgc3RyaW5nS2V5LCBwcm9wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIW1EYXRhKVxuICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEodGhpcywgc3RyaW5nS2V5LCBwcm9wKTtcbiAgICAgICAgICAgICAgICBzZXR0ZXIodGhpcywga2V5LCBuZXdWYWwsIHByb3BEZXNjKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG59XG5leHBvcnRzLndhdGNoZWQgPSB3YXRjaGVkO1xuZnVuY3Rpb24gcHJvcGVydHkocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BEZXNjID0gYmVmb3JlUHJvcGVydHlEZXNjcmlwdG9ycyh0YXJnZXQsIGtleS50b1N0cmluZygpLCBcImRlZmluZWRQcm9wZXJ0aWVzXCIpO1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KTtcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldHRlcih0aGlzLCBrZXksIHByb3BEZXNjKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtRGF0YSA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLCBzdHJpbmdLZXkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBuZXcgUHJvcGVydHlfMS5Qcm9wZXJ0eSh0aGlzLCBzdHJpbmdLZXksIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFtRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEodGhpcywgc3RyaW5nS2V5LCBwcm9wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobURhdGEgaW5zdGFuY2VvZiBXYXRjaGVkXzEuV2F0Y2hlZCAmJiAhbURhdGEuc3ViT2JqZWN0KVxuICAgICAgICAgICAgICAgICAgICBtRGF0YS5zZXRTdWJPYmplY3QocHJvcCk7XG4gICAgICAgICAgICAgICAgaWYgKCEobURhdGEgaW5zdGFuY2VvZiBXYXRjaGVkXzEuV2F0Y2hlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGVyKHRoaXMsIGtleSwgbmV3VmFsLCBwcm9wRGVzYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3BEZXNjICYmIHByb3BEZXNjLnNldClcbiAgICAgICAgICAgICAgICAgICAgcHJvcERlc2Muc2V0LmNhbGwodGhpcywgbmV3VmFsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG59XG5leHBvcnRzLnByb3BlcnR5ID0gcHJvcGVydHk7XG5mdW5jdGlvbiBhdHRyaWJ1dGUodHlwZUZ1bmMsIHBhcmFtcykge1xuICAgIHJldHVybiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgaWYgKHR5cGVGdW5jICYmICEodHlwZUZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbikgJiYgIXBhcmFtcylcbiAgICAgICAgICAgIHBhcmFtcyA9IHR5cGVGdW5jO1xuICAgICAgICBpZiAoIXBhcmFtcylcbiAgICAgICAgICAgIHBhcmFtcyA9IHt9O1xuICAgICAgICBpZiAodHlwZUZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBwYXJhbXMpXG4gICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5GaWVsZCh0eXBlRnVuYywgcGFyYW1zKSh0YXJnZXQsIGtleSk7XG4gICAgICAgIGVsc2UgaWYgKHR5cGVGdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pXG4gICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5GaWVsZCh0eXBlRnVuYykodGFyZ2V0LCBrZXkpO1xuICAgICAgICBlbHNlIGlmIChwYXJhbXMpXG4gICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5GaWVsZChwYXJhbXMpKHRhcmdldCwga2V5KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuRmllbGQoKSh0YXJnZXQsIGtleSk7XG4gICAgICAgIGNvbnN0IHByb3BEZXNjID0gYmVmb3JlUHJvcGVydHlEZXNjcmlwdG9ycyh0YXJnZXQsIGtleS50b1N0cmluZygpLCBcImRlZmluZWRBdHRyaWJ1dGVzXCIpO1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KTtcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldHRlcih0aGlzLCBrZXksIHByb3BEZXNjKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtRGF0YSA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLCBzdHJpbmdLZXkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHIgPSBuZXcgQXR0cmlidXRlXzEuQXR0cmlidXRlKHRoaXMsIHN0cmluZ0tleSwgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAoIW1EYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lV2lsZGNhcmRNZXRhZGF0YSh0aGlzLCBzdHJpbmdLZXksIGF0dHIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtRGF0YSBpbnN0YW5jZW9mIFdhdGNoZWRfMS5XYXRjaGVkICYmICFtRGF0YS5zdWJPYmplY3QpXG4gICAgICAgICAgICAgICAgICAgIG1EYXRhLnNldFN1Yk9iamVjdChhdHRyKTtcbiAgICAgICAgICAgICAgICBpZiAoIShtRGF0YSBpbnN0YW5jZW9mIFdhdGNoZWRfMS5XYXRjaGVkKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXR0ZXIodGhpcywga2V5LCBuZXdWYWwsIHByb3BEZXNjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcERlc2MgJiYgcHJvcERlc2Muc2V0KVxuICAgICAgICAgICAgICAgICAgICBwcm9wRGVzYy5zZXQuY2FsbCh0aGlzLCBuZXdWYWwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmV4cG9ydHMuYXR0cmlidXRlID0gYXR0cmlidXRlO1xuZnVuY3Rpb24gYmFzZUNvbnN0cnVjdG9yKG5hbWUsIG9wdGlvbnMsIGNvbnN0UGFyYW1zSW5kZXggPSAwKSB7XG4gICAgcmV0dXJuIChjdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihjdG9yKTtcbiAgICAgICAgaWYgKHByb3RvdHlwZS5uYW1lID09PSBcIkJhc2VDb25zdHJ1Y3RvclwiKSB7XG4gICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY3RvciwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuYW1lICYmICh0eXBlb2YgbmFtZSA9PT0gXCJudW1iZXJcIikpXG4gICAgICAgICAgICBjb25zdFBhcmFtc0luZGV4ID0gbmFtZTtcbiAgICAgICAgaWYgKG5hbWUgJiYgKHR5cGVvZiBuYW1lID09PSBcIm9iamVjdFwiKSlcbiAgICAgICAgICAgIG9wdGlvbnMgPSBuYW1lO1xuICAgICAgICBpZiAobmFtZSAmJiAoKHR5cGVvZiBuYW1lID09PSBcIm9iamVjdFwiKSB8fCAodHlwZW9mIG5hbWUgPT09IFwibnVtYmVyXCIpKSlcbiAgICAgICAgICAgIG5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChvcHRpb25zICYmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJudW1iZXJcIikpXG4gICAgICAgICAgICBjb25zdFBhcmFtc0luZGV4ID0gb3B0aW9ucztcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgKHR5cGVvZiBvcHRpb25zID09PSBcIm51bWJlclwiKSlcbiAgICAgICAgICAgIG9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChcImlzQkRPTW9kZWxcIiBpbiBjdG9yKSB7XG4gICAgICAgICAgICBpZiAobmFtZSAmJiAodHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIpICYmIG9wdGlvbnMgJiYgKHR5cGVvZiBvcHRpb25zID09PSBcIm9iamVjdFwiKSkge1xuICAgICAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLk9iamVjdFR5cGUobmFtZSwgb3B0aW9ucykoY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuYW1lICYmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5PYmplY3RUeXBlKG5hbWUpKGN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucyAmJiAodHlwZW9mIG9wdGlvbnMgPT09IFwib2JqZWN0XCIpKSB7XG4gICAgICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuT2JqZWN0VHlwZShvcHRpb25zKShjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5PYmplY3RUeXBlKCkoY3Rvcik7XG4gICAgICAgICAgICBpZiAob3B0aW9ucyAmJiAodHlwZW9mIG9wdGlvbnMgPT09IFwib2JqZWN0XCIpICYmIG9wdGlvbnMuY29sbGVjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKGN0b3IsIFwiY29sbGVjdGlvbk5hbWVcIiwgb3B0aW9ucy5jb2xsZWN0aW9uTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgKHR5cGVvZiBvcHRpb25zID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaXNBYnN0cmFjdCkpXG4gICAgICAgICAgICByZXR1cm4gY3RvcjtcbiAgICAgICAgY2xhc3MgQmFzZUNvbnN0cnVjdG9yIGV4dGVuZHMgY3RvciB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvciguLi5wYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBzdXBlciguLi5wYXJhbXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbk5hbWUgPSBCYXNlQ29uc3RydWN0b3IuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnN0UGFyYW1zID0gcGFyYW1zW2NvbnN0UGFyYW1zSW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmICghKGNvbnN0UGFyYW1zIGluc3RhbmNlb2YgT2JqZWN0KSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3RQYXJhbXMgPSB7fTtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMsIFwibm9ybWFsRnVuY3Rpb25hbGl0eVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdFNldHRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLCBcImRlZmF1bHRTZXR0aW5nc1wiKSB8fCB7fTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0U2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRTZXR0aW5ncywgY29uc3RQYXJhbXMpO1xuICAgICAgICAgICAgICAgIGlmIChcImdldE5hbWVzcGFjZWRTdG9yYWdlXCIgaW4gdGhpcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWNoZWRTZXR0aW5ncyA9IHRoaXMuZ2V0TmFtZXNwYWNlZFN0b3JhZ2UoXCIqXCIsIFwiaWRcIiwgY29uc3RQYXJhbXMuaWQpO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRTZXR0aW5ncywgY2FjaGVkU2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRTZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YSh0aGlzLCBcImNvbnN0cnVjdGlvbkNvbXBsZXRlXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmIChcImNvbnN0cnVjdGVkQ2FsbGJhY2tcIiBpbiB0aGlzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdGVkQ2FsbGJhY2soLi4ucGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBCYXNlQ29uc3RydWN0b3IuZ3JhcGhRTFR5cGUgPSBjdG9yO1xuICAgICAgICBCYXNlQ29uc3RydWN0b3IuY29sbGVjdGlvbk5hbWUgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKEJhc2VDb25zdHJ1Y3RvciwgXCJjb2xsZWN0aW9uTmFtZVwiKTtcbiAgICAgICAgaWYgKGVudmlyb25tZW50XzEuaXNCcm93c2VyKCkgJiYgY3Rvci5pc0Jhc2VDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh1dGlsXzEucGFzY2FsQ2FzZTJrZWJhYkNhc2UoY3Rvci5uYW1lKSwgQmFzZUNvbnN0cnVjdG9yLCB7XG4gICAgICAgICAgICAgICAgZXh0ZW5kczogQmFzZUNvbnN0cnVjdG9yLmV4dGVuZHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBCYXNlQ29uc3RydWN0b3I7XG4gICAgfTtcbn1cbmV4cG9ydHMuYmFzZUNvbnN0cnVjdG9yID0gYmFzZUNvbnN0cnVjdG9yO1xuZXhwb3J0cy5xdWVyeSA9IHR5cGVfZ3JhcGhxbF8xLlF1ZXJ5O1xuZXhwb3J0cy5hcmcgPSB0eXBlX2dyYXBocWxfMS5Bcmc7XG5leHBvcnRzLmFyZ3MgPSB0eXBlX2dyYXBocWxfMS5BcmdzO1xuZXhwb3J0cy5yZXNvbHZlciA9IHR5cGVfZ3JhcGhxbF8xLlJlc29sdmVyO1xuZXhwb3J0cy5yb290ID0gdHlwZV9ncmFwaHFsXzEuUm9vdDtcbmV4cG9ydHMubXV0YXRpb24gPSB0eXBlX2dyYXBocWxfMS5NdXRhdGlvbjtcbmV4cG9ydHMuc3Vic2NyaXB0aW9uID0gdHlwZV9ncmFwaHFsXzEuU3Vic2NyaXB0aW9uO1xuZXhwb3J0cy5wdWJTdWIgPSB0eXBlX2dyYXBocWxfMS5QdWJTdWI7XG5leHBvcnRzLmlucHV0VHlwZSA9IHR5cGVfZ3JhcGhxbF8xLklucHV0VHlwZTtcbmZ1bmN0aW9uIGJlZm9yZVByb3BlcnR5RGVzY3JpcHRvcnModGFyZ2V0LCBrZXksIG1EYXRhTmFtZSkge1xuICAgIGNvbnN0IHByb3BEZXNjID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgIGlmICghUmVmbGVjdC5oYXNNZXRhZGF0YShtRGF0YU5hbWUsIHRhcmdldCkpXG4gICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGFyZ2V0LCBtRGF0YU5hbWUsIG5ldyBBcnJheSgpKTtcbiAgICBjb25zdCBtYXAgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRhcmdldCwgbURhdGFOYW1lKTtcbiAgICBtYXAucHVzaChrZXkudG9TdHJpbmcoKSk7XG4gICAgcmV0dXJuIHByb3BEZXNjO1xufVxuZnVuY3Rpb24gZ2V0dGVyKGluc3RhbmNlLCBrZXksIHByb3BEZXNjKSB7XG4gICAgaWYgKCFtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGluc3RhbmNlLCBcIm5vcm1hbEZ1bmN0aW9uYWxpdHlcIikpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShpbnN0YW5jZSwgXCJkZWZhdWx0U2V0dGluZ3NcIikgfHwge307XG4gICAgICAgIHJldHVybiBkZWZhdWx0U2V0dGluZ3Nba2V5LnRvU3RyaW5nKCldO1xuICAgIH1cbiAgICBjb25zdCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICBpZiAocHJvcERlc2MgJiYgcHJvcERlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBwcm9wRGVzYy5nZXQuY2FsbChpbnN0YW5jZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBtRGF0YSA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YShpbnN0YW5jZSwgc3RyaW5nS2V5KTtcbiAgICAgICAgaWYgKG1EYXRhKVxuICAgICAgICAgICAgcmV0dXJuIG1EYXRhLnZhbHVlT2YoKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG59XG5mdW5jdGlvbiBzZXR0ZXIoaW5zdGFuY2UsIGtleSwgbmV3VmFsLCBwcm9wRGVzYykge1xuICAgIGlmICghbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShpbnN0YW5jZSwgXCJub3JtYWxGdW5jdGlvbmFsaXR5XCIpKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwiZGVmYXVsdFNldHRpbmdzXCIpIHx8IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKGRlZmF1bHRTZXR0aW5ncywgeyBba2V5XTogbmV3VmFsIH0pO1xuICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKGluc3RhbmNlLCBcImRlZmF1bHRTZXR0aW5nc1wiLCBkZWZhdWx0U2V0dGluZ3MpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0cmluZ0tleSA9IGtleS50b1N0cmluZygpO1xuICAgIGlmIChpbnN0YW5jZVtzdHJpbmdLZXldID09PSBuZXdWYWwpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCBtRGF0YSA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YShpbnN0YW5jZSwgc3RyaW5nS2V5KTtcbiAgICBjb25zdCBpbml0aWF0b3JNRGF0YSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwiaW5pdGlhdG9yQmluZGluZ1wiKTtcbiAgICBjb25zdCBpbml0aWF0b3JCaW5kaW5nID0gaW5pdGlhdG9yTURhdGEgPyBpbml0aWF0b3JNRGF0YS5nZXQoc3RyaW5nS2V5KSA6IHVuZGVmaW5lZDtcbiAgICBpZiAobmV3VmFsIGluc3RhbmNlb2YgQmluZGluZ18xLkJpbmRpbmcpIHtcbiAgICAgICAgbmV3VmFsLmluc3RhbGwoaW5zdGFuY2UsIHN0cmluZ0tleSk7XG4gICAgICAgIG5ld1ZhbCA9IG5ld1ZhbC52YWx1ZU9mKCk7XG4gICAgfVxuICAgIG1EYXRhLnNldFZhbHVlKG5ld1ZhbCk7XG4gICAgaWYgKGluaXRpYXRvckJpbmRpbmcpXG4gICAgICAgIGluaXRpYXRvckJpbmRpbmcucmVmbGVjdFRvT2JqZWN0KG5ld1ZhbCk7XG4gICAgaWYgKHByb3BEZXNjICYmIHByb3BEZXNjLnNldClcbiAgICAgICAgcHJvcERlc2Muc2V0LmNhbGwoaW5zdGFuY2UsIG5ld1ZhbCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laR1ZqYjNKaGRHOXljeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2ZFhScGJITXZaR1ZqYjNKaGRHOXljeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMRFJDUVVFd1FqdEJRVU14UWl3NFEwRkJNa003UVVGRE0wTXNNRU5CUVhWRU8wRkJRM1pFTEhkRVFVRnRSRHRCUVVOdVJDeG5SRUZCT0VRN1FVRkRPVVFzYTBSQlFXbEZPMEZCUTJwRkxEaERRVUV5UkR0QlFVTXpSQ3hyUkVGQkswYzdRVUZITDBjc0swTkJXWE5DTzBGQk5FSjBRaXhUUVVGblFpeFBRVUZQTEVOQlFVTXNVMEZCZVVJc1JVRkJSVHRKUVVNdlF5eFBRVUZQTEVOQlFVTXNUVUZCVnl4RlFVRkZMRWRCUVc5Q0xFVkJRVVVzUlVGQlJUdFJRVU42UXl4TlFVRk5MRkZCUVZFc1IwRkJSeXhQUVVGUExFTkJRVU1zZDBKQlFYZENMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJ5OUVMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTNCRExFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1JVRkJSVHRaUVVOb1F5eEhRVUZITEVWQlFVVXNVMEZCVXl4SFFVRkhPMmRDUVVOaUxFOUJRVThzVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03V1VGRGRrTXNRMEZCUXp0WlFVTkVMRWRCUVVjc1JVRkJSU3hUUVVGVExFZEJRVWNzUTBGQlF5eE5RVUZYTzJkQ1FVTjZRaXhOUVVGTkxGTkJRVk1zUjBGQlJ5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1owSkJRMnBETEUxQlFVMHNTMEZCU3l4SFFVRkhMRGhDUVVGdFFpeERRVUZETEVsQlFVa3NSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenRuUWtGRGJrUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hwUWtGQlR5eERRVUZOTEVsQlFVa3NSVUZCUlN4VFFVRlRMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03WjBKQlEzWkVMRWxCUVVrc1MwRkJTeXhaUVVGWkxIRkNRVUZUTEVsQlFVa3NTMEZCU3l4WlFVRlpMRzFDUVVGUkxFVkJRVVU3YjBKQlEzcEVMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdiMEpCUTNwQ0xHbERRVUZ6UWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdhVUpCUTJwRU8zRkNRVUZOTEVsQlFVa3NRMEZCUXl4TFFVRkxPMjlDUVVGRkxHbERRVUZ6UWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTJwRkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVUwc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVU40UXl4RFFVRkRPMWxCUTBRc1ZVRkJWU3hGUVVGRkxFbEJRVWs3V1VGRGFFSXNXVUZCV1N4RlFVRkZMRWxCUVVrN1UwRkRja0lzUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXl4RFFVRkRPMEZCUTA0c1EwRkJRenRCUVhoQ1JDd3dRa0YzUWtNN1FVRlZSQ3hUUVVGblFpeFJRVUZSTEVOQlFVTXNVMEZCTUVJc1JVRkJSVHRKUVVOcVJDeFBRVUZQTEVOQlFVTXNUVUZCVnl4RlFVRkZMRWRCUVc5Q0xFVkJRVVVzUlVGQlJUdFJRVU42UXl4TlFVRk5MRkZCUVZFc1IwRkJSeXg1UWtGQmVVSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEcxQ1FVRnRRaXhEUVVGRExFTkJRVU03VVVGRmVFWXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEY0VNc1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RlFVRkZPMWxCUTJoRExFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVYzdaMEpCUTJJc1QwRkJUeXhOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVkQlFVY3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRaUVVOMlF5eERRVUZETzFsQlEwUXNSMEZCUnl4RlFVRkZMRk5CUVZNc1IwRkJSeXhEUVVGRExFMUJRVmM3WjBKQlEzcENMRTFCUVUwc1UwRkJVeXhIUVVGSExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0blFrRkRha01zVFVGQlRTeExRVUZMTEVkQlFVY3NPRUpCUVcxQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkRPMmRDUVVOdVJDeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRzFDUVVGUkxFTkJRVTBzU1VGQlNTeEZRVUZGTEZOQlFWTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRuUWtGRGVFUXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSVHR2UWtGRFVpeHBRMEZCYzBJc1EwRkJReXhKUVVGSkxFVkJRVVVzVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMmxDUVVOcVJEdHhRa0ZCVFN4SlFVRkpMRXRCUVVzc1dVRkJXU3hwUWtGQlR5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNN2IwSkJRVVVzUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRGJFWXNTVUZCU1N4RFFVRkRMRU5CUVVNc1MwRkJTeXhaUVVGWkxHbENRVUZQTEVOQlFVTXNSVUZCUlR0dlFrRkROMElzVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc1RVRkJUU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzJsQ1FVTjJRenR4UWtGQlRTeEpRVUZKTEZGQlFWRXNTVUZCU1N4UlFVRlJMRU5CUVVNc1IwRkJSenR2UWtGQlJTeFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdXVUZEZWtVc1EwRkJRenRaUVVORUxGVkJRVlVzUlVGQlJTeEpRVUZKTzFsQlEyaENMRmxCUVZrc1JVRkJSU3hKUVVGSk8xTkJRM0pDTEVOQlFVTXNRMEZCUXp0SlFVTlFMRU5CUVVNc1EwRkJRenRCUVVOT0xFTkJRVU03UVVGNFFrUXNORUpCZDBKRE8wRkJaVVFzVTBGQlowSXNVMEZCVXl4RFFVRkRMRkZCUVRKQ0xFVkJRVVVzVFVGQmVVSTdTVUZETlVVc1QwRkJUeXhEUVVGRExFMUJRVmNzUlVGQlJTeEhRVUZ2UWl4RlFVRkZMRVZCUVVVN1VVRkRla01zU1VGQlNTeFJRVUZSTEVsQlFVa3NRMEZCUXl4RFFVRkRMRkZCUVZFc1dVRkJXU3hSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMDdXVUZCUlN4TlFVRk5MRWRCUVVjc1VVRkJVU3hEUVVGRE8xRkJRemxGTEVsQlFVa3NRMEZCUXl4TlFVRk5PMWxCUVVVc1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVWQ2UWl4SlFVRkpMRkZCUVZFc1dVRkJXU3hSUVVGUkxFbEJRVWtzVFVGQlRUdFpRVUZGTEc5Q1FVRkxMRU5CUVVNc1VVRkJVU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVNMVJTeEpRVUZKTEZGQlFWRXNXVUZCV1N4UlFVRlJPMWxCUVVVc2IwSkJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03WVVGREwwUXNTVUZCU1N4TlFVRk5PMWxCUVVVc2IwSkJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03TzFsQlEzWkRMRzlDUVVGTExFVkJRVVVzUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRNVUlzVFVGQlRTeFJRVUZSTEVkQlFVY3NlVUpCUVhsQ0xFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSU3h0UWtGQmJVSXNRMEZCUXl4RFFVRkRPMUZCUlhoR0xFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM0JETEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUlVGQlJUdFpRVU5vUXl4SFFVRkhMRVZCUVVVc1UwRkJVeXhIUVVGSE8yZENRVU5pTEU5QlFVOHNUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdXVUZEZGtNc1EwRkJRenRaUVVORUxFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NRMEZCUXl4TlFVRlhPMmRDUVVONlFpeE5RVUZOTEZOQlFWTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03WjBKQlEycERMRTFCUVUwc1MwRkJTeXhIUVVGSExEaENRVUZ0UWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlF6dG5Ra0ZEYmtRc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeHhRa0ZCVXl4RFFVRk5MRWxCUVVrc1JVRkJSU3hUUVVGVExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdaMEpCUTNwRUxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdiMEpCUTFJc2FVTkJRWE5DTEVOQlFVTXNTVUZCU1N4RlFVRkZMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dHBRa0ZEYWtRN2NVSkJRVTBzU1VGQlNTeExRVUZMTEZsQlFWa3NhVUpCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTzI5Q1FVRkZMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTJ4R0xFbEJRVWtzUTBGQlF5eERRVUZETEV0QlFVc3NXVUZCV1N4cFFrRkJUeXhEUVVGRExFVkJRVVU3YjBKQlF6ZENMRTFCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEUxQlFVMHNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRwUWtGRGRrTTdjVUpCUVUwc1NVRkJTU3hSUVVGUkxFbEJRVWtzVVVGQlVTeERRVUZETEVkQlFVYzdiMEpCUVVVc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8xbEJRM3BGTEVOQlFVTTdXVUZEUkN4VlFVRlZMRVZCUVVVc1NVRkJTVHRaUVVOb1FpeFpRVUZaTEVWQlFVVXNTVUZCU1R0VFFVTnlRaXhEUVVGRExFTkJRVU03U1VGRFVDeERRVUZETEVOQlFVTTdRVUZEVGl4RFFVRkRPMEZCYUVORUxEaENRV2REUXp0QlFWVkVMRk5CUVdkQ0xHVkJRV1VzUTBGQlF5eEpRVUYzUWl4RlFVRkZMRTlCUVhGQ0xFVkJRVVVzYlVKQlFUSkNMRU5CUVVNN1NVRkZla2NzVDBGQlR5eERRVUZETEVsQlFWTXNSVUZCUlN4RlFVRkZPMUZCUTJwQ0xFMUJRVTBzVTBGQlV5eEhRVUZITEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE9VTXNTVUZCU1N4VFFVRlRMRU5CUVVNc1NVRkJTU3hMUVVGTExHbENRVUZwUWl4RlFVRkZPMWxCUTNSRExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTnFSVHRSUVVkRUxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4SlFVRkpMRXRCUVVzc1VVRkJVU3hEUVVGRE8xbEJRVVVzWjBKQlFXZENMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMmhGTEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhKUVVGSkxFdEJRVXNzVVVGQlVTeERRVUZETzFsQlFVVXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOMlJDeEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1QwRkJUeXhKUVVGSkxFdEJRVXNzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRWxCUVVrc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVUZGTEVsQlFVa3NSMEZCUnl4VFFVRlRMRU5CUVVNN1VVRkRla1lzU1VGQlNTeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRTlCUVU4c1MwRkJTeXhSUVVGUkxFTkJRVU03V1VGQlJTeG5Ra0ZCWjBJc1IwRkJSeXhQUVVGUExFTkJRVU03VVVGRGVrVXNTVUZCU1N4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFOUJRVThzUzBGQlN5eFJRVUZSTEVOQlFVTTdXVUZCUlN4UFFVRlBMRWRCUVVjc1UwRkJVeXhEUVVGRE8xRkJSV3hGTEVsQlFVa3NXVUZCV1N4SlFVRkpMRWxCUVVrc1JVRkJSVHRaUVVWMFFpeEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1NVRkJTU3hMUVVGTExGRkJRVkVzUTBGQlF5eEpRVUZKTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1QwRkJUeXhMUVVGTExGRkJRVkVzUTBGQlF5eEZRVUZGTzJkQ1FVTm9SaXg1UWtGQlZTeERRVUZETEVsQlFVa3NSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dGhRVU51UXp0cFFrRkJUU3hKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNTVUZCU1N4TFFVRkxMRkZCUVZFc1EwRkJReXhGUVVGRk8yZENRVU16UXl4NVFrRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMkZCUXpGQ08ybENRVUZOTEVsQlFVa3NUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhQUVVGUExFdEJRVXNzVVVGQlVTeERRVUZETEVWQlFVVTdaMEpCUTJwRUxIbENRVUZWTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WVVGRE4wSTdPMmRDUVVGTkxIbENRVUZWTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVVeFFpeEpRVUZKTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1QwRkJUeXhMUVVGTExGRkJRVkVzUTBGQlF5eEpRVUZKTEU5QlFVOHNRMEZCUXl4alFVRmpMRVZCUVVVN1owSkJRM0JGTEhsQ1FVRmpMRU5CUVVNc1NVRkJTU3hGUVVGRkxHZENRVUZuUWl4RlFVRkZMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF6dGhRVU5zUlR0VFFVTktPMUZCUlVRc1NVRkJTU3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEU5QlFVOHNTMEZCU3l4UlFVRlJMRWxCUVVrc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF6dFpRVUZGTEU5QlFVOHNTVUZCU1N4RFFVRkRPMUZCVVdoR0xFMUJRVTBzWlVGQlowSXNVMEZCVVN4SlFVRkpPMWxCTmtJNVFpeFpRVUZaTEVkQlFVY3NUVUZCWVR0blFrRkRlRUlzUzBGQlN5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNN1owSkJTRXdzYlVKQlFXTXNSMEZCV1N4bFFVRmxMRU5CUVVNc1kwRkJZeXhEUVVGRE8yZENRVWx5UlN4SlFVRkpMRmRCUVZjc1IwRkJSeXhOUVVGTkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1EwRkJRenRuUWtGRE0wTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1YwRkJWeXhaUVVGWkxFMUJRVTBzUTBGQlF6dHZRa0ZCUlN4WFFVRlhMRWRCUVVjc1JVRkJSU3hEUVVGRE8yZENRVU4yUkN4NVFrRkJZeXhEUVVGRExFbEJRVWtzUlVGQlJTeHhRa0ZCY1VJc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEYkVRc1NVRkJTU3hsUVVGbExFZEJRVWNzYzBKQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1owSkJRMnBGTEdWQlFXVXNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExHVkJRV1VzUlVGQlJTeFhRVUZYTEVOQlFVTXNRMEZCUXp0blFrRkRPVVFzU1VGQlNTeHpRa0ZCYzBJc1NVRkJTU3hKUVVGSkxFVkJRVVU3YjBKQlEyaERMRTFCUVUwc1kwRkJZeXhIUVVGSExFbEJRVWtzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhIUVVGSExFVkJRVVVzU1VGQlNTeEZRVUZGTEZkQlFWY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenR2UWtGRE5VVXNaVUZCWlN4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zWlVGQlpTeEZRVUZGTEdOQlFXTXNRMEZCUXl4RFFVRkRPMmxDUVVOd1JUdG5Ra0ZEUkN4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeGxRVUZsTEVOQlFVTXNRMEZCUXp0blFrRkRja01zZVVKQlFXTXNRMEZCUXl4SlFVRkpMRVZCUVVVc2MwSkJRWE5DTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMjVFTEVsQlFVa3NjVUpCUVhGQ0xFbEJRVWtzU1VGQlNUdHZRa0ZCVVN4SlFVRkxMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJRenRaUVVOc1JpeERRVUZET3p0UlFXcERjMElzTWtKQlFWY3NSMEZCVVN4SlFVRkpMRU5CUVVNN1VVRlRlRUlzT0VKQlFXTXNSMEZCV1N4elFrRkJWeXhEUVVGRExHVkJRV1VzUlVGQlJTeG5Ra0ZCWjBJc1EwRkJReXhEUVVGRE8xRkJORUp3Unl4SlFVRkpMSFZDUVVGVExFVkJRVVVzU1VGQlNTeEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZPMWxCUTNKRExHTkJRV01zUTBGQlF5eE5RVUZOTEVOQlFVTXNNa0pCUVc5Q0xFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMR1ZCUVdVc1JVRkJSVHRuUWtGRGNFVXNUMEZCVHl4RlFVRkZMR1ZCUVdVc1EwRkJReXhQUVVGUE8yRkJRMjVETEVOQlFVTXNRMEZCUXp0VFFVTk9PMUZCUTBRc1QwRkJUeXhsUVVGbExFTkJRVU03U1VGRE0wSXNRMEZCUXl4RFFVRkRPMEZCUTA0c1EwRkJRenRCUVRWR1JDd3dRMEUwUmtNN1FVRkZWU3hSUVVGQkxFdEJRVXNzUjBGQlJ5eHZRa0ZCU3l4RFFVRkRPMEZCUTJRc1VVRkJRU3hIUVVGSExFZEJRVWNzYTBKQlFVY3NRMEZCUXp0QlFVTldMRkZCUVVFc1NVRkJTU3hIUVVGSExHMUNRVUZKTEVOQlFVTTdRVUZEV2l4UlFVRkJMRkZCUVZFc1IwRkJSeXgxUWtGQlVTeERRVUZETzBGQlEzQkNMRkZCUVVFc1NVRkJTU3hIUVVGSExHMUNRVUZKTEVOQlFVTTdRVUZEV2l4UlFVRkJMRkZCUVZFc1IwRkJSeXgxUWtGQlVTeERRVUZETzBGQlEzQkNMRkZCUVVFc1dVRkJXU3hIUVVGSExESkNRVUZaTEVOQlFVTTdRVUZETlVJc1VVRkJRU3hOUVVGTkxFZEJRVWNzY1VKQlFVMHNRMEZCUXp0QlFVTm9RaXhSUVVGQkxGTkJRVk1zUjBGQlJ5eDNRa0ZCVXl4RFFVRkRPMEZCVjJwRExGTkJRVk1zZVVKQlFYbENMRU5CUVVNc1RVRkJWeXhGUVVGRkxFZEJRVmNzUlVGQlJTeFRRVUYzUWp0SlFVVnFSaXhOUVVGTkxGRkJRVkVzUjBGQlJ5eFBRVUZQTEVOQlFVTXNkMEpCUVhkQ0xFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUnk5RUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRk5CUVZNc1JVRkJSU3hOUVVGTkxFTkJRVU03VVVGQlJTeDVRa0ZCWXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hUUVVGVExFVkJRVVVzU1VGQlNTeExRVUZMTEVWQlFWVXNRMEZCUXl4RFFVRkRPMGxCUTNCSExFMUJRVTBzUjBGQlJ5eEhRVUZITEhOQ1FVRlhMRU5CUVVNc1RVRkJUU3hGUVVGRkxGTkJRVk1zUTBGQllTeERRVUZETzBsQlEzWkVMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRla0lzVDBGQlR5eFJRVUZSTEVOQlFVTTdRVUZEY0VJc1EwRkJRenRCUVZkRUxGTkJRVk1zVFVGQlRTeERRVUZETEZGQlFXRXNSVUZCUlN4SFFVRnZRaXhGUVVGRkxGRkJRVzFDTzBsQlEzQkZMRWxCUVVrc1EwRkJReXh6UWtGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4eFFrRkJjVUlzUTBGQlF5eEZRVUZGTzFGQlF5OURMRTFCUVUwc1pVRkJaU3hIUVVGSExITkNRVUZYTEVOQlFVTXNVVUZCVVN4RlFVRkZMR2xDUVVGcFFpeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUTNaRkxFOUJRVThzWlVGQlpTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8wdEJRekZETzBsQlEwUXNUVUZCVFN4VFFVRlRMRWRCUVVjc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBsQlEycERMRWxCUVVrc1VVRkJVU3hKUVVGSkxGRkJRVkVzUTBGQlF5eEhRVUZITEVWQlFVVTdVVUZETVVJc1QwRkJUeXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRMUVVOMFF6dFRRVUZOTzFGQlEwZ3NUVUZCVFN4TFFVRkxMRWRCUVVjc09FSkJRVzFDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRM1pFTEVsQlFVa3NTMEZCU3p0WlFVRkZMRTlCUVU4c1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFGQlEyeERMRTlCUVU4c1UwRkJVeXhEUVVGRE8wdEJRM0JDTzBGQlEwd3NRMEZCUXp0QlFXTkVMRk5CUVZNc1RVRkJUU3hEUVVGRExGRkJRV0VzUlVGQlJTeEhRVUZ2UWl4RlFVRkZMRTFCUVZjc1JVRkJSU3hSUVVGdFFqdEpRVVZxUml4SlFVRkpMRU5CUVVNc2MwSkJRVmNzUTBGQlF5eFJRVUZSTEVWQlFVVXNjVUpCUVhGQ0xFTkJRVU1zUlVGQlJUdFJRVU12UXl4TlFVRk5MR1ZCUVdVc1IwRkJSeXh6UWtGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4cFFrRkJhVUlzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTjJSU3hOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEdWQlFXVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTnNSQ3g1UWtGQll5eERRVUZETEZGQlFWRXNSVUZCUlN4cFFrRkJhVUlzUlVGQlJTeGxRVUZsTEVOQlFVTXNRMEZCUXp0UlFVTTNSQ3hQUVVGUE8wdEJRMVk3U1VGRFJDeE5RVUZOTEZOQlFWTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03U1VGSGFrTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzVFVGQlRUdFJRVUZGTEU5QlFVODdTVUZETTBNc1RVRkJUU3hMUVVGTExFZEJRVWNzT0VKQlFXMUNMRU5CUVVNc1VVRkJVU3hGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZETzBsQlEzWkVMRTFCUVUwc1kwRkJZeXhIUVVGSExITkNRVUZYTEVOQlFVTXNVVUZCVVN4RlFVRkZMR3RDUVVGclFpeERRVUZETEVOQlFVTTdTVUZEYWtVc1RVRkJUU3huUWtGQlowSXNSMEZCUnl4alFVRmpMRU5CUVVNc1EwRkJReXhEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF6dEpRVVZ3Uml4SlFVRkpMRTFCUVUwc1dVRkJXU3hwUWtGQlR5eEZRVUZGTzFGQlJUTkNMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUTNCRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1MwRkROMEk3U1VGRlJDeExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJSWFpDTEVsQlFVa3NaMEpCUVdkQ08xRkJRVVVzWjBKQlFXZENMRU5CUVVNc1pVRkJaU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlJTOUVMRWxCUVVrc1VVRkJVU3hKUVVGSkxGRkJRVkVzUTBGQlF5eEhRVUZITzFGQlFVVXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMEZCUTNSRkxFTkJRVU1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IG51bmp1Y2tzID0gdHNsaWJfMS5fX2ltcG9ydFN0YXIocmVxdWlyZShcIm51bmp1Y2tzXCIpKTtcbmZ1bmN0aW9uIGlzTm9kZUpTKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaXNOb2RlSlMgPSBpc05vZGVKUztcbmZ1bmN0aW9uIGlzQnJvd3NlcigpIHtcbiAgICByZXR1cm4gIWlzTm9kZUpTKCk7XG59XG5leHBvcnRzLmlzQnJvd3NlciA9IGlzQnJvd3NlcjtcbmV4cG9ydHMudGVtcGxhdGVFbnZpcm9ubWVudCA9ICgoKSA9PiB7XG4gICAgY29uc3Qgbm9DYWNoZSA9IGdsb2JhbC5wcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zdCBlbnYgPSBuZXcgbnVuanVja3MuRW52aXJvbm1lbnQoe1xuICAgICAgICBnZXRTb3VyY2U6IChwYXRoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyBzcmM6IHJlcXVpcmUocGF0aCksIHBhdGgsIG5vQ2FjaGUgfTtcbiAgICAgICAgfVxuICAgIH0sIHsgbm9DYWNoZSB9KTtcbiAgICBlbnYuYWRkRmlsdGVyKCdqc29uJywgKHZhbHVlLCBzcGFjZXMpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgbnVuanVja3MucnVudGltZS5TYWZlU3RyaW5nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBudW5qdWNrcy5ydW50aW1lLlNhZmVTdHJpbmcoSlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIHNwYWNlcykpO1xuICAgIH0pO1xuICAgIHJldHVybiBlbnY7XG59KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWlc1MmFYSnZibTFsYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wzVjBhV3h6TDJWdWRtbHliMjV0Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxESkVRVUZ4UXp0QlFWRnlReXhUUVVGblFpeFJRVUZSTzBsQlEzQkNMRWxCUVVrc1QwRkJUeXhOUVVGTkxFdEJRVXNzVjBGQlZ5eEpRVUZKTEU5QlFVOHNUMEZCVHl4TFFVRkxMRkZCUVZFc1JVRkJSVHRSUVVNNVJDeFBRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTm1PMGxCUTBRc1QwRkJUeXhMUVVGTExFTkJRVU03UVVGRGFrSXNRMEZCUXp0QlFVeEVMRFJDUVV0RE8wRkJVVVFzVTBGQlowSXNVMEZCVXp0SlFVTnlRaXhQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdRVUZEZGtJc1EwRkJRenRCUVVaRUxEaENRVVZETzBGQlMxa3NVVUZCUVN4dFFrRkJiVUlzUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlR0SlFVTnlReXhOUVVGTkxFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFdEJRVXNzWVVGQllTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU0zUlN4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZEYWtNc1UwRkJVeXhGUVVGRkxFTkJRVU1zU1VGQldTeEZRVUZGTEVWQlFVVTdXVUZEZUVJc1QwRkJUeXhGUVVGRkxFZEJRVWNzUlVGQlJTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFOUJRVThzUlVGQlJTeERRVUZETzFGQlEycEVMRU5CUVVNN1MwRkRTaXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVVm9RaXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJUdFJRVU53UXl4SlFVRkpMRXRCUVVzc1dVRkJXU3hSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNSVUZCUlR0WlFVTTVReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMU5CUXpWQ08xRkJRMFFzVDBGQlR5eEpRVUZKTEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEyaEdMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMGdzVDBGQlR5eEhRVUZITEVOQlFVTTdRVUZEWml4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGRlZmluZU1ldGFkYXRhKHRhcmdldCwga2V5LCB2YWwpIHtcbiAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKGtleSwgdmFsLCB0YXJnZXQpO1xufVxuZXhwb3J0cy5kZWZpbmVNZXRhZGF0YSA9IGRlZmluZU1ldGFkYXRhO1xuZnVuY3Rpb24gZ2V0TWV0YWRhdGEodGFyZ2V0LCBrZXkpIHtcbiAgICByZXR1cm4gUmVmbGVjdC5nZXRNZXRhZGF0YShrZXksIHRhcmdldCk7XG59XG5leHBvcnRzLmdldE1ldGFkYXRhID0gZ2V0TWV0YWRhdGE7XG5mdW5jdGlvbiBkZWZpbmVXaWxkY2FyZE1ldGFkYXRhKHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoa2V5LCB2YWx1ZSwgdGFyZ2V0KTtcbn1cbmV4cG9ydHMuZGVmaW5lV2lsZGNhcmRNZXRhZGF0YSA9IGRlZmluZVdpbGRjYXJkTWV0YWRhdGE7XG5mdW5jdGlvbiBnZXRXaWxkY2FyZE1ldGFkYXRhKHRhcmdldCwga2V5KSB7XG4gICAgcmV0dXJuIFJlZmxlY3QuZ2V0TWV0YWRhdGEoa2V5LCB0YXJnZXQpO1xufVxuZXhwb3J0cy5nZXRXaWxkY2FyZE1ldGFkYXRhID0gZ2V0V2lsZGNhcmRNZXRhZGF0YTtcbmZ1bmN0aW9uIGdldERlc2lnblR5cGUodGFyZ2V0LCBrZXkpIHtcbiAgICByZXR1cm4gUmVmbGVjdC5nZXRNZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIHRhcmdldCwga2V5KTtcbn1cbmV4cG9ydHMuZ2V0RGVzaWduVHlwZSA9IGdldERlc2lnblR5cGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV1YwWVdSaGRHRXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMM1YwYVd4ekwyMWxkR0ZrWVhSaExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCWjBsQkxGTkJRV2RDTEdOQlFXTXNRMEZCTkVNc1RVRkJVeXhGUVVGRkxFZEJRVTBzUlVGQlJTeEhRVUZyUWp0SlFVTXpSeXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03UVVGRE4wTXNRMEZCUXp0QlFVWkVMSGREUVVWRE8wRkJWMFFzVTBGQlowSXNWMEZCVnl4RFFVRTBReXhOUVVGVExFVkJRVVVzUjBGQlRUdEpRVU53Uml4UFFVRlBMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zUjBGQlJ5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMEZCUXpWRExFTkJRVU03UVVGR1JDeHJRMEZGUXp0QlFWVkVMRk5CUVdkQ0xITkNRVUZ6UWl4RFFVRkRMRTFCUVdNc1JVRkJSU3hIUVVGakxFVkJRVVVzUzBGQlZUdEpRVU0zUlN4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUlVGQlJTeExRVUZMTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkRMME1zUTBGQlF6dEJRVVpFTEhkRVFVVkRPMEZCVlVRc1UwRkJaMElzYlVKQlFXMUNMRU5CUVVNc1RVRkJZeXhGUVVGRkxFZEJRV003U1VGRE9VUXNUMEZCVHl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFZEJRVWNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0QlFVTTFReXhEUVVGRE8wRkJSa1FzYTBSQlJVTTdRVUZWUkN4VFFVRm5RaXhoUVVGaExFTkJRVU1zVFVGQll5eEZRVUZGTEVkQlFWYzdTVUZEY2tRc1QwRkJUeXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEdGQlFXRXNSVUZCUlN4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRE0wUXNRMEZCUXp0QlFVWkVMSE5EUVVWREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IGVudmlyb25tZW50XzEgPSByZXF1aXJlKFwifmJkby91dGlscy9lbnZpcm9ubWVudFwiKTtcbmZ1bmN0aW9uIHVjRmlyc3Qoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cbmV4cG9ydHMudWNGaXJzdCA9IHVjRmlyc3Q7XG5mdW5jdGlvbiBjYW1lbENhc2Uya2ViYWJDYXNlKHN0cikge1xuICAgIHN0ciA9IHN0ci5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbYS16MC05XXwoPz1bQS1aXSkpKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xufVxuZXhwb3J0cy5jYW1lbENhc2Uya2ViYWJDYXNlID0gY2FtZWxDYXNlMmtlYmFiQ2FzZTtcbmZ1bmN0aW9uIHBhc2NhbENhc2Uya2ViYWJDYXNlKHN0cikge1xuICAgIHN0ciA9IHVjRmlyc3Qoc3RyKTtcbiAgICByZXR1cm4gY2FtZWxDYXNlMmtlYmFiQ2FzZShzdHIpO1xufVxuZXhwb3J0cy5wYXNjYWxDYXNlMmtlYmFiQ2FzZSA9IHBhc2NhbENhc2Uya2ViYWJDYXNlO1xuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudEZyb21BcnJheShhcnJheSwgZWxlbWVudCkge1xuICAgIGNvbnN0IGluZGV4ID0gYXJyYXkuaW5kZXhPZihlbGVtZW50KTtcbiAgICBpZiAoaW5kZXggPj0gMClcbiAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbn1cbmV4cG9ydHMucmVtb3ZlRWxlbWVudEZyb21BcnJheSA9IHJlbW92ZUVsZW1lbnRGcm9tQXJyYXk7XG5mdW5jdGlvbiBnZXRQcm90b3R5cGVOYW1lc1JlY3Vyc2l2ZShvYmplY3QsIHByb3RvdHlwZXMgPSBbXSkge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChwcm90b3R5cGUpIHtcbiAgICAgICAgcHJvdG90eXBlcy5wdXNoKHByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICAgICAgZ2V0UHJvdG90eXBlTmFtZXNSZWN1cnNpdmUocHJvdG90eXBlLCBwcm90b3R5cGVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3RvdHlwZXM7XG59XG5leHBvcnRzLmdldFByb3RvdHlwZU5hbWVzUmVjdXJzaXZlID0gZ2V0UHJvdG90eXBlTmFtZXNSZWN1cnNpdmU7XG5mdW5jdGlvbiBpbmNsdWRlc01lbWJlck9mTGlzdChzZWFyY2gsIGxpc3QsIGV4dGVuc2lvbiA9ICcnKSB7XG4gICAgZm9yIChjb25zdCBtZW1iZXIgb2YgbGlzdCkge1xuICAgICAgICBpZiAoc2VhcmNoLmluY2x1ZGVzKGAke21lbWJlcn0ke2V4dGVuc2lvbn1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pbmNsdWRlc01lbWJlck9mTGlzdCA9IGluY2x1ZGVzTWVtYmVyT2ZMaXN0O1xuZnVuY3Rpb24gY29uc3RydWN0VHlwZU9mSFRNTEF0dHJpYnV0ZShvYmplY3QsIGtleSkge1xuICAgIGlmICghZW52aXJvbm1lbnRfMS5pc0Jyb3dzZXIoKSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHR5cGUgPSBtZXRhZGF0YV8xLmdldERlc2lnblR5cGUob2JqZWN0LCBrZXkpO1xuICAgIGNvbnN0IGF0dHJWYWx1ZSA9IG9iamVjdC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICBpZiAoYXR0clZhbHVlID09PSBudWxsKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBhdHRyaWJ1dGUgc2V0XCIpO1xuICAgIGxldCB2YWx1ZVRvU2V0ID0gYXR0clZhbHVlO1xuICAgIGlmICh0eXBlICYmIHR5cGUubmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChbXCJOdW1iZXJcIiwgXCJCb29sZWFuXCIsIFwiT2JqZWN0XCIsIFwiQXJyYXlcIl0uaW5jbHVkZXModHlwZS5uYW1lKSkge1xuICAgICAgICAgICAgdmFsdWVUb1NldCA9IEpTT04ucGFyc2UoYXR0clZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZS5uYW1lID09PSBcIkJhc2VDb25zdHJ1Y3RvclwiKSB7XG4gICAgICAgICAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBvYmouY2xhc3NOYW1lO1xuICAgICAgICAgICAgaWYgKCFjbGFzc05hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2xhc3NOYW1lIGlzIG1pc3NpbmcgaW4gY29tcG9uZW50IGF0dHJpYnV0ZSB2YWx1ZVwiKTtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmouY2xhc3NOYW1lO1xuICAgICAgICAgICAgdmFsdWVUb1NldCA9IG5ldyAodHlwZS5uYW1lKShvYmopO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh2YWx1ZVRvU2V0ICYmIHR5cGUgJiYgdmFsdWVUb1NldC5jb25zdHJ1Y3Rvci5uYW1lICE9PSB0eXBlLm5hbWUpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImF0dHJpYnV0ZSB0eXBlIGVxdWFscyBub3QgZGVmaW5lZCB0eXBlXCIpO1xuICAgIHJldHVybiB2YWx1ZVRvU2V0O1xufVxuZXhwb3J0cy5jb25zdHJ1Y3RUeXBlT2ZIVE1MQXR0cmlidXRlID0gY29uc3RydWN0VHlwZU9mSFRNTEF0dHJpYnV0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRYUnBiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2ZFhScGJITXZkWFJwYkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTEd0RVFVRnZSRHRCUVVOd1JDeDNSRUZCYlVRN1FVRlRia1FzVTBGQlowSXNUMEZCVHl4RFFVRkRMRWRCUVZjN1NVRkRMMElzVDBGQlR5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGRFUXNRMEZCUXp0QlFVWkVMREJDUVVWRE8wRkJVMFFzVTBGQlowSXNiVUpCUVcxQ0xFTkJRVU1zUjBGQlZ6dEpRVU16UXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJwRUxFOUJRVThzUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl3NFFrRkJPRUlzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRCUVVNNVJTeERRVUZETzBGQlNFUXNhMFJCUjBNN1FVRlRSQ3hUUVVGblFpeHZRa0ZCYjBJc1EwRkJReXhIUVVGWE8wbEJRelZETEVkQlFVY3NSMEZCUnl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRGJrSXNUMEZCVHl4dFFrRkJiVUlzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTndReXhEUVVGRE8wRkJTRVFzYjBSQlIwTTdRVUZUUkN4VFFVRm5RaXh6UWtGQmMwSXNRMEZCUXl4TFFVRlpMRVZCUVVVc1QwRkJXVHRKUVVNM1JDeE5RVUZOTEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzBsQlEzSkRMRWxCUVVrc1MwRkJTeXhKUVVGSkxFTkJRVU03VVVGQlJTeExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU16UXl4RFFVRkRPMEZCU0VRc2QwUkJSME03UVVGVFJDeFRRVUZuUWl3d1FrRkJNRUlzUTBGQlF5eE5RVUZYTEVWQlFVVXNZVUZCZFVJc1JVRkJSVHRKUVVNM1JTeE5RVUZOTEZOQlFWTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlEyaEVMRWxCUVVrc1UwRkJVeXhGUVVGRk8xRkJRMWdzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlF6VkRMREJDUVVFd1FpeERRVUZETEZOQlFWTXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRMUVVOeVJEdEpRVU5FTEU5QlFVOHNWVUZCVlN4RFFVRkRPMEZCUTNSQ0xFTkJRVU03UVVGUVJDeG5SVUZQUXp0QlFWZEVMRk5CUVdkQ0xHOUNRVUZ2UWl4RFFVRkRMRTFCUVhsQ0xFVkJRVVVzU1VGQll5eEZRVUZGTEZsQlFXOUNMRVZCUVVVN1NVRkRiRWNzUzBGQlN5eE5RVUZOTEUxQlFVMHNTVUZCU1N4SlFVRkpMRVZCUVVVN1VVRkRka0lzU1VGQlNTeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1RVRkJUU3hIUVVGSExGTkJRVk1zUlVGQlJTeERRVUZETEVWQlFVVTdXVUZETVVNc1QwRkJUeXhKUVVGSkxFTkJRVU03VTBGRFpqdExRVU5LTzBsQlEwUXNUMEZCVHl4TFFVRkxMRU5CUVVNN1FVRkRha0lzUTBGQlF6dEJRVkJFTEc5RVFVOURPMEZCVjBRc1UwRkJaMElzTkVKQlFUUkNMRU5CUVVNc1RVRkJiVUlzUlVGQlJTeEhRVUZYTzBsQlEzcEZMRWxCUVVrc1EwRkJReXgxUWtGQlV5eEZRVUZGTzFGQlFVVXNUMEZCVHp0SlFVTjZRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eDNRa0ZCWVN4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU40UXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUlRORExFbEJRVWtzVTBGQlV5eExRVUZMTEVsQlFVazdVVUZCUlN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHdENRVUZyUWl4RFFVRkRMRU5CUVVNN1NVRkZOVVFzU1VGQlNTeFZRVUZWTEVkQlFWRXNVMEZCVXl4RFFVRkRPMGxCUTJoRExFbEJRVWtzU1VGQlNTeEpRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRXRCUVVzc1UwRkJVeXhGUVVGRk8xRkJRMnBETEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1UwRkJVeXhGUVVGRkxGRkJRVkVzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlF6bEVMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMU5CUTNSRE8xRkJRMFFzU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4TFFVRkxMR2xDUVVGcFFpeEZRVUZGTzFsQlEycERMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1dVRkRiRU1zVFVGQlRTeFRRVUZUTEVkQlFVY3NSMEZCUnl4RFFVRkRMRk5CUVZNc1EwRkJRenRaUVVOb1F5eEpRVUZKTEVOQlFVTXNVMEZCVXp0blFrRkJSU3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEcxRVFVRnRSQ3hEUVVGRExFTkJRVU03V1VGRGNrWXNUMEZCVHl4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRE8xbEJRM0pDTEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMU5CUTNKRE8wdEJRMG83U1VGRFJDeEpRVUZKTEZWQlFWVXNTVUZCU1N4SlFVRkpMRWxCUVVrc1ZVRkJWU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWxCUVVrN1VVRkJSU3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhkRFFVRjNReXhEUVVGRExFTkJRVU03U1VGREwwZ3NUMEZCVHl4VlFVRlZMRU5CUVVNN1FVRkRkRUlzUTBGQlF6dEJRWFJDUkN4dlJVRnpRa01pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xud2luZG93LnZpcnR1YWxSb3V0ZXMgPSBbXCJDb25maWdcIiwgXCJHYW1lTG9iYnlcIiwgXCJIb21lXCJdO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZG1seWRIVmhiRVZ1ZEhKNVVHOXBiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTkyWVhJdmRHMXdMM1pwY25SMVlXeEZiblJ5ZVZCdmFXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlRTeE5RVUZQTEVOQlFVTXNZVUZCWVN4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRExGZEJRVmNzUlVGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXlKOSJdLCJzb3VyY2VSb290IjoiIn0=