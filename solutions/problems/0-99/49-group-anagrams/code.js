 // https://leetcode.cn/problems/group-anagrams/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {}
  const charCodeOfA = "a".charCodeAt(0)

  for (const s of strs) {
    const count = new Array(26).fill(0)

    for (let c of s) {
      count[c.charCodeAt(0) - charCodeOfA]++
    }

    map[count] ? map[count].push(s) : map[count] = [s]
  }

  return Object.values(map)
};

module.exports = groupAnagrams
