const replaceSpace = require("./code");

const s = "We are happy.";

test(`input = ${s}  output = 'We%20are%20happy.'`, () => {
  expect(replaceSpace(s)).toBe("We%20are%20happy.");
});
