const kthGrammar = require("./code")

const n = 2
const k = 1
const char = 0
test(`n: ${n}, k: ${k}, char: ${char}`, () => {
  expect(kthGrammar(n, k)).toBe(char)
})

const n1 = 2
const k1 = 2
const char1 = 1
test(`n: ${n1}, k: ${k1}, char: ${char1}`, () => {
  expect(kthGrammar(n1, k1)).toBe(char1)
})

const n2 = 4
const k2 = 3
const char2 = 1
test(`n: ${n2}, k: ${k2}, char: ${char2}`, () => {
  expect(kthGrammar(n2, k2)).toBe(char2)
})

const n3 = 4
const k3 = 5
const char3 = 1
test(`n: ${n3}, k: ${k3}, char: ${char3}`, () => {
  expect(kthGrammar(n3, k3)).toBe(char3)
})

const n5 = 4
const k5 = 6
const char5 = 0
test(`n: ${n5}, k: ${k5}, char: ${char5}`, () => {
  expect(kthGrammar(n5, k5)).toBe(char5)
})

const n4 = 4
const k4 = 7
const char4 = 0
test(`n: ${n4}, k: ${k4}, char: ${char4}`, () => {
  expect(kthGrammar(n4, k4)).toBe(char4)
})
