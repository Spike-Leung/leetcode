const reversePrefix = require("./code");

const word = "abcdefd";
const ch = "d";
const res = "dcbaefd";
test(`Reverse ${word} in char "${ch}" should be ${res}`, () => {
  expect(reversePrefix(word, ch)).toBe(res);
});

const word1 = "xyxzxe";
const ch1 = "z";
const res1 = "zxyxxe";
test(`Reverse ${word1} in char "${ch1}" should be ${res1}`, () => {
  expect(reversePrefix(word1, ch1)).toBe(res1);
});

const word2 = "abcd";
const ch2 = "z";
const res2 = "abcd";
test(`Reverse ${word2} in char "${ch2}" should be ${res2}`, () => {
  expect(reversePrefix(word2, ch2)).toBe(res2);
});
