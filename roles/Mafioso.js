const Player = require('../Player.js');

class Mafioso extends Player {
	constructor(client) {
		super(client);
		this.mafia = true;
		this.priority = 3;
	}
	role() {
		if(this.canPerformRole())
			this.target.kill();
	}
}

module.exports = Mafioso;