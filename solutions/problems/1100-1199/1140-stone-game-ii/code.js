// https://leetcode.cn/problems/stone-game-ii/
/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
  let sum = 0
  const len = piles.length
  const dp = Array.from({ length: len }, () => Array.from({ length: len + 1 }, () => 0))

  for (let i = len - 1; i >= 0; i--) {
    sum += piles[i]

    // m 从 1 开始，最大也就为 len，超过 len 后面就没有石头堆了
    for (let m = 1; m <= len; m++) {
      // 如果可以取完后面所有的石头，那么当前能去到的最多石头就是 sum
      if (i + 2 * m >= len) {
        dp[i][m] = sum
      } else {
        // 如果没法一下取完后面所有的石头
        // 那么对于先取的人，最优情况是让下一个人取到的更少，那么自己就能取到更多
        // 对于先取的人，这次可以决定取 x 堆，下一个人则从 i + x 的位置开始取，同时 M 更新为 Math.max(x, M)
        // 所以下一个人能取到的石子数量是  dp[i + x][Math.max(m, x)]，先取的人能得到的就是 sum - dp[i + x][Math.max(m, x)]
        // 从所有的 sum - dp[i + x][Math.max(m, x)] 中取得最大的，即为 dp[i][m] ，即先取的人在 i 位置，M 为 m 时能得到的最多石子
        for (let x = 1; x <= 2 * m; x++) {
          dp[i][m] = Math.max(dp[i][m], sum - dp[i + x][Math.max(m, x)])
        }
      }
    }
  }

  return dp[0][1]
};
module.exports = stoneGameII
