const Player = require('../Player.js');

class Medium extends Player {
	constructor(client) {
		super(client);
		this.setFaction('TOWN');
	}
	role() {
		
	}
}

module.exports = Medium;