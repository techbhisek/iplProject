//Top 10 economical bowlers in the year 2015

const readCSVFile = require('./convert.js');

const csvFilePath = 'src/data/matches.csv';
const csvFilePath2 = 'src/data/deliveries.csv';

readCSVFile(csvFilePath).then((matchesData) => {
  readCSVFile(csvFilePath2).then((deliveriesdata) => {
    var data = PerTeam(matchesData, deliveriesdata);

    var playerinfo = [];

    var playerEconomy = [];

    data.map((bowler) => {
      for (let key in bowler) {
        playerinfo.push(key);
        playerEconomy.push(bowler[key]);
      }
    });

    bubbleSort(playerEconomy, playerinfo);
    var data = [];
    for (var index = 0; index < 10; index++) {
      data.push({
        player: playerinfo[index],
        economy: playerEconomy[index].toFixed(2),
      });
    }
    console.log(JSON.stringify(data));
  });
});

function bubbleSort(arr, demo) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        var tempinfo = demo[j];
        arr[j] = arr[j + 1];
        demo[j] = demo[j + 1];
        arr[j + 1] = temp;
        demo[j + 1] = tempinfo;
      }
    }
  }

  return { arr, demo };
}

function PerTeam(matchesData, deliveriesdata) {
  let data = matchesData.reduce((bowler, match) => {
    if (match.season == 2015) {
      var infoOfBalls = deliveriesdata.reduce((bowlerInfo, ball) => {
        if (ball.match_id == match.id) {
          if (!bowlerInfo[ball.bowler]) {
            bowlerInfo[ball.bowler] = { run: 0, ball: 0 };
          }
          bowlerInfo[ball.bowler].run +=
            parseInt(ball.wide_runs) +
            parseInt(ball.noball_runs) +
            parseInt(ball.batsman_runs);
          if (ball.noball_runs == 0 || ball.wide_runs == 0) {
            bowlerInfo[ball.bowler].ball += 1;
          }
        }
        return bowlerInfo;
      }, bowler);
    }

    return bowler;
  }, {});
  var bestecnomy = [];
  for (key in data) {
    var economy = {};
    economy[key] = data[key].run / (data[key].ball / 6);
    bestecnomy.push(economy);
  }

  return bestecnomy;
}
