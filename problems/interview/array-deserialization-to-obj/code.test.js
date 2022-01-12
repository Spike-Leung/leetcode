const deserialization = require("./code");

const arr = [0, 'a', 1, 'b', 2, 'c', 3, 'e',   2, 'd', 1, 'x', 0, 'ff'];
const obj = {
  a: {
    b: {
      c: {
        e: null
      },
      d: null
    },
    x: null
  },
  ff: null
};
test(`${arr} is deserialized to ${obj}`, () => {
  expect(deserialization(arr)).toEqual(obj);
});
