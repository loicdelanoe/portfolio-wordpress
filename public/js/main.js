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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cursor: () => (/* binding */ Cursor)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Cursor = /*#__PURE__*/function () {\n  function Cursor() {\n    var _this = this;\n    _classCallCheck(this, Cursor);\n    document.body.insertAdjacentHTML('afterbegin', \"<div class=\\\"cursor\\\"></div>\");\n    this.cursor = document.querySelector('.cursor');\n    this.projectLinks = document.querySelectorAll('.projetcard__link');\n    this.projectLinks.forEach(function (link) {\n      _this.removePointer(link);\n    });\n    this.handleMouseMove();\n    this.AddCursorStyle();\n  }\n  return _createClass(Cursor, [{\n    key: \"handleMouseMove\",\n    value: function handleMouseMove() {\n      var _this2 = this;\n      document.addEventListener('mousemove', function (e) {\n        _this2.cursor.style.top = e.pageY + 'px';\n        _this2.cursor.style.left = e.pageX + 'px';\n      });\n    }\n  }, {\n    key: \"AddCursorStyle\",\n    value: function AddCursorStyle() {\n      var _this3 = this;\n      this.projectLinks.forEach(function (link) {\n        link.addEventListener('mouseover', function () {\n          _this3.cursor.classList.add('link');\n        });\n        link.addEventListener('mouseleave', function () {\n          _this3.cursor.classList.remove('link');\n        });\n      });\n    }\n  }, {\n    key: \"removePointer\",\n    value: function removePointer(element) {\n      element.classList.add('no-cursor');\n    }\n  }]);\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvQ3Vyc29yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxNQUFNO0VBRWYsU0FBQUEsT0FBQSxFQUFjO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFGLE1BQUE7SUFDVkcsUUFBUSxDQUFDQyxJQUFJLENBQUNDLGtCQUFrQixDQUFDLFlBQVksZ0NBQThCLENBQUM7SUFFNUUsSUFBSSxDQUFDQyxNQUFNLEdBQUdILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUMvQyxJQUFJLENBQUNDLFlBQVksR0FBR0wsUUFBUSxDQUFDTSxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztJQUdsRSxJQUFJLENBQUNELFlBQVksQ0FBQ0UsT0FBTyxDQUFDLFVBQUNDLElBQUksRUFBSztNQUNoQ1YsS0FBSSxDQUFDVyxhQUFhLENBQUNELElBQUksQ0FBQztJQUM1QixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNFLGVBQWUsQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFDekI7RUFBQyxPQUFBQyxZQUFBLENBQUFmLE1BQUE7SUFBQWdCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFKLGdCQUFBLEVBQWtCO01BQUEsSUFBQUssTUFBQTtNQUNkZixRQUFRLENBQUNnQixnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsVUFBQ0MsQ0FBQyxFQUFLO1FBQzFDRixNQUFJLENBQUNaLE1BQU0sQ0FBQ2UsS0FBSyxDQUFDQyxHQUFHLEdBQUdGLENBQUMsQ0FBQ0csS0FBSyxHQUFHLElBQUk7UUFDdENMLE1BQUksQ0FBQ1osTUFBTSxDQUFDZSxLQUFLLENBQUNHLElBQUksR0FBR0osQ0FBQyxDQUFDSyxLQUFLLEdBQUcsSUFBSTtNQUMzQyxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUFULEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFILGVBQUEsRUFBaUI7TUFBQSxJQUFBWSxNQUFBO01BQ2IsSUFBSSxDQUFDbEIsWUFBWSxDQUFDRSxPQUFPLENBQUMsVUFBQ0MsSUFBSSxFQUFLO1FBQ2hDQSxJQUFJLENBQUNRLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxZQUFNO1VBQ3JDTyxNQUFJLENBQUNwQixNQUFNLENBQUNxQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDckMsQ0FBQyxDQUFDO1FBRUZqQixJQUFJLENBQUNRLGdCQUFnQixDQUFDLFlBQVksRUFBRSxZQUFNO1VBQ3RDTyxNQUFJLENBQUNwQixNQUFNLENBQUNxQixTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDeEMsQ0FBQyxDQUFDO01BQ04sQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBYixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBTCxjQUFja0IsT0FBTyxFQUFFO01BQ25CQSxPQUFPLENBQUNILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztJQUN0QztFQUFDO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2ljZGVsYW5vZS1wb3J0Zm9saW8vLi9yZXNvdXJjZXMvanMvQ3Vyc29yLmpzPzAyNjgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEN1cnNvciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgPGRpdiBjbGFzcz1cImN1cnNvclwiPjwvZGl2PmApO1xuXG4gICAgICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnNvcicpO1xuICAgICAgICB0aGlzLnByb2plY3RMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZXRjYXJkX19saW5rJyk7XG5cblxuICAgICAgICB0aGlzLnByb2plY3RMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVBvaW50ZXIobGluayk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlTW91c2VNb3ZlKCk7XG4gICAgICAgIHRoaXMuQWRkQ3Vyc29yU3R5bGUoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZU1vdmUoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnNvci5zdHlsZS50b3AgPSBlLnBhZ2VZICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yLnN0eWxlLmxlZnQgPSBlLnBhZ2VYICsgJ3B4JztcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBBZGRDdXJzb3JTdHlsZSgpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LmFkZCgnbGluaycpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnNvci5jbGFzc0xpc3QucmVtb3ZlKCdsaW5rJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW1vdmVQb2ludGVyKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCduby1jdXJzb3InKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIkN1cnNvciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiZG9jdW1lbnQiLCJib2R5IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiY3Vyc29yIiwicXVlcnlTZWxlY3RvciIsInByb2plY3RMaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibGluayIsInJlbW92ZVBvaW50ZXIiLCJoYW5kbGVNb3VzZU1vdmUiLCJBZGRDdXJzb3JTdHlsZSIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzdHlsZSIsInRvcCIsInBhZ2VZIiwibGVmdCIsInBhZ2VYIiwiX3RoaXMzIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/Cursor.js\n");

/***/ }),

