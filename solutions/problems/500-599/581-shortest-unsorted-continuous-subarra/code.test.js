const findUnsortedSubarray = require("./code")

const nums = [2,6,4,8,10,9,15]
const length = 5
test(`Min length of unsorted subarray of ${nums} is ${length}`, () => {
  expect(findUnsortedSubarray(nums)).toBe(length)
})

const nums1 = [1,2,3,4]
const length1 = 0
test(`Min length1 of unsorted subarray of ${nums1} is ${length1}`, () => {
  expect(findUnsortedSubarray(nums1)).toBe(length1)
})


const nums2 = [1]
const length2 = 0
test(`Min length2 of unsorted subarray of ${nums2} is ${length2}`, () => {
  expect(findUnsortedSubarray(nums2)).toBe(length2)
})


const nums3 = [1,2,3,3,3]
const length3 = 0
test(`Min length3 of unsorted subarray of ${nums3} is ${length3}`, () => {
  expect(findUnsortedSubarray(nums3)).toBe(length3)
})

const nums4 = [1,4,4,2,4]
const length4 = 3
test(`Min length4 of unsorted subarray of ${nums4} is ${length4}`, () => {
  expect(findUnsortedSubarray(nums4)).toBe(length4)
})


const nums5 = [1,3,2,3,3]
const length5 = 2
test(`Min length5 of unsorted subarray of ${nums5} is ${length5}`, () => {
  expect(findUnsortedSubarray(nums5)).toBe(length5)
})


const nums6 = [1,3,2,2,2]
const length6 = 4
test(`Min length6 of unsorted subarray of ${nums6} is ${length6}`, () => {
  expect(findUnsortedSubarray(nums6)).toBe(length6)
})

const nums7 = [1,3,5,4,2]
const length7 = 4
test(`Min length7 of unsorted subarray of ${nums7} is ${length7}`, () => {
  expect(findUnsortedSubarray(nums7)).toBe(length7)
})
