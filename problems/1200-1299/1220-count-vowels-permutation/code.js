// https://leetcode-cn.com/problems/count-vowels-permutation/
/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
  const nextVowelMap = {
    a: ["e"],
    e: ["a", "i"],
    i: ["a", "e", "u", "o"],
    o: ["i", "u"],
    u: ["a"]
  };

  let prevVowelCountMap = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
  };

  const dp = [0, 5];
  const MOD = (10**9 + 7);

  for (let i = 2; i <= n; i++) {
    let cnt = 0;
    const nextVowelCountMap = { a: 0, e: 0, i: 0, o: 0, u: 0 };

    Object.entries(prevVowelCountMap).forEach(([v, count]) => {
      nextVowelMap[v].forEach((nextV) => {
        nextVowelCountMap[nextV] += (count % MOD);
        cnt += (count % MOD);
      });
    });

    prevVowelCountMap = nextVowelCountMap;

    dp[i] = cnt;
  }

  return dp[n] % MOD;
};

module.exports = countVowelPermutation;
