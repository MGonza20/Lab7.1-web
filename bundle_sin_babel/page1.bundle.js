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

/***/ "./src/page1/script.js":
/*!*****************************!*\
  !*** ./src/page1/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.scss */ \"./src/main.scss\");\n/* harmony import */ var _orderDivs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../orderDivs.scss */ \"./src/orderDivs.scss\");\n\n\n\nvar _require = __webpack_require__(/*! ../bar.js */ \"./src/bar.js\"),\n    bar = _require.bar;\n\nvar _require2 = __webpack_require__(/*! ../brElement.js */ \"./src/brElement.js\"),\n    brElement = _require2.brElement; //Colocar body\n\n\nvar body = document.body; //Hacer un div para colocar elementos\n\nvar div = document.createElement('div');\nvar divTitle = document.createElement('div'); //Crear elemento para colocar titulo\n\nvar title = document.createElement('h1'); //Crear elemento para subtitulo \n\nvar subtitle = document.createElement('h2'); //Crear elemento para img\n\nvar img = document.createElement('img'); //Crear elemento para colocar texto\n\nvar text = document.createElement('p'); //Div para texto\n\nvar textDiv = document.createElement('div'); //texto para subtitulo de pregunta\n\nvar subQuestion = document.createElement('text'); //div para colocar pregunta\n\nvar divQ = document.createElement('div');\nvar btnYes = document.createElement('button');\nvar btnNo = document.createElement('button'); //tag bold para pregunta\n\nvar bold = document.createElement('b');\nvar imgD = document.createElement('div');\nbody.append(div); //Colocar titulo\n\ndiv.append(divTitle);\ndivTitle.append(title);\ntitle.append('Morning´s surprise');\ndiv.append(imgD);\ndiv.setAttribute('id', 'page1'); //Colocar div donde se colocara texto\n\ndiv.append(textDiv); //Colocar texto dentro del div de texto\n\ntextDiv.append(text);\ntext.append('Te levantas un jueves por la mañana. Es una mañana calurosa de verano, \\\nvas en el tráfico hacia el supermercado y algo que dice el locutor en la radio te llama la atención... \\\n\"Solo llama y quiza te puedas ganar la oportunidad de obtener el viaje de tus sueños, \\\nsolo llama y quizas puedas ganar el viaje misterioso\". Pero piensas, siempre hay un truco, ¿No? ');\ntextDiv.setAttribute('width', '50px');\nimgD.append(img);\nimg.setAttribute('src', 'https://media.giphy.com/media/kL9x7l4nvVl0eMeLoV/giphy.gif');\nimg.setAttribute('width', '300px'); //Pregunta\n\nbody.append(divQ);\ndivQ.append(bold);\ndivQ.append(brElement());\ndivQ.append(btnYes);\nbtnYes.append(\"Si\");\ndivQ.append(btnNo);\nbtnNo.append(\"No\");\nbold.append(subQuestion);\nsubQuestion.append('¿Decides llamar?');\nbtnYes.setAttribute('id', 'yesBtn');\nbtnNo.setAttribute('id', 'nopBtn');\ndivQ.append(brElement());\ndivQ.append(brElement());\ndivQ.append(bar(0));\n\ndocument.getElementById(\"yesBtn\").onclick = function () {\n  location.href = \"../page2.html\";\n};\n\ndocument.getElementById(\"nopBtn\").onclick = function () {\n  location.href = \"../page3.html\";\n};\n\ndivQ.setAttribute('id', 'divQ');\ndivTitle.setAttribute('id', 'divT');\ntextDiv.setAttribute('id', 'divText');\nimgD.setAttribute('id', 'divImg');\ntext.setAttribute('id', 'text');\nsubQuestion.setAttribute('id', 'questionText');\n\n//# sourceURL=webpack://Lab6.1/./src/page1/script.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/page1/script.js");
/******/ 	
/******/ })()
;