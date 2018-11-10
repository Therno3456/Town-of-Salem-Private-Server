const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');

function roleAndPosition(socket) {
    let playerList = TownOfSalem.getGame().getPlayerList();
    let length = playerList.numberOfPlayers();
    playerList = playerList.getClients();
    
    for(var x=0;x<length;x++) { //for each player
        let player = playerList[x];
        player.write(u.code(92) + u.code(player.roleIndex+1) + u.code(x+1) + u.code(0));
    }
}

module.exports = roleAndPosition;