const player1 = "X"
const player2 = "O"
var playTime = player1
var gameOver = false

atualizaMostrador()
inicializaEspacos()

function atualizaMostrador() {
    if (gameOver) { return; }

    if (playTime == player1) {
        var player = document.querySelector("div#mostrador img")
        player.setAttribute("src", "_images/x.png")
    } else {
        var player = document.querySelector("div#mostrador img")
        player.setAttribute("src", "_images/o.png")
    }
}

function inicializaEspacos() {
    var espacos = document.getElementsByClassName("espaco")

    if (gameOver) { return; }

    for (var i = 0; i < espacos.length; i++) {
        espacos[i].addEventListener("click", function () {
            if ((this.getElementsByTagName("img").length == 0) && !gameOver) { // Verifica se o espaço está vazio
                if (playTime == player1) {
                    this.innerHTML = "<img src='_images/x.png'>"
                    this.setAttribute("jogada", player1)
                    this.setAttribute("height", "50px")
                    playTime = player2
                } else {
                    this.innerHTML = "<img src='_images/o.png'>"
                    this.setAttribute("jogada", player2)
                    this.setAttribute("height", "50px")
                    playTime = player1
                }
                setTimeout(verificaVencedor, 300)
                atualizaMostrador()
            }

        })
    }

}

function verificaVencedor() {
    var a1 = document.getElementById("espacoA1").getAttribute("jogada");
    var a2 = document.getElementById("espacoA2").getAttribute("jogada");
    var a3 = document.getElementById("espacoA3").getAttribute("jogada");

    var b1 = document.getElementById("espacoB1").getAttribute("jogada");
    var b2 = document.getElementById("espacoB2").getAttribute("jogada");
    var b3 = document.getElementById("espacoB3").getAttribute("jogada");

    var c1 = document.getElementById("espacoC1").getAttribute("jogada");
    var c2 = document.getElementById("espacoC2").getAttribute("jogada");
    var c3 = document.getElementById("espacoC3").getAttribute("jogada");

    var vencedor = ''

    // Possibilidades de vitória
    if ((a1 == a2 && a1 == a3) && a1 != '') { // Verifica horizontalmente
        vencedor = a1
    } else if ((b1 == b2 && b1 == b3) && b1 != '') {
        vencedor = b1
    } else if ((c1 == c2 && c1 == c3) && c1 != '') {
        vencedor = c1
    } else if ((a1 == b1 && a1 == c1) && a1 != '') { // Verifica verticalmente
        vencedor = a1
    } else if ((a2 == b2 && a2 == c2) && a2 != '') {
        vencedor = a2
    } else if ((a3 == b3 && a3 == c3) && a3 != '') {
        vencedor = a3
    } else if ((a1 == b2 && a1 == c3) && a1 != '') { // Verifica cruzado
        vencedor = a1
    } else if ((a3 == b2 && a3 == c1) && a3 != '') {
        vencedor = a3
    } else if (a1 != '' && a2 != '' && a3 != '' && b1 != '' && b2 != '' && b3 != '' && c1 != '' && c2 != '' && c3 != ''){
        vencedor = 'velha'
    }

    if (vencedor != '') {
        gameOver = true
        if (vencedor != 'velha'){
            alert("Vitória do jogador: " + vencedor)
        } else {
            alert("Não houve vencedor nessa partida")
        }
        
    }
}

function resetaJogo(){
    gameOver = false
    playTime = player1
    atualizaMostrador()

    var espacos = document.getElementsByClassName("espaco")

    for (var i = 0; i < espacos.length; i++){ // Limpa todos espaços
        espacos[i].innerHTML = "<img src=''"
        espacos[i].setAttribute("jogada", "")
    }
}