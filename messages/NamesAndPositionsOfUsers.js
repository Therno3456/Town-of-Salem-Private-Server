const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');

function namesAndPositions() {
    let players = TownOfSalem.getGame().getPlayerList();
    let clients = players.getClients();
    for(var x=0;x<clients.length;x++) { //for each client
        for(var y=0;y<clients.length;y++) { //send each client to them
            clients[y].ign = y;
            clients[x].write(u.code(91) + u.code(y+1) + clients[y].ign + u.code(0));
        }
    }
}

module.exports = namesAndPositions;