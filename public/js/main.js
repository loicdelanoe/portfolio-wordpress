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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cursor: () => (/* binding */ Cursor)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Cursor = /*#__PURE__*/function () {\n  function Cursor() {\n    var _this = this;\n    _classCallCheck(this, Cursor);\n    document.body.insertAdjacentHTML('afterbegin', \"<div class=\\\"cursor\\\"></div>\");\n    this.cursor = document.querySelector('.cursor');\n    this.projectLinks = document.querySelectorAll('.projetcard__link');\n    this.projectLinks.forEach(function (link) {\n      _this.removePointer(link);\n    });\n    this.handleMouseMove();\n    this.AddCursorStyle();\n  }\n  return _createClass(Cursor, [{\n    key: \"handleMouseMove\",\n    value: function handleMouseMove() {\n      var _this2 = this;\n      document.addEventListener('mousemove', function (e) {\n        _this2.cursor.style.top = e.pageY + 'px';\n        _this2.cursor.style.left = e.pageX + 'px';\n      });\n    }\n  }, {\n    key: \"AddCursorStyle\",\n    value: function AddCursorStyle() {\n      var _this3 = this;\n      this.projectLinks.forEach(function (link) {\n        link.addEventListener('mouseover', function () {\n          _this3.cursor.classList.add('link');\n        });\n        link.addEventListener('mouseleave', function () {\n          _this3.cursor.classList.remove('link');\n        });\n      });\n    }\n  }, {\n    key: \"removePointer\",\n    value: function removePointer(element) {\n      element.classList.add('no-cursor');\n    }\n  }]);\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvQ3Vyc29yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxNQUFNO0VBRWYsU0FBQUEsT0FBQSxFQUFjO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFGLE1BQUE7SUFDVkcsUUFBUSxDQUFDQyxJQUFJLENBQUNDLGtCQUFrQixDQUFDLFlBQVksZ0NBQThCLENBQUM7SUFFNUUsSUFBSSxDQUFDQyxNQUFNLEdBQUdILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUMvQyxJQUFJLENBQUNDLFlBQVksR0FBR0wsUUFBUSxDQUFDTSxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztJQUdsRSxJQUFJLENBQUNELFlBQVksQ0FBQ0UsT0FBTyxDQUFDLFVBQUNDLElBQUksRUFBSztNQUNoQ1YsS0FBSSxDQUFDVyxhQUFhLENBQUNELElBQUksQ0FBQztJQUM1QixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNFLGVBQWUsQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFDekI7RUFBQyxPQUFBQyxZQUFBLENBQUFmLE1BQUE7SUFBQWdCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFKLGdCQUFBLEVBQWtCO01BQUEsSUFBQUssTUFBQTtNQUNkZixRQUFRLENBQUNnQixnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsVUFBQ0MsQ0FBQyxFQUFLO1FBQzFDRixNQUFJLENBQUNaLE1BQU0sQ0FBQ2UsS0FBSyxDQUFDQyxHQUFHLEdBQUdGLENBQUMsQ0FBQ0csS0FBSyxHQUFHLElBQUk7UUFDdENMLE1BQUksQ0FBQ1osTUFBTSxDQUFDZSxLQUFLLENBQUNHLElBQUksR0FBR0osQ0FBQyxDQUFDSyxLQUFLLEdBQUcsSUFBSTtNQUMzQyxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUFULEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFILGVBQUEsRUFBaUI7TUFBQSxJQUFBWSxNQUFBO01BQ2IsSUFBSSxDQUFDbEIsWUFBWSxDQUFDRSxPQUFPLENBQUMsVUFBQ0MsSUFBSSxFQUFLO1FBQ2hDQSxJQUFJLENBQUNRLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxZQUFNO1VBQ3JDTyxNQUFJLENBQUNwQixNQUFNLENBQUNxQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDckMsQ0FBQyxDQUFDO1FBRUZqQixJQUFJLENBQUNRLGdCQUFnQixDQUFDLFlBQVksRUFBRSxZQUFNO1VBQ3RDTyxNQUFJLENBQUNwQixNQUFNLENBQUNxQixTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDeEMsQ0FBQyxDQUFDO01BQ04sQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBYixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBTCxjQUFja0IsT0FBTyxFQUFFO01BQ25CQSxPQUFPLENBQUNILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztJQUN0QztFQUFDO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZWYtd2Vic2l0ZS8uL3Jlc291cmNlcy9qcy9DdXJzb3IuanM/MDI2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ3Vyc29yIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGA8ZGl2IGNsYXNzPVwiY3Vyc29yXCI+PC9kaXY+YCk7XG5cbiAgICAgICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3Vyc29yJyk7XG4gICAgICAgIHRoaXMucHJvamVjdExpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2pldGNhcmRfX2xpbmsnKTtcblxuXG4gICAgICAgIHRoaXMucHJvamVjdExpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlUG9pbnRlcihsaW5rKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVNb3VzZU1vdmUoKTtcbiAgICAgICAgdGhpcy5BZGRDdXJzb3JTdHlsZSgpO1xuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlTW92ZSgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yLnN0eWxlLnRvcCA9IGUucGFnZVkgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5jdXJzb3Iuc3R5bGUubGVmdCA9IGUucGFnZVggKyAncHgnO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIEFkZEN1cnNvclN0eWxlKCkge1xuICAgICAgICB0aGlzLnByb2plY3RMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnNvci5jbGFzc0xpc3QuYWRkKCdsaW5rJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5yZW1vdmUoJ2xpbmsnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbW92ZVBvaW50ZXIoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vLWN1cnNvcicpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiQ3Vyc29yIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJkb2N1bWVudCIsImJvZHkiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJjdXJzb3IiLCJxdWVyeVNlbGVjdG9yIiwicHJvamVjdExpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaW5rIiwicmVtb3ZlUG9pbnRlciIsImhhbmRsZU1vdXNlTW92ZSIsIkFkZEN1cnNvclN0eWxlIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJfdGhpczIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInN0eWxlIiwidG9wIiwicGFnZVkiLCJsZWZ0IiwicGFnZVgiLCJfdGhpczMiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJlbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/Cursor.js\n");

/***/ }),

