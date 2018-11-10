const TownOfSalem = require('../TownOfSalem.js');

function performNightActions() {
    let players = TownOfSalem.getGame().getPlayerList().getSorted();
    for(var x=0;x<players.length;x++) {
        players[x].role();
    }
    for(var x=0;x<players.length;x++) {
        players[x].writeMultiple(players[x].getMessages());
    }
    setTimeout(function() {
        require('./StartDay')();
    }, 5000);
}

module.exports = performNightActions;