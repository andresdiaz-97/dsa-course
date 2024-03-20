function titleCase(string) {
  let result = ""
  let mayus = true
  for (i = 0; i < string.length; i++) {
    console.log(string[i].toUpperCase())
    if (i === 0) {
      result += string[i].toUpperCase()
      mayus = false
    } else if (mayus === false && string[i] !== " ") {
      result += string[i].toLowerCase()
    } else if (mayus === true) {
      result += string[i].toUpperCase()
      mayus = false
    } else if (string[i] === " ") {
      mayus = true
      result += string[i].toUpperCase()
    }
  }
  console.log(`this is a result ${result}`)
  return result
}

module.exports = titleCase
