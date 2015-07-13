'use strict';

export default class Server {
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
  constructor(config = {}) {
    console.log('Server  constructor');
    this.config = {
      mounted: {}
    };
    console.log('initial', this.config);
    this.config = Object.assign(this.config, config);
    console.log('merged', this.config);
  }

  mount(config, name) {
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

  mountModule(config, name) {
    this.config.mounted[name] = config;
  }

  mountConfig(config) {
    this.config = Object.assign(this.config, config);
  }
}