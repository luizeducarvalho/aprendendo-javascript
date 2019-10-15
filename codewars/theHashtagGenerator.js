/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""  */

const noSpace = str => str.split(' ').join('')
const stringToArray = str => str.split(' ')
const arrayToString = arr => arr.join(' ')
const firstLetterToUpperCase = str => str.toLowerCase().replace(/(?:^|\s)\S/, a => a.toUpperCase())
const longerThan140Chars = str => str.length > 140 ? true : false

function generateHashtag (str) {
    const wordsInArray = stringToArray(str)
    const titleCaseInArray = wordsInArray.map(w => firstLetterToUpperCase(w))
    const titleCase = arrayToString(titleCaseInArray)
    const hashTag = `#${noSpace(titleCase)}`
    if (longerThan140Chars(hashTag) || hashTag === '#') {
        return false
    } else {
        return hashTag
    }
}

console.log(generateHashtag(' Hello there thanks for trying my Kata '))
console.log(generateHashtag('Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'))
console.log(generateHashtag('Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'))
console.log(generateHashtag(""))