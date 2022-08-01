// https://leetcode-cn.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/
/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  const chars = [...s];
  const length = chars.length;

  for (let i = 0; i < length; i++) {
    if (chars[i] === "?") {
      for (let j = 0; j < 3; j++) {
        const char = String.fromCharCode('a'.charCodeAt() + j);

        if (chars[i - 1] != char && chars[i + 1] != char) {
          chars[i] = char;
          break;
        }
      }
    }
  }

  return chars.join("");
};

module.exports = modifyString;
