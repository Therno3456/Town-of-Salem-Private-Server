const TownOfSalem = require('../TownOfSalem.js');

function jailorChoseTarget(socket, data) {
    let players = TownOfSalem.getGame().getPlayerList();
    let player = players.getClient(socket);
    let jailTarget = data.charCodeAt(1) - 1;
    if(jailTarget == 30) {
        player.jailTarget = -1;
    }
    else {
        player.jailTarget = jailTarget;
    }
}

module.exports = jailorChoseTarget;