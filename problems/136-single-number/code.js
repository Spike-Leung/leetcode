/**
 * 136. Single Number
 *
 * https://leetcode-cn.com/problems/single-number/
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment
 *
 * https://leetcode-cn.com/problems/single-number/solution/zhi-chu-xian-yi-ci-de-shu-zi-by-leetcode-solution/
 *
 * Bitwise XOR assignment (^=):
 *
 * 1. 任何数字和0异或，得到自己，如 124 ^= 0  => 124
 * 2. 相同数字异或，得到0，如 124 ^= 124 => 0
 * 3. 异或满足交换律和结合律: 124 ^= 111 ^= 124 等同于 124 ^= 124 ^= 111 等同于 0 ^= 111 等同于 111
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let single = 0;

  nums.forEach((n) => {
    single ^= n;
  });

  return single;
};

module.exports = singleNumber;
