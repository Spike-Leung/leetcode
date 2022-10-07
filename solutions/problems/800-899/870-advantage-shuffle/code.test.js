const advantageCount = require("./code")

const numA = [2,7,11,15]
const numB = [1,10,4,11]
const res = [2,11,7,15]
test(`Advantage count between ${numA} and ${numB} should be ${res}`, () => {
  expect(advantageCount(numA, numB)).toEqual(res)
})

const numA1 = [12,24,8,32]
const numB1 = [13,25,32,11]
const res1 = [24,32,8,12]
test(`Advantage count between ${numA1} and ${numB1} should be ${res1}`, () => {
  expect(advantageCount(numA1, numB1)).toEqual(res1)
})

const numA2 = [2,0,4,1,2]
const numB2 = [1,3,0,0,2]
const res2 = [2,0,2,1,4]
test(`Advantage count between ${numA2} and ${numB2} should be ${res2}`, () => {
  expect(advantageCount(numA2, numB2)).toEqual(res2)
})
