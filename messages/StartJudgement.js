const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');
const States = require('../States.js');

function startJudgement() {
    let players = TownOfSalem.getGame().getPlayerList();
    players.resetVotes();
    TownOfSalem.getGame().setState(States.JUDGEMENT);
    players.sendToAll(u.code(99) + u.code(0));
    setTimeout(function() {
        require('./SendJudgementVotes')();
    }, 3000);
}

module.exports = startJudgement;