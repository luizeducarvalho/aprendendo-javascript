// Variáveis globais
var calcVisor = document.getElementById('txtres')   // Tela da calculadora
var operador = null    // Operador escolhido pelo usuário
var pNumero = 0    // Primeiro núemro digitado

// Limpa o visor da calculadora
function resetar() {
    limpaVisorCalculadora()
    operador = null    // Reseta o operador
    pNumero = 0
}

limpaVisorCalculadora = () => calcVisor.value = ''

// Adiciona números no visor quando digitados
digitar = num => { calcVisor.value += num }


function setaOperador(argh) {
    pNumero = Number(calcVisor.value) // Define o núemro que está no visor como primeiro da operação
    operador = argh // Seta o operador recedibo do HTML
    limpaVisorCalculadora()
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