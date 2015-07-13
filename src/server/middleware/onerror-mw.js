'use strict';

var onerror = require('koa-onerror');

var errorTemplates = {
  active: null,
  default: './views/pages/error/error.marko'
};

var errorHandlers = {
  // text error handler
  text: function(err) {
    throw err;
  },

  // json error handler
  json: function(err) {
    throw err;
  },

  // html error handler
  html: function(err) {
    throw err;
  },

  // default html error handler template path
  template: errorTemplatePath
};

export default {
  // TODO , options = {}
  mount: function(server) {
    var errorPage = require('../index').views.pages.error;

    // We need to make error handlers available on server object for overrides
    // by apps
    server.handlers.error = errorHandlers;

    errorTemplates.active = errorPage || errorTemplates.default;

    onerror(server.app, errorHandlers);
    return server;
  }
};