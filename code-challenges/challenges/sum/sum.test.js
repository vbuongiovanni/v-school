const sum = require('./sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 3 + 3 to equal 6', () => {
  expect(sum(3, 3)).toBe(6);
});

test('adds 6 + -6 to equal 0', () => {
  expect(sum(6, -6)).toBe(0);
});