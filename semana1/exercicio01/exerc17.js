/* 
Faça um programa que receberá a hora inicial e a hora final de um jogo. A
seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um
dia e terminar em outro, tendo uma duração máxima de 24 horas.
Ex: Início: 22 - Término: 06 - Tempo de Duração: 8 horas
*/

let inicio = 22
let fim = 06
let partida 

if (inicio < fim){
    partida = fim - inicio
} else {
    partida = 24 - inicio + fim
}
console.log(partida)