// https://leetcode-cn.com/problems/baseball-game/
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  const n = ops.length;
  const stack = [];
  let sum = 0;

  for (let i = 0; i < n; i++) {
    const op = ops[i];

    if (op === "+") {
      const val = stack[stack.length - 1] + stack[stack.length - 2];
      sum += val;
      stack.push(val);
    } else if (op === "D") {
      const val = stack[stack.length - 1] * 2;
      sum += val;
      stack.push(val);
    } else if (op === "C") {
      sum -= stack.pop();
    } else {
      sum += +op;
      stack.push(+op);
    }
  }

  return sum;
};

module.exports = calPoints;
