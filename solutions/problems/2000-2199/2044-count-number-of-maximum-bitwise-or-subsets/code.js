https://leetcode-cn.com/problems/count-number-of-maximum-bitwise-or-subsets/
/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
  const n = nums.length;
  let maxVal = nums[0];

  for (let i = 1; i < n; i++) {
    maxVal |= nums[i];
  }

  let count = 0;

  function dfs(pos, oVal) {
    if (pos === n) {
      oVal === maxVal && count++;
      return;
    }

    dfs(pos + 1, oVal);
    dfs(pos + 1, oVal | nums[pos]);
  }

  dfs(0, 0);


  return count;
};

module.exports = countMaxOrSubsets;
