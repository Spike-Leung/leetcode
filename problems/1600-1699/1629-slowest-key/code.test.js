const slowestKey = require("./code");

const releaseTimes = [9,29,49,50];
const keysPressed = "cbcd";
const key = "c";
test(`Slowest Key of ${keysPressed} is ${key}`, () => {
  expect(slowestKey(releaseTimes, keysPressed)).toBe(key);
});

const releaseTimes1 = [12,23,36,46,62];
const keysPressed1 = "squda";
const key1 = "a";
test(`Slowest Key of ${keysPressed1} is ${key1}`, () => {
  expect(slowestKey(releaseTimes1, keysPressed1)).toBe(key1);
});
