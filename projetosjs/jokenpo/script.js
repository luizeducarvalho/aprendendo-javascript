
const stone = 0
const paper = 1
const scissor = 2

function start() {
    //console.log(`CONSTS.: ${pedra}, ${papel}, ${tesoura}`)
    let machineTurn = geraInteiroAleatorioEntre(0, 3) // Um número aleatório entre 0 e 2
    let humanTurn = document.getElementsByClassName("opcao") // Opçção selecionada na tela

    for (let i = 0; i < humanTurn.length; i++) {
        if (humanTurn[i].checked) {
            humanTurn = i
            //console.log(`:::DEBUG:::\nHuman: ${humanTurn}\nMachine: ${machineTurn}`)
            if (machineTurn == humanTurn) {
                console.log(`EMPATE: Ambos escolheram ${humanTurn} M: ${machineTurn}`)
            } else if (machineTurn == stone) {
                if (humanTurn == paper) {
                    console.log(`HUMANO vence: H: ${humanTurn} M: ${machineTurn}`)
                } else {
                    console.log(`MÁQUINA vence: H: ${humanTurn} M: ${machineTurn}`)
                }
            } else if (machineTurn == paper) {
                if (humanTurn == scissor) {
                    console.log(`HUMANO vence: H: ${humanTurn} M: ${machineTurn}`)
                } else {
                    console.log(`MÁQUINA vence: H: ${humanTurn} M: ${machineTurn}`)
                }
            } else if (machineTurn == scissor) {
                if (humanTurn == stone) {
                    console.log(`HUMANO vence: H: ${humanTurn} M: ${machineTurn}`)
                } else {
                    console.log(`MÁQUINA vence: H: ${humanTurn} M: ${machineTurn}`)
                }
            }
        }
    }
}

// Retorna um inteiro aleatório sem incluir o máximo
function geraInteiroAleatorioEntre(min = 0, max = 0) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
