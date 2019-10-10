/* Write a function, persistence, that takes in a positive parameter num and returns its
multiplicative persistence, which is the number of times you must multiply the digits in
num until you reach a single digit.

For example:
persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit
persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2
persistence(4) === 0 // because 4 is already a one-digit number */

function persistence(n) {
    let contador = 0
    digitos = numeroParaArray(n)

    for (contador = 0; digitos.length > 1; contador++) {
        digitos = numeroParaArray(digitos.reduce( (a, b) => a * b ))
    }
    console.log(`Cont: ${contador}`)
}

function multiplica(total, num) {
    return total * num;
}

function numeroParaArray(num) {
    return num.toString().split('')
}


persistence(123)
persistence(999)
persistence(39)
persistence(4)
persistence(25)