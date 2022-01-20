/*
4 - [REFATORAÇÃO] Crie um algoritmo que tem como entrada um array de notas,
e imprime no console a média aritmética dessas notas.
OBS: Para melhorar a resolução desse problema, monte um programa que
retorna a média aritmética independente do tamanho do array.
Exemplo Entrada:
[6, 8, 7]
*/

const numbers = [6, 8, 7]

const average = numbers.reduce((acc, num) => {
    return acc + num / 3 

}, 0)

console.log(average)