function verficar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') // ANO DE NASCIMENTO COLETADO NO FORMULÁRIO
    var res = document.querySelector('div#res')  // CAMPO PARA ESCREVER A RESPOSTA

    //alert(`DEBUG\n\nAno: ${ano}\nFano: ${Number(fano.value)}`)

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO] Veirique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src','src-imgs/foto-bebe-m.png')
            } else if (idade < 21){
                //JOVEM
                img.setAttribute('src','src-imgs/foto-jovem-m.png')
            } else if (idade < 50){
                //ADULTO
                img.setAttribute('src','src-imgs/foto-adulto-m.png')
            } else {
                //IDOSO
                img.setAttribute('src','src-imgs/foto-idoso-m.png')
            }
        } else {
            genero = 'mulher'
            if(idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src','src-imgs/foto-bebe-f.png')
            } else if (idade < 21){
                //JOVEM
                img.setAttribute('src','src-imgs/foto-jovem-f.png')
            } else if (idade < 50){
                //ADULTO
                img.setAttribute('src','src-imgs/foto-adulto-f.png')
            } else {
                //IDOSO
                img.setAttribute('src','src-imgs/foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}