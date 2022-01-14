/* 
 Escreva um programa que receba como entrada dois valores. Após, o
programa deve mostrar uma mensagem “São Múltiplos” ou “Não são Múltiplos”,
indicando se os valores recebidos como entrada são múltiplos entre si.
*/

let value1 = 4
let value2 = 14

if (value1 % value2 === 0 || value2 % value1 === 0) {
    console.log("são múltiplos") 
} else {
    console.log("não são múltiplos")
}