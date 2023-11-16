//Number of matches won per team per year in IPL.

const readCSVFile = require('./convert.js');

const csvFilePath = 'src/data/matches.csv';

readCSVFile(csvFilePath).then((matchesData) => {
  var yearwise = WonPerYear(matchesData);
  console.log(JSON.stringify(yearwise));
});

function WonPerYear(matchesData) {
  let WonPerYear = matchesData.reduce((PerYear, match) => {
    if (!PerYear[match.season]) {
      PerYear[match.season] = years(matchesData, match.season);
    }
    return PerYear;
  }, {});
  return WonPerYear;
}

function years(matchesData, year) {
  var conn = {};
  let data = matchesData.reduce((MatchWon, match) => {
    if (match.season == year && match.winner) {
      if (!MatchWon[match.winner]) {
        MatchWon[match.winner] = 1;
      } else {
        MatchWon[match.winner]++;
      }
    }

    return MatchWon;
  }, {});
  return data;
}
