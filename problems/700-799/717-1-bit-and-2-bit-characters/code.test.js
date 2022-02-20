const isOneBitCharacter = require("./code");

const bits = [1,0,0];
test(`Last bits of ${bits} must be 1 bit`, () => {
  expect(isOneBitCharacter(bits)).toBe(true);
});

const bits1 = [1,1,1,0];
test(`Last bits of ${bits1} must Not be 1 bit`, () => {
  expect(isOneBitCharacter(bits1)).toBe(false);
});

const bits2 = [0,1,0,1,1,0];
test(`Last bits of ${bits2} must be 1 bit`, () => {
  expect(isOneBitCharacter(bits2)).toBe(true);
});
