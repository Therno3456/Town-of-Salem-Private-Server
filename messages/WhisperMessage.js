const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');

function whisperMessage(socket, data) {
    let players = TownOfSalem.getGame().getPlayerList();
    let whisperer = players.getClient(socket);
    let whisperTarget = players.getIndex(data.charCodeAt(1) - 1);

    players.sendToAll(u.code(159) + u.code(whisperer.position + 1) + u.code(whisperTarget.position + 1) + u.code(0));
    whisperer.write(u.code(160) + u.code(1) + u.code(whisperTarget.position + 1) + data.slice(3) + u.code(0));
    whisperTarget.write(u.code(160) + u.code(2) + u.code(whisperer.position + 1) + data.slice(3) + u.code(0));
}

module.exports = whisperMessage;