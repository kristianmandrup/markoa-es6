'use strict';

var csrfAsserter = function* () {
  var body = yield parse(this); // co-body or something
  try {
    this.assertCSRF(body);
  } catch (err) {
    this.status = 403;
    this.body = {
      message: 'The CSRF token is invalid!'
    };
    return;
  }
};

var csrfInjector = function* () {
  if (this.method === 'GET') {
    this.body = this.csrf;
  } else if (this.method === 'POST') {
    this.status = 204;
  }
};

// https://github.com/koajs/csrf
export default {
  // TODO: , options = {}
  mount: function(server) {
    var csrf = require('koa-csrf');
    var session = require('koa-session');
    var app = server.app;

    app.keys = [server.secrets.csrf];
    app.use(session());
    csrf(app);
    app
      .use(csrf.middleware)
      .use(csrfInjector)
      .use(csrfAsserter);

    return server;
  }
};