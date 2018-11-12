const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');

module.exports = {
    handleBeforeNightTransitionActions() {
        let players = TownOfSalem.getGame().getPlayerList();
        let jailor = players.getRole('Jailor');
        players = players.getClients();
        for(var x=0;x<players.length;x++) {
            if(players[x].abilities) {
                players[x].write(u.code(131) + u.code(players[x].abilities + 1) + u.code(0));
            }
        }
        if(jailor) {
            let jailed = players.getIndex(jailor.jailTarget);
            if(jailed) { //jailor chose to jail someone
                jailor.jailTarget = jailed;
                jailed.jailor = jailor;
                jailor.write(u.code(116) + u.code(jailed.position + 1) + u.code(1 + 1) + u.code(1) + u.code(0)); //second 1 is executed town or not
                jailed.write(u.code(115) + u.code(0));
            }
        }
    },
    handleAfterNightTransitionActions() {
        let players = TownOfSalem.getGame().getPlayerList();
        let jailor = players.getRole('Jailor');
        if(jailor) {
            let jailed = players.getIndex(jailor.jailTarget);
            if(!jailed) {
                jailor.write(u.code(19) + u.code(108) + u.code(0));
            }
        }
    }
}