function top10EconomicalBowlersYear2015(matchesData, deliveries) {
  var stats = {};
  deliveries.reduce((EconomyData, ball) => {
    if (matchesData[ball.match_id - 1].season == 2015) {
      /*First finding the match id of a delivery , using this same match id the season in the matchData as assuming 
    it as array and starting index is 0 . so match==match_id -1 if it is 2016*/
      if (!EconomyData[ball.bowler]) {
        EconomyData[ball.bowler] = { run: 0, ball: 0 }; // checking for the bowler in the object contains runs and bowles
        stats[ball.bowler] = 0; // parlally creating one for object for there economy
      }
      EconomyData[ball.bowler].run +=
        parseInt(ball.wide_runs) +
        parseInt(ball.noball_runs) +
        parseInt(ball.batsman_runs); // adding the runs to bowler runs account

      if (ball.noball_runs == 0 && ball.wide_runs == 0) {
        //only ball is counted if it is not noball and not a wide ball
        EconomyData[ball.bowler].ball += 1;
      }
      stats[ball.bowler] = (
        EconomyData[ball.bowler].run /
        (EconomyData[ball.bowler].ball / 6)
      ).toFixed(2); //updating the economy of the bowler after getting there runs every ball;
    }
    return EconomyData; // returning to get updated  runs and balls after everyball
  }, {});

  let sorted = [];
  Object.entries(stats).map((economy) => {
    // pushing the Bowler and it economy to arrays as not possibel to sort object directly
    sorted.push([economy[0], economy[1]]);
  });

  sorted.sort((player1, player2) => player1[1] - player2[1]); // sort the array

  return sorted.slice(0, 10).reduce((sorted, player) => {
    // converts the array into objects and then return
    sorted.push({ [player[0]]: player[1] });
    return sorted;
  }, []);
}

module.exports = top10EconomicalBowlersYear2015;
