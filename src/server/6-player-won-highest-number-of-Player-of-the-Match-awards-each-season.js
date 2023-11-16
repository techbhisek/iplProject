//Find a player who has won the highest number of Player of the Match awards for each season
const readCSVFile = require('./convert.js');

const csvFilePath = 'src/data/matches.csv';

readCSVFile(csvFilePath).then((matchesData) => {
  var yearwise = Player(matchesData);
  console.log(JSON.stringify(yearwise));
});

function Player(matchesData) {
  let player = matchesData.reduce((PerYear, match) => {
    if (!PerYear[match.season]) {
      PerYear[match.season] = years(matchesData, match.season);
    }
    return PerYear;
  }, {});
  return player;
}

function years(matchesData, year) {
  var times = 0;
  var player = '';
  let data = matchesData.reduce((PlayerOftheMatch, match) => {
    if (match.season == year) {
      if (!PlayerOftheMatch[match.player_of_match]) {
        PlayerOftheMatch[match.player_of_match] = 1;
      } else {
        PlayerOftheMatch[match.player_of_match] += 1;
      }

      if (times < PlayerOftheMatch[match.player_of_match]) {
        times = PlayerOftheMatch[match.player_of_match];
        player = match.player_of_match;
      }
    }

    return PlayerOftheMatch;
  }, {});
  return { player, times };
}
