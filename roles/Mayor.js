const Player = require('../Player.js');

class Mayor extends Player {
	constructor(client) {
		super(client);
		this.setFaction('TOWN');
	}
}

module.exports = Mayor;