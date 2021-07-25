/**
 * https://leetcode.com/problems/valid-parentheses/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const leftParenthesesArr = [];
  const pair = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let i = 0; i < s.length; i++) {
    const paren = s[i];

    if (pair[paren]) {
      const lastLeft = leftParenthesesArr.length
        ? leftParenthesesArr.pop()
        : "#";

      if (lastLeft !== pair[paren]) {
        return false;
      }
    } else {
      leftParenthesesArr.push(paren);
    }
  }

  // 数组遍历完成，并且左符号全部被消除
  return leftParenthesesArr.length === 0;
};

module.exports = isValid;
