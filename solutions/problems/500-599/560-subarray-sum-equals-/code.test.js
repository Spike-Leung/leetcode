const subarraySum = require("./code")

const nums = [1,1,1]
const k = 2
const res = 2
test(`There are ${res} subarray sum equal to ${k} in ${nums}`, () => {
  expect(subarraySum(nums, k)).toBe(res)
})

const nums1 = [1,2,3]
const k1 = 3
const res1 = 2
test(`There are ${res1} subarray sum equal to ${k1} in ${nums1}`, () => {
  expect(subarraySum(nums1, k1)).toBe(res)
})
