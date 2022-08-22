const nextGreaterElements = require("./code")

const nums = [1,2,1]
const res = [2,-1,2]
test(`NGE of ${nums} is ${res}`, () => {
  expect(nextGreaterElements(nums)).toEqual(res)
})

const nums1 = [1,2,3,4,3]
const res1 = [2,3,4,-1,4]
test(`NGE of ${nums1} is ${res1}`, () => {
  expect(nextGreaterElements(nums1)).toEqual(res1)
})
