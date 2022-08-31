// https://leetcode.cn/problems/burst-balloons/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  const n = nums.length
  // 记忆化数组，避免重复计算，coins[i][j] 表示 (i, j) 开区间中，能够获取的最大金币数量
  const coins = Array.from({ length: n + 2 }, () =>
    Array.from({ length: n + 2 }, () => -1)
  )
  // 为了方便计算，扩大 nums 的两端，vals[i] = nums[index - 1]
  const vals = Array.from({ length: n + 2 }, (_, index) => {
    if (index === 0 || index === n + 1) {
      return 1
    }

    return nums[index - 1]
  })

  function count(left, right) {
    // 开区间内没有值
    if (left >= right - 1) {
      return 0
    }

    // 返回计算过的值
    if (coins[left][right] !== -1) {
      return coins[left][right]
    }

    // 区间内任意选一个作为最后一个戳破的气球，计算这个气球被最后戳破时能获取的金币数量
    // 返回所有最后被戳破气球中，金币数量最大者，作为 (left, right) 能获取的最大金币
    for (let i = left + 1; i < right; i++) {
      const sum =
        vals[i] * vals[left] * vals[right] + count(left, i) + count(i, right)
      coins[left][right] = Math.max(sum, coins[left][right])
    }

    return coins[left][right]
  }

  // 计算 vals (0, n + 1) 这个区间能获取的最大值
  return count(0, n + 1)
}
module.exports = maxCoins
