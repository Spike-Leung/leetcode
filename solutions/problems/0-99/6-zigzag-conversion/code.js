/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows < 2) {
    return s;
  }

  const rows = new Array(numRows).fill(0).map(() => []);
  let rowIndex = 0;
  let flag = -1;

  for (let i = 0; i < s.length; i++) {
    rows[rowIndex].push(s[i]);

    if (rowIndex === 0 || rowIndex === (numRows - 1)) {
      flag = -flag;
    }

    rowIndex += flag;
  }

  return rows.map((i) => i.join("")).join("");
};

module.exports = convert;
