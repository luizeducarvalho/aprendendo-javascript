/* You need to write a function, that returns the first non-repeated character in the given string.

For example for string "test" function should return 'e'.
For string "teeter" function should return 'r'.

If a string contains all unique characters, then return just the first character of the string.
Example: for input "trend" function should return 't'

You can assume, that the input string has always non-zero length.

If there is no repeating character, return null in JS or Java, and None in Python.

addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
*/

function removeAccents(str) {
    var a = 'áãâàäÁÃÂÀÄéêèëÉÊÈËíîìïÍÎÌÏóõôòöÓÕÔÒÖúûüùÚÛÜÙçÇñÑ', pos, rstr = '',
        b = 'aaaaaAAAAAeeeeEEEEiiiiIIIIoooooOOOOOuuuuUUUUcCnN', t = str.length, i = 0;
    for (; i < t; rstr += (pos = a.indexOf(str.charAt(i))) > -1 ? b.charAt(pos) : str.charAt(i), i++);
    return rstr;
}

function findFirstUniq(arr) {
    const unique = (e, i, array) => array.indexOf(e) == array.lastIndexOf(e)
    const noRepeatingElements = arr.filter(unique)
    return noRepeatingElements.length ? noRepeatingElements[0] : null
}

function firstNonRepeated(s) {
    const textWithoutSpaces = s.split(' ').join('').toLowerCase()
    // const noSpacesNoAccents = removeAccents(textWithoutSpaces)
    let allStringInAnArray = Array.from(textWithoutSpaces)
    return findFirstUniq(allStringInAnArray)
}

console.log(firstNonRepeated("test"))
console.log(firstNonRepeated("trend"))
console.log(firstNonRepeated("1122321235121222"))
console.log(firstNonRepeated("rhinomlomlgkhhpjpnkgjrqqi"))