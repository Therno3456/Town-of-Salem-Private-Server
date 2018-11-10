const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');
const States = require('../States.js');

function startVoting() {
    let players = TownOfSalem.getGame().getPlayerList();
    TownOfSalem.getGame().setState(States.VOTING);
    //NOTE
    //first time only we send 30
    players.sendToAll(u.code(97) + u.code(30) + u.code(0));
    TownOfSalem.timer = setTimeout(function() {
        require('./StartNightTransition')();
    }, 5000)
}

module.exports = startVoting;