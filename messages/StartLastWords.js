const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');
const States = require('../States.js');

function startLastWords() {
    let players = TownOfSalem.getGame().getPlayerList();
    TownOfSalem.getGame().setState(States.LASTWORDS);
    setTimeout(function() {
        let p = TownOfSalem.getGame().getTargetOnStand();
        players.sendToAll(u.code(147) + u.code(0));
        setTimeout(function() {
            TownOfSalem.getGame().setState(States.DISCUSSION);
            require('./WhoDiedAndHow')(p).then(function() {
                require('./StartNightTransition')();
            });
        }, 3000);
    }, 6000);
}

module.exports = startLastWords;