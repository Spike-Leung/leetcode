// https://leetcode-cn.com/problems/implement-strstr/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === "") {
    return 0;
  }

  const n = haystack.length;
  let index = 0;

  while (index < n) {
    if (needle[0] === haystack[index]) {
      let needleIndex = 0;
      let m = needle.length;

      while (needleIndex < m) {
        if (needle[needleIndex] != haystack[index + needleIndex]) {
          break;
        }
        needleIndex++;
      }

      if (needleIndex === m) {
        return index;
      }
    }

    index++;
  }

  return -1;
};

module.exports = strStr;
