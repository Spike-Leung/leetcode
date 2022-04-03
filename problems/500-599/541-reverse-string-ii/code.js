// https://leetcode-cn.com/problems/reverse-string-ii/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const n = s.length;
  const sArr = [...s];

  if (n < k) {
    reverse(sArr, 0, n - 1);
    return sArr.join("");
  }

  if (n < 2 * k) {
    reverse(sArr, 0, k - 1);
    return sArr.join("");
  }

  let l = 0, r = 2 * k;
  for (; r < n; r += 2 * k, l += 2 * k) {
    reverse(sArr, l, l + k - 1);
  }

  if (l < n) {
    reverse(sArr, l, Math.min(l + k - 1, n - 1));
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
