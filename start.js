var Server = require('./server');

console.log('Run Server');

var options = {}; // {config: my-config}
new Server(options).run();
