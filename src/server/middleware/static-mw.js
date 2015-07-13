'use strict';

// TODO: use , options = {}
export default function(server) {
  var serveStatic = require('koa-static');

  server.app.use(serveStatic(server.static.rootPath));
  return server;
}