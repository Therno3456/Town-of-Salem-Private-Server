const Player = require('../Player.js');

class SerialKiller extends Player {
	constructor(client) {
		super(client);
		this.priority = 3;
		this.setFaction('NEUTRAL');
	}
	role() {
		if(this.canPerformRole()) {
			this.target.kill(5);
			this.target.visit(this);
		}
	}
}

module.exports = SerialKiller;