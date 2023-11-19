matches = require('../src/server/6-player-won-highest-number-of-Player-of-the-Match-awards-each-season');
matchdata = require('../src/public/output/6-playerWonHighestNumberOfPlayerOfTheMatchAwardsEachSeason.json');
total = require('../src/data/matchesInJson.json');
total1 = require('../src/data/deliveriesInJson.json');

test('is our function working proply and creating a data in file', () => {
  expect(matches(total)).toEqual(matchdata);
});

test('this is to match our result', () => {
  expect(matches([])).toEqual({});
});

test('this is to match our result', () => {
  expect(
    matches([
      {
        id: '2',
        season: '2017',
        city: 'Pune',
        date: '2017-04-06',
        team1: 'Mumbai Indians',
        team2: 'Rising Pune Supergiant',
        toss_winner: 'Rising Pune Supergiant',
        toss_decision: 'field',
        result: 'normal',
        dl_applied: '0',
        winner: 'Rising Pune Supergiant',
        win_by_runs: '0',
        win_by_wickets: '7',
        player_of_match: 'SPD Smith',
        venue: 'Maharashtra Cricket Association Stadium',
        umpire1: 'A Nand Kishore',
        umpire2: 'S Ravi',
        umpire3: '',
      },
    ])
  ).toStrictEqual({
    2017: {
      'SPD Smith': 1,
    },
  });
});
