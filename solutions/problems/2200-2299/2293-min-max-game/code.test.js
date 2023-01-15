const minMaxGame = require("./code")

const nums = [1,3,5,2,4,8,2,2]
const res = 1
test(`Min max game result of ${nums} is ${res} `, () => {
  expect(minMaxGame(nums)).toBe(res)
})

const nums1 = [3]
const res1 = 3
test(`Min max game result of ${nums1} is ${res1} `, () => {
  expect(minMaxGame(nums1)).toBe(res1)
})
