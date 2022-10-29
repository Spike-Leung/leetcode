const sumSubarrayMins = require("./code")

const nums = [3,1,2,4]
const sum = 17
test(`sumSubarrayMins of ${nums} is ${sum} `, () => {
  expect(sumSubarrayMins(nums)).toBe(sum)
})

const nums1 = [3,1,2,4]
const sum1 = 17
test(`sumSubarrayMins of ${nums1} is ${sum1} `, () => {
  expect(sumSubarrayMins(nums1)).toBe(sum1)
})
