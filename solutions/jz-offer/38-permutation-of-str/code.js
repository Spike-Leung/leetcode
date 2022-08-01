/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  if (s.length === 0) {
    return [];
  }

  const result = [];

  permutationStr(s, "", result);

  return result;
};

function permutationStr(s, preStr, result) {
  if (s.length === 0) {
    return;
  }

  if (s.length === 1) {
    result.push(`${preStr}${s}`);
  }

  const visited = {};

  for (let i = 0; i < s.length; i++) {
    if (visited[s[i]] === 1) {
      continue;
    }

    visited[s[i]] = 1;
    const nextStr = s.slice(0, i) + s.slice(i + 1);
    const nextPreStr = `${preStr}${s[i]}`;
    permutationStr(nextStr, nextPreStr, result);
  }
}

module.exports = permutation;
