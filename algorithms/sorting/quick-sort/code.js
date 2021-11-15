function quickSort(arr) {
  if (arr.length === 0) {
    return [];
  }

  const pivot = arr[0];
  const left = [];
  const mid = [pivot];
  const right = [];

  for (i = 1; i < arr.length; ++i) {
    if (arr[i] === pivot) {
      mid.push(arr[i]);
    } else if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  const leftArr = quickSort(left);
  const rightArr = quickSort(right);

  return leftArr.concat(mid, rightArr);
}

module.exports = quickSort;
