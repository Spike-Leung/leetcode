const hammingDistance = require("./code")

const x = 1
const y = 4
const res = 2
test(`Hamming distance between ${x} and ${y} is ${res}`, () => {
  expect(hammingDistance(x, y)).toBe(res)
})
