'use strict';

export default {
  // TODO: , options = {}
  configure: function(server) {
    var mws = {};
    // use Object.keys ?
    for (mw in server.middlewares) {
      mws[mw] = require(`./${ms}-mw`);
      mw.mount(server, opts);
    }
    return server;
  }
};