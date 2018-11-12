const TownOfSalem = require('../TownOfSalem.js');
const States = require('../States.js');

function performNightActions() {
    let players = TownOfSalem.getGame().getPlayerList().getSorted();
    for(var x=0;x<players.length;x++) {
        players[x].role();
    }
    for(var x=0;x<players.length;x++) {
        players[x].writeMultiple(players[x].getMessages());
    }
    TownOfSalem.getGame().setState(States.DAYTRANSITION); //set state here to stop messages from sending after night is done
    setTimeout(function() {
        require('./StartDay')();
    }, 5000);
}

module.exports = performNightActions;