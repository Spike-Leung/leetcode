const countBits = require("./code")

const n = 2
const ans = [0,1,1]
test(`Count bits of number ${n} should be ${ans}`, () => {
  expect(countBits(n)).toEqual(ans)
})

const n1 = 5
const ans1 = [0,1,1,2,1,2]
test(`Count bits of number ${n1} should be ${ans1}`, () => {
  expect(countBits(n1)).toEqual(ans1)
})
