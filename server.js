'use strict';

module.exports = class Server {
  static defaultOpts() {
    return {port: 4000, root: __dirname};
  }

  constructor(options = {}) {
    this.options = Object.assign(Server.defaultOpts, options);
    this.server = require('./lib/server').build(this.options);
  }

  configure(conf) {
    // configure koa app for Marko rendering
    this.app = this.server.configure(options);

    return this;
  }

  run(options = {}) {
    return this.server.setup.run(options);
  }
}
