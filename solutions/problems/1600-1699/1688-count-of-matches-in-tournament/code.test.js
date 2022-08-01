const numberOfMatches = require("./code");

const n = 7;
const count = 6;
test(`${n} teams should have ${count} match`, () => {
  expect(numberOfMatches(n)).toBe(count);
});

const n1 = 14;
const count1 = 13;
test(`${n1} teams should have ${count1} match`, () => {
  expect(numberOfMatches(n1)).toBe(count1);
});
