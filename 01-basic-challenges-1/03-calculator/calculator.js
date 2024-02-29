function calculator(num1, num2, string) {
  switch (string) {
    case "+":
      return num1 + num2
    case "-":
      return num1 - num2
    case "/":
      return num1 / num2
    case "*":
      return num1 * num2
    default:
      return "Invalid Operator"
  }
}

module.exports = calculator
