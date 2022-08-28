// https://leetcode.cn/problems/top-k-frequent-elements/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = {}

  for (const num of nums) {
    if (map[num] === undefined) {
      map[num] = 1
    } else {
      map[num]++
    }
  }

  const entries = Object.entries(map)

  quicksort(entries, 0, entries.length - 1, k)

  return entries.slice(0, k).map(([num]) => +num)
};

function quicksort(nums, left, right, k) {
  if (left >= right) {
    return
  }

  const index = partitions(nums, left, right)
  // [left, index] 刚好有 k 个
  if (index === k - 1) {
    return
  } else if (index < k - 1) {
    // [left, index] 小于 k 个，还需要排序右边
    quicksort(nums, index + 1, right, k)
  } else if (index > k - 1) {
    // [left, index] 多于 k 个，继续排需左边
    quicksort(nums, left, index - 1, k)
  }
}

function partitions(nums, left, right) {
  const pivotIndex = left + Math.floor(Math.random() * (right - left + 1))
  swap(nums, left, pivotIndex)
  const pivot = nums[left][1]

  // all in [left + 1, j] greater or equal pivot
  // all in (j, i) smaller than equal
  let i = left + 1
  let j = left

  while (i <= right) {
    if (nums[i][1] > pivot) {
      swap(nums, ++j, i)
    }
    i++
  }

  swap(nums, left, j)

  return j
}

function swap(nums, i, j) {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}

module.exports = topKFrequent