/***/ "./resources/js/Observer.js":
/*!**********************************!*\
  !*** ./resources/js/Observer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Observer: () => (/* binding */ Observer)\n/* harmony export */ });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./resources/js/settings.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar Observer = /*#__PURE__*/function () {\n  function Observer() {\n    var _this = this;\n    _classCallCheck(this, Observer);\n    _defineProperty(this, \"showUpAnimation\", function (entries) {\n      entries.forEach(function (entry) {\n        if (entry.isIntersecting) {\n          setTimeout(function () {\n            entry.target.classList.add(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.showUpClass);\n            entry.target.classList.remove(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.NoOpacityClass);\n          }, _this.delay);\n          _this.delay += 100;\n        }\n      });\n      _this.delay = 0;\n    });\n    _defineProperty(this, \"slideLeftAnimation\", function (entries) {\n      entries.forEach(function (entry) {\n        if (entry.isIntersecting) {\n          setTimeout(function () {\n            entry.target.classList.add(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.slideLeftClass);\n            entry.target.classList.remove(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.NoOpacityClass);\n          }, _this.delay);\n          _this.delay += 100;\n        }\n      });\n      _this.delay = 0;\n    });\n    _defineProperty(this, \"slideRightAnimation\", function (entries) {\n      entries.forEach(function (entry) {\n        if (entry.isIntersecting) {\n          setTimeout(function () {\n            entry.target.classList.add(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.slideRightClass);\n            entry.target.classList.remove(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.NoOpacityClass);\n          }, _this.delay);\n          _this.delay += 100;\n        }\n      });\n      _this.delay = 0;\n    });\n    this.showUpElements = document.querySelectorAll(\"[data-animation=\\\"\".concat(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.showUpClass, \"\\\"]\"));\n    this.slideLeftElements = document.querySelectorAll(\"[data-animation=\\\"\".concat(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.slideLeftClass, \"\\\"]\"));\n    this.slideRightElements = document.querySelectorAll(\"[data-animation=\\\"\".concat(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.slideLeftClass, \"\\\"]:nth-child(even)\"));\n    this.slideLeftElements.forEach(function (slideLeftElement) {\n      slideLeftElement.classList.add(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.NoOpacityClass);\n    });\n    this.slideRightElements.forEach(function (slideRightElement) {\n      slideRightElement.classList.add(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.NoOpacityClass);\n    });\n    this.showUpElements.forEach(function (showUpElement) {\n      showUpElement.classList.add(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.NoOpacityClass);\n    });\n    this.showUpObserver = new IntersectionObserver(this.showUpAnimation);\n    this.slideLeftObserver = new IntersectionObserver(this.slideLeftAnimation);\n    this.slideRightObserver = new IntersectionObserver(this.slideRightAnimation);\n    this.observeAction();\n    this.delay = 0;\n  }\n  return _createClass(Observer, [{\n    key: \"observeAction\",\n    value: function observeAction() {\n      var _this2 = this;\n      this.showUpElements.forEach(function (element) {\n        _this2.showUpObserver.observe(element);\n      });\n      this.slideLeftElements.forEach(function (element) {\n        _this2.slideLeftObserver.observe(element);\n      });\n      this.slideRightElements.forEach(function (element) {\n        _this2.slideRightObserver.observe(element);\n      });\n    }\n  }]);\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDO01BRUYsSUFBSSxDQUFDaEIsa0JBQWtCLENBQUNsQixPQUFPLENBQUMsVUFBQ2tDLE9BQU8sRUFBSztRQUN6Q0QsTUFBSSxDQUFDTixrQkFBa0IsQ0FBQ1EsT0FBTyxDQUFDRCxPQUFPLENBQUM7TUFDNUMsQ0FBQyxDQUFDO0lBQ047RUFBQztBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VmLXdlYnNpdGUvLi9yZXNvdXJjZXMvanMvT2JzZXJ2ZXIuanM/ZmM1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tICcuL3NldHRpbmdzJztcblxuZXhwb3J0IGNsYXNzIE9ic2VydmVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNob3dVcEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtYW5pbWF0aW9uPVwiJHtzZXR0aW5ncy5zaG93VXBDbGFzc31cIl1gKTtcbiAgICAgICAgdGhpcy5zbGlkZUxlZnRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWFuaW1hdGlvbj1cIiR7c2V0dGluZ3Muc2xpZGVMZWZ0Q2xhc3N9XCJdYClcbiAgICAgICAgdGhpcy5zbGlkZVJpZ2h0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1hbmltYXRpb249XCIke3NldHRpbmdzLnNsaWRlTGVmdENsYXNzfVwiXTpudGgtY2hpbGQoZXZlbilgKVxuXG4gICAgICAgIHRoaXMuc2xpZGVMZWZ0RWxlbWVudHMuZm9yRWFjaCgoc2xpZGVMZWZ0RWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgc2xpZGVMZWZ0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLk5vT3BhY2l0eUNsYXNzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zbGlkZVJpZ2h0RWxlbWVudHMuZm9yRWFjaCgoc2xpZGVSaWdodEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHNsaWRlUmlnaHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MuTm9PcGFjaXR5Q2xhc3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNob3dVcEVsZW1lbnRzLmZvckVhY2goKHNob3dVcEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHNob3dVcEVsZW1lbnQuY2xhc3NMaXN0LmFkZChzZXR0aW5ncy5Ob09wYWNpdHlDbGFzcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2hvd1VwT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5zaG93VXBBbmltYXRpb24pO1xuICAgICAgICB0aGlzLnNsaWRlTGVmdE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKHRoaXMuc2xpZGVMZWZ0QW5pbWF0aW9uKTtcbiAgICAgICAgdGhpcy5zbGlkZVJpZ2h0T2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5zbGlkZVJpZ2h0QW5pbWF0aW9uKTtcblxuICAgICAgICB0aGlzLm9ic2VydmVBY3Rpb24oKTtcbiAgICAgICAgdGhpcy5kZWxheSA9IDA7XG4gICAgfVxuXG4gICAgc2hvd1VwQW5pbWF0aW9uID0gKGVudHJpZXMpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLnNob3dVcENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoc2V0dGluZ3MuTm9PcGFjaXR5Q2xhc3MpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMuZGVsYXkpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxheSArPSAxMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZGVsYXkgPSAwO1xuICAgIH1cblxuICAgIHNsaWRlTGVmdEFuaW1hdGlvbiA9IChlbnRyaWVzKSA9PiB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChzZXR0aW5ncy5zbGlkZUxlZnRDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLk5vT3BhY2l0eUNsYXNzKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLmRlbGF5KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZGVsYXkgKz0gMTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRlbGF5ID0gMDtcbiAgICB9XG5cbiAgICBzbGlkZVJpZ2h0QW5pbWF0aW9uID0gKGVudHJpZXMpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLnNsaWRlUmlnaHRDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLk5vT3BhY2l0eUNsYXNzKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLmRlbGF5KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZGVsYXkgKz0gMTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRlbGF5ID0gMDtcbiAgICB9XG5cbiAgICBvYnNlcnZlQWN0aW9uKCkge1xuICAgICAgICB0aGlzLnNob3dVcEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1VwT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zbGlkZUxlZnRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNsaWRlTGVmdE9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2xpZGVSaWdodEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2xpZGVSaWdodE9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJzZXR0aW5ncyIsIk9ic2VydmVyIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfZGVmaW5lUHJvcGVydHkiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJzZXRUaW1lb3V0IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwic2hvd1VwQ2xhc3MiLCJyZW1vdmUiLCJOb09wYWNpdHlDbGFzcyIsImRlbGF5Iiwic2xpZGVMZWZ0Q2xhc3MiLCJzbGlkZVJpZ2h0Q2xhc3MiLCJzaG93VXBFbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNvbmNhdCIsInNsaWRlTGVmdEVsZW1lbnRzIiwic2xpZGVSaWdodEVsZW1lbnRzIiwic2xpZGVMZWZ0RWxlbWVudCIsInNsaWRlUmlnaHRFbGVtZW50Iiwic2hvd1VwRWxlbWVudCIsInNob3dVcE9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJzaG93VXBBbmltYXRpb24iLCJzbGlkZUxlZnRPYnNlcnZlciIsInNsaWRlTGVmdEFuaW1hdGlvbiIsInNsaWRlUmlnaHRPYnNlcnZlciIsInNsaWRlUmlnaHRBbmltYXRpb24iLCJvYnNlcnZlQWN0aW9uIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJfdGhpczIiLCJlbGVtZW50Iiwib2JzZXJ2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/Observer.js\n");

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Cursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cursor */ \"./resources/js/Cursor.js\");\n/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observer */ \"./resources/js/Observer.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\n\n\nvar Main = /*#__PURE__*/_createClass(function Main() {\n  _classCallCheck(this, Main);\n  this.observer = new _Observer__WEBPACK_IMPORTED_MODULE_1__.Observer();\n  this.cursor = new _Cursor__WEBPACK_IMPORTED_MODULE_0__.Cursor();\n});\nwindow.addEventListener('load', function () {\n  window.main = new Main();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFDSTtBQUFBLElBRTlCRSxJQUFJLGdCQUFBQyxZQUFBLENBRU4sU0FBQUQsS0FBQSxFQUFjO0VBQUFFLGVBQUEsT0FBQUYsSUFBQTtFQUNWLElBQUksQ0FBQ0csUUFBUSxHQUFHLElBQUlKLCtDQUFRLENBQUMsQ0FBQztFQUM5QixJQUFJLENBQUNLLE1BQU0sR0FBRyxJQUFJTiwyQ0FBTSxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUdMTyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFNO0VBQ2xDRCxNQUFNLENBQUNFLElBQUksR0FBRyxJQUFJUCxJQUFJLENBQUMsQ0FBQztBQUM1QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZWYtd2Vic2l0ZS8uL3Jlc291cmNlcy9qcy9tYWluLmpzP2ZkYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDdXJzb3J9IGZyb20gXCIuL0N1cnNvclwiO1xuaW1wb3J0IHtPYnNlcnZlcn0gZnJvbSBcIi4vT2JzZXJ2ZXJcIjtcblxuY2xhc3MgTWFpbiB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBPYnNlcnZlcigpO1xuICAgICAgICB0aGlzLmN1cnNvciA9IG5ldyBDdXJzb3IoKTtcbiAgICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIHdpbmRvdy5tYWluID0gbmV3IE1haW4oKTtcbn0pO1xuXG4iXSwibmFtZXMiOlsiQ3Vyc29yIiwiT2JzZXJ2ZXIiLCJNYWluIiwiX2NyZWF0ZUNsYXNzIiwiX2NsYXNzQ2FsbENoZWNrIiwib2JzZXJ2ZXIiLCJjdXJzb3IiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/main.js\n");

/***/ }),

