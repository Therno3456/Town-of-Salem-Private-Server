const Player = require('../Player.js');

class Medium extends Player {
	constructor(client) {
		super(client);
		this.setFaction('TOWN');
	}
	role() {
		
	}
	reset() {
		this.attack = PowerStates.NONE;
		this.defense = PowerStates.NONE;
	}
}

module.exports = Medium;