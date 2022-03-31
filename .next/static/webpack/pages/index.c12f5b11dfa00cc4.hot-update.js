"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/NabBar.js":
/*!******************************!*\
  !*** ./components/NabBar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction NavBar() {\n    _s();\n    // 라우터와 연결할 수 있도록 해주는 Hook\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    console.log(router); // 우리 location에 관한 정보들을 얻을 수 있음 \n    // 클래스 이름을 추가할 때 텍스트로 적지 않고 자바스크립트 오브젝트에서의 프로퍼티 형식으로 작성 \n    // 이러한 접근 방식의 장점으로는 class명이 nav가 아니라 NavBar_nav 그리고 어떤 무작위 텍스트로 구성됨\n    // 그러면 그 어떤 충돌도 만들지 않음 예를 들면 다른 컴포넌트에서도 nav라는 클래스 이름을 사용할 수 있도록 하는 것\n    // 또 /NavBar.module.css 모듈 내에 다른 클래스 이름이 존재한다면 유저가 브라우저에서 봤을 때 모두 이상한 무작위 이름으로 작성되는 것\n    // 다른 css 파일 또는 module.css 파일과 충돌하지 않을까 걱정하지 않아도 됨! (같은 이름으로 만들어도 무작위 이름이 붙으니까 충돌 안남)\n    return(// <nav className={styles.nav}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"jsx-6bcdeef2cd05931b\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                /*#__PURE__*/ children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"jsx-6bcdeef2cd05931b\" + \" \" + ((router.pathname === \"/\" ? \"active\" : \"\") || \"\"),\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\react\\\\nextjs-intro\\\\components\\\\NabBar.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\react\\\\nextjs-intro\\\\components\\\\NabBar.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/about\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"jsx-6bcdeef2cd05931b\" + \" \" + ((router.pathname === \"/about\" ? \"active\" : \"\") || \"\"),\n                    children: \"About\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\react\\\\nextjs-intro\\\\components\\\\NabBar.js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\react\\\\nextjs-intro\\\\components\\\\NabBar.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"6bcdeef2cd05931b\",\n                children: \"nav.jsx-6bcdeef2cd05931b{background-color:tomato}a.jsx-6bcdeef2cd05931b{text-decoration:none}.active.jsx-6bcdeef2cd05931b{color:yellow}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\project\\\\react\\\\nextjs-intro\\\\components\\\\NabBar.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this));\n}; /*\r\n    NextJS 어플리케이션에서 anchor 태그를 네비게이팅 하는 데에 사용하면 안 되는 이유는 \r\n    NextJS에, 앱 내에서 페이지를 네비게이트 할 때 사용해야만 하는 특정 컴포넌트가 존재하기 때문\r\n    ReactJS에서 React Router Link를 사용해야만 할 때와 이유가 같음 \r\n    특정 페이지에 들어가면 전체 어플리케이션은 새로고침이 됨 -> 그건 싫음 client side navigation  이 없다는 의미니까\r\n    브라우저가 다른 페이지로 보내기 위해 전체 페이지를 새로고침 한다는 얘기. \r\n    이런식으로 하면 느려질 수 있기 때문에 NextJS에서는 특정 사용해야만 하는 특정 Link 컴포넌트가 존재함 \r\n    Link를 사용하면 새로고침이 되지 않고 a 태그보다 훨씬 속도가 빠름 \r\n\r\n    React Router Dom \r\n    Link에 style이나 className을 줄 수 없음 NextJS에서는 anchor 태그를 생성해서 줘야함\r\n    Link는 단지 href만을 위한 것 나머지는 모두 anchor 태그에다 넣기 \r\n*/ \n_s(NavBar, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = NavBar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hYkJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNXO0FBQ0M7O0FBRXpCLFFBQVEsQ0FBQ0csTUFBTSxHQUFHLENBQUM7O0lBQzlCLEVBQTBCO0lBQ0UsR0FBdkIsQ0FBQ0MsTUFBTSxHQUFHSCxzREFBUztJQUN4QkksT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBZ0M7SUFFekIsRUFBNEI7SUFDMEIsRUFBZjtJQUNDO0lBQ3NCLEVBQUw7SUFDUyxFQUFUO0lBQ1csTUFBMUYsQ0FDRixFQUErQjtnRkFDOUJHLENBQUc7Ozt3RkFDQ1Asa0RBQUk7Z0JBQUNRLElBQUksRUFBQyxDQUFHO29IQUlUQyxDQUFDO2dFQUFZTCxNQUFNLENBQUNNLFFBQVEsS0FBSyxDQUFHLEtBQUcsQ0FBUSxVQUFHLENBQUU7OEJBQUUsQ0FBSTs7Ozs7Ozs7Ozs7d0ZBRTlEVixrREFBSTtnQkFBQ1EsSUFBSSxFQUFDLENBQVE7c0dBTWRDLENBQUM7Z0VBQVlMLE1BQU0sQ0FBQ00sUUFBUSxLQUFLLENBQVEsVUFBRyxDQUFRLFVBQUcsQ0FBRTs4QkFBRSxDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQmpGLENBQUMsRUFFRCxFQVlFO0dBM0RzQlAsTUFBTTs7UUFFWEYsU0FBUzs7O0tBRkpFLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYWJCYXIuanM/NGQ5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTmF2QmFyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkJhcigpIHtcclxuICAgIC8vIOudvOyasO2EsOyZgCDsl7DqsrDtlaAg7IiYIOyeiOuPhOuhnSDtlbTso7zripQgSG9va1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7ICBcclxuICAgIGNvbnNvbGUubG9nKHJvdXRlcik7IC8vIOyasOumrCBsb2NhdGlvbuyXkCDqtIDtlZwg7KCV67O065Ok7J2EIOyWu+ydhCDsiJgg7J6I7J2MIFxyXG5cclxuICAgIC8vIO2BtOuemOyKpCDsnbTrpoTsnYQg7LaU6rCA7ZWgIOuVjCDthY3siqTtirjroZwg7KCB7KeAIOyViuqzoCDsnpDrsJTsiqTtgazrpr3tirgg7Jik67iM7KCd7Yq47JeQ7ISc7J2YIO2UhOuhnO2NvO2LsCDtmJXsi53snLzroZwg7J6R7ISxIFxyXG4gICAgLy8g7J2065+s7ZWcIOygkeq3vCDrsKnsi53snZgg7J6l7KCQ7Jy866Gc64qUIGNsYXNz66qF7J20IG5hduqwgCDslYTri4jrnbwgTmF2QmFyX25hdiDqt7jrpqzqs6Ag7Ja065akIOustOyekeychCDthY3siqTtirjroZwg6rWs7ISx65CoXHJcbiAgICAvLyDqt7jrn6zrqbQg6re4IOyWtOuWpCDstqnrj4zrj4Qg66eM65Ok7KeAIOyViuydjCDsmIjrpbwg65Ok66m0IOuLpOuluCDsu7Ttj6zrhIztirjsl5DshJzrj4QgbmF2652864qUIO2BtOuemOyKpCDsnbTrpoTsnYQg7IKs7Jqp7ZWgIOyImCDsnojrj4TroZ0g7ZWY64qUIOqyg1xyXG4gICAgLy8g65iQIC9OYXZCYXIubW9kdWxlLmNzcyDrqqjrk4gg64K07JeQIOuLpOuluCDtgbTrnpjsiqQg7J2066aE7J20IOyhtOyerO2VnOuLpOuptCDsnKDsoIDqsIAg67iM65287Jqw7KCA7JeQ7IScIOu0pOydhCDrlYwg66qo65GQIOydtOyDge2VnCDrrLTsnpHsnIQg7J2066aE7Jy866GcIOyekeyEseuQmOuKlCDqsoNcclxuICAgIC8vIOuLpOuluCBjc3Mg7YyM7J28IOuYkOuKlCBtb2R1bGUuY3NzIO2MjOydvOqzvCDstqnrj4ztlZjsp4Ag7JWK7J2E6rmMIOqxseygle2VmOyngCDslYrslYTrj4Qg65CoISAo6rCZ7J2AIOydtOumhOycvOuhnCDrp4zrk6TslrTrj4Qg66y07J6R7JyEIOydtOumhOydtCDrtpnsnLzri4jquYwg7Lap64+MIOyViOuCqClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgey8qIDxhIHN0eWxlPXt7Y29sb3I6IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgPyBcInJlZFwiIDogXCJibHVlXCJ9fSBjbGFzc05hbWU9J2hlbGxvJz5Ib21lPC9hPiAqL31cclxuICAgICAgICAgICAgICAgIHsvKiBjbGFzc+uqhSDsl6zrn6zqsJwg7KO864qUIOuylSAxIFxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlua30gJHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiID8gc3R5bGVzLmFjdGl2ZSA6IFwiXCJ9YCB9PkhvbWU8L2E+ICovfVxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiID8gXCJhY3RpdmVcIiA6IFwiXCJ9PkhvbWU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIGNsYXNz66qFIOyXrOufrOqwnCDso7zripQg67KVIDJcclxuICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e1tcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXMubGluayxcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2Fib3V0XCIgPyBzdHlsZXMuYWN0aXZlIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oXCIgXCIpfT5BYm91dDwvYT4gKi99XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvYWJvdXRcIiA/IFwiYWN0aXZlXCIgOiBcIlwifT5BYm91dDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB7LyogPGEgaHJlZj1cIi9cIj5Ib21lPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L2E+ICovfVxyXG4gICAgICAgICAgICB7Lyogc3R5bGUg7YOc6re47JeQIGpzeCDtlITroa0g7LaU6rCAXHJcbiAgICAgICAgICAgICDsnbQg7Iqk7YOA7J2865Ok7J2AIOyYpOyngSDsnbQg7Lu07Y+s64SM7Yq4IOuCtOu2gOuhnCDrspTsnITqsIAg7ZWc7KCV65CoIFxyXG4gICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnllbGxvdztcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L25hdj5cclxuICAgICkgXHJcbn1cclxuXHJcbi8qXHJcbiAgICBOZXh0SlMg7Ja07ZSM66as7LyA7J207IWY7JeQ7IScIGFuY2hvciDtg5zqt7jrpbwg64Sk67mE6rKM7J207YyFIO2VmOuKlCDrjbDsl5Ag7IKs7Jqp7ZWY66m0IOyViCDrkJjripQg7J207Jyg64qUIFxyXG4gICAgTmV4dEpT7JeQLCDslbEg64K07JeQ7IScIO2OmOydtOyngOulvCDrhKTruYTqsozsnbTtirgg7ZWgIOuVjCDsgqzsmqntlbTslbzrp4wg7ZWY64qUIO2KueyglSDsu7Ttj6zrhIztirjqsIAg7KG07J6s7ZWY6riwIOuVjOusuFxyXG4gICAgUmVhY3RKU+yXkOyEnCBSZWFjdCBSb3V0ZXIgTGlua+ulvCDsgqzsmqntlbTslbzrp4wg7ZWgIOuVjOyZgCDsnbTsnKDqsIAg6rCZ7J2MIFxyXG4gICAg7Yq57KCVIO2OmOydtOyngOyXkCDrk6TslrTqsIDrqbQg7KCE7LK0IOyWtO2UjOumrOy8gOydtOyFmOydgCDsg4jroZzqs6DsuajsnbQg65CoIC0+IOq3uOqxtCDsi6vsnYwgY2xpZW50IHNpZGUgbmF2aWdhdGlvbiAg7J20IOyXhuuLpOuKlCDsnZjrr7jri4jquYxcclxuICAgIOu4jOudvOyasOyggOqwgCDri6Trpbgg7Y6Y7J207KeA66GcIOuztOuCtOq4sCDsnITtlbQg7KCE7LK0IO2OmOydtOyngOulvCDsg4jroZzqs6Dsuagg7ZWc64uk64qUIOyWmOq4sC4gXHJcbiAgICDsnbTrn7Dsi53snLzroZwg7ZWY66m0IOuKkOugpOyniCDsiJgg7J6I6riwIOuVjOusuOyXkCBOZXh0SlPsl5DshJzripQg7Yq57KCVIOyCrOyaqe2VtOyVvOunjCDtlZjripQg7Yq57KCVIExpbmsg7Lu07Y+s64SM7Yq46rCAIOyhtOyerO2VqCBcclxuICAgIExpbmvrpbwg7IKs7Jqp7ZWY66m0IOyDiOuhnOqzoOy5qOydtCDrkJjsp4Ag7JWK6rOgIGEg7YOc6re467O064ukIO2bqOyUrCDsho3rj4TqsIAg67mg66aEIFxyXG5cclxuICAgIFJlYWN0IFJvdXRlciBEb20gXHJcbiAgICBMaW5r7JeQIHN0eWxl7J2064KYIGNsYXNzTmFtZeydhCDspIQg7IiYIOyXhuydjCBOZXh0SlPsl5DshJzripQgYW5jaG9yIO2DnOq3uOulvCDsg53shLHtlbTshJwg7KSY7JW87ZWoXHJcbiAgICBMaW5r64qUIOuLqOyngCBocmVm66eM7J2EIOychO2VnCDqsoMg64KY66i47KeA64qUIOuqqOuRkCBhbmNob3Ig7YOc6re47JeQ64ukIOuEo+q4sCBcclxuKi9cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJOYXZCYXIiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwibmF2IiwiaHJlZiIsImEiLCJwYXRobmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NabBar.js\n");

/***/ })

});