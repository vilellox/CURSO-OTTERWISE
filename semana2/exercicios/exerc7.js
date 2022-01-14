/*
Dado um array de números, mostre quantos valores são pares, quantos são
ímpares, quantos são positivos e quantos são negativos.
Exemplo de Entrada:
[-5,0,-3,-4,12]
Exemplo de Saída:
3 valor(es) par(es)
2 valor(es) impar(es)
1 valor(es) positivo(s)
3 valor(es) negativo(s)
*/

let numeros = [-5, 0, -3, -4, 12]
let par = 0
let impar = 0
let positivo = 0
let negativo = 0

for (let index = 0; index < numeros.length; index++) {
    if(numeros[index] % 2 === 0){
        par++ 
        
    } else {
        impar++
        
    } 
        if(numeros > 0) {
            positivo++
        
    } else {
        negativo++
        

    }
}

console.log(par + " valor(es) par(es)")
console.log(impar + " valor(es) impar(es)")
console.log(positivo + " valor(es) positivo(s)")
console.log(negativo + " valor(es) negativo(s)")
