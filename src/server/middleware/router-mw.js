'use strict';

export default {
  // TODO , options = {}
  mount: function(server) {
    var router = require('koa-router'),
        app = server.app;
    app.use(router(app));
    return server;
  }
};