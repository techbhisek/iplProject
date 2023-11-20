matches = require('../src/server/9-bowler-with-best-economy-in-super-overs');
matchdata = require('../src/public/output/9-bowlerWithBestEconomyInSuperOvers.json');
total = require('../src/data/matchesInJson.json');
total1 = require('../src/data/deliveriesInJson.json');

test('is our function working proply and creating a data in file', () => {
  expect(matches(total1)).toStrictEqual(matchdata);
});

test('this is to check for empty data', () => {
  expect(matches([])).toEqual({ Economy: 0, player: '' });
});

test('if the ball is not in a super over dont count it', () => {
  expect(
    matches([
      {
        match_id: '1',
        inning: '1',
        batting_team: 'Sunrisers Hyderabad',
        bowling_team: 'Royal Challengers Bangalore',
        over: '1',
        ball: '2',
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
  ).toEqual({ Economy: 0, player: '' });
});

test('if the ball is not in a super over dont count it', () => {
  expect(
    matches([
      {
        match_id: '1',
        inning: '1',
        batting_team: 'Sunrisers Hyderabad',
        bowling_team: 'Royal Challengers Bangalore',
        over: '1',
        ball: '2',
        batsman: 'DA Warner',
        non_striker: 'S Dhawan',
        bowler: 'TS Mills',
        is_super_over: '1',
        wide_runs: '1',
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
  ).toEqual({ Economy: 0, player: '' });
});
