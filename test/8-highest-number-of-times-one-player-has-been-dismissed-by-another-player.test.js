matches = require('../src/server/8-highest-number-of-times-one-player-has-been-dismissed-by-another-player');
matchdata = require('../src/public/output/8-highestNumberOfTimesOnePlayerHasBeenDismissedByAnotherPlayer.json');
total = require('../src/data/matchesInJson.json');
total1 = require('../src/data/deliveriesInJson.json');

test('is our function working proply and creating a data in file', () => {
  expect(matches(total1)).toStrictEqual(matchdata);
});

test('if there is no dismissal it returns empty object', () => {
  expect(
    matches([
      {
        bowler: 'TS Mills',
        player_dismissed: undefined,
      },
    ])
  ).toEqual({});
});

test('if more then two player have highest number of dissimals then return them', () => {
  expect(
    matches([
      {
        bowler: 'TS Mills',
        player_dismissed: undefined,
      },
      {
        bowler: 'Rohit Sharma',
        player_dismissed: 'Miller',
      },
      {
        bowler: 'Bumhra',
        player_dismissed: 'DR Warner',
      },
    ])
  ).toEqual({
    1: {
      Bumhra: 'DR Warner',
      'Rohit Sharma': 'Miller',
    },
  });
});

test('this is to check for empty data', () => {
  expect(matches([])).toEqual({});
});
