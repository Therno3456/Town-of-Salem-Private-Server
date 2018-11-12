const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');
const States = require('../States.js');

function startDiscussion() {
    let players = TownOfSalem.getGame().getPlayerList();
    TownOfSalem.getGame().setState(States.DISCUSSION);
    TownOfSalem.getGame().time = 30;
    players.sendToAll(u.code(96) + u.code(0));
    setTimeout(function() {
        require('./StartVoting')();
    }, 1000);
}

module.exports = startDiscussion;