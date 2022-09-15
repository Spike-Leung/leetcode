const findSubsequences = require("./code")

const nums = [4,4,3,2,1]
const res = [[4,4]]
test(`Subsequence in ${nums} should be ${res}`, () => {
  expect(findSubsequences(nums)).toEqual(res)
})

const nums1 = [1,2,3,1,1,1]
const res1 = [[1,2],[1,2,3],[1,3],[1,1],[1,1,1],[1,1,1,1],[2,3]]
test(`Subsequence in ${nums1} should be ${res1}`, () => {
  expect(findSubsequences(nums1)).toEqual(res1)
})
