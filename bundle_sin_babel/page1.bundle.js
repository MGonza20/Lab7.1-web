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

/***/ "./src/page1/script.js":
/*!*****************************!*\
  !*** ./src/page1/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.scss */ \"./src/main.scss\");\n/* harmony import */ var _orderDivs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../orderDivs.scss */ \"./src/orderDivs.scss\");\n\n\n\nconst {bar} = __webpack_require__(/*! ../bar.js */ \"./src/bar.js\");\nconst {brElement} = __webpack_require__(/*! ../brElement.js */ \"./src/brElement.js\");\n\n\n\n\n\n\n//Colocar body\nconst body = document.body; \n\n//Hacer un div para colocar elementos\nconst div = document.createElement('div');\n\nconst divTitle = document.createElement('div');\n\n//Crear elemento para colocar titulo\nconst title = document.createElement('h1');\n\n//Crear elemento para subtitulo \nconst subtitle = document.createElement('h2');\n\n//Crear elemento para img\nconst img = document.createElement('img');\n\n//Crear elemento para colocar texto\nconst text = document.createElement('p');\n//Div para texto\nconst textDiv = document.createElement('div');\n\n\n//texto para subtitulo de pregunta\nconst subQuestion = document.createElement('text');\n\n//div para colocar pregunta\nconst divQ = document.createElement('div');\nconst btnYes = document.createElement('button');\nconst btnNo = document.createElement('button');\n//tag bold para pregunta\nconst bold = document.createElement('b');\nconst imgD = document.createElement('div');\n\nbody.append(div);\n\n//Colocar titulo\ndiv.append(divTitle);\ndivTitle.append(title);\ntitle.append('Morning´s surprise');\n\n\ndiv.append(imgD);\ndiv.setAttribute('id', 'page1');\n\n\n//Colocar div donde se colocara texto\ndiv.append(textDiv);\n//Colocar texto dentro del div de texto\ntextDiv.append(text);\n\ntext.append('Te levantas un jueves por la mañana. Es una mañana calurosa de verano, \\\nvas en el tráfico hacia el supermercado y algo que dice el locutor en la radio te llama la atención... \\\n\"Solo llama y quiza te puedas ganar la oportunidad de obtener el viaje de tus sueños, \\\nsolo llama y quizas puedas ganar el viaje misterioso\". Pero piensas, siempre hay un truco, ¿No? ');\ntextDiv.setAttribute('width', '50px');\n\n\n\nimgD.append(img);\nimg.setAttribute('src', 'https://media.giphy.com/media/kL9x7l4nvVl0eMeLoV/giphy.gif');\nimg.setAttribute('width', '300px');\n \n//Pregunta\nbody.append(divQ);\ndivQ.append(bold);\ndivQ.append(brElement());\ndivQ.append(btnYes);\nbtnYes.append(\"Si\");\ndivQ.append(btnNo);\nbtnNo.append(\"No\");\nbold.append(subQuestion);\nsubQuestion.append('¿Decides llamar?');\nbtnYes.setAttribute('id', 'yesBtn');\nbtnNo.setAttribute('id', 'nopBtn');\ndivQ.append(brElement());\ndivQ.append(brElement());\ndivQ.append(bar(0));\n\n\ndocument.getElementById(\"yesBtn\").onclick = function () {\n    location.href = \"../page2.html\";\n};\n\ndocument.getElementById(\"nopBtn\").onclick = function () {\n    location.href = \"../page3.html\";\n};\n\ndivQ.setAttribute('id', 'divQ');\ndivTitle.setAttribute('id', 'divT');\ntextDiv.setAttribute('id', 'divText');\nimgD.setAttribute('id', 'divImg');\ntext.setAttribute('id', 'text');\nsubQuestion.setAttribute('id', 'questionText');\n\n\n//# sourceURL=webpack://Lab6.1/./src/page1/script.js?");

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