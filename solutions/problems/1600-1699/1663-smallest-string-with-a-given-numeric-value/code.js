// https://leetcode.cn/problems/smallest-string-with-a-given-numeric-value/
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
  const res = []

  const dps = (n, k, charVal = 1) => {
    if (n === 0) {
      return res.join("")
    }

    for (let i = n; i > 0; i--) {
      // 判断是否可以取字段序较小的字符
      if (charVal * i + (n - i) * 26 >= k) {
        // 将字符存入结果
        for (let j = 0; j < i; j++) {
          res.push(String.fromCharCode(96 + charVal))
        }
        // 对剩余的 n 和 k 继续构建
        n -= i
        k -= charVal * i
        break
      } else {
        continue
      }
    }

    // charVal + 1，每次往后选一个字典序小的字符
    return dps(n, k, charVal + 1)
  }

  return dps(n, k);
};
module.exports = getSmallestString
