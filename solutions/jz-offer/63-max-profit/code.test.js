const maxProfit = require("./code");

const prices = [7,1,5,3,6,4];
const profit = 5;
test(`Max profit of ${prices} is ${profit}`, () => {
  expect(maxProfit(prices)).toBe(profit);
});

const prices1 = [7,6,4,3,1];
const profit1 = 0;
test(`Max profit of ${prices1} is ${profit1}`, () => {
  expect(maxProfit(prices1)).toBe(profit1);
});
