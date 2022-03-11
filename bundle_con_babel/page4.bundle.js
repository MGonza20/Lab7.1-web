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

/***/ "./src/page4/scriptGoToLibrary.js":
/*!****************************************!*\
  !*** ./src/page4/scriptGoToLibrary.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.scss */ \"./src/main.scss\");\n/* harmony import */ var _orderDivs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../orderDivs.scss */ \"./src/orderDivs.scss\");\n/* harmony import */ var _brElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../brElement */ \"./src/brElement.js\");\n/* harmony import */ var _images_librarian_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/librarian.jpeg */ \"./src/images/librarian.jpeg\");\n\n\n\n\n\nvar _require = __webpack_require__(/*! ../bar.js */ \"./src/bar.js\"),\n    bar = _require.bar; //Colocar body\n\n\nvar body = document.body; //Hacer un div para colocar elementos\n\nvar div = document.createElement('div');\nvar divTitle = document.createElement('div'); //Crear elemento para colocar titulo\n\nvar title = document.createElement('h1'); //Crear elemento para subtitulo \n\nvar subtitle = document.createElement('h2'); //Crear elemento para img\n\nvar img = document.createElement('img'); //Crear elemento para colocar texto\n\nvar text = document.createElement('p'); //Div para texto\n\nvar textDiv = document.createElement('div'); //div para colocar pregunta\n\nvar divQ = document.createElement('div');\nvar btnNext = document.createElement('button'); //tag bold para pregunta\n\nvar bold = document.createElement('b');\nvar imgD = document.createElement('div');\nvar dets = document.createElement('details');\nvar sum = document.createElement('summary');\nvar olElement = document.createElement('ol');\nvar li1 = document.createElement('li');\nvar li2 = document.createElement('li');\nvar i = document.createElement('i');\nbody.append(div); //Colocar titulo\n\ndiv.append(divTitle);\ndivTitle.append(title);\ntitle.append('Llegas a la biblioteca');\ndiv.append(imgD); //Colocar div donde se colocara texto\n\ndiv.append(textDiv); //Colocar texto dentro del div de texto\n\ntextDiv.append(text);\ntext.append('En efecto la bibliotecaria te espera en la biblioteca central a las 3:00 p.m. \\\n            Te pide un momento para poder imprimir desde su computadora apple la lista de \\\n            pistas que debes buscar. Al momento de darte la lista te indica que debes encontrar \\\n            la fecha y hora del viaje con las pistas. Pero lo primero que debes hacer es seleccionar \\\n            de la estanteria una de las revistas con portada de la ciudad a la que crees que iras.');\nimg.setAttribute('src', _images_librarian_jpeg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nimg.setAttribute('width', '450px');\nimgD.appendChild(img);\ndivQ.append(dets);\ndets.append(sum);\nsum.append('Pistas');\ndets.append(olElement);\nolElement.append(li1);\nli1.append('La primera busqueda te llevará a la segunda pista.');\nolElement.append(li2);\nli2.append('¿A que se podrá referir la marca');\ni.append('\"apple\"');\nli2.append(i);\nli2.append('de la computadora?');\nli2.append((0,_brElement__WEBPACK_IMPORTED_MODULE_2__.brElement)());\nli2.append(\"* En el contexto del juego.\");\ndivQ.append((0,_brElement__WEBPACK_IMPORTED_MODULE_2__.brElement)()); //Pregunta\n\nbody.append(divQ);\ndivQ.append(bold);\ndivQ.append(btnNext);\nbtnNext.append(\"Siguiente\");\nbtnNext.setAttribute('id', 'nextBtn');\ndivQ.append((0,_brElement__WEBPACK_IMPORTED_MODULE_2__.brElement)());\ndivQ.append((0,_brElement__WEBPACK_IMPORTED_MODULE_2__.brElement)());\ndivQ.append(bar(25));\n\ndocument.getElementById(\"nextBtn\").onclick = function () {\n  location.href = \"../page5.html\";\n};\n\ndivQ.setAttribute('id', 'divQ');\ndivTitle.setAttribute('id', 'divT');\ntextDiv.setAttribute('id', 'divText');\nimgD.setAttribute('id', 'divImg');\ntext.setAttribute('id', 'text');\nsum.setAttribute('id', 'summary');\nli1.setAttribute('id', 'li');\nli1.setAttribute('id', 'li2');\n\n//# sourceURL=webpack://Lab6.1/./src/page4/scriptGoToLibrary.js?");

/***/ }),

/***/ "./src/images/librarian.jpeg":
/*!***********************************!*\
  !*** ./src/images/librarian.jpeg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/70ceec5d0fdf167e07db0c7bb37e4342.jpeg\");\n\n//# sourceURL=webpack://Lab6.1/./src/images/librarian.jpeg?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/page4/scriptGoToLibrary.js");
/******/ 	
/******/ })()
;