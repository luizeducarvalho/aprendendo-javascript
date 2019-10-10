function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const inputToArray = Array.from(str)
    const vowelsInInput = inputToArray.filter(v => vowels.includes(v))
    return vowelsInInput.length
}

console.log(getCount("abracadabra"))