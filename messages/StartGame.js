const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');
const PickNames = require('./PickNames.js');

function startGame(socket) {
    let players = TownOfSalem.getGame().getPlayerList();
    players.sendToAll(u.code(11) + u.code(0));
    setTimeout(function() {
        PickNames();
    }, 100);
}

module.exports = startGame;