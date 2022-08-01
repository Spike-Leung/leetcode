const exchange = require("./code");

const nums = [1,2,3,4];
const result = [1,3,2,4];
test(`${nums} should reorder to ${result}`, () => {
  expect(exchange(nums)).toEqual(result);
});
