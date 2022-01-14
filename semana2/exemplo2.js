// Crie um algoritmo que imprime todos os valores 
// um array qualquer, menos o ultimo elemento. 

const ceva = ["brahma", "skol", "bohemia", "emporio"]

for (let index = 0; index < ceva.length; index++) {
    if(index !== ceva.length -1){
        const element = ceva[index]
        console.log(element)
    }
}
