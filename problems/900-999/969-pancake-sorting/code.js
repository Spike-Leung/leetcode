// https://leetcode-cn.com/problems/pancake-sorting/
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
  const ret = [];

  for (let n = arr.length; n > 1; n--) {
    let index = 0;

    for (let i = 1; i < n; i++) {
      if (arr[i] >= arr[index]) {
        index = i;
      }
    }

    if (index === n - 1) {
      continue;
    }

    reverse(arr, index);
    reverse(arr, n - 1);
    ret.push(index + 1);
    ret.push(n);
  }

  return ret;
};

function reverse(arr, end) {
  let left = 0;
  let right = end;

  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
}

module.exports = pancakeSort;
