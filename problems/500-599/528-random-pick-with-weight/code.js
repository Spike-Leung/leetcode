/**
 * 528. Random Pick with Weight
 *
 * https://leetcode-cn.com/problems/random-pick-with-weight/
 */
/**
 * @param {number[]} w
 */
var Solution = function (w) {
  const prefixSumArr = [];
  let weightSum = 0;

  prefixSumArr[0] = w[0];
  weightSum += w[0];

  for (let i = 1; i < w.length; i++) {
    prefixSumArr[i] = prefixSumArr[i - 1] + w[i];
    weightSum += w[i];
  }

  this.prefixSumArr = prefixSumArr;
  this.weightSum = weightSum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const target = Math.random() * this.weightSum;
  let left = 0;
  let right = this.prefixSumArr.length;

  while (left < right) {
    const mid = Math.floor((right - left) / 2) + left;
    const midVal = this.prefixSumArr[mid];

    if (midVal === target) {
      return mid;
    } else if (midVal > target) {
      right = mid;
    } else if (midVal < target) {
      left = mid + 1;
    }
  }

  return left;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

var obj = new Solution([3, 14, 1, 7]);
var arr = [];

for (let i = 0; i < 10000; i++) {
  arr.push(obj.pickIndex());
}

console.log(arr);
