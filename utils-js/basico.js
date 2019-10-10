// Converte um JSON para um objeto js
const paraObjeto = json => JSON.parse(json)

// Recebe um valor mínino e máximo e retorna um inteiro aleatório sem incluir o máximo
function geraInteiroAleatorioEntre(min = 0, max = 0) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// Remove acentução de um texto recebido como argumento
function removeAcentos(stringEntrada) {
    const listaDeAcentuados = 'áãâàäÁÃÂÀÄéêèëÉÊÈËíîìïÍÎÌÏóõôòöÓÕÔÒÖúûüùÚÛÜÙçÇñÑ'
    const listaDeNaoAcentuados = 'aaaaaAAAAAeeeeEEEEiiiiIIIIoooooOOOOOuuuuUUUUcCnN'
    const indice = char => listaDeAcentuados.indexOf(char)
    const estaAcentuado = char => indice => indice > -1
    const substituiSeEstiverAcentuado = char => estaAcentuado(char) ? listaDeNaoAcentuados[indice(char)] : char
    let stringSaida = ''
    
    for (const char of stringEntrada) {
        stringSaida += substituiSeEstiverAcentuado(char)
    }

    return stringSaida;
}

// Recebe dois valores e retorna uma array com uma sequencia de inteiros entre esses dois valores
function sequenciaEntre(minimo, maximo) {
    if (isNaN(minimo) || isNaN(maximo)) return []
    if (minimo > maximo) [minimo, maximo] = [maximo, minimo]
    minimo = +minimo
    maximo = +maximo
    for (var i = minimo, result = []; i < minimo + maximo; result[result.length] = i++);
    return result
}

console.log(sequenciaEntre(1,6))

// Gera uma cor aleatória no formato hexadecimal
getRandomHTMLColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
