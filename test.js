const Vigilante = require('./roles/Sheriff.js');
const Sheriff = require('./roles/Vigilante.js');
const Client = require('./Client.js');

var x = new Client(0);

x = new Vigilante(0);
x.setTarget(new Sheriff(0));
x.role();

console.log(x.getFaction());