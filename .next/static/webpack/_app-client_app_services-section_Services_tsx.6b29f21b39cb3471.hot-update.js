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

/***/ "(app-client)/./app/services-section/projectDetails.tsx":
/*!*************************************************!*\
  !*** ./app/services-section/projectDetails.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"devProjects\": function() { return /* binding */ devProjects; }\n/* harmony export */ });\nconst devProjects = [\n    {\n        id: 0,\n        name: \"Playground Finance\",\n        description: \"Quantitative Trading Firm\",\n        technologies: [\n            \"HFT\",\n            \"py\",\n            \"TF\",\n            \"etc\"\n        ],\n        // github: \"https://github.com/owenAPI/PlaygroundFinance\",\n        // demo: \"https://drive.google.com/file/d/165N3StfyU2XSX5kWzPZayHizmRYeonTm/view?usp=drive_link\",\n        image: __webpack_require__(/*! .//../../public/projects/playground.png */ \"(app-client)/./public/projects/playground.png\"),\n        available: true\n    },\n    {\n        id: 1,\n        name: \"Clickroot\",\n        description: \"Software Development Studio\",\n        technologies: [\n            \"py\",\n            \"QL\",\n            \"js\",\n            \"etc\"\n        ],\n        // github: \"https://github.com/owenAPI/Clickroot\",\n        // demo: \"\",\n        image: __webpack_require__(/*! .//../../public/projects/clickroot-new.png */ \"(app-client)/./public/projects/clickroot-new.png\"),\n        available: true\n    }\n]; // export const designProjects = [\n //   {\n //     id: 1,\n //     name: \"Hebron Statup Lab Website\",\n //     description:\n //       \"SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.\",\n //     technologies: [\"UX Research\", \"UI Design\", \"Prototyping\"],\n //     github: \"\",\n //     demo: \"\",\n //     image: \"/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75\",\n //     available: false,\n //   },\n //   {\n //     id: 2,\n //     name: \"RAGS Scrubs Website\",\n //     description:\n //       \"An image generator website that allows users to generate, combine, and download images.\",\n //     technologies: [\"UX Research\", \"UI Design\", \"Prototyping\"],\n //     github: \"\",\n //     demo: \"\",\n //     image: \"/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75\",\n //     available: false,\n //   },\n //   {\n //     id: 3,\n //     name: \"Crown Branding Agency Website\",\n //     description:\n //       \"A website that reduces the length of your URL using Bit.ly's API\",\n //     technologies: [\"UX Research\", \"UI Design\", \"Prototyping\"],\n //     github: \"\",\n //     demo: \"\",\n //     image:\n //       \"/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75\",\n //     available: false,\n //   },\n //   {\n //     id: 4,\n //     name: \"Titi Mobile App\",\n //     description:\n //       \"TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.\",\n //     technologies: [\"UX Research\", \"UI Design\", \"Prototyping\"],\n //     github: \"\",\n //     demo: \"\",\n //     image: \"/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75\",\n //     available: false,\n //   },\n // ];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3NlcnZpY2VzLXNlY3Rpb24vcHJvamVjdERldGFpbHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFTTyxNQUFNQSxjQUFjO0lBQ3pCO1FBQ0VDLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLGNBQWM7WUFBQztZQUFPO1lBQU07WUFBTTtTQUFNO1FBQ3hDLDBEQUEwRDtRQUMxRCxpR0FBaUc7UUFDakdDLE9BQU9DLG1CQUFPQSxDQUFDLDhGQUF5QztRQUN4REMsV0FBVyxJQUFJO0lBQ2pCO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxNQUFNO1FBQ05DLGFBQWE7UUFDYkMsY0FBYztZQUFDO1lBQU07WUFBTTtZQUFNO1NBQU07UUFDdkMsa0RBQWtEO1FBQ2xELFlBQVk7UUFDWkMsT0FBT0MsbUJBQU9BLENBQUMsb0dBQTRDO1FBQzNEQyxXQUFXLElBQUk7SUFDakI7Q0EyQ0QsQ0FBQyxDQUVGLGtDQUFrQztDQUNsQyxNQUFNO0NBQ04sYUFBYTtDQUNiLHlDQUF5QztDQUN6QyxtQkFBbUI7Q0FDbkIsb0hBQW9IO0NBQ3BILGlFQUFpRTtDQUNqRSxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGtGQUFrRjtDQUNsRix3QkFBd0I7Q0FDeEIsT0FBTztDQUNQLE1BQU07Q0FDTixhQUFhO0NBQ2IsbUNBQW1DO0NBQ25DLG1CQUFtQjtDQUNuQixtR0FBbUc7Q0FDbkcsaUVBQWlFO0NBQ2pFLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsbUZBQW1GO0NBQ25GLHdCQUF3QjtDQUN4QixPQUFPO0NBQ1AsTUFBTTtDQUNOLGFBQWE7Q0FDYiw2Q0FBNkM7Q0FDN0MsbUJBQW1CO0NBQ25CLDRFQUE0RTtDQUM1RSxpRUFBaUU7Q0FDakUsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsK0VBQStFO0NBQy9FLHdCQUF3QjtDQUN4QixPQUFPO0NBQ1AsTUFBTTtDQUNOLGFBQWE7Q0FDYiwrQkFBK0I7Q0FDL0IsbUJBQW1CO0NBQ25CLHdJQUF3STtDQUN4SSxpRUFBaUU7Q0FDakUsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixtRkFBbUY7Q0FDbkYsd0JBQXdCO0NBQ3hCLE9BQU87Q0FDUCxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9zZXJ2aWNlcy1zZWN0aW9uL3Byb2plY3REZXRhaWxzLnRzeD9jNTRlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIFByb2plY3RQcm9wcyA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICB0ZWNobm9sb2dpZXM6IHN0cmluZ1tdO1xuICBpbWFnZTogc3RyaW5nO1xuICBhdmFpbGFibGU6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgZGV2UHJvamVjdHMgPSBbXG4gIHtcbiAgICBpZDogMCxcbiAgICBuYW1lOiBcIlBsYXlncm91bmQgRmluYW5jZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlF1YW50aXRhdGl2ZSBUcmFkaW5nIEZpcm1cIixcbiAgICB0ZWNobm9sb2dpZXM6IFtcIkhGVFwiLCBcInB5XCIsIFwiVEZcIiwgXCJldGNcIl0sXG4gICAgLy8gZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9vd2VuQVBJL1BsYXlncm91bmRGaW5hbmNlXCIsXG4gICAgLy8gZGVtbzogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2NU4zU3RmeVUyWFNYNWtXelBaYXlIaXptUlllb25UbS92aWV3P3VzcD1kcml2ZV9saW5rXCIsXG4gICAgaW1hZ2U6IHJlcXVpcmUoXCIuLy8uLi8uLi9wdWJsaWMvcHJvamVjdHMvcGxheWdyb3VuZC5wbmdcIiksXG4gICAgYXZhaWxhYmxlOiB0cnVlLFxuICB9LFxuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogXCJDbGlja3Jvb3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTb2Z0d2FyZSBEZXZlbG9wbWVudCBTdHVkaW9cIixcbiAgICB0ZWNobm9sb2dpZXM6IFtcInB5XCIsIFwiUUxcIiwgXCJqc1wiLCBcImV0Y1wiXSxcbiAgICAvLyBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL293ZW5BUEkvQ2xpY2tyb290XCIsXG4gICAgLy8gZGVtbzogXCJcIixcbiAgICBpbWFnZTogcmVxdWlyZShcIi4vLy4uLy4uL3B1YmxpYy9wcm9qZWN0cy9jbGlja3Jvb3QtbmV3LnBuZ1wiKSxcbiAgICBhdmFpbGFibGU6IHRydWUsXG4gIH0sXG4gIC8vIHtcbiAgLy8gICBpZDogMixcbiAgLy8gICBuYW1lOiBcIjIxNSBQYXJ0bmVyc1wiLFxuICAvLyAgIGRlc2NyaXB0aW9uOlxuICAvLyAgICAgXCJWZW50dXJlIENhcGl0YWxcIixcbiAgLy8gICB0ZWNobm9sb2dpZXM6IFtdLFxuICAvLyAgIGdpdGh1YjogXCJcIixcbiAgLy8gICBkZW1vOiBcIlwiLFxuICAvLyAgIGltYWdlOiByZXF1aXJlKFwiLi8vLi4vLi4vcHVibGljL3Byb2plY3RzLzIxNS5wbmdcIiksXG4gIC8vICAgYXZhaWxhYmxlOiBmYWxzZSxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIGlkOiAyLFxuICAvLyAgIG5hbWU6IFwiQ2xpY2tyb290XCIsXG4gIC8vICAgZGVzY3JpcHRpb246IFwiWW91ciBmcm9udC1wYWdlIG9mIHRoZSBpbnRlcm5ldC5cIixcbiAgLy8gICB0ZWNobm9sb2dpZXM6IFtcImpzXCIsIFwiUUxcIiwgXCJUU1wiLCBcImV0Y1wiXSxcbiAgLy8gICBnaXRodWI6IFwiXCIsXG4gIC8vICAgaW1hZ2U6IHJlcXVpcmUoXCIuLy8uLi8uLi9wdWJsaWMvcHJvamVjdHMvY2xpY2tyb290LnBuZ1wiKSxcbiAgLy8gICBhdmFpbGFibGU6IGZhbHNlLFxuICAvLyB9LFxuICAvL3tcbiAgLy8gICBpZDogNCxcbiAgLy8gICBuYW1lOiBcIkNhcnBvb2xpbmcgU2VydmljZVwiLFxuICAvLyAgIGRlc2NyaXB0aW9uOlxuICAvLyAgICAgXCJUTVRNIGhlbHBzIENvdmVuYW50IFVuaXZlcnNpdHkgc3R1ZGVudHMgZmluZCBmZWxsb3cgc3R1ZGVudHMgd2hvIGFyZSBoZWFkZWQgdG8gdGhlIHNhbWUgbG9jYXRpb24sIHNvIHRoZXkgY2FuIHNoYXJlIGEgcmlkZSBhbmQgc3BsaXQgdGhlIGNvc3QuXCIsXG4gIC8vICAgdGVjaG5vbG9naWVzOiBbXCJNYXRlcmlhbCBVSVwiLCBcIlJlYWN0XCIsIFwiRm9ybWlrXCJdLFxuICAvLyAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vdmljdG9yY29kZXNzL2NhcnBvb2xpbmctc2VydmljZVwiLFxuICAvLyAgIGRlbW86IFwiXCIsXG4gIC8vICAgaW1hZ2U6IHJlcXVpcmUoXCIuLy8uLi8uLi9wdWJsaWMvcHJvamVjdHMvY2FycG9vbC1uZXcud2VicFwiKSxcbiAgLy8gICBhdmFpbGFibGU6IGZhbHNlLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgaWQ6IDUsXG4gIC8vICAgbmFtZTogXCJNTFNDLm5nXCIsXG4gIC8vICAgZGVzY3JpcHRpb246XG4gIC8vICAgICBcIlRoaXMgaXMgcGxhdGZvcm0gZm9yIE1pY3Jvc29mdCBMZWFybiBTdHVkZW50IEFtYmFzc2Fkb3JzIHRvIHNob3J0ZW4gbGlua3MsIGFwcGVuZCB0aGVpciBzaGFyaW5nIElEcyBhbmQgZ2VuZXJhdGUgZXZlbnQgY2VydGlmaWNhdGVzLlwiLFxuICAvLyAgIHRlY2hub2xvZ2llczogW1wiTmV4dC5qc1wiLCBcIk5leHQgQXV0aFwiLCBcIlRhaWx3aW5kIENTU1wiXSxcbiAgLy8gICBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL21zcC1uaWdlcmlhL21sc2MubmctZnJvbnRlbmRcIixcbiAgLy8gICBkZW1vOiBcIlwiLFxuICAvLyAgIGltYWdlOiByZXF1aXJlKFwiLi8vLi4vLi4vcHVibGljL3Byb2plY3RzL21sc2MucG5nXCIpLFxuICAvLyAgIGF2YWlsYWJsZTogZmFsc2UsXG4gIC8vIH0sXG5dO1xuXG4vLyBleHBvcnQgY29uc3QgZGVzaWduUHJvamVjdHMgPSBbXG4vLyAgIHtcbi8vICAgICBpZDogMSxcbi8vICAgICBuYW1lOiBcIkhlYnJvbiBTdGF0dXAgTGFiIFdlYnNpdGVcIixcbi8vICAgICBkZXNjcmlwdGlvbjpcbi8vICAgICAgIFwiU2t5V2F0Y2ggaXMgYSBjb252ZW5pZW50IGFuZCB1c2VyLWZyaWVuZGx5IHRvb2wgdGhhdCBhbGxvd3MgeW91IHRvIHF1aWNrbHkgYW5kIGVhc2lseSBjaGVjayB0aGUgY3VycmVudC5cIixcbi8vICAgICB0ZWNobm9sb2dpZXM6IFtcIlVYIFJlc2VhcmNoXCIsIFwiVUkgRGVzaWduXCIsIFwiUHJvdG90eXBpbmdcIl0sXG4vLyAgICAgZ2l0aHViOiBcIlwiLFxuLy8gICAgIGRlbW86IFwiXCIsXG4vLyAgICAgaW1hZ2U6IFwiL19uZXh0L2ltYWdlP3VybD0lMkYuLiUyRnB1YmxpYyUyRnByb2plY3RzJTJGaHNsLndlYnAmdz0xOTIwJnE9NzVcIixcbi8vICAgICBhdmFpbGFibGU6IGZhbHNlLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6IDIsXG4vLyAgICAgbmFtZTogXCJSQUdTIFNjcnVicyBXZWJzaXRlXCIsXG4vLyAgICAgZGVzY3JpcHRpb246XG4vLyAgICAgICBcIkFuIGltYWdlIGdlbmVyYXRvciB3ZWJzaXRlIHRoYXQgYWxsb3dzIHVzZXJzIHRvIGdlbmVyYXRlLCBjb21iaW5lLCBhbmQgZG93bmxvYWQgaW1hZ2VzLlwiLFxuLy8gICAgIHRlY2hub2xvZ2llczogW1wiVVggUmVzZWFyY2hcIiwgXCJVSSBEZXNpZ25cIiwgXCJQcm90b3R5cGluZ1wiXSxcbi8vICAgICBnaXRodWI6IFwiXCIsXG4vLyAgICAgZGVtbzogXCJcIixcbi8vICAgICBpbWFnZTogXCIvX25leHQvaW1hZ2U/dXJsPSUyRi4uJTJGcHVibGljJTJGcHJvamVjdHMlMkZyYWdzLndlYnAmdz0xOTIwJnE9NzVcIixcbi8vICAgICBhdmFpbGFibGU6IGZhbHNlLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6IDMsXG4vLyAgICAgbmFtZTogXCJDcm93biBCcmFuZGluZyBBZ2VuY3kgV2Vic2l0ZVwiLFxuLy8gICAgIGRlc2NyaXB0aW9uOlxuLy8gICAgICAgXCJBIHdlYnNpdGUgdGhhdCByZWR1Y2VzIHRoZSBsZW5ndGggb2YgeW91ciBVUkwgdXNpbmcgQml0Lmx5J3MgQVBJXCIsXG4vLyAgICAgdGVjaG5vbG9naWVzOiBbXCJVWCBSZXNlYXJjaFwiLCBcIlVJIERlc2lnblwiLCBcIlByb3RvdHlwaW5nXCJdLFxuLy8gICAgIGdpdGh1YjogXCJcIixcbi8vICAgICBkZW1vOiBcIlwiLFxuLy8gICAgIGltYWdlOlxuLy8gICAgICAgXCIvX25leHQvaW1hZ2U/dXJsPSUyRi4uJTJGcHVibGljJTJGcHJvamVjdHMlMkZjcm93bi53ZWJwJnc9MTkyMCZxPTc1XCIsXG4vLyAgICAgYXZhaWxhYmxlOiBmYWxzZSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiA0LFxuLy8gICAgIG5hbWU6IFwiVGl0aSBNb2JpbGUgQXBwXCIsXG4vLyAgICAgZGVzY3JpcHRpb246XG4vLyAgICAgICBcIlRNVE0gaGVscHMgeW91IGZpbmQgcGVvcGxlIHdobyBhcmUgaGVhZGVkIHRvIHRoZSBzYW1lIGxvY2F0aW9uIGFzIHlvdSwgc28geW91IGNhbiBzaGFyZSBhIHJpZGUgYW5kIHNwbGl0IHRoZSBjb3N0IHdpdGggdGhlbS5cIixcbi8vICAgICB0ZWNobm9sb2dpZXM6IFtcIlVYIFJlc2VhcmNoXCIsIFwiVUkgRGVzaWduXCIsIFwiUHJvdG90eXBpbmdcIl0sXG4vLyAgICAgZ2l0aHViOiBcIlwiLFxuLy8gICAgIGRlbW86IFwiXCIsXG4vLyAgICAgaW1hZ2U6IFwiL19uZXh0L2ltYWdlP3VybD0lMkYuLiUyRnB1YmxpYyUyRnByb2plY3RzJTJGdGl0aS53ZWJwJnc9MTkyMCZxPTc1XCIsXG4vLyAgICAgYXZhaWxhYmxlOiBmYWxzZSxcbi8vICAgfSxcbi8vIF07XG4iXSwibmFtZXMiOlsiZGV2UHJvamVjdHMiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInRlY2hub2xvZ2llcyIsImltYWdlIiwicmVxdWlyZSIsImF2YWlsYWJsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/services-section/projectDetails.tsx\n"));

/***/ })

});