const matchesPerYear = require('./src/server/1-matches-per-year');
const matcheswonPerTeamPerYear = require('./src/server/2-matches-won-per-team-per-year');
const extraRunsConcededPerTeamYear2016 = require('./src/server/3-extra-runs-conceded-per-team-year-2016');
const top10EconomicalBowlersYear2015 = require('./src/server/4-top-10-economical-bowlers-year-2015');
const numberOfTimesEachTeamWonTossAndMatch = require('./src/server/5-number-of-times-each-team-won-toss-and-match');
const playerWonHighestNumberOfPlayerOfTheMatchAwardsEachSeason = require('./src/server/6-player-won-highest-number-of-Player-of-the-Match-awards-each-season');
const strikeRateOfaBatsmanForEachSeason = require('./src/server/7-strike-rate-of-a-batsman-for-each-season');
const highestNumberOfTimesOnePlayerHasBeenDismissedByAnotherPlayer = require('./src/server/8-highest-number-of-times-one-player-has-been-dismissed-by-another-player');
const bowlerWithBestEconomyInSuperOvers = require('./src/server/9-bowler-with-best-economy-in-super-overs');
const matchesData = require('./src/data/matchesInJson.json');
const deliveriesdata = require('./src/data/deliveriesInJson.json');
const fs = require('fs');

/* Number of matches played per year for all the years in IPL. using fs push data in json file*/
fs.writeFileSync(
  'src/public/output/1-matchesPerYear.json',
  JSON.stringify(matchesPerYear(matchesData), null, 2)
);

/* Number of matches won per team per year in IPL. using fs push data in json file*/

fs.writeFileSync(
  'src/public/output/2-matcheswonPerTeamPerYear.json',
  JSON.stringify(matcheswonPerTeamPerYear(matchesData), null, 2)
);

/* Extra runs conceded per team in the year 2016. using fs push data in json file*/

fs.writeFileSync(
  'src/public/output/3-extraRunsConcededPerTeamYear2016.json',
  JSON.stringify(
    extraRunsConcededPerTeamYear2016(matchesData, deliveriesdata),
    null,
    2
  )
);

/* Top 10 economical bowlers in the year 2015. using fs push data in json file*/

fs.writeFileSync(
  'src/public/output/4-top10EconomicalBowlersYear2015.json',
  JSON.stringify(
    top10EconomicalBowlersYear2015(matchesData, deliveriesdata),
    null,
    2
  )
);

/* Find the number of times each team won the toss and also won the match. using fs push data in json file*/

fs.writeFileSync(
  'src/public/output/5-numberOfTimesEachTeamWonTossAndMatch.json',
  JSON.stringify(
    numberOfTimesEachTeamWonTossAndMatch(matchesData),
    null,
    2
  )
);

/* Find a player who has won the highest number of Player of the Match awards for each season. using fs push data in json file*/

fs.writeFileSync(
  'src/public/output/6-playerWonHighestNumberOfPlayerOfTheMatchAwardsEachSeason.json',
  JSON.stringify(
    playerWonHighestNumberOfPlayerOfTheMatchAwardsEachSeason(
      matchesData
    ),
    null,
    2
  )
);

/* Find the strike rate of a batsman for each season. using fs push data in json file*/

fs.writeFileSync(
  'src/public/output/7-strikeRateOfaBatsmanForEachSeason.json',
  JSON.stringify(
    strikeRateOfaBatsmanForEachSeason(
      matchesData,
      deliveriesdata,
      'MS Dhoni'
    ),
    null,
    2
  )
);

/* Find the highest number of times one player has been dismissed by another player. using fs push data in json file*/

fs.writeFileSync(
  'src/public/output/8-highestNumberOfTimesOnePlayerHasBeenDismissedByAnotherPlayer.json',
  JSON.stringify(
    highestNumberOfTimesOnePlayerHasBeenDismissedByAnotherPlayer(
      deliveriesdata
    ),
    null,
    2
  )
);

/* Find the bowler with the best economy in super overs. using fs push data in json file*/

fs.writeFileSync(
  'src/public/output/9-bowlerWithBestEconomyInSuperOvers.json',
  JSON.stringify(
    bowlerWithBestEconomyInSuperOvers(deliveriesdata),
    null,
    2
  )
);
