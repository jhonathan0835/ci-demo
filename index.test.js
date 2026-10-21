// quiero ver la integración
const suma = require('./index');

test('suma 2 + 2 = 5', () => {
  expect(suma(2, 2)).toBe(4);
});