/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior" */

separaPaLavras = str => str.split(/[-_]/)
primeiraLetraMaiuscula = str => str.toLowerCase().replace(/(?:^|\s)\S/, a => a.toUpperCase())

function toCamelCase(str) {
    if (str) {
        palavras = separaPaLavras(str)
        comIniciaisMaiusculas = palavras.map(function (palavra, indice) {
            if (indice) {
                return primeiraLetraMaiuscula(palavra)
            } else {
                return palavra
            }
        })
        resultado = comIniciaisMaiusculas.join('')
        return resultado
    } else {
        return str
    }
}

// CodeWars
// function toCamelCase(str){
//     let regExp=/[-_]\w/ig;
//     return str.replace(regExp,function(match){
//           return match.charAt(1).toUpperCase();
//      });
// }


console.log(toCamelCase(''))
console.log(toCamelCase("the_stealth_warrior")) // theStealthWarrior
console.log(toCamelCase("The-Stealth-Warrior")) // TheStealthWarrior
console.log(toCamelCase("A-B-C"))
console.log(toCamelCase(""))

// console.log(primeiraLetraMaiuscula("The dtealth Warrior"))
// console.log(primeiraLetraMaiuscula("the_stealth_warrior"))