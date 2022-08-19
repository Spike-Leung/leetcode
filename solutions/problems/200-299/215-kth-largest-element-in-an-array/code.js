// https://leetcode.cn/problems/kth-largest-element-in-an-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const n = nums.length
  let left = 0
  let right = n - 1
  const target = n - k

  while (true) {
    let index = partition(nums, left, right)

    if (index === target) {
      return nums[index]
    } else if (index > target) {
      right = index - 1
    } else if (index < target) {
      left = index + 1
    }
  }
}

function partition(nums, left, right) {
  if (left > right) {
    return
  }

  const pivotIndex = left + Math.floor(Math.random() * (right - left + 1))
  swap(nums, left, pivotIndex)
  const pivot = nums[left]
  // all in [left + 1, j] <= pivot
  // all in (j, i) > pivot
  let j = left
  let i = left + 1

  while (i <= right) {
    if (nums[i] < pivot) {
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

module.exports = findKthLargest
