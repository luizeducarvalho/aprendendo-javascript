(function () {
    let botaoGerar = document.getElementById('gerabtn')
    let inputCPF = document.getElementById('cpfgerado') 
    botaoGerar.onclick = function (e) { exibeNovo(inputCPF) }
    let botaoCopiar = document.getElementById('copiarbtn')
    botaoCopiar.onclick = function (e) { copiarTexto(inputCPF) }
})()

geraCPFValido()

exibeNovo = cpfInput => cpfInput.value = geraCPFValido()
function copiarTexto(cpfInput) {
    cpfInput.select()
    document.execCommand('copy')
}

function geraCPFValido() {
    // Gera os primeiros nove dígitos do CPF
    let cpf = []
    while (cpf.length < 9) {
        cpf.push(geraInteiroAleatorioEntre(0, 10))
    }

    while (cpf.length < 11) {
        let somaDigito = calculaSoma(cpf)
        let resto = somaDigito % 11
        resto < 2 ? cpf.push(0) : cpf.push(11 - resto)
    }

    return cpf.join('')
}

function calculaSoma(arr) {
    return arr.reduce(function (accu, elem, index, cpf) {
        return accu + elem * (cpf.length + 1 - index)
    }, 0)
}

function geraInteiroAleatorioEntre(min = 0, max = 0) {
    if (min > max) [min, max] = [max, min]
    let valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}