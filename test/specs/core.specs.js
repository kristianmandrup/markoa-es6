/* global Server */
describe('Core', function() {
  'use strict';

  it('Server exists', () => expect(Server).is.not.undefined );

  it('it can send friendly messages', () => {
    let server = new Server();
    expect(server.message).is.equal('hi there Dear Coder!');
    // these white spaces will be trimmed
    server.message = '   goodbye';
    expect(server.message).is.equal('goodbye Dear Coder!');
  });

});