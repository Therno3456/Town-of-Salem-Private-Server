const Player = require('../Player.js');
const u = require('../Utilities.js');

class Jailor extends Player {
	constructor(client) {
		super(client);
		this.priority = 4;
		this.setFaction('TOWN');
	}
	role() {
		
	}
	reset() {
		this.attack = PowerStates.NONE;
		this.defense = PowerStates.NONE;
	}
}

module.exports = Jailor;