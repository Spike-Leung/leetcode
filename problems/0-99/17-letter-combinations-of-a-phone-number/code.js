/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const digitLetterMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
  };

  if (digits.length === 0) {
    return [];
  }

  if (digits.length === 1) {
    return digitLetterMap[digits];
  }

  const firstDigit = digits[0];
  const letters = digitLetterMap[firstDigit];
  const combinations = [];
  const leftDigitCombinations = letterCombinations(digits.slice(1));

  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < leftDigitCombinations.length; j++) {
      combinations.push(letters[i] + leftDigitCombinations[j]);
    }
  }

  return combinations;
};

module.exports = letterCombinations;
