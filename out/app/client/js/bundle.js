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

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
"use strict";
const BaseComponent_1 = __webpack_require__(/*! ~client/lib/BaseComponent */ "./source/app/client/ts/lib/BaseComponent.ts");
const decorators_1 = __webpack_require__(/*! ~bdo/utils/decorators */ "./source/app/utils/decorators.ts");
const decorators_2 = __webpack_require__(/*! ~bdo/utils/decorators */ "./source/app/utils/decorators.ts");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZVdpbmRvdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvR2FtZVdpbmRvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZEQUFpRTtBQUNqRSxzREFBd0Q7QUFDeEQsc0RBQWlEO0FBQ2pELHFDQUFxQztBQVVyQyxJQUFxQixVQUFVLEdBQS9CLE1BQXFCLFVBQVcsU0FBUSxvQ0FBb0IsQ0FBQyxpQkFBaUIsQ0FBQztJQUQvRTs7UUFtQjBCLFdBQU0sR0FBbUIsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7WUFDMUUsV0FBVyxFQUFFLElBQUk7U0FDcEIsQ0FBQyxDQUFDO1FBU21CLFVBQUssR0FBa0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBeURwRSxDQUFDO0lBbERVLGlCQUFpQjtRQUNwQixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRTtZQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNyQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVNTLFdBQVc7UUFFakIsTUFBTSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU3QyxNQUFNLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFdkYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFFekMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFbEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFGLEtBQUssQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBRTNCLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRWhHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0QixPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTdGLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFRUyxhQUFhLEtBQUssQ0FBQztDQUNoQyxDQUFBO0FBN0UwQixrQkFBTyxHQUFXLFFBQVEsQ0FBQztBQVN0QztJQUFYLHFCQUFRLEVBQUU7MERBQW1CLE9BQU8sb0JBQVAsT0FBTyxDQUFDLE1BQU07MENBRXpDO0FBU1M7SUFBWCxxQkFBUSxFQUFFOzBEQUFrQixPQUFPLG9CQUFQLE9BQU8sQ0FBQyxLQUFLO3lDQUFzQjtBQTdCL0MsVUFBVTtJQUQ5Qiw0QkFBZSxFQUFFO0dBQ0csVUFBVSxDQXNGOUI7a0JBdEZvQixVQUFVO0FBdUYvQixjQUFjLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUU7SUFDN0MsT0FBTyxFQUFFLFVBQVUsQ0FBQyxPQUFPO0NBQzlCLENBQUMsQ0FBQyJ9

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
const decorators_2 = __webpack_require__(/*! ~bdo/utils/decorators */ "./source/app/utils/decorators.ts");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdENvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvVGVzdENvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2REFBaUU7QUFDakUsc0RBQXdEO0FBQ3hELHNEQUE0RDtBQVU1RCxJQUFxQixhQUFhLEdBQWxDLE1BQXFCLGFBQWMsU0FBUSxvQ0FBb0IsQ0FBQyxXQUFXLENBQUM7SUFENUU7O1FBUXdCLGNBQVMsR0FBVyxNQUFNLENBQUM7UUFRekIsbUJBQWMsR0FBRyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQztJQUV0RixDQUFDO0NBQUEsQ0FBQTtBQVZnQjtJQUFaLHNCQUFTLEVBQUU7O2dEQUFtQztBQVFuQztJQUFYLHFCQUFRLEVBQUU7O3FEQUF1RTtBQWZqRSxhQUFhO0lBRGpDLDRCQUFlLEVBQUU7R0FDRyxhQUFhLENBaUJqQztrQkFqQm9CLGFBQWE7QUFrQmxDLGNBQWMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLENBQUMifQ==

/***/ }),

/***/ "./source/app/client/ts/components/ViewLink.ts":
/*!*****************************************************!*\
  !*** ./source/app/client/ts/components/ViewLink.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
"use strict";
const BaseComponent_1 = __webpack_require__(/*! ~client/lib/BaseComponent */ "./source/app/client/ts/lib/BaseComponent.ts");
const decorators_1 = __webpack_require__(/*! ~bdo/utils/decorators */ "./source/app/utils/decorators.ts");
const Test_1 = __webpack_require__(/*! ~bdo/models/Test */ "./source/app/models/Test.ts");
let ViewLink = class ViewLink extends BaseComponent_1.BaseComponentFactory(HTMLAnchorElement) {
    constructor(_params) {
        super();
        this.model = new Test_1.Test({ id: "1", title: String(Date.now()) });
        this.test = this.model.bind("title");
        this.tester = ["haha"];
    }
    constructedCallback() {
        super.constructedCallback();
        this.addEventListener("click", this.onLinkClick.bind(this));
    }
    onLinkClick(event) {
        event.preventDefault();
        window.router.navigate(this.href, true);
    }
};
ViewLink.extends = 'a';
tslib_1.__decorate([
    decorators_1.property(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Test_1.Test !== "undefined" && Test_1.Test) === "function" ? _a : Object)
], ViewLink.prototype, "model", void 0);
tslib_1.__decorate([
    decorators_1.attribute(),
    tslib_1.__metadata("design:type", String)
], ViewLink.prototype, "test", void 0);
tslib_1.__decorate([
    decorators_1.watched(), decorators_1.property(),
    tslib_1.__metadata("design:type", Array)
], ViewLink.prototype, "tester", void 0);
ViewLink = tslib_1.__decorate([
    decorators_1.baseConstructor(),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof ConstParams !== "undefined" && ConstParams) === "function" ? _b : Object])
], ViewLink);
exports.default = ViewLink;
customElements.define("view-link", ViewLink, { extends: ViewLink.extends });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld0xpbmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1ZpZXdMaW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNkRBQWlFO0FBQ2pFLHNEQUFzRjtBQUN0RiwyQ0FBd0M7QUFVeEMsSUFBcUIsUUFBUSxHQUE3QixNQUFxQixRQUFTLFNBQVEsb0NBQW9CLENBQUMsaUJBQWlCLENBQUM7SUFrQ3pFLFlBQVksT0FBK0I7UUFDdkMsS0FBSyxFQUFFLENBQUM7UUFuQk8sVUFBSyxHQUFTLElBQUksV0FBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQVE5RCxTQUFJLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFROUIsV0FBTSxHQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFJMUQsQ0FBQztJQU9NLG1CQUFtQjtRQUN0QixLQUFLLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQVNPLFdBQVcsQ0FBQyxLQUFZO1FBQzVCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDSixDQUFBO0FBbkQwQixnQkFBTyxHQUFZLEdBQUcsQ0FBQztBQVFsQztJQUFYLHFCQUFRLEVBQUU7MERBQWUsV0FBSSxvQkFBSixXQUFJO3VDQUFvRDtBQVFyRTtJQUFaLHNCQUFTLEVBQUU7O3NDQUFnRDtBQVFyQztJQUF0QixvQkFBTyxFQUFFLEVBQUUscUJBQVEsRUFBRTs7d0NBQW9DO0FBaEN6QyxRQUFRO0lBRDVCLDRCQUFlLEVBQUU7aUVBbUNRLFdBQVcsb0JBQVgsV0FBVztHQWxDaEIsUUFBUSxDQTJENUI7a0JBM0RvQixRQUFRO0FBNEQ3QixjQUFjLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMifQ==

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
const util_1 = __webpack_require__(/*! ~bdo/utils/util */ "./source/app/utils/util.ts");
const decorators_1 = __webpack_require__(/*! ~bdo/utils/decorators */ "./source/app/utils/decorators.ts");
const decorators_2 = __webpack_require__(/*! ~bdo/utils/decorators */ "./source/app/utils/decorators.ts");
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
customElements.define("view-router", ViewRouter);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld1JvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvVmlld1JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2REFBaUU7QUFDakUsMENBQXVEO0FBQ3ZELHNEQUF3RDtBQUN4RCxzREFBaUQ7QUFDakQsaUNBQWtDO0FBVWxDLElBQXFCLFVBQVUsR0FBL0IsTUFBcUIsVUFBVyxTQUFRLG9DQUFvQixDQUFDLFdBQVcsQ0FBQztJQUR6RTs7UUFTaUMsV0FBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7SUErQ3ZELENBQUM7SUF2Q2EsaUJBQWlCO1FBQ3ZCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDaEMsQ0FBQztJQVFPLGVBQWU7UUFDbkIsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFO1lBQ3RDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxlQUFlLEtBQUssS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzNELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0QztJQUNMLENBQUM7SUFVTyxvQkFBb0IsQ0FBQyxLQUFVO1FBQ25DLElBQUk7WUFDQSxJQUFJLENBQUMsMkJBQW9CLENBQVcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFTLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFBRSxPQUFPO1lBQzNHLE1BQU0sVUFBVSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7Z0JBQzNCLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksMkNBQTJDLENBQUMsQ0FBQzthQUM5RjtZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osTUFBTSxLQUFLLENBQUM7U0FDZjtJQUNMLENBQUM7Q0FDSixDQUFBO0FBL0NlO0lBQVgscUJBQVEsRUFBRTs7MENBQXdDO0FBUmxDLFVBQVU7SUFEOUIsNEJBQWUsRUFBRTtHQUNHLFVBQVUsQ0F1RDlCO2tCQXZEb0IsVUFBVTtBQXdEL0IsY0FBYyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUMifQ==
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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
const decorators_1 = __webpack_require__(/*! ~bdo/utils/decorators */ "./source/app/utils/decorators.ts");
function BaseComponentFactory(HTMLTypeElement) {
    var _a, _b;
    class BaseComponent extends HTMLTypeElement {
        constructor(...args) {
            super(...args);
            this.isBaseComponent = true;
            this.templateString = '<div><slot></slot></div>';
            this.templateParams = {};
        }
        get properties() {
            const props = new Map();
            const properties = Reflect.getMetadata("definedProperties", this);
            for (const prop of properties) {
                props.set(prop, this[prop]);
            }
            return props;
        }
        get bindings() {
            const bindings = Reflect.getMetadata("bindings", this);
            return bindings ? bindings : {};
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
    tslib_1.__decorate([
        decorators_1.property(),
        tslib_1.__metadata("design:type", Boolean)
    ], BaseComponent.prototype, "isBaseComponent", void 0);
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
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], BaseComponent.prototype, "bindings", null);
    return BaseComponent;
}
exports.BaseComponentFactory = BaseComponentFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9CYXNlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRCQUEwQjtBQUMxQixtQ0FBNEM7QUFDNUMsdUNBQWtEO0FBQ2xELHNEQUFpRDtBQVVqRCxTQUFnQixvQkFBb0IsQ0FBeUMsZUFBc0I7O0lBUS9GLE1BQWUsYUFBYyxTQUFRLGVBQWU7UUFvRWhELFlBQVksR0FBRyxJQUFXO1lBQ3RCLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBcENTLG9CQUFlLEdBQVksSUFBSSxDQUFDO1lBVTdCLG1CQUFjLEdBQXNCLDBCQUEwQixDQUFDO1lBV3hFLG1CQUFjLEdBQW1CLEVBQUUsQ0FBQztRQWdCMUQsQ0FBQztRQW5ERCxJQUFXLFVBQVU7WUFDakIsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQWUsQ0FBQztZQUNyQyxNQUFNLFVBQVUsR0FBYSxPQUFPLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzVFLEtBQUssTUFBTSxJQUFJLElBQUksVUFBVSxFQUFFO2dCQUMzQixLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBbUIsSUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDakQ7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBcUNXLElBQWMsUUFBUTtZQUM5QixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2RCxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDcEMsQ0FBQztRQWNNLFlBQVksQ0FBQyxhQUFxQixFQUFFLEtBQWE7WUFDcEQsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUN2RCxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksYUFBYSw4REFBOEQsQ0FBQyxDQUFDO2FBQ3BHO1lBQ0ssSUFBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNuQyxLQUFLLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBUU0sZUFBZSxDQUFDLGFBQXFCO1lBQ3hDLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDdkQsTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLGFBQWEsa0VBQWtFLENBQUMsQ0FBQzthQUN4RztZQUNELEtBQUssQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDL0IsSUFBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUMzQyxDQUFDO1FBV1MsbUJBQW1CLENBQUMsR0FBRyxLQUFZO1lBRXpDLElBQUksQ0FBTyxJQUFJLENBQUMsV0FBWSxDQUFDLE9BQU8sRUFBRTtnQkFFbEMsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO29CQUMvQixhQUFhLEdBQUcsdUJBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztpQkFDMUU7Z0JBQ0QsSUFBSSxpQkFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtvQkFDL0IsYUFBYSxHQUFjLElBQUksQ0FBQyxjQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztpQkFDL0U7Z0JBQ0QsSUFBSSxhQUFhLEVBQUU7b0JBQ2YsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUN2RCxNQUFNLEdBQUcsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7b0JBQ3hFLFVBQVUsQ0FBQyxXQUFXLENBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDMUQ7YUFDSjtRQUNMLENBQUM7UUFRUyxpQkFBaUIsS0FBVyxDQUFDO1FBUzdCLG9CQUFvQixLQUFXLENBQUM7UUFTaEMsZUFBZSxLQUFXLENBQUM7UUFRM0IsYUFBYSxLQUFXLENBQUM7UUFRekIsZ0JBQWdCLEtBQVcsQ0FBQztLQUN6QztJQTFJZTtRQUFYLHFCQUFRLEVBQUU7OzBEQUFpRDtJQVVoRDtRQUFYLHFCQUFRLEVBQUU7O3lEQUFtRjtJQVdsRjtRQUFYLHFCQUFRLEVBQUU7OERBQTJCLGNBQWMsb0JBQWQsY0FBYzt5REFBTTtJQVM5QztRQUFYLHFCQUFRLEVBQUU7OztpREFHVjtJQTJHTCxPQUFPLGFBQWEsQ0FBQztBQUN6QixDQUFDO0FBdExELG9EQXNMQyJ9

/***/ }),

/***/ "./source/app/client/ts/lib/BaseController.ts":
/*!****************************************************!*\
  !*** ./source/app/client/ts/lib/BaseController.ts ***!
  \****************************************************/
/*! no static exports found */
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

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
const util_1 = __webpack_require__(/*! ~bdo/utils/util */ "./source/app/utils/util.ts");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC9saWIvQkRPTG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaUNBQWlDO0FBQ2pDLCtCQUEyQjtBQUMzQiwwQ0FBbUY7QUFXbkYsTUFBc0IsU0FBUztJQWtEM0IsWUFBWSxPQUFnQztRQTNDckMsWUFBTyxHQUFZLGFBQWEsQ0FBQztRQVFqQyx3QkFBbUIsR0FBYSxLQUFLLENBQUM7UUFRdEMscUJBQWdCLEdBQWEsS0FBSyxDQUFDO1FBZW5DLGFBQVEsR0FBZSxPQUFPLENBQUM7UUFVbkIsbUJBQWMsR0FBYSxpQ0FBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUvQixDQUFDO0lBVzFDLEdBQUcsQ0FBQyxPQUFZLEVBQUUsV0FBc0IsS0FBSyxFQUFFLEdBQUcsSUFBVztRQUNoRSxJQUFJLFFBQVEsS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztZQUFFLE9BQU87UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDbEUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QyxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7WUFDM0IsSUFBSSxNQUFNLFlBQVksS0FBSyxFQUFFO2dCQUN6QixPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNwQzs7Z0JBQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2QsT0FBUSxD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
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
const Binding_1 = __webpack_require__(/*! ~bdo/lib/Binding */ "./source/app/lib/Binding.ts");
class BDOModel {
    get bindings() {
        const bindings = Reflect.getMetadata("bindings", this);
        return bindings ? bindings : {};
    }
    bind(property) {
        const binding = new Binding_1.Binding(this, property);
        if (!Reflect.hasMetadata("bindings", this))
            Reflect.defineMetadata("bindings", {}, this);
        const boundMetadata = Reflect.getMetadata("bindings", this);
        if (!(property in boundMetadata))
            boundMetadata[property] = [];
        boundMetadata[property].push(binding);
        return binding;
    }
}
exports.BDOModel = BDOModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL2xpYi9CRE9Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUEyQztBQVEzQyxNQUFzQixRQUFRO0lBUzFCLElBQWMsUUFBUTtRQUNsQixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RCxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQVVNLElBQUksQ0FBK0QsUUFBVztRQUNqRixNQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7WUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekYsTUFBTSxhQUFhLEdBQW9ELE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdHLElBQUksQ0FBQyxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUM7WUFBRSxhQUFhLENBQVMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3ZFLGFBQWEsQ0FBUyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsT0FBTyxPQUE2QixDQUFDO0lBQ3pDLENBQUM7Q0FDSjtBQTlCRCw0QkE4QkMifQ==

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

/***/ "./source/app/lib/Binding.ts":
/*!***********************************!*\
  !*** ./source/app/lib/Binding.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(/*! ~bdo/utils/util */ "./source/app/utils/util.ts");
class Binding {
    constructor(object, property) {
        this.object = object;
        this.property = property.toString();
    }
    valueOf() {
        return this.object[this.property];
    }
    bind(object, property) {
        this.initiator = object;
        this.initiatorProperty = property.toString();
        const that = this;
        Reflect.defineMetadata(this.property, this.object[this.property], this.object);
        const thisDescriptor = Reflect.getOwnPropertyDescriptor(this.object, this.property);
        if (!this.descriptor)
            this.descriptor = thisDescriptor;
        const descriptor = Reflect.getOwnPropertyDescriptor(object, property);
        Reflect.deleteProperty(this.object, this.property);
        Reflect.defineProperty(this.object, this.property, {
            get: function modelGet() {
                return Reflect.getMetadata(that.property, that.object);
            },
            set: function modelSet(newVal) {
                if (newVal === Reflect.getMetadata(that.property, that.object))
                    return;
                object[property.toString()] = newVal;
                if (descriptor && descriptor.set) {
                    descriptor.set.call(that.object, newVal);
                }
                else
                    Reflect.defineMetadata(that.property, newVal, that.object);
            },
            configurable: true,
            enumerable: true
        });
    }
    unbind() {
        const value = this.object[this.property];
        const descriptor = Reflect.getOwnPropertyDescriptor(this.object, this.property);
        if (!this.descriptor)
            this.descriptor = descriptor;
        if (this.descriptor) {
            Reflect.defineProperty(this.object, this.property, this.descriptor);
        }
        this.object[this.property] = value;
        util_1.removeElementFromArray(this.object.bindings[this.property], this);
        util_1.removeElementFromArray(this.initiator.bindings[this.initiatorProperty], this);
    }
}
exports.Binding = Binding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmluZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvbGliL0JpbmRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBeUQ7QUFxQnpELE1BQWEsT0FBTztJQTBDaEIsWUFBWSxNQUFTLEVBQUUsUUFBVztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBUU0sT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQVNNLElBQUksQ0FBQyxNQUFjLEVBQUUsUUFBa0M7UUFDMUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUU3QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbEIsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUcvRSxNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUM7UUFDdkQsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUd0RSxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQy9DLEdBQUcsRUFBRSxTQUFTLFFBQVE7Z0JBQ2xCLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzRCxDQUFDO1lBQ0QsR0FBRyxFQUFFLFNBQVMsUUFBUSxDQUFDLE1BQVc7Z0JBQzlCLElBQUksTUFBTSxLQUFLLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUFFLE9BQU87Z0JBRXRELE1BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7Z0JBRXZELElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQzlCLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQzVDOztvQkFBTSxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0RSxDQUFDO1lBQ0QsWUFBWSxFQUFFLElBQUk7WUFDbEIsVUFBVSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQU9NLE1BQU07UUFDVCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUd6QyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDbkQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBRWpCLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN2RTtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUVuQyw2QkFBc0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEUsNkJBQXNCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEYsQ0FBQztDQUNKO0FBdEhELDBCQXNIQyJ9

/***/ }),

/***/ "./source/app/models/Cell.ts":
/*!***********************************!*\
  !*** ./source/app/models/Cell.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
    decorators_1.baseConstructor(), type_graphql_1.ObjectType(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ConstParams !== "undefined" && ConstParams) === "function" ? _a : Object])
], Test);
exports.Test = Test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvbW9kZWxzL1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrQ0FBcUQ7QUFDckQsc0RBQXdEO0FBQ3hELGdEQUE2QztBQVU3QyxJQUFhLElBQUksR0FBakIsTUFBYSxJQUFLLFNBQVEsbUJBQVE7SUF5QjlCLFlBQVksT0FBMEI7UUFDbEMsS0FBSyxFQUFFLENBQUM7UUFuQmlCLE9BQUUsR0FBVyxHQUFHLENBQUM7UUFROUIsVUFBSyxHQUFXLE1BQU0sQ0FBQztJQVl2QyxDQUFDO0NBQ0osQ0FBQTtBQXJCeUI7SUFBckIsb0JBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsaUJBQUUsQ0FBQzs7Z0NBQXlCO0FBUXJDO0lBQVIsb0JBQUssRUFBRTs7bUNBQStCO0FBUVo7SUFBMUIsb0JBQUssQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7eUNBQTZCO0FBdkI5QyxJQUFJO0lBRGhCLDRCQUFlLEVBQUUsRUFBRSx5QkFBVSxFQUFFO2lFQTBCUCxXQUFXLG9CQUFYLFdBQVc7R0F6QnZCLElBQUksQ0E0QmhCO0FBNUJZLG9CQUFJIn0=

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
const Binding_1 = __webpack_require__(/*! ~bdo/lib/Binding */ "./source/app/lib/Binding.ts");
const util_1 = __webpack_require__(/*! ~bdo/utils/util */ "./source/app/utils/util.ts");
const environment_1 = __webpack_require__(/*! ~bdo/utils/environment */ "./source/app/utils/environment.ts");
const on_change_1 = __webpack_require__(/*! on-change */ "./node_modules/on-change/index.js");
function watched() {
    return (target, key) => {
        const propDesc = Reflect.getOwnPropertyDescriptor(target, key);
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return Reflect.getMetadata(key, this);
            },
            set: function set(newVal) {
                const stringKey = key.toString();
                const capitalizedProp = util_1.ucFirst(stringKey);
                const that = this;
                const initFunc = `on${capitalizedProp}Init`;
                const changeFunc = `on${capitalizedProp}Change`;
                const addFunc = `on${capitalizedProp}Add`;
                const removeFunc = `on${capitalizedProp}Remove`;
                if (newVal instanceof Array || lodash_1.isObject(newVal)) {
                    newVal = on_change_1.default(newVal, (_path, value, previousValue) => {
                        const newObjectKeys = Object.keys(value);
                        const oldObjectKeys = Object.keys(previousValue);
                        const newLength = newObjectKeys.length;
                        const oldLength = oldObjectKeys.length;
                        if (newLength > oldLength && addFunc in this) {
                            for (const added of newObjectKeys) {
                                if (!oldObjectKeys.includes(added)) {
                                    that[addFunc](added);
                                    break;
                                }
                            }
                        }
                        if (newLength < oldLength && removeFunc in this) {
                            for (const removed of oldObjectKeys) {
                                if (!newObjectKeys.includes(removed)) {
                                    that[removeFunc](removed);
                                    break;
                                }
                            }
                        }
                    });
                }
                if (newVal === Reflect.getMetadata(key, this))
                    return;
                if (propDesc && propDesc.set) {
                    propDesc.set.call(this, newVal);
                }
                else
                    Reflect.defineMetadata(key, newVal, this);
                if (changeFunc in this && Reflect.getMetadata(`init${capitalizedProp}`, this))
                    that[changeFunc]();
                if (initFunc in this && !Reflect.getMetadata(`init${capitalizedProp}`, this))
                    that[initFunc]();
                Reflect.defineMetadata(`init${capitalizedProp}`, true, this);
            },
            enumerable: true,
            configurable: true
        });
    };
}
exports.watched = watched;
function processBinding(thisArg, key, newVal, propDesc) {
    const stringKey = key.toString();
    if (!Reflect.hasMetadata("bindings", thisArg))
        Reflect.defineMetadata("bindings", {}, thisArg);
    const mData = Reflect.getMetadata("bindings", thisArg);
    let reflect = true;
    if (newVal instanceof Binding_1.Binding) {
        if (!(key in mData))
            mData[stringKey] = [];
        if (!mData[stringKey].includes(newVal))
            mData[stringKey].push(newVal);
        newVal.bind(thisArg, key);
        newVal = newVal.valueOf();
        reflect = false;
    }
    if (newVal === Reflect.getMetadata(key, thisArg))
        return newVal;
    if (propDesc && propDesc.set) {
        propDesc.set.call(thisArg, newVal);
    }
    else
        Reflect.defineMetadata(key, newVal, thisArg);
    if (mData[stringKey] && reflect) {
        for (const binding of mData[stringKey]) {
            if (binding.object[binding.property] !== newVal)
                binding.object[binding.property] = newVal;
        }
    }
    return newVal;
}
function property() {
    return (target, key) => {
        const propDesc = Reflect.getOwnPropertyDescriptor(target, key);
        if (!Reflect.hasMetadata("definedProperties", target)) {
            Reflect.defineMetadata("definedProperties", new Array(), target);
        }
        const propertyMap = Reflect.getMetadata("definedProperties", target);
        propertyMap.push(key.toString());
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return Reflect.getMetadata(key, this);
            },
            set: function set(newVal) {
                if (newVal === Reflect.getMetadata(key, this))
                    return;
                processBinding(this, key, newVal, propDesc);
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
                const initMetaName = `${stringKey}AttrInitialized`;
                newVal = processBinding(this, key, newVal, propDesc);
                if (environment_1.isBrowser() && this instanceof HTMLElement) {
                    const attrValue = this.getAttribute(stringKey);
                    if (!Reflect.getMetadata(initMetaName, this) && attrValue) {
                        Reflect.defineMetadata(initMetaName, true, this);
                        Reflect.set(this, stringKey, attrValue);
                        this[key.toString()] = attrValue;
                        return;
                    }
                    else
                        Reflect.defineMetadata(initMetaName, true, this);
                    if (attrValue !== newVal)
                        this.setAttribute(stringKey, newVal);
                }
            },
            enumerable: true,
            configurable: true
        });
    };
}
exports.attribute = attribute;
function baseConstructor(constParamsIndex = 0) {
    const lifeCycle = (object, args) => {
        let constParams = args[constParamsIndex];
        if (!(constParams instanceof Object))
            constParams = {};
        lodash_1.merge(object, constParams);
        if ("constructedCallback" in object)
            object.constructedCallback(...args);
    };
    return (ctor) => {
        if (environment_1.isBrowser() && ctor.prototype instanceof HTMLElement) {
            return class extends ctor {
                constructor(...args) {
                    super(...args);
                    lifeCycle(this, args);
                }
            };
        }
        else {
            const original = ctor;
            const f = function newConstructor(...args) {
                const instance = new original(...args);
                lifeCycle(instance, args);
                return instance;
            };
            f.prototype = original.prototype;
            Object.keys(original).forEach((name) => { f[name] = original[name]; });
            return f;
        }
    };
}
exports.baseConstructor = baseConstructor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvdXRpbHMvZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQixtQ0FBeUM7QUFDekMsOENBQTJDO0FBQzNDLDBDQUEwQztBQUMxQyx3REFBbUQ7QUFDbkQseUNBQWlDO0FBVWpDLFNBQWdCLE9BQU87SUFDbkIsT0FBTyxDQUFDLE1BQVcsRUFBRSxHQUE2QixFQUFFLEVBQUU7UUFDbEQsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUcvRCxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDaEMsR0FBRyxFQUFFLFNBQVMsR0FBRztnQkFDYixPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzFDLENBQUM7WUFDRCxHQUFHLEVBQUUsU0FBUyxHQUFHLENBQUMsTUFBVztnQkFDekIsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNqQyxNQUFNLGVBQWUsR0FBRyxjQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sSUFBSSxHQUFtQixJQUFJLENBQUM7Z0JBRWxDLE1BQU0sUUFBUSxHQUFHLEtBQUssZUFBZSxNQUFNLENBQUM7Z0JBQzVDLE1BQU0sVUFBVSxHQUFHLEtBQUssZUFBZSxRQUFRLENBQUM7Z0JBQ2hELE1BQU0sT0FBTyxHQUFHLEtBQUssZUFBZSxLQUFLLENBQUM7Z0JBQzFDLE1BQU0sVUFBVSxHQUFHLEtBQUssZUFBZSxRQUFRLENBQUM7Z0JBR2hELElBQUksTUFBTSxZQUFZLEtBQUssSUFBSSxpQkFBUSxDQUFDLE1BQU0sQ0FB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

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXBwL3V0aWxzL2Vudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXFDO0FBUXJDLFNBQWdCLFFBQVE7SUFDcEIsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1FBQzlELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBTEQsNEJBS0M7QUFRRCxTQUFnQixTQUFTO0lBQ3JCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN2QixDQUFDO0FBRkQsOEJBRUM7QUFLWSxRQUFBLG1CQUFtQixHQUFHLENBQUMsR0FBRyxFQUFFO0lBQ3JDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzdFLE1BQU0sR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUNqQyxTQUFTLEVBQUUsQ0FBQyxJQUFZLEVBQUUsRUFBRTtZQUN4QixPQUFPLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDakQsQ0FBQztLQUNKLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBRWhCLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ3BDLElBQUksS0FBSyxZQUFZLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQzlDLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDNUI7UUFDRCxPQUFPLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMifQ==
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./source/app/utils/util.ts":
/*!**********************************!*\
  !*** ./source/app/utils/util.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.ucFirst = ucFirst;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHAvdXRpbHMvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLFNBQWdCLE9BQU8sQ0FBQyxHQUFXO0lBQy9CLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RELENBQUM7QUFGRCwwQkFFQztBQVNELFNBQWdCLHNCQUFzQixDQUFDLEtBQVksRUFBRSxPQUFZO0lBQzdELE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsSUFBSSxLQUFLLElBQUksQ0FBQztRQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFIRCx3REFHQztBQVNELFNBQWdCLDBCQUEwQixDQUFDLE1BQVcsRUFBRSxhQUF1QixFQUFFO0lBQzdFLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEQsSUFBSSxTQUFTLEVBQUU7UUFDWCxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsMEJBQTBCLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBQ3JEO0lBQ0QsT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQztBQVBELGdFQU9DO0FBV0QsU0FBZ0Isb0JBQW9CLENBQUMsTUFBeUIsRUFBRSxJQUFjLEVBQUUsWUFBb0IsRUFBRTtJQUNsRyxLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksRUFBRTtRQUN2QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRTtZQUMxQyxPQUFPLElBQUksQ0FBQztTQUNmO0tBQ0o7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBUEQsb0RBT0MifQ==

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
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js ./var/tmp/virtualEntryPoint.ts ./source/app/utils/decorators.ts ./source/app/utils/environment.ts ./source/app/utils/util.ts ./source/app/routes/BDOConfig.ts ./source/app/routes/BDOGameLobby.ts ./source/app/routes/BDOHome.ts ./source/app/models/Cell.ts ./source/app/models/Chunk.ts ./source/app/models/Test.ts ./source/app/lib/BDOConfigManager.ts ./source/app/lib/BDOLogger.ts ./source/app/lib/BDOMapCache.ts ./source/app/lib/BDOModel.ts ./source/app/lib/BDORoute.ts ./source/app/lib/Binding.ts ./source/app/client/ts/routes/Config.ts ./source/app/client/ts/routes/GameLobby.ts ./source/app/client/ts/routes/Home.ts ./source/app/client/ts/lib/BaseComponent.ts ./source/app/client/ts/lib/BaseController.ts ./source/app/client/ts/lib/BaseRoute.ts ./source/app/client/ts/lib/ConfigManager.ts ./source/app/client/ts/lib/Logger.ts ./source/app/client/ts/components/GameWindow.ts ./source/app/client/ts/components/TestComponent.ts ./source/app/client/ts/components/ViewLink.ts ./source/app/client/ts/components/ViewRouter.ts ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Atom_projects\Game\node_modules\@webcomponents\webcomponentsjs\webcomponents-bundle.js */"./node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js");
__webpack_require__(/*! D:\Atom_projects\Game\var\tmp\virtualEntryPoint.ts */"./var/tmp/virtualEntryPoint.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\utils\decorators.ts */"./source/app/utils/decorators.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\utils\environment.ts */"./source/app/utils/environment.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\utils\util.ts */"./source/app/utils/util.ts");
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
__webpack_require__(/*! D:\Atom_projects\Game\source\app\lib\Binding.ts */"./source/app/lib/Binding.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\routes\Config.ts */"./source/app/client/ts/routes/Config.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\routes\GameLobby.ts */"./source/app/client/ts/routes/GameLobby.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\routes\Home.ts */"./source/app/client/ts/routes/Home.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\lib\BaseComponent.ts */"./source/app/client/ts/lib/BaseComponent.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\lib\BaseController.ts */"./source/app/client/ts/lib/BaseController.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\lib\BaseRoute.ts */"./source/app/client/ts/lib/BaseRoute.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\lib\ConfigManager.ts */"./source/app/client/ts/lib/ConfigManager.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\lib\Logger.ts */"./source/app/client/ts/lib/Logger.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\components\GameWindow.ts */"./source/app/client/ts/components/GameWindow.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\components\TestComponent.ts */"./source/app/client/ts/components/TestComponent.ts");
__webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\components\ViewLink.ts */"./source/app/client/ts/components/ViewLink.ts");
module.exports = __webpack_require__(/*! D:\Atom_projects\Game\source\app\client\ts\components\ViewRouter.ts */"./source/app/client/ts/components/ViewRouter.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2NvbXBvbmVudHMvR2FtZVdpbmRvdy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1Rlc3RDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvY29tcG9uZW50cy9WaWV3TGluay50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9jb21wb25lbnRzL1ZpZXdSb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0Jhc2VDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL2xpYi9CYXNlUm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0NvbmZpZ01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMgc3luYyBeXFwuXFwvLipcXC50cyQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvR2FtZUxvYmJ5LnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcy9Ib21lLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0JET0NvbmZpZ01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9saWIvQkRPTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0JET01hcENhY2hlLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0JET01vZGVsLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0JET1JvdXRlLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvbGliL0JpbmRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9tb2RlbHMvQ2VsbC50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL21vZGVscy9DaHVuay50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL21vZGVscy9UZXN0LnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvcm91dGVzL0JET0NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3JvdXRlcy9CRE9HYW1lTG9iYnkudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC9yb3V0ZXMvQkRPSG9tZS50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXBwL3V0aWxzIHN5bmMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscy9kZWNvcmF0b3JzLnRzIiwid2VicGFjazovLy8uL3NvdXJjZS9hcHAvdXRpbHMvZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2FwcC91dGlscy91dGlsLnRzIiwid2VicGFjazovLy8uL3Zhci90bXAvdmlydHVhbEVudHJ5UG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQix1QkFBdUI7QUFDdkM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTSx5REFBUSxJQUFJLENBQUM7QUFDdkM7QUFDQSxLQUFLLEdBQUcsVUFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNELDJDQUEyQyx1M0M7Ozs7Ozs7Ozs7Ozs7QUM3QjlCO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLE9BQU8sRUFBRSxVQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrdkM7Ozs7Ozs7Ozs7OztBQzlCOUI7QUFDYjtBQUNBLDJDQUEyQywyUSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yXCIsXCJ0ZW1wbGF0ZXNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1TR1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLVNHLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2EsIF9iO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcblwidXNlIHN0cmljdFwiO1xuY29uc3QgQmFzZUNvbXBvbmVudF8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0Jhc2VDb21wb25lbnRcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgZGVjb3JhdG9yc18yID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IEJBQllMT04gPSByZXF1aXJlKFwiYmFieWxvbmpzXCIpO1xubGV0IEdhbWVXaW5kb3cgPSBjbGFzcyBHYW1lV2luZG93IGV4dGVuZHMgQmFzZUNvbXBvbmVudF8xLkJhc2VDb21wb25lbnRGYWN0b3J5KEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZW5naW5lID0gbmV3IEJBQllMT04uRW5naW5lKHRoaXMsIHRydWUsIHtcbiAgICAgICAgICAgIGF1ZGlvRW5naW5lOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNjZW5lID0gdGhpcy5jcmVhdGVTY2VuZSgpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBgMTAwJWA7XG4gICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSBgMTAwJWA7XG4gICAgICAgIHRoaXMuZW5naW5lLnJ1blJlbmRlckxvb3AoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW5naW5lLnJlc2l6ZSgpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjcmVhdGVTY2VuZSgpIHtcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBuZXcgQkFCWUxPTi5TY2VuZSh0aGlzLmVuZ2luZSk7XG4gICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBCQUJZTE9OLkZyZWVDYW1lcmEoJ2NhbWVyYScsIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgNSwgLTEwKSwgc2NlbmUpO1xuICAgICAgICBjYW1lcmEuc2V0VGFyZ2V0KEJBQllMT04uVmVjdG9yMy5aZXJvKCkpO1xuICAgICAgICBjYW1lcmEuYXR0YWNoQ29udHJvbCh0aGlzLCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IGxpZ2h0ID0gbmV3IEJBQllMT04uSGVtaXNwaGVyaWNMaWdodCgnbGlnaHQxJywgbmV3IEJBQllMT04uVmVjdG9yMygwLCAxLCAwKSwgc2NlbmUpO1xuICAgICAgICBsaWdodC5zaGFkb3dFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgc3BoZXJlID0gQkFCWUxPTi5NZXNoQnVpbGRlci5DcmVhdGVTcGhlcmUoJ3NwaGVyZScsIHsgc2VnbWVudHM6IDE2LCBkaWFtZXRlcjogMiB9LCBzY2VuZSk7XG4gICAgICAgIHNwaGVyZS5wb3NpdGlvbi55ID0gMTtcbiAgICAgICAgQkFCWUxPTi5NZXNoQnVpbGRlci5DcmVhdGVHcm91bmQoJ2dyb3VuZDEnLCB7IGhlaWdodDogNiwgd2lkdGg6IDYsIHN1YmRpdmlzaW9uczogMiB9LCBzY2VuZSk7XG4gICAgICAgIHJldHVybiBzY2VuZTtcbiAgICB9XG4gICAgY3JlYXRlVGVycmFpbigpIHsgfVxufTtcbkdhbWVXaW5kb3cuZXh0ZW5kcyA9IFwiY2FudmFzXCI7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMi5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIHR5cGVvZiAoX2EgPSB0eXBlb2YgQkFCWUxPTiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBCQUJZTE9OLkVuZ2luZSkgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0KVxuXSwgR2FtZVdpbmRvdy5wcm90b3R5cGUsIFwiZW5naW5lXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMi5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIHR5cGVvZiAoX2IgPSB0eXBlb2YgQkFCWUxPTiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBCQUJZTE9OLlNjZW5lKSA9PT0gXCJmdW5jdGlvblwiID8gX2IgOiBPYmplY3QpXG5dLCBHYW1lV2luZG93LnByb3RvdHlwZSwgXCJzY2VuZVwiLCB2b2lkIDApO1xuR2FtZVdpbmRvdyA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLmJhc2VDb25zdHJ1Y3RvcigpXG5dLCBHYW1lV2luZG93KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEdhbWVXaW5kb3c7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2dhbWUtd2luZG93JywgR2FtZVdpbmRvdywge1xuICAgIGV4dGVuZHM6IEdhbWVXaW5kb3cuZXh0ZW5kc1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSMkZ0WlZkcGJtUnZkeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDJOdmJYQnZibVZ1ZEhNdlIyRnRaVmRwYm1SdmR5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMRFpFUVVGcFJUdEJRVU5xUlN4elJFRkJkMFE3UVVGRGVFUXNjMFJCUVdsRU8wRkJRMnBFTEhGRFFVRnhRenRCUVZWeVF5eEpRVUZ4UWl4VlFVRlZMRWRCUVM5Q0xFMUJRWEZDTEZWQlFWY3NVMEZCVVN4dlEwRkJiMElzUTBGQlF5eHBRa0ZCYVVJc1EwRkJRenRKUVVRdlJUczdVVUZ0UWpCQ0xGZEJRVTBzUjBGQmJVSXNTVUZCU1N4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVTdXVUZETVVVc1YwRkJWeXhGUVVGRkxFbEJRVWs3VTBGRGNFSXNRMEZCUXl4RFFVRkRPMUZCVTIxQ0xGVkJRVXNzUjBGQmEwSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8wbEJlVVJ3UlN4RFFVRkRPMGxCYkVSVkxHbENRVUZwUWp0UlFVTndRaXhMUVVGTExFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1EwRkJRenRSUVVNeFFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRE0wSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETzFGQlF6RkNMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zWVVGQllTeERRVUZETEVkQlFVY3NSVUZCUlR0WlFVTXpRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMUZCUTNoQ0xFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEwZ3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dFJRVU55UWl4TlFVRk5MRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVjc1JVRkJSVHRaUVVOdVF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU03V1VGREwwSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETzFGQlEzSkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMUFzUTBGQlF6dEpRVk5UTEZkQlFWYzdVVUZGYWtJc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVVUzUXl4TlFVRk5MRTFCUVUwc1IwRkJSeXhKUVVGSkxFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdVVUZGZGtZc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRmVrTXNUVUZCVFN4RFFVRkRMR0ZCUVdFc1EwRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdVVUZGYkVNc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRekZHTEV0QlFVc3NRMEZCUXl4aFFVRmhMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJSVE5DTEUxQlFVMHNUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRkZCUVZFc1JVRkJSU3hGUVVGRkxFVkJRVVVzVVVGQlVTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJSV2hITEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVYwUWl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eFRRVUZUTEVWQlFVVXNSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVWQlFVVXNXVUZCV1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFGQlJUZEdMRTlCUVU4c1MwRkJTeXhEUVVGRE8wbEJRMnBDTEVOQlFVTTdTVUZSVXl4aFFVRmhMRXRCUVVzc1EwRkJRenREUVVOb1F5eERRVUZCTzBGQk4wVXdRaXhyUWtGQlR5eEhRVUZYTEZGQlFWRXNRMEZCUXp0QlFWTjBRenRKUVVGWUxIRkNRVUZSTEVWQlFVVTdNRVJCUVcxQ0xFOUJRVThzYjBKQlFWQXNUMEZCVHl4RFFVRkRMRTFCUVUwN01FTkJSWHBETzBGQlUxTTdTVUZCV0N4eFFrRkJVU3hGUVVGRk96QkVRVUZyUWl4UFFVRlBMRzlDUVVGUUxFOUJRVThzUTBGQlF5eExRVUZMTzNsRFFVRnpRanRCUVRkQ0wwTXNWVUZCVlR0SlFVUTVRaXcwUWtGQlpTeEZRVUZGTzBkQlEwY3NWVUZCVlN4RFFYTkdPVUk3YTBKQmRFWnZRaXhWUVVGVk8wRkJkVVl2UWl4alFVRmpMRU5CUVVNc1RVRkJUU3hEUVVGRExHRkJRV0VzUlVGQlJTeFZRVUZWTEVWQlFVVTdTVUZETjBNc1QwRkJUeXhGUVVGRkxGVkJRVlVzUTBGQlF5eFBRVUZQTzBOQlF6bENMRU5CUVVNc1EwRkJReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgQmFzZUNvbXBvbmVudF8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0Jhc2VDb21wb25lbnRcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgZGVjb3JhdG9yc18yID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmxldCBUZXN0Q29tcG9uZW50ID0gY2xhc3MgVGVzdENvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnRfMS5CYXNlQ29tcG9uZW50RmFjdG9yeShIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9ICd0ZXN0JztcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVN0cmluZyA9IHJlcXVpcmUoJ35zdGF0aWMvdmlld3MvdGVzdENvbXBvbmVudC5uamsnKTtcbiAgICB9XG59O1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzIuYXR0cmlidXRlKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgVGVzdENvbXBvbmVudC5wcm90b3R5cGUsIFwiY2xhc3NOYW1lXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMi5wcm9wZXJ0eSgpLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbl0sIFRlc3RDb21wb25lbnQucHJvdG90eXBlLCBcInRlbXBsYXRlU3RyaW5nXCIsIHZvaWQgMCk7XG5UZXN0Q29tcG9uZW50ID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKClcbl0sIFRlc3RDb21wb25lbnQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVGVzdENvbXBvbmVudDtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndGVzdC1jb21wb25lbnQnLCBUZXN0Q29tcG9uZW50KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHVnpkRU52YlhCdmJtVnVkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2WTJ4cFpXNTBMM1J6TDJOdmJYQnZibVZ1ZEhNdlZHVnpkRU52YlhCdmJtVnVkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3cyUkVGQmFVVTdRVUZEYWtVc2MwUkJRWGRFTzBGQlEzaEVMSE5FUVVFMFJEdEJRVlUxUkN4SlFVRnhRaXhoUVVGaExFZEJRV3hETEUxQlFYRkNMR0ZCUVdNc1UwRkJVU3h2UTBGQmIwSXNRMEZCUXl4WFFVRlhMRU5CUVVNN1NVRkVOVVU3TzFGQlVYZENMR05CUVZNc1IwRkJWeXhOUVVGTkxFTkJRVU03VVVGUmVrSXNiVUpCUVdNc1IwRkJSeXhQUVVGUExFTkJRVU1zYVVOQlFXbERMRU5CUVVNc1EwRkJRenRKUVVWMFJpeERRVUZETzBOQlFVRXNRMEZCUVR0QlFWWm5RanRKUVVGYUxITkNRVUZUTEVWQlFVVTdPMmRFUVVGdFF6dEJRVkZ1UXp0SlFVRllMSEZDUVVGUkxFVkJRVVU3TzNGRVFVRjFSVHRCUVdacVJTeGhRVUZoTzBsQlJHcERMRFJDUVVGbExFVkJRVVU3UjBGRFJ5eGhRVUZoTEVOQmFVSnFRenRyUWtGcVFtOUNMR0ZCUVdFN1FVRnJRbXhETEdOQlFXTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNZVUZCWVN4RFFVRkRMRU5CUVVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfYSwgX2I7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBCYXNlQ29tcG9uZW50XzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQmFzZUNvbXBvbmVudFwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5jb25zdCBUZXN0XzEgPSByZXF1aXJlKFwifmJkby9tb2RlbHMvVGVzdFwiKTtcbmxldCBWaWV3TGluayA9IGNsYXNzIFZpZXdMaW5rIGV4dGVuZHMgQmFzZUNvbXBvbmVudF8xLkJhc2VDb21wb25lbnRGYWN0b3J5KEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgY29uc3RydWN0b3IoX3BhcmFtcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IFRlc3RfMS5UZXN0KHsgaWQ6IFwiMVwiLCB0aXRsZTogU3RyaW5nKERhdGUubm93KCkpIH0pO1xuICAgICAgICB0aGlzLnRlc3QgPSB0aGlzLm1vZGVsLmJpbmQoXCJ0aXRsZVwiKTtcbiAgICAgICAgdGhpcy50ZXN0ZXIgPSBbXCJoYWhhXCJdO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3RlZENhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25MaW5rQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uTGlua0NsaWNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvdy5yb3V0ZXIubmF2aWdhdGUodGhpcy5ocmVmLCB0cnVlKTtcbiAgICB9XG59O1xuVmlld0xpbmsuZXh0ZW5kcyA9ICdhJztcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgdHlwZW9mIChfYSA9IHR5cGVvZiBUZXN0XzEuVGVzdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBUZXN0XzEuVGVzdCkgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0KVxuXSwgVmlld0xpbmsucHJvdG90eXBlLCBcIm1vZGVsXCIsIHZvaWQgMCk7XG50c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgIGRlY29yYXRvcnNfMS5hdHRyaWJ1dGUoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBWaWV3TGluay5wcm90b3R5cGUsIFwidGVzdFwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEud2F0Y2hlZCgpLCBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSlcbl0sIFZpZXdMaW5rLnByb3RvdHlwZSwgXCJ0ZXN0ZXJcIiwgdm9pZCAwKTtcblZpZXdMaW5rID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2IgPSB0eXBlb2YgQ29uc3RQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIgJiYgQ29uc3RQYXJhbXMpID09PSBcImZ1bmN0aW9uXCIgPyBfYiA6IE9iamVjdF0pXG5dLCBWaWV3TGluayk7XG5leHBvcnRzLmRlZmF1bHQgPSBWaWV3TGluaztcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInZpZXctbGlua1wiLCBWaWV3TGluaywgeyBleHRlbmRzOiBWaWV3TGluay5leHRlbmRzIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVm1sbGQweHBibXN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJOc2FXVnVkQzkwY3k5amIyMXdiMjVsYm5SekwxWnBaWGRNYVc1ckxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3TzBGQlFVRXNOa1JCUVdsRk8wRkJRMnBGTEhORVFVRnpSanRCUVVOMFJpd3lRMEZCZDBNN1FVRlZlRU1zU1VGQmNVSXNVVUZCVVN4SFFVRTNRaXhOUVVGeFFpeFJRVUZUTEZOQlFWRXNiME5CUVc5Q0xFTkJRVU1zYVVKQlFXbENMRU5CUVVNN1NVRnJRM3BGTEZsQlFWa3NUMEZCSzBJN1VVRkRka01zUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZ1UWs4c1ZVRkJTeXhIUVVGVExFbEJRVWtzVjBGQlNTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVkU1UkN4VFFVRkpMRWRCUVZjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRlJPVUlzVjBGQlRTeEhRVUZoTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkpNVVFzUTBGQlF6dEpRVTlOTEcxQ1FVRnRRanRSUVVOMFFpeExRVUZMTEVOQlFVTXNiVUpCUVcxQ0xFVkJRVVVzUTBGQlF6dFJRVU0xUWl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRhRVVzUTBGQlF6dEpRVk5QTEZkQlFWY3NRMEZCUXl4TFFVRlpPMUZCUXpWQ0xFdEJRVXNzUTBGQlF5eGpRVUZqTEVWQlFVVXNRMEZCUXp0UlFVTjJRaXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBsQlF6VkRMRU5CUVVNN1EwRkRTaXhEUVVGQk8wRkJia1F3UWl4blFrRkJUeXhIUVVGWkxFZEJRVWNzUTBGQlF6dEJRVkZzUXp0SlFVRllMSEZDUVVGUkxFVkJRVVU3TUVSQlFXVXNWMEZCU1N4dlFrRkJTaXhYUVVGSk8zVkRRVUZ2UkR0QlFWRnlSVHRKUVVGYUxITkNRVUZUTEVWQlFVVTdPM05EUVVGblJEdEJRVkZ5UXp0SlFVRjBRaXh2UWtGQlR5eEZRVUZGTEVWQlFVVXNjVUpCUVZFc1JVRkJSVHM3ZDBOQlFXOURPMEZCYUVONlF5eFJRVUZSTzBsQlJEVkNMRFJDUVVGbExFVkJRVVU3YVVWQmJVTlJMRmRCUVZjc2IwSkJRVmdzVjBGQlZ6dEhRV3hEYUVJc1VVRkJVU3hEUVRKRU5VSTdhMEpCTTBSdlFpeFJRVUZSTzBGQk5FUTNRaXhqUVVGakxFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWY3NSVUZCUlN4UlFVRlJMRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVVzVVVGQlVTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBCYXNlQ29tcG9uZW50XzEgPSByZXF1aXJlKFwifmNsaWVudC9saWIvQmFzZUNvbXBvbmVudFwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xuY29uc3QgZGVjb3JhdG9yc18yID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IE5hdmlnbyA9IHJlcXVpcmUoXCJuYXZpZ29cIik7XG5sZXQgVmlld1JvdXRlciA9IGNsYXNzIFZpZXdSb3V0ZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50XzEuQmFzZUNvbXBvbmVudEZhY3RvcnkoSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSBuZXcgTmF2aWdvKCk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICB0aGlzLnJvdXRlQ29sbGVjdGlvbigpO1xuICAgICAgICB3aW5kb3cucm91dGVyID0gdGhpcy5yb3V0ZXI7XG4gICAgfVxuICAgIHJvdXRlQ29sbGVjdGlvbigpIHtcbiAgICAgICAgZm9yIChjb25zdCByb3V0ZSBvZiB3aW5kb3cudmlydHVhbFJvdXRlcykge1xuICAgICAgICAgICAgY29uc3QgbXlSb3V0ZSA9IHJlcXVpcmUoYC4vLi4vcm91dGVzLyR7cm91dGV9LnRzYCkuZGVmYXVsdDtcbiAgICAgICAgICAgIHRoaXMuc2luZ2VSb3V0ZUNvbGxlY3Rpb24obXlSb3V0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2luZ2VSb3V0ZUNvbGxlY3Rpb24oUm91dGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghdXRpbF8xLmluY2x1ZGVzTWVtYmVyT2ZMaXN0KFJvdXRlLmF0dGFjaFRvU2VydmVycywgW2dsb2JhbC5wcm9jZXNzLmVudi5uYW1lLCAnKiddKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBSb3V0ZUNsYXNzID0gbmV3IFJvdXRlKCk7XG4gICAgICAgICAgICBpZiAoIVJvdXRlQ2xhc3MuaXNDbGllbnRSb3V0ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtSb3V0ZUNsYXNzLmNvbnN0cnVjdG9yLm5hbWV9IGlzIG5vdCBpbnN0YW5jZSBvZiB+Y2xpZW50L2xpYi9CYXNlUm91dGVgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucm91dGVyLm9uKFJvdXRlQ2xhc3Mucm91dGVyKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxufTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgZGVjb3JhdG9yc18yLnByb3BlcnR5KCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuXSwgVmlld1JvdXRlci5wcm90b3R5cGUsIFwicm91dGVyXCIsIHZvaWQgMCk7XG5WaWV3Um91dGVyID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKClcbl0sIFZpZXdSb3V0ZXIpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVmlld1JvdXRlcjtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInZpZXctcm91dGVyXCIsIFZpZXdSb3V0ZXIpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVm1sbGQxSnZkWFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyTnZiWEJ2Ym1WdWRITXZWbWxsZDFKdmRYUmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3cyUkVGQmFVVTdRVUZEYWtVc01FTkJRWFZFTzBGQlEzWkVMSE5FUVVGM1JEdEJRVU40UkN4elJFRkJhVVE3UVVGRGFrUXNhVU5CUVd0RE8wRkJWV3hETEVsQlFYRkNMRlZCUVZVc1IwRkJMMElzVFVGQmNVSXNWVUZCVnl4VFFVRlJMRzlEUVVGdlFpeERRVUZETEZkQlFWY3NRMEZCUXp0SlFVUjZSVHM3VVVGVGFVTXNWMEZCVFN4SFFVRkhMRWxCUVVrc1RVRkJUU3hGUVVGRkxFTkJRVU03U1VFclEzWkVMRU5CUVVNN1NVRjJRMkVzYVVKQlFXbENPMUZCUTNaQ0xFdEJRVXNzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hEUVVGRE8xRkJRekZDTEVsQlFVa3NRMEZCUXl4bFFVRmxMRVZCUVVVc1EwRkJRenRSUVVOMlFpeE5RVUZOTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03U1VGRGFFTXNRMEZCUXp0SlFWRlBMR1ZCUVdVN1VVRkRia0lzUzBGQlN5eE5RVUZOTEV0QlFVc3NTVUZCU1N4TlFVRk5MRU5CUVVNc1lVRkJZU3hGUVVGRk8xbEJRM1JETEUxQlFVMHNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhsUVVGbExFdEJRVXNzUzBGQlN5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRPMWxCUXpORUxFbEJRVWtzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFRRVU4wUXp0SlFVTk1MRU5CUVVNN1NVRlZUeXh2UWtGQmIwSXNRMEZCUXl4TFFVRlZPMUZCUTI1RExFbEJRVWs3V1VGRFFTeEpRVUZKTEVOQlFVTXNNa0pCUVc5Q0xFTkJRVmNzUzBGQlN5eERRVUZETEdWQlFXVXNSVUZCUlN4RFFVRlRMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGQlJTeFBRVUZQTzFsQlF6TkhMRTFCUVUwc1ZVRkJWU3hIUVVGSExFbEJRVWtzUzBGQlN5eEZRVUZGTEVOQlFVTTdXVUZETDBJc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eGhRVUZoTEVWQlFVVTdaMEpCUXpOQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNSMEZCUnl4VlFVRlZMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzTWtOQlFUSkRMRU5CUVVNc1EwRkJRenRoUVVNNVJqdFpRVU5FTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0VFFVTnlRenRSUVVGRExFOUJRVThzUzBGQlN5eEZRVUZGTzFsQlExb3NUVUZCVFN4TFFVRkxMRU5CUVVNN1UwRkRaanRKUVVOTUxFTkJRVU03UTBGRFNpeERRVUZCTzBGQkwwTmxPMGxCUVZnc2NVSkJRVkVzUlVGQlJUczdNRU5CUVhkRE8wRkJVbXhETEZWQlFWVTdTVUZFT1VJc05FSkJRV1VzUlVGQlJUdEhRVU5ITEZWQlFWVXNRMEYxUkRsQ08ydENRWFpFYjBJc1ZVRkJWVHRCUVhkRUwwSXNZMEZCWXl4RFFVRkRMRTFCUVUwc1EwRkJReXhoUVVGaExFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xucmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7XG5jb25zdCBsb2Rhc2hfMSA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5jb25zdCBudW5qdWNrc18xID0gcmVxdWlyZShcIm51bmp1Y2tzXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmZ1bmN0aW9uIEJhc2VDb21wb25lbnRGYWN0b3J5KEhUTUxUeXBlRWxlbWVudCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIEhUTUxUeXBlRWxlbWVudCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICAgICAgdGhpcy5pc0Jhc2VDb21wb25lbnQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVN0cmluZyA9ICc8ZGl2PjxzbG90Pjwvc2xvdD48L2Rpdj4nO1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVBhcmFtcyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImRlZmluZWRQcm9wZXJ0aWVzXCIsIHRoaXMpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wIG9mIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5zZXQocHJvcCwgdGhpc1twcm9wXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IGJpbmRpbmdzKCkge1xuICAgICAgICAgICAgY29uc3QgYmluZGluZ3MgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiYmluZGluZ3NcIiwgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gYmluZGluZ3MgPyBiaW5kaW5ncyA6IHt9O1xuICAgICAgICB9XG4gICAgICAgIHNldEF0dHJpYnV0ZShxdWFsaWZpZWROYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcGVydGllcyAmJiB0aGlzLnByb3BlcnRpZXMuaGFzKHF1YWxpZmllZE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBcIiR7cXVhbGlmaWVkTmFtZX1cIiBjYW4ndCBiZSBzZXQgYXMgYXR0cmlidXRlIGJlY2F1c2UgaXQgaXMgYSBkZWZpbmVkIHByb3BlcnR5YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzW3F1YWxpZmllZE5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICBzdXBlci5zZXRBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZUF0dHJpYnV0ZShxdWFsaWZpZWROYW1lKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzICYmIHRoaXMucHJvcGVydGllcy5oYXMocXVhbGlmaWVkTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFwiJHtxdWFsaWZpZWROYW1lfVwiIGNhbid0IGJlIHJlbW92ZWQgYXMgYXR0cmlidXRlIGJlY2F1c2UgaXQgaXMgYSBkZWZpbmVkIHByb3BlcnR5YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdXBlci5yZW1vdmVBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSk7XG4gICAgICAgICAgICB0aGlzW3F1YWxpZmllZE5hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0cnVjdGVkQ2FsbGJhY2soLi4uX2FyZ3MpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jb25zdHJ1Y3Rvci5leHRlbmRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0cmluZ1RvUGFyc2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChsb2Rhc2hfMS5pc1N0cmluZyh0aGlzLnRlbXBsYXRlU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmdUb1BhcnNlID0gbnVuanVja3NfMS5yZW5kZXJTdHJpbmcodGhpcy50ZW1wbGF0ZVN0cmluZywgdGhpcy50ZW1wbGF0ZVBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsb2Rhc2hfMS5pc09iamVjdCh0aGlzLnRlbXBsYXRlU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmdUb1BhcnNlID0gdGhpcy50ZW1wbGF0ZVN0cmluZy5yZW5kZXIodGhpcy50ZW1wbGF0ZVBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJpbmdUb1BhcnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzdHJpbmdUb1BhcnNlLCAndGV4dC9odG1sJyk7XG4gICAgICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoZG9jLmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkgeyB9XG4gICAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkgeyB9XG4gICAgICAgIGFkb3B0ZWRDYWxsYmFjaygpIHsgfVxuICAgICAgICBhZGRDb250cm9sbGVyKCkgeyB9XG4gICAgICAgIHJlbW92ZUNvbnRyb2xsZXIoKSB7IH1cbiAgICB9XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG4gICAgXSwgQmFzZUNvbXBvbmVudC5wcm90b3R5cGUsIFwiaXNCYXNlQ29tcG9uZW50XCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgZGVjb3JhdG9yc18xLnByb3BlcnR5KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbiAgICBdLCBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJ0ZW1wbGF0ZVN0cmluZ1wiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIGRlY29yYXRvcnNfMS5wcm9wZXJ0eSgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCB0eXBlb2YgKF9iID0gdHlwZW9mIEluZGV4U3RydWN0dXJlICE9PSBcInVuZGVmaW5lZFwiICYmIEluZGV4U3RydWN0dXJlKSA9PT0gXCJmdW5jdGlvblwiID8gX2IgOiBPYmplY3QpXG4gICAgXSwgQmFzZUNvbXBvbmVudC5wcm90b3R5cGUsIFwidGVtcGxhdGVQYXJhbXNcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBkZWNvcmF0b3JzXzEucHJvcGVydHkoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG4gICAgXSwgQmFzZUNvbXBvbmVudC5wcm90b3R5cGUsIFwiYmluZGluZ3NcIiwgbnVsbCk7XG4gICAgcmV0dXJuIEJhc2VDb21wb25lbnQ7XG59XG5leHBvcnRzLkJhc2VDb21wb25lbnRGYWN0b3J5ID0gQmFzZUNvbXBvbmVudEZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRbUZ6WlVOdmJYQnZibVZ1ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyeHBZaTlDWVhObFEyOXRjRzl1Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxEUkNRVUV3UWp0QlFVTXhRaXh0UTBGQk5FTTdRVUZETlVNc2RVTkJRV3RFTzBGQlEyeEVMSE5FUVVGcFJEdEJRVlZxUkN4VFFVRm5RaXh2UWtGQmIwSXNRMEZCZVVNc1pVRkJjMEk3TzBsQlVTOUdMRTFCUVdVc1lVRkJZeXhUUVVGUkxHVkJRV1U3VVVGdlJXaEVMRmxCUVZrc1IwRkJSeXhKUVVGWE8xbEJRM1JDTEV0QlFVc3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJjRU5UTEc5Q1FVRmxMRWRCUVZrc1NVRkJTU3hEUVVGRE8xbEJWVGRDTEcxQ1FVRmpMRWRCUVhOQ0xEQkNRVUV3UWl4RFFVRkRPMWxCVjNoRkxHMUNRVUZqTEVkQlFXMUNMRVZCUVVVc1EwRkJRenRSUVdkQ01VUXNRMEZCUXp0UlFXNUVSQ3hKUVVGWExGVkJRVlU3V1VGRGFrSXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hIUVVGSExFVkJRV1VzUTBGQlF6dFpRVU55UXl4TlFVRk5MRlZCUVZVc1IwRkJZU3hQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEcxQ1FVRnRRaXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFsQlF6VkZMRXRCUVVzc1RVRkJUU3hKUVVGSkxFbEJRVWtzVlVGQlZTeEZRVUZGTzJkQ1FVTXpRaXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NSVUZCYlVJc1NVRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEYWtRN1dVRkRSQ3hQUVVGUExFdEJRVXNzUTBGQlF6dFJRVU5xUWl4RFFVRkRPMUZCY1VOWExFbEJRV01zVVVGQlVUdFpRVU01UWl4TlFVRk5MRkZCUVZFc1IwRkJSeXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEZWQlFWVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOMlJDeFBRVUZQTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTTdVVUZEY0VNc1EwRkJRenRSUVdOTkxGbEJRVmtzUTBGQlF5eGhRVUZ4UWl4RlFVRkZMRXRCUVdFN1dVRkRjRVFzU1VGQlNTeEpRVUZKTEVOQlFVTXNWVUZCVlN4SlFVRkpMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEdGQlFXRXNRMEZCUXl4RlFVRkZPMmRDUVVOMlJDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRWxCUVVrc1lVRkJZU3c0UkVGQk9FUXNRMEZCUXl4RFFVRkRPMkZCUTNCSE8xbEJRMHNzU1VGQlN5eERRVUZETEdGQlFXRXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRaUVVOdVF5eExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMR0ZCUVdFc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU0zUXl4RFFVRkRPMUZCVVUwc1pVRkJaU3hEUVVGRExHRkJRWEZDTzFsQlEzaERMRWxCUVVrc1NVRkJTU3hEUVVGRExGVkJRVlVzU1VGQlNTeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhoUVVGaExFTkJRVU1zUlVGQlJUdG5Ra0ZEZGtRc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eEpRVUZKTEdGQlFXRXNhMFZCUVd0RkxFTkJRVU1zUTBGQlF6dGhRVU40Unp0WlFVTkVMRXRCUVVzc1EwRkJReXhsUVVGbExFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTTdXVUZETDBJc1NVRkJTeXhEUVVGRExHRkJRV0VzUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXp0UlFVTXpReXhEUVVGRE8xRkJWMU1zYlVKQlFXMUNMRU5CUVVNc1IwRkJSeXhMUVVGWk8xbEJSWHBETEVsQlFVa3NRMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJXU3hEUVVGRExFOUJRVThzUlVGQlJUdG5Ra0ZGYkVNc1NVRkJTU3hoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETzJkQ1FVTjZRaXhKUVVGSkxHbENRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhGUVVGRk8yOUNRVU12UWl4aFFVRmhMRWRCUVVjc2RVSkJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RlFVRkZMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF6dHBRa0ZETVVVN1owSkJRMFFzU1VGQlNTeHBRa0ZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUlVGQlJUdHZRa0ZETDBJc1lVRkJZU3hIUVVGakxFbEJRVWtzUTBGQlF5eGpRVUZsTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF6dHBRa0ZETDBVN1owSkJRMFFzU1VGQlNTeGhRVUZoTEVWQlFVVTdiMEpCUTJZc1RVRkJUU3hWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzI5Q1FVTjJSQ3hOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEZOQlFWTXNSVUZCUlN4RFFVRkRMR1ZCUVdVc1EwRkJReXhoUVVGaExFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdiMEpCUTNoRkxGVkJRVlVzUTBGQlF5eFhRVUZYTEVOQlFWa3NSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dHBRa0ZETVVRN1lVRkRTanRSUVVOTUxFTkJRVU03VVVGUlV5eHBRa0ZCYVVJc1MwRkJWeXhEUVVGRE8xRkJVemRDTEc5Q1FVRnZRaXhMUVVGWExFTkJRVU03VVVGVGFFTXNaVUZCWlN4TFFVRlhMRU5CUVVNN1VVRlJNMElzWVVGQllTeExRVUZYTEVOQlFVTTdVVUZSZWtJc1owSkJRV2RDTEV0QlFWY3NRMEZCUXp0TFFVTjZRenRKUVRGSlpUdFJRVUZZTEhGQ1FVRlJMRVZCUVVVN096QkVRVUZwUkR0SlFWVm9SRHRSUVVGWUxIRkNRVUZSTEVWQlFVVTdPM2xFUVVGdFJqdEpRVmRzUmp0UlFVRllMSEZDUVVGUkxFVkJRVVU3T0VSQlFUSkNMR05CUVdNc2IwSkJRV1FzWTBGQll6dDVSRUZCVFR0SlFWTTVRenRSUVVGWUxIRkNRVUZSTEVWQlFVVTdPenRwUkVGSFZqdEpRVEpIVEN4UFFVRlBMR0ZCUVdFc1EwRkJRenRCUVVONlFpeERRVUZETzBGQmRFeEVMRzlFUVhOTVF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEJhc2VDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuICAgIGNvbnN0cnVjdGVkQ2FsbGJhY2soKSB7IH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHsgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkgeyB9XG4gICAgYWRvcHRlZENhbGxiYWNrKCkgeyB9XG59XG5leHBvcnRzLkJhc2VDb250cm9sbGVyID0gQmFzZUNvbnRyb2xsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRbUZ6WlVOdmJuUnliMnhzWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyTnNhV1Z1ZEM5MGN5OXNhV0l2UW1GelpVTnZiblJ5YjJ4c1pYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGUFFTeE5RVUZoTEdOQlFXTTdTVUZGZGtJc1owSkJRV2RDTEVOQlFVTTdTVUZUVUN4dFFrRkJiVUlzUzBGQlN5eERRVUZETzBsQlVYcENMR2xDUVVGcFFpeExRVUZMTEVOQlFVTTdTVUZUZGtJc2IwSkJRVzlDTEV0QlFVc3NRMEZCUXp0SlFWTXhRaXhsUVVGbExFdEJRVXNzUTBGQlF6dERRVU5zUXp0QlFYUkRSQ3gzUTBGelEwTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBsb2Rhc2hfMSA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5jb25zdCBMb2dnZXJfMSA9IHJlcXVpcmUoXCJ+Y2xpZW50L2xpYi9Mb2dnZXJcIik7XG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyXzEuTG9nZ2VyKCk7XG5mdW5jdGlvbiBCYXNlUm91dGVGYWN0b3J5KFJvdXRlVHlwZSkge1xuICAgIGNsYXNzIEJhc2VSb3V0ZSBleHRlbmRzIFJvdXRlVHlwZSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMuaXNDbGllbnRSb3V0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHJvdXRlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlcyA9IHt9O1xuICAgICAgICAgICAgZm9yIChjb25zdCByb3V0ZSBvZiB0aGlzLnJvdXRlcykge1xuICAgICAgICAgICAgICAgIHJvdXRlc1tgJHt0aGlzLnJvdXRlck5hbWVTcGFjZX0vJHtyb3V0ZX1gLnJlcGxhY2UoXCIvL1wiLCBcIi9cIildID0gdGhpcy5oYW5kbGVHZXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3V0ZXM7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMocGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VwZXIudGVtcGxhdGVQYXJhbXMocGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBoYW5kbGVHZXQocGFyYW1zKSB7XG4gICAgICAgICAgICBsb2dnZXIubG9nKGxvZGFzaF8xLm1lcmdlKGF3YWl0IHRoaXMudGVtcGxhdGVQYXJhbXNGcm9tU2VydmVyKCksIGF3YWl0IHRoaXMudGVtcGxhdGVQYXJhbXMocGFyYW1zKSkpO1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zRnJvbVNlcnZlcigpIHtcbiAgICAgICAgICAgIGxldCB1cmxUb0Fza0ZvciA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICAgICAgaWYgKCF1cmxUb0Fza0ZvcilcbiAgICAgICAgICAgICAgICB1cmxUb0Fza0ZvciA9IGAvYDtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdYLUdhbWUtQXMtSlNPTic6ICd0cnVlJyB9KTtcbiAgICAgICAgICAgIHJldHVybiAoYXdhaXQgZmV0Y2godXJsVG9Bc2tGb3IsIHsgaGVhZGVycyB9KSkuanNvbigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBCYXNlUm91dGU7XG59XG5leHBvcnRzLkJhc2VSb3V0ZUZhY3RvcnkgPSBCYXNlUm91dGVGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUW1GelpWSnZkWFJsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5amJHbGxiblF2ZEhNdmJHbGlMMEpoYzJWU2IzVjBaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVTkJMRzFEUVVFclFqdEJRVU12UWl3clEwRkJORU03UVVGRk5VTXNUVUZCVFN4TlFVRk5MRWRCUVVjc1NVRkJTU3hsUVVGTkxFVkJRVVVzUTBGQlF6dEJRVlUxUWl4VFFVRm5RaXhuUWtGQlowSXNRMEZCT0VNc1UwRkJaMEk3U1VGVE1VWXNUVUZCWlN4VFFVRlZMRk5CUVZNc1UwRkJPRU03VVVGQmFFWTdPMWxCVVc5Q0xHdENRVUZoTEVkQlFWa3NTVUZCU1N4RFFVRkRPMUZCYzBSc1JDeERRVUZETzFGQk9VTkhMRWxCUVZjc1RVRkJUVHRaUVVOaUxFMUJRVTBzVFVGQlRTeEhRVUZSTEVWQlFVVXNRMEZCUXp0WlFVTjJRaXhMUVVGTExFMUJRVTBzUzBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVN1owSkJRemRDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhsUVVGbExFbEJRVWtzUzBGQlN5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJGQlF6ZEdPMWxCUTBRc1QwRkJUeXhOUVVGTkxFTkJRVU03VVVGRGJFSXNRMEZCUXp0UlFWZFRMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU1zVFVGQmMwSTdXVUZEYWtRc1QwRkJUeXhMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTNoRExFTkJRVU03VVVGVFV5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVhOQ08xbEJRelZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1kwRkJTeXhEUVVGRExFMUJRVTBzU1VGQlNTeERRVUZETEhkQ1FVRjNRaXhGUVVGRkxFVkJRVVVzVFVGQlRTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5vUnl4RFFVRkRPMUZCVlU4c1MwRkJTeXhEUVVGRExIZENRVUYzUWp0WlFVTnNReXhKUVVGSkxGZEJRVmNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRPMWxCUTNCRExFbEJRVWtzUTBGQlF5eFhRVUZYTzJkQ1FVRkZMRmRCUVZjc1IwRkJSeXhIUVVGSExFTkJRVU03V1VGRGNFTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1NVRkJTU3hQUVVGUExFTkJRVU1zUlVGQlJTeG5Ra0ZCWjBJc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6RkVMRTlCUVU4c1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eFhRVUZYTEVWQlFVVXNSVUZCUlN4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZETVVRc1EwRkJRenRMUVVOS08wbEJSVVFzVDBGQlR5eFRRVUZUTEVOQlFVTTdRVUZEY2tJc1EwRkJRenRCUVRGRlJDdzBRMEV3UlVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJET0NvbmZpZ01hbmFnZXJfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Db25maWdNYW5hZ2VyXCIpO1xuY2xhc3MgQ29uZmlnTWFuYWdlciBleHRlbmRzIEJET0NvbmZpZ01hbmFnZXJfMS5CRE9Db25maWdNYW5hZ2VyIHtcbiAgICBzZXQoX2NvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIGxvYWQoX2NvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIGdldENhY2hlKF9jb25maWcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgICBzZXRDYWNoZShfY29uZmlnLCBfdmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29uZmlnTWFuYWdlciA9IENvbmZpZ01hbmFnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMjl1Wm1sblRXRnVZV2RsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwyeHBZaTlEYjI1bWFXZE5ZVzVoWjJWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc1owVkJRVFpFTzBGQlR6ZEVMRTFCUVdFc1lVRkJZeXhUUVVGUkxHMURRVUZuUWp0SlFWTjRReXhIUVVGSExFTkJRVU1zVDBGQlpUdFJRVU4wUWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExIbENRVUY1UWl4RFFVRkRMRU5CUVVNN1NVRkRMME1zUTBGQlF6dEpRVlZUTEVsQlFVa3NRMEZCUXl4UFFVRmxPMUZCUXpGQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU1zUTBGQlF6dEpRVU12UXl4RFFVRkRPMGxCVlZNc1VVRkJVU3hEUVVGRExFOUJRV1U3VVVGRE9VSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4RFFVRkRPMGxCUXk5RExFTkJRVU03U1VGWFV5eFJRVUZSTEVOQlFVTXNUMEZCWlN4RlFVRkZMRTFCUVZjN1VVRkRNME1zVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eERRVUZETzBsQlF5OURMRU5CUVVNN1EwRkRTanRCUVdwRVJDeHpRMEZwUkVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfYTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5cInVzZSBzdHJpY3RcIjtcbmNvbnN0IEJET0xvZ2dlcl8xID0gcmVxdWlyZShcIn5iZG8vbGliL0JET0xvZ2dlclwiKTtcbmNvbnN0IGRlY29yYXRvcnNfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL2RlY29yYXRvcnNcIik7XG5sZXQgTG9nZ2VyID0gY2xhc3MgTG9nZ2VyIGV4dGVuZHMgQkRPTG9nZ2VyXzEuQkRPTG9nZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICAgICAgc3VwZXIocGFyYW1zKTtcbiAgICAgICAgdGhpcy5sb2dMZXZlbENvbG9ycyA9IHtcbiAgICAgICAgICAgIGxvZzogJ2NvbG9yOiBncmF5OyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgICAgICAgICAgZGVidWc6ICdjb2xvcjogZ3JlZW47IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICBpbmZvOiAnY29sb3I6ICMwMDgwNkI7IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICB3YXJuOiAnY29sb3I6ICM4MDgwMDA7IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICBlcnJvcjogJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkOydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0SGVhZGVyKGxvZ0xldmVsLCBwcmludEVudiA9ICdjb25zb2xlJykge1xuICAgICAgICBjb25zdCBwcm9jSW5mbyA9IHRoaXMuZ2V0UHJvY0luZm8oKTtcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lKCk7XG4gICAgICAgIGNvbnN0IHVwcGVyTG9nTGV2ZWwgPSBsb2dMZXZlbC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2dQb2ludCA9IHRoaXMuZ2V0TG9nUG9pbnQoKTtcbiAgICAgICAgY29uc3QgcmVzZXRTdHlsZSA9ICdjb2xvcjogYmxhY2s7IGZvbnQtd2VpZ2h0OiBub3JtYWwnO1xuICAgICAgICBjb25zdCBtYWdlbnRhID0gJ2NvbG9yOiAjODAwMDgwOyBmb250LXdlaWdodDogbm9ybWFsJztcbiAgICAgICAgY29uc3QgY3lhbiA9ICdjb2xvcjogIzAwODA2QjsgZm9udC13ZWlnaHQ6IG5vcm1hbCc7XG4gICAgICAgIGlmIChwcmludEVudiA9PT0gJ2NvbnNvbGUnKSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRMb2dMZXZlbCA9IHRoaXMubG9nTGV2ZWxDb2xvcnNbbG9nTGV2ZWxdO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkTG9nUG9pbnQgPSBtYWdlbnRhO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkVGltZSA9IGN5YW47XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRQcm9jSW5mbyA9IG1hZ2VudGE7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIGAlY1slYyR7dXBwZXJMb2dMZXZlbH0gJWMtICVjJHtwcm9jSW5mb30gJWMtICVjJHtjdXJyZW50VGltZX0gJWNhdCAlYyR7bG9nUG9pbnR9JWNdYCxcbiAgICAgICAgICAgICAgICByZXNldFN0eWxlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZExvZ0xldmVsLFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkUHJvY0luZm8sXG4gICAgICAgICAgICAgICAgcmVzZXRTdHlsZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRUaW1lLFxuICAgICAgICAgICAgICAgIHJlc2V0U3R5bGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkTG9nUG9pbnQsXG4gICAgICAgICAgICAgICAgcmVzZXRTdHlsZVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYFske3VwcGVyTG9nTGV2ZWx9IC0gJHtwcm9jSW5mb30gLSAke2N1cnJlbnRUaW1lfSAtICR7bG9nUG9pbnR9XWA7XG4gICAgfVxuICAgIHdyaXRlVG9GaWxlKF9sb2dMZXZlbCwgX21lc3NhZ2UpIHtcbiAgICB9XG59O1xuTG9nZ2VyID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgQ29uc3RQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIgJiYgQ29uc3RQYXJhbXMpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdF0pXG5dLCBMb2dnZXIpO1xuZXhwb3J0cy5Mb2dnZXIgPSBMb2dnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lURzluWjJWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOWpiR2xsYm5RdmRITXZiR2xpTDB4dloyZGxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTEd0RVFVRTJSVHRCUVVNM1JTeHpSRUZCZDBRN1FVRlZlRVFzU1VGQllTeE5RVUZOTEVkQlFXNUNMRTFCUVdFc1RVRkJUeXhUUVVGUkxIRkNRVUZUTzBsQlpXcERMRmxCUVZrc1RVRkJORUk3VVVGRGNFTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJWRllzYlVKQlFXTXNSMEZCUnp0WlFVTnlRaXhIUVVGSExFVkJRVVVzYVVOQlFXbERPMWxCUTNSRExFdEJRVXNzUlVGQlJTeHJRMEZCYTBNN1dVRkRla01zU1VGQlNTeEZRVUZGTEc5RFFVRnZRenRaUVVNeFF5eEpRVUZKTEVWQlFVVXNiME5CUVc5RE8xbEJRekZETEV0QlFVc3NSVUZCUlN4blEwRkJaME03VTBGRE1VTXNRMEZCUXp0SlFVbEdMRU5CUVVNN1NVRlhVeXhUUVVGVExFTkJRVU1zVVVGQmJVSXNSVUZCUlN4WFFVRTRRaXhUUVVGVE8xRkJRelZGTEUxQlFVMHNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dFJRVU53UXl4TlFVRk5MRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdVVUZEZGtNc1RVRkJUU3hoUVVGaExFZEJRVWNzVVVGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUXpkRExFMUJRVTBzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRSUVVOd1F5eE5RVUZOTEZWQlFWVXNSMEZCUnl4dFEwRkJiVU1zUTBGQlF6dFJRVU4yUkN4TlFVRk5MRTlCUVU4c1IwRkJSeXh4UTBGQmNVTXNRMEZCUXp0UlFVTjBSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eHhRMEZCY1VNc1EwRkJRenRSUVVOdVJDeEpRVUZKTEZGQlFWRXNTMEZCU3l4VFFVRlRMRVZCUVVVN1dVRkRlRUlzVFVGQlRTeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMWxCUTNoRUxFMUJRVTBzYVVKQlFXbENMRWRCUVVjc1QwRkJUeXhEUVVGRE8xbEJRMnhETEUxQlFVMHNZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVNelFpeE5RVUZOTEdsQ1FVRnBRaXhIUVVGSExFOUJRVThzUTBGQlF6dFpRVU5zUXl4UFFVRlBPMmRDUVVOSUxGRkJRVkVzWVVGQllTeFZRVUZWTEZGQlFWRXNWVUZCVlN4WFFVRlhMRmRCUVZjc1VVRkJVU3hMUVVGTE8yZENRVU53Uml4VlFVRlZPMmRDUVVOV0xHbENRVUZwUWp0blFrRkRha0lzVlVGQlZUdG5Ra0ZEVml4cFFrRkJhVUk3WjBKQlEycENMRlZCUVZVN1owSkJRMVlzWVVGQllUdG5Ra0ZEWWl4VlFVRlZPMmRDUVVOV0xHbENRVUZwUWp0blFrRkRha0lzVlVGQlZUdGhRVU5pTEVOQlFVTTdVMEZEVER0UlFVTkVMRTlCUVU4c1NVRkJTU3hoUVVGaExFMUJRVTBzVVVGQlVTeE5RVUZOTEZkQlFWY3NUVUZCVFN4UlFVRlJMRWRCUVVjc1EwRkJRenRKUVVNM1JTeERRVUZETzBsQlZWTXNWMEZCVnl4RFFVRkRMRk5CUVc5Q0xFVkJRVVVzVVVGQllUdEpRVVY2UkN4RFFVRkRPME5CUTBvc1EwRkJRVHRCUVhCRldTeE5RVUZOTzBsQlJHeENMRFJDUVVGbExFVkJRVVU3YVVWQlowSlBMRmRCUVZjc2IwSkJRVmdzVjBGQlZ6dEhRV1oyUWl4TlFVRk5MRU5CYjBWc1FqdEJRWEJGV1N4M1FrRkJUU0o5IiwidmFyIG1hcCA9IHtcblx0XCIuL0NvbmZpZy50c1wiOiBcIi4vc291cmNlL2FwcC9jbGllbnQvdHMvcm91dGVzL0NvbmZpZy50c1wiLFxuXHRcIi4vR2FtZUxvYmJ5LnRzXCI6IFwiLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvR2FtZUxvYmJ5LnRzXCIsXG5cdFwiLi9Ib21lLnRzXCI6IFwiLi9zb3VyY2UvYXBwL2NsaWVudC90cy9yb3V0ZXMvSG9tZS50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NvdXJjZS9hcHAvY2xpZW50L3RzL3JvdXRlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC50cyRcIjsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJhc2VSb3V0ZV8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0Jhc2VSb3V0ZVwiKTtcbmNvbnN0IEJET0NvbmZpZ18xID0gcmVxdWlyZShcIn5iZG8vcm91dGVzL0JET0NvbmZpZ1wiKTtcbmNsYXNzIENvbmZpZyBleHRlbmRzIEJhc2VSb3V0ZV8xLkJhc2VSb3V0ZUZhY3RvcnkoQkRPQ29uZmlnXzEuQkRPQ29uZmlnKSB7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBDb25maWc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMjl1Wm1sbkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOWpiR2xsYm5RdmRITXZjbTkxZEdWekwwTnZibVpwWnk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTEhGRVFVRjVSRHRCUVVONlJDeHhSRUZCYTBRN1FVRlRiRVFzVFVGQmNVSXNUVUZCVHl4VFFVRlJMRFJDUVVGblFpeERRVUZETEhGQ1FVRlRMRU5CUVVNN1EwRkJTVHRCUVVGdVJTeDVRa0ZCYlVVaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJhc2VSb3V0ZV8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0Jhc2VSb3V0ZVwiKTtcbmNvbnN0IEJET0dhbWVMb2JieV8xID0gcmVxdWlyZShcIn5iZG8vcm91dGVzL0JET0dhbWVMb2JieVwiKTtcbmNsYXNzIEdhbWVMb2JieSBleHRlbmRzIEJhc2VSb3V0ZV8xLkJhc2VSb3V0ZUZhY3RvcnkoQkRPR2FtZUxvYmJ5XzEuQkRPR2FtZUxvYmJ5KSB7XG4gICAgYXN5bmMgdGVtcGxhdGVQYXJhbXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZXN0OiAnbG9sJ1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEdhbWVMb2JieTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVIyRnRaVXh2WW1KNUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMyOTFjbU5sTDJGd2NDOWpiR2xsYm5RdmRITXZjbTkxZEdWekwwZGhiV1ZNYjJKaWVTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxIRkVRVUY1UkR0QlFVTjZSQ3d5UkVGQmQwUTdRVUZUZUVRc1RVRkJjVUlzVTBGQlZTeFRRVUZSTERSQ1FVRm5RaXhEUVVGRExESkNRVUZaTEVOQlFVTTdTVUZWZGtRc1MwRkJTeXhEUVVGRExHTkJRV003VVVGRE1VSXNUMEZCVHp0WlFVTklMRWxCUVVrc1JVRkJSU3hMUVVGTE8xTkJRMlFzUTBGQlF6dEpRVU5PTEVOQlFVTTdRMEZEU2p0QlFXWkVMRFJDUVdWREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJhc2VSb3V0ZV8xID0gcmVxdWlyZShcIn5jbGllbnQvbGliL0Jhc2VSb3V0ZVwiKTtcbmNvbnN0IEJET0hvbWVfMSA9IHJlcXVpcmUoXCJ+YmRvL3JvdXRlcy9CRE9Ib21lXCIpO1xuY2xhc3MgSG9tZSBleHRlbmRzIEJhc2VSb3V0ZV8xLkJhc2VSb3V0ZUZhY3RvcnkoQkRPSG9tZV8xLkJET0hvbWUpIHtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEhvbWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lTRzl0WlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdlkyeHBaVzUwTDNSekwzSnZkWFJsY3k5SWIyMWxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNjVVJCUVhsRU8wRkJRM3BFTEdsRVFVRTRRenRCUVZNNVF5eE5RVUZ4UWl4SlFVRkxMRk5CUVZFc05FSkJRV2RDTEVOQlFVTXNhVUpCUVU4c1EwRkJRenREUVVGSk8wRkJRUzlFTEhWQ1FVRXJSQ0o5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBtcyA9IHJlcXVpcmUoXCJtc1wiKTtcbmNvbnN0IEJET01hcENhY2hlXzEgPSByZXF1aXJlKFwifmJkby9saWIvQkRPTWFwQ2FjaGVcIik7XG5jbGFzcyBCRE9Db25maWdNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBCRE9NYXBDYWNoZV8xLkJET01hcENhY2hlKCk7XG4gICAgfVxuICAgIGFzeW5jIGdldChjb25maWcpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gYXdhaXQgdGhpcy5nZXRDYWNoZShjb25maWcpO1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGF3YWl0IHRoaXMubG9hZChjb25maWcpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRDYWNoZShjb25maWcsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKTtcbiAgICB9XG4gICAgZ2V0Q2FjaGUoY29uZmlnKSB7XG4gICAgICAgIGNvbnN0IGZyb21Mb2NhbENhY2hlID0gdGhpcy5jYWNoZS5nZXQoY29uZmlnKTtcbiAgICAgICAgaWYgKGZyb21Mb2NhbENhY2hlKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbUxvY2FsQ2FjaGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGFzeW5jIHNldENhY2hlKGNvbmZpZywgdmFsdWUpIHtcbiAgICAgICAgbGV0IGNvbmYgPSB0aGlzLmNhY2hlLmdldCgnX19Db25maWdNYW5hZ2VyQ2FjaGVUaW1lb3V0X18nKTtcbiAgICAgICAgaWYgKCF0aGlzLmNhY2hlLmhhcygnX19Db25maWdNYW5hZ2VyQ2FjaGVUaW1lb3V0X18nKSkge1xuICAgICAgICAgICAgY29uZiA9IChhd2FpdCB0aGlzLmxvYWQoJ2NvbmZpZycpKS50aW1lb3V0cy5jb25maWdDYWNoZTtcbiAgICAgICAgICAgIGlmIChjb25mKVxuICAgICAgICAgICAgICAgIGNvbmYgPSBtcyhjb25mKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUuc2V0KCdfX0NvbmZpZ01hbmFnZXJDYWNoZVRpbWVvdXRfXycsIGNvbmYpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGUuc2V0KGNvbmZpZywgdmFsdWUsIGNvbmYpO1xuICAgIH1cbn1cbmV4cG9ydHMuQkRPQ29uZmlnTWFuYWdlciA9IEJET0NvbmZpZ01hbmFnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQUTI5dVptbG5UV0Z1WVdkbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZiR2xpTDBKRVQwTnZibVpwWjAxaGJtRm5aWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3g1UWtGQk1FSTdRVUZETVVJc2MwUkJRVzFFTzBGQmJVSnVSQ3hOUVVGelFpeG5Ra0ZCWjBJN1NVRkJkRU03VVVGVll5eFZRVUZMTEVkQlFUWkNMRWxCUVVrc2VVSkJRVmNzUlVGQlJTeERRVUZETzBsQmQwVnNSU3hEUVVGRE8wbEJMMFJWTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJZenRSUVVNelFpeEpRVUZKTEV0QlFVc3NSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZEZUVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJUdFpRVU5TTEV0QlFVc3NSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZEYUVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRUUVVOMFF6dFJRVU5FTEU5QlFVOHNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU5zUXl4RFFVRkRPMGxCT0VKVExGRkJRVkVzUTBGQlF5eE5RVUZqTzFGQlF6ZENMRTFCUVUwc1kwRkJZeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRemxETEVsQlFVa3NZMEZCWXl4RlFVRkZPMWxCUTJoQ0xFOUJRVThzWTBGQll5eERRVUZETzFOQlEzcENPMUZCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGRGFFSXNRMEZCUXp0SlFWZFRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQll5eEZRVUZGTEV0QlFWVTdVVUZETDBNc1NVRkJTU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc0swSkJRU3RDTEVOQlFVTXNRMEZCUXp0UlFVTXpSQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc0swSkJRU3RDTEVOQlFVTXNSVUZCUlR0WlFVTnNSQ3hKUVVGSkxFZEJRVWNzUTBGQlF5eE5RVUZOTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRPMWxCUTNoRUxFbEJRVWtzU1VGQlNUdG5Ra0ZCUlN4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlF6RkNMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEN0Q1FVRXJRaXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFOQlEzcEVPMUZCUTBRc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RlFVRkZMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU40UXl4RFFVRkRPME5CUTBvN1FVRnNSa1FzTkVOQmEwWkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuY29uc3QgcGF0aF8xID0gcmVxdWlyZShcInBhdGhcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwifmJkby91dGlscy91dGlsXCIpO1xuY2xhc3MgQkRPTG9nZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihfcGFyYW1zKSB7XG4gICAgICAgIHRoaXMubG9nRmlsZSA9ICdkZWZhdWx0LmxvZyc7XG4gICAgICAgIHRoaXMucHJldmVudENvbnNvbGVQcmludCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByZXZlbnRGaWxlUHJpbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2dMZXZlbCA9ICdkZWJ1Zyc7XG4gICAgICAgIHRoaXMucHJvdG90eXBlTmFtZXMgPSB1dGlsXzEuZ2V0UHJvdG90eXBlTmFtZXNSZWN1cnNpdmUodGhpcyk7XG4gICAgfVxuICAgIGxvZyhtZXNzYWdlLCBsb2dsZXZlbCA9ICdsb2cnLCAuLi5hcmdzKSB7XG4gICAgICAgIGlmIChsb2dsZXZlbCAhPT0gJ2xvZycgJiYgIXRoaXMuaXNBbGxvd2VkKGxvZ2xldmVsKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLnByZXZlbnRDb25zb2xlUHJpbnQgfHwgWydsb2cnLCAnZXJyb3InXS5pbmNsdWRlcyhsb2dsZXZlbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0SGVhZGVyKGxvZ2xldmVsKTtcbiAgICAgICAgICAgIGxldCBuZXdBcmdzID0gW107XG4gICAgICAgICAgICBpZiAoaGVhZGVyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBuZXdBcmdzID0gbmV3QXJncy5jb25jYXQoaGVhZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBuZXdBcmdzLnB1c2goaGVhZGVyKTtcbiAgICAgICAgICAgIG5ld0FyZ3MucHVzaChtZXNzYWdlKTtcbiAgICAgICAgICAgIG5ld0FyZ3MgPSBuZXdBcmdzLmNvbmNhdChhcmdzKTtcbiAgICAgICAgICAgIGNvbnNvbGVbbG9nbGV2ZWxdLmFwcGx5KHRoaXMsIG5ld0FyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGFyZ3MpO1xuICAgICAgICBpZiAoIXRoaXMucHJldmVudEZpbGVQcmludCB8fCBsb2dsZXZlbCA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy53cml0ZVRvRmlsZShsb2dsZXZlbCwgbWVzc2FnZSArIHBhcnNlZFN0cmluZy5zdWJzdHIoMSwgcGFyc2VkU3RyaW5nLmxlbmd0aCAtIDIpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWJ1ZyhtZXNzYWdlLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGFwcGx5ID0gW21lc3NhZ2UsICdkZWJ1ZyddLmNvbmNhdChhcmdzKTtcbiAgICAgICAgdGhpcy5sb2cuYXBwbHkodGhpcywgYXBwbHkpO1xuICAgIH1cbiAgICBpbmZvKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgYXBwbHkgPSBbbWVzc2FnZSwgJ2luZm8nXS5jb25jYXQoYXJncyk7XG4gICAgICAgIHRoaXMubG9nLmFwcGx5KHRoaXMsIGFwcGx5KTtcbiAgICB9XG4gICAgd2FybihtZXNzYWdlLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGFwcGx5ID0gW21lc3NhZ2UsICd3YXJuJ10uY29uY2F0KGFyZ3MpO1xuICAgICAgICB0aGlzLmxvZy5hcHBseSh0aGlzLCBhcHBseSk7XG4gICAgfVxuICAgIGVycm9yKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgYXBwbHkgPSBbbWVzc2FnZSwgJ2Vycm9yJ10uY29uY2F0KGFyZ3MpO1xuICAgICAgICB0aGlzLmxvZy5hcHBseSh0aGlzLCBhcHBseSk7XG4gICAgfVxuICAgIGdldFByb2NJbmZvKCkge1xuICAgICAgICByZXR1cm4gYCR7Z2xvYmFsLnByb2Nlc3MuZW52Lm5hbWUgfHwgJyd9ICR7Z2xvYmFsLnByb2Nlc3MuZW52LnBtX2lkIHx8ICcnfSAke2dsb2JhbC5wcm9jZXNzLnBpZH1gO1xuICAgIH1cbiAgICBpc0FsbG93ZWQobG9nTGV2ZWwpIHtcbiAgICAgICAgY29uc3QgbG9nTGV2ZWxPcmRlciA9IFsnbG9nJywgJ2RlYnVnJywgJ2luZm8nLCAnd2FybicsICdlcnJvciddO1xuICAgICAgICByZXR1cm4gbG9nTGV2ZWxPcmRlci5pbmRleE9mKGxvZ0xldmVsKSA+PSBsb2dMZXZlbE9yZGVyLmluZGV4T2YodGhpcy5sb2dMZXZlbCk7XG4gICAgfVxuICAgIGN1cnJlbnRUaW1lKCkge1xuICAgICAgICByZXR1cm4gbW9tZW50KCkuZm9ybWF0KCdERC5NTS5ZWVlZIEhIOm1tOnNzJyk7XG4gICAgfVxuICAgIGdldExvZ1BvaW50KCkge1xuICAgICAgICBjb25zdCBzdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgbGV0IGNhbGxwb2ludDtcbiAgICAgICAgZm9yIChjb25zdCBbaW5kZXgsIHN0YWNrcGFydF0gb2Ygc3RhY2suZW50cmllcygpKSB7XG4gICAgICAgICAgICBpZiAoIWluZGV4KVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCF1dGlsXzEuaW5jbHVkZXNNZW1iZXJPZkxpc3Qoc3RhY2twYXJ0LCB0aGlzLnByb3RvdHlwZU5hbWVzLCAnLnRzJykpIHtcbiAgICAgICAgICAgICAgICBjYWxscG9pbnQgPSBzdGFja3BhcnQuc3BsaXQocGF0aF8xLnNlcCkucG9wKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxwb2ludCkge1xuICAgICAgICAgICAgY2FsbHBvaW50ID0gY2FsbHBvaW50LnJlcGxhY2UoJyknLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxscG9pbnQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FsbHBvaW50O1xuICAgIH1cbn1cbmV4cG9ydHMuQkRPTG9nZ2VyID0gQkRPTG9nZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFRHOW5aMlZ5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5c2FXSXZRa1JQVEc5bloyVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlEwRXNhVU5CUVdsRE8wRkJRMnBETEN0Q1FVRXlRanRCUVVNelFpd3dRMEZCYlVZN1FVRlhia1lzVFVGQmMwSXNVMEZCVXp0SlFXdEVNMElzV1VGQldTeFBRVUZuUXp0UlFUTkRja01zV1VGQlR5eEhRVUZaTEdGQlFXRXNRMEZCUXp0UlFWRnFReXgzUWtGQmJVSXNSMEZCWVN4TFFVRkxMRU5CUVVNN1VVRlJkRU1zY1VKQlFXZENMRWRCUVdFc1MwRkJTeXhEUVVGRE8xRkJaVzVETEdGQlFWRXNSMEZCWlN4UFFVRlBMRU5CUVVNN1VVRlZia0lzYlVKQlFXTXNSMEZCWVN4cFEwRkJNRUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVVXZRaXhEUVVGRE8wbEJWekZETEVkQlFVY3NRMEZCUXl4UFFVRlpMRVZCUVVVc1YwRkJjMElzUzBGQlN5eEZRVUZGTEVkQlFVY3NTVUZCVnp0UlFVTm9SU3hKUVVGSkxGRkJRVkVzUzBGQlN5eExRVUZMTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF6dFpRVUZGTEU5QlFVODdVVUZETlVRc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVU3V1VGRGJFVXNUVUZCVFN4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0WlFVTjRReXhKUVVGSkxFOUJRVThzUjBGQllTeEZRVUZGTEVOQlFVTTdXVUZETTBJc1NVRkJTU3hOUVVGTkxGbEJRVmtzUzBGQlN5eEZRVUZGTzJkQ1FVTjZRaXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRoUVVOd1F6czdaMEpCUVUwc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0WlFVTTFRaXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMWxCUTNSQ0xFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMlFzVDBGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdVMEZETlVRN1VVRkRSQ3hOUVVGTkxGbEJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRekZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVsQlFVa3NVVUZCVVN4TFFVRkxMRTlCUVU4c1JVRkJSVHRaUVVOb1JDeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hQUVVGUExFZEJRVWNzV1VGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1dVRkJXU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTNwR08wbEJRMHdzUTBGQlF6dEpRVkZOTEV0QlFVc3NRMEZCUXl4UFFVRlpMRVZCUVVVc1IwRkJSeXhKUVVGVE8xRkJRMjVETEUxQlFVMHNTMEZCU3l4SFFVRkhMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNNVF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFVkJRVzlDTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJ4RUxFTkJRVU03U1VGUlRTeEpRVUZKTEVOQlFVTXNUMEZCV1N4RlFVRkZMRWRCUVVjc1NVRkJVenRSUVVOc1F5eE5RVUZOTEV0QlFVc3NSMEZCUnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkROME1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGdlFpeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnNSQ3hEUVVGRE8wbEJVVTBzU1VGQlNTeERRVUZETEU5QlFWa3NSVUZCUlN4SFFVRkhMRWxCUVZNN1VVRkRiRU1zVFVGQlRTeExRVUZMTEVkQlFVY3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUXpkRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJiMElzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYkVRc1EwRkJRenRKUVZGTkxFdEJRVXNzUTBGQlF5eFBRVUZaTEVWQlFVVXNSMEZCUnl4SlFVRlRPMUZCUTI1RExFMUJRVTBzUzBGQlN5eEhRVUZITEVOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTTVReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVc5Q0xFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEyeEVMRU5CUVVNN1NVRlRVeXhYUVVGWE8xRkJRMnBDTEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVsQlFVa3NSVUZCUlN4SlFVRkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NTVUZCU1N4RlFVRkZMRWxCUVVrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0SlFVTjBSeXhEUVVGRE8wbEJLMEpUTEZOQlFWTXNRMEZCUXl4UlFVRnRRanRSUVVOdVF5eE5RVUZOTEdGQlFXRXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZGTEUxQlFVMHNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVOb1JTeFBRVUZQTEdGQlFXRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzWVVGQllTeERRVUZETEU5QlFVOHNRMEZCVXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03U1VGRE0wWXNRMEZCUXp0SlFWTlRMRmRCUVZjN1VVRkRha0lzVDBGQlR5eE5RVUZOTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNRMEZCUXp0SlFVTnNSQ3hEUVVGRE8wbEJVMU1zVjBGQlZ6dFJRVU5xUWl4TlFVRk5MRXRCUVVzc1IwRkJXU3hKUVVGSkxFdEJRVXNzUlVGQlJTeERRVUZETEV0QlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRGRFUXNTVUZCU1N4VFFVRlRMRU5CUVVNN1VVRkRaQ3hMUVVGTExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeEZRVUZGTzFsQlF6bERMRWxCUVVrc1EwRkJReXhMUVVGTE8yZENRVUZGTEZOQlFWTTdXVUZEY2tJc1NVRkJTU3hEUVVGRExESkNRVUZ2UWl4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zWTBGQll5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RlFVRkZPMmRDUVVNNVJDeFRRVUZUTEVkQlFVY3NVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhWUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0blFrRkRka01zVFVGQlRUdGhRVU5VTzFOQlEwbzdVVUZEUkN4SlFVRkpMRk5CUVZNc1JVRkJSVHRaUVVOWUxGTkJRVk1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU14UXp0aFFVRk5PMWxCUTBnc1UwRkJVeXhIUVVGSExFVkJRVVVzUTBGQlF6dFRRVU5zUWp0UlFVTkVMRTlCUVU4c1UwRkJVeXhEUVVGRE8wbEJRM0pDTEVOQlFVTTdRMEZEU2p0QlFUTk5SQ3c0UWtFeVRVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEsIGR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuZXhwaXJlID0gSW5maW5pdHk7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuZXhwaXJlID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoZHVyYXRpb24gfHwgSW5maW5pdHkpO1xuICAgIH1cbiAgICBnZXQgZXhwaXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhwaXJlID8gdGhpcy5leHBpcmUgPCBuZXcgRGF0ZSgpLmdldFRpbWUoKSA6IGZhbHNlO1xuICAgIH1cbn1cbmNsYXNzIEJET01hcENhY2hlIGV4dGVuZHMgTWFwIHtcbiAgICBzZXQoa2V5LCB2YWx1ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gbmV3IEVudGl0eSh2YWx1ZSwgZHVyYXRpb24pO1xuICAgICAgICByZXR1cm4gc3VwZXIuc2V0KGtleSwgZW50aXR5KTtcbiAgICB9XG4gICAgZ2V0KGtleSkge1xuICAgICAgICBjb25zdCBlbnRpdHkgPSBzdXBlci5nZXQoa2V5KTtcbiAgICAgICAgaWYgKGVudGl0eSA9PT0gdW5kZWZpbmVkIHx8IGVudGl0eS5leHBpcmVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50aXR5LmRhdGE7XG4gICAgfVxufVxuZXhwb3J0cy5CRE9NYXBDYWNoZSA9IEJET01hcENhY2hlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFRXRndRMkZqYUdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyeHBZaTlDUkU5TllYQkRZV05vWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVXRCTEUxQlFVMHNUVUZCVFR0SlFXZENVaXhaUVVGWkxFbEJRVThzUlVGQlJTeFJRVUZwUWp0UlFVWTVRaXhYUVVGTkxFZEJRVmNzVVVGQlVTeERRVUZETzFGQlJ6bENMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEycENMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeEpRVUZKTEVWQlFVVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1IwRkJSeXhEUVVGRExGRkJRVkVzU1VGQlNTeFJRVUZSTEVOQlFVTXNRMEZCUXp0SlFVTm9SU3hEUVVGRE8wbEJVMFFzU1VGQlNTeFBRVUZQTzFGQlExQXNUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1NVRkJTU3hGUVVGRkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJRenRKUVVOd1JTeERRVUZETzBOQlEwbzdRVUZUUkN4TlFVRmhMRmRCUVd0Q0xGTkJRVkVzUjBGQmFVSTdTVUZYTjBNc1IwRkJSeXhEUVVGRExFZEJRVTBzUlVGQlJTeExRVUZSTEVWQlFVVXNVVUZCYVVJN1VVRkRNVU1zVFVGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzFGQlF6TkRMRTlCUVU4c1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRiRU1zUTBGQlF6dEpRVk5OTEVkQlFVY3NRMEZCUXl4SFFVRk5PMUZCUTJJc1RVRkJUU3hOUVVGTkxFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNNVFpeEpRVUZKTEUxQlFVMHNTMEZCU3l4VFFVRlRMRWxCUVVrc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJUdFpRVU40UXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlEycENMRTlCUVU4c1UwRkJVeXhEUVVGRE8xTkJRM0JDTzFGQlEwUXNUMEZCVHl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJRM1pDTEVOQlFVTTdRMEZEU2p0QlFTOUNSQ3hyUTBFclFrTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBCaW5kaW5nXzEgPSByZXF1aXJlKFwifmJkby9saWIvQmluZGluZ1wiKTtcbmNsYXNzIEJET01vZGVsIHtcbiAgICBnZXQgYmluZGluZ3MoKSB7XG4gICAgICAgIGNvbnN0IGJpbmRpbmdzID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImJpbmRpbmdzXCIsIHRoaXMpO1xuICAgICAgICByZXR1cm4gYmluZGluZ3MgPyBiaW5kaW5ncyA6IHt9O1xuICAgIH1cbiAgICBiaW5kKHByb3BlcnR5KSB7XG4gICAgICAgIGNvbnN0IGJpbmRpbmcgPSBuZXcgQmluZGluZ18xLkJpbmRpbmcodGhpcywgcHJvcGVydHkpO1xuICAgICAgICBpZiAoIVJlZmxlY3QuaGFzTWV0YWRhdGEoXCJiaW5kaW5nc1wiLCB0aGlzKSlcbiAgICAgICAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJiaW5kaW5nc1wiLCB7fSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IGJvdW5kTWV0YWRhdGEgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiYmluZGluZ3NcIiwgdGhpcyk7XG4gICAgICAgIGlmICghKHByb3BlcnR5IGluIGJvdW5kTWV0YWRhdGEpKVxuICAgICAgICAgICAgYm91bmRNZXRhZGF0YVtwcm9wZXJ0eV0gPSBbXTtcbiAgICAgICAgYm91bmRNZXRhZGF0YVtwcm9wZXJ0eV0ucHVzaChiaW5kaW5nKTtcbiAgICAgICAgcmV0dXJuIGJpbmRpbmc7XG4gICAgfVxufVxuZXhwb3J0cy5CRE9Nb2RlbCA9IEJET01vZGVsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUWtSUFRXOWtaV3d1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDJ4cFlpOUNSRTlOYjJSbGJDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxEaERRVUV5UXp0QlFWRXpReXhOUVVGelFpeFJRVUZSTzBsQlV6RkNMRWxCUVdNc1VVRkJVVHRSUVVOc1FpeE5RVUZOTEZGQlFWRXNSMEZCUnl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExGVkJRVlVzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTjJSQ3hQUVVGUExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03U1VGRGNFTXNRMEZCUXp0SlFWVk5MRWxCUVVrc1EwRkJLMFFzVVVGQlZ6dFJRVU5xUml4TlFVRk5MRTlCUVU4c1IwRkJSeXhKUVVGSkxHbENRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRelZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExGVkJRVlVzUlVGQlJTeEpRVUZKTEVOQlFVTTdXVUZCUlN4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExGVkJRVlVzUlVGQlJTeEZRVUZGTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRla1lzVFVGQlRTeGhRVUZoTEVkQlFXOUVMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVlVGQlZTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUXpkSExFbEJRVWtzUTBGQlF5eERRVUZETEZGQlFWRXNTVUZCU1N4aFFVRmhMRU5CUVVNN1dVRkJSU3hoUVVGaExFTkJRVk1zVVVGQlVTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTNaRkxHRkJRV0VzUTBGQlV5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRE9VTXNUMEZCVHl4UFFVRTJRaXhEUVVGRE8wbEJRM3BETEVOQlFVTTdRMEZEU2p0QlFUbENSQ3cwUWtFNFFrTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBsb2Rhc2hfMSA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5jb25zdCBlbnZpcm9ubWVudF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZW52aXJvbm1lbnRcIik7XG5jbGFzcyBCRE9Sb3V0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucm91dGVyTmFtZVNwYWNlID0gYC8ke3RoaXMuY29uc3RydWN0b3IubmFtZS50b0xvd2VyQ2FzZSgpfWA7XG4gICAgICAgIHRoaXMucm91dGVzID0gWycvJ107XG4gICAgICAgIHRoaXMudGVtcGxhdGVTdHJpbmcgPSAnPGRpdj48L2Rpdj4nO1xuICAgICAgICB0aGlzLmpzb25Pbmx5ID0gZmFsc2U7XG4gICAgfVxuICAgIHJlbmRlclRlbXBsYXRlKHRlbXBsYXRlUGFyYW1zKSB7XG4gICAgICAgIGxldCBzdHJpbmdUb1BhcnNlID0gbnVsbDtcbiAgICAgICAgaWYgKGxvZGFzaF8xLmlzU3RyaW5nKHRoaXMudGVtcGxhdGVTdHJpbmcpKSB7XG4gICAgICAgICAgICBzdHJpbmdUb1BhcnNlID0gZW52aXJvbm1lbnRfMS50ZW1wbGF0ZUVudmlyb25tZW50LnJlbmRlclN0cmluZyh0aGlzLnRlbXBsYXRlU3RyaW5nLCB0ZW1wbGF0ZVBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvZGFzaF8xLmlzT2JqZWN0KHRoaXMudGVtcGxhdGVTdHJpbmcpKSB7XG4gICAgICAgICAgICBzdHJpbmdUb1BhcnNlID0gdGhpcy50ZW1wbGF0ZVN0cmluZy5yZW5kZXIodGVtcGxhdGVQYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHJpbmdUb1BhcnNlO1xuICAgIH1cbiAgICBhc3luYyB0ZW1wbGF0ZVBhcmFtcyhfcmVxdWVzdE9yUGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG59XG5CRE9Sb3V0ZS5hdHRhY2hUb1NlcnZlcnMgPSBbJyonXTtcbmV4cG9ydHMuQkRPUm91dGUgPSBCRE9Sb3V0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFrUlBVbTkxZEdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyeHBZaTlDUkU5U2IzVjBaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVVkJMRzFEUVVFMFF6dEJRVU0xUXl4M1JFRkJOa1E3UVVGUk4wUXNUVUZCYzBJc1VVRkJVVHRKUVVFNVFqdFJRVzlDVnl4dlFrRkJaU3hIUVVGWExFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFVkJRVVVzUTBGQlF6dFJRVkZ3UlN4WFFVRk5MRWRCUVdFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRV3RDZEVJc2JVSkJRV01zUjBGQmMwSXNZVUZCWVN4RFFVRkRPMUZCVld4RUxHRkJRVkVzUjBGQldTeExRVUZMTEVOQlFVTTdTVUZ0UkhoRExFTkJRVU03U1VGNFEyRXNZMEZCWXl4RFFVRkRMR05CUVRoQ08xRkJRMjVFTEVsQlFVa3NZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVONlFpeEpRVUZKTEdsQ1FVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eEZRVUZGTzFsQlF5OUNMR0ZCUVdFc1IwRkJSeXhwUTBGQmJVSXNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUlVGQlJTeGpRVUZqTEVOQlFVTXNRMEZCUXp0VFFVTjZSanRSUVVORUxFbEJRVWtzYVVKQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFVkJRVVU3V1VGREwwSXNZVUZCWVN4SFFVRmpMRWxCUVVrc1EwRkJReXhqUVVGbExFTkJRVU1zVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMU5CUXpGRk8xRkJRMFFzVDBGQlR5eGhRVUZoTEVOQlFVTTdTVUZEZWtJc1EwRkJRenRKUVZkVExFdEJRVXNzUTBGQlF5eGpRVUZqTEVOQlFVTXNaMEpCUVRCRE8xRkJRM0pGTEU5QlFVOHNSVUZCUlN4RFFVRkRPMGxCUTJRc1EwRkJRenM3UVVFM1JXRXNkMEpCUVdVc1IwRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlduQkVMRFJDUVRKSFF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jbGFzcyBCaW5kaW5nIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHkudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0W3RoaXMucHJvcGVydHldO1xuICAgIH1cbiAgICBiaW5kKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICAgICAgdGhpcy5pbml0aWF0b3IgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMuaW5pdGlhdG9yUHJvcGVydHkgPSBwcm9wZXJ0eS50b1N0cmluZygpO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YSh0aGlzLnByb3BlcnR5LCB0aGlzLm9iamVjdFt0aGlzLnByb3BlcnR5XSwgdGhpcy5vYmplY3QpO1xuICAgICAgICBjb25zdCB0aGlzRGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgaWYgKCF0aGlzLmRlc2NyaXB0b3IpXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0b3IgPSB0aGlzRGVzY3JpcHRvcjtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpO1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLm9iamVjdCwgdGhpcy5wcm9wZXJ0eSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBtb2RlbEdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXRNZXRhZGF0YSh0aGF0LnByb3BlcnR5LCB0aGF0Lm9iamVjdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBtb2RlbFNldChuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsID09PSBSZWZsZWN0LmdldE1ldGFkYXRhKHRoYXQucHJvcGVydHksIHRoYXQub2JqZWN0KSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIG9iamVjdFtwcm9wZXJ0eS50b1N0cmluZygpXSA9IG5ld1ZhbDtcbiAgICAgICAgICAgICAgICBpZiAoZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnNldCkge1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnNldC5jYWxsKHRoYXQub2JqZWN0LCBuZXdWYWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEodGhhdC5wcm9wZXJ0eSwgbmV3VmFsLCB0aGF0Lm9iamVjdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdW5iaW5kKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMub2JqZWN0W3RoaXMucHJvcGVydHldO1xuICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpO1xuICAgICAgICBpZiAoIXRoaXMuZGVzY3JpcHRvcilcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRvciA9IGRlc2NyaXB0b3I7XG4gICAgICAgIGlmICh0aGlzLmRlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHksIHRoaXMuZGVzY3JpcHRvcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vYmplY3RbdGhpcy5wcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgdXRpbF8xLnJlbW92ZUVsZW1lbnRGcm9tQXJyYXkodGhpcy5vYmplY3QuYmluZGluZ3NbdGhpcy5wcm9wZXJ0eV0sIHRoaXMpO1xuICAgICAgICB1dGlsXzEucmVtb3ZlRWxlbWVudEZyb21BcnJheSh0aGlzLmluaXRpYXRvci5iaW5kaW5nc1t0aGlzLmluaXRpYXRvclByb3BlcnR5XSwgdGhpcyk7XG4gICAgfVxufVxuZXhwb3J0cy5CaW5kaW5nID0gQmluZGluZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFtbHVaR2x1Wnk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmJHbGlMMEpwYm1ScGJtY3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTd3dRMEZCZVVRN1FVRnhRbnBFTEUxQlFXRXNUMEZCVHp0SlFUQkRhRUlzV1VGQldTeE5RVUZUTEVWQlFVVXNVVUZCVnp0UlFVTTVRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXp0UlFVTnlRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVONFF5eERRVUZETzBsQlVVMHNUMEZCVHp0UlFVTldMRTlCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1NVRkRkRU1zUTBGQlF6dEpRVk5OTEVsQlFVa3NRMEZCUXl4TlFVRmpMRVZCUVVVc1VVRkJhME03VVVGRE1VUXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRGVFSXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEhRVUZITEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVVM1F5eE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkZiRUlzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVY3ZSU3hOUVVGTkxHTkJRV01zUjBGQlJ5eFBRVUZQTEVOQlFVTXNkMEpCUVhkQ0xFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03VVVGRGNFWXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVk8xbEJRVVVzU1VGQlNTeERRVUZETEZWQlFWVXNSMEZCUnl4alFVRmpMRU5CUVVNN1VVRkRka1FzVFVGQlRTeFZRVUZWTEVkQlFVY3NUMEZCVHl4RFFVRkRMSGRDUVVGM1FpeERRVUZETEUxQlFVMHNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVkMFJTeFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUTI1RUxFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTzFsQlF5OURMRWRCUVVjc1JVRkJSU3hUUVVGVExGRkJRVkU3WjBKQlEyeENMRTlCUVU4c1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFpRVU16UkN4RFFVRkRPMWxCUTBRc1IwRkJSeXhGUVVGRkxGTkJRVk1zVVVGQlVTeERRVUZETEUxQlFWYzdaMEpCUXpsQ0xFbEJRVWtzVFVGQlRTeExRVUZMTEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMjlDUVVGRkxFOUJRVTg3WjBKQlJYUkVMRTFCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNN1owSkJSWFpFTEVsQlFVa3NWVUZCVlN4SlFVRkpMRlZCUVZVc1EwRkJReXhIUVVGSExFVkJRVVU3YjBKQlF6bENMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03YVVKQlF6VkRPenR2UWtGQlRTeFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRaUVVOMFJTeERRVUZETzFsQlEwUXNXVUZCV1N4RlFVRkZMRWxCUVVrN1dVRkRiRUlzVlVGQlZTeEZRVUZGTEVsQlFVazdVMEZEYmtJc1EwRkJReXhEUVVGRE8wbEJRMUFzUTBGQlF6dEpRVTlOTEUxQlFVMDdVVUZEVkN4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVkNlF5eE5RVUZOTEZWQlFWVXNSMEZCUnl4UFFVRlBMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdVVUZEYUVZc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTzFsQlFVVXNTVUZCU1N4RFFVRkRMRlZCUVZVc1IwRkJSeXhWUVVGVkxFTkJRVU03VVVGRGJrUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRk8xbEJSV3BDTEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dFRRVU4yUlR0UlFVVkVMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVWdVF5dzJRa0ZCYzBJc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEYkVVc05rSkJRWE5DTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEYkVZc1EwRkJRenREUVVOS08wRkJkRWhFTERCQ1FYTklReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBDaHVua18xID0gcmVxdWlyZShcIi4vQ2h1bmtcIik7XG5jb25zdCBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwifmJkby91dGlscy9kZWNvcmF0b3JzXCIpO1xubGV0IENlbGwgPSBjbGFzcyBDZWxsIHtcbiAgICBjb25zdHJ1Y3RvcihfcGFyYW1zKSB7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMuY2F2ZSA9IDA7XG4gICAgICAgIHRoaXMucml2ZXIgPSAwO1xuICAgICAgICB0aGlzLmh1bWlkaXR5ID0gMDtcbiAgICAgICAgdGhpcy50ZW1wZXJhdHVyZSA9IDA7XG4gICAgICAgIHRoaXMuY2h1bmsgPSBuZXcgQ2h1bmtfMS5DaHVuaygpO1xuICAgIH1cbn07XG5DZWxsID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgQ29uc3RQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIgJiYgQ29uc3RQYXJhbXMpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdF0pXG5dLCBDZWxsKTtcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMlZzYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOdmRYSmpaUzloY0hBdmJXOWtaV3h6TDBObGJHd3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN1FVRkJRU3h0UTBGQlowTTdRVUZEYUVNc2MwUkJRWGRFTzBGQlUzaEVMRWxCUVdFc1NVRkJTU3hIUVVGcVFpeE5RVUZoTEVsQlFVazdTVUY1UkdJc1dVRkJXU3hQUVVFeVFqdFJRV3hFYUVNc1RVRkJReXhIUVVGWExFTkJRVU1zUTBGQlF6dFJRVkZrTEUxQlFVTXNSMEZCVnl4RFFVRkRMRU5CUVVNN1VVRlJaQ3hUUVVGSkxFZEJRVmNzUTBGQlF5eERRVUZETzFGQlVXcENMRlZCUVVzc1IwRkJWeXhEUVVGRExFTkJRVU03VVVGUmJFSXNZVUZCVVN4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVZGeVFpeG5Ra0ZCVnl4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVZGNFFpeFZRVUZMTEVkQlFWVXNTVUZCU1N4aFFVRkxMRVZCUVVVc1EwRkJRenRKUVVWVExFTkJRVU03UTBGREwwTXNRMEZCUVR0QlFURkVXU3hKUVVGSk8wbEJSR2hDTERSQ1FVRmxMRVZCUVVVN2FVVkJNRVJSTEZkQlFWY3NiMEpCUVZnc1YwRkJWenRIUVhwRWVFSXNTVUZCU1N4RFFUQkVhRUk3UVVFeFJGa3NiMEpCUVVraWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG9wZW5fc2ltcGxleF9ub2lzZV8xID0gcmVxdWlyZShcIm9wZW4tc2ltcGxleC1ub2lzZVwiKTtcbmNvbnN0IGxvZGFzaF8xID0gcmVxdWlyZShcImxvZGFzaFwiKTtcbmNvbnN0IENlbGxfMSA9IHJlcXVpcmUoXCIuL0NlbGxcIik7XG5jbGFzcyBDaHVuayB7XG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDY0O1xuICAgICAgICB0aGlzLmdyaWQgPSBbXTtcbiAgICAgICAgdGhpcy5zaW1wbGV4Q2F2ZSA9IG5ldyBvcGVuX3NpbXBsZXhfbm9pc2VfMS5kZWZhdWx0KDEpO1xuICAgICAgICB0aGlzLnNpbXBsZXhSaXZlciA9IG5ldyBvcGVuX3NpbXBsZXhfbm9pc2VfMS5kZWZhdWx0KDIpO1xuICAgICAgICB0aGlzLnNpbXBsZXhUZW1wZXJhdHVyZSA9IG5ldyBvcGVuX3NpbXBsZXhfbm9pc2VfMS5kZWZhdWx0KDMpO1xuICAgICAgICB0aGlzLnNpbXBsZXhIdW1pZGl0eSA9IG5ldyBvcGVuX3NpbXBsZXhfbm9pc2VfMS5kZWZhdWx0KDQpO1xuICAgICAgICBsb2Rhc2hfMS5tZXJnZSh0aGlzLCBwYXJhbXMpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlR3JpZCgpO1xuICAgIH1cbiAgICBnZW5lcmF0ZUdyaWQoKSB7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMuc2l6ZTsgcm93KyspIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ncmlkW3Jvd10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQucHVzaChbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLnNpemU7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeENvb3JkaW5hdGUgPSBjb2wgKyB0aGlzLnggKiB0aGlzLnNpemU7XG4gICAgICAgICAgICAgICAgY29uc3QgeUNvb3JkaW5hdGUgPSByb3cgKyB0aGlzLnkgKiB0aGlzLnNpemU7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkW3Jvd10ucHVzaChuZXcgQ2VsbF8xLkNlbGwoe1xuICAgICAgICAgICAgICAgICAgICB4OiB4Q29vcmRpbmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgeTogeUNvb3JkaW5hdGUsXG4gICAgICAgICAgICAgICAgICAgIGNhdmU6IHRoaXMuc2ltcGxleENhdmUubm9pc2UyRCh4Q29vcmRpbmF0ZSAvIDEwMCwgeUNvb3JkaW5hdGUgLyAxMDApLFxuICAgICAgICAgICAgICAgICAgICByaXZlcjogdGhpcy5zaW1wbGV4Uml2ZXIubm9pc2UyRCh4Q29vcmRpbmF0ZSAvIDUwMCwgeUNvb3JkaW5hdGUgLyA1MDApLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZTogdGhpcy5zaW1wbGV4VGVtcGVyYXR1cmUubm9pc2UyRCh4Q29vcmRpbmF0ZSAvIDI1MDAsIHlDb29yZGluYXRlIC8gMjUwMCksXG4gICAgICAgICAgICAgICAgICAgIGh1bWlkaXR5OiB0aGlzLnNpbXBsZXhIdW1pZGl0eS5ub2lzZTJEKHhDb29yZGluYXRlIC8gMjUwMCwgeUNvb3JkaW5hdGUgLyAyNTAwKSxcbiAgICAgICAgICAgICAgICAgICAgY2h1bms6IHRoaXNcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkNodW5rID0gQ2h1bms7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMmgxYm1zdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emIzVnlZMlV2WVhCd0wyMXZaR1ZzY3k5RGFIVnVheTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMREpFUVVGclJEdEJRVU5zUkN4dFEwRkJLMEk3UVVGREwwSXNhVU5CUVRoQ08wRkJVVGxDTEUxQlFXRXNTMEZCU3p0SlFYTkZaQ3haUVVGWkxFMUJRVEpDTzFGQkwwUm9ReXhOUVVGRExFZEJRVmNzUTBGQlF5eERRVUZETzFGQlVXUXNUVUZCUXl4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVZGa0xGTkJRVWtzUjBGQldTeEZRVUZGTEVOQlFVTTdVVUZUYUVJc1UwRkJTU3hIUVVGaExFVkJRVVVzUTBGQlF6dFJRVk53UWl4blFrRkJWeXhIUVVGeFFpeEpRVUZKTERSQ1FVRm5RaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlUzaEVMR2xDUVVGWkxFZEJRWEZDTEVsQlFVa3NORUpCUVdkQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZUZWtRc2RVSkJRV3RDTEVkQlFYRkNMRWxCUVVrc05FSkJRV2RDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRlRMMFFzYjBKQlFXVXNSMEZCY1VJc1NVRkJTU3cwUWtGQlowSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVkc1JTeGpRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRM0JDTEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJRenRKUVVONFFpeERRVUZETzBsQlVWTXNXVUZCV1R0UlFVTnNRaXhMUVVGTExFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRWRCUVZrc1NVRkJTU3hEUVVGRExFbEJRVXNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlR0WlFVTm9SQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRuUWtGRGFrSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdZVUZEZEVJN1dVRkRSQ3hMUVVGTExFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRWRCUVZrc1NVRkJTU3hEUVVGRExFbEJRVXNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlR0blFrRkRhRVFzVFVGQlRTeFhRVUZYTEVkQlFVY3NSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVmNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXp0blFrRkRja1FzVFVGQlRTeFhRVUZYTEVkQlFVY3NSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVmNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXp0blFrRkZja1FzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRMllzU1VGQlNTeFhRVUZKTEVOQlFVTTdiMEpCUTB3c1EwRkJReXhGUVVGRkxGZEJRVmM3YjBKQlEyUXNRMEZCUXl4RlFVRkZMRmRCUVZjN2IwSkJRMlFzU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUjBGQlJ5eEhRVUZITEVWQlFVVXNWMEZCVnl4SFFVRkhMRWRCUVVjc1EwRkJRenR2UWtGRGNFVXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NSMEZCUnl4SFFVRkhMRVZCUVVVc1YwRkJWeXhIUVVGSExFZEJRVWNzUTBGQlF6dHZRa0ZEZEVVc1YwRkJWeXhGUVVGRkxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eEhRVUZITEVsQlFVa3NSVUZCUlN4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRE8yOUNRVU53Uml4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4SFFVRkhMRWxCUVVrc1JVRkJSU3hYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETzI5Q1FVTTVSU3hMUVVGTExFVkJRVVVzU1VGQlNUdHBRa0ZEWkN4RFFVRkRMRU5CUTB3c1EwRkJRenRoUVVOTU8xTkJRMG83U1VGRFRDeERRVUZETzBOQlEwbzdRVUY0UjBRc2MwSkJkMGRESW4wPSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcblwidXNlIHN0cmljdFwiO1xuY29uc3QgdHlwZV9ncmFwaHFsXzEgPSByZXF1aXJlKFwidHlwZS1ncmFwaHFsXCIpO1xuY29uc3QgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZGVjb3JhdG9yc1wiKTtcbmNvbnN0IEJET01vZGVsXzEgPSByZXF1aXJlKFwifmJkby9saWIvQkRPTW9kZWxcIik7XG5sZXQgVGVzdCA9IGNsYXNzIFRlc3QgZXh0ZW5kcyBCRE9Nb2RlbF8xLkJET01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcihfcGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaWQgPSAnMCc7XG4gICAgICAgIHRoaXMudGl0bGUgPSAndGVzdCc7XG4gICAgfVxufTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgdHlwZV9ncmFwaHFsXzEuRmllbGQoKF90eXBlKSA9PiB0eXBlX2dyYXBocWxfMS5JRCksXG4gICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgVGVzdC5wcm90b3R5cGUsIFwiaWRcIiwgdm9pZCAwKTtcbnRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgdHlwZV9ncmFwaHFsXzEuRmllbGQoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBUZXN0LnByb3RvdHlwZSwgXCJ0aXRsZVwiLCB2b2lkIDApO1xudHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICB0eXBlX2dyYXBocWxfMS5GaWVsZCh7IG51bGxhYmxlOiB0cnVlIH0pLFxuICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIFRlc3QucHJvdG90eXBlLCBcImRlc2NyaXB0aW9uXCIsIHZvaWQgMCk7XG5UZXN0ID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICBkZWNvcmF0b3JzXzEuYmFzZUNvbnN0cnVjdG9yKCksIHR5cGVfZ3JhcGhxbF8xLk9iamVjdFR5cGUoKSxcbiAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBDb25zdFBhcmFtcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBDb25zdFBhcmFtcykgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0XSlcbl0sIFRlc3QpO1xuZXhwb3J0cy5UZXN0ID0gVGVzdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHVnpkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2Ylc5a1pXeHpMMVJsYzNRdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3UVVGQlFTd3JRMEZCY1VRN1FVRkRja1FzYzBSQlFYZEVPMEZCUTNoRUxHZEVRVUUyUXp0QlFWVTNReXhKUVVGaExFbEJRVWtzUjBGQmFrSXNUVUZCWVN4SlFVRkxMRk5CUVZFc2JVSkJRVkU3U1VGNVFqbENMRmxCUVZrc1QwRkJNRUk3VVVGRGJFTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRnVRbWxDTEU5QlFVVXNSMEZCVnl4SFFVRkhMRU5CUVVNN1VVRlJPVUlzVlVGQlN5eEhRVUZYTEUxQlFVMHNRMEZCUXp0SlFWbDJReXhEUVVGRE8wTkJRMG9zUTBGQlFUdEJRWEpDZVVJN1NVRkJja0lzYjBKQlFVc3NRMEZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hGUVVGRkxFTkJRVU1zYVVKQlFVVXNRMEZCUXpzN1owTkJRWGxDTzBGQlVYSkRPMGxCUVZJc2IwSkJRVXNzUlVGQlJUczdiVU5CUVN0Q08wRkJVVm83U1VGQk1VSXNiMEpCUVVzc1EwRkJReXhGUVVGRkxGRkJRVkVzUlVGQlJTeEpRVUZKTEVWQlFVVXNRMEZCUXpzN2VVTkJRVFpDTzBGQmRrSTVReXhKUVVGSk8wbEJSR2hDTERSQ1FVRmxMRVZCUVVVc1JVRkJSU3g1UWtGQlZTeEZRVUZGTzJsRlFUQkNVQ3hYUVVGWExHOUNRVUZZTEZkQlFWYzdSMEY2UW5aQ0xFbEJRVWtzUTBFMFFtaENPMEZCTlVKWkxHOUNRVUZKSW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQkRPUm91dGVfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Sb3V0ZVwiKTtcbmNsYXNzIEJET0NvbmZpZyBleHRlbmRzIEJET1JvdXRlXzEuQkRPUm91dGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnJvdXRlcyA9IFtcIi86bmFtZVwiXTtcbiAgICAgICAgdGhpcy5qc29uT25seSA9IHRydWU7XG4gICAgfVxufVxuZXhwb3J0cy5CRE9Db25maWcgPSBCRE9Db25maWc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQUTI5dVptbG5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjMjkxY21ObEwyRndjQzl5YjNWMFpYTXZRa1JQUTI5dVptbG5MblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNaMFJCUVRaRE8wRkJWVGRETEUxQlFYTkNMRk5CUVZVc1UwRkJVU3h0UWtGQlVUdEpRVUZvUkRzN1VVRlBWeXhYUVVGTkxFZEJRV0VzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVOHpRaXhoUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETzBsQlF6bENMRU5CUVVNN1EwRkJRVHRCUVdaRUxEaENRV1ZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQkRPUm91dGVfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Sb3V0ZVwiKTtcbmNsYXNzIEJET0dhbWVMb2JieSBleHRlbmRzIEJET1JvdXRlXzEuQkRPUm91dGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnJvdXRlck5hbWVTcGFjZSA9ICcvJztcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVN0cmluZyA9IHJlcXVpcmUoJ35iZG8vdmlld3MvR2FtZUxvYmJ5Lm5qaycpO1xuICAgIH1cbiAgICBhc3luYyB0ZW1wbGF0ZVBhcmFtcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9oYTogJ09PT09PSEFBQUFBQUFBISEhJ1xuICAgICAgICB9O1xuICAgIH1cbn1cbkJET0dhbWVMb2JieS5hdHRhY2hUb1NlcnZlcnMgPSBbXCJHYW1lU2VydmVyXCJdO1xuZXhwb3J0cy5CRE9HYW1lTG9iYnkgPSBCRE9HYW1lTG9iYnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQUjJGdFpVeHZZbUo1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzI5MWNtTmxMMkZ3Y0M5eWIzVjBaWE12UWtSUFIyRnRaVXh2WW1KNUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc1owUkJRVFpETzBGQlZUZERMRTFCUVhOQ0xGbEJRV0VzVTBGQlVTeHRRa0ZCVVR0SlFVRnVSRHM3VVVGblFsY3NiMEpCUVdVc1IwRkJSeXhIUVVGSExFTkJRVU03VVVGUmJrSXNiVUpCUVdNc1IwRkJZU3hQUVVGUExFTkJRVU1zTUVKQlFUQkNMRU5CUVVNc1EwRkJRenRKUVdNM1JTeERRVUZETzBsQlRHRXNTMEZCU3l4RFFVRkRMR05CUVdNN1VVRkRNVUlzVDBGQlR6dFpRVU5JTEVkQlFVY3NSVUZCUlN4dFFrRkJiVUk3VTBGRE0wSXNRMEZCUXp0SlFVTk9MRU5CUVVNN08wRkJOVUpoTERSQ1FVRmxMRWRCUVdFc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dEJRVlEzUkN4dlEwRnpRME1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQkRPUm91dGVfMSA9IHJlcXVpcmUoXCJ+YmRvL2xpYi9CRE9Sb3V0ZVwiKTtcbmNsYXNzIEJET0hvbWUgZXh0ZW5kcyBCRE9Sb3V0ZV8xLkJET1JvdXRlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5yb3V0ZXJOYW1lU3BhY2UgPSAnLyc7XG4gICAgICAgIHRoaXMudGVtcGxhdGVTdHJpbmcgPSByZXF1aXJlKCd+YmRvL3ZpZXdzL2hvbWUubmprJyk7XG4gICAgfVxuICAgIGFzeW5jIHRlbXBsYXRlUGFyYW1zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb2hhOiAnZW5kbGljaCB6dSBIYXVzZSA9KSdcbiAgICAgICAgfTtcbiAgICB9XG59XG5CRE9Ib21lLmF0dGFjaFRvU2VydmVycyA9IFtcIldlYlNlcnZlclwiXTtcbmV4cG9ydHMuQkRPSG9tZSA9IEJET0hvbWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRa1JQU0c5dFpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnZkWEpqWlM5aGNIQXZjbTkxZEdWekwwSkVUMGh2YldVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN4blJFRkJOa003UVVGVk4wTXNUVUZCYzBJc1QwRkJVU3hUUVVGUkxHMUNRVUZSTzBsQlFUbERPenRSUVdkQ1Z5eHZRa0ZCWlN4SFFVRkhMRWRCUVVjc1EwRkJRenRSUVZGdVFpeHRRa0ZCWXl4SFFVRmhMRTlCUVU4c1EwRkJReXh4UWtGQmNVSXNRMEZCUXl4RFFVRkRPMGxCWTNoRkxFTkJRVU03U1VGTVlTeExRVUZMTEVOQlFVTXNZMEZCWXp0UlFVTXhRaXhQUVVGUE8xbEJRMGdzUjBGQlJ5eEZRVUZGTEhGQ1FVRnhRanRUUVVNM1FpeERRVUZETzBsQlEwNHNRMEZCUXpzN1FVRTFRbUVzZFVKQlFXVXNSMEZCWVN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8wRkJWRFZFTERCQ1FYTkRReUo5IiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vc291cmNlL2FwcC91dGlscyBzeW5jIHJlY3Vyc2l2ZVwiOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xucmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7XG5jb25zdCBsb2Rhc2hfMSA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5jb25zdCBCaW5kaW5nXzEgPSByZXF1aXJlKFwifmJkby9saWIvQmluZGluZ1wiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ+YmRvL3V0aWxzL3V0aWxcIik7XG5jb25zdCBlbnZpcm9ubWVudF8xID0gcmVxdWlyZShcIn5iZG8vdXRpbHMvZW52aXJvbm1lbnRcIik7XG5jb25zdCBvbl9jaGFuZ2VfMSA9IHJlcXVpcmUoXCJvbi1jaGFuZ2VcIik7XG5mdW5jdGlvbiB3YXRjaGVkKCkge1xuICAgIHJldHVybiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcERlc2MgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBrZXkpO1xuICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXRNZXRhZGF0YShrZXksIHRoaXMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld1ZhbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ0tleSA9IGtleS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcGl0YWxpemVkUHJvcCA9IHV0aWxfMS51Y0ZpcnN0KHN0cmluZ0tleSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdEZ1bmMgPSBgb24ke2NhcGl0YWxpemVkUHJvcH1Jbml0YDtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFuZ2VGdW5jID0gYG9uJHtjYXBpdGFsaXplZFByb3B9Q2hhbmdlYDtcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRGdW5jID0gYG9uJHtjYXBpdGFsaXplZFByb3B9QWRkYDtcbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmVGdW5jID0gYG9uJHtjYXBpdGFsaXplZFByb3B9UmVtb3ZlYDtcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsIGluc3RhbmNlb2YgQXJyYXkgfHwgbG9kYXNoXzEuaXNPYmplY3QobmV3VmFsKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWwgPSBvbl9jaGFuZ2VfMS5kZWZhdWx0KG5ld1ZhbCwgKF9wYXRoLCB2YWx1ZSwgcHJldmlvdXNWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3T2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZE9iamVjdEtleXMgPSBPYmplY3Qua2V5cyhwcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0xlbmd0aCA9IG5ld09iamVjdEtleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2xkTGVuZ3RoID0gb2xkT2JqZWN0S2V5cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3TGVuZ3RoID4gb2xkTGVuZ3RoICYmIGFkZEZ1bmMgaW4gdGhpcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYWRkZWQgb2YgbmV3T2JqZWN0S2V5cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9sZE9iamVjdEtleXMuaW5jbHVkZXMoYWRkZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0W2FkZEZ1bmNdKGFkZGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0xlbmd0aCA8IG9sZExlbmd0aCAmJiByZW1vdmVGdW5jIGluIHRoaXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHJlbW92ZWQgb2Ygb2xkT2JqZWN0S2V5cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5ld09iamVjdEtleXMuaW5jbHVkZXMocmVtb3ZlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXRbcmVtb3ZlRnVuY10ocmVtb3ZlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWwgPT09IFJlZmxlY3QuZ2V0TWV0YWRhdGEoa2V5LCB0aGlzKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmIChwcm9wRGVzYyAmJiBwcm9wRGVzYy5zZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcERlc2Muc2V0LmNhbGwodGhpcywgbmV3VmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKGtleSwgbmV3VmFsLCB0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlRnVuYyBpbiB0aGlzICYmIFJlZmxlY3QuZ2V0TWV0YWRhdGEoYGluaXQke2NhcGl0YWxpemVkUHJvcH1gLCB0aGlzKSlcbiAgICAgICAgICAgICAgICAgICAgdGhhdFtjaGFuZ2VGdW5jXSgpO1xuICAgICAgICAgICAgICAgIGlmIChpbml0RnVuYyBpbiB0aGlzICYmICFSZWZsZWN0LmdldE1ldGFkYXRhKGBpbml0JHtjYXBpdGFsaXplZFByb3B9YCwgdGhpcykpXG4gICAgICAgICAgICAgICAgICAgIHRoYXRbaW5pdEZ1bmNdKCk7XG4gICAgICAgICAgICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShgaW5pdCR7Y2FwaXRhbGl6ZWRQcm9wfWAsIHRydWUsIHRoaXMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmV4cG9ydHMud2F0Y2hlZCA9IHdhdGNoZWQ7XG5mdW5jdGlvbiBwcm9jZXNzQmluZGluZyh0aGlzQXJnLCBrZXksIG5ld1ZhbCwgcHJvcERlc2MpIHtcbiAgICBjb25zdCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICBpZiAoIVJlZmxlY3QuaGFzTWV0YWRhdGEoXCJiaW5kaW5nc1wiLCB0aGlzQXJnKSlcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImJpbmRpbmdzXCIsIHt9LCB0aGlzQXJnKTtcbiAgICBjb25zdCBtRGF0YSA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJiaW5kaW5nc1wiLCB0aGlzQXJnKTtcbiAgICBsZXQgcmVmbGVjdCA9IHRydWU7XG4gICAgaWYgKG5ld1ZhbCBpbnN0YW5jZW9mIEJpbmRpbmdfMS5CaW5kaW5nKSB7XG4gICAgICAgIGlmICghKGtleSBpbiBtRGF0YSkpXG4gICAgICAgICAgICBtRGF0YVtzdHJpbmdLZXldID0gW107XG4gICAgICAgIGlmICghbURhdGFbc3RyaW5nS2V5XS5pbmNsdWRlcyhuZXdWYWwpKVxuICAgICAgICAgICAgbURhdGFbc3RyaW5nS2V5XS5wdXNoKG5ld1ZhbCk7XG4gICAgICAgIG5ld1ZhbC5iaW5kKHRoaXNBcmcsIGtleSk7XG4gICAgICAgIG5ld1ZhbCA9IG5ld1ZhbC52YWx1ZU9mKCk7XG4gICAgICAgIHJlZmxlY3QgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG5ld1ZhbCA9PT0gUmVmbGVjdC5nZXRNZXRhZGF0YShrZXksIHRoaXNBcmcpKVxuICAgICAgICByZXR1cm4gbmV3VmFsO1xuICAgIGlmIChwcm9wRGVzYyAmJiBwcm9wRGVzYy5zZXQpIHtcbiAgICAgICAgcHJvcERlc2Muc2V0LmNhbGwodGhpc0FyZywgbmV3VmFsKTtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKGtleSwgbmV3VmFsLCB0aGlzQXJnKTtcbiAgICBpZiAobURhdGFbc3RyaW5nS2V5XSAmJiByZWZsZWN0KSB7XG4gICAgICAgIGZvciAoY29uc3QgYmluZGluZyBvZiBtRGF0YVtzdHJpbmdLZXldKSB7XG4gICAgICAgICAgICBpZiAoYmluZGluZy5vYmplY3RbYmluZGluZy5wcm9wZXJ0eV0gIT09IG5ld1ZhbClcbiAgICAgICAgICAgICAgICBiaW5kaW5nLm9iamVjdFtiaW5kaW5nLnByb3BlcnR5XSA9IG5ld1ZhbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3VmFsO1xufVxuZnVuY3Rpb24gcHJvcGVydHkoKSB7XG4gICAgcmV0dXJuICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9wRGVzYyA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgICAgaWYgKCFSZWZsZWN0Lmhhc01ldGFkYXRhKFwiZGVmaW5lZFByb3BlcnRpZXNcIiwgdGFyZ2V0KSkge1xuICAgICAgICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImRlZmluZWRQcm9wZXJ0aWVzXCIsIG5ldyBBcnJheSgpLCB0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb3BlcnR5TWFwID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImRlZmluZWRQcm9wZXJ0aWVzXCIsIHRhcmdldCk7XG4gICAgICAgIHByb3BlcnR5TWFwLnB1c2goa2V5LnRvU3RyaW5nKCkpO1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KTtcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0TWV0YWRhdGEoa2V5LCB0aGlzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsID09PSBSZWZsZWN0LmdldE1ldGFkYXRhKGtleSwgdGhpcykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBwcm9jZXNzQmluZGluZyh0aGlzLCBrZXksIG5ld1ZhbCwgcHJvcERlc2MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmV4cG9ydHMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbmZ1bmN0aW9uIGF0dHJpYnV0ZSgpIHtcbiAgICByZXR1cm4gKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BEZXNjID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KTtcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0TWV0YWRhdGEoa2V5LCB0aGlzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsID09PSBSZWZsZWN0LmdldE1ldGFkYXRhKGtleSwgdGhpcykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0TWV0YU5hbWUgPSBgJHtzdHJpbmdLZXl9QXR0ckluaXRpYWxpemVkYDtcbiAgICAgICAgICAgICAgICBuZXdWYWwgPSBwcm9jZXNzQmluZGluZyh0aGlzLCBrZXksIG5ld1ZhbCwgcHJvcERlc2MpO1xuICAgICAgICAgICAgICAgIGlmIChlbnZpcm9ubWVudF8xLmlzQnJvd3NlcigpICYmIHRoaXMgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSB0aGlzLmdldEF0dHJpYnV0ZShzdHJpbmdLZXkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIVJlZmxlY3QuZ2V0TWV0YWRhdGEoaW5pdE1ldGFOYW1lLCB0aGlzKSAmJiBhdHRyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoaW5pdE1ldGFOYW1lLCB0cnVlLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlZmxlY3Quc2V0KHRoaXMsIHN0cmluZ0tleSwgYXR0clZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba2V5LnRvU3RyaW5nKCldID0gYXR0clZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoaW5pdE1ldGFOYW1lLCB0cnVlLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJWYWx1ZSAhPT0gbmV3VmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoc3RyaW5nS2V5LCBuZXdWYWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG59XG5leHBvcnRzLmF0dHJpYnV0ZSA9IGF0dHJpYnV0ZTtcbmZ1bmN0aW9uIGJhc2VDb25zdHJ1Y3Rvcihjb25zdFBhcmFtc0luZGV4ID0gMCkge1xuICAgIGNvbnN0IGxpZmVDeWNsZSA9IChvYmplY3QsIGFyZ3MpID0+IHtcbiAgICAgICAgbGV0IGNvbnN0UGFyYW1zID0gYXJnc1tjb25zdFBhcmFtc0luZGV4XTtcbiAgICAgICAgaWYgKCEoY29uc3RQYXJhbXMgaW5zdGFuY2VvZiBPYmplY3QpKVxuICAgICAgICAgICAgY29uc3RQYXJhbXMgPSB7fTtcbiAgICAgICAgbG9kYXNoXzEubWVyZ2Uob2JqZWN0LCBjb25zdFBhcmFtcyk7XG4gICAgICAgIGlmIChcImNvbnN0cnVjdGVkQ2FsbGJhY2tcIiBpbiBvYmplY3QpXG4gICAgICAgICAgICBvYmplY3QuY29uc3RydWN0ZWRDYWxsYmFjayguLi5hcmdzKTtcbiAgICB9O1xuICAgIHJldHVybiAoY3RvcikgPT4ge1xuICAgICAgICBpZiAoZW52aXJvbm1lbnRfMS5pc0Jyb3dzZXIoKSAmJiBjdG9yLnByb3RvdHlwZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBjdG9yIHtcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICBsaWZlQ3ljbGUodGhpcywgYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsID0gY3RvcjtcbiAgICAgICAgICAgIGNvbnN0IGYgPSBmdW5jdGlvbiBuZXdDb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgb3JpZ2luYWwoLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgbGlmZUN5Y2xlKGluc3RhbmNlLCBhcmdzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZi5wcm90b3R5cGUgPSBvcmlnaW5hbC5wcm90b3R5cGU7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcmlnaW5hbCkuZm9yRWFjaCgobmFtZSkgPT4geyBmW25hbWVdID0gb3JpZ2luYWxbbmFtZV07IH0pO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5iYXNlQ29uc3RydWN0b3IgPSBiYXNlQ29uc3RydWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laR1ZqYjNKaGRHOXljeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2ZFhScGJITXZaR1ZqYjNKaGRHOXljeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMRFJDUVVFd1FqdEJRVU14UWl4dFEwRkJlVU03UVVGRGVrTXNPRU5CUVRKRE8wRkJRek5ETERCRFFVRXdRenRCUVVNeFF5eDNSRUZCYlVRN1FVRkRia1FzZVVOQlFXbERPMEZCVldwRExGTkJRV2RDTEU5QlFVODdTVUZEYmtJc1QwRkJUeXhEUVVGRExFMUJRVmNzUlVGQlJTeEhRVUUyUWl4RlFVRkZMRVZCUVVVN1VVRkRiRVFzVFVGQlRTeFJRVUZSTEVkQlFVY3NUMEZCVHl4RFFVRkRMSGRDUVVGM1FpeERRVUZETEUxQlFVMHNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVjdlJDeFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU53UXl4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVWQlFVVTdXVUZEYUVNc1IwRkJSeXhGUVVGRkxGTkJRVk1zUjBGQlJ6dG5Ra0ZEWWl4UFFVRlBMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUXpGRExFTkJRVU03V1VGRFJDeEhRVUZITEVWQlFVVXNVMEZCVXl4SFFVRkhMRU5CUVVNc1RVRkJWenRuUWtGRGVrSXNUVUZCVFN4VFFVRlRMRWRCUVVjc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzJkQ1FVTnFReXhOUVVGTkxHVkJRV1VzUjBGQlJ5eGpRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1owSkJRek5ETEUxQlFVMHNTVUZCU1N4SFFVRnRRaXhKUVVGSkxFTkJRVU03WjBKQlJXeERMRTFCUVUwc1VVRkJVU3hIUVVGSExFdEJRVXNzWlVGQlpTeE5RVUZOTEVOQlFVTTdaMEpCUXpWRExFMUJRVTBzVlVGQlZTeEhRVUZITEV0QlFVc3NaVUZCWlN4UlFVRlJMRU5CUVVNN1owSkJRMmhFTEUxQlFVMHNUMEZCVHl4SFFVRkhMRXRCUVVzc1pVRkJaU3hMUVVGTExFTkJRVU03WjBKQlF6RkRMRTFCUVUwc1ZVRkJWU3hIUVVGSExFdEJRVXNzWlVGQlpTeFJRVUZSTEVOQlFVTTdaMEpCUjJoRUxFbEJRVWtzVFVGQlRTeFpRVUZaTEV0QlFVc3NTVUZCU1N4cFFrRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTzI5Q1FVTTNReXhOUVVGTkxFZEJRVWNzYlVKQlFWRXNRMEZCYVVJc1RVRkJUU3hGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEV0QlFVc3NSVUZCUlN4aFFVRmhMRVZCUVVVc1JVRkJSVHQzUWtGRGRFVXNUVUZCVFN4aFFVRmhMRWRCUVVjc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlV5eExRVUZMTEVOQlFVTXNRMEZCUXp0M1FrRkRha1FzVFVGQlRTeGhRVUZoTEVkQlFVY3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJVeXhoUVVGaExFTkJRVU1zUTBGQlF6dDNRa0ZEZWtRc1RVRkJUU3hUUVVGVExFZEJRVWNzWVVGQllTeERRVUZETEUxQlFVMHNRMEZCUXp0M1FrRkRka01zVFVGQlRTeFRRVUZUTEVkQlFVY3NZVUZCWVN4RFFVRkRMRTFCUVUwc1EwRkJRenQzUWtGSGRrTXNTVUZCU1N4VFFVRlRMRWRCUVVjc1UwRkJVeXhKUVVGSkxFOUJRVThzU1VGQlNTeEpRVUZKTEVWQlFVVTdORUpCUXpGRExFdEJRVXNzVFVGQlRTeExRVUZMTEVsQlFVa3NZVUZCWVN4RlFVRkZPMmREUVVNdlFpeEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdHZRMEZEYUVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMjlEUVVOeVFpeE5RVUZOTzJsRFFVTlVPelpDUVVOS08zbENRVU5LTzNkQ1FVZEVMRWxCUVVrc1UwRkJVeXhIUVVGSExGTkJRVk1zU1VGQlNTeFZRVUZWTEVsQlFVa3NTVUZCU1N4RlFVRkZPelJDUVVNM1F5eExRVUZMTEUxQlFVMHNUMEZCVHl4SlFVRkpMR0ZCUVdFc1JVRkJSVHRuUTBGRGFrTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVTdiME5CUTJ4RExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenR2UTBGRE1VSXNUVUZCVFR0cFEwRkRWRHMyUWtGRFNqdDVRa0ZEU2p0dlFrRkRUQ3hEUVVGRExFTkJRVU1zUTBGQlF6dHBRa0ZEVGp0blFrRkpSQ3hKUVVGSkxFMUJRVTBzUzBGQlN5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hKUVVGSkxFTkJRVU03YjBKQlFVVXNUMEZCVHp0blFrRkZkRVFzU1VGQlNTeFJRVUZSTEVsQlFVa3NVVUZCVVN4RFFVRkRMRWRCUVVjc1JVRkJSVHR2UWtGRE1VSXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMmxDUVVOdVF6czdiMEpCUVUwc1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVWQlFVVXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVWRxUkN4SlFVRkpMRlZCUVZVc1NVRkJTU3hKUVVGSkxFbEJRVWtzVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4UFFVRlBMR1ZCUVdVc1JVRkJSU3hGUVVGRkxFbEJRVWtzUTBGQlF6dHZRa0ZCUlN4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVVVzUTBGQlF6dG5Ra0ZEYkVjc1NVRkJTU3hSUVVGUkxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhQUVVGUExHVkJRV1VzUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXp0dlFrRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXp0blFrRkRMMFlzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4UFFVRlBMR1ZCUVdVc1JVRkJSU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTnFSU3hEUVVGRE8xbEJRMFFzVlVGQlZTeEZRVUZGTEVsQlFVazdXVUZEYUVJc1dVRkJXU3hGUVVGRkxFbEJRVWs3VTBGRGNrSXNRMEZCUXl4RFFVRkRPMGxCUTFBc1EwRkJReXhEUVVGRE8wRkJRMDRzUTBGQlF6dEJRVzVGUkN3d1FrRnRSVU03UVVGaFJDeFRRVUZUTEdOQlFXTXNRMEZCUXl4UFFVRlpMRVZCUVVVc1IwRkJOa0lzUlVGQlJTeE5RVUZYTEVWQlFVVXNVVUZCTmtJN1NVRkRNMGNzVFVGQlRTeFRRVUZUTEVkQlFVY3NSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJSV3BETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExGVkJRVlVzUlVGQlJTeFBRVUZQTEVOQlFVTTdVVUZCUlN4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExGVkJRVlVzUlVGQlJTeEZRVUZGTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkRMMFlzVFVGQlRTeExRVUZMTEVkQlFYRkVMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVlVGQlZTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUTNwSExFbEJRVWtzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXp0SlFVZHVRaXhKUVVGSkxFMUJRVTBzV1VGQldTeHBRa0ZCVHl4RlFVRkZPMUZCUlROQ0xFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNN1dVRkJSU3hMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUXpORExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF6dFpRVUZGTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZGZEVVc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkZNVUlzVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRSUVVNeFFpeFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRPMHRCUTI1Q08wbEJSMFFzU1VGQlNTeE5RVUZOTEV0QlFVc3NUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFVkJRVVVzVDBGQlR5eERRVUZETzFGQlFVVXNUMEZCVHl4TlFVRk5MRU5CUVVNN1NVRkZhRVVzU1VGQlNTeFJRVUZSTEVsQlFVa3NVVUZCVVN4RFFVRkRMRWRCUVVjc1JVRkJSVHRSUVVNeFFpeFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdTMEZEZEVNN08xRkJRVTBzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1RVRkJUU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzBsQlJYQkVMRWxCUVVrc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEU5QlFVOHNSVUZCUlR0UlFVTTNRaXhMUVVGTExFMUJRVTBzVDBGQlR5eEpRVUZKTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRaUVVOd1F5eEpRVUZKTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEUxQlFVMDdaMEpCUVVVc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRE8xTkJRemxHTzB0QlEwbzdTVUZEUkN4UFFVRlBMRTFCUVUwc1EwRkJRenRCUVVOc1FpeERRVUZETzBGQlZVUXNVMEZCWjBJc1VVRkJVVHRKUVVOd1FpeFBRVUZQTEVOQlFVTXNUVUZCVnl4RlFVRkZMRWRCUVc5Q0xFVkJRVVVzUlVGQlJUdFJRVVY2UXl4TlFVRk5MRkZCUVZFc1IwRkJSeXhQUVVGUExFTkJRVU1zZDBKQlFYZENMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJ5OUVMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEcxQ1FVRnRRaXhGUVVGRkxFMUJRVTBzUTBGQlF5eEZRVUZGTzFsQlEyNUVMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zYlVKQlFXMUNMRVZCUVVVc1NVRkJTU3hMUVVGTExFVkJRVlVzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0VFFVTTFSVHRSUVVORUxFMUJRVTBzVjBGQlZ5eEhRVUZoTEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc2JVSkJRVzFDTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRMMFVzVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVWRxUXl4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTndReXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEUxQlFVMHNSVUZCUlN4SFFVRkhMRVZCUVVVN1dVRkRhRU1zUjBGQlJ5eEZRVUZGTEZOQlFWTXNSMEZCUnp0blFrRkRZaXhQUVVGUExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRekZETEVOQlFVTTdXVUZEUkN4SFFVRkhMRVZCUVVVc1UwRkJVeXhIUVVGSExFTkJRVU1zVFVGQlZ6dG5Ra0ZEZWtJc1NVRkJTU3hOUVVGTkxFdEJRVXNzVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1NVRkJTU3hEUVVGRE8yOUNRVUZGTEU5QlFVODdaMEpCUTNSRUxHTkJRV01zUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVUwc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVU5vUkN4RFFVRkRPMWxCUTBRc1ZVRkJWU3hGUVVGRkxFbEJRVWs3V1VGRGFFSXNXVUZCV1N4RlFVRkZMRWxCUVVrN1UwRkRja0lzUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXl4RFFVRkRPMEZCUTA0c1EwRkJRenRCUVRGQ1JDdzBRa0V3UWtNN1FVRlRSQ3hUUVVGblFpeFRRVUZUTzBsQlEzSkNMRTlCUVU4c1EwRkJReXhOUVVGWExFVkJRVVVzUjBGQmIwSXNSVUZCUlN4RlFVRkZPMUZCUlhwRExFMUJRVTBzVVVGQlVTeEhRVUZITEU5QlFVOHNRMEZCUXl4M1FrRkJkMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkhMMFFzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGNFTXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEZRVUZGTzFsQlEyaERMRWRCUVVjc1JVRkJSU3hUUVVGVExFZEJRVWM3WjBKQlEySXNUMEZCVHl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFZEJRVWNzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTXhReXhEUVVGRE8xbEJRMFFzUjBGQlJ5eEZRVUZGTEZOQlFWTXNSMEZCUnl4RFFVRkRMRTFCUVZjN1owSkJRM3BDTEVsQlFVa3NUVUZCVFN4TFFVRkxMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVsQlFVa3NRMEZCUXp0dlFrRkJSU3hQUVVGUE8yZENRVU4wUkN4TlFVRk5MRk5CUVZNc1IwRkJSeXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdaMEpCUTJwRExFMUJRVTBzV1VGQldTeEhRVUZITEVkQlFVY3NVMEZCVXl4cFFrRkJhVUlzUTBGQlF6dG5Ra0ZEYmtRc1RVRkJUU3hIUVVGSExHTkJRV01zUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVUwc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dG5Ra0ZGY2tRc1NVRkJTU3gxUWtGQlV5eEZRVUZGTEVsQlFVa3NTVUZCU1N4WlFVRlpMRmRCUVZjc1JVRkJSVHR2UWtGRE5VTXNUVUZCVFN4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0dlFrRkRMME1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hGUVVGRkxFbEJRVWtzUTBGQlF5eEpRVUZKTEZOQlFWTXNSVUZCUlR0M1FrRkZka1FzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4WlFVRlpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzNkQ1FVTnFSQ3hQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NSVUZCUlN4VFFVRlRMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03ZDBKQlJYWkNMRWxCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNSMEZCUnl4VFFVRlRMRU5CUVVNN2QwSkJRMjVFTEU5QlFVODdjVUpCUTFZN08zZENRVUZOTEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0dlFrRkZlRVFzU1VGQlNTeFRRVUZUTEV0QlFVc3NUVUZCVFR0M1FrRkJSU3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZOQlFWTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRwUWtGRGJFVTdXVUZEVEN4RFFVRkRPMWxCUTBRc1ZVRkJWU3hGUVVGRkxFbEJRVWs3V1VGRGFFSXNXVUZCV1N4RlFVRkZMRWxCUVVrN1UwRkRja0lzUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXl4RFFVRkRPMEZCUTA0c1EwRkJRenRCUVc1RFJDdzRRa0Z0UTBNN1FVRlRSQ3hUUVVGblFpeGxRVUZsTEVOQlFVTXNiVUpCUVRKQ0xFTkJRVU03U1VGUmVFUXNUVUZCVFN4VFFVRlRMRWRCUVVjc1EwRkJReXhOUVVGWExFVkJRVVVzU1VGQlZ5eEZRVUZGTEVWQlFVVTdVVUZETTBNc1NVRkJTU3hYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFTkJRVU03VVVGRGVrTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1YwRkJWeXhaUVVGWkxFMUJRVTBzUTBGQlF6dFpRVUZGTEZkQlFWY3NSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRka1FzWTBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4WFFVRlhMRU5CUVVNc1EwRkJRenRSUVVNelFpeEpRVUZKTEhGQ1FVRnhRaXhKUVVGSkxFMUJRVTA3V1VGQlJTeE5RVUZOTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTTNSU3hEUVVGRExFTkJRVU03U1VGRlJpeFBRVUZQTEVOQlFYZENMRWxCUVU4c1JVRkJTeXhGUVVGRk8xRkJTM3BETEVsQlFVa3NkVUpCUVZNc1JVRkJSU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFRRVUZUTEZsQlFWa3NWMEZCVnl4RlFVRkZPMWxCVDNSRUxFOUJRVThzUzBGQlRTeFRRVUZSTEVsQlFVazdaMEpCUTNKQ0xGbEJRVmtzUjBGQlJ5eEpRVUZYTzI5Q1FVTjBRaXhMUVVGTExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0dlFrRkRaaXhUUVVGVExFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVNeFFpeERRVUZETzJGQlEwb3NRMEZCUXp0VFFVTk1PMkZCUVUwN1dVRkRTQ3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZGZEVJc1RVRkJUU3hEUVVGRExFZEJRVkVzVTBGQlV5eGpRVUZqTEVOQlFVTXNSMEZCUnl4SlFVRlhPMmRDUVVOcVJDeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTjJReXhUUVVGVExFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVNeFFpeFBRVUZQTEZGQlFWRXNRMEZCUXp0WlFVTndRaXhEUVVGRExFTkJRVU03V1VGRlJpeERRVUZETEVOQlFVTXNVMEZCVXl4SFFVRkhMRkZCUVZFc1EwRkJReXhUUVVGVExFTkJRVU03V1VGRmFrTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SlFVRlpMRVZCUVVVc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCVXl4UlFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVVjBSaXhQUVVGUExFTkJRVU1zUTBGQlF6dFRRVU5hTzBsQlEwd3NRMEZCUXl4RFFVRkRPMEZCUTA0c1EwRkJRenRCUVdwRVJDd3dRMEZwUkVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG51bmp1Y2tzID0gcmVxdWlyZShcIm51bmp1Y2tzXCIpO1xuZnVuY3Rpb24gaXNOb2RlSlMoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc05vZGVKUyA9IGlzTm9kZUpTO1xuZnVuY3Rpb24gaXNCcm93c2VyKCkge1xuICAgIHJldHVybiAhaXNOb2RlSlMoKTtcbn1cbmV4cG9ydHMuaXNCcm93c2VyID0gaXNCcm93c2VyO1xuZXhwb3J0cy50ZW1wbGF0ZUVudmlyb25tZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBub0NhY2hlID0gZ2xvYmFsLnByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGNvbnN0IGVudiA9IG5ldyBudW5qdWNrcy5FbnZpcm9ubWVudCh7XG4gICAgICAgIGdldFNvdXJjZTogKHBhdGgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHNyYzogcmVxdWlyZShwYXRoKSwgcGF0aCwgbm9DYWNoZSB9O1xuICAgICAgICB9XG4gICAgfSwgeyBub0NhY2hlIH0pO1xuICAgIGVudi5hZGRGaWx0ZXIoJ2pzb24nLCAodmFsdWUsIHNwYWNlcykgPT4ge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBudW5qdWNrcy5ydW50aW1lLlNhZmVTdHJpbmcpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IG51bmp1Y2tzLnJ1bnRpbWUuU2FmZVN0cmluZyhKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgc3BhY2VzKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVudjtcbn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laVzUyYVhKdmJtMWxiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6YjNWeVkyVXZZWEJ3TDNWMGFXeHpMMlZ1ZG1seWIyNXRaVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUVzY1VOQlFYRkRPMEZCVVhKRExGTkJRV2RDTEZGQlFWRTdTVUZEY0VJc1NVRkJTU3hQUVVGUExFMUJRVTBzUzBGQlN5eFhRVUZYTEVsQlFVa3NUMEZCVHl4UFFVRlBMRXRCUVVzc1VVRkJVU3hGUVVGRk8xRkJRemxFTEU5QlFVOHNTVUZCU1N4RFFVRkRPMHRCUTJZN1NVRkRSQ3hQUVVGUExFdEJRVXNzUTBGQlF6dEJRVU5xUWl4RFFVRkRPMEZCVEVRc05FSkJTME03UVVGUlJDeFRRVUZuUWl4VFFVRlRPMGxCUTNKQ0xFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0QlFVTjJRaXhEUVVGRE8wRkJSa1FzT0VKQlJVTTdRVUZMV1N4UlFVRkJMRzFDUVVGdFFpeEhRVUZITEVOQlFVTXNSMEZCUnl4RlFVRkZPMGxCUTNKRExFMUJRVTBzVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUzBGQlN5eGhRVUZoTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETzBsQlF6ZEZMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXp0UlFVTnFReXhUUVVGVExFVkJRVVVzUTBGQlF5eEpRVUZaTEVWQlFVVXNSVUZCUlR0WlFVTjRRaXhQUVVGUExFVkJRVVVzUjBGQlJ5eEZRVUZGTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRVVVzVDBGQlR5eEZRVUZGTEVOQlFVTTdVVUZEYWtRc1EwRkJRenRMUVVOS0xFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUldoQ0xFZEJRVWNzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFMUJRVTBzUlVGQlJTeEZRVUZGTzFGQlEzQkRMRWxCUVVrc1MwRkJTeXhaUVVGWkxGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4RlFVRkZPMWxCUXpsRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1UwRkROVUk3VVVGRFJDeFBRVUZQTEVsQlFVa3NVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1NVRkJTU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYUVZc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFNDeFBRVUZQTEVkQlFVY3NRMEZCUXp0QlFVTm1MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gdWNGaXJzdChzdHIpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuZXhwb3J0cy51Y0ZpcnN0ID0gdWNGaXJzdDtcbmZ1bmN0aW9uIHJlbW92ZUVsZW1lbnRGcm9tQXJyYXkoYXJyYXksIGVsZW1lbnQpIHtcbiAgICBjb25zdCBpbmRleCA9IGFycmF5LmluZGV4T2YoZWxlbWVudCk7XG4gICAgaWYgKGluZGV4ID49IDApXG4gICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG59XG5leHBvcnRzLnJlbW92ZUVsZW1lbnRGcm9tQXJyYXkgPSByZW1vdmVFbGVtZW50RnJvbUFycmF5O1xuZnVuY3Rpb24gZ2V0UHJvdG90eXBlTmFtZXNSZWN1cnNpdmUob2JqZWN0LCBwcm90b3R5cGVzID0gW10pIHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAocHJvdG90eXBlKSB7XG4gICAgICAgIHByb3RvdHlwZXMucHVzaChwcm90b3R5cGUuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICAgIGdldFByb3RvdHlwZU5hbWVzUmVjdXJzaXZlKHByb3RvdHlwZSwgcHJvdG90eXBlcyk7XG4gICAgfVxuICAgIHJldHVybiBwcm90b3R5cGVzO1xufVxuZXhwb3J0cy5nZXRQcm90b3R5cGVOYW1lc1JlY3Vyc2l2ZSA9IGdldFByb3RvdHlwZU5hbWVzUmVjdXJzaXZlO1xuZnVuY3Rpb24gaW5jbHVkZXNNZW1iZXJPZkxpc3Qoc2VhcmNoLCBsaXN0LCBleHRlbnNpb24gPSAnJykge1xuICAgIGZvciAoY29uc3QgbWVtYmVyIG9mIGxpc3QpIHtcbiAgICAgICAgaWYgKHNlYXJjaC5pbmNsdWRlcyhgJHttZW1iZXJ9JHtleHRlbnNpb259YCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaW5jbHVkZXNNZW1iZXJPZkxpc3QgPSBpbmNsdWRlc01lbWJlck9mTGlzdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRYUnBiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM052ZFhKalpTOWhjSEF2ZFhScGJITXZkWFJwYkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVTlCTEZOQlFXZENMRTlCUVU4c1EwRkJReXhIUVVGWE8wbEJReTlDTEU5QlFVOHNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzUkVMRU5CUVVNN1FVRkdSQ3d3UWtGRlF6dEJRVk5FTEZOQlFXZENMSE5DUVVGelFpeERRVUZETEV0QlFWa3NSVUZCUlN4UFFVRlpPMGxCUXpkRUxFMUJRVTBzUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRGNrTXNTVUZCU1N4TFFVRkxMRWxCUVVrc1EwRkJRenRSUVVGRkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRek5ETEVOQlFVTTdRVUZJUkN4M1JFRkhRenRCUVZORUxGTkJRV2RDTERCQ1FVRXdRaXhEUVVGRExFMUJRVmNzUlVGQlJTeGhRVUYxUWl4RlFVRkZPMGxCUXpkRkxFMUJRVTBzVTBGQlV5eEhRVUZITEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGFFUXNTVUZCU1N4VFFVRlRMRVZCUVVVN1VVRkRXQ3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE5VTXNNRUpCUVRCQ0xFTkJRVU1zVTBGQlV5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRPMHRCUTNKRU8wbEJRMFFzVDBGQlR5eFZRVUZWTEVOQlFVTTdRVUZEZEVJc1EwRkJRenRCUVZCRUxHZEZRVTlETzBGQlYwUXNVMEZCWjBJc2IwSkJRVzlDTEVOQlFVTXNUVUZCZVVJc1JVRkJSU3hKUVVGakxFVkJRVVVzV1VGQmIwSXNSVUZCUlR0SlFVTnNSeXhMUVVGTExFMUJRVTBzVFVGQlRTeEpRVUZKTEVsQlFVa3NSVUZCUlR0UlFVTjJRaXhKUVVGSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4TlFVRk5MRWRCUVVjc1UwRkJVeXhGUVVGRkxFTkJRVU1zUlVGQlJUdFpRVU14UXl4UFFVRlBMRWxCUVVrc1EwRkJRenRUUVVObU8wdEJRMG83U1VGRFJDeFBRVUZQTEV0QlFVc3NRMEZCUXp0QlFVTnFRaXhEUVVGRE8wRkJVRVFzYjBSQlQwTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG53aW5kb3cudmlydHVhbFJvdXRlcyA9IFtcIkNvbmZpZ1wiLCBcIkdhbWVMb2JieVwiLCBcIkhvbWVcIl07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkbWx5ZEhWaGJFVnVkSEo1VUc5cGJuUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOTJZWEl2ZEcxd0wzWnBjblIxWVd4RmJuUnllVkJ2YVc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCVFN4TlFVRlBMRU5CUVVNc1lVRkJZU3hIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZETEZkQlFWY3NSVUZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReUo5Il0sInNvdXJjZVJvb3QiOiIifQ==