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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _balance = __webpack_require__(1);

var _fetch = __webpack_require__(2);

var _messages = __webpack_require__(10);

__webpack_require__(4);

(0, _fetch.setErrorOutput)(_messages.blinkMessage);

var balance = (0, _balance.getBalance)();

console.info(balance);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBalance = undefined;

var getBalance = exports.getBalance = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _fetch.getData)(_config.ENDPOINTS.balance);

          case 2:
            return _context.abrupt('return', _context.sent);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getBalance() {
    return _ref.apply(this, arguments);
  };
}();

var _fetch = __webpack_require__(2);

var _config = __webpack_require__(3);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = getData;
exports.addData = addData;
exports.setErrorOutput = setErrorOutput;

var _config = __webpack_require__(3);

var _constants = __webpack_require__(9);

var showErrorCustomFn = undefined;

function showError(message) {
  return showErrorCustomFn ? showErrorCustomFn(message) : console.error(message);
}

function onError(response) {
  switch (response.status) {
    case _constants.ERRORS.badRequest:
      return showError('Bad request');
    case _constants.ERRORS.notFound:
      return showError('Not found');
    case _constants.ERRORS.methodNotAllowed:
      return showError('Method not allowed');
    case _constants.ERRORS.internalServerError:
      return showError('Internal server error');
    case _constants.ERRORS.serviceUnavailable:
      return showError('Service unavailable');
    default:
      return showError('Unknown error');
  }
}

function getData(entityStr) {
  var _this = this;

  return fetch(_config.URL + '/' + entityStr).then(function (response) {
    if (!response.ok) return _this.onError(response);

    return response.json();
  });
}

function addData(url) {
  var _this2 = this;

  return fetch(_config.URL + '/' + entityStr + '/add').then(function (response) {
    if (!response.ok) return _this2.onError(response);

    return response.json();
  });
}

function setErrorOutput(fn) {}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {"URL":"http://localhost:8080/api/","ENDPOINTS":{"BALANCE":"balance"}}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = {"ERRORS":{"badRequest":400,"notFound":404,"methodNotAllowed":405,"internalServerError":500,"serviceUnavailable":503}}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showMessage = showMessage;
exports.clearMessage = clearMessage;
exports.blinkMessage = blinkMessage;

var _dom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./modules/dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _elements = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./modules/elements\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var container = (0, _elements.getNotificationsBox)();

function showMessage(message) {
  var typeClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-error';
  var elemType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'div';

  var msgHtml = (0, _dom.createElem)(elemType, 'messages__notification-item ' + typeClass, message);
  (0, _dom.setHTML)(container, msgHtml);
}

function clearMessage() {
  (0, _dom.clearHTML)(container);
}

function blinkMessage(message, typeClass) {
  var _this = this;

  var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;

  this.showMessage(message, typeClass);

  return setTimeout(function () {
    _this.clearMessage();
  }, timeout);
}

/***/ })
/******/ ]);