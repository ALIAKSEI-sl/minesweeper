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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/moon.svg */ \"./src/assets/moon.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/sun.svg */ \"./src/assets/sun.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/clock.svg */ \"./src/assets/clock.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/flag.svg */ \"./src/assets/flag.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/mine.svg */ \"./src/assets/mine.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n  margin: 0;\\n}\\n\\nbody {\\n  background-color: var(--colorLight, rgb(242, 245, 238));\\n  user-select: none;\\n}\\n\\n.header {\\n  padding: 10px 30px;\\n  background-color: rgba(255, 255, 255, 0.2);\\n  border-bottom: 1px solid var(--colorDark, rgb(150, 150, 150));\\n}\\n\\n.header-wrapper {\\n  max-width: 1280px;\\n  margin: 0 auto;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n.wrapper-main {\\n  max-width: 1280px;\\n  margin: 0 auto;\\n  display: flex;\\n  padding: 40px 20px 0 20px;\\n}\\n\\n.header-title {\\n  font-size: 46px;\\n  color: var(--colorDark, rgb(150, 150, 150));\\n}\\n\\n.block-settings {\\n  display: flex;\\n  cursor: pointer;\\n  gap: 30px;\\n}\\n\\n#unmute {\\n  fill: var(--colorDark, rgb(150, 150, 150));\\n}\\n\\n#mute {\\n  fill: var(--colorDark, rgb(150, 150, 150));\\n}\\n\\n.block-volume {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.unmute #mute {\\n  display: none;\\n}\\n\\n.mute #unmute {\\n  display: none;\\n}\\n\\n.block-theme {\\n  width: 150px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  cursor: pointer;\\n}\\n\\n.moon-icon {\\n  width: 30px;\\n  height: 30px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n}\\n\\n.sun-icon {\\n  width: 30px;\\n  height: 30px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n}\\n\\n.switch-theme {\\n  width: 42px;\\n  height: 26px;\\n  background-color: black;\\n  border-radius: 13px;\\n  display: flex;\\n  align-items: center;\\n  padding: 0 3px;\\n}\\n\\n.selector-theme {\\n  width: 20px;\\n  height: 20px;\\n  border-radius: 10px;\\n  background-color: white;\\n  transition: transform 0.8s;\\n}\\n\\n#change-theme:checked + .switch-theme .selector-theme {\\n  transform: translateX(14px);\\n}\\n\\n#change-theme {\\n  display: none;\\n}\\n\\n.select-level {\\n  display: flex;\\n  gap: 20px;\\n}\\n\\n.levelSelection {\\n  width: 150px;\\n  height: 34px;\\n  border-radius: 5px;\\n  text-align: center;\\n  font-size: 18px;\\n  cursor: pointer;\\n  border: 2px solid var(--colorDark, rgb(150, 150, 150));\\n  background-color: var(--colorLight, rgb(242, 245, 238));\\n  color: var(--colorDark, rgb(150, 150, 150));\\n}\\n\\n.minesSelection {\\n  width: 100px;\\n  height: 34px;\\n  border-radius: 5px;\\n  text-align: center;\\n  font-size: 18px;\\n  cursor: pointer;\\n  border: 2px solid var(--colorDark, rgb(150, 150, 150));\\n  background-color: var(--colorLight, rgb(242, 245, 238));\\n  color: var(--colorDark, rgb(150, 150, 150));\\n}\\n\\n.block-rules {\\n  text-align: justify;\\n  color: var(--colorDark, rgb(150, 150, 150));\\n}\\n\\n.rules-header {\\n  text-align: center;\\n  padding-bottom: 10px;\\n}\\n\\n.rules-text {\\n  max-width: 300px;\\n  text-indent: 20px;\\n  font-size: 17px;\\n}\\n\\n.block-game {\\n  width: 60%;\\n  padding: 0 40px;\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\\n.block-controls {\\n  height: fit-content;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 30px;\\n}\\n\\n.start-game {\\n  width: 150px;\\n  height: 34px;\\n  font-size: 18px;\\n  line-height: 27px;\\n  border: 2px solid var(--colorDark, rgb(150, 150, 150));\\n  background-color: var(--colorLight, rgb(242, 245, 238));\\n  color: var(--colorDark, rgb(150, 150, 150));\\n  border-radius: 5px;\\n  text-align: center;\\n  cursor: pointer;\\n}\\n\\n.block-counter,\\n.block-clicks,\\n.block-tag,\\n.block-mine {\\n  display: flex;\\n  align-items: center;\\n  gap: 10px;\\n}\\n\\n.counter-icon {\\n  width: 30px;\\n  height: 30px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n}\\n\\n.counter-time,\\n.counter-click,\\n.counter-tag,\\n.counter-mine {\\n  color: var(--colorDark, rgb(150, 150, 150));\\n  font-size: 18px;\\n  width: 30px;\\n  text-align: center;\\n}\\n\\n#tag,\\n#clicks-icon,\\n#counter-icon,\\n#mine-icon {\\n  fill: var(--colorDark, rgb(150, 150, 150));\\n}\\n\\n.block-board {\\n  width: fit-content;\\n}\\n\\n.row {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.cell {\\n  width: 30px;\\n  height: 30px;\\n  border: 1px solid var(--colorDark, rgb(150, 150, 150));\\n  cursor: pointer;\\n  text-align: center;\\n  font-size: 24px;\\n  line-height: 30px;\\n}\\n\\n.cell.flag {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n}\\n\\n.cell.open {\\n  background-color: rgb(200, 200, 200);\\n  cursor: auto;\\n}\\n\\n.cell.bang {\\n  border: 2px solid #ff0000;\\n}\\n\\n.cell.bomb {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  background-position: center;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n}\\n\\n.popup-wrapper {\\n  visibility: hidden;\\n  position: fixed;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  left: 0;\\n  top: 0;\\n  background-color: rgba(0, 0, 0, 0.6);\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.popup-wrapper.active {\\n  visibility: visible;\\n}\\n\\n.popup {\\n  width: 300px;\\n  height: 150px;\\n  border-radius: 30px;\\n  background-color: white;\\n}\\n\\n.popup-header {\\n  text-align: center;\\n  font-size: 20px;\\n  padding-top: 10px;\\n}\\n\\n.block-results-count {\\n  padding: 10px 10px;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5px;\\n}\\n\\n.seconds-results,\\n.clicks-results {\\n  font-size: 18px;\\n  font-weight: 600;\\n}\\n\\n.block--btn {\\n  display: flex;\\n}\\n\\n.tryAgain-btn,\\n.ok-btn {\\n  width: 100px;\\n  height: 36px;\\n  line-height: 27px;\\n  font-size: 18px;\\n  font-weight: 600;\\n  margin: 0 auto;\\n  text-align: center;\\n  border: 1px solid black;\\n  border-radius: 18px;\\n  cursor: pointer;\\n}\\n\\n.tryAgain-btn:hover,\\n.ok-btn:hover {\\n  background-color: rgb(200, 200, 200);\\n}\\n\\n.table-results {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n  margin: 0 auto;\\n}\\n\\n.result-title {\\n  text-align: center;\\n  color: var(--colorDark, rgb(150, 150, 150));\\n  padding-bottom: 10px;\\n}\\n\\n.cell-header,\\n.cell-number {\\n  background-color: rgb(200, 200, 200);\\n}\\n\\n.cell-results {\\n  width: 54px;\\n  height: 25px;\\n  font-size: 18px;\\n  border: 1px solid var(--colorDark, rgb(150, 150, 150));\\n  text-align: center;\\n  color: var(--colorDark, rgb(150, 150, 150));\\n}\\n\\n.cell-number {\\n  width: 30px;\\n  font-size: 18px;\\n  text-align: center;\\n  color: var(--colorDark, rgb(150, 150, 150));\\n  border: 1px solid var(--colorDark, rgb(150, 150, 150));\\n}\\n\\n.block-mines {\\n  display: flex;\\n  align-items: center;\\n  gap: 5px;\\n  font-size: 26px;\\n}\\n\\n.hard {\\n  flex-wrap: wrap;\\n  justify-content: space-around;\\n}\\n.hard .block-game {\\n  width: 84%;\\n}\\n.hard .block-rules {\\n  order: 3;\\n  padding: 20px 0;\\n}\\n.hard .rules-text {\\n  max-width: none;\\n}\\n@media (min-width: 440px) and (max-width: 980px) {\\n  .hard .cell {\\n    width: 15px;\\n    height: 15px;\\n    font-size: 12px;\\n    line-height: 15px;\\n  }\\n}\\n@media (max-width: 439px) {\\n  .hard .cell {\\n    width: 12px;\\n    height: 12px;\\n    font-size: 10px;\\n    line-height: 12px;\\n  }\\n}\\n\\n@media (min-width: 768px) and (max-width: 1279px) {\\n  .wrapper-main {\\n    flex-wrap: wrap;\\n    justify-content: space-around;\\n    row-gap: 30px;\\n  }\\n  .block-rules {\\n    order: 3;\\n    padding-bottom: 30px;\\n  }\\n  .block-game {\\n    width: fit-content;\\n    order: 1;\\n    column-gap: 40px;\\n  }\\n  .block-result {\\n    order: 2;\\n  }\\n  .rules-text {\\n    max-width: 100%;\\n  }\\n}\\n@media (min-width: 560px) and (max-width: 767px) {\\n  .header-wrapper {\\n    flex-direction: column;\\n    row-gap: 20px;\\n  }\\n  .header-title {\\n    font-size: 34px;\\n  }\\n  .wrapper-main {\\n    flex-wrap: wrap;\\n    justify-content: space-around;\\n    row-gap: 30px;\\n  }\\n  .block-rules {\\n    order: 3;\\n    padding-bottom: 30px;\\n  }\\n  .block-game {\\n    width: fit-content;\\n    order: 1;\\n    gap: 40px;\\n    flex-wrap: wrap;\\n  }\\n  .block-result {\\n    order: 2;\\n  }\\n  .rules-text {\\n    max-width: 100%;\\n  }\\n}\\n@media (max-width: 559px) {\\n  .header-wrapper {\\n    flex-direction: column;\\n    row-gap: 20px;\\n  }\\n  .header-title {\\n    font-size: 34px;\\n  }\\n  .wrapper-main {\\n    flex-wrap: wrap;\\n    justify-content: space-around;\\n    row-gap: 30px;\\n  }\\n  .block-rules {\\n    order: 3;\\n    padding-bottom: 30px;\\n  }\\n  .block-game {\\n    width: fit-content;\\n    order: 1;\\n    gap: 40px;\\n    flex-wrap: wrap;\\n  }\\n  .block-result {\\n    order: 2;\\n  }\\n  .rules-text {\\n    max-width: 100%;\\n  }\\n  .cell {\\n    width: 15px;\\n    height: 15px;\\n    font-size: 12px;\\n    line-height: 15px;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://minesweeper/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/bang.mp3":
/*!*****************************!*\
  !*** ./src/assets/bang.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"bang.mp3\");\n\n//# sourceURL=webpack://minesweeper/./src/assets/bang.mp3?");

/***/ }),

