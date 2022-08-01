// https://leetcode-cn.com/problems/plates-between-candles/
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function(s, queries) {
  let places = [];
  let candlesIndexes = [];
  let n = s.length;
  let ret = [];

  for (let i = 0; i < n; ++i) {
    if (s[i] === "*") {
      places[i] = (places[i - 1] || 0) + 1;
    } else {
      places[i] = places[i - 1] || 0;
      candlesIndexes.push(i);
    }
  }

  queries.forEach(([left, right]) => {
    const leftCandleIndex = binarySearch(candlesIndexes, left);
    const rightCandleIndex = binarySearch(candlesIndexes, right, false);

    if (leftCandleIndex < rightCandleIndex && leftCandleIndex >= left && rightCandleIndex <= right) {
      ret.push(places[rightCandleIndex] - places[leftCandleIndex]);
    } else {
      ret.push(0);
    }
  });

  return ret;
};

function binarySearch(candlesIndexes, target, isLeft = true) {
  let candleIndex = null;
  let left = 0;
  let right = candlesIndexes.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) >> 1);

    if (candlesIndexes[mid] === target) {
      return target;
    } else if (candlesIndexes[mid] < target) {
        left = mid + 1;
    } else if (candlesIndexes[mid] > target) {
        right = mid - 1;
    }
  }

  return isLeft ? candlesIndexes[left] : candlesIndexes[right];
}

module.exports = platesBetweenCandles;
