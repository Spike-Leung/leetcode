// https://leetcode.cn/problems/subsets-ii/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const res = []
  const n = nums.length

  if (n === 0) {
    return res
  }

  // 排序，从而可以比较是否需要剪枝
  nums.sort()

  const path = []
  function backtrace(nums, start) {
    res.push(path.slice(0))

    for (let i = start; i < n; i++) {
      // 剪枝条件，不能为 i > 0，应该是 i > start，不然会把非重复的分支剪掉
      // 数组排序后，如果当前元素等于上一个元素，上一个元素的可能组合肯定 比 当前元素的可能组合多
      // 也即当前元素的组合，属于上一个元素的子集，因此，当前元素的组合是重复的，剪枝跳过
      if (i > start && nums[i] === nums[i - 1]) {
        continue
      }

      path.push(nums[i])
      backtrace(nums, i + 1)
      path.pop()
    }
  }

  backtrace(nums, 0)

  return res

};
module.exports = subsetsWithDup
