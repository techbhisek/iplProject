//Find the highest number of times one player has been dismissed by another player
const csvFilePath = '/home/abhishek/ipl/src/data/deliveries.csv';
const readCSVFile = require('./convert.js');

readCSVFile(csvFilePath).then((deliveries) => {
  var data = Dissmisal(deliveries);
  console.log(JSON.stringify(data));
});

function Dissmisal(deliveries) {
  var Dismis = deliveries.reduce((wicket, ball) => {
    var play = [];
    var time = [];
    if (ball.player_dismissed && ball.dismissal_kind != 'run out') {
      if (!wicket[ball.bowler]) {
        wicket[ball.bowler] = [];
        play.push(ball.player_dismissed);
        time.push(1);
        wicket[ball.bowler].push({
          player: play,
          times: time,
        });
      } else {
        if (
          wicket[ball.bowler][0].player.indexOf(
            ball.player_dismissed
          ) == -1
        ) {
          wicket[ball.bowler][0].player.push(ball.player_dismissed);
          wicket[ball.bowler][0].times.push(1);
        } else {
          var index = wicket[ball.bowler][0].player.indexOf(
            ball.player_dismissed
          );
          wicket[ball.bowler][0].times[index] += 1;
        }
      }
    }
    return wicket;
  }, {});
  let players = '';
  let times = 0;
  let dismissal = '';
  for (let key in Dismis) {
    Dismis[key][0].player.map((player) => {
      if (
        Dismis[key][0].times[Dismis[key][0].player.indexOf(player)] >
        times
      ) {
        players = key;
        times =
          Dismis[key][0].times[Dismis[key][0].player.indexOf(player)];
        dismissal = player;
      }
    });
  }

  return { players, times, dismissal };
}
