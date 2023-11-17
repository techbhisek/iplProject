function matchesPerYear(matchesData) {
  return matchesData.reduce((TeamMatchs, match) => {
    if (!TeamMatchs[match.season]) {
      TeamMatchs[match.season] = 0;
    }
    TeamMatchs[match.season]++;

    return TeamMatchs;
  }, {});
}

module.exports = matchesPerYear;
