/**
 * https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
 *
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  let newStr = "";

  for (let i = 0; i < s.length; i++) {
    (s[i] === " " ? newStr += "%20" : newStr+= s[i]);
  }

  return newStr;
};

module.exports = replaceSpace;
