/* Your job is to create a simple password validation function, as seen on many websites.

The rules for a valid password are as follows:

There needs to be at least 1 uppercase letter.
There needs to be at least 1 lowercase letter.
There needs to be at least 1 number.
The password needs to be at least 8 characters long.
You are permitted to use any methods to validate the password.

Examples:
password("Abcd1234"); ===> true
password("Abcd123"); ===> false
password("abcd1234"); ===> false
password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890"); ===> true
password("ABCD1234"); ===> false
password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> true;
password("!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> false; */

function oitoOuMaisCaracteres(str) {
    const regExp = /.{8,}/g
    return regExp.test(str)
}

function contemNumero(str) {
    const regExp = /[\d]/g
    return regExp.test(str)
}

function contemMaiuscula(str) {
    const regExp = /[A-Z]/g
    return regExp.test(str)
}

function contemMinuscula(str) {
    const regExp = /[a-z]/g
    return regExp.test(str)
}

function contemCaracterSpecial(str) {
    const regExp = /\W/g
    return regExp.test(str)
}

function password(str) {
    return oitoOuMaisCaracteres(str) && contemNumero(str) && contemMaiuscula(str) && contemMinuscula(str) && !contemCaracterSpecial(str)
}


console.log(password("@#$%^&*()-_+={}[]|\:;?/>.<,")) //; ===> false