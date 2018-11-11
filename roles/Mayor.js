const Player = require('../Player.js');

class Mayor extends Player {
	constructor(client) {
		super(client);
		this.setFaction('TOWN');
	}
	reset() {
		this.attack = null;
		this.defense = null;
	}
}

module.exports = Mayor;