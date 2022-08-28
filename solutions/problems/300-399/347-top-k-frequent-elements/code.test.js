const topKFrequent = require("./code")

const nums = [1,1,1,2,2,3]
const k = 2
const res = [1,2]
test(`Top ${k} frequent of ${nums} is ${res}`, () => {
  expect(topKFrequent(nums, k)).toEqual(res)
})
