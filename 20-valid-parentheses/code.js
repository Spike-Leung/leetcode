/**
 * https://leetcode.com/problems/valid-parentheses/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s) {
    return true;
  }

  // 不成对肯定是错的
  if (s.length % 2 !== 0) {
    return false;
  }

  let index = 0;
  const sArr = s.split("");
  const leftParenthesesArr = [];
  const isLeftParentheses = (i) => ["{", "[", "("].includes(i);
  const isMatch = (l, r) => {
    if (l === "(" && r === ")") {
      return true;
    } else if (l === "{" && r === "}") {
      return true;
    } else if (l === "[" && r === "]") {
      return true;
    }

    return false;
  };

  for (let i = 0; i < sArr.length; i++) {
    index = i;
    const paren = sArr[i];

    if (isLeftParentheses(paren)) {
      leftParenthesesArr.push(paren);
    } else {
      const lastLeftParen = leftParenthesesArr[leftParenthesesArr.length - 1];

      if (isMatch(lastLeftParen, paren)) {
        leftParenthesesArr.pop();
      } else {
        break;
      }
    }
  }

  // 数组遍历完成，并且左符号全部被消除
  return index === sArr.length - 1 && leftParenthesesArr.length === 0;
};

module.exports = isValid;
