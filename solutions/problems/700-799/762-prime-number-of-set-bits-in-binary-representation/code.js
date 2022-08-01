// https://leetcode-cn.com/problems/prime-number-of-set-bits-in-binary-representation/
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
  let cnt = 0;

  for (let i = left; i <= right; i++) {
    if (checkIsPrime(getBitCount(i))) {
      cnt++;
    }
  }

  return cnt;
};

function getBitCount(num) {
  let count = 0;

  while (num !== 0) {
    (num & 1 === 1) && count++;
    num >>= 1;
  }

  return count;
}

function checkIsPrime(num) {
  if (num < 2) {
    return false;
  }

  const square = Math.sqrt(num);

  for (let i = 2; i <= square; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
module.exports = countPrimeSetBits;
