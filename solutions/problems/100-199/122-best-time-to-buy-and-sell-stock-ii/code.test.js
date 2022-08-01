const maxProfit = require("./code");
const maxProfitDynamic = require("./code-dynamic");

test(`[7,1,5,3,6,4] max profit is 7`, () => {
  expect(maxProfit([7,1,5,3,6,4])).toBe(7);
  expect(maxProfitDynamic([7,1,5,3,6,4])).toBe(7);
});

test(`[1,2,3,4,5] max profif is 4`, () => {
  expect(maxProfit([1,2,3,4,5])).toBe(4);
  expect(maxProfitDynamic([1,2,3,4,5])).toBe(4);
});

test(`[7,6,4,3,1] max profif is 0`, () => {
  expect(maxProfit([7,6,4,3,1])).toBe(0);
  expect(maxProfitDynamic([7,6,4,3,1])).toBe(0);
});
