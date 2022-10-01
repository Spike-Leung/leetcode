// https://leetcode.cn/problems/reformat-phone-number/
/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
  const numbers = number.split("").filter((s) => s !== " " && s !== "-")
  const res = []

  while (numbers.length > 4) {
    let num = ""
    for (let i = 0; i < 3; i++) {
      num += numbers.shift()
    }
    res.push(num)
  }

  if (numbers.length === 4) {
    res.push(numbers.slice(0, 2).join(""), numbers.slice(2).join(""))
  } else {
    res.push(numbers.join(""))
  }

  return res.join("-")
};
module.exports = reformatNumber
