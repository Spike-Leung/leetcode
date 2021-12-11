// https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/
/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
  const strNums = nums.map(n => "" + n);

  quickSort(strNums);

  return strNums.join("");
};

function quickSort(strNums, lowIndex = 0, highIndex = strNums.length - 1) {
  if (lowIndex >= highIndex) {
    return;
  }

  const pivot = strNums[lowIndex];
  let l = lowIndex;
  let r = highIndex;

  const swap = (firstIndex, secondIndex) => {
    const temp = strNums[firstIndex];
    strNums[firstIndex] = strNums[secondIndex];
    strNums[secondIndex] = temp;
  };

  while (l < r) {
    while (l < r && ((strNums[r] + pivot) >= (pivot + strNums[r]))) {
      r--;
    }

    while (l < r && ((strNums[l] + pivot) <= (pivot + strNums[l]))) {
      l++;
    }

    swap(l, r);
  }

  swap(lowIndex, l);

  quickSort(strNums, lowIndex, l - 1);
  quickSort(strNums, l + 1, highIndex);
}

module.exports = minNumber;
