/*
12 - Um banco vai liberar linhas de crédito só para servidores públicos. Caso o(a)
servidor(a) for professor(a) terá uma linha de crédito especial com uma taxa de
juros menor. Crie um algoritmo que possui três valores de entradas: nome
completo (string), servidor (boolean), professor (boolean) e que imprime uma
mensagem dizendo se a pessoa tem acesso a linha de crédito, se sim, qual linha
de crédito.
Exemplo de Entrada 1:
Nome Completo: Juca da Silva
Servidor: false
Professor: true
*/

const nomeComplet = "Marcia"

const servidor = true
const professor = true

if (servidor) {
    console.log(nomeComplet + ", você tem acesso a nossa linha de crédito para servidores.")
} else {
    console.log(nomeComplet + ", infelizmente voce nao tem crédito")
}


