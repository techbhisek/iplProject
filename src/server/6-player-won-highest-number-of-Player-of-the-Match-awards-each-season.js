function playerWonHighestNumberOfPlayerOfTheMatchAwardsEachSeason(
  matchsData
) {
  var times = 0; //variable to store the max player_of_the_matchs in every season
  var year; //stores the season and helps while creating and object of a perticular
  var player = ''; //variable to store the max player_of_the_matchs in every season
  var yearwise = {}; //has the count for every and every person season
  var Real = {}; // contains actual data we want
  matchsData.reduce((playerData, match) => {
    if (!playerData[match.season]) {
      //checks if it contain the match season
      if (year) {
        Real[year] = yearwise[year][times]; //it update after first iteration as year will be update and contain higher of upto current
      }
      times = 0; //as new season starts so reset the higher of current year to zero
      player = ''; // player also reset to the null as new season starts
      playerData[match.season] = { [match.player_of_match]: 0 };
    }
    if (!playerData[match.season][match.player_of_match]) {
      playerData[match.season][match.player_of_match] = 0;
    }

    playerData[match.season][match.player_of_match]++;

    if (times <= playerData[match.season][match.player_of_match]) {
      times = playerData[match.season][match.player_of_match]; //maximun number of time in current season after every match
      player = match.player_of_match; //name of the player who holds the maximum number of times. so far this season

      if (!yearwise[match.season]) {
        yearwise[match.season] = { [times]: {} };
      }
      if (!yearwise[match.season][times]) {
        yearwise[match.season][times] = {};
      }

      yearwise[match.season][times][player] =
        times; /*it creats as object of structer eg : 2017: [1]:{all player having one player of matchs},[2]:{all player }..
        so on till highest in line no 13 we select one highers in this*/
    }

    year = match.season;
    //it updates the year with current season as it helps once the season ends and also helps in the final season as we cannot directly insert it in Real object
    return playerData;
  }, {});
  if (times) {
    Real[year] =
      yearwise[year][
        times
      ]; /* it is to update the last year in the data as it cannot be updates in reduce itself .
    for this the line year = match.season and the times it is max at that point of time*/
  }
  return Real;
}

module.exports =
  playerWonHighestNumberOfPlayerOfTheMatchAwardsEachSeason;
