const Player = require('../Player.js');

class Doctor extends Player {
	constructor(client) {
		super(client);
		this.priority = 1;
		this.setFaction('TOWN');
	}
	role() {
		if(this.canPerformRole())
			this.target.setHealed();
			this.target.visit(this);
	}
}

module.exports = Doctor;