/***/ "./src/assets/click.mp3":
/*!******************************!*\
  !*** ./src/assets/click.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"click.mp3\");\n\n//# sourceURL=webpack://minesweeper/./src/assets/click.mp3?");

/***/ }),

/***/ "./src/assets/fail.mp3":
/*!*****************************!*\
  !*** ./src/assets/fail.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"fail.mp3\");\n\n//# sourceURL=webpack://minesweeper/./src/assets/fail.mp3?");

/***/ }),

/***/ "./src/assets/flagAdd.mp3":
/*!********************************!*\
  !*** ./src/assets/flagAdd.mp3 ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"flagAdd.mp3\");\n\n//# sourceURL=webpack://minesweeper/./src/assets/flagAdd.mp3?");

/***/ }),

/***/ "./src/assets/flagRemove.mp3":
/*!***********************************!*\
  !*** ./src/assets/flagRemove.mp3 ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"flagRemove.mp3\");\n\n//# sourceURL=webpack://minesweeper/./src/assets/flagRemove.mp3?");

/***/ }),

/***/ "./src/assets/win.mp3":
/*!****************************!*\
  !*** ./src/assets/win.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"win.mp3\");\n\n//# sourceURL=webpack://minesweeper/./src/assets/win.mp3?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://minesweeper/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/changeTheme.js":
/*!***************************************!*\
  !*** ./src/components/changeTheme.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`\r\n  <div class='block-settings'>\r\n    <div class='block-volume unmute'>\r\n      <svg id=\"unmute\" width=\"30\" height=\"30\" viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\"><title/><g data-name=\"Layer 34\"><path class=\"cls-1\" d=\"M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z\"/><path class=\"cls-1\" d=\"M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z\"/><path class=\"cls-1\" d=\"M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z\"/><path class=\"cls-1\" d=\"M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z\"/><path class=\"cls-1\" d=\"M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z\"/></g></svg>\r\n      <svg id=\"mute\" width=\"30\" height=\"30\" viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\"><title/><g data-name=\"Layer 35\"><path class=\"cls-1\" d=\"M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z\"/><path class=\"cls-1\" d=\"M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z\"/><rect class=\"cls-1\" height=\"12\" transform=\"translate(-3.77 22.9) rotate(-45)\" width=\"2\" x=\"24.76\" y=\"10\"/><rect class=\"cls-1\" height=\"2\" transform=\"translate(-3.77 22.9) rotate(-45)\" width=\"12\" x=\"19.76\" y=\"15\"/></g></svg>\r\n    </div>\r\n    <label class='block-theme'>\r\n      <div class='moon-icon'></div>\r\n      <input type=\"checkbox\" id=\"change-theme\">\r\n      <div class=\"switch-theme\">\r\n        <div class='selector-theme'></div>\r\n      </div>\r\n      <div class='sun-icon'></div>\r\n    </label>\r\n  </div>\r\n`);\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/changeTheme.js?");

/***/ }),

