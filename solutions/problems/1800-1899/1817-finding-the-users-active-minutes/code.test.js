const findingUsersActiveMinutes = require("./code")

const logs = [[0,5],[1,2],[0,2],[0,5],[1,3]], k = 5, answer = [0,2,0,0,0]
test(`User active minutes of logs: ${logs}, k: ${k} should equal ${answer}`, () => {
  expect(findingUsersActiveMinutes(logs, k)).toEqual(answer)
})

const logs1 = [[1,1],[2,2],[2,3]], k1 = 4, answer1 = [1,1,0,0]
test(`User active minutes of logs: ${logs1}, k: ${k1} should equal ${answer1}`, () => {
  expect(findingUsersActiveMinutes(logs1, k1)).toEqual(answer1)
})
