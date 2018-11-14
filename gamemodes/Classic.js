const Roles = require('../Roles.js');
const u = require('../Utilities.js');

//var classic = [Roles.SHERIFF, Roles.DOCTOR, Roles.INVESTIGATOR, Roles.JAILOR,
              // Roles.GODFATHER, Roles.FRAMER, Roles.EXECUTIONER, Roles.ESCORT, Roles.MAFIOSO,
              // Roles.LOOKOUT, Roles.SERIALKILLER, Roles.TOWN_KILLING, Roles.JESTER, Roles.RANDOM_TOWN];

 var classic = [Roles.MAFIOSO, Roles.FRAMER, Roles.FRAMER, Roles.SERIALKILLER,
                Roles.MAFIOSO, Roles.FRAMER, Roles.FRAMER, Roles.FRAMER, Roles.MEDIUM,
                Roles.LOOKOUT, Roles.SERIALKILLER, Roles.SERIALKILLER, Roles.JESTER, Roles.RANDOM_TOWN];

const unique = [Roles.VETERAN, Roles.JAILOR, Roles.GODFATHER];
const random = [Roles.RANDOM_TOWN, Roles.RANDOM_MAFIA, Roles.RANDOM_NEUTRAL, Roles.ANY];

function roleList(numberOfPlayers) {
    parseRandoms();
    console.log(classic);
    return classic.slice(0, numberOfPlayers);
}

function parseRandoms() {
    for(var x=0;x<classic.length;x++) {
        if(random.includes(classic[x])) {
            classic[x] = getRandomRole(classic[x]);
        }
    }
}

function getRandomRole(role) {
    switch(role) {
        case Roles.RANDOM_TOWN:
            var roles = [Roles.SHERIFF, Roles.DOCTOR, Roles.INVESTIGATOR, Roles.JAILOR, Roles.ESCORT, Roles.MEDIUM, Roles.LOOKOUT, Roles.VIGILANTE];
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