// https://leetcode-cn.com/problems/number-of-steps-to-reduce-a-number-to-zero/
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  let count = 0;

  while (num !== 0) {
    count++;
    num = (num % 2 === 0) ? (num / 2) : (num - 1);
  }

  return count;
};

module.exports = numberOfSteps;
