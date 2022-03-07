/**
 * Q2: 实现一个加权随机函数
 *
 * 此函数接收一个整数数组 arr, 此数组:
 *  1. 元素个数 N < 10000
 *  2. 元素的值大于 0 且小于 100
 *
 * 返回一个随机函数, 此随机函数:
 *  1. 返回 [0, N - 1] 之间的一个随机整数
 *  2. 每个整数 i 被返回的概率为:
 *     数组 arr 的第 i 个元素的值 / 数组 arr 的所有元素之和
 *  3. 时间复杂度为 O(1)
 *
 * 例: 给定一个数组 input, 值为 [4, 2, 1, 3],
 *    调用 createWeightedRandom(input), 应当
 *    返回一个函数, 此函数返回一个 0 - 3 之间的一个
 *    随机整数, 相应的概率分别为:
 *    4/10, 2/10, 1/10, 3/10.
 */
/*
  function createWeightedRandom(input) {
  // show me the code, please delete the following line.
  // throw new Error("not implemented");
  }
*/

function createWeightedRandom(input) {
  let weightSum = input[0];
  const prefix = [input[0]];
  const n = input.length;

  for (let i = 1; i < n; i++) {
    weightSum += input[i];
    prefix[i] = prefix[i - 1] + input[i];
  }

  return function() {
    const random = Math.random() * weightSum;

    let left = 0;
    let right = prefix.length - 1;

    while (left <= right) {
      let mid = left + Math.floor((right - left) >> 1);
      let midVal = prefix[mid];

      if (midVal === random) {
        return mid;
      } else if (midVal < random) {
        left = mid + 1;
      } else if (midVal > random) {
        right = mid - 1;
      }
    }

    return left;
  };
}


module.exports = createWeightedRandom;
