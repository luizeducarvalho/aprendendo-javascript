/* What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => [] */

function anagrams(word, words) {
    let anagramas = []
    words.forEach(palavra => {
        if (word.length == palavra.length) {
            if (comparaLetras(word,palavra)) {
                anagramas.push(palavra)
            }
        }
    });
    return anagramas
}

function comparaLetras(palavra1, palavra2) {
    let p1 = Array.from(palavra1).sort().filter( function( elem, index, array ) {
        return array.indexOf( elem ) === index;
    })
    let p2 = Array.from(palavra2).sort().filter( function( elem, index, array ) {
        return array.indexOf( elem ) === index;
    })

    if (p1.length == p2.length) {return (p2.every(char => p1.includes(char)))}
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) // ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) // ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])) // []