/* Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta' */

function removeDuplicateWords(s) {
    let words = s.split(' ')
    let naoRepetemSet = new Set(words)
    let naoRepetemArray = Array.from(naoRepetemSet)
    return naoRepetemArray.join(' ')
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))