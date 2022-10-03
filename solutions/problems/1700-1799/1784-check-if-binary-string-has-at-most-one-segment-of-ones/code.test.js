const checkOnesSegment = require("./code")

const str = "1001"
test(`${str} is NOT 1 segment`, () => {
  expect(checkOnesSegment(str)).toBe(false)
})

const str2 = "110"
test(`${str2} is 1 segment`, () => {
  expect(checkOnesSegment(str2)).toBe(true)
})
