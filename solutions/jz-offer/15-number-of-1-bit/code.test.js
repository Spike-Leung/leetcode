const {
  hammingWeight,
  hammingWeight2,
} = require("./code");

const bit1 = 11;
const bit2 = 128;
const bit3 = -3;

test(`${bit1}  has 3 1bit`, () => {
  expect(hammingWeight(bit1)).toBe(3);
  expect(hammingWeight2(bit1)).toBe(3);
});

test(`${bit2}  has 1 1bit`, () => {
  expect(hammingWeight(bit2)).toBe(1);
  expect(hammingWeight2(bit2)).toBe(1);
});

test(`${bit3}  has 31 1bit`, () => {
  expect(hammingWeight(bit3)).toBe(31);
  expect(hammingWeight2(bit3)).toBe(31);
});
