// https://leetcode-cn.com/problems/calculate-money-in-leetcode-bank/
/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
  const weeks = Math.floor(n / 7);
  const extraDay = n % 7;
  let sum = 0;
  const day1 = 1;
  const day7 = 7;


  for (let i = 0; i < weeks; i++) {
    const first = day1 + i;
    const last = day7 + i;
    sum += 7 * (first + last) / 2;
  }

  if (extraDay > 0) {
    for (let i = 0; i < extraDay; i++) {
      sum += (day1 + weeks + i);
    }
  }

  return sum;
};

module.exports = totalMoney;
