/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0 || k === 0) {
    return nums;
  }

  const result = [];
  const maximumQueue = [];

  // 形成窗口
  for (let i = 0; i < k; i++) {
    while (maximumQueue.length > 0 && maximumQueue[maximumQueue.length - 1] < nums[i]) {
      maximumQueue.pop();
    }

    maximumQueue.push(nums[i]);
  }

  result.push(maximumQueue[0]);

  for (let i = k; i < nums.length; i++) {
    // 队列中的最大值对应的元素已经被移出窗口，则把元素移出
    if (nums[i - k] === maximumQueue[0]) {
      maximumQueue.shift();
    }

    // 保证队列是存放最大值的，当新加入的元素大于队列中的元素时，将对应的元素移出
    while (maximumQueue.length > 0 && maximumQueue[maximumQueue.length - 1] < nums[i]) {
      maximumQueue.pop();
    }

    maximumQueue.push(nums[i]);

    result.push(maximumQueue[0]);
  }

  return result;
};



module.exports = maxSlidingWindow;
