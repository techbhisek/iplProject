//Top 10 economical bowlers in the year 2015
function top10EconomicalBowlersYear2015(matchesData, deliveries) {
  var stats = {};
  deliveries.reduce((EconomyData, ball) => {
    if (matchesData[ball.match_id - 1].season == 2015) {
      if (!stats[ball.bowler]) {
        stats[ball.bowler] = 0;
      }
      if (!EconomyData[ball.bowler]) {
        EconomyData[ball.bowler] = { run: 0, ball: 0 };
      }
      EconomyData[ball.bowler].run +=
        Number.parseInt(ball.wide_runs) +
        Number.parseInt(ball.noball_runs) +
        Number.parseInt(ball.batsman_runs);

      if (ball.noball_runs == 0 && ball.wide_runs == 0) {
        EconomyData[ball.bowler].ball += 1;
      }
      stats[ball.bowler] = (
        EconomyData[ball.bowler].run /
        (EconomyData[ball.bowler].ball / 6)
      ).toFixed(2);
    }

    return EconomyData;
  }, {});

  let sort = [];
  Object.entries(stats).map((economy) => {
    sort.push([economy[0], economy[1]]);
  });

  sort.sort((player1, player2) => player1[1] - player2[1]);

  return sort.slice(0, 10).reduce((sorted, player) => {
    sorted.push({ [player[0]]: player[1] });
    return sorted;
  }, []);
}

module.exports = top10EconomicalBowlersYear2015;
