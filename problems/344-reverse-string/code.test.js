const reverseString = require("./code");

test(`["h","e","l","l","o"] reverse to ["o","l","l","e","h"]`, () => {
  const s = ["h","e","l","l","o"];
  reverseString(s);

  expect(s.toString()).toBe(["o","l","l","e","h"].toString());
});

test(`["H","a","n","n","a","h"] reverse to ["h","a","n","n","a","H"]`, () => {
  const s = ["H","a","n","n","a","h"];
  reverseString(s);

  expect(s.toString()).toBe(["h","a","n","n","a","H"].toString());
});
