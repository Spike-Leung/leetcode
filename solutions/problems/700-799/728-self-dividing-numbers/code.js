// https://leetcode-cn.com/problems/self-dividing-numbers/
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let res = [];

  for (let i = left; i <= right; i++) {
    if (("" + i).indexOf("0") !== -1) {
      continue;
    }

    const nums = [...("" + i)];

    if (nums.every((n) => i % n === 0)) {
      res.push(i);
    }
  }

  return res;
};

module.exports = selfDividingNumbers;
