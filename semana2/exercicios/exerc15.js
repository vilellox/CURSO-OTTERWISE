/* 
15 -Dado o array de objetos abaixo, faça um programaque calcule a médiaaritmética dos estudantes
 e imprima no console os nomes dos estudantesaprovados. A média de aprovação é 7.0.
 Os valores de entrada serão:Array de Objetos;
 Exemplo de Entrada:
 [
    {nome: 'Marcos', notas: [10, 7, 2]},
 {nome: 'Michele', notas: [10, 10, 10]},
 {nome: 'Pedro', notas: [3, 10, 9]},
 {nome: 'Andressa', notas: [6, 6, 8]},
 {nome: 'Cristiana', notas: [7, 9, 2]}
]
 
 Exemplo de Saída: Michel e Pedro
 */

 const arrayObject = [
   { nome: "Marcos", notas: [10, 7, 2] },
   { nome: "Michele", notas: [10, 10, 10] },
   { nome: "Pedro", notas: [3, 10, 9] },
   { nome: "Andressa", notas: [6, 6, 8] },
   { nome: "Cristiana", notas: [7, 9, 2] },
 ];
 
 let result = 0;
 let media = 0;
 
 for (i = 0; i < arrayObject.length; i++) {
   for (i2 = 0; i2 < arrayObject[i].notas.length; i2++) {
     result = result + arrayObject[i].notas[i2];
   }
   media = result / arrayObject[i].notas.length;
   result = 0;
  
   if (media > 7.0) {
     console.log(`${arrayObject[i].nome}`);
   }
 }