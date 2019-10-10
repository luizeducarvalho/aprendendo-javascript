/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5" */

function highAndLow(numbers) {
    const arrayOfNumbers = Array.from(numbers.split(' '))
    const ascendingOrder = (a, b) => (a - b)
    const orderedArray = arrayOfNumbers.sort(ascendingOrder)
    const highNumber = orderedArray[orderedArray.length-1]
    const lowNumber = orderedArray[0]
    return `${highNumber} ${lowNumber}`
}

console.log(highAndLow('1 2 3 4 5'))
console.log(highAndLow('2 3 4 5 1'))
