/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/Cursor.js":
/*!********************************!*\
  !*** ./resources/js/Cursor.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cursor: () => (/* binding */ Cursor)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Cursor = /*#__PURE__*/function () {\n  function Cursor() {\n    var _this = this;\n    _classCallCheck(this, Cursor);\n    this.cursor = document.querySelector('.cursor');\n    this.projectLinks = document.querySelectorAll('.projetcard__link');\n    this.projectLinks.forEach(function (link) {\n      _this.removePointer(link);\n    });\n    this.handleMouseMove();\n    this.AddCursorStyle();\n  }\n  return _createClass(Cursor, [{\n    key: \"handleMouseMove\",\n    value: function handleMouseMove() {\n      var _this2 = this;\n      document.addEventListener('mousemove', function (e) {\n        _this2.cursor.style.top = e.pageY + 'px';\n        _this2.cursor.style.left = e.pageX + 'px';\n      });\n    }\n  }, {\n    key: \"AddCursorStyle\",\n    value: function AddCursorStyle() {\n      var _this3 = this;\n      this.projectLinks.forEach(function (link) {\n        link.addEventListener('mouseover', function () {\n          _this3.cursor.classList.add('link');\n        });\n        link.addEventListener('mouseleave', function () {\n          _this3.cursor.classList.remove('link');\n        });\n      });\n    }\n  }, {\n    key: \"removePointer\",\n    value: function removePointer(element) {\n      element.classList.add('no-cursor');\n    }\n  }]);\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvQ3Vyc29yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxNQUFNO0VBRWYsU0FBQUEsT0FBQSxFQUFjO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFGLE1BQUE7SUFDVixJQUFJLENBQUNHLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQy9DLElBQUksQ0FBQ0MsWUFBWSxHQUFHRixRQUFRLENBQUNHLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO0lBRWxFLElBQUksQ0FBQ0QsWUFBWSxDQUFDRSxPQUFPLENBQUMsVUFBQ0MsSUFBSSxFQUFLO01BQ2hDUixLQUFJLENBQUNTLGFBQWEsQ0FBQ0QsSUFBSSxDQUFDO0lBQzVCLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ0UsZUFBZSxDQUFDLENBQUM7SUFDdEIsSUFBSSxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUN6QjtFQUFDLE9BQUFDLFlBQUEsQ0FBQWIsTUFBQTtJQUFBYyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBSixnQkFBQSxFQUFrQjtNQUFBLElBQUFLLE1BQUE7TUFDZFosUUFBUSxDQUFDYSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsVUFBQ0MsQ0FBQyxFQUFLO1FBQzFDRixNQUFJLENBQUNiLE1BQU0sQ0FBQ2dCLEtBQUssQ0FBQ0MsR0FBRyxHQUFHRixDQUFDLENBQUNHLEtBQUssR0FBRyxJQUFJO1FBQ3RDTCxNQUFJLENBQUNiLE1BQU0sQ0FBQ2dCLEtBQUssQ0FBQ0csSUFBSSxHQUFHSixDQUFDLENBQUNLLEtBQUssR0FBRyxJQUFJO01BQzNDLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQVQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUgsZUFBQSxFQUFpQjtNQUFBLElBQUFZLE1BQUE7TUFDYixJQUFJLENBQUNsQixZQUFZLENBQUNFLE9BQU8sQ0FBQyxVQUFDQyxJQUFJLEVBQUs7UUFDaENBLElBQUksQ0FBQ1EsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFlBQU07VUFDckNPLE1BQUksQ0FBQ3JCLE1BQU0sQ0FBQ3NCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUNyQyxDQUFDLENBQUM7UUFFRmpCLElBQUksQ0FBQ1EsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFlBQU07VUFDdENPLE1BQUksQ0FBQ3JCLE1BQU0sQ0FBQ3NCLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN4QyxDQUFDLENBQUM7TUFDTixDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUFiLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFMLGNBQWNrQixPQUFPLEVBQUU7TUFDbkJBLE9BQU8sQ0FBQ0gsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBQ3RDO0VBQUM7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xvaWNkZWxhbm9lLXBvcnRmb2xpby8uL3Jlc291cmNlcy9qcy9DdXJzb3IuanM/MDI2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ3Vyc29yIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJzb3InKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamV0Y2FyZF9fbGluaycpO1xuXG4gICAgICAgIHRoaXMucHJvamVjdExpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlUG9pbnRlcihsaW5rKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVNb3VzZU1vdmUoKTtcbiAgICAgICAgdGhpcy5BZGRDdXJzb3JTdHlsZSgpO1xuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlTW92ZSgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yLnN0eWxlLnRvcCA9IGUucGFnZVkgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5jdXJzb3Iuc3R5bGUubGVmdCA9IGUucGFnZVggKyAncHgnO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIEFkZEN1cnNvclN0eWxlKCkge1xuICAgICAgICB0aGlzLnByb2plY3RMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnNvci5jbGFzc0xpc3QuYWRkKCdsaW5rJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5yZW1vdmUoJ2xpbmsnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbW92ZVBvaW50ZXIoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vLWN1cnNvcicpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiQ3Vyc29yIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJjdXJzb3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9qZWN0TGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImxpbmsiLCJyZW1vdmVQb2ludGVyIiwiaGFuZGxlTW91c2VNb3ZlIiwiQWRkQ3Vyc29yU3R5bGUiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzMiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic3R5bGUiLCJ0b3AiLCJwYWdlWSIsImxlZnQiLCJwYWdlWCIsIl90aGlzMyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/Cursor.js\n");

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Cursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cursor */ \"./resources/js/Cursor.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n// import {observers} from \"./observers\";\n\n// FOR PARALLAX EFFECT\n// const heroContainer = document.querySelector('.hero__container');\n// const imgElements = document.querySelectorAll('.img__placeholder');\n// const block = document.querySelector('.bg');\n//\n// heroContainer.style.position = 'relative';\n// block.style.width = '60%';\n// block.style.borderRadius = '50px';\n// imgElements.forEach((element) => {\n//     element.style.position = 'relative';\n// });\n// window.addEventListener('scroll', () => {\n//     let {scrollY} = window;\n//\n//     block.style.width = 60 + (0.1 * scrollY) + '%';\n//     block.style.borderRadius = 50 + (-0.1 * scrollY) + 'px';\n//\n//     if (parseInt(block.style.width) >= 100) {\n//         block.style.width = '100%';\n//         block.style.borderRadius = '0px'\n//     }\n//\n//     imgElements.forEach((element) => {\n//         element.style.top = -0.1 * scrollY + 'px';\n//     });\n//\n//     heroContainer.style.top = 0.1 * scrollY + 'px';\n// });\n\n// observers.init();\n\n\nvar Main = /*#__PURE__*/_createClass(function Main() {\n  _classCallCheck(this, Main);\n  this.cursor = new _Cursor__WEBPACK_IMPORTED_MODULE_0__.Cursor();\n});\nwindow.addEventListener('load', function () {\n  window.main = new Main();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVnQztBQUFBLElBRTFCQyxJQUFJLGdCQUFBQyxZQUFBLENBRU4sU0FBQUQsS0FBQSxFQUFjO0VBQUFFLGVBQUEsT0FBQUYsSUFBQTtFQUNWLElBQUksQ0FBQ0csTUFBTSxHQUFHLElBQUlKLDJDQUFNLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBR0xLLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQU07RUFDbENELE1BQU0sQ0FBQ0UsSUFBSSxHQUFHLElBQUlOLElBQUksQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xvaWNkZWxhbm9lLXBvcnRmb2xpby8uL3Jlc291cmNlcy9qcy9tYWluLmpzP2ZkYWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHtvYnNlcnZlcnN9IGZyb20gXCIuL29ic2VydmVyc1wiO1xuXG4vLyBGT1IgUEFSQUxMQVggRUZGRUNUXG4vLyBjb25zdCBoZXJvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX2NvbnRhaW5lcicpO1xuLy8gY29uc3QgaW1nRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW1nX19wbGFjZWhvbGRlcicpO1xuLy8gY29uc3QgYmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmcnKTtcbi8vXG4vLyBoZXJvQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbi8vIGJsb2NrLnN0eWxlLndpZHRoID0gJzYwJSc7XG4vLyBibG9jay5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNTBweCc7XG4vLyBpbWdFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4vLyAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4vLyB9KTtcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4vLyAgICAgbGV0IHtzY3JvbGxZfSA9IHdpbmRvdztcbi8vXG4vLyAgICAgYmxvY2suc3R5bGUud2lkdGggPSA2MCArICgwLjEgKiBzY3JvbGxZKSArICclJztcbi8vICAgICBibG9jay5zdHlsZS5ib3JkZXJSYWRpdXMgPSA1MCArICgtMC4xICogc2Nyb2xsWSkgKyAncHgnO1xuLy9cbi8vICAgICBpZiAocGFyc2VJbnQoYmxvY2suc3R5bGUud2lkdGgpID49IDEwMCkge1xuLy8gICAgICAgICBibG9jay5zdHlsZS53aWR0aCA9ICcxMDAlJztcbi8vICAgICAgICAgYmxvY2suc3R5bGUuYm9yZGVyUmFkaXVzID0gJzBweCdcbi8vICAgICB9XG4vL1xuLy8gICAgIGltZ0VsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbi8vICAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSAtMC4xICogc2Nyb2xsWSArICdweCc7XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGhlcm9Db250YWluZXIuc3R5bGUudG9wID0gMC4xICogc2Nyb2xsWSArICdweCc7XG4vLyB9KTtcblxuLy8gb2JzZXJ2ZXJzLmluaXQoKTtcblxuaW1wb3J0IHtDdXJzb3J9IGZyb20gXCIuL0N1cnNvclwiO1xuXG5jbGFzcyBNYWluIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmN1cnNvciA9IG5ldyBDdXJzb3IoKTtcbiAgICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIHdpbmRvdy5tYWluID0gbmV3IE1haW4oKTtcbn0pOyJdLCJuYW1lcyI6WyJDdXJzb3IiLCJNYWluIiwiX2NyZWF0ZUNsYXNzIiwiX2NsYXNzQ2FsbENoZWNrIiwiY3Vyc29yIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/main.js\n");

/***/ }),

/***/ "./resources/scss/main.scss":
/*!**********************************!*\
  !*** ./resources/scss/main.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc2Nzcy9tYWluLnNjc3MiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9pY2RlbGFub2UtcG9ydGZvbGlvLy4vcmVzb3VyY2VzL3Njc3MvbWFpbi5zY3NzPzVhZGMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkloicdelanoe_portfolio"] = self["webpackChunkloicdelanoe_portfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./resources/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./resources/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;