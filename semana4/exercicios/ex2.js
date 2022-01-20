/* Dado um array de números, faça um programa quet este se este array contém um valor específico. 
Tanto o valor quanto o array serão valores de entrada.
Exemplo de Entrada:
[1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127]
9
Exemplo de Saída:
O valor foi encontrado no Array
*/


const numbers = [1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127]
const position = 9

const filteredArray = numbers.filter((number) => {
    return number === position
})

console.log(filteredArray.join("O valor foi encontrado no Array"))




