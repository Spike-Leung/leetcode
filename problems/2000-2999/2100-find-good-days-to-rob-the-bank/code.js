// https://leetcode-cn.com/problems/find-good-days-to-rob-the-bank/
/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function(security, time) {
  const n = security.length;

  if (time === 0) {
    return security.map((_, i) => i);
  }

  if (n < (time * 2 + 1)) {
    return [];
  }

  const res = [];
  const notIncreaseDays = new Array(n).fill(0);
  const notDecreaseDays = new Array(n).fill(0);

  for (let i = 1; i < n; i++) {
    if (security[i] <= security[i - 1]) {
      notIncreaseDays[i] = notIncreaseDays[i - 1] + 1;
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (security[i] <= security[i + 1]) {
      notDecreaseDays[i] = notDecreaseDays[i + 1] + 1;
    }
  }

  for (let i = 0; i < n; i++) {
    if (notIncreaseDays[i] >= time && notDecreaseDays[i] >= time) {
      res.push(i);
    }
  }

  return res;
};

module.exports = goodDaysToRobBank;
