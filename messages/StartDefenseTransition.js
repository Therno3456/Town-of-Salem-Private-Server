const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');
const States = require('../States.js');

function startDefenseTransition(playerPosition) {
    clearTimeout(TownOfSalem.timer);
    let players = TownOfSalem.getGame().getPlayerList();
    TownOfSalem.getGame().setState(States.DEFENSETRANSITION);
    players.sendToAll(u.code(98) + u.code(playerPosition) + u.code(0));
    setTimeout(function() {
        require('./StartDefense')();
    }, 5000);
}

module.exports = startDefenseTransition;