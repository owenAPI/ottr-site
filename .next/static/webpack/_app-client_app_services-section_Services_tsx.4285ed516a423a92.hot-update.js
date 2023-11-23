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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-client)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-client)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"(app-client)/./node_modules/@fortawesome/free-brands-svg-icons/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _animations_AnimatedTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations/AnimatedTitle */ \"(app-client)/./app/animations/AnimatedTitle.tsx\");\n/* harmony import */ var _animations_AnimatedBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animations/AnimatedBody */ \"(app-client)/./app/animations/AnimatedBody.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\n\n\n\n\n\n\n\n\nconst ProjectCard = (param)=>{\n    let { id , name , description , technologies , github , demo , image , available  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n        style: {\n            backgroundColor: \"#212531\",\n            backgroundSize: \"cover\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundPosition: \"center center\",\n            position: \"relative\"\n        },\n        className: \"relative z-10 h-[550px]  w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 sm:h-[700px] sm:w-[100%] md:h-[650px] md:w-[100%] lg:h-[500px]\",\n        initial: \"initial\",\n        animate: \"animate\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: image,\n                alt: name,\n                className: \"absolute -bottom-2 w-[70%] sm:w-[85%] md:w-[60%] lg:max-w-[55%] \".concat(id % 2 === 0 ? \"right-0\" : \"left-0\")\n            }, void 0, false, {\n                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 text-[#0E1016] \".concat(id % 2 === 0 ? \"left-0 ml-8 lg:ml-14\" : \"right-0 mr-8 lg:mr-14\", \" mt-6 flex  items-center justify-center gap-4 lg:mt-10\"),\n                children: available ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: github,\n                            target: \"_blank\",\n                            className: \"rounded-full\",\n                            \"aria-label\": \"Open GitHub Repository\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faGithub,\n                                className: \" w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]\",\n                                \"data-blobity\": true,\n                                \"data-blobity-radius\": \"38\",\n                                \"data-blobity-offset-x\": \"4\",\n                                \"data-blobity-offset-y\": \"4\",\n                                \"data-blobity-magnetic\": \"true\"\n                            }, void 0, false, {\n                                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: demo || \"\",\n                            target: \"_blank\",\n                            \"aria-label\": \"Open Live Demo\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faLink,\n                                className: \" w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]\",\n                                \"data-blobity\": true,\n                                \"data-blobity-radius\": \"38\",\n                                \"data-blobity-offset-x\": \"4\",\n                                \"data-blobity-offset-y\": \"4\",\n                                \"data-blobity-magnetic\": \"trues\"\n                            }, void 0, false, {\n                                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" flex items-center justify-center gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: github,\n                            target: \"_blank\",\n                            className: \"mt-1 rounded-full\",\n                            \"aria-label\": \"Open GitHub Repository\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faGithub,\n                                className: \" w-[20px]  rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]\",\n                                \"data-blobity\": true,\n                                \"data-blobity-radius\": \"38\",\n                                \"data-blobity-offset-x\": \"4\",\n                                \"data-blobity-offset-y\": \"4\",\n                                \"data-blobity-magnetic\": \"true\"\n                            }, void 0, false, {\n                                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" rounded-xl bg-white px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-[16px] md:text-[18px] lg:text-[20px] \",\n                                children: \"Coming soon\"\n                            }, void 0, false, {\n                                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute text-white  \".concat(!(id % 2 === 0) ? \"right-0 top-32 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-60  lg:mr-4\" : \"left-10 top-32 ml-0 md:mr-12 lg:top-52 lg:ml-4\", \" mb-10  md:mb-16 lg:mb-14 \"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animations_AnimatedTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        text: name,\n                        className: \"max-w-[90%] text-[40px] leading-none text-white md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none\",\n                        wordSpace: \"mr-[0.25em]\",\n                        charSpace: \"-mr-[0.01em]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animations_AnimatedBody__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        text: description,\n                        className: \"mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D] \"\n                    }, void 0, false, {\n                        fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-9 flex gap-4\",\n                        children: technologies.map((tech, id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animations_AnimatedTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                text: tech,\n                                wordSpace: \"mr-[0.25em]\",\n                                charSpace: \"mr-[0.01em]\",\n                                className: \"text-[14px] font-bold uppercase md:text-[16px] lg:text-[18px] \"\n                            }, id, false, {\n                                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3NlcnZpY2VzLXNlY3Rpb24vUHJvamVjdENhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUU7QUFDTjtBQUNHO0FBRWpDO0FBQ0U7QUFDeUI7QUFDRjtBQUNmO0FBRXZDLE1BQU1RLGNBQWMsU0FTQTtRQVRDLEVBQ25CQyxHQUFFLEVBQ0ZDLEtBQUksRUFDSkMsWUFBVyxFQUNYQyxhQUFZLEVBQ1pDLE9BQU0sRUFDTkMsS0FBSSxFQUNKQyxNQUFLLEVBQ0xDLFVBQVMsRUFDSTtJQUNiLHFCQUNFLDhEQUFDVCxxREFBVTtRQUNUVyxPQUNFO1lBQ0VDLGlCQUFpQjtZQUNqQkMsZ0JBQWdCO1lBQ2hCQyxrQkFBa0I7WUFDbEJDLG9CQUFvQjtZQUNwQkMsVUFBVTtRQUNaO1FBRUZDLFdBQVk7UUFDWkMsU0FBUTtRQUNSQyxTQUFROzswQkFFUiw4REFBQ3RCLG1EQUFLQTtnQkFDSnVCLEtBQUtaO2dCQUNMYSxLQUFLbEI7Z0JBQ0xjLFdBQVcsbUVBRVYsT0FEQ2YsS0FBSyxNQUFNLElBQUksWUFBWSxRQUFROzs7Ozs7MEJBR3ZDLDhEQUFDUTtnQkFDQ08sV0FBVyxpQ0FFVixPQURDZixLQUFLLE1BQU0sSUFBSSx5QkFBeUIsdUJBQXVCLEVBQ2hFOzBCQUVBTywwQkFDQzs7c0NBQ0UsOERBQUNiLGtEQUFJQTs0QkFDSDBCLE1BQU1oQjs0QkFDTmlCLFFBQU87NEJBQ1BOLFdBQVU7NEJBQ1ZPLGNBQVc7c0NBRVgsNEVBQUMvQiwyRUFBZUE7Z0NBQ2RnQyxNQUFNOUIsd0VBQVFBO2dDQUNkc0IsV0FBVTtnQ0FDVlMsY0FBWTtnQ0FDWkMsdUJBQW9CO2dDQUNwQkMseUJBQXNCO2dDQUN0QkMseUJBQXNCO2dDQUN0QkMseUJBQXNCOzs7Ozs7Ozs7OztzQ0FHMUIsOERBQUNsQyxrREFBSUE7NEJBQUMwQixNQUFNZixRQUFROzRCQUFJZ0IsUUFBTzs0QkFBU0MsY0FBVztzQ0FDakQsNEVBQUMvQiwyRUFBZUE7Z0NBQ2RnQyxNQUFNL0IscUVBQU1BO2dDQUNadUIsV0FBVTtnQ0FDVlMsY0FBWTtnQ0FDWkMsdUJBQW9CO2dDQUNwQkMseUJBQXNCO2dDQUN0QkMseUJBQXNCO2dDQUN0QkMseUJBQXNCOzs7Ozs7Ozs7Ozs7aURBSzVCLDhEQUFDcEI7b0JBQUlPLFdBQVU7O3NDQUNiLDhEQUFDckIsa0RBQUlBOzRCQUNIMEIsTUFBTWhCOzRCQUNOaUIsUUFBTzs0QkFDUE4sV0FBVTs0QkFDVk8sY0FBVztzQ0FFWCw0RUFBQy9CLDJFQUFlQTtnQ0FDZGdDLE1BQU05Qix3RUFBUUE7Z0NBQ2RzQixXQUFVO2dDQUNWUyxjQUFZO2dDQUNaQyx1QkFBb0I7Z0NBQ3BCQyx5QkFBc0I7Z0NBQ3RCQyx5QkFBc0I7Z0NBQ3RCQyx5QkFBc0I7Ozs7Ozs7Ozs7O3NDQUcxQiw4REFBQ3BCOzRCQUFJTyxXQUFVO3NDQUNiLDRFQUFDYztnQ0FBR2QsV0FBVTswQ0FBNkM7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBS2hFOzs7Ozs7MEJBRUgsOERBQUNQO2dCQUNDTyxXQUFXLHdCQUlWLE9BSEMsQ0FBRWYsQ0FBQUEsS0FBSyxNQUFNLEtBQ1QsK0VBQ0EsZ0RBQWdELEVBQ3JEOztrQ0FFRCw4REFBQ0osaUVBQWFBO3dCQUNaa0MsTUFBTTdCO3dCQUNOYyxXQUNFO3dCQUVGZ0IsV0FBVzt3QkFDWEMsV0FBVzs7Ozs7O2tDQUViLDhEQUFDbkMsZ0VBQVlBO3dCQUNYaUMsTUFBTTVCO3dCQUNOYSxXQUNFOzs7Ozs7a0NBR0osOERBQUNQO3dCQUFJTyxXQUFVO2tDQUNaWixhQUFhOEIsR0FBRyxDQUFDLENBQUNDLE1BQU1sQyxtQkFDdkIsOERBQUNKLGlFQUFhQTtnQ0FDWmtDLE1BQU1JO2dDQUNOSCxXQUFXO2dDQUNYQyxXQUFXO2dDQUVYakIsV0FDRTsrQkFGR2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVbkI7S0FsSU1EO0FBb0lOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9zZXJ2aWNlcy1zZWN0aW9uL1Byb2plY3RDYXJkLnRzeD83MzY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhTGluayB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IGZhR2l0aHViIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcbmltcG9ydCB7IFByb2plY3RQcm9wcyB9IGZyb20gXCIuL3Byb2plY3REZXRhaWxzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBBbmltYXRlZFRpdGxlIGZyb20gXCIuLi9hbmltYXRpb25zL0FuaW1hdGVkVGl0bGVcIjtcbmltcG9ydCBBbmltYXRlZEJvZHkgZnJvbSBcIi4uL2FuaW1hdGlvbnMvQW5pbWF0ZWRCb2R5XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBQcm9qZWN0Q2FyZCA9ICh7XG4gIGlkLFxuICBuYW1lLFxuICBkZXNjcmlwdGlvbixcbiAgdGVjaG5vbG9naWVzLFxuICBnaXRodWIsXG4gIGRlbW8sXG4gIGltYWdlLFxuICBhdmFpbGFibGUsXG59OiBQcm9qZWN0UHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgc3R5bGU9e1xuICAgICAgICB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyMTI1MzFcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciBjZW50ZXJcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgICAgIH1cbiAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIHotMTAgaC1bNTUwcHhdICB3LWZ1bGwgaXRlbXMtc3RyZXRjaCBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0zeGwgYmctY2VudGVyIHB5LTAgc206aC1bNzAwcHhdIHNtOnctWzEwMCVdIG1kOmgtWzY1MHB4XSBtZDp3LVsxMDAlXSBsZzpoLVs1MDBweF1gfVxuICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxuICAgID5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIC1ib3R0b20tMiB3LVs3MCVdIHNtOnctWzg1JV0gbWQ6dy1bNjAlXSBsZzptYXgtdy1bNTUlXSAke1xuICAgICAgICAgIGlkICUgMiA9PT0gMCA/IFwicmlnaHQtMFwiIDogXCJsZWZ0LTBcIlxuICAgICAgICB9YH1cbiAgICAgIC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIHRvcC0wIHRleHQtWyMwRTEwMTZdICR7XG4gICAgICAgICAgaWQgJSAyID09PSAwID8gXCJsZWZ0LTAgbWwtOCBsZzptbC0xNFwiIDogXCJyaWdodC0wIG1yLTggbGc6bXItMTRcIlxuICAgICAgICB9IG10LTYgZmxleCAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00IGxnOm10LTEwYH1cbiAgICAgID5cbiAgICAgICAge2F2YWlsYWJsZSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj17Z2l0aHVifVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiT3BlbiBHaXRIdWIgUmVwb3NpdG9yeVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICBpY29uPXtmYUdpdGh1Yn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgdy1bMjBweF0gcm91bmRlZC1mdWxsIGJnLXdoaXRlIHAtNSB0ZXh0LVsyMHB4XSBtZDp3LVsyNXB4XSBtZDp0ZXh0LVsyNHB4XSBsZzp3LVszMHB4XSBsZzp0ZXh0LVsyOHB4XVwiXG4gICAgICAgICAgICAgICAgZGF0YS1ibG9iaXR5XG4gICAgICAgICAgICAgICAgZGF0YS1ibG9iaXR5LXJhZGl1cz1cIjM4XCJcbiAgICAgICAgICAgICAgICBkYXRhLWJsb2JpdHktb2Zmc2V0LXg9XCI0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWJsb2JpdHktb2Zmc2V0LXk9XCI0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWJsb2JpdHktbWFnbmV0aWM9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2RlbW8gfHwgJyd9IHRhcmdldD1cIl9ibGFua1wiIGFyaWEtbGFiZWw9XCJPcGVuIExpdmUgRGVtb1wiPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFMaW5rfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LVsyMHB4XSByb3VuZGVkLWZ1bGwgYmctd2hpdGUgcC01IHRleHQtWzIwcHhdIG1kOnctWzI1cHhdIG1kOnRleHQtWzI0cHhdIGxnOnctWzMwcHhdIGxnOnRleHQtWzI4cHhdXCJcbiAgICAgICAgICAgICAgICBkYXRhLWJsb2JpdHlcbiAgICAgICAgICAgICAgICBkYXRhLWJsb2JpdHktcmFkaXVzPVwiMzhcIlxuICAgICAgICAgICAgICAgIGRhdGEtYmxvYml0eS1vZmZzZXQteD1cIjRcIlxuICAgICAgICAgICAgICAgIGRhdGEtYmxvYml0eS1vZmZzZXQteT1cIjRcIlxuICAgICAgICAgICAgICAgIGRhdGEtYmxvYml0eS1tYWduZXRpYz1cInRydWVzXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj17Z2l0aHVifVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJPcGVuIEdpdEh1YiBSZXBvc2l0b3J5XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgIGljb249e2ZhR2l0aHVifVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LVsyMHB4XSAgcm91bmRlZC1mdWxsIGJnLXdoaXRlIHAtNSB0ZXh0LVsyMHB4XSBtZDp3LVsyNXB4XSBtZDp0ZXh0LVsyNHB4XSBsZzp3LVszMHB4XSBsZzp0ZXh0LVsyOHB4XVwiXG4gICAgICAgICAgICAgICAgZGF0YS1ibG9iaXR5XG4gICAgICAgICAgICAgICAgZGF0YS1ibG9iaXR5LXJhZGl1cz1cIjM4XCJcbiAgICAgICAgICAgICAgICBkYXRhLWJsb2JpdHktb2Zmc2V0LXg9XCI0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWJsb2JpdHktb2Zmc2V0LXk9XCI0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWJsb2JpdHktbWFnbmV0aWM9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHJvdW5kZWQteGwgYmctd2hpdGUgcHgtNCBweS0yIG1kOnB4LTUgbWQ6cHktMyBsZzpweC02IGxnOnB5LTRcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtWzE2cHhdIG1kOnRleHQtWzE4cHhdIGxnOnRleHQtWzIwcHhdIFwiPlxuICAgICAgICAgICAgICAgIENvbWluZyBzb29uXG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB0ZXh0LXdoaXRlICAke1xuICAgICAgICAgICEoaWQgJSAyID09PSAwKVxuICAgICAgICAgICAgPyBcInJpZ2h0LTAgdG9wLTMyIG1yLTAgbWwtMTAgbWQ6cmlnaHQtMCBtZDptbC0wIGxnOnJpZ2h0LTAgbGc6dG9wLTYwICBsZzptci00XCJcbiAgICAgICAgICAgIDogXCJsZWZ0LTEwIHRvcC0zMiBtbC0wIG1kOm1yLTEyIGxnOnRvcC01MiBsZzptbC00XCJcbiAgICAgICAgfSBtYi0xMCAgbWQ6bWItMTYgbGc6bWItMTQgYH1cbiAgICAgID5cbiAgICAgICAgPEFuaW1hdGVkVGl0bGVcbiAgICAgICAgICB0ZXh0PXtuYW1lfVxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICBcIm1heC13LVs5MCVdIHRleHQtWzQwcHhdIGxlYWRpbmctbm9uZSB0ZXh0LXdoaXRlIG1kOnRleHQtWzQ0cHhdIG1kOmxlYWRpbmctbm9uZSBsZzptYXgtdy1bNDUwcHhdIGxnOnRleHQtWzQ4cHhdIGxnOmxlYWRpbmctbm9uZVwiXG4gICAgICAgICAgfVxuICAgICAgICAgIHdvcmRTcGFjZT17XCJtci1bMC4yNWVtXVwifVxuICAgICAgICAgIGNoYXJTcGFjZT17XCItbXItWzAuMDFlbV1cIn1cbiAgICAgICAgLz5cbiAgICAgICAgPEFuaW1hdGVkQm9keVxuICAgICAgICAgIHRleHQ9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICBcIm10LTQgdy1bOTAlXSBtYXgtdy1bNDU3cHhdIHRleHQtWzE2cHhdIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzk1OTc5RF0gXCJcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOSBmbGV4IGdhcC00XCI+XG4gICAgICAgICAge3RlY2hub2xvZ2llcy5tYXAoKHRlY2gsIGlkKSA9PiAoXG4gICAgICAgICAgICA8QW5pbWF0ZWRUaXRsZVxuICAgICAgICAgICAgICB0ZXh0PXt0ZWNofVxuICAgICAgICAgICAgICB3b3JkU3BhY2U9e1wibXItWzAuMjVlbV1cIn1cbiAgICAgICAgICAgICAgY2hhclNwYWNlPXtcIm1yLVswLjAxZW1dXCJ9XG4gICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgXCJ0ZXh0LVsxNHB4XSBmb250LWJvbGQgdXBwZXJjYXNlIG1kOnRleHQtWzE2cHhdIGxnOnRleHQtWzE4cHhdIFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQ7XG4iXSwibmFtZXMiOlsiRm9udEF3ZXNvbWVJY29uIiwiZmFMaW5rIiwiZmFHaXRodWIiLCJMaW5rIiwiSW1hZ2UiLCJBbmltYXRlZFRpdGxlIiwiQW5pbWF0ZWRCb2R5IiwibW90aW9uIiwiUHJvamVjdENhcmQiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInRlY2hub2xvZ2llcyIsImdpdGh1YiIsImRlbW8iLCJpbWFnZSIsImF2YWlsYWJsZSIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwicG9zaXRpb24iLCJjbGFzc05hbWUiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInNyYyIsImFsdCIsImhyZWYiLCJ0YXJnZXQiLCJhcmlhLWxhYmVsIiwiaWNvbiIsImRhdGEtYmxvYml0eSIsImRhdGEtYmxvYml0eS1yYWRpdXMiLCJkYXRhLWJsb2JpdHktb2Zmc2V0LXgiLCJkYXRhLWJsb2JpdHktb2Zmc2V0LXkiLCJkYXRhLWJsb2JpdHktbWFnbmV0aWMiLCJoMyIsInRleHQiLCJ3b3JkU3BhY2UiLCJjaGFyU3BhY2UiLCJtYXAiLCJ0ZWNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/services-section/ProjectCard.tsx\n"));

/***/ })

});