/***/ "./resources/js/settings.js":
/*!**********************************!*\
  !*** ./resources/js/settings.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   settings: () => (/* binding */ settings)\n/* harmony export */ });\nvar settings = {\n  showUpClass: 'show-up',\n  NoOpacityClass: 'no-opacity',\n  slideLeftClass: \"slide-left\",\n  slideRightClass: \"slide-right\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvc2V0dGluZ3MuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLElBQU1BLFFBQVEsR0FBRztFQUNwQkMsV0FBVyxFQUFFLFNBQVM7RUFDdEJDLGNBQWMsRUFBRSxZQUFZO0VBQzVCQyxjQUFjLEVBQUUsWUFBWTtFQUM1QkMsZUFBZSxFQUFFO0FBQ3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZWYtd2Vic2l0ZS8uL3Jlc291cmNlcy9qcy9zZXR0aW5ncy5qcz81M2VkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBzaG93VXBDbGFzczogJ3Nob3ctdXAnLFxuICAgIE5vT3BhY2l0eUNsYXNzOiAnbm8tb3BhY2l0eScsXG4gICAgc2xpZGVMZWZ0Q2xhc3M6IFwic2xpZGUtbGVmdFwiLFxuICAgIHNsaWRlUmlnaHRDbGFzczogXCJzbGlkZS1yaWdodFwiXG59O1xuIl0sIm5hbWVzIjpbInNldHRpbmdzIiwic2hvd1VwQ2xhc3MiLCJOb09wYWNpdHlDbGFzcyIsInNsaWRlTGVmdENsYXNzIiwic2xpZGVSaWdodENsYXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/settings.js\n");

/***/ }),

/***/ "./resources/scss/main.scss":
/*!**********************************!*\
  !*** ./resources/scss/main.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc2Nzcy9tYWluLnNjc3MiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VmLXdlYnNpdGUvLi9yZXNvdXJjZXMvc2Nzcy9tYWluLnNjc3M/NWFkYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/scss/main.scss\n");

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
/******/ 		var chunkLoadingGlobal = self["webpackChunksef_website"] = self["webpackChunksef_website"] || [];
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