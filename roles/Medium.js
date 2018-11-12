const Player = require('../Player.js');
const PowerStates = require('../PowerStates.js');

class Medium extends Player {
	constructor(client) {
		super(client);
		this.setFaction('TOWN');
		this.attack = PowerStates.BASIC;
	}
	role() {
		this.kill(5, this);
	}
	reset() {
		this.attack = PowerStates.NONE;
		this.defense = PowerStates.NONE;
	}
}

module.exports = Medium;