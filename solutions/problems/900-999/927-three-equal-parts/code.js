// https://leetcode.cn/problems/three-equal-parts/
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var threeEqualParts = function(arr) {
  const sum = arr.reduce((acc, curr) => acc += curr, 0)
  const n = arr.length
  const partialCnt = sum / 3

  if (sum % 3 !== 0) {
    return [-1, -1]
  }

  // 全都是 0 ，那么没部分至少分配一个 0 即可
  if (sum === 0) {
    return [0, 2]
  }

  // 找到每部分开头的 1 的下标
  let first, second, third
  let cnt = 0
  for (let i = 0; i < n; i++) {
    cnt += arr[i]

    if (cnt === 1) {
      first ??= i
    } else if (cnt === partialCnt + 1) {
      second ??= i
    } else if (cnt === 2 * partialCnt + 1) {
      third ??= i
    }
  }

  // 遍历，判断每部分是否都相等
  for (;third < n; first++, second++, third++) {
    if (arr[first] !== arr[second] || arr[first] !== arr[third]) {
      return [-1, -1]
    }
  }

  return [first - 1, second]
};
module.exports = threeEqualParts
