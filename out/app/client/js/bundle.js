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
/******/ 			if(installedChunks[chunkId]) {
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
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
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
/*!*******************************************************!*\
  !*** ./source/app/client/ts/components/GameWindow.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var _a, _b;
"use strict";
const BaseComponent_1 = __webpack_require__(/*! ~client/lib/BaseComponent */ "./source/app/client/ts/lib/BaseComponent.ts");
const decorators_1 = __webpack_require__(/*! ~bdo/utils/decorators */ "./source/app/utils/decorators.ts");
const decorators_2 = __webpack_require__(/*! ~client/utils/decorators */ "./source/app/client/ts/utils/decorators.ts");
const BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
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
customElements.define('game-window', GameWindow, {
    extends: GameWindow.extends
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZVdpbmRvdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvR2FtZVdpbmRvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZEQUFpRTtBQUNqRSxzREFBd0Q7QUFDeEQseURBQW9EO0FBQ3BELHFDQUFxQztBQVVyQyxJQUFxQixVQUFVLEdBQS9CLE1BQXFCLFVBQVcsU0FBUSxvQ0FBb0IsQ0FBQyxpQkFBaUIsQ0FBQztJQUQvRTs7UUFtQjBCLFdBQU0sR0FBbUIsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7WUFDMUUsV0FBVyxFQUFFLElBQUk7U0FDcEIsQ0FBQyxDQUFDO1FBU21CLFVBQUssR0FBa0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBeURwRSxDQUFDO0lBbERVLGlCQUFpQjtRQUNwQixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRTtZQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNyQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVNTLFdBQVc7UUFFakIsTUFBTSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU3QyxNQUFNLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFdkYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFFekMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFbEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFGLEtBQUssQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBRTNCLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRWhHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0QixPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTdGLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFRUyxhQUFhLEtBQUssQ0FBQztDQUNoQyxDQUFBO0FBN0UwQixrQkFBTyxHQUFXLFFBQVEsQ0FBQztBQVN0QztJQUFYLHFCQUFRLEVBQUU7MERBQW1CLE9BQU8sb0JBQVAsT0FBTyxDQUFDLE1BQU07MENBRXpDO0FBU1M7SUFBWCxxQkFBUSxFQUFFOzBEQUFrQixPQUFPLG9CQUFQLE9BQU8sQ0FBQyxLQUFLO3lDQUFzQjtBQTdCL0MsVUFBVTtJQUQ5Qiw0QkFBZSxFQUFFO0dBQ0csVUFBVSxDQXNGOUI7a0JBdEZvQixVQUFVO0FBdUYvQixjQUFjLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUU7SUFDN0MsT0FBTyxFQUFFLFVBQVUsQ0FBQyxPQUFPO0NBQzlCLENBQUMsQ0FBQyJ9

/***/ }),

/***/ "./source/app/client/ts/components/TestComponent.ts":
/*!**********************************************************!*\
  !*** ./source/app/client/ts/components/TestComponent.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const BaseComponent_1 = __webpack_require__(/*! ~client/lib/BaseComponent */ "./source/app/client/ts/lib/BaseComponent.ts");
const decorators_1 = __webpack_require__(/*! ~bdo/utils/decorators */ "./source/app/utils/decorators.ts");
const decorators_2 = __webpack_require__(/*! ~client/utils/decorators */ "./source/app/client/ts/utils/decorators.ts");
let TestComponent = class TestComponent extends BaseComponent_1.BaseComponentFactory(HTMLElement) {
    constructor() {
        super(...arguments);
        this.className = 'test';
        this.templateString = __webpack_require__(/*! ~static/views/testComponent.njk */ "./out/app/client/views/testComponent.njk");
    }
};
tslib_1.__decorate([
    decorators_2.attribute(),
    tslib_1.__metadata("design:type", String)
], TestComponent.prototype, "className", void 0);
tslib_1.__decorate([
    decorators_2.property(),
    tslib_1.__metadata("design:type", Object)
], TestComponent.prototype, "templateString", void 0);
TestComponent = tslib_1.__decorate([
    decorators_1.baseConstructor()
], TestComponent);
exports.default = TestComponent;
customElements.define('test-component', TestComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdENvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvVGVzdENvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2REFBaUU7QUFDakUsc0RBQXdEO0FBQ3hELHlEQUErRDtBQVUvRCxJQUFxQixhQUFhLEdBQWxDLE1BQXFCLGFBQWMsU0FBUSxvQ0FBb0IsQ0FBQyxXQUFXLENBQUM7SUFENUU7O1FBUXdCLGNBQVMsR0FBVyxNQUFNLENBQUM7UUFRekIsbUJBQWMsR0FBRyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQztJQUV0RixDQUFDO0NBQUEsQ0FBQTtBQVZnQjtJQUFaLHNCQUFTLEVBQUU7O2dEQUFtQztBQVFuQztJQUFYLHFCQUFRLEVBQUU7O3FEQUF1RTtBQWZqRSxhQUFhO0lBRGpDLDRCQUFlLEVBQUU7R0FDRyxhQUFhLENBaUJqQztrQkFqQm9CLGFBQWE7QUFrQmxDLGNBQWMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLENBQUMifQ==

/***/ }),

/***/ "./source/app/client/ts/components/ViewLink.ts":
/*!*****************************************************!*\
  !*** ./source/app/client/ts/components/ViewLink.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var _a;
"use strict";
const BaseComponent_1 = __webpack_require__(/*! ~client/lib/BaseComponent */ "./source/app/client/ts/lib/BaseComponent.ts");
const decorators_1 = __webpack_require__(/*! ~client/utils/decorators */ "./source/app/client/ts/utils/decorators.ts");
const decorators_2 = __webpack_require__(/*! ~bdo/utils/decorators */ "./source/app/utils/decorators.ts");
const decorators_3 = __webpack_require__(/*! ~bdo/utils/decorators */ "./source/app/utils/decorators.ts");
let ViewLink = class ViewLink extends BaseComponent_1.BaseComponentFactory(HTMLAnchorElement) {
    constructor(_params) {
        super();
        this.test = "lol";
        this.tester = "haha";
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("click", this.onLinkClick.bind(this));
    }
    onLinkClick(event) {
        event.preventDefault();
        window.router.navigate(this.href, true);
    }
};
ViewLink.extends = 'a';
tslib_1.__decorate([
    decorators_2.watched(), decorators_1.attribute(),
    tslib_1.__metadata("design:type", String)
], ViewLink.prototype, "test", void 0);
tslib_1.__decorate([
    decorators_1.property(),
    tslib_1.__metadata("design:type", String)
], ViewLink.prototype, "tester", void 0);
ViewLink = tslib_1.__decorate([
    decorators_3.baseConstructor(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ConstParams !== "undefined" && ConstParams) === "function" ? _a : Object])
], ViewLink);
exports.default = ViewLink;
customElements.define("view-link", ViewLink, { extends: ViewLink.extends });
new ViewLink({
    test: ""
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld0xpbmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1ZpZXdMaW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNkRBQWlFO0FBQ2pFLHlEQUErRDtBQUMvRCxzREFBZ0Q7QUFDaEQsc0RBQXdEO0FBVXhELElBQXFCLFFBQVEsR0FBN0IsTUFBcUIsUUFBUyxTQUFRLG9DQUFvQixDQUFDLGlCQUFpQixDQUFDO0lBMEJ6RSxZQUFZLE9BQStCO1FBQ3ZDLEtBQUssRUFBRSxDQUFDO1FBWG1CLFNBQUksR0FBVyxLQUFLLENBQUM7UUFRakMsV0FBTSxHQUFXLE1BQU0sQ0FBQztJQUkzQyxDQUFDO0lBT00saUJBQWlCO1FBQ3BCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBU08sV0FBVyxDQUFDLEtBQVk7UUFDNUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNKLENBQUE7QUEzQzBCLGdCQUFPLEdBQVksR0FBRyxDQUFDO0FBUXRCO0lBQXZCLG9CQUFPLEVBQUUsRUFBRSxzQkFBUyxFQUFFOztzQ0FBNkI7QUFReEM7SUFBWCxxQkFBUSxFQUFFOzt3Q0FBZ0M7QUF4QjFCLFFBQVE7SUFENUIsNEJBQWUsRUFBRTtpRUEyQlEsV0FBVyxvQkFBWCxXQUFXO0dBMUJoQixRQUFRLENBbUQ1QjtrQkFuRG9CLFFBQVE7QUFvRDdCLGNBQWMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUM1RSxJQUFJLFFBQVEsQ0FBQztJQUNULElBQUksRUFBRSxFQUFFO0NBQ1gsQ0FBQyxDQUFDIn0=

/***/ }),

/***/ "./source/app/client/ts/components/ViewRouter.ts":
/*!*******************************************************!*\
  !*** ./source/app/client/ts/components/ViewRouter.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const BaseComponent_1 = __webpack_require__(/*! ~client/lib/BaseComponent */ "./source/app/client/ts/lib/BaseComponent.ts");
const environment_1 = __webpack_require__(/*! ~bdo/utils/environment */ "./source/app/utils/environment.ts");
const decorators_1 = __webpack_require__(/*! ~bdo/utils/decorators */ "./source/app/utils/decorators.ts");
const decorators_2 = __webpack_require__(/*! ~client/utils/decorators */ "./source/app/client/ts/utils/decorators.ts");
const Navigo = __webpack_require__(/*! navigo */ "./node_modules/navigo/lib/navigo.min.js");
let ViewRouter = class ViewRouter extends BaseComponent_1.BaseComponentFactory(HTMLElement) {
    constructor() {
        super(...arguments);
        this.router = new Navigo();
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
            if (!environment_1.includesMemberOfList(Route.attachToServers, [global.process.env.name, '*']))
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
customElements.define("view-router", ViewRouter);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld1JvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvVmlld1JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2REFBaUU7QUFDakUsd0RBQThEO0FBQzlELHNEQUF3RDtBQUN4RCx5REFBb0Q7QUFDcEQsaUNBQWtDO0FBVWxDLElBQXFCLFVBQVUsR0FBL0IsTUFBcUIsVUFBVyxTQUFRLG9DQUFvQixDQUFDLFdBQVcsQ0FBQztJQUR6RTs7UUFTaUMsV0FBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7SUErQ3ZELENBQUM7SUF2Q2EsaUJBQWlCO1FBQ3ZCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDaEMsQ0FBQztJQVFPLGVBQWU7UUFDbkIsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFO1lBQ3RDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxlQUFlLEtBQUssS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzNELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0QztJQUNMLENBQUM7SUFVTyxvQkFBb0IsQ0FBQyxLQUFVO1FBQ25DLElBQUk7WUFDQSxJQUFJLENBQUMsa0NBQW9CLENBQVcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFTLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFBRSxPQUFPO1lBQzNHLE1BQU0sVUFBVSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7Z0JBQzNCLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksMkNBQTJDLENBQUMsQ0FBQzthQUM5RjtZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osTUFBTSxLQUFLLENBQUM7U0FDZjtJQUNMLENBQUM7Q0FDSixDQUFBO0FBL0NlO0lBQVgscUJBQVEsRUFBRTs7MENBQXdDO0FBUmxDLFVBQVU7SUFEOUIsNEJBQWUsRUFBRTtHQUNHLFVBQVUsQ0F1RDlCO2tCQXZEb0IsVUFBVTtBQXdEL0IsY0FBYyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUMifQ==
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./source/app/client/ts/controllers/BaseController.ts":
/*!************************************************************!*\
  !*** ./source/app/client/ts/controllers/BaseController.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class BaseController {
}
exports.BaseController = BaseController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb250cm9sbGVycy9CYXNlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU1BLE1BQWEsY0FBYztDQUFJO0FBQS9CLHdDQUErQiJ9

/***/ }),

/***/ "./source/app/client/ts/lib/BaseComponent.ts":
/*!***************************************************!*\
  !*** ./source/app/client/ts/lib/BaseComponent.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
__webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
const lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
const nunjucks_1 = __webpack_require__(/*! nunjucks */ "./node_modules/nunjucks/browser/nunjucks.js");
const BDOModel_1 = __webpack_require__(/*! ~bdo/lib/BDOModel */ "./source/app/lib/BDOModel.ts");
const decorators_1 = __webpack_require__(/*! ~client/utils/decorators */ "./source/app/client/ts/utils/decorators.ts");
function BaseComponentFactory(HTMLTypeElement) {
    var _a, _b, _c, _d;
    class BaseComponent extends HTMLTypeElement {
        constructor(...args) {
            super(...args);
            this.isBaseComponent = true;
            this.properties = Reflect.getMetadata("definedProperties", this);
            this.templateString = '<div><slot></slot></div>';
            this.templateParams = {};
        }
        setAttribute(qualifiedName, value) {
            if (this.properties && this.properties.has(qualifiedName)) {
                throw new Error(`"${qualifiedName}" can't be set as attribute because it is a defined property`);
            }
            this[qualifiedName] = value;
            super.setAttribute(qualifiedName, value);
        }
        removeAttribute(qualifiedName) {
            if (this.properties && this.properties.has(qualifiedName)) {
                throw new Error(`"${qualifiedName}" can't be removed as attribute because it is a defined property`);
            }
            super.removeAttribute(qualifiedName);
            this[qualifiedName] = undefined;
        }
        connectedCallback() {
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
        disconnectedCallback() { }
        adoptedCallback() { }
    }
    tslib_1.__decorate([
        decorators_1.property(),
        tslib_1.__metadata("design:type", Boolean)
    ], BaseComponent.prototype, "isBaseComponent", void 0);
    tslib_1.__decorate([
        decorators_1.property(),
        tslib_1.__metadata("design:type", typeof (_a = typeof Map !== "undefined" && Map) === "function" ? _a : Object)
    ], BaseComponent.prototype, "properties", void 0);
    tslib_1.__decorate([
        decorators_1.property(),
        tslib_1.__metadata("design:type", typeof (_b = typeof BDOModel_1.BDOModel !== "undefined" && BDOModel_1.BDOModel) === "function" ? _b : Object)
    ], BaseComponent.prototype, "model", void 0);
    tslib_1.__decorate([
        decorators_1.property(),
        tslib_1.__metadata("design:type", Object)
    ], BaseComponent.prototype, "templateString", void 0);
    tslib_1.__decorate([
        decorators_1.property(),
        tslib_1.__metadata("design:type", typeof (_d = typeof IndexStructure !== "undefined" && IndexStructure) === "function" ? _d : Object)
    ], BaseComponent.prototype, "templateParams", void 0);
    return BaseComponent;
}
exports.BaseComponentFactory = BaseComponentFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9CYXNlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRCQUEwQjtBQUMxQixtQ0FBNEM7QUFDNUMsdUNBQWtEO0FBQ2xELGdEQUE2QztBQUM3Qyx5REFBb0Q7QUFVcEQsU0FBZ0Isb0JBQW9CLENBQXlDLGVBQXNCOztJQVEvRixNQUFlLGFBQWMsU0FBUSxlQUFlO1FBeURoRCxZQUFZLEdBQUcsSUFBVztZQUN0QixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQXhDUyxvQkFBZSxHQUFhLElBQUksQ0FBQztZQVFqQyxlQUFVLEdBQXNCLE9BQU8sQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFrQjVFLG1CQUFjLEdBQXNCLDBCQUEwQixDQUFDO1lBV3hFLG1CQUFjLEdBQW1CLEVBQUUsQ0FBQztRQUkxRCxDQUFDO1FBVU0sWUFBWSxDQUFDLGFBQXFCLEVBQUUsS0FBYTtZQUNwRCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQ3ZELE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxhQUFhLDhEQUE4RCxDQUFDLENBQUM7YUFDcEc7WUFDSyxJQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ25DLEtBQUssQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFRTSxlQUFlLENBQUMsYUFBcUI7WUFDeEMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUN2RCxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksYUFBYSxrRUFBa0UsQ0FBQyxDQUFDO2FBQ3hHO1lBQ0QsS0FBSyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvQixJQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQzNDLENBQUM7UUFTUyxpQkFBaUI7WUFFdkIsSUFBSSxDQUFPLElBQUksQ0FBQyxXQUFZLENBQUMsT0FBTyxFQUFFO2dCQUVsQyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLElBQUksaUJBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7b0JBQy9CLGFBQWEsR0FBRyx1QkFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2lCQUMxRTtnQkFDRCxJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO29CQUMvQixhQUFhLEdBQWMsSUFBSSxDQUFDLGNBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2lCQUMvRTtnQkFDRCxJQUFJLGFBQWEsRUFBRTtvQkFDZixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQ3ZELE1BQU0sR0FBRyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztvQkFDeEUsVUFBVSxDQUFDLFdBQVcsQ0FBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUMxRDthQUNKO1FBQ0wsQ0FBQztRQVNTLG9CQUFvQixLQUFXLENBQUM7UUFTaEMsZUFBZSxLQUFXLENBQUM7S0FDeEM7SUFwSGU7UUFBWCxxQkFBUSxFQUFFOzswREFBa0Q7SUFRakQ7UUFBWCxxQkFBUSxFQUFFOzhEQUE4QixHQUFHLG9CQUFILEdBQUc7cURBQStEO0lBUS9GO1FBQVgscUJBQVEsRUFBRTs4REFBZ0IsbUJBQVEsb0JBQVIsbUJBQVE7Z0RBQUM7SUFVeEI7UUFBWCxxQkFBUSxFQUFFOzt5REFBbUY7SUFXbEY7UUFBWCxxQkFBUSxFQUFFOzhEQUEyQixjQUFjLG9CQUFkLGNBQWM7eURBQU07SUFpRjlELE9BQU8sYUFBYSxDQUFDO0FBQ3pCLENBQUM7QUFqSkQsb0RBaUpDIn0=

/***/ }),

/***/ "./source/app/client/ts/lib/BaseRoute.ts":
/*!***********************************************!*\
  !*** ./source/app/client/ts/lib/BaseRoute.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
const Logger_1 = __webpack_require__(/*! ~client/lib/Logger */ "./source/app/client/ts/lib/Logger.ts");
const logger = new Logger_1.Logger();
function BaseRouteFactory(RouteType) {
    class BaseRoute extends RouteType {
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
    return BaseRoute;
}
exports.BaseRouteFactory = BaseRouteFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VSb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1DQUErQjtBQUMvQiwrQ0FBNEM7QUFFNUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztBQVU1QixTQUFnQixnQkFBZ0IsQ0FBOEMsU0FBZ0I7SUFTMUYsTUFBZSxTQUFVLFNBQVMsU0FBOEM7UUFBaEY7O1lBUW9CLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBc0RsRCxDQUFDO1FBOUNHLElBQVcsTUFBTTtZQUNiLE1BQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQztZQUN2QixLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQzdCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzdGO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQztRQVdTLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBc0I7WUFDakQsT0FBTyxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFTUyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQXNCO1lBQzVDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixFQUFFLEVBQUUsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRyxDQUFDO1FBVU8sS0FBSyxDQUFDLHdCQUF3QjtZQUNsQyxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxXQUFXO2dCQUFFLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDcEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQzFELE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUQsQ0FBQztLQUNKO0lBRUQsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQztBQTFFRCw0Q0EwRUMifQ==

/***/ }),

/***/ "./source/app/client/ts/lib/ConfigManager.ts":
/*!***************************************************!*\
  !*** ./source/app/client/ts/lib/ConfigManager.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BDOConfigManager_1 = __webpack_require__(/*! ~bdo/lib/BDOConfigManager */ "./source/app/lib/BDOConfigManager.ts");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9Db25maWdNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0VBQTZEO0FBTzdELE1BQWEsYUFBYyxTQUFRLG1DQUFnQjtJQVN4QyxHQUFHLENBQUMsT0FBZTtRQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQVVTLElBQUksQ0FBQyxPQUFlO1FBQzFCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBVVMsUUFBUSxDQUFDLE9BQWU7UUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFXUyxRQUFRLENBQUMsT0FBZSxFQUFFLE1BQVc7UUFDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDSjtBQWpERCxzQ0FpREMifQ==

/***/ }),

/***/ "./source/app/client/ts/lib/Logger.ts":
/*!********************************************!*\
  !*** ./source/app/client/ts/lib/Logger.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var _a;
"use strict";
const BDOLogger_1 = __webpack_require__(/*! ~bdo/lib/BDOLogger */ "./source/app/lib/BDOLogger.ts");
const decorators_1 = __webpack_require__(/*! ~bdo/utils/decorators */ "./source/app/utils/decorators.ts");
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

/***/ "./source/app/client/ts/routes sync recursive ^\\.\\/.*\\.ts$":
/*!*******************************************************!*\
  !*** ./source/app/client/ts/routes sync ^\.\/.*\.ts$ ***!
  \*******************************************************/
