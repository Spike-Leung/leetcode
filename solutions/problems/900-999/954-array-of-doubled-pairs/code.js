// https://leetcode-cn.com/problems/array-of-doubled-pairs/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function (arr) {
  const cnt = new Map();
  // 统计每个数字的次数
  for (const c of arr) {
    cnt.set(c, (cnt.get(c) || 0) + 1);
  }

  // 对于 0，0 的两倍还是 0，因此要看看 0 是否能被 2 整除
  if ((cnt.get(0) || 0) % 2 !== 0) {
    return false;
  }

  const vals = [...cnt.keys()].sort((a, b) => Math.abs(a) - Math.abs(b));

  for (const c of vals) {
    if ((cnt.get(2 * c) || 0) < cnt.get(c)) {
      return false;
    }

    cnt.set(2 * c, (cnt.get(2 * c) || 0) - cnt.get(c));
  }

  return true;
};
module.exports = canReorderDoubled;
