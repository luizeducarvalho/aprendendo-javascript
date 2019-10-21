/* You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 ==> 2071
If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1 */

function biggerNumberWithAllDigitsFromArray(arr) {
    const n = arr.join('')
    const numbers = String(n).split('')
    const sortedNumbers = numbers.sort((a, b) => (b - a))
    const biggerNumber = Number(sortedNumbers.join(''))
    return biggerNumber
}

function arrayWithallTheSameDigits(arr) {
    let number = arr.join('')
    let regExp = /^(\d)\1+$/  // Todos os 11 dígitos iguais
    if (regExp.test(number)) {
        return true
    } else {
        return false
    }
}

function hasTheSameNumbers(inputNumber, targetNumber) {
    const input = String(inputNumber).split('')
    const target = String(targetNumber).split('')
    const sortedInput = input.sort((a,b) => a - b).join('')
    const sortedTarget = target.sort((a,b) => a - b).join('')
    return input.every(number => target.includes(number)) && target.every(number => input.includes(number)) && sortedInput == sortedTarget
}

function nextBigger(n) {
    let number = String(n).split('')
    if (number.length == 1 || arrayWithallTheSameDigits(number) || n == biggerNumberWithAllDigitsFromArray(number) ) { return -1 }
    let target = n
    do {
        target++
    } while (!hasTheSameNumbers(n, target));
    return target
}


console.log(nextBigger(11))
console.log(nextBigger(9))
console.log(nextBigger(531))
console.log(nextBigger(2017))// ,2071)
console.log(nextBigger(144))// ,414)
console.log(nextBigger(414))// ,441)
