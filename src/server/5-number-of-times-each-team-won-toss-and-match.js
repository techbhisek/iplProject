//Find the number of times each team won the toss and also won the match
function numberOfTimesEachTeamWonTossAndMatch(matchesData) {
  return matchesData.reduce((conn, match) => {
    if (match.winner == match.toss_winner) {
      if (!conn[match.winner]) {
        conn[match.winner] = 0;
      }
      conn[match.winner]++;
    }
    return conn;
  }, {});
}

module.exports = numberOfTimesEachTeamWonTossAndMatch;
