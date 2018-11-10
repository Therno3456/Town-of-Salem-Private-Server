const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');
const State = require('../States.js');
const StartFirstDay = require('./StartFirstDay.js');

function firstDayTransition() {
    let players = TownOfSalem.getGame().getPlayerList();
    TownOfSalem.getGame().setState(State.DAY);
    players.sendToAll(u.code(151) + u.code(0));
    setTimeout(function() {
        StartFirstDay();
    }, 500);
}

module.exports = firstDayTransition;