const suma = require('./index');

test('suma 2 + 2 = 4', () => {
  expect(suma(2, 2)).toBe(4);
});