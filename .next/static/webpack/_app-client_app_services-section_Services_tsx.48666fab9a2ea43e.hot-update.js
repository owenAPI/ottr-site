"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-client_app_services-section_Services_tsx",{

/***/ "(app-client)/./app/services-section/ProjectCard.tsx":
/*!**********************************************!*\
  !*** ./app/services-section/ProjectCard.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-client)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-client)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"(app-client)/./node_modules/@fortawesome/free-brands-svg-icons/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _animations_AnimatedTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations/AnimatedTitle */ \"(app-client)/./app/animations/AnimatedTitle.tsx\");\n/* harmony import */ var _animations_AnimatedBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animations/AnimatedBody */ \"(app-client)/./app/animations/AnimatedBody.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\n\n\n\n\n\n\n\n\nconst ProjectCard = (param)=>{\n    let { id , name , description , technologies , github , demo , image , available  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n        style: {\n            backgroundColor: \"#212531\",\n            backgroundSize: \"cover\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundPosition: \"center center\",\n            position: \"relative\"\n        },\n        className: \"relative z-10 h-[550px]  w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 sm:h-[700px] sm:w-[100%] md:h-[650px] md:w-[100%] lg:h-[500px]\",\n        initial: \"initial\",\n        animate: \"animate\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: image,\n                alt: name,\n                className: \"absolute -bottom-2 w-[70%] sm:w-[85%] md:w-[60%] lg:max-w-[55%] \".concat(id % 2 === 0 ? \"right-0\" : \"left-0\")\n            }, void 0, false, {\n                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 text-[#0E1016] \".concat(id % 2 === 0 ? \"left-0 ml-8 lg:ml-14\" : \"right-0 mr-8 lg:mr-14\", \" mt-6 flex  items-center justify-center gap-4 lg:mt-10\"),\n                children: available ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: github,\n                            target: \"_blank\",\n                            className: \"rounded-full\",\n                            \"aria-label\": \"Open GitHub Repository\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faGithub,\n                                className: \" w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]\",\n                                \"data-blobity\": true,\n                                \"data-blobity-radius\": \"38\",\n                                \"data-blobity-offset-x\": \"4\",\n                                \"data-blobity-offset-y\": \"4\",\n                                \"data-blobity-magnetic\": \"true\"\n                            }, void 0, false, {\n                                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: demo || \"/\",\n                            target: \"_blank\",\n                            \"aria-label\": \"Open Live Demo\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faLink,\n                                className: \" w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]\",\n                                \"data-blobity\": true,\n                                \"data-blobity-radius\": \"38\",\n                                \"data-blobity-offset-x\": \"4\",\n                                \"data-blobity-offset-y\": \"4\",\n                                \"data-blobity-magnetic\": \"trues\"\n                            }, void 0, false, {\n                                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" flex items-center justify-center gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: github,\n                            target: \"_blank\",\n                            className: \"mt-1 rounded-full\",\n                            \"aria-label\": \"Open GitHub Repository\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faGithub,\n                                className: \" w-[20px]  rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]\",\n                                \"data-blobity\": true,\n                                \"data-blobity-radius\": \"38\",\n                                \"data-blobity-offset-x\": \"4\",\n                                \"data-blobity-offset-y\": \"4\",\n                                \"data-blobity-magnetic\": \"true\"\n                            }, void 0, false, {\n                                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" rounded-xl bg-white px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-[16px] md:text-[18px] lg:text-[20px] \",\n                                children: \"Coming soon\"\n                            }, void 0, false, {\n                                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute text-white  \".concat(!(id % 2 === 0) ? \"right-0 top-32 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-60  lg:mr-4\" : \"left-10 top-32 ml-0 md:mr-12 lg:top-52 lg:ml-4\", \" mb-10  md:mb-16 lg:mb-14 \"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animations_AnimatedTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        text: name,\n                        className: \"max-w-[90%] text-[40px] leading-none text-white md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none\",\n                        wordSpace: \"mr-[0.25em]\",\n                        charSpace: \"-mr-[0.01em]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animations_AnimatedBody__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        text: description,\n                        className: \"mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D] \"\n                    }, void 0, false, {\n                        fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-9 flex gap-4\",\n                        children: technologies.map((tech, id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animations_AnimatedTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                text: tech,\n                                wordSpace: \"mr-[0.25em]\",\n                                charSpace: \"mr-[0.01em]\",\n                                className: \"text-[14px] font-bold uppercase md:text-[16px] lg:text-[18px] \"\n                            }, id, false, {\n                                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3NlcnZpY2VzLXNlY3Rpb24vUHJvamVjdENhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUU7QUFDTjtBQUNHO0FBRWpDO0FBQ0U7QUFDeUI7QUFDRjtBQUNmO0FBRXZDLE1BQU1RLGNBQWMsU0FTQTtRQVRDLEVBQ25CQyxHQUFFLEVBQ0ZDLEtBQUksRUFDSkMsWUFBVyxFQUNYQyxhQUFZLEVBQ1pDLE9BQU0sRUFDTkMsS0FBSSxFQUNKQyxNQUFLLEVBQ0xDLFVBQVMsRUFDSTtJQUNiLHFCQUNFLDhEQUFDVCxxREFBVTtRQUNUVyxPQUNFO1lBQ0VDLGlCQUFpQjtZQUNqQkMsZ0JBQWdCO1lBQ2hCQyxrQkFBa0I7WUFDbEJDLG9CQUFvQjtZQUNwQkMsVUFBVTtRQUNaO1FBRUZDLFdBQVk7UUFDWkMsU0FBUTtRQUNSQyxTQUFROzswQkFFUiw4REFBQ3RCLG1EQUFLQTtnQkFDSnVCLEtBQUtaO2dCQUNMYSxLQUFLbEI7Z0JBQ0xjLFdBQVcsbUVBRVYsT0FEQ2YsS0FBSyxNQUFNLElBQUksWUFBWSxRQUFROzs7Ozs7MEJBR3ZDLDhEQUFDUTtnQkFDQ08sV0FBVyxpQ0FFVixPQURDZixLQUFLLE1BQU0sSUFBSSx5QkFBeUIsdUJBQXVCLEVBQ2hFOzBCQUVBTywwQkFDQzs7c0NBQ0UsOERBQUNiLGtEQUFJQTs0QkFDSDBCLE1BQU1oQjs0QkFDTmlCLFFBQU87NEJBQ1BOLFdBQVU7NEJBQ1ZPLGNBQVc7c0NBRVgsNEVBQUMvQiwyRUFBZUE7Z0NBQ2RnQyxNQUFNOUIsd0VBQVFBO2dDQUNkc0IsV0FBVTtnQ0FDVlMsY0FBWTtnQ0FDWkMsdUJBQW9CO2dDQUNwQkMseUJBQXNCO2dDQUN0QkMseUJBQXNCO2dDQUN0QkMseUJBQXNCOzs7Ozs7Ozs7OztzQ0FHMUIsOERBQUNsQyxrREFBSUE7NEJBQUMwQixNQUFNZixRQUFROzRCQUFLZ0IsUUFBTzs0QkFBU0MsY0FBVztzQ0FDbEQsNEVBQUMvQiwyRUFBZUE7Z0NBQ2RnQyxNQUFNL0IscUVBQU1BO2dDQUNadUIsV0FBVTtnQ0FDVlMsY0FBWTtnQ0FDWkMsdUJBQW9CO2dDQUNwQkMseUJBQXNCO2dDQUN0QkMseUJBQXNCO2dDQUN0QkMseUJBQXNCOzs7Ozs7Ozs7Ozs7aURBSzVCLDhEQUFDcEI7b0JBQUlPLFdBQVU7O3NDQUNiLDhEQUFDckIsa0RBQUlBOzRCQUNIMEIsTUFBTWhCOzRCQUNOaUIsUUFBTzs0QkFDUE4sV0FBVTs0QkFDVk8sY0FBVztzQ0FFWCw0RUFBQy9CLDJFQUFlQTtnQ0FDZGdDLE1BQU05Qix3RUFBUUE7Z0NBQ2RzQixXQUFVO2dDQUNWUyxjQUFZO2dDQUNaQyx1QkFBb0I7Z0NBQ3BCQyx5QkFBc0I7Z0NBQ3RCQyx5QkFBc0I7Z0NBQ3RCQyx5QkFBc0I7Ozs7Ozs7Ozs7O3NDQUcxQiw4REFBQ3BCOzRCQUFJTyxXQUFVO3NDQUNiLDRFQUFDYztnQ0FBR2QsV0FBVTswQ0FBNkM7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBS2hFOzs7Ozs7MEJBRUgsOERBQUNQO2dCQUNDTyxXQUFXLHdCQUlWLE9BSEMsQ0FBRWYsQ0FBQUEsS0FBSyxNQUFNLEtBQ1QsK0VBQ0EsZ0RBQWdELEVBQ3JEOztrQ0FFRCw4REFBQ0osaUVBQWFBO3dCQUNaa0MsTUFBTTdCO3dCQUNOYyxXQUNFO3dCQUVGZ0IsV0FBVzt3QkFDWEMsV0FBVzs7Ozs7O2tDQUViLDhEQUFDbkMsZ0VBQVlBO3dCQUNYaUMsTUFBTTVCO3dCQUNOYSxXQUNFOzs7Ozs7a0NBR0osOERBQUNQO3dCQUFJTyxXQUFVO2tDQUNaWixhQUFhOEIsR0FBRyxDQUFDLENBQUNDLE1BQU1sQyxtQkFDdkIsOERBQUNKLGlFQUFhQTtnQ0FDWmtDLE1BQU1JO2dDQUNOSCxXQUFXO2dDQUNYQyxXQUFXO2dDQUVYakIsV0FDRTsrQkFGR2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVbkI7S0FsSU1EO0FBb0lOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9zZXJ2aWNlcy1zZWN0aW9uL1Byb2plY3RDYXJkLnRzeD83MzY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhTGluayB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IGZhR2l0aHViIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcbmltcG9ydCB7IFByb2plY3RQcm9wcyB9IGZyb20gXCIuL3Byb2plY3REZXRhaWxzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBBbmltYXRlZFRpdGxlIGZyb20gXCIuLi9hbmltYXRpb25zL0FuaW1hdGVkVGl0bGVcIjtcbmltcG9ydCBBbmltYXRlZEJvZHkgZnJvbSBcIi4uL2FuaW1hdGlvbnMvQW5pbWF0ZWRCb2R5XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBQcm9qZWN0Q2FyZCA9ICh7XG4gIGlkLFxuICBuYW1lLFxuICBkZXNjcmlwdGlvbixcbiAgdGVjaG5vbG9naWVzLFxuICBnaXRodWIsXG4gIGRlbW8sXG4gIGltYWdlLFxuICBhdmFpbGFibGUsXG59OiBQcm9qZWN0UHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgc3R5bGU9e1xuICAgICAgICB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyMTI1MzFcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciBjZW50ZXJcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgICAgIH1cbiAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIHotMTAgaC1bNTUwcHhdICB3LWZ1bGwgaXRlbXMtc3RyZXRjaCBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0zeGwgYmctY2VudGVyIHB5LTAgc206aC1bNzAwcHhdIHNtOnctWzEwMCVdIG1kOmgtWzY1MHB4XSBtZDp3LVsxMDAlXSBsZzpoLVs1MDBweF1gfVxuICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxuICAgID5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIC1ib3R0b20tMiB3LVs3MCVdIHNtOnctWzg1JV0gbWQ6dy1bNjAlXSBsZzptYXgtdy1bNTUlXSAke1xuICAgICAgICAgIGlkICUgMiA9PT0gMCA/IFwicmlnaHQtMFwiIDogXCJsZWZ0LTBcIlxuICAgICAgICB9YH1cbiAgICAgIC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIHRvcC0wIHRleHQtWyMwRTEwMTZdICR7XG4gICAgICAgICAgaWQgJSAyID09PSAwID8gXCJsZWZ0LTAgbWwtOCBsZzptbC0xNFwiIDogXCJyaWdodC0wIG1yLTggbGc6bXItMTRcIlxuICAgICAgICB9IG10LTYgZmxleCAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00IGxnOm10LTEwYH1cbiAgICAgID5cbiAgICAgICAge2F2YWlsYWJsZSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj17Z2l0aHVifVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiT3BlbiBHaXRIdWIgUmVwb3NpdG9yeVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICBpY29uPXtmYUdpdGh1Yn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgdy1bMjBweF0gcm91bmRlZC1mdWxsIGJnLXdoaXRlIHAtNSB0ZXh0LVsyMHB4XSBtZDp3LVsyNXB4XSBtZDp0ZXh0LVsyNHB4XSBsZzp3LVszMHB4XSBsZzp0ZXh0LVsyOHB4XVwiXG4gICAgICAgICAgICAgICAgZGF0YS1ibG9iaXR5XG4gICAgICAgICAgICAgICAgZGF0YS1ibG9iaXR5LXJhZGl1cz1cIjM4XCJcbiAgICAgICAgICAgICAgICBkYXRhLWJsb2JpdHktb2Zmc2V0LXg9XCI0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWJsb2JpdHktb2Zmc2V0LXk9XCI0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWJsb2JpdHktbWFnbmV0aWM9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2RlbW8gfHwgJy8nfSB0YXJnZXQ9XCJfYmxhbmtcIiBhcmlhLWxhYmVsPVwiT3BlbiBMaXZlIERlbW9cIj5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgIGljb249e2ZhTGlua31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgdy1bMjBweF0gcm91bmRlZC1mdWxsIGJnLXdoaXRlIHAtNSB0ZXh0LVsyMHB4XSBtZDp3LVsyNXB4XSBtZDp0ZXh0LVsyNHB4XSBsZzp3LVszMHB4XSBsZzp0ZXh0LVsyOHB4XVwiXG4gICAgICAgICAgICAgICAgZGF0YS1ibG9iaXR5XG4gICAgICAgICAgICAgICAgZGF0YS1ibG9iaXR5LXJhZGl1cz1cIjM4XCJcbiAgICAgICAgICAgICAgICBkYXRhLWJsb2JpdHktb2Zmc2V0LXg9XCI0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWJsb2JpdHktb2Zmc2V0LXk9XCI0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWJsb2JpdHktbWFnbmV0aWM9XCJ0cnVlc1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9e2dpdGh1Yn1cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiT3BlbiBHaXRIdWIgUmVwb3NpdG9yeVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICBpY29uPXtmYUdpdGh1Yn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgdy1bMjBweF0gIHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBwLTUgdGV4dC1bMjBweF0gbWQ6dy1bMjVweF0gbWQ6dGV4dC1bMjRweF0gbGc6dy1bMzBweF0gbGc6dGV4dC1bMjhweF1cIlxuICAgICAgICAgICAgICAgIGRhdGEtYmxvYml0eVxuICAgICAgICAgICAgICAgIGRhdGEtYmxvYml0eS1yYWRpdXM9XCIzOFwiXG4gICAgICAgICAgICAgICAgZGF0YS1ibG9iaXR5LW9mZnNldC14PVwiNFwiXG4gICAgICAgICAgICAgICAgZGF0YS1ibG9iaXR5LW9mZnNldC15PVwiNFwiXG4gICAgICAgICAgICAgICAgZGF0YS1ibG9iaXR5LW1hZ25ldGljPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiByb3VuZGVkLXhsIGJnLXdoaXRlIHB4LTQgcHktMiBtZDpweC01IG1kOnB5LTMgbGc6cHgtNiBsZzpweS00XCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LVsxNnB4XSBtZDp0ZXh0LVsxOHB4XSBsZzp0ZXh0LVsyMHB4XSBcIj5cbiAgICAgICAgICAgICAgICBDb21pbmcgc29vblxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgdGV4dC13aGl0ZSAgJHtcbiAgICAgICAgICAhKGlkICUgMiA9PT0gMClcbiAgICAgICAgICAgID8gXCJyaWdodC0wIHRvcC0zMiBtci0wIG1sLTEwIG1kOnJpZ2h0LTAgbWQ6bWwtMCBsZzpyaWdodC0wIGxnOnRvcC02MCAgbGc6bXItNFwiXG4gICAgICAgICAgICA6IFwibGVmdC0xMCB0b3AtMzIgbWwtMCBtZDptci0xMiBsZzp0b3AtNTIgbGc6bWwtNFwiXG4gICAgICAgIH0gbWItMTAgIG1kOm1iLTE2IGxnOm1iLTE0IGB9XG4gICAgICA+XG4gICAgICAgIDxBbmltYXRlZFRpdGxlXG4gICAgICAgICAgdGV4dD17bmFtZX1cbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgXCJtYXgtdy1bOTAlXSB0ZXh0LVs0MHB4XSBsZWFkaW5nLW5vbmUgdGV4dC13aGl0ZSBtZDp0ZXh0LVs0NHB4XSBtZDpsZWFkaW5nLW5vbmUgbGc6bWF4LXctWzQ1MHB4XSBsZzp0ZXh0LVs0OHB4XSBsZzpsZWFkaW5nLW5vbmVcIlxuICAgICAgICAgIH1cbiAgICAgICAgICB3b3JkU3BhY2U9e1wibXItWzAuMjVlbV1cIn1cbiAgICAgICAgICBjaGFyU3BhY2U9e1wiLW1yLVswLjAxZW1dXCJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxBbmltYXRlZEJvZHlcbiAgICAgICAgICB0ZXh0PXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgXCJtdC00IHctWzkwJV0gbWF4LXctWzQ1N3B4XSB0ZXh0LVsxNnB4XSBmb250LXNlbWlib2xkIHRleHQtWyM5NTk3OURdIFwiXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTkgZmxleCBnYXAtNFwiPlxuICAgICAgICAgIHt0ZWNobm9sb2dpZXMubWFwKCh0ZWNoLCBpZCkgPT4gKFxuICAgICAgICAgICAgPEFuaW1hdGVkVGl0bGVcbiAgICAgICAgICAgICAgdGV4dD17dGVjaH1cbiAgICAgICAgICAgICAgd29yZFNwYWNlPXtcIm1yLVswLjI1ZW1dXCJ9XG4gICAgICAgICAgICAgIGNoYXJTcGFjZT17XCJtci1bMC4wMWVtXVwifVxuICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgIFwidGV4dC1bMTRweF0gZm9udC1ib2xkIHVwcGVyY2FzZSBtZDp0ZXh0LVsxNnB4XSBsZzp0ZXh0LVsxOHB4XSBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RDYXJkO1xuIl0sIm5hbWVzIjpbIkZvbnRBd2Vzb21lSWNvbiIsImZhTGluayIsImZhR2l0aHViIiwiTGluayIsIkltYWdlIiwiQW5pbWF0ZWRUaXRsZSIsIkFuaW1hdGVkQm9keSIsIm1vdGlvbiIsIlByb2plY3RDYXJkIiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ0ZWNobm9sb2dpZXMiLCJnaXRodWIiLCJkZW1vIiwiaW1hZ2UiLCJhdmFpbGFibGUiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsInBvc2l0aW9uIiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJzcmMiLCJhbHQiLCJocmVmIiwidGFyZ2V0IiwiYXJpYS1sYWJlbCIsImljb24iLCJkYXRhLWJsb2JpdHkiLCJkYXRhLWJsb2JpdHktcmFkaXVzIiwiZGF0YS1ibG9iaXR5LW9mZnNldC14IiwiZGF0YS1ibG9iaXR5LW9mZnNldC15IiwiZGF0YS1ibG9iaXR5LW1hZ25ldGljIiwiaDMiLCJ0ZXh0Iiwid29yZFNwYWNlIiwiY2hhclNwYWNlIiwibWFwIiwidGVjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/services-section/ProjectCard.tsx\n"));

/***/ })

});