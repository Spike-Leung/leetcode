const letterCombinations = require("./code");

const digits = "23";
const combinations = ["ad","ae","af","bd","be","bf","cd","ce","cf"];
test(`Combinations of ${digits} are ${combinations}`, () => {
  expect(letterCombinations(digits)).toEqual(combinations);
});

const digits1 = "";
const combinations1 = [];
test(`Combinations of ${digits1} are ${combinations1}`, () => {
  expect(letterCombinations(digits1)).toEqual(combinations1);
});

const digits2 = "2";
const combinations2 = ["a", "b", "c"];
test(`Combinations of ${digits2} are ${combinations2}`, () => {
  expect(letterCombinations(digits2)).toEqual(combinations2);
});
