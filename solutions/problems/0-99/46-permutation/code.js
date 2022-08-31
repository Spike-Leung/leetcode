// https://leetcode.cn/problems/permutations
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const n = nums.length
  const res = []
  const visited = {}

  function backtrace(path) {
    if (path.length === n) {
      res.push(path.slice(0))
      return
    }

    for (const num of nums) {
      // 元素访问过了
      if (visited[num]) {
        continue
      }

      // 标记访问过的元素，在往下递归的过程中，避免重复访问
      visited[num] = true
      // 记录路径
      path.push(num)

      backtrace(path)

      // 回溯，将之前选择的元素取消标记，并且从 path 中移除
      visited[num] = false
      path.pop()
    }
  }

  backtrace([])

  return res
};
module.exports = permute
