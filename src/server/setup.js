'use strict';

// Usage new Setup(server, {})
module.exports = class Setup {
  constructor(server, options) {
    var koa = require('koa');

    this.server = server;
    server.app = koa();
    var log = server.logger.log;

    log('configuring server', options);

    // load server default configs
    server.defaults = require('./defaults');

    // mount all middleware
    return require('./middleware').configure(server, options);
  }
};