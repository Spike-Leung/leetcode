const maxProduct = require("./code")

const nums = [2,3,-2,4]
const product = 6
test(`Max product of ${nums} should be ${product}`, () => {
  expect(maxProduct(nums)).toBe(product)
})

const nums1 = [-2,0,-1]
const product1 = 0
test(`Max product of ${nums1} should be ${product1}`, () => {
  expect(maxProduct(nums1)).toBe(product1)
})
