const cuttingRope = require("./code");

test("max product of n = 2 is 1", () => {
  expect(cuttingRope(2)).toBe(1);
});

test("max product of n = 10 is 36", () => {
  expect(cuttingRope(10)).toBe(36);
});

test("max product of n = 120 is 953271190", () => {
  expect(cuttingRope(120)).toBe(953271190);
})
