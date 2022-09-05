// https://leetcode.cn/problems/find-the-duplicate-number
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  // length =  n + 1, n = length - 1, [left , right] = [1, n]
  let left = 1
  let right = nums.length - 1

  // left = right, 范围内就只有一个数字了，这个数字肯定就是重复的数字，
  // 不用继续搜索这个区间了，因此，循环条件是当 left < right
  while (left < right) {
    let mid = left + ((right - left) >> 1)
    let count = 0

    for (const num of nums) {
      num <= mid && count++
    }

    // [1, mid] 之间存在重复
    if (count > mid) {
      right = mid
    } else {
      // [1, mid] 之间没有重复
      left = mid + 1
    }
  }

  // 返回 left 或者 right 都可以，因为 while 结束时，是 left = right
  return left
};
module.exports = findDuplicate
