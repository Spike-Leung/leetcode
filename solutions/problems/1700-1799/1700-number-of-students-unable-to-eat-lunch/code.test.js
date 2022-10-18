const countStudents = require("./code")

const students = [1,1,0,0]
const sandwiches = [0,1,0,1]
const count = 0
test(`Students: ${students}, Sandwiches: ${sandwiches}, Count: ${count}`, () => {
  expect(countStudents(students, sandwiches)).toBe(count)
})

const students1 = [1,1,1,0,0,1]
const sandwiches1 = [1,0,0,0,1,1]
const count1 = 3
test(`Students: ${students1}, Sandwiches: ${sandwiches1}, Count: ${count1}`, () => {
  expect(countStudents(students1, sandwiches1)).toBe(count1)
})
