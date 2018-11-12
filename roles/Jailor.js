const Player = require('../Player.js');
const PowerStates = require('../PowerStates.js');
const AbilityType = require('../AbilityType.js');
const Factions = require('../Factions.js');

class Jailor extends Player {
	constructor(client) {
		super(client);
		this.priority = 5;
		this.abilities = 3;
		this.killedTown = false;
		this.attack = PowerStates.POWERFUL;
		this.setFaction('TOWN');
	}
	role() {
		if(this.canPerformRole(AbilityType.ATTACK)) {
			this.target.kill(1, this);
			this.target.visit(this, AbilityType.ATTACK);
			this.abilities--;
			if(this.target.getFaction() == Factions.TOWN) {
				this.killedTown = true;
				this.abilities = 0;
			}
		}
	}
	reset() {
		this.attack = PowerStates.POWERFUL;
		this.defense = PowerStates.NONE;
	}
}

module.exports = Jailor;