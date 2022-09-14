const multiples = require("./multiples");

test("basic tests", () => {
  expect(multiples(10)).toBe(23);
  expect(multiples(4)).toBe(3);
})
test("testing Zero", () => {
  expect(multiples(0)).toBe(0);
})
test("testing negatives", () => {
  expect(multiples(-10)).toBe(0);
  expect(multiples(-4)).toBe(0);
})