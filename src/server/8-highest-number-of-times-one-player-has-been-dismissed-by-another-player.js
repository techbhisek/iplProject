//Find the highest number of times one player has been dismissed by another player
function highestNumberOfTimesOnePlayerHasBeenDismissedByAnotherPlayer(
  deliveries
) {
  var player = '';
  var times = 0;
  var dismissed = '';
  var data = deliveries.reduce((bowler, ball) => {
    if (
      ball.player_dismissed &&
      ball.dismissal_kind != 'run out' &&
      ball.dismissal != 'retired hurt'
    ) {
      if (!bowler[ball.bowler]) {
        bowler[ball.bowler] = { [ball.player_dismissed]: 0 };
      }
      if (!bowler[ball.bowler][ball.player_dismissed]) {
        bowler[ball.bowler][ball.player_dismissed] = 0;
      }
      bowler[ball.bowler][ball.player_dismissed]++;
      if (bowler[ball.bowler][ball.player_dismissed] > times) {
        player = ball.bowler;
        times = bowler[ball.bowler][ball.player_dismissed];
        dismissed = ball.player_dismissed;
      }
    }

    return bowler;
  }, {});

  return { player, times, dismissed };
}

module.exports =
  highestNumberOfTimesOnePlayerHasBeenDismissedByAnotherPlayer;
