const Player = require('../Player.js');
const PowerStates = require('../PowerStates.js');

class Executioner extends Player {
	constructor(client) {
		super(client);
		this.defense = PowerStates.BASIC;
		this.setFaction('NEUTRAL');
	}
	role() {

	}
	setExecutionerTarget(target) {
		this.executionerTarget = target;
	}
	reset() {
		this.attack = null;
		this.defense = PowerStates.BASIC;
	}
}

module.exports = Executioner;