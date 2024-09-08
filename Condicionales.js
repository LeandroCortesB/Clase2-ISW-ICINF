/*1. Imprimir en consola el número mayor de los tres.
2. Imprimir en consola el número menor de los tres.
3. Imprimir en consola si el numero1 es par o impar.
4. Imprimir en consola si el numero2 es par o impar.
5. Imprimir en consola si el numero3 es par o impar.
6. Imprimir en consola si el numero1 es múltiplo de 5.
7. Imprimir en consola si el numero2 es múltiplo de 5.
8. Imprimir en consola si el numero3 es múltiplo de 5.*/
const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

if(numero1>numero2){
    if(numero1>numero3){
        console.log(numero1)
    }else{
        console.log(numero3)
    }
}else{
    if(numero2>numero3){
        console.log(numero2)
    }else{
        console.log(numero3)
    }
}

if(numero1<numero2){
    if(numero1<numero3){
        console.log(numero1)
    }else{
        console.log(numero3)
    }
}else{
    if(numero2<numero3){
        console.log(numero2)
    }else{
        console.log(numero3)
    }
}

if(numero1%2 == 0){
    console.log(numero1," es par")
}else{
    console.log(numero1," es impar")
}

if(numero2%2 == 0){
    console.log(numero2," es par")
}else{
    console.log(numero2," es impar")
}

if(numero3%2 == 0){
    console.log(numero3," es par")
}else{
    console.log(numero3," es impar")
}


if(numero1%5 == 0){
    console.log(numero1," es multiplo de 5")
}else{
    console.log(numero1," no es multiplo de 5")
}

if(numero2%5 == 0){
    console.log(numero2," es multiplo de 5")
}else{
    console.log(numero2," no es multiplo de 5")
}

if(numero3%5 == 0){
    console.log(numero3," es multiplo de 5")
}else{
    console.log(numero3," no es multiplo de 5")
}
