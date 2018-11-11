const Player = require('../Player.js');

class Bodyguard extends Player {
	constructor(client) {
		super(client);
		this.setFaction('TOWN');
	}
	reset() {
		this.attack = null;
		this.defense = null;
	}
}

module.exports = Bodyguard;