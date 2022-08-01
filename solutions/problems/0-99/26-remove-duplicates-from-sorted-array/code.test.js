const removeDuplicates = require("./code");

test("input [1,1,2], output 2", () => {
  expect(removeDuplicates([1, 1, 2])).toBe(2);
});

test("input [0,0,1,1,1,2,2,3,3,4], output 5", () => {
  expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
});
