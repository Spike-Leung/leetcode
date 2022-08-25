const canJump = require("./code")

const nums = [2,3,1,1,4]
test(`${nums} can jump`, () => {
  expect(canJump(nums)).toBe(true)
})

const nums1 = [3,2,1,0,4]
test(`${nums1} can NOT jump`, () => {
  expect(canJump(nums1)).toBe(false)
})

const nums2 = [0]
test(`${nums2} can jump`, () => {
  expect(canJump(nums2)).toBe(true)
})

const nums3 = [1]
test(`${nums3} can jump`, () => {
  expect(canJump(nums3)).toBe(true)
})

const nums4 = [2,0,0]
test(`${nums4} can jump`, () => {
  expect(canJump(nums4)).toBe(true)
})
