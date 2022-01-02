// https://leetcode-cn.com/problems/elimination-game/
/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  if (n === 1) {
    return 1;
  }

  let arr = new Array(n).fill(0).map((i, index) => index + 1);
  let isFromLeft = true;

  while (arr.length > 1) {
    const leftArr = [];

    if (isFromLeft) {
      for (let i = 0; i < arr.length; i += 2) {
        arr[i + 1] && (leftArr.push(arr[i + 1]));
      }
      arr = leftArr;
    } else {
      for (let i = arr.length - 1; i > 0; i -= 2) {
        arr[i - 1] && (leftArr.unshift(arr[i - 1]));
      }
      arr = leftArr;
    }

    isFromLeft = !isFromLeft;
  }

  return arr[0];
};

module.exports = lastRemaining;
