// https://leetcode-cn.com/problems/additive-number/
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
  let n = num.length;

  for (let secondStart = 1; secondStart < n - 1; secondStart++) {
    if (num[0] === "0" && secondStart !== 1) {
      break;
    }

    for (let secondEnd = secondStart; secondEnd < n - 1; secondEnd++) {
      if (num[secondStart] === "0" && secondStart !== secondEnd) {
        break;
      }

      if (valid(num, secondStart, secondEnd)) {
        return true;
      }
    }
  }

  return false;
};

function valid(num, secondStart, secondEnd) {
  const n = num.length;
  let firstStart = 0;

  while (secondEnd <= n - 1) {
    const third = strAdd(
      num.slice(firstStart, secondStart),
      num.slice(secondStart, secondEnd + 1)
    );
    const thirdStart = secondEnd + 1;
    const thirdEnd = secondEnd + third.length;

    if (thirdEnd >= n || num.slice(thirdStart, thirdEnd + 1) !== third) {
      break;
    }

    if (thirdEnd === n - 1) {
      return true;
    }

    firstStart = secondStart;
    secondStart = thirdStart;
    secondEnd = thirdEnd;
  }

  return false;
}

function strAdd(str1, str2) {
  str1 = str1.split("").reverse();
  str2 = str2.split("").reverse();
  let carry = 0;
  let ans = [];
  let index = 0;

  while (index < str1.length || index < str2.length) {
    const sum = (+str1[index] || 0) + (+str2[index] || 0) + carry;
    ans.push(sum % 10);
    carry = sum / 10 >= 1 ? 1 : 0;
    index++;
  }

  if (carry === 1) {
    ans.push(1);
  }

  return ans.reverse.join("");
}

module.exports = isAdditiveNumber;
