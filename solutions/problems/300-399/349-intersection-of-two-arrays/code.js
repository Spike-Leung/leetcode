// https://leetcode-cn.com/problems/intersection-of-two-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const num2Sort = nums2.sort((a, b) => a - b);
  const res = [];
  const visited = {};

  for (let i = 0; i < nums1.length; i++) {
    const n = nums1[i];
    if (visited[n]) {
      continue;
    }

    visited[n] = true;
  }

  Object.keys(visited).forEach((n) => binarySearchNum2(+n));


  function binarySearchNum2(n) {
    let left = 0;
    let right = num2Sort.length - 1;

    while (left <= right) {
      const mid = left + ((right - left) >> 1);
      const midVal = num2Sort[mid];

      if (midVal === n) {
        res.push(n);
        return;
      } else if (midVal > n) {
        right = mid - 1;
      } else if (midVal < n) {
        left = mid + 1;
      }
    }
  }

  return res;
};

module.exports = intersection;
