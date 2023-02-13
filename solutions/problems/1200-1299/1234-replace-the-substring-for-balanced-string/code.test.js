const balancedString = require("./code")

const s = "QQQW"
const minLength = 2
test(`Min length to balance ${s} are ${minLength}`, () => {
  expect(balancedString(s)).toBe(minLength)
})

const s1 = "QRWE"
const minLength1 = 0
test(`Min length to balance ${s1} are ${minLength1}`, () => {
  expect(balancedString(s1)).toBe(minLength1)
})

const s2 = "WQWRQQQW"
const minLength2 = 3
test(`Min length to balance ${s2} are ${minLength2}`, () => {
  expect(balancedString(s2)).toBe(minLength2)
})
