import ErrorRepository from '../errorRepository';

test('200', () => {
  const error = new ErrorRepository();
  expect(error.translate(200)).toBe('OK');
});

test('400', () => {
  const error = new ErrorRepository();
  expect(error.translate(400)).toBe('Bad Request');
});

test('500', () => {
  const error = new ErrorRepository();
  expect(error.translate(500)).toBe('Unknown error');
});