/***/ "./resources/js/Observer.js":
/*!**********************************!*\
  !*** ./resources/js/Observer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Observer: () => (/* binding */ Observer)\n/* harmony export */ });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./resources/js/settings.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar Observer = /*#__PURE__*/function () {\n  function Observer() {\n    var _this = this;\n    _classCallCheck(this, Observer);\n    _defineProperty(this, \"showUpAnimation\", function (entries) {\n      entries.forEach(function (entry) {\n        if (entry.isIntersecting) {\n          setTimeout(function () {\n            entry.target.classList.add(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.showUpClass);\n            entry.target.classList.remove(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.NoOpacityClass);\n          }, _this.delay);\n          _this.delay += 100;\n        }\n      });\n      _this.delay = 0;\n    });\n    _defineProperty(this, \"slideLeftAnimation\", function (entries) {\n      entries.forEach(function (entry) {\n        if (entry.isIntersecting) {\n          setTimeout(function () {\n            entry.target.classList.add(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.slideLeftClass);\n            entry.target.classList.remove(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.NoOpacityClass);\n          }, _this.delay);\n          _this.delay += 100;\n        }\n      });\n      _this.delay = 0;\n    });\n    _defineProperty(this, \"slideRightAnimation\", function (entries) {\n      entries.forEach(function (entry) {\n        if (entry.isIntersecting) {\n          setTimeout(function () {\n            entry.target.classList.add(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.slideRightClass);\n            entry.target.classList.remove(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.NoOpacityClass);\n          }, _this.delay);\n          _this.delay += 100;\n        }\n      });\n      _this.delay = 0;\n    });\n    this.showUpElements = document.querySelectorAll(\"[data-animation=\\\"\".concat(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.showUpClass, \"\\\"]\"));\n    this.slideLeftElements = document.querySelectorAll(\"[data-animation=\\\"\".concat(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.slideLeftClass, \"\\\"]\"));\n    this.slideRightElements = document.querySelectorAll(\"[data-animation=\\\"\".concat(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.slideLeftClass, \"\\\"] + [data-animation=\\\"\").concat(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.slideLeftClass, \"\\\"]\"));\n    this.slideLeftElements.forEach(function (slideLeftElement) {\n      slideLeftElement.classList.add(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.NoOpacityClass);\n    });\n    this.slideRightElements.forEach(function (slideRightElement) {\n      slideRightElement.classList.add(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.NoOpacityClass);\n    });\n    this.showUpElements.forEach(function (showUpElement) {\n      showUpElement.classList.add(_settings__WEBPACK_IMPORTED_MODULE_0__.settings.NoOpacityClass);\n    });\n    this.showUpObserver = new IntersectionObserver(this.showUpAnimation);\n    this.slideLeftObserver = new IntersectionObserver(this.slideLeftAnimation);\n    this.slideRightObserver = new IntersectionObserver(this.slideRightAnimation);\n    this.observeAction();\n    this.delay = 0;\n  }\n  return _createClass(Observer, [{\n    key: \"observeAction\",\n    value: function observeAction() {\n      var _this2 = this;\n      this.showUpElements.forEach(function (element) {\n        _this2.showUpObserver.observe(element);\n      });\n      this.slideLeftElements.forEach(function (element) {\n        _this2.slideLeftObserver.observe(element);\n      });\n      this.slideRightElements.forEach(function (element) {\n        _this2.slideRightObserver.observe(element);\n      });\n    }\n  }]);\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ1UsT0FBTyxDQUFDRCxPQUFPLENBQUM7TUFDM0MsQ0FBQyxDQUFDO01BRUYsSUFBSSxDQUFDaEIsa0JBQWtCLENBQUNsQixPQUFPLENBQUMsVUFBQ2tDLE9BQU8sRUFBSztRQUN6Q0QsTUFBSSxDQUFDTixrQkFBa0IsQ0FBQ1EsT0FBTyxDQUFDRCxPQUFPLENBQUM7TUFDNUMsQ0FBQyxDQUFDO0lBQ047RUFBQztBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9pY2RlbGFub2UtcG9ydGZvbGlvLy4vcmVzb3VyY2VzL2pzL09ic2VydmVyLmpzP2ZjNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXR0aW5nc30gZnJvbSAnLi9zZXR0aW5ncyc7XG5cbmV4cG9ydCBjbGFzcyBPYnNlcnZlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zaG93VXBFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWFuaW1hdGlvbj1cIiR7c2V0dGluZ3Muc2hvd1VwQ2xhc3N9XCJdYCk7XG4gICAgICAgIHRoaXMuc2xpZGVMZWZ0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1hbmltYXRpb249XCIke3NldHRpbmdzLnNsaWRlTGVmdENsYXNzfVwiXWApXG4gICAgICAgIHRoaXMuc2xpZGVSaWdodEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtYW5pbWF0aW9uPVwiJHtzZXR0aW5ncy5zbGlkZUxlZnRDbGFzc31cIl0gKyBbZGF0YS1hbmltYXRpb249XCIke3NldHRpbmdzLnNsaWRlTGVmdENsYXNzfVwiXWApXG5cbiAgICAgICAgdGhpcy5zbGlkZUxlZnRFbGVtZW50cy5mb3JFYWNoKChzbGlkZUxlZnRFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBzbGlkZUxlZnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MuTm9PcGFjaXR5Q2xhc3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNsaWRlUmlnaHRFbGVtZW50cy5mb3JFYWNoKChzbGlkZVJpZ2h0RWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgc2xpZGVSaWdodEVsZW1lbnQuY2xhc3NMaXN0LmFkZChzZXR0aW5ncy5Ob09wYWNpdHlDbGFzcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2hvd1VwRWxlbWVudHMuZm9yRWFjaCgoc2hvd1VwRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgc2hvd1VwRWxlbWVudC5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLk5vT3BhY2l0eUNsYXNzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zaG93VXBPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcih0aGlzLnNob3dVcEFuaW1hdGlvbik7XG4gICAgICAgIHRoaXMuc2xpZGVMZWZ0T2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5zbGlkZUxlZnRBbmltYXRpb24pO1xuICAgICAgICB0aGlzLnNsaWRlUmlnaHRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcih0aGlzLnNsaWRlUmlnaHRBbmltYXRpb24pO1xuXG4gICAgICAgIHRoaXMub2JzZXJ2ZUFjdGlvbigpO1xuICAgICAgICB0aGlzLmRlbGF5ID0gMDtcbiAgICB9XG5cbiAgICBzaG93VXBBbmltYXRpb24gPSAoZW50cmllcykgPT4ge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoc2V0dGluZ3Muc2hvd1VwQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShzZXR0aW5ncy5Ob09wYWNpdHlDbGFzcyk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5kZWxheSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRlbGF5ICs9IDEwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kZWxheSA9IDA7XG4gICAgfVxuXG4gICAgc2xpZGVMZWZ0QW5pbWF0aW9uID0gKGVudHJpZXMpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLnNsaWRlTGVmdENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoc2V0dGluZ3MuTm9PcGFjaXR5Q2xhc3MpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMuZGVsYXkpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxheSArPSAxMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZGVsYXkgPSAwO1xuICAgIH1cblxuICAgIHNsaWRlUmlnaHRBbmltYXRpb24gPSAoZW50cmllcykgPT4ge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoc2V0dGluZ3Muc2xpZGVSaWdodENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoc2V0dGluZ3MuTm9PcGFjaXR5Q2xhc3MpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMuZGVsYXkpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxheSArPSAxMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZGVsYXkgPSAwO1xuICAgIH1cblxuICAgIG9ic2VydmVBY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2hvd1VwRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93VXBPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNsaWRlTGVmdEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2xpZGVMZWZ0T2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zbGlkZVJpZ2h0RWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zbGlkZVJpZ2h0T2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbInNldHRpbmdzIiwiT2JzZXJ2ZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9kZWZpbmVQcm9wZXJ0eSIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInNldFRpbWVvdXQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzaG93VXBDbGFzcyIsInJlbW92ZSIsIk5vT3BhY2l0eUNsYXNzIiwiZGVsYXkiLCJzbGlkZUxlZnRDbGFzcyIsInNsaWRlUmlnaHRDbGFzcyIsInNob3dVcEVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uY2F0Iiwic2xpZGVMZWZ0RWxlbWVudHMiLCJzbGlkZVJpZ2h0RWxlbWVudHMiLCJzbGlkZUxlZnRFbGVtZW50Iiwic2xpZGVSaWdodEVsZW1lbnQiLCJzaG93VXBFbGVtZW50Iiwic2hvd1VwT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInNob3dVcEFuaW1hdGlvbiIsInNsaWRlTGVmdE9ic2VydmVyIiwic2xpZGVMZWZ0QW5pbWF0aW9uIiwic2xpZGVSaWdodE9ic2VydmVyIiwic2xpZGVSaWdodEFuaW1hdGlvbiIsIm9ic2VydmVBY3Rpb24iLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzMiIsImVsZW1lbnQiLCJvYnNlcnZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/Observer.js\n");

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Cursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cursor */ \"./resources/js/Cursor.js\");\n/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observer */ \"./resources/js/Observer.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\nvar Main = /*#__PURE__*/_createClass(function Main() {\n  _classCallCheck(this, Main);\n  this.observer = new _Observer__WEBPACK_IMPORTED_MODULE_1__.Observer();\n  this.cursor = new _Cursor__WEBPACK_IMPORTED_MODULE_0__.Cursor();\n});\nwindow.addEventListener('load', function () {\n  window.main = new Main();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFDSTtBQUFBLElBRTlCRSxJQUFJLGdCQUFBQyxZQUFBLENBRU4sU0FBQUQsS0FBQSxFQUFjO0VBQUFFLGVBQUEsT0FBQUYsSUFBQTtFQUNWLElBQUksQ0FBQ0csUUFBUSxHQUFHLElBQUlKLCtDQUFRLENBQUMsQ0FBQztFQUM5QixJQUFJLENBQUNLLE1BQU0sR0FBRyxJQUFJTiwyQ0FBTSxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUdMTyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFNO0VBQ2xDRCxNQUFNLENBQUNFLElBQUksR0FBRyxJQUFJUCxJQUFJLENBQUMsQ0FBQztBQUM1QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2ljZGVsYW5vZS1wb3J0Zm9saW8vLi9yZXNvdXJjZXMvanMvbWFpbi5qcz9mZGFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q3Vyc29yfSBmcm9tIFwiLi9DdXJzb3JcIjtcbmltcG9ydCB7T2JzZXJ2ZXJ9IGZyb20gXCIuL09ic2VydmVyXCI7XG5cbmNsYXNzIE1haW4ge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXIoKTtcbiAgICAgICAgdGhpcy5jdXJzb3IgPSBuZXcgQ3Vyc29yKCk7XG4gICAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICB3aW5kb3cubWFpbiA9IG5ldyBNYWluKCk7XG59KTtcblxuIl0sIm5hbWVzIjpbIkN1cnNvciIsIk9ic2VydmVyIiwiTWFpbiIsIl9jcmVhdGVDbGFzcyIsIl9jbGFzc0NhbGxDaGVjayIsIm9ic2VydmVyIiwiY3Vyc29yIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/main.js\n");

/***/ }),

