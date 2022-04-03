// https://leetcode-cn.com/problems/reverse-string-ii/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const n = s.length;
  const sArr = [...s];

  for (let i = 0; i < n; i += 2 * k) {
    reverse(sArr, i, Math.min(i + k, n) - 1);
  }

  return sArr.join("");
};

function reverse(s, l, r) {
  while (l < r) {
    const t = s[l];
    s[l] = s[r];
    s[r] = t;
    l++;
    r--;
  }
}
module.exports = reverseStr;
