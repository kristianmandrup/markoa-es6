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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _setup = __webpack_require__(2);

	var _setup2 = babelHelpers.interopRequireDefault(_setup);

	var Server = (function () {
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

	  function Server() {
	    var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    babelHelpers.classCallCheck(this, Server);

	    this.config = {
	      mounted: {}
	    };
	    this.config = Object.assign(this.config, config);
	  }

	  babelHelpers.createClass(Server, [{
	    key: 'setup',
	    value: function setup() {
	      this.setup = new _setup2['default'](this.config);
	      this.setup.configureApp();
	    }
	  }, {
	    key: 'mount',
	    value: function mount(config, name) {
	      console.log('mount', config, name);
	      if (typeof name === 'string') {
	        this.mountModule(config, name);
	      } else {
	        // mount directly
	        mountConfig(config);
	      }

	      return this;
	      // this.setup.configure(config);
	    }
	  }, {
	    key: 'mountModule',
	    value: function mountModule(config, name) {
	      this.config.mounted[name] = config;
	    }
	  }, {
	    key: 'mountConfig',
	    value: function mountConfig(config) {
	      this.config = Object.assign(this.config, config);
	    }
	  }]);
	  return Server;
	})();

	exports['default'] = Server;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _koa = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"koa\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _defaults = __webpack_require__(4);

	// import middleware from './middleware';

	// Usage new Setup(server, {})
	module.exports = (function () {
	  function Setup(config) {
	    babelHelpers.classCallCheck(this, Setup);

	    this.config = config;

	    // load server default configs
	    this.config.defaults = _defaults.defaults;
	  }

	  babelHelpers.createClass(Setup, [{
	    key: 'log',
	    value: function log(msg) {
	      this.config.logger.log(msg);
	    }
	  }, {
	    key: 'configureApp',

	    // app configuration
	    value: function configureApp() {
	      server.app = (0, _koa.koa)();

	      // mount all middleware
	      return middleware.mountAll(this.config);
	    }
	  }]);
	  return Setup;
	})();

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  port: 4000,
	  secret: 'haTd3Yw9IfSGpM5VfY9srGOd2N92GJ2aT4',
	  middlewares: ['compression', 'csrf', 'jwt', 'onerror', 'router', 'scss', 'static'],
	  views: {
	    root: 'views',
	    'static': {
	      root: 'public' // used to build rootPath
	    },
	    pages: {
	      root: 'pages',
	      available: ['index', 'prematch', 'live', 'casino', 'account']
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;