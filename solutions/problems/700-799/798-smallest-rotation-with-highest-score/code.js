// https://leetcode-cn.com/problems/smallest-rotation-with-highest-score/
/**
 * @param {number[]} nums
 * @return {number}
 */
var bestRotation = function(nums) {
  const n = nums.length;
  const diff = new Array(n).fill(0);

  function add(i, j) {
    diff[i]++;
    j + 1 < n && diff[j + 1]--;
  }

  for (let i = 0; i < n; i++) {
    const a = ((i - n + 1) + n) % n;
    const b = ((i - nums[i]) + n) % n;

    if (a <= b) {
      add(a, b);
    } else {
      add(0, b);
      add(a, n - 1);
    }
  }

  let ans = 0;

  for (let i = 1; i < n; i++) {
    diff[i] += diff[i - 1];

    if (diff[ans] < diff[i]) {
      ans = i;
    }
  }


  return ans;
};

module.exports = bestRotation;