/***/ "./src/components/controls.js":
/*!************************************!*\
  !*** ./src/components/controls.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`\r\n  <div class='block-controls'>\r\n    <div class='start-game'>new game</div>\r\n    <div class='block-counter'>\r\n      <svg id=\"counter-icon\" viewBox=\"0 0 32 32\" height=\"30\" width=\"30\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.cls-1{}</style></defs><title/><g data-name=\"Layer 15\" id=\"Layer_15\"><path class=\"cls-1\" d=\"M16,31A15,15,0,1,1,31,16,15,15,0,0,1,16,31ZM16,3A13,13,0,1,0,29,16,13,13,0,0,0,16,3Z\"/><path class=\"cls-1\" d=\"M20.24,21.66l-4.95-4.95A1,1,0,0,1,15,16V8h2v7.59l4.66,4.65Z\"/></g></svg>\r\n      <p class='counter-time'>0</p>\r\n    </div>\r\n    <div class='block-clicks'>\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"clicks-icon\" width=\"30\" height=\"30\" viewBox=\"0 0 24 24\"><path d=\"M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10\" /></svg>\r\n      <p class='counter-click'>0</p>\r\n    </div>\r\n    <div class='block-tag'>\r\n      <svg enable-background=\"new 0 0 64 64\" height=\"30\" id=\"tag\" version=\"1.1\" viewBox=\"0 0 64 64\" width=\"30\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M54.227,12.611c-0.338-0.336-0.736-0.505-1.196-0.505c-0.229,0-0.712,0.188-1.446,0.559  c-0.735,0.372-1.515,0.786-2.336,1.248c-0.823,0.459-1.797,0.875-2.921,1.247c-1.123,0.371-2.163,0.559-3.12,0.559  c-0.884,0-1.664-0.168-2.336-0.505c-2.229-1.044-4.168-1.823-5.814-2.337c-1.646-0.513-3.416-0.771-5.311-0.771  c-3.272,0-6.999,1.064-11.177,3.188c-0.862,0.43-1.48,0.763-1.88,1.007l-0.397-2.911c0.897-0.779,1.476-1.914,1.476-3.195  c0-2.347-1.902-4.249-4.249-4.249c-2.347,0-4.249,1.902-4.249,4.249c0,1.531,0.818,2.862,2.032,3.61l5.74,42.09  c0.171,1.253,1.243,2.162,2.474,2.162c0.112,0,0.226-0.007,0.341-0.022c1.368-0.188,2.326-1.447,2.139-2.815L19.69,38.303  c4.186-2.077,7.807-3.124,10.853-3.124c1.293,0,2.554,0.193,3.783,0.583c1.23,0.391,2.253,0.815,3.067,1.274  c0.814,0.46,1.775,0.886,2.88,1.274c1.107,0.39,2.2,0.585,3.279,0.585c2.726,0,5.991-1.027,9.796-3.08  c0.478-0.248,0.828-0.492,1.049-0.731c0.221-0.239,0.332-0.579,0.332-1.021V13.806C54.729,13.347,54.562,12.948,54.227,12.611z\"/></svg>\r\n      <p class='counter-tag'>0</p>\r\n    </div>\r\n    <div class='block-mine'>\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"mine-icon\" width=\"30\" height=\"30\" viewBox=\"0 0 24 24\"><path d=\"M11.25,6A3.25,3.25 0 0,1 14.5,2.75A3.25,3.25 0 0,1 17.75,6C17.75,6.42 18.08,6.75 18.5,6.75C18.92,6.75 19.25,6.42 19.25,6V5.25H20.75V6A2.25,2.25 0 0,1 18.5,8.25A2.25,2.25 0 0,1 16.25,6A1.75,1.75 0 0,0 14.5,4.25A1.75,1.75 0 0,0 12.75,6H14V7.29C16.89,8.15 19,10.83 19,14A7,7 0 0,1 12,21A7,7 0 0,1 5,14C5,10.83 7.11,8.15 10,7.29V6H11.25M22,6H24V7H22V6M19,4V2H20V4H19M20.91,4.38L22.33,2.96L23.04,3.67L21.62,5.09L20.91,4.38Z\" /></svg>\r\n      <p class='counter-mine'>10</p>\r\n  </div>\r\n  </div>\r\n`);\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/controls.js?");

/***/ }),

/***/ "./src/components/levelSelection.js":
/*!******************************************!*\
  !*** ./src/components/levelSelection.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`\r\n  <select class='levelSelection'>\r\n    <option value='easy'>easy</option>\r\n    <option value='medium'>medium</option>\r\n    <option value='hard'>hard</option>\r\n  </select>\r\n`);\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/levelSelection.js?");

/***/ }),

/***/ "./src/components/popUpEnd.js":
/*!************************************!*\
  !*** ./src/components/popUpEnd.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`\r\n  <div class='popup-wrapper'>\r\n    <div class='popup'>\r\n      <p class='popup-header'></p>\r\n      <div class='block-results-count'>\r\n        <p>Number of seconds: <span class='seconds-results'></span></p>\r\n        <p>Number of clicks: <span class='clicks-results'></span></p>\r\n      </div>\r\n      <div class='block--btn'>\r\n        <div class='tryAgain-btn'>try again</div>\r\n        <div class='ok-btn'>ok</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n`);\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/popUpEnd.js?");

/***/ }),

/***/ "./src/components/resultsTable.js":
/*!****************************************!*\
  !*** ./src/components/resultsTable.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getResultsTable)\n/* harmony export */ });\nfunction getResultsTable() {\r\n  let body = `\r\n  <tr>\r\n    <td></td>\r\n    <td class='cell-results cell-header'>times</td>\r\n    <td class='cell-results cell-header'>clicks</td>\r\n    <td class='cell-results cell-header'>status</td>\r\n  </tr>\r\n`;\r\n  for (let i = 0; i < 10; i++) {\r\n    const chunk = `\r\n      <tr>\r\n        <td class='cell-number'>${i + 1}</td>\r\n        <td class='cell-results results-time'></td>\r\n        <td class='cell-results results-click'></td>\r\n        <td class='cell-results results-status'></td>\r\n      </tr>\r\n    `;\r\n    body += chunk;\r\n  }\r\n\r\n  const main = `\r\n  <table class='table-results'>\r\n    <tbody>\r\n    ${body}\r\n    </tbody>\r\n  </table>\r\n  `;\r\n\r\n  return main;\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/resultsTable.js?");

/***/ }),

/***/ "./src/components/selectMines.js":
/*!***************************************!*\
  !*** ./src/components/selectMines.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`\r\n  <div class='block-mines'>\r\n    <p>💣</p>\r\n    <input type=\"number\" min=\"10\" max=\"99\" value=\"10\" class='minesSelection'>\r\n  </div>\r\n`);\r\n\n\n//# sourceURL=webpack://minesweeper/./src/components/selectMines.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _modules_createMarkup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createMarkup */ \"./src/modules/createMarkup.js\");\n/* harmony import */ var _modules_listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/listeners */ \"./src/modules/listeners.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://minesweeper/./src/main.js?");

/***/ }),

/***/ "./src/modules/const.js":
/*!******************************!*\
  !*** ./src/modules/const.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rulesGame\": () => (/* binding */ rulesGame),\n/* harmony export */   \"settings\": () => (/* binding */ settings)\n/* harmony export */ });\nconst rulesGame =\r\n  'In the game, mines are scattered throughout a board, which is divided into cells. Cells have three states: unopened, opened and flagged. An unopened cell is blank and clickable, while an opened cell is exposed. A player selects a cell to open it. If a player opens a mined cell, the game ends in a loss. Otherwise, the opened cell displays either a number, indicating the number of mines diagonally and/or adjacent to it, or a blank tile, and all adjacent non-mined cells will automatically be opened. Players can also flag a cell by right-clicking to denote that they believe a mine to be in that place.';\r\n\r\nconst settings = {\r\n  count: 10,\r\n  bomb: 10,\r\n  time: 0,\r\n  click: 0,\r\n  flag: 0,\r\n};\r\n\n\n//# sourceURL=webpack://minesweeper/./src/modules/const.js?");

/***/ }),

