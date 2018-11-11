const Player = require('../Player.js')

class Godfather extends Player {
	constructor(client) {
		super(client);
		this.priority = 3;
		this.setFaction('MAFIA');
	}
	role() {
		console.log('godfather role');
	}
}

module.exports = Godfather;