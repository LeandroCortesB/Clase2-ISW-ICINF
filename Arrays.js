/*1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares. */

const numeros = [1, 2, 3, 4, 5]
const palabras = ["pasa "," palabra ",'🍈']

function Suma(c){
    let suma =0;
    for(let i=0; i<c.length;i++){
        suma += c[i]
    }
    return suma
}
function promedio(c){
    let promedio = Suma(c)
    promedio = promedio/c.length
    return promedio
}
function Mayuscula(c){
    let nuevo = []
    for(let i=0; i<c.length;i++){
        nuevo.push(c[i].toUpperCase());
    }
    return nuevo
}
function Pares(c){
 let arreglo = []
 for(let i=0; i<c.length;i++){
    if(c[i]%2 == 0){
        arreglo.push(c[i])
    }
}
 return arreglo
}

console.log(Suma(numeros))
console.log(promedio(numeros))
console.log(Mayuscula(palabras))
console.log(Pares(numeros))

