const Player = require('../Player.js');

class Escort extends Player {
	constructor(client) {
		super(client);
		this.priority = 0;
	}
	role() {
		if(this.canPerformRole()) {
			this.target.setRoleBlocked();
			this.target.visit(this);
		}
	}
}

module.exports = Escort;