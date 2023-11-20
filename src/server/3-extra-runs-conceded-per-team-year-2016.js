function extraRunsConcededPerTeamYear2016(
  matchesData,
  deliveriesdata
) {
  return deliveriesdata.reduce((ExtraPerTeam, ball) => {
    //using the reduce iterating through each and every delivery
    if (matchesData != []) {
      //console.log();
      if (
        matchesData[ball.match_id - matchesData[0].id].season == 2016
      ) {
        /*First finding the match id of a delivery , using this same match id the season in the matchData as assuming 
      it as array and starting index is 0 . so match==match_id -1 if it is 2016*/
        if (!ExtraPerTeam[ball.bowling_team]) {
          //checking bowling team is present or not if not create one
          ExtraPerTeam[ball.bowling_team] = 0;
        }
        ExtraPerTeam[ball.bowling_team] += Number.parseInt(
          ball.extra_runs
        ); //Adding extras to there runs
      }
    }
    return ExtraPerTeam;
  }, {});
}

module.exports = extraRunsConcededPerTeamYear2016;
