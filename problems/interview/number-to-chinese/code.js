/**
 * https://docs.qq.com/doc/DWVJOa3VvSHlnbWpN?_t=1627304265441
 */

/**
* 支持将0到99999999范围内的整数转换成中文
* 中文使用右边这些汉字:零、壹、贰、参、肆、伍、陆、柒、捌、玖、拾、佰、仟、万、亿
* 例如 234 转换成 贰佰参拾肆，204转换成贰佰零肆

* @param number 要转换的数字
* @param string 转换后的中文数字
*/
const translateToChineseNumber = (num) => {
  if (!num) {
    return "";
  }

  const chineseCarryMap = {
    1: "拾",
    2: "佰",
    3: "仟",
    4: "万",
    5: "拾万",
    6: "佰万",
    7: "仟万",
    8: "亿",
    9: "拾亿",
    10: "佰亿",
  };

  const chineseNumberMap = {
    0: "零",
    1: "壹",
    2: "贰",
    3: "参",
    4: "肆",
    5: "伍",
    6: "陆",
    7: "柒",
    8: "捌",
    9: "玖",
    10: "拾",
  };
  const emptyCarry = "";
  let hasLastContinueZero = true;

  // 123 will reverse to [3,2,1]
  const reversedNumArr = Number.parseInt(num, 10)
    .toString()
    .split("")
    .reverse();

  const translatedNumberArr = reversedNumArr.map((n, index) => {
    const isZero = n === "0";
    let chineseNum = chineseNumberMap[n];
    let chineseCarry = isZero
      ? emptyCarry
      : chineseCarryMap[index] || emptyCarry;

    !isZero && (hasLastContinueZero = false);
    // last continues zero of the number not need to translate
    hasLastContinueZero && (chineseNum = "");

    return `${chineseNum}${chineseCarry}`;
  });

  // reverse back to origin number and replace continues zero in middle to be single zero
  return translatedNumberArr
    .reverse()
    .join("")
    .replace(/(零){2,}/g, "$1");
};

module.exports = translateToChineseNumber;
