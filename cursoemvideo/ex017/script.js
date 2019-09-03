function gerarTabuada() {
    var numero = document.getElementById('numeroform')
    var res = document.querySelector('div#res')
    var tabela = document.getElementById('tabela')
    //lista.setAttribute('id','reslista')
    //lista.multiple = true

    if (numero.value.length == 0) {
        // Erro campo em branco
        alert('ERRO: digite algum número')
    } else {
        numero = Number(numero.value)
        tabela.innerHTML = ''
        for (var i = 1; i <= 10; i++) {
            var resultado = numero * i
            var item = document.createElement('option')
            item.text = `${numero} x ${i} = ${resultado}`
            item.value = `tab${i}`
            tabela.appendChild(item)
            //res.innerHTML += `${numero} X ${i} = ${resultado}<BR>`
        }
    }
}