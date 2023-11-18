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
      if (!bowler[ball.bowler]) {
        bowler[ball.bowler] = { [ball.player_dismissed]: 0 };
      }
      if (!bowler[ball.bowler][ball.player_dismissed]) {
        bowler[ball.bowler][ball.player_dismissed] = 0;
      }
      bowler[ball.bowler][ball.player_dismissed]++;
      if (bowler[ball.bowler][ball.player_dismissed] >= times) {
        player = ball.bowler;
        times = bowler[ball.bowler][ball.player_dismissed];
        dismissed = ball.player_dismissed;

        if (!wickets[times]) {
          wickets[times] = { [player]: dismissed };
        }
        if (!wickets[times][player]) {
          wickets[times][player] = dismissed;
        }
        wickets[times][player] = dismissed;
      }
    }

    return bowler;
  }, {});

  return { [times]: wickets[times] };
}

module.exports =
  highestNumberOfTimesOnePlayerHasBeenDismissedByAnotherPlayer;
