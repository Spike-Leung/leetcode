const stoneGameIX = require("./code");

const stones = [2, 1];
test(`Alice wins in ${stones}`, () => {
  expect(stoneGameIX(stones)).toBe(true);
});

const stones1 = [2];
test(`Alice loses in ${stones1}`, () => {
  expect(stoneGameIX(stones1)).toBe(false);
});

const stones2 = [5,1,2,4,3];
test(`Alice loses in ${stones2}`, () => {
  expect(stoneGameIX(stones2)).toBe(false);
});
