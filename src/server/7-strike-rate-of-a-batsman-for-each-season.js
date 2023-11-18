function strikeRateOfaBatsmanForEachSeason(
  matchesData,
  deliveriesdata,
  player = ''
) {
  var strick = {};
  deliveriesdata.reduce((info, ball) => {
    var year = matchesData[ball.match_id - 1].season;

    if (!info[ball.batsman]) {
      info[ball.batsman] = { [year]: { run: 0, ball: 0 } };
      strick[ball.batsman] = { [year]: 0 };
    }

    if (!info[ball.batsman][year]) {
      info[ball.batsman][year] = { run: 0, ball: 0 };
      strick[ball.batsman][year] = 0;
    }

    info[ball.batsman][year].run += Number.parseInt(
      ball.batsman_runs
    );

    if (ball.wide_runs == 0) {
      info[ball.batsman][year].ball += 1;
    }
    strick[ball.batsman][year] = Math.ceil(
      (info[ball.batsman][year].run / info[ball.batsman][year].ball) *
        100
    );
    return info;
  }, {});

  if (player != '') {
    return { [player]: strick[player] };
  }
  return strick;
}

module.exports = strikeRateOfaBatsmanForEachSeason;
