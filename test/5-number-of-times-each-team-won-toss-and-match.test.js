matches = require('../src/server/5-number-of-times-each-team-won-toss-and-match');
matchdata = require('../src/public/output/5-numberOfTimesEachTeamWonTossAndMatch.json');
total = require('../src/data/matchesInJson.json');
total1 = require('../src/data/deliveriesInJson.json');

test('is our function working proply and creating a data in file', () => {
  expect(matches(total)).toStrictEqual(matchdata);
});

test('this is to check empty object', () => {
  expect(matches([])).toStrictEqual({});
});

test('it should only return where toss winner matches match winner', () => {
  expect(
    matches([
      {
        id: '1',
        season: '2017',
        city: 'Hyderabad',
        date: '2017-04-05',
        team1: 'Sunrisers Hyderabad',
        team2: 'Royal Challengers Bangalore',
        toss_winner: 'Royal Challengers Bangalore',
        toss_decision: 'field',
        result: 'normal',
        dl_applied: '0',
        winner: 'Sunrisers Hyderabad',
        win_by_runs: '35',
        win_by_wickets: '0',
        player_of_match: 'Yuvraj Singh',
        venue: 'Rajiv Gandhi International Stadium, Uppal',
        umpire1: 'AY Dandekar',
        umpire2: 'NJ Llong',
        umpire3: '',
      },
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
        winner: undefined,
        win_by_runs: '0',
        win_by_wickets: '7',
        player_of_match: 'SPD Smith',
        venue: 'Maharashtra Cricket Association Stadium',
        umpire1: 'A Nand Kishore',
        umpire2: 'S Ravi',
        umpire3: '',
      },
    ])
  ).toStrictEqual({});
});

test('it should only return where toss winner matches match winner', () => {
  expect(
    matches([
      {
        toss_winner: 'Royal Challengers Bangalore',
        winner: 'Sunrisers Hyderabad',
      },
      {
        toss_winner: 'Rising Pune Supergiant',
        winner: undefined,
      },
      {
        toss_winner: 'Rising Pune Supergiant',
        winner: 'Rising Pune Supergiant',
      },
    ])
  ).toStrictEqual({ 'Rising Pune Supergiant': 1 });
});
