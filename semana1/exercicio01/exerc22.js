/*
Pegue um valor de entrada e calcule o menor número de notas possíveis
(cédulas) no qual o valor pode ser decomposto. As notas consideradas são de
100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas
necessárias.
*/





function print(x){
    let x = 234
    let cem = Math.floor(x / 100)   
    let resto = x % 100 
    let cinq = Math.floor(resto / 50)
    resto = resto % 50
    let vinte = Math.floor(resto / 20)
    resto = resto % 20
    let dez = Math.floor(resto / 10)
    resto = resto % 10
    let cinco = Math.floor(resto / 5)
    resto = (resto % 5)
    let dois = Math.floor(resto / 2)
    resto = resto % 2
    let um = Math.floor(resto / 1)
    
        console.log(cem + " notas de R$ 100,00")
        console.log(cinq + " notas de R$ 50,00")
        console.log(vinte + " notas de R$ 20,00")
        console.log(dez + " notas de R$ 10,00")
        console.log(cinco + " notas de R$ 5,00")
        console.log(dois + " notas de R$ 2,00")
        console.log(um + " notas de R$ 1,00")
    }

print(x)

