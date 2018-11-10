const Sheriff = require('./roles/Sheriff.js');
const Client = require('./Client.js');

var x = new Client(0);

x = new Sheriff(0);

console.log(x.constructor.name);