const maxSubArray = require("./code");

test("[-2,1,-3,4,-1,2,1,-5,4] output 6", () => {
  expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
})

test("[1] output 1", () => {
  expect(maxSubArray([1])).toBe(1);
})

test("[5,4,-1,7,8] output 23", () => {
  expect(maxSubArray([5,4,-1,7,8])).toBe(23);
})
