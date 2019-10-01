
let listaHTML = document.querySelector('ul')
let nomeEvento = document.getElementById('nomeEvento')
let idEvento = document.getElementById('idEvento')
let botao = document.querySelector('button')

botao.onclick = addItemLista

// let arrayEventos = []
// let arrayEventos = JSON.parse(localStorage.getItem('lista_eventos')) || []
let arrayEventos = getLocalStorage() || []

geraLink = (id = '', balcao = '') => `https://work.safeticket.com.br/audit/?evento=${id}&balcao=${balcao}&vendedor=&tipo=`


exibeLista()

limpaInputs = () => {
    let inputs = document.querySelectorAll('input')
    for (const input of inputs) {
        input.value = ''
    }
}

function exibeLista() {
    listaHTML.innerHTML = ''

    for (elemento of arrayEventos) {
        let novoli = document.createElement('li')
        // let liTexto = document.createTextNode(elemento.nome)
        let linkAudit = document.createElement('a')
        let linkExcluir = document.createElement('a')
        let index = arrayEventos.indexOf(elemento)

        linkAudit.innerHTML = 'Audit'
        linkAudit.target = '_blank'
        linkAudit.href = geraLink(elemento.id)

        linkExcluir.innerHTML = 'Excluir'
        linkExcluir.href = '#'
        // linkExcluir.onclick = deleteItemLista(index)
        linkExcluir.setAttribute('onclick', 'deleteItemLista(' + index + ')')

        novoli.innerHTML = elemento.nome.toUpperCase()
        listaHTML.appendChild(novoli)
        // novoli.appendChild(liTexto)
        novoli.appendChild(linkAudit)
        novoli.appendChild(linkExcluir)
    }
}



function addItemLista() {
    let evento = { nome: nomeEvento.value, id: idEvento.value }
    if (evento.nome && evento.id) {
        arrayEventos.push(evento)
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

function setLocalStorage() {
    localStorage.setItem('lista_eventos', JSON.stringify(arrayEventos))
}

function getLocalStorage() {
    return JSON.parse(localStorage.getItem('lista_eventos'))
}

