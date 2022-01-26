const countValidWords = require("./code");

const sentence = "cat and  dog";
const count = 3;
test(`There are ${count} valid words in "${sentence}"`, () => {
  expect(countValidWords(sentence)).toBe(count);
});

const sentence1 = "!this  1-s b8d!";
const count1 = 0;
test(`There are ${count1} valid words in "${sentence1}"`, () => {
  expect(countValidWords(sentence1)).toBe(count1);
});

const sentence2 = "alice and  bob are playing stone-game10";
const count2 = 5;
test(`There are ${count2} valid words in "${sentence2}"`, () => {
  expect(countValidWords(sentence2)).toBe(count2);
});

const sentence3 = "he bought 2 pencils, 3 erasers, and 1  pencil-sharpener.";
const count3 = 6;
test(`There are ${count3} valid words in "${sentence3}"`, () => {
  expect(countValidWords(sentence3)).toBe(count3);
});

const sentence4 = "-";
const count4 = 0;
test(`There are ${count4} valid words in "${sentence4}"`, () => {
  expect(countValidWords(sentence4)).toBe(count4);
});

const sentence5 = "a--b";
const count5 = 0;
test(`There are ${count5} valid words in "${sentence5}"`, () => {
  expect(countValidWords(sentence5)).toBe(count5);
});
