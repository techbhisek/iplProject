//Find a player who has won the highest number of Player of the Match awards for each season
function playerWonHighestNumberOfPlayerOfTheMatchAwardsEachSeason(
  matchsData
) {
  var times = 0;
  var player = '';
  var yearwise = {};
  matchsData.reduce((playerData, match) => {
    if (!playerData[match.season]) {
      times = 0;
      player = '';
      playerData[match.season] = { [match.player_of_match]: 0 };
    }

    if (!playerData[match.season][match.player_of_match]) {
      playerData[match.season][match.player_of_match] = 0;
    }

    playerData[match.season][match.player_of_match]++;

    if (times < playerData[match.season][match.player_of_match]) {
      times = playerData[match.season][match.player_of_match];
      player = match.player_of_match;

      if (!yearwise[match.season]) {
        yearwise[match.season] = { player: player, times: times };
      } else {
        yearwise[match.season].player = player;
        yearwise[match.season].times = times;
      }
    }

    return playerData;
  }, {});

  return yearwise;
}

module.exports =
  playerWonHighestNumberOfPlayerOfTheMatchAwardsEachSeason;
