const  operations = require('./02-math');

test('adds 1 + 2 to equal 3', () => {
  expect(operations.sum(1, 2)).toBe(3);
});

test('multiplies 2 * 3 to equal 6', () => {
  expect(operations.multiply(2, 3)).toBe(6);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(operations.rest(5, 3)).toBe(2);
});

test('divides 10 / 2 to equal 5', () => {
  expect(operations.divide(10, 2)).toBe(5);
});
