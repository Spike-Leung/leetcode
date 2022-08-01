const moveZeroes = require("./code");

const nums = [0,1,0,3,12];
const res = [1,3,12,0,0];
test(`${nums} after move zeroes should be ${res} `, () => {
  expect(moveZeroes(nums)).toEqual(res);
});
