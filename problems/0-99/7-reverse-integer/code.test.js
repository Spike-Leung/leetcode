const reverse = require("./code");

test("123 reverse to 321", () => {
  expect(reverse(123)).toBe(321);
})

test("-123 reverse to -321", () => {
  expect(reverse(-123)).toBe(-321);
})

test("120 reverse to 21", () => {
  expect(reverse(120)).toBe(21);
})

test("0 reverse to 0", () => {
  expect(reverse(0)).toBe(0);
})
