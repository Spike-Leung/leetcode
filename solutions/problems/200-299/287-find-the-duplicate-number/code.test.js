const findDuplicate = require("./code")

const nums = [1,3,4,2,2]
const res = 2
test(`Duplicate number in ${nums} is ${res}`, () => {
  expect(findDuplicate(nums)).toBe(res)
})

const nums1 = [3,1,3,4,2]
const res1 = 3
test(`Duplicate number in ${nums1} is ${res1}`, () => {
  expect(findDuplicate(nums1)).toBe(res1)
})
