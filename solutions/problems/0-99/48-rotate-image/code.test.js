const rotate = require("./code")

const matrix = [[1,2,3],[4,5,6],[7,8,9]]
const res = [[7,4,1],[8,5,2],[9,6,3]]
test(`${matrix} after rotate should be ${res}`, () => {
  rotate(matrix)
  expect(matrix).toEqual(res)
})
