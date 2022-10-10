const areAlmostEqual = require("./code")

const strA = "bank"
const strB = "kanb"
test(`${strA} and ${strB} are almost equal`, () => {
  expect(areAlmostEqual(strA,  strB)).toBe(true)
})

const strA1 = "abcd"
const strB1 = "dcba"
test(`${strA1} and ${strB1} are NOT almost equal`, () => {
  expect(areAlmostEqual(strA1,  strB1)).toBe(false)
})

const strA2 = "yhy"
const strB2 = "hyc"
test(`${strA2} and ${strB2} are NOT almost equal`, () => {
  expect(areAlmostEqual(strA2,  strB2)).toBe(false)
})
