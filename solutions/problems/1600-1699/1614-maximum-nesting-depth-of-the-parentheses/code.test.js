const maxDepth = require("./code");

const s = "(1+(2*3)+((8)/4))+1";
const depth = 3;
test(`Max depth of ${s} is ${depth}`, () => {
  expect(maxDepth(s)).toBe(depth);
});

const s1 = "(1)+((2))+(((3)))";
const depth1 = 3;
test(`Max depth of ${s1} is ${depth1}`, () => {
  expect(maxDepth(s1)).toBe(depth1);
});

const s2 = "1+(2*3)/(2-1)";
const depth2 = 1;
test(`Max depth of ${s2} is ${depth2}`, () => {
  expect(maxDepth(s2)).toBe(depth2);
});

const s3 = "1";
const depth3 = 0;
test(`Max depth of ${s3} is ${depth3}`, () => {
  expect(maxDepth(s3)).toBe(depth3);
});
