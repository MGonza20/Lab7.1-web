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

/***/ "./src/images/duneBook.jpg":
/*!*********************************!*\
  !*** ./src/images/duneBook.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/36efc24dbd1480ab09105f5f9e0160d7.jpg\");\n\n//# sourceURL=webpack://Lab6.1/./src/images/duneBook.jpg?");

/***/ }),

/***/ "./src/images/midnight.jpg":
/*!*********************************!*\
  !*** ./src/images/midnight.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/86485e2a6f8bcd734d1947fe94bf6949.jpg\");\n\n//# sourceURL=webpack://Lab6.1/./src/images/midnight.jpg?");

/***/ }),

/***/ "./src/images/pi.jpg":
/*!***************************!*\
  !*** ./src/images/pi.jpg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/8fba831ed940061337167c40cfc66b1b.jpg\");\n\n//# sourceURL=webpack://Lab6.1/./src/images/pi.jpg?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Lab6.1/./src/main.scss?");

/***/ }),

/***/ "./src/orderDivs.scss":
/*!****************************!*\
  !*** ./src/orderDivs.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Lab6.1/./src/orderDivs.scss?");

/***/ }),

/***/ "./src/bsGrid.js":
/*!***********************!*\
  !*** ./src/bsGrid.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bsGrid\": () => (/* binding */ bsGrid)\n/* harmony export */ });\nconst bsGrid = (img1, img2, img3, d1, d2, d3) => {\n\n    const bsGrid = document.createElement('div');\n    bsGrid.setAttribute('class', 'container');\n    const gridRow = document.createElement('div');\n    gridRow.setAttribute('class', 'row');\n\n    \n    const bsCol1 = document.createElement('div');\n    bsCol1.setAttribute('class', 'col');\n    const bsCol2 = document.createElement('div');\n    bsCol2.setAttribute('class', 'col');\n    const bsCol3 = document.createElement('div');\n    bsCol3.setAttribute('class', 'col');\n\n    bsGrid.append(gridRow);\n    \n\n    gridRow.append(bsCol1);\n    gridRow.append(bsCol2);\n    gridRow.append(bsCol3);\n\n    bsCol1.append(img1);\n    bsCol2.append(img2);\n    bsCol3.append(img3);\n\n\n    return bsGrid;\n}\n\n//# sourceURL=webpack://Lab6.1/./src/bsGrid.js?");

/***/ }),

/***/ "./src/page9/seeBooks.js":
/*!*******************************!*\
  !*** ./src/page9/seeBooks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.scss */ \"./src/main.scss\");\n/* harmony import */ var _orderDivs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../orderDivs.scss */ \"./src/orderDivs.scss\");\n/* harmony import */ var _images_duneBook_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/duneBook.jpg */ \"./src/images/duneBook.jpg\");\n/* harmony import */ var _images_midnight_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/midnight.jpg */ \"./src/images/midnight.jpg\");\n/* harmony import */ var _images_pi_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/pi.jpg */ \"./src/images/pi.jpg\");\n\n\n\n\n\n\n\n\n//Crear body\nconst body = document.body;\n\n//Crear un div para colocar elementos\nconst div = document.createElement('div');\n\nconst divGrid = document.createElement('div');\n\n//Crear tabla \nconst table = document.createElement('table');\n\n//Crear cuerpo de tabla \nconst tBody = document.createElement('tbody');\n\n//Crear fila\nconst tRow = document.createElement('tr');\n//Crear columna\nconst tD1 = document.createElement('td');\nconst tD2 = document.createElement('td');\nconst tD3 = document.createElement('td');\n\n\n//Crear figuras para colocar revistas\nconst fig1 = document.createElement('figure');\nconst fig2 = document.createElement('figure');\nconst fig3 = document.createElement('figure');\n\n//crear imgs \nconst img1 = document.createElement('img');\nconst img2 = document.createElement('img');\nconst img3 = document.createElement('img');\n\n//Crear descripciones de las imagenes \nconst figCap1 = document.createElement('figcaption');\nconst figCap2 = document.createElement('figcaption');\nconst figCap3 = document.createElement('figcaption');\n\n//Create anchors to go to pages \nconst anch1 = document.createElement('a');\nconst anch2 = document.createElement('a');\nconst anch3 = document.createElement('a');\n\n//Create back button\nconst backBtn = document.createElement('button');\n\nconst {bsGrid} = __webpack_require__(/*! ../bsGrid.js */ \"./src/bsGrid.js\");\n\n\nbody.append(div);\ndiv.append(divGrid);\ndiv.append(backBtn);\n\n\n//tD1.append(fig1);\nfig1.append(img1);\nimg1.setAttribute('src', _images_midnight_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nimg1.setAttribute('width', '300');\nfig1.append(figCap1);\nfig1.append(\"The midnight library\");\n\n//tD2.append(fig2);\nfig2.append(img2);\nimg2.setAttribute('src', _images_duneBook_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nimg2.setAttribute('width', '275');\nfig2.append(figCap2);\nfig2.append(\"Dune\");\n\n//tD3.append(fig3);\nfig3.append(img3);\nimg3.setAttribute('src', _images_pi_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nimg3.setAttribute('width', '300');\nfig3.append(figCap3);\nfig3.append(\"The life of pi\");\n\ndivGrid.appendChild(bsGrid(fig1,fig2,fig3));\n\n\nbackBtn.append(\"back\");\nbackBtn.setAttribute('id', 'backBtn');\n\ndocument.getElementById(\"backBtn\").onclick = function () {\n    location.href = \"../page10.html\";\n};\n\n//# sourceURL=webpack://Lab6.1/./src/page9/seeBooks.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/page9/seeBooks.js");
/******/ 	
/******/ })()
;