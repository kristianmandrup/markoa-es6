'use strict';

export default {
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
  configure: function(config, ...configs) {
    if (!config) {
      console.log('no config', config);
      return;
    }
    if (Array.isArray(config)) {
      configs = config;
    }

    if (configs) {
      for (let conf in configs)
        console.log(conf);
        // this.configure(config);
    }

    // this.setup.configure(config);
  }
};