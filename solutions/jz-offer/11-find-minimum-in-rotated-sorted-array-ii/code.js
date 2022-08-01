/**
 *
 * https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
 *
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  if (!numbers || numbers.length === 0) {
    throw new Error("Invalid Parameters");
  }

  let left = 0;
  let right = numbers.length - 1;
  /**
   * 针对没有旋转的数组，此时 numbers[left] < numbers[right]
   * 第一个数字就是最小的，直接返回即可，因此设置 mid = 0
   * 不符合 while 判断直接返回 numbers[mid]
   */
  let mid = 0;

  // 左边排序数组的值总是大于等于右边排序数组的值
  while (numbers[left] >= numbers[right]) {
    // 距离为 1， 表示找到了左右两个数组的边界，此时边界的右边就是最小值
    if (right - left === 1) {
      return numbers[right];
    }

    mid = left + Math.floor((right - left) / 2);

    if (numbers[left] === numbers[mid] && numbers[right] === numbers[mid]) {
      return searchInOrder(numbers, left, right);
    }

    // 中间值如果大于等于左边的值，意味着中间值在左边的数组，反之则在右边数组
    if (numbers[mid] >= numbers[left]) {
      left = mid;
    } else if (numbers[mid] <= numbers[right]) {
      right = mid;
    }
  }

  return numbers[mid];
};

function searchInOrder(numbers, left, right) {
  let result = numbers[left];

  for (let i = left + 1; i <= right; ++i) {
    if (numbers[i] < result) {
      result = numbers[i];
    }
  }

  return result;
}

module.exports = minArray;
