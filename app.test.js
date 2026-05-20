const sapa = require('./index');

test('Fungsi sapa harus mengembalikan teks sapaan yang benar', () => {
  expect(sapa('Dunia')).toBe('Halo, Dunia!');
});