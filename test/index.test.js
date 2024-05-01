const sortData = require('../lib/index');

describe('sortData', () => {
  test('sorts data in ascending order', () => {
    const data = [3, 1, 4, 1, 5, 9, 2, 6, 5];
    expect(sortData(data, 'asc')).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
  });

  test('sorts data in descending order', () => {
    const data = [3, 1, 4, 1, 5, 9, 2, 6, 5];
    expect(sortData(data, 'desc')).toEqual([9, 6, 5, 5, 4, 3, 2, 1, 1]);
  });

  test('throws error for invalid sort order', () => {
    const data = [3, 1, 4];
    expect(() => sortData(data, 'invalid')).toThrow('Invalid sort order. Use "asc" or "desc".');
  });
});
