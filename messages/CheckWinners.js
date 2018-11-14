const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');
const Roles = require('../Roles.js');

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
    if(filtered.length == 1) { //only 1 faction alive
        let winner = factions.indexOf(filtered[0]);
        switch(winner) {
            case 0:
                players.sendToAll(u.code(135) + u.code(1) + u.code(0));
                return true;
            case 1:
                players.sendToAll(u.code(135) + u.code(2) + u.code(0));
                return true;
            case 2:
                players.sendToAll(u.code(135) + u.code(3) + u.code(0));
                return true;
        }
    }
    //1 town
    //2 maf
    //3 sk
}

module.exports = checkWinners;