/*! no static exports found */
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
/*!***********************************************!*\
  !*** ./source/app/client/ts/routes/Config.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseRoute_1 = __webpack_require__(/*! ~client/lib/BaseRoute */ "./source/app/client/ts/lib/BaseRoute.ts");
const BDOConfig_1 = __webpack_require__(/*! ~bdo/routes/BDOConfig */ "./source/app/routes/BDOConfig.ts");
class Config extends BaseRoute_1.BaseRouteFactory(BDOConfig_1.BDOConfig) {
}
exports.default = Config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUF5RDtBQUN6RCxxREFBa0Q7QUFTbEQsTUFBcUIsTUFBTyxTQUFRLDRCQUFnQixDQUFDLHFCQUFTLENBQUM7Q0FBSTtBQUFuRSx5QkFBbUUifQ==

/***/ }),

/***/ "./source/app/client/ts/routes/GameLobby.ts":
/*!**************************************************!*\
  !*** ./source/app/client/ts/routes/GameLobby.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseRoute_1 = __webpack_require__(/*! ~client/lib/BaseRoute */ "./source/app/client/ts/lib/BaseRoute.ts");
const BDOGameLobby_1 = __webpack_require__(/*! ~bdo/routes/BDOGameLobby */ "./source/app/routes/BDOGameLobby.ts");
class GameLobby extends BaseRoute_1.BaseRouteFactory(BDOGameLobby_1.BDOGameLobby) {
    async templateParams() {
        return {
            test: 'lol'
        };
    }
}
exports.default = GameLobby;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZUxvYmJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0dhbWVMb2JieS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUF5RDtBQUN6RCwyREFBd0Q7QUFTeEQsTUFBcUIsU0FBVSxTQUFRLDRCQUFnQixDQUFDLDJCQUFZLENBQUM7SUFVdkQsS0FBSyxDQUFDLGNBQWM7UUFDMUIsT0FBTztZQUNILElBQUksRUFBRSxLQUFLO1NBQ2QsQ0FBQztJQUNOLENBQUM7Q0FDSjtBQWZELDRCQWVDIn0=

/***/ }),

/***/ "./source/app/client/ts/routes/Home.ts":
/*!*********************************************!*\
  !*** ./source/app/client/ts/routes/Home.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseRoute_1 = __webpack_require__(/*! ~client/lib/BaseRoute */ "./source/app/client/ts/lib/BaseRoute.ts");
const BDOHome_1 = __webpack_require__(/*! ~bdo/routes/BDOHome */ "./source/app/routes/BDOHome.ts");
class Home extends BaseRoute_1.BaseRouteFactory(BDOHome_1.BDOHome) {
}
exports.default = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9Ib21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscURBQXlEO0FBQ3pELGlEQUE4QztBQVM5QyxNQUFxQixJQUFLLFNBQVEsNEJBQWdCLENBQUMsaUJBQU8sQ0FBQztDQUFJO0FBQS9ELHVCQUErRCJ9

/***/ }),

/***/ "./source/app/client/ts/utils/decorators.ts":
/*!**************************************************!*\
  !*** ./source/app/client/ts/utils/decorators.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
function property() {
    return (target, key) => {
        const propDesc = Reflect.getOwnPropertyDescriptor(target, key);
        if (!Reflect.hasMetadata("definedProperties", target)) {
            Reflect.defineMetadata("definedProperties", new Map(), target);
        }
        const propertyMap = Reflect.getMetadata("definedProperties", target);
        propertyMap.set(key.toString(), target.constructor[key]);
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return Reflect.getMetadata(key, this);
            },
            set: function set(newVal) {
                if (newVal === Reflect.getMetadata(key, this))
                    return;
                if (propDesc && propDesc.set) {
                    propDesc.set.call(this, newVal);
                }
                else
                    Reflect.defineMetadata(key, newVal, this);
                propertyMap.set(key.toString(), newVal);
            },
            enumerable: true,
            configurable: true
        });
    };
}
exports.property = property;
function attribute() {
    return (target, key) => {
        const propDesc = Reflect.getOwnPropertyDescriptor(target, key);
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return Reflect.getMetadata(key, this);
            },
            set: function set(newVal) {
                if (newVal === Reflect.getMetadata(key, this))
                    return;
                const stringKey = key.toString();
                if (!Reflect.getMetadata(`${key.toString()}Initialized`, this)) {
                    newVal = this.getAttribute(stringKey) || newVal;
                }
                if (propDesc && propDesc.set) {
                    propDesc.set.call(this, newVal);
                }
                else
                    Reflect.defineMetadata(key, newVal, this);
                if (target instanceof HTMLElement && this.getAttribute(stringKey) !== newVal) {
                    this.setAttribute(stringKey, newVal);
                }
                Reflect.defineMetadata(`${key.toString()}Initialized`, true, this);
            },
            enumerable: true,
            configurable: true
        });
    };
}
exports.attribute = attribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3V0aWxzL2RlY29yYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0QkFBMEI7QUFVMUIsU0FBZ0IsUUFBUTtJQUNwQixPQUFPLENBQUMsTUFBVyxFQUFFLEdBQW9CLEVBQUUsRUFBRTtRQUV6QyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRy9ELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25ELE9BQU8sQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxHQUFHLEVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMvRTtRQUNELE1BQU0sV0FBVyxHQUFxQixPQUFPLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZGLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUd6RCxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDaEMsR0FBRyxFQUFFLFNBQVMsR0FBRztnQkFDYixPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzFDLENBQUM7WUFDRCxHQUFHLEVBQUUsU0FBUyxHQUFHLENBQUMsTUFBVztnQkFDekIsSUFBSSxNQUFNLEtBQUssT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO29CQUFFLE9BQU87Z0JBR3RELElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUU7b0JBQzFCLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFDbkM7O29CQUFNLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFHakQsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDNUMsQ0FBQztZQUNELFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQztBQUNOLENBQUM7QUFqQ0QsNEJBaUNDO0FBU0QsU0FBZ0IsU0FBUztJQUNyQixPQUFPLENBQUMsTUFBVyxFQUFFLEdBQW9CLEVBQUUsRUFBRTtRQUV6QyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRy9ELE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNoQyxHQUFHLEVBQUUsU0FBUyxHQUFHO2dCQUNiLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUMsQ0FBQztZQUNELEdBQUcsRUFBRSxTQUFTLEdBQUcsQ0FBQyxNQUFXO2dCQUN6QixJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7b0JBQUUsT0FBTztnQkFDdEQsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUdqQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxFQUFFO29CQUM1RCxNQUFNLEdBQWlCLElBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksTUFBTSxDQUFDO2lCQUNsRTtnQkFHRCxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFO29CQUMxQixRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQ25DOztvQkFBTSxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBR2pELElBQUksTUFBTSxZQUFZLFdBQVcsSUFBa0IsSUFBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxNQUFNLEVBQUU7b0JBQzNFLElBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUN2RDtnQkFHRCxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZFLENBQUM7WUFDRCxVQUFVLEVBQUUsSUFBSTtZQUNoQixZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7QUFDTixDQUFDO0FBckNELDhCQXFDQyJ9

/***/ }),

/***/ "./source/app/lib/BDOConfigManager.ts":
/*!********************************************!*\
  !*** ./source/app/lib/BDOConfigManager.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ms = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");
const BDOMapCache_1 = __webpack_require__(/*! ~bdo/lib/BDOMapCache */ "./source/app/lib/BDOMapCache.ts");
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
                conf = ms(conf);
            this.cache.set('__ConfigManagerCacheTimeout__', conf);
        }
        this.cache.set(config, value, conf);
    }
}
exports.BDOConfigManager = BDOConfigManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPQ29uZmlnTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvbGliL0JET0NvbmZpZ01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBMEI7QUFDMUIsc0RBQW1EO0FBbUJuRCxNQUFzQixnQkFBZ0I7SUFBdEM7UUFVYyxVQUFLLEdBQTZCLElBQUkseUJBQVcsRUFBRSxDQUFDO0lBd0VsRSxDQUFDO0lBL0RVLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBYztRQUMzQixJQUFJLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEMsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN0QztRQUNELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBOEJTLFFBQVEsQ0FBQyxNQUFjO1FBQzdCLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLElBQUksY0FBYyxFQUFFO1lBQ2hCLE9BQU8sY0FBYyxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQVdTLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBYyxFQUFFLEtBQVU7UUFDL0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsRUFBRTtZQUNsRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1lBQ3hELElBQUksSUFBSTtnQkFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLCtCQUErQixFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0o7QUFsRkQsNENBa0ZDIn0=

/***/ }),

/***/ "./source/app/lib/BDOLogger.ts":
/*!*************************************!*\
  !*** ./source/app/lib/BDOLogger.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
const moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
const path_1 = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
const environment_1 = __webpack_require__(/*! ~bdo/utils/environment */ "./source/app/utils/environment.ts");
class BDOLogger {
    constructor(_params) {
        this.logFile = 'default.log';
        this.preventConsolePrint = false;
        this.preventFilePrint = false;
        this.logLevel = 'debug';
        this.prototypeNames = environment_1.getPrototypeNamesRecursive(this);
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
        return `${global.process.env.name || ''} ${global.process.env.pm_id || ''} ${global.process.pid}`;
    }
    isAllowed(logLevel) {
        const logLevelOrder = ['log', 'debug', 'info', 'warn', 'error'];
        return logLevelOrder.indexOf(logLevel) >= logLevelOrder.indexOf(this.logLevel);
    }
    currentTime() {
        return moment().format('DD.MM.YYYY HH:mm:ss');
    }
    getLogPoint() {
        const stack = new Error().stack.split('\n');
        let callpoint;
        for (const [index, stackpart] of stack.entries()) {
            if (!index)
                continue;
            if (!environment_1.includesMemberOfList(stackpart, this.prototypeNames, '.ts')) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9saWIvQkRPTG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaUNBQWlDO0FBQ2pDLCtCQUEyQjtBQUMzQix3REFBMEY7QUFXMUYsTUFBc0IsU0FBUztJQWtEM0IsWUFBWSxPQUFnQztRQTNDckMsWUFBTyxHQUFZLGFBQWEsQ0FBQztRQVFqQyx3QkFBbUIsR0FBYSxLQUFLLENBQUM7UUFRdEMscUJBQWdCLEdBQWEsS0FBSyxDQUFDO1FBZW5DLGFBQVEsR0FBZSxPQUFPLENBQUM7UUFVbkIsbUJBQWMsR0FBYSx3Q0FBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUvQixDQUFDO0lBVzFDLEdBQUcsQ0FBQyxPQUFZLEVBQUUsV0FBc0IsS0FBSyxFQUFFLEdBQUcsSUFBVztRQUNoRSxJQUFJLFFBQVEsS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztZQUFFLE9BQU87UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDbEUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QyxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7WUFDM0IsSUFBSSxNQUFNLFlBQVksS0FBSyxFQUFFO2dCQUN6QixPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNwQzs7Z0JBQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2QsT0FBUSxD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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./source/app/lib/BDOMapCache.ts":
/*!***************************************!*\
  !*** ./source/app/lib/BDOMapCache.ts ***!
  \***************************************/
/*! no static exports found */
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
/*!************************************!*\
  !*** ./source/app/lib/BDOModel.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class BDOModel {
}
exports.BDOModel = BDOModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2xpYi9CRE9Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLE1BQXNCLFFBQVE7Q0FBSTtBQUFsQyw0QkFBa0MifQ==

/***/ }),

/***/ "./source/app/lib/BDORoute.ts":
/*!************************************!*\
  !*** ./source/app/lib/BDORoute.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
const environment_1 = __webpack_require__(/*! ~bdo/utils/environment */ "./source/app/utils/environment.ts");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPUm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2xpYi9CRE9Sb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLG1DQUE0QztBQUM1Qyx3REFBNkQ7QUFRN0QsTUFBc0IsUUFBUTtJQUE5QjtRQW9CVyxvQkFBZSxHQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztRQVFwRSxXQUFNLEdBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQWtCdEIsbUJBQWMsR0FBc0IsYUFBYSxDQUFDO1FBVWxELGFBQVEsR0FBWSxLQUFLLENBQUM7SUFtRHhDLENBQUM7SUF4Q2EsY0FBYyxDQUFDLGNBQThCO1FBQ25ELElBQUksYUFBYSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQy9CLGFBQWEsR0FBRyxpQ0FBbUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUN6RjtRQUNELElBQUksaUJBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDL0IsYUFBYSxHQUFjLElBQUksQ0FBQyxjQUFlLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzFFO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDekIsQ0FBQztJQVdTLEtBQUssQ0FBQyxjQUFjLENBQUMsZ0JBQTBDO1FBQ3JFLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7QUE3RWEsd0JBQWUsR0FBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBWnBELDRCQTJHQyJ9

/***/ }),

/***/ "./source/app/models/Cell.ts":
/*!***********************************!*\
  !*** ./source/app/models/Cell.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var _a;
"use strict";
const Chunk_1 = __webpack_require__(/*! ./Chunk */ "./source/app/models/Chunk.ts");
const decorators_1 = __webpack_require__(/*! ~bdo/utils/decorators */ "./source/app/utils/decorators.ts");
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
/*!************************************!*\
  !*** ./source/app/models/Chunk.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const open_simplex_noise_1 = __webpack_require__(/*! open-simplex-noise */ "./node_modules/open-simplex-noise/lib/index.js");
const lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
const Cell_1 = __webpack_require__(/*! ./Cell */ "./source/app/models/Cell.ts");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2h1bmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL21vZGVscy9DaHVuay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUFrRDtBQUNsRCxtQ0FBK0I7QUFDL0IsaUNBQThCO0FBUTlCLE1BQWEsS0FBSztJQXNFZCxZQUFZLE1BQTJCO1FBL0RoQyxNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBUWQsTUFBQyxHQUFXLENBQUMsQ0FBQztRQVFkLFNBQUksR0FBWSxFQUFFLENBQUM7UUFTaEIsU0FBSSxHQUFhLEVBQUUsQ0FBQztRQVNwQixnQkFBVyxHQUFxQixJQUFJLDRCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBU3hELGlCQUFZLEdBQXFCLElBQUksNEJBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFTekQsdUJBQWtCLEdBQXFCLElBQUksNEJBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFTL0Qsb0JBQWUsR0FBcUIsSUFBSSw0QkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUdsRSxjQUFLLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBUVMsWUFBWTtRQUNsQixLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQVksSUFBSSxDQUFDLElBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDdEI7WUFDRCxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQVksSUFBSSxDQUFDLElBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDaEQsTUFBTSxXQUFXLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDckQsTUFBTSxXQUFXLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFFckQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ2YsSUFBSSxXQUFJLENBQUM7b0JBQ0wsQ0FBQyxFQUFFLFdBQVc7b0JBQ2QsQ0FBQyxFQUFFLFdBQVc7b0JBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUUsV0FBVyxHQUFHLEdBQUcsQ0FBQztvQkFDcEUsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUUsV0FBVyxHQUFHLEdBQUcsQ0FBQztvQkFDdEUsV0FBVyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUNwRixRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUM5RSxLQUFLLEVBQUUsSUFBSTtpQkFDZCxDQUFDLENBQ0wsQ0FBQzthQUNMO1NBQ0o7SUFDTCxDQUFDO0NBQ0o7QUF4R0Qsc0JBd0dDIn0=

/***/ }),

/***/ "./source/app/models/Test.ts":
/*!***********************************!*\
  !*** ./source/app/models/Test.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var _a;
"use strict";
const type_graphql_1 = __webpack_require__(/*! type-graphql */ "./node_modules/type-graphql/dist/browser-shim.js");
const decorators_1 = __webpack_require__(/*! ~bdo/utils/decorators */ "./source/app/utils/decorators.ts");
const BDOModel_1 = __webpack_require__(/*! ~bdo/lib/BDOModel */ "./source/app/lib/BDOModel.ts");
let Test = class Test extends BDOModel_1.BDOModel {
    constructor(_params) {
        super();
        this.id = '0';
        this.title = 'test';
    }
};
tslib_1.__decorate([
    type_graphql_1.Field((_type) => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], Test.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Test.prototype, "title", void 0);
tslib_1.__decorate([
    type_graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Test.prototype, "description", void 0);
Test = tslib_1.__decorate([
    type_graphql_1.ObjectType(),
    decorators_1.baseConstructor(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ConstParams !== "undefined" && ConstParams) === "function" ? _a : Object])
], Test);
exports.Test = Test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvbW9kZWxzL1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrQ0FBcUQ7QUFDckQsc0RBQXdEO0FBQ3hELGdEQUE2QztBQVU3QyxJQUFhLElBQUksR0FBakIsTUFBYSxJQUFLLFNBQVEsbUJBQVE7SUF5QjlCLFlBQVksT0FBMEI7UUFDbEMsS0FBSyxFQUFFLENBQUM7UUFuQmlCLE9BQUUsR0FBVyxHQUFHLENBQUM7UUFROUIsVUFBSyxHQUFXLE1BQU0sQ0FBQztJQVl2QyxDQUFDO0NBQ0osQ0FBQTtBQXJCeUI7SUFBckIsb0JBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsaUJBQUUsQ0FBQzs7Z0NBQXlCO0FBUXJDO0lBQVIsb0JBQUssRUFBRTs7bUNBQStCO0FBUVo7SUFBMUIsb0JBQUssQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7eUNBQTZCO0FBdkI5QyxJQUFJO0lBRmhCLHlCQUFVLEVBQUU7SUFDWiw0QkFBZSxFQUFFO2lFQTBCTyxXQUFXLG9CQUFYLFdBQVc7R0F6QnZCLElBQUksQ0E0QmhCO0FBNUJZLG9CQUFJIn0=

/***/ }),

/***/ "./source/app/routes/BDOConfig.ts":
/*!****************************************!*\
  !*** ./source/app/routes/BDOConfig.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BDORoute_1 = __webpack_require__(/*! ~bdo/lib/BDORoute */ "./source/app/lib/BDORoute.ts");
class BDOConfig extends BDORoute_1.BDORoute {
    constructor() {
        super(...arguments);
        this.routes = ["/:name"];
        this.jsonOnly = true;
    }
}
exports.BDOConfig = BDOConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9yb3V0ZXMvQkRPQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQTZDO0FBVTdDLE1BQXNCLFNBQVUsU0FBUSxtQkFBUTtJQUFoRDs7UUFPVyxXQUFNLEdBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQU8zQixhQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7Q0FBQTtBQWZELDhCQWVDIn0=

/***/ }),

/***/ "./source/app/routes/BDOGameLobby.ts":
/*!*******************************************!*\
  !*** ./source/app/routes/BDOGameLobby.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BDORoute_1 = __webpack_require__(/*! ~bdo/lib/BDORoute */ "./source/app/lib/BDORoute.ts");
class BDOGameLobby extends BDORoute_1.BDORoute {
    constructor() {
        super(...arguments);
        this.routerNameSpace = '/';
        this.templateString = __webpack_require__(/*! ~bdo/views/GameLobby.njk */ "./out/app/views/GameLobby.njk");
    }
    async templateParams() {
        return {
            oha: 'OOOOOHAAAAAAAA!!!'
        };
    }
}
BDOGameLobby.attachToServers = ["GameServer"];
exports.BDOGameLobby = BDOGameLobby;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPR2FtZUxvYmJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9yb3V0ZXMvQkRPR2FtZUxvYmJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQTZDO0FBVTdDLE1BQXNCLFlBQWEsU0FBUSxtQkFBUTtJQUFuRDs7UUFnQlcsb0JBQWUsR0FBRyxHQUFHLENBQUM7UUFRbkIsbUJBQWMsR0FBYSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQWM3RSxDQUFDO0lBTGEsS0FBSyxDQUFDLGNBQWM7UUFDMUIsT0FBTztZQUNILEdBQUcsRUFBRSxtQkFBbUI7U0FDM0IsQ0FBQztJQUNOLENBQUM7O0FBNUJhLDRCQUFlLEdBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQVQ3RCxvQ0FzQ0MifQ==

/***/ }),

/***/ "./source/app/routes/BDOHome.ts":
/*!**************************************!*\
  !*** ./source/app/routes/BDOHome.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BDORoute_1 = __webpack_require__(/*! ~bdo/lib/BDORoute */ "./source/app/lib/BDORoute.ts");
