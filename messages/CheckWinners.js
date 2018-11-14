const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');
const Roles = require('../Roles.js');
const States = require('../States.js');

function checkWinners() {
    let players = TownOfSalem.getGame().getPlayerList();
    let alivePlayers = players.getAlivePlayers();
    let excluded = [Roles.EXECUTIONER, Roles.JESTER];
    //if(players.length == 2) {
        //stalemate table
    //}
    let factions = [0, 0, 0];
    //0 = town, 1 = mafia, 2 = neutral
    for(var x=0;x<alivePlayers.length;x++) {
        if(!excluded.includes(alivePlayers[x].roleIndex)) {
            factions[alivePlayers[x].getFaction()]++;
        }
    }
    let filtered = factions.filter(function(elem, index) {
        return elem > 0 ? index+1 : false; //0 is treated as false
    });
    if(filtered.length == 0) { //only 1 faction alive
        let winner = factions.indexOf(filtered[0]);
        let winningPlayers = players.getWinningFaction(winner);
        let message = u.code(135) + u.code(winner + 1);
        for(var x=0;x<winningPlayers.length;x++) {
            message += u.code(winningPlayers[x].position + 1);
        }
        message += u.code(0);
        players.sendToAll(message);
        TownOfSalem.getGame().setState(States.SOMEONEWON);
        return true;
    }
    else {
        return false;
    }
    //1 town
    //2 maf
    //3 sk
}

module.exports = checkWinners;