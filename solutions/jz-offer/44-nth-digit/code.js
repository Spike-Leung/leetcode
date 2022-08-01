// https://leetcode-cn.com/problems/shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof/
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  let digit = 1;
  let minNum = 0;
  let maxNum = 9;
  let minIndex = 0;
  let maxIndex = 9;

  while (n > maxIndex) {
    digit += 1;
    minNum = maxNum + 1;
    maxNum = getRangeMaxNum(digit);
    minIndex = maxIndex + 1;
    maxIndex = maxIndex + getIndexCountOfDigit(maxNum, minNum, digit);
  }

  let target = minNum + (n - minIndex) / digit;
  let offset = (n - minIndex) % digit;

  return Number.parseInt(`${target}`[offset]);
};

function getIndexCountOfDigit(maxNum, minNum, digit) {
  return (maxNum - minNum + 1) * digit;
}

/**
 * 求 digit 位的最大值，例如 2 位的最大值为 99
 *
 * @param {number} digit
 */
function getRangeMaxNum(digit) {
  let maxNum = 9;

  for (let i = 1; i < digit; i++) {
    maxNum += (9 * powerBase10(i));
  }

  return maxNum;
}

/**
 * 返回 10 的 digit 次方
 *
 * @param {number} digit
 */
function powerBase10(digit) {
  let power = 1;

  for (let i = 0; i < digit; i++) {
    power *= 10;
  }

  return power;
}

module.exports = findNthDigit;
