const simplifyPath = require("./code");

const path = "/home/";
const sPath = "/home";
test(`${path} can be simplified to ${sPath}`, () => {
  expect(simplifyPath(path)).toBe(sPath);
});

const path1 = "/../";
const sPath1 = "/";
test(`${path1} can be simplified to ${sPath1}`, () => {
  expect(simplifyPath(path1)).toBe(sPath1);
});

const path2 = "/home//foo/";
const sPath2 = "/home/foo";
test(`${path2} can be simplified to ${sPath2}`, () => {
  expect(simplifyPath(path2)).toBe(sPath2);
});

const path3 = "/a/./b/../../c/";
const sPath3 = "/c";
test(`${path3} can be simplified to ${sPath3}`, () => {
  expect(simplifyPath(path3)).toBe(sPath3);
});

const path4 = "/a/../../b/../c//.//";
const sPath4 = "/c";
test(`${path4} can be simplified to ${sPath4}`, () => {
  expect(simplifyPath(path4)).toBe(sPath4);
});

const path5 = "/a//b////c/d//././/..";
const sPath5 = "/a/b/c";
test(`${path5} can be simplified to ${sPath5}`, () => {
  expect(simplifyPath(path5)).toBe(sPath5);
});
