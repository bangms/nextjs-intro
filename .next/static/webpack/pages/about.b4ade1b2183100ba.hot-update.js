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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction NavBar() {\n    _s();\n    // 라우터와 연결할 수 있도록 해주는 Hook\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(router); // 우리 location에 관한 정보들을 얻을 수 있음 \n    // 클래스 이름을 추가할 때 텍스트로 적지 않고 자바스크립트 오브젝트에서의 프로퍼티 형식으로 작성 \n    // 이러한 접근 방식의 장점으로는 class명이 nav가 아니라 NavBar_nav 그리고 어떤 무작위 텍스트로 구성됨\n    // 그러면 그 어떤 충돌도 만들지 않음 예를 들면 다른 컴포넌트에서도 nav라는 클래스 이름을 사용할 수 있도록 하는 것\n    // 또 /NavBar.module.css 모듈 내에 다른 클래스 이름이 존재한다면 유저가 브라우저에서 봤을 때 모두 이상한 무작위 이름으로 작성되는 것\n    // 다른 css 파일 또는 module.css 파일과 충돌하지 않을까 걱정하지 않아도 됨! (같은 이름으로 만들어도 무작위 이름이 붙으니까 충돌 안남)\n    return(// <nav className={styles.nav}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    style: {\n                        color: router.pathname === \"/\" ? \"red\" : \"blue\"\n                    },\n                    className: \"hello\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\react\\\\nextjs-intro\\\\components\\\\NabBar.js\",\n                    lineNumber: 19,\n                    columnNumber: 18\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\react\\\\nextjs-intro\\\\components\\\\NabBar.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/about\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    style: {\n                        color: router.pathname === \"/about\" ? \"red\" : \"blue\"\n                    },\n                    children: \"About\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\react\\\\nextjs-intro\\\\components\\\\NabBar.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\react\\\\nextjs-intro\\\\components\\\\NabBar.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\project\\\\react\\\\nextjs-intro\\\\components\\\\NabBar.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this));\n}; /*\r\n    NextJS 어플리케이션에서 anchor 태그를 네비게이팅 하는 데에 사용하면 안 되는 이유는 \r\n    NextJS에, 앱 내에서 페이지를 네비게이트 할 때 사용해야만 하는 특정 컴포넌트가 존재하기 때문\r\n    ReactJS에서 React Router Link를 사용해야만 할 때와 이유가 같음 \r\n    특정 페이지에 들어가면 전체 어플리케이션은 새로고침이 됨 -> 그건 싫음 client side navigation  이 없다는 의미니까\r\n    브라우저가 다른 페이지로 보내기 위해 전체 페이지를 새로고침 한다는 얘기. \r\n    이런식으로 하면 느려질 수 있기 때문에 NextJS에서는 특정 사용해야만 하는 특정 Link 컴포넌트가 존재함 \r\n    Link를 사용하면 새로고침이 되지 않고 a 태그보다 훨씬 속도가 빠름 \r\n\r\n    React Router Dom \r\n    Link에 style이나 className을 줄 수 없음 NextJS에서는 anchor 태그를 생성해서 줘야함\r\n    Link는 단지 href만을 위한 것 나머지는 모두 anchor 태그에다 넣기 \r\n*/ \n_s(NavBar, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NavBar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hYkJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE0QjtBQUNXO0FBQ0M7O0FBRXpCLFFBQVEsQ0FBQ0csTUFBTSxHQUFHLENBQUM7O0lBQzlCLEVBQTBCO0lBQ0UsR0FBdkIsQ0FBQ0MsTUFBTSxHQUFHSCxzREFBUztJQUN4QkksT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBZ0M7SUFFekIsRUFBNEI7SUFDMEIsRUFBZjtJQUNDO0lBQ3NCLEVBQUw7SUFDUyxFQUFUO0lBQ1csTUFBMUYsQ0FDRixFQUErQjtnRkFDOUJHLENBQUc7O3dGQUNDUCxrREFBSTtnQkFBQ1EsSUFBSSxFQUFDLENBQUc7c0dBQ1JDLENBQUM7b0JBQUNDLEtBQUssRUFBRSxDQUFDQzt3QkFBQUEsS0FBSyxFQUFFUCxNQUFNLENBQUNRLFFBQVEsS0FBSyxDQUFHLEtBQUcsQ0FBSyxPQUFHLENBQU07b0JBQUEsQ0FBQztvQkFBRUMsU0FBUyxFQUFDLENBQU87OEJBQUMsQ0FBSTs7Ozs7Ozs7Ozs7d0ZBRXZGYixrREFBSTtnQkFBQ1EsSUFBSSxFQUFDLENBQVE7c0dBQ2RDLENBQUM7b0JBQUNDLEtBQUssRUFBRSxDQUFDQzt3QkFBQUEsS0FBSyxFQUFFUCxNQUFNLENBQUNRLFFBQVEsS0FBSyxDQUFRLFVBQUcsQ0FBSyxPQUFHLENBQU07b0JBQUEsQ0FBQzs4QkFBRSxDQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQU12RixDQUFDLEVBRUQsRUFZRTtHQXJDc0JULE1BQU07O1FBRVhGLFNBQVM7OztLQUZKRSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmFiQmFyLmpzPzRkOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL05hdkJhci5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoKSB7XHJcbiAgICAvLyDrnbzsmrDthLDsmYAg7Jew6rKw7ZWgIOyImCDsnojrj4TroZ0g7ZW07KO864qUIEhvb2tcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpOyAgXHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIpOyAvLyDsmrDrpqwgbG9jYXRpb27sl5Ag6rSA7ZWcIOygleuztOuTpOydhCDslrvsnYQg7IiYIOyeiOydjCBcclxuXHJcbiAgICAvLyDtgbTrnpjsiqQg7J2066aE7J2EIOy2lOqwgO2VoCDrlYwg7YWN7Iqk7Yq466GcIOyggeyngCDslYrqs6Ag7J6Q67CU7Iqk7YGs66a97Yq4IOyYpOu4jOygne2KuOyXkOyEnOydmCDtlITroZztjbzti7Ag7ZiV7Iud7Jy866GcIOyekeyEsSBcclxuICAgIC8vIOydtOufrO2VnCDsoJHqt7wg67Cp7Iud7J2YIOyepeygkOycvOuhnOuKlCBjbGFzc+uqheydtCBuYXbqsIAg7JWE64uI6528IE5hdkJhcl9uYXYg6re466as6rOgIOyWtOuWpCDrrLTsnpHsnIQg7YWN7Iqk7Yq466GcIOq1rOyEseuQqFxyXG4gICAgLy8g6re465+s66m0IOq3uCDslrTrlqQg7Lap64+M64+EIOunjOuTpOyngCDslYrsnYwg7JiI66W8IOuTpOuptCDri6Trpbgg7Lu07Y+s64SM7Yq47JeQ7ISc64+EIG5hduudvOuKlCDtgbTrnpjsiqQg7J2066aE7J2EIOyCrOyaqe2VoCDsiJgg7J6I64+E66GdIO2VmOuKlCDqsoNcclxuICAgIC8vIOuYkCAvTmF2QmFyLm1vZHVsZS5jc3Mg66qo65OIIOuCtOyXkCDri6Trpbgg7YG0656Y7IqkIOydtOumhOydtCDsobTsnqztlZzri6TrqbQg7Jyg7KCA6rCAIOu4jOudvOyasOyggOyXkOyEnCDrtKTsnYQg65WMIOuqqOuRkCDsnbTsg4HtlZwg66y07J6R7JyEIOydtOumhOycvOuhnCDsnpHshLHrkJjripQg6rKDXHJcbiAgICAvLyDri6TrpbggY3NzIO2MjOydvCDrmJDripQgbW9kdWxlLmNzcyDtjIzsnbzqs7wg7Lap64+M7ZWY7KeAIOyViuydhOq5jCDqsbHsoJXtlZjsp4Ag7JWK7JWE64+EIOuQqCEgKOqwmeydgCDsnbTrpoTsnLzroZwg66eM65Ok7Ja064+EIOustOyekeychCDsnbTrpoTsnbQg67aZ7Jy864uI6rmMIOy2qeuPjCDslYjrgqgpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7Y29sb3I6IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgPyBcInJlZFwiIDogXCJibHVlXCJ9fSBjbGFzc05hbWU9J2hlbGxvJz5Ib21lPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7Y29sb3I6IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvYWJvdXRcIiA/IFwicmVkXCIgOiBcImJsdWVcIn19PkFib3V0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIHsvKiA8YSBocmVmPVwiL1wiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvYT4gKi99XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApIFxyXG59XHJcblxyXG4vKlxyXG4gICAgTmV4dEpTIOyWtO2UjOumrOy8gOydtOyFmOyXkOyEnCBhbmNob3Ig7YOc6re466W8IOuEpOu5hOqyjOydtO2MhSDtlZjripQg642w7JeQIOyCrOyaqe2VmOuptCDslYgg65CY64qUIOydtOycoOuKlCBcclxuICAgIE5leHRKU+yXkCwg7JWxIOuCtOyXkOyEnCDtjpjsnbTsp4Drpbwg64Sk67mE6rKM7J207Yq4IO2VoCDrlYwg7IKs7Jqp7ZW07JW866eMIO2VmOuKlCDtirnsoJUg7Lu07Y+s64SM7Yq46rCAIOyhtOyerO2VmOq4sCDrlYzrrLhcclxuICAgIFJlYWN0SlPsl5DshJwgUmVhY3QgUm91dGVyIExpbmvrpbwg7IKs7Jqp7ZW07JW866eMIO2VoCDrlYzsmYAg7J207Jyg6rCAIOqwmeydjCBcclxuICAgIO2KueyglSDtjpjsnbTsp4Dsl5Ag65Ok7Ja06rCA66m0IOyghOyytCDslrTtlIzrpqzsvIDsnbTshZjsnYAg7IOI66Gc6rOg7Lmo7J20IOuQqCAtPiDqt7jqsbQg7Iur7J2MIGNsaWVudCBzaWRlIG5hdmlnYXRpb24gIOydtCDsl4bri6TripQg7J2Y66+464uI6rmMXHJcbiAgICDruIzrnbzsmrDsoIDqsIAg64uk66W4IO2OmOydtOyngOuhnCDrs7TrgrTquLAg7JyE7ZW0IOyghOyytCDtjpjsnbTsp4Drpbwg7IOI66Gc6rOg7LmoIO2VnOuLpOuKlCDslpjquLAuIFxyXG4gICAg7J2065+w7Iud7Jy866GcIO2VmOuptCDripDroKTsp4gg7IiYIOyeiOq4sCDrlYzrrLjsl5AgTmV4dEpT7JeQ7ISc64qUIO2KueyglSDsgqzsmqntlbTslbzrp4wg7ZWY64qUIO2KueyglSBMaW5rIOy7tO2PrOuEjO2KuOqwgCDsobTsnqztlaggXHJcbiAgICBMaW5r66W8IOyCrOyaqe2VmOuptCDsg4jroZzqs6DsuajsnbQg65CY7KeAIOyViuqzoCBhIO2DnOq3uOuztOuLpCDtm6jslKwg7IaN64+E6rCAIOu5oOumhCBcclxuXHJcbiAgICBSZWFjdCBSb3V0ZXIgRG9tIFxyXG4gICAgTGlua+yXkCBzdHlsZeydtOuCmCBjbGFzc05hbWXsnYQg7KSEIOyImCDsl4bsnYwgTmV4dEpT7JeQ7ISc64qUIGFuY2hvciDtg5zqt7jrpbwg7IOd7ISx7ZW07IScIOykmOyVvO2VqFxyXG4gICAgTGlua+uKlCDri6jsp4AgaHJlZuunjOydhCDsnITtlZwg6rKDIOuCmOuouOyngOuKlCDrqqjrkZAgYW5jaG9yIO2DnOq3uOyXkOuLpCDrhKPquLAgXHJcbiovXHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwic3R5bGVzIiwiTmF2QmFyIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsIm5hdiIsImhyZWYiLCJhIiwic3R5bGUiLCJjb2xvciIsInBhdGhuYW1lIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NabBar.js\n");

/***/ })

});