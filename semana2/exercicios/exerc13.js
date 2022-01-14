/*Dado um array de nomes, 
faça um programa quetenha como entrada umvalor à ser pesquisado e retorne se o nome existe ou não no array.
Exemplo de Entrada:
[‘Juliana’, ‘Pedro’, ‘Regina’, ‘João’, ‘Patrícia’, ‘Gabriel’, ‘Carlos’, ‘Carla’]
‘Carla’
Exemplo de Saída:
O nome Carla existe no Array.
*/

let names = ['Juliana', 'Pedro', 'Regina', 'João', 'Patrícia', 'Gabriel', 'Carlos', 'Carla'];


function findName(name){
   
    for (let index = 0; index <= names.length; index++) {
        if (name === names[index]) {
            return `o nome ${name} existe no array`
        } 
    }
        return `o nome ${name} nao existe no array`
        
    }

    console.log(findName('Juliana'))
