
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) return []
  let newArray = matrix.map((item, index) => { return index % 2 ? item.reverse() : item })
  return [].concat(...newArray)
}
