// https://leetcode-cn.com/problems/sum-of-subarray-ranges/
/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
  let sum = 0;
  const n = nums.length;

  const minLeft = new Array(n).fill(0);
  const minRight = new Array(n).fill(0);
  const maxLeft = new Array(n).fill(0);
  const maxRight = new Array(n).fill(0);

  let minStack = [];
  let maxStack = [];

  for (let i = 0; i < n; i++) {
    const curr = nums[i];

    while (minStack.length && nums[minStack[minStack.length - 1]] > curr) {
      minStack.pop();
    }

    minLeft[i] = minStack.length ? minStack[minStack.length - 1] : -1;
    minStack.push(i);

    while (maxStack.length && nums[maxStack[maxStack.length - 1]] <= curr) {
      maxStack.pop();
    }

    maxLeft[i] = maxStack.length ? maxStack[maxStack.length - 1] : -1;
    maxStack.push(i);
  }

  minStack = [];
  maxStack = [];

  for (let i = n - 1; i >= 0; i--) {
    const curr = nums[i];

    while (minStack.length && nums[minStack[minStack.length - 1]] >= curr) {
      minStack.pop();
    }

    minRight[i] = minStack.length ? minStack[minStack.length - 1] : n;
    minStack.push(i);

    while (maxStack.length && nums[maxStack[maxStack.length - 1]] < curr) {
      maxStack.pop();
    }

    maxRight[i] = maxStack.length ? maxStack[maxStack.length - 1] : n;
    maxStack.push(i);
  }


  for (let i = 0; i < n; i++) {
    const maxCount = (maxRight[i] - i) * (i - maxLeft[i]);
    const minCount = (minRight[i] - i) * (i - minLeft[i]);

    sum += (maxCount - minCount) * nums[i];
  }

  return sum;
};

module.exports = subArrayRanges;
