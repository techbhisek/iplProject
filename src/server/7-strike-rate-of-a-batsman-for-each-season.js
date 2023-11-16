//Find the strike rate of a batsman for each season
const readCSVFile = require('./convert.js');

const csvFilePath = 'src/data/matches.csv';
const csvFilePath2 = 'src/data/deliveries.csv';

readCSVFile(csvFilePath).then((matchesData) => {
  readCSVFile(csvFilePath2).then((deliveriesdata) => {
    var data = WonPerYear(matchesData, deliveriesdata);

    console.log(JSON.stringify(data));
  });
});

function WonPerYear(matchesData, deliveriesdata) {
  let WonPerYear = matchesData.reduce((PerYear, match) => {
    if (!PerYear[match.season]) {
      PerYear[match.season] = PerTeam(
        matchesData,
        deliveriesdata,
        match.season
      );
    }
    return PerYear;
  }, {});
  return WonPerYear;
}

function PerTeam(matchesData, deliveriesdata, year) {
  let data = matchesData.reduce((batter, match) => {
    var infoOfBalls = deliveriesdata.reduce((batterInfo, bat) => {
      if (bat.match_id == match.id && match.season == year) {
        if (!batterInfo[bat.batsman]) {
          batterInfo[bat.batsman] = {
            run: 0,
            ball: 0,
            strikeRate: 0,
          };
        }
        batterInfo[bat.batsman].run +=
          parseInt(bat.noball_runs) + parseInt(bat.batsman_runs);
        batterInfo[bat.batsman].ball += 1;
        batterInfo[bat.batsman].strikeRate =
          (batterInfo[bat.batsman].run /
            batterInfo[bat.batsman].ball) *
          100;
      }
      return batterInfo;
    }, batter);

    return batter;
  }, {});

  return data;
}
