const canTransform = require("./code")

const start = "RXXLRXRXL"
const end = "XRLXXRRLX"
test(`${start} CAN transform to ${end}`, () => {
  expect(canTransform(start, end)).toBe(true)
})
