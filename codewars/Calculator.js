/* Create a simple calculator that given a string of operators (), +, -, *, / and numbers separated by spaces returns the value of that expression

Example:

Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
Remember about the order of operations!
Multiplications and divisions have a higher priority and should be performed left-to-right.
Additions and subtractions have a lower priority and should also be performed left-to-right. */


const Calculator = function () {
    const hasSomeOperator = (arr = []) => arr.some(e => (e === '*' || e === '/' || e === '+' || e === '-'))
    const hasMultOrDivOperator = (arr = []) => arr.some(e => (e === '*' || e === '/'))
    const nextDivisionOrMultiplication = s => s === '*' || s === '/'
    const nextSumOrSubtraction = s => s === '+' || s === '-'
    const execOperation = (oper, n1, n2) => {
        if (oper === '+') { return (n1 + n2) }
        if (oper === '-') { return (n1 - n2) }
        if (oper === '*') { return (n1 * n2) }
        if (oper === '/') { return (n1 / n2) }
    }

    this.evaluate = string => {
        const stringInArray = string.split(' ')

        while (hasSomeOperator(stringInArray)) {
            if (hasMultOrDivOperator(stringInArray)) {
                indexOfOperator = stringInArray.findIndex(nextDivisionOrMultiplication)
            } else {
                indexOfOperator = stringInArray.findIndex(nextSumOrSubtraction)
            }

            let operator = stringInArray[indexOfOperator]
            let numberOne = Number(stringInArray[indexOfOperator - 1])
            let numberTwo = Number(stringInArray[indexOfOperator + 1])
            stringInArray.splice(indexOfOperator - 1, 3, execOperation(operator, numberOne, numberTwo))
        }
        
        return `${stringInArray}`
    }
};

var calculate = new Calculator()

console.log(calculate.evaluate('127'))
console.log(calculate.evaluate('2 + 3'))
console.log(calculate.evaluate('2 - 3 - 4'))
console.log(calculate.evaluate('10 * 5 / 2'))
console.log(calculate.evaluate('5 + 3 - 12 / 3 * 2'))