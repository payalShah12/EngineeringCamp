/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_js__ = __webpack_require__(/*! ./template.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getText_js__ = __webpack_require__(/*! ./getText.js */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getUsers_js__ = __webpack_require__(/*! ./getUsers.js */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getPosts_js__ = __webpack_require__(/*! ./getPosts.js */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_js__ = __webpack_require__(/*! ./add.js */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__add_js__);\n\r\n\r\n\r\n\r\n\r\ndocument.getElementById(\"bdy\").innerHTML=__WEBPACK_IMPORTED_MODULE_0__template_js__[\"a\" /* page */];\r\nwindow.getTextCall=()=>\r\n{\r\n    console.log(\"In text call\");\r\n     Object(__WEBPACK_IMPORTED_MODULE_1__getText_js__[\"a\" /* getText */])();\r\n}\r\nwindow.getUsersCall=()=>\r\n{\r\n    Object(__WEBPACK_IMPORTED_MODULE_2__getUsers_js__[\"a\" /* getUsers */])();\r\n}\r\nwindow.getPostsCall=()=>\r\n{\r\n    Object(__WEBPACK_IMPORTED_MODULE_3__getPosts_js__[\"a\" /* getPosts */])();\r\n}\r\n window.addPostCall=()=>\r\n{\r\n    Object(__WEBPACK_IMPORTED_MODULE_4__add_js__[\"addPost\"])();\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2VudHJ5LmpzPzNmMWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwYWdlfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcclxuaW1wb3J0IHtnZXRUZXh0fSBmcm9tICcuL2dldFRleHQuanMnO1xyXG5pbXBvcnQge2dldFVzZXJzfSBmcm9tICcuL2dldFVzZXJzLmpzJztcclxuaW1wb3J0IHtnZXRQb3N0c30gZnJvbSAnLi9nZXRQb3N0cy5qcyc7XHJcbmltcG9ydCB7YWRkUG9zdH0gZnJvbSAnLi9hZGQuanMnO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJkeVwiKS5pbm5lckhUTUw9cGFnZTtcclxud2luZG93LmdldFRleHRDYWxsPSgpPT5cclxue1xyXG4gICAgY29uc29sZS5sb2coXCJJbiB0ZXh0IGNhbGxcIik7XHJcbiAgICAgZ2V0VGV4dCgpO1xyXG59XHJcbndpbmRvdy5nZXRVc2Vyc0NhbGw9KCk9PlxyXG57XHJcbiAgICBnZXRVc2VycygpO1xyXG59XHJcbndpbmRvdy5nZXRQb3N0c0NhbGw9KCk9PlxyXG57XHJcbiAgICBnZXRQb3N0cygpO1xyXG59XHJcbiB3aW5kb3cuYWRkUG9zdENhbGw9KCk9PlxyXG57XHJcbiAgICBhZGRQb3N0KCk7XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2VudHJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: page */
/*! exports used: page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const page=`\r\n   <p><div class=\"d-flex\"><button id=\"getText\" class=\"btn btn-warning mr-4\" onclick=\"getTextCall()\"> GET TEXT</button>\r\n    <button class=\"btn btn-primary mr-4\" id=\"getUsers\" onclick=\"getUsersCall()\"> GET JSON </button>\r\n    <button class=\"btn btn-success mr-4\" id=\"getPosts\" onclick=\"getPostsCall()\"> GET API DATA </button>\r\n    </div><hr>\r\n    <div id=\"output\"></div>\r\n<form id=\"addpostF\">\r\n    <div class=\"form-group\">\r\n        <input type=\"text\" class=\"form-control\" id=\"ID\" placeholder=\"ID\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <textarea id=\"Title\" class=\"form-control\" placeholder=\"Title\"></textarea>\r\n    </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"date\" class=\"form-control\" id=\"DueDate\">\r\n    </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"form-control\" id=\"Completed\" placeholder=\"Completed\">\r\n    </div>\r\n    <input type=\"button\" class=\"btn btn-secondary mr-4\" value=\"Submit\" id=\"addpost\" onclick=\"addPostCall()\">\r\n</form></p>`;\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = page;\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3RlbXBsYXRlLmpzP2QyMWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHBhZ2U9YFxyXG4gICA8cD48ZGl2IGNsYXNzPVwiZC1mbGV4XCI+PGJ1dHRvbiBpZD1cImdldFRleHRcIiBjbGFzcz1cImJ0biBidG4td2FybmluZyBtci00XCIgb25jbGljaz1cImdldFRleHRDYWxsKClcIj4gR0VUIFRFWFQ8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbXItNFwiIGlkPVwiZ2V0VXNlcnNcIiBvbmNsaWNrPVwiZ2V0VXNlcnNDYWxsKClcIj4gR0VUIEpTT04gPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIG1yLTRcIiBpZD1cImdldFBvc3RzXCIgb25jbGljaz1cImdldFBvc3RzQ2FsbCgpXCI+IEdFVCBBUEkgREFUQSA8L2J1dHRvbj5cclxuICAgIDwvZGl2Pjxocj5cclxuICAgIDxkaXYgaWQ9XCJvdXRwdXRcIj48L2Rpdj5cclxuPGZvcm0gaWQ9XCJhZGRwb3N0RlwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiSURcIiBwbGFjZWhvbGRlcj1cIklEXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPHRleHRhcmVhIGlkPVwiVGl0bGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIj48L3RleHRhcmVhPlxyXG4gICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIkR1ZURhdGVcIj5cclxuICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJDb21wbGV0ZWRcIiBwbGFjZWhvbGRlcj1cIkNvbXBsZXRlZFwiPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgbXItNFwiIHZhbHVlPVwiU3VibWl0XCIgaWQ9XCJhZGRwb3N0XCIgb25jbGljaz1cImFkZFBvc3RDYWxsKClcIj5cclxuPC9mb3JtPjwvcD5gO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3RlbXBsYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!********************!*\
  !*** ./getText.js ***!
  \********************/
/*! exports provided: getText */
/*! exports used: getText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = getText;\n function getText()\r\n        {\r\n            fetch('sample.txt')\r\n            .then((res)=>res.text())\r\n            .then((data) => {\r\n                document.getElementById('output').innerHTML=data;\r\n            \r\n            })\r\n            .catch((err) => console.log(err))\r\n        }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2dldFRleHQuanM/NTYzZCJdLCJzb3VyY2VzQ29udGVudCI6WyIgZXhwb3J0IGZ1bmN0aW9uIGdldFRleHQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZmV0Y2goJ3NhbXBsZS50eHQnKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKT0+cmVzLnRleHQoKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRwdXQnKS5pbm5lckhUTUw9ZGF0YTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgICAgIH1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2dldFRleHQuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*********************!*\
  !*** ./getUsers.js ***!
  \*********************/
/*! exports provided: getUsers */
/*! exports used: getUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = getUsers;\nfunction getUsers()\r\n        {\r\n            fetch('user.json')\r\n            .then((res) => res.json())\r\n            .then((data) => {\r\n                let output = '<h2 class=\"mb-4\"> Users </h2>';\r\n                data.forEach(function(user) {\r\n                    output+=`\r\n                    <ul class=\"list-group mb-3\">\r\n                    <li class=\"list-group-item\"> ID : ${user.id}</li>\r\n                    <li class=\"list-group-item\"> Name : ${user.name}</li>\r\n                    <li class=\"list-group-item\" > Age : ${user.age}</li>\r\n                    <li class=\"list-group-item\"> Email ID : ${user.email}</li>\r\n                    </ul>`;\r\n                }, this);\r\n                document.getElementById('output').innerHTML=output;\r\n            })\r\n        }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2dldFVzZXJzLmpzPzM3MjYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZldGNoKCd1c2VyLmpzb24nKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG91dHB1dCA9ICc8aDIgY2xhc3M9XCJtYi00XCI+IFVzZXJzIDwvaDI+JztcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbih1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0Kz1gXHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+IElEIDogJHt1c2VyLmlkfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+IE5hbWUgOiAke3VzZXIubmFtZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiID4gQWdlIDogJHt1c2VyLmFnZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPiBFbWFpbCBJRCA6ICR7dXNlci5lbWFpbH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+YDtcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dCcpLmlubmVySFRNTD1vdXRwdXQ7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZ2V0VXNlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*********************!*\
  !*** ./getPosts.js ***!
  \*********************/
/*! exports provided: getPosts */
/*! exports used: getPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = getPosts;\n function getPosts()\r\n        {\r\n            fetch(\"https://fakerestapi.azurewebsites.net/api/Activities\")\r\n            .then((res) => res.json())\r\n            .then((data) => {\r\n                let output = '<h2 class=\"mb-4\"> Posts from the Resource File </h2>';\r\n                data.forEach(function(post) {\r\n                    output+=`\r\n                   <div class=\"card card-body mb-3\"><h3>${post.Title}</h3>\r\n                   <p> ID : ${post.ID}</p>\r\n                   <p> Due Date : ${post.DueDate}</p>\r\n                   <p> Complete Status : ${post.Completed}</p>\r\n                   </div>`;\r\n                });\r\n                document.getElementById('output').innerHTML=output;\r\n            })\r\n        }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2dldFBvc3RzLmpzP2U4MjAiXSwic291cmNlc0NvbnRlbnQiOlsiIGV4cG9ydCBmdW5jdGlvbiBnZXRQb3N0cygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vZmFrZXJlc3RhcGkuYXp1cmV3ZWJzaXRlcy5uZXQvYXBpL0FjdGl2aXRpZXNcIilcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBvdXRwdXQgPSAnPGgyIGNsYXNzPVwibWItNFwiPiBQb3N0cyBmcm9tIHRoZSBSZXNvdXJjZSBGaWxlIDwvaDI+JztcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbihwb3N0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0Kz1gXHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWJvZHkgbWItM1wiPjxoMz4ke3Bvc3QuVGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgIDxwPiBJRCA6ICR7cG9zdC5JRH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICA8cD4gRHVlIERhdGUgOiAke3Bvc3QuRHVlRGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICA8cD4gQ29tcGxldGUgU3RhdHVzIDogJHtwb3N0LkNvbXBsZXRlZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0JykuaW5uZXJIVE1MPW91dHB1dDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9nZXRQb3N0cy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!****************!*\
  !*** ./add.js ***!
  \****************/
/*! dynamic exports provided */
/*! exports used: addPost */
/***/ (function(module, exports) {

eval("function addPost(e)\r\n        {\r\n            e.preventDefault(); //Stop it from actually submitting to a file;\r\n            let Title=document.getElementById('Title').value;\r\n            let ID=document.getElementById('ID').value;\r\n            let DueDate=document.getElementById('DueDate').value;\r\n            let Completed=document.getElementById('Completed').value;\r\n        \r\n         fetch(\"https://fakerestapi.azurewebsites.net/api/Activities\",{\r\n             method : 'POST',\r\n             headers : {\r\n                 'Accept' : 'application/json, text/plain, */*',\r\n                 'Content-type' : 'application/json'\r\n             },\r\n             body : JSON.stringify({Title:Title, ID:ID, DueDate : DueDate, Completed: Completed})\r\n         })\r\n            .then((res) => res.json())\r\n            .then((data) => console.log(data))\r\n        }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FkZC5qcz9jMDc2Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFkZFBvc3QoZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy9TdG9wIGl0IGZyb20gYWN0dWFsbHkgc3VibWl0dGluZyB0byBhIGZpbGU7XHJcbiAgICAgICAgICAgIGxldCBUaXRsZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnVGl0bGUnKS52YWx1ZTtcclxuICAgICAgICAgICAgbGV0IElEPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdJRCcpLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgRHVlRGF0ZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRHVlRGF0ZScpLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgQ29tcGxldGVkPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDb21wbGV0ZWQnKS52YWx1ZTtcclxuICAgICAgICBcclxuICAgICAgICAgZmV0Y2goXCJodHRwczovL2Zha2VyZXN0YXBpLmF6dXJld2Vic2l0ZXMubmV0L2FwaS9BY3Rpdml0aWVzXCIse1xyXG4gICAgICAgICAgICAgbWV0aG9kIDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgaGVhZGVycyA6IHtcclxuICAgICAgICAgICAgICAgICAnQWNjZXB0JyA6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonLFxyXG4gICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgYm9keSA6IEpTT04uc3RyaW5naWZ5KHtUaXRsZTpUaXRsZSwgSUQ6SUQsIER1ZURhdGUgOiBEdWVEYXRlLCBDb21wbGV0ZWQ6IENvbXBsZXRlZH0pXHJcbiAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcclxuICAgICAgICB9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hZGQuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ })
/******/ ]);