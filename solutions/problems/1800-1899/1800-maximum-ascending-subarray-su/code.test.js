const maxAscendingSum = require("./code")

const nums = [12,17,15,13,10,11,12]
const res = 33
test(`Max ascending sum of ${nums} is ${res}`, () => {
  expect(maxAscendingSum(nums)).toBe(res)
})