/***/ "./resources/js/settings.js":
/*!**********************************!*\
  !*** ./resources/js/settings.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   settings: () => (/* binding */ settings)\n/* harmony export */ });\nvar settings = {\n  showUpClass: 'show-up',\n  NoOpacityClass: 'no-opacity',\n  slideLeftClass: \"slide-left\",\n  slideRightClass: \"slide-right\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvc2V0dGluZ3MuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLElBQU1BLFFBQVEsR0FBRztFQUNwQkMsV0FBVyxFQUFFLFNBQVM7RUFDdEJDLGNBQWMsRUFBRSxZQUFZO0VBQzVCQyxjQUFjLEVBQUUsWUFBWTtFQUM1QkMsZUFBZSxFQUFFO0FBQ3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2ljZGVsYW5vZS1wb3J0Zm9saW8vLi9yZXNvdXJjZXMvanMvc2V0dGluZ3MuanM/NTNlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgc2hvd1VwQ2xhc3M6ICdzaG93LXVwJyxcbiAgICBOb09wYWNpdHlDbGFzczogJ25vLW9wYWNpdHknLFxuICAgIHNsaWRlTGVmdENsYXNzOiBcInNsaWRlLWxlZnRcIixcbiAgICBzbGlkZVJpZ2h0Q2xhc3M6IFwic2xpZGUtcmlnaHRcIlxufTtcbiJdLCJuYW1lcyI6WyJzZXR0aW5ncyIsInNob3dVcENsYXNzIiwiTm9PcGFjaXR5Q2xhc3MiLCJzbGlkZUxlZnRDbGFzcyIsInNsaWRlUmlnaHRDbGFzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/settings.js\n");

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