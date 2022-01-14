/* - Crie uma função chamada calculate que possui três parâmetros. O primeiro
é uma string e os outros dois, números. A string será uma das seguintes opções:
"soma", "subtrai", "multiplica", "divide". A função calculate deve retornar o
resultado da operação (definida pela string) entre os dois números.
Exemplo de Entrada:
"soma"
3
5
-----------------
"divide"
21
7
Exemplo de Saída:
8
-----------------
3
*/

function calculate(operador, number1, number2){
    switch(operador){
        case 'soma': {
            return number1 + number2
        }
        case 'subtrai': {
            return number1 - number2
        }
        case 'multiplica': {
            return number1 * number2
        }
        case 'divide': {
            return number1 / number2
        }
    
    }
}
console.log(calculate("subtrai", 3, 5))
console.log(calculate("divide", 21, 7))