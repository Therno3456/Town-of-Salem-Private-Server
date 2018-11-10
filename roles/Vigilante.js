const Player = require('../Player.js');

class Vigilante extends Player {
	constructor(client) {
		super(client);
		this.priority = 3;
	}
	role() {
		if(this.canPerformRole()) {
			this.target.kill(2);
			this.target.visit(this);
		}
	}
}

module.exports = Vigilante;