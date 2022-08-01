// https://leetcode-cn.com/problems/reverse-prefix-of-word/
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
  const chIndex = word.indexOf(ch);

  if (chIndex === -1) {
    return word;
  }

  const words = [...word];

  return words.slice(0, chIndex + 1).reverse().concat(words.slice(chIndex + 1)).join("");
};

module.exports = reversePrefix;
