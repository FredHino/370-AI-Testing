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

/***/ "./src/components/active/_avatarmenu.js":
/*!**********************************************!*\
  !*** ./src/components/active/_avatarmenu.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _generalbutton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_generalbutton */ \"./src/components/active/_generalbutton.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _friendbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_friendbar */ \"./src/components/active/_friendbar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Menua(props) {\n    _s();\n    const logout = ()=>{\n        alert(\"This will log you out, not integrated yet\");\n    };\n    const deleteuser = ()=>{\n        alert(\"This will delete all tracklist, not integrated yet\");\n    };\n    const [anchorFriendlist, setFriendlist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // const openFriendlist = (event) => {\n    //     setFriendlist(event.currentTarget);\n    // };\n    const closeFriendlist = ()=>{\n        setFriendlist(null);\n    };\n    const openAndclose = (event)=>{\n        props.function;\n        setFriendlist(event.currentTarget);\n    };\n    const friends = [\n        {\n            id: 1,\n            name: \"Alice\",\n            avatar: \"/dashboard/friend.png\"\n        },\n        {\n            id: 2,\n            name: \"Bob\",\n            avatar: \"https://randomuser.me/api/portraits/men/2.jpg\"\n        },\n        {\n            id: 3,\n            name: \"Charlie\",\n            avatar: \"https://randomuser.me/api/portraits/men/3.jpg\"\n        },\n        {\n            id: 4,\n            name: \"Diana\",\n            avatar: \"https://randomuser.me/api/portraits/women/4.jpg\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n        id: \"simple-menu\",\n        anchorEl: props.anchor,\n        keepMounted: true,\n        open: Boolean(props.anchor),\n        onClose: props.function,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_generalbutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    name: \"Log Out\",\n                    loc: logout\n                }, void 0, false, {\n                    fileName: \"/Users/samsung/Desktop/react-top-tracks/src/components/active/_avatarmenu.js\",\n                    lineNumber: 68,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/samsung/Desktop/react-top-tracks/src/components/active/_avatarmenu.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_generalbutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    name: \"Delete User Data\",\n                    loc: deleteuser\n                }, void 0, false, {\n                    fileName: \"/Users/samsung/Desktop/react-top-tracks/src/components/active/_avatarmenu.js\",\n                    lineNumber: 71,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/samsung/Desktop/react-top-tracks/src/components/active/_avatarmenu.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_generalbutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    name: \"Friends\",\n                    loc: openAndclose\n                }, void 0, false, {\n                    fileName: \"/Users/samsung/Desktop/react-top-tracks/src/components/active/_avatarmenu.js\",\n                    lineNumber: 74,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/samsung/Desktop/react-top-tracks/src/components/active/_avatarmenu.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Drawer, {\n                anchor: \"left\",\n                open: Boolean(anchorFriendlist),\n                onClose: closeFriendlist,\n                sx: {\n                    backgroundColor: \"white\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_friendbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    friends: friends\n                }, void 0, false, {\n                    fileName: \"/Users/samsung/Desktop/react-top-tracks/src/components/active/_avatarmenu.js\",\n                    lineNumber: 83,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/samsung/Desktop/react-top-tracks/src/components/active/_avatarmenu.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/samsung/Desktop/react-top-tracks/src/components/active/_avatarmenu.js\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, this);\n}\n_s(Menua, \"6sfl6jt1bhJvBKLFyB7p6ZL5rCc=\");\n_c = Menua;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menua);\nvar _c;\n$RefreshReg$(_c, \"Menua\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hY3RpdmUvX2F2YXRhcm1lbnUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMwQjtBQUNnQjtBQU9uQjtBQUNzQjtBQUNEO0FBRTVDLFNBQVNVLE1BQU1DLEtBQUssRUFBRTs7SUFFbEIsTUFBTUMsU0FBUyxJQUFNO1FBQ2pCQyxNQUFNO0lBQ1Y7SUFFQSxNQUFNQyxhQUFhLElBQU07UUFDckJELE1BQU07SUFDVjtJQUVBLE1BQU0sQ0FBQ0Usa0JBQWtCQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDLElBQUk7SUFDdkQsc0NBQXNDO0lBQ3RDLDBDQUEwQztJQUMxQyxLQUFLO0lBQ0wsTUFBTVMsa0JBQWtCLElBQU07UUFDMUJELGNBQWMsSUFBSTtJQUN0QjtJQUNBLE1BQU1FLGVBQWUsQ0FBQ0MsUUFBVTtRQUM1QlIsTUFBTVMsUUFBUTtRQUNkSixjQUFjRyxNQUFNRSxhQUFhO0lBQ3JDO0lBRUEsTUFBTUMsVUFBVTtRQUNaO1lBQ0VDLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxRQUFRO1FBQ1Y7UUFDQTtZQUNFRixJQUFJO1lBQ0pDLE1BQU07WUFDTkMsUUFBUTtRQUNWO1FBQ0E7WUFDRUYsSUFBSTtZQUNKQyxNQUFNO1lBQ05DLFFBQVE7UUFDVjtRQUNBO1lBQ0VGLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxRQUFRO1FBQ1Y7S0FDRDtJQUVILHFCQUNJLDhEQUFDckIsK0NBQUlBO1FBQ0RtQixJQUFHO1FBQ0hHLFVBQVVmLE1BQU1nQixNQUFNO1FBQ3RCQyxXQUFXO1FBQ1hDLE1BQU1DLFFBQVFuQixNQUFNZ0IsTUFBTTtRQUMxQkksU0FBU3BCLE1BQU1TLFFBQVE7OzBCQUV2Qiw4REFBQ2YsbURBQVFBOzBCQUNULDRFQUFDSixzREFBVUE7b0JBQUN1QixNQUFLO29CQUFVUSxLQUFLcEI7Ozs7Ozs7Ozs7OzBCQUVoQyw4REFBQ1AsbURBQVFBOzBCQUNULDRFQUFDSixzREFBVUE7b0JBQUN1QixNQUFLO29CQUFtQlEsS0FBS2xCOzs7Ozs7Ozs7OzswQkFFekMsOERBQUNULG1EQUFRQTswQkFDVCw0RUFBQ0osc0RBQVVBO29CQUFDdUIsTUFBSztvQkFBVVEsS0FBS2Q7Ozs7Ozs7Ozs7OzBCQUdoQyw4REFBQ2YsaURBQU1BO2dCQUNId0IsUUFBTztnQkFDUEUsTUFBTUMsUUFBUWY7Z0JBQ2RnQixTQUFTZDtnQkFDVGdCLElBQUk7b0JBQUNDLGlCQUFnQjtnQkFBTzswQkFFNUIsNEVBQUMzQixrREFBaUJBO29CQUFDZSxTQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUM7R0ExRVNaO0tBQUFBO0FBNEVULCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2FjdGl2ZS9fYXZhdGFybWVudS5qcz8zODY3Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNYWluQnV0dG9uIGZyb20gJy4vX2dlbmVyYWxidXR0b24nO1xuaW1wb3J0IHtcbiAgICBCdXR0b24sXG4gICAgRHJhd2VyLFxuICAgIE1lbnUsXG4gICAgTWVudUl0ZW0sXG4gICAgQWxlcnRcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBGcmllbmRMaXN0U2lkZWJhciBmcm9tICcuL19mcmllbmRiYXInO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gTWVudWEocHJvcHMpIHtcblxuICAgIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICAgICAgYWxlcnQoXCJUaGlzIHdpbGwgbG9nIHlvdSBvdXQsIG5vdCBpbnRlZ3JhdGVkIHlldFwiKVxuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGV1c2VyID0gKCkgPT4ge1xuICAgICAgICBhbGVydChcIlRoaXMgd2lsbCBkZWxldGUgYWxsIHRyYWNrbGlzdCwgbm90IGludGVncmF0ZWQgeWV0XCIpXG4gICAgfTtcblxuICAgIGNvbnN0IFthbmNob3JGcmllbmRsaXN0LCBzZXRGcmllbmRsaXN0XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIC8vIGNvbnN0IG9wZW5GcmllbmRsaXN0ID0gKGV2ZW50KSA9PiB7XG4gICAgLy8gICAgIHNldEZyaWVuZGxpc3QoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgLy8gfTtcbiAgICBjb25zdCBjbG9zZUZyaWVuZGxpc3QgPSAoKSA9PiB7XG4gICAgICAgIHNldEZyaWVuZGxpc3QobnVsbCk7XG4gICAgfTtcbiAgICBjb25zdCBvcGVuQW5kY2xvc2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgcHJvcHMuZnVuY3Rpb247XG4gICAgICAgIHNldEZyaWVuZGxpc3QoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgfVxuXG4gICAgY29uc3QgZnJpZW5kcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIG5hbWU6IFwiQWxpY2VcIixcbiAgICAgICAgICBhdmF0YXI6IFwiL2Rhc2hib2FyZC9mcmllbmQucG5nXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMixcbiAgICAgICAgICBuYW1lOiBcIkJvYlwiLFxuICAgICAgICAgIGF2YXRhcjogXCJodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy9tZW4vMi5qcGdcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIG5hbWU6IFwiQ2hhcmxpZVwiLFxuICAgICAgICAgIGF2YXRhcjogXCJodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy9tZW4vMy5qcGdcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgIG5hbWU6IFwiRGlhbmFcIixcbiAgICAgICAgICBhdmF0YXI6IFwiaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9wb3J0cmFpdHMvd29tZW4vNC5qcGdcIixcbiAgICAgICAgfSxcbiAgICAgIF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TWVudVxuICAgICAgICAgICAgaWQ9XCJzaW1wbGUtbWVudVwiXG4gICAgICAgICAgICBhbmNob3JFbD17cHJvcHMuYW5jaG9yfVxuICAgICAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgICAgIG9wZW49e0Jvb2xlYW4ocHJvcHMuYW5jaG9yKX1cbiAgICAgICAgICAgIG9uQ2xvc2U9e3Byb3BzLmZ1bmN0aW9ufVxuICAgICAgICA+ICAgXG4gICAgICAgICAgICA8TWVudUl0ZW0+XG4gICAgICAgICAgICA8TWFpbkJ1dHRvbiBuYW1lPVwiTG9nIE91dFwiIGxvYz17bG9nb3V0fS8+XG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgPE1lbnVJdGVtPlxuICAgICAgICAgICAgPE1haW5CdXR0b24gbmFtZT1cIkRlbGV0ZSBVc2VyIERhdGFcIiBsb2M9e2RlbGV0ZXVzZXJ9Lz5cbiAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8TWVudUl0ZW0+XG4gICAgICAgICAgICA8TWFpbkJ1dHRvbiBuYW1lPVwiRnJpZW5kc1wiIGxvYz17b3BlbkFuZGNsb3NlfS8+XG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8RHJhd2VyXG4gICAgICAgICAgICAgICAgYW5jaG9yPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JGcmllbmRsaXN0KX1cbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtjbG9zZUZyaWVuZGxpc3R9XG4gICAgICAgICAgICAgICAgc3g9e3tiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJ319XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZyaWVuZExpc3RTaWRlYmFyIGZyaWVuZHM9e2ZyaWVuZHN9Lz5cbiAgICAgICAgICAgIDwvRHJhd2VyPlxuICAgICAgICA8L01lbnU+XG5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51YTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk1haW5CdXR0b24iLCJCdXR0b24iLCJEcmF3ZXIiLCJNZW51IiwiTWVudUl0ZW0iLCJBbGVydCIsIkZyaWVuZExpc3RTaWRlYmFyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNZW51YSIsInByb3BzIiwibG9nb3V0IiwiYWxlcnQiLCJkZWxldGV1c2VyIiwiYW5jaG9yRnJpZW5kbGlzdCIsInNldEZyaWVuZGxpc3QiLCJjbG9zZUZyaWVuZGxpc3QiLCJvcGVuQW5kY2xvc2UiLCJldmVudCIsImZ1bmN0aW9uIiwiY3VycmVudFRhcmdldCIsImZyaWVuZHMiLCJpZCIsIm5hbWUiLCJhdmF0YXIiLCJhbmNob3JFbCIsImFuY2hvciIsImtlZXBNb3VudGVkIiwib3BlbiIsIkJvb2xlYW4iLCJvbkNsb3NlIiwibG9jIiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/active/_avatarmenu.js\n"));

/***/ })

});