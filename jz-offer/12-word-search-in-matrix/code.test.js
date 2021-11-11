const exist = require("./code");

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
const oneRowBoard = [["A", "B", "C", "E"]];
const oneColumnBoard = [["A"], ["B"], ["C"], ["S"]];
const sameBoard = [
  ["A", "A", "A", "A"],
  ["A", "A", "A", "A"],
  ["A", "A", "A", "A"],
];

test(`"ABCCED" is in ${board}`, () => {
  expect(exist(board, "ABCCED")).toBe(true);
});

test(`"SEE" is in ${board}`, () => {
  expect(exist(board, "SEE")).toBe(true);
});

test(`"ABCB" is not in ${board}`, () => {
  expect(exist(board, "ABCB")).toBe(false);
});

test(`"ABC" is in ${oneRowBoard}`, () => {
  expect(exist(oneRowBoard, "ABC")).toBe(true);
});

test(`"ABCD" is not in ${oneRowBoard}`, () => {
  expect(exist(oneRowBoard, "ABCD")).toBe(false);
});

test(`"ABC" is in ${oneColumnBoard}`, () => {
  expect(exist(oneColumnBoard, "ABC")).toBe(true);
});

test(`"ABCD" is not in ${oneColumnBoard}`, () => {
  expect(exist(oneColumnBoard, "ABCD")).toBe(false);
});

test(`"AAAAAAAA" is not in ${sameBoard}`, () => {
  expect(exist(sameBoard, "AAAAAAAA")).toBe(true);
});

test(`"AB" is not in ${sameBoard}`, () => {
  expect(exist(sameBoard, "AB")).toBe(false);
});
