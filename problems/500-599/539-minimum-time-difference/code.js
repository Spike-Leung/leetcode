// https://leetcode-cn.com/problems/minimum-time-difference/
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  const sortTimePoints = sort(timePoints);
  let minDiff = calTimeDiff(sortTimePoints[0], sortTimePoints[sortTimePoints.length - 1]);

  for (let i = 0; i < sortTimePoints.length - 1; i++) {
    minDiff = Math.min(minDiff, calTimeDiff(sortTimePoints[i], sortTimePoints[i + 1]));
  }

  return minDiff;
};

function sort(arr) {
  let pivot = arr[0];
  let mid = [pivot];
  let left = [];
  let right = [];

  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 1; i < arr.length; i++) {
    const compareRes = compareTime(arr[i], pivot);

    if (compareRes === 0) {
      mid.push(arr[i]);
    } else if (compareRes > 0) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  left = sort(left);
  right = sort(right);

  return left.concat(mid).concat(right);
}

function splitTimeStr(time) {
  return time.split(":").map((n) => +n);
}

function compareTime(a, b) {
  const [hourA, minA] = splitTimeStr(a);
  const [hourB, minB] = splitTimeStr(b);

  if (hourA < hourB) {
    return -1;
  } else if (hourA > hourB) {
    return 1;
  } else {
    if (minA < minB) {
      return -1;
    } else if (minA > minB) {
      return 1;
    }
  }

  return 0;
}

function calTimeDiff(a, b) {
  let [hourA, minA] = splitTimeStr(a);
  let [hourB, minB] = splitTimeStr(b);
  const fullMin = 60 * 24;
  let diff = 0;

  if (hourA > hourB) {
    diff = (hourA - hourB) * 60 - minB + minA;
  } else if (hourA < hourB) {
    diff = (hourB - hourA) * 60 - minA + minB;
  } else {
    diff = Math.abs(minA - minB);
  }

  return Math.min(diff, fullMin - diff);
}

module.exports = findMinDifference;
