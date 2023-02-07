// https://leetcode.cn/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/
/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function(keyName, keyTime) {
  const nameGroup = {}
  const res = []

  keyName.forEach((name, index) => {
    if (!nameGroup[name]) {
      nameGroup[name] = [keyTime[index]]
    } else {
      nameGroup[name].push(keyTime[index])
    }
  })

  Object.entries(nameGroup).forEach(([name, times]) => {
    times.sort()

    for (let i = 0; i < times.length - 2; i++) {
      if (isLessAndEqualInOneHour(times[i], times[i + 2])) {
        res.push(name)
        break
      }
    }
  })

  return res.sort()
};

function isLessAndEqualInOneHour(t1, t2) {
  const [h1, m1] = t1.split(":").map((i) => +i)
  const [h2, m2] = t2.split(":").map((i) => +i)

  if (h1 === h2) {
    return true
  }

  if (h2 - h1 > 1) {
    return false
  }

  return m2 - m1 <= 0
}
module.exports = alertNames
