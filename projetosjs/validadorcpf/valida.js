(function () {
    let botaoValidar = document.getElementById('validabtn')
    let inputCPFValidado = document.getElementById("cpfvalidado")
    botaoValidar.onclick = function (e) { valida(inputCPFValidado.value) }
})()

function valida(cpf) {
    if (!estaNoFormato(cpf)) {
        //document.getElementById("cpfvalidado").value = ""
        exibeMensagem("Informe um CPF na caixa acima")
    } else {
        cpf = somenteNumeros(cpf) // Remove os pontos e traço
        if (validaCPF(cpf)) {
            exibeMensagem("CPF válido!", '#ccf1e3')
        } else {
            exibeMensagem("CPF inválido!", '#f7dddc')
        }
    }
}

estaNoFormato = cpf => {
    let regExp = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}$/   // Regex para validar padrão do cpf com pontos e traços ou apenas números
    return regExp.test(cpf)
}

todosDigitosIguais = cpf => {
    let regExp = /^(\d)\1+$/  // Todos os 11 dígitos iguais
    if (regExp.test(cpf)) {
        return true
    } else {
        return false
    }
}

function validaCPF(cpf) {
    if (todosDigitosIguais(cpf)) return false

    let soma = 0, resto = 0
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i] * (10 - i))
    }
    resto = soma % 11

    // Válida primeiro dígito
    if ((resto < 2 && cpf[9] == 0) || (cpf[9] == (11 - resto))) {
        soma = 0
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf[i] * (11 - i))
        }
        resto = soma % 11

        if ((resto < 2 && cpf[10] == 0) || (cpf[10] == (11 - resto))) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

function exibeMensagem(mensagem = '', corFundo = '#e2e3e5') {
    document.getElementById("resultado").innerHTML = mensagem
    document.getElementById("resultado").style.backgroundColor = corFundo
}

function somenteNumeros(str) {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            newStr += str[i]
        }
    }
    return newStr
}
