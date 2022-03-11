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

/***/ "./src/brElement.js":
/*!**************************!*\
  !*** ./src/brElement.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"brElement\": () => (/* binding */ brElement)\n/* harmony export */ });\nconst brElement = () => {\n\n    const brElement = document.createElement('br');\n    return brElement;\n}\n\n//# sourceURL=webpack://Lab6.1/./src/brElement.js?");

/***/ }),

/***/ "./src/page3/boring.js":
/*!*****************************!*\
  !*** ./src/page3/boring.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.scss */ \"./src/main.scss\");\n\n\nconst {brElement} = __webpack_require__(/*! ../brElement.js */ \"./src/brElement.js\");\n\n//Colocar body\nconst body = document.body;\n\n//Hacer un div para colocar elementos\nconst div = document.createElement('div');\n\n\n//Crear elemento para img\nconst img = document.createElement('img');\n\n\n\n//div para colocar pregunta\nconst divQ = document.createElement('div');\nconst btnTrip = document.createElement('button');\nconst btnNo = document.createElement('button');\nconst imgD = document.createElement('div');\n\nbody.append(div);\n\n\ndiv.append(imgD);\nimg.setAttribute('src', 'https://media.giphy.com/media/ehJ4vNWRhinhMMvLxp/giphy.gif');\nimg.setAttribute('width', '500px');\nimgD.appendChild(img);\n\n//Pregunta\nbody.append(divQ);\ndivQ.append(brElement());\ndivQ.append(btnTrip);\nbtnTrip.append(\"Back\");\nbtnTrip.setAttribute('id', 'backBtn');\n\n\ndocument.getElementById(\"backBtn\").onclick = function () {\n    location.href = \"../index.html\";\n};\n\n\n\n\n//# sourceURL=webpack://Lab6.1/./src/page3/boring.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/page3/boring.js");
/******/ 	
/******/ })()
;