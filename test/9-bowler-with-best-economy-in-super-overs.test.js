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