/***/ "./src/modules/createMarkup.js":
/*!*************************************!*\
  !*** ./src/modules/createMarkup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"blockBoard\": () => (/* binding */ blockBoard),\n/* harmony export */   \"blockChangeTheme\": () => (/* binding */ blockChangeTheme),\n/* harmony export */   \"blockControls\": () => (/* binding */ blockControls),\n/* harmony export */   \"blockGame\": () => (/* binding */ blockGame),\n/* harmony export */   \"blockLevelSelection\": () => (/* binding */ blockLevelSelection),\n/* harmony export */   \"blockMinesSelection\": () => (/* binding */ blockMinesSelection),\n/* harmony export */   \"blockPopup\": () => (/* binding */ blockPopup),\n/* harmony export */   \"blockRules\": () => (/* binding */ blockRules),\n/* harmony export */   \"blockTable\": () => (/* binding */ blockTable),\n/* harmony export */   \"wrapperMain\": () => (/* binding */ wrapperMain)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n/* harmony import */ var _components_changeTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/changeTheme */ \"./src/components/changeTheme.js\");\n/* harmony import */ var _components_levelSelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/levelSelection */ \"./src/components/levelSelection.js\");\n/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls */ \"./src/components/controls.js\");\n/* harmony import */ var _components_popUpEnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/popUpEnd */ \"./src/components/popUpEnd.js\");\n/* harmony import */ var _components_resultsTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/resultsTable */ \"./src/components/resultsTable.js\");\n/* harmony import */ var _components_selectMines__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/selectMines */ \"./src/components/selectMines.js\");\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./const */ \"./src/modules/const.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst header = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('header', 'header', document.body);\r\nconst wrapperHeader = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'header-wrapper', header);\r\nconst wrapperMain = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('main', 'wrapper-main', document.body);\r\n\r\nconst selectLevel = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'select-level', wrapperHeader);\r\nconst blockLevelSelection = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElementFromString)(\r\n  _components_levelSelection__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n  selectLevel,\r\n);\r\n\r\nconst blockMinesSelection = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElementFromString)(\r\n  _components_selectMines__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\r\n  selectLevel,\r\n);\r\n\r\nconst headerName = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', 'header-title', wrapperHeader);\r\nheaderName.textContent = 'minesweeper';\r\n\r\nconst blockChangeTheme = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElementFromString)(\r\n  _components_changeTheme__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n  wrapperHeader,\r\n);\r\n\r\nconst blockRules = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', 'block-rules', wrapperMain);\r\nconst rulesHeader = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', 'rules-header', blockRules);\r\nrulesHeader.textContent = 'Game rules';\r\nconst rulesText = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'rules-text', blockRules);\r\nrulesText.textContent = _const__WEBPACK_IMPORTED_MODULE_7__.rulesGame;\r\n\r\nconst blockGame = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', 'block-game', wrapperMain);\r\nconst blockBoard = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'block-board', blockGame);\r\nconst blockControls = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElementFromString)(_components_controls__WEBPACK_IMPORTED_MODULE_3__[\"default\"], blockGame);\r\nconst blockTag = blockControls.querySelector('.block-tag');\r\nblockTag.title = 'To set the marker, right-click on the playing field';\r\n(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createGameBoard)(_const__WEBPACK_IMPORTED_MODULE_7__.settings.count, blockBoard);\r\n\r\nconst blockPopup = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElementFromString)(_components_popUpEnd__WEBPACK_IMPORTED_MODULE_4__[\"default\"], document.body);\r\n\r\nconst blockResult = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', 'block-result', wrapperMain);\r\nconst resultTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', 'result-title', blockResult);\r\nresultTitle.textContent = 'High score table';\r\nconst blockTable = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElementFromString)(\r\n  (0,_components_resultsTable__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(),\r\n  blockResult,\r\n);\r\n\n\n//# sourceURL=webpack://minesweeper/./src/modules/createMarkup.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addResultToTable\": () => (/* binding */ addResultToTable),\n/* harmony export */   \"changeVolume\": () => (/* binding */ changeVolume),\n/* harmony export */   \"openCell\": () => (/* binding */ openCell),\n/* harmony export */   \"placeMines\": () => (/* binding */ placeMines),\n/* harmony export */   \"recoveryParams\": () => (/* binding */ recoveryParams),\n/* harmony export */   \"recoveryResults\": () => (/* binding */ recoveryResults),\n/* harmony export */   \"savedGame\": () => (/* binding */ savedGame),\n/* harmony export */   \"savedResults\": () => (/* binding */ savedResults),\n/* harmony export */   \"startNewGame\": () => (/* binding */ startNewGame),\n/* harmony export */   \"tagCell\": () => (/* binding */ tagCell)\n/* harmony export */ });\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ \"./src/modules/const.js\");\n/* harmony import */ var _createMarkup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMarkup */ \"./src/modules/createMarkup.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n/* harmony import */ var _assets_click_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/click.mp3 */ \"./src/assets/click.mp3\");\n/* harmony import */ var _assets_fail_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/fail.mp3 */ \"./src/assets/fail.mp3\");\n/* harmony import */ var _assets_win_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/win.mp3 */ \"./src/assets/win.mp3\");\n/* harmony import */ var _assets_flagAdd_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/flagAdd.mp3 */ \"./src/assets/flagAdd.mp3\");\n/* harmony import */ var _assets_flagRemove_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/flagRemove.mp3 */ \"./src/assets/flagRemove.mp3\");\n/* harmony import */ var _assets_bang_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/bang.mp3 */ \"./src/assets/bang.mp3\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet board;\r\nconst results = [];\r\nconst resultsTime = _createMarkup__WEBPACK_IMPORTED_MODULE_1__.blockTable.querySelectorAll('.results-time');\r\nconst resultsClick = _createMarkup__WEBPACK_IMPORTED_MODULE_1__.blockTable.querySelectorAll('.results-click');\r\nconst resultsStatus = _createMarkup__WEBPACK_IMPORTED_MODULE_1__.blockTable.querySelectorAll('.results-status');\r\n\r\nconst clickSound = new Audio(_assets_click_mp3__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\nconst failSound = new Audio(_assets_fail_mp3__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\nconst winSound = new Audio(_assets_win_mp3__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\r\nconst flagAddSound = new Audio(_assets_flagAdd_mp3__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\r\nconst flagRemoveSound = new Audio(_assets_flagRemove_mp3__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\r\nconst bangSound = new Audio(_assets_bang_mp3__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\r\n\r\nfunction changeVolume(mess) {\r\n  if (mess === 'unmute') {\r\n    clickSound.muted = true;\r\n    failSound.muted = true;\r\n    winSound.muted = true;\r\n    flagAddSound.muted = true;\r\n    flagRemoveSound.muted = true;\r\n    bangSound.muted = true;\r\n  } else {\r\n    clickSound.muted = false;\r\n    failSound.muted = false;\r\n    winSound.muted = false;\r\n    flagAddSound.muted = false;\r\n    flagRemoveSound.muted = false;\r\n    bangSound.muted = false;\r\n  }\r\n}\r\n\r\nfunction countBombsAround(row, col) {\r\n  let count = 0;\r\n  for (let i = row - 1; i <= row + 1; i++) {\r\n    for (let j = col - 1; j <= col + 1; j++) {\r\n      if (\r\n        i >= 0 &&\r\n        i < board.length &&\r\n        j >= 0 &&\r\n        j < board[0].length &&\r\n        board[i][j].bomb\r\n      ) {\r\n        count += 1;\r\n      }\r\n    }\r\n  }\r\n  return count;\r\n}\r\n\r\nfunction placeMines(rowCell, columnCell, level) {\r\n  board = new Array(_const__WEBPACK_IMPORTED_MODULE_0__.settings.count);\r\n  for (let i = 0; i < _const__WEBPACK_IMPORTED_MODULE_0__.settings.count; i++) {\r\n    board[i] = new Array(_const__WEBPACK_IMPORTED_MODULE_0__.settings.count);\r\n  }\r\n\r\n  if (level === 'easy' && _const__WEBPACK_IMPORTED_MODULE_0__.settings.bomb > 60) {\r\n    for (let i = 0; i < _const__WEBPACK_IMPORTED_MODULE_0__.settings.count; i++) {\r\n      board[i] = [];\r\n      for (let j = 0; j < _const__WEBPACK_IMPORTED_MODULE_0__.settings.count; j++) {\r\n        board[i][j] = {\r\n          bomb: true,\r\n          opened: false,\r\n          bombsAround: null,\r\n          flag: false,\r\n        };\r\n      }\r\n    }\r\n\r\n    let emptyPlaced = 0;\r\n    board[+rowCell][+columnCell].bomb = false;\r\n    emptyPlaced += 1;\r\n    while (emptyPlaced < 100 - _const__WEBPACK_IMPORTED_MODULE_0__.settings.bomb) {\r\n      const row = Math.floor(Math.random() * _const__WEBPACK_IMPORTED_MODULE_0__.settings.count);\r\n      const col = Math.floor(Math.random() * _const__WEBPACK_IMPORTED_MODULE_0__.settings.count);\r\n      if (board[row][col].bomb && row !== +rowCell && col !== +columnCell) {\r\n        board[row][col].bomb = false;\r\n        board[row][col].bombsAround = 0;\r\n        emptyPlaced += 1;\r\n      }\r\n    }\r\n  } else {\r\n    for (let i = 0; i < _const__WEBPACK_IMPORTED_MODULE_0__.settings.count; i++) {\r\n      board[i] = [];\r\n      for (let j = 0; j < _const__WEBPACK_IMPORTED_MODULE_0__.settings.count; j++) {\r\n        board[i][j] = {\r\n          bomb: false,\r\n          opened: false,\r\n          bombsAround: 0,\r\n          flag: false,\r\n        };\r\n      }\r\n    }\r\n\r\n    let minesPlaced = 0;\r\n    while (minesPlaced < _const__WEBPACK_IMPORTED_MODULE_0__.settings.bomb) {\r\n      const row = Math.floor(Math.random() * _const__WEBPACK_IMPORTED_MODULE_0__.settings.count);\r\n      const col = Math.floor(Math.random() * _const__WEBPACK_IMPORTED_MODULE_0__.settings.count);\r\n      if (!board[row][col].bomb && row !== +rowCell && col !== +columnCell) {\r\n        board[row][col].bomb = true;\r\n        board[row][col].bombsAround = null;\r\n        minesPlaced += 1;\r\n      }\r\n    }\r\n  }\r\n\r\n  for (let i = 0; i < _const__WEBPACK_IMPORTED_MODULE_0__.settings.count; i++) {\r\n    for (let j = 0; j < _const__WEBPACK_IMPORTED_MODULE_0__.settings.count; j++) {\r\n      if (!board[i][j].bomb) {\r\n        board[i][j].bombsAround = countBombsAround(i, j);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfunction endGame(elem, clear, message) {\r\n  clearInterval(clear);\r\n\r\n  if (message === 'Game over') {\r\n    failSound.play();\r\n  } else {\r\n    winSound.play();\r\n  }\r\n  const popupHeader = _createMarkup__WEBPACK_IMPORTED_MODULE_1__.blockPopup.querySelector('.popup-header');\r\n  const secondsResults = _createMarkup__WEBPACK_IMPORTED_MODULE_1__.blockPopup.querySelector('.seconds-results');\r\n  const clicksResults = _createMarkup__WEBPACK_IMPORTED_MODULE_1__.blockPopup.querySelector('.clicks-results');\r\n  popupHeader.textContent = message;\r\n  secondsResults.textContent = _const__WEBPACK_IMPORTED_MODULE_0__.settings.time;\r\n  clicksResults.textContent = _const__WEBPACK_IMPORTED_MODULE_0__.settings.click;\r\n  elem.classList.add('active');\r\n}\r\n\r\nfunction startNewGame() {\r\n  _createMarkup__WEBPACK_IMPORTED_MODULE_1__.blockPopup.classList.remove('active');\r\n}\r\n\r\nfunction openMines() {\r\n  const cells = document.querySelectorAll('.cell');\r\n  cells.forEach((cell) => {\r\n    cell.style.pointerEvents = 'none';\r\n    const i = cell.dataset.row;\r\n    const j = cell.dataset.col;\r\n    if (board[i][j].bomb) {\r\n      cell.classList.add('bomb');\r\n    }\r\n  });\r\n}\r\n\r\nfunction checkGameStatus(clear) {\r\n  const safeCells = _const__WEBPACK_IMPORTED_MODULE_0__.settings.count * _const__WEBPACK_IMPORTED_MODULE_0__.settings.count - _const__WEBPACK_IMPORTED_MODULE_0__.settings.bomb;\r\n  let currentCells = 0;\r\n  for (let i = 0; i < _const__WEBPACK_IMPORTED_MODULE_0__.settings.count; i++) {\r\n    for (let j = 0; j < _const__WEBPACK_IMPORTED_MODULE_0__.settings.count; j++) {\r\n      if (board[i][j].opened) {\r\n        currentCells += 1;\r\n      }\r\n    }\r\n  }\r\n\r\n  if (safeCells === currentCells) {\r\n    openMines();\r\n    endGame(_createMarkup__WEBPACK_IMPORTED_MODULE_1__.blockPopup, clear, 'Hooray! You found all mines');\r\n  }\r\n}\r\n\r\nfunction tagCell(cell, set, tagElem, mineElem) {\r\n  const currentFlag = +tagElem.textContent;\r\n\r\n  if (!cell.classList.contains('open') && currentFlag < set.bomb) {\r\n    const rowCell = Number(cell.dataset.row);\r\n    const colCell = Number(cell.dataset.col);\r\n    cell.classList.toggle('flag');\r\n    if (cell.classList.contains('flag')) {\r\n      flagAddSound.play();\r\n      set.flag += 1;\r\n      mineElem.textContent = set.bomb - set.flag;\r\n      board[rowCell][colCell].flag = true;\r\n    } else {\r\n      flagRemoveSound.play();\r\n      set.flag -= 1;\r\n      mineElem.textContent = set.bomb - set.flag;\r\n      board[rowCell][colCell].flag = false;\r\n    }\r\n    tagElem.textContent = set.flag;\r\n  } else if (!cell.classList.contains('open') && currentFlag === set.bomb) {\r\n    if (cell.classList.contains('flag')) {\r\n      const rowCell = Number(cell.dataset.row);\r\n      const colCell = Number(cell.dataset.col);\r\n      cell.classList.remove('flag');\r\n      flagRemoveSound.play();\r\n      set.flag -= 1;\r\n      mineElem.textContent = set.bomb - set.flag;\r\n      board[rowCell][colCell].flag = false;\r\n    }\r\n    tagElem.textContent = set.flag;\r\n  }\r\n}\r\n\r\nfunction changeColor(elem) {\r\n  if (elem.textContent === '1') {\r\n    elem.style.color = 'yellow';\r\n  } else if (elem.textContent === '2') {\r\n    elem.style.color = 'blue';\r\n  } else if (elem.textContent === '3') {\r\n    elem.style.color = 'green';\r\n  } else if (elem.textContent === '4') {\r\n    elem.style.color = 'purple';\r\n  } else if (elem.textContent === '5') {\r\n    elem.style.color = 'brown';\r\n  } else if (elem.textContent === '6') {\r\n    elem.style.color = 'grey';\r\n  } else {\r\n    elem.style.color = 'black';\r\n  }\r\n}\r\n\r\nfunction openEmptyCell(row, col, counterMine) {\r\n  const offsets = [\r\n    [-1, 0],\r\n    [1, 0],\r\n    [0, -1],\r\n    [0, 1],\r\n    [-1, -1],\r\n    [-1, 1],\r\n    [1, -1],\r\n    [1, 1],\r\n  ];\r\n\r\n  const neighbors = [];\r\n\r\n  for (let i = 0; i < offsets.length; i++) {\r\n    const [dx, dy] = offsets[i];\r\n    const newRow = +row + dx;\r\n    const newCol = +col + dy;\r\n    if (\r\n      newRow >= 0 &&\r\n      newRow < board.length &&\r\n      newCol >= 0 &&\r\n      newCol < board[newRow].length &&\r\n      !board[newRow][newCol].opened\r\n    ) {\r\n      const cell = _createMarkup__WEBPACK_IMPORTED_MODULE_1__.blockBoard.querySelector(\r\n        `[data-row=\"${newRow}\"][data-col=\"${newCol}\"`,\r\n      );\r\n      if (board[newRow][newCol].bombsAround === 0) {\r\n        if (board[newRow][newCol].bombsAround !== 0) {\r\n          cell.textContent = board[newRow][newCol].bombsAround;\r\n        }\r\n        board[newRow][newCol].opened = true;\r\n        if (cell.classList.contains('flag')) {\r\n          const counterTag = _createMarkup__WEBPACK_IMPORTED_MODULE_1__.blockGame.querySelector('.counter-tag');\r\n          cell.classList.remove('flag');\r\n          _const__WEBPACK_IMPORTED_MODULE_0__.settings.flag -= 1;\r\n          board[newRow][newCol].flag = false;\r\n          counterTag.textContent = _const__WEBPACK_IMPORTED_MODULE_0__.settings.flag;\r\n        }\r\n        cell.classList.add('open');\r\n        neighbors.push([newRow, newCol]);\r\n      } else {\r\n        if (board[newRow][newCol].bombsAround !== 0) {\r\n          cell.textContent = board[newRow][newCol].bombsAround;\r\n        }\r\n        changeColor(cell);\r\n        board[newRow][newCol].opened = true;\r\n        if (cell.classList.contains('flag')) {\r\n          const counterTag = _createMarkup__WEBPACK_IMPORTED_MODULE_1__.blockGame.querySelector('.counter-tag');\r\n          cell.classList.remove('flag');\r\n          _const__WEBPACK_IMPORTED_MODULE_0__.settings.flag -= 1;\r\n          board[newRow][newCol].flag = false;\r\n          counterTag.textContent = _const__WEBPACK_IMPORTED_MODULE_0__.settings.flag;\r\n        }\r\n        cell.classList.add('open');\r\n      }\r\n      counterMine.textContent = _const__WEBPACK_IMPORTED_MODULE_0__.settings.bomb - _const__WEBPACK_IMPORTED_MODULE_0__.settings.flag;\r\n    }\r\n  }\r\n  if (neighbors.length !== 0) {\r\n    neighbors.forEach(([r, c]) => {\r\n      openEmptyCell(r, c, counterMine);\r\n    });\r\n  }\r\n}\r\n\r\nfunction openCell(cell, rowCell, columnCell, counterMine, clear) {\r\n  if (board[rowCell][columnCell].bomb) {\r\n    cell.classList.add('bang');\r\n    bangSound.play();\r\n    openMines();\r\n    setTimeout(() => {\r\n      endGame(_createMarkup__WEBPACK_IMPORTED_MODULE_1__.blockPopup, clear, 'Game over');\r\n    }, 500);\r\n  } else {\r\n    clickSound.play();\r\n    cell.classList.add('open');\r\n    board[rowCell][columnCell].opened = true;\r\n    if (board[rowCell][columnCell].bombsAround !== 0) {\r\n      cell.textContent = board[rowCell][columnCell].bombsAround;\r\n    }\r\n    changeColor(cell);\r\n    if (board[rowCell][columnCell].bombsAround === 0) {\r\n      openEmptyCell(rowCell, columnCell, counterMine);\r\n    }\r\n  }\r\n  checkGameStatus(clear);\r\n}\r\n\r\nfunction addResultToTable() {\r\n  const popupHeader = _createMarkup__WEBPACK_IMPORTED_MODULE_1__.blockPopup.querySelector('.popup-header');\r\n\r\n  results.push({\r\n    time: _const__WEBPACK_IMPORTED_MODULE_0__.settings.time,\r\n    click: _const__WEBPACK_IMPORTED_MODULE_0__.settings.click,\r\n    status: popupHeader.textContent === 'Game over' ? 'fail' : 'win',\r\n  });\r\n  if (results.length > 10) {\r\n    results.shift();\r\n  }\r\n  results.forEach((result, index) => {\r\n    resultsTime[index].textContent = result.time;\r\n    resultsClick[index].textContent = result.click;\r\n    resultsStatus[index].textContent = result.status;\r\n  });\r\n}\r\n\r\nfunction savedGame(levelSelection, minesSelection) {\r\n  const gameMinesweeper = JSON.stringify({\r\n    settings: _const__WEBPACK_IMPORTED_MODULE_0__.settings,\r\n    board,\r\n    selectLevel: levelSelection.value,\r\n    selectMines: minesSelection.value,\r\n  });\r\n  localStorage.setItem('gameMinesweeper', gameMinesweeper);\r\n}\r\n\r\nfunction savedResults() {\r\n  if (results.length !== 0) {\r\n    localStorage.setItem('minesweeperResult', JSON.stringify(results));\r\n  }\r\n}\r\n\r\nfunction recoveryParams(params, elem) {\r\n  Object.assign(_const__WEBPACK_IMPORTED_MODULE_0__.settings, params.settings);\r\n  elem.counterTime.textContent = params.settings.time;\r\n  elem.counterClick.textContent = params.settings.click;\r\n  elem.counterTag.textContent = params.settings.flag;\r\n  elem.counterMine.textContent = _const__WEBPACK_IMPORTED_MODULE_0__.settings.bomb - _const__WEBPACK_IMPORTED_MODULE_0__.settings.flag;\r\n\r\n  elem.blockLevelSelection.value = params.selectLevel;\r\n  elem.minesSelection.value = params.selectMines;\r\n\r\n  if (params.selectLevel === 'hard') {\r\n    _createMarkup__WEBPACK_IMPORTED_MODULE_1__.wrapperMain.classList.add('hard');\r\n  }\r\n\r\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.createGameBoard)(_const__WEBPACK_IMPORTED_MODULE_0__.settings.count, _createMarkup__WEBPACK_IMPORTED_MODULE_1__.blockBoard);\r\n  board = params.board;\r\n  board.forEach((row, i) => {\r\n    row.forEach((cell, j) => {\r\n      if (cell.opened) {\r\n        const currentCell = _createMarkup__WEBPACK_IMPORTED_MODULE_1__.blockBoard.querySelector(\r\n          `[data-row=\"${i}\"][data-col=\"${j}\"`,\r\n        );\r\n        currentCell.classList.add('open');\r\n        if (board[i][j].bombsAround !== 0) {\r\n          currentCell.textContent = board[i][j].bombsAround;\r\n        }\r\n        changeColor(currentCell);\r\n      }\r\n      if (cell.flag) {\r\n        const currentCell = _createMarkup__WEBPACK_IMPORTED_MODULE_1__.blockBoard.querySelector(\r\n          `[data-row=\"${i}\"][data-col=\"${j}\"`,\r\n        );\r\n        currentCell.classList.add('flag');\r\n      }\r\n    });\r\n  });\r\n}\r\n\r\nfunction recoveryResults(saveResults) {\r\n  JSON.parse(saveResults).forEach((res, index) => {\r\n    results.push(res);\r\n    resultsTime[index].textContent = res.time;\r\n    resultsClick[index].textContent = res.click;\r\n    resultsStatus[index].textContent = res.status;\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/modules/game.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement),\n/* harmony export */   \"createElementFromString\": () => (/* binding */ createElementFromString),\n/* harmony export */   \"createGameBoard\": () => (/* binding */ createGameBoard),\n/* harmony export */   \"resetSettings\": () => (/* binding */ resetSettings),\n/* harmony export */   \"startTimer\": () => (/* binding */ startTimer)\n/* harmony export */ });\nfunction createElement(tagName, className, root) {\r\n  const elem = document.createElement(tagName);\r\n  elem.classList.add(className);\r\n  if (root) {\r\n    root.append(elem);\r\n  }\r\n  return elem;\r\n}\r\n\r\nfunction createElementFromString(string, root) {\r\n  const template = document.createElement('template');\r\n  template.innerHTML = string;\r\n  const elem = template.content.firstElementChild;\r\n  if (root) {\r\n    root.append(elem);\r\n  }\r\n  return elem;\r\n}\r\n\r\nfunction createGameBoard(size, root) {\r\n  root.innerHTML = '';\r\n  for (let i = 0; i < size; i++) {\r\n    const row = document.createElement('div');\r\n    row.classList.add('row');\r\n    root.appendChild(row);\r\n    for (let j = 0; j < size; j++) {\r\n      const cell = document.createElement('div');\r\n      cell.classList.add('cell');\r\n      cell.dataset.row = i;\r\n      cell.dataset.col = j;\r\n      row.appendChild(cell);\r\n    }\r\n  }\r\n}\r\n\r\nfunction resetSettings(\r\n  settings,\r\n  counterTime,\r\n  counterClick,\r\n  counterTag,\r\n  counterMine,\r\n) {\r\n  settings.time = 0;\r\n  settings.click = 0;\r\n  settings.flag = 0;\r\n\r\n  counterTime.textContent = 0;\r\n  counterClick.textContent = 0;\r\n  counterTag.textContent = 0;\r\n  counterMine.textContent = settings.bomb;\r\n}\r\n\r\nfunction startTimer(settings, elem) {\r\n  settings.time += 1;\r\n  elem.textContent = settings.time.toString().padStart(3, '0');\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/listeners.js":
