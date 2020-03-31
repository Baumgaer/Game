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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _client_lib_BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./source/app/client/ts/lib/BaseComponent.ts");
/* harmony import */ var _client_lib_BaseComponent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client_lib_BaseComponent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./source/app/utils/decorators.ts");
/* harmony import */ var _bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_2__);




let TestComponent = class TestComponent extends Object(_client_lib_BaseComponent__WEBPACK_IMPORTED_MODULE_1__["BaseComponentFactory"])(HTMLElement) {
    constructor() {
        super(...arguments);
        this.templateString = __webpack_require__("./out/app/client/views/testComponent.njk");
        this.test = "lalala";
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_2__["property"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TestComponent.prototype, "templateString", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_2__["property"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TestComponent.prototype, "test", void 0);
TestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_bdo_utils_decorators__WEBPACK_IMPORTED_MODULE_2__["baseConstructor"])()
], TestComponent);
/* harmony default export */ __webpack_exports__["default"] = (TestComponent);


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
        tslib_1.__metadata("design:type", typeof (_a = typeof IndexStructure !== "undefined" && IndexStructure) === "function" ? _a : Object)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9CYXNlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRCQUEwQjtBQUMxQix1Q0FBa0Q7QUFDbEQsc0RBQTREO0FBQzVELGtEQUF1RTtBQUd2RSw2Q0FBbUg7QUFDbkgsMENBQXNIO0FBVXRILFNBQWdCLG9CQUFvQixDQUF5QyxlQUFzQjs7SUFRL0YsTUFBZSxhQUFjLFNBQVEsZUFBZTtRQXFJaEQsWUFBWSxHQUFHLElBQVc7WUFDdEIsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFoRkMsT0FBRSxHQUFXLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBU3RDLFNBQUksR0FBd0MsRUFBRSxDQUFDO1lBUXRDLG9CQUFlLEdBQVksSUFBSSxDQUFDO1lBU2hDLGNBQVMsR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFVcEMsbUJBQWMsR0FBc0IsMEJBQTBCLENBQUM7UUE2Q3hILENBQUM7UUFsR0QsSUFBVyxVQUFVO1lBQ2pCLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7WUFDeEIsTUFBTSxVQUFVLEdBQUcsc0JBQVcsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztZQUMxRCxJQUFJLFVBQVUsRUFBRTtnQkFDWixLQUFLLE1BQU0sSUFBSSxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDbEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsOEJBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ3BEO2FBQ0o7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBc0RELElBQWMsUUFBUTtZQUNsQixNQUFNLFFBQVEsR0FBRyxzQkFBVyxDQUFD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

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvdXRpbHMvZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQiwwQ0FBdUQ7QUFJdkQsOERBQXdGO0FBQ3hGLGtEQUFrRTtBQUNsRSxvREFBK0g7QUFFL0gsK0NBWXNCO0FBa0J0QixTQUFnQixPQUFPLENBQUMsU0FBeUIsRUFBRTtJQUMvQyxPQUFPLENBQUMsTUFBVyxFQUFFLEdBQW9CLEVBQUUsRUFBRTtRQUN6QyxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMsTUFBTSxpQkFBaUIsR0FBRyw0QkFBZ0IsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUM3RixxQ0FBeUIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQy9FLENBQUMsQ0FBQztBQUNOLENBQUM7QUFORCwwQkFNQztBQWdCRCxTQUFnQixRQUFRLENBQUMsUUFBMkIsRUFBRSxNQUF3QjtJQUMxRSxPQUFPLENBQUMsTUFBVyxFQUFFLEdBQW9CLEVBQUUsRUFBRTtRQUN6QyxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFHakMsSUFBSSxRQUFRLElBQUksQ0FBQyxDQUFDLFFBQVEsWUFBWSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxNQUFNLEdBQUcsUUFBUSxDQUFDO1FBQzlFLElBQUksUUFBUSxJQUFJLENBQUMsQ0FBQyxRQUFRLFlBQVksUUFBUSxDQUFDO1lBQUUsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUN0RSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksTUFBTSxDQUFDO1lBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUd4RCxNQUFNLGlCQUFpQixHQUFHLDRCQUFnQixDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN6RyxxQ0FBeUIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2hGLENBQUMsQ0FBQztBQUNOLENBQUM7QUFiRCw0QkFhQztBQXFCRCxTQUFnQixTQUFTLENBQUMsUUFBMkIsRUFBRSxNQUF5QjtJQUM1RSxPQUFPLENBQUMsTUFBVyxFQUFFLEdBQW9CLEVBQUUsRUFBRTtRQUN6QyxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFHakMsSUFBSSxRQUFRLElBQUksQ0FBQyxDQUFDLFFBQVEsWUFBWSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxNQUFNLEdBQUcsUUFBUSxDQUFDO1FBQzlFLElBQUksUUFBUSxJQUFJLENBQUMsQ0FBQyxRQUFRLFlBQVksUUFBUSxDQUFDO1lBQUUsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUN0RSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksTUFBTSxDQUFDO1lBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUd4RCxJQUFJLFFBQVEsWUFBWSxRQUFRLElBQUksTUFBTTtZQUFFLG9CQUFLLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQzthQUM1RSxJQUFJLFFBQVEsWUFBWSxRQUFRO1lBQUUsb0JBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDL0QsSUFBSSxNQUFNO1lBQUUsb0JBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7O1lBQ3ZDLG9CQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFHMUIsTUFBTSxpQkFBaUIsR0FBRyw0QkFBZ0IsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDekcscUNBQXlCLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUNqRixDQUFDLENBQUM7QUFDTixDQUFDO0FBbkJELDhCQW1CQztBQWNELFNBQWdCLGVBQWUsQ0FBQyxJQUFrQixFQUFFLE1BQWdCLEVBQUUsUUFBZ0IsQ0FBQztJQUVuRixPQUFPLENBQUMsSUFBUyxFQUFFLEVBQUU7UUFDakIsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLDZCQUFpQixDQUFDLFNBQVMsQ0FBQztZQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUdoRyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQztZQUFFLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDckQsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUM7WUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3RELElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDO1lBQUUsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN6RixJQUFJLE1BQU0sSUFBSSxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQztZQUFFLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDM0QsSUFBSSxNQUFNLElBQUksQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUM7WUFBRSxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBRS9ELElBQUksc0JBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUVsQixJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxFQUFFO2dCQUM5RSx5QkFBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsQztpQkFBTSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxFQUFFO2dCQUMzQyx5QkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFCO2lCQUFNLElBQUksTUFBTSxJQUFJLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLEVBQUU7Z0JBQy9DLHlCQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUI7O2dCQUFNLHlCQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUcxQixJQUFJLE1BQU0sSUFBSSxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxFQUFFO2dCQUN4QyxNQUFNLGtCQUFrQixHQUFHLHNCQUFXLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7Z0JBQy9ELE1BQU0sZ0JBQWdCLEdBQUcsc0JBQVcsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBQzNELHlCQUFjLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxjQUFjLElBQUksa0JBQWtCLElBQUksU0FBUyxDQUFDLENBQUM7Z0JBQ2pHLHlCQUFjLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLENBQUMsWUFBWSxJQUFJLGdCQUFnQixJQUFJLFNBQVMsQ0FBQyxDQUFDO2FBQzlGO1NBQ0o7UUFDRCxJQUFJLE1BQU0sSUFBSSxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFN0UsTUFBTSxlQUFlLEdBQUcsd0NBQXNCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTVELElBQUksdUJBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuQixjQUFjLENBQUMsTUFBTSxDQUFDLDJCQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxlQUFlLEVBQUU7Z0JBQ3BFLE9BQU8sRUFBRSxlQUFlLENBQUMsT0FBTzthQUNuQyxDQUFDLENBQUM7U0FDTjtRQUNELE9BQU8sZUFBZSxDQUFDO0lBQzNCLENBQUMsQ0FBQztBQUNOLENBQUM7QUExQ0QsMENBMENDO0FBRVUsUUFBQSxLQUFLLEdBQUcsb0JBQUssQ0FBQztBQUNkLFFBQUEsR0FBRyxHQUFHLGtCQUFHLENBQUM7QUFDVixRQUFBLElBQUksR0FBRyxtQkFBSSxDQUFDO0FBQ1osUUFBQSxRQUFRLEdBQUcsdUJBQVEsQ0FBQztBQUNwQixRQUFBLElBQUksR0FBRyxtQkFBSSxDQUFDO0FBQ1osUUFBQSxRQUFRLEdBQUcsdUJBQVEsQ0FBQztBQUNwQixRQUFBLFlBQVksR0FBRywyQkFBWSxDQUFDO0FBQzVCLFFBQUEsTUFBTSxHQUFHLHFCQUFNLENBQUM7QUFDaEIsUUFBQSxTQUFTLEdBQUcsd0JBQVMsQ0FBQyJ9

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWV3b3JrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC91dGlscy9mcmFtZXdvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBMkM7QUFDM0Msa0RBQWlFO0FBQ2pFLGdEQUE4RDtBQUM5RCw4Q0FBMkQ7QUFFM0QsMENBQXdDO0FBQ3hDLHdEQUFtRDtBQUNuRCxrREFBK0c7QUE4Qy9HLFNBQWdCLGdCQUFnQixDQUs5QixNQUFTLEVBQUUsR0FBTSxFQUFFLFNBQVksRUFBRSxNQUFTO0lBRXhDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7UUFBRSx5QkFBYyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzFGLE1BQU0sR0FBRyxHQUFHLHNCQUFXLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBbUMsQ0FBQztJQUM3RSxNQUFNLG9CQUFvQixHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hELE1BQU0sUUFBUSxHQUFHLFlBQUssQ0FBQyxvQkFBb0IsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2QixPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDO0FBYkQsNENBYUM7QUFhRCxTQUFnQixNQUFNLENBQXFELFFBQVcsRUFBRSxHQUFNLEVBQUUsS0FBYSxFQUFFO0lBQzNHLElBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixJQUFJLEVBQUU7UUFBRSxTQUFTLEdBQUcsR0FBRyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUM7SUFDbkMsSUFBSSxDQUFDLHNCQUFXLENBQUMsUUFBUSxFQUFFLHFCQUFxQixDQUFDLEVBQUU7UUFDL0MsTUFBTSxlQUFlLEdB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

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvR2FtZVdpbmRvdy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1Rlc3RDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvY29tcG9uZW50cy9WaWV3TGluay50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1ZpZXdSb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9DbGllbnRNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQ2xpZW50Um91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0NvbmZpZ01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0RhdGFiYXNlTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL21vZGVscyBzeW5jIF5cXC5cXC8uKlxcLnRzJCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdDEudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzIHN5bmMgXlxcLlxcLy4qXFwudHMkIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9Db25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0dhbWVMb2JieS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvSG9tZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy91dGlscy91dGlsLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0F0dHJpYnV0ZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Db25maWdNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0JET0RhdGFiYXNlTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvQkRPTWFwQ2FjaGUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvQkRPTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvQkRPUm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvQmFzZUNvbnN0cnVjdG9yLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0JpbmRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvRXJyb3JzLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0ZpZWxkLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL01vZGVsUmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvTW9kaWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL1Byb3BlcnR5LnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL1dhdGNoZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9tb2RlbHMvQkRPVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL21vZGVscy9CRE9UZXN0MS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL21vZGVscy9DZWxsLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbW9kZWxzL0NodW5rLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvcm91dGVzL0JET0NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3JvdXRlcy9CRE9HYW1lTG9iYnkudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9yb3V0ZXMvQkRPSG9tZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3V0aWxzIHN5bmMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscy9kZWNvcmF0b3JzLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvdXRpbHMvZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscy9mcmFtZXdvcmsudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscy9tZXRhZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3V0aWxzL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vdmFyL3RtcC92aXJ0dWFsRW50cnlQb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE1BQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCs0STs7Ozs7Ozs7QUM3RzlCO0FBQ2I7QUFDQSwyQ0FBMkMsMlEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvclwiLFwidGVtcGxhdGVzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYWYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXItZHouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXItbHlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItbWEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYm1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vYnMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vZGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZGUtYXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZW4tU0dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1TRy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hLCBfYjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5cInVzZSBzdHJpY3RcIjtcbmNvbnN0IEJhc2VDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9CYXNlQ29tcG9uZW50XCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMiA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBCQUJZTE9OID0gdHNsaWJfMS5fX2ltcG9ydFN0YXIocmVxdWlyZShcImJhYnlsb25qc1wiKSk7XG5sZXQgR2FtZVdpbmRvdyA9IGNsYXNzIEdhbWVXaW5kb3cgZXh0ZW5kcyBCYXNlQ29tcG9uZW50XzEuQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBuZXcgQkFCWUxPTi5FbmdpbmUodGhpcywgdHJ1ZSwge1xuICAgICAgICAgICAgYXVkaW9FbmdpbmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2NlbmUgPSB0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IGAxMDAlYDtcbiAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IGAxMDAlYDtcbiAgICAgICAgdGhpcy5lbmdpbmUucnVuUmVuZGVyTG9vcCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbmdpbmUucmVzaXplKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNyZWF0ZVNjZW5lKCkge1xuICAgICAgICBjb25zdCBzY2VuZSA9IG5ldyBCQUJZTE9OLlNjZW5lKHRoaXMuZW5naW5lKTtcbiAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IEJBQllMT04uRnJlZUNhbWVyYSgnY2FtZXJhJywgbmV3IEJBQllMT04uVmVjdG9yMygwLCA1LCAtMTApLCBzY2VuZSk7XG4gICAgICAgIGNhbWVyYS5zZXRUYXJnZXQoQkFCWUxPTi5WZWN0b3IzLlplcm8oKSk7XG4gICAgICAgIGNhbWVyYS5hdHRhY2hDb250cm9sKHRoaXMsIGZhbHNlKTtcbiAgICAgICAgY29uc3QgbGlnaHQgPSBuZXcgQkFCWUxPTi5IZW1pc3BoZXJpY0xpZ2h0KCdsaWdodDEnLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDEsIDApLCBzY2VuZSk7XG4gICAgICAgIGxpZ2h0LnNoYWRvd0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBzcGhlcmUgPSBCQUJZTE9OLk1lc2hCdWlsZGVyLkNyZWF0ZVNwaGVyZSgnc3BoZXJlJywgeyBzZWdtZW50czogMTYsIGRpYW1ldGVyOiAyIH0sIHNjZW5lKTtcbiAgICAgICAgc3BoZXJlLnBvc2l0aW9uLnkgPSAxO1xuICAgICAgICBCQUJZTE9OLk1lc2hCdWlsZGVyLkNyZWF0ZUdyb3VuZCgnZ3JvdW5kMScsIHsgaGVpZ2h0OiA2LCB3aWR0aDogNiwgc3ViZGl2aXNpb25zOiAyIH0sIHNjZW5lKTtcbiAgICAgICAgcmV0dXJuIHNjZW5lO1xuICAgIH1cbiAgICBjcmVhdGVUZXJyYWluKCkgeyB9XG59O1xuR2FtZVdpbmRvdy5leHRlbmRzID0gXCJjYW52YXNcIjtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18yLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdHlwZW9mIChfYSA9IHR5cGVvZiBCQUJZTE9OICE9PSBcInVuZGVmaW5lZFwiICYmIEJBQllMT04uRW5naW5lKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3QpXG5dLCBHYW1lV2luZG93LnByb3RvdHlwZSwgXCJlbmdpbmVcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18yLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdHlwZW9mIChfYiA9IHR5cGVvZiBCQUJZTE9OICE9PSBcInVuZGVmaW5lZFwiICYmIEJBQllMT04uU2NlbmUpID09PSBcImZ1bmN0aW9uXCIgPyBfYiA6IE9iamVjdClcbl0sIEdhbWVXaW5kb3cucHJvdG90eXBlLCBcInNjZW5lXCIsIHZvaWQgMCk7XG5HYW1lV2luZG93ID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKClcbl0sIEdhbWVXaW5kb3cpO1xuZXhwb3J0cy5kZWZhdWx0ID0gR2FtZVdpbmRvdztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVIyRnRaVmRwYm1SdmR5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMMk52YlhCdmJtVnVkSE12UjJGdFpWZHBibVJ2ZHk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxEWkVRVUZwUlR0QlFVTnFSU3h6UkVGQmQwUTdRVUZEZUVRc2MwUkJRV2xFTzBGQlEycEVMREpFUVVGeFF6dEJRVlZ5UXl4SlFVRnhRaXhWUVVGVkxFZEJRUzlDTEUxQlFYRkNMRlZCUVZjc1UwRkJVU3h2UTBGQmIwSXNRMEZCUXl4cFFrRkJhVUlzUTBGQlF6dEpRVVF2UlRzN1VVRnRRakJDTEZkQlFVMHNSMEZCYlVJc1NVRkJTU3hQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVN1dVRkRNVVVzVjBGQlZ5eEZRVUZGTEVsQlFVazdVMEZEY0VJc1EwRkJReXhEUVVGRE8xRkJVMjFDTEZWQlFVc3NSMEZCYTBJc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzBsQmVVUndSU3hEUVVGRE8wbEJiRVJWTEdsQ1FVRnBRanRSUVVOd1FpeExRVUZMTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzUTBGQlF6dFJRVU14UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZETTBJc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUXpGQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWRCUVVjc1JVRkJSVHRaUVVNelFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8xRkJRM2hDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTBnc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0UlFVTnlRaXhOUVVGTkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzUlVGQlJUdFpRVU51UXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTTdXVUZETDBJc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUTNKRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXp0SlFWTlRMRmRCUVZjN1VVRkZha0lzVFVGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVVTNReXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEU5QlFVOHNRMEZCUXl4VlFVRlZMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkZka1lzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZGZWtNc1RVRkJUU3hEUVVGRExHRkJRV0VzUTBGQlF5eEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkZiRU1zVFVGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFGQlF6RkdMRXRCUVVzc1EwRkJReXhoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETzFGQlJUTkNMRTFCUVUwc1RVRkJUU3hIUVVGSExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxGRkJRVkVzUlVGQlJTeEZRVUZGTEVWQlFVVXNVVUZCVVN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFGQlJXaEhMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVjBRaXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRVZCUVVVc1dVRkJXU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUlRkR0xFOUJRVThzUzBGQlN5eERRVUZETzBsQlEycENMRU5CUVVNN1NVRlJVeXhoUVVGaExFdEJRVXNzUTBGQlF6dERRVU5vUXl4RFFVRkJPMEZCTjBVd1FpeHJRa0ZCVHl4SFFVRlhMRkZCUVZFc1EwRkJRenRCUVZOMFF6dEpRVUZZTEhGQ1FVRlJMRVZCUVVVN01FUkJRVzFDTEU5QlFVOHNiMEpCUVZBc1QwRkJUeXhEUVVGRExFMUJRVTA3TUVOQlJYcERPMEZCVTFNN1NVRkJXQ3h4UWtGQlVTeEZRVUZGT3pCRVFVRnJRaXhQUVVGUExHOUNRVUZRTEU5QlFVOHNRMEZCUXl4TFFVRkxPM2xEUVVGelFqdEJRVGRDTDBNc1ZVRkJWVHRKUVVRNVFpdzBRa0ZCWlN4RlFVRkZPMGRCUTBjc1ZVRkJWU3hEUVhOR09VSTdhMEpCZEVadlFpeFZRVUZWSW4wPSIsImltcG9ydCB7IEJhc2VDb21wb25lbnRGYWN0b3J5IH0gZnJvbSAnfmNsaWVudC9saWIvQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgeyBiYXNlQ29uc3RydWN0b3IgfSBmcm9tICd+YmRvL3V0aWxzL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICd+YmRvL3V0aWxzL2RlY29yYXRvcnMnO1xuXG4vKipcbiAqIFRlc3RcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgVGVzdENvbXBvbmVudFxuICogQGV4dGVuZHMge0Jhc2VDb21wb25lbnRGYWN0b3J5KEhUTUxFbGVtZW50KX1cbiAqL1xuQGJhc2VDb25zdHJ1Y3RvcigpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTEVsZW1lbnQpIHtcblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQG1lbWJlcm9mIFRlc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoKSBwcm90ZWN0ZWQgdGVtcGxhdGVTdHJpbmcgPSByZXF1aXJlKCd+c3RhdGljL3ZpZXdzL3Rlc3RDb21wb25lbnQubmprJyk7XG5cbiAgICAvKipcbiAgICAgKiBKdXN0IGEgdGVzdCBmb3IgdGhlIHRlbXBsYXRlIHJlbmRlcmluZ1xuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFRlc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoKSBwcm90ZWN0ZWQgdGVzdDogc3RyaW5nID0gXCJsYWxhbGFcIjtcblxufVxuIiwiaW1wb3J0IHsgQmFzZUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tICd+Y2xpZW50L2xpYi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IHByb3BlcnR5LCBhdHRyaWJ1dGUsIGJhc2VDb25zdHJ1Y3Rvciwgd2F0Y2hlZCB9IGZyb20gJ35iZG8vdXRpbHMvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBUZXN0MSB9IGZyb20gXCJ+Y2xpZW50L21vZGVscy9UZXN0MVwiO1xuXG4vKipcbiAqIFRlc3RcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgVmlld0xpbmtcbiAqIEBleHRlbmRzIHtCYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MQW5jaG9yRWxlbWVudCl9XG4gKi9cbkBiYXNlQ29uc3RydWN0b3IoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld0xpbmsgZXh0ZW5kcyBCYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MQW5jaG9yRWxlbWVudCkge1xuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAbWVtYmVyb2YgVmlld0xpbmtcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGV4dGVuZHM6IHN0cmluZyA9ICdhJztcblxuICAgIC8qKlxuICAgICAqIFRlc3RcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBWaWV3TGlua1xuICAgICAqL1xuICAgIEBwcm9wZXJ0eSgpIHB1YmxpYyBtb2RlbCA9IG5ldyBUZXN0MSh7IHRpdGxlOiBTdHJpbmcoRGF0ZS5ub3coKSkgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUZXN0XG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBWaWV3TGlua1xuICAgICAqL1xuICAgIEBhdHRyaWJ1dGUoKSBwdWJsaWMgdGVzdDogc3RyaW5nID0gdGhpcy5tb2RlbC5iaW5kKFwidGl0bGVcIik7XG5cbiAgICAvKipcbiAgICAgKiBUZXN0XG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAgICogQG1lbWJlcm9mIFZpZXdMaW5rXG4gICAgICovXG4gICAgQHdhdGNoZWQoKSBAYXR0cmlidXRlKCkgcHVibGljIHRlc3Rlcjogc3RyaW5nW10gPSB0aGlzLm1vZGVsLmJpbmQoXCJ0ZXN0ZXJcIik7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIGEgdGVzdCBvYmplY3RcbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQG1lbWJlcm9mIFZpZXdMaW5rXG4gICAgICovXG4gICAgQHByb3BlcnR5KCkgcHVibGljIHRlc3RlbjogT2JqZWN0ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcihfcGFyYW1zPzogQ29uc3RQYXJhbXM8Vmlld0xpbms+KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBWaWV3TGlua1xuICAgICAqL1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3RlZENhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25MaW5rQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVzdFxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBwYXJhbSB7dGhpc1tcInRlc3RcIl19IHZhbHVlXG4gICAgICogQG1lbWJlcm9mIFZpZXdMaW5rXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uVGVzdFR5cGVDaGVjayh2YWx1ZTogdGhpc1tcInRlc3RcIl0pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja2luZyB0eXBlIG9mIHRlc3Qgd2l0aCB2YWx1ZVwiLCB2YWx1ZSk7ICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVzdFxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBtZW1iZXJvZiBWaWV3TGlua1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBvblRlc3RUeXBlQ2hlY2tTdWNjZXNzKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlR5cGVjaGVjayBvZiB0ZXN0IHN1Y2Nlc3NmdWxcIik7ICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVzdFxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBtZW1iZXJvZiBWaWV3TGlua1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBvblRlc3RUeXBlQ2hlY2tGYWlsKGVycm9yOiBFcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlR5cGVjaGVjayBvZiB0ZXN0IGZhaWxlZFwiLCBlcnJvcik7ICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVzdFxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBwYXJhbSB7dGhpc1tcInRlc3RcIl19IGNoYW5nZWRcbiAgICAgKiBAbWVtYmVyb2YgVmlld0xpbmtcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25UZXN0Q2hhbmdlKGNoYW5nZWQ6IHRoaXNbXCJ0ZXN0ZXJcIl0pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0IGNoYW5nZWRcIiwgY2hhbmdlZCwgdGhpcyk7ICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVzdFxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBwYXJhbSB7dGhpc1tcInRlc3RcIl19IGluaXRcbiAgICAgKiBAbWVtYmVyb2YgVmlld0xpbmtcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25UZXN0ZXJJbml0KGluaXQ6IHRoaXNbXCJ0ZXN0ZXJcIl0pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgaW5pdFwiLCBpbml0LCB0aGlzKTsgIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZXN0XG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHBhcmFtIHt0aGlzW1widGVzdFwiXX0gY2hhbmdlZFxuICAgICAqIEBtZW1iZXJvZiBWaWV3TGlua1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBvblRlc3RlckNoYW5nZShjaGFuZ2VkOiB0aGlzW1widGVzdGVyXCJdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIGNoYW5nZWRcIiwgY2hhbmdlZCwgdGhpcyk7ICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVzdFxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBwYXJhbSB7dGhpc1tcInRlc3RcIl19IGFkZGVkXG4gICAgICogQG1lbWJlcm9mIFZpZXdMaW5rXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uVGVzdGVyQWRkKGFkZGVkOiB0aGlzW1widGVzdGVyXCJdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIGFkZGVkXCIsIGFkZGVkLCB0aGlzKTsgIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZXN0XG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHBhcmFtIHt0aGlzW1widGVzdFwiXX0gcmVtb3ZlZFxuICAgICAqIEBtZW1iZXJvZiBWaWV3TGlua1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBvblRlc3RlclJlbW92ZShyZW1vdmVkOiB0aGlzW1widGVzdGVyXCJdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIHJlbW92ZWRcIiwgcmVtb3ZlZCwgdGhpcyk7ICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgdGhlIHJvdXRlciB0byBuYXZpZ2F0ZSB0byB0aGUgaHJlZiBvZiB0aGUgbGlua1xuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqIEBtZW1iZXJvZiBWaWV3TGlua1xuICAgICAqL1xuICAgIHByaXZhdGUgb25MaW5rQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvdy5yb3V0ZXIubmF2aWdhdGUodGhpcy5ocmVmLCB0cnVlKTtcbiAgICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBCYXNlQ29tcG9uZW50XzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQmFzZUNvbXBvbmVudFwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgZGVjb3JhdG9yc18yID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IG5hdmlnb18xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm5hdmlnb1wiKSk7XG5sZXQgVmlld1JvdXRlciA9IGNsYXNzIFZpZXdSb3V0ZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50XzEuQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSBuZXcgbmF2aWdvXzEuZGVmYXVsdCgpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5yb3V0ZUNvbGxlY3Rpb24oKTtcbiAgICAgICAgd2luZG93LnJvdXRlciA9IHRoaXMucm91dGVyO1xuICAgIH1cbiAgICByb3V0ZUNvbGxlY3Rpb24oKSB7XG4gICAgICAgIGZvciAoY29uc3Qgcm91dGUgb2Ygd2luZG93LnZpcnR1YWxSb3V0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG15Um91dGUgPSByZXF1aXJlKGAuLy4uL3JvdXRlcy8ke3JvdXRlfS50c2ApLmRlZmF1bHQ7XG4gICAgICAgICAgICB0aGlzLnNpbmdlUm91dGVDb2xsZWN0aW9uKG15Um91dGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNpbmdlUm91dGVDb2xsZWN0aW9uKFJvdXRlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXV0aWxfMS5pbmNsdWRlc01lbWJlck9mTGlzdChSb3V0ZS5hdHRhY2hUb1NlcnZlcnMsIFtnbG9iYWwucHJvY2Vzcy5lbnYubmFtZSwgJyonXSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgUm91dGVDbGFzcyA9IG5ldyBSb3V0ZSgpO1xuICAgICAgICAgICAgaWYgKCFSb3V0ZUNsYXNzLmlzQ2xpZW50Um91dGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Um91dGVDbGFzcy5jb25zdHJ1Y3Rvci5uYW1lfSBpcyBub3QgaW5zdGFuY2Ugb2YgfmNsaWVudC9saWIvQmFzZVJvdXRlYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5vbihSb3V0ZUNsYXNzLnJvdXRlcik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbn07XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMi5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbl0sIFZpZXdSb3V0ZXIucHJvdG90eXBlLCBcInJvdXRlclwiLCB2b2lkIDApO1xuVmlld1JvdXRlciA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpXG5dLCBWaWV3Um91dGVyKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFZpZXdSb3V0ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWbWxsZDFKdmRYUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDJOdmJYQnZibVZ1ZEhNdlZtbGxkMUp2ZFhSbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTdzJSRUZCYVVVN1FVRkRha1VzTUVOQlFYVkVPMEZCUTNaRUxITkVRVUYzUkR0QlFVTjRSQ3h6UkVGQmFVUTdRVUZGYWtRc05FUkJRVFJDTzBGQlZUVkNMRWxCUVhGQ0xGVkJRVlVzUjBGQkwwSXNUVUZCY1VJc1ZVRkJWeXhUUVVGUkxHOURRVUZ2UWl4RFFVRkRMRmRCUVZjc1EwRkJRenRKUVVGNlJUczdVVUZUYVVNc1YwRkJUU3hIUVVGSExFbEJRVWtzWjBKQlFVMHNSVUZCUlN4RFFVRkRPMGxCSzBOMlJDeERRVUZETzBsQmRrTmhMR2xDUVVGcFFqdFJRVU4yUWl4TFFVRkxMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVXNRMEZCUXp0UlFVTXhRaXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVOQlFVTTdVVUZEZGtJc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUTJoRExFTkJRVU03U1VGUlR5eGxRVUZsTzFGQlEyNUNMRXRCUVVzc1RVRkJUU3hMUVVGTExFbEJRVWtzVFVGQlRTeERRVUZETEdGQlFXRXNSVUZCUlR0WlFVTjBReXhOUVVGTkxFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTXNaVUZCWlN4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF6dFpRVU16UkN4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1UwRkRkRU03U1VGRFRDeERRVUZETzBsQlZVOHNiMEpCUVc5Q0xFTkJRVU1zUzBGQmVVSTdVVUZEYkVRc1NVRkJTVHRaUVVOQkxFbEJRVWtzUTBGQlF5d3lRa0ZCYjBJc1EwRkJWeXhMUVVGTExFTkJRVU1zWlVGQlpTeEZRVUZGTEVOQlFWTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVGRkxFOUJRVTg3V1VGRE0wY3NUVUZCVFN4VlFVRlZMRWRCUVVjc1NVRkJTU3hMUVVGTExFVkJRVVVzUTBGQlF6dFpRVU12UWl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExHRkJRV0VzUlVGQlJUdG5Ra0ZETTBJc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eEhRVUZITEZWQlFWVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3d5UTBGQk1rTXNRMEZCUXl4RFFVRkRPMkZCUXpsR08xbEJRMFFzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFOQlEzSkRPMUZCUVVNc1QwRkJUeXhMUVVGTExFVkJRVVU3V1VGRFdpeE5RVUZOTEV0QlFVc3NRMEZCUXp0VFFVTm1PMGxCUTB3c1EwRkJRenREUVVOS0xFTkJRVUU3UVVFdlEyVTdTVUZCV0N4eFFrRkJVU3hGUVVGRk96c3dRMEZCZDBNN1FVRlViRU1zVlVGQlZUdEpRVVE1UWl3MFFrRkJaU3hGUVVGRk8wZEJRMGNzVlVGQlZTeERRWGRFT1VJN2EwSkJlRVJ2UWl4VlFVRlZJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xucmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7XG5jb25zdCBudW5qdWNrc18xID0gcmVxdWlyZShcIm51bmp1Y2tzXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L3V0aWxzL3V0aWxcIik7XG5jb25zdCB1dGlsXzIgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuZnVuY3Rpb24gQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTFR5cGVFbGVtZW50KSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBjbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgSFRNTFR5cGVFbGVtZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5nZW5lcmF0ZVVuaXF1ZUlEKCk7XG4gICAgICAgICAgICB0aGlzLnJlZnMgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuaXNCYXNlQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMuY29uc3RydWN0b3IpLm5hbWU7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlU3RyaW5nID0gJzxkaXY+PHNsb3Q+PC9zbG90PjwvZGl2Pic7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMsIFwiZGVmaW5lZFByb3BlcnRpZXNcIik7XG4gICAgICAgICAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBvZiBwcm9wZXJ0aWVzLmtleXMoKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5zZXQocHJvcCwgbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMsIHByb3ApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IGJpbmRpbmdzKCkge1xuICAgICAgICAgICAgY29uc3QgYmluZGluZ3MgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMsIFwiaW5pdGlhdG9yQmluZGluZ1wiKTtcbiAgICAgICAgICAgIHJldHVybiBiaW5kaW5ncyA/IGJpbmRpbmdzIDogbmV3IE1hcCgpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBjcmVhdGUocGFyYW1zKSB7XG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHV0aWxfMi5wYXNjYWxDYXNlMmtlYmFiQ2FzZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykubmFtZSk7XG4gICAgICAgICAgICBsZXQgaXMgPSB0aGF0LmV4dGVuZHM7XG4gICAgICAgICAgICBsZXQgdGFnTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAgICAgICAgIGlmIChpcykge1xuICAgICAgICAgICAgICAgIHRhZ05hbWUgPSBpcztcbiAgICAgICAgICAgICAgICBpcyA9IGNsYXNzTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoYXQuaXNQcm9jZWR1cmFsQ29tcG9uZW50Q29uc3RydWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIHsgaXMgfSk7XG4gICAgICAgICAgICB0aGF0LmlzUHJvY2VkdXJhbENvbXBvbmVudENvbnN0cnVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgZWxlbWVudC5pbnZva2VMaWZlQ3ljbGUocGFyYW1zKTtcbiAgICAgICAgICAgIGlmIChpcylcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImlzXCIsIGlzLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGludm9rZUxpZmVDeWNsZShfQ29uc3RQYXJhbXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgaXMgbm90IGEgQmFzZUNvbnN0cnVjdG9yXCIpO1xuICAgICAgICB9XG4gICAgICAgIGdldE5hbWVzcGFjZWRTdG9yYWdlKGtleSwgbnNQcm9wLCBmb3JjZU5TKSB7XG4gICAgICAgICAgICByZXR1cm4gdXRpbF8xLmdldE5hbWVzcGFjZWRTdG9yYWdlKHRoaXMsIGtleSwgbnNQcm9wLCBmb3JjZU5TKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZShrZXksIG5ld1ZhbCwgbnNQcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gdXRpbF8xLnNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKHRoaXMsIGtleSwgbmV3VmFsLCBuc1Byb3ApO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZShrZXksIG5zUHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHV0aWxfMS5kZWxldGVGcm9tTmFtZXNwYWNlZFN0b3JhZ2UodGhpcywga2V5LCBuc1Byb3ApO1xuICAgICAgICB9XG4gICAgICAgIHNldEF0dHJpYnV0ZShxdWFsaWZpZWROYW1lLCB2YWx1ZSwgc2V0VmFsdWUgPSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzICYmIHRoaXMucHJvcGVydGllcy5oYXMocXVhbGlmaWVkTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFwiJHtxdWFsaWZpZWROYW1lfVwiIGNhbid0IGJlIHNldCBhcyBhdHRyaWJ1dGUgYmVjYXVzZSBpdCBpcyBhIGRlZmluZWQgcHJvcGVydHlgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZVRvU2V0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKCF1dGlsXzIuaXNQcmltaXRpdmUodmFsdWUpKVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVRvU2V0ID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL1xcXCIvZywgXCInXCIpO1xuICAgICAgICAgICAgICAgIHN1cGVyLnNldEF0dHJpYnV0ZShxdWFsaWZpZWROYW1lLCB2YWx1ZVRvU2V0KTtcbiAgICAgICAgICAgICAgICB2YWx1ZVRvU2V0ID0gdXRpbF8yLmNvbnN0cnVjdFR5cGVPZkhUTUxBdHRyaWJ1dGUodGhpcywgcXVhbGlmaWVkTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNldFZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzW3F1YWxpZmllZE5hbWVdID0gdmFsdWVUb1NldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShxdWFsaWZpZWROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmVBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcGVydGllcyAmJiB0aGlzLnByb3BlcnRpZXMuaGFzKHF1YWxpZmllZE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBcIiR7cXVhbGlmaWVkTmFtZX1cIiBjYW4ndCBiZSByZW1vdmVkIGFzIGF0dHJpYnV0ZSBiZWNhdXNlIGl0IGlzIGEgZGVmaW5lZCBwcm9wZXJ0eWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3VwZXIucmVtb3ZlQXR0cmlidXRlKHF1YWxpZmllZE5hbWUpO1xuICAgICAgICAgICAgdGhpc1txdWFsaWZpZWROYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0b0pTT04oKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGRhdGFba2V5XSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3RydWN0ZWRDYWxsYmFjayguLi5fYXJncykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbnN0cnVjdG9yLmV4dGVuZHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RyaW5nVG9QYXJzZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxfMi5pc1N0cmluZyh0aGlzLnRlbXBsYXRlU3RyaW5nKSlcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nVG9QYXJzZSA9IG51bmp1Y2tzXzEucmVuZGVyU3RyaW5nKHRoaXMudGVtcGxhdGVTdHJpbmcsIHRoaXMudG9KU09OKCkpO1xuICAgICAgICAgICAgICAgIGlmICh1dGlsXzIuaXNPYmplY3QodGhpcy50ZW1wbGF0ZVN0cmluZykpXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ1RvUGFyc2UgPSB0aGlzLnRlbXBsYXRlU3RyaW5nLnJlbmRlcih0aGlzLnRvSlNPTigpKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RyaW5nVG9QYXJzZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc3RyaW5nVG9QYXJzZSwgJ3RleHQvaHRtbCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZzID0gQXJyYXkuZnJvbShkb2MucXVlcnlTZWxlY3RvckFsbChcIltyZWZdXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCByZWYgb2YgcmVmcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmTmFtZSA9IHJlZi5nZXRBdHRyaWJ1dGUoXCJyZWZcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlZk5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVmTmFtZSBpbiB0aGlzLnJlZnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGByZWYgJHtyZWZOYW1lfSBhbHJlYWR5IGV4aXN0c2ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZzW3JlZk5hbWVdID0gcmVmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoZG9jLmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkgeyB9XG4gICAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkgeyB9XG4gICAgICAgIGFkb3B0ZWRDYWxsYmFjaygpIHsgfVxuICAgICAgICBhZGRDb250cm9sbGVyKCkgeyB9XG4gICAgICAgIHJlbW92ZUNvbnRyb2xsZXIoKSB7IH1cbiAgICAgICAgZ2VuZXJhdGVVbmlxdWVJRCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzLmNvbnN0cnVjdG9yKS5uYW1lO1xuICAgICAgICAgICAgY29uc3Qgb2NjdXJyZW5jZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRoaXMudGFnTmFtZSkpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBvY2N1cnJlbmNlcy5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgICAgbGV0IG9jY3VycmVuY2UgPSBpbmRleCA+PSAwID8gaW5kZXggOiBvY2N1cnJlbmNlcy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7Y2xhc3NOYW1lfV8ke29jY3VycmVuY2V9YCkpIHtcbiAgICAgICAgICAgICAgICBvY2N1cnJlbmNlKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYCR7Y2xhc3NOYW1lfV8ke29jY3VycmVuY2V9YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCYXNlQ29tcG9uZW50LmlzQmFzZUNvbXBvbmVudCA9IHRydWU7XG4gICAgQmFzZUNvbXBvbmVudC5pc1Byb2NlZHVyYWxDb21wb25lbnRDb25zdHJ1Y3Rpb24gPSBmYWxzZTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCB0eXBlb2YgKF9hID0gdHlwZW9mIEluZGV4U3RydWN0dXJlICE9PSBcInVuZGVmaW5lZFwiICYmIEluZGV4U3RydWN0dXJlKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3QpXG4gICAgXSwgQmFzZUNvbXBvbmVudC5wcm90b3R5cGUsIFwicmVmc1wiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxuICAgIF0sIEJhc2VDb21wb25lbnQucHJvdG90eXBlLCBcImlzQmFzZUNvbXBvbmVudFwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgQmFzZUNvbXBvbmVudC5wcm90b3R5cGUsIFwiY2xhc3NOYW1lXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KHsgZGlzYWJsZVR5cGVHdWFyZDogdHJ1ZSB9KSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuICAgIF0sIEJhc2VDb21wb25lbnQucHJvdG90eXBlLCBcInRlbXBsYXRlU3RyaW5nXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIEJhc2VDb21wb25lbnQ7XG59XG5leHBvcnRzLkJhc2VDb21wb25lbnRGYWN0b3J5ID0gQmFzZUNvbXBvbmVudEZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRbUZ6WlVOdmJYQnZibVZ1ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyeHBZaTlDWVhObFEyOXRjRzl1Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxEUkNRVUV3UWp0QlFVTXhRaXgxUTBGQmEwUTdRVUZEYkVRc2MwUkJRVFJFTzBGQlF6VkVMR3RFUVVGMVJUdEJRVWQyUlN3MlEwRkJiVWc3UVVGRGJrZ3NNRU5CUVhOSU8wRkJWWFJJTEZOQlFXZENMRzlDUVVGdlFpeERRVUY1UXl4bFFVRnpRanM3U1VGUkwwWXNUVUZCWlN4aFFVRmpMRk5CUVZFc1pVRkJaVHRSUVhGSmFFUXNXVUZCV1N4SFFVRkhMRWxCUVZjN1dVRkRkRUlzUzBGQlN5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRm9Sa01zVDBGQlJTeEhRVUZYTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUlVGQlJTeERRVUZETzFsQlUzUkRMRk5CUVVrc1IwRkJkME1zUlVGQlJTeERRVUZETzFsQlVYUkRMRzlDUVVGbExFZEJRVmtzU1VGQlNTeERRVUZETzFsQlUyaERMR05CUVZNc1IwRkJWeXhOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU03V1VGVmNFTXNiVUpCUVdNc1IwRkJjMElzTUVKQlFUQkNMRU5CUVVNN1VVRTJRM2hJTEVOQlFVTTdVVUZzUjBRc1NVRkJWeXhWUVVGVk8xbEJRMnBDTEUxQlFVMHNTMEZCU3l4SFFVRkhMRWxCUVVrc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRGVFSXNUVUZCVFN4VlFVRlZMRWRCUVVjc2MwSkJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNiVUpCUVcxQ0xFTkJRVU1zUTBGQlF6dFpRVU14UkN4SlFVRkpMRlZCUVZVc1JVRkJSVHRuUWtGRFdpeExRVUZMTEUxQlFVMHNTVUZCU1N4SlFVRkpMRlZCUVZVc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJUdHZRa0ZEYkVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNPRUpCUVcxQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN2FVSkJRM0JFTzJGQlEwbzdXVUZEUkN4UFFVRlBMRXRCUVVzc1EwRkJRenRSUVVOcVFpeERRVUZETzFGQmMwUkVMRWxCUVdNc1VVRkJVVHRaUVVOc1FpeE5RVUZOTEZGQlFWRXNSMEZCUnl4elFrRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeHJRa0ZCYTBJc1EwRkJReXhEUVVGRE8xbEJRM1pFTEU5QlFVOHNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRNME1zUTBGQlF6dFJRV0ZOTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVdkRUxFMUJRWFZDTzFsQlEzWkdMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRWFZETEVOQlFVTTdXVUZEY2tRc1RVRkJUU3hUUVVGVExFZEJRVWNzTWtKQlFXOUNMRU5CUVVNc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVONlJTeEpRVUZKTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRE8xbEJRM1JDTEVsQlFVa3NUMEZCVHl4SFFVRkhMRk5CUVZNc1EwRkJRenRaUVVONFFpeEpRVUZKTEVWQlFVVXNSVUZCUlR0blFrRkRTaXhQUVVGUExFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTmlMRVZCUVVVc1IwRkJSeXhUUVVGVExFTkJRVU03WVVGRGJFSTdXVUZEUkN4SlFVRkpMRU5CUVVNc2FVTkJRV2xETEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUXpsRExFMUJRVTBzVDBGQlR5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1QwRkJUeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFUWkNMRU5CUVVNN1dVRkRjRVlzU1VGQlNTeERRVUZETEdsRFFVRnBReXhIUVVGSExFdEJRVXNzUTBGQlF6dFpRVU12UXl4UFFVRlBMRU5CUVVNc1pVRkJaU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFsQlEyaERMRWxCUVVrc1JVRkJSVHRuUWtGQlJTeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdXVUZETjBNc1QwRkJUeXhQUVVGUExFTkJRVU03VVVGRGJrSXNRMEZCUXp0UlFXTk5MR1ZCUVdVc1EwRkJNRUlzV1VGQk5rSTdXVUZEZWtVc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5d3JRa0ZCSzBJc1EwRkJReXhEUVVGRE8xRkJRM0pFTEVOQlFVTTdVVUZYVFN4dlFrRkJiMElzUTBGQlF5eEhRVUZYTEVWQlFVVXNUVUZCWlN4RlFVRkZMRTlCUVdkQ08xbEJRM1JGTEU5QlFVOHNNa0pCUVc5Q0xFTkJRVU1zU1VGQlNTeEZRVUZGTEVkQlFVY3NSVUZCUlN4TlFVRk5MRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRE5VUXNRMEZCUXp0UlFWZE5MREJDUVVFd1FpeERRVUZETEVkQlFWY3NSVUZCUlN4TlFVRlhMRVZCUVVVc1RVRkJaVHRaUVVOMlJTeFBRVUZQTEdsRFFVRXdRaXhEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVWQlFVVXNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRMnBGTEVOQlFVTTdVVUZWVFN3eVFrRkJNa0lzUTBGQlF5eEhRVUZYTEVWQlFVVXNUVUZCWlR0WlFVTXpSQ3hQUVVGUExHdERRVUV5UWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdVVUZETVVRc1EwRkJRenRSUVZkTkxGbEJRVmtzUTBGQlF5eGhRVUZ4UWl4RlFVRkZMRXRCUVdFc1JVRkJSU3hYUVVGdlFpeEpRVUZKTzFsQlF6bEZMRWxCUVVrc1NVRkJTU3hEUVVGRExGVkJRVlVzU1VGQlNTeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhoUVVGaExFTkJRVU1zUlVGQlJUdG5Ra0ZEZGtRc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eEpRVUZKTEdGQlFXRXNPRVJCUVRoRUxFTkJRVU1zUTBGQlF6dGhRVU53Unp0WlFVTkVMRWxCUVVrc1MwRkJTeXhGUVVGRk8yZENRVU5RTEVsQlFVa3NWVUZCVlN4SFFVRkhMRXRCUVVzc1EwRkJRenRuUWtGRGRrSXNTVUZCU1N4RFFVRkRMR3RDUVVGWExFTkJRVU1zUzBGQlN5eERRVUZETzI5Q1FVRkZMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUTJoR0xFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNZVUZCWVN4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8yZENRVU01UXl4VlFVRlZMRWRCUVVjc2JVTkJRVFJDTEVOQlFVTXNTVUZCU1N4RlFVRkZMR0ZCUVdFc1EwRkJReXhEUVVGRE8yZENRVU12UkN4SlFVRkpMRkZCUVZFN2IwSkJRVkVzU1VGQlN5eERRVUZETEdGQlFXRXNRMEZCUXl4SFFVRkhMRlZCUVZVc1EwRkJRenRoUVVONlJEczdaMEpCUVUwc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXp0UlFVTXZReXhEUVVGRE8xRkJVVTBzWlVGQlpTeERRVUZETEdGQlFYRkNPMWxCUTNoRExFbEJRVWtzU1VGQlNTeERRVUZETEZWQlFWVXNTVUZCU1N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eGhRVUZoTEVOQlFVTXNSVUZCUlR0blFrRkRka1FzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4SlFVRkpMR0ZCUVdFc2EwVkJRV3RGTEVOQlFVTXNRMEZCUXp0aFFVTjRSenRaUVVORUxFdEJRVXNzUTBGQlF5eGxRVUZsTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNN1dVRkRMMElzU1VGQlN5eERRVUZETEdGQlFXRXNRMEZCUXl4SFFVRkhMRk5CUVZNc1EwRkJRenRSUVVNelF5eERRVUZETzFGQlZVMHNUVUZCVFR0WlFVTlVMRTFCUVUwc1NVRkJTU3hIUVVGdFFpeEZRVUZGTEVOQlFVTTdXVUZEYUVNc1MwRkJTeXhOUVVGTkxFZEJRVWNzU1VGQlNTeEpRVUZKTEVWQlFVVTdaMEpCUTNCQ0xFbEJRVWtzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRk5CUVZNc1JVRkJSVHR2UWtGRGVrSXNUVUZCVFN4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzI5Q1FVTXhRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NUMEZCVHl4RFFVRkRPMmxDUVVOMlFqdGhRVU5LTzFsQlEwUXNUMEZCVHl4SlFVRkpMRU5CUVVNN1VVRkRhRUlzUTBGQlF6dFJRVmRUTEcxQ1FVRnRRaXhEUVVGRExFZEJRVWNzUzBGQldUdFpRVVY2UXl4SlFVRkpMRU5CUVU4c1NVRkJTU3hEUVVGRExGZEJRVmtzUTBGQlF5eFBRVUZQTEVWQlFVVTdaMEpCUld4RExFbEJRVWtzWVVGQllTeEhRVUZITEVsQlFVa3NRMEZCUXp0blFrRkRla0lzU1VGQlNTeGxRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJRenR2UWtGQlJTeGhRVUZoTEVkQlFVY3NkVUpCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRE8yZENRVU53Unl4SlFVRkpMR1ZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETzI5Q1FVRkZMR0ZCUVdFc1IwRkJZeXhKUVVGSkxFTkJRVU1zWTBGQlpTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dG5Ra0ZEZWtjc1NVRkJTU3hoUVVGaExFVkJRVVU3YjBKQlEyWXNUVUZCVFN4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRE8yOUNRVU4yUkN4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxGTkJRVk1zUlVGQlJTeERRVUZETEdWQlFXVXNRMEZCUXl4aFFVRmhMRVZCUVVVc1YwRkJWeXhEUVVGRExFTkJRVU03YjBKQlEzaEZMRTFCUVUwc1NVRkJTU3hIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMR2RDUVVGblFpeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRM1pFTEV0QlFVc3NUVUZCVFN4SFFVRkhMRWxCUVVrc1NVRkJTU3hGUVVGRk8zZENRVU53UWl4TlFVRk5MRTlCUVU4c1IwRkJSeXhIUVVGSExFTkJRVU1zV1VGQldTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPM2RDUVVONFF5eEpRVUZKTEVOQlFVTXNUMEZCVHpzMFFrRkJSU3hUUVVGVE8zZENRVU4yUWl4SlFVRkpMRTlCUVU4c1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNUczBRa0ZCUlN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzVDBGQlR5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8zZENRVU16UlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0eFFrRkROVUk3YjBKQlEwUXNWVUZCVlN4RFFVRkRMRmRCUVZjc1EwRkJXU3hIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMmxDUVVNeFJEdGhRVU5LTzFGQlEwd3NRMEZCUXp0UlFWRlRMR2xDUVVGcFFpeExRVUZYTEVOQlFVTTdVVUZUTjBJc2IwSkJRVzlDTEV0QlFWY3NRMEZCUXp0UlFWTm9ReXhsUVVGbExFdEJRVmNzUTBGQlF6dFJRVkV6UWl4aFFVRmhMRXRCUVZjc1EwRkJRenRSUVZGNlFpeG5Ra0ZCWjBJc1MwRkJWeXhEUVVGRE8xRkJVemxDTEdkQ1FVRm5RanRaUVVOd1FpeE5RVUZOTEZOQlFWTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNN1dVRkRMMFFzVFVGQlRTeFhRVUZYTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETlVVc1RVRkJUU3hMUVVGTExFZEJRVWNzVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVONFF5eEpRVUZKTEZWQlFWVXNSMEZCUnl4TFFVRkxMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU03V1VGRGVrUXNUMEZCVHl4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzVTBGQlV5eEpRVUZKTEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVN1owSkJRekZFTEZWQlFWVXNSVUZCUlN4RFFVRkRPMkZCUTJoQ08xbEJRMFFzVDBGQlR5eEhRVUZITEZOQlFWTXNTVUZCU1N4VlFVRlZMRVZCUVVVc1EwRkJRenRSUVVONFF5eERRVUZET3p0SlFYWlVjMElzTmtKQlFXVXNSMEZCV1N4SlFVRkpMRU5CUVVNN1NVRlRla01zSzBOQlFXbERMRWRCUVZrc1MwRkJTeXhEUVVGRE8wbEJlVUp3UkR0UlFVRmFMSE5DUVVGVExFVkJRVVU3T3paRFFVRTJRenRKUVZNM1F6dFJRVUZZTEhGQ1FVRlJMRVZCUVVVN09FUkJRV01zWTBGQll5eHZRa0ZCWkN4alFVRmpPeXREUVVFeVFqdEpRVkYwUkR0UlFVRllMSEZDUVVGUkxFVkJRVVU3T3pCRVFVRnBSRHRKUVZOb1JEdFJRVUZZTEhGQ1FVRlJMRVZCUVVVN08yOUVRVUZyUmp0SlFWVjJSRHRSUVVGeVF5eHhRa0ZCVVN4RFFVRkRMRVZCUVVVc1owSkJRV2RDTEVWQlFVVXNTVUZCU1N4RlFVRkZMRU5CUVVNN08zbEVRVUZ0Ump0SlFXOVFOVWdzVDBGQlR5eGhRVUZoTEVOQlFVTTdRVUZEZWtJc1EwRkJRenRCUVhaV1JDeHZSRUYxVmtNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEJhc2VDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuICAgIGNvbnN0cnVjdGVkQ2FsbGJhY2soKSB7IH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHsgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkgeyB9XG4gICAgYWRvcHRlZENhbGxiYWNrKCkgeyB9XG59XG5leHBvcnRzLkJhc2VDb250cm9sbGVyID0gQmFzZUNvbnRyb2xsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRbUZ6WlVOdmJuUnliMnhzWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyTnNhV1Z1ZEM5MGN5OXNhV0l2UW1GelpVTnZiblJ5YjJ4c1pYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGUFFTeE5RVUZoTEdOQlFXTTdTVUZGZGtJc1owSkJRV2RDTEVOQlFVTTdTVUZUVUN4dFFrRkJiVUlzUzBGQlN5eERRVUZETzBsQlVYcENMR2xDUVVGcFFpeExRVUZMTEVOQlFVTTdTVUZUZGtJc2IwSkJRVzlDTEV0QlFVc3NRMEZCUXp0SlFWTXhRaXhsUVVGbExFdEJRVXNzUTBGQlF6dERRVU5zUXp0QlFYUkRSQ3gzUTBGelEwTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQ2xpZW50TW9kZWxfMTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgQkRPTW9kZWxfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Nb2RlbFwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L3V0aWxzL3V0aWxcIik7XG5jb25zdCBmcmFtZXdvcmtfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2ZyYW1ld29ya1wiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IExvZ2dlcl8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0xvZ2dlclwiKTtcbmNvbnN0IERhdGFiYXNlTWFuYWdlcl8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0RhdGFiYXNlTWFuYWdlclwiKTtcbmNvbnN0IFdhdGNoZWRfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9XYXRjaGVkXCIpO1xuY29uc3QgdXRpbF8yID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IE1vZGVsUmVnaXN0cnlfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Nb2RlbFJlZ2lzdHJ5XCIpO1xuY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcl8xLkxvZ2dlcigpO1xuY29uc3QgZGF0YWJhc2VNYW5hZ2VyID0gRGF0YWJhc2VNYW5hZ2VyXzEuRGF0YWJhc2VNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG5sZXQgQ2xpZW50TW9kZWwgPSBDbGllbnRNb2RlbF8xID0gY2xhc3MgQ2xpZW50TW9kZWwgZXh0ZW5kcyBCRE9Nb2RlbF8xLkJET01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5pc0NsaWVudE1vZGVsID0gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlQnlJRChpZCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBtb2RlbCA9IE1vZGVsUmVnaXN0cnlfMS5Nb2RlbFJlZ2lzdHJ5LmdldEluc3RhbmNlKCkuZ2V0TW9kZWxCeUlkKGlkLCB0aGlzKTtcbiAgICAgICAgICAgIGlmICghbW9kZWwpXG4gICAgICAgICAgICAgICAgbW9kZWwgPSBuZXcgdGhpcygpO1xuICAgICAgICAgICAgY29uc3QgZGF0YUZyb21Mb2NhbERCID0gYXdhaXQgZGF0YWJhc2VNYW5hZ2VyXG4gICAgICAgICAgICAgICAgLmRhdGFiYXNlKG1vZGVsLmRhdGFiYXNlTmFtZSlcbiAgICAgICAgICAgICAgICAuY29sbGVjdGlvbihtb2RlbC5jb2xsZWN0aW9uTmFtZSlcbiAgICAgICAgICAgICAgICAuZ2V0KGlkKTtcbiAgICAgICAgICAgIGlmIChkYXRhRnJvbUxvY2FsREIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwZW5kaW5nUHJvbWlzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhRnJvbUxvY2FsREIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFGcm9tTG9jYWxEQi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RlbEVsZW0gPSBSZWZsZWN0LmdldChtb2RlbCwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrbGFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtID0gZGF0YUZyb21Mb2NhbERCW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29ycmVzcG9uZGluZ0xpc3RMaWtlREIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbEVsZW0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlc3BvbmRpbmdMaXN0TGlrZURCID0gbW9kZWxFbGVtLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIENsaWVudE1vZGVsXzEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5nZXRSZWZlcmVuY2VTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbSBpbnN0YW5jZW9mIEFycmF5ICYmIHV0aWxfMi5kaWZmZXJlbmNlKGNvcnJlc3BvbmRpbmdMaXN0TGlrZURCLCBlbGVtKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwZW5kaW5nSXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZyYW1ld29ya18xLmlzUmVmZXJlbmNlU3RyaW5nKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZQYXJ0cyA9IGl0ZW0uc3BsaXQoXCI6XCIpWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gcmVmUGFydHNbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrbGFzcyA9IHJlcXVpcmUoYC4vLi4vbW9kZWxzLyR7Y2xhc3NOYW1lfS50c2ApW2NsYXNzTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nSXRlbXMucHVzaChrbGFzcy5nZXRJbnN0YW5jZUJ5SUQocmVmUGFydHNbMl0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ1Byb21pc2VzLnB1c2goUHJvbWlzZS5hbGwocGVuZGluZ0l0ZW1zKS50aGVuKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZnJhbWV3b3JrXzEuaXNSZWZlcmVuY2VTdHJpbmcoZWxlbSkgJiYgZWxlbSAhPT0gbW9kZWwuZ2V0UmVmZXJlbmNlU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZQYXJ0cyA9IGVsZW0uc3BsaXQoXCI6XCIpWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHJlZlBhcnRzWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtsYXNzID0gcmVxdWlyZShgLi8uLi9tb2RlbHMvJHtjbGFzc05hbWV9LnRzYClbY2xhc3NOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nUHJvbWlzZXMucHVzaChrbGFzcy5nZXRJbnN0YW5jZUJ5SUQocmVmUGFydHNbMl0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwZW5kaW5nUHJvbWlzZXMpO1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obW9kZWwsIGRhdGFGcm9tTG9jYWxEQik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW1vZGVsLmlkLmluY2x1ZGVzKFwicGVuZGluZ1wiKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShtb2RlbCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlc0J5QXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBNb2RlbFJlZ2lzdHJ5XzEuTW9kZWxSZWdpc3RyeS5nZXRJbnN0YW5jZSgpLmdldE1vZGVsc0J5QXR0cmlidXRlcyhhdHRyaWJ1dGVzKTtcbiAgICB9XG4gICAgZ2V0TmFtZXNwYWNlZFN0b3JhZ2Uoa2V5LCBuc1Byb3AsIGZvcmNlTlMpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxfMS5nZXROYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5zUHJvcCwgZm9yY2VOUyk7XG4gICAgfVxuICAgIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGtleSwgbmV3VmFsLCBuc1Byb3ApIHtcbiAgICAgICAgcmV0dXJuIHV0aWxfMS5zZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5ld1ZhbCwgbnNQcm9wKTtcbiAgICB9XG4gICAgZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlKGtleSwgbnNQcm9wKSB7XG4gICAgICAgIHJldHVybiB1dGlsXzEuZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlKHRoaXMsIGtleSwgbnNQcm9wKTtcbiAgICB9XG4gICAgYXN5bmMgc2F2ZShhdHRyKSB7XG4gICAgICAgIGNvbnN0IGRlZmluZWRBdHRyaWJ1dGVzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLCBcImRlZmluZWRBdHRyaWJ1dGVzXCIpO1xuICAgICAgICBpZiAoIWRlZmluZWRBdHRyaWJ1dGVzIHx8IGF0dHIgJiYgIWRlZmluZWRBdHRyaWJ1dGVzLmhhcyhhdHRyKSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgZGVmaW5lZCBhdHRyaWJ1dGVzXCIpO1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gYXR0ciA/IFthdHRyXSA6IGRlZmluZWRBdHRyaWJ1dGVzLmtleXMoKTtcbiAgICAgICAgY29uc3QgdW5zYXZlZENoYW5nZXMgPSBhd2FpdCB0aGlzLmdldFVuc2F2ZWRDaGFuZ2VzKCk7XG4gICAgICAgIGNvbnN0IHRvU2F2ZSA9IHt9O1xuICAgICAgICBjb25zdCBzZW5kVG9TZXJ2ZXIgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlcykge1xuICAgICAgICAgICAgaWYgKHVuc2F2ZWRDaGFuZ2VzLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJBdHRyID0gYXR0cmlidXRlO1xuICAgICAgICAgICAgICAgIGxldCBwcm94eVZhbCA9IHV0aWxfMi5nZXRQcm94eVRhcmdldCh1bnNhdmVkQ2hhbmdlc1tzdHJBdHRyXSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb3h5VmFsIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJveHlWYWwgPSBwcm94eVZhbC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgQ2xpZW50TW9kZWxfMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmdldFJlZmVyZW5jZVN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxfMi5nZXRQcm94eVRhcmdldChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcm94eVZhbCBpbnN0YW5jZW9mIENsaWVudE1vZGVsXzEpXG4gICAgICAgICAgICAgICAgICAgIHByb3h5VmFsID0gcHJveHlWYWwuZ2V0UmVmZXJlbmNlU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgbGV0IHdpbGRDYXJkTWV0YWRhdGEgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcywgc3RyQXR0cik7XG4gICAgICAgICAgICAgICAgaWYgKHdpbGRDYXJkTWV0YWRhdGEgaW5zdGFuY2VvZiBXYXRjaGVkXzEuV2F0Y2hlZClcbiAgICAgICAgICAgICAgICAgICAgd2lsZENhcmRNZXRhZGF0YSA9IHdpbGRDYXJkTWV0YWRhdGEuc3ViT2JqZWN0O1xuICAgICAgICAgICAgICAgIGlmICghd2lsZENhcmRNZXRhZGF0YS5kb05vdFBlcnNpc3QpXG4gICAgICAgICAgICAgICAgICAgIHRvU2F2ZVtzdHJBdHRyXSA9IHByb3h5VmFsO1xuICAgICAgICAgICAgICAgIGlmICghd2lsZENhcmRNZXRhZGF0YS5ub1NlcnZlckludGVyYWN0aW9uKVxuICAgICAgICAgICAgICAgICAgICBzZW5kVG9TZXJ2ZXJbc3RyQXR0cl0gPSBwcm94eVZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRvU2F2ZSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgZGF0YWJhc2VNYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhYmFzZSh0aGlzLmRhdGFiYXNlTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh0aGlzLmlkLCB0b1NhdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHNlbmRUb1NlcnZlcikubGVuZ3RoKVxuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1Zyhgc2VuZCAke0pTT04uc3RyaW5naWZ5KHNlbmRUb1NlcnZlcil9IHRvIHNlcnZlcmApO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuc2F2ZWRDaGFuZ2VzKTtcbiAgICB9XG4gICAgZGlzY2FyZChfYXR0cikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0VW5zYXZlZENoYW5nZXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb2xsZWN0aW9uTmFtZSlcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIk5vIGNvbGxlY3Rpb25OYW1lIHByb3ZpZGVkXCIpO1xuICAgICAgICBjb25zdCB1bnNhdmVkQ2hhbmdlcyA9IHt9O1xuICAgICAgICBsZXQgZGJDb2xsZWN0aW9uID0gYXdhaXQgZGF0YWJhc2VNYW5hZ2VyLmRhdGFiYXNlKFwiZGVmYXVsdFwiKS5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbk5hbWUpLmdldCh0aGlzLmlkKTtcbiAgICAgICAgY29uc3QgZGVmaW5lZEF0dHJpYnV0ZXMgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMsIFwiZGVmaW5lZEF0dHJpYnV0ZXNcIik7XG4gICAgICAgIGRiQ29sbGVjdGlvbiA9IGRiQ29sbGVjdGlvbiB8fCB7fTtcbiAgICAgICAgaWYgKGRlZmluZWRBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGF0dHIgb2YgZGVmaW5lZEF0dHJpYnV0ZXMua2V5cygpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyQXR0ciA9IGF0dHIudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyVmFsID0gdXRpbF8yLmdldFByb3h5VGFyZ2V0KHRoaXNbYXR0cl0pO1xuICAgICAgICAgICAgICAgIGlmICh1dGlsXzIuaXNBcnJheShhdHRyVmFsKSAmJiB1dGlsXzIuZGlmZmVyZW5jZShhdHRyVmFsLCBkYkNvbGxlY3Rpb25bc3RyQXR0cl0pLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdmVkQ2hhbmdlc1tzdHJBdHRyXSA9IHRoaXNbYXR0cl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHV0aWxfMi5pc09iamVjdChhdHRyVmFsKSAmJiAhdXRpbF8yLmlzRXF1YWwoYXR0clZhbCwgZGJDb2xsZWN0aW9uW3N0ckF0dHJdKSkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdmVkQ2hhbmdlc1tzdHJBdHRyXSA9IHRoaXNbYXR0cl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHV0aWxfMi5pc1ByaW1pdGl2ZShhdHRyVmFsKSAmJiBhdHRyVmFsICE9PSBkYkNvbGxlY3Rpb25bc3RyQXR0cl0pIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXZlZENoYW5nZXNbc3RyQXR0cl0gPSB0aGlzW2F0dHJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuc2F2ZWRDaGFuZ2VzKTtcbiAgICB9XG4gICAgb25UeXBlQ2hlY2tGYWlsKGVycm9yKSB7XG4gICAgICAgIGxvZ2dlci5lcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9XG59O1xuQ2xpZW50TW9kZWwuaXNDbGllbnRNb2RlbCA9IHRydWU7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG5dLCBDbGllbnRNb2RlbC5wcm90b3R5cGUsIFwiaXNDbGllbnRNb2RlbFwiLCB2b2lkIDApO1xuQ2xpZW50TW9kZWwgPSBDbGllbnRNb2RlbF8xID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKClcbl0sIENsaWVudE1vZGVsKTtcbmV4cG9ydHMuQ2xpZW50TW9kZWwgPSBDbGllbnRNb2RlbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyeHBaVzUwVFc5a1pXd3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMk5zYVdWdWRDOTBjeTlzYVdJdlEyeHBaVzUwVFc5a1pXd3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJMSE5FUVVGclJUdEJRVU5zUlN4blJFRkJOa003UVVGRE4wTXNOa05CUVcxSU8wRkJRMjVJTEc5RVFVRjVSRHRCUVVONlJDeHJSRUZCZFVVN1FVRkRka1VzSzBOQlFUUkRPMEZCUXpWRExHbEZRVUU0UkR0QlFVVTVSQ3c0UTBGQk1rTTdRVUZETTBNc01FTkJRWE5ITzBGQlEzUkhMREJFUVVGMVJEdEJRVVYyUkN4TlFVRk5MRTFCUVUwc1IwRkJSeXhKUVVGSkxHVkJRVTBzUlVGQlJTeERRVUZETzBGQlF6VkNMRTFCUVUwc1pVRkJaU3hIUVVGSExHbERRVUZsTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1FVRlhkRVFzU1VGQllTeFhRVUZYTEcxQ1FVRjRRaXhOUVVGaExGZEJRVmtzVTBGQlVTeHRRa0ZCVVR0SlFVRjZRenM3VVVGclFtZERMR3RDUVVGaExFZEJRVmtzU1VGQlNTeERRVUZETzBsQmEwODVSQ3hEUVVGRE8wbEJiRTVWTEUxQlFVMHNRMEZCUXl4bFFVRmxMRU5CUVRKRExFVkJRVmM3VVVGREwwVXNUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJaMElzUzBGQlN5eEZRVUZGTEU5QlFVOHNSVUZCUlN4RlFVRkZPMWxCUTJoRUxFbEJRVWtzUzBGQlN5eEhRVUZITERaQ1FVRmhMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zV1VGQldTeERRVUZETEVWQlFVVXNSVUZCUlN4SlFVRkpMRU5CUVd0Q0xFTkJRVU03V1VGRGFFWXNTVUZCU1N4RFFVRkRMRXRCUVVzN1owSkJRVVVzUzBGQlN5eEhRVUZITEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNN1dVRkRMMElzVFVGQlRTeGxRVUZsTEVkQlFVY3NUVUZCVFN4bFFVRmxPMmxDUVVONFF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJRenRwUWtGRE5VSXNWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU03YVVKQlEyaERMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU5pTEVsQlFVa3NaVUZCWlN4RlFVRkZPMmRDUVVOcVFpeE5RVUZOTEdWQlFXVXNSMEZCZVVJc1JVRkJSU3hEUVVGRE8yZENRVU5xUkN4TFFVRkxMRTFCUVUwc1IwRkJSeXhKUVVGSkxHVkJRV1VzUlVGQlJUdHZRa0ZETDBJc1NVRkJTU3hsUVVGbExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPM2RDUVVOeVF5eE5RVUZOTEZOQlFWTXNSMEZCUnl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0M1FrRkRNVU1zU1VGQlNTeExRVUY1UWl4RFFVRkRPM2RDUVVNNVFpeEpRVUZKTEVsQlFVa3NSMEZCUnl4bFFVRmxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03ZDBKQlEyaERMRWxCUVVrc2RVSkJRWFZDTEVkQlFVY3NSVUZCUlN4RFFVRkRPM2RDUVVWcVF5eEpRVUZKTEZOQlFWTXNXVUZCV1N4TFFVRkxMRVZCUVVVN05FSkJRelZDTEhWQ1FVRjFRaXhIUVVGSExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSVHRuUTBGRE4wTXNTVUZCU1N4SlFVRkpMRmxCUVZrc1lVRkJWenR2UTBGQlJTeFBRVUZQTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUlVGQlJTeERRVUZETzJkRFFVTnNSU3hQUVVGUExFbEJRVWtzUTBGQlF6czBRa0ZEYUVJc1EwRkJReXhEUVVGRExFTkJRVU03ZVVKQlEwNDdkMEpCUTBRc1NVRkJTU3hKUVVGSkxGbEJRVmtzUzBGQlN5eEpRVUZKTEdsQ1FVRlZMRU5CUVVNc2RVSkJRWFZDTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1RVRkJUU3hGUVVGRk96UkNRVU16UlN4TlFVRk5MRmxCUVZrc1IwRkJlVUlzUlVGQlJTeERRVUZET3pSQ1FVTTVReXhMUVVGTExFbEJRVWtzU1VGQlNTeEpRVUZKTEVsQlFVa3NSVUZCUlR0blEwRkRia0lzU1VGQlNTdzJRa0ZCYVVJc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdHZRMEZEZWtJc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRMEZEY0VNc1RVRkJUU3hUUVVGVExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlEUVVNNVFpeExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRMR1ZCUVdVc1UwRkJVeXhMUVVGTExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0dlEwRkRNVVFzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1pVRkJaU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTzNkRFFVTnFSU3hKUVVGSkxFZEJRVWNzVFVGQlRTeERRVUZETzI5RFFVTnNRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJsRFFVTlFPelpDUVVOS096UkNRVU5FTEdWQlFXVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8zbENRVU14UkRzMlFrRkJUU3hKUVVGSkxEWkNRVUZwUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFbEJRVWtzUzBGQlN5eExRVUZMTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzUlVGQlJUczBRa0ZEZGtVc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6czBRa0ZEY0VNc1RVRkJUU3hUUVVGVExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPelJDUVVNNVFpeExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRMR1ZCUVdVc1UwRkJVeXhMUVVGTExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXpzMFFrRkRNVVFzWlVGQlpTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1pVRkJaU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTzJkRFFVTndSU3hKUVVGSkxFZEJRVWNzVFVGQlRTeERRVUZET3pSQ1FVTnNRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzNsQ1FVTlFPM0ZDUVVOS08ybENRVU5LTzJkQ1FVTkVMRTFCUVUwc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXp0blFrRkRia01zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1pVRkJaU3hEUVVGRExFTkJRVU03WVVGRGVrTTdXVUZEUkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRPMmRDUVVGRkxFOUJRVThzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUTNwRUxFOUJRVThzVDBGQlR5eEZRVUZGTEVOQlFVTTdVVUZEY2tJc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFVDeERRVUZETzBsQllVMHNUVUZCVFN4RFFVRkRMSGRDUVVGM1FpeERRVUV5UXl4VlFVRXdRanRSUVVOMlJ5eFBRVUZQTERaQ1FVRmhMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1ZVRkJWU3hEUVVGclFpeERRVUZETzBsQlF6RkdMRU5CUVVNN1NVRlpUU3h2UWtGQmIwSXNRMEZCUXl4SFFVRlhMRVZCUVVVc1RVRkJaU3hGUVVGRkxFOUJRV2RDTzFGQlEzUkZMRTlCUVU4c01rSkJRVzlDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1JVRkJSU3hOUVVGTkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdTVUZETlVRc1EwRkJRenRKUVZsTkxEQkNRVUV3UWl4RFFVRkRMRWRCUVZjc1JVRkJSU3hOUVVGWExFVkJRVVVzVFVGQlpUdFJRVU4yUlN4UFFVRlBMR2xEUVVFd1FpeERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc1RVRkJUU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzBsQlEycEZMRU5CUVVNN1NVRlhUU3d5UWtGQk1rSXNRMEZCUXl4SFFVRlhMRVZCUVVVc1RVRkJaVHRSUVVNelJDeFBRVUZQTEd0RFFVRXlRaXhEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRNVVFzUTBGQlF6dEpRVkZOTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJaME03VVVGRE9VTXNUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3h0UWtGQmJVSXNRMEZCUXl4RFFVRkRPMUZCUTJwRkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETzFsQlFVVXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXcwUWtGQk5FSXNRMEZCUXl4RFFVRkRPMUZCUXpsSExFMUJRVTBzVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZETlVRc1RVRkJUU3hqUVVGakxFZEJRVzFDTEUxQlFVMHNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTEVOQlFVTTdVVUZEZEVVc1RVRkJUU3hOUVVGTkxFZEJRVzFDTEVWQlFVVXNRMEZCUXp0UlFVTnNReXhOUVVGTkxGbEJRVmtzUjBGQmJVSXNSVUZCUlN4RFFVRkRPMUZCUTNoRExFdEJRVXNzVFVGQlRTeFRRVUZUTEVsQlFVa3NWVUZCVlN4RlFVRkZPMWxCUTJoRExFbEJRVWtzWTBGQll5eERRVUZETEdOQlFXTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRuUWtGRE1VTXNUVUZCVFN4UFFVRlBMRWRCUVZjc1UwRkJVeXhEUVVGRE8yZENRVU5zUXl4SlFVRkpMRkZCUVZFc1IwRkJSeXh4UWtGQll5eERRVUZETEdOQlFXTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU4yUkN4SlFVRkpMRkZCUVZFc1dVRkJXU3hMUVVGTExFVkJRVVU3YjBKQlF6TkNMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRVZCUVVVN2QwSkJRemRDTEVsQlFVa3NTVUZCU1N4WlFVRlpMR0ZCUVZjc1JVRkJSVHMwUWtGRE4wSXNUMEZCVHl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNRMEZCUXp0NVFrRkRjRU03ZDBKQlEwUXNUMEZCVHl4eFFrRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzI5Q1FVTm9ReXhEUVVGRExFTkJRVU1zUTBGQlF6dHBRa0ZEVGp0blFrRkRSQ3hKUVVGSkxGRkJRVkVzV1VGQldTeGhRVUZYTzI5Q1FVRkZMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1EwRkJRenRuUWtGRk9VVXNTVUZCU1N4blFrRkJaMElzUjBGQll5dzRRa0ZCYlVJc1EwRkJReXhKUVVGSkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdaMEpCUTNKRkxFbEJRVWtzWjBKQlFXZENMRmxCUVZrc2FVSkJRVTg3YjBKQlFVVXNaMEpCUVdkQ0xFZEJRVWNzWjBKQlFXZENMRU5CUVVNc1UwRkJjMElzUTBGQlF6dG5Ra0ZGY0Vjc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRmxCUVZrN2IwSkJRVVVzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJRenRuUWtGRkwwUXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEcxQ1FVRnRRanR2UWtGQlJTeFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRE8yRkJReTlGTzFOQlEwbzdVVUZEUkN4SlFVRkpPMWxCUTBFc1NVRkJTU3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSVHRuUWtGRE5VSXNUVUZCVFN4bFFVRmxPM0ZDUVVOb1FpeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJRenR4UWtGRE0wSXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU03Y1VKQlF5OUNMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMkZCUTJoRE8xbEJRMFFzU1VGQlNTeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFMUJRVTA3WjBKQlFVVXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNXVUZCV1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8xTkJRM2hITzFGQlFVTXNUMEZCVHl4TFFVRkxMRVZCUVVVN1dVRkRXaXhQUVVGUExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1UwRkRhRU03VVVGRFJDeFBRVUZQTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1kwRkJiVU1zUTBGQlF5eERRVUZETzBsQlEyaEZMRU5CUVVNN1NVRlRUU3hQUVVGUExFTkJRVU1zUzBGQmFVTTdVVUZETlVNc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eDVRa0ZCZVVJc1EwRkJReXhEUVVGRE8wbEJReTlETEVOQlFVTTdTVUZSVFN4TFFVRkxMRU5CUVVNc2FVSkJRV2xDTzFGQlF6RkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll6dFpRVUZGTEU5QlFVOHNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXcwUWtGQk5FSXNRMEZCUXl4RFFVRkRPMUZCUXpsRkxFMUJRVTBzWTBGQll5eEhRVUZ6UWl4RlFVRkZMRU5CUVVNN1VVRkROME1zU1VGQlNTeFpRVUZaTEVkQlFVY3NUVUZCVFN4bFFVRmxMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNeFJ5eE5RVUZOTEdsQ1FVRnBRaXhIUVVGSExITkNRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRzFDUVVGdFFpeERRVUZETEVOQlFVTTdVVUZEYWtVc1dVRkJXU3hIUVVGSExGbEJRVmtzU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEYkVNc1NVRkJTU3hwUWtGQmFVSXNSVUZCUlR0WlFVTnVRaXhMUVVGTExFMUJRVTBzU1VGQlNTeEpRVUZKTEdsQ1FVRnBRaXhEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTzJkQ1FVTjZReXhOUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1owSkJRMmhETEUxQlFVMHNUMEZCVHl4SFFVRkhMSEZDUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRek5ETEVsQlFVa3NZMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxHbENRVUZWTEVOQlFVTXNUMEZCVHl4RlFVRkZMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlR0dlFrRkRkRVFzWTBGQlpTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dHBRa0ZETVVRN2NVSkJRVTBzU1VGQlNTeGxRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZGTEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhGUVVGRk8yOUNRVU55UkN4alFVRmxMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmxDUVVNeFJEdHhRa0ZCVFN4SlFVRkpMR3RDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NUMEZCVHl4TFFVRkxMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJUdHZRa0ZEYWtRc1kwRkJaU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRwUWtGRE1VUTdZVUZEU2p0VFFVTktPMUZCUTBRc1QwRkJUeXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMGxCUXpORExFTkJRVU03U1VGVlV5eGxRVUZsTEVOQlFVTXNTMEZCV1R0UlFVTnNReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRKUVVOb1F5eERRVUZETzBOQlJVb3NRMEZCUVR0QlFURlBNRUlzZVVKQlFXRXNSMEZCV1N4SlFVRkpMRU5CUVVNN1FVRlJla003U1VGQldDeHhRa0ZCVVN4RlFVRkZPenRyUkVGQkswTTdRVUZzUW1wRUxGZEJRVmM3U1VGRWRrSXNORUpCUVdVc1JVRkJSVHRIUVVOTUxGZEJRVmNzUTBGdlVIWkNPMEZCY0ZCWkxHdERRVUZYSW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQkRPUm91dGVfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Sb3V0ZVwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBMb2dnZXJfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9Mb2dnZXJcIik7XG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyXzEuTG9nZ2VyKCk7XG5jbGFzcyBDbGllbnRSb3V0ZSBleHRlbmRzIEJET1JvdXRlXzEuQkRPUm91dGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmlzQ2xpZW50Um91dGUgPSB0cnVlO1xuICAgIH1cbiAgICBnZXQgcm91dGVyKCkge1xuICAgICAgICBjb25zdCByb3V0ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCByb3V0ZSBvZiB0aGlzLnJvdXRlcykge1xuICAgICAgICAgICAgcm91dGVzW2Ake3RoaXMucm91dGVyTmFtZVNwYWNlfS8ke3JvdXRlfWAucmVwbGFjZShcIi8vXCIsIFwiL1wiKV0gPSB0aGlzLmhhbmRsZUdldC5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3V0ZXM7XG4gICAgfVxuICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gc3VwZXIudGVtcGxhdGVQYXJhbXMocGFyYW1zKTtcbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlR2V0KHBhcmFtcykge1xuICAgICAgICBsb2dnZXIubG9nKHV0aWxfMS5tZXJnZShhd2FpdCB0aGlzLnRlbXBsYXRlUGFyYW1zRnJvbVNlcnZlcigpLCBhd2FpdCB0aGlzLnRlbXBsYXRlUGFyYW1zKHBhcmFtcykpKTtcbiAgICB9XG4gICAgYXN5bmMgdGVtcGxhdGVQYXJhbXNGcm9tU2VydmVyKCkge1xuICAgICAgICBsZXQgdXJsVG9Bc2tGb3IgPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgaWYgKCF1cmxUb0Fza0ZvcilcbiAgICAgICAgICAgIHVybFRvQXNrRm9yID0gYC9gO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnWC1HYW1lLUFzLUpTT04nOiAndHJ1ZScgfSk7XG4gICAgICAgIHJldHVybiAoYXdhaXQgZmV0Y2godXJsVG9Bc2tGb3IsIHsgaGVhZGVycyB9KSkuanNvbigpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ2xpZW50Um91dGUgPSBDbGllbnRSb3V0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyeHBaVzUwVW05MWRHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMk5zYVdWdWRDOTBjeTlzYVdJdlEyeHBaVzUwVW05MWRHVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTeG5SRUZCTmtNN1FVRkROME1zTUVOQlFYZERPMEZCUTNoRExDdERRVUUwUXp0QlFVVTFReXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEdWQlFVMHNSVUZCUlN4RFFVRkRPMEZCVlRWQ0xFMUJRV0VzVjBGQldTeFRRVUZSTEcxQ1FVRlJPMGxCUVhwRE96dFJRVkZ2UWl4clFrRkJZU3hIUVVGWkxFbEJRVWtzUTBGQlF6dEpRWE5FYkVRc1EwRkJRenRKUVRsRFJ5eEpRVUZYTEUxQlFVMDdVVUZEWWl4TlFVRk5MRTFCUVUwc1IwRkJjVU1zUlVGQlJTeERRVUZETzFGQlEzQkVMRXRCUVVzc1RVRkJUU3hMUVVGTExFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlR0WlFVTTNRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNaVUZCWlN4SlFVRkpMRXRCUVVzc1JVRkJSU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVNM1JqdFJRVU5FTEU5QlFVOHNUVUZCVFN4RFFVRkRPMGxCUTJ4Q0xFTkJRVU03U1VGWFV5eExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVhOQ08xRkJRMnBFTEU5QlFVOHNTMEZCU3l4RFFVRkRMR05CUVdNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU40UXl4RFFVRkRPMGxCVTFNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZ6UWp0UlFVTTFReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEZsQlFVc3NRMEZCUXl4TlFVRk5MRWxCUVVrc1EwRkJReXgzUWtGQmQwSXNSVUZCUlN4RlFVRkZMRTFCUVUwc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRhRWNzUTBGQlF6dEpRVlZQTEV0QlFVc3NRMEZCUXl4M1FrRkJkMEk3VVVGRGJFTXNTVUZCU1N4WFFVRlhMRWRCUVVjc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF6dFJRVU53UXl4SlFVRkpMRU5CUVVNc1YwRkJWenRaUVVGRkxGZEJRVmNzUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZEY0VNc1RVRkJUU3hQUVVGUExFZEJRVWNzU1VGQlNTeFBRVUZQTEVOQlFVTXNSVUZCUlN4blFrRkJaMElzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpGRUxFOUJRVThzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4WFFVRlhMRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1NVRkRNVVFzUTBGQlF6dERRVU5LTzBGQk9VUkVMR3REUVRoRVF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJET0NvbmZpZ01hbmFnZXJfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Db25maWdNYW5hZ2VyXCIpO1xuY2xhc3MgQ29uZmlnTWFuYWdlciBleHRlbmRzIEJET0NvbmZpZ01hbmFnZXJfMS5CRE9Db25maWdNYW5hZ2VyIHtcbiAgICBzZXQoX2NvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIGxvYWQoX2NvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIGdldENhY2hlKF9jb25maWcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgICBzZXRDYWNoZShfY29uZmlnLCBfdmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29uZmlnTWFuYWdlciA9IENvbmZpZ01hbmFnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMjl1Wm1sblRXRnVZV2RsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyeHBZaTlEYjI1bWFXZE5ZVzVoWjJWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc1owVkJRVFpFTzBGQldUZEVMRTFCUVdFc1lVRkJZeXhUUVVGUkxHMURRVUZuUWp0SlFWTjRReXhIUVVGSExFTkJRVU1zVDBGQlpUdFJRVU4wUWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExIbENRVUY1UWl4RFFVRkRMRU5CUVVNN1NVRkRMME1zUTBGQlF6dEpRVlZUTEVsQlFVa3NRMEZCUXl4UFFVRmxPMUZCUXpGQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU1zUTBGQlF6dEpRVU12UXl4RFFVRkRPMGxCVlZNc1VVRkJVU3hEUVVGRExFOUJRV1U3VVVGRE9VSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4RFFVRkRPMGxCUXk5RExFTkJRVU03U1VGWFV5eFJRVUZSTEVOQlFVTXNUMEZCWlN4RlFVRkZMRTFCUVZjN1VVRkRNME1zVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eERRVUZETzBsQlF5OURMRU5CUVVNN1EwRkRTanRCUVdwRVJDeHpRMEZwUkVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBCRE9EYXRhYmFzZU1hbmFnZXJfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9EYXRhYmFzZU1hbmFnZXJcIik7XG5jb25zdCBsb2NhbGZvcmFnZV8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImxvY2FsZm9yYWdlXCIpKTtcbmNsYXNzIERhdGFiYXNlTWFuYWdlciBleHRlbmRzIEJET0RhdGFiYXNlTWFuYWdlcl8xLkJET0RhdGFiYXNlbWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZGF0YWJhc2VzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghRGF0YWJhc2VNYW5hZ2VyLmluc3RhbmNlKVxuICAgICAgICAgICAgRGF0YWJhc2VNYW5hZ2VyLmluc3RhbmNlID0gbmV3IERhdGFiYXNlTWFuYWdlcigpO1xuICAgICAgICByZXR1cm4gRGF0YWJhc2VNYW5hZ2VyLmluc3RhbmNlO1xuICAgIH1cbiAgICBkYXRhYmFzZShuYW1lKSB7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGFiYXNlID0gbmFtZTtcbiAgICAgICAgaWYgKCF0aGlzLmRhdGFiYXNlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhYmFzZXMuc2V0KG5hbWUsIGxvY2FsZm9yYWdlXzEuZGVmYXVsdC5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBkcml2ZXI6IFtsb2NhbGZvcmFnZV8xLmRlZmF1bHQuSU5ERVhFRERCLCBsb2NhbGZvcmFnZV8xLmRlZmF1bHQuV0VCU1FMXVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRDb2xsZWN0aW9uO1xuICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50R3JhcGg7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRWaWV3O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY29sbGVjdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuY3VycmVudENvbGxlY3Rpb24gPSBgY29sbGVjdGlvbl8ke25hbWV9YDtcbiAgICAgICAgdGhpcy5nZXREYXRhYmFzZSgpLmNvbmZpZyh7IHN0b3JlTmFtZTogdGhpcy5jdXJyZW50Q29sbGVjdGlvbiB9KTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudEdyYXBoO1xuICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50VmlldztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHZpZXcobmFtZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gYHZpZXdfJHtuYW1lfWA7XG4gICAgICAgIHRoaXMuZ2V0RGF0YWJhc2UoKS5jb25maWcoeyBzdG9yZU5hbWU6IHRoaXMuY3VycmVudFZpZXcgfSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRDb2xsZWN0aW9uO1xuICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50R3JhcGg7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBncmFwaChuYW1lKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEdyYXBoID0gYGdyYXBoXyR7bmFtZX1gO1xuICAgICAgICB0aGlzLmdldERhdGFiYXNlKCkuY29uZmlnKHsgc3RvcmVOYW1lOiB0aGlzLmN1cnJlbnRHcmFwaCB9KTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudENvbGxlY3Rpb247XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRWaWV3O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0KGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGFiYXNlKCkuZ2V0SXRlbShpZCk7XG4gICAgfVxuICAgIGluc2VydChpZCwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5zZXRJdGVtKGlkLCB2YWx1ZSk7XG4gICAgfVxuICAgIHVwZGF0ZShpZCwgdmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZ2V0KGlkKSB8fCB7fTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlc3VsdCwgdmFsdWVzKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmluc2VydChpZCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVsZXRlKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGFiYXNlKCkucmVtb3ZlSXRlbShpZCk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhYmFzZSgpLmNsZWFyKCk7XG4gICAgfVxuICAgIGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5sZW5ndGgoKTtcbiAgICB9XG4gICAga2V5KGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGFiYXNlKCkua2V5KGluZGV4KTtcbiAgICB9XG4gICAga2V5cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5rZXlzKCk7XG4gICAgfVxuICAgIGl0ZXJhdGUoaXRlcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5pdGVyYXRlKGl0ZXJhdG9yKTtcbiAgICB9XG4gICAgZ2V0RGF0YWJhc2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50RGF0YWJhc2UpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBEYXRhYmFzZSBjaG9zZW5cIik7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFiYXNlcy5nZXQodGhpcy5jdXJyZW50RGF0YWJhc2UpO1xuICAgIH1cbn1cbmV4cG9ydHMuRGF0YWJhc2VNYW5hZ2VyID0gRGF0YWJhc2VNYW5hZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUkdGMFlXSmhjMlZOWVc1aFoyVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlqYkdsbGJuUXZkSE12YkdsaUwwUmhkR0ZpWVhObFRXRnVZV2RsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZEUVN4dlJVRkJhVVU3UVVGRGFrVXNjMFZCUVhORE8wRkJSWFJETEUxQlFXRXNaVUZCZDBZc1UwRkJVU3gxUTBGQmEwSTdTVUZ0UWpOSU8xRkJRMGtzUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZTU2l4alFVRlRMRWRCUVhkQ0xFbEJRVWtzUjBGQlJ5eEZRVUZyUWl4RFFVRkRPMGxCVTI1RkxFTkJRVU03U1VGUVRTeE5RVUZOTEVOQlFVTXNWMEZCVnp0UlFVTnlRaXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEZGQlFWRTdXVUZCUlN4bFFVRmxMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzWlVGQlpTeEZRVUZGTEVOQlFVTTdVVUZEYUVZc1QwRkJUeXhsUVVGbExFTkJRVU1zVVVGQlVTeERRVUZETzBsQlEzQkRMRU5CUVVNN1NVRk5UU3hSUVVGUkxFTkJRVU1zU1VGQlR6dFJRVU51UWl4SlFVRkpMRU5CUVVNc1pVRkJaU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU0xUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkRkRU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxIRkNRVUZYTEVOQlFVTXNZMEZCWXl4RFFVRkRPMmRDUVVOb1JDeEpRVUZKTEVWQlFVVXNTVUZCU1R0blFrRkRWaXhOUVVGTkxFVkJRVVVzUTBGQlF5eHhRa0ZCVnl4RFFVRkRMRk5CUVZNc1JVRkJSU3h4UWtGQlZ5eERRVUZETEUxQlFVMHNRMEZCUXp0aFFVTjBSQ3hEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5RTzFGQlEwUXNUMEZCVHl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTTdVVUZET1VJc1QwRkJUeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETzFGQlEzcENMRTlCUVU4c1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dFJRVU40UWl4UFFVRlBMRWxCUVVrc1EwRkJRenRKUVVOb1FpeERRVUZETzBsQlJVMHNWVUZCVlN4RFFVRkRMRWxCUVU4N1VVRkRja0lzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhIUVVGTkxHTkJRV01zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEYWtRc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRMnBGTEU5QlFVOHNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJRenRSUVVONlFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRlRUlzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEYUVJc1EwRkJRenRKUVVWTkxFbEJRVWtzUTBGQlF5eEpRVUZQTzFGQlEyWXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJUU3hSUVVGUkxFbEJRVWtzUlVGQlJTeERRVUZETzFGQlEzSkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNN1VVRkRPVUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRPMUZCUTNwQ0xFOUJRVThzU1VGQlNTeERRVUZETzBsQlEyaENMRU5CUVVNN1NVRkZUU3hMUVVGTExFTkJRVU1zU1VGQlR6dFJRVU5vUWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGTkxGTkJRVk1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEZGtNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTFSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJRenRSUVVNNVFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRlRUlzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEYUVJc1EwRkJRenRKUVVWTkxFZEJRVWNzUTBGQlF5eEZRVUZWTzFGQlEycENMRTlCUVU4c1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVNeFF5eERRVUZETzBsQlJVMHNUVUZCVFN4RFFVRkRMRVZCUVZVc1JVRkJSU3hMUVVGclF6dFJRVU40UkN4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMnBFTEVOQlFVTTdTVUZGVFN4TlFVRk5MRU5CUVVNc1JVRkJWU3hGUVVGRkxFMUJRVzFETzFGQlEzcEVMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1JVRkJSVHRaUVVONlF5eEpRVUZKTzJkQ1FVTkJMRTFCUVUwc1RVRkJUU3hIUVVGSExFMUJRVTBzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03WjBKQlEzaERMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMmRDUVVNNVFpeE5RVUZOTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzJkQ1FVTTVRaXhQUVVGUExFVkJRVVVzUTBGQlF6dGhRVU5pTzFsQlFVTXNUMEZCVHl4TFFVRkxMRVZCUVVVN1owSkJRMW9zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMkZCUTJwQ08xRkJRMHdzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEVUN4RFFVRkRPMGxCUlUwc1RVRkJUU3hEUVVGRExFVkJRVlU3VVVGRGNFSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zVlVGQlZTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpkRExFTkJRVU03U1VGRlRTeExRVUZMTzFGQlExSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdTVUZEZEVNc1EwRkJRenRKUVVWTkxFMUJRVTA3VVVGRFZDeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dEpRVU4yUXl4RFFVRkRPMGxCUlUwc1IwRkJSeXhEUVVGRExFdEJRV0U3VVVGRGNFSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNwRExFTkJRVU03U1VGRlRTeEpRVUZKTzFGQlExQXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdTVUZEY2tNc1EwRkJRenRKUVVWTkxFOUJRVThzUTBGQlF5eFJRVUU0Ump0UlFVTjZSeXhQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03U1VGRGFFUXNRMEZCUXp0SlFVVlBMRmRCUVZjN1VVRkRaaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVTdXVUZCUlN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRU5CUVVNN1VVRkRha1VzVDBGQlR5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZuUWl4RFFVRkRPMGxCUTI1RkxFTkJRVU03UTBGRlNqdEJRUzlIUkN3d1EwRXJSME1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcblwidXNlIHN0cmljdFwiO1xuY29uc3QgQkRPTG9nZ2VyXzEgPSByZXF1aXJlKFwifmJkby9saWIvQkRPTG9nZ2VyXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmxldCBMb2dnZXIgPSBjbGFzcyBMb2dnZXIgZXh0ZW5kcyBCRE9Mb2dnZXJfMS5CRE9Mb2dnZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgICAgICBzdXBlcihwYXJhbXMpO1xuICAgICAgICB0aGlzLmxvZ0xldmVsQ29sb3JzID0ge1xuICAgICAgICAgICAgbG9nOiAnY29sb3I6IGdyYXk7IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICBkZWJ1ZzogJ2NvbG9yOiBncmVlbjsgZm9udC13ZWlnaHQ6IGJvbGQ7JyxcbiAgICAgICAgICAgIGluZm86ICdjb2xvcjogIzAwODA2QjsgZm9udC13ZWlnaHQ6IGJvbGQ7JyxcbiAgICAgICAgICAgIHdhcm46ICdjb2xvcjogIzgwODAwMDsgZm9udC13ZWlnaHQ6IGJvbGQ7JyxcbiAgICAgICAgICAgIGVycm9yOiAnY29sb3I6IHJlZDsgZm9udC13ZWlnaHQ6IGJvbGQ7J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRIZWFkZXIobG9nTGV2ZWwsIHByaW50RW52ID0gJ2NvbnNvbGUnKSB7XG4gICAgICAgIGNvbnN0IHByb2NJbmZvID0gdGhpcy5nZXRQcm9jSW5mbygpO1xuICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IHRoaXMuY3VycmVudFRpbWUoKTtcbiAgICAgICAgY29uc3QgdXBwZXJMb2dMZXZlbCA9IGxvZ0xldmVsLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvZ1BvaW50ID0gdGhpcy5nZXRMb2dQb2ludCgpO1xuICAgICAgICBjb25zdCByZXNldFN0eWxlID0gJ2NvbG9yOiBibGFjazsgZm9udC13ZWlnaHQ6IG5vcm1hbCc7XG4gICAgICAgIGNvbnN0IG1hZ2VudGEgPSAnY29sb3I6ICM4MDAwODA7IGZvbnQtd2VpZ2h0OiBub3JtYWwnO1xuICAgICAgICBjb25zdCBjeWFuID0gJ2NvbG9yOiAjMDA4MDZCOyBmb250LXdlaWdodDogbm9ybWFsJztcbiAgICAgICAgaWYgKHByaW50RW52ID09PSAnY29uc29sZScpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZExvZ0xldmVsID0gdGhpcy5sb2dMZXZlbENvbG9yc1tsb2dMZXZlbF07XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRMb2dQb2ludCA9IG1hZ2VudGE7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gY3lhbjtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFByb2NJbmZvID0gbWFnZW50YTtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgYCVjWyVjJHt1cHBlckxvZ0xldmVsfSAlYy0gJWMke3Byb2NJbmZvfSAlYy0gJWMke2N1cnJlbnRUaW1lfSAlY2F0ICVjJHtsb2dQb2ludH0lY11gLFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkTG9nTGV2ZWwsXG4gICAgICAgICAgICAgICAgcmVzZXRTdHlsZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRQcm9jSW5mbyxcbiAgICAgICAgICAgICAgICByZXNldFN0eWxlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZFRpbWUsXG4gICAgICAgICAgICAgICAgcmVzZXRTdHlsZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRMb2dQb2ludCxcbiAgICAgICAgICAgICAgICByZXNldFN0eWxlXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgWyR7dXBwZXJMb2dMZXZlbH0gLSAke3Byb2NJbmZvfSAtICR7Y3VycmVudFRpbWV9IC0gJHtsb2dQb2ludH1dYDtcbiAgICB9XG4gICAgd3JpdGVUb0ZpbGUoX2xvZ0xldmVsLCBfbWVzc2FnZSkge1xuICAgIH1cbn07XG5Mb2dnZXIgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBDb25zdFBhcmFtcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBDb25zdFBhcmFtcykgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0XSlcbl0sIExvZ2dlcik7XG5leHBvcnRzLkxvZ2dlciA9IExvZ2dlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVRHOW5aMlZ5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5amJHbGxiblF2ZEhNdmJHbGlMMHh2WjJkbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMR3RFUVVFMlJUdEJRVU0zUlN4elJFRkJkMFE3UVVGVmVFUXNTVUZCWVN4TlFVRk5MRWRCUVc1Q0xFMUJRV0VzVFVGQlR5eFRRVUZSTEhGQ1FVRlRPMGxCWldwRExGbEJRVmtzVFVGQk5FSTdVVUZEY0VNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlZGWXNiVUpCUVdNc1IwRkJSenRaUVVOeVFpeEhRVUZITEVWQlFVVXNhVU5CUVdsRE8xbEJRM1JETEV0QlFVc3NSVUZCUlN4clEwRkJhME03V1VGRGVrTXNTVUZCU1N4RlFVRkZMRzlEUVVGdlF6dFpRVU14UXl4SlFVRkpMRVZCUVVVc2IwTkJRVzlETzFsQlF6RkRMRXRCUVVzc1JVRkJSU3huUTBGQlowTTdVMEZETVVNc1EwRkJRenRKUVVsR0xFTkJRVU03U1VGWFV5eFRRVUZUTEVOQlFVTXNVVUZCYlVJc1JVRkJSU3hYUVVFNFFpeFRRVUZUTzFGQlF6VkZMRTFCUVUwc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVTndReXhOUVVGTkxGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1VVRkRka01zVFVGQlRTeGhRVUZoTEVkQlFVY3NVVUZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8xRkJRemRETEUxQlFVMHNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dFJRVU53UXl4TlFVRk5MRlZCUVZVc1IwRkJSeXh0UTBGQmJVTXNRMEZCUXp0UlFVTjJSQ3hOUVVGTkxFOUJRVThzUjBGQlJ5eHhRMEZCY1VNc1EwRkJRenRSUVVOMFJDeE5RVUZOTEVsQlFVa3NSMEZCUnl4eFEwRkJjVU1zUTBGQlF6dFJRVU51UkN4SlFVRkpMRkZCUVZFc1MwRkJTeXhUUVVGVExFVkJRVVU3V1VGRGVFSXNUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xbEJRM2hFTEUxQlFVMHNhVUpCUVdsQ0xFZEJRVWNzVDBGQlR5eERRVUZETzFsQlEyeERMRTFCUVUwc1lVRkJZU3hIUVVGSExFbEJRVWtzUTBGQlF6dFpRVU16UWl4TlFVRk5MR2xDUVVGcFFpeEhRVUZITEU5QlFVOHNRMEZCUXp0WlFVTnNReXhQUVVGUE8yZENRVU5JTEZGQlFWRXNZVUZCWVN4VlFVRlZMRkZCUVZFc1ZVRkJWU3hYUVVGWExGZEJRVmNzVVVGQlVTeExRVUZMTzJkQ1FVTndSaXhWUVVGVk8yZENRVU5XTEdsQ1FVRnBRanRuUWtGRGFrSXNWVUZCVlR0blFrRkRWaXhwUWtGQmFVSTdaMEpCUTJwQ0xGVkJRVlU3WjBKQlExWXNZVUZCWVR0blFrRkRZaXhWUVVGVk8yZENRVU5XTEdsQ1FVRnBRanRuUWtGRGFrSXNWVUZCVlR0aFFVTmlMRU5CUVVNN1UwRkRURHRSUVVORUxFOUJRVThzU1VGQlNTeGhRVUZoTEUxQlFVMHNVVUZCVVN4TlFVRk5MRmRCUVZjc1RVRkJUU3hSUVVGUkxFZEJRVWNzUTBGQlF6dEpRVU0zUlN4RFFVRkRPMGxCVlZNc1YwRkJWeXhEUVVGRExGTkJRVzlDTEVWQlFVVXNVVUZCWVR0SlFVVjZSQ3hEUVVGRE8wTkJRMG9zUTBGQlFUdEJRWEJGV1N4TlFVRk5PMGxCUkd4Q0xEUkNRVUZsTEVWQlFVVTdhVVZCWjBKUExGZEJRVmNzYjBKQlFWZ3NWMEZCVnp0SFFXWjJRaXhOUVVGTkxFTkJiMFZzUWp0QlFYQkZXU3gzUWtGQlRTSjkiLCJ2YXIgbWFwID0ge1xuXHRcIi4vVGVzdC50c1wiOiBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvbW9kZWxzL1Rlc3QudHNcIixcblx0XCIuL1Rlc3QxLnRzXCI6IFwiLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdDEudHNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwudHMkXCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgQkRPVGVzdF8xID0gcmVxdWlyZShcIn5iZG8vbW9kZWxzL0JET1Rlc3RcIik7XG5jb25zdCBDbGllbnRNb2RlbF8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0NsaWVudE1vZGVsXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmxldCBUZXN0ID0gY2xhc3MgVGVzdCBleHRlbmRzIEJET1Rlc3RfMS5CRE9UZXN0RmFjdG9yeShDbGllbnRNb2RlbF8xLkNsaWVudE1vZGVsKSB7XG4gICAgY29uc3RydWN0b3IoX3BhcmFtcykge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICB0ZXN0KCkge1xuICAgIH1cbn07XG5UZXN0ID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKHsgY29sbGVjdGlvbk5hbWU6IFwiVGVzdFwiIH0pLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIENvbnN0UGFyYW1zICE9PSBcInVuZGVmaW5lZFwiICYmIENvbnN0UGFyYW1zKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3RdKVxuXSwgVGVzdCk7XG5leHBvcnRzLlRlc3QgPSBUZXN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVkdWemRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMMjF2WkdWc2N5OVVaWE4wTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVN4cFJFRkJjVVE3UVVGRGNrUXNlVVJCUVhORU8wRkJRM1JFTEhORVFVRjNSRHRCUVZWNFJDeEpRVUZoTEVsQlFVa3NSMEZCYWtJc1RVRkJZU3hKUVVGTExGTkJRVkVzZDBKQlFXTXNRMEZCUXl4NVFrRkJWeXhEUVVGRE8wbEJSV3BFTEZsQlFWa3NUMEZCTWtJN1VVRkRia01zUzBGQlN5eEZRVUZGTEVOQlFVTTdTVUZEV2l4RFFVRkRPMGxCVDAwc1NVRkJTVHRKUVVWWUxFTkJRVU03UTBGRFNpeERRVUZCTzBGQlpGa3NTVUZCU1R0SlFVUm9RaXcwUWtGQlpTeERRVUZETEVWQlFVVXNZMEZCWXl4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRE8ybEZRVWRzUWl4WFFVRlhMRzlDUVVGWUxGZEJRVmM3UjBGR2VFSXNTVUZCU1N4RFFXTm9RanRCUVdSWkxHOUNRVUZKSW4wPSIsIlwidXNlIHN0cmljdFwiO1xudmFyIFRlc3QxXzEsIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJET1Rlc3QxXzEgPSByZXF1aXJlKFwifmJkby9tb2RlbHMvQkRPVGVzdDFcIik7XG5jb25zdCBUZXN0XzEgPSByZXF1aXJlKFwifmNsaWVudC9tb2RlbHMvVGVzdFwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5sZXQgVGVzdDEgPSBUZXN0MV8xID0gY2xhc3MgVGVzdDEgZXh0ZW5kcyBCRE9UZXN0MV8xLkJET1Rlc3QxRmFjdG9yeShUZXN0XzEuVGVzdCkge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgICAgICBzdXBlcihwYXJhbXMpO1xuICAgIH1cbiAgICBhc3luYyB3YWRkZSgpIHtcbiAgICAgICAgY29uc3QgdGVzdCA9IGF3YWl0IFRlc3QxXzEuZ2V0SW5zdGFuY2VCeUlEKHRoaXMuaWQpO1xuICAgICAgICBpZiAodGVzdClcbiAgICAgICAgICAgIHJldHVybiB0ZXN0LmdldFVuc2F2ZWRDaGFuZ2VzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59O1xuVGVzdDEgPSBUZXN0MV8xID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKHsgY29sbGVjdGlvbk5hbWU6IFwiVGVzdDFcIiB9KSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBDb25zdFBhcmFtcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBDb25zdFBhcmFtcykgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0XSlcbl0sIFRlc3QxKTtcbmV4cG9ydHMuVGVzdDEgPSBUZXN0MTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHVnpkREV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJOc2FXVnVkQzkwY3k5dGIyUmxiSE12VkdWemRERXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVTkJMRzFFUVVGMVJEdEJRVU4yUkN3NFEwRkJNa003UVVGRE0wTXNjMFJCUVhkRU8wRkJWWGhFTEVsQlFXRXNTMEZCU3l4aFFVRnNRaXhOUVVGaExFdEJRVTBzVTBGQlVTd3dRa0ZCWlN4RFFVRkRMRmRCUVVrc1EwRkJRenRKUVVVMVF5eFpRVUZaTEUxQlFUSkNPMUZCUTI1RExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVTnNRaXhEUVVGRE8wbEJUMDBzUzBGQlN5eERRVUZETEV0QlFVczdVVUZEWkN4TlFVRk5MRWxCUVVrc1IwRkJSeXhOUVVGTkxFOUJRVXNzUTBGQlF5eGxRVUZsTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRMnhFTEVsQlFVa3NTVUZCU1R0WlFVRkZMRTlCUVU4c1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RlFVRkZMRU5CUVVNN1VVRkRNVU1zVDBGQlR6dEpRVU5ZTEVOQlFVTTdRMEZEU2l4RFFVRkJPMEZCYUVKWkxFdEJRVXM3U1VGRWFrSXNORUpCUVdVc1EwRkJReXhGUVVGRkxHTkJRV01zUlVGQlJTeFBRVUZQTEVWQlFVVXNRMEZCUXp0cFJVRkhjRUlzVjBGQlZ5eHZRa0ZCV0N4WFFVRlhPMGRCUm5aQ0xFdEJRVXNzUTBGblFtcENPMEZCYUVKWkxITkNRVUZMSW4wPSIsInZhciBtYXAgPSB7XG5cdFwiLi9Db25maWcudHNcIjogXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9Db25maWcudHNcIixcblx0XCIuL0dhbWVMb2JieS50c1wiOiBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0dhbWVMb2JieS50c1wiLFxuXHRcIi4vSG9tZS50c1wiOiBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0hvbWUudHNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwudHMkXCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBDbGllbnRSb3V0ZV8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0NsaWVudFJvdXRlXCIpO1xuY29uc3QgQkRPQ29uZmlnXzEgPSByZXF1aXJlKFwifmJkby9yb3V0ZXMvQkRPQ29uZmlnXCIpO1xuY2xhc3MgQ29uZmlnIGV4dGVuZHMgQkRPQ29uZmlnXzEuQkRPQ29uZmlnRmFjdG9yeShDbGllbnRSb3V0ZV8xLkNsaWVudFJvdXRlKSB7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBDb25maWc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMjl1Wm1sbkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOWpiR2xsYm5RdmRITXZjbTkxZEdWekwwTnZibVpwWnk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTEhsRVFVRnpSRHRCUVVOMFJDeHhSRUZCZVVRN1FVRlhla1FzVFVGQmNVSXNUVUZCVHl4VFFVRlJMRFJDUVVGblFpeERRVUZETEhsQ1FVRlhMRU5CUVVNN1EwRkJTVHRCUVVGeVJTeDVRa0ZCY1VVaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENsaWVudFJvdXRlXzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQ2xpZW50Um91dGVcIik7XG5jb25zdCBCRE9HYW1lTG9iYnlfMSA9IHJlcXVpcmUoXCJ+YmRvL3JvdXRlcy9CRE9HYW1lTG9iYnlcIik7XG5jbGFzcyBHYW1lTG9iYnkgZXh0ZW5kcyBCRE9HYW1lTG9iYnlfMS5CRE9HYW1lTG9iYnlGYWN0b3J5KENsaWVudFJvdXRlXzEuQ2xpZW50Um91dGUpIHtcbiAgICBhc3luYyB0ZW1wbGF0ZVBhcmFtcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRlc3Q6ICdsb2wnXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gR2FtZUxvYmJ5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUjJGdFpVeHZZbUo1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5amJHbGxiblF2ZEhNdmNtOTFkR1Z6TDBkaGJXVk1iMkppZVM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTEhsRVFVRnpSRHRCUVVOMFJDd3lSRUZCSzBRN1FVRlRMMFFzVFVGQmNVSXNVMEZCVlN4VFFVRlJMR3REUVVGdFFpeERRVUZETEhsQ1FVRlhMRU5CUVVNN1NVRlZla1FzUzBGQlN5eERRVUZETEdOQlFXTTdVVUZETVVJc1QwRkJUenRaUVVOSUxFbEJRVWtzUlVGQlJTeExRVUZMTzFOQlEyUXNRMEZCUXp0SlFVTk9MRU5CUVVNN1EwRkRTanRCUVdaRUxEUkNRV1ZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ2xpZW50Um91dGVfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9DbGllbnRSb3V0ZVwiKTtcbmNvbnN0IEJET0hvbWVfMSA9IHJlcXVpcmUoXCJ+YmRvL3JvdXRlcy9CRE9Ib21lXCIpO1xuY2xhc3MgSG9tZSBleHRlbmRzIEJET0hvbWVfMS5CRE9Ib21lRmFjdG9yeShDbGllbnRSb3V0ZV8xLkNsaWVudFJvdXRlKSB7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBIb21lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pU0c5dFpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMM0p2ZFhSbGN5OUliMjFsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUVzZVVSQlFYTkVPMEZCUTNSRUxHbEVRVUZ4UkR0QlFWTnlSQ3hOUVVGeFFpeEpRVUZMTEZOQlFWRXNkMEpCUVdNc1EwRkJReXg1UWtGQlZ5eERRVUZETzBOQlFVazdRVUZCYWtVc2RVSkJRV2xGSW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuZnVuY3Rpb24gc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2UoaW5zdGFuY2UsIGtleSwgbmV3VmFsLCBuc1Byb3AgPSBcImlkXCIpIHtcbiAgICBpZiAoa2V5ID09PSBcIipcIilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiKiBpcyBhIHNwZWNpYWwgY2hhcmFjdGVyIGFuZCBkb2VzIG5vdCBmb2xsb3cgdGhlIHByb3BlcnR5IGNvbnZlbnRpb25cIik7XG4gICAgY29uc3QgbnNQcmVmaXggPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoaW5zdGFuY2UuY29uc3RydWN0b3IpLm5hbWU7XG4gICAgbGV0IG5zU3VmZml4ID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShpbnN0YW5jZSwgXCJvbGRTdG9yYWdlTnNTdWZmaXhcIik7XG4gICAgbGV0IHN0b3JhZ2VWYWx1ZTtcbiAgICBpZiAoIW5zU3VmZml4KVxuICAgICAgICBuc1N1ZmZpeCA9IGluc3RhbmNlW25zUHJvcF07XG4gICAgbGV0IG5zID0gYCR7bnNQcmVmaXh9XyR7bnNTdWZmaXh9YDtcbiAgICBpZiAoa2V5ID09PSBuc1Byb3AgfHwgbnNTdWZmaXggIT09IGluc3RhbmNlW25zUHJvcF0pIHtcbiAgICAgICAgbnNTdWZmaXggPSBrZXkgPT09IG5zUHJvcCA/IG5ld1ZhbCA6IGluc3RhbmNlW25zUHJvcF07XG4gICAgICAgIGNvbnN0IG5ld05zID0gYCR7bnNQcmVmaXh9XyR7bnNTdWZmaXh9YDtcbiAgICAgICAgc3RvcmFnZVZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obnMpO1xuICAgICAgICBpZiAoc3RvcmFnZVZhbHVlKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShucyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuZXdOcywgc3RvcmFnZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBucyA9IG5ld05zO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3RvcmFnZVZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obnMpO1xuICAgICAgICBpZiAoc3RvcmFnZVZhbHVlKSB7XG4gICAgICAgICAgICBzdG9yYWdlVmFsdWUgPSBKU09OLnBhcnNlKHN0b3JhZ2VWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgc3RvcmFnZVZhbHVlID0ge307XG4gICAgICAgIGlmIChuZXdWYWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGVsZXRlIHN0b3JhZ2VWYWx1ZVtrZXldO1xuICAgICAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhzdG9yYWdlVmFsdWUpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShucywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZVZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obnMsIEpTT04uc3RyaW5naWZ5KE9iamVjdC5hc3NpZ24oc3RvcmFnZVZhbHVlLCB7IFtrZXldOiBuZXdWYWwgfSkpKTtcbiAgICB9XG4gICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YShpbnN0YW5jZSwgXCJvbGRTdG9yYWdlTnNTdWZmaXhcIiwgbnNTdWZmaXgpO1xufVxuZXhwb3J0cy5zZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSA9IHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlO1xuZnVuY3Rpb24gZ2V0TmFtZXNwYWNlZFN0b3JhZ2UoaW5zdGFuY2UsIGtleSwgbnNQcm9wID0gXCJpZFwiLCBmb3JjZU5TKSB7XG4gICAgY29uc3QgbnNQcmVmaXggPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoaW5zdGFuY2UuY29uc3RydWN0b3IpLm5hbWU7XG4gICAgbGV0IG5zU3VmZml4ID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShpbnN0YW5jZSwgXCJvbGRTdG9yYWdlTnNTdWZmaXhcIik7XG4gICAgaWYgKG5zU3VmZml4ICE9PSBpbnN0YW5jZVtuc1Byb3BdKVxuICAgICAgICBuc1N1ZmZpeCA9IGluc3RhbmNlW25zUHJvcF07XG4gICAgaWYgKGZvcmNlTlMpXG4gICAgICAgIG5zU3VmZml4ID0gZm9yY2VOUztcbiAgICBsZXQgc3RvcmFnZVZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7bnNQcmVmaXh9XyR7bnNTdWZmaXh9YCk7XG4gICAgaWYgKHN0b3JhZ2VWYWx1ZSlcbiAgICAgICAgc3RvcmFnZVZhbHVlID0gSlNPTi5wYXJzZShzdG9yYWdlVmFsdWUpO1xuICAgIGlmIChzdG9yYWdlVmFsdWUgJiYga2V5ID09PSBcIipcIilcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VWYWx1ZTtcbiAgICBpZiAoc3RvcmFnZVZhbHVlICYmIGtleSBpbiBzdG9yYWdlVmFsdWUpXG4gICAgICAgIHJldHVybiBzdG9yYWdlVmFsdWVba2V5XTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZXhwb3J0cy5nZXROYW1lc3BhY2VkU3RvcmFnZSA9IGdldE5hbWVzcGFjZWRTdG9yYWdlO1xuZnVuY3Rpb24gZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBrZXksIG5zUHJvcCA9IFwiaWRcIikge1xuICAgIGlmIChrZXkgPT09IFwiKlwiKSB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBnZXROYW1lc3BhY2VkU3RvcmFnZShpbnN0YW5jZSwga2V5LCBuc1Byb3ApO1xuICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gc3RvcmFnZSkge1xuICAgICAgICAgICAgaWYgKHN0b3JhZ2UuaGFzT3duUHJvcGVydHkocHJvcCkpXG4gICAgICAgICAgICAgICAgc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2UoaW5zdGFuY2UsIHByb3AsIHVuZGVmaW5lZCwgbnNQcm9wKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBrZXksIHVuZGVmaW5lZCwgbnNQcm9wKTtcbn1cbmV4cG9ydHMuZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlID0gZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhScGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMM1YwYVd4ekwzVjBhV3d1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3hyUkVGQmEwVTdRVUZWYkVVc1UwRkJaMElzTUVKQlFUQkNMRU5CUVVNc1VVRkJZU3hGUVVGRkxFZEJRVmNzUlVGQlJTeE5RVUZYTEVWQlFVVXNVMEZCYVVJc1NVRkJTVHRKUVVOeVJ5eEpRVUZKTEVkQlFVY3NTMEZCU3l4SFFVRkhPMUZCUVVVc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHpSVUZCYzBVc1EwRkJReXhEUVVGRE8wbEJSM3BITEUxQlFVMHNVVUZCVVN4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJRenRKUVVOc1JTeEpRVUZKTEZGQlFWRXNSMEZCUnl4elFrRkJWeXhEUVVGRExGRkJRVkVzUlVGQlJTeHZRa0ZCYjBJc1EwRkJReXhEUVVGRE8wbEJRek5FTEVsQlFVa3NXVUZCYVVJc1EwRkJRenRKUVVkMFFpeEpRVUZKTEVOQlFVTXNVVUZCVVR0UlFVRkZMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdTVUZETTBNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUjBGQlJ5eFJRVUZSTEVsQlFVa3NVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkRia01zU1VGQlNTeEhRVUZITEV0QlFVc3NUVUZCVFN4SlFVRkpMRkZCUVZFc1MwRkJTeXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVTdVVUZGYWtRc1VVRkJVU3hIUVVGSExFZEJRVWNzUzBGQlN5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTNSRUxFMUJRVTBzUzBGQlN5eEhRVUZITEVkQlFVY3NVVUZCVVN4SlFVRkpMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJRM2hETEZsQlFWa3NSMEZCUnl4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEzaERMRWxCUVVrc1dVRkJXU3hGUVVGRk8xbEJRMlFzV1VGQldTeERRVUZETEZWQlFWVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVNMVFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF6dFRRVU0zUXp0UlFVTkVMRVZCUVVVc1IwRkJSeXhMUVVGTExFTkJRVU03UzBGRFpEdFRRVUZOTzFGQlJVZ3NXVUZCV1N4SFFVRkhMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEZUVNc1NVRkJTU3haUVVGWkxFVkJRVVU3V1VGRFpDeFpRVUZaTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dFRRVU16UXpzN1dVRkJUU3haUVVGWkxFZEJRVWNzUlVGQlJTeERRVUZETzFGQlJYcENMRWxCUVVrc1RVRkJUU3hMUVVGTExGTkJRVk1zUlVGQlJUdFpRVU4wUWl4UFFVRlBMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU42UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVN1owSkJRMjVETEZsQlFWa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03WVVGREwwSTdPMmRDUVVGTkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTnFSVHM3V1VGQlRTeFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1JVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1dVRkJXU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dExRVU51Unp0SlFVVkVMSGxDUVVGakxFTkJRVU1zVVVGQlVTeEZRVUZGTEc5Q1FVRnZRaXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzBGQlF6ZEVMRU5CUVVNN1FVRnlRMFFzWjBWQmNVTkRPMEZCYTBKRUxGTkJRV2RDTEc5Q1FVRnZRaXhEUVVGRExGRkJRV0VzUlVGQlJTeEhRVUZYTEVWQlFVVXNVMEZCYVVJc1NVRkJTU3hGUVVGRkxFOUJRV2RDTzBsQlEzQkhMRTFCUVUwc1VVRkJVU3hIUVVGSExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU5zUlN4SlFVRkpMRkZCUVZFc1IwRkJSeXh6UWtGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4dlFrRkJiMElzUTBGQlF5eERRVUZETzBsQlF6TkVMRWxCUVVrc1VVRkJVU3hMUVVGTExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZCUlN4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlF5OUVMRWxCUVVrc1QwRkJUenRSUVVGRkxGRkJRVkVzUjBGQlJ5eFBRVUZQTEVOQlFVTTdTVUZEYUVNc1NVRkJTU3haUVVGWkxFZEJRVkVzV1VGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRkZCUVZFc1NVRkJTU3hSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEzaEZMRWxCUVVrc1dVRkJXVHRSUVVGRkxGbEJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8wbEJRekZFTEVsQlFVa3NXVUZCV1N4SlFVRkpMRWRCUVVjc1MwRkJTeXhIUVVGSE8xRkJRVVVzVDBGQlR5eFpRVUZaTEVOQlFVTTdTVUZEY2tRc1NVRkJTU3haUVVGWkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEZsQlFWazdVVUZCUlN4UFFVRlBMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU5zUlN4UFFVRlBMRk5CUVZNc1EwRkJRenRCUVVOeVFpeERRVUZETzBGQlZrUXNiMFJCVlVNN1FVRlhSQ3hUUVVGblFpd3lRa0ZCTWtJc1EwRkJReXhSUVVGaExFVkJRVVVzUjBGQlZ5eEZRVUZGTEZOQlFXbENMRWxCUVVrN1NVRkRla1lzU1VGQlNTeEhRVUZITEV0QlFVc3NSMEZCUnl4RlFVRkZPMUZCUTJJc1RVRkJUU3hQUVVGUExFZEJRVWNzYjBKQlFXOUNMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTTFSQ3hMUVVGTExFMUJRVTBzU1VGQlNTeEpRVUZKTEU5QlFVOHNSVUZCUlR0WlFVTjRRaXhKUVVGSkxFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRPMmRDUVVGRkxEQkNRVUV3UWl4RFFVRkRMRkZCUVZFc1JVRkJSU3hKUVVGSkxFVkJRVVVzVTBGQlV5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMU5CUTI1SE8wdEJRMG83TzFGQlFVMHNNRUpCUVRCQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlFVY3NSVUZCUlN4VFFVRlRMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03UVVGRGVFVXNRMEZCUXp0QlFWQkVMR3RGUVU5REluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFByb3BlcnR5XzEgPSByZXF1aXJlKFwifmJkby9saWIvUHJvcGVydHlcIik7XG5jb25zdCBlbnZpcm9ubWVudF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZW52aXJvbm1lbnRcIik7XG5jb25zdCBNb2RpZmljYXRpb25fMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Nb2RpZmljYXRpb25cIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgRXJyb3JzXzEgPSByZXF1aXJlKFwifmJkby9saWIvRXJyb3JzXCIpO1xuY29uc3QgTW9kZWxSZWdpc3RyeV8xID0gcmVxdWlyZShcIn5iZG8vbGliL01vZGVsUmVnaXN0cnlcIik7XG5jbGFzcyBBdHRyaWJ1dGUgZXh0ZW5kcyBQcm9wZXJ0eV8xLlByb3BlcnR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5LCBwYXJhbXMpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0LCBwcm9wZXJ0eSwgcGFyYW1zKTtcbiAgICAgICAgdGhpcy5pbkRPTUluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXV0b1NhdmVBbGxvd2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5zaG91bGREb1NldFZhbHVlKHZhbHVlKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbGV0IG9sZElEO1xuICAgICAgICBpZiAodGhpcy5vYmplY3QuaXNCRE9Nb2RlbCAmJiB0aGlzLnByb3BlcnR5ID09PSBcImlkXCIpXG4gICAgICAgICAgICBvbGRJRCA9IHRoaXMub3duVmFsdWU7XG4gICAgICAgIHRoaXMuZG9TZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIGlmIChvbGRJRClcbiAgICAgICAgICAgIE1vZGVsUmVnaXN0cnlfMS5Nb2RlbFJlZ2lzdHJ5LmdldEluc3RhbmNlKCkudXBkYXRlSUQob2xkSUQsIHRoaXMub2JqZWN0KTtcbiAgICAgICAgdGhpcy5yZWZsZWN0VG9ET01BdHRyaWJ1dGUodmFsdWUpO1xuICAgICAgICB0aGlzLmRvQXV0b1NhdmUoKTtcbiAgICB9XG4gICAgcHJveHlIYW5kbGVyKF9wYXRoLCBfY2hhbmdlZFZhbCwgX3ByZXZWYWwpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5kb1NldFZhbHVlKHV0aWxfMS5nZXRQcm94eVRhcmdldCh2YWx1ZSksIHRydWUsIHRydWUpO1xuICAgICAgICB0aGlzLnJlZmxlY3RUb0RPTUF0dHJpYnV0ZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuZG9BdXRvU2F2ZSgpO1xuICAgIH1cbiAgICBnZXRVbnNhdmVkQ2hhbmdlKCkgeyB9XG4gICAgc2hvdWxkRG9TZXRWYWx1ZSh2YWx1ZSwgc2tpcEd1YXJkID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGVudmlyb25tZW50XzEuaXNCcm93c2VyKCkgJiYgIXRoaXMub2JqZWN0LmlzQkRPTW9kZWwgJiYgKHRoaXMub2JqZWN0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RlZFR5cGUgPSB1dGlsXzEuY29uc3RydWN0VHlwZU9mSFRNTEF0dHJpYnV0ZSh0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5ET01Jbml0aWFsaXplZCAmJiB0aGlzLm9iamVjdC5nZXRBdHRyaWJ1dGUodGhpcy5wcm9wZXJ0eSkgJiYgdmFsdWUgIT09IGNvbnN0cnVjdGVkVHlwZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoY29uc3RydWN0ZWRUeXBlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEodmFsdWUgPT09IHRoaXMub3duVmFsdWUgfHwgIXNraXBHdWFyZCAmJiAhdGhpcy5kaXNhYmxlVHlwZUd1YXJkICYmICF0aGlzLnR5cGVHdWFyZCh2YWx1ZSkpO1xuICAgIH1cbiAgICByZWZsZWN0VG9ET01BdHRyaWJ1dGUodmFsdWUpIHtcbiAgICAgICAgaWYgKCFlbnZpcm9ubWVudF8xLmlzQnJvd3NlcigpIHx8ICEodGhpcy5vYmplY3QgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IHRoaXMucHJvcGVydHkudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgYXR0clZhbHVlID0gdGhpcy5vYmplY3QuZ2V0QXR0cmlidXRlKHN0cmluZ0tleSk7XG4gICAgICAgIGxldCBzZXRBdHRyaWJ1dGUgPSB0cnVlO1xuICAgICAgICBsZXQgcFRhcmdldDtcbiAgICAgICAgbGV0IHZhbHVlVG9QYXNzID0gdmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGlmaWNhdGlvbl8xLk1vZGlmaWNhdGlvbilcbiAgICAgICAgICAgIHZhbHVlVG9QYXNzID0gdmFsdWUudmFsdWVPZigpO1xuICAgICAgICBpZiAoIXRoaXMuaW5ET01Jbml0aWFsaXplZCAmJiBhdHRyVmFsdWUpIHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHBUYXJnZXQgPSB1dGlsXzEuZ2V0UHJveHlUYXJnZXQodmFsdWVUb1Bhc3MpO1xuICAgICAgICB0aGlzLmluRE9NSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICBpZiAoc2V0QXR0cmlidXRlICYmIGF0dHJWYWx1ZSAhPT0gcFRhcmdldCAmJiBhdHRyVmFsdWUgIT09IEpTT04uc3RyaW5naWZ5KHBUYXJnZXQpLnJlcGxhY2UoL1xcXCIvZywgXCInXCIpKSB7XG4gICAgICAgICAgICB0aGlzLm9iamVjdC5zZXRBdHRyaWJ1dGUoc3RyaW5nS2V5LCBwVGFyZ2V0LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9BdXRvU2F2ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b1NhdmUgJiYgdGhpcy5kb05vdFBlcnNpc3QpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcnNfMS5Db25maWd1cmF0aW9uRXJyb3IoXCJZb3UgaGF2ZSB0dXJuZWQgb24gYXV0b3NhdmUgYnV0IGF0IHRoZSBzYW1lIHRpbWUgaXQgaXMgZm9yYmlkZGVuIHRvIHBlcnNpc3QgdGhlIHZhbHVlIVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuYXV0b1NhdmVBbGxvd2VkKSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9TYXZlQWxsb3dlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmF1dG9TYXZlIHx8ICF1dGlsXzEuaXNGdW5jdGlvbih0aGlzLm9iamVjdC5zYXZlKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmF1dG9TYXZlID09PSBcImJvb2xlYW5cIilcbiAgICAgICAgICAgIHRoaXMub2JqZWN0LnNhdmUodGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5hdXRvU2F2ZSA9PT0gXCJudW1iZXJcIiAmJiAhdGhpcy5hdXRvU2F2ZVRpbWVvdXQpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b1NhdmVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vYmplY3Quc2F2ZSh0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5hdXRvU2F2ZVRpbWVvdXQ7XG4gICAgICAgICAgICB9LCBNYXRoLmFicyh0aGlzLmF1dG9TYXZlKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkF0dHJpYnV0ZSA9IEF0dHJpYnV0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFYUjBjbWxpZFhSbExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXNhV0l2UVhSMGNtbGlkWFJsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUVzWjBSQlFUaEVPMEZCUlRsRUxIZEVRVUZ0UkR0QlFVTnVSQ3gzUkVGQmNVUTdRVUZEY2tRc01FTkJRVEpHTzBGQlJUTkdMRFJEUVVGeFJEdEJRVU55UkN3d1JFRkJkVVE3UVVGM1JYWkVMRTFCUVdFc1UwRkJNa1FzVTBGQlVTeHRRa0ZCVVR0SlFYRkZjRVlzV1VGQldTeE5RVUZUTEVWQlFVVXNVVUZCVnl4RlFVRkZMRTFCUVdsRU8xRkJRMnBHTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1VVRkJVU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzFGQmNrSTFRaXh4UWtGQlowSXNSMEZCV1N4TFFVRkxMRU5CUVVNN1VVRnJRbXhETEc5Q1FVRmxMRWRCUVZrc1MwRkJTeXhEUVVGRE8wbEJTWHBETEVOQlFVTTdTVUZSVFN4UlFVRlJMRU5CUVVNc1MwRkJaME03VVVGRE5VTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4TFFVRkxMRU5CUVVNN1dVRkJSU3hQUVVGUE8xRkJRekZETEVsQlFVa3NTMEZCU3l4RFFVRkRPMUZCUTFZc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hMUVVGTExFbEJRVWs3V1VGQlJTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJRenRSUVVNMVJTeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEYmtNc1NVRkJTU3hMUVVGTE8xbEJRVVVzTmtKQlFXRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOd1JTeEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEYkVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETzBsQlEzUkNMRU5CUVVNN1NVRlJUU3haUVVGWkxFTkJRVU1zUzBGQll5eEZRVUZGTEZkQlFXdENMRVZCUVVVc1VVRkJaVHRSUVVOdVJTeE5RVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRM3BDTEVsQlFVa3NTMEZCU3l4TFFVRkxMRk5CUVZNc1NVRkJTU3hMUVVGTExFdEJRVXNzU1VGQlNUdFpRVUZGTEU5QlFVODdVVUZEYkVRc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eHhRa0ZCWXl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTnVSQ3hKUVVGSkxFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRGJFTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8wbEJRM1JDTEVOQlFVTTdTVUZUVFN4blFrRkJaMElzUzBGQlN5eERRVUZETzBsQlZYUkNMR2RDUVVGblFpeERRVUZETEV0QlFXZERMRVZCUVVVc1dVRkJjVUlzUzBGQlN6dFJRVU5vUml4SlFVRkpMSFZDUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNXVUZCV1N4WFFVRlhMRU5CUVVNc1JVRkJSVHRaUVVOb1JpeE5RVUZOTEdWQlFXVXNSMEZCUnl4dFEwRkJORUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVU5xUml4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hMUVVGTExFdEJRVXNzWlVGQlpTeEZRVUZGTzJkQ1FVTm9SeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRPMmRDUVVNdlFpeFBRVUZQTEV0QlFVc3NRMEZCUXp0aFFVTm9RanRUUVVOS08xRkJRMFFzVDBGQlR5eERRVUZETEVOQlFVTXNTMEZCU3l4TFFVRkxMRWxCUVVrc1EwRkJReXhSUVVGUkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZUVjc1EwRkJRenRKUVdOTkxIRkNRVUZ4UWl4RFFVRkRMRXRCUVdkRE8xRkJRM3BFTEVsQlFVa3NRMEZCUXl4MVFrRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRmxCUVZrc1YwRkJWeXhEUVVGRE8xbEJRVVVzVDBGQlR6dFJRVU5zUlN4TlFVRk5MRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUXpORExFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzFGQlEzUkVMRWxCUVVrc1dVRkJXU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU40UWl4SlFVRkpMRTlCUVU4c1EwRkJRenRSUVVWYUxFbEJRVWtzVjBGQlZ5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTjRRaXhKUVVGSkxFdEJRVXNzV1VGQldTd3lRa0ZCV1R0WlFVRkZMRmRCUVZjc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdVVUZGYWtVc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1NVRkJTU3hUUVVGVExFVkJRVVU3V1VGRGNrTXNXVUZCV1N4SFFVRkhMRXRCUVVzc1EwRkJRenRUUVVONFFqczdXVUZCVFN4UFFVRlBMRWRCUVVjc2NVSkJRV01zUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTTNReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJSemRDTEVsQlFVa3NXVUZCV1N4SlFVRkpMRk5CUVZNc1MwRkJTeXhQUVVGUExFbEJRVWtzVTBGQlV5eExRVUZMTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNNVJpeEpRVUZKTEVOQlFVTXNUVUZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhUUVVGVExFVkJRVVVzVDBGQlR5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMU5CUXpsRU8wbEJRMHdzUTBGQlF6dEpRVlZQTEZWQlFWVTdVVUZEWkN4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFbEJRVWtzU1VGQlNTeERRVUZETEZsQlFWa3NSVUZCUlR0WlFVTndReXhOUVVGTkxFbEJRVWtzTWtKQlFXdENMRU5CUVVNc2QwWkJRWGRHTEVOQlFVTXNRMEZCUXp0VFFVTXhTRHRSUVVORUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZPMWxCUTNaQ0xFbEJRVWtzUTBGQlF5eGxRVUZsTEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUXpWQ0xFOUJRVTg3VTBGRFZqdFJRVU5FTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hKUVVGSkxFTkJRVU1zYVVKQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF6dFpRVUZGTEU5QlFVODdVVUZETlVRc1NVRkJTU3hQUVVGUExFbEJRVWtzUTBGQlF5eFJRVUZSTEV0QlFVc3NVMEZCVXp0WlFVRkZMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVONFJTeEpRVUZKTEU5QlFVOHNTVUZCU1N4RFFVRkRMRkZCUVZFc1MwRkJTeXhSUVVGUkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZPMWxCUXpWRUxFbEJRVWtzUTBGQlF5eGxRVUZsTEVkQlFVY3NWVUZCVlN4RFFVRkRMRWRCUVVjc1JVRkJSVHRuUWtGRGJrTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMmRDUVVOb1F5eFBRVUZQTEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNN1dVRkRhRU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdVMEZETDBJN1NVRkRUQ3hEUVVGRE8wTkJRMG83UVVFM1RFUXNPRUpCTmt4REluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBtc18xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm1zXCIpKTtcbmNvbnN0IEJET01hcENhY2hlXzEgPSByZXF1aXJlKFwifmJkby9saWIvQkRPTWFwQ2FjaGVcIik7XG5jbGFzcyBCRE9Db25maWdNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBCRE9NYXBDYWNoZV8xLkJET01hcENhY2hlKCk7XG4gICAgfVxuICAgIGFzeW5jIGdldChjb25maWcpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gYXdhaXQgdGhpcy5nZXRDYWNoZShjb25maWcpO1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGF3YWl0IHRoaXMubG9hZChjb25maWcpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRDYWNoZShjb25maWcsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKTtcbiAgICB9XG4gICAgZ2V0Q2FjaGUoY29uZmlnKSB7XG4gICAgICAgIGNvbnN0IGZyb21Mb2NhbENhY2hlID0gdGhpcy5jYWNoZS5nZXQoY29uZmlnKTtcbiAgICAgICAgaWYgKGZyb21Mb2NhbENhY2hlKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbUxvY2FsQ2FjaGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGFzeW5jIHNldENhY2hlKGNvbmZpZywgdmFsdWUpIHtcbiAgICAgICAgbGV0IGNvbmYgPSB0aGlzLmNhY2hlLmdldCgnX19Db25maWdNYW5hZ2VyQ2FjaGVUaW1lb3V0X18nKTtcbiAgICAgICAgaWYgKCF0aGlzLmNhY2hlLmhhcygnX19Db25maWdNYW5hZ2VyQ2FjaGVUaW1lb3V0X18nKSkge1xuICAgICAgICAgICAgY29uZiA9IChhd2FpdCB0aGlzLmxvYWQoJ2NvbmZpZycpKS50aW1lb3V0cy5jb25maWdDYWNoZTtcbiAgICAgICAgICAgIGlmIChjb25mKVxuICAgICAgICAgICAgICAgIGNvbmYgPSBtc18xLmRlZmF1bHQoY29uZik7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnNldCgnX19Db25maWdNYW5hZ2VyQ2FjaGVUaW1lb3V0X18nLCBjb25mKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlLnNldChjb25maWcsIHZhbHVlLCBjb25mKTtcbiAgICB9XG59XG5leHBvcnRzLkJET0NvbmZpZ01hbmFnZXIgPSBCRE9Db25maWdNYW5hZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFEyOXVabWxuVFdGdVlXZGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2YkdsaUwwSkVUME52Ym1acFowMWhibUZuWlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc2IwUkJRVzlDTzBGQlEzQkNMSE5FUVVGdFJEdEJRVzFDYmtRc1RVRkJjMElzWjBKQlFXZENPMGxCUVhSRE8xRkJWV01zVlVGQlN5eEhRVUUyUWl4SlFVRkpMSGxDUVVGWExFVkJRVVVzUTBGQlF6dEpRWGRGYkVVc1EwRkJRenRKUVM5RVZTeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVdNN1VVRkRNMElzU1VGQlNTeExRVUZMTEVkQlFVY3NUVUZCVFN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEzaERMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVU3V1VGRFVpeExRVUZMTEVkQlFVY3NUVUZCVFN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFsQlEyaERMRTFCUVUwc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1UwRkRkRU03VVVGRFJDeFBRVUZQTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJFTXNRMEZCUXp0SlFUaENVeXhSUVVGUkxFTkJRVU1zVFVGQll6dFJRVU0zUWl4TlFVRk5MR05CUVdNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVNNVF5eEpRVUZKTEdOQlFXTXNSVUZCUlR0WlFVTm9RaXhQUVVGUExHTkJRV01zUTBGQlF6dFRRVU42UWp0UlFVTkVMRTlCUVU4c1NVRkJTU3hEUVVGRE8wbEJRMmhDTEVOQlFVTTdTVUZYVXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRV01zUlVGQlJTeExRVUZWTzFGQlF5OURMRWxCUVVrc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMQ3RDUVVFclFpeERRVUZETEVOQlFVTTdVVUZETTBRc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMQ3RDUVVFclFpeERRVUZETEVWQlFVVTdXVUZEYkVRc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXp0WlFVTjRSQ3hKUVVGSkxFbEJRVWs3WjBKQlFVVXNTVUZCU1N4SFFVRkhMRmxCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU14UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5d3JRa0ZCSzBJc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU42UkR0UlFVTkVMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNSVUZCUlN4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRGVFTXNRMEZCUXp0RFFVTktPMEZCYkVaRUxEUkRRV3RHUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgQkRPRGF0YWJhc2VtYW5hZ2VyIHtcbn1cbmV4cG9ydHMuQkRPRGF0YWJhc2VtYW5hZ2VyID0gQkRPRGF0YWJhc2VtYW5hZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFJHRjBZV0poYzJWTllXNWhaMlZ5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5c2FXSXZRa1JQUkdGMFlXSmhjMlZOWVc1aFoyVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlEwRXNUVUZCYzBJc2EwSkJRV3RDTzBOQlJYWkRPMEZCUmtRc1owUkJSVU1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IG1vbWVudF8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm1vbWVudFwiKSk7XG5jb25zdCBwYXRoXzEgPSByZXF1aXJlKFwicGF0aFwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jbGFzcyBCRE9Mb2dnZXIge1xuICAgIGNvbnN0cnVjdG9yKF9wYXJhbXMpIHtcbiAgICAgICAgdGhpcy5sb2dGaWxlID0gJ2RlZmF1bHQubG9nJztcbiAgICAgICAgdGhpcy5wcmV2ZW50Q29uc29sZVByaW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJldmVudEZpbGVQcmludCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvZ0xldmVsID0gJ2RlYnVnJztcbiAgICAgICAgdGhpcy5wcm90b3R5cGVOYW1lcyA9IHV0aWxfMS5nZXRQcm90b3R5cGVOYW1lc1JlY3Vyc2l2ZSh0aGlzKTtcbiAgICB9XG4gICAgbG9nKG1lc3NhZ2UsIGxvZ2xldmVsID0gJ2xvZycsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKGxvZ2xldmVsICE9PSAnbG9nJyAmJiAhdGhpcy5pc0FsbG93ZWQobG9nbGV2ZWwpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMucHJldmVudENvbnNvbGVQcmludCB8fCBbJ2xvZycsICdlcnJvciddLmluY2x1ZGVzKGxvZ2xldmVsKSkge1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5nZXRIZWFkZXIobG9nbGV2ZWwpO1xuICAgICAgICAgICAgbGV0IG5ld0FyZ3MgPSBbXTtcbiAgICAgICAgICAgIGlmIChoZWFkZXIgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIG5ld0FyZ3MgPSBuZXdBcmdzLmNvbmNhdChoZWFkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIG5ld0FyZ3MucHVzaChoZWFkZXIpO1xuICAgICAgICAgICAgbmV3QXJncy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICAgICAgbmV3QXJncyA9IG5ld0FyZ3MuY29uY2F0KGFyZ3MpO1xuICAgICAgICAgICAgY29uc29sZVtsb2dsZXZlbF0uYXBwbHkodGhpcywgbmV3QXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoYXJncyk7XG4gICAgICAgIGlmICghdGhpcy5wcmV2ZW50RmlsZVByaW50IHx8IGxvZ2xldmVsID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLndyaXRlVG9GaWxlKGxvZ2xldmVsLCBtZXNzYWdlICsgcGFyc2VkU3RyaW5nLnN1YnN0cigxLCBwYXJzZWRTdHJpbmcubGVuZ3RoIC0gMikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRlYnVnKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgYXBwbHkgPSBbbWVzc2FnZSwgJ2RlYnVnJ10uY29uY2F0KGFyZ3MpO1xuICAgICAgICB0aGlzLmxvZy5hcHBseSh0aGlzLCBhcHBseSk7XG4gICAgfVxuICAgIGluZm8obWVzc2FnZSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBhcHBseSA9IFttZXNzYWdlLCAnaW5mbyddLmNvbmNhdChhcmdzKTtcbiAgICAgICAgdGhpcy5sb2cuYXBwbHkodGhpcywgYXBwbHkpO1xuICAgIH1cbiAgICB3YXJuKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgYXBwbHkgPSBbbWVzc2FnZSwgJ3dhcm4nXS5jb25jYXQoYXJncyk7XG4gICAgICAgIHRoaXMubG9nLmFwcGx5KHRoaXMsIGFwcGx5KTtcbiAgICB9XG4gICAgZXJyb3IobWVzc2FnZSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBhcHBseSA9IFttZXNzYWdlLCAnZXJyb3InXS5jb25jYXQoYXJncyk7XG4gICAgICAgIHRoaXMubG9nLmFwcGx5KHRoaXMsIGFwcGx5KTtcbiAgICB9XG4gICAgZ2V0UHJvY0luZm8oKSB7XG4gICAgICAgIHJldHVybiBgJHtnbG9iYWwucHJvY2Vzcy5lbnYubmFtZSB8fCAnJ30gJHtnbG9iYWwucHJvY2Vzcy5lbnYuaG9zdG5hbWUgfHwgJyd9ICR7Z2xvYmFsLnByb2Nlc3MucGlkfWA7XG4gICAgfVxuICAgIGlzQWxsb3dlZChsb2dMZXZlbCkge1xuICAgICAgICBjb25zdCBsb2dMZXZlbE9yZGVyID0gWydsb2cnLCAnZGVidWcnLCAnaW5mbycsICd3YXJuJywgJ2Vycm9yJ107XG4gICAgICAgIHJldHVybiBsb2dMZXZlbE9yZGVyLmluZGV4T2YobG9nTGV2ZWwpID49IGxvZ0xldmVsT3JkZXIuaW5kZXhPZih0aGlzLmxvZ0xldmVsKTtcbiAgICB9XG4gICAgY3VycmVudFRpbWUoKSB7XG4gICAgICAgIHJldHVybiBtb21lbnRfMS5kZWZhdWx0KCkuZm9ybWF0KCdERC5NTS5ZWVlZIEhIOm1tOnNzJyk7XG4gICAgfVxuICAgIGdldExvZ1BvaW50KCkge1xuICAgICAgICBjb25zdCBzdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgbGV0IGNhbGxwb2ludDtcbiAgICAgICAgZm9yIChjb25zdCBbaW5kZXgsIHN0YWNrcGFydF0gb2Ygc3RhY2suZW50cmllcygpKSB7XG4gICAgICAgICAgICBpZiAoIWluZGV4KVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCF1dGlsXzEuaW5jbHVkZXNNZW1iZXJPZkxpc3Qoc3RhY2twYXJ0LCB0aGlzLnByb3RvdHlwZU5hbWVzLCAnLnRzJykpIHtcbiAgICAgICAgICAgICAgICBjYWxscG9pbnQgPSBzdGFja3BhcnQuc3BsaXQocGF0aF8xLnNlcCkucG9wKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxwb2ludCkge1xuICAgICAgICAgICAgY2FsbHBvaW50ID0gY2FsbHBvaW50LnJlcGxhY2UoJyknLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxscG9pbnQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FsbHBvaW50O1xuICAgIH1cbn1cbmV4cG9ydHMuQkRPTG9nZ2VyID0gQkRPTG9nZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFRHOW5aMlZ5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5c2FXSXZRa1JQVEc5bloyVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVTkJMRFJFUVVFMFFqdEJRVU0xUWl3clFrRkJNa0k3UVVGRE0wSXNNRU5CUVcxR08wRkJWMjVHTEUxQlFYTkNMRk5CUVZNN1NVRnJSRE5DTEZsQlFWa3NUMEZCWjBNN1VVRXpRM0pETEZsQlFVOHNSMEZCV1N4aFFVRmhMRU5CUVVNN1VVRlJha01zZDBKQlFXMUNMRWRCUVdFc1MwRkJTeXhEUVVGRE8xRkJVWFJETEhGQ1FVRm5RaXhIUVVGaExFdEJRVXNzUTBGQlF6dFJRV1Z1UXl4aFFVRlJMRWRCUVdVc1QwRkJUeXhEUVVGRE8xRkJWVzVDTEcxQ1FVRmpMRWRCUVdFc2FVTkJRVEJDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkZMMElzUTBGQlF6dEpRVmN4UXl4SFFVRkhMRU5CUVVNc1QwRkJXU3hGUVVGRkxGZEJRWE5DTEV0QlFVc3NSVUZCUlN4SFFVRkhMRWxCUVZjN1VVRkRhRVVzU1VGQlNTeFJRVUZSTEV0QlFVc3NTMEZCU3l4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTTdXVUZCUlN4UFFVRlBPMUZCUXpWRUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTzFsQlEyeEZMRTFCUVUwc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1dVRkRlRU1zU1VGQlNTeFBRVUZQTEVkQlFXRXNSVUZCUlN4RFFVRkRPMWxCUXpOQ0xFbEJRVWtzVFVGQlRTeFpRVUZaTEV0QlFVc3NSVUZCUlR0blFrRkRla0lzVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03WVVGRGNFTTdPMmRDUVVGTkxFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkROVUlzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRaUVVOMFFpeFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5rTEU5QlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMU5CUXpWRU8xRkJRMFFzVFVGQlRTeFpRVUZaTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU14UXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4SlFVRkpMRkZCUVZFc1MwRkJTeXhQUVVGUExFVkJRVVU3V1VGRGFFUXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFVkJRVVVzVDBGQlR5eEhRVUZITEZsQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxGbEJRVmtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVONlJqdEpRVU5NTEVOQlFVTTdTVUZSVFN4TFFVRkxMRU5CUVVNc1QwRkJXU3hGUVVGRkxFZEJRVWNzU1VGQlV6dFJRVU51UXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE9VTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZ2UWl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOc1JDeERRVUZETzBsQlVVMHNTVUZCU1N4RFFVRkRMRTlCUVZrc1JVRkJSU3hIUVVGSExFbEJRVk03VVVGRGJFTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRemRETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUlVGQmIwSXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRiRVFzUTBGQlF6dEpRVkZOTEVsQlFVa3NRMEZCUXl4UFFVRlpMRVZCUVVVc1IwRkJSeXhKUVVGVE8xRkJRMnhETEUxQlFVMHNTMEZCU3l4SFFVRkhMRU5CUVVNc1QwRkJUeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNM1F5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFVkJRVzlDTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJ4RUxFTkJRVU03U1VGUlRTeExRVUZMTEVOQlFVTXNUMEZCV1N4RlFVRkZMRWRCUVVjc1NVRkJVenRSUVVOdVF5eE5RVUZOTEV0QlFVc3NSMEZCUnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRPVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGdlFpeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnNSQ3hEUVVGRE8wbEJVMU1zVjBGQlZ6dFJRVU5xUWl4UFFVRlBMRWRCUVVjc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4SlFVRkpMRVZCUVVVc1NVRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRWxCUVVrc1JVRkJSU3hKUVVGSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1NVRkRla2NzUTBGQlF6dEpRU3RDVXl4VFFVRlRMRU5CUVVNc1VVRkJiVUk3VVVGRGJrTXNUVUZCVFN4aFFVRmhMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzVDBGQlR5eEZRVUZGTEUxQlFVMHNSVUZCUlN4TlFVRk5MRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGFFVXNUMEZCVHl4aFFVRmhMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEdGQlFXRXNRMEZCUXl4UFFVRlBMRU5CUVZNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzBsQlF6TkdMRU5CUVVNN1NVRlRVeXhYUVVGWE8xRkJRMnBDTEU5QlFVOHNaMEpCUVUwc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eHhRa0ZCY1VJc1EwRkJReXhEUVVGRE8wbEJRMnhFTEVOQlFVTTdTVUZUVXl4WFFVRlhPMUZCUTJwQ0xFMUJRVTBzUzBGQlN5eEhRVUZaTEVsQlFVa3NTMEZCU3l4RlFVRkZMRU5CUVVNc1MwRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTjBSQ3hKUVVGSkxGTkJRVk1zUTBGQlF6dFJRVU5rTEV0QlFVc3NUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGVExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVN1dVRkRPVU1zU1VGQlNTeERRVUZETEV0QlFVczdaMEpCUVVVc1UwRkJVenRaUVVOeVFpeEpRVUZKTEVOQlFVTXNNa0pCUVc5Q0xFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4alFVRmpMRVZCUVVVc1MwRkJTeXhEUVVGRExFVkJRVVU3WjBKQlF6bEVMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEZWQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8yZENRVU4yUXl4TlFVRk5PMkZCUTFRN1UwRkRTanRSUVVORUxFbEJRVWtzVTBGQlV5eEZRVUZGTzFsQlExZ3NVMEZCVXl4SFFVRkhMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpGRE8yRkJRVTA3V1VGRFNDeFRRVUZUTEVkQlFVY3NSVUZCUlN4RFFVRkRPMU5CUTJ4Q08xRkJRMFFzVDBGQlR5eFRRVUZUTEVOQlFVTTdTVUZEY2tJc1EwRkJRenREUVVOS08wRkJNMDFFTERoQ1FUSk5ReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEsIGR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuZXhwaXJlID0gSW5maW5pdHk7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuZXhwaXJlID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoZHVyYXRpb24gfHwgSW5maW5pdHkpO1xuICAgIH1cbiAgICBnZXQgZXhwaXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhwaXJlID8gdGhpcy5leHBpcmUgPCBuZXcgRGF0ZSgpLmdldFRpbWUoKSA6IGZhbHNlO1xuICAgIH1cbn1cbmNsYXNzIEJET01hcENhY2hlIGV4dGVuZHMgTWFwIHtcbiAgICBzZXQoa2V5LCB2YWx1ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gbmV3IEVudGl0eSh2YWx1ZSwgZHVyYXRpb24pO1xuICAgICAgICByZXR1cm4gc3VwZXIuc2V0KGtleSwgZW50aXR5KTtcbiAgICB9XG4gICAgZ2V0KGtleSkge1xuICAgICAgICBjb25zdCBlbnRpdHkgPSBzdXBlci5nZXQoa2V5KTtcbiAgICAgICAgaWYgKGVudGl0eSA9PT0gdW5kZWZpbmVkIHx8IGVudGl0eS5leHBpcmVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50aXR5LmRhdGE7XG4gICAgfVxufVxuZXhwb3J0cy5CRE9NYXBDYWNoZSA9IEJET01hcENhY2hlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFRXRndRMkZqYUdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyeHBZaTlDUkU5TllYQkRZV05vWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVXRCTEUxQlFVMHNUVUZCVFR0SlFXZENVaXhaUVVGWkxFbEJRVThzUlVGQlJTeFJRVUZwUWp0UlFVWTVRaXhYUVVGTkxFZEJRVmNzVVVGQlVTeERRVUZETzFGQlJ6bENMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEycENMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeEpRVUZKTEVWQlFVVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1IwRkJSeXhEUVVGRExGRkJRVkVzU1VGQlNTeFJRVUZSTEVOQlFVTXNRMEZCUXp0SlFVTm9SU3hEUVVGRE8wbEJVMFFzU1VGQlNTeFBRVUZQTzFGQlExQXNUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1NVRkJTU3hGUVVGRkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJRenRKUVVOd1JTeERRVUZETzBOQlEwbzdRVUZUUkN4TlFVRmhMRmRCUVd0Q0xGTkJRVkVzUjBGQmFVSTdTVUZYTjBNc1IwRkJSeXhEUVVGRExFZEJRVTBzUlVGQlJTeExRVUZSTEVWQlFVVXNVVUZCYVVJN1VVRkRNVU1zVFVGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzFGQlF6TkRMRTlCUVU4c1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRiRU1zUTBGQlF6dEpRVk5OTEVkQlFVY3NRMEZCUXl4SFFVRk5PMUZCUTJJc1RVRkJUU3hOUVVGTkxFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNNVFpeEpRVUZKTEUxQlFVMHNTMEZCU3l4VFFVRlRMRWxCUVVrc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJUdFpRVU40UXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlEycENMRTlCUVU4c1UwRkJVeXhEUVVGRE8xTkJRM0JDTzFGQlEwUXNUMEZCVHl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJRM1pDTEVOQlFVTTdRMEZEU2p0QlFTOUNSQ3hyUTBFclFrTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQkRPTW9kZWxfMTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCB1dWlkXzEgPSByZXF1aXJlKFwidXVpZFwiKTtcbmNvbnN0IHR5cGVfZ3JhcGhxbF8xID0gcmVxdWlyZShcInR5cGUtZ3JhcGhxbFwiKTtcbmNvbnN0IEJpbmRpbmdfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CaW5kaW5nXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IE1vZGVsUmVnaXN0cnlfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Nb2RlbFJlZ2lzdHJ5XCIpO1xubGV0IEJET01vZGVsID0gQkRPTW9kZWxfMSA9IGNsYXNzIEJET01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0JET01vZGVsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uTmFtZSA9IEJET01vZGVsXzEuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMuZGF0YWJhc2VOYW1lID0gQkRPTW9kZWxfMS5kYXRhYmFzZU5hbWU7XG4gICAgICAgIHRoaXMuaWQgPSBgcGVuZGluZ18ke3V1aWRfMS52NCgpfWA7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMuY29uc3RydWN0b3IpLm5hbWU7XG4gICAgICAgIE1vZGVsUmVnaXN0cnlfMS5Nb2RlbFJlZ2lzdHJ5LmdldEluc3RhbmNlKCkucmVnaXN0ZXIodGhpcyk7XG4gICAgfVxuICAgIGdldCBiaW5kaW5ncygpIHtcbiAgICAgICAgY29uc3QgYmluZGluZ3MgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMsIFwiYmluZGluZ3NcIik7XG4gICAgICAgIHJldHVybiBiaW5kaW5ncyA/IGJpbmRpbmdzIDogbmV3IE1hcCgpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2VCeUlEKF9pZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIik7XG4gICAgfVxuICAgIGdldFJlZmVyZW5jZVN0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGBfcmVmZXJlbmNlOiR7dGhpcy5jbGFzc05hbWV9JHt0aGlzLmlkfWA7XG4gICAgfVxuICAgIGJpbmQocHJvcE5hbWUsIG1vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBCaW5kaW5nXzEuQmluZGluZyh0aGlzLCBwcm9wTmFtZSwgbW9kZSk7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy50b0pTT04oKTtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcykge1xuICAgICAgICAgICAgaWYgKHRoaXNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXNba2V5XTtcbiAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBhc3luYyBpc1Vuc2F2ZWQoYXR0cikge1xuICAgICAgICBjb25zdCB1bnNhdmVkQ2hhbmdlcyA9IGF3YWl0IHRoaXMuZ2V0VW5zYXZlZENoYW5nZXMoKTtcbiAgICAgICAgbGV0IHVuc2F2ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHVuc2F2ZWRDaGFuZ2VzICYmIHVuc2F2ZWRDaGFuZ2VzLmhhc093blByb3BlcnR5KGF0dHIpKVxuICAgICAgICAgICAgdW5zYXZlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5zYXZlZCk7XG4gICAgfVxuICAgIGFzeW5jIGhhc1Vuc2F2ZWRDaGFuZ2VzKCkge1xuICAgICAgICBjb25zdCB1bnNhdmVkQ2hhbmdlcyA9IGF3YWl0IHRoaXMuZ2V0VW5zYXZlZENoYW5nZXMoKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShCb29sZWFuKE9iamVjdC5rZXlzKHVuc2F2ZWRDaGFuZ2VzKS5sZW5ndGgpKTtcbiAgICB9XG59O1xuQkRPTW9kZWwuZ3JhcGhRTFR5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQkRPTW9kZWxfMS5jb25zdHJ1Y3Rvcik7XG5CRE9Nb2RlbC5pc0JET01vZGVsID0gdHJ1ZTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcbl0sIEJET01vZGVsLnByb3RvdHlwZSwgXCJpc0JET01vZGVsXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIEJET01vZGVsLnByb3RvdHlwZSwgXCJjb2xsZWN0aW9uTmFtZVwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBCRE9Nb2RlbC5wcm90b3R5cGUsIFwiZGF0YWJhc2VOYW1lXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoKF90eXBlKSA9PiB0eXBlX2dyYXBocWxfMS5JRCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgQkRPTW9kZWwucHJvdG90eXBlLCBcImlkXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBCRE9Nb2RlbC5wcm90b3R5cGUsIFwiY2xhc3NOYW1lXCIsIHZvaWQgMCk7XG5CRE9Nb2RlbCA9IEJET01vZGVsXzEgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoeyBpc0Fic3RyYWN0OiB0cnVlIH0pLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuXSwgQkRPTW9kZWwpO1xuZXhwb3J0cy5CRE9Nb2RlbCA9IEJET01vZGVsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFRXOWtaV3d1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJ4cFlpOUNSRTlOYjJSbGJDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRXNLMEpCUVd0RE8wRkJRMnhETEN0RFFVRnJRenRCUVVOc1F5dzRRMEZCZDBRN1FVRkRlRVFzYzBSQlFUWkZPMEZCUXpkRkxHdEVRVUZyUkR0QlFVVnNSQ3d3UkVGQmRVUTdRVUZYZGtRc1NVRkJjMElzVVVGQlVTeG5Ra0ZCT1VJc1RVRkJjMElzVVVGQlVUdEpRU3RITVVJN1VVRm9SRFJDTEdWQlFWVXNSMEZCV1N4SlFVRkpMRU5CUVVNN1VVRlJNMElzYlVKQlFXTXNSMEZCV1N4VlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRE8xRkJVV3hFTEdsQ1FVRlpMRWRCUVZrc1ZVRkJVU3hEUVVGRExGbEJRVmtzUTBGQlF6dFJRVk42UXl4UFFVRkZMRWRCUVZjc1YwRkJWeXhUUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETzFGQlZYSkRMR05CUVZNc1IwRkJWeXhOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU03VVVGak1VWXNOa0pCUVdFc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRMME1zUTBGQlF6dEpRWFpIUkN4SlFVRmpMRkZCUVZFN1VVRkRiRUlzVFVGQlRTeFJRVUZSTEVkQlFVY3NjMEpCUVZjc1EwRkJReXhKUVVGSkxFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTTdVVUZETDBNc1QwRkJUeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF6dEpRVU16UXl4RFFVRkRPMGxCT0VaTkxFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFYZERMRWRCUVZrN1VVRkROMFVzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eERRVUZETzBsQlEzWkRMRU5CUVVNN1NVRlpUU3hyUWtGQmEwSTdVVUZEY2tJc1QwRkJUeXhqUVVGakxFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM0JFTEVOQlFVTTdTVUZYVFN4SlFVRkpMRU5CUVRKRkxGRkJRVmNzUlVGQlJTeEpRVUZSTzFGQlEzWkhMRTlCUVU4c1NVRkJTU3hwUWtGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVFMlJDeERRVUZETzBsQlEzcEhMRU5CUVVNN1NVRlJUU3hSUVVGUk8xRkJRMWdzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8xRkJRek5DTEU5QlFVOHNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU5vUXl4RFFVRkRPMGxCVlUwc1RVRkJUVHRSUVVOVUxFMUJRVTBzU1VGQlNTeEhRVUZ0UWl4RlFVRkZMRU5CUVVNN1VVRkRhRU1zUzBGQlN5eE5RVUZOTEVkQlFVY3NTVUZCU1N4SlFVRkpMRVZCUVVVN1dVRkRjRUlzU1VGQlNTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1UwRkJVeXhGUVVGRk8yZENRVU42UWl4TlFVRk5MRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUXpGQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4UFFVRlBMRU5CUVVNN1lVRkRka0k3VTBGRFNqdFJRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTJoQ0xFTkJRVU03U1VFMFFrMHNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVFclFqdFJRVU5zUkN4TlFVRk5MR05CUVdNc1IwRkJSeXhOUVVGTkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hEUVVGRE8xRkJRM1JFTEVsQlFVa3NUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOd1FpeEpRVUZKTEdOQlFXTXNTVUZCU1N4alFVRmpMRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF6dFpRVUZGTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRNVVVzVDBGQlR5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8wbEJRM0JETEVOQlFVTTdTVUZUVFN4TFFVRkxMRU5CUVVNc2FVSkJRV2xDTzFGQlF6RkNMRTFCUVUwc1kwRkJZeXhIUVVGSExFMUJRVTBzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhGUVVGRkxFTkJRVU03VVVGRGRFUXNUMEZCVHl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZUVVc1EwRkJRenREUVZkS0xFTkJRVUU3UVVGMlRUQkNMRzlDUVVGWExFZEJRVkVzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4VlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03UVVGblF5OUVMRzFDUVVGVkxFZEJRVmtzU1VGQlNTeERRVUZETzBGQlVYUkRPMGxCUVZnc2NVSkJRVkVzUlVGQlJUczdORU5CUVRSRE8wRkJVVE5ETzBsQlFWZ3NjVUpCUVZFc1JVRkJSVHM3WjBSQlFXMUZPMEZCVVd4Rk8wbEJRVmdzY1VKQlFWRXNSVUZCUlRzN09FTkJRU3RFTzBGQlUyaEVPMGxCUVhwQ0xITkNRVUZUTEVOQlFVTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1JVRkJSU3hEUVVGRExHbENRVUZGTEVOQlFVTTdPMjlEUVVGNVF6dEJRVlZ5UkR0SlFVRmFMSE5DUVVGVExFVkJRVVU3T3pKRFFVRnJSanRCUVd4SE5VVXNVVUZCVVR0SlFVUTNRaXcwUWtGQlpTeERRVUZETEVWQlFVVXNWVUZCVlN4RlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVGRE96dEhRVU5vUWl4UlFVRlJMRU5CT0U0M1FqdEJRVGxPY1VJc05FSkJRVkVpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IGVudmlyb25tZW50XzEgPSByZXF1aXJlKFwifmJkby91dGlscy9lbnZpcm9ubWVudFwiKTtcbmNsYXNzIEJET1JvdXRlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJOYW1lU3BhY2UgPSBgLyR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lLnRvTG93ZXJDYXNlKCl9YDtcbiAgICAgICAgdGhpcy5yb3V0ZXMgPSBbJy8nXTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVN0cmluZyA9ICc8ZGl2PjwvZGl2Pic7XG4gICAgICAgIHRoaXMuanNvbk9ubHkgPSBmYWxzZTtcbiAgICB9XG4gICAgcmVuZGVyVGVtcGxhdGUodGVtcGxhdGVQYXJhbXMpIHtcbiAgICAgICAgbGV0IHN0cmluZ1RvUGFyc2UgPSBudWxsO1xuICAgICAgICBpZiAodXRpbF8xLmlzU3RyaW5nKHRoaXMudGVtcGxhdGVTdHJpbmcpKSB7XG4gICAgICAgICAgICBzdHJpbmdUb1BhcnNlID0gZW52aXJvbm1lbnRfMS50ZW1wbGF0ZUVudmlyb25tZW50LnJlbmRlclN0cmluZyh0aGlzLnRlbXBsYXRlU3RyaW5nLCB0ZW1wbGF0ZVBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHV0aWxfMS5pc09iamVjdCh0aGlzLnRlbXBsYXRlU3RyaW5nKSkge1xuICAgICAgICAgICAgc3RyaW5nVG9QYXJzZSA9IHRoaXMudGVtcGxhdGVTdHJpbmcucmVuZGVyKHRlbXBsYXRlUGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyaW5nVG9QYXJzZTtcbiAgICB9XG4gICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMoX3JlcXVlc3RPclBhcmFtcykge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxufVxuZXhwb3J0cy5CRE9Sb3V0ZSA9IEJET1JvdXRlO1xuQkRPUm91dGUuYXR0YWNoVG9TZXJ2ZXJzID0gWycqJ107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQVW05MWRHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMnhwWWk5Q1JFOVNiM1YwWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVVZCTERCRFFVRnhSRHRCUVVOeVJDeDNSRUZCTmtRN1FVRlROMFFzVFVGQmMwSXNVVUZCVVR0SlFVRTVRanRSUVhGQ1Z5eHZRa0ZCWlN4SFFVRlhMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRVZCUVVVc1EwRkJRenRSUVZGd1JTeFhRVUZOTEVkQlFXRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVd0Q2RFSXNiVUpCUVdNc1IwRkJjMElzWVVGQllTeERRVUZETzFGQlZXeEVMR0ZCUVZFc1IwRkJXU3hMUVVGTExFTkJRVU03U1VGdFJIaERMRU5CUVVNN1NVRjRRMkVzWTBGQll5eERRVUZETEdOQlFUaENPMUZCUTI1RUxFbEJRVWtzWVVGQllTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTjZRaXhKUVVGSkxHVkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRVZCUVVVN1dVRkRMMElzWVVGQllTeEhRVUZITEdsRFFVRnRRaXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RlFVRkZMR05CUVdNc1EwRkJReXhEUVVGRE8xTkJRM3BHTzFGQlEwUXNTVUZCU1N4bFFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eEZRVUZGTzFsQlF5OUNMR0ZCUVdFc1IwRkJZeXhKUVVGSkxFTkJRVU1zWTBGQlpTeERRVUZETEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenRUUVVNeFJUdFJRVU5FTEU5QlFVOHNZVUZCWVN4RFFVRkRPMGxCUTNwQ0xFTkJRVU03U1VGWFV5eExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMR2RDUVVFd1F6dFJRVU55UlN4UFFVRlBMRVZCUVVVc1EwRkJRenRKUVVOa0xFTkJRVU03TzBGQk1VWk1MRFJDUVRSSFF6dEJRV2hIYVVJc2QwSkJRV1VzUjBGQllTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBCaW5kaW5nXzEgPSByZXF1aXJlKFwifmJkby9saWIvQmluZGluZ1wiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5mdW5jdGlvbiBiYXNlQ29uc3RydWN0b3JGYWN0b3J5KGN0b3IsIGNvbnN0UGFyYW1zSW5kZXgpIHtcbiAgICBjbGFzcyBCYXNlQ29uc3RydWN0b3IgZXh0ZW5kcyBjdG9yIHtcbiAgICAgICAgY29uc3RydWN0b3IoLi4ucGFyYW1zKSB7XG4gICAgICAgICAgICBzdXBlciguLi5wYXJhbXMpO1xuICAgICAgICAgICAgdGhpcy5jb2xsZWN0aW9uTmFtZSA9IEJhc2VDb25zdHJ1Y3Rvci5jb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgICAgIHRoaXMuZGF0YWJhc2VOYW1lID0gQmFzZUNvbnN0cnVjdG9yLmRhdGFiYXNlTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0UGFyYW1zID0gcGFyYW1zW2NvbnN0UGFyYW1zSW5kZXhdO1xuICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YSh0aGlzLCBcIm5vcm1hbEZ1bmN0aW9uYWxpdHlcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIUJhc2VDb25zdHJ1Y3Rvci5pc1Byb2NlZHVyYWxDb21wb25lbnRDb25zdHJ1Y3Rpb24pXG4gICAgICAgICAgICAgICAgdGhpcy5pbnZva2VMaWZlQ3ljbGUoY29uc3RQYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIGludm9rZUxpZmVDeWNsZShjb25zdFBhcmFtcykge1xuICAgICAgICAgICAgaWYgKCEoY29uc3RQYXJhbXMgaW5zdGFuY2VvZiBPYmplY3QpKVxuICAgICAgICAgICAgICAgIGNvbnN0UGFyYW1zID0ge307XG4gICAgICAgICAgICBsZXQgZGVmYXVsdFNldHRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLCBcImRlZmF1bHRTZXR0aW5nc1wiKSB8fCB7fTtcbiAgICAgICAgICAgIGRlZmF1bHRTZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdFNldHRpbmdzLCBjb25zdFBhcmFtcyk7XG4gICAgICAgICAgICBpZiAodXRpbF8xLmlzRnVuY3Rpb24odGhpcy5nZXROYW1lc3BhY2VkU3RvcmFnZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGNvbnN0UGFyYW1zLmlkIHx8IGRlZmF1bHRTZXR0aW5ncy5pZDtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWNoZWRTZXR0aW5ncyA9IHRoaXMuZ2V0TmFtZXNwYWNlZFN0b3JhZ2UoXCIqXCIsIFwiaWRcIiwgaWQpIHx8IHt9O1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNhY2hlZFNldHRpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWNoZWRTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZGVmYXVsdFNldHRpbmdzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEJpbmRpbmdfMS5CaW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRWYWx1ZShjYWNoZWRTZXR0aW5nc1trZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U2V0dGluZ3Nba2V5XSA9IGNhY2hlZFNldHRpbmdzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRTZXR0aW5ncyk7XG4gICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMsIFwiY29uc3RydWN0aW9uQ29tcGxldGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAodXRpbF8xLmlzRnVuY3Rpb24odGhpcy5jb25zdHJ1Y3RlZENhbGxiYWNrKSlcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCYXNlQ29uc3RydWN0b3IuY2xhc3NOYW1lID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKEJhc2VDb25zdHJ1Y3RvcikubmFtZTtcbiAgICBCYXNlQ29uc3RydWN0b3IuZ3JhcGhRTFR5cGUgPSBjdG9yO1xuICAgIEJhc2VDb25zdHJ1Y3Rvci5jb2xsZWN0aW9uTmFtZSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoQmFzZUNvbnN0cnVjdG9yLCBcImNvbGxlY3Rpb25OYW1lXCIpO1xuICAgIEJhc2VDb25zdHJ1Y3Rvci5kYXRhYmFzZU5hbWUgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKEJhc2VDb25zdHJ1Y3RvciwgXCJkYXRhYmFzZU5hbWVcIik7XG4gICAgQmFzZUNvbnN0cnVjdG9yLmlzUHJvY2VkdXJhbENvbXBvbmVudENvbnN0cnVjdGlvbiA9IGZhbHNlO1xuICAgIHJldHVybiBCYXNlQ29uc3RydWN0b3I7XG59XG5leHBvcnRzLmJhc2VDb25zdHJ1Y3RvckZhY3RvcnkgPSBiYXNlQ29uc3RydWN0b3JGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUW1GelpVTnZibk4wY25WamRHOXlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlzYVdJdlFtRnpaVU52Ym5OMGNuVmpkRzl5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUVzT0VOQlFUSkRPMEZCUXpORExHdEVRVUZyUlR0QlFVTnNSU3d3UTBGQk5rTTdRVUVyUkRkRExGTkJRV2RDTEhOQ1FVRnpRaXhEUVVFNFF5eEpRVUZQTEVWQlFVVXNaMEpCUVhkQ08wbEJVV3BJTEUxQlFVMHNaVUZCWjBJc1UwRkJVU3hKUVVGSk8xRkJaMFU1UWl4WlFVRlpMRWRCUVVjc1RVRkJZVHRaUVVONFFpeExRVUZMTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJRenRaUVZoTUxHMUNRVUZqTEVkQlFWa3NaVUZCWlN4RFFVRkRMR05CUVdNc1EwRkJRenRaUVZGNlJDeHBRa0ZCV1N4SFFVRlpMR1ZCUVdVc1EwRkJReXhaUVVGWkxFTkJRVU03V1VGSmFrVXNUVUZCVFN4WFFVRlhMRWRCUVVjc1RVRkJUU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRU5CUVVNN1dVRkROME1zZVVKQlFXTXNRMEZCUXl4SlFVRkpMRVZCUVVVc2NVSkJRWEZDTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRiRVFzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4cFEwRkJhVU03WjBKQlFVVXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFJRVU01Uml4RFFVRkRPMUZCVVUwc1pVRkJaU3hEUVVGRExGZEJRWGRETzFsQlF6TkVMRWxCUVVrc1EwRkJReXhEUVVGRExGZEJRVmNzV1VGQldTeE5RVUZOTEVOQlFVTTdaMEpCUVVVc1YwRkJWeXhIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU4yUkN4SlFVRkpMR1ZCUVdVc1IwRkJNa01zYzBKQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1dVRkRla2NzWlVGQlpTeEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1pVRkJaU3hGUVVGRkxGZEJRVmNzUTBGQlF5eERRVUZETzFsQlF6bEVMRWxCUVVrc2FVSkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zUlVGQlJUdG5Ra0ZEZGtNc1RVRkJUU3hGUVVGRkxFZEJRVWNzVjBGQlZ5eERRVUZETEVWQlFVVXNTVUZCU1N4bFFVRmxMRU5CUVVNc1JVRkJSU3hEUVVGRE8yZENRVU5vUkN4TlFVRk5MR05CUVdNc1IwRkJSeXhKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1IwRkJSeXhGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1owSkJRM1JGTEV0QlFVc3NUVUZCVFN4SFFVRkhMRWxCUVVrc1kwRkJZeXhGUVVGRk8yOUNRVU01UWl4SlFVRkpMR05CUVdNc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdkMEpCUTNCRExFMUJRVTBzVDBGQlR5eEhRVUZITEdWQlFXVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenQzUWtGRGNrTXNTVUZCU1N4UFFVRlBMRmxCUVZrc2FVSkJRVThzUlVGQlJUczBRa0ZETlVJc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenQ1UWtGRGVrTTdPelJDUVVGTkxHVkJRV1VzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03Y1VKQlEzSkVPMmxDUVVOS08yRkJRMG83V1VGRFJDeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hsUVVGbExFTkJRVU1zUTBGQlF6dFpRVU55UXl4NVFrRkJZeXhEUVVGRExFbEJRVWtzUlVGQlJTeHpRa0ZCYzBJc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU51UkN4SlFVRkpMR2xDUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRE8yZENRVUZGTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUlVGQlJTeERRVUZETzFGQlEzcEZMRU5CUVVNN08wbEJlRVp6UWl4NVFrRkJVeXhIUVVGSExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJWWGhFTERKQ1FVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRE8wbEJVMjVDTERoQ1FVRmpMRWRCUVZrc2MwSkJRVmNzUTBGQlF5eGxRVUZsTEVWQlFVVXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF6dEpRVk42UlN3MFFrRkJXU3hIUVVGWkxITkNRVUZYTEVOQlFVTXNaVUZCWlN4RlFVRkZMR05CUVdNc1EwRkJReXhEUVVGRE8wbEJWVGxGTEdsRVFVRnBReXhIUVVGWkxFdEJRVXNzUTBGQlF6dEpRVzlFY2tVc1QwRkJUeXhsUVVGbExFTkJRVU03UVVGRE0wSXNRMEZCUXp0QlFUTkhSQ3gzUkVFeVIwTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgRmllbGRfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9GaWVsZFwiKTtcbmNvbnN0IGZyYW1ld29ya18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZnJhbWV3b3JrXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgaW5pQmluZE5hbWUgPSBcImluaXRpYXRvckJpbmRpbmdcIjtcbmNvbnN0IGJpbmROYW1lID0gXCJiaW5kaW5nc1wiO1xuY2xhc3MgQmluZGluZyB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSwgbW9kZSA9IFwiUmVhZFdyaXRlXCIpIHtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdG9yID0gdGhpcy5nZXRPcmlnaW5hbFByb3BlcnR5RGVzY3JpcHRvcih0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSk7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgfHwgdGhpcy5vYmplY3RbdGhpcy5wcm9wZXJ0eV07XG4gICAgfVxuICAgIGluc3RhbGwoaW5pdGlhdG9yLCBwcm9wZXJ0eSkge1xuICAgICAgICB0aGlzLmluaXRpYXRvciA9IGluaXRpYXRvcjtcbiAgICAgICAgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgICAgICB0aGlzLmluaXRpYXRvckRlc2NyaXB0b3IgPSB0aGlzLmdldE9yaWdpbmFsUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5KTtcbiAgICAgICAgaWYgKCFSZWZsZWN0Lmhhc01ldGFkYXRhKGluaUJpbmROYW1lLCB0aGlzLmluaXRpYXRvcikpXG4gICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCBpbmlCaW5kTmFtZSwgbmV3IE1hcCgpKTtcbiAgICAgICAgaWYgKCFSZWZsZWN0Lmhhc01ldGFkYXRhKGJpbmROYW1lLCB0aGlzLm9iamVjdCkpXG4gICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMub2JqZWN0LCBiaW5kTmFtZSwgbmV3IE1hcCgpKTtcbiAgICAgICAgY29uc3QgaW5pdGlhdG9yTURhdGEgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCBpbmlCaW5kTmFtZSkgfHwgbmV3IE1hcCgpO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JCaW5kaW5nID0gaW5pdGlhdG9yTURhdGEuZ2V0KHRoaXMuaW5pdGlhdG9yUHJvcGVydHkpO1xuICAgICAgICBpZiAoaW5pdGlhdG9yQmluZGluZylcbiAgICAgICAgICAgIGluaXRpYXRvckJpbmRpbmcucmVtb3ZlKCk7XG4gICAgICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLm9iamVjdCwgYmluZE5hbWUpIHx8IG5ldyBNYXAoKTtcbiAgICAgICAgaWYgKCFtRGF0YS5oYXModGhpcy5wcm9wZXJ0eSkpXG4gICAgICAgICAgICBtRGF0YS5zZXQodGhpcy5wcm9wZXJ0eSwgW10pO1xuICAgICAgICBtRGF0YS5nZXQodGhpcy5wcm9wZXJ0eSkucHVzaCh0aGlzKTtcbiAgICAgICAgaW5pdGlhdG9yTURhdGEuc2V0KHRoaXMuaW5pdGlhdG9yUHJvcGVydHksIHRoaXMpO1xuICAgICAgICBjb25zdCBmaWVsZE1EYXRhTmFtZSA9IGBmaWVsZDoke3RoaXMucHJvcGVydHl9YDtcbiAgICAgICAgY29uc3Qgb2JqZWN0RmllbGQgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JGaWVsZCA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLmluaXRpYXRvciwgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSk7XG4gICAgICAgIGxldCBmaWVsZCA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLm9iamVjdCwgZmllbGRNRGF0YU5hbWUpO1xuICAgICAgICBpZiAoIWZpZWxkKVxuICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhKHRoaXMub2JqZWN0LCBmaWVsZE1EYXRhTmFtZSwgbmV3IEZpZWxkXzEuRmllbGQodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpKTtcbiAgICAgICAgZmllbGQgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIGZpZWxkTURhdGFOYW1lKTtcbiAgICAgICAgZmllbGQuYWRkRmllbGQob2JqZWN0RmllbGQpO1xuICAgICAgICBmaWVsZC5hZGRGaWVsZChpbml0aWF0b3JGaWVsZCk7XG4gICAgICAgIHRoaXMucmVwbGFjZURlc2NyaXB0b3IoKTtcbiAgICAgICAgUmVmbGVjdC5zZXQodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHksIHRoaXMudmFsdWVPZigpKTtcbiAgICB9XG4gICAgcmVtb3ZlKCkge1xuICAgICAgICBjb25zdCBvYmplY3RWYWx1ZSA9IHRoaXMub2JqZWN0W3RoaXMucHJvcGVydHldO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JWYWx1ZSA9IHRoaXMuaW5pdGlhdG9yW3RoaXMuaW5pdGlhdG9yUHJvcGVydHldO1xuICAgICAgICBjb25zdCBvYmplY3RNRGF0YSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5vYmplY3QsIGJpbmROYW1lKTtcbiAgICAgICAgY29uc3Qgb2JqZWN0QmluZGluZ3MgPSBvYmplY3RNRGF0YSA/IG9iamVjdE1EYXRhLmdldCh0aGlzLnByb3BlcnR5KSA6IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgaW5pdGlhdG9yTURhdGEgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCBpbmlCaW5kTmFtZSk7XG4gICAgICAgIGNvbnN0IGluaXRpYXRvckJpbmRpbmcgPSBpbml0aWF0b3JNRGF0YSA/IGluaXRpYXRvck1EYXRhLmdldCh0aGlzLmluaXRpYXRvclByb3BlcnR5LnRvU3RyaW5nKCkpIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBmaWVsZE1EYXRhTmFtZSA9IGBmaWVsZDoke3RoaXMucHJvcGVydHl9YDtcbiAgICAgICAgY29uc3QgZmllbGQgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIGZpZWxkTURhdGFOYW1lKTtcbiAgICAgICAgaWYgKGluaXRpYXRvckJpbmRpbmcpIHtcbiAgICAgICAgICAgIGlmIChpbml0aWF0b3JNRGF0YSlcbiAgICAgICAgICAgICAgICBpbml0aWF0b3JNRGF0YS5kZWxldGUodGhpcy5pbml0aWF0b3JQcm9wZXJ0eS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZURlc2NyaXB0b3IodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHksIGluaXRpYXRvclZhbHVlLCB0aGlzLmluaXRpYXRvckRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgZmllbGQucmVtb3ZlRmllbGQobWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iamVjdEJpbmRpbmdzKSB7XG4gICAgICAgICAgICB1dGlsXzEucmVtb3ZlRWxlbWVudEZyb21BcnJheShvYmplY3RCaW5kaW5ncywgdGhpcyk7XG4gICAgICAgICAgICBmaWVsZC5yZW1vdmVGaWVsZChtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpKTtcbiAgICAgICAgICAgIGlmICghb2JqZWN0QmluZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdE1EYXRhKVxuICAgICAgICAgICAgICAgICAgICBvYmplY3RNRGF0YS5kZWxldGUodGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlRGVzY3JpcHRvcih0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSwgb2JqZWN0VmFsdWUsIHRoaXMuZGVzY3JpcHRvcik7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhKHRoaXMub2JqZWN0LCBmaWVsZE1EYXRhTmFtZSwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVwbGFjZURlc2NyaXB0b3IoKSB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBiaW5kaW5nR2V0KCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGF0Lm1vZGUgPT09IFwiV3JpdGVPbmx5XCIgJiYgdGhpcyA9PT0gdGhhdC5pbml0aWF0b3IpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyYW1ld29ya18xLmdldHRlcih0aGF0Lm9iamVjdCwgdGhhdC5wcm9wZXJ0eSwgXCJmaWVsZFwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIGJpbmRpbmdTZXQobmV3VmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoYXQubW9kZSA9PT0gXCJSZWFkT25seVwiICYmIHRoaXMgPT09IHRoYXQuaW5pdGlhdG9yKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgZnJhbWV3b3JrXzEuc2V0dGVyKHRoYXQub2JqZWN0LCB0aGF0LnByb3BlcnR5LCBuZXdWYWwsIFwiZmllbGRcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYmluZGluZ0Rlc2MgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHkpO1xuICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5LCBiaW5kaW5nRGVzYyk7XG4gICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcy5vYmplY3QsIFwiYmluZGluZ0Rlc2NyaXB0b3JcIiwgYmluZGluZ0Rlc2MpO1xuICAgIH1cbiAgICByZXN0b3JlRGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5LCB2YWx1ZSwgZGVzY3JpcHRvcikge1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KG9iamVjdCwgcHJvcGVydHkpO1xuICAgICAgICBpZiAoZGVzY3JpcHRvcikge1xuICAgICAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmluaXRpYXRvciwgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH1cbiAgICAgICAgb2JqZWN0W3Byb3BlcnR5LnRvU3RyaW5nKCldID0gdmFsdWU7XG4gICAgfVxuICAgIGdldE9yaWdpbmFsUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwga2V5KSB7XG4gICAgICAgIGxldCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBrZXkpO1xuICAgICAgICBsZXQgbURhdGFOYW1lID0gYmluZE5hbWU7XG4gICAgICAgIGxldCBwcm90b3R5cGUgPSBvYmplY3Q7XG4gICAgICAgIGlmIChvYmplY3QgPT09IHRoaXMuaW5pdGlhdG9yKVxuICAgICAgICAgICAgbURhdGFOYW1lID0gaW5pQmluZE5hbWU7XG4gICAgICAgIHdoaWxlICghZGVzY3JpcHRvcikge1xuICAgICAgICAgICAgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSk7XG4gICAgICAgICAgICBpZiAoIXByb3RvdHlwZSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGlmIChwcm90b3R5cGUuY29uc3RydWN0b3IubmFtZSA9PT0gXCJCYXNlQ29uc3RydWN0b3JcIilcbiAgICAgICAgICAgICAgICBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKTtcbiAgICAgICAgICAgIGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlYXJjaERlc2NyaXB0b3JJbkJpbmRpbmdzID0gZmFsc2U7XG4gICAgICAgIGlmIChkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvci5zZXQgJiYgZGVzY3JpcHRvci5zZXQubmFtZSA9PT0gXCJiaW5kaW5nU2V0XCIpXG4gICAgICAgICAgICAgICAgc2VhcmNoRGVzY3JpcHRvckluQmluZGluZ3MgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3IuZ2V0ICYmIGRlc2NyaXB0b3IuZ2V0Lm5hbWUgPT09IFwiYmluZGluZ0dldFwiKVxuICAgICAgICAgICAgICAgIHNlYXJjaERlc2NyaXB0b3JJbkJpbmRpbmdzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VhcmNoRGVzY3JpcHRvckluQmluZGluZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShvYmplY3QsIG1EYXRhTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBiaW5kaW5ncyA9IG1EYXRhID8gbURhdGEuZ2V0KGtleS50b1N0cmluZygpKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChiaW5kaW5ncykge1xuICAgICAgICAgICAgICAgIGlmIChiaW5kaW5ncyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IgPSBiaW5kaW5nc1swXS5kZXNjcmlwdG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IgPSBiaW5kaW5ncy5pbml0aWF0b3JEZXNjcmlwdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICAgIH1cbn1cbmV4cG9ydHMuQmluZGluZyA9IEJpbmRpbmc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRbWx1WkdsdVp5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiR2xpTDBKcGJtUnBibWN1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3d3UTBGQmVVUTdRVUZGZWtRc01FTkJRWFZETzBGQlEzWkRMRzlFUVVGelJEdEJRVU4wUkN4clJFRkJLMGM3UVVGSkwwY3NUVUZCVFN4WFFVRlhMRWRCUVVjc2EwSkJRV3RDTEVOQlFVTTdRVUZEZGtNc1RVRkJUU3hSUVVGUkxFZEJRVWNzVlVGQlZTeERRVUZETzBGQmMwSTFRaXhOUVVGaExFOUJRVTg3U1VFd1JXaENMRmxCUVZrc1RVRkJVeXhGUVVGRkxGRkJRVmNzUlVGQlJTeFBRVUZ2UWl4WFFVRlhPMUZCUXk5RUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUTNKQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTJwQ0xFbEJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRFpDUVVFMlFpeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzBsQlEzSkdMRU5CUVVNN1NVRkxUU3hSUVVGUkxFTkJRVU1zUzBGQlZ6dFJRVU4yUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dEpRVU4yUWl4RFFVRkRPMGxCVVUwc1QwRkJUenRSUVVOV0xFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0SlFVTndSQ3hEUVVGRE8wbEJVMDBzVDBGQlR5eERRVUZETEZOQlFWa3NSVUZCUlN4UlFVRlhPMUZCUTNCRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUXpOQ0xFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1IwRkJSeXhSUVVGUkxFTkJRVU03VVVGRGJFTXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEhRVUZITEVsQlFVa3NRMEZCUXl3MlFrRkJOa0lzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMUZCUjNSSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETzFsQlFVVXNlVUpCUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEZkQlFWY3NSVUZCUlN4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRE9VY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1dVRkJSU3g1UWtGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVZHNSeXhOUVVGTkxHTkJRV01zUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzVjBGQlZ5eERRVUZETEVsQlFVa3NTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVNM1JTeE5RVUZOTEdkQ1FVRm5RaXhIUVVGSExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVOQlFVTTdVVUZEY0VVc1NVRkJTU3huUWtGQlowSTdXVUZCUlN4blFrRkJaMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0UlFVZG9SQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzVVVGQlVTeERRVUZETEVsQlFVa3NTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVNNVJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETzFsQlFVVXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpWRUxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTndReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVZHFSQ3hOUVVGTkxHTkJRV01zUjBGQlJ5eFRRVUZUTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVOb1JDeE5RVUZOTEZkQlFWY3NSMEZCUnl3NFFrRkJiVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVU53UlN4TlFVRk5MR05CUVdNc1IwRkJSeXc0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8xRkJRMjVHTEVsQlFVa3NTMEZCU3l4SFFVRm5RaXc0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxHTkJRV01zUTBGQlF5eERRVUZETzFGQlF6RkZMRWxCUVVrc1EwRkJReXhMUVVGTE8xbEJRVVVzYVVOQlFYTkNMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeGpRVUZqTEVWQlFVVXNTVUZCU1N4aFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVkMlJ5eExRVUZMTEVkQlFVY3NPRUpCUVcxQ0xFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4alFVRmpMRU5CUVdkQ0xFTkJRVU03VVVGRGVFVXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFJRVU0xUWl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETzFGQlJ5OUNMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4RFFVRkRPMUZCUTNwQ0xFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEZUVVc1EwRkJRenRKUVU5TkxFMUJRVTA3VVVGRlZDeE5RVUZOTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTXZReXhOUVVGTkxHTkJRV01zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMUZCUnpsRUxFMUJRVTBzVjBGQlZ5eEhRVUZITEhOQ1FVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTjJSQ3hOUVVGTkxHTkJRV01zUjBGQlJ5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU03VVVGRGFFWXNUVUZCVFN4alFVRmpMRWRCUVVjc2MwSkJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRmRCUVZjc1EwRkJReXhEUVVGRE8xRkJRMmhGTEUxQlFVMHNaMEpCUVdkQ0xFZEJRVWNzWTBGQll5eERRVUZETEVOQlFVTXNRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNN1VVRkZOVWNzVFVGQlRTeGpRVUZqTEVkQlFVY3NVMEZCVXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRGFFUXNUVUZCVFN4TFFVRkxMRWRCUVdkQ0xEaENRVUZ0UWl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzWTBGQll5eERRVUZETEVOQlFVTTdVVUZGTlVVc1NVRkJTU3huUWtGQlowSXNSVUZCUlR0WlFVTnNRaXhKUVVGSkxHTkJRV003WjBKQlFVVXNZMEZCWXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU0zUlN4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1kwRkJZeXhGUVVGRkxFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRE8xbEJRM3BITEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc09FSkJRVzFDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMnhHTzFGQlJVUXNTVUZCU1N4alFVRmpMRVZCUVVVN1dVRkRhRUlzTmtKQlFYTkNMRU5CUVVNc1kwRkJZeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFsQlF6ZERMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zT0VKQlFXMUNMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOdVJTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1JVRkJSVHRuUWtGRGVFSXNTVUZCU1N4WFFVRlhPMjlDUVVGRkxGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8yZENRVU51UkN4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZkQlFWY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03WjBKQlEycEdMR2xEUVVGelFpeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1kwRkJZeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzJGQlF6ZEVPMU5CUTBvN1NVRkRUQ3hEUVVGRE8wbEJVMDhzYVVKQlFXbENPMUZCUTNKQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTnNRaXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlEyNUVMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRk8xbEJReTlETEVkQlFVY3NSVUZCUlN4VFFVRlRMRlZCUVZVN1owSkJRM0JDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWxCUVVrc1MwRkJTeXhYUVVGWExFbEJRVWtzU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUXl4VFFVRlRPMjlDUVVGRkxFOUJRVThzVTBGQlV5eERRVUZETzJkQ1FVTXpSU3hQUVVGUExHdENRVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMWxCUTNaRUxFTkJRVU03V1VGRFJDeEhRVUZITEVWQlFVVXNVMEZCVXl4VlFVRlZMRU5CUVVNc1RVRkJhVVE3WjBKQlEzUkZMRWxCUVVrc1NVRkJTU3hEUVVGRExFbEJRVWtzUzBGQlN5eFZRVUZWTEVsQlFVa3NTVUZCU1N4TFFVRkxMRWxCUVVrc1EwRkJReXhUUVVGVE8yOUNRVUZGTEU5QlFVODdaMEpCUTJoRkxHdENRVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEUxQlFVMHNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRaUVVONFJDeERRVUZETzFsQlEwUXNXVUZCV1N4RlFVRkZMRWxCUVVrN1dVRkRiRUlzVlVGQlZTeEZRVUZGTEVsQlFVazdVMEZEYmtJc1EwRkJReXhEUVVGRE8xRkJRMGdzVFVGQlRTeFhRVUZYTEVkQlFVY3NUMEZCVHl4RFFVRkRMSGRDUVVGM1FpeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQmRVSXNRMEZCUXp0UlFVTjJSeXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNN1VVRkRMMFFzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hYUVVGWExFTkJRVU1zUTBGQlF6dFJRVU0xUlN4NVFrRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNiVUpCUVcxQ0xFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdTVUZEYkVVc1EwRkJRenRKUVZsUExHbENRVUZwUWl4RFFVRkRMRTFCUVhOQ0xFVkJRVVVzVVVGQmJVSXNSVUZCUlN4TFFVRlZMRVZCUVVVc1ZVRkJjVUk3VVVGRGNFY3NUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhOUVVGTkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdVVUZEZWtNc1NVRkJTU3hWUVVGVkxFVkJRVVU3V1VGRFdpeFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzFOQlF6bEZPMUZCUTBRc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVONFF5eERRVUZETzBsQlYwOHNOa0pCUVRaQ0xFTkJRVU1zVFVGQll5eEZRVUZGTEVkQlFXTTdVVUZEYUVVc1NVRkJTU3hWUVVGVkxFZEJRVzFETEU5QlFVOHNRMEZCUXl4M1FrRkJkMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRMMFlzU1VGQlNTeFRRVUZUTEVkQlFXOURMRkZCUVZFc1EwRkJRenRSUVVNeFJDeEpRVUZKTEZOQlFWTXNSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRka0lzU1VGQlNTeE5RVUZOTEV0QlFXRXNTVUZCU1N4RFFVRkRMRk5CUVZNN1dVRkJSU3hUUVVGVExFZEJRVWNzVjBGQlZ5eERRVUZETzFGQlF5OUVMRTlCUVU4c1EwRkJReXhWUVVGVkxFVkJRVVU3V1VGRGFFSXNVMEZCVXl4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdXVUZETjBNc1NVRkJTU3hEUVVGRExGTkJRVk03WjBKQlFVVXNUVUZCVFR0WlFVTjBRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4TFFVRkxMR2xDUVVGcFFqdG5Ra0ZCUlN4VFFVRlRMRWRCUVVjc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0WlFVTnVSeXhWUVVGVkxFZEJRVWNzVDBGQlR5eERRVUZETEhkQ1FVRjNRaXhEUVVGRExGTkJRVk1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0VFFVTnFSVHRSUVVORUxFbEJRVWtzTUVKQlFUQkNMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRM1pETEVsQlFVa3NWVUZCVlN4RlFVRkZPMWxCUTFvc1NVRkJTU3hWUVVGVkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hMUVVGTExGbEJRVms3WjBKQlFVVXNNRUpCUVRCQ0xFZEJRVWNzU1VGQlNTeERRVUZETzFsQlF6bEdMRWxCUVVrc1ZVRkJWU3hEUVVGRExFZEJRVWNzU1VGQlNTeFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1MwRkJTeXhaUVVGWk8yZENRVUZGTERCQ1FVRXdRaXhIUVVGSExFbEJRVWtzUTBGQlF6dFRRVU5xUnp0UlFVTkVMRWxCUVVrc01FSkJRVEJDTEVWQlFVVTdXVUZETlVJc1RVRkJUU3hMUVVGTExFZEJRVWNzYzBKQlFWY3NRMEZCVFN4TlFVRk5MRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03V1VGRGJFUXNUVUZCVFN4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkRMMFFzU1VGQlNTeFJRVUZSTEVWQlFVVTdaMEpCUTFZc1NVRkJTU3hSUVVGUkxGbEJRVmtzUzBGQlN5eEZRVUZGTzI5Q1FVTXpRaXhWUVVGVkxFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJRenRwUWtGRGRrTTdPMjlDUVVGTkxGVkJRVlVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU03WVVGRGNFUTdVMEZEU2p0UlFVTkVMRTlCUVU4c1ZVRkJWU3hEUVVGRE8wbEJRM1JDTEVOQlFVTTdRMEZEU2p0QlFYQlJSQ3d3UWtGdlVVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBWYWx1ZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuZXhwb3J0cy5WYWx1ZUVycm9yID0gVmFsdWVFcnJvcjtcbmNsYXNzIFR5cGVFcnJvciBleHRlbmRzIEVycm9yIHtcbn1cbmV4cG9ydHMuVHlwZUVycm9yID0gVHlwZUVycm9yO1xuY2xhc3MgQ29uZmlndXJhdGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuZXhwb3J0cy5Db25maWd1cmF0aW9uRXJyb3IgPSBDb25maWd1cmF0aW9uRXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSWEp5YjNKekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXNhV0l2UlhKeWIzSnpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlQwRXNUVUZCWVN4VlFVRlhMRk5CUVZFc1MwRkJTenREUVVGSk8wRkJRWHBETEdkRFFVRjVRenRCUVZONlF5eE5RVUZoTEZOQlFWVXNVMEZCVVN4TFFVRkxPME5CUVVrN1FVRkJlRU1zT0VKQlFYZERPMEZCVlhoRExFMUJRV0VzYTBKQlFXMUNMRk5CUVZFc1MwRkJTenREUVVGSk8wRkJRV3BFTEdkRVFVRnBSQ0o5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgV2F0Y2hlZF8xID0gcmVxdWlyZShcIn5iZG8vbGliL1dhdGNoZWRcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3Qgb25fY2hhbmdlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwib24tY2hhbmdlXCIpKTtcbmNsYXNzIEZpZWxkIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgICAgIHRoaXMuZmllbGRzID0gW107XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgfVxuICAgIGFkZEZpZWxkKGZpZWxkKSB7XG4gICAgICAgIGlmICh0aGlzLmZpZWxkcy5pbmNsdWRlcyhmaWVsZCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChmaWVsZC5vYmplY3QgJiYgZmllbGQub2JqZWN0LmlzQkRPTW9kZWwpXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5wcm94eWZ5VmFsdWUoZmllbGQudmFsdWVPZigpKTtcbiAgICAgICAgaWYgKGZpZWxkIGluc3RhbmNlb2YgV2F0Y2hlZF8xLldhdGNoZWQgJiYgZmllbGQuc3ViT2JqZWN0KVxuICAgICAgICAgICAgdGhpcy5yZWRlZmluZVZhbHVlKGZpZWxkLnN1Yk9iamVjdCk7XG4gICAgICAgIHRoaXMucmVkZWZpbmVWYWx1ZShmaWVsZCk7XG4gICAgICAgIHRoaXMuZmllbGRzLnB1c2goZmllbGQpO1xuICAgIH1cbiAgICByZW1vdmVGaWVsZChmaWVsZCkge1xuICAgICAgICBpZiAoIXRoaXMuZmllbGRzLmluY2x1ZGVzKGZpZWxkKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKGZpZWxkIGluc3RhbmNlb2YgV2F0Y2hlZF8xLldhdGNoZWQgJiYgZmllbGQuc3ViT2JqZWN0KVxuICAgICAgICAgICAgdGhpcy5yZXN0b3JlVmFsdWUoZmllbGQuc3ViT2JqZWN0KTtcbiAgICAgICAgdGhpcy5yZXN0b3JlVmFsdWUoZmllbGQpO1xuICAgICAgICB1dGlsXzEucmVtb3ZlRWxlbWVudEZyb21BcnJheSh0aGlzLmZpZWxkcywgZmllbGQpO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuZmllbGRzKVxuICAgICAgICAgICAgZmllbGQuc2V0VmFsdWUodmFsdWUpO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgcmVkZWZpbmVWYWx1ZShmaWVsZCkge1xuICAgICAgICBtZXRhZGF0YV8xLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEoZmllbGQsIFwidmFsdWVcIiwgZmllbGQudmFsdWVPZigpKTtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoZmllbGQsIFwidmFsdWVcIik7XG4gICAgICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoZmllbGQsIFwidmFsdWVcIiwge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGF0LnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdXRpbF8xLmdldFByb3h5VGFyZ2V0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aGF0VmFsdWUgPSB1dGlsXzEuZ2V0UHJveHlUYXJnZXQodGhhdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB0aGF0VmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGF0LnZhbHVlID0gdGhhdC5wcm94eWZ5VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlc3RvcmVWYWx1ZShmaWVsZCkge1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGZpZWxkLCBcInZhbHVlXCIpO1xuICAgICAgICBmaWVsZC5zZXRWYWx1ZSh1dGlsXzEuZ2V0UHJveHlUYXJnZXQodGhpcy52YWx1ZSkpO1xuICAgIH1cbiAgICBwcm94eWZ5VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgfHwgdXRpbF8xLmlzT2JqZWN0KHZhbHVlKSAmJiAhdmFsdWUuaXNCRE9Nb2RlbCkge1xuICAgICAgICAgICAgbGV0IGlzU2hhbGxvdyA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuZmllbGRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFmaWVsZC5pc1NoYWxsb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTaGFsbG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlID0gb25fY2hhbmdlXzEuZGVmYXVsdC50YXJnZXQodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIG9uX2NoYW5nZV8xLmRlZmF1bHQodmFsdWUsIChwYXRoLCBjaGFuZ2VkVmFsdWUsIHByZXZpb3VzVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRoU2l6ZSA9IHBhdGguc3BsaXQoXCIuXCIpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuZmllbGRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZmllbGQuaXNTaGFsbG93IHx8IGZpZWxkLmlzU2hhbGxvdyAmJiBwYXRoU2l6ZSA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5wcm94eUhhbmRsZXIocGF0aCwgY2hhbmdlZFZhbHVlLCBwcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHsgaXNTaGFsbG93IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSbWxsYkdRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyeHBZaTlHYVdWc1pDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGRlFTdzRRMEZCTWtNN1FVRkZNME1zTUVOQlFXMUdPMEZCUTI1R0xHdEVRVUUyUkR0QlFVTTNSQ3hyUlVGQmFVTTdRVUZwUW1wRExFMUJRV0VzUzBGQlN6dEpRVzlEWkN4WlFVRlpMRTFCUVZNc1JVRkJSU3hSUVVGWE8xRkJSakZDTEZkQlFVMHNSMEZCYVVNc1JVRkJSU3hEUVVGRE8xRkJSemxETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRM0pDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRE8wbEJRemRDTEVOQlFVTTdTVUZWVFN4UlFVRlJMRU5CUVVNc1MwRkJORUk3VVVGRGVFTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZCUlN4UFFVRlBPMUZCUlhoRExFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNTVUZCWlN4TFFVRkxMRU5CUVVNc1RVRkJUeXhEUVVGRExGVkJRVlU3V1VGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRla2NzU1VGQlNTeExRVUZMTEZsQlFWa3NhVUpCUVU4c1NVRkJTU3hMUVVGTExFTkJRVU1zVTBGQlV6dFpRVUZGTEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzFGQlEzSkdMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZETVVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkROVUlzUTBGQlF6dEpRVlZOTEZkQlFWY3NRMEZCUXl4TFFVRTBRanRSUVVNelF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETzFsQlFVVXNUMEZCVHp0UlFVTjZReXhKUVVGSkxFdEJRVXNzV1VGQldTeHBRa0ZCVHl4SlFVRkpMRXRCUVVzc1EwRkJReXhUUVVGVE8xbEJRVVVzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VVVGRGNFWXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU42UWl3MlFrRkJjMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJReTlETEVOQlFVTTdTVUZUVFN4UlFVRlJMRU5CUVVNc1MwRkJaME03VVVGRE5VTXNTMEZCU3l4TlFVRk5MRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRUdFpRVUZGTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRE0wUXNRMEZCUXp0SlFWRk5MRTlCUVU4N1VVRkRWaXhQUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdTVUZEZEVJc1EwRkJRenRKUVZkUExHRkJRV0VzUTBGQlF5eExRVUUwUWp0UlFVTTVReXhwUTBGQmMwSXNRMEZCVXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhGUVVGRkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTJoRkxFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTnNRaXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEV0QlFVc3NSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVOMlF5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFVkJRVVU3V1VGRGJrTXNSMEZCUnp0blFrRkRReXhQUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZEZEVJc1EwRkJRenRaUVVORUxFZEJRVWNzUTBGQlF5eExRVUZYTzJkQ1FVTllMRXRCUVVzc1IwRkJSeXh4UWtGQll5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMmRDUVVNNVFpeE5RVUZOTEZOQlFWTXNSMEZCUnl4eFFrRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0blFrRkROME1zU1VGQlNTeExRVUZMTEV0QlFVc3NVMEZCVXp0dlFrRkJSU3hQUVVGUE8yZENRVU5vUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUTBGQlF6dFpRVU5FTEZsQlFWa3NSVUZCUlN4SlFVRkpPMWxCUTJ4Q0xGVkJRVlVzUlVGQlJTeEpRVUZKTzFOQlEyNUNMRU5CUVVNc1EwRkJRenRKUVVOUUxFTkJRVU03U1VGVFR5eFpRVUZaTEVOQlFVTXNTMEZCTkVJN1VVRkROME1zVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGRrTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXh4UWtGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJReTlETEVOQlFVTTdTVUZWVHl4WlFVRlpMRU5CUVVNc1MwRkJXVHRSUVVNM1FpeEpRVUZKTEV0QlFVc3NXVUZCV1N4TFFVRkxMRWxCUVVrc1pVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVOHNTMEZCVFN4RFFVRkRMRlZCUVZVc1JVRkJSVHRaUVVOMlJTeEpRVUZKTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNN1dVRkRja0lzUzBGQlN5eE5RVUZOTEV0QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8yZENRVU0zUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUlVGQlJUdHZRa0ZEYkVJc1UwRkJVeXhIUVVGSExFdEJRVXNzUTBGQlF6dHZRa0ZEYkVJc1RVRkJUVHRwUWtGRFZEdGhRVU5LTzFsQlEwUXNTMEZCU3l4SFFVRkhMRzFDUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUXk5Q0xFOUJRVThzYlVKQlFWRXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzV1VGQldTeEZRVUZGTEdGQlFXRXNSVUZCUlN4RlFVRkZPMmRDUVVONlJDeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXp0blFrRkRlRU1zUzBGQlN5eE5RVUZOTEV0QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8yOUNRVU0zUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zU1VGQlNTeExRVUZMTEVOQlFVTXNVMEZCVXl4SlFVRkpMRkZCUVZFc1NVRkJTU3hEUVVGRExFVkJRVVU3ZDBKQlEzUkVMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZSTEZsQlFWa3NSVUZCVVN4aFFVRmhMRU5CUVVNc1EwRkJRenR4UWtGRGNrVTdhVUpCUTBvN1dVRkRUQ3hEUVVGRExFVkJRVVVzUlVGQlJTeFRRVUZUTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNKQ08xRkJRMFFzVDBGQlR5eExRVUZMTEVOQlFVTTdTVUZEYWtJc1EwRkJRenREUVVOS08wRkJia3RFTEhOQ1FXMUxReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBmcmFtZXdvcmtfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2ZyYW1ld29ya1wiKTtcbmNsYXNzIE1vZGVsUmVnaXN0cnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vZGVscyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIU1vZGVsUmVnaXN0cnkuaW5zdGFuY2UpXG4gICAgICAgICAgICBNb2RlbFJlZ2lzdHJ5Lmluc3RhbmNlID0gbmV3IE1vZGVsUmVnaXN0cnkoKTtcbiAgICAgICAgcmV0dXJuIE1vZGVsUmVnaXN0cnkuaW5zdGFuY2U7XG4gICAgfVxuICAgIHJlZ2lzdGVyKG1vZGVsKSB7XG4gICAgICAgIHRoaXMubW9kZWxzLnNldChgJHttb2RlbC5jbGFzc05hbWV9JHttb2RlbC5pZH1gLCBtb2RlbCk7XG4gICAgfVxuICAgIHVucmVnaXN0ZXIobW9kZWwpIHtcbiAgICAgICAgdGhpcy5tb2RlbHMuZGVsZXRlKGAke21vZGVsLmNsYXNzTmFtZX0ke21vZGVsLmlkfWApO1xuICAgIH1cbiAgICBnZXRNb2RlbEJ5SWQoaWQsIGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVscy5nZXQoYCR7dGhpcy5nZXRDbGFzc05hbWUoY29uc3RydWN0b3IpfSR7aWR9YCk7XG4gICAgfVxuICAgIGdldE1vZGVsc0J5QXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGNvbnN0IG1vZGVscyA9IFtdO1xuICAgICAgICB0aGlzLm1vZGVscy5mb3JFYWNoKChtb2RlbCkgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoa2V5IGluIG1vZGVsKSB8fCBlbGVtZW50ICE9PSBtb2RlbFtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb2RlbHMucHVzaChtb2RlbCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbW9kZWxzO1xuICAgIH1cbiAgICB1cGRhdGVJRChvbGRJRCwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgY29uc3QgbW9kZWwgPSB0aGlzLm1vZGVscy5nZXQoYCR7dGhpcy5nZXRDbGFzc05hbWUoY29uc3RydWN0b3IpfSR7b2xkSUR9YCk7XG4gICAgICAgIGlmICghbW9kZWwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMubW9kZWxzLmRlbGV0ZShgJHt0aGlzLmdldENsYXNzTmFtZShjb25zdHJ1Y3Rvcil9JHtvbGRJRH1gKTtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihtb2RlbCk7XG4gICAgfVxuICAgIGdldE1vZGVsc0J5Q29uZGl0aW9uKGZ1bmMsIG1vZGUgPSBcImFsbFwiKSB7XG4gICAgICAgIGNvbnN0IG1vZGVscyA9IFtdO1xuICAgICAgICBsZXQgbGFzdE1vZGVsO1xuICAgICAgICBmb3IgKGNvbnN0IG1vZGVsIG9mIHRoaXMubW9kZWxzLnZhbHVlcygpKSB7XG4gICAgICAgICAgICBpZiAoZnVuYyhtb2RlbCkpIHtcbiAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gXCJmaXJzdFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kZWw7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09IFwiYWxsXCIpXG4gICAgICAgICAgICAgICAgICAgIG1vZGVscy5wdXNoKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gXCJsYXN0XCIpXG4gICAgICAgICAgICAgICAgICAgIGxhc3RNb2RlbCA9IG1vZGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2RlID09PSBcImxhc3RcIiA/IGxhc3RNb2RlbCA6IG1vZGVscztcbiAgICB9XG4gICAgZ2V0Q2xhc3NOYW1lKGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWU7XG4gICAgICAgIGlmIChmcmFtZXdvcmtfMS5pc0Jhc2VDb25zdHJ1Y3Rvcihjb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNvbnN0cnVjdG9yLmNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChcImNsYXNzTmFtZVwiIGluIGNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjb25zdHJ1Y3Rvci5jbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNvbnN0cnVjdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgY2xhc3NOYW1lID0gY29uc3RydWN0b3IuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9XG59XG5leHBvcnRzLk1vZGVsUmVnaXN0cnkgPSBNb2RlbFJlZ2lzdHJ5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVFc5a1pXeFNaV2RwYzNSeWVTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiR2xpTDAxdlpHVnNVbVZuYVhOMGNua3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRFFTeHZSRUZCZVVRN1FVRlhla1FzVFVGQllTeGhRVUZoTzBsQmFVTjBRanRSUVdSUkxGZEJRVTBzUjBGQk1FSXNTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVdNeFFpeERRVUZETzBsQlRHeENMRTFCUVUwc1EwRkJReXhYUVVGWE8xRkJRM0pDTEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1VVRkJVVHRaUVVGRkxHRkJRV0VzUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1N4aFFVRmhMRVZCUVVVc1EwRkJRenRSUVVNeFJTeFBRVUZQTEdGQlFXRXNRMEZCUXl4UlFVRlJMRU5CUVVNN1NVRkRiRU1zUTBGQlF6dEpRVlZOTEZGQlFWRXNRMEZCUXl4TFFVRmxPMUZCUXpOQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRE5VUXNRMEZCUXp0SlFWTk5MRlZCUVZVc1EwRkJReXhMUVVGbE8xRkJRemRDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEZOQlFWTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU40UkN4RFFVRkRPMGxCVlUwc1dVRkJXU3hEUVVFMlF5eEZRVUZWTEVWQlFVVXNWMEZCWXp0UlFVTjBSaXhQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJiVU1zUTBGQlF6dEpRVU4yUnl4RFFVRkRPMGxCVlUwc2NVSkJRWEZDTEVOQlFVTXNWVUZCZFVNN1VVRkRhRVVzVFVGQlRTeE5RVUZOTEVkQlFXVXNSVUZCUlN4RFFVRkRPMUZCUXpsQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVU3V1VGRE1VSXNTMEZCU3l4TlFVRk5MRWRCUVVjc1NVRkJTU3hWUVVGVkxFVkJRVVU3WjBKQlF6RkNMRWxCUVVrc1ZVRkJWU3hEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0dlFrRkRhRU1zVFVGQlRTeFBRVUZQTEVkQlFVY3NWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yOUNRVU5vUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUzBGQlN5eERRVUZETEVsQlFVa3NUMEZCVHl4TFFVRnpRaXhMUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdkMEpCUXpkRUxFOUJRVTg3Y1VKQlExWTdhVUpCUTBvN1lVRkRTanRaUVVORUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRka0lzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEU0N4UFFVRlBMRTFCUVUwc1EwRkJRenRKUVVOc1FpeERRVUZETzBsQldVMHNVVUZCVVN4RFFVRnhRaXhMUVVGakxFVkJRVVVzVjBGQll6dFJRVU01UkN4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVjBGQlZ5eERRVUZETEVkQlFVY3NTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNelJTeEpRVUZKTEVOQlFVTXNTMEZCU3p0WlFVRkZMRTlCUVU4N1VVRkRia0lzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZkQlFWY3NRMEZCUXl4SFFVRkhMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGFFVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCWlUwc2IwSkJRVzlDTEVOQlFVTXNTVUZCYTBNc1JVRkJSU3hQUVVGcFF5eExRVUZMTzFGQlEyeEhMRTFCUVUwc1RVRkJUU3hIUVVGbExFVkJRVVVzUTBGQlF6dFJRVU01UWl4SlFVRkpMRk5CUVN0Q0xFTkJRVU03VVVGRGNFTXNTMEZCU3l4TlFVRk5MRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4RlFVRkZPMWxCUTNSRExFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMmRDUVVOaUxFbEJRVWtzU1VGQlNTeExRVUZMTEU5QlFVODdiMEpCUVVVc1QwRkJUeXhMUVVGTExFTkJRVU03WjBKQlEyNURMRWxCUVVrc1NVRkJTU3hMUVVGTExFdEJRVXM3YjBKQlFVVXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dG5Ra0ZEZGtNc1NVRkJTU3hKUVVGSkxFdEJRVXNzVFVGQlRUdHZRa0ZCUlN4VFFVRlRMRWRCUVVjc1MwRkJTeXhEUVVGRE8yRkJRekZETzFOQlEwbzdVVUZEUkN4UFFVRlBMRWxCUVVrc1MwRkJTeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJRMmhFTEVOQlFVTTdTVUZWVHl4WlFVRlpMRU5CUVVNc1YwRkJOa003VVVGRE9VUXNTVUZCU1N4VFFVRnBRaXhEUVVGRE8xRkJRM1JDTEVsQlFVa3NOa0pCUVdsQ0xFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVTdXVUZEYUVNc1UwRkJVeXhIUVVGSExGZEJRVmNzUTBGQlF5eFRRVUZUTEVOQlFVTTdVMEZEY2tNN1lVRkJUU3hKUVVGSkxGZEJRVmNzU1VGQlNTeFhRVUZYTEVWQlFVVTdXVUZEYmtNc1UwRkJVeXhIUVVGSExGZEJRVmNzUTBGQlF5eFRRVUZUTEVOQlFVTTdVMEZEY2tNN1lVRkJUU3hKUVVGSkxFOUJRVThzVjBGQlZ5eExRVUZMTEZWQlFWVXNSVUZCUlR0WlFVTXhReXhUUVVGVExFZEJRVWNzVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXp0VFFVTm9RenM3V1VGQlRTeFRRVUZUTEVkQlFWTXNWMEZCV1N4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU03VVVGRGRrUXNUMEZCVHl4VFFVRlRMRU5CUVVNN1NVRkRja0lzUTBGQlF6dERRVU5LTzBGQk1VcEVMSE5EUVRCS1F5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIE1vZGlmaWNhdGlvbiB7XG4gICAgY29uc3RydWN0b3IodmFsdWUsIHR5cGUgPSBcImRlbGV0ZVwiKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59XG5leHBvcnRzLk1vZGlmaWNhdGlvbiA9IE1vZGlmaWNhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVRXOWthV1pwWTJGMGFXOXVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlzYVdJdlRXOWthV1pwWTJGMGFXOXVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlVVRXNUVUZCWVN4WlFVRlpPMGxCYlVKeVFpeFpRVUZaTEV0QlFWY3NSVUZCUlN4UFFVRnhRaXhSUVVGUk8xRkJRMnhFTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRMjVDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVUwc1NVRkJTU3hEUVVGRE8wbEJRM2hDTEVOQlFVTTdTVUZSVFN4UFFVRlBPMUZCUTFZc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzBsQlEzUkNMRU5CUVVNN1NVRlJUU3hSUVVGUkxFTkJRVU1zUzBGQlZUdFJRVU4wUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dEpRVU4yUWl4RFFVRkRPME5CUTBvN1FVRXpRMFFzYjBOQk1rTkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgTW9kaWZpY2F0aW9uXzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kaWZpY2F0aW9uXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IEVycm9yc18xID0gcmVxdWlyZShcIn5iZG8vbGliL0Vycm9yc1wiKTtcbmNvbnN0IG9uX2NoYW5nZV8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm9uLWNoYW5nZVwiKSk7XG5jbGFzcyBQcm9wZXJ0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSwgcGFyYW1zKSB7XG4gICAgICAgIHRoaXMuaXNTaGFsbG93ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSB7fTtcbiAgICAgICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucGFyYW1zKVxuICAgICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtcy5wYXJhbXM7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgcGFyYW1ldGVycyk7XG4gICAgICAgIGNvbnN0IGNhcGl0YWxpemVkUHJvcCA9IHV0aWxfMS51Y0ZpcnN0KHByb3BlcnR5KTtcbiAgICAgICAgY29uc3Qgb25UeXBlQ2hlY2tGYWlsID0gYG9uJHtjYXBpdGFsaXplZFByb3B9VHlwZUNoZWNrRmFpbGA7XG4gICAgICAgIGNvbnN0IG9uVHlwZUNoZWNrID0gYG9uJHtjYXBpdGFsaXplZFByb3B9VHlwZUNoZWNrYDtcbiAgICAgICAgY29uc3Qgb25UeXBlQ2hlY2tTdWNjZXNzID0gYG9uJHtjYXBpdGFsaXplZFByb3B9VHlwZUNoZWNrU3VjY2Vzc2A7XG4gICAgICAgIHRoaXMub25UeXBlQ2hlY2tGYWlsID0gcGFyYW1ldGVycyA/IHBhcmFtZXRlcnMub25UeXBlQ2hlY2tGYWlsIHx8IG9uVHlwZUNoZWNrRmFpbCA6IG9uVHlwZUNoZWNrRmFpbDtcbiAgICAgICAgdGhpcy5vblR5cGVDaGVjayA9IHBhcmFtZXRlcnMgPyBwYXJhbWV0ZXJzLm9uVHlwZUNoZWNrIHx8IG9uVHlwZUNoZWNrIDogb25UeXBlQ2hlY2s7XG4gICAgICAgIHRoaXMub25UeXBlQ2hlY2tTdWNjZXNzID0gcGFyYW1ldGVycyA/IHBhcmFtZXRlcnMub25UeXBlQ2hlY2tTdWNjZXNzIHx8IG9uVHlwZUNoZWNrU3VjY2VzcyA6IG9uVHlwZUNoZWNrU3VjY2VzcztcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5kb1NldFZhbHVlKHZhbHVlLCB0cnVlKTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5nS2V5ID0gdGhpcy5wcm9wZXJ0eS50b1N0cmluZygpO1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAoIXV0aWxfMS5pc1Byb3h5KHZhbHVlKSAmJiB0aGlzLnNhdmVJbkxvY2FsU3RvcmFnZSAmJiB1dGlsXzEuaXNGdW5jdGlvbih0aGlzLm9iamVjdC5nZXROYW1lc3BhY2VkU3RvcmFnZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5vYmplY3QuZ2V0TmFtZXNwYWNlZFN0b3JhZ2Uoc3RyaW5nS2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHR5cGVHdWFyZCh2YWx1ZSkge1xuICAgICAgICBsZXQgdmFsdWVUb1Bhc3MgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kaWZpY2F0aW9uXzEuTW9kaWZpY2F0aW9uKVxuICAgICAgICAgICAgdmFsdWVUb1Bhc3MgPSB2YWx1ZS52YWx1ZU9mKCk7XG4gICAgICAgIGNvbnN0IGRlc2lnblR5cGUgPSBtZXRhZGF0YV8xLmdldERlc2lnblR5cGUodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkudG9TdHJpbmcoKSk7XG4gICAgICAgIGNvbnN0IHR5cGVFcnJvciA9IG5ldyBFcnJvcnNfMS5UeXBlRXJyb3IoYCR7dmFsdWVUb1Bhc3N9IGlzIG5vdCB0eXBlIG9mICR7ZGVzaWduVHlwZS5jbGFzc05hbWUgfHwgZGVzaWduVHlwZS5uYW1lfWApO1xuICAgICAgICBjb25zdCBpZHhTdHJ1Y3RPYmogPSB0aGlzLm9iamVjdDtcbiAgICAgICAgbGV0IGVycm9yO1xuICAgICAgICBpZiAoIXRoaXMubnVsbGFibGUgJiYgKHZhbHVlVG9QYXNzID09PSB1bmRlZmluZWQgfHwgdmFsdWVUb1Bhc3MgPT09IG51bGwpKVxuICAgICAgICAgICAgZXJyb3IgPSB0eXBlRXJyb3I7XG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgIGlmICh1dGlsXzEuaXNQcmltaXRpdmUodmFsdWVUb1Bhc3MpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZVRvUGFzcyAhPT0gZGVzaWduVHlwZS5uYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLm51bGxhYmxlIHx8ICEodmFsdWVUb1Bhc3MgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZVRvUGFzcyA9PT0gbnVsbCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IHR5cGVFcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghKHZhbHVlVG9QYXNzIGluc3RhbmNlb2YgZGVzaWduVHlwZSkpXG4gICAgICAgICAgICAgICAgZXJyb3IgPSB0eXBlRXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlcnJvciAmJiB1dGlsXzEuaXNGdW5jdGlvbihpZHhTdHJ1Y3RPYmpbdGhpcy5vblR5cGVDaGVja10pKVxuICAgICAgICAgICAgZXJyb3IgPSBpZHhTdHJ1Y3RPYmpbdGhpcy5vblR5cGVDaGVja10odmFsdWVUb1Bhc3MpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmICh1dGlsXzEuaXNGdW5jdGlvbihpZHhTdHJ1Y3RPYmpbdGhpcy5vblR5cGVDaGVja0ZhaWxdKSkge1xuICAgICAgICAgICAgICAgIGlkeFN0cnVjdE9ialt0aGlzLm9uVHlwZUNoZWNrRmFpbF0oZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodXRpbF8xLmlzRnVuY3Rpb24oaWR4U3RydWN0T2JqLm9uVHlwZUNoZWNrRmFpbCkpIHtcbiAgICAgICAgICAgICAgICBpZHhTdHJ1Y3RPYmoub25UeXBlQ2hlY2tGYWlsKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1dGlsXzEuaXNGdW5jdGlvbihpZHhTdHJ1Y3RPYmpbdGhpcy5vblR5cGVDaGVja1N1Y2Nlc3NdKSlcbiAgICAgICAgICAgIGlkeFN0cnVjdE9ialt0aGlzLm9uVHlwZUNoZWNrU3VjY2Vzc10oKTtcbiAgICAgICAgcmV0dXJuICEoQm9vbGVhbihlcnJvcikudmFsdWVPZigpKTtcbiAgICB9XG4gICAgcHJveHlIYW5kbGVyKF9wYXRoLCBfY2hhbmdlZFZhbCwgX3ByZXZWYWwpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5kb1NldFZhbHVlKG9uX2NoYW5nZV8xLmRlZmF1bHQudGFyZ2V0KHZhbHVlKSwgZmFsc2UpO1xuICAgIH1cbiAgICBzaG91bGREb1NldFZhbHVlKHZhbHVlLCBza2lwR3VhcmQgPSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gISh2YWx1ZSA9PT0gdGhpcy5vd25WYWx1ZSB8fCAhc2tpcEd1YXJkICYmICF0aGlzLmRpc2FibGVUeXBlR3VhcmQgJiYgIXRoaXMudHlwZUd1YXJkKHZhbHVlKSk7XG4gICAgfVxuICAgIGRvU2V0VmFsdWUodmFsdWUsIG1vZGlmeVZhbHVlID0gdHJ1ZSwgc2tpcEd1YXJkID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZERvU2V0VmFsdWUodmFsdWUsIHNraXBHdWFyZCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCB2YWx1ZVRvUGFzcztcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kaWZpY2F0aW9uXzEuTW9kaWZpY2F0aW9uKSB7XG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHZhbHVlO1xuICAgICAgICBpZiAobW9kaWZ5VmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3h5ZmllZCA9IHRoaXMucHJveHlmeVZhbHVlKHZhbHVlVG9QYXNzKTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBwcm94eWZpZWQ7XG4gICAgICAgICAgICB0aGlzLm93blZhbHVlID0gdmFsdWVUb1Bhc3M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkVXBkYXRlTnNTdG9yYWdlKCkgJiYgdXRpbF8xLmlzRnVuY3Rpb24odGhpcy5vYmplY3Quc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2UpKSB7XG4gICAgICAgICAgICB0aGlzLm9iamVjdC5zZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSh0aGlzLnByb3BlcnR5LnRvU3RyaW5nKCksIHZhbHVlVG9QYXNzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm94eWZ5VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgfHwgdXRpbF8xLmlzT2JqZWN0KHZhbHVlKSAmJiAhdmFsdWUuaXNCRE9Nb2RlbCkge1xuICAgICAgICAgICAgdmFsdWUgPSBvbl9jaGFuZ2VfMS5kZWZhdWx0LnRhcmdldCh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gb25fY2hhbmdlXzEuZGVmYXVsdCh2YWx1ZSwgKHBhdGgsIGNoYW5nZWRWYWwsIHByZXZWYWwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm94eUhhbmRsZXJSZXBsYWNlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3h5SGFuZGxlclJlcGxhY2VtZW50KHBhdGgsIGNoYW5nZWRWYWwsIHByZXZWYWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJveHlIYW5kbGVyKHBhdGgsIGNoYW5nZWRWYWwsIHByZXZWYWwpO1xuICAgICAgICAgICAgfSwgeyBpc1NoYWxsb3c6IHRoaXMuaXNTaGFsbG93IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgc2hvdWxkVXBkYXRlTnNTdG9yYWdlKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2F2ZUluTG9jYWxTdG9yYWdlIHx8ICFlbnZpcm9ubWVudF8xLmlzQnJvd3NlcigpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSB0aGlzLnByb3BlcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGtleVNob3VsZEJlVXBkYXRlZCA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5vYmplY3QsIFwia2V5U2hvdWxkQmVVcGRhdGVkXCIpIHx8IHt9O1xuICAgICAgICBpZiAoa2V5U2hvdWxkQmVVcGRhdGVkW3N0cmluZ0tleV0pXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHV0aWxfMS5pc0Z1bmN0aW9uKHRoaXMub2JqZWN0LmdldE5hbWVzcGFjZWRTdG9yYWdlKSAmJlxuICAgICAgICAgICAgdGhpcy5vYmplY3QuZ2V0TmFtZXNwYWNlZFN0b3JhZ2Uoc3RyaW5nS2V5KSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMub2JqZWN0LCBcImtleVNob3VsZEJlVXBkYXRlZFwiLCBPYmplY3QuYXNzaWduKGtleVNob3VsZEJlVXBkYXRlZCwgeyBbc3RyaW5nS2V5XTogdHJ1ZSB9KSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQm9vbGVhbihtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMub2JqZWN0LCBcImNvbnN0cnVjdGlvbkNvbXBsZXRlXCIpKTtcbiAgICB9XG59XG5leHBvcnRzLlByb3BlcnR5ID0gUHJvcGVydHk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lVSEp2Y0dWeWRIa3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMnhwWWk5UWNtOXdaWEowZVM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZEUVN4M1JFRkJjVVE3UVVGRGNrUXNhMFJCUVdsR08wRkJRMnBHTEhkRVFVRnRSRHRCUVVOdVJDd3dRMEZCYzBZN1FVRkZkRVlzTkVOQlFUUkRPMEZCUXpWRExHdEZRVUZwUXp0QlFUSkZha01zVFVGQllTeFJRVUZSTzBsQmNVZHFRaXhaUVVGWkxFMUJRVk1zUlVGQlJTeFJRVUZYTEVWQlFVVXNUVUZCWjBRN1VVRnlRamRGTEdOQlFWTXNSMEZCV1N4SlFVRkpMRU5CUVVNN1VVRnpRamRDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRM0pDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRE8xRkJRM3BDTEVsQlFVa3NWVUZCVlN4SFFVRnZRaXhGUVVGRkxFTkJRVU03VVVGRmNrTXNTVUZCU1N4TlFVRk5MRWxCUVVrc1RVRkJUU3hEUVVGRExFMUJRVTA3V1VGQlJTeFZRVUZWTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVONFJDeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVVZvUXl4TlFVRk5MR1ZCUVdVc1IwRkJSeXhqUVVGUExFTkJRVU1zVVVGQmEwSXNRMEZCUXl4RFFVRkRPMUZCUTNCRUxFMUJRVTBzWlVGQlpTeEhRVUZITEV0QlFVc3NaVUZCWlN4bFFVRmxMRU5CUVVNN1VVRkROVVFzVFVGQlRTeFhRVUZYTEVkQlFVY3NTMEZCU3l4bFFVRmxMRmRCUVZjc1EwRkJRenRSUVVOd1JDeE5RVUZOTEd0Q1FVRnJRaXhIUVVGSExFdEJRVXNzWlVGQlpTeHJRa0ZCYTBJc1EwRkJRenRSUVVWc1JTeEpRVUZKTEVOQlFVTXNaVUZCWlN4SFFVRkhMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETEdWQlFXVXNTVUZCU1N4bFFVRmxMRU5CUVVNc1EwRkJReXhEUVVGRExHVkJRV1VzUTBGQlF6dFJRVU53Unl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRMRmRCUVZjc1NVRkJTU3hYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXp0UlFVTndSaXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRWRCUVVjc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVTXNhMEpCUVd0Q0xFbEJRVWtzYTBKQlFXdENMRU5CUVVNc1EwRkJReXhEUVVGRExHdENRVUZyUWl4RFFVRkRPMGxCUTNCSUxFTkJRVU03U1VGVFRTeFJRVUZSTEVOQlFVTXNTMEZCWjBNN1VVRkROVU1zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRGFrTXNRMEZCUXp0SlFWVk5MRTlCUVU4N1VVRkRWaXhOUVVGTkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJSVE5ETEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03VVVGRmRrSXNTVUZCU1N4RFFVRkRMR05CUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFbEJRVWtzYVVKQlFWVXNRMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUeXhEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRVZCUVVVN1dVRkRia2NzUzBGQlN5eEhRVUZUTEVsQlFVa3NRMEZCUXl4TlFVRlBMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1UwRkRPVVE3VVVGRFJDeFBRVUZQTEV0QlFVc3NRMEZCUXp0SlFVTnFRaXhEUVVGRE8wbEJWVTBzVTBGQlV5eERRVUZETEV0QlFXZERPMUZCUXpkRExFbEJRVWtzVjBGQlZ5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTjRRaXhKUVVGSkxFdEJRVXNzV1VGQldTd3lRa0ZCV1R0WlFVRkZMRmRCUVZjc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdVVUZGYWtVc1RVRkJUU3hWUVVGVkxFZEJRVWNzZDBKQlFXRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVONFJTeE5RVUZOTEZOQlFWTXNSMEZCUnl4SlFVRkpMR3RDUVVGVExFTkJRVU1zUjBGQlJ5eFhRVUZYTEcxQ1FVRnRRaXhWUVVGVkxFTkJRVU1zVTBGQlV5eEpRVUZKTEZWQlFWVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRelZITEUxQlFVMHNXVUZCV1N4SFFVRnRRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzFGQlJXcEVMRWxCUVVrc1MwRkJTeXhEUVVGRE8xRkJSVllzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1EwRkJReXhYUVVGWExFdEJRVXNzVTBGQlV5eEpRVUZKTEZkQlFWY3NTMEZCU3l4SlFVRkpMRU5CUVVNN1dVRkJSU3hMUVVGTExFZEJRVWNzVTBGQlV5eERRVUZETzFGQlJUZEdMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVU3V1VGRFVpeEpRVUZKTEd0Q1FVRlhMRU5CUVVNc1YwRkJWeXhEUVVGRExFVkJRVVU3WjBKQlF6RkNMRWxCUVVrc1QwRkJUeXhYUVVGWExFdEJRVXNzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1JVRkJSVHR2UWtGRGRFUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFbEJRVWtzUTBGQlF5eERRVUZETEZkQlFWY3NTMEZCU3l4VFFVRlRMRWxCUVVrc1YwRkJWeXhMUVVGTExFbEJRVWtzUTBGQlF6dDNRa0ZCUlN4TFFVRkxMRWRCUVVjc1UwRkJVeXhEUVVGRE8ybENRVU5xUnp0aFFVTktPMmxDUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETEZkQlFWY3NXVUZCV1N4VlFVRlZMRU5CUVVNN1owSkJRVVVzUzBGQlN5eEhRVUZITEZOQlFWTXNRMEZCUXp0VFFVTjBSVHRSUVVkRUxFbEJRVWtzUTBGQlF5eExRVUZMTEVsQlFVa3NhVUpCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMWxCUVVVc1MwRkJTeXhIUVVGSExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03VVVGSE9VY3NTVUZCU1N4TFFVRkxMRVZCUVVVN1dVRkRVQ3hKUVVGSkxHbENRVUZWTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF5eEZRVUZGTzJkQ1FVTm9SQ3haUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8yRkJRemRETzJsQ1FVRk5MRWxCUVVrc2FVSkJRVlVzUTBGQlF5eFpRVUZaTEVOQlFVTXNaVUZCWlN4RFFVRkRMRVZCUVVVN1owSkJRMnBFTEZsQlFWa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03WVVGRGRrTTdPMmRDUVVGTkxFMUJRVTBzUzBGQlN5eERRVUZETzFOQlEzUkNPMkZCUVUwc1NVRkJTU3hwUWtGQlZTeERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXp0WlFVRkZMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1JVRkJSU3hEUVVGRE8xRkJRM1JITEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUTNaRExFTkJRVU03U1VGUFRTeFpRVUZaTEVOQlFVTXNTMEZCWXl4RlFVRkZMRmRCUVd0Q0xFVkJRVVVzVVVGQlpUdFJRVU51UlN4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzFGQlEzcENMRWxCUVVrc1MwRkJTeXhMUVVGTExGTkJRVk1zU1VGQlNTeExRVUZMTEV0QlFVc3NTVUZCU1R0WlFVRkZMRTlCUVU4N1VVRkRiRVFzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4dFFrRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOdVJDeERRVUZETzBsQlZVMHNaMEpCUVdkQ0xFTkJRVU1zUzBGQlowTXNSVUZCUlN4WlFVRnhRaXhMUVVGTE8xRkJRMmhHTEU5QlFVOHNRMEZCUXl4RFFVRkRMRXRCUVVzc1MwRkJTeXhKUVVGSkxFTkJRVU1zVVVGQlVTeEpRVUZKTEVOQlFVTXNVMEZCVXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNoSExFTkJRVU03U1VGWlV5eFZRVUZWTEVOQlFVTXNTMEZCWjBNc1JVRkJSU3hqUVVGMVFpeEpRVUZKTEVWQlFVVXNXVUZCY1VJc1MwRkJTenRSUVVNeFJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEV0QlFVc3NSVUZCUlN4VFFVRlRMRU5CUVVNN1dVRkJSU3hQUVVGUE8xRkJRM0pFTEVsQlFVa3NWMEZCTmtJc1EwRkJRenRSUVVOc1F5eEpRVUZKTEV0QlFVc3NXVUZCV1N3eVFrRkJXU3hGUVVGRk8xbEJReTlDTEZkQlFWY3NSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VTBGRGFrTTdPMWxCUVUwc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU16UWl4SlFVRkpMRmRCUVZjc1JVRkJSVHRaUVVOaUxFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03V1VGRGFrUXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhUUVVGVExFTkJRVU03V1VGRGRrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhYUVVGWExFTkJRVU03VTBGREwwSTdVVUZEUkN4SlFVRkpMRWxCUVVrc1EwRkJReXh4UWtGQmNVSXNSVUZCUlN4SlFVRkpMR2xDUVVGVkxFTkJRV3RDTEVsQlFVa3NRMEZCUXl4TlFVRlBMRU5CUVVNc01FSkJRVEJDTEVOQlFVTXNSVUZCUlR0WlFVTnlSaXhKUVVGSkxFTkJRVU1zVFVGQlR5eERRVUZETERCQ1FVRXdRaXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVc1YwRkJWeXhEUVVGRExFTkJRVU03VTBGRGJrYzdTVUZEVEN4RFFVRkRPMGxCVlZNc1dVRkJXU3hEUVVGRExFdEJRVms3VVVGREwwSXNTVUZCU1N4TFFVRkxMRmxCUVZrc1MwRkJTeXhKUVVGSkxHVkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRlBMRXRCUVUwc1EwRkJReXhWUVVGVkxFVkJRVVU3V1VGRGRrVXNTMEZCU3l4SFFVRkhMRzFDUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUXk5Q0xFOUJRVThzYlVKQlFWRXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzVlVGQlZTeEZRVUZGTEU5QlFVOHNSVUZCUlN4RlFVRkZPMmRDUVVOcVJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4MVFrRkJkVUlzUlVGQlJUdHZRa0ZET1VJc1NVRkJTU3hEUVVGRExIVkNRVUYxUWl4RFFVRkRMRWxCUVVrc1JVRkJVU3hWUVVGVkxFVkJRVkVzVDBGQlR5eERRVUZETEVOQlFVTTdhVUpCUTNaRk96dHZRa0ZCVFN4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUlVGQlVTeFZRVUZWTEVWQlFWRXNUMEZCVHl4RFFVRkRMRU5CUVVNN1dVRkRjRVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzSkRPMUZCUTBRc1QwRkJUeXhMUVVGTExFTkJRVU03U1VGRGFrSXNRMEZCUXp0SlFWTlRMSEZDUVVGeFFqdFJRVU16UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4SlFVRkpMRU5CUVVNc2RVSkJRVk1zUlVGQlJUdFpRVUZGTEU5QlFVOHNTMEZCU3l4RFFVRkRPMUZCUXpORUxFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRE0wTXNUVUZCVFN4clFrRkJhMElzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzYjBKQlFXOUNMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRGFFWXNTVUZCU1N4clFrRkJhMElzUTBGQlF5eFRRVUZUTEVOQlFVTTdXVUZCUlN4UFFVRlBMRWxCUVVrc1EwRkJRenRSUVVNdlF5eEpRVUZKTEdsQ1FVRlZMRU5CUVd0Q0xFbEJRVWtzUTBGQlF5eE5RVUZQTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU03V1VGRE4wTXNTVUZCU1N4RFFVRkRMRTFCUVU4c1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhUUVVGVExFVkJRVVU3V1VGRE4wVXNlVUpCUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEc5Q1FVRnZRaXhGUVVGRkxFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzUlVGQlJTeERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU0xUnl4UFFVRlBMRWxCUVVrc1EwRkJRenRUUVVObU8xRkJRMFFzVDBGQlR5eFBRVUZQTEVOQlFVTXNjMEpCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEhOQ1FVRnpRaXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU55UlN4RFFVRkRPME5CUTBvN1FVRjJVa1FzTkVKQmRWSkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgTW9kaWZpY2F0aW9uXzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kaWZpY2F0aW9uXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IG9uX2NoYW5nZV8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm9uLWNoYW5nZVwiKSk7XG5jb25zdCBjbG9uZV9kZWVwXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiY2xvbmUtZGVlcFwiKSk7XG5jbGFzcyBXYXRjaGVkIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5LCBwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5pc1NoYWxsb3cgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgY29uc3QgY2FwaXRhbGl6ZWRQcm9wID0gdXRpbF8xLnVjRmlyc3QocHJvcGVydHkpO1xuICAgICAgICBjb25zdCBvbkluaXRGdW5jID0gYG9uJHtjYXBpdGFsaXplZFByb3B9SW5pdGA7XG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlRnVuYyA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfUNoYW5nZWA7XG4gICAgICAgIGNvbnN0IG9uQWRkRnVuYyA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfUFkZGA7XG4gICAgICAgIGNvbnN0IG9uUmVtb3ZlRnVuYyA9IGBvbiR7Y2FwaXRhbGl6ZWRQcm9wfVJlbW92ZWA7XG4gICAgICAgIHRoaXMub25Jbml0ID0gcGFyYW1zID8gcGFyYW1zLm9uSW5pdCB8fCBvbkluaXRGdW5jIDogb25Jbml0RnVuYztcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHBhcmFtcyA/IHBhcmFtcy5vbkNoYW5nZSB8fCBvbkNoYW5nZUZ1bmMgOiBvbkNoYW5nZUZ1bmM7XG4gICAgICAgIHRoaXMub25BZGQgPSBwYXJhbXMgPyBwYXJhbXMub25BZGQgfHwgb25BZGRGdW5jIDogb25BZGRGdW5jO1xuICAgICAgICB0aGlzLm9uUmVtb3ZlID0gcGFyYW1zID8gcGFyYW1zLm9uUmVtb3ZlIHx8IG9uUmVtb3ZlRnVuYyA6IG9uUmVtb3ZlRnVuYztcbiAgICAgICAgdGhpcy5pc1NoYWxsb3cgPSBwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcy5pc1NoYWxsb3cgPT09IFwiYm9vbGVhblwiID8gcGFyYW1zLmlzU2hhbGxvdyA6IHRoaXMuaXNTaGFsbG93O1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkRG9TZXRWYWx1ZSh2YWx1ZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IG9sZFZhbCA9IGNsb25lX2RlZXBfMS5kZWZhdWx0KHRoaXMub3duVmFsdWUpO1xuICAgICAgICBsZXQgdmFsdWVUb1Bhc3M7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGlmaWNhdGlvbl8xLk1vZGlmaWNhdGlvbikge1xuICAgICAgICAgICAgdmFsdWVUb1Bhc3MgPSB2YWx1ZS52YWx1ZU9mKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdmFsdWVUb1Bhc3MgPSB2YWx1ZTtcbiAgICAgICAgbGV0IHVzZVZhbHVlID0gZmFsc2U7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGlmaWNhdGlvbl8xLk1vZGlmaWNhdGlvbikge1xuICAgICAgICAgICAgdmFsdWUuc2V0VmFsdWUodmFsdWVUb1Bhc3MpO1xuICAgICAgICAgICAgdXNlVmFsdWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlVG9TZXQgPSB1c2VWYWx1ZSA/IHZhbHVlIDogdmFsdWVUb1Bhc3M7XG4gICAgICAgIGlmICh0aGlzLnN1Yk9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy5zdWJPYmplY3Quc2V0VmFsdWUodmFsdWVUb1NldCk7XG4gICAgICAgICAgICB0aGlzLm93blZhbHVlID0gdXRpbF8xLmdldFByb3h5VGFyZ2V0KHRoaXMuc3ViT2JqZWN0LnZhbHVlT2YoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHRoaXMucHJveHlmeVZhbHVlKHZhbHVlVG9QYXNzKTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVRvUGFzcztcbiAgICAgICAgICAgIHRoaXMub3duVmFsdWUgPSB1dGlsXzEuZ2V0UHJveHlUYXJnZXQodmFsdWVUb1Bhc3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkeFN0cnVjdE9iaiA9IHRoaXMub2JqZWN0O1xuICAgICAgICBpZiAodXRpbF8xLmlzRnVuY3Rpb24oaWR4U3RydWN0T2JqW3RoaXMub25DaGFuZ2VdKSAmJiB0aGlzLmlzSW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICBpZHhTdHJ1Y3RPYmpbdGhpcy5vbkNoYW5nZV0ob2xkVmFsKTtcbiAgICAgICAgaWYgKHV0aWxfMS5pc0Z1bmN0aW9uKGlkeFN0cnVjdE9ialt0aGlzLm9uSW5pdF0pICYmICF0aGlzLmlzSW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICBpZHhTdHJ1Y3RPYmpbdGhpcy5vbkluaXRdKHZhbHVlVG9QYXNzKTtcbiAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViT2JqZWN0KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ViT2JqZWN0LnZhbHVlT2YoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHNldFN1Yk9iamVjdChzdWJPYmplY3QpIHtcbiAgICAgICAgc3ViT2JqZWN0LnByb3h5SGFuZGxlclJlcGxhY2VtZW50ID0gdGhpcy5wcm94eUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgc3ViT2JqZWN0LmlzU2hhbGxvdyA9IHRoaXMuaXNTaGFsbG93O1xuICAgICAgICB0aGlzLnN1Yk9iamVjdCA9IHN1Yk9iamVjdDtcbiAgICB9XG4gICAgcHJveHlIYW5kbGVyKHBhdGgsIGNoYW5nZWRWYWwsIHByZXZWYWwpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViT2JqZWN0KVxuICAgICAgICAgICAgdGhpcy5zdWJPYmplY3QucHJveHlIYW5kbGVyKHBhdGgsIGNoYW5nZWRWYWwsIHByZXZWYWwpO1xuICAgICAgICBjb25zdCBuZXdLZXlzID0gY2hhbmdlZFZhbCA/IE9iamVjdC5rZXlzKGNoYW5nZWRWYWwpIDogW107XG4gICAgICAgIGNvbnN0IG9sZEtleXMgPSBwcmV2VmFsID8gT2JqZWN0LmtleXMocHJldlZhbCkgOiBbXTtcbiAgICAgICAgY29uc3QgbmV3TGVuID0gbmV3S2V5cy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IG9sZExlbiA9IG9sZEtleXMubGVuZ3RoO1xuICAgICAgICB0aGlzLmNhc2VEZXRlY3RFeGVjKHtcbiAgICAgICAgICAgIGxlbjE6IG5ld0xlbixcbiAgICAgICAgICAgIGxlbjI6IG9sZExlbixcbiAgICAgICAgICAgIGZ1bmM6IHRoaXMub25BZGQsXG4gICAgICAgICAgICBrZXlzMTogbmV3S2V5cyxcbiAgICAgICAgICAgIGtleXMyOiBvbGRLZXlzLFxuICAgICAgICAgICAgY2hhbmdlZFZhbCxcbiAgICAgICAgICAgIHBhdGhcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2FzZURldGVjdEV4ZWMoe1xuICAgICAgICAgICAgbGVuMTogb2xkTGVuLFxuICAgICAgICAgICAgbGVuMjogbmV3TGVuLFxuICAgICAgICAgICAgZnVuYzogdGhpcy5vblJlbW92ZSxcbiAgICAgICAgICAgIGtleXMxOiBvbGRLZXlzLFxuICAgICAgICAgICAga2V5czI6IG5ld0tleXMsXG4gICAgICAgICAgICBjaGFuZ2VkVmFsLFxuICAgICAgICAgICAgcGF0aFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5ld0xlbiA9PT0gb2xkTGVuICYmIHRoaXMub25DaGFuZ2UgaW4gdGhpcyAmJiB0aGlzLmlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0W3RoaXMub25DaGFuZ2VdKGNoYW5nZWRWYWwsIHBhdGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNob3VsZERvU2V0VmFsdWUodmFsdWUsIHNraXBHdWFyZCA9IGZhbHNlKSB7XG4gICAgICAgIGlmICh0aGlzLnN1Yk9iamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ViT2JqZWN0LnNob3VsZERvU2V0VmFsdWUodmFsdWUsIHNraXBHdWFyZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuICh2YWx1ZSAhPT0gdGhpcy5vd25WYWx1ZSk7XG4gICAgfVxuICAgIHByb3h5ZnlWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSB8fCB1dGlsXzEuaXNPYmplY3QodmFsdWUpICYmICF2YWx1ZS5pc0JET01vZGVsKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG9uX2NoYW5nZV8xLmRlZmF1bHQudGFyZ2V0KHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBvbl9jaGFuZ2VfMS5kZWZhdWx0KHZhbHVlLCAocGF0aCwgY2hhbmdlZFZhbHVlLCBwcmV2aW91c1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm94eUhhbmRsZXIocGF0aCwgY2hhbmdlZFZhbHVlLCBwcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgICAgIH0sIHsgaXNTaGFsbG93OiB0aGlzLmlzU2hhbGxvdyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNhc2VEZXRlY3RFeGVjKGNkUGFyYW1zKSB7XG4gICAgICAgIGlmIChjZFBhcmFtcy5sZW4xID4gY2RQYXJhbXMubGVuMiAmJiBjZFBhcmFtcy5mdW5jIGluIHRoaXMub2JqZWN0KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1vZGlmaWVkIG9mIGNkUGFyYW1zLmtleXMxKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjZFBhcmFtcy5rZXlzMi5pbmNsdWRlcyhtb2RpZmllZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmplY3RbY2RQYXJhbXMuZnVuY10oKGNkUGFyYW1zLmNoYW5nZWRWYWwpW21vZGlmaWVkXSwgY2RQYXJhbXMucGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuV2F0Y2hlZCA9IFdhdGNoZWQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWMkYwWTJobFpDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiR2xpTDFkaGRHTm9aV1F1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJSVUVzZDBSQlFYRkVPMEZCUTNKRUxEQkRRVUZuUmp0QlFVTm9SaXhyUlVGQmFVTTdRVUZEYWtNc2IwVkJRVzFETzBGQk9FaHVReXhOUVVGaExFOUJRVTg3U1VGeFIyaENMRmxCUVZrc1RVRkJVeXhGUVVGRkxGRkJRVmNzUlVGQlJTeE5RVUYxUWp0UlFXaERjRVFzWTBGQlV5eEhRVUZaTEVsQlFVa3NRMEZCUXp0UlFUaENla0lzYTBKQlFXRXNSMEZCV1N4TFFVRkxMRU5CUVVNN1VVRkhia01zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRja0lzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNN1VVRkZla0lzVFVGQlRTeGxRVUZsTEVkQlFVY3NZMEZCVHl4RFFVRkRMRkZCUVd0Q0xFTkJRVU1zUTBGQlF6dFJRVVZ3UkN4TlFVRk5MRlZCUVZVc1IwRkJSeXhMUVVGTExHVkJRV1VzVFVGQlRTeERRVUZETzFGQlF6bERMRTFCUVUwc1dVRkJXU3hIUVVGSExFdEJRVXNzWlVGQlpTeFJRVUZSTEVOQlFVTTdVVUZEYkVRc1RVRkJUU3hUUVVGVExFZEJRVWNzUzBGQlN5eGxRVUZsTEV0QlFVc3NRMEZCUXp0UlFVTTFReXhOUVVGTkxGbEJRVmtzUjBGQlJ5eExRVUZMTEdWQlFXVXNVVUZCVVN4RFFVRkRPMUZCUld4RUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEpRVUZKTEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRE8xRkJRMmhGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4SlFVRkpMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETzFGQlEzaEZMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRPMUZCUXpWRUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeEpRVUZKTEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRE8xRkJSWGhGTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1RVRkJUU3hKUVVGSkxFOUJRVThzVFVGQlRTeERRVUZETEZOQlFWTXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU03U1VGRGVrY3NRMEZCUXp0SlFWVk5MRkZCUVZFc1EwRkJReXhMUVVGblF6dFJRVU0xUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRXRCUVVzc1EwRkJRenRaUVVGRkxFOUJRVTg3VVVGSE1VTXNUVUZCVFN4TlFVRk5MRWRCUVVjc2IwSkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkZlRU1zU1VGQlNTeFhRVUUyUWl4RFFVRkRPMUZCUTJ4RExFbEJRVWtzUzBGQlN5eFpRVUZaTERKQ1FVRlpMRVZCUVVVN1dVRkRMMElzVjBGQlZ5eEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRUUVVOcVF6czdXVUZCVFN4WFFVRlhMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJSek5DTEVsQlFVa3NVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOeVFpeEpRVUZKTEV0QlFVc3NXVUZCV1N3eVFrRkJXU3hGUVVGRk8xbEJReTlDTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03V1VGRE5VSXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJRenRUUVVOdVFqdFJRVVZFTEUxQlFVMHNWVUZCVlN4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkZiRVFzU1VGQlNTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZPMWxCUTJoQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc2NVSkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRE5VUTdZVUZCVFR0WlFVVklMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMWxCUXpkRExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NWMEZCVnl4RFFVRkRPMWxCUTNwQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NjVUpCUVdNc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFRRVU12UXp0UlFVVkVMRTFCUVUwc1dVRkJXU3hIUVVGdFFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUldwRUxFbEJRVWtzYVVKQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMR0ZCUVdFN1dVRkJSU3haUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJSWFpITEVsQlFVa3NhVUpCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWVVGQllUdFpRVUZGTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVVUZEZWtjc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eEpRVUZKTEVOQlFVTTdTVUZET1VJc1EwRkJRenRKUVZWTkxFOUJRVTg3VVVGRFZpeEpRVUZKTEVsQlFVa3NRMEZCUXl4VFFVRlRPMWxCUVVVc1QwRkJUeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUTNCRUxFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTjBRaXhEUVVGRE8wbEJWVTBzV1VGQldTeERRVUZETEZOQlFUSkRPMUZCUXpORUxGTkJRVk1zUTBGQlF5eDFRa0ZCZFVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOcVJTeFRRVUZUTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU03VVVGRGNrTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU03U1VGREwwSXNRMEZCUXp0SlFWVk5MRmxCUVZrc1EwRkJReXhKUVVGWkxFVkJRVVVzVlVGQlowSXNSVUZCUlN4UFFVRmhPMUZCUXpkRUxFbEJRVWtzU1VGQlNTeERRVUZETEZOQlFWTTdXVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8xRkJRek5GTEUxQlFVMHNUMEZCVHl4SFFVRkhMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETzFGQlF6RkVMRTFCUVUwc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMUZCUTNCRUxFMUJRVTBzVFVGQlRTeEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRPVUlzVFVGQlRTeE5RVUZOTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVjNVFpeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRPMWxCUTJoQ0xFbEJRVWtzUlVGQlJTeE5RVUZOTzFsQlExb3NTVUZCU1N4RlFVRkZMRTFCUVUwN1dVRkRXaXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVczdXVUZEYUVJc1MwRkJTeXhGUVVGRkxFOUJRVTg3V1VGRFpDeExRVUZMTEVWQlFVVXNUMEZCVHp0WlFVTmtMRlZCUVZVN1dVRkRWaXhKUVVGSk8xTkJRMUFzUTBGQlF5eERRVUZETzFGQlJVZ3NTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJRenRaUVVOb1FpeEpRVUZKTEVWQlFVVXNUVUZCVFR0WlFVTmFMRWxCUVVrc1JVRkJSU3hOUVVGTk8xbEJRMW9zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJPMWxCUTI1Q0xFdEJRVXNzUlVGQlJTeFBRVUZQTzFsQlEyUXNTMEZCU3l4RlFVRkZMRTlCUVU4N1dVRkRaQ3hWUVVGVk8xbEJRMVlzU1VGQlNUdFRRVU5RTEVOQlFVTXNRMEZCUXp0UlFVVklMRWxCUVVrc1RVRkJUU3hMUVVGTExFMUJRVTBzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4SlFVRkpMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zWVVGQllTeEZRVUZGTzFsQlEycEVMRWxCUVVrc1EwRkJReXhOUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRlZCUVZVc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU5zUlR0SlFVTk1MRU5CUVVNN1NVRlhUeXhuUWtGQlowSXNRMEZCUXl4TFFVRm5ReXhGUVVGRkxGbEJRWEZDTEV0QlFVczdVVUZEYWtZc1NVRkJTU3hKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTzFsQlEyaENMRTlCUVU4c1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhMUVVGTExFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdVMEZETlVRN08xbEJRVTBzVDBGQlR5eERRVUZETEV0QlFVc3NTMEZCU3l4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03U1VGRE5VTXNRMEZCUXp0SlFWZFBMRmxCUVZrc1EwRkJReXhMUVVGWk8xRkJRemRDTEVsQlFVa3NTMEZCU3l4WlFVRlpMRXRCUVVzc1NVRkJTU3hsUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCVHl4TFFVRk5MRU5CUVVNc1ZVRkJWU3hGUVVGRk8xbEJRM1pGTEV0QlFVc3NSMEZCUnl4dFFrRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTXZRaXhQUVVGUExHMUNRVUZSTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxGbEJRVmtzUlVGQlJTeGhRVUZoTEVWQlFVVXNSVUZCUlR0blFrRkRla1FzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVZFc1dVRkJXU3hGUVVGUkxHRkJRV0VzUTBGQlF5eERRVUZETzFsQlEzSkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOeVF6dFJRVU5FTEU5QlFVOHNTMEZCU3l4RFFVRkRPMGxCUTJwQ0xFTkJRVU03U1VGVFR5eGpRVUZqTEVOQlFVTXNVVUZCTWtJN1VVRkRPVU1zU1VGQlNTeFJRVUZSTEVOQlFVTXNTVUZCU1N4SFFVRkhMRkZCUVZFc1EwRkJReXhKUVVGSkxFbEJRVWtzVVVGQlVTeERRVUZETEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJReTlFTEV0QlFVc3NUVUZCVFN4UlFVRlJMRWxCUVVrc1VVRkJVU3hEUVVGRExFdEJRVXNzUlVGQlJUdG5Ra0ZEYmtNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRk8yOUNRVU01UWl4SlFVRkpMRU5CUVVNc1RVRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlRTeFJRVUZSTEVOQlFVTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03YjBKQlEzWkdMRTFCUVUwN2FVSkJRMVE3WVVGRFNqdFRRVU5LTzBsQlEwd3NRMEZCUXp0RFFVTktPMEZCTjFKRUxEQkNRVFpTUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5mdW5jdGlvbiBCRE9UZXN0RmFjdG9yeShjdG9yKSB7XG4gICAgbGV0IEJET1Rlc3QgPSBjbGFzcyBCRE9UZXN0IGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSAndGVzdCc7XG4gICAgICAgICAgICB0aGlzLnRlc3RlciA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIG9uVGVzdENoYW5nZShjaGFuZ2VkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3QgY2hhbmdlZFwiLCBjaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBvblRlc3RlckluaXQoaW5pdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgaW5pdFwiLCBpbml0LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBvblRlc3RlckNoYW5nZShjaGFuZ2VkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RlciBjaGFuZ2VkXCIsIGNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIG9uVGVzdGVyQWRkKGFkZGVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RlciBhZGRlZFwiLCBhZGRlZCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgb25UZXN0ZXJSZW1vdmUocmVtb3ZlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgcmVtb3ZlZFwiLCByZW1vdmVkLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLmF0dHJpYnV0ZSh7IGF1dG9TYXZlOiB0cnVlIH0pLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgQkRPVGVzdC5wcm90b3R5cGUsIFwidGl0bGVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEud2F0Y2hlZCgpLCBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKChfdHlwZSkgPT4gW1N0cmluZ10pLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSlcbiAgICBdLCBCRE9UZXN0LnByb3RvdHlwZSwgXCJ0ZXN0ZXJcIiwgdm9pZCAwKTtcbiAgICBCRE9UZXN0ID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3Rvcih7IGlzQWJzdHJhY3Q6IHRydWUsIGNvbGxlY3Rpb25OYW1lOiBcIkJET1Rlc3RcIiB9KVxuICAgIF0sIEJET1Rlc3QpO1xuICAgIHJldHVybiBCRE9UZXN0O1xufVxuZXhwb3J0cy5CRE9UZXN0RmFjdG9yeSA9IEJET1Rlc3RGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFZHVnpkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2Ylc5a1pXeHpMMEpFVDFSbGMzUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNjMFJCUVRSRk8wRkJWVFZGTEZOQlFXZENMR05CUVdNc1EwRkJjME1zU1VGQlZ6dEpRVk16UlN4SlFVRmxMRTlCUVU4c1IwRkJkRUlzVFVGQlpTeFBRVUZSTEZOQlFWRXNTVUZCU1R0UlFVRnVRenM3V1VGUk1FTXNWVUZCU3l4SFFVRlhMRTFCUVUwc1EwRkJRenRaUVZGWUxGZEJRVTBzUjBGQllTeEZRVUZGTEVOQlFVTTdVVUY1UkRWRkxFTkJRVU03VVVGb1JHRXNXVUZCV1N4RFFVRkRMRTlCUVhWQ08xbEJRekZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1kwRkJZeXhGUVVGRkxFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTXZReXhEUVVGRE8xRkJVMU1zV1VGQldTeERRVUZETEVsQlFXOUNPMWxCUTNaRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNZVUZCWVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU16UXl4RFFVRkRPMUZCVTFNc1kwRkJZeXhEUVVGRExFOUJRWFZDTzFsQlF6VkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEycEVMRU5CUVVNN1VVRlRVeXhYUVVGWExFTkJRVU1zUzBGQmNVSTdXVUZEZGtNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eGpRVUZqTEVWQlFVVXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRemRETEVOQlFVTTdVVUZUVXl4alFVRmpMRU5CUVVNc1QwRkJkVUk3V1VGRE5VTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhuUWtGQlowSXNSVUZCUlN4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRGFrUXNRMEZCUXp0TFFVVktMRU5CUVVFN1NVRnFSV3RETzFGQlFUbENMSE5DUVVGVExFTkJRVU1zUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RlFVRkZMRU5CUVVNN096QkRRVUVyUWp0SlFWRnNRanRSUVVFeFF5eHZRa0ZCVHl4RlFVRkZMRVZCUVVVc2MwSkJRVk1zUTBGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6czdNa05CUVRoQ08wbEJhRUkzUkN4UFFVRlBPMUZCUkhKQ0xEUkNRVUZsTEVOQlFVTXNSVUZCUlN4VlFVRlZMRVZCUVVVc1NVRkJTU3hGUVVGRkxHTkJRV01zUlVGQlJTeFRRVUZUTEVWQlFVVXNRMEZCUXp0UFFVTnNSQ3hQUVVGUExFTkJlVVZ5UWp0SlFVTkVMRTlCUVU4c1QwRkJUeXhEUVVGRE8wRkJSVzVDTEVOQlFVTTdRVUZ5UmtRc2QwTkJjVVpESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5mdW5jdGlvbiBCRE9UZXN0MUZhY3RvcnkoY3Rvcikge1xuICAgIGxldCBCRE9UZXN0MSA9IGNsYXNzIEJET1Rlc3QxIGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSAndGVzdCc7XG4gICAgICAgIH1cbiAgICAgICAgZG9Tb21ldGhpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJsb2xcIjtcbiAgICAgICAgfVxuICAgICAgICBvbk9oYUluaXQoX3ZhbHVlKSB7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoeyBkZXNjcmlwdGlvbjogXCJ0ZXN0ZXIuLi5cIiB9KSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIEJET1Rlc3QxLnByb3RvdHlwZSwgXCJ0aXRsZVwiLCB2b2lkIDApO1xuICAgIEJET1Rlc3QxID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3Rvcih7IGlzQWJzdHJhY3Q6IHRydWUsIGNvbGxlY3Rpb25OYW1lOiBcIkJET1Rlc3QxXCIgfSlcbiAgICBdLCBCRE9UZXN0MSk7XG4gICAgcmV0dXJuIEJET1Rlc3QxO1xufVxuZXhwb3J0cy5CRE9UZXN0MUZhY3RvcnkgPSBCRE9UZXN0MUZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQVkdWemRERXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMjF2WkdWc2N5OUNSRTlVWlhOME1TNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGRFFTeHpSRUZCYlVVN1FVRlRia1VzVTBGQlowSXNaVUZCWlN4RFFVRnJSQ3hKUVVGWE8wbEJWWGhHTEVsQlFXVXNVVUZCVVN4SFFVRjJRaXhOUVVGbExGRkJRVk1zVTBGQlVTeEpRVUZKTzFGQlFYQkRPenRaUVZGdlJDeFZRVUZMTEVkQlFWY3NUVUZCVFN4RFFVRkRPMUZCYzBJelJTeERRVUZETzFGQlpGVXNWMEZCVnp0WlFVTmtMRTlCUVU4c1MwRkJTeXhEUVVGRE8xRkJRMnBDTEVOQlFVTTdVVUZUVXl4VFFVRlRMRU5CUVVNc1RVRkJZenRSUVVWc1F5eERRVUZETzB0QlEwb3NRMEZCUVR0SlFYUkNORU03VVVGQmVFTXNjMEpCUVZNc1EwRkJReXhGUVVGRkxGZEJRVmNzUlVGQlJTeFhRVUZYTEVWQlFVVXNRMEZCUXpzN01rTkJRU3RDTzBsQlVqVkVMRkZCUVZFN1VVRkVkRUlzTkVKQlFXVXNRMEZCUXl4RlFVRkZMRlZCUVZVc1JVRkJSU3hKUVVGSkxFVkJRVVVzWTBGQll5eEZRVUZGTEZWQlFWVXNSVUZCUlN4RFFVRkRPMDlCUTI1RUxGRkJRVkVzUTBFNFFuUkNPMGxCUTBRc1QwRkJUeXhSUVVGUkxFTkJRVU03UVVGRGNFSXNRMEZCUXp0QlFURkRSQ3d3UTBFd1EwTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBDaHVua18xID0gcmVxdWlyZShcIi4vQ2h1bmtcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xubGV0IENlbGwgPSBjbGFzcyBDZWxsIHtcbiAgICBjb25zdHJ1Y3RvcihfcGFyYW1zKSB7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMuY2F2ZSA9IDA7XG4gICAgICAgIHRoaXMucml2ZXIgPSAwO1xuICAgICAgICB0aGlzLmh1bWlkaXR5ID0gMDtcbiAgICAgICAgdGhpcy50ZW1wZXJhdHVyZSA9IDA7XG4gICAgICAgIHRoaXMuY2h1bmsgPSBuZXcgQ2h1bmtfMS5DaHVuaygpO1xuICAgIH1cbn07XG5DZWxsID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgQ29uc3RQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIgJiYgQ29uc3RQYXJhbXMpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdF0pXG5dLCBDZWxsKTtcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMlZzYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmJXOWtaV3h6TDBObGJHd3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN1FVRkJRU3h0UTBGQlowTTdRVUZEYUVNc2MwUkJRWGRFTzBGQlUzaEVMRWxCUVdFc1NVRkJTU3hIUVVGcVFpeE5RVUZoTEVsQlFVazdTVUY1UkdJc1dVRkJXU3hQUVVFeVFqdFJRV3hFYUVNc1RVRkJReXhIUVVGWExFTkJRVU1zUTBGQlF6dFJRVkZrTEUxQlFVTXNSMEZCVnl4RFFVRkRMRU5CUVVNN1VVRlJaQ3hUUVVGSkxFZEJRVmNzUTBGQlF5eERRVUZETzFGQlVXcENMRlZCUVVzc1IwRkJWeXhEUVVGRExFTkJRVU03VVVGUmJFSXNZVUZCVVN4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVZGeVFpeG5Ra0ZCVnl4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVZGNFFpeFZRVUZMTEVkQlFWVXNTVUZCU1N4aFFVRkxMRVZCUVVVc1EwRkJRenRKUVVWVExFTkJRVU03UTBGREwwTXNRMEZCUVR0QlFURkVXU3hKUVVGSk8wbEJSR2hDTERSQ1FVRmxMRVZCUVVVN2FVVkJNRVJSTEZkQlFWY3NiMEpCUVZnc1YwRkJWenRIUVhwRWVFSXNTVUZCU1N4RFFUQkVhRUk3UVVFeFJGa3NiMEpCUVVraWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG9wZW5fc2ltcGxleF9ub2lzZV8xID0gcmVxdWlyZShcIm9wZW4tc2ltcGxleC1ub2lzZVwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBDZWxsXzEgPSByZXF1aXJlKFwiLi9DZWxsXCIpO1xuY2xhc3MgQ2h1bmsge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLnNpemUgPSA2NDtcbiAgICAgICAgdGhpcy5ncmlkID0gW107XG4gICAgICAgIHRoaXMuc2ltcGxleENhdmUgPSBvcGVuX3NpbXBsZXhfbm9pc2VfMS5tYWtlTm9pc2UyRCgxKTtcbiAgICAgICAgdGhpcy5zaW1wbGV4Uml2ZXIgPSBvcGVuX3NpbXBsZXhfbm9pc2VfMS5tYWtlTm9pc2UyRCgyKTtcbiAgICAgICAgdGhpcy5zaW1wbGV4VGVtcGVyYXR1cmUgPSBvcGVuX3NpbXBsZXhfbm9pc2VfMS5tYWtlTm9pc2UyRCgzKTtcbiAgICAgICAgdGhpcy5zaW1wbGV4SHVtaWRpdHkgPSBvcGVuX3NpbXBsZXhfbm9pc2VfMS5tYWtlTm9pc2UyRCg0KTtcbiAgICAgICAgdXRpbF8xLm1lcmdlKHRoaXMsIHBhcmFtcyk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVHcmlkKCk7XG4gICAgfVxuICAgIGdlbmVyYXRlR3JpZCgpIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5zaXplOyByb3crKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdyaWRbcm93XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5wdXNoKFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuc2l6ZTsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4Q29vcmRpbmF0ZSA9IGNvbCArIHRoaXMueCAqIHRoaXMuc2l6ZTtcbiAgICAgICAgICAgICAgICBjb25zdCB5Q29vcmRpbmF0ZSA9IHJvdyArIHRoaXMueSAqIHRoaXMuc2l6ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRbcm93XS5wdXNoKG5ldyBDZWxsXzEuQ2VsbCh7XG4gICAgICAgICAgICAgICAgICAgIHg6IHhDb29yZGluYXRlLFxuICAgICAgICAgICAgICAgICAgICB5OiB5Q29vcmRpbmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgY2F2ZTogdGhpcy5zaW1wbGV4Q2F2ZSh4Q29vcmRpbmF0ZSAvIDEwMCwgeUNvb3JkaW5hdGUgLyAxMDApLFxuICAgICAgICAgICAgICAgICAgICByaXZlcjogdGhpcy5zaW1wbGV4Uml2ZXIoeENvb3JkaW5hdGUgLyA1MDAsIHlDb29yZGluYXRlIC8gNTAwKSxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGVyYXR1cmU6IHRoaXMuc2ltcGxleFRlbXBlcmF0dXJlKHhDb29yZGluYXRlIC8gMjUwMCwgeUNvb3JkaW5hdGUgLyAyNTAwKSxcbiAgICAgICAgICAgICAgICAgICAgaHVtaWRpdHk6IHRoaXMuc2ltcGxleEh1bWlkaXR5KHhDb29yZGluYXRlIC8gMjUwMCwgeUNvb3JkaW5hdGUgLyAyNTAwKSxcbiAgICAgICAgICAgICAgICAgICAgY2h1bms6IHRoaXNcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkNodW5rID0gQ2h1bms7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMmgxYm1zdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyMXZaR1ZzY3k5RGFIVnVheTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMREpFUVVGcFJEdEJRVU5xUkN3d1EwRkJkME03UVVGRGVFTXNhVU5CUVRoQ08wRkJVVGxDTEUxQlFXRXNTMEZCU3p0SlFYTkZaQ3haUVVGWkxFMUJRVEpDTzFGQkwwUm9ReXhOUVVGRExFZEJRVmNzUTBGQlF5eERRVUZETzFGQlVXUXNUVUZCUXl4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVZGa0xGTkJRVWtzUjBGQldTeEZRVUZGTEVOQlFVTTdVVUZUYUVJc1UwRkJTU3hIUVVGaExFVkJRVVVzUTBGQlF6dFJRVk53UWl4blFrRkJWeXhIUVVGSExHZERRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRlROMElzYVVKQlFWa3NSMEZCUnl4blEwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlV6bENMSFZDUVVGclFpeEhRVUZITEdkRFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGVGNFTXNiMEpCUVdVc1IwRkJSeXhuUTBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUjNaRExGbEJRVXNzUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRjRUlzU1VGQlNTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRPMGxCUTNoQ0xFTkJRVU03U1VGUlV5eFpRVUZaTzFGQlEyeENMRXRCUVVzc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCV1N4SlFVRkpMRU5CUVVNc1NVRkJTeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTzFsQlEyaEVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMmRDUVVOcVFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dGhRVU4wUWp0WlFVTkVMRXRCUVVzc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCV1N4SlFVRkpMRU5CUVVNc1NVRkJTeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTzJkQ1FVTm9SQ3hOUVVGTkxGZEJRVmNzUjBGQlJ5eEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJWeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETzJkQ1FVTnlSQ3hOUVVGTkxGZEJRVmNzUjBGQlJ5eEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJWeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETzJkQ1FVVnlSQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkRaaXhKUVVGSkxGZEJRVWtzUTBGQlF6dHZRa0ZEVEN4RFFVRkRMRVZCUVVVc1YwRkJWenR2UWtGRFpDeERRVUZETEVWQlFVVXNWMEZCVnp0dlFrRkRaQ3hKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4WFFVRlhMRWRCUVVjc1IwRkJSeXhGUVVGRkxGZEJRVmNzUjBGQlJ5eEhRVUZITEVOQlFVTTdiMEpCUXpWRUxFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhIUVVGSExFVkJRVVVzVjBGQlZ5eEhRVUZITEVkQlFVY3NRMEZCUXp0dlFrRkRPVVFzVjBGQlZ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUTBGQlF5eFhRVUZYTEVkQlFVY3NTVUZCU1N4RlFVRkZMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU03YjBKQlF6VkZMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEZkQlFWY3NSMEZCUnl4SlFVRkpMRVZCUVVVc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF6dHZRa0ZEZEVVc1MwRkJTeXhGUVVGRkxFbEJRVWs3YVVKQlEyUXNRMEZCUXl4RFFVTk1MRU5CUVVNN1lVRkRURHRUUVVOS08wbEJRMHdzUTBGQlF6dERRVU5LTzBGQmVFZEVMSE5DUVhkSFF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIEJET0NvbmZpZ0ZhY3RvcnkoY3Rvcikge1xuICAgIGNsYXNzIEJET0NvbmZpZyBleHRlbmRzIGN0b3Ige1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlcyA9IFtcIi86bmFtZVwiXTtcbiAgICAgICAgICAgIHRoaXMuanNvbk9ubHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBCRE9Db25maWc7XG59XG5leHBvcnRzLkJET0NvbmZpZ0ZhY3RvcnkgPSBCRE9Db25maWdGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFEyOXVabWxuTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5eWIzVjBaWE12UWtSUFEyOXVabWxuTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJVMEVzVTBGQlowSXNaMEpCUVdkQ0xFTkJRWE5ETEVsQlFWYzdTVUZWTjBVc1RVRkJaU3hUUVVGVkxGTkJRVkVzU1VGQlNUdFJRVUZ5UXpzN1dVRlBWeXhYUVVGTkxFZEJRV0VzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0WlFVOHpRaXhoUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlF6bENMRU5CUVVNN1MwRkJRVHRKUVVWRUxFOUJRVThzVTBGQlV5eERRVUZETzBGQlEzSkNMRU5CUVVNN1FVRTFRa1FzTkVOQk5FSkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBCRE9HYW1lTG9iYnlGYWN0b3J5KGN0b3IpIHtcbiAgICBjbGFzcyBCRE9HYW1lTG9iYnkgZXh0ZW5kcyBjdG9yIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXJOYW1lU3BhY2UgPSAnLyc7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlU3RyaW5nID0gcmVxdWlyZSgnfmJkby92aWV3cy9nYW1lTG9iYnkubmprJyk7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9oYTogJ09PT09PSEFBQUFBQUFBISEhJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCRE9HYW1lTG9iYnkuYXR0YWNoVG9TZXJ2ZXJzID0gW1wiR2FtZVNlcnZlclwiXTtcbiAgICByZXR1cm4gQkRPR2FtZUxvYmJ5O1xufVxuZXhwb3J0cy5CRE9HYW1lTG9iYnlGYWN0b3J5ID0gQkRPR2FtZUxvYmJ5RmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBSMkZ0WlV4dlltSjVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzl5YjNWMFpYTXZRa1JQUjJGdFpVeHZZbUo1TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJWVUVzVTBGQlowSXNiVUpCUVcxQ0xFTkJRWE5ETEVsQlFWYzdTVUZUYUVZc1RVRkJaU3haUVVGaExGTkJRVkVzU1VGQlNUdFJRVUY0UXpzN1dVRm5RbGNzYjBKQlFXVXNSMEZCUnl4SFFVRkhMRU5CUVVNN1dVRlJia0lzYlVKQlFXTXNSMEZCWVN4UFFVRlBMRU5CUVVNc01FSkJRVEJDTEVOQlFVTXNRMEZCUXp0UlFXTTNSU3hEUVVGRE8xRkJUR0VzUzBGQlN5eERRVUZETEdOQlFXTTdXVUZETVVJc1QwRkJUenRuUWtGRFNDeEhRVUZITEVWQlFVVXNiVUpCUVcxQ08yRkJRek5DTEVOQlFVTTdVVUZEVGl4RFFVRkRPenRKUVRWQ1lTdzBRa0ZCWlN4SFFVRmhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03U1VFclFqZEVMRTlCUVU4c1dVRkJXU3hEUVVGRE8wRkJRM2hDTEVOQlFVTTdRVUZzUkVRc2EwUkJhMFJESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gQkRPSG9tZUZhY3RvcnkoY3Rvcikge1xuICAgIGNsYXNzIEJET0hvbWUgZXh0ZW5kcyBjdG9yIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXJOYW1lU3BhY2UgPSAnLyc7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlU3RyaW5nID0gcmVxdWlyZSgnfmJkby92aWV3cy9ob21lLm5qaycpO1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvaGE6ICdlbmRsaWNoIHp1IEhhdXNlID0pJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCRE9Ib21lLmF0dGFjaFRvU2VydmVycyA9IFtcIldlYlNlcnZlclwiXTtcbiAgICByZXR1cm4gQkRPSG9tZTtcbn1cbmV4cG9ydHMuQkRPSG9tZUZhY3RvcnkgPSBCRE9Ib21lRmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBTRzl0WlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmNtOTFkR1Z6TDBKRVQwaHZiV1V1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRlZRU3hUUVVGblFpeGpRVUZqTEVOQlFYTkRMRWxCUVZjN1NVRlRNMFVzVFVGQlpTeFBRVUZSTEZOQlFWRXNTVUZCU1R0UlFVRnVRenM3V1VGblFsY3NiMEpCUVdVc1IwRkJSeXhIUVVGSExFTkJRVU03V1VGUmJrSXNiVUpCUVdNc1IwRkJZU3hQUVVGUExFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1EwRkJRenRSUVdONFJTeERRVUZETzFGQlRHRXNTMEZCU3l4RFFVRkRMR05CUVdNN1dVRkRNVUlzVDBGQlR6dG5Ra0ZEU0N4SFFVRkhMRVZCUVVVc2NVSkJRWEZDTzJGQlF6ZENMRU5CUVVNN1VVRkRUaXhEUVVGRE96dEpRVFZDWVN4MVFrRkJaU3hIUVVGaExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdTVUVyUWpWRUxFOUJRVThzVDBGQlR5eERRVUZETzBGQlEyNUNMRU5CUVVNN1FVRnNSRVFzZDBOQmEwUkRJbjA9IiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vc291cmNlL2FwcC91dGlscyBzeW5jIHJlY3Vyc2l2ZVwiOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xucmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgQmFzZUNvbnN0cnVjdG9yXzEgPSByZXF1aXJlKFwifmJkby9saWIvQmFzZUNvbnN0cnVjdG9yXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgZnJhbWV3b3JrXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9mcmFtZXdvcmtcIik7XG5jb25zdCB0eXBlX2dyYXBocWxfMSA9IHJlcXVpcmUoXCJ0eXBlLWdyYXBocWxcIik7XG5mdW5jdGlvbiB3YXRjaGVkKHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgZGVjb3JhdG9yU2V0dGluZ3MgPSBmcmFtZXdvcmtfMS5iZWZvcmVEZXNjcmlwdG9yKHRhcmdldCwgc3RyaW5nS2V5LCBcImRlZmluZWRXYXRjaGVyc1wiLCB7IHBhcmFtcyB9KTtcbiAgICAgICAgZnJhbWV3b3JrXzEuY3JlYXRlRGVjb3JhdG9yRGVzY3JpcHRvcih0YXJnZXQsIHN0cmluZ0tleSwgXCJXYXRjaGVkXCIsIGRlY29yYXRvclNldHRpbmdzKTtcbiAgICB9O1xufVxuZXhwb3J0cy53YXRjaGVkID0gd2F0Y2hlZDtcbmZ1bmN0aW9uIHByb3BlcnR5KHR5cGVGdW5jLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IGtleS50b1N0cmluZygpO1xuICAgICAgICBpZiAodHlwZUZ1bmMgJiYgISh0eXBlRnVuYyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSAmJiAhcGFyYW1zKVxuICAgICAgICAgICAgcGFyYW1zID0gdHlwZUZ1bmM7XG4gICAgICAgIGlmICh0eXBlRnVuYyAmJiAhKHR5cGVGdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pKVxuICAgICAgICAgICAgdHlwZUZ1bmMgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghcGFyYW1zIHx8ICEocGFyYW1zIGluc3RhbmNlb2YgT2JqZWN0KSlcbiAgICAgICAgICAgIHBhcmFtcyA9IHt9O1xuICAgICAgICBjb25zdCBkZWNvcmF0b3JTZXR0aW5ncyA9IGZyYW1ld29ya18xLmJlZm9yZURlc2NyaXB0b3IodGFyZ2V0LCBzdHJpbmdLZXksIFwiZGVmaW5lZFByb3BlcnRpZXNcIiwgeyB0eXBlRnVuYywgcGFyYW1zIH0pO1xuICAgICAgICBmcmFtZXdvcmtfMS5jcmVhdGVEZWNvcmF0b3JEZXNjcmlwdG9yKHRhcmdldCwgc3RyaW5nS2V5LCBcIlByb3BlcnR5XCIsIGRlY29yYXRvclNldHRpbmdzKTtcbiAgICB9O1xufVxuZXhwb3J0cy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuZnVuY3Rpb24gYXR0cmlidXRlKHR5cGVGdW5jLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IGtleS50b1N0cmluZygpO1xuICAgICAgICBpZiAodHlwZUZ1bmMgJiYgISh0eXBlRnVuYyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSAmJiAhcGFyYW1zKVxuICAgICAgICAgICAgcGFyYW1zID0gdHlwZUZ1bmM7XG4gICAgICAgIGlmICh0eXBlRnVuYyAmJiAhKHR5cGVGdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pKVxuICAgICAgICAgICAgdHlwZUZ1bmMgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghcGFyYW1zIHx8ICEocGFyYW1zIGluc3RhbmNlb2YgT2JqZWN0KSlcbiAgICAgICAgICAgIHBhcmFtcyA9IHt9O1xuICAgICAgICBpZiAodHlwZUZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBwYXJhbXMpXG4gICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5GaWVsZCh0eXBlRnVuYywgcGFyYW1zKSh0YXJnZXQsIGtleSk7XG4gICAgICAgIGVsc2UgaWYgKHR5cGVGdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pXG4gICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5GaWVsZCh0eXBlRnVuYykodGFyZ2V0LCBrZXkpO1xuICAgICAgICBlbHNlIGlmIChwYXJhbXMpXG4gICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5GaWVsZChwYXJhbXMpKHRhcmdldCwga2V5KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuRmllbGQoKSh0YXJnZXQsIGtleSk7XG4gICAgICAgIGNvbnN0IGRlY29yYXRvclNldHRpbmdzID0gZnJhbWV3b3JrXzEuYmVmb3JlRGVzY3JpcHRvcih0YXJnZXQsIHN0cmluZ0tleSwgXCJkZWZpbmVkQXR0cmlidXRlc1wiLCB7IHR5cGVGdW5jLCBwYXJhbXMgfSk7XG4gICAgICAgIGZyYW1ld29ya18xLmNyZWF0ZURlY29yYXRvckRlc2NyaXB0b3IodGFyZ2V0LCBzdHJpbmdLZXksIFwiQXR0cmlidXRlXCIsIGRlY29yYXRvclNldHRpbmdzKTtcbiAgICB9O1xufVxuZXhwb3J0cy5hdHRyaWJ1dGUgPSBhdHRyaWJ1dGU7XG5mdW5jdGlvbiBiYXNlQ29uc3RydWN0b3IobmFtZSwgcGFyYW1zLCBpbmRleCA9IDApIHtcbiAgICByZXR1cm4gKGN0b3IpID0+IHtcbiAgICAgICAgY29uc3QgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGN0b3IpO1xuICAgICAgICBpZiAoZnJhbWV3b3JrXzEuaXNCYXNlQ29uc3RydWN0b3IocHJvdG90eXBlKSlcbiAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihjdG9yLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKSk7XG4gICAgICAgIGlmIChuYW1lICYmICh0eXBlb2YgbmFtZSA9PT0gXCJudW1iZXJcIikpXG4gICAgICAgICAgICBpbmRleCA9IG5hbWU7XG4gICAgICAgIGlmIChuYW1lICYmICh0eXBlb2YgbmFtZSA9PT0gXCJvYmplY3RcIikpXG4gICAgICAgICAgICBwYXJhbXMgPSBuYW1lO1xuICAgICAgICBpZiAobmFtZSAmJiAoKHR5cGVvZiBuYW1lID09PSBcIm9iamVjdFwiKSB8fCAodHlwZW9mIG5hbWUgPT09IFwibnVtYmVyXCIpKSlcbiAgICAgICAgICAgIG5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChwYXJhbXMgJiYgKHR5cGVvZiBwYXJhbXMgPT09IFwibnVtYmVyXCIpKVxuICAgICAgICAgICAgaW5kZXggPSBwYXJhbXM7XG4gICAgICAgIGlmIChwYXJhbXMgJiYgKHR5cGVvZiBwYXJhbXMgPT09IFwibnVtYmVyXCIpKVxuICAgICAgICAgICAgcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoZnJhbWV3b3JrXzEuaXNCRE9Nb2RlbChjdG9yKSkge1xuICAgICAgICAgICAgaWYgKG5hbWUgJiYgKHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiKSAmJiBwYXJhbXMgJiYgKHR5cGVvZiBwYXJhbXMgPT09IFwib2JqZWN0XCIpKSB7XG4gICAgICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuT2JqZWN0VHlwZShuYW1lLCBwYXJhbXMpKGN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobmFtZSAmJiAodHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuT2JqZWN0VHlwZShuYW1lKShjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhcmFtcyAmJiAodHlwZW9mIHBhcmFtcyA9PT0gXCJvYmplY3RcIikpIHtcbiAgICAgICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5PYmplY3RUeXBlKHBhcmFtcykoY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuT2JqZWN0VHlwZSgpKGN0b3IpO1xuICAgICAgICAgICAgaWYgKHBhcmFtcyAmJiAodHlwZW9mIHBhcmFtcyA9PT0gXCJvYmplY3RcIikpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2Q29sbGVjdGlvbk5hbWUgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGN0b3IsIFwiY29sbGVjdGlvbk5hbWVcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkRhdGFiYXNlTmFtZSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoY3RvciwgXCJkYXRhYmFzZU5hbWVcIik7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YShjdG9yLCBcImNvbGxlY3Rpb25OYW1lXCIsIHBhcmFtcy5jb2xsZWN0aW9uTmFtZSB8fCBwcmV2Q29sbGVjdGlvbk5hbWUgfHwgXCJkZWZhdWx0XCIpO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEoY3RvciwgXCJkYXRhYmFzZU5hbWVcIiwgcGFyYW1zLmRhdGFiYXNlTmFtZSB8fCBwcmV2RGF0YWJhc2VOYW1lIHx8IFwiZGVmYXVsdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zICYmICh0eXBlb2YgcGFyYW1zID09PSBcIm9iamVjdFwiICYmIHBhcmFtcy5pc0Fic3RyYWN0KSlcbiAgICAgICAgICAgIHJldHVybiBjdG9yO1xuICAgICAgICBjb25zdCBCYXNlQ29uc3RydWN0b3IgPSBCYXNlQ29uc3RydWN0b3JfMS5iYXNlQ29uc3RydWN0b3JGYWN0b3J5KGN0b3IsIGluZGV4KTtcbiAgICAgICAgaWYgKGZyYW1ld29ya18xLmlzQ29tcG9uZW50KGN0b3IpKSB7XG4gICAgICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodXRpbF8xLnBhc2NhbENhc2Uya2ViYWJDYXNlKGN0b3IubmFtZSksIEJhc2VDb25zdHJ1Y3Rvciwge1xuICAgICAgICAgICAgICAgIGV4dGVuZHM6IEJhc2VDb25zdHJ1Y3Rvci5leHRlbmRzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQmFzZUNvbnN0cnVjdG9yO1xuICAgIH07XG59XG5leHBvcnRzLmJhc2VDb25zdHJ1Y3RvciA9IGJhc2VDb25zdHJ1Y3RvcjtcbmV4cG9ydHMucXVlcnkgPSB0eXBlX2dyYXBocWxfMS5RdWVyeTtcbmV4cG9ydHMuYXJnID0gdHlwZV9ncmFwaHFsXzEuQXJnO1xuZXhwb3J0cy5hcmdzID0gdHlwZV9ncmFwaHFsXzEuQXJncztcbmV4cG9ydHMucmVzb2x2ZXIgPSB0eXBlX2dyYXBocWxfMS5SZXNvbHZlcjtcbmV4cG9ydHMucm9vdCA9IHR5cGVfZ3JhcGhxbF8xLlJvb3Q7XG5leHBvcnRzLm11dGF0aW9uID0gdHlwZV9ncmFwaHFsXzEuTXV0YXRpb247XG5leHBvcnRzLnN1YnNjcmlwdGlvbiA9IHR5cGVfZ3JhcGhxbF8xLlN1YnNjcmlwdGlvbjtcbmV4cG9ydHMucHViU3ViID0gdHlwZV9ncmFwaHFsXzEuUHViU3ViO1xuZXhwb3J0cy5pbnB1dFR5cGUgPSB0eXBlX2dyYXBocWxfMS5JbnB1dFR5cGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laR1ZqYjNKaGRHOXljeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2ZFhScGJITXZaR1ZqYjNKaGRHOXljeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMRFJDUVVFd1FqdEJRVU14UWl3d1EwRkJkVVE3UVVGSmRrUXNPRVJCUVhkR08wRkJRM2hHTEd0RVFVRnJSVHRCUVVOc1JTeHZSRUZCSzBnN1FVRkZMMGdzSzBOQldYTkNPMEZCYTBKMFFpeFRRVUZuUWl4UFFVRlBMRU5CUVVNc1UwRkJlVUlzUlVGQlJUdEpRVU12UXl4UFFVRlBMRU5CUVVNc1RVRkJWeXhGUVVGRkxFZEJRVzlDTEVWQlFVVXNSVUZCUlR0UlFVTjZReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkRha01zVFVGQlRTeHBRa0ZCYVVJc1IwRkJSeXcwUWtGQlowSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1UwRkJVeXhGUVVGRkxHbENRVUZwUWl4RlFVRkZMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU0zUml4eFEwRkJlVUlzUTBGQlF5eE5RVUZOTEVWQlFVVXNVMEZCVXl4RlFVRkZMRk5CUVZNc1JVRkJSU3hwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMGxCUXk5RkxFTkJRVU1zUTBGQlF6dEJRVU5PTEVOQlFVTTdRVUZPUkN3d1FrRk5RenRCUVdkQ1JDeFRRVUZuUWl4UlFVRlJMRU5CUVVNc1VVRkJNa0lzUlVGQlJTeE5RVUYzUWp0SlFVTXhSU3hQUVVGUExFTkJRVU1zVFVGQlZ5eEZRVUZGTEVkQlFXOUNMRVZCUVVVc1JVRkJSVHRSUVVONlF5eE5RVUZOTEZOQlFWTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGSGFrTXNTVUZCU1N4UlFVRlJMRWxCUVVrc1EwRkJReXhEUVVGRExGRkJRVkVzV1VGQldTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwN1dVRkJSU3hOUVVGTkxFZEJRVWNzVVVGQlVTeERRVUZETzFGQlF6bEZMRWxCUVVrc1VVRkJVU3hKUVVGSkxFTkJRVU1zUTBGQlF5eFJRVUZSTEZsQlFWa3NVVUZCVVN4RFFVRkRPMWxCUVVVc1VVRkJVU3hIUVVGSExGTkJRVk1zUTBGQlF6dFJRVU4wUlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF5eE5RVUZOTEZsQlFWa3NUVUZCVFN4RFFVRkRPMWxCUVVVc1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVWQ0UkN4TlFVRk5MR2xDUVVGcFFpeEhRVUZITERSQ1FVRm5RaXhEUVVGRExFMUJRVTBzUlVGQlJTeFRRVUZUTEVWQlFVVXNiVUpCUVcxQ0xFVkJRVVVzUlVGQlJTeFJRVUZSTEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVONlJ5eHhRMEZCZVVJc1EwRkJReXhOUVVGTkxFVkJRVVVzVTBGQlV5eEZRVUZGTEZWQlFWVXNSVUZCUlN4cFFrRkJhVUlzUTBGQlF5eERRVUZETzBsQlEyaEdMRU5CUVVNc1EwRkJRenRCUVVOT0xFTkJRVU03UVVGaVJDdzBRa0ZoUXp0QlFYRkNSQ3hUUVVGblFpeFRRVUZUTEVOQlFVTXNVVUZCTWtJc1JVRkJSU3hOUVVGNVFqdEpRVU0xUlN4UFFVRlBMRU5CUVVNc1RVRkJWeXhGUVVGRkxFZEJRVzlDTEVWQlFVVXNSVUZCUlR0UlFVTjZReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkhha01zU1VGQlNTeFJRVUZSTEVsQlFVa3NRMEZCUXl4RFFVRkRMRkZCUVZFc1dVRkJXU3hSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMDdXVUZCUlN4TlFVRk5MRWRCUVVjc1VVRkJVU3hEUVVGRE8xRkJRemxGTEVsQlFVa3NVVUZCVVN4SlFVRkpMRU5CUVVNc1EwRkJReXhSUVVGUkxGbEJRVmtzVVVGQlVTeERRVUZETzFsQlFVVXNVVUZCVVN4SFFVRkhMRk5CUVZNc1EwRkJRenRSUVVOMFJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJReXhOUVVGTkxGbEJRVmtzVFVGQlRTeERRVUZETzFsQlFVVXNUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVkNFJDeEpRVUZKTEZGQlFWRXNXVUZCV1N4UlFVRlJMRWxCUVVrc1RVRkJUVHRaUVVGRkxHOUNRVUZMTEVOQlFVTXNVVUZCVVN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0aFFVTTFSU3hKUVVGSkxGRkJRVkVzV1VGQldTeFJRVUZSTzFsQlFVVXNiMEpCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkRMMFFzU1VGQlNTeE5RVUZOTzFsQlFVVXNiMEpCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN08xbEJRM1pETEc5Q1FVRkxMRVZCUVVVc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZITVVJc1RVRkJUU3hwUWtGQmFVSXNSMEZCUnl3MFFrRkJaMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNVMEZCVXl4RlFVRkZMRzFDUVVGdFFpeEZRVUZGTEVWQlFVVXNVVUZCVVN4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGVrY3NjVU5CUVhsQ0xFTkJRVU1zVFVGQlRTeEZRVUZGTEZOQlFWTXNSVUZCUlN4WFFVRlhMRVZCUVVVc2FVSkJRV2xDTEVOQlFVTXNRMEZCUXp0SlFVTnFSaXhEUVVGRExFTkJRVU03UVVGRFRpeERRVUZETzBGQmJrSkVMRGhDUVcxQ1F6dEJRV05FTEZOQlFXZENMR1ZCUVdVc1EwRkJReXhKUVVGclFpeEZRVUZGTEUxQlFXZENMRVZCUVVVc1VVRkJaMElzUTBGQlF6dEpRVVZ1Uml4UFFVRlBMRU5CUVVNc1NVRkJVeXhGUVVGRkxFVkJRVVU3VVVGRGFrSXNUVUZCVFN4VFFVRlRMRWRCUVVjc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTTVReXhKUVVGSkxEWkNRVUZwUWl4RFFVRkRMRk5CUVZNc1EwRkJRenRaUVVGRkxFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVZG9SeXhKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNTVUZCU1N4TFFVRkxMRkZCUVZFc1EwRkJRenRaUVVGRkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEY2tRc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVsQlFVa3NTMEZCU3l4UlFVRlJMRU5CUVVNN1dVRkJSU3hOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEzUkVMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVsQlFVa3NTMEZCU3l4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeExRVUZMTEZGQlFWRXNRMEZCUXl4RFFVRkRPMWxCUVVVc1NVRkJTU3hIUVVGSExGTkJRVk1zUTBGQlF6dFJRVU42Uml4SlFVRkpMRTFCUVUwc1NVRkJTU3hEUVVGRExFOUJRVThzVFVGQlRTeExRVUZMTEZGQlFWRXNRMEZCUXp0WlFVRkZMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRE0wUXNTVUZCU1N4TlFVRk5MRWxCUVVrc1EwRkJReXhQUVVGUExFMUJRVTBzUzBGQlN5eFJRVUZSTEVOQlFVTTdXVUZCUlN4TlFVRk5MRWRCUVVjc1UwRkJVeXhEUVVGRE8xRkJSUzlFTEVsQlFVa3NjMEpCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVVZzUWl4SlFVRkpMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeExRVUZMTEZGQlFWRXNRMEZCUXl4SlFVRkpMRTFCUVUwc1NVRkJTU3hEUVVGRExFOUJRVThzVFVGQlRTeExRVUZMTEZGQlFWRXNRMEZCUXl4RlFVRkZPMmRDUVVNNVJTeDVRa0ZCVlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0aFFVTnNRenRwUWtGQlRTeEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1NVRkJTU3hMUVVGTExGRkJRVkVzUTBGQlF5eEZRVUZGTzJkQ1FVTXpReXg1UWtGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yRkJRekZDTzJsQ1FVRk5MRWxCUVVrc1RVRkJUU3hKUVVGSkxFTkJRVU1zVDBGQlR5eE5RVUZOTEV0QlFVc3NVVUZCVVN4RFFVRkRMRVZCUVVVN1owSkJReTlETEhsQ1FVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdZVUZETlVJN08yZENRVUZOTEhsQ1FVRlZMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVWN4UWl4SlFVRkpMRTFCUVUwc1NVRkJTU3hEUVVGRExFOUJRVThzVFVGQlRTeExRVUZMTEZGQlFWRXNRMEZCUXl4RlFVRkZPMmRDUVVONFF5eE5RVUZOTEd0Q1FVRnJRaXhIUVVGSExITkNRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMR2RDUVVGblFpeERRVUZETEVOQlFVTTdaMEpCUXk5RUxFMUJRVTBzWjBKQlFXZENMRWRCUVVjc2MwSkJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNZMEZCWXl4RFFVRkRMRU5CUVVNN1owSkJRek5FTEhsQ1FVRmpMRU5CUVVNc1NVRkJTU3hGUVVGRkxHZENRVUZuUWl4RlFVRkZMRTFCUVUwc1EwRkJReXhqUVVGakxFbEJRVWtzYTBKQlFXdENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU03WjBKQlEycEhMSGxDUVVGakxFTkJRVU1zU1VGQlNTeEZRVUZGTEdOQlFXTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1dVRkJXU3hKUVVGSkxHZENRVUZuUWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRE8yRkJRemxHTzFOQlEwbzdVVUZEUkN4SlFVRkpMRTFCUVUwc1NVRkJTU3hEUVVGRExFOUJRVThzVFVGQlRTeExRVUZMTEZGQlFWRXNTVUZCU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRE8xbEJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTTdVVUZGTjBVc1RVRkJUU3hsUVVGbExFZEJRVWNzZDBOQlFYTkNMRU5CUVVNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFGQlJUVkVMRWxCUVVrc2RVSkJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTnVRaXhqUVVGakxFTkJRVU1zVFVGQlRTeERRVUZETERKQ1FVRnZRaXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4bFFVRmxMRVZCUVVVN1owSkJRM0JGTEU5QlFVOHNSVUZCUlN4bFFVRmxMRU5CUVVNc1QwRkJUenRoUVVOdVF5eERRVUZETEVOQlFVTTdVMEZEVGp0UlFVTkVMRTlCUVU4c1pVRkJaU3hEUVVGRE8wbEJRek5DTEVOQlFVTXNRMEZCUXp0QlFVTk9MRU5CUVVNN1FVRXhRMFFzTUVOQk1FTkRPMEZCUlZVc1VVRkJRU3hMUVVGTExFZEJRVWNzYjBKQlFVc3NRMEZCUXp0QlFVTmtMRkZCUVVFc1IwRkJSeXhIUVVGSExHdENRVUZITEVOQlFVTTdRVUZEVml4UlFVRkJMRWxCUVVrc1IwRkJSeXh0UWtGQlNTeERRVUZETzBGQlExb3NVVUZCUVN4UlFVRlJMRWRCUVVjc2RVSkJRVkVzUTBGQlF6dEJRVU53UWl4UlFVRkJMRWxCUVVrc1IwRkJSeXh0UWtGQlNTeERRVUZETzBGQlExb3NVVUZCUVN4UlFVRlJMRWRCUVVjc2RVSkJRVkVzUTBGQlF6dEJRVU53UWl4UlFVRkJMRmxCUVZrc1IwRkJSeXd5UWtGQldTeERRVUZETzBGQlF6VkNMRkZCUVVFc1RVRkJUU3hIUVVGSExIRkNRVUZOTEVOQlFVTTdRVUZEYUVJc1VVRkJRU3hUUVVGVExFZEJRVWNzZDBKQlFWTXNRMEZCUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IG51bmp1Y2tzID0gdHNsaWJfMS5fX2ltcG9ydFN0YXIocmVxdWlyZShcIm51bmp1Y2tzXCIpKTtcbmZ1bmN0aW9uIGlzTm9kZUpTKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaXNOb2RlSlMgPSBpc05vZGVKUztcbmZ1bmN0aW9uIGlzQnJvd3NlcigpIHtcbiAgICByZXR1cm4gIWlzTm9kZUpTKCk7XG59XG5leHBvcnRzLmlzQnJvd3NlciA9IGlzQnJvd3NlcjtcbmV4cG9ydHMudGVtcGxhdGVFbnZpcm9ubWVudCA9ICgoKSA9PiB7XG4gICAgY29uc3Qgbm9DYWNoZSA9IGdsb2JhbC5wcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zdCBlbnYgPSBuZXcgbnVuanVja3MuRW52aXJvbm1lbnQoe1xuICAgICAgICBnZXRTb3VyY2U6IChwYXRoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyBzcmM6IHJlcXVpcmUocGF0aCksIHBhdGgsIG5vQ2FjaGUgfTtcbiAgICAgICAgfVxuICAgIH0sIHsgbm9DYWNoZSB9KTtcbiAgICBlbnYuYWRkRmlsdGVyKCdqc29uJywgKHZhbHVlLCBzcGFjZXMpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgbnVuanVja3MucnVudGltZS5TYWZlU3RyaW5nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBudW5qdWNrcy5ydW50aW1lLlNhZmVTdHJpbmcoSlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIHNwYWNlcykpO1xuICAgIH0pO1xuICAgIHJldHVybiBlbnY7XG59KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWlc1MmFYSnZibTFsYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wzVjBhV3h6TDJWdWRtbHliMjV0Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxESkVRVUZ4UXp0QlFWRnlReXhUUVVGblFpeFJRVUZSTzBsQlEzQkNMRWxCUVVrc1QwRkJUeXhOUVVGTkxFdEJRVXNzVjBGQlZ5eEpRVUZKTEU5QlFVOHNUMEZCVHl4TFFVRkxMRkZCUVZFc1JVRkJSVHRSUVVNNVJDeFBRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTm1PMGxCUTBRc1QwRkJUeXhMUVVGTExFTkJRVU03UVVGRGFrSXNRMEZCUXp0QlFVeEVMRFJDUVV0RE8wRkJVVVFzVTBGQlowSXNVMEZCVXp0SlFVTnlRaXhQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdRVUZEZGtJc1EwRkJRenRCUVVaRUxEaENRVVZETzBGQlMxa3NVVUZCUVN4dFFrRkJiVUlzUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlR0SlFVTnlReXhOUVVGTkxFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFdEJRVXNzWVVGQllTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU0zUlN4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZEYWtNc1UwRkJVeXhGUVVGRkxFTkJRVU1zU1VGQldTeEZRVUZGTEVWQlFVVTdXVUZEZUVJc1QwRkJUeXhGUVVGRkxFZEJRVWNzUlVGQlJTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFOUJRVThzUlVGQlJTeERRVUZETzFGQlEycEVMRU5CUVVNN1MwRkRTaXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVVm9RaXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJUdFJRVU53UXl4SlFVRkpMRXRCUVVzc1dVRkJXU3hSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNSVUZCUlR0WlFVTTVReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMU5CUXpWQ08xRkJRMFFzVDBGQlR5eEpRVUZKTEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEyaEdMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMGdzVDBGQlR5eEhRVUZITEVOQlFVTTdRVUZEWml4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJpbmRpbmdfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CaW5kaW5nXCIpO1xuY29uc3QgQXR0cmlidXRlXzEgPSByZXF1aXJlKFwifmJkby9saWIvQXR0cmlidXRlXCIpO1xuY29uc3QgUHJvcGVydHlfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Qcm9wZXJ0eVwiKTtcbmNvbnN0IFdhdGNoZWRfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9XYXRjaGVkXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IGVudmlyb25tZW50XzEgPSByZXF1aXJlKFwifmJkby91dGlscy9lbnZpcm9ubWVudFwiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmZ1bmN0aW9uIGJlZm9yZURlc2NyaXB0b3IodGFyZ2V0LCBrZXksIG1EYXRhTmFtZSwgcGFyYW1zKSB7XG4gICAgaWYgKCFSZWZsZWN0Lmhhc01ldGFkYXRhKG1EYXRhTmFtZSwgdGFyZ2V0KSlcbiAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YSh0YXJnZXQsIG1EYXRhTmFtZSwgbmV3IE1hcCgpKTtcbiAgICBjb25zdCBtYXAgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRhcmdldCwgbURhdGFOYW1lKTtcbiAgICBjb25zdCBvbGREZWNvcmF0b3JTZXR0aW5ncyA9IG1hcC5nZXQoa2V5KSB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHV0aWxfMS5tZXJnZShvbGREZWNvcmF0b3JTZXR0aW5ncywgcGFyYW1zKTtcbiAgICBtYXAuc2V0KGtleSwgc2V0dGluZ3MpO1xuICAgIHJldHVybiBzZXR0aW5ncztcbn1cbmV4cG9ydHMuYmVmb3JlRGVzY3JpcHRvciA9IGJlZm9yZURlc2NyaXB0b3I7XG5mdW5jdGlvbiBnZXR0ZXIoaW5zdGFuY2UsIGtleSwgbnMgPSBcIlwiKSB7XG4gICAgbGV0IHN0cmluZ0tleSA9IGtleS50b1N0cmluZygpO1xuICAgIGlmIChucylcbiAgICAgICAgc3RyaW5nS2V5ID0gYCR7bnN9OiR7a2V5fWA7XG4gICAgaWYgKCFtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGluc3RhbmNlLCBcIm5vcm1hbEZ1bmN0aW9uYWxpdHlcIikpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShpbnN0YW5jZSwgXCJkZWZhdWx0U2V0dGluZ3NcIikgfHwge307XG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldChkZWZhdWx0U2V0dGluZ3MsIHN0cmluZ0tleSk7XG4gICAgfVxuICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKGluc3RhbmNlLCBzdHJpbmdLZXkpO1xuICAgIGlmIChtRGF0YSlcbiAgICAgICAgcmV0dXJuIG1EYXRhLnZhbHVlT2YoKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZXhwb3J0cy5nZXR0ZXIgPSBnZXR0ZXI7XG5mdW5jdGlvbiBzZXR0ZXIoaW5zdGFuY2UsIGtleSwgbmV3VmFsLCBucyA9IFwiXCIpIHtcbiAgICBsZXQgc3RyaW5nS2V5ID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgaWYgKG5zKVxuICAgICAgICBzdHJpbmdLZXkgPSBgJHtuc306JHtrZXl9YDtcbiAgICBpZiAoIW5zICYmIGluc3RhbmNlW3N0cmluZ0tleV0gPT09IG5ld1ZhbClcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmICghbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShpbnN0YW5jZSwgXCJub3JtYWxGdW5jdGlvbmFsaXR5XCIpKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwiZGVmYXVsdFNldHRpbmdzXCIpIHx8IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKGRlZmF1bHRTZXR0aW5ncywgeyBbc3RyaW5nS2V5XTogbmV3VmFsIH0pO1xuICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKGluc3RhbmNlLCBcImRlZmF1bHRTZXR0aW5nc1wiLCBkZWZhdWx0U2V0dGluZ3MpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKGluc3RhbmNlLCBzdHJpbmdLZXkpO1xuICAgIGlmIChuZXdWYWwgaW5zdGFuY2VvZiBCaW5kaW5nXzEuQmluZGluZykge1xuICAgICAgICBuZXdWYWwuaW5zdGFsbChpbnN0YW5jZSwga2V5KTtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgICBtRGF0YS5zZXRWYWx1ZShuZXdWYWwpO1xufVxuZXhwb3J0cy5zZXR0ZXIgPSBzZXR0ZXI7XG5mdW5jdGlvbiBjcmVhdGVEZWNvcmF0b3JEZXNjcmlwdG9yKHRhcmdldCwga2V5LCB0eXBlLCBwYXJhbXMpIHtcbiAgICBjb25zdCBwcm9wRGVzYyA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICBjb25zdCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KTtcbiAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gZGVjb3JhdG9yR2V0dGVyKCkge1xuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gZ2V0dGVyKHRoYXQsIHN0cmluZ0tleSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gZGVjb3JhdG9yU2V0dGVyKG5ld1ZhbCkge1xuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBtRGF0YSA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLCBrZXkpO1xuICAgICAgICAgICAgbGV0IGZpZWxkO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiQXR0cmlidXRlXCIpIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA9IG5ldyBBdHRyaWJ1dGVfMS5BdHRyaWJ1dGUodGhhdCwgc3RyaW5nS2V5LCBwYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJQcm9wZXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgZmllbGQgPSBuZXcgUHJvcGVydHlfMS5Qcm9wZXJ0eSh0aGF0LCBzdHJpbmdLZXksIHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZmllbGQgPSBuZXcgV2F0Y2hlZF8xLldhdGNoZWQodGhhdCwgc3RyaW5nS2V5LCBwYXJhbXMpO1xuICAgICAgICAgICAgaWYgKG1EYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKChtRGF0YSBpbnN0YW5jZW9mIEF0dHJpYnV0ZV8xLkF0dHJpYnV0ZSB8fCBtRGF0YSBpbnN0YW5jZW9mIFByb3BlcnR5XzEuUHJvcGVydHkpICYmIGZpZWxkIGluc3RhbmNlb2YgV2F0Y2hlZF8xLldhdGNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuc2V0U3ViT2JqZWN0KG1EYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhKHRoaXMsIHN0cmluZ0tleSwgZmllbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgoZmllbGQgaW5zdGFuY2VvZiBQcm9wZXJ0eV8xLlByb3BlcnR5IHx8IGZpZWxkIGluc3RhbmNlb2YgQXR0cmlidXRlXzEuQXR0cmlidXRlKSAmJiBtRGF0YSBpbnN0YW5jZW9mIFdhdGNoZWRfMS5XYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbURhdGEuc3ViT2JqZWN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgbURhdGEuc2V0U3ViT2JqZWN0KGZpZWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhKHRoaXMsIHN0cmluZ0tleSwgZmllbGQpO1xuICAgICAgICAgICAgaWYgKCgodHlwZSA9PT0gXCJBdHRyaWJ1dGVcIiB8fCB0eXBlID09PSBcIlByb3BlcnR5XCIpICYmICEobURhdGEgaW5zdGFuY2VvZiBXYXRjaGVkXzEuV2F0Y2hlZCkpIHx8IHR5cGUgPT09IFwiV2F0Y2hlZFwiKSB7XG4gICAgICAgICAgICAgICAgc2V0dGVyKHRoYXQsIHN0cmluZ0tleSwgbmV3VmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wRGVzYyAmJiBwcm9wRGVzYy5zZXQgJiYgcHJvcERlc2Muc2V0Lm5hbWUgPT09IFwiZGVjb3JhdG9yU2V0dGVyXCIpXG4gICAgICAgICAgICAgICAgcHJvcERlc2Muc2V0LmNhbGwodGhpcywgbmV3VmFsKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG59XG5leHBvcnRzLmNyZWF0ZURlY29yYXRvckRlc2NyaXB0b3IgPSBjcmVhdGVEZWNvcmF0b3JEZXNjcmlwdG9yO1xuZnVuY3Rpb24gaXNCYXNlQ29uc3RydWN0b3IodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgJiYgdmFsdWUubmFtZSA9PT0gXCJCYXNlQ29uc3RydWN0b3JcIilcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmIHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiQmFzZUNvbnN0cnVjdG9yXCIpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaXNCYXNlQ29uc3RydWN0b3IgPSBpc0Jhc2VDb25zdHJ1Y3RvcjtcbmZ1bmN0aW9uIGlzQkRPTW9kZWwodmFsdWUpIHtcbiAgICBpZiAoXCJpc0JET01vZGVsXCIgaW4gdmFsdWUpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaXNCRE9Nb2RlbCA9IGlzQkRPTW9kZWw7XG5mdW5jdGlvbiBpc0NsaWVudE1vZGVsKHZhbHVlKSB7XG4gICAgaWYgKGlzQkRPTW9kZWwodmFsdWUpICYmIFwiaXNDbGllbnRNb2RlbFwiIGluIHZhbHVlKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmlzQ2xpZW50TW9kZWwgPSBpc0NsaWVudE1vZGVsO1xuZnVuY3Rpb24gaXNTZXJ2ZXJNb2RlbCh2YWx1ZSkge1xuICAgIGlmIChpc0JET01vZGVsKHZhbHVlKSAmJiBcImlzU2VydmVyTW9kZWxcIiBpbiB2YWx1ZSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc1NlcnZlck1vZGVsID0gaXNTZXJ2ZXJNb2RlbDtcbmZ1bmN0aW9uIGlzQ29tcG9uZW50KHZhbHVlKSB7XG4gICAgaWYgKGVudmlyb25tZW50XzEuaXNCcm93c2VyKCkgJiYgXCJpc0Jhc2VDb21wb25lbnRcIiBpbiB2YWx1ZSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc0NvbXBvbmVudCA9IGlzQ29tcG9uZW50O1xuZnVuY3Rpb24gaXNSZWZlcmVuY2VTdHJpbmcodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgcmVmUmVnRXggPSAvX3JlZmVyZW5jZVxcOltBLVp8MC05fF98JF0qXFw6W0EtWnwwLTl8XFwtfF9dKi9naTtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZS5tYXRjaChyZWZSZWdFeCkpLnZhbHVlT2YoKTtcbn1cbmV4cG9ydHMuaXNSZWZlcmVuY2VTdHJpbmcgPSBpc1JlZmVyZW5jZVN0cmluZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpuSmhiV1YzYjNKckxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOTFkR2xzY3k5bWNtRnRaWGR2Y21zdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN3NFEwRkJNa003UVVGRE0wTXNhMFJCUVdsRk8wRkJRMnBGTEdkRVFVRTRSRHRCUVVNNVJDdzRRMEZCTWtRN1FVRkZNMFFzTUVOQlFYZERPMEZCUTNoRExIZEVRVUZ0UkR0QlFVTnVSQ3hyUkVGQkswYzdRVUU0UXk5SExGTkJRV2RDTEdkQ1FVRm5RaXhEUVVzNVFpeE5RVUZUTEVWQlFVVXNSMEZCVFN4RlFVRkZMRk5CUVZrc1JVRkJSU3hOUVVGVE8wbEJSWGhETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExGTkJRVk1zUlVGQlJTeE5RVUZOTEVOQlFVTTdVVUZCUlN4NVFrRkJZeXhEUVVGRExFMUJRVTBzUlVGQlJTeFRRVUZUTEVWQlFVVXNTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZHTEUxQlFVMHNSMEZCUnl4SFFVRkhMSE5DUVVGWExFTkJRVU1zVFVGQlRTeEZRVUZGTEZOQlFWTXNRMEZCYlVNc1EwRkJRenRKUVVNM1JTeE5RVUZOTEc5Q1FVRnZRaXhIUVVGSExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8wbEJRMmhFTEUxQlFVMHNVVUZCVVN4SFFVRkhMRmxCUVVzc1EwRkJReXh2UWtGQmIwSXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRKUVVOeVJDeEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dEpRVU4yUWl4UFFVRlBMRkZCUVZFc1EwRkJRenRCUVVOd1FpeERRVUZETzBGQllrUXNORU5CWVVNN1FVRmhSQ3hUUVVGblFpeE5RVUZOTEVOQlFYRkVMRkZCUVZjc1JVRkJSU3hIUVVGTkxFVkJRVVVzUzBGQllTeEZRVUZGTzBsQlF6TkhMRWxCUVVrc1UwRkJVeXhIUVVGSExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTXZRaXhKUVVGSkxFVkJRVVU3VVVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnl4RlFVRkZMRWxCUVVrc1IwRkJSeXhGUVVGRkxFTkJRVU03U1VGRGJrTXNTVUZCU1N4RFFVRkRMSE5DUVVGWExFTkJRVU1zVVVGQlVTeEZRVUZGTEhGQ1FVRnhRaXhEUVVGRExFVkJRVVU3VVVGREwwTXNUVUZCVFN4bFFVRmxMRWRCUVVjc2MwSkJRVmNzUTBGQlF5eFJRVUZSTEVWQlFVVXNhVUpCUVdsQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEZGtVc1QwRkJUeXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEdWQlFXVXNSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenRMUVVOc1JEdEpRVU5FTEUxQlFVMHNTMEZCU3l4SFFVRkhMRGhDUVVGdFFpeERRVUZETEZGQlFWRXNSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenRKUVVOMlJDeEpRVUZKTEV0QlFVczdVVUZCUlN4UFFVRlBMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dEpRVU5zUXl4UFFVRlBMRk5CUVZNc1EwRkJRenRCUVVOeVFpeERRVUZETzBGQlZrUXNkMEpCVlVNN1FVRmxSQ3hUUVVGblFpeE5RVUZOTEVOQlJXZENMRkZCUVZjc1JVRkJSU3hIUVVGTkxFVkJRVVVzVFVGQmNVSXNSVUZCUlN4TFFVRmhMRVZCUVVVN1NVRkhOMFlzU1VGQlNTeFRRVUZUTEVkQlFVY3NSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJReTlDTEVsQlFVa3NSVUZCUlR0UlFVRkZMRk5CUVZNc1IwRkJSeXhIUVVGSExFVkJRVVVzU1VGQlNTeEhRVUZITEVWQlFVVXNRMEZCUXp0SlFVZHVReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEpRVUZKTEZGQlFWRXNRMEZCU1N4VFFVRlRMRU5CUVVNc1MwRkJTeXhOUVVGTk8xRkJRVVVzVDBGQlR6dEpRVWR5UkN4SlFVRkpMRU5CUVVNc2MwSkJRVmNzUTBGQlF5eFJRVUZSTEVWQlFVVXNjVUpCUVhGQ0xFTkJRVU1zUlVGQlJUdFJRVU12UXl4TlFVRk5MR1ZCUVdVc1IwRkJSeXh6UWtGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4cFFrRkJhVUlzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTjJSU3hOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEdWQlFXVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTjRSQ3g1UWtGQll5eERRVUZETEZGQlFWRXNSVUZCUlN4cFFrRkJhVUlzUlVGQlJTeGxRVUZsTEVOQlFVTXNRMEZCUXp0UlFVTTNSQ3hQUVVGUE8wdEJRMVk3U1VGSFJDeE5RVUZOTEV0QlFVc3NSMEZCUnl3NFFrRkJiVUlzUTBGQlF5eFJRVUZSTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1NVRkZka1FzU1VGQlNTeE5RVUZOTEZsQlFWa3NhVUpCUVU4c1JVRkJSVHRSUVVNelFpeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dExRVU5xUXpzN1VVRkJUU3hMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMEZCUTJ4RExFTkJRVU03UVVGNlFrUXNkMEpCZVVKRE8wRkJWMFFzVTBGQlowSXNlVUpCUVhsQ0xFTkJSMVFzVFVGQlV5eEZRVUZGTEVkQlFVMHNSVUZCUlN4SlFVRnRRaXhGUVVGRkxFMUJRVk03U1VGRk4wVXNUVUZCVFN4UlFVRlJMRWRCUVVjc1QwRkJUeXhEUVVGRExIZENRVUYzUWl4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU12UkN4TlFVRk5MRk5CUVZNc1IwRkJSeXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdTVUZGYWtNc1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkRjRU1zVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRk8xRkJRMmhETEVkQlFVY3NSVUZCUlN4VFFVRlRMR1ZCUVdVN1dVRkRla0lzVFVGQlRTeEpRVUZKTEVkQlFWRXNTVUZCU1N4RFFVRkRPMWxCUTNaQ0xFOUJRVThzVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenRSUVVOdVF5eERRVUZETzFGQlEwUXNSMEZCUnl4RlFVRkZMRk5CUVZNc1pVRkJaU3hEUVVGRExFMUJRVmM3V1VGRGNrTXNUVUZCVFN4SlFVRkpMRWRCUVZFc1NVRkJTU3hEUVVGRE8xbEJRM1pDTEUxQlFVMHNTMEZCU3l4SFFVRkhMRGhDUVVGdFFpeERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVjM1F5eEpRVUZKTEV0QlFVc3NRMEZCUXp0WlFVTldMRWxCUVVrc1NVRkJTU3hMUVVGTExGZEJRVmNzUlVGQlJUdG5Ra0ZEZEVJc1MwRkJTeXhIUVVGSExFbEJRVWtzY1VKQlFWTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1UwRkJVeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzJGQlEyeEVPMmxDUVVGTkxFbEJRVWtzU1VGQlNTeExRVUZMTEZWQlFWVXNSVUZCUlR0blFrRkROVUlzUzBGQlN5eEhRVUZITEVsQlFVa3NiVUpCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVVzVTBGQlV5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMkZCUTJwRU96dG5Ra0ZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hwUWtGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4VFFVRlRMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03V1VGSGNFUXNTVUZCU1N4TFFVRkxMRVZCUVVVN1owSkJRMUFzU1VGQlNTeERRVUZETEV0QlFVc3NXVUZCV1N4eFFrRkJVeXhKUVVGSkxFdEJRVXNzV1VGQldTeHRRa0ZCVVN4RFFVRkRMRWxCUVVrc1MwRkJTeXhaUVVGWkxHbENRVUZQTEVWQlFVVTdiMEpCUTNaR0xFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN2IwSkJRekZDTEdsRFFVRnpRaXhEUVVGRExFbEJRVWtzUlVGQlJTeFRRVUZUTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN2FVSkJRMnhFTzNGQ1FVRk5MRWxCUVVrc1EwRkJReXhMUVVGTExGbEJRVmtzYlVKQlFWRXNTVUZCU1N4TFFVRkxMRmxCUVZrc2NVSkJRVk1zUTBGQlF5eEpRVUZKTEV0QlFVc3NXVUZCV1N4cFFrRkJUeXhGUVVGRk8yOUNRVU01Uml4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk03ZDBKQlFVVXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dHBRa0ZEYmtRN1lVRkRTanM3WjBKQlFVMHNhVU5CUVhOQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEZOQlFWTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVOMFJDeEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRXRCUVVzc1YwRkJWeXhKUVVGSkxFbEJRVWtzUzBGQlN5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1MwRkJTeXhaUVVGWkxHbENRVUZQTEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1MwRkJTeXhUUVVGVExFVkJRVVU3WjBKQlEzUkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVVzVTBGQlV5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMkZCUTI1RE8xbEJRMFFzU1VGQlNTeFJRVUZSTEVsQlFVa3NVVUZCVVN4RFFVRkRMRWRCUVVjc1NVRkJTU3hSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NTMEZCU3l4cFFrRkJhVUk3WjBKQlFVVXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUXpkSExFTkJRVU03VVVGRFJDeFZRVUZWTEVWQlFVVXNTVUZCU1R0UlFVTm9RaXhaUVVGWkxFVkJRVVVzU1VGQlNUdExRVU55UWl4RFFVRkRMRU5CUVVNN1FVRkRVQ3hEUVVGRE8wRkJNME5FTERoRVFUSkRRenRCUVZORUxGTkJRV2RDTEdsQ1FVRnBRaXhEUVVGRExFdEJRV0U3U1VGRE0wTXNTVUZCU1N4UFFVRlBMRXRCUVVzc1MwRkJTeXhWUVVGVkxFbEJRVWtzUzBGQlN5eERRVUZETEVsQlFVa3NTMEZCU3l4cFFrRkJhVUk3VVVGQlJTeFBRVUZQTEVsQlFVa3NRMEZCUXp0SlFVTnFSaXhKUVVGSkxFdEJRVXNzV1VGQldTeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFdEJRVXNzYVVKQlFXbENPMUZCUVVVc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGRGVrWXNUMEZCVHl4TFFVRkxMRU5CUVVNN1FVRkRha0lzUTBGQlF6dEJRVXBFTERoRFFVbERPMEZCVlVRc1UwRkJaMElzVlVGQlZTeERRVUZETEV0QlFXRTdTVUZEY0VNc1NVRkJTU3haUVVGWkxFbEJRVWtzUzBGQlN6dFJRVUZGTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTNaRExFOUJRVThzUzBGQlN5eERRVUZETzBGQlEycENMRU5CUVVNN1FVRklSQ3huUTBGSFF6dEJRVlZFTEZOQlFXZENMR0ZCUVdFc1EwRkJReXhMUVVGaE8wbEJRM1pETEVsQlFVa3NWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxHVkJRV1VzU1VGQlNTeExRVUZMTzFGQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkRMMFFzVDBGQlR5eExRVUZMTEVOQlFVTTdRVUZEYWtJc1EwRkJRenRCUVVoRUxITkRRVWRETzBGQlZVUXNVMEZCWjBJc1lVRkJZU3hEUVVGRExFdEJRV0U3U1VGRGRrTXNTVUZCU1N4VlFVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzWlVGQlpTeEpRVUZKTEV0QlFVczdVVUZCUlN4UFFVRlBMRWxCUVVrc1EwRkJRenRKUVVNdlJDeFBRVUZQTEV0QlFVc3NRMEZCUXp0QlFVTnFRaXhEUVVGRE8wRkJTRVFzYzBOQlIwTTdRVUZYUkN4VFFVRm5RaXhYUVVGWExFTkJRVU1zUzBGQllUdEpRVU55UXl4SlFVRkpMSFZDUVVGVExFVkJRVVVzU1VGQlNTeHBRa0ZCYVVJc1NVRkJTU3hMUVVGTE8xRkJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZETTBRc1QwRkJUeXhMUVVGTExFTkJRVU03UVVGRGFrSXNRMEZCUXp0QlFVaEVMR3REUVVkRE8wRkJVMFFzVTBGQlowSXNhVUpCUVdsQ0xFTkJRVU1zUzBGQlZUdEpRVU40UXl4SlFVRkpMRTlCUVU4c1MwRkJTeXhMUVVGTExGRkJRVkU3VVVGQlJTeFBRVUZQTEV0QlFVc3NRMEZCUXp0SlFVTTFReXhOUVVGTkxGRkJRVkVzUjBGQlJ5d3JRMEZCSzBNc1EwRkJRenRKUVVOcVJTeFBRVUZQTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1FVRkRjRVFzUTBGQlF6dEJRVXBFTERoRFFVbERJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBkZWZpbmVNZXRhZGF0YSh0YXJnZXQsIGtleSwgdmFsKSB7XG4gICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShrZXksIHZhbCwgdGFyZ2V0KTtcbn1cbmV4cG9ydHMuZGVmaW5lTWV0YWRhdGEgPSBkZWZpbmVNZXRhZGF0YTtcbmZ1bmN0aW9uIGdldE1ldGFkYXRhKHRhcmdldCwga2V5KSB7XG4gICAgcmV0dXJuIFJlZmxlY3QuZ2V0TWV0YWRhdGEoa2V5LCB0YXJnZXQpO1xufVxuZXhwb3J0cy5nZXRNZXRhZGF0YSA9IGdldE1ldGFkYXRhO1xuZnVuY3Rpb24gZGVmaW5lV2lsZGNhcmRNZXRhZGF0YSh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKGtleSwgdmFsdWUsIHRhcmdldCk7XG59XG5leHBvcnRzLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEgPSBkZWZpbmVXaWxkY2FyZE1ldGFkYXRhO1xuZnVuY3Rpb24gZ2V0V2lsZGNhcmRNZXRhZGF0YSh0YXJnZXQsIGtleSkge1xuICAgIHJldHVybiBSZWZsZWN0LmdldE1ldGFkYXRhKGtleSwgdGFyZ2V0KTtcbn1cbmV4cG9ydHMuZ2V0V2lsZGNhcmRNZXRhZGF0YSA9IGdldFdpbGRjYXJkTWV0YWRhdGE7XG5mdW5jdGlvbiBnZXREZXNpZ25UeXBlKHRhcmdldCwga2V5KSB7XG4gICAgcmV0dXJuIFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCB0YXJnZXQsIGtleSk7XG59XG5leHBvcnRzLmdldERlc2lnblR5cGUgPSBnZXREZXNpZ25UeXBlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldWMFlXUmhkR0V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDNWMGFXeHpMMjFsZEdGa1lYUmhMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQk9FbEJMRk5CUVdkQ0xHTkJRV01zUTBGQkswTXNUVUZCVXl4RlFVRkZMRWRCUVUwc1JVRkJSU3hIUVVGclFqdEpRVU01Unl4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkROME1zUTBGQlF6dEJRVVpFTEhkRFFVVkRPMEZCVjBRc1UwRkJaMElzVjBGQlZ5eERRVUVyUXl4TlFVRlRMRVZCUVVVc1IwRkJUVHRKUVVOMlJpeFBRVUZQTEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzBGQlF6VkRMRU5CUVVNN1FVRkdSQ3hyUTBGRlF6dEJRVlZFTEZOQlFXZENMSE5DUVVGelFpeERRVUZETEUxQlFXTXNSVUZCUlN4SFFVRmpMRVZCUVVVc1MwRkJWVHRKUVVNM1JTeFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdRVUZETDBNc1EwRkJRenRCUVVaRUxIZEVRVVZETzBGQlZVUXNVMEZCWjBJc2JVSkJRVzFDTEVOQlFVTXNUVUZCWXl4RlFVRkZMRWRCUVdNN1NVRkRPVVFzVDBGQlR5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dEJRVU0xUXl4RFFVRkRPMEZCUmtRc2EwUkJSVU03UVVGVlJDeFRRVUZuUWl4aFFVRmhMRU5CUVVNc1RVRkJZeXhGUVVGRkxFZEJRVmM3U1VGRGNrUXNUMEZCVHl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExHRkJRV0VzUlVGQlJTeE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRNMFFzUTBGQlF6dEJRVVpFTEhORFFVVkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuY29uc3Qgb25fY2hhbmdlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwib24tY2hhbmdlXCIpKTtcbnZhciBsb2Rhc2hfMSA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5leHBvcnRzLm1lcmdlID0gbG9kYXNoXzEubWVyZ2U7XG5leHBvcnRzLm9taXQgPSBsb2Rhc2hfMS5vbWl0O1xuZXhwb3J0cy5pc0Z1bmN0aW9uID0gbG9kYXNoXzEuaXNGdW5jdGlvbjtcbmV4cG9ydHMuaXNPYmplY3QgPSBsb2Rhc2hfMS5pc09iamVjdDtcbmV4cG9ydHMucGlja0J5ID0gbG9kYXNoXzEucGlja0J5O1xuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGxvZGFzaF8xLmlzVW5kZWZpbmVkO1xuZXhwb3J0cy5pc0VxdWFsID0gbG9kYXNoXzEuaXNFcXVhbDtcbmV4cG9ydHMuaXNTdHJpbmcgPSBsb2Rhc2hfMS5pc1N0cmluZztcbmV4cG9ydHMuaXNOdW1iZXIgPSBsb2Rhc2hfMS5pc051bWJlcjtcbmV4cG9ydHMuaXNBcnJheSA9IGxvZGFzaF8xLmlzQXJyYXk7XG5leHBvcnRzLmRpZmZlcmVuY2UgPSBsb2Rhc2hfMS5kaWZmZXJlbmNlO1xuZXhwb3J0cy5kZWJvdW5jZSA9IGxvZGFzaF8xLmRlYm91bmNlO1xuZnVuY3Rpb24gdWNGaXJzdChzdHIpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuZXhwb3J0cy51Y0ZpcnN0ID0gdWNGaXJzdDtcbmZ1bmN0aW9uIGNhbWVsQ2FzZTJrZWJhYkNhc2Uoc3RyKSB7XG4gICAgc3RyID0gc3RyLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFthLXowLTldfCg/PVtBLVpdKSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG59XG5leHBvcnRzLmNhbWVsQ2FzZTJrZWJhYkNhc2UgPSBjYW1lbENhc2Uya2ViYWJDYXNlO1xuZnVuY3Rpb24gcGFzY2FsQ2FzZTJrZWJhYkNhc2Uoc3RyKSB7XG4gICAgc3RyID0gdWNGaXJzdChzdHIpO1xuICAgIHJldHVybiBjYW1lbENhc2Uya2ViYWJDYXNlKHN0cik7XG59XG5leHBvcnRzLnBhc2NhbENhc2Uya2ViYWJDYXNlID0gcGFzY2FsQ2FzZTJrZWJhYkNhc2U7XG5mdW5jdGlvbiByZW1vdmVFbGVtZW50RnJvbUFycmF5KGFycmF5LCBlbGVtZW50KSB7XG4gICAgY29uc3QgaW5kZXggPSBhcnJheS5pbmRleE9mKGVsZW1lbnQpO1xuICAgIGlmIChpbmRleCA+PSAwKVxuICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xufVxuZXhwb3J0cy5yZW1vdmVFbGVtZW50RnJvbUFycmF5ID0gcmVtb3ZlRWxlbWVudEZyb21BcnJheTtcbmZ1bmN0aW9uIGdldFByb3RvdHlwZU5hbWVzUmVjdXJzaXZlKG9iamVjdCwgcHJvdG90eXBlcyA9IFtdKSB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKHByb3RvdHlwZSkge1xuICAgICAgICBwcm90b3R5cGVzLnB1c2gocHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgICAgICBnZXRQcm90b3R5cGVOYW1lc1JlY3Vyc2l2ZShwcm90b3R5cGUsIHByb3RvdHlwZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvdG90eXBlcztcbn1cbmV4cG9ydHMuZ2V0UHJvdG90eXBlTmFtZXNSZWN1cnNpdmUgPSBnZXRQcm90b3R5cGVOYW1lc1JlY3Vyc2l2ZTtcbmZ1bmN0aW9uIGluY2x1ZGVzTWVtYmVyT2ZMaXN0KHNlYXJjaCwgbGlzdCwgZXh0ZW5zaW9uID0gJycpIHtcbiAgICBmb3IgKGNvbnN0IG1lbWJlciBvZiBsaXN0KSB7XG4gICAgICAgIGlmIChzZWFyY2guaW5jbHVkZXMoYCR7bWVtYmVyfSR7ZXh0ZW5zaW9ufWApKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmluY2x1ZGVzTWVtYmVyT2ZMaXN0ID0gaW5jbHVkZXNNZW1iZXJPZkxpc3Q7XG5mdW5jdGlvbiBjb25zdHJ1Y3RUeXBlT2ZIVE1MQXR0cmlidXRlKG9iamVjdCwga2V5KSB7XG4gICAgaWYgKCFlbnZpcm9ubWVudF8xLmlzQnJvd3NlcigpKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgdHlwZSA9IG1ldGFkYXRhXzEuZ2V0RGVzaWduVHlwZShvYmplY3QsIGtleSk7XG4gICAgY29uc3QgYXR0clZhbHVlID0gb2JqZWN0LmdldEF0dHJpYnV0ZShrZXkpO1xuICAgIGxldCB2YWx1ZVRvU2V0ID0gYXR0clZhbHVlO1xuICAgIGlmIChhdHRyVmFsdWUgJiYgdHlwZSAmJiB0eXBlLm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoW1wiTnVtYmVyXCIsIFwiQm9vbGVhblwiLCBcIk9iamVjdFwiLCBcIkFycmF5XCJdLmluY2x1ZGVzKHR5cGUubmFtZSkpIHtcbiAgICAgICAgICAgIHZhbHVlVG9TZXQgPSBKU09OLnBhcnNlKGF0dHJWYWx1ZS5yZXBsYWNlKC8nL2csICdcIicpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZS5uYW1lID09PSBcIkJhc2VDb25zdHJ1Y3RvclwiKSB7XG4gICAgICAgICAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBvYmouY2xhc3NOYW1lO1xuICAgICAgICAgICAgaWYgKCFjbGFzc05hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2xhc3NOYW1lIGlzIG1pc3NpbmcgaW4gY29tcG9uZW50IGF0dHJpYnV0ZSB2YWx1ZVwiKTtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmouY2xhc3NOYW1lO1xuICAgICAgICAgICAgdmFsdWVUb1NldCA9IG5ldyAodHlwZS5uYW1lKShvYmopO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh2YWx1ZVRvU2V0ICYmIHR5cGUgJiYgdmFsdWVUb1NldC5jb25zdHJ1Y3Rvci5uYW1lICE9PSB0eXBlLm5hbWUpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImF0dHJpYnV0ZSB0eXBlIGVxdWFscyBub3QgZGVmaW5lZCB0eXBlXCIpO1xuICAgIHJldHVybiB2YWx1ZVRvU2V0O1xufVxuZXhwb3J0cy5jb25zdHJ1Y3RUeXBlT2ZIVE1MQXR0cmlidXRlID0gY29uc3RydWN0VHlwZU9mSFRNTEF0dHJpYnV0ZTtcbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbHVlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAhPT0gT2JqZWN0KHZhbHVlKSk7XG59XG5leHBvcnRzLmlzUHJpbWl0aXZlID0gaXNQcmltaXRpdmU7XG5mdW5jdGlvbiBpc1Byb3h5KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZiAob25fY2hhbmdlXzEuZGVmYXVsdC50YXJnZXQodmFsdWUpID09PSB2YWx1ZSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5pc1Byb3h5ID0gaXNQcm94eTtcbmZ1bmN0aW9uIGdldFByb3h5VGFyZ2V0KHZhbHVlKSB7XG4gICAgaWYgKGlzUHJveHkodmFsdWUpKVxuICAgICAgICByZXR1cm4gb25fY2hhbmdlXzEuZGVmYXVsdC50YXJnZXQodmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmV4cG9ydHMuZ2V0UHJveHlUYXJnZXQgPSBnZXRQcm94eVRhcmdldDtcbmZ1bmN0aW9uIHRvVVJJUGF0aFBhcnQodmFsdWUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcLysvZywgXCIvXCIpO1xuICAgIGlmICghdmFsdWUuc3RhcnRzV2l0aChcIi9cIikpXG4gICAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWA7XG4gICAgaWYgKHZhbHVlLmVuZHNXaXRoKFwiL1wiKSAmJiB2YWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgLTEpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5leHBvcnRzLnRvVVJJUGF0aFBhcnQgPSB0b1VSSVBhdGhQYXJ0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhScGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZkWFJwYkhNdmRYUnBiQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3hyUkVGQmIwUTdRVUZEY0VRc2QwUkJRVzFFTzBGQlEyNUVMR3RGUVVGcFF6dEJRVVZxUXl4cFEwRmhaMEk3UVVGYVdpeDVRa0ZCUVN4TFFVRkxMRU5CUVVFN1FVRkRUQ3gzUWtGQlFTeEpRVUZKTEVOQlFVRTdRVUZEU2l3NFFrRkJRU3hWUVVGVkxFTkJRVUU3UVVGRFZpdzBRa0ZCUVN4UlFVRlJMRU5CUVVFN1FVRkRVaXd3UWtGQlFTeE5RVUZOTEVOQlFVRTdRVUZEVGl3clFrRkJRU3hYUVVGWExFTkJRVUU3UVVGRFdDd3lRa0ZCUVN4UFFVRlBMRU5CUVVFN1FVRkRVQ3cwUWtGQlFTeFJRVUZSTEVOQlFVRTdRVUZEVWl3MFFrRkJRU3hSUVVGUkxFTkJRVUU3UVVGRFVpd3lRa0ZCUVN4UFFVRlBMRU5CUVVFN1FVRkRVQ3c0UWtGQlFTeFZRVUZWTEVOQlFVRTdRVUZEVml3MFFrRkJRU3hSUVVGUkxFTkJRVUU3UVVGVldpeFRRVUZuUWl4UFFVRlBMRU5CUVVNc1IwRkJWenRKUVVNdlFpeFBRVUZQTEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU4wUkN4RFFVRkRPMEZCUmtRc01FSkJSVU03UVVGVFJDeFRRVUZuUWl4dFFrRkJiVUlzUTBGQlF5eEhRVUZYTzBsQlF6TkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRha1FzVDBGQlR5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRGhDUVVFNFFpeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8wRkJRemxGTEVOQlFVTTdRVUZJUkN4clJFRkhRenRCUVZORUxGTkJRV2RDTEc5Q1FVRnZRaXhEUVVGRExFZEJRVmM3U1VGRE5VTXNSMEZCUnl4SFFVRkhMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU51UWl4UFFVRlBMRzFDUVVGdFFpeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTNCRExFTkJRVU03UVVGSVJDeHZSRUZIUXp0QlFWTkVMRk5CUVdkQ0xITkNRVUZ6UWl4RFFVRkRMRXRCUVZrc1JVRkJSU3hQUVVGWk8wbEJRemRFTEUxQlFVMHNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdTVUZEY2tNc1NVRkJTU3hMUVVGTExFbEJRVWtzUTBGQlF6dFJRVUZGTEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlF6TkRMRU5CUVVNN1FVRklSQ3gzUkVGSFF6dEJRVk5FTEZOQlFXZENMREJDUVVFd1FpeERRVUZETEUxQlFWY3NSVUZCUlN4aFFVRjFRaXhGUVVGRk8wbEJRemRGTEUxQlFVMHNVMEZCVXl4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEYUVRc1NVRkJTU3hUUVVGVExFVkJRVVU3VVVGRFdDeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZETlVNc01FSkJRVEJDTEVOQlFVTXNVMEZCVXl4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8wdEJRM0pFTzBsQlEwUXNUMEZCVHl4VlFVRlZMRU5CUVVNN1FVRkRkRUlzUTBGQlF6dEJRVkJFTEdkRlFVOURPMEZCVjBRc1UwRkJaMElzYjBKQlFXOUNMRU5CUVVNc1RVRkJlVUlzUlVGQlJTeEpRVUZqTEVWQlFVVXNXVUZCYjBJc1JVRkJSVHRKUVVOc1J5eExRVUZMTEUxQlFVMHNUVUZCVFN4SlFVRkpMRWxCUVVrc1JVRkJSVHRSUVVOMlFpeEpRVUZKTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhOUVVGTkxFZEJRVWNzVTBGQlV5eEZRVUZGTEVOQlFVTXNSVUZCUlR0WlFVTXhReXhQUVVGUExFbEJRVWtzUTBGQlF6dFRRVU5tTzB0QlEwbzdTVUZEUkN4UFFVRlBMRXRCUVVzc1EwRkJRenRCUVVOcVFpeERRVUZETzBGQlVFUXNiMFJCVDBNN1FVRlhSQ3hUUVVGblFpdzBRa0ZCTkVJc1EwRkJReXhOUVVGdFFpeEZRVUZGTEVkQlFWYzdTVUZEZWtVc1NVRkJTU3hEUVVGRExIVkNRVUZUTEVWQlFVVTdVVUZCUlN4UFFVRlBPMGxCUTNwQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEhkQ1FVRmhMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEzaERMRTFCUVUwc1UwRkJVeXhIUVVGSExFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkpNME1zU1VGQlNTeFZRVUZWTEVkQlFWRXNVMEZCVXl4RFFVRkRPMGxCUTJoRExFbEJRVWtzVTBGQlV5eEpRVUZKTEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hMUVVGTExGTkJRVk1zUlVGQlJUdFJRVU01UXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxGTkJRVk1zUlVGQlJTeFJRVUZSTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTTVSQ3hWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTNwRU8xRkJRMFFzU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4TFFVRkxMR2xDUVVGcFFpeEZRVUZGTzFsQlEycERMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1dVRkRiRU1zVFVGQlRTeFRRVUZUTEVkQlFVY3NSMEZCUnl4RFFVRkRMRk5CUVZNc1EwRkJRenRaUVVOb1F5eEpRVUZKTEVOQlFVTXNVMEZCVXp0blFrRkJSU3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEcxRVFVRnRSQ3hEUVVGRExFTkJRVU03V1VGRGNrWXNUMEZCVHl4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRE8xbEJRM0pDTEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMU5CUTNKRE8wdEJRMG83U1VGRFJDeEpRVUZKTEZWQlFWVXNTVUZCU1N4SlFVRkpMRWxCUVVrc1ZVRkJWU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWxCUVVrN1VVRkJSU3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhkRFFVRjNReXhEUVVGRExFTkJRVU03U1VGREwwZ3NUMEZCVHl4VlFVRlZMRU5CUVVNN1FVRkRkRUlzUTBGQlF6dEJRWFJDUkN4dlJVRnpRa003UVVGVFJDeFRRVUZuUWl4WFFVRlhMRU5CUVVNc1MwRkJWVHRKUVVOc1F5eFBRVUZQTEVOQlFVTXNTMEZCU3l4TFFVRkxMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzSkRMRU5CUVVNN1FVRkdSQ3hyUTBGRlF6dEJRVk5FTEZOQlFXZENMRTlCUVU4c1EwRkJReXhMUVVGVk8wbEJRemxDTEVsQlFVa3NTMEZCU3l4TFFVRkxMRk5CUVZNc1NVRkJTU3hMUVVGTExFdEJRVXNzU1VGQlNUdFJRVUZGTEU5QlFVOHNTMEZCU3l4RFFVRkRPMGxCUTNoRUxFbEJRVWtzYlVKQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUzBGQlN6dFJRVUZGTEU5QlFVOHNTMEZCU3l4RFFVRkRPMGxCUTI1RUxFOUJRVThzU1VGQlNTeERRVUZETzBGQlEyaENMRU5CUVVNN1FVRktSQ3d3UWtGSlF6dEJRVlZFTEZOQlFXZENMR05CUVdNc1EwRkJReXhMUVVGVk8wbEJRM0pETEVsQlFVa3NUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVGRkxFOUJRVThzYlVKQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJFUXNUMEZCVHl4TFFVRkxMRU5CUVVNN1FVRkRha0lzUTBGQlF6dEJRVWhFTEhkRFFVZERPMEZCVlVRc1UwRkJaMElzWVVGQllTeERRVUZETEV0QlFXRTdTVUZEZGtNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRMjVETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF6dFJRVUZGTEV0QlFVc3NSMEZCUnl4SlFVRkpMRXRCUVVzc1JVRkJSU3hEUVVGRE8wbEJRMmhFTEVsQlFVa3NTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRSUVVONlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0TFFVTTVRanRKUVVORUxFOUJRVThzUzBGQlN5eERRVUZETzBGQlEycENMRU5CUVVNN1FVRlFSQ3h6UTBGUFF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbndpbmRvdy52aXJ0dWFsUm91dGVzID0gW1wiQ29uZmlnXCIsIFwiR2FtZUxvYmJ5XCIsIFwiSG9tZVwiXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRtbHlkSFZoYkVWdWRISjVVRzlwYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5MllYSXZkRzF3TDNacGNuUjFZV3hGYm5SeWVWQnZhVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJUU3hOUVVGUExFTkJRVU1zWVVGQllTeEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkRMRmRCUVZjc1JVRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5SjkiXSwic291cmNlUm9vdCI6IiJ9