/**
 * 88.Merge Sorted Array
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const sortedArr = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < m || p2 < n) {
    if (p1 === m) {
      sortedArr.push(nums2[p2++]);
    } else if (p2 === n) {
      sortedArr.push(nums1[p1++]);
    } else if (nums1[p1] >= nums2[p2]) {
      sortedArr.push(nums2[p2++]);
    } else {
      sortedArr.push(nums1[p1++]);
    }
  }

  for (let i = 0; i < m + n; i++) {
    nums1[i] = sortedArr[i];
  }
};

module.exports = merge;
