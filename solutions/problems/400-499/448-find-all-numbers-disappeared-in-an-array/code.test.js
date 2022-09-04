const findDisappearedNumbers = require("./code")

const nums = [4,3,2,7,8,2,3,1]
const res = [5,6]
test(`Disappear number in ${nums} are ${res}`, () => {
  expect(findDisappearedNumbers(nums)).toEqual(res)
})

const nums1 = [1,1]
const res1 = [2]
test(`Disappear number in ${nums1} are ${res1}`, () => {
  expect(findDisappearedNumbers(nums1)).toEqual(res1)
})
