//Find the number of times each team won the toss and also won the match
const readCSVFile = require('./convert.js');

const csvFilePath = 'src/data/matches.csv';

readCSVFile(csvFilePath).then((matchesData) => {
  var tossAndMatch = tossAndMatchWon(matchesData);

  console.log(JSON.stringify(tossAndMatch));
});

function tossAndMatchWon(matchesData) {
  let data = matchesData.reduce((conn, match) => {
    if (match.winner == match.toss_winner) {
      if (!conn[match.winner]) {
        conn[match.winner] = 1;
      } else {
        conn[match.winner]++;
      }
    }

    return conn;
  }, {});
  return data;
}
