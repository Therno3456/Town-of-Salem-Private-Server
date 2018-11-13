class Retributionist {
	constructor() {
		
	}
	role() {
		this.canPerformRole();
	}
	reset() {
		this.attack = PowerStates.NONE;
		this.defense = PowerStates.NONE;
	}
}

module.exports = Retributionist;