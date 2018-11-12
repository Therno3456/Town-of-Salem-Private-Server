const Player = require('../Player.js');

class Drifter extends Player {
	constructor(client) {
		super(client);
		this.setFaction('NEUTRAL');
	}
	role() {

	}
	visit(visitor, abilityType) {
		if(this.target) {
			visitor.target = this.target;
			this.target.visit(visitor, abilityType);
		}
	}
	reset() {
		this.attack = PowerStates.NONE;
		this.defense = PowerStates.NONE;
	}
}

module.exports = Drifter;