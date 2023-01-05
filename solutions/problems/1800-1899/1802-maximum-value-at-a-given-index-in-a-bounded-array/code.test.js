const maxValue = require("./code")

test(`n = 4, index = 2, maxSum = 6, result should be 2`, () => {
  expect(maxValue(4,2,6)).toBe(2)
})

test(`n = 6 , index = 1, maxSum = 10, result should be 3`, () => {
  expect(maxValue(6,1,10)).toBe(3)
})

test(`n = 3 , index = 2, maxSum = 18, result should be 4`, () => {
  expect(maxValue(3,2,18)).toBe(7)
})
