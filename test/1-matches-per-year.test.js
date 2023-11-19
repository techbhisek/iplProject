matches = require('../src/server/1-matches-per-year');
toMatch1 = require('../src/public/output/1-matchesPerYear.json');
data = require('../src/data/matchesInJson.json');
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
    winner: 'Rising Pune Supergiant',
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

test('is our function working proply and creating a data in file', () => {
  expect(matches(data)).toStrictEqual(toMatch1);
});

test('if data is empty the return null or empty object ', () => {
  expect(matches([])).toStrictEqual({});
});

test('season is undefined dont include it', () => {
  expect(matches(test3Data)).toEqual({ 2017: 1, 2016: 1 });
});

test('empty data results in empty object return', () => {
  expect(matches(test4Data)).toEqual({});
});

test('Extra runs conceded per team in 2016 with missing argument', () => {
  expect(
    matches([
      { id: 1, season: 2016 },
      { id: 2, season: 2016 },
    ])
  ).toStrictEqual({
    2016: 2,
  });
});

const testFile2 = [
  {
    id: '1',
    season: undefined, // season (year is empty)
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
    id: '3',
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
];

test('counts matches per every year with testFile2', () => {
  expect(matches(testFile2)).toStrictEqual({
    2017: 2,
  });
});
