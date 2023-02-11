const fillCups = require("./code")

const amount = [1,4,2]
const steps = 4
test(`At least ${steps} steps can fill cups`, () => {
  expect(fillCups(amount)).toBe(steps)
})

const amount1 = [5,4,4]
const steps1 = 7
test(`At least ${steps1} steps can fill cups`, () => {
  expect(fillCups(amount1)).toBe(steps1)
})

const amount2 = [5,0,0]
const steps2 = 5
test(`At least ${steps2} steps can fill cups`, () => {
  expect(fillCups(amount2)).toBe(steps2)
})
