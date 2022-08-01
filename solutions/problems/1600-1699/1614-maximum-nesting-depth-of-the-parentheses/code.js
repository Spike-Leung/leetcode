// https://leetcode-cn.com/problems/maximum-nesting-depth-of-the-parentheses/submissions/
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
  let size = 0;
  let depth = 0;
  let index = 0;

  while (index < s.length) {
    if (s[index] === "(") {
      size += 1;
      depth = Math.max(depth, size);
    }

    if (s[index] === ")") {
      size -= 1;
    }

    index++;
  }

  return depth;
};

module.exports = maxDepth;
