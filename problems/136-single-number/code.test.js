const singleNumber = require("./code");

test(`[2,2,1] 's single number is 1`, () => {
  expect(singleNumber([2, 2, 1])).toBe(1);
});

test(`[4,1,2,1,2] 's single number is 4`, () => {
  expect(singleNumber([4,1,2,1,2])).toBe(4);
});
