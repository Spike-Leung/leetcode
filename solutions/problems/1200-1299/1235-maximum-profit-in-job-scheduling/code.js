// https://leetcode.cn/problems/maximum-profit-in-job-scheduling/
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  const n = startTime.length
  // 将 startTime, endTime, profit 合并成 jobs，并且按照 endTime 升序排序
  const jobs = startTime.map((st, i) => [st, endTime[i], profit[i]]).sort((a, b) => a[1] - b[1])
  // dp[i] 表示选择前 i 份工作的最大利润
  // dp[0] = 0
  const dp = new Array(n + 1).fill(0)

  // 选择前面 1 份工作，2份... n 份工作
  for (let i = 1; i <= n; i++) {
    // 对于每份工作，可以选择做或者不做，如果不做，那么 dp[i] = dp[i - 1]
    // 如果做，1.只做这份工作  2. 不仅做这份工作，这份工作开始前还有工作能做，也做了
    // dp[i] = Math.max(dp[i - 1], jobs[i - 1][2] + dp[k]), 其中 k 表示当前 job 开始前，还有 k 份工作可以做
    // k： 找到当前 jobs 的开始时间，二分查找，找到小于等于开始时间的 jobs 的数量
    const [st, et, pt] = jobs[i - 1]
    const prevJobCount = searchJobsCount(jobs, st, i - 1)

    dp[i] = Math.max(dp[i - 1], dp[prevJobCount] + pt)
  }

  // 返回前 n 份工作的最大利润
  return dp[n]
}

function searchJobsCount(jobs, targetStartTime, right) {
  let left = 0

  while (left <= right) {
    const mid = left + ((right - left) >> 1)
    const endTime = jobs[mid][1]

    if (endTime === targetStartTime) {
      // 可能有多个 endTime 都等于 targetStartTime，缩小左边界，找到最靠右的一个
      left = mid + 1
    } else if (endTime > targetStartTime) {
      right = mid - 1
    } else if (endTime < targetStartTime) {
      // 看看右边还有没有小于等于 targetStartTime 的
      left = mid + 1
    }
  }

  return left
}

module.exports = jobScheduling
