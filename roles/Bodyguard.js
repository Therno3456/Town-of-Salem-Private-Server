const Player = require('../Player.js');

class Bodyguard extends Player {
	constructor(client) {
		super(client);
		this.setFaction('TOWN');
	}
}

module.exports = Bodyguard;