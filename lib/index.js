function sortData(data, options = {}) {
  const { key, order = 'asc' } = options;

  if (!Array.isArray(data)) {
    throw new Error('Data must be an array.');
  }

  if (data.length === 0) {
    return data;
  }

  const type = typeof data[0];
  
  if (type === 'object' && !key) {
    throw new Error('Key is required for sorting objects.');
  }

  return data.slice().sort((a, b) => {
    let valueA = type === 'object' ? a[key] : a;
    let valueB = type === 'object' ? b[key] : b;

    if (typeof valueA === 'string' || typeof valueB === 'string') {
      valueA = valueA.toString();
      valueB = valueB.toString();
      return order === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    } else {
      return order === 'asc' ? valueA - valueB : valueB - valueA;
    }
  });
}


module.exports = sortData
