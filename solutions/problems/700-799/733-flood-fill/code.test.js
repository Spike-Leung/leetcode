const floodFill = require("./code")

const image = [[1,1,1],[1,1,0],[1,0,1]]
const sr = 1
const sc = 1
const newColor = 2
const res = [[2,2,2],[2,2,0],[2,0,1]]
test(`${image} after flood fill should be `, () => {
  expect(floodFill(image, sr, sc, newColor)).toEqual(res)
})
