const majorityElement = require("./code")

const nums = [3,2,3]
const res = 3
test(`Majority element in ${nums} is ${res}`, () => {
  expect(majorityElement(nums)).toBe(res)
})

const nums1 = [2,2,2,1,1,1,2]
const res1 = 2
test(`Majority element in ${nums1} is ${res1}`, () => {
  expect(majorityElement(nums1)).toBe(res1)
})
