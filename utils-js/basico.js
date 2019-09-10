// Converte um JSON para um objeto js
const paraObjeto = json => JSON.parse(json)

// Recebe um valor mínino e máximo e retorna um inteiro aleatório sem incluir o máximo
function geraInteiroAleatorioEntre(min = 0, max = 0) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// Recebe dois valores e retorna uma array com uma sequencia de inteiros entre esses dois valores
function sequenciaEntre(min, max) {
    if (isNaN(min) || isNaN(max)) return [];
    if (min > max) [min, max] = [max, min]
    min = +min;
    max = +max;
    for (var i = min, result = []; i < min + max; result[result.length] = i++);
    return result;
}

// Remove acentução do texto recebido como argumento
function removeAcentos(str) {
    var a = 'áãâàäÁÃÂÀÄéêèëÉÊÈËíîìïÍÎÌÏóõôòöÓÕÔÒÖúûüùÚÛÜÙçÇñÑ', pos, rstr = '',
        b = 'aaaaaAAAAAeeeeEEEEiiiiIIIIoooooOOOOOuuuuUUUUcCnN', t = str.length, i = 0;
    for (; i < t; rstr += (pos = a.indexOf(str.charAt(i))) > -1 ? b.charAt(pos) : str.charAt(i), i++);
    return rstr;
}




//<|fnc:cMC;data:2006.05.26;autor:Leandro N. Camargo|>
function cMC() { //(un)checkMultipleCheckboxes
    var inps, t = (inps = document.getElementsByTagName('input')).length,
        i = 0, inp, pressed = 0;
    for (; t;) {
        if ((inp = inps[--t]).type == 'checkbox') {
            addEvent(inp, 'mousedown', function () { pressed = 1; });
            addEvent(document, 'mouseup', function () { pressed = 0; });
            addEvent(inp, 'mouseover', function () { if (pressed) this.checked = !this.checked; });
        }
    }
}

//<|@fnc:max_height_IE;|>
//<|fnc:isIE;data:2006.05.13;autor:Leandro N. Camargo|>
function isIE() {
    var tmp;
    return (tmp = navigator.userAgent.toLowerCase()).indexOf('msie') > -1 && tmp.indexOf('opera') == -1;
}
