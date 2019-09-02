function contar() {
    // Recebe valores coletados do formulário
    var numeroInicio = document.getElementById('inicio')
    var numeroFinal = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    res.innerHTML = ''
    //numeroInicio = Number(numeroInicio.value)
    //numeroFinal = Number(numeroFinal.value)
    //passo = Number(passo.value)
    //console.log(typeof (numeroInicio))
    //console.log(numeroInicio)

    // Verifica se todos os campos foram preenchidos
    if (numeroInicio.value.length == 0 || numeroFinal.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar'
    } else {
        numeroInicio = Number(numeroInicio.value)
        numeroFinal = Number(numeroFinal.value)
        passo = Number(passo.value)

        // Verifica se o passo é zero ou negativo
        if (passo < 1) {
            alert("PASSO INVÁLIDO. Considerado passo: 1")
            passo = 1
        }

        if (numeroInicio < numeroFinal) {
            // Contagem crescente
            for (var i = numeroInicio; i <= numeroFinal; i += passo) {
                var emoji = document.createElement('img')
                emoji.setAttribute('id', 'emoji')
                if (i + passo > numeroFinal) {
                    emoji.setAttribute('src', 'emoji-02.png')
                } else {
                    emoji.setAttribute('src', 'emoji-01.png')
                }
                res.innerHTML += ` ${i} `
                res.appendChild(emoji)
            }
        } else if (numeroInicio > numeroFinal) {
            // Contagem regressiva
            for (var i = numeroInicio; i >= numeroFinal; i -= passo) {
                var emoji = document.createElement('img')
                emoji.setAttribute('id', 'emoji')
                if (i - passo >= numeroFinal) {
                    emoji.setAttribute('src', 'emoji-01.png')
                } else {
                    emoji.setAttribute('src', 'emoji-02.png')
                }
                res.innerHTML += ` ${i} `
                res.appendChild(emoji)
                //console.log(i)
            }
        }
    }




}
