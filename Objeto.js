/*1. **Crear un objeto de persona**: Define un objeto llamado "persona" que tenga
propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.

2. Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y 
 indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es. */


const persona={
    nombre: "Leandro",
    edad:21,
    genero:"🍈"
}
console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.genero)

const caja={
    cuadernos:10,
    lapices:15,
    papel:5,
    fotografias:6,
    BuenEstado:true
}
console.log(caja)
console.log(caja.cuadernos," Tipo: ",typeof caja.cuadernos)
console.log(caja.lapices," Tipo: ",typeof caja.lapices)
console.log(caja.papel," Tipo: ",typeof caja.papel)
console.log(caja.fotografias," Tipo: ",typeof caja.fotografias)
console.log(caja.BuenEstado," Tipo: ",typeof caja.BuenEstado)