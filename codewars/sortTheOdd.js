/* You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4] */

function isOddNumber(number) {
    if (number % 2) {
        return true
    } else {
        return false
    }
}

function checkOdds(array) {
    let arr = Array.from(array)
    arr.map(function (e, i, a) {
        if (isOddNumber(e)) {
            a[i] = 'X'
        }
    })
    return arr
}

function nextLetterX(element) {
    return element == 'X'
}

function fillArrayWithsortedOdds(array, oddNumbers) {
    let arr = Array.from(array)
    oddNumbers.map(function (e) {
        arr[arr.findIndex(nextLetterX)] = e
    })
    return arr
}

function sortArray(array) {
    let oddNumbers = array.filter(e => isOddNumber(e))
    let checkedOdds = checkOdds(array)
    let sortedOdds = oddNumbers.sort((a, b) => (a - b))
    let sortedArray = fillArrayWithsortedOdds(checkedOdds, sortedOdds)
    return sortedArray
}

console.log(sortArray([5, 3, 2, 8, 1, 11, 4])) // [1, 3, 2, 8, 5, 4]
console.log(sortArray([0, 9, 2, 5, 3, 1, 8, 0]))
console.log(sortArray([]))

/*
Expected: '[1, 3, 2, 8, 5, 4, 11]', instead got: '[1, 11, 2, 8, 3, 4, 5]'
Expected: '[2, 22, 1, 5, 4, 11, 37, 0]', instead got: '[2, 22, 1, 11, 4, 37, 5, 0]'
Expected: '[1, 1, 5, 11, 2, 11, 111, 0]', instead got: '[1, 1, 11, 11, 2, 111, 5, 0]'
*/