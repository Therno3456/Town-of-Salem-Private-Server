const Player = require('../Player.js');

class Medium extends Player {
	constructor(client) {
		super(client);
		this.setFaction('TOWN');
	}
	role() {
		
	}
	reset() {
		this.attack = null;
		this.defense = null;
	}
}

module.exports = Medium;