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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _NavBar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavBar.module.css */ \"./components/NavBar.module.css\");\n/* harmony import */ var _NavBar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_NavBar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction NavBar() {\n    _s();\n    // 라우터와 연결할 수 있도록 해주는 Hook\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(router); // 우리 location에 관한 정보들을 얻을 수 있음 \n    // 클래스 이름을 추가할 때 텍스트로 적지 않고 자바스크립트 오브젝트에서의 프로퍼티 형식으로 작성 \n    // 이러한 접근 방식의 장점으로는 class명이 nav가 아니라 NavBar_nav 그리고 어떤 무작위 텍스트로 구성됨\n    // 그러면 그 어떤 충돌도 만들지 않음 예를 들면 다른 컴포넌트에서도 nav라는 클래스 이름을 사용할 수 있도록 하는 것\n    // 또 /NavBar.module.css 모듈 내에 다른 클래스 이름이 존재한다면 유저가 브라우저에서 봤을 때 모두 이상한 무작위 이름으로 작성되는 것\n    // 다른 css 파일 또는 module.css 파일과 충돌하지 않을까 걱정하지 않아도 됨! (같은 이름으로 만들어도 무작위 이름이 붙으니까 충돌 안남)\n    return(// <nav className={styles.nav}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"\".concat((_NavBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().link), \" \").concat(router.pathname === \"/\" ? (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\"),\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\react\\\\nextjs-intro\\\\components\\\\NabBar.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\react\\\\nextjs-intro\\\\components\\\\NabBar.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/about\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: [\n                        (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),\n                        router.pathname === \"/about\" ? (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\", \n                    ].join(\" \"),\n                    children: \"About\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\react\\\\nextjs-intro\\\\components\\\\NabBar.js\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\react\\\\nextjs-intro\\\\components\\\\NabBar.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\project\\\\react\\\\nextjs-intro\\\\components\\\\NabBar.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this));\n}; /*\r\n    NextJS 어플리케이션에서 anchor 태그를 네비게이팅 하는 데에 사용하면 안 되는 이유는 \r\n    NextJS에, 앱 내에서 페이지를 네비게이트 할 때 사용해야만 하는 특정 컴포넌트가 존재하기 때문\r\n    ReactJS에서 React Router Link를 사용해야만 할 때와 이유가 같음 \r\n    특정 페이지에 들어가면 전체 어플리케이션은 새로고침이 됨 -> 그건 싫음 client side navigation  이 없다는 의미니까\r\n    브라우저가 다른 페이지로 보내기 위해 전체 페이지를 새로고침 한다는 얘기. \r\n    이런식으로 하면 느려질 수 있기 때문에 NextJS에서는 특정 사용해야만 하는 특정 Link 컴포넌트가 존재함 \r\n    Link를 사용하면 새로고침이 되지 않고 a 태그보다 훨씬 속도가 빠름 \r\n\r\n    React Router Dom \r\n    Link에 style이나 className을 줄 수 없음 NextJS에서는 anchor 태그를 생성해서 줘야함\r\n    Link는 단지 href만을 위한 것 나머지는 모두 anchor 태그에다 넣기 \r\n*/ \n_s(NavBar, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NavBar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hYkJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ1c7QUFDQzs7QUFFekIsUUFBUSxDQUFDRyxNQUFNLEdBQUcsQ0FBQzs7SUFDOUIsRUFBMEI7SUFDRSxHQUF2QixDQUFDQyxNQUFNLEdBQUdILHNEQUFTO0lBQ3hCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFnQztJQUV6QixFQUE0QjtJQUMwQixFQUFmO0lBQ0M7SUFDc0IsRUFBTDtJQUNTLEVBQVQ7SUFDVyxNQUExRixDQUNGLEVBQStCO2dGQUM5QkcsQ0FBRzs7d0ZBQ0NQLGtEQUFJO2dCQUFDUSxJQUFJLEVBQUMsQ0FBRztzR0FFVEMsQ0FBQztvQkFBQ0MsU0FBUyxFQUFHLEdBQWlCTixNQUE0QyxDQUEzREYsZ0VBQVcsRUFBQyxDQUFDLElBQStDLE9BQTdDRSxNQUFNLENBQUNRLFFBQVEsS0FBSyxDQUFHLEtBQUdWLGtFQUFhLEdBQUcsQ0FBRTs4QkFBSyxDQUFJOzs7Ozs7Ozs7Ozt3RkFFeEZGLGtEQUFJO2dCQUFDUSxJQUFJLEVBQUMsQ0FBUTtzR0FDZEMsQ0FBQztvQkFBQ0MsU0FBUyxFQUFFLENBQUM7d0JBQ1hSLGdFQUFXO3dCQUNYRSxNQUFNLENBQUNRLFFBQVEsS0FBSyxDQUFRLFVBQUdWLGtFQUFhLEdBQUcsQ0FBRTtvQkFDakQsQ0FBQyxDQUFDWSxJQUFJLENBQUMsQ0FBRzs4QkFBRyxDQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQU10QyxDQUFDLEVBRUQsRUFZRTtHQXpDc0JYLE1BQU07O1FBRVhGLFNBQVM7OztLQUZKRSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmFiQmFyLmpzPzRkOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL05hdkJhci5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoKSB7XHJcbiAgICAvLyDrnbzsmrDthLDsmYAg7Jew6rKw7ZWgIOyImCDsnojrj4TroZ0g7ZW07KO864qUIEhvb2tcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpOyAgXHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIpOyAvLyDsmrDrpqwgbG9jYXRpb27sl5Ag6rSA7ZWcIOygleuztOuTpOydhCDslrvsnYQg7IiYIOyeiOydjCBcclxuXHJcbiAgICAvLyDtgbTrnpjsiqQg7J2066aE7J2EIOy2lOqwgO2VoCDrlYwg7YWN7Iqk7Yq466GcIOyggeyngCDslYrqs6Ag7J6Q67CU7Iqk7YGs66a97Yq4IOyYpOu4jOygne2KuOyXkOyEnOydmCDtlITroZztjbzti7Ag7ZiV7Iud7Jy866GcIOyekeyEsSBcclxuICAgIC8vIOydtOufrO2VnCDsoJHqt7wg67Cp7Iud7J2YIOyepeygkOycvOuhnOuKlCBjbGFzc+uqheydtCBuYXbqsIAg7JWE64uI6528IE5hdkJhcl9uYXYg6re466as6rOgIOyWtOuWpCDrrLTsnpHsnIQg7YWN7Iqk7Yq466GcIOq1rOyEseuQqFxyXG4gICAgLy8g6re465+s66m0IOq3uCDslrTrlqQg7Lap64+M64+EIOunjOuTpOyngCDslYrsnYwg7JiI66W8IOuTpOuptCDri6Trpbgg7Lu07Y+s64SM7Yq47JeQ7ISc64+EIG5hduudvOuKlCDtgbTrnpjsiqQg7J2066aE7J2EIOyCrOyaqe2VoCDsiJgg7J6I64+E66GdIO2VmOuKlCDqsoNcclxuICAgIC8vIOuYkCAvTmF2QmFyLm1vZHVsZS5jc3Mg66qo65OIIOuCtOyXkCDri6Trpbgg7YG0656Y7IqkIOydtOumhOydtCDsobTsnqztlZzri6TrqbQg7Jyg7KCA6rCAIOu4jOudvOyasOyggOyXkOyEnCDrtKTsnYQg65WMIOuqqOuRkCDsnbTsg4HtlZwg66y07J6R7JyEIOydtOumhOycvOuhnCDsnpHshLHrkJjripQg6rKDXHJcbiAgICAvLyDri6TrpbggY3NzIO2MjOydvCDrmJDripQgbW9kdWxlLmNzcyDtjIzsnbzqs7wg7Lap64+M7ZWY7KeAIOyViuydhOq5jCDqsbHsoJXtlZjsp4Ag7JWK7JWE64+EIOuQqCEgKOqwmeydgCDsnbTrpoTsnLzroZwg66eM65Ok7Ja064+EIOustOyekeychCDsnbTrpoTsnbQg67aZ7Jy864uI6rmMIOy2qeuPjCDslYjrgqgpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgIHsvKiA8YSBzdHlsZT17e2NvbG9yOiByb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiID8gXCJyZWRcIiA6IFwiYmx1ZVwifX0gY2xhc3NOYW1lPSdoZWxsbyc+SG9tZTwvYT4gKi99XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake3N0eWxlcy5saW5rfSAke3JvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgPyBzdHlsZXMuYWN0aXZlIDogXCJcIn1gIH0+SG9tZTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e1tcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXMubGluayxcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2Fib3V0XCIgPyBzdHlsZXMuYWN0aXZlIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oXCIgXCIpfT5BYm91dDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB7LyogPGEgaHJlZj1cIi9cIj5Ib21lPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L2E+ICovfVxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKSBcclxufVxyXG5cclxuLypcclxuICAgIE5leHRKUyDslrTtlIzrpqzsvIDsnbTshZjsl5DshJwgYW5jaG9yIO2DnOq3uOulvCDrhKTruYTqsozsnbTtjIUg7ZWY64qUIOuNsOyXkCDsgqzsmqntlZjrqbQg7JWIIOuQmOuKlCDsnbTsnKDripQgXHJcbiAgICBOZXh0SlPsl5AsIOyVsSDrgrTsl5DshJwg7Y6Y7J207KeA66W8IOuEpOu5hOqyjOydtO2KuCDtlaAg65WMIOyCrOyaqe2VtOyVvOunjCDtlZjripQg7Yq57KCVIOy7tO2PrOuEjO2KuOqwgCDsobTsnqztlZjquLAg65WM66y4XHJcbiAgICBSZWFjdEpT7JeQ7IScIFJlYWN0IFJvdXRlciBMaW5r66W8IOyCrOyaqe2VtOyVvOunjCDtlaAg65WM7JmAIOydtOycoOqwgCDqsJnsnYwgXHJcbiAgICDtirnsoJUg7Y6Y7J207KeA7JeQIOuTpOyWtOqwgOuptCDsoITssrQg7Ja07ZSM66as7LyA7J207IWY7J2AIOyDiOuhnOqzoOy5qOydtCDrkKggLT4g6re46rG0IOyLq+ydjCBjbGllbnQgc2lkZSBuYXZpZ2F0aW9uICDsnbQg7JeG64uk64qUIOydmOuvuOuLiOq5jFxyXG4gICAg67iM65287Jqw7KCA6rCAIOuLpOuluCDtjpjsnbTsp4DroZwg67O064K06riwIOychO2VtCDsoITssrQg7Y6Y7J207KeA66W8IOyDiOuhnOqzoOy5qCDtlZzri6TripQg7JaY6riwLiBcclxuICAgIOydtOufsOyLneycvOuhnCDtlZjrqbQg64qQ66Ck7KeIIOyImCDsnojquLAg65WM66y47JeQIE5leHRKU+yXkOyEnOuKlCDtirnsoJUg7IKs7Jqp7ZW07JW866eMIO2VmOuKlCDtirnsoJUgTGluayDsu7Ttj6zrhIztirjqsIAg7KG07J6s7ZWoIFxyXG4gICAgTGlua+ulvCDsgqzsmqntlZjrqbQg7IOI66Gc6rOg7Lmo7J20IOuQmOyngCDslYrqs6AgYSDtg5zqt7jrs7Tri6Qg7Zuo7JSsIOyGjeuPhOqwgCDruaDrpoQgXHJcblxyXG4gICAgUmVhY3QgUm91dGVyIERvbSBcclxuICAgIExpbmvsl5Agc3R5bGXsnbTrgpggY2xhc3NOYW1l7J2EIOykhCDsiJgg7JeG7J2MIE5leHRKU+yXkOyEnOuKlCBhbmNob3Ig7YOc6re466W8IOyDneyEse2VtOyEnCDspJjslbztlahcclxuICAgIExpbmvripQg64uo7KeAIGhyZWbrp4zsnYQg7JyE7ZWcIOqygyDrgpjrqLjsp4DripQg66qo65GQIGFuY2hvciDtg5zqt7jsl5Dri6Qg64Sj6riwIFxyXG4qL1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsInN0eWxlcyIsIk5hdkJhciIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJuYXYiLCJocmVmIiwiYSIsImNsYXNzTmFtZSIsImxpbmsiLCJwYXRobmFtZSIsImFjdGl2ZSIsImpvaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NabBar.js\n");

/***/ })

});