const countGoodRectangles = require("./code");

const rectangles = [[5,8],[3,9],[5,12],[16,5]];
const count = 3;
test(`There are ${count} rectangles can form from ${rectangles}`, () => {
  expect(countGoodRectangles(rectangles)).toBe(count);
});

const rectangles1 = [[2,3],[3,7],[4,3],[3,7]];
const count1 = 3;
test(`There are ${count1} rectangles can form from ${rectangles1}`, () => {
  expect(countGoodRectangles(rectangles1)).toBe(count1);
});
