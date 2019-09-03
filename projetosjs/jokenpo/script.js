function start() {
    let humanTurn = radioButtonChecked() // Opçção selecionada na tela
    let machineTurn = getMachineTurn()  // Jogada da máquina

    //console.log(`:::DEBUG:::\nHuman: ${humanTurn}\nMachine: ${machineTurn}`)

    if (machineTurn == humanTurn) {
        console.log(`EMPATE: Ambos escolheram ${humanTurn}`)
    } else if (machineTurn == "pedra") {
        if (humanTurn == "papel") {
            console.log(`HUMANO VENCE:\nHumano: ${humanTurn} \nMáquina: ${machineTurn}`)
        } else {
            console.log(`MÁQUINA VENCE: \nHumano: ${humanTurn} \nMáquina: ${machineTurn}`)
        }
    } else if (machineTurn == "papel") {
        if (humanTurn == "tesoura") {
            console.log(`HUMANO VENCE: \nHumano: ${humanTurn} \nMáquina: ${machineTurn}`)
        } else {
            console.log(`MÁQUINA VENCE: \nHumano: ${humanTurn} \nMáquina: ${machineTurn}`)
        }
    } else if (machineTurn == "tesoura") {
        if (humanTurn == "pedra") {
            console.log(`HUMANO VENCE: \nHumano: ${humanTurn} \nMáquina: ${machineTurn}`)
        } else {
            console.log(`MÁQUINA VENCE: \nHumano: ${humanTurn} \nMáquina: ${machineTurn}`)
        }
    }
}

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

