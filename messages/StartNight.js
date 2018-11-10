const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');
const State = require('../States.js');

function startNight() {
    let players = TownOfSalem.getGame().getPlayerList();
    TownOfSalem.getGame().setState(State.NIGHT);

    //perform night actions
    require('./HandleNightTransitionActions').handleBeforeNightTransitionActions();
    players.sendToAll(u.code(93) + u.code(0));
    require('./HandleNightTransitionActions').handleAfterNightTransitionActions();

    setTimeout(function() {
        require('./PerformNightActions')();
    }, 4000);
}

module.exports = startNight;