/*
-[REFATORAÇÃO]Dado um array de números, façaum programa que imprimana tela somente os números positivos.
OBS: Para melhorar a resolução desse problema, crie funções que tambémimprimem os números negativos,
 os pares, os ímpares e realize a contagem decada um deles.Os valores de entrada serão:
 Array;
 Exemplo de Entrada:[1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]-----------------
 [-5, -1467, 32, 28, 65, -2, -49, -63, 22, -13, 255 ]
*/

const numbers = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]

function positivo () {
    
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] > 0){
            console.log(numbers[index])
        }
        
        
    }
}
positivo(numbers.length)

function negativos () {
    
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] < 0){
            console.log(numbers[index])
        }
        
        
    }
}
negativos(numbers.length)
//
function pares () {
    
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] % 2 === 0){
            console.log(numbers[index])
        }
        
        
    }
}
pares(numbers.length)
//
function impares () {
    
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] % 2 !== 0){
            console.log(numbers[index])
        }
        
        
    }
}

impares(numbers.length)