function reverseString(string) {
  let reversedString = ""
  for (i = 0; i < string.length; i++) {
    reversedString += string[string.length - i - 1]
  }
  return reversedString
}

module.exports = reverseString
