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

/***/ "(app-client)/./app/services-section/ProjectGrid.tsx":
/*!**********************************************!*\
  !*** ./app/services-section/ProjectGrid.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectCard */ \"(app-client)/./app/services-section/ProjectCard.tsx\");\n/* harmony import */ var _projectDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectDetails */ \"(app-client)/./app/services-section/projectDetails.tsx\");\n\n\n\nconst ProjectGrid = ()=>{\n    // const [filter, setFilter] = useState(true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1\",\n            children: _projectDetails__WEBPACK_IMPORTED_MODULE_2__.devProjects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    id: project.id,\n                    name: project.name,\n                    description: project.description,\n                    technologies: project.technologies,\n                    github: project.github,\n                    demo: project.demo,\n                    image: project.image,\n                    available: project.available\n                }, project.id, false, {\n                    fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectGrid.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/owentillger/Documents/GitHub/ottr-site/app/services-section/ProjectGrid.tsx\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_c = ProjectGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectGrid);\nvar _c;\n$RefreshReg$(_c, \"ProjectGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3NlcnZpY2VzLXNlY3Rpb24vUHJvamVjdEdyaWQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdDO0FBQ3FDO0FBRzdFLE1BQU1FLGNBQWMsSUFBTTtJQUN4Qiw4Q0FBOEM7SUFFOUMscUJBQ0U7a0JBcUJJLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNaSCw0REFBZSxDQUFDLENBQUNLLHdCQUNoQiw4REFBQ04sb0RBQVdBO29CQUNWTyxJQUFJRCxRQUFRQyxFQUFFO29CQUVkQyxNQUFNRixRQUFRRSxJQUFJO29CQUNsQkMsYUFBYUgsUUFBUUcsV0FBVztvQkFDaENDLGNBQWNKLFFBQVFJLFlBQVk7b0JBQ2xDQyxRQUFRTCxRQUFRSyxNQUFNO29CQUN0QkMsTUFBTU4sUUFBUU0sSUFBSTtvQkFDbEJDLE9BQU9QLFFBQVFPLEtBQUs7b0JBQ3BCQyxXQUFXUixRQUFRUSxTQUFTO21CQVB2QlIsUUFBUUMsRUFBRTs7Ozs7Ozs7Ozs7QUErQjdCO0tBNURNTDtBQThETiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvc2VydmljZXMtc2VjdGlvbi9Qcm9qZWN0R3JpZC50c3g/OWQwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdENhcmQgZnJvbSBcIi4vUHJvamVjdENhcmRcIjtcbmltcG9ydCB7IGRldlByb2plY3RzLCBkZXNpZ25Qcm9qZWN0cywgUHJvamVjdFByb3BzIH0gZnJvbSBcIi4vcHJvamVjdERldGFpbHNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFByb2plY3RHcmlkID0gKCkgPT4ge1xuICAvLyBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibWItMTAgZmxleCBnYXAtMTYgdGV4dC1bI2U0ZGVkN10gbWQ6bWItMTYgIGxnOm1iLTIwIFwiPlxuICAgICAgICA8aDRcbiAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LVsxNnB4XSBtZDp0ZXh0LVsyMHB4XSBsZzp0ZXh0LVsyNHB4XSAke1xuICAgICAgICAgICAgZmlsdGVyID8gXCJ0ZXh0LVsjZTRkZWQ3XVwiIDogXCJ0ZXh0LVsjZTRkZWQ3XS8zMFwiXG4gICAgICAgICAgfWB9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RmlsdGVyKHRydWUpfVxuICAgICAgICA+XG4gICAgICAgICAgRGV2ZWxvcG1lbnRcbiAgICAgICAgPC9oND57XCIgXCJ9XG4gICAgICAgIDxoNFxuICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtWzE2cHhdIG1kOnRleHQtWzIwcHhdIGxnOnRleHQtWzI0cHhdICR7XG4gICAgICAgICAgICBmaWx0ZXIgPyBcInRleHQtWyNlNGRlZDddLzMwXCIgOiBcInRleHQtWyNlNGRlZDddXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAgRGVzaWduXG4gICAgICAgIDwvaDQ+XG4gICAgICA8L2Rpdj4gKi99XG5cbiAgICAgIHsvKiB7ZmlsdGVyID8gKCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHctWzkwJV0gZ3JpZC1jb2xzLTEgZ3JpZC1yb3dzLTIgZ2FwLXktMTAgZ2FwLXgtNiBsZzptYXgtdy1bMTIwMHB4XSBsZzpncmlkLWNvbHMtMVwiPlxuICAgICAgICAgIHtkZXZQcm9qZWN0cy5tYXAoKHByb2plY3Q6IFByb2plY3RQcm9wcykgPT4gKFxuICAgICAgICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgICAgICAgIGlkPXtwcm9qZWN0LmlkfVxuICAgICAgICAgICAgICBrZXk9e3Byb2plY3QuaWR9XG4gICAgICAgICAgICAgIG5hbWU9e3Byb2plY3QubmFtZX1cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIHRlY2hub2xvZ2llcz17cHJvamVjdC50ZWNobm9sb2dpZXN9XG4gICAgICAgICAgICAgIGdpdGh1Yj17cHJvamVjdC5naXRodWJ9XG4gICAgICAgICAgICAgIGRlbW89e3Byb2plY3QuZGVtb31cbiAgICAgICAgICAgICAgaW1hZ2U9e3Byb2plY3QuaW1hZ2V9XG4gICAgICAgICAgICAgIGF2YWlsYWJsZT17cHJvamVjdC5hdmFpbGFibGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIHsvKiApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgdy1bOTAlXSBncmlkLWNvbHMtMSBncmlkLXJvd3MtMiBnYXAteS02IGdhcC14LTYgbGc6bWF4LXctWzEyMDBweF0gbGc6Z3JpZC1jb2xzLTFcIj5cbiAgICAgICAgICB7ZGVzaWduUHJvamVjdHMubWFwKChwcm9qZWN0OiBQcm9qZWN0UHJvcHMpID0+IChcbiAgICAgICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgICAgICBpZD17cHJvamVjdC5pZH1cbiAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LmlkfVxuICAgICAgICAgICAgICBuYW1lPXtwcm9qZWN0Lm5hbWV9XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICB0ZWNobm9sb2dpZXM9e3Byb2plY3QudGVjaG5vbG9naWVzfVxuICAgICAgICAgICAgICBnaXRodWI9e3Byb2plY3QuZ2l0aHVifVxuICAgICAgICAgICAgICBkZW1vPXtwcm9qZWN0LmRlbW99XG4gICAgICAgICAgICAgIGltYWdlPXtwcm9qZWN0LmltYWdlfVxuICAgICAgICAgICAgICBiZ0NvbG9yPXtwcm9qZWN0LmJnQ29sb3J9XG4gICAgICAgICAgICAgIGF2YWlsYWJsZT17cHJvamVjdC5hdmFpbGFibGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9ICovfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdEdyaWQ7XG4iXSwibmFtZXMiOlsiUHJvamVjdENhcmQiLCJkZXZQcm9qZWN0cyIsIlByb2plY3RHcmlkIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicHJvamVjdCIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidGVjaG5vbG9naWVzIiwiZ2l0aHViIiwiZGVtbyIsImltYWdlIiwiYXZhaWxhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/services-section/ProjectGrid.tsx\n"));

/***/ })

});