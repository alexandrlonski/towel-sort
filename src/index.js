
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (Array.isArray(matrix) && matrix.length) {
    return matrix.reduce((arr, elem, i) => !(i % 2) ? arr.concat(elem) : arr.concat(elem.reverse()));
  } else {
    return [];
  }
}

