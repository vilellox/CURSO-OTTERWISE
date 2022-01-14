/*Tendo como informação dois valores, valor1 e valor2, faça um programa
que imprima os dois valores no console. Após imprimir, troque a informação de
valor1 pela informação do valor2 e imprima no console novamente.
Exemplo de Entrada 1:
3
12
Exemplo de Entrada 2:
25
23
*/

let valor1 = 23
let valor2 = 25
let temp

console.log(valor1)
console.log(valor2)

temp = valor1
valor1 = valor2
valor2 = temp

console.log(valor1)
console.log(valor2)