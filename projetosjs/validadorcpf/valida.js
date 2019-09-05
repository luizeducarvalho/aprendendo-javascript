function valida() {
    let cpfUsuario = document.getElementById("cpfvalidado").value

    if (!estaNoFormato(cpfUsuario)) {
        document.getElementById("cpfvalidado").value = ""
        document.getElementById("resultado").style.backgroundColor = '#e2e3e5'
        exibeMensagem("Informe um CPF na caixa acima")
    } else {
        cpfUsuario = somenteNumeros(cpfUsuario) // Remove os pontos e traço
        if (validaCPF(cpfUsuario)) {
            document.getElementById("resultado").style.backgroundColor = '#ccf1e3'
            exibeMensagem("CPF válido!")
        } else {
            document.getElementById("resultado").style.backgroundColor = '#f7dddc'
            exibeMensagem("CPF inválido!")
        }
    }
}

function gera() {
    let campoCPF = document.getElementById('cpfgerado')
    let cpfNovo = geraCPFValido()
    campoCPF.value = cpfNovo
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

function geraCPFValido() {
    let cpf = [], soma = 0, resto = 0

    // Gera os primeiros nove dígitos do CPF
    for (let i = 0; i < 9; i++) {
        cpf.push(geraInteiroAleatorioEntre(0, 9))
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

function exibeMensagem(str) {
    let mensagem = document.getElementById("resultado")
    mensagem.innerHTML = str
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

function geraInteiroAleatorioEntre(min = 0, max = 0) {
    if (min > max) [min, max] = [max, min]
    let valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}