/* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A" */

function getMiddle(s) {
    if (s.length % 2) {
        let meio = (Math.floor(s.length / 2))
        return s.charAt(meio)
    } else {
        let limiteSuperior = s.length / 2 + 1
        let limiteInferior = limiteSuperior - 1
        return s.substring(limiteInferior, limiteSuperior)
    }
}

getMiddle2 = s => (s.length % 2) ? s.charAt(Math.floor(s.length / 2)) : s.substring(s.length / 2 - 1, s.length / 2 + 1)

console.log(getMiddle("test"))