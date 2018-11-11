const Player = require('../Player.js');

class Mafioso extends Player {
	constructor(client) {
		super(client);
		this.mafia = true;
		this.priority = 3;
		this.setFaction('MAFIA');
	}
	role() {
		if(this.canPerformRole())
			this.target.kill();
	}
}

module.exports = Mafioso;