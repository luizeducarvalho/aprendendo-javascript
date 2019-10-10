/* Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z' */

const alfabeto = [, 'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z']

function soma(array) {
  return array.reduce((acumulador, valorAtual) => acumulador + valorAtual)
}

function somaOverflow(resultadoSoma) {
  while (resultadoSoma > 26) {
    resultadoSoma -= 26
  }
  return resultadoSoma
}

function numeroParaLetra(numero) {
  return alfabeto[numero]
}


function letrasParaNumeros(array) {
  const alfabeto = [, 'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z']

  const indicesLetras = array.map(e => alfabeto.indexOf(e))
  return indicesLetras
}

function addLetters(...letters) {
  if (letters.length == 0 || letters == null) {
    return 'z'
  } else {
    let numeros = letrasParaNumeros(letters)
    let total = soma(numeros)
    if (total > 26) { total = somaOverflow(total) }
    let resultado = numeroParaLetra(total)
    return resultado
  }
}