const translateToChineseNumber = require("./code");

test("234 translate to 贰佰参拾肆", () => {
  expect(translateToChineseNumber(234)).toBe("贰佰参拾肆");
});

test("204 translate to 贰佰零肆", () => {
  expect(translateToChineseNumber(204)).toBe("贰佰零肆");
});

test("20004 translate to 贰万零肆", () => {
  expect(translateToChineseNumber(20004)).toBe("贰万零肆");
});

test("20404 translate to 贰万零肆佰零肆", () => {
  expect(translateToChineseNumber(20404)).toBe("贰万零肆佰零肆");
});

test("100400230 translate to 壹亿零肆拾万零贰佰参拾", () => {
  expect(translateToChineseNumber(100400230)).toBe("壹亿零肆拾万零贰佰参拾");
});

test("104002000 translate to 壹亿零肆佰万零贰仟", () => {
  expect(translateToChineseNumber(104002000)).toBe("壹亿零肆佰万零贰仟");
});

test("00004002000 translate to 肆佰万零贰仟", () => {
  expect(translateToChineseNumber("004002000")).toBe("肆佰万零贰仟");
});

test("402000000 translate to 肆亿零贰佰万", () => {
  expect(translateToChineseNumber("402000000")).toBe("肆亿零贰佰万");
});
