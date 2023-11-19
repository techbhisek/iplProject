matches = require('../src/server/3-extra-runs-conceded-per-team-year-2016');
matchdata = require('../src/public/output/3-extraRunsConcededPerTeamYear2016.json');
total = require('../src/data/matchesInJson.json');
total1 = require('../src/data/deliveriesInJson.json');

test('is our function working proply and creating a data in file', () => {
  expect(matches(total, total1)).toStrictEqual(matchdata);
});

test('only single delivery so should only return bowling team and extra', () => {
  expect(
    matches(total, [
      {
        match_id: '636',
        inning: '2',
        batting_team: 'Royal Challengers Bangalore',
        bowling_team: 'Sunrisers Hyderabad',
        over: '20',
        ball: '6',
        batsman: 'Iqbal Abdulla',
        non_striker: 'Sachin Baby',
        bowler: 'B Kumar',
        is_super_over: '0',
        wide_runs: '0',
        bye_runs: '0',
        legbye_runs: '0',
        noball_runs: '0',
        penalty_runs: '0',
        batsman_runs: '4',
        extra_runs: '0',
        total_runs: '4',
        player_dismissed: '',
        dismissal_kind: '',
        fielder: '',
      },
    ])
  ).toEqual({
    'Sunrisers Hyderabad': 0,
  });
});

test('this is to match is from 2017 so return null', () => {
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
  ).toStrictEqual({});
});
