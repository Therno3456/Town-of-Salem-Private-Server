const Roles = require('../Roles.js');

//var classic = [Roles.SHERIFF, Roles.DOCTOR, Roles.INVESTIGATOR, Roles.JAILOR,
              // Roles.GODFATHER, Roles.FRAMER, Roles.EXECUTIONER, Roles.ESCORT, Roles.MAFIOSO,
              // Roles.LOOKOUT, Roles.SERIALKILLER, Roles.TOWN_KILLING, Roles.JESTER, Roles.RANDOM_TOWN];

 var classic = [Roles.VIGILANTE, Roles.SERIALKILLER, Roles.FRAMER, Roles.SHERIFF,
                Roles.MEDIUM, Roles.FRAMER, Roles.SHERIFF, Roles.SHERIFF, Roles.MEDIUM,
                Roles.LOOKOUT, Roles.SERIALKILLER, Roles.SERIALKILLER, Roles.JESTER, Roles.RANDOM_TOWN];

function roleList(numberOfPlayers) {
    return classic.slice(0, numberOfPlayers);
}

module.exports = roleList;