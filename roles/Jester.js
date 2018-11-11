const Player = require('../Player.js');

class Jester extends Player {
	constructor(client) {
		super(client);
		this.setFaction('NEUTRAL');
	}
	role() {
		if(this.target) {
			this.target.addMessage(u.code(19) + u.code(84) + u.code(0));
			this.target.kill(7);
		}	
	}
}

module.exports = Jester;