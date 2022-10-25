const shortestBridge = require("./code")

const grid = [[0,1,0],[0,0,0],[0,0,1]]
const res = 2
test(`Shortest bridge of ${grid} is ${res}`, () => {
  expect(shortestBridge(grid)).toBe(res)
})

const grid1 = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
const res1 = 1
test(`Shortest bridge of ${grid1} is ${res1}`, () => {
  expect(shortestBridge(grid1)).toBe(res1)
})

const grid2 = [[0,1,0,0,0],[0,1,0,1,1],[0,0,0,0,1],[0,0,0,0,0],[0,0,0,0,0]]
const res2 = 1
test(`Shortest bridge of ${grid2} is ${res2}`, () => {
  expect(shortestBridge(grid2)).toBe(res2)
})
