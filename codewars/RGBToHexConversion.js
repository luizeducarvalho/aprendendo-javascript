/* The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3 */

function decimalParaHexa (number) {
  if (number < 0) {
    return '00'
  } else if (number > 255) {
    return 'FF'
  } else {
    // return number.toString(16).toUpperCase()
    return ('0'+(Number(number).toString(16))).slice(-2).toUpperCase()
  }
}

function rgb(r, g, b){
  r = decimalParaHexa(r)
  g = decimalParaHexa(g)
  b = decimalParaHexa(b)
  return `${r}${g}${b}`
}

console.log(rgb(255, 255, 255)) // returns FFFFFF
console.log(rgb(255, 255, 300)) // returns FFFFFF
console.log(rgb(0,0,0)) // returns 000000
console.log(rgb(148, 0, 211)) // returns 9400D3
console.log(rgb(-142, 17, 259)) // returns 9400D3