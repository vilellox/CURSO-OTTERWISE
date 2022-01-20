/* 
7-[REFATORAÇÃO]Dado um array de números como entrada,faça umprograma que multiplique
todos os valores por 10. OBS: Para melhorar a resolução desse problema, monte um programa
querecebe como parâmetro o valor pelo qual os valores do array devem ser multiplicados.
Exemplo de Entrada:[1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]
*/

let numbers = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]
let multiply  = 10

function multiplica (multiply) {
    for (let index = 0; index < numbers.length; index++) {
        if(numbers[index] === numbers[index]){
            console.log(numbers[index] * multiply)
        } else {
            console.log(numbers[index])
        }
        
    }
}

console.log(multiplica)