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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/Release/addon.node":
/*!**********************************!*\
  !*** ./build/Release/addon.node ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {
try {
  global.process.dlopen(module, __dirname + "/" + __webpack_require__.p + "74c538bbb3e10dd34e5b294bf4c8895c.node");
} catch (error) {
  throw new Error('node-loader:\n' + error);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/main/index.ts":
/*!***************************!*\
  !*** ./src/main/index.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var electron_devtools_installer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! electron-devtools-installer */ "electron-devtools-installer");
/* harmony import */ var electron_devtools_installer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(electron_devtools_installer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _build_Release_addon_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~build/Release/addon.node */ "./build/Release/addon.node");
/* harmony import */ var _build_Release_addon_node__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_build_Release_addon_node__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



 // @ts-ignore



function loadHtml(window, name) {
  if (false) {} // 开发模式


  window.loadURL(`http://localhost:8080/dist/${name}.html`).catch(console.error);
}

let mainWindow = null;
let userInfoWidget = null;
electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].handle('open-user-info-widget', () => {
  createUserInfoWidget();
});
electron__WEBPACK_IMPORTED_MODULE_0__["ipcMain"].handle('calc-value', (event, a, b) => {
  console.log(Object(_build_Release_addon_node__WEBPACK_IMPORTED_MODULE_3__["add"])(+a, +b));
  return Object(_build_Release_addon_node__WEBPACK_IMPORTED_MODULE_3__["add"])(+a, +b);
});

function createMainWindow() {
  if (mainWindow) return;
  mainWindow = new electron__WEBPACK_IMPORTED_MODULE_0__["BrowserWindow"]({
    webPreferences: {
      nodeIntegration: true
    },
    frame: true,
    backgroundColor: '#333544',
    minWidth: 450,
    minHeight: 350,
    height: 350,
    width: 450
  });
  loadHtml(mainWindow, 'index');
  mainWindow.on('close', () => mainWindow = null);
  mainWindow.webContents.on('crashed', () => console.error('crash'));

  __webpack_require__(/*! devtron */ "devtron").install();
}

function createUserInfoWidget() {
  if (userInfoWidget) return;
  if (!mainWindow) return;
  userInfoWidget = new electron__WEBPACK_IMPORTED_MODULE_0__["BrowserWindow"]({
    parent: mainWindow,
    webPreferences: {
      nodeIntegration: true
    },
    frame: true,
    backgroundColor: '#333544',
    minWidth: 250,
    minHeight: 300,
    height: 300,
    width: 250
  });
  loadHtml(userInfoWidget, 'userInfo');
  userInfoWidget.on('close', () => userInfoWidget = null);
  userInfoWidget.webContents.on('crashed', () => console.error('crash'));
}

electron__WEBPACK_IMPORTED_MODULE_0__["app"].on('ready', () => {
  createMainWindow();
});
electron__WEBPACK_IMPORTED_MODULE_0__["app"].on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    electron__WEBPACK_IMPORTED_MODULE_0__["app"].quit();
  }
});
electron__WEBPACK_IMPORTED_MODULE_0__["app"].on('activate', () => {
  createMainWindow();
});
electron__WEBPACK_IMPORTED_MODULE_0__["app"].whenReady().then(() => {
  electron_devtools_installer__WEBPACK_IMPORTED_MODULE_2___default()([electron_devtools_installer__WEBPACK_IMPORTED_MODULE_2__["REACT_PERF"], electron_devtools_installer__WEBPACK_IMPORTED_MODULE_2__["REDUX_DEVTOOLS"], electron_devtools_installer__WEBPACK_IMPORTED_MODULE_2__["REACT_DEVELOPER_TOOLS"]]).then(() => {});
});
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(loadHtml, "loadHtml", "/Users/dengpengfei/Documents/Project/JavaScript/electron-react-build/src/main/index.ts");
  reactHotLoader.register(mainWindow, "mainWindow", "/Users/dengpengfei/Documents/Project/JavaScript/electron-react-build/src/main/index.ts");
  reactHotLoader.register(userInfoWidget, "userInfoWidget", "/Users/dengpengfei/Documents/Project/JavaScript/electron-react-build/src/main/index.ts");
  reactHotLoader.register(createMainWindow, "createMainWindow", "/Users/dengpengfei/Documents/Project/JavaScript/electron-react-build/src/main/index.ts");
  reactHotLoader.register(createUserInfoWidget, "createUserInfoWidget", "/Users/dengpengfei/Documents/Project/JavaScript/electron-react-build/src/main/index.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "devtron":
/*!**************************!*\
  !*** external "devtron" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("devtron");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "electron-devtools-installer":
/*!**********************************************!*\
  !*** external "electron-devtools-installer" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron-devtools-installer");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });