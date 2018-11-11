const Player = require('../Player.js');

class Executioner extends Player {
	constructor(client) {
		super(client);
		this.setFaction('NEUTRAL');
	}
	role() {

	}
	setExecutionerTarget(target) {
		this.executionerTarget = target;
	}
}

module.exports = Executioner;