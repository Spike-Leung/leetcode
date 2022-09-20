const canPartitionKSubsets = require("./code")

const nums = [4, 3, 2, 3, 5, 2, 1]
const count = 4
test(`${nums} CAN partition to ${count} subsets`, () => {
  expect(canPartitionKSubsets(nums, count)).toBe(true)
})

const nums1 = [1,2,3,4]
const count1 = 3
test(`${nums1} CAN NOT partition to ${count1} subsets`, () => {
  expect(canPartitionKSubsets(nums1, count1)).toBe(false)
})
