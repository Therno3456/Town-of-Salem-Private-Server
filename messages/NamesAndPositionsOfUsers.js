const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');

function namesAndPositions() {
    let players = TownOfSalem.getGame().getPlayerList();
    let clients = players.getClients();
    var names = ['red', 'Edward Bishop', 'what', 'Squirtle', 'Pikachu', 'dirty dan', 'spongebob', 'Q', 'Y', 'potato', 'Z', 'mom', 'big boi', 'purple', 'seven']; 
    for(var x=0;x<clients.length;x++) { //for each client
        for(var y=0;y<clients.length;y++) { //send each client to them
            clients[y].ign = names[y];
            clients[x].write(u.code(91) + u.code(y+1) + clients[y].ign + u.code(0));
        }
    }
}

module.exports = namesAndPositions;