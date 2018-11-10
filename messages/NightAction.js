const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');

function nightAction(socket, data) {
    let players = TownOfSalem.getGame().getPlayerList();
    let target = players.getIndex(data.charCodeAt(1) - 1);
    let player = players.getClient(socket);
    player.setTarget(target);

    //TEST CODE
    //require('./PerformNightActions')();
    //END TEST CODE
}

module.exports = nightAction;