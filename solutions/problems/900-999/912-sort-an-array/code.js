// https://leetcode.cn/problems/sort-an-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  quickSort(nums, 0, nums.length - 1)
};

function quickSort(nums, left, right) {
  if (left >= right ) {
    return
  }

  quickSort(nums, left, j - 1)
  quickSort(nums, j + 1, right)
}

function partition(nums, left, right) {


  const pivotIndex = left + Math.floor(Math.random() * (right + 1 - left))
  swap(nums, left, pivotIndex)

  let i = left + 1
  let j = left

  while (i <= right) {
    if (nums[i] <= nums[left]) {
      swap(nums, ++j, i)
    }
    i++
  }

  swap(nums, left, j)

}

function swap(nums, i, j) {
  const temp = nums[i]

  nums[i] = nums[j]
  nums[j] = temp
}

module.exports = sortArray
