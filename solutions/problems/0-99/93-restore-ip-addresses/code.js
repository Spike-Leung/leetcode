// https://leetcode.cn/problems/restore-ip-addresses/
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const length = s.length
  const res = []

  if (length < 4 || length > 12) {
    return res
  }

  const path = []

  // start: 从哪一位开始划分 IP 段
  // residue: 剩下多少个 IP 段需要划分
  function backtrace(start, residue) {
    // 遍历字符串
    if (start === length) {
      // 分完了 4 段
      residue === 0 && (res.push(path.join(".")))
      return
    }

    for (let i = start; i < start + 3; i++) {
      // 遍历完字符串
      if (i >= length) {
        break;
      }

      // 剩下的字符超过 IP 可分配的位数
      if (residue * 3 < length - i) {
        continue
      }

      // 判断 IP 是否合法
      if (isValidIp(s, start, i)) {
        path.push(s.slice(start, i + 1))
        backtrace(i + 1, residue - 1)
        path.pop()
      }
    }
  }

  backtrace(0, 4)

  return res
};

function isValidIp(s, start, end) {
  const len = end - start + 1
  const value = +s.slice(start, end + 1)

  // 前置 0
  if (len > 1 && s[start] === "0") {
    return false
  }

  // 判断取值范围
  return value >= 0 && value <= 255
}

module.exports = restoreIpAddresses
