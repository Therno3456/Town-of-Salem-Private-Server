const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');
const States = require('../States.js');

function startLastWords() {
    let players = TownOfSalem.getGame().getPlayerList();
    //state is set in SendJudgementVotes
    setTimeout(function() {
        let p = TownOfSalem.getGame().getTargetOnStand();
        players.sendToAll(u.code(147) + u.code(0));
        setTimeout(function() {
            TownOfSalem.getGame().setState(States.DISCUSSION);
            p.lynch();
            require('./HasExecutionerWon')(p);
            require('./WasJesterLynched')(p);
            require('./WhoDiedAndHow')(p).then(function() {
                if(!require('./CheckWinners')()) {
                    require('./StartNightTransition')();
                }
            });
        }, 3000);
    }, 5000);
}

module.exports = startLastWords;