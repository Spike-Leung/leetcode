// https://leetcode-cn.com/problems/corporate-flight-bookings/
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
  const diff = new Array(n).fill(0);

  for (const [i, j, v] of bookings) {
    diff[i - 1] += v;
    j < n && (diff[j] -= v);
  }

  const ans = [diff[0]];

  for (let i = 1; i < diff.length; i++) {
    ans[i] = ans[i - 1] + diff[i];
  }

  return ans;
};

module.exports = corpFlightBookings;
