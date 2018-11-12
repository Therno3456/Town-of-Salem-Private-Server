const TownOfSalem = require('../TownOfSalem.js');
const u = require('../Utilities.js');
const States = require('../States.js');

function chatMessage(socket, data) {
    data = data.slice(0, -1);
    let players = TownOfSalem.getGame().getPlayerList();
    let player = players.getClient(socket);
    let index = players.getSocketIndex(socket) + 1;
    let state = TownOfSalem.getGame().getState();
    if(state == States.NIGHT) {
        let role = player.getClassName();
        if(player.jailor) { //person being jailed
            player.jailor.write(u.code(6) + u.code(index) + data.slice(1) + u.code(0));
            player.write(u.code(6) + u.code(index) + data.slice(1) + u.code(0));
        }
        if(player.seancer) { //person being seanced
            player.seancer.write(u.code(6) + u.code(index) + data.slice(1) + u.code(0));
            player.write(u.code(6) + u.code(index) + data.slice(1) + u.code(0));
        }
        else if(player.isMafiaRole()) { //send to mafia members only
            let mafia = players.getMafiaMembers();
            for(var x=0;x<mafia.length;x++) {
                mafia[x].write(u.code(6) + u.code(index) + data.slice(1) + u.code(0));
            }
        }
        else if(role == 'Jailor' && player.jailTarget) { //otherwise dead jailor can't talk
            player.jailTarget.write(u.code(6) + u.code(30) + data.slice(1) + u.code(0));
            player.write(u.code(6) + u.code(30) + data.slice(1) + u.code(0));
        }
        else if(role == 'Medium') {
            if(player.seanceTarget) {
                player.seanceTarget.write(u.code(6) + u.code(45) + data.slice(1) + u.code(0));
                player.write(u.code(6) + u.code(45) + data.slice(1) + u.code(0));
            }
            else {
                players.sendToDead(u.code(6) + u.code(45) + data.slice(1) + u.code(0), false);
                player.write(u.code(6) + u.code(45) + data.slice(1) + u.code(0));
            }
        }
    }
    else if(player.dead) {
        players.sendToDead(u.code(6) + u.code(index) + data.slice(1) + u.code(0), true);
    }
    else if(state == States.LOBBY)
        players.sendToAll(u.code(6) + u.code(255) +  u.code(index) + data.slice(1) + u.code(0));
    else if(state == States.NAMESELECTION || state == States.DISCUSSION || state == States.VOTING || state == States.JUDGEMENT)
        players.sendToAll(u.code(6) + u.code(index) + data.slice(1) + u.code(0));

    else if(state == States.DEFENSE || state == States.LASTWORDS) {
        if(player == TownOfSalem.getGame().getTargetOnStand())
            players.sendToAll(u.code(6) + u.code(index) + data.slice(1) + u.code(0));
    }
}

module.exports = chatMessage;