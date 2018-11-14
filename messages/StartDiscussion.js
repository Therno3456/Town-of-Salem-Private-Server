const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');
const States = require('../States.js');

function startDiscussion() {
    let game = TownOfSalem.getGame();
    let players = game.getPlayerList();
    game.setState(States.DISCUSSION);
    game.time = 30;
    game.numberOfTrials = 3;
    players.reset();
    players.sendToAll(u.code(96) + u.code(0));
    setTimeout(function() {
        require('./StartVoting')();
    }, 1000);
}

module.exports = startDiscussion;