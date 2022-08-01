// https://leetcode-cn.com/problems/number-of-rectangles-that-can-form-the-largest-square/
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
  let maxLen = 0;
  let count = 0;

  for (let i = 0; i < rectangles.length; i++) {
    const minLen = Math.min(rectangles[i][0], rectangles[i][1]);

    if (minLen > maxLen) {
      maxLen = minLen;
      count = 1;
    } else if (minLen === maxLen) {
      count++;
    }
  }

  return count;
};

module.exports = countGoodRectangles;
