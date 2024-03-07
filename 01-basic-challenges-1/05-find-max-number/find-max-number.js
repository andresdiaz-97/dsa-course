function findMaxNumber(array) {
  let maxNum = 0
  for (i = 0; i <= array.length; i++) {
    if (array[i] > maxNum) {
      maxNum = array[i]
    }
  }
  return maxNum
}

module.exports = findMaxNumber
