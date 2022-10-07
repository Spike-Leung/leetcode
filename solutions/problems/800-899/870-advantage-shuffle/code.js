// https://leetcode.cn/problems/advantage-shuffle/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
  const map = {}
  const n = nums1.length
  const res = new Array(n).fill(0)

  // 记录 nums2 每个值的下标，可能存在重复的元素，因此用一个数组存储
  nums2.forEach((v, i) => {
    if (map[v]) {
      map[v].push(i)
    } else {
      map[v] = [i]
    }
  })

  // 排序连个数组，依次比对
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  let i = 0, j = 0, k = n - 1

  // 遍历 nums1，直到遍历完
  while (i < n) {
    // 如果当前 nums1 不大于当前 nums2 的值，则无法取得优势，放到 nums2 中较大的值的位置即可，去抵消哪些很大的值
    while (i < n && nums1[i] <= nums2[j]) {
      res[map[nums2[k]].pop()] = nums1[i]
      k--
      i++
    }

    // 如果 nums1 当前值大于 nums2 当前值，则取得优势，放到 nums2 当前值对应的位置
    res[map[nums2[j]].pop()] = nums1[i]
    i++
    j++
  }

  return res
};
module.exports = advantageCount
