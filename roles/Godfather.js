const Player = require('../Player.js');
const PowerStates = require('../PowerStates.js');

class Godfather extends Player {
	constructor(client) {
		super(client);
		this.priority = 3;
		this.attack = PowerStates.BASIC;
		this.setFaction('MAFIA');
	}
	role() {

	}
	reset() {
		this.attack = null;
		this.defense = PowerStates.BASIC;
	}
}

module.exports = Godfather;