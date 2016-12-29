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
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var features = {
	  object: {
	    assign: true,
	    is: true,
	    setPrototypeOf: true,
	    keys: true,
	    'values*': true,
	    'entries*': true,
	    getOwnPropertyDescriptor: true,
	    getOwnPropertyNames: true,
	    freeze: true,
	    seal: true,
	    preventExtensions: true,
	    isFrozen: true,
	    isSealed: true,
	    isExtensible: true,
	    'classof*': true
	  },

	  array: {
	    from: true,
	    of: true,
	    isArray: true,
	    copyWithin: false,
	    fill: false,
	    find: false,
	    findIndex: false,
	    values: false,
	    keys: false,
	    entries: false,
	    join: false,
	    slice: false,
	    indexOf: false,
	    lastIndexOf: false,
	    every: false,
	    some: false,
	    forEach: false,
	    map: false,
	    filter: false,
	    reduce: false,
	    reduceRight: false,
	    sort: false,
	    'includes*': false
	  },

	  string: {
	    fromCodePoint: true,
	    raw: true,
	    includes: false,
	    startsWith: false,
	    endsWith: false,
	    repeat: false,
	    codePointAt: false,
	    trim: false,
	    'trimLeft*': false,
	    'trimRight*': false,
	    'trimStart*': false,
	    'trimEnd*': false,
	    'padStart*': false,
	    'padEnd*': false
	  },

	  math: {
	    acosh: true,
	    asinh: true,
	    atanh: true,
	    cbrt: true,
	    clz32: true,
	    cosh: true,
	    expm1: true,
	    fround: true,
	    hypot: true,
	    imul: true,
	    log1p: true,
	    log10: true,
	    log2: true,
	    sign: true,
	    sinh: true,
	    tanh: true,
	    trunc: true
	  },

	  date: {
	    toJSON: false
	  },

	  promise: {
	    all: true,
	    resolve: true,
	    reject: true,
	    race: true,
	    __polyfill__: true,
	    then: false,
	    'catch': false,
	    'finally': false
	  }
	};

	function inspectType(type, typeName, instance) {
	  console.info(' ');
	  console.info('==========' + typeName + '==========');
	  var target = features[typeName];
	  if (!target) {
	    return;
	  }

	  var support = '';
	  for (var k in target) {
	    if (target[k] === true) {
	      // static
	      support = !!type[k.replace('*', '')] ? 'Yes' : 'No';
	      console.info(typeName + '.' + k + ': ' + support);
	    } else {
	      if (instance != null) {
	        support = !!instance[k.replace('*', '')] ? 'Yes' : 'No';
	        console.info(typeName + '#' + k + ': ' + support);
	      }
	    }
	  }
	}

	function isSupport(typeName, supported, msg) {
	  console.info('=======' + typeName + ' ' + (supported ? 'Yes' : 'No') + '=======');
	}

	function wxInsepctor() {
	  console.info('ES6 syntax and features inspector');

	  inspectType(Object, 'object', {});
	  inspectType(Array, 'array', []);
	  inspectType(String, 'string', '');
	  inspectType(Math, 'math');
	  inspectType(Date, 'date', new Date());

	  console.info(' ');
	  isSupport('Promise', typeof Promise === 'function');
	  if (typeof Promise === 'function') {
	    inspectType(Promise, 'promise', Promise.resolve());
	  }
	  isSupport('fetch', typeof fetch === 'function');

	  console.info(' ');
	  isSupport('ArrayBuffer', typeof ArrayBuffer !== 'undefined');
	  isSupport('DataView', typeof DataView !== 'undefined');
	  isSupport('Int8Array', typeof Int8Array !== 'undefined');
	  isSupport('Uint8Array', typeof Uint8Array !== 'undefined');
	  isSupport('Int16Array', typeof Int16Array !== 'undefined');
	  isSupport('Uint16Array', typeof Uint16Array !== 'undefined');
	  isSupport('Int32Array', typeof Int32Array !== 'undefined');
	  isSupport('Uint32Array', typeof Uint32Array !== 'undefined');
	  isSupport('Float32Array', typeof Float32Array !== 'undefined');
	  isSupport('Float64Array', typeof Float64Array !== 'undefined');

	  isSupport('Reflect*', (typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === 'object');
	  isSupport('Symbol*', typeof Symbol === 'function');
	  isSupport('Map*', typeof Map === 'function');
	  isSupport('WeakMap*', typeof WeakMap === 'function');
	  isSupport('Set*', typeof Set === 'function');
	  isSupport('WeakSet*', typeof WeakSet === 'function');

	  // BUG: nwjs, https://github.com/nwjs/nw.js/issues/897
	  // isSupport('setImmediate', typeof setImmediate === 'function')
	  // isSupport('clearImmediate', typeof clearImmediate === 'function')
	}

	exports.default = wxInsepctor.bind({});
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;