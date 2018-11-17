const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');
const State = require('../States.js');
const StartNightTransition = require('./StartNightTransition.js');

function startFirstDay() {
    let players = TownOfSalem.getGame().getPlayerList();
    players.sendToAll(u.code(114) + u.code(0));
    TownOfSalem.getGame().getState(State.DISCUSSION);
    setTimeout(function() {
        StartNightTransition();
    }, 1000);
}

module.exports = startFirstDay;