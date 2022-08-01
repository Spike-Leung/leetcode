// https://leetcode-cn.com/problems/count-vowels-permutation/
/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
  const MOD = 10 ** 9 + 7;
  const add = (...nums) => (nums.reduce((a, b) => a + b) % MOD);
  let [a, e, i, o, u] = [1,1,1,1,1];

  while (--n) {
    ([a, e, i, o, u] = [add(e, i, u), add(a, i), add(e, o), i, add(i, o)]);
  }

  return add(a, e, i, o, u);
};

module.exports = countVowelPermutation;
