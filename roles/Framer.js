const Player = require('../Player.js');

class Framer extends Player {
	constructor(client) {
		super(client);
		this.mafia = true;
		this.priority = 1;
		this.setFaction('MAFIA');
	}
	role() {
		if(this.canPerformRole()) {
			this.target.framed = true;
			this.target.visit(this);
		}
	}
	reset() {
		this.attack = PowerStates.NONE;
		this.defense = PowerStates.NONE;
	}
}

module.exports = Framer;