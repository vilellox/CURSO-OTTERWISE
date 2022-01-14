/* 08 - Tendo como informações um nome e uma idade, faça um programa que
imprima no console se a pessoa é maior ou menor de idade.
Os valores de entrada serão:
Nome;
Idade.
Exemplo de Entrada:
Valter
23
-----------------
Juliana
12
Exemplo de Saída:
Valter é maior de idade.
-----------------
Juliana é menor de idade. */

let nome = "Juliana"
let idade = 12

if(idade <= 17) {
    console.log(nome + " é menor de idade.")
} else {
    console.log(nome + " é maior de idade")
}

