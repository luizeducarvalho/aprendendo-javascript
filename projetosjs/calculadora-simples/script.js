const calculadora = {
    visor: document.getElementById('calcVisor'),
    operando1: null,
    operando2: null,
    operadorSetado: null,
    limpaVisor() { this.visor.value = '' },
    reset() {
        this.operando1 = null
        this.operando2 = null
        this.operadorSetado = null
        this.limpaVisor()
    }
}

operador = calculadora.operadorSetado = "adicao"
operan1 = calculadora.operando1 = 32
operan2 = calculadora.operando2 = 5
resultado = operan1 + operan2
console.log(`${calculadora.operando1} ${operador} ${calculadora.operando2} = ${resultado}`)
calculadora.reset()

console.log(`${calculadora.operando1} ${calculadora.operadorSetado} ${calculadora.operando2} = ${resultado}`)

/*
let visorCalculadora = document.getElementById('calcVisor')
let botoesNumeros = document.getElementsByClassName('botaoNumero')
let botoesOperadores = document.getElementsByClassName('botaoOperador')
let operador = null    // Operador escolhido pelo usuário
let primeiroNumero    // Primeiro número digitado

atribuirEventosNumeros(botoesNumeros)
atribuirEventosOperadores(botoesOperadores)

// Limpa o visor da calculadora
resetaCalculadora = () => {
    limpaVisorCalculadora()
    operador = null    // Reseta o operador
    primeiroNumero = 0
}

limpaVisorCalculadora = () => calculadora.visor.value = ''
digitar = num => { visorCalculadora.value += num }  // Adiciona números no visor quando digitados



function setaOperador(argh) {
    primeiroNumero = Number(visorCalculadora.value) // Define o núemro que está no visor como primeiro da operação
    operador = argh // Seta o operador recedibo do HTML
    limpaVisorCalculadora()
}

function fazConta() {
    var resultado = primeiroNumero
    switch (operador) {
        case '+':
            resultado += Number(visorCalculadora.value)
            primeiroNumero = resultado
            visorCalculadora.value = resultado
            break

        case '-':
            resultado -= Number(visorCalculadora.value)
            primeiroNumero = resultado
            visorCalculadora.value = resultado
            break

        case '*':
            resultado *= Number(visorCalculadora.value)
            primeiroNumero = resultado
            visorCalculadora.value = resultado
            break

        case '/':
            resultado /= Number(visorCalculadora.value)
            primeiroNumero = resultado
            visorCalculadora.value = resultado
            break
    }
}

function atribuirEventosNumeros(btnNumeros) {
    for (let i = 0; i < btnNumeros.length; i++) {
        document.getElementById(btnNumeros[i].id).addEventListener("click", function () { digitar(btnNumeros[i].value) })
    }
}

function atribuirEventosOperadores(btnOperadores) {
    for (let i = 0; i < btnOperadores.length; i++) {
    document.getElementById(btnOperadores[i].id).addEventListener("click", function () { setaOperador(btnOperadores[i].value) })
    }
}
*/