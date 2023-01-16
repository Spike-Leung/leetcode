const areSentencesSimilar = require("./code")

const sentence1 = "My name is Haley", sentence2 = "My Haley"
test(`${sentence1} and ${sentence2} are similar`, () => {
  expect(areSentencesSimilar(sentence1, sentence2)).toBe(true)
})

const sentence3 = "of", sentence4 = "A lot of words"
test(`${sentence3} and ${sentence4} NOT are similar`, () => {
  expect(areSentencesSimilar(sentence3, sentence4)).toBe(false)
})

const sentence5 = "Luky", sentence6 = "Lucccky"
test(`${sentence5} and ${sentence6} NOT are similar`, () => {
  expect(areSentencesSimilar(sentence5, sentence6)).toBe(false)
})


const sentence7 = "CwFfRo regR", sentence8 = "CwFfRo H regR"
test(`${sentence7} and ${sentence8} are similar`, () => {
  expect(areSentencesSimilar(sentence7, sentence8)).toBe(true)
})
