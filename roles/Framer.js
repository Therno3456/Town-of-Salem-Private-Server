const Player = require('../Player.js');

class Framer extends Player {
	constructor(client) {
		super(client);
		this.mafia = true;
		this.priority = 1;
	}
	role() {
		if(this.canPerformRole()) {
			this.target.framed = true;
			this.target.visit(this);
		}
	}
}

module.exports = Framer;