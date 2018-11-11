const Player = require('../Player.js');
const Factions = require('../Factions.js');
const u = require('../Utilities.js');

class Vigilante extends Player {
	constructor(client) {
		super(client);
		this.priority = 3;
		this.killedTown = false;
		this.setFaction('TOWN');
	}
	role() {
		if(this.killedTown) {
			this.addMessage(u.code(19) + u.code(89) + u.code(0));
			this.kill(2);
		}
		if(this.canPerformRole()) {
			this.target.kill(2);
			this.target.visit(this);
			if(this.target.getFaction() == Factions.TOWN) {
				this.addMessage(u.code(158) + u.code(0));
				this.killedTown = true;
			}
		}
	}
}

module.exports = Vigilante;