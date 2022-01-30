const uncommonFromSentences = require("./code");

const s1 = "this apple is sweet";
const s2 = "this apple is sour";
const res = ["sweet", "sour"];
test(`Uncommon between ${s1} and ${s2} are ${res}`, () => {
  expect(uncommonFromSentences(s1, s2)).toEqual(res);
});

const s11 = "apple apple";
const s21 = "banana";
const res1 = ["banana"];
test(`Uncommon between ${s11} and ${s21} are ${res1}`, () => {
  expect(uncommonFromSentences(s11, s21)).toEqual(res1);
});

const s12 = "s z z z s";
const s22 = "s z ejt";
const res2 = ["ejt"];
test(`Uncommon between ${s12} and ${s22} are ${res2}`, () => {
  expect(uncommonFromSentences(s12, s22)).toEqual(res2);
});
