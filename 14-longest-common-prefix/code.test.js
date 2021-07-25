const longestCommonPrefix = require("./code");

test(`longest common prefix of ["flower","flow","flight"] is "fl"`, () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
});

test(`longest common prefix of ["dog","racecar","car"] is ""`, () => {
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
});
