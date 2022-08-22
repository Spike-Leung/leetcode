const dailyTemperatures = require("./code")

const temperatures = [73,74,75,71,69,72,76,73]
const res = [1,1,4,2,1,1,0,0]
test(`Daily temperatures of ${temperatures} is ${res}`, () => {
  expect(dailyTemperatures(temperatures)).toEqual(res)
})

const temperatures1 = [30,40,50,60]
const res1 = [1,1,1,0]
test(`Daily temperatures of ${temperatures1} is ${res1}`, () => {
  expect(dailyTemperatures(temperatures1)).toEqual(res1)
})

const temperatures2 = [89,62,70,58,47,47,46,76,100,70]
const res2 = [8,1,5,4,3,2,1,1,0,0]
test(`Daily temperatures of ${temperatures2} is ${res2}`, () => {
  expect(dailyTemperatures(temperatures2)).toEqual(res2)
})
