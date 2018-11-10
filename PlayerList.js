const ClientList = require('./ClientList.js');
const mode = require('./gamemodes/Classic');
const RoleBuilder = require('./RoleBuilder.js');
const State = require('./States.js');

class PlayerList {
	constructor() {
		this.clients = [];
		this.sorted = []; //list of players sorted in role priority order
	}
	addPlayer(socket, client = null) { //client is for testing purposes
		if(!client)
			client = ClientList.getClient(socket);
		this.clients.push(client);
	}
	removePlayer(socket) {
		for(var x=0;x<this.clients.length;x++) {
			if(this.clients[x].socket == socket) {
				this.clients.splice(x, 1);
				return;
			}
		}
	}
	fakePlayers() {
		var players = ['b', 'c', 'd'];
		for(var x=0;x<players.length;x++) {
			let client = ClientList.createFakeClient(players[x]);
			this.addPlayer(null, client);
		}
	}
	getNewlyDeadPlayers() {
		let dead = [];
		for(var x=0;x<this.clients.length;x++) {
			if(this.clients[x].dead && !this.clients[x].deathShown)
				dead.push(this.clients[x]);
		}
		return dead;
	}
	/*Returns dead players and mediums (if night time) for night time chat*/
	getDeadPlayers() {
		let dead = [];
		for(var x=0;x<this.clients.length;x++) {
			if(this.clients[x].dead)
				dead.push(this.clients[x]);
		}
		return dead;
	}
	numberOfPlayers() {
		return this.clients.length;
	}
	numberOfAlivePlayers() {
		let count = 0;
		for(var x=0;x<this.clients.length;x++) {
			if(!this.clients[x].dead)
				count++;
		}
		return count;
	}
	getClient(socket) {
		for(var x=0;x<this.clients.length;x++) {
			if(this.clients[x].socket == socket)
				return this.clients[x];
		}
		throw new Error("Client wasn't found in list.");
	}
	getClients() {
		return this.clients;
	}
	getSorted() {
		return this.sorted;
	}
	getUsername(socket) {
		for(var x=0;x<this.clients.length;x++) {
			if(this.clients[x].socket == socket) {
				return this.clients[x].username;
			}
		}
	}
	setIGN(socket, ign) {
		let client = this.getClient(socket);
		client.ign = ign;
	}
	getIndex(index) {
		return this.clients[index];
	}
	getRole(role) {
		for(var x=0;x<this.clients.length;x++) {
			if(this.clients[x].getClassName() == role)
				return this.clients[x];
		}
	}
	getSocketIndex(socket) {
		for(var x=0;x<this.clients.length;x++) {
			if(this.clients[x].socket == socket)
				return x;
		}
	}
	sendToAll(message) {
		for(var x=0;x<this.clients.length;x++) {
			this.clients[x].write(message);
		}
	}
	sendToAllExcept(socket, message) {
		for(var x=0;x<this.clients.length;x++) {
			if(this.clients[x].socket != socket)
				this.clients[x].write(message);
		}
	}
	randomizeUsers() {
		console.log("NAMES ARE NOT BEING SHUFFLED");
		//this.clients = u.shuffle(this.clients);
		//let shuffledRoles = u.shuffle(mode(this.clients.length));
		console.log("ROLES ARE NOT BEING SHUFFLED");
		let shuffledRoles = mode(this.clients.length);
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
		this.sortRoleOrder();
	}
	sortRoleOrder() {
		this.sorted = [...this.clients].sort(function(p1, p2) {
			return p1.priority > p2.priority;
		});
		console.log(this.sorted);
	}
	getMafiaMembers() {
		let mafia = [];
		for(var x=0;x<this.clients.length;x++) {
			let player = this.clients[x];
			if(player.isMafiaRole())
				mafia.push(player);
		}
		return mafia;
	}
	resetVotes() {
		for(var x=0;x<this.clients.length;x++) {
			this.clients[x].voteTarget = 2; //abstain
		}
	}
}

module.exports = PlayerList;