// https://leetcode-cn.com/problems/next-greater-element-i/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const stack = [];
  const map = new Map();

  for (let i = nums2.length - 1; i >= 0; i--) {
    const curr = nums2[i];
    while (stack.length && curr > stack[stack.length - 1]) {
      stack.pop();
    }
    map.set(curr, stack.length ? stack[stack.length - 1] : -1);
    stack.push(curr);
  }

  return new Array(nums1.length).fill(0).map((_, i) => map.get(nums1[i]));
};

module.exports = nextGreaterElement;
