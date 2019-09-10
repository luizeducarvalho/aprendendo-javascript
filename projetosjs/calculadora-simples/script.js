/*
 *  PEDÊNCIAS
 *  - Colocar ponto flutuante
 * 
 */



let botoesNumeros = document.getElementsByClassName('botaoNumero')
let botoesOperadores = document.getElementsByClassName('botaoOperador') 
let botaoReset = document.getElementById('b_reset').addEventListener("click", function () { resetaCalculadora() })
let botaoIgual = document.getElementById('b_igual').addEventListener("click", function () { fazConta() })

atribuirEventosNumeros(botoesNumeros)
atribuirEventosOperadores(botoesOperadores)

const calculadora = {
    visor: document.getElementById('calcVisor'),
    operando1: 0,
    operando2: 0,
    operador: null,
    limpaVisor() { this.visor.value = '' },
    getVisor() { return Number(this.visor.value) },
    digitar(numero) { this.visor.value += numero },
    executaOperacao(oper = this.operador, n1=this.operando1, n2=Number(this.getVisor())) {
        if (oper == '+') { return (n1 + n2) }
        if (oper == '-') { return (n1 - n2) }
        if (oper == '*') { return (n1 * n2) }
        if (oper == '/') { return (n1 / n2) }
    },

    reset() {
        this.operando1 = null
        this.operando2 = null
        this.operador = null
        this.limpaVisor()
    }
}

resetaCalculadora = () => { calculadora.reset() }
limpaVisorCalculadora = () => { calculadora.length() }
atribuiOperador = (oper) => {
    calculadora.operador = oper
    calculadora.operando1 = Number(calculadora.getVisor())
    calculadora.limpaVisor()
}

function fazConta() {
    let resultado = calculadora.executaOperacao()

    calculadora.operando1 = resultado
    calculadora.limpaVisor()
    calculadora.digitar(resultado)
}

function atribuirEventosNumeros(btnNumeros) {
    for (let i = 0; i < btnNumeros.length; i++) {
        document.getElementById(btnNumeros[i].id).addEventListener("click", function () { calculadora.digitar(btnNumeros[i].value) })
    }
}

function atribuirEventosOperadores(btnOperadores) {
    for (let i = 0; i < btnOperadores.length; i++) {
    document.getElementById(btnOperadores[i].id).addEventListener("click", function () { atribuiOperador(btnOperadores[i].value) })
    }
}