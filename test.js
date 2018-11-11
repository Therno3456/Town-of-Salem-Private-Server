const Client = require('./Client.js');
const RoleBuilder = require('./RoleBuilder.js');

var x = new Client(0);

let Sheriff = RoleBuilder(9);
sheriff = new role

x = new Vigilante(0);
x.setTarget(new Sheriff(0));
x.role();

console.log(x.getFaction());

for(var x=0;x<this.clients.length;x++) {
	let role = RoleBuilder(shuffledRoles[x]);
	console.log(role);
	role = new role(this.clients[x]);
	this.clients[x] = role;
	this.clients[x].roleIndex = shuffledRoles[x];
	this.clients[x].position = x;
	//TEST CODE
	//this.clients[x].will = 'HELLO';
	//END TEST CODE
}