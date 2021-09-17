/**
 * 14.Longest Common Prefix
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const strsShort2Long = strs.sort((a, b) => a.length - b.length);
  const [maybeLongestPrefix, ...leftStrs] = strsShort2Long;
  let longestPrefix = "";

  for (let i = 0; i < maybeLongestPrefix.length; i++) {
    const char = maybeLongestPrefix[i];

    if (leftStrs.every((s) => s[i] === char)) {
      longestPrefix += char;
    } else {
      break;
    }
  }

  return longestPrefix;
};

module.exports = longestCommonPrefix;
