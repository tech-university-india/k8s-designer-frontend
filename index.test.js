const {add} = require('./index');

test('should return 3 when we add 1 and 2', () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});