const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');

function sendEndLobbyInfo(socket) {
    let message = u.code(171) + '242,Q'; //dont know what this is
    let players = TownOfSalem.getGame().getPlayerList();
    let clients = players.getClients();
    for(var x=0;x<clients.length;x++) {
        message += '(' + clients[x].ign + ',' + clients[x].username + ',' + u.code(clients[x].position + 1) + ',' + u.code(clients[x].roleIndex + 1) + '),';
    }
    message = message.slice(0, -1);
    message += u.code(0);
    socket.write(message);
}

module.exports = sendEndLobbyInfo;