(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _weapp = __webpack_require__(1);

	var _weapp2 = _interopRequireDefault(_weapp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _weapp2.default;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _definitions = __webpack_require__(2);

	var _definitions2 = _interopRequireDefault(_definitions);

	var _factory = __webpack_require__(3);

	var _factory2 = _interopRequireDefault(_factory);

	var _http = __webpack_require__(4);

	var _http2 = _interopRequireDefault(_http);

	var _enhancements = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var wrapMethods = function wrapMethods(dest, src, methods) {
	  for (var i = 0; i < methods.length; i++) {
	    var _methods$i = methods[i],
	        name = _methods$i.name,
	        wrapper = _methods$i.wrapper,
	        rest = _objectWithoutProperties(_methods$i, ['name', 'wrapper']);

	    dest[name] = _factory2.default[wrapper](src, name, rest);
	  }
	};

	function wxWrapper(x) {
	  var weapp = {
	    VERSION: ("0.4.0"),
	    API_VERSION: ("1.7.0")
	  };

	  var methods = (0, _definitions2.default)();
	  wrapMethods(weapp, x, methods);
	  (0, _enhancements.shortcutRequest)(weapp.request);
	  weapp.requireAuth = (0, _enhancements.requireAuth)(weapp.login, weapp.getUserInfo);
	  weapp.Http = (0, _http2.default)(weapp.request);

	  return weapp;
	}

	exports.default = wxWrapper;
	module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var definitions = [
	// http
	{ name: 'request', wrapper: 'promisify' }, { name: 'uploadFile', wrapper: 'promisify' }, { name: 'downloadFile', wrapper: 'promisify' },

	// socket
	{ name: 'connectSocket', wrapper: 'promisify' }, { name: 'onSocketOpen', wrapper: 'callback' }, { name: 'onSocketError', wrapper: 'callback' }, { name: 'sendSocketMessage', wrapper: 'promisify' }, { name: 'onSocketMessage', wrapper: 'callback' }, { name: 'closeSocket', wrapper: 'delegate' }, { name: 'onSocketClose', wrapper: 'callback' },

	// image
	{ name: 'chooseImage', wrapper: 'promisify' }, { name: 'previewImage', wrapper: 'promisify' }, { name: 'getImageInfo', wrapper: 'promisify' }, { name: 'saveImageToPhotosAlbum', wrapper: 'promisify' },

	// audio && voice
	{ name: 'startRecord', wrapper: 'promisify' }, { name: 'stopRecord', wrapper: 'delegate' }, { name: 'getRecorderManager', wrapper: 'delegate' }, { name: 'playVoice', wrapper: 'promisify' }, { name: 'pauseVoice', wrapper: 'delegate' }, { name: 'stopVoice', wrapper: 'delegate' }, { name: 'getBackgroundAudioPlayerState', wrapper: 'promisify' }, { name: 'playBackgroundAudio', wrapper: 'promisify' }, { name: 'pauseBackgroundAudio', wrapper: 'delegate' }, { name: 'seekBackgroundAudio', wrapper: 'promisify' }, { name: 'stopBackgroundAudio', wrapper: 'delegate' }, { name: 'onBackgroundAudioPlay', wrapper: 'callback' }, { name: 'onBackgroundAudioPause', wrapper: 'callback' }, { name: 'onBackgroundAudioStop', wrapper: 'callback' }, { name: 'getBackgroundAudioManager', wrapper: 'delegate' }, { name: 'createAudioContext', wrapper: 'delegate' }, { name: 'createInnerAudioContext', wrapper: 'delegate' },

	// video && camera
	{ name: 'chooseVideo', wrapper: 'promisify' }, { name: 'saveVideoToPhotosAlbum', wrapper: 'promisify' }, { name: 'createVideoContext', wrapper: 'delegate' }, { name: 'createCameraContext', wrapper: 'overwrite', methods: {
	    takePhoto: 'promisify',
	    startRecord: 'promisify',
	    stopRecord: 'promisify'
	  } }, { name: 'createLivePlayerContext', wrapper: 'overwrite', methods: {
	    play: 'promisify',
	    stop: 'promisify',
	    mute: 'promisify',
	    requestFullScreen: 'promisify',
	    exitFullScreen: 'promisify'
	  } }, { name: 'createLivePusherContext', wrapper: 'overwrite', methods: {
	    play: 'promisify',
	    stop: 'promisify',
	    mute: 'promisify',
	    requestFullScreen: 'promisify',
	    exitFullScreen: 'promisify'
	  } },

	// file
	{ name: 'saveFile', wrapper: 'promisify' }, { name: 'getFileInfo', wrapper: 'promisify' }, { name: 'getSavedFileList', wrapper: 'promisify' }, { name: 'getSavedFileInfo', wrapper: 'promisify' }, { name: 'removeSavedFile', wrapper: 'promisify' }, { name: 'openDocument', wrapper: 'promisify' },

	// storage
	{ name: 'setStorage', wrapper: 'promisify' }, { name: 'getStorage', wrapper: 'promisify' }, { name: 'getStorageInfo', wrapper: 'promisify' }, { name: 'removeStorage', wrapper: 'promisify' }, { name: 'clearStorage', wrapper: 'promisify' }, { name: 'setStorageSync', wrapper: 'delegate' }, { name: 'getStorageSync', wrapper: 'delegate' }, { name: 'getStorageInfoSync', wrapper: 'delegate' }, { name: 'removeStorageSync', wrapper: 'delegate' }, { name: 'clearStorageSync', wrapper: 'delegate' },

	// location && map
	{ name: 'getLocation', wrapper: 'promisify' }, { name: 'chooseLocation', wrapper: 'promisify' }, { name: 'openLocation', wrapper: 'promisify' }, { name: 'createMapContext', wrapper: 'delegate' },

	// system: info
	{ name: 'getSystemInfo', wrapper: 'promisify' }, { name: 'getSystemInfoSync', wrapper: 'delegate' }, { name: 'canIUse', wrapper: 'delegate' },

	// device: network status
	{ name: 'getNetworkType', wrapper: 'promisify' }, { name: 'onNetworkStatusChange', wrapper: 'callback' },

	// device: accelerometer
	{ name: 'onAccelerometerChange', wrapper: 'callback' }, { name: 'startAccelerometer', wrapper: 'promisify' }, { name: 'stopAccelerometer', wrapper: 'promisify' },

	// device: compass
	{ name: 'onCompassChange', wrapper: 'callback' }, { name: 'startCompass', wrapper: 'promisify' }, { name: 'stopCompass', wrapper: 'promisify' },

	// device: phone call
	{ name: 'makePhoneCall', wrapper: 'promisify' },

	// device: scan
	{ name: 'scanCode', wrapper: 'promisify' },

	// device: clipboard
	{ name: 'setClipboardData', wrapper: 'promisify' }, { name: 'getClipboardData', wrapper: 'promisify' },

	// device: BLE
	{ name: 'openBluetoothAdapter', wrapper: 'promisify' }, { name: 'closeBluetoothAdapter', wrapper: 'promisify' }, { name: 'getBluetoothAdapterState', wrapper: 'promisify' }, { name: 'onBluetoothAdapterStateChange', wrapper: 'callback' }, { name: 'startBluetoothDevicesDiscovery', wrapper: 'promisify' }, { name: 'stopBluetoothDevicesDiscovery', wrapper: 'promisify' }, { name: 'getBluetoothDevices', wrapper: 'promisify' }, { name: 'getConnectedBluetoothDevices', wrapper: 'promisify' }, { name: 'onBluetoothDeviceFound', wrapper: 'callback' }, { name: 'createBLEConnection', wrapper: 'promisify' }, { name: 'closeBLEConnection', wrapper: 'promisify' }, { name: 'getBLEDeviceServices', wrapper: 'promisify' }, { name: 'getBLEDeviceCharacteristics', wrapper: 'promisify' }, { name: 'readBLECharacteristicValue', wrapper: 'promisify' }, { name: 'writeBLECharacteristicValue', wrapper: 'promisify' }, { name: 'notifyBLECharacteristicValueChange', wrapper: 'promisify' }, { name: 'onBLEConnectionStateChange', wrapper: 'callback' }, { name: 'onBLECharacteristicValueChange', wrapper: 'callback' },

	// device: iBeacon
	{ name: 'startBeaconDiscovery', wrapper: 'promisify' }, { name: 'stopBeaconDiscovery', wrapper: 'promisify' }, { name: 'getBeacons', wrapper: 'promisify' }, { name: 'onBeaconUpdate', wrapper: 'callback' }, { name: 'onBeaconServiceChange', wrapper: 'callback' },

	// device: screen
	{ name: 'setScreenBrightness', wrapper: 'promisify' }, { name: 'getScreenBrightness', wrapper: 'promisify' }, { name: 'setKeepScreenOn', wrapper: 'promisify' },

	// device: captureScreen
	{ name: 'onUserCaptureScreen', wrapper: 'callback' },

	// device: vibrate
	{ name: 'vibrateLong', wrapper: 'promisify' }, { name: 'vibrateShort', wrapper: 'promisify' },

	// device: contactor
	{ name: 'addPhoneContact', wrapper: 'promisify' },

	// device: NFC
	{ name: 'getHCEState', wrapper: 'promisify' }, { name: 'startHCE', wrapper: 'promisify' }, { name: 'stopHCE', wrapper: 'promisify' }, { name: 'onHCEMessage', wrapper: 'callback' }, { name: 'sendHCEMessage', wrapper: 'promisify' },

	// device: Wi-Fi
	{ name: 'startWifi', wrapper: 'promisify' }, { name: 'stopWifi', wrapper: 'promisify' }, { name: 'connectWifi', wrapper: 'promisify' }, { name: 'getWifiList', wrapper: 'promisify' }, { name: 'onGetWifiList', wrapper: 'callback' }, { name: 'setWifiList', wrapper: 'promisify' }, { name: 'presetWifiList', wrapper: 'promisify' }, { name: 'getConnectedWifi', wrapper: 'promisify' }, { name: 'onWifiConnected', wrapper: 'callback' }, { name: 'onEvaluateWifi', wrapper: 'callback' },

	// UI: interaction
	{ name: 'showToast', wrapper: 'promisify' }, { name: 'showLoading', wrapper: 'promisify' }, { name: 'hideToast', wrapper: 'delegate' }, { name: 'hideLoading', wrapper: 'delegate' }, { name: 'showModal', wrapper: 'promisify' }, { name: 'showActionSheet', wrapper: 'promisify' },

	// UI: navigation
	{ name: 'setNavigationBarTitle', wrapper: 'promisify' }, { name: 'showNavigationBarLoading', wrapper: 'delegate' }, { name: 'hideNavigationBarLoading', wrapper: 'delegate' }, { name: 'setNavigationBarColor', wrapper: 'promisify' }, { name: 'setTopBarText', wrapper: 'promisify' }, { name: 'navigateTo', wrapper: 'promisify' }, { name: 'redirectTo', wrapper: 'promisify' }, { name: 'switchTab', wrapper: 'promisify' }, { name: 'navigateBack', wrapper: 'delegate' }, { name: 'reLaunch', wrapper: 'promisify' },

	// UI: animation
	{ name: 'createAnimation', wrapper: 'delegate' },

	// UI: position
	{ name: 'pageScrollTo', wrapper: 'delegate' }, { name: 'createSelectorQuery', wrapper: 'delegate' },

	// UI: canvas
	{ name: 'createCanvasContext', wrapper: 'delegate' }, { name: 'createContext', wrapper: 'delegate' }, // depreciate
	{ name: 'drawCanvas', wrapper: 'delegate' }, // depreciate
	{ name: 'canvasToTempFilePath', wrapper: 'promisify' },

	// UI: pull-refresh
	{ name: 'startPullDownRefresh', wrapper: 'promisify' }, { name: 'stopPullDownRefresh', wrapper: 'delegate' },

	// DOM
	{ name: 'createSelectorQuery', wrapper: 'delegate' },

	// 3rd extension
	{ name: 'getExtConfig', wrapper: 'promisify' }, { name: 'getExtConfigSync', wrapper: 'delegate' },

	// Auth
	{ name: 'login', wrapper: 'promisify' }, { name: 'checkSession', wrapper: 'promisify' }, { name: 'authorize', wrapper: 'promisify' }, { name: 'getUserInfo', wrapper: 'promisify' },

	// Card
	{ name: 'addCard', wrapper: 'promisify' }, { name: 'openCard', wrapper: 'promisify' },

	// Share
	{ name: 'showShareMenu', wrapper: 'promisify' }, { name: 'hideShareMenu', wrapper: 'promisify' }, { name: 'updateShareMenu', wrapper: 'promisify' }, { name: 'getShareInfo', wrapper: 'promisify' },

	// Utitlities
	{ name: 'requestPayment', wrapper: 'promisify' }, { name: 'chooseAddress', wrapper: 'promisify' }, { name: 'chooseInvoiceTitle', wrapper: 'promisify' }, { name: 'openSetting', wrapper: 'promisify' }, { name: 'getSetting', wrapper: 'promisify' }, { name: 'arrayBufferToBase64', wrapper: 'delegate' }, { name: 'base64ToArrayBuffer', wrapper: 'delegate' }, { name: 'getWeRunData', wrapper: 'promisify' }, { name: 'navigateToMiniProgram', wrapper: 'promisify' }, { name: 'navigateBackMiniProgram', wrapper: 'promisify' }, { name: 'checkIsSupportSoterAuthentication', wrapper: 'promisify' }, { name: 'startSoterAuthentication', wrapper: 'promisify' }, { name: 'checkIsSoterEnrolledInDevice', wrapper: 'promisify' }, { name: 'reportAnalytics', wrapper: 'delegate' }, { name: 'setEnableDebug', wrapper: 'delegate' }];

	function findDefinitions() {
	  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

	  if ('function' === typeof filter) {
	    return definitions.filter(filter);
	  }
	  if ('string' === typeof filter) {
	    return findDefinitions(function (m) {
	      return m.wrapper === filter;
	    });
	  }
	  return definitions;
	}

	exports.default = findDefinitions;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var resolveResponse = function resolveResponse() {
	  var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var isValidStatus = res.statusCode >= 200 && res.statusCode < 300;
	  return isValidStatus ? Promise.resolve(res) : Promise.reject(res);
	};

	var getResolver = function getResolver(method) {
	  if (method === 'request') {
	    return resolveResponse;
	  }
	};

	var wrappers = {};
	wrappers.promisify = function (x, method) {
	  var xfn = x[method];
	  return function (obj) {
	    var promise = new Promise(function (resolve, reject) {
	      xfn(Object.assign({}, obj, { success: resolve, fail: reject, complete: null }));
	    });
	    var resolver = getResolver(method);
	    return resolver ? promise.then(resolver) : promise;
	  };
	};

	wrappers.delegate = function (x, method) {
	  var xfn = x[method];
	  return function () {
	    return xfn.apply(undefined, arguments);
	  };
	};

	// callback or promise
	wrappers.callback = function (x, method) {
	  var xfn = x[method];
	  return function (cb) {
	    if ('function' === typeof cb) {
	      return xfn(cb);
	    }
	    return new Promise(function (resolve) {
	      return xfn(resolve);
	    });
	  };
	};

	// overwrite
	wrappers.overwrite = function (x, method, _ref) {
	  var methods = _ref.methods;

	  var xfn = x[method];
	  return function () {
	    var instance = xfn.apply(undefined, arguments);
	    for (var im in methods) {
	      var fn = wrappers[methods[im]];
	      if ('function' !== typeof fn) {
	        throw new Error('unknown warpper function: ' + methods[im]);
	      }
	      instance[im] = fn(instance, im);
	    }
	    return instance;
	  };
	};

	exports.default = wrappers;
	module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// req: wrapped wx.request
	var Http = function Http(req) {
	  return function (base) {
	    var baseUrl = (base + '/').replace(/\/+$/, '/');

	    var isObject = function isObject(obj) {
	      if (Object.prototype.toString.call(obj) !== '[object Object]') {
	        return false;
	      }
	      return Object.keys(obj).length > 0;
	    };

	    //TODO: nested object to query string
	    var toQueryString = function toQueryString(params) {
	      return Object.keys(params).reduce(function (mem, key) {
	        if (params[key]) {
	          mem.push(key + '=' + encodeURIComponent(params[key]));
	        }
	        return mem;
	      }, []).join('&');
	    };

	    var buildUrl = function buildUrl() {
	      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var url = '' + baseUrl + path.replace(/^\/+/, '');
	      if (isObject(params)) {
	        return url + '?' + toQueryString(params);
	      }
	      return url;
	    };

	    var requestWithParams = function requestWithParams(method) {
	      return function (path, params) {
	        var url = buildUrl(path, params);
	        return req[method](url);
	      };
	    };

	    var requestWithBody = function requestWithBody(method) {
	      return function (path, body) {
	        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	        var url = buildUrl(path, params);
	        return req[method](url, body);
	      };
	    };

	    return {
	      get: requestWithParams('get'),
	      post: requestWithBody('post'),
	      put: requestWithBody('put'),
	      patch: requestWithBody('patch'),
	      'delete': requestWithParams('delete'),
	      head: requestWithParams('head')
	    };
	  };
	};

	exports.default = Http;
	module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var shortcut = function shortcut(request, method) {
	  return function (url, body, init) {
	    var config = {};
	    if (typeof body === 'function') {
	      init = body;
	      body = undefined;
	    }

	    if (['GET', 'HEAD', 'DELETE', 'TRACE', 'CONNECT'].indexOf(method) !== -1) {
	      body = undefined;
	    }

	    if (typeof init === 'function') {
	      Object.assign(config, init());
	    }

	    if (body !== undefined) {
	      Object.assign(config, { body: body });
	    }

	    var header = config.header;
	    var VERSION = ("0.4.0");

	    config.header = Object.assign({}, header, { 'X-Wrapped-With': 'v' + VERSION });
	    return request(Object.assign(config, { url: url, method: method }));
	  };
	};

	// to decorate promisified request function
	function shortcutRequest(req) {
	  req.get = shortcut(req, 'GET');
	  req.post = shortcut(req, 'POST');
	  req.put = shortcut(req, 'PUT');
	  req.patch = shortcut(req, 'PATCH');
	  req['delete'] = shortcut(req, 'DELETE');
	  req.options = shortcut(req, 'OPTIONS');
	  req.head = shortcut(req, 'HEAD');
	  req.trace = shortcut(req, 'TRACE');
	  req.connect = shortcut(req, 'CONNECT');
	  return req;
	}

	function requireAuth(login, getUserInfo) {
	  return function () {
	    return Promise.all([login(), getUserInfo()]);
	  };
	}

	exports.shortcutRequest = shortcutRequest;
	exports.requireAuth = requireAuth;

/***/ })
/******/ ])
});
;