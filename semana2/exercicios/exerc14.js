/*
Dado um array de números, faça um programa queencontre o menor elemento deste array e sua posição.
 Mostre as informações encontradas noconsole.
Exemplo de Entrada:[1,2,3,4,-5,6,7,8,9,10]
Exemplo de Saída:
Menor valor: -5
Posição: 4
*/

const arrayNumber = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10];
let smallValue = 0;
let position = 0;

for (i = 0; i < arrayNumber.length; i++) {
  if (arrayNumber[i] <= smallValue) {
    console.log(`Menor Valor: ${arrayNumber[i]}`);

    position = i;
  }
}
console.log(`Posição: ${position}`);
