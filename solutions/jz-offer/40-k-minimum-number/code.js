/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  if (k > arr.length) {
    return arr;
  }

  return quickSort(arr, k);
};

function quickSort(arr, k, lowIndex = 0, highIndex = arr.length - 1) {
  const swap = (leftIndex, rightIndex) => {
    const temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
  };

  let l = lowIndex;
  let r = highIndex;
  const pivot = arr[lowIndex];

  while (l < r) {
    while (l < r && arr[r] >= pivot) {
      r--;
    }

    while (l < r && arr[l] <= pivot) {
      l++;
    }

    swap(l, r);
  }

  swap(lowIndex, l);

  if (l < k) {
    return quickSort(arr, k, l + 1, highIndex);
  } else if (l > k) {
    return quickSort(arr, k, lowIndex, l - 1);
  }

  return arr.slice(0, l);
}

module.exports = getLeastNumbers;
