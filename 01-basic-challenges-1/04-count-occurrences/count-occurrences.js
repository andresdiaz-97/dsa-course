function countOccurrences(string, char) {
  let result = 0
  for (i = 0; i < string.length; i++) {
    if (string[i] === char) {
      result++
    }
  }
  return result
}

module.exports = countOccurrences
