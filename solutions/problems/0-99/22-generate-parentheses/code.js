// https://leetcode-cn.com/problems/generate-parentheses/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = [];

  function dfs(left, right, str) {
    if (left === 0 && right === 0) {
      res.push(str);
      return;
    }

    if (left > 0) {
      dfs(left - 1, right, str + "(");
    }

    if (right > left) {
      dfs(left, right - 1, str + ")");
    }
  }

  dfs(n, n, "");

  return res;
};

module.exports = generateParenthesis;