/*!**********************************!*\
  !*** ./src/modules/listeners.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createMarkup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMarkup */ \"./src/modules/createMarkup.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/modules/game.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const */ \"./src/modules/const.js\");\n\r\n\r\n\r\n\r\n\r\nlet clear;\r\nconst startBtn = _createMarkup__WEBPACK_IMPORTED_MODULE_0__.blockControls.querySelector('.start-game');\r\n\r\nconst counterTime = _createMarkup__WEBPACK_IMPORTED_MODULE_0__.blockControls.querySelector('.counter-time');\r\nconst counterClick = _createMarkup__WEBPACK_IMPORTED_MODULE_0__.blockControls.querySelector('.counter-click');\r\nconst counterTag = _createMarkup__WEBPACK_IMPORTED_MODULE_0__.blockControls.querySelector('.counter-tag');\r\nconst counterMine = _createMarkup__WEBPACK_IMPORTED_MODULE_0__.blockControls.querySelector('.counter-mine');\r\n\r\nconst tryAgainBtn = _createMarkup__WEBPACK_IMPORTED_MODULE_0__.blockPopup.querySelector('.tryAgain-btn');\r\nconst okBtn = _createMarkup__WEBPACK_IMPORTED_MODULE_0__.blockPopup.querySelector('.ok-btn');\r\n\r\nconst minesSelection = _createMarkup__WEBPACK_IMPORTED_MODULE_0__.blockMinesSelection.querySelector('.minesSelection');\r\n\r\nstartBtn.addEventListener('click', () => {\r\n  clearInterval(clear);\r\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.createGameBoard)(_const__WEBPACK_IMPORTED_MODULE_3__.settings.count, _createMarkup__WEBPACK_IMPORTED_MODULE_0__.blockBoard);\r\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.resetSettings)(_const__WEBPACK_IMPORTED_MODULE_3__.settings, counterTime, counterClick, counterTag, counterMine);\r\n});\r\n\r\n_createMarkup__WEBPACK_IMPORTED_MODULE_0__.blockLevelSelection.addEventListener('change', (event) => {\r\n  const level = event.target.value;\r\n  if (level === 'easy') {\r\n    _const__WEBPACK_IMPORTED_MODULE_3__.settings.count = 10;\r\n    _createMarkup__WEBPACK_IMPORTED_MODULE_0__.wrapperMain.classList.remove('hard');\r\n  } else if (level === 'medium') {\r\n    _const__WEBPACK_IMPORTED_MODULE_3__.settings.count = 15;\r\n    _createMarkup__WEBPACK_IMPORTED_MODULE_0__.wrapperMain.classList.remove('hard');\r\n  } else if (level === 'hard') {\r\n    _const__WEBPACK_IMPORTED_MODULE_3__.settings.count = 25;\r\n    _createMarkup__WEBPACK_IMPORTED_MODULE_0__.wrapperMain.classList.add('hard');\r\n  }\r\n  clearInterval(clear);\r\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.createGameBoard)(_const__WEBPACK_IMPORTED_MODULE_3__.settings.count, _createMarkup__WEBPACK_IMPORTED_MODULE_0__.blockBoard);\r\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.resetSettings)(_const__WEBPACK_IMPORTED_MODULE_3__.settings, counterTime, counterClick, counterTag, counterMine);\r\n  counterMine.textContent = _const__WEBPACK_IMPORTED_MODULE_3__.settings.bomb;\r\n});\r\n\r\nminesSelection.addEventListener('change', (event) => {\r\n  let count = event.target.value;\r\n  if (+count < 1 || +count > 99) {\r\n    event.target.value = '10';\r\n    count = event.target.value;\r\n  }\r\n  _const__WEBPACK_IMPORTED_MODULE_3__.settings.bomb = +count;\r\n  clearInterval(clear);\r\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.createGameBoard)(_const__WEBPACK_IMPORTED_MODULE_3__.settings.count, _createMarkup__WEBPACK_IMPORTED_MODULE_0__.blockBoard);\r\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.resetSettings)(_const__WEBPACK_IMPORTED_MODULE_3__.settings, counterTime, counterClick, counterTag, counterMine);\r\n  counterMine.textContent = _const__WEBPACK_IMPORTED_MODULE_3__.settings.bomb;\r\n});\r\n\r\nconst switchTheme = _createMarkup__WEBPACK_IMPORTED_MODULE_0__.blockChangeTheme.querySelector('#change-theme');\r\nconst switchVolume = _createMarkup__WEBPACK_IMPORTED_MODULE_0__.blockChangeTheme.querySelector('.block-volume');\r\ndocument.documentElement.style.setProperty(\r\n  '--colorLight',\r\n  'rgb(242, 245, 238)',\r\n);\r\ndocument.documentElement.style.setProperty('--colorDark', 'rgb(94, 91, 91)');\r\n\r\nswitchTheme.addEventListener('change', () => {\r\n  const st = document.documentElement.style;\r\n  if (st.getPropertyValue('--colorLight') === 'rgb(242, 245, 238)') {\r\n    st.setProperty('--colorLight', 'rgb(94, 91, 91)');\r\n    st.setProperty('--colorDark', 'rgb(242, 245, 238)');\r\n  } else {\r\n    st.setProperty('--colorLight', 'rgb(242, 245, 238)');\r\n    st.setProperty('--colorDark', 'rgb(94, 91, 91)');\r\n  }\r\n});\r\n\r\nswitchVolume.addEventListener('click', (event) => {\r\n  if (event.currentTarget.classList.contains('unmute')) {\r\n    event.currentTarget.classList.remove('unmute');\r\n    event.currentTarget.classList.add('mute');\r\n    (0,_game__WEBPACK_IMPORTED_MODULE_1__.changeVolume)('unmute');\r\n  } else {\r\n    event.currentTarget.classList.remove('mute');\r\n    event.currentTarget.classList.add('unmute');\r\n    (0,_game__WEBPACK_IMPORTED_MODULE_1__.changeVolume)('mute');\r\n  }\r\n});\r\n\r\n_createMarkup__WEBPACK_IMPORTED_MODULE_0__.blockBoard.addEventListener('contextmenu', (event) => {\r\n  event.preventDefault();\r\n\r\n  if (event.target.classList.contains('cell')) {\r\n    const cell = event.target;\r\n    if (_const__WEBPACK_IMPORTED_MODULE_3__.settings.click !== 0) {\r\n      (0,_game__WEBPACK_IMPORTED_MODULE_1__.tagCell)(cell, _const__WEBPACK_IMPORTED_MODULE_3__.settings, counterTag, counterMine);\r\n    }\r\n  }\r\n});\r\n\r\n_createMarkup__WEBPACK_IMPORTED_MODULE_0__.blockBoard.addEventListener('click', (event) => {\r\n  if (event.target.classList.contains('cell')) {\r\n    const cell = event.target;\r\n    const rowCell = cell.dataset.row;\r\n    const column = cell.dataset.col;\r\n\r\n    if (_const__WEBPACK_IMPORTED_MODULE_3__.settings.click === 0 && _const__WEBPACK_IMPORTED_MODULE_3__.settings.flag === 0) {\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.startTimer)(_const__WEBPACK_IMPORTED_MODULE_3__.settings, counterTime);\r\n      clear = setInterval(() => {\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.startTimer)(_const__WEBPACK_IMPORTED_MODULE_3__.settings, counterTime);\r\n      }, 1000);\r\n    }\r\n\r\n    if (_const__WEBPACK_IMPORTED_MODULE_3__.settings.click === 0) {\r\n      (0,_game__WEBPACK_IMPORTED_MODULE_1__.placeMines)(rowCell, column, _createMarkup__WEBPACK_IMPORTED_MODULE_0__.blockLevelSelection.value);\r\n    }\r\n\r\n    if (!cell.classList.contains('flag') && !cell.classList.contains('open')) {\r\n      _const__WEBPACK_IMPORTED_MODULE_3__.settings.click += 1;\r\n      counterClick.textContent = _const__WEBPACK_IMPORTED_MODULE_3__.settings.click;\r\n      (0,_game__WEBPACK_IMPORTED_MODULE_1__.openCell)(cell, rowCell, column, counterMine, clear);\r\n    }\r\n  }\r\n});\r\n\r\ntryAgainBtn.addEventListener('click', () => {\r\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.createGameBoard)(_const__WEBPACK_IMPORTED_MODULE_3__.settings.count, _createMarkup__WEBPACK_IMPORTED_MODULE_0__.blockBoard);\r\n  (0,_game__WEBPACK_IMPORTED_MODULE_1__.addResultToTable)();\r\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.resetSettings)(_const__WEBPACK_IMPORTED_MODULE_3__.settings, counterTime, counterClick, counterTag, counterMine);\r\n  (0,_game__WEBPACK_IMPORTED_MODULE_1__.startNewGame)();\r\n});\r\n\r\nokBtn.addEventListener('click', () => {\r\n  (0,_game__WEBPACK_IMPORTED_MODULE_1__.addResultToTable)();\r\n  (0,_game__WEBPACK_IMPORTED_MODULE_1__.startNewGame)();\r\n});\r\n\r\nwindow.addEventListener('beforeunload', () => {\r\n  if (_const__WEBPACK_IMPORTED_MODULE_3__.settings.click !== 0 || _const__WEBPACK_IMPORTED_MODULE_3__.settings.flag !== 0) {\r\n    (0,_game__WEBPACK_IMPORTED_MODULE_1__.savedGame)(_createMarkup__WEBPACK_IMPORTED_MODULE_0__.blockLevelSelection, minesSelection);\r\n  }\r\n  (0,_game__WEBPACK_IMPORTED_MODULE_1__.savedResults)();\r\n});\r\n\r\nwindow.addEventListener('load', () => {\r\n  const game = localStorage.getItem('gameMinesweeper');\r\n  const saveResults = localStorage.getItem('minesweeperResult');\r\n  if (saveResults) {\r\n    (0,_game__WEBPACK_IMPORTED_MODULE_1__.recoveryResults)(saveResults);\r\n  }\r\n  if (game) {\r\n    const answer = confirm('You want to continue the last game you started');\r\n    if (answer) {\r\n      const params = JSON.parse(game);\r\n      const elem = {\r\n        counterTime,\r\n        counterClick,\r\n        counterTag,\r\n        counterMine,\r\n        blockLevelSelection: _createMarkup__WEBPACK_IMPORTED_MODULE_0__.blockLevelSelection,\r\n        blockBoard: _createMarkup__WEBPACK_IMPORTED_MODULE_0__.blockBoard,\r\n        minesSelection,\r\n      };\r\n      (0,_game__WEBPACK_IMPORTED_MODULE_1__.recoveryParams)(params, elem);\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.startTimer)(_const__WEBPACK_IMPORTED_MODULE_3__.settings, counterTime);\r\n      clear = setInterval(() => {\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.startTimer)(_const__WEBPACK_IMPORTED_MODULE_3__.settings, counterTime);\r\n      }, 1000);\r\n    }\r\n    localStorage.removeItem('gameMinesweeper');\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://minesweeper/./src/modules/listeners.js?");

