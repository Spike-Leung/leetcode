// https://leetcode-cn.com/problems/happy-number/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const set = new Set();
  let sum = calcSum(n);

  while (!set.has(sum)) {
    if (sum === 1) {
      return true;
    } else {
      set.add(sum);
    }

    sum = calcSum(sum);
  }

  return false;
};

function calcSum(n) {
  const nums = [];

  while (n > 0) {
    nums.push(n % 10);
    n = Number.parseInt(n / 10, 10);
  }

  return nums.reduce((a, b) => a += b * b, 0);
}

module.exports = isHappy;
