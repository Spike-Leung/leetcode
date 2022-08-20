// https://leetcode.cn/problems/sort-characters-by-frequency/
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const freq = {}
  const n = s.length
  const strs = [...s]

  for (let i = 0; i < n; i++) {
    const char = s[i]
    if (freq[char]) {
      freq[char]++
    } else {
      freq[char] = 1
    }
  }

  quickSort(strs, 0, n - 1, freq)

  return strs.join("")
};

function quickSort(strs, left, right, freq) {
  if (left >= right) {
    return
  }

  const pivotIndex = left + Math.floor(Math.random() * (right - left + 1))
  swap(strs, left, pivotIndex)
  const pivot = strs[left]
  let i = left + 1
  let gt = left
  let lt = right + 1

  while (i < lt) {
    const char = strs[i]

    if (char === pivot) {
      i++
    } else if (freq[char] >= freq[pivot]) {
      swap(strs, ++gt, i)
      i++
    } else if (freq[char] < freq[pivot]) {
      swap(strs, --lt, i)
    }
  }

  swap(strs, left, gt)

  quickSort(strs, left, gt - 1, freq)
  quickSort(strs, lt, right, freq)
}


function swap(strs, i, j) {
  const temp = strs[i]
  strs[i] = strs[j]
  strs[j] = temp
}

module.exports = frequencySort
