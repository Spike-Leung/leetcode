// https://leetcode-cn.com/problems/find-missing-observations/
/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
  const m = rolls.length;
  const mSum = rolls.reduce((s, i) => s += i, 0);
  const sum = (m + n) * mean;
  const nSum = sum - mSum;
  const res = [];

  if (nSum < n || nSum > 6 * n) {
    return [];
  }

  const average = Math.floor(nSum / n);

  for (let i = 0; i < n - 1; i++) {
    res.push(average);
  }

  let leftSum = nSum - average * (n - 1);

  if (leftSum > 6) {
    res.push(6);
    leftSum -= 6;

    let i = 0;

    while (leftSum > 0) {
      while (leftSum > 0 && res[i] < 6) {
        res[i]++;
        leftSum--;
      }

      i++;
    }

  } else {
    res.push(leftSum);
  }



  return res;
};
module.exports = missingRolls;
