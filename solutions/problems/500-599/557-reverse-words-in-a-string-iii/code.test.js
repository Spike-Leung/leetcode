const reverseWords = require("./code");

test(`"Let's take LeetCode contest" reverse to "s'teL ekat edoCteeL tsetnoc"`, () => {
  expect(reverseWords("Let's take LeetCode contest")).toBe(
    "s'teL ekat edoCteeL tsetnoc"
  );
});

test(`"God Ding" to be "doG gniD"`, () => {
  expect(reverseWords("God Ding")).toBe("doG gniD");
});
