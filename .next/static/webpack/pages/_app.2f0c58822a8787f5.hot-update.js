"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NabBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NabBar */ \"./components/NabBar.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n// import \"../styles/globals.css\";\n// global.css import 하려고 하면 커스텀 App 이외의 파일들로부터는 임포트 할 수 없다고 error발생 \n// 하지만 커스텀 App 컴포넌트가 있는 곳이라면 모든 Global Styles를 임포트 할 수 있음 (다른 곳에서는 안되고 _app 에서는 가능)\nfunction App(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    // 무조건 이 이름이어야 함 Next JS가 가장 먼저 App을 보기 때문. \n    // index를 렌더링 하기 전에, _app.js를 먼저 확인할 거고, 그 다음에 index.js의 내용물을 렌더링 함 \n    // 여기 넣어둔 청사진을 기반해서 _app.js는 하나의 blueprint\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"jsx-bcd0738acb9c73ba\",\n        __source: {\n            fileName: \"C:\\\\project\\\\react\\\\nextjs-intro\\\\pages\\\\_app.js\",\n            lineNumber: 11,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NabBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\project\\\\react\\\\nextjs-intro\\\\pages\\\\_app.js\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, _objectSpread({\n            }, pageProps, {\n                className: \"jsx-bcd0738acb9c73ba\" + \" \" + (pageProps && pageProps.className != null && pageProps.className || \"\"),\n                __source: {\n                    fileName: \"C:\\\\project\\\\react\\\\nextjs-intro\\\\pages\\\\_app.js\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                },\n                __self: this\n            })),\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"bcd0738acb9c73ba\",\n                __self: this,\n                children: \"a {color:white}\"\n            })\n        ]\n    }));\n};\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3pDLEVBQWtDO0FBQ2xDLEVBQW9FO0FBQ1osRUFBMkI7QUFFcEUsUUFBUSxDQUFDQyxHQUFHLENBQUMsS0FBc0IsRUFBRSxDQUFDO1FBQXhCQyxTQUFTLEdBQVYsS0FBc0IsQ0FBckJBLFNBQVMsRUFBRUMsU0FBUyxHQUFyQixLQUFzQixDQUFWQSxTQUFTO0lBQzdDLEVBQTRDO0lBQ0osRUFBNEI7SUFDVixFQUFoQjtJQUMxQyxNQUFNLHVFQUNEQyxDQUFHOzs7Ozs7Ozs7aUZBQ0NKLDBEQUFNOzs7Ozs7OztpRkFDTkUsU0FBUztlQUFLQyxTQUFTOzJEQUFUQSxTQUFTLElBQVRBLFNBQVMsc0JBQVRBLFNBQVM7Ozs7Ozs7Ozs7Ozs7OztBQVFwQyxDQUFDO0tBZnVCRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hYkJhclwiO1xyXG4vLyBpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuLy8gZ2xvYmFsLmNzcyBpbXBvcnQg7ZWY66Ck6rOgIO2VmOuptCDsu6TsiqTthYAgQXBwIOydtOyZuOydmCDtjIzsnbzrk6TroZzrtoDthLDripQg7J6E7Y+s7Yq4IO2VoCDsiJgg7JeG64uk6rOgIGVycm9y67Cc7IOdIFxyXG4vLyDtlZjsp4Drp4wg7Luk7Iqk7YWAIEFwcCDsu7Ttj6zrhIztirjqsIAg7J6I64qUIOqzs+ydtOudvOuptCDrqqjrk6AgR2xvYmFsIFN0eWxlc+ulvCDsnoTtj6ztirgg7ZWgIOyImCDsnojsnYwgKOuLpOuluCDqs7Psl5DshJzripQg7JWI65CY6rOgIF9hcHAg7JeQ7ISc64qUIOqwgOuKpSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KSB7XHJcbiAgICAvLyDrrLTsobDqsbQg7J20IOydtOumhOydtOyWtOyVvCDtlaggTmV4dCBKU+qwgCDqsIDsnqUg66i87KCAIEFwcOydhCDrs7TquLAg65WM66y4LiBcclxuICAgIC8vIGluZGV466W8IOugjOuNlOungSDtlZjquLAg7KCE7JeQLCBfYXBwLmpz66W8IOuovOyggCDtmZXsnbjtlaAg6rGw6rOgLCDqt7gg64uk7J2M7JeQIGluZGV4Lmpz7J2YIOuCtOyaqeusvOydhCDroIzrjZTrp4Eg7ZWoIFxyXG4gICAgLy8g7Jes6riwIOuEo+yWtOuRlCDssq3sgqzsp4TsnYQg6riw67CY7ZW07IScIF9hcHAuanPripQg7ZWY64KY7J2YIGJsdWVwcmludFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJOYXZCYXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});