/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  if (num === 1) {
    return false;
  }

  let sum = 1;
  let maxDivisor = num;

  for (let i = 2; i < maxDivisor; i++) {
    if (num % i === 0) {
      sum += i;
      maxDivisor = num / i;
      sum += maxDivisor;
    }
  }

  return num === sum;
};

module.exports = checkPerfectNumber;
