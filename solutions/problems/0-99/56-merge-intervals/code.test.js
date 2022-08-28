const merge = require("./code")

const intervals = [[1,3],[2,6],[8,10],[15,18]]
const res = [[1,6],[8,10],[15,18]]
test(`${intervals} after merged should be ${res}`, () => {
  expect(merge(intervals)).toEqual(res)
})

const intervals1 = [[1,4],[4,5]]
const res1 = [[1,5]]
test(`${intervals1} after merged should be ${res1}`, () => {
  expect(merge(intervals1)).toEqual(res1)
})
