/* 09 - Tendo como informação dois números, faça um programa que imprima na
tela qual deles é o MAIOR e qual deles é o menor. Caso os números sejam
iguais, informe que eles são iguais.
Os valores de entrada serão:
Número 1;
Número 2;
Exemplo de Entrada:
2
5
-----------------
7
7
*/

let valueOne = 7
let valueTwo = 7

if (valueOne > valueTwo) {
    console.log(valueOne + " é maior que " + valueTwo)
} else if (valueOne < valueTwo) {
    console.log(valueOne + " é menor que " + valueTwo)
} else {
    console.log("são iguais")

}


