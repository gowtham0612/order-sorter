function sortData(data, order) {
    if (order !== 'asc' && order !== 'desc') {
      throw new Error('Invalid sort order. Use "asc" or "desc".');
    }
  
    const sortedData = data.slice();
  
    sortedData.sort((a, b) => {
      if (order === 'asc') {
        return a - b;
      } else {
        return b - a;
      }
    });
  
    return sortedData;
  }
  
  module.exports = sortData;
  