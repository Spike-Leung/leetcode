const sortColors = require("./code");

const nums = [2,0,2,1,1,0];
const res = [0,0,1,1,2,2];
test(`${nums} after sort should be ${res}`, () => {
  expect(sortColors(nums)).toEqual(res);
});
