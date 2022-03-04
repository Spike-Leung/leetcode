// https://leetcode-cn.com/problems/next-greater-element-i/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const res = [];

  for (let i = 0; i < nums1.length; i++) {
    let indexInNums2;

    for (let j = 0; j < nums2.length; j++) {
      if (nums2[j] === nums1[i]) {
        indexInNums2 = j;
        break;
      }
    }

    let nge;
    for (let j = indexInNums2 + 1; j < nums2.length; j++) {
      if (nums2[j] > nums2[indexInNums2]) {
        nge = nums2[j];
        break;
      }
    }

    nge !== undefined ? res.push(nge) : res.push(-1);
  }

  return res;
};

module.exports = nextGreaterElement;
