/*Crie um algoritmo que tem como entrada um número e imprime a sua
tabuada do 1 ao 10.
Exemplo Entrada:
5
*/

function tabuada(number) {
    for (let index = 1; index <= 10; index++) {
    
        console.log(`${number} x ${index} = ${number * index}`)
        
    }

}

tabuada(31265)