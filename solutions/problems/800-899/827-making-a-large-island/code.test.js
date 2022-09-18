const  largestIsland  = require("./code")

const grid = [[1,0], [0,1]]
const area = 3
test(`Largest island area of ${grid} is ${area}`, () => {
  expect(largestIsland(grid)).toBe(area)
})

const grid1 = [[1,1], [1,0]]
const area1 = 4
test(`Largest island area of ${grid1} is ${area1}`, () => {
  expect(largestIsland(grid1)).toBe(area1)
})

const grid2 = [[1,1], [1,1]]
const area2 = 4
test(`Largest island area of ${grid2} is ${area2}`, () => {
  expect(largestIsland(grid2)).toBe(area2)
})

const grid3 = [[1]]
const area3 = 1
test(`Largest island area of ${grid3} is ${area3}`, () => {
  expect(largestIsland(grid3)).toBe(area3)
})
