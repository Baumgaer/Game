(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["templates"],{

/***/ "./out/app/client/views/master.njk":
/***/ (function(module, exports, __webpack_require__) {

var nunjucks = __webpack_require__("./node_modules/nunjucks/browser/nunjucks-slim.js");
var env;
if (!nunjucks.currentEnv){
	env = nunjucks.currentEnv = new nunjucks.Environment([], undefined);
} else {
	env = nunjucks.currentEnv;
}
var dependencies = nunjucks.webpackDependencies || (nunjucks.webpackDependencies = {});




var shim = __webpack_require__("./node_modules/nunjucks-loader/runtime-shim.js");


(function() {(nunjucks.nunjucksPrecompiled = nunjucks.nunjucksPrecompiled || {})["out/app/client/views/master.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div>\n    Das hier ist oben...\n    ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("unten"))(env, context, frame, runtime, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += t_1;
output += "\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_unten(env, context, frame, runtime, cb) {
var lineno = 2;
var colno = 7;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_unten: b_unten,
root: root
};

})();
})();



module.exports = shim(nunjucks, env, nunjucks.nunjucksPrecompiled["out/app/client/views/master.njk"] , dependencies)

/***/ }),

/***/ "./out/app/client/views/testComponent.njk":
/***/ (function(module, exports, __webpack_require__) {

var nunjucks = __webpack_require__("./node_modules/nunjucks/browser/nunjucks-slim.js");
var env;
if (!nunjucks.currentEnv){
	env = nunjucks.currentEnv = new nunjucks.Environment([], undefined);
} else {
	env = nunjucks.currentEnv;
}
var dependencies = nunjucks.webpackDependencies || (nunjucks.webpackDependencies = {});
dependencies["~static/views/master.njk"] = __webpack_require__( "./out/app/client/views/master.njk" );




var shim = __webpack_require__("./node_modules/nunjucks-loader/runtime-shim.js");


(function() {(nunjucks.nunjucksPrecompiled = nunjucks.nunjucksPrecompiled || {})["out/app/client/views/testComponent.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("~static/views/master.njk", true, "out/app/client/views/testComponent.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("unten"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_unten(env, context, frame, runtime, cb) {
var lineno = 2;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<div>\n    TEST!\n    <slot></slot>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_unten: b_unten,
root: root
};

})();
})();



module.exports = shim(nunjucks, env, nunjucks.nunjucksPrecompiled["out/app/client/views/testComponent.njk"] , dependencies)

/***/ }),

/***/ "./out/app/views/gameLobby.njk":
/***/ (function(module, exports, __webpack_require__) {

var nunjucks = __webpack_require__("./node_modules/nunjucks/browser/nunjucks-slim.js");
var env;
if (!nunjucks.currentEnv){
	env = nunjucks.currentEnv = new nunjucks.Environment([], {"dev":false,"autoescape":true,"throwOnUndefined":false,"trimBlocks":false,"lstripBlocks":false});
} else {
	env = nunjucks.currentEnv;
}
var dependencies = nunjucks.webpackDependencies || (nunjucks.webpackDependencies = {});
dependencies["~bdo/views/master.njk"] = __webpack_require__( "./out/app/views/master.njk" );




var shim = __webpack_require__("./node_modules/nunjucks-loader/runtime-shim.js");


(function() {(nunjucks.nunjucksPrecompiled = nunjucks.nunjucksPrecompiled || {})["out/app/views/gameLobby.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("~bdo/views/master.njk", true, "out/app/views/gameLobby.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("body"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_body(env, context, frame, runtime, cb) {
var lineno = 1;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n\n<canvas is=\"game-window\"></canvas>\n<script>\n    console.log(location.host);\n    let webSocket = new WebSocket(`ws://${location.host}/api`);\n    webSocket.onopen = function () {\n        console.log(\"Client is connected\");\n        this.send(JSON.stringify({\n            type: \"broadcast\",\n            data: \"looool\"\n        }));\n    };\n\n    webSocket.onmessage = function (data, flags) {\n        console.log(`WebSocketClient message: `, data);\n    }\n\n    webSocket.onerror = function (event) {\n        console.log(event);\n    }\n\n</script>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_body: b_body,
root: root
};

})();
})();



module.exports = shim(nunjucks, env, nunjucks.nunjucksPrecompiled["out/app/views/gameLobby.njk"] , dependencies)

/***/ }),

/***/ "./out/app/views/head.njk":
/***/ (function(module, exports, __webpack_require__) {

var nunjucks = __webpack_require__("./node_modules/nunjucks/browser/nunjucks-slim.js");
var env;
if (!nunjucks.currentEnv){
	env = nunjucks.currentEnv = new nunjucks.Environment([], undefined);
} else {
	env = nunjucks.currentEnv;
}
var dependencies = nunjucks.webpackDependencies || (nunjucks.webpackDependencies = {});




var shim = __webpack_require__("./node_modules/nunjucks-loader/runtime-shim.js");


(function() {(nunjucks.nunjucksPrecompiled = nunjucks.nunjucksPrecompiled || {})["out/app/views/head.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n<title>Document</title>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();



module.exports = shim(nunjucks, env, nunjucks.nunjucksPrecompiled["out/app/views/head.njk"] , dependencies)

/***/ }),

/***/ "./out/app/views/home.njk":
/***/ (function(module, exports, __webpack_require__) {

var nunjucks = __webpack_require__("./node_modules/nunjucks/browser/nunjucks-slim.js");
var env;
if (!nunjucks.currentEnv){
	env = nunjucks.currentEnv = new nunjucks.Environment([], {"dev":false,"autoescape":true,"throwOnUndefined":false,"trimBlocks":false,"lstripBlocks":false});
} else {
	env = nunjucks.currentEnv;
}
var dependencies = nunjucks.webpackDependencies || (nunjucks.webpackDependencies = {});
dependencies["~bdo/views/master.njk"] = __webpack_require__( "./out/app/views/master.njk" );




var shim = __webpack_require__("./node_modules/nunjucks-loader/runtime-shim.js");


(function() {(nunjucks.nunjucksPrecompiled = nunjucks.nunjucksPrecompiled || {})["out/app/views/home.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("~bdo/views/master.njk", true, "out/app/views/home.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("body"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_body(env, context, frame, runtime, cb) {
var lineno = 1;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<a href=\"/\" is=\"view-link\" test=\"trolololol\">GO HOME</a>\n<a href=\"/config/config\" is=\"view-link\">GO CONFIG!!!!!!!!</a>\n<a href=\"/config/config\" is=\"view-link\">lalala</a>\n<img src=\"/images/helloWorld.jpg\" alt=\"test\">\n";
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_body: b_body,
root: root
};

})();
})();



module.exports = shim(nunjucks, env, nunjucks.nunjucksPrecompiled["out/app/views/home.njk"] , dependencies)

/***/ }),

/***/ "./out/app/views/master.njk":
/***/ (function(module, exports, __webpack_require__) {

var nunjucks = __webpack_require__("./node_modules/nunjucks/browser/nunjucks-slim.js");
var env;
if (!nunjucks.currentEnv){
	env = nunjucks.currentEnv = new nunjucks.Environment([], undefined);
} else {
	env = nunjucks.currentEnv;
}
var dependencies = nunjucks.webpackDependencies || (nunjucks.webpackDependencies = {});
dependencies["~bdo/views/head.njk"] = __webpack_require__( "./out/app/views/head.njk" );




var shim = __webpack_require__("./node_modules/nunjucks-loader/runtime-shim.js");


(function() {(nunjucks.nunjucksPrecompiled = nunjucks.nunjucksPrecompiled || {})["out/app/views/master.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("~bdo/views/head.njk", false, "out/app/views/master.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "process")),"env")),"NODE_ENV") === "development") {
output += "\n    <script src=\"/js/browser-source-map-support.js\"></script>\n    <script>sourceMapSupport.install();</script>\n    ";
;
}
output += "\n    <link rel=\"stylesheet\" href=\"/css/bundle.css\">\n</head>\n\n<body>\n    <script>\n        window.process = ";
output += runtime.suppressValue(env.getFilter("safe").call(context, env.getFilter("json").call(context, runtime.contextOrFrameLookup(context, frame, "process"))), env.opts.autoescape);
output += ";\n    </script>\n    <view-router>";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("body"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "</view-router>\n    <script defer src=\"/js/vendor.bundle.js\"></script>\n    <script defer src=\"/js/templates.bundle.js\"></script>\n    <script defer src=\"/js/bundle.js\"></script>\n</body>\n\n</html>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_body(env, context, frame, runtime, cb) {
var lineno = 16;
var colno = 20;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_body: b_body,
root: root
};

})();
})();



module.exports = shim(nunjucks, env, nunjucks.nunjucksPrecompiled["out/app/views/master.njk"] , dependencies)

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9vdXQvYXBwL2NsaWVudC92aWV3cy9tYXN0ZXIubmprIiwid2VicGFjazovLy8uL291dC9hcHAvY2xpZW50L3ZpZXdzL3Rlc3RDb21wb25lbnQubmprIiwid2VicGFjazovLy8uL291dC9hcHAvdmlld3MvZ2FtZUxvYmJ5Lm5qayIsIndlYnBhY2s6Ly8vLi9vdXQvYXBwL3ZpZXdzL2hlYWQubmprIiwid2VicGFjazovLy8uL291dC9hcHAvdmlld3MvaG9tZS5uamsiLCJ3ZWJwYWNrOi8vLy4vb3V0L2FwcC92aWV3cy9tYXN0ZXIubmprIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZUFBZSxtQkFBTyxDQUFDLGtEQUFnQztBQUN2RDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHFGQUFxRjs7Ozs7QUFLckYsV0FBVyxtQkFBTyxDQUFDLGdEQUFpRTs7O0FBR3BGLGFBQWEsa0VBQWtFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVEsRUFBRTtBQUN0RCxTQUFTLFNBQVMsUUFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRCxDQUFDOzs7O0FBSUQsb0g7Ozs7Ozs7QUMzREEsZUFBZSxtQkFBTyxDQUFDLGtEQUFnQztBQUN2RDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRiwyQ0FBMkMsbUJBQU8sRUFBRSxtQ0FBMEI7Ozs7O0FBSzlFLFdBQVcsbUJBQU8sQ0FBQyxnREFBaUU7OztBQUdwRixhQUFhLGtFQUFrRTtBQUMvRTtBQUNBO0FBQ0E7QUFD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Q3JGLHNDQUFzQyxtQkFBTyxFQUFFLDBCQUFxQjs7Ozs7QUFLcEUsV0FBVyxtQkFBTyxDQUFDLGdEQUFpRTs7O0FBR3BGLGFBQWEsa0VBQWtFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsUUFBUTtBQUMxQixvQkFBb0I7QUFDcEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxRQUFRO0FBQzFCLG9CQUFvQjtBQUNwQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EscUhBQXFIO0FBQ3JIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLDRDQUE0QyxRQUFRLEVBQUU7QUFDdEQsU0FBUyxTQUFTLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRCxDQUFDOzs7O0FBSUQsNkciLCJmaWxlIjoidGVtcGxhdGVzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBudW5qdWNrcyA9IHJlcXVpcmUoXCJudW5qdWNrcy9icm93c2VyL251bmp1Y2tzLXNsaW1cIik7XG52YXIgZW52O1xuaWYgKCFudW5qdWNrcy5jdXJyZW50RW52KXtcblx0ZW52ID0gbnVuanVja3MuY3VycmVudEVudiA9IG5ldyBudW5qdWNrcy5FbnZpcm9ubWVudChbXSwgdW5kZWZpbmVkKTtcbn0gZWxzZSB7XG5cdGVudiA9IG51bmp1Y2tzLmN1cnJlbnRFbnY7XG59XG52YXIgZGVwZW5kZW5jaWVzID0gbnVuanVja3Mud2VicGFja0RlcGVuZGVuY2llcyB8fCAobnVuanVja3Mud2VicGFja0RlcGVuZGVuY2llcyA9IHt9KTtcblxuXG5cblxudmFyIHNoaW0gPSByZXF1aXJlKFwiRDovQXRvbV9wcm9qZWN0cy9HYW1lL25vZGVfbW9kdWxlcy9udW5qdWNrcy1sb2FkZXIvcnVudGltZS1zaGltXCIpO1xuXG5cbihmdW5jdGlvbigpIHsobnVuanVja3MubnVuanVja3NQcmVjb21waWxlZCA9IG51bmp1Y2tzLm51bmp1Y2tzUHJlY29tcGlsZWQgfHwge30pW1wib3V0L2FwcC9jbGllbnQvdmlld3MvbWFzdGVyLm5qa1wiXSA9IChmdW5jdGlvbigpIHtcbmZ1bmN0aW9uIHJvb3QoZW52LCBjb250ZXh0LCBmcmFtZSwgcnVudGltZSwgY2IpIHtcbnZhciBsaW5lbm8gPSAwO1xudmFyIGNvbG5vID0gMDtcbnZhciBvdXRwdXQgPSBcIlwiO1xudHJ5IHtcbnZhciBwYXJlbnRUZW1wbGF0ZSA9IG51bGw7XG5vdXRwdXQgKz0gXCI8ZGl2PlxcbiAgICBEYXMgaGllciBpc3Qgb2Jlbi4uLlxcbiAgICBcIjtcbihwYXJlbnRUZW1wbGF0ZSA/IGZ1bmN0aW9uKGUsIGMsIGYsIHIsIGNiKSB7IGNiKFwiXCIpOyB9IDogY29udGV4dC5nZXRCbG9jayhcInVudGVuXCIpKShlbnYsIGNvbnRleHQsIGZyYW1lLCBydW50aW1lLCBmdW5jdGlvbih0XzIsdF8xKSB7XG5pZih0XzIpIHsgY2IodF8yKTsgcmV0dXJuOyB9XG5vdXRwdXQgKz0gdF8xO1xub3V0cHV0ICs9IFwiXFxuPC9kaXY+XFxuXCI7XG5pZihwYXJlbnRUZW1wbGF0ZSkge1xucGFyZW50VGVtcGxhdGUucm9vdFJlbmRlckZ1bmMoZW52LCBjb250ZXh0LCBmcmFtZSwgcnVudGltZSwgY2IpO1xufSBlbHNlIHtcbmNiKG51bGwsIG91dHB1dCk7XG59XG59KTtcbn0gY2F0Y2ggKGUpIHtcbiAgY2IocnVudGltZS5oYW5kbGVFcnJvcihlLCBsaW5lbm8sIGNvbG5vKSk7XG59XG59XG5mdW5jdGlvbiBiX3VudGVuKGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsIGNiKSB7XG52YXIgbGluZW5vID0gMjtcbnZhciBjb2xubyA9IDc7XG52YXIgb3V0cHV0ID0gXCJcIjtcbnRyeSB7XG52YXIgZnJhbWUgPSBmcmFtZS5wdXNoKHRydWUpO1xuY2IobnVsbCwgb3V0cHV0KTtcbjtcbn0gY2F0Y2ggKGUpIHtcbiAgY2IocnVudGltZS5oYW5kbGVFcnJvcihlLCBsaW5lbm8sIGNvbG5vKSk7XG59XG59XG5yZXR1cm4ge1xuYl91bnRlbjogYl91bnRlbixcbnJvb3Q6IHJvb3Rcbn07XG5cbn0pKCk7XG59KSgpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBzaGltKG51bmp1Y2tzLCBlbnYsIG51bmp1Y2tzLm51bmp1Y2tzUHJlY29tcGlsZWRbXCJvdXQvYXBwL2NsaWVudC92aWV3cy9tYXN0ZXIubmprXCJdICwgZGVwZW5kZW5jaWVzKSIsInZhciBudW5qdWNrcyA9IHJlcXVpcmUoXCJudW5qdWNrcy9icm93c2VyL251bmp1Y2tzLXNsaW1cIik7XG52YXIgZW52O1xuaWYgKCFudW5qdWNrcy5jdXJyZW50RW52KXtcblx0ZW52ID0gbnVuanVja3MuY3VycmVudEVudiA9IG5ldyBudW5qdWNrcy5FbnZpcm9ubWVudChbXSwgdW5kZWZpbmVkKTtcbn0gZWxzZSB7XG5cdGVudiA9IG51bmp1Y2tzLmN1cnJlbnRFbnY7XG59XG52YXIgZGVwZW5kZW5jaWVzID0gbnVuanVja3Mud2VicGFja0RlcGVuZGVuY2llcyB8fCAobnVuanVja3Mud2VicGFja0RlcGVuZGVuY2llcyA9IHt9KTtcbmRlcGVuZGVuY2llc1tcIn5zdGF0aWMvdmlld3MvbWFzdGVyLm5qa1wiXSA9IHJlcXVpcmUoIFwifnN0YXRpYy92aWV3cy9tYXN0ZXIubmprXCIgKTtcblxuXG5cblxudmFyIHNoaW0gPSByZXF1aXJlKFwiRDovQXRvbV9wcm9qZWN0cy9HYW1lL25vZGVfbW9kdWxlcy9udW5qdWNrcy1sb2FkZXIvcnVudGltZS1zaGltXCIpO1xuXG5cbihmdW5jdGlvbigpIHsobnVuanVja3MubnVuanVja3NQcmVjb21waWxlZCA9IG51bmp1Y2tzLm51bmp1Y2tzUHJlY29tcGlsZWQgfHwge30pW1wib3V0L2FwcC9jbGllbnQvdmlld3MvdGVzdENvbXBvbmVudC5uamtcIl0gPSAoZnVuY3Rpb24oKSB7XG5mdW5jdGlvbiByb290KGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsIGNiKSB7XG52YXIgbGluZW5vID0gMDtcbnZhciBjb2xubyA9IDA7XG52YXIgb3V0cHV0ID0gXCJcIjtcbnRyeSB7XG52YXIgcGFyZW50VGVtcGxhdGUgPSBudWxsO1xuZW52LmdldFRlbXBsYXRlKFwifnN0YXRpYy92aWV3cy9tYXN0ZXIubmprXCIsIHRydWUsIFwib3V0L2FwcC9jbGllbnQvdmlld3MvdGVzdENvbXBvbmVudC5uamtcIiwgZmFsc2UsIGZ1bmN0aW9uKHRfMyx0XzIpIHtcbmlmKHRfMykgeyBjYih0XzMpOyByZXR1cm47IH1cbnBhcmVudFRlbXBsYXRlID0gdF8yXG5mb3IodmFyIHRfMSBpbiBwYXJlbnRUZW1wbGF0ZS5ibG9ja3MpIHtcbmNvbnRleHQuYWRkQmxvY2sodF8xLCBwYXJlbnRUZW1wbGF0ZS5ibG9ja3NbdF8xXSk7XG59XG5vdXRwdXQgKz0gXCJcXG5cXG5cIjtcbihwYXJlbnRUZW1wbGF0ZSA/IGZ1bmN0aW9uKGUsIGMsIGYsIHIsIGNiKSB7IGNiKFwiXCIpOyB9IDogY29udGV4dC5nZXRCbG9jayhcInVudGVuXCIpKShlbnYsIGNvbnRleHQsIGZyYW1lLCBydW50aW1lLCBmdW5jdGlvbih0XzUsdF80KSB7XG5pZih0XzUpIHsgY2IodF81KTsgcmV0dXJuOyB9XG5vdXRwdXQgKz0gdF80O1xub3V0cHV0ICs9IFwiXFxuXCI7XG5pZihwYXJlbnRUZW1wbGF0ZSkge1xucGFyZW50VGVtcGxhdGUucm9vdFJlbmRlckZ1bmMoZW52LCBjb250ZXh0LCBmcmFtZSwgcnVudGltZSwgY2IpO1xufSBlbHNlIHtcbmNiKG51bGwsIG91dHB1dCk7XG59XG59KX0pO1xufSBjYXRjaCAoZSkge1xuICBjYihydW50aW1lLmhhbmRsZUVycm9yKGUsIGxpbmVubywgY29sbm8pKTtcbn1cbn1cbmZ1bmN0aW9uIGJfdW50ZW4oZW52LCBjb250ZXh0LCBmcmFtZSwgcnVudGltZSwgY2IpIHtcbnZhciBsaW5lbm8gPSAyO1xudmFyIGNvbG5vID0gMztcbnZhciBvdXRwdXQgPSBcIlwiO1xudHJ5IHtcbnZhciBmcmFtZSA9IGZyYW1lLnB1c2godHJ1ZSk7XG5vdXRwdXQgKz0gXCJcXG48ZGl2PlxcbiAgICBURVNUIVxcbiAgICA8c2xvdD48L3Nsb3Q+XFxuPC9kaXY+XFxuXCI7XG5jYihudWxsLCBvdXRwdXQpO1xuO1xufSBjYXRjaCAoZSkge1xuICBjYihydW50aW1lLmhhbmRsZUVycm9yKGUsIGxpbmVubywgY29sbm8pKTtcbn1cbn1cbnJldHVybiB7XG5iX3VudGVuOiBiX3VudGVuLFxucm9vdDogcm9vdFxufTtcblxufSkoKTtcbn0pKCk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaW0obnVuanVja3MsIGVudiwgbnVuanVja3MubnVuanVja3NQcmVjb21waWxlZFtcIm91dC9hcHAvY2xpZW50L3ZpZXdzL3Rlc3RDb21wb25lbnQubmprXCJdICwgZGVwZW5kZW5jaWVzKSIsInZhciBudW5qdWNrcyA9IHJlcXVpcmUoXCJudW5qdWNrcy9icm93c2VyL251bmp1Y2tzLXNsaW1cIik7XG52YXIgZW52O1xuaWYgKCFudW5qdWNrcy5jdXJyZW50RW52KXtcblx0ZW52ID0gbnVuanVja3MuY3VycmVudEVudiA9IG5ldyBudW5qdWNrcy5FbnZpcm9ubWVudChbXSwge1wiZGV2XCI6ZmFsc2UsXCJhdXRvZXNjYXBlXCI6dHJ1ZSxcInRocm93T25VbmRlZmluZWRcIjpmYWxzZSxcInRyaW1CbG9ja3NcIjpmYWxzZSxcImxzdHJpcEJsb2Nrc1wiOmZhbHNlfSk7XG59IGVsc2Uge1xuXHRlbnYgPSBudW5qdWNrcy5jdXJyZW50RW52O1xufVxudmFyIGRlcGVuZGVuY2llcyA9IG51bmp1Y2tzLndlYnBhY2tEZXBlbmRlbmNpZXMgfHwgKG51bmp1Y2tzLndlYnBhY2tEZXBlbmRlbmNpZXMgPSB7fSk7XG5kZXBlbmRlbmNpZXNbXCJ+YmRvL3ZpZXdzL21hc3Rlci5uamtcIl0gPSByZXF1aXJlKCBcIn5iZG8vdmlld3MvbWFzdGVyLm5qa1wiICk7XG5cblxuXG5cbnZhciBzaGltID0gcmVxdWlyZShcIkQ6L0F0b21fcHJvamVjdHMvR2FtZS9ub2RlX21vZHVsZXMvbnVuanVja3MtbG9hZGVyL3J1bnRpbWUtc2hpbVwiKTtcblxuXG4oZnVuY3Rpb24oKSB7KG51bmp1Y2tzLm51bmp1Y2tzUHJlY29tcGlsZWQgPSBudW5qdWNrcy5udW5qdWNrc1ByZWNvbXBpbGVkIHx8IHt9KVtcIm91dC9hcHAvdmlld3MvZ2FtZUxvYmJ5Lm5qa1wiXSA9IChmdW5jdGlvbigpIHtcbmZ1bmN0aW9uIHJvb3QoZW52LCBjb250ZXh0LCBmcmFtZSwgcnVudGltZSwgY2IpIHtcbnZhciBsaW5lbm8gPSAwO1xudmFyIGNvbG5vID0gMDtcbnZhciBvdXRwdXQgPSBcIlwiO1xudHJ5IHtcbnZhciBwYXJlbnRUZW1wbGF0ZSA9IG51bGw7XG5lbnYuZ2V0VGVtcGxhdGUoXCJ+YmRvL3ZpZXdzL21hc3Rlci5uamtcIiwgdHJ1ZSwgXCJvdXQvYXBwL3ZpZXdzL2dhbWVMb2JieS5uamtcIiwgZmFsc2UsIGZ1bmN0aW9uKHRfMyx0XzIpIHtcbmlmKHRfMykgeyBjYih0XzMpOyByZXR1cm47IH1cbnBhcmVudFRlbXBsYXRlID0gdF8yXG5mb3IodmFyIHRfMSBpbiBwYXJlbnRUZW1wbGF0ZS5ibG9ja3MpIHtcbmNvbnRleHQuYWRkQmxvY2sodF8xLCBwYXJlbnRUZW1wbGF0ZS5ibG9ja3NbdF8xXSk7XG59XG5vdXRwdXQgKz0gXCJcXG5cIjtcbihwYXJlbnRUZW1wbGF0ZSA/IGZ1bmN0aW9uKGUsIGMsIGYsIHIsIGNiKSB7IGNiKFwiXCIpOyB9IDogY29udGV4dC5nZXRCbG9jayhcImJvZHlcIikpKGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsIGZ1bmN0aW9uKHRfNSx0XzQpIHtcbmlmKHRfNSkgeyBjYih0XzUpOyByZXR1cm47IH1cbm91dHB1dCArPSB0XzQ7XG5vdXRwdXQgKz0gXCJcXG5cIjtcbmlmKHBhcmVudFRlbXBsYXRlKSB7XG5wYXJlbnRUZW1wbGF0ZS5yb290UmVuZGVyRnVuYyhlbnYsIGNvbnRleHQsIGZyYW1lLCBydW50aW1lLCBjYik7XG59IGVsc2Uge1xuY2IobnVsbCwgb3V0cHV0KTtcbn1cbn0pfSk7XG59IGNhdGNoIChlKSB7XG4gIGNiKHJ1bnRpbWUuaGFuZGxlRXJyb3IoZSwgbGluZW5vLCBjb2xubykpO1xufVxufVxuZnVuY3Rpb24gYl9ib2R5KGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsIGNiKSB7XG52YXIgbGluZW5vID0gMTtcbnZhciBjb2xubyA9IDM7XG52YXIgb3V0cHV0ID0gXCJcIjtcbnRyeSB7XG52YXIgZnJhbWUgPSBmcmFtZS5wdXNoKHRydWUpO1xub3V0cHV0ICs9IFwiXFxuXFxuPGNhbnZhcyBpcz1cXFwiZ2FtZS13aW5kb3dcXFwiPjwvY2FudmFzPlxcbjxzY3JpcHQ+XFxuICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uLmhvc3QpO1xcbiAgICBsZXQgd2ViU29ja2V0ID0gbmV3IFdlYlNvY2tldChgd3M6Ly8ke2xvY2F0aW9uLmhvc3R9L2FwaWApO1xcbiAgICB3ZWJTb2NrZXQub25vcGVuID0gZnVuY3Rpb24gKCkge1xcbiAgICAgICAgY29uc29sZS5sb2coXFxcIkNsaWVudCBpcyBjb25uZWN0ZWRcXFwiKTtcXG4gICAgICAgIHRoaXMuc2VuZChKU09OLnN0cmluZ2lmeSh7XFxuICAgICAgICAgICAgdHlwZTogXFxcImJyb2FkY2FzdFxcXCIsXFxuICAgICAgICAgICAgZGF0YTogXFxcImxvb29vbFxcXCJcXG4gICAgICAgIH0pKTtcXG4gICAgfTtcXG5cXG4gICAgd2ViU29ja2V0Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChkYXRhLCBmbGFncykge1xcbiAgICAgICAgY29uc29sZS5sb2coYFdlYlNvY2tldENsaWVudCBtZXNzYWdlOiBgLCBkYXRhKTtcXG4gICAgfVxcblxcbiAgICB3ZWJTb2NrZXQub25lcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xcbiAgICB9XFxuXFxuPC9zY3JpcHQ+XFxuXCI7XG5jYihudWxsLCBvdXRwdXQpO1xuO1xufSBjYXRjaCAoZSkge1xuICBjYihydW50aW1lLmhhbmRsZUVycm9yKGUsIGxpbmVubywgY29sbm8pKTtcbn1cbn1cbnJldHVybiB7XG5iX2JvZHk6IGJfYm9keSxcbnJvb3Q6IHJvb3Rcbn07XG5cbn0pKCk7XG59KSgpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBzaGltKG51bmp1Y2tzLCBlbnYsIG51bmp1Y2tzLm51bmp1Y2tzUHJlY29tcGlsZWRbXCJvdXQvYXBwL3ZpZXdzL2dhbWVMb2JieS5uamtcIl0gLCBkZXBlbmRlbmNpZXMpIiwidmFyIG51bmp1Y2tzID0gcmVxdWlyZShcIm51bmp1Y2tzL2Jyb3dzZXIvbnVuanVja3Mtc2xpbVwiKTtcbnZhciBlbnY7XG5pZiAoIW51bmp1Y2tzLmN1cnJlbnRFbnYpe1xuXHRlbnYgPSBudW5qdWNrcy5jdXJyZW50RW52ID0gbmV3IG51bmp1Y2tzLkVudmlyb25tZW50KFtdLCB1bmRlZmluZWQpO1xufSBlbHNlIHtcblx0ZW52ID0gbnVuanVja3MuY3VycmVudEVudjtcbn1cbnZhciBkZXBlbmRlbmNpZXMgPSBudW5qdWNrcy53ZWJwYWNrRGVwZW5kZW5jaWVzIHx8IChudW5qdWNrcy53ZWJwYWNrRGVwZW5kZW5jaWVzID0ge30pO1xuXG5cblxuXG52YXIgc2hpbSA9IHJlcXVpcmUoXCJEOi9BdG9tX3Byb2plY3RzL0dhbWUvbm9kZV9tb2R1bGVzL251bmp1Y2tzLWxvYWRlci9ydW50aW1lLXNoaW1cIik7XG5cblxuKGZ1bmN0aW9uKCkgeyhudW5qdWNrcy5udW5qdWNrc1ByZWNvbXBpbGVkID0gbnVuanVja3MubnVuanVja3NQcmVjb21waWxlZCB8fCB7fSlbXCJvdXQvYXBwL3ZpZXdzL2hlYWQubmprXCJdID0gKGZ1bmN0aW9uKCkge1xuZnVuY3Rpb24gcm9vdChlbnYsIGNvbnRleHQsIGZyYW1lLCBydW50aW1lLCBjYikge1xudmFyIGxpbmVubyA9IDA7XG52YXIgY29sbm8gPSAwO1xudmFyIG91dHB1dCA9IFwiXCI7XG50cnkge1xudmFyIHBhcmVudFRlbXBsYXRlID0gbnVsbDtcbm91dHB1dCArPSBcIjxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIj5cXG48bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCI+XFxuPG1ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJpZT1lZGdlXFxcIj5cXG48dGl0bGU+RG9jdW1lbnQ8L3RpdGxlPlxcblwiO1xuaWYocGFyZW50VGVtcGxhdGUpIHtcbnBhcmVudFRlbXBsYXRlLnJvb3RSZW5kZXJGdW5jKGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsIGNiKTtcbn0gZWxzZSB7XG5jYihudWxsLCBvdXRwdXQpO1xufVxuO1xufSBjYXRjaCAoZSkge1xuICBjYihydW50aW1lLmhhbmRsZUVycm9yKGUsIGxpbmVubywgY29sbm8pKTtcbn1cbn1cbnJldHVybiB7XG5yb290OiByb290XG59O1xuXG59KSgpO1xufSkoKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gc2hpbShudW5qdWNrcywgZW52LCBudW5qdWNrcy5udW5qdWNrc1ByZWNvbXBpbGVkW1wib3V0L2FwcC92aWV3cy9oZWFkLm5qa1wiXSAsIGRlcGVuZGVuY2llcykiLCJ2YXIgbnVuanVja3MgPSByZXF1aXJlKFwibnVuanVja3MvYnJvd3Nlci9udW5qdWNrcy1zbGltXCIpO1xudmFyIGVudjtcbmlmICghbnVuanVja3MuY3VycmVudEVudil7XG5cdGVudiA9IG51bmp1Y2tzLmN1cnJlbnRFbnYgPSBuZXcgbnVuanVja3MuRW52aXJvbm1lbnQoW10sIHtcImRldlwiOmZhbHNlLFwiYXV0b2VzY2FwZVwiOnRydWUsXCJ0aHJvd09uVW5kZWZpbmVkXCI6ZmFsc2UsXCJ0cmltQmxvY2tzXCI6ZmFsc2UsXCJsc3RyaXBCbG9ja3NcIjpmYWxzZX0pO1xufSBlbHNlIHtcblx0ZW52ID0gbnVuanVja3MuY3VycmVudEVudjtcbn1cbnZhciBkZXBlbmRlbmNpZXMgPSBudW5qdWNrcy53ZWJwYWNrRGVwZW5kZW5jaWVzIHx8IChudW5qdWNrcy53ZWJwYWNrRGVwZW5kZW5jaWVzID0ge30pO1xuZGVwZW5kZW5jaWVzW1wifmJkby92aWV3cy9tYXN0ZXIubmprXCJdID0gcmVxdWlyZSggXCJ+YmRvL3ZpZXdzL21hc3Rlci5uamtcIiApO1xuXG5cblxuXG52YXIgc2hpbSA9IHJlcXVpcmUoXCJEOi9BdG9tX3Byb2plY3RzL0dhbWUvbm9kZV9tb2R1bGVzL251bmp1Y2tzLWxvYWRlci9ydW50aW1lLXNoaW1cIik7XG5cblxuKGZ1bmN0aW9uKCkgeyhudW5qdWNrcy5udW5qdWNrc1ByZWNvbXBpbGVkID0gbnVuanVja3MubnVuanVja3NQcmVjb21waWxlZCB8fCB7fSlbXCJvdXQvYXBwL3ZpZXdzL2hvbWUubmprXCJdID0gKGZ1bmN0aW9uKCkge1xuZnVuY3Rpb24gcm9vdChlbnYsIGNvbnRleHQsIGZyYW1lLCBydW50aW1lLCBjYikge1xudmFyIGxpbmVubyA9IDA7XG52YXIgY29sbm8gPSAwO1xudmFyIG91dHB1dCA9IFwiXCI7XG50cnkge1xudmFyIHBhcmVudFRlbXBsYXRlID0gbnVsbDtcbmVudi5nZXRUZW1wbGF0ZShcIn5iZG8vdmlld3MvbWFzdGVyLm5qa1wiLCB0cnVlLCBcIm91dC9hcHAvdmlld3MvaG9tZS5uamtcIiwgZmFsc2UsIGZ1bmN0aW9uKHRfMyx0XzIpIHtcbmlmKHRfMykgeyBjYih0XzMpOyByZXR1cm47IH1cbnBhcmVudFRlbXBsYXRlID0gdF8yXG5mb3IodmFyIHRfMSBpbiBwYXJlbnRUZW1wbGF0ZS5ibG9ja3MpIHtcbmNvbnRleHQuYWRkQmxvY2sodF8xLCBwYXJlbnRUZW1wbGF0ZS5ibG9ja3NbdF8xXSk7XG59XG5vdXRwdXQgKz0gXCJcXG5cIjtcbihwYXJlbnRUZW1wbGF0ZSA/IGZ1bmN0aW9uKGUsIGMsIGYsIHIsIGNiKSB7IGNiKFwiXCIpOyB9IDogY29udGV4dC5nZXRCbG9jayhcImJvZHlcIikpKGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsIGZ1bmN0aW9uKHRfNSx0XzQpIHtcbmlmKHRfNSkgeyBjYih0XzUpOyByZXR1cm47IH1cbm91dHB1dCArPSB0XzQ7XG5vdXRwdXQgKz0gXCJcXG5cIjtcbmlmKHBhcmVudFRlbXBsYXRlKSB7XG5wYXJlbnRUZW1wbGF0ZS5yb290UmVuZGVyRnVuYyhlbnYsIGNvbnRleHQsIGZyYW1lLCBydW50aW1lLCBjYik7XG59IGVsc2Uge1xuY2IobnVsbCwgb3V0cHV0KTtcbn1cbn0pfSk7XG59IGNhdGNoIChlKSB7XG4gIGNiKHJ1bnRpbWUuaGFuZGxlRXJyb3IoZSwgbGluZW5vLCBjb2xubykpO1xufVxufVxuZnVuY3Rpb24gYl9ib2R5KGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsIGNiKSB7XG52YXIgbGluZW5vID0gMTtcbnZhciBjb2xubyA9IDM7XG52YXIgb3V0cHV0ID0gXCJcIjtcbnRyeSB7XG52YXIgZnJhbWUgPSBmcmFtZS5wdXNoKHRydWUpO1xub3V0cHV0ICs9IFwiXFxuPGEgaHJlZj1cXFwiL1xcXCIgaXM9XFxcInZpZXctbGlua1xcXCIgdGVzdD1cXFwidHJvbG9sb2xvbFxcXCI+R08gSE9NRTwvYT5cXG48YSBocmVmPVxcXCIvY29uZmlnL2NvbmZpZ1xcXCIgaXM9XFxcInZpZXctbGlua1xcXCI+R08gQ09ORklHISEhISEhISE8L2E+XFxuPGEgaHJlZj1cXFwiL2NvbmZpZy9jb25maWdcXFwiIGlzPVxcXCJ2aWV3LWxpbmtcXFwiPmxhbGFsYTwvYT5cXG48aW1nIHNyYz1cXFwiL2ltYWdlcy9oZWxsb1dvcmxkLmpwZ1xcXCIgYWx0PVxcXCJ0ZXN0XFxcIj5cXG5cIjtcbm91dHB1dCArPSBcIlxcblwiO1xuY2IobnVsbCwgb3V0cHV0KTtcbjtcbn0gY2F0Y2ggKGUpIHtcbiAgY2IocnVudGltZS5oYW5kbGVFcnJvcihlLCBsaW5lbm8sIGNvbG5vKSk7XG59XG59XG5yZXR1cm4ge1xuYl9ib2R5OiBiX2JvZHksXG5yb290OiByb290XG59O1xuXG59KSgpO1xufSkoKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gc2hpbShudW5qdWNrcywgZW52LCBudW5qdWNrcy5udW5qdWNrc1ByZWNvbXBpbGVkW1wib3V0L2FwcC92aWV3cy9ob21lLm5qa1wiXSAsIGRlcGVuZGVuY2llcykiLCJ2YXIgbnVuanVja3MgPSByZXF1aXJlKFwibnVuanVja3MvYnJvd3Nlci9udW5qdWNrcy1zbGltXCIpO1xudmFyIGVudjtcbmlmICghbnVuanVja3MuY3VycmVudEVudil7XG5cdGVudiA9IG51bmp1Y2tzLmN1cnJlbnRFbnYgPSBuZXcgbnVuanVja3MuRW52aXJvbm1lbnQoW10sIHVuZGVmaW5lZCk7XG59IGVsc2Uge1xuXHRlbnYgPSBudW5qdWNrcy5jdXJyZW50RW52O1xufVxudmFyIGRlcGVuZGVuY2llcyA9IG51bmp1Y2tzLndlYnBhY2tEZXBlbmRlbmNpZXMgfHwgKG51bmp1Y2tzLndlYnBhY2tEZXBlbmRlbmNpZXMgPSB7fSk7XG5kZXBlbmRlbmNpZXNbXCJ+YmRvL3ZpZXdzL2hlYWQubmprXCJdID0gcmVxdWlyZSggXCJ+YmRvL3ZpZXdzL2hlYWQubmprXCIgKTtcblxuXG5cblxudmFyIHNoaW0gPSByZXF1aXJlKFwiRDovQXRvbV9wcm9qZWN0cy9HYW1lL25vZGVfbW9kdWxlcy9udW5qdWNrcy1sb2FkZXIvcnVudGltZS1zaGltXCIpO1xuXG5cbihmdW5jdGlvbigpIHsobnVuanVja3MubnVuanVja3NQcmVjb21waWxlZCA9IG51bmp1Y2tzLm51bmp1Y2tzUHJlY29tcGlsZWQgfHwge30pW1wib3V0L2FwcC92aWV3cy9tYXN0ZXIubmprXCJdID0gKGZ1bmN0aW9uKCkge1xuZnVuY3Rpb24gcm9vdChlbnYsIGNvbnRleHQsIGZyYW1lLCBydW50aW1lLCBjYikge1xudmFyIGxpbmVubyA9IDA7XG52YXIgY29sbm8gPSAwO1xudmFyIG91dHB1dCA9IFwiXCI7XG50cnkge1xudmFyIHBhcmVudFRlbXBsYXRlID0gbnVsbDtcbm91dHB1dCArPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG5cXG48aGVhZD5cXG4gICAgXCI7XG52YXIgdGFza3MgPSBbXTtcbnRhc2tzLnB1c2goXG5mdW5jdGlvbihjYWxsYmFjaykge1xuZW52LmdldFRlbXBsYXRlKFwifmJkby92aWV3cy9oZWFkLm5qa1wiLCBmYWxzZSwgXCJvdXQvYXBwL3ZpZXdzL21hc3Rlci5uamtcIiwgZmFsc2UsIGZ1bmN0aW9uKHRfMix0XzEpIHtcbmlmKHRfMikgeyBjYih0XzIpOyByZXR1cm47IH1cbmNhbGxiYWNrKG51bGwsdF8xKTt9KTtcbn0pO1xudGFza3MucHVzaChcbmZ1bmN0aW9uKHRlbXBsYXRlLCBjYWxsYmFjayl7XG50ZW1wbGF0ZS5yZW5kZXIoY29udGV4dC5nZXRWYXJpYWJsZXMoKSwgZnJhbWUsIGZ1bmN0aW9uKHRfNCx0XzMpIHtcbmlmKHRfNCkgeyBjYih0XzQpOyByZXR1cm47IH1cbmNhbGxiYWNrKG51bGwsdF8zKTt9KTtcbn0pO1xudGFza3MucHVzaChcbmZ1bmN0aW9uKHJlc3VsdCwgY2FsbGJhY2spe1xub3V0cHV0ICs9IHJlc3VsdDtcbmNhbGxiYWNrKG51bGwpO1xufSk7XG5lbnYud2F0ZXJmYWxsKHRhc2tzLCBmdW5jdGlvbigpe1xub3V0cHV0ICs9IFwiXFxuICAgIFwiO1xuaWYocnVudGltZS5tZW1iZXJMb29rdXAoKHJ1bnRpbWUubWVtYmVyTG9va3VwKChydW50aW1lLmNvbnRleHRPckZyYW1lTG9va3VwKGNvbnRleHQsIGZyYW1lLCBcInByb2Nlc3NcIikpLFwiZW52XCIpKSxcIk5PREVfRU5WXCIpID09PSBcImRldmVsb3BtZW50XCIpIHtcbm91dHB1dCArPSBcIlxcbiAgICA8c2NyaXB0IHNyYz1cXFwiL2pzL2Jyb3dzZXItc291cmNlLW1hcC1zdXBwb3J0LmpzXFxcIj48L3NjcmlwdD5cXG4gICAgPHNjcmlwdD5zb3VyY2VNYXBTdXBwb3J0Lmluc3RhbGwoKTs8L3NjcmlwdD5cXG4gICAgXCI7XG47XG59XG5vdXRwdXQgKz0gXCJcXG4gICAgPGxpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiBocmVmPVxcXCIvY3NzL2J1bmRsZS5jc3NcXFwiPlxcbjwvaGVhZD5cXG5cXG48Ym9keT5cXG4gICAgPHNjcmlwdD5cXG4gICAgICAgIHdpbmRvdy5wcm9jZXNzID0gXCI7XG5vdXRwdXQgKz0gcnVudGltZS5zdXBwcmVzc1ZhbHVlKGVudi5nZXRGaWx0ZXIoXCJzYWZlXCIpLmNhbGwoY29udGV4dCwgZW52LmdldEZpbHRlcihcImpzb25cIikuY2FsbChjb250ZXh0LCBydW50aW1lLmNvbnRleHRPckZyYW1lTG9va3VwKGNvbnRleHQsIGZyYW1lLCBcInByb2Nlc3NcIikpKSwgZW52Lm9wdHMuYXV0b2VzY2FwZSk7XG5vdXRwdXQgKz0gXCI7XFxuICAgIDwvc2NyaXB0PlxcbiAgICA8dmlldy1yb3V0ZXI+XCI7XG4ocGFyZW50VGVtcGxhdGUgPyBmdW5jdGlvbihlLCBjLCBmLCByLCBjYikgeyBjYihcIlwiKTsgfSA6IGNvbnRleHQuZ2V0QmxvY2soXCJib2R5XCIpKShlbnYsIGNvbnRleHQsIGZyYW1lLCBydW50aW1lLCBmdW5jdGlvbih0XzYsdF81KSB7XG5pZih0XzYpIHsgY2IodF82KTsgcmV0dXJuOyB9XG5vdXRwdXQgKz0gdF81O1xub3V0cHV0ICs9IFwiPC92aWV3LXJvdXRlcj5cXG4gICAgPHNjcmlwdCBkZWZlciBzcmM9XFxcIi9qcy92ZW5kb3IuYnVuZGxlLmpzXFxcIj48L3NjcmlwdD5cXG4gICAgPHNjcmlwdCBkZWZlciBzcmM9XFxcIi9qcy90ZW1wbGF0ZXMuYnVuZGxlLmpzXFxcIj48L3NjcmlwdD5cXG4gICAgPHNjcmlwdCBkZWZlciBzcmM9XFxcIi9qcy9idW5kbGUuanNcXFwiPjwvc2NyaXB0PlxcbjwvYm9keT5cXG5cXG48L2h0bWw+XFxuXCI7XG5pZihwYXJlbnRUZW1wbGF0ZSkge1xucGFyZW50VGVtcGxhdGUucm9vdFJlbmRlckZ1bmMoZW52LCBjb250ZXh0LCBmcmFtZSwgcnVudGltZSwgY2IpO1xufSBlbHNlIHtcbmNiKG51bGwsIG91dHB1dCk7XG59XG59KX0pO1xufSBjYXRjaCAoZSkge1xuICBjYihydW50aW1lLmhhbmRsZUVycm9yKGUsIGxpbmVubywgY29sbm8pKTtcbn1cbn1cbmZ1bmN0aW9uIGJfYm9keShlbnYsIGNvbnRleHQsIGZyYW1lLCBydW50aW1lLCBjYikge1xudmFyIGxpbmVubyA9IDE2O1xudmFyIGNvbG5vID0gMjA7XG52YXIgb3V0cHV0ID0gXCJcIjtcbnRyeSB7XG52YXIgZnJhbWUgPSBmcmFtZS5wdXNoKHRydWUpO1xuY2IobnVsbCwgb3V0cHV0KTtcbjtcbn0gY2F0Y2ggKGUpIHtcbiAgY2IocnVudGltZS5oYW5kbGVFcnJvcihlLCBsaW5lbm8sIGNvbG5vKSk7XG59XG59XG5yZXR1cm4ge1xuYl9ib2R5OiBiX2JvZHksXG5yb290OiByb290XG59O1xuXG59KSgpO1xufSkoKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gc2hpbShudW5qdWNrcywgZW52LCBudW5qdWNrcy5udW5qdWNrc1ByZWNvbXBpbGVkW1wib3V0L2FwcC92aWV3cy9tYXN0ZXIubmprXCJdICwgZGVwZW5kZW5jaWVzKSJdLCJzb3VyY2VSb290IjoiIn0=