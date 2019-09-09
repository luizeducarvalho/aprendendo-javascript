 (function () {
    let botaoGerar = document.getElementById('gerabtn')
    let inputCPF = document.getElementById('cpfgerado')
    botaoGerar.onclick = function (e) { exibeNovo(inputCPF) }
})()

exibeNovo = cpfInput => cpfInput.value = geraCPFValido()
calculaDigitoVerificador = soma => (soma % 11 ) < 2 ? 0 : 11 - (soma % 11)

geraCPFValido = () => {
    let cpf = new Array, soma = 0
    
    /*
    * Preenche o array com nove dígitos aleatórios
    * Calcula a soma de cada número multiplcado pelo indice correspondente
    */
    for (let i = 0; i < 9; i++) {
        cpf.push(geraInteiroAleatorioEntre(0, 10))
        soma += parseInt(cpf[i] * (10 - i))
    }
    cpf.push(calculaDigitoVerificador(soma))    // Atribui o primeiro dígito verificador
    soma = 0
    for (let i in cpf){
        soma += parseInt(cpf[i] * (11 - i))
    }
    cpf.push(calculaDigitoVerificador(soma))    // Atribui o segundo dígito verificador

    return cpf.join('') // Retorna toda array do CPF como uma string concatenada
}

geraInteiroAleatorioEntre = (min = 0, max = 0) => {
    if (min > max) [min, max] = [max, min]
    let valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}