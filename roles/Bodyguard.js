const Player = require('../Player.js');

class Bodyguard extends Player {
	constructor(client) {
		super(client);
		this.setFaction('TOWN');
	}
	reset() {
		super.reset();
		this.attack = PowerStates.NONE;
		this.defense = PowerStates.NONE;
	}
}

module.exports = Bodyguard;