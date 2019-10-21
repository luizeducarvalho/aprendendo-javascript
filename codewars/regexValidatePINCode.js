/* ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

eg:

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false */

const isValidPIN = str => /^(\d{4}|\d{6})$/.test(str)

function validatePIN(pin) {
  return isValidPIN(pin)
}
function calculaSoma(arr) {
  return arr.reduce(function (accu, elem, index, cpf) {
      return accu + elem * (cpf.length + 1 - index)
  }, 0)
}

console.log(validatePIN("1234"), validatePIN("12345"), validatePIN("a234"))