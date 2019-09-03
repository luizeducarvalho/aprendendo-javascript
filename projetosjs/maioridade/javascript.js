function verificar() {
    var agora = new Date()
    var anoAtual = agora.getFullYear()
    var mesAtual = agora.getMonth()
    var diaAtual = agora.getDate()
    var dataUsuario = document.getElementById('nascimento')
    var resposta = document.querySelector('div#res')

    // Gambiarra para coletar informação do input date
    var anoUsuario = Number(dataUsuario.value[0] + dataUsuario.value[1] + dataUsuario.value[2] + dataUsuario.value[3])
    var mesUsuario = Number(dataUsuario.value[5] + dataUsuario.value[6])
    var diaUsuario = Number(dataUsuario.value[8] + dataUsuario.value[9])
    dataUsuario = new Date(anoUsuario, mesUsuario - 1, diaUsuario) // -1 porque a contagem dos meses começa no 0 Ex.: Jan=0, Fev=1...
    console.log("2: " + dataUsuario)


    if (dataUsuario == 'Invalid Date') { // Valida se a data não foi passada em branco
        resposta.innerHTML = "Erro: Data inválida"
    } else if (dataUsuario > agora) { // Valida se não é uma data futura
        resposta.innerHTML = "ERRO: Data futura"
    } else if (anoAtual - anoUsuario < 18) {
        resposta.innerHTML = "Menor de idade"
    } else if (anoAtual - anoUsuario > 18) {
        resposta.innerHTML = "Maior de idade"
    } else if (mesAtual + 1 > mesUsuario) { // +1 porque a contagem dos meses começa no 0 Ex.: Jan=0, Fev=1...
        resposta.innerHTML = "Menor de idade"
    } else if (mesAtual + 1 < mesUsuario) { // +1 porque a contagem dos meses começa no 0 Ex.: Jan=0, Fev=1...
        resposta.innerHTML = "Maior de idade"
    } else if (diaAtual > diaUsuario) {
        resposta.innerHTML = "Menor de idade"
    } else if (diaAtual <= diaUsuario) {
        resposta.innerHTML = "Maior de idade"
    }
}


