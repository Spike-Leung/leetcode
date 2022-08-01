const majorityElement = require("./code");

const arr = [1, 2, 3, 2, 2, 2, 5, 4, 2];
const majority = 2;
test(`$[arr] 's majority is ${majority}`, () => {
  expect(majorityElement(arr)).toBe(majority);
});
