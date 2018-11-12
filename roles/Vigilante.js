const Player = require('../Player.js');
const Factions = require('../Factions.js');
const u = require('../Utilities.js');
const PowerStates = require('../PowerStates.js');
const AbilityType = require('../AbilityType.js');

class Vigilante extends Player {
	constructor(client) {
		super(client);
		this.priority = 4;
		this.abilities = 3;
		this.killedTown = false;
		this.attack = PowerStates.BASIC;
		this.setFaction('TOWN');
	}
	role() {
		if(this.killedTown) {
			this.addMessage(u.code(19) + u.code(89) + u.code(0));
			this.kill(2, this);
		}
		if(this.canPerformRole(AbilityType.ATTACK)) {
			this.target.kill(2, this);
			this.target.visit(this);
			if(this.target.getFaction() == Factions.TOWN) {
				this.addMessage(u.code(158) + u.code(0));
				this.killedTown = true;
				this.abilities = 0;
			}
		}
	}
	reset() {
		this.attack = PowerStates.BASIC;
		this.defense = PowerStates.NONE;
	}
}

module.exports = Vigilante;