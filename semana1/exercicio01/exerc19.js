/*
9 - Crie uma função chamada checkSignal que possui um parâmetro e imprime
no console:
"x é positivo" se o número for positivo;
"x é negativo" se o número for negativo.
x deve ser substituído pelo número passado como argumento.
Exemplo de Entrada:
10
-----------------
-5
Exemplo de Saída:
10 é positivo
-----------------
-5 é negativo
*/

let x = -5


function checkSignal (x) {
    if (x > 0) {
        return "x é positivo"
    } else if (x < 0) {
        return "x é negativo"
    }
}

console.log(checkSignal(x))