const Player = require('../Player.js');
const u = require('../Utilities.js');

class Veteran extends Player{
	constructor(client) {
		super(client);
		this.priority = 6;
		this.abilities = 3;
		this.setFaction('TOWN');
	}
	role() {
		let visits = this.getVisits();
		for(var x=0;x<visits.length;x++) {
			this.addMessage(u.code(19) + u.code(86) + u.code(0));
			console.log(visits[x]);
			visits[x].addMessage(u.code(19) + u.code(21) + u.code(0));
			visits[x].kill(10);
		}
	}
	reset() {
		this.attack = PowerStates.NONE;
		this.defense = PowerStates.NONE;
	}
}

module.exports = Veteran;