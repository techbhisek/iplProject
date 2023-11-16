//Number of matches played per year for all the years in IPL.

const readCSVFile = require('./convert.js');

const csvFilePath = '/home/abhishek/ipl/src/data/matches.csv';

readCSVFile(csvFilePath).then((matchesData) => {
  var perTeam = PerTeam(matchesData);
  console.log(JSON.stringify(perTeam));
});

function PerTeam(matchesData) {
  let data = matchesData.reduce((TeamMatchs, match) => {
    if (!TeamMatchs[match.season]) {
      TeamMatchs[match.season] = 1;
    } else {
      TeamMatchs[match.season]++;
    }

    return TeamMatchs;
  }, {});

  return data;
}
