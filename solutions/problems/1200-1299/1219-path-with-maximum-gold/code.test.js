const getMaximumGold = require("./code");

const grid = [[0,6,0],[5,8,7],[0,9,0]];
const gold = 24;
test(`Maximum gold from ${grid} is ${gold}`, () => {
  expect(getMaximumGold(grid)).toBe(gold);
});

const grid1 = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]];
const gold1 = 28;
test(`Maximum gold from ${grid1} is ${gold1}`, () => {
  expect(getMaximumGold(grid1)).toBe(gold1);
});

const grid2 = [[1,0,7,0,0,0],[2,0,6,0,1,0],[3,5,6,7,4,2],[4,3,1,0,2,0],[3,0,5,0,20,0]];
const gold2 = 60;
test(`Maximum gold from ${grid2} is ${gold2}`, () => {
  expect(getMaximumGold(grid2)).toBe(gold2);
});
