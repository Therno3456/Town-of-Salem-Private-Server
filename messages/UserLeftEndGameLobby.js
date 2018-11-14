const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');

function userLeftEndGameLobby(socket) {
    TownOfSalem.getGame().getPlayerList().write()
    socket.write(u.code(40) + u.code(0));
}

module.exports = userLeftEndGameLobby;