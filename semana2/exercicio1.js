/*
 Crie um algoritmo que tem como entrada um array de números e imprime no console a soma dos 
elementos sendo cada um deles multiplicado pelo seu índice.
    Exemplo entrada: [5, 9, 10, 6]
    Exemplo Saída: 47
*/

let array = [5, 9, 10, 6]

for (let index = 0; index <= 3; index++) {
    const element = array[index];
    console.log(array * index)
}