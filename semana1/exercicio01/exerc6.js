/* Uma imobiliária paga às pessoas corretoras de imóveis um salário fixo por
mês e uma comissão de acordo com o valor de vendas realizado por elas. Faça
um programa que calcule e imprima no console o valor total recebido pela
pessoa corretora de imóveis no mês.
Os valores de entrada serão:
Salário Fixo;
Valor total vendido;
Porcentagem da comissão.
Exemplos de Entrada 1:
2000
30000
1
Exemplos de Entrada 2:
5000
100000
10
*/

let salarioFixo = 5000
let valorTotalVend = 100000
let porcentComiss = 10

let comissao = valorTotalVend / porcentComiss



console.log(salarioFixo + comissao)

