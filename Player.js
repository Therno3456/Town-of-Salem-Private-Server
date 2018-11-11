const Client = require('./Client.js');
const u = require('./Utilities.js');
const Factions = require('./Factions.js');

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
	canPerformRole() {
		if(!this.target)
			return false;
			//if jailor or if roleblocked etc
		if(this.roleblocked) {
			this.addMessage(u.code(19) + u.code(9) + u.code(0));
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
			return false;
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
		if(role == 'Jailor')
			this.jailTarget = -1;
	}
	visit(visitor) {
		this.visits.push(visitor);
	}
	setRoleBlocked() {
		let role = this.getClassName();
		if(role == 'SerialKiller') {
			this.addMessage(u.code(19) + u.code(25) + u.code(0)); //You were murdered by the Serial Killer you visited!
			this.dead = true;
		}
			
		else {
			this.roleblocked = true;
		}
	}
	setHealed() {
		this.healed = true;
	}
	kill(who) {
		if(this.healed) {
			this.target.addMessage(u.code(19) + u.code(16) + u.code(0)); //You were attacked but someone nursed you back to health!
		}
		else {
			this.dead = true;
			this.killer = who;
			this.addMessage(u.code(106) + u.code(0));
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