const permute = require("./code")

const nums = [1]
const res = [[1]]
test(`permute of ${nums} should be ${res}`, () => {
  expect(permute(nums)).toEqual(res)
})

const nums1 = [0, 1]
const res1 = [[0, 1], [1, 0]]
test(`permute of ${nums1} should be ${res1}`, () => {
  expect(permute(nums1)).toEqual(res1)
})
