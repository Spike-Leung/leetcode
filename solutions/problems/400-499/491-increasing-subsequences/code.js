// https://leetcode.cn/problems/increasing-subsequences/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const res = []
  const length = nums.length

  if (length === 0) {
    return res
  }

  const path = []

  function backtrace(start) {
    // 满足长度为 2 以上则记录答案
    if (path.length > 1) {
      res.push(path.slice(0))
    }

    if (start === length) {
      return
    }

    // 对当前层，访问过的元素去重，例[1,2,3,2,1,1], 第一个 2 已经包含
    // 第二个 2 的序列了，需要排除第二个 2
    const used = {}

    for (let i = start; i < length; i++) {
      // 剪枝： 这个数字已经出现过了，不需要再重复生成序列
      if (used[nums[i]]) {
        continue
      }

      used[nums[i]] = true

      // 剪枝： 当前值比序列的最后一值小，则无法添加到序列
      if (path.length && path[path.length - 1] > nums[i]) {
        continue
      }

      path.push(nums[i])
      backtrace(i + 1)
      path.pop()
    }
  }

  backtrace(0)

  return res
};
module.exports = findSubsequences
