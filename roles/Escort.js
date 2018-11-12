const Player = require('../Player.js');
const AbilityType = require('../AbilityType.js');
const PowerStates = require('../PowerStates.js');

class Escort extends Player {
	constructor(client) {
		super(client);
		this.priority = 1;
		this.attack = PowerStates.BASIC;
		this.setFaction('TOWN');
	}
	role() {
		this.kill(5, this);
		if(this.canPerformRole(AbilityType.ROLEBLOCK)) {
			this.target.setRoleBlocked(this);
			this.target.visit(this);
		}
	}
	reset() {
		this.attack = PowerStates.NONE;
		this.defense = PowerStates.NONE;
	}
}

module.exports = Escort;