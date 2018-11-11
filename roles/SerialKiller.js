const Player = require('../Player.js');
const PowerStates = require('../PowerStates.js');
const AbilityType = require('../AbilityType.js');

class SerialKiller extends Player {
	constructor(client) {
		super(client);
		this.priority = 3;
		this.attack = PowerStates.BASIC;
		this.defense = PowerStates.BASIC;
		this.setFaction('NEUTRAL');
	}
	role() {
		if(this.canPerformRole(AbilityType.ATTACK)) {
			this.target.kill(5);
			this.target.visit(this);
		}
	}
	reset() {
		this.attack = PowerStates.BASIC;
		this.defense = PowerStates.BASIC;
	}
}

module.exports = SerialKiller;