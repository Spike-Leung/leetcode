const maxCoins = require("./code")

const nums = [3,1,5,8]
const count = 167
test(`Max coins with nums: ${nums} should be ${count}`, () => {
  expect(maxCoins(nums)).toBe(count)
})

const nums1 = [1, 5]
const count1 = 10
test(`Max coins with nums: ${nums1} should be ${count1}`, () => {
  expect(maxCoins(nums1)).toBe(count1)
})
