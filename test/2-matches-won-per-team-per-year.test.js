matchesWon = require('../src/server/2-matches-won-per-team-per-year');
toMatch1 = require('../src/public/output/2-matcheswonPerTeamPerYear.json');
matchesData = require('../src/data/matchesInJson.json');

test3Data = [
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
    season: '2016',
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
];

test4Data = [
  {
    id: '1',
    season: undefined,
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
];
test4Data = [
  {
    id: '1',
    season: undefined,
    city: 'Hyderabad',
    date: '2017-04-05',
    team1: 'Sunrisers Hyderabad',
    team2: 'Royal Challengers Bangalore',
    toss_winner: 'Royal Challengers Bangalore',
    toss_decision: 'field',
    result: 'normal',
    dl_applied: '0',
    winner: undefined,
    win_by_runs: '35',
    win_by_wickets: '0',
    player_of_match: 'Yuvraj Singh',
    venue: 'Rajiv Gandhi International Stadium, Uppal',
    umpire1: 'AY Dandekar',
    umpire2: 'NJ Llong',
    umpire3: '',
  },
];

test('is our function working proply and creating a data in file', () => {
  expect(matchesWon(matchesData)).toStrictEqual(toMatch1);
});

test('season is undefined then skip that match', () => {
  expect(matchesWon(test3Data)).toStrictEqual({
    2017: {
      'Sunrisers Hyderabad': 1,
    },
  });
});

test('season and match winner  is undefined or missing the dont include', () => {
  expect(matchesWon(test4Data)).toStrictEqual({});
});

test('if data is empty then return empty object', () => {
  expect(matchesWon([])).toEqual({});
});
