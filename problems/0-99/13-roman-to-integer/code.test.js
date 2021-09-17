const romanToInt = require("./code");

test("III is 3", () => {
  expect(romanToInt("III")).toBe(3);
})

test("IV is 4", () => {
  expect(romanToInt("IV")).toBe(4);
})

test("IX is 9", () => {
  expect(romanToInt("IX")).toBe(9);
})

test("LVIII is 58", () => {
  expect(romanToInt("LVIII")).toBe(58);
})

test("MCMXCIV is 1994", () => {
  expect(romanToInt("MCMXCIV")).toBe(1994);
})
