function numberOfTimesEachTeamWonTossAndMatch(matchesData) {
  return matchesData.reduce((conn, match) => {
    if (match.winner == match.toss_winner) {
      //checks if the toss winner isEquals to match Winner
      if (!conn[match.winner]) {
        //if team is availabe or not .if not then creats one object and assign 0
        conn[match.winner] = 0;
      }
      conn[match.winner]++; // increases the value. if the team wins it wins
    }
    return conn; // return to check each time if available or not helps in updating after every match
  }, {});
}

module.exports = numberOfTimesEachTeamWonTossAndMatch;
