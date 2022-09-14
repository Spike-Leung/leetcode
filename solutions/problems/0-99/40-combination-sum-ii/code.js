// https://leetcode.cn/problems/combination-sum-ii/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const res = []
  const n = candidates.length

  if (n === 0) {
    return res
  }

  candidates.sort((a, b) => a - b)

  const combine = []

  function backtrace(start, target) {
    if (target === 0) {
      res.push(combine.slice(0))
      return
    }

    if (target < 0 || candidates[start] > target) {
      return
    }

    for (let i = start; i < n; i++) {
      const candidate = candidates[i]

      if (i > start && candidate === candidates[i - 1]) {
        continue
      }

      combine.push(candidate)
      backtrace(i + 1, target - candidate)
      combine.pop()
    }
  }

  backtrace(0, target)

  return res
};
module.exports = combinationSum2
