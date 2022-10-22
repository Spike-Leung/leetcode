const jobScheduling = require("./code")

const startTime = [1,2,3,3]
const endTime = [3,4,5,6]
const profit = [50,10,40,70]
const maxProfix = 120
test(`Max profix with startTime: ${startTime}, endTime: ${endTime}, profit: ${profit} is ${maxProfix}`, () => {
  expect(jobScheduling(startTime, endTime, profit)).toBe(maxProfix)
})

const startTime1 = [1,1,1]
const endTime1 = [2,3,4]
const profit1 = [5,6,4]
const maxProfix1 = 6
test(`Max profix with startTime: ${startTime1}, endTime: ${endTime1}, profit: ${profit1} is ${maxProfix1}`, () => {
  expect(jobScheduling(startTime1, endTime1, profit1)).toBe(maxProfix1)
})
