const Player = require('../Player.js');
const u = require('../Utilities.js');

class Jailor extends Player {
	constructor(client) {
		super(client);
		this.priority = 4;
	}
	role() {
		
	}
}

module.exports = Jailor;