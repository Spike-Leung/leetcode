// https://leetcode.cn/problems/sentence-similarity-iii/
/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
  let sentenceList1 = sentence1.split(" ")
  let sentenceList2 = sentence2.split(" ")
  let samePrefixCount = 0,
    sameSuffixCount = 0
  const lenSentence1 = sentenceList1.length,
    lenSentence2 = sentenceList2.length

  while (
    samePrefixCount < lenSentence1 &&
    samePrefixCount < lenSentence2 &&
    sentenceList1[samePrefixCount] === sentenceList2[samePrefixCount]
  ) {
    samePrefixCount++
  }

  while (
    sameSuffixCount < lenSentence1 - samePrefixCount &&
    sameSuffixCount < lenSentence2 - samePrefixCount &&
    sentenceList1[lenSentence1 - 1 - sameSuffixCount] ===
      sentenceList2[lenSentence2 - 1 - sameSuffixCount]
  ) {
    sameSuffixCount++
  }

  return (
    samePrefixCount + sameSuffixCount === Math.min(lenSentence1, lenSentence2)
  )
}
module.exports = areSentencesSimilar
