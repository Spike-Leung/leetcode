// https://leetcode.cn/problems/combinations/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const res = []
  const comb = []

  if (n < k || k <= 0) {
    return res
  }

  function backtrace(start, k) {
    if (k === 0) {
      res.push(comb.slice(0))
      return
    }

    // (n - k + 1) 剪枝，超过这个值的数字，都无法组成 k 个数
    for (let i = start; i <= (n - k + 1); i++) {
      comb.push(i)
      backtrace(i + 1, k - 1)
      comb.pop()
    }
  }

  backtrace(1, k)

  return res
};
module.exports = combine
