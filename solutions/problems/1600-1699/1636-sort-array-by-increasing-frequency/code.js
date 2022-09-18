// https://leetcode.cn/problems/sort-array-by-increasing-frequency/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  const res = []

  if (nums.length === 0) {
    return res
  }

  const frequency = {}

  for (const num of nums) {
    if (frequency[num]) {
      frequency[num]++
    } else {
      frequency[num] = 1
    }
  }

  Object.entries(frequency).sort(([num1, freq1], [num2, freq2]) => {
    if (freq1 === freq2) {
      return num2 - num1
    } else {
      return freq1 - freq2
    }
  }).forEach(([num, freq]) => {
    for (let i = 0; i < freq; i++) {
      res.push(+num)
    }
  })

  return res
};
module.exports = frequencySort
