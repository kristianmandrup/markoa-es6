'use strict';

// http://www.sitepoint.com/using-json-web-tokens-node-js/
import jwt from './jwt';

var decodeJwtToken = jwt.token;
    authErrorHandler = jwt.authErrorHandler;

export default {
  // TODO: , options
  mount: function(server) {
    server.app
      .use(decodeJwtToken)
      .use(authErrorHandler.unauthorizedAccess);
    return server;
  }
};