const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');

function joinLobby(socket) {
	let players = TownOfSalem.getGame().getPlayerList();
	players.addPlayer(socket);
	let clients = players.getClients();
	let personJoining = players.getUsername(socket); //username of player joining
	
	let response = [];
	if(TownOfSalem.getGame().getPlayerList().numberOfPlayers() == 1) {
		socket.write(u.code(2) + u.code(2) + u.code(1) + u.code(0)); //host
	}
	else {
		socket.write(u.code(2) + u.code(1) + u.code(1) + u.code(0)); //client
		players.sendToAllExcept(socket, u.code(4) + u.code(1) + u.code(2) + personJoining + '*' + u.code(clients.length) + u.code(1) + u.code(0)); //send new player to everyone
	}

	for(var x=0;x<clients.length;x++) {
		if(x == 0)
			socket.write(u.code(4) + u.code(2) + u.code(1) + clients[x].username + '*' + u.code(x+1) + u.code(1) + u.code(0));
		else
			socket.write(u.code(4) + u.code(1) + u.code(1) + clients[x].username + '*' + u.code(x+1) + u.code(1) + u.code(0));
	}
	setTimeout(function() {
		players.fakePlayers(); //fake players
	}, 200);
	
}

module.exports = joinLobby;