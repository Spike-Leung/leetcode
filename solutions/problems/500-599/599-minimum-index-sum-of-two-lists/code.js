// https://leetcode-cn.com/problems/minimum-index-sum-of-two-lists/
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let minIndexSum = 2000;
  const n = list1.length;
  const m = list2.length;
  const listIndexMap = new Map();
  let res = [];

  for (let i = 0; i < n; i++) {
    listIndexMap.set(list1[i], i);
  }

  for (let i = 0; i < m; i++) {
    const index = listIndexMap.get(list2[i]);

    if (index === undefined) {
      continue;
    }

    const indexSum = i + index;

    if (indexSum < minIndexSum) {
      minIndexSum = i + index;
      res = [list2[i]];
    } else if (indexSum === minIndexSum) {
      res.push(list2[i]);
    }
  }

  return res;
};

module.exports = findRestaurant;
