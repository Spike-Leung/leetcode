const isEscapePossible = require("./code");

const blocked = [[0, 1], [1, 0]];
const source = [0, 0];
const target = [0, 2];
test(`Can move from  ${source} to ${target}`, () => {
  expect(isEscapePossible(blocked, source, target)).toBe(false);
});

const blocked1 = [];
const source1 = [0, 0];
const target1 = [99999, 99999];
test(`Can NOT move from  ${source1} to ${target1}`, () => {
  expect(isEscapePossible(blocked1, source1, target1)).toBe(true);
});

const blocked2 = [
  [691938,300406],
  [710196,624190],
  [858790,609485],
  [268029,225806],
  [200010,188664],
  [132599,612099],
  [329444,633495],
  [196657,757958],
  [628509,883388]
];
const source2 = [655988,180910];
const target2 = [267728,840949];
test(`Can move from  ${source2} to ${target2}`, () => {
  expect(isEscapePossible(blocked2, source2, target2)).toBe(true);
});
