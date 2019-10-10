/* There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55 */

function findUniq(arr) {
    let unico = arr[0]
    unico = arr.filter(elem => elem !== unico)
    if (unico.length > 1) { unico[0] = arr[0] }
    return unico[0]
}



console.log(findUniq([1, 1, 1, 2, 1, 1])) // 2
console.log(findUniq([0, 0, 0.55, 0, 0])) // 0.55
console.log(findUniq([0, 0, 0.55, 0, 0]))
console.log(findUniq([0, 10, 0, 0, 0]))
console.log(findUniq([0, 0, 0, 20, 0]))
console.log(findUniq([30, 0, 0, 0, 0]))