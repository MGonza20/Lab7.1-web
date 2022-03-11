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

/***/ "./src/page10/selectTime.js":
/*!**********************************!*\
  !*** ./src/page10/selectTime.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.scss */ \"./src/main.scss\");\n/* harmony import */ var _orderDivs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../orderDivs.scss */ \"./src/orderDivs.scss\");\n/* harmony import */ var _images_tiktok_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/tiktok.gif */ \"./src/images/tiktok.gif\");\n\n\n\n\nvar _require = __webpack_require__(/*! ../bar.js */ \"./src/bar.js\"),\n    bar = _require.bar;\n\nvar _require2 = __webpack_require__(/*! ../brElement.js */ \"./src/brElement.js\"),\n    brElement = _require2.brElement; //Colocar body\n\n\nvar body = document.body; //Hacer un div para colocar elementos\n\nvar div = document.createElement('div');\nvar divTitle = document.createElement('div'); //Crear elemento para colocar titulo\n\nvar title = document.createElement('h1'); //Crear elemento para subtitulo \n\nvar subtitle = document.createElement('h2'); //Crear elemento para img\n\nvar img = document.createElement('img'); //Crear elemento para colocar texto\n\nvar text = document.createElement('p'); //Div para texto\n\nvar textDiv = document.createElement('div'); //texto para subtitulo de pregunta\n\nvar subQuestion = document.createElement('h2'); //div para colocar pregunta\n\nvar divQ = document.createElement('div');\nvar btnTime1 = document.createElement('button');\nvar btnTime2 = document.createElement('button');\nvar btnTime3 = document.createElement('button'); //tag bold para pregunta\n\nvar bold = document.createElement('b');\nvar imgD = document.createElement('div');\nvar anchBooks = document.createElement('a');\nbody.append(div); //Colocar titulo\n\ndiv.append(divTitle);\ndivTitle.append(title);\ntitle.append('Tercera búsqueda. Encuentra la hora');\ndiv.append(imgD);\nimg.setAttribute('src', _images_tiktok_gif__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nimgD.appendChild(img); //Colocar div donde se colocara texto\n\ndiv.append(textDiv); //Colocar texto dentro del div de texto\n\ntextDiv.append(text);\ntext.append('Debes buscar estos libros y ver si en cuentras alguna pista en alguno de ellos.');\nanchBooks.append('Ver libros');\nanchBooks.setAttribute('href', '../page9.html');\ntext.append(brElement());\ntext.append(anchBooks); //Pregunta\n\nbody.append(divQ);\ndivQ.append(bold); //divQ.append(brElement());\n\ndivQ.append(btnTime1);\nbtnTime1.append(\"8:00\");\ndivQ.append(brElement());\ndivQ.append(brElement());\ndivQ.append(btnTime2);\nbtnTime2.append(\"12:00\");\ndivQ.append(brElement());\ndivQ.append(brElement());\ndivQ.append(btnTime3);\ndivQ.append(brElement());\ndivQ.append(brElement());\ndivQ.append(bar(62.5));\nbtnTime3.append(\"9:00\");\nbold.append(subQuestion);\nsubQuestion.append('¿Cuál es la respuesta?');\nbtnTime1.setAttribute('id', 'time1Btn');\nbtnTime2.setAttribute('id', 'time2Btn');\nbtnTime3.setAttribute('id', 'time3Btn');\n\ndocument.getElementById(\"time1Btn\").onclick = function () {\n  location.href = \"../page8.html\";\n};\n\ndocument.getElementById(\"time2Btn\").onclick = function () {\n  location.href = \"../page11.html\";\n};\n\ndocument.getElementById(\"time3Btn\").onclick = function () {\n  location.href = \"../page8.html\";\n};\n\ndivQ.setAttribute('id', 'divQ');\ndivTitle.setAttribute('id', 'divT');\nimgD.setAttribute('id', 'divImg');\ntext.setAttribute('id', 'text');\ntextDiv.setAttribute('id', 'divText');\n\n//# sourceURL=webpack://Lab6.1/./src/page10/selectTime.js?");

/***/ }),

/***/ "./src/images/tiktok.gif":
/*!*******************************!*\
  !*** ./src/images/tiktok.gif ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/69a476d469535a34d537c2492406f382.gif\");\n\n//# sourceURL=webpack://Lab6.1/./src/images/tiktok.gif?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/page10/selectTime.js");
/******/ 	
/******/ })()
;