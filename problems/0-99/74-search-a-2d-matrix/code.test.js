const searchMatrix = require("./code");

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

const matrix2 = [[0]];

const matrix3 = [[1], [3]];

test("matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3, output = true", () => {
  expect(searchMatrix(matrix, 3)).toBe(true);
});

test("matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13, output = false", () => {
  expect(searchMatrix(matrix, 13)).toBe(false);
});

test("matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = -1, output = false", () => {
  expect(searchMatrix(matrix, -1)).toBe(false);
});

test("matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 70, output = false", () => {
  expect(searchMatrix(matrix, 70)).toBe(false);
});

test("matrix = [[0]] target = 0, output = true", () => {
  expect(searchMatrix(matrix2, 0)).toBe(true);
});

test("matrix = [[0]] target = 1, output = false", () => {
  expect(searchMatrix(matrix2, 1)).toBe(false);
});

test("matrix = [[1], [3]] target = 2, output = false", () => {
  expect(searchMatrix(matrix3, 2)).toBe(false);
});
