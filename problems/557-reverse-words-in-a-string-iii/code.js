/**
 * 557. Reverse Words in a String III
 *
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const ret = [];
  const spaceChar = " ";
  const length = s.length;
  let i = 0;
  let start = 0;

  // 遍历所有的字母
  while (i <= length) {
    const char = s.charAt(i);

    if (i < length && char !== spaceChar) {
      i++;
    } else {
      // 找到一个单词，遍历单词每个字母，按反序存入数组
      const wordLength = i - start;
      for (let j = 0; j < wordLength; j++) {
        ret.push(s.charAt(i - 1 -j));
      }

      if (char === spaceChar) {
        ret.push(spaceChar);
      }

      i++;
      start = i;
    }
  }

  return ret.join("");
};

module.exports = reverseWords;
