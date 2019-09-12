(function () {
    let botaoGerar = document.getElementById('gerabtn')
    let inputCPF = document.getElementById('cpfgerado')
    botaoGerar.onclick = function (e) { exibeNovo(inputCPF) }
    let botaoCopiar = document.getElementById('copiarbtn')
    botaoCopiar.onclick = function (e) { copiarTexto(inputCPF) }
})()


exibeNovo = cpfInput => cpfInput.value = geraCPFValido()
copiarTexto = cpfInput => {
    cpfInput.select()
    document.execCommand('copy')
}

function geraCPFValido() {
    let cpf = [], soma = 0, resto = 0

    // Gera os primeiros nove dígitos do CPF
    for (let i = 0; i < 9; i++) {
        cpf.push(geraInteiroAleatorioEntre(0, 10))
        soma += parseInt(cpf[i] * (10 - i))
    }

    resto = soma % 11
    resto < 2 ? cpf.push(0) : cpf.push(11 - resto) // Atribui o primeiro dígito verificador

    soma = 0
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i] * (11 - i))
    }

    resto = soma % 11
    resto < 2 ? cpf.push(0) : cpf.push(11 - resto)
    return cpf.join('') // Retorna toda array do CPF como uma string concatenada
}

function geraInteiroAleatorioEntre(min = 0, max = 0) {
    if (min > max) [min, max] = [max, min]
    let valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}