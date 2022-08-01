/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const sortedArr = nums1.concat(nums2).sort((a, b) => a - b);

  if (sortedArr.length === 1) {
    return sortedArr[0];
  }

  const mid = 0 + (sortedArr.length - 1) / 2;

  if (sortedArr[mid]) {
    return sortedArr[mid];
  }

  const left = sortedArr[Math.floor(mid)];
  const right = sortedArr[Math.ceil(mid)];

  return (left + right) / 2;
};

module.exports = findMedianSortedArrays;
