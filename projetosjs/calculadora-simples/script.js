// Variáveis globais
var calcVisor = document.getElementById('txtres')   // Tela da calculadora
var operador = undefined    // Operador escolhido pelo usuário
var pNumero = 0    // Primeiro núemro digitado

// Limpa o visor da calculadora
function resetar() {
    calcVisor.value = ''    // Limpa tela da calculadora
    operador = undefined    // Reseta o operador
    pNumero = 0
}

function limpaTela() {
    calcVisor.value = ''    // Limpa tela da calculadora
}

// Adiciona números no visor quando digitados
function digitar(num) {
    calcVisor.value = calcVisor.value + num;
}

function setaOperador(argh) {
    pNumero = Number(calcVisor.value) // Define o núemro que está no visor como primeiro da operação
    operador = argh // Seta o operador recedibo do HTML
    limpaTela()
}

function fazConta() {
    var resultado = pNumero
    switch (operador) {
        case 'adicao':
            resultado += Number(calcVisor.value)
            pNumero = resultado
            calcVisor.value = resultado
            break

        case 'subtracao':
            resultado -= Number(calcVisor.value)
            pNumero = resultado
            calcVisor.value = resultado
            break

        case 'multiplicacao':
            resultado *= Number(calcVisor.value)
            pNumero = resultado
            calcVisor.value = resultado
            break

        case 'divisao':
            resultado /= Number(calcVisor.value)
            pNumero = resultado
            calcVisor.value = resultado
            break
        /*
                default:
                    alert('[ERRO] OPERACAO INVÁLIDA')
                    break
        */
    }
}