// https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/
/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
  if (num < 0) {
    return 0;
  }

  const strNum = "" + num;

  if (strNum.length === 0) {
    return 0;
  }

  if (strNum.length === 1) {
    return 1;
  }

  const translateSingleNumCount = translateNum(+strNum.slice(1));
  let translateTwoNumCount = 0;

  const twoNum = +strNum.slice(0, 2);

  if (twoNum >= 10 && twoNum <= 25) {
    translateTwoNumCount = translateNum(+strNum.slice(2));
  }


  return translateSingleNumCount + translateTwoNumCount;
};

module.exports = translateNum;
