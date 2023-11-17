function matcheswonPerTeamPerYear(matchesData) {
  return matchesData.reduce((PerYear, match) => {
    if (match.winner) {
      if (!PerYear[match.season]) {
        PerYear[match.season] = { [match.winner]: 0 };
      }
      if (!PerYear[match.season][match.winner]) {
        PerYear[match.season][match.winner] = 0;
      }

      PerYear[match.season][match.winner] += 1;
    }
    return PerYear;
  }, {});
}

module.exports = matcheswonPerTeamPerYear;
