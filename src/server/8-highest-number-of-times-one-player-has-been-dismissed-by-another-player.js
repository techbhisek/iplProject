function highestNumberOfTimesOnePlayerHasBeenDismissedByAnotherPlayer(
  deliveries
) {
  var player = '';
  var times = 0;
  var dismissed = '';
  var wickets = {};
  deliveries.reduce((bowler, ball) => {
    if (
      ball.player_dismissed &&
      ball.dismissal_kind != 'run out' &&
      ball.dismissal != 'retired hurt'
    ) {
      //checks if the dissimissal is not by run out and retired hurt
      if (!bowler[ball.bowler]) {
        bowler[ball.bowler] = { [ball.player_dismissed]: 0 }; // creates for a bowler if the object is not present
      }
      if (!bowler[ball.bowler][ball.player_dismissed]) {
        bowler[ball.bowler][ball.player_dismissed] = 0; // checks for a particular is the dismissals is already present if not creates one
      }
      bowler[ball.bowler][ball.player_dismissed]++;
      if (bowler[ball.bowler][ball.player_dismissed] >= times) {
        //this is to check the current max
        player = ball.bowler;
        times = bowler[ball.bowler][ball.player_dismissed];
        dismissed = ball.player_dismissed;

        if (!wickets[times]) {
          wickets[times] = { [player]: dismissed }; //add parallel in the wickets of highest
        }
        if (!wickets[times][player]) {
          wickets[times][player] = dismissed;
        }
        wickets[times][player] = dismissed;
      }
    }

    return bowler;
  }, {});

  return { [times]: wickets[times] }; // as we have the maximum number of times we diectly return it.
}

module.exports =
  highestNumberOfTimesOnePlayerHasBeenDismissedByAnotherPlayer;
