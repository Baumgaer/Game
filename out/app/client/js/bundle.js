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
/******/ 	deferredModules.push([0,"vendor","lib","templates"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL0dhbWVXaW5kb3cudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvVGVzdENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9jbGllbnQvdHMvY29tcG9uZW50cy9WaWV3TGluay50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9jbGllbnQvdHMvY29tcG9uZW50cy9WaWV3Um91dGVyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL21vZGVscyBzeW5jIF5cXC5cXC8uKlxcLnRzJCIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9jbGllbnQvdHMvbW9kZWxzL1Rlc3QudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL21vZGVscy9UZXN0MS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMgc3luYyBeXFwuXFwvLipcXC50cyQiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9Db25maWcudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9HYW1lTG9iYnkudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9Ib21lLnRzIiwid2VicGFjazovLy8uLi9zb3VyY2UvYXBwL2NsaWVudC90cy91dGlscy91dGlsLnRzIiwid2VicGFjazovLy8uLi9zb3VyY2UvYXBwL21vZGVscy9CRE9UZXN0LnRzIiwid2VicGFjazovLy8uLi9zb3VyY2UvYXBwL21vZGVscy9CRE9UZXN0MS50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9tb2RlbHMvQ2VsbC50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9tb2RlbHMvQ2h1bmsudHMiLCJ3ZWJwYWNrOi8vLy4uL3NvdXJjZS9hcHAvcm91dGVzL0JET0NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC9yb3V0ZXMvQkRPR2FtZUxvYmJ5LnRzIiwid2VicGFjazovLy8uLi9zb3VyY2UvYXBwL3JvdXRlcy9CRE9Ib21lLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvdXRpbHMgc3luYyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC91dGlscy9kZWNvcmF0b3JzLnRzIiwid2VicGFjazovLy8uLi9zb3VyY2UvYXBwL3V0aWxzL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uLi9zb3VyY2UvYXBwL3V0aWxzL2ZyYW1ld29yay50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC91dGlscy9tZXRhZGF0YS50cyIsIndlYnBhY2s6Ly8vLi4vc291cmNlL2FwcC91dGlscy91dGlsLnRzIiwid2VicGFjazovLy8uLi92YXIvdG1wL3ZpcnR1YWxFbnRyeVBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7OztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7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QyxPQUFOLENBQWMsTUFBZCxFQUFzQixHQUF0QixDQUFSO0FBQ0EsTUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFOLENBQWlCLEdBQWpCLENBQUwsRUFBNEIsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFqQjs7QUFDNUIsTUFBSSxLQUFLLENBQUMsUUFBTixDQUFlLEdBQWYsS0FBdUIsS0FBSyxDQUFDLE1BQU4sR0FBZSxDQUExQyxFQUE2QztBQUN6QyxTQUFLLEdBQUcsS0FBSyxDQUFDLEtBQU4sQ0FBWSxDQUFaLEVBQWUsQ0FBQyxDQUFoQixDQUFSO0FBQ0g7O0FBQ0QsU0FBTyxLQUFQO0FBQ0g7O0FBUEQsc0M7Ozs7Ozs7Ozs7QUNsTE0sTUFBTyxDQUFDLGFBQVIsR0FBd0IsQ0FBQyxRQUFELEVBQVUsV0FBVixFQUFzQixNQUF0QixDQUF4QixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JcIixcImxpYlwiLFwidGVtcGxhdGVzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYWYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXItZHouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXItbHlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItbWEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYm1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vYnMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vZGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZGUtYXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZW4tU0dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1TRy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hLCBfYjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBCYXNlQ29tcG9uZW50XzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQmFzZUNvbXBvbmVudFwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBkZWNvcmF0b3JzXzIgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgQkFCWUxPTiA9IHRzbGliXzEuX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJiYWJ5bG9uanNcIikpO1xubGV0IEdhbWVXaW5kb3cgPSBjbGFzcyBHYW1lV2luZG93IGV4dGVuZHMgQmFzZUNvbXBvbmVudF8xLkJhc2VDb21wb25lbnRGYWN0b3J5KEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZW5naW5lID0gbmV3IEJBQllMT04uRW5naW5lKHRoaXMsIHRydWUsIHtcbiAgICAgICAgICAgIGF1ZGlvRW5naW5lOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNjZW5lID0gdGhpcy5jcmVhdGVTY2VuZSgpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBgMTAwJWA7XG4gICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSBgMTAwJWA7XG4gICAgICAgIHRoaXMuZW5naW5lLnJ1blJlbmRlckxvb3AoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW5naW5lLnJlc2l6ZSgpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjcmVhdGVTY2VuZSgpIHtcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBuZXcgQkFCWUxPTi5TY2VuZSh0aGlzLmVuZ2luZSk7XG4gICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBCQUJZTE9OLkZyZWVDYW1lcmEoJ2NhbWVyYScsIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgNSwgLTEwKSwgc2NlbmUpO1xuICAgICAgICBjYW1lcmEuc2V0VGFyZ2V0KEJBQllMT04uVmVjdG9yMy5aZXJvKCkpO1xuICAgICAgICBjYW1lcmEuYXR0YWNoQ29udHJvbCh0aGlzLCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IGxpZ2h0ID0gbmV3IEJBQllMT04uSGVtaXNwaGVyaWNMaWdodCgnbGlnaHQxJywgbmV3IEJBQllMT04uVmVjdG9yMygwLCAxLCAwKSwgc2NlbmUpO1xuICAgICAgICBsaWdodC5zaGFkb3dFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgc3BoZXJlID0gQkFCWUxPTi5NZXNoQnVpbGRlci5DcmVhdGVTcGhlcmUoJ3NwaGVyZScsIHsgc2VnbWVudHM6IDE2LCBkaWFtZXRlcjogMiB9LCBzY2VuZSk7XG4gICAgICAgIHNwaGVyZS5wb3NpdGlvbi55ID0gMTtcbiAgICAgICAgQkFCWUxPTi5NZXNoQnVpbGRlci5DcmVhdGVHcm91bmQoJ2dyb3VuZDEnLCB7IGhlaWdodDogNiwgd2lkdGg6IDYsIHN1YmRpdmlzaW9uczogMiB9LCBzY2VuZSk7XG4gICAgICAgIHJldHVybiBzY2VuZTtcbiAgICB9XG4gICAgY3JlYXRlVGVycmFpbigpIHsgfVxufTtcbkdhbWVXaW5kb3cuZXh0ZW5kcyA9IFwiY2FudmFzXCI7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMi5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIHR5cGVvZiAoX2EgPSB0eXBlb2YgQkFCWUxPTiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBCQUJZTE9OLkVuZ2luZSkgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0KVxuXSwgR2FtZVdpbmRvdy5wcm90b3R5cGUsIFwiZW5naW5lXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMi5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIHR5cGVvZiAoX2IgPSB0eXBlb2YgQkFCWUxPTiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBCQUJZTE9OLlNjZW5lKSA9PT0gXCJmdW5jdGlvblwiID8gX2IgOiBPYmplY3QpXG5dLCBHYW1lV2luZG93LnByb3RvdHlwZSwgXCJzY2VuZVwiLCB2b2lkIDApO1xuR2FtZVdpbmRvdyA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpXG5dLCBHYW1lV2luZG93KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEdhbWVXaW5kb3c7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSMkZ0WlZkcGJtUnZkeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDJOdmJYQnZibVZ1ZEhNdlIyRnRaVmRwYm1SdmR5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRXNOa1JCUVdsRk8wRkJRMnBGTEhORVFVRjNSRHRCUVVONFJDeHpSRUZCYVVRN1FVRkRha1FzTWtSQlFYRkRPMEZCVlhKRExFbEJRWEZDTEZWQlFWVXNSMEZCTDBJc1RVRkJjVUlzVlVGQlZ5eFRRVUZSTEc5RFFVRnZRaXhEUVVGRExHbENRVUZwUWl4RFFVRkRPMGxCUVM5Rk96dFJRV3RDTUVJc1YwRkJUU3hIUVVGdFFpeEpRVUZKTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJUdFpRVU14UlN4WFFVRlhMRVZCUVVVc1NVRkJTVHRUUVVOd1FpeERRVUZETEVOQlFVTTdVVUZUYlVJc1ZVRkJTeXhIUVVGclFpeEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1NVRjVSSEJGTEVOQlFVTTdTVUZzUkZVc2FVSkJRV2xDTzFGQlEzQkNMRXRCUVVzc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4RFFVRkRPMUZCUXpGQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRSUVVNelFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRE1VSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhoUVVGaExFTkJRVU1zUjBGQlJ5eEZRVUZGTzFsQlF6TkNMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTTdVVUZEZUVJc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFNDeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8xRkJRM0pDTEUxQlFVMHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eFJRVUZSTEVWQlFVVXNSMEZCUnl4RlFVRkZPMWxCUTI1RExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJRenRaUVVNdlFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRGNrTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRVQ3hEUVVGRE8wbEJVMU1zVjBGQlZ6dFJRVVZxUWl4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJSVGRETEUxQlFVMHNUVUZCVFN4SFFVRkhMRWxCUVVrc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF5eFJRVUZSTEVWQlFVVXNTVUZCU1N4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVVYyUml4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVWNlF5eE5RVUZOTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVVZzUXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFOUJRVThzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhSUVVGUkxFVkJRVVVzU1VGQlNTeFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRNVVlzUzBGQlN5eERRVUZETEdGQlFXRXNSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkZNMElzVFVGQlRTeE5RVUZOTEVkQlFVY3NUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVXNVVUZCVVN4RlFVRkZMRVZCUVVVc1JVRkJSU3hSUVVGUkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkZhRWNzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSWFJDTEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExGTkJRVk1zUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUlVGQlJTeFpRVUZaTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRk4wWXNUMEZCVHl4TFFVRkxMRU5CUVVNN1NVRkRha0lzUTBGQlF6dEpRVkZUTEdGQlFXRXNTMEZCU3l4RFFVRkRPME5CUTJoRExFTkJRVUU3UVVFM1JUQkNMR3RDUVVGUExFZEJRVmNzVVVGQlVTeERRVUZETzBGQlUzUkRPMGxCUVZnc2NVSkJRVkVzUlVGQlJUc3dSRUZCYlVJc1QwRkJUeXh2UWtGQlVDeFBRVUZQTEVOQlFVTXNUVUZCVFRzd1EwRkZla003UVVGVFV6dEpRVUZZTEhGQ1FVRlJMRVZCUVVVN01FUkJRV3RDTEU5QlFVOHNiMEpCUVZBc1QwRkJUeXhEUVVGRExFdEJRVXM3ZVVOQlFYTkNPMEZCTjBJdlF5eFZRVUZWTzBsQlJEbENMRFJDUVVGbExFVkJRVVU3UjBGRFJ5eFZRVUZWTEVOQmMwWTVRanRyUWtGMFJtOUNMRlZCUVZVaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBCYXNlQ29tcG9uZW50XzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQmFzZUNvbXBvbmVudFwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBkZWNvcmF0b3JzXzIgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgdGVzdENvbXBvbmVudF9uamtfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ+c3RhdGljL3ZpZXdzL3Rlc3RDb21wb25lbnQubmprXCIpKTtcbmxldCBUZXN0Q29tcG9uZW50ID0gY2xhc3MgVGVzdENvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnRfMS5CYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnRlbXBsYXRlU3RyaW5nID0gdGVzdENvbXBvbmVudF9uamtfMS5kZWZhdWx0O1xuICAgICAgICB0aGlzLnRlc3QgPSBcImxhbGFsYVwiO1xuICAgIH1cbn07XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMi5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbl0sIFRlc3RDb21wb25lbnQucHJvdG90eXBlLCBcInRlbXBsYXRlU3RyaW5nXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMi5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIFRlc3RDb21wb25lbnQucHJvdG90eXBlLCBcInRlc3RcIiwgdm9pZCAwKTtcblRlc3RDb21wb25lbnQgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoKVxuXSwgVGVzdENvbXBvbmVudCk7XG5leHBvcnRzLmRlZmF1bHQgPSBUZXN0Q29tcG9uZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVkdWemRFTnZiWEJ2Ym1WdWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMMk52YlhCdmJtVnVkSE12VkdWemRFTnZiWEJ2Ym1WdWRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTdzJSRUZCYVVVN1FVRkRha1VzYzBSQlFYZEVPMEZCUTNoRUxITkVRVUZwUkR0QlFVTnFSQ3huUjBGQmRVUTdRVUZWZGtRc1NVRkJjVUlzWVVGQllTeEhRVUZzUXl4TlFVRnhRaXhoUVVGakxGTkJRVkVzYjBOQlFXOUNMRU5CUVVNc1YwRkJWeXhEUVVGRE8wbEJRVFZGT3p0UlFWRXdRaXh0UWtGQll5eEhRVUZITERKQ1FVRlJMRU5CUVVNN1VVRlRNVUlzVTBGQlNTeEhRVUZYTEZGQlFWRXNRMEZCUXp0SlFVVnNSQ3hEUVVGRE8wTkJRVUVzUTBGQlFUdEJRVmhsTzBsQlFWZ3NjVUpCUVZFc1JVRkJSVHM3Y1VSQlFYRkRPMEZCVTNCRE8wbEJRVmdzY1VKQlFWRXNSVUZCUlRzN01rTkJRVzFETzBGQmFrSTNRaXhoUVVGaE8wbEJSR3BETERSQ1FVRmxMRVZCUVVVN1IwRkRSeXhoUVVGaExFTkJiVUpxUXp0clFrRnVRbTlDTEdGQlFXRWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2EsIF9iO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJhc2VDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9CYXNlQ29tcG9uZW50XCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IFRlc3QxXzEgPSByZXF1aXJlKFwifmNsaWVudC9tb2RlbHMvVGVzdDFcIik7XG5sZXQgVmlld0xpbmsgPSBjbGFzcyBWaWV3TGluayBleHRlbmRzIEJhc2VDb21wb25lbnRfMS5CYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgIGNvbnN0cnVjdG9yKF9wYXJhbXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBUZXN0MV8xLlRlc3QxKHsgdGl0bGU6IFN0cmluZyhEYXRlLm5vdygpKSB9KTtcbiAgICAgICAgdGhpcy50ZXN0ID0gdGhpcy5tb2RlbC5iaW5kKFwidGl0bGVcIik7XG4gICAgICAgIHRoaXMudGVzdGVyID0gdGhpcy5tb2RlbC5iaW5kKFwidGVzdGVyXCIpO1xuICAgICAgICB0aGlzLnRlc3RlbiA9IHt9O1xuICAgIH1cbiAgICBjb25zdHJ1Y3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3RlZENhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25MaW5rQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uVGVzdFR5cGVDaGVjayh2YWx1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNraW5nIHR5cGUgb2YgdGVzdCB3aXRoIHZhbHVlXCIsIHZhbHVlKTtcbiAgICB9XG4gICAgb25UZXN0VHlwZUNoZWNrU3VjY2VzcygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUeXBlY2hlY2sgb2YgdGVzdCBzdWNjZXNzZnVsXCIpO1xuICAgIH1cbiAgICBvblRlc3RUeXBlQ2hlY2tGYWlsKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHlwZWNoZWNrIG9mIHRlc3QgZmFpbGVkXCIsIGVycm9yKTtcbiAgICB9XG4gICAgb25UZXN0Q2hhbmdlKGNoYW5nZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0IGNoYW5nZWRcIiwgY2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuICAgIG9uVGVzdGVySW5pdChpbml0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIGluaXRcIiwgaW5pdCwgdGhpcyk7XG4gICAgfVxuICAgIG9uVGVzdGVyQ2hhbmdlKGNoYW5nZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgY2hhbmdlZFwiLCBjaGFuZ2VkLCB0aGlzKTtcbiAgICB9XG4gICAgb25UZXN0ZXJBZGQoYWRkZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgYWRkZWRcIiwgYWRkZWQsIHRoaXMpO1xuICAgIH1cbiAgICBvblRlc3RlclJlbW92ZShyZW1vdmVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIHJlbW92ZWRcIiwgcmVtb3ZlZCwgdGhpcyk7XG4gICAgfVxuICAgIG9uTGlua0NsaWNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvdy5yb3V0ZXIubmF2aWdhdGUodGhpcy5ocmVmLCB0cnVlKTtcbiAgICB9XG59O1xuVmlld0xpbmsuZXh0ZW5kcyA9ICdhJztcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuXSwgVmlld0xpbmsucHJvdG90eXBlLCBcIm1vZGVsXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBWaWV3TGluay5wcm90b3R5cGUsIFwidGVzdFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEud2F0Y2hlZCgpLCBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQXJyYXkpXG5dLCBWaWV3TGluay5wcm90b3R5cGUsIFwidGVzdGVyXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIHR5cGVvZiAoX2EgPSB0eXBlb2YgT2JqZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIE9iamVjdCkgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0KVxuXSwgVmlld0xpbmsucHJvdG90eXBlLCBcInRlc3RlblwiLCB2b2lkIDApO1xuVmlld0xpbmsgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYiA9IHR5cGVvZiBDb25zdFBhcmFtcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBDb25zdFBhcmFtcykgPT09IFwiZnVuY3Rpb25cIiA/IF9iIDogT2JqZWN0XSlcbl0sIFZpZXdMaW5rKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFZpZXdMaW5rO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVm1sbGQweHBibXN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJOc2FXVnVkQzkwY3k5amIyMXdiMjVsYm5SekwxWnBaWGRNYVc1ckxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFTdzJSRUZCYVVVN1FVRkRha1VzYzBSQlFYTkdPMEZCUTNSR0xHZEVRVUUyUXp0QlFWVTNReXhKUVVGeFFpeFJRVUZSTEVkQlFUZENMRTFCUVhGQ0xGRkJRVk1zVTBGQlVTeHZRMEZCYjBJc1EwRkJReXhwUWtGQmFVSXNRMEZCUXp0SlFYbERla1VzV1VGQldTeFBRVUVyUWp0UlFVTjJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFJRVE5DVHl4VlFVRkxMRWRCUVVjc1NVRkJTU3hoUVVGTExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFWRm9SQ3hUUVVGSkxFZEJRVmNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGUk4wSXNWMEZCVFN4SFFVRmhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCVVhwRUxGZEJRVTBzUjBGQlZ5eEZRVUZGTEVOQlFVTTdTVUZKZGtNc1EwRkJRenRKUVU5TkxHMUNRVUZ0UWp0UlFVTjBRaXhMUVVGTExFTkJRVU1zYlVKQlFXMUNMRVZCUVVVc1EwRkJRenRSUVVNMVFpeEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYUVVc1EwRkJRenRKUVZOVExHVkJRV1VzUTBGQlF5eExRVUZ0UWp0UlFVTjZReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEd0RFFVRnJReXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF6TkVMRU5CUVVNN1NVRlJVeXh6UWtGQmMwSTdVVUZETlVJc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5dzRRa0ZCT0VJc1EwRkJReXhEUVVGRE8wbEJRMmhFTEVOQlFVTTdTVUZSVXl4dFFrRkJiVUlzUTBGQlF5eExRVUZaTzFGQlEzUkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zTUVKQlFUQkNMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJrUXNRMEZCUXp0SlFWTlRMRmxCUVZrc1EwRkJReXhQUVVGMVFqdFJRVU14UXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExHTkJRV01zUlVGQlJTeFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRMME1zUTBGQlF6dEpRVk5UTEZsQlFWa3NRMEZCUXl4SlFVRnZRanRSUVVOMlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETTBNc1EwRkJRenRKUVZOVExHTkJRV01zUTBGQlF5eFBRVUYxUWp0UlFVTTFReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEdkQ1FVRm5RaXhGUVVGRkxFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTnFSQ3hEUVVGRE8wbEJVMU1zVjBGQlZ5eERRVUZETEV0QlFYRkNPMUZCUTNaRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNZMEZCWXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU0zUXl4RFFVRkRPMGxCVTFNc1kwRkJZeXhEUVVGRExFOUJRWFZDTzFGQlF6VkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEycEVMRU5CUVVNN1NVRlRUeXhYUVVGWExFTkJRVU1zUzBGQldUdFJRVU0xUWl4TFFVRkxMRU5CUVVNc1kwRkJZeXhGUVVGRkxFTkJRVU03VVVGRGRrSXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVNMVF5eERRVUZETzBOQlEwb3NRMEZCUVR0QlFXaEtNRUlzWjBKQlFVOHNSMEZCVnl4SFFVRkhMRU5CUVVNN1FVRlBha003U1VGQldDeHhRa0ZCVVN4RlFVRkZPenQxUTBGQmVVUTdRVUZSZGtRN1NVRkJXaXh6UWtGQlV5eEZRVUZGT3p0elEwRkJaMFE3UVVGUmNFTTdTVUZCZGtJc2IwSkJRVThzUlVGQlJTeEZRVUZGTEhOQ1FVRlRMRVZCUVVVN08zZERRVUZ4UkR0QlFWRm9SVHRKUVVGWUxIRkNRVUZSTEVWQlFVVTdNRVJCUVdkQ0xFMUJRVTBzYjBKQlFVNHNUVUZCVFR0M1EwRkJUVHRCUVhaRGRFSXNVVUZCVVR0SlFVUTFRaXcwUWtGQlpTeEZRVUZGTzJsRlFUQkRVU3hYUVVGWExHOUNRVUZZTEZkQlFWYzdSMEY2UTJoQ0xGRkJRVkVzUTBGM1NqVkNPMnRDUVhoS2IwSXNVVUZCVVNKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJhc2VDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9CYXNlQ29tcG9uZW50XCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBkZWNvcmF0b3JzXzIgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgbmF2aWdvXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibmF2aWdvXCIpKTtcbmxldCBWaWV3Um91dGVyID0gY2xhc3MgVmlld1JvdXRlciBleHRlbmRzIEJhc2VDb21wb25lbnRfMS5CYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnJvdXRlciA9IG5ldyBuYXZpZ29fMS5kZWZhdWx0KCk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICB0aGlzLnJvdXRlQ29sbGVjdGlvbigpO1xuICAgICAgICB3aW5kb3cucm91dGVyID0gdGhpcy5yb3V0ZXI7XG4gICAgfVxuICAgIHJvdXRlQ29sbGVjdGlvbigpIHtcbiAgICAgICAgZm9yIChjb25zdCByb3V0ZSBvZiB3aW5kb3cudmlydHVhbFJvdXRlcykge1xuICAgICAgICAgICAgY29uc3QgbXlSb3V0ZSA9IHJlcXVpcmUoYC4vLi4vcm91dGVzLyR7cm91dGV9LnRzYCkuZGVmYXVsdDtcbiAgICAgICAgICAgIHRoaXMuc2luZ2VSb3V0ZUNvbGxlY3Rpb24obXlSb3V0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2luZ2VSb3V0ZUNvbGxlY3Rpb24oUm91dGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghdXRpbF8xLmluY2x1ZGVzTWVtYmVyT2ZMaXN0KFJvdXRlLmF0dGFjaFRvU2VydmVycywgW2dsb2JhbC5wcm9jZXNzLmVudi5uYW1lLCAnKiddKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBSb3V0ZUNsYXNzID0gbmV3IFJvdXRlKCk7XG4gICAgICAgICAgICBpZiAoIVJvdXRlQ2xhc3MuaXNDbGllbnRSb3V0ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtSb3V0ZUNsYXNzLmNvbnN0cnVjdG9yLm5hbWV9IGlzIG5vdCBpbnN0YW5jZSBvZiB+Y2xpZW50L2xpYi9CYXNlUm91dGVgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucm91dGVyLm9uKFJvdXRlQ2xhc3Mucm91dGVyKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxufTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18yLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuXSwgVmlld1JvdXRlci5wcm90b3R5cGUsIFwicm91dGVyXCIsIHZvaWQgMCk7XG5WaWV3Um91dGVyID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKClcbl0sIFZpZXdSb3V0ZXIpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVmlld1JvdXRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZtbGxkMUp2ZFhSbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMMk52YlhCdmJtVnVkSE12Vm1sbGQxSnZkWFJsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN3MlJFRkJhVVU3UVVGRGFrVXNNRU5CUVhWRU8wRkJRM1pFTEhORVFVRjNSRHRCUVVONFJDeHpSRUZCYVVRN1FVRkZha1FzTkVSQlFUUkNPMEZCVlRWQ0xFbEJRWEZDTEZWQlFWVXNSMEZCTDBJc1RVRkJjVUlzVlVGQlZ5eFRRVUZSTEc5RFFVRnZRaXhEUVVGRExGZEJRVmNzUTBGQlF6dEpRVUY2UlRzN1VVRlRhVU1zVjBGQlRTeEhRVUZITEVsQlFVa3NaMEpCUVUwc1JVRkJSU3hEUVVGRE8wbEJLME4yUkN4RFFVRkRPMGxCZGtOaExHbENRVUZwUWp0UlFVTjJRaXhMUVVGTExFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1EwRkJRenRSUVVNeFFpeEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZMRU5CUVVNN1VVRkRka0lzVFVGQlRTeERRVUZETEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJRMmhETEVOQlFVTTdTVUZSVHl4bFFVRmxPMUZCUTI1Q0xFdEJRVXNzVFVGQlRTeExRVUZMTEVsQlFVa3NUVUZCVFN4RFFVRkRMR0ZCUVdFc1JVRkJSVHRaUVVOMFF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1pVRkJaU3hMUVVGTExFdEJRVXNzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXp0WlFVTXpSQ3hKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VTBGRGRFTTdTVUZEVEN4RFFVRkRPMGxCVlU4c2IwSkJRVzlDTEVOQlFVTXNTMEZCZVVJN1VVRkRiRVFzU1VGQlNUdFpRVU5CTEVsQlFVa3NRMEZCUXl3eVFrRkJiMElzUTBGQlZ5eExRVUZMTEVOQlFVTXNaVUZCWlN4RlFVRkZMRU5CUVZNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVUZGTEU5QlFVODdXVUZETTBjc1RVRkJUU3hWUVVGVkxFZEJRVWNzU1VGQlNTeExRVUZMTEVWQlFVVXNRMEZCUXp0WlFVTXZRaXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEdGQlFXRXNSVUZCUlR0blFrRkRNMElzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4SFFVRkhMRlZCUVZVc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTd3lRMEZCTWtNc1EwRkJReXhEUVVGRE8yRkJRemxHTzFsQlEwUXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMU5CUTNKRE8xRkJRVU1zVDBGQlR5eExRVUZMTEVWQlFVVTdXVUZEV2l4TlFVRk5MRXRCUVVzc1EwRkJRenRUUVVObU8wbEJRMHdzUTBGQlF6dERRVU5LTEVOQlFVRTdRVUV2UTJVN1NVRkJXQ3h4UWtGQlVTeEZRVUZGT3pzd1EwRkJkME03UVVGVWJFTXNWVUZCVlR0SlFVUTVRaXcwUWtGQlpTeEZRVUZGTzBkQlEwY3NWVUZCVlN4RFFYZEVPVUk3YTBKQmVFUnZRaXhWUVVGVkluMD0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vVGVzdC50c1wiOiBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvbW9kZWxzL1Rlc3QudHNcIixcblx0XCIuL1Rlc3QxLnRzXCI6IFwiLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMvVGVzdDEudHNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zb3VyY2UvYXBwL2NsaWVudC90cy9tb2RlbHMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwudHMkXCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgQkRPVGVzdF8xID0gcmVxdWlyZShcIn5iZG8vbW9kZWxzL0JET1Rlc3RcIik7XG5jb25zdCBDbGllbnRNb2RlbF8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0NsaWVudE1vZGVsXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmxldCBUZXN0ID0gY2xhc3MgVGVzdCBleHRlbmRzIEJET1Rlc3RfMS5CRE9UZXN0RmFjdG9yeShDbGllbnRNb2RlbF8xLkNsaWVudE1vZGVsKSB7XG4gICAgY29uc3RydWN0b3IoX3BhcmFtcykge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICB0ZXN0KCkge1xuICAgIH1cbn07XG5UZXN0ID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKHsgY29sbGVjdGlvbk5hbWU6IFwiVGVzdFwiIH0pLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIENvbnN0UGFyYW1zICE9PSBcInVuZGVmaW5lZFwiICYmIENvbnN0UGFyYW1zKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3RdKVxuXSwgVGVzdCk7XG5leHBvcnRzLlRlc3QgPSBUZXN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVkdWemRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMMjF2WkdWc2N5OVVaWE4wTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVN4cFJFRkJjVVE3UVVGRGNrUXNlVVJCUVhORU8wRkJRM1JFTEhORVFVRjNSRHRCUVZWNFJDeEpRVUZoTEVsQlFVa3NSMEZCYWtJc1RVRkJZU3hKUVVGTExGTkJRVkVzZDBKQlFXTXNRMEZCUXl4NVFrRkJWeXhEUVVGRE8wbEJSV3BFTEZsQlFWa3NUMEZCTWtJN1VVRkRia01zUzBGQlN5eEZRVUZGTEVOQlFVTTdTVUZEV2l4RFFVRkRPMGxCVDAwc1NVRkJTVHRKUVVWWUxFTkJRVU03UTBGRFNpeERRVUZCTzBGQlpGa3NTVUZCU1R0SlFVUm9RaXcwUWtGQlpTeERRVUZETEVWQlFVVXNZMEZCWXl4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRE8ybEZRVWRzUWl4WFFVRlhMRzlDUVVGWUxGZEJRVmM3UjBGR2VFSXNTVUZCU1N4RFFXTm9RanRCUVdSWkxHOUNRVUZKSW4wPSIsIlwidXNlIHN0cmljdFwiO1xudmFyIFRlc3QxXzEsIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJET1Rlc3QxXzEgPSByZXF1aXJlKFwifmJkby9tb2RlbHMvQkRPVGVzdDFcIik7XG5jb25zdCBUZXN0XzEgPSByZXF1aXJlKFwifmNsaWVudC9tb2RlbHMvVGVzdFwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5sZXQgVGVzdDEgPSBUZXN0MV8xID0gY2xhc3MgVGVzdDEgZXh0ZW5kcyBCRE9UZXN0MV8xLkJET1Rlc3QxRmFjdG9yeShUZXN0XzEuVGVzdCkge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgICAgICBzdXBlcihwYXJhbXMpO1xuICAgIH1cbiAgICBhc3luYyB3YWRkZSgpIHtcbiAgICAgICAgY29uc3QgdGVzdCA9IGF3YWl0IFRlc3QxXzEuZ2V0SW5zdGFuY2VCeUlEKHRoaXMuaWQpO1xuICAgICAgICBpZiAodGVzdClcbiAgICAgICAgICAgIHJldHVybiB0ZXN0LmdldFVuc2F2ZWRDaGFuZ2VzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59O1xuVGVzdDEgPSBUZXN0MV8xID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKHsgY29sbGVjdGlvbk5hbWU6IFwiVGVzdDFcIiB9KSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBDb25zdFBhcmFtcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBDb25zdFBhcmFtcykgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0XSlcbl0sIFRlc3QxKTtcbmV4cG9ydHMuVGVzdDEgPSBUZXN0MTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHVnpkREV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJOc2FXVnVkQzkwY3k5dGIyUmxiSE12VkdWemRERXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVTkJMRzFFUVVGMVJEdEJRVU4yUkN3NFEwRkJNa003UVVGRE0wTXNjMFJCUVhkRU8wRkJWWGhFTEVsQlFXRXNTMEZCU3l4aFFVRnNRaXhOUVVGaExFdEJRVTBzVTBGQlVTd3dRa0ZCWlN4RFFVRkRMRmRCUVVrc1EwRkJRenRKUVVVMVF5eFpRVUZaTEUxQlFUSkNPMUZCUTI1RExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVTnNRaXhEUVVGRE8wbEJUMDBzUzBGQlN5eERRVUZETEV0QlFVczdVVUZEWkN4TlFVRk5MRWxCUVVrc1IwRkJSeXhOUVVGTkxFOUJRVXNzUTBGQlF5eGxRVUZsTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRMnhFTEVsQlFVa3NTVUZCU1R0WlFVRkZMRTlCUVU4c1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RlFVRkZMRU5CUVVNN1VVRkRNVU1zVDBGQlR6dEpRVU5ZTEVOQlFVTTdRMEZEU2l4RFFVRkJPMEZCYUVKWkxFdEJRVXM3U1VGRWFrSXNORUpCUVdVc1EwRkJReXhGUVVGRkxHTkJRV01zUlVGQlJTeFBRVUZQTEVWQlFVVXNRMEZCUXp0cFJVRkhjRUlzVjBGQlZ5eHZRa0ZCV0N4WFFVRlhPMGRCUm5aQ0xFdEJRVXNzUTBGblFtcENPMEZCYUVKWkxITkNRVUZMSW4wPSIsInZhciBtYXAgPSB7XG5cdFwiLi9Db25maWcudHNcIjogXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9Db25maWcudHNcIixcblx0XCIuL0dhbWVMb2JieS50c1wiOiBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0dhbWVMb2JieS50c1wiLFxuXHRcIi4vSG9tZS50c1wiOiBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0hvbWUudHNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwudHMkXCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBDbGllbnRSb3V0ZV8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0NsaWVudFJvdXRlXCIpO1xuY29uc3QgQkRPQ29uZmlnXzEgPSByZXF1aXJlKFwifmJkby9yb3V0ZXMvQkRPQ29uZmlnXCIpO1xuY2xhc3MgQ29uZmlnIGV4dGVuZHMgQkRPQ29uZmlnXzEuQkRPQ29uZmlnRmFjdG9yeShDbGllbnRSb3V0ZV8xLkNsaWVudFJvdXRlKSB7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBDb25maWc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMjl1Wm1sbkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOWpiR2xsYm5RdmRITXZjbTkxZEdWekwwTnZibVpwWnk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTEhsRVFVRnpSRHRCUVVOMFJDeHhSRUZCZVVRN1FVRlhla1FzVFVGQmNVSXNUVUZCVHl4VFFVRlJMRFJDUVVGblFpeERRVUZETEhsQ1FVRlhMRU5CUVVNN1EwRkJTVHRCUVVGeVJTeDVRa0ZCY1VVaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENsaWVudFJvdXRlXzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQ2xpZW50Um91dGVcIik7XG5jb25zdCBCRE9HYW1lTG9iYnlfMSA9IHJlcXVpcmUoXCJ+YmRvL3JvdXRlcy9CRE9HYW1lTG9iYnlcIik7XG5jbGFzcyBHYW1lTG9iYnkgZXh0ZW5kcyBCRE9HYW1lTG9iYnlfMS5CRE9HYW1lTG9iYnlGYWN0b3J5KENsaWVudFJvdXRlXzEuQ2xpZW50Um91dGUpIHtcbiAgICBhc3luYyB0ZW1wbGF0ZVBhcmFtcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRlc3Q6ICdsb2wnXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gR2FtZUxvYmJ5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUjJGdFpVeHZZbUo1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5amJHbGxiblF2ZEhNdmNtOTFkR1Z6TDBkaGJXVk1iMkppZVM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTEhsRVFVRnpSRHRCUVVOMFJDd3lSRUZCSzBRN1FVRlRMMFFzVFVGQmNVSXNVMEZCVlN4VFFVRlJMR3REUVVGdFFpeERRVUZETEhsQ1FVRlhMRU5CUVVNN1NVRlZla1FzUzBGQlN5eERRVUZETEdOQlFXTTdVVUZETVVJc1QwRkJUenRaUVVOSUxFbEJRVWtzUlVGQlJTeExRVUZMTzFOQlEyUXNRMEZCUXp0SlFVTk9MRU5CUVVNN1EwRkRTanRCUVdaRUxEUkNRV1ZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ2xpZW50Um91dGVfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9DbGllbnRSb3V0ZVwiKTtcbmNvbnN0IEJET0hvbWVfMSA9IHJlcXVpcmUoXCJ+YmRvL3JvdXRlcy9CRE9Ib21lXCIpO1xuY2xhc3MgSG9tZSBleHRlbmRzIEJET0hvbWVfMS5CRE9Ib21lRmFjdG9yeShDbGllbnRSb3V0ZV8xLkNsaWVudFJvdXRlKSB7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBIb21lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pU0c5dFpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMM0p2ZFhSbGN5OUliMjFsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUVzZVVSQlFYTkVPMEZCUTNSRUxHbEVRVUZ4UkR0QlFWTnlSQ3hOUVVGeFFpeEpRVUZMTEZOQlFWRXNkMEpCUVdNc1EwRkJReXg1UWtGQlZ5eERRVUZETzBOQlFVazdRVUZCYWtVc2RVSkJRV2xGSW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL21ldGFkYXRhXCIpO1xuZnVuY3Rpb24gc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2UoaW5zdGFuY2UsIGtleSwgbmV3VmFsLCBuc1Byb3AgPSBcImlkXCIpIHtcbiAgICBpZiAoa2V5ID09PSBcIipcIilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiKiBpcyBhIHNwZWNpYWwgY2hhcmFjdGVyIGFuZCBkb2VzIG5vdCBmb2xsb3cgdGhlIHByb3BlcnR5IGNvbnZlbnRpb25cIik7XG4gICAgY29uc3QgbnNQcmVmaXggPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoaW5zdGFuY2UuY29uc3RydWN0b3IpLm5hbWU7XG4gICAgbGV0IG5zU3VmZml4ID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShpbnN0YW5jZSwgXCJvbGRTdG9yYWdlTnNTdWZmaXhcIik7XG4gICAgbGV0IHN0b3JhZ2VWYWx1ZTtcbiAgICBpZiAoIW5zU3VmZml4KVxuICAgICAgICBuc1N1ZmZpeCA9IGluc3RhbmNlW25zUHJvcF07XG4gICAgbGV0IG5zID0gYCR7bnNQcmVmaXh9XyR7bnNTdWZmaXh9YDtcbiAgICBpZiAoa2V5ID09PSBuc1Byb3AgfHwgbnNTdWZmaXggIT09IGluc3RhbmNlW25zUHJvcF0pIHtcbiAgICAgICAgbnNTdWZmaXggPSBrZXkgPT09IG5zUHJvcCA/IG5ld1ZhbCA6IGluc3RhbmNlW25zUHJvcF07XG4gICAgICAgIGNvbnN0IG5ld05zID0gYCR7bnNQcmVmaXh9XyR7bnNTdWZmaXh9YDtcbiAgICAgICAgc3RvcmFnZVZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obnMpO1xuICAgICAgICBpZiAoc3RvcmFnZVZhbHVlKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShucyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuZXdOcywgc3RvcmFnZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBucyA9IG5ld05zO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3RvcmFnZVZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obnMpO1xuICAgICAgICBpZiAoc3RvcmFnZVZhbHVlKSB7XG4gICAgICAgICAgICBzdG9yYWdlVmFsdWUgPSBKU09OLnBhcnNlKHN0b3JhZ2VWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgc3RvcmFnZVZhbHVlID0ge307XG4gICAgICAgIGlmIChuZXdWYWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGVsZXRlIHN0b3JhZ2VWYWx1ZVtrZXldO1xuICAgICAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhzdG9yYWdlVmFsdWUpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShucywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZVZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obnMsIEpTT04uc3RyaW5naWZ5KE9iamVjdC5hc3NpZ24oc3RvcmFnZVZhbHVlLCB7IFtrZXldOiBuZXdWYWwgfSkpKTtcbiAgICB9XG4gICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YShpbnN0YW5jZSwgXCJvbGRTdG9yYWdlTnNTdWZmaXhcIiwgbnNTdWZmaXgpO1xufVxuZXhwb3J0cy5zZXRVcGRhdGVOYW1lc3BhY2VkU3RvcmFnZSA9IHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlO1xuZnVuY3Rpb24gZ2V0TmFtZXNwYWNlZFN0b3JhZ2UoaW5zdGFuY2UsIGtleSwgbnNQcm9wID0gXCJpZFwiLCBmb3JjZU5TKSB7XG4gICAgY29uc3QgbnNQcmVmaXggPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoaW5zdGFuY2UuY29uc3RydWN0b3IpLm5hbWU7XG4gICAgbGV0IG5zU3VmZml4ID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShpbnN0YW5jZSwgXCJvbGRTdG9yYWdlTnNTdWZmaXhcIik7XG4gICAgaWYgKG5zU3VmZml4ICE9PSBpbnN0YW5jZVtuc1Byb3BdKVxuICAgICAgICBuc1N1ZmZpeCA9IGluc3RhbmNlW25zUHJvcF07XG4gICAgaWYgKGZvcmNlTlMpXG4gICAgICAgIG5zU3VmZml4ID0gZm9yY2VOUztcbiAgICBsZXQgc3RvcmFnZVZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7bnNQcmVmaXh9XyR7bnNTdWZmaXh9YCk7XG4gICAgaWYgKHN0b3JhZ2VWYWx1ZSlcbiAgICAgICAgc3RvcmFnZVZhbHVlID0gSlNPTi5wYXJzZShzdG9yYWdlVmFsdWUpO1xuICAgIGlmIChzdG9yYWdlVmFsdWUgJiYga2V5ID09PSBcIipcIilcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VWYWx1ZTtcbiAgICBpZiAoc3RvcmFnZVZhbHVlICYmIGtleSBpbiBzdG9yYWdlVmFsdWUpXG4gICAgICAgIHJldHVybiBzdG9yYWdlVmFsdWVba2V5XTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZXhwb3J0cy5nZXROYW1lc3BhY2VkU3RvcmFnZSA9IGdldE5hbWVzcGFjZWRTdG9yYWdlO1xuZnVuY3Rpb24gZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBrZXksIG5zUHJvcCA9IFwiaWRcIikge1xuICAgIGlmIChrZXkgPT09IFwiKlwiKSB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBnZXROYW1lc3BhY2VkU3RvcmFnZShpbnN0YW5jZSwga2V5LCBuc1Byb3ApO1xuICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gc3RvcmFnZSkge1xuICAgICAgICAgICAgaWYgKHN0b3JhZ2UuaGFzT3duUHJvcGVydHkocHJvcCkpXG4gICAgICAgICAgICAgICAgc2V0VXBkYXRlTmFtZXNwYWNlZFN0b3JhZ2UoaW5zdGFuY2UsIHByb3AsIHVuZGVmaW5lZCwgbnNQcm9wKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIHNldFVwZGF0ZU5hbWVzcGFjZWRTdG9yYWdlKGluc3RhbmNlLCBrZXksIHVuZGVmaW5lZCwgbnNQcm9wKTtcbn1cbmV4cG9ydHMuZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlID0gZGVsZXRlRnJvbU5hbWVzcGFjZWRTdG9yYWdlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhScGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMM1YwYVd4ekwzVjBhV3d1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3hyUkVGQmEwVTdRVUZWYkVVc1UwRkJaMElzTUVKQlFUQkNMRU5CUVVNc1VVRkJZU3hGUVVGRkxFZEJRVmNzUlVGQlJTeE5RVUZYTEVWQlFVVXNVMEZCYVVJc1NVRkJTVHRKUVVOeVJ5eEpRVUZKTEVkQlFVY3NTMEZCU3l4SFFVRkhPMUZCUVVVc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHpSVUZCYzBVc1EwRkJReXhEUVVGRE8wbEJSM3BITEUxQlFVMHNVVUZCVVN4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJRenRKUVVOc1JTeEpRVUZKTEZGQlFWRXNSMEZCUnl4elFrRkJWeXhEUVVGRExGRkJRVkVzUlVGQlJTeHZRa0ZCYjBJc1EwRkJReXhEUVVGRE8wbEJRek5FTEVsQlFVa3NXVUZCYVVJc1EwRkJRenRKUVVkMFFpeEpRVUZKTEVOQlFVTXNVVUZCVVR0UlFVRkZMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdTVUZETTBNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUjBGQlJ5eFJRVUZSTEVsQlFVa3NVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkRia01zU1VGQlNTeEhRVUZITEV0QlFVc3NUVUZCVFN4SlFVRkpMRkZCUVZFc1MwRkJTeXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVTdVVUZGYWtRc1VVRkJVU3hIUVVGSExFZEJRVWNzUzBGQlN5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTNSRUxFMUJRVTBzUzBGQlN5eEhRVUZITEVkQlFVY3NVVUZCVVN4SlFVRkpMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJRM2hETEZsQlFWa3NSMEZCUnl4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEzaERMRWxCUVVrc1dVRkJXU3hGUVVGRk8xbEJRMlFzV1VGQldTeERRVUZETEZWQlFWVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVNMVFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF6dFRRVU0zUXp0UlFVTkVMRVZCUVVVc1IwRkJSeXhMUVVGTExFTkJRVU03UzBGRFpEdFRRVUZOTzFGQlJVZ3NXVUZCV1N4SFFVRkhMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEZUVNc1NVRkJTU3haUVVGWkxFVkJRVVU3V1VGRFpDeFpRVUZaTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dFRRVU16UXpzN1dVRkJUU3haUVVGWkxFZEJRVWNzUlVGQlJTeERRVUZETzFGQlJYcENMRWxCUVVrc1RVRkJUU3hMUVVGTExGTkJRVk1zUlVGQlJUdFpRVU4wUWl4UFFVRlBMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU42UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVN1owSkJRMjVETEZsQlFWa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03WVVGREwwSTdPMmRDUVVGTkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTnFSVHM3V1VGQlRTeFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1JVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1dVRkJXU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dExRVU51Unp0SlFVVkVMSGxDUVVGakxFTkJRVU1zVVVGQlVTeEZRVUZGTEc5Q1FVRnZRaXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzBGQlF6ZEVMRU5CUVVNN1FVRnlRMFFzWjBWQmNVTkRPMEZCYTBKRUxGTkJRV2RDTEc5Q1FVRnZRaXhEUVVGRExGRkJRV0VzUlVGQlJTeEhRVUZYTEVWQlFVVXNVMEZCYVVJc1NVRkJTU3hGUVVGRkxFOUJRV2RDTzBsQlEzQkhMRTFCUVUwc1VVRkJVU3hIUVVGSExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU5zUlN4SlFVRkpMRkZCUVZFc1IwRkJSeXh6UWtGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4dlFrRkJiMElzUTBGQlF5eERRVUZETzBsQlF6TkVMRWxCUVVrc1VVRkJVU3hMUVVGTExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZCUlN4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlF5OUVMRWxCUVVrc1QwRkJUenRSUVVGRkxGRkJRVkVzUjBGQlJ5eFBRVUZQTEVOQlFVTTdTVUZEYUVNc1NVRkJTU3haUVVGWkxFZEJRVkVzV1VGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRkZCUVZFc1NVRkJTU3hSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEzaEZMRWxCUVVrc1dVRkJXVHRSUVVGRkxGbEJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8wbEJRekZFTEVsQlFVa3NXVUZCV1N4SlFVRkpMRWRCUVVjc1MwRkJTeXhIUVVGSE8xRkJRVVVzVDBGQlR5eFpRVUZaTEVOQlFVTTdTVUZEY2tRc1NVRkJTU3haUVVGWkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEZsQlFWazdVVUZCUlN4UFFVRlBMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU5zUlN4UFFVRlBMRk5CUVZNc1EwRkJRenRCUVVOeVFpeERRVUZETzBGQlZrUXNiMFJCVlVNN1FVRlhSQ3hUUVVGblFpd3lRa0ZCTWtJc1EwRkJReXhSUVVGaExFVkJRVVVzUjBGQlZ5eEZRVUZGTEZOQlFXbENMRWxCUVVrN1NVRkRla1lzU1VGQlNTeEhRVUZITEV0QlFVc3NSMEZCUnl4RlFVRkZPMUZCUTJJc1RVRkJUU3hQUVVGUExFZEJRVWNzYjBKQlFXOUNMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTTFSQ3hMUVVGTExFMUJRVTBzU1VGQlNTeEpRVUZKTEU5QlFVOHNSVUZCUlR0WlFVTjRRaXhKUVVGSkxFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRPMmRDUVVGRkxEQkNRVUV3UWl4RFFVRkRMRkZCUVZFc1JVRkJSU3hKUVVGSkxFVkJRVVVzVTBGQlV5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMU5CUTI1SE8wdEJRMG83TzFGQlFVMHNNRUpCUVRCQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlFVY3NSVUZCUlN4VFFVRlRMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03UVVGRGVFVXNRMEZCUXp0QlFWQkVMR3RGUVU5REluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuZnVuY3Rpb24gQkRPVGVzdEZhY3RvcnkoY3Rvcikge1xuICAgIGxldCBCRE9UZXN0ID0gY2xhc3MgQkRPVGVzdCBleHRlbmRzIGN0b3Ige1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gJ3Rlc3QnO1xuICAgICAgICAgICAgdGhpcy50ZXN0ZXIgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBvblRlc3RDaGFuZ2UoY2hhbmdlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0IGNoYW5nZWRcIiwgY2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgb25UZXN0ZXJJbml0KGluaXQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIGluaXRcIiwgaW5pdCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgb25UZXN0ZXJDaGFuZ2UoY2hhbmdlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgY2hhbmdlZFwiLCBjaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBvblRlc3RlckFkZChhZGRlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZXIgYWRkZWRcIiwgYWRkZWQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIG9uVGVzdGVyUmVtb3ZlKHJlbW92ZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGVyIHJlbW92ZWRcIiwgcmVtb3ZlZCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoeyBhdXRvU2F2ZTogdHJ1ZSB9KSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIEJET1Rlc3QucHJvdG90eXBlLCBcInRpdGxlXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLndhdGNoZWQoKSwgZGVjb3JhdG9yc18xLmF0dHJpYnV0ZSgoX3R5cGUpID0+IFtTdHJpbmddKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQXJyYXkpXG4gICAgXSwgQkRPVGVzdC5wcm90b3R5cGUsIFwidGVzdGVyXCIsIHZvaWQgMCk7XG4gICAgQkRPVGVzdCA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoeyBpc0Fic3RyYWN0OiB0cnVlLCBjb2xsZWN0aW9uTmFtZTogXCJCRE9UZXN0XCIgfSlcbiAgICBdLCBCRE9UZXN0KTtcbiAgICByZXR1cm4gQkRPVGVzdDtcbn1cbmV4cG9ydHMuQkRPVGVzdEZhY3RvcnkgPSBCRE9UZXN0RmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBWR1Z6ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmJXOWtaV3h6TDBKRVQxUmxjM1F1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzYzBSQlFUUkZPMEZCVlRWRkxGTkJRV2RDTEdOQlFXTXNRMEZCYzBNc1NVRkJWenRKUVZNelJTeEpRVUZsTEU5QlFVOHNSMEZCZEVJc1RVRkJaU3hQUVVGUkxGTkJRVkVzU1VGQlNUdFJRVUZ1UXpzN1dVRlJNRU1zVlVGQlN5eEhRVUZYTEUxQlFVMHNRMEZCUXp0WlFWRllMRmRCUVUwc1IwRkJZU3hGUVVGRkxFTkJRVU03VVVGNVJEVkZMRU5CUVVNN1VVRm9SR0VzV1VGQldTeERRVUZETEU5QlFYVkNPMWxCUXpGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNZMEZCWXl4RlFVRkZMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU12UXl4RFFVRkRPMUZCVTFNc1dVRkJXU3hEUVVGRExFbEJRVzlDTzFsQlEzWkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zWVVGQllTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNelF5eERRVUZETzFGQlUxTXNZMEZCWXl4RFFVRkRMRTlCUVhWQ08xbEJRelZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRMnBFTEVOQlFVTTdVVUZUVXl4WFFVRlhMRU5CUVVNc1MwRkJjVUk3V1VGRGRrTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhqUVVGakxFVkJRVVVzUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUXpkRExFTkJRVU03VVVGVFV5eGpRVUZqTEVOQlFVTXNUMEZCZFVJN1dVRkROVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4blFrRkJaMElzUlVGQlJTeFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRha1FzUTBGQlF6dExRVVZLTEVOQlFVRTdTVUZxUld0RE8xRkJRVGxDTEhOQ1FVRlRMRU5CUVVNc1JVRkJSU3hSUVVGUkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVOQlFVTTdPekJEUVVFclFqdEpRVkZzUWp0UlFVRXhReXh2UWtGQlR5eEZRVUZGTEVWQlFVVXNjMEpCUVZNc1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenM3TWtOQlFUaENPMGxCYUVJM1JDeFBRVUZQTzFGQlJISkNMRFJDUVVGbExFTkJRVU1zUlVGQlJTeFZRVUZWTEVWQlFVVXNTVUZCU1N4RlFVRkZMR05CUVdNc1JVRkJSU3hUUVVGVExFVkJRVVVzUTBGQlF6dFBRVU5zUkN4UFFVRlBMRU5CZVVWeVFqdEpRVU5FTEU5QlFVOHNUMEZCVHl4RFFVRkRPMEZCUlc1Q0xFTkJRVU03UVVGeVJrUXNkME5CY1VaREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuZnVuY3Rpb24gQkRPVGVzdDFGYWN0b3J5KGN0b3IpIHtcbiAgICBsZXQgQkRPVGVzdDEgPSBjbGFzcyBCRE9UZXN0MSBleHRlbmRzIGN0b3Ige1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gJ3Rlc3QnO1xuICAgICAgICB9XG4gICAgICAgIGRvU29tZXRoaW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwibG9sXCI7XG4gICAgICAgIH1cbiAgICAgICAgb25PaGFJbml0KF92YWx1ZSkge1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKHsgZGVzY3JpcHRpb246IFwidGVzdGVyLi4uXCIgfSksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBCRE9UZXN0MS5wcm90b3R5cGUsIFwidGl0bGVcIiwgdm9pZCAwKTtcbiAgICBCRE9UZXN0MSA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoeyBpc0Fic3RyYWN0OiB0cnVlLCBjb2xsZWN0aW9uTmFtZTogXCJCRE9UZXN0MVwiIH0pXG4gICAgXSwgQkRPVGVzdDEpO1xuICAgIHJldHVybiBCRE9UZXN0MTtcbn1cbmV4cG9ydHMuQkRPVGVzdDFGYWN0b3J5ID0gQkRPVGVzdDFGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFZHVnpkREV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDIxdlpHVnNjeTlDUkU5VVpYTjBNUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkRRU3h6UkVGQmJVVTdRVUZUYmtVc1UwRkJaMElzWlVGQlpTeERRVUZyUkN4SlFVRlhPMGxCVlhoR0xFbEJRV1VzVVVGQlVTeEhRVUYyUWl4TlFVRmxMRkZCUVZNc1UwRkJVU3hKUVVGSk8xRkJRWEJET3p0WlFWRnZSQ3hWUVVGTExFZEJRVmNzVFVGQlRTeERRVUZETzFGQmMwSXpSU3hEUVVGRE8xRkJaRlVzVjBGQlZ6dFpRVU5rTEU5QlFVOHNTMEZCU3l4RFFVRkRPMUZCUTJwQ0xFTkJRVU03VVVGVFV5eFRRVUZUTEVOQlFVTXNUVUZCWXp0UlFVVnNReXhEUVVGRE8wdEJRMG9zUTBGQlFUdEpRWFJDTkVNN1VVRkJlRU1zYzBKQlFWTXNRMEZCUXl4RlFVRkZMRmRCUVZjc1JVRkJSU3hYUVVGWExFVkJRVVVzUTBGQlF6czdNa05CUVN0Q08wbEJValZFTEZGQlFWRTdVVUZFZEVJc05FSkJRV1VzUTBGQlF5eEZRVUZGTEZWQlFWVXNSVUZCUlN4SlFVRkpMRVZCUVVVc1kwRkJZeXhGUVVGRkxGVkJRVlVzUlVGQlJTeERRVUZETzA5QlEyNUVMRkZCUVZFc1EwRTRRblJDTzBsQlEwUXNUMEZCVHl4UlFVRlJMRU5CUVVNN1FVRkRjRUlzUTBGQlF6dEJRVEZEUkN3d1EwRXdRME1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IENodW5rXzEgPSByZXF1aXJlKFwiLi9DaHVua1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5sZXQgQ2VsbCA9IGNsYXNzIENlbGwge1xuICAgIGNvbnN0cnVjdG9yKF9wYXJhbXMpIHtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy5jYXZlID0gMDtcbiAgICAgICAgdGhpcy5yaXZlciA9IDA7XG4gICAgICAgIHRoaXMuaHVtaWRpdHkgPSAwO1xuICAgICAgICB0aGlzLnRlbXBlcmF0dXJlID0gMDtcbiAgICAgICAgdGhpcy5jaHVuayA9IG5ldyBDaHVua18xLkNodW5rKCk7XG4gICAgfVxufTtcbkNlbGwgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBDb25zdFBhcmFtcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBDb25zdFBhcmFtcykgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0XSlcbl0sIENlbGwpO1xuZXhwb3J0cy5DZWxsID0gQ2VsbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyVnNiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2Ylc5a1pXeHpMME5sYkd3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQkxHMURRVUZuUXp0QlFVTm9ReXh6UkVGQmQwUTdRVUZUZUVRc1NVRkJZU3hKUVVGSkxFZEJRV3BDTEUxQlFXRXNTVUZCU1R0SlFYbEVZaXhaUVVGWkxFOUJRVEpDTzFGQmJFUm9ReXhOUVVGRExFZEJRVmNzUTBGQlF5eERRVUZETzFGQlVXUXNUVUZCUXl4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVZGa0xGTkJRVWtzUjBGQlZ5eERRVUZETEVOQlFVTTdVVUZSYWtJc1ZVRkJTeXhIUVVGWExFTkJRVU1zUTBGQlF6dFJRVkZzUWl4aFFVRlJMRWRCUVZjc1EwRkJReXhEUVVGRE8xRkJVWEpDTEdkQ1FVRlhMRWRCUVZjc1EwRkJReXhEUVVGRE8xRkJVWGhDTEZWQlFVc3NSMEZCVlN4SlFVRkpMR0ZCUVVzc1JVRkJSU3hEUVVGRE8wbEJSVk1zUTBGQlF6dERRVU12UXl4RFFVRkJPMEZCTVVSWkxFbEJRVWs3U1VGRWFFSXNORUpCUVdVc1JVRkJSVHRwUlVFd1JGRXNWMEZCVnl4dlFrRkJXQ3hYUVVGWE8wZEJla1I0UWl4SlFVRkpMRU5CTUVSb1FqdEJRVEZFV1N4dlFrRkJTU0o5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBvcGVuX3NpbXBsZXhfbm9pc2VfMSA9IHJlcXVpcmUoXCJvcGVuLXNpbXBsZXgtbm9pc2VcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY29uc3QgQ2VsbF8xID0gcmVxdWlyZShcIi4vQ2VsbFwiKTtcbmNsYXNzIENodW5rIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy5zaXplID0gNjQ7XG4gICAgICAgIHRoaXMuZ3JpZCA9IFtdO1xuICAgICAgICB0aGlzLnNpbXBsZXhDYXZlID0gb3Blbl9zaW1wbGV4X25vaXNlXzEubWFrZU5vaXNlMkQoMSk7XG4gICAgICAgIHRoaXMuc2ltcGxleFJpdmVyID0gb3Blbl9zaW1wbGV4X25vaXNlXzEubWFrZU5vaXNlMkQoMik7XG4gICAgICAgIHRoaXMuc2ltcGxleFRlbXBlcmF0dXJlID0gb3Blbl9zaW1wbGV4X25vaXNlXzEubWFrZU5vaXNlMkQoMyk7XG4gICAgICAgIHRoaXMuc2ltcGxleEh1bWlkaXR5ID0gb3Blbl9zaW1wbGV4X25vaXNlXzEubWFrZU5vaXNlMkQoNCk7XG4gICAgICAgIHV0aWxfMS5tZXJnZSh0aGlzLCBwYXJhbXMpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlR3JpZCgpO1xuICAgIH1cbiAgICBnZW5lcmF0ZUdyaWQoKSB7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMuc2l6ZTsgcm93KyspIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ncmlkW3Jvd10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQucHVzaChbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLnNpemU7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeENvb3JkaW5hdGUgPSBjb2wgKyB0aGlzLnggKiB0aGlzLnNpemU7XG4gICAgICAgICAgICAgICAgY29uc3QgeUNvb3JkaW5hdGUgPSByb3cgKyB0aGlzLnkgKiB0aGlzLnNpemU7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkW3Jvd10ucHVzaChuZXcgQ2VsbF8xLkNlbGwoe1xuICAgICAgICAgICAgICAgICAgICB4OiB4Q29vcmRpbmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgeTogeUNvb3JkaW5hdGUsXG4gICAgICAgICAgICAgICAgICAgIGNhdmU6IHRoaXMuc2ltcGxleENhdmUoeENvb3JkaW5hdGUgLyAxMDAsIHlDb29yZGluYXRlIC8gMTAwKSxcbiAgICAgICAgICAgICAgICAgICAgcml2ZXI6IHRoaXMuc2ltcGxleFJpdmVyKHhDb29yZGluYXRlIC8gNTAwLCB5Q29vcmRpbmF0ZSAvIDUwMCksXG4gICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiB0aGlzLnNpbXBsZXhUZW1wZXJhdHVyZSh4Q29vcmRpbmF0ZSAvIDI1MDAsIHlDb29yZGluYXRlIC8gMjUwMCksXG4gICAgICAgICAgICAgICAgICAgIGh1bWlkaXR5OiB0aGlzLnNpbXBsZXhIdW1pZGl0eSh4Q29vcmRpbmF0ZSAvIDI1MDAsIHlDb29yZGluYXRlIC8gMjUwMCksXG4gICAgICAgICAgICAgICAgICAgIGNodW5rOiB0aGlzXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5DaHVuayA9IENodW5rO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTJoMWJtc3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMjF2WkdWc2N5OURhSFZ1YXk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTERKRVFVRnBSRHRCUVVOcVJDd3dRMEZCZDBNN1FVRkRlRU1zYVVOQlFUaENPMEZCVVRsQ0xFMUJRV0VzUzBGQlN6dEpRWE5GWkN4WlFVRlpMRTFCUVRKQ08xRkJMMFJvUXl4TlFVRkRMRWRCUVZjc1EwRkJReXhEUVVGRE8xRkJVV1FzVFVGQlF5eEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFWRmtMRk5CUVVrc1IwRkJXU3hGUVVGRkxFTkJRVU03VVVGVGFFSXNVMEZCU1N4SFFVRmhMRVZCUVVVc1EwRkJRenRSUVZOd1FpeG5Ra0ZCVnl4SFFVRkhMR2REUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZUTjBJc2FVSkJRVmtzUjBGQlJ5eG5RMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJVemxDTEhWQ1FVRnJRaXhIUVVGSExHZERRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRlRjRU1zYjBKQlFXVXNSMEZCUnl4blEwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlIzWkRMRmxCUVVzc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdVVUZEY0VJc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETzBsQlEzaENMRU5CUVVNN1NVRlJVeXhaUVVGWk8xRkJRMnhDTEV0QlFVc3NTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQldTeEpRVUZKTEVOQlFVTXNTVUZCU3l4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRk8xbEJRMmhFTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzJkQ1FVTnFRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRoUVVOMFFqdFpRVU5FTEV0QlFVc3NTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQldTeEpRVUZKTEVOQlFVTXNTVUZCU3l4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRk8yZENRVU5vUkN4TlFVRk5MRmRCUVZjc1IwRkJSeXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCVnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRE8yZENRVU55UkN4TlFVRk5MRmRCUVZjc1IwRkJSeXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCVnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRE8yZENRVVZ5UkN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZEWml4SlFVRkpMRmRCUVVrc1EwRkJRenR2UWtGRFRDeERRVUZETEVWQlFVVXNWMEZCVnp0dlFrRkRaQ3hEUVVGRExFVkJRVVVzVjBGQlZ6dHZRa0ZEWkN4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eFhRVUZYTEVkQlFVY3NSMEZCUnl4RlFVRkZMRmRCUVZjc1IwRkJSeXhIUVVGSExFTkJRVU03YjBKQlF6VkVMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZkQlFWY3NSMEZCUnl4SFFVRkhMRVZCUVVVc1YwRkJWeXhIUVVGSExFZEJRVWNzUTBGQlF6dHZRa0ZET1VRc1YwRkJWeXhGUVVGRkxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhYUVVGWExFZEJRVWNzU1VGQlNTeEZRVUZGTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNN2IwSkJRelZGTEZGQlFWRXNSVUZCUlN4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExGZEJRVmNzUjBGQlJ5eEpRVUZKTEVWQlFVVXNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJRenR2UWtGRGRFVXNTMEZCU3l4RlFVRkZMRWxCUVVrN2FVSkJRMlFzUTBGQlF5eERRVU5NTEVOQlFVTTdZVUZEVER0VFFVTktPMGxCUTB3c1EwRkJRenREUVVOS08wRkJlRWRFTEhOQ1FYZEhReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBCRE9Db25maWdGYWN0b3J5KGN0b3IpIHtcbiAgICBjbGFzcyBCRE9Db25maWcgZXh0ZW5kcyBjdG9yIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXMgPSBbXCIvOm5hbWVcIl07XG4gICAgICAgICAgICB0aGlzLmpzb25Pbmx5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gQkRPQ29uZmlnO1xufVxuZXhwb3J0cy5CRE9Db25maWdGYWN0b3J5ID0gQkRPQ29uZmlnRmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBRMjl1Wm1sbkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXliM1YwWlhNdlFrUlBRMjl1Wm1sbkxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCVTBFc1UwRkJaMElzWjBKQlFXZENMRU5CUVhORExFbEJRVmM3U1VGVk4wVXNUVUZCWlN4VFFVRlZMRk5CUVZFc1NVRkJTVHRSUVVGeVF6czdXVUZQVnl4WFFVRk5MRWRCUVdFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVTh6UWl4aFFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRemxDTEVOQlFVTTdTMEZCUVR0SlFVVkVMRTlCUVU4c1UwRkJVeXhEUVVGRE8wRkJRM0pDTEVOQlFVTTdRVUUxUWtRc05FTkJORUpESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IGdhbWVMb2JieV9uamtfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ+YmRvL3ZpZXdzL2dhbWVMb2JieS5uamtcIikpO1xuZnVuY3Rpb24gQkRPR2FtZUxvYmJ5RmFjdG9yeShjdG9yKSB7XG4gICAgY2xhc3MgQkRPR2FtZUxvYmJ5IGV4dGVuZHMgY3RvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyTmFtZVNwYWNlID0gJy8nO1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVN0cmluZyA9IGdhbWVMb2JieV9uamtfMS5kZWZhdWx0O1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvaGE6ICdPT09PT0hBQUFBQUFBQSEhISdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQkRPR2FtZUxvYmJ5LmF0dGFjaFRvU2VydmVycyA9IFtcIkdhbWVTZXJ2ZXJcIl07XG4gICAgcmV0dXJuIEJET0dhbWVMb2JieTtcbn1cbmV4cG9ydHMuQkRPR2FtZUxvYmJ5RmFjdG9yeSA9IEJET0dhbWVMb2JieUZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQUjJGdFpVeHZZbUo1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5eWIzVjBaWE12UWtSUFIyRnRaVXh2WW1KNUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVOQkxIRkdRVUZuUkR0QlFWTm9SQ3hUUVVGblFpeHRRa0ZCYlVJc1EwRkJjME1zU1VGQlZ6dEpRVk5vUml4TlFVRmxMRmxCUVdFc1UwRkJVU3hKUVVGSk8xRkJRWGhET3p0WlFXZENWeXh2UWtGQlpTeEhRVUZITEVkQlFVY3NRMEZCUXp0WlFWRnVRaXh0UWtGQll5eEhRVUZITEhWQ1FVRlJMRU5CUVVNN1VVRmplRU1zUTBGQlF6dFJRVXhoTEV0QlFVc3NRMEZCUXl4alFVRmpPMWxCUXpGQ0xFOUJRVTg3WjBKQlEwZ3NSMEZCUnl4RlFVRkZMRzFDUVVGdFFqdGhRVU16UWl4RFFVRkRPMUZCUTA0c1EwRkJRenM3U1VFMVFtRXNORUpCUVdVc1IwRkJZU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzBsQkswSTNSQ3hQUVVGUExGbEJRVmtzUTBGQlF6dEJRVU40UWl4RFFVRkRPMEZCYkVSRUxHdEVRV3RFUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IGhvbWVfbmprXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwifmJkby92aWV3cy9ob21lLm5qa1wiKSk7XG5mdW5jdGlvbiBCRE9Ib21lRmFjdG9yeShjdG9yKSB7XG4gICAgY2xhc3MgQkRPSG9tZSBleHRlbmRzIGN0b3Ige1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlck5hbWVTcGFjZSA9ICcvJztcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGVTdHJpbmcgPSBob21lX25qa18xLmRlZmF1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9oYTogJ2VuZGxpY2ggenUgSGF1c2UgPSknXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJET0hvbWUuYXR0YWNoVG9TZXJ2ZXJzID0gW1wiV2ViU2VydmVyXCJdO1xuICAgIHJldHVybiBCRE9Ib21lO1xufVxuZXhwb3J0cy5CRE9Ib21lRmFjdG9yeSA9IEJET0hvbWVGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFNHOXRaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2Y205MWRHVnpMMEpFVDBodmJXVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlEwRXNNa1ZCUVRKRE8wRkJVek5ETEZOQlFXZENMR05CUVdNc1EwRkJjME1zU1VGQlZ6dEpRVk16UlN4TlFVRmxMRTlCUVZFc1UwRkJVU3hKUVVGSk8xRkJRVzVET3p0WlFXZENWeXh2UWtGQlpTeEhRVUZITEVkQlFVY3NRMEZCUXp0WlFWRnVRaXh0UWtGQll5eEhRVUZITEd0Q1FVRlJMRU5CUVVNN1VVRmplRU1zUTBGQlF6dFJRVXhoTEV0QlFVc3NRMEZCUXl4alFVRmpPMWxCUXpGQ0xFOUJRVTg3WjBKQlEwZ3NSMEZCUnl4RlFVRkZMSEZDUVVGeFFqdGhRVU0zUWl4RFFVRkRPMUZCUTA0c1EwRkJRenM3U1VFMVFtRXNkVUpCUVdVc1IwRkJZU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzBsQkswSTFSQ3hQUVVGUExFOUJRVThzUTBGQlF6dEJRVU51UWl4RFFVRkRPMEZCYkVSRUxIZERRV3RFUXlKOSIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL3NvdXJjZS9hcHAvdXRpbHMgc3luYyByZWN1cnNpdmVcIjsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCJyZWZsZWN0LW1ldGFkYXRhXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvdXRpbFwiKTtcbmNvbnN0IEJhc2VDb25zdHJ1Y3Rvcl8xID0gcmVxdWlyZShcIn5iZG8vbGliL0Jhc2VDb25zdHJ1Y3RvclwiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IGZyYW1ld29ya18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZnJhbWV3b3JrXCIpO1xuY29uc3QgdHlwZV9ncmFwaHFsXzEgPSByZXF1aXJlKFwidHlwZS1ncmFwaHFsXCIpO1xuZnVuY3Rpb24gd2F0Y2hlZChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nS2V5ID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGRlY29yYXRvclNldHRpbmdzID0gZnJhbWV3b3JrXzEuYmVmb3JlRGVzY3JpcHRvcih0YXJnZXQsIHN0cmluZ0tleSwgXCJkZWZpbmVkV2F0Y2hlcnNcIiwgeyBwYXJhbXMgfSk7XG4gICAgICAgIGZyYW1ld29ya18xLmNyZWF0ZURlY29yYXRvckRlc2NyaXB0b3IodGFyZ2V0LCBzdHJpbmdLZXksIFwiV2F0Y2hlZFwiLCBkZWNvcmF0b3JTZXR0aW5ncyk7XG4gICAgfTtcbn1cbmV4cG9ydHMud2F0Y2hlZCA9IHdhdGNoZWQ7XG5mdW5jdGlvbiBwcm9wZXJ0eSh0eXBlRnVuYywgcGFyYW1zKSB7XG4gICAgcmV0dXJuICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKHR5cGVGdW5jICYmICEodHlwZUZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbikgJiYgIXBhcmFtcylcbiAgICAgICAgICAgIHBhcmFtcyA9IHR5cGVGdW5jO1xuICAgICAgICBpZiAodHlwZUZ1bmMgJiYgISh0eXBlRnVuYyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSlcbiAgICAgICAgICAgIHR5cGVGdW5jID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXBhcmFtcyB8fCAhKHBhcmFtcyBpbnN0YW5jZW9mIE9iamVjdCkpXG4gICAgICAgICAgICBwYXJhbXMgPSB7fTtcbiAgICAgICAgY29uc3QgZGVjb3JhdG9yU2V0dGluZ3MgPSBmcmFtZXdvcmtfMS5iZWZvcmVEZXNjcmlwdG9yKHRhcmdldCwgc3RyaW5nS2V5LCBcImRlZmluZWRQcm9wZXJ0aWVzXCIsIHsgdHlwZUZ1bmMsIHBhcmFtcyB9KTtcbiAgICAgICAgZnJhbWV3b3JrXzEuY3JlYXRlRGVjb3JhdG9yRGVzY3JpcHRvcih0YXJnZXQsIHN0cmluZ0tleSwgXCJQcm9wZXJ0eVwiLCBkZWNvcmF0b3JTZXR0aW5ncyk7XG4gICAgfTtcbn1cbmV4cG9ydHMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbmZ1bmN0aW9uIGF0dHJpYnV0ZSh0eXBlRnVuYywgcGFyYW1zKSB7XG4gICAgcmV0dXJuICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKHR5cGVGdW5jICYmICEodHlwZUZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbikgJiYgIXBhcmFtcylcbiAgICAgICAgICAgIHBhcmFtcyA9IHR5cGVGdW5jO1xuICAgICAgICBpZiAodHlwZUZ1bmMgJiYgISh0eXBlRnVuYyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSlcbiAgICAgICAgICAgIHR5cGVGdW5jID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXBhcmFtcyB8fCAhKHBhcmFtcyBpbnN0YW5jZW9mIE9iamVjdCkpXG4gICAgICAgICAgICBwYXJhbXMgPSB7fTtcbiAgICAgICAgaWYgKHR5cGVGdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24gJiYgcGFyYW1zKVxuICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuRmllbGQodHlwZUZ1bmMsIHBhcmFtcykodGFyZ2V0LCBrZXkpO1xuICAgICAgICBlbHNlIGlmICh0eXBlRnVuYyBpbnN0YW5jZW9mIEZ1bmN0aW9uKVxuICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuRmllbGQodHlwZUZ1bmMpKHRhcmdldCwga2V5KTtcbiAgICAgICAgZWxzZSBpZiAocGFyYW1zKVxuICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuRmllbGQocGFyYW1zKSh0YXJnZXQsIGtleSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLkZpZWxkKCkodGFyZ2V0LCBrZXkpO1xuICAgICAgICBjb25zdCBkZWNvcmF0b3JTZXR0aW5ncyA9IGZyYW1ld29ya18xLmJlZm9yZURlc2NyaXB0b3IodGFyZ2V0LCBzdHJpbmdLZXksIFwiZGVmaW5lZEF0dHJpYnV0ZXNcIiwgeyB0eXBlRnVuYywgcGFyYW1zIH0pO1xuICAgICAgICBmcmFtZXdvcmtfMS5jcmVhdGVEZWNvcmF0b3JEZXNjcmlwdG9yKHRhcmdldCwgc3RyaW5nS2V5LCBcIkF0dHJpYnV0ZVwiLCBkZWNvcmF0b3JTZXR0aW5ncyk7XG4gICAgfTtcbn1cbmV4cG9ydHMuYXR0cmlidXRlID0gYXR0cmlidXRlO1xuZnVuY3Rpb24gYmFzZUNvbnN0cnVjdG9yKG5hbWUsIHBhcmFtcywgaW5kZXggPSAwKSB7XG4gICAgcmV0dXJuIChjdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihjdG9yKTtcbiAgICAgICAgaWYgKGZyYW1ld29ya18xLmlzQmFzZUNvbnN0cnVjdG9yKHByb3RvdHlwZSkpXG4gICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY3RvciwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSkpO1xuICAgICAgICBpZiAobmFtZSAmJiAodHlwZW9mIG5hbWUgPT09IFwibnVtYmVyXCIpKVxuICAgICAgICAgICAgaW5kZXggPSBuYW1lO1xuICAgICAgICBpZiAobmFtZSAmJiAodHlwZW9mIG5hbWUgPT09IFwib2JqZWN0XCIpKVxuICAgICAgICAgICAgcGFyYW1zID0gbmFtZTtcbiAgICAgICAgaWYgKG5hbWUgJiYgKCh0eXBlb2YgbmFtZSA9PT0gXCJvYmplY3RcIikgfHwgKHR5cGVvZiBuYW1lID09PSBcIm51bWJlclwiKSkpXG4gICAgICAgICAgICBuYW1lID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAocGFyYW1zICYmICh0eXBlb2YgcGFyYW1zID09PSBcIm51bWJlclwiKSlcbiAgICAgICAgICAgIGluZGV4ID0gcGFyYW1zO1xuICAgICAgICBpZiAocGFyYW1zICYmICh0eXBlb2YgcGFyYW1zID09PSBcIm51bWJlclwiKSlcbiAgICAgICAgICAgIHBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGZyYW1ld29ya18xLmlzQkRPTW9kZWwoY3RvcikpIHtcbiAgICAgICAgICAgIGlmIChuYW1lICYmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIikgJiYgcGFyYW1zICYmICh0eXBlb2YgcGFyYW1zID09PSBcIm9iamVjdFwiKSkge1xuICAgICAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLk9iamVjdFR5cGUobmFtZSwgcGFyYW1zKShjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUgJiYgKHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLk9iamVjdFR5cGUobmFtZSkoY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXJhbXMgJiYgKHR5cGVvZiBwYXJhbXMgPT09IFwib2JqZWN0XCIpKSB7XG4gICAgICAgICAgICAgICAgdHlwZV9ncmFwaHFsXzEuT2JqZWN0VHlwZShwYXJhbXMpKGN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHR5cGVfZ3JhcGhxbF8xLk9iamVjdFR5cGUoKShjdG9yKTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMgJiYgKHR5cGVvZiBwYXJhbXMgPT09IFwib2JqZWN0XCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkNvbGxlY3Rpb25OYW1lID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShjdG9yLCBcImNvbGxlY3Rpb25OYW1lXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZEYXRhYmFzZU5hbWUgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGN0b3IsIFwiZGF0YWJhc2VOYW1lXCIpO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEoY3RvciwgXCJjb2xsZWN0aW9uTmFtZVwiLCBwYXJhbXMuY29sbGVjdGlvbk5hbWUgfHwgcHJldkNvbGxlY3Rpb25OYW1lIHx8IFwiZGVmYXVsdFwiKTtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLmRlZmluZU1ldGFkYXRhKGN0b3IsIFwiZGF0YWJhc2VOYW1lXCIsIHBhcmFtcy5kYXRhYmFzZU5hbWUgfHwgcHJldkRhdGFiYXNlTmFtZSB8fCBcImRlZmF1bHRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcyAmJiAodHlwZW9mIHBhcmFtcyA9PT0gXCJvYmplY3RcIiAmJiBwYXJhbXMuaXNBYnN0cmFjdCkpXG4gICAgICAgICAgICByZXR1cm4gY3RvcjtcbiAgICAgICAgY29uc3QgQmFzZUNvbnN0cnVjdG9yID0gQmFzZUNvbnN0cnVjdG9yXzEuYmFzZUNvbnN0cnVjdG9yRmFjdG9yeShjdG9yLCBpbmRleCk7XG4gICAgICAgIGlmIChmcmFtZXdvcmtfMS5pc0NvbXBvbmVudChjdG9yKSkge1xuICAgICAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHV0aWxfMS5wYXNjYWxDYXNlMmtlYmFiQ2FzZShjdG9yLm5hbWUpLCBCYXNlQ29uc3RydWN0b3IsIHtcbiAgICAgICAgICAgICAgICBleHRlbmRzOiBCYXNlQ29uc3RydWN0b3IuZXh0ZW5kc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEJhc2VDb25zdHJ1Y3RvcjtcbiAgICB9O1xufVxuZXhwb3J0cy5iYXNlQ29uc3RydWN0b3IgPSBiYXNlQ29uc3RydWN0b3I7XG5leHBvcnRzLnF1ZXJ5ID0gdHlwZV9ncmFwaHFsXzEuUXVlcnk7XG5leHBvcnRzLmFyZyA9IHR5cGVfZ3JhcGhxbF8xLkFyZztcbmV4cG9ydHMuYXJncyA9IHR5cGVfZ3JhcGhxbF8xLkFyZ3M7XG5leHBvcnRzLnJlc29sdmVyID0gdHlwZV9ncmFwaHFsXzEuUmVzb2x2ZXI7XG5leHBvcnRzLnJvb3QgPSB0eXBlX2dyYXBocWxfMS5Sb290O1xuZXhwb3J0cy5tdXRhdGlvbiA9IHR5cGVfZ3JhcGhxbF8xLk11dGF0aW9uO1xuZXhwb3J0cy5zdWJzY3JpcHRpb24gPSB0eXBlX2dyYXBocWxfMS5TdWJzY3JpcHRpb247XG5leHBvcnRzLnB1YlN1YiA9IHR5cGVfZ3JhcGhxbF8xLlB1YlN1YjtcbmV4cG9ydHMuaW5wdXRUeXBlID0gdHlwZV9ncmFwaHFsXzEuSW5wdXRUeXBlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWkdWamIzSmhkRzl5Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmRYUnBiSE12WkdWamIzSmhkRzl5Y3k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTERSQ1FVRXdRanRCUVVNeFFpd3dRMEZCZFVRN1FVRkpka1FzT0VSQlFYZEdPMEZCUTNoR0xHdEVRVUZyUlR0QlFVTnNSU3h2UkVGQkswZzdRVUZGTDBnc0swTkJXWE5DTzBGQmEwSjBRaXhUUVVGblFpeFBRVUZQTEVOQlFVTXNVMEZCZVVJc1JVRkJSVHRKUVVNdlF5eFBRVUZQTEVOQlFVTXNUVUZCVnl4RlFVRkZMRWRCUVc5Q0xFVkJRVVVzUlVGQlJUdFJRVU42UXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZEYWtNc1RVRkJUU3hwUWtGQmFVSXNSMEZCUnl3MFFrRkJaMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNVMEZCVXl4RlFVRkZMR2xDUVVGcFFpeEZRVUZGTEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNM1JpeHhRMEZCZVVJc1EwRkJReXhOUVVGTkxFVkJRVVVzVTBGQlV5eEZRVUZGTEZOQlFWTXNSVUZCUlN4cFFrRkJhVUlzUTBGQlF5eERRVUZETzBsQlF5OUZMRU5CUVVNc1EwRkJRenRCUVVOT0xFTkJRVU03UVVGT1JDd3dRa0ZOUXp0QlFXZENSQ3hUUVVGblFpeFJRVUZSTEVOQlFVTXNVVUZCTWtJc1JVRkJSU3hOUVVGM1FqdEpRVU14UlN4UFFVRlBMRU5CUVVNc1RVRkJWeXhGUVVGRkxFZEJRVzlDTEVWQlFVVXNSVUZCUlR0UlFVTjZReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkhha01zU1VGQlNTeFJRVUZSTEVsQlFVa3NRMEZCUXl4RFFVRkRMRkZCUVZFc1dVRkJXU3hSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMDdXVUZCUlN4TlFVRk5MRWRCUVVjc1VVRkJVU3hEUVVGRE8xRkJRemxGTEVsQlFVa3NVVUZCVVN4SlFVRkpMRU5CUVVNc1EwRkJReXhSUVVGUkxGbEJRVmtzVVVGQlVTeERRVUZETzFsQlFVVXNVVUZCVVN4SFFVRkhMRk5CUVZNc1EwRkJRenRSUVVOMFJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJReXhOUVVGTkxGbEJRVmtzVFVGQlRTeERRVUZETzFsQlFVVXNUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVkNFJDeE5RVUZOTEdsQ1FVRnBRaXhIUVVGSExEUkNRVUZuUWl4RFFVRkRMRTFCUVUwc1JVRkJSU3hUUVVGVExFVkJRVVVzYlVKQlFXMUNMRVZCUVVVc1JVRkJSU3hSUVVGUkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTjZSeXh4UTBGQmVVSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1UwRkJVeXhGUVVGRkxGVkJRVlVzUlVGQlJTeHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8wbEJRMmhHTEVOQlFVTXNRMEZCUXp0QlFVTk9MRU5CUVVNN1FVRmlSQ3cwUWtGaFF6dEJRWEZDUkN4VFFVRm5RaXhUUVVGVExFTkJRVU1zVVVGQk1rSXNSVUZCUlN4TlFVRjVRanRKUVVNMVJTeFBRVUZQTEVOQlFVTXNUVUZCVnl4RlFVRkZMRWRCUVc5Q0xFVkJRVVVzUlVGQlJUdFJRVU42UXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZIYWtNc1NVRkJTU3hSUVVGUkxFbEJRVWtzUTBGQlF5eERRVUZETEZGQlFWRXNXVUZCV1N4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTA3V1VGQlJTeE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRPMUZCUXpsRkxFbEJRVWtzVVVGQlVTeEpRVUZKTEVOQlFVTXNRMEZCUXl4UlFVRlJMRmxCUVZrc1VVRkJVU3hEUVVGRE8xbEJRVVVzVVVGQlVTeEhRVUZITEZOQlFWTXNRMEZCUXp0UlFVTjBSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXl4TlFVRk5MRmxCUVZrc1RVRkJUU3hEUVVGRE8xbEJRVVVzVFVGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVZDRSQ3hKUVVGSkxGRkJRVkVzV1VGQldTeFJRVUZSTEVsQlFVa3NUVUZCVFR0WlFVRkZMRzlDUVVGTExFTkJRVU1zVVVGQlVTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dGhRVU0xUlN4SlFVRkpMRkZCUVZFc1dVRkJXU3hSUVVGUk8xbEJRVVVzYjBKQlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdZVUZETDBRc1NVRkJTU3hOUVVGTk8xbEJRVVVzYjBKQlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdPMWxCUTNaRExHOUNRVUZMTEVWQlFVVXNRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGSE1VSXNUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5dzBRa0ZCWjBJc1EwRkJReXhOUVVGTkxFVkJRVVVzVTBGQlV5eEZRVUZGTEcxQ1FVRnRRaXhGUVVGRkxFVkJRVVVzVVVGQlVTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRla2NzY1VOQlFYbENMRU5CUVVNc1RVRkJUU3hGUVVGRkxGTkJRVk1zUlVGQlJTeFhRVUZYTEVWQlFVVXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF6dEpRVU5xUml4RFFVRkRMRU5CUVVNN1FVRkRUaXhEUVVGRE8wRkJia0pFTERoQ1FXMUNRenRCUVdORUxGTkJRV2RDTEdWQlFXVXNRMEZCUXl4SlFVRnJRaXhGUVVGRkxFMUJRV2RDTEVWQlFVVXNVVUZCWjBJc1EwRkJRenRKUVVWdVJpeFBRVUZQTEVOQlFVTXNTVUZCVXl4RlFVRkZMRVZCUVVVN1VVRkRha0lzVFVGQlRTeFRRVUZUTEVkQlFVY3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU01UXl4SlFVRkpMRFpDUVVGcFFpeERRVUZETEZOQlFWTXNRMEZCUXp0WlFVRkZMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVWRvUnl4SlFVRkpMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeExRVUZMTEZGQlFWRXNRMEZCUXp0WlFVRkZMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRGNrUXNTVUZCU1N4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFbEJRVWtzUzBGQlN5eFJRVUZSTEVOQlFVTTdXVUZCUlN4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRM1JFTEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhQUVVGUExFbEJRVWtzUzBGQlN5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1NVRkJTU3hMUVVGTExGRkJRVkVzUTBGQlF5eERRVUZETzFsQlFVVXNTVUZCU1N4SFFVRkhMRk5CUVZNc1EwRkJRenRSUVVONlJpeEpRVUZKTEUxQlFVMHNTVUZCU1N4RFFVRkRMRTlCUVU4c1RVRkJUU3hMUVVGTExGRkJRVkVzUTBGQlF6dFpRVUZGTEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRNMFFzU1VGQlNTeE5RVUZOTEVsQlFVa3NRMEZCUXl4UFFVRlBMRTFCUVUwc1MwRkJTeXhSUVVGUkxFTkJRVU03V1VGQlJTeE5RVUZOTEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUlM5RUxFbEJRVWtzYzBKQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVWc1FpeEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1NVRkJTU3hMUVVGTExGRkJRVkVzUTBGQlF5eEpRVUZKTEUxQlFVMHNTVUZCU1N4RFFVRkRMRTlCUVU4c1RVRkJUU3hMUVVGTExGRkJRVkVzUTBGQlF5eEZRVUZGTzJkQ1FVTTVSU3g1UWtGQlZTeERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dGhRVU5zUXp0cFFrRkJUU3hKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNTVUZCU1N4TFFVRkxMRkZCUVZFc1EwRkJReXhGUVVGRk8yZENRVU16UXl4NVFrRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMkZCUXpGQ08ybENRVUZOTEVsQlFVa3NUVUZCVFN4SlFVRkpMRU5CUVVNc1QwRkJUeXhOUVVGTkxFdEJRVXNzVVVGQlVTeERRVUZETEVWQlFVVTdaMEpCUXk5RExIbENRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WVVGRE5VSTdPMmRDUVVGTkxIbENRVUZWTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVjeFFpeEpRVUZKTEUxQlFVMHNTVUZCU1N4RFFVRkRMRTlCUVU4c1RVRkJUU3hMUVVGTExGRkJRVkVzUTBGQlF5eEZRVUZGTzJkQ1FVTjRReXhOUVVGTkxHdENRVUZyUWl4SFFVRkhMSE5DUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTEdkQ1FVRm5RaXhEUVVGRExFTkJRVU03WjBKQlF5OUVMRTFCUVUwc1owSkJRV2RDTEVkQlFVY3NjMEpCUVZjc1EwRkJReXhKUVVGSkxFVkJRVVVzWTBGQll5eERRVUZETEVOQlFVTTdaMEpCUXpORUxIbENRVUZqTEVOQlFVTXNTVUZCU1N4RlFVRkZMR2RDUVVGblFpeEZRVUZGTEUxQlFVMHNRMEZCUXl4alFVRmpMRWxCUVVrc2EwSkJRV3RDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNN1owSkJRMnBITEhsQ1FVRmpMRU5CUVVNc1NVRkJTU3hGUVVGRkxHTkJRV01zUlVGQlJTeE5RVUZOTEVOQlFVTXNXVUZCV1N4SlFVRkpMR2RDUVVGblFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRPMkZCUXpsR08xTkJRMG83VVVGRFJDeEpRVUZKTEUxQlFVMHNTVUZCU1N4RFFVRkRMRTlCUVU4c1RVRkJUU3hMUVVGTExGRkJRVkVzU1VGQlNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRPMWxCUVVVc1QwRkJUeXhKUVVGSkxFTkJRVU03VVVGRk4wVXNUVUZCVFN4bFFVRmxMRWRCUVVjc2QwTkJRWE5DTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJSVFZFTEVsQlFVa3NkVUpCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU51UWl4alFVRmpMRU5CUVVNc1RVRkJUU3hEUVVGRExESkNRVUZ2UWl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeGxRVUZsTEVWQlFVVTdaMEpCUTNCRkxFOUJRVThzUlVGQlJTeGxRVUZsTEVOQlFVTXNUMEZCVHp0aFFVTnVReXhEUVVGRExFTkJRVU03VTBGRFRqdFJRVU5FTEU5QlFVOHNaVUZCWlN4RFFVRkRPMGxCUXpOQ0xFTkJRVU1zUTBGQlF6dEJRVU5PTEVOQlFVTTdRVUV4UTBRc01FTkJNRU5ETzBGQlJWVXNVVUZCUVN4TFFVRkxMRWRCUVVjc2IwSkJRVXNzUTBGQlF6dEJRVU5rTEZGQlFVRXNSMEZCUnl4SFFVRkhMR3RDUVVGSExFTkJRVU03UVVGRFZpeFJRVUZCTEVsQlFVa3NSMEZCUnl4dFFrRkJTU3hEUVVGRE8wRkJRMW9zVVVGQlFTeFJRVUZSTEVkQlFVY3NkVUpCUVZFc1EwRkJRenRCUVVOd1FpeFJRVUZCTEVsQlFVa3NSMEZCUnl4dFFrRkJTU3hEUVVGRE8wRkJRMW9zVVVGQlFTeFJRVUZSTEVkQlFVY3NkVUpCUVZFc1EwRkJRenRCUVVOd1FpeFJRVUZCTEZsQlFWa3NSMEZCUnl3eVFrRkJXU3hEUVVGRE8wRkJRelZDTEZGQlFVRXNUVUZCVFN4SFFVRkhMSEZDUVVGTkxFTkJRVU03UVVGRGFFSXNVVUZCUVN4VFFVRlRMRWRCUVVjc2QwSkJRVk1zUTBGQlF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBudW5qdWNrcyA9IHRzbGliXzEuX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJudW5qdWNrc1wiKSk7XG5mdW5jdGlvbiBpc05vZGVKUygpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmlzTm9kZUpTID0gaXNOb2RlSlM7XG5mdW5jdGlvbiBpc0Jyb3dzZXIoKSB7XG4gICAgcmV0dXJuICFpc05vZGVKUygpO1xufVxuZXhwb3J0cy5pc0Jyb3dzZXIgPSBpc0Jyb3dzZXI7XG5leHBvcnRzLnRlbXBsYXRlRW52aXJvbm1lbnQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG5vQ2FjaGUgPSBnbG9iYWwucHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyB0cnVlIDogZmFsc2U7XG4gICAgY29uc3QgZW52ID0gbmV3IG51bmp1Y2tzLkVudmlyb25tZW50KHtcbiAgICAgICAgZ2V0U291cmNlOiAocGF0aCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3JjOiByZXF1aXJlKHBhdGgpLCBwYXRoLCBub0NhY2hlIH07XG4gICAgICAgIH1cbiAgICB9LCB7IG5vQ2FjaGUgfSk7XG4gICAgZW52LmFkZEZpbHRlcignanNvbicsICh2YWx1ZSwgc3BhY2VzKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIG51bmp1Y2tzLnJ1bnRpbWUuU2FmZVN0cmluZykge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgbnVuanVja3MucnVudGltZS5TYWZlU3RyaW5nKEpTT04uc3RyaW5naWZ5KHZhbHVlLCBudWxsLCBzcGFjZXMpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZW52O1xufSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpXNTJhWEp2Ym0xbGJuUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMM1YwYVd4ekwyVnVkbWx5YjI1dFpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVRkJMREpFUVVGeFF6dEJRVkZ5UXl4VFFVRm5RaXhSUVVGUk8wbEJRM0JDTEVsQlFVa3NUMEZCVHl4TlFVRk5MRXRCUVVzc1YwRkJWeXhKUVVGSkxFOUJRVThzVDBGQlR5eExRVUZMTEZGQlFWRXNSVUZCUlR0UlFVTTVSQ3hQUVVGUExFbEJRVWtzUTBGQlF6dExRVU5tTzBsQlEwUXNUMEZCVHl4TFFVRkxMRU5CUVVNN1FVRkRha0lzUTBGQlF6dEJRVXhFTERSQ1FVdERPMEZCVVVRc1UwRkJaMElzVTBGQlV6dEpRVU55UWl4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03UVVGRGRrSXNRMEZCUXp0QlFVWkVMRGhDUVVWRE8wRkJTMWtzVVVGQlFTeHRRa0ZCYlVJc1IwRkJSeXhEUVVGRExFZEJRVWNzUlVGQlJUdEpRVU55UXl4TlFVRk5MRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRXRCUVVzc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJRenRKUVVNM1JTeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRGFrTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1NVRkJXU3hGUVVGRkxFVkJRVVU3V1VGRGVFSXNUMEZCVHl4RlFVRkZMRWRCUVVjc1JVRkJSU3hQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNTVUZCU1N4RlFVRkZMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJRMnBFTEVOQlFVTTdTMEZEU2l4RlFVRkZMRVZCUVVVc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVVZvUWl4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4TlFVRk5MRVZCUVVVc1JVRkJSVHRSUVVOd1F5eEpRVUZKTEV0QlFVc3NXVUZCV1N4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUlVGQlJUdFpRVU01UXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFOQlF6VkNPMUZCUTBRc1QwRkJUeXhKUVVGSkxGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eEZRVUZGTEVsQlFVa3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMmhHTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTBnc1QwRkJUeXhIUVVGSExFTkJRVU03UVVGRFppeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBCaW5kaW5nXzEgPSByZXF1aXJlKFwifmJkby9saWIvQmluZGluZ1wiKTtcbmNvbnN0IEF0dHJpYnV0ZV8xID0gcmVxdWlyZShcIn5iZG8vbGliL0F0dHJpYnV0ZVwiKTtcbmNvbnN0IFByb3BlcnR5XzEgPSByZXF1aXJlKFwifmJkby9saWIvUHJvcGVydHlcIik7XG5jb25zdCBXYXRjaGVkXzEgPSByZXF1aXJlKFwifmJkby9saWIvV2F0Y2hlZFwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBlbnZpcm9ubWVudF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZW52aXJvbm1lbnRcIik7XG5jb25zdCBtZXRhZGF0YV8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvbWV0YWRhdGFcIik7XG5mdW5jdGlvbiBiZWZvcmVEZXNjcmlwdG9yKHRhcmdldCwga2V5LCBtRGF0YU5hbWUsIHBhcmFtcykge1xuICAgIGlmICghUmVmbGVjdC5oYXNNZXRhZGF0YShtRGF0YU5hbWUsIHRhcmdldCkpXG4gICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lTWV0YWRhdGEodGFyZ2V0LCBtRGF0YU5hbWUsIG5ldyBNYXAoKSk7XG4gICAgY29uc3QgbWFwID0gbWV0YWRhdGFfMS5nZXRNZXRhZGF0YSh0YXJnZXQsIG1EYXRhTmFtZSk7XG4gICAgY29uc3Qgb2xkRGVjb3JhdG9yU2V0dGluZ3MgPSBtYXAuZ2V0KGtleSkgfHwge307XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB1dGlsXzEubWVyZ2Uob2xkRGVjb3JhdG9yU2V0dGluZ3MsIHBhcmFtcyk7XG4gICAgbWFwLnNldChrZXksIHNldHRpbmdzKTtcbiAgICByZXR1cm4gc2V0dGluZ3M7XG59XG5leHBvcnRzLmJlZm9yZURlc2NyaXB0b3IgPSBiZWZvcmVEZXNjcmlwdG9yO1xuZnVuY3Rpb24gZ2V0dGVyKGluc3RhbmNlLCBrZXksIG5zID0gXCJcIikge1xuICAgIGxldCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICBpZiAobnMpXG4gICAgICAgIHN0cmluZ0tleSA9IGAke25zfToke2tleX1gO1xuICAgIGlmICghbWV0YWRhdGFfMS5nZXRNZXRhZGF0YShpbnN0YW5jZSwgXCJub3JtYWxGdW5jdGlvbmFsaXR5XCIpKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IG1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwiZGVmYXVsdFNldHRpbmdzXCIpIHx8IHt9O1xuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQoZGVmYXVsdFNldHRpbmdzLCBzdHJpbmdLZXkpO1xuICAgIH1cbiAgICBjb25zdCBtRGF0YSA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YShpbnN0YW5jZSwgc3RyaW5nS2V5KTtcbiAgICBpZiAobURhdGEpXG4gICAgICAgIHJldHVybiBtRGF0YS52YWx1ZU9mKCk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmV4cG9ydHMuZ2V0dGVyID0gZ2V0dGVyO1xuZnVuY3Rpb24gc2V0dGVyKGluc3RhbmNlLCBrZXksIG5ld1ZhbCwgbnMgPSBcIlwiKSB7XG4gICAgbGV0IHN0cmluZ0tleSA9IGtleS50b1N0cmluZygpO1xuICAgIGlmIChucylcbiAgICAgICAgc3RyaW5nS2V5ID0gYCR7bnN9OiR7a2V5fWA7XG4gICAgaWYgKCFucyAmJiBpbnN0YW5jZVtzdHJpbmdLZXldID09PSBuZXdWYWwpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAoIW1ldGFkYXRhXzEuZ2V0TWV0YWRhdGEoaW5zdGFuY2UsIFwibm9ybWFsRnVuY3Rpb25hbGl0eVwiKSkge1xuICAgICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBtZXRhZGF0YV8xLmdldE1ldGFkYXRhKGluc3RhbmNlLCBcImRlZmF1bHRTZXR0aW5nc1wiKSB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0U2V0dGluZ3MsIHsgW3N0cmluZ0tleV06IG5ld1ZhbCB9KTtcbiAgICAgICAgbWV0YWRhdGFfMS5kZWZpbmVNZXRhZGF0YShpbnN0YW5jZSwgXCJkZWZhdWx0U2V0dGluZ3NcIiwgZGVmYXVsdFNldHRpbmdzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtRGF0YSA9IG1ldGFkYXRhXzEuZ2V0V2lsZGNhcmRNZXRhZGF0YShpbnN0YW5jZSwgc3RyaW5nS2V5KTtcbiAgICBpZiAobmV3VmFsIGluc3RhbmNlb2YgQmluZGluZ18xLkJpbmRpbmcpIHtcbiAgICAgICAgbmV3VmFsLmluc3RhbGwoaW5zdGFuY2UsIGtleSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgbURhdGEuc2V0VmFsdWUobmV3VmFsKTtcbn1cbmV4cG9ydHMuc2V0dGVyID0gc2V0dGVyO1xuZnVuY3Rpb24gY3JlYXRlRGVjb3JhdG9yRGVzY3JpcHRvcih0YXJnZXQsIGtleSwgdHlwZSwgcGFyYW1zKSB7XG4gICAgY29uc3QgcHJvcERlc2MgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgY29uc3Qgc3RyaW5nS2V5ID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIGtleSk7XG4gICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGRlY29yYXRvckdldHRlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIGdldHRlcih0aGF0LCBzdHJpbmdLZXkpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIGRlY29yYXRvclNldHRlcihuZXdWYWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgbURhdGEgPSBtZXRhZGF0YV8xLmdldFdpbGRjYXJkTWV0YWRhdGEodGhpcywga2V5KTtcbiAgICAgICAgICAgIGxldCBmaWVsZDtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcIkF0dHJpYnV0ZVwiKSB7XG4gICAgICAgICAgICAgICAgZmllbGQgPSBuZXcgQXR0cmlidXRlXzEuQXR0cmlidXRlKHRoYXQsIHN0cmluZ0tleSwgcGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiUHJvcGVydHlcIikge1xuICAgICAgICAgICAgICAgIGZpZWxkID0gbmV3IFByb3BlcnR5XzEuUHJvcGVydHkodGhhdCwgc3RyaW5nS2V5LCBwYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGZpZWxkID0gbmV3IFdhdGNoZWRfMS5XYXRjaGVkKHRoYXQsIHN0cmluZ0tleSwgcGFyYW1zKTtcbiAgICAgICAgICAgIGlmIChtRGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICgobURhdGEgaW5zdGFuY2VvZiBBdHRyaWJ1dGVfMS5BdHRyaWJ1dGUgfHwgbURhdGEgaW5zdGFuY2VvZiBQcm9wZXJ0eV8xLlByb3BlcnR5KSAmJiBmaWVsZCBpbnN0YW5jZW9mIFdhdGNoZWRfMS5XYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLnNldFN1Yk9iamVjdChtRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lV2lsZGNhcmRNZXRhZGF0YSh0aGlzLCBzdHJpbmdLZXksIGZpZWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoKGZpZWxkIGluc3RhbmNlb2YgUHJvcGVydHlfMS5Qcm9wZXJ0eSB8fCBmaWVsZCBpbnN0YW5jZW9mIEF0dHJpYnV0ZV8xLkF0dHJpYnV0ZSkgJiYgbURhdGEgaW5zdGFuY2VvZiBXYXRjaGVkXzEuV2F0Y2hlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW1EYXRhLnN1Yk9iamVjdClcbiAgICAgICAgICAgICAgICAgICAgICAgIG1EYXRhLnNldFN1Yk9iamVjdChmaWVsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIG1ldGFkYXRhXzEuZGVmaW5lV2lsZGNhcmRNZXRhZGF0YSh0aGlzLCBzdHJpbmdLZXksIGZpZWxkKTtcbiAgICAgICAgICAgIGlmICgoKHR5cGUgPT09IFwiQXR0cmlidXRlXCIgfHwgdHlwZSA9PT0gXCJQcm9wZXJ0eVwiKSAmJiAhKG1EYXRhIGluc3RhbmNlb2YgV2F0Y2hlZF8xLldhdGNoZWQpKSB8fCB0eXBlID09PSBcIldhdGNoZWRcIikge1xuICAgICAgICAgICAgICAgIHNldHRlcih0aGF0LCBzdHJpbmdLZXksIG5ld1ZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcERlc2MgJiYgcHJvcERlc2Muc2V0ICYmIHByb3BEZXNjLnNldC5uYW1lID09PSBcImRlY29yYXRvclNldHRlclwiKVxuICAgICAgICAgICAgICAgIHByb3BEZXNjLnNldC5jYWxsKHRoaXMsIG5ld1ZhbCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xufVxuZXhwb3J0cy5jcmVhdGVEZWNvcmF0b3JEZXNjcmlwdG9yID0gY3JlYXRlRGVjb3JhdG9yRGVzY3JpcHRvcjtcbmZ1bmN0aW9uIGlzQmFzZUNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiICYmIHZhbHVlLm5hbWUgPT09IFwiQmFzZUNvbnN0cnVjdG9yXCIpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIkJhc2VDb25zdHJ1Y3RvclwiKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmlzQmFzZUNvbnN0cnVjdG9yID0gaXNCYXNlQ29uc3RydWN0b3I7XG5mdW5jdGlvbiBpc0JET01vZGVsKHZhbHVlKSB7XG4gICAgaWYgKFwiaXNCRE9Nb2RlbFwiIGluIHZhbHVlKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmlzQkRPTW9kZWwgPSBpc0JET01vZGVsO1xuZnVuY3Rpb24gaXNDbGllbnRNb2RlbCh2YWx1ZSkge1xuICAgIGlmIChpc0JET01vZGVsKHZhbHVlKSAmJiBcImlzQ2xpZW50TW9kZWxcIiBpbiB2YWx1ZSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc0NsaWVudE1vZGVsID0gaXNDbGllbnRNb2RlbDtcbmZ1bmN0aW9uIGlzU2VydmVyTW9kZWwodmFsdWUpIHtcbiAgICBpZiAoaXNCRE9Nb2RlbCh2YWx1ZSkgJiYgXCJpc1NlcnZlck1vZGVsXCIgaW4gdmFsdWUpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaXNTZXJ2ZXJNb2RlbCA9IGlzU2VydmVyTW9kZWw7XG5mdW5jdGlvbiBpc0NvbXBvbmVudCh2YWx1ZSkge1xuICAgIGlmIChlbnZpcm9ubWVudF8xLmlzQnJvd3NlcigpICYmIFwiaXNCYXNlQ29tcG9uZW50XCIgaW4gdmFsdWUpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaXNDb21wb25lbnQgPSBpc0NvbXBvbmVudDtcbmZ1bmN0aW9uIGlzUmVmZXJlbmNlU3RyaW5nKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIilcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IHJlZlJlZ0V4ID0gL19yZWZlcmVuY2VcXDpbQS1afDAtOXxffCRdKlxcOltBLVp8MC05fFxcLXxfXSovZ2k7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUubWF0Y2gocmVmUmVnRXgpKS52YWx1ZU9mKCk7XG59XG5leHBvcnRzLmlzUmVmZXJlbmNlU3RyaW5nID0gaXNSZWZlcmVuY2VTdHJpbmc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labkpoYldWM2IzSnJMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzkxZEdsc2N5OW1jbUZ0WlhkdmNtc3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTdzRRMEZCTWtNN1FVRkRNME1zYTBSQlFXbEZPMEZCUTJwRkxHZEVRVUU0UkR0QlFVTTVSQ3c0UTBGQk1rUTdRVUZGTTBRc01FTkJRWGRETzBGQlEzaERMSGRFUVVGdFJEdEJRVU51UkN4clJFRkJLMGM3UVVFclF5OUhMRk5CUVdkQ0xHZENRVUZuUWl4RFFVczVRaXhOUVVGVExFVkJRVVVzUjBGQlRTeEZRVUZGTEZOQlFWa3NSVUZCUlN4TlFVRlRPMGxCUlhoRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRk5CUVZNc1JVRkJSU3hOUVVGTkxFTkJRVU03VVVGQlJTeDVRa0ZCWXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hUUVVGVExFVkJRVVVzU1VGQlNTeEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGR0xFMUJRVTBzUjBGQlJ5eEhRVUZITEhOQ1FVRlhMRU5CUVVNc1RVRkJUU3hGUVVGRkxGTkJRVk1zUTBGQmJVTXNRMEZCUXp0SlFVTTNSU3hOUVVGTkxHOUNRVUZ2UWl4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMGxCUTJoRUxFMUJRVTBzVVVGQlVTeEhRVUZITEZsQlFVc3NRMEZCUXl4dlFrRkJiMElzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVTnlSQ3hIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRKUVVOMlFpeFBRVUZQTEZGQlFWRXNRMEZCUXp0QlFVTndRaXhEUVVGRE8wRkJZa1FzTkVOQllVTTdRVUZoUkN4VFFVRm5RaXhOUVVGTkxFTkJRWEZFTEZGQlFWY3NSVUZCUlN4SFFVRk5MRVZCUVVVc1MwRkJZU3hGUVVGRk8wbEJRek5ITEVsQlFVa3NVMEZCVXl4SFFVRkhMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dEpRVU12UWl4SlFVRkpMRVZCUVVVN1VVRkJSU3hUUVVGVExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNN1NVRkRia01zU1VGQlNTeERRVUZETEhOQ1FVRlhMRU5CUVVNc1VVRkJVU3hGUVVGRkxIRkNRVUZ4UWl4RFFVRkRMRVZCUVVVN1VVRkRMME1zVFVGQlRTeGxRVUZsTEVkQlFVY3NjMEpCUVZjc1EwRkJReXhSUVVGUkxFVkJRVVVzYVVKQlFXbENMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRGRrVXNUMEZCVHl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExHVkJRV1VzUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXp0TFFVTnNSRHRKUVVORUxFMUJRVTBzUzBGQlN5eEhRVUZITERoQ1FVRnRRaXhEUVVGRExGRkJRVkVzUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXp0SlFVTjJSQ3hKUVVGSkxFdEJRVXM3VVVGQlJTeFBRVUZQTEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRKUVVOc1F5eFBRVUZQTEZOQlFWTXNRMEZCUXp0QlFVTnlRaXhEUVVGRE8wRkJWa1FzZDBKQlZVTTdRVUZsUkN4VFFVRm5RaXhOUVVGTkxFTkJSV2RDTEZGQlFWY3NSVUZCUlN4SFFVRk5MRVZCUVVVc1RVRkJjVUlzUlVGQlJTeExRVUZoTEVWQlFVVTdTVUZITjBZc1NVRkJTU3hUUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUXk5Q0xFbEJRVWtzUlVGQlJUdFJRVUZGTEZOQlFWTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF6dEpRVWR1UXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hKUVVGSkxGRkJRVkVzUTBGQlNTeFRRVUZUTEVOQlFVTXNTMEZCU3l4TlFVRk5PMUZCUVVVc1QwRkJUenRKUVVkeVJDeEpRVUZKTEVOQlFVTXNjMEpCUVZjc1EwRkJReXhSUVVGUkxFVkJRVVVzY1VKQlFYRkNMRU5CUVVNc1JVRkJSVHRSUVVNdlF5eE5RVUZOTEdWQlFXVXNSMEZCUnl4elFrRkJWeXhEUVVGRExGRkJRVkVzUlVGQlJTeHBRa0ZCYVVJc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU4yUlN4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExHVkJRV1VzUlVGQlJTeEZRVUZGTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU40UkN4NVFrRkJZeXhEUVVGRExGRkJRVkVzUlVGQlJTeHBRa0ZCYVVJc1JVRkJSU3hsUVVGbExFTkJRVU1zUTBGQlF6dFJRVU0zUkN4UFFVRlBPMHRCUTFZN1NVRkhSQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5dzRRa0ZCYlVJc1EwRkJReXhSUVVGUkxFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdTVUZGZGtRc1NVRkJTU3hOUVVGTkxGbEJRVmtzYVVKQlFVOHNSVUZCUlR0UlFVTXpRaXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRMUVVOcVF6czdVVUZCVFN4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBGQlEyeERMRU5CUVVNN1FVRjZRa1FzZDBKQmVVSkRPMEZCVjBRc1UwRkJaMElzZVVKQlFYbENMRU5CUjFRc1RVRkJVeXhGUVVGRkxFZEJRVTBzUlVGQlJTeEpRVUZ0UWl4RlFVRkZMRTFCUVZNN1NVRkZOMFVzVFVGQlRTeFJRVUZSTEVkQlFVY3NUMEZCVHl4RFFVRkRMSGRDUVVGM1FpeERRVUZETEUxQlFVMHNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVNdlJDeE5RVUZOTEZOQlFWTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03U1VGRmFrTXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEY0VNc1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RlFVRkZPMUZCUTJoRExFZEJRVWNzUlVGQlJTeFRRVUZUTEdWQlFXVTdXVUZEZWtJc1RVRkJUU3hKUVVGSkxFZEJRVkVzU1VGQlNTeERRVUZETzFsQlEzWkNMRTlCUVU4c1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXp0UlFVTnVReXhEUVVGRE8xRkJRMFFzUjBGQlJ5eEZRVUZGTEZOQlFWTXNaVUZCWlN4RFFVRkRMRTFCUVZjN1dVRkRja01zVFVGQlRTeEpRVUZKTEVkQlFWRXNTVUZCU1N4RFFVRkRPMWxCUTNaQ0xFMUJRVTBzUzBGQlN5eEhRVUZITERoQ1FVRnRRaXhEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVYzNReXhKUVVGSkxFdEJRVXNzUTBGQlF6dFpRVU5XTEVsQlFVa3NTVUZCU1N4TFFVRkxMRmRCUVZjc1JVRkJSVHRuUWtGRGRFSXNTMEZCU3l4SFFVRkhMRWxCUVVrc2NVSkJRVk1zUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVXl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8yRkJRMnhFTzJsQ1FVRk5MRWxCUVVrc1NVRkJTU3hMUVVGTExGVkJRVlVzUlVGQlJUdG5Ra0ZETlVJc1MwRkJTeXhIUVVGSExFbEJRVWtzYlVKQlFWRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1UwRkJVeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzJGQlEycEVPenRuUWtGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4cFFrRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeFRRVUZUTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkhjRVFzU1VGQlNTeExRVUZMTEVWQlFVVTdaMEpCUTFBc1NVRkJTU3hEUVVGRExFdEJRVXNzV1VGQldTeHhRa0ZCVXl4SlFVRkpMRXRCUVVzc1dVRkJXU3h0UWtGQlVTeERRVUZETEVsQlFVa3NTMEZCU3l4WlFVRlpMR2xDUVVGUExFVkJRVVU3YjBKQlEzWkdMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdiMEpCUXpGQ0xHbERRVUZ6UWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hUUVVGVExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdhVUpCUTJ4RU8zRkNRVUZOTEVsQlFVa3NRMEZCUXl4TFFVRkxMRmxCUVZrc2JVSkJRVkVzU1VGQlNTeExRVUZMTEZsQlFWa3NjVUpCUVZNc1EwRkJReXhKUVVGSkxFdEJRVXNzV1VGQldTeHBRa0ZCVHl4RlFVRkZPMjlDUVVNNVJpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNN2QwSkJRVVVzUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRwUWtGRGJrUTdZVUZEU2pzN1owSkJRVTBzYVVOQlFYTkNMRU5CUVVNc1NVRkJTU3hGUVVGRkxGTkJRVk1zUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTjBSQ3hKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEV0QlFVc3NWMEZCVnl4SlFVRkpMRWxCUVVrc1MwRkJTeXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNTMEZCU3l4WlFVRlpMR2xDUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NTMEZCU3l4VFFVRlRMRVZCUVVVN1owSkJRM1JITEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1UwRkJVeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzJGQlEyNURPMWxCUTBRc1NVRkJTU3hSUVVGUkxFbEJRVWtzVVVGQlVTeERRVUZETEVkQlFVY3NTVUZCU1N4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUzBGQlN5eHBRa0ZCYVVJN1owSkJRVVVzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzFGQlF6ZEhMRU5CUVVNN1VVRkRSQ3hWUVVGVkxFVkJRVVVzU1VGQlNUdFJRVU5vUWl4WlFVRlpMRVZCUVVVc1NVRkJTVHRMUVVOeVFpeERRVUZETEVOQlFVTTdRVUZEVUN4RFFVRkRPMEZCTTBORUxEaEVRVEpEUXp0QlFWTkVMRk5CUVdkQ0xHbENRVUZwUWl4RFFVRkRMRXRCUVdFN1NVRkRNME1zU1VGQlNTeFBRVUZQTEV0QlFVc3NTMEZCU3l4VlFVRlZMRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzUzBGQlN5eHBRa0ZCYVVJN1VVRkJSU3hQUVVGUExFbEJRVWtzUTBGQlF6dEpRVU5xUml4SlFVRkpMRXRCUVVzc1dVRkJXU3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRXRCUVVzc2FVSkJRV2xDTzFGQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkRla1lzVDBGQlR5eExRVUZMTEVOQlFVTTdRVUZEYWtJc1EwRkJRenRCUVVwRUxEaERRVWxETzBGQlZVUXNVMEZCWjBJc1ZVRkJWU3hEUVVGRExFdEJRV0U3U1VGRGNFTXNTVUZCU1N4WlFVRlpMRWxCUVVrc1MwRkJTenRSUVVGRkxFOUJRVThzU1VGQlNTeERRVUZETzBsQlEzWkRMRTlCUVU4c1MwRkJTeXhEUVVGRE8wRkJRMnBDTEVOQlFVTTdRVUZJUkN4blEwRkhRenRCUVZWRUxGTkJRV2RDTEdGQlFXRXNRMEZCUXl4TFFVRmhPMGxCUTNaRExFbEJRVWtzVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMR1ZCUVdVc1NVRkJTU3hMUVVGTE8xRkJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZETDBRc1QwRkJUeXhMUVVGTExFTkJRVU03UVVGRGFrSXNRMEZCUXp0QlFVaEVMSE5EUVVkRE8wRkJWVVFzVTBGQlowSXNZVUZCWVN4RFFVRkRMRXRCUVdFN1NVRkRka01zU1VGQlNTeFZRVUZWTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1pVRkJaU3hKUVVGSkxFdEJRVXM3VVVGQlJTeFBRVUZQTEVsQlFVa3NRMEZCUXp0SlFVTXZSQ3hQUVVGUExFdEJRVXNzUTBGQlF6dEJRVU5xUWl4RFFVRkRPMEZCU0VRc2MwTkJSME03UVVGWFJDeFRRVUZuUWl4WFFVRlhMRU5CUVRoRExFdEJRV0U3U1VGRGJFWXNTVUZCU1N4MVFrRkJVeXhGUVVGRkxFbEJRVWtzYVVKQlFXbENMRWxCUVVrc1MwRkJTenRSUVVGRkxFOUJRVThzU1VGQlNTeERRVUZETzBsQlF6TkVMRTlCUVU4c1MwRkJTeXhEUVVGRE8wRkJRMnBDTEVOQlFVTTdRVUZJUkN4clEwRkhRenRCUVZORUxGTkJRV2RDTEdsQ1FVRnBRaXhEUVVGRExFdEJRVlU3U1VGRGVFTXNTVUZCU1N4UFFVRlBMRXRCUVVzc1MwRkJTeXhSUVVGUk8xRkJRVVVzVDBGQlR5eExRVUZMTEVOQlFVTTdTVUZETlVNc1RVRkJUU3hSUVVGUkxFZEJRVWNzSzBOQlFTdERMRU5CUVVNN1NVRkRha1VzVDBGQlR5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMEZCUTNCRUxFTkJRVU03UVVGS1JDdzRRMEZKUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZGVmaW5lTWV0YWRhdGEodGFyZ2V0LCBrZXksIHZhbCkge1xuICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoa2V5LCB2YWwsIHRhcmdldCk7XG59XG5leHBvcnRzLmRlZmluZU1ldGFkYXRhID0gZGVmaW5lTWV0YWRhdGE7XG5mdW5jdGlvbiBnZXRNZXRhZGF0YSh0YXJnZXQsIGtleSkge1xuICAgIHJldHVybiBSZWZsZWN0LmdldE1ldGFkYXRhKGtleSwgdGFyZ2V0KTtcbn1cbmV4cG9ydHMuZ2V0TWV0YWRhdGEgPSBnZXRNZXRhZGF0YTtcbmZ1bmN0aW9uIGRlZmluZVdpbGRjYXJkTWV0YWRhdGEodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShrZXksIHZhbHVlLCB0YXJnZXQpO1xufVxuZXhwb3J0cy5kZWZpbmVXaWxkY2FyZE1ldGFkYXRhID0gZGVmaW5lV2lsZGNhcmRNZXRhZGF0YTtcbmZ1bmN0aW9uIGdldFdpbGRjYXJkTWV0YWRhdGEodGFyZ2V0LCBrZXkpIHtcbiAgICByZXR1cm4gUmVmbGVjdC5nZXRNZXRhZGF0YShrZXksIHRhcmdldCk7XG59XG5leHBvcnRzLmdldFdpbGRjYXJkTWV0YWRhdGEgPSBnZXRXaWxkY2FyZE1ldGFkYXRhO1xuZnVuY3Rpb24gZ2V0RGVzaWduVHlwZSh0YXJnZXQsIGtleSkge1xuICAgIHJldHVybiBSZWZsZWN0LmdldE1ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdGFyZ2V0LCBrZXkpO1xufVxuZXhwb3J0cy5nZXREZXNpZ25UeXBlID0gZ2V0RGVzaWduVHlwZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXVjBZV1JoZEdFdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wzVjBhV3h6TDIxbGRHRmtZWFJoTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJPRWxCTEZOQlFXZENMR05CUVdNc1EwRkJLME1zVFVGQlV5eEZRVUZGTEVkQlFVMHNSVUZCUlN4SFFVRnJRanRKUVVNNVJ5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdRVUZETjBNc1EwRkJRenRCUVVaRUxIZERRVVZETzBGQlYwUXNVMEZCWjBJc1YwRkJWeXhEUVVFclF5eE5RVUZUTEVWQlFVVXNSMEZCVFR0SlFVTjJSaXhQUVVGUExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRelZETEVOQlFVTTdRVUZHUkN4clEwRkZRenRCUVZWRUxGTkJRV2RDTEhOQ1FVRnpRaXhEUVVGRExFMUJRV01zUlVGQlJTeEhRVUZqTEVWQlFVVXNTMEZCVlR0SlFVTTNSU3hQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NSVUZCUlN4TFFVRkxMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03UVVGREwwTXNRMEZCUXp0QlFVWkVMSGRFUVVWRE8wRkJWVVFzVTBGQlowSXNiVUpCUVcxQ0xFTkJRVU1zVFVGQll5eEZRVUZGTEVkQlFXTTdTVUZET1VRc1QwRkJUeXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEVkQlFVY3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRCUVVNMVF5eERRVUZETzBGQlJrUXNhMFJCUlVNN1FVRlZSQ3hUUVVGblFpeGhRVUZoTEVOQlFVTXNUVUZCWXl4RlFVRkZMRWRCUVZjN1NVRkRja1FzVDBGQlR5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZETTBRc1EwRkJRenRCUVVaRUxITkRRVVZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IG1ldGFkYXRhXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9tZXRhZGF0YVwiKTtcbmNvbnN0IGVudmlyb25tZW50XzEgPSByZXF1aXJlKFwifmJkby91dGlscy9lbnZpcm9ubWVudFwiKTtcbmNvbnN0IG9uX2NoYW5nZV8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm9uLWNoYW5nZVwiKSk7XG52YXIgbG9kYXNoXzEgPSByZXF1aXJlKFwibG9kYXNoXCIpO1xuZXhwb3J0cy5tZXJnZSA9IGxvZGFzaF8xLm1lcmdlO1xuZXhwb3J0cy5vbWl0ID0gbG9kYXNoXzEub21pdDtcbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGxvZGFzaF8xLmlzRnVuY3Rpb247XG5leHBvcnRzLmlzT2JqZWN0ID0gbG9kYXNoXzEuaXNPYmplY3Q7XG5leHBvcnRzLnBpY2tCeSA9IGxvZGFzaF8xLnBpY2tCeTtcbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBsb2Rhc2hfMS5pc1VuZGVmaW5lZDtcbmV4cG9ydHMuaXNFcXVhbCA9IGxvZGFzaF8xLmlzRXF1YWw7XG5leHBvcnRzLmlzU3RyaW5nID0gbG9kYXNoXzEuaXNTdHJpbmc7XG5leHBvcnRzLmlzTnVtYmVyID0gbG9kYXNoXzEuaXNOdW1iZXI7XG5leHBvcnRzLmlzQXJyYXkgPSBsb2Rhc2hfMS5pc0FycmF5O1xuZXhwb3J0cy5kaWZmZXJlbmNlID0gbG9kYXNoXzEuZGlmZmVyZW5jZTtcbmV4cG9ydHMuZGVib3VuY2UgPSBsb2Rhc2hfMS5kZWJvdW5jZTtcbmZ1bmN0aW9uIHVjRmlyc3Qoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cbmV4cG9ydHMudWNGaXJzdCA9IHVjRmlyc3Q7XG5mdW5jdGlvbiBjYW1lbENhc2Uya2ViYWJDYXNlKHN0cikge1xuICAgIHN0ciA9IHN0ci5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbYS16MC05XXwoPz1bQS1aXSkpKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xufVxuZXhwb3J0cy5jYW1lbENhc2Uya2ViYWJDYXNlID0gY2FtZWxDYXNlMmtlYmFiQ2FzZTtcbmZ1bmN0aW9uIHBhc2NhbENhc2Uya2ViYWJDYXNlKHN0cikge1xuICAgIHN0ciA9IHVjRmlyc3Qoc3RyKTtcbiAgICByZXR1cm4gY2FtZWxDYXNlMmtlYmFiQ2FzZShzdHIpO1xufVxuZXhwb3J0cy5wYXNjYWxDYXNlMmtlYmFiQ2FzZSA9IHBhc2NhbENhc2Uya2ViYWJDYXNlO1xuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudEZyb21BcnJheShhcnJheSwgZWxlbWVudCkge1xuICAgIGNvbnN0IGluZGV4ID0gYXJyYXkuaW5kZXhPZihlbGVtZW50KTtcbiAgICBpZiAoaW5kZXggPj0gMClcbiAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbn1cbmV4cG9ydHMucmVtb3ZlRWxlbWVudEZyb21BcnJheSA9IHJlbW92ZUVsZW1lbnRGcm9tQXJyYXk7XG5mdW5jdGlvbiBnZXRQcm90b3R5cGVOYW1lc1JlY3Vyc2l2ZShvYmplY3QsIHByb3RvdHlwZXMgPSBbXSkge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChwcm90b3R5cGUpIHtcbiAgICAgICAgcHJvdG90eXBlcy5wdXNoKHByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICAgICAgZ2V0UHJvdG90eXBlTmFtZXNSZWN1cnNpdmUocHJvdG90eXBlLCBwcm90b3R5cGVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3RvdHlwZXM7XG59XG5leHBvcnRzLmdldFByb3RvdHlwZU5hbWVzUmVjdXJzaXZlID0gZ2V0UHJvdG90eXBlTmFtZXNSZWN1cnNpdmU7XG5mdW5jdGlvbiBpbmNsdWRlc01lbWJlck9mTGlzdChzZWFyY2gsIGxpc3QsIGV4dGVuc2lvbiA9ICcnKSB7XG4gICAgZm9yIChjb25zdCBtZW1iZXIgb2YgbGlzdCkge1xuICAgICAgICBpZiAoc2VhcmNoLmluY2x1ZGVzKGAke21lbWJlcn0ke2V4dGVuc2lvbn1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pbmNsdWRlc01lbWJlck9mTGlzdCA9IGluY2x1ZGVzTWVtYmVyT2ZMaXN0O1xuZnVuY3Rpb24gY29uc3RydWN0VHlwZU9mSFRNTEF0dHJpYnV0ZShvYmplY3QsIGtleSkge1xuICAgIGlmICghZW52aXJvbm1lbnRfMS5pc0Jyb3dzZXIoKSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHR5cGUgPSBtZXRhZGF0YV8xLmdldERlc2lnblR5cGUob2JqZWN0LCBrZXkpO1xuICAgIGNvbnN0IGF0dHJWYWx1ZSA9IG9iamVjdC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICBsZXQgdmFsdWVUb1NldCA9IGF0dHJWYWx1ZTtcbiAgICBpZiAoYXR0clZhbHVlICYmIHR5cGUgJiYgdHlwZS5uYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKFtcIk51bWJlclwiLCBcIkJvb2xlYW5cIiwgXCJPYmplY3RcIiwgXCJBcnJheVwiXS5pbmNsdWRlcyh0eXBlLm5hbWUpKSB7XG4gICAgICAgICAgICB2YWx1ZVRvU2V0ID0gSlNPTi5wYXJzZShhdHRyVmFsdWUucmVwbGFjZSgvJy9nLCAnXCInKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUubmFtZSA9PT0gXCJCYXNlQ29uc3RydWN0b3JcIikge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0gSlNPTi5wYXJzZShhdHRyVmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gb2JqLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIGlmICghY2xhc3NOYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNsYXNzTmFtZSBpcyBtaXNzaW5nIGluIGNvbXBvbmVudCBhdHRyaWJ1dGUgdmFsdWVcIik7XG4gICAgICAgICAgICBkZWxldGUgb2JqLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIHZhbHVlVG9TZXQgPSBuZXcgKHR5cGUubmFtZSkob2JqKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodmFsdWVUb1NldCAmJiB0eXBlICYmIHZhbHVlVG9TZXQuY29uc3RydWN0b3IubmFtZSAhPT0gdHlwZS5uYW1lKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdHRyaWJ1dGUgdHlwZSBlcXVhbHMgbm90IGRlZmluZWQgdHlwZVwiKTtcbiAgICByZXR1cm4gdmFsdWVUb1NldDtcbn1cbmV4cG9ydHMuY29uc3RydWN0VHlwZU9mSFRNTEF0dHJpYnV0ZSA9IGNvbnN0cnVjdFR5cGVPZkhUTUxBdHRyaWJ1dGU7XG5mdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgIT09IE9iamVjdCh2YWx1ZSkpO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuZnVuY3Rpb24gaXNQcm94eSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG9uX2NoYW5nZV8xLmRlZmF1bHQudGFyZ2V0KHZhbHVlKSA9PT0gdmFsdWUpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydHMuaXNQcm94eSA9IGlzUHJveHk7XG5mdW5jdGlvbiBnZXRQcm94eVRhcmdldCh2YWx1ZSkge1xuICAgIGlmIChpc1Byb3h5KHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIG9uX2NoYW5nZV8xLmRlZmF1bHQudGFyZ2V0KHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5leHBvcnRzLmdldFByb3h5VGFyZ2V0ID0gZ2V0UHJveHlUYXJnZXQ7XG5mdW5jdGlvbiB0b1VSSVBhdGhQYXJ0KHZhbHVlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXC8rL2csIFwiL1wiKTtcbiAgICBpZiAoIXZhbHVlLnN0YXJ0c1dpdGgoXCIvXCIpKVxuICAgICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gO1xuICAgIGlmICh2YWx1ZS5lbmRzV2l0aChcIi9cIikgJiYgdmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIC0xKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZXhwb3J0cy50b1VSSVBhdGhQYXJ0ID0gdG9VUklQYXRoUGFydDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRYUnBiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2ZFhScGJITXZkWFJwYkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN4clJFRkJiMFE3UVVGRGNFUXNkMFJCUVcxRU8wRkJRMjVFTEd0RlFVRnBRenRCUVVWcVF5eHBRMEZoWjBJN1FVRmFXaXg1UWtGQlFTeExRVUZMTEVOQlFVRTdRVUZEVEN4M1FrRkJRU3hKUVVGSkxFTkJRVUU3UVVGRFNpdzRRa0ZCUVN4VlFVRlZMRU5CUVVFN1FVRkRWaXcwUWtGQlFTeFJRVUZSTEVOQlFVRTdRVUZEVWl3d1FrRkJRU3hOUVVGTkxFTkJRVUU3UVVGRFRpd3JRa0ZCUVN4WFFVRlhMRU5CUVVFN1FVRkRXQ3d5UWtGQlFTeFBRVUZQTEVOQlFVRTdRVUZEVUN3MFFrRkJRU3hSUVVGUkxFTkJRVUU3UVVGRFVpdzBRa0ZCUVN4UlFVRlJMRU5CUVVFN1FVRkRVaXd5UWtGQlFTeFBRVUZQTEVOQlFVRTdRVUZEVUN3NFFrRkJRU3hWUVVGVkxFTkJRVUU3UVVGRFZpdzBRa0ZCUVN4UlFVRlJMRU5CUVVFN1FVRlZXaXhUUVVGblFpeFBRVUZQTEVOQlFVTXNSMEZCVnp0SlFVTXZRaXhQUVVGUExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOMFJDeERRVUZETzBGQlJrUXNNRUpCUlVNN1FVRlRSQ3hUUVVGblFpeHRRa0ZCYlVJc1EwRkJReXhIUVVGWE8wbEJRek5ETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYWtRc1QwRkJUeXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETERoQ1FVRTRRaXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMEZCUXpsRkxFTkJRVU03UVVGSVJDeHJSRUZIUXp0QlFWTkVMRk5CUVdkQ0xHOUNRVUZ2UWl4RFFVRkRMRWRCUVZjN1NVRkROVU1zUjBGQlJ5eEhRVUZITEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOdVFpeFBRVUZQTEcxQ1FVRnRRaXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEzQkRMRU5CUVVNN1FVRklSQ3h2UkVGSFF6dEJRVk5FTEZOQlFXZENMSE5DUVVGelFpeERRVUZETEV0QlFWa3NSVUZCUlN4UFFVRlpPMGxCUXpkRUxFMUJRVTBzUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRGNrTXNTVUZCU1N4TFFVRkxMRWxCUVVrc1EwRkJRenRSUVVGRkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRek5ETEVOQlFVTTdRVUZJUkN4M1JFRkhRenRCUVZORUxGTkJRV2RDTERCQ1FVRXdRaXhEUVVGRExFMUJRVmNzUlVGQlJTeGhRVUYxUWl4RlFVRkZPMGxCUXpkRkxFMUJRVTBzVTBGQlV5eEhRVUZITEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGFFUXNTVUZCU1N4VFFVRlRMRVZCUVVVN1VVRkRXQ3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE5VTXNNRUpCUVRCQ0xFTkJRVU1zVTBGQlV5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRPMHRCUTNKRU8wbEJRMFFzVDBGQlR5eFZRVUZWTEVOQlFVTTdRVUZEZEVJc1EwRkJRenRCUVZCRUxHZEZRVTlETzBGQlYwUXNVMEZCWjBJc2IwSkJRVzlDTEVOQlFVTXNUVUZCZVVJc1JVRkJSU3hKUVVGakxFVkJRVVVzV1VGQmIwSXNSVUZCUlR0SlFVTnNSeXhMUVVGTExFMUJRVTBzVFVGQlRTeEpRVUZKTEVsQlFVa3NSVUZCUlR0UlFVTjJRaXhKUVVGSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4TlFVRk5MRWRCUVVjc1UwRkJVeXhGUVVGRkxFTkJRVU1zUlVGQlJUdFpRVU14UXl4UFFVRlBMRWxCUVVrc1EwRkJRenRUUVVObU8wdEJRMG83U1VGRFJDeFBRVUZQTEV0QlFVc3NRMEZCUXp0QlFVTnFRaXhEUVVGRE8wRkJVRVFzYjBSQlQwTTdRVUZYUkN4VFFVRm5RaXcwUWtGQk5FSXNRMEZCUXl4TlFVRnRRaXhGUVVGRkxFZEJRVmM3U1VGRGVrVXNTVUZCU1N4RFFVRkRMSFZDUVVGVExFVkJRVVU3VVVGQlJTeFBRVUZQTzBsQlEzcENMRTFCUVUwc1NVRkJTU3hIUVVGSExIZENRVUZoTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRM2hETEUxQlFVMHNVMEZCVXl4SFFVRkhMRTFCUVUwc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZKTTBNc1NVRkJTU3hWUVVGVkxFZEJRVkVzVTBGQlV5eERRVUZETzBsQlEyaERMRWxCUVVrc1UwRkJVeXhKUVVGSkxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4TFFVRkxMRk5CUVZNc1JVRkJSVHRSUVVNNVF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRk5CUVZNc1JVRkJSU3hSUVVGUkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU01UkN4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzcEVPMUZCUTBRc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeExRVUZMTEdsQ1FVRnBRaXhGUVVGRk8xbEJRMnBETEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdXVUZEYkVNc1RVRkJUU3hUUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXp0WlFVTm9ReXhKUVVGSkxFTkJRVU1zVTBGQlV6dG5Ra0ZCUlN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHMUVRVUZ0UkN4RFFVRkRMRU5CUVVNN1dVRkRja1lzVDBGQlR5eEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRPMWxCUTNKQ0xGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFOQlEzSkRPMHRCUTBvN1NVRkRSQ3hKUVVGSkxGVkJRVlVzU1VGQlNTeEpRVUZKTEVsQlFVa3NWVUZCVlN4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFdEJRVXNzU1VGQlNTeERRVUZETEVsQlFVazdVVUZCUlN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExIZERRVUYzUXl4RFFVRkRMRU5CUVVNN1NVRkRMMGdzVDBGQlR5eFZRVUZWTEVOQlFVTTdRVUZEZEVJc1EwRkJRenRCUVhSQ1JDeHZSVUZ6UWtNN1FVRlRSQ3hUUVVGblFpeFhRVUZYTEVOQlFVTXNTMEZCVlR0SlFVTnNReXhQUVVGUExFTkJRVU1zUzBGQlN5eExRVUZMTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM0pETEVOQlFVTTdRVUZHUkN4clEwRkZRenRCUVZORUxGTkJRV2RDTEU5QlFVOHNRMEZCUXl4TFFVRlZPMGxCUXpsQ0xFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1NVRkJTVHRSUVVGRkxFOUJRVThzUzBGQlN5eERRVUZETzBsQlEzaEVMRWxCUVVrc2JVSkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1MwRkJTenRSUVVGRkxFOUJRVThzUzBGQlN5eERRVUZETzBsQlEyNUVMRTlCUVU4c1NVRkJTU3hEUVVGRE8wRkJRMmhDTEVOQlFVTTdRVUZLUkN3d1FrRkpRenRCUVZWRUxGTkJRV2RDTEdOQlFXTXNRMEZCUXl4TFFVRlZPMGxCUTNKRExFbEJRVWtzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXp0UlFVRkZMRTlCUVU4c2JVSkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRiRVFzVDBGQlR5eExRVUZMTEVOQlFVTTdRVUZEYWtJc1EwRkJRenRCUVVoRUxIZERRVWRETzBGQlZVUXNVMEZCWjBJc1lVRkJZU3hEUVVGRExFdEJRV0U3U1VGRGRrTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUTI1RExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVGRkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEV0QlFVc3NSVUZCUlN4RFFVRkRPMGxCUTJoRUxFbEJRVWtzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlR0UlFVTjZReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dExRVU01UWp0SlFVTkVMRTlCUVU4c1MwRkJTeXhEUVVGRE8wRkJRMnBDTEVOQlFVTTdRVUZRUkN4elEwRlBReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG53aW5kb3cudmlydHVhbFJvdXRlcyA9IFtcIkNvbmZpZ1wiLCBcIkdhbWVMb2JieVwiLCBcIkhvbWVcIl07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkbWx5ZEhWaGJFVnVkSEo1VUc5cGJuUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOTJZWEl2ZEcxd0wzWnBjblIxWVd4RmJuUnllVkJ2YVc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCVFN4TlFVRlBMRU5CUVVNc1lVRkJZU3hIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZETEZkQlFWY3NSVUZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReUo5Il0sInNvdXJjZVJvb3QiOiIifQ==