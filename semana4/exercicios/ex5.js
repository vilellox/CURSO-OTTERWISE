/*5 - Escreva um programa para substituir os elementos pares pelo valor “X”.
Exemplo de Entrada:
[1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]
Exemplo de Saída:
[1, -7, -23, “X”, -19, 13, “X”, “X”, “X”, -153, -127] */

const numbers = [10, -7, -23, 27, -19, 13, 14, -8, 52, -153, -256]

const pairs = numbers.map (number => {
    if(number % 2 === 0){
        return "X"
    } else {
        return number
    } })

console.log(pairs)