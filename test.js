const Client = require('./Client.js');
const Veteran = require('./roles/Veteran.js');
const RoleBuilder = require('./RoleBuilder.js');

var x = new Client(0);

let a = new Veteran(x);
a.visit();