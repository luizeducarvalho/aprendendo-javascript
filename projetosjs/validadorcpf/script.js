/* 
 * PEDÊNCIAS:
 * Colocar para aceitar o CPF com pontos e traço
 * Implementar um gerador de cpf
 * Corrigir estilo para o botão ficar dentro do imnput
 */

function start() {
    let cpfUsuario = document.getElementById("cpf").value
    //cpfUsuario = "05241620508"
    if (cpfUsuario.length != 11) {
        document.getElementById("cpf").value = ""
        document.getElementById("resultado").style.backgroundColor = '#e2e3e5'
        exibeMensagem("Informe um CPF na caixa acima")
    } else {
        if (validaCPF(cpfUsuario)) {
            document.getElementById("resultado").style.backgroundColor = '#ccf1e3'
            exibeMensagem("CPF válido!")
        } else {
            document.getElementById("resultado").style.backgroundColor = '#f7dddc'
            exibeMensagem("CPF inválido!")
        }
    }
    //somenteNumeros(cpfUsuario)
    // 052.416.205-08
    //console.log("1:", cpfUsuario)
    //let regExp = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}$/
    //console.log(regExp.test(cpfUsuario))
    //console.log(cpfUsuario.length)
}

function exibeMensagem(str) {
    let mensagem = document.getElementById("resultado")
    mensagem.innerHTML = str
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

    resto = (soma * 10) % 11
    //console.log("Soma 1: ", soma)
    //console.log("Resto 1: ", resto)
    if (resto == cpf[9]) { // Primeiro dígito válido
        soma = 0
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf[i] * (11 - i))
        }
        resto = (soma * 10) % 11
        console.log(cpf[10])
        if (resto == cpf[10]) { // Segundo dígito válido
            return true
        } else {
            return false
        }
        //console.log("Soma 2: ", soma)
        //console.log("Resto 2: ", resto)
    } else {
        return false
    }
}

function somenteNumeros(str) {
    for (let i = 0; i < str.length; i++) {

    }
}
