matches = require('../src/server/7-strike-rate-of-a-batsman-for-each-season');
matchdata = require('../src/public/output/7-strikeRateOfaBatsmanForEachSeason.json');
total = require('../src/data/matchesInJson.json');
total1 = require('../src/data/deliveriesInJson.json');

test('is our function working proply and creating a data in file', () => {
  expect(matches(total, total1, 'MS Dhoni')).toStrictEqual({
    'MS Dhoni': {
      2008: 134,
      2009: 128,
      2010: 137,
      2011: 159,
      2012: 129,
      2013: 163,
      2014: 149,
      2015: 122,
      2016: 136,
      2017: 116,
    },
  });
});

test('this is to match our result', () => {
  expect(matches(total, total1)).toStrictEqual(matchdata);
});

test('this is for empty object', () => {
  expect(matches([], [])).toEqual({});
});
