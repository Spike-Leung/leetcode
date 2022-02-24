const findBall = require("./code");

const grid = [[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]];
const res = [1,-1,-1,-1,-1];
test(`grid: ${grid} should get result: ${res}`, () => {
  expect(findBall(grid)).toEqual(res);
});

const grid1 = [[-1]];
const res1 = [-1];
test(`grid: ${grid1} should get result: ${res1}`, () => {
  expect(findBall(grid1)).toEqual(res1);
});

const grid2 = [[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]];
const res2 = [0,1,2,3,4,-1];
test(`grid: ${grid2} should get result: ${res2}`, () => {
  expect(findBall(grid2)).toEqual(res2);
});
