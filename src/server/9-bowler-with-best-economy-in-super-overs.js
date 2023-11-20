function bowlerWithBestEconomyInSuperOvers(deliveries) {
  var playerStat = {};

  deliveries.reduce((superover, ball) => {
    if (ball.is_super_over == 1) {
      //checks fo the super over
      if (!superover[ball.bowler]) {
        // creats a bowler in the data if not there.
        superover[ball.bowler] = { run: 0, ball: 0 };
        playerStat[ball.bowler] = { Economy: 0 };
      }
      superover[ball.bowler].run +=
        parseInt(ball.wide_runs) +
        parseInt(ball.noball_runs) +
        parseInt(ball.batsman_runs);

      if (ball.wide_runs == 0 && ball.noball_runs == 0) {
        superover[ball.bowler].ball += 1;
      }
      playerStat[ball.bowler].Economy =
        superover[ball.bowler].run /
        (superover[ball.bowler].ball / 6);
    }
    return superover;
  }, {});

  var BestPlayer = { player: '', Economy: 0 };

  Object.entries(playerStat).reduce((best, player) => {
    var eco = player[1].Economy; // this is to find the lowest economy

    if (best > eco) {
      best = eco;
      BestPlayer.player = player[0];
      BestPlayer.Economy = eco;
    }

    return best;
  }, 10000);

  return BestPlayer; // returns the player with the lowest economy
}

module.exports = bowlerWithBestEconomyInSuperOvers;
