// https://leetcode.cn/problems/permutation-sequence/
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let res = ""
  const combine = []
  const used = {}
  let count = 0

  function backtrace() {
    // 长度达到 n，统计是第几个，当正好是第 k 个则找到了答案
    if (combine.length === n) {
      if (++count === k) {
        res = combine.join("")
      }
      return
    }

    // 从 [1, n] 中选数字进行组合，用 used 记录用过的数字，在下一层递归跳过用过的数字
    // 如果 count 大于等于 k，后面就不需要继续找了
    for (let i = 1; i <= n; i++) {
      if (count >= k || used[i]) {
        continue
      }
      combine.push(i)
      used[i] = true
      backtrace(i + 1)
      used[i] = false
      combine.pop(i)
    }
  }

  backtrace()

  return res
};
module.exports = getPermutation
