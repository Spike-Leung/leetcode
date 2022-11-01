const magicalString = require("./code")

const n = 6
const count = 3
test(`Magical string of length : ${n} includes ${count} 1`, () => {
  expect(magicalString(n)).toBe(count)
})
