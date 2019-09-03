function start() {
    let cpfUsuario = document.getElementById("formcpf").value

    let regExp = /^[0-9]{9}-?[0-9]{2}$/
    console.log(regExp.test(cpfUsuario))
    console.log(cpfUsuario.length)
}
// 052416205-08
// Percorre todos os radios buttons e retorna qual foi selecionado
function radioButtonChecked() {
    for (let i = 0; i < document.getElementsByClassName("opcao").length; i++) {
        if (document.getElementsByClassName("opcao")[i].checked) {
            if (i === 0) return "pedra"
            if (i === 1) return "papel"
            if (i === 2) return "tesoura"
        }
    }
}

// Retorna um inteiro aleatório sem incluir o máximo
function geraInteiroAleatorioEntre(min = 0, max = 0) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

function getMachineTurn() {
    let i = geraInteiroAleatorioEntre(0, 3)
    if (i === 0) return "pedra"
    if (i === 1) return "papel"
    if (i === 2) return "tesoura"
}

