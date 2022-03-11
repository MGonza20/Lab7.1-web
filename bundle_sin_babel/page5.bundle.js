/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bar.js":
/*!********************!*\
  !*** ./src/bar.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bar\": () => (/* binding */ bar)\n/* harmony export */ });\nvar bar = function bar(val) {\n  var bar = document.createElement('progress');\n  bar.setAttribute('value', \"\".concat(val));\n  bar.setAttribute('max', '100');\n  bar.append(\"\".concat(val, \"%\"));\n  return bar;\n};\n\n//# sourceURL=webpack://Lab6.1/./src/bar.js?");

/***/ }),

/***/ "./src/brElement.js":
/*!**************************!*\
  !*** ./src/brElement.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"brElement\": () => (/* binding */ brElement)\n/* harmony export */ });\nvar brElement = function brElement() {\n  var brElement = document.createElement('br');\n  return brElement;\n};\n\n//# sourceURL=webpack://Lab6.1/./src/brElement.js?");

/***/ }),

/***/ "./src/bsGrid.js":
/*!***********************!*\
  !*** ./src/bsGrid.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bsGrid\": () => (/* binding */ bsGrid)\n/* harmony export */ });\nvar bsGrid = function bsGrid(img1, img2, img3, d1, d2, d3) {\n  var bsGrid = document.createElement('div');\n  bsGrid.setAttribute('class', 'container');\n  var gridRow = document.createElement('div');\n  gridRow.setAttribute('class', 'row');\n  var bsCol1 = document.createElement('div');\n  bsCol1.setAttribute('class', 'col');\n  var bsCol2 = document.createElement('div');\n  bsCol2.setAttribute('class', 'col');\n  var bsCol3 = document.createElement('div');\n  bsCol3.setAttribute('class', 'col');\n  bsGrid.append(gridRow);\n  gridRow.append(bsCol1);\n  gridRow.append(bsCol2);\n  gridRow.append(bsCol3);\n  bsCol1.append(img1);\n  bsCol2.append(img2);\n  bsCol3.append(img3);\n  return bsGrid;\n};\n\n//# sourceURL=webpack://Lab6.1/./src/bsGrid.js?");

/***/ }),

/***/ "./src/page5/magsOptions.js":
/*!**********************************!*\
  !*** ./src/page5/magsOptions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.scss */ \"./src/main.scss\");\n/* harmony import */ var _images_toscanaItalia2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/toscanaItalia2.jpg */ \"./src/images/toscanaItalia2.jpg\");\n/* harmony import */ var _images_TheNewYorker_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/TheNewYorker.jpg */ \"./src/images/TheNewYorker.jpg\");\n/* harmony import */ var _images_tailand_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/tailand.jpg */ \"./src/images/tailand.jpg\");\n/* harmony import */ var _brElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../brElement */ \"./src/brElement.js\");\n\n\n\n\n\n\nvar _require = __webpack_require__(/*! ../bar.js */ \"./src/bar.js\"),\n    bar = _require.bar;\n\nvar _require2 = __webpack_require__(/*! ../bsGrid.js */ \"./src/bsGrid.js\"),\n    bsGrid = _require2.bsGrid; //Crear body\n\n\nvar body = document.body; //Crear un div para colocar elementos\n\nvar div = document.createElement('div');\nvar divGrid = document.createElement('div'); //Crear titulo y su contenedor\n\nvar divTitle = document.createElement('div');\nvar title = document.createElement('h1'); //Crear figuras para colocar revistas\n\nvar fig1 = document.createElement('figure');\nvar fig2 = document.createElement('figure');\nvar fig3 = document.createElement('figure'); //crear imgs \n\nvar img1 = document.createElement('img');\nvar img2 = document.createElement('img');\nvar img3 = document.createElement('img'); //Crear descripciones de las imagenes \n\nvar figCap1 = document.createElement('figcaption');\nvar figCap2 = document.createElement('figcaption');\nvar figCap3 = document.createElement('figcaption'); //Create anchors to go to pages \n\nvar anch1 = document.createElement('a');\nvar anch2 = document.createElement('a');\nvar anch3 = document.createElement('a'); //Create details for clue\n\nvar dets = document.createElement('details');\nvar sum = document.createElement('summary');\nvar olElement = document.createElement('ol');\nvar li1 = document.createElement('li');\nbody.append(div);\ndiv.append(divTitle);\ndiv.append(divGrid);\ndivTitle.append(title);\ntitle.append('Elige una revista');\nfig1.append(anch1);\nanch1.setAttribute('href', '../page6.html');\nimg1.setAttribute('src', _images_toscanaItalia2_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nimg1.setAttribute('width', '300');\nanch1.appendChild(img1);\nfig1.append(figCap1);\nfig1.append(\"Viajes, Toscana\");\nfig2.append(anch2);\nanch2.setAttribute('href', '../page7.html');\nimg2.setAttribute('src', _images_TheNewYorker_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nimg2.setAttribute('width', '300');\nanch2.appendChild(img2);\nfig2.append(figCap2);\nfig2.append(\"The New Yorker, New York\");\nfig3.append(anch3);\nanch3.setAttribute('href', '../page6.html');\nimg3.setAttribute('src', _images_tailand_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nimg3.setAttribute('width', '300');\nanch3.append(img3);\nfig3.append(figCap3);\nfig3.append(\"Viajar, Tailandia\");\ndivGrid.appendChild(bsGrid(fig1, fig2, fig3));\ndiv.append(dets);\ndets.append(sum);\nsum.append('Pista');\ndets.append(olElement);\nolElement.append(li1);\nli1.append('The New Yorker tiene una fecha.');\ndiv.append((0,_brElement__WEBPACK_IMPORTED_MODULE_4__.brElement)());\ndiv.append(bar(37.5));\n\n//# sourceURL=webpack://Lab6.1/./src/page5/magsOptions.js?");

/***/ }),

/***/ "./src/images/TheNewYorker.jpg":
/*!*************************************!*\
  !*** ./src/images/TheNewYorker.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/448e8f3ae175e958d892972e411b997b.jpg\");\n\n//# sourceURL=webpack://Lab6.1/./src/images/TheNewYorker.jpg?");

/***/ }),

/***/ "./src/images/tailand.jpg":
/*!********************************!*\
  !*** ./src/images/tailand.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/f36736bbb5cc8324f4fb713e8b528e43.jpg\");\n\n//# sourceURL=webpack://Lab6.1/./src/images/tailand.jpg?");

/***/ }),

/***/ "./src/images/toscanaItalia2.jpg":
/*!***************************************!*\
  !*** ./src/images/toscanaItalia2.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/d8dca7baecc9d79f522dccb6733995cd.jpg\");\n\n//# sourceURL=webpack://Lab6.1/./src/images/toscanaItalia2.jpg?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Lab6.1/./src/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/page5/magsOptions.js");
/******/ 	
/******/ })()
;