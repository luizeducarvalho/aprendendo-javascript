/* 
 * PEDÊNCIAS:
 *
 * Corrigir validação
 * Corrigir estilo para o botão ficar dentro do imnput
 * 
 */

function valida() {
    let regExp = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}$/   // Regex para validar padrão do cpf com pontos e traços ou apenas números
    let cpfUsuario = document.getElementById("cpfvalidado").value

    if (!regExp.test(cpfUsuario)) {
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

function validaCPF(cpf) {
    let soma = 0, resto = 0
    // Elimina CPFs inválidos conhecidos	
    if (cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false

    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i] * (10 - i))
    }

    resto = soma % 11
    
    console.log("SOMA1: ", soma)
    console.log("RESTO1: ", resto)

    if ((resto < 2 && cpf[9] == 0) || (cpf[9] == (11 - resto)))  {
        console.log("PRIMEIRO DÍGITO OK")
    }



    if (resto == cpf[9]) { // Primeiro dígito válido
        soma = 0
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf[i] * (11 - i))
        }


        resto = (soma * 10) % 11

        /*
        console.log("SOMA1: ", soma)
        console.log("SOMA1: ", resto)
        */

        if (resto == cpf[10]) { // Segundo dígito válido
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
    //cpf = [0, 5, 2, 4, 1, 6, 2, 0, 5]
    //cpf = [1, 1, 1, 4, 4, 4, 7, 7, 7]

    // Gera os primeiros nove dígitos do CPF
    for (let i = 0; i < 9; i++) {
        cpf.push(geraInteiroAleatorioEntre(0, 9))
        soma += parseInt(cpf[i] * (10 - i))
    }

    resto = soma % 11
    resto < 2 ? cpf.push(0) : cpf.push(11 - resto) // Atribui o primeiro dígito verificador

    soma = 0
    for (let i = 0; i < 10; i++) {
        //console.log(`cpf[${i}] = ${cpf[i]} X 11 - ${i}`)
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
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}