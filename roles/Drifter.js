const Player = require('../Player.js');

class Drifter extends Player {
	constructor(client) {
		super(client);
		this.setFaction('NEUTRAL');
	}
	reset() {
		this.attack = PowerStates.NONE;
		this.defense = PowerStates.NONE;
	}
}

module.exports = Drifter;