class BDOHome extends BDORoute_1.BDORoute {
    constructor() {
        super(...arguments);
        this.routerNameSpace = '/';
        this.templateString = __webpack_require__(/*! ~bdo/views/home.njk */ "./out/app/views/home.njk");
    }
    async templateParams() {
        return {
            oha: 'endlich zu Hause =)'
        };
    }
}
BDOHome.attachToServers = ["WebServer"];
exports.BDOHome = BDOHome;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPSG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvcm91dGVzL0JET0hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnREFBNkM7QUFVN0MsTUFBc0IsT0FBUSxTQUFRLG1CQUFRO0lBQTlDOztRQWdCVyxvQkFBZSxHQUFHLEdBQUcsQ0FBQztRQVFuQixtQkFBYyxHQUFhLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBY3hFLENBQUM7SUFMYSxLQUFLLENBQUMsY0FBYztRQUMxQixPQUFPO1lBQ0gsR0FBRyxFQUFFLHFCQUFxQjtTQUM3QixDQUFDO0lBQ04sQ0FBQzs7QUE1QmEsdUJBQWUsR0FBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBVDVELDBCQXNDQyJ9

/***/ }),

/***/ "./source/app/utils sync recursive":
/*!*******************************!*\
  !*** ./source/app/utils sync ***!
  \*******************************/
/*! no static exports found */
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
/*!****************************************!*\
  !*** ./source/app/utils/decorators.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
const lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
function watched(_params) {
    return (target, key) => {
        const propDesc = Reflect.getOwnPropertyDescriptor(target, key);
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return Reflect.getMetadata(key, this);
            },
            set: function set(newVal) {
                if (newVal === Reflect.getMetadata(key, this))
                    return;
                if (propDesc && propDesc.set) {
                    propDesc.set.call(this, newVal);
                }
                else
                    Reflect.defineMetadata(key, newVal, this);
            },
            enumerable: true,
            configurable: true
        });
    };
}
exports.watched = watched;
function baseConstructor(constParamsIndex = 0) {
    return (ctor) => {
        class BaseConstructor extends ctor {
            constructor(...args) {
                super(...args);
                let constParams = args[constParamsIndex];
                if (!(constParams instanceof Object))
                    constParams = {};
                lodash_1.merge(this, constParams[constParamsIndex]);
                if ("constructedCallback" in this)
                    this.constructedCallback();
            }
        }
        return BaseConstructor;
    };
}
exports.baseConstructor = baseConstructor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvdXRpbHMvZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQixtQ0FBK0I7QUF1RC9CLFNBQWdCLE9BQU8sQ0FBQyxPQUF3QjtJQUM1QyxPQUFPLENBQUMsTUFBVyxFQUFFLEdBQW9CLEVBQUUsRUFBRTtRQUN6QyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRS9ELE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNoQyxHQUFHLEVBQUUsU0FBUyxHQUFHO2dCQUNiLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUMsQ0FBQztZQUNELEdBQUcsRUFBRSxTQUFTLEdBQUcsQ0FBQyxNQUFXO2dCQUN6QixJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7b0JBQUUsT0FBTztnQkFDdEQsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRTtvQkFDMUIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUNuQzs7b0JBQU0sT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JELENBQUM7WUFDRCxVQUFVLEVBQUUsSUFBSTtZQUNoQixZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7QUFDTixDQUFDO0FBbkJELDBCQW1CQztBQVNELFNBQWdCLGVBQWUsQ0FBQyxtQkFBMkIsQ0FBQztJQUN4RCxPQUFPLENBQXdCLElBQU8sRUFBRSxFQUFFO1FBUXRDLE1BQU0sZUFBZ0IsU0FBUSxJQUFJO1lBQzlCLFlBQVksR0FBRyxJQUFXO2dCQUN0QixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDZixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDekMsSUFBSSxDQUFDLENBQUMsV0FBVyxZQUFZLE1BQU0sQ0FBQztvQkFBRSxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUN2RCxjQUFLLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLElBQUkscUJBQXFCLElBQUksSUFBSTtvQkFBUSxJQUFLLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUN6RSxDQUFDO1NBQ0o7UUFFRCxPQUFPLGVBQWUsQ0FBQztJQUMzQixDQUFDLENBQUM7QUFDTixDQUFDO0FBckJELDBDQXFCQyJ9

/***/ }),

/***/ "./source/app/utils/environment.ts":
/*!*****************************************!*\
  !*** ./source/app/utils/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {
Object.defineProperty(exports, "__esModule", { value: true });
const nunjucks = __webpack_require__(/*! nunjucks */ "./node_modules/nunjucks/browser/nunjucks.js");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL3V0aWxzL2Vudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXFDO0FBUXJDLFNBQWdCLFFBQVE7SUFDcEIsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1FBQzlELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBTEQsNEJBS0M7QUFRRCxTQUFnQixTQUFTO0lBQ3JCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN2QixDQUFDO0FBRkQsOEJBRUM7QUFTRCxTQUFnQiwwQkFBMEIsQ0FBQyxNQUFXLEVBQUUsYUFBdUIsRUFBRTtJQUM3RSxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELElBQUksU0FBUyxFQUFFO1FBQ1gsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLDBCQUEwQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUNyRDtJQUNELE9BQU8sVUFBVSxDQUFDO0FBQ3RCLENBQUM7QUFQRCxnRUFPQztBQVdELFNBQWdCLG9CQUFvQixDQUFDLE1BQXlCLEVBQUUsSUFBYyxFQUFFLFlBQW9CLEVBQUU7SUFDbEcsS0FBSyxNQUFNLE1BQU0sSUFBSSxJQUFJLEVBQUU7UUFDdkIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxHQUFHLFNBQVMsRUFBRSxDQUFDLEVBQUU7WUFDMUMsT0FBTyxJQUFJLENBQUM7U0FDZjtLQUNKO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQVBELG9EQU9DO0FBS1ksUUFBQSxtQkFBbUIsR0FBRyxDQUFDLEdBQUcsRUFBRTtJQUNyQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM3RSxNQUFNLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDakMsU0FBUyxFQUFFLENBQUMsSUFBWSxFQUFFLEVBQUU7WUFDeEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQ2pELENBQUM7S0FDSixFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUVoQixHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUNwQyxJQUFJLEtBQUssWUFBWSxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUM5QyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDLENBQUMsRUFBRSxDQUFDIn0=
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./var/tmp/virtualEntryPoint.ts":
/*!**************************************!*\
  !*** ./var/tmp/virtualEntryPoint.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

window.virtualRoutes = ["Config", "GameLobby", "Home"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbEVudHJ5UG9pbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi92YXIvdG1wL3ZpcnR1YWxFbnRyeVBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBTSxNQUFPLENBQUMsYUFBYSxHQUFHLENBQUMsUUFBUSxFQUFDLFdBQVcsRUFBQyxNQUFNLENBQUMsQ0FBQyJ9

/***/ }),

/***/ 0:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js ./var/tmp/virtualEntryPoint.ts ./source/app/utils/decorators.ts ./source/app/utils/environment.ts ./source/app/routes/BDOConfig.ts ./source/app/routes/BDOGameLobby.ts ./source/app/routes/BDOHome.ts ./source/app/models/Cell.ts ./source/app/models/Chunk.ts ./source/app/models/Test.ts ./source/app/lib/BDOConfigManager.ts ./source/app/lib/BDOLogger.ts ./source/app/lib/BDOMapCache.ts ./source/app/lib/BDOModel.ts ./source/app/lib/BDORoute.ts ./source/app/client/ts/utils/decorators.ts ./source/app/client/ts/routes/Config.ts ./source/app/client/ts/routes/GameLobby.ts ./source/app/client/ts/routes/Home.ts ./source/app/client/ts/lib/BaseComponent.ts ./source/app/client/ts/lib/BaseRoute.ts ./source/app/client/ts/lib/ConfigManager.ts ./source/app/client/ts/lib/Logger.ts ./source/app/client/ts/controllers/BaseController.ts ./source/app/client/ts/components/GameWindow.ts ./source/app/client/ts/components/TestComponent.ts ./source/app/client/ts/components/ViewLink.ts ./source/app/client/ts/components/ViewRouter.ts ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Atom_projects\Game\node_modules\@webcomponents\webcomponentsjs\webcomponents-bundle.js */"./node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js");
__webpack_require__(/*! D:\Atom_projects\Game\var\tmp\virtualEntryPoint.ts */"./var/tmp/virtualEntryPoint.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\utils\decorators.ts */"./source/app/utils/decorators.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\utils\environment.ts */"./source/app/utils/environment.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\routes\BDOConfig.ts */"./source/app/routes/BDOConfig.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\routes\BDOGameLobby.ts */"./source/app/routes/BDOGameLobby.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\routes\BDOHome.ts */"./source/app/routes/BDOHome.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\models\Cell.ts */"./source/app/models/Cell.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\models\Chunk.ts */"./source/app/models/Chunk.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\models\Test.ts */"./source/app/models/Test.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\lib\BDOConfigManager.ts */"./source/app/lib/BDOConfigManager.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\lib\BDOLogger.ts */"./source/app/lib/BDOLogger.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\lib\BDOMapCache.ts */"./source/app/lib/BDOMapCache.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\lib\BDOModel.ts */"./source/app/lib/BDOModel.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\lib\BDORoute.ts */"./source/app/lib/BDORoute.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\utils\decorators.ts */"./source/app/client/ts/utils/decorators.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\routes\Config.ts */"./source/app/client/ts/routes/Config.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\routes\GameLobby.ts */"./source/app/client/ts/routes/GameLobby.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\routes\Home.ts */"./source/app/client/ts/routes/Home.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\lib\BaseComponent.ts */"./source/app/client/ts/lib/BaseComponent.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\lib\BaseRoute.ts */"./source/app/client/ts/lib/BaseRoute.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\lib\ConfigManager.ts */"./source/app/client/ts/lib/ConfigManager.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\lib\Logger.ts */"./source/app/client/ts/lib/Logger.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\controllers\BaseController.ts */"./source/app/client/ts/controllers/BaseController.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\components\GameWindow.ts */"./source/app/client/ts/components/GameWindow.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\components\TestComponent.ts */"./source/app/client/ts/components/TestComponent.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\components\ViewLink.ts */"./source/app/client/ts/components/ViewLink.ts");
module.exports = __webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\components\ViewRouter.ts */"./source/app/client/ts/components/ViewRouter.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvR2FtZVdpbmRvdy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1Rlc3RDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvY29tcG9uZW50cy9WaWV3TGluay50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1ZpZXdSb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvY29udHJvbGxlcnMvQmFzZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VSb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvQ29uZmlnTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9saWIvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcyBzeW5jIF5cXC5cXC8uKlxcLnRzJCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvQ29uZmlnLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9HYW1lTG9iYnkudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0hvbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvdXRpbHMvZGVjb3JhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Db25maWdNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0JET0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9NYXBDYWNoZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Nb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2xpYi9CRE9Sb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL21vZGVscy9DZWxsLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbW9kZWxzL0NodW5rLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbW9kZWxzL1Rlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9yb3V0ZXMvQkRPQ29uZmlnLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvcm91dGVzL0JET0dhbWVMb2JieS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3JvdXRlcy9CRE9Ib21lLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvdXRpbHMgc3luYyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3V0aWxzL2RlY29yYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscy9lbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly8vLi92YXIvdG1wL3ZpcnR1YWxFbnRyeVBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQix1QkFBdUI7QUFDdkM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0QsMkNBQTJDLG1oRTs7Ozs7Ozs7Ozs7OztBQy9DOUI7QUFDYjtBQUNBLDJDQUEyQywyUSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvclwiLFwidGVtcGxhdGVzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYWYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXItZHouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXItbHlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItbWEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYm1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vYnMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vZGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZGUtYXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZW4tU0dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1TRy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciBfYSwgX2I7XG5cInVzZSBzdHJpY3RcIjtcbmNvbnN0IEJhc2VDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9CYXNlQ29tcG9uZW50XCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMiA9IHJlcXVpcmUoXCJ+Y2xpZW50L3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBCQUJZTE9OID0gcmVxdWlyZShcImJhYnlsb25qc1wiKTtcbmxldCBHYW1lV2luZG93ID0gY2xhc3MgR2FtZVdpbmRvdyBleHRlbmRzIEJhc2VDb21wb25lbnRfMS5CYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmVuZ2luZSA9IG5ldyBCQUJZTE9OLkVuZ2luZSh0aGlzLCB0cnVlLCB7XG4gICAgICAgICAgICBhdWRpb0VuZ2luZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gYDEwMCVgO1xuICAgICAgICB0aGlzLnN0eWxlLndpZHRoID0gYDEwMCVgO1xuICAgICAgICB0aGlzLmVuZ2luZS5ydW5SZW5kZXJMb29wKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVuZ2luZS5yZXNpemUoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY3JlYXRlU2NlbmUoKSB7XG4gICAgICAgIGNvbnN0IHNjZW5lID0gbmV3IEJBQllMT04uU2NlbmUodGhpcy5lbmdpbmUpO1xuICAgICAgICBjb25zdCBjYW1lcmEgPSBuZXcgQkFCWUxPTi5GcmVlQ2FtZXJhKCdjYW1lcmEnLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDUsIC0xMCksIHNjZW5lKTtcbiAgICAgICAgY2FtZXJhLnNldFRhcmdldChCQUJZTE9OLlZlY3RvcjMuWmVybygpKTtcbiAgICAgICAgY2FtZXJhLmF0dGFjaENvbnRyb2wodGhpcywgZmFsc2UpO1xuICAgICAgICBjb25zdCBsaWdodCA9IG5ldyBCQUJZTE9OLkhlbWlzcGhlcmljTGlnaHQoJ2xpZ2h0MScsIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMSwgMCksIHNjZW5lKTtcbiAgICAgICAgbGlnaHQuc2hhZG93RW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IHNwaGVyZSA9IEJBQllMT04uTWVzaEJ1aWxkZXIuQ3JlYXRlU3BoZXJlKCdzcGhlcmUnLCB7IHNlZ21lbnRzOiAxNiwgZGlhbWV0ZXI6IDIgfSwgc2NlbmUpO1xuICAgICAgICBzcGhlcmUucG9zaXRpb24ueSA9IDE7XG4gICAgICAgIEJBQllMT04uTWVzaEJ1aWxkZXIuQ3JlYXRlR3JvdW5kKCdncm91bmQxJywgeyBoZWlnaHQ6IDYsIHdpZHRoOiA2LCBzdWJkaXZpc2lvbnM6IDIgfSwgc2NlbmUpO1xuICAgICAgICByZXR1cm4gc2NlbmU7XG4gICAgfVxuICAgIGNyZWF0ZVRlcnJhaW4oKSB7IH1cbn07XG5HYW1lV2luZG93LmV4dGVuZHMgPSBcImNhbnZhc1wiO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzIucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCB0eXBlb2YgKF9hID0gdHlwZW9mIEJBQllMT04gIT09IFwidW5kZWZpbmVkXCIgJiYgQkFCWUxPTi5FbmdpbmUpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdClcbl0sIEdhbWVXaW5kb3cucHJvdG90eXBlLCBcImVuZ2luZVwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzIucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCB0eXBlb2YgKF9iID0gdHlwZW9mIEJBQllMT04gIT09IFwidW5kZWZpbmVkXCIgJiYgQkFCWUxPTi5TY2VuZSkgPT09IFwiZnVuY3Rpb25cIiA/IF9iIDogT2JqZWN0KVxuXSwgR2FtZVdpbmRvdy5wcm90b3R5cGUsIFwic2NlbmVcIiwgdm9pZCAwKTtcbkdhbWVXaW5kb3cgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoKVxuXSwgR2FtZVdpbmRvdyk7XG5leHBvcnRzLmRlZmF1bHQgPSBHYW1lV2luZG93O1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdnYW1lLXdpbmRvdycsIEdhbWVXaW5kb3csIHtcbiAgICBleHRlbmRzOiBHYW1lV2luZG93LmV4dGVuZHNcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUjJGdFpWZHBibVJ2ZHk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyTnZiWEJ2Ym1WdWRITXZSMkZ0WlZkcGJtUnZkeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTERaRVFVRnBSVHRCUVVOcVJTeHpSRUZCZDBRN1FVRkRlRVFzZVVSQlFXOUVPMEZCUTNCRUxIRkRRVUZ4UXp0QlFWVnlReXhKUVVGeFFpeFZRVUZWTEVkQlFTOUNMRTFCUVhGQ0xGVkJRVmNzVTBGQlVTeHZRMEZCYjBJc1EwRkJReXhwUWtGQmFVSXNRMEZCUXp0SlFVUXZSVHM3VVVGdFFqQkNMRmRCUVUwc1IwRkJiVUlzU1VGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVU3V1VGRE1VVXNWMEZCVnl4RlFVRkZMRWxCUVVrN1UwRkRjRUlzUTBGQlF5eERRVUZETzFGQlUyMUNMRlZCUVVzc1IwRkJhMElzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMGxCZVVSd1JTeERRVUZETzBsQmJFUlZMR2xDUVVGcFFqdFJRVU53UWl4TFFVRkxMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVXNRMEZCUXp0UlFVTXhRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRNMElzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRekZDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1lVRkJZU3hEUVVGRExFZEJRVWNzUlVGQlJUdFpRVU16UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFGQlEzaENMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMGdzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRSUVVOeVFpeE5RVUZOTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlFVY3NSVUZCUlR0WlFVTnVReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNN1dVRkRMMElzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRE8xRkJRM0pETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTFBc1EwRkJRenRKUVZOVExGZEJRVmM3VVVGRmFrSXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVVM1F5eE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRmRrWXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkZla01zVFVGQlRTeERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRmJFTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXpGR0xFdEJRVXNzUTBGQlF5eGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUlROQ0xFMUJRVTBzVFVGQlRTeEhRVUZITEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEZGQlFWRXNSVUZCUlN4RlFVRkZMRVZCUVVVc1VVRkJVU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUldoSExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVWMFFpeFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhUUVVGVExFVkJRVVVzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFVkJRVVVzV1VGQldTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJSVGRHTEU5QlFVOHNTMEZCU3l4RFFVRkRPMGxCUTJwQ0xFTkJRVU03U1VGUlV5eGhRVUZoTEV0QlFVc3NRMEZCUXp0RFFVTm9ReXhEUVVGQk8wRkJOMFV3UWl4clFrRkJUeXhIUVVGWExGRkJRVkVzUTBGQlF6dEJRVk4wUXp0SlFVRllMSEZDUVVGUkxFVkJRVVU3TUVSQlFXMUNMRTlCUVU4c2IwSkJRVkFzVDBGQlR5eERRVUZETEUxQlFVMDdNRU5CUlhwRE8wRkJVMU03U1VGQldDeHhRa0ZCVVN4RlFVRkZPekJFUVVGclFpeFBRVUZQTEc5Q1FVRlFMRTlCUVU4c1EwRkJReXhMUVVGTE8zbERRVUZ6UWp0QlFUZENMME1zVlVGQlZUdEpRVVE1UWl3MFFrRkJaU3hGUVVGRk8wZEJRMGNzVlVGQlZTeERRWE5HT1VJN2EwSkJkRVp2UWl4VlFVRlZPMEZCZFVZdlFpeGpRVUZqTEVOQlFVTXNUVUZCVFN4RFFVRkRMR0ZCUVdFc1JVRkJSU3hWUVVGVkxFVkJRVVU3U1VGRE4wTXNUMEZCVHl4RlFVRkZMRlZCUVZVc1EwRkJReXhQUVVGUE8wTkJRemxDTEVOQlFVTXNRMEZCUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEJhc2VDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9CYXNlQ29tcG9uZW50XCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMiA9IHJlcXVpcmUoXCJ+Y2xpZW50L3V0aWxzL2RlY29yYXRvcnNcIik7XG5sZXQgVGVzdENvbXBvbmVudCA9IGNsYXNzIFRlc3RDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50XzEuQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSAndGVzdCc7XG4gICAgICAgIHRoaXMudGVtcGxhdGVTdHJpbmcgPSByZXF1aXJlKCd+c3RhdGljL3ZpZXdzL3Rlc3RDb21wb25lbnQubmprJyk7XG4gICAgfVxufTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18yLmF0dHJpYnV0ZSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIFRlc3RDb21wb25lbnQucHJvdG90eXBlLCBcImNsYXNzTmFtZVwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzIucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG5dLCBUZXN0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJ0ZW1wbGF0ZVN0cmluZ1wiLCB2b2lkIDApO1xuVGVzdENvbXBvbmVudCA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpXG5dLCBUZXN0Q29tcG9uZW50KTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRlc3RDb21wb25lbnQ7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3Rlc3QtY29tcG9uZW50JywgVGVzdENvbXBvbmVudCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWR1Z6ZEVOdmJYQnZibVZ1ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyTnZiWEJ2Ym1WdWRITXZWR1Z6ZEVOdmJYQnZibVZ1ZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN3MlJFRkJhVVU3UVVGRGFrVXNjMFJCUVhkRU8wRkJRM2hFTEhsRVFVRXJSRHRCUVZVdlJDeEpRVUZ4UWl4aFFVRmhMRWRCUVd4RExFMUJRWEZDTEdGQlFXTXNVMEZCVVN4dlEwRkJiMElzUTBGQlF5eFhRVUZYTEVOQlFVTTdTVUZFTlVVN08xRkJVWGRDTEdOQlFWTXNSMEZCVnl4TlFVRk5MRU5CUVVNN1VVRlJla0lzYlVKQlFXTXNSMEZCUnl4UFFVRlBMRU5CUVVNc2FVTkJRV2xETEVOQlFVTXNRMEZCUXp0SlFVVjBSaXhEUVVGRE8wTkJRVUVzUTBGQlFUdEJRVlpuUWp0SlFVRmFMSE5DUVVGVExFVkJRVVU3TzJkRVFVRnRRenRCUVZGdVF6dEpRVUZZTEhGQ1FVRlJMRVZCUVVVN08zRkVRVUYxUlR0QlFXWnFSU3hoUVVGaE8wbEJSR3BETERSQ1FVRmxMRVZCUVVVN1IwRkRSeXhoUVVGaExFTkJhVUpxUXp0clFrRnFRbTlDTEdGQlFXRTdRVUZyUW14RExHTkJRV01zUTBGQlF5eE5RVUZOTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzWVVGQllTeERRVUZETEVOQlFVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIF9hO1xuXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBCYXNlQ29tcG9uZW50XzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQmFzZUNvbXBvbmVudFwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBkZWNvcmF0b3JzXzIgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgZGVjb3JhdG9yc18zID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmxldCBWaWV3TGluayA9IGNsYXNzIFZpZXdMaW5rIGV4dGVuZHMgQmFzZUNvbXBvbmVudF8xLkJhc2VDb21wb25lbnRGYWN0b3J5KEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgY29uc3RydWN0b3IoX3BhcmFtcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRlc3QgPSBcImxvbFwiO1xuICAgICAgICB0aGlzLnRlc3RlciA9IFwiaGFoYVwiO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkxpbmtDbGljay5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25MaW5rQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93LnJvdXRlci5uYXZpZ2F0ZSh0aGlzLmhyZWYsIHRydWUpO1xuICAgIH1cbn07XG5WaWV3TGluay5leHRlbmRzID0gJ2EnO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzIud2F0Y2hlZCgpLCBkZWNvcmF0b3JzXzEuYXR0cmlidXRlKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgVmlld0xpbmsucHJvdG90eXBlLCBcInRlc3RcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgVmlld0xpbmsucHJvdG90eXBlLCBcInRlc3RlclwiLCB2b2lkIDApO1xuVmlld0xpbmsgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMy5iYXNlQ29uc3RydWN0b3IoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBDb25zdFBhcmFtcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBDb25zdFBhcmFtcykgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0XSlcbl0sIFZpZXdMaW5rKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFZpZXdMaW5rO1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwidmlldy1saW5rXCIsIFZpZXdMaW5rLCB7IGV4dGVuZHM6IFZpZXdMaW5rLmV4dGVuZHMgfSk7XG5uZXcgVmlld0xpbmsoe1xuICAgIHRlc3Q6IFwiXCJcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVm1sbGQweHBibXN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJOc2FXVnVkQzkwY3k5amIyMXdiMjVsYm5SekwxWnBaWGRNYVc1ckxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3TzBGQlFVRXNOa1JCUVdsRk8wRkJRMnBGTEhsRVFVRXJSRHRCUVVNdlJDeHpSRUZCWjBRN1FVRkRhRVFzYzBSQlFYZEVPMEZCVlhoRUxFbEJRWEZDTEZGQlFWRXNSMEZCTjBJc1RVRkJjVUlzVVVGQlV5eFRRVUZSTEc5RFFVRnZRaXhEUVVGRExHbENRVUZwUWl4RFFVRkRPMGxCTUVKNlJTeFpRVUZaTEU5QlFTdENPMUZCUTNaRExFdEJRVXNzUlVGQlJTeERRVUZETzFGQldHMUNMRk5CUVVrc1IwRkJWeXhMUVVGTExFTkJRVU03VVVGUmFrTXNWMEZCVFN4SFFVRlhMRTFCUVUwc1EwRkJRenRKUVVrelF5eERRVUZETzBsQlQwMHNhVUpCUVdsQ08xRkJRM0JDTEV0QlFVc3NRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeERRVUZETzFGQlF6RkNMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOb1JTeERRVUZETzBsQlUwOHNWMEZCVnl4RFFVRkRMRXRCUVZrN1VVRkROVUlzUzBGQlN5eERRVUZETEdOQlFXTXNSVUZCUlN4RFFVRkRPMUZCUTNaQ0xFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETlVNc1EwRkJRenREUVVOS0xFTkJRVUU3UVVFelF6QkNMR2RDUVVGUExFZEJRVmtzUjBGQlJ5eERRVUZETzBGQlVYUkNPMGxCUVhaQ0xHOUNRVUZQTEVWQlFVVXNSVUZCUlN4elFrRkJVeXhGUVVGRk96dHpRMEZCTmtJN1FVRlJlRU03U1VGQldDeHhRa0ZCVVN4RlFVRkZPenQzUTBGQlowTTdRVUY0UWpGQ0xGRkJRVkU3U1VGRU5VSXNORUpCUVdVc1JVRkJSVHRwUlVFeVFsRXNWMEZCVnl4dlFrRkJXQ3hYUVVGWE8wZEJNVUpvUWl4UlFVRlJMRU5CYlVRMVFqdHJRa0Z1Ukc5Q0xGRkJRVkU3UVVGdlJEZENMR05CUVdNc1EwRkJReXhOUVVGTkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEZGQlFWRXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3hSUVVGUkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXp0QlFVTTFSU3hKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU5VTEVsQlFVa3NSVUZCUlN4RlFVRkZPME5CUTFnc1EwRkJReXhEUVVGREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBCYXNlQ29tcG9uZW50XzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQmFzZUNvbXBvbmVudFwiKTtcbmNvbnN0IGVudmlyb25tZW50XzEgPSByZXF1aXJlKFwifmJkby91dGlscy9lbnZpcm9ubWVudFwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBkZWNvcmF0b3JzXzIgPSByZXF1aXJlKFwifmNsaWVudC91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgTmF2aWdvID0gcmVxdWlyZShcIm5hdmlnb1wiKTtcbmxldCBWaWV3Um91dGVyID0gY2xhc3MgVmlld1JvdXRlciBleHRlbmRzIEJhc2VDb21wb25lbnRfMS5CYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnJvdXRlciA9IG5ldyBOYXZpZ28oKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMucm91dGVDb2xsZWN0aW9uKCk7XG4gICAgICAgIHdpbmRvdy5yb3V0ZXIgPSB0aGlzLnJvdXRlcjtcbiAgICB9XG4gICAgcm91dGVDb2xsZWN0aW9uKCkge1xuICAgICAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIHdpbmRvdy52aXJ0dWFsUm91dGVzKSB7XG4gICAgICAgICAgICBjb25zdCBteVJvdXRlID0gcmVxdWlyZShgLi8uLi9yb3V0ZXMvJHtyb3V0ZX0udHNgKS5kZWZhdWx0O1xuICAgICAgICAgICAgdGhpcy5zaW5nZVJvdXRlQ29sbGVjdGlvbihteVJvdXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaW5nZVJvdXRlQ29sbGVjdGlvbihSb3V0ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFlbnZpcm9ubWVudF8xLmluY2x1ZGVzTWVtYmVyT2ZMaXN0KFJvdXRlLmF0dGFjaFRvU2VydmVycywgW2dsb2JhbC5wcm9jZXNzLmVudi5uYW1lLCAnKiddKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBSb3V0ZUNsYXNzID0gbmV3IFJvdXRlKCk7XG4gICAgICAgICAgICBpZiAoIVJvdXRlQ2xhc3MuaXNDbGllbnRSb3V0ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtSb3V0ZUNsYXNzLmNvbnN0cnVjdG9yLm5hbWV9IGlzIG5vdCBpbnN0YW5jZSBvZiB+Y2xpZW50L2xpYi9CYXNlUm91dGVgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucm91dGVyLm9uKFJvdXRlQ2xhc3Mucm91dGVyKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxufTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18yLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuXSwgVmlld1JvdXRlci5wcm90b3R5cGUsIFwicm91dGVyXCIsIHZvaWQgMCk7XG5WaWV3Um91dGVyID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKClcbl0sIFZpZXdSb3V0ZXIpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVmlld1JvdXRlcjtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInZpZXctcm91dGVyXCIsIFZpZXdSb3V0ZXIpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVm1sbGQxSnZkWFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyTnZiWEJ2Ym1WdWRITXZWbWxsZDFKdmRYUmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3cyUkVGQmFVVTdRVUZEYWtVc2QwUkJRVGhFTzBGQlF6bEVMSE5FUVVGM1JEdEJRVU40UkN4NVJFRkJiMFE3UVVGRGNFUXNhVU5CUVd0RE8wRkJWV3hETEVsQlFYRkNMRlZCUVZVc1IwRkJMMElzVFVGQmNVSXNWVUZCVnl4VFFVRlJMRzlEUVVGdlFpeERRVUZETEZkQlFWY3NRMEZCUXp0SlFVUjZSVHM3VVVGVGFVTXNWMEZCVFN4SFFVRkhMRWxCUVVrc1RVRkJUU3hGUVVGRkxFTkJRVU03U1VFclEzWkVMRU5CUVVNN1NVRjJRMkVzYVVKQlFXbENPMUZCUTNaQ0xFdEJRVXNzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hEUVVGRE8xRkJRekZDTEVsQlFVa3NRMEZCUXl4bFFVRmxMRVZCUVVVc1EwRkJRenRSUVVOMlFpeE5RVUZOTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03U1VGRGFFTXNRMEZCUXp0SlFWRlBMR1ZCUVdVN1VVRkRia0lzUzBGQlN5eE5RVUZOTEV0QlFVc3NTVUZCU1N4TlFVRk5MRU5CUVVNc1lVRkJZU3hGUVVGRk8xbEJRM1JETEUxQlFVMHNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhsUVVGbExFdEJRVXNzUzBGQlN5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRPMWxCUXpORUxFbEJRVWtzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFRRVU4wUXp0SlFVTk1MRU5CUVVNN1NVRlZUeXh2UWtGQmIwSXNRMEZCUXl4TFFVRlZPMUZCUTI1RExFbEJRVWs3V1VGRFFTeEpRVUZKTEVOQlFVTXNhME5CUVc5Q0xFTkJRVmNzUzBGQlN5eERRVUZETEdWQlFXVXNSVUZCUlN4RFFVRlRMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGQlJTeFBRVUZQTzFsQlF6TkhMRTFCUVUwc1ZVRkJWU3hIUVVGSExFbEJRVWtzUzBGQlN5eEZRVUZGTEVOQlFVTTdXVUZETDBJc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eGhRVUZoTEVWQlFVVTdaMEpCUXpOQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNSMEZCUnl4VlFVRlZMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzTWtOQlFUSkRMRU5CUVVNc1EwRkJRenRoUVVNNVJqdFpRVU5FTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0VFFVTnlRenRSUVVGRExFOUJRVThzUzBGQlN5eEZRVUZGTzFsQlExb3NUVUZCVFN4TFFVRkxMRU5CUVVNN1UwRkRaanRKUVVOTUxFTkJRVU03UTBGRFNpeERRVUZCTzBGQkwwTmxPMGxCUVZnc2NVSkJRVkVzUlVGQlJUczdNRU5CUVhkRE8wRkJVbXhETEZWQlFWVTdTVUZFT1VJc05FSkJRV1VzUlVGQlJUdEhRVU5ITEZWQlFWVXNRMEYxUkRsQ08ydENRWFpFYjBJc1ZVRkJWVHRCUVhkRUwwSXNZMEZCWXl4RFFVRkRMRTFCUVUwc1EwRkJReXhoUVVGaExFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBCYXNlQ29udHJvbGxlciB7XG59XG5leHBvcnRzLkJhc2VDb250cm9sbGVyID0gQmFzZUNvbnRyb2xsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRbUZ6WlVOdmJuUnliMnhzWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyTnNhV1Z1ZEM5MGN5OWpiMjUwY205c2JHVnljeTlDWVhObFEyOXVkSEp2Ykd4bGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVUxQkxFMUJRV0VzWTBGQll6dERRVUZKTzBGQlFTOUNMSGREUVVFclFpSjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5yZXF1aXJlKFwicmVmbGVjdC1tZXRhZGF0YVwiKTtcbmNvbnN0IGxvZGFzaF8xID0gcmVxdWlyZShcImxvZGFzaFwiKTtcbmNvbnN0IG51bmp1Y2tzXzEgPSByZXF1aXJlKFwibnVuanVja3NcIik7XG5jb25zdCBCRE9Nb2RlbF8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET01vZGVsXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5jbGllbnQvdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmZ1bmN0aW9uIEJhc2VDb21wb25lbnRGYWN0b3J5KEhUTUxUeXBlRWxlbWVudCkge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICBjbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgSFRNTFR5cGVFbGVtZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgICAgICB0aGlzLmlzQmFzZUNvbXBvbmVudCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiZGVmaW5lZFByb3BlcnRpZXNcIiwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlU3RyaW5nID0gJzxkaXY+PHNsb3Q+PC9zbG90PjwvZGl2Pic7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlUGFyYW1zID0ge307XG4gICAgICAgIH1cbiAgICAgICAgc2V0QXR0cmlidXRlKHF1YWxpZmllZE5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzICYmIHRoaXMucHJvcGVydGllcy5oYXMocXVhbGlmaWVkTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFwiJHtxdWFsaWZpZWROYW1lfVwiIGNhbid0IGJlIHNldCBhcyBhdHRyaWJ1dGUgYmVjYXVzZSBpdCBpcyBhIGRlZmluZWQgcHJvcGVydHlgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXNbcXVhbGlmaWVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHN1cGVyLnNldEF0dHJpYnV0ZShxdWFsaWZpZWROYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlQXR0cmlidXRlKHF1YWxpZmllZE5hbWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMgJiYgdGhpcy5wcm9wZXJ0aWVzLmhhcyhxdWFsaWZpZWROYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgXCIke3F1YWxpZmllZE5hbWV9XCIgY2FuJ3QgYmUgcmVtb3ZlZCBhcyBhdHRyaWJ1dGUgYmVjYXVzZSBpdCBpcyBhIGRlZmluZWQgcHJvcGVydHlgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1cGVyLnJlbW92ZUF0dHJpYnV0ZShxdWFsaWZpZWROYW1lKTtcbiAgICAgICAgICAgIHRoaXNbcXVhbGlmaWVkTmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY29uc3RydWN0b3IuZXh0ZW5kcykge1xuICAgICAgICAgICAgICAgIGxldCBzdHJpbmdUb1BhcnNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAobG9kYXNoXzEuaXNTdHJpbmcodGhpcy50ZW1wbGF0ZVN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nVG9QYXJzZSA9IG51bmp1Y2tzXzEucmVuZGVyU3RyaW5nKHRoaXMudGVtcGxhdGVTdHJpbmcsIHRoaXMudGVtcGxhdGVQYXJhbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobG9kYXNoXzEuaXNPYmplY3QodGhpcy50ZW1wbGF0ZVN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nVG9QYXJzZSA9IHRoaXMudGVtcGxhdGVTdHJpbmcucmVuZGVyKHRoaXMudGVtcGxhdGVQYXJhbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyaW5nVG9QYXJzZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc3RyaW5nVG9QYXJzZSwgJ3RleHQvaHRtbCcpO1xuICAgICAgICAgICAgICAgICAgICBzaGFkb3dSb290LmFwcGVuZENoaWxkKGRvYy5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHsgfVxuICAgICAgICBhZG9wdGVkQ2FsbGJhY2soKSB7IH1cbiAgICB9XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG4gICAgXSwgQmFzZUNvbXBvbmVudC5wcm90b3R5cGUsIFwiaXNCYXNlQ29tcG9uZW50XCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIHR5cGVvZiAoX2EgPSB0eXBlb2YgTWFwICE9PSBcInVuZGVmaW5lZFwiICYmIE1hcCkgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0KVxuICAgIF0sIEJhc2VDb21wb25lbnQucHJvdG90eXBlLCBcInByb3BlcnRpZXNcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdHlwZW9mIChfYiA9IHR5cGVvZiBCRE9Nb2RlbF8xLkJET01vZGVsICE9PSBcInVuZGVmaW5lZFwiICYmIEJET01vZGVsXzEuQkRPTW9kZWwpID09PSBcImZ1bmN0aW9uXCIgPyBfYiA6IE9iamVjdClcbiAgICBdLCBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJtb2RlbFwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgQmFzZUNvbXBvbmVudC5wcm90b3R5cGUsIFwidGVtcGxhdGVTdHJpbmdcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdHlwZW9mIChfZCA9IHR5cGVvZiBJbmRleFN0cnVjdHVyZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJbmRleFN0cnVjdHVyZSkgPT09IFwiZnVuY3Rpb25cIiA/IF9kIDogT2JqZWN0KVxuICAgIF0sIEJhc2VDb21wb25lbnQucHJvdG90eXBlLCBcInRlbXBsYXRlUGFyYW1zXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIEJhc2VDb21wb25lbnQ7XG59XG5leHBvcnRzLkJhc2VDb21wb25lbnRGYWN0b3J5ID0gQmFzZUNvbXBvbmVudEZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRbUZ6WlVOdmJYQnZibVZ1ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyeHBZaTlDWVhObFEyOXRjRzl1Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxEUkNRVUV3UWp0QlFVTXhRaXh0UTBGQk5FTTdRVUZETlVNc2RVTkJRV3RFTzBGQlEyeEVMR2RFUVVFMlF6dEJRVU0zUXl4NVJFRkJiMFE3UVVGVmNFUXNVMEZCWjBJc2IwSkJRVzlDTEVOQlFYbERMR1ZCUVhOQ096dEpRVkV2Uml4TlFVRmxMR0ZCUVdNc1UwRkJVU3hsUVVGbE8xRkJlVVJvUkN4WlFVRlpMRWRCUVVjc1NVRkJWenRaUVVOMFFpeExRVUZMTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVhoRFV5eHZRa0ZCWlN4SFFVRmhMRWxCUVVrc1EwRkJRenRaUVZGcVF5eGxRVUZWTEVkQlFYTkNMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zYlVKQlFXMUNMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGclFqVkZMRzFDUVVGakxFZEJRWE5DTERCQ1FVRXdRaXhEUVVGRE8xbEJWM2hGTEcxQ1FVRmpMRWRCUVcxQ0xFVkJRVVVzUTBGQlF6dFJRVWt4UkN4RFFVRkRPMUZCVlUwc1dVRkJXU3hEUVVGRExHRkJRWEZDTEVWQlFVVXNTMEZCWVR0WlFVTndSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVsQlFVa3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zWVVGQllTeERRVUZETEVWQlFVVTdaMEpCUTNaRUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNTVUZCU1N4aFFVRmhMRGhFUVVFNFJDeERRVUZETEVOQlFVTTdZVUZEY0VjN1dVRkRTeXhKUVVGTExFTkJRVU1zWVVGQllTeERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPMWxCUTI1RExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNZVUZCWVN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRemRETEVOQlFVTTdVVUZSVFN4bFFVRmxMRU5CUVVNc1lVRkJjVUk3V1VGRGVFTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMR0ZCUVdFc1EwRkJReXhGUVVGRk8yZENRVU4yUkN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzWVVGQllTeHJSVUZCYTBVc1EwRkJReXhEUVVGRE8yRkJRM2hITzFsQlEwUXNTMEZCU3l4RFFVRkRMR1ZCUVdVc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dFpRVU12UWl4SlFVRkxMRU5CUVVNc1lVRkJZU3hEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETzFGQlF6TkRMRU5CUVVNN1VVRlRVeXhwUWtGQmFVSTdXVUZGZGtJc1NVRkJTU3hEUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZaTEVOQlFVTXNUMEZCVHl4RlFVRkZPMmRDUVVWc1F5eEpRVUZKTEdGQlFXRXNSMEZCUnl4SlFVRkpMRU5CUVVNN1owSkJRM3BDTEVsQlFVa3NhVUpCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVWQlFVVTdiMEpCUXk5Q0xHRkJRV0VzUjBGQlJ5eDFRa0ZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRVVVzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMmxDUVVNeFJUdG5Ra0ZEUkN4SlFVRkpMR2xDUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RlFVRkZPMjlDUVVNdlFpeGhRVUZoTEVkQlFXTXNTVUZCU1N4RFFVRkRMR05CUVdVc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMmxDUVVNdlJUdG5Ra0ZEUkN4SlFVRkpMR0ZCUVdFc1JVRkJSVHR2UWtGRFppeE5RVUZOTEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN2IwSkJRM1pFTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1UwRkJVeXhGUVVGRkxFTkJRVU1zWlVGQlpTeERRVUZETEdGQlFXRXNSVUZCUlN4WFFVRlhMRU5CUVVNc1EwRkJRenR2UWtGRGVFVXNWVUZCVlN4RFFVRkRMRmRCUVZjc1EwRkJXU3hIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMmxDUVVNeFJEdGhRVU5LTzFGQlEwd3NRMEZCUXp0UlFWTlRMRzlDUVVGdlFpeExRVUZYTEVOQlFVTTdVVUZUYUVNc1pVRkJaU3hMUVVGWExFTkJRVU03UzBGRGVFTTdTVUZ3U0dVN1VVRkJXQ3h4UWtGQlVTeEZRVUZGT3pzd1JFRkJhMFE3U1VGUmFrUTdVVUZCV0N4eFFrRkJVU3hGUVVGRk96aEVRVUU0UWl4SFFVRkhMRzlDUVVGSUxFZEJRVWM3Y1VSQlFTdEVPMGxCVVM5R08xRkJRVmdzY1VKQlFWRXNSVUZCUlRzNFJFRkJaMElzYlVKQlFWRXNiMEpCUVZJc2JVSkJRVkU3WjBSQlFVTTdTVUZWZUVJN1VVRkJXQ3h4UWtGQlVTeEZRVUZGT3p0NVJFRkJiVVk3U1VGWGJFWTdVVUZCV0N4eFFrRkJVU3hGUVVGRk96aEVRVUV5UWl4alFVRmpMRzlDUVVGa0xHTkJRV003ZVVSQlFVMDdTVUZwUmpsRUxFOUJRVThzWVVGQllTeERRVUZETzBGQlEzcENMRU5CUVVNN1FVRnFTa1FzYjBSQmFVcERJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBsb2Rhc2hfMSA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5jb25zdCBMb2dnZXJfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9Mb2dnZXJcIik7XG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyXzEuTG9nZ2VyKCk7XG5mdW5jdGlvbiBCYXNlUm91dGVGYWN0b3J5KFJvdXRlVHlwZSkge1xuICAgIGNsYXNzIEJhc2VSb3V0ZSBleHRlbmRzIFJvdXRlVHlwZSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMuaXNDbGllbnRSb3V0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHJvdXRlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlcyA9IHt9O1xuICAgICAgICAgICAgZm9yIChjb25zdCByb3V0ZSBvZiB0aGlzLnJvdXRlcykge1xuICAgICAgICAgICAgICAgIHJvdXRlc1tgJHt0aGlzLnJvdXRlck5hbWVTcGFjZX0vJHtyb3V0ZX1gLnJlcGxhY2UoXCIvL1wiLCBcIi9cIildID0gdGhpcy5oYW5kbGVHZXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3V0ZXM7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMocGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VwZXIudGVtcGxhdGVQYXJhbXMocGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBoYW5kbGVHZXQocGFyYW1zKSB7XG4gICAgICAgICAgICBsb2dnZXIubG9nKGxvZGFzaF8xLm1lcmdlKGF3YWl0IHRoaXMudGVtcGxhdGVQYXJhbXNGcm9tU2VydmVyKCksIGF3YWl0IHRoaXMudGVtcGxhdGVQYXJhbXMocGFyYW1zKSkpO1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zRnJvbVNlcnZlcigpIHtcbiAgICAgICAgICAgIGxldCB1cmxUb0Fza0ZvciA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICAgICAgaWYgKCF1cmxUb0Fza0ZvcilcbiAgICAgICAgICAgICAgICB1cmxUb0Fza0ZvciA9IGAvYDtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdYLUdhbWUtQXMtSlNPTic6ICd0cnVlJyB9KTtcbiAgICAgICAgICAgIHJldHVybiAoYXdhaXQgZmV0Y2godXJsVG9Bc2tGb3IsIHsgaGVhZGVycyB9KSkuanNvbigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBCYXNlUm91dGU7XG59XG5leHBvcnRzLkJhc2VSb3V0ZUZhY3RvcnkgPSBCYXNlUm91dGVGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUW1GelpWSnZkWFJsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5amJHbGxiblF2ZEhNdmJHbGlMMEpoYzJWU2IzVjBaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVTkJMRzFEUVVFclFqdEJRVU12UWl3clEwRkJORU03UVVGRk5VTXNUVUZCVFN4TlFVRk5MRWRCUVVjc1NVRkJTU3hsUVVGTkxFVkJRVVVzUTBGQlF6dEJRVlUxUWl4VFFVRm5RaXhuUWtGQlowSXNRMEZCT0VNc1UwRkJaMEk3U1VGVE1VWXNUVUZCWlN4VFFVRlZMRk5CUVZNc1UwRkJPRU03VVVGQmFFWTdPMWxCVVc5Q0xHdENRVUZoTEVkQlFWa3NTVUZCU1N4RFFVRkRPMUZCYzBSc1JDeERRVUZETzFGQk9VTkhMRWxCUVZjc1RVRkJUVHRaUVVOaUxFMUJRVTBzVFVGQlRTeEhRVUZSTEVWQlFVVXNRMEZCUXp0WlFVTjJRaXhMUVVGTExFMUJRVTBzUzBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVN1owSkJRemRDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhsUVVGbExFbEJRVWtzUzBGQlN5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJGQlF6ZEdPMWxCUTBRc1QwRkJUeXhOUVVGTkxFTkJRVU03VVVGRGJFSXNRMEZCUXp0UlFWZFRMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU1zVFVGQmMwSTdXVUZEYWtRc1QwRkJUeXhMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTNoRExFTkJRVU03VVVGVFV5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVhOQ08xbEJRelZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1kwRkJTeXhEUVVGRExFMUJRVTBzU1VGQlNTeERRVUZETEhkQ1FVRjNRaXhGUVVGRkxFVkJRVVVzVFVGQlRTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5vUnl4RFFVRkRPMUZCVlU4c1MwRkJTeXhEUVVGRExIZENRVUYzUWp0WlFVTnNReXhKUVVGSkxGZEJRVmNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRPMWxCUTNCRExFbEJRVWtzUTBGQlF5eFhRVUZYTzJkQ1FVRkZMRmRCUVZjc1IwRkJSeXhIUVVGSExFTkJRVU03V1VGRGNFTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1NVRkJTU3hQUVVGUExFTkJRVU1zUlVGQlJTeG5Ra0ZCWjBJc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6RkVMRTlCUVU4c1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eFhRVUZYTEVWQlFVVXNSVUZCUlN4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZETVVRc1EwRkJRenRMUVVOS08wbEJSVVFzVDBGQlR5eFRRVUZUTEVOQlFVTTdRVUZEY2tJc1EwRkJRenRCUVRGRlJDdzBRMEV3UlVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJET0NvbmZpZ01hbmFnZXJfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Db25maWdNYW5hZ2VyXCIpO1xuY2xhc3MgQ29uZmlnTWFuYWdlciBleHRlbmRzIEJET0NvbmZpZ01hbmFnZXJfMS5CRE9Db25maWdNYW5hZ2VyIHtcbiAgICBzZXQoX2NvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIGxvYWQoX2NvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIGdldENhY2hlKF9jb25maWcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgICBzZXRDYWNoZShfY29uZmlnLCBfdmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29uZmlnTWFuYWdlciA9IENvbmZpZ01hbmFnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMjl1Wm1sblRXRnVZV2RsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyeHBZaTlEYjI1bWFXZE5ZVzVoWjJWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc1owVkJRVFpFTzBGQlR6ZEVMRTFCUVdFc1lVRkJZeXhUUVVGUkxHMURRVUZuUWp0SlFWTjRReXhIUVVGSExFTkJRVU1zVDBGQlpUdFJRVU4wUWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExIbENRVUY1UWl4RFFVRkRMRU5CUVVNN1NVRkRMME1zUTBGQlF6dEpRVlZUTEVsQlFVa3NRMEZCUXl4UFFVRmxPMUZCUXpGQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU1zUTBGQlF6dEpRVU12UXl4RFFVRkRPMGxCVlZNc1VVRkJVU3hEUVVGRExFOUJRV1U3VVVGRE9VSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4RFFVRkRPMGxCUXk5RExFTkJRVU03U1VGWFV5eFJRVUZSTEVOQlFVTXNUMEZCWlN4RlFVRkZMRTFCUVZjN1VVRkRNME1zVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eERRVUZETzBsQlF5OURMRU5CUVVNN1EwRkRTanRCUVdwRVJDeHpRMEZwUkVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgX2E7XG5cInVzZSBzdHJpY3RcIjtcbmNvbnN0IEJET0xvZ2dlcl8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET0xvZ2dlclwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5sZXQgTG9nZ2VyID0gY2xhc3MgTG9nZ2VyIGV4dGVuZHMgQkRPTG9nZ2VyXzEuQkRPTG9nZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICAgICAgc3VwZXIocGFyYW1zKTtcbiAgICAgICAgdGhpcy5sb2dMZXZlbENvbG9ycyA9IHtcbiAgICAgICAgICAgIGxvZzogJ2NvbG9yOiBncmF5OyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgICAgICAgICAgZGVidWc6ICdjb2xvcjogZ3JlZW47IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICBpbmZvOiAnY29sb3I6ICMwMDgwNkI7IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICB3YXJuOiAnY29sb3I6ICM4MDgwMDA7IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICBlcnJvcjogJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkOydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0SGVhZGVyKGxvZ0xldmVsLCBwcmludEVudiA9ICdjb25zb2xlJykge1xuICAgICAgICBjb25zdCBwcm9jSW5mbyA9IHRoaXMuZ2V0UHJvY0luZm8oKTtcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lKCk7XG4gICAgICAgIGNvbnN0IHVwcGVyTG9nTGV2ZWwgPSBsb2dMZXZlbC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2dQb2ludCA9IHRoaXMuZ2V0TG9nUG9pbnQoKTtcbiAgICAgICAgY29uc3QgcmVzZXRTdHlsZSA9ICdjb2xvcjogYmxhY2s7IGZvbnQtd2VpZ2h0OiBub3JtYWwnO1xuICAgICAgICBjb25zdCBtYWdlbnRhID0gJ2NvbG9yOiAjODAwMDgwOyBmb250LXdlaWdodDogbm9ybWFsJztcbiAgICAgICAgY29uc3QgY3lhbiA9ICdjb2xvcjogIzAwODA2QjsgZm9udC13ZWlnaHQ6IG5vcm1hbCc7XG4gICAgICAgIGlmIChwcmludEVudiA9PT0gJ2NvbnNvbGUnKSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRMb2dMZXZlbCA9IHRoaXMubG9nTGV2ZWxDb2xvcnNbbG9nTGV2ZWxdO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkTG9nUG9pbnQgPSBtYWdlbnRhO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkVGltZSA9IGN5YW47XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRQcm9jSW5mbyA9IG1hZ2VudGE7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIGAlY1slYyR7dXBwZXJMb2dMZXZlbH0gJWMtICVjJHtwcm9jSW5mb30gJWMtICVjJHtjdXJyZW50VGltZX0gJWNhdCAlYyR7bG9nUG9pbnR9JWNdYCxcbiAgICAgICAgICAgICAgICByZXNldFN0eWxlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZExvZ0xldmVsLFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkUHJvY0luZm8sXG4gICAgICAgICAgICAgICAgcmVzZXRTdHlsZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRUaW1lLFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkTG9nUG9pbnQsXG4gICAgICAgICAgICAgICAgcmVzZXRTdHlsZVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYFske3VwcGVyTG9nTGV2ZWx9IC0gJHtwcm9jSW5mb30gLSAke2N1cnJlbnRUaW1lfSAtICR7bG9nUG9pbnR9XWA7XG4gICAgfVxuICAgIHdyaXRlVG9GaWxlKF9sb2dMZXZlbCwgX21lc3NhZ2UpIHtcbiAgICB9XG59O1xuTG9nZ2VyID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgQ29uc3RQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIgJiYgQ29uc3RQYXJhbXMpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdF0pXG5dLCBMb2dnZXIpO1xuZXhwb3J0cy5Mb2dnZXIgPSBMb2dnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lURzluWjJWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOWpiR2xsYm5RdmRITXZiR2xpTDB4dloyZGxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTEd0RVFVRTJSVHRCUVVNM1JTeHpSRUZCZDBRN1FVRlZlRVFzU1VGQllTeE5RVUZOTEVkQlFXNUNMRTFCUVdFc1RVRkJUeXhUUVVGUkxIRkNRVUZUTzBsQlpXcERMRmxCUVZrc1RVRkJORUk3VVVGRGNFTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJWRllzYlVKQlFXTXNSMEZCUnp0WlFVTnlRaXhIUVVGSExFVkJRVVVzYVVOQlFXbERPMWxCUTNSRExFdEJRVXNzUlVGQlJTeHJRMEZCYTBNN1dVRkRla01zU1VGQlNTeEZRVUZGTEc5RFFVRnZRenRaUVVNeFF5eEpRVUZKTEVWQlFVVXNiME5CUVc5RE8xbEJRekZETEV0QlFVc3NSVUZCUlN4blEwRkJaME03VTBGRE1VTXNRMEZCUXp0SlFVbEdMRU5CUVVNN1NVRlhVeXhUUVVGVExFTkJRVU1zVVVGQmJVSXNSVUZCUlN4WFFVRTRRaXhUUVVGVE8xRkJRelZGTEUxQlFVMHNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dFJRVU53UXl4TlFVRk5MRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdVVUZEZGtNc1RVRkJUU3hoUVVGaExFZEJRVWNzVVVGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUXpkRExFMUJRVTBzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRSUVVOd1F5eE5RVUZOTEZWQlFWVXNSMEZCUnl4dFEwRkJiVU1zUTBGQlF6dFJRVU4yUkN4TlFVRk5MRTlCUVU4c1IwRkJSeXh4UTBGQmNVTXNRMEZCUXp0UlFVTjBSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eHhRMEZCY1VNc1EwRkJRenRSUVVOdVJDeEpRVUZKTEZGQlFWRXNTMEZCU3l4VFFVRlRMRVZCUVVVN1dVRkRlRUlzVFVGQlRTeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMWxCUTNoRUxFMUJRVTBzYVVKQlFXbENMRWRCUVVjc1QwRkJUeXhEUVVGRE8xbEJRMnhETEUxQlFVMHNZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVNelFpeE5RVUZOTEdsQ1FVRnBRaXhIUVVGSExFOUJRVThzUTBGQlF6dFpRVU5zUXl4UFFVRlBPMmRDUVVOSUxGRkJRVkVzWVVGQllTeFZRVUZWTEZGQlFWRXNWVUZCVlN4WFFVRlhMRmRCUVZjc1VVRkJVU3hMUVVGTE8yZENRVU53Uml4VlFVRlZPMmRDUVVOV0xHbENRVUZwUWp0blFrRkRha0lzVlVGQlZUdG5Ra0ZEVml4cFFrRkJhVUk3WjBKQlEycENMRlZCUVZVN1owSkJRMVlzWVVGQllUdG5Ra0ZEWWl4VlFVRlZPMmRDUVVOV0xHbENRVUZwUWp0blFrRkRha0lzVlVGQlZUdGhRVU5pTEVOQlFVTTdVMEZEVER0UlFVTkVMRTlCUVU4c1NVRkJTU3hoUVVGaExFMUJRVTBzVVVGQlVTeE5RVUZOTEZkQlFWY3NUVUZCVFN4UlFVRlJMRWRCUVVjc1EwRkJRenRKUVVNM1JTeERRVUZETzBsQlZWTXNWMEZCVnl4RFFVRkRMRk5CUVc5Q0xFVkJRVVVzVVVGQllUdEpRVVY2UkN4RFFVRkRPME5CUTBvc1EwRkJRVHRCUVhCRldTeE5RVUZOTzBsQlJHeENMRFJDUVVGbExFVkJRVVU3YVVWQlowSlBMRmRCUVZjc2IwSkJRVmdzVjBGQlZ6dEhRV1oyUWl4TlFVRk5MRU5CYjBWc1FqdEJRWEJGV1N4M1FrRkJUU0o5IiwidmFyIG1hcCA9IHtcblx0XCIuL0NvbmZpZy50c1wiOiBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0NvbmZpZy50c1wiLFxuXHRcIi4vR2FtZUxvYmJ5LnRzXCI6IFwiLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvR2FtZUxvYmJ5LnRzXCIsXG5cdFwiLi9Ib21lLnRzXCI6IFwiLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvSG9tZS50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC50cyRcIjsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJhc2VSb3V0ZV8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0Jhc2VSb3V0ZVwiKTtcbmNvbnN0IEJET0NvbmZpZ18xID0gcmVxdWlyZShcIn5iZG8vcm91dGVzL0JET0NvbmZpZ1wiKTtcbmNsYXNzIENvbmZpZyBleHRlbmRzIEJhc2VSb3V0ZV8xLkJhc2VSb3V0ZUZhY3RvcnkoQkRPQ29uZmlnXzEuQkRPQ29uZmlnKSB7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBDb25maWc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMjl1Wm1sbkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOWpiR2xsYm5RdmRITXZjbTkxZEdWekwwTnZibVpwWnk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTEhGRVFVRjVSRHRCUVVONlJDeHhSRUZCYTBRN1FVRlRiRVFzVFVGQmNVSXNUVUZCVHl4VFFVRlJMRFJDUVVGblFpeERRVUZETEhGQ1FVRlRMRU5CUVVNN1EwRkJTVHRCUVVGdVJTeDVRa0ZCYlVVaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJhc2VSb3V0ZV8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0Jhc2VSb3V0ZVwiKTtcbmNvbnN0IEJET0dhbWVMb2JieV8xID0gcmVxdWlyZShcIn5iZG8vcm91dGVzL0JET0dhbWVMb2JieVwiKTtcbmNsYXNzIEdhbWVMb2JieSBleHRlbmRzIEJhc2VSb3V0ZV8xLkJhc2VSb3V0ZUZhY3RvcnkoQkRPR2FtZUxvYmJ5XzEuQkRPR2FtZUxvYmJ5KSB7XG4gICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZXN0OiAnbG9sJ1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEdhbWVMb2JieTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVIyRnRaVXh2WW1KNUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOWpiR2xsYm5RdmRITXZjbTkxZEdWekwwZGhiV1ZNYjJKaWVTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxIRkVRVUY1UkR0QlFVTjZSQ3d5UkVGQmQwUTdRVUZUZUVRc1RVRkJjVUlzVTBGQlZTeFRRVUZSTERSQ1FVRm5RaXhEUVVGRExESkNRVUZaTEVOQlFVTTdTVUZWZGtRc1MwRkJTeXhEUVVGRExHTkJRV003VVVGRE1VSXNUMEZCVHp0WlFVTklMRWxCUVVrc1JVRkJSU3hMUVVGTE8xTkJRMlFzUTBGQlF6dEpRVU5PTEVOQlFVTTdRMEZEU2p0QlFXWkVMRFJDUVdWREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJhc2VSb3V0ZV8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0Jhc2VSb3V0ZVwiKTtcbmNvbnN0IEJET0hvbWVfMSA9IHJlcXVpcmUoXCJ+YmRvL3JvdXRlcy9CRE9Ib21lXCIpO1xuY2xhc3MgSG9tZSBleHRlbmRzIEJhc2VSb3V0ZV8xLkJhc2VSb3V0ZUZhY3RvcnkoQkRPSG9tZV8xLkJET0hvbWUpIHtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEhvbWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lTRzl0WlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwzSnZkWFJsY3k5SWIyMWxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNjVVJCUVhsRU8wRkJRM3BFTEdsRVFVRTRRenRCUVZNNVF5eE5RVUZ4UWl4SlFVRkxMRk5CUVZFc05FSkJRV2RDTEVOQlFVTXNhVUpCUVU4c1EwRkJRenREUVVGSk8wRkJRUzlFTEhWQ1FVRXJSQ0o5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwicmVmbGVjdC1tZXRhZGF0YVwiKTtcbmZ1bmN0aW9uIHByb3BlcnR5KCkge1xuICAgIHJldHVybiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcERlc2MgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICAgIGlmICghUmVmbGVjdC5oYXNNZXRhZGF0YShcImRlZmluZWRQcm9wZXJ0aWVzXCIsIHRhcmdldCkpIHtcbiAgICAgICAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJkZWZpbmVkUHJvcGVydGllc1wiLCBuZXcgTWFwKCksIHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvcGVydHlNYXAgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiZGVmaW5lZFByb3BlcnRpZXNcIiwgdGFyZ2V0KTtcbiAgICAgICAgcHJvcGVydHlNYXAuc2V0KGtleS50b1N0cmluZygpLCB0YXJnZXQuY29uc3RydWN0b3Jba2V5XSk7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBrZXkpO1xuICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXRNZXRhZGF0YShrZXksIHRoaXMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld1ZhbCkge1xuICAgICAgICAgICAgICAgIGlmIChuZXdWYWwgPT09IFJlZmxlY3QuZ2V0TWV0YWRhdGEoa2V5LCB0aGlzKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmIChwcm9wRGVzYyAmJiBwcm9wRGVzYy5zZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcERlc2Muc2V0LmNhbGwodGhpcywgbmV3VmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKGtleSwgbmV3VmFsLCB0aGlzKTtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU1hcC5zZXQoa2V5LnRvU3RyaW5nKCksIG5ld1ZhbCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xufVxuZXhwb3J0cy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuZnVuY3Rpb24gYXR0cmlidXRlKCkge1xuICAgIHJldHVybiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcERlc2MgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBrZXkpO1xuICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXRNZXRhZGF0YShrZXksIHRoaXMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld1ZhbCkge1xuICAgICAgICAgICAgICAgIGlmIChuZXdWYWwgPT09IFJlZmxlY3QuZ2V0TWV0YWRhdGEoa2V5LCB0aGlzKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IGtleS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGlmICghUmVmbGVjdC5nZXRNZXRhZGF0YShgJHtrZXkudG9TdHJpbmcoKX1Jbml0aWFsaXplZGAsIHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbCA9IHRoaXMuZ2V0QXR0cmlidXRlKHN0cmluZ0tleSkgfHwgbmV3VmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJvcERlc2MgJiYgcHJvcERlc2Muc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BEZXNjLnNldC5jYWxsKHRoaXMsIG5ld1ZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShrZXksIG5ld1ZhbCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHRoaXMuZ2V0QXR0cmlidXRlKHN0cmluZ0tleSkgIT09IG5ld1ZhbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShzdHJpbmdLZXksIG5ld1ZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoYCR7a2V5LnRvU3RyaW5nKCl9SW5pdGlhbGl6ZWRgLCB0cnVlLCB0aGlzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG59XG5leHBvcnRzLmF0dHJpYnV0ZSA9IGF0dHJpYnV0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpHVmpiM0poZEc5eWN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZZMnhwWlc1MEwzUnpMM1YwYVd4ekwyUmxZMjl5WVhSdmNuTXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTdzBRa0ZCTUVJN1FVRlZNVUlzVTBGQlowSXNVVUZCVVR0SlFVTndRaXhQUVVGUExFTkJRVU1zVFVGQlZ5eEZRVUZGTEVkQlFXOUNMRVZCUVVVc1JVRkJSVHRSUVVWNlF5eE5RVUZOTEZGQlFWRXNSMEZCUnl4UFFVRlBMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSeTlFTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExHMUNRVUZ0UWl4RlFVRkZMRTFCUVUwc1EwRkJReXhGUVVGRk8xbEJRMjVFTEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc2JVSkJRVzFDTEVWQlFVVXNTVUZCU1N4SFFVRkhMRVZCUVdVc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFRRVU12UlR0UlFVTkVMRTFCUVUwc1YwRkJWeXhIUVVGeFFpeFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRzFDUVVGdFFpeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTNaR0xGZEJRVmNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVkNlJDeFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU53UXl4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVWQlFVVTdXVUZEYUVNc1IwRkJSeXhGUVVGRkxGTkJRVk1zUjBGQlJ6dG5Ra0ZEWWl4UFFVRlBMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUXpGRExFTkJRVU03V1VGRFJDeEhRVUZITEVWQlFVVXNVMEZCVXl4SFFVRkhMRU5CUVVNc1RVRkJWenRuUWtGRGVrSXNTVUZCU1N4TlFVRk5MRXRCUVVzc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRPMjlDUVVGRkxFOUJRVTg3WjBKQlIzUkVMRWxCUVVrc1VVRkJVU3hKUVVGSkxGRkJRVkVzUTBGQlF5eEhRVUZITEVWQlFVVTdiMEpCUXpGQ0xGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dHBRa0ZEYmtNN08yOUNRVUZOTEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkhha1FzVjBGQlZ5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdXVUZETlVNc1EwRkJRenRaUVVORUxGVkJRVlVzUlVGQlJTeEpRVUZKTzFsQlEyaENMRmxCUVZrc1JVRkJSU3hKUVVGSk8xTkJRM0pDTEVOQlFVTXNRMEZCUXp0SlFVTlFMRU5CUVVNc1EwRkJRenRCUVVOT0xFTkJRVU03UVVGcVEwUXNORUpCYVVORE8wRkJVMFFzVTBGQlowSXNVMEZCVXp0SlFVTnlRaXhQUVVGUExFTkJRVU1zVFVGQlZ5eEZRVUZGTEVkQlFXOUNMRVZCUVVVc1JVRkJSVHRSUVVWNlF5eE5RVUZOTEZGQlFWRXNSMEZCUnl4UFFVRlBMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSeTlFTEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzQkRMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NSVUZCUlR0WlFVTm9ReXhIUVVGSExFVkJRVVVzVTBGQlV5eEhRVUZITzJkQ1FVTmlMRTlCUVU4c1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUTBGQlF6dFpRVU5FTEVkQlFVY3NSVUZCUlN4VFFVRlRMRWRCUVVjc1EwRkJReXhOUVVGWE8yZENRVU42UWl4SlFVRkpMRTFCUVUwc1MwRkJTeXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEVkQlFVY3NSVUZCUlN4SlFVRkpMRU5CUVVNN2IwSkJRVVVzVDBGQlR6dG5Ra0ZEZEVRc1RVRkJUU3hUUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMmRDUVVkcVF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNZVUZCWVN4RlFVRkZMRWxCUVVrc1EwRkJReXhGUVVGRk8yOUNRVU0xUkN4TlFVRk5MRWRCUVdsQ0xFbEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1RVRkJUU3hEUVVGRE8ybENRVU5zUlR0blFrRkhSQ3hKUVVGSkxGRkJRVkVzU1VGQlNTeFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRkZPMjlDUVVNeFFpeFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdhVUpCUTI1RE96dHZRa0ZCVFN4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUlVGQlJTeE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJSMnBFTEVsQlFVa3NUVUZCVFN4WlFVRlpMRmRCUVZjc1NVRkJhMElzU1VGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhOUVVGTkxFVkJRVVU3YjBKQlF6TkZMRWxCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zVTBGQlV5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMmxDUVVOMlJEdG5Ra0ZIUkN4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4aFFVRmhMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEzWkZMRU5CUVVNN1dVRkRSQ3hWUVVGVkxFVkJRVVVzU1VGQlNUdFpRVU5vUWl4WlFVRlpMRVZCUVVVc1NVRkJTVHRUUVVOeVFpeERRVUZETEVOQlFVTTdTVUZEVUN4RFFVRkRMRU5CUVVNN1FVRkRUaXhEUVVGRE8wRkJja05FTERoQ1FYRkRReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBtcyA9IHJlcXVpcmUoXCJtc1wiKTtcbmNvbnN0IEJET01hcENhY2hlXzEgPSByZXF1aXJlKFwifmJkby9saWIvQkRPTWFwQ2FjaGVcIik7XG5jbGFzcyBCRE9Db25maWdNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBCRE9NYXBDYWNoZV8xLkJET01hcENhY2hlKCk7XG4gICAgfVxuICAgIGFzeW5jIGdldChjb25maWcpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gYXdhaXQgdGhpcy5nZXRDYWNoZShjb25maWcpO1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGF3YWl0IHRoaXMubG9hZChjb25maWcpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRDYWNoZShjb25maWcsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKTtcbiAgICB9XG4gICAgZ2V0Q2FjaGUoY29uZmlnKSB7XG4gICAgICAgIGNvbnN0IGZyb21Mb2NhbENhY2hlID0gdGhpcy5jYWNoZS5nZXQoY29uZmlnKTtcbiAgICAgICAgaWYgKGZyb21Mb2NhbENhY2hlKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbUxvY2FsQ2FjaGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGFzeW5jIHNldENhY2hlKGNvbmZpZywgdmFsdWUpIHtcbiAgICAgICAgbGV0IGNvbmYgPSB0aGlzLmNhY2hlLmdldCgnX19Db25maWdNYW5hZ2VyQ2FjaGVUaW1lb3V0X18nKTtcbiAgICAgICAgaWYgKCF0aGlzLmNhY2hlLmhhcygnX19Db25maWdNYW5hZ2VyQ2FjaGVUaW1lb3V0X18nKSkge1xuICAgICAgICAgICAgY29uZiA9IChhd2FpdCB0aGlzLmxvYWQoJ2NvbmZpZycpKS50aW1lb3V0cy5jb25maWdDYWNoZTtcbiAgICAgICAgICAgIGlmIChjb25mKVxuICAgICAgICAgICAgICAgIGNvbmYgPSBtcyhjb25mKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUuc2V0KCdfX0NvbmZpZ01hbmFnZXJDYWNoZVRpbWVvdXRfXycsIGNvbmYpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGUuc2V0KGNvbmZpZywgdmFsdWUsIGNvbmYpO1xuICAgIH1cbn1cbmV4cG9ydHMuQkRPQ29uZmlnTWFuYWdlciA9IEJET0NvbmZpZ01hbmFnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQUTI5dVptbG5UV0Z1WVdkbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiR2xpTDBKRVQwTnZibVpwWjAxaGJtRm5aWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3g1UWtGQk1FSTdRVUZETVVJc2MwUkJRVzFFTzBGQmJVSnVSQ3hOUVVGelFpeG5Ra0ZCWjBJN1NVRkJkRU03VVVGVll5eFZRVUZMTEVkQlFUWkNMRWxCUVVrc2VVSkJRVmNzUlVGQlJTeERRVUZETzBsQmQwVnNSU3hEUVVGRE8wbEJMMFJWTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJZenRSUVVNelFpeEpRVUZKTEV0QlFVc3NSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZEZUVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJUdFpRVU5TTEV0QlFVc3NSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZEYUVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRUUVVOMFF6dFJRVU5FTEU5QlFVOHNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU5zUXl4RFFVRkRPMGxCT0VKVExGRkJRVkVzUTBGQlF5eE5RVUZqTzFGQlF6ZENMRTFCUVUwc1kwRkJZeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRemxETEVsQlFVa3NZMEZCWXl4RlFVRkZPMWxCUTJoQ0xFOUJRVThzWTBGQll5eERRVUZETzFOQlEzcENPMUZCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGRGFFSXNRMEZCUXp0SlFWZFRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQll5eEZRVUZGTEV0QlFWVTdVVUZETDBNc1NVRkJTU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc0swSkJRU3RDTEVOQlFVTXNRMEZCUXp0UlFVTXpSQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc0swSkJRU3RDTEVOQlFVTXNSVUZCUlR0WlFVTnNSQ3hKUVVGSkxFZEJRVWNzUTBGQlF5eE5RVUZOTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRPMWxCUTNoRUxFbEJRVWtzU1VGQlNUdG5Ra0ZCUlN4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlF6RkNMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEN0Q1FVRXJRaXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFOQlEzcEVPMUZCUTBRc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RlFVRkZMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU40UXl4RFFVRkRPME5CUTBvN1FVRnNSa1FzTkVOQmEwWkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuY29uc3QgcGF0aF8xID0gcmVxdWlyZShcInBhdGhcIik7XG5jb25zdCBlbnZpcm9ubWVudF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZW52aXJvbm1lbnRcIik7XG5jbGFzcyBCRE9Mb2dnZXIge1xuICAgIGNvbnN0cnVjdG9yKF9wYXJhbXMpIHtcbiAgICAgICAgdGhpcy5sb2dGaWxlID0gJ2RlZmF1bHQubG9nJztcbiAgICAgICAgdGhpcy5wcmV2ZW50Q29uc29sZVByaW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJldmVudEZpbGVQcmludCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvZ0xldmVsID0gJ2RlYnVnJztcbiAgICAgICAgdGhpcy5wcm90b3R5cGVOYW1lcyA9IGVudmlyb25tZW50XzEuZ2V0UHJvdG90eXBlTmFtZXNSZWN1cnNpdmUodGhpcyk7XG4gICAgfVxuICAgIGxvZyhtZXNzYWdlLCBsb2dsZXZlbCA9ICdsb2cnLCAuLi5hcmdzKSB7XG4gICAgICAgIGlmIChsb2dsZXZlbCAhPT0gJ2xvZycgJiYgIXRoaXMuaXNBbGxvd2VkKGxvZ2xldmVsKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLnByZXZlbnRDb25zb2xlUHJpbnQgfHwgWydsb2cnLCAnZXJyb3InXS5pbmNsdWRlcyhsb2dsZXZlbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0SGVhZGVyKGxvZ2xldmVsKTtcbiAgICAgICAgICAgIGxldCBuZXdBcmdzID0gW107XG4gICAgICAgICAgICBpZiAoaGVhZGVyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBuZXdBcmdzID0gbmV3QXJncy5jb25jYXQoaGVhZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBuZXdBcmdzLnB1c2goaGVhZGVyKTtcbiAgICAgICAgICAgIG5ld0FyZ3MucHVzaChtZXNzYWdlKTtcbiAgICAgICAgICAgIG5ld0FyZ3MgPSBuZXdBcmdzLmNvbmNhdChhcmdzKTtcbiAgICAgICAgICAgIGNvbnNvbGVbbG9nbGV2ZWxdLmFwcGx5KHRoaXMsIG5ld0FyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGFyZ3MpO1xuICAgICAgICBpZiAoIXRoaXMucHJldmVudEZpbGVQcmludCB8fCBsb2dsZXZlbCA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy53cml0ZVRvRmlsZShsb2dsZXZlbCwgbWVzc2FnZSArIHBhcnNlZFN0cmluZy5zdWJzdHIoMSwgcGFyc2VkU3RyaW5nLmxlbmd0aCAtIDIpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWJ1ZyhtZXNzYWdlLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGFwcGx5ID0gW21lc3NhZ2UsICdkZWJ1ZyddLmNvbmNhdChhcmdzKTtcbiAgICAgICAgdGhpcy5sb2cuYXBwbHkodGhpcywgYXBwbHkpO1xuICAgIH1cbiAgICBpbmZvKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgYXBwbHkgPSBbbWVzc2FnZSwgJ2luZm8nXS5jb25jYXQoYXJncyk7XG4gICAgICAgIHRoaXMubG9nLmFwcGx5KHRoaXMsIGFwcGx5KTtcbiAgICB9XG4gICAgd2FybihtZXNzYWdlLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGFwcGx5ID0gW21lc3NhZ2UsICd3YXJuJ10uY29uY2F0KGFyZ3MpO1xuICAgICAgICB0aGlzLmxvZy5hcHBseSh0aGlzLCBhcHBseSk7XG4gICAgfVxuICAgIGVycm9yKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgYXBwbHkgPSBbbWVzc2FnZSwgJ2Vycm9yJ10uY29uY2F0KGFyZ3MpO1xuICAgICAgICB0aGlzLmxvZy5hcHBseSh0aGlzLCBhcHBseSk7XG4gICAgfVxuICAgIGdldFByb2NJbmZvKCkge1xuICAgICAgICByZXR1cm4gYCR7Z2xvYmFsLnByb2Nlc3MuZW52Lm5hbWUgfHwgJyd9ICR7Z2xvYmFsLnByb2Nlc3MuZW52LnBtX2lkIHx8ICcnfSAke2dsb2JhbC5wcm9jZXNzLnBpZH1gO1xuICAgIH1cbiAgICBpc0FsbG93ZWQobG9nTGV2ZWwpIHtcbiAgICAgICAgY29uc3QgbG9nTGV2ZWxPcmRlciA9IFsnbG9nJywgJ2RlYnVnJywgJ2luZm8nLCAnd2FybicsICdlcnJvciddO1xuICAgICAgICByZXR1cm4gbG9nTGV2ZWxPcmRlci5pbmRleE9mKGxvZ0xldmVsKSA+PSBsb2dMZXZlbE9yZGVyLmluZGV4T2YodGhpcy5sb2dMZXZlbCk7XG4gICAgfVxuICAgIGN1cnJlbnRUaW1lKCkge1xuICAgICAgICByZXR1cm4gbW9tZW50KCkuZm9ybWF0KCdERC5NTS5ZWVlZIEhIOm1tOnNzJyk7XG4gICAgfVxuICAgIGdldExvZ1BvaW50KCkge1xuICAgICAgICBjb25zdCBzdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgbGV0IGNhbGxwb2ludDtcbiAgICAgICAgZm9yIChjb25zdCBbaW5kZXgsIHN0YWNrcGFydF0gb2Ygc3RhY2suZW50cmllcygpKSB7XG4gICAgICAgICAgICBpZiAoIWluZGV4KVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCFlbnZpcm9ubWVudF8xLmluY2x1ZGVzTWVtYmVyT2ZMaXN0KHN0YWNrcGFydCwgdGhpcy5wcm90b3R5cGVOYW1lcywgJy50cycpKSB7XG4gICAgICAgICAgICAgICAgY2FsbHBvaW50ID0gc3RhY2twYXJ0LnNwbGl0KHBhdGhfMS5zZXApLnBvcCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxscG9pbnQpIHtcbiAgICAgICAgICAgIGNhbGxwb2ludCA9IGNhbGxwb2ludC5yZXBsYWNlKCcpJywgJycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsbHBvaW50ID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbGxwb2ludDtcbiAgICB9XG59XG5leHBvcnRzLkJET0xvZ2dlciA9IEJET0xvZ2dlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBURzluWjJWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXNhV0l2UWtSUFRHOW5aMlZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRMEVzYVVOQlFXbERPMEZCUTJwRExDdENRVUV5UWp0QlFVTXpRaXgzUkVGQk1FWTdRVUZYTVVZc1RVRkJjMElzVTBGQlV6dEpRV3RFTTBJc1dVRkJXU3hQUVVGblF6dFJRVE5EY2tNc1dVRkJUeXhIUVVGWkxHRkJRV0VzUTBGQlF6dFJRVkZxUXl4M1FrRkJiVUlzUjBGQllTeExRVUZMTEVOQlFVTTdVVUZSZEVNc2NVSkJRV2RDTEVkQlFXRXNTMEZCU3l4RFFVRkRPMUZCWlc1RExHRkJRVkVzUjBGQlpTeFBRVUZQTEVOQlFVTTdVVUZWYmtJc2JVSkJRV01zUjBGQllTeDNRMEZCTUVJc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVVV2UWl4RFFVRkRPMGxCVnpGRExFZEJRVWNzUTBGQlF5eFBRVUZaTEVWQlFVVXNWMEZCYzBJc1MwRkJTeXhGUVVGRkxFZEJRVWNzU1VGQlZ6dFJRVU5vUlN4SlFVRkpMRkZCUVZFc1MwRkJTeXhMUVVGTExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJRenRaUVVGRkxFOUJRVTg3VVVGRE5VUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVN1dVRkRiRVVzVFVGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVU40UXl4SlFVRkpMRTlCUVU4c1IwRkJZU3hGUVVGRkxFTkJRVU03V1VGRE0wSXNTVUZCU1N4TlFVRk5MRmxCUVZrc1MwRkJTeXhGUVVGRk8yZENRVU42UWl4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0aFFVTndRenM3WjBKQlFVMHNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFpRVU0xUWl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFsQlEzUkNMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTJRc1QwRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VTBGRE5VUTdVVUZEUkN4TlFVRk5MRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUXpGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFbEJRVWtzVVVGQlVTeExRVUZMTEU5QlFVOHNSVUZCUlR0WlFVTm9SQ3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4UFFVRlBMRWRCUVVjc1dVRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNXVUZCV1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzcEdPMGxCUTB3c1EwRkJRenRKUVZGTkxFdEJRVXNzUTBGQlF5eFBRVUZaTEVWQlFVVXNSMEZCUnl4SlFVRlRPMUZCUTI1RExFMUJRVTBzUzBGQlN5eEhRVUZITEVOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTTVReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVc5Q0xFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEyeEVMRU5CUVVNN1NVRlJUU3hKUVVGSkxFTkJRVU1zVDBGQldTeEZRVUZGTEVkQlFVY3NTVUZCVXp0UlFVTnNReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eERRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZETjBNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRnZRaXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU5zUkN4RFFVRkRPMGxCVVUwc1NVRkJTU3hEUVVGRExFOUJRVmtzUlVGQlJTeEhRVUZITEVsQlFWTTdVVUZEYkVNc1RVRkJUU3hMUVVGTExFZEJRVWNzUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlF6ZERMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NSVUZCYjBJc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJFUXNRMEZCUXp0SlFWRk5MRXRCUVVzc1EwRkJReXhQUVVGWkxFVkJRVVVzUjBGQlJ5eEpRVUZUTzFGQlEyNURMRTFCUVUwc1MwRkJTeXhIUVVGSExFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU01UXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVWQlFXOUNMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMnhFTEVOQlFVTTdTVUZUVXl4WFFVRlhPMUZCUTJwQ0xFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFbEJRVWtzUlVGQlJTeEpRVUZKTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzU1VGQlNTeEZRVUZGTEVsQlFVa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dEpRVU4wUnl4RFFVRkRPMGxCSzBKVExGTkJRVk1zUTBGQlF5eFJRVUZ0UWp0UlFVTnVReXhOUVVGTkxHRkJRV0VzUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlN4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRkxFMUJRVTBzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTm9SU3hQUVVGUExHRkJRV0VzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1lVRkJZU3hEUVVGRExFOUJRVThzUTBGQlV5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1NVRkRNMFlzUTBGQlF6dEpRVk5UTEZkQlFWYzdVVUZEYWtJc1QwRkJUeXhOUVVGTkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNjVUpCUVhGQ0xFTkJRVU1zUTBGQlF6dEpRVU5zUkN4RFFVRkRPMGxCVTFNc1YwRkJWenRSUVVOcVFpeE5RVUZOTEV0QlFVc3NSMEZCV1N4SlFVRkpMRXRCUVVzc1JVRkJSU3hEUVVGRExFdEJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRkRVFzU1VGQlNTeFRRVUZUTEVOQlFVTTdVVUZEWkN4TFFVRkxMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzVTBGQlV5eERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hGUVVGRk8xbEJRemxETEVsQlFVa3NRMEZCUXl4TFFVRkxPMmRDUVVGRkxGTkJRVk03V1VGRGNrSXNTVUZCU1N4RFFVRkRMR3REUVVGdlFpeERRVUZETEZOQlFWTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1kwRkJZeXhGUVVGRkxFdEJRVXNzUTBGQlF5eEZRVUZGTzJkQ1FVTTVSQ3hUUVVGVExFZEJRVWNzVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4VlFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dG5Ra0ZEZGtNc1RVRkJUVHRoUVVOVU8xTkJRMG83VVVGRFJDeEpRVUZKTEZOQlFWTXNSVUZCUlR0WlFVTllMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVNeFF6dGhRVUZOTzFsQlEwZ3NVMEZCVXl4SFFVRkhMRVZCUVVVc1EwRkJRenRUUVVOc1FqdFJRVU5FTEU5QlFVOHNVMEZCVXl4RFFVRkRPMGxCUTNKQ0xFTkJRVU03UTBGRFNqdEJRVE5OUkN3NFFrRXlUVU1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLmV4cGlyZSA9IEluZmluaXR5O1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmV4cGlyZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKGR1cmF0aW9uIHx8IEluZmluaXR5KTtcbiAgICB9XG4gICAgZ2V0IGV4cGlyZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4cGlyZSA/IHRoaXMuZXhwaXJlIDwgbmV3IERhdGUoKS5nZXRUaW1lKCkgOiBmYWxzZTtcbiAgICB9XG59XG5jbGFzcyBCRE9NYXBDYWNoZSBleHRlbmRzIE1hcCB7XG4gICAgc2V0KGtleSwgdmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyBFbnRpdHkodmFsdWUsIGR1cmF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnNldChrZXksIGVudGl0eSk7XG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gc3VwZXIuZ2V0KGtleSk7XG4gICAgICAgIGlmIChlbnRpdHkgPT09IHVuZGVmaW5lZCB8fCBlbnRpdHkuZXhwaXJlZCkge1xuICAgICAgICAgICAgdGhpcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudGl0eS5kYXRhO1xuICAgIH1cbn1cbmV4cG9ydHMuQkRPTWFwQ2FjaGUgPSBCRE9NYXBDYWNoZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBUV0Z3UTJGamFHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpiM1Z5WTJVdllYQndMMnhwWWk5Q1JFOU5ZWEJEWVdOb1pTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVV0QkxFMUJRVTBzVFVGQlRUdEpRV2RDVWl4WlFVRlpMRWxCUVU4c1JVRkJSU3hSUVVGcFFqdFJRVVk1UWl4WFFVRk5MRWRCUVZjc1VVRkJVU3hEUVVGRE8xRkJSemxDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMnBDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hKUVVGSkxFVkJRVVVzUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RFFVRkRMRkZCUVZFc1NVRkJTU3hSUVVGUkxFTkJRVU1zUTBGQlF6dEpRVU5vUlN4RFFVRkRPMGxCVTBRc1NVRkJTU3hQUVVGUE8xRkJRMUFzVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTndSU3hEUVVGRE8wTkJRMG83UVVGVFJDeE5RVUZoTEZkQlFXdENMRk5CUVZFc1IwRkJhVUk3U1VGWE4wTXNSMEZCUnl4RFFVRkRMRWRCUVUwc1JVRkJSU3hMUVVGUkxFVkJRVVVzVVVGQmFVSTdVVUZETVVNc1RVRkJUU3hOUVVGTkxFZEJRVWNzU1VGQlNTeE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRek5ETEU5QlFVOHNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEYkVNc1EwRkJRenRKUVZOTkxFZEJRVWNzUTBGQlF5eEhRVUZOTzFGQlEySXNUVUZCVFN4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTTVRaXhKUVVGSkxFMUJRVTBzUzBGQlN5eFRRVUZUTEVsQlFVa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVONFF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMnBDTEU5QlFVOHNVMEZCVXl4RFFVRkRPMU5CUTNCQ08xRkJRMFFzVDBGQlR5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCUTNaQ0xFTkJRVU03UTBGRFNqdEJRUzlDUkN4clEwRXJRa01pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgQkRPTW9kZWwge1xufVxuZXhwb3J0cy5CRE9Nb2RlbCA9IEJET01vZGVsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFRXOWtaV3d1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJ4cFlpOUNSRTlOYjJSbGJDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVU5QkxFMUJRWE5DTEZGQlFWRTdRMEZCU1R0QlFVRnNReXcwUWtGQmEwTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBsb2Rhc2hfMSA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5jb25zdCBlbnZpcm9ubWVudF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZW52aXJvbm1lbnRcIik7XG5jbGFzcyBCRE9Sb3V0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucm91dGVyTmFtZVNwYWNlID0gYC8ke3RoaXMuY29uc3RydWN0b3IubmFtZS50b0xvd2VyQ2FzZSgpfWA7XG4gICAgICAgIHRoaXMucm91dGVzID0gWycvJ107XG4gICAgICAgIHRoaXMudGVtcGxhdGVTdHJpbmcgPSAnPGRpdj48L2Rpdj4nO1xuICAgICAgICB0aGlzLmpzb25Pbmx5ID0gZmFsc2U7XG4gICAgfVxuICAgIHJlbmRlclRlbXBsYXRlKHRlbXBsYXRlUGFyYW1zKSB7XG4gICAgICAgIGxldCBzdHJpbmdUb1BhcnNlID0gbnVsbDtcbiAgICAgICAgaWYgKGxvZGFzaF8xLmlzU3RyaW5nKHRoaXMudGVtcGxhdGVTdHJpbmcpKSB7XG4gICAgICAgICAgICBzdHJpbmdUb1BhcnNlID0gZW52aXJvbm1lbnRfMS50ZW1wbGF0ZUVudmlyb25tZW50LnJlbmRlclN0cmluZyh0aGlzLnRlbXBsYXRlU3RyaW5nLCB0ZW1wbGF0ZVBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvZGFzaF8xLmlzT2JqZWN0KHRoaXMudGVtcGxhdGVTdHJpbmcpKSB7XG4gICAgICAgICAgICBzdHJpbmdUb1BhcnNlID0gdGhpcy50ZW1wbGF0ZVN0cmluZy5yZW5kZXIodGVtcGxhdGVQYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHJpbmdUb1BhcnNlO1xuICAgIH1cbiAgICBhc3luYyB0ZW1wbGF0ZVBhcmFtcyhfcmVxdWVzdE9yUGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG59XG5CRE9Sb3V0ZS5hdHRhY2hUb1NlcnZlcnMgPSBbJyonXTtcbmV4cG9ydHMuQkRPUm91dGUgPSBCRE9Sb3V0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBVbTkxZEdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyeHBZaTlDUkU5U2IzVjBaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVVkJMRzFEUVVFMFF6dEJRVU0xUXl4M1JFRkJOa1E3UVVGUk4wUXNUVUZCYzBJc1VVRkJVVHRKUVVFNVFqdFJRVzlDVnl4dlFrRkJaU3hIUVVGWExFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFVkJRVVVzUTBGQlF6dFJRVkZ3UlN4WFFVRk5MRWRCUVdFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRV3RDZEVJc2JVSkJRV01zUjBGQmMwSXNZVUZCWVN4RFFVRkRPMUZCVld4RUxHRkJRVkVzUjBGQldTeExRVUZMTEVOQlFVTTdTVUZ0UkhoRExFTkJRVU03U1VGNFEyRXNZMEZCWXl4RFFVRkRMR05CUVRoQ08xRkJRMjVFTEVsQlFVa3NZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVONlFpeEpRVUZKTEdsQ1FVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eEZRVUZGTzFsQlF5OUNMR0ZCUVdFc1IwRkJSeXhwUTBGQmJVSXNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUlVGQlJTeGpRVUZqTEVOQlFVTXNRMEZCUXp0VFFVTjZSanRSUVVORUxFbEJRVWtzYVVKQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFVkJRVVU3V1VGREwwSXNZVUZCWVN4SFFVRmpMRWxCUVVrc1EwRkJReXhqUVVGbExFTkJRVU1zVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMU5CUXpGRk8xRkJRMFFzVDBGQlR5eGhRVUZoTEVOQlFVTTdTVUZEZWtJc1EwRkJRenRKUVZkVExFdEJRVXNzUTBGQlF5eGpRVUZqTEVOQlFVTXNaMEpCUVRCRE8xRkJRM0pGTEU5QlFVOHNSVUZCUlN4RFFVRkRPMGxCUTJRc1EwRkJRenM3UVVFM1JXRXNkMEpCUVdVc1IwRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlduQkVMRFJDUVRKSFF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgX2E7XG5cInVzZSBzdHJpY3RcIjtcbmNvbnN0IENodW5rXzEgPSByZXF1aXJlKFwiLi9DaHVua1wiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5sZXQgQ2VsbCA9IGNsYXNzIENlbGwge1xuICAgIGNvbnN0cnVjdG9yKF9wYXJhbXMpIHtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy5jYXZlID0gMDtcbiAgICAgICAgdGhpcy5yaXZlciA9IDA7XG4gICAgICAgIHRoaXMuaHVtaWRpdHkgPSAwO1xuICAgICAgICB0aGlzLnRlbXBlcmF0dXJlID0gMDtcbiAgICAgICAgdGhpcy5jaHVuayA9IG5ldyBDaHVua18xLkNodW5rKCk7XG4gICAgfVxufTtcbkNlbGwgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5iYXNlQ29uc3RydWN0b3IoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBDb25zdFBhcmFtcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBDb25zdFBhcmFtcykgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0XSlcbl0sIENlbGwpO1xuZXhwb3J0cy5DZWxsID0gQ2VsbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyVnNiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2Ylc5a1pXeHpMME5sYkd3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3UVVGQlFTeHRRMEZCWjBNN1FVRkRhRU1zYzBSQlFYZEVPMEZCVTNoRUxFbEJRV0VzU1VGQlNTeEhRVUZxUWl4TlFVRmhMRWxCUVVrN1NVRjVSR0lzV1VGQldTeFBRVUV5UWp0UlFXeEVhRU1zVFVGQlF5eEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFWRmtMRTFCUVVNc1IwRkJWeXhEUVVGRExFTkJRVU03VVVGUlpDeFRRVUZKTEVkQlFWY3NRMEZCUXl4RFFVRkRPMUZCVVdwQ0xGVkJRVXNzUjBGQlZ5eERRVUZETEVOQlFVTTdVVUZSYkVJc1lVRkJVU3hIUVVGWExFTkJRVU1zUTBGQlF6dFJRVkZ5UWl4blFrRkJWeXhIUVVGWExFTkJRVU1zUTBGQlF6dFJRVkY0UWl4VlFVRkxMRWRCUVZVc1NVRkJTU3hoUVVGTExFVkJRVVVzUTBGQlF6dEpRVVZUTEVOQlFVTTdRMEZETDBNc1EwRkJRVHRCUVRGRVdTeEpRVUZKTzBsQlJHaENMRFJDUVVGbExFVkJRVVU3YVVWQk1FUlJMRmRCUVZjc2IwSkJRVmdzVjBGQlZ6dEhRWHBFZUVJc1NVRkJTU3hEUVRCRWFFSTdRVUV4UkZrc2IwSkJRVWtpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgb3Blbl9zaW1wbGV4X25vaXNlXzEgPSByZXF1aXJlKFwib3Blbi1zaW1wbGV4LW5vaXNlXCIpO1xuY29uc3QgbG9kYXNoXzEgPSByZXF1aXJlKFwibG9kYXNoXCIpO1xuY29uc3QgQ2VsbF8xID0gcmVxdWlyZShcIi4vQ2VsbFwiKTtcbmNsYXNzIENodW5rIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy5zaXplID0gNjQ7XG4gICAgICAgIHRoaXMuZ3JpZCA9IFtdO1xuICAgICAgICB0aGlzLnNpbXBsZXhDYXZlID0gbmV3IG9wZW5fc2ltcGxleF9ub2lzZV8xLmRlZmF1bHQoMSk7XG4gICAgICAgIHRoaXMuc2ltcGxleFJpdmVyID0gbmV3IG9wZW5fc2ltcGxleF9ub2lzZV8xLmRlZmF1bHQoMik7XG4gICAgICAgIHRoaXMuc2ltcGxleFRlbXBlcmF0dXJlID0gbmV3IG9wZW5fc2ltcGxleF9ub2lzZV8xLmRlZmF1bHQoMyk7XG4gICAgICAgIHRoaXMuc2ltcGxleEh1bWlkaXR5ID0gbmV3IG9wZW5fc2ltcGxleF9ub2lzZV8xLmRlZmF1bHQoNCk7XG4gICAgICAgIGxvZGFzaF8xLm1lcmdlKHRoaXMsIHBhcmFtcyk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVHcmlkKCk7XG4gICAgfVxuICAgIGdlbmVyYXRlR3JpZCgpIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5zaXplOyByb3crKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdyaWRbcm93XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5wdXNoKFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuc2l6ZTsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4Q29vcmRpbmF0ZSA9IGNvbCArIHRoaXMueCAqIHRoaXMuc2l6ZTtcbiAgICAgICAgICAgICAgICBjb25zdCB5Q29vcmRpbmF0ZSA9IHJvdyArIHRoaXMueSAqIHRoaXMuc2l6ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRbcm93XS5wdXNoKG5ldyBDZWxsXzEuQ2VsbCh7XG4gICAgICAgICAgICAgICAgICAgIHg6IHhDb29yZGluYXRlLFxuICAgICAgICAgICAgICAgICAgICB5OiB5Q29vcmRpbmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgY2F2ZTogdGhpcy5zaW1wbGV4Q2F2ZS5ub2lzZTJEKHhDb29yZGluYXRlIC8gMTAwLCB5Q29vcmRpbmF0ZSAvIDEwMCksXG4gICAgICAgICAgICAgICAgICAgIHJpdmVyOiB0aGlzLnNpbXBsZXhSaXZlci5ub2lzZTJEKHhDb29yZGluYXRlIC8gNTAwLCB5Q29vcmRpbmF0ZSAvIDUwMCksXG4gICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiB0aGlzLnNpbXBsZXhUZW1wZXJhdHVyZS5ub2lzZTJEKHhDb29yZGluYXRlIC8gMjUwMCwgeUNvb3JkaW5hdGUgLyAyNTAwKSxcbiAgICAgICAgICAgICAgICAgICAgaHVtaWRpdHk6IHRoaXMuc2ltcGxleEh1bWlkaXR5Lm5vaXNlMkQoeENvb3JkaW5hdGUgLyAyNTAwLCB5Q29vcmRpbmF0ZSAvIDI1MDApLFxuICAgICAgICAgICAgICAgICAgICBjaHVuazogdGhpc1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuQ2h1bmsgPSBDaHVuaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyaDFibXN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDIxdlpHVnNjeTlEYUhWdWF5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxESkVRVUZyUkR0QlFVTnNSQ3h0UTBGQkswSTdRVUZETDBJc2FVTkJRVGhDTzBGQlVUbENMRTFCUVdFc1MwRkJTenRKUVhORlpDeFpRVUZaTEUxQlFUSkNPMUZCTDBSb1F5eE5RVUZETEVkQlFWY3NRMEZCUXl4RFFVRkRPMUZCVVdRc1RVRkJReXhIUVVGWExFTkJRVU1zUTBGQlF6dFJRVkZrTEZOQlFVa3NSMEZCV1N4RlFVRkZMRU5CUVVNN1VVRlRhRUlzVTBGQlNTeEhRVUZoTEVWQlFVVXNRMEZCUXp0UlFWTndRaXhuUWtGQlZ5eEhRVUZ4UWl4SlFVRkpMRFJDUVVGblFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCVTNoRUxHbENRVUZaTEVkQlFYRkNMRWxCUVVrc05FSkJRV2RDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRlRla1FzZFVKQlFXdENMRWRCUVhGQ0xFbEJRVWtzTkVKQlFXZENMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGVEwwUXNiMEpCUVdVc1IwRkJjVUlzU1VGQlNTdzBRa0ZCWjBJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVWRzUlN4alFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEzQkNMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF6dEpRVU40UWl4RFFVRkRPMGxCVVZNc1dVRkJXVHRSUVVOc1FpeExRVUZMTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVmtzU1VGQlNTeERRVUZETEVsQlFVc3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSVHRaUVVOb1JDeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdG5Ra0ZEYWtJc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRkRUk3V1VGRFJDeExRVUZMTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVmtzU1VGQlNTeERRVUZETEVsQlFVc3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSVHRuUWtGRGFFUXNUVUZCVFN4WFFVRlhMRWRCUVVjc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFWY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJRenRuUWtGRGNrUXNUVUZCVFN4WFFVRlhMRWRCUVVjc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFWY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJRenRuUWtGRmNrUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlEyWXNTVUZCU1N4WFFVRkpMRU5CUVVNN2IwSkJRMHdzUTBGQlF5eEZRVUZGTEZkQlFWYzdiMEpCUTJRc1EwRkJReXhGUVVGRkxGZEJRVmM3YjBKQlEyUXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NSMEZCUnl4SFFVRkhMRVZCUVVVc1YwRkJWeXhIUVVGSExFZEJRVWNzUTBGQlF6dHZRa0ZEY0VVc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1IwRkJSeXhIUVVGSExFVkJRVVVzVjBGQlZ5eEhRVUZITEVkQlFVY3NRMEZCUXp0dlFrRkRkRVVzVjBGQlZ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4SFFVRkhMRWxCUVVrc1JVRkJSU3hYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETzI5Q1FVTndSaXhSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhIUVVGSExFbEJRVWtzUlVGQlJTeFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRPMjlDUVVNNVJTeExRVUZMTEVWQlFVVXNTVUZCU1R0cFFrRkRaQ3hEUVVGRExFTkJRMHdzUTBGQlF6dGhRVU5NTzFOQlEwbzdTVUZEVEN4RFFVRkRPME5CUTBvN1FVRjRSMFFzYzBKQmQwZERJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIF9hO1xuXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCB0eXBlX2dyYXBocWxfMSA9IHJlcXVpcmUoXCJ0eXBlLWdyYXBocWxcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgQkRPTW9kZWxfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Nb2RlbFwiKTtcbmxldCBUZXN0ID0gY2xhc3MgVGVzdCBleHRlbmRzIEJET01vZGVsXzEuQkRPTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKF9wYXJhbXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pZCA9ICcwJztcbiAgICAgICAgdGhpcy50aXRsZSA9ICd0ZXN0JztcbiAgICB9XG59O1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICB0eXBlX2dyYXBocWxfMS5GaWVsZCgoX3R5cGUpID0+IHR5cGVfZ3JhcGhxbF8xLklEKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBUZXN0LnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICB0eXBlX2dyYXBocWxfMS5GaWVsZCgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIFRlc3QucHJvdG90eXBlLCBcInRpdGxlXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIHR5cGVfZ3JhcGhxbF8xLkZpZWxkKHsgbnVsbGFibGU6IHRydWUgfSksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgVGVzdC5wcm90b3R5cGUsIFwiZGVzY3JpcHRpb25cIiwgdm9pZCAwKTtcblRlc3QgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIHR5cGVfZ3JhcGhxbF8xLk9iamVjdFR5cGUoKSxcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgQ29uc3RQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIgJiYgQ29uc3RQYXJhbXMpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdF0pXG5dLCBUZXN0KTtcbmV4cG9ydHMuVGVzdCA9IFRlc3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWR1Z6ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmJXOWtaV3h6TDFSbGMzUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN1FVRkJRU3dyUTBGQmNVUTdRVUZEY2tRc2MwUkJRWGRFTzBGQlEzaEVMR2RFUVVFMlF6dEJRVlUzUXl4SlFVRmhMRWxCUVVrc1IwRkJha0lzVFVGQllTeEpRVUZMTEZOQlFWRXNiVUpCUVZFN1NVRjVRamxDTEZsQlFWa3NUMEZCTUVJN1VVRkRiRU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZ1UW1sQ0xFOUJRVVVzUjBGQlZ5eEhRVUZITEVOQlFVTTdVVUZST1VJc1ZVRkJTeXhIUVVGWExFMUJRVTBzUTBGQlF6dEpRVmwyUXl4RFFVRkRPME5CUTBvc1EwRkJRVHRCUVhKQ2VVSTdTVUZCY2tJc2IwSkJRVXNzUTBGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4RlFVRkZMRU5CUVVNc2FVSkJRVVVzUTBGQlF6czdaME5CUVhsQ08wRkJVWEpETzBsQlFWSXNiMEpCUVVzc1JVRkJSVHM3YlVOQlFTdENPMEZCVVZvN1NVRkJNVUlzYjBKQlFVc3NRMEZCUXl4RlFVRkZMRkZCUVZFc1JVRkJSU3hKUVVGSkxFVkJRVVVzUTBGQlF6czdlVU5CUVRaQ08wRkJka0k1UXl4SlFVRkpPMGxCUm1oQ0xIbENRVUZWTEVWQlFVVTdTVUZEV2l3MFFrRkJaU3hGUVVGRk8ybEZRVEJDVHl4WFFVRlhMRzlDUVVGWUxGZEJRVmM3UjBGNlFuWkNMRWxCUVVrc1EwRTBRbWhDTzBGQk5VSlpMRzlDUVVGSkluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJET1JvdXRlXzEgPSByZXF1aXJlKFwifmJkby9saWIvQkRPUm91dGVcIik7XG5jbGFzcyBCRE9Db25maWcgZXh0ZW5kcyBCRE9Sb3V0ZV8xLkJET1JvdXRlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5yb3V0ZXMgPSBbXCIvOm5hbWVcIl07XG4gICAgICAgIHRoaXMuanNvbk9ubHkgPSB0cnVlO1xuICAgIH1cbn1cbmV4cG9ydHMuQkRPQ29uZmlnID0gQkRPQ29uZmlnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFEyOXVabWxuTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5eWIzVjBaWE12UWtSUFEyOXVabWxuTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUVzWjBSQlFUWkRPMEZCVlRkRExFMUJRWE5DTEZOQlFWVXNVMEZCVVN4dFFrRkJVVHRKUVVGb1JEczdVVUZQVnl4WFFVRk5MRWRCUVdFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVTh6UWl4aFFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRE8wbEJRemxDTEVOQlFVTTdRMEZCUVR0QlFXWkVMRGhDUVdWREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJET1JvdXRlXzEgPSByZXF1aXJlKFwifmJkby9saWIvQkRPUm91dGVcIik7XG5jbGFzcyBCRE9HYW1lTG9iYnkgZXh0ZW5kcyBCRE9Sb3V0ZV8xLkJET1JvdXRlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5yb3V0ZXJOYW1lU3BhY2UgPSAnLyc7XG4gICAgICAgIHRoaXMudGVtcGxhdGVTdHJpbmcgPSByZXF1aXJlKCd+YmRvL3ZpZXdzL0dhbWVMb2JieS5uamsnKTtcbiAgICB9XG4gICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvaGE6ICdPT09PT0hBQUFBQUFBQSEhISdcbiAgICAgICAgfTtcbiAgICB9XG59XG5CRE9HYW1lTG9iYnkuYXR0YWNoVG9TZXJ2ZXJzID0gW1wiR2FtZVNlcnZlclwiXTtcbmV4cG9ydHMuQkRPR2FtZUxvYmJ5ID0gQkRPR2FtZUxvYmJ5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFIyRnRaVXh2WW1KNUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOXliM1YwWlhNdlFrUlBSMkZ0WlV4dlltSjVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNaMFJCUVRaRE8wRkJWVGRETEUxQlFYTkNMRmxCUVdFc1UwRkJVU3h0UWtGQlVUdEpRVUZ1UkRzN1VVRm5RbGNzYjBKQlFXVXNSMEZCUnl4SFFVRkhMRU5CUVVNN1VVRlJia0lzYlVKQlFXTXNSMEZCWVN4UFFVRlBMRU5CUVVNc01FSkJRVEJDTEVOQlFVTXNRMEZCUXp0SlFXTTNSU3hEUVVGRE8wbEJUR0VzUzBGQlN5eERRVUZETEdOQlFXTTdVVUZETVVJc1QwRkJUenRaUVVOSUxFZEJRVWNzUlVGQlJTeHRRa0ZCYlVJN1UwRkRNMElzUTBGQlF6dEpRVU5PTEVOQlFVTTdPMEZCTlVKaExEUkNRVUZsTEVkQlFXRXNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRCUVZRM1JDeHZRMEZ6UTBNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJET1JvdXRlXzEgPSByZXF1aXJlKFwifmJkby9saWIvQkRPUm91dGVcIik7XG5jbGFzcyBCRE9Ib21lIGV4dGVuZHMgQkRPUm91dGVfMS5CRE9Sb3V0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucm91dGVyTmFtZVNwYWNlID0gJy8nO1xuICAgICAgICB0aGlzLnRlbXBsYXRlU3RyaW5nID0gcmVxdWlyZSgnfmJkby92aWV3cy9ob21lLm5qaycpO1xuICAgIH1cbiAgICBhc3luYyB0ZW1wbGF0ZVBhcmFtcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9oYTogJ2VuZGxpY2ggenUgSGF1c2UgPSknXG4gICAgICAgIH07XG4gICAgfVxufVxuQkRPSG9tZS5hdHRhY2hUb1NlcnZlcnMgPSBbXCJXZWJTZXJ2ZXJcIl07XG5leHBvcnRzLkJET0hvbWUgPSBCRE9Ib21lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFNHOXRaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2Y205MWRHVnpMMEpFVDBodmJXVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTeG5SRUZCTmtNN1FVRlZOME1zVFVGQmMwSXNUMEZCVVN4VFFVRlJMRzFDUVVGUk8wbEJRVGxET3p0UlFXZENWeXh2UWtGQlpTeEhRVUZITEVkQlFVY3NRMEZCUXp0UlFWRnVRaXh0UWtGQll5eEhRVUZoTEU5QlFVOHNRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eERRVUZETzBsQlkzaEZMRU5CUVVNN1NVRk1ZU3hMUVVGTExFTkJRVU1zWTBGQll6dFJRVU14UWl4UFFVRlBPMWxCUTBnc1IwRkJSeXhGUVVGRkxIRkNRVUZ4UWp0VFFVTTNRaXhEUVVGRE8wbEJRMDRzUTBGQlF6czdRVUUxUW1Fc2RVSkJRV1VzUjBGQllTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMEZCVkRWRUxEQkNRWE5EUXlKOSIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL3NvdXJjZS9hcHAvdXRpbHMgc3luYyByZWN1cnNpdmVcIjsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCJyZWZsZWN0LW1ldGFkYXRhXCIpO1xuY29uc3QgbG9kYXNoXzEgPSByZXF1aXJlKFwibG9kYXNoXCIpO1xuZnVuY3Rpb24gd2F0Y2hlZChfcGFyYW1zKSB7XG4gICAgcmV0dXJuICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9wRGVzYyA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgICAgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIGtleSk7XG4gICAgICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldE1ldGFkYXRhKGtleSwgdGhpcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQobmV3VmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbCA9PT0gUmVmbGVjdC5nZXRNZXRhZGF0YShrZXksIHRoaXMpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHByb3BEZXNjICYmIHByb3BEZXNjLnNldCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wRGVzYy5zZXQuY2FsbCh0aGlzLCBuZXdWYWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoa2V5LCBuZXdWYWwsIHRoaXMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmV4cG9ydHMud2F0Y2hlZCA9IHdhdGNoZWQ7XG5mdW5jdGlvbiBiYXNlQ29uc3RydWN0b3IoY29uc3RQYXJhbXNJbmRleCA9IDApIHtcbiAgICByZXR1cm4gKGN0b3IpID0+IHtcbiAgICAgICAgY2xhc3MgQmFzZUNvbnN0cnVjdG9yIGV4dGVuZHMgY3RvciB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnN0UGFyYW1zID0gYXJnc1tjb25zdFBhcmFtc0luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoIShjb25zdFBhcmFtcyBpbnN0YW5jZW9mIE9iamVjdCkpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0UGFyYW1zID0ge307XG4gICAgICAgICAgICAgICAgbG9kYXNoXzEubWVyZ2UodGhpcywgY29uc3RQYXJhbXNbY29uc3RQYXJhbXNJbmRleF0pO1xuICAgICAgICAgICAgICAgIGlmIChcImNvbnN0cnVjdGVkQ2FsbGJhY2tcIiBpbiB0aGlzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQmFzZUNvbnN0cnVjdG9yO1xuICAgIH07XG59XG5leHBvcnRzLmJhc2VDb25zdHJ1Y3RvciA9IGJhc2VDb25zdHJ1Y3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpHVmpiM0poZEc5eWN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZkWFJwYkhNdlpHVmpiM0poZEc5eWN5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxEUkNRVUV3UWp0QlFVTXhRaXh0UTBGQkswSTdRVUYxUkM5Q0xGTkJRV2RDTEU5QlFVOHNRMEZCUXl4UFFVRjNRanRKUVVNMVF5eFBRVUZQTEVOQlFVTXNUVUZCVnl4RlFVRkZMRWRCUVc5Q0xFVkJRVVVzUlVGQlJUdFJRVU42UXl4TlFVRk5MRkZCUVZFc1IwRkJSeXhQUVVGUExFTkJRVU1zZDBKQlFYZENMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJTOUVMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTNCRExFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1JVRkJSVHRaUVVOb1F5eEhRVUZITEVWQlFVVXNVMEZCVXl4SFFVRkhPMmRDUVVOaUxFOUJRVThzVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRE1VTXNRMEZCUXp0WlFVTkVMRWRCUVVjc1JVRkJSU3hUUVVGVExFZEJRVWNzUTBGQlF5eE5RVUZYTzJkQ1FVTjZRaXhKUVVGSkxFMUJRVTBzUzBGQlN5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hKUVVGSkxFTkJRVU03YjBKQlFVVXNUMEZCVHp0blFrRkRkRVFzU1VGQlNTeFJRVUZSTEVsQlFVa3NVVUZCVVN4RFFVRkRMRWRCUVVjc1JVRkJSVHR2UWtGRE1VSXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMmxDUVVOdVF6czdiMEpCUVUwc1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVWQlFVVXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRM0pFTEVOQlFVTTdXVUZEUkN4VlFVRlZMRVZCUVVVc1NVRkJTVHRaUVVOb1FpeFpRVUZaTEVWQlFVVXNTVUZCU1R0VFFVTnlRaXhEUVVGRExFTkJRVU03U1VGRFVDeERRVUZETEVOQlFVTTdRVUZEVGl4RFFVRkRPMEZCYmtKRUxEQkNRVzFDUXp0QlFWTkVMRk5CUVdkQ0xHVkJRV1VzUTBGQlF5eHRRa0ZCTWtJc1EwRkJRenRKUVVONFJDeFBRVUZQTEVOQlFYZENMRWxCUVU4c1JVRkJSU3hGUVVGRk8xRkJVWFJETEUxQlFVMHNaVUZCWjBJc1UwRkJVU3hKUVVGSk8xbEJRemxDTEZsQlFWa3NSMEZCUnl4SlFVRlhPMmRDUVVOMFFpeExRVUZMTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFppeEpRVUZKTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUXp0blFrRkRla01zU1VGQlNTeERRVUZETEVOQlFVTXNWMEZCVnl4WlFVRlpMRTFCUVUwc1EwRkJRenR2UWtGQlJTeFhRVUZYTEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVOMlJDeGpRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZMRmRCUVZjc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRek5ETEVsQlFVa3NjVUpCUVhGQ0xFbEJRVWtzU1VGQlNUdHZRa0ZCVVN4SlFVRkxMRU5CUVVNc2JVSkJRVzFDTEVWQlFVVXNRMEZCUXp0WlFVTjZSU3hEUVVGRE8xTkJRMG83VVVGRlJDeFBRVUZQTEdWQlFXVXNRMEZCUXp0SlFVTXpRaXhEUVVGRExFTkJRVU03UVVGRFRpeERRVUZETzBGQmNrSkVMREJEUVhGQ1F5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG51bmp1Y2tzID0gcmVxdWlyZShcIm51bmp1Y2tzXCIpO1xuZnVuY3Rpb24gaXNOb2RlSlMoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc05vZGVKUyA9IGlzTm9kZUpTO1xuZnVuY3Rpb24gaXNCcm93c2VyKCkge1xuICAgIHJldHVybiAhaXNOb2RlSlMoKTtcbn1cbmV4cG9ydHMuaXNCcm93c2VyID0gaXNCcm93c2VyO1xuZnVuY3Rpb24gZ2V0UHJvdG90eXBlTmFtZXNSZWN1cnNpdmUob2JqZWN0LCBwcm90b3R5cGVzID0gW10pIHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAocHJvdG90eXBlKSB7XG4gICAgICAgIHByb3RvdHlwZXMucHVzaChwcm90b3R5cGUuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICAgIGdldFByb3RvdHlwZU5hbWVzUmVjdXJzaXZlKHByb3RvdHlwZSwgcHJvdG90eXBlcyk7XG4gICAgfVxuICAgIHJldHVybiBwcm90b3R5cGVzO1xufVxuZXhwb3J0cy5nZXRQcm90b3R5cGVOYW1lc1JlY3Vyc2l2ZSA9IGdldFByb3RvdHlwZU5hbWVzUmVjdXJzaXZlO1xuZnVuY3Rpb24gaW5jbHVkZXNNZW1iZXJPZkxpc3Qoc2VhcmNoLCBsaXN0LCBleHRlbnNpb24gPSAnJykge1xuICAgIGZvciAoY29uc3QgbWVtYmVyIG9mIGxpc3QpIHtcbiAgICAgICAgaWYgKHNlYXJjaC5pbmNsdWRlcyhgJHttZW1iZXJ9JHtleHRlbnNpb259YCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaW5jbHVkZXNNZW1iZXJPZkxpc3QgPSBpbmNsdWRlc01lbWJlck9mTGlzdDtcbmV4cG9ydHMudGVtcGxhdGVFbnZpcm9ubWVudCA9ICgoKSA9PiB7XG4gICAgY29uc3Qgbm9DYWNoZSA9IGdsb2JhbC5wcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zdCBlbnYgPSBuZXcgbnVuanVja3MuRW52aXJvbm1lbnQoe1xuICAgICAgICBnZXRTb3VyY2U6IChwYXRoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyBzcmM6IHJlcXVpcmUocGF0aCksIHBhdGgsIG5vQ2FjaGUgfTtcbiAgICAgICAgfVxuICAgIH0sIHsgbm9DYWNoZSB9KTtcbiAgICBlbnYuYWRkRmlsdGVyKCdqc29uJywgKHZhbHVlLCBzcGFjZXMpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgbnVuanVja3MucnVudGltZS5TYWZlU3RyaW5nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBudW5qdWNrcy5ydW50aW1lLlNhZmVTdHJpbmcoSlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIHNwYWNlcykpO1xuICAgIH0pO1xuICAgIHJldHVybiBlbnY7XG59KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWlc1MmFYSnZibTFsYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wzVjBhV3h6TDJWdWRtbHliMjV0Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc2NVTkJRWEZETzBGQlVYSkRMRk5CUVdkQ0xGRkJRVkU3U1VGRGNFSXNTVUZCU1N4UFFVRlBMRTFCUVUwc1MwRkJTeXhYUVVGWExFbEJRVWtzVDBGQlR5eFBRVUZQTEV0QlFVc3NVVUZCVVN4RlFVRkZPMUZCUXpsRUxFOUJRVThzU1VGQlNTeERRVUZETzB0QlEyWTdTVUZEUkN4UFFVRlBMRXRCUVVzc1EwRkJRenRCUVVOcVFpeERRVUZETzBGQlRFUXNORUpCUzBNN1FVRlJSQ3hUUVVGblFpeFRRVUZUTzBsQlEzSkNMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dEJRVU4yUWl4RFFVRkRPMEZCUmtRc09FSkJSVU03UVVGVFJDeFRRVUZuUWl3d1FrRkJNRUlzUTBGQlF5eE5RVUZYTEVWQlFVVXNZVUZCZFVJc1JVRkJSVHRKUVVNM1JTeE5RVUZOTEZOQlFWTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlEyaEVMRWxCUVVrc1UwRkJVeXhGUVVGRk8xRkJRMWdzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlF6VkRMREJDUVVFd1FpeERRVUZETEZOQlFWTXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRMUVVOeVJEdEpRVU5FTEU5QlFVOHNWVUZCVlN4RFFVRkRPMEZCUTNSQ0xFTkJRVU03UVVGUVJDeG5SVUZQUXp0QlFWZEVMRk5CUVdkQ0xHOUNRVUZ2UWl4RFFVRkRMRTFCUVhsQ0xFVkJRVVVzU1VGQll5eEZRVUZGTEZsQlFXOUNMRVZCUVVVN1NVRkRiRWNzUzBGQlN5eE5RVUZOTEUxQlFVMHNTVUZCU1N4SlFVRkpMRVZCUVVVN1VVRkRka0lzU1VGQlNTeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1RVRkJUU3hIUVVGSExGTkJRVk1zUlVGQlJTeERRVUZETEVWQlFVVTdXVUZETVVNc1QwRkJUeXhKUVVGSkxFTkJRVU03VTBGRFpqdExRVU5LTzBsQlEwUXNUMEZCVHl4TFFVRkxMRU5CUVVNN1FVRkRha0lzUTBGQlF6dEJRVkJFTEc5RVFVOURPMEZCUzFrc1VVRkJRU3h0UWtGQmJVSXNSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSVHRKUVVOeVF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEV0QlFVc3NZVUZCWVN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTTNSU3hOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRha01zVTBGQlV5eEZRVUZGTEVOQlFVTXNTVUZCV1N4RlFVRkZMRVZCUVVVN1dVRkRlRUlzVDBGQlR5eEZRVUZGTEVkQlFVY3NSVUZCUlN4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUTJwRUxFTkJRVU03UzBGRFNpeEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVWb1FpeEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVWQlFVVXNSVUZCUlR0UlFVTndReXhKUVVGSkxFdEJRVXNzV1VGQldTeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1JVRkJSVHRaUVVNNVF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xTkJRelZDTzFGQlEwUXNUMEZCVHl4SlFVRkpMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJoR0xFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEwZ3NUMEZCVHl4SFFVRkhMRU5CUVVNN1FVRkRaaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xud2luZG93LnZpcnR1YWxSb3V0ZXMgPSBbXCJDb25maWdcIiwgXCJHYW1lTG9iYnlcIiwgXCJIb21lXCJdO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZG1seWRIVmhiRVZ1ZEhKNVVHOXBiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTkyWVhJdmRHMXdMM1pwY25SMVlXeEZiblJ5ZVZCdmFXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlRTeE5RVUZQTEVOQlFVTXNZVUZCWVN4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRExGZEJRVmNzUlVGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXlKOSJdLCJzb3VyY2VSb290IjoiIn0=