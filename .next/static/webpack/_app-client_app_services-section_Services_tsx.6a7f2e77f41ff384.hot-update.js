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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-client)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-client)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"(app-client)/./node_modules/@fortawesome/free-brands-svg-icons/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _animations_AnimatedTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations/AnimatedTitle */ \"(app-client)/./app/animations/AnimatedTitle.tsx\");\n/* harmony import */ var _animations_AnimatedBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animations/AnimatedBody */ \"(app-client)/./app/animations/AnimatedBody.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\n\n\n\n\n\n\n\n\nconst ProjectCard = (param)=>{\n    let { id , name , description , technologies , github , demo , image , available  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n        style: {\n            backgroundColor: \"#212531\",\n            backgroundSize: \"cover\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundPosition: \"center center\",\n            position: \"relative\"\n        },\n        className: \"relative z-10 h-[550px]  w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 sm:h-[700px] sm:w-[100%] md:h-[650px] md:w-[100%] lg:h-[500px]\",\n        initial: \"initial\",\n        animate: \"animate\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: image,\n                alt: name,\n                className: \"absolute -bottom-2 w-[70%] sm:w-[85%] md:w-[60%] lg:max-w-[55%] \".concat(id % 2 === 0 ? \"right-0\" : \"left-0\")\n            }, void 0, false, {\n                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 text-[#0E1016] \".concat(id % 2 === 0 ? \"left-0 ml-8 lg:ml-14\" : \"right-0 mr-8 lg:mr-14\", \" mt-6 flex  items-center justify-center gap-4 lg:mt-10\"),\n                children: available ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: github,\n                            target: \"_blank\",\n                            className: \"rounded-full\",\n                            \"aria-label\": \"Open GitHub Repository\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faGithub,\n                                className: \" w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]\",\n                                \"data-blobity\": true,\n                                \"data-blobity-radius\": \"38\",\n                                \"data-blobity-offset-x\": \"4\",\n                                \"data-blobity-offset-y\": \"4\",\n                                \"data-blobity-magnetic\": \"true\"\n                            }, void 0, false, {\n                                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            ref: demo,\n                            target: \"_blank\",\n                            \"aria-label\": \"Open Live Demo\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faLink,\n                                className: \" w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]\",\n                                \"data-blobity\": true,\n                                \"data-blobity-radius\": \"38\",\n                                \"data-blobity-offset-x\": \"4\",\n                                \"data-blobity-offset-y\": \"4\",\n                                \"data-blobity-magnetic\": \"trues\"\n                            }, void 0, false, {\n                                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" flex items-center justify-center gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: github,\n                            target: \"_blank\",\n                            className: \"mt-1 rounded-full\",\n                            \"aria-label\": \"Open GitHub Repository\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faGithub,\n                                className: \" w-[20px]  rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]\",\n                                \"data-blobity\": true,\n                                \"data-blobity-radius\": \"38\",\n                                \"data-blobity-offset-x\": \"4\",\n                                \"data-blobity-offset-y\": \"4\",\n                                \"data-blobity-magnetic\": \"true\"\n                            }, void 0, false, {\n                                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" rounded-xl bg-white px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-[16px] md:text-[18px] lg:text-[20px] \",\n                                children: \"Coming soon\"\n                            }, void 0, false, {\n                                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute text-white  \".concat(!(id % 2 === 0) ? \"right-0 top-32 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-60  lg:mr-4\" : \"left-10 top-32 ml-0 md:mr-12 lg:top-52 lg:ml-4\", \" mb-10  md:mb-16 lg:mb-14 \"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animations_AnimatedTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        text: name,\n                        className: \"max-w-[90%] text-[40px] leading-none text-white md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none\",\n                        wordSpace: \"mr-[0.25em]\",\n                        charSpace: \"-mr-[0.01em]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animations_AnimatedBody__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        text: description,\n                        className: \"mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D] \"\n                    }, void 0, false, {\n                        fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-9 flex gap-4\",\n                        children: technologies.map((tech, id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animations_AnimatedTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                text: tech,\n                                wordSpace: \"mr-[0.25em]\",\n                                charSpace: \"mr-[0.01em]\",\n                                className: \"text-[14px] font-bold uppercase md:text-[16px] lg:text-[18px] \"\n                            }, id, false, {\n                                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                                lineNumber: 131,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectCard.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3NlcnZpY2VzLXNlY3Rpb24vUHJvamVjdENhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUU7QUFDTjtBQUNHO0FBRWpDO0FBQ0U7QUFDeUI7QUFDRjtBQUNmO0FBRXZDLE1BQU1RLGNBQWMsU0FTQTtRQVRDLEVBQ25CQyxHQUFFLEVBQ0ZDLEtBQUksRUFDSkMsWUFBVyxFQUNYQyxhQUFZLEVBQ1pDLE9BQU0sRUFDTkMsS0FBSSxFQUNKQyxNQUFLLEVBQ0xDLFVBQVMsRUFDSTtJQUNiLHFCQUNFLDhEQUFDVCxxREFBVTtRQUNUVyxPQUNFO1lBQ0VDLGlCQUFpQjtZQUNqQkMsZ0JBQWdCO1lBQ2hCQyxrQkFBa0I7WUFDbEJDLG9CQUFvQjtZQUNwQkMsVUFBVTtRQUNaO1FBRUZDLFdBQVk7UUFDWkMsU0FBUTtRQUNSQyxTQUFROzswQkFFUiw4REFBQ3RCLG1EQUFLQTtnQkFDSnVCLEtBQUtaO2dCQUNMYSxLQUFLbEI7Z0JBQ0xjLFdBQVcsbUVBRVYsT0FEQ2YsS0FBSyxNQUFNLElBQUksWUFBWSxRQUFROzs7Ozs7MEJBR3ZDLDhEQUFDUTtnQkFDQ08sV0FBVyxpQ0FFVixPQURDZixLQUFLLE1BQU0sSUFBSSx5QkFBeUIsdUJBQXVCLEVBQ2hFOzBCQUVBTywwQkFDQzs7c0NBQ0UsOERBQUNiLGtEQUFJQTs0QkFDSDBCLE1BQU1oQjs0QkFDTmlCLFFBQU87NEJBQ1BOLFdBQVU7NEJBQ1ZPLGNBQVc7c0NBRVgsNEVBQUMvQiwyRUFBZUE7Z0NBQ2RnQyxNQUFNOUIsd0VBQVFBO2dDQUNkc0IsV0FBVTtnQ0FDVlMsY0FBWTtnQ0FDWkMsdUJBQW9CO2dDQUNwQkMseUJBQXNCO2dDQUN0QkMseUJBQXNCO2dDQUN0QkMseUJBQXNCOzs7Ozs7Ozs7OztzQ0FHMUIsOERBQUNsQyxrREFBSUE7NEJBQ0htQyxLQUFLeEI7NEJBQ0xnQixRQUFPOzRCQUNQQyxjQUFXO3NDQUVYLDRFQUFDL0IsMkVBQWVBO2dDQUNkZ0MsTUFBTS9CLHFFQUFNQTtnQ0FDWnVCLFdBQVU7Z0NBQ1ZTLGNBQVk7Z0NBQ1pDLHVCQUFvQjtnQ0FDcEJDLHlCQUFzQjtnQ0FDdEJDLHlCQUFzQjtnQ0FDdEJDLHlCQUFzQjs7Ozs7Ozs7Ozs7O2lEQUs1Qiw4REFBQ3BCO29CQUFJTyxXQUFVOztzQ0FDYiw4REFBQ3JCLGtEQUFJQTs0QkFDSDBCLE1BQU1oQjs0QkFDTmlCLFFBQU87NEJBQ1BOLFdBQVU7NEJBQ1ZPLGNBQVc7c0NBRVgsNEVBQUMvQiwyRUFBZUE7Z0NBQ2RnQyxNQUFNOUIsd0VBQVFBO2dDQUNkc0IsV0FBVTtnQ0FDVlMsY0FBWTtnQ0FDWkMsdUJBQW9CO2dDQUNwQkMseUJBQXNCO2dDQUN0QkMseUJBQXNCO2dDQUN0QkMseUJBQXNCOzs7Ozs7Ozs7OztzQ0FHMUIsOERBQUNwQjs0QkFBSU8sV0FBVTtzQ0FDYiw0RUFBQ2U7Z0NBQUdmLFdBQVU7MENBQTZDOzs7Ozs7Ozs7Ozs7Ozs7OzZCQUtoRTs7Ozs7OzBCQUVILDhEQUFDUDtnQkFDQ08sV0FBVyx3QkFJVixPQUhDLENBQUVmLENBQUFBLEtBQUssTUFBTSxLQUNULCtFQUNBLGdEQUFnRCxFQUNyRDs7a0NBRUQsOERBQUNKLGlFQUFhQTt3QkFDWm1DLE1BQU05Qjt3QkFDTmMsV0FDRTt3QkFFRmlCLFdBQVc7d0JBQ1hDLFdBQVc7Ozs7OztrQ0FFYiw4REFBQ3BDLGdFQUFZQTt3QkFDWGtDLE1BQU03Qjt3QkFDTmEsV0FDRTs7Ozs7O2tDQUdKLDhEQUFDUDt3QkFBSU8sV0FBVTtrQ0FDWlosYUFBYStCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNbkMsbUJBQ3ZCLDhEQUFDSixpRUFBYUE7Z0NBQ1ptQyxNQUFNSTtnQ0FDTkgsV0FBVztnQ0FDWEMsV0FBVztnQ0FFWGxCLFdBQ0U7K0JBRkdmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVW5CO0tBdElNRDtBQXdJTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvc2VydmljZXMtc2VjdGlvbi9Qcm9qZWN0Q2FyZC50c3g/NzM2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUxpbmsgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBmYUdpdGh1YiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBQcm9qZWN0UHJvcHMgfSBmcm9tIFwiLi9wcm9qZWN0RGV0YWlsc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgQW5pbWF0ZWRUaXRsZSBmcm9tIFwiLi4vYW5pbWF0aW9ucy9BbmltYXRlZFRpdGxlXCI7XG5pbXBvcnQgQW5pbWF0ZWRCb2R5IGZyb20gXCIuLi9hbmltYXRpb25zL0FuaW1hdGVkQm9keVwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgUHJvamVjdENhcmQgPSAoe1xuICBpZCxcbiAgbmFtZSxcbiAgZGVzY3JpcHRpb24sXG4gIHRlY2hub2xvZ2llcyxcbiAgZ2l0aHViLFxuICBkZW1vLFxuICBpbWFnZSxcbiAgYXZhaWxhYmxlLFxufTogUHJvamVjdFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIHN0eWxlPXtcbiAgICAgICAge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjEyNTMxXCIsXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxuICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXIgY2VudGVyXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gICAgICB9XG4gICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSB6LTEwIGgtWzU1MHB4XSAgdy1mdWxsIGl0ZW1zLXN0cmV0Y2gganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtM3hsIGJnLWNlbnRlciBweS0wIHNtOmgtWzcwMHB4XSBzbTp3LVsxMDAlXSBtZDpoLVs2NTBweF0gbWQ6dy1bMTAwJV0gbGc6aC1bNTAwcHhdYH1cbiAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgIGFuaW1hdGU9XCJhbmltYXRlXCJcbiAgICA+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgYWx0PXtuYW1lfVxuICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSAtYm90dG9tLTIgdy1bNzAlXSBzbTp3LVs4NSVdIG1kOnctWzYwJV0gbGc6bWF4LXctWzU1JV0gJHtcbiAgICAgICAgICBpZCAlIDIgPT09IDAgPyBcInJpZ2h0LTBcIiA6IFwibGVmdC0wXCJcbiAgICAgICAgfWB9XG4gICAgICAvPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtMCB0ZXh0LVsjMEUxMDE2XSAke1xuICAgICAgICAgIGlkICUgMiA9PT0gMCA/IFwibGVmdC0wIG1sLTggbGc6bWwtMTRcIiA6IFwicmlnaHQtMCBtci04IGxnOm1yLTE0XCJcbiAgICAgICAgfSBtdC02IGZsZXggIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNCBsZzptdC0xMGB9XG4gICAgICA+XG4gICAgICAgIHthdmFpbGFibGUgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9e2dpdGh1Yn1cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk9wZW4gR2l0SHViIFJlcG9zaXRvcnlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFHaXRodWJ9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctWzIwcHhdIHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBwLTUgdGV4dC1bMjBweF0gbWQ6dy1bMjVweF0gbWQ6dGV4dC1bMjRweF0gbGc6dy1bMzBweF0gbGc6dGV4dC1bMjhweF1cIlxuICAgICAgICAgICAgICAgIGRhdGEtYmxvYml0eVxuICAgICAgICAgICAgICAgIGRhdGEtYmxvYml0eS1yYWRpdXM9XCIzOFwiXG4gICAgICAgICAgICAgICAgZGF0YS1ibG9iaXR5LW9mZnNldC14PVwiNFwiXG4gICAgICAgICAgICAgICAgZGF0YS1ibG9iaXR5LW9mZnNldC15PVwiNFwiXG4gICAgICAgICAgICAgICAgZGF0YS1ibG9iaXR5LW1hZ25ldGljPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgcmVmPXtkZW1vfSBcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJPcGVuIExpdmUgRGVtb1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICBpY29uPXtmYUxpbmt9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctWzIwcHhdIHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBwLTUgdGV4dC1bMjBweF0gbWQ6dy1bMjVweF0gbWQ6dGV4dC1bMjRweF0gbGc6dy1bMzBweF0gbGc6dGV4dC1bMjhweF1cIlxuICAgICAgICAgICAgICAgIGRhdGEtYmxvYml0eVxuICAgICAgICAgICAgICAgIGRhdGEtYmxvYml0eS1yYWRpdXM9XCIzOFwiXG4gICAgICAgICAgICAgICAgZGF0YS1ibG9iaXR5LW9mZnNldC14PVwiNFwiXG4gICAgICAgICAgICAgICAgZGF0YS1ibG9iaXR5LW9mZnNldC15PVwiNFwiXG4gICAgICAgICAgICAgICAgZGF0YS1ibG9iaXR5LW1hZ25ldGljPVwidHJ1ZXNcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPXtnaXRodWJ9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk9wZW4gR2l0SHViIFJlcG9zaXRvcnlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFHaXRodWJ9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctWzIwcHhdICByb3VuZGVkLWZ1bGwgYmctd2hpdGUgcC01IHRleHQtWzIwcHhdIG1kOnctWzI1cHhdIG1kOnRleHQtWzI0cHhdIGxnOnctWzMwcHhdIGxnOnRleHQtWzI4cHhdXCJcbiAgICAgICAgICAgICAgICBkYXRhLWJsb2JpdHlcbiAgICAgICAgICAgICAgICBkYXRhLWJsb2JpdHktcmFkaXVzPVwiMzhcIlxuICAgICAgICAgICAgICAgIGRhdGEtYmxvYml0eS1vZmZzZXQteD1cIjRcIlxuICAgICAgICAgICAgICAgIGRhdGEtYmxvYml0eS1vZmZzZXQteT1cIjRcIlxuICAgICAgICAgICAgICAgIGRhdGEtYmxvYml0eS1tYWduZXRpYz1cInRydWVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcm91bmRlZC14bCBiZy13aGl0ZSBweC00IHB5LTIgbWQ6cHgtNSBtZDpweS0zIGxnOnB4LTYgbGc6cHktNFwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1bMTZweF0gbWQ6dGV4dC1bMThweF0gbGc6dGV4dC1bMjBweF0gXCI+XG4gICAgICAgICAgICAgICAgQ29taW5nIHNvb25cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIHRleHQtd2hpdGUgICR7XG4gICAgICAgICAgIShpZCAlIDIgPT09IDApXG4gICAgICAgICAgICA/IFwicmlnaHQtMCB0b3AtMzIgbXItMCBtbC0xMCBtZDpyaWdodC0wIG1kOm1sLTAgbGc6cmlnaHQtMCBsZzp0b3AtNjAgIGxnOm1yLTRcIlxuICAgICAgICAgICAgOiBcImxlZnQtMTAgdG9wLTMyIG1sLTAgbWQ6bXItMTIgbGc6dG9wLTUyIGxnOm1sLTRcIlxuICAgICAgICB9IG1iLTEwICBtZDptYi0xNiBsZzptYi0xNCBgfVxuICAgICAgPlxuICAgICAgICA8QW5pbWF0ZWRUaXRsZVxuICAgICAgICAgIHRleHQ9e25hbWV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIFwibWF4LXctWzkwJV0gdGV4dC1bNDBweF0gbGVhZGluZy1ub25lIHRleHQtd2hpdGUgbWQ6dGV4dC1bNDRweF0gbWQ6bGVhZGluZy1ub25lIGxnOm1heC13LVs0NTBweF0gbGc6dGV4dC1bNDhweF0gbGc6bGVhZGluZy1ub25lXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgd29yZFNwYWNlPXtcIm1yLVswLjI1ZW1dXCJ9XG4gICAgICAgICAgY2hhclNwYWNlPXtcIi1tci1bMC4wMWVtXVwifVxuICAgICAgICAvPlxuICAgICAgICA8QW5pbWF0ZWRCb2R5XG4gICAgICAgICAgdGV4dD17ZGVzY3JpcHRpb259XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIFwibXQtNCB3LVs5MCVdIG1heC13LVs0NTdweF0gdGV4dC1bMTZweF0gZm9udC1zZW1pYm9sZCB0ZXh0LVsjOTU5NzlEXSBcIlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC05IGZsZXggZ2FwLTRcIj5cbiAgICAgICAgICB7dGVjaG5vbG9naWVzLm1hcCgodGVjaCwgaWQpID0+IChcbiAgICAgICAgICAgIDxBbmltYXRlZFRpdGxlXG4gICAgICAgICAgICAgIHRleHQ9e3RlY2h9XG4gICAgICAgICAgICAgIHdvcmRTcGFjZT17XCJtci1bMC4yNWVtXVwifVxuICAgICAgICAgICAgICBjaGFyU3BhY2U9e1wibXItWzAuMDFlbV1cIn1cbiAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICBcInRleHQtWzE0cHhdIGZvbnQtYm9sZCB1cHBlcmNhc2UgbWQ6dGV4dC1bMTZweF0gbGc6dGV4dC1bMThweF0gXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Q2FyZDtcbiJdLCJuYW1lcyI6WyJGb250QXdlc29tZUljb24iLCJmYUxpbmsiLCJmYUdpdGh1YiIsIkxpbmsiLCJJbWFnZSIsIkFuaW1hdGVkVGl0bGUiLCJBbmltYXRlZEJvZHkiLCJtb3Rpb24iLCJQcm9qZWN0Q2FyZCIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidGVjaG5vbG9naWVzIiwiZ2l0aHViIiwiZGVtbyIsImltYWdlIiwiYXZhaWxhYmxlIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJwb3NpdGlvbiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJhbmltYXRlIiwic3JjIiwiYWx0IiwiaHJlZiIsInRhcmdldCIsImFyaWEtbGFiZWwiLCJpY29uIiwiZGF0YS1ibG9iaXR5IiwiZGF0YS1ibG9iaXR5LXJhZGl1cyIsImRhdGEtYmxvYml0eS1vZmZzZXQteCIsImRhdGEtYmxvYml0eS1vZmZzZXQteSIsImRhdGEtYmxvYml0eS1tYWduZXRpYyIsInJlZiIsImgzIiwidGV4dCIsIndvcmRTcGFjZSIsImNoYXJTcGFjZSIsIm1hcCIsInRlY2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/services-section/ProjectCard.tsx\n"));

/***/ })

});