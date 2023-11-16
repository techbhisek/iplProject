//Find the bowler with the best economy in super overs
const readCSVFile = require('./convert.js');

const csvFilePath = '/home/abhishek/ipl/src/data/deliveries.csv';

readCSVFile(csvFilePath).then((deliveries) => {
  var data = PerTeam(deliveries);
  console.log(JSON.stringify(data));
});

function PerTeam(deliveries) {
  var info = deliveries.reduce((superover, ball) => {
    if (ball.is_super_over == 1) {
      if (!superover[ball.bowler]) {
        superover[ball.bowler] = { run: 0, ball: 0 };
      }

      superover[ball.bowler].run +=
        parseInt(ball.wide_runs) +
        parseInt(ball.noball_runs) +
        parseInt(ball.batsman_runs);
      superover[ball.bowler].ball += 1;
    }

    return superover;
  }, {});
  var eco = 100;
  var player = { player: '', economy: 0 };
  for (key in info) {
    var economy = info[key].run / (info[key].ball / 6);
    if (economy < eco) {
      eco = economy;
      player.player = key;
      player.economy = eco;
    }
  }

  return player;
}
