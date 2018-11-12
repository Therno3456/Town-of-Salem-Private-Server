const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');

function startDayTransition() {
    let players = TownOfSalem.getGame().getPlayerList();
    let deadPlayers = players.getNewlyDeadPlayers();
    //state is already set here from PerformNightActions
    let message = u.code(146);
    for(var x=0;x<deadPlayers.length;x++) {
        message += u.code(deadPlayers[x].position+1);
    }
    message += u.code(0);
    players.sendToAll(message);
    setTimeout(function() {
        require('./WhoDiedAndHow')().then(function() {
            require('./StartDiscussion')();
        });
    }, 5000);
}

module.exports = startDayTransition;