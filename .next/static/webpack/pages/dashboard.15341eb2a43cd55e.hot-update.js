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

/***/ "./src/components/active/_scrolltracklist.js":
/*!***************************************************!*\
  !*** ./src/components/active/_scrolltracklist.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scrolltracklist_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_scrolltracklist.module.css */ \"./src/components/active/_scrolltracklist.module.css\");\n/* harmony import */ var _scrolltracklist_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scrolltracklist_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst TrackList = (param)=>{\n    let { friends  } = param;\n    _s();\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSearchChange = (event)=>{\n        setSearchTerm(event.target.value);\n    };\n    const filteredFriends = friends.filter((friend)=>friend.name.toLowerCase().includes(searchTerm.toLowerCase()));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_scrolltracklist_module_css__WEBPACK_IMPORTED_MODULE_2___default().mainbox),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_scrolltracklist_module_css__WEBPACK_IMPORTED_MODULE_2___default().search),\n                    type: \"text\",\n                    placeholder: \"Search Tracks\",\n                    value: searchTerm,\n                    onChange: handleSearchChange\n                }, void 0, false, {\n                    fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_scrolltracklist.js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_scrolltracklist.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: filteredFriends.map((friend)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_scrolltracklist_module_css__WEBPACK_IMPORTED_MODULE_2___default().each),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: (_scrolltracklist_module_css__WEBPACK_IMPORTED_MODULE_2___default().image),\n                                src: friend.avatar,\n                                alt: friend.name\n                            }, void 0, false, {\n                                fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_scrolltracklist.js\",\n                                lineNumber: 29,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: (_scrolltracklist_module_css__WEBPACK_IMPORTED_MODULE_2___default().nametext),\n                                children: friend.name\n                            }, void 0, false, {\n                                fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_scrolltracklist.js\",\n                                lineNumber: 31,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: (_scrolltracklist_module_css__WEBPACK_IMPORTED_MODULE_2___default().authortext),\n                                children: [\n                                    \"- \",\n                                    friend.author\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_scrolltracklist.js\",\n                                lineNumber: 32,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, friend.id, true, {\n                        fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_scrolltracklist.js\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_scrolltracklist.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_scrolltracklist.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TrackList, \"+YdqPTpSlp4r5CWiFEQiF/UjThM=\");\n_c = TrackList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrackList);\nvar _c;\n$RefreshReg$(_c, \"TrackList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hY3RpdmUvX3Njcm9sbHRyYWNrbGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDVTtBQUVsRCxNQUFNRyxZQUFZLFNBQWlCO1FBQWhCLEVBQUVDLFFBQU8sRUFBRTs7SUFDMUIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1NLHFCQUFxQixDQUFDQyxRQUFVO1FBQ2xDRixjQUFjRSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDcEM7SUFFQSxNQUFNQyxrQkFBa0JQLFFBQVFRLE1BQU0sQ0FBQyxDQUFDQyxTQUNwQ0EsT0FBT0MsSUFBSSxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ1gsV0FBV1UsV0FBVztJQUc3RCxxQkFDSSw4REFBQ0U7UUFBSUMsV0FBV2hCLDRFQUFjOzswQkFDMUIsOERBQUNlOzBCQUVHLDRFQUFDRztvQkFBTUYsV0FBV2hCLDJFQUFhO29CQUMzQm9CLE1BQUs7b0JBQ0xDLGFBQVk7b0JBQ1piLE9BQU9MO29CQUNQbUIsVUFBVWpCOzs7Ozs7Ozs7OzswQkFHbEIsOERBQUNrQjswQkFDSWQsZ0JBQWdCZSxHQUFHLENBQUMsQ0FBQ2IsdUJBQ2xCLDhEQUFDSTt3QkFBSUMsV0FBV2hCLHlFQUFXOzswQ0FDdkIsOERBQUMwQjtnQ0FBSVYsV0FBV2hCLDBFQUFZO2dDQUFFNEIsS0FBS2pCLE9BQU9rQixNQUFNO2dDQUFFQyxLQUFLbkIsT0FBT0MsSUFBSTs7Ozs7OzBDQUVsRSw4REFBQ21CO2dDQUFHZixXQUFXaEIsNkVBQWU7MENBQUdXLE9BQU9DLElBQUk7Ozs7OzswQ0FDNUMsOERBQUNtQjtnQ0FBR2YsV0FBV2hCLCtFQUFpQjs7b0NBQUU7b0NBQUdXLE9BQU91QixNQUFNOzs7Ozs7Ozt1QkFKcEJ2QixPQUFPd0IsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQVUvRDtHQWxDTWxDO0tBQUFBO0FBb0NOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2FjdGl2ZS9fc2Nyb2xsdHJhY2tsaXN0LmpzP2NkNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vX3Njcm9sbHRyYWNrbGlzdC5tb2R1bGUuY3NzJ1xuXG5jb25zdCBUcmFja0xpc3QgPSAoeyBmcmllbmRzIH0pID0+IHtcbiAgICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbHRlcmVkRnJpZW5kcyA9IGZyaWVuZHMuZmlsdGVyKChmcmllbmQpID0+XG4gICAgICAgIGZyaWVuZC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5ib3h9PlxuICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgey8qIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5tYWluaGVhZHRleHR9PiBUcmFjayBMaXN0PC9oMj4gKi99XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBUcmFja3NcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dWwgPlxuICAgICAgICAgICAgICAgIHtmaWx0ZXJlZEZyaWVuZHMubWFwKChmcmllbmQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lYWNofSBrZXk9e2ZyaWVuZC5pZH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gc3JjPXtmcmllbmQuYXZhdGFyfSBhbHQ9e2ZyaWVuZC5uYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMubmFtZXRleHR9PntmcmllbmQubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvcnRleHR9Pi0ge2ZyaWVuZC5hdXRob3J9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhY2tMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJUcmFja0xpc3QiLCJmcmllbmRzIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyZWRGcmllbmRzIiwiZmlsdGVyIiwiZnJpZW5kIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluYm94IiwiaW5wdXQiLCJzZWFyY2giLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInVsIiwibWFwIiwiZWFjaCIsImltZyIsImltYWdlIiwic3JjIiwiYXZhdGFyIiwiYWx0IiwiaDMiLCJuYW1ldGV4dCIsImF1dGhvcnRleHQiLCJhdXRob3IiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/active/_scrolltracklist.js\n"));

/***/ })

});