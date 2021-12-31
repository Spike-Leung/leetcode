// https://leetcode-cn.com/problems/generate-parentheses/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const dp = [[""], ["()"]];
  const map = {
    "": true,
    "()": true,
  };

  for (let i = 2; i <= n; i++) {
    dp[i] = [];

    dp[i - 1].forEach((s) => {
      const chars = s.split("");

      for (let j = 0; j < chars.length; j++) {
        const newStr = chars.slice(0, j + 1).join("") + "()" + chars.slice(j + 1).join("");

        if (map[newStr]) {
          continue;
        } else {
          map[newStr] = true;
          dp[i].push(newStr);
        }
      }
    });
  }

  return dp[n];
};

module.exports = generateParenthesis;
