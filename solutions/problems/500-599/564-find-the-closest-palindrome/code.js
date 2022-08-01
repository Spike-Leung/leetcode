// https://leetcode-cn.com/problems/find-the-closest-palindrome/
/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(n) {
  const set = new Set();
  const length = n.length;
  let ans = -1;

  // 添加两个可能的边界
  set.add(Math.pow(10, length) + 1);
  set.add(Math.pow(10, length - 1) - 1);

  // 获取字符串的一半，生成另外的 3 个可能答案
  const half = +(n.slice(0, Math.floor((length + 1) / 2)));

  for (let num = half - 1; num <= half + 1; num++) {
    const palindromicNum = getPalindromicNum(num, length % 2 === 0);

    if (palindromicNum !== n) {
      set.add(palindromicNum);
    }
  }

  set.forEach((s) => {
    if (ans === -1) {
      ans = s;
    } else if (Math.abs(s - n) < Math.abs(ans - n)) {
      ans = s;
    } else if (Math.abs(s - n) === Math.abs(ans - n) && s < ans) {

      ans = s;
    }
  });

  return ans + "";
};

function getPalindromicNum(half, isEven) {
  let s = half + "";
  const n = s.length;
  let idx = isEven ? n - 1 : n - 2;

  while (idx >= 0) {
    s += s[idx];
    idx--;
  }

  return s;
}

module.exports = nearestPalindromic;
