"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/active/_friendbar.js":
/*!*********************************************!*\
  !*** ./src/components/active/_friendbar.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _friendbar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_friendbar.module.css */ \"./src/components/active/_friendbar.module.css\");\n/* harmony import */ var _friendbar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_friendbar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst FriendListSidebar = (param)=>{\n    let { friends  } = param;\n    _s();\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSearchChange = (event)=>{\n        setSearchTerm(event.target.value);\n    };\n    const filteredFriends = friends.filter((friend)=>friend.name.toLowerCase().includes(searchTerm.toLowerCase()));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_friendbar_module_css__WEBPACK_IMPORTED_MODULE_2___default().mainbox),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_friendbar_module_css__WEBPACK_IMPORTED_MODULE_2___default().mainheadtext),\n                        children: \"FRIEND LIST\"\n                    }, void 0, false, {\n                        fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_friendbar.js\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_friendbar_module_css__WEBPACK_IMPORTED_MODULE_2___default().search),\n                        type: \"text\",\n                        placeholder: \"Search\",\n                        value: searchTerm,\n                        onChange: handleSearchChange\n                    }, void 0, false, {\n                        fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_friendbar.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_friendbar.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: filteredFriends.map((friend)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: friend.avatar,\n                                alt: friend.name\n                            }, void 0, false, {\n                                fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_friendbar.js\",\n                                lineNumber: 29,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: (_friendbar_module_css__WEBPACK_IMPORTED_MODULE_2___default().nametext),\n                                    children: friend.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_friendbar.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_friendbar.js\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, friend.id, true, {\n                        fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_friendbar.js\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_friendbar.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_friendbar.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FriendListSidebar, \"+YdqPTpSlp4r5CWiFEQiF/UjThM=\");\n_c = FriendListSidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FriendListSidebar);\nvar _c;\n$RefreshReg$(_c, \"FriendListSidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hY3RpdmUvX2ZyaWVuZGJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDSTtBQUU1QyxNQUFNRyxvQkFBb0IsU0FBaUI7UUFBaEIsRUFBRUMsUUFBTyxFQUFFOztJQUNsQyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQUM7SUFFN0MsTUFBTU0scUJBQXFCLENBQUNDLFFBQVU7UUFDbENGLGNBQWNFLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUNwQztJQUVBLE1BQU1DLGtCQUFrQlAsUUFBUVEsTUFBTSxDQUFDLENBQUNDLFNBQ3BDQSxPQUFPQyxJQUFJLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDWCxXQUFXVSxXQUFXO0lBRzdELHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFXaEIsc0VBQWM7OzBCQUMxQiw4REFBQ2U7O2tDQUNHLDhEQUFDRzt3QkFBR0YsV0FBV2hCLDJFQUFtQjtrQ0FBRTs7Ozs7O2tDQUNwQyw4REFBQ29CO3dCQUFNSixXQUFXaEIscUVBQWE7d0JBQzNCc0IsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWmYsT0FBT0w7d0JBQ1BxQixVQUFVbkI7Ozs7Ozs7Ozs7OzswQkFHbEIsOERBQUNvQjswQkFDSWhCLGdCQUFnQmlCLEdBQUcsQ0FBQyxDQUFDZix1QkFDbEIsOERBQUNJOzswQ0FDRyw4REFBQ1k7Z0NBQUlDLEtBQUtqQixPQUFPa0IsTUFBTTtnQ0FBRUMsS0FBS25CLE9BQU9DLElBQUk7Ozs7OzswQ0FDekMsOERBQUNHOzBDQUNHLDRFQUFDZ0I7b0NBQUdmLFdBQVdoQix1RUFBZTs4Q0FBR1csT0FBT0MsSUFBSTs7Ozs7Ozs7Ozs7O3VCQUgxQ0QsT0FBT3NCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVdkM7R0FsQ01oQztLQUFBQTtBQW9DTiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2FjdGl2ZS9fZnJpZW5kYmFyLmpzP2M1ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vX2ZyaWVuZGJhci5tb2R1bGUuY3NzJ1xuXG5jb25zdCBGcmllbmRMaXN0U2lkZWJhciA9ICh7IGZyaWVuZHMgfSkgPT4ge1xuICAgIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldFNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZmlsdGVyZWRGcmllbmRzID0gZnJpZW5kcy5maWx0ZXIoKGZyaWVuZCkgPT5cbiAgICAgICAgZnJpZW5kLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbmJveH0+XG4gICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMubWFpbmhlYWR0ZXh0fT5GUklFTkQgTElTVDwvaDI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx1bCA+XG4gICAgICAgICAgICAgICAge2ZpbHRlcmVkRnJpZW5kcy5tYXAoKGZyaWVuZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZnJpZW5kLmlkfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZnJpZW5kLmF2YXRhcn0gYWx0PXtmcmllbmQubmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5uYW1ldGV4dH0+e2ZyaWVuZC5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kTGlzdFNpZGViYXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkZyaWVuZExpc3RTaWRlYmFyIiwiZnJpZW5kcyIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlcmVkRnJpZW5kcyIsImZpbHRlciIsImZyaWVuZCIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbmJveCIsImgyIiwibWFpbmhlYWR0ZXh0IiwiaW5wdXQiLCJzZWFyY2giLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInVsIiwibWFwIiwiaW1nIiwic3JjIiwiYXZhdGFyIiwiYWx0IiwiaDMiLCJuYW1ldGV4dCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/active/_friendbar.js\n"));

/***/ })

});