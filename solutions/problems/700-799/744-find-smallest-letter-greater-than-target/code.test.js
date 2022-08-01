const nextGreatestLetter = require("./code");

const letters = ["c", "f", "j"];
const target = "a";
const res = "c";
test(`Next greatest letter of ${target} in ${lettes} is ${res}`, () => {
  expect(nextGreatestLetter(letters, target)).toBe(res);
});

const letters1 = ["c", "f", "j"];
const target1 = "c";
const res1 = "f";
test(`Next greatest letter of ${target1} in ${lettes1} is ${res1}`, () => {
  expect(nextGreatestLetter(letters1, target1)).toBe(res1);
});

const letters2 = ["c", "f", "j"];
const target2 = "d";
const res2 = "f";
test(`Next greatest letter of ${target2} in ${lettes2} is ${res2}`, () => {
  expect(nextGreatestLetter(letters2, target2)).toBe(res2);
});

const letters3 = ["a", "b"];
const target3 = "z";
const res3 = "a";
test(`Next greatest letter of ${target3} in ${lettes3} is ${res3}`, () => {
  expect(nextGreatestLetter(letters3, target3)).toBe(res3);
});
