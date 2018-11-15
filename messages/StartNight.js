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

    let drifter = players.getRole('Drifter');
    drifter.target = players.getIndex(2);

    setTimeout(function() {
        require('./PerformNightActions')();
    }, 30000);
}

module.exports = startNight;