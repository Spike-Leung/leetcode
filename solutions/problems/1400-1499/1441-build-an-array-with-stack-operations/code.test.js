const buildArray = require("./code")

const target = [1, 3]
const num = 3
const serial = ["Push", "Push", "Pop", "Push"]
test(`Serial to build ${target} with num: ${num} is ${serial}`, () => {
  expect(buildArray(target, num)).toEqual(serial)
})

const target1 = [1, 2]
const num1 = 4
const serial1 = ["Push", "Push"]
test(`Serial to build ${target1} with num: ${num1} is ${serial1}`, () => {
  expect(buildArray(target1, num1)).toEqual(serial1)
})
