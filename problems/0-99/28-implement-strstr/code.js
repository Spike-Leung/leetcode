// https://leetcode-cn.com/problems/implement-strstr/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }
  return kmp(haystack, needle);
};

function kmp(s, p) {
  const n = s.length;
  const m = p.length;

  const pmt = new Array(m).fill(0);
  let i = 1, j = 0;

  while (i < m) {
    if (p[i] === p[j]) {
      pmt[i++] = ++j;
    } else {
      if (j > 0) {
        j = pmt[j - 1];
      } else {
        i++;
      }
    }
  }

  i = 0;
  j = 0;

  while (i < n) {
    if (s[i] === p[j]) {
      i++;
      j++;

      if (j === m) {
        return i - j;
      }
    } else {
      if (j > 0) {
        j = pmt[j - 1];
      } else {
        i++;
      }
    }
  }

  return -1;
}

module.exports = strStr;
