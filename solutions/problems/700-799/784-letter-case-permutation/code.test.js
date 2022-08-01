const letterCasePermutation = require("./code");

const s = "a1b2";
const expected = ["a1b2", "a1B2", "A1b2", "A1B2"];
test(`Letter case permutation of ${s} should be ${expected}`, () => {
  expect(letterCasePermutation(s)).toEqual(expected);
});

const s1 = "3z4";
const expected1 = ["3z4","3Z4"];
test(`Letter case permutation of ${s1} should be ${expected1}`, () => {
  expect(letterCasePermutation(s1)).toEqual(expected1);
});
