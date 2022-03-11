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

/***/ "./src/page2/scriptCallRadio.js":
/*!**************************************!*\
  !*** ./src/page2/scriptCallRadio.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.scss */ \"./src/main.scss\");\n/* harmony import */ var _orderDivs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../orderDivs.scss */ \"./src/orderDivs.scss\");\n/* harmony import */ var _images_IWoon_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/IWoon.gif */ \"./src/images/IWoon.gif\");\n\n\n\n\nvar _require = __webpack_require__(/*! ../bar.js */ \"./src/bar.js\"),\n    bar = _require.bar;\n\nvar _require2 = __webpack_require__(/*! ../brElement.js */ \"./src/brElement.js\"),\n    brElement = _require2.brElement; //Colocar body\n\n\nvar body = document.body; //Hacer un div para colocar elementos\n\nvar div = document.createElement('div');\nvar divTitle = document.createElement('div'); //Crear elemento para colocar titulo\n\nvar title = document.createElement('h1'); //Crear elemento para subtitulo \n\nvar subtitle = document.createElement('h2'); //Crear elemento para img\n\nvar img = document.createElement('img'); //Crear elemento para colocar texto\n\nvar text = document.createElement('p'); //Div para texto\n\nvar textDiv = document.createElement('div'); //div para colocar pregunta\n\nvar divQ = document.createElement('div');\nvar btnNext = document.createElement('button'); //tag bold para pregunta\n\nvar bold = document.createElement('b');\nvar imgD = document.createElement('div');\nbody.append(div); //Colocar titulo\n\ndiv.append(divTitle);\ndivTitle.append(title);\ntitle.append('¡Haz ganado!');\ndiv.append(imgD); //Colocar div donde se colocara texto\n\ndiv.append(textDiv); //Colocar texto dentro del div de texto\n\ntextDiv.append(text);\ntext.append('Tu llamada ha entrado a la radio y el locutor te dice: \\\n    \"¡Felicidades! Haz sido uno de los 3 afortunados. Debes ir a la \\\n    bibliblioteca central mañana a las 3:00 p.m. cuando estes ahí la \\\n    bibliotecaria te dará un listado de cosas que debes buscar, resolver \\\n    y obtener, estas serán pistas para poder reclamar tu boleto en la \\\n    agencia de viajes\"');\nimg.setAttribute('src', _images_IWoon_gif__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nimg.setAttribute('width', '245px');\nimgD.appendChild(img); //Pregunta\n\nbody.append(divQ);\ndivQ.append(bold);\ndivQ.append(btnNext);\nbtnNext.append(\"Siguiente\");\nbtnNext.setAttribute('id', 'nextBtn');\ndivQ.append(brElement());\ndivQ.append(brElement());\ndivQ.append(bar(12.5));\n\ndocument.getElementById(\"nextBtn\").onclick = function () {\n  location.href = \"../page4.html\";\n};\n\ndivQ.setAttribute('id', 'divQ');\ndivTitle.setAttribute('id', 'divT');\ntextDiv.setAttribute('id', 'divText');\nimgD.setAttribute('id', 'divImg');\ntext.setAttribute('id', 'text');\n\n//# sourceURL=webpack://Lab6.1/./src/page2/scriptCallRadio.js?");

/***/ }),

/***/ "./src/images/IWoon.gif":
/*!******************************!*\
  !*** ./src/images/IWoon.gif ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/da793ca204fe9d3826e87d63e8b36193.gif\");\n\n//# sourceURL=webpack://Lab6.1/./src/images/IWoon.gif?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/page2/scriptCallRadio.js");
/******/ 	
/******/ })()
;