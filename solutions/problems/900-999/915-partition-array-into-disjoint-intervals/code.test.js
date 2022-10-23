const partitionDisjoint = require("./code")

const nums = [5,0,3,8,6]
const length = 3
test(`Partition dis joint of ${nums} is ${length}`, () => {
  expect(partitionDisjoint(nums)).toBe(length)
})

const nums1 = [1,1,1,0,6,12]
const length1 = 4
test(`Partition dis joint of ${nums1} is ${length1}`, () => {
  expect(partitionDisjoint(nums1)).toBe(length1)
})
