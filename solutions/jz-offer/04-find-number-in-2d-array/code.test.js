const findNumberIntwoDArray = require("./code");

const twoDArr = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];

const twoDArr2 = [[1]];

test(`5 is in ${twoDArr}`, () => {
  expect(findNumberIntwoDArray(twoDArr, 5)).toBe(true);
});

test(`20 is not in ${twoDArr}`, () => {
  expect(findNumberIntwoDArray(twoDArr, 20)).toBe(false);
});

test(`1 is in ${twoDArr2}`, () => {
  expect(findNumberIntwoDArray(twoDArr2, 1)).toBe(true);
});
