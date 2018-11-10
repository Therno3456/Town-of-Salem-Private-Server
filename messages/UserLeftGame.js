const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');

function userLeftGame(socket) {
    let players = TownOfSalem.getGame().getPlayerList();
    let id = players.getSocketIndex(socket) + 1;
    players.sendToAllExcept(socket, u.code(5) + u.code(2) + u.code(2) + u.code(id) + u.code(0));
    players.removePlayer(socket);
    socket.write(u.code(40) + u.code(0));
}

module.exports = userLeftGame;