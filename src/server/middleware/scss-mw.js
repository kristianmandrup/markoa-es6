'use strict';

export default {
  // TODO: , options = {}
  mount: function(server) {
    var scss = require('koa-scss');

    server.app.use(scss({
        src: server.stylesheets.scss.srcPath,
        dest: server.static.stylesheets.path,
        debug: true,
        force: true
    }));
    return server;
  }
};
