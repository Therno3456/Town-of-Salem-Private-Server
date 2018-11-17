const Player = require('../Player.js');
const PowerStates = require('../PowerStates.js');

class Ventriloquist extends Player {
	constructor(client) {
		super(client);
		this.mafia = true;
		this.priority = 2;
		this.setFaction('MAFIA');
	}
	role() {
        //dont do if dead?
		if(this.canPerformRole()) {
            this.target.visit(this);
            this.target.possessed = true;
		}
	}
	reset() {
		super.reset();
		this.attack = PowerStates.NONE;
		this.defense = PowerStates.NONE;
	}
}

module.exports = Ventriloquist;