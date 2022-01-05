// https://leetcode-cn.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/
/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  const chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let index = 0;
  const sArr = s.split("");

  while (index < sArr.length) {
    if (sArr[index] === "?") {
      const prevChar = sArr[index - 1] || "";
      const nextChar = sArr[index + 1] || "";

      for (let i = 0; i < chars.length; i++) {
        if (chars[i] !== prevChar && chars[i] !== nextChar) {
          sArr[index] = chars[i];
          break;
        }
      }
    }

    index++;
  }

  return sArr.join("");
};

module.exports = modifyString;
