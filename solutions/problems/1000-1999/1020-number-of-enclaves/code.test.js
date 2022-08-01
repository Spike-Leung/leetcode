const { numEnclavesBfs, numEnclavesDfs } = require("./code");

const grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]];
const count = 3;
test(`Thre are ${count} enclaves in ${grid}`, () => {
  expect(numEnclavesDfs(JSON.parse(JSON.stringify(grid)))).toBe(count);
  expect(numEnclavesBfs(JSON.parse(JSON.stringify(grid)))).toBe(count);
});

const grid1 = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]];
const count1 = 0;
test(`Thre are ${count1} enclaves in ${grid1}`, () => {
  expect(numEnclavesDfs(JSON.parse(JSON.stringify(grid1)))).toBe(count1);
  expect(numEnclavesBfs(JSON.parse(JSON.stringify(grid1)))).toBe(count1);
});

const grid2 = [[0,0,1,1,1,0,1,1,1,0,1],[1,1,1,1,0,1,0,1,1,0,0],[0,1,0,1,1,0,0,0,0,1,0],[1,0,1,1,1,1,1,0,0,0,1],[0,0,1,0,1,1,0,0,1,0,0],[1,0,0,1,1,1,0,0,0,1,1],[0,1,0,1,1,0,0,0,1,0,0],[0,1,1,0,1,0,1,1,1,0,0],[1,1,0,1,1,1,0,0,0,0,0],[1,0,1,1,0,0,0,1,0,0,1]];
const count2 = 7;
test(`Thre are ${count2} enclaves in ${grid2}`, () => {
  expect(numEnclavesDfs(JSON.parse(JSON.stringify(grid2)))).toBe(count2);
  expect(numEnclavesBfs(JSON.parse(JSON.stringify(grid2)))).toBe(count2);
});
