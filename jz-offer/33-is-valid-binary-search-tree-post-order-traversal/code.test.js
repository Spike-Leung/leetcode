const verifyPostorder = require("./code");

const postorder = [1,6,3,2,5];
test(`${postorder} is not valid`, () => {
  expect(verifyPostorder(postorder)).toBe(false);
});

const postorder1 = [1,3,2,6,5];
test(`${postorder1} is valid`, () => {
  expect(verifyPostorder(postorder1)).toBe(true);
});

const postorder2 = [1,2,5,10,6,9,4,3];
test(`${postorder2} is not valid`, () => {
  expect(verifyPostorder(postorder2)).toBe(false);
});

const postorder3 = [1,2,3,4];
test(`${postorder3} is valid`, () => {
  expect(verifyPostorder(postorder3)).toBe(true);
});

const postorder4 = [5, 2, -17, -11, 25, 76, 62, 98, 92, 61];
test(`${postorder4} is not valid`, () => {
  expect(verifyPostorder(postorder4)).toBe(false);
});
