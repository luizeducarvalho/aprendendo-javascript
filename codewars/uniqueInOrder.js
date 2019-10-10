var uniqueInOrder = function (iterable) {
    let arr = Array.from(iterable)

    let resultado = []
    arr.forEach(function (element, i, arr) {
        // console.log(`e[${i}]: ${element}\ne[${i - 1}]: ${arr[i - 1]}\n`)
        if (i == 0 || element !== arr[i - 1]) {
            resultado.push(element)
        }

    });

    return resultado
}


console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'))         // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3]))       // [1,2,3]