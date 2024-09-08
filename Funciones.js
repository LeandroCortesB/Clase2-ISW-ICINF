/*
1. Crea una función que reciba un string y retorne el string en mayúsculas.
2. Crea una función que reciba un string y retorne el string en minúsculas.
3. Crear una función que reciba como parámetro 2 números y los reste.
4. Crear una función que reciba como parámetro 2 números y los divida.
5. Crear una función que reciba como parámetro 2 números y los multiplique.
6. Crear una función que reciba un string y devuelva la longitud del string.
*/
const x = "hola MUNDO"
const number1 = 20
const number2 = 40

function Mayuscula(x){
    return x.toUpperCase()
}
Mayuscula(x)
function minúsculas(x){
    return x.toLowerCase()
}
minúsculas(x)

function Resta(number1,number2){
    return number1-number2
}
function Multiplicación(number1,number2){
    return number1*number2
}
function División(number1,number2){
    return number1/number2
}
console.log(Resta(number1,number2))
console.log(Multiplicación(number1,number2))
console.log(División(number1,number2))

function tamaño(x){
    return x.length
}
console.log(Mayuscula(x))
console.log(minúsculas(x))
console.log(Resta(number1,number2))
console.log(Multiplicación(number1,number2))
console.log(División(number1,number2))
console.log(tamaño(x))