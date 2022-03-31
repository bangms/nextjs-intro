"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"AppInitialProps\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.AppInitialProps;\n    }\n}));\nObject.defineProperty(exports, \"NextWebVitalsMetric\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.NextWebVitalsMetric;\n    }\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _utils = __webpack_require__(/*! ../shared/lib/utils */ \"../shared/lib/utils\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nfunction appGetInitialProps(_) {\n    return _appGetInitialProps.apply(this, arguments);\n}\nfunction _appGetInitialProps() {\n    _appGetInitialProps = /**\n * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n * This allows for keeping state between navigation, custom error handling, injecting additional data.\n */ _asyncToGenerator(function*({ Component , ctx  }) {\n        const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);\n        return {\n            pageProps\n        };\n    });\n    return _appGetInitialProps.apply(this, arguments);\n}\nclass App extends _react.default.Component {\n    render() {\n        const { Component , pageProps  } = this.props;\n        return /*#__PURE__*/ _react.default.createElement(Component, Object.assign({}, pageProps));\n    }\n}\nexports[\"default\"] = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps; //# sourceMappingURL=_app.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDLENBQUM7SUFDMUNHLEtBQUssRUFBRSxJQUFJO0FBQ2YsQ0FBQyxFQUFDLENBQUM7QUFDSEgsbURBQWtELENBQUM7SUFDL0NJLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxHQUFHLEVBQUUsUUFBUSxHQUFHLENBQUM7UUFDYixNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsZUFBZTtJQUNqQyxDQUFDO0FBQ0wsQ0FBQyxFQUFDLENBQUM7QUFDSFAsdURBQXNELENBQUM7SUFDbkRJLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxHQUFHLEVBQUUsUUFBUSxHQUFHLENBQUM7UUFDYixNQUFNLENBQUNDLE1BQU0sQ0FBQ0UsbUJBQW1CO0lBQ3JDLENBQUM7QUFDTCxDQUFDLEVBQUMsQ0FBQztBQUNITixrQkFBZSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDekIsR0FBRyxDQUFDUSxNQUFNLEdBQUdDLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9CQUFPO0FBQ25ELEdBQUcsQ0FBQ04sTUFBTSxHQUFHTSxtQkFBTyxDQUFDLGdEQUFxQjtTQUNqQ0Msa0JBQWtCLENBQUNDLEdBQUcsRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQ3hFLEdBQUcsQ0FBQyxDQUFDO1FBQ0QsR0FBRyxDQUFDQyxJQUFJLEdBQUdQLEdBQUcsQ0FBQ0ssR0FBRyxFQUFFQyxHQUFHO1FBQ3ZCLEdBQUcsQ0FBQ2pCLEtBQUssR0FBR2tCLElBQUksQ0FBQ2xCLEtBQUs7SUFDMUIsQ0FBQyxDQUFDLEtBQUssRUFBRW1CLEtBQUssRUFBRSxDQUFDO1FBQ2JOLE1BQU0sQ0FBQ00sS0FBSyxDQUFDLENBQUM7UUFDZCxNQUFNO0lBQ1YsQ0FBQztJQUNELEVBQUUsRUFBRUQsSUFBSSxDQUFDRSxJ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bm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzPzk2MWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBcHBJbml0aWFsUHJvcHNcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91dGlscy5BcHBJbml0aWFsUHJvcHM7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOZXh0V2ViVml0YWxzTWV0cmljXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdXRpbHMuTmV4dFdlYlZpdGFsc01ldHJpYztcbiAgICB9XG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdXRpbHNcIik7XG5mdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gICAgfVxufVxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKF8pIHtcbiAgICByZXR1cm4gX2FwcEdldEluaXRpYWxQcm9wcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gX2FwcEdldEluaXRpYWxQcm9wcygpIHtcbiAgICBfYXBwR2V0SW5pdGlhbFByb3BzID0gLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqLyBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiooeyBDb21wb25lbnQgLCBjdHggIH0pIHtcbiAgICAgICAgY29uc3QgcGFnZVByb3BzID0geWllbGQgKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYWdlUHJvcHNcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gX2FwcEdldEluaXRpYWxQcm9wcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuY2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50ICwgcGFnZVByb3BzICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe30sIHBhZ2VQcm9wcykpKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBBcHA7XG5BcHAub3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wcztcbkFwcC5nZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHM7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9hcHAuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZW51bWVyYWJsZSIsImdldCIsIl91dGlscyIsIkFwcEluaXRpYWxQcm9wcyIsIk5leHRXZWJWaXRhbHNNZXRyaWMiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZXNvbHZlIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJhcmciLCJpbmZvIiwiZXJyb3IiLCJkb25lIiwiUHJvbWlzZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImVyciIsInVuZGVmaW5lZCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfIiwiX2FwcEdldEluaXRpYWxQcm9wcyIsIkNvbXBvbmVudCIsImN0eCIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJBcHAiLCJyZW5kZXIiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJhc3NpZ24iLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_app.js"));
module.exports = __webpack_exports__;

})();