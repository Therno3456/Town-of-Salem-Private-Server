const Roles = require('../Roles.js');
const u = require('../Utilities.js');

/*Role list to send to each player*/
//var classic = [Roles.TOWN_INVESTIGATIVE, Roles.DOCTOR, Roles.TOWN_INVESTIGATIVE, Roles.JAILOR, Roles.DRIFTER,
//               Roles.GODFATHER, Roles.CONSORT, Roles.EXECUTIONER, Roles.ESCORT, Roles.MAFIOSO,
//               Roles.LOOKOUT, Roles.SERIALKILLER, Roles.TOWN_KILLING, Roles.JESTER, Roles.RANDOM_TOWN];

var classic = [Roles.SHERIFF, Roles.DOCTOR, Roles.INVESTIGATOR, Roles.JAILOR, Roles.MEDIUM,
                Roles.GODFATHER, Roles.FRAMER, Roles.EXECUTIONER, Roles.ESCORT, Roles.MAFIOSO,
                Roles.LOOKOUT, Roles.SERIALKILLER, Roles.TOWN_KILLING, Roles.JESTER, Roles.RANDOM_TOWN];

const unique = [Roles.VETERAN, Roles.JAILOR, Roles.GODFATHER];
const random = [Roles.RANDOM_TOWN, Roles.TOWN_INVESTIGATIVE, Roles.TOWN_PROTECTIVE, Roles.TOWN_SUPPORT, Roles.TOWN_KILLING, Roles.RANDOM_MAFIA, Roles.RANDOM_NEUTRAL, Roles.ANY];

var parsedList = parseRandoms();

function roleList(numberOfPlayers, parsed = false) {
    if(parsed) {
        return parsedList.slice(0, numberOfPlayers);
    }
    else {
        return classic.slice(0, numberOfPlayers);
    }
}

function parseRandoms() {
    let roles = [];
    for(var x=0;x<classic.length;x++) {
        if(random.includes(classic[x])) {
            roles[x] = getRandomRole(classic[x]);
        }
        else {
            roles[x] = classic[x];
        }
    }
    return roles;
}

function getRandomRole(role) {
    switch(role) {
        case Roles.RANDOM_TOWN:
            //var roles = [Roles.SHERIFF, Roles.DOCTOR, Roles.INVESTIGATOR, Roles.JAILOR, Roles.ESCORT, Roles.MEDIUM, Roles.LOOKOUT, Roles.VIGILANTE];
            var roles = [Roles.MAYOR];
            return u.random(roles);
        case Roles.TOWN_INVESTIGATIVE:
            var roles = [Roles.SHERIFF, Roles.INVESTIGATOR, Roles.LOOKOUT];
            return u.random(roles);
        case Roles.TOWN_PROTECTIVE:
            var roles = [Roles.DOCTOR];
            return u.random(roles);
        case Roles.TOWN_KILLING:
            var roles = [Roles.VIGILANTE, Roles.VETERAN];
            return u.random(roles);
        case Roles.TOWN_SUPPORT:
            var roles = [Roles.ESCORT, Roles.MEDIUM];
            return u.random(roles);
    }
}

module.exports = roleList;