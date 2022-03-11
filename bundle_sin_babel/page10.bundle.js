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

/***/ }),

/***/ "./src/bar.js":
/*!********************!*\
  !*** ./src/bar.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bar\": () => (/* binding */ bar)\n/* harmony export */ });\nconst bar = (val) => {\n\n    let bar = document.createElement('progress');\n    bar.setAttribute('value', `${val}`);\n    bar.setAttribute('max', '100');\n    bar.append(`${val}%`);\n\n    return bar;\n}\n\n//# sourceURL=webpack://Lab6.1/./src/bar.js?");

/***/ }),

/***/ "./src/brElement.js":
/*!**************************!*\
  !*** ./src/brElement.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"brElement\": () => (/* binding */ brElement)\n/* harmony export */ });\nconst brElement = () => {\n\n    const brElement = document.createElement('br');\n    return brElement;\n}\n\n//# sourceURL=webpack://Lab6.1/./src/brElement.js?");

/***/ }),

/***/ "./src/page10/selectTime.js":
/*!**********************************!*\
  !*** ./src/page10/selectTime.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.scss */ \"./src/main.scss\");\n/* harmony import */ var _orderDivs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../orderDivs.scss */ \"./src/orderDivs.scss\");\n/* harmony import */ var _images_tiktok_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/tiktok.gif */ \"./src/images/tiktok.gif\");\n\n\n\n\n\nconst {bar} = __webpack_require__(/*! ../bar.js */ \"./src/bar.js\");\nconst {brElement} = __webpack_require__(/*! ../brElement.js */ \"./src/brElement.js\");\n\n\n//Colocar body\nconst body = document.body;\n\n//Hacer un div para colocar elementos\nconst div = document.createElement('div');\n\nconst divTitle = document.createElement('div');\n\n//Crear elemento para colocar titulo\nconst title = document.createElement('h1');\n\n//Crear elemento para subtitulo \nconst subtitle = document.createElement('h2');\n\n//Crear elemento para img\nconst img = document.createElement('img');\n\n//Crear elemento para colocar texto\nconst text = document.createElement('p');\n//Div para texto\nconst textDiv = document.createElement('div');\n\n//texto para subtitulo de pregunta\nconst subQuestion = document.createElement('h2');\n\n//div para colocar pregunta\nconst divQ = document.createElement('div');\nconst btnTime1 = document.createElement('button');\nconst btnTime2 = document.createElement('button');\nconst btnTime3 = document.createElement('button');\n//tag bold para pregunta\nconst bold = document.createElement('b');\nconst imgD = document.createElement('div');\n\nconst anchBooks = document.createElement('a');\n\nbody.append(div);\n\n//Colocar titulo\ndiv.append(divTitle);\ndivTitle.append(title);\ntitle.append('Tercera búsqueda. Encuentra la hora');\n\n\ndiv.append(imgD);\n\n\n\nimg.setAttribute('src', _images_tiktok_gif__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nimgD.appendChild(img);\n\n//Colocar div donde se colocara texto\ndiv.append(textDiv);\n//Colocar texto dentro del div de texto\ntextDiv.append(text);\n\ntext.append('Debes buscar estos libros y ver si en cuentras alguna pista en alguno de ellos.');\n\nanchBooks.append('Ver libros');\nanchBooks.setAttribute('href', '../page9.html');\ntext.append(brElement());\ntext.append(anchBooks);\n\n\n//Pregunta\nbody.append(divQ);\ndivQ.append(bold);\n//divQ.append(brElement());\ndivQ.append(btnTime1);\nbtnTime1.append(\"8:00\");\ndivQ.append(brElement());\ndivQ.append(brElement());\ndivQ.append(btnTime2);\nbtnTime2.append(\"12:00\");\ndivQ.append(brElement());\ndivQ.append(brElement());\ndivQ.append(btnTime3);\ndivQ.append(brElement());\ndivQ.append(brElement());\ndivQ.append(bar(62.5));\nbtnTime3.append(\"9:00\");\nbold.append(subQuestion);\nsubQuestion.append('¿Cuál es la respuesta?');\nbtnTime1.setAttribute('id', 'time1Btn');\nbtnTime2.setAttribute('id', 'time2Btn');\nbtnTime3.setAttribute('id', 'time3Btn');\n\n\ndocument.getElementById(\"time1Btn\").onclick = function () {\n    location.href = \"../page8.html\";\n};\n\ndocument.getElementById(\"time2Btn\").onclick = function () {\n    location.href = \"../page11.html\";\n};\n\ndocument.getElementById(\"time3Btn\").onclick = function () {\n    location.href = \"../page8.html\";\n};\n\ndivQ.setAttribute('id', 'divQ');\ndivTitle.setAttribute('id', 'divT');\nimgD.setAttribute('id', 'divImg');\ntext.setAttribute('id', 'text');\ntextDiv.setAttribute('id', 'divText');\n\n//# sourceURL=webpack://Lab6.1/./src/page10/selectTime.js?");

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