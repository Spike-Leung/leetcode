const totalFruit = require("./code")

const fruits = [1,2,1]
const count = 3
test(`Fruits: ${fruits}, count: ${count}`, () => {
  expect(totalFruit(fruits)).toBe(count)
})

const fruits1 = [3,3,3,1,2,1,1,2,3,3,4]
const count1 = 5
test(`Fruits: ${fruits1}, count: ${count1}`, () => {
  expect(totalFruit(fruits1)).toBe(count1)
})
