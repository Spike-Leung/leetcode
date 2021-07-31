const maxProfit = require("./code");

test(`[7,1,5,3,6,4] max profit is 5`, () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
});

test(`[7,6,4,3,1] max profit is 0`, () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
});
