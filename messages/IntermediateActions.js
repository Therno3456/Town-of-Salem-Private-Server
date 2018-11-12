const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');
const roles = require('../Roles.js');

function intermeditateActions() {
    let playerList = TownOfSalem.getGame().getPlayerList();
    let deadPlayers = playerList.getNewlyDeadPlayers();
    for(var x=0;x<deadPlayers.length;x++) {
        let player = deadPlayers[x];
        player.deathShown = true;
        if(player.getClassName() == 'Medium') {
            player.abilities = 1;
            player.write(u.code(131) + u.code(deadPlayers[x].abilities + 1) + u.code(0));
        }
        else if(player.executioner && !player.executioner.won) { //change into jester
            player.executioner.write(u.code(140) + u.code(0));
            playerList.switchRole(player.executioner, roles.JESTER);
        }
    }
}

module.exports = intermeditateActions;