// https://leetcode.cn/problems/finding-the-users-active-minutes/
/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
  let userUniqTime = {}

  for (const [id, time] of logs) {
    if (!userUniqTime[id]) {
      userUniqTime[id] = [time]
    } else if (userUniqTime[id].includes(time)) {
      continue
    } else {
      userUniqTime[id].push(time)
    }
  }

  const answer = Array.from({ length: k }, () => 0)

  Object.values(userUniqTime).forEach((times) => {
    const timeCount = times.length
    answer[timeCount - 1]++
  })

  return answer
};
module.exports = findingUsersActiveMinutes
