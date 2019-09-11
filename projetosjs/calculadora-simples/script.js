/*
 *  PEDÊNCIAS
 *
 *  Tive que alterar o ipunt do visor para typ text para aceitar o ponto flutuabte
 *  ponrtando será preciso criar uma máscara para limitar o input apenas para números e ponto
 *  
 *  Corrigir para não permitir o ponto flutuante no início do número
 *  Colocar para capturar eventos do teclado
 * 
 */

(function() { 
    let botoesNumeros = document.getElementsByClassName('botaoNumero')
    let botoesOperadores = document.getElementsByClassName('botaoOperador') 
    let botaoReset = document.getElementById('b_reset').addEventListener("click", function () { resetaCalculadora() })
    let botaoIgual = document.getElementById('b_igual').addEventListener("click", function () { fazConta() })
    let botoVirgula = document.getElementById('b_ponto').addEventListener("click", function () { adicionaVirgula() })
    atribuirEventosNumeros(botoesNumeros)
    atribuirEventosOperadores(botoesOperadores)
})()

const calculadora = {
    _visor: document.getElementById('calcVisor'),
    _operando: 0,
    _operador: null,
    _pontoFlutuante: false,
    
    get visor() { return Number(this._visor.value) },
    get pontoFlutuante() { return this._pontoFlutuante },
    get operador() { return this._operador },
    get operando() { return Number(this._operando) },
    set operando(valor) { this._operando = valor},
    set operador(valor) { return this._operador = valor },
    set pontoFlutuante(boolean) { return this._pontoFlutuante = boolean },
    
    limpaVisor() { this._visor.value = '' },
    digitar(numero) { this._visor.value += numero },
    executaOperacao(oper = calculadora.operador, n1 = calculadora.operando, n2 = calculadora.visor) {
        if (oper == '+') { return (n1 + n2) }
        if (oper == '-') { return (n1 - n2) }
        if (oper == '*') { return (n1 * n2) }
        if (oper == '/') { return (n1 / n2) }
    },

    reset() {
        this._operador = null
        this._operando = null
        this._pontoFlutuante = false
        this.limpaVisor()
    }
}

resetaCalculadora = () => { calculadora.reset() }
adicionaVirgula = () => { 
    if (!calculadora.pontoFlutuante) {
        calculadora.digitar('.')
        calculadora.pontoFlutuante = true
    }
}

atribuiOperador = (oper) => {
    calculadora.operador = oper
    calculadora.operando = calculadora.visor
    calculadora.pontoFlutuante = false
    calculadora.limpaVisor()
}

function fazConta() {
    let resultado = calculadora.executaOperacao()
    calculadora.operando = resultado
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