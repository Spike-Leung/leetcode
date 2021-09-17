/**
 * 136. Single Number
 *
 * https://leetcode-cn.com/problems/single-number/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = {};

  nums.forEach((n) => {
    map[n] !== undefined ? map[n]++ : (map[n] = 0);
  });

  const [singleNumber] = Object.entries(map).find(([k, v]) => v === 0);

  return +singleNumber;
};

module.exports = singleNumber;
