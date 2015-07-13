(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["Server"] = factory();
	else
		root["Server"] = factory();
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = __webpack_require__(1);
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  // config:     require('./config'),
	  // defaults:   require('./defaults'),
	  // execute:    require('./execute'),
	  // render:     require('./render'),
	  // routes:     require('./routes'),
	  // marko:      require('./marko'),
	  // middleware: require('./middleware'),
	  // state:      require('./state'),
	  // setup:      require('./setup'),

	  // Usage: Pass single or multiple configurations
	  // configure({...})
	  // configure([{...}, {...}])
	  // configure({...}, {...})
	  configure: function configure(config) {
	    if (!config) {
	      console.log('no config', config);
	      return;
	    }
	    if (Array.isArray(config)) {
	      configs = config;
	    }

	    for (var _len = arguments.length, configs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      configs[_key - 1] = arguments[_key];
	    }

	    if (configs) {
	      for (var conf in configs) {
	        console.log(conf);
	        // this.configure(config);
	      }
	    }

	    // this.setup.configure(config);
	  }
	};
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;