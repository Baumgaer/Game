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

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
    const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {
      segments: 16,
      diameter: 2
    }, scene);
    sphere.position.y = 1;
    BABYLON.MeshBuilder.CreateGround('ground1', {
      height: 6,
      width: 6,
      subdivisions: 2
    }, scene);
    return scene;
  }

  createTerrain() {}

};
GameWindow.extends = "canvas";

tslib_1.__decorate([decorators_2.property(), tslib_1.__metadata("design:type", typeof (_a = typeof BABYLON !== "undefined" && BABYLON.Engine) === "function" ? _a : Object)], GameWindow.prototype, "engine", void 0);

tslib_1.__decorate([decorators_2.property(), tslib_1.__metadata("design:type", typeof (_b = typeof BABYLON !== "undefined" && BABYLON.Scene) === "function" ? _b : Object)], GameWindow.prototype, "scene", void 0);

GameWindow = tslib_1.__decorate([decorators_1.baseConstructor()], GameWindow);
exports.default = GameWindow;

/***/ }),

/***/ "./source/app/client/ts/components/TestComponent.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");

const BaseComponent_1 = __webpack_require__("./source/app/client/ts/lib/BaseComponent.ts");

const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");

const decorators_2 = __webpack_require__("./source/app/utils/decorators.ts");

const testComponent_njk_1 = tslib_1.__importDefault(__webpack_require__("./out/app/client/views/testComponent.njk"));

let TestComponent = class TestComponent extends BaseComponent_1.BaseComponentFactory(HTMLElement) {
  constructor() {
    super(...arguments);
    this.templateString = testComponent_njk_1.default;
    this.test = "lalala";
  }

};

tslib_1.__decorate([decorators_2.property(), tslib_1.__metadata("design:type", Object)], TestComponent.prototype, "templateString", void 0);

tslib_1.__decorate([decorators_2.property(), tslib_1.__metadata("design:type", String)], TestComponent.prototype, "test", void 0);

TestComponent = tslib_1.__decorate([decorators_1.baseConstructor()], TestComponent);
exports.default = TestComponent;

/***/ }),

/***/ "./source/app/client/ts/components/ViewLink.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _a, _b;

Object.defineProperty(exports, "__esModule", {
  value: true
});

const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");

const BaseComponent_1 = __webpack_require__("./source/app/client/ts/lib/BaseComponent.ts");

const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");

const Test1_1 = __webpack_require__("./source/app/client/ts/models/Test1.ts");

let ViewLink = class ViewLink extends BaseComponent_1.BaseComponentFactory(HTMLAnchorElement) {
  constructor(_params) {
    super();
    this.model = new Test1_1.Test1({
      title: String(Date.now())
    });
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

tslib_1.__decorate([decorators_1.property(), tslib_1.__metadata("design:type", Object)], ViewLink.prototype, "model", void 0);

tslib_1.__decorate([decorators_1.attribute(), tslib_1.__metadata("design:type", String)], ViewLink.prototype, "test", void 0);

tslib_1.__decorate([decorators_1.watched(), decorators_1.attribute(), tslib_1.__metadata("design:type", Array)], ViewLink.prototype, "tester", void 0);

tslib_1.__decorate([decorators_1.property(), tslib_1.__metadata("design:type", typeof (_a = typeof Object !== "undefined" && Object) === "function" ? _a : Object)], ViewLink.prototype, "testen", void 0);

ViewLink = tslib_1.__decorate([decorators_1.baseConstructor(), tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof ConstParams !== "undefined" && ConstParams) === "function" ? _b : Object])], ViewLink);
exports.default = ViewLink;

/***/ }),

/***/ "./source/app/client/ts/components/ViewRouter.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
      if (!util_1.includesMemberOfList(Route.attachToServers, [global.process.env.name, '*'])) return;
      const RouteClass = new Route();

      if (!RouteClass.isClientRoute) {
        throw new Error(`${RouteClass.constructor.name} is not instance of ~client/lib/BaseRoute`);
      }

      this.router.on(RouteClass.router);
    } catch (error) {
      throw error;
    }
  }

};

tslib_1.__decorate([decorators_2.property(), tslib_1.__metadata("design:type", Object)], ViewRouter.prototype, "router", void 0);

ViewRouter = tslib_1.__decorate([decorators_1.baseConstructor()], ViewRouter);
exports.default = ViewRouter;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./source/app/client/ts/lib/BaseComponent.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");

__webpack_require__("./node_modules/reflect-metadata/Reflect.js");

const nunjucks_1 = __webpack_require__("./node_modules/nunjucks/browser/nunjucks.js");

const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");

const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");

const util_1 = __webpack_require__("./source/app/client/ts/utils/util.ts");

const util_2 = __webpack_require__("./source/app/utils/util.ts");

const framework_1 = __webpack_require__("./source/app/utils/framework.ts");

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
      const properties = metadata_1.getMetadata(this, "definedProperties");

      if (properties) {
        for (const prop of properties.keys()) {
          props.set(prop.toString(), metadata_1.getWildcardMetadata(this, prop));
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

        if (framework_1.isComponent(parentElement)) {
          parentComponent = parentElement;
          break;
        } else currentElement = parentElement;
      }

      return parentComponent;
    }

    get childComponents() {
      var _this$shadowRoot$chil, _this$shadowRoot;

      const children = Array.from((_this$shadowRoot$chil = (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 ? void 0 : _this$shadowRoot.children) !== null && _this$shadowRoot$chil !== void 0 ? _this$shadowRoot$chil : []).concat(Array.from(this.children));
      const childComponents = [];

      for (const child of children) {
        if (framework_1.isComponent(child)) childComponents.push(child);
      }

      return childComponents;
    }

    get firstComponentChild() {
      var _this$shadowRoot$chil2, _this$shadowRoot2;

      const children = Array.from((_this$shadowRoot$chil2 = (_this$shadowRoot2 = this.shadowRoot) === null || _this$shadowRoot2 === void 0 ? void 0 : _this$shadowRoot2.children) !== null && _this$shadowRoot$chil2 !== void 0 ? _this$shadowRoot$chil2 : []).concat(Array.from(this.children));

      for (const child of children) {
        if (framework_1.isComponent(child)) return child;
      }

      return null;
    }

    get lastComponentChild() {
      let currentChild = this.lastElementChild;

      while (currentChild) {
        var _this$shadowRoot$firs, _this$shadowRoot3;

        if (framework_1.isComponent(currentChild)) return currentChild;
        currentChild = currentChild.previousElementSibling;
        if (!currentChild) currentChild = (_this$shadowRoot$firs = (_this$shadowRoot3 = this.shadowRoot) === null || _this$shadowRoot3 === void 0 ? void 0 : _this$shadowRoot3.firstElementChild) !== null && _this$shadowRoot$firs !== void 0 ? _this$shadowRoot$firs : null;
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

        if (framework_1.isComponent(nextElementSibling)) {
          nextComponentSibling = nextElementSibling;
          break;
        } else currentElement = nextElementSibling;
      }

      return nextComponentSibling;
    }

    get previousComponentSibling() {
      let currentElement = this;
      let previousComponentSibling = null;

      while (!previousComponentSibling) {
        var _this$shadowRoot$firs2, _this$shadowRoot4;

        const rootNode = currentElement.getRootNode();
        let previousElementSibling = currentElement.previousElementSibling;
        if (!previousElementSibling && rootNode instanceof ShadowRoot) previousElementSibling = (_this$shadowRoot$firs2 = (_this$shadowRoot4 = this.shadowRoot) === null || _this$shadowRoot4 === void 0 ? void 0 : _this$shadowRoot4.firstElementChild) !== null && _this$shadowRoot$firs2 !== void 0 ? _this$shadowRoot$firs2 : null;
        if (!previousElementSibling) break;

        if (framework_1.isComponent(previousElementSibling)) {
          previousComponentSibling = previousElementSibling;
          break;
        } else currentElement = previousElementSibling;
      }

      return previousComponentSibling;
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
        if (!util_2.isPrimitive(value)) valueToSet = JSON.stringify(value).replace(/\"/g, "'");
        super.setAttribute(qualifiedName, valueToSet);
        valueToSet = util_2.constructTypeOfHTMLAttribute(this, qualifiedName);
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
        if (util_2.isString(this.templateString)) stringToParse = nunjucks_1.renderString(this.templateString, this.toJSON());
        if (util_2.isObject(this.templateString)) stringToParse = this.templateString.render(this.toJSON());

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

  tslib_1.__decorate([decorators_1.attribute(), tslib_1.__metadata("design:type", String)], BaseComponent.prototype, "id", void 0);

  tslib_1.__decorate([decorators_1.property(), tslib_1.__metadata("design:type", Boolean)], BaseComponent.prototype, "isBaseComponent", void 0);

  tslib_1.__decorate([decorators_1.property(), tslib_1.__metadata("design:type", String)], BaseComponent.prototype, "className", void 0);

  tslib_1.__decorate([decorators_1.property({
    disableTypeGuard: true
  }), tslib_1.__metadata("design:type", Object)], BaseComponent.prototype, "templateString", void 0);

  return BaseComponent;
}

exports.BaseComponentFactory = BaseComponentFactory;

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");

const BDOTest_1 = __webpack_require__("./source/app/models/BDOTest.ts");

const ClientModel_1 = __webpack_require__("./source/app/client/ts/lib/ClientModel.ts");

const decorators_1 = __webpack_require__("./source/app/utils/decorators.ts");

let Test = class Test extends BDOTest_1.BDOTestFactory(ClientModel_1.ClientModel) {
  constructor(_params) {
    super();
  }

  test() {}

};
Test = tslib_1.__decorate([decorators_1.baseConstructor({
  collectionName: "Test"
}), tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ConstParams !== "undefined" && ConstParams) === "function" ? _a : Object])], Test);
exports.Test = Test;

/***/ }),

/***/ "./source/app/client/ts/models/Test1.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Test1_1, _a;

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
    if (test) return test.getUnsavedChanges();
    return;
  }

};
Test1 = Test1_1 = tslib_1.__decorate([decorators_1.baseConstructor({
  collectionName: "Test1"
}), tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ConstParams !== "undefined" && ConstParams) === "function" ? _a : Object])], Test1);
exports.Test1 = Test1;

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


Object.defineProperty(exports, "__esModule", {
  value: true
});

const ClientRoute_1 = __webpack_require__("./source/app/client/ts/lib/ClientRoute.ts");

const BDOConfig_1 = __webpack_require__("./source/app/routes/BDOConfig.ts");

class Config extends BDOConfig_1.BDOConfigFactory(ClientRoute_1.ClientRoute) {}

exports.default = Config;

/***/ }),

/***/ "./source/app/client/ts/routes/GameLobby.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

/***/ }),

/***/ "./source/app/client/ts/routes/Home.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const ClientRoute_1 = __webpack_require__("./source/app/client/ts/lib/ClientRoute.ts");

const BDOHome_1 = __webpack_require__("./source/app/routes/BDOHome.ts");

class Home extends BDOHome_1.BDOHomeFactory(ClientRoute_1.ClientRoute) {}

exports.default = Home;

/***/ }),

/***/ "./source/app/client/ts/utils/util.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");

function setUpdateNamespacedStorage(instance, key, newVal, nsProp = "id") {
  if (key === "*") throw new Error("* is a special character and does not follow the property convention");
  const nsPrefix = Object.getPrototypeOf(instance.constructor).name;
  let nsSuffix = metadata_1.getMetadata(instance, "oldStorageNsSuffix");
  let storageValue;
  if (!nsSuffix) nsSuffix = instance[nsProp];
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
  } else {
    storageValue = localStorage.getItem(ns);

    if (storageValue) {
      storageValue = JSON.parse(storageValue);
    } else storageValue = {};

    if (newVal === undefined) {
      delete storageValue[key];

      if (!Object.keys(storageValue).length) {
        localStorage.removeItem(ns);
      } else localStorage.setItem(ns, JSON.stringify(storageValue));
    } else localStorage.setItem(ns, JSON.stringify(Object.assign(storageValue, {
      [key]: newVal
    })));
  }

  metadata_1.defineMetadata(instance, "oldStorageNsSuffix", nsSuffix);
}

exports.setUpdateNamespacedStorage = setUpdateNamespacedStorage;

function getNamespacedStorage(instance, key, nsProp = "id", forceNS) {
  const nsPrefix = Object.getPrototypeOf(instance.constructor).name;
  let nsSuffix = metadata_1.getMetadata(instance, "oldStorageNsSuffix");
  if (nsSuffix !== instance[nsProp]) nsSuffix = instance[nsProp];
  if (forceNS) nsSuffix = forceNS;
  let storageValue = localStorage.getItem(`${nsPrefix}_${nsSuffix}`);
  if (storageValue) storageValue = JSON.parse(storageValue);
  if (storageValue && key === "*") return storageValue;
  if (storageValue && key in storageValue) return storageValue[key];
  return undefined;
}

exports.getNamespacedStorage = getNamespacedStorage;

function deleteFromNamespacedStorage(instance, key, nsProp = "id") {
  if (key === "*") {
    const storage = getNamespacedStorage(instance, key, nsProp);

    for (const prop in storage) {
      if (storage.hasOwnProperty(prop)) setUpdateNamespacedStorage(instance, prop, undefined, nsProp);
    }
  } else setUpdateNamespacedStorage(instance, key, undefined, nsProp);
}

exports.deleteFromNamespacedStorage = deleteFromNamespacedStorage;

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

/***/ }),

/***/ "./source/app/models/BDOTest.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

  tslib_1.__decorate([decorators_1.attribute({
    autoSave: true
  }), tslib_1.__metadata("design:type", String)], BDOTest.prototype, "title", void 0);

  tslib_1.__decorate([decorators_1.watched(), decorators_1.attribute(_type => [String]), tslib_1.__metadata("design:type", Array)], BDOTest.prototype, "tester", void 0);

  BDOTest = tslib_1.__decorate([decorators_1.baseConstructor({
    isAbstract: true,
    collectionName: "BDOTest"
  })], BDOTest);
  return BDOTest;
}

exports.BDOTestFactory = BDOTestFactory;

/***/ }),

/***/ "./source/app/models/BDOTest1.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

    onOhaInit(_value) {}

  };

  tslib_1.__decorate([decorators_1.attribute({
    description: "tester..."
  }), tslib_1.__metadata("design:type", String)], BDOTest1.prototype, "title", void 0);

  BDOTest1 = tslib_1.__decorate([decorators_1.baseConstructor({
    isAbstract: true,
    collectionName: "BDOTest1"
  })], BDOTest1);
  return BDOTest1;
}

exports.BDOTest1Factory = BDOTest1Factory;

/***/ }),

/***/ "./source/app/models/Cell.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _a;

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
Cell = tslib_1.__decorate([decorators_1.baseConstructor(), tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ConstParams !== "undefined" && ConstParams) === "function" ? _a : Object])], Cell);
exports.Cell = Cell;

/***/ }),

/***/ "./source/app/models/Chunk.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

/***/ }),

/***/ "./source/app/routes/BDOConfig.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

/***/ }),

/***/ "./source/app/routes/BDOGameLobby.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");

const gameLobby_njk_1 = tslib_1.__importDefault(__webpack_require__("./out/app/views/gameLobby.njk"));

function BDOGameLobbyFactory(ctor) {
  class BDOGameLobby extends ctor {
    constructor() {
      super(...arguments);
      this.routerNameSpace = '/';
      this.templateString = gameLobby_njk_1.default;
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

/***/ }),

/***/ "./source/app/routes/BDOHome.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");

const home_njk_1 = tslib_1.__importDefault(__webpack_require__("./out/app/views/home.njk"));

function BDOHomeFactory(ctor) {
  class BDOHome extends ctor {
    constructor() {
      super(...arguments);
      this.routerNameSpace = '/';
      this.templateString = home_njk_1.default;
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


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__("./node_modules/reflect-metadata/Reflect.js");

const util_1 = __webpack_require__("./source/app/utils/util.ts");

const BaseConstructor_1 = __webpack_require__("./source/app/lib/BaseConstructor.ts");

const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");

const framework_1 = __webpack_require__("./source/app/utils/framework.ts");

const type_graphql_1 = __webpack_require__("./node_modules/type-graphql/dist/browser-shim.js");

function watched(params = {}) {
  return (target, key) => {
    const stringKey = key.toString();
    const decoratorSettings = framework_1.beforeDescriptor(target, stringKey, "definedWatchers", {
      params
    });
    framework_1.createDecoratorDescriptor(target, stringKey, "Watched", decoratorSettings);
  };
}

exports.watched = watched;

function property(typeFunc, params) {
  return (target, key) => {
    const stringKey = key.toString();
    if (typeFunc && !(typeFunc instanceof Function) && !params) params = typeFunc;
    if (typeFunc && !(typeFunc instanceof Function)) typeFunc = undefined;
    if (!params || !(params instanceof Object)) params = {};
    const decoratorSettings = framework_1.beforeDescriptor(target, stringKey, "definedProperties", {
      typeFunc,
      params
    });
    framework_1.createDecoratorDescriptor(target, stringKey, "Property", decoratorSettings);
  };
}

exports.property = property;

function attribute(typeFunc, params) {
  return (target, key) => {
    const stringKey = key.toString();
    if (typeFunc && !(typeFunc instanceof Function) && !params) params = typeFunc;
    if (typeFunc && !(typeFunc instanceof Function)) typeFunc = undefined;
    if (!params || !(params instanceof Object)) params = {};
    if (typeFunc instanceof Function && params) type_graphql_1.Field(typeFunc, params)(target, key);else if (typeFunc instanceof Function) type_graphql_1.Field(typeFunc)(target, key);else if (params) type_graphql_1.Field(params)(target, key);else type_graphql_1.Field()(target, key);
    const decoratorSettings = framework_1.beforeDescriptor(target, stringKey, "definedAttributes", {
      typeFunc,
      params
    });
    framework_1.createDecoratorDescriptor(target, stringKey, "Attribute", decoratorSettings);
  };
}

exports.attribute = attribute;

function baseConstructor(name, params, index = 0) {
  return ctor => {
    const prototype = Object.getPrototypeOf(ctor);
    if (framework_1.isBaseConstructor(prototype)) Object.setPrototypeOf(ctor, Object.getPrototypeOf(prototype));
    if (name && typeof name === "number") index = name;
    if (name && typeof name === "object") params = name;
    if (name && (typeof name === "object" || typeof name === "number")) name = undefined;
    if (params && typeof params === "number") index = params;
    if (params && typeof params === "number") params = undefined;

    if (framework_1.isBDOModel(ctor)) {
      if (name && typeof name === "string" && params && typeof params === "object") {
        type_graphql_1.ObjectType(name, params)(ctor);
      } else if (name && typeof name === "string") {
        type_graphql_1.ObjectType(name)(ctor);
      } else if (params && typeof params === "object") {
        type_graphql_1.ObjectType(params)(ctor);
      } else type_graphql_1.ObjectType()(ctor);

      if (params && typeof params === "object") {
        const prevCollectionName = metadata_1.getMetadata(ctor, "collectionName");
        const prevDatabaseName = metadata_1.getMetadata(ctor, "databaseName");
        metadata_1.defineMetadata(ctor, "collectionName", params.collectionName || prevCollectionName || "default");
        metadata_1.defineMetadata(ctor, "databaseName", params.databaseName || prevDatabaseName || "default");
      }
    }

    if (params && typeof params === "object" && params.isAbstract) return ctor;
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

/***/ }),

/***/ "./source/app/utils/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
    getSource: path => {
      return {
        src: __webpack_require__("./source/app/utils sync recursive")(path),
        path,
        noCache
      };
    }
  }, {
    noCache
  });
  env.addFilter('json', (value, spaces) => {
    if (value instanceof nunjucks.runtime.SafeString) {
      value = value.toString();
    }

    return new nunjucks.runtime.SafeString(JSON.stringify(value, null, spaces));
  });
  return env;
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/process/browser.js"), __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./source/app/utils/framework.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const Binding_1 = __webpack_require__("./source/app/lib/Binding.ts");

const Attribute_1 = __webpack_require__("./source/app/lib/Attribute.ts");

const Property_1 = __webpack_require__("./source/app/lib/Property.ts");

const Watched_1 = __webpack_require__("./source/app/lib/Watched.ts");

const util_1 = __webpack_require__("./source/app/utils/util.ts");

const environment_1 = __webpack_require__("./source/app/utils/environment.ts");

const metadata_1 = __webpack_require__("./source/app/utils/metadata.ts");

function beforeDescriptor(target, key, mDataName, params) {
  if (!Reflect.hasMetadata(mDataName, target)) metadata_1.defineMetadata(target, mDataName, new Map());
  const map = metadata_1.getMetadata(target, mDataName);
  const oldDecoratorSettings = map.get(key) || {};
  const settings = util_1.merge(oldDecoratorSettings, params);
  map.set(key, settings);
  return settings;
}

exports.beforeDescriptor = beforeDescriptor;

function getter(instance, key, ns = "") {
  let stringKey = key.toString();
  if (ns) stringKey = `${ns}:${key}`;

  if (!metadata_1.getMetadata(instance, "normalFunctionality")) {
    const defaultSettings = metadata_1.getMetadata(instance, "defaultSettings") || {};
    return Reflect.get(defaultSettings, stringKey);
  }

  const mData = metadata_1.getWildcardMetadata(instance, stringKey);
  if (mData) return mData.valueOf();
  return undefined;
}

exports.getter = getter;

function setter(instance, key, newVal, ns = "") {
  let stringKey = key.toString();
  if (ns) stringKey = `${ns}:${key}`;
  if (!ns && instance[stringKey] === newVal) return;

  if (!metadata_1.getMetadata(instance, "normalFunctionality")) {
    const defaultSettings = metadata_1.getMetadata(instance, "defaultSettings") || {};
    Object.assign(defaultSettings, {
      [stringKey]: newVal
    });
    metadata_1.defineMetadata(instance, "defaultSettings", defaultSettings);
    return;
  }

  const mData = metadata_1.getWildcardMetadata(instance, stringKey);

  if (newVal instanceof Binding_1.Binding) {
    newVal.install(instance, key);
  } else mData.setValue(newVal);
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
      } else if (type === "Property") {
        field = new Property_1.Property(that, stringKey, params);
      } else field = new Watched_1.Watched(that, stringKey, params);

      if (mData) {
        if ((mData instanceof Attribute_1.Attribute || mData instanceof Property_1.Property) && field instanceof Watched_1.Watched) {
          field.setSubObject(mData);
          metadata_1.defineWildcardMetadata(this, stringKey, field);
        } else if ((field instanceof Property_1.Property || field instanceof Attribute_1.Attribute) && mData instanceof Watched_1.Watched) {
          if (!mData.subObject) mData.setSubObject(field);
        }
      } else metadata_1.defineWildcardMetadata(this, stringKey, field);

      if ((type === "Attribute" || type === "Property") && !(mData instanceof Watched_1.Watched) || type === "Watched") {
        setter(that, stringKey, newVal);
      }

      if (propDesc && propDesc.set && propDesc.set.name === "decoratorSetter") propDesc.set.call(this, newVal);
    },
    enumerable: true,
    configurable: true
  });
}

exports.createDecoratorDescriptor = createDecoratorDescriptor;

function isBaseConstructor(value) {
  if (typeof value === "function" && value.name === "BaseConstructor") return true;
  if (value instanceof Object && value.constructor.name === "BaseConstructor") return true;
  return false;
}

exports.isBaseConstructor = isBaseConstructor;

function isBDOModel(value) {
  if ("isBDOModel" in value) return true;
  return false;
}

exports.isBDOModel = isBDOModel;

function isClientModel(value) {
  if (isBDOModel(value) && "isClientModel" in value) return true;
  return false;
}

exports.isClientModel = isClientModel;

function isServerModel(value) {
  if (isBDOModel(value) && "isServerModel" in value) return true;
  return false;
}

exports.isServerModel = isServerModel;

function isComponent(value) {
  if (environment_1.isBrowser() && "isBaseComponent" in value) return true;
  return false;
}

exports.isComponent = isComponent;

function isReferenceString(value) {
  if (typeof value !== "string") return false;
  const refRegEx = /_reference\:[A-Z|0-9|_|$]*\:[A-Z|0-9|\-|_]*/gi;
  return Boolean(value.match(refRegEx)).valueOf();
}

exports.isReferenceString = isReferenceString;

/***/ }),

/***/ "./source/app/utils/metadata.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

/***/ }),

/***/ "./source/app/utils/util.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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
  if (index >= 0) array.splice(index, 1);
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
  if (!environment_1.isBrowser()) return;
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
      if (!className) throw new Error("ClassName is missing in component attribute value");
      delete obj.className;
      valueToSet = new type.name(obj);
    }
  }

  if (valueToSet && type && valueToSet.constructor.name !== type.name) throw new Error("attribute type equals not defined type");
  return valueToSet;
}

exports.constructTypeOfHTMLAttribute = constructTypeOfHTMLAttribute;

function isPrimitive(value) {
  return value !== Object(value);
}

exports.isPrimitive = isPrimitive;

function isProxy(value) {
  if (value === undefined || value === null) return false;
  if (on_change_1.default.target(value) === value) return false;
  return true;
}

exports.isProxy = isProxy;

function getProxyTarget(value) {
  if (isProxy(value)) return on_change_1.default.target(value);
  return value;
}

exports.getProxyTarget = getProxyTarget;

function toURIPathPart(value) {
  value = value.replace(/\/+/g, "/");
  if (!value.startsWith("/")) value = `/${value}`;

  if (value.endsWith("/") && value.length > 1) {
    value = value.slice(0, -1);
  }

  return value;
}

exports.toURIPathPart = toURIPathPart;

/***/ }),

/***/ "./var/tmp/virtualEntryPoint.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.virtualRoutes = ["Config", "GameLobby", "Home"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL0dhbWVXaW5kb3cudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvVGVzdENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9jbGllbnQvdHMvY29tcG9uZW50cy9WaWV3TGluay50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9jbGllbnQvdHMvY29tcG9uZW50cy9WaWV3Um91dGVyLnRzIiwid2VicGFjazovLy8uLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQmFzZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQ2xpZW50TW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9DbGllbnRSb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0NvbmZpZ01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9EYXRhYmFzZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbW9kZWxzIHN5bmMgXlxcLlxcLy4qXFwudHMkIiwid2VicGFjazovLy8uLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdC50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9jbGllbnQvdHMvbW9kZWxzL1Rlc3QxLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcyBzeW5jIF5cXC5cXC8uKlxcLnRzJCIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0dhbWVMb2JieS50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0hvbWUudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3V0aWxzL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvbGliL0F0dHJpYnV0ZS50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9saWIvQkRPQ29uZmlnTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9saWIvQkRPRGF0YWJhc2VNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uLi9zb3VyY2UvYXBwL2xpYi9CRE9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvbGliL0JET01hcENhY2hlLnRzIiwid2VicGFjazovLy8uLi9zb3VyY2UvYXBwL2xpYi9CRE9Nb2RlbC50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9saWIvQkRPUm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvbGliL0Jhc2VDb25zdHJ1Y3Rvci50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9saWIvQmluZGluZy50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9saWIvRXJyb3JzLnRzIiwid2VicGFjazovLy8uLi9zb3VyY2UvYXBwL2xpYi9GaWVsZC50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9saWIvTW9kZWxSZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9saWIvTW9kaWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uLi9zb3VyY2UvYXBwL2xpYi9Qcm9wZXJ0eS50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9saWIvV2F0Y2hlZC50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9tb2RlbHMvQkRPVGVzdC50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9tb2RlbHMvQkRPVGVzdDEudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvbW9kZWxzL0NlbGwudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvbW9kZWxzL0NodW5rLnRzIiwid2VicGFjazovLy8uLi9zb3VyY2UvYXBwL3JvdXRlcy9CRE9Db25maWcudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvcm91dGVzL0JET0dhbWVMb2JieS50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9yb3V0ZXMvQkRPSG9tZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3V0aWxzIHN5bmMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvdXRpbHMvZGVjb3JhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC91dGlscy9lbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC91dGlscy9mcmFtZXdvcmsudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvdXRpbHMvbWV0YWRhdGEudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvdXRpbHMvdXRpbC50cyIsIndlYnBhY2s6Ly8vLi4vdmFyL3RtcC92aXJ0dWFsRW50cnlQb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUMsUUFBRCxFQUFVLFdBQVYsRUFBc0IsTUFBdEIsQ0FBeEIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yXCIsXCJ0ZW1wbGF0ZXNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1TR1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLVNHLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2EsIF9iO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJhc2VDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9CYXNlQ29tcG9uZW50XCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMiA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBCQUJZTE9OID0gdHNsaWJfMS5fX2ltcG9ydFN0YXIocmVxdWlyZShcImJhYnlsb25qc1wiKSk7XG5sZXQgR2FtZVdpbmRvdyA9IGNsYXNzIEdhbWVXaW5kb3cgZXh0ZW5kcyBCYXNlQ29tcG9uZW50XzEuQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBuZXcgQkFCWUxPTi5FbmdpbmUodGhpcywgdHJ1ZSwge1xuICAgICAgICAgICAgYXVkaW9FbmdpbmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2NlbmUgPSB0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IGAxMDAlYDtcbiAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IGAxMDAlYDtcbiAgICAgICAgdGhpcy5lbmdpbmUucnVuUmVuZGVyTG9vcCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbmdpbmUucmVzaXplKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNyZWF0ZVNjZW5lKCkge1xuICAgICAgICBjb25zdCBzY2VuZSA9IG5ldyBCQUJZTE9OLlNjZW5lKHRoaXMuZW5naW5lKTtcbiAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IEJBQllMT04uRnJlZUNhbWVyYSgnY2FtZXJhJywgbmV3IEJBQllMT04uVmVjdG9yMygwLCA1LCAtMTApLCBzY2VuZSk7XG4gICAgICAgIGNhbWVyYS5zZXRUYXJnZXQoQkFCWUxPTi5WZWN0b3IzLlplcm8oKSk7XG4gICAgICAgIGNhbWVyYS5hdHRhY2hDb250cm9sKHRoaXMsIGZhbHNlKTtcbiAgICAgICAgY29uc3QgbGlnaHQgPSBuZXcgQkFCWUxPTi5IZW1pc3BoZXJpY0xpZ2h0KCdsaWdodDEnLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDEsIDApLCBzY2VuZSk7XG4gICAgICAgIGxpZ2h0LnNoYWRvd0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBzcGhlcmUgPSBCQUJZTE9OLk1lc2hCdWlsZGVyLkNyZWF0ZVNwaGVyZSgnc3BoZXJlJywgeyBzZWdtZW50czogMTYsIGRpYW1ldGVyOiAyIH0sIHNjZW5lKTtcbiAgICAgICAgc3BoZXJlLnBvc2l0aW9uLnkgPSAxO1xuICAgICAgICBCQUJZTE9OLk1lc2hCdWlsZGVyLkNyZWF0ZUdyb3VuZCgnZ3JvdW5kMScsIHsgaGVpZ2h0OiA2LCB3aWR0aDogNiwgc3ViZGl2aXNpb25zOiAyIH0sIHNjZW5lKTtcbiAgICAgICAgcmV0dXJuIHNjZW5lO1xuICAgIH1cbiAgICBjcmVhdGVUZXJyYWluKCkgeyB9XG59O1xuR2FtZVdpbmRvdy5leHRlbmRzID0gXCJjYW52YXNcIjtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18yLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdHlwZW9mIChfYSA9IHR5cGVvZiBCQUJZTE9OICE9PSBcInVuZGVmaW5lZFwiICYmIEJBQllMT04uRW5naW5lKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3QpXG5dLCBHYW1lV2luZG93LnByb3RvdHlwZSwgXCJlbmdpbmVcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18yLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdHlwZW9mIChfYiA9IHR5cGVvZiBCQUJZTE9OICE9PSBcInVuZGVmaW5lZFwiICYmIEJBQllMT04uU2NlbmUpID09PSBcImZ1bmN0aW9uXCIgPyBfYiA6IE9iamVjdClcbl0sIEdhbWVXaW5kb3cucHJvdG90eXBlLCBcInNjZW5lXCIsIHZvaWQgMCk7XG5HYW1lV2luZG93ID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKClcbl0sIEdhbWVXaW5kb3cpO1xuZXhwb3J0cy5kZWZhdWx0ID0gR2FtZVdpbmRvdztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVIyRnRaVmRwYm1SdmR5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMMk52YlhCdmJtVnVkSE12UjJGdFpWZHBibVJ2ZHk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFc05rUkJRV2xGTzBGQlEycEZMSE5FUVVGM1JEdEJRVU40UkN4elJFRkJhVVE3UVVGRGFrUXNNa1JCUVhGRE8wRkJWWEpETEVsQlFYRkNMRlZCUVZVc1IwRkJMMElzVFVGQmNVSXNWVUZCVnl4VFFVRlJMRzlEUVVGdlFpeERRVUZETEdsQ1FVRnBRaXhEUVVGRE8wbEJRUzlGT3p0UlFXdENNRUlzVjBGQlRTeEhRVUZ0UWl4SlFVRkpMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlR0WlFVTXhSU3hYUVVGWExFVkJRVVVzU1VGQlNUdFRRVU53UWl4RFFVRkRMRU5CUVVNN1VVRlRiVUlzVlVGQlN5eEhRVUZyUWl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03U1VGNVJIQkZMRU5CUVVNN1NVRnNSRlVzYVVKQlFXbENPMUZCUTNCQ0xFdEJRVXNzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hEUVVGRE8xRkJRekZDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dFJRVU16UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZETVVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eGhRVUZoTEVOQlFVTXNSMEZCUnl4RlFVRkZPMWxCUXpOQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNN1VVRkRlRUlzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEU0N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFGQlEzSkNMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4UlFVRlJMRVZCUVVVc1IwRkJSeXhGUVVGRk8xbEJRMjVETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF6dFpRVU12UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZEY2tNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFVDeERRVUZETzBsQlUxTXNWMEZCVnp0UlFVVnFRaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlJUZERMRTFCUVUwc1RVRkJUU3hIUVVGSExFbEJRVWtzVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1NVRkJTU3hQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVVjJSaXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVVY2UXl4TlFVRk5MRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVVnNReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEU5QlFVOHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eFJRVUZSTEVWQlFVVXNTVUZCU1N4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRE1VWXNTMEZCU3l4RFFVRkRMR0ZCUVdFc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRk0wSXNUVUZCVFN4TlFVRk5MRWRCUVVjc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVc1VVRkJVU3hGUVVGRkxFVkJRVVVzUlVGQlJTeFJRVUZSTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRmFFY3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJYUkNMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEZOQlFWTXNSVUZCUlN4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNSVUZCUlN4WlFVRlpMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdVVUZGTjBZc1QwRkJUeXhMUVVGTExFTkJRVU03U1VGRGFrSXNRMEZCUXp0SlFWRlRMR0ZCUVdFc1MwRkJTeXhEUVVGRE8wTkJRMmhETEVOQlFVRTdRVUUzUlRCQ0xHdENRVUZQTEVkQlFWY3NVVUZCVVN4RFFVRkRPMEZCVTNSRE8wbEJRVmdzY1VKQlFWRXNSVUZCUlRzd1JFRkJiVUlzVDBGQlR5eHZRa0ZCVUN4UFFVRlBMRU5CUVVNc1RVRkJUVHN3UTBGRmVrTTdRVUZUVXp0SlFVRllMSEZDUVVGUkxFVkJRVVU3TUVSQlFXdENMRTlCUVU4c2IwSkJRVkFzVDBGQlR5eERRVUZETEV0QlFVczdlVU5CUVhOQ08wRkJOMEl2UXl4VlFVRlZPMGxCUkRsQ0xEUkNRVUZsTEVWQlFVVTdSMEZEUnl4VlFVRlZMRU5CYzBZNVFqdHJRa0YwUm05Q0xGVkJRVlVpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJhc2VDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9CYXNlQ29tcG9uZW50XCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMiA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCB0ZXN0Q29tcG9uZW50X25qa18xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIn5zdGF0aWMvdmlld3MvdGVzdENvbXBvbmVudC5uamtcIikpO1xubGV0IFRlc3RDb21wb25lbnQgPSBjbGFzcyBUZXN0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudF8xLkJhc2VDb21wb25lbnRGYWN0b3J5KEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudGVtcGxhdGVTdHJpbmcgPSB0ZXN0Q29tcG9uZW50X25qa18xLmRlZmF1bHQ7XG4gICAgICAgIHRoaXMudGVzdCA9IFwibGFsYWxhXCI7XG4gICAgfVxufTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18yLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuXSwgVGVzdENvbXBvbmVudC5wcm90b3R5cGUsIFwidGVtcGxhdGVTdHJpbmdcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18yLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgVGVzdENvbXBvbmVudC5wcm90b3R5cGUsIFwidGVzdFwiLCB2b2lkIDApO1xuVGVzdENvbXBvbmVudCA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpXG5dLCBUZXN0Q29tcG9uZW50KTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRlc3RDb21wb25lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWR1Z6ZEVOdmJYQnZibVZ1ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyTnZiWEJ2Ym1WdWRITXZWR1Z6ZEVOdmJYQnZibVZ1ZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN3MlJFRkJhVVU3UVVGRGFrVXNjMFJCUVhkRU8wRkJRM2hFTEhORVFVRnBSRHRCUVVOcVJDeG5SMEZCZFVRN1FVRlZka1FzU1VGQmNVSXNZVUZCWVN4SFFVRnNReXhOUVVGeFFpeGhRVUZqTEZOQlFWRXNiME5CUVc5Q0xFTkJRVU1zVjBGQlZ5eERRVUZETzBsQlFUVkZPenRSUVZFd1FpeHRRa0ZCWXl4SFFVRkhMREpDUVVGUkxFTkJRVU03VVVGVE1VSXNVMEZCU1N4SFFVRlhMRkZCUVZFc1EwRkJRenRKUVVWc1JDeERRVUZETzBOQlFVRXNRMEZCUVR0QlFWaGxPMGxCUVZnc2NVSkJRVkVzUlVGQlJUczdjVVJCUVhGRE8wRkJVM0JETzBsQlFWZ3NjVUpCUVZFc1JVRkJSVHM3TWtOQlFXMURPMEZCYWtJM1FpeGhRVUZoTzBsQlJHcERMRFJDUVVGbExFVkJRVVU3UjBGRFJ5eGhRVUZoTEVOQmJVSnFRenRyUWtGdVFtOUNMR0ZCUVdFaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfYSwgX2I7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgQmFzZUNvbXBvbmVudF8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0Jhc2VDb21wb25lbnRcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgVGVzdDFfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L21vZGVscy9UZXN0MVwiKTtcbmxldCBWaWV3TGluayA9IGNsYXNzIFZpZXdMaW5rIGV4dGVuZHMgQmFzZUNvbXBvbmVudF8xLkJhc2VDb21wb25lbnRGYWN0b3J5KEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgY29uc3RydWN0b3IoX3BhcmFtcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IFRlc3QxXzEuVGVzdDEoeyB0aXRsZTogU3RyaW5nKERhdGUubm93KCkpIH0pO1xuICAgICAgICB0aGlzLnRlc3QgPSB0aGlzLm1vZGVsLmJpbmQoXCJ0aXRsZVwiKTtcbiAgICAgICAgdGhpcy50ZXN0ZXIgPSB0aGlzLm1vZGVsLmJpbmQoXCJ0ZXN0ZXJcIik7XG4gICAgICAgIHRoaXMudGVzdGVuID0ge307XG4gICAgfVxuICAgIGNvbnN0cnVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkxpbmtDbGljay5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25UZXN0VHlwZUNoZWNrKHZhbHVlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tpbmcgdHlwZSBvZiB0ZXN0IHdpdGggdmFsdWVcIiwgdmFsdWUpO1xuICAgIH1cbiAgICBvblRlc3RUeXBlQ2hlY2tTdWNjZXNzKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlR5cGVjaGVjayBvZiB0ZXN0IHN1Y2Nlc3NmdWxcIik7XG4gICAgfVxuICAgIG9uVGVzdFR5cGVDaGVja0ZhaWwoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUeXBlY2hlY2sgb2YgdGVzdCBmYWlsZWRcIiwgZXJyb3IpO1xuICAgIH1cbiAgICBvblRlc3RDaGFuZ2UoY2hhbmdlZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRlc3QgY2hhbmdlZFwiLCBjaGFuZ2VkLCB0aGlzKTtcbiAgICB9XG4gICAgb25UZXN0ZXJJbml0KGluaXQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgaW5pdFwiLCBpbml0LCB0aGlzKTtcbiAgICB9XG4gICAgb25UZXN0ZXJDaGFuZ2UoY2hhbmdlZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RlciBjaGFuZ2VkXCIsIGNoYW5nZWQsIHRoaXMpO1xuICAgIH1cbiAgICBvblRlc3RlckFkZChhZGRlZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RlciBhZGRlZFwiLCBhZGRlZCwgdGhpcyk7XG4gICAgfVxuICAgIG9uVGVzdGVyUmVtb3ZlKHJlbW92ZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgcmVtb3ZlZFwiLCByZW1vdmVkLCB0aGlzKTtcbiAgICB9XG4gICAgb25MaW5rQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93LnJvdXRlci5uYXZpZ2F0ZSh0aGlzLmhyZWYsIHRydWUpO1xuICAgIH1cbn07XG5WaWV3TGluay5leHRlbmRzID0gJ2EnO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG5dLCBWaWV3TGluay5wcm90b3R5cGUsIFwibW9kZWxcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmF0dHJpYnV0ZSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIFZpZXdMaW5rLnByb3RvdHlwZSwgXCJ0ZXN0XCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS53YXRjaGVkKCksIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSlcbl0sIFZpZXdMaW5rLnByb3RvdHlwZSwgXCJ0ZXN0ZXJcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdHlwZW9mIChfYSA9IHR5cGVvZiBPYmplY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgT2JqZWN0KSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3QpXG5dLCBWaWV3TGluay5wcm90b3R5cGUsIFwidGVzdGVuXCIsIHZvaWQgMCk7XG5WaWV3TGluayA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9iID0gdHlwZW9mIENvbnN0UGFyYW1zICE9PSBcInVuZGVmaW5lZFwiICYmIENvbnN0UGFyYW1zKSA9PT0gXCJmdW5jdGlvblwiID8gX2IgOiBPYmplY3RdKVxuXSwgVmlld0xpbmspO1xuZXhwb3J0cy5kZWZhdWx0ID0gVmlld0xpbms7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWbWxsZDB4cGJtc3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMk5zYVdWdWRDOTBjeTlqYjIxd2IyNWxiblJ6TDFacFpYZE1hVzVyTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVN3MlJFRkJhVVU3UVVGRGFrVXNjMFJCUVhOR08wRkJRM1JHTEdkRVFVRTJRenRCUVZVM1F5eEpRVUZ4UWl4UlFVRlJMRWRCUVRkQ0xFMUJRWEZDTEZGQlFWTXNVMEZCVVN4dlEwRkJiMElzUTBGQlF5eHBRa0ZCYVVJc1EwRkJRenRKUVhsRGVrVXNXVUZCV1N4UFFVRXJRanRSUVVOMlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0UlFUTkNUeXhWUVVGTExFZEJRVWNzU1VGQlNTeGhRVUZMTEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVZGb1JDeFRRVUZKTEVkQlFWY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVVUZSTjBJc1YwRkJUU3hIUVVGaExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJVWHBFTEZkQlFVMHNSMEZCVnl4RlFVRkZMRU5CUVVNN1NVRkpka01zUTBGQlF6dEpRVTlOTEcxQ1FVRnRRanRSUVVOMFFpeExRVUZMTEVOQlFVTXNiVUpCUVcxQ0xFVkJRVVVzUTBGQlF6dFJRVU0xUWl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRhRVVzUTBGQlF6dEpRVk5UTEdWQlFXVXNRMEZCUXl4TFFVRnRRanRSUVVONlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMR3REUVVGclF5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXpORUxFTkJRVU03U1VGUlV5eHpRa0ZCYzBJN1VVRkROVUlzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl3NFFrRkJPRUlzUTBGQlF5eERRVUZETzBsQlEyaEVMRU5CUVVNN1NVRlJVeXh0UWtGQmJVSXNRMEZCUXl4TFFVRlpPMUZCUTNSRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNNRUpCUVRCQ0xFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYmtRc1EwRkJRenRKUVZOVExGbEJRVmtzUTBGQlF5eFBRVUYxUWp0UlFVTXhReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEdOQlFXTXNSVUZCUlN4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGREwwTXNRMEZCUXp0SlFWTlRMRmxCUVZrc1EwRkJReXhKUVVGdlFqdFJRVU4yUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExHRkJRV0VzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRNME1zUTBGQlF6dEpRVk5UTEdOQlFXTXNRMEZCUXl4UFFVRjFRanRSUVVNMVF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMR2RDUVVGblFpeEZRVUZGTEU5QlFVOHNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOcVJDeERRVUZETzBsQlUxTXNWMEZCVnl4RFFVRkRMRXRCUVhGQ08xRkJRM1pETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1kwRkJZeXhGUVVGRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTTNReXhEUVVGRE8wbEJVMU1zWTBGQll5eERRVUZETEU5QlFYVkNPMUZCUXpWRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUTJwRUxFTkJRVU03U1VGVFR5eFhRVUZYTEVOQlFVTXNTMEZCV1R0UlFVTTFRaXhMUVVGTExFTkJRVU1zWTBGQll5eEZRVUZGTEVOQlFVTTdVVUZEZGtJc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU0xUXl4RFFVRkRPME5CUTBvc1EwRkJRVHRCUVdoS01FSXNaMEpCUVU4c1IwRkJWeXhIUVVGSExFTkJRVU03UVVGUGFrTTdTVUZCV0N4eFFrRkJVU3hGUVVGRk96dDFRMEZCZVVRN1FVRlJka1E3U1VGQldpeHpRa0ZCVXl4RlFVRkZPenR6UTBGQlowUTdRVUZSY0VNN1NVRkJka0lzYjBKQlFVOHNSVUZCUlN4RlFVRkZMSE5DUVVGVExFVkJRVVU3TzNkRFFVRnhSRHRCUVZGb1JUdEpRVUZZTEhGQ1FVRlJMRVZCUVVVN01FUkJRV2RDTEUxQlFVMHNiMEpCUVU0c1RVRkJUVHQzUTBGQlRUdEJRWFpEZEVJc1VVRkJVVHRKUVVRMVFpdzBRa0ZCWlN4RlFVRkZPMmxGUVRCRFVTeFhRVUZYTEc5Q1FVRllMRmRCUVZjN1IwRjZRMmhDTEZGQlFWRXNRMEYzU2pWQ08ydENRWGhLYjBJc1VVRkJVU0o5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgQmFzZUNvbXBvbmVudF8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0Jhc2VDb21wb25lbnRcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMiA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBuYXZpZ29fMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJuYXZpZ29cIikpO1xubGV0IFZpZXdSb3V0ZXIgPSBjbGFzcyBWaWV3Um91dGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudF8xLkJhc2VDb21wb25lbnRGYWN0b3J5KEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucm91dGVyID0gbmV3IG5hdmlnb18xLmRlZmF1bHQoKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMucm91dGVDb2xsZWN0aW9uKCk7XG4gICAgICAgIHdpbmRvdy5yb3V0ZXIgPSB0aGlzLnJvdXRlcjtcbiAgICB9XG4gICAgcm91dGVDb2xsZWN0aW9uKCkge1xuICAgICAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIHdpbmRvdy52aXJ0dWFsUm91dGVzKSB7XG4gICAgICAgICAgICBjb25zdCBteVJvdXRlID0gcmVxdWlyZShgLi8uLi9yb3V0ZXMvJHtyb3V0ZX0udHNgKS5kZWZhdWx0O1xuICAgICAgICAgICAgdGhpcy5zaW5nZVJvdXRlQ29sbGVjdGlvbihteVJvdXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaW5nZVJvdXRlQ29sbGVjdGlvbihSb3V0ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCF1dGlsXzEuaW5jbHVkZXNNZW1iZXJPZkxpc3QoUm91dGUuYXR0YWNoVG9TZXJ2ZXJzLCBbZ2xvYmFsLnByb2Nlc3MuZW52Lm5hbWUsICcqJ10pKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IFJvdXRlQ2xhc3MgPSBuZXcgUm91dGUoKTtcbiAgICAgICAgICAgIGlmICghUm91dGVDbGFzcy5pc0NsaWVudFJvdXRlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke1JvdXRlQ2xhc3MuY29uc3RydWN0b3IubmFtZX0gaXMgbm90IGluc3RhbmNlIG9mIH5jbGllbnQvbGliL0Jhc2VSb3V0ZWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIub24oUm91dGVDbGFzcy5yb3V0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG59O1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzIucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG5dLCBWaWV3Um91dGVyLnByb3RvdHlwZSwgXCJyb3V0ZXJcIiwgdm9pZCAwKTtcblZpZXdSb3V0ZXIgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoKVxuXSwgVmlld1JvdXRlcik7XG5leHBvcnRzLmRlZmF1bHQgPSBWaWV3Um91dGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVm1sbGQxSnZkWFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyTnZiWEJ2Ym1WdWRITXZWbWxsZDFKdmRYUmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3cyUkVGQmFVVTdRVUZEYWtVc01FTkJRWFZFTzBGQlEzWkVMSE5FUVVGM1JEdEJRVU40UkN4elJFRkJhVVE3UVVGRmFrUXNORVJCUVRSQ08wRkJWVFZDTEVsQlFYRkNMRlZCUVZVc1IwRkJMMElzVFVGQmNVSXNWVUZCVnl4VFFVRlJMRzlEUVVGdlFpeERRVUZETEZkQlFWY3NRMEZCUXp0SlFVRjZSVHM3VVVGVGFVTXNWMEZCVFN4SFFVRkhMRWxCUVVrc1owSkJRVTBzUlVGQlJTeERRVUZETzBsQkswTjJSQ3hEUVVGRE8wbEJka05oTEdsQ1FVRnBRanRSUVVOMlFpeExRVUZMTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzUTBGQlF6dFJRVU14UWl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFTkJRVU03VVVGRGRrSXNUVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzBsQlEyaERMRU5CUVVNN1NVRlJUeXhsUVVGbE8xRkJRMjVDTEV0QlFVc3NUVUZCVFN4TFFVRkxMRWxCUVVrc1RVRkJUU3hEUVVGRExHRkJRV0VzUlVGQlJUdFpRVU4wUXl4TlFVRk5MRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU1zWlVGQlpTeExRVUZMTEV0QlFVc3NRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJRenRaUVVNelJDeEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVMEZEZEVNN1NVRkRUQ3hEUVVGRE8wbEJWVThzYjBKQlFXOUNMRU5CUVVNc1MwRkJlVUk3VVVGRGJFUXNTVUZCU1R0WlFVTkJMRWxCUVVrc1EwRkJReXd5UWtGQmIwSXNRMEZCVnl4TFFVRkxMRU5CUVVNc1pVRkJaU3hGUVVGRkxFTkJRVk1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVRkZMRTlCUVU4N1dVRkRNMGNzVFVGQlRTeFZRVUZWTEVkQlFVY3NTVUZCU1N4TFFVRkxMRVZCUVVVc1EwRkJRenRaUVVNdlFpeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMR0ZCUVdFc1JVRkJSVHRuUWtGRE0wSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhIUVVGSExGVkJRVlVzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N3eVEwRkJNa01zUTBGQlF5eERRVUZETzJGQlF6bEdPMWxCUTBRc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xTkJRM0pETzFGQlFVTXNUMEZCVHl4TFFVRkxMRVZCUVVVN1dVRkRXaXhOUVVGTkxFdEJRVXNzUTBGQlF6dFRRVU5tTzBsQlEwd3NRMEZCUXp0RFFVTktMRU5CUVVFN1FVRXZRMlU3U1VGQldDeHhRa0ZCVVN4RlFVRkZPenN3UTBGQmQwTTdRVUZVYkVNc1ZVRkJWVHRKUVVRNVFpdzBRa0ZCWlN4RlFVRkZPMGRCUTBjc1ZVRkJWU3hEUVhkRU9VSTdhMEpCZUVSdlFpeFZRVUZWSW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnJlcXVpcmUoXCJyZWZsZWN0LW1ldGFkYXRhXCIpO1xuY29uc3QgbnVuanVja3NfMSA9IHJlcXVpcmUoXCJudW5qdWNrc1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmNsaWVudC91dGlscy91dGlsXCIpO1xuY29uc3QgdXRpbF8yID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IGZyYW1ld29ya18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZnJhbWV3b3JrXCIpO1xuZnVuY3Rpb24gQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTFR5cGVFbGVtZW50KSB7XG4gICAgdmFyIF9hO1xuICAgIGNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBIVE1MVHlwZUVsZW1lbnQge1xuICAgICAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLmdlbmVyYXRlVW5pcXVlSUQoKTtcbiAgICAgICAgICAgIHRoaXMuaXNCYXNlQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMuY29uc3RydWN0b3IpLm5hbWU7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlU3RyaW5nID0gJzxkaXY+PHNsb3Q+PC9zbG90PjwvZGl2Pic7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMsIFwiZGVmaW5lZFByb3BlcnRpZXNcIik7XG4gICAgICAgICAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBvZiBwcm9wZXJ0aWVzLmtleXMoKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5zZXQocHJvcC50b1N0cmluZygpLCBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcywgcHJvcCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgICAgfVxuICAgICAgICBnZXQgcmVmcygpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlZnMgPSB7fTtcbiAgICAgICAgICAgIGlmICghdGhpcy5zaGFkb3dSb290KVxuICAgICAgICAgICAgICAgIHJldHVybiByZWZzO1xuICAgICAgICAgICAgY29uc3QgcmVmRWxlbWVudHMgPSBBcnJheS5mcm9tKHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKFwiW3JlZl1cIikpO1xuICAgICAgICAgICAgZm9yIChjb25zdCByZWZFbGVtZW50IG9mIHJlZkVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVmTmFtZSA9IHJlZkVsZW1lbnQuZ2V0QXR0cmlidXRlKFwicmVmXCIpO1xuICAgICAgICAgICAgICAgIGlmICghcmVmTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKHJlZk5hbWUgaW4gcmVmcylcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGByZWYgJHtyZWZOYW1lfSBhbHJlYWR5IGV4aXN0c2ApO1xuICAgICAgICAgICAgICAgIHJlZnNbcmVmTmFtZV0gPSByZWZFbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlZnM7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHBhcmVudENvbXBvbmVudCgpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudCA9IHRoaXM7XG4gICAgICAgICAgICBsZXQgcGFyZW50Q29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHdoaWxlICghcGFyZW50Q29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm9vdE5vZGUgPSBjdXJyZW50RWxlbWVudC5nZXRSb290Tm9kZSgpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJlbnRFbGVtZW50ID0gY3VycmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmVudEVsZW1lbnQgJiYgcm9vdE5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290KVxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50ID0gcm9vdE5vZGUuaG9zdDtcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmVudEVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGlmIChmcmFtZXdvcmtfMS5pc0NvbXBvbmVudChwYXJlbnRFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDb21wb25lbnQgPSBwYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Q29tcG9uZW50O1xuICAgICAgICB9XG4gICAgICAgIGdldCBjaGlsZENvbXBvbmVudHMoKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IEFycmF5LmZyb20odGhpcy5zaGFkb3dSb290Py5jaGlsZHJlbiA/PyBbXSkuY29uY2F0KEFycmF5LmZyb20odGhpcy5jaGlsZHJlbikpO1xuICAgICAgICAgICAgY29uc3QgY2hpbGRDb21wb25lbnRzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZyYW1ld29ya18xLmlzQ29tcG9uZW50KGNoaWxkKSlcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb21wb25lbnRzLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkQ29tcG9uZW50cztcbiAgICAgICAgfVxuICAgICAgICBnZXQgZmlyc3RDb21wb25lbnRDaGlsZCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gQXJyYXkuZnJvbSh0aGlzLnNoYWRvd1Jvb3Q/LmNoaWxkcmVuID8/IFtdKS5jb25jYXQoQXJyYXkuZnJvbSh0aGlzLmNoaWxkcmVuKSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZyYW1ld29ya18xLmlzQ29tcG9uZW50KGNoaWxkKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IGxhc3RDb21wb25lbnRDaGlsZCgpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50Q2hpbGQgPSB0aGlzLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudENoaWxkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZyYW1ld29ya18xLmlzQ29tcG9uZW50KGN1cnJlbnRDaGlsZCkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50Q2hpbGQ7XG4gICAgICAgICAgICAgICAgY3VycmVudENoaWxkID0gY3VycmVudENoaWxkLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50Q2hpbGQpXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDaGlsZCA9IHRoaXMuc2hhZG93Um9vdD8uZmlyc3RFbGVtZW50Q2hpbGQgPz8gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGdldCBuZXh0Q29tcG9uZW50U2libGluZygpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudCA9IHRoaXM7XG4gICAgICAgICAgICBsZXQgbmV4dENvbXBvbmVudFNpYmxpbmcgPSBudWxsO1xuICAgICAgICAgICAgd2hpbGUgKCFuZXh0Q29tcG9uZW50U2libGluZykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvb3ROb2RlID0gY3VycmVudEVsZW1lbnQuZ2V0Um9vdE5vZGUoKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV4dEVsZW1lbnRTaWJsaW5nID0gY3VycmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGlmICghbmV4dEVsZW1lbnRTaWJsaW5nICYmIHJvb3ROb2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdClcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVsZW1lbnRTaWJsaW5nID0gcm9vdE5vZGUuaG9zdC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgICAgICBpZiAoIW5leHRFbGVtZW50U2libGluZylcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgaWYgKGZyYW1ld29ya18xLmlzQ29tcG9uZW50KG5leHRFbGVtZW50U2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dENvbXBvbmVudFNpYmxpbmcgPSBuZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50ID0gbmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5leHRDb21wb25lbnRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgICAgIGdldCBwcmV2aW91c0NvbXBvbmVudFNpYmxpbmcoKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudEVsZW1lbnQgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IHByZXZpb3VzQ29tcG9uZW50U2libGluZyA9IG51bGw7XG4gICAgICAgICAgICB3aGlsZSAoIXByZXZpb3VzQ29tcG9uZW50U2libGluZykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvb3ROb2RlID0gY3VycmVudEVsZW1lbnQuZ2V0Um9vdE5vZGUoKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJldmlvdXNFbGVtZW50U2libGluZyA9IGN1cnJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgaWYgKCFwcmV2aW91c0VsZW1lbnRTaWJsaW5nICYmIHJvb3ROb2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdClcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNFbGVtZW50U2libGluZyA9IHRoaXMuc2hhZG93Um9vdD8uZmlyc3RFbGVtZW50Q2hpbGQgPz8gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIXByZXZpb3VzRWxlbWVudFNpYmxpbmcpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGlmIChmcmFtZXdvcmtfMS5pc0NvbXBvbmVudChwcmV2aW91c0VsZW1lbnRTaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0NvbXBvbmVudFNpYmxpbmcgPSBwcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IHByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXNDb21wb25lbnRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgICAgIGdldCBiaW5kaW5ncygpIHtcbiAgICAgICAgICAgIGNvbnN0IGJpbmRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLCBcImluaXRpYXRvckJpbmRpbmdcIik7XG4gICAgICAgICAgICByZXR1cm4gYmluZGluZ3MgPyBiaW5kaW5ncyA6IG5ldyBNYXAoKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgY3JlYXRlKHBhcmFtcykge1xuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSB1dGlsXzIucGFzY2FsQ2FzZTJrZWJhYkNhc2UoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLm5hbWUpO1xuICAgICAgICAgICAgbGV0IGlzID0gdGhhdC5leHRlbmRzO1xuICAgICAgICAgICAgbGV0IHRhZ05hbWUgPSBjbGFzc05hbWU7XG4gICAgICAgICAgICBpZiAoaXMpIHtcbiAgICAgICAgICAgICAgICB0YWdOYW1lID0gaXM7XG4gICAgICAgICAgICAgICAgaXMgPSBjbGFzc05hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGF0LmlzUHJvY2VkdXJhbENvbXBvbmVudENvbnN0cnVjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lLCB7IGlzIH0pO1xuICAgICAgICAgICAgdGhhdC5pc1Byb2NlZHVyYWxDb21wb25lbnRDb25zdHJ1Y3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIGVsZW1lbnQuaW52b2tlTGlmZUN5Y2xlKHBhcmFtcyk7XG4gICAgICAgICAgICBpZiAoaXMpXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpc1wiLCBpcywgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBpbnZva2VMaWZlQ3ljbGUoX0NvbnN0UGFyYW1zKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGlzIG5vdCBhIEJhc2VDb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgfVxuICAgICAgICBnZXROYW1lc3BhY2VkU3RvcmFnZShrZXksIG5zUHJvcCwgZm9yY2VOUykge1xuICAgICAgICAgICAgcmV0dXJuIHV0aWxfMS5nZXROYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5zUHJvcCwgZm9yY2VOUyk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2Uoa2V5LCBuZXdWYWwsIG5zUHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHV0aWxfMS5zZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5ld1ZhbCwgbnNQcm9wKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGVGcm9tTmFtZXNwYWNlZFN0b3JhZ2Uoa2V5LCBuc1Byb3ApIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlsXzEuZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlKHRoaXMsIGtleSwgbnNQcm9wKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSwgdmFsdWUsIHNldFZhbHVlID0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcGVydGllcyAmJiB0aGlzLnByb3BlcnRpZXMuaGFzKHF1YWxpZmllZE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBcIiR7cXVhbGlmaWVkTmFtZX1cIiBjYW4ndCBiZSBzZXQgYXMgYXR0cmlidXRlIGJlY2F1c2UgaXQgaXMgYSBkZWZpbmVkIHByb3BlcnR5YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVUb1NldCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICghdXRpbF8yLmlzUHJpbWl0aXZlKHZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVUb1NldCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC9cXFwiL2csIFwiJ1wiKTtcbiAgICAgICAgICAgICAgICBzdXBlci5zZXRBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSwgdmFsdWVUb1NldCk7XG4gICAgICAgICAgICAgICAgdmFsdWVUb1NldCA9IHV0aWxfMi5jb25zdHJ1Y3RUeXBlT2ZIVE1MQXR0cmlidXRlKHRoaXMsIHF1YWxpZmllZE5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChzZXRWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpc1txdWFsaWZpZWROYW1lXSA9IHZhbHVlVG9TZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlQXR0cmlidXRlKHF1YWxpZmllZE5hbWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMgJiYgdGhpcy5wcm9wZXJ0aWVzLmhhcyhxdWFsaWZpZWROYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgXCIke3F1YWxpZmllZE5hbWV9XCIgY2FuJ3QgYmUgcmVtb3ZlZCBhcyBhdHRyaWJ1dGUgYmVjYXVzZSBpdCBpcyBhIGRlZmluZWQgcHJvcGVydHlgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1cGVyLnJlbW92ZUF0dHJpYnV0ZShxdWFsaWZpZWROYW1lKTtcbiAgICAgICAgICAgIHRoaXNbcXVhbGlmaWVkTmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgc2V0U3R5bGUoZWxlbWVudE9yTmFtZSwgbmFtZU9yVmFsdWUsIHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWVUb0Fzc2lnbiA9IG51bGw7XG4gICAgICAgICAgICBpZiAoIShlbGVtZW50T3JOYW1lIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVUb0Fzc2lnbiA9IG5hbWVPclZhbHVlO1xuICAgICAgICAgICAgICAgIG5hbWVPclZhbHVlID0gZWxlbWVudE9yTmFtZTtcbiAgICAgICAgICAgICAgICBlbGVtZW50T3JOYW1lID0gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlKVxuICAgICAgICAgICAgICAgIHZhbHVlVG9Bc3NpZ24gPSB2YWx1ZTtcbiAgICAgICAgICAgIGVsZW1lbnRPck5hbWUuc3R5bGUuc2V0UHJvcGVydHkobmFtZU9yVmFsdWUsIHZhbHVlVG9Bc3NpZ24pO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZVN0eWxlKGVsZW1lbnRPck5hbWUsIG5hbWUpIHtcbiAgICAgICAgICAgIGxldCBzdHlsZVRvUmVtb3ZlID0gbnVsbDtcbiAgICAgICAgICAgIGlmICghKGVsZW1lbnRPck5hbWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRvUmVtb3ZlID0gZWxlbWVudE9yTmFtZTtcbiAgICAgICAgICAgICAgICBlbGVtZW50T3JOYW1lID0gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUpXG4gICAgICAgICAgICAgICAgc3R5bGVUb1JlbW92ZSA9IG5hbWU7XG4gICAgICAgICAgICBpZiAoc3R5bGVUb1JlbW92ZSlcbiAgICAgICAgICAgICAgICBlbGVtZW50T3JOYW1lLnN0eWxlLnJlbW92ZVByb3BlcnR5KHN0eWxlVG9SZW1vdmUpO1xuICAgICAgICB9XG4gICAgICAgIHRvSlNPTigpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpc1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtrZXldID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXJUZW1wbGF0ZSgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jb25zdHJ1Y3Rvci5leHRlbmRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0cmluZ1RvUGFyc2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICh1dGlsXzIuaXNTdHJpbmcodGhpcy50ZW1wbGF0ZVN0cmluZykpXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ1RvUGFyc2UgPSBudW5qdWNrc18xLnJlbmRlclN0cmluZyh0aGlzLnRlbXBsYXRlU3RyaW5nLCB0aGlzLnRvSlNPTigpKTtcbiAgICAgICAgICAgICAgICBpZiAodXRpbF8yLmlzT2JqZWN0KHRoaXMudGVtcGxhdGVTdHJpbmcpKVxuICAgICAgICAgICAgICAgICAgICBzdHJpbmdUb1BhcnNlID0gdGhpcy50ZW1wbGF0ZVN0cmluZy5yZW5kZXIodGhpcy50b0pTT04oKSk7XG4gICAgICAgICAgICAgICAgaWYgKHN0cmluZ1RvUGFyc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHN0cmluZ1RvUGFyc2UsICd0ZXh0L2h0bWwnKTtcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93Um9vdC5hcHBlbmRDaGlsZChkb2MuYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3RydWN0ZWRDYWxsYmFjaygpIHsgfVxuICAgICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHsgfVxuICAgICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHsgfVxuICAgICAgICBhZG9wdGVkQ2FsbGJhY2soKSB7IH1cbiAgICAgICAgYWRkQ29udHJvbGxlcigpIHsgfVxuICAgICAgICByZW1vdmVDb250cm9sbGVyKCkgeyB9XG4gICAgICAgIGdlbmVyYXRlVW5pcXVlSUQoKSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcy5jb25zdHJ1Y3RvcikubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IG9jY3VycmVuY2VzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0aGlzLnRhZ05hbWUpKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gb2NjdXJyZW5jZXMuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIGxldCBvY2N1cnJlbmNlID0gaW5kZXggPj0gMCA/IGluZGV4IDogb2NjdXJyZW5jZXMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2NsYXNzTmFtZX1fJHtvY2N1cnJlbmNlfWApKSB7XG4gICAgICAgICAgICAgICAgb2NjdXJyZW5jZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGAke2NsYXNzTmFtZX1fJHtvY2N1cnJlbmNlfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQmFzZUNvbXBvbmVudC5pc0Jhc2VDb21wb25lbnQgPSB0cnVlO1xuICAgIEJhc2VDb21wb25lbnQuaXNQcm9jZWR1cmFsQ29tcG9uZW50Q29uc3RydWN0aW9uID0gZmFsc2U7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLmF0dHJpYnV0ZSgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgQmFzZUNvbXBvbmVudC5wcm90b3R5cGUsIFwiaWRcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcbiAgICBdLCBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJpc0Jhc2VDb21wb25lbnRcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIEJhc2VDb21wb25lbnQucHJvdG90eXBlLCBcImNsYXNzTmFtZVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSh7IGRpc2FibGVUeXBlR3VhcmQ6IHRydWUgfSksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbiAgICBdLCBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJ0ZW1wbGF0ZVN0cmluZ1wiLCB2b2lkIDApO1xuICAgIHJldHVybiBCYXNlQ29tcG9uZW50O1xufVxuZXhwb3J0cy5CYXNlQ29tcG9uZW50RmFjdG9yeSA9IEJhc2VDb21wb25lbnRGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUW1GelpVTnZiWEJ2Ym1WdWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMMnhwWWk5Q1lYTmxRMjl0Y0c5dVpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVRkJMRFJDUVVFd1FqdEJRVU14UWl4MVEwRkJhMFE3UVVGRmJFUXNjMFJCUVRSRU8wRkJRelZFTEd0RVFVRjFSVHRCUVVkMlJTdzJRMEZCYlVnN1FVRkRia2dzTUVOQlFYTklPMEZCUTNSSUxHOUVRVUZ0UkR0QlFWbHVSQ3hUUVVGblFpeHZRa0ZCYjBJc1EwRkJlVU1zWlVGQmMwSTdPMGxCVVM5R0xFMUJRV1VzWVVGQll5eFRRVUZSTEdWQlFXVTdVVUYzVVdoRUxGbEJRVmtzUjBGQlJ5eEpRVUZYTzFsQlEzUkNMRXRCUVVzc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETzFsQk4weERMRTlCUVVVc1IwRkJWeXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1EwRkJRenRaUVZFM1FpeHZRa0ZCWlN4SFFVRlpMRWxCUVVrc1EwRkJRenRaUVZOb1F5eGpRVUZUTEVkQlFWY3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMWxCVlhCRExHMUNRVUZqTEVkQlFYTkNMREJDUVVFd1FpeERRVUZETzFGQmJVdDRTQ3hEUVVGRE8xRkJjRTlFTEVsQlFWY3NWVUZCVlR0WlFVTnFRaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVkQlFVY3NSVUZCTUVJc1EwRkJRenRaUVVOb1JDeE5RVUZOTEZWQlFWVXNSMEZCUnl4elFrRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeHRRa0ZCYlVJc1EwRkJReXhEUVVGRE8xbEJRekZFTEVsQlFVa3NWVUZCVlN4RlFVRkZPMmRDUVVOYUxFdEJRVXNzVFVGQlRTeEpRVUZKTEVsQlFVa3NWVUZCVlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRk8yOUNRVU5zUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNSVUZCUlN3NFFrRkJiVUlzUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRwUWtGREwwUTdZVUZEU2p0WlFVTkVMRTlCUVU4c1MwRkJTeXhEUVVGRE8xRkJRMnBDTEVOQlFVTTdVVUZWUkN4SlFVRlhMRWxCUVVrN1dVRkRXQ3hOUVVGTkxFbEJRVWtzUjBGQmIwTXNSVUZCUlN4RFFVRkRPMWxCUTJwRUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlR0blFrRkJSU3hQUVVGUExFbEJRVWtzUTBGQlF6dFpRVU5zUXl4TlFVRk5MRmRCUVZjc1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNeFJTeExRVUZMTEUxQlFVMHNWVUZCVlN4SlFVRkpMRmRCUVZjc1JVRkJSVHRuUWtGRGJFTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1ZVRkJWU3hEUVVGRExGbEJRVmtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0blFrRkRMME1zU1VGQlNTeERRVUZETEU5QlFVODdiMEpCUVVVc1UwRkJVenRuUWtGRGRrSXNTVUZCU1N4UFFVRlBMRWxCUVVrc1NVRkJTVHR2UWtGQlJTeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRTlCUVU4c1QwRkJUeXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMmRDUVVOMFJTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRE8yRkJRemxDTzFsQlEwUXNUMEZCVHl4SlFVRkpMRU5CUVVNN1VVRkRhRUlzUTBGQlF6dFJRVFpEUkN4SlFVRlhMR1ZCUVdVN1dVRkRkRUlzU1VGQlNTeGpRVUZqTEVkQlFWa3NTVUZCU1N4RFFVRkRPMWxCUTI1RExFbEJRVWtzWlVGQlpTeEhRVUZITEVsQlFVa3NRMEZCUXp0WlFVTXpRaXhQUVVGUExFTkJRVU1zWlVGQlpTeEZRVUZGTzJkQ1FVTnlRaXhOUVVGTkxGRkJRVkVzUjBGQlJ5eGpRVUZqTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1owSkJRemxETEVsQlFVa3NZVUZCWVN4SFFVRnRRaXhqUVVGakxFTkJRVU1zWVVGQllTeERRVUZETzJkQ1FVTnFSU3hKUVVGSkxFTkJRVU1zWVVGQllTeEpRVUZKTEZGQlFWRXNXVUZCV1N4VlFVRlZPMjlDUVVGRkxHRkJRV0VzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRPMmRDUVVOd1JpeEpRVUZKTEVOQlFVTXNZVUZCWVR0dlFrRkJSU3hOUVVGTk8yZENRVU14UWl4SlFVRkpMSFZDUVVGWExFTkJRV2RDTEdGQlFXRXNRMEZCUXl4RlFVRkZPMjlDUVVNelF5eGxRVUZsTEVkQlFVY3NZVUZCWVN4RFFVRkRPMjlDUVVOb1F5eE5RVUZOTzJsQ1FVTlVPenR2UWtGQlRTeGpRVUZqTEVkQlFVY3NZVUZCWVN4RFFVRkRPMkZCUTNwRE8xbEJRMFFzVDBGQlR5eGxRVUZsTEVOQlFVTTdVVUZETTBJc1EwRkJRenRSUVZORUxFbEJRVmNzWlVGQlpUdFpRVU4wUWl4TlFVRk5MRkZCUVZFc1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1VVRkJVU3hKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXk5R0xFMUJRVTBzWlVGQlpTeEhRVUZ2UWl4RlFVRkZMRU5CUVVNN1dVRkROVU1zUzBGQlN5eE5RVUZOTEV0QlFVc3NTVUZCU1N4UlFVRlJMRVZCUVVVN1owSkJRekZDTEVsQlFVa3NkVUpCUVZjc1EwRkJaMElzUzBGQlN5eERRVUZETzI5Q1FVRkZMR1ZCUVdVc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdZVUZEZEVVN1dVRkRSQ3hQUVVGUExHVkJRV1VzUTBGQlF6dFJRVU16UWl4RFFVRkRPMUZCVTBRc1NVRkJWeXh0UWtGQmJVSTdXVUZETVVJc1RVRkJUU3hSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRkxGRkJRVkVzU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNdlJpeExRVUZMTEUxQlFVMHNTMEZCU3l4SlFVRkpMRkZCUVZFc1JVRkJSVHRuUWtGRE1VSXNTVUZCU1N4MVFrRkJWeXhEUVVGblFpeExRVUZMTEVOQlFVTTdiMEpCUVVVc1QwRkJUeXhMUVVGTExFTkJRVU03WVVGRGRrUTdXVUZEUkN4UFFVRlBMRWxCUVVrc1EwRkJRenRSUVVOb1FpeERRVUZETzFGQlUwUXNTVUZCVnl4clFrRkJhMEk3V1VGRGVrSXNTVUZCU1N4WlFVRlpMRWRCUVVjc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRPMWxCUTNwRExFOUJRVThzV1VGQldTeEZRVUZGTzJkQ1FVTnFRaXhKUVVGSkxIVkNRVUZYTEVOQlFXZENMRmxCUVZrc1EwRkJRenR2UWtGQlJTeFBRVUZQTEZsQlFWa3NRMEZCUXp0blFrRkRiRVVzV1VGQldTeEhRVUZITEZsQlFWa3NRMEZCUXl4elFrRkJjMElzUTBGQlF6dG5Ra0ZEYmtRc1NVRkJTU3hEUVVGRExGbEJRVms3YjBKQlFVVXNXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVVzYVVKQlFXbENMRWxCUVVrc1NVRkJTU3hEUVVGRE8yRkJRMmhHTzFsQlEwUXNUMEZCVHl4SlFVRkpMRU5CUVVNN1VVRkRhRUlzUTBGQlF6dFJRVk5FTEVsQlFWY3NiMEpCUVc5Q08xbEJRek5DTEVsQlFVa3NZMEZCWXl4SFFVRlpMRWxCUVVrc1EwRkJRenRaUVVOdVF5eEpRVUZKTEc5Q1FVRnZRaXhIUVVGSExFbEJRVWtzUTBGQlF6dFpRVU5vUXl4UFFVRlBMRU5CUVVNc2IwSkJRVzlDTEVWQlFVVTdaMEpCUXpGQ0xFMUJRVTBzVVVGQlVTeEhRVUZITEdOQlFXTXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRuUWtGRE9VTXNTVUZCU1N4clFrRkJhMElzUjBGQlJ5eGpRVUZqTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU03WjBKQlF6TkVMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNTVUZCU1N4UlFVRlJMRmxCUVZrc1ZVRkJWVHR2UWtGQlJTeHJRa0ZCYTBJc1IwRkJSeXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRE8yZENRVU5vU0N4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTzI5Q1FVRkZMRTFCUVUwN1owSkJReTlDTEVsQlFVa3NkVUpCUVZjc1EwRkJaMElzYTBKQlFXdENMRU5CUVVNc1JVRkJSVHR2UWtGRGFFUXNiMEpCUVc5Q0xFZEJRVWNzYTBKQlFXdENMRU5CUVVNN2IwSkJRekZETEUxQlFVMDdhVUpCUTFRN08yOUNRVUZOTEdOQlFXTXNSMEZCUnl4clFrRkJhMElzUTBGQlF6dGhRVU01UXp0WlFVTkVMRTlCUVU4c2IwSkJRVzlDTEVOQlFVTTdVVUZEYUVNc1EwRkJRenRSUVZORUxFbEJRVmNzZDBKQlFYZENPMWxCUXk5Q0xFbEJRVWtzWTBGQll5eEhRVUZaTEVsQlFVa3NRMEZCUXp0WlFVTnVReXhKUVVGSkxIZENRVUYzUWl4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVOd1F5eFBRVUZQTEVOQlFVTXNkMEpCUVhkQ0xFVkJRVVU3WjBKQlF6bENMRTFCUVUwc1VVRkJVU3hIUVVGSExHTkJRV01zUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0blFrRkRPVU1zU1VGQlNTeHpRa0ZCYzBJc1IwRkJSeXhqUVVGakxFTkJRVU1zYzBKQlFYTkNMRU5CUVVNN1owSkJRMjVGTEVsQlFVa3NRMEZCUXl4elFrRkJjMElzU1VGQlNTeFJRVUZSTEZsQlFWa3NWVUZCVlR0dlFrRkJSU3h6UWtGQmMwSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRkxHbENRVUZwUWl4SlFVRkpMRWxCUVVrc1EwRkJRenRuUWtGRGJra3NTVUZCU1N4RFFVRkRMSE5DUVVGelFqdHZRa0ZCUlN4TlFVRk5PMmRDUVVOdVF5eEpRVUZKTEhWQ1FVRlhMRU5CUVdkQ0xITkNRVUZ6UWl4RFFVRkRMRVZCUVVVN2IwSkJRM0JFTEhkQ1FVRjNRaXhIUVVGSExITkNRVUZ6UWl4RFFVRkRPMjlDUVVOc1JDeE5RVUZOTzJsQ1FVTlVPenR2UWtGQlRTeGpRVUZqTEVkQlFVY3NjMEpCUVhOQ0xFTkJRVU03WVVGRGJFUTdXVUZEUkN4UFFVRlBMSGRDUVVGM1FpeERRVUZETzFGQlEzQkRMRU5CUVVNN1VVRlZSQ3hKUVVGakxGRkJRVkU3V1VGRGJFSXNUVUZCVFN4UlFVRlJMRWRCUVVjc2MwSkJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dFpRVU4yUkN4UFFVRlBMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRek5ETEVOQlFVTTdVVUZoVFN4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGblJDeE5RVUYxUWp0WlFVTjJSaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUYxUXl4RFFVRkRPMWxCUTNKRUxFMUJRVTBzVTBGQlV5eEhRVUZITERKQ1FVRnZRaXhEUVVGRExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRGVrVXNTVUZCU1N4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF6dFpRVU4wUWl4SlFVRkpMRTlCUVU4c1IwRkJSeXhUUVVGVExFTkJRVU03V1VGRGVFSXNTVUZCU1N4RlFVRkZMRVZCUVVVN1owSkJRMG9zVDBGQlR5eEhRVUZITEVWQlFVVXNRMEZCUXp0blFrRkRZaXhGUVVGRkxFZEJRVWNzVTBGQlV5eERRVUZETzJGQlEyeENPMWxCUTBRc1NVRkJTU3hEUVVGRExHbERRVUZwUXl4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVNNVF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExFOUJRVThzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRTJRaXhEUVVGRE8xbEJRM0JHTEVsQlFVa3NRMEZCUXl4cFEwRkJhVU1zUjBGQlJ5eExRVUZMTEVOQlFVTTdXVUZETDBNc1QwRkJUeXhEUVVGRExHVkJRV1VzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0WlFVTm9ReXhKUVVGSkxFVkJRVVU3WjBKQlFVVXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUXpkRExFOUJRVThzVDBGQlR5eERRVUZETzFGQlEyNUNMRU5CUVVNN1VVRmpUU3hsUVVGbExFTkJRVEJDTEZsQlFUWkNPMWxCUTNwRkxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNLMEpCUVN0Q0xFTkJRVU1zUTBGQlF6dFJRVU55UkN4RFFVRkRPMUZCVjAwc2IwSkJRVzlDTEVOQlFVTXNSMEZCVnl4RlFVRkZMRTFCUVdVc1JVRkJSU3hQUVVGblFqdFpRVU4wUlN4UFFVRlBMREpDUVVGdlFpeERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc1RVRkJUU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzFGQlF6VkVMRU5CUVVNN1VVRlhUU3d3UWtGQk1FSXNRMEZCUXl4SFFVRlhMRVZCUVVVc1RVRkJWeXhGUVVGRkxFMUJRV1U3V1VGRGRrVXNUMEZCVHl4cFEwRkJNRUlzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVUwc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU5xUlN4RFFVRkRPMUZCVlUwc01rSkJRVEpDTEVOQlFVTXNSMEZCVnl4RlFVRkZMRTFCUVdVN1dVRkRNMFFzVDBGQlR5eHJRMEZCTWtJc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUXpGRUxFTkJRVU03VVVGWFRTeFpRVUZaTEVOQlFVTXNZVUZCY1VJc1JVRkJSU3hMUVVGaExFVkJRVVVzVjBGQmIwSXNTVUZCU1R0WlFVTTVSU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVsQlFVa3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zWVVGQllTeERRVUZETEVWQlFVVTdaMEpCUTNaRUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNTVUZCU1N4aFFVRmhMRGhFUVVFNFJDeERRVUZETEVOQlFVTTdZVUZEY0VjN1dVRkRSQ3hKUVVGSkxFdEJRVXNzUlVGQlJUdG5Ra0ZEVUN4SlFVRkpMRlZCUVZVc1IwRkJSeXhMUVVGTExFTkJRVU03WjBKQlEzWkNMRWxCUVVrc1EwRkJReXhyUWtGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXp0dlFrRkJSU3hWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVOb1JpeExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMR0ZCUVdFc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dG5Ra0ZET1VNc1ZVRkJWU3hIUVVGSExHMURRVUUwUWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hoUVVGaExFTkJRVU1zUTBGQlF6dG5Ra0ZETDBRc1NVRkJTU3hSUVVGUk8yOUNRVUZSTEVsQlFVc3NRMEZCUXl4aFFVRmhMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU03WVVGRGVrUTdPMmRDUVVGTkxFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNN1VVRkRMME1zUTBGQlF6dFJRVkZOTEdWQlFXVXNRMEZCUXl4aFFVRnhRanRaUVVONFF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWxCUVVrc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNZVUZCWVN4RFFVRkRMRVZCUVVVN1owSkJRM1pFTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hoUVVGaExHdEZRVUZyUlN4RFFVRkRMRU5CUVVNN1lVRkRlRWM3V1VGRFJDeExRVUZMTEVOQlFVTXNaVUZCWlN4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xbEJReTlDTEVsQlFVc3NRMEZCUXl4aFFVRmhMRU5CUVVNc1IwRkJSeXhUUVVGVExFTkJRVU03VVVGRE0wTXNRMEZCUXp0UlFXTk5MRkZCUVZFc1EwRkJReXhoUVVGdFF5eEZRVUZGTEZkQlFXMUNMRVZCUVVVc1MwRkJZenRaUVVOd1JpeEpRVUZKTEdGQlFXRXNSMEZCUnl4SlFVRkpMRU5CUVVNN1dVRkRla0lzU1VGQlNTeERRVUZETEVOQlFVTXNZVUZCWVN4WlFVRlpMRmRCUVZjc1EwRkJReXhGUVVGRk8yZENRVU42UXl4aFFVRmhMRWRCUVVjc1YwRkJWeXhEUVVGRE8yZENRVU0xUWl4WFFVRlhMRWRCUVVjc1lVRkJZU3hEUVVGRE8yZENRVU0xUWl4aFFVRmhMRWRCUVVjc1NVRkJTU3hEUVVGRE8yRkJRM2hDTzJsQ1FVRk5MRWxCUVVrc1MwRkJTenRuUWtGQlJTeGhRVUZoTEVkQlFVY3NTMEZCU3l4RFFVRkRPMWxCUTNoRExHRkJRV0VzUTBGQlF5eExRVUZMTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmRCUVZjc1JVRkJSU3hoUVVGaExFTkJRVU1zUTBGQlF6dFJRVU5vUlN4RFFVRkRPMUZCWVUwc1YwRkJWeXhEUVVGRExHRkJRVzFETEVWQlFVVXNTVUZCWVR0WlFVTnFSU3hKUVVGSkxHRkJRV0VzUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZEZWtJc1NVRkJTU3hEUVVGRExFTkJRVU1zWVVGQllTeFpRVUZaTEZkQlFWY3NRMEZCUXl4RlFVRkZPMmRDUVVONlF5eGhRVUZoTEVkQlFVY3NZVUZCWVN4RFFVRkRPMmRDUVVNNVFpeGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRPMkZCUTNoQ08ybENRVUZOTEVsQlFVa3NTVUZCU1R0blFrRkJSU3hoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETzFsQlEzUkRMRWxCUVVrc1lVRkJZVHRuUWtGQlJTeGhRVUZoTEVOQlFVTXNTMEZCU3l4RFFVRkRMR05CUVdNc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dFJRVU42UlN4RFFVRkRPMUZCWTAwc1RVRkJUVHRaUVVOVUxFMUJRVTBzU1VGQlNTeEhRVUZ0UWl4RlFVRkZMRU5CUVVNN1dVRkRhRU1zUzBGQlN5eE5RVUZOTEVkQlFVY3NTVUZCU1N4SlFVRkpMRVZCUVVVN1owSkJRM0JDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExGTkJRVk1zUlVGQlJUdHZRa0ZEZWtJc1RVRkJUU3hQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMjlDUVVNeFFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1QwRkJUeXhEUVVGRE8ybENRVU4yUWp0aFFVTktPMWxCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU03VVVGRGFFSXNRMEZCUXp0UlFWVlRMR05CUVdNN1dVRkZjRUlzU1VGQlNTeERRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlpMRU5CUVVNc1QwRkJUeXhGUVVGRk8yZENRVVZzUXl4SlFVRkpMR0ZCUVdFc1IwRkJSeXhKUVVGSkxFTkJRVU03WjBKQlEzcENMRWxCUVVrc1pVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTTdiMEpCUVVVc1lVRkJZU3hIUVVGSExIVkNRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1JVRkJSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0blFrRkRjRWNzU1VGQlNTeGxRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJRenR2UWtGQlJTeGhRVUZoTEVkQlFXTXNTVUZCU1N4RFFVRkRMR05CUVdVc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1owSkJRM3BITEVsQlFVa3NZVUZCWVN4RlFVRkZPMjlDUVVObUxFMUJRVTBzVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0dlFrRkRka1FzVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4VFFVRlRMRVZCUVVVc1EwRkJReXhsUVVGbExFTkJRVU1zWVVGQllTeEZRVUZGTEZkQlFWY3NRMEZCUXl4RFFVRkRPMjlDUVVONFJTeFZRVUZWTEVOQlFVTXNWMEZCVnl4RFFVRlpMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdhVUpCUXpGRU8yRkJRMG83VVVGRFRDeERRVUZETzFGQlZWTXNiVUpCUVcxQ0xFdEJRVmNzUTBGQlF6dFJRVkV2UWl4cFFrRkJhVUlzUzBGQlZ5eERRVUZETzFGQlV6ZENMRzlDUVVGdlFpeExRVUZYTEVOQlFVTTdVVUZUYUVNc1pVRkJaU3hMUVVGWExFTkJRVU03VVVGUk0wSXNZVUZCWVN4TFFVRlhMRU5CUVVNN1VVRlJla0lzWjBKQlFXZENMRXRCUVZjc1EwRkJRenRSUVZNNVFpeG5Ra0ZCWjBJN1dVRkRjRUlzVFVGQlRTeFRRVUZUTEVkQlFVY3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMWxCUXk5RUxFMUJRVTBzVjBGQlZ5eEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkZMRTFCUVUwc1MwRkJTeXhIUVVGSExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRlRU1zU1VGQlNTeFZRVUZWTEVkQlFVY3NTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1RVRkJUU3hEUVVGRE8xbEJRM3BFTEU5QlFVOHNVVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExGTkJRVk1zU1VGQlNTeFZRVUZWTEVWQlFVVXNRMEZCUXl4RlFVRkZPMmRDUVVNeFJDeFZRVUZWTEVWQlFVVXNRMEZCUXp0aFFVTm9RanRaUVVORUxFOUJRVThzUjBGQlJ5eFRRVUZUTEVsQlFVa3NWVUZCVlN4RlFVRkZMRU5CUVVNN1VVRkRlRU1zUTBGQlF6czdTVUV4WlhOQ0xEWkNRVUZsTEVkQlFWa3NTVUZCU1N4RFFVRkRPMGxCVTNwRExDdERRVUZwUXl4SFFVRlpMRXRCUVVzc1EwRkJRenRKUVN0RGNFUTdVVUZCV2l4elFrRkJVeXhGUVVGRk96czJRMEZCTmtNN1NVRlJOME03VVVGQldDeHhRa0ZCVVN4RlFVRkZPenN3UkVGQmFVUTdTVUZUYUVRN1VVRkJXQ3h4UWtGQlVTeEZRVUZGT3p0dlJFRkJhMFk3U1VGVmRrUTdVVUZCY2tNc2NVSkJRVkVzUTBGQlF5eEZRVUZGTEdkQ1FVRm5RaXhGUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZET3p0NVJFRkJiVVk3U1VFd1dqVklMRTlCUVU4c1lVRkJZU3hEUVVGRE8wRkJRM3BDTEVOQlFVTTdRVUV4WjBKRUxHOUVRVEJuUWtNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEJhc2VDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuICAgIGNvbnN0cnVjdGVkQ2FsbGJhY2soKSB7IH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHsgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkgeyB9XG4gICAgYWRvcHRlZENhbGxiYWNrKCkgeyB9XG59XG5leHBvcnRzLkJhc2VDb250cm9sbGVyID0gQmFzZUNvbnRyb2xsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRbUZ6WlVOdmJuUnliMnhzWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyTnNhV1Z1ZEM5MGN5OXNhV0l2UW1GelpVTnZiblJ5YjJ4c1pYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGUFFTeE5RVUZoTEdOQlFXTTdTVUZGZGtJc1owSkJRV2RDTEVOQlFVTTdTVUZUVUN4dFFrRkJiVUlzUzBGQlN5eERRVUZETzBsQlVYcENMR2xDUVVGcFFpeExRVUZMTEVOQlFVTTdTVUZUZGtJc2IwSkJRVzlDTEV0QlFVc3NRMEZCUXp0SlFWTXhRaXhsUVVGbExFdEJRVXNzUTBGQlF6dERRVU5zUXp0QlFYUkRSQ3gzUTBGelEwTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQ2xpZW50TW9kZWxfMTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgQkRPTW9kZWxfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Nb2RlbFwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L3V0aWxzL3V0aWxcIik7XG5jb25zdCBmcmFtZXdvcmtfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2ZyYW1ld29ya1wiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IExvZ2dlcl8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0xvZ2dlclwiKTtcbmNvbnN0IERhdGFiYXNlTWFuYWdlcl8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0RhdGFiYXNlTWFuYWdlclwiKTtcbmNvbnN0IFdhdGNoZWRfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9XYXRjaGVkXCIpO1xuY29uc3QgdXRpbF8yID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IE1vZGVsUmVnaXN0cnlfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Nb2RlbFJlZ2lzdHJ5XCIpO1xuY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcl8xLkxvZ2dlcigpO1xuY29uc3QgZGF0YWJhc2VNYW5hZ2VyID0gRGF0YWJhc2VNYW5hZ2VyXzEuRGF0YWJhc2VNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG5sZXQgQ2xpZW50TW9kZWwgPSBDbGllbnRNb2RlbF8xID0gY2xhc3MgQ2xpZW50TW9kZWwgZXh0ZW5kcyBCRE9Nb2RlbF8xLkJET01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5pc0NsaWVudE1vZGVsID0gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlQnlJRChpZCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBtb2RlbCA9IE1vZGVsUmVnaXN0cnlfMS5Nb2RlbFJlZ2lzdHJ5LmdldEluc3RhbmNlKCkuZ2V0TW9kZWxCeUlkKGlkLCB0aGlzKTtcbiAgICAgICAgICAgIGlmICghbW9kZWwpXG4gICAgICAgICAgICAgICAgbW9kZWwgPSBuZXcgdGhpcygpO1xuICAgICAgICAgICAgY29uc3QgZGF0YUZyb21Mb2NhbERCID0gYXdhaXQgZGF0YWJhc2VNYW5hZ2VyXG4gICAgICAgICAgICAgICAgLmRhdGFiYXNlKG1vZGVsLmRhdGFiYXNlTmFtZSlcbiAgICAgICAgICAgICAgICAuY29sbGVjdGlvbihtb2RlbC5jb2xsZWN0aW9uTmFtZSlcbiAgICAgICAgICAgICAgICAuZ2V0KGlkKTtcbiAgICAgICAgICAgIGlmIChkYXRhRnJvbUxvY2FsREIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwZW5kaW5nUHJvbWlzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhRnJvbUxvY2FsREIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFGcm9tTG9jYWxEQi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RlbEVsZW0gPSBSZWZsZWN0LmdldChtb2RlbCwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrbGFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtID0gZGF0YUZyb21Mb2NhbERCW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29ycmVzcG9uZGluZ0xpc3RMaWtlREIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbEVsZW0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlc3BvbmRpbmdMaXN0TGlrZURCID0gbW9kZWxFbGVtLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIENsaWVudE1vZGVsXzEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5nZXRSZWZlcmVuY2VTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbSBpbnN0YW5jZW9mIEFycmF5ICYmIHV0aWxfMi5kaWZmZXJlbmNlKGNvcnJlc3BvbmRpbmdMaXN0TGlrZURCLCBlbGVtKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwZW5kaW5nSXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZyYW1ld29ya18xLmlzUmVmZXJlbmNlU3RyaW5nKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZQYXJ0cyA9IGl0ZW0uc3BsaXQoXCI6XCIpWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gcmVmUGFydHNbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrbGFzcyA9IHJlcXVpcmUoYC4vLi4vbW9kZWxzLyR7Y2xhc3NOYW1lfS50c2ApW2NsYXNzTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nSXRlbXMucHVzaChrbGFzcy5nZXRJbnN0YW5jZUJ5SUQocmVmUGFydHNbMl0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ1Byb21pc2VzLnB1c2goUHJvbWlzZS5hbGwocGVuZGluZ0l0ZW1zKS50aGVuKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZnJhbWV3b3JrXzEuaXNSZWZlcmVuY2VTdHJpbmcoZWxlbSkgJiYgZWxlbSAhPT0gbW9kZWwuZ2V0UmVmZXJlbmNlU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZQYXJ0cyA9IGVsZW0uc3BsaXQoXCI6XCIpWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHJlZlBhcnRzWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtsYXNzID0gcmVxdWlyZShgLi8uLi9tb2RlbHMvJHtjbGFzc05hbWV9LnRzYClbY2xhc3NOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nUHJvbWlzZXMucHVzaChrbGFzcy5nZXRJbnN0YW5jZUJ5SUQocmVmUGFydHNbMl0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwZW5kaW5nUHJvbWlzZXMpO1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obW9kZWwsIGRhdGFGcm9tTG9jYWxEQik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW1vZGVsLmlkLmluY2x1ZGVzKFwicGVuZGluZ1wiKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShtb2RlbCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlc0J5QXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBNb2RlbFJlZ2lzdHJ5XzEuTW9kZWxSZWdpc3RyeS5nZXRJbnN0YW5jZSgpLmdldE1vZGVsc0J5QXR0cmlidXRlcyhhdHRyaWJ1dGVzKTtcbiAgICB9XG4gICAgZ2V0TmFtZXNwYWNlZFN0b3JhZ2Uoa2V5LCBuc1Byb3AsIGZvcmNlTlMpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxfMS5nZXROYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5zUHJvcCwgZm9yY2VOUyk7XG4gICAgfVxuICAgIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGtleSwgbmV3VmFsLCBuc1Byb3ApIHtcbiAgICAgICAgcmV0dXJuIHV0aWxfMS5zZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSh0aGlzLCBrZXksIG5ld1ZhbCwgbnNQcm9wKTtcbiAgICB9XG4gICAgZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlKGtleSwgbnNQcm9wKSB7XG4gICAgICAgIHJldHVybiB1dGlsXzEuZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlKHRoaXMsIGtleSwgbnNQcm9wKTtcbiAgICB9XG4gICAgYXN5bmMgc2F2ZShhdHRyKSB7XG4gICAgICAgIGNvbnN0IGRlZmluZWRBdHRyaWJ1dGVzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLCBcImRlZmluZWRBdHRyaWJ1dGVzXCIpO1xuICAgICAgICBpZiAoIWRlZmluZWRBdHRyaWJ1dGVzIHx8IGF0dHIgJiYgIWRlZmluZWRBdHRyaWJ1dGVzLmhhcyhhdHRyKSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgZGVmaW5lZCBhdHRyaWJ1dGVzXCIpO1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gYXR0ciA/IFthdHRyXSA6IGRlZmluZWRBdHRyaWJ1dGVzLmtleXMoKTtcbiAgICAgICAgY29uc3QgdW5zYXZlZENoYW5nZXMgPSBhd2FpdCB0aGlzLmdldFVuc2F2ZWRDaGFuZ2VzKCk7XG4gICAgICAgIGNvbnN0IHRvU2F2ZSA9IHt9O1xuICAgICAgICBjb25zdCBzZW5kVG9TZXJ2ZXIgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlcykge1xuICAgICAgICAgICAgaWYgKHVuc2F2ZWRDaGFuZ2VzLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJBdHRyID0gYXR0cmlidXRlO1xuICAgICAgICAgICAgICAgIGxldCBwcm94eVZhbCA9IHV0aWxfMi5nZXRQcm94eVRhcmdldCh1bnNhdmVkQ2hhbmdlc1tzdHJBdHRyXSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb3h5VmFsIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJveHlWYWwgPSBwcm94eVZhbC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgQ2xpZW50TW9kZWxfMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmdldFJlZmVyZW5jZVN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxfMi5nZXRQcm94eVRhcmdldChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcm94eVZhbCBpbnN0YW5jZW9mIENsaWVudE1vZGVsXzEpXG4gICAgICAgICAgICAgICAgICAgIHByb3h5VmFsID0gcHJveHlWYWwuZ2V0UmVmZXJlbmNlU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgbGV0IHdpbGRDYXJkTWV0YWRhdGEgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcywgc3RyQXR0cik7XG4gICAgICAgICAgICAgICAgaWYgKHdpbGRDYXJkTWV0YWRhdGEgaW5zdGFuY2VvZiBXYXRjaGVkXzEuV2F0Y2hlZClcbiAgICAgICAgICAgICAgICAgICAgd2lsZENhcmRNZXRhZGF0YSA9IHdpbGRDYXJkTWV0YWRhdGEuc3ViT2JqZWN0O1xuICAgICAgICAgICAgICAgIGlmICghd2lsZENhcmRNZXRhZGF0YS5kb05vdFBlcnNpc3QpXG4gICAgICAgICAgICAgICAgICAgIHRvU2F2ZVtzdHJBdHRyXSA9IHByb3h5VmFsO1xuICAgICAgICAgICAgICAgIGlmICghd2lsZENhcmRNZXRhZGF0YS5ub1NlcnZlckludGVyYWN0aW9uKVxuICAgICAgICAgICAgICAgICAgICBzZW5kVG9TZXJ2ZXJbc3RyQXR0cl0gPSBwcm94eVZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRvU2F2ZSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgZGF0YWJhc2VNYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhYmFzZSh0aGlzLmRhdGFiYXNlTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh0aGlzLmlkLCB0b1NhdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHNlbmRUb1NlcnZlcikubGVuZ3RoKVxuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1Zyhgc2VuZCAke0pTT04uc3RyaW5naWZ5KHNlbmRUb1NlcnZlcil9IHRvIHNlcnZlcmApO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuc2F2ZWRDaGFuZ2VzKTtcbiAgICB9XG4gICAgZGlzY2FyZChfYXR0cikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0VW5zYXZlZENoYW5nZXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb2xsZWN0aW9uTmFtZSlcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIk5vIGNvbGxlY3Rpb25OYW1lIHByb3ZpZGVkXCIpO1xuICAgICAgICBjb25zdCB1bnNhdmVkQ2hhbmdlcyA9IHt9O1xuICAgICAgICBsZXQgZGJDb2xsZWN0aW9uID0gYXdhaXQgZGF0YWJhc2VNYW5hZ2VyLmRhdGFiYXNlKFwiZGVmYXVsdFwiKS5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbk5hbWUpLmdldCh0aGlzLmlkKTtcbiAgICAgICAgY29uc3QgZGVmaW5lZEF0dHJpYnV0ZXMgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMsIFwiZGVmaW5lZEF0dHJpYnV0ZXNcIik7XG4gICAgICAgIGRiQ29sbGVjdGlvbiA9IGRiQ29sbGVjdGlvbiB8fCB7fTtcbiAgICAgICAgaWYgKGRlZmluZWRBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGF0dHIgb2YgZGVmaW5lZEF0dHJpYnV0ZXMua2V5cygpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyQXR0ciA9IGF0dHIudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyVmFsID0gdXRpbF8yLmdldFByb3h5VGFyZ2V0KHRoaXNbYXR0cl0pO1xuICAgICAgICAgICAgICAgIGlmICh1dGlsXzIuaXNBcnJheShhdHRyVmFsKSAmJiB1dGlsXzIuZGlmZmVyZW5jZShhdHRyVmFsLCBkYkNvbGxlY3Rpb25bc3RyQXR0cl0pLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdmVkQ2hhbmdlc1tzdHJBdHRyXSA9IHRoaXNbYXR0cl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHV0aWxfMi5pc09iamVjdChhdHRyVmFsKSAmJiAhdXRpbF8yLmlzRXF1YWwoYXR0clZhbCwgZGJDb2xsZWN0aW9uW3N0ckF0dHJdKSkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdmVkQ2hhbmdlc1tzdHJBdHRyXSA9IHRoaXNbYXR0cl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHV0aWxfMi5pc1ByaW1pdGl2ZShhdHRyVmFsKSAmJiBhdHRyVmFsICE9PSBkYkNvbGxlY3Rpb25bc3RyQXR0cl0pIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXZlZENoYW5nZXNbc3RyQXR0cl0gPSB0aGlzW2F0dHJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuc2F2ZWRDaGFuZ2VzKTtcbiAgICB9XG4gICAgb25UeXBlQ2hlY2tGYWlsKGVycm9yKSB7XG4gICAgICAgIGxvZ2dlci5lcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9XG59O1xuQ2xpZW50TW9kZWwuaXNDbGllbnRNb2RlbCA9IHRydWU7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG5dLCBDbGllbnRNb2RlbC5wcm90b3R5cGUsIFwiaXNDbGllbnRNb2RlbFwiLCB2b2lkIDApO1xuQ2xpZW50TW9kZWwgPSBDbGllbnRNb2RlbF8xID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKClcbl0sIENsaWVudE1vZGVsKTtcbmV4cG9ydHMuQ2xpZW50TW9kZWwgPSBDbGllbnRNb2RlbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyeHBaVzUwVFc5a1pXd3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMk5zYVdWdWRDOTBjeTlzYVdJdlEyeHBaVzUwVFc5a1pXd3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJMSE5FUVVGclJUdEJRVU5zUlN4blJFRkJOa003UVVGRE4wTXNOa05CUVcxSU8wRkJRMjVJTEc5RVFVRjVSRHRCUVVONlJDeHJSRUZCZFVVN1FVRkRka1VzSzBOQlFUUkRPMEZCUXpWRExHbEZRVUU0UkR0QlFVVTVSQ3c0UTBGQk1rTTdRVUZETTBNc01FTkJRWE5ITzBGQlEzUkhMREJFUVVGMVJEdEJRVVYyUkN4TlFVRk5MRTFCUVUwc1IwRkJSeXhKUVVGSkxHVkJRVTBzUlVGQlJTeERRVUZETzBGQlF6VkNMRTFCUVUwc1pVRkJaU3hIUVVGSExHbERRVUZsTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1FVRlhkRVFzU1VGQllTeFhRVUZYTEcxQ1FVRjRRaXhOUVVGaExGZEJRVmtzVTBGQlVTeHRRa0ZCVVR0SlFVRjZRenM3VVVGclFtZERMR3RDUVVGaExFZEJRVmtzU1VGQlNTeERRVUZETzBsQmEwODVSQ3hEUVVGRE8wbEJiRTVWTEUxQlFVMHNRMEZCUXl4bFFVRmxMRU5CUVRKRExFVkJRVmM3VVVGREwwVXNUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJaMElzUzBGQlN5eEZRVUZGTEU5QlFVOHNSVUZCUlN4RlFVRkZPMWxCUTJoRUxFbEJRVWtzUzBGQlN5eEhRVUZITERaQ1FVRmhMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zV1VGQldTeERRVUZETEVWQlFVVXNSVUZCUlN4SlFVRkpMRU5CUVd0Q0xFTkJRVU03V1VGRGFFWXNTVUZCU1N4RFFVRkRMRXRCUVVzN1owSkJRVVVzUzBGQlN5eEhRVUZITEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNN1dVRkRMMElzVFVGQlRTeGxRVUZsTEVkQlFVY3NUVUZCVFN4bFFVRmxPMmxDUVVONFF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJRenRwUWtGRE5VSXNWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU03YVVKQlEyaERMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU5pTEVsQlFVa3NaVUZCWlN4RlFVRkZPMmRDUVVOcVFpeE5RVUZOTEdWQlFXVXNSMEZCZVVJc1JVRkJSU3hEUVVGRE8yZENRVU5xUkN4TFFVRkxMRTFCUVUwc1IwRkJSeXhKUVVGSkxHVkJRV1VzUlVGQlJUdHZRa0ZETDBJc1NVRkJTU3hsUVVGbExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPM2RDUVVOeVF5eE5RVUZOTEZOQlFWTXNSMEZCUnl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0M1FrRkRNVU1zU1VGQlNTeExRVUY1UWl4RFFVRkRPM2RDUVVNNVFpeEpRVUZKTEVsQlFVa3NSMEZCUnl4bFFVRmxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03ZDBKQlEyaERMRWxCUVVrc2RVSkJRWFZDTEVkQlFVY3NSVUZCUlN4RFFVRkRPM2RDUVVWcVF5eEpRVUZKTEZOQlFWTXNXVUZCV1N4TFFVRkxMRVZCUVVVN05FSkJRelZDTEhWQ1FVRjFRaXhIUVVGSExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSVHRuUTBGRE4wTXNTVUZCU1N4SlFVRkpMRmxCUVZrc1lVRkJWenR2UTBGQlJTeFBRVUZQTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUlVGQlJTeERRVUZETzJkRFFVTnNSU3hQUVVGUExFbEJRVWtzUTBGQlF6czBRa0ZEYUVJc1EwRkJReXhEUVVGRExFTkJRVU03ZVVKQlEwNDdkMEpCUTBRc1NVRkJTU3hKUVVGSkxGbEJRVmtzUzBGQlN5eEpRVUZKTEdsQ1FVRlZMRU5CUVVNc2RVSkJRWFZDTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1RVRkJUU3hGUVVGRk96UkNRVU16UlN4TlFVRk5MRmxCUVZrc1IwRkJlVUlzUlVGQlJTeERRVUZET3pSQ1FVTTVReXhMUVVGTExFbEJRVWtzU1VGQlNTeEpRVUZKTEVsQlFVa3NSVUZCUlR0blEwRkRia0lzU1VGQlNTdzJRa0ZCYVVJc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdHZRMEZEZWtJc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRMEZEY0VNc1RVRkJUU3hUUVVGVExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlEUVVNNVFpeExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRMR1ZCUVdVc1UwRkJVeXhMUVVGTExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0dlEwRkRNVVFzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1pVRkJaU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTzNkRFFVTnFSU3hKUVVGSkxFZEJRVWNzVFVGQlRTeERRVUZETzI5RFFVTnNRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJsRFFVTlFPelpDUVVOS096UkNRVU5FTEdWQlFXVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8zbENRVU14UkRzMlFrRkJUU3hKUVVGSkxEWkNRVUZwUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFbEJRVWtzUzBGQlN5eExRVUZMTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzUlVGQlJUczBRa0ZEZGtVc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6czBRa0ZEY0VNc1RVRkJUU3hUUVVGVExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPelJDUVVNNVFpeExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRMR1ZCUVdVc1UwRkJVeXhMUVVGTExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXpzMFFrRkRNVVFzWlVGQlpTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1pVRkJaU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTzJkRFFVTndSU3hKUVVGSkxFZEJRVWNzVFVGQlRTeERRVUZET3pSQ1FVTnNRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzNsQ1FVTlFPM0ZDUVVOS08ybENRVU5LTzJkQ1FVTkVMRTFCUVUwc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXp0blFrRkRia01zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1pVRkJaU3hEUVVGRExFTkJRVU03WVVGRGVrTTdXVUZEUkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRPMmRDUVVGRkxFOUJRVThzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUTNwRUxFOUJRVThzVDBGQlR5eEZRVUZGTEVOQlFVTTdVVUZEY2tJc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFVDeERRVUZETzBsQllVMHNUVUZCVFN4RFFVRkRMSGRDUVVGM1FpeERRVUV5UXl4VlFVRXdRanRSUVVOMlJ5eFBRVUZQTERaQ1FVRmhMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1ZVRkJWU3hEUVVGclFpeERRVUZETzBsQlF6RkdMRU5CUVVNN1NVRlpUU3h2UWtGQmIwSXNRMEZCUXl4SFFVRlhMRVZCUVVVc1RVRkJaU3hGUVVGRkxFOUJRV2RDTzFGQlEzUkZMRTlCUVU4c01rSkJRVzlDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1JVRkJSU3hOUVVGTkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdTVUZETlVRc1EwRkJRenRKUVZsTkxEQkNRVUV3UWl4RFFVRkRMRWRCUVZjc1JVRkJSU3hOUVVGWExFVkJRVVVzVFVGQlpUdFJRVU4yUlN4UFFVRlBMR2xEUVVFd1FpeERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc1RVRkJUU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzBsQlEycEZMRU5CUVVNN1NVRlhUU3d5UWtGQk1rSXNRMEZCUXl4SFFVRlhMRVZCUVVVc1RVRkJaVHRSUVVNelJDeFBRVUZQTEd0RFFVRXlRaXhEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRNVVFzUTBGQlF6dEpRVkZOTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJaME03VVVGRE9VTXNUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3h0UWtGQmJVSXNRMEZCUXl4RFFVRkRPMUZCUTJwRkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETzFsQlFVVXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXcwUWtGQk5FSXNRMEZCUXl4RFFVRkRPMUZCUXpsSExFMUJRVTBzVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZETlVRc1RVRkJUU3hqUVVGakxFZEJRVzFDTEUxQlFVMHNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTEVOQlFVTTdVVUZEZEVVc1RVRkJUU3hOUVVGTkxFZEJRVzFDTEVWQlFVVXNRMEZCUXp0UlFVTnNReXhOUVVGTkxGbEJRVmtzUjBGQmJVSXNSVUZCUlN4RFFVRkRPMUZCUTNoRExFdEJRVXNzVFVGQlRTeFRRVUZUTEVsQlFVa3NWVUZCVlN4RlFVRkZPMWxCUTJoRExFbEJRVWtzWTBGQll5eERRVUZETEdOQlFXTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRuUWtGRE1VTXNUVUZCVFN4UFFVRlBMRWRCUVZjc1UwRkJVeXhEUVVGRE8yZENRVU5zUXl4SlFVRkpMRkZCUVZFc1IwRkJSeXh4UWtGQll5eERRVUZETEdOQlFXTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU4yUkN4SlFVRkpMRkZCUVZFc1dVRkJXU3hMUVVGTExFVkJRVVU3YjBKQlF6TkNMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRVZCUVVVN2QwSkJRemRDTEVsQlFVa3NTVUZCU1N4WlFVRlpMR0ZCUVZjc1JVRkJSVHMwUWtGRE4wSXNUMEZCVHl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNRMEZCUXp0NVFrRkRjRU03ZDBKQlEwUXNUMEZCVHl4eFFrRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzI5Q1FVTm9ReXhEUVVGRExFTkJRVU1zUTBGQlF6dHBRa0ZEVGp0blFrRkRSQ3hKUVVGSkxGRkJRVkVzV1VGQldTeGhRVUZYTzI5Q1FVRkZMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1EwRkJRenRuUWtGRk9VVXNTVUZCU1N4blFrRkJaMElzUjBGQll5dzRRa0ZCYlVJc1EwRkJReXhKUVVGSkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdaMEpCUTNKRkxFbEJRVWtzWjBKQlFXZENMRmxCUVZrc2FVSkJRVTg3YjBKQlFVVXNaMEpCUVdkQ0xFZEJRVWNzWjBKQlFXZENMRU5CUVVNc1UwRkJjMElzUTBGQlF6dG5Ra0ZGY0Vjc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRmxCUVZrN2IwSkJRVVVzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJRenRuUWtGRkwwUXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEcxQ1FVRnRRanR2UWtGQlJTeFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRE8yRkJReTlGTzFOQlEwbzdVVUZEUkN4SlFVRkpPMWxCUTBFc1NVRkJTU3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSVHRuUWtGRE5VSXNUVUZCVFN4bFFVRmxPM0ZDUVVOb1FpeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJRenR4UWtGRE0wSXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU03Y1VKQlF5OUNMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMkZCUTJoRE8xbEJRMFFzU1VGQlNTeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFMUJRVTA3WjBKQlFVVXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNXVUZCV1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8xTkJRM2hITzFGQlFVTXNUMEZCVHl4TFFVRkxMRVZCUVVVN1dVRkRXaXhQUVVGUExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1UwRkRhRU03VVVGRFJDeFBRVUZQTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1kwRkJiVU1zUTBGQlF5eERRVUZETzBsQlEyaEZMRU5CUVVNN1NVRlRUU3hQUVVGUExFTkJRVU1zUzBGQmFVTTdVVUZETlVNc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eDVRa0ZCZVVJc1EwRkJReXhEUVVGRE8wbEJReTlETEVOQlFVTTdTVUZSVFN4TFFVRkxMRU5CUVVNc2FVSkJRV2xDTzFGQlF6RkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll6dFpRVUZGTEU5QlFVOHNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXcwUWtGQk5FSXNRMEZCUXl4RFFVRkRPMUZCUXpsRkxFMUJRVTBzWTBGQll5eEhRVUZ6UWl4RlFVRkZMRU5CUVVNN1VVRkROME1zU1VGQlNTeFpRVUZaTEVkQlFVY3NUVUZCVFN4bFFVRmxMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNeFJ5eE5RVUZOTEdsQ1FVRnBRaXhIUVVGSExITkNRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRzFDUVVGdFFpeERRVUZETEVOQlFVTTdVVUZEYWtVc1dVRkJXU3hIUVVGSExGbEJRVmtzU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEYkVNc1NVRkJTU3hwUWtGQmFVSXNSVUZCUlR0WlFVTnVRaXhMUVVGTExFMUJRVTBzU1VGQlNTeEpRVUZKTEdsQ1FVRnBRaXhEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTzJkQ1FVTjZReXhOUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1owSkJRMmhETEUxQlFVMHNUMEZCVHl4SFFVRkhMSEZDUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRek5ETEVsQlFVa3NZMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxHbENRVUZWTEVOQlFVTXNUMEZCVHl4RlFVRkZMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlR0dlFrRkRkRVFzWTBGQlpTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dHBRa0ZETVVRN2NVSkJRVTBzU1VGQlNTeGxRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZGTEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhGUVVGRk8yOUNRVU55UkN4alFVRmxMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmxDUVVNeFJEdHhRa0ZCVFN4SlFVRkpMR3RDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NUMEZCVHl4TFFVRkxMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJUdHZRa0ZEYWtRc1kwRkJaU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRwUWtGRE1VUTdZVUZEU2p0VFFVTktPMUZCUTBRc1QwRkJUeXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMGxCUXpORExFTkJRVU03U1VGVlV5eGxRVUZsTEVOQlFVTXNTMEZCV1R0UlFVTnNReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRKUVVOb1F5eERRVUZETzBOQlJVb3NRMEZCUVR0QlFURlBNRUlzZVVKQlFXRXNSMEZCV1N4SlFVRkpMRU5CUVVNN1FVRlJla003U1VGQldDeHhRa0ZCVVN4RlFVRkZPenRyUkVGQkswTTdRVUZzUW1wRUxGZEJRVmM3U1VGRWRrSXNORUpCUVdVc1JVRkJSVHRIUVVOTUxGZEJRVmNzUTBGdlVIWkNPMEZCY0ZCWkxHdERRVUZYSW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQkRPUm91dGVfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Sb3V0ZVwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBMb2dnZXJfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9Mb2dnZXJcIik7XG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyXzEuTG9nZ2VyKCk7XG5jbGFzcyBDbGllbnRSb3V0ZSBleHRlbmRzIEJET1JvdXRlXzEuQkRPUm91dGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmlzQ2xpZW50Um91dGUgPSB0cnVlO1xuICAgIH1cbiAgICBnZXQgcm91dGVyKCkge1xuICAgICAgICBjb25zdCByb3V0ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCByb3V0ZSBvZiB0aGlzLnJvdXRlcykge1xuICAgICAgICAgICAgcm91dGVzW2Ake3RoaXMucm91dGVyTmFtZVNwYWNlfS8ke3JvdXRlfWAucmVwbGFjZShcIi8vXCIsIFwiL1wiKV0gPSB0aGlzLmhhbmRsZUdldC5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3V0ZXM7XG4gICAgfVxuICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gc3VwZXIudGVtcGxhdGVQYXJhbXMocGFyYW1zKTtcbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlR2V0KHBhcmFtcykge1xuICAgICAgICBsb2dnZXIubG9nKHV0aWxfMS5tZXJnZShhd2FpdCB0aGlzLnRlbXBsYXRlUGFyYW1zRnJvbVNlcnZlcigpLCBhd2FpdCB0aGlzLnRlbXBsYXRlUGFyYW1zKHBhcmFtcykpKTtcbiAgICB9XG4gICAgYXN5bmMgdGVtcGxhdGVQYXJhbXNGcm9tU2VydmVyKCkge1xuICAgICAgICBsZXQgdXJsVG9Bc2tGb3IgPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgaWYgKCF1cmxUb0Fza0ZvcilcbiAgICAgICAgICAgIHVybFRvQXNrRm9yID0gYC9gO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnWC1HYW1lLUFzLUpTT04nOiAndHJ1ZScgfSk7XG4gICAgICAgIHJldHVybiAoYXdhaXQgZmV0Y2godXJsVG9Bc2tGb3IsIHsgaGVhZGVycyB9KSkuanNvbigpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ2xpZW50Um91dGUgPSBDbGllbnRSb3V0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyeHBaVzUwVW05MWRHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMk5zYVdWdWRDOTBjeTlzYVdJdlEyeHBaVzUwVW05MWRHVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTeG5SRUZCTmtNN1FVRkROME1zTUVOQlFYZERPMEZCUTNoRExDdERRVUUwUXp0QlFVVTFReXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEdWQlFVMHNSVUZCUlN4RFFVRkRPMEZCVlRWQ0xFMUJRV0VzVjBGQldTeFRRVUZSTEcxQ1FVRlJPMGxCUVhwRE96dFJRVkZ2UWl4clFrRkJZU3hIUVVGWkxFbEJRVWtzUTBGQlF6dEpRWE5FYkVRc1EwRkJRenRKUVRsRFJ5eEpRVUZYTEUxQlFVMDdVVUZEWWl4TlFVRk5MRTFCUVUwc1IwRkJjVU1zUlVGQlJTeERRVUZETzFGQlEzQkVMRXRCUVVzc1RVRkJUU3hMUVVGTExFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlR0WlFVTTNRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNaVUZCWlN4SlFVRkpMRXRCUVVzc1JVRkJSU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVNM1JqdFJRVU5FTEU5QlFVOHNUVUZCVFN4RFFVRkRPMGxCUTJ4Q0xFTkJRVU03U1VGWFV5eExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVhOQ08xRkJRMnBFTEU5QlFVOHNTMEZCU3l4RFFVRkRMR05CUVdNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU40UXl4RFFVRkRPMGxCVTFNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZ6UWp0UlFVTTFReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEZsQlFVc3NRMEZCUXl4TlFVRk5MRWxCUVVrc1EwRkJReXgzUWtGQmQwSXNSVUZCUlN4RlFVRkZMRTFCUVUwc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRhRWNzUTBGQlF6dEpRVlZQTEV0QlFVc3NRMEZCUXl4M1FrRkJkMEk3VVVGRGJFTXNTVUZCU1N4WFFVRlhMRWRCUVVjc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF6dFJRVU53UXl4SlFVRkpMRU5CUVVNc1YwRkJWenRaUVVGRkxGZEJRVmNzUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZEY0VNc1RVRkJUU3hQUVVGUExFZEJRVWNzU1VGQlNTeFBRVUZQTEVOQlFVTXNSVUZCUlN4blFrRkJaMElzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpGRUxFOUJRVThzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4WFFVRlhMRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1NVRkRNVVFzUTBGQlF6dERRVU5LTzBGQk9VUkVMR3REUVRoRVF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJET0NvbmZpZ01hbmFnZXJfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Db25maWdNYW5hZ2VyXCIpO1xuY2xhc3MgQ29uZmlnTWFuYWdlciBleHRlbmRzIEJET0NvbmZpZ01hbmFnZXJfMS5CRE9Db25maWdNYW5hZ2VyIHtcbiAgICBzZXQoX2NvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIGxvYWQoX2NvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIGdldENhY2hlKF9jb25maWcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgICBzZXRDYWNoZShfY29uZmlnLCBfdmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29uZmlnTWFuYWdlciA9IENvbmZpZ01hbmFnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMjl1Wm1sblRXRnVZV2RsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyeHBZaTlEYjI1bWFXZE5ZVzVoWjJWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc1owVkJRVFpFTzBGQldUZEVMRTFCUVdFc1lVRkJZeXhUUVVGUkxHMURRVUZuUWp0SlFWTjRReXhIUVVGSExFTkJRVU1zVDBGQlpUdFJRVU4wUWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExIbENRVUY1UWl4RFFVRkRMRU5CUVVNN1NVRkRMME1zUTBGQlF6dEpRVlZUTEVsQlFVa3NRMEZCUXl4UFFVRmxPMUZCUXpGQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU1zUTBGQlF6dEpRVU12UXl4RFFVRkRPMGxCVlZNc1VVRkJVU3hEUVVGRExFOUJRV1U3VVVGRE9VSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4RFFVRkRPMGxCUXk5RExFTkJRVU03U1VGWFV5eFJRVUZSTEVOQlFVTXNUMEZCWlN4RlFVRkZMRTFCUVZjN1VVRkRNME1zVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eERRVUZETzBsQlF5OURMRU5CUVVNN1EwRkRTanRCUVdwRVJDeHpRMEZwUkVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBCRE9EYXRhYmFzZU1hbmFnZXJfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9EYXRhYmFzZU1hbmFnZXJcIik7XG5jb25zdCBsb2NhbGZvcmFnZV8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImxvY2FsZm9yYWdlXCIpKTtcbmNsYXNzIERhdGFiYXNlTWFuYWdlciBleHRlbmRzIEJET0RhdGFiYXNlTWFuYWdlcl8xLkJET0RhdGFiYXNlbWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZGF0YWJhc2VzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghRGF0YWJhc2VNYW5hZ2VyLmluc3RhbmNlKVxuICAgICAgICAgICAgRGF0YWJhc2VNYW5hZ2VyLmluc3RhbmNlID0gbmV3IERhdGFiYXNlTWFuYWdlcigpO1xuICAgICAgICByZXR1cm4gRGF0YWJhc2VNYW5hZ2VyLmluc3RhbmNlO1xuICAgIH1cbiAgICBkYXRhYmFzZShuYW1lKSB7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGFiYXNlID0gbmFtZTtcbiAgICAgICAgaWYgKCF0aGlzLmRhdGFiYXNlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhYmFzZXMuc2V0KG5hbWUsIGxvY2FsZm9yYWdlXzEuZGVmYXVsdC5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBkcml2ZXI6IFtsb2NhbGZvcmFnZV8xLmRlZmF1bHQuSU5ERVhFRERCLCBsb2NhbGZvcmFnZV8xLmRlZmF1bHQuV0VCU1FMXVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRDb2xsZWN0aW9uO1xuICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50R3JhcGg7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRWaWV3O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY29sbGVjdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuY3VycmVudENvbGxlY3Rpb24gPSBgY29sbGVjdGlvbl8ke25hbWV9YDtcbiAgICAgICAgdGhpcy5nZXREYXRhYmFzZSgpLmNvbmZpZyh7IHN0b3JlTmFtZTogdGhpcy5jdXJyZW50Q29sbGVjdGlvbiB9KTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudEdyYXBoO1xuICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50VmlldztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHZpZXcobmFtZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gYHZpZXdfJHtuYW1lfWA7XG4gICAgICAgIHRoaXMuZ2V0RGF0YWJhc2UoKS5jb25maWcoeyBzdG9yZU5hbWU6IHRoaXMuY3VycmVudFZpZXcgfSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRDb2xsZWN0aW9uO1xuICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50R3JhcGg7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBncmFwaChuYW1lKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEdyYXBoID0gYGdyYXBoXyR7bmFtZX1gO1xuICAgICAgICB0aGlzLmdldERhdGFiYXNlKCkuY29uZmlnKHsgc3RvcmVOYW1lOiB0aGlzLmN1cnJlbnRHcmFwaCB9KTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudENvbGxlY3Rpb247XG4gICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRWaWV3O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0KGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGFiYXNlKCkuZ2V0SXRlbShpZCk7XG4gICAgfVxuICAgIGluc2VydChpZCwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5zZXRJdGVtKGlkLCB2YWx1ZSk7XG4gICAgfVxuICAgIHVwZGF0ZShpZCwgdmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZ2V0KGlkKSB8fCB7fTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlc3VsdCwgdmFsdWVzKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmluc2VydChpZCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVsZXRlKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGFiYXNlKCkucmVtb3ZlSXRlbShpZCk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhYmFzZSgpLmNsZWFyKCk7XG4gICAgfVxuICAgIGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5sZW5ndGgoKTtcbiAgICB9XG4gICAga2V5KGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGFiYXNlKCkua2V5KGluZGV4KTtcbiAgICB9XG4gICAga2V5cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5rZXlzKCk7XG4gICAgfVxuICAgIGl0ZXJhdGUoaXRlcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YWJhc2UoKS5pdGVyYXRlKGl0ZXJhdG9yKTtcbiAgICB9XG4gICAgZ2V0RGF0YWJhc2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50RGF0YWJhc2UpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBEYXRhYmFzZSBjaG9zZW5cIik7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFiYXNlcy5nZXQodGhpcy5jdXJyZW50RGF0YWJhc2UpO1xuICAgIH1cbn1cbmV4cG9ydHMuRGF0YWJhc2VNYW5hZ2VyID0gRGF0YWJhc2VNYW5hZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUkdGMFlXSmhjMlZOWVc1aFoyVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlqYkdsbGJuUXZkSE12YkdsaUwwUmhkR0ZpWVhObFRXRnVZV2RsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZEUVN4dlJVRkJhVVU3UVVGRGFrVXNjMFZCUVhORE8wRkJSWFJETEUxQlFXRXNaVUZCZDBZc1UwRkJVU3gxUTBGQmEwSTdTVUZ0UWpOSU8xRkJRMGtzUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZTU2l4alFVRlRMRWRCUVhkQ0xFbEJRVWtzUjBGQlJ5eEZRVUZyUWl4RFFVRkRPMGxCVTI1RkxFTkJRVU03U1VGUVRTeE5RVUZOTEVOQlFVTXNWMEZCVnp0UlFVTnlRaXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEZGQlFWRTdXVUZCUlN4bFFVRmxMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzWlVGQlpTeEZRVUZGTEVOQlFVTTdVVUZEYUVZc1QwRkJUeXhsUVVGbExFTkJRVU1zVVVGQlVTeERRVUZETzBsQlEzQkRMRU5CUVVNN1NVRk5UU3hSUVVGUkxFTkJRVU1zU1VGQlR6dFJRVU51UWl4SlFVRkpMRU5CUVVNc1pVRkJaU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU0xUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkRkRU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxIRkNRVUZYTEVOQlFVTXNZMEZCWXl4RFFVRkRPMmRDUVVOb1JDeEpRVUZKTEVWQlFVVXNTVUZCU1R0blFrRkRWaXhOUVVGTkxFVkJRVVVzUTBGQlF5eHhRa0ZCVnl4RFFVRkRMRk5CUVZNc1JVRkJSU3h4UWtGQlZ5eERRVUZETEUxQlFVMHNRMEZCUXp0aFFVTjBSQ3hEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5RTzFGQlEwUXNUMEZCVHl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTTdVVUZET1VJc1QwRkJUeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETzFGQlEzcENMRTlCUVU4c1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dFJRVU40UWl4UFFVRlBMRWxCUVVrc1EwRkJRenRKUVVOb1FpeERRVUZETzBsQlJVMHNWVUZCVlN4RFFVRkRMRWxCUVU4N1VVRkRja0lzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhIUVVGTkxHTkJRV01zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEYWtRc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRMnBGTEU5QlFVOHNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJRenRSUVVONlFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRlRUlzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEYUVJc1EwRkJRenRKUVVWTkxFbEJRVWtzUTBGQlF5eEpRVUZQTzFGQlEyWXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJUU3hSUVVGUkxFbEJRVWtzUlVGQlJTeERRVUZETzFGQlEzSkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNN1VVRkRPVUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRPMUZCUTNwQ0xFOUJRVThzU1VGQlNTeERRVUZETzBsQlEyaENMRU5CUVVNN1NVRkZUU3hMUVVGTExFTkJRVU1zU1VGQlR6dFJRVU5vUWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGTkxGTkJRVk1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEZGtNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTFSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJRenRSUVVNNVFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRlRUlzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEYUVJc1EwRkJRenRKUVVWTkxFZEJRVWNzUTBGQlF5eEZRVUZWTzFGQlEycENMRTlCUVU4c1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVNeFF5eERRVUZETzBsQlJVMHNUVUZCVFN4RFFVRkRMRVZCUVZVc1JVRkJSU3hMUVVGclF6dFJRVU40UkN4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMnBFTEVOQlFVTTdTVUZGVFN4TlFVRk5MRU5CUVVNc1JVRkJWU3hGUVVGRkxFMUJRVzFETzFGQlEzcEVMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1JVRkJSVHRaUVVONlF5eEpRVUZKTzJkQ1FVTkJMRTFCUVUwc1RVRkJUU3hIUVVGSExFMUJRVTBzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03WjBKQlEzaERMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMmRDUVVNNVFpeE5RVUZOTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzJkQ1FVTTVRaXhQUVVGUExFVkJRVVVzUTBGQlF6dGhRVU5pTzFsQlFVTXNUMEZCVHl4TFFVRkxMRVZCUVVVN1owSkJRMW9zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMkZCUTJwQ08xRkJRMHdzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEVUN4RFFVRkRPMGxCUlUwc1RVRkJUU3hEUVVGRExFVkJRVlU3VVVGRGNFSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zVlVGQlZTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpkRExFTkJRVU03U1VGRlRTeExRVUZMTzFGQlExSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdTVUZEZEVNc1EwRkJRenRKUVVWTkxFMUJRVTA3VVVGRFZDeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dEpRVU4yUXl4RFFVRkRPMGxCUlUwc1IwRkJSeXhEUVVGRExFdEJRV0U3VVVGRGNFSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNwRExFTkJRVU03U1VGRlRTeEpRVUZKTzFGQlExQXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdTVUZEY2tNc1EwRkJRenRKUVVWTkxFOUJRVThzUTBGQlF5eFJRVUU0Ump0UlFVTjZSeXhQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03U1VGRGFFUXNRMEZCUXp0SlFVVlBMRmRCUVZjN1VVRkRaaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVTdXVUZCUlN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRU5CUVVNN1VVRkRha1VzVDBGQlR5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZuUWl4RFFVRkRPMGxCUTI1RkxFTkJRVU03UTBGRlNqdEJRUzlIUkN3d1EwRXJSME1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJET0xvZ2dlcl8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET0xvZ2dlclwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5sZXQgTG9nZ2VyID0gY2xhc3MgTG9nZ2VyIGV4dGVuZHMgQkRPTG9nZ2VyXzEuQkRPTG9nZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICAgICAgc3VwZXIocGFyYW1zKTtcbiAgICAgICAgdGhpcy5sb2dMZXZlbENvbG9ycyA9IHtcbiAgICAgICAgICAgIGxvZzogJ2NvbG9yOiBncmF5OyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgICAgICAgICAgZGVidWc6ICdjb2xvcjogZ3JlZW47IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICBpbmZvOiAnY29sb3I6ICMwMDgwNkI7IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICB3YXJuOiAnY29sb3I6ICM4MDgwMDA7IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICBlcnJvcjogJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkOydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0SGVhZGVyKGxvZ0xldmVsLCBwcmludEVudiA9ICdjb25zb2xlJykge1xuICAgICAgICBjb25zdCBwcm9jSW5mbyA9IHRoaXMuZ2V0UHJvY0luZm8oKTtcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lKCk7XG4gICAgICAgIGNvbnN0IHVwcGVyTG9nTGV2ZWwgPSBsb2dMZXZlbC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2dQb2ludCA9IHRoaXMuZ2V0TG9nUG9pbnQoKTtcbiAgICAgICAgY29uc3QgcmVzZXRTdHlsZSA9ICdjb2xvcjogYmxhY2s7IGZvbnQtd2VpZ2h0OiBub3JtYWwnO1xuICAgICAgICBjb25zdCBtYWdlbnRhID0gJ2NvbG9yOiAjODAwMDgwOyBmb250LXdlaWdodDogbm9ybWFsJztcbiAgICAgICAgY29uc3QgY3lhbiA9ICdjb2xvcjogIzAwODA2QjsgZm9udC13ZWlnaHQ6IG5vcm1hbCc7XG4gICAgICAgIGlmIChwcmludEVudiA9PT0gJ2NvbnNvbGUnKSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRMb2dMZXZlbCA9IHRoaXMubG9nTGV2ZWxDb2xvcnNbbG9nTGV2ZWxdO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkTG9nUG9pbnQgPSBtYWdlbnRhO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkVGltZSA9IGN5YW47XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRQcm9jSW5mbyA9IG1hZ2VudGE7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIGAlY1slYyR7dXBwZXJMb2dMZXZlbH0gJWMtICVjJHtwcm9jSW5mb30gJWMtICVjJHtjdXJyZW50VGltZX0gJWNhdCAlYyR7bG9nUG9pbnR9JWNdYCxcbiAgICAgICAgICAgICAgICByZXNldFN0eWxlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZExvZ0xldmVsLFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkUHJvY0luZm8sXG4gICAgICAgICAgICAgICAgcmVzZXRTdHlsZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRUaW1lLFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkTG9nUG9pbnQsXG4gICAgICAgICAgICAgICAgcmVzZXRTdHlsZVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYFske3VwcGVyTG9nTGV2ZWx9IC0gJHtwcm9jSW5mb30gLSAke2N1cnJlbnRUaW1lfSAtICR7bG9nUG9pbnR9XWA7XG4gICAgfVxuICAgIHdyaXRlVG9GaWxlKF9sb2dMZXZlbCwgX21lc3NhZ2UpIHtcbiAgICB9XG59O1xuTG9nZ2VyID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgQ29uc3RQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIgJiYgQ29uc3RQYXJhbXMpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdF0pXG5dLCBMb2dnZXIpO1xuZXhwb3J0cy5Mb2dnZXIgPSBMb2dnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lURzluWjJWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOWpiR2xsYm5RdmRITXZiR2xpTDB4dloyZGxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUVzYTBSQlFUWkZPMEZCUXpkRkxITkVRVUYzUkR0QlFWVjRSQ3hKUVVGaExFMUJRVTBzUjBGQmJrSXNUVUZCWVN4TlFVRlBMRk5CUVZFc2NVSkJRVk03U1VGbGFrTXNXVUZCV1N4TlFVRTBRanRSUVVOd1F5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRlVWaXh0UWtGQll5eEhRVUZITzFsQlEzSkNMRWRCUVVjc1JVRkJSU3hwUTBGQmFVTTdXVUZEZEVNc1MwRkJTeXhGUVVGRkxHdERRVUZyUXp0WlFVTjZReXhKUVVGSkxFVkJRVVVzYjBOQlFXOURPMWxCUXpGRExFbEJRVWtzUlVGQlJTeHZRMEZCYjBNN1dVRkRNVU1zUzBGQlN5eEZRVUZGTEdkRFFVRm5RenRUUVVNeFF5eERRVUZETzBsQlNVWXNRMEZCUXp0SlFWZFRMRk5CUVZNc1EwRkJReXhSUVVGdFFpeEZRVUZGTEZkQlFUaENMRk5CUVZNN1VVRkROVVVzVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8xRkJRM0JETEUxQlFVMHNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dFJRVU4yUXl4TlFVRk5MR0ZCUVdFc1IwRkJSeXhSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdVVUZETjBNc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUTNCRExFMUJRVTBzVlVGQlZTeEhRVUZITEcxRFFVRnRReXhEUVVGRE8xRkJRM1pFTEUxQlFVMHNUMEZCVHl4SFFVRkhMSEZEUVVGeFF5eERRVUZETzFGQlEzUkVMRTFCUVUwc1NVRkJTU3hIUVVGSExIRkRRVUZ4UXl4RFFVRkRPMUZCUTI1RUxFbEJRVWtzVVVGQlVTeExRVUZMTEZOQlFWTXNSVUZCUlR0WlFVTjRRaXhOUVVGTkxHbENRVUZwUWl4SFFVRkhMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdXVUZEZUVRc1RVRkJUU3hwUWtGQmFVSXNSMEZCUnl4UFFVRlBMRU5CUVVNN1dVRkRiRU1zVFVGQlRTeGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUXpOQ0xFMUJRVTBzYVVKQlFXbENMRWRCUVVjc1QwRkJUeXhEUVVGRE8xbEJRMnhETEU5QlFVODdaMEpCUTBnc1VVRkJVU3hoUVVGaExGVkJRVlVzVVVGQlVTeFZRVUZWTEZkQlFWY3NWMEZCVnl4UlFVRlJMRXRCUVVzN1owSkJRM0JHTEZWQlFWVTdaMEpCUTFZc2FVSkJRV2xDTzJkQ1FVTnFRaXhWUVVGVk8yZENRVU5XTEdsQ1FVRnBRanRuUWtGRGFrSXNWVUZCVlR0blFrRkRWaXhoUVVGaE8yZENRVU5pTEZWQlFWVTdaMEpCUTFZc2FVSkJRV2xDTzJkQ1FVTnFRaXhWUVVGVk8yRkJRMklzUTBGQlF6dFRRVU5NTzFGQlEwUXNUMEZCVHl4SlFVRkpMR0ZCUVdFc1RVRkJUU3hSUVVGUkxFMUJRVTBzVjBGQlZ5eE5RVUZOTEZGQlFWRXNSMEZCUnl4RFFVRkRPMGxCUXpkRkxFTkJRVU03U1VGVlV5eFhRVUZYTEVOQlFVTXNVMEZCYjBJc1JVRkJSU3hSUVVGaE8wbEJSWHBFTEVOQlFVTTdRMEZEU2l4RFFVRkJPMEZCY0VWWkxFMUJRVTA3U1VGRWJFSXNORUpCUVdVc1JVRkJSVHRwUlVGblFrOHNWMEZCVnl4dlFrRkJXQ3hYUVVGWE8wZEJablpDTEUxQlFVMHNRMEZ2Uld4Q08wRkJjRVZaTEhkQ1FVRk5JbjA9IiwidmFyIG1hcCA9IHtcblx0XCIuL1Rlc3QudHNcIjogXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL21vZGVscy9UZXN0LnRzXCIsXG5cdFwiLi9UZXN0MS50c1wiOiBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvbW9kZWxzL1Rlc3QxLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvbW9kZWxzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLnRzJFwiOyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJET1Rlc3RfMSA9IHJlcXVpcmUoXCJ+YmRvL21vZGVscy9CRE9UZXN0XCIpO1xuY29uc3QgQ2xpZW50TW9kZWxfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9DbGllbnRNb2RlbFwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5sZXQgVGVzdCA9IGNsYXNzIFRlc3QgZXh0ZW5kcyBCRE9UZXN0XzEuQkRPVGVzdEZhY3RvcnkoQ2xpZW50TW9kZWxfMS5DbGllbnRNb2RlbCkge1xuICAgIGNvbnN0cnVjdG9yKF9wYXJhbXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgdGVzdCgpIHtcbiAgICB9XG59O1xuVGVzdCA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3Rvcih7IGNvbGxlY3Rpb25OYW1lOiBcIlRlc3RcIiB9KSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBDb25zdFBhcmFtcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBDb25zdFBhcmFtcykgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0XSlcbl0sIFRlc3QpO1xuZXhwb3J0cy5UZXN0ID0gVGVzdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHVnpkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDIxdlpHVnNjeTlVWlhOMExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFTeHBSRUZCY1VRN1FVRkRja1FzZVVSQlFYTkVPMEZCUTNSRUxITkVRVUYzUkR0QlFWVjRSQ3hKUVVGaExFbEJRVWtzUjBGQmFrSXNUVUZCWVN4SlFVRkxMRk5CUVZFc2QwSkJRV01zUTBGQlF5eDVRa0ZCVnl4RFFVRkRPMGxCUldwRUxGbEJRVmtzVDBGQk1rSTdVVUZEYmtNc1MwRkJTeXhGUVVGRkxFTkJRVU03U1VGRFdpeERRVUZETzBsQlQwMHNTVUZCU1R0SlFVVllMRU5CUVVNN1EwRkRTaXhEUVVGQk8wRkJaRmtzU1VGQlNUdEpRVVJvUWl3MFFrRkJaU3hEUVVGRExFVkJRVVVzWTBGQll5eEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRPMmxGUVVkc1FpeFhRVUZYTEc5Q1FVRllMRmRCUVZjN1IwRkdlRUlzU1VGQlNTeERRV05vUWp0QlFXUlpMRzlDUVVGSkluMD0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBUZXN0MV8xLCBfYTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBCRE9UZXN0MV8xID0gcmVxdWlyZShcIn5iZG8vbW9kZWxzL0JET1Rlc3QxXCIpO1xuY29uc3QgVGVzdF8xID0gcmVxdWlyZShcIn5jbGllbnQvbW9kZWxzL1Rlc3RcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xubGV0IFRlc3QxID0gVGVzdDFfMSA9IGNsYXNzIFRlc3QxIGV4dGVuZHMgQkRPVGVzdDFfMS5CRE9UZXN0MUZhY3RvcnkoVGVzdF8xLlRlc3QpIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICAgICAgc3VwZXIocGFyYW1zKTtcbiAgICB9XG4gICAgYXN5bmMgd2FkZGUoKSB7XG4gICAgICAgIGNvbnN0IHRlc3QgPSBhd2FpdCBUZXN0MV8xLmdldEluc3RhbmNlQnlJRCh0aGlzLmlkKTtcbiAgICAgICAgaWYgKHRlc3QpXG4gICAgICAgICAgICByZXR1cm4gdGVzdC5nZXRVbnNhdmVkQ2hhbmdlcygpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxufTtcblRlc3QxID0gVGVzdDFfMSA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3Rvcih7IGNvbGxlY3Rpb25OYW1lOiBcIlRlc3QxXCIgfSksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgQ29uc3RQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIgJiYgQ29uc3RQYXJhbXMpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdF0pXG5dLCBUZXN0MSk7XG5leHBvcnRzLlRlc3QxID0gVGVzdDE7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWR1Z6ZERFdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyTnNhV1Z1ZEM5MGN5OXRiMlJsYkhNdlZHVnpkREV1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVU5CTEcxRVFVRjFSRHRCUVVOMlJDdzRRMEZCTWtNN1FVRkRNME1zYzBSQlFYZEVPMEZCVlhoRUxFbEJRV0VzUzBGQlN5eGhRVUZzUWl4TlFVRmhMRXRCUVUwc1UwRkJVU3d3UWtGQlpTeERRVUZETEZkQlFVa3NRMEZCUXp0SlFVVTFReXhaUVVGWkxFMUJRVEpDTzFGQlEyNURMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU5zUWl4RFFVRkRPMGxCVDAwc1MwRkJTeXhEUVVGRExFdEJRVXM3VVVGRFpDeE5RVUZOTEVsQlFVa3NSMEZCUnl4TlFVRk5MRTlCUVVzc1EwRkJReXhsUVVGbExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTJ4RUxFbEJRVWtzU1VGQlNUdFpRVUZGTEU5QlFVOHNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTEVOQlFVTTdVVUZETVVNc1QwRkJUenRKUVVOWUxFTkJRVU03UTBGRFNpeERRVUZCTzBGQmFFSlpMRXRCUVVzN1NVRkVha0lzTkVKQlFXVXNRMEZCUXl4RlFVRkZMR05CUVdNc1JVRkJSU3hQUVVGUExFVkJRVVVzUTBGQlF6dHBSVUZIY0VJc1YwRkJWeXh2UWtGQldDeFhRVUZYTzBkQlJuWkNMRXRCUVVzc1EwRm5RbXBDTzBGQmFFSlpMSE5DUVVGTEluMD0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vQ29uZmlnLnRzXCI6IFwiLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvQ29uZmlnLnRzXCIsXG5cdFwiLi9HYW1lTG9iYnkudHNcIjogXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9HYW1lTG9iYnkudHNcIixcblx0XCIuL0hvbWUudHNcIjogXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9Ib21lLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLnRzJFwiOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ2xpZW50Um91dGVfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9DbGllbnRSb3V0ZVwiKTtcbmNvbnN0IEJET0NvbmZpZ18xID0gcmVxdWlyZShcIn5iZG8vcm91dGVzL0JET0NvbmZpZ1wiKTtcbmNsYXNzIENvbmZpZyBleHRlbmRzIEJET0NvbmZpZ18xLkJET0NvbmZpZ0ZhY3RvcnkoQ2xpZW50Um91dGVfMS5DbGllbnRSb3V0ZSkge1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ29uZmlnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTI5dVptbG5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlqYkdsbGJuUXZkSE12Y205MWRHVnpMME52Ym1acFp5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxIbEVRVUZ6UkR0QlFVTjBSQ3h4UkVGQmVVUTdRVUZYZWtRc1RVRkJjVUlzVFVGQlR5eFRRVUZSTERSQ1FVRm5RaXhEUVVGRExIbENRVUZYTEVOQlFVTTdRMEZCU1R0QlFVRnlSU3g1UWtGQmNVVWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBDbGllbnRSb3V0ZV8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0NsaWVudFJvdXRlXCIpO1xuY29uc3QgQkRPR2FtZUxvYmJ5XzEgPSByZXF1aXJlKFwifmJkby9yb3V0ZXMvQkRPR2FtZUxvYmJ5XCIpO1xuY2xhc3MgR2FtZUxvYmJ5IGV4dGVuZHMgQkRPR2FtZUxvYmJ5XzEuQkRPR2FtZUxvYmJ5RmFjdG9yeShDbGllbnRSb3V0ZV8xLkNsaWVudFJvdXRlKSB7XG4gICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZXN0OiAnbG9sJ1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEdhbWVMb2JieTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVIyRnRaVXh2WW1KNUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOWpiR2xsYm5RdmRITXZjbTkxZEdWekwwZGhiV1ZNYjJKaWVTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxIbEVRVUZ6UkR0QlFVTjBSQ3d5UkVGQkswUTdRVUZUTDBRc1RVRkJjVUlzVTBGQlZTeFRRVUZSTEd0RFFVRnRRaXhEUVVGRExIbENRVUZYTEVOQlFVTTdTVUZWZWtRc1MwRkJTeXhEUVVGRExHTkJRV003VVVGRE1VSXNUMEZCVHp0WlFVTklMRWxCUVVrc1JVRkJSU3hMUVVGTE8xTkJRMlFzUTBGQlF6dEpRVU5PTEVOQlFVTTdRMEZEU2p0QlFXWkVMRFJDUVdWREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENsaWVudFJvdXRlXzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQ2xpZW50Um91dGVcIik7XG5jb25zdCBCRE9Ib21lXzEgPSByZXF1aXJlKFwifmJkby9yb3V0ZXMvQkRPSG9tZVwiKTtcbmNsYXNzIEhvbWUgZXh0ZW5kcyBCRE9Ib21lXzEuQkRPSG9tZUZhY3RvcnkoQ2xpZW50Um91dGVfMS5DbGllbnRSb3V0ZSkge1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gSG9tZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVNHOXRaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDNKdmRYUmxjeTlJYjIxbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc2VVUkJRWE5FTzBGQlEzUkVMR2xFUVVGeFJEdEJRVk55UkN4TlFVRnhRaXhKUVVGTExGTkJRVkVzZDBKQlFXTXNRMEZCUXl4NVFrRkJWeXhEUVVGRE8wTkJRVWs3UVVGQmFrVXNkVUpCUVdsRkluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmZ1bmN0aW9uIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBrZXksIG5ld1ZhbCwgbnNQcm9wID0gXCJpZFwiKSB7XG4gICAgaWYgKGtleSA9PT0gXCIqXCIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIiogaXMgYSBzcGVjaWFsIGNoYXJhY3RlciBhbmQgZG9lcyBub3QgZm9sbG93IHRoZSBwcm9wZXJ0eSBjb252ZW50aW9uXCIpO1xuICAgIGNvbnN0IG5zUHJlZml4ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGluc3RhbmNlLmNvbnN0cnVjdG9yKS5uYW1lO1xuICAgIGxldCBuc1N1ZmZpeCA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwib2xkU3RvcmFnZU5zU3VmZml4XCIpO1xuICAgIGxldCBzdG9yYWdlVmFsdWU7XG4gICAgaWYgKCFuc1N1ZmZpeClcbiAgICAgICAgbnNTdWZmaXggPSBpbnN0YW5jZVtuc1Byb3BdO1xuICAgIGxldCBucyA9IGAke25zUHJlZml4fV8ke25zU3VmZml4fWA7XG4gICAgaWYgKGtleSA9PT0gbnNQcm9wIHx8IG5zU3VmZml4ICE9PSBpbnN0YW5jZVtuc1Byb3BdKSB7XG4gICAgICAgIG5zU3VmZml4ID0ga2V5ID09PSBuc1Byb3AgPyBuZXdWYWwgOiBpbnN0YW5jZVtuc1Byb3BdO1xuICAgICAgICBjb25zdCBuZXdOcyA9IGAke25zUHJlZml4fV8ke25zU3VmZml4fWA7XG4gICAgICAgIHN0b3JhZ2VWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5zKTtcbiAgICAgICAgaWYgKHN0b3JhZ2VWYWx1ZSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obnMpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3TnMsIHN0b3JhZ2VWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbnMgPSBuZXdOcztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN0b3JhZ2VWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5zKTtcbiAgICAgICAgaWYgKHN0b3JhZ2VWYWx1ZSkge1xuICAgICAgICAgICAgc3RvcmFnZVZhbHVlID0gSlNPTi5wYXJzZShzdG9yYWdlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHN0b3JhZ2VWYWx1ZSA9IHt9O1xuICAgICAgICBpZiAobmV3VmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdG9yYWdlVmFsdWVba2V5XTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LmtleXMoc3RvcmFnZVZhbHVlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obnMsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VWYWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5zLCBKU09OLnN0cmluZ2lmeShPYmplY3QuYXNzaWduKHN0b3JhZ2VWYWx1ZSwgeyBba2V5XTogbmV3VmFsIH0pKSk7XG4gICAgfVxuICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEoaW5zdGFuY2UsIFwib2xkU3RvcmFnZU5zU3VmZml4XCIsIG5zU3VmZml4KTtcbn1cbmV4cG9ydHMuc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2UgPSBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZTtcbmZ1bmN0aW9uIGdldE5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBrZXksIG5zUHJvcCA9IFwiaWRcIiwgZm9yY2VOUykge1xuICAgIGNvbnN0IG5zUHJlZml4ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGluc3RhbmNlLmNvbnN0cnVjdG9yKS5uYW1lO1xuICAgIGxldCBuc1N1ZmZpeCA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwib2xkU3RvcmFnZU5zU3VmZml4XCIpO1xuICAgIGlmIChuc1N1ZmZpeCAhPT0gaW5zdGFuY2VbbnNQcm9wXSlcbiAgICAgICAgbnNTdWZmaXggPSBpbnN0YW5jZVtuc1Byb3BdO1xuICAgIGlmIChmb3JjZU5TKVxuICAgICAgICBuc1N1ZmZpeCA9IGZvcmNlTlM7XG4gICAgbGV0IHN0b3JhZ2VWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke25zUHJlZml4fV8ke25zU3VmZml4fWApO1xuICAgIGlmIChzdG9yYWdlVmFsdWUpXG4gICAgICAgIHN0b3JhZ2VWYWx1ZSA9IEpTT04ucGFyc2Uoc3RvcmFnZVZhbHVlKTtcbiAgICBpZiAoc3RvcmFnZVZhbHVlICYmIGtleSA9PT0gXCIqXCIpXG4gICAgICAgIHJldHVybiBzdG9yYWdlVmFsdWU7XG4gICAgaWYgKHN0b3JhZ2VWYWx1ZSAmJiBrZXkgaW4gc3RvcmFnZVZhbHVlKVxuICAgICAgICByZXR1cm4gc3RvcmFnZVZhbHVlW2tleV07XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmV4cG9ydHMuZ2V0TmFtZXNwYWNlZFN0b3JhZ2UgPSBnZXROYW1lc3BhY2VkU3RvcmFnZTtcbmZ1bmN0aW9uIGRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZShpbnN0YW5jZSwga2V5LCBuc1Byb3AgPSBcImlkXCIpIHtcbiAgICBpZiAoa2V5ID09PSBcIipcIikge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gZ2V0TmFtZXNwYWNlZFN0b3JhZ2UoaW5zdGFuY2UsIGtleSwgbnNQcm9wKTtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHN0b3JhZ2UpIHtcbiAgICAgICAgICAgIGlmIChzdG9yYWdlLmhhc093blByb3BlcnR5KHByb3ApKVxuICAgICAgICAgICAgICAgIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBwcm9wLCB1bmRlZmluZWQsIG5zUHJvcCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZVxuICAgICAgICBzZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZShpbnN0YW5jZSwga2V5LCB1bmRlZmluZWQsIG5zUHJvcCk7XG59XG5leHBvcnRzLmRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZSA9IGRlbGV0ZUZyb21OYW1lc3BhY2VkU3RvcmFnZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRYUnBiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDNWMGFXeHpMM1YwYVd3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN4clJFRkJhMFU3UVVGVmJFVXNVMEZCWjBJc01FSkJRVEJDTEVOQlFVTXNVVUZCWVN4RlFVRkZMRWRCUVZjc1JVRkJSU3hOUVVGWExFVkJRVVVzVTBGQmFVSXNTVUZCU1R0SlFVTnlSeXhKUVVGSkxFZEJRVWNzUzBGQlN5eEhRVUZITzFGQlFVVXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXh6UlVGQmMwVXNRMEZCUXl4RFFVRkRPMGxCUjNwSExFMUJRVTBzVVVGQlVTeEhRVUZITEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXp0SlFVTnNSU3hKUVVGSkxGRkJRVkVzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3h2UWtGQmIwSXNRMEZCUXl4RFFVRkRPMGxCUXpORUxFbEJRVWtzV1VGQmFVSXNRMEZCUXp0SlFVZDBRaXhKUVVGSkxFTkJRVU1zVVVGQlVUdFJRVUZGTEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRE0wTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1IwRkJSeXhSUVVGUkxFbEJRVWtzVVVGQlVTeEZRVUZGTEVOQlFVTTdTVUZEYmtNc1NVRkJTU3hIUVVGSExFdEJRVXNzVFVGQlRTeEpRVUZKTEZGQlFWRXNTMEZCU3l4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVU3VVVGRmFrUXNVVUZCVVN4SFFVRkhMRWRCUVVjc1MwRkJTeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEzUkVMRTFCUVUwc1MwRkJTeXhIUVVGSExFZEJRVWNzVVVGQlVTeEpRVUZKTEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUTNoRExGbEJRVmtzUjBGQlJ5eFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRM2hETEVsQlFVa3NXVUZCV1N4RlFVRkZPMWxCUTJRc1dVRkJXU3hEUVVGRExGVkJRVlVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTTFRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4WlFVRlpMRU5CUVVNc1EwRkJRenRUUVVNM1F6dFJRVU5FTEVWQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVNN1MwRkRaRHRUUVVGTk8xRkJSVWdzV1VGQldTeEhRVUZITEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGVFTXNTVUZCU1N4WlFVRlpMRVZCUVVVN1dVRkRaQ3haUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRUUVVNelF6czdXVUZCVFN4WlFVRlpMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJSWHBDTEVsQlFVa3NUVUZCVFN4TFFVRkxMRk5CUVZNc1JVRkJSVHRaUVVOMFFpeFBRVUZQTEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVONlFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVTdaMEpCUTI1RExGbEJRVmtzUTBGQlF5eFZRVUZWTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRMMEk3TzJkQ1FVRk5MRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5xUlRzN1dVRkJUU3haUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVOdVJ6dEpRVVZFTEhsQ1FVRmpMRU5CUVVNc1VVRkJVU3hGUVVGRkxHOUNRVUZ2UWl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8wRkJRemRFTEVOQlFVTTdRVUZ5UTBRc1owVkJjVU5ETzBGQmEwSkVMRk5CUVdkQ0xHOUNRVUZ2UWl4RFFVRkRMRkZCUVdFc1JVRkJSU3hIUVVGWExFVkJRVVVzVTBGQmFVSXNTVUZCU1N4RlFVRkZMRTlCUVdkQ08wbEJRM0JITEUxQlFVMHNVVUZCVVN4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJRenRKUVVOc1JTeEpRVUZKTEZGQlFWRXNSMEZCUnl4elFrRkJWeXhEUVVGRExGRkJRVkVzUlVGQlJTeHZRa0ZCYjBJc1EwRkJReXhEUVVGRE8wbEJRek5FTEVsQlFVa3NVVUZCVVN4TFFVRkxMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGQlJTeFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJReTlFTEVsQlFVa3NUMEZCVHp0UlFVRkZMRkZCUVZFc1IwRkJSeXhQUVVGUExFTkJRVU03U1VGRGFFTXNTVUZCU1N4WlFVRlpMRWRCUVZFc1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEZGQlFWRXNTVUZCU1N4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRM2hGTEVsQlFVa3NXVUZCV1R0UlFVRkZMRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMGxCUXpGRUxFbEJRVWtzV1VGQldTeEpRVUZKTEVkQlFVY3NTMEZCU3l4SFFVRkhPMUZCUVVVc1QwRkJUeXhaUVVGWkxFTkJRVU03U1VGRGNrUXNTVUZCU1N4WlFVRlpMRWxCUVVrc1IwRkJSeXhKUVVGSkxGbEJRVms3VVVGQlJTeFBRVUZQTEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOc1JTeFBRVUZQTEZOQlFWTXNRMEZCUXp0QlFVTnlRaXhEUVVGRE8wRkJWa1FzYjBSQlZVTTdRVUZYUkN4VFFVRm5RaXd5UWtGQk1rSXNRMEZCUXl4UlFVRmhMRVZCUVVVc1IwRkJWeXhGUVVGRkxGTkJRV2xDTEVsQlFVazdTVUZEZWtZc1NVRkJTU3hIUVVGSExFdEJRVXNzUjBGQlJ5eEZRVUZGTzFGQlEySXNUVUZCVFN4UFFVRlBMRWRCUVVjc2IwSkJRVzlDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVjc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU0xUkN4TFFVRkxMRTFCUVUwc1NVRkJTU3hKUVVGSkxFOUJRVThzUlVGQlJUdFpRVU40UWl4SlFVRkpMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETzJkQ1FVRkZMREJDUVVFd1FpeERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRVZCUVVVc1UwRkJVeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzFOQlEyNUhPMHRCUTBvN08xRkJRVTBzTUVKQlFUQkNMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzUlVGQlJTeFRRVUZUTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkRlRVVzUTBGQlF6dEJRVkJFTEd0RlFVOURJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBQcm9wZXJ0eV8xID0gcmVxdWlyZShcIn5iZG8vbGliL1Byb3BlcnR5XCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuY29uc3QgTW9kaWZpY2F0aW9uXzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kaWZpY2F0aW9uXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IEVycm9yc18xID0gcmVxdWlyZShcIn5iZG8vbGliL0Vycm9yc1wiKTtcbmNvbnN0IE1vZGVsUmVnaXN0cnlfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Nb2RlbFJlZ2lzdHJ5XCIpO1xuY2xhc3MgQXR0cmlidXRlIGV4dGVuZHMgUHJvcGVydHlfMS5Qcm9wZXJ0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSwgcGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCwgcHJvcGVydHksIHBhcmFtcyk7XG4gICAgICAgIHRoaXMuaW5ET01Jbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmF1dG9TYXZlQWxsb3dlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkRG9TZXRWYWx1ZSh2YWx1ZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBvbGRJRDtcbiAgICAgICAgaWYgKHRoaXMub2JqZWN0LmlzQkRPTW9kZWwgJiYgdGhpcy5wcm9wZXJ0eSA9PT0gXCJpZFwiKVxuICAgICAgICAgICAgb2xkSUQgPSB0aGlzLm93blZhbHVlO1xuICAgICAgICB0aGlzLmRvU2V0VmFsdWUodmFsdWUsIHRydWUsIHRydWUpO1xuICAgICAgICBpZiAob2xkSUQpXG4gICAgICAgICAgICBNb2RlbFJlZ2lzdHJ5XzEuTW9kZWxSZWdpc3RyeS5nZXRJbnN0YW5jZSgpLnVwZGF0ZUlEKG9sZElELCB0aGlzLm9iamVjdCk7XG4gICAgICAgIHRoaXMucmVmbGVjdFRvRE9NQXR0cmlidXRlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5kb0F1dG9TYXZlKCk7XG4gICAgfVxuICAgIHByb3h5SGFuZGxlcihfcGF0aCwgX2NoYW5nZWRWYWwsIF9wcmV2VmFsKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuZG9TZXRWYWx1ZSh1dGlsXzEuZ2V0UHJveHlUYXJnZXQodmFsdWUpLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5yZWZsZWN0VG9ET01BdHRyaWJ1dGUodmFsdWUpO1xuICAgICAgICB0aGlzLmRvQXV0b1NhdmUoKTtcbiAgICB9XG4gICAgZ2V0VW5zYXZlZENoYW5nZSgpIHsgfVxuICAgIHNob3VsZERvU2V0VmFsdWUodmFsdWUsIHNraXBHdWFyZCA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChlbnZpcm9ubWVudF8xLmlzQnJvd3NlcigpICYmICF0aGlzLm9iamVjdC5pc0JET01vZGVsICYmICh0aGlzLm9iamVjdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgY29uc3QgY29uc3RydWN0ZWRUeXBlID0gdXRpbF8xLmNvbnN0cnVjdFR5cGVPZkhUTUxBdHRyaWJ1dGUodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmluRE9NSW5pdGlhbGl6ZWQgJiYgdGhpcy5vYmplY3QuZ2V0QXR0cmlidXRlKHRoaXMucHJvcGVydHkpICYmIHZhbHVlICE9PSBjb25zdHJ1Y3RlZFR5cGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKGNvbnN0cnVjdGVkVHlwZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhKHZhbHVlID09PSB0aGlzLm93blZhbHVlIHx8ICFza2lwR3VhcmQgJiYgIXRoaXMuZGlzYWJsZVR5cGVHdWFyZCAmJiAhdGhpcy50eXBlR3VhcmQodmFsdWUpKTtcbiAgICB9XG4gICAgcmVmbGVjdFRvRE9NQXR0cmlidXRlKHZhbHVlKSB7XG4gICAgICAgIGlmICghZW52aXJvbm1lbnRfMS5pc0Jyb3dzZXIoKSB8fCAhKHRoaXMub2JqZWN0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSB0aGlzLnByb3BlcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IHRoaXMub2JqZWN0LmdldEF0dHJpYnV0ZShzdHJpbmdLZXkpO1xuICAgICAgICBsZXQgc2V0QXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgbGV0IHBUYXJnZXQ7XG4gICAgICAgIGxldCB2YWx1ZVRvUGFzcyA9IHZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNb2RpZmljYXRpb25fMS5Nb2RpZmljYXRpb24pXG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgaWYgKCF0aGlzLmluRE9NSW5pdGlhbGl6ZWQgJiYgYXR0clZhbHVlKSB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBwVGFyZ2V0ID0gdXRpbF8xLmdldFByb3h5VGFyZ2V0KHZhbHVlVG9QYXNzKTtcbiAgICAgICAgdGhpcy5pbkRPTUluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHNldEF0dHJpYnV0ZSAmJiBhdHRyVmFsdWUgIT09IHBUYXJnZXQgJiYgYXR0clZhbHVlICE9PSBKU09OLnN0cmluZ2lmeShwVGFyZ2V0KS5yZXBsYWNlKC9cXFwiL2csIFwiJ1wiKSkge1xuICAgICAgICAgICAgdGhpcy5vYmplY3Quc2V0QXR0cmlidXRlKHN0cmluZ0tleSwgcFRhcmdldCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRvQXV0b1NhdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9TYXZlICYmIHRoaXMuZG9Ob3RQZXJzaXN0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3JzXzEuQ29uZmlndXJhdGlvbkVycm9yKFwiWW91IGhhdmUgdHVybmVkIG9uIGF1dG9zYXZlIGJ1dCBhdCB0aGUgc2FtZSB0aW1lIGl0IGlzIGZvcmJpZGRlbiB0byBwZXJzaXN0IHRoZSB2YWx1ZSFcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmF1dG9TYXZlQWxsb3dlZCkge1xuICAgICAgICAgICAgdGhpcy5hdXRvU2F2ZUFsbG93ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5hdXRvU2F2ZSB8fCAhdXRpbF8xLmlzRnVuY3Rpb24odGhpcy5vYmplY3Quc2F2ZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5hdXRvU2F2ZSA9PT0gXCJib29sZWFuXCIpXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5zYXZlKHRoaXMucHJvcGVydHkpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYXV0b1NhdmUgPT09IFwibnVtYmVyXCIgJiYgIXRoaXMuYXV0b1NhdmVUaW1lb3V0KSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9TYXZlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0LnNhdmUodGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuYXV0b1NhdmVUaW1lb3V0O1xuICAgICAgICAgICAgfSwgTWF0aC5hYnModGhpcy5hdXRvU2F2ZSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5BdHRyaWJ1dGUgPSBBdHRyaWJ1dGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRWFIwY21saWRYUmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzlzYVdJdlFYUjBjbWxpZFhSbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc1owUkJRVGhFTzBGQlJUbEVMSGRFUVVGdFJEdEJRVU51UkN4M1JFRkJjVVE3UVVGRGNrUXNNRU5CUVRKR08wRkJSVE5HTERSRFFVRnhSRHRCUVVOeVJDd3dSRUZCZFVRN1FVRjNSWFpFTEUxQlFXRXNVMEZCTWtRc1UwRkJVU3h0UWtGQlVUdEpRWEZGY0VZc1dVRkJXU3hOUVVGVExFVkJRVVVzVVVGQlZ5eEZRVUZGTEUxQlFXbEVPMUZCUTJwR0xFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNVVUZCVVN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJja0kxUWl4eFFrRkJaMElzUjBGQldTeExRVUZMTEVOQlFVTTdVVUZyUW14RExHOUNRVUZsTEVkQlFWa3NTMEZCU3l4RFFVRkRPMGxCU1hwRExFTkJRVU03U1VGUlRTeFJRVUZSTEVOQlFVTXNTMEZCWjBNN1VVRkROVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZCUlN4UFFVRlBPMUZCUXpGRExFbEJRVWtzUzBGQlN5eERRVUZETzFGQlExWXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4TFFVRkxMRWxCUVVrN1dVRkJSU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXp0UlFVTTFSU3hKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRGJrTXNTVUZCU1N4TFFVRkxPMWxCUVVVc05rSkJRV0VzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTndSU3hKUVVGSkxFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRGJFTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8wbEJRM1JDTEVOQlFVTTdTVUZSVFN4WlFVRlpMRU5CUVVNc1MwRkJZeXhGUVVGRkxGZEJRV3RDTEVWQlFVVXNVVUZCWlR0UlFVTnVSU3hOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1NVRkJTVHRaUVVGRkxFOUJRVTg3VVVGRGJFUXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXh4UWtGQll5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU51UkN4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRiRU1zU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMGxCUTNSQ0xFTkJRVU03U1VGVFRTeG5Ra0ZCWjBJc1MwRkJTeXhEUVVGRE8wbEJWWFJDTEdkQ1FVRm5RaXhEUVVGRExFdEJRV2RETEVWQlFVVXNXVUZCY1VJc1MwRkJTenRSUVVOb1JpeEpRVUZKTEhWQ1FVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzV1VGQldTeFhRVUZYTEVOQlFVTXNSVUZCUlR0WlFVTm9SaXhOUVVGTkxHVkJRV1VzUjBGQlJ5eHRRMEZCTkVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRaUVVOcVJpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1pVRkJaU3hGUVVGRk8yZENRVU5vUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETzJkQ1FVTXZRaXhQUVVGUExFdEJRVXNzUTBGQlF6dGhRVU5vUWp0VFFVTktPMUZCUTBRc1QwRkJUeXhEUVVGRExFTkJRVU1zUzBGQlN5eExRVUZMTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1EwRkJReXhUUVVGVExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVFY3NRMEZCUXp0SlFXTk5MSEZDUVVGeFFpeERRVUZETEV0QlFXZERPMUZCUTNwRUxFbEJRVWtzUTBGQlF5eDFRa0ZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEZsQlFWa3NWMEZCVnl4RFFVRkRPMWxCUVVVc1QwRkJUenRSUVVOc1JTeE5RVUZOTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlF6TkRMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRM1JFTEVsQlFVa3NXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVONFFpeEpRVUZKTEU5QlFVOHNRMEZCUXp0UlFVVmFMRWxCUVVrc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU40UWl4SlFVRkpMRXRCUVVzc1dVRkJXU3d5UWtGQldUdFpRVUZGTEZkQlFWY3NSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGRmFrVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNTVUZCU1N4VFFVRlRMRVZCUVVVN1dVRkRja01zV1VGQldTeEhRVUZITEV0QlFVc3NRMEZCUXp0VFFVTjRRanM3V1VGQlRTeFBRVUZQTEVkQlFVY3NjVUpCUVdNc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFJRVU0zUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUnpkQ0xFbEJRVWtzV1VGQldTeEpRVUZKTEZOQlFWTXNTMEZCU3l4UFFVRlBMRWxCUVVrc1UwRkJVeXhMUVVGTExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTTVSaXhKUVVGSkxFTkJRVU1zVFVGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1QwRkJUeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFOQlF6bEVPMGxCUTB3c1EwRkJRenRKUVZWUExGVkJRVlU3VVVGRFpDeEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJUdFpRVU53UXl4TlFVRk5MRWxCUVVrc01rSkJRV3RDTEVOQlFVTXNkMFpCUVhkR0xFTkJRVU1zUTBGQlF6dFRRVU14U0R0UlFVTkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTzFsQlEzWkNMRWxCUVVrc1EwRkJReXhsUVVGbExFZEJRVWNzU1VGQlNTeERRVUZETzFsQlF6VkNMRTlCUVU4N1UwRkRWanRSUVVORUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4SlFVRkpMRU5CUVVNc2FVSkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJRenRaUVVGRkxFOUJRVTg3VVVGRE5VUXNTVUZCU1N4UFFVRlBMRWxCUVVrc1EwRkJReXhSUVVGUkxFdEJRVXNzVTBGQlV6dFpRVUZGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTjRSU3hKUVVGSkxFOUJRVThzU1VGQlNTeERRVUZETEZGQlFWRXNTMEZCU3l4UlFVRlJMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTzFsQlF6VkVMRWxCUVVrc1EwRkJReXhsUVVGbExFZEJRVWNzVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlR0blFrRkRia01zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzJkQ1FVTm9ReXhQUVVGUExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTTdXVUZEYUVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03VTBGREwwSTdTVUZEVEN4RFFVRkRPME5CUTBvN1FVRTNURVFzT0VKQk5reERJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgbXNfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJtc1wiKSk7XG5jb25zdCBCRE9NYXBDYWNoZV8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET01hcENhY2hlXCIpO1xuY2xhc3MgQkRPQ29uZmlnTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgQkRPTWFwQ2FjaGVfMS5CRE9NYXBDYWNoZSgpO1xuICAgIH1cbiAgICBhc3luYyBnZXQoY29uZmlnKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGF3YWl0IHRoaXMuZ2V0Q2FjaGUoY29uZmlnKTtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBhd2FpdCB0aGlzLmxvYWQoY29uZmlnKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0Q2FjaGUoY29uZmlnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XG4gICAgfVxuICAgIGdldENhY2hlKGNvbmZpZykge1xuICAgICAgICBjb25zdCBmcm9tTG9jYWxDYWNoZSA9IHRoaXMuY2FjaGUuZ2V0KGNvbmZpZyk7XG4gICAgICAgIGlmIChmcm9tTG9jYWxDYWNoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21Mb2NhbENhY2hlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBhc3luYyBzZXRDYWNoZShjb25maWcsIHZhbHVlKSB7XG4gICAgICAgIGxldCBjb25mID0gdGhpcy5jYWNoZS5nZXQoJ19fQ29uZmlnTWFuYWdlckNhY2hlVGltZW91dF9fJyk7XG4gICAgICAgIGlmICghdGhpcy5jYWNoZS5oYXMoJ19fQ29uZmlnTWFuYWdlckNhY2hlVGltZW91dF9fJykpIHtcbiAgICAgICAgICAgIGNvbmYgPSAoYXdhaXQgdGhpcy5sb2FkKCdjb25maWcnKSkudGltZW91dHMuY29uZmlnQ2FjaGU7XG4gICAgICAgICAgICBpZiAoY29uZilcbiAgICAgICAgICAgICAgICBjb25mID0gbXNfMS5kZWZhdWx0KGNvbmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5zZXQoJ19fQ29uZmlnTWFuYWdlckNhY2hlVGltZW91dF9fJywgY29uZik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZS5zZXQoY29uZmlnLCB2YWx1ZSwgY29uZik7XG4gICAgfVxufVxuZXhwb3J0cy5CRE9Db25maWdNYW5hZ2VyID0gQkRPQ29uZmlnTWFuYWdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBRMjl1Wm1sblRXRnVZV2RsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmJHbGlMMEpFVDBOdmJtWnBaMDFoYm1GblpYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNiMFJCUVc5Q08wRkJRM0JDTEhORVFVRnRSRHRCUVcxQ2JrUXNUVUZCYzBJc1owSkJRV2RDTzBsQlFYUkRPMUZCVldNc1ZVRkJTeXhIUVVFMlFpeEpRVUZKTEhsQ1FVRlhMRVZCUVVVc1EwRkJRenRKUVhkRmJFVXNRMEZCUXp0SlFTOUVWU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFXTTdVVUZETTBJc1NVRkJTU3hMUVVGTExFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRM2hETEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1dVRkRVaXhMUVVGTExFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xbEJRMmhETEUxQlFVMHNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdVMEZEZEVNN1VVRkRSQ3hQUVVGUExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRiRU1zUTBGQlF6dEpRVGhDVXl4UlFVRlJMRU5CUVVNc1RVRkJZenRSUVVNM1FpeE5RVUZOTEdOQlFXTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTTVReXhKUVVGSkxHTkJRV01zUlVGQlJUdFpRVU5vUWl4UFFVRlBMR05CUVdNc1EwRkJRenRUUVVONlFqdFJRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTJoQ0xFTkJRVU03U1VGWFV5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVdNc1JVRkJSU3hMUVVGVk8xRkJReTlETEVsQlFVa3NTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEN0Q1FVRXJRaXhEUVVGRExFTkJRVU03VVVGRE0wUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEN0Q1FVRXJRaXhEUVVGRExFVkJRVVU3V1VGRGJFUXNTVUZCU1N4SFFVRkhMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF6dFpRVU40UkN4SlFVRkpMRWxCUVVrN1owSkJRVVVzU1VGQlNTeEhRVUZITEZsQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVNeFFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXdyUWtGQkswSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVONlJEdFJRVU5FTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRlRU1zUTBGQlF6dERRVU5LTzBGQmJFWkVMRFJEUVd0R1F5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEJET0RhdGFiYXNlbWFuYWdlciB7XG59XG5leHBvcnRzLkJET0RhdGFiYXNlbWFuYWdlciA9IEJET0RhdGFiYXNlbWFuYWdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBSR0YwWVdKaGMyVk5ZVzVoWjJWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXNhV0l2UWtSUFJHRjBZV0poYzJWTllXNWhaMlZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRMEVzVFVGQmMwSXNhMEpCUVd0Q08wTkJSWFpETzBGQlJrUXNaMFJCUlVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBtb21lbnRfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJtb21lbnRcIikpO1xuY29uc3QgcGF0aF8xID0gcmVxdWlyZShcInBhdGhcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY2xhc3MgQkRPTG9nZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihfcGFyYW1zKSB7XG4gICAgICAgIHRoaXMubG9nRmlsZSA9ICdkZWZhdWx0LmxvZyc7XG4gICAgICAgIHRoaXMucHJldmVudENvbnNvbGVQcmludCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByZXZlbnRGaWxlUHJpbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2dMZXZlbCA9ICdkZWJ1Zyc7XG4gICAgICAgIHRoaXMucHJvdG90eXBlTmFtZXMgPSB1dGlsXzEuZ2V0UHJvdG90eXBlTmFtZXNSZWN1cnNpdmUodGhpcyk7XG4gICAgfVxuICAgIGxvZyhtZXNzYWdlLCBsb2dsZXZlbCA9ICdsb2cnLCAuLi5hcmdzKSB7XG4gICAgICAgIGlmIChsb2dsZXZlbCAhPT0gJ2xvZycgJiYgIXRoaXMuaXNBbGxvd2VkKGxvZ2xldmVsKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLnByZXZlbnRDb25zb2xlUHJpbnQgfHwgWydsb2cnLCAnZXJyb3InXS5pbmNsdWRlcyhsb2dsZXZlbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0SGVhZGVyKGxvZ2xldmVsKTtcbiAgICAgICAgICAgIGxldCBuZXdBcmdzID0gW107XG4gICAgICAgICAgICBpZiAoaGVhZGVyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBuZXdBcmdzID0gbmV3QXJncy5jb25jYXQoaGVhZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBuZXdBcmdzLnB1c2goaGVhZGVyKTtcbiAgICAgICAgICAgIG5ld0FyZ3MucHVzaChtZXNzYWdlKTtcbiAgICAgICAgICAgIG5ld0FyZ3MgPSBuZXdBcmdzLmNvbmNhdChhcmdzKTtcbiAgICAgICAgICAgIGNvbnNvbGVbbG9nbGV2ZWxdLmFwcGx5KHRoaXMsIG5ld0FyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGFyZ3MpO1xuICAgICAgICBpZiAoIXRoaXMucHJldmVudEZpbGVQcmludCB8fCBsb2dsZXZlbCA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy53cml0ZVRvRmlsZShsb2dsZXZlbCwgbWVzc2FnZSArIHBhcnNlZFN0cmluZy5zdWJzdHIoMSwgcGFyc2VkU3RyaW5nLmxlbmd0aCAtIDIpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWJ1ZyhtZXNzYWdlLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGFwcGx5ID0gW21lc3NhZ2UsICdkZWJ1ZyddLmNvbmNhdChhcmdzKTtcbiAgICAgICAgdGhpcy5sb2cuYXBwbHkodGhpcywgYXBwbHkpO1xuICAgIH1cbiAgICBpbmZvKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgYXBwbHkgPSBbbWVzc2FnZSwgJ2luZm8nXS5jb25jYXQoYXJncyk7XG4gICAgICAgIHRoaXMubG9nLmFwcGx5KHRoaXMsIGFwcGx5KTtcbiAgICB9XG4gICAgd2FybihtZXNzYWdlLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGFwcGx5ID0gW21lc3NhZ2UsICd3YXJuJ10uY29uY2F0KGFyZ3MpO1xuICAgICAgICB0aGlzLmxvZy5hcHBseSh0aGlzLCBhcHBseSk7XG4gICAgfVxuICAgIGVycm9yKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgYXBwbHkgPSBbbWVzc2FnZSwgJ2Vycm9yJ10uY29uY2F0KGFyZ3MpO1xuICAgICAgICB0aGlzLmxvZy5hcHBseSh0aGlzLCBhcHBseSk7XG4gICAgfVxuICAgIGdldFByb2NJbmZvKCkge1xuICAgICAgICByZXR1cm4gYCR7Z2xvYmFsLnByb2Nlc3MuZW52Lm5hbWUgfHwgJyd9ICR7Z2xvYmFsLnByb2Nlc3MuZW52Lmhvc3RuYW1lIHx8ICcnfSAke2dsb2JhbC5wcm9jZXNzLnBpZH1gO1xuICAgIH1cbiAgICBpc0FsbG93ZWQobG9nTGV2ZWwpIHtcbiAgICAgICAgY29uc3QgbG9nTGV2ZWxPcmRlciA9IFsnbG9nJywgJ2RlYnVnJywgJ2luZm8nLCAnd2FybicsICdlcnJvciddO1xuICAgICAgICByZXR1cm4gbG9nTGV2ZWxPcmRlci5pbmRleE9mKGxvZ0xldmVsKSA+PSBsb2dMZXZlbE9yZGVyLmluZGV4T2YodGhpcy5sb2dMZXZlbCk7XG4gICAgfVxuICAgIGN1cnJlbnRUaW1lKCkge1xuICAgICAgICByZXR1cm4gbW9tZW50XzEuZGVmYXVsdCgpLmZvcm1hdCgnREQuTU0uWVlZWSBISDptbTpzcycpO1xuICAgIH1cbiAgICBnZXRMb2dQb2ludCgpIHtcbiAgICAgICAgY29uc3Qgc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGxldCBjYWxscG9pbnQ7XG4gICAgICAgIGZvciAoY29uc3QgW2luZGV4LCBzdGFja3BhcnRdIG9mIHN0YWNrLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgaWYgKCFpbmRleClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghdXRpbF8xLmluY2x1ZGVzTWVtYmVyT2ZMaXN0KHN0YWNrcGFydCwgdGhpcy5wcm90b3R5cGVOYW1lcywgJy50cycpKSB7XG4gICAgICAgICAgICAgICAgY2FsbHBvaW50ID0gc3RhY2twYXJ0LnNwbGl0KHBhdGhfMS5zZXApLnBvcCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxscG9pbnQpIHtcbiAgICAgICAgICAgIGNhbGxwb2ludCA9IGNhbGxwb2ludC5yZXBsYWNlKCcpJywgJycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsbHBvaW50ID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbGxwb2ludDtcbiAgICB9XG59XG5leHBvcnRzLkJET0xvZ2dlciA9IEJET0xvZ2dlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBURzluWjJWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXNhV0l2UWtSUFRHOW5aMlZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVU5CTERSRVFVRTBRanRCUVVNMVFpd3JRa0ZCTWtJN1FVRkRNMElzTUVOQlFXMUdPMEZCVjI1R0xFMUJRWE5DTEZOQlFWTTdTVUZyUkROQ0xGbEJRVmtzVDBGQlowTTdVVUV6UTNKRExGbEJRVThzUjBGQldTeGhRVUZoTEVOQlFVTTdVVUZSYWtNc2QwSkJRVzFDTEVkQlFXRXNTMEZCU3l4RFFVRkRPMUZCVVhSRExIRkNRVUZuUWl4SFFVRmhMRXRCUVVzc1EwRkJRenRSUVdWdVF5eGhRVUZSTEVkQlFXVXNUMEZCVHl4RFFVRkRPMUZCVlc1Q0xHMUNRVUZqTEVkQlFXRXNhVU5CUVRCQ0xFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZGTDBJc1EwRkJRenRKUVZjeFF5eEhRVUZITEVOQlFVTXNUMEZCV1N4RlFVRkZMRmRCUVhOQ0xFdEJRVXNzUlVGQlJTeEhRVUZITEVsQlFWYzdVVUZEYUVVc1NVRkJTU3hSUVVGUkxFdEJRVXNzUzBGQlN5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU03V1VGQlJTeFBRVUZQTzFGQlF6VkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRk8xbEJRMnhGTEUxQlFVMHNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdXVUZEZUVNc1NVRkJTU3hQUVVGUExFZEJRV0VzUlVGQlJTeERRVUZETzFsQlF6TkNMRWxCUVVrc1RVRkJUU3haUVVGWkxFdEJRVXNzUlVGQlJUdG5Ra0ZEZWtJc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1lVRkRjRU03TzJkQ1FVRk5MRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZETlVJc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0WlFVTjBRaXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOa0xFOUJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzFOQlF6VkVPMUZCUTBRc1RVRkJUU3haUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNeFF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeEpRVUZKTEZGQlFWRXNTMEZCU3l4UFFVRlBMRVZCUVVVN1dVRkRhRVFzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1QwRkJUeXhIUVVGSExGbEJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRmxCUVZrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTjZSanRKUVVOTUxFTkJRVU03U1VGUlRTeExRVUZMTEVOQlFVTXNUMEZCV1N4RlFVRkZMRWRCUVVjc1NVRkJVenRSUVVOdVF5eE5RVUZOTEV0QlFVc3NSMEZCUnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRPVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGdlFpeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnNSQ3hEUVVGRE8wbEJVVTBzU1VGQlNTeERRVUZETEU5QlFWa3NSVUZCUlN4SFFVRkhMRWxCUVZNN1VVRkRiRU1zVFVGQlRTeExRVUZMTEVkQlFVY3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUXpkRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJiMElzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYkVRc1EwRkJRenRKUVZGTkxFbEJRVWtzUTBGQlF5eFBRVUZaTEVWQlFVVXNSMEZCUnl4SlFVRlRPMUZCUTJ4RExFMUJRVTBzUzBGQlN5eEhRVUZITEVOQlFVTXNUMEZCVHl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTTNReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVc5Q0xFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEyeEVMRU5CUVVNN1NVRlJUU3hMUVVGTExFTkJRVU1zVDBGQldTeEZRVUZGTEVkQlFVY3NTVUZCVXp0UlFVTnVReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZET1VNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRnZRaXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU5zUkN4RFFVRkRPMGxCVTFNc1YwRkJWenRSUVVOcVFpeFBRVUZQTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeEpRVUZKTEVWQlFVVXNTVUZCU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVsQlFVa3NSVUZCUlN4SlFVRkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZEZWtjc1EwRkJRenRKUVN0Q1V5eFRRVUZUTEVOQlFVTXNVVUZCYlVJN1VVRkRia01zVFVGQlRTeGhRVUZoTEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhGUVVGRkxFMUJRVTBzUlVGQlJTeE5RVUZOTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRhRVVzVDBGQlR5eGhRVUZoTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxHRkJRV0VzUTBGQlF5eFBRVUZQTEVOQlFWTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wbEJRek5HTEVOQlFVTTdTVUZUVXl4WFFVRlhPMUZCUTJwQ0xFOUJRVThzWjBKQlFVMHNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXh4UWtGQmNVSXNRMEZCUXl4RFFVRkRPMGxCUTJ4RUxFTkJRVU03U1VGVFV5eFhRVUZYTzFGQlEycENMRTFCUVUwc1MwRkJTeXhIUVVGWkxFbEJRVWtzUzBGQlN5eEZRVUZGTEVOQlFVTXNTMEZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU4wUkN4SlFVRkpMRk5CUVZNc1EwRkJRenRSUVVOa0xFdEJRVXNzVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4VFFVRlRMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVTdXVUZET1VNc1NVRkJTU3hEUVVGRExFdEJRVXM3WjBKQlFVVXNVMEZCVXp0WlFVTnlRaXhKUVVGSkxFTkJRVU1zTWtKQlFXOUNMRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eGpRVUZqTEVWQlFVVXNTMEZCU3l4RFFVRkRMRVZCUVVVN1owSkJRemxFTEZOQlFWTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExGVkJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVOMlF5eE5RVUZOTzJGQlExUTdVMEZEU2p0UlFVTkVMRWxCUVVrc1UwRkJVeXhGUVVGRk8xbEJRMWdzVTBGQlV5eEhRVUZITEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlF6RkRPMkZCUVUwN1dVRkRTQ3hUUVVGVExFZEJRVWNzUlVGQlJTeERRVUZETzFOQlEyeENPMUZCUTBRc1QwRkJUeXhUUVVGVExFTkJRVU03U1VGRGNrSXNRMEZCUXp0RFFVTktPMEZCTTAxRUxEaENRVEpOUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLmV4cGlyZSA9IEluZmluaXR5O1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmV4cGlyZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKGR1cmF0aW9uIHx8IEluZmluaXR5KTtcbiAgICB9XG4gICAgZ2V0IGV4cGlyZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4cGlyZSA/IHRoaXMuZXhwaXJlIDwgbmV3IERhdGUoKS5nZXRUaW1lKCkgOiBmYWxzZTtcbiAgICB9XG59XG5jbGFzcyBCRE9NYXBDYWNoZSBleHRlbmRzIE1hcCB7XG4gICAgc2V0KGtleSwgdmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyBFbnRpdHkodmFsdWUsIGR1cmF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnNldChrZXksIGVudGl0eSk7XG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gc3VwZXIuZ2V0KGtleSk7XG4gICAgICAgIGlmIChlbnRpdHkgPT09IHVuZGVmaW5lZCB8fCBlbnRpdHkuZXhwaXJlZCkge1xuICAgICAgICAgICAgdGhpcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudGl0eS5kYXRhO1xuICAgIH1cbn1cbmV4cG9ydHMuQkRPTWFwQ2FjaGUgPSBCRE9NYXBDYWNoZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBUV0Z3UTJGamFHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMnhwWWk5Q1JFOU5ZWEJEWVdOb1pTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVV0QkxFMUJRVTBzVFVGQlRUdEpRV2RDVWl4WlFVRlpMRWxCUVU4c1JVRkJSU3hSUVVGcFFqdFJRVVk1UWl4WFFVRk5MRWRCUVZjc1VVRkJVU3hEUVVGRE8xRkJSemxDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMnBDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hKUVVGSkxFVkJRVVVzUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RFFVRkRMRkZCUVZFc1NVRkJTU3hSUVVGUkxFTkJRVU1zUTBGQlF6dEpRVU5vUlN4RFFVRkRPMGxCVTBRc1NVRkJTU3hQUVVGUE8xRkJRMUFzVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTndSU3hEUVVGRE8wTkJRMG83UVVGVFJDeE5RVUZoTEZkQlFXdENMRk5CUVZFc1IwRkJhVUk3U1VGWE4wTXNSMEZCUnl4RFFVRkRMRWRCUVUwc1JVRkJSU3hMUVVGUkxFVkJRVVVzVVVGQmFVSTdVVUZETVVNc1RVRkJUU3hOUVVGTkxFZEJRVWNzU1VGQlNTeE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRek5ETEU5QlFVOHNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEYkVNc1EwRkJRenRKUVZOTkxFZEJRVWNzUTBGQlF5eEhRVUZOTzFGQlEySXNUVUZCVFN4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTTVRaXhKUVVGSkxFMUJRVTBzUzBGQlN5eFRRVUZUTEVsQlFVa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVONFF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMnBDTEU5QlFVOHNVMEZCVXl4RFFVRkRPMU5CUTNCQ08xRkJRMFFzVDBGQlR5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCUTNaQ0xFTkJRVU03UTBGRFNqdEJRUzlDUkN4clEwRXJRa01pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xudmFyIEJET01vZGVsXzE7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgdXVpZF8xID0gcmVxdWlyZShcInV1aWRcIik7XG5jb25zdCB0eXBlX2dyYXBocWxfMSA9IHJlcXVpcmUoXCJ0eXBlLWdyYXBocWxcIik7XG5jb25zdCBCaW5kaW5nXzEgPSByZXF1aXJlKFwifmJkby9saWIvQmluZGluZ1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCBNb2RlbFJlZ2lzdHJ5XzEgPSByZXF1aXJlKFwifmJkby9saWIvTW9kZWxSZWdpc3RyeVwiKTtcbmxldCBCRE9Nb2RlbCA9IEJET01vZGVsXzEgPSBjbGFzcyBCRE9Nb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNCRE9Nb2RlbCA9IHRydWU7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbk5hbWUgPSBCRE9Nb2RlbF8xLmNvbGxlY3Rpb25OYW1lO1xuICAgICAgICB0aGlzLmRhdGFiYXNlTmFtZSA9IEJET01vZGVsXzEuZGF0YWJhc2VOYW1lO1xuICAgICAgICB0aGlzLmlkID0gYHBlbmRpbmdfJHt1dWlkXzEudjQoKX1gO1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzLmNvbnN0cnVjdG9yKS5uYW1lO1xuICAgICAgICBNb2RlbFJlZ2lzdHJ5XzEuTW9kZWxSZWdpc3RyeS5nZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgYmluZGluZ3MoKSB7XG4gICAgICAgIGNvbnN0IGJpbmRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLCBcImJpbmRpbmdzXCIpO1xuICAgICAgICByZXR1cm4gYmluZGluZ3MgPyBiaW5kaW5ncyA6IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlQnlJRChfaWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkXCIpO1xuICAgIH1cbiAgICBnZXRSZWZlcmVuY2VTdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgX3JlZmVyZW5jZToke3RoaXMuY2xhc3NOYW1lfSR7dGhpcy5pZH1gO1xuICAgIH1cbiAgICBiaW5kKHByb3BOYW1lLCBtb2RlKSB7XG4gICAgICAgIHJldHVybiBuZXcgQmluZGluZ18xLkJpbmRpbmcodGhpcywgcHJvcE5hbWUsIG1vZGUpO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMudG9KU09OKCk7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICBjb25zdCBkYXRhID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzW2tleV07XG4gICAgICAgICAgICAgICAgZGF0YVtrZXldID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgYXN5bmMgaXNVbnNhdmVkKGF0dHIpIHtcbiAgICAgICAgY29uc3QgdW5zYXZlZENoYW5nZXMgPSBhd2FpdCB0aGlzLmdldFVuc2F2ZWRDaGFuZ2VzKCk7XG4gICAgICAgIGxldCB1bnNhdmVkID0gZmFsc2U7XG4gICAgICAgIGlmICh1bnNhdmVkQ2hhbmdlcyAmJiB1bnNhdmVkQ2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShhdHRyKSlcbiAgICAgICAgICAgIHVuc2F2ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuc2F2ZWQpO1xuICAgIH1cbiAgICBhc3luYyBoYXNVbnNhdmVkQ2hhbmdlcygpIHtcbiAgICAgICAgY29uc3QgdW5zYXZlZENoYW5nZXMgPSBhd2FpdCB0aGlzLmdldFVuc2F2ZWRDaGFuZ2VzKCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoQm9vbGVhbihPYmplY3Qua2V5cyh1bnNhdmVkQ2hhbmdlcykubGVuZ3RoKSk7XG4gICAgfVxufTtcbkJET01vZGVsLmdyYXBoUUxUeXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKEJET01vZGVsXzEuY29uc3RydWN0b3IpO1xuQkRPTW9kZWwuaXNCRE9Nb2RlbCA9IHRydWU7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG5dLCBCRE9Nb2RlbC5wcm90b3R5cGUsIFwiaXNCRE9Nb2RlbFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBCRE9Nb2RlbC5wcm90b3R5cGUsIFwiY29sbGVjdGlvbk5hbWVcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgQkRPTW9kZWwucHJvdG90eXBlLCBcImRhdGFiYXNlTmFtZVwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKChfdHlwZSkgPT4gdHlwZV9ncmFwaHFsXzEuSUQpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIEJET01vZGVsLnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgQkRPTW9kZWwucHJvdG90eXBlLCBcImNsYXNzTmFtZVwiLCB2b2lkIDApO1xuQkRPTW9kZWwgPSBCRE9Nb2RlbF8xID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKHsgaXNBYnN0cmFjdDogdHJ1ZSB9KSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbl0sIEJET01vZGVsKTtcbmV4cG9ydHMuQkRPTW9kZWwgPSBCRE9Nb2RlbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBUVzlrWld3dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyeHBZaTlDUkU5TmIyUmxiQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUVzSzBKQlFXdERPMEZCUTJ4RExDdERRVUZyUXp0QlFVTnNReXc0UTBGQmQwUTdRVUZEZUVRc2MwUkJRVFpGTzBGQlF6ZEZMR3RFUVVGclJEdEJRVVZzUkN3d1JFRkJkVVE3UVVGWGRrUXNTVUZCYzBJc1VVRkJVU3huUWtGQk9VSXNUVUZCYzBJc1VVRkJVVHRKUVN0SE1VSTdVVUZvUkRSQ0xHVkJRVlVzUjBGQldTeEpRVUZKTEVOQlFVTTdVVUZSTTBJc2JVSkJRV01zUjBGQldTeFZRVUZSTEVOQlFVTXNZMEZCWXl4RFFVRkRPMUZCVVd4RUxHbENRVUZaTEVkQlFWa3NWVUZCVVN4RFFVRkRMRmxCUVZrc1EwRkJRenRSUVZONlF5eFBRVUZGTEVkQlFWY3NWMEZCVnl4VFFVRkpMRVZCUVVVc1JVRkJSU3hEUVVGRE8xRkJWWEpETEdOQlFWTXNSMEZCVnl4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNN1VVRmpNVVlzTmtKQlFXRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETDBNc1EwRkJRenRKUVhaSFJDeEpRVUZqTEZGQlFWRTdVVUZEYkVJc1RVRkJUU3hSUVVGUkxFZEJRVWNzYzBKQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGREwwTXNUMEZCVHl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVNelF5eERRVUZETzBsQk9FWk5MRTFCUVUwc1EwRkJReXhsUVVGbExFTkJRWGRETEVkQlFWazdVVUZETjBVc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8wbEJRM1pETEVOQlFVTTdTVUZaVFN4clFrRkJhMEk3VVVGRGNrSXNUMEZCVHl4alFVRmpMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNCRUxFTkJRVU03U1VGWFRTeEpRVUZKTEVOQlFUSkZMRkZCUVZjc1JVRkJSU3hKUVVGUk8xRkJRM1pITEU5QlFVOHNTVUZCU1N4cFFrRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRTJSQ3hEUVVGRE8wbEJRM3BITEVOQlFVTTdTVUZSVFN4UlFVRlJPMUZCUTFnc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMUZCUXpOQ0xFOUJRVThzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOb1F5eERRVUZETzBsQlZVMHNUVUZCVFR0UlFVTlVMRTFCUVUwc1NVRkJTU3hIUVVGdFFpeEZRVUZGTEVOQlFVTTdVVUZEYUVNc1MwRkJTeXhOUVVGTkxFZEJRVWNzU1VGQlNTeEpRVUZKTEVWQlFVVTdXVUZEY0VJc1NVRkJTU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NVMEZCVXl4RlFVRkZPMmRDUVVONlFpeE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlF6RkNMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTTdZVUZEZGtJN1UwRkRTanRSUVVORUxFOUJRVThzU1VGQlNTeERRVUZETzBsQlEyaENMRU5CUVVNN1NVRTBRazBzUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRXJRanRSUVVOc1JDeE5RVUZOTEdOQlFXTXNSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4RFFVRkRPMUZCUTNSRUxFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTndRaXhKUVVGSkxHTkJRV01zU1VGQlNTeGpRVUZqTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJRenRaUVVGRkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZETVVVc1QwRkJUeXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUTNCRExFTkJRVU03U1VGVFRTeExRVUZMTEVOQlFVTXNhVUpCUVdsQ08xRkJRekZDTEUxQlFVMHNZMEZCWXl4SFFVRkhMRTFCUVUwc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RlFVRkZMRU5CUVVNN1VVRkRkRVFzVDBGQlR5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVFVXNRMEZCUXp0RFFWZEtMRU5CUVVFN1FVRjJUVEJDTEc5Q1FVRlhMRWRCUVZFc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eFZRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1FVRm5ReTlFTEcxQ1FVRlZMRWRCUVZrc1NVRkJTU3hEUVVGRE8wRkJVWFJETzBsQlFWZ3NjVUpCUVZFc1JVRkJSVHM3TkVOQlFUUkRPMEZCVVRORE8wbEJRVmdzY1VKQlFWRXNSVUZCUlRzN1owUkJRVzFGTzBGQlVXeEZPMGxCUVZnc2NVSkJRVkVzUlVGQlJUczdPRU5CUVN0RU8wRkJVMmhFTzBsQlFYcENMSE5DUVVGVExFTkJRVU1zUTBGQlF5eExRVUZMTEVWQlFVVXNSVUZCUlN4RFFVRkRMR2xDUVVGRkxFTkJRVU03TzI5RFFVRjVRenRCUVZWeVJEdEpRVUZhTEhOQ1FVRlRMRVZCUVVVN096SkRRVUZyUmp0QlFXeEhOVVVzVVVGQlVUdEpRVVEzUWl3MFFrRkJaU3hEUVVGRExFVkJRVVVzVlVGQlZTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkRPenRIUVVOb1FpeFJRVUZSTEVOQk9FNDNRanRCUVRsT2NVSXNORUpCUVZFaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBlbnZpcm9ubWVudF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZW52aXJvbm1lbnRcIik7XG5jbGFzcyBCRE9Sb3V0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucm91dGVyTmFtZVNwYWNlID0gYC8ke3RoaXMuY29uc3RydWN0b3IubmFtZS50b0xvd2VyQ2FzZSgpfWA7XG4gICAgICAgIHRoaXMucm91dGVzID0gWycvJ107XG4gICAgICAgIHRoaXMudGVtcGxhdGVTdHJpbmcgPSAnPGRpdj48L2Rpdj4nO1xuICAgICAgICB0aGlzLmpzb25Pbmx5ID0gZmFsc2U7XG4gICAgfVxuICAgIHJlbmRlclRlbXBsYXRlKHRlbXBsYXRlUGFyYW1zKSB7XG4gICAgICAgIGxldCBzdHJpbmdUb1BhcnNlID0gbnVsbDtcbiAgICAgICAgaWYgKHV0aWxfMS5pc1N0cmluZyh0aGlzLnRlbXBsYXRlU3RyaW5nKSkge1xuICAgICAgICAgICAgc3RyaW5nVG9QYXJzZSA9IGVudmlyb25tZW50XzEudGVtcGxhdGVFbnZpcm9ubWVudC5yZW5kZXJTdHJpbmcodGhpcy50ZW1wbGF0ZVN0cmluZywgdGVtcGxhdGVQYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1dGlsXzEuaXNPYmplY3QodGhpcy50ZW1wbGF0ZVN0cmluZykpIHtcbiAgICAgICAgICAgIHN0cmluZ1RvUGFyc2UgPSB0aGlzLnRlbXBsYXRlU3RyaW5nLnJlbmRlcih0ZW1wbGF0ZVBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cmluZ1RvUGFyc2U7XG4gICAgfVxuICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zKF9yZXF1ZXN0T3JQYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn1cbmV4cG9ydHMuQkRPUm91dGUgPSBCRE9Sb3V0ZTtcbkJET1JvdXRlLmF0dGFjaFRvU2VydmVycyA9IFsnKiddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFVtOTFkR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJ4cFlpOUNSRTlTYjNWMFpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVWQkxEQkRRVUZ4UkR0QlFVTnlSQ3gzUkVGQk5rUTdRVUZUTjBRc1RVRkJjMElzVVVGQlVUdEpRVUU1UWp0UlFYRkNWeXh2UWtGQlpTeEhRVUZYTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVWQlFVVXNRMEZCUXp0UlFWRndSU3hYUVVGTkxFZEJRV0VzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFXdENkRUlzYlVKQlFXTXNSMEZCYzBJc1lVRkJZU3hEUVVGRE8xRkJWV3hFTEdGQlFWRXNSMEZCV1N4TFFVRkxMRU5CUVVNN1NVRnRSSGhETEVOQlFVTTdTVUY0UTJFc1kwRkJZeXhEUVVGRExHTkJRVGhDTzFGQlEyNUVMRWxCUVVrc1lVRkJZU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU42UWl4SlFVRkpMR1ZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVWQlFVVTdXVUZETDBJc1lVRkJZU3hIUVVGSExHbERRVUZ0UWl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eEZRVUZGTEdOQlFXTXNRMEZCUXl4RFFVRkRPMU5CUTNwR08xRkJRMFFzU1VGQlNTeGxRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhGUVVGRk8xbEJReTlDTEdGQlFXRXNSMEZCWXl4SlFVRkpMRU5CUVVNc1kwRkJaU3hEUVVGRExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXp0VFFVTXhSVHRSUVVORUxFOUJRVThzWVVGQllTeERRVUZETzBsQlEzcENMRU5CUVVNN1NVRlhVeXhMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEdkQ1FVRXdRenRSUVVOeVJTeFBRVUZQTEVWQlFVVXNRMEZCUXp0SlFVTmtMRU5CUVVNN08wRkJNVVpNTERSQ1FUUkhRenRCUVdoSGFVSXNkMEpCUVdVc1IwRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQmluZGluZ18xID0gcmVxdWlyZShcIn5iZG8vbGliL0JpbmRpbmdcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgZnJhbWV3b3JrXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9mcmFtZXdvcmtcIik7XG5mdW5jdGlvbiBiYXNlQ29uc3RydWN0b3JGYWN0b3J5KGN0b3IsIGNvbnN0UGFyYW1zSW5kZXgpIHtcbiAgICBjbGFzcyBCYXNlQ29uc3RydWN0b3IgZXh0ZW5kcyBjdG9yIHtcbiAgICAgICAgY29uc3RydWN0b3IoLi4ucGFyYW1zKSB7XG4gICAgICAgICAgICBzdXBlciguLi5wYXJhbXMpO1xuICAgICAgICAgICAgdGhpcy5jb2xsZWN0aW9uTmFtZSA9IEJhc2VDb25zdHJ1Y3Rvci5jb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgICAgIHRoaXMuZGF0YWJhc2VOYW1lID0gQmFzZUNvbnN0cnVjdG9yLmRhdGFiYXNlTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0UGFyYW1zID0gcGFyYW1zW2NvbnN0UGFyYW1zSW5kZXhdO1xuICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YSh0aGlzLCBcIm5vcm1hbEZ1bmN0aW9uYWxpdHlcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIUJhc2VDb25zdHJ1Y3Rvci5pc1Byb2NlZHVyYWxDb21wb25lbnRDb25zdHJ1Y3Rpb24pXG4gICAgICAgICAgICAgICAgdGhpcy5pbnZva2VMaWZlQ3ljbGUoY29uc3RQYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIGludm9rZUxpZmVDeWNsZShjb25zdFBhcmFtcykge1xuICAgICAgICAgICAgaWYgKCEoY29uc3RQYXJhbXMgaW5zdGFuY2VvZiBPYmplY3QpKVxuICAgICAgICAgICAgICAgIGNvbnN0UGFyYW1zID0ge307XG4gICAgICAgICAgICBsZXQgZGVmYXVsdFNldHRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLCBcImRlZmF1bHRTZXR0aW5nc1wiKSB8fCB7fTtcbiAgICAgICAgICAgIGRlZmF1bHRTZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdFNldHRpbmdzLCBjb25zdFBhcmFtcyk7XG4gICAgICAgICAgICBpZiAodXRpbF8xLmlzRnVuY3Rpb24odGhpcy5nZXROYW1lc3BhY2VkU3RvcmFnZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGNvbnN0UGFyYW1zLmlkIHx8IGRlZmF1bHRTZXR0aW5ncy5pZDtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWNoZWRTZXR0aW5ncyA9IHRoaXMuZ2V0TmFtZXNwYWNlZFN0b3JhZ2UoXCIqXCIsIFwiaWRcIiwgaWQpIHx8IHt9O1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNhY2hlZFNldHRpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWNoZWRTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZGVmYXVsdFNldHRpbmdzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEJpbmRpbmdfMS5CaW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRWYWx1ZShjYWNoZWRTZXR0aW5nc1trZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U2V0dGluZ3Nba2V5XSA9IGNhY2hlZFNldHRpbmdzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRTZXR0aW5ncyk7XG4gICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRoaXMsIFwiY29uc3RydWN0aW9uQ29tcGxldGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoZnJhbWV3b3JrXzEuaXNDb21wb25lbnQoY3RvcikgJiYgdXRpbF8xLmlzRnVuY3Rpb24odGhpcy5yZW5kZXJUZW1wbGF0ZSkpXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUZW1wbGF0ZSgpO1xuICAgICAgICAgICAgaWYgKHV0aWxfMS5pc0Z1bmN0aW9uKHRoaXMuY29uc3RydWN0ZWRDYWxsYmFjaykpXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3RlZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQmFzZUNvbnN0cnVjdG9yLmNsYXNzTmFtZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihCYXNlQ29uc3RydWN0b3IpLm5hbWU7XG4gICAgQmFzZUNvbnN0cnVjdG9yLmdyYXBoUUxUeXBlID0gY3RvcjtcbiAgICBCYXNlQ29uc3RydWN0b3IuY29sbGVjdGlvbk5hbWUgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKEJhc2VDb25zdHJ1Y3RvciwgXCJjb2xsZWN0aW9uTmFtZVwiKTtcbiAgICBCYXNlQ29uc3RydWN0b3IuZGF0YWJhc2VOYW1lID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShCYXNlQ29uc3RydWN0b3IsIFwiZGF0YWJhc2VOYW1lXCIpO1xuICAgIEJhc2VDb25zdHJ1Y3Rvci5pc1Byb2NlZHVyYWxDb21wb25lbnRDb25zdHJ1Y3Rpb24gPSBmYWxzZTtcbiAgICByZXR1cm4gQmFzZUNvbnN0cnVjdG9yO1xufVxuZXhwb3J0cy5iYXNlQ29uc3RydWN0b3JGYWN0b3J5ID0gYmFzZUNvbnN0cnVjdG9yRmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFtRnpaVU52Ym5OMGNuVmpkRzl5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5c2FXSXZRbUZ6WlVOdmJuTjBjblZqZEc5eUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc09FTkJRVEpETzBGQlF6TkRMR3RFUVVGclJUdEJRVU5zUlN3d1EwRkJOa003UVVGRE4wTXNiMFJCUVcxRU8wRkJkMFZ1UkN4VFFVRm5RaXh6UWtGQmMwSXNRMEZCT0VNc1NVRkJUeXhGUVVGRkxHZENRVUYzUWp0SlFWRnFTQ3hOUVVGTkxHVkJRV2RDTEZOQlFWRXNTVUZCU1R0UlFXZEZPVUlzV1VGQldTeEhRVUZITEUxQlFXRTdXVUZEZUVJc1MwRkJTeXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTTdXVUZZVEN4dFFrRkJZeXhIUVVGWkxHVkJRV1VzUTBGQlF5eGpRVUZqTEVOQlFVTTdXVUZSZWtRc2FVSkJRVmtzUjBGQldTeGxRVUZsTEVOQlFVTXNXVUZCV1N4RFFVRkRPMWxCU1dwRkxFMUJRVTBzVjBGQlZ5eEhRVUZITEUxQlFVMHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eERRVUZETzFsQlF6ZERMSGxDUVVGakxFTkJRVU1zU1VGQlNTeEZRVUZGTEhGQ1FVRnhRaXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEyeEVMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zYVVOQlFXbERPMmRDUVVGRkxFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1VVRkRPVVlzUTBGQlF6dFJRVkZOTEdWQlFXVXNRMEZCUXl4WFFVRjNRenRaUVVNelJDeEpRVUZKTEVOQlFVTXNRMEZCUXl4WFFVRlhMRmxCUVZrc1RVRkJUU3hEUVVGRE8yZENRVUZGTEZkQlFWY3NSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRka1FzU1VGQlNTeGxRVUZsTEVkQlFUSkRMSE5DUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTEdsQ1FVRnBRaXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzFsQlEzcEhMR1ZCUVdVc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEdWQlFXVXNSVUZCUlN4WFFVRlhMRU5CUVVNc1EwRkJRenRaUVVNNVJDeEpRVUZKTEdsQ1FVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRVZCUVVVN1owSkJRM1pETEUxQlFVMHNSVUZCUlN4SFFVRkhMRmRCUVZjc1EwRkJReXhGUVVGRkxFbEJRVWtzWlVGQlpTeERRVUZETEVWQlFVVXNRMEZCUXp0blFrRkRhRVFzVFVGQlRTeGpRVUZqTEVkQlFVY3NTVUZCU1N4RFFVRkRMRzlDUVVGdlFpeERRVUZETEVkQlFVY3NSVUZCUlN4SlFVRkpMRVZCUVVVc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzJkQ1FVTjBSU3hMUVVGTExFMUJRVTBzUjBGQlJ5eEpRVUZKTEdOQlFXTXNSVUZCUlR0dlFrRkRPVUlzU1VGQlNTeGpRVUZqTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8zZENRVU53UXl4TlFVRk5MRTlCUVU4c1IwRkJSeXhsUVVGbExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdkMEpCUTNKRExFbEJRVWtzVDBGQlR5eFpRVUZaTEdsQ1FVRlBMRVZCUVVVN05FSkJRelZDTEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdlVUpCUTNwRE96czBRa0ZCVFN4bFFVRmxMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPM0ZDUVVOeVJEdHBRa0ZEU2p0aFFVTktPMWxCUTBRc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNaVUZCWlN4RFFVRkRMRU5CUVVNN1dVRkRja01zZVVKQlFXTXNRMEZCUXl4SlFVRkpMRVZCUVVVc2MwSkJRWE5DTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRia1FzU1VGQlNTeDFRa0ZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxHbENRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJRenRuUWtGQlJTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RlFVRkZMRU5CUVVNN1dVRkRhRVlzU1VGQlNTeHBRa0ZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNRMEZCUXp0blFrRkJSU3hKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRVZCUVVVc1EwRkJRenRSUVVONlJTeERRVUZET3p0SlFYcEdjMElzZVVKQlFWTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXp0SlFWVjRSQ3d5UWtGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXp0SlFWTnVRaXc0UWtGQll5eEhRVUZaTEhOQ1FVRlhMRU5CUVVNc1pVRkJaU3hGUVVGRkxHZENRVUZuUWl4RFFVRkRMRU5CUVVNN1NVRlRla1VzTkVKQlFWa3NSMEZCV1N4elFrRkJWeXhEUVVGRExHVkJRV1VzUlVGQlJTeGpRVUZqTEVOQlFVTXNRMEZCUXp0SlFWVTVSU3hwUkVGQmFVTXNSMEZCV1N4TFFVRkxMRU5CUVVNN1NVRnhSSEpGTEU5QlFVOHNaVUZCWlN4RFFVRkRPMEZCUXpOQ0xFTkJRVU03UVVFMVIwUXNkMFJCTkVkREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBGaWVsZF8xID0gcmVxdWlyZShcIn5iZG8vbGliL0ZpZWxkXCIpO1xuY29uc3QgZnJhbWV3b3JrXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9mcmFtZXdvcmtcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCBpbmlCaW5kTmFtZSA9IFwiaW5pdGlhdG9yQmluZGluZ1wiO1xuY29uc3QgYmluZE5hbWUgPSBcImJpbmRpbmdzXCI7XG5jbGFzcyBCaW5kaW5nIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5LCBtb2RlID0gXCJSZWFkV3JpdGVcIikge1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgICAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0b3IgPSB0aGlzLmdldE9yaWdpbmFsUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSB8fCB0aGlzLm9iamVjdFt0aGlzLnByb3BlcnR5XTtcbiAgICB9XG4gICAgaW5zdGFsbChpbml0aWF0b3IsIHByb3BlcnR5KSB7XG4gICAgICAgIHRoaXMuaW5pdGlhdG9yID0gaW5pdGlhdG9yO1xuICAgICAgICB0aGlzLmluaXRpYXRvclByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgICAgIHRoaXMuaW5pdGlhdG9yRGVzY3JpcHRvciA9IHRoaXMuZ2V0T3JpZ2luYWxQcm9wZXJ0eURlc2NyaXB0b3IodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHkpO1xuICAgICAgICBpZiAoIVJlZmxlY3QuaGFzTWV0YWRhdGEoaW5pQmluZE5hbWUsIHRoaXMuaW5pdGlhdG9yKSlcbiAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcy5pbml0aWF0b3IsIGluaUJpbmROYW1lLCBuZXcgTWFwKCkpO1xuICAgICAgICBpZiAoIVJlZmxlY3QuaGFzTWV0YWRhdGEoYmluZE5hbWUsIHRoaXMub2JqZWN0KSlcbiAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcy5vYmplY3QsIGJpbmROYW1lLCBuZXcgTWFwKCkpO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JNRGF0YSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5pbml0aWF0b3IsIGluaUJpbmROYW1lKSB8fCBuZXcgTWFwKCk7XG4gICAgICAgIGNvbnN0IGluaXRpYXRvckJpbmRpbmcgPSBpbml0aWF0b3JNRGF0YS5nZXQodGhpcy5pbml0aWF0b3JQcm9wZXJ0eSk7XG4gICAgICAgIGlmIChpbml0aWF0b3JCaW5kaW5nKVxuICAgICAgICAgICAgaW5pdGlhdG9yQmluZGluZy5yZW1vdmUoKTtcbiAgICAgICAgY29uc3QgbURhdGEgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKHRoaXMub2JqZWN0LCBiaW5kTmFtZSkgfHwgbmV3IE1hcCgpO1xuICAgICAgICBpZiAoIW1EYXRhLmhhcyh0aGlzLnByb3BlcnR5KSlcbiAgICAgICAgICAgIG1EYXRhLnNldCh0aGlzLnByb3BlcnR5LCBbXSk7XG4gICAgICAgIG1EYXRhLmdldCh0aGlzLnByb3BlcnR5KS5wdXNoKHRoaXMpO1xuICAgICAgICBpbml0aWF0b3JNRGF0YS5zZXQodGhpcy5pbml0aWF0b3JQcm9wZXJ0eSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IGZpZWxkTURhdGFOYW1lID0gYGZpZWxkOiR7dGhpcy5wcm9wZXJ0eX1gO1xuICAgICAgICBjb25zdCBvYmplY3RGaWVsZCA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSk7XG4gICAgICAgIGNvbnN0IGluaXRpYXRvckZpZWxkID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5KTtcbiAgICAgICAgbGV0IGZpZWxkID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMub2JqZWN0LCBmaWVsZE1EYXRhTmFtZSk7XG4gICAgICAgIGlmICghZmllbGQpXG4gICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIGZpZWxkTURhdGFOYW1lLCBuZXcgRmllbGRfMS5GaWVsZCh0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSkpO1xuICAgICAgICBmaWVsZCA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLm9iamVjdCwgZmllbGRNRGF0YU5hbWUpO1xuICAgICAgICBmaWVsZC5hZGRGaWVsZChvYmplY3RGaWVsZCk7XG4gICAgICAgIGZpZWxkLmFkZEZpZWxkKGluaXRpYXRvckZpZWxkKTtcbiAgICAgICAgdGhpcy5yZXBsYWNlRGVzY3JpcHRvcigpO1xuICAgICAgICBSZWZsZWN0LnNldCh0aGlzLmluaXRpYXRvciwgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSwgdGhpcy52YWx1ZU9mKCkpO1xuICAgIH1cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIGNvbnN0IG9iamVjdFZhbHVlID0gdGhpcy5vYmplY3RbdGhpcy5wcm9wZXJ0eV07XG4gICAgICAgIGNvbnN0IGluaXRpYXRvclZhbHVlID0gdGhpcy5pbml0aWF0b3JbdGhpcy5pbml0aWF0b3JQcm9wZXJ0eV07XG4gICAgICAgIGNvbnN0IG9iamVjdE1EYXRhID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLm9iamVjdCwgYmluZE5hbWUpO1xuICAgICAgICBjb25zdCBvYmplY3RCaW5kaW5ncyA9IG9iamVjdE1EYXRhID8gb2JqZWN0TURhdGEuZ2V0KHRoaXMucHJvcGVydHkpIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBpbml0aWF0b3JNRGF0YSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5pbml0aWF0b3IsIGluaUJpbmROYW1lKTtcbiAgICAgICAgY29uc3QgaW5pdGlhdG9yQmluZGluZyA9IGluaXRpYXRvck1EYXRhID8gaW5pdGlhdG9yTURhdGEuZ2V0KHRoaXMuaW5pdGlhdG9yUHJvcGVydHkudG9TdHJpbmcoKSkgOiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IGZpZWxkTURhdGFOYW1lID0gYGZpZWxkOiR7dGhpcy5wcm9wZXJ0eX1gO1xuICAgICAgICBjb25zdCBmaWVsZCA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLm9iamVjdCwgZmllbGRNRGF0YU5hbWUpO1xuICAgICAgICBpZiAoaW5pdGlhdG9yQmluZGluZykge1xuICAgICAgICAgICAgaWYgKGluaXRpYXRvck1EYXRhKVxuICAgICAgICAgICAgICAgIGluaXRpYXRvck1EYXRhLmRlbGV0ZSh0aGlzLmluaXRpYXRvclByb3BlcnR5LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgdGhpcy5yZXN0b3JlRGVzY3JpcHRvcih0aGlzLmluaXRpYXRvciwgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSwgaW5pdGlhdG9yVmFsdWUsIHRoaXMuaW5pdGlhdG9yRGVzY3JpcHRvcik7XG4gICAgICAgICAgICBmaWVsZC5yZW1vdmVGaWVsZChtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHkpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqZWN0QmluZGluZ3MpIHtcbiAgICAgICAgICAgIHV0aWxfMS5yZW1vdmVFbGVtZW50RnJvbUFycmF5KG9iamVjdEJpbmRpbmdzLCB0aGlzKTtcbiAgICAgICAgICAgIGZpZWxkLnJlbW92ZUZpZWxkKG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YSh0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSkpO1xuICAgICAgICAgICAgaWYgKCFvYmplY3RCaW5kaW5ncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0TURhdGEpXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdE1EYXRhLmRlbGV0ZSh0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RvcmVEZXNjcmlwdG9yKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5LCBvYmplY3RWYWx1ZSwgdGhpcy5kZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEodGhpcy5vYmplY3QsIGZpZWxkTURhdGFOYW1lLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXBsYWNlRGVzY3JpcHRvcigpIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpO1xuICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5LCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGJpbmRpbmdHZXQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoYXQubW9kZSA9PT0gXCJXcml0ZU9ubHlcIiAmJiB0aGlzID09PSB0aGF0LmluaXRpYXRvcilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJhbWV3b3JrXzEuZ2V0dGVyKHRoYXQub2JqZWN0LCB0aGF0LnByb3BlcnR5LCBcImZpZWxkXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gYmluZGluZ1NldChuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5tb2RlID09PSBcIlJlYWRPbmx5XCIgJiYgdGhpcyA9PT0gdGhhdC5pbml0aWF0b3IpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBmcmFtZXdvcmtfMS5zZXR0ZXIodGhhdC5vYmplY3QsIHRoYXQucHJvcGVydHksIG5ld1ZhbCwgXCJmaWVsZFwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiaW5kaW5nRGVzYyA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0aGlzLmluaXRpYXRvciwgdGhpcy5pbml0aWF0b3JQcm9wZXJ0eSk7XG4gICAgICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGhpcy5pbml0aWF0b3IsIHRoaXMuaW5pdGlhdG9yUHJvcGVydHksIGJpbmRpbmdEZXNjKTtcbiAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YSh0aGlzLm9iamVjdCwgXCJiaW5kaW5nRGVzY3JpcHRvclwiLCBiaW5kaW5nRGVzYyk7XG4gICAgfVxuICAgIHJlc3RvcmVEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHksIHZhbHVlLCBkZXNjcmlwdG9yKSB7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eSk7XG4gICAgICAgIGlmIChkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuaW5pdGlhdG9yLCB0aGlzLmluaXRpYXRvclByb3BlcnR5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBvYmplY3RbcHJvcGVydHkudG9TdHJpbmcoKV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0T3JpZ2luYWxQcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBrZXkpIHtcbiAgICAgICAgbGV0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIGtleSk7XG4gICAgICAgIGxldCBtRGF0YU5hbWUgPSBiaW5kTmFtZTtcbiAgICAgICAgbGV0IHByb3RvdHlwZSA9IG9iamVjdDtcbiAgICAgICAgaWYgKG9iamVjdCA9PT0gdGhpcy5pbml0aWF0b3IpXG4gICAgICAgICAgICBtRGF0YU5hbWUgPSBpbmlCaW5kTmFtZTtcbiAgICAgICAgd2hpbGUgKCFkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKTtcbiAgICAgICAgICAgIGlmICghcHJvdG90eXBlKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgaWYgKHByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIkJhc2VDb25zdHJ1Y3RvclwiKVxuICAgICAgICAgICAgICAgIHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpO1xuICAgICAgICAgICAgZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvdHlwZSwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VhcmNoRGVzY3JpcHRvckluQmluZGluZ3MgPSBmYWxzZTtcbiAgICAgICAgaWYgKGRlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yLnNldCAmJiBkZXNjcmlwdG9yLnNldC5uYW1lID09PSBcImJpbmRpbmdTZXRcIilcbiAgICAgICAgICAgICAgICBzZWFyY2hEZXNjcmlwdG9ySW5CaW5kaW5ncyA9IHRydWU7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvci5nZXQgJiYgZGVzY3JpcHRvci5nZXQubmFtZSA9PT0gXCJiaW5kaW5nR2V0XCIpXG4gICAgICAgICAgICAgICAgc2VhcmNoRGVzY3JpcHRvckluQmluZGluZ3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWFyY2hEZXNjcmlwdG9ySW5CaW5kaW5ncykge1xuICAgICAgICAgICAgY29uc3QgbURhdGEgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKG9iamVjdCwgbURhdGFOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGJpbmRpbmdzID0gbURhdGEgPyBtRGF0YS5nZXQoa2V5LnRvU3RyaW5nKCkpIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKGJpbmRpbmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJpbmRpbmdzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRvciA9IGJpbmRpbmdzWzBdLmRlc2NyaXB0b3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRvciA9IGJpbmRpbmdzLmluaXRpYXRvckRlc2NyaXB0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gICAgfVxufVxuZXhwb3J0cy5CaW5kaW5nID0gQmluZGluZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFtbHVaR2x1Wnk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmJHbGlMMEpwYm1ScGJtY3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTd3dRMEZCZVVRN1FVRkZla1FzTUVOQlFYVkRPMEZCUTNaRExHOUVRVUZ6UkR0QlFVTjBSQ3hyUkVGQkswYzdRVUZKTDBjc1RVRkJUU3hYUVVGWExFZEJRVWNzYTBKQlFXdENMRU5CUVVNN1FVRkRka01zVFVGQlRTeFJRVUZSTEVkQlFVY3NWVUZCVlN4RFFVRkRPMEZCYzBJMVFpeE5RVUZoTEU5QlFVODdTVUV3UldoQ0xGbEJRVmtzVFVGQlV5eEZRVUZGTEZGQlFWY3NSVUZCUlN4UFFVRnZRaXhYUVVGWE8xRkJReTlFTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRM0pDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRE8xRkJRM3BDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMnBDTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExEWkNRVUUyUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMGxCUTNKR0xFTkJRVU03U1VGTFRTeFJRVUZSTEVOQlFVTXNTMEZCVnp0UlFVTjJRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVTjJRaXhEUVVGRE8wbEJVVTBzVDBGQlR6dFJRVU5XTEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRKUVVOd1JDeERRVUZETzBsQlUwMHNUMEZCVHl4RFFVRkRMRk5CUVZrc1JVRkJSU3hSUVVGWE8xRkJRM0JETEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1UwRkJVeXhEUVVGRE8xRkJRek5DTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUjBGQlJ5eFJRVUZSTEVOQlFVTTdVVUZEYkVNc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4SFFVRkhMRWxCUVVrc1EwRkJReXcyUWtGQk5rSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8xRkJSM1JITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExGZEJRVmNzUlVGQlJTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRPMWxCUVVVc2VVSkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRmRCUVZjc1JVRkJSU3hKUVVGSkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZET1Vjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03V1VGQlJTeDVRa0ZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzVVVGQlVTeEZRVUZGTEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVkc1J5eE5RVUZOTEdOQlFXTXNSMEZCUnl4elFrRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNWMEZCVnl4RFFVRkRMRWxCUVVrc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU0zUlN4TlFVRk5MR2RDUVVGblFpeEhRVUZITEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNN1VVRkRjRVVzU1VGQlNTeG5Ra0ZCWjBJN1dVRkJSU3huUWtGQlowSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRSUVVkb1JDeE5RVUZOTEV0QlFVc3NSMEZCUnl4elFrRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNVVUZCVVN4RFFVRkRMRWxCUVVrc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU01UkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRPMWxCUVVVc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRelZFTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOd1F5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVkcVJDeE5RVUZOTEdOQlFXTXNSMEZCUnl4VFFVRlRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVU5vUkN4TlFVRk5MRmRCUVZjc1IwRkJSeXc0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTndSU3hOUVVGTkxHTkJRV01zUjBGQlJ5dzRRa0ZCYlVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eERRVUZETzFGQlEyNUdMRWxCUVVrc1MwRkJTeXhIUVVGblFpdzRRa0ZCYlVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEdOQlFXTXNRMEZCUXl4RFFVRkRPMUZCUXpGRkxFbEJRVWtzUTBGQlF5eExRVUZMTzFsQlFVVXNhVU5CUVhOQ0xFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4alFVRmpMRVZCUVVVc1NVRkJTU3hoUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVWQyUnl4TFFVRkxMRWRCUVVjc09FSkJRVzFDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hqUVVGakxFTkJRV2RDTEVOQlFVTTdVVUZEZUVVc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTTFRaXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMUZCUnk5Q0xFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hEUVVGRE8xRkJRM3BDTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRlRVVzUTBGQlF6dEpRVTlOTEUxQlFVMDdVVUZGVkN4TlFVRk5MRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVNdlF5eE5RVUZOTEdOQlFXTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8xRkJSemxFTEUxQlFVMHNWMEZCVnl4SFFVRkhMSE5DUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVOMlJDeE5RVUZOTEdOQlFXTXNSMEZCUnl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTTdVVUZEYUVZc1RVRkJUU3hqUVVGakxFZEJRVWNzYzBKQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxGZEJRVmNzUTBGQlF5eERRVUZETzFGQlEyaEZMRTFCUVUwc1owSkJRV2RDTEVkQlFVY3NZMEZCWXl4RFFVRkRMRU5CUVVNc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU03VVVGRk5VY3NUVUZCVFN4alFVRmpMRWRCUVVjc1UwRkJVeXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZEYUVRc1RVRkJUU3hMUVVGTExFZEJRV2RDTERoQ1FVRnRRaXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNZMEZCWXl4RFFVRkRMRU5CUVVNN1VVRkZOVVVzU1VGQlNTeG5Ra0ZCWjBJc1JVRkJSVHRaUVVOc1FpeEpRVUZKTEdOQlFXTTdaMEpCUVVVc1kwRkJZeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTTNSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzWTBGQll5eEZRVUZGTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eERRVUZETzFsQlEzcEhMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zT0VKQlFXMUNMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEyeEdPMUZCUlVRc1NVRkJTU3hqUVVGakxFVkJRVVU3V1VGRGFFSXNOa0pCUVhOQ0xFTkJRVU1zWTBGQll5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUXpkRExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNPRUpCUVcxQ0xFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51UlN4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUlVGQlJUdG5Ra0ZEZUVJc1NVRkJTU3hYUVVGWE8yOUNRVUZGTEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzJkQ1FVTnVSQ3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdaMEpCUTJwR0xHbERRVUZ6UWl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzWTBGQll5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMkZCUXpkRU8xTkJRMG83U1VGRFRDeERRVUZETzBsQlUwOHNhVUpCUVdsQ08xRkJRM0pDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOc1FpeFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUTI1RUxFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTzFsQlF5OURMRWRCUVVjc1JVRkJSU3hUUVVGVExGVkJRVlU3WjBKQlEzQkNMRWxCUVVrc1NVRkJTU3hEUVVGRExFbEJRVWtzUzBGQlN5eFhRVUZYTEVsQlFVa3NTVUZCU1N4TFFVRkxMRWxCUVVrc1EwRkJReXhUUVVGVE8yOUNRVUZGTEU5QlFVOHNVMEZCVXl4RFFVRkRPMmRDUVVNelJTeFBRVUZQTEd0Q1FVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8xbEJRM1pFTEVOQlFVTTdXVUZEUkN4SFFVRkhMRVZCUVVVc1UwRkJVeXhWUVVGVkxFTkJRVU1zVFVGQmFVUTdaMEpCUTNSRkxFbEJRVWtzU1VGQlNTeERRVUZETEVsQlFVa3NTMEZCU3l4VlFVRlZMRWxCUVVrc1NVRkJTU3hMUVVGTExFbEJRVWtzUTBGQlF5eFRRVUZUTzI5Q1FVRkZMRTlCUVU4N1owSkJRMmhGTEd0Q1FVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRTFCUVUwc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dFpRVU40UkN4RFFVRkRPMWxCUTBRc1dVRkJXU3hGUVVGRkxFbEJRVWs3V1VGRGJFSXNWVUZCVlN4RlFVRkZMRWxCUVVrN1UwRkRia0lzUTBGQlF5eERRVUZETzFGQlEwZ3NUVUZCVFN4WFFVRlhMRWRCUVVjc1QwRkJUeXhEUVVGRExIZENRVUYzUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCZFVJc1EwRkJRenRSUVVOMlJ5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFTkJRVU03VVVGREwwUXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTTFSU3g1UWtGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc2JVSkJRVzFDTEVWQlFVVXNWMEZCVnl4RFFVRkRMRU5CUVVNN1NVRkRiRVVzUTBGQlF6dEpRVmxQTEdsQ1FVRnBRaXhEUVVGRExFMUJRWE5DTEVWQlFVVXNVVUZCYlVJc1JVRkJSU3hMUVVGVkxFVkJRVVVzVlVGQmNVSTdVVUZEY0Vjc1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eE5RVUZOTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkRla01zU1VGQlNTeFZRVUZWTEVWQlFVVTdXVUZEV2l4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRPMU5CUXpsRk8xRkJRMFFzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF6dEpRVU40UXl4RFFVRkRPMGxCVjA4c05rSkJRVFpDTEVOQlFVTXNUVUZCWXl4RlFVRkZMRWRCUVdNN1VVRkRhRVVzU1VGQlNTeFZRVUZWTEVkQlFXMURMRTlCUVU4c1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGREwwWXNTVUZCU1N4VFFVRlRMRWRCUVc5RExGRkJRVkVzUTBGQlF6dFJRVU14UkN4SlFVRkpMRk5CUVZNc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRGRrSXNTVUZCU1N4TlFVRk5MRXRCUVdFc1NVRkJTU3hEUVVGRExGTkJRVk03V1VGQlJTeFRRVUZUTEVkQlFVY3NWMEZCVnl4RFFVRkRPMUZCUXk5RUxFOUJRVThzUTBGQlF5eFZRVUZWTEVWQlFVVTdXVUZEYUVJc1UwRkJVeXhIUVVGSExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1dVRkROME1zU1VGQlNTeERRVUZETEZOQlFWTTdaMEpCUVVVc1RVRkJUVHRaUVVOMFFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hMUVVGTExHbENRVUZwUWp0blFrRkJSU3hUUVVGVExFZEJRVWNzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRaUVVOdVJ5eFZRVUZWTEVkQlFVY3NUMEZCVHl4RFFVRkRMSGRDUVVGM1FpeERRVUZETEZOQlFWTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRUUVVOcVJUdFJRVU5FTEVsQlFVa3NNRUpCUVRCQ0xFZEJRVWNzUzBGQlN5eERRVUZETzFGQlEzWkRMRWxCUVVrc1ZVRkJWU3hGUVVGRk8xbEJRMW9zU1VGQlNTeFZRVUZWTEVOQlFVTXNSMEZCUnl4SlFVRkpMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeExRVUZMTEZsQlFWazdaMEpCUVVVc01FSkJRVEJDTEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUXpsR0xFbEJRVWtzVlVGQlZTeERRVUZETEVkQlFVY3NTVUZCU1N4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUzBGQlN5eFpRVUZaTzJkQ1FVRkZMREJDUVVFd1FpeEhRVUZITEVsQlFVa3NRMEZCUXp0VFFVTnFSenRSUVVORUxFbEJRVWtzTUVKQlFUQkNMRVZCUVVVN1dVRkROVUlzVFVGQlRTeExRVUZMTEVkQlFVY3NjMEpCUVZjc1EwRkJUU3hOUVVGTkxFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdXVUZEYkVRc1RVRkJUU3hSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU03V1VGREwwUXNTVUZCU1N4UlFVRlJMRVZCUVVVN1owSkJRMVlzU1VGQlNTeFJRVUZSTEZsQlFWa3NTMEZCU3l4RlFVRkZPMjlDUVVNelFpeFZRVUZWTEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGVkJRVlVzUTBGQlF6dHBRa0ZEZGtNN08yOUNRVUZOTEZWQlFWVXNSMEZCUnl4UlFVRlJMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTTdZVUZEY0VRN1UwRkRTanRSUVVORUxFOUJRVThzVlVGQlZTeERRVUZETzBsQlEzUkNMRU5CUVVNN1EwRkRTanRCUVhCUlJDd3dRa0Z2VVVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIFZhbHVlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG59XG5leHBvcnRzLlZhbHVlRXJyb3IgPSBWYWx1ZUVycm9yO1xuY2xhc3MgVHlwZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuZXhwb3J0cy5UeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5jbGFzcyBDb25maWd1cmF0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG59XG5leHBvcnRzLkNvbmZpZ3VyYXRpb25FcnJvciA9IENvbmZpZ3VyYXRpb25FcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVJYSnliM0p6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5c2FXSXZSWEp5YjNKekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCVDBFc1RVRkJZU3hWUVVGWExGTkJRVkVzUzBGQlN6dERRVUZKTzBGQlFYcERMR2REUVVGNVF6dEJRVk42UXl4TlFVRmhMRk5CUVZVc1UwRkJVU3hMUVVGTE8wTkJRVWs3UVVGQmVFTXNPRUpCUVhkRE8wRkJWWGhETEUxQlFXRXNhMEpCUVcxQ0xGTkJRVkVzUzBGQlN6dERRVUZKTzBGQlFXcEVMR2RFUVVGcFJDSjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBXYXRjaGVkXzEgPSByZXF1aXJlKFwifmJkby9saWIvV2F0Y2hlZFwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCBvbl9jaGFuZ2VfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJvbi1jaGFuZ2VcIikpO1xuY2xhc3MgRmllbGQge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICAgICAgdGhpcy5maWVsZHMgPSBbXTtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICB9XG4gICAgYWRkRmllbGQoZmllbGQpIHtcbiAgICAgICAgaWYgKHRoaXMuZmllbGRzLmluY2x1ZGVzKGZpZWxkKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKGZpZWxkLm9iamVjdCAmJiBmaWVsZC5vYmplY3QuaXNCRE9Nb2RlbClcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnByb3h5ZnlWYWx1ZShmaWVsZC52YWx1ZU9mKCkpO1xuICAgICAgICBpZiAoZmllbGQgaW5zdGFuY2VvZiBXYXRjaGVkXzEuV2F0Y2hlZCAmJiBmaWVsZC5zdWJPYmplY3QpXG4gICAgICAgICAgICB0aGlzLnJlZGVmaW5lVmFsdWUoZmllbGQuc3ViT2JqZWN0KTtcbiAgICAgICAgdGhpcy5yZWRlZmluZVZhbHVlKGZpZWxkKTtcbiAgICAgICAgdGhpcy5maWVsZHMucHVzaChmaWVsZCk7XG4gICAgfVxuICAgIHJlbW92ZUZpZWxkKGZpZWxkKSB7XG4gICAgICAgIGlmICghdGhpcy5maWVsZHMuaW5jbHVkZXMoZmllbGQpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoZmllbGQgaW5zdGFuY2VvZiBXYXRjaGVkXzEuV2F0Y2hlZCAmJiBmaWVsZC5zdWJPYmplY3QpXG4gICAgICAgICAgICB0aGlzLnJlc3RvcmVWYWx1ZShmaWVsZC5zdWJPYmplY3QpO1xuICAgICAgICB0aGlzLnJlc3RvcmVWYWx1ZShmaWVsZCk7XG4gICAgICAgIHV0aWxfMS5yZW1vdmVFbGVtZW50RnJvbUFycmF5KHRoaXMuZmllbGRzLCBmaWVsZCk7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5maWVsZHMpXG4gICAgICAgICAgICBmaWVsZC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICByZWRlZmluZVZhbHVlKGZpZWxkKSB7XG4gICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lV2lsZGNhcmRNZXRhZGF0YShmaWVsZCwgXCJ2YWx1ZVwiLCBmaWVsZC52YWx1ZU9mKCkpO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShmaWVsZCwgXCJ2YWx1ZVwiKTtcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShmaWVsZCwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB1dGlsXzEuZ2V0UHJveHlUYXJnZXQodmFsdWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRoYXRWYWx1ZSA9IHV0aWxfMS5nZXRQcm94eVRhcmdldCh0aGF0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHRoYXRWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoYXQudmFsdWUgPSB0aGF0LnByb3h5ZnlWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVzdG9yZVZhbHVlKGZpZWxkKSB7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoZmllbGQsIFwidmFsdWVcIik7XG4gICAgICAgIGZpZWxkLnNldFZhbHVlKHV0aWxfMS5nZXRQcm94eVRhcmdldCh0aGlzLnZhbHVlKSk7XG4gICAgfVxuICAgIHByb3h5ZnlWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSB8fCB1dGlsXzEuaXNPYmplY3QodmFsdWUpICYmICF2YWx1ZS5pc0JET01vZGVsKSB7XG4gICAgICAgICAgICBsZXQgaXNTaGFsbG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5maWVsZHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWZpZWxkLmlzU2hhbGxvdykge1xuICAgICAgICAgICAgICAgICAgICBpc1NoYWxsb3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgPSBvbl9jaGFuZ2VfMS5kZWZhdWx0LnRhcmdldCh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gb25fY2hhbmdlXzEuZGVmYXVsdCh2YWx1ZSwgKHBhdGgsIGNoYW5nZWRWYWx1ZSwgcHJldmlvdXNWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhdGhTaXplID0gcGF0aC5zcGxpdChcIi5cIikubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5maWVsZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWVsZC5pc1NoYWxsb3cgfHwgZmllbGQuaXNTaGFsbG93ICYmIHBhdGhTaXplIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnByb3h5SGFuZGxlcihwYXRoLCBjaGFuZ2VkVmFsdWUsIHByZXZpb3VzVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgeyBpc1NoYWxsb3cgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVJtbGxiR1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJ4cFlpOUdhV1ZzWkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZGUVN3NFEwRkJNa003UVVGRk0wTXNNRU5CUVcxR08wRkJRMjVHTEd0RVFVRTJSRHRCUVVNM1JDeHJSVUZCYVVNN1FVRnBRbXBETEUxQlFXRXNTMEZCU3p0SlFXOURaQ3haUVVGWkxFMUJRVk1zUlVGQlJTeFJRVUZYTzFGQlJqRkNMRmRCUVUwc1IwRkJhVU1zUlVGQlJTeERRVUZETzFGQlJ6bERMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETzFGQlEzSkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETzBsQlF6ZENMRU5CUVVNN1NVRlZUU3hSUVVGUkxFTkJRVU1zUzBGQk5FSTdVVUZEZUVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNN1dVRkJSU3hQUVVGUE8xRkJSWGhETEVsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1NVRkJaU3hMUVVGTExFTkJRVU1zVFVGQlR5eERRVUZETEZWQlFWVTdXVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGVrY3NTVUZCU1N4TFFVRkxMRmxCUVZrc2FVSkJRVThzU1VGQlNTeExRVUZMTEVOQlFVTXNVMEZCVXp0WlFVRkZMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUTNKR0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRNVUlzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRE5VSXNRMEZCUXp0SlFWVk5MRmRCUVZjc1EwRkJReXhMUVVFMFFqdFJRVU16UXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRPMWxCUVVVc1QwRkJUenRSUVVONlF5eEpRVUZKTEV0QlFVc3NXVUZCV1N4cFFrRkJUeXhKUVVGSkxFdEJRVXNzUTBGQlF5eFRRVUZUTzFsQlFVVXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEY0VZc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTjZRaXcyUWtGQmMwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF5OURMRU5CUVVNN1NVRlRUU3hSUVVGUkxFTkJRVU1zUzBGQlowTTdVVUZETlVNc1MwRkJTeXhOUVVGTkxFdEJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFR0WlFVRkZMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETTBRc1EwRkJRenRKUVZGTkxFOUJRVTg3VVVGRFZpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1NVRkRkRUlzUTBGQlF6dEpRVmRQTEdGQlFXRXNRMEZCUXl4TFFVRTBRanRSUVVNNVF5eHBRMEZCYzBJc1EwRkJVeXhMUVVGTExFVkJRVVVzVDBGQlR5eEZRVUZGTEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRMmhGTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOc1FpeFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU4yUXl4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVWQlFVVTdXVUZEYmtNc1IwRkJSenRuUWtGRFF5eFBRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1dVRkRkRUlzUTBGQlF6dFpRVU5FTEVkQlFVY3NRMEZCUXl4TFFVRlhPMmRDUVVOWUxFdEJRVXNzUjBGQlJ5eHhRa0ZCWXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8yZENRVU01UWl4TlFVRk5MRk5CUVZNc1IwRkJSeXh4UWtGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRuUWtGRE4wTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVenR2UWtGQlJTeFBRVUZQTzJkQ1FVTm9ReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRE1VTXNRMEZCUXp0WlFVTkVMRmxCUVZrc1JVRkJSU3hKUVVGSk8xbEJRMnhDTEZWQlFWVXNSVUZCUlN4SlFVRkpPMU5CUTI1Q0xFTkJRVU1zUTBGQlF6dEpRVU5RTEVOQlFVTTdTVUZUVHl4WlFVRlpMRU5CUVVNc1MwRkJORUk3VVVGRE4wTXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhMUVVGTExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdVVUZEZGtNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eHhRa0ZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF5OURMRU5CUVVNN1NVRlZUeXhaUVVGWkxFTkJRVU1zUzBGQldUdFJRVU0zUWl4SlFVRkpMRXRCUVVzc1dVRkJXU3hMUVVGTExFbEJRVWtzWlVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVU4c1MwRkJUU3hEUVVGRExGVkJRVlVzUlVGQlJUdFpRVU4yUlN4SlFVRkpMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRGNrSXNTMEZCU3l4TlFVRk5MRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzJkQ1FVTTNRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNSVUZCUlR0dlFrRkRiRUlzVTBGQlV5eEhRVUZITEV0QlFVc3NRMEZCUXp0dlFrRkRiRUlzVFVGQlRUdHBRa0ZEVkR0aFFVTktPMWxCUTBRc1MwRkJTeXhIUVVGSExHMUNRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJReTlDTEU5QlFVOHNiVUpCUVZFc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNXVUZCV1N4RlFVRkZMR0ZCUVdFc1JVRkJSU3hGUVVGRk8yZENRVU42UkN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJRenRuUWtGRGVFTXNTMEZCU3l4TlFVRk5MRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzI5Q1FVTTNRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1UwRkJVeXhKUVVGSkxGRkJRVkVzU1VGQlNTeERRVUZETEVWQlFVVTdkMEpCUTNSRUxFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRlJMRmxCUVZrc1JVRkJVU3hoUVVGaExFTkJRVU1zUTBGQlF6dHhRa0ZEY2tVN2FVSkJRMG83V1VGRFRDeERRVUZETEVWQlFVVXNSVUZCUlN4VFFVRlRMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRM0pDTzFGQlEwUXNUMEZCVHl4TFFVRkxMRU5CUVVNN1NVRkRha0lzUTBGQlF6dERRVU5LTzBGQmJrdEVMSE5DUVcxTFF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZyYW1ld29ya18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZnJhbWV3b3JrXCIpO1xuY2xhc3MgTW9kZWxSZWdpc3RyeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubW9kZWxzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghTW9kZWxSZWdpc3RyeS5pbnN0YW5jZSlcbiAgICAgICAgICAgIE1vZGVsUmVnaXN0cnkuaW5zdGFuY2UgPSBuZXcgTW9kZWxSZWdpc3RyeSgpO1xuICAgICAgICByZXR1cm4gTW9kZWxSZWdpc3RyeS5pbnN0YW5jZTtcbiAgICB9XG4gICAgcmVnaXN0ZXIobW9kZWwpIHtcbiAgICAgICAgdGhpcy5tb2RlbHMuc2V0KGAke21vZGVsLmNsYXNzTmFtZX0ke21vZGVsLmlkfWAsIG1vZGVsKTtcbiAgICB9XG4gICAgdW5yZWdpc3Rlcihtb2RlbCkge1xuICAgICAgICB0aGlzLm1vZGVscy5kZWxldGUoYCR7bW9kZWwuY2xhc3NOYW1lfSR7bW9kZWwuaWR9YCk7XG4gICAgfVxuICAgIGdldE1vZGVsQnlJZChpZCwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxzLmdldChgJHt0aGlzLmdldENsYXNzTmFtZShjb25zdHJ1Y3Rvcil9JHtpZH1gKTtcbiAgICB9XG4gICAgZ2V0TW9kZWxzQnlBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgY29uc3QgbW9kZWxzID0gW107XG4gICAgICAgIHRoaXMubW9kZWxzLmZvckVhY2goKG1vZGVsKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4gbW9kZWwpIHx8IGVsZW1lbnQgIT09IG1vZGVsW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vZGVscy5wdXNoKG1vZGVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtb2RlbHM7XG4gICAgfVxuICAgIHVwZGF0ZUlEKG9sZElELCBjb25zdHJ1Y3Rvcikge1xuICAgICAgICBjb25zdCBtb2RlbCA9IHRoaXMubW9kZWxzLmdldChgJHt0aGlzLmdldENsYXNzTmFtZShjb25zdHJ1Y3Rvcil9JHtvbGRJRH1gKTtcbiAgICAgICAgaWYgKCFtb2RlbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5tb2RlbHMuZGVsZXRlKGAke3RoaXMuZ2V0Q2xhc3NOYW1lKGNvbnN0cnVjdG9yKX0ke29sZElEfWApO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKG1vZGVsKTtcbiAgICB9XG4gICAgZ2V0TW9kZWxzQnlDb25kaXRpb24oZnVuYywgbW9kZSA9IFwiYWxsXCIpIHtcbiAgICAgICAgY29uc3QgbW9kZWxzID0gW107XG4gICAgICAgIGxldCBsYXN0TW9kZWw7XG4gICAgICAgIGZvciAoY29uc3QgbW9kZWwgb2YgdGhpcy5tb2RlbHMudmFsdWVzKCkpIHtcbiAgICAgICAgICAgIGlmIChmdW5jKG1vZGVsKSkge1xuICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSBcImZpcnN0XCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbDtcbiAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gXCJhbGxcIilcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxzLnB1c2gobW9kZWwpO1xuICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSBcImxhc3RcIilcbiAgICAgICAgICAgICAgICAgICAgbGFzdE1vZGVsID0gbW9kZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGUgPT09IFwibGFzdFwiID8gbGFzdE1vZGVsIDogbW9kZWxzO1xuICAgIH1cbiAgICBnZXRDbGFzc05hbWUoY29uc3RydWN0b3IpIHtcbiAgICAgICAgbGV0IGNsYXNzTmFtZTtcbiAgICAgICAgaWYgKGZyYW1ld29ya18xLmlzQmFzZUNvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY29uc3RydWN0b3IuY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFwiY2xhc3NOYW1lXCIgaW4gY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNvbnN0cnVjdG9yLmNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY29uc3RydWN0b3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjb25zdHJ1Y3Rvci5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH1cbn1cbmV4cG9ydHMuTW9kZWxSZWdpc3RyeSA9IE1vZGVsUmVnaXN0cnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lUVzlrWld4U1pXZHBjM1J5ZVM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmJHbGlMMDF2WkdWc1VtVm5hWE4wY25rdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZEUVN4dlJFRkJlVVE3UVVGWGVrUXNUVUZCWVN4aFFVRmhPMGxCYVVOMFFqdFJRV1JSTEZkQlFVMHNSMEZCTUVJc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF6dEpRV014UWl4RFFVRkRPMGxCVEd4Q0xFMUJRVTBzUTBGQlF5eFhRVUZYTzFGQlEzSkNMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zVVVGQlVUdFpRVUZGTEdGQlFXRXNRMEZCUXl4UlFVRlJMRWRCUVVjc1NVRkJTU3hoUVVGaExFVkJRVVVzUTBGQlF6dFJRVU14UlN4UFFVRlBMR0ZCUVdFc1EwRkJReXhSUVVGUkxFTkJRVU03U1VGRGJFTXNRMEZCUXp0SlFWVk5MRkZCUVZFc1EwRkJReXhMUVVGbE8xRkJRek5DTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEZOQlFWTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETlVRc1EwRkJRenRKUVZOTkxGVkJRVlVzUTBGQlF5eExRVUZsTzFGQlF6ZENMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRk5CUVZNc1IwRkJSeXhMUVVGTExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTjRSQ3hEUVVGRE8wbEJWVTBzV1VGQldTeERRVUUyUXl4RlFVRlZMRVZCUVVVc1YwRkJZenRSUVVOMFJpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQmJVTXNRMEZCUXp0SlFVTjJSeXhEUVVGRE8wbEJWVTBzY1VKQlFYRkNMRU5CUVVNc1ZVRkJkVU03VVVGRGFFVXNUVUZCVFN4TlFVRk5MRWRCUVdVc1JVRkJSU3hEUVVGRE8xRkJRemxDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVTdXVUZETVVJc1MwRkJTeXhOUVVGTkxFZEJRVWNzU1VGQlNTeFZRVUZWTEVWQlFVVTdaMEpCUXpGQ0xFbEJRVWtzVlVGQlZTeERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHR2UWtGRGFFTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzI5Q1FVTm9ReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMRWxCUVVrc1QwRkJUeXhMUVVGelFpeExRVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN2QwSkJRemRFTEU5QlFVODdjVUpCUTFZN2FVSkJRMG83WVVGRFNqdFpRVU5FTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRGRrSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRTQ3hQUVVGUExFMUJRVTBzUTBGQlF6dEpRVU5zUWl4RFFVRkRPMGxCV1Uwc1VVRkJVU3hEUVVGeFFpeExRVUZqTEVWQlFVVXNWMEZCWXp0UlFVTTVSQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU16UlN4SlFVRkpMRU5CUVVNc1MwRkJTenRaUVVGRkxFOUJRVTg3VVVGRGJrSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEYUVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTjZRaXhEUVVGRE8wbEJaVTBzYjBKQlFXOUNMRU5CUVVNc1NVRkJhME1zUlVGQlJTeFBRVUZwUXl4TFFVRkxPMUZCUTJ4SExFMUJRVTBzVFVGQlRTeEhRVUZsTEVWQlFVVXNRMEZCUXp0UlFVTTVRaXhKUVVGSkxGTkJRU3RDTEVOQlFVTTdVVUZEY0VNc1MwRkJTeXhOUVVGTkxFdEJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hGUVVGRk8xbEJRM1JETEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8yZENRVU5pTEVsQlFVa3NTVUZCU1N4TFFVRkxMRTlCUVU4N2IwSkJRVVVzVDBGQlR5eExRVUZMTEVOQlFVTTdaMEpCUTI1RExFbEJRVWtzU1VGQlNTeExRVUZMTEV0QlFVczdiMEpCUVVVc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0blFrRkRka01zU1VGQlNTeEpRVUZKTEV0QlFVc3NUVUZCVFR0dlFrRkJSU3hUUVVGVExFZEJRVWNzUzBGQlN5eERRVUZETzJGQlF6RkRPMU5CUTBvN1VVRkRSQ3hQUVVGUExFbEJRVWtzUzBGQlN5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETzBsQlEyaEVMRU5CUVVNN1NVRlZUeXhaUVVGWkxFTkJRVU1zVjBGQk5rTTdVVUZET1VRc1NVRkJTU3hUUVVGcFFpeERRVUZETzFGQlEzUkNMRWxCUVVrc05rSkJRV2xDTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUVVVN1dVRkRhRU1zVTBGQlV5eEhRVUZITEZkQlFWY3NRMEZCUXl4VFFVRlRMRU5CUVVNN1UwRkRja003WVVGQlRTeEpRVUZKTEZkQlFWY3NTVUZCU1N4WFFVRlhMRVZCUVVVN1dVRkRia01zVTBGQlV5eEhRVUZITEZkQlFWY3NRMEZCUXl4VFFVRlRMRU5CUVVNN1UwRkRja003WVVGQlRTeEpRVUZKTEU5QlFVOHNWMEZCVnl4TFFVRkxMRlZCUVZVc1JVRkJSVHRaUVVNeFF5eFRRVUZUTEVkQlFVY3NWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJRenRUUVVOb1F6czdXVUZCVFN4VFFVRlRMRWRCUVZNc1YwRkJXU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTTdVVUZEZGtRc1QwRkJUeXhUUVVGVExFTkJRVU03U1VGRGNrSXNRMEZCUXp0RFFVTktPMEZCTVVwRUxITkRRVEJLUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgTW9kaWZpY2F0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgdHlwZSA9IFwiZGVsZXRlXCIpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydHMuTW9kaWZpY2F0aW9uID0gTW9kaWZpY2F0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVFc5a2FXWnBZMkYwYVc5dUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXNhV0l2VFc5a2FXWnBZMkYwYVc5dUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCVVVFc1RVRkJZU3haUVVGWk8wbEJiVUp5UWl4WlFVRlpMRXRCUVZjc1JVRkJSU3hQUVVGeFFpeFJRVUZSTzFGQlEyeEVMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlEyNUNMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVTBzU1VGQlNTeERRVUZETzBsQlEzaENMRU5CUVVNN1NVRlJUU3hQUVVGUE8xRkJRMVlzVDBGQlR5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTNSQ0xFTkJRVU03U1VGUlRTeFJRVUZSTEVOQlFVTXNTMEZCVlR0UlFVTjBRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVTjJRaXhEUVVGRE8wTkJRMG83UVVFelEwUXNiME5CTWtOREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBNb2RpZmljYXRpb25fMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Nb2RpZmljYXRpb25cIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCBlbnZpcm9ubWVudF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZW52aXJvbm1lbnRcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgRXJyb3JzXzEgPSByZXF1aXJlKFwifmJkby9saWIvRXJyb3JzXCIpO1xuY29uc3Qgb25fY2hhbmdlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwib24tY2hhbmdlXCIpKTtcbmNsYXNzIFByb3BlcnR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5LCBwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5pc1NoYWxsb3cgPSB0cnVlO1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgICAgICBsZXQgcGFyYW1ldGVycyA9IHt9O1xuICAgICAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wYXJhbXMpXG4gICAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1zLnBhcmFtcztcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgY29uc3QgY2FwaXRhbGl6ZWRQcm9wID0gdXRpbF8xLnVjRmlyc3QocHJvcGVydHkpO1xuICAgICAgICBjb25zdCBvblR5cGVDaGVja0ZhaWwgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1UeXBlQ2hlY2tGYWlsYDtcbiAgICAgICAgY29uc3Qgb25UeXBlQ2hlY2sgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1UeXBlQ2hlY2tgO1xuICAgICAgICBjb25zdCBvblR5cGVDaGVja1N1Y2Nlc3MgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1UeXBlQ2hlY2tTdWNjZXNzYDtcbiAgICAgICAgdGhpcy5vblR5cGVDaGVja0ZhaWwgPSBwYXJhbWV0ZXJzID8gcGFyYW1ldGVycy5vblR5cGVDaGVja0ZhaWwgfHwgb25UeXBlQ2hlY2tGYWlsIDogb25UeXBlQ2hlY2tGYWlsO1xuICAgICAgICB0aGlzLm9uVHlwZUNoZWNrID0gcGFyYW1ldGVycyA/IHBhcmFtZXRlcnMub25UeXBlQ2hlY2sgfHwgb25UeXBlQ2hlY2sgOiBvblR5cGVDaGVjaztcbiAgICAgICAgdGhpcy5vblR5cGVDaGVja1N1Y2Nlc3MgPSBwYXJhbWV0ZXJzID8gcGFyYW1ldGVycy5vblR5cGVDaGVja1N1Y2Nlc3MgfHwgb25UeXBlQ2hlY2tTdWNjZXNzIDogb25UeXBlQ2hlY2tTdWNjZXNzO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmRvU2V0VmFsdWUodmFsdWUsIHRydWUpO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSB0aGlzLnByb3BlcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICghdXRpbF8xLmlzUHJveHkodmFsdWUpICYmIHRoaXMuc2F2ZUluTG9jYWxTdG9yYWdlICYmIHV0aWxfMS5pc0Z1bmN0aW9uKHRoaXMub2JqZWN0LmdldE5hbWVzcGFjZWRTdG9yYWdlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLm9iamVjdC5nZXROYW1lc3BhY2VkU3RvcmFnZShzdHJpbmdLZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgdHlwZUd1YXJkKHZhbHVlKSB7XG4gICAgICAgIGxldCB2YWx1ZVRvUGFzcyA9IHZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNb2RpZmljYXRpb25fMS5Nb2RpZmljYXRpb24pXG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgY29uc3QgZGVzaWduVHlwZSA9IG1ldGFkYXRhXzEuZ2V0RGVzaWduVHlwZSh0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eS50b1N0cmluZygpKTtcbiAgICAgICAgY29uc3QgdHlwZUVycm9yID0gbmV3IEVycm9yc18xLlR5cGVFcnJvcihgJHt2YWx1ZVRvUGFzc30gaXMgbm90IHR5cGUgb2YgJHtkZXNpZ25UeXBlLmNsYXNzTmFtZSB8fCBkZXNpZ25UeXBlLm5hbWV9YCk7XG4gICAgICAgIGNvbnN0IGlkeFN0cnVjdE9iaiA9IHRoaXMub2JqZWN0O1xuICAgICAgICBsZXQgZXJyb3I7XG4gICAgICAgIGlmICghdGhpcy5udWxsYWJsZSAmJiAodmFsdWVUb1Bhc3MgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZVRvUGFzcyA9PT0gbnVsbCkpXG4gICAgICAgICAgICBlcnJvciA9IHR5cGVFcnJvcjtcbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgaWYgKHV0aWxfMS5pc1ByaW1pdGl2ZSh2YWx1ZVRvUGFzcykpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlVG9QYXNzICE9PSBkZXNpZ25UeXBlLm5hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMubnVsbGFibGUgfHwgISh2YWx1ZVRvUGFzcyA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlVG9QYXNzID09PSBudWxsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gdHlwZUVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCEodmFsdWVUb1Bhc3MgaW5zdGFuY2VvZiBkZXNpZ25UeXBlKSlcbiAgICAgICAgICAgICAgICBlcnJvciA9IHR5cGVFcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVycm9yICYmIHV0aWxfMS5pc0Z1bmN0aW9uKGlkeFN0cnVjdE9ialt0aGlzLm9uVHlwZUNoZWNrXSkpXG4gICAgICAgICAgICBlcnJvciA9IGlkeFN0cnVjdE9ialt0aGlzLm9uVHlwZUNoZWNrXSh2YWx1ZVRvUGFzcyk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKHV0aWxfMS5pc0Z1bmN0aW9uKGlkeFN0cnVjdE9ialt0aGlzLm9uVHlwZUNoZWNrRmFpbF0pKSB7XG4gICAgICAgICAgICAgICAgaWR4U3RydWN0T2JqW3RoaXMub25UeXBlQ2hlY2tGYWlsXShlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh1dGlsXzEuaXNGdW5jdGlvbihpZHhTdHJ1Y3RPYmoub25UeXBlQ2hlY2tGYWlsKSkge1xuICAgICAgICAgICAgICAgIGlkeFN0cnVjdE9iai5vblR5cGVDaGVja0ZhaWwoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHV0aWxfMS5pc0Z1bmN0aW9uKGlkeFN0cnVjdE9ialt0aGlzLm9uVHlwZUNoZWNrU3VjY2Vzc10pKVxuICAgICAgICAgICAgaWR4U3RydWN0T2JqW3RoaXMub25UeXBlQ2hlY2tTdWNjZXNzXSgpO1xuICAgICAgICByZXR1cm4gIShCb29sZWFuKGVycm9yKS52YWx1ZU9mKCkpO1xuICAgIH1cbiAgICBwcm94eUhhbmRsZXIoX3BhdGgsIF9jaGFuZ2VkVmFsLCBfcHJldlZhbCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmRvU2V0VmFsdWUob25fY2hhbmdlXzEuZGVmYXVsdC50YXJnZXQodmFsdWUpLCBmYWxzZSk7XG4gICAgfVxuICAgIHNob3VsZERvU2V0VmFsdWUodmFsdWUsIHNraXBHdWFyZCA9IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiAhKHZhbHVlID09PSB0aGlzLm93blZhbHVlIHx8ICFza2lwR3VhcmQgJiYgIXRoaXMuZGlzYWJsZVR5cGVHdWFyZCAmJiAhdGhpcy50eXBlR3VhcmQodmFsdWUpKTtcbiAgICB9XG4gICAgZG9TZXRWYWx1ZSh2YWx1ZSwgbW9kaWZ5VmFsdWUgPSB0cnVlLCBza2lwR3VhcmQgPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkRG9TZXRWYWx1ZSh2YWx1ZSwgc2tpcEd1YXJkKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbGV0IHZhbHVlVG9QYXNzO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNb2RpZmljYXRpb25fMS5Nb2RpZmljYXRpb24pIHtcbiAgICAgICAgICAgIHZhbHVlVG9QYXNzID0gdmFsdWUudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHZhbHVlVG9QYXNzID0gdmFsdWU7XG4gICAgICAgIGlmIChtb2RpZnlWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgcHJveHlmaWVkID0gdGhpcy5wcm94eWZ5VmFsdWUodmFsdWVUb1Bhc3MpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHByb3h5ZmllZDtcbiAgICAgICAgICAgIHRoaXMub3duVmFsdWUgPSB2YWx1ZVRvUGFzcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zaG91bGRVcGRhdGVOc1N0b3JhZ2UoKSAmJiB1dGlsXzEuaXNGdW5jdGlvbih0aGlzLm9iamVjdC5zZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSkpIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0LnNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKHRoaXMucHJvcGVydHkudG9TdHJpbmcoKSwgdmFsdWVUb1Bhc3MpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3h5ZnlWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSB8fCB1dGlsXzEuaXNPYmplY3QodmFsdWUpICYmICF2YWx1ZS5pc0JET01vZGVsKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG9uX2NoYW5nZV8xLmRlZmF1bHQudGFyZ2V0KHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBvbl9jaGFuZ2VfMS5kZWZhdWx0KHZhbHVlLCAocGF0aCwgY2hhbmdlZFZhbCwgcHJldlZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3h5SGFuZGxlclJlcGxhY2VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJveHlIYW5kbGVyUmVwbGFjZW1lbnQocGF0aCwgY2hhbmdlZFZhbCwgcHJldlZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm94eUhhbmRsZXIocGF0aCwgY2hhbmdlZFZhbCwgcHJldlZhbCk7XG4gICAgICAgICAgICB9LCB7IGlzU2hhbGxvdzogdGhpcy5pc1NoYWxsb3cgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBzaG91bGRVcGRhdGVOc1N0b3JhZ2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5zYXZlSW5Mb2NhbFN0b3JhZ2UgfHwgIWVudmlyb25tZW50XzEuaXNCcm93c2VyKCkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IHRoaXMucHJvcGVydHkudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3Qga2V5U2hvdWxkQmVVcGRhdGVkID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0aGlzLm9iamVjdCwgXCJrZXlTaG91bGRCZVVwZGF0ZWRcIikgfHwge307XG4gICAgICAgIGlmIChrZXlTaG91bGRCZVVwZGF0ZWRbc3RyaW5nS2V5XSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAodXRpbF8xLmlzRnVuY3Rpb24odGhpcy5vYmplY3QuZ2V0TmFtZXNwYWNlZFN0b3JhZ2UpICYmXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5nZXROYW1lc3BhY2VkU3RvcmFnZShzdHJpbmdLZXkpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGhpcy5vYmplY3QsIFwia2V5U2hvdWxkQmVVcGRhdGVkXCIsIE9iamVjdC5hc3NpZ24oa2V5U2hvdWxkQmVVcGRhdGVkLCB7IFtzdHJpbmdLZXldOiB0cnVlIH0pKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBCb29sZWFuKG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGhpcy5vYmplY3QsIFwiY29uc3RydWN0aW9uQ29tcGxldGVcIikpO1xuICAgIH1cbn1cbmV4cG9ydHMuUHJvcGVydHkgPSBQcm9wZXJ0eTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVISnZjR1Z5ZEhrdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyeHBZaTlRY205d1pYSjBlUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkRRU3gzUkVGQmNVUTdRVUZEY2tRc2EwUkJRV2xHTzBGQlEycEdMSGRFUVVGdFJEdEJRVU51UkN3d1EwRkJjMFk3UVVGRmRFWXNORU5CUVRSRE8wRkJRelZETEd0RlFVRnBRenRCUVRKRmFrTXNUVUZCWVN4UlFVRlJPMGxCY1VkcVFpeFpRVUZaTEUxQlFWTXNSVUZCUlN4UlFVRlhMRVZCUVVVc1RVRkJaMFE3VVVGeVFqZEZMR05CUVZNc1IwRkJXU3hKUVVGSkxFTkJRVU03VVVGelFqZENMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETzFGQlEzSkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETzFGQlEzcENMRWxCUVVrc1ZVRkJWU3hIUVVGdlFpeEZRVUZGTEVOQlFVTTdVVUZGY2tNc1NVRkJTU3hOUVVGTkxFbEJRVWtzVFVGQlRTeERRVUZETEUxQlFVMDdXVUZCUlN4VlFVRlZMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU40UkN4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVVm9ReXhOUVVGTkxHVkJRV1VzUjBGQlJ5eGpRVUZQTEVOQlFVTXNVVUZCYTBJc1EwRkJReXhEUVVGRE8xRkJRM0JFTEUxQlFVMHNaVUZCWlN4SFFVRkhMRXRCUVVzc1pVRkJaU3hsUVVGbExFTkJRVU03VVVGRE5VUXNUVUZCVFN4WFFVRlhMRWRCUVVjc1MwRkJTeXhsUVVGbExGZEJRVmNzUTBGQlF6dFJRVU53UkN4TlFVRk5MR3RDUVVGclFpeEhRVUZITEV0QlFVc3NaVUZCWlN4clFrRkJhMElzUTBGQlF6dFJRVVZzUlN4SlFVRkpMRU5CUVVNc1pVRkJaU3hIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRMR1ZCUVdVc1NVRkJTU3hsUVVGbExFTkJRVU1zUTBGQlF5eERRVUZETEdWQlFXVXNRMEZCUXp0UlFVTndSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExGZEJRVmNzU1VGQlNTeFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJRenRSUVVOd1JpeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNc2EwSkJRV3RDTEVsQlFVa3NhMEpCUVd0Q0xFTkJRVU1zUTBGQlF5eERRVUZETEd0Q1FVRnJRaXhEUVVGRE8wbEJRM0JJTEVOQlFVTTdTVUZUVFN4UlFVRlJMRU5CUVVNc1MwRkJaME03VVVGRE5VTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEYWtNc1EwRkJRenRKUVZWTkxFOUJRVTg3VVVGRFZpeE5RVUZOTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlJUTkRMRWxCUVVrc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZGZGtJc1NVRkJTU3hEUVVGRExHTkJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVsQlFVa3NhVUpCUVZVc1EwRkJUeXhKUVVGSkxFTkJRVU1zVFVGQlR5eERRVUZETEc5Q1FVRnZRaXhEUVVGRExFVkJRVVU3V1VGRGJrY3NTMEZCU3l4SFFVRlRMRWxCUVVrc1EwRkJReXhOUVVGUExFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VTBGRE9VUTdVVUZEUkN4UFFVRlBMRXRCUVVzc1EwRkJRenRKUVVOcVFpeERRVUZETzBsQlZVMHNVMEZCVXl4RFFVRkRMRXRCUVdkRE8xRkJRemRETEVsQlFVa3NWMEZCVnl4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVONFFpeEpRVUZKTEV0QlFVc3NXVUZCV1N3eVFrRkJXVHRaUVVGRkxGZEJRVmNzUjBGQlJ5eExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1VVRkZha1VzVFVGQlRTeFZRVUZWTEVkQlFVY3NkMEpCUVdFc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU40UlN4TlFVRk5MRk5CUVZNc1IwRkJSeXhKUVVGSkxHdENRVUZUTEVOQlFVTXNSMEZCUnl4WFFVRlhMRzFDUVVGdFFpeFZRVUZWTEVOQlFVTXNVMEZCVXl4SlFVRkpMRlZCUVZVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6VkhMRTFCUVUwc1dVRkJXU3hIUVVGdFFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUldwRUxFbEJRVWtzUzBGQlN5eERRVUZETzFGQlJWWXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFbEJRVWtzUTBGQlF5eFhRVUZYTEV0QlFVc3NVMEZCVXl4SlFVRkpMRmRCUVZjc1MwRkJTeXhKUVVGSkxFTkJRVU03V1VGQlJTeExRVUZMTEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUlRkR0xFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdXVUZEVWl4SlFVRkpMR3RDUVVGWExFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVTdaMEpCUXpGQ0xFbEJRVWtzVDBGQlR5eFhRVUZYTEV0QlFVc3NWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUlVGQlJUdHZRa0ZEZEVRc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVsQlFVa3NRMEZCUXl4RFFVRkRMRmRCUVZjc1MwRkJTeXhUUVVGVExFbEJRVWtzVjBGQlZ5eExRVUZMTEVsQlFVa3NRMEZCUXp0M1FrRkJSU3hMUVVGTExFZEJRVWNzVTBGQlV5eERRVUZETzJsQ1FVTnFSenRoUVVOS08ybENRVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRMRmRCUVZjc1dVRkJXU3hWUVVGVkxFTkJRVU03WjBKQlFVVXNTMEZCU3l4SFFVRkhMRk5CUVZNc1EwRkJRenRUUVVOMFJUdFJRVWRFTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWxCUVVrc2FVSkJRVlVzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xbEJRVVVzUzBGQlN5eEhRVUZITEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVVUZIT1Vjc1NVRkJTU3hMUVVGTExFVkJRVVU3V1VGRFVDeEpRVUZKTEdsQ1FVRlZMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXl4RlFVRkZPMmRDUVVOb1JDeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzJGQlF6ZERPMmxDUVVGTkxFbEJRVWtzYVVKQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1pVRkJaU3hEUVVGRExFVkJRVVU3WjBKQlEycEVMRmxCUVZrc1EwRkJReXhsUVVGbExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdZVUZEZGtNN08yZENRVUZOTEUxQlFVMHNTMEZCU3l4RFFVRkRPMU5CUTNSQ08yRkJRVTBzU1VGQlNTeHBRa0ZCVlN4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJRenRaUVVGRkxGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUlVGQlJTeERRVUZETzFGQlEzUkhMRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRM1pETEVOQlFVTTdTVUZQVFN4WlFVRlpMRU5CUVVNc1MwRkJZeXhGUVVGRkxGZEJRV3RDTEVWQlFVVXNVVUZCWlR0UlFVTnVSU3hOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1NVRkJTVHRaUVVGRkxFOUJRVTg3VVVGRGJFUXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXh0UWtGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU51UkN4RFFVRkRPMGxCVlUwc1owSkJRV2RDTEVOQlFVTXNTMEZCWjBNc1JVRkJSU3haUVVGeFFpeExRVUZMTzFGQlEyaEdMRTlCUVU4c1EwRkJReXhEUVVGRExFdEJRVXNzUzBGQlN5eEpRVUZKTEVOQlFVTXNVVUZCVVN4SlFVRkpMRU5CUVVNc1UwRkJVeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM2hITEVOQlFVTTdTVUZaVXl4VlFVRlZMRU5CUVVNc1MwRkJaME1zUlVGQlJTeGpRVUYxUWl4SlFVRkpMRVZCUVVVc1dVRkJjVUlzUzBGQlN6dFJRVU14Unl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGVExFTkJRVU03V1VGQlJTeFBRVUZQTzFGQlEzSkVMRWxCUVVrc1YwRkJOa0lzUTBGQlF6dFJRVU5zUXl4SlFVRkpMRXRCUVVzc1dVRkJXU3d5UWtGQldTeEZRVUZGTzFsQlF5OUNMRmRCUVZjc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdVMEZEYWtNN08xbEJRVTBzVjBGQlZ5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTXpRaXhKUVVGSkxGZEJRVmNzUlVGQlJUdFpRVU5pTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdXVUZEYWtRc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFRRVUZUTEVOQlFVTTdXVUZEZGtJc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFhRVUZYTEVOQlFVTTdVMEZETDBJN1VVRkRSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1JVRkJSU3hKUVVGSkxHbENRVUZWTEVOQlFXdENMRWxCUVVrc1EwRkJReXhOUVVGUExFTkJRVU1zTUVKQlFUQkNMRU5CUVVNc1JVRkJSVHRaUVVOeVJpeEpRVUZKTEVOQlFVTXNUVUZCVHl4RFFVRkRMREJDUVVFd1FpeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVGRkxFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdVMEZEYmtjN1NVRkRUQ3hEUVVGRE8wbEJWVk1zV1VGQldTeERRVUZETEV0QlFWazdVVUZETDBJc1NVRkJTU3hMUVVGTExGbEJRVmtzUzBGQlN5eEpRVUZKTEdWQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGUExFdEJRVTBzUTBGQlF5eFZRVUZWTEVWQlFVVTdXVUZEZGtVc1MwRkJTeXhIUVVGSExHMUNRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJReTlDTEU5QlFVOHNiVUpCUVZFc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTlCUVU4c1JVRkJSU3hGUVVGRk8yZENRVU5xUkN4SlFVRkpMRWxCUVVrc1EwRkJReXgxUWtGQmRVSXNSVUZCUlR0dlFrRkRPVUlzU1VGQlNTeERRVUZETEhWQ1FVRjFRaXhEUVVGRExFbEJRVWtzUlVGQlVTeFZRVUZWTEVWQlFWRXNUMEZCVHl4RFFVRkRMRU5CUVVNN2FVSkJRM1pGT3p0dlFrRkJUU3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NSVUZCVVN4VlFVRlZMRVZCUVZFc1QwRkJUeXhEUVVGRExFTkJRVU03V1VGRGNFVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNKRE8xRkJRMFFzVDBGQlR5eExRVUZMTEVOQlFVTTdTVUZEYWtJc1EwRkJRenRKUVZOVExIRkNRVUZ4UWp0UlFVTXpRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhKUVVGSkxFTkJRVU1zZFVKQlFWTXNSVUZCUlR0WlFVRkZMRTlCUVU4c1MwRkJTeXhEUVVGRE8xRkJRek5FTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZETTBNc1RVRkJUU3hyUWtGQmEwSXNSMEZCUnl4elFrRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNiMEpCUVc5Q0xFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEYUVZc1NVRkJTU3hyUWtGQmEwSXNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkJSU3hQUVVGUExFbEJRVWtzUTBGQlF6dFJRVU12UXl4SlFVRkpMR2xDUVVGVkxFTkJRV3RDTEVsQlFVa3NRMEZCUXl4TlFVRlBMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTTdXVUZETjBNc1NVRkJTU3hEUVVGRExFMUJRVThzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eFRRVUZUTEVWQlFVVTdXVUZETjBVc2VVSkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRzlDUVVGdlFpeEZRVUZGTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNSVUZCUlN4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTFSeXhQUVVGUExFbEJRVWtzUTBGQlF6dFRRVU5tTzFGQlEwUXNUMEZCVHl4UFFVRlBMRU5CUVVNc2MwSkJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMSE5DUVVGelFpeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTnlSU3hEUVVGRE8wTkJRMG83UVVGMlVrUXNORUpCZFZKREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBNb2RpZmljYXRpb25fMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9Nb2RpZmljYXRpb25cIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3Qgb25fY2hhbmdlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwib24tY2hhbmdlXCIpKTtcbmNvbnN0IGNsb25lX2RlZXBfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJjbG9uZS1kZWVwXCIpKTtcbmNsYXNzIFdhdGNoZWQge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHksIHBhcmFtcykge1xuICAgICAgICB0aGlzLmlzU2hhbGxvdyA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgICAgICBjb25zdCBjYXBpdGFsaXplZFByb3AgPSB1dGlsXzEudWNGaXJzdChwcm9wZXJ0eSk7XG4gICAgICAgIGNvbnN0IG9uSW5pdEZ1bmMgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1Jbml0YDtcbiAgICAgICAgY29uc3Qgb25DaGFuZ2VGdW5jID0gYG9uJHtjYXBpdGFsaXplZFByb3B9Q2hhbmdlYDtcbiAgICAgICAgY29uc3Qgb25BZGRGdW5jID0gYG9uJHtjYXBpdGFsaXplZFByb3B9QWRkYDtcbiAgICAgICAgY29uc3Qgb25SZW1vdmVGdW5jID0gYG9uJHtjYXBpdGFsaXplZFByb3B9UmVtb3ZlYDtcbiAgICAgICAgdGhpcy5vbkluaXQgPSBwYXJhbXMgPyBwYXJhbXMub25Jbml0IHx8IG9uSW5pdEZ1bmMgOiBvbkluaXRGdW5jO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gcGFyYW1zID8gcGFyYW1zLm9uQ2hhbmdlIHx8IG9uQ2hhbmdlRnVuYyA6IG9uQ2hhbmdlRnVuYztcbiAgICAgICAgdGhpcy5vbkFkZCA9IHBhcmFtcyA/IHBhcmFtcy5vbkFkZCB8fCBvbkFkZEZ1bmMgOiBvbkFkZEZ1bmM7XG4gICAgICAgIHRoaXMub25SZW1vdmUgPSBwYXJhbXMgPyBwYXJhbXMub25SZW1vdmUgfHwgb25SZW1vdmVGdW5jIDogb25SZW1vdmVGdW5jO1xuICAgICAgICB0aGlzLmlzU2hhbGxvdyA9IHBhcmFtcyAmJiB0eXBlb2YgcGFyYW1zLmlzU2hhbGxvdyA9PT0gXCJib29sZWFuXCIgPyBwYXJhbXMuaXNTaGFsbG93IDogdGhpcy5pc1NoYWxsb3c7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5zaG91bGREb1NldFZhbHVlKHZhbHVlKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3Qgb2xkVmFsID0gY2xvbmVfZGVlcF8xLmRlZmF1bHQodGhpcy5vd25WYWx1ZSk7XG4gICAgICAgIGxldCB2YWx1ZVRvUGFzcztcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kaWZpY2F0aW9uXzEuTW9kaWZpY2F0aW9uKSB7XG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB2YWx1ZVRvUGFzcyA9IHZhbHVlO1xuICAgICAgICBsZXQgdXNlVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kaWZpY2F0aW9uXzEuTW9kaWZpY2F0aW9uKSB7XG4gICAgICAgICAgICB2YWx1ZS5zZXRWYWx1ZSh2YWx1ZVRvUGFzcyk7XG4gICAgICAgICAgICB1c2VWYWx1ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWVUb1NldCA9IHVzZVZhbHVlID8gdmFsdWUgOiB2YWx1ZVRvUGFzcztcbiAgICAgICAgaWYgKHRoaXMuc3ViT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnN1Yk9iamVjdC5zZXRWYWx1ZSh2YWx1ZVRvU2V0KTtcbiAgICAgICAgICAgIHRoaXMub3duVmFsdWUgPSB1dGlsXzEuZ2V0UHJveHlUYXJnZXQodGhpcy5zdWJPYmplY3QudmFsdWVPZigpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlVG9QYXNzID0gdGhpcy5wcm94eWZ5VmFsdWUodmFsdWVUb1Bhc3MpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlVG9QYXNzO1xuICAgICAgICAgICAgdGhpcy5vd25WYWx1ZSA9IHV0aWxfMS5nZXRQcm94eVRhcmdldCh2YWx1ZVRvUGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWR4U3RydWN0T2JqID0gdGhpcy5vYmplY3Q7XG4gICAgICAgIGlmICh1dGlsXzEuaXNGdW5jdGlvbihpZHhTdHJ1Y3RPYmpbdGhpcy5vbkNoYW5nZV0pICYmIHRoaXMuaXNJbml0aWFsaXplZClcbiAgICAgICAgICAgIGlkeFN0cnVjdE9ialt0aGlzLm9uQ2hhbmdlXShvbGRWYWwpO1xuICAgICAgICBpZiAodXRpbF8xLmlzRnVuY3Rpb24oaWR4U3RydWN0T2JqW3RoaXMub25Jbml0XSkgJiYgIXRoaXMuaXNJbml0aWFsaXplZClcbiAgICAgICAgICAgIGlkeFN0cnVjdE9ialt0aGlzLm9uSW5pdF0odmFsdWVUb1Bhc3MpO1xuICAgICAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICBpZiAodGhpcy5zdWJPYmplY3QpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJPYmplY3QudmFsdWVPZigpO1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgc2V0U3ViT2JqZWN0KHN1Yk9iamVjdCkge1xuICAgICAgICBzdWJPYmplY3QucHJveHlIYW5kbGVyUmVwbGFjZW1lbnQgPSB0aGlzLnByb3h5SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICBzdWJPYmplY3QuaXNTaGFsbG93ID0gdGhpcy5pc1NoYWxsb3c7XG4gICAgICAgIHRoaXMuc3ViT2JqZWN0ID0gc3ViT2JqZWN0O1xuICAgIH1cbiAgICBwcm94eUhhbmRsZXIocGF0aCwgY2hhbmdlZFZhbCwgcHJldlZhbCkge1xuICAgICAgICBpZiAodGhpcy5zdWJPYmplY3QpXG4gICAgICAgICAgICB0aGlzLnN1Yk9iamVjdC5wcm94eUhhbmRsZXIocGF0aCwgY2hhbmdlZFZhbCwgcHJldlZhbCk7XG4gICAgICAgIGNvbnN0IG5ld0tleXMgPSBjaGFuZ2VkVmFsID8gT2JqZWN0LmtleXMoY2hhbmdlZFZhbCkgOiBbXTtcbiAgICAgICAgY29uc3Qgb2xkS2V5cyA9IHByZXZWYWwgPyBPYmplY3Qua2V5cyhwcmV2VmFsKSA6IFtdO1xuICAgICAgICBjb25zdCBuZXdMZW4gPSBuZXdLZXlzLmxlbmd0aDtcbiAgICAgICAgY29uc3Qgb2xkTGVuID0gb2xkS2V5cy5sZW5ndGg7XG4gICAgICAgIHRoaXMuY2FzZURldGVjdEV4ZWMoe1xuICAgICAgICAgICAgbGVuMTogbmV3TGVuLFxuICAgICAgICAgICAgbGVuMjogb2xkTGVuLFxuICAgICAgICAgICAgZnVuYzogdGhpcy5vbkFkZCxcbiAgICAgICAgICAgIGtleXMxOiBuZXdLZXlzLFxuICAgICAgICAgICAga2V5czI6IG9sZEtleXMsXG4gICAgICAgICAgICBjaGFuZ2VkVmFsLFxuICAgICAgICAgICAgcGF0aFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jYXNlRGV0ZWN0RXhlYyh7XG4gICAgICAgICAgICBsZW4xOiBvbGRMZW4sXG4gICAgICAgICAgICBsZW4yOiBuZXdMZW4sXG4gICAgICAgICAgICBmdW5jOiB0aGlzLm9uUmVtb3ZlLFxuICAgICAgICAgICAga2V5czE6IG9sZEtleXMsXG4gICAgICAgICAgICBrZXlzMjogbmV3S2V5cyxcbiAgICAgICAgICAgIGNoYW5nZWRWYWwsXG4gICAgICAgICAgICBwYXRoXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobmV3TGVuID09PSBvbGRMZW4gJiYgdGhpcy5vbkNoYW5nZSBpbiB0aGlzICYmIHRoaXMuaXNJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgdGhpcy5vYmplY3RbdGhpcy5vbkNoYW5nZV0oY2hhbmdlZFZhbCwgcGF0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hvdWxkRG9TZXRWYWx1ZSh2YWx1ZSwgc2tpcEd1YXJkID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViT2JqZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJPYmplY3Quc2hvdWxkRG9TZXRWYWx1ZSh2YWx1ZSwgc2tpcEd1YXJkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gKHZhbHVlICE9PSB0aGlzLm93blZhbHVlKTtcbiAgICB9XG4gICAgcHJveHlmeVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5IHx8IHV0aWxfMS5pc09iamVjdCh2YWx1ZSkgJiYgIXZhbHVlLmlzQkRPTW9kZWwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gb25fY2hhbmdlXzEuZGVmYXVsdC50YXJnZXQodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIG9uX2NoYW5nZV8xLmRlZmF1bHQodmFsdWUsIChwYXRoLCBjaGFuZ2VkVmFsdWUsIHByZXZpb3VzVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3h5SGFuZGxlcihwYXRoLCBjaGFuZ2VkVmFsdWUsIHByZXZpb3VzVmFsdWUpO1xuICAgICAgICAgICAgfSwgeyBpc1NoYWxsb3c6IHRoaXMuaXNTaGFsbG93IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY2FzZURldGVjdEV4ZWMoY2RQYXJhbXMpIHtcbiAgICAgICAgaWYgKGNkUGFyYW1zLmxlbjEgPiBjZFBhcmFtcy5sZW4yICYmIGNkUGFyYW1zLmZ1bmMgaW4gdGhpcy5vYmplY3QpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbW9kaWZpZWQgb2YgY2RQYXJhbXMua2V5czEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNkUGFyYW1zLmtleXMyLmluY2x1ZGVzKG1vZGlmaWVkKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iamVjdFtjZFBhcmFtcy5mdW5jXSgoY2RQYXJhbXMuY2hhbmdlZFZhbClbbW9kaWZpZWRdLCBjZFBhcmFtcy5wYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5XYXRjaGVkID0gV2F0Y2hlZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVYyRjBZMmhsWkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmJHbGlMMWRoZEdOb1pXUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlJVRXNkMFJCUVhGRU8wRkJRM0pFTERCRFFVRm5SanRCUVVOb1JpeHJSVUZCYVVNN1FVRkRha01zYjBWQlFXMURPMEZCT0VodVF5eE5RVUZoTEU5QlFVODdTVUZ4UjJoQ0xGbEJRVmtzVFVGQlV5eEZRVUZGTEZGQlFWY3NSVUZCUlN4TlFVRjFRanRSUVdoRGNFUXNZMEZCVXl4SFFVRlpMRWxCUVVrc1EwRkJRenRSUVRoQ2VrSXNhMEpCUVdFc1IwRkJXU3hMUVVGTExFTkJRVU03VVVGSGJrTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRGNrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU03VVVGRmVrSXNUVUZCVFN4bFFVRmxMRWRCUVVjc1kwRkJUeXhEUVVGRExGRkJRV3RDTEVOQlFVTXNRMEZCUXp0UlFVVndSQ3hOUVVGTkxGVkJRVlVzUjBGQlJ5eExRVUZMTEdWQlFXVXNUVUZCVFN4RFFVRkRPMUZCUXpsRExFMUJRVTBzV1VGQldTeEhRVUZITEV0QlFVc3NaVUZCWlN4UlFVRlJMRU5CUVVNN1VVRkRiRVFzVFVGQlRTeFRRVUZUTEVkQlFVY3NTMEZCU3l4bFFVRmxMRXRCUVVzc1EwRkJRenRSUVVNMVF5eE5RVUZOTEZsQlFWa3NSMEZCUnl4TFFVRkxMR1ZCUVdVc1VVRkJVU3hEUVVGRE8xRkJSV3hFTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4SlFVRkpMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETzFGQlEyaEZMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hKUVVGSkxGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRPMUZCUTNoRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRE8xRkJRelZFTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4SlFVRkpMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETzFGQlJYaEZMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzVFVGQlRTeEpRVUZKTEU5QlFVOHNUVUZCVFN4RFFVRkRMRk5CUVZNc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTTdTVUZEZWtjc1EwRkJRenRKUVZWTkxGRkJRVkVzUTBGQlF5eExRVUZuUXp0UlFVTTFReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFdEJRVXNzUTBGQlF6dFpRVUZGTEU5QlFVODdVVUZITVVNc1RVRkJUU3hOUVVGTkxFZEJRVWNzYjBKQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03VVVGRmVFTXNTVUZCU1N4WFFVRTJRaXhEUVVGRE8xRkJRMnhETEVsQlFVa3NTMEZCU3l4WlFVRlpMREpDUVVGWkxFVkJRVVU3V1VGREwwSXNWMEZCVnl4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dFRRVU5xUXpzN1dVRkJUU3hYUVVGWExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlJ6TkNMRWxCUVVrc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU55UWl4SlFVRkpMRXRCUVVzc1dVRkJXU3d5UWtGQldTeEZRVUZGTzFsQlF5OUNMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdXVUZETlVJc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF6dFRRVU51UWp0UlFVVkVMRTFCUVUwc1ZVRkJWU3hIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRmJFUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRk8xbEJRMmhDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzY1VKQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZETlVRN1lVRkJUVHRaUVVWSUxGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xbEJRemRETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1YwRkJWeXhEUVVGRE8xbEJRM3BDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc2NVSkJRV01zUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0VFFVTXZRenRSUVVWRUxFMUJRVTBzV1VGQldTeEhRVUZ0UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJSV3BFTEVsQlFVa3NhVUpCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExHRkJRV0U3V1VGQlJTeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlJYWkhMRWxCUVVrc2FVSkJRVlVzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVR0WlFVRkZMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1VVRkRla2NzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4SlFVRkpMRU5CUVVNN1NVRkRPVUlzUTBGQlF6dEpRVlZOTEU5QlFVODdVVUZEVml4SlFVRkpMRWxCUVVrc1EwRkJReXhUUVVGVE8xbEJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJRM0JFTEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRKUVVOMFFpeERRVUZETzBsQlZVMHNXVUZCV1N4RFFVRkRMRk5CUVRKRE8xRkJRek5FTEZOQlFWTXNRMEZCUXl4MVFrRkJkVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5xUlN4VFFVRlRMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTTdVVUZEY2tNc1NVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eFRRVUZUTEVOQlFVTTdTVUZETDBJc1EwRkJRenRKUVZWTkxGbEJRVmtzUTBGQlF5eEpRVUZaTEVWQlFVVXNWVUZCWjBJc1JVRkJSU3hQUVVGaE8xRkJRemRFTEVsQlFVa3NTVUZCU1N4RFFVRkRMRk5CUVZNN1dVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzFGQlF6TkZMRTFCUVUwc1QwRkJUeXhIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMUZCUXpGRUxFMUJRVTBzVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8xRkJRM0JFTEUxQlFVMHNUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRE9VSXNUVUZCVFN4TlFVRk5MRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF6dFJRVWM1UWl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRE8xbEJRMmhDTEVsQlFVa3NSVUZCUlN4TlFVRk5PMWxCUTFvc1NVRkJTU3hGUVVGRkxFMUJRVTA3V1VGRFdpeEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzN1dVRkRhRUlzUzBGQlN5eEZRVUZGTEU5QlFVODdXVUZEWkN4TFFVRkxMRVZCUVVVc1QwRkJUenRaUVVOa0xGVkJRVlU3V1VGRFZpeEpRVUZKTzFOQlExQXNRMEZCUXl4RFFVRkRPMUZCUlVnc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF6dFpRVU5vUWl4SlFVRkpMRVZCUVVVc1RVRkJUVHRaUVVOYUxFbEJRVWtzUlVGQlJTeE5RVUZOTzFsQlExb3NTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUk8xbEJRMjVDTEV0QlFVc3NSVUZCUlN4UFFVRlBPMWxCUTJRc1MwRkJTeXhGUVVGRkxFOUJRVTg3V1VGRFpDeFZRVUZWTzFsQlExWXNTVUZCU1R0VFFVTlFMRU5CUVVNc1EwRkJRenRSUVVWSUxFbEJRVWtzVFVGQlRTeExRVUZMTEUxQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hKUVVGSkxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNZVUZCWVN4RlFVRkZPMWxCUTJwRUxFbEJRVWtzUTBGQlF5eE5RVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExGVkJRVlVzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTnNSVHRKUVVOTUxFTkJRVU03U1VGWFR5eG5Ra0ZCWjBJc1EwRkJReXhMUVVGblF5eEZRVUZGTEZsQlFYRkNMRXRCUVVzN1VVRkRha1lzU1VGQlNTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZPMWxCUTJoQ0xFOUJRVThzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1UwRkROVVE3TzFsQlFVMHNUMEZCVHl4RFFVRkRMRXRCUVVzc1MwRkJTeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdTVUZETlVNc1EwRkJRenRKUVZkUExGbEJRVmtzUTBGQlF5eExRVUZaTzFGQlF6ZENMRWxCUVVrc1MwRkJTeXhaUVVGWkxFdEJRVXNzU1VGQlNTeGxRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJUeXhMUVVGTkxFTkJRVU1zVlVGQlZTeEZRVUZGTzFsQlEzWkZMRXRCUVVzc1IwRkJSeXh0UWtGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVNdlFpeFBRVUZQTEcxQ1FVRlJMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZsQlFWa3NSVUZCUlN4aFFVRmhMRVZCUVVVc1JVRkJSVHRuUWtGRGVrUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVkVzV1VGQldTeEZRVUZSTEdGQlFXRXNRMEZCUXl4RFFVRkRPMWxCUTNKRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEZOQlFWTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU55UXp0UlFVTkVMRTlCUVU4c1MwRkJTeXhEUVVGRE8wbEJRMnBDTEVOQlFVTTdTVUZUVHl4alFVRmpMRU5CUVVNc1VVRkJNa0k3VVVGRE9VTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1NVRkJTU3hIUVVGSExGRkJRVkVzUTBGQlF5eEpRVUZKTEVsQlFVa3NVVUZCVVN4RFFVRkRMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzFsQlF5OUVMRXRCUVVzc1RVRkJUU3hSUVVGUkxFbEJRVWtzVVVGQlVTeERRVUZETEV0QlFVc3NSVUZCUlR0blFrRkRia01zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTzI5Q1FVTTVRaXhKUVVGSkxFTkJRVU1zVFVGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCVFN4UlFVRlJMRU5CUVVNc1JVRkJSU3hSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdiMEpCUTNaR0xFMUJRVTA3YVVKQlExUTdZVUZEU2p0VFFVTktPMGxCUTB3c1EwRkJRenREUVVOS08wRkJOMUpFTERCQ1FUWlNReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmZ1bmN0aW9uIEJET1Rlc3RGYWN0b3J5KGN0b3IpIHtcbiAgICBsZXQgQkRPVGVzdCA9IGNsYXNzIEJET1Rlc3QgZXh0ZW5kcyBjdG9yIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9ICd0ZXN0JztcbiAgICAgICAgICAgIHRoaXMudGVzdGVyID0gW107XG4gICAgICAgIH1cbiAgICAgICAgb25UZXN0Q2hhbmdlKGNoYW5nZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVzdCBjaGFuZ2VkXCIsIGNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIG9uVGVzdGVySW5pdChpbml0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RlciBpbml0XCIsIGluaXQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIG9uVGVzdGVyQ2hhbmdlKGNoYW5nZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIGNoYW5nZWRcIiwgY2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgb25UZXN0ZXJBZGQoYWRkZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIGFkZGVkXCIsIGFkZGVkLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBvblRlc3RlclJlbW92ZShyZW1vdmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RlciByZW1vdmVkXCIsIHJlbW92ZWQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKHsgYXV0b1NhdmU6IHRydWUgfSksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBCRE9UZXN0LnByb3RvdHlwZSwgXCJ0aXRsZVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS53YXRjaGVkKCksIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoKF90eXBlKSA9PiBbU3RyaW5nXSksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEFycmF5KVxuICAgIF0sIEJET1Rlc3QucHJvdG90eXBlLCBcInRlc3RlclwiLCB2b2lkIDApO1xuICAgIEJET1Rlc3QgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKHsgaXNBYnN0cmFjdDogdHJ1ZSwgY29sbGVjdGlvbk5hbWU6IFwiQkRPVGVzdFwiIH0pXG4gICAgXSwgQkRPVGVzdCk7XG4gICAgcmV0dXJuIEJET1Rlc3Q7XG59XG5leHBvcnRzLkJET1Rlc3RGYWN0b3J5ID0gQkRPVGVzdEZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQVkdWemRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiVzlrWld4ekwwSkVUMVJsYzNRdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc2MwUkJRVFJGTzBGQlZUVkZMRk5CUVdkQ0xHTkJRV01zUTBGQmMwTXNTVUZCVnp0SlFWTXpSU3hKUVVGbExFOUJRVThzUjBGQmRFSXNUVUZCWlN4UFFVRlJMRk5CUVZFc1NVRkJTVHRSUVVGdVF6czdXVUZSTUVNc1ZVRkJTeXhIUVVGWExFMUJRVTBzUTBGQlF6dFpRVkZZTEZkQlFVMHNSMEZCWVN4RlFVRkZMRU5CUVVNN1VVRjVSRFZGTEVOQlFVTTdVVUZvUkdFc1dVRkJXU3hEUVVGRExFOUJRWFZDTzFsQlF6RkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zWTBGQll5eEZRVUZGTEU5QlFVOHNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNdlF5eERRVUZETzFGQlUxTXNXVUZCV1N4RFFVRkRMRWxCUVc5Q08xbEJRM1pETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1lVRkJZU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTXpReXhEUVVGRE8xRkJVMU1zWTBGQll5eERRVUZETEU5QlFYVkNPMWxCUXpWRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTJwRUxFTkJRVU03VVVGVFV5eFhRVUZYTEVOQlFVTXNTMEZCY1VJN1dVRkRka01zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4alFVRmpMRVZCUVVVc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlF6ZERMRU5CUVVNN1VVRlRVeXhqUVVGakxFTkJRVU1zVDBGQmRVSTdXVUZETlVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3hQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEYWtRc1EwRkJRenRMUVVWS0xFTkJRVUU3U1VGcVJXdERPMUZCUVRsQ0xITkNRVUZUTEVOQlFVTXNSVUZCUlN4UlFVRlJMRVZCUVVVc1NVRkJTU3hGUVVGRkxFTkJRVU03T3pCRFFVRXJRanRKUVZGc1FqdFJRVUV4UXl4dlFrRkJUeXhGUVVGRkxFVkJRVVVzYzBKQlFWTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXpzN01rTkJRVGhDTzBsQmFFSTNSQ3hQUVVGUE8xRkJSSEpDTERSQ1FVRmxMRU5CUVVNc1JVRkJSU3hWUVVGVkxFVkJRVVVzU1VGQlNTeEZRVUZGTEdOQlFXTXNSVUZCUlN4VFFVRlRMRVZCUVVVc1EwRkJRenRQUVVOc1JDeFBRVUZQTEVOQmVVVnlRanRKUVVORUxFOUJRVThzVDBGQlR5eERRVUZETzBGQlJXNUNMRU5CUVVNN1FVRnlSa1FzZDBOQmNVWkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmZ1bmN0aW9uIEJET1Rlc3QxRmFjdG9yeShjdG9yKSB7XG4gICAgbGV0IEJET1Rlc3QxID0gY2xhc3MgQkRPVGVzdDEgZXh0ZW5kcyBjdG9yIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9ICd0ZXN0JztcbiAgICAgICAgfVxuICAgICAgICBkb1NvbWV0aGluZygpIHtcbiAgICAgICAgICAgIHJldHVybiBcImxvbFwiO1xuICAgICAgICB9XG4gICAgICAgIG9uT2hhSW5pdChfdmFsdWUpIHtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLmF0dHJpYnV0ZSh7IGRlc2NyaXB0aW9uOiBcInRlc3Rlci4uLlwiIH0pLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgQkRPVGVzdDEucHJvdG90eXBlLCBcInRpdGxlXCIsIHZvaWQgMCk7XG4gICAgQkRPVGVzdDEgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKHsgaXNBYnN0cmFjdDogdHJ1ZSwgY29sbGVjdGlvbk5hbWU6IFwiQkRPVGVzdDFcIiB9KVxuICAgIF0sIEJET1Rlc3QxKTtcbiAgICByZXR1cm4gQkRPVGVzdDE7XG59XG5leHBvcnRzLkJET1Rlc3QxRmFjdG9yeSA9IEJET1Rlc3QxRmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBWR1Z6ZERFdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyMXZaR1ZzY3k5Q1JFOVVaWE4wTVM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZEUVN4elJFRkJiVVU3UVVGVGJrVXNVMEZCWjBJc1pVRkJaU3hEUVVGclJDeEpRVUZYTzBsQlZYaEdMRWxCUVdVc1VVRkJVU3hIUVVGMlFpeE5RVUZsTEZGQlFWTXNVMEZCVVN4SlFVRkpPMUZCUVhCRE96dFpRVkZ2UkN4VlFVRkxMRWRCUVZjc1RVRkJUU3hEUVVGRE8xRkJjMEl6UlN4RFFVRkRPMUZCWkZVc1YwRkJWenRaUVVOa0xFOUJRVThzUzBGQlN5eERRVUZETzFGQlEycENMRU5CUVVNN1VVRlRVeXhUUVVGVExFTkJRVU1zVFVGQll6dFJRVVZzUXl4RFFVRkRPMHRCUTBvc1EwRkJRVHRKUVhSQ05FTTdVVUZCZUVNc2MwSkJRVk1zUTBGQlF5eEZRVUZGTEZkQlFWY3NSVUZCUlN4WFFVRlhMRVZCUVVVc1EwRkJRenM3TWtOQlFTdENPMGxCVWpWRUxGRkJRVkU3VVVGRWRFSXNORUpCUVdVc1EwRkJReXhGUVVGRkxGVkJRVlVzUlVGQlJTeEpRVUZKTEVWQlFVVXNZMEZCWXl4RlFVRkZMRlZCUVZVc1JVRkJSU3hEUVVGRE8wOUJRMjVFTEZGQlFWRXNRMEU0UW5SQ08wbEJRMFFzVDBGQlR5eFJRVUZSTEVOQlFVTTdRVUZEY0VJc1EwRkJRenRCUVRGRFJDd3dRMEV3UTBNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfYTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBDaHVua18xID0gcmVxdWlyZShcIi4vQ2h1bmtcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xubGV0IENlbGwgPSBjbGFzcyBDZWxsIHtcbiAgICBjb25zdHJ1Y3RvcihfcGFyYW1zKSB7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMuY2F2ZSA9IDA7XG4gICAgICAgIHRoaXMucml2ZXIgPSAwO1xuICAgICAgICB0aGlzLmh1bWlkaXR5ID0gMDtcbiAgICAgICAgdGhpcy50ZW1wZXJhdHVyZSA9IDA7XG4gICAgICAgIHRoaXMuY2h1bmsgPSBuZXcgQ2h1bmtfMS5DaHVuaygpO1xuICAgIH1cbn07XG5DZWxsID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgQ29uc3RQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIgJiYgQ29uc3RQYXJhbXMpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdF0pXG5dLCBDZWxsKTtcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMlZzYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmJXOWtaV3h6TDBObGJHd3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJMRzFEUVVGblF6dEJRVU5vUXl4elJFRkJkMFE3UVVGVGVFUXNTVUZCWVN4SlFVRkpMRWRCUVdwQ0xFMUJRV0VzU1VGQlNUdEpRWGxFWWl4WlFVRlpMRTlCUVRKQ08xRkJiRVJvUXl4TlFVRkRMRWRCUVZjc1EwRkJReXhEUVVGRE8xRkJVV1FzVFVGQlF5eEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFWRmtMRk5CUVVrc1IwRkJWeXhEUVVGRExFTkJRVU03VVVGUmFrSXNWVUZCU3l4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVZGc1FpeGhRVUZSTEVkQlFWY3NRMEZCUXl4RFFVRkRPMUZCVVhKQ0xHZENRVUZYTEVkQlFWY3NRMEZCUXl4RFFVRkRPMUZCVVhoQ0xGVkJRVXNzUjBGQlZTeEpRVUZKTEdGQlFVc3NSVUZCUlN4RFFVRkRPMGxCUlZNc1EwRkJRenREUVVNdlF5eERRVUZCTzBGQk1VUlpMRWxCUVVrN1NVRkVhRUlzTkVKQlFXVXNSVUZCUlR0cFJVRXdSRkVzVjBGQlZ5eHZRa0ZCV0N4WFFVRlhPMGRCZWtSNFFpeEpRVUZKTEVOQk1FUm9RanRCUVRGRVdTeHZRa0ZCU1NKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgb3Blbl9zaW1wbGV4X25vaXNlXzEgPSByZXF1aXJlKFwib3Blbi1zaW1wbGV4LW5vaXNlXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IENlbGxfMSA9IHJlcXVpcmUoXCIuL0NlbGxcIik7XG5jbGFzcyBDaHVuayB7XG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDY0O1xuICAgICAgICB0aGlzLmdyaWQgPSBbXTtcbiAgICAgICAgdGhpcy5zaW1wbGV4Q2F2ZSA9IG9wZW5fc2ltcGxleF9ub2lzZV8xLm1ha2VOb2lzZTJEKDEpO1xuICAgICAgICB0aGlzLnNpbXBsZXhSaXZlciA9IG9wZW5fc2ltcGxleF9ub2lzZV8xLm1ha2VOb2lzZTJEKDIpO1xuICAgICAgICB0aGlzLnNpbXBsZXhUZW1wZXJhdHVyZSA9IG9wZW5fc2ltcGxleF9ub2lzZV8xLm1ha2VOb2lzZTJEKDMpO1xuICAgICAgICB0aGlzLnNpbXBsZXhIdW1pZGl0eSA9IG9wZW5fc2ltcGxleF9ub2lzZV8xLm1ha2VOb2lzZTJEKDQpO1xuICAgICAgICB1dGlsXzEubWVyZ2UodGhpcywgcGFyYW1zKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUdyaWQoKTtcbiAgICB9XG4gICAgZ2VuZXJhdGVHcmlkKCkge1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLnNpemU7IHJvdysrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ3JpZFtyb3ddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnB1c2goW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5zaXplOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHhDb29yZGluYXRlID0gY29sICsgdGhpcy54ICogdGhpcy5zaXplO1xuICAgICAgICAgICAgICAgIGNvbnN0IHlDb29yZGluYXRlID0gcm93ICsgdGhpcy55ICogdGhpcy5zaXplO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFtyb3ddLnB1c2gobmV3IENlbGxfMS5DZWxsKHtcbiAgICAgICAgICAgICAgICAgICAgeDogeENvb3JkaW5hdGUsXG4gICAgICAgICAgICAgICAgICAgIHk6IHlDb29yZGluYXRlLFxuICAgICAgICAgICAgICAgICAgICBjYXZlOiB0aGlzLnNpbXBsZXhDYXZlKHhDb29yZGluYXRlIC8gMTAwLCB5Q29vcmRpbmF0ZSAvIDEwMCksXG4gICAgICAgICAgICAgICAgICAgIHJpdmVyOiB0aGlzLnNpbXBsZXhSaXZlcih4Q29vcmRpbmF0ZSAvIDUwMCwgeUNvb3JkaW5hdGUgLyA1MDApLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZTogdGhpcy5zaW1wbGV4VGVtcGVyYXR1cmUoeENvb3JkaW5hdGUgLyAyNTAwLCB5Q29vcmRpbmF0ZSAvIDI1MDApLFxuICAgICAgICAgICAgICAgICAgICBodW1pZGl0eTogdGhpcy5zaW1wbGV4SHVtaWRpdHkoeENvb3JkaW5hdGUgLyAyNTAwLCB5Q29vcmRpbmF0ZSAvIDI1MDApLFxuICAgICAgICAgICAgICAgICAgICBjaHVuazogdGhpc1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuQ2h1bmsgPSBDaHVuaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyaDFibXN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDIxdlpHVnNjeTlEYUhWdWF5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxESkVRVUZwUkR0QlFVTnFSQ3d3UTBGQmQwTTdRVUZEZUVNc2FVTkJRVGhDTzBGQlVUbENMRTFCUVdFc1MwRkJTenRKUVhORlpDeFpRVUZaTEUxQlFUSkNPMUZCTDBSb1F5eE5RVUZETEVkQlFWY3NRMEZCUXl4RFFVRkRPMUZCVVdRc1RVRkJReXhIUVVGWExFTkJRVU1zUTBGQlF6dFJRVkZrTEZOQlFVa3NSMEZCV1N4RlFVRkZMRU5CUVVNN1VVRlRhRUlzVTBGQlNTeEhRVUZoTEVWQlFVVXNRMEZCUXp0UlFWTndRaXhuUWtGQlZ5eEhRVUZITEdkRFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGVE4wSXNhVUpCUVZrc1IwRkJSeXhuUTBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCVXpsQ0xIVkNRVUZyUWl4SFFVRkhMR2REUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZUY0VNc2IwSkJRV1VzUjBGQlJ5eG5RMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSM1pETEZsQlFVc3NRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRGNFSXNTVUZCU1N4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRE8wbEJRM2hDTEVOQlFVTTdTVUZSVXl4WlFVRlpPMUZCUTJ4Q0xFdEJRVXNzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJXU3hKUVVGSkxFTkJRVU1zU1VGQlN5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZPMWxCUTJoRUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8yZENRVU5xUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTjBRanRaUVVORUxFdEJRVXNzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJXU3hKUVVGSkxFTkJRVU1zU1VGQlN5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZPMmRDUVVOb1JDeE5RVUZOTEZkQlFWY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlZ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRPMmRDUVVOeVJDeE5RVUZOTEZkQlFWY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlZ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRPMmRDUVVWeVJDeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGRFppeEpRVUZKTEZkQlFVa3NRMEZCUXp0dlFrRkRUQ3hEUVVGRExFVkJRVVVzVjBGQlZ6dHZRa0ZEWkN4RFFVRkRMRVZCUVVVc1YwRkJWenR2UWtGRFpDeEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhYUVVGWExFZEJRVWNzUjBGQlJ5eEZRVUZGTEZkQlFWY3NSMEZCUnl4SFFVRkhMRU5CUVVNN2IwSkJRelZFTEV0QlFVc3NSVUZCUlN4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGZEJRVmNzUjBGQlJ5eEhRVUZITEVWQlFVVXNWMEZCVnl4SFFVRkhMRWRCUVVjc1EwRkJRenR2UWtGRE9VUXNWMEZCVnl4RlFVRkZMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4WFFVRlhMRWRCUVVjc1NVRkJTU3hGUVVGRkxGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdiMEpCUXpWRkxGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFVkJRVVVzVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXp0dlFrRkRkRVVzUzBGQlN5eEZRVUZGTEVsQlFVazdhVUpCUTJRc1EwRkJReXhEUVVOTUxFTkJRVU03WVVGRFREdFRRVU5LTzBsQlEwd3NRMEZCUXp0RFFVTktPMEZCZUVkRUxITkNRWGRIUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gQkRPQ29uZmlnRmFjdG9yeShjdG9yKSB7XG4gICAgY2xhc3MgQkRPQ29uZmlnIGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVzID0gW1wiLzpuYW1lXCJdO1xuICAgICAgICAgICAgdGhpcy5qc29uT25seSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEJET0NvbmZpZztcbn1cbmV4cG9ydHMuQkRPQ29uZmlnRmFjdG9yeSA9IEJET0NvbmZpZ0ZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQUTI5dVptbG5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzl5YjNWMFpYTXZRa1JQUTI5dVptbG5MblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlUwRXNVMEZCWjBJc1owSkJRV2RDTEVOQlFYTkRMRWxCUVZjN1NVRlZOMFVzVFVGQlpTeFRRVUZWTEZOQlFWRXNTVUZCU1R0UlFVRnlRenM3V1VGUFZ5eFhRVUZOTEVkQlFXRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRaUVU4elFpeGhRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUXpsQ0xFTkJRVU03UzBGQlFUdEpRVVZFTEU5QlFVOHNVMEZCVXl4RFFVRkRPMEZCUTNKQ0xFTkJRVU03UVVFMVFrUXNORU5CTkVKREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBnYW1lTG9iYnlfbmprXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwifmJkby92aWV3cy9nYW1lTG9iYnkubmprXCIpKTtcbmZ1bmN0aW9uIEJET0dhbWVMb2JieUZhY3RvcnkoY3Rvcikge1xuICAgIGNsYXNzIEJET0dhbWVMb2JieSBleHRlbmRzIGN0b3Ige1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlck5hbWVTcGFjZSA9ICcvJztcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGVTdHJpbmcgPSBnYW1lTG9iYnlfbmprXzEuZGVmYXVsdDtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyB0ZW1wbGF0ZVBhcmFtcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb2hhOiAnT09PT09IQUFBQUFBQUEhISEnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJET0dhbWVMb2JieS5hdHRhY2hUb1NlcnZlcnMgPSBbXCJHYW1lU2VydmVyXCJdO1xuICAgIHJldHVybiBCRE9HYW1lTG9iYnk7XG59XG5leHBvcnRzLkJET0dhbWVMb2JieUZhY3RvcnkgPSBCRE9HYW1lTG9iYnlGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFIyRnRaVXh2WW1KNUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXliM1YwWlhNdlFrUlBSMkZ0WlV4dlltSjVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVTkJMSEZHUVVGblJEdEJRVk5vUkN4VFFVRm5RaXh0UWtGQmJVSXNRMEZCYzBNc1NVRkJWenRKUVZOb1JpeE5RVUZsTEZsQlFXRXNVMEZCVVN4SlFVRkpPMUZCUVhoRE96dFpRV2RDVnl4dlFrRkJaU3hIUVVGSExFZEJRVWNzUTBGQlF6dFpRVkZ1UWl4dFFrRkJZeXhIUVVGSExIVkNRVUZSTEVOQlFVTTdVVUZqZUVNc1EwRkJRenRSUVV4aExFdEJRVXNzUTBGQlF5eGpRVUZqTzFsQlF6RkNMRTlCUVU4N1owSkJRMGdzUjBGQlJ5eEZRVUZGTEcxQ1FVRnRRanRoUVVNelFpeERRVUZETzFGQlEwNHNRMEZCUXpzN1NVRTFRbUVzTkVKQlFXVXNSMEZCWVN4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8wbEJLMEkzUkN4UFFVRlBMRmxCUVZrc1EwRkJRenRCUVVONFFpeERRVUZETzBGQmJFUkVMR3RFUVd0RVF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBob21lX25qa18xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIn5iZG8vdmlld3MvaG9tZS5uamtcIikpO1xuZnVuY3Rpb24gQkRPSG9tZUZhY3RvcnkoY3Rvcikge1xuICAgIGNsYXNzIEJET0hvbWUgZXh0ZW5kcyBjdG9yIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXJOYW1lU3BhY2UgPSAnLyc7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlU3RyaW5nID0gaG9tZV9uamtfMS5kZWZhdWx0O1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvaGE6ICdlbmRsaWNoIHp1IEhhdXNlID0pJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCRE9Ib21lLmF0dGFjaFRvU2VydmVycyA9IFtcIldlYlNlcnZlclwiXTtcbiAgICByZXR1cm4gQkRPSG9tZTtcbn1cbmV4cG9ydHMuQkRPSG9tZUZhY3RvcnkgPSBCRE9Ib21lRmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBTRzl0WlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmNtOTFkR1Z6TDBKRVQwaHZiV1V1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRMEVzTWtWQlFUSkRPMEZCVXpORExGTkJRV2RDTEdOQlFXTXNRMEZCYzBNc1NVRkJWenRKUVZNelJTeE5RVUZsTEU5QlFWRXNVMEZCVVN4SlFVRkpPMUZCUVc1RE96dFpRV2RDVnl4dlFrRkJaU3hIUVVGSExFZEJRVWNzUTBGQlF6dFpRVkZ1UWl4dFFrRkJZeXhIUVVGSExHdENRVUZSTEVOQlFVTTdVVUZqZUVNc1EwRkJRenRSUVV4aExFdEJRVXNzUTBGQlF5eGpRVUZqTzFsQlF6RkNMRTlCUVU4N1owSkJRMGdzUjBGQlJ5eEZRVUZGTEhGQ1FVRnhRanRoUVVNM1FpeERRVUZETzFGQlEwNHNRMEZCUXpzN1NVRTFRbUVzZFVKQlFXVXNSMEZCWVN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8wbEJLMEkxUkN4UFFVRlBMRTlCUVU4c1EwRkJRenRCUVVOdVFpeERRVUZETzBGQmJFUkVMSGREUVd0RVF5SjkiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9zb3VyY2UvYXBwL3V0aWxzIHN5bmMgcmVjdXJzaXZlXCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwicmVmbGVjdC1tZXRhZGF0YVwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBCYXNlQ29uc3RydWN0b3JfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CYXNlQ29uc3RydWN0b3JcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCBmcmFtZXdvcmtfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2ZyYW1ld29ya1wiKTtcbmNvbnN0IHR5cGVfZ3JhcGhxbF8xID0gcmVxdWlyZShcInR5cGUtZ3JhcGhxbFwiKTtcbmZ1bmN0aW9uIHdhdGNoZWQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IGtleS50b1N0cmluZygpO1xuICAgICAgICBjb25zdCBkZWNvcmF0b3JTZXR0aW5ncyA9IGZyYW1ld29ya18xLmJlZm9yZURlc2NyaXB0b3IodGFyZ2V0LCBzdHJpbmdLZXksIFwiZGVmaW5lZFdhdGNoZXJzXCIsIHsgcGFyYW1zIH0pO1xuICAgICAgICBmcmFtZXdvcmtfMS5jcmVhdGVEZWNvcmF0b3JEZXNjcmlwdG9yKHRhcmdldCwgc3RyaW5nS2V5LCBcIldhdGNoZWRcIiwgZGVjb3JhdG9yU2V0dGluZ3MpO1xuICAgIH07XG59XG5leHBvcnRzLndhdGNoZWQgPSB3YXRjaGVkO1xuZnVuY3Rpb24gcHJvcGVydHkodHlwZUZ1bmMsIHBhcmFtcykge1xuICAgIHJldHVybiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nS2V5ID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgICAgIGlmICh0eXBlRnVuYyAmJiAhKHR5cGVGdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pICYmICFwYXJhbXMpXG4gICAgICAgICAgICBwYXJhbXMgPSB0eXBlRnVuYztcbiAgICAgICAgaWYgKHR5cGVGdW5jICYmICEodHlwZUZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbikpXG4gICAgICAgICAgICB0eXBlRnVuYyA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFwYXJhbXMgfHwgIShwYXJhbXMgaW5zdGFuY2VvZiBPYmplY3QpKVxuICAgICAgICAgICAgcGFyYW1zID0ge307XG4gICAgICAgIGNvbnN0IGRlY29yYXRvclNldHRpbmdzID0gZnJhbWV3b3JrXzEuYmVmb3JlRGVzY3JpcHRvcih0YXJnZXQsIHN0cmluZ0tleSwgXCJkZWZpbmVkUHJvcGVydGllc1wiLCB7IHR5cGVGdW5jLCBwYXJhbXMgfSk7XG4gICAgICAgIGZyYW1ld29ya18xLmNyZWF0ZURlY29yYXRvckRlc2NyaXB0b3IodGFyZ2V0LCBzdHJpbmdLZXksIFwiUHJvcGVydHlcIiwgZGVjb3JhdG9yU2V0dGluZ3MpO1xuICAgIH07XG59XG5leHBvcnRzLnByb3BlcnR5ID0gcHJvcGVydHk7XG5mdW5jdGlvbiBhdHRyaWJ1dGUodHlwZUZ1bmMsIHBhcmFtcykge1xuICAgIHJldHVybiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nS2V5ID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgICAgIGlmICh0eXBlRnVuYyAmJiAhKHR5cGVGdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pICYmICFwYXJhbXMpXG4gICAgICAgICAgICBwYXJhbXMgPSB0eXBlRnVuYztcbiAgICAgICAgaWYgKHR5cGVGdW5jICYmICEodHlwZUZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbikpXG4gICAgICAgICAgICB0eXBlRnVuYyA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFwYXJhbXMgfHwgIShwYXJhbXMgaW5zdGFuY2VvZiBPYmplY3QpKVxuICAgICAgICAgICAgcGFyYW1zID0ge307XG4gICAgICAgIGlmICh0eXBlRnVuYyBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmIHBhcmFtcylcbiAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLkZpZWxkKHR5cGVGdW5jLCBwYXJhbXMpKHRhcmdldCwga2V5KTtcbiAgICAgICAgZWxzZSBpZiAodHlwZUZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbilcbiAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLkZpZWxkKHR5cGVGdW5jKSh0YXJnZXQsIGtleSk7XG4gICAgICAgIGVsc2UgaWYgKHBhcmFtcylcbiAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLkZpZWxkKHBhcmFtcykodGFyZ2V0LCBrZXkpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5GaWVsZCgpKHRhcmdldCwga2V5KTtcbiAgICAgICAgY29uc3QgZGVjb3JhdG9yU2V0dGluZ3MgPSBmcmFtZXdvcmtfMS5iZWZvcmVEZXNjcmlwdG9yKHRhcmdldCwgc3RyaW5nS2V5LCBcImRlZmluZWRBdHRyaWJ1dGVzXCIsIHsgdHlwZUZ1bmMsIHBhcmFtcyB9KTtcbiAgICAgICAgZnJhbWV3b3JrXzEuY3JlYXRlRGVjb3JhdG9yRGVzY3JpcHRvcih0YXJnZXQsIHN0cmluZ0tleSwgXCJBdHRyaWJ1dGVcIiwgZGVjb3JhdG9yU2V0dGluZ3MpO1xuICAgIH07XG59XG5leHBvcnRzLmF0dHJpYnV0ZSA9IGF0dHJpYnV0ZTtcbmZ1bmN0aW9uIGJhc2VDb25zdHJ1Y3RvcihuYW1lLCBwYXJhbXMsIGluZGV4ID0gMCkge1xuICAgIHJldHVybiAoY3RvcikgPT4ge1xuICAgICAgICBjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoY3Rvcik7XG4gICAgICAgIGlmIChmcmFtZXdvcmtfMS5pc0Jhc2VDb25zdHJ1Y3Rvcihwcm90b3R5cGUpKVxuICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGN0b3IsIE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpKTtcbiAgICAgICAgaWYgKG5hbWUgJiYgKHR5cGVvZiBuYW1lID09PSBcIm51bWJlclwiKSlcbiAgICAgICAgICAgIGluZGV4ID0gbmFtZTtcbiAgICAgICAgaWYgKG5hbWUgJiYgKHR5cGVvZiBuYW1lID09PSBcIm9iamVjdFwiKSlcbiAgICAgICAgICAgIHBhcmFtcyA9IG5hbWU7XG4gICAgICAgIGlmIChuYW1lICYmICgodHlwZW9mIG5hbWUgPT09IFwib2JqZWN0XCIpIHx8ICh0eXBlb2YgbmFtZSA9PT0gXCJudW1iZXJcIikpKVxuICAgICAgICAgICAgbmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHBhcmFtcyAmJiAodHlwZW9mIHBhcmFtcyA9PT0gXCJudW1iZXJcIikpXG4gICAgICAgICAgICBpbmRleCA9IHBhcmFtcztcbiAgICAgICAgaWYgKHBhcmFtcyAmJiAodHlwZW9mIHBhcmFtcyA9PT0gXCJudW1iZXJcIikpXG4gICAgICAgICAgICBwYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChmcmFtZXdvcmtfMS5pc0JET01vZGVsKGN0b3IpKSB7XG4gICAgICAgICAgICBpZiAobmFtZSAmJiAodHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIpICYmIHBhcmFtcyAmJiAodHlwZW9mIHBhcmFtcyA9PT0gXCJvYmplY3RcIikpIHtcbiAgICAgICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5PYmplY3RUeXBlKG5hbWUsIHBhcmFtcykoY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuYW1lICYmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5PYmplY3RUeXBlKG5hbWUpKGN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGFyYW1zICYmICh0eXBlb2YgcGFyYW1zID09PSBcIm9iamVjdFwiKSkge1xuICAgICAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLk9iamVjdFR5cGUocGFyYW1zKShjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0eXBlX2dyYXBocWxfMS5PYmplY3RUeXBlKCkoY3Rvcik7XG4gICAgICAgICAgICBpZiAocGFyYW1zICYmICh0eXBlb2YgcGFyYW1zID09PSBcIm9iamVjdFwiKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZDb2xsZWN0aW9uTmFtZSA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoY3RvciwgXCJjb2xsZWN0aW9uTmFtZVwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2RGF0YWJhc2VOYW1lID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShjdG9yLCBcImRhdGFiYXNlTmFtZVwiKTtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKGN0b3IsIFwiY29sbGVjdGlvbk5hbWVcIiwgcGFyYW1zLmNvbGxlY3Rpb25OYW1lIHx8IHByZXZDb2xsZWN0aW9uTmFtZSB8fCBcImRlZmF1bHRcIik7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YShjdG9yLCBcImRhdGFiYXNlTmFtZVwiLCBwYXJhbXMuZGF0YWJhc2VOYW1lIHx8IHByZXZEYXRhYmFzZU5hbWUgfHwgXCJkZWZhdWx0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMgJiYgKHR5cGVvZiBwYXJhbXMgPT09IFwib2JqZWN0XCIgJiYgcGFyYW1zLmlzQWJzdHJhY3QpKVxuICAgICAgICAgICAgcmV0dXJuIGN0b3I7XG4gICAgICAgIGNvbnN0IEJhc2VDb25zdHJ1Y3RvciA9IEJhc2VDb25zdHJ1Y3Rvcl8xLmJhc2VDb25zdHJ1Y3RvckZhY3RvcnkoY3RvciwgaW5kZXgpO1xuICAgICAgICBpZiAoZnJhbWV3b3JrXzEuaXNDb21wb25lbnQoY3RvcikpIHtcbiAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh1dGlsXzEucGFzY2FsQ2FzZTJrZWJhYkNhc2UoY3Rvci5uYW1lKSwgQmFzZUNvbnN0cnVjdG9yLCB7XG4gICAgICAgICAgICAgICAgZXh0ZW5kczogQmFzZUNvbnN0cnVjdG9yLmV4dGVuZHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBCYXNlQ29uc3RydWN0b3I7XG4gICAgfTtcbn1cbmV4cG9ydHMuYmFzZUNvbnN0cnVjdG9yID0gYmFzZUNvbnN0cnVjdG9yO1xuZXhwb3J0cy5xdWVyeSA9IHR5cGVfZ3JhcGhxbF8xLlF1ZXJ5O1xuZXhwb3J0cy5hcmcgPSB0eXBlX2dyYXBocWxfMS5Bcmc7XG5leHBvcnRzLmFyZ3MgPSB0eXBlX2dyYXBocWxfMS5BcmdzO1xuZXhwb3J0cy5yZXNvbHZlciA9IHR5cGVfZ3JhcGhxbF8xLlJlc29sdmVyO1xuZXhwb3J0cy5yb290ID0gdHlwZV9ncmFwaHFsXzEuUm9vdDtcbmV4cG9ydHMubXV0YXRpb24gPSB0eXBlX2dyYXBocWxfMS5NdXRhdGlvbjtcbmV4cG9ydHMuc3Vic2NyaXB0aW9uID0gdHlwZV9ncmFwaHFsXzEuU3Vic2NyaXB0aW9uO1xuZXhwb3J0cy5wdWJTdWIgPSB0eXBlX2dyYXBocWxfMS5QdWJTdWI7XG5leHBvcnRzLmlucHV0VHlwZSA9IHR5cGVfZ3JhcGhxbF8xLklucHV0VHlwZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpHVmpiM0poZEc5eWN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZkWFJwYkhNdlpHVmpiM0poZEc5eWN5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxEUkNRVUV3UWp0QlFVTXhRaXd3UTBGQmRVUTdRVUZKZGtRc09FUkJRWGRHTzBGQlEzaEdMR3RFUVVGclJUdEJRVU5zUlN4dlJFRkJLMGc3UVVGRkwwZ3NLME5CV1hOQ08wRkJhMEowUWl4VFFVRm5RaXhQUVVGUExFTkJRVU1zVTBGQmVVSXNSVUZCUlR0SlFVTXZReXhQUVVGUExFTkJRVU1zVFVGQlZ5eEZRVUZGTEVkQlFXOUNMRVZCUVVVc1JVRkJSVHRSUVVONlF5eE5RVUZOTEZOQlFWTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRGFrTXNUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5dzBRa0ZCWjBJc1EwRkJReXhOUVVGTkxFVkJRVVVzVTBGQlV5eEZRVUZGTEdsQ1FVRnBRaXhGUVVGRkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTNSaXh4UTBGQmVVSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1UwRkJVeXhGUVVGRkxGTkJRVk1zUlVGQlJTeHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8wbEJReTlGTEVOQlFVTXNRMEZCUXp0QlFVTk9MRU5CUVVNN1FVRk9SQ3d3UWtGTlF6dEJRV2RDUkN4VFFVRm5RaXhSUVVGUkxFTkJRVU1zVVVGQk1rSXNSVUZCUlN4TlFVRjNRanRKUVVNeFJTeFBRVUZQTEVOQlFVTXNUVUZCVnl4RlFVRkZMRWRCUVc5Q0xFVkJRVVVzUlVGQlJUdFJRVU42UXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZIYWtNc1NVRkJTU3hSUVVGUkxFbEJRVWtzUTBGQlF5eERRVUZETEZGQlFWRXNXVUZCV1N4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTA3V1VGQlJTeE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRPMUZCUXpsRkxFbEJRVWtzVVVGQlVTeEpRVUZKTEVOQlFVTXNRMEZCUXl4UlFVRlJMRmxCUVZrc1VVRkJVU3hEUVVGRE8xbEJRVVVzVVVGQlVTeEhRVUZITEZOQlFWTXNRMEZCUXp0UlFVTjBSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXl4TlFVRk5MRmxCUVZrc1RVRkJUU3hEUVVGRE8xbEJRVVVzVFVGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVZDRSQ3hOUVVGTkxHbENRVUZwUWl4SFFVRkhMRFJDUVVGblFpeERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc2JVSkJRVzFDTEVWQlFVVXNSVUZCUlN4UlFVRlJMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU42Unl4eFEwRkJlVUlzUTBGQlF5eE5RVUZOTEVWQlFVVXNVMEZCVXl4RlFVRkZMRlZCUVZVc1JVRkJSU3hwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMGxCUTJoR0xFTkJRVU1zUTBGQlF6dEJRVU5PTEVOQlFVTTdRVUZpUkN3MFFrRmhRenRCUVhGQ1JDeFRRVUZuUWl4VFFVRlRMRU5CUVVNc1VVRkJNa0lzUlVGQlJTeE5RVUY1UWp0SlFVTTFSU3hQUVVGUExFTkJRVU1zVFVGQlZ5eEZRVUZGTEVkQlFXOUNMRVZCUVVVc1JVRkJSVHRSUVVONlF5eE5RVUZOTEZOQlFWTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGSGFrTXNTVUZCU1N4UlFVRlJMRWxCUVVrc1EwRkJReXhEUVVGRExGRkJRVkVzV1VGQldTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwN1dVRkJSU3hOUVVGTkxFZEJRVWNzVVVGQlVTeERRVUZETzFGQlF6bEZMRWxCUVVrc1VVRkJVU3hKUVVGSkxFTkJRVU1zUTBGQlF5eFJRVUZSTEZsQlFWa3NVVUZCVVN4RFFVRkRPMWxCUVVVc1VVRkJVU3hIUVVGSExGTkJRVk1zUTBGQlF6dFJRVU4wUlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF5eE5RVUZOTEZsQlFWa3NUVUZCVFN4RFFVRkRPMWxCUVVVc1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVWQ0UkN4SlFVRkpMRkZCUVZFc1dVRkJXU3hSUVVGUkxFbEJRVWtzVFVGQlRUdFpRVUZGTEc5Q1FVRkxMRU5CUVVNc1VVRkJVU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVNMVJTeEpRVUZKTEZGQlFWRXNXVUZCV1N4UlFVRlJPMWxCUVVVc2IwSkJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03WVVGREwwUXNTVUZCU1N4TlFVRk5PMWxCUVVVc2IwSkJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03TzFsQlEzWkRMRzlDUVVGTExFVkJRVVVzUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkhNVUlzVFVGQlRTeHBRa0ZCYVVJc1IwRkJSeXcwUWtGQlowSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1UwRkJVeXhGUVVGRkxHMUNRVUZ0UWl4RlFVRkZMRVZCUVVVc1VVRkJVU3hGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEZWtjc2NVTkJRWGxDTEVOQlFVTXNUVUZCVFN4RlFVRkZMRk5CUVZNc1JVRkJSU3hYUVVGWExFVkJRVVVzYVVKQlFXbENMRU5CUVVNc1EwRkJRenRKUVVOcVJpeERRVUZETEVOQlFVTTdRVUZEVGl4RFFVRkRPMEZCYmtKRUxEaENRVzFDUXp0QlFXTkVMRk5CUVdkQ0xHVkJRV1VzUTBGQlF5eEpRVUZyUWl4RlFVRkZMRTFCUVdkQ0xFVkJRVVVzVVVGQlowSXNRMEZCUXp0SlFVVnVSaXhQUVVGUExFTkJRVU1zU1VGQlV5eEZRVUZGTEVWQlFVVTdVVUZEYWtJc1RVRkJUU3hUUVVGVExFZEJRVWNzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNNVF5eEpRVUZKTERaQ1FVRnBRaXhEUVVGRExGTkJRVk1zUTBGQlF6dFpRVUZGTEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVkb1J5eEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1NVRkJTU3hMUVVGTExGRkJRVkVzUTBGQlF6dFpRVUZGTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRja1FzU1VGQlNTeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWxCUVVrc1MwRkJTeXhSUVVGUkxFTkJRVU03V1VGQlJTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTNSRUxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4UFFVRlBMRWxCUVVrc1MwRkJTeXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNTVUZCU1N4TFFVRkxMRkZCUVZFc1EwRkJReXhEUVVGRE8xbEJRVVVzU1VGQlNTeEhRVUZITEZOQlFWTXNRMEZCUXp0UlFVTjZSaXhKUVVGSkxFMUJRVTBzU1VGQlNTeERRVUZETEU5QlFVOHNUVUZCVFN4TFFVRkxMRkZCUVZFc1EwRkJRenRaUVVGRkxFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZETTBRc1NVRkJTU3hOUVVGTkxFbEJRVWtzUTBGQlF5eFBRVUZQTEUxQlFVMHNTMEZCU3l4UlFVRlJMRU5CUVVNN1dVRkJSU3hOUVVGTkxFZEJRVWNzVTBGQlV5eERRVUZETzFGQlJTOUVMRWxCUVVrc2MwSkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVVnNRaXhKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNTVUZCU1N4TFFVRkxMRkZCUVZFc1EwRkJReXhKUVVGSkxFMUJRVTBzU1VGQlNTeERRVUZETEU5QlFVOHNUVUZCVFN4TFFVRkxMRkZCUVZFc1EwRkJReXhGUVVGRk8yZENRVU01UlN4NVFrRkJWU3hEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRoUVVOc1F6dHBRa0ZCVFN4SlFVRkpMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeExRVUZMTEZGQlFWRXNRMEZCUXl4RlFVRkZPMmRDUVVNelF5eDVRa0ZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJGQlF6RkNPMmxDUVVGTkxFbEJRVWtzVFVGQlRTeEpRVUZKTEVOQlFVTXNUMEZCVHl4TlFVRk5MRXRCUVVzc1VVRkJVU3hEUVVGRExFVkJRVVU3WjBKQlF5OURMSGxDUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1lVRkROVUk3TzJkQ1FVRk5MSGxDUVVGVkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVY3hRaXhKUVVGSkxFMUJRVTBzU1VGQlNTeERRVUZETEU5QlFVOHNUVUZCVFN4TFFVRkxMRkZCUVZFc1EwRkJReXhGUVVGRk8yZENRVU40UXl4TlFVRk5MR3RDUVVGclFpeEhRVUZITEhOQ1FVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxHZENRVUZuUWl4RFFVRkRMRU5CUVVNN1owSkJReTlFTEUxQlFVMHNaMEpCUVdkQ0xFZEJRVWNzYzBKQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1kwRkJZeXhEUVVGRExFTkJRVU03WjBKQlF6TkVMSGxDUVVGakxFTkJRVU1zU1VGQlNTeEZRVUZGTEdkQ1FVRm5RaXhGUVVGRkxFMUJRVTBzUTBGQlF5eGpRVUZqTEVsQlFVa3NhMEpCUVd0Q0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTTdaMEpCUTJwSExIbENRVUZqTEVOQlFVTXNTVUZCU1N4RlFVRkZMR05CUVdNc1JVRkJSU3hOUVVGTkxFTkJRVU1zV1VGQldTeEpRVUZKTEdkQ1FVRm5RaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETzJGQlF6bEdPMU5CUTBvN1VVRkRSQ3hKUVVGSkxFMUJRVTBzU1VGQlNTeERRVUZETEU5QlFVOHNUVUZCVFN4TFFVRkxMRkZCUVZFc1NVRkJTU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETzFsQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNN1VVRkZOMFVzVFVGQlRTeGxRVUZsTEVkQlFVY3NkME5CUVhOQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUlRWRUxFbEJRVWtzZFVKQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOdVFpeGpRVUZqTEVOQlFVTXNUVUZCVFN4RFFVRkRMREpDUVVGdlFpeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hsUVVGbExFVkJRVVU3WjBKQlEzQkZMRTlCUVU4c1JVRkJSU3hsUVVGbExFTkJRVU1zVDBGQlR6dGhRVU51UXl4RFFVRkRMRU5CUVVNN1UwRkRUanRSUVVORUxFOUJRVThzWlVGQlpTeERRVUZETzBsQlF6TkNMRU5CUVVNc1EwRkJRenRCUVVOT0xFTkJRVU03UVVFeFEwUXNNRU5CTUVORE8wRkJSVlVzVVVGQlFTeExRVUZMTEVkQlFVY3NiMEpCUVVzc1EwRkJRenRCUVVOa0xGRkJRVUVzUjBGQlJ5eEhRVUZITEd0Q1FVRkhMRU5CUVVNN1FVRkRWaXhSUVVGQkxFbEJRVWtzUjBGQlJ5eHRRa0ZCU1N4RFFVRkRPMEZCUTFvc1VVRkJRU3hSUVVGUkxFZEJRVWNzZFVKQlFWRXNRMEZCUXp0QlFVTndRaXhSUVVGQkxFbEJRVWtzUjBGQlJ5eHRRa0ZCU1N4RFFVRkRPMEZCUTFvc1VVRkJRU3hSUVVGUkxFZEJRVWNzZFVKQlFWRXNRMEZCUXp0QlFVTndRaXhSUVVGQkxGbEJRVmtzUjBGQlJ5d3lRa0ZCV1N4RFFVRkRPMEZCUXpWQ0xGRkJRVUVzVFVGQlRTeEhRVUZITEhGQ1FVRk5MRU5CUVVNN1FVRkRhRUlzVVVGQlFTeFRRVUZUTEVkQlFVY3NkMEpCUVZNc1EwRkJReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgbnVuanVja3MgPSB0c2xpYl8xLl9faW1wb3J0U3RhcihyZXF1aXJlKFwibnVuanVja3NcIikpO1xuZnVuY3Rpb24gaXNOb2RlSlMoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc05vZGVKUyA9IGlzTm9kZUpTO1xuZnVuY3Rpb24gaXNCcm93c2VyKCkge1xuICAgIHJldHVybiAhaXNOb2RlSlMoKTtcbn1cbmV4cG9ydHMuaXNCcm93c2VyID0gaXNCcm93c2VyO1xuZXhwb3J0cy50ZW1wbGF0ZUVudmlyb25tZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBub0NhY2hlID0gZ2xvYmFsLnByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGNvbnN0IGVudiA9IG5ldyBudW5qdWNrcy5FbnZpcm9ubWVudCh7XG4gICAgICAgIGdldFNvdXJjZTogKHBhdGgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHNyYzogcmVxdWlyZShwYXRoKSwgcGF0aCwgbm9DYWNoZSB9O1xuICAgICAgICB9XG4gICAgfSwgeyBub0NhY2hlIH0pO1xuICAgIGVudi5hZGRGaWx0ZXIoJ2pzb24nLCAodmFsdWUsIHNwYWNlcykgPT4ge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBudW5qdWNrcy5ydW50aW1lLlNhZmVTdHJpbmcpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IG51bmp1Y2tzLnJ1bnRpbWUuU2FmZVN0cmluZyhKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgc3BhY2VzKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVudjtcbn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laVzUyYVhKdmJtMWxiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDNWMGFXeHpMMlZ1ZG1seWIyNXRaVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZCTERKRVFVRnhRenRCUVZGeVF5eFRRVUZuUWl4UlFVRlJPMGxCUTNCQ0xFbEJRVWtzVDBGQlR5eE5RVUZOTEV0QlFVc3NWMEZCVnl4SlFVRkpMRTlCUVU4c1QwRkJUeXhMUVVGTExGRkJRVkVzUlVGQlJUdFJRVU01UkN4UFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObU8wbEJRMFFzVDBGQlR5eExRVUZMTEVOQlFVTTdRVUZEYWtJc1EwRkJRenRCUVV4RUxEUkNRVXRETzBGQlVVUXNVMEZCWjBJc1UwRkJVenRKUVVOeVFpeFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1FVRkRka0lzUTBGQlF6dEJRVVpFTERoQ1FVVkRPMEZCUzFrc1VVRkJRU3h0UWtGQmJVSXNSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSVHRKUVVOeVF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEV0QlFVc3NZVUZCWVN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTTNSU3hOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRha01zVTBGQlV5eEZRVUZGTEVOQlFVTXNTVUZCV1N4RlFVRkZMRVZCUVVVN1dVRkRlRUlzVDBGQlR5eEZRVUZGTEVkQlFVY3NSVUZCUlN4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUTJwRUxFTkJRVU03UzBGRFNpeEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVWb1FpeEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVWQlFVVXNSVUZCUlR0UlFVTndReXhKUVVGSkxFdEJRVXNzV1VGQldTeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1JVRkJSVHRaUVVNNVF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xTkJRelZDTzFGQlEwUXNUMEZCVHl4SlFVRkpMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJoR0xFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEwZ3NUMEZCVHl4SFFVRkhMRU5CUVVNN1FVRkRaaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQmluZGluZ18xID0gcmVxdWlyZShcIn5iZG8vbGliL0JpbmRpbmdcIik7XG5jb25zdCBBdHRyaWJ1dGVfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9BdHRyaWJ1dGVcIik7XG5jb25zdCBQcm9wZXJ0eV8xID0gcmVxdWlyZShcIn5iZG8vbGliL1Byb3BlcnR5XCIpO1xuY29uc3QgV2F0Y2hlZF8xID0gcmVxdWlyZShcIn5iZG8vbGliL1dhdGNoZWRcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2Vudmlyb25tZW50XCIpO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuZnVuY3Rpb24gYmVmb3JlRGVzY3JpcHRvcih0YXJnZXQsIGtleSwgbURhdGFOYW1lLCBwYXJhbXMpIHtcbiAgICBpZiAoIVJlZmxlY3QuaGFzTWV0YWRhdGEobURhdGFOYW1lLCB0YXJnZXQpKVxuICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKHRhcmdldCwgbURhdGFOYW1lLCBuZXcgTWFwKCkpO1xuICAgIGNvbnN0IG1hcCA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEodGFyZ2V0LCBtRGF0YU5hbWUpO1xuICAgIGNvbnN0IG9sZERlY29yYXRvclNldHRpbmdzID0gbWFwLmdldChrZXkpIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0gdXRpbF8xLm1lcmdlKG9sZERlY29yYXRvclNldHRpbmdzLCBwYXJhbXMpO1xuICAgIG1hcC5zZXQoa2V5LCBzZXR0aW5ncyk7XG4gICAgcmV0dXJuIHNldHRpbmdzO1xufVxuZXhwb3J0cy5iZWZvcmVEZXNjcmlwdG9yID0gYmVmb3JlRGVzY3JpcHRvcjtcbmZ1bmN0aW9uIGdldHRlcihpbnN0YW5jZSwga2V5LCBucyA9IFwiXCIpIHtcbiAgICBsZXQgc3RyaW5nS2V5ID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgaWYgKG5zKVxuICAgICAgICBzdHJpbmdLZXkgPSBgJHtuc306JHtrZXl9YDtcbiAgICBpZiAoIW1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwibm9ybWFsRnVuY3Rpb25hbGl0eVwiKSkge1xuICAgICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGluc3RhbmNlLCBcImRlZmF1bHRTZXR0aW5nc1wiKSB8fCB7fTtcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGRlZmF1bHRTZXR0aW5ncywgc3RyaW5nS2V5KTtcbiAgICB9XG4gICAgY29uc3QgbURhdGEgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEoaW5zdGFuY2UsIHN0cmluZ0tleSk7XG4gICAgaWYgKG1EYXRhKVxuICAgICAgICByZXR1cm4gbURhdGEudmFsdWVPZigpO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5leHBvcnRzLmdldHRlciA9IGdldHRlcjtcbmZ1bmN0aW9uIHNldHRlcihpbnN0YW5jZSwga2V5LCBuZXdWYWwsIG5zID0gXCJcIikge1xuICAgIGxldCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICBpZiAobnMpXG4gICAgICAgIHN0cmluZ0tleSA9IGAke25zfToke2tleX1gO1xuICAgIGlmICghbnMgJiYgaW5zdGFuY2Vbc3RyaW5nS2V5XSA9PT0gbmV3VmFsKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKCFtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGluc3RhbmNlLCBcIm5vcm1hbEZ1bmN0aW9uYWxpdHlcIikpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShpbnN0YW5jZSwgXCJkZWZhdWx0U2V0dGluZ3NcIikgfHwge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGVmYXVsdFNldHRpbmdzLCB7IFtzdHJpbmdLZXldOiBuZXdWYWwgfSk7XG4gICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEoaW5zdGFuY2UsIFwiZGVmYXVsdFNldHRpbmdzXCIsIGRlZmF1bHRTZXR0aW5ncyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbURhdGEgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEoaW5zdGFuY2UsIHN0cmluZ0tleSk7XG4gICAgaWYgKG5ld1ZhbCBpbnN0YW5jZW9mIEJpbmRpbmdfMS5CaW5kaW5nKSB7XG4gICAgICAgIG5ld1ZhbC5pbnN0YWxsKGluc3RhbmNlLCBrZXkpO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIG1EYXRhLnNldFZhbHVlKG5ld1ZhbCk7XG59XG5leHBvcnRzLnNldHRlciA9IHNldHRlcjtcbmZ1bmN0aW9uIGNyZWF0ZURlY29yYXRvckRlc2NyaXB0b3IodGFyZ2V0LCBrZXksIHR5cGUsIHBhcmFtcykge1xuICAgIGNvbnN0IHByb3BEZXNjID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgIGNvbnN0IHN0cmluZ0tleSA9IGtleS50b1N0cmluZygpO1xuICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBrZXkpO1xuICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBkZWNvcmF0b3JHZXR0ZXIoKSB7XG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBnZXR0ZXIodGhhdCwgc3RyaW5nS2V5KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBkZWNvcmF0b3JTZXR0ZXIobmV3VmFsKSB7XG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IG1EYXRhID0gbWV0YWRhdGFfMS5nZXRXaWxkY2FyZE1ldGFkYXRhKHRoaXMsIGtleSk7XG4gICAgICAgICAgICBsZXQgZmllbGQ7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJBdHRyaWJ1dGVcIikge1xuICAgICAgICAgICAgICAgIGZpZWxkID0gbmV3IEF0dHJpYnV0ZV8xLkF0dHJpYnV0ZSh0aGF0LCBzdHJpbmdLZXksIHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIlByb3BlcnR5XCIpIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA9IG5ldyBQcm9wZXJ0eV8xLlByb3BlcnR5KHRoYXQsIHN0cmluZ0tleSwgcGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBmaWVsZCA9IG5ldyBXYXRjaGVkXzEuV2F0Y2hlZCh0aGF0LCBzdHJpbmdLZXksIHBhcmFtcyk7XG4gICAgICAgICAgICBpZiAobURhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoKG1EYXRhIGluc3RhbmNlb2YgQXR0cmlidXRlXzEuQXR0cmlidXRlIHx8IG1EYXRhIGluc3RhbmNlb2YgUHJvcGVydHlfMS5Qcm9wZXJ0eSkgJiYgZmllbGQgaW5zdGFuY2VvZiBXYXRjaGVkXzEuV2F0Y2hlZCkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZC5zZXRTdWJPYmplY3QobURhdGEpO1xuICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEodGhpcywgc3RyaW5nS2V5LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChmaWVsZCBpbnN0YW5jZW9mIFByb3BlcnR5XzEuUHJvcGVydHkgfHwgZmllbGQgaW5zdGFuY2VvZiBBdHRyaWJ1dGVfMS5BdHRyaWJ1dGUpICYmIG1EYXRhIGluc3RhbmNlb2YgV2F0Y2hlZF8xLldhdGNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtRGF0YS5zdWJPYmplY3QpXG4gICAgICAgICAgICAgICAgICAgICAgICBtRGF0YS5zZXRTdWJPYmplY3QoZmllbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZVdpbGRjYXJkTWV0YWRhdGEodGhpcywgc3RyaW5nS2V5LCBmaWVsZCk7XG4gICAgICAgICAgICBpZiAoKCh0eXBlID09PSBcIkF0dHJpYnV0ZVwiIHx8IHR5cGUgPT09IFwiUHJvcGVydHlcIikgJiYgIShtRGF0YSBpbnN0YW5jZW9mIFdhdGNoZWRfMS5XYXRjaGVkKSkgfHwgdHlwZSA9PT0gXCJXYXRjaGVkXCIpIHtcbiAgICAgICAgICAgICAgICBzZXR0ZXIodGhhdCwgc3RyaW5nS2V5LCBuZXdWYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BEZXNjICYmIHByb3BEZXNjLnNldCAmJiBwcm9wRGVzYy5zZXQubmFtZSA9PT0gXCJkZWNvcmF0b3JTZXR0ZXJcIilcbiAgICAgICAgICAgICAgICBwcm9wRGVzYy5zZXQuY2FsbCh0aGlzLCBuZXdWYWwpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbn1cbmV4cG9ydHMuY3JlYXRlRGVjb3JhdG9yRGVzY3JpcHRvciA9IGNyZWF0ZURlY29yYXRvckRlc2NyaXB0b3I7XG5mdW5jdGlvbiBpc0Jhc2VDb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiAmJiB2YWx1ZS5uYW1lID09PSBcIkJhc2VDb25zdHJ1Y3RvclwiKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgdmFsdWUuY29uc3RydWN0b3IubmFtZSA9PT0gXCJCYXNlQ29uc3RydWN0b3JcIilcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc0Jhc2VDb25zdHJ1Y3RvciA9IGlzQmFzZUNvbnN0cnVjdG9yO1xuZnVuY3Rpb24gaXNCRE9Nb2RlbCh2YWx1ZSkge1xuICAgIGlmIChcImlzQkRPTW9kZWxcIiBpbiB2YWx1ZSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc0JET01vZGVsID0gaXNCRE9Nb2RlbDtcbmZ1bmN0aW9uIGlzQ2xpZW50TW9kZWwodmFsdWUpIHtcbiAgICBpZiAoaXNCRE9Nb2RlbCh2YWx1ZSkgJiYgXCJpc0NsaWVudE1vZGVsXCIgaW4gdmFsdWUpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaXNDbGllbnRNb2RlbCA9IGlzQ2xpZW50TW9kZWw7XG5mdW5jdGlvbiBpc1NlcnZlck1vZGVsKHZhbHVlKSB7XG4gICAgaWYgKGlzQkRPTW9kZWwodmFsdWUpICYmIFwiaXNTZXJ2ZXJNb2RlbFwiIGluIHZhbHVlKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmlzU2VydmVyTW9kZWwgPSBpc1NlcnZlck1vZGVsO1xuZnVuY3Rpb24gaXNDb21wb25lbnQodmFsdWUpIHtcbiAgICBpZiAoZW52aXJvbm1lbnRfMS5pc0Jyb3dzZXIoKSAmJiBcImlzQmFzZUNvbXBvbmVudFwiIGluIHZhbHVlKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmlzQ29tcG9uZW50ID0gaXNDb21wb25lbnQ7XG5mdW5jdGlvbiBpc1JlZmVyZW5jZVN0cmluZyh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCByZWZSZWdFeCA9IC9fcmVmZXJlbmNlXFw6W0EtWnwwLTl8X3wkXSpcXDpbQS1afDAtOXxcXC18X10qL2dpO1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlLm1hdGNoKHJlZlJlZ0V4KSkudmFsdWVPZigpO1xufVxuZXhwb3J0cy5pc1JlZmVyZW5jZVN0cmluZyA9IGlzUmVmZXJlbmNlU3RyaW5nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWm5KaGJXVjNiM0pyTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5MWRHbHNjeTltY21GdFpYZHZjbXN1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3c0UTBGQk1rTTdRVUZETTBNc2EwUkJRV2xGTzBGQlEycEZMR2RFUVVFNFJEdEJRVU01UkN3NFEwRkJNa1E3UVVGRk0wUXNNRU5CUVhkRE8wRkJRM2hETEhkRVFVRnRSRHRCUVVOdVJDeHJSRUZCSzBjN1FVRXJReTlITEZOQlFXZENMR2RDUVVGblFpeERRVXM1UWl4TlFVRlRMRVZCUVVVc1IwRkJUU3hGUVVGRkxGTkJRVmtzUlVGQlJTeE5RVUZUTzBsQlJYaERMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEZOQlFWTXNSVUZCUlN4TlFVRk5MRU5CUVVNN1VVRkJSU3g1UWtGQll5eERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkdMRTFCUVUwc1IwRkJSeXhIUVVGSExITkNRVUZYTEVOQlFVTXNUVUZCVFN4RlFVRkZMRk5CUVZNc1EwRkJiVU1zUTBGQlF6dEpRVU0zUlN4TlFVRk5MRzlDUVVGdlFpeEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzBsQlEyaEVMRTFCUVUwc1VVRkJVU3hIUVVGSExGbEJRVXNzUTBGQlF5eHZRa0ZCYjBJc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU55UkN4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0SlFVTjJRaXhQUVVGUExGRkJRVkVzUTBGQlF6dEJRVU53UWl4RFFVRkRPMEZCWWtRc05FTkJZVU03UVVGaFJDeFRRVUZuUWl4TlFVRk5MRU5CUVhGRUxGRkJRVmNzUlVGQlJTeEhRVUZOTEVWQlFVVXNTMEZCWVN4RlFVRkZPMGxCUXpOSExFbEJRVWtzVTBGQlV5eEhRVUZITEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVNdlFpeEpRVUZKTEVWQlFVVTdVVUZCUlN4VFFVRlRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFbEJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZEYmtNc1NVRkJTU3hEUVVGRExITkNRVUZYTEVOQlFVTXNVVUZCVVN4RlFVRkZMSEZDUVVGeFFpeERRVUZETEVWQlFVVTdVVUZETDBNc1RVRkJUU3hsUVVGbExFZEJRVWNzYzBKQlFWY3NRMEZCUXl4UlFVRlJMRVZCUVVVc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRka1VzVDBGQlR5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMR1ZCUVdVc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlF6dExRVU5zUkR0SlFVTkVMRTFCUVUwc1MwRkJTeXhIUVVGSExEaENRVUZ0UWl4RFFVRkRMRkZCUVZFc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlF6dEpRVU4yUkN4SlFVRkpMRXRCUVVzN1VVRkJSU3hQUVVGUExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0SlFVTnNReXhQUVVGUExGTkJRVk1zUTBGQlF6dEJRVU55UWl4RFFVRkRPMEZCVmtRc2QwSkJWVU03UVVGbFJDeFRRVUZuUWl4TlFVRk5MRU5CUldkQ0xGRkJRVmNzUlVGQlJTeEhRVUZOTEVWQlFVVXNUVUZCY1VJc1JVRkJSU3hMUVVGaExFVkJRVVU3U1VGSE4wWXNTVUZCU1N4VFFVRlRMRWRCUVVjc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBsQlF5OUNMRWxCUVVrc1JVRkJSVHRSUVVGRkxGTkJRVk1zUjBGQlJ5eEhRVUZITEVWQlFVVXNTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVkdVF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4SlFVRkpMRkZCUVZFc1EwRkJTU3hUUVVGVExFTkJRVU1zUzBGQlN5eE5RVUZOTzFGQlFVVXNUMEZCVHp0SlFVZHlSQ3hKUVVGSkxFTkJRVU1zYzBKQlFWY3NRMEZCUXl4UlFVRlJMRVZCUVVVc2NVSkJRWEZDTEVOQlFVTXNSVUZCUlR0UlFVTXZReXhOUVVGTkxHVkJRV1VzUjBGQlJ5eHpRa0ZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hwUWtGQmFVSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVOMlJTeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMR1ZCUVdVc1JVRkJSU3hGUVVGRkxFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVONFJDeDVRa0ZCWXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hwUWtGQmFVSXNSVUZCUlN4bFFVRmxMRU5CUVVNc1EwRkJRenRSUVVNM1JDeFBRVUZQTzB0QlExWTdTVUZIUkN4TlFVRk5MRXRCUVVzc1IwRkJSeXc0UWtGQmJVSXNRMEZCUXl4UlFVRlJMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03U1VGRmRrUXNTVUZCU1N4TlFVRk5MRmxCUVZrc2FVSkJRVThzUlVGQlJUdFJRVU16UWl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0TFFVTnFRenM3VVVGQlRTeExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRMnhETEVOQlFVTTdRVUY2UWtRc2QwSkJlVUpETzBGQlYwUXNVMEZCWjBJc2VVSkJRWGxDTEVOQlIxUXNUVUZCVXl4RlFVRkZMRWRCUVUwc1JVRkJSU3hKUVVGdFFpeEZRVUZGTEUxQlFWTTdTVUZGTjBVc1RVRkJUU3hSUVVGUkxFZEJRVWNzVDBGQlR5eERRVUZETEhkQ1FVRjNRaXhEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTXZSQ3hOUVVGTkxGTkJRVk1zUjBGQlJ5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkZha01zVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRGNFTXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEZRVUZGTzFGQlEyaERMRWRCUVVjc1JVRkJSU3hUUVVGVExHVkJRV1U3V1VGRGVrSXNUVUZCVFN4SlFVRkpMRWRCUVZFc1NVRkJTU3hEUVVGRE8xbEJRM1pDTEU5QlFVOHNUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlF6dFJRVU51UXl4RFFVRkRPMUZCUTBRc1IwRkJSeXhGUVVGRkxGTkJRVk1zWlVGQlpTeERRVUZETEUxQlFWYzdXVUZEY2tNc1RVRkJUU3hKUVVGSkxFZEJRVkVzU1VGQlNTeERRVUZETzFsQlEzWkNMRTFCUVUwc1MwRkJTeXhIUVVGSExEaENRVUZ0UWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dFpRVWMzUXl4SlFVRkpMRXRCUVVzc1EwRkJRenRaUVVOV0xFbEJRVWtzU1VGQlNTeExRVUZMTEZkQlFWY3NSVUZCUlR0blFrRkRkRUlzUzBGQlN5eEhRVUZITEVsQlFVa3NjVUpCUVZNc1EwRkJReXhKUVVGSkxFVkJRVVVzVTBGQlV5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMkZCUTJ4RU8ybENRVUZOTEVsQlFVa3NTVUZCU1N4TFFVRkxMRlZCUVZVc1JVRkJSVHRuUWtGRE5VSXNTMEZCU3l4SFFVRkhMRWxCUVVrc2JVSkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVXl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8yRkJRMnBFT3p0blFrRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeHBRa0ZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hUUVVGVExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdXVUZIY0VRc1NVRkJTU3hMUVVGTExFVkJRVVU3WjBKQlExQXNTVUZCU1N4RFFVRkRMRXRCUVVzc1dVRkJXU3h4UWtGQlV5eEpRVUZKTEV0QlFVc3NXVUZCV1N4dFFrRkJVU3hEUVVGRExFbEJRVWtzUzBGQlN5eFpRVUZaTEdsQ1FVRlBMRVZCUVVVN2IwSkJRM1pHTEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03YjBKQlF6RkNMR2xEUVVGelFpeERRVUZETEVsQlFVa3NSVUZCUlN4VFFVRlRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03YVVKQlEyeEVPM0ZDUVVGTkxFbEJRVWtzUTBGQlF5eExRVUZMTEZsQlFWa3NiVUpCUVZFc1NVRkJTU3hMUVVGTExGbEJRVmtzY1VKQlFWTXNRMEZCUXl4SlFVRkpMRXRCUVVzc1dVRkJXU3hwUWtGQlR5eEZRVUZGTzI5Q1FVTTVSaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTTdkMEpCUVVVc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0cFFrRkRia1E3WVVGRFNqczdaMEpCUVUwc2FVTkJRWE5DTEVOQlFVTXNTVUZCU1N4RlFVRkZMRk5CUVZNc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU4wUkN4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFdEJRVXNzVjBGQlZ5eEpRVUZKTEVsQlFVa3NTMEZCU3l4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUzBGQlN5eFpRVUZaTEdsQ1FVRlBMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUzBGQlN5eFRRVUZUTEVWQlFVVTdaMEpCUTNSSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVXl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8yRkJRMjVETzFsQlEwUXNTVUZCU1N4UlFVRlJMRWxCUVVrc1VVRkJVU3hEUVVGRExFZEJRVWNzU1VGQlNTeFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1MwRkJTeXhwUWtGQmFVSTdaMEpCUVVVc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRemRITEVOQlFVTTdVVUZEUkN4VlFVRlZMRVZCUVVVc1NVRkJTVHRSUVVOb1FpeFpRVUZaTEVWQlFVVXNTVUZCU1R0TFFVTnlRaXhEUVVGRExFTkJRVU03UVVGRFVDeERRVUZETzBGQk0wTkVMRGhFUVRKRFF6dEJRVk5FTEZOQlFXZENMR2xDUVVGcFFpeERRVUZETEV0QlFXRTdTVUZETTBNc1NVRkJTU3hQUVVGUExFdEJRVXNzUzBGQlN5eFZRVUZWTEVsQlFVa3NTMEZCU3l4RFFVRkRMRWxCUVVrc1MwRkJTeXhwUWtGQmFVSTdVVUZCUlN4UFFVRlBMRWxCUVVrc1EwRkJRenRKUVVOcVJpeEpRVUZKTEV0QlFVc3NXVUZCV1N4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEV0QlFVc3NhVUpCUVdsQ08xRkJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEZWtZc1QwRkJUeXhMUVVGTExFTkJRVU03UVVGRGFrSXNRMEZCUXp0QlFVcEVMRGhEUVVsRE8wRkJWVVFzVTBGQlowSXNWVUZCVlN4RFFVRkRMRXRCUVdFN1NVRkRjRU1zU1VGQlNTeFpRVUZaTEVsQlFVa3NTMEZCU3p0UlFVRkZMRTlCUVU4c1NVRkJTU3hEUVVGRE8wbEJRM1pETEU5QlFVOHNTMEZCU3l4RFFVRkRPMEZCUTJwQ0xFTkJRVU03UVVGSVJDeG5RMEZIUXp0QlFWVkVMRk5CUVdkQ0xHRkJRV0VzUTBGQlF5eExRVUZoTzBsQlEzWkRMRWxCUVVrc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEdWQlFXVXNTVUZCU1N4TFFVRkxPMUZCUVVVc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGREwwUXNUMEZCVHl4TFFVRkxMRU5CUVVNN1FVRkRha0lzUTBGQlF6dEJRVWhFTEhORFFVZERPMEZCVlVRc1UwRkJaMElzWVVGQllTeERRVUZETEV0QlFXRTdTVUZEZGtNc1NVRkJTU3hWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NaVUZCWlN4SlFVRkpMRXRCUVVzN1VVRkJSU3hQUVVGUExFbEJRVWtzUTBGQlF6dEpRVU12UkN4UFFVRlBMRXRCUVVzc1EwRkJRenRCUVVOcVFpeERRVUZETzBGQlNFUXNjME5CUjBNN1FVRlhSQ3hUUVVGblFpeFhRVUZYTEVOQlFUaERMRXRCUVdFN1NVRkRiRVlzU1VGQlNTeDFRa0ZCVXl4RlFVRkZMRWxCUVVrc2FVSkJRV2xDTEVsQlFVa3NTMEZCU3p0UlFVRkZMRTlCUVU4c1NVRkJTU3hEUVVGRE8wbEJRek5FTEU5QlFVOHNTMEZCU3l4RFFVRkRPMEZCUTJwQ0xFTkJRVU03UVVGSVJDeHJRMEZIUXp0QlFWTkVMRk5CUVdkQ0xHbENRVUZwUWl4RFFVRkRMRXRCUVZVN1NVRkRlRU1zU1VGQlNTeFBRVUZQTEV0QlFVc3NTMEZCU3l4UlFVRlJPMUZCUVVVc1QwRkJUeXhMUVVGTExFTkJRVU03U1VGRE5VTXNUVUZCVFN4UlFVRlJMRWRCUVVjc0swTkJRU3RETEVOQlFVTTdTVUZEYWtVc1QwRkJUeXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzBGQlEzQkVMRU5CUVVNN1FVRktSQ3c0UTBGSlF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGRlZmluZU1ldGFkYXRhKHRhcmdldCwga2V5LCB2YWwpIHtcbiAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKGtleSwgdmFsLCB0YXJnZXQpO1xufVxuZXhwb3J0cy5kZWZpbmVNZXRhZGF0YSA9IGRlZmluZU1ldGFkYXRhO1xuZnVuY3Rpb24gZ2V0TWV0YWRhdGEodGFyZ2V0LCBrZXkpIHtcbiAgICByZXR1cm4gUmVmbGVjdC5nZXRNZXRhZGF0YShrZXksIHRhcmdldCk7XG59XG5leHBvcnRzLmdldE1ldGFkYXRhID0gZ2V0TWV0YWRhdGE7XG5mdW5jdGlvbiBkZWZpbmVXaWxkY2FyZE1ldGFkYXRhKHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoa2V5LCB2YWx1ZSwgdGFyZ2V0KTtcbn1cbmV4cG9ydHMuZGVmaW5lV2lsZGNhcmRNZXRhZGF0YSA9IGRlZmluZVdpbGRjYXJkTWV0YWRhdGE7XG5mdW5jdGlvbiBnZXRXaWxkY2FyZE1ldGFkYXRhKHRhcmdldCwga2V5KSB7XG4gICAgcmV0dXJuIFJlZmxlY3QuZ2V0TWV0YWRhdGEoa2V5LCB0YXJnZXQpO1xufVxuZXhwb3J0cy5nZXRXaWxkY2FyZE1ldGFkYXRhID0gZ2V0V2lsZGNhcmRNZXRhZGF0YTtcbmZ1bmN0aW9uIGdldERlc2lnblR5cGUodGFyZ2V0LCBrZXkpIHtcbiAgICByZXR1cm4gUmVmbGVjdC5nZXRNZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIHRhcmdldCwga2V5KTtcbn1cbmV4cG9ydHMuZ2V0RGVzaWduVHlwZSA9IGdldERlc2lnblR5cGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV1YwWVdSaGRHRXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMM1YwYVd4ekwyMWxkR0ZrWVhSaExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCT0VsQkxGTkJRV2RDTEdOQlFXTXNRMEZCSzBNc1RVRkJVeXhGUVVGRkxFZEJRVTBzUlVGQlJTeEhRVUZyUWp0SlFVTTVSeXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03UVVGRE4wTXNRMEZCUXp0QlFVWkVMSGREUVVWRE8wRkJWMFFzVTBGQlowSXNWMEZCVnl4RFFVRXJReXhOUVVGVExFVkJRVVVzUjBGQlRUdEpRVU4yUml4UFFVRlBMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zUjBGQlJ5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMEZCUXpWRExFTkJRVU03UVVGR1JDeHJRMEZGUXp0QlFWVkVMRk5CUVdkQ0xITkNRVUZ6UWl4RFFVRkRMRTFCUVdNc1JVRkJSU3hIUVVGakxFVkJRVVVzUzBGQlZUdEpRVU0zUlN4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUlVGQlJTeExRVUZMTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkRMME1zUTBGQlF6dEJRVVpFTEhkRVFVVkRPMEZCVlVRc1UwRkJaMElzYlVKQlFXMUNMRU5CUVVNc1RVRkJZeXhGUVVGRkxFZEJRV003U1VGRE9VUXNUMEZCVHl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFZEJRVWNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0QlFVTTFReXhEUVVGRE8wRkJSa1FzYTBSQlJVTTdRVUZWUkN4VFFVRm5RaXhoUVVGaExFTkJRVU1zVFVGQll5eEZRVUZGTEVkQlFWYzdTVUZEY2tRc1QwRkJUeXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEdGQlFXRXNSVUZCUlN4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRE0wUXNRMEZCUXp0QlFVWkVMSE5EUVVWREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5jb25zdCBlbnZpcm9ubWVudF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZW52aXJvbm1lbnRcIik7XG5jb25zdCBvbl9jaGFuZ2VfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJvbi1jaGFuZ2VcIikpO1xudmFyIGxvZGFzaF8xID0gcmVxdWlyZShcImxvZGFzaFwiKTtcbmV4cG9ydHMubWVyZ2UgPSBsb2Rhc2hfMS5tZXJnZTtcbmV4cG9ydHMub21pdCA9IGxvZGFzaF8xLm9taXQ7XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBsb2Rhc2hfMS5pc0Z1bmN0aW9uO1xuZXhwb3J0cy5pc09iamVjdCA9IGxvZGFzaF8xLmlzT2JqZWN0O1xuZXhwb3J0cy5waWNrQnkgPSBsb2Rhc2hfMS5waWNrQnk7XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gbG9kYXNoXzEuaXNVbmRlZmluZWQ7XG5leHBvcnRzLmlzRXF1YWwgPSBsb2Rhc2hfMS5pc0VxdWFsO1xuZXhwb3J0cy5pc1N0cmluZyA9IGxvZGFzaF8xLmlzU3RyaW5nO1xuZXhwb3J0cy5pc051bWJlciA9IGxvZGFzaF8xLmlzTnVtYmVyO1xuZXhwb3J0cy5pc0FycmF5ID0gbG9kYXNoXzEuaXNBcnJheTtcbmV4cG9ydHMuZGlmZmVyZW5jZSA9IGxvZGFzaF8xLmRpZmZlcmVuY2U7XG5leHBvcnRzLmRlYm91bmNlID0gbG9kYXNoXzEuZGVib3VuY2U7XG5mdW5jdGlvbiB1Y0ZpcnN0KHN0cikge1xuICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5leHBvcnRzLnVjRmlyc3QgPSB1Y0ZpcnN0O1xuZnVuY3Rpb24gY2FtZWxDYXNlMmtlYmFiQ2FzZShzdHIpIHtcbiAgICBzdHIgPSBzdHIuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW2EtejAtOV18KD89W0EtWl0pKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbn1cbmV4cG9ydHMuY2FtZWxDYXNlMmtlYmFiQ2FzZSA9IGNhbWVsQ2FzZTJrZWJhYkNhc2U7XG5mdW5jdGlvbiBwYXNjYWxDYXNlMmtlYmFiQ2FzZShzdHIpIHtcbiAgICBzdHIgPSB1Y0ZpcnN0KHN0cik7XG4gICAgcmV0dXJuIGNhbWVsQ2FzZTJrZWJhYkNhc2Uoc3RyKTtcbn1cbmV4cG9ydHMucGFzY2FsQ2FzZTJrZWJhYkNhc2UgPSBwYXNjYWxDYXNlMmtlYmFiQ2FzZTtcbmZ1bmN0aW9uIHJlbW92ZUVsZW1lbnRGcm9tQXJyYXkoYXJyYXksIGVsZW1lbnQpIHtcbiAgICBjb25zdCBpbmRleCA9IGFycmF5LmluZGV4T2YoZWxlbWVudCk7XG4gICAgaWYgKGluZGV4ID49IDApXG4gICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG59XG5leHBvcnRzLnJlbW92ZUVsZW1lbnRGcm9tQXJyYXkgPSByZW1vdmVFbGVtZW50RnJvbUFycmF5O1xuZnVuY3Rpb24gZ2V0UHJvdG90eXBlTmFtZXNSZWN1cnNpdmUob2JqZWN0LCBwcm90b3R5cGVzID0gW10pIHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAocHJvdG90eXBlKSB7XG4gICAgICAgIHByb3RvdHlwZXMucHVzaChwcm90b3R5cGUuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICAgIGdldFByb3RvdHlwZU5hbWVzUmVjdXJzaXZlKHByb3RvdHlwZSwgcHJvdG90eXBlcyk7XG4gICAgfVxuICAgIHJldHVybiBwcm90b3R5cGVzO1xufVxuZXhwb3J0cy5nZXRQcm90b3R5cGVOYW1lc1JlY3Vyc2l2ZSA9IGdldFByb3RvdHlwZU5hbWVzUmVjdXJzaXZlO1xuZnVuY3Rpb24gaW5jbHVkZXNNZW1iZXJPZkxpc3Qoc2VhcmNoLCBsaXN0LCBleHRlbnNpb24gPSAnJykge1xuICAgIGZvciAoY29uc3QgbWVtYmVyIG9mIGxpc3QpIHtcbiAgICAgICAgaWYgKHNlYXJjaC5pbmNsdWRlcyhgJHttZW1iZXJ9JHtleHRlbnNpb259YCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaW5jbHVkZXNNZW1iZXJPZkxpc3QgPSBpbmNsdWRlc01lbWJlck9mTGlzdDtcbmZ1bmN0aW9uIGNvbnN0cnVjdFR5cGVPZkhUTUxBdHRyaWJ1dGUob2JqZWN0LCBrZXkpIHtcbiAgICBpZiAoIWVudmlyb25tZW50XzEuaXNCcm93c2VyKCkpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCB0eXBlID0gbWV0YWRhdGFfMS5nZXREZXNpZ25UeXBlKG9iamVjdCwga2V5KTtcbiAgICBjb25zdCBhdHRyVmFsdWUgPSBvYmplY3QuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgbGV0IHZhbHVlVG9TZXQgPSBhdHRyVmFsdWU7XG4gICAgaWYgKGF0dHJWYWx1ZSAmJiB0eXBlICYmIHR5cGUubmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChbXCJOdW1iZXJcIiwgXCJCb29sZWFuXCIsIFwiT2JqZWN0XCIsIFwiQXJyYXlcIl0uaW5jbHVkZXModHlwZS5uYW1lKSkge1xuICAgICAgICAgICAgdmFsdWVUb1NldCA9IEpTT04ucGFyc2UoYXR0clZhbHVlLnJlcGxhY2UoLycvZywgJ1wiJykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlLm5hbWUgPT09IFwiQmFzZUNvbnN0cnVjdG9yXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IEpTT04ucGFyc2UoYXR0clZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IG9iai5jbGFzc05hbWU7XG4gICAgICAgICAgICBpZiAoIWNsYXNzTmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDbGFzc05hbWUgaXMgbWlzc2luZyBpbiBjb21wb25lbnQgYXR0cmlidXRlIHZhbHVlXCIpO1xuICAgICAgICAgICAgZGVsZXRlIG9iai5jbGFzc05hbWU7XG4gICAgICAgICAgICB2YWx1ZVRvU2V0ID0gbmV3ICh0eXBlLm5hbWUpKG9iaik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbHVlVG9TZXQgJiYgdHlwZSAmJiB2YWx1ZVRvU2V0LmNvbnN0cnVjdG9yLm5hbWUgIT09IHR5cGUubmFtZSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXR0cmlidXRlIHR5cGUgZXF1YWxzIG5vdCBkZWZpbmVkIHR5cGVcIik7XG4gICAgcmV0dXJuIHZhbHVlVG9TZXQ7XG59XG5leHBvcnRzLmNvbnN0cnVjdFR5cGVPZkhUTUxBdHRyaWJ1dGUgPSBjb25zdHJ1Y3RUeXBlT2ZIVE1MQXR0cmlidXRlO1xuZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlICE9PSBPYmplY3QodmFsdWUpKTtcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcbmZ1bmN0aW9uIGlzUHJveHkodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChvbl9jaGFuZ2VfMS5kZWZhdWx0LnRhcmdldCh2YWx1ZSkgPT09IHZhbHVlKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnRzLmlzUHJveHkgPSBpc1Byb3h5O1xuZnVuY3Rpb24gZ2V0UHJveHlUYXJnZXQodmFsdWUpIHtcbiAgICBpZiAoaXNQcm94eSh2YWx1ZSkpXG4gICAgICAgIHJldHVybiBvbl9jaGFuZ2VfMS5kZWZhdWx0LnRhcmdldCh2YWx1ZSk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZXhwb3J0cy5nZXRQcm94eVRhcmdldCA9IGdldFByb3h5VGFyZ2V0O1xuZnVuY3Rpb24gdG9VUklQYXRoUGFydCh2YWx1ZSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFwvKy9nLCBcIi9cIik7XG4gICAgaWYgKCF2YWx1ZS5zdGFydHNXaXRoKFwiL1wiKSlcbiAgICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YDtcbiAgICBpZiAodmFsdWUuZW5kc1dpdGgoXCIvXCIpICYmIHZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCAtMSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmV4cG9ydHMudG9VUklQYXRoUGFydCA9IHRvVVJJUGF0aFBhcnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkWFJwYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmRYUnBiSE12ZFhScGJDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTeHJSRUZCYjBRN1FVRkRjRVFzZDBSQlFXMUVPMEZCUTI1RUxHdEZRVUZwUXp0QlFVVnFReXhwUTBGaFowSTdRVUZhV2l4NVFrRkJRU3hMUVVGTExFTkJRVUU3UVVGRFRDeDNRa0ZCUVN4SlFVRkpMRU5CUVVFN1FVRkRTaXc0UWtGQlFTeFZRVUZWTEVOQlFVRTdRVUZEVml3MFFrRkJRU3hSUVVGUkxFTkJRVUU3UVVGRFVpd3dRa0ZCUVN4TlFVRk5MRU5CUVVFN1FVRkRUaXdyUWtGQlFTeFhRVUZYTEVOQlFVRTdRVUZEV0N3eVFrRkJRU3hQUVVGUExFTkJRVUU3UVVGRFVDdzBRa0ZCUVN4UlFVRlJMRU5CUVVFN1FVRkRVaXcwUWtGQlFTeFJRVUZSTEVOQlFVRTdRVUZEVWl3eVFrRkJRU3hQUVVGUExFTkJRVUU3UVVGRFVDdzRRa0ZCUVN4VlFVRlZMRU5CUVVFN1FVRkRWaXcwUWtGQlFTeFJRVUZSTEVOQlFVRTdRVUZWV2l4VFFVRm5RaXhQUVVGUExFTkJRVU1zUjBGQlZ6dEpRVU12UWl4UFFVRlBMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTjBSQ3hEUVVGRE8wRkJSa1FzTUVKQlJVTTdRVUZUUkN4VFFVRm5RaXh0UWtGQmJVSXNRMEZCUXl4SFFVRlhPMGxCUXpORExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGFrUXNUMEZCVHl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExEaENRVUU0UWl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzBGQlF6bEZMRU5CUVVNN1FVRklSQ3hyUkVGSFF6dEJRVk5FTEZOQlFXZENMRzlDUVVGdlFpeERRVUZETEVkQlFWYzdTVUZETlVNc1IwRkJSeXhIUVVGSExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTnVRaXhQUVVGUExHMUNRVUZ0UWl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRM0JETEVOQlFVTTdRVUZJUkN4dlJFRkhRenRCUVZORUxGTkJRV2RDTEhOQ1FVRnpRaXhEUVVGRExFdEJRVmtzUlVGQlJTeFBRVUZaTzBsQlF6ZEVMRTFCUVUwc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkRja01zU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUXp0UlFVRkZMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpORExFTkJRVU03UVVGSVJDeDNSRUZIUXp0QlFWTkVMRk5CUVdkQ0xEQkNRVUV3UWl4RFFVRkRMRTFCUVZjc1JVRkJSU3hoUVVGMVFpeEZRVUZGTzBsQlF6ZEZMRTFCUVUwc1UwRkJVeXhIUVVGSExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRhRVFzU1VGQlNTeFRRVUZUTEVWQlFVVTdVVUZEV0N4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkROVU1zTUVKQlFUQkNMRU5CUVVNc1UwRkJVeXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzB0QlEzSkVPMGxCUTBRc1QwRkJUeXhWUVVGVkxFTkJRVU03UVVGRGRFSXNRMEZCUXp0QlFWQkVMR2RGUVU5RE8wRkJWMFFzVTBGQlowSXNiMEpCUVc5Q0xFTkJRVU1zVFVGQmVVSXNSVUZCUlN4SlFVRmpMRVZCUVVVc1dVRkJiMElzUlVGQlJUdEpRVU5zUnl4TFFVRkxMRTFCUVUwc1RVRkJUU3hKUVVGSkxFbEJRVWtzUlVGQlJUdFJRVU4yUWl4SlFVRkpMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVkQlFVY3NVMEZCVXl4RlFVRkZMRU5CUVVNc1JVRkJSVHRaUVVNeFF5eFBRVUZQTEVsQlFVa3NRMEZCUXp0VFFVTm1PMHRCUTBvN1NVRkRSQ3hQUVVGUExFdEJRVXNzUTBGQlF6dEJRVU5xUWl4RFFVRkRPMEZCVUVRc2IwUkJUME03UVVGWFJDeFRRVUZuUWl3MFFrRkJORUlzUTBGQlF5eE5RVUZ0UWl4RlFVRkZMRWRCUVZjN1NVRkRla1VzU1VGQlNTeERRVUZETEhWQ1FVRlRMRVZCUVVVN1VVRkJSU3hQUVVGUE8wbEJRM3BDTEUxQlFVMHNTVUZCU1N4SFFVRkhMSGRDUVVGaExFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUTNoRExFMUJRVTBzVTBGQlV5eEhRVUZITEUxQlFVMHNRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGSk0wTXNTVUZCU1N4VlFVRlZMRWRCUVZFc1UwRkJVeXhEUVVGRE8wbEJRMmhETEVsQlFVa3NVMEZCVXl4SlFVRkpMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeExRVUZMTEZOQlFWTXNSVUZCUlR0UlFVTTVReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZOQlFWTXNSVUZCUlN4UlFVRlJMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVNNVJDeFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRM3BFTzFGQlEwUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hMUVVGTExHbENRVUZwUWl4RlFVRkZPMWxCUTJwRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03V1VGRGJFTXNUVUZCVFN4VFFVRlRMRWRCUVVjc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF6dFpRVU5vUXl4SlFVRkpMRU5CUVVNc1UwRkJVenRuUWtGQlJTeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRzFFUVVGdFJDeERRVUZETEVOQlFVTTdXVUZEY2tZc1QwRkJUeXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETzFsQlEzSkNMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRM0pETzB0QlEwbzdTVUZEUkN4SlFVRkpMRlZCUVZVc1NVRkJTU3hKUVVGSkxFbEJRVWtzVlVGQlZTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRXRCUVVzc1NVRkJTU3hEUVVGRExFbEJRVWs3VVVGQlJTeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSGREUVVGM1F5eERRVUZETEVOQlFVTTdTVUZETDBnc1QwRkJUeXhWUVVGVkxFTkJRVU03UVVGRGRFSXNRMEZCUXp0QlFYUkNSQ3h2UlVGelFrTTdRVUZUUkN4VFFVRm5RaXhYUVVGWExFTkJRVU1zUzBGQlZUdEpRVU5zUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhMUVVGTExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTNKRExFTkJRVU03UVVGR1JDeHJRMEZGUXp0QlFWTkVMRk5CUVdkQ0xFOUJRVThzUTBGQlF5eExRVUZWTzBsQlF6bENMRWxCUVVrc1MwRkJTeXhMUVVGTExGTkJRVk1zU1VGQlNTeExRVUZMTEV0QlFVc3NTVUZCU1R0UlFVRkZMRTlCUVU4c1MwRkJTeXhEUVVGRE8wbEJRM2hFTEVsQlFVa3NiVUpCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NTMEZCU3p0UlFVRkZMRTlCUVU4c1MwRkJTeXhEUVVGRE8wbEJRMjVFTEU5QlFVOHNTVUZCU1N4RFFVRkRPMEZCUTJoQ0xFTkJRVU03UVVGS1JDd3dRa0ZKUXp0QlFWVkVMRk5CUVdkQ0xHTkJRV01zUTBGQlF5eExRVUZWTzBsQlEzSkRMRWxCUVVrc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF6dFJRVUZGTEU5QlFVOHNiVUpCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYkVRc1QwRkJUeXhMUVVGTExFTkJRVU03UVVGRGFrSXNRMEZCUXp0QlFVaEVMSGREUVVkRE8wRkJWVVFzVTBGQlowSXNZVUZCWVN4RFFVRkRMRXRCUVdFN1NVRkRka01zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEyNURMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXp0UlFVRkZMRXRCUVVzc1IwRkJSeXhKUVVGSkxFdEJRVXNzUlVGQlJTeERRVUZETzBsQlEyaEVMRWxCUVVrc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJUdFJRVU42UXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVNNVFqdEpRVU5FTEU5QlFVOHNTMEZCU3l4RFFVRkRPMEZCUTJwQ0xFTkJRVU03UVVGUVJDeHpRMEZQUXlKOSIsIlwidXNlIHN0cmljdFwiO1xud2luZG93LnZpcnR1YWxSb3V0ZXMgPSBbXCJDb25maWdcIiwgXCJHYW1lTG9iYnlcIiwgXCJIb21lXCJdO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZG1seWRIVmhiRVZ1ZEhKNVVHOXBiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTkyWVhJdmRHMXdMM1pwY25SMVlXeEZiblJ5ZVZCdmFXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlRTeE5RVUZQTEVOQlFVTXNZVUZCWVN4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRExGZEJRVmNzUlVGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXlKOSJdLCJzb3VyY2VSb290IjoiIn0=