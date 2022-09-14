// https://leetcode.cn/problems/subsets
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = []
  const n = nums.length

  if (n === 0) {
    return res
  }

  const path = []

  function backtrace(nums, start) {
    // Array.prototype.slice() 浅拷贝一份数组
    res.push(path.slice(0))

    // start 超过右边界结束 (start >= n)
    for (let i = start; i < n; i++) {
      // 存入路径
      path.push(nums[i])
      // 从下一个下标开始
      backtrace(nums, i + 1)
      // 弹出路径
      path.pop()
    }
  }

  backtrace(nums, 0)

  return res
};
module.exports = subsets
