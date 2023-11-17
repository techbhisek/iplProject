function extraRunsConcededPerTeamYear2016(
  matchesData,
  deliveriesdata
) {
  return deliveriesdata.reduce((ExtraPerTeam, ball) => {
    if (matchesData[ball.match_id - 1].season == 2016) {
      if (!ExtraPerTeam[ball.bowling_team]) {
        ExtraPerTeam[ball.bowling_team] = 0;
      }

      ExtraPerTeam[ball.bowling_team] += Number.parseInt(
        ball.extra_runs
      );
    }

    return ExtraPerTeam;
  }, {});
}

module.exports = extraRunsConcededPerTeamYear2016;
