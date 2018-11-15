const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');

function namesAndPositions() {
    let players = TownOfSalem.getGame().getPlayerList();
    let clients = players.getClients();
    var names = ['blue', 'Jonathan Corwin', 'hay', 'Edward Bishop', 'Samuel Parris', 'Q', 'Wut', 'X', 'W', 'A', 'potato', 'smart potato', 'B', 'carl', 'big man']; 
    for(var x=0;x<clients.length;x++) { //for each client
        for(var y=0;y<clients.length;y++) { //send each client to them
            clients[y].ign = names[y];
            clients[x].write(u.code(91) + u.code(y+1) + clients[y].ign + u.code(0));
        }
    }
}

module.exports = namesAndPositions;