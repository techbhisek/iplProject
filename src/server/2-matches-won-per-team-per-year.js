function matcheswonPerTeamPerYear(matchesData) {
  return matchesData.reduce((PerYear, match) => {
    if (match.winner) {
      //checks wheather the winner is not undefined
      if (!PerYear[match.season]) {
        // checks wheather the PerYear object contains any instance of a season if not create internal object for the winner and assigns it with zero
        PerYear[match.season] = { [match.winner]: 0 };
      }
      if (!PerYear[match.season][match.winner]) {
        PerYear[match.season][match.winner] = 0; //checks for the perticular team is present or not. Not present then create.
      }

      PerYear[match.season][match.winner]++; //increment the wins by 1
    }
    return PerYear; // returning the PerYear after every match to find the changes thats how reduce works
  }, {});
}

module.exports = matcheswonPerTeamPerYear;
