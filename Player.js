const Client = require('./Client.js');
const u = require('./Utilities.js');
const Factions = require('./Factions.js');
const AbilityType = require('./AbilityType.js');

class Player extends Client {
	constructor(client) {
		super(client.socket, client.username);
		this.messageQueue = [];
		this.visits = [];
		this.position = -1;
		this.framed = false;
		this.roleblocked = false;
		this.voteTarget = -1;
		this.voteCount = 9; //3 for mayor
		this.priority = 9;
	}
	addMessage(message) {
		this.messageQueue.push(message);
	}
	setTarget(target) {
		this.target = target;
	}
	getMessages() {
		return this.messageQueue;
	}
	getClassName() {
		return this.constructor.name;
	}
	getVisits() {
		return this.visits;
	}
	/*NYI*/
	canPerformRole(abilityType) {
		let role = this.getClassName();
		if(!this.target)
			return false;
		if(this.roleblocked) {
			this.addMessage(u.code(19) + u.code(9) + u.code(0));
		}
		else if(this.target.jailed) {
			if(abilityType == AbilityType.ROLEBLOCK) {
				this.target.addMessage(u.code(19) + u.code(8) + u.code(0));
			}
			else if(abilityType == AbilityType.ATTACK) {
				this.target.addMessage(u.code(19) + u.code(14) + u.code(0));
			}
			this.addMessage(u.code(19) + u.code(165) + u.code(0));
		}
		else {
			return true;
		}
	}
	/*Returns status of whether a player should show up as mafia or not.*/
	isMafia() {
		if(this.getClassName() == 'Godfather')
			return false;
		else if(this.framed)
			return true;
		return this.mafia;
	}
	/*Returns whether a role is part of the mafia or not. Includes godfather while isMafia doesn't.*/
	isMafiaRole() {
		let role = this.getClassName();
		switch(role) {
			case 'Mafioso':
			case 'Godfather':
			case 'Framer':
			case 'Blackmailer':
			case 'Consigliere':
			case 'Janitor':
			case 'Forger':
				return true;
		}
	}
	reset() {
		let role = this.getClassName();
		this.messageQueue = [];
		this.visits = [];
		this.healed = false;
		this.roleblocked = false;
		this.framed = false;
		this.jailor = null;
		this.target = null;
		if(role == 'Jailor')
			this.jailTarget = -1;
	}
	visit(visitor) {
		this.visits.push(visitor);
	}
	setRoleBlocked(roleBlocker) {
		let role = this.getClassName();
		if(role == 'SerialKiller') {
			roleBlocker.addMessage(u.code(19) + u.code(25) + u.code(0)); //You were murdered by the Serial Killer you visited!
			this.addMessage(u.code(19) + u.code(90) + u.code(0)); //Someone roleblocked you so you attacked them!
			this.target = null;
			roleBlocker.kill(5);
		}
		else {
			this.roleblocked = true;
		}
	}
	setHealed() {
		this.healed = true;
	}
	kill(who, attacker) {
		if(this.healed) {
			this.target.addMessage(u.code(19) + u.code(16) + u.code(0)); //You were attacked but someone nursed you back to health!
		}
		else if(attacker.attack > this.defense) {
			this.dead = true;
			this.killer = who;
			this.addMessage(u.code(106) + u.code(0));
		}
		else {
			attacker.addMessage(u.code(19) + u.code(98) + u.code(0)); //Your target's defense was too strong to kill.
			this.addMessage(u.code(19) + u.code(43) + u.code(0)); //Someone attacked you but your defense was too strong!
		}
	}
	setFaction(faction) {
		this.faction = Factions[faction];
	}
	getFaction() {
		return this.faction;
	}
}

module.exports = Player;