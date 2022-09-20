// https://leetcode.cn/problems/partition-to-k-equal-sum-subsets/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  // nums 分成 k 个子集，且和 （x）相同，那么就有  k * x = sum of nums
  const sum = nums.reduce((acc, cur) => acc += cur, 0)

  // 如果无法整除，则无法恰好拆分成 k 个和相同的子集
  if (sum % k !== 0) {
    return false
  }

  const target = sum / k
  const length = nums.length

  // 1 <= k <= len(nums) <= 16，
  // 因为 nums 的长度最大为 16，可以用一个 16 位二进制，标记当前使用了哪个元素
  let used = 0
  // 存储每个子集的和
  const bucket = new Array(k + 1).fill(0)
  // 记录使用过的组合结果，避免组合被重复计算
  const memo = new Map()

  function backtrace(start, k) {
    if (k === 0) {
      return true
    }

    if (bucket[k] === target) {
      // 当一个子集满足 target，看剩下的子集是否也满足，即 k - 1 个子集
      // 此时，依旧从下标 0 开始从 nums 找元素
      const res = backtrace(0, k - 1)
      // 记录当前这个组合的结果
      memo.set(used, res)

      return res
    }

    // 组合已经计算过，则直接返回
    if (memo.has(used)) {
      return memo.get(used)
    }

    // 遍历 nums，从 nums 中选择元素放入到每一个子集中，判断结果
    for (let i = start; i < length; i++) {
      // 找到对应的第 i 位，判断是否已经使用过, 使用过则跳过这个元素
      if ((used >> i) & 1 === 1) {
        continue
      }

      // 如果选择当前元素，导致溢出 target，那么这个元素不是一个正确选择，跳过
      if (bucket[k] + nums[i] > target) {
        continue
      }

      // 累计子集的和
      bucket[k] += nums[i]
      // 标记第 i 个元素被使用
      used |= (1 << i)

      // 继续对第 k 个子集选择元素，从后面还没选择的元素开始选 （i + 1）
      if (backtrace(i + 1, k)) {
        return true
      }

      // 回溯
      bucket[k] -= nums[i]
      used ^= (1 << i)
    }

    // 如果尝试过所有元素都无法满足 k 个子集，则无法拆分
    return false
  }

  return backtrace(0, k)
};
module.exports = canPartitionKSubsets
