const Player = require('../Player.js');
const u = require('../Utilities.js');
const AbilityType = require('../AbilityType.js');

class Veteran extends Player{
	constructor(client) {
		super(client);
		this.priority = 0;
		this.abilities = 3;
		this.attack = PowerStates.POWERFUL;
		this.setFaction('TOWN');
	}
	role() {
		this.defense = PowerStates.BASIC;
		this.alert = true;
	}
	reset() {
		this.attack = PowerStates.POWERFUL;
		this.defense = PowerStates.NONE;
		this.alert = false;
	}
	visit(visitor, abilityType) {
		if(this.alert) {
			switch(abilityType) {
				case AbilityType.ROLEBLOCK:
					this.addMessage(u.code(19) + u.code(78) + u.code(0)); //Someone tried to role block you but you are immune!
				break;
				case AbilityType.ATTACK:
					this.addMessage(u.code(19) + u.code(86) + u.code(0)); //someone tried to attack you but your defense while on alert was too strong!
				break;
			}
			visitor.addMessage(u.code(19) + u.code(21) + u.code(0)); //You were shot by the veteran you visited!
			visitor.kill(10, this);
		}
	}
}

module.exports = Veteran;