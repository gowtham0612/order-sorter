function sortData(data, order) {
  if (order !== "asc" && order !== "desc") {
    throw new Error('Invalid sort order. Use "asc" or "desc".')
  }

  const sortedData = data.slice()

  sortedData.sort((a, b) => {
    const isAscending = order === "asc"
    if (typeof a === "string" && typeof b === "string") {
      return isAscending ? a.localeCompare(b) : b.localeCompare(a)
    } else {
      return isAscending ? a - b : b - a
    }
  })

  return sortedData
}

module.exports = sortData
