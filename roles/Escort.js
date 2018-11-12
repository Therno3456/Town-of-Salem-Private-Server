const Player = require('../Player.js');
const AbilityType = require('../AbilityType.js');

class Escort extends Player {
	constructor(client) {
		super(client);
		this.priority = 0;
		this.setFaction('TOWN');
	}
	role() {
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