function matchesPerYear(matchesData) {
  return matchesData.reduce((TeamMatchs, match) => {
    //reduce helps in iterating through the MatchesData and give information of each match in match object
    if (match.season) {
      //it checks wheather season is defined in the match if not then return false and skip that match data
      if (!TeamMatchs[match.season]) {
        TeamMatchs[match.season] = 0; //if the is no season object is present then create and initialize it with 0
      }
      TeamMatchs[match.season]++; //incermenting the matches in that season of ipl
    }
    return TeamMatchs; //returning the data by adding the season .so that we hold data of every season with out loss
  }, {});
}
module.exports = matchesPerYear;