/***/ }),

/***/ "./src/assets/clock.svg":
/*!******************************!*\
  !*** ./src/assets/clock.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9b4760d3f89b090006f5.svg\";\n\n//# sourceURL=webpack://minesweeper/./src/assets/clock.svg?");

/***/ }),

/***/ "./src/assets/flag.svg":
/*!*****************************!*\
  !*** ./src/assets/flag.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3cab16f6dc7130128b39.svg\";\n\n//# sourceURL=webpack://minesweeper/./src/assets/flag.svg?");

/***/ }),

/***/ "./src/assets/mine.svg":
/*!*****************************!*\
  !*** ./src/assets/mine.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7634573a600035882b41.svg\";\n\n//# sourceURL=webpack://minesweeper/./src/assets/mine.svg?");

/***/ }),

/***/ "./src/assets/moon.svg":
/*!*****************************!*\
  !*** ./src/assets/moon.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c9f9c50384abe84c8371.svg\";\n\n//# sourceURL=webpack://minesweeper/./src/assets/moon.svg?");

/***/ }),

/***/ "./src/assets/sun.svg":
/*!****************************!*\
  !*** ./src/assets/sun.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"297caacb6444828bb36f.svg\";\n\n//# sourceURL=webpack://minesweeper/./src/assets/sun.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;