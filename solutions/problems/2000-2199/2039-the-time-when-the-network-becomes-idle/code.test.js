const networkBecomesIdle = require("./code");

const edges = [
  [0, 1],
  [1, 2],
];
const patience = [0, 2, 1];
const second = 8;
test(`Earliest seconds of Edges: ${edges}, Patience: ${patience} is ${second}`, () => {
  expect(networkBecomesIdle(edges, patience)).toBe(second);
});

const edges1 = [
  [0, 1],
  [0, 2],
  [1, 2],
];
const patience1 = [0, 10, 10];
const second1 = 3;
test(`Earliest seconds of Edges: ${edges1}, Patience: ${patience1} is ${second1}`, () => {
  expect(networkBecomesIdle(edges1, patience1)).toBe(second1);
});

const edges2 = [
  [5, 7],
  [15, 18],
  [12, 6],
  [5, 1],
  [11, 17],
  [3, 9],
  [6, 11],
  [14, 7],
  [19, 13],
  [13, 3],
  [4, 12],
  [9, 15],
  [2, 10],
  [18, 4],
  [5, 14],
  [17, 5],
  [16, 2],
  [7, 1],
  [0, 16],
  [10, 19],
  [1, 8],
];
const patience2 = [0, 2, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1];
const second2 = 67;
test(`Earliest seconds of Edges: ${edges2}, Patience: ${patience2} is ${second2}`, () => {
  expect(networkBecomesIdle(edges2, patience2)).toBe(second2);
});
