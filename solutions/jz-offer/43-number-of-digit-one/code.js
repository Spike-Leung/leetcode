// https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
  let cur = n % 10;
  let high = Number.parseInt(n / 10, 10);
  let low = 0;
  let digit = 1;
  let count = 0;

  while (high !== 0 || cur !== 0) {
    if (cur === 0) {
      count += high * digit;
    } else if (cur === 1) {
      count += high * digit + low + 1;
    } else {
      count += high * digit + digit;
    }

    low += cur * digit;
    cur = high % 10;
    high = Number.parseInt(high / 10, 10);
    digit *= 10;
  }

  return count;
};

module.exports = countDigitOne;
