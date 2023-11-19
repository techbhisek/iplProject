matches = require('../src/server/4-top-10-economical-bowlers-year-2015');
matchdata = require('../src/public/output/4-top10EconomicalBowlersYear2015.json');
total = require('../src/data/matchesInJson.json');
total1 = require('../src/data/deliveriesInJson.json');

test('is our function working proply and creating a data in file', () => {
  expect(matches(total, total1)).toStrictEqual(matchdata);
});

test('empty data should return empty array', () => {
  expect(matches([], [])).toStrictEqual([]);
});

test('dont count as delivery is not from 2015', () => {
  expect(
    matches(total, [
      {
        match_id: '1',
        inning: '1',
        batting_team: 'Sunrisers Hyderabad',
        bowling_team: 'Royal Challengers Bangalore',
        over: '1',
        ball: '1',
        batsman: 'DA Warner',
        non_striker: 'S Dhawan',
        bowler: 'TS Mills',
        is_super_over: '0',
        wide_runs: '0',
        bye_runs: '0',
        legbye_runs: '0',
        noball_runs: '0',
        penalty_runs: '0',
        batsman_runs: '0',
        extra_runs: '0',
        total_runs: '0',
        player_dismissed: '',
        dismissal_kind: '',
        fielder: '',
      },
    ])
  ).toStrictEqual([]);
});
