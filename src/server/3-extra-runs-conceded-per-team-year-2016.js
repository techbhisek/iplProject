//Extra runs conceded per team in the year 2016
const readCSVFile = require('./convert.js');

const csvFilePath = '/home/abhishek/ipl/src/data/matches.csv';
const csvFilePath2 = '/home/abhishek/ipl/src/data/deliveries.csv';

readCSVFile(csvFilePath).then((matchesData) => {
  readCSVFile(csvFilePath2).then((deliveriesdata) => {
    var data = PerTeam(matchesData, deliveriesdata);
    console.log(JSON.stringify(data));
  });
});

function PerTeam(matchesData, deliveriesdata) {
  let data = matchesData.reduce((extra, match) => {
    if (match.season == 2016) {
      if (!extra[match.team1]) {
        extra[match.team1] = 0;
      }
      extra[match.team1] += deliveriesdata.reduce((run, ball) => {
        if (
          match.id == ball.match_id &&
          match.team1 == ball.bowling_team
        ) {
          run += Number.parseInt(ball.extra_runs);
        }

        return run;
      }, 0);

      if (!extra[match.team2]) {
        extra[match.team2] = 0;
      }
      extra[match.team2] += deliveriesdata.reduce((run, ball) => {
        if (
          match.id == ball.match_id &&
          match.team2 == ball.bowling_team
        ) {
          run += Number.parseInt(ball.extra_runs);
        }
        return run;
      }, 0);
    }

    return extra;
  }, {});

  return data;
}
