/*[REFATORAÇÃO]Tendo como informação dois valores,valor1 e valor2, façaum programa que imprima os dois valores no console.
Após imprimir, troque ainformação de valor1 pela informação do valor2 e imprima no consolenovamente.
Exemplo de Entrada 1:
3
12
Exemplo de Entrada 2:
25
23
Exemplo de Saída 1:
Valor 1 = 3
Valor 2 = 12
Valor 1 = 12
Valor 2 = 3
Exemplo de Saída 2:
Valor 1 = 25
Valor 2 = 23
Valor 1 = 23
Valor 2 = 25
*/




function values () {
    
    let valueOne = 25
    let valueTwo = 23
    let temp

    console.log(valueOne)
    console.log(valueTwo)

    temp = valueOne
    valueOne = valueTwo
    valueTwo = temp

    console.log(valueOne)
    console.log(valueTwo)
}

values()