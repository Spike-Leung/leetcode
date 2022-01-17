// https://leetcode-cn.com/problems/minimum-time-difference/
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  const MAX_MINUTE = 1440;
  if (timePoints.length > MAX_MINUTE) {
    return 0;
  }

  timePoints.sort();
  const minute0 = getMin(timePoints[0]);
  let prevMinute = minute0;
  let ans = Number.MAX_VALUE;

  for (let i = 1; i < timePoints.length; i++) {
    ans = Math.min(ans, getMin(timePoints[i]) - prevMinute);
    prevMinute = getMin(timePoints[i]);
  }

  ans = Math.min(ans, minute0 + MAX_MINUTE - prevMinute);

  return ans;
};

function getMin(timeStr) {
  return timeStr.split(":").reduce((sum, t, idx) => {
    return idx === 0 ? sum += (+t * 60) : sum += (+t);
  }, 0);
}

module.exports = findMinDifference;
