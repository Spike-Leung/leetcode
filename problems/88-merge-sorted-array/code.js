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
  if (n === 0) {
    return;
  }

  if (m === 0 || nums1[m - 1] < nums2[0]) {
    nums2.forEach((num, index) => (nums1[m + index] = num));
    return;
  }

  if (nums1[0] > nums2[n - 1]) {
    for (let i = 0; i < m; i++) {
      nums1[m + i] = nums1[i];
    }

    nums2.forEach((num, index) => {
      nums1[index] = num;
    });

    return;
  }

  const lastNums1 = nums1[m - 1];
  let index1 = 0;
  let index2 = 0;
  let curr = nums1[0];
  let next = nums2[0];

  while (index2 < n) {
    if (nums1[index1] === 0 && nums2[index2] > lastNums1) {
      nums1[index1] = nums2[index2];
      index2++;
    } else if (nums1[index1] > nums2[index2]) {
      for (let i = (n + m) - 1; i > index1; i--) {
        nums1[i] = nums1[i - 1];
      }

      nums1[index1] = nums2[index2];
      index2++;
    }

    index1++;
  }
};

module.exports = merge;
