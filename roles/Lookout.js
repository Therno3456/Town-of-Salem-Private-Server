const Player = require('../Player.js');
const u = require('../Utilities.js');

class Lookout extends Player {
	constructor(client) {
		super(client);
		this.priority = 5;
		this.setFaction('TOWN');
	}
	role() {
		if(this.canPerformRole()) {
			let visits = u.shuffle(this.target.getVisits());
			for(var x=0;x<visits.length;x++) {
				this.addMessage(u.code(102) + u.code(visits[x].position + 1) + u.code(0));
			}
			this.target.visit(this);
		}
	}
}

module.exports = Lookout;