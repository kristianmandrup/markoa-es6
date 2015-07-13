'use strict';

export default {
  // TODO: , options = {}
  mount: function(server) {
    var compress = require('koa-compress');
    server.app.use(compress(
      {
        flush: require('zlib').Z_SYNC_FLUSH
      }
    ));
    return server;
  }
};