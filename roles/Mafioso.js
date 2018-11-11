const Player = require('../Player.js');
const PowerStates = require('../PowerStates.js');
const AbilityType = require('../AbilityType.js');

class Mafioso extends Player {
	constructor(client) {
		super(client);
		this.mafia = true;
		this.priority = 3;
		this.attack = PowerStates.BASIC;
		this.setFaction('MAFIA');
	}
	role() {
		if(this.canPerformRole(AbilityType.ATTACK))
			this.target.kill(3, this);
	}
	reset() {
		this.attack = PowerStates.BASIC;
		this.defense = null;
	}
}

module.exports = Mafioso;