const isPalinDrome = require("./isPalinDrome.js");

test("My Example - single Digit", () => {
  expect(isPalinDrome(0)).toBe(true)
})

test("My Example - large digit", () => {
  expect(isPalinDrome(999900009999)).toBe(true)
})

test("My Example - 1", () => {
  expect(isPalinDrome(121)).toBe(true)
})

test("My Example - 2", () => {
  expect(isPalinDrome(-121)).toBe(false)
})

test("My Example - 2", () => {
  expect(isPalinDrome(10)).toBe(false)
})