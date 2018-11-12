const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');
const States = require('../States.js');

function sendJudgementVotes() {
    let playerList = TownOfSalem.getGame().getPlayerList();
    let clients = playerList.getClients();
    let guilty = 0;
    let innocent = 0;
    for(var x=0;x<clients.length;x++) {
        let player = clients[x];
        if(player.voteTarget == 0)
            guilty++;
        else if(player.voteTarget == 1)
            innocent++;
        playerList.sendToAll(u.code(120) + u.code(player.position + 1) + u.code(player.voteTarget + 1) + u.code(0));
    }
    if(guilty > innocent) {
        TownOfSalem.getGame().setState(States.LASTWORDS);
        playerList.sendToAll(u.code(100) + u.code(guilty + 1) + u.code(innocent + 1) + u.code(0));
        setTimeout(function() {
            require('./StartLastWords')();
        }, 3000);
    }
    else {
        playerList.sendToAll(u.code(101) + u.code(guilty + 1) + u.code(innocent + 1) + u.code(0));
        setTimeout(function() {
            require('./StartVoting')();
        }, 5000);
    }
}

module.exports = sendJudgementVotes;