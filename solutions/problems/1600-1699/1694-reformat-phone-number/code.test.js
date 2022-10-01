const reformatNumber = require("./code")

const str = "1-23-45 6"
const res = "123-456"
test(`Reformat ${str} should be ${res}`, () => {
  expect(reformatNumber(str)).toBe(res)
})
