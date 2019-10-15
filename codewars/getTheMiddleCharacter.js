function getMiddle(s) {
    if (s.length % 2) {
        return s.charAt(Math.floor(s.length / 2))
    } else {
        let limiteSuperior = s.length / 2
        let limiteInferior = limiteSuperior - 1
        return s.substring(limiteInferior, limiteSuperior + 1)
    }
}

console.log(getMiddle("CASA"))
console.log(getMiddle("CASAL"))