'use strict';

export class TokenRetriever {
  constructor(request) {
    this.request = request;
  }

  get body() {
    return this.request.body;
  }

  get query() {
    return this.request.query;
  }

  get retrieveToken() {
    return this.headerToken || this.bodyToken || this.queryToken;
  }

  get bodyToken() {
    return this.body && this.body.access_token;
  }

  get queryToken() {
    return this.query && this.query.access_token;
  }

  get headerToken() {
    return this.request.headers['x-access-token'];
  }
}
