"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./components/NabBar.js":
/*!******************************!*\
  !*** ./components/NabBar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction NavBar() {\n    _s();\n    // 라우터와 연결할 수 있도록 해주는 Hook\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(router); // 우리 location에 관한 정보들을 얻을 수 있음 \n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    style: {\n                        color: router.pathname === \"/\" ? \"red\" : \"blue\"\n                    },\n                    className: \"hello\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\react\\\\nextjs-intro\\\\components\\\\NabBar.js\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\react\\\\nextjs-intro\\\\components\\\\NabBar.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/about\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    style: {\n                        color: router.pathname === \"/about\" ? \"red\" : \"blue\"\n                    },\n                    children: \"About\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\react\\\\nextjs-intro\\\\components\\\\NabBar.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\react\\\\nextjs-intro\\\\components\\\\NabBar.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\project\\\\react\\\\nextjs-intro\\\\components\\\\NabBar.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}; /*\r\n    NextJS 어플리케이션에서 anchor 태그를 네비게이팅 하는 데에 사용하면 안 되는 이유는 \r\n    NextJS에, 앱 내에서 페이지를 네비게이트 할 때 사용해야만 하는 특정 컴포넌트가 존재하기 때문\r\n    ReactJS에서 React Router Link를 사용해야만 할 때와 이유가 같음 \r\n    특정 페이지에 들어가면 전체 어플리케이션은 새로고침이 됨 -> 그건 싫음 client side navigation  이 없다는 의미니까\r\n    브라우저가 다른 페이지로 보내기 위해 전체 페이지를 새로고침 한다는 얘기. \r\n    이런식으로 하면 느려질 수 있기 때문에 NextJS에서는 특정 사용해야만 하는 특정 Link 컴포넌트가 존재함 \r\n    Link를 사용하면 새로고침이 되지 않고 a 태그보다 훨씬 속도가 빠름 \r\n\r\n    React Router Dom \r\n    Link에 style이나 className을 줄 수 없음 NextJS에서는 anchor 태그를 생성해서 줘야함\r\n    Link는 단지 href만을 위한 것 나머지는 모두 anchor 태그에다 넣기 \r\n*/ \n_s(NavBar, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NavBar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hYkJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE0QjtBQUNXOztBQUV4QixRQUFRLENBQUNFLE1BQU0sR0FBRyxDQUFDOztJQUM5QixFQUEwQjtJQUNFLEdBQXZCLENBQUNDLE1BQU0sR0FBR0Ysc0RBQVM7SUFDeEJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQWdDO0lBRXpCLE1BQXRCLDZFQUNERyxDQUFHOzt3RkFDQ04sa0RBQUk7Z0JBQUNPLElBQUksRUFBQyxDQUFHO3NHQUNUQyxDQUFDO29CQUFDQyxLQUFLLEVBQUUsQ0FBQ0M7d0JBQUFBLEtBQUssRUFBRVAsTUFBTSxDQUFDUSxRQUFRLEtBQUssQ0FBRyxLQUFHLENBQUssT0FBRyxDQUFNO29CQUFBLENBQUM7b0JBQUVDLFNBQVMsRUFBQyxDQUFPOzhCQUFDLENBQUk7Ozs7Ozs7Ozs7O3dGQUV0Rlosa0RBQUk7Z0JBQUNPLElBQUksRUFBQyxDQUFRO3NHQUNkQyxDQUFDO29CQUFDQyxLQUFLLEVBQUUsQ0FBQ0M7d0JBQUFBLEtBQUssRUFBRVAsTUFBTSxDQUFDUSxRQUFRLEtBQUssQ0FBUSxVQUFHLENBQUssT0FBRyxDQUFNO29CQUFBLENBQUM7OEJBQUUsQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkYsQ0FBQyxFQUVELEVBWUU7R0EvQnNCVCxNQUFNOztRQUVYRCxTQUFTOzs7S0FGSkMsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hYkJhci5qcz80ZDliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkJhcigpIHtcclxuICAgIC8vIOudvOyasO2EsOyZgCDsl7DqsrDtlaAg7IiYIOyeiOuPhOuhnSDtlbTso7zripQgSG9va1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7ICBcclxuICAgIGNvbnNvbGUubG9nKHJvdXRlcik7IC8vIOyasOumrCBsb2NhdGlvbuyXkCDqtIDtlZwg7KCV67O065Ok7J2EIOyWu+ydhCDsiJgg7J6I7J2MIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7Y29sb3I6IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgPyBcInJlZFwiIDogXCJibHVlXCJ9fSBjbGFzc05hbWU9J2hlbGxvJz5Ib21lPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7Y29sb3I6IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvYWJvdXRcIiA/IFwicmVkXCIgOiBcImJsdWVcIn19PkFib3V0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIHsvKiA8YSBocmVmPVwiL1wiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvYT4gKi99XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApIFxyXG59XHJcblxyXG4vKlxyXG4gICAgTmV4dEpTIOyWtO2UjOumrOy8gOydtOyFmOyXkOyEnCBhbmNob3Ig7YOc6re466W8IOuEpOu5hOqyjOydtO2MhSDtlZjripQg642w7JeQIOyCrOyaqe2VmOuptCDslYgg65CY64qUIOydtOycoOuKlCBcclxuICAgIE5leHRKU+yXkCwg7JWxIOuCtOyXkOyEnCDtjpjsnbTsp4Drpbwg64Sk67mE6rKM7J207Yq4IO2VoCDrlYwg7IKs7Jqp7ZW07JW866eMIO2VmOuKlCDtirnsoJUg7Lu07Y+s64SM7Yq46rCAIOyhtOyerO2VmOq4sCDrlYzrrLhcclxuICAgIFJlYWN0SlPsl5DshJwgUmVhY3QgUm91dGVyIExpbmvrpbwg7IKs7Jqp7ZW07JW866eMIO2VoCDrlYzsmYAg7J207Jyg6rCAIOqwmeydjCBcclxuICAgIO2KueyglSDtjpjsnbTsp4Dsl5Ag65Ok7Ja06rCA66m0IOyghOyytCDslrTtlIzrpqzsvIDsnbTshZjsnYAg7IOI66Gc6rOg7Lmo7J20IOuQqCAtPiDqt7jqsbQg7Iur7J2MIGNsaWVudCBzaWRlIG5hdmlnYXRpb24gIOydtCDsl4bri6TripQg7J2Y66+464uI6rmMXHJcbiAgICDruIzrnbzsmrDsoIDqsIAg64uk66W4IO2OmOydtOyngOuhnCDrs7TrgrTquLAg7JyE7ZW0IOyghOyytCDtjpjsnbTsp4Drpbwg7IOI66Gc6rOg7LmoIO2VnOuLpOuKlCDslpjquLAuIFxyXG4gICAg7J2065+w7Iud7Jy866GcIO2VmOuptCDripDroKTsp4gg7IiYIOyeiOq4sCDrlYzrrLjsl5AgTmV4dEpT7JeQ7ISc64qUIO2KueyglSDsgqzsmqntlbTslbzrp4wg7ZWY64qUIO2KueyglSBMaW5rIOy7tO2PrOuEjO2KuOqwgCDsobTsnqztlaggXHJcbiAgICBMaW5r66W8IOyCrOyaqe2VmOuptCDsg4jroZzqs6DsuajsnbQg65CY7KeAIOyViuqzoCBhIO2DnOq3uOuztOuLpCDtm6jslKwg7IaN64+E6rCAIOu5oOumhCBcclxuXHJcbiAgICBSZWFjdCBSb3V0ZXIgRG9tIFxyXG4gICAgTGlua+yXkCBzdHlsZeydtOuCmCBjbGFzc05hbWXsnYQg7KSEIOyImCDsl4bsnYwgTmV4dEpT7JeQ7ISc64qUIGFuY2hvciDtg5zqt7jrpbwg7IOd7ISx7ZW07IScIOykmOyVvO2VqFxyXG4gICAgTGlua+uKlCDri6jsp4AgaHJlZuunjOydhCDsnITtlZwg6rKDIOuCmOuouOyngOuKlCDrqqjrkZAgYW5jaG9yIO2DnOq3uOyXkOuLpCDrhKPquLAgXHJcbiovXHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiTmF2QmFyIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsIm5hdiIsImhyZWYiLCJhIiwic3R5bGUiLCJjb2xvciIsInBhdGhuYW1lIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NabBar.js\n");

/***/ })

});