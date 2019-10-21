// Inputs
let listaHTML = document.querySelector('ul')
let nomeEvento = document.getElementById('nomeEvento')
let idEvento = document.getElementById('idEvento')
let btnAdicionar = document.querySelector('button#btn-adicionar')
let btnOrdernar = document.querySelector('button#btn-ordenar')

btnAdicionar.onclick = addItemLista
btnOrdernar.onclick = ordenaListaPorNome

const geraLinkAuditoria = (id = '', balcao = '') => `https://work.safeticket.com.br/audit/?evento=${id}&balcao=${balcao}&vendedor=&tipo=`
const geraLinkMeusEventos = (id = '') => `https://meuseventos.safeticket.com.br/manager/?id=${id}`

let arrayEventos = getLocalStorage() || []

exibeLista()

function exibeLista() {
    listaHTML.innerHTML = ''

    for (elemento of arrayEventos) {
        let novoli = document.createElement('li')
        let linkAudit = document.createElement('a')
        let linkMeusEventos = document.createElement('a')
        let linkExcluir = document.createElement('a')
        let index = arrayEventos.indexOf(elemento)

        linkAudit.innerHTML = 'Auditoria'
        linkAudit.target = '_blank'
        linkAudit.href = geraLinkAuditoria(elemento.id)

        linkMeusEventos.innerHTML = 'Produtor'
        linkMeusEventos.target = '_blank'
        linkMeusEventos.href = geraLinkMeusEventos(elemento.id)

        linkExcluir.innerHTML = 'Excluir'
        linkExcluir.href = '#'
        linkExcluir.setAttribute('onclick', 'deleteItemLista(' + index + ')')

        novoli.innerHTML = elemento.nome.toUpperCase()
        listaHTML.appendChild(novoli)
        novoli.appendChild(linkAudit)
        novoli.appendChild(linkMeusEventos)
        novoli.appendChild(linkExcluir)
    }
}

function addItemLista() {
    let evento = { nome: nomeEvento.value, id: idEvento.value }
    if (evento.nome && evento.id) {
        arrayEventos.push(evento)
        // ordenaLista()
        exibeLista()
        setLocalStorage(arrayEventos)
        limpaInputs()
    }
}

function deleteItemLista(index) {
    arrayEventos.splice(index, 1)
    exibeLista()
    setLocalStorage()
}

function limpaInputs() {
    let inputs = document.querySelectorAll('input')
    for (const input of inputs) {
        input.value = ''
    }
}

function setLocalStorage() {
    localStorage.setItem('lista_eventos', JSON.stringify(arrayEventos))
}

function getLocalStorage() {
    return JSON.parse(localStorage.getItem('lista_eventos'))
}

function ordenaListaPorNome() {
    arrayEventos.sort(function (a, b) {
        var nomeA = a.nome.toUpperCase()
        var nomeB = b.nome.toUpperCase()
        if (nomeA < nomeB) {
            return -1
        }
        if (nomeA > nomeB) {
            return 1
        }
        // Nomes iguais
        return 0
    });
    exibeLista()
}

