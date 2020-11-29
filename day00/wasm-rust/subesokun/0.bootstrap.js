(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/wasm_aoc.js":
/*!**************************!*\
  !*** ../pkg/wasm_aoc.js ***!
  \**************************/
/*! exports provided: run_solution_star1, run_solution_star2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wasm_aoc_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_aoc_bg.wasm */ "../pkg/wasm_aoc_bg.wasm");
/* harmony import */ var _wasm_aoc_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm_aoc_bg.js */ "../pkg/wasm_aoc_bg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "run_solution_star1", function() { return _wasm_aoc_bg_js__WEBPACK_IMPORTED_MODULE_1__["run_solution_star1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "run_solution_star2", function() { return _wasm_aoc_bg_js__WEBPACK_IMPORTED_MODULE_1__["run_solution_star2"]; });




/***/ }),

/***/ "../pkg/wasm_aoc_bg.js":
/*!*****************************!*\
  !*** ../pkg/wasm_aoc_bg.js ***!
  \*****************************/
/*! exports provided: run_solution_star1, run_solution_star2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run_solution_star1", function() { return run_solution_star1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run_solution_star2", function() { return run_solution_star2; });
/* harmony import */ var _wasm_aoc_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_aoc_bg.wasm */ "../pkg/wasm_aoc_bg.wasm");


let WASM_VECTOR_LEN = 0;

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _wasm_aoc_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint8Memory0 = new Uint8Array(_wasm_aoc_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint8Memory0;
}

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}
/**
* @param {string} input_txt_string
* @returns {number}
*/
function run_solution_star1(input_txt_string) {
    var ptr0 = passStringToWasm0(input_txt_string, _wasm_aoc_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _wasm_aoc_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
    var len0 = WASM_VECTOR_LEN;
    var ret = _wasm_aoc_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["run_solution_star1"](ptr0, len0);
    return ret;
}

/**
* @param {string} input_txt_string
* @returns {number}
*/
function run_solution_star2(input_txt_string) {
    var ptr0 = passStringToWasm0(input_txt_string, _wasm_aoc_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _wasm_aoc_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
    var len0 = WASM_VECTOR_LEN;
    var ret = _wasm_aoc_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["run_solution_star2"](ptr0, len0);
    return ret;
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../pkg/wasm_aoc_bg.wasm":
/*!*******************************!*\
  !*** ../pkg/wasm_aoc_bg.wasm ***!
  \*******************************/
/*! exports provided: memory, run_solution_star1, run_solution_star2, __wbindgen_malloc, __wbindgen_realloc */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];
__webpack_require__.r(exports);
// export exports from WebAssembly module
for(var name in wasmExports) if(name != "__webpack_init__") exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)


// exec wasm module
wasmExports["__webpack_init__"]()

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var wasm_aoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-aoc */ "../pkg/wasm_aoc.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./index.css");




function runSolution(inputFileTxt) {
    const elemStar1Result = document.getElementById('star1-result');
    const elemStar2Result = document.getElementById('star2-result');
    const elemStar1Duration = document.getElementById('star1-duration');
    const elemStar2Duration = document.getElementById('star2-duration');

    if (inputFileTxt !== undefined) {
        const t0Star1 = performance.now();
        const resultStar1 = wasm_aoc__WEBPACK_IMPORTED_MODULE_0__["run_solution_star1"](inputFileTxt);
        const t1Star1 = performance.now();
        elemStar1Result.innerText = resultStar1;
        elemStar1Duration.innerText = (t1Star1 - t0Star1).toFixed(2) + 'ms';

        const t0Star2 = performance.now();
        const resultStar2 = wasm_aoc__WEBPACK_IMPORTED_MODULE_0__["run_solution_star2"](inputFileTxt);
        const t1Star2 = performance.now();
        elemStar2Result.innerText = resultStar2;
        elemStar2Duration.innerText = (t1Star2 - t0Star2).toFixed(2) + 'ms';
    } else {
        console.error('could not read input.txt file');
    }
}

function openFile(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function() {
        runSolution(reader.result);
    };
    reader.readAsText(input.files[0]);
};
window.openFile = openFile;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./index.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./index.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".grid-container {\n    margin-top: 10px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 5px 5px;\n    grid-template-areas: \"star1 star1-result star1-duration\" \"star2 star2-result star2-duration\";\n}\n\n.star1 {\n    grid-area: star1;\n}\n\n.star1-result {\n    grid-area: star1-result;\n}\n\n.star1-duration {\n    grid-area: star1-duration;\n}\n\n.star2 {\n    grid-area: star2;\n}\n\n.star2-result {\n    grid-area: star2-result;\n}\n\n.star2-duration {\n    grid-area: star2-duration;\n}", "",{"version":3,"sources":["webpack://./index.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,aAAa;IACb,kCAAkC;IAClC,2BAA2B;IAC3B,YAAY;IACZ,4FAA4F;AAChG;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":[".grid-container {\n    margin-top: 10px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 5px 5px;\n    grid-template-areas: \"star1 star1-result star1-duration\" \"star2 star2-result star2-duration\";\n}\n\n.star1 {\n    grid-area: star1;\n}\n\n.star1-result {\n    grid-area: star1-result;\n}\n\n.star1-duration {\n    grid-area: star1-duration;\n}\n\n.star2 {\n    grid-area: star2;\n}\n\n.star2-result {\n    grid-area: star2-result;\n}\n\n.star2-duration {\n    grid-area: star2-duration;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=0.bootstrap